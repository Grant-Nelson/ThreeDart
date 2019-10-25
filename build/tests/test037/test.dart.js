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
a[c]=function(){a[c]=function(){H.o3(b)}
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
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={jY:function jY(){},
je:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kD:function(){return new P.hf("No element")},
cY:function(a,b,c,d){if(c-b<=32)H.mx(a,b,c,d)
else H.mw(a,b,c,d)},
mx:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.W()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.b.k(a,s,a[q])
s=q}C.b.k(a,s,t)}},
mw:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a_(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a_(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.b(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.b(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.b(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.b(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.b(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.W()
if(a1>0){p=q
q=r
r=p}C.b.k(a2,d,u)
C.b.k(a2,b,s)
C.b.k(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.b.k(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.b.k(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.y(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.M()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.W()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.M()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.W()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.W()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.b.k(a2,a3,a2[a1])
C.b.k(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.b.k(a2,a4,a2[a1])
C.b.k(a2,a1,r)
H.cY(a2,a3,o-2,a5)
H.cY(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.y(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.y(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.b.k(a2,m,a2[o])
C.b.k(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.M()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.b.k(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.b.k(a2,o,a2[n])
C.b.k(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.b.k(a2,m,a2[n])
C.b.k(a2,n,l)}n=j
break}}}H.cY(a2,o,n,a5)}else H.cY(a2,o,n,a5)},
N:function N(a){this.a=a},
eN:function eN(){},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fi:function fi(a,b,c){this.a=a
this.b=b
this.$ti=c},
fj:function fj(a,b){this.a=null
this.b=a
this.c=b},
ij:function ij(a,b,c){this.a=a
this.b=b
this.$ti=c},
ik:function ik(a,b){this.a=a
this.b=b},
cw:function cw(){},
hR:function hR(){},
dc:function dc(){},
lY:function(){throw H.c(P.v("Cannot modify unmodifiable Map"))},
eg:function(a){var u,t=H.o5(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nP:function(a){return v.types[a]},
lo:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.M(a).$iw},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.c(H.ac(a))
return u},
bS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mo:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.U(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
bT:function(a){return H.mf(a)+H.lc(H.ce(a),0,null)},
mf:function(a){var u,t,s,r,q,p,o,n=J.M(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$ibq){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.eg(t.length>1&&C.a.F(t,0)===36?C.a.ab(t,1):t)},
mg:function(){if(!!self.location)return self.location.href
return},
kN:function(a){var u,t,s,r,q=J.ad(a)
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mp:function(a){var u,t,s,r=H.d([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ac(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aD(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ac(s))}return H.kN(r)},
kO:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ac(s))
if(s<0)throw H.c(H.ac(s))
if(s>65535)return H.mp(a)}return H.kN(a)},
mq:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cT:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aD(u,10))>>>0,56320|u&1023)}}throw H.c(P.U(a,0,1114111,null,null))},
bk:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mn:function(a){var u=H.bk(a).getFullYear()+0
return u},
ml:function(a){var u=H.bk(a).getMonth()+1
return u},
mh:function(a){var u=H.bk(a).getDate()+0
return u},
mi:function(a){var u=H.bk(a).getHours()+0
return u},
mk:function(a){var u=H.bk(a).getMinutes()+0
return u},
mm:function(a){var u=H.bk(a).getSeconds()+0
return u},
mj:function(a){var u=H.bk(a).getMilliseconds()+0
return u},
i:function(a){throw H.c(H.ac(a))},
b:function(a,b){if(a==null)J.ad(a)
throw H.c(H.by(a,b))},
by:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.ad(a)
if(!(b<0)){if(typeof u!=="number")return H.i(u)
t=b>=u}else t=!0
if(t)return P.H(b,a,s,null,u)
return P.cU(b,s)},
nJ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bl(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bl(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
ac:function(a){return new P.ag(!0,a,null,null)},
nC:function(a){if(typeof a!=="number")throw H.c(H.ac(a))
return a},
c:function(a){var u
if(a==null)a=new P.cQ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lu})
u.name=""}else u.toString=H.lu
return u},
lu:function(){return J.a1(this.dartException)},
r:function(a){throw H.c(a)},
q:function(a){throw H.c(P.aP(a))},
ap:function(a){var u,t,s,r,q,p
a=H.ls(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hE(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hF:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kJ:function(a,b){return new H.fK(a,b==null?null:b.method)},
jZ:function(a,b){var u=b==null,t=u?null:b.method
return new H.f4(a,t,u?null:b.receiver)},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aD(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jZ(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kJ(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lx()
q=$.ly()
p=$.lz()
o=$.lA()
n=$.lD()
m=$.lE()
l=$.lC()
$.lB()
k=$.lG()
j=$.lF()
i=r.a7(u)
if(i!=null)return f.$1(H.jZ(u,i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.jZ(u,i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kJ(u,i))}}return f.$1(new H.hQ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d_()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d_()
return a},
ki:function(a){var u
if(a==null)return new H.dR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dR(a)},
nN:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
nT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nT)
a.$identity=u
return u},
lX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hg().constructor.prototype):Object.create(new H.bB(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.v()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ky(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lT(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ky(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lT:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nP,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kx:H.jO
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lU:function(a,b,c,d){var u=H.jO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ky:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lW(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lU(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.v()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bC
return new Function(r+H.f(q==null?$.bC=H.et("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.v()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bC
return new Function(r+H.f(q==null?$.bC=H.et("self"):q)+"."+H.f(u)+"("+o+");}")()},
lV:function(a,b,c,d){var u=H.jO,t=H.kx
switch(b?-1:a){case 0:throw H.c(H.mu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lW:function(a,b){var u,t,s,r,q,p,o,n=$.bC
if(n==null)n=$.bC=H.et("self")
u=$.kw
if(u==null)u=$.kw=H.et("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lV(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ah
if(typeof u!=="number")return u.v()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.v()
$.ah=u+1
return new Function(n+u+"}")()},
kg:function(a,b,c,d,e,f,g){return H.lX(a,b,c,d,!!e,!!f,g)},
jO:function(a){return a.a},
kx:function(a){return a.c},
et:function(a){var u,t,s,r=new H.bB("self","target","receiver","name"),q=J.jW(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nY:function(a,b){throw H.c(H.lS(a,H.eg(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else u=!0
if(u)return a
H.nY(a,b)},
nL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lS:function(a,b){return new H.eu("CastError: "+P.jU(a)+": type '"+H.f(H.ny(a))+"' is not a subtype of type '"+b+"'")},
ny:function(a){var u,t=J.M(a)
if(!!t.$ibD){u=H.nL(t)
if(u!=null)return H.nZ(u)
return"Closure"}return H.bT(a)},
o3:function(a){throw H.c(new P.eG(a))},
mu:function(a){return new H.h0(a)},
ll:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
ce:function(a){if(a==null)return
return a.$ti},
oE:function(a,b,c){return H.jH(a["$a"+H.f(c)],H.ce(b))},
nO:function(a,b,c,d){var u=H.jH(a["$a"+H.f(c)],H.ce(b))
return u==null?null:u[d]},
lm:function(a,b,c){var u=H.jH(a["$a"+H.f(b)],H.ce(a))
return u==null?null:u[c]},
jb:function(a,b){var u=H.ce(a)
return u==null?null:u[b]},
nZ:function(a){return H.b2(a,null)},
b2:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.eg(a[0].name)+H.lc(a,1,b)
if(typeof a=="function")return H.eg(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.n6(a,b)
if('futureOr' in a)return"FutureOr<"+H.b2("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n6:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b2(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b2(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b2(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b2(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nM(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b2(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lc:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b2(p,c)}return"<"+u.h(0)+">"},
jH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
oC:function(a,b,c){return a.apply(b,H.jH(J.M(b)["$a"+H.f(c)],H.ce(b)))},
oD:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nV:function(a){var u,t,s,r,q=$.ln.$1(a),p=$.j8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ji[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lh.$2(a,q)
if(q!=null){p=$.j8[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ji[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jD(u)
$.j8[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ji[q]=u
return u}if(s==="-"){r=H.jD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lq(a,u)
if(s==="*")throw H.c(P.hP(q))
if(v.leafTags[q]===true){r=H.jD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lq(a,u)},
lq:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kl(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jD:function(a){return J.kl(a,!1,null,!!a.$iw)},
nW:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jD(u)
else return J.kl(u,c,null,null)},
nR:function(){if(!0===$.kk)return
$.kk=!0
H.nS()},
nS:function(){var u,t,s,r,q,p,o,n
$.j8=Object.create(null)
$.ji=Object.create(null)
H.nQ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lr.$1(q)
if(p!=null){o=H.nW(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nQ:function(){var u,t,s,r,q,p,o=C.z()
o=H.bw(C.A,H.bw(C.B,H.bw(C.q,H.bw(C.q,H.bw(C.C,H.bw(C.D,H.bw(C.E(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ln=new H.jf(r)
$.lh=new H.jg(q)
$.lr=new H.jh(p)},
bw:function(a,b){return a(b)||b},
m5:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.L("Illegal RegExp pattern ("+String(p)+")",a,null))},
o1:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ls:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lt:function(a,b,c){var u=H.o2(a,b,c)
return u},
o2:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ls(b),'g'),H.nK(c))},
ez:function ez(){},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fK:function fK(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a){this.a=a},
jK:function jK(a){this.a=a},
dR:function dR(a){this.a=a
this.b=null},
bD:function bD(){},
hm:function hm(){},
hg:function hg(){},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eu:function eu(a){this.a=a},
h0:function h0(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f8:function f8(a,b){this.a=a
this.b=b
this.c=null},
f9:function f9(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
f3:function f3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bu:function(a){return a},
me:function(a){return new Int8Array(a)},
aq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.by(b,a))},
n4:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nJ(a,b,c))
return b},
bN:function bN(){},
aV:function aV(){},
cM:function cM(){},
bO:function bO(){},
cN:function cN(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
cO:function cO(){},
bP:function bP(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
nM:function(a){return J.kE(a?Object.keys(a):[],null)},
o5:function(a){return v.mangledGlobalNames[a]},
nX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kl:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ja:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kk==null){H.nR()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.hP("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ko()]
if(r!=null)return r
r=H.nV(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.ko(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
m4:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ku(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.U(a,0,4294967295,"length",null))
return J.kE(new Array(a),b)},
kE:function(a,b){return J.jW(H.d(a,[b]))},
jW:function(a){a.fixed$length=Array
return a},
M:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.f2.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.ja(a)},
cd:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.ja(a)},
j9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.ja(a)},
lk:function(a){if(typeof a=="number")return J.bI.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bq.prototype
return a},
kh:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bq.prototype
return a},
ee:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.Z)return a
return J.ja(a)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).n(a,b)},
ks:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lk(a).m(a,b)},
ci:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lo(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cd(a).i(a,b)},
jL:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lo(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.j9(a).k(a,b,c)},
lM:function(a,b){return J.kh(a).F(a,b)},
lN:function(a,b,c){return J.ee(a).f8(a,b,c)},
lO:function(a,b,c,d){return J.ee(a).fq(a,b,c,d)},
lP:function(a,b){return J.kh(a).S(a,b)},
jM:function(a,b){return J.lk(a).fE(a,b)},
jN:function(a,b){return J.j9(a).I(a,b)},
lQ:function(a,b,c,d){return J.ee(a).fU(a,b,c,d)},
kt:function(a,b){return J.j9(a).D(a,b)},
bA:function(a){return J.ee(a).gbL(a)},
cj:function(a){return J.M(a).gH(a)},
b6:function(a){return J.j9(a).gU(a)},
ad:function(a){return J.cd(a).gj(a)},
lR:function(a,b){return J.ee(a).hr(a,b)},
a1:function(a){return J.M(a).h(a)},
a:function a(){},
f2:function f2(){},
cB:function cB(){},
cC:function cC(){},
fO:function fO(){},
bq:function bq(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
jX:function jX(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(){},
cA:function cA(){},
cz:function cz(){},
aS:function aS(){}},P={
mJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bx(new P.im(s),1)).observe(u,{childList:true})
return new P.il(s,u,t)}else if(self.setImmediate!=null)return P.nA()
return P.nB()},
mK:function(a){self.scheduleImmediate(H.bx(new P.io(a),0))},
mL:function(a){self.setImmediate(H.bx(new P.ip(a),0))},
mM:function(a){P.k2(C.n,a)},
k2:function(a,b){var u=C.c.a_(a.a,1000)
return P.mP(u<0?0:u,b)},
kW:function(a,b){var u=C.c.a_(a.a,1000)
return P.mQ(u<0?0:u,b)},
mP:function(a,b){var u=new P.dY()
u.dR(a,b)
return u},
mQ:function(a,b){var u=new P.dY()
u.dS(a,b)
return u},
ns:function(){var u,t
for(;u=$.bv,u!=null;){$.cc=null
t=u.b
$.bv=t
if(t==null)$.cb=null
u.a.$0()}},
nx:function(){$.ke=!0
try{P.ns()}finally{$.cc=null
$.ke=!1
if($.bv!=null)$.kr().$1(P.li())}},
nv:function(a){var u=new P.dj(a)
if($.bv==null){$.bv=$.cb=u
if(!$.ke)$.kr().$1(P.li())}else $.cb=$.cb.b=u},
nw:function(a){var u,t,s=$.bv
if(s==null){P.nv(a)
$.cc=$.cb
return}u=new P.dj(a)
t=$.cc
if(t==null){u.b=s
$.bv=$.cc=u}else{u.b=t.b
$.cc=t.b=u
if(u.b==null)$.cb=u}},
kV:function(a,b){var u=$.ae
if(u===C.f)return P.k2(a,b)
return P.k2(a,u.fA(b))},
mA:function(a,b){var u=$.ae
if(u===C.f)return P.kW(a,b)
return P.kW(a,u.cQ(b,P.d5))},
ld:function(a,b,c,d,e){var u={}
u.a=d
P.nw(new P.j3(u,e))},
nt:function(a,b,c,d){var u,t=$.ae
if(t===c)return d.$0()
$.ae=c
u=t
try{t=d.$0()
return t}finally{$.ae=u}},
nu:function(a,b,c,d,e){var u,t=$.ae
if(t===c)return d.$1(e)
$.ae=c
u=t
try{t=d.$1(e)
return t}finally{$.ae=u}},
im:function im(a){this.a=a},
il:function il(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
dY:function dY(){this.c=0},
iM:function iM(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a){this.a=a
this.b=null},
d1:function d1(){},
hj:function hj(){},
d5:function d5(){},
iV:function iV(){},
j3:function j3(a,b){this.a=a
this.b=b},
iC:function iC(){},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function(a,b){return new H.K([a,b])},
kF:function(a,b){return new H.K([a,b])},
m8:function(a){return H.nN(a,new H.K([null,null]))},
m9:function(a){return new P.iz([a])},
k9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mO:function(a,b){var u=new P.dz(a,b)
u.c=a.e
return u},
m3:function(a,b,c){var u,t
if(P.kf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.n])
$.a0.push(a)
try{P.n7(a,u)}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}t=P.kT(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jV:function(a,b,c){var u,t
if(P.kf(a))return b+"..."+c
u=new P.P(b)
$.a0.push(a)
try{t=u
t.a=P.kT(t.a,a,", ")}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kf:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
n7:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.f(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.B()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.B();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
kG:function(a,b,c){var u=P.m7(b,c)
a.D(0,new P.fb(u))
return u},
k0:function(a){var u,t={}
if(P.kf(a))return"{...}"
u=new P.P("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.kt(a,new P.fg(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iz:function iz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
dz:function dz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fb:function fb(a){this.a=a},
fc:function fc(){},
p:function p(){},
ff:function ff(){},
fg:function fg(a,b){this.a=a
this.b=b},
ax:function ax(){},
iN:function iN(){},
fh:function fh(){},
dd:function dd(a,b){this.a=a
this.$ti=b},
iF:function iF(){},
dA:function dA(){},
e3:function e3(){},
mD:function(a,b,c,d){if(b instanceof Uint8Array)return P.mE(!1,b,c,d)
return},
mE:function(a,b,c,d){var u,t,s=$.lH()
if(s==null)return
u=0===c
if(u&&!0)return P.k5(s,b)
t=b.length
d=P.aZ(c,d,t)
if(u&&d===t)return P.k5(s,b)
return P.k5(s,b.subarray(c,d))},
k5:function(a,b){if(P.mG(b))return
return P.mH(a,b)},
mH:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b4(t)}return},
mG:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mF:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b4(t)}return},
lf:function(a,b,c){var u,t,s
for(u=J.cd(a),t=b;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.aa()
if((s&127)!==s)return t-b}return c-b},
kv:function(a,b,c,d,e,f){if(C.c.af(f,4)!==0)throw H.c(P.L("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.L("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.L("Invalid base64 padding, more than two '=' characters",a,b))},
eq:function eq(){},
er:function er(){},
ew:function ew(){},
eB:function eB(){},
eO:function eO(){},
i_:function i_(){},
i1:function i1(){},
iU:function iU(a){this.b=0
this.c=a},
i0:function i0(a){this.a=a},
iT:function iT(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
cf:function(a,b,c){var u=H.mo(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.L(a,null,null))},
m0:function(a){if(a instanceof H.bD)return a.h(0)
return"Instance of '"+H.f(H.bT(a))+"'"},
ma:function(a,b,c){var u,t,s=J.m4(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
k_:function(a,b,c){var u,t=H.d([],[c])
for(u=J.b6(a);u.B();)t.push(u.gJ(u))
if(b)return t
return J.jW(t)},
bU:function(a,b,c){var u
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aZ(b,c,u)
return H.kO(b>0||c<u?C.b.dE(a,b,c):a)}if(!!J.M(a).$ibP)return H.mq(a,b,P.aZ(b,c,a.length))
return P.my(a,b,c)},
my:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.U(b,0,J.ad(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.U(c,b,J.ad(a),q,q))
t=J.b6(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.U(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.U(c,b,s,q,q))
r.push(t.gJ(t))}return H.kO(r)},
ms:function(a){return new H.f3(a,H.m5(a,!1,!0,!1,!1,!1))},
kT:function(a,b,c){var u=J.b6(b)
if(!u.B())return a
if(c.length===0){do a+=H.f(u.gJ(u))
while(u.B())}else{a+=H.f(u.gJ(u))
for(;u.B();)a=a+c+H.f(u.gJ(u))}return a},
hV:function(){var u=H.mg()
if(u!=null)return P.mC(u)
throw H.c(P.v("'Uri.base' is not supported"))},
iS:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lK().b
if(typeof b!=="string")H.r(H.ac(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfT().bM(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cT(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lZ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cq:function(a){if(a>=10)return""+a
return"0"+a},
kA:function(a){return new P.aQ(1000*a)},
jU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m0(a)},
ck:function(a){return new P.ag(!1,null,null,a)},
ku:function(a,b,c){return new P.ag(!0,a,b,c)},
cU:function(a,b){return new P.bl(null,null,!0,a,b,"Value not in range")},
U:function(a,b,c,d,e){return new P.bl(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c){if(0>a||a>c)throw H.c(P.U(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.U(b,a,c,"end",null))
return b}return c},
kQ:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.c(P.U(a,0,null,b,null))},
H:function(a,b,c,d,e){var u=e==null?J.ad(b):e
return new P.f0(u,!0,a,c,"Index out of range")},
v:function(a){return new P.hS(a)},
hP:function(a){return new P.hO(a)},
aP:function(a){return new P.ey(a)},
t:function(a){return new P.ds(a)},
L:function(a,b,c){return new P.eY(a,b,c)},
mb:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kn:function(a){H.nX(a)},
mC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.kY(e<e?C.a.p(a,0,e):a,5,f).gdz()
else if(u===32)return P.kY(C.a.p(a,5,e),0,f).gdz()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.le(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hE()
if(r>=0)if(P.le(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.i(n)
if(m<n)n=m
if(typeof o!=="number")return o.M()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.M()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.M()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a0(a,"..",o)))j=n>o+2&&C.a.a0(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a0(a,"file",0)){if(q<=0){if(!C.a.a0(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.p(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aI(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a0(a,"http",0)){if(t&&p+3===o&&C.a.a0(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aI(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a0(a,"https",0)){if(t&&p+4===o&&C.a.a0(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aI(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.p(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iG(a,r,q,p,o,n,m,k)}return P.mR(a,0,e,r,q,p,o,n,m,k)},
l_:function(a){var u=P.n
return C.b.fY(H.d(a.split("&"),[u]),P.kF(u,u),new P.hY(C.e))},
mB:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hU(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.cf(C.a.p(a,s,t),n,n)
if(typeof p!=="number")return p.W()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.cf(C.a.p(a,s,c),n,n)
if(typeof p!=="number")return p.W()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
kZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hW(a),d=new P.hX(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.S(a,t)
if(p===58){if(t===b){++t
if(C.a.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mB(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aD(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
mR:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mZ(a,b,d)
else{if(d===b)P.bt(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.n_(a,u,e-1):""
s=P.mW(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.i(g)
q=r<g?P.mY(P.cf(C.a.p(a,r,g),new P.iO(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mX(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.kb(a,h+1,i,n):n
return new P.bs(j,t,s,q,p,o,i<c?P.mV(a,i+1,c):n)},
l6:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bt:function(a,b,c){throw H.c(P.L(c,a,b))},
mY:function(a,b){if(a!=null&&a===P.l6(b))return
return a},
mW:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.S(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.a.S(a,u)!==93)P.bt(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mT(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.lb(a,C.a.a0(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kZ(a,t,s)
return C.a.p(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.i(c)
p=b
for(;p<c;++p)if(C.a.S(a,p)===58){s=C.a.b8(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lb(a,C.a.a0(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kZ(a,b,s)
return"["+C.a.p(a,b,s)+q+"]"}return P.n1(a,b,c)},
mT:function(a,b,c){var u,t=C.a.b8(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.i(c)
u=t<c}else u=!1
return u?t:c},
lb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.S(a,u)
if(r===37){q=P.kc(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.p(a,t,u)
if(p)q=C.a.p(a,u,u+3)
else if(q==="%")P.bt(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.p(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.p(a,t,u)
l.a+=P.ka(r)
u+=m
t=u}}}if(l==null)return C.a.p(a,b,c)
if(t<c)l.a+=C.a.p(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
n1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.i(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.S(a,u)
if(q===37){p=P.kc(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
n=C.a.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bt(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.ka(q)
u+=l
t=u}}}}if(s==null)return C.a.p(a,b,c)
if(t<c){n=C.a.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mZ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.l8(C.a.F(a,b)))P.bt(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bt(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.p(a,b,c)
return P.mS(t?a.toLowerCase():a)},
mS:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
n_:function(a,b,c){return P.c9(a,b,c,C.M,!1)},
mX:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.c9(a,b,c,C.u,!0):C.j.hY(d,new P.iP(),P.n).t(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.n0(u,e,f)},
n0:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.n2(a,!u||c)
return P.n3(a)},
kb:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.ck("Both query and queryParameters specified"))
return P.c9(a,b,c,C.l,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.D(0,new P.iQ(new P.iR(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mV:function(a,b,c){return P.c9(a,b,c,C.l,!0)},
kc:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.S(a,b+1)
t=C.a.S(a,p)
s=H.je(u)
r=H.je(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aD(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cT(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.p(a,b,b+3).toUpperCase()
return},
ka:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.u])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fi(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.F(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.F(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.bU(t,0,null)},
c9:function(a,b,c,d,e){var u=P.la(a,b,c,d,e)
return u==null?C.a.p(a,b,c):u},
la:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.i(c)
if(!(o<c))break
c$0:{u=C.a.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kc(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bt(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.ka(u)}}if(m==null)m=new P.P("")
m.a+=C.a.p(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.i(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.a.p(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
l9:function(a){if(C.a.a5(a,"."))return!0
return C.a.d9(a,"/.")!==-1},
n3:function(a){var u,t,s,r,q,p,o
if(!P.l9(a))return a
u=H.d([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.y(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.t(u,"/")},
n2:function(a,b){var u,t,s,r,q,p
if(!P.l9(a))return!b?P.l7(a):a
u=H.d([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gas(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gas(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.l7(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.t(u,"/")},
l7:function(a){var u,t,s,r=a.length
if(r>=2&&P.l8(J.lM(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.p(a,0,u)+"%3A"+C.a.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mU:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ck("Invalid URL encoding"))}}return u},
kd:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.p(a,b,c)
else r=new H.N(C.a.p(a,b,c))}else{r=H.d([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.ck("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.ck("Truncated URI"))
r.push(P.mU(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.i0(!1).bM(r)},
l8:function(a){var u=a|32
return 97<=u&&u<=122},
kY:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.L(m,a,t))}}if(s<0&&t>b)throw H.c(P.L(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gas(l)
if(r!==44||t!==p+7||!C.a.a0(a,"base64",p+1))throw H.c(P.L("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.y.h6(0,a,o,u)
else{n=P.la(a,o,u,C.l,!0)
if(n!=null)a=C.a.aI(a,o,u,n)}return new P.hT(a,l,c)},
n5:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mb(22,new P.iZ(),P.bn),n=new P.iY(o),m=new P.j_(),l=new P.j0(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
le:function(a,b,c,d,e){var u,t,s,r,q,p=$.lL()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
b3:function b3(){},
a2:function a2(a,b){this.a=a
this.b=b},
J:function J(){},
aQ:function aQ(a){this.a=a},
eL:function eL(){},
eM:function eM(){},
bb:function bb(){},
cQ:function cQ(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f0:function f0(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hS:function hS(a){this.a=a},
hO:function hO(a){this.a=a},
hf:function hf(a){this.a=a},
ey:function ey(a){this.a=a},
fN:function fN(){},
d_:function d_(){},
eG:function eG(a){this.a=a},
ds:function ds(a){this.a=a},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
j:function j(){},
f1:function f1(){},
m:function m(){},
O:function O(){},
aW:function aW(){},
a6:function a6(){},
Z:function Z(){},
n:function n(){},
P:function P(a){this.a=a},
hY:function hY(a){this.a=a},
hU:function hU(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a,b){this.a=a
this.b=b},
bs:function bs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(){},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(){},
iY:function iY(a){this.a=a},
j_:function j_(){},
j0:function j0(){},
iG:function iG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
it:function it(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
nF:function(a){var u,t=J.M(a)
if(!!t.$iaw){u=t.gcT(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.e2(a.data,a.height,a.width)},
nE:function(a){if(a instanceof P.e2)return{data:a.a,height:a.b,width:a.c}
return a},
aJ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kF(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
nD:function(a){var u={}
a.D(0,new P.j4(u))
return u},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
dV:function dV(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(){},
eW:function eW(){},
iy:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iB:function iB(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
f6:function f6(){},
aX:function aX(){},
fL:function fL(){},
fS:function fS(){},
hk:function hk(){},
k:function k(){},
b_:function b_(){},
hD:function hD(){},
dx:function dx(){},
dy:function dy(){},
dI:function dI(){},
dJ:function dJ(){},
dT:function dT(){},
dU:function dU(){},
e0:function e0(){},
e1:function e1(){},
bn:function bn(){},
em:function em(){},
en:function en(){},
eo:function eo(a){this.a=a},
ep:function ep(){},
b7:function b7(){},
fM:function fM(){},
dk:function dk(){},
cW:function cW(){},
he:function he(){},
dP:function dP(){},
dQ:function dQ(){}},W={
jQ:function(){var u=document.createElement("canvas")
return u},
jT:function(a){return"wheel"},
kC:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
m2:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.b4(u)}return s},
ix:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l5:function(a,b,c,d){var u=W.ix(W.ix(W.ix(W.ix(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.lg(new W.iv(c),W.h)
if(u!=null&&!0)J.lO(a,b,u,!1)
return new W.iu(a,b,u,!1)},
lg:function(a,b){var u=$.ae
if(u===C.f)return a
return u.cQ(a,b)},
l:function l(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
b8:function b8(){},
b9:function b9(){},
aM:function aM(){},
eC:function eC(){},
E:function E(){},
bE:function bE(){},
eD:function eD(){},
a7:function a7(){},
ai:function ai(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
cs:function cs(){},
ct:function ct(){},
eJ:function eJ(){},
eK:function eK(){},
ir:function ir(a,b){this.a=a
this.b=b},
T:function T(){},
h:function h(){},
e:function e(){},
aj:function aj(){},
bF:function bF(){},
eT:function eT(){},
eX:function eX(){},
av:function av(){},
f_:function f_(){},
bH:function bH(){},
aw:function aw(){},
be:function be(){},
bi:function bi(){},
fd:function fd(){},
fx:function fx(){},
bL:function bL(){},
fy:function fy(){},
fz:function fz(a){this.a=a},
fA:function fA(){},
fB:function fB(a){this.a=a},
az:function az(){},
fC:function fC(){},
am:function am(){},
iq:function iq(a){this.a=a},
B:function B(){},
cP:function cP(){},
aC:function aC(){},
fP:function fP(){},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
h1:function h1(){},
aD:function aD(){},
hb:function hb(){},
aE:function aE(){},
hc:function hc(){},
aF:function aF(){},
hh:function hh(){},
hi:function hi(a){this.a=a},
an:function an(){},
aG:function aG(){},
ao:function ao(){},
hn:function hn(){},
ho:function ho(){},
hy:function hy(){},
aH:function aH(){},
bm:function bm(){},
hB:function hB(){},
hC:function hC(){},
b0:function b0(){},
hZ:function hZ(){},
ih:function ih(){},
b1:function b1(){},
c0:function c0(){},
is:function is(){},
dm:function dm(){},
iw:function iw(){},
dF:function dF(){},
iH:function iH(){},
iK:function iK(){},
iu:function iu(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iv:function iv(a){this.a=a},
G:function G(){},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dl:function dl(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
c5:function c5(){},
c6:function c6(){},
dN:function dN(){},
dO:function dO(){},
dS:function dS(){},
dW:function dW(){},
dX:function dX(){},
c7:function c7(){},
c8:function c8(){},
dZ:function dZ(){},
e_:function e_(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){}},T={
X:function(a){var u=new T.h2()
u.dK(a)
return u},
ei:function ei(){},
cy:function cy(){},
cH:function cH(){},
aB:function aB(){this.a=null},
h2:function h2(){this.a=null},
d3:function d3(){},
hp:function hp(){},
ht:function ht(){var _=this
_.y=_.x=_.r=_.d=_.c=_.b=_.a=null},
hu:function hu(a){var _=this
_.a=a
_.e=_.d=_.b=null},
hv:function hv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c}},R={d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},d7:function d7(a){this.b=a
this.c=null},hz:function hz(){this.c=this.b=this.a=null},d9:function d9(a){this.b=a
this.a=this.c=null}},O={
jR:function(a){var u=new O.aN([a])
u.bj(a)
return u},
aN:function aN(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bK:function bK(){this.b=this.a=null},
cI:function cI(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
fu:function fu(){},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(){},
fl:function fl(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ak:function ak(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fo:function fo(){var _=this
_.e=_.d=_.c=_.b=null},
fp:function fp(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fq:function fq(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d2:function d2(){}},E={
kB:function(){var u,t=new E.au()
t.a=""
t.b=!0
u=O.jR(E.au)
t.y=u
u.b2(t.gh7(),t.gha())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sce(0,null)
t.sdu(null)
t.saX(null)
return t},
mt:function(a,b){var u=new E.fV(a)
u.dJ(a,b)
return u},
mz:function(a,b,c,d,e){var u,t,s=J.M(a)
if(!!s.$ib9)return E.kU(a,!0,!0,!0,!1)
u=W.jQ()
t=u.style
t.width="100%"
t.height="100%"
s.gbL(a).l(0,u)
return E.kU(u,!0,!0,!0,!1)},
kU:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d4(),p=C.i.cc(a,"webgl2",P.m8(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.r(P.t("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mt(p,a)
u=new T.hu(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.de(a)
t=new X.f5()
t.c=new X.a8(!1,!1,!1)
t.d=P.m9(P.u)
u.b=t
t=new X.fD(u)
t.f=0
t.r=V.aY()
t.x=V.aY()
t.ch=t.Q=1
u.c=t
t=new X.fe(u)
t.r=0
t.x=V.aY()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hA(u)
t.f=V.aY()
t.r=V.aY()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.d([],[[P.d1,P.Z]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.gev(),!1))
u.z.push(W.R(a,"focus",u.geB(),!1))
u.z.push(W.R(a,"blur",u.gem(),!1))
u.z.push(W.R(s,"keyup",u.geF(),!1))
u.z.push(W.R(s,"keydown",u.geD(),!1))
u.z.push(W.R(a,"mousedown",u.geJ(),!1))
u.z.push(W.R(a,"mouseup",u.geN(),!1))
u.z.push(W.R(a,r,u.geL(),!1))
t=u.z
W.jT(a)
W.jT(a)
t.push(W.R(a,W.jT(a),u.geP(),!1))
u.z.push(W.R(s,r,u.gex(),!1))
u.z.push(W.R(s,"mouseup",u.gez(),!1))
u.z.push(W.R(s,"pointerlockchange",u.geR(),!1))
u.z.push(W.R(a,"touchstart",u.gf3(),!1))
u.z.push(W.R(a,"touchend",u.gf_(),!1))
u.z.push(W.R(a,"touchmove",u.gf1(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a2(Date.now(),!1)
q.db=0
q.cH()
return q},
es:function es(){},
au:function au(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
d4:function d4(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hx:function hx(a){this.a=a}},Z={
k8:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bu(c)),35044)
a.bindBuffer(b,null)
return new Z.di(b,u)},
ab:function(a){return new Z.aI(a)},
di:function di(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ii:function ii(a){this.a=a},
cn:function cn(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
F:function(){var u=new D.bc()
u.d=0
return u},
ev:function ev(){},
bc:function bc(){var _=this
_.d=_.c=_.b=_.a=null},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
W:function W(){this.b=null},
bg:function bg(){this.b=null},
bh:function bh(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ba:function ba(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a3:function a3(){},
cE:function cE(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fQ:function fQ(){},
hd:function hd(){}},X={co:function co(a,b){this.a=a
this.b=b},cD:function cD(a,b){this.a=a
this.b=b},f5:function f5(){var _=this
_.d=_.c=_.b=_.a=null},cG:function cG(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fe:function fe(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},aA:function aA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fD:function fD(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bM:function bM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fR:function fR(){},d8:function d8(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hA:function hA(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},de:function de(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m1:function(a){var u=new X.eZ(),t=new V.aO(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kS
if(t==null){t=V.kR(0,0,1,1)
$.kS=t}u.r=t
return u},
jP:function jP(){},
eZ:function eZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cR:function cR(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hl:function hl(){}},V={
o6:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.af(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.a8("null",c)
return C.a.a8(C.d.dv(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bz:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.a8(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
km:function(a){return C.d.hx(Math.pow(2,C.J.aV(Math.log(H.nC(a))/Math.log(2))))},
cL:function(){var u=$.kI
return u==null?$.kI=V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
al:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kH:function(a,b,c){var u=c.q(0,Math.sqrt(c.C(c))),t=b.ap(u),s=t.q(0,Math.sqrt(t.C(t))),r=u.ap(s),q=new V.x(a.a,a.b,a.c),p=s.P(0).C(q),o=r.P(0).C(q),n=u.P(0).C(q)
return V.al(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aY:function(){var u=$.kL
return u==null?$.kL=new V.a9(0,0):u},
kM:function(){var u=$.bR
return u==null?$.bR=new V.Q(0,0,0):u},
kR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cV(a,b,c,d)},
c_:function(){var u=$.l3
return u==null?$.l3=new V.x(0,0,0):u},
mI:function(){var u=$.i2
return u==null?$.i2=new V.x(-1,0,0):u},
k6:function(){var u=$.i3
return u==null?$.i3=new V.x(0,1,0):u},
l4:function(){var u=$.i4
return u==null?$.i4=new V.x(0,0,1):u},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a){this.a=a},
cK:function cK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ay:function ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function(a){P.mA(C.H,new V.jE(a))},
kP:function(a){var u=new V.fT(a),t=document.getElementById(a)
u.c=t
if(t==null)H.r("Failed to find "+a+" for RadioGroup")
return u},
mv:function(a){var u=new V.h7()
u.dM(a,!0)
return u},
jE:function jE(a){this.a=a},
fT:function fT(a){this.a=a
this.c=null},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(){this.b=this.a=null},
h9:function h9(a){this.a=a},
h8:function h8(a){this.a=a},
hq:function hq(a,b){this.a=a
this.c=null
this.d=b},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(){}},U={
jS:function(){var u=new U.ex()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kz:function(a){var u=new U.cp()
u.a=a
return u},
ex:function ex(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
df:function df(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cu:function cu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mc:function(a,b){var u=a.aU,t=new A.fk(b,u)
t.dL(b,u)
t.dI(a,b)
return t},
md:function(a,b,c,d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="MaterialLight_"+a0.gae(a0)+a1.gae(a1)+a2.gae(a2)+a3.gae(a3)+a4.gae(a4)+a5.gae(a5)+a6.gae(a6)+a7.gae(a7)+a8.gae(a8)+"_"
f+=a?"1":"0"
f+=b?"1":"0"
f+=c?"1":"0"
f=f+"0_"+e
u=a9.length
if(u>0){f+="_Dir"
for(t=0;t<a9.length;a9.length===u||(0,H.q)(a9),++t)f+="_"+H.f(a9[t].a)}u=b0.length
if(u>0){f+="_Point"
for(t=0;t<b0.length;b0.length===u||(0,H.q)(b0),++t)f+="_"+H.f(b0[t].a)}u=b1.length
if(u>0){f+="_Spot"
for(t=0;t<b1.length;b1.length===u||(0,H.q)(b1),++t)f+="_"+H.f(b1[t].a)}for(u=a9.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=a9[t].b
for(u=b0.length,t=0;t<u;++t,r=!0)s+=b0[t].b
for(q=b1.length,t=0;t<q;++t,r=!0)s+=b1[t].b
if(!a6.a)q=!1
else q=!0
if(!q)if(!a7.a)p=!1
else p=!0
else p=!0
if(!a1.a)q=!1
else q=!0
if(!q){if(!a2.a)q=!1
else q=!0
if(!q){if(!a3.a)q=!1
else q=!0
if(!q)if(!a4.a)q=!1
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a4.a
if(q)n=!1
else n=!0
m=n||u>0||p
if(!a2.a)u=!1
else u=!0
if(!u){if(!a3.a)u=!1
else u=!0
if(!u){if(q)u=!1
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a5.a)u=!1
else u=!0
k=u||p}else k=!0
if(!a5.a)j=!1
else j=!0
i=e>0
h=k||j||m||!1
g=$.at()
if(k){u=$.af()
g=new Z.aI(g.a|u.a)}if(j){u=$.as()
g=new Z.aI(g.a|u.a)}if(i){u=$.ar()
g=new Z.aI(g.a|u.a)}return new A.fn(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,s,p,l,p,r,h,!0,!1,!1,o,r,m,k,j,!1,!1,i,!1,!1,c,!1,e,f.charCodeAt(0)==0?f:f,g)},
j1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
j2:function(a,b,c){var u
A.j1(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.jI(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
nb:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j1(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
n8:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j2(b,t,"ambient")
b.a+="\n"},
n9:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"diffuse")
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
nc:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"invDiffuse")
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
ni:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j2(b,t,"specular")
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
ne:function(a,b){var u,t,s
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
ng:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j1(b,t,"reflect")
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
nh:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j1(b,t,"refract")
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
na:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.jI(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aa()
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
o=H.d([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)m.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.t(m," + ")+");\n"}else c.a+="   highLight = "+C.b.t(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.t(o," + ")+");\n"
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
nf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.jI(t)
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
if(typeof u!=="number")return u.aa()
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
l=H.d([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.t(l," * ")+";\n"
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
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.d([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.t(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.t(l," + ")+");\n"
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
nj:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.jI(t)
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
if(typeof u!=="number")return u.aa()
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
j=H.d([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.t(j," * ")+";\n"
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
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.d([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.t(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.t(j," + ")+");\n"
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
nd:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.n])
if(!a.b.a)u=!1
else u=!0
if(u)t.push("ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)t.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.t(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nk:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
A.nb(a,j)
A.n8(a,j)
A.n9(a,j)
A.nc(a,j)
A.ni(a,j)
t=a.cy
if(t){r=j.a+="// === Enviromental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ng(a,j)
A.nh(a,j)}A.ne(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.na(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nf(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.nj(a,q[o],j)
A.nd(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.n])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].h(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}if(a.cx<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.t(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nl:function(a,b){var u,t,s
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
nn:function(a,b){var u
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
nm:function(a,b){var u
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
np:function(a,b){var u,t
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
nq:function(a,b){var u,t
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
no:function(a,b){var u
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
nr:function(a,b){var u
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
jI:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ab(a,1)},
k3:function(a,b,c,d,e){var u=new A.hH(a,c,e)
u.f=d
P.ma(d,0,P.u)
return u},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a,b){var _=this
_.hK=_.hJ=_.cW=_.cV=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hX=_.hW=_.hV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.bP=_.hU=_.hT=_.d2=_.hS=_.hR=_.d1=_.d0=_.hQ=_.hP=_.d_=_.cZ=_.hO=_.hN=_.cY=_.hM=_.hL=_.cX=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cr:function cr(a,b){this.a=a
this.b=b},
cS:function cS(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aU=b3
_.cV=b4},
bW:function bW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bY:function bY(a,b,c,d,e,f,g,h,i,j){var _=this
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
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cX:function cX(){},
da:function da(){},
hM:function hM(a){this.a=a},
db:function db(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
bo:function bo(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lj:function(a,b,c){var u=null,t=F.k1()
F.ca(t,u,b,c,a,1,0,0,1)
F.ca(t,u,b,c,a,0,1,0,3)
F.ca(t,u,b,c,a,0,0,1,2)
F.ca(t,u,b,c,a,-1,0,0,0)
F.ca(t,u,b,c,a,0,-1,0,0)
F.ca(t,u,b,c,a,0,0,-1,3)
t.a2()
return t},
iX:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.W()
return(u>0?t+4:t)*2},
ca:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.x(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.x(u+a3,t+a1,s+a2)
q=new V.x(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.x(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iX(i)
l=F.iX(j.b)
k=F.ef(d,a0,new F.iW(j,F.iX(j.c),F.iX(j.d),l,m,c),b)
if(k!=null)a.bb(k)},
nG:function(a,b,c,d){return F.nH(!1,!1,c,new F.j5(1,1),d)},
nH:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.ef(c,e,new F.j7(d),null)
if(u==null)return
u.a2()
u.b5()
return u},
nU:function(a,b){var u=F.ef(a,b,new F.jj(),null)
u.d.bd()
u.a2()
u.b5()
return u},
o0:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jF()
t=F.lj(a,new F.jG(s,1),b)
t.b5()
return t},
o4:function(a,b){return F.nI(b,a,0.5,1,new F.jJ())},
nI:function(a,b,c,d,e){var u=F.ef(a,b,new F.j6(e,d,b,c),null)
if(u==null)return
u.a2()
u.b5()
return u},
kj:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jc()
return F.ef(b,a,new F.jd(t),null)},
ef:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.k1()
t=H.d([],[F.br])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.k7(g,g,new V.aO(p,0,0,1),g,g,new V.a9(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bN(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.k7(g,g,new V.aO(j,i,h,1),g,g,new V.a9(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bN(d))}}u.d.fs(a+1,b+1,t)
return u},
cv:function(a,b,c){var u=new F.bd(),t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.bE(a)
u.bF(b)
u.fe(c)
u.a.a.d.b.push(u)
u.a.a.Y()
return u},
m6:function(a,b){var u=new F.bJ(),t=a.a
if(t==null)H.r(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.r(P.t("May not create a line with vertices attached to different shapes."))
u.bE(a)
u.bF(b)
u.a.a.c.b.push(u)
u.a.a.Y()
return u},
k1:function(){var u=new F.h3(),t=new F.i5(u)
t.b=!1
t.c=H.d([],[F.br])
u.a=t
t=new F.h6(u)
t.b=H.d([],[F.bQ])
u.b=t
t=new F.h5(u)
t.b=H.d([],[F.bJ])
u.c=t
t=new F.h4(u)
t.b=H.d([],[F.bd])
u.d=t
u.e=null
return u},
k7:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.br(),r=new F.id()
r.b=H.d([],[F.bQ])
s.b=r
r=new F.i9()
u=[F.bJ]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.i6()
u=[F.bd]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.kp()
s.e=0
r=$.at()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.af().a)!==0?e:t
s.x=(u&$.as().a)!==0?b:t
s.y=(u&$.aK().a)!==0?f:t
s.z=(u&$.aL().a)!==0?g:t
s.Q=(u&$.kq().a)!==0?c:t
s.ch=(u&$.b5().a)!==0?i:0
s.cx=(u&$.ar().a)!==0?a:t
return s},
iW:function iW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
j5:function j5(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a},
jj:function jj(){},
jF:function jF(){},
jG:function jG(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(){},
jd:function jd(a){this.a=a},
bd:function bd(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eS:function eS(){},
ha:function ha(){},
bJ:function bJ(){this.b=this.a=null},
f7:function f7(){},
hG:function hG(){},
bQ:function bQ(){this.a=null},
h3:function h3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a
this.b=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(a){this.a=a
this.b=null},
br:function br(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){this.a=a},
ie:function ie(a){this.a=a},
i5:function i5(a){this.a=a
this.c=this.b=null},
i6:function i6(){this.d=this.c=this.b=null},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){this.c=this.b=null},
ib:function ib(){},
ia:function ia(){},
ic:function ic(){},
fJ:function fJ(){},
id:function id(){this.b=null}},K={
lp:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a="heightMaps",a0="modifiers",a1={},a2=V.mv("Test 037"),a3=W.jQ()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.n]
a2.cP(H.d(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],u))
a2.fp(H.d(["heightMaps","shapes","scalars"],u))
a2.cP(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mz(t,!0,!0,!0,!1)
r=new O.cI()
a2=O.jR(V.ay)
r.e=a2
a2.b2(r.gei(),r.gek())
a2=new O.ak(r,"emission")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
r.f=a2
a2=new O.ak(r,"ambient")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
r.r=a2
a2=new O.ak(r,"diffuse")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
r.x=a2
a2=new O.ak(r,"invDiffuse")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
r.y=a2
a2=new O.fq(r,"specular")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
a2.ch=100
r.z=a2
a2=new O.fm(r,"bump")
a2.c=new A.Y(!1,!1,!1)
r.Q=a2
r.ch=null
a2=new O.ak(r,"reflect")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
r.cx=a2
a2=new O.fp(r,"refract")
a2.c=new A.Y(!1,!1,!1)
a2.f=new V.S(0,0,0)
a2.ch=1
r.cy=a2
a2=new O.fl(r,"alpha")
a2.c=new A.Y(!1,!1,!1)
a2.f=1
r.db=a2
a2=new D.cE()
a2.bj(D.a3)
a2.e=H.d([],[D.ba])
a2.f=H.d([],[D.fQ])
a2.r=H.d([],[D.hd])
a2.y=a2.x=null
a2.cd(a2.geg(),a2.geU(),a2.geY())
r.dx=a2
q=new O.fo()
q.b=new V.aO(0,0,0,0)
q.c=1
q.d=10
q.e=!1
r.dy=q
q=a2.x
a2=q==null?a2.x=D.F():q
a2.l(0,r.gfa())
a2=r.dx
q=a2.y
a2=q==null?a2.y=D.F():q
a2.l(0,r.geo())
r.fr=null
a2=r.dx
p=V.k6()
q=U.kz(V.kH(V.kM(),p,new V.x(1,1,-3)))
o=new V.S(1,1,1)
n=new D.ba()
n.c=new V.S(1,1,1)
n.a=V.l4()
n.d=V.k6()
n.e=V.mI()
m=n.b
n.b=q
q.gA().l(0,n.gdO())
q=new D.z("mover",m,n.b)
q.b=!0
n.ak(q)
if(!n.c.n(0,o)){m=n.c
n.c=o
q=new D.z("color",m,o)
q.b=!0
n.ak(q)}a2.l(0,n)
a2=r.r
a2.saQ(0,new V.S(0,0,1))
a2=r.x
a2.saQ(0,new V.S(0,1,0))
a2=r.z
a2.saQ(0,new V.S(1,0,0))
a2=r.z
a2.cJ(new A.Y(!0,!1,!1))
a2.cK(10)
l=E.kB()
l.sdu(r)
k=E.kB()
k.y.l(0,l)
a2=new U.bG()
a2.bj(U.a4)
a2.b2(a2.gee(),a2.geW())
a2.e=null
a2.f=V.cL()
a2.r=0
q=s.x
n=new U.dg()
j=U.jS()
j.scb(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sV(0,0)
j.sc0(100)
j.sR(0)
j.sbO(0.5)
n.b=j
i=n.gax()
j.gA().l(0,i)
j=U.jS()
j.scb(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sV(0,0)
j.sc0(100)
j.sR(0)
j.sbO(0.5)
n.c=j
j.gA().l(0,i)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
h=new X.a8(!1,!1,!1)
m=n.d
n.d=h
j=new D.z(a0,m,h)
j.b=!0
n.O(j)
j=n.f
if(j!==!1){n.f=!1
j=new D.z("invertX",j,!1)
j.b=!0
n.O(j)}j=n.r
if(j!==!1){n.r=!1
j=new D.z("invertY",j,!1)
j.b=!0
n.O(j)}n.aP(q)
a2.l(0,n)
q=s.x
n=new U.df()
j=U.jS()
j.scb(0,!0)
j.sc_(6.283185307179586)
j.sc1(0)
j.sV(0,0)
j.sc0(100)
j.sR(0)
j.sbO(0.2)
n.b=j
j.gA().l(0,n.gax())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
h=new X.a8(!0,!1,!1)
m=n.c
n.c=h
j=new D.z(a0,m,h)
j.b=!0
n.O(j)
n.aP(q)
a2.l(0,n)
q=s.x
n=new U.dh()
n.c=0.01
n.e=n.d=0
h=new X.a8(!1,!1,!1)
n.b=h
j=new D.z(a0,null,h)
j.b=!0
n.O(j)
n.aP(q)
a2.l(0,n)
k.saX(a2)
a2=new M.cu()
a2.a=!0
q=O.jR(E.au)
a2.e=q
q.b2(a2.geq(),a2.ges())
a2.y=a2.x=a2.r=a2.f=null
g=X.m1(null)
f=new X.cR()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saX(null)
q=f.c
if(!(Math.abs(q-1.0471975511965976)<$.A().a)){f.c=1.0471975511965976
q=new D.z("fov",q,1.0471975511965976)
q.b=!0
f.aA(q)}q=f.d
if(!(Math.abs(q-0.1)<$.A().a)){f.d=0.1
q=new D.z("near",q,0.1)
q.b=!0
f.aA(q)}q=f.e
if(!(Math.abs(q-2000)<$.A().a)){f.e=2000
q=new D.z("far",q,2000)
q.b=!0
f.aA(q)}q=a2.b
if(q!==f){if(q!=null)q.gA().K(0,a2.gay())
m=a2.b
a2.b=f
f.gA().l(0,a2.gay())
q=new D.z("camera",m,a2.b)
q.b=!0
a2.az(q)}q=a2.c
if(q!==g){if(q!=null)q.gA().K(0,a2.gay())
m=a2.c
a2.c=g
g.gA().l(0,a2.gay())
q=new D.z("target",m,a2.c)
q.b=!0
a2.az(q)}a2.e.l(0,k)
a2.b.saX(U.kz(V.al(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=s.d
if(q!==a2){if(q!=null)q.gA().K(0,s.gcl())
s.d=a2
a2.gA().l(0,s.gcl())
s.cm()}a1.a=null
a1.b=""
a1.c=1
e=new K.jl(a1,s,l)
a2=new V.hq(a,new K.jm(a1,e))
u=u.getElementById(a)
a2.c=u
if(u==null)H.r("Failed to find heightMaps for Texture2DGroup")
a2.X(0,"../resources/HeightMap1.png",!0)
a2.l(0,"../resources/HeightMap2.png")
a2.l(0,"../resources/HeightMap3.png")
a2.l(0,"../resources/HeightMap4.png")
a2.l(0,"../resources/ScrewHeightMap.png")
d=new K.jn(a1,e)
a2=V.kP("shapes")
a2.X(0,"Cuboid",new K.jv(d))
a2.X(0,"Cylinder",new K.jw(d))
a2.X(0,"LatLonSphere",new K.jx(d))
a2.X(0,"Sphere",new K.jy(d))
a2.X(0,"Toroid",new K.jz(d))
a2.X(0,"Grid Small",new K.jA(d))
a2.bG(0,"Grid Medium",new K.jB(d),!0)
a2.X(0,"Grid Large",new K.jC(d))
c=new K.jo(a1,e)
a1=V.kP("scalars")
a1.X(0,"0.1",new K.jp(c))
a1.X(0,"0.2",new K.jq(c))
a1.X(0,"0.4",new K.jr(c))
a1.bG(0,"0.6",new K.js(c),!0)
a1.X(0,"0.8",new K.jt(c))
a1.X(0,"1.0",new K.ju(c))
V.o_(s)},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jY.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gH:function(a){return H.bS(a)},
h:function(a){return"Instance of '"+H.f(H.bT(a))+"'"}}
J.f2.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ib3:1}
J.cB.prototype={
n:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.cC.prototype={
gH:function(a){return 0},
h:function(a){return String(a)}}
J.fO.prototype={}
J.bq.prototype={}
J.aT.prototype={
h:function(a){var u=a[$.lw()]
if(u==null)return this.dH(a)
return"JavaScript function for "+H.f(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aR.prototype={
ds:function(a,b){if(!!a.fixed$length)H.r(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cU(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.r(P.v("remove"))
for(u=0;u<a.length;++u)if(J.y(a[u],b)){a.splice(u,1)
return!0}return!1},
D:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aP(a))}},
t:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
h2:function(a){return this.t(a,"")},
fX:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aP(a))}return u},
fY:function(a,b,c){return this.fX(a,b,c,null)},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dE:function(a,b,c){if(b<0||b>a.length)throw H.c(P.U(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.U(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.jb(a,0)])
return H.d(a.slice(b,c),[H.jb(a,0)])},
gfW:function(a){if(a.length>0)return a[0]
throw H.c(H.kD())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kD())},
bi:function(a,b){if(!!a.immutable$list)H.r(P.v("sort"))
H.cY(a,0,a.length-1,b)},
ao:function(a,b){var u
for(u=0;u<a.length;++u)if(J.y(a[u],b))return!0
return!1},
h:function(a){return P.jV(a,"[","]")},
gU:function(a){return new J.a_(a,a.length)},
gH:function(a){return H.bS(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.r(P.v("set length"))
if(b<0)throw H.c(P.U(b,0,null,"newLength",null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.by(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.r(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.by(a,b))
a[b]=c},
$ij:1,
$im:1}
J.jX.prototype={}
J.a_.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bI.prototype={
fE:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ac(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb9(b)
if(this.gb9(a)===u)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
hx:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.v(""+a+".toInt()"))},
aV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.v(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
dv:function(a,b){var u
if(b>20)throw H.c(P.U(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+u
return u},
b0:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.U(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.v("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
af:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ac(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ck:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.v("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aD:function(a,b){var u
if(a>0)u=this.cL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fi:function(a,b){if(b<0)throw H.c(H.ac(b))
return this.cL(a,b)},
cL:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia6:1}
J.cA.prototype={$iu:1}
J.cz.prototype={}
J.aS.prototype={
S:function(a,b){if(b<0)throw H.c(H.by(a,b))
if(b>=a.length)H.r(H.by(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.by(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.c(P.ku(b,null,null))
return a+b},
aI:function(a,b,c,d){var u,t
c=P.aZ(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a0:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.U(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a0(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ac(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.c(P.cU(b,null))
if(b>c)throw H.c(P.cU(b,null))
if(c>a.length)throw H.c(P.cU(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.p(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a8:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
b8:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.U(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
d9:function(a,b){return this.b8(a,b,0)},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$in:1}
H.N.prototype={
gj:function(a){return this.a.length},
i:function(a,b){return C.a.S(this.a,b)},
$ap:function(){return[P.u]},
$aj:function(){return[P.u]},
$am:function(){return[P.u]}}
H.eN.prototype={}
H.cF.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.cd(s),q=r.gj(s)
if(t.b!==q)throw H.c(P.aP(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.fi.prototype={
gU:function(a){return new H.fj(J.b6(this.a),this.b)},
gj:function(a){return J.ad(this.a)},
I:function(a,b){return this.b.$1(J.jN(this.a,b))},
$aj:function(a,b){return[b]}}
H.fj.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.ij.prototype={
gU:function(a){return new H.ik(J.b6(this.a),this.b)}}
H.ik.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cw.prototype={}
H.hR.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.dc.prototype={}
H.ez.prototype={
h:function(a){return P.k0(this)},
k:function(a,b,c){return H.lY()},
$iO:1}
H.eA.prototype={
gj:function(a){return this.a},
b7:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.b7(0,b))return
return this.cz(b)},
cz:function(a){return this.b[a]},
D:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cz(s))}}}
H.hE.prototype={
a7:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fK.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f4.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hQ.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jK.prototype={
$1:function(a){if(!!J.M(a).$ibb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.dR.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bD.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hm.prototype={}
H.hg.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.eg(u)+"'"}}
H.bB.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bB))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bS(this.a)
else u=typeof t!=="object"?J.cj(t):H.bS(t)
return(u^H.bS(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bT(u))+"'")}}
H.eu.prototype={
h:function(a){return this.a}}
H.h0.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.K.prototype={
gj:function(a){return this.a},
gai:function(a){return new H.f9(this,[H.jb(this,0)])},
b7:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cu(t,b)}else return s.h_(b)},
h_:function(a){var u=this,t=u.d
if(t==null)return!1
return u.bX(u.bp(t,u.bW(a)),a)>=0},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b3(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b3(r,b)
s=t==null?null:t.b
return s}else return q.h0(b)},
h0:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bp(r,s.bW(a))
t=s.bX(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cp(u==null?s.b=s.bx():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cp(t==null?s.c=s.bx():t,b,c)}else s.h1(b,c)},
h1:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bx()
u=r.bW(a)
t=r.bp(q,u)
if(t==null)r.bC(q,u,[r.by(a,b)])
else{s=r.bX(t,a)
if(s>=0)t[s].b=b
else t.push(r.by(a,b))}},
D:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aP(u))
t=t.c}},
cp:function(a,b,c){var u=this.b3(a,b)
if(u==null)this.bC(a,b,this.by(b,c))
else u.b=c},
by:function(a,b){var u=this,t=new H.f8(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bW:function(a){return J.cj(a)&0x3ffffff},
bX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.y(a[t].a,b))return t
return-1},
h:function(a){return P.k0(this)},
b3:function(a,b){return a[b]},
bp:function(a,b){return a[b]},
bC:function(a,b,c){a[b]=c},
e3:function(a,b){delete a[b]},
cu:function(a,b){return this.b3(a,b)!=null},
bx:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bC(t,u,t)
this.e3(t,u)
return t}}
H.f8.prototype={}
H.f9.prototype={
gj:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fa(u,u.r)
t.c=u.e
return t}}
H.fa.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jf.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jg.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jh.prototype={
$1:function(a){return this.a(a)}}
H.f3.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imr:1}
H.bN.prototype={$ibN:1}
H.aV.prototype={$iaV:1}
H.cM.prototype={
gj:function(a){return a.length},
$iw:1,
$aw:function(){}}
H.bO.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$ap:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$im:1,
$am:function(){return[P.J]}}
H.cN.prototype={
k:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$ap:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$im:1,
$am:function(){return[P.u]}}
H.fE.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fF.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fG.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fH.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fI.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.cO.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.bP.prototype={
gj:function(a){return a.length},
i:function(a,b){H.aq(b,a,a.length)
return a[b]},
$ibP:1,
$ibn:1}
H.c1.prototype={}
H.c2.prototype={}
H.c3.prototype={}
H.c4.prototype={}
P.im.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.il.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.io.prototype={
$0:function(){this.a.$0()}}
P.ip.prototype={
$0:function(){this.a.$0()}}
P.dY.prototype={
dR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bx(new P.iM(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bx(new P.iL(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$id5:1}
P.iM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iL.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ck(u,q)}s.c=r
t.d.$1(s)}}
P.dj.prototype={}
P.d1.prototype={}
P.hj.prototype={}
P.d5.prototype={}
P.iV.prototype={}
P.j3.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cQ():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.iC.prototype={
ht:function(a){var u,t,s,r=null
try{if(C.f===$.ae){a.$0()
return}P.nt(r,r,this,a)}catch(s){u=H.b4(s)
t=H.ki(s)
P.ld(r,r,this,u,t)}},
hu:function(a,b){var u,t,s,r=null
try{if(C.f===$.ae){a.$1(b)
return}P.nu(r,r,this,a,b)}catch(s){u=H.b4(s)
t=H.ki(s)
P.ld(r,r,this,u,t)}},
hv:function(a,b){return this.hu(a,b,null)},
fA:function(a){return new P.iD(this,a)},
cQ:function(a,b){return new P.iE(this,a,b)}}
P.iD.prototype={
$0:function(){return this.a.ht(this.b)}}
P.iE.prototype={
$1:function(a){return this.a.hv(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iz.prototype={
gU:function(a){var u=new P.dz(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cr(u==null?s.b=P.k9():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cr(t==null?s.c=P.k9():t,b)}else return s.dU(0,b)},
dU:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.k9()
u=s.cs(b)
t=r[u]
if(t==null)r[u]=[s.bl(b)]
else{if(s.cA(t,b)>=0)return!1
t.push(s.bl(b))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f6(this.c,b)
else return this.f5(0,b)},
f5:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.e7(r,b)
t=s.cA(u,b)
if(t<0)return!1
s.cN(u.splice(t,1)[0])
return!0},
cr:function(a,b){if(a[b]!=null)return!1
a[b]=this.bl(b)
return!0},
f6:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cN(u)
delete a[b]
return!0},
cD:function(){this.r=1073741823&this.r+1},
bl:function(a){var u,t=this,s=new P.iA(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cD()
return s},
cN:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cD()},
cs:function(a){return J.cj(a)&1073741823},
e7:function(a,b){return a[this.cs(b)]},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.y(a[t].a,b))return t
return-1}}
P.iA.prototype={}
P.dz.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fb.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fc.prototype={$ij:1,$im:1}
P.p.prototype={
gU:function(a){return new H.cF(a,this.gj(a))},
I:function(a,b){return this.i(a,b)},
D:function(a,b){var u,t=this.gj(a)
for(u=0;u<t;++u){b.$1(this.i(a,u))
if(t!==this.gj(a))throw H.c(P.aP(a))}},
hz:function(a,b){var u,t,s=this,r=H.d([],[H.nO(s,a,"p",0)])
C.b.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hy:function(a){return this.hz(a,!0)},
fU:function(a,b,c,d){var u
P.aZ(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
h:function(a){return P.jV(a,"[","]")}}
P.ff.prototype={}
P.fg.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:3}
P.ax.prototype={
D:function(a,b){var u,t
for(u=J.b6(this.gai(a));u.B();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.ad(this.gai(a))},
h:function(a){return P.k0(a)},
$iO:1}
P.iN.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify unmodifiable map"))}}
P.fh.prototype={
i:function(a,b){return J.ci(this.a,b)},
k:function(a,b,c){J.jL(this.a,b,c)},
D:function(a,b){J.kt(this.a,b)},
gj:function(a){return J.ad(this.a)},
h:function(a){return J.a1(this.a)},
$iO:1}
P.dd.prototype={}
P.iF.prototype={
h:function(a){return P.jV(this,"{","}")},
I:function(a,b){var u,t,s
P.kQ(b,"index")
for(u=P.mO(this,this.r),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
$ij:1}
P.dA.prototype={}
P.e3.prototype={}
P.eq.prototype={
h6:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aZ(a0,a1,b.length)
u=$.lJ()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.je(C.a.F(b,n))
j=H.je(C.a.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.p(b,s,t)
r.a=g+H.cT(m)
s=n
continue}}throw H.c(P.L("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.p(b,s,a1)
f=g.length
if(q>=0)P.kv(b,p,a1,q,o,f)
else{e=C.c.af(f-1,4)+1
if(e===1)throw H.c(P.L(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aI(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kv(b,p,a1,q,o,d)
else{e=C.c.af(d,4)
if(e===1)throw H.c(P.L(c,b,a1))
if(e>1)b=C.a.aI(b,a1,a1,e===2?"==":"=")}return b}}
P.er.prototype={}
P.ew.prototype={}
P.eB.prototype={}
P.eO.prototype={}
P.i_.prototype={
gfT:function(){return C.G}}
P.i1.prototype={
bM:function(a){var u,t,s=P.aZ(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iU(u)
if(t.e5(a,0,s)!==s)t.cO(J.lP(a,s-1),0)
return new Uint8Array(u.subarray(0,H.n4(0,t.b,u.length)))}}
P.iU.prototype={
cO:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
e5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cO(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.i0.prototype={
bM:function(a){var u,t,s,r,q,p,o,n,m=P.mD(!1,a,0,null)
if(m!=null)return m
u=P.aZ(0,null,J.ad(a))
t=P.lf(a,0,u)
if(t>0){s=P.bU(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.iT(!1,r)
o.c=p
o.fF(a,q,u)
if(o.e>0){H.r(P.L("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.cT(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iT.prototype={
fF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.cd(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.aa()
if((r&192)!==128){q=P.L(k+C.c.b0(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.r,q)
if(j<=C.r[q]){q=P.L("Overlong encoding of 0x"+C.c.b0(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.L("Character outside valid Unicode range: 0x"+C.c.b0(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.cT(j)
l.c=!1}for(q=s<c;q;){p=P.lf(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bU(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.L("Negative UTF-8 code unit: -0x"+C.c.b0(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.L(k+C.c.b0(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.b3.prototype={}
P.a2.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a2&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.c.aD(u,30))&1073741823},
h:function(a){var u=this,t=P.lZ(H.mn(u)),s=P.cq(H.ml(u)),r=P.cq(H.mh(u)),q=P.cq(H.mi(u)),p=P.cq(H.mk(u)),o=P.cq(H.mm(u)),n=P.m_(H.mj(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aQ.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
h:function(a){var u,t,s,r=new P.eM(),q=this.a
if(q<0)return"-"+new P.aQ(0-q).h(0)
u=r.$1(C.c.a_(q,6e7)%60)
t=r.$1(C.c.a_(q,1e6)%60)
s=new P.eL().$1(q%1e6)
return""+C.c.a_(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bb.prototype={}
P.cQ.prototype={
h:function(a){return"Throw of null."}}
P.ag.prototype={
gbn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbn()+o+u
if(!q.a)return t
s=q.gbm()
r=P.jU(q.b)
return t+s+": "+r}}
P.bl.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.f0.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t=this.b
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gj:function(a){return this.f}}
P.hS.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hO.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hf.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ey.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jU(u)+"."}}
P.fN.prototype={
h:function(a){return"Out of Memory"},
$ibb:1}
P.d_.prototype={
h:function(a){return"Stack Overflow"},
$ibb:1}
P.eG.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ds.prototype={
h:function(a){return"Exception: "+this.a}}
P.eY.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.p(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.S(f,q)
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
k=""}j=C.a.p(f,m,n)
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.u.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gU(this)
for(u=0;t.B();)++u
return u},
I:function(a,b){var u,t,s
P.kQ(b,"index")
for(u=this.gU(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.H(b,this,"index",null,t))},
h:function(a){return P.m3(this,"(",")")}}
P.f1.prototype={}
P.m.prototype={$ij:1}
P.O.prototype={}
P.aW.prototype={
gH:function(a){return P.Z.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.a6.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gH:function(a){return H.bS(this)},
h:function(a){return"Instance of '"+H.f(H.bT(this))+"'"},
toString:function(){return this.h(this)}}
P.n.prototype={}
P.P.prototype={
gj:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hY.prototype={
$2:function(a,b){var u,t,s,r=J.kh(b).d9(b,"=")
if(r===-1){if(b!=="")J.jL(a,P.kd(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.p(b,0,r)
t=C.a.ab(b,r+1)
s=this.a
J.jL(a,P.kd(u,0,u.length,s,!0),P.kd(t,0,t.length,s,!0))}return a}}
P.hU.prototype={
$2:function(a,b){throw H.c(P.L("Illegal IPv4 address, "+a,this.a,b))}}
P.hW.prototype={
$2:function(a,b){throw H.c(P.L("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hX.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cf(C.a.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bs.prototype={
gdA:function(){return this.b},
gbV:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.p(u,1,u.length-1)
return u},
gbc:function(a){var u=this.d
if(u==null)return P.l6(this.a)
return u},
gc4:function(a){var u=this.f
return u==null?"":u},
gd4:function(){var u=this.r
return u==null?"":u},
c6:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a5(u,"/"))u="/"+u
s=P.kb(null,0,0,b)
return new P.bs(q,o,m,n,u,s,r.r)},
gb_:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.n
u=this.Q=new P.dd(P.l_(t==null?"":t),[u,u])
t=u}return t},
gd5:function(){return this.c!=null},
gd8:function(){return this.f!=null},
gd6:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.f(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.f(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.f(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.M(b).$ik4)if(s.a==b.gbh())if(s.c!=null===b.gd5())if(s.b==b.gdA())if(s.gbV(s)==b.gbV(b))if(s.gbc(s)==b.gbc(b))if(s.e===b.gdm(b)){u=s.f
t=u==null
if(!t===b.gd8()){if(t)u=""
if(u===b.gc4(b)){u=s.r
t=u==null
if(!t===b.gd6()){if(t)u=""
u=u===b.gd4()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.h(0)):u},
$ik4:1,
gbh:function(){return this.a},
gdm:function(a){return this.e}}
P.iO.prototype={
$1:function(a){throw H.c(P.L("Invalid port",this.a,this.b+1))}}
P.iP.prototype={
$1:function(a){return P.iS(C.O,a,C.e,!1)}}
P.iR.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.iS(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.iS(C.h,b,C.e,!0))}}}
P.iQ.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b6(b),t=this.a;u.B();)t.$2(a,u.gJ(u))}}
P.hT.prototype={
gdz:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.b8(u,"?",o)
s=u.length
if(t>=0){r=P.c9(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.it("data",p,p,p,P.c9(u,o,s,C.u,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iZ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iY.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.lQ(u,0,96,b)
return u},
$S:16}
P.j_.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.j0.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iG.prototype={
gd5:function(){return this.c>0},
gd7:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.i(t)
t=u+1<t
u=t}else u=!1
return u},
gd8:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gd6:function(){return this.r<this.a.length},
gcB:function(){return this.b===4&&C.a.a5(this.a,"http")},
gcC:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbh:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcB())q=t.x="http"
else if(t.gcC()){t.x="https"
q="https"}else if(q===4&&C.a.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a5(t.a,r)){t.x=r
q=r}else{q=C.a.p(t.a,0,q)
t.x=q}return q},
gdA:function(){var u=this.c,t=this.b+3
return u>t?C.a.p(this.a,t,u-1):""},
gbV:function(a){var u=this.c
return u>0?C.a.p(this.a,u,this.d):""},
gbc:function(a){var u,t=this
if(t.gd7()){u=t.d
if(typeof u!=="number")return u.v()
return P.cf(C.a.p(t.a,u+1,t.e),null,null)}if(t.gcB())return 80
if(t.gcC())return 443
return 0},
gdm:function(a){return C.a.p(this.a,this.e,this.f)},
gc4:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.a.p(this.a,u+1,t):""},
gd4:function(){var u=this.r,t=this.a
return u<t.length?C.a.ab(t,u+1):""},
gb_:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.P
t=P.n
return new P.dd(P.l_(u.gc4(u)),[t,t])},
c6:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbh(),m=n==="file",l=p.c,k=l>0?C.a.p(p.a,p.b+3,l):"",j=p.gd7()?p.gbc(p):o
l=p.c
if(l>0)u=C.a.p(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.p(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.kb(o,0,0,b)
s=p.r
q=s<l.length?C.a.ab(l,s+1):o
return new P.bs(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.M(b).$ik4&&this.a===b.h(0)},
h:function(a){return this.a},
$ik4:1}
P.it.prototype={}
W.l.prototype={}
W.eh.prototype={
gj:function(a){return a.length}}
W.ej.prototype={
h:function(a){return String(a)}}
W.ek.prototype={
h:function(a){return String(a)}}
W.b8.prototype={$ib8:1}
W.b9.prototype={
cc:function(a,b,c){if(c!=null)return a.getContext(b,P.nD(c))
return a.getContext(b)},
dB:function(a,b){return this.cc(a,b,null)},
$ib9:1}
W.aM.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
gj:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bE.prototype={
gj:function(a){return a.length}}
W.eD.prototype={}
W.a7.prototype={}
W.ai.prototype={}
W.eE.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
gj:function(a){return a.length}}
W.eH.prototype={
gj:function(a){return a.length}}
W.eI.prototype={
h:function(a){return String(a)}}
W.cs.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[[P.a5,P.a6]]},
$ap:function(){return[[P.a5,P.a6]]},
$ij:1,
$aj:function(){return[[P.a5,P.a6]]},
$im:1,
$am:function(){return[[P.a5,P.a6]]}}
W.ct.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gav(a))+" x "+H.f(this.gaq(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.M(b)
if(!u.$ia5)return!1
return a.left===u.gba(b)&&a.top===u.gbe(b)&&this.gav(a)===u.gav(b)&&this.gaq(a)===u.gaq(b)},
gH:function(a){return W.l5(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gav(a)),C.d.gH(this.gaq(a)))},
gcR:function(a){return a.bottom},
gaq:function(a){return a.height},
gba:function(a){return a.left},
gc7:function(a){return a.right},
gbe:function(a){return a.top},
gav:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a6]}}
W.eJ.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[P.n]},
$ap:function(){return[P.n]},
$ij:1,
$aj:function(){return[P.n]},
$im:1,
$am:function(){return[P.n]}}
W.eK.prototype={
gj:function(a){return a.length}}
W.ir.prototype={
gj:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.hy(this)
return new J.a_(u,u.length)},
$ap:function(){return[W.T]},
$aj:function(){return[W.T]},
$am:function(){return[W.T]}}
W.T.prototype={
gbL:function(a){return new W.ir(a,a.children)},
gcS:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a6])},
h:function(a){return a.localName},
$iT:1}
W.h.prototype={$ih:1}
W.e.prototype={
fq:function(a,b,c,d){if(c!=null)this.dV(a,b,c,!1)},
dV:function(a,b,c,d){return a.addEventListener(b,H.bx(c,1),!1)}}
W.aj.prototype={$iaj:1}
W.bF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aj]},
$ap:function(){return[W.aj]},
$ij:1,
$aj:function(){return[W.aj]},
$im:1,
$am:function(){return[W.aj]},
$ibF:1}
W.eT.prototype={
gj:function(a){return a.length}}
W.eX.prototype={
gj:function(a){return a.length}}
W.av.prototype={$iav:1}
W.f_.prototype={
gj:function(a){return a.length}}
W.bH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.B]},
$ap:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]},
$im:1,
$am:function(){return[W.B]}}
W.aw.prototype={$iaw:1,
gcT:function(a){return a.data}}
W.be.prototype={$ibe:1}
W.bi.prototype={$ibi:1}
W.fd.prototype={
h:function(a){return String(a)}}
W.fx.prototype={
gj:function(a){return a.length}}
W.bL.prototype={$ibL:1}
W.fy.prototype={
i:function(a,b){return P.aJ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.D(a,new W.fz(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.n,null]}}
W.fz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fA.prototype={
i:function(a,b){return P.aJ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.D(a,new W.fB(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.n,null]}}
W.fB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.fC.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.az]},
$ap:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$im:1,
$am:function(){return[W.az]}}
W.am.prototype={$iam:1}
W.iq.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.cx(u,u.length)},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ap:function(){return[W.B]},
$aj:function(){return[W.B]},
$am:function(){return[W.B]}}
W.B.prototype={
hr:function(a,b){var u,t
try{u=a.parentNode
J.lN(u,b,a)}catch(t){H.b4(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dG(a):u},
f8:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.B]},
$ap:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]},
$im:1,
$am:function(){return[W.B]}}
W.aC.prototype={$iaC:1,
gj:function(a){return a.length}}
W.fP.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aC]},
$ap:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$im:1,
$am:function(){return[W.aC]}}
W.fZ.prototype={
i:function(a,b){return P.aJ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.D(a,new W.h_(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.n,null]}}
W.h_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h1.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.hb.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aD]},
$ap:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$im:1,
$am:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.hc.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aE]},
$ap:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$im:1,
$am:function(){return[W.aE]}}
W.aF.prototype={$iaF:1,
gj:function(a){return a.length}}
W.hh.prototype={
i:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
D:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gai:function(a){var u=H.d([],[P.n])
this.D(a,new W.hi(u))
return u},
gj:function(a){return a.length},
$iO:1,
$aO:function(){return[P.n,P.n]}}
W.hi.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.aG.prototype={$iaG:1}
W.ao.prototype={$iao:1}
W.hn.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.ao]},
$ap:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$im:1,
$am:function(){return[W.ao]}}
W.ho.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aG]},
$ap:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$im:1,
$am:function(){return[W.aG]}}
W.hy.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bm.prototype={$ibm:1}
W.hB.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aH]},
$ap:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$im:1,
$am:function(){return[W.aH]}}
W.hC.prototype={
gj:function(a){return a.length}}
W.b0.prototype={}
W.hZ.prototype={
h:function(a){return String(a)}}
W.ih.prototype={
gj:function(a){return a.length}}
W.b1.prototype={
gfK:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfJ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$ib1:1}
W.c0.prototype={
f9:function(a,b){return a.requestAnimationFrame(H.bx(b,1))},
e4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.is.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.E]},
$ap:function(){return[W.E]},
$ij:1,
$aj:function(){return[W.E]},
$im:1,
$am:function(){return[W.E]}}
W.dm.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.M(b)
if(!u.$ia5)return!1
return a.left===u.gba(b)&&a.top===u.gbe(b)&&a.width===u.gav(b)&&a.height===u.gaq(b)},
gH:function(a){return W.l5(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaq:function(a){return a.height},
gav:function(a){return a.width}}
W.iw.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.av]},
$ap:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]},
$im:1,
$am:function(){return[W.av]}}
W.dF.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.B]},
$ap:function(){return[W.B]},
$ij:1,
$aj:function(){return[W.B]},
$im:1,
$am:function(){return[W.B]}}
W.iH.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.aF]},
$ap:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$im:1,
$am:function(){return[W.aF]}}
W.iK.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iw:1,
$aw:function(){return[W.an]},
$ap:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$im:1,
$am:function(){return[W.an]}}
W.iu.prototype={}
W.iv.prototype={
$1:function(a){return this.a.$1(a)}}
W.G.prototype={
gU:function(a){return new W.cx(a,this.gj(a))}}
W.cx.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ci(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.dl.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.c5.prototype={}
W.c6.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dS.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.c7.prototype={}
W.c8.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
P.iI.prototype={
d3:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bg:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.M(a)
if(!!u.$ia2)return new Date(a.a)
if(!!u.$imr)throw H.c(P.hP("structured clone of RegExp"))
if(!!u.$iaj)return a
if(!!u.$ib8)return a
if(!!u.$ibF)return a
if(!!u.$iaw)return a
if(!!u.$ibN||!!u.$iaV||!!u.$ibL)return a
if(!!u.$iO){t=p.d3(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.D(a,new P.iJ(o,p))
return o.a}if(!!u.$im){t=p.d3(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fH(a,t)}throw H.c(P.hP("structured clone of other type"))},
fH:function(a,b){var u,t=J.cd(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
for(u=0;u<s;++u){q=this.bg(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iJ.prototype={
$2:function(a,b){this.a.a[a]=this.b.bg(b)},
$S:3}
P.e2.prototype={$iaw:1,
gcT:function(a){return this.a}}
P.j4.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.dV.prototype={}
P.eU.prototype={
gaM:function(){var u=this.b,t=H.lm(u,"p",0)
return new H.fi(new H.ij(u,new P.eV(),[t]),new P.eW(),[t,W.T])},
D:function(a,b){C.b.D(P.k_(this.gaM(),!1,W.T),b)},
k:function(a,b,c){var u=this.gaM()
J.lR(u.b.$1(J.jN(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.ad(this.gaM().a)},
i:function(a,b){var u=this.gaM()
return u.b.$1(J.jN(u.a,b))},
gU:function(a){var u=P.k_(this.gaM(),!1,W.T)
return new J.a_(u,u.length)},
$ap:function(){return[W.T]},
$aj:function(){return[W.T]},
$am:function(){return[W.T]}}
P.eV.prototype={
$1:function(a){return!!J.M(a).$iT}}
P.eW.prototype={
$1:function(a){return H.o(a,"$iT")}}
P.iB.prototype={
gc7:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.i(t)
return u+t},
gcR:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.i(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.M(b)
if(!!u.$ia5){t=q.a
if(t==u.gba(b)){s=q.b
if(s==u.gbe(b)){r=q.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.i(r)
if(t+r===u.gc7(b)){t=q.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.i(t)
u=s+t===u.gcR(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cj(t),r=u.b,q=J.cj(r),p=u.c
if(typeof t!=="number")return t.v()
if(typeof p!=="number")return H.i(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.i(t)
t=C.c.gH(r+t)
return P.mN(P.iy(P.iy(P.iy(P.iy(0,s),q),p),t))}}
P.a5.prototype={
gba:function(a){return this.a},
gbe:function(a){return this.b},
gav:function(a){return this.c},
gaq:function(a){return this.d}}
P.aU.prototype={$iaU:1}
P.f6.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$im:1,
$am:function(){return[P.aU]}}
P.aX.prototype={$iaX:1}
P.fL.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aX]},
$ij:1,
$aj:function(){return[P.aX]},
$im:1,
$am:function(){return[P.aX]}}
P.fS.prototype={
gj:function(a){return a.length}}
P.hk.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ap:function(){return[P.n]},
$ij:1,
$aj:function(){return[P.n]},
$im:1,
$am:function(){return[P.n]}}
P.k.prototype={
gbL:function(a){return new P.eU(a,new W.iq(a))}}
P.b_.prototype={$ib_:1}
P.hD.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ap:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]},
$im:1,
$am:function(){return[P.b_]}}
P.dx.prototype={}
P.dy.prototype={}
P.dI.prototype={}
P.dJ.prototype={}
P.dT.prototype={}
P.dU.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.bn.prototype={$ij:1,
$aj:function(){return[P.u]},
$im:1,
$am:function(){return[P.u]}}
P.em.prototype={
gj:function(a){return a.length}}
P.en.prototype={
i:function(a,b){return P.aJ(a.get(b))},
D:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gai:function(a){var u=H.d([],[P.n])
this.D(a,new P.eo(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.v("Not supported"))},
$iO:1,
$aO:function(){return[P.n,null]}}
P.eo.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ep.prototype={
gj:function(a){return a.length}}
P.b7.prototype={}
P.fM.prototype={
gj:function(a){return a.length}}
P.dk.prototype={}
P.cW.prototype={
hw:function(a,b,c,d,e,f,g){var u,t=J.M(g)
if(!!t.$iaw)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.nE(g))
return}if(!!t.$ibe)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.ck("Incorrect number or type of arguments"))}}
P.he.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return P.aJ(a.item(b))},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
I:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.O,,,]]},
$ij:1,
$aj:function(){return[[P.O,,,]]},
$im:1,
$am:function(){return[[P.O,,,]]}}
P.dP.prototype={}
P.dQ.prototype={}
T.ei.prototype={
aG:function(a,b){return!0},
h:function(a){return"all"}}
T.cy.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].aG(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
T.cH.prototype={}
T.aB.prototype={
aG:function(a,b){return!this.dF(0,b)},
h:function(a){return"!["+this.cg(0)+"]"}}
T.h2.prototype={
dK:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a Set with zero characters."))
u=new H.K([P.u,P.b3])
for(t=new H.cF(a,a.gj(a));t.B();)u.k(0,t.d,!0)
this.a=u},
aG:function(a,b){return this.a.b7(0,b)},
h:function(a){var u=this.a
return P.bU(u.gai(u),0,null)}}
R.d0.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d9(this.a.N(0,b))
r.a=H.d([],[T.cH])
r.c=!1
this.c.push(r)
return r},
fV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
h:function(a){return this.b}}
R.d6.prototype={
h:function(a){var u=H.lt(this.b,"\n","\\n"),t=H.lt(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d7.prototype={
h:function(a){return this.b}}
R.hz.prototype={
N:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new R.d0(this,b)
u.c=H.d([],[R.d9])
this.a.k(0,b,u)}return u},
b1:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new R.d7(a)
u=P.n
t.c=new H.K([u,u])
this.b.k(0,a,t)}return t},
hA:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[R.d6]),k=this.c,j=[P.u],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)l.push(t)
return l}r=C.a.F(a,s)
q=k.fV(r)
if(q==null){if(t==null){i.push(r)
p=P.bU(i,0,m)
throw H.c(P.t("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}l.push(t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)i.push(r)
k=q.b
if(k.d!=null){p=P.bU(i,0,m)
o=k.d
n=o.c.i(0,p)
t=new R.d6(n==null?o.b:n,p,s)}++s}}}}
R.d9.prototype={
h:function(a){return this.b.b+": "+this.cg(0)}}
O.aN.prototype={
bj:function(a){this.a=H.d([],[a])
this.c=this.b=null},
cd:function(a,b,c){this.b=b
this.c=a},
b2:function(a,b){return this.cd(a,null,b)},
eT:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dN:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.a_(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.lm(s,"aN",0)]
if(s.eT(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.dN(t,H.d([b],r))}},
$ij:1}
O.bK.prototype={
gj:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.F():u},
aw:function(){var u=this.b
if(u!=null)u.G(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.b.gas(u)
else return V.cL()},
dq:function(a){var u=this.a
if(a==null)u.push(V.cL())
else u.push(a)
this.aw()},
c3:function(){var u=this.a
if(u.length>0){u.pop()
this.aw()}}}
E.es.prototype={}
E.au.prototype={
cq:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a_(u,u.length);u.B();){t=u.d
if(t.f==null)t.cq()}},
sce:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().K(0,s.gdi())
u=s.c
if(u!=null)u.gA().l(0,s.gdi())
t=new D.z("shape",r,s.c)
t.b=!0
s.ac(t)}},
sdu:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gA().K(0,s.gdk())
u=s.f
s.f=a
if(a!=null)a.gA().l(0,s.gdk())
s.cq()
t=new D.z("technique",u,s.f)
t.b=!0
s.ac(t)}},
saX:function(a){var u,t,s=this
if(!J.y(s.r,a)){u=s.r
if(u!=null)u.gA().K(0,s.gdg())
if(a!=null)a.gA().l(0,s.gdg())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.ac(t)}},
aj:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aJ(0,b,s):null
if(!J.y(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.ac(t)}r=s.f
if(r!=null)r.aj(0,b)
for(r=s.y.a,r=new J.a_(r,r.length);r.B();)r.d.aj(0,b)},
aH:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gZ(s))
else s.a.push(r.m(0,s.gZ(s)))
s.aw()
a.dr(t.f)
s=a.dy
u=(s&&C.b).gas(s)
if(u!=null&&t.d!=null)u.hq(a,t)
for(s=t.y.a,s=new J.a_(s,s.length);s.B();)s.d.aH(a)
a.dn()
a.dx.c3()},
ac:function(a){var u=this.z
if(u!=null)u.G(a)},
Y:function(){return this.ac(null)},
dj:function(a){this.e=null
this.ac(a)},
hd:function(){return this.dj(null)},
dl:function(a){this.ac(a)},
he:function(){return this.dl(null)},
dh:function(a){this.ac(a)},
hc:function(){return this.dh(null)},
df:function(a){this.ac(a)},
h9:function(){return this.df(null)},
h8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gde(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bc()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.Y()},
hb:function(a,b){var u,t
for(u=b.gU(b),t=this.gde();u.B();)u.gJ(u).gA().K(0,t)
this.Y()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fV.prototype={
dJ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a2(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bK()
t=[V.ay]
u.a=H.d([],t)
u.gA().l(0,new E.fW(s))
s.cy=u
u=new O.bK()
u.a=H.d([],t)
u.gA().l(0,new E.fX(s))
s.db=u
u=new O.bK()
u.a=H.d([],t)
u.gA().l(0,new E.fY(s))
s.dx=u
u=H.d([],[O.d2])
s.dy=u
u.push(null)
s.fr=new H.K([P.n,A.cX])},
ghn:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.m(0,u.gZ(u))
s=u}return s},
dr:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gas(u):a)},
dn:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fW.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fX.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fY.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d4.prototype={
cn:function(a){this.dt()},
cm:function(){return this.cn(null)},
gfZ:function(){var u,t=this,s=Date.now(),r=C.c.a_(P.kA(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a2(s,!1)
return u/r},
cH:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.i(r)
u=C.d.aV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.aV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kV(C.n,s.ghs())}},
dt:function(){if(!this.cx){this.cx=!0
var u=window
C.x.e4(u)
C.x.f9(u,W.lg(new E.hx(this),P.a6))}},
hp:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cH()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a2(r,!1)
s.y=P.kA(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.aw()
r=s.db
C.b.sj(r.a,0)
r.aw()
r=s.dx
C.b.sj(r.a,0)
r.aw()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.aH(p.e)}}catch(q){u=H.b4(q)
t=H.ki(q)
P.kn("Error: "+H.f(u))
P.kn("Stack: "+H.f(t))
throw H.c(u)}}}
E.hx.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hp()}}}
Z.di.prototype={}
Z.cm.prototype={
b6:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b4(s)
t=P.t('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.ii.prototype={}
Z.cn.prototype={
aF:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b6:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b6(a)},
dw:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aH:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.n],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].h(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a1(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.t(p,", ")+"\nAttrs:   "+C.b.t(r,", ")}}
Z.bf.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bT(this.c))+"'")+"]"}}
Z.aI.prototype={
gcf:function(a){var u=this.a,t=(u&$.at().a)!==0?3:0
if((u&$.af().a)!==0)t+=3
if((u&$.as().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=2
if((u&$.aL().a)!==0)t+=3
if((u&$.cg().a)!==0)t+=3
if((u&$.ch().a)!==0)t+=4
if((u&$.b5().a)!==0)++t
return(u&$.ar().a)!==0?t+4:t},
fu:function(a){var u,t=$.at(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.af()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.as()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ch()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ar()
if((s&t.a)!==0)if(u===a)return t
return $.lI()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
h:function(a){var u=H.d([],[P.n]),t=this.a
if((t&$.at().a)!==0)u.push("Pos")
if((t&$.af().a)!==0)u.push("Norm")
if((t&$.as().a)!==0)u.push("Binm")
if((t&$.aK().a)!==0)u.push("Txt2D")
if((t&$.aL().a)!==0)u.push("TxtCube")
if((t&$.cg().a)!==0)u.push("Clr3")
if((t&$.ch().a)!==0)u.push("Clr4")
if((t&$.b5().a)!==0)u.push("Weight")
if((t&$.ar().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.t(u,"|")}}
D.ev.prototype={}
D.bc.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
K:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.ao(s,b)
if(s===!0){s=t.a
u=(s&&C.b).K(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.ao(s,b)
if(s===!0){s=t.b
u=(s&&C.b).K(s,b)||u}return u},
G:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.W()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.D(P.k_(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eQ(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.W]}])
C.b.D(u,new D.eR(q))}return!0},
fQ:function(){return this.G(null)},
a4:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}}}
D.eQ.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eR.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bg.prototype={}
D.bh.prototype={}
D.z.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.co.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.co))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cD.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.f5.prototype={
hj:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hf:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.cG.prototype={}
X.fe.prototype={
aL:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaE()
r=new X.aA(a,V.aY(),q.x,t,s)
r.b=!0
q.z=new P.a2(p,!1)
q.x=s
return r},
c2:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dC()
if(typeof u!=="number")return u.aa()
this.r=(u&~t)>>>0
return!1},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aL(a,b))
return!0},
hk:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaE()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.bM(new V.C(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
eI:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cG(c,r.a.gaE(),b)
s.b=!0
t.G(s)
r.y=new P.a2(u,!1)
r.x=V.aY()}}
X.a8.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aA.prototype={}
X.fD.prototype={
bo:function(a,b,c){var u=this,t=new P.a2(Date.now(),!1),s=u.a.gaE(),r=new X.aA(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c2:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bo(a,b,!0))
return!0},
aZ:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dC()
if(typeof t!=="number")return t.aa()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bo(a,b,!0))
return!0},
aY:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bo(a,b,!1))
return!0},
hl:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaE()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.bM(new V.C(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gcU:function(){var u=this.b
return u==null?this.b=D.F():u},
gca:function(){var u=this.c
return u==null?this.c=D.F():u},
gdd:function(){var u=this.d
return u==null?this.d=D.F():u}}
X.bM.prototype={}
X.fR.prototype={}
X.d8.prototype={}
X.hA.prototype={
aL:function(a,b){var u=this,t=new P.a2(Date.now(),!1),s=a.length>0?a[0]:V.aY(),r=u.a.gaE(),q=new X.d8(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hi:function(a){var u=this.b
if(u==null)return!1
u.G(this.aL(a,!0))
return!0},
hg:function(a){var u=this.c
if(u==null)return!1
u.G(this.aL(a,!0))
return!0},
hh:function(a){var u=this.d
if(u==null)return!1
u.G(this.aL(a,!1))
return!0}}
X.de.prototype={
gaE:function(){var u=this.a,t=C.i.gcS(u).c
t.toString
u=C.i.gcS(u).d
u.toString
return V.kR(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.a8(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
bD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
an:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.a9(s-q,r-u)},
aN:function(a){return new V.C(a.movementX,a.movementY)},
bz:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.ad(r.pageX)
C.d.ad(r.pageY)
p=o.left
C.d.ad(r.pageX)
n.push(new V.a9(q-p,C.d.ad(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.co(u,new X.a8(t,a.altKey,a.shiftKey))},
bq:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eC:function(a){this.f=!0},
en:function(a){this.f=!1},
ew:function(a){if(this.f&&this.bq(a))a.preventDefault()},
eG:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.hj(u)},
eE:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.hf(u)},
eK:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.al(a)
t=r.aN(a)
if(r.d.c2(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.al(a)
s=r.an(a)
if(r.c.c2(u,s))a.preventDefault()},
eO:function(a){var u,t,s,r=this
r.aC(a)
u=r.al(a)
if(r.x){t=r.aN(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aZ(u,s))a.preventDefault()},
eA:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aC(a)
u=r.al(a)
if(r.x){t=r.aN(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aZ(u,s))a.preventDefault()}},
eM:function(a){var u,t,s,r=this
r.aC(a)
u=r.al(a)
if(r.x){t=r.aN(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aY(u,s))a.preventDefault()},
ey:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aC(a)
u=r.al(a)
if(r.x){t=r.aN(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.an(a)
if(r.c.aY(u,s))a.preventDefault()}},
eQ:function(a){var u,t,s=this
s.aC(a)
u=new V.C((a&&C.w).gfJ(a),C.w.gfK(a)).q(0,180)
if(s.x){if(s.d.hk(u))a.preventDefault()
return}if(s.r)return
t=s.an(a)
if(s.c.hl(u,t))a.preventDefault()},
eS:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.an(s.y)
s.d.eI(u,t,r)}},
f4:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bD(a)
u=t.bz(a)
if(t.e.hi(u))a.preventDefault()},
f0:function(a){var u
this.bD(a)
u=this.bz(a)
if(this.e.hg(u))a.preventDefault()},
f2:function(a){var u
this.bD(a)
u=this.bz(a)
if(this.e.hh(u))a.preventDefault()}}
D.ba.prototype={
ak:function(a){var u=this.r
if(u!=null)u.G(a)},
dP:function(){return this.ak(null)},
$ia3:1}
D.a3.prototype={}
D.cE.prototype={
ak:function(a){var u=this.x
if(u!=null)u.G(a)},
cF:function(a){var u=this.y
if(u!=null)u.G(a)},
eH:function(){return this.cF(null)},
eV:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.e0(s))return!1}return!0},
eh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcE(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.ba)this.e.push(q)
p=q.r
if(p==null){p=new D.bc()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}u=new D.bg()
u.b=!0
this.ak(u)},
eZ:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gcE();u.B();){s=u.gJ(u)
C.b.K(this.e,s)
s.gA().K(0,t)}u=new D.bh()
u.b=!0
this.ak(u)},
e0:function(a){var u=C.b.ao(this.e,a)
return u},
$aj:function(){return[D.a3]},
$aaN:function(){return[D.a3]}}
D.fQ.prototype={$ia3:1}
D.hd.prototype={$ia3:1}
V.S.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aO.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.eP.prototype={}
V.cK.prototype={
a9:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cK))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bz(H.d([q.a,q.d,q.r],p),3,0),n=V.bz(H.d([q.b,q.e,q.x],p),3,0),m=V.bz(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.ay.prototype={
a9:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
da:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.A().a)return V.cL()
h=1/i
g=-a
f=-t
return V.al((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.i(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.i(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.i(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.al(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
bf:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.i(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.x(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
c9:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.i(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.Q(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.L()},
E:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bz(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.bz(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.bz(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.bz(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
L:function(){return this.E("")}}
V.a9.prototype={
w:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.Q.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.i(t)
return new V.Q(this.a+b.a,this.b+b.b,u+t)},
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
return new V.Q(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.Q(this.a*b,this.b*b,u*b)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bj.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bj))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.cV.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.C.prototype={
bY:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.i(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.C(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.l0
return u==null?$.l0=new V.C(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.C(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.i(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.x.prototype={
bY:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.i(t)
return this.a*a.a+this.b*a.b+u*t},
bZ:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.i(s)
return new V.x(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ap:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.i(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.x(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.i(r)
return new V.x(this.a+u,this.b+t,s+r)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.x(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.x(this.a*b,this.b*b,u*b)},
q:function(a,b){var u
if(Math.abs(b-0)<$.A().a)return V.c_()
u=this.c
if(typeof u!=="number")return u.q()
return new V.x(this.a/b,this.b/b,u/b)},
dc:function(){var u,t=$.A(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.i(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.i(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.ex.prototype={
bk:function(a){var u=V.o6(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.F():u},
O:function(a){var u=this.y
if(u!=null)u.G(a)},
scb:function(a,b){},
sc_:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bk(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.O(s)}},
sc1:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bk(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.O(s)}},
sV:function(a,b){var u,t=this
b=t.bk(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.O(u)}},
sc0:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.O(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.O(t)}},
sbO:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.O(u)}},
aj:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sV(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cp.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.F():u},
aJ:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cp))return!1
return J.y(this.a,b.a)},
h:function(a){return"Constant: "+this.a.E("          ")}}
U.bG.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.F():u},
O:function(a){var u=this.e
if(u!=null)u.G(a)},
a1:function(){return this.O(null)},
ef:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gax(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gA()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bg()
u.b=!0
this.O(u)},
eX:function(a,b){var u,t
for(u=b.gU(b),t=this.gax();u.B();)u.gJ(u).gA().K(0,t)
u=new D.bh()
u.b=!0
this.O(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a_(r,r.length),u=null;r.B();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.cL():u
r=s.e
if(r!=null)r.a4(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.y(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a4]},
$aaN:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.df.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.F():u},
O:function(a){var u=this.cy
if(u!=null)u.G(a)},
a1:function(){return this.O(null)},
aP:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcU().l(0,u.gbr())
u.a.c.gdd().l(0,u.gbt())
u.a.c.gca().l(0,u.gbv())
return!0},
bs:function(a){var u=this
if(!J.y(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bu:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaA")
if(!n.y)return
if(n.x){u=a.d.w(0,a.y)
u=new V.C(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.w(0,a.y)
u=new V.C(t.a,t.b).m(0,2).q(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.i(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=new V.C(s.a,s.b).m(0,2).q(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.i(p)
o=n.z
if(typeof o!=="number")return H.i(o)
s.sV(0,-q*p+o)
n.b.sR(0)
t=t.w(0,a.z)
n.Q=new V.C(t.a,t.b).m(0,2).q(0,u.ga3())}n.a1()},
bw:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.i(s)
u.sR(t*10*s)
r.a1()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.M()
if(q<p){r.ch=p
u=b.y
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.al(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia4:1}
U.dg.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.F():u},
O:function(a){var u=this.fx
if(u!=null)u.G(a)},
a1:function(){return this.O(null)},
aP:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcU().l(0,s.gbr())
s.a.c.gdd().l(0,s.gbt())
s.a.c.gca().l(0,s.gbv())
u=s.a.d
t=u.f
u=t==null?u.f=D.F():t
u.l(0,s.ge8())
u=s.a.d
t=u.d
u=t==null?u.d=D.F():t
u.l(0,s.gea())
u=s.a.e
t=u.b
u=t==null?u.b=D.F():t
u.l(0,s.gfn())
u=s.a.e
t=u.d
u=t==null?u.d=D.F():t
u.l(0,s.gfl())
u=s.a.e
t=u.c
u=t==null?u.c=D.F():t
u.l(0,s.gfj())
return!0},
ah:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.C(u,t)},
bs:function(a){var u=this
H.o(a,"$iaA")
if(!J.y(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bu:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaA")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.C(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ah(new V.C(t.a,t.b).m(0,2).q(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ah(new V.C(s.a,s.b).m(0,2).q(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).m(0,2).q(0,u.ga3()))}n.a1()},
bw:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sR(-t*10*u)
r.a1()}},
e9:function(a){var u=this
if(H.o(a,"$icG").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eb:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaA")
if(!J.y(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ah(new V.C(s.a,s.b).m(0,2).q(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).m(0,2).q(0,u.ga3()))
n.a1()},
fo:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fm:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$id8")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.C(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.i(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ah(new V.C(t.a,t.b).m(0,2).q(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.i(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.i(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ah(new V.C(s.a,s.b).m(0,2).q(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.i(p)
o=n.cy
if(typeof o!=="number")return H.i(o)
s.sV(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.i(q)
s=n.db
if(typeof s!=="number")return H.i(s)
o.sV(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ah(new V.C(t.a,t.b).m(0,2).q(0,u.ga3()))}n.a1()},
fk:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.i(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.i(u)
s.sR(-t*10*u)
r.a1()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.M()
if(q<p){r.dy=p
u=b.y
r.c.aj(0,u)
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.al(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.al(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia4:1}
U.dh.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.F():u},
O:function(a){var u=this.r
if(u!=null)u.G(a)},
aP:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.F():t
t=r.gec()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.F():s).l(0,t)
return!0},
ed:function(a){var u,t,s,r,q=this
if(!J.y(q.b,q.a.b.c))return
H.o(a,"$ibM")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.O(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.al(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia4:1}
M.cu.prototype={
az:function(a){var u=this.y
if(u!=null)u.G(a)},
dQ:function(){return this.az(null)},
er:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gay(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bc()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bg()
u.b=!0
this.az(u)},
eu:function(a,b){var u,t
for(u=b.gU(b),t=this.gay();u.B();)u.gJ(u).gA().K(0,t)
u=new D.bh()
u.b=!0
this.az(u)},
gA:function(){var u=this.y
return u==null?this.y=D.F():u},
aH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dr(f.d)
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
if(typeof s!=="number")return H.i(s)
o=C.d.ad(p*s)
p=q.b
if(typeof r!=="number")return H.i(r)
n=C.d.ad(p*r)
p=C.d.ad(q.c*s)
a.c=p
q=C.d.ad(q.d*r)
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
i=V.al(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dq(i)
t=$.kK
if(t==null){t=V.kM()
q=V.k6()
p=$.l1
t=V.kH(t,q,p==null?$.l1=new V.x(0,0,-1):p)
$.kK=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.m(0,h)}a.db.dq(h)
for(u=f.e.a,u=new J.a_(u,u.length);u.B();)u.d.aj(0,a)
for(u=f.e.a,u=new J.a_(u,u.length);u.B();)u.d.aH(a)
f.b.toString
a.cy.c3()
a.db.c3()
f.c.toString
a.dn()}}
A.cl.prototype={}
A.el.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Y.prototype={
gae:function(a){var u=this.a?1:0
return u|0|0},
h:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Y))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fk.prototype={
dI:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.P("")
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
A.nl(c3,u)
A.nn(c3,u)
A.nm(c3,u)
A.np(c3,u)
A.nq(c3,u)
A.no(c3,u)
A.nr(c3,u)
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
m=A.nk(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cw(n,35633)
b8.f=b8.cw(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.r(P.t("Failed to link shader: "+H.f(l)))}b8.ff()
b8.fh()
b8.Q=b8.x.i(0,"posAttr")
b8.cx=b8.x.i(0,"normAttr")
b8.ch=b8.x.i(0,"binmAttr")
b8.cy=b8.x.i(0,"txt2DAttr")
b8.db=b8.x.i(0,"txtCubeAttr")
b8.dx=b8.x.i(0,"bendAttr")
if(c3.dx)b8.id=H.o(b8.y.T(0,"invViewMat"),"$iaa")
if(t)b8.dy=H.o(b8.y.T(0,"objMat"),"$iaa")
if(r)b8.fr=H.o(b8.y.T(0,"viewObjMat"),"$iaa")
b8.fy=H.o(b8.y.T(0,"projViewObjMat"),"$iaa")
if(c3.ry)b8.k1=H.o(b8.y.T(0,"txt2DMat"),"$ibX")
if(c3.x1)b8.k2=H.o(b8.y.T(0,"txtCubeMat"),"$iaa")
if(c3.x2)b8.k3=H.o(b8.y.T(0,"colorMat"),"$iaa")
b8.r1=H.d([],[A.aa])
t=c3.y2
if(t>0){b8.k4=b8.y.T(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.i(0,q)
if(j==null)H.r(P.t(c0+q+c1))
s.push(H.o(j,"$iaa"))}}if(c3.a.a)b8.r2=H.o(b8.y.T(0,"emissionClr"),"$iI")
if(c3.b.a)b8.x1=H.o(b8.y.T(0,"ambientClr"),"$iI")
if(c3.c.a)b8.y2=H.o(b8.y.T(0,"diffuseClr"),"$iI")
if(c3.d.a)b8.cW=H.o(b8.y.T(0,"invDiffuseClr"),"$iI")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cY=H.o(b8.y.T(0,"shininess"),"$iV")
if(t)b8.cX=H.o(b8.y.T(0,"specularClr"),"$iI")}if(c3.cy){b8.cZ=H.o(b8.y.T(0,"envSampler"),"$ibp")
if(c3.r.a)b8.d_=H.o(b8.y.T(0,"reflectClr"),"$iI")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d0=H.o(b8.y.T(0,"refraction"),"$iV")
if(t)b8.d1=H.o(b8.y.T(0,"refractClr"),"$iI")}}if(c3.y.a)b8.d2=H.o(b8.y.T(0,"alpha"),"$iV")
t=P.u
s=[t,A.db]
b8.bP=new H.K(s)
b8.bQ=new H.K([t,[P.m,A.bW]])
b8.bR=new H.K(s)
b8.bS=new H.K([t,[P.m,A.bY]])
b8.bT=new H.K(s)
b8.bU=new H.K([t,[P.m,A.bZ]])
if(c3.id){for(t=c3.z,s=t.length,r=[A.bW],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.aa()
p=(g&1)!==0
if(p){o=b8.y
d=f+"s["+k+"].objUp"
j=o.i(0,d)
if(j==null)H.r(P.t(c0+d+c1))
H.o(j,"$iI")
o=b8.y
d=f+"s["+k+"].objRight"
c=o.i(0,d)
if(c==null)H.r(P.t(c0+d+c1))
H.o(c,"$iI")
o=b8.y
d=f+"s["+k+"].objDir"
b=o.i(0,d)
if(b==null)H.r(P.t(c0+d+c1))
H.o(b,"$iI")
a=b
a0=c
a1=j}else{a=b9
a0=a
a1=a0}o=b8.y
d=f+"s["+k+"].viewDir"
j=o.i(0,d)
if(j==null)H.r(P.t(c0+d+c1))
H.o(j,"$iI")
o=b8.y
d=f+"s["+k+"].color"
c=o.i(0,d)
if(c==null)H.r(P.t(c0+d+c1))
H.o(c,"$iI")
if(p){p=b8.y
o=f+"sTexture2D"+k
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.o(b,"$ibo")
a2=b}else a2=b9
e.push(new A.bW(a1,a0,a,j,c,a2))}b8.bQ.k(0,g,e)
q=b8.bP
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.k(0,g,j)}for(t=c3.Q,s=t.length,r=[A.bY],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
H.o(j,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.i(0,o)
if(c==null)H.r(P.t(c0+o+c1))
H.o(c,"$iI")
p=b8.y
o=f+"s["+k+"].color"
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.o(b,"$iI")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$ibX")
a4=a3}else a4=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$ibp")
a2=a3}else a2=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$ibp")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$ibV")
a6=a3
a7=a5}else{a6=b9
a7=a6}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a8=p.i(0,o)
if(a8==null)H.r(P.t(c0+o+c1))
H.o(a8,"$iV")
a9=a8
b0=a5
b1=a3}else{a9=b9
b0=a9
b1=b0}e.push(new A.bY(j,c,a4,b,a2,a6,a7,b1,b0,a9))}b8.bS.k(0,g,e)
q=b8.bR
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.k(0,g,j)}for(t=c3.ch,s=t.length,r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.d([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
H.o(j,"$iI")
p=b8.y
o=f+"s["+k+"].objDir"
c=p.i(0,o)
if(c==null)H.r(P.t(c0+o+c1))
H.o(c,"$iI")
p=b8.y
o=f+"s["+k+"].viewPnt"
b=p.i(0,o)
if(b==null)H.r(P.t(c0+o+c1))
H.o(b,"$iI")
p=b8.y
o=f+"s["+k+"].color"
a3=p.i(0,o)
if(a3==null)H.r(P.t(c0+o+c1))
H.o(a3,"$iI")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$iI")
p=b8.y
o=f+"s["+k+"].objRight"
a8=p.i(0,o)
if(a8==null)H.r(P.t(c0+o+c1))
H.o(a8,"$iI")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.i(0,o)
if(b2==null)H.r(P.t(c0+o+c1))
H.o(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.i(0,o)
if(b3==null)H.r(P.t(c0+o+c1))
H.o(b3,"$iV")
b4=b3
b5=b2
a0=a8
a1=a5}else{b4=b9
b5=b4
a0=b5
a1=a0}p=(g&2)!==0
if(p){o=b8.y
d=f+"s["+k+"].shadowAdj"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$ibV")
a7=a5}else a7=b9
if((g&8)!==0){o=b8.y
d=f+"s["+k+"].cutoff"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$iV")
o=b8.y
d=f+"s["+k+"].coneAngle"
a8=o.i(0,d)
if(a8==null)H.r(P.t(c0+d+c1))
H.o(a8,"$iV")
b6=a8
b7=a5}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
d=f+"s["+k+"].att0"
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$iV")
o=b8.y
d=f+"s["+k+"].att1"
a8=o.i(0,d)
if(a8==null)H.r(P.t(c0+d+c1))
H.o(a8,"$iV")
o=b8.y
d=f+"s["+k+"].att2"
b2=o.i(0,d)
if(b2==null)H.r(P.t(c0+d+c1))
H.o(b2,"$iV")
a9=b2
b0=a8
b1=a5}else{a9=b9
b0=a9
b1=b0}if((g&1)!==0){o=b8.y
d=f+"sTexture2D"+k
a5=o.i(0,d)
if(a5==null)H.r(P.t(c0+d+c1))
H.o(a5,"$ibo")
a2=a5}else a2=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a5=p.i(0,o)
if(a5==null)H.r(P.t(c0+o+c1))
H.o(a5,"$ibo")
a6=a5}else a6=b9
e.push(new A.bZ(j,c,b,a3,a1,a0,b5,b4,a7,b7,b6,b1,b0,a9,a2,a6))}b8.bU.k(0,g,e)
q=b8.bT
p=b8.y
o=f+"Count"
j=p.i(0,o)
if(j==null)H.r(P.t(c0+o+c1))
q.k(0,g,j)}}},
fd:function(a,b){}}
A.cr.prototype={
h:function(a){return"dirLight"+H.f(this.a)}}
A.cS.prototype={
h:function(a){return"pointLight"+H.f(this.a)}}
A.cZ.prototype={
h:function(a){return"spotLight"+H.f(this.a)}}
A.fn.prototype={
h:function(a){return this.aU}}
A.bW.prototype={}
A.bY.prototype={}
A.bZ.prototype={}
A.cX.prototype={
dL:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.t("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
ff:function(){var u,t,s,r=this,q=H.d([],[A.cl]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cl(p,t.name,s))}r.x=new A.el(q)},
fh:function(){var u,t,s,r=this,q=H.d([],[A.da]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.i(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fI(t.type,t.size,t.name,s))}r.y=new A.hM(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.db(u,b,c)
else return A.k3(u,this.r,b,a,c)},
e1:function(a,b,c){var u=this.a
if(a===1)return new A.bo(u,b,c)
else return A.k3(u,this.r,b,a,c)},
e2:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.k3(u,this.r,b,a,c)},
b4:function(a,b){return new P.ds(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fI:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.hI(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.bV(u.a,c,d)
case 35667:return new A.hJ(u.a,c,d)
case 35668:return new A.hK(u.a,c,d)
case 35669:return new A.hL(u.a,c,d)
case 35674:return new A.hN(u.a,c,d)
case 35675:return new A.bX(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.e1(b,c,d)
case 35680:return u.e2(b,c,d)
case 35670:throw H.c(u.b4("BOOL",c))
case 35671:throw H.c(u.b4("BOOL_VEC2",c))
case 35672:throw H.c(u.b4("BOOL_VEC3",c))
case 35673:throw H.c(u.b4("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.da.prototype={}
A.hM.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.i(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
h:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.db.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hJ.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hK.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hL.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hH.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.V.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hI.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.I.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bV.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hN.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.bX.prototype={
ag:function(a){var u=new Float32Array(H.bu(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.aa.prototype={
ag:function(a){var u=new Float32Array(H.bu(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.bo.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bp.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iW.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bZ(s.b,b).bZ(s.d.bZ(s.c,b),c)
a.sV(0,new V.Q(r.a,r.b,r.c))
a.sc8(r.q(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sbH(new V.bj(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.j5.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.j7.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.i(p)
s=-s*p
u=r*p
a.sV(0,new V.Q(s,u,q))
u=new V.x(s,u,q)
a.sc8(u.q(0,Math.sqrt(u.C(u))))
a.sbH(new V.bj(1-c,2+c,-1,-1))}}
F.jj.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.x(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.q(0,Math.sqrt(r.C(r)))
a.sV(0,new V.Q(s.a,s.b,s.c))}}
F.jF.prototype={
$2:function(a,b){return 0}}
F.jG.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.i(s)
u=a.f
t=new V.x(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.C(t))).m(0,this.b+s)
a.sV(0,new V.Q(s.a,s.b,s.c))}}
F.jJ.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.j6.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.ks(m.$1(n),l)
l=J.ks(m.$1(n+3.141592653589793/o.c),l).w(0,k)
l=new V.x(l.a,l.b,l.c)
u=l.q(0,Math.sqrt(l.C(l)))
m=$.l2
if(m==null){m=new V.x(1,0,0)
$.l2=m
t=m}else t=m
m=u.ap(!J.y(u,t)?V.l4():t)
s=m.q(0,Math.sqrt(m.C(m)))
m=s.ap(u)
t=m.q(0,Math.sqrt(m.C(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.i(p)
a.sV(0,k.v(0,new V.Q(m.a-l.a,m.b-l.b,q-p)))}}
F.jc.prototype={
$2:function(a,b){return 0}}
F.jd.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sV(0,new V.Q(s,r,this.a.a.$2(b,c)))
u=new V.x(s,r,1)
a.sc8(u.q(0,Math.sqrt(u.C(u))))
u=1-b
t=1-c
a.sbH(new V.bj(b*c,2+u*c,4+b*t,6+u*t))}}
F.bd.prototype={
aS:function(){var u=this
if(!u.gaT()){C.b.K(u.a.a.d.b,u)
u.a.a.Y()}u.bA()
u.bB()
u.f7()},
bE:function(a){this.a=a
a.d.b.push(this)},
bF:function(a){this.b=a
a.d.c.push(this)},
fe:function(a){this.c=a
a.d.d.push(this)},
bA:function(){var u=this.a
if(u!=null){C.b.K(u.d.b,this)
this.a=null}},
bB:function(){var u=this.b
if(u!=null){C.b.K(u.d.c,this)
this.b=null}},
f7:function(){var u=this.c
if(u!=null){C.b.K(u.d.d,this)
this.c=null}},
gaT:function(){return this.a==null||this.b==null||this.c==null},
dY:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c_()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dc())return
return s.q(0,Math.sqrt(s.C(s)))},
e_:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.C(r)))
r=t.w(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.ap(r.q(0,Math.sqrt(r.C(r))))
return r.q(0,Math.sqrt(r.C(r)))},
bK:function(){var u,t=this
if(t.d!=null)return!0
u=t.dY()
if(u==null){u=t.e_()
if(u==null)return!1}t.d=u
t.a.a.Y()
return!0},
dX:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c_()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.dc())return
return s.q(0,Math.sqrt(s.C(s)))},
dZ:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.w(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.w(0,g).m(0,p).v(0,g).w(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.C(l)))
l=o.ap(q)
l=l.q(0,Math.sqrt(l.C(l))).ap(o)
q=l.q(0,Math.sqrt(l.C(l)))}return q},
bI:function(){var u,t=this
if(t.e!=null)return!0
u=t.dX()
if(u==null){u=t.dZ()
if(u==null)return!1}t.e=u
t.a.a.Y()
return!0},
gfD:function(a){var u=this
if(J.y(u.a,u.b))return!0
if(J.y(u.b,u.c))return!0
if(J.y(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
E:function(a){var u,t,s=this
if(s.gaT())return a+"disposed"
u=a+C.a.a8(J.a1(s.a.e),0)+", "+C.a.a8(J.a1(s.b.e),0)+", "+C.a.a8(J.a1(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
L:function(){return this.E("")}}
F.eS.prototype={}
F.ha.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bJ.prototype={
aS:function(){var u=this
if(!u.gaT()){C.b.K(u.a.a.c.b,u)
u.a.a.Y()}u.bA()
u.bB()},
bE:function(a){this.a=a
a.c.b.push(this)},
bF:function(a){this.b=a
a.c.c.push(this)},
bA:function(){var u=this.a
if(u!=null){C.b.K(u.c.b,this)
this.a=null}},
bB:function(){var u=this.b
if(u!=null){C.b.K(u.c.c,this)
this.b=null}},
gaT:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
E:function(a){if(this.gaT())return a+"disposed"
return a+C.a.a8(J.a1(this.a.e),0)+", "+C.a.a8(J.a1(this.b.e),0)},
L:function(){return this.E("")}}
F.f7.prototype={}
F.hG.prototype={
aW:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.bQ.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.a8(J.a1(u.e),0)},
L:function(){return this.E("")}}
F.h3.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.F():u},
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){r=g[s]
h.a.l(0,r.fG())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.bQ()
if(n.a==null)H.r(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.m6(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.q)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.cv(l,k,i)}g=h.e
if(g!=null)g.a4(0)},
a2:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a2()||!1
if(!t.a.a2())u=!1
s=t.e
if(s!=null)s.a4(0)
return u},
ft:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.b(p,u)
o=p[u]
p=o.y
n=C.d.aV(p.a*q)
p=p.b
if(typeof r!=="number")return r.w()
m=C.d.aV(p*(r-1))
n=n>=0?C.c.af(n,c):c+C.c.af(n,c)
l=(n+(m>=0?C.c.af(m,r):r+C.c.af(m,r))*c)*4
if(l<0||l>=s)return H.b(t,l)
p=t[l]
k=l+1
if(k>=s)return H.b(t,k)
k=t[k]
j=l+2
if(j>=s)return H.b(t,j)
j=t[j]
i=l+3
if(i>=s)return H.b(t,i)
p/=255
k/=255
j/=255
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.v()
k=new V.Q(g+j*h,f+i*h,e+k*h)
if(!J.y(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.G(null)}}}c=d.e
if(c!=null)c.a4(0)},
hC:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.b(s,u)
r=s[u]
if((t&$.at().a)===0)r.f=null
if((t&$.af().a)===0)r.r=null
if((t&$.as().a)===0)r.x=null
if((t&$.aK().a)===0)r.y=null
if((t&$.aL().a)===0)r.z=null
if((t&$.kq().a)===0)r.Q=null
if((t&$.b5().a)===0)r.ch=0
if((t&$.ar().a)===0)r.cx=null}q=this.e
if(q!=null)q.a4(0)},
hB:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.b(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.a4(0)},
h5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.jb(o,0)])
for(o=[F.br];u.length!==0;){t=C.b.gfW(u)
C.b.ds(u,0)
if(t!=null){s=H.d([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aW(0,t,q)){s.push(q)
C.b.ds(u,r)}}if(s.length>1)b.bb(s)}}p.a.u()
p.c.bd()
p.d.bd()
p.b.ho()
p.c.c5(new F.hG())
p.d.c5(new F.ha())
o=p.e
if(o!=null)o.a4(0)},
b5:function(){this.h5(new F.ia(),new F.fJ())},
fB:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.at()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.af().a)!==0)++s
if((t&$.as().a)!==0)++s
if((t&$.aK().a)!==0)++s
if((t&$.aL().a)!==0)++s
if((t&$.cg().a)!==0)++s
if((t&$.ch().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.ar().a)!==0)++s
r=a4.gcf(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.d(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cm])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fu(m)
k=l.gcf(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cm(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].h3(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bu(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cn(new Z.di(a1,d),o,a4)
c.b=H.d([],[Z.bf])
if(a0.b.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bf(0,b.length,a))}if(a0.c.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bf(1,b.length,a))}if(a0.d.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bf(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.d([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.E(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.E(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.E(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.E(t))}return C.b.t(s,"\n")},
Y:function(){var u=this.e
if(u!=null)u.G(null)}}
F.h4.prototype={
fs:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.d([],[F.bd])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.cv(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cv(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cv(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.cv(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aW(0,p,n)){p.aS()
break}}}}},
bd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfD(s)
if(t)s.aS()}},
a2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bK())s=!1
return s},
bJ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bI())s=!1
return s},
h:function(a){return this.L()},
E:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(a))
return C.b.t(r,"\n")},
L:function(){return this.E("")}}
F.h5.prototype={
gj:function(a){return this.b.length},
c5:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aW(0,p,n)){p.aS()
break}}}}},
bd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.y(s.a,s.b)
if(t)s.aS()}},
h:function(a){return this.L()},
E:function(a){var u,t,s=H.d([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.b.t(s,"\n")},
L:function(){return this.E("")}}
F.h6.prototype={
gj:function(a){return this.b.length},
ho:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.b.K(s.b.b,t)
t.a=null}}}},
h:function(a){return this.L()},
E:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(a))
return C.b.t(r,"\n")},
L:function(){return this.E("")}}
F.br.prototype={
bN:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.k7(u.cx,r,o,t,s,q,p,a,n)},
fG:function(){return this.bN(null)},
sV:function(a,b){var u
if(!J.y(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Y()}},
sc8:function(a){var u
if(!J.y(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Y()}},
sbH:function(a){var u
if(!J.y(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Y()}},
h3:function(a){var u,t,s=this
if(a.n(0,$.at())){u=s.f
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.af())){u=s.r
t=[P.J]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.as())){u=s.x
t=[P.J]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.aK())){u=s.y
t=[P.J]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.n(0,$.aL())){u=s.z
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.cg())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.n(0,$.ch())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.b5()))return H.d([s.ch],[P.J])
else if(a.n(0,$.ar())){u=s.cx
t=[P.J]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.J])},
bK:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c_()
t.d.D(0,new F.ig(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.a4(0)}return!0},
bI:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c_()
t.d.D(0,new F.ie(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Y()
s=t.a.e
if(s!=null)s.a4(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.L()},
E:function(a){var u,t,s=this,r="-",q=H.d([],[P.n])
q.push(C.a.a8(J.a1(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.t(q,", ")
return a+"{"+t+"}"},
L:function(){return this.E("")}}
F.ig.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.ie.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.i5.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Y()
return!0},
gj:function(a){return this.c.length},
a2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bK()
return!0},
bJ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bI()
return!0},
fC:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
h:function(a){return this.L()},
E:function(a){var u,t,s,r
this.u()
u=H.d([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].E(a))
return C.b.t(u,"\n")},
L:function(){return this.E("")}}
F.i6.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
D:function(a,b){var u=this
C.b.D(u.b,b)
C.b.D(u.c,new F.i7(u,b))
C.b.D(u.d,new F.i8(u,b))},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(""))
return C.b.t(r,"\n")}}
F.i7.prototype={
$1:function(a){if(!J.y(a.a,this.a))this.b.$1(a)}}
F.i8.prototype={
$1:function(a){var u=this.a
if(!J.y(a.a,u)&&!J.y(a.b,u))this.b.$1(a)}}
F.i9.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(""))
return C.b.t(r,"\n")}}
F.ib.prototype={}
F.ia.prototype={
aW:function(a,b,c){return J.y(b.f,c.f)}}
F.ic.prototype={}
F.fJ.prototype={
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k=V.c_()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=k.a
q=s.a
p=k.b
o=s.b
n=k.c
s=s.c
if(typeof n!=="number")return n.v()
if(typeof s!=="number")return H.i(s)
k=new V.x(r+q,p+o,n+s)}}k=k.q(0,Math.sqrt(k.C(k)))
for(u=a.length,s=k==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){m=a[t]
if(s)l=null
else{r=k.a
q=k.b
p=k.c
if(typeof p!=="number")return p.m()
l=k.q(0,Math.sqrt(r*r+q*q+p*p))}if(!J.y(m.r,l)){m.r=l
r=m.a
if(r!=null){r=r.e
if(r!=null)r.G(null)}}}return}}
F.id.prototype={
gj:function(a){return this.b.length},
h:function(a){return this.L()},
L:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].E(""))
return C.b.t(r,"\n")}}
O.cI.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.F():u},
a6:function(a){var u=this.fr
if(u!=null)u.G(a)},
ep:function(){return this.a6(null)},
cG:function(a){this.a=null
this.a6(a)},
fb:function(){return this.cG(null)},
ej:function(a,b){var u=new D.bg()
u.b=!0
this.a6(u)},
el:function(a,b){var u=new D.bh()
u.b=!0
this.a6(u)},
ct:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.u,h=new H.K([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=h.i(0,0)
h.k(0,0,r==null?1:r)}q=H.d([],[A.cr])
h.D(0,new O.fr(j,q))
C.b.bi(q,new O.fs())
p=new H.K([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){o=u[s]
r=o.gaR()
n=p.i(0,o.gaR())
p.k(0,r,n==null?1:n)}m=H.d([],[A.cS])
p.D(0,new O.ft(j,m))
C.b.bi(m,new O.fu())
l=new H.K([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.q)(i),++s){o=i[s]
t=o.gaR()
r=l.i(0,o.gaR())
l.k(0,t,r==null?1:r)}k=H.d([],[A.cZ])
l.D(0,new O.fv(j,k))
C.b.bi(k,new O.fw())
i=C.c.a_(j.e.a.length+3,4)
j.dy.e
return A.md(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
dW:function(a,b){},
aj:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a_(u,u.length);u.B();){t=u.d
t.toString
s=$.i4
if(s==null)s=$.i4=new V.x(0,0,1)
t.a=s
r=$.i3
t.d=r==null?$.i3=new V.x(0,1,0):r
r=$.i2
t.e=r==null?$.i2=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bf(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bf(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bf(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
hq:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a
if(b2==null){b2=b1.ct()
u=b3.fr.i(0,b2.aU)
if(u==null){u=A.mc(b2,b3.a)
t=u.b
if(t.length===0)H.r(P.t("May not cache a shader with no name."))
if(b3.fr.b7(0,t))H.r(P.t('Shader cache already contains a shader by the name "'+t+'".'))
b3.fr.k(0,t,u)}b2=b1.a=u
b4.e=null}s=b2.z
r=s.cV
b2=b4.e
if(!(b2 instanceof Z.cn))b2=b4.e=null
if(b2==null||!b2.d.n(0,r)){b2=s.k3
if(b2)b4.d.a2()
q=s.k4
if(q){p=b4.d
o=p.e
if(o!=null)++o.d
p.d.bJ()
p.a.bJ()
p=p.e
if(p!=null)p.a4(0)}p=s.r2
if(p){o=b4.d
n=o.e
if(n!=null)++n.d
o.a.fC()
o=o.e
if(o!=null)o.a4(0)}m=b4.d.fB(new Z.ii(b3.a),r)
m.aF($.at()).e=b1.a.Q.c
if(b2)m.aF($.af()).e=b1.a.cx.c
if(q)m.aF($.as()).e=b1.a.ch.c
if(s.r1)m.aF($.aK()).e=b1.a.cy.c
if(p)m.aF($.aL()).e=b1.a.db.c
if(s.rx)m.aF($.ar()).e=b1.a.dx.c
b4.e=m}l=H.d([],[T.d3])
b2=b1.a
q=b3.a
q.useProgram(b2.r)
b2.x.fR()
if(s.dy){b2=b1.a
p=b3.dx
p=p.gZ(p)
b2=b2.dy
b2.toString
b2.ag(p.a9(0,!0))}if(s.fr){b2=b1.a
p=b3.cx
if(p==null){p=b3.db
p=p.gZ(p)
o=b3.dx
o=b3.cx=p.m(0,o.gZ(o))
p=o}b2=b2.fr
b2.toString
b2.ag(p.a9(0,!0))}b2=b1.a
p=b3.ch
if(p==null){p=b3.ghn()
o=b3.dx
o=b3.ch=p.m(0,o.gZ(o))
p=o}b2=b2.fy
b2.toString
b2.ag(p.a9(0,!0))
if(s.ry){b2=b1.a
p=b1.b
b2=b2.k1
b2.toString
b2.ag(C.j.a9(p,!0))}if(s.x1){b2=b1.a
p=b1.c
b2=b2.k2
b2.toString
b2.ag(C.j.a9(p,!0))}if(s.x2){b2=b1.a
p=b1.d
b2=b2.k3
b2.toString
b2.ag(C.j.a9(p,!0))}if(s.y2>0){k=b1.e.a.length
b2=b1.a.k4
b2.a.uniform1i(b2.d,k)
for(j=0;j<k;++j){b2=b1.a
p=b1.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b2=b2.r1
if(j>=b2.length)return H.b(b2,j)
b2=b2[j]
i=new Float32Array(H.bu(p.a9(0,!0)))
b2.a.uniformMatrix4fv(b2.d,!1,i)}}if(s.a.a){b2=b1.a
p=b1.f.f
b2=b2.r2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.id){if(s.b.a){b2=b1.a
p=b1.r.f
b2=b2.x1
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.c.a){b2=b1.a
p=b1.x.f
b2=b2.y2
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}if(s.d.a){b2=b1.a
p=b1.y.f
b2=b2.cW
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.e.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.z.ch
p=p.cY
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.z.f
b2=b2.cX
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.z
if(b2.length>0){p=b3.db
h=p.gZ(p)
p=P.u
g=new H.K([p,p])
for(p=b1.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
d=g.i(0,0)
if(d==null)d=0
g.k(0,0,d+1)
c=J.ci(b1.a.bQ.i(0,0),d)
n=h.bf(e.a)
b=n.a
a=n.b
a0=n.c
if(typeof a0!=="number")return a0.m()
a0=n.q(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
n=a0.b
a0=a0.c
a.a.uniform3f(a.d,b,n,a0)
a0=e.c
n=c.f
n.a.uniform3f(n.d,a0.a,a0.b,a0.c)}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.q)(b2),++f){o=b2[f].a
k=g.i(0,o)
if(k==null)k=0
o=b1.a.bP.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.Q
if(b2.length>0){p=b3.db
h=p.gZ(p)
p=P.u
a1=new H.K([p,p])
for(p=b1.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
a2=e.gaR()
d=a1.i(0,a2)
if(d==null)d=0
a1.k(0,a2,d+1)
c=J.ci(b1.a.bS.i(0,a2),d)
a3=h.m(0,e.gZ(e))
n=e.gZ(e)
b=$.bR
n=n.c9(b==null?$.bR=new V.Q(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.bR
n=a3.c9(n==null?$.bR=new V.Q(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaQ(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gau()
n=a3.da(0)
b=n.a
a=n.b
a0=n.c
a4=n.e
a5=n.f
a6=n.r
a7=n.y
a8=n.z
n=n.Q
a9=c.d
a9.toString
i=new Float32Array(H.bu(new V.cK(b,a,a0,a4,a5,a6,a7,a8,n).a9(0,!0)))
a9.a.uniformMatrix3fv(a9.d,!1,i)
e.gau()
n=e.gau()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gau()
b=n.gat(n)
if(b){b=c.f
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}e.gaK()
n=e.gdD()
b=c.x
b.toString
a=n.gfN(n)
a0=n.gfO(n)
a4=n.gfP()
n=n.gfM()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaK()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gaK()
b=n.gat(n)
if(b){b=c.r
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}if(e.gfS()){n=e.gfv()
b=c.y
b.a.uniform1f(b.d,n)
n=e.gfw()
b=c.z
b.a.uniform1f(b.d,n)
n=e.gfz()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.q)(b2),++f){o=b2[f].a
k=a1.i(0,o)
if(k==null)k=0
o=b1.a.bR.i(0,o)
o.a.uniform1i(o.d,k)}}b2=s.ch
if(b2.length>0){p=b3.db
h=p.gZ(p)
p=P.u
b0=new H.K([p,p])
for(p=b1.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.q)(p),++f){e=p[f]
a2=e.gaR()
d=b0.i(0,a2)
if(d==null)d=0
b0.k(0,a2,d+1)
c=J.ci(b1.a.bU.i(0,a2),d)
n=e.ghm(e)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.ghH(e).hZ()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=h.c9(e.ghm(e))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gaQ(e)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
e.gau()
n=e.gca()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gc7(e)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=e.gi_()
b=c.x
b.a.uniform1f(b.d,n)
n=e.gi0()
b=c.y
b.a.uniform1f(b.d,n)
e.gau()
n=e.gau()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gau()
b=n.gat(n)
if(b){b=c.dx
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}e.gaK()
n=e.gdD()
b=c.z
b.toString
a=n.gfN(n)
a0=n.gfO(n)
a4=n.gfP()
n=n.gfM()
b.a.uniform4f(b.d,a,a0,a4,n)
n=e.gaK()
if(!C.b.ao(l,n)){n.sar(0,l.length)
l.push(n)}n=e.gaK()
b=n.gat(n)
if(b){b=c.dy
b.toString
a=n.gat(n)
if(!a)b.a.uniform1i(b.d,0)
else{n=n.gar(n)
b.a.uniform1i(b.d,n)}}if(e.ghI()){n=e.ghG()
b=c.Q
b.a.uniform1f(b.d,n)
n=e.ghF()
b=c.ch
b.a.uniform1f(b.d,n)}if(e.gfS()){n=e.gfv()
b=c.cx
b.a.uniform1f(b.d,n)
n=e.gfw()
b=c.cy
b.a.uniform1f(b.d,n)
n=e.gfz()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b2.length,f=0;f<b2.length;b2.length===p||(0,H.q)(b2),++f){o=b2[f].a
k=b0.i(0,o)
if(k==null)k=0
o=b1.a.bT.i(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dx){b2=b1.a
p=b3.Q
if(p==null){p=b3.db
p=b3.Q=p.gZ(p).da(0)}b2=b2.id
b2.toString
b2.ag(p.a9(0,!0))}if(s.cy){b1.dW(l,b1.ch)
b2=b1.a
p=b1.ch
b2.fd(b2.cZ,p)
if(s.r.a){b2=b1.a
p=b1.cx.f
b2=b2.d_
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}b2=s.x.a
if(!b2)p=!1
else p=!0
if(p){p=b1.a
o=b1.cy.ch
p=p.d0
p.a.uniform1f(p.d,o)}if(b2){b2=b1.a
p=b1.cy.f
b2=b2.d1
b2.a.uniform3f(b2.d,p.a,p.b,p.c)}}b2=s.y.a
p=!b2
if(p)o=!1
else o=!0
if(o){if(b2){b2=b1.a
o=b1.db.f
b2=b2.d2
b2.a.uniform1f(b2.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b6(b3)
b2=b4.e
b2.b6(b3)
b2.aH(b3)
b2.dw(b3)
if(p)b2=!1
else b2=!0
if(b2)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dw(b3)
b2=b1.a
b2.toString
q.useProgram(null)
b2.x.fL()},
h:function(a){var u=this.a
if(u!=null)return u.b
else return this.ct().aU}}
O.fr.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cr(a,C.c.a_(b+3,4)*4))}}
O.fs.prototype={
$2:function(a,b){return J.jM(a.a,b.a)}}
O.ft.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cS(a,C.c.a_(b+3,4)*4))}}
O.fu.prototype={
$2:function(a,b){return J.jM(a.a,b.a)}}
O.fv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cZ(a,C.c.a_(b+3,4)*4))}}
O.fw.prototype={
$2:function(a,b){return J.jM(a.a,b.a)}}
O.fl.prototype={
am:function(){var u,t=this
t.ci()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.a6(u)}}}
O.cJ.prototype={
am:function(){},
cJ:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.am()
u=s.a
u.a=null
u.a6(null)}}}
O.fm.prototype={}
O.ak.prototype={
cI:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.a6(t)}},
am:function(){this.ci()
this.cI(new V.S(1,1,1))},
saQ:function(a,b){this.cJ(new A.Y(!0,!1,!1))
this.cI(b)}}
O.fo.prototype={}
O.fp.prototype={
am:function(){var u,t=this
t.cj()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.a6(u)}}}
O.fq.prototype={
cK:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.a6(t)}},
am:function(){this.cj()
this.cK(100)}}
O.d2.prototype={}
T.d3.prototype={}
T.hp.prototype={}
T.ht.prototype={}
T.hu.prototype={
h4:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.kC(a)
t=new T.ht()
t.a=0
t.b=q
t.d=t.c=!1
t.x=t.r=0
W.R(u,"load",new T.hv(this,t,u,!1,q,!1,!1),!1)
return t},
fc:function(a,b,c){var u,t,s,r
b=V.km(b)
u=V.km(a.width)
t=V.km(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jQ()
s.width=u
s.height=t
r=C.i.dB(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.nF(r.getImageData(0,0,s.width,s.height))}}}
T.hv.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=u.c,q=s.fc(r,s.b,u.d),p=u.b
p.r=r.width
p.x=r.height
r=s.a
r.bindTexture(t,u.e)
r.pixelStorei(37440,u.f?1:0)
C.Q.hw(r,t,0,6408,6408,5121,q)
if(u.r)r.generateMipmap(t)
r.bindTexture(t,null)
if(!p.d){p.d=!0
r=p.y
if(r!=null)r.fQ()}++s.e}}
T.hw.prototype={
e6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.ck()
u=C.c.a_(f,2)
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
if(i<0||i>=r)return H.b(s,i)
g=s[i]
if(h<0||h>=r)return H.b(s,h)
s[i]=s[h]
s[h]=g}}}}}
X.jP.prototype={}
X.eZ.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.F():u}}
X.cR.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.F():u},
aA:function(a){var u=this.f
if(u!=null)u.G(a)},
dT:function(){return this.aA(null)},
saX:function(a){var u,t,s=this
if(!J.y(s.b,a)){u=s.b
if(u!=null)u.gA().K(0,s.gco())
t=s.b
s.b=a
if(a!=null)a.gA().l(0,s.gco())
u=new D.z("mover",t,s.b)
u.b=!0
s.aA(u)}}}
X.hl.prototype={}
V.jE.prototype={
$1:function(a){var u=C.d.dv(this.a.gfZ(),2)
if(u!=="0.00")P.kn(u+" fps")}}
V.fT.prototype={
bG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.hV().gb_().i(0,H.f(u))
if(t==null)if(d){c.$0()
m.aO(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bA(m.c).l(0,q)
o=W.m2("radio")
o.checked=s
o.name=u
W.R(o,"change",new V.fU(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.bA(m.c).l(0,r.createElement("br"))},
X:function(a,b,c){return this.bG(a,b,c,!1)},
aO:function(a){var u,t,s=P.hV(),r=P.n,q=P.kG(s.gb_(),r,r)
q.k(0,this.a,a)
u=s.c6(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.dV([],[]).bg(""),"",t)}}
V.fU.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.aO(u.d)}}}
V.h7.prototype={
dM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.h9(o),!1)},
cP:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fg()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hA(C.b.h2(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
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
if(H.o1(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.iS(C.N,n,C.e,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.f(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
fp:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<3;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
fg:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.hz()
t=P.n
u.a=new H.K([t,R.d0])
u.b=new H.K([t,R.d7])
u.c=u.N(0,q)
t=u.N(0,q).t(0,p)
s=T.X(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,p).t(0,p)
s=new T.aB()
r=[T.cH]
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.N("*"))
s.a.push(t)
t=u.N(0,p).t(0,"BoldEnd")
s=T.X(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,o)
s=T.X(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,o).t(0,o)
s=new T.aB()
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.N("_"))
s.a.push(t)
t=u.N(0,o).t(0,n)
s=T.X(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,m)
s=T.X(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,m).t(0,m)
s=new T.aB()
s.a=H.d([],r)
t.a.push(s)
t=T.X(new H.N("`"))
s.a.push(t)
t=u.N(0,m).t(0,"CodeEnd")
s=T.X(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.N(0,q).t(0,l)
s=T.X(new H.N("["))
t.a.push(s)
t.c=!0
t=u.N(0,l).t(0,k)
s=T.X(new H.N("|"))
t.a.push(s)
s=u.N(0,l).t(0,j)
t=T.X(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,l).t(0,l)
t=new T.aB()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.N("|]"))
t.a.push(s)
s=u.N(0,k).t(0,j)
t=T.X(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.N(0,k).t(0,k)
t=new T.aB()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.N("|]"))
t.a.push(s)
u.N(0,q).t(0,i).a.push(new T.ei())
s=u.N(0,i).t(0,i)
t=new T.aB()
t.a=H.d([],r)
s.a.push(t)
s=T.X(new H.N("*_`["))
t.a.push(s)
s=u.N(0,"BoldEnd")
s.d=s.a.b1(p)
s=u.N(0,n)
s.d=s.a.b1(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b1(m)
s=u.N(0,j)
s.d=s.a.b1("Link")
s=u.N(0,i)
s.d=s.a.b1(i)
this.b=u}}
V.h9.prototype={
$1:function(a){P.kV(C.n,new V.h8(this.a))}}
V.h8.prototype={
$0:function(){var u=C.d.ad(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
V.hq.prototype={
X:function(a,b,c){var u,t,s,r,q=this,p=W.kC(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.bA(q.c)
t=u.gj(u)
W.R(p,"click",new V.hs(q,p,b,t),!1)
J.bA(q.c).l(0,p)
J.bA(q.c).l(0,document.createElement("br"))
s=P.hV().gb_().i(0,H.f(q.a))
if(s==null){q.aO(t)
r=c}else r=P.cf(s,null,null)===t
if(r)p.click()},
l:function(a,b){return this.X(a,b,!1)},
aO:function(a){var u,t,s=P.hV(),r=P.n,q=P.kG(s.gb_(),r,r)
q.k(0,this.a,""+a)
u=s.c6(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.dV([],[]).bg(""),"",t)}}
V.hs.prototype={
$1:function(a){var u=this,t=u.a,s=J.bA(t.c)
s.D(s,new V.hr())
s=u.b.style
s.border="solid 2px black"
t.d.$1(u.c)
t.aO(u.d)}}
V.hr.prototype={
$1:function(a){var u
if(!!J.M(a).$ibe){u=a.style
u.border="solid 2px white"}}}
K.jl.prototype={
$0:function(){var u,t,s,r=this.a
if(r.a!=null&&r.b.length!==0){u=this.b
t=u.f.h4(r.b)
s=t.y
if(s==null)s=t.y=D.F()
s.l(0,new K.jk(r,u,t,this.c))}}}
K.jk.prototype={
$1:function(a){var u,t,s,r,q=this,p=q.c,o=q.b.f.a,n=p.r,m=p.x
if(typeof m!=="number")return m.w()
u=m-m-0
o.bindFramebuffer(36160,o.createFramebuffer())
o.readBuffer(36064)
o.framebufferTexture2D(36160,36064,3553,p.b,0)
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return H.i(m)
t=new Uint8Array(n*m*4)
o.readPixels(0,u,n,m,6408,5121,t)
o.bindFramebuffer(36160,null)
s=new T.hw(t,n,m)
s.e6()
p=q.a
o=p.a
r=F.k1()
r.bb(o)
r.a2()
r.ft(s,p.c)
p=$.af()
p.toString
r.hC(new Z.aI($.kp().a&~p.a))
r.hB(!1)
r.a2()
q.d.sce(0,r)}}
K.jm.prototype={
$1:function(a){this.a.b=a
this.b.$0()}}
K.jn.prototype={
$1:function(a){this.a.a=a
this.b.$0()}}
K.jv.prototype={
$0:function(){this.a.$1(F.lj(50,null,50))}}
K.jw.prototype={
$0:function(){this.a.$1(F.nG(!1,!1,80,80))}}
K.jx.prototype={
$0:function(){this.a.$1(F.nU(80,80))}}
K.jy.prototype={
$0:function(){this.a.$1(F.o0(50,50))}}
K.jz.prototype={
$0:function(){this.a.$1(F.o4(50,50))}}
K.jA.prototype={
$0:function(){this.a.$1(F.kj(50,50))}}
K.jB.prototype={
$0:function(){this.a.$1(F.kj(100,100))}}
K.jC.prototype={
$0:function(){this.a.$1(F.kj(150,150))}}
K.jo.prototype={
$1:function(a){this.a.c=a
this.b.$0()}}
K.jp.prototype={
$0:function(){this.a.$1(0.1)}}
K.jq.prototype={
$0:function(){this.a.$1(0.2)}}
K.jr.prototype={
$0:function(){this.a.$1(0.4)}}
K.js.prototype={
$0:function(){this.a.$1(0.6)}}
K.jt.prototype={
$0:function(){this.a.$1(0.8)}}
K.ju.prototype={
$0:function(){this.a.$1(1)}};(function aliases(){var u=J.a.prototype
u.dG=u.h
u=J.cC.prototype
u.dH=u.h
u=T.cy.prototype
u.dF=u.aG
u.cg=u.h
u=O.cJ.prototype
u.ci=u.am
u=O.ak.prototype
u.cj=u.am})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nz","mK",7)
u(P,"nA","mL",7)
u(P,"nB","mM",7)
t(P,"li","nx",9)
var n
s(n=E.au.prototype,"gdi",0,0,null,["$1","$0"],["dj","hd"],0,0)
s(n,"gdk",0,0,null,["$1","$0"],["dl","he"],0,0)
s(n,"gdg",0,0,null,["$1","$0"],["dh","hc"],0,0)
s(n,"gde",0,0,null,["$1","$0"],["df","h9"],0,0)
r(n,"gh7","h8",4)
r(n,"gha","hb",4)
s(n=E.d4.prototype,"gcl",0,0,null,["$1","$0"],["cn","cm"],0,0)
q(n,"ghs","dt",9)
p(n=X.de.prototype,"geB","eC",5)
p(n,"gem","en",5)
p(n,"gev","ew",2)
p(n,"geF","eG",10)
p(n,"geD","eE",10)
p(n,"geJ","eK",2)
p(n,"geN","eO",2)
p(n,"gez","eA",2)
p(n,"geL","eM",2)
p(n,"gex","ey",2)
p(n,"geP","eQ",17)
p(n,"geR","eS",5)
p(n,"gf3","f4",6)
p(n,"gf_","f0",6)
p(n,"gf1","f2",6)
s(D.ba.prototype,"gdO",0,0,null,["$1","$0"],["ak","dP"],0,0)
s(n=D.cE.prototype,"gcE",0,0,null,["$1","$0"],["cF","eH"],0,0)
p(n,"geU","eV",18)
r(n,"geg","eh",11)
r(n,"geY","eZ",11)
o(V.C.prototype,"gj","bY",12)
o(V.x.prototype,"gj","bY",12)
s(n=U.bG.prototype,"gax",0,0,null,["$1","$0"],["O","a1"],0,0)
r(n,"gee","ef",13)
r(n,"geW","eX",13)
s(n=U.df.prototype,"gax",0,0,null,["$1","$0"],["O","a1"],0,0)
p(n,"gbr","bs",1)
p(n,"gbt","bu",1)
p(n,"gbv","bw",1)
s(n=U.dg.prototype,"gax",0,0,null,["$1","$0"],["O","a1"],0,0)
p(n,"gbr","bs",1)
p(n,"gbt","bu",1)
p(n,"gbv","bw",1)
p(n,"ge8","e9",1)
p(n,"gea","eb",1)
p(n,"gfn","fo",1)
p(n,"gfl","fm",1)
p(n,"gfj","fk",1)
p(U.dh.prototype,"gec","ed",1)
s(n=M.cu.prototype,"gay",0,0,null,["$1","$0"],["az","dQ"],0,0)
r(n,"geq","er",4)
r(n,"ges","eu",4)
s(n=O.cI.prototype,"geo",0,0,null,["$1","$0"],["a6","ep"],0,0)
s(n,"gfa",0,0,null,["$1","$0"],["cG","fb"],0,0)
r(n,"gei","ej",14)
r(n,"gek","el",14)
s(X.cR.prototype,"gco",0,0,null,["$1","$0"],["aA","dT"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.jY,J.a,J.a_,P.dA,P.j,H.cF,P.f1,H.cw,H.hR,H.ez,H.hE,P.bb,H.bD,H.dR,P.ax,H.f8,H.fa,H.f3,P.dY,P.dj,P.d1,P.hj,P.d5,P.iV,P.iF,P.iA,P.dz,P.p,P.iN,P.fh,P.ew,P.iU,P.iT,P.b3,P.a2,P.a6,P.aQ,P.fN,P.d_,P.ds,P.eY,P.m,P.O,P.aW,P.n,P.P,P.bs,P.hT,P.iG,W.eD,W.G,W.cx,P.iI,P.e2,P.iB,P.bn,T.ei,T.cy,T.cH,T.h2,R.d0,R.d6,R.d7,R.hz,O.aN,O.bK,E.es,E.au,E.fV,E.d4,Z.di,Z.ii,Z.cn,Z.bf,Z.aI,D.ev,D.bc,D.W,X.co,X.cD,X.f5,X.fe,X.a8,X.fD,X.hA,X.de,D.ba,D.a3,D.fQ,D.hd,V.S,V.aO,V.eP,V.cK,V.ay,V.a9,V.Q,V.bj,V.cV,V.C,V.x,U.df,U.dg,U.dh,M.cu,A.cl,A.el,A.Y,A.cr,A.cS,A.cZ,A.fn,A.bW,A.bY,A.bZ,A.da,A.hM,F.bd,F.eS,F.bJ,F.f7,F.bQ,F.h3,F.h4,F.h5,F.h6,F.br,F.i5,F.i6,F.i9,F.ib,F.ic,F.id,O.d2,O.cJ,O.fo,T.hu,T.hw,X.jP,X.hl,X.cR,V.fT,V.h7,V.hq])
s(J.a,[J.f2,J.cB,J.cC,J.aR,J.bI,J.aS,H.bN,H.aV,W.e,W.eh,W.b8,W.ai,W.E,W.dl,W.a7,W.eH,W.eI,W.dn,W.ct,W.dq,W.eK,W.h,W.dt,W.av,W.f_,W.dv,W.aw,W.fd,W.fx,W.dB,W.dC,W.az,W.dD,W.dG,W.aC,W.dK,W.dM,W.aE,W.dN,W.aF,W.dS,W.an,W.dW,W.hy,W.aH,W.dZ,W.hC,W.hZ,W.e4,W.e6,W.e8,W.ea,W.ec,P.aU,P.dx,P.aX,P.dI,P.fS,P.dT,P.b_,P.e0,P.em,P.dk,P.cW,P.dP])
s(J.cC,[J.fO,J.bq,J.aT])
t(J.jX,J.aR)
s(J.bI,[J.cA,J.cz])
t(P.fc,P.dA)
s(P.fc,[H.dc,W.ir,W.iq,P.eU])
t(H.N,H.dc)
s(P.j,[H.eN,H.fi,H.ij])
s(P.f1,[H.fj,H.ik])
t(H.eA,H.ez)
s(P.bb,[H.fK,H.f4,H.hQ,H.eu,H.h0,P.cQ,P.ag,P.hS,P.hO,P.hf,P.ey,P.eG])
s(H.bD,[H.jK,H.hm,H.jf,H.jg,H.jh,P.im,P.il,P.io,P.ip,P.iM,P.iL,P.j3,P.iD,P.iE,P.fb,P.fg,P.eL,P.eM,P.hY,P.hU,P.hW,P.hX,P.iO,P.iP,P.iR,P.iQ,P.iZ,P.iY,P.j_,P.j0,W.fz,W.fB,W.h_,W.hi,W.iv,P.iJ,P.j4,P.eV,P.eW,P.eo,E.fW,E.fX,E.fY,E.hx,D.eQ,D.eR,F.iW,F.j5,F.j7,F.jj,F.jF,F.jG,F.jJ,F.j6,F.jc,F.jd,F.ig,F.ie,F.i7,F.i8,O.fr,O.fs,O.ft,O.fu,O.fv,O.fw,T.hv,V.jE,V.fU,V.h9,V.h8,V.hs,V.hr,K.jl,K.jk,K.jm,K.jn,K.jv,K.jw,K.jx,K.jy,K.jz,K.jA,K.jB,K.jC,K.jo,K.jp,K.jq,K.jr,K.js,K.jt,K.ju])
s(H.hm,[H.hg,H.bB])
t(P.ff,P.ax)
t(H.K,P.ff)
t(H.f9,H.eN)
t(H.cM,H.aV)
s(H.cM,[H.c1,H.c3])
t(H.c2,H.c1)
t(H.bO,H.c2)
t(H.c4,H.c3)
t(H.cN,H.c4)
s(H.cN,[H.fE,H.fF,H.fG,H.fH,H.fI,H.cO,H.bP])
t(P.iC,P.iV)
t(P.iz,P.iF)
t(P.e3,P.fh)
t(P.dd,P.e3)
s(P.ew,[P.eq,P.eO])
t(P.eB,P.hj)
s(P.eB,[P.er,P.i1,P.i0])
t(P.i_,P.eO)
s(P.a6,[P.J,P.u])
s(P.ag,[P.bl,P.f0])
t(P.it,P.bs)
s(W.e,[W.B,W.eT,W.bL,W.aD,W.c5,W.aG,W.ao,W.c7,W.ih,W.c0,P.ep,P.b7])
s(W.B,[W.T,W.aM])
s(W.T,[W.l,P.k])
s(W.l,[W.ej,W.ek,W.b9,W.eX,W.be,W.h1])
t(W.eC,W.ai)
t(W.bE,W.dl)
s(W.a7,[W.eE,W.eF])
t(W.dp,W.dn)
t(W.cs,W.dp)
t(W.dr,W.dq)
t(W.eJ,W.dr)
t(W.aj,W.b8)
t(W.du,W.dt)
t(W.bF,W.du)
t(W.dw,W.dv)
t(W.bH,W.dw)
t(W.b0,W.h)
s(W.b0,[W.bi,W.am,W.bm])
t(W.fy,W.dB)
t(W.fA,W.dC)
t(W.dE,W.dD)
t(W.fC,W.dE)
t(W.dH,W.dG)
t(W.cP,W.dH)
t(W.dL,W.dK)
t(W.fP,W.dL)
t(W.fZ,W.dM)
t(W.c6,W.c5)
t(W.hb,W.c6)
t(W.dO,W.dN)
t(W.hc,W.dO)
t(W.hh,W.dS)
t(W.dX,W.dW)
t(W.hn,W.dX)
t(W.c8,W.c7)
t(W.ho,W.c8)
t(W.e_,W.dZ)
t(W.hB,W.e_)
t(W.b1,W.am)
t(W.e5,W.e4)
t(W.is,W.e5)
t(W.dm,W.ct)
t(W.e7,W.e6)
t(W.iw,W.e7)
t(W.e9,W.e8)
t(W.dF,W.e9)
t(W.eb,W.ea)
t(W.iH,W.eb)
t(W.ed,W.ec)
t(W.iK,W.ed)
t(W.iu,P.d1)
t(P.dV,P.iI)
t(P.a5,P.iB)
t(P.dy,P.dx)
t(P.f6,P.dy)
t(P.dJ,P.dI)
t(P.fL,P.dJ)
t(P.dU,P.dT)
t(P.hk,P.dU)
t(P.e1,P.e0)
t(P.hD,P.e1)
t(P.en,P.dk)
t(P.fM,P.b7)
t(P.dQ,P.dP)
t(P.he,P.dQ)
s(T.cy,[T.aB,R.d9])
s(E.es,[Z.cm,A.cX,T.d3])
s(D.W,[D.bg,D.bh,D.z,X.fR])
s(X.fR,[X.cG,X.aA,X.bM,X.d8])
s(O.aN,[D.cE,U.bG])
s(D.ev,[U.ex,U.a4])
t(U.cp,U.a4)
t(A.fk,A.cX)
s(A.da,[A.db,A.hJ,A.hK,A.hL,A.hH,A.V,A.hI,A.I,A.bV,A.hN,A.bX,A.aa,A.bo,A.bp])
t(F.ha,F.eS)
t(F.hG,F.f7)
t(F.ia,F.ib)
t(F.fJ,F.ic)
t(O.cI,O.d2)
s(O.cJ,[O.fl,O.fm,O.ak])
s(O.ak,[O.fp,O.fq])
t(T.hp,T.d3)
t(T.ht,T.hp)
t(X.eZ,X.hl)
u(H.dc,H.hR)
u(H.c1,P.p)
u(H.c2,H.cw)
u(H.c3,P.p)
u(H.c4,H.cw)
u(P.dA,P.p)
u(P.e3,P.iN)
u(W.dl,W.eD)
u(W.dn,P.p)
u(W.dp,W.G)
u(W.dq,P.p)
u(W.dr,W.G)
u(W.dt,P.p)
u(W.du,W.G)
u(W.dv,P.p)
u(W.dw,W.G)
u(W.dB,P.ax)
u(W.dC,P.ax)
u(W.dD,P.p)
u(W.dE,W.G)
u(W.dG,P.p)
u(W.dH,W.G)
u(W.dK,P.p)
u(W.dL,W.G)
u(W.dM,P.ax)
u(W.c5,P.p)
u(W.c6,W.G)
u(W.dN,P.p)
u(W.dO,W.G)
u(W.dS,P.ax)
u(W.dW,P.p)
u(W.dX,W.G)
u(W.c7,P.p)
u(W.c8,W.G)
u(W.dZ,P.p)
u(W.e_,W.G)
u(W.e4,P.p)
u(W.e5,W.G)
u(W.e6,P.p)
u(W.e7,W.G)
u(W.e8,P.p)
u(W.e9,W.G)
u(W.ea,P.p)
u(W.eb,W.G)
u(W.ec,P.p)
u(W.ed,W.G)
u(P.dx,P.p)
u(P.dy,W.G)
u(P.dI,P.p)
u(P.dJ,W.G)
u(P.dT,P.p)
u(P.dU,W.G)
u(P.e0,P.p)
u(P.e1,W.G)
u(P.dk,P.ax)
u(P.dP,P.p)
u(P.dQ,W.G)})()
var v={mangledGlobalNames:{u:"int",J:"double",a6:"num",n:"String",b3:"bool",aW:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[D.W]},{func:1,ret:-1,args:[W.am]},{func:1,ret:P.aW,args:[,,]},{func:1,ret:-1,args:[P.u,[P.j,E.au]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.u,[P.j,D.a3]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.u,[P.j,U.a4]]},{func:1,ret:-1,args:[P.u,[P.j,V.ay]]},{func:1,ret:P.aW,args:[,]},{func:1,ret:P.bn,args:[,,]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.b3,args:[[P.j,D.a3]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.b9.prototype
C.I=J.a.prototype
C.b=J.aR.prototype
C.J=J.cz.prototype
C.c=J.cA.prototype
C.j=J.cB.prototype
C.d=J.bI.prototype
C.a=J.aS.prototype
C.K=J.aT.prototype
C.v=J.fO.prototype
C.Q=P.cW.prototype
C.o=J.bq.prototype
C.w=W.b1.prototype
C.x=W.c0.prototype
C.R=new P.er()
C.y=new P.eq()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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

C.F=new P.fN()
C.e=new P.i_()
C.G=new P.i1()
C.f=new P.iC()
C.n=new P.aQ(0)
C.H=new P.aQ(5e6)
C.r=H.d(u([127,2047,65535,1114111]),[P.u])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.M=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.N=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.t=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.O=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.u=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.L=H.d(u([]),[P.n])
C.P=new H.eA(0,{},C.L,[P.n,P.n])})();(function staticFields(){$.ah=0
$.bC=null
$.kw=null
$.ln=null
$.lh=null
$.lr=null
$.j8=null
$.ji=null
$.kk=null
$.bv=null
$.cb=null
$.cc=null
$.ke=!1
$.ae=C.f
$.a0=[]
$.kI=null
$.kL=null
$.bR=null
$.kS=null
$.l0=null
$.l3=null
$.l2=null
$.i2=null
$.i3=null
$.i4=null
$.l1=null
$.kK=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o9","lw",function(){return H.ll("_$dart_dartClosure")})
u($,"oa","ko",function(){return H.ll("_$dart_js")})
u($,"ob","lx",function(){return H.ap(H.hF({
toString:function(){return"$receiver$"}}))})
u($,"oc","ly",function(){return H.ap(H.hF({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"od","lz",function(){return H.ap(H.hF(null))})
u($,"oe","lA",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oh","lD",function(){return H.ap(H.hF(void 0))})
u($,"oi","lE",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"og","lC",function(){return H.ap(H.kX(null))})
u($,"of","lB",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ok","lG",function(){return H.ap(H.kX(void 0))})
u($,"oj","lF",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oy","kr",function(){return P.mJ()})
u($,"ol","lH",function(){return P.mF()})
u($,"oz","lJ",function(){return H.me(H.bu(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"oA","lK",function(){return P.ms("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oB","lL",function(){return P.n5()})
u($,"os","lI",function(){return Z.ab(0)})
u($,"om","kp",function(){return Z.ab(511)})
u($,"ou","at",function(){return Z.ab(1)})
u($,"ot","af",function(){return Z.ab(2)})
u($,"oo","as",function(){return Z.ab(4)})
u($,"ov","aK",function(){return Z.ab(8)})
u($,"ow","aL",function(){return Z.ab(16)})
u($,"op","cg",function(){return Z.ab(32)})
u($,"oq","ch",function(){return Z.ab(64)})
u($,"or","kq",function(){return Z.ab(96)})
u($,"ox","b5",function(){return Z.ab(128)})
u($,"on","ar",function(){return Z.ab(256)})
u($,"o8","lv",function(){return new V.eP(1e-9)})
u($,"o7","A",function(){return $.lv()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bN,DataView:H.aV,ArrayBufferView:H.aV,Float32Array:H.bO,Float64Array:H.bO,Int16Array:H.fE,Int32Array:H.fF,Int8Array:H.fG,Uint16Array:H.fH,Uint32Array:H.fI,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.bP,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eh,HTMLAnchorElement:W.ej,HTMLAreaElement:W.ek,Blob:W.b8,HTMLCanvasElement:W.b9,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CSSPerspective:W.eC,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bE,MSStyleCSSProperties:W.bE,CSS2Properties:W.bE,CSSImageValue:W.a7,CSSKeywordValue:W.a7,CSSNumericValue:W.a7,CSSPositionValue:W.a7,CSSResourceValue:W.a7,CSSUnitValue:W.a7,CSSURLImageValue:W.a7,CSSStyleValue:W.a7,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eE,CSSUnparsedValue:W.eF,DataTransferItemList:W.eH,DOMException:W.eI,ClientRectList:W.cs,DOMRectList:W.cs,DOMRectReadOnly:W.ct,DOMStringList:W.eJ,DOMTokenList:W.eK,Element:W.T,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aj,FileList:W.bF,FileWriter:W.eT,HTMLFormElement:W.eX,Gamepad:W.av,History:W.f_,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.aw,HTMLImageElement:W.be,KeyboardEvent:W.bi,Location:W.fd,MediaList:W.fx,MessagePort:W.bL,MIDIInputMap:W.fy,MIDIOutputMap:W.fA,MimeType:W.az,MimeTypeArray:W.fC,PointerEvent:W.am,MouseEvent:W.am,DragEvent:W.am,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aC,PluginArray:W.fP,RTCStatsReport:W.fZ,HTMLSelectElement:W.h1,SourceBuffer:W.aD,SourceBufferList:W.hb,SpeechGrammar:W.aE,SpeechGrammarList:W.hc,SpeechRecognitionResult:W.aF,Storage:W.hh,CSSStyleSheet:W.an,StyleSheet:W.an,TextTrack:W.aG,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.hn,TextTrackList:W.ho,TimeRanges:W.hy,Touch:W.aH,TouchEvent:W.bm,TouchList:W.hB,TrackDefaultList:W.hC,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.hZ,VideoTrackList:W.ih,WheelEvent:W.b1,Window:W.c0,DOMWindow:W.c0,CSSRuleList:W.is,ClientRect:W.dm,DOMRect:W.dm,GamepadList:W.iw,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,SpeechRecognitionResultList:W.iH,StyleSheetList:W.iK,SVGLength:P.aU,SVGLengthList:P.f6,SVGNumber:P.aX,SVGNumberList:P.fL,SVGPointList:P.fS,SVGStringList:P.hk,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.b_,SVGTransformList:P.hD,AudioBuffer:P.em,AudioParamMap:P.en,AudioTrackList:P.ep,AudioContext:P.b7,webkitAudioContext:P.b7,BaseAudioContext:P.b7,OfflineAudioContext:P.fM,WebGL2RenderingContext:P.cW,SQLResultSetRowList:P.he})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
W.c5.$nativeSuperclassTag="EventTarget"
W.c6.$nativeSuperclassTag="EventTarget"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.lp,[])
else K.lp([])})})()
//# sourceMappingURL=test.dart.js.map
