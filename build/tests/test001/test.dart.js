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
a[c]=function(){a[c]=function(){H.nh(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jB(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jk:function jk(){},
iX:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lH:function(a,b,c,d){if(!!J.K(a).$in)return new H.ey(a,b,[c,d])
return new H.bz(a,b,[c,d])},
eX:function(){return new P.bK("No element")},
lx:function(){return new P.bK("Too many elements")},
m2:function(a,b){var u=J.Z(a)
if(typeof u!=="number")return u.W()
H.cG(a,0,u-1,b)},
cG:function(a,b,c,d){if(c-b<=32)H.m1(a,b,c,d)
else H.m0(a,b,c,d)},
m1:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aV(a);u<=c;++u){s=t.i(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.i(a,r-1),s)
if(typeof q!=="number")return q.R()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.i(a,p))
r=p}t.m(a,r,s)}},
m0:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.aV(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.R()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.i(a3,a4))
d.m(a3,e,d.i(a3,a5))
t=a4+1
s=a5-1
if(J.H(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.i(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.J()
if(p<0){if(r!==t){d.m(a3,r,d.i(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.R()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.i(a3,t))
n=t+1
d.m(a3,t,d.i(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.i(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.i(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.J()
if(l<0){if(r!==t){d.m(a3,r,d.i(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.R()
if(k>0)for(;!0;){p=a6.$2(d.i(a3,s),a0)
if(typeof p!=="number")return p.R()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.J()
o=s-1
if(p<0){d.m(a3,r,d.i(a3,t))
n=t+1
d.m(a3,t,d.i(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.i(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.i(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.i(a3,a2))
d.m(a3,a2,a0)
H.cG(a3,a4,t-2,a6)
H.cG(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.i(a3,t),b),0);)++t
for(;J.H(a6.$2(d.i(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.i(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.i(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.i(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.J()
o=s-1
if(p<0){d.m(a3,r,d.i(a3,t))
n=t+1
d.m(a3,t,d.i(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.i(a3,s))
d.m(a3,s,q)}s=o
break}}H.cG(a3,t,s,a6)}else H.cG(a3,t,s,a6)},
k:function k(a){this.a=a},
n:function n(){},
cs:function cs(){},
aM:function aM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b){this.a=null
this.b=a
this.c=b},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
i0:function i0(a,b){this.a=a
this.b=b},
cj:function cj(){},
hD:function hD(){},
cS:function cS(){},
lp:function(){throw H.b(P.r("Cannot modify unmodifiable Map"))},
c6:function(a){var u,t=H.nj(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
n1:function(a){return v.types[a]},
kK:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.K(a).$iu},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.b(H.a2(a))
return u},
bH:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lS:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.b(P.O(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.v(s,q)|32)>t)return}return parseInt(a,b)},
bI:function(a){return H.lJ(a)+H.kz(H.c5(a),0,null)},
lJ:function(a){var u,t,s,r,q,p,o,n=J.K(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.P||!!n.$ib8){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c6(t.length>1&&C.a.v(t,0)===36?C.a.a2(t,1):t)},
lK:function(){if(!!self.location)return self.location.href
return},
k6:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lT:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.a2(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.ak(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.b(H.a2(s))}return H.k6(r)},
k7:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.a2(s))
if(s<0)throw H.b(H.a2(s))
if(s>65535)return H.lT(a)}return H.k6(a)},
lU:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.f3()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
b4:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.ak(u,10))>>>0,56320|u&1023)}}throw H.b(P.O(a,0,1114111,null,null))},
b3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lR:function(a){var u=H.b3(a).getFullYear()+0
return u},
lP:function(a){var u=H.b3(a).getMonth()+1
return u},
lL:function(a){var u=H.b3(a).getDate()+0
return u},
lM:function(a){var u=H.b3(a).getHours()+0
return u},
lO:function(a){var u=H.b3(a).getMinutes()+0
return u},
lQ:function(a){var u=H.b3(a).getSeconds()+0
return u},
lN:function(a){var u=H.b3(a).getMilliseconds()+0
return u},
y:function(a){throw H.b(H.a2(a))},
d:function(a,b){if(a==null)J.Z(a)
throw H.b(H.bg(a,b))},
bg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,s,null)
u=J.Z(a)
if(!(b<0)){if(typeof u!=="number")return H.y(u)
t=b>=u}else t=!0
if(t)return P.B(b,a,s,null,u)
return P.cC(b,s)},
mW:function(a,b,c){var u="Invalid value"
if(a>c)return new P.b5(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.b5(a,c,!0,b,"end",u)
return new P.a4(!0,b,"end",null)},
a2:function(a){return new P.a4(!0,a,null,null)},
b:function(a){var u
if(a==null)a=new P.cy()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kP})
u.name=""}else u.toString=H.kP
return u},
kP:function(){return J.a3(this.dartException)},
L:function(a){throw H.b(a)},
w:function(a){throw H.b(P.at(a))},
ap:function(a){var u,t,s,r,q,p
a=H.kO(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hk(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hl:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kf:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k2:function(a,b){return new H.fy(a,b==null?null:b.method)},
jl:function(a,b){var u=b==null,t=u?null:b.method
return new H.f2(a,t,u?null:b.receiver)},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ak(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jl(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k2(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kS()
q=$.kT()
p=$.kU()
o=$.kV()
n=$.kY()
m=$.kZ()
l=$.kX()
$.kW()
k=$.l0()
j=$.l_()
i=r.a_(u)
if(i!=null)return f.$1(H.jl(u,i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.jl(u,i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k2(u,i))}}return f.$1(new H.hC(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cH()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a4(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cH()
return a},
jC:function(a){var u
if(a==null)return new H.dv(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dv(a)},
n_:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
n7:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.Q("Unsupported number of arguments for wrapped closure"))},
bf:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n7)
a.$identity=u
return u},
lo:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h1().constructor.prototype):Object.create(new H.bo(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ad
if(typeof t!=="number")return t.P()
$.ad=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jU(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lk(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jU(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lk:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n1,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jS:H.jc
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.b("Error in functionType of tearoff")},
ll:function(a,b,c,d){var u=H.jc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ln(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ll(t,!r,u,b)
if(t===0){r=$.ad
if(typeof r!=="number")return r.P()
$.ad=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bp
return new Function(r+H.f(q==null?$.bp=H.e8("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ad
if(typeof r!=="number")return r.P()
$.ad=r+1
o+=r
r="return function("+o+"){return this."
q=$.bp
return new Function(r+H.f(q==null?$.bp=H.e8("self"):q)+"."+H.f(u)+"("+o+");}")()},
lm:function(a,b,c,d){var u=H.jc,t=H.jS
switch(b?-1:a){case 0:throw H.b(H.lZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ln:function(a,b){var u,t,s,r,q,p,o,n=$.bp
if(n==null)n=$.bp=H.e8("self")
u=$.jR
if(u==null)u=$.jR=H.e8("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lm(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ad
if(typeof u!=="number")return u.P()
$.ad=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ad
if(typeof u!=="number")return u.P()
$.ad=u+1
return new Function(n+u+"}")()},
jB:function(a,b,c,d,e,f,g){return H.lo(a,b,c,d,!!e,!!f,g)},
jc:function(a){return a.a},
jS:function(a){return a.c},
e8:function(a){var u,t,s,r=new H.bo("self","target","receiver","name"),q=J.ji(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nb:function(a,b){throw H.b(H.lj(a,H.c6(b.substring(2))))},
dV:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.nb(a,b)},
mY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lj:function(a,b){return new H.e9("CastError: "+P.jg(a)+": type '"+H.f(H.mP(a))+"' is not a subtype of type '"+b+"'")},
mP:function(a){var u,t=J.K(a)
if(!!t.$ibq){u=H.mY(t)
if(u!=null)return H.nc(u)
return"Closure"}return H.bI(a)},
nh:function(a){throw H.b(new P.eo(a))},
lZ:function(a){return new H.fN(a)},
kH:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c5:function(a){if(a==null)return
return a.$ti},
nT:function(a,b,c){return H.j6(a["$a"+H.f(c)],H.c5(b))},
n0:function(a,b,c,d){var u=H.j6(a["$a"+H.f(c)],H.c5(b))
return u==null?null:u[d]},
kI:function(a,b,c){var u=H.j6(a["$a"+H.f(b)],H.c5(a))
return u==null?null:u[c]},
ac:function(a,b){var u=H.c5(a)
return u==null?null:u[b]},
nc:function(a){return H.aT(a,null)},
aT:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c6(a[0].name)+H.kz(a,1,b)
if(typeof a=="function")return H.c6(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.mF(a,b)
if('futureOr' in a)return"FutureOr<"+H.aT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mF:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.P(p,a0[m])
l=u[q]
if(l!=null&&l!==P.S)p+=" extends "+H.aT(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aT(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aT(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aT(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mZ(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aT(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kz:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.M("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aT(p,c)}return"<"+u.h(0)+">"},
j6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nR:function(a,b,c){return a.apply(b,H.j6(J.K(b)["$a"+H.f(c)],H.c5(b)))},
nS:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n8:function(a){var u,t,s,r,q=$.kJ.$1(a),p=$.iU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kE.$2(a,q)
if(q!=null){p=$.iU[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j4(u)
$.iU[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j0[q]=u
return u}if(s==="-"){r=H.j4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kM(a,u)
if(s==="*")throw H.b(P.hB(q))
if(v.leafTags[q]===true){r=H.j4(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kM(a,u)},
kM:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jE(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j4:function(a){return J.jE(a,!1,null,!!a.$iu)},
n9:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j4(u)
else return J.jE(u,c,null,null)},
n5:function(){if(!0===$.jD)return
$.jD=!0
H.n6()},
n6:function(){var u,t,s,r,q,p,o,n
$.iU=Object.create(null)
$.j0=Object.create(null)
H.n4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kN.$1(q)
if(p!=null){o=H.n9(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n4:function(){var u,t,s,r,q,p,o=C.D()
o=H.be(C.E,H.be(C.F,H.be(C.r,H.be(C.r,H.be(C.G,H.be(C.H,H.be(C.I(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kJ=new H.iY(r)
$.kE=new H.iZ(q)
$.kN=new H.j_(p)},
be:function(a,b){return a(b)||b},
lB:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.b(P.J("Illegal RegExp pattern ("+String(p)+")",a,null))},
ne:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mX:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jG:function(a,b,c){var u=H.nf(a,b,c)
return u},
nf:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kO(b),'g'),H.mX(c))},
eh:function eh(){},
ei:function ei(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hk:function hk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fy:function fy(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
j8:function j8(a){this.a=a},
dv:function dv(a){this.a=a
this.b=null},
bq:function bq(){},
h9:function h9(){},
h1:function h1(){},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a){this.a=a},
fN:function fN(a){this.a=a},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f1:function f1(a){this.a=a},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f7:function f7(a,b){this.a=a
this.$ti=b},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
f0:function f0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iQ:function(a){return a},
lI:function(a){return new Int8Array(a)},
aq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bg(b,a))},
mD:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.b(H.mW(a,b,c))
return b},
bE:function bE(){},
aP:function aP(){},
ct:function ct(){},
bF:function bF(){},
cu:function cu(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
cv:function cv(){},
bG:function bG(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
mZ:function(a){return J.jZ(a?Object.keys(a):[],null)},
nj:function(a){return v.mangledGlobalNames[a]},
na:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iW:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jD==null){H.n5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.b(P.hB("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jI()]
if(r!=null)return r
r=H.n8(a)
if(r!=null)return r
if(typeof a=="function")return C.R
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.jI(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ly:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.jb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.O(a,0,4294967295,"length",null))
return J.jZ(new Array(a),b)},
jZ:function(a,b){return J.ji(H.c(a,[b]))},
ji:function(a){a.fixed$length=Array
return a},
lz:function(a,b){return J.ld(a,b)},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cn.prototype
return J.f_.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.co.prototype
if(typeof a=="boolean")return J.eZ.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iW(a)},
aV:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iW(a)},
dT:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iW(a)},
kG:function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.b8.prototype
return a},
c4:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.b8.prototype
return a},
bh:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iW(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)},
jK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kG(a).M(a,b)},
jL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aV(a).i(a,b)},
j9:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.kK(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dT(a).m(a,b,c)},
l9:function(a,b){return J.c4(a).v(a,b)},
la:function(a,b,c){return J.bh(a).dO(a,b,c)},
lb:function(a,b,c,d){return J.bh(a).e0(a,b,c,d)},
lc:function(a,b){return J.c4(a).K(a,b)},
ld:function(a,b){return J.kG(a).am(a,b)},
dW:function(a,b){return J.dT(a).w(a,b)},
le:function(a,b,c,d){return J.bh(a).eg(a,b,c,d)},
jM:function(a,b){return J.dT(a).B(a,b)},
lf:function(a){return J.bh(a).ge4(a)},
jN:function(a){return J.bh(a).gb5(a)},
ja:function(a){return J.K(a).gA(a)},
ar:function(a){return J.dT(a).gH(a)},
Z:function(a){return J.aV(a).gk(a)},
jO:function(a){return J.dT(a).eO(a)},
lg:function(a,b){return J.bh(a).eR(a,b)},
lh:function(a,b,c){return J.c4(a).n(a,b,c)},
li:function(a){return J.c4(a).eY(a)},
a3:function(a){return J.K(a).h(a)},
a:function a(){},
eZ:function eZ(){},
co:function co(){},
cp:function cp(){},
fC:function fC(){},
b8:function b8(){},
aL:function aL(){},
aJ:function aJ(a){this.$ti=a},
jj:function jj(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bx:function bx(){},
cn:function cn(){},
f_:function f_(){},
aK:function aK(){}},P={
me:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bf(new P.i2(s),1)).observe(u,{childList:true})
return new P.i1(s,u,t)}else if(self.setImmediate!=null)return P.mR()
return P.mS()},
mf:function(a){self.scheduleImmediate(H.bf(new P.i3(a),0))},
mg:function(a){self.setImmediate(H.bf(new P.i4(a),0))},
mh:function(a){P.jp(C.l,a)},
jp:function(a,b){var u=C.c.a4(a.a,1000)
return P.mn(u<0?0:u,b)},
ke:function(a,b){var u=C.c.a4(a.a,1000)
return P.mo(u<0?0:u,b)},
mn:function(a,b){var u=new P.dB()
u.cO(a,b)
return u},
mo:function(a,b){var u=new P.dB()
u.cP(a,b)
return u},
nO:function(a){return new P.b9(a,1)},
mk:function(){return C.X},
ml:function(a){return new P.b9(a,3)},
mI:function(a,b){return new P.iy(a,[b])},
mJ:function(){var u,t
for(;u=$.bd,u!=null;){$.c3=null
t=u.b
$.bd=t
if(t==null)$.c2=null
u.a.$0()}},
mO:function(){$.jz=!0
try{P.mJ()}finally{$.c3=null
$.jz=!1
if($.bd!=null)$.jJ().$1(P.kF())}},
mM:function(a){var u=new P.cX(a)
if($.bd==null){$.bd=$.c2=u
if(!$.jz)$.jJ().$1(P.kF())}else $.c2=$.c2.b=u},
mN:function(a){var u,t,s=$.bd
if(s==null){P.mM(a)
$.c3=$.c2
return}u=new P.cX(a)
t=$.c3
if(t==null){u.b=s
$.bd=$.c3=u}else{u.b=t.b
$.c3=t.b=u
if(u.b==null)$.c2=u}},
kd:function(a,b){var u=$.ab
if(u===C.f)return P.jp(a,b)
return P.jp(a,u.e5(b))},
m5:function(a,b){var u=$.ab
if(u===C.f)return P.ke(a,b)
return P.ke(a,u.bR(b,P.cN))},
kA:function(a,b,c,d,e){var u={}
u.a=d
P.mN(new P.iR(u,e))},
mK:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
mL:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
i2:function i2(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
dB:function dB(){this.c=0},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b){this.a=a
this.b=b},
ba:function ba(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iy:function iy(a,b){this.a=a
this.$ti=b},
cX:function cX(a){this.a=a
this.b=null},
cJ:function cJ(){},
h4:function h4(){},
cN:function cN(){},
iL:function iL(){},
iR:function iR(a,b){this.a=a
this.b=b},
ii:function ii(){},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
lC:function(a,b){return new H.a8([a,b])},
jm:function(a,b){return new H.a8([a,b])},
lE:function(a){return H.n_(a,new H.a8([null,null]))},
by:function(a){return new P.ie([a])},
ju:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mm:function(a,b){var u=new P.db(a,b)
u.c=a.e
return u},
lw:function(a,b,c){var u,t
if(P.jA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
$.V.push(a)
try{P.mH(a,u)}finally{if(0>=$.V.length)return H.d($.V,-1)
$.V.pop()}t=P.kb(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jh:function(a,b,c){var u,t
if(P.jA(a))return b+"..."+c
u=new P.M(b)
$.V.push(a)
try{t=u
t.a=P.kb(t.a,a,", ")}finally{if(0>=$.V.length)return H.d($.V,-1)
$.V.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function(a){var u,t
for(u=$.V.length,t=0;t<u;++t)if(a===$.V[t])return!0
return!1},
mH:function(a,b){var u,t,s,r,q,p,o,n=a.gH(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.f(n.gu(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gu(n);++l
if(!n.p()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gu(n);++l
for(;n.p();r=q,q=p){p=n.gu(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
lD:function(a,b,c){var u=P.lC(b,c)
a.B(0,new P.f9(u))
return u},
k_:function(a,b){var u,t,s=P.by(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.w)(a),++t)s.t(0,a[t])
return s},
jo:function(a){var u,t={}
if(P.jA(a))return"{...}"
u=new P.M("")
try{$.V.push(a)
u.a+="{"
t.a=!0
J.jM(a,new P.fe(t,u))
u.a+="}"}finally{if(0>=$.V.length)return H.d($.V,-1)
$.V.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ie:function ie(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ig:function ig(a){this.a=a
this.c=this.b=null},
db:function db(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eW:function eW(){},
f9:function f9(a){this.a=a},
fa:function fa(){},
q:function q(){},
fd:function fd(){},
fe:function fe(a,b){this.a=a
this.b=b},
R:function R(){},
iD:function iD(){},
ff:function ff(){},
cT:function cT(a,b){this.a=a
this.$ti=b},
im:function im(){},
dc:function dc(){},
dG:function dG(){},
m8:function(a,b,c,d){if(b instanceof Uint8Array)return P.m9(!1,b,c,d)
return},
m9:function(a,b,c,d){var u,t,s=$.l1()
if(s==null)return
u=0===c
if(u&&!0)return P.jt(s,b)
t=b.length
d=P.aB(c,d,t)
if(u&&d===t)return P.jt(s,b)
return P.jt(s,b.subarray(c,d))},
jt:function(a,b){if(P.mb(b))return
return P.mc(a,b)},
mc:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.Y(t)}return},
mb:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ma:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.Y(t)}return},
kC:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.y(c)
u=J.aV(a)
t=b
for(;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.aP()
if((s&127)!==s)return t-b}return c-b},
jQ:function(a,b,c,d,e,f){if(C.c.az(f,4)!==0)throw H.b(P.J("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.J("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.J("Invalid base64 padding, more than two '=' characters",a,b))},
e5:function e5(){},
e6:function e6(){},
ee:function ee(){},
ej:function ej(){},
eA:function eA(){},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eR:function eR(a){this.a=a},
hL:function hL(){},
hN:function hN(){},
iJ:function iJ(a){this.b=0
this.c=a},
hM:function hM(a){this.a=a},
iI:function iI(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dU:function(a,b,c){var u=H.lS(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.J(a,null,null))},
lt:function(a){if(a instanceof H.bq)return a.h(0)
return"Instance of '"+H.f(H.bI(a))+"'"},
lF:function(a,b,c){var u,t,s=J.ly(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jn:function(a,b,c){var u,t=H.c([],[c])
for(u=J.ar(a);u.p();)t.push(u.gu(u))
if(b)return t
return J.ji(t)},
bL:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aB(b,c,u)
if(b<=0){if(typeof c!=="number")return c.J()
t=c<u}else t=!0
return H.k7(t?C.b.cA(a,b,c):a)}if(!!J.K(a).$ibG)return H.lU(a,b,P.aB(b,c,a.length))
return P.m3(a,b,c)},
m3:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.b(P.O(b,0,J.Z(a),q,q))
u=c==null
if(!u&&c<b)throw H.b(P.O(c,b,J.Z(a),q,q))
t=J.ar(a)
for(s=0;s<b;++s)if(!t.p())throw H.b(P.O(b,0,s,q,q))
r=[]
if(u)for(;t.p();)r.push(t.gu(t))
else for(s=b;s<c;++s){if(!t.p())throw H.b(P.O(c,b,s,q,q))
r.push(t.gu(t))}return H.k7(r)},
lW:function(a){return new H.f0(a,H.lB(a,!1,!0,!1,!1,!1))},
kb:function(a,b,c){var u=J.ar(b)
if(!u.p())return a
if(c.length===0){do a+=H.f(u.gu(u))
while(u.p())}else{a+=H.f(u.gu(u))
for(;u.p();)a=a+c+H.f(u.gu(u))}return a},
js:function(){var u=H.lK()
if(u!=null)return P.m7(u)
throw H.b(P.r("'Uri.base' is not supported"))},
dH:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.l7().b
if(typeof b!=="string")H.L(H.a2(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gef().b7(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.b4(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lq:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lr:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
jW:function(a){return new P.aH(1000*a)},
jg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lt(a)},
e_:function(a){return new P.a4(!1,null,null,a)},
jb:function(a,b,c){return new P.a4(!0,a,b,c)},
cC:function(a,b){return new P.b5(null,null,!0,a,b,"Value not in range")},
O:function(a,b,c,d,e){return new P.b5(b,c,!0,a,d,"Invalid value")},
aB:function(a,b,c){var u
if(typeof a!=="number")return H.y(a)
if(0<=a){if(typeof c!=="number")return H.y(c)
u=a>c}else u=!0
if(u)throw H.b(P.O(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.y(c)
u=b>c}else u=!0
if(u)throw H.b(P.O(b,a,c,"end",null))
return b}return c},
k8:function(a,b){if(typeof a!=="number")return a.J()
if(a<0)throw H.b(P.O(a,0,null,b,null))},
B:function(a,b,c,d,e){var u=e==null?J.Z(b):e
return new P.eT(u,!0,a,c,"Index out of range")},
r:function(a){return new P.hE(a)},
hB:function(a){return new P.hA(a)},
ka:function(a){return new P.bK(a)},
at:function(a){return new P.eg(a)},
Q:function(a){return new P.d4(a)},
J:function(a,b,c){return new P.eL(a,b,c)},
lG:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
jF:function(a){H.na(a)},
m7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.v(a,4)^58)*3|C.a.v(a,0)^100|C.a.v(a,1)^97|C.a.v(a,2)^116|C.a.v(a,3)^97)>>>0
if(u===0)return P.kg(e<e?C.a.n(a,0,e):a,5,f).gcr()
else if(u===32)return P.kg(C.a.n(a,5,e),0,f).gcr()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.t])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.kB(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.f2()
if(r>=0)if(P.kB(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.P()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.J()
if(typeof n!=="number")return H.y(n)
if(m<n)n=m
if(typeof o!=="number")return o.J()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.J()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.J()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.V(a,"..",o)))j=n>o+2&&C.a.V(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.V(a,"file",0)){if(q<=0){if(!C.a.V(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.n(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.ap(a,o,n,"/");++e
n=h}k="file"}else if(C.a.V(a,"http",0)){if(t&&p+3===o&&C.a.V(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.ap(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.V(a,"https",0)){if(t&&p+4===o&&C.a.V(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.ap(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.n(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iq(a,r,q,p,o,n,m,k)}return P.mp(a,0,e,r,q,p,o,n,m,k)},
ki:function(a){var u=P.h
return C.b.em(H.c(a.split("&"),[u]),P.jm(u,u),new P.hJ(C.e))},
m6:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hG(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.K(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dU(C.a.n(a,s,t),n,n)
if(typeof p!=="number")return p.R()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dU(C.a.n(a,s,c),n,n)
if(typeof p!=="number")return p.R()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
kh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hH(a),d=new P.hI(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.t])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.K(a,t)
if(p===58){if(t===b){++t
if(C.a.K(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.ga6(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.m6(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.ak(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
mp:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mx(a,b,d)
else{if(d===b)P.bc(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.my(a,u,e-1):""
s=P.mu(a,e,f,!1)
if(typeof f!=="number")return f.P()
r=f+1
if(typeof g!=="number")return H.y(g)
q=r<g?P.mw(P.dU(C.a.n(a,r,g),new P.iE(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mv(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.J()
o=h<i?P.jw(a,h+1,i,n):n
return new P.bb(j,t,s,q,p,o,i<c?P.mt(a,i+1,c):n)},
kt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bc:function(a,b,c){throw H.b(P.J(c,a,b))},
mw:function(a,b){if(a!=null&&a===P.kt(b))return
return a},
mu:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.K(a,b)===91){if(typeof c!=="number")return c.W()
u=c-1
if(C.a.K(a,u)!==93)P.bc(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mr(a,t,u)
if(typeof s!=="number")return s.J()
if(s<u){r=s+1
q=P.ky(a,C.a.V(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kh(a,t,s)
return C.a.n(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.y(c)
p=b
for(;p<c;++p)if(C.a.K(a,p)===58){s=C.a.aH(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.ky(a,C.a.V(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kh(a,b,s)
return"["+C.a.n(a,b,s)+q+"]"}return P.mA(a,b,c)},
mr:function(a,b,c){var u,t=C.a.aH(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.y(c)
u=t<c}else u=!1
return u?t:c},
ky:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.M(d):null
if(typeof c!=="number")return H.y(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.K(a,u)
if(r===37){q=P.jx(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.M("")
o=l.a+=C.a.n(a,t,u)
if(p)q=C.a.n(a,u,u+3)
else if(q==="%")P.bc(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.M("")
if(t<u){l.a+=C.a.n(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.K(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.M("")
l.a+=C.a.n(a,t,u)
l.a+=P.jv(r)
u+=m
t=u}}}if(l==null)return C.a.n(a,b,c)
if(t<c)l.a+=C.a.n(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.y(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.K(a,u)
if(q===37){p=P.jx(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.M("")
n=C.a.n(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.n(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.w,o)
o=(C.w[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.M("")
if(t<u){s.a+=C.a.n(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.i,o)
o=(C.i[o]&1<<(q&15))!==0}else o=!1
if(o)P.bc(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.K(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.M("")
n=C.a.n(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jv(q)
u+=l
t=u}}}}if(s==null)return C.a.n(a,b,c)
if(t<c){n=C.a.n(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mx:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kv(C.a.v(a,b)))P.bc(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.v(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.k,r)
r=(C.k[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bc(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.n(a,b,c)
return P.mq(t?a.toLowerCase():a)},
mq:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
my:function(a,b,c){return P.c1(a,b,c,C.U,!1)},
mv:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.c1(a,b,c,C.x,!0):C.Q.f4(d,new P.iF(),P.h).l(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.U(u,"/"))u="/"+u
return P.mz(u,e,f)},
mz:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.U(a,"/"))return P.mB(a,!u||c)
return P.mC(a)},
jw:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.b(P.e_("Both query and queryParameters specified"))
return P.c1(a,b,c,C.j,!0)}if(d==null)return
u=new P.M("")
t.a=""
d.B(0,new P.iG(new P.iH(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mt:function(a,b,c){return P.c1(a,b,c,C.j,!0)},
jx:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.K(a,b+1)
t=C.a.K(a,p)
s=H.iX(u)
r=H.iX(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.ak(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.b4(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.n(a,b,b+3).toUpperCase()
return},
jv:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.t])
t[0]=37
t[1]=C.a.v(m,a>>>4)
t[2]=C.a.v(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.t])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.dY(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.v(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.v(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.bL(t,0,null)},
c1:function(a,b,c,d,e){var u=P.kx(a,b,c,d,e)
return u==null?C.a.n(a,b,c):u},
kx:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.J()
if(typeof c!=="number")return H.y(c)
if(!(o<c))break
c$0:{u=C.a.K(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jx(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.i,t)
t=(C.i[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bc(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.K(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jv(u)}}if(m==null)m=new P.M("")
m.a+=C.a.n(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.y(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.J()
if(n<c)m.a+=C.a.n(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kw:function(a){if(C.a.U(a,"."))return!0
return C.a.c0(a,"/.")!==-1},
mC:function(a){var u,t,s,r,q,p,o
if(!P.kw(a))return a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.H(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.l(u,"/")},
mB:function(a,b){var u,t,s,r,q,p
if(!P.kw(a))return!b?P.ku(a):a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.ga6(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.ga6(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.ku(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.l(u,"/")},
ku:function(a){var u,t,s,r=a.length
if(r>=2&&P.kv(J.l9(a,0)))for(u=1;u<r;++u){t=C.a.v(a,u)
if(t===58)return C.a.n(a,0,u)+"%3A"+C.a.a2(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.k,s)
s=(C.k[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ms:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.v(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.e_("Invalid URL encoding"))}}return u},
jy:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.v(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.n(a,b,c)
else r=new H.k(C.a.n(a,b,c))}else{r=H.c([],[P.t])
for(s=a.length,q=b;q<c;++q){t=C.a.v(a,q)
if(t>127)throw H.b(P.e_("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.b(P.e_("Truncated URI"))
r.push(P.ms(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.hM(!1).b7(r)},
kv:function(a){var u=a|32
return 97<=u&&u<=122},
kg:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.t])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.v(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.b(P.J(m,a,t))}}if(s<0&&t>b)throw H.b(P.J(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.v(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.ga6(l)
if(r!==44||t!==p+7||!C.a.V(a,"base64",p+1))throw H.b(P.J("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.C.ey(0,a,o,u)
else{n=P.kx(a,o,u,C.j,!0)
if(n!=null)a=C.a.ap(a,o,u,n)}return new P.hF(a,l,c)},
mE:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.lG(22,new P.iN(),P.b7),n=new P.iM(o),m=new P.iO(),l=new P.iP(),k=n.$2(0,225)
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
kB:function(a,b,c,d,e){var u,t,s,r,q,p=$.l8()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.v(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aU:function aU(){},
au:function au(a,b){this.a=a
this.b=b},
D:function D(){},
aH:function aH(a){this.a=a},
ew:function ew(){},
ex:function ex(){},
b0:function b0(){},
cy:function cy(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eT:function eT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hE:function hE(a){this.a=a},
hA:function hA(a){this.a=a},
bK:function bK(a){this.a=a},
eg:function eg(a){this.a=a},
fB:function fB(){},
cH:function cH(){},
eo:function eo(a){this.a=a},
d4:function d4(a){this.a=a},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(){},
t:function t(){},
l:function l(){},
eY:function eY(){},
o:function o(){},
I:function I(){},
aQ:function aQ(){},
X:function X(){},
S:function S(){},
h:function h(){},
M:function M(a){this.a=a},
hJ:function hJ(a){this.a=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b},
bb:function bb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(){},
iH:function iH(a,b){this.a=a
this.b=b},
iG:function iG(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(){},
iM:function iM(a){this.a=a},
iO:function iO(){},
iP:function iP(){},
iq:function iq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i8:function i8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aE:function(a){var u,t,s,r,q
if(a==null)return
u=P.jm(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mU:function(a){var u={}
a.B(0,new P.iS(u))
return u},
is:function is(){},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(){},
eJ:function eJ(){},
ih:function ih(){},
a0:function a0(){},
ax:function ax(){},
f4:function f4(){},
az:function az(){},
fz:function fz(){},
fF:function fF(){},
bJ:function bJ(){},
h5:function h5(){},
j:function j(){},
aC:function aC(){},
hj:function hj(){},
d9:function d9(){},
da:function da(){},
dk:function dk(){},
dl:function dl(){},
dx:function dx(){},
dy:function dy(){},
dE:function dE(){},
dF:function dF(){},
b7:function b7(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(a){this.a=a},
e4:function e4(){},
aW:function aW(){},
fA:function fA(){},
cY:function cY(){},
h0:function h0(){},
dt:function dt(){},
du:function du(){}},W={
jP:function(){var u=document.createElement("a")
return u},
jT:function(){var u=document.createElement("canvas")
return u},
ls:function(a,b,c){var u=document.body,t=(u&&C.p).Y(u,a,b,c)
t.toString
u=new H.bQ(new W.T(t),new W.ez(),[W.v])
return u.gae(u)},
je:function(a){return"wheel"},
bs:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bh(a)
t=u.gcl(a)
if(typeof t==="string")r=u.gcl(a)}catch(s){H.Y(s)}return r},
lv:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.Y(u)}return s},
id:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kr:function(a,b,c,d){var u=W.id(W.id(W.id(W.id(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.kD(new W.ib(c),W.i)
if(u!=null&&!0)J.lb(a,b,u,!1)
return new W.ia(a,b,u,!1)},
kq:function(a){var u=W.jP(),t=window.location
u=new W.bS(new W.il(u,t))
u.cL(a)
return u},
mi:function(a,b,c,d){return!0},
mj:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
ks:function(){var u=P.h,t=P.k_(C.m,u),s=H.c(["TEMPLATE"],[u])
t=new W.iz(t,P.by(u),P.by(u),P.by(u),null)
t.cN(null,new H.fh(C.m,new W.iA(),[H.ac(C.m,0),u]),s,null)
return t},
kD:function(a,b){var u=$.ab
if(u===C.f)return a
return u.bR(a,b)},
m:function m(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
aX:function aX(){},
aY:function aY(){},
aZ:function aZ(){},
aG:function aG(){},
ek:function ek(){},
x:function x(){},
br:function br(){},
el:function el(){},
a_:function a_(){},
ae:function ae(){},
em:function em(){},
en:function en(){},
eq:function eq(){},
a6:function a6(){},
et:function et(){},
cg:function cg(){},
ch:function ch(){},
eu:function eu(){},
ev:function ev(){},
i6:function i6(a,b){this.a=a
this.b=b},
F:function F(){},
ez:function ez(){},
i:function i(){},
e:function e(){},
a7:function a7(){},
bu:function bu(){},
eG:function eG(){},
eK:function eK(){},
af:function af(){},
eQ:function eQ(){},
bv:function bv(){},
bw:function bw(){},
ed:function ed(){},
b2:function b2(){},
fb:function fb(){},
fi:function fi(){},
bC:function bC(){},
fj:function fj(){},
fk:function fk(a){this.a=a},
fl:function fl(){},
fm:function fm(a){this.a=a},
ag:function ag(){},
fn:function fn(){},
ah:function ah(){},
T:function T(a){this.a=a},
v:function v(){},
cw:function cw(){},
ai:function ai(){},
fE:function fE(){},
fL:function fL(){},
fM:function fM(a){this.a=a},
fO:function fO(){},
ak:function ak(){},
fZ:function fZ(){},
al:function al(){},
h_:function h_(){},
am:function am(){},
h2:function h2(){},
h3:function h3(a){this.a=a},
a9:function a9(){},
cK:function cK(){},
h6:function h6(){},
h7:function h7(){},
bM:function bM(){},
an:function an(){},
aa:function aa(){},
ha:function ha(){},
hb:function hb(){},
hd:function hd(){},
ao:function ao(){},
b6:function b6(){},
hh:function hh(){},
hi:function hi(){},
aR:function aR(){},
hK:function hK(){},
hZ:function hZ(){},
aS:function aS(){},
bR:function bR(){},
i7:function i7(){},
d_:function d_(){},
ic:function ic(){},
dh:function dh(){},
ir:function ir(){},
iw:function iw(){},
i5:function i5(){},
i9:function i9(a){this.a=a},
ia:function ia(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ib:function ib(a){this.a=a},
bS:function bS(a){this.a=a},
A:function A(){},
cx:function cx(a){this.a=a},
fw:function fw(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
dq:function dq(){},
io:function io(){},
ip:function ip(){},
iz:function iz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(){},
ix:function ix(){},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ay:function ay(){},
il:function il(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
iK:function iK(a){this.a=a},
cZ:function cZ(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
di:function di(){},
dj:function dj(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
bY:function bY(){},
bZ:function bZ(){},
dr:function dr(){},
ds:function ds(){},
dw:function dw(){},
dz:function dz(){},
dA:function dA(){},
c_:function c_(){},
c0:function c0(){},
dC:function dC(){},
dD:function dD(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){}},K={
C:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.b(P.Q("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.v(a,0)
t=C.a.v(b,0)
if(u>t){s=t
t=u
u=s}return new K.fG(u,t)},
p:function(a){var u=new K.fP()
u.cI(a)
return u},
as:function as(){},
cl:function cl(){},
aN:function aN(){},
U:function U(){this.a=null},
fG:function fG(a,b){this.a=a
this.b=b},
fP:function fP(){this.a=null}},L={
hf:function(){var u=new L.he(),t=P.h
u.a=new H.a8([t,L.cI])
u.b=new H.a8([t,L.cP])
u.c=P.by(t)
return u},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a){this.b=a
this.c=null},
he:function he(){var _=this
_.d=_.c=_.b=_.a=null},
cQ:function cQ(a){this.b=a
this.a=this.c=null}},O={
jV:function(a){var u=new O.ef([a])
u.a=H.c([],[a])
return u},
ef:function ef(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bB:function bB(){this.b=this.a=null},
er:function er(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cL:function cL(){}},E={
lY:function(a,b){var u=new E.fH(a)
u.cH(a,b)
return u},
m4:function(a,b,c,d,e){var u,t,s=J.K(a)
if(!!s.$iaZ)return E.kc(a,!0,!0,!0,!1)
u=W.jT()
t=u.style
t.width="100%"
t.height="100%"
s.gb5(a).t(0,u)
return E.kc(u,!0,!0,!0,!1)},
kc:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cM(),p=C.L.cv(a,"webgl2",P.lE(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.L(P.Q("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lY(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.cU(a)
t=new X.f3()
t.d=P.by(P.t)
u.b=t
t=new X.fo(u)
t.f=0
t.r=V.cB()
t.x=V.cB()
t.ch=t.Q=1
u.c=t
t=new X.fc(u)
t.r=0
t.x=V.cB()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hg(u)
t.f=V.cB()
t.r=V.cB()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cJ,P.S]])
u.z=t
s=document
t.push(W.P(s,"contextmenu",u.gda(),!1))
u.z.push(W.P(a,"focus",u.gdh(),!1))
u.z.push(W.P(a,"blur",u.gd4(),!1))
u.z.push(W.P(s,"keyup",u.gdl(),!1))
u.z.push(W.P(s,"keydown",u.gdj(),!1))
u.z.push(W.P(a,"mousedown",u.gdq(),!1))
u.z.push(W.P(a,"mouseup",u.gdu(),!1))
u.z.push(W.P(a,r,u.gds(),!1))
t=u.z
W.je(a)
W.je(a)
t.push(W.P(a,W.je(a),u.gdw(),!1))
u.z.push(W.P(s,r,u.gdd(),!1))
u.z.push(W.P(s,"mouseup",u.gdf(),!1))
u.z.push(W.P(s,"pointerlockchange",u.gdA(),!1))
u.z.push(W.P(a,"touchstart",u.gdH(),!1))
u.z.push(W.P(a,"touchend",u.gdD(),!1))
u.z.push(W.P(a,"touchmove",u.gdF(),!1))
q.ch=!0
q.cx=!1
q.cy=new P.au(Date.now(),!1)
q.db=0
q.bF()
return q},
e7:function e7(){},
aI:function aI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fH:function fH(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
cM:function cM(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
hc:function hc(a){this.a=a}},Z={
md:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iQ(c)),35044)
a.bindBuffer(b,null)
return new Z.cW(b,u)},
a1:function(a){return new Z.cV(a)},
cW:function cW(a,b){this.a=a
this.b=b},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i_:function i_(a){this.a=a},
cb:function cb(a,b){this.a=a
this.b=null
this.c=b},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.a=a}},D={
aw:function(){var u=new D.bt()
u.d=0
return u},
ea:function ea(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
eC:function eC(a){this.a=a},
eD:function eD(a){this.a=a},
W:function W(){this.b=null},
eU:function eU(){this.b=null},
eV:function eV(){this.b=null},
G:function G(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={cc:function cc(a,b){this.a=a
this.b=b},cq:function cq(a,b){this.a=a
this.b=b},f3:function f3(){this.d=this.b=this.a=null},fc:function fc(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},fo:function fo(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hg:function hg(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cU:function cU(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lu:function(a){var u=new X.eM(),t=V.mT(1)
u.a=new V.b_(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k9
if(t==null){t=V.lX(0,0,1,1)
$.k9=t}u.r=t
return u},
jd:function jd(){},
eM:function eM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cz:function cz(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
h8:function h8(){}},V={
mT:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jH:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.az(a-b,u)
return(a<0?a+u:a)+b},
z:function(a,b,c){if(a==null)return C.a.ac("null",c)
return C.a.ac(C.d.co(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
iV:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.h])
for(u=0,t=0;t<4;++t){s=V.z(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.d(o,q)
r=C.a.ac(o[q],u)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=r}return o},
k1:function(){var u=$.k0
return u==null?$.k0=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cB:function(){var u=$.k4
return u==null?$.k4=new V.aj(0,0):u},
lX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cD(a,b,c,d)},
hO:function(){var u=$.ko
return u==null?$.ko=new V.N(0,0,0):u},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
bA:function bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aj:function aj(a,b){this.a=a
this.b=b},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
nd:function(a){P.m5(C.N,new V.j5(a))},
m_:function(a){var u=new V.fU()
u.cK(a,!0)
return u},
eb:function eb(a){this.a=a
this.d=this.c=null},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(){},
j5:function j5(a){this.a=a},
ep:function ep(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eO:function eO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eP:function eP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fD:function fD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fU:function fU(){this.b=this.a=null},
fW:function fW(a){this.a=a},
fV:function fV(a){this.a=a},
fX:function fX(a){this.a=a}},U={ce:function ce(){this.b=this.a=null},fp:function fp(){},cE:function cE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ci:function ci(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jq:function(a,b,c,d,e){var u=new A.ho(a,c,e)
u.f=d
P.lF(d,0,P.t)
return u},
c9:function c9(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.a=a},
es:function es(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cF:function cF(){},
cR:function cR(){},
hv:function hv(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.c=b
this.d=c},
hq:function hq(a,b,c){this.a=a
this.c=b
this.d=c},
hs:function hs(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){this.a=a
this.c=b
this.d=c},
ho:function ho(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
bN:function bN(a,b,c){this.a=a
this.c=b
this.d=c},
hp:function hp(a,b,c){this.a=a
this.c=b
this.d=c},
hr:function hr(a,b,c){this.a=a
this.c=b
this.d=c},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hx:function hx(a,b,c){this.a=a
this.c=b
this.d=c},
bO:function bO(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ni:function(){return F.mV(15,30,0.5,1,new F.j7())},
mV:function(a,b,c,d,e){var u,t=F.ng(a,b,new F.iT(e,d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.b4()
t.a.b4()
u=t.e
if(u!=null)u.aM(0)
t.ex(new F.hU(),new F.fx())
return t},
ng:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.fQ()
t=new F.hP(u)
t.b=!1
s=[F.bP]
t.c=H.c([],s)
u.a=t
t=new F.fT()
t.b=H.c([],[F.cA])
u.b=t
t=new F.fS(u)
t.b=H.c([],[F.cr])
u.c=t
t=new F.fR(u)
t.b=H.c([],[F.b1])
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bO(new V.b_(s,0,0,1),new V.aj(p,1))
c.$3(o,p,0)
r.push(o.bT(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bO(new V.b_(j,i,h,1),new V.aj(p,m))
c.$3(o,p,n)
r.push(o.bT(null))}}u.d.e1(a+1,b+1,r)
return u},
eE:function(a,b,c){var u=new F.b1(),t=a.a
if(t==null)H.L(P.Q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.L(P.Q("May not create a face with vertices attached to different shapes."))
u.dS(a)
u.dT(b)
u.dU(c)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
kp:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bP(),r=new F.hX()
r.b=H.c([],[F.cA])
s.b=r
r=new F.hT()
u=[F.cr]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hQ()
u=[F.b1]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.l2()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bk().a)!==0?e:t
s.x=(u&$.bj().a)!==0?b:t
s.y=(u&$.bl().a)!==0?f:t
s.z=(u&$.bm().a)!==0?g:t
s.Q=(u&$.l3().a)!==0?c:t
s.ch=(u&$.bn().a)!==0?i:0
s.cx=(u&$.bi().a)!==0?a:t
return s},
j7:function j7(){},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eF:function eF(){},
fY:function fY(){},
cr:function cr(){},
f5:function f5(){},
hm:function hm(){},
cA:function cA(){},
fQ:function fQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fR:function fR(a){this.a=a
this.b=null},
fS:function fS(a){this.a=a
this.b=null},
fT:function fT(){this.b=null},
bP:function bP(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a},
hP:function hP(a){this.a=a
this.c=this.b=null},
hQ:function hQ(){this.d=this.c=this.b=null},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){this.c=this.b=null},
hV:function hV(){},
hU:function hU(){},
hW:function hW(){},
fx:function fx(){},
hX:function hX(){this.b=null}},Y={
kL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="testCanvas",g=null,f="controls",e=V.m_("Test 001"),d=W.jT()
d.className="pageLargeCanvas"
d.id=h
e.a.appendChild(d)
u=[P.h]
e.bP(H.c(["Test of the Depth shader with a single auto-rotating shape. ","The striations are caused by the depth being stored across the RGB channels. ","Depth can also be sent to all the channels causing a grey scale but at ","lower quality depth. The depth can invert the face to use so that this can ","be used for light shadow depth texture."],u))
e.e_(H.c(["controls"],u))
e.bP(H.c(["\xab[Back to Tests|../]"],u))
t=new E.aI()
t.a=""
t.b=!0
u=E.aI
s=O.jV(u)
t.y=s
s.bl(t.gez(),t.geC())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbn(0,g)
t.sav(g)
t.sbn(0,F.ni())
s=new U.cE()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sct(0)
s.scd(0,0)
s.sck(0)
r=s.d
if(!(Math.abs(r-0.1)<$.E().a)){s.d=0.1
r=new D.G("deltaYaw",r,0.1)
r.b=!0
s.ai(r)}r=s.e
if(!(Math.abs(r-0.21)<$.E().a)){s.e=0.21
r=new D.G("deltaPitch",r,0.21)
r.b=!0
s.ai(r)}r=s.f
if(!(Math.abs(r-0.32)<$.E().a)){s.f=0.32
r=new D.G("deltaRoll",r,0.32)
r.b=!0
s.ai(r)}t.sav(s)
q=new O.er()
q.b=1
q.c=10
q.f=q.e=q.d=!1
if(!(Math.abs(-1)<$.E().a)){q.b=2
s=new D.G("start",1,2)
s.b=!0
q.aB(s)}s=q.c
if(!(Math.abs(s-8)<$.E().a)){q.c=8
s=new D.G("stop",s,8)
s.b=!0
q.aB(s)}q.sbj(!1)
q.sc3(!1)
p=new M.ci()
p.a=!0
u=O.jV(u)
p.e=u
u.bl(p.gd6(),p.gd8())
p.y=p.x=p.r=p.f=null
o=X.lu(g)
n=new X.cz()
n.c=1.0471975511965976
n.d=0.1
n.e=2000
n.sav(g)
u=n.c
if(!(Math.abs(u-1.0471975511965976)<$.E().a)){n.c=1.0471975511965976
u=new D.G("fov",u,1.0471975511965976)
u.b=!0
n.ag(u)}u=n.d
if(!(Math.abs(u-0.1)<$.E().a)){n.d=0.1
u=new D.G("near",u,0.1)
u.b=!0
n.ag(u)}u=n.e
if(!(Math.abs(u-2000)<$.E().a)){n.e=2000
u=new D.G("far",u,2000)
u.b=!0
n.ag(u)}u=p.b
if(u!==n){if(u!=null)u.gD().N(0,p.ga3())
m=p.b
p.b=n
n.gD().t(0,p.ga3())
u=new D.G("camera",m,p.b)
u.b=!0
p.a7(u)}u=p.c
if(u!==o){if(u!=null)u.gD().N(0,p.ga3())
m=p.c
p.c=o
o.gD().t(0,p.ga3())
u=new D.G("target",m,p.c)
u.b=!0
p.a7(u)}p.scm(g)
u=p.e
s=[H.ac(u,0)]
if(u.dC(H.c([t],s))){r=u.a
l=r.length
r.push(t)
u.d3(l,H.c([t],s))}p.scm(q)
u=p.b
k=V.aO(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
s=new U.ce()
s.a=k
u.sav(s)
u=document
j=u.getElementById(h)
if(j==null)H.L(P.Q("Failed to find an element with the identifier, testCanvas."))
i=E.m4(j,!0,!0,!0,!1)
s=i.d
if(s!==p){if(s!=null)s.gD().N(0,i.gbq())
i.d=p
p.gD().t(0,i.gbq())
i.br()}s=new V.eb(f)
u=u.getElementById(f)
s.c=u
if(u==null)H.L("Failed to find controls for CheckGroup")
s.d=H.c([],[W.ed])
s.bM(0,"grey",new Y.j1(q),!0)
s.dZ(0,"invert",new Y.j2(q))
u=i.Q
if(u==null)u=i.Q=D.aw()
s=u.b
u=s==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):s
u.push(new Y.j3(e,q))
V.nd(i)},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,Y]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jk.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gA:function(a){return H.bH(a)},
h:function(a){return"Instance of '"+H.f(H.bI(a))+"'"}}
J.eZ.prototype={
h:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iaU:1}
J.co.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gA:function(a){return 0}}
J.cp.prototype={
gA:function(a){return 0},
h:function(a){return String(a)},
$ilA:1}
J.fC.prototype={}
J.b8.prototype={}
J.aL.prototype={
h:function(a){var u=a[$.kR()]
if(u==null)return this.cE(a)
return"JavaScript function for "+H.f(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aJ.prototype={
bf:function(a,b){if(!!a.fixed$length)H.L(P.r("removeAt"))
if(b<0||b>=a.length)throw H.b(P.cC(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.L(P.r("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
X:function(a,b){var u,t
if(!!a.fixed$length)H.L(P.r("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.w)(b),++t)a.push(b[t])},
B:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.b(P.at(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
eu:function(a){return this.l(a,"")},
el:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.b(P.at(a))}return u},
em:function(a,b,c){return this.el(a,b,c,null)},
ek:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.b(P.at(a))}throw H.b(H.eX())},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cA:function(a,b,c){if(b<0||b>a.length)throw H.b(P.O(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.O(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.ac(a,0)])
return H.c(a.slice(b,c),[H.ac(a,0)])},
gej:function(a){if(a.length>0)return a[0]
throw H.b(H.eX())},
ga6:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.eX())},
bQ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.b(P.at(a))}return!1},
L:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
h:function(a){return P.jh(a,"[","]")},
gH:function(a){return new J.a5(a,a.length)},
gA:function(a){return H.bH(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.L(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.jb(b,u,null))
if(b<0)throw H.b(P.O(b,0,null,u,null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.b(H.bg(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.L(P.r("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bg(a,b))
a[b]=c},
$in:1,
$il:1,
$io:1}
J.jj.prototype={}
J.a5.prototype={
gu:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.b(H.w(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bx.prototype={
am:function(a,b){var u
if(typeof b!=="number")throw H.b(H.a2(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaI(b)
if(this.gaI(a)===u)return 0
if(this.gaI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaI:function(a){return a===0?1/a<0:a<0},
bV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.r(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.r(""+a+".round()"))},
co:function(a,b){var u
if(b>20)throw H.b(P.O(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaI(a))return"-"+u
return u},
ay:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.b(P.O(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.K(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.L(P.r("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.M("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
az:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bH(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.bH(a,b)},
bH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.r("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
ak:function(a,b){var u
if(a>0)u=this.bG(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dY:function(a,b){if(b<0)throw H.b(H.a2(b))
return this.bG(a,b)},
bG:function(a,b){return b>31?0:a>>>b},
$iD:1,
$iX:1}
J.cn.prototype={$it:1}
J.f_.prototype={}
J.aK.prototype={
K:function(a,b){if(b<0)throw H.b(H.bg(a,b))
if(b>=a.length)H.L(H.bg(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(b>=a.length)throw H.b(H.bg(a,b))
return a.charCodeAt(b)},
P:function(a,b){if(typeof b!=="string")throw H.b(P.jb(b,null,null))
return a+b},
ap:function(a,b,c,d){var u,t
c=P.aB(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.L(H.a2(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
V:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.O(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
U:function(a,b){return this.V(a,b,0)},
n:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.L(H.a2(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.J()
if(b<0)throw H.b(P.cC(b,null))
if(b>c)throw H.b(P.cC(b,null))
if(c>a.length)throw H.b(P.cC(c,null))
return a.substring(b,c)},
a2:function(a,b){return this.n(a,b,null)},
eY:function(a){return a.toLowerCase()},
M:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.J)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.M(" ",u)+a},
eG:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.M(c,u)},
aH:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.O(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
c0:function(a,b){return this.aH(a,b,0)},
am:function(a,b){var u
if(typeof b!=="string")throw H.b(H.a2(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gA:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ih:1}
H.k.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.K(this.a,b)},
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$al:function(){return[P.t]},
$ao:function(){return[P.t]}}
H.n.prototype={}
H.cs.prototype={
gH:function(a){return new H.aM(this,this.gk(this))},
aO:function(a,b){return this.cD(0,b)}}
H.aM.prototype={
gu:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.aV(s),q=r.gk(s)
if(t.b!=q)throw H.b(P.at(s))
u=t.c
if(typeof q!=="number")return H.y(q)
if(u>=q){t.d=null
return!1}t.d=r.w(s,u);++t.c
return!0}}
H.bz.prototype={
gH:function(a){return new H.fg(J.ar(this.a),this.b)},
gk:function(a){return J.Z(this.a)},
w:function(a,b){return this.b.$1(J.dW(this.a,b))},
$al:function(a,b){return[b]}}
H.ey.prototype={$in:1,
$an:function(a,b){return[b]}}
H.fg.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gu(t))
return!0}u.a=null
return!1},
gu:function(a){return this.a}}
H.fh.prototype={
gk:function(a){return J.Z(this.a)},
w:function(a,b){return this.b.$1(J.dW(this.a,b))},
$an:function(a,b){return[b]},
$acs:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.bQ.prototype={
gH:function(a){return new H.i0(J.ar(this.a),this.b)}}
H.i0.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gu(u)))return!0
return!1},
gu:function(a){var u=this.a
return u.gu(u)}}
H.cj.prototype={}
H.hD.prototype={
m:function(a,b,c){throw H.b(P.r("Cannot modify an unmodifiable list"))}}
H.cS.prototype={}
H.eh.prototype={
h:function(a){return P.jo(this)},
m:function(a,b,c){return H.lp()},
$iI:1}
H.ei.prototype={
gk:function(a){return this.a},
b6:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.b6(0,b))return
return this.bA(b)},
bA:function(a){return this.b[a]},
B:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.bA(s))}}}
H.hk.prototype={
a_:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fy.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f2.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hC.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j8.prototype={
$1:function(a){if(!!J.K(a).$ib0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dv.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bq.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.c6(t==null?"unknown":t)+"'"},
gf1:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.h9.prototype={}
H.h1.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c6(u)+"'"}}
H.bo.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bo))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gA:function(a){var u,t=this.c
if(t==null)u=H.bH(this.a)
else u=typeof t!=="object"?J.ja(t):H.bH(t)
return(u^H.bH(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bI(u))+"'")}}
H.e9.prototype={
h:function(a){return this.a}}
H.fN.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.a8.prototype={
gk:function(a){return this.a},
ger:function(a){return this.a===0},
gT:function(a){return new H.f7(this,[H.ac(this,0)])},
gf0:function(a){var u=this
return H.lH(u.gT(u),new H.f1(u),H.ac(u,0),H.ac(u,1))},
b6:function(a,b){var u=this.b
if(u==null)return!1
return this.cW(u,b)},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aC(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aC(r,b)
s=t==null?null:t.b
return s}else return q.ep(b)},
ep:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bC(r,s.c1(a))
t=s.c2(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.bu(u==null?s.b=s.aY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.bu(t==null?s.c=s.aY():t,b,c)}else s.eq(b,c)},
eq:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.aY()
u=r.c1(a)
t=r.bC(q,u)
if(t==null)r.b0(q,u,[r.aZ(a,b)])
else{s=r.c2(t,a)
if(s>=0)t[s].b=b
else t.push(r.aZ(a,b))}},
B:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.b(P.at(u))
t=t.c}},
bu:function(a,b,c){var u=this.aC(a,b)
if(u==null)this.b0(a,b,this.aZ(b,c))
else u.b=c},
d2:function(){this.r=this.r+1&67108863},
aZ:function(a,b){var u,t=this,s=new H.f6(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.d2()
return s},
c1:function(a){return J.ja(a)&0x3ffffff},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
h:function(a){return P.jo(this)},
aC:function(a,b){return a[b]},
bC:function(a,b){return a[b]},
b0:function(a,b,c){a[b]=c},
d_:function(a,b){delete a[b]},
cW:function(a,b){return this.aC(a,b)!=null},
aY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b0(t,u,t)
this.d_(t,u)
return t}}
H.f1.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ac(u,1),args:[H.ac(u,0)]}}}
H.f6.prototype={}
H.f7.prototype={
gk:function(a){return this.a.a},
gH:function(a){var u=this.a,t=new H.f8(u,u.r)
t.c=u.e
return t}}
H.f8.prototype={
gu:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.at(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iZ.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j_.prototype={
$1:function(a){return this.a(a)}}
H.f0.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilV:1}
H.bE.prototype={$ibE:1}
H.aP.prototype={$iaP:1}
H.ct.prototype={
gk:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bF.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.D]},
$aq:function(){return[P.D]},
$il:1,
$al:function(){return[P.D]},
$io:1,
$ao:function(){return[P.D]}}
H.cu.prototype={
m:function(a,b,c){H.aq(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$il:1,
$al:function(){return[P.t]},
$io:1,
$ao:function(){return[P.t]}}
H.fq.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fr.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fs.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.ft.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.fu.prototype={
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.cv.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aq(b,a,a.length)
return a[b]}}
H.bG.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aq(b,a,a.length)
return a[b]},
$ibG:1,
$ib7:1}
H.bU.prototype={}
H.bV.prototype={}
H.bW.prototype={}
H.bX.prototype={}
P.i2.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.i1.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i3.prototype={
$0:function(){this.a.$0()}}
P.i4.prototype={
$0:function(){this.a.$0()}}
P.dB.prototype={
cO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bf(new P.iC(this,b),0),a)
else throw H.b(P.r("`setTimeout()` not found."))},
cP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bf(new P.iB(this,a,Date.now(),b),0),a)
else throw H.b(P.r("Periodic timer."))},
$icN:1}
P.iC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iB.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.cG(u,q)}s.c=r
t.d.$1(s)}}
P.b9.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.ba.prototype={
gu:function(a){var u=this.c
if(u==null)return this.b
return u.gu(u)},
p:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.p())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.b9){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.ar(u)
if(!!r.$iba){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iy.prototype={
gH:function(a){return new P.ba(this.a())}}
P.cX.prototype={}
P.cJ.prototype={}
P.h4.prototype={}
P.cN.prototype={}
P.iL.prototype={}
P.iR.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cy():s
s=this.b
if(s==null)throw H.b(t)
u=H.b(t)
u.stack=s.h(0)
throw u}}
P.ii.prototype={
eT:function(a){var u,t,s,r=null
try{if(C.f===$.ab){a.$0()
return}P.mK(r,r,this,a)}catch(s){u=H.Y(s)
t=H.jC(s)
P.kA(r,r,this,u,t)}},
eU:function(a,b){var u,t,s,r=null
try{if(C.f===$.ab){a.$1(b)
return}P.mL(r,r,this,a,b)}catch(s){u=H.Y(s)
t=H.jC(s)
P.kA(r,r,this,u,t)}},
eV:function(a,b){return this.eU(a,b,null)},
e5:function(a){return new P.ij(this,a)},
bR:function(a,b){return new P.ik(this,a,b)}}
P.ij.prototype={
$0:function(){return this.a.eT(this.b)}}
P.ik.prototype={
$1:function(a){return this.a.eV(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ie.prototype={
gH:function(a){var u=new P.db(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
L:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cV(b)
return t}},
cV:function(a){var u=this.d
if(u==null)return!1
return this.aW(this.bB(u,a),a)>=0},
t:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bv(u==null?s.b=P.ju():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bv(t==null?s.c=P.ju():t,b)}else return s.cR(0,b)},
cR:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ju()
u=s.bx(b)
t=r[u]
if(t==null)r[u]=[s.aT(b)]
else{if(s.aW(t,b)>=0)return!1
t.push(s.aT(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dK(this.c,b)
else return this.dJ(0,b)},
dJ:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bB(r,b)
t=s.aW(u,b)
if(t<0)return!1
s.bJ(u.splice(t,1)[0])
return!0},
bv:function(a,b){if(a[b]!=null)return!1
a[b]=this.aT(b)
return!0},
dK:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bJ(u)
delete a[b]
return!0},
bw:function(){this.r=1073741823&this.r+1},
aT:function(a){var u,t=this,s=new P.ig(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bw()
return s},
bJ:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bw()},
bx:function(a){return J.ja(a)&1073741823},
bB:function(a,b){return a[this.bx(b)]},
aW:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.ig.prototype={}
P.db.prototype={
gu:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.at(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eW.prototype={}
P.f9.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:2}
P.fa.prototype={$in:1,$il:1,$io:1}
P.q.prototype={
gH:function(a){return new H.aM(a,this.gk(a))},
w:function(a,b){return this.i(a,b)},
eX:function(a,b){var u,t,s=this,r=H.c([],[H.n0(s,a,"q",0)])
C.b.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.y(t)
if(!(u<t))break
t=s.i(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
eW:function(a){return this.eX(a,!0)},
eg:function(a,b,c,d){var u
P.aB(b,c,this.gk(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.jh(a,"[","]")}}
P.fd.prototype={}
P.fe.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:2}
P.R.prototype={
B:function(a,b){var u,t
for(u=J.ar(this.gT(a));u.p();){t=u.gu(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.Z(this.gT(a))},
h:function(a){return P.jo(a)},
$iI:1}
P.iD.prototype={
m:function(a,b,c){throw H.b(P.r("Cannot modify unmodifiable map"))}}
P.ff.prototype={
i:function(a,b){return J.jL(this.a,b)},
m:function(a,b,c){J.j9(this.a,b,c)},
B:function(a,b){J.jM(this.a,b)},
gk:function(a){return J.Z(this.a)},
h:function(a){return J.a3(this.a)},
$iI:1}
P.cT.prototype={}
P.im.prototype={
X:function(a,b){var u
for(u=J.ar(b);u.p();)this.t(0,u.gu(u))},
h:function(a){return P.jh(this,"{","}")},
w:function(a,b){var u,t,s
P.k8(b,"index")
for(u=P.mm(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.b(P.B(b,this,"index",null,t))},
$in:1,
$il:1}
P.dc.prototype={}
P.dG.prototype={}
P.e5.prototype={
ey:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aB(a0,a1,b.length)
u=$.l5()
if(typeof a1!=="number")return H.y(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.v(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.iX(C.a.v(b,n))
j=H.iX(C.a.v(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.K("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.M("")
g=r.a+=C.a.n(b,s,t)
r.a=g+H.b4(m)
s=n
continue}}throw H.b(P.J("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.n(b,s,a1)
f=g.length
if(q>=0)P.jQ(b,p,a1,q,o,f)
else{e=C.c.az(f-1,4)+1
if(e===1)throw H.b(P.J(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.ap(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.jQ(b,p,a1,q,o,d)
else{e=C.c.az(d,4)
if(e===1)throw H.b(P.J(c,b,a1))
if(e>1)b=C.a.ap(b,a1,a1,e===2?"==":"=")}return b}}
P.e6.prototype={}
P.ee.prototype={}
P.ej.prototype={}
P.eA.prototype={}
P.eS.prototype={
h:function(a){return this.a}}
P.eR.prototype={
cX:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.M("")
if(r>b)q.a+=C.a.n(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lh(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hL.prototype={
gef:function(){return C.K}}
P.hN.prototype={
b7:function(a){var u,t,s,r=P.aB(0,null,a.length)
if(typeof r!=="number")return r.W()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iJ(t)
if(s.d1(a,0,r)!==r)s.bL(J.lc(a,r-1),0)
return new Uint8Array(t.subarray(0,H.mD(0,s.b,t.length)))}}
P.iJ.prototype={
bL:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
d1:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.K(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.v(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bL(r,C.a.v(a,p)))s=p}else if(r<=2047){q=n.b
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
P.hM.prototype={
b7:function(a){var u,t,s,r,q,p,o,n,m=P.m8(!1,a,0,null)
if(m!=null)return m
u=P.aB(0,null,J.Z(a))
t=P.kC(a,0,u)
if(t>0){s=P.bL(a,0,t)
if(t===u)return s
r=new P.M(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.M("")
o=new P.iI(!1,r)
o.c=p
o.e7(a,q,u)
if(o.e>0){H.L(P.J("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.b4(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iI.prototype={
e7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.aV(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.aP()
if((r&192)!==128){q=P.J(k+C.c.ay(r,16),a,s)
throw H.b(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.t,q)
if(j<=C.t[q]){q=P.J("Overlong encoding of 0x"+C.c.ay(j,16),a,s-h-1)
throw H.b(q)}if(j>1114111){q=P.J("Character outside valid Unicode range: 0x"+C.c.ay(j,16),a,s-h-1)
throw H.b(q)}if(!l.c||j!==65279)t.a+=H.b4(j)
l.c=!1}if(typeof c!=="number")return H.y(c)
q=s<c
for(;q;){p=P.kC(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bL(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.J()
if(r<0){m=P.J("Negative UTF-8 code unit: -0x"+C.c.ay(-r,16),a,n-1)
throw H.b(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.J(k+C.c.ay(r,16),a,n-1)
throw H.b(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aU.prototype={}
P.au.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
am:function(a,b){return C.c.am(this.a,b.a)},
gA:function(a){var u=this.a
return(u^C.c.ak(u,30))&1073741823},
h:function(a){var u=this,t=P.lq(H.lR(u)),s=P.cf(H.lP(u)),r=P.cf(H.lL(u)),q=P.cf(H.lM(u)),p=P.cf(H.lO(u)),o=P.cf(H.lQ(u)),n=P.lr(H.lN(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.aH.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gA:function(a){return C.c.gA(this.a)},
am:function(a,b){return C.c.am(this.a,b.a)},
h:function(a){var u,t,s,r=new P.ex(),q=this.a
if(q<0)return"-"+new P.aH(0-q).h(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.ew().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.ew.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ex.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b0.prototype={}
P.cy.prototype={
h:function(a){return"Throw of null."}}
P.a4.prototype={
gaV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaU:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaV()+o+u
if(!q.a)return t
s=q.gaU()
r=P.jg(q.b)
return t+s+": "+r}}
P.b5.prototype={
gaV:function(){return"RangeError"},
gaU:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.eT.prototype={
gaV:function(){return"RangeError"},
gaU:function(){var u,t=this.b
if(typeof t!=="number")return t.J()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.hE.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hA.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bK.prototype={
h:function(a){return"Bad state: "+this.a}}
P.eg.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jg(u)+"."}}
P.fB.prototype={
h:function(a){return"Out of Memory"},
$ib0:1}
P.cH.prototype={
h:function(a){return"Stack Overflow"},
$ib0:1}
P.eo.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d4.prototype={
h:function(a){return"Exception: "+this.a}}
P.eL.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.n(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.v(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.K(f,q)
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
k=""}j=C.a.n(f,m,n)
return h+l+j+k+"\n"+C.a.M(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.eN.prototype={}
P.t.prototype={}
P.l.prototype={
aO:function(a,b){return new H.bQ(this,b,[H.kI(this,"l",0)])},
gk:function(a){var u,t=this.gH(this)
for(u=0;t.p();)++u
return u},
gae:function(a){var u,t=this.gH(this)
if(!t.p())throw H.b(H.eX())
u=t.gu(t)
if(t.p())throw H.b(H.lx())
return u},
w:function(a,b){var u,t,s
P.k8(b,"index")
for(u=this.gH(this),t=0;u.p();){s=u.gu(u)
if(b===t)return s;++t}throw H.b(P.B(b,this,"index",null,t))},
h:function(a){return P.lw(this,"(",")")}}
P.eY.prototype={}
P.o.prototype={$in:1,$il:1}
P.I.prototype={}
P.aQ.prototype={
gA:function(a){return P.S.prototype.gA.call(this,this)},
h:function(a){return"null"}}
P.X.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
q:function(a,b){return this===b},
gA:function(a){return H.bH(this)},
h:function(a){return"Instance of '"+H.f(H.bI(this))+"'"},
toString:function(){return this.h(this)}}
P.h.prototype={}
P.M.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hJ.prototype={
$2:function(a,b){var u,t,s,r=J.c4(b).c0(b,"=")
if(r===-1){if(b!=="")J.j9(a,P.jy(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.n(b,0,r)
t=C.a.a2(b,r+1)
s=this.a
J.j9(a,P.jy(u,0,u.length,s,!0),P.jy(t,0,t.length,s,!0))}return a}}
P.hG.prototype={
$2:function(a,b){throw H.b(P.J("Illegal IPv4 address, "+a,this.a,b))}}
P.hH.prototype={
$2:function(a,b){throw H.b(P.J("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hI.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dU(C.a.n(this.b,a,b),null,16)
if(typeof u!=="number")return u.J()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bb.prototype={
gcs:function(){return this.b},
gb9:function(a){var u=this.c
if(u==null)return""
if(C.a.U(u,"["))return C.a.n(u,1,u.length-1)
return u},
gaJ:function(a){var u=this.d
if(u==null)return P.kt(this.a)
return u},
gbe:function(a){var u=this.f
return u==null?"":u},
gbW:function(){var u=this.r
return u==null?"":u},
ci:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.U(u,"/"))u="/"+u
s=P.jw(null,0,0,b)
return new P.bb(q,o,m,n,u,s,r.r)},
gaL:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.cT(P.ki(t==null?"":t),[u,u])
t=u}return t},
gbX:function(){return this.c!=null},
gc_:function(){return this.f!=null},
gbY:function(){return this.r!=null},
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
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.K(b).$ijr)if(s.a==b.gaR())if(s.c!=null===b.gbX())if(s.b==b.gcs())if(s.gb9(s)==b.gb9(b))if(s.gaJ(s)==b.gaJ(b))if(s.e===b.gcc(b)){u=s.f
t=u==null
if(!t===b.gc_()){if(t)u=""
if(u===b.gbe(b)){u=s.r
t=u==null
if(!t===b.gbY()){if(t)u=""
u=u===b.gbW()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gA:function(a){var u=this.z
return u==null?this.z=C.a.gA(this.h(0)):u},
$ijr:1,
gaR:function(){return this.a},
gcc:function(a){return this.e}}
P.iE.prototype={
$1:function(a){throw H.b(P.J("Invalid port",this.a,this.b+1))}}
P.iF.prototype={
$1:function(a){return P.dH(C.V,a,C.e,!1)}}
P.iH.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.dH(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.dH(C.h,b,C.e,!0))}}}
P.iG.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.ar(b),t=this.a;u.p();)t.$2(a,u.gu(u))}}
P.hF.prototype={
gcr:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.aH(u,"?",o)
s=u.length
if(t>=0){r=P.c1(u,t+1,s,C.j,!1)
s=t}else r=p
return q.c=new P.i8("data",p,p,p,P.c1(u,o,s,C.x,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iN.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iM.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.le(u,0,96,b)
return u},
$S:13}
P.iO.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.v(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.iP.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.v(b,0),t=C.a.v(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.iq.prototype={
gbX:function(){return this.c>0},
gbZ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.P()
t=this.e
if(typeof t!=="number")return H.y(t)
t=u+1<t
u=t}else u=!1
return u},
gc_:function(){var u=this.f
if(typeof u!=="number")return u.J()
return u<this.r},
gbY:function(){return this.r<this.a.length},
gbD:function(){return this.b===4&&C.a.U(this.a,"http")},
gbE:function(){return this.b===5&&C.a.U(this.a,"https")},
gaR:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gbD())q=t.x="http"
else if(t.gbE()){t.x="https"
q="https"}else if(q===4&&C.a.U(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.U(t.a,r)){t.x=r
q=r}else{q=C.a.n(t.a,0,q)
t.x=q}return q},
gcs:function(){var u=this.c,t=this.b+3
return u>t?C.a.n(this.a,t,u-1):""},
gb9:function(a){var u=this.c
return u>0?C.a.n(this.a,u,this.d):""},
gaJ:function(a){var u,t=this
if(t.gbZ()){u=t.d
if(typeof u!=="number")return u.P()
return P.dU(C.a.n(t.a,u+1,t.e),null,null)}if(t.gbD())return 80
if(t.gbE())return 443
return 0},
gcc:function(a){return C.a.n(this.a,this.e,this.f)},
gbe:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.J()
return u<t?C.a.n(this.a,u+1,t):""},
gbW:function(){var u=this.r,t=this.a
return u<t.length?C.a.a2(t,u+1):""},
gaL:function(){var u=this,t=u.f
if(typeof t!=="number")return t.J()
if(t>=u.r)return C.W
t=P.h
return new P.cT(P.ki(u.gbe(u)),[t,t])},
ci:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gaR(),m=n==="file",l=p.c,k=l>0?C.a.n(p.a,p.b+3,l):"",j=p.gbZ()?p.gaJ(p):o
l=p.c
if(l>0)u=C.a.n(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.n(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.U(t,"/"))t="/"+t
r=P.jw(o,0,0,b)
s=p.r
q=s<l.length?C.a.a2(l,s+1):o
return new P.bb(n,k,u,j,t,r,q)},
gA:function(a){var u=this.y
return u==null?this.y=C.a.gA(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.K(b).$ijr&&this.a===b.h(0)},
h:function(a){return this.a},
$ijr:1}
P.i8.prototype={}
W.m.prototype={}
W.dX.prototype={
gk:function(a){return a.length}}
W.dY.prototype={
h:function(a){return String(a)}}
W.dZ.prototype={
h:function(a){return String(a)}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.aZ.prototype={
cv:function(a,b,c){var u=a.getContext(b,P.mU(c))
return u},
$iaZ:1}
W.aG.prototype={
gk:function(a){return a.length}}
W.ek.prototype={
gk:function(a){return a.length}}
W.x.prototype={$ix:1}
W.br.prototype={
gk:function(a){return a.length}}
W.el.prototype={}
W.a_.prototype={}
W.ae.prototype={}
W.em.prototype={
gk:function(a){return a.length}}
W.en.prototype={
gk:function(a){return a.length}}
W.eq.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$ia6:1}
W.et.prototype={
h:function(a){return String(a)}}
W.cg.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a0,P.X]]},
$iu:1,
$au:function(){return[[P.a0,P.X]]},
$aq:function(){return[[P.a0,P.X]]},
$il:1,
$al:function(){return[[P.a0,P.X]]},
$io:1,
$ao:function(){return[[P.a0,P.X]]}}
W.ch.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaq(a))+" x "+H.f(this.gan(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.K(b)
return!!u.$ia0&&a.left===u.gc4(b)&&a.top===u.gcp(b)&&this.gaq(a)===u.gaq(b)&&this.gan(a)===u.gan(b)},
gA:function(a){return W.kr(C.d.gA(a.left),C.d.gA(a.top),C.d.gA(this.gaq(a)),C.d.gA(this.gan(a)))},
gan:function(a){return a.height},
gc4:function(a){return a.left},
gcp:function(a){return a.top},
gaq:function(a){return a.width},
$ia0:1,
$aa0:function(){return[P.X]}}
W.eu.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[P.h]},
$iu:1,
$au:function(){return[P.h]},
$aq:function(){return[P.h]},
$il:1,
$al:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.ev.prototype={
gk:function(a){return a.length}}
W.i6.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
t:function(a,b){this.a.appendChild(b)
return b},
gH:function(a){var u=this.eW(this)
return new J.a5(u,u.length)},
$an:function(){return[W.F]},
$aq:function(){return[W.F]},
$al:function(){return[W.F]},
$ao:function(){return[W.F]}}
W.F.prototype={
ge4:function(a){return new W.i9(a)},
gb5:function(a){return new W.i6(a,a.children)},
h:function(a){return a.localName},
Y:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jY
if(u==null){u=H.c([],[W.ay])
t=new W.cx(u)
u.push(W.kq(null))
u.push(W.ks())
$.jY=t
d=t}else d=u
u=$.jX
if(u==null){u=new W.dI(d)
$.jX=u
c=u}else{u.a=d
c=u}}if($.av==null){u=document
t=u.implementation.createHTMLDocument("")
$.av=t
$.jf=t.createRange()
s=$.av.createElement("base")
s.href=u.baseURI
$.av.head.appendChild(s)}u=$.av
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.av
if(!!this.$iaY)r=u.body
else{r=u.createElement(a.tagName)
$.av.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.L(C.T,a.tagName)){$.jf.selectNodeContents(r)
q=$.jf.createContextualFragment(b)}else{r.innerHTML=b
q=$.av.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.av.body
if(r==null?u!=null:r!==u)J.jO(r)
c.bk(q)
document.adoptNode(q)
return q},
e9:function(a,b,c){return this.Y(a,b,c,null)},
cz:function(a,b){a.textContent=null
a.appendChild(this.Y(a,b,null,null))},
$iF:1,
gcl:function(a){return a.tagName}}
W.ez.prototype={
$1:function(a){return!!J.K(a).$iF}}
W.i.prototype={$ii:1}
W.e.prototype={
e0:function(a,b,c,d){if(c!=null)this.cS(a,b,c,!1)},
cS:function(a,b,c,d){return a.addEventListener(b,H.bf(c,1),!1)}}
W.a7.prototype={$ia7:1}
W.bu.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.a7]},
$iu:1,
$au:function(){return[W.a7]},
$aq:function(){return[W.a7]},
$il:1,
$al:function(){return[W.a7]},
$io:1,
$ao:function(){return[W.a7]},
$ibu:1}
W.eG.prototype={
gk:function(a){return a.length}}
W.eK.prototype={
gk:function(a){return a.length}}
W.af.prototype={$iaf:1}
W.eQ.prototype={
gk:function(a){return a.length}}
W.bv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.v]},
$iu:1,
$au:function(){return[W.v]},
$aq:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]},
$io:1,
$ao:function(){return[W.v]}}
W.bw.prototype={$ibw:1}
W.ed.prototype={$iF:1,$iv:1}
W.b2.prototype={$ib2:1}
W.fb.prototype={
h:function(a){return String(a)}}
W.fi.prototype={
gk:function(a){return a.length}}
W.bC.prototype={$ibC:1}
W.fj.prototype={
i:function(a,b){return P.aE(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gT:function(a){var u=H.c([],[P.h])
this.B(a,new W.fk(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
W.fk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fl.prototype={
i:function(a,b){return P.aE(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gT:function(a){var u=H.c([],[P.h])
this.B(a,new W.fm(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
W.fm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ag.prototype={$iag:1}
W.fn.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ag]},
$iu:1,
$au:function(){return[W.ag]},
$aq:function(){return[W.ag]},
$il:1,
$al:function(){return[W.ag]},
$io:1,
$ao:function(){return[W.ag]}}
W.ah.prototype={$iah:1}
W.T.prototype={
gae:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.b(P.ka("No elements"))
if(t>1)throw H.b(P.ka("More than one element"))
return u.firstChild},
X:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gH:function(a){var u=this.a.childNodes
return new W.ck(u,u.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$an:function(){return[W.v]},
$aq:function(){return[W.v]},
$al:function(){return[W.v]},
$ao:function(){return[W.v]}}
W.v.prototype={
eO:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
eR:function(a,b){var u,t
try{u=a.parentNode
J.la(u,b,a)}catch(t){H.Y(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.cC(a):u},
dO:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cw.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.v]},
$iu:1,
$au:function(){return[W.v]},
$aq:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]},
$io:1,
$ao:function(){return[W.v]}}
W.ai.prototype={$iai:1,
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ai]},
$iu:1,
$au:function(){return[W.ai]},
$aq:function(){return[W.ai]},
$il:1,
$al:function(){return[W.ai]},
$io:1,
$ao:function(){return[W.ai]}}
W.fL.prototype={
i:function(a,b){return P.aE(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gT:function(a){var u=H.c([],[P.h])
this.B(a,new W.fM(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
W.fM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fO.prototype={
gk:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fZ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ak]},
$iu:1,
$au:function(){return[W.ak]},
$aq:function(){return[W.ak]},
$il:1,
$al:function(){return[W.ak]},
$io:1,
$ao:function(){return[W.ak]}}
W.al.prototype={$ial:1}
W.h_.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.al]},
$iu:1,
$au:function(){return[W.al]},
$aq:function(){return[W.al]},
$il:1,
$al:function(){return[W.al]},
$io:1,
$ao:function(){return[W.al]}}
W.am.prototype={$iam:1,
gk:function(a){return a.length}}
W.h2.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
B:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gT:function(a){var u=H.c([],[P.h])
this.B(a,new W.h3(u))
return u},
gk:function(a){return a.length},
$aR:function(){return[P.h,P.h]},
$iI:1,
$aI:function(){return[P.h,P.h]}}
W.h3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.a9.prototype={$ia9:1}
W.cK.prototype={
Y:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
u=W.ls("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.T(t).X(0,new W.T(u))
return t}}
W.h6.prototype={
Y:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.z.Y(u.createElement("table"),b,c,d)
u.toString
u=new W.T(u)
s=u.gae(u)
s.toString
u=new W.T(s)
r=u.gae(u)
t.toString
r.toString
new W.T(t).X(0,new W.T(r))
return t}}
W.h7.prototype={
Y:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.z.Y(u.createElement("table"),b,c,d)
u.toString
u=new W.T(u)
s=u.gae(u)
t.toString
s.toString
new W.T(t).X(0,new W.T(s))
return t}}
W.bM.prototype={$ibM:1}
W.an.prototype={$ian:1}
W.aa.prototype={$iaa:1}
W.ha.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aa]},
$iu:1,
$au:function(){return[W.aa]},
$aq:function(){return[W.aa]},
$il:1,
$al:function(){return[W.aa]},
$io:1,
$ao:function(){return[W.aa]}}
W.hb.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.an]},
$iu:1,
$au:function(){return[W.an]},
$aq:function(){return[W.an]},
$il:1,
$al:function(){return[W.an]},
$io:1,
$ao:function(){return[W.an]}}
W.hd.prototype={
gk:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.b6.prototype={$ib6:1}
W.hh.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ao]},
$iu:1,
$au:function(){return[W.ao]},
$aq:function(){return[W.ao]},
$il:1,
$al:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]}}
W.hi.prototype={
gk:function(a){return a.length}}
W.aR.prototype={}
W.hK.prototype={
h:function(a){return String(a)}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.aS.prototype={
gec:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.r("deltaY is not supported"))},
geb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.r("deltaX is not supported"))},
$iaS:1}
W.bR.prototype={
dP:function(a,b){return a.requestAnimationFrame(H.bf(b,1))},
d0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i7.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.x]},
$iu:1,
$au:function(){return[W.x]},
$aq:function(){return[W.x]},
$il:1,
$al:function(){return[W.x]},
$io:1,
$ao:function(){return[W.x]}}
W.d_.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.K(b)
return!!u.$ia0&&a.left===u.gc4(b)&&a.top===u.gcp(b)&&a.width===u.gaq(b)&&a.height===u.gan(b)},
gA:function(a){return W.kr(C.d.gA(a.left),C.d.gA(a.top),C.d.gA(a.width),C.d.gA(a.height))},
gan:function(a){return a.height},
gaq:function(a){return a.width}}
W.ic.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.af]},
$iu:1,
$au:function(){return[W.af]},
$aq:function(){return[W.af]},
$il:1,
$al:function(){return[W.af]},
$io:1,
$ao:function(){return[W.af]}}
W.dh.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.v]},
$iu:1,
$au:function(){return[W.v]},
$aq:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]},
$io:1,
$ao:function(){return[W.v]}}
W.ir.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.am]},
$iu:1,
$au:function(){return[W.am]},
$aq:function(){return[W.am]},
$il:1,
$al:function(){return[W.am]},
$io:1,
$ao:function(){return[W.am]}}
W.iw.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.a9]},
$iu:1,
$au:function(){return[W.a9]},
$aq:function(){return[W.a9]},
$il:1,
$al:function(){return[W.a9]},
$io:1,
$ao:function(){return[W.a9]}}
W.i5.prototype={
B:function(a,b){var u,t,s,r,q
for(u=this.gT(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gT:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.h,P.h]},
$aI:function(){return[P.h,P.h]}}
W.i9.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gk:function(a){return this.gT(this).length}}
W.ia.prototype={}
W.ib.prototype={
$1:function(a){return this.a.$1(a)}}
W.bS.prototype={
cL:function(a){var u
if($.bT.ger($.bT)){for(u=0;u<262;++u)$.bT.m(0,C.S[u],W.n2())
for(u=0;u<12;++u)$.bT.m(0,C.n[u],W.n3())}},
al:function(a){return $.l6().L(0,W.bs(a))},
a5:function(a,b,c){var u=$.bT.i(0,H.f(W.bs(a))+"::"+b)
if(u==null)u=$.bT.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iay:1}
W.A.prototype={
gH:function(a){return new W.ck(a,this.gk(a))}}
W.cx.prototype={
al:function(a){return C.b.bQ(this.a,new W.fw(a))},
a5:function(a,b,c){return C.b.bQ(this.a,new W.fv(a,b,c))},
$iay:1}
W.fw.prototype={
$1:function(a){return a.al(this.a)}}
W.fv.prototype={
$1:function(a){return a.a5(this.a,this.b,this.c)}}
W.dq.prototype={
cN:function(a,b,c,d){var u,t,s
this.a.X(0,c)
u=b.aO(0,new W.io())
t=b.aO(0,new W.ip())
this.b.X(0,u)
s=this.c
s.X(0,C.u)
s.X(0,t)},
al:function(a){return this.a.L(0,W.bs(a))},
a5:function(a,b,c){var u=this,t=W.bs(a),s=u.c
if(s.L(0,H.f(t)+"::"+b))return u.d.e2(c)
else if(s.L(0,"*::"+b))return u.d.e2(c)
else{s=u.b
if(s.L(0,H.f(t)+"::"+b))return!0
else if(s.L(0,"*::"+b))return!0
else if(s.L(0,H.f(t)+"::*"))return!0
else if(s.L(0,"*::*"))return!0}return!1},
$iay:1}
W.io.prototype={
$1:function(a){return!C.b.L(C.n,a)}}
W.ip.prototype={
$1:function(a){return C.b.L(C.n,a)}}
W.iz.prototype={
a5:function(a,b,c){if(this.cF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.L(0,b)
return!1}}
W.iA.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.ix.prototype={
al:function(a){var u=J.K(a)
if(!!u.$ibJ)return!1
u=!!u.$ij
if(u&&W.bs(a)==="foreignObject")return!1
if(u)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.a.U(b,"on"))return!1
return this.al(a)},
$iay:1}
W.ck.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.jL(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gu:function(a){return this.d}}
W.ay.prototype={}
W.il.prototype={}
W.dI.prototype={
bk:function(a){new W.iK(this).$2(a,null)},
as:function(a,b){if(b==null)J.jO(a)
else b.removeChild(a)},
dR:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lf(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.Y(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.Y(r)}try{s=W.bs(a)
this.dQ(a,b,p,t,s,o,n)}catch(r){if(H.Y(r) instanceof P.a4)throw r
else{this.as(a,b)
window
q="Removing corrupted element "+H.f(t)
if(typeof console!="undefined")window.console.warn(q)}}},
dQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.as(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.al(a)){p.as(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a5(a,"is",g)){p.as(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gT(f)
t=H.c(u.slice(0),[H.ac(u,0)])
for(s=f.gT(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.a5(a,J.li(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.K(a).$ibM)p.bk(a.content)}}
W.iK.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dR(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.as(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.Y(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.cZ.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dw.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.c_.prototype={}
W.c0.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
P.is.prototype={
b8:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
aN:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.K(a)
if(!!u.$iau)return new Date(a.a)
if(!!u.$ilV)throw H.b(P.hB("structured clone of RegExp"))
if(!!u.$ia7)return a
if(!!u.$iaX)return a
if(!!u.$ibu)return a
if(!!u.$ibw)return a
if(!!u.$ibE||!!u.$iaP||!!u.$ibC)return a
if(!!u.$iI){t=p.b8(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.B(a,new P.iu(o,p))
return o.a}if(!!u.$io){t=p.b8(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.e8(a,t)}if(!!u.$ilA){t=p.b8(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.en(a,new P.iv(o,p))
return o.b}throw H.b(P.hB("structured clone of other type"))},
e8:function(a,b){var u,t=J.aV(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.y(s)
u=0
for(;u<s;++u){q=this.aN(t.i(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.iu.prototype={
$2:function(a,b){this.a.a[a]=this.b.aN(b)},
$S:2}
P.iv.prototype={
$2:function(a,b){this.a.b[a]=this.b.aN(b)},
$S:2}
P.iS.prototype={
$2:function(a,b){this.a[a]=b},
$S:2}
P.it.prototype={
en:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.eH.prototype={
gaD:function(){var u=this.b,t=H.kI(u,"q",0)
return new H.bz(new H.bQ(u,new P.eI(),[t]),new P.eJ(),[t,W.F])},
m:function(a,b,c){var u=this.gaD()
J.lg(u.b.$1(J.dW(u.a,b)),c)},
t:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.Z(this.gaD().a)},
i:function(a,b){var u=this.gaD()
return u.b.$1(J.dW(u.a,b))},
gH:function(a){var u=P.jn(this.gaD(),!1,W.F)
return new J.a5(u,u.length)},
$an:function(){return[W.F]},
$aq:function(){return[W.F]},
$al:function(){return[W.F]},
$ao:function(){return[W.F]}}
P.eI.prototype={
$1:function(a){return!!J.K(a).$iF}}
P.eJ.prototype={
$1:function(a){return H.dV(a,"$iF")}}
P.ih.prototype={}
P.a0.prototype={}
P.ax.prototype={$iax:1}
P.f4.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.ax]},
$aq:function(){return[P.ax]},
$il:1,
$al:function(){return[P.ax]},
$io:1,
$ao:function(){return[P.ax]}}
P.az.prototype={$iaz:1}
P.fz.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.az]},
$aq:function(){return[P.az]},
$il:1,
$al:function(){return[P.az]},
$io:1,
$ao:function(){return[P.az]}}
P.fF.prototype={
gk:function(a){return a.length}}
P.bJ.prototype={$ibJ:1}
P.h5.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.h]},
$aq:function(){return[P.h]},
$il:1,
$al:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.j.prototype={
gb5:function(a){return new P.eH(a,new W.T(a))},
Y:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.ay])
p.push(W.kq(null))
p.push(W.ks())
p.push(new W.ix())
c=new W.dI(new W.cx(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.p).e9(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.T(s)
q=p.gae(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.aC.prototype={$iaC:1}
P.hj.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.aC]},
$aq:function(){return[P.aC]},
$il:1,
$al:function(){return[P.aC]},
$io:1,
$ao:function(){return[P.aC]}}
P.d9.prototype={}
P.da.prototype={}
P.dk.prototype={}
P.dl.prototype={}
P.dx.prototype={}
P.dy.prototype={}
P.dE.prototype={}
P.dF.prototype={}
P.b7.prototype={$in:1,
$an:function(){return[P.t]},
$il:1,
$al:function(){return[P.t]},
$io:1,
$ao:function(){return[P.t]}}
P.e1.prototype={
gk:function(a){return a.length}}
P.e2.prototype={
i:function(a,b){return P.aE(a.get(b))},
B:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gT:function(a){var u=H.c([],[P.h])
this.B(a,new P.e3(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
P.e3.prototype={
$2:function(a,b){return this.a.push(a)}}
P.e4.prototype={
gk:function(a){return a.length}}
P.aW.prototype={}
P.fA.prototype={
gk:function(a){return a.length}}
P.cY.prototype={}
P.h0.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return P.aE(a.item(b))},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[[P.I,,,]]},
$aq:function(){return[[P.I,,,]]},
$il:1,
$al:function(){return[[P.I,,,]]},
$io:1,
$ao:function(){return[[P.I,,,]]}}
P.dt.prototype={}
P.du.prototype={}
K.as.prototype={
aa:function(a,b){return!0},
h:function(a){return"all"}}
K.cl.prototype={
aa:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)if(u[s].aa(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.aN.prototype={}
K.U.prototype={
aa:function(a,b){return!this.cB(0,b)},
h:function(a){return"!["+this.bp(0)+"]"}}
K.fG.prototype={
aa:function(a,b){if(typeof b!=="number")return H.y(b)
return this.a<=b&&this.b>=b},
h:function(a){var u=H.b4(this.a),t=H.b4(this.b)
return u+".."+t}}
K.fP.prototype={
cI:function(a){var u,t,s,r
if(a.a.length<=0)throw H.b(P.Q("May not create a Set with zero characters."))
u=P.t
t=new H.a8([u,P.aU])
for(s=new H.aM(a,a.gk(a));s.p();)t.m(0,s.d,!0)
r=P.jn(t.gT(t),!0,u)
if(!!r.immutable$list)H.L(P.r("sort"))
H.m2(r,J.mG())
this.a=r},
aa:function(a,b){return C.b.L(this.a,b)},
h:function(a){return P.bL(this.a,0,null)}}
L.cI.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cQ(this.a.j(0,b))
r.a=H.c([],[K.aN])
r.c=!1
this.c.push(r)
return r},
ei:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
if(r.aa(0,a))return r}return},
h:function(a){return this.b},
bI:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.L(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gT(n),n=n.gH(n);n.p();){t=n.gu(n)
o+="\n"
s=p.d.c.i(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.L(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.w)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cO.prototype={
h:function(a){var u=H.jG(this.b,"\n","\\n"),t=H.jG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cP.prototype={
ad:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.w)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
L.he.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new L.cI(this,b)
u.c=H.c([],[L.cQ])
this.a.m(0,b,u)}return u},
F:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new L.cP(a)
u=P.h
t.c=new H.a8([u,u])
this.b.m(0,a,t)}return t},
bi:function(a){return this.eZ(a)},
eZ:function(a){var u=this
return P.mI(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$bi(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.t]
e=H.c([],f)
d=H.c([],f)
c=H.c([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.bf(c,0)
else{if(!t.p()){s=3
break}l=t.d}d.push(l);++o
k=g.ei(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.bL(d,0,null)
throw H.b(P.Q("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.L(P.r("removeRange"))
P.aB(0,m,d.length)
d.splice(0,m-0)
C.b.X(c,d)
d=H.c([],f)
e=H.c([],f)
g=u.d
s=!u.c.L(0,p.a)?7:8
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
if(g.d!=null){j=P.bL(e,0,null)
i=g.d
h=i.c.i(0,j)
p=new L.cO(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.L(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.mk()
case 1:return P.ml(q)}}},L.cO)},
h:function(a){var u,t=new P.M(""),s=this.d
if(s!=null)t.a=s.bI()+"\n"
for(s=this.a,s=s.gf0(s),s=s.gH(s);s.p();){u=s.gu(s)
if(u!=this.d)t.a+=u.bI()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cQ.prototype={
h:function(a){return this.b.b+": "+this.bp(0)}}
O.ef.prototype={
bl:function(a,b){this.b=null
this.c=a},
dC:function(a){return!0},
d3:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gH:function(a){var u=this.a
return new J.a5(u,u.length)},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$il:1}
O.bB.prototype={
gk:function(a){return this.a.length},
gD:function(){var u=this.b
return u==null?this.b=D.aw():u},
af:function(){var u=this.b
if(u!=null)u.Z(null)},
gau:function(a){var u=this.a
if(u.length>0)return C.b.ga6(u)
else return V.k1()},
cf:function(a){var u=this.a
if(a==null)u.push(V.k1())
else u.push(a)
this.af()},
bd:function(){var u=this.a
if(u.length>0){u.pop()
this.af()}}}
E.e7.prototype={}
E.aI.prototype={
sbn:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gD().N(0,s.gc9())
u=s.c
if(u!=null)u.gD().t(0,s.gc9())
t=new D.G("shape",r,s.c)
t.b=!0
s.ab(t)}},
sav:function(a){var u,t,s=this
if(!J.H(s.r,a)){u=s.r
if(u!=null)u.gD().N(0,s.gc7())
if(a!=null)a.gD().t(0,s.gc7())
s.r=a
t=new D.G("mover",u,a)
t.b=!0
s.ab(t)}},
cq:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.sct(m.a+m.d*b.y)
m.scd(0,m.b+m.e*b.y)
m.sck(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aO(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.M(0,V.aO(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.M(0,V.aO(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aM(0)}q=m.x}else q=null
if(!J.H(q,n.x)){p=n.x
n.x=q
o=new D.G("matrix",p,q)
o.b=!0
n.ab(o)}for(m=n.y.a,m=new J.a5(m,m.length);m.p();)m.d.cq(0,b)},
ao:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gau(n))
else n.a.push(m.M(0,n.gau(n)))
n.af()
a.cg(o.f)
n=a.dy
u=(n&&C.b).ga6(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.i(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.es(m,s)
t.cJ(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bz(r,35633)
t.f=t.bz(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!m.getProgramParameter(t.r,35714)){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.L(P.Q("Failed to link shader: "+H.f(p)))}t.dV()
t.dX()
t.z=t.x.i(0,"posAttr")
t.Q=H.dV(t.y.i(0,"width"),"$ibN")
t.ch=H.dV(t.y.i(0,"stop"),"$ibN")
t.cx=H.dV(t.y.i(0,"viewObjMat"),"$ibO")
t.cy=H.dV(t.y.i(0,"projMat"),"$ibO")
if(s.length===0)H.L(P.Q("May not cache a shader with no name."))
if(a.fr.b6(0,s))H.L(P.Q('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.m(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.cb)?o.e=null:m)==null){n=o.d.e6(new Z.i_(a.a),$.aF())
m=n.eh($.aF())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.ee()
s=u.b
r=u.c
q=n.Q
q.a.uniform1f(q.d,s-r)
r=u.c
s=n.ch
s.a.uniform1f(s.d,r)
r=a.cy
r=r.gau(r)
s=n.cy
s.toString
s.bm(r.cn(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gau(s)
r=a.dx
r=a.cx=s.M(0,r.gau(r))
s=r}n=n.cx
n.toString
n.bm(s.cn(0,!0))
if(u.e)m.frontFace(2304)
n=o.e
n.b2(a)
n.ao(a)
n.f_(a)
if(u.e)m.frontFace(2305)
n=u.a
n.toString
m.useProgram(null)
n.x.ed()}for(n=o.y.a,n=new J.a5(n,n.length);n.p();)n.d.ao(a)
a.ce()
a.dx.bd()},
ab:function(a){var u=this.z
if(u!=null)u.Z(a)},
a0:function(){return this.ab(null)},
ca:function(a){this.e=null
this.ab(a)},
eF:function(){return this.ca(null)},
c8:function(a){this.ab(a)},
eE:function(){return this.c8(null)},
c6:function(a){this.ab(a)},
eB:function(){return this.c6(null)},
eA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gc5(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.w)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bt()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a0()},
eD:function(a,b){var u,t
for(u=b.gH(b),t=this.gc5();u.p();)u.gu(u).gD().N(0,t)
this.a0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fH.prototype={
cH:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.au(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bB()
t=[V.bA]
u.a=H.c([],t)
u.gD().t(0,new E.fI(s))
s.cy=u
u=new O.bB()
u.a=H.c([],t)
u.gD().t(0,new E.fJ(s))
s.db=u
u=new O.bB()
u.a=H.c([],t)
u.gD().t(0,new E.fK(s))
s.dx=u
u=H.c([],[O.cL])
s.dy=u
u.push(null)
s.fr=new H.a8([P.h,A.cF])},
cg:function(a){var u=this.dy
u.push(a==null?(u&&C.b).ga6(u):a)},
ce:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fI.prototype={
$1:function(a){}}
E.fJ.prototype={
$1:function(a){this.a.cx=null}}
E.fK.prototype={
$1:function(a){this.a.cx=null}}
E.cM.prototype={
bs:function(a){this.cj()},
br:function(){return this.bs(null)},
geo:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.jW(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.au(s,!1)
return u/r},
bF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.M()
if(typeof r!=="number")return H.y(r)
u=C.d.bV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.M()
t=C.d.bV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kd(C.l,s.geS())}},
cj:function(){if(!this.cx){this.cx=!0
var u=window
C.B.d0(u)
C.B.dP(u,W.kD(new E.hc(this),P.X))}},
eQ:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.jW(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.af()
r=s.db
C.b.sk(r.a,0)
r.af()
r=s.dx
C.b.sk(r.a,0)
r.af()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.ao(p.e)}s=p.Q
if(s!=null)s.Z(null)}catch(q){u=H.Y(q)
t=H.jC(q)
P.jF("Error: "+H.f(u))
P.jF("Stack: "+H.f(t))
throw H.b(u)}}}
E.hc.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.eQ()}}}
Z.cW.prototype={}
Z.ca.prototype={
b2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.Y(s)
t=P.Q('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.b(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.i_.prototype={}
Z.cb.prototype={
eh:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b2(a)},
f_:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ao:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.h],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.l(p,", ")+"\nAttrs:   "+C.b.l(r,", ")}}
Z.cm.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bI(this.c))+"'")+"]"}}
Z.cV.prototype={
gbo:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.bk().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=2
if((u&$.bm().a)!==0)t+=3
if((u&$.c7().a)!==0)t+=3
if((u&$.c8().a)!==0)t+=4
if((u&$.bn().a)!==0)++t
return(u&$.bi().a)!==0?t+4:t},
e3:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0)if(u===a)return t
return $.l4()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cV))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.aF().a)!==0)u.push("Pos")
if((t&$.bk().a)!==0)u.push("Norm")
if((t&$.bj().a)!==0)u.push("Binm")
if((t&$.bl().a)!==0)u.push("Txt2D")
if((t&$.bm().a)!==0)u.push("TxtCube")
if((t&$.c7().a)!==0)u.push("Clr3")
if((t&$.c8().a)!==0)u.push("Clr4")
if((t&$.bn().a)!==0)u.push("Weight")
if((t&$.bi().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.l(u,"|")}}
D.ea.prototype={}
D.bt.prototype={
t:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.L(s,b)
if(s===!0){s=t.a
u=(s&&C.b).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.L(s,b)
if(s===!0){s=t.b
u=(s&&C.b).N(s,b)||u}return u},
Z:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.B(P.jn(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eC(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.B(u,new D.eD(q))}return!0},
aM:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.Z(u)}}}}
D.eC.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eD.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.eU.prototype={}
D.eV.prototype={}
D.G.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cc.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cc))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cq.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.f3.prototype={
eL:function(a){this.d.t(0,a.a)
return!1},
eH:function(a){this.d.N(0,a.a)
return!1}}
X.fc.prototype={
bc:function(a,b){this.r=a.a
return!1},
ax:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cw()
if(typeof u!=="number")return u.aP()
this.r=(u&~t)>>>0
return!1},
aw:function(a,b){return!1},
eM:function(a){return!1},
dn:function(a,b,c){return}}
X.bD.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bD))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fo.prototype={
bc:function(a,b){this.f=a.a
return!1},
ax:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cw()
if(typeof u!=="number")return u.aP()
this.f=(u&~t)>>>0
return!1},
aw:function(a,b){return!1},
eN:function(a,b){return!1}}
X.hg.prototype={
eK:function(a){return!1},
eI:function(a){return!1},
eJ:function(a){return!1}}
X.cU.prototype={
by:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.bD(t,a.altKey,a.shiftKey))},
aj:function(a){a.shiftKey},
b1:function(a){a.shiftKey},
a9:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.W()
u=t.top
if(typeof r!=="number")return r.W()
return new V.aj(s-q,r-u)},
ar:function(a){return new V.aD(a.movementX,a.movementY)},
b_:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.aj])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
q=C.d.a1(r.pageX)
C.d.a1(r.pageY)
p=o.left
C.d.a1(r.pageX)
n.push(new V.aj(q-p,C.d.a1(r.pageY)-o.top))}return n},
a8:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cc(u,new X.bD(t,a.altKey,a.shiftKey))},
aX:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.W()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.W()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
di:function(a){this.f=!0},
d5:function(a){this.f=!1},
dc:function(a){if(this.f&&this.aX(a))a.preventDefault()},
dm:function(a){var u
if(!this.f)return
u=this.by(a)
this.b.eL(u)},
dk:function(a){var u
if(!this.f)return
u=this.by(a)
this.b.eH(u)},
dr:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aj(a)
if(r.x){u=r.a8(a)
t=r.ar(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a8(a)
s=r.a9(a)
if(r.c.bc(u,s))a.preventDefault()},
dv:function(a){var u,t,s,r=this
r.aj(a)
u=r.a8(a)
if(r.x){t=r.ar(a)
if(r.d.ax(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.ax(u,s))a.preventDefault()},
dg:function(a){var u,t,s,r=this
if(!r.aX(a)){r.aj(a)
u=r.a8(a)
if(r.x){t=r.ar(a)
if(r.d.ax(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.ax(u,s))a.preventDefault()}},
dt:function(a){var u,t,s,r=this
r.aj(a)
u=r.a8(a)
if(r.x){t=r.ar(a)
if(r.d.aw(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.aw(u,s))a.preventDefault()},
de:function(a){var u,t,s,r=this
if(!r.aX(a)){r.aj(a)
u=r.a8(a)
if(r.x){t=r.ar(a)
if(r.d.aw(u,t))a.preventDefault()
return}if(r.r)return
s=r.a9(a)
if(r.c.aw(u,s))a.preventDefault()}},
dz:function(a){var u,t,s=this
s.aj(a)
u=new V.aD((a&&C.A).geb(a),C.A.gec(a)).O(0,180)
if(s.x){if(s.d.eM(u))a.preventDefault()
return}if(s.r)return
t=s.a9(a)
if(s.c.eN(u,t))a.preventDefault()},
dB:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a8(s.y)
t=s.a9(s.y)
s.d.dn(u,t,r)}},
dI:function(a){var u,t=this
t.a.focus()
t.f=!0
t.b1(a)
u=t.b_(a)
if(t.e.eK(u))a.preventDefault()},
dE:function(a){var u
this.b1(a)
u=this.b_(a)
if(this.e.eI(u))a.preventDefault()},
dG:function(a){var u
this.b1(a)
u=this.b_(a)
if(this.e.eJ(u))a.preventDefault()}}
V.b_.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.eB.prototype={}
V.bA.prototype={
cn:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
M:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aO(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bA))return!1
u=b.a
t=$.E().a
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
h:function(a){return this.I()},
E:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.iV(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iV(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iV(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iV(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
I:function(){return this.E("")}}
V.aj.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.aA.prototype={
W:function(a,b){return new V.aA(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a,b){return new V.aA(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.cD.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cD))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.aD.prototype={
ba:function(a){var u,t=this.a
if(typeof t!=="number")return t.M()
u=this.b
if(typeof u!=="number")return u.M()
return Math.sqrt(t*t+u*u)},
O:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.kj
return u==null?$.kj=new V.aD(0,0):u}u=this.a
if(typeof u!=="number")return u.O()
t=this.b
if(typeof t!=="number")return t.O()
return new V.aD(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=this.a
s=$.E()
s.toString
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.y(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.y(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.N.prototype={
ba:function(a){return Math.sqrt(this.S(this))},
S:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
at:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
P:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aQ:function(a){return new V.N(-this.a,-this.b,-this.c)},
M:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
O:function(a,b){if(Math.abs(b-0)<$.E().a)return V.hO()
return new V.N(this.a/b,this.b/b,this.c/b)},
es:function(){var u=$.E().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.ce.prototype={
gD:function(){var u=this.b
return u==null?this.b=D.aw():u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
return J.H(this.a,b.a)},
h:function(a){return"Constant: "+this.a.E("          ")}}
U.fp.prototype={}
U.cE.prototype={
gD:function(){var u=this.y
return u==null?this.y=D.aw():u},
ai:function(a){var u=this.y
if(u!=null)u.Z(a)},
sct:function(a){var u
a=V.jH(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.E().a)){this.a=a
u=new D.G("yaw",u,a)
u.b=!0
this.ai(u)}},
scd:function(a,b){var u
b=V.jH(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.E().a)){this.b=b
u=new D.G("pitch",u,b)
u.b=!0
this.ai(u)}},
sck:function(a){var u
a=V.jH(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.E().a)){this.c=a
u=new D.G("roll",u,a)
u.b=!0
this.ai(u)}},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cE))return!1
u=r.a
t=b.a
s=$.E().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotator: ["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+"], ["+V.z(u.d,3,0)+", "+V.z(u.e,3,0)+", "+V.z(u.f,3,0)+"]"}}
M.ci.prototype={
a7:function(a){var u=this.y
if(u!=null)u.Z(a)},
cM:function(){return this.a7(null)},
d7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga3(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.w)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bt()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.eU()
u.b=!0
this.a7(u)},
d9:function(a,b){var u,t
for(u=b.gH(b),t=this.ga3();u.p();)u.gu(u).gD().N(0,t)
u=new D.eV()
u.b=!0
this.a7(u)},
scm:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gD().N(0,t.ga3())
u=t.d
t.d=a
if(a!=null)a.gD().t(0,t.ga3())
s=new D.G("technique",u,t.d)
s.b=!0
t.a7(s)}},
gD:function(){var u=this.y
return u==null?this.y=D.aw():u},
ao:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.cg(a1.d)
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
if(typeof s!=="number")return H.y(s)
o=C.d.a1(p*s)
p=q.b
if(typeof r!=="number")return H.y(r)
n=C.d.a1(p*r)
p=C.d.a1(q.c*s)
a2.c=p
q=C.d.a1(q.d*r)
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
i=V.aO(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.cf(i)
t=$.k3
if(t==null){t=$.k5
if(t==null)t=$.k5=new V.aA(0,0,0)
q=$.km
if(q==null)q=$.km=new V.N(0,1,0)
p=$.kk
if(p==null)p=$.kk=new V.N(0,0,-1)
h=p.O(0,Math.sqrt(p.S(p)))
q=q.at(h)
g=q.O(0,Math.sqrt(q.S(q)))
f=h.at(g)
e=new V.N(t.a,t.b,t.c)
d=g.aQ(0).S(e)
c=f.aQ(0).S(e)
b=h.aQ(0).S(e)
t=V.aO(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.k3=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.M(0,a)}a2.db.cf(a)
for(u=a1.e.a,u=new J.a5(u,u.length);u.p();)u.d.cq(0,a2)
for(u=a1.e.a,u=new J.a5(u,u.length);u.p();)u.d.ao(a2)
a1.b.toString
a2.cy.bd()
a2.db.bd()
a1.c.toString
a2.ce()}}
A.c9.prototype={}
A.e0.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ee:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ed:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.es.prototype={}
A.cF.prototype={
cJ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bz:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.b(P.Q("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
dV:function(){var u,t,s,r=this,q=H.c([],[A.c9]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.y(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c9(p,t.name,s))}r.x=new A.e0(q)},
dX:function(){var u,t,s,r=this,q=H.c([],[A.cR]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.y(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ea(t.type,t.size,t.name,s))}r.y=new A.hv(q)},
ah:function(a,b,c){var u=this.a
if(a===1)return new A.hn(u,b,c)
else return A.jq(u,this.r,b,a,c)},
cY:function(a,b,c){var u=this.a
if(a===1)return new A.hy(u,b,c)
else return A.jq(u,this.r,b,a,c)},
cZ:function(a,b,c){var u=this.a
if(a===1)return new A.hz(u,b,c)
else return A.jq(u,this.r,b,a,c)},
aE:function(a,b){return new P.d4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ea:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ah(b,c,d)
case 5121:return u.ah(b,c,d)
case 5122:return u.ah(b,c,d)
case 5123:return u.ah(b,c,d)
case 5124:return u.ah(b,c,d)
case 5125:return u.ah(b,c,d)
case 5126:return new A.bN(u.a,c,d)
case 35664:return new A.hp(u.a,c,d)
case 35665:return new A.hr(u.a,c,d)
case 35666:return new A.ht(u.a,c,d)
case 35667:return new A.hq(u.a,c,d)
case 35668:return new A.hs(u.a,c,d)
case 35669:return new A.hu(u.a,c,d)
case 35674:return new A.hw(u.a,c,d)
case 35675:return new A.hx(u.a,c,d)
case 35676:return new A.bO(u.a,c,d)
case 35678:return u.cY(b,c,d)
case 35680:return u.cZ(b,c,d)
case 35670:throw H.b(u.aE("BOOL",c))
case 35671:throw H.b(u.aE("BOOL_VEC2",c))
case 35672:throw H.b(u.aE("BOOL_VEC3",c))
case 35673:throw H.b(u.aE("BOOL_VEC4",c))
default:throw H.b(P.Q("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.cR.prototype={}
A.hv.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.I()},
I:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.w)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.hn.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hq.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hs.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hu.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.ho.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.bN.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hp.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.hr.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.ht.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hw.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.hx.prototype={
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.bO.prototype={
bm:function(a){var u=new Float32Array(H.iQ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.hy.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.hz.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.j7.prototype={
$1:function(a){return new V.aA(Math.cos(a),Math.sin(a),0)}}
F.iT.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jK(n.$1(o),m)
m=J.jK(n.$1(o+3.141592653589793/p.c),m).W(0,l)
m=new V.N(m.a,m.b,m.c)
u=m.O(0,Math.sqrt(m.S(m)))
n=$.kl
if(n==null){n=new V.N(1,0,0)
$.kl=n
t=n}else t=n
if(!J.H(u,t)){n=$.kn
if(n==null){n=new V.N(0,0,1)
$.kn=n
t=n}else t=n}n=u.at(t)
s=n.O(0,Math.sqrt(n.S(n)))
n=s.at(u)
t=n.O(0,Math.sqrt(n.S(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.M(0,n*m)
m=s.M(0,q*m)
m=new V.aA(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.H(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a0()}}}
F.b1.prototype={
aG:function(){var u=this
if(!u.gbU()){C.b.N(u.a.a.d.b,u)
u.a.a.a0()}u.dL()
u.dM()
u.dN()},
dS:function(a){this.a=a
a.d.b.push(this)},
dT:function(a){this.b=a
a.d.c.push(this)},
dU:function(a){this.c=a
a.d.d.push(this)},
dL:function(){var u=this.a
if(u!=null){C.b.N(u.d.b,this)
this.a=null}},
dM:function(){var u=this.b
if(u!=null){C.b.N(u.d.c,this)
this.b=null}},
dN:function(){var u=this.c
if(u!=null){C.b.N(u.d.d,this)
this.c=null}},
gbU:function(){return this.a==null||this.b==null||this.c==null},
cT:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hO()
if(q!=null)s=s.P(0,q)
if(u!=null)s=s.P(0,u)
if(t!=null)s=s.P(0,t)
if(s.es())return
return s.O(0,Math.sqrt(s.S(s)))},
cU:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.W(0,q)
r=new V.N(r.a,r.b,r.c)
s=r.O(0,Math.sqrt(r.S(r)))
r=t.W(0,q)
r=new V.N(r.a,r.b,r.c)
r=s.at(r.O(0,Math.sqrt(r.S(r))))
return r.O(0,Math.sqrt(r.S(r)))},
b3:function(){var u,t=this
if(t.d!=null)return!0
u=t.cT()
if(u==null){u=t.cU()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
gbS:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
E:function(a){var u,t,s=this
if(s.gbU())return a+"disposed"
u=a+C.a.ac(J.a3(s.a.e),0)+", "+C.a.ac(J.a3(s.b.e),0)+", "+C.a.ac(J.a3(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.h(0)+", "):u+"-, ")+"-}"
return u},
I:function(){return this.E("")}}
F.eF.prototype={}
F.fY.prototype={
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
F.cr.prototype={}
F.f5.prototype={}
F.hm.prototype={}
F.cA.prototype={}
F.fQ.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.aw():u},
ex:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.ac(o,0)])
for(o=[F.bP];u.length!==0;){t=C.b.gej(u)
C.b.bf(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.bb(0,t,q)){s.push(q)
C.b.bf(u,r)}}if(s.length>1)b.ew(s)}}p.a.G()
p.c.bg()
p.d.bg()
p.b.eP()
p.c.bh(new F.hm())
p.d.bh(new F.fY())
o=p.e
if(o!=null)o.aM(0)},
e6:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aF()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bk().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bm().a)!==0)++s
if((t&$.c7().a)!==0)++s
if((t&$.c8().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bi().a)!==0)++s
r=a4.gbo(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.D])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ca])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.e3(m)
k=l.gbo(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.ca(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].ev(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.iQ(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cb(new Z.cW(a1,d),o)
c.b=H.c([],[Z.cm])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.G()
b.push(t.e)}a=Z.md(u,34963,b)
c.b.push(new Z.cm(4,b.length,a))}return c},
h:function(a){var u=this,t=H.c([],[P.h])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.E("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.E("   "))}return C.b.l(t,"\n")},
a0:function(){var u=this.e
if(u!=null)u.Z(null)}}
F.fR.prototype={
e1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.b1])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.d(c,s)
m=c[s];++s
if(s>=n)return H.d(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.d(c,k)
j=c[k]
if(t<0||t>=n)return H.d(c,t)
i=c[t]
n=u.a
if(p){n.t(0,m)
u.a.t(0,l)
u.a.t(0,j)
h.push(F.eE(m,l,j))
u.a.t(0,m)
u.a.t(0,j)
u.a.t(0,i)
h.push(F.eE(m,j,i))}else{n.t(0,l)
u.a.t(0,j)
u.a.t(0,i)
h.push(F.eE(l,j,i))
u.a.t(0,l)
u.a.t(0,i)
u.a.t(0,m)
h.push(F.eE(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
bh:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.bb(0,p,n)){p.aG()
break}}}}},
bg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gbS(s)
if(t)s.aG()}},
b4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.w)(u),++r)if(!u[r].b3())s=!1
return s},
h:function(a){return this.I()},
E:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)r.push(u[s].E(a))
return C.b.l(r,"\n")},
I:function(){return this.E("")}}
F.fS.prototype={
gk:function(a){return 0},
bh:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.i(0,q)}},
bg:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
s=t[u]
t=s.gbS(s)
if(t)s.aG()}},
h:function(a){return this.I()},
E:function(a){var u,t,s=H.c([],[P.h])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.d(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.b.l(s,"\n")},
I:function(){return this.E("")}}
F.fT.prototype={
gk:function(a){return 0},
eP:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].gf6()
t=t.gf5(t)
if(t.gk(t).R(0,1)){t=this.b
return H.d(t,u)
t[u].aG()}}},
h:function(a){return this.I()},
E:function(a){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].E(a))}return C.b.l(s,"\n")},
I:function(){return this.E("")}}
F.bP.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kp(u.cx,r,o,t,s,q,p,a,n)},
ev:function(a){var u,t,s=this
if(a.q(0,$.aF())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bk())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bj())){u=H.c([0,0,1],[P.D])
return u}else if(a.q(0,$.bl())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bm())){u=H.c([0,0,0],[P.D])
return u}else if(a.q(0,$.c7())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.c8())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bn()))return H.c([s.ch],[P.D])
else if(a.q(0,$.bi())){u=H.c([-1,-1,-1,-1],[P.D])
return u}else return H.c([],[P.D])},
b3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hO()
t.d.B(0,new F.hY(s))
s=s.a
t.r=s.O(0,Math.sqrt(s.S(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aM(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.I()},
E:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
q.push(C.a.ac(J.a3(s.e),0))
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
q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.z(s.ch,3,0))
q.push(r)
t=C.b.l(q,", ")
return a+"{"+t+"}"},
I:function(){return this.E("")}}
F.hY.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.P(0,t)}}}
F.hP.prototype={
G:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
t:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.b(P.Q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a0()
return!0},
bO:function(a,b){var u=null,t=F.kp(u,u,a,u,u,b,u,u,0)
this.t(0,t)
return t},
gk:function(a){return this.c.length},
b4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)u[s].b3()
return!0},
h:function(a){return this.I()},
E:function(a){var u,t,s,r
this.G()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.w)(t),++r)u.push(t[r].E(a))
return C.b.l(u,"\n")},
I:function(){return this.E("")}}
F.hQ.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
B:function(a,b){var u=this
C.b.B(u.b,b)
C.b.B(u.c,new F.hR(u,b))
C.b.B(u.d,new F.hS(u,b))},
h:function(a){return this.I()},
I:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.w)(u),++s)r.push(u[s].E(""))
return C.b.l(r,"\n")}}
F.hR.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.hS.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.hT.prototype={
gk:function(a){return 0},
i:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.d(u,t)
return u[t]}else{u=this.b
return H.d(u,b)
return u[b]}},
h:function(a){return this.I()},
I:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].E(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].E(""))}return C.b.l(s,"\n")}}
F.hV.prototype={}
F.hU.prototype={
bb:function(a,b,c){return J.H(b.f,c.f)}}
F.hW.prototype={}
F.fx.prototype={
ew:function(a){var u,t,s,r,q,p,o,n,m=V.hO()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.N(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.O(0,Math.sqrt(m.S(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.w)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.O(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.Z(null)}}}return}}
F.hX.prototype={
gk:function(a){return 0},
h:function(a){return this.I()},
I:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].E(""))}return C.b.l(s,"\n")}}
O.er.prototype={
gD:function(){var u=this.r
return u==null?this.r=D.aw():u},
aB:function(a){var u=this.r
if(u!=null)u.Z(a)},
sbj:function(a){var u,t=this
a=a===!0
u=t.d
if(u!==a){t.d=a
t.a=null
u=new D.G("grey",u,a)
u.b=!0
t.aB(u)}},
sc3:function(a){var u
a=a===!0
u=this.e
if(u!==a){this.e=a
u=new D.G("invert",u,a)
u.b=!0
this.aB(u)}}}
O.cL.prototype={}
X.jd.prototype={}
X.eM.prototype={
gD:function(){var u=this.x
return u==null?this.x=D.aw():u}}
X.cz.prototype={
gD:function(){var u=this.f
return u==null?this.f=D.aw():u},
ag:function(a){var u=this.f
if(u!=null)u.Z(a)},
cQ:function(){return this.ag(null)},
sav:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gD().N(0,s.gbt())
t=s.b
s.b=a
if(a!=null)a.gD().t(0,s.gbt())
u=new D.G("mover",t,s.b)
u.b=!0
s.ag(u)}}}
X.h8.prototype={}
V.eb.prototype={
bM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.js().gaL().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.d(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.jN(l.c).t(0,p)
n=W.lv("checkbox")
n.checked=s
W.P(n,"change",new V.ec(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.jN(l.c).t(0,q.createElement("br"))
l.d.push(n)
if(r)l.bK(u,s)},
dZ:function(a,b,c){return this.bM(a,b,c,!1)},
bK:function(a,b){var u,t,s,r,q,p=this.a,o=P.js().gaL().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.eG(o,a-u+1,"0")
t=a>0?C.a.n(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.a2(o,u)
s=P.js()
u=P.h
r=P.lD(s.gaL(),u,u)
r.m(0,p,t)
q=s.ci(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.it([],[]).aN(""),"",u)}}
V.ec.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.bK(u.d,t.checked)}}
V.cd.prototype={
aA:function(a){this.b=new P.eR(C.O)
this.c=null
this.d=H.c([],[[P.o,W.a6]])},
C:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.a6]))
u=a.split("\n")
for(l=u.length,t=[W.a6],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.cX(q,0,q.length)
n=o==null?q:o
C.M.cz(p,H.jG(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.ga6(m.d).push(p)}},
cb:function(a,b){var u,t,s,r=this
r.d=H.c([],[[P.o,W.a6]])
u=C.b.l(b,"\n")
t=r.c
if(t==null)t=r.c=r.aF()
for(t.toString,s=new H.k(u),s=new P.ba(t.bi(new H.aM(s,s.gk(s))).a());s.p();)r.aK(s.gu(s))}}
V.j5.prototype={
$1:function(a){var u=C.d.co(this.a.geo(),2)
if(u!=="0.00")P.jF(u+" fps")}}
V.ep.prototype={
aK:function(a){var u=this
switch(a.a){case"Class":u.C(a.b,"#551")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break
case"Type":u.C(a.b,"#B11")
break
case"Whitespace":u.C(a.b,"#111")
break}},
aF:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hf()
a1.d=a1.j(0,r)
u=a1.j(0,r).l(0,q)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.C("a","z")
u.a.push(t)
t=K.C("A","Z")
u.a.push(t)
t=a1.j(0,q).l(0,q)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.C("0","9")
t.a.push(u)
u=K.C("a","z")
t.a.push(u)
u=K.C("A","Z")
t.a.push(u)
u=a1.j(0,r).l(0,p)
t=K.C("0","9")
u.a.push(t)
t=a1.j(0,p).l(0,p)
u=K.C("0","9")
t.a.push(u)
u=a1.j(0,p).l(0,o)
t=K.p(new H.k("."))
u.a.push(t)
t=a1.j(0,o).l(0,n)
u=K.C("0","9")
t.a.push(u)
u=a1.j(0,n).l(0,n)
t=K.C("0","9")
u.a.push(t)
t=a1.j(0,r).l(0,m)
u=K.p(new H.k(l))
t.a.push(u)
u=a1.j(0,m).l(0,m)
t=K.p(new H.k(l))
u.a.push(t)
t=a1.j(0,r).l(0,k)
u=K.p(new H.k('"'))
t.a.push(u)
u=a1.j(0,k).l(0,j)
t=K.p(new H.k('"'))
u.a.push(t)
t=a1.j(0,k).l(0,i)
u=K.p(new H.k("\\"))
t.a.push(u)
u=a1.j(0,i).l(0,k)
t=K.p(new H.k('"'))
u.a.push(t)
a1.j(0,k).l(0,k).a.push(new K.as())
t=a1.j(0,r).l(0,h)
u=K.p(new H.k("'"))
t.a.push(u)
u=a1.j(0,h).l(0,g)
t=K.p(new H.k("'"))
u.a.push(t)
t=a1.j(0,h).l(0,f)
u=K.p(new H.k("\\"))
t.a.push(u)
u=a1.j(0,f).l(0,h)
t=K.p(new H.k("'"))
u.a.push(t)
a1.j(0,h).l(0,h).a.push(new K.as())
t=a1.j(0,r).l(0,e)
u=K.p(new H.k("/"))
t.a.push(u)
u=a1.j(0,e).l(0,d)
t=K.p(new H.k("/"))
u.a.push(t)
t=a1.j(0,d).l(0,c)
u=K.p(new H.k("\n"))
t.a.push(u)
u=a1.j(0,d).l(0,d)
t=new K.U()
s=[K.aN]
t.a=H.c([],s)
u.a.push(t)
u=K.p(new H.k("\n"))
t.a.push(u)
u=a1.j(0,e).l(0,b)
t=K.p(new H.k("*"))
u.a.push(t)
t=a1.j(0,b).l(0,a)
u=K.p(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).l(0,b)
t=new K.U()
t.a=H.c([],s)
u.a.push(t)
u=K.p(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).l(0,c)
t=K.p(new H.k("/"))
u.a.push(t)
t=a1.j(0,r).l(0,a0)
u=K.p(new H.k(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).l(0,a0)
t=K.p(new H.k(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.F("Num")
t=a1.j(0,n)
t.d=t.a.F("Num")
t=a1.j(0,m)
t.d=t.a.F("Symbol")
t=a1.j(0,j)
t.d=t.a.F("String")
t=a1.j(0,g)
t.d=t.a.F("String")
t=a1.j(0,c)
t.d=t.a.F(d)
t=a1.j(0,a0)
t.d=t.a.F(a0)
t=a1.j(0,q)
t=t.d=t.a.F(q)
u=[P.h]
t.ad(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ad(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ad(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eO.prototype={
aK:function(a){var u=this
switch(a.a){case"Builtin":u.C(a.b,"#411")
break
case"Comment":u.C(a.b,"#777")
break
case"Id":u.C(a.b,"#111")
break
case"Num":u.C(a.b,"#191")
break
case"Preprocess":u.C(a.b,"#737")
break
case"Reserved":u.C(a.b,"#119")
break
case"Symbol":u.C(a.b,"#611")
break
case"Type":u.C(a.b,"#171")
break
case"Whitespace":u.C(a.b,"#111")
break}},
aF:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hf()
e.d=e.j(0,r)
u=e.j(0,r).l(0,q)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.C("a","z")
u.a.push(t)
t=K.C("A","Z")
u.a.push(t)
t=e.j(0,q).l(0,q)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.C("0","9")
t.a.push(u)
u=K.C("a","z")
t.a.push(u)
u=K.C("A","Z")
t.a.push(u)
u=e.j(0,r).l(0,p)
t=K.C("0","9")
u.a.push(t)
t=e.j(0,p).l(0,p)
u=K.C("0","9")
t.a.push(u)
u=e.j(0,p).l(0,o)
t=K.p(new H.k("."))
u.a.push(t)
t=e.j(0,o).l(0,n)
u=K.C("0","9")
t.a.push(u)
u=e.j(0,n).l(0,n)
t=K.C("0","9")
u.a.push(t)
t=e.j(0,r).l(0,m)
u=K.p(new H.k(l))
t.a.push(u)
u=e.j(0,m).l(0,m)
t=K.p(new H.k(l))
u.a.push(t)
t=e.j(0,r).l(0,k)
u=K.p(new H.k("/"))
t.a.push(u)
u=e.j(0,k).l(0,j)
t=K.p(new H.k("/"))
u.a.push(t)
e.j(0,k).l(0,m).a.push(new K.as())
t=e.j(0,j).l(0,i)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,j).l(0,j)
t=new K.U()
s=[K.aN]
t.a=H.c([],s)
u.a.push(t)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).l(0,h)
t=K.p(new H.k("#"))
u.a.push(t)
t=e.j(0,h).l(0,h)
u=new K.U()
u.a=H.c([],s)
t.a.push(u)
t=K.p(new H.k("\n"))
u.a.push(t)
t=e.j(0,h).l(0,g)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).l(0,f)
t=K.p(new H.k(" \n\t"))
u.a.push(t)
t=e.j(0,f).l(0,f)
u=K.p(new H.k(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.F("Num")
u=e.j(0,n)
u.d=u.a.F("Num")
u=e.j(0,m)
u.d=u.a.F("Symbol")
u=e.j(0,i)
u.d=u.a.F(j)
u=e.j(0,g)
u.d=u.a.F(h)
u=e.j(0,f)
u.d=u.a.F(f)
u=e.j(0,q)
u=u.d=u.a.F(q)
t=[P.h]
u.ad(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ad(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ad(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.eP.prototype={
aK:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.C(a.b,"#911")
u.C("=",t)
break
case"Id":u.C(a.b,t)
break
case"Other":u.C(a.b,t)
break
case"Reserved":u.C(a.b,"#119")
break
case"String":u.C(a.b,"#171")
break
case"Symbol":u.C(a.b,"#616")
break}},
aF:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hf()
l.d=l.j(0,s)
u=l.j(0,s).l(0,r)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.C("a","z")
u.a.push(t)
t=K.C("A","Z")
u.a.push(t)
t=l.j(0,r).l(0,r)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.C("0","9")
t.a.push(u)
u=K.C("a","z")
t.a.push(u)
u=K.C("A","Z")
t.a.push(u)
u=l.j(0,r).l(0,q)
t=K.p(new H.k("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).l(0,p)
t=K.p(new H.k("</\\-!>="))
u.a.push(t)
t=l.j(0,p).l(0,p)
u=K.p(new H.k("</\\-!>="))
t.a.push(u)
u=l.j(0,s).l(0,o)
t=K.p(new H.k('"'))
u.a.push(t)
t=l.j(0,o).l(0,n)
u=K.p(new H.k('"'))
t.a.push(u)
u=l.j(0,o).l(0,"EscStr")
t=K.p(new H.k("\\"))
u.a.push(t)
t=l.j(0,"EscStr").l(0,o)
u=K.p(new H.k('"'))
t.a.push(u)
l.j(0,o).l(0,o).a.push(new K.as())
l.j(0,s).l(0,m).a.push(new K.as())
u=l.j(0,m).l(0,m)
t=new K.U()
t.a=H.c([],[K.aN])
u.a.push(t)
u=K.p(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.C("a","z")
t.a.push(u)
u=K.C("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.F("Symbol")
u=l.j(0,n)
u.d=u.a.F("String")
u=l.j(0,r)
t=u.a.F(r)
u.d=t
t.ad(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.j(0,q)
t.d=t.a.F(q)
t=l.j(0,m)
t.d=t.a.F(m)
return l}}
V.fD.prototype={
cb:function(a,b){this.d=H.c([],[[P.o,W.a6]])
this.C(C.b.l(b,"\n"),"#111")},
aK:function(a){},
aF:function(){return}}
V.fU.prototype={
cK:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.P(q,"scroll",new V.fW(o),!1)},
bP:function(a){var u,t,s,r,q,p,o,n
this.dW()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.eu(a),s.toString,r=new H.k(r),r=new P.ba(s.bi(new H.aM(r,r.gk(r))).a());r.p();){s=r.gu(r)
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
if(H.ne(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.dH(C.v,s,C.e,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+H.f(n)
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
cu:function(a){var u,t,s,r=new V.ep("dart")
r.aA("dart")
u=new V.eO("glsl")
u.aA("glsl")
t=new V.eP("html")
t.aA("html")
s=C.b.ek(H.c([r,u,t],[V.cd]),new V.fX(a))
if(s!=null)return s
r=new V.fD("plain")
r.aA("plain")
return r},
bN:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.t])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.c4(s).U(s,"+")){b0[t]=C.a.a2(s,1)
a6.push(1)
u=!0}else if(C.a.U(s,"-")){b0[t]=C.a.a2(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cu(a8)
r.cb(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.dH(C.v,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jP()
j.href="#"+H.f(n)
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
if(t>=a6.length)return H.d(a6,t)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.w)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.w)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gH(s);a2.p();)d.appendChild(a2.gu(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
e_:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<1;++s){r=o.createElement("div")
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
dW:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hf()
u.d=u.j(0,q)
t=u.j(0,q).l(0,p)
s=K.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).l(0,p)
s=new K.U()
r=[K.aN]
s.a=H.c([],r)
t.a.push(s)
t=K.p(new H.k("*"))
s.a.push(t)
t=u.j(0,p).l(0,"BoldEnd")
s=K.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).l(0,o)
s=K.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).l(0,o)
s=new K.U()
s.a=H.c([],r)
t.a.push(s)
t=K.p(new H.k("_"))
s.a.push(t)
t=u.j(0,o).l(0,n)
s=K.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).l(0,m)
s=K.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).l(0,m)
s=new K.U()
s.a=H.c([],r)
t.a.push(s)
t=K.p(new H.k("`"))
s.a.push(t)
t=u.j(0,m).l(0,"CodeEnd")
s=K.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).l(0,l)
s=K.p(new H.k("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).l(0,k)
s=K.p(new H.k("|"))
t.a.push(s)
s=u.j(0,l).l(0,j)
t=K.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).l(0,l)
t=new K.U()
t.a=H.c([],r)
s.a.push(t)
s=K.p(new H.k("|]"))
t.a.push(s)
s=u.j(0,k).l(0,j)
t=K.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).l(0,k)
t=new K.U()
t.a=H.c([],r)
s.a.push(t)
s=K.p(new H.k("|]"))
t.a.push(s)
u.j(0,q).l(0,i).a.push(new K.as())
s=u.j(0,i).l(0,i)
t=new K.U()
t.a=H.c([],r)
s.a.push(t)
s=K.p(new H.k("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.F(p)
s=u.j(0,n)
s.d=s.a.F(o)
s=u.j(0,"CodeEnd")
s.d=s.a.F(m)
s=u.j(0,j)
s.d=s.a.F("Link")
s=u.j(0,i)
s.d=s.a.F(i)
this.b=u}}
V.fW.prototype={
$1:function(a){P.kd(C.l,new V.fV(this.a))}}
V.fV.prototype={
$0:function(){var u=C.d.a1(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
V.fX.prototype={
$1:function(a){return a.a===this.a}}
Y.j1.prototype={
$1:function(a){this.a.sbj(a)}}
Y.j2.prototype={
$1:function(a){this.a.sc3(a)}}
Y.j3.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.bN("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bN("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.cC=u.h
u=J.cp.prototype
u.cE=u.h
u=P.l.prototype
u.cD=u.aO
u=W.F.prototype
u.aS=u.Y
u=W.dq.prototype
u.cF=u.a5
u=K.cl.prototype
u.cB=u.aa
u.bp=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"mG","lz",15)
t(P,"mQ","mf",6)
t(P,"mR","mg",6)
t(P,"mS","mh",6)
s(P,"kF","mO",8)
r(W,"n2",4,null,["$4"],["mi"],11,0)
r(W,"n3",4,null,["$4"],["mj"],11,0)
var l
q(l=E.aI.prototype,"gc9",0,0,null,["$1","$0"],["ca","eF"],0,0)
q(l,"gc7",0,0,null,["$1","$0"],["c8","eE"],0,0)
q(l,"gc5",0,0,null,["$1","$0"],["c6","eB"],0,0)
p(l,"gez","eA",3)
p(l,"geC","eD",3)
q(l=E.cM.prototype,"gbq",0,0,null,["$1","$0"],["bs","br"],0,0)
o(l,"geS","cj",8)
n(l=X.cU.prototype,"gdh","di",4)
n(l,"gd4","d5",4)
n(l,"gda","dc",1)
n(l,"gdl","dm",9)
n(l,"gdj","dk",9)
n(l,"gdq","dr",1)
n(l,"gdu","dv",1)
n(l,"gdf","dg",1)
n(l,"gds","dt",1)
n(l,"gdd","de",1)
n(l,"gdw","dz",14)
n(l,"gdA","dB",4)
n(l,"gdH","dI",5)
n(l,"gdD","dE",5)
n(l,"gdF","dG",5)
m(V.aD.prototype,"gk","ba",10)
m(V.N.prototype,"gk","ba",10)
q(l=M.ci.prototype,"ga3",0,0,null,["$1","$0"],["a7","cM"],0,0)
p(l,"gd6","d7",3)
p(l,"gd8","d9",3)
q(X.cz.prototype,"gbt",0,0,null,["$1","$0"],["ag","cQ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.jk,J.a,J.a5,P.dc,P.l,H.aM,P.eY,H.cj,H.hD,H.eh,H.hk,P.b0,H.bq,H.dv,P.R,H.f6,H.f8,H.f0,P.dB,P.b9,P.ba,P.cX,P.cJ,P.h4,P.cN,P.iL,P.im,P.ig,P.db,P.q,P.iD,P.ff,P.ee,P.eS,P.iJ,P.iI,P.aU,P.au,P.X,P.aH,P.fB,P.cH,P.d4,P.eL,P.eN,P.o,P.I,P.aQ,P.h,P.M,P.bb,P.hF,P.iq,W.el,W.ed,W.bS,W.A,W.cx,W.dq,W.ix,W.ck,W.ay,W.il,W.dI,P.is,P.ih,P.b7,K.as,K.cl,K.aN,K.fG,K.fP,L.cI,L.cO,L.cP,L.he,O.ef,O.bB,E.e7,E.aI,E.fH,E.cM,Z.cW,Z.i_,Z.cb,Z.cm,Z.cV,D.ea,D.bt,D.W,X.cc,X.cq,X.f3,X.fc,X.bD,X.fo,X.hg,X.cU,V.b_,V.eB,V.bA,V.aj,V.aA,V.cD,V.aD,V.N,M.ci,A.c9,A.e0,A.cR,A.hv,F.b1,F.eF,F.cr,F.f5,F.cA,F.fQ,F.fR,F.fS,F.fT,F.bP,F.hP,F.hQ,F.hT,F.hV,F.hW,F.hX,O.cL,X.jd,X.h8,X.cz,V.eb,V.cd,V.fU])
s(J.a,[J.eZ,J.co,J.cp,J.aJ,J.bx,J.aK,H.bE,H.aP,W.e,W.dX,W.aX,W.ae,W.x,W.cZ,W.a_,W.eq,W.et,W.d0,W.ch,W.d2,W.ev,W.i,W.d5,W.af,W.eQ,W.d7,W.bw,W.fb,W.fi,W.dd,W.de,W.ag,W.df,W.di,W.ai,W.dm,W.dp,W.al,W.dr,W.am,W.dw,W.a9,W.dz,W.hd,W.ao,W.dC,W.hi,W.hK,W.dJ,W.dL,W.dN,W.dP,W.dR,P.ax,P.d9,P.az,P.dk,P.fF,P.dx,P.aC,P.dE,P.e1,P.cY,P.dt])
s(J.cp,[J.fC,J.b8,J.aL])
t(J.jj,J.aJ)
s(J.bx,[J.cn,J.f_])
t(P.fa,P.dc)
s(P.fa,[H.cS,W.i6,W.T,P.eH])
t(H.k,H.cS)
s(P.l,[H.n,H.bz,H.bQ,P.eW])
s(H.n,[H.cs,H.f7])
t(H.ey,H.bz)
s(P.eY,[H.fg,H.i0])
t(H.fh,H.cs)
t(H.ei,H.eh)
s(P.b0,[H.fy,H.f2,H.hC,H.e9,H.fN,P.cy,P.a4,P.hE,P.hA,P.bK,P.eg,P.eo])
s(H.bq,[H.j8,H.h9,H.f1,H.iY,H.iZ,H.j_,P.i2,P.i1,P.i3,P.i4,P.iC,P.iB,P.iR,P.ij,P.ik,P.f9,P.fe,P.ew,P.ex,P.hJ,P.hG,P.hH,P.hI,P.iE,P.iF,P.iH,P.iG,P.iN,P.iM,P.iO,P.iP,W.ez,W.fk,W.fm,W.fM,W.h3,W.ib,W.fw,W.fv,W.io,W.ip,W.iA,W.iK,P.iu,P.iv,P.iS,P.eI,P.eJ,P.e3,E.fI,E.fJ,E.fK,E.hc,D.eC,D.eD,F.j7,F.iT,F.hY,F.hR,F.hS,V.ec,V.j5,V.fW,V.fV,V.fX,Y.j1,Y.j2,Y.j3])
s(H.h9,[H.h1,H.bo])
t(P.fd,P.R)
s(P.fd,[H.a8,W.i5])
t(H.ct,H.aP)
s(H.ct,[H.bU,H.bW])
t(H.bV,H.bU)
t(H.bF,H.bV)
t(H.bX,H.bW)
t(H.cu,H.bX)
s(H.cu,[H.fq,H.fr,H.fs,H.ft,H.fu,H.cv,H.bG])
t(P.iy,P.eW)
t(P.ii,P.iL)
t(P.ie,P.im)
t(P.dG,P.ff)
t(P.cT,P.dG)
s(P.ee,[P.e5,P.eA])
t(P.ej,P.h4)
s(P.ej,[P.e6,P.eR,P.hN,P.hM])
t(P.hL,P.eA)
s(P.X,[P.D,P.t])
s(P.a4,[P.b5,P.eT])
t(P.i8,P.bb)
s(W.e,[W.v,W.eG,W.bC,W.ak,W.bY,W.an,W.aa,W.c_,W.hZ,W.bR,P.e4,P.aW])
s(W.v,[W.F,W.aG])
s(W.F,[W.m,P.j])
s(W.m,[W.dY,W.dZ,W.aY,W.aZ,W.a6,W.eK,W.fO,W.cK,W.h6,W.h7,W.bM])
t(W.ek,W.ae)
t(W.br,W.cZ)
s(W.a_,[W.em,W.en])
t(W.d1,W.d0)
t(W.cg,W.d1)
t(W.d3,W.d2)
t(W.eu,W.d3)
t(W.a7,W.aX)
t(W.d6,W.d5)
t(W.bu,W.d6)
t(W.d8,W.d7)
t(W.bv,W.d8)
t(W.aR,W.i)
s(W.aR,[W.b2,W.ah,W.b6])
t(W.fj,W.dd)
t(W.fl,W.de)
t(W.dg,W.df)
t(W.fn,W.dg)
t(W.dj,W.di)
t(W.cw,W.dj)
t(W.dn,W.dm)
t(W.fE,W.dn)
t(W.fL,W.dp)
t(W.bZ,W.bY)
t(W.fZ,W.bZ)
t(W.ds,W.dr)
t(W.h_,W.ds)
t(W.h2,W.dw)
t(W.dA,W.dz)
t(W.ha,W.dA)
t(W.c0,W.c_)
t(W.hb,W.c0)
t(W.dD,W.dC)
t(W.hh,W.dD)
t(W.aS,W.ah)
t(W.dK,W.dJ)
t(W.i7,W.dK)
t(W.d_,W.ch)
t(W.dM,W.dL)
t(W.ic,W.dM)
t(W.dO,W.dN)
t(W.dh,W.dO)
t(W.dQ,W.dP)
t(W.ir,W.dQ)
t(W.dS,W.dR)
t(W.iw,W.dS)
t(W.i9,W.i5)
t(W.ia,P.cJ)
t(W.iz,W.dq)
t(P.it,P.is)
t(P.a0,P.ih)
t(P.da,P.d9)
t(P.f4,P.da)
t(P.dl,P.dk)
t(P.fz,P.dl)
t(P.bJ,P.j)
t(P.dy,P.dx)
t(P.h5,P.dy)
t(P.dF,P.dE)
t(P.hj,P.dF)
t(P.e2,P.cY)
t(P.fA,P.aW)
t(P.du,P.dt)
t(P.h0,P.du)
s(K.cl,[K.U,L.cQ])
s(E.e7,[Z.ca,A.cF])
s(D.W,[D.eU,D.eV,D.G])
t(U.fp,D.ea)
s(U.fp,[U.ce,U.cE])
t(A.es,A.cF)
s(A.cR,[A.hn,A.hq,A.hs,A.hu,A.ho,A.bN,A.hp,A.hr,A.ht,A.hw,A.hx,A.bO,A.hy,A.hz])
t(F.fY,F.eF)
t(F.hm,F.f5)
t(F.hU,F.hV)
t(F.fx,F.hW)
t(O.er,O.cL)
t(X.eM,X.h8)
s(V.cd,[V.ep,V.eO,V.eP,V.fD])
u(H.cS,H.hD)
u(H.bU,P.q)
u(H.bV,H.cj)
u(H.bW,P.q)
u(H.bX,H.cj)
u(P.dc,P.q)
u(P.dG,P.iD)
u(W.cZ,W.el)
u(W.d0,P.q)
u(W.d1,W.A)
u(W.d2,P.q)
u(W.d3,W.A)
u(W.d5,P.q)
u(W.d6,W.A)
u(W.d7,P.q)
u(W.d8,W.A)
u(W.dd,P.R)
u(W.de,P.R)
u(W.df,P.q)
u(W.dg,W.A)
u(W.di,P.q)
u(W.dj,W.A)
u(W.dm,P.q)
u(W.dn,W.A)
u(W.dp,P.R)
u(W.bY,P.q)
u(W.bZ,W.A)
u(W.dr,P.q)
u(W.ds,W.A)
u(W.dw,P.R)
u(W.dz,P.q)
u(W.dA,W.A)
u(W.c_,P.q)
u(W.c0,W.A)
u(W.dC,P.q)
u(W.dD,W.A)
u(W.dJ,P.q)
u(W.dK,W.A)
u(W.dL,P.q)
u(W.dM,W.A)
u(W.dN,P.q)
u(W.dO,W.A)
u(W.dP,P.q)
u(W.dQ,W.A)
u(W.dR,P.q)
u(W.dS,W.A)
u(P.d9,P.q)
u(P.da,W.A)
u(P.dk,P.q)
u(P.dl,W.A)
u(P.dx,P.q)
u(P.dy,W.A)
u(P.dE,P.q)
u(P.dF,W.A)
u(P.cY,P.R)
u(P.dt,P.q)
u(P.du,W.A)})()
var v={mangledGlobalNames:{t:"int",D:"double",X:"num",h:"String",aU:"bool",aQ:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[W.ah]},{func:1,ret:P.aQ,args:[,,]},{func:1,ret:-1,args:[P.t,[P.l,E.aI]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.b6]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.D},{func:1,ret:P.aU,args:[W.F,P.h,P.h,W.bS]},{func:1,ret:P.aQ,args:[,]},{func:1,ret:P.b7,args:[,,]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:P.t,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.p=W.aY.prototype
C.L=W.aZ.prototype
C.M=W.a6.prototype
C.P=J.a.prototype
C.b=J.aJ.prototype
C.c=J.cn.prototype
C.Q=J.co.prototype
C.d=J.bx.prototype
C.a=J.aK.prototype
C.R=J.aL.prototype
C.y=J.fC.prototype
C.z=W.cK.prototype
C.o=J.b8.prototype
C.A=W.aS.prototype
C.B=W.bR.prototype
C.Y=new P.e6()
C.C=new P.e5()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
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
C.I=function(getTagFallback) {
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
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.H=function(hooks) {
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
C.G=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.J=new P.fB()
C.e=new P.hL()
C.K=new P.hN()
C.f=new P.ii()
C.l=new P.aH(0)
C.N=new P.aH(5e6)
C.O=new P.eS("element",!1,!1,!1)
C.t=H.c(u([127,2047,65535,1114111]),[P.t])
C.i=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.t])
C.S=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.j=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.t])
C.k=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.t])
C.T=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.u=H.c(u([]),[P.h])
C.U=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.t])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.t])
C.w=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.t])
C.V=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.t])
C.x=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.t])
C.m=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.n=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.W=new H.ei(0,{},C.u,[P.h,P.h])
C.X=new P.b9(null,2)})();(function staticFields(){$.ad=0
$.bp=null
$.jR=null
$.kJ=null
$.kE=null
$.kN=null
$.iU=null
$.j0=null
$.jD=null
$.bd=null
$.c2=null
$.c3=null
$.jz=!1
$.ab=C.f
$.V=[]
$.av=null
$.jf=null
$.jY=null
$.jX=null
$.bT=P.jm(P.h,P.eN)
$.k0=null
$.k4=null
$.k5=null
$.k9=null
$.kj=null
$.ko=null
$.kl=null
$.km=null
$.kn=null
$.kk=null
$.k3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nm","kR",function(){return H.kH("_$dart_dartClosure")})
u($,"nn","jI",function(){return H.kH("_$dart_js")})
u($,"no","kS",function(){return H.ap(H.hl({
toString:function(){return"$receiver$"}}))})
u($,"np","kT",function(){return H.ap(H.hl({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nq","kU",function(){return H.ap(H.hl(null))})
u($,"nr","kV",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nu","kY",function(){return H.ap(H.hl(void 0))})
u($,"nv","kZ",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nt","kX",function(){return H.ap(H.kf(null))})
u($,"ns","kW",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nx","l0",function(){return H.ap(H.kf(void 0))})
u($,"nw","l_",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nL","jJ",function(){return P.me()})
u($,"ny","l1",function(){return P.ma()})
u($,"nM","l5",function(){return H.lI(H.iQ(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.t])))})
u($,"nP","l7",function(){return P.lW("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nQ","l8",function(){return P.mE()})
u($,"nN","l6",function(){return P.k_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"nF","l4",function(){return Z.a1(0)})
u($,"nz","l2",function(){return Z.a1(511)})
u($,"nH","aF",function(){return Z.a1(1)})
u($,"nG","bk",function(){return Z.a1(2)})
u($,"nB","bj",function(){return Z.a1(4)})
u($,"nI","bl",function(){return Z.a1(8)})
u($,"nJ","bm",function(){return Z.a1(16)})
u($,"nC","c7",function(){return Z.a1(32)})
u($,"nD","c8",function(){return Z.a1(64)})
u($,"nE","l3",function(){return Z.a1(96)})
u($,"nK","bn",function(){return Z.a1(128)})
u($,"nA","bi",function(){return Z.a1(256)})
u($,"nl","kQ",function(){return new V.eB(1e-9)})
u($,"nk","E",function(){return $.kQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bE,DataView:H.aP,ArrayBufferView:H.aP,Float32Array:H.bF,Float64Array:H.bF,Int16Array:H.fq,Int32Array:H.fr,Int8Array:H.fs,Uint16Array:H.ft,Uint32Array:H.fu,Uint8ClampedArray:H.cv,CanvasPixelArray:H.cv,Uint8Array:H.bG,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.dX,HTMLAnchorElement:W.dY,HTMLAreaElement:W.dZ,Blob:W.aX,HTMLBodyElement:W.aY,HTMLCanvasElement:W.aZ,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.ek,CSSCharsetRule:W.x,CSSConditionRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.br,MSStyleCSSProperties:W.br,CSS2Properties:W.br,CSSImageValue:W.a_,CSSKeywordValue:W.a_,CSSNumericValue:W.a_,CSSPositionValue:W.a_,CSSResourceValue:W.a_,CSSUnitValue:W.a_,CSSURLImageValue:W.a_,CSSStyleValue:W.a_,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.em,CSSUnparsedValue:W.en,DataTransferItemList:W.eq,HTMLDivElement:W.a6,DOMException:W.et,ClientRectList:W.cg,DOMRectList:W.cg,DOMRectReadOnly:W.ch,DOMStringList:W.eu,DOMTokenList:W.ev,Element:W.F,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.a7,FileList:W.bu,FileWriter:W.eG,HTMLFormElement:W.eK,Gamepad:W.af,History:W.eQ,HTMLCollection:W.bv,HTMLFormControlsCollection:W.bv,HTMLOptionsCollection:W.bv,ImageData:W.bw,KeyboardEvent:W.b2,Location:W.fb,MediaList:W.fi,MessagePort:W.bC,MIDIInputMap:W.fj,MIDIOutputMap:W.fl,MimeType:W.ag,MimeTypeArray:W.fn,PointerEvent:W.ah,MouseEvent:W.ah,DragEvent:W.ah,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.ai,PluginArray:W.fE,RTCStatsReport:W.fL,HTMLSelectElement:W.fO,SourceBuffer:W.ak,SourceBufferList:W.fZ,SpeechGrammar:W.al,SpeechGrammarList:W.h_,SpeechRecognitionResult:W.am,Storage:W.h2,CSSStyleSheet:W.a9,StyleSheet:W.a9,HTMLTableElement:W.cK,HTMLTableRowElement:W.h6,HTMLTableSectionElement:W.h7,HTMLTemplateElement:W.bM,TextTrack:W.an,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.ha,TextTrackList:W.hb,TimeRanges:W.hd,Touch:W.ao,TouchEvent:W.b6,TouchList:W.hh,TrackDefaultList:W.hi,CompositionEvent:W.aR,FocusEvent:W.aR,TextEvent:W.aR,UIEvent:W.aR,URL:W.hK,VideoTrackList:W.hZ,WheelEvent:W.aS,Window:W.bR,DOMWindow:W.bR,CSSRuleList:W.i7,ClientRect:W.d_,DOMRect:W.d_,GamepadList:W.ic,NamedNodeMap:W.dh,MozNamedAttrMap:W.dh,SpeechRecognitionResultList:W.ir,StyleSheetList:W.iw,SVGLength:P.ax,SVGLengthList:P.f4,SVGNumber:P.az,SVGNumberList:P.fz,SVGPointList:P.fF,SVGScriptElement:P.bJ,SVGStringList:P.h5,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.aC,SVGTransformList:P.hj,AudioBuffer:P.e1,AudioParamMap:P.e2,AudioTrackList:P.e4,AudioContext:P.aW,webkitAudioContext:P.aW,BaseAudioContext:P.aW,OfflineAudioContext:P.fA,SQLResultSetRowList:P.h0})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Y.kL,[])
else Y.kL([])})})()
//# sourceMappingURL=test.dart.js.map
