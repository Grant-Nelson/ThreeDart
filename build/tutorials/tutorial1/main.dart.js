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
a[c]=function(){a[c]=function(){H.lo(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iC"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iC(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={im:function im(){},
kg:function(a,b,c,d){if(!!a.$im)return new H.ec(a,b,[c,d])
return new H.bs(a,b,[c,d])},
ij:function(){return new P.bC("No element")},
ka:function(){return new P.bC("Too many elements")},
ky:function(a,b){var u=J.as(a)
if(typeof u!=="number")return u.P()
H.cw(a,0,u-1,b)},
cw:function(a,b,c,d){if(c-b<=32)H.kx(a,b,c,d)
else H.kw(a,b,c,d)},
kx:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aM(a);u<=c;++u){s=t.j(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.j(a,r-1),s)
if(typeof q!=="number")return q.L()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.j(a,p))
r=p}t.m(a,r,s)}},
kw:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.ae(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.ae(a4+a5,2),f=g-j,e=g+j,d=J.aM(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.j(a3,a4))
d.m(a3,e,d.j(a3,a5))
t=a4+1
s=a5-1
if(J.I(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.j(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a5()
if(p<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.L()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.j(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a5()
if(l<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.L()
if(k>0)for(;!0;){p=a6.$2(d.j(a3,s),a0)
if(typeof p!=="number")return p.L()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.a5()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.j(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.j(a3,a2))
d.m(a3,a2,a0)
H.cw(a3,a4,t-2,a6)
H.cw(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.I(a6.$2(d.j(a3,t),b),0);)++t
for(;J.I(a6.$2(d.j(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.j(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.j(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.a5()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}H.cw(a3,t,s,a6)}else H.cw(a3,t,s,a6)},
j:function j(a){this.a=a},
m:function m(){},
ch:function ch(){},
aB:function aB(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b){this.a=null
this.b=a
this.c=b},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hm:function hm(a,b){this.a=a
this.b=b},
cb:function cb(){},
h8:function h8(){},
cH:function cH(){},
bX:function(a){var u,t=H.lp(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
l9:function(a){return v.types[a]},
lg:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.K(a).$iq},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.R(a)
if(typeof u!=="string")throw H.c(H.ao(a))
return u},
bz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bA:function(a){return H.kh(a)+H.jj(H.bW(a),0,null)},
kh:function(a){var u,t,s,r,q,p,o,n=J.K(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ib2){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bX(t.length>1&&C.b.aj(t,0)===36?C.b.aF(t,1):t)},
j2:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kq:function(a){var u,t,s,r=H.b([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ao(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.av(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ao(s))}return H.j2(r)},
kp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ao(s))
if(s<0)throw H.c(H.ao(s))
if(s>65535)return H.kq(a)}return H.j2(a)},
iq:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.av(u,10))>>>0,56320|u&1023)}throw H.c(P.a5(a,0,1114111,null,null))},
b_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ko:function(a){var u=H.b_(a).getFullYear()+0
return u},
km:function(a){var u=H.b_(a).getMonth()+1
return u},
ki:function(a){var u=H.b_(a).getDate()+0
return u},
kj:function(a){var u=H.b_(a).getHours()+0
return u},
kl:function(a){var u=H.b_(a).getMinutes()+0
return u},
kn:function(a){var u=H.b_(a).getSeconds()+0
return u},
kk:function(a){var u=H.b_(a).getMilliseconds()+0
return u},
O:function(a){throw H.c(H.ao(a))},
f:function(a,b){if(a==null)J.as(a)
throw H.c(H.b8(a,b))},
b8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a_(!0,b,s,null)
u=J.as(a)
if(!(b<0)){if(typeof u!=="number")return H.O(u)
t=b>=u}else t=!0
if(t)return P.y(b,a,s,null,u)
return P.cs(b,s)},
l2:function(a,b,c){var u="Invalid value"
if(a>c)return new P.b0(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.b0(a,c,!0,b,"end",u)
return new P.a_(!0,b,"end",null)},
ao:function(a){return new P.a_(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.co()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jy})
u.name=""}else u.toString=H.jy
return u},
jy:function(){return J.R(this.dartException)},
H:function(a){throw H.c(a)},
t:function(a){throw H.c(P.au(a))},
a8:function(a){var u,t,s,r,q,p
a=H.jw(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ja:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iZ:function(a,b){return new H.f6(a,b==null?null:b.method)},
io:function(a,b){var u=b==null,t=u?null:b.method
return new H.eG(a,t,u?null:b.receiver)},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.i8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.av(t,16)&8191)===10)switch(s){case 438:return f.$1(H.io(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.iZ(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jB()
q=$.jC()
p=$.jD()
o=$.jE()
n=$.jH()
m=$.jI()
l=$.jG()
$.jF()
k=$.jK()
j=$.jJ()
i=r.U(u)
if(i!=null)return f.$1(H.io(u,i))
else{i=q.U(u)
if(i!=null){i.method="call"
return f.$1(H.io(u,i))}else{i=p.U(u)
if(i==null){i=o.U(u)
if(i==null){i=n.U(u)
if(i==null){i=m.U(u)
if(i==null){i=l.U(u)
if(i==null){i=o.U(u)
if(i==null){i=k.U(u)
if(i==null){i=j.U(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.iZ(u,i))}}return f.$1(new H.h7(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cx()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a_(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cx()
return a},
iD:function(a){var u
if(a==null)return new H.dj(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dj(a)},
l6:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
lf:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.G("Unsupported number of arguments for wrapped closure"))},
bV:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lf)
a.$identity=u
return u},
k3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fz().constructor.prototype):Object.create(new H.bf(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a0
if(typeof t!=="number")return t.H()
$.a0=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iO(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.k_(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iO(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
k_:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l9,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iM:H.ic
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
k0:function(a,b,c,d){var u=H.ic
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iO:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.k2(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.k0(t,!r,u,b)
if(t===0){r=$.a0
if(typeof r!=="number")return r.H()
$.a0=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bg
return new Function(r+H.e(q==null?$.bg=H.dS("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a0
if(typeof r!=="number")return r.H()
$.a0=r+1
o+=r
r="return function("+o+"){return this."
q=$.bg
return new Function(r+H.e(q==null?$.bg=H.dS("self"):q)+"."+H.e(u)+"("+o+");}")()},
k1:function(a,b,c,d){var u=H.ic,t=H.iM
switch(b?-1:a){case 0:throw H.c(H.ku("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
k2:function(a,b){var u,t,s,r,q,p,o,n=$.bg
if(n==null)n=$.bg=H.dS("self")
u=$.iL
if(u==null)u=$.iL=H.dS("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.k1(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a0
if(typeof u!=="number")return u.H()
$.a0=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a0
if(typeof u!=="number")return u.H()
$.a0=u+1
return new Function(n+u+"}")()},
iC:function(a,b,c,d,e,f,g){return H.k3(a,b,c,d,!!e,!!f,g)},
ic:function(a){return a.a},
iM:function(a){return a.c},
dS:function(a){var u,t,s,r=new H.bf("self","target","receiver","name"),q=J.ik(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lk:function(a,b){throw H.c(H.jZ(a,H.bX(b.substring(2))))},
dG:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.lk(a,b)},
l4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
jZ:function(a,b){return new H.dT("CastError: "+P.ih(a)+": type '"+H.e(H.kX(a))+"' is not a subtype of type '"+b+"'")},
kX:function(a){var u,t=J.K(a)
if(!!t.$ibh){u=H.l4(t)
if(u!=null)return H.ll(u)
return"Closure"}return H.bA(a)},
lo:function(a){throw H.c(new P.e2(a))},
ku:function(a){return new H.fl(a)},
jp:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
lW:function(a,b,c){return H.i7(a["$a"+H.e(c)],H.bW(b))},
l8:function(a,b,c,d){var u=H.i7(a["$a"+H.e(c)],H.bW(b))
return u==null?null:u[d]},
jq:function(a,b,c){var u=H.i7(a["$a"+H.e(b)],H.bW(a))
return u==null?null:u[c]},
Z:function(a,b){var u=H.bW(a)
return u==null?null:u[b]},
ll:function(a){return H.aK(a,null)},
aK:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bX(a[0].name)+H.jj(a,1,b)
if(typeof a=="function")return H.bX(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.kN(a,b)
if('futureOr' in a)return"FutureOr<"+H.aK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kN:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.H(p,a0[m])
l=u[q]
if(l!=null&&l!==P.M)p+=" extends "+H.aK(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aK(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aK(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aK(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.l5(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aK(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jj:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aG("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aK(p,c)}return"<"+u.h(0)+">"},
i7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
lU:function(a,b,c){return a.apply(b,H.i7(J.K(b)["$a"+H.e(c)],H.bW(b)))},
lV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lh:function(a){var u,t,s,r,q=$.jr.$1(a),p=$.hZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.i5[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jm.$2(a,q)
if(q!=null){p=$.hZ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.i5[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.i6(u)
$.hZ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.i5[q]=u
return u}if(s==="-"){r=H.i6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jt(a,u)
if(s==="*")throw H.c(P.jb(q))
if(v.leafTags[q]===true){r=H.i6(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jt(a,u)},
jt:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
i6:function(a){return J.iF(a,!1,null,!!a.$iq)},
li:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.i6(u)
else return J.iF(u,c,null,null)},
ld:function(){if(!0===$.iE)return
$.iE=!0
H.le()},
le:function(){var u,t,s,r,q,p,o,n
$.hZ=Object.create(null)
$.i5=Object.create(null)
H.lc()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jv.$1(q)
if(p!=null){o=H.li(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lc:function(){var u,t,s,r,q,p,o=C.y()
o=H.b7(C.z,H.b7(C.A,H.b7(C.q,H.b7(C.q,H.b7(C.B,H.b7(C.C,H.b7(C.D(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jr=new H.i2(r)
$.jm=new H.i3(q)
$.jv=new H.i4(p)},
b7:function(a,b){return a(b)||b},
kd:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eo("Illegal RegExp pattern ("+String(p)+")",a))},
jx:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
l3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jw:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
iG:function(a,b,c){var u=H.lm(a,b,c)
return u},
lm:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jw(b),'g'),H.l3(c))},
fS:function fS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f6:function f6(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
i8:function i8(a){this.a=a},
dj:function dj(a){this.a=a
this.b=null},
bh:function bh(){},
fH:function fH(){},
fz:function fz(){},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dT:function dT(a){this.a=a},
fl:function fl(a){this.a=a},
a2:function a2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eF:function eF(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aW:function aW(a,b){this.a=a
this.$ti=b},
eK:function eK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
eE:function eE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iz:function(a){return a},
aa:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b8(b,a))},
kM:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.l2(a,b,c))
return b},
bx:function bx(){},
cj:function cj(){},
bw:function bw(){},
ck:function ck(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
cl:function cl(){},
f3:function f3(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
l5:function(a){return J.iT(a?Object.keys(a):[],null)},
lp:function(a){return v.mangledGlobalNames[a]},
lj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i1:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iE==null){H.ld()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jb("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iI()]
if(r!=null)return r
r=H.lh(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.iI(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kb:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ib(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a5(a,0,4294967295,"length",null))
return J.iT(new Array(a),b)},
iT:function(a,b){return J.ik(H.b(a,[b]))},
ik:function(a){a.fixed$length=Array
return a},
kc:function(a,b){return J.jT(a,b)},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ce.prototype
return J.eC.prototype}if(typeof a=="string")return J.ay.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.eB.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.i1(a)},
aM:function(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.i1(a)},
i0:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.i1(a)},
l7:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.b2.prototype
return a},
jo:function(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.b2.prototype
return a},
dF:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.i1(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)},
jQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aM(a).j(a,b)},
jR:function(a,b,c){return J.dF(a).d3(a,b,c)},
jS:function(a,b,c,d){return J.dF(a).dd(a,b,c,d)},
jT:function(a,b){return J.l7(a).X(a,b)},
i9:function(a,b){return J.aM(a).w(a,b)},
dH:function(a,b){return J.i0(a).u(a,b)},
jU:function(a,b){return J.i0(a).F(a,b)},
jV:function(a){return J.dF(a).gdh(a)},
dI:function(a){return J.K(a).gE(a)},
ar:function(a){return J.i0(a).gG(a)},
as:function(a){return J.aM(a).gk(a)},
iK:function(a){return J.i0(a).dX(a)},
jW:function(a,b){return J.dF(a).e_(a,b)},
jX:function(a,b,c){return J.jo(a).ar(a,b,c)},
jY:function(a){return J.jo(a).e6(a)},
R:function(a){return J.K(a).h(a)},
a:function a(){},
eB:function eB(){},
eD:function eD(){},
cf:function cf(){},
fa:function fa(){},
b2:function b2(){},
az:function az(){},
ax:function ax(a){this.$ti=a},
il:function il(a){this.$ti=a},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bo:function bo(){},
ce:function ce(){},
eC:function eC(){},
ay:function ay(){}},P={
kA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.kY()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bV(new P.ho(s),1)).observe(u,{childList:true})
return new P.hn(s,u,t)}else if(self.setImmediate!=null)return P.kZ()
return P.l_()},
kB:function(a){self.scheduleImmediate(H.bV(new P.hp(a),0))},
kC:function(a){self.setImmediate(H.bV(new P.hq(a),0))},
kD:function(a){P.it(C.h,a)},
it:function(a,b){var u=C.d.ae(a.a,1000)
return P.kL(u<0?0:u,b)},
kL:function(a,b){var u=new P.hQ()
u.c9(a,b)
return u},
lS:function(a){return new P.b4(a,1)},
kI:function(){return C.S},
kJ:function(a){return new P.b4(a,3)},
kQ:function(a,b){return new P.hN(a,[b])},
kR:function(){var u,t
for(;u=$.b6,u!=null;){$.bU=null
t=u.b
$.b6=t
if(t==null)$.bT=null
u.a.$0()}},
kW:function(){$.iA=!0
try{P.kR()}finally{$.bU=null
$.iA=!1
if($.b6!=null)$.iJ().$1(P.jn())}},
kU:function(a){var u=new P.cL(a)
if($.b6==null){$.b6=$.bT=u
if(!$.iA)$.iJ().$1(P.jn())}else $.bT=$.bT.b=u},
kV:function(a){var u,t,s=$.b6
if(s==null){P.kU(a)
$.bU=$.bT
return}u=new P.cL(a)
t=$.bU
if(t==null){u.b=s
$.b6=$.bU=u}else{u.b=t.b
$.bU=t.b=u
if(u.b==null)$.bT=u}},
j9:function(a,b){var u=$.a9
if(u===C.e)return P.it(a,b)
return P.it(a,u.di(b))},
jk:function(a,b,c,d,e){var u={}
u.a=d
P.kV(new P.hX(u,e))},
kS:function(a,b,c,d){var u,t=$.a9
if(t===c)return d.$0()
$.a9=c
u=t
try{t=d.$0()
return t}finally{$.a9=u}},
kT:function(a,b,c,d,e){var u,t=$.a9
if(t===c)return d.$1(e)
$.a9=c
u=t
try{t=d.$1(e)
return t}finally{$.a9=u}},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
b5:function b5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(a,b){this.a=a
this.$ti=b},
cL:function cL(a){this.a=a
this.b=null},
cz:function cz(){},
fC:function fC(){},
hU:function hU(){},
hX:function hX(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
iU:function(a,b){return new H.a2([a,b])},
ke:function(a){return H.l6(a,new H.a2([null,null]))},
bq:function(a){return new P.hA([a])},
ix:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kK:function(a,b){var u=new P.d0(a,b)
u.c=a.e
return u},
k9:function(a,b,c){var u,t
if(P.iB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.Q.push(a)
try{P.kP(a,u)}finally{if(0>=$.Q.length)return H.f($.Q,-1)
$.Q.pop()}t=P.j7(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ii:function(a,b,c){var u,t
if(P.iB(a))return b+"..."+c
u=new P.aG(b)
$.Q.push(a)
try{t=u
t.a=P.j7(t.a,a,", ")}finally{if(0>=$.Q.length)return H.f($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iB:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
kP:function(a,b){var u,t,s,r,q,p,o,n=a.gG(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.n())return
u=H.e(n.gv(n))
b.push(u)
m+=u.length+2;++l}if(!n.n()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gv(n);++l
if(!n.n()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gv(n);++l
for(;n.n();r=q,q=p){p=n.gv(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
iV:function(a,b){var u,t,s=P.bq(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t)s.p(0,a[t])
return s},
iW:function(a){var u,t={}
if(P.iB(a))return"{...}"
u=new P.aG("")
try{$.Q.push(a)
u.a+="{"
t.a=!0
J.jU(a,new P.eP(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.f($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hA:function hA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hB:function hB(a){this.a=a
this.c=this.b=null},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ez:function ez(){},
eL:function eL(){},
p:function p(){},
eO:function eO(){},
eP:function eP(a,b){this.a=a
this.b=b},
L:function L(){},
hH:function hH(){},
d1:function d1(){},
dV:function dV(){},
dY:function dY(){},
ee:function ee(){},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eu:function eu(a){this.a=a},
hb:function hb(){},
hc:function hc(){},
hS:function hS(a){this.b=0
this.c=a},
k7:function(a){if(a instanceof H.bh)return a.h(0)
return"Instance of '"+H.e(H.bA(a))+"'"},
kf:function(a,b,c){var u,t,s=J.kb(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
ip:function(a,b,c){var u,t=H.b([],[c])
for(u=J.ar(a);u.n();)t.push(u.gv(u))
if(b)return t
return J.ik(t)},
is:function(a){var u,t=a.length,s=P.ir(0,null,t)
if(typeof s!=="number")return s.a5()
u=s<t
return H.kp(u?C.a.bX(a,0,s):a)},
kr:function(a){return new H.eE(a,H.kd(a,!1,!0,!1,!1,!1))},
j7:function(a,b,c){var u=J.ar(b)
if(!u.n())return a
if(c.length===0){do a+=H.e(u.gv(u))
while(u.n())}else{a+=H.e(u.gv(u))
for(;u.n();)a=a+c+H.e(u.gv(u))}return a},
iy:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.jP().b
u=u.test(b)}else u=!1
if(u)return b
t=C.F.dq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iq(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
k4:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
k5:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c6:function(a){if(a>=10)return""+a
return"0"+a},
ih:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.R(a)
if(typeof a==="string")return JSON.stringify(a)
return P.k7(a)},
ib:function(a,b,c){return new P.a_(!0,a,b,c)},
cs:function(a,b){return new P.b0(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.b0(b,c,!0,a,d,"Invalid value")},
ir:function(a,b,c){var u
if(typeof a!=="number")return H.O(a)
if(0<=a){if(typeof c!=="number")return H.O(c)
u=a>c}else u=!0
if(u)throw H.c(P.a5(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.O(c)
u=b>c}else u=!0
if(u)throw H.c(P.a5(b,a,c,"end",null))
return b}return c},
j3:function(a,b){if(typeof a!=="number")return a.a5()
if(a<0)throw H.c(P.a5(a,0,null,b,null))},
y:function(a,b,c,d,e){var u=e==null?J.as(b):e
return new P.ew(u,!0,a,c,"Index out of range")},
r:function(a){return new P.h9(a)},
jb:function(a){return new P.h6(a)},
j6:function(a){return new P.bC(a)},
au:function(a){return new P.dX(a)},
G:function(a){return new P.cT(a)},
ju:function(a){H.lj(a)},
aL:function aL(){},
bj:function bj(a,b){this.a=a
this.b=b},
C:function C(){},
bk:function bk(a){this.a=a},
ea:function ea(){},
eb:function eb(){},
aS:function aS(){},
co:function co(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b0:function b0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ew:function ew(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
h9:function h9(a){this.a=a},
h6:function h6(a){this.a=a},
bC:function bC(a){this.a=a},
dX:function dX(a){this.a=a},
f9:function f9(){},
cx:function cx(){},
e2:function e2(a){this.a=a},
cT:function cT(a){this.a=a},
eo:function eo(a,b){this.a=a
this.b=b},
eq:function eq(){},
A:function A(){},
l:function l(){},
eA:function eA(){},
aX:function aX(){},
br:function br(){},
aE:function aE(){},
W:function W(){},
M:function M(){},
o:function o(){},
aG:function aG(a){this.a=a},
ap:function(a){var u,t,s,r,q
if(a==null)return
u=P.iU(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
l1:function(a){var u={}
a.F(0,new P.hY(u))
return u},
hY:function hY(a){this.a=a},
ek:function ek(a,b){this.a=a
this.b=b},
el:function el(){},
em:function em(){},
hC:function hC(){},
Y:function Y(){},
aA:function aA(){},
eI:function eI(){},
aF:function aF(){},
f7:function f7(){},
fd:function fd(){},
bB:function bB(){},
fD:function fD(){},
i:function i(){},
aH:function aH(){},
fR:function fR(){},
cZ:function cZ(){},
d_:function d_(){},
d9:function d9(){},
da:function da(){},
dl:function dl(){},
dm:function dm(){},
ds:function ds(){},
dt:function dt(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(a){this.a=a},
dQ:function dQ(){},
aN:function aN(){},
f8:function f8(){},
cM:function cM(){},
fy:function fy(){},
dh:function dh(){},
di:function di(){}},W={
ia:function(){var u=document.createElement("a")
return u},
iN:function(){var u=document.createElement("canvas")
return u},
k6:function(a,b,c){var u=document.body,t=(u&&C.m).S(u,a,b,c)
t.toString
u=new H.bH(new W.N(t),new W.ed(),[W.v])
return u.ga6(u)},
ie:function(a){return"wheel"},
bl:function(a){var u,t,s,r="element tag unavailable"
try{u=J.dF(a)
t=u.gbL(a)
if(typeof t==="string")r=u.gbL(a)}catch(s){H.ab(s)}return r},
hz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jh:function(a,b,c,d){var u=W.hz(W.hz(W.hz(W.hz(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
J:function(a,b,c,d){var u=W.jl(new W.hx(c),W.h)
if(u!=null&&!0)J.jS(a,b,u,!1)
return new W.hw(a,b,u,!1)},
jg:function(a){var u=W.ia(),t=window.location
u=new W.bJ(new W.hG(u,t))
u.c6(a)
return u},
kG:function(a,b,c,d){return!0},
kH:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
ji:function(){var u=P.o,t=P.iV(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.hO(t,P.bq(u),P.bq(u),P.bq(u),null)
t.c8(null,new H.eQ(C.j,new W.hP(),[H.Z(C.j,0),u]),s,null)
return t},
jl:function(a,b){var u=$.a9
if(u===C.e)return a
return u.dj(a,b)},
k:function k(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
c0:function c0(){},
aO:function aO(){},
aQ:function aQ(){},
at:function at(){},
dZ:function dZ(){},
w:function w(){},
bi:function bi(){},
e_:function e_(){},
T:function T(){},
a1:function a1(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
X:function X(){},
e7:function e7(){},
c7:function c7(){},
c8:function c8(){},
e8:function e8(){},
e9:function e9(){},
hs:function hs(a,b){this.a=a
this.b=b},
E:function E(){},
ed:function ed(){},
h:function h(){},
d:function d(){},
ae:function ae(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
af:function af(){},
et:function et(){},
bn:function bn(){},
aV:function aV(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
eV:function eV(a){this.a=a},
ag:function ag(){},
eW:function eW(){},
a3:function a3(){},
N:function N(a){this.a=a},
v:function v(){},
cm:function cm(){},
ai:function ai(){},
fc:function fc(){},
fj:function fj(){},
fk:function fk(a){this.a=a},
fm:function fm(){},
aj:function aj(){},
fw:function fw(){},
ak:function ak(){},
fx:function fx(){},
al:function al(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
a6:function a6(){},
cA:function cA(){},
fE:function fE(){},
fF:function fF(){},
bD:function bD(){},
am:function am(){},
a7:function a7(){},
fI:function fI(){},
fJ:function fJ(){},
fL:function fL(){},
an:function an(){},
b1:function b1(){},
fP:function fP(){},
fQ:function fQ(){},
aI:function aI(){},
ha:function ha(){},
hk:function hk(){},
aJ:function aJ(){},
bI:function bI(){},
ht:function ht(){},
cO:function cO(){},
hy:function hy(){},
d6:function d6(){},
hK:function hK(){},
hL:function hL(){},
hr:function hr(){},
hu:function hu(a){this.a=a},
hw:function hw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hx:function hx(a){this.a=a},
bJ:function bJ(a){this.a=a},
x:function x(){},
cn:function cn(a){this.a=a},
f5:function f5(a){this.a=a},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(){},
hI:function hI(){},
hJ:function hJ(){},
hO:function hO(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hP:function hP(){},
hM:function hM(){},
cc:function cc(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ah:function ah(){},
hG:function hG(a,b){this.a=a
this.b=b},
du:function du(a){this.a=a},
hT:function hT(a){this.a=a},
cN:function cN(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cU:function cU(){},
cV:function cV(){},
cX:function cX(){},
cY:function cY(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d7:function d7(){},
d8:function d8(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
bO:function bO(){},
bP:function bP(){},
df:function df(){},
dg:function dg(){},
dk:function dk(){},
dn:function dn(){},
dp:function dp(){},
bQ:function bQ(){},
bR:function bR(){},
dq:function dq(){},
dr:function dr(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){}},K={
z:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.G("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aj(a,0)
t=C.b.aj(b,0)
if(u>t){s=t
t=u
u=s}return new K.fe(u,t)},
n:function(a){var u=new K.fn()
u.c3(a)
return u},
ac:function ac(){},
cd:function cd(){},
aC:function aC(){},
P:function P(){this.a=null},
fe:function fe(a,b){this.a=a
this.b=b},
fn:function fn(){this.a=null}},L={
fN:function(){var u=new L.fM(),t=P.o
u.a=new H.a2([t,L.cy])
u.b=new H.a2([t,L.cE])
u.c=P.bq(t)
return u},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a){this.b=a
this.c=null},
fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},
cF:function cF(a){this.b=a
this.a=this.c=null}},O={
iP:function(a){var u=new O.dW([a])
u.a=H.b([],[a])
return u},
dW:function dW(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bu:function bu(){this.b=this.a=null},
e5:function e5(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){}},E={
kE:function(){if(J.i9(window.navigator.vendor,"Google"))return C.w
if(J.i9(window.navigator.userAgent,"Firefox"))return C.n
var u=window.navigator.appVersion
if(J.aM(u).w(u,"Trident")||C.b.w(u,"Edge"))return C.o
if(J.i9(window.navigator.appName,"Microsoft"))return C.o
return C.x},
kF:function(){var u=window.navigator.appVersion
if(J.aM(u).w(u,"Win"))return C.O
if(C.b.w(u,"Mac"))return C.P
if(C.b.w(u,"Linux"))return C.Q
return C.R},
kt:function(a,b){var u=new E.ff(a)
u.c2(a,b)
return u},
kz:function(a,b,c,d,e){var u,t,s=J.K(a)
if(!!s.$iaQ)return E.j8(a,!0,!0,!0,!1)
u=W.iN()
t=u.style
t.width="100%"
t.height="100%"
s.gbs(a).p(0,u)
return E.j8(u,!0,!0,!0,!1)},
j8:function(a,b,c,d,e){var u,t,s,r,q,p="mousemove",o=new E.cC(),n=C.G.bT(a,"webgl2",P.ke(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(n==null)H.H(P.G("Failed to get the rendering context for WebGL."))
o.b=a
o.c=n
o.e=E.kt(n,a)
n.getParameter(3379)
n.getParameter(34076)
u=new X.cI(a)
t=new X.eH()
t.d=P.bq(P.A)
u.b=t
t=new X.eX(u)
t.f=0
t.r=V.cq()
t.x=V.cq()
t.ch=t.Q=1
u.c=t
t=new X.eN(u)
t.r=0
t.x=V.cq()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.fO(u)
t.f=V.cq()
t.r=V.cq()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.cz,P.M]])
t=$.iS
if(t==null){s=E.kE()
E.kF()
t=$.iS=new E.hv(s)}u.Q=t.a===C.n?0.16666666666666666:0.005555555555555556
r=u.z
q=document
r.push(W.J(q,"contextmenu",u.gcw(),!1))
u.z.push(W.J(a,"focus",u.gcE(),!1))
u.z.push(W.J(a,"blur",u.gcq(),!1))
u.z.push(W.J(q,"keyup",u.gcI(),!1))
u.z.push(W.J(q,"keydown",u.gcG(),!1))
u.z.push(W.J(a,"mousedown",u.gcL(),!1))
u.z.push(W.J(a,"mouseup",u.gcP(),!1))
u.z.push(W.J(a,p,u.gcN(),!1))
r=u.z
W.ie(a)
W.ie(a)
r.push(W.J(a,W.ie(a),u.gcR(),!1))
u.z.push(W.J(q,p,u.gcA(),!1))
u.z.push(W.J(q,"mouseup",u.gcC(),!1))
u.z.push(W.J(q,"pointerlockchange",u.gcT(),!1))
u.z.push(W.J(a,"touchstart",u.gd_(),!1))
u.z.push(W.J(a,"touchend",u.gcW(),!1))
u.z.push(W.J(a,"touchmove",u.gcY(),!1))
o.ch=!0
o.cx=!1
Date.now()
o.db=0
o.bl()
return o},
dR:function dR(){},
av:function av(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aP:function aP(a){this.b=a},
aY:function aY(a){this.b=a},
hv:function hv(a){this.a=a},
ff:function ff(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
cC:function cC(){var _=this
_.db=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
fK:function fK(a){this.a=a}},Z={
iw:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iz(c)),35044)
a.bindBuffer(b,null)
return new Z.cK(b,u)},
V:function(a){return new Z.cJ(a)},
cK:function cK(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hl:function hl(a){this.a=a},
c2:function c2(a,b){this.a=a
this.b=null
this.c=b},
aU:function aU(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a){this.a=a}},D={
aw:function(){var u=new D.bm()
u.d=0
return u},
dU:function dU(){},
bm:function bm(){var _=this
_.d=_.c=_.b=_.a=null},
eg:function eg(a){this.a=a},
eh:function eh(a){this.a=a},
U:function U(){this.b=null},
ex:function ex(){this.b=null},
ey:function ey(){this.b=null},
D:function D(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={c3:function c3(a,b){this.a=a
this.b=b},cg:function cg(a,b){this.a=a
this.b=b},eH:function eH(){this.d=this.b=this.a=null},eN:function eN(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},eX:function eX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fO:function fO(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cI:function cI(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k8:function(a){var u=new X.ep(),t=V.l0(1)
u.a=new V.aR(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.j4
if(t==null){t=V.ks(0,0,1,1)
$.j4=t}u.r=t
return u},
id:function id(){},
ep:function ep(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fG:function fG(){}},V={
l0:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
iH:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bU(a-b,u)
return(a<0?a+u:a)+b},
u:function(a,b,c){if(a==null)return C.b.W("null",c)
return C.b.W(C.c.e7(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
i_:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=0,t=0;t<4;++t){s=V.u(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.f(o,q)
r=C.b.W(o[q],u)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=r}return o},
iY:function(){var u=$.iX
return u==null?$.iX=V.aD(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aD:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cq:function(){var u=$.j0
return u==null?$.j0=new V.a4(0,0):u},
ks:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ct(a,b,c,d)},
iv:function(){var u=$.je
return u==null?$.je=new V.F(0,0,0):u},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a){this.a=a},
bt:function bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
aZ:function aZ(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b3:function b3(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
kv:function(a){var u=new V.fs()
u.c5(a,!0)
return u},
c4:function c4(){},
e3:function e3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
er:function er(a){var _=this
_.a=a
_.d=_.c=_.b=null},
es:function es(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fb:function fb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fs:function fs(){this.b=this.a=null},
fu:function fu(a){this.a=a},
ft:function ft(a){this.a=a},
fv:function fv(a){this.a=a}},U={c5:function c5(){this.b=this.a=null},eY:function eY(){},cu:function cu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c9:function c9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iu:function(a,b,c,d,e){var u=new A.fV(a,c,e)
u.f=d
P.kf(d,0,P.A)
return u},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a){this.a=a},
e6:function e6(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cv:function cv(){},
cG:function cG(){},
h1:function h1(a){this.a=a},
fU:function fU(a,b,c){this.a=a
this.c=b
this.d=c},
fX:function fX(a,b,c){this.a=a
this.c=b
this.d=c},
fZ:function fZ(a,b,c){this.a=a
this.c=b
this.d=c},
h0:function h0(a,b,c){this.a=a
this.c=b
this.d=c},
fV:function fV(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c},
fW:function fW(a,b,c){this.a=a
this.c=b
this.d=c},
fY:function fY(a,b,c){this.a=a
this.c=b
this.d=c},
h_:function h_(a,b,c){this.a=a
this.c=b
this.d=c},
h2:function h2(a,b,c){this.a=a
this.c=b
this.d=c},
h3:function h3(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c},
h4:function h4(a,b,c){this.a=a
this.c=b
this.d=c},
h5:function h5(a,b,c){this.a=a
this.c=b
this.d=c}},F={
hW:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
bS:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.F(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.F(u+a3,t+a1,s+a2)
q=new V.F(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.F(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.hW(i)
l=F.hW(h)
k=F.ln(d,a0,new F.hV(j,F.hW(g),F.hW(f),l,m,c),b)
if(k!=null)a.dH(k)},
ln:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.j5()
t=H.b([],[F.bG])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.bq(new V.aR(p,0,0,1),new V.a4(r,1))
c.$3(o,r,0)
t.push(o.aW(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.bq(new V.aR(j,i,h,1),new V.a4(r,m))
c.$3(o,r,n)
t.push(o.aW(d))}}u.d.de(a+1,b+1,t)
return u},
ca:function(a,b,c){var u=new F.aT(),t=a.a
if(t==null)H.H(P.G("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.H(P.G("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
j5:function(){var u=new F.fo(),t=new F.hd(u)
t.b=!1
t.c=H.b([],[F.bG])
u.a=t
t=new F.fr(u)
t.b=H.b([],[F.by])
u.b=t
t=new F.fq(u)
t.b=H.b([],[F.bp])
u.c=t
t=new F.fp(u)
t.b=H.b([],[F.aT])
u.d=t
u.e=null
return u},
jf:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bG(),r=new F.hi()
r.b=H.b([],[F.by])
s.b=r
r=new F.hh()
u=[F.bp]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.he()
u=[F.aT]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.jL()
s.e=0
r=$.aq()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bb().a)!==0?e:t
s.x=(u&$.ba().a)!==0?b:t
s.y=(u&$.bc().a)!==0?f:t
s.z=(u&$.bd().a)!==0?g:t
s.Q=(u&$.jM().a)!==0?c:t
s.ch=(u&$.be().a)!==0?i:0
s.cx=(u&$.b9().a)!==0?a:t
return s},
hV:function hV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aT:function aT(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bp:function bp(){this.b=this.a=null},
by:function by(){this.a=null},
fo:function fo(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(a){this.a=a
this.b=null},
fq:function fq(a){this.a=a
this.b=null},
fr:function fr(a){this.a=a
this.b=null},
bG:function bG(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a){this.a=a},
hd:function hd(a){this.a=a
this.c=this.b=null},
he:function he(){this.d=this.c=this.b=null},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){this.c=this.b=null},
hi:function hi(){this.b=null},
js:function(){var u,t,s,r,q,p,o,n,m,l,k,j="tutorial1",i=null,h=V.kv("Tutorial 1"),g=[P.o]
h.M(H.b(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."],g))
u=W.iN()
u.className="pageCanvas"
u.id=j
h.a.appendChild(u)
h.am(0,"Getting Started")
h.M(H.b(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."],g))
h.bp("index.html","html",0,H.b(["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"],g))
h.bp("main.dart","dart",0,H.b(["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotator()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"],g))
h.am(4,"ThreeDart")
h.M(H.b(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."],g))
h.am(4,"Scene")
h.M(H.b(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "],g))
h.M(H.b(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."],g))
h.M(H.b(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."],g))
h.am(4,"Entity")
h.M(H.b(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."],g))
h.M(H.b(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, toroid, and knot. ","The shape can be loaded from a file or created mathematically or procedurally."],g))
h.M(H.b(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotator` to cause it to rotate. Movers can be grouped ","to multiply matrices together thus compounding the movements."],g))
h.M(H.b(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearance of fog or murky water."],g))
h.am(4,"Summary")
h.M(H.b(["Play around with the Rotator, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."],g))
h.M(H.b(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."],g))
t=new E.av()
t.a=""
t.b=!0
g=E.av
h=O.iP(g)
t.y=h
h.b3(t.gdI(),t.gdL())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sb5(0,i)
t.sbM(i)
t.sao(i)
s=F.j5()
F.bS(s,i,i,1,1,1,0,0,1)
F.bS(s,i,i,1,1,0,1,0,3)
F.bS(s,i,i,1,1,0,0,1,2)
F.bS(s,i,i,1,1,-1,0,0,0)
F.bS(s,i,i,1,1,0,-1,0,0)
F.bS(s,i,i,1,1,0,0,-1,3)
h=s.e
if(h!=null)++h.d
s.d.aU()
s.a.aU()
h=s.e
if(h!=null)h.aB(0)
t.sb5(0,s)
h=new U.cu()
h.r=h.f=h.e=h.d=h.c=h.b=h.a=0
h.sbQ(0)
h.sbF(0,0)
h.sbK(0)
r=h.d
if(!(Math.abs(r-0.1)<$.B().a)){h.d=0.1
r=new D.D("deltaYaw",r,0.1)
r.b=!0
h.ac(r)}r=h.e
if(!(Math.abs(r-0.21)<$.B().a)){h.e=0.21
r=new D.D("deltaPitch",r,0.21)
r.b=!0
h.ac(r)}r=h.f
if(!(Math.abs(r-0.32)<$.B().a)){h.f=0.32
r=new D.D("deltaRoll",r,0.32)
r.b=!0
h.ac(r)}t.sao(h)
h=new O.e5()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.B().a)){h.b=3
r=new D.D("start",1,3)
r.b=!0
h.aH(r)}r=h.c
if(!(Math.abs(r-6)<$.B().a)){h.c=6
r=new D.D("stop",r,6)
r.b=!0
h.aH(r)}if(!h.d){h.d=!0
h.a=null
r=new D.D("grey",!1,!0)
r.b=!0
h.aH(r)}t.sbM(h)
q=new M.c9()
q.a=!0
h=O.iP(g)
q.e=h
h.b3(q.gcs(),q.gcu())
q.y=q.x=q.r=q.f=null
p=X.k8(i)
o=new X.cp()
o.c=1.0471975511965976
o.d=0.1
o.e=2000
o.sao(i)
h=o.c
if(!(Math.abs(h-1.0471975511965976)<$.B().a)){o.c=1.0471975511965976
h=new D.D("fov",h,1.0471975511965976)
h.b=!0
o.aa(h)}h=o.d
if(!(Math.abs(h-0.1)<$.B().a)){o.d=0.1
h=new D.D("near",h,0.1)
h.b=!0
o.aa(h)}h=o.e
if(!(Math.abs(h-2000)<$.B().a)){o.e=2000
h=new D.D("far",h,2000)
h.b=!0
o.aa(h)}h=q.b
if(h!==o){if(h!=null)h.gB().J(0,q.ga8())
n=q.b
q.b=o
o.gB().p(0,q.ga8())
h=new D.D("camera",n,q.b)
h.b=!0
q.a9(h)}h=q.c
if(h!==p){if(h!=null)h.gB().J(0,q.ga8())
n=q.c
q.c=p
p.gB().p(0,q.ga8())
h=new D.D("target",n,q.c)
h.b=!0
q.a9(h)}h=q.e
g=[H.Z(h,0)]
if(h.cV(H.b([t],g))){r=h.a
m=r.length
r.push(t)
h.cp(m,H.b([t],g))}h=q.b
l=V.aD(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
g=new U.c5()
g.a=l
h.sao(g)
k=document.getElementById(j)
if(k==null)H.H(P.G("Failed to find an element with the identifier, tutorial1."))
h=E.kz(k,!0,!0,!0,!1)
g=h.d
if(g!==q){if(g!=null)g.gB().J(0,h.gb8())
h.d=q
q.gB().p(0,h.gb8())
h.b9()}}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.im.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gE:function(a){return H.bz(a)},
h:function(a){return"Instance of '"+H.e(H.bA(a))+"'"}}
J.eB.prototype={
h:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iaL:1}
J.eD.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gE:function(a){return 0}}
J.cf.prototype={
gE:function(a){return 0},
h:function(a){return String(a)}}
J.fa.prototype={}
J.b2.prototype={}
J.az.prototype={
h:function(a){var u=a[$.jA()]
if(u==null)return this.c0(a)
return"JavaScript function for "+H.e(J.R(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ax.prototype={
dY:function(a,b){var u
if(!!a.fixed$length)H.H(P.r("removeAt"))
u=a.length
if(b>=u)throw H.c(P.cs(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var u
if(!!a.fixed$length)H.H(P.r("remove"))
for(u=0;u<a.length;++u)if(J.I(a[u],b)){a.splice(u,1)
return!0}return!1},
R:function(a,b){var u,t
if(!!a.fixed$length)H.H(P.r("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.au(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
dF:function(a){return this.l(a,"")},
dC:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.au(a))}throw H.c(H.ij())},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
bX:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.a5(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.a5(c,b,u,"end",null))
if(b===c)return H.b([],[H.Z(a,0)])
return H.b(a.slice(b,c),[H.Z(a,0)])},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ij())},
br:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.au(a))}return!1},
w:function(a,b){var u
for(u=0;u<a.length;++u)if(J.I(a[u],b))return!0
return!1},
h:function(a){return P.ii(a,"[","]")},
gG:function(a){return new J.S(a,a.length)},
gE:function(a){return H.bz(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.H(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ib(b,u,null))
if(b<0)throw H.c(P.a5(b,0,null,u,null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.b8(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.H(P.r("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b8(a,b))
a[b]=c},
$im:1,
$il:1}
J.il.prototype={}
J.S.prototype={
gv:function(a){return this.d},
n:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.t(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bo.prototype={
X:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ao(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gay(b)
if(this.gay(a)===u)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
bt:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.r(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
dl:function(a,b,c){if(C.d.X(b,c)>0)throw H.c(H.ao(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
e7:function(a,b){var u
if(b>20)throw H.c(P.a5(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bU:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ae:function(a,b){return(a|0)===a?a/b|0:this.dc(a,b)},
dc:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.r("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
av:function(a,b){var u
if(a>0)u=this.da(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
da:function(a,b){return b>31?0:a>>>b},
$iC:1,
$iW:1}
J.ce.prototype={$iA:1}
J.eC.prototype={}
J.ay.prototype={
aV:function(a,b){if(b<0)throw H.c(H.b8(a,b))
if(b>=a.length)H.H(H.b8(a,b))
return a.charCodeAt(b)},
aj:function(a,b){if(b>=a.length)throw H.c(H.b8(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.ib(b,null,null))
return a+b},
aE:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ar:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cs(b,null))
if(b>c)throw H.c(P.cs(b,null))
if(c>a.length)throw H.c(P.cs(c,null))
return a.substring(b,c)},
aF:function(a,b){return this.ar(a,b,null)},
e6:function(a){return a.toLowerCase()},
K:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
W:function(a,b){var u=b-a.length
if(u<=0)return a
return this.K(" ",u)+a},
dm:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.a5(c,0,u,null,null))
return H.jx(a,b,c)},
w:function(a,b){return this.dm(a,b,0)},
X:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ao(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$io:1}
H.j.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.aV(this.a,b)},
$am:function(){return[P.A]},
$ap:function(){return[P.A]},
$al:function(){return[P.A]}}
H.m.prototype={}
H.ch.prototype={
gG:function(a){return new H.aB(this,this.gk(this))},
aC:function(a,b){return this.c_(0,b)}}
H.aB.prototype={
gv:function(a){return this.d},
n:function(){var u,t=this,s=t.a,r=J.aM(s),q=r.gk(s)
if(t.b!=q)throw H.c(P.au(s))
u=t.c
if(typeof q!=="number")return H.O(q)
if(u>=q){t.d=null
return!1}t.d=r.u(s,u);++t.c
return!0}}
H.bs.prototype={
gG:function(a){return new H.ci(J.ar(this.a),this.b)},
gk:function(a){return J.as(this.a)},
u:function(a,b){return this.b.$1(J.dH(this.a,b))},
$al:function(a,b){return[b]}}
H.ec.prototype={$im:1,
$am:function(a,b){return[b]}}
H.ci.prototype={
n:function(){var u=this,t=u.b
if(t.n()){u.a=u.c.$1(t.gv(t))
return!0}u.a=null
return!1},
gv:function(a){return this.a}}
H.eQ.prototype={
gk:function(a){return J.as(this.a)},
u:function(a,b){return this.b.$1(J.dH(this.a,b))},
$am:function(a,b){return[b]},
$ach:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.bH.prototype={
gG:function(a){return new H.hm(J.ar(this.a),this.b)}}
H.hm.prototype={
n:function(){var u,t
for(u=this.a,t=this.b;u.n();)if(t.$1(u.gv(u)))return!0
return!1},
gv:function(a){var u=this.a
return u.gv(u)}}
H.cb.prototype={}
H.h8.prototype={
m:function(a,b,c){throw H.c(P.r("Cannot modify an unmodifiable list"))}}
H.cH.prototype={}
H.fS.prototype={
U:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.f6.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eG.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.h7.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.i8.prototype={
$1:function(a){if(!!J.K(a).$iaS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dj.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bh.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.bX(t==null?"unknown":t)+"'"},
geb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fH.prototype={}
H.fz.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bX(u)+"'"}}
H.bf.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bf))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gE:function(a){var u,t=this.c
if(t==null)u=H.bz(this.a)
else u=typeof t!=="object"?J.dI(t):H.bz(t)
return(u^H.bz(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bA(u))+"'")}}
H.dT.prototype={
h:function(a){return this.a}}
H.fl.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.a2.prototype={
gk:function(a){return this.a},
gO:function(a){return new H.aW(this,[H.Z(this,0)])},
gea:function(a){var u=this,t=H.Z(u,0)
return H.kg(new H.aW(u,[t]),new H.eF(u),t,H.Z(u,1))},
dn:function(a,b){var u=this.b
if(u==null)return!1
return this.cg(u,b)},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.at(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.at(r,b)
s=t==null?null:t.b
return s}else return q.dD(b)},
dD:function(a){var u,t,s=this.d
if(s==null)return
u=this.bk(s,J.dI(a)&0x3ffffff)
t=this.bu(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bc(u==null?o.b=o.aN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bc(t==null?o.c=o.aN():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aN()
r=J.dI(b)&0x3ffffff
q=o.bk(s,r)
if(q==null)o.aQ(s,r,[o.aO(b,c)])
else{p=o.bu(q,b)
if(p>=0)q[p].b=c
else q.push(o.aO(b,c))}}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.au(u))
t=t.c}},
bc:function(a,b,c){var u=this.at(a,b)
if(u==null)this.aQ(a,b,this.aO(b,c))
else u.b=c},
co:function(){this.r=this.r+1&67108863},
aO:function(a,b){var u,t=this,s=new H.eJ(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.co()
return s},
bu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1},
h:function(a){return P.iW(this)},
at:function(a,b){return a[b]},
bk:function(a,b){return a[b]},
aQ:function(a,b,c){a[b]=c},
cl:function(a,b){delete a[b]},
cg:function(a,b){return this.at(a,b)!=null},
aN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aQ(t,u,t)
this.cl(t,u)
return t}}
H.eF.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.Z(u,1),args:[H.Z(u,0)]}}}
H.eJ.prototype={}
H.aW.prototype={
gk:function(a){return this.a.a},
gG:function(a){var u=this.a,t=new H.eK(u,u.r)
t.c=u.e
return t}}
H.eK.prototype={
gv:function(a){return this.d},
n:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.i2.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.i3.prototype={
$2:function(a,b){return this.a(a,b)}}
H.i4.prototype={
$1:function(a){return this.a(a)}}
H.eE.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bx.prototype={}
H.cj.prototype={
gk:function(a){return a.length},
$iq:1,
$aq:function(){}}
H.bw.prototype={
j:function(a,b){H.aa(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aa(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.C]},
$ap:function(){return[P.C]},
$il:1,
$al:function(){return[P.C]}}
H.ck.prototype={
m:function(a,b,c){H.aa(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.A]},
$ap:function(){return[P.A]},
$il:1,
$al:function(){return[P.A]}}
H.eZ.prototype={
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.f_.prototype={
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.f0.prototype={
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.f1.prototype={
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.f2.prototype={
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.cl.prototype={
gk:function(a){return a.length},
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.f3.prototype={
gk:function(a){return a.length},
j:function(a,b){H.aa(b,a,a.length)
return a[b]}}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
H.bN.prototype={}
P.ho.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.hn.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hp.prototype={
$0:function(){this.a.$0()}}
P.hq.prototype={
$0:function(){this.a.$0()}}
P.hQ.prototype={
c9:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bV(new P.hR(this,b),0),a)
else throw H.c(P.r("`setTimeout()` not found."))}}
P.hR.prototype={
$0:function(){this.b.$0()}}
P.b4.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.b5.prototype={
gv:function(a){var u=this.c
if(u==null)return this.b
return u.gv(u)},
n:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.n())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.b4){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.ar(u)
if(!!r.$ib5){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.hN.prototype={
gG:function(a){return new P.b5(this.a())}}
P.cL.prototype={}
P.cz.prototype={}
P.fC.prototype={}
P.hU.prototype={}
P.hX.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.co():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.hD.prototype={
e1:function(a){var u,t,s,r=null
try{if(C.e===$.a9){a.$0()
return}P.kS(r,r,this,a)}catch(s){u=H.ab(s)
t=H.iD(s)
P.jk(r,r,this,u,t)}},
e2:function(a,b){var u,t,s,r=null
try{if(C.e===$.a9){a.$1(b)
return}P.kT(r,r,this,a,b)}catch(s){u=H.ab(s)
t=H.iD(s)
P.jk(r,r,this,u,t)}},
e3:function(a,b){return this.e2(a,b,null)},
di:function(a){return new P.hE(this,a)},
dj:function(a,b){return new P.hF(this,a,b)}}
P.hE.prototype={
$0:function(){return this.a.e1(this.b)}}
P.hF.prototype={
$1:function(a){return this.a.e3(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hA.prototype={
gG:function(a){var u=new P.d0(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
w:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cf(b)
return t}},
cf:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.bj(u,a),a)>=0},
p:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.be(u==null?s.b=P.ix():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.be(t==null?s.c=P.ix():t,b)}else return s.cb(0,b)},
cb:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ix()
u=s.bg(b)
t=r[u]
if(t==null)r[u]=[s.aI(b)]
else{if(s.aL(t,b)>=0)return!1
t.push(s.aI(b))}return!0},
J:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.d2(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bj(r,b)
t=s.aL(u,b)
if(t<0)return!1
s.bn(u.splice(t,1)[0])
return!0},
be:function(a,b){if(a[b]!=null)return!1
a[b]=this.aI(b)
return!0},
d2:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bn(u)
delete a[b]
return!0},
bf:function(){this.r=1073741823&this.r+1},
aI:function(a){var u,t=this,s=new P.hB(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bf()
return s},
bn:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bf()},
bg:function(a){return J.dI(a)&1073741823},
bj:function(a,b){return a[this.bg(b)]},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1}}
P.hB.prototype={}
P.d0.prototype={
gv:function(a){return this.d},
n:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.ez.prototype={}
P.eL.prototype={$im:1,$il:1}
P.p.prototype={
gG:function(a){return new H.aB(a,this.gk(a))},
u:function(a,b){return this.j(a,b)},
e5:function(a,b){var u,t,s=this,r=H.b([],[H.l8(s,a,"p",0)])
C.a.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.O(t)
if(!(u<t))break
t=s.j(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
e4:function(a){return this.e5(a,!0)},
h:function(a){return P.ii(a,"[","]")}}
P.eO.prototype={}
P.eP.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:7}
P.L.prototype={
F:function(a,b){var u,t
for(u=J.ar(this.gO(a));u.n();){t=u.gv(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.as(this.gO(a))},
h:function(a){return P.iW(a)}}
P.hH.prototype={
R:function(a,b){var u
for(u=J.ar(b);u.n();)this.p(0,u.gv(u))},
h:function(a){return P.ii(this,"{","}")},
u:function(a,b){var u,t,s
P.j3(b,"index")
for(u=P.kK(this,this.r),t=0;u.n();){s=u.d
if(b===t)return s;++t}throw H.c(P.y(b,this,"index",null,t))},
$im:1,
$il:1}
P.d1.prototype={}
P.dV.prototype={}
P.dY.prototype={}
P.ee.prototype={}
P.ev.prototype={
h:function(a){return this.a}}
P.eu.prototype={
ci:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.f(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.aG("")
if(r>b)q.a+=C.b.ar(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jX(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hb.prototype={}
P.hc.prototype={
dq:function(a){var u,t,s,r=P.ir(0,null,a.length)
if(typeof r!=="number")return r.P()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hS(t)
if(s.cn(a,0,r)!==r)s.bo(C.b.aV(a,r-1),0)
return new Uint8Array(t.subarray(0,H.kM(0,s.b,t.length)))}}
P.hS.prototype={
bo:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.f(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.f(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|a&63
return!1}},
cn:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aV(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aj(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bo(r,C.b.aj(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.f(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.f(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.f(u,q)
u[q]=128|r&63}}return s}}
P.aL.prototype={}
P.bj.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bj&&this.a===b.a&&!0},
X:function(a,b){return C.d.X(this.a,b.a)},
gE:function(a){var u=this.a
return(u^C.d.av(u,30))&1073741823},
h:function(a){var u=this,t=P.k4(H.ko(u)),s=P.c6(H.km(u)),r=P.c6(H.ki(u)),q=P.c6(H.kj(u)),p=P.c6(H.kl(u)),o=P.c6(H.kn(u)),n=P.k5(H.kk(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.C.prototype={}
P.bk.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bk&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
X:function(a,b){return C.d.X(this.a,b.a)},
h:function(a){var u,t,s,r=new P.eb(),q=this.a
if(q<0)return"-"+new P.bk(0-q).h(0)
u=r.$1(C.d.ae(q,6e7)%60)
t=r.$1(C.d.ae(q,1e6)%60)
s=new P.ea().$1(q%1e6)
return""+C.d.ae(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ea.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aS.prototype={}
P.co.prototype={
h:function(a){return"Throw of null."}}
P.a_.prototype={
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaK()+o+u
if(!q.a)return t
s=q.gaJ()
r=P.ih(q.b)
return t+s+": "+r}}
P.b0.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.ew.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t=this.b
if(typeof t!=="number")return t.a5()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.h9.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.h6.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bC.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dX.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ih(u)+"."}}
P.f9.prototype={
h:function(a){return"Out of Memory"},
$iaS:1}
P.cx.prototype={
h:function(a){return"Stack Overflow"},
$iaS:1}
P.e2.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cT.prototype={
h:function(a){return"Exception: "+this.a}}
P.eo.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.ar(s,0,75)+"...":s
return t+"\n"+r}}
P.eq.prototype={}
P.A.prototype={}
P.l.prototype={
aC:function(a,b){return new H.bH(this,b,[H.jq(this,"l",0)])},
gk:function(a){var u,t=this.gG(this)
for(u=0;t.n();)++u
return u},
ga6:function(a){var u,t=this.gG(this)
if(!t.n())throw H.c(H.ij())
u=t.gv(t)
if(t.n())throw H.c(H.ka())
return u},
u:function(a,b){var u,t,s
P.j3(b,"index")
for(u=this.gG(this),t=0;u.n();){s=u.gv(u)
if(b===t)return s;++t}throw H.c(P.y(b,this,"index",null,t))},
h:function(a){return P.k9(this,"(",")")}}
P.eA.prototype={}
P.aX.prototype={$im:1,$il:1}
P.br.prototype={}
P.aE.prototype={
gE:function(a){return P.M.prototype.gE.call(this,this)},
h:function(a){return"null"}}
P.W.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gE:function(a){return H.bz(this)},
h:function(a){return"Instance of '"+H.e(H.bA(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.aG.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.k.prototype={}
W.dJ.prototype={
gk:function(a){return a.length}}
W.dK.prototype={
h:function(a){return String(a)}}
W.dL.prototype={
h:function(a){return String(a)}}
W.c0.prototype={}
W.aO.prototype={$iaO:1}
W.aQ.prototype={
bT:function(a,b,c){var u=a.getContext(b,P.l1(c))
return u},
$iaQ:1}
W.at.prototype={
gk:function(a){return a.length}}
W.dZ.prototype={
gk:function(a){return a.length}}
W.w.prototype={$iw:1}
W.bi.prototype={
gk:function(a){return a.length}}
W.e_.prototype={}
W.T.prototype={}
W.a1.prototype={}
W.e0.prototype={
gk:function(a){return a.length}}
W.e1.prototype={
gk:function(a){return a.length}}
W.e4.prototype={
gk:function(a){return a.length}}
W.X.prototype={$iX:1}
W.e7.prototype={
h:function(a){return String(a)}}
W.c7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[[P.Y,P.W]]},
$iq:1,
$aq:function(){return[[P.Y,P.W]]},
$ap:function(){return[[P.Y,P.W]]},
$il:1,
$al:function(){return[[P.Y,P.W]]}}
W.c8.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gai(a))+" x "+H.e(this.gag(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.K(b)
return!!u.$iY&&a.left===u.gbv(b)&&a.top===u.gbO(b)&&this.gai(a)===u.gai(b)&&this.gag(a)===u.gag(b)},
gE:function(a){return W.jh(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(this.gai(a)),C.c.gE(this.gag(a)))},
gag:function(a){return a.height},
gbv:function(a){return a.left},
gbO:function(a){return a.top},
gai:function(a){return a.width},
$iY:1,
$aY:function(){return[P.W]}}
W.e8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[P.o]},
$iq:1,
$aq:function(){return[P.o]},
$ap:function(){return[P.o]},
$il:1,
$al:function(){return[P.o]}}
W.e9.prototype={
gk:function(a){return a.length}}
W.hs.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
p:function(a,b){this.a.appendChild(b)
return b},
gG:function(a){var u=this.e4(this)
return new J.S(u,u.length)},
$am:function(){return[W.E]},
$ap:function(){return[W.E]},
$al:function(){return[W.E]}}
W.E.prototype={
gdh:function(a){return new W.hu(a)},
gbs:function(a){return new W.hs(a,a.children)},
h:function(a){return a.localName},
S:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.iR
if(u==null){u=H.b([],[W.ah])
t=new W.cn(u)
u.push(W.jg(null))
u.push(W.ji())
$.iR=t
d=t}else d=u
u=$.iQ
if(u==null){u=new W.du(d)
$.iQ=u
c=u}else{u.a=d
c=u}}if($.ad==null){u=document
t=u.implementation.createHTMLDocument("")
$.ad=t
$.ig=t.createRange()
s=$.ad.createElement("base")
s.href=u.baseURI
$.ad.head.appendChild(s)}u=$.ad
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ad
if(!!this.$iaO)r=u.body
else{r=u.createElement(a.tagName)
$.ad.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.M,a.tagName)){$.ig.selectNodeContents(r)
q=$.ig.createContextualFragment(b)}else{r.innerHTML=b
q=$.ad.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ad.body
if(r==null?u!=null:r!==u)J.iK(r)
c.b2(q)
document.adoptNode(q)
return q},
ds:function(a,b,c){return this.S(a,b,c,null)},
bW:function(a,b){a.textContent=null
a.appendChild(this.S(a,b,null,null))},
$iE:1,
gbL:function(a){return a.tagName}}
W.ed.prototype={
$1:function(a){return!!J.K(a).$iE}}
W.h.prototype={$ih:1}
W.d.prototype={
dd:function(a,b,c,d){if(c!=null)this.cc(a,b,c,!1)},
cc:function(a,b,c,d){return a.addEventListener(b,H.bV(c,1),!1)}}
W.ae.prototype={$iae:1}
W.ei.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ae]},
$iq:1,
$aq:function(){return[W.ae]},
$ap:function(){return[W.ae]},
$il:1,
$al:function(){return[W.ae]}}
W.ej.prototype={
gk:function(a){return a.length}}
W.en.prototype={
gk:function(a){return a.length}}
W.af.prototype={$iaf:1}
W.et.prototype={
gk:function(a){return a.length}}
W.bn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iq:1,
$aq:function(){return[W.v]},
$ap:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]}}
W.aV.prototype={$iaV:1}
W.eM.prototype={
h:function(a){return String(a)}}
W.eR.prototype={
gk:function(a){return a.length}}
W.eS.prototype={
j:function(a,b){return P.ap(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ap(u.value[1]))}},
gO:function(a){var u=H.b([],[P.o])
this.F(a,new W.eT(u))
return u},
gk:function(a){return a.size},
$aL:function(){return[P.o,null]}}
W.eT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eU.prototype={
j:function(a,b){return P.ap(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ap(u.value[1]))}},
gO:function(a){var u=H.b([],[P.o])
this.F(a,new W.eV(u))
return u},
gk:function(a){return a.size},
$aL:function(){return[P.o,null]}}
W.eV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ag.prototype={$iag:1}
W.eW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ag]},
$iq:1,
$aq:function(){return[W.ag]},
$ap:function(){return[W.ag]},
$il:1,
$al:function(){return[W.ag]}}
W.a3.prototype={$ia3:1}
W.N.prototype={
ga6:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.j6("No elements"))
if(t>1)throw H.c(P.j6("More than one element"))
return u.firstChild},
R:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gG:function(a){var u=this.a.childNodes
return new W.cc(u,u.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$am:function(){return[W.v]},
$ap:function(){return[W.v]},
$al:function(){return[W.v]}}
W.v.prototype={
dX:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
e_:function(a,b){var u,t
try{u=a.parentNode
J.jR(u,b,a)}catch(t){H.ab(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.bZ(a):u},
d3:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iq:1,
$aq:function(){return[W.v]},
$ap:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]}}
W.ai.prototype={$iai:1,
gk:function(a){return a.length}}
W.fc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ai]},
$iq:1,
$aq:function(){return[W.ai]},
$ap:function(){return[W.ai]},
$il:1,
$al:function(){return[W.ai]}}
W.fj.prototype={
j:function(a,b){return P.ap(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ap(u.value[1]))}},
gO:function(a){var u=H.b([],[P.o])
this.F(a,new W.fk(u))
return u},
gk:function(a){return a.size},
$aL:function(){return[P.o,null]}}
W.fk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fm.prototype={
gk:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.fw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aj]},
$iq:1,
$aq:function(){return[W.aj]},
$ap:function(){return[W.aj]},
$il:1,
$al:function(){return[W.aj]}}
W.ak.prototype={$iak:1}
W.fx.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ak]},
$iq:1,
$aq:function(){return[W.ak]},
$ap:function(){return[W.ak]},
$il:1,
$al:function(){return[W.ak]}}
W.al.prototype={$ial:1,
gk:function(a){return a.length}}
W.fA.prototype={
j:function(a,b){return a.getItem(b)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gO:function(a){var u=H.b([],[P.o])
this.F(a,new W.fB(u))
return u},
gk:function(a){return a.length},
$aL:function(){return[P.o,P.o]}}
W.fB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.a6.prototype={$ia6:1}
W.cA.prototype={
S:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
u=W.k6("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.N(t).R(0,new W.N(u))
return t}}
W.fE.prototype={
S:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.S(u.createElement("table"),b,c,d)
u.toString
u=new W.N(u)
s=u.ga6(u)
s.toString
u=new W.N(s)
r=u.ga6(u)
t.toString
r.toString
new W.N(t).R(0,new W.N(r))
return t}}
W.fF.prototype={
S:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.S(u.createElement("table"),b,c,d)
u.toString
u=new W.N(u)
s=u.ga6(u)
t.toString
s.toString
new W.N(t).R(0,new W.N(s))
return t}}
W.bD.prototype={$ibD:1}
W.am.prototype={$iam:1}
W.a7.prototype={$ia7:1}
W.fI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.a7]},
$iq:1,
$aq:function(){return[W.a7]},
$ap:function(){return[W.a7]},
$il:1,
$al:function(){return[W.a7]}}
W.fJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.am]},
$iq:1,
$aq:function(){return[W.am]},
$ap:function(){return[W.am]},
$il:1,
$al:function(){return[W.am]}}
W.fL.prototype={
gk:function(a){return a.length}}
W.an.prototype={$ian:1}
W.b1.prototype={$ib1:1}
W.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.an]},
$iq:1,
$aq:function(){return[W.an]},
$ap:function(){return[W.an]},
$il:1,
$al:function(){return[W.an]}}
W.fQ.prototype={
gk:function(a){return a.length}}
W.aI.prototype={}
W.ha.prototype={
h:function(a){return String(a)}}
W.hk.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={
gdv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
gdu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.r("deltaX is not supported"))},
$iaJ:1}
W.bI.prototype={
d4:function(a,b){return a.requestAnimationFrame(H.bV(b,1))},
cm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ht.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.w]},
$iq:1,
$aq:function(){return[W.w]},
$ap:function(){return[W.w]},
$il:1,
$al:function(){return[W.w]}}
W.cO.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.K(b)
return!!u.$iY&&a.left===u.gbv(b)&&a.top===u.gbO(b)&&a.width===u.gai(b)&&a.height===u.gag(b)},
gE:function(a){return W.jh(C.c.gE(a.left),C.c.gE(a.top),C.c.gE(a.width),C.c.gE(a.height))},
gag:function(a){return a.height},
gai:function(a){return a.width}}
W.hy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.af]},
$iq:1,
$aq:function(){return[W.af]},
$ap:function(){return[W.af]},
$il:1,
$al:function(){return[W.af]}}
W.d6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iq:1,
$aq:function(){return[W.v]},
$ap:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]}}
W.hK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.al]},
$iq:1,
$aq:function(){return[W.al]},
$ap:function(){return[W.al]},
$il:1,
$al:function(){return[W.al]}}
W.hL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.a6]},
$iq:1,
$aq:function(){return[W.a6]},
$ap:function(){return[W.a6]},
$il:1,
$al:function(){return[W.a6]}}
W.hr.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.gO(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gO:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aL:function(){return[P.o,P.o]}}
W.hu.prototype={
j:function(a,b){return this.a.getAttribute(b)},
gk:function(a){return this.gO(this).length}}
W.hw.prototype={}
W.hx.prototype={
$1:function(a){return this.a.$1(a)}}
W.bJ.prototype={
c6:function(a){var u
if($.cW.a===0){for(u=0;u<262;++u)$.cW.m(0,C.L[u],W.la())
for(u=0;u<12;++u)$.cW.m(0,C.k[u],W.lb())}},
af:function(a){return $.jO().w(0,W.bl(a))},
a0:function(a,b,c){var u=$.cW.j(0,H.e(W.bl(a))+"::"+b)
if(u==null)u=$.cW.j(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iah:1}
W.x.prototype={
gG:function(a){return new W.cc(a,this.gk(a))}}
W.cn.prototype={
af:function(a){return C.a.br(this.a,new W.f5(a))},
a0:function(a,b,c){return C.a.br(this.a,new W.f4(a,b,c))},
$iah:1}
W.f5.prototype={
$1:function(a){return a.af(this.a)}}
W.f4.prototype={
$1:function(a){return a.a0(this.a,this.b,this.c)}}
W.de.prototype={
c8:function(a,b,c,d){var u,t,s
this.a.R(0,c)
u=b.aC(0,new W.hI())
t=b.aC(0,new W.hJ())
this.b.R(0,u)
s=this.c
s.R(0,C.N)
s.R(0,t)},
af:function(a){return this.a.w(0,W.bl(a))},
a0:function(a,b,c){var u=this,t=W.bl(a),s=u.c
if(s.w(0,H.e(t)+"::"+b))return u.d.df(c)
else if(s.w(0,"*::"+b))return u.d.df(c)
else{s=u.b
if(s.w(0,H.e(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.e(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1},
$iah:1}
W.hI.prototype={
$1:function(a){return!C.a.w(C.k,a)}}
W.hJ.prototype={
$1:function(a){return C.a.w(C.k,a)}}
W.hO.prototype={
a0:function(a,b,c){if(this.c1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.hP.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.hM.prototype={
af:function(a){var u=J.K(a)
if(!!u.$ibB)return!1
u=!!u.$ii
if(u&&W.bl(a)==="foreignObject")return!1
if(u)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.b.aE(b,"on"))return!1
return this.af(a)},
$iah:1}
W.cc.prototype={
n:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.jQ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gv:function(a){return this.d}}
W.ah.prototype={}
W.hG.prototype={}
W.du.prototype={
b2:function(a){new W.hT(this).$2(a,null)},
al:function(a,b){if(b==null)J.iK(a)
else b.removeChild(a)},
d6:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.jV(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ab(r)}t="element unprintable"
try{t=J.R(a)}catch(r){H.ab(r)}try{s=W.bl(a)
this.d5(a,b,p,t,s,o,n)}catch(r){if(H.ab(r) instanceof P.a_)throw r
else{this.al(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
d5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.al(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.af(a)){p.al(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a0(a,"is",g)){p.al(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gO(f)
t=H.b(u.slice(0),[H.Z(u,0)])
for(s=f.gO(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a0(a,J.jY(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.K(a).$ibD)p.b2(a.content)}}
W.hT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.d6(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.al(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ab(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.cN.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dk.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
P.hY.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.ek.prototype={
gau:function(){var u=this.b,t=H.jq(u,"p",0)
return new H.bs(new H.bH(u,new P.el(),[t]),new P.em(),[t,W.E])},
m:function(a,b,c){var u=this.gau()
J.jW(u.b.$1(J.dH(u.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.as(this.gau().a)},
j:function(a,b){var u=this.gau()
return u.b.$1(J.dH(u.a,b))},
gG:function(a){var u=P.ip(this.gau(),!1,W.E)
return new J.S(u,u.length)},
$am:function(){return[W.E]},
$ap:function(){return[W.E]},
$al:function(){return[W.E]}}
P.el.prototype={
$1:function(a){return!!J.K(a).$iE}}
P.em.prototype={
$1:function(a){return H.dG(a,"$iE")}}
P.hC.prototype={}
P.Y.prototype={}
P.aA.prototype={$iaA:1}
P.eI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aA]},
$ap:function(){return[P.aA]},
$il:1,
$al:function(){return[P.aA]}}
P.aF.prototype={$iaF:1}
P.f7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aF]},
$ap:function(){return[P.aF]},
$il:1,
$al:function(){return[P.aF]}}
P.fd.prototype={
gk:function(a){return a.length}}
P.bB.prototype={$ibB:1}
P.fD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.o]},
$ap:function(){return[P.o]},
$il:1,
$al:function(){return[P.o]}}
P.i.prototype={
gbs:function(a){return new P.ek(a,new W.N(a))},
S:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ah])
p.push(W.jg(null))
p.push(W.ji())
p.push(new W.hM())
c=new W.du(new W.cn(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).ds(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.N(s)
q=p.ga6(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aH.prototype={$iaH:1}
P.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aH]},
$ap:function(){return[P.aH]},
$il:1,
$al:function(){return[P.aH]}}
P.cZ.prototype={}
P.d_.prototype={}
P.d9.prototype={}
P.da.prototype={}
P.dl.prototype={}
P.dm.prototype={}
P.ds.prototype={}
P.dt.prototype={}
P.dN.prototype={
gk:function(a){return a.length}}
P.dO.prototype={
j:function(a,b){return P.ap(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.ap(u.value[1]))}},
gO:function(a){var u=H.b([],[P.o])
this.F(a,new P.dP(u))
return u},
gk:function(a){return a.size},
$aL:function(){return[P.o,null]}}
P.dP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dQ.prototype={
gk:function(a){return a.length}}
P.aN.prototype={}
P.f8.prototype={
gk:function(a){return a.length}}
P.cM.prototype={}
P.fy.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.ap(a.item(b))},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
u:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[[P.br,,,]]},
$ap:function(){return[[P.br,,,]]},
$il:1,
$al:function(){return[[P.br,,,]]}}
P.dh.prototype={}
P.di.prototype={}
K.ac.prototype={
a3:function(a,b){return!0},
h:function(a){return"all"}}
K.cd.prototype={
a3:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].a3(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.aC.prototype={}
K.P.prototype={
a3:function(a,b){return!this.bY(0,b)},
h:function(a){return"!["+this.b7(0)+"]"}}
K.fe.prototype={
a3:function(a,b){if(typeof b!=="number")return H.O(b)
return this.a<=b&&this.b>=b},
h:function(a){var u=H.iq(this.a),t=H.iq(this.b)
return u+".."+t}}
K.fn.prototype={
c3:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.G("May not create a Set with zero characters."))
u=P.A
t=new H.a2([u,P.aL])
for(s=new H.aB(a,a.gk(a));s.n();)t.m(0,s.d,!0)
r=P.ip(new H.aW(t,[u]),!0,u)
if(!!r.immutable$list)H.H(P.r("sort"))
H.ky(r,J.kO())
this.a=r},
a3:function(a,b){return C.a.w(this.a,b)},
h:function(a){return P.is(this.a)}}
L.cy.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cF(this.a.i(0,b))
r.a=H.b([],[K.aC])
r.c=!1
this.c.push(r)
return r},
dB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.a3(0,a))return r}return},
h:function(a){return this.b},
bm:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.w(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.aW(n,[H.Z(n,0)]),n=n.gG(n);n.n();){t=n.d
o+="\n"
s=p.d.c.j(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.w(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.t)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cD.prototype={
h:function(a){var u=H.iG(this.b,"\n","\\n"),t=H.iG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cE.prototype={
a4:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.t)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
L.fM.prototype={
i:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new L.cy(this,b)
u.c=H.b([],[L.cF])
this.a.m(0,b,u)}return u},
D:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new L.cE(a)
u=P.o
t.c=new H.a2([u,u])
this.b.m(0,a,t)}return t},
b1:function(a){return this.e8(a)},
e8:function(a){var u=this
return P.kQ(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$b1(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.A]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.dY(c,0)
else{if(!t.n()){s=3
break}l=t.d}d.push(l);++o
k=g.dB(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.is(d)
throw H.c(P.G("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.H(P.r("removeRange"))
P.ir(0,m,d.length)
d.splice(0,m-0)
C.a.R(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.w(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!k.c)e.push(l)
g=k.b
if(g.d!=null){j=P.is(e)
i=g.d
h=i.c.j(0,j)
p=new L.cD(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.w(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.kI()
case 1:return P.kJ(q)}}},L.cD)},
h:function(a){var u,t=new P.aG(""),s=this.d
if(s!=null)t.a=s.bm()+"\n"
for(s=this.a,s=s.gea(s),s=new H.ci(J.ar(s.a),s.b);s.n();){u=s.a
if(u!=this.d)t.a+=u.bm()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cF.prototype={
h:function(a){return this.b.b+": "+this.b7(0)}}
O.dW.prototype={
b3:function(a,b){this.b=null
this.c=a},
cV:function(a){return!0},
cp:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gG:function(a){var u=this.a
return new J.S(u,u.length)},
u:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$il:1}
O.bu.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.aw():u},
a7:function(){var u=this.b
if(u!=null)u.T(null)},
gan:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.iY()},
bH:function(a){var u=this.a
if(a==null)u.push(V.iY())
else u.push(a)
this.a7()},
b0:function(){var u=this.a
if(u.length>0){u.pop()
this.a7()}}}
E.dR.prototype={}
E.av.prototype={
bd:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.S(u,u.length);u.n();){t=u.d
if(t.f==null)t.bd()}},
sb5:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().J(0,s.gbA())
u=s.c
if(u!=null)u.gB().p(0,s.gbA())
t=new D.D("shape",r,s.c)
t.b=!0
s.Y(t)}},
sbM:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gB().J(0,s.gbC())
u=s.f
s.f=a
if(a!=null)a.gB().p(0,s.gbC())
s.bd()
t=new D.D("technique",u,s.f)
t.b=!0
s.Y(t)}},
sao:function(a){var u,t,s=this
if(!J.I(s.r,a)){u=s.r
if(u!=null)u.gB().J(0,s.gby())
if(a!=null)a.gB().p(0,s.gby())
s.r=a
t=new D.D("mover",u,a)
t.b=!0
s.Y(t)}},
bP:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sbQ(m.a+m.d*b.y)
m.sbF(0,m.b+m.e*b.y)
m.sbK(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aD(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.K(0,V.aD(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.K(0,V.aD(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aB(0)}q=m.x}else q=null
if(!J.I(q,n.x)){p=n.x
n.x=q
o=new D.D("matrix",p,q)
o.b=!0
n.Y(o)}for(m=n.y.a,m=new J.S(m,m.length);m.n();)m.d.bP(0,b)},
ah:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gan(n))
else n.a.push(m.K(0,n.gan(n)))
n.a7()
a.bI(o.f)
n=a.dy
u=(n&&C.a).gaz(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.j(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.e6(m,s)
t.c4(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bi(r,35633)
t.f=t.bi(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!m.getProgramParameter(t.r,35714)){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.H(P.G("Failed to link shader: "+H.e(p)))}t.d7()
t.d9()
t.z=t.x.j(0,"posAttr")
t.Q=H.dG(t.y.j(0,"width"),"$ibE")
t.ch=H.dG(t.y.j(0,"stop"),"$ibE")
t.cx=H.dG(t.y.j(0,"viewObjMat"),"$ibF")
t.cy=H.dG(t.y.j(0,"projMat"),"$ibF")
if(s.length===0)H.H(P.G("May not cache a shader with no name."))
if(a.fr.dn(0,s))H.H(P.G('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.m(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.c2)?o.e=null:m)==null){n=o.d.dk(new Z.hl(a.a),$.aq())
m=n.dA($.aq())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.dz()
s=u.b
r=u.c
q=n.Q
q.a.uniform1f(q.d,s-r)
r=u.c
s=n.ch
s.a.uniform1f(s.d,r)
r=a.cy
r=r.gan(r)
s=n.cy
s.toString
s.b4(r.bN(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gan(s)
r=a.dx
r=a.cx=s.K(0,r.gan(r))
s=r}n=n.cx
n.toString
n.b4(s.bN(0,!0))
u.e
n=o.e
n.aS(a)
n.ah(a)
n.e9(a)
n=u.a
n.toString
m.useProgram(null)
n.x.dw()}for(n=o.y.a,n=new J.S(n,n.length);n.n();)n.d.ah(a)
a.bG()
a.dx.b0()},
Y:function(a){var u=this.z
if(u!=null)u.T(a)},
V:function(){return this.Y(null)},
bB:function(a){this.e=null
this.Y(a)},
dO:function(){return this.bB(null)},
bD:function(a){this.Y(a)},
dP:function(){return this.bD(null)},
bz:function(a){this.Y(a)},
dN:function(){return this.bz(null)},
bx:function(a){this.Y(a)},
dK:function(){return this.bx(null)},
dJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbw(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.V()},
dM:function(a,b){var u,t
for(u=b.gG(b),t=this.gbw();u.n();)u.gv(u).gB().J(0,t)
this.V()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.aP.prototype={
h:function(a){return this.b}}
E.aY.prototype={
h:function(a){return this.b}}
E.hv.prototype={}
E.ff.prototype={
c2:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.bj(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bu()
t=[V.bt]
u.a=H.b([],t)
u.gB().p(0,new E.fg(s))
s.cy=u
u=new O.bu()
u.a=H.b([],t)
u.gB().p(0,new E.fh(s))
s.db=u
u=new O.bu()
u.a=H.b([],t)
u.gB().p(0,new E.fi(s))
s.dx=u
u=H.b([],[O.cB])
s.dy=u
u.push(null)
s.fr=new H.a2([P.o,A.cv])},
bI:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaz(u):a)},
bG:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fg.prototype={
$1:function(a){}}
E.fh.prototype={
$1:function(a){this.a.cx=null}}
E.fi.prototype={
$1:function(a){this.a.cx=null}}
E.cC.prototype={
ba:function(a){this.bJ()},
b9:function(){return this.ba(null)},
bl:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.K()
if(typeof r!=="number")return H.O(r)
u=C.c.bt(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.K()
t=C.c.bt(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.j9(C.h,s.ge0())}},
bJ:function(){if(!this.cx){this.cx=!0
var u=window
C.v.cm(u)
C.v.d4(u,W.jl(new E.fK(this),P.W))}},
dZ:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bl()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.bj(r,!1)
s.y=1000*(r-s.r.a)*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a7()
r=s.db
C.a.sk(r.a,0)
r.a7()
r=s.dx
C.a.sk(r.a,0)
r.a7()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.ah(p.e)}}catch(q){u=H.ab(q)
t=H.iD(q)
P.ju("Error: "+H.e(u))
P.ju("Stack: "+H.e(t))
throw H.c(u)}}}
E.fK.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.dZ()}}}
Z.cK.prototype={}
Z.c1.prototype={
aS:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ab(s)
t=P.G('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.hl.prototype={}
Z.c2.prototype={
dA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aS:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aS(a)},
e9:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ah:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.R(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")}}
Z.aU.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bA(this.c))+"'")+"]"}}
Z.cJ.prototype={
gb6:function(a){var u=this.a,t=(u&$.aq().a)!==0?3:0
if((u&$.bb().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=2
if((u&$.bd().a)!==0)t+=3
if((u&$.bY().a)!==0)t+=3
if((u&$.bZ().a)!==0)t+=4
if((u&$.be().a)!==0)++t
return(u&$.b9().a)!==0?t+4:t},
dg:function(a){var u,t=$.aq(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0)if(u===a)return t
return $.jN()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cJ))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.aq().a)!==0)u.push("Pos")
if((t&$.bb().a)!==0)u.push("Norm")
if((t&$.ba().a)!==0)u.push("Binm")
if((t&$.bc().a)!==0)u.push("Txt2D")
if((t&$.bd().a)!==0)u.push("TxtCube")
if((t&$.bY().a)!==0)u.push("Clr3")
if((t&$.bZ().a)!==0)u.push("Clr4")
if((t&$.be().a)!==0)u.push("Weight")
if((t&$.b9().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.dU.prototype={}
D.bm.prototype={
p:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.U]}]):u).push(b)},
J:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.a
u=(s&&C.a).J(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.b
u=(s&&C.a).J(s,b)||u}return u},
T:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.U()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.ip(u,!0,{func:1,ret:-1,args:[D.U]}),new D.eg(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.U]}])
C.a.F(u,new D.eh(q))}return!0},
aB:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.T(u)}}}}
D.eg.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eh.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.U.prototype={}
D.ex.prototype={}
D.ey.prototype={}
D.D.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.c3.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c3))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cg.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cg))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eH.prototype={
dU:function(a){this.d.p(0,a.a)
return!1},
dQ:function(a){this.d.J(0,a.a)
return!1}}
X.eN.prototype={
b_:function(a,b){this.r=a.a
return!1},
aq:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.bV()
if(typeof u!=="number")return u.bR()
this.r=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
dV:function(a){return!1},
cK:function(a,b,c){return}}
X.bv.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bv))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.eX.prototype={
b_:function(a,b){this.f=a.a
return!1},
aq:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.bV()
if(typeof u!=="number")return u.bR()
this.f=(u&~t)>>>0
return!1},
ap:function(a,b){return!1},
dW:function(a,b){return!1}}
X.fO.prototype={
dT:function(a){return!1},
dR:function(a){return!1},
dS:function(a){return!1}}
X.cI.prototype={
bh:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cg(u,new X.bv(t,a.altKey,a.shiftKey))},
ad:function(a){a.shiftKey},
aR:function(a){a.shiftKey},
a2:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.a4(s-q,r-u)},
ak:function(a){return new V.b3(a.movementX,a.movementY)},
aP:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a4])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.c.Z(r.pageX)
C.c.Z(r.pageY)
p=o.left
C.c.Z(r.pageX)
n.push(new V.a4(q-p,C.c.Z(r.pageY)-o.top))}return n},
a1:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.c3(u,new X.bv(t,a.altKey,a.shiftKey))},
aM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
cF:function(a){this.f=!0},
cr:function(a){this.f=!1},
cz:function(a){if(this.f&&this.aM(a))a.preventDefault()},
cJ:function(a){var u
if(!this.f)return
u=this.bh(a)
this.b.dU(u)},
cH:function(a){var u
if(!this.f)return
u=this.bh(a)
this.b.dQ(u)},
cM:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ad(a)
if(r.x){u=r.a1(a)
t=r.ak(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a1(a)
s=r.a2(a)
if(r.c.b_(u,s))a.preventDefault()},
cQ:function(a){var u,t,s,r=this
r.ad(a)
u=r.a1(a)
if(r.x){t=r.ak(a)
if(r.d.aq(u,t))a.preventDefault()
return}if(r.r)return
s=r.a2(a)
if(r.c.aq(u,s))a.preventDefault()},
cD:function(a){var u,t,s,r=this
if(!r.aM(a)){r.ad(a)
u=r.a1(a)
if(r.x){t=r.ak(a)
if(r.d.aq(u,t))a.preventDefault()
return}if(r.r)return
s=r.a2(a)
if(r.c.aq(u,s))a.preventDefault()}},
cO:function(a){var u,t,s,r=this
r.ad(a)
u=r.a1(a)
if(r.x){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(r.r)return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()},
cB:function(a){var u,t,s,r=this
if(!r.aM(a)){r.ad(a)
u=r.a1(a)
if(r.x){t=r.ak(a)
if(r.d.ap(u,t))a.preventDefault()
return}if(r.r)return
s=r.a2(a)
if(r.c.ap(u,s))a.preventDefault()}},
cS:function(a){var u,t,s,r,q,p=this
p.ad(a)
u=(a&&C.u).gdu(a)
t=C.u.gdv(a)
s=p.Q
if(typeof u!=="number")return u.K()
if(typeof s!=="number")return H.O(s)
if(typeof t!=="number")return t.K()
r=new V.b3(u*s,t*s)
if(p.x){if(p.d.dV(r))a.preventDefault()
return}if(p.r)return
q=p.a2(a)
if(p.c.dW(r,q))a.preventDefault()},
cU:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a1(s.y)
t=s.a2(s.y)
s.d.cK(u,t,r)}},
d0:function(a){var u,t=this
t.a.focus()
t.f=!0
t.aR(a)
u=t.aP(a)
if(t.e.dT(u))a.preventDefault()},
cX:function(a){var u
this.aR(a)
u=this.aP(a)
if(this.e.dR(u))a.preventDefault()},
cZ:function(a){var u
this.aR(a)
u=this.aP(a)
if(this.e.dS(u))a.preventDefault()}}
V.aR.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aR))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.u(u.a,3,0)+", "+V.u(u.b,3,0)+", "+V.u(u.c,3,0)+", "+V.u(u.d,3,0)+"]"}}
V.ef.prototype={}
V.bt.prototype={
bN:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.C])
return t},
K:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aD(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bt))return!1
u=b.a
t=$.B().a
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
h:function(a){return this.C()},
t:function(a){var u,t,s,r,q,p=this,o=[P.C],n=V.i_(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.i_(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.i_(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.i_(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.f(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.f(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.f(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.f(n,1)
q=q+n[1]+", "
if(1>=t)return H.f(m,1)
q=q+m[1]+", "
if(1>=s)return H.f(l,1)
q=q+l[1]+", "
if(1>=r)return H.f(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.f(n,2)
u=u+n[2]+", "
if(2>=t)return H.f(m,2)
u=u+m[2]+", "
if(2>=s)return H.f(l,2)
u=u+l[2]+", "
if(2>=r)return H.f(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.f(n,3)
q=q+n[3]+", "
if(3>=t)return H.f(m,3)
q=q+m[3]+", "
if(3>=s)return H.f(l,3)
q=q+l[3]+", "
if(3>=r)return H.f(k,3)
return u+(q+k[3]+"]")},
C:function(){return this.t("")}}
V.a4.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.aZ.prototype={
P:function(a,b){return new V.aZ(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aZ))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.cr.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cr))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.u(u.a,3,0)+", "+V.u(u.b,3,0)+", "+V.u(u.c,3,0)+", "+V.u(u.d,3,0)+"]"}}
V.ct.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ct))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.u(u.a,3,0)+", "+V.u(u.b,3,0)+", "+V.u(u.c,3,0)+", "+V.u(u.d,3,0)+"]"}}
V.b3.prototype={
aY:function(a){var u,t=this.a
if(typeof t!=="number")return t.K()
u=this.b
if(typeof u!=="number")return u.K()
return Math.sqrt(t*t+u*u)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.O(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.O(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.F.prototype={
aY:function(a){return Math.sqrt(this.N(this))},
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aZ:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.F(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aX:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
aD:function(a){return new V.F(-this.a,-this.b,-this.c)},
a_:function(a,b){if(Math.abs(b-0)<$.B().a)return V.iv()
return new V.F(this.a/b,this.b/b,this.c/b)},
dE:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.c5.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.aw():u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
return J.I(this.a,b.a)},
h:function(a){return"Constant: "+this.a.t("          ")}}
U.eY.prototype={}
U.cu.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.aw():u},
ac:function(a){var u=this.y
if(u!=null)u.T(a)},
sbQ:function(a){var u
a=V.iH(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.D("yaw",u,a)
u.b=!0
this.ac(u)}},
sbF:function(a,b){var u
b=V.iH(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.D("pitch",u,b)
u.b=!0
this.ac(u)}},
sbK:function(a){var u
a=V.iH(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.D("roll",u,a)
u.b=!0
this.ac(u)}},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cu))return!1
u=r.a
t=b.a
s=$.B().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotator: ["+V.u(u.a,3,0)+", "+V.u(u.b,3,0)+", "+V.u(u.c,3,0)+"], ["+V.u(u.d,3,0)+", "+V.u(u.e,3,0)+", "+V.u(u.f,3,0)+"]"}}
M.c9.prototype={
a9:function(a){var u=this.y
if(u!=null)u.T(a)},
c7:function(){return this.a9(null)},
ct:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga8(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ex()
u.b=!0
this.a9(u)},
cv:function(a,b){var u,t
for(u=b.gG(b),t=this.ga8();u.n();)u.gv(u).gB().J(0,t)
u=new D.ey()
u.b=!0
this.a9(u)},
gB:function(){var u=this.y
return u==null?this.y=D.aw():u},
ah:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.bI(a1.d)
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
if(typeof s!=="number")return H.O(s)
o=C.c.Z(p*s)
p=q.b
if(typeof r!=="number")return H.O(r)
n=C.c.Z(p*r)
p=C.c.Z(q.c*s)
a2.c=p
q=C.c.Z(q.d*r)
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
i=V.aD(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.bH(i)
t=$.j_
if(t==null){t=$.j1
if(t==null)t=$.j1=new V.aZ(0,0,0)
q=$.jd
if(q==null)q=$.jd=new V.F(0,1,0)
p=$.jc
if(p==null)p=$.jc=new V.F(0,0,-1)
h=p.a_(0,Math.sqrt(p.N(p)))
q=q.aX(h)
g=q.a_(0,Math.sqrt(q.N(q)))
f=h.aX(g)
e=new V.F(t.a,t.b,t.c)
d=g.aD(0).N(e)
c=f.aD(0).N(e)
b=h.aD(0).N(e)
t=V.aD(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.j_=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.K(0,a)}a2.db.bH(a)
for(u=a1.e.a,u=new J.S(u,u.length);u.n();)u.d.bP(0,a2)
for(u=a1.e.a,u=new J.S(u,u.length);u.n();)u.d.ah(a2)
a1.b.toString
a2.cy.b0()
a2.db.b0()
a1.c.toString
a2.bG()}}
A.c_.prototype={}
A.dM.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
dz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.e6.prototype={}
A.cv.prototype={
c4:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bi:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.G("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
d7:function(){var u,t,s,r=this,q=H.b([],[A.c_]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.O(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c_(p,t.name,s))}r.x=new A.dM(q)},
d9:function(){var u,t,s,r=this,q=H.b([],[A.cG]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.O(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.dt(t.type,t.size,t.name,s))}r.y=new A.h1(q)},
ab:function(a,b,c){var u=this.a
if(a===1)return new A.fU(u,b,c)
else return A.iu(u,this.r,b,a,c)},
cj:function(a,b,c){var u=this.a
if(a===1)return new A.h4(u,b,c)
else return A.iu(u,this.r,b,a,c)},
ck:function(a,b,c){var u=this.a
if(a===1)return new A.h5(u,b,c)
else return A.iu(u,this.r,b,a,c)},
aw:function(a,b){return new P.cT(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
dt:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ab(b,c,d)
case 5121:return u.ab(b,c,d)
case 5122:return u.ab(b,c,d)
case 5123:return u.ab(b,c,d)
case 5124:return u.ab(b,c,d)
case 5125:return u.ab(b,c,d)
case 5126:return new A.bE(u.a,c,d)
case 35664:return new A.fW(u.a,c,d)
case 35665:return new A.fY(u.a,c,d)
case 35666:return new A.h_(u.a,c,d)
case 35667:return new A.fX(u.a,c,d)
case 35668:return new A.fZ(u.a,c,d)
case 35669:return new A.h0(u.a,c,d)
case 35674:return new A.h2(u.a,c,d)
case 35675:return new A.h3(u.a,c,d)
case 35676:return new A.bF(u.a,c,d)
case 35678:return u.cj(b,c,d)
case 35680:return u.ck(b,c,d)
case 35670:throw H.c(u.aw("BOOL",c))
case 35671:throw H.c(u.aw("BOOL_VEC2",c))
case 35672:throw H.c(u.aw("BOOL_VEC3",c))
case 35673:throw H.c(u.aw("BOOL_VEC4",c))
default:throw H.c(P.G("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.cG.prototype={}
A.h1.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.C()},
C:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.fU.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.fX.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.fZ.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.h0.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.fV.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.bE.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.fW.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.fY.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.h_.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.h2.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.h3.prototype={
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.bF.prototype={
b4:function(a){var u=new Float32Array(H.iz(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.h4.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.h5.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.hV.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.aZ(s.b,b).aZ(s.d.aZ(s.c,b),c)
s=new V.aZ(r.a,r.b,r.c)
if(!J.I(a.f,s)){a.f=s
s=a.a
if(s!=null)s.V()}s=r.a_(0,Math.sqrt(r.N(r)))
if(!J.I(a.z,s)){a.z=s
s=a.a
if(s!=null)s.V()}s=1-b
u=1-c
u=new V.cr(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.I(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.V()}}}
F.aT.prototype={
cd:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.iv()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.dE())return
return s.a_(0,Math.sqrt(s.N(s)))},
ce:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.F(r.a,r.b,r.c)
s=r.a_(0,Math.sqrt(r.N(r)))
r=t.P(0,q)
r=new V.F(r.a,r.b,r.c)
r=s.aX(r.a_(0,Math.sqrt(r.N(r))))
return r.a_(0,Math.sqrt(r.N(r)))},
aT:function(){var u,t=this
if(t.d!=null)return!0
u=t.cd()
if(u==null){u=t.ce()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.W(J.R(s.e),0)+", "+C.b.W(J.R(t.b.e),0)+", "+C.b.W(J.R(t.c.e),0)+" {"
s=t.d
u=(s!=null?u+(s.h(0)+", "):u+"-, ")+"-}"
return u},
C:function(){return this.t("")}}
F.bp.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.W(J.R(u.e),0)+", "+C.b.W(J.R(this.b.e),0)},
C:function(){return this.t("")}}
F.by.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.W(J.R(u.e),0)},
C:function(){return this.t("")}}
F.fo.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.aw():u},
dH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.I()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){r=g[s]
h.a.p(0,r.dr())}h.a.I()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.I()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.p(0,n)
o=new F.by()
if(n.a==null)H.H(P.G("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.T(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.I()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.I()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.p(0,l)
p.a.p(0,k)
p=new F.bp()
o=l.a
if(o==null)H.H(P.G("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.H(P.G("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.T(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.t)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.I()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.I()
p=p.e
if(typeof p!=="number")return p.H()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.I()
o=o.e
if(typeof o!=="number")return o.H()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.p(0,l)
o.a.p(0,k)
o.a.p(0,i)
F.ca(l,k,i)}g=h.e
if(g!=null)g.aB(0)},
dk:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aq()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bb().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.bZ().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.b9().a)!==0)++s
r=a4.gb6(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.C])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.c1])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.dg(m)
k=l.gb6(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.c1(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].dG(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.iz(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c2(new Z.cK(a1,d),o)
c.b=H.b([],[Z.aU])
if(a0.b.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.I()
b.push(t.e)}a=Z.iw(u,34963,b)
c.b.push(new Z.aU(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.I()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.I()
b.push(t.e)}a=Z.iw(u,34963,b)
c.b.push(new Z.aU(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.I()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.I()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.I()
b.push(t.e)}a=Z.iw(u,34963,b)
c.b.push(new Z.aU(4,b.length,a))}return c},
h:function(a){var u=this,t="   ",s=H.b([],[P.o])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.t(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.t(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.t(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.t(t))}return C.a.l(s,"\n")},
V:function(){var u=this.e
if(u!=null)u.T(null)}}
F.fp.prototype={
de:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aT])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.f(c,s)
m=c[s];++s
if(s>=n)return H.f(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.f(c,k)
j=c[k]
if(t<0||t>=n)return H.f(c,t)
i=c[t]
n=u.a
if(p){n.p(0,m)
u.a.p(0,l)
u.a.p(0,j)
h.push(F.ca(m,l,j))
u.a.p(0,m)
u.a.p(0,j)
u.a.p(0,i)
h.push(F.ca(m,j,i))}else{n.p(0,l)
u.a.p(0,j)
u.a.p(0,i)
h.push(F.ca(l,j,i))
u.a.p(0,l)
u.a.p(0,i)
u.a.p(0,m)
h.push(F.ca(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
aU:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].aT())s=!1
return s},
h:function(a){return this.C()},
t:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(a))
return C.a.l(r,"\n")},
C:function(){return this.t("")}}
F.fq.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.C()},
t:function(a){var u,t,s=H.b([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].t(a+(""+u+". ")))}return C.a.l(s,"\n")},
C:function(){return this.t("")}}
F.fr.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.C()},
t:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(a))
return C.a.l(r,"\n")},
C:function(){return this.t("")}}
F.bG.prototype={
aW:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jf(u.cx,r,o,t,s,q,p,a,n)},
dr:function(){return this.aW(null)},
dG:function(a){var u,t,s=this
if(a.q(0,$.aq())){u=s.f
t=[P.C]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bb())){u=s.r
t=[P.C]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.ba())){u=H.b([0,0,1],[P.C])
return u}else if(a.q(0,$.bc())){u=s.y
t=[P.C]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bd())){u=s.z
t=[P.C]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bY())){u=s.Q
t=[P.C]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bZ())){u=s.Q
t=[P.C]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.be()))return H.b([s.ch],[P.C])
else if(a.q(0,$.b9())){u=s.cx
t=[P.C]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.C])},
aT:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.iv()
t.d.F(0,new F.hj(s))
s=s.a
t.r=s.a_(0,Math.sqrt(s.N(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.aB(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.C()},
t:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.W(J.R(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.u(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
C:function(){return this.t("")}}
F.hj.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.hd.prototype={
I:function(){},
p:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.G("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
bq:function(a,b){var u=null,t=F.jf(u,u,a,u,u,b,u,u,0)
this.p(0,t)
return t},
gk:function(a){return this.c.length},
aU:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].aT()
return!0},
h:function(a){return this.C()},
t:function(a){var u,t,s,r
this.I()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)u.push(t[r].t(a))
return C.a.l(u,"\n")},
C:function(){return this.t("")}}
F.he.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var u=this
C.a.F(u.b,b)
C.a.F(u.c,new F.hf(u,b))
C.a.F(u.d,new F.hg(u,b))},
h:function(a){return this.C()},
C:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(""))
return C.a.l(r,"\n")}}
F.hf.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)}}
F.hg.prototype={
$1:function(a){var u=this.a
if(!J.I(a.a,u)&&!J.I(a.b,u))this.b.$1(a)}}
F.hh.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.C()},
C:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(""))
return C.a.l(r,"\n")}}
F.hi.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.C()},
C:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].t(""))
return C.a.l(r,"\n")}}
O.e5.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.aw():u},
aH:function(a){var u=this.r
if(u!=null)u.T(a)}}
O.cB.prototype={}
X.id.prototype={}
X.ep.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.aw():u}}
X.cp.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.aw():u},
aa:function(a){var u=this.f
if(u!=null)u.T(a)},
ca:function(){return this.aa(null)},
sao:function(a){var u,t,s=this
if(!J.I(s.b,a)){u=s.b
if(u!=null)u.gB().J(0,s.gbb())
t=s.b
s.b=a
if(a!=null)a.gB().p(0,s.gbb())
u=new D.D("mover",t,s.b)
u.b=!0
s.aa(u)}}}
X.fG.prototype={}
V.c4.prototype={
as:function(a){this.b=new P.eu(C.I)
this.c=null
this.d=H.b([],[[P.aX,W.X]])},
A:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.X]))
u=a.split("\n")
for(l=u.length,t=[W.X],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.ci(q,0,q.length)
n=o==null?q:o
C.H.bW(p,H.iG(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaz(m.d).push(p)}},
bE:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.aX,W.X]])
u=C.a.l(b,"\n")
t=r.c
if(t==null)t=r.c=r.ax()
for(t.toString,s=new H.j(u),s=new P.b5(t.b1(new H.aB(s,s.gk(s))).a());s.n();)r.aA(s.gv(s))}}
V.e3.prototype={
aA:function(a){var u=this
switch(a.a){case"Class":u.A(a.b,"#551")
break
case"Comment":u.A(a.b,"#777")
break
case"Id":u.A(a.b,"#111")
break
case"Num":u.A(a.b,"#191")
break
case"Reserved":u.A(a.b,"#119")
break
case"String":u.A(a.b,"#171")
break
case"Symbol":u.A(a.b,"#616")
break
case"Type":u.A(a.b,"#B11")
break
case"Whitespace":u.A(a.b,"#111")
break}},
ax:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.fN()
a1.d=a1.i(0,r)
u=a1.i(0,r).l(0,q)
t=K.n(new H.j("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=a1.i(0,q).l(0,q)
u=K.n(new H.j("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=a1.i(0,r).l(0,p)
t=K.z("0","9")
u.a.push(t)
t=a1.i(0,p).l(0,p)
u=K.z("0","9")
t.a.push(u)
u=a1.i(0,p).l(0,o)
t=K.n(new H.j("."))
u.a.push(t)
t=a1.i(0,o).l(0,n)
u=K.z("0","9")
t.a.push(u)
u=a1.i(0,n).l(0,n)
t=K.z("0","9")
u.a.push(t)
t=a1.i(0,r).l(0,m)
u=K.n(new H.j(l))
t.a.push(u)
u=a1.i(0,m).l(0,m)
t=K.n(new H.j(l))
u.a.push(t)
t=a1.i(0,r).l(0,k)
u=K.n(new H.j('"'))
t.a.push(u)
u=a1.i(0,k).l(0,j)
t=K.n(new H.j('"'))
u.a.push(t)
t=a1.i(0,k).l(0,i)
u=K.n(new H.j("\\"))
t.a.push(u)
u=a1.i(0,i).l(0,k)
t=K.n(new H.j('"'))
u.a.push(t)
a1.i(0,k).l(0,k).a.push(new K.ac())
t=a1.i(0,r).l(0,h)
u=K.n(new H.j("'"))
t.a.push(u)
u=a1.i(0,h).l(0,g)
t=K.n(new H.j("'"))
u.a.push(t)
t=a1.i(0,h).l(0,f)
u=K.n(new H.j("\\"))
t.a.push(u)
u=a1.i(0,f).l(0,h)
t=K.n(new H.j("'"))
u.a.push(t)
a1.i(0,h).l(0,h).a.push(new K.ac())
t=a1.i(0,r).l(0,e)
u=K.n(new H.j("/"))
t.a.push(u)
u=a1.i(0,e).l(0,d)
t=K.n(new H.j("/"))
u.a.push(t)
t=a1.i(0,d).l(0,c)
u=K.n(new H.j("\n"))
t.a.push(u)
u=a1.i(0,d).l(0,d)
t=new K.P()
s=[K.aC]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.j("\n"))
t.a.push(u)
u=a1.i(0,e).l(0,b)
t=K.n(new H.j("*"))
u.a.push(t)
t=a1.i(0,b).l(0,a)
u=K.n(new H.j("*"))
t.a.push(u)
u=a1.i(0,a).l(0,b)
t=new K.P()
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.j("*"))
t.a.push(u)
u=a1.i(0,a).l(0,c)
t=K.n(new H.j("/"))
u.a.push(t)
t=a1.i(0,r).l(0,a0)
u=K.n(new H.j(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).l(0,a0)
t=K.n(new H.j(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.D("Num")
t=a1.i(0,n)
t.d=t.a.D("Num")
t=a1.i(0,m)
t.d=t.a.D("Symbol")
t=a1.i(0,j)
t.d=t.a.D("String")
t=a1.i(0,g)
t.d=t.a.D("String")
t=a1.i(0,c)
t.d=t.a.D(d)
t=a1.i(0,a0)
t.d=t.a.D(a0)
t=a1.i(0,q)
t=t.d=t.a.D(q)
u=[P.o]
t.a4(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a4(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a4(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.er.prototype={
aA:function(a){var u=this
switch(a.a){case"Builtin":u.A(a.b,"#411")
break
case"Comment":u.A(a.b,"#777")
break
case"Id":u.A(a.b,"#111")
break
case"Num":u.A(a.b,"#191")
break
case"Preprocess":u.A(a.b,"#737")
break
case"Reserved":u.A(a.b,"#119")
break
case"Symbol":u.A(a.b,"#611")
break
case"Type":u.A(a.b,"#171")
break
case"Whitespace":u.A(a.b,"#111")
break}},
ax:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.fN()
e.d=e.i(0,r)
u=e.i(0,r).l(0,q)
t=K.n(new H.j("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=e.i(0,q).l(0,q)
u=K.n(new H.j("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=e.i(0,r).l(0,p)
t=K.z("0","9")
u.a.push(t)
t=e.i(0,p).l(0,p)
u=K.z("0","9")
t.a.push(u)
u=e.i(0,p).l(0,o)
t=K.n(new H.j("."))
u.a.push(t)
t=e.i(0,o).l(0,n)
u=K.z("0","9")
t.a.push(u)
u=e.i(0,n).l(0,n)
t=K.z("0","9")
u.a.push(t)
t=e.i(0,r).l(0,m)
u=K.n(new H.j(l))
t.a.push(u)
u=e.i(0,m).l(0,m)
t=K.n(new H.j(l))
u.a.push(t)
t=e.i(0,r).l(0,k)
u=K.n(new H.j("/"))
t.a.push(u)
u=e.i(0,k).l(0,j)
t=K.n(new H.j("/"))
u.a.push(t)
e.i(0,k).l(0,m).a.push(new K.ac())
t=e.i(0,j).l(0,i)
u=K.n(new H.j("\n"))
t.a.push(u)
u=e.i(0,j).l(0,j)
t=new K.P()
s=[K.aC]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.j("\n"))
t.a.push(u)
u=e.i(0,r).l(0,h)
t=K.n(new H.j("#"))
u.a.push(t)
t=e.i(0,h).l(0,h)
u=new K.P()
u.a=H.b([],s)
t.a.push(u)
t=K.n(new H.j("\n"))
u.a.push(t)
t=e.i(0,h).l(0,g)
u=K.n(new H.j("\n"))
t.a.push(u)
u=e.i(0,r).l(0,f)
t=K.n(new H.j(" \n\t"))
u.a.push(t)
t=e.i(0,f).l(0,f)
u=K.n(new H.j(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.D("Num")
u=e.i(0,n)
u.d=u.a.D("Num")
u=e.i(0,m)
u.d=u.a.D("Symbol")
u=e.i(0,i)
u.d=u.a.D(j)
u=e.i(0,g)
u.d=u.a.D(h)
u=e.i(0,f)
u.d=u.a.D(f)
u=e.i(0,q)
u=u.d=u.a.D(q)
t=[P.o]
u.a4(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a4(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a4(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.es.prototype={
aA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.A(a.b,"#911")
u.A("=",t)
break
case"Id":u.A(a.b,t)
break
case"Other":u.A(a.b,t)
break
case"Reserved":u.A(a.b,"#119")
break
case"String":u.A(a.b,"#171")
break
case"Symbol":u.A(a.b,"#616")
break}},
ax:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.fN()
l.d=l.i(0,s)
u=l.i(0,s).l(0,r)
t=K.n(new H.j("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=l.i(0,r).l(0,r)
u=K.n(new H.j("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=l.i(0,r).l(0,q)
t=K.n(new H.j("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).l(0,p)
t=K.n(new H.j("</\\-!>="))
u.a.push(t)
t=l.i(0,p).l(0,p)
u=K.n(new H.j("</\\-!>="))
t.a.push(u)
u=l.i(0,s).l(0,o)
t=K.n(new H.j('"'))
u.a.push(t)
t=l.i(0,o).l(0,n)
u=K.n(new H.j('"'))
t.a.push(u)
u=l.i(0,o).l(0,"EscStr")
t=K.n(new H.j("\\"))
u.a.push(t)
t=l.i(0,"EscStr").l(0,o)
u=K.n(new H.j('"'))
t.a.push(u)
l.i(0,o).l(0,o).a.push(new K.ac())
l.i(0,s).l(0,m).a.push(new K.ac())
u=l.i(0,m).l(0,m)
t=new K.P()
t.a=H.b([],[K.aC])
u.a.push(t)
u=K.n(new H.j('</\\-!>=_"'))
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.D("Symbol")
u=l.i(0,n)
u.d=u.a.D("String")
u=l.i(0,r)
t=u.a.D(r)
u.d=t
t.a4(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.i(0,q)
t.d=t.a.D(q)
t=l.i(0,m)
t.d=t.a.D(m)
return l}}
V.fb.prototype={
bE:function(a,b){this.d=H.b([],[[P.aX,W.X]])
this.A(C.a.l(b,"\n"),"#111")},
aA:function(a){},
ax:function(){return}}
V.fs.prototype={
c5:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.J(q,"scroll",new V.fu(o),!1)},
am:function(a,b){var u,t,s,r,q
a=C.d.dl(a,0,4)
u=P.iy(C.i,b,C.f,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.ia()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
M:function(a){var u,t,s,r,q,p,o,n
this.d8()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.dF(a),s.toString,r=new H.j(r),r=new P.b5(s.b1(new H.aB(r,r.gk(r))).a());r.n();){s=r.gv(r)
switch(s.a){case"Bold":q=u.createElement("div")
q.className="boldPar"
q.textContent=s.b
t.appendChild(q)
break
case"Italic":q=u.createElement("div")
q.className="italicPar"
q.textContent=s.b
t.appendChild(q)
break
case"Code":q=u.createElement("div")
q.className="codePar"
q.textContent=s.b
t.appendChild(q)
break
case"Link":s=s.b
if(H.jx(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.iy(C.i,s,C.f,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
bS:function(a){var u,t,s,r=new V.e3("dart")
r.as("dart")
u=new V.er("glsl")
u.as("glsl")
t=new V.es("html")
t.as("html")
s=C.a.dC(H.b([r,u,t],[V.c4]),new V.fv(a))
if(s!=null)return s
r=new V.fb("plain")
r.as("plain")
return r},
bp:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.A])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(C.b.aE(s,"+")){b0[t]=C.b.aF(s,1)
a6.push(1)
u=!0}else if(C.b.aE(s,"-")){b0[t]=C.b.aF(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.bS(a8)
r.bE(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.iy(C.i,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.ia()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.f(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.t)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.t)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gG(s);a2.n();)d.appendChild(a2.gv(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
d8:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.fN()
u.d=u.i(0,q)
t=u.i(0,q).l(0,p)
s=K.n(new H.j("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).l(0,p)
s=new K.P()
r=[K.aC]
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.j("*"))
s.a.push(t)
t=u.i(0,p).l(0,"BoldEnd")
s=K.n(new H.j("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,o)
s=K.n(new H.j("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).l(0,o)
s=new K.P()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.j("_"))
s.a.push(t)
t=u.i(0,o).l(0,n)
s=K.n(new H.j("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,m)
s=K.n(new H.j("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).l(0,m)
s=new K.P()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.j("`"))
s.a.push(t)
t=u.i(0,m).l(0,"CodeEnd")
s=K.n(new H.j("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,l)
s=K.n(new H.j("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).l(0,k)
s=K.n(new H.j("|"))
t.a.push(s)
s=u.i(0,l).l(0,j)
t=K.n(new H.j("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).l(0,l)
t=new K.P()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.j("|]"))
t.a.push(s)
s=u.i(0,k).l(0,j)
t=K.n(new H.j("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).l(0,k)
t=new K.P()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.j("|]"))
t.a.push(s)
u.i(0,q).l(0,i).a.push(new K.ac())
s=u.i(0,i).l(0,i)
t=new K.P()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.j("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.D(p)
s=u.i(0,n)
s.d=s.a.D(o)
s=u.i(0,"CodeEnd")
s.d=s.a.D(m)
s=u.i(0,j)
s.d=s.a.D("Link")
s=u.i(0,i)
s.d=s.a.D(i)
this.b=u}}
V.fu.prototype={
$1:function(a){P.j9(C.h,new V.ft(this.a))}}
V.ft.prototype={
$0:function(){var u=C.c.Z(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.fv.prototype={
$1:function(a){return a.a===this.a}};(function aliases(){var u=J.a.prototype
u.bZ=u.h
u=J.cf.prototype
u.c0=u.h
u=P.l.prototype
u.c_=u.aC
u=W.E.prototype
u.aG=u.S
u=W.de.prototype
u.c1=u.a0
u=K.cd.prototype
u.bY=u.a3
u.b7=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"kO","kc",14)
t(P,"kY","kB",5)
t(P,"kZ","kC",5)
t(P,"l_","kD",5)
s(P,"jn","kW",8)
r(W,"la",4,null,["$4"],["kG"],11,0)
r(W,"lb",4,null,["$4"],["kH"],11,0)
var l
q(l=E.av.prototype,"gbA",0,0,null,["$1","$0"],["bB","dO"],0,0)
q(l,"gbC",0,0,null,["$1","$0"],["bD","dP"],0,0)
q(l,"gby",0,0,null,["$1","$0"],["bz","dN"],0,0)
q(l,"gbw",0,0,null,["$1","$0"],["bx","dK"],0,0)
p(l,"gdI","dJ",2)
p(l,"gdL","dM",2)
q(l=E.cC.prototype,"gb8",0,0,null,["$1","$0"],["ba","b9"],0,0)
o(l,"ge0","bJ",8)
n(l=X.cI.prototype,"gcE","cF",3)
n(l,"gcq","cr",3)
n(l,"gcw","cz",1)
n(l,"gcI","cJ",9)
n(l,"gcG","cH",9)
n(l,"gcL","cM",1)
n(l,"gcP","cQ",1)
n(l,"gcC","cD",1)
n(l,"gcN","cO",1)
n(l,"gcA","cB",1)
n(l,"gcR","cS",13)
n(l,"gcT","cU",3)
n(l,"gd_","d0",4)
n(l,"gcW","cX",4)
n(l,"gcY","cZ",4)
m(V.b3.prototype,"gk","aY",10)
m(V.F.prototype,"gk","aY",10)
q(l=M.c9.prototype,"ga8",0,0,null,["$1","$0"],["a9","c7"],0,0)
p(l,"gcs","ct",2)
p(l,"gcu","cv",2)
q(X.cp.prototype,"gbb",0,0,null,["$1","$0"],["aa","ca"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.im,J.a,J.S,P.d1,P.l,H.aB,P.eA,H.cb,H.h8,H.fS,P.aS,H.bh,H.dj,P.L,H.eJ,H.eK,H.eE,P.hQ,P.b4,P.b5,P.cL,P.cz,P.fC,P.hU,P.hH,P.hB,P.d0,P.p,P.dV,P.ev,P.hS,P.aL,P.bj,P.W,P.bk,P.f9,P.cx,P.cT,P.eo,P.eq,P.aX,P.br,P.aE,P.o,P.aG,W.e_,W.bJ,W.x,W.cn,W.de,W.hM,W.cc,W.ah,W.hG,W.du,P.hC,K.ac,K.cd,K.aC,K.fe,K.fn,L.cy,L.cD,L.cE,L.fM,O.dW,O.bu,E.dR,E.av,E.aP,E.aY,E.hv,E.ff,E.cC,Z.cK,Z.hl,Z.c2,Z.aU,Z.cJ,D.dU,D.bm,D.U,X.c3,X.cg,X.eH,X.eN,X.bv,X.eX,X.fO,X.cI,V.aR,V.ef,V.bt,V.a4,V.aZ,V.cr,V.ct,V.b3,V.F,M.c9,A.c_,A.dM,A.cG,A.h1,F.aT,F.bp,F.by,F.fo,F.fp,F.fq,F.fr,F.bG,F.hd,F.he,F.hh,F.hi,O.cB,X.id,X.fG,X.cp,V.c4,V.fs])
s(J.a,[J.eB,J.eD,J.cf,J.ax,J.bo,J.ay,H.bx,W.d,W.dJ,W.c0,W.a1,W.w,W.cN,W.T,W.e4,W.e7,W.cP,W.c8,W.cR,W.e9,W.h,W.cU,W.af,W.et,W.cX,W.eM,W.eR,W.d2,W.d3,W.ag,W.d4,W.d7,W.ai,W.db,W.dd,W.ak,W.df,W.al,W.dk,W.a6,W.dn,W.fL,W.an,W.dq,W.fQ,W.ha,W.dv,W.dx,W.dz,W.dB,W.dD,P.aA,P.cZ,P.aF,P.d9,P.fd,P.dl,P.aH,P.ds,P.dN,P.cM,P.dh])
s(J.cf,[J.fa,J.b2,J.az])
t(J.il,J.ax)
s(J.bo,[J.ce,J.eC])
t(P.eL,P.d1)
s(P.eL,[H.cH,W.hs,W.N,P.ek])
t(H.j,H.cH)
s(P.l,[H.m,H.bs,H.bH,P.ez])
s(H.m,[H.ch,H.aW])
t(H.ec,H.bs)
s(P.eA,[H.ci,H.hm])
t(H.eQ,H.ch)
s(P.aS,[H.f6,H.eG,H.h7,H.dT,H.fl,P.co,P.a_,P.h9,P.h6,P.bC,P.dX,P.e2])
s(H.bh,[H.i8,H.fH,H.eF,H.i2,H.i3,H.i4,P.ho,P.hn,P.hp,P.hq,P.hR,P.hX,P.hE,P.hF,P.eP,P.ea,P.eb,W.ed,W.eT,W.eV,W.fk,W.fB,W.hx,W.f5,W.f4,W.hI,W.hJ,W.hP,W.hT,P.hY,P.el,P.em,P.dP,E.fg,E.fh,E.fi,E.fK,D.eg,D.eh,F.hV,F.hj,F.hf,F.hg,V.fu,V.ft,V.fv])
s(H.fH,[H.fz,H.bf])
t(P.eO,P.L)
s(P.eO,[H.a2,W.hr])
t(H.cj,H.bx)
s(H.cj,[H.bK,H.bM])
t(H.bL,H.bK)
t(H.bw,H.bL)
t(H.bN,H.bM)
t(H.ck,H.bN)
s(H.ck,[H.eZ,H.f_,H.f0,H.f1,H.f2,H.cl,H.f3])
t(P.hN,P.ez)
t(P.hD,P.hU)
t(P.hA,P.hH)
t(P.dY,P.fC)
t(P.ee,P.dV)
s(P.dY,[P.eu,P.hc])
t(P.hb,P.ee)
s(P.W,[P.C,P.A])
s(P.a_,[P.b0,P.ew])
s(W.d,[W.v,W.ej,W.aj,W.bO,W.am,W.a7,W.bQ,W.hk,W.bI,P.dQ,P.aN])
s(W.v,[W.E,W.at])
s(W.E,[W.k,P.i])
s(W.k,[W.dK,W.dL,W.aO,W.aQ,W.X,W.en,W.fm,W.cA,W.fE,W.fF,W.bD])
t(W.dZ,W.a1)
t(W.bi,W.cN)
s(W.T,[W.e0,W.e1])
t(W.cQ,W.cP)
t(W.c7,W.cQ)
t(W.cS,W.cR)
t(W.e8,W.cS)
t(W.ae,W.c0)
t(W.cV,W.cU)
t(W.ei,W.cV)
t(W.cY,W.cX)
t(W.bn,W.cY)
t(W.aI,W.h)
s(W.aI,[W.aV,W.a3,W.b1])
t(W.eS,W.d2)
t(W.eU,W.d3)
t(W.d5,W.d4)
t(W.eW,W.d5)
t(W.d8,W.d7)
t(W.cm,W.d8)
t(W.dc,W.db)
t(W.fc,W.dc)
t(W.fj,W.dd)
t(W.bP,W.bO)
t(W.fw,W.bP)
t(W.dg,W.df)
t(W.fx,W.dg)
t(W.fA,W.dk)
t(W.dp,W.dn)
t(W.fI,W.dp)
t(W.bR,W.bQ)
t(W.fJ,W.bR)
t(W.dr,W.dq)
t(W.fP,W.dr)
t(W.aJ,W.a3)
t(W.dw,W.dv)
t(W.ht,W.dw)
t(W.cO,W.c8)
t(W.dy,W.dx)
t(W.hy,W.dy)
t(W.dA,W.dz)
t(W.d6,W.dA)
t(W.dC,W.dB)
t(W.hK,W.dC)
t(W.dE,W.dD)
t(W.hL,W.dE)
t(W.hu,W.hr)
t(W.hw,P.cz)
t(W.hO,W.de)
t(P.Y,P.hC)
t(P.d_,P.cZ)
t(P.eI,P.d_)
t(P.da,P.d9)
t(P.f7,P.da)
t(P.bB,P.i)
t(P.dm,P.dl)
t(P.fD,P.dm)
t(P.dt,P.ds)
t(P.fR,P.dt)
t(P.dO,P.cM)
t(P.f8,P.aN)
t(P.di,P.dh)
t(P.fy,P.di)
s(K.cd,[K.P,L.cF])
s(E.dR,[Z.c1,A.cv])
s(D.U,[D.ex,D.ey,D.D])
t(U.eY,D.dU)
s(U.eY,[U.c5,U.cu])
t(A.e6,A.cv)
s(A.cG,[A.fU,A.fX,A.fZ,A.h0,A.fV,A.bE,A.fW,A.fY,A.h_,A.h2,A.h3,A.bF,A.h4,A.h5])
t(O.e5,O.cB)
t(X.ep,X.fG)
s(V.c4,[V.e3,V.er,V.es,V.fb])
u(H.cH,H.h8)
u(H.bK,P.p)
u(H.bL,H.cb)
u(H.bM,P.p)
u(H.bN,H.cb)
u(P.d1,P.p)
u(W.cN,W.e_)
u(W.cP,P.p)
u(W.cQ,W.x)
u(W.cR,P.p)
u(W.cS,W.x)
u(W.cU,P.p)
u(W.cV,W.x)
u(W.cX,P.p)
u(W.cY,W.x)
u(W.d2,P.L)
u(W.d3,P.L)
u(W.d4,P.p)
u(W.d5,W.x)
u(W.d7,P.p)
u(W.d8,W.x)
u(W.db,P.p)
u(W.dc,W.x)
u(W.dd,P.L)
u(W.bO,P.p)
u(W.bP,W.x)
u(W.df,P.p)
u(W.dg,W.x)
u(W.dk,P.L)
u(W.dn,P.p)
u(W.dp,W.x)
u(W.bQ,P.p)
u(W.bR,W.x)
u(W.dq,P.p)
u(W.dr,W.x)
u(W.dv,P.p)
u(W.dw,W.x)
u(W.dx,P.p)
u(W.dy,W.x)
u(W.dz,P.p)
u(W.dA,W.x)
u(W.dB,P.p)
u(W.dC,W.x)
u(W.dD,P.p)
u(W.dE,W.x)
u(P.cZ,P.p)
u(P.d_,W.x)
u(P.d9,P.p)
u(P.da,W.x)
u(P.dl,P.p)
u(P.dm,W.x)
u(P.ds,P.p)
u(P.dt,W.x)
u(P.cM,P.L)
u(P.dh,P.p)
u(P.di,W.x)})()
var v={mangledGlobalNames:{A:"int",C:"double",W:"num",o:"String",aL:"bool",aE:"Null",aX:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.U]},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[P.A,[P.l,E.av]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aE,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.C},{func:1,ret:P.aL,args:[W.E,P.o,P.o,W.bJ]},{func:1,ret:P.aE,args:[,]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.A,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.aO.prototype
C.G=W.aQ.prototype
C.H=W.X.prototype
C.J=J.a.prototype
C.a=J.ax.prototype
C.d=J.ce.prototype
C.c=J.bo.prototype
C.b=J.ay.prototype
C.K=J.az.prototype
C.r=J.fa.prototype
C.t=W.cA.prototype
C.l=J.b2.prototype
C.u=W.aJ.prototype
C.v=W.bI.prototype
C.w=new E.aP("Browser.chrome")
C.n=new E.aP("Browser.firefox")
C.o=new E.aP("Browser.edge")
C.x=new E.aP("Browser.other")
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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

C.E=new P.f9()
C.f=new P.hb()
C.F=new P.hc()
C.e=new P.hD()
C.h=new P.bk(0)
C.I=new P.ev("element",!1,!1,!1)
C.L=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.M=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.N=H.b(u([]),[P.o])
C.i=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.O=new E.aY("OperatingSystem.windows")
C.P=new E.aY("OperatingSystem.mac")
C.Q=new E.aY("OperatingSystem.linux")
C.R=new E.aY("OperatingSystem.other")
C.S=new P.b4(null,2)})();(function staticFields(){$.a0=0
$.bg=null
$.iL=null
$.jr=null
$.jm=null
$.jv=null
$.hZ=null
$.i5=null
$.iE=null
$.b6=null
$.bT=null
$.bU=null
$.iA=!1
$.a9=C.e
$.Q=[]
$.ad=null
$.ig=null
$.iR=null
$.iQ=null
$.cW=P.iU(P.o,P.eq)
$.iS=null
$.iX=null
$.j0=null
$.j1=null
$.j4=null
$.je=null
$.jd=null
$.jc=null
$.j_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ls","jA",function(){return H.jp("_$dart_dartClosure")})
u($,"lt","iI",function(){return H.jp("_$dart_js")})
u($,"lu","jB",function(){return H.a8(H.fT({
toString:function(){return"$receiver$"}}))})
u($,"lv","jC",function(){return H.a8(H.fT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lw","jD",function(){return H.a8(H.fT(null))})
u($,"lx","jE",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lA","jH",function(){return H.a8(H.fT(void 0))})
u($,"lB","jI",function(){return H.a8(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lz","jG",function(){return H.a8(H.ja(null))})
u($,"ly","jF",function(){return H.a8(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lD","jK",function(){return H.a8(H.ja(void 0))})
u($,"lC","jJ",function(){return H.a8(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lQ","iJ",function(){return P.kA()})
u($,"lT","jP",function(){return P.kr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"lR","jO",function(){return P.iV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"lK","jN",function(){return Z.V(0)})
u($,"lE","jL",function(){return Z.V(511)})
u($,"lM","aq",function(){return Z.V(1)})
u($,"lL","bb",function(){return Z.V(2)})
u($,"lG","ba",function(){return Z.V(4)})
u($,"lN","bc",function(){return Z.V(8)})
u($,"lO","bd",function(){return Z.V(16)})
u($,"lH","bY",function(){return Z.V(32)})
u($,"lI","bZ",function(){return Z.V(64)})
u($,"lJ","jM",function(){return Z.V(96)})
u($,"lP","be",function(){return Z.V(128)})
u($,"lF","b9",function(){return Z.V(256)})
u($,"lr","jz",function(){return new V.ef(1e-9)})
u($,"lq","B",function(){return $.jz()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bx,ArrayBufferView:H.bx,Float32Array:H.bw,Float64Array:H.bw,Int16Array:H.eZ,Int32Array:H.f_,Int8Array:H.f0,Uint16Array:H.f1,Uint32Array:H.f2,Uint8ClampedArray:H.cl,CanvasPixelArray:H.cl,Uint8Array:H.f3,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.dJ,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,Blob:W.c0,HTMLBodyElement:W.aO,HTMLCanvasElement:W.aQ,CDATASection:W.at,CharacterData:W.at,Comment:W.at,ProcessingInstruction:W.at,Text:W.at,CSSPerspective:W.dZ,CSSCharsetRule:W.w,CSSConditionRule:W.w,CSSFontFaceRule:W.w,CSSGroupingRule:W.w,CSSImportRule:W.w,CSSKeyframeRule:W.w,MozCSSKeyframeRule:W.w,WebKitCSSKeyframeRule:W.w,CSSKeyframesRule:W.w,MozCSSKeyframesRule:W.w,WebKitCSSKeyframesRule:W.w,CSSMediaRule:W.w,CSSNamespaceRule:W.w,CSSPageRule:W.w,CSSRule:W.w,CSSStyleRule:W.w,CSSSupportsRule:W.w,CSSViewportRule:W.w,CSSStyleDeclaration:W.bi,MSStyleCSSProperties:W.bi,CSS2Properties:W.bi,CSSImageValue:W.T,CSSKeywordValue:W.T,CSSNumericValue:W.T,CSSPositionValue:W.T,CSSResourceValue:W.T,CSSUnitValue:W.T,CSSURLImageValue:W.T,CSSStyleValue:W.T,CSSMatrixComponent:W.a1,CSSRotation:W.a1,CSSScale:W.a1,CSSSkew:W.a1,CSSTranslation:W.a1,CSSTransformComponent:W.a1,CSSTransformValue:W.e0,CSSUnparsedValue:W.e1,DataTransferItemList:W.e4,HTMLDivElement:W.X,DOMException:W.e7,ClientRectList:W.c7,DOMRectList:W.c7,DOMRectReadOnly:W.c8,DOMStringList:W.e8,DOMTokenList:W.e9,Element:W.E,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ae,FileList:W.ei,FileWriter:W.ej,HTMLFormElement:W.en,Gamepad:W.af,History:W.et,HTMLCollection:W.bn,HTMLFormControlsCollection:W.bn,HTMLOptionsCollection:W.bn,KeyboardEvent:W.aV,Location:W.eM,MediaList:W.eR,MIDIInputMap:W.eS,MIDIOutputMap:W.eU,MimeType:W.ag,MimeTypeArray:W.eW,PointerEvent:W.a3,MouseEvent:W.a3,DragEvent:W.a3,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.ai,PluginArray:W.fc,RTCStatsReport:W.fj,HTMLSelectElement:W.fm,SourceBuffer:W.aj,SourceBufferList:W.fw,SpeechGrammar:W.ak,SpeechGrammarList:W.fx,SpeechRecognitionResult:W.al,Storage:W.fA,CSSStyleSheet:W.a6,StyleSheet:W.a6,HTMLTableElement:W.cA,HTMLTableRowElement:W.fE,HTMLTableSectionElement:W.fF,HTMLTemplateElement:W.bD,TextTrack:W.am,TextTrackCue:W.a7,VTTCue:W.a7,TextTrackCueList:W.fI,TextTrackList:W.fJ,TimeRanges:W.fL,Touch:W.an,TouchEvent:W.b1,TouchList:W.fP,TrackDefaultList:W.fQ,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.ha,VideoTrackList:W.hk,WheelEvent:W.aJ,Window:W.bI,DOMWindow:W.bI,CSSRuleList:W.ht,ClientRect:W.cO,DOMRect:W.cO,GamepadList:W.hy,NamedNodeMap:W.d6,MozNamedAttrMap:W.d6,SpeechRecognitionResultList:W.hK,StyleSheetList:W.hL,SVGLength:P.aA,SVGLengthList:P.eI,SVGNumber:P.aF,SVGNumberList:P.f7,SVGPointList:P.fd,SVGScriptElement:P.bB,SVGStringList:P.fD,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aH,SVGTransformList:P.fR,AudioBuffer:P.dN,AudioParamMap:P.dO,AudioTrackList:P.dQ,AudioContext:P.aN,webkitAudioContext:P.aN,BaseAudioContext:P.aN,OfflineAudioContext:P.f8,SQLResultSetRowList:P.fy})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.js,[])
else F.js([])})})()
//# sourceMappingURL=main.dart.js.map
