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
a[c]=function(){a[c]=function(){H.nn(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jo:function jo(){},
j_:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lM:function(a,b,c,d){if(!!J.K(a).$in)return new H.eA(a,b,[c,d])
return new H.bB(a,b,[c,d])},
eZ:function(){return new P.bM("No element")},
lC:function(){return new P.bM("Too many elements")},
m7:function(a,b){var u=J.Z(a)
if(typeof u!=="number")return u.W()
H.cI(a,0,u-1,b)},
cI:function(a,b,c,d){if(c-b<=32)H.m6(a,b,c,d)
else H.m5(a,b,c,d)},
m6:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ac(a);u<=c;++u){s=t.i(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.i(a,r-1),s)
if(typeof q!=="number")return q.P()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.i(a,p))
r=p}t.m(a,r,s)}},
m5:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.ac(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.P()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.P()
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
if(typeof p!=="number")return p.L()
if(p<0){if(r!==t){d.m(a3,r,d.i(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.P()
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
if(typeof l!=="number")return l.L()
if(l<0){if(r!==t){d.m(a3,r,d.i(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.P()
if(k>0)for(;!0;){p=a6.$2(d.i(a3,s),a0)
if(typeof p!=="number")return p.P()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.L()
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
H.cI(a3,a4,t-2,a6)
H.cI(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.i(a3,t),b),0);)++t
for(;J.H(a6.$2(d.i(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.i(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.i(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.i(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.L()
o=s-1
if(p<0){d.m(a3,r,d.i(a3,t))
n=t+1
d.m(a3,t,d.i(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.i(a3,s))
d.m(a3,s,q)}s=o
break}}H.cI(a3,t,s,a6)}else H.cI(a3,t,s,a6)},
k:function k(a){this.a=a},
n:function n(){},
cu:function cu(){},
aM:function aM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
eA:function eA(a,b,c){this.a=a
this.b=b
this.$ti=c},
fi:function fi(a,b){this.a=null
this.b=a
this.c=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.$ti=c},
i2:function i2(a,b){this.a=a
this.b=b},
cl:function cl(){},
hF:function hF(){},
cU:function cU(){},
lu:function(){throw H.b(P.r("Cannot modify unmodifiable Map"))},
c8:function(a){var u,t=H.np(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
n8:function(a){return v.types[a]},
kO:function(a,b){var u
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
bJ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lX:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
bK:function(a){return H.lO(a)+H.kD(H.c7(a),0,null)},
lO:function(a){var u,t,s,r,q,p,o,n=J.K(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.T||!!n.$ib9){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c8(t.length>1&&C.a.v(t,0)===36?C.a.a2(t,1):t)},
lP:function(){if(!!self.location)return self.location.href
return},
kb:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lY:function(a){var u,t,s,r=H.c([],[P.t])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.a2(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.ak(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.b(H.a2(s))}return H.kb(r)},
kc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.b(H.a2(s))
if(s<0)throw H.b(H.a2(s))
if(s>65535)return H.lY(a)}return H.kb(a)},
lZ:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.f4()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
b5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.ak(u,10))>>>0,56320|u&1023)}}throw H.b(P.O(a,0,1114111,null,null))},
b4:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lW:function(a){var u=H.b4(a).getFullYear()+0
return u},
lU:function(a){var u=H.b4(a).getMonth()+1
return u},
lQ:function(a){var u=H.b4(a).getDate()+0
return u},
lR:function(a){var u=H.b4(a).getHours()+0
return u},
lT:function(a){var u=H.b4(a).getMinutes()+0
return u},
lV:function(a){var u=H.b4(a).getSeconds()+0
return u},
lS:function(a){var u=H.b4(a).getMilliseconds()+0
return u},
w:function(a){throw H.b(H.a2(a))},
d:function(a,b){if(a==null)J.Z(a)
throw H.b(H.bi(a,b))},
bi:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,s,null)
u=J.Z(a)
if(!(b<0)){if(typeof u!=="number")return H.w(u)
t=b>=u}else t=!0
if(t)return P.B(b,a,s,null,u)
return P.cE(b,s)},
n2:function(a,b,c){var u="Invalid value"
if(a>c)return new P.b6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.b6(a,c,!0,b,"end",u)
return new P.a4(!0,b,"end",null)},
a2:function(a){return new P.a4(!0,a,null,null)},
b:function(a){var u
if(a==null)a=new P.cA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kU})
u.name=""}else u.toString=H.kU
return u},
kU:function(){return J.a3(this.dartException)},
L:function(a){throw H.b(a)},
x:function(a){throw H.b(P.au(a))},
aq:function(a){var u,t,s,r,q,p
a=H.kS(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hm(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kk:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k7:function(a,b){return new H.fA(a,b==null?null:b.method)},
jp:function(a,b){var u=b==null,t=u?null:b.method
return new H.f4(a,t,u?null:b.receiver)},
Y:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ak(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jp(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k7(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kX()
q=$.kY()
p=$.kZ()
o=$.l_()
n=$.l2()
m=$.l3()
l=$.l1()
$.l0()
k=$.l5()
j=$.l4()
i=r.a_(u)
if(i!=null)return f.$1(H.jp(u,i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.jp(u,i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k7(u,i))}}return f.$1(new H.hE(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cJ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a4(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cJ()
return a},
jG:function(a){var u
if(a==null)return new H.dx(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dx(a)},
n6:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ne:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.Q("Unsupported number of arguments for wrapped closure"))},
bh:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ne)
a.$identity=u
return u},
lt:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.h3().constructor.prototype):Object.create(new H.bq(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ae
if(typeof t!=="number")return t.O()
$.ae=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jY(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lp(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jY(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lp:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n8,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jW:H.jg
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.b("Error in functionType of tearoff")},
lq:function(a,b,c,d){var u=H.jg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jY:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ls(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lq(t,!r,u,b)
if(t===0){r=$.ae
if(typeof r!=="number")return r.O()
$.ae=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.br
return new Function(r+H.f(q==null?$.br=H.ea("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ae
if(typeof r!=="number")return r.O()
$.ae=r+1
o+=r
r="return function("+o+"){return this."
q=$.br
return new Function(r+H.f(q==null?$.br=H.ea("self"):q)+"."+H.f(u)+"("+o+");}")()},
lr:function(a,b,c,d){var u=H.jg,t=H.jW
switch(b?-1:a){case 0:throw H.b(H.m3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ls:function(a,b){var u,t,s,r,q,p,o,n=$.br
if(n==null)n=$.br=H.ea("self")
u=$.jV
if(u==null)u=$.jV=H.ea("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lr(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ae
if(typeof u!=="number")return u.O()
$.ae=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ae
if(typeof u!=="number")return u.O()
$.ae=u+1
return new Function(n+u+"}")()},
jF:function(a,b,c,d,e,f,g){return H.lt(a,b,c,d,!!e,!!f,g)},
jg:function(a){return a.a},
jW:function(a){return a.c},
ea:function(a){var u,t,s,r=new H.bq("self","target","receiver","name"),q=J.jm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
ni:function(a,b){throw H.b(H.lo(a,H.c8(b.substring(2))))},
dX:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.ni(a,b)},
n4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lo:function(a,b){return new H.eb("CastError: "+P.jk(a)+": type '"+H.f(H.mW(a))+"' is not a subtype of type '"+b+"'")},
mW:function(a){var u,t=J.K(a)
if(!!t.$ibs){u=H.n4(t)
if(u!=null)return H.nj(u)
return"Closure"}return H.bK(a)},
nn:function(a){throw H.b(new P.eq(a))},
m3:function(a){return new H.fP(a)},
kL:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
c7:function(a){if(a==null)return
return a.$ti},
nZ:function(a,b,c){return H.j9(a["$a"+H.f(c)],H.c7(b))},
n7:function(a,b,c,d){var u=H.j9(a["$a"+H.f(c)],H.c7(b))
return u==null?null:u[d]},
kM:function(a,b,c){var u=H.j9(a["$a"+H.f(b)],H.c7(a))
return u==null?null:u[c]},
ad:function(a,b){var u=H.c7(a)
return u==null?null:u[b]},
nj:function(a){return H.aT(a,null)},
aT:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c8(a[0].name)+H.kD(a,1,b)
if(typeof a=="function")return H.c8(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.mM(a,b)
if('futureOr' in a)return"FutureOr<"+H.aT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mM:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.O(p,a0[m])
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
for(n=H.n5(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aT(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kD:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.M("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aT(p,c)}return"<"+u.h(0)+">"},
j9:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nX:function(a,b,c){return a.apply(b,H.j9(J.K(b)["$a"+H.f(c)],H.c7(b)))},
nY:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nf:function(a){var u,t,s,r,q=$.kN.$1(a),p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j3[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kI.$2(a,q)
if(q!=null){p=$.iX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j3[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j7(u)
$.iX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j3[q]=u
return u}if(s==="-"){r=H.j7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kQ(a,u)
if(s==="*")throw H.b(P.hD(q))
if(v.leafTags[q]===true){r=H.j7(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kQ(a,u)},
kQ:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jI(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j7:function(a){return J.jI(a,!1,null,!!a.$iu)},
ng:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j7(u)
else return J.jI(u,c,null,null)},
nc:function(){if(!0===$.jH)return
$.jH=!0
H.nd()},
nd:function(){var u,t,s,r,q,p,o,n
$.iX=Object.create(null)
$.j3=Object.create(null)
H.nb()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kR.$1(q)
if(p!=null){o=H.ng(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nb:function(){var u,t,s,r,q,p,o=C.H()
o=H.bg(C.I,H.bg(C.J,H.bg(C.u,H.bg(C.u,H.bg(C.K,H.bg(C.L,H.bg(C.M(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kN=new H.j0(r)
$.kI=new H.j1(q)
$.kR=new H.j2(p)},
bg:function(a,b){return a(b)||b},
lG:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.b(P.J("Illegal RegExp pattern ("+String(p)+")",a,null))},
kT:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
n3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kS:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jK:function(a,b,c){var u=H.nl(a,b,c)
return u},
nl:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kS(b),'g'),H.n3(c))},
ej:function ej(){},
ek:function ek(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fA:function fA(a,b){this.a=a
this.b=b},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a){this.a=a},
jb:function jb(a){this.a=a},
dx:function dx(a){this.a=a
this.b=null},
bs:function bs(){},
hb:function hb(){},
h3:function h3(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a){this.a=a},
fP:function fP(a){this.a=a},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f3:function f3(a){this.a=a},
f8:function f8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f9:function f9(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
f2:function f2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iT:function(a){return a},
lN:function(a){return new Int8Array(a)},
ar:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bi(b,a))},
mK:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.b(H.n2(a,b,c))
return b},
bG:function bG(){},
aP:function aP(){},
cv:function cv(){},
bH:function bH(){},
cw:function cw(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
cx:function cx(){},
bI:function bI(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
n5:function(a){return J.k3(a?Object.keys(a):[],null)},
np:function(a){return v.mangledGlobalNames[a]},
nh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iZ:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jH==null){H.nc()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.b(P.hD("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jM()]
if(r!=null)return r
r=H.nf(a)
if(r!=null)return r
if(typeof a=="function")return C.V
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.jM(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
lD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.b(P.jf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.b(P.O(a,0,4294967295,"length",null))
return J.k3(new Array(a),b)},
k3:function(a,b){return J.jm(H.c(a,[b]))},
jm:function(a){a.fixed$length=Array
return a},
lE:function(a,b){return J.li(a,b)},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cp.prototype
return J.f1.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.cq.prototype
if(typeof a=="boolean")return J.f0.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iZ(a)},
ac:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iZ(a)},
dV:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iZ(a)},
kK:function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.b9.prototype
return a},
c6:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.b9.prototype
return a},
bj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aL.prototype
return a}if(a instanceof P.S)return a
return J.iZ(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).q(a,b)},
jO:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kK(a).J(a,b)},
jP:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).i(a,b)},
jc:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.kO(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.dV(a).m(a,b,c)},
le:function(a,b){return J.c6(a).v(a,b)},
lf:function(a,b,c){return J.bj(a).dO(a,b,c)},
lg:function(a,b,c,d){return J.bj(a).e0(a,b,c,d)},
lh:function(a,b){return J.c6(a).M(a,b)},
li:function(a,b){return J.kK(a).am(a,b)},
jd:function(a,b){return J.ac(a).B(a,b)},
dY:function(a,b){return J.dV(a).w(a,b)},
lj:function(a,b,c,d){return J.bj(a).eh(a,b,c,d)},
jQ:function(a,b){return J.dV(a).C(a,b)},
lk:function(a){return J.bj(a).ge4(a)},
jR:function(a){return J.bj(a).gb5(a)},
je:function(a){return J.K(a).gA(a)},
as:function(a){return J.dV(a).gI(a)},
Z:function(a){return J.ac(a).gk(a)},
jS:function(a){return J.dV(a).eP(a)},
ll:function(a,b){return J.bj(a).eS(a,b)},
lm:function(a,b,c){return J.c6(a).n(a,b,c)},
ln:function(a){return J.c6(a).eZ(a)},
a3:function(a){return J.K(a).h(a)},
a:function a(){},
f0:function f0(){},
cq:function cq(){},
cr:function cr(){},
fE:function fE(){},
b9:function b9(){},
aL:function aL(){},
aJ:function aJ(a){this.$ti=a},
jn:function jn(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bz:function bz(){},
cp:function cp(){},
f1:function f1(){},
aK:function aK(){}},P={
mj:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mX()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bh(new P.i4(s),1)).observe(u,{childList:true})
return new P.i3(s,u,t)}else if(self.setImmediate!=null)return P.mY()
return P.mZ()},
mk:function(a){self.scheduleImmediate(H.bh(new P.i5(a),0))},
ml:function(a){self.setImmediate(H.bh(new P.i6(a),0))},
mm:function(a){P.jt(C.l,a)},
jt:function(a,b){var u=C.c.a4(a.a,1000)
return P.mu(u<0?0:u,b)},
kj:function(a,b){var u=C.c.a4(a.a,1000)
return P.mv(u<0?0:u,b)},
mu:function(a,b){var u=new P.dD()
u.cO(a,b)
return u},
mv:function(a,b){var u=new P.dD()
u.cP(a,b)
return u},
nU:function(a){return new P.bb(a,1)},
mr:function(){return C.a4},
ms:function(a){return new P.bb(a,3)},
mP:function(a,b){return new P.iB(a,[b])},
mQ:function(){var u,t
for(;u=$.bf,u!=null;){$.c5=null
t=u.b
$.bf=t
if(t==null)$.c4=null
u.a.$0()}},
mV:function(){$.jD=!0
try{P.mQ()}finally{$.c5=null
$.jD=!1
if($.bf!=null)$.jN().$1(P.kJ())}},
mT:function(a){var u=new P.cZ(a)
if($.bf==null){$.bf=$.c4=u
if(!$.jD)$.jN().$1(P.kJ())}else $.c4=$.c4.b=u},
mU:function(a){var u,t,s=$.bf
if(s==null){P.mT(a)
$.c5=$.c4
return}u=new P.cZ(a)
t=$.c5
if(t==null){u.b=s
$.bf=$.c5=u}else{u.b=t.b
$.c5=t.b=u
if(u.b==null)$.c4=u}},
ki:function(a,b){var u=$.ab
if(u===C.f)return P.jt(a,b)
return P.jt(a,u.e5(b))},
ma:function(a,b){var u=$.ab
if(u===C.f)return P.kj(a,b)
return P.kj(a,u.bR(b,P.cP))},
kE:function(a,b,c,d,e){var u={}
u.a=d
P.mU(new P.iU(u,e))},
mR:function(a,b,c,d){var u,t=$.ab
if(t===c)return d.$0()
$.ab=c
u=t
try{t=d.$0()
return t}finally{$.ab=u}},
mS:function(a,b,c,d,e){var u,t=$.ab
if(t===c)return d.$1(e)
$.ab=c
u=t
try{t=d.$1(e)
return t}finally{$.ab=u}},
i4:function i4(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
dD:function dD(){this.c=0},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bb:function bb(a,b){this.a=a
this.b=b},
bc:function bc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iB:function iB(a,b){this.a=a
this.$ti=b},
cZ:function cZ(a){this.a=a
this.b=null},
cL:function cL(){},
h6:function h6(){},
cP:function cP(){},
iO:function iO(){},
iU:function iU(a,b){this.a=a
this.b=b},
il:function il(){},
im:function im(a,b){this.a=a
this.b=b},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
lH:function(a,b){return new H.a8([a,b])},
jq:function(a,b){return new H.a8([a,b])},
lJ:function(a){return H.n6(a,new H.a8([null,null]))},
bA:function(a){return new P.ii([a])},
jy:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mt:function(a,b){var u=new P.dd(a,b)
u.c=a.e
return u},
lB:function(a,b,c){var u,t
if(P.jE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
$.V.push(a)
try{P.mO(a,u)}finally{if(0>=$.V.length)return H.d($.V,-1)
$.V.pop()}t=P.kg(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jl:function(a,b,c){var u,t
if(P.jE(a))return b+"..."+c
u=new P.M(b)
$.V.push(a)
try{t=u
t.a=P.kg(t.a,a,", ")}finally{if(0>=$.V.length)return H.d($.V,-1)
$.V.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jE:function(a){var u,t
for(u=$.V.length,t=0;t<u;++t)if(a===$.V[t])return!0
return!1},
mO:function(a,b){var u,t,s,r,q,p,o,n=a.gI(a),m=0,l=0
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
lI:function(a,b,c){var u=P.lH(b,c)
a.C(0,new P.fb(u))
return u},
k4:function(a,b){var u,t,s=P.bA(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t)s.t(0,a[t])
return s},
js:function(a){var u,t={}
if(P.jE(a))return"{...}"
u=new P.M("")
try{$.V.push(a)
u.a+="{"
t.a=!0
J.jQ(a,new P.fg(t,u))
u.a+="}"}finally{if(0>=$.V.length)return H.d($.V,-1)
$.V.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ii:function ii(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ij:function ij(a){this.a=a
this.c=this.b=null},
dd:function dd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eY:function eY(){},
fb:function fb(a){this.a=a},
fc:function fc(){},
q:function q(){},
ff:function ff(){},
fg:function fg(a,b){this.a=a
this.b=b},
R:function R(){},
iG:function iG(){},
fh:function fh(){},
cV:function cV(a,b){this.a=a
this.$ti=b},
iq:function iq(){},
de:function de(){},
dI:function dI(){},
md:function(a,b,c,d){if(b instanceof Uint8Array)return P.me(!1,b,c,d)
return},
me:function(a,b,c,d){var u,t,s=$.l6()
if(s==null)return
u=0===c
if(u&&!0)return P.jx(s,b)
t=b.length
d=P.aC(c,d,t)
if(u&&d===t)return P.jx(s,b)
return P.jx(s,b.subarray(c,d))},
jx:function(a,b){if(P.mg(b))return
return P.mh(a,b)},
mh:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.Y(t)}return},
mg:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mf:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.Y(t)}return},
kG:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.w(c)
u=J.ac(a)
t=b
for(;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.aP()
if((s&127)!==s)return t-b}return c-b},
jU:function(a,b,c,d,e,f){if(C.c.az(f,4)!==0)throw H.b(P.J("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.b(P.J("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.b(P.J("Invalid base64 padding, more than two '=' characters",a,b))},
e7:function e7(){},
e8:function e8(){},
eg:function eg(){},
el:function el(){},
eC:function eC(){},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eT:function eT(a){this.a=a},
hN:function hN(){},
hP:function hP(){},
iM:function iM(a){this.b=0
this.c=a},
hO:function hO(a){this.a=a},
iL:function iL(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
dW:function(a,b,c){var u=H.lX(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.b(P.J(a,null,null))},
ly:function(a){if(a instanceof H.bs)return a.h(0)
return"Instance of '"+H.f(H.bK(a))+"'"},
lK:function(a,b,c){var u,t,s=J.lD(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jr:function(a,b,c){var u,t=H.c([],[c])
for(u=J.as(a);u.p();)t.push(u.gu(u))
if(b)return t
return J.jm(t)},
bN:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aC(b,c,u)
if(b<=0){if(typeof c!=="number")return c.L()
t=c<u}else t=!0
return H.kc(t?C.b.cA(a,b,c):a)}if(!!J.K(a).$ibI)return H.lZ(a,b,P.aC(b,c,a.length))
return P.m8(a,b,c)},
m8:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.b(P.O(b,0,J.Z(a),q,q))
u=c==null
if(!u&&c<b)throw H.b(P.O(c,b,J.Z(a),q,q))
t=J.as(a)
for(s=0;s<b;++s)if(!t.p())throw H.b(P.O(b,0,s,q,q))
r=[]
if(u)for(;t.p();)r.push(t.gu(t))
else for(s=b;s<c;++s){if(!t.p())throw H.b(P.O(c,b,s,q,q))
r.push(t.gu(t))}return H.kc(r)},
m0:function(a){return new H.f2(a,H.lG(a,!1,!0,!1,!1,!1))},
kg:function(a,b,c){var u=J.as(b)
if(!u.p())return a
if(c.length===0){do a+=H.f(u.gu(u))
while(u.p())}else{a+=H.f(u.gu(u))
for(;u.p();)a=a+c+H.f(u.gu(u))}return a},
jw:function(){var u=H.lP()
if(u!=null)return P.mc(u)
throw H.b(P.r("'Uri.base' is not supported"))},
dJ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lc().b
if(typeof b!=="string")H.L(H.a2(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.geg().b7(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.b5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lv:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ch:function(a){if(a>=10)return""+a
return"0"+a},
k_:function(a){return new P.aH(1000*a)},
jk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ly(a)},
e1:function(a){return new P.a4(!1,null,null,a)},
jf:function(a,b,c){return new P.a4(!0,a,b,c)},
cE:function(a,b){return new P.b6(null,null,!0,a,b,"Value not in range")},
O:function(a,b,c,d,e){return new P.b6(b,c,!0,a,d,"Invalid value")},
aC:function(a,b,c){var u
if(typeof a!=="number")return H.w(a)
if(0<=a){if(typeof c!=="number")return H.w(c)
u=a>c}else u=!0
if(u)throw H.b(P.O(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.w(c)
u=b>c}else u=!0
if(u)throw H.b(P.O(b,a,c,"end",null))
return b}return c},
kd:function(a,b){if(typeof a!=="number")return a.L()
if(a<0)throw H.b(P.O(a,0,null,b,null))},
B:function(a,b,c,d,e){var u=e==null?J.Z(b):e
return new P.eV(u,!0,a,c,"Index out of range")},
r:function(a){return new P.hG(a)},
hD:function(a){return new P.hC(a)},
kf:function(a){return new P.bM(a)},
au:function(a){return new P.ei(a)},
Q:function(a){return new P.d6(a)},
J:function(a,b,c){return new P.eN(a,b,c)},
lL:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
jJ:function(a){H.nh(a)},
mc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.v(a,4)^58)*3|C.a.v(a,0)^100|C.a.v(a,1)^97|C.a.v(a,2)^116|C.a.v(a,3)^97)>>>0
if(u===0)return P.kl(e<e?C.a.n(a,0,e):a,5,f).gcr()
else if(u===32)return P.kl(C.a.n(a,5,e),0,f).gcr()}t=new Array(8)
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
if(P.kF(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.f3()
if(r>=0)if(P.kF(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.O()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.L()
if(typeof n!=="number")return H.w(n)
if(m<n)n=m
if(typeof o!=="number")return o.L()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.L()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.L()
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
m-=0}return new P.it(a,r,q,p,o,n,m,k)}return P.mw(a,0,e,r,q,p,o,n,m,k)},
kn:function(a){var u=P.h
return C.b.en(H.c(a.split("&"),[u]),P.jq(u,u),new P.hL(C.e))},
mb:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.hI(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.M(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.dW(C.a.n(a,s,t),n,n)
if(typeof p!=="number")return p.P()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.dW(C.a.n(a,s,c),n,n)
if(typeof p!=="number")return p.P()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
km:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.hJ(a),d=new P.hK(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.t])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.M(a,t)
if(p===58){if(t===b){++t
if(C.a.M(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.ga6(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mb(a,s,c)
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
mw:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mE(a,b,d)
else{if(d===b)P.be(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mF(a,u,e-1):""
s=P.mB(a,e,f,!1)
if(typeof f!=="number")return f.O()
r=f+1
if(typeof g!=="number")return H.w(g)
q=r<g?P.mD(P.dW(C.a.n(a,r,g),new P.iH(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mC(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.L()
o=h<i?P.jA(a,h+1,i,n):n
return new P.bd(j,t,s,q,p,o,i<c?P.mA(a,i+1,c):n)},
kx:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
be:function(a,b,c){throw H.b(P.J(c,a,b))},
mD:function(a,b){if(a!=null&&a===P.kx(b))return
return a},
mB:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.M(a,b)===91){if(typeof c!=="number")return c.W()
u=c-1
if(C.a.M(a,u)!==93)P.be(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.my(a,t,u)
if(typeof s!=="number")return s.L()
if(s<u){r=s+1
q=P.kC(a,C.a.V(a,"25",r)?s+3:r,u,"%25")}else q=""
P.km(a,t,s)
return C.a.n(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.w(c)
p=b
for(;p<c;++p)if(C.a.M(a,p)===58){s=C.a.aH(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.kC(a,C.a.V(a,"25",r)?s+3:r,c,"%25")}else q=""
P.km(a,b,s)
return"["+C.a.n(a,b,s)+q+"]"}return P.mH(a,b,c)},
my:function(a,b,c){var u,t=C.a.aH(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.w(c)
u=t<c}else u=!1
return u?t:c},
kC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.M(d):null
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.M(a,u)
if(r===37){q=P.jB(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.M("")
o=l.a+=C.a.n(a,t,u)
if(p)q=C.a.n(a,u,u+3)
else if(q==="%")P.be(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.M("")
if(t<u){l.a+=C.a.n(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.M(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.M("")
l.a+=C.a.n(a,t,u)
l.a+=P.jz(r)
u+=m
t=u}}}if(l==null)return C.a.n(a,b,c)
if(t<c)l.a+=C.a.n(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.w(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.M(a,u)
if(q===37){p=P.jB(a,u,!0)
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
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.M("")
if(t<u){s.a+=C.a.n(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.i,o)
o=(C.i[o]&1<<(q&15))!==0}else o=!1
if(o)P.be(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.M(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.M("")
n=C.a.n(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.jz(q)
u+=l
t=u}}}}if(s==null)return C.a.n(a,b,c)
if(t<c){n=C.a.n(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mE:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kz(C.a.v(a,b)))P.be(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.v(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.k,r)
r=(C.k[r]&1<<(s&15))!==0}else r=!1
if(!r)P.be(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.n(a,b,c)
return P.mx(t?a.toLowerCase():a)},
mx:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mF:function(a,b,c){return P.c3(a,b,c,C.Y,!1)},
mC:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.c3(a,b,c,C.z,!0):C.U.f5(d,new P.iI(),P.h).l(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.T(u,"/"))u="/"+u
return P.mG(u,e,f)},
mG:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.T(a,"/"))return P.mI(a,!u||c)
return P.mJ(a)},
jA:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.b(P.e1("Both query and queryParameters specified"))
return P.c3(a,b,c,C.j,!0)}if(d==null)return
u=new P.M("")
t.a=""
d.C(0,new P.iJ(new P.iK(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mA:function(a,b,c){return P.c3(a,b,c,C.j,!0)},
jB:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.M(a,b+1)
t=C.a.M(a,p)
s=H.j_(u)
r=H.j_(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.ak(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.b5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.n(a,b,b+3).toUpperCase()
return},
jz:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
q+=3}}return P.bN(t,0,null)},
c3:function(a,b,c,d,e){var u=P.kB(a,b,c,d,e)
return u==null?C.a.n(a,b,c):u},
kB:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.L()
if(typeof c!=="number")return H.w(c)
if(!(o<c))break
c$0:{u=C.a.M(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.jB(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.i,t)
t=(C.i[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.be(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.M(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.jz(u)}}if(m==null)m=new P.M("")
m.a+=C.a.n(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.w(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.L()
if(n<c)m.a+=C.a.n(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kA:function(a){if(C.a.T(a,"."))return!0
return C.a.c0(a,"/.")!==-1},
mJ:function(a){var u,t,s,r,q,p,o
if(!P.kA(a))return a
u=H.c([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.H(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.l(u,"/")},
mI:function(a,b){var u,t,s,r,q,p
if(!P.kA(a))return!b?P.ky(a):a
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
t=P.ky(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.l(u,"/")},
ky:function(a){var u,t,s,r=a.length
if(r>=2&&P.kz(J.le(a,0)))for(u=1;u<r;++u){t=C.a.v(a,u)
if(t===58)return C.a.n(a,0,u)+"%3A"+C.a.a2(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.k,s)
s=(C.k[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mz:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.v(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.b(P.e1("Invalid URL encoding"))}}return u},
jC:function(a,b,c,d,e){var u,t,s,r,q=b
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
if(t>127)throw H.b(P.e1("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.b(P.e1("Truncated URI"))
r.push(P.mz(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.hO(!1).b7(r)},
kz:function(a){var u=a|32
return 97<=u&&u<=122},
kl:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.t])
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
if((l.length&1)===1)a=C.G.ez(0,a,o,u)
else{n=P.kB(a,o,u,C.j,!0)
if(n!=null)a=C.a.ap(a,o,u,n)}return new P.hH(a,l,c)},
mL:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.lL(22,new P.iQ(),P.b8),n=new P.iP(o),m=new P.iR(),l=new P.iS(),k=n.$2(0,225)
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
kF:function(a,b,c,d,e){var u,t,s,r,q,p=$.ld()
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
av:function av(a,b){this.a=a
this.b=b},
D:function D(){},
aH:function aH(a){this.a=a},
ey:function ey(){},
ez:function ez(){},
b0:function b0(){},
cA:function cA(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eV:function eV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hG:function hG(a){this.a=a},
hC:function hC(a){this.a=a},
bM:function bM(a){this.a=a},
ei:function ei(a){this.a=a},
fD:function fD(){},
cJ:function cJ(){},
eq:function eq(a){this.a=a},
d6:function d6(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(){},
t:function t(){},
l:function l(){},
f_:function f_(){},
o:function o(){},
I:function I(){},
aQ:function aQ(){},
X:function X(){},
S:function S(){},
h:function h(){},
M:function M(a){this.a=a},
hL:function hL(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
bd:function bd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(){},
iP:function iP(a){this.a=a},
iR:function iR(){},
iS:function iS(){},
it:function it(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ia:function ia(a,b,c,d,e,f,g){var _=this
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
u=P.jq(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
n0:function(a){var u={}
a.C(0,new P.iV(u))
return u},
iv:function iv(){},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
eK:function eK(){},
eL:function eL(){},
ik:function ik(){},
a0:function a0(){},
ay:function ay(){},
f6:function f6(){},
aA:function aA(){},
fB:function fB(){},
fH:function fH(){},
bL:function bL(){},
h7:function h7(){},
j:function j(){},
aD:function aD(){},
hl:function hl(){},
db:function db(){},
dc:function dc(){},
dm:function dm(){},
dn:function dn(){},
dz:function dz(){},
dA:function dA(){},
dG:function dG(){},
dH:function dH(){},
b8:function b8(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(a){this.a=a},
e6:function e6(){},
aV:function aV(){},
fC:function fC(){},
d_:function d_(){},
h2:function h2(){},
dv:function dv(){},
dw:function dw(){}},W={
jT:function(){var u=document.createElement("a")
return u},
jX:function(){var u=document.createElement("canvas")
return u},
lx:function(a,b,c){var u=document.body,t=(u&&C.p).Y(u,a,b,c)
t.toString
u=new H.bS(new W.T(t),new W.eB(),[W.v])
return u.gae(u)},
ji:function(a){return"wheel"},
bu:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bj(a)
t=u.gcl(a)
if(typeof t==="string")r=u.gcl(a)}catch(s){H.Y(s)}return r},
lA:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.Y(u)}return s},
ih:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kv:function(a,b,c,d){var u=W.ih(W.ih(W.ih(W.ih(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
P:function(a,b,c,d){var u=W.kH(new W.ie(c),W.i)
if(u!=null&&!0)J.lg(a,b,u,!1)
return new W.id(a,b,u,!1)},
ku:function(a){var u=W.jT(),t=window.location
u=new W.bU(new W.ip(u,t))
u.cL(a)
return u},
mp:function(a,b,c,d){return!0},
mq:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kw:function(){var u=P.h,t=P.k4(C.m,u),s=H.c(["TEMPLATE"],[u])
t=new W.iC(t,P.bA(u),P.bA(u),P.bA(u),null)
t.cN(null,new H.fj(C.m,new W.iD(),[H.ad(C.m,0),u]),s,null)
return t},
kH:function(a,b){var u=$.ab
if(u===C.f)return a
return u.bR(a,b)},
m:function m(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
aW:function aW(){},
aX:function aX(){},
aZ:function aZ(){},
aG:function aG(){},
em:function em(){},
y:function y(){},
bt:function bt(){},
en:function en(){},
a_:function a_(){},
af:function af(){},
eo:function eo(){},
ep:function ep(){},
es:function es(){},
a6:function a6(){},
ev:function ev(){},
ci:function ci(){},
cj:function cj(){},
ew:function ew(){},
ex:function ex(){},
i8:function i8(a,b){this.a=a
this.b=b},
E:function E(){},
eB:function eB(){},
i:function i(){},
e:function e(){},
a7:function a7(){},
bw:function bw(){},
eI:function eI(){},
eM:function eM(){},
ag:function ag(){},
eS:function eS(){},
bx:function bx(){},
by:function by(){},
ef:function ef(){},
b2:function b2(){},
fd:function fd(){},
fk:function fk(){},
bE:function bE(){},
fl:function fl(){},
fm:function fm(a){this.a=a},
fn:function fn(){},
fo:function fo(a){this.a=a},
ah:function ah(){},
fp:function fp(){},
ai:function ai(){},
T:function T(a){this.a=a},
v:function v(){},
cy:function cy(){},
aj:function aj(){},
fG:function fG(){},
fN:function fN(){},
fO:function fO(a){this.a=a},
fQ:function fQ(){},
al:function al(){},
h0:function h0(){},
am:function am(){},
h1:function h1(){},
an:function an(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
a9:function a9(){},
cM:function cM(){},
h8:function h8(){},
h9:function h9(){},
bO:function bO(){},
ao:function ao(){},
aa:function aa(){},
hc:function hc(){},
hd:function hd(){},
hf:function hf(){},
ap:function ap(){},
b7:function b7(){},
hj:function hj(){},
hk:function hk(){},
aR:function aR(){},
hM:function hM(){},
i0:function i0(){},
aS:function aS(){},
bT:function bT(){},
i9:function i9(){},
d1:function d1(){},
ig:function ig(){},
dj:function dj(){},
iu:function iu(){},
iz:function iz(){},
i7:function i7(){},
ib:function ib(a){this.a=a},
id:function id(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ie:function ie(a){this.a=a},
bU:function bU(a){this.a=a},
A:function A(){},
cz:function cz(a){this.a=a},
fy:function fy(a){this.a=a},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(){},
ir:function ir(){},
is:function is(){},
iC:function iC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iD:function iD(){},
iA:function iA(){},
cm:function cm(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
az:function az(){},
ip:function ip(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
iN:function iN(a){this.a=a},
d0:function d0(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
dk:function dk(){},
dl:function dl(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
c_:function c_(){},
c0:function c0(){},
dt:function dt(){},
du:function du(){},
dy:function dy(){},
dB:function dB(){},
dC:function dC(){},
c1:function c1(){},
c2:function c2(){},
dE:function dE(){},
dF:function dF(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){}},K={
C:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.b(P.Q("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.v(a,0)
t=C.a.v(b,0)
if(u>t){s=t
t=u
u=s}return new K.fI(u,t)},
p:function(a){var u=new K.fR()
u.cI(a)
return u},
at:function at(){},
cn:function cn(){},
aN:function aN(){},
U:function U(){this.a=null},
fI:function fI(a,b){this.a=a
this.b=b},
fR:function fR(){this.a=null}},L={
hh:function(){var u=new L.hg(),t=P.h
u.a=new H.a8([t,L.cK])
u.b=new H.a8([t,L.cR])
u.c=P.bA(t)
return u},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
cR:function cR(a){this.b=a
this.c=null},
hg:function hg(){var _=this
_.d=_.c=_.b=_.a=null},
cS:function cS(a){this.b=a
this.a=this.c=null}},O={
jZ:function(a){var u=new O.eh([a])
u.a=H.c([],[a])
return u},
eh:function eh(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bD:function bD(){this.b=this.a=null},
et:function et(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cN:function cN(){}},E={
mn:function(){if(J.jd(window.navigator.vendor,"Google"))return C.E
if(J.jd(window.navigator.userAgent,"Firefox"))return C.q
var u=window.navigator.appVersion
if(J.ac(u).B(u,"Trident")||C.a.B(u,"Edge"))return C.r
if(J.jd(window.navigator.appName,"Microsoft"))return C.r
return C.F},
mo:function(){var u=window.navigator.appVersion
if(J.ac(u).B(u,"Win"))return C.a0
if(C.a.B(u,"Mac"))return C.a1
if(C.a.B(u,"Linux"))return C.a2
return C.a3},
m2:function(a,b){var u=new E.fJ(a)
u.cH(a,b)
return u},
m9:function(a,b,c,d,e){var u,t,s=J.K(a)
if(!!s.$iaZ)return E.kh(a,!0,!0,!0,!1)
u=W.jX()
t=u.style
t.width="100%"
t.height="100%"
s.gb5(a).t(0,u)
return E.kh(u,!0,!0,!0,!1)},
kh:function(a,b,c,d,e){var u,t,s,r,q,p="mousemove",o=new E.cO(),n=C.P.cv(a,"webgl2",P.lJ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(n==null)H.L(P.Q("Failed to get the rendering context for WebGL."))
o.b=a
o.c=n
o.e=E.m2(n,a)
n.getParameter(3379)
n.getParameter(34076)
u=new X.cW(a)
t=new X.f5()
t.d=P.bA(P.t)
u.b=t
t=new X.fq(u)
t.f=0
t.r=V.cD()
t.x=V.cD()
t.ch=t.Q=1
u.c=t
t=new X.fe(u)
t.r=0
t.x=V.cD()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hi(u)
t.f=V.cD()
t.r=V.cD()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.c([],[[P.cL,P.S]])
t=$.k2
if(t==null){s=E.mn()
E.mo()
t=$.k2=new E.ic(s)}u.Q=t.a===C.q?0.16666666666666666:0.005555555555555556
r=u.z
q=document
r.push(W.P(q,"contextmenu",u.gda(),!1))
u.z.push(W.P(a,"focus",u.gdh(),!1))
u.z.push(W.P(a,"blur",u.gd4(),!1))
u.z.push(W.P(q,"keyup",u.gdl(),!1))
u.z.push(W.P(q,"keydown",u.gdj(),!1))
u.z.push(W.P(a,"mousedown",u.gdq(),!1))
u.z.push(W.P(a,"mouseup",u.gdu(),!1))
u.z.push(W.P(a,p,u.gds(),!1))
r=u.z
W.ji(a)
W.ji(a)
r.push(W.P(a,W.ji(a),u.gdw(),!1))
u.z.push(W.P(q,p,u.gdd(),!1))
u.z.push(W.P(q,"mouseup",u.gdf(),!1))
u.z.push(W.P(q,"pointerlockchange",u.gdA(),!1))
u.z.push(W.P(a,"touchstart",u.gdH(),!1))
u.z.push(W.P(a,"touchend",u.gdD(),!1))
u.z.push(W.P(a,"touchmove",u.gdF(),!1))
o.ch=!0
o.cx=!1
o.cy=new P.av(Date.now(),!1)
o.db=0
o.bF()
return o},
e9:function e9(){},
aI:function aI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aY:function aY(a){this.b=a},
b3:function b3(a){this.b=a},
ic:function ic(a){this.a=a},
fJ:function fJ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fK:function fK(a){this.a=a},
fL:function fL(a){this.a=a},
fM:function fM(a){this.a=a},
cO:function cO(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
he:function he(a){this.a=a}},Z={
mi:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iT(c)),35044)
a.bindBuffer(b,null)
return new Z.cY(b,u)},
a1:function(a){return new Z.cX(a)},
cY:function cY(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i1:function i1(a){this.a=a},
cd:function cd(a,b){this.a=a
this.b=null
this.c=b},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a}},D={
ax:function(){var u=new D.bv()
u.d=0
return u},
ec:function ec(){},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
W:function W(){this.b=null},
eW:function eW(){this.b=null},
eX:function eX(){this.b=null},
F:function F(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={ce:function ce(a,b){this.a=a
this.b=b},cs:function cs(a,b){this.a=a
this.b=b},f5:function f5(){this.d=this.b=this.a=null},fe:function fe(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},fq:function fq(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hi:function hi(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cW:function cW(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lz:function(a){var u=new X.eO(),t=V.n_(1)
u.a=new V.b_(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ke
if(t==null){t=V.m1(0,0,1,1)
$.ke=t}u.r=t
return u},
jh:function jh(){},
eO:function eO(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(){}},V={
n_:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jL:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.az(a-b,u)
return(a<0?a+u:a)+b},
z:function(a,b,c){if(a==null)return C.a.ac("null",c)
return C.a.ac(C.d.co(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
iY:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.h])
for(u=0,t=0;t<4;++t){s=V.z(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.d(o,q)
r=C.a.ac(o[q],u)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=r}return o},
k6:function(){var u=$.k5
return u==null?$.k5=V.aO(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aO:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cD:function(){var u=$.k9
return u==null?$.k9=new V.ak(0,0):u},
m1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cF(a,b,c,d)},
hQ:function(){var u=$.ks
return u==null?$.ks=new V.N(0,0,0):u},
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(a){this.a=a},
bC:function bC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ak:function ak(a,b){this.a=a
this.b=b},
aB:function aB(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
nk:function(a){P.ma(C.R,new V.j8(a))},
m4:function(a){var u=new V.fW()
u.cK(a,!0)
return u},
ed:function ed(a){this.a=a
this.d=this.c=null},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(){},
j8:function j8(a){this.a=a},
er:function er(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eQ:function eQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eR:function eR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fW:function fW(){this.b=this.a=null},
fY:function fY(a){this.a=a},
fX:function fX(a){this.a=a},
fZ:function fZ(a){this.a=a}},U={cg:function cg(){this.b=this.a=null},fr:function fr(){},cG:function cG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ck:function ck(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ju:function(a,b,c,d,e){var u=new A.hq(a,c,e)
u.f=d
P.lK(d,0,P.t)
return u},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a},
eu:function eu(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cH:function cH(){},
cT:function cT(){},
hx:function hx(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.c=b
this.d=c},
hs:function hs(a,b,c){this.a=a
this.c=b
this.d=c},
hu:function hu(a,b,c){this.a=a
this.c=b
this.d=c},
hw:function hw(a,b,c){this.a=a
this.c=b
this.d=c},
hq:function hq(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
bP:function bP(a,b,c){this.a=a
this.c=b
this.d=c},
hr:function hr(a,b,c){this.a=a
this.c=b
this.d=c},
ht:function ht(a,b,c){this.a=a
this.c=b
this.d=c},
hv:function hv(a,b,c){this.a=a
this.c=b
this.d=c},
hy:function hy(a,b,c){this.a=a
this.c=b
this.d=c},
hz:function hz(a,b,c){this.a=a
this.c=b
this.d=c},
bQ:function bQ(a,b,c){this.a=a
this.c=b
this.d=c},
hA:function hA(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){this.a=a
this.c=b
this.d=c}},F={
no:function(){return F.n1(15,30,0.5,1,new F.ja())},
n1:function(a,b,c,d,e){var u,t=F.nm(a,b,new F.iW(e,d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.b4()
t.a.b4()
u=t.e
if(u!=null)u.aM(0)
t.ey(new F.hW(),new F.fz())
return t},
nm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.fS()
t=new F.hR(u)
t.b=!1
s=[F.bR]
t.c=H.c([],s)
u.a=t
t=new F.fV()
t.b=H.c([],[F.cC])
u.b=t
t=new F.fU(u)
t.b=H.c([],[F.ct])
u.c=t
t=new F.fT(u)
t.b=H.c([],[F.b1])
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bO(new V.b_(s,0,0,1),new V.ak(p,1))
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
o=k.bO(new V.b_(j,i,h,1),new V.ak(p,m))
c.$3(o,p,n)
r.push(o.bT(null))}}u.d.e1(a+1,b+1,r)
return u},
eG:function(a,b,c){var u=new F.b1(),t=a.a
if(t==null)H.L(P.Q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.L(P.Q("May not create a face with vertices attached to different shapes."))
u.dS(a)
u.dT(b)
u.dU(c)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
kt:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bR(),r=new F.hZ()
r.b=H.c([],[F.cC])
s.b=r
r=new F.hV()
u=[F.ct]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hS()
u=[F.b1]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.l7()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bm().a)!==0?e:t
s.x=(u&$.bl().a)!==0?b:t
s.y=(u&$.bn().a)!==0?f:t
s.z=(u&$.bo().a)!==0?g:t
s.Q=(u&$.l8().a)!==0?c:t
s.ch=(u&$.bp().a)!==0?i:0
s.cx=(u&$.bk().a)!==0?a:t
return s},
ja:function ja(){},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b1:function b1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eH:function eH(){},
h_:function h_(){},
ct:function ct(){},
f7:function f7(){},
ho:function ho(){},
cC:function cC(){},
fS:function fS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(a){this.a=a
this.b=null},
fU:function fU(a){this.a=a
this.b=null},
fV:function fV(){this.b=null},
bR:function bR(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(a){this.a=a},
hR:function hR(a){this.a=a
this.c=this.b=null},
hS:function hS(){this.d=this.c=this.b=null},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){this.c=this.b=null},
hX:function hX(){},
hW:function hW(){},
hY:function hY(){},
fz:function fz(){},
hZ:function hZ(){this.b=null}},Y={
kP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="testCanvas",g=null,f="controls",e=V.m4("Test 001"),d=W.jX()
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
s=O.jZ(u)
t.y=s
s.bl(t.geA(),t.geD())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbn(0,g)
t.sav(g)
t.sbn(0,F.no())
s=new U.cG()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.sct(0)
s.scd(0,0)
s.sck(0)
r=s.d
if(!(Math.abs(r-0.1)<$.G().a)){s.d=0.1
r=new D.F("deltaYaw",r,0.1)
r.b=!0
s.ai(r)}r=s.e
if(!(Math.abs(r-0.21)<$.G().a)){s.e=0.21
r=new D.F("deltaPitch",r,0.21)
r.b=!0
s.ai(r)}r=s.f
if(!(Math.abs(r-0.32)<$.G().a)){s.f=0.32
r=new D.F("deltaRoll",r,0.32)
r.b=!0
s.ai(r)}t.sav(s)
q=new O.et()
q.b=1
q.c=10
q.f=q.e=q.d=!1
if(!(Math.abs(-1)<$.G().a)){q.b=2
s=new D.F("start",1,2)
s.b=!0
q.aB(s)}s=q.c
if(!(Math.abs(s-8)<$.G().a)){q.c=8
s=new D.F("stop",s,8)
s.b=!0
q.aB(s)}q.sbj(!1)
q.sc3(!1)
p=new M.ck()
p.a=!0
u=O.jZ(u)
p.e=u
u.bl(p.gd6(),p.gd8())
p.y=p.x=p.r=p.f=null
o=X.lz(g)
n=new X.cB()
n.c=1.0471975511965976
n.d=0.1
n.e=2000
n.sav(g)
u=n.c
if(!(Math.abs(u-1.0471975511965976)<$.G().a)){n.c=1.0471975511965976
u=new D.F("fov",u,1.0471975511965976)
u.b=!0
n.ag(u)}u=n.d
if(!(Math.abs(u-0.1)<$.G().a)){n.d=0.1
u=new D.F("near",u,0.1)
u.b=!0
n.ag(u)}u=n.e
if(!(Math.abs(u-2000)<$.G().a)){n.e=2000
u=new D.F("far",u,2000)
u.b=!0
n.ag(u)}u=p.b
if(u!==n){if(u!=null)u.gE().N(0,p.ga3())
m=p.b
p.b=n
n.gE().t(0,p.ga3())
u=new D.F("camera",m,p.b)
u.b=!0
p.a7(u)}u=p.c
if(u!==o){if(u!=null)u.gE().N(0,p.ga3())
m=p.c
p.c=o
o.gE().t(0,p.ga3())
u=new D.F("target",m,p.c)
u.b=!0
p.a7(u)}p.scm(g)
u=p.e
s=[H.ad(u,0)]
if(u.dC(H.c([t],s))){r=u.a
l=r.length
r.push(t)
u.d3(l,H.c([t],s))}p.scm(q)
u=p.b
k=V.aO(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
s=new U.cg()
s.a=k
u.sav(s)
u=document
j=u.getElementById(h)
if(j==null)H.L(P.Q("Failed to find an element with the identifier, testCanvas."))
i=E.m9(j,!0,!0,!0,!1)
s=i.d
if(s!==p){if(s!=null)s.gE().N(0,i.gbq())
i.d=p
p.gE().t(0,i.gbq())
i.br()}s=new V.ed(f)
u=u.getElementById(f)
s.c=u
if(u==null)H.L("Failed to find controls for CheckGroup")
s.d=H.c([],[W.ef])
s.bM(0,"grey",new Y.j4(q),!0)
s.dZ(0,"invert",new Y.j5(q))
u=i.Q
if(u==null)u=i.Q=D.ax()
s=u.b
u=s==null?u.b=H.c([],[{func:1,ret:-1,args:[D.W]}]):s
u.push(new Y.j6(e,q))
V.nk(i)},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,Y]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jo.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gA:function(a){return H.bJ(a)},
h:function(a){return"Instance of '"+H.f(H.bK(a))+"'"}}
J.f0.prototype={
h:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iaU:1}
J.cq.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gA:function(a){return 0}}
J.cr.prototype={
gA:function(a){return 0},
h:function(a){return String(a)},
$ilF:1}
J.fE.prototype={}
J.b9.prototype={}
J.aL.prototype={
h:function(a){var u=a[$.kW()]
if(u==null)return this.cE(a)
return"JavaScript function for "+H.f(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aJ.prototype={
bf:function(a,b){if(!!a.fixed$length)H.L(P.r("removeAt"))
if(b<0||b>=a.length)throw H.b(P.cE(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.L(P.r("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
X:function(a,b){var u,t
if(!!a.fixed$length)H.L(P.r("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
C:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.b(P.au(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
ev:function(a){return this.l(a,"")},
em:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.b(P.au(a))}return u},
en:function(a,b,c){return this.em(a,b,c,null)},
el:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.b(P.au(a))}throw H.b(H.eZ())},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cA:function(a,b,c){if(b<0||b>a.length)throw H.b(P.O(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.b(P.O(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.ad(a,0)])
return H.c(a.slice(b,c),[H.ad(a,0)])},
gek:function(a){if(a.length>0)return a[0]
throw H.b(H.eZ())},
ga6:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.eZ())},
bQ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.b(P.au(a))}return!1},
B:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
h:function(a){return P.jl(a,"[","]")},
gI:function(a){return new J.a5(a,a.length)},
gA:function(a){return H.bJ(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.L(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.jf(b,u,null))
if(b<0)throw H.b(P.O(b,0,null,u,null))
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.b(H.bi(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.L(P.r("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bi(a,b))
a[b]=c},
$in:1,
$il:1,
$io:1}
J.jn.prototype={}
J.a5.prototype={
gu:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.b(H.x(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bz.prototype={
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
if(C.a.M(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.L(P.r("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.J("0",r)},
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
J.cp.prototype={$it:1}
J.f1.prototype={}
J.aK.prototype={
M:function(a,b){if(b<0)throw H.b(H.bi(a,b))
if(b>=a.length)H.L(H.bi(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(b>=a.length)throw H.b(H.bi(a,b))
return a.charCodeAt(b)},
O:function(a,b){if(typeof b!=="string")throw H.b(P.jf(b,null,null))
return a+b},
ap:function(a,b,c,d){var u,t
c=P.aC(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.L(H.a2(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
V:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.O(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
T:function(a,b){return this.V(a,b,0)},
n:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.L(H.a2(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.L()
if(b<0)throw H.b(P.cE(b,null))
if(b>c)throw H.b(P.cE(b,null))
if(c>a.length)throw H.b(P.cE(c,null))
return a.substring(b,c)},
a2:function(a,b){return this.n(a,b,null)},
eZ:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.N)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.J(" ",u)+a},
eH:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.J(c,u)},
aH:function(a,b,c){var u
if(c<0||c>a.length)throw H.b(P.O(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
c0:function(a,b){return this.aH(a,b,0)},
e7:function(a,b,c){var u=a.length
if(c>u)throw H.b(P.O(c,0,u,null,null))
return H.kT(a,b,c)},
B:function(a,b){return this.e7(a,b,0)},
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
i:function(a,b){return C.a.M(this.a,b)},
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$al:function(){return[P.t]},
$ao:function(){return[P.t]}}
H.n.prototype={}
H.cu.prototype={
gI:function(a){return new H.aM(this,this.gk(this))},
aO:function(a,b){return this.cD(0,b)}}
H.aM.prototype={
gu:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.ac(s),q=r.gk(s)
if(t.b!=q)throw H.b(P.au(s))
u=t.c
if(typeof q!=="number")return H.w(q)
if(u>=q){t.d=null
return!1}t.d=r.w(s,u);++t.c
return!0}}
H.bB.prototype={
gI:function(a){return new H.fi(J.as(this.a),this.b)},
gk:function(a){return J.Z(this.a)},
w:function(a,b){return this.b.$1(J.dY(this.a,b))},
$al:function(a,b){return[b]}}
H.eA.prototype={$in:1,
$an:function(a,b){return[b]}}
H.fi.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gu(t))
return!0}u.a=null
return!1},
gu:function(a){return this.a}}
H.fj.prototype={
gk:function(a){return J.Z(this.a)},
w:function(a,b){return this.b.$1(J.dY(this.a,b))},
$an:function(a,b){return[b]},
$acu:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.bS.prototype={
gI:function(a){return new H.i2(J.as(this.a),this.b)}}
H.i2.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gu(u)))return!0
return!1},
gu:function(a){var u=this.a
return u.gu(u)}}
H.cl.prototype={}
H.hF.prototype={
m:function(a,b,c){throw H.b(P.r("Cannot modify an unmodifiable list"))}}
H.cU.prototype={}
H.ej.prototype={
h:function(a){return P.js(this)},
m:function(a,b,c){return H.lu()},
$iI:1}
H.ek.prototype={
gk:function(a){return this.a},
b6:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.b6(0,b))return
return this.bA(b)},
bA:function(a){return this.b[a]},
C:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.bA(s))}}}
H.hm.prototype={
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
H.fA.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f4.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hE.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jb.prototype={
$1:function(a){if(!!J.K(a).$ib0)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dx.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bs.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.c8(t==null?"unknown":t)+"'"},
gf2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hb.prototype={}
H.h3.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c8(u)+"'"}}
H.bq.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bq))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gA:function(a){var u,t=this.c
if(t==null)u=H.bJ(this.a)
else u=typeof t!=="object"?J.je(t):H.bJ(t)
return(u^H.bJ(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bK(u))+"'")}}
H.eb.prototype={
h:function(a){return this.a}}
H.fP.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.a8.prototype={
gk:function(a){return this.a},
ges:function(a){return this.a===0},
gS:function(a){return new H.f9(this,[H.ad(this,0)])},
gf1:function(a){var u=this
return H.lM(u.gS(u),new H.f3(u),H.ad(u,0),H.ad(u,1))},
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
return s}else return q.eq(b)},
eq:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bC(r,s.c1(a))
t=s.c2(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.bu(u==null?s.b=s.aY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.bu(t==null?s.c=s.aY():t,b,c)}else s.er(b,c)},
er:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.aY()
u=r.c1(a)
t=r.bC(q,u)
if(t==null)r.b0(q,u,[r.aZ(a,b)])
else{s=r.c2(t,a)
if(s>=0)t[s].b=b
else t.push(r.aZ(a,b))}},
C:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.b(P.au(u))
t=t.c}},
bu:function(a,b,c){var u=this.aC(a,b)
if(u==null)this.b0(a,b,this.aZ(b,c))
else u.b=c},
d2:function(){this.r=this.r+1&67108863},
aZ:function(a,b){var u,t=this,s=new H.f8(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.d2()
return s},
c1:function(a){return J.je(a)&0x3ffffff},
c2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
h:function(a){return P.js(this)},
aC:function(a,b){return a[b]},
bC:function(a,b){return a[b]},
b0:function(a,b,c){a[b]=c},
d_:function(a,b){delete a[b]},
cW:function(a,b){return this.aC(a,b)!=null},
aY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b0(t,u,t)
this.d_(t,u)
return t}}
H.f3.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ad(u,1),args:[H.ad(u,0)]}}}
H.f8.prototype={}
H.f9.prototype={
gk:function(a){return this.a.a},
gI:function(a){var u=this.a,t=new H.fa(u,u.r)
t.c=u.e
return t}}
H.fa.prototype={
gu:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j0.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j1.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j2.prototype={
$1:function(a){return this.a(a)}}
H.f2.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$im_:1}
H.bG.prototype={$ibG:1}
H.aP.prototype={$iaP:1}
H.cv.prototype={
gk:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bH.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.D]},
$aq:function(){return[P.D]},
$il:1,
$al:function(){return[P.D]},
$io:1,
$ao:function(){return[P.D]}}
H.cw.prototype={
m:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.t]},
$aq:function(){return[P.t]},
$il:1,
$al:function(){return[P.t]},
$io:1,
$ao:function(){return[P.t]}}
H.fs.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.ft.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fu.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fv.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fw.prototype={
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.cx.prototype={
gk:function(a){return a.length},
i:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.bI.prototype={
gk:function(a){return a.length},
i:function(a,b){H.ar(b,a,a.length)
return a[b]},
$ibI:1,
$ib8:1}
H.bW.prototype={}
H.bX.prototype={}
H.bY.prototype={}
H.bZ.prototype={}
P.i4.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:12}
P.i3.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i5.prototype={
$0:function(){this.a.$0()}}
P.i6.prototype={
$0:function(){this.a.$0()}}
P.dD.prototype={
cO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bh(new P.iF(this,b),0),a)
else throw H.b(P.r("`setTimeout()` not found."))},
cP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bh(new P.iE(this,a,Date.now(),b),0),a)
else throw H.b(P.r("Periodic timer."))},
$icP:1}
P.iF.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iE.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.cG(u,q)}s.c=r
t.d.$1(s)}}
P.bb.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.bc.prototype={
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
if(t instanceof P.bb){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.as(u)
if(!!r.$ibc){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iB.prototype={
gI:function(a){return new P.bc(this.a())}}
P.cZ.prototype={}
P.cL.prototype={}
P.h6.prototype={}
P.cP.prototype={}
P.iO.prototype={}
P.iU.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cA():s
s=this.b
if(s==null)throw H.b(t)
u=H.b(t)
u.stack=s.h(0)
throw u}}
P.il.prototype={
eU:function(a){var u,t,s,r=null
try{if(C.f===$.ab){a.$0()
return}P.mR(r,r,this,a)}catch(s){u=H.Y(s)
t=H.jG(s)
P.kE(r,r,this,u,t)}},
eV:function(a,b){var u,t,s,r=null
try{if(C.f===$.ab){a.$1(b)
return}P.mS(r,r,this,a,b)}catch(s){u=H.Y(s)
t=H.jG(s)
P.kE(r,r,this,u,t)}},
eW:function(a,b){return this.eV(a,b,null)},
e5:function(a){return new P.im(this,a)},
bR:function(a,b){return new P.io(this,a,b)}}
P.im.prototype={
$0:function(){return this.a.eU(this.b)}}
P.io.prototype={
$1:function(a){return this.a.eW(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ii.prototype={
gI:function(a){var u=new P.dd(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
B:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cV(b)
return t}},
cV:function(a){var u=this.d
if(u==null)return!1
return this.aW(this.bB(u,a),a)>=0},
t:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bv(u==null?s.b=P.jy():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bv(t==null?s.c=P.jy():t,b)}else return s.cR(0,b)},
cR:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jy()
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
aT:function(a){var u,t=this,s=new P.ij(a)
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
bx:function(a){return J.je(a)&1073741823},
bB:function(a,b){return a[this.bx(b)]},
aW:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.ij.prototype={}
P.dd.prototype={
gu:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.au(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eY.prototype={}
P.fb.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:2}
P.fc.prototype={$in:1,$il:1,$io:1}
P.q.prototype={
gI:function(a){return new H.aM(a,this.gk(a))},
w:function(a,b){return this.i(a,b)},
eY:function(a,b){var u,t,s=this,r=H.c([],[H.n7(s,a,"q",0)])
C.b.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.w(t)
if(!(u<t))break
t=s.i(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
eX:function(a){return this.eY(a,!0)},
eh:function(a,b,c,d){var u
P.aC(b,c,this.gk(a))
for(u=b;u<c;++u)this.m(a,u,d)},
h:function(a){return P.jl(a,"[","]")}}
P.ff.prototype={}
P.fg.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:2}
P.R.prototype={
C:function(a,b){var u,t
for(u=J.as(this.gS(a));u.p();){t=u.gu(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.Z(this.gS(a))},
h:function(a){return P.js(a)},
$iI:1}
P.iG.prototype={
m:function(a,b,c){throw H.b(P.r("Cannot modify unmodifiable map"))}}
P.fh.prototype={
i:function(a,b){return J.jP(this.a,b)},
m:function(a,b,c){J.jc(this.a,b,c)},
C:function(a,b){J.jQ(this.a,b)},
gk:function(a){return J.Z(this.a)},
h:function(a){return J.a3(this.a)},
$iI:1}
P.cV.prototype={}
P.iq.prototype={
X:function(a,b){var u
for(u=J.as(b);u.p();)this.t(0,u.gu(u))},
h:function(a){return P.jl(this,"{","}")},
w:function(a,b){var u,t,s
P.kd(b,"index")
for(u=P.mt(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.b(P.B(b,this,"index",null,t))},
$in:1,
$il:1}
P.de.prototype={}
P.dI.prototype={}
P.e7.prototype={
ez:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aC(a0,a1,b.length)
u=$.la()
if(typeof a1!=="number")return H.w(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.v(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.j_(C.a.v(b,n))
j=H.j_(C.a.v(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.M("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.M("")
g=r.a+=C.a.n(b,s,t)
r.a=g+H.b5(m)
s=n
continue}}throw H.b(P.J("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.n(b,s,a1)
f=g.length
if(q>=0)P.jU(b,p,a1,q,o,f)
else{e=C.c.az(f-1,4)+1
if(e===1)throw H.b(P.J(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.ap(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.jU(b,p,a1,q,o,d)
else{e=C.c.az(d,4)
if(e===1)throw H.b(P.J(c,b,a1))
if(e>1)b=C.a.ap(b,a1,a1,e===2?"==":"=")}return b}}
P.e8.prototype={}
P.eg.prototype={}
P.el.prototype={}
P.eC.prototype={}
P.eU.prototype={
h:function(a){return this.a}}
P.eT.prototype={
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
if(c>b)q.a+=J.lm(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hN.prototype={
geg:function(){return C.O}}
P.hP.prototype={
b7:function(a){var u,t,s,r=P.aC(0,null,a.length)
if(typeof r!=="number")return r.W()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iM(t)
if(s.d1(a,0,r)!==r)s.bL(J.lh(a,r-1),0)
return new Uint8Array(t.subarray(0,H.mK(0,s.b,t.length)))}}
P.iM.prototype={
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
if(b!==c&&(C.a.M(a,c-1)&64512)===55296)--c
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
P.hO.prototype={
b7:function(a){var u,t,s,r,q,p,o,n,m=P.md(!1,a,0,null)
if(m!=null)return m
u=P.aC(0,null,J.Z(a))
t=P.kG(a,0,u)
if(t>0){s=P.bN(a,0,t)
if(t===u)return s
r=new P.M(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.M("")
o=new P.iL(!1,r)
o.c=p
o.e8(a,q,u)
if(o.e>0){H.L(P.J("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.b5(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.iL.prototype={
e8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.ac(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.aP()
if((r&192)!==128){q=P.J(k+C.c.ay(r,16),a,s)
throw H.b(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.J("Overlong encoding of 0x"+C.c.ay(j,16),a,s-h-1)
throw H.b(q)}if(j>1114111){q=P.J("Character outside valid Unicode range: 0x"+C.c.ay(j,16),a,s-h-1)
throw H.b(q)}if(!l.c||j!==65279)t.a+=H.b5(j)
l.c=!1}if(typeof c!=="number")return H.w(c)
q=s<c
for(;q;){p=P.kG(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bN(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.L()
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
P.av.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.av&&this.a===b.a&&!0},
am:function(a,b){return C.c.am(this.a,b.a)},
gA:function(a){var u=this.a
return(u^C.c.ak(u,30))&1073741823},
h:function(a){var u=this,t=P.lv(H.lW(u)),s=P.ch(H.lU(u)),r=P.ch(H.lQ(u)),q=P.ch(H.lR(u)),p=P.ch(H.lT(u)),o=P.ch(H.lV(u)),n=P.lw(H.lS(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.D.prototype={}
P.aH.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gA:function(a){return C.c.gA(this.a)},
am:function(a,b){return C.c.am(this.a,b.a)},
h:function(a){var u,t,s,r=new P.ez(),q=this.a
if(q<0)return"-"+new P.aH(0-q).h(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.ey().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.ey.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ez.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.b0.prototype={}
P.cA.prototype={
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
r=P.jk(q.b)
return t+s+": "+r}}
P.b6.prototype={
gaV:function(){return"RangeError"},
gaU:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.eV.prototype={
gaV:function(){return"RangeError"},
gaU:function(){var u,t=this.b
if(typeof t!=="number")return t.L()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.hG.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hC.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bM.prototype={
h:function(a){return"Bad state: "+this.a}}
P.ei.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jk(u)+"."}}
P.fD.prototype={
h:function(a){return"Out of Memory"},
$ib0:1}
P.cJ.prototype={
h:function(a){return"Stack Overflow"},
$ib0:1}
P.eq.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.d6.prototype={
h:function(a){return"Exception: "+this.a}}
P.eN.prototype={
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
for(q=g;q<o;++q){p=C.a.M(f,q)
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
return h+l+j+k+"\n"+C.a.J(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.eP.prototype={}
P.t.prototype={}
P.l.prototype={
aO:function(a,b){return new H.bS(this,b,[H.kM(this,"l",0)])},
gk:function(a){var u,t=this.gI(this)
for(u=0;t.p();)++u
return u},
gae:function(a){var u,t=this.gI(this)
if(!t.p())throw H.b(H.eZ())
u=t.gu(t)
if(t.p())throw H.b(H.lC())
return u},
w:function(a,b){var u,t,s
P.kd(b,"index")
for(u=this.gI(this),t=0;u.p();){s=u.gu(u)
if(b===t)return s;++t}throw H.b(P.B(b,this,"index",null,t))},
h:function(a){return P.lB(this,"(",")")}}
P.f_.prototype={}
P.o.prototype={$in:1,$il:1}
P.I.prototype={}
P.aQ.prototype={
gA:function(a){return P.S.prototype.gA.call(this,this)},
h:function(a){return"null"}}
P.X.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
q:function(a,b){return this===b},
gA:function(a){return H.bJ(this)},
h:function(a){return"Instance of '"+H.f(H.bK(this))+"'"},
toString:function(){return this.h(this)}}
P.h.prototype={}
P.M.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.hL.prototype={
$2:function(a,b){var u,t,s,r=J.c6(b).c0(b,"=")
if(r===-1){if(b!=="")J.jc(a,P.jC(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.n(b,0,r)
t=C.a.a2(b,r+1)
s=this.a
J.jc(a,P.jC(u,0,u.length,s,!0),P.jC(t,0,t.length,s,!0))}return a}}
P.hI.prototype={
$2:function(a,b){throw H.b(P.J("Illegal IPv4 address, "+a,this.a,b))}}
P.hJ.prototype={
$2:function(a,b){throw H.b(P.J("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.hK.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.dW(C.a.n(this.b,a,b),null,16)
if(typeof u!=="number")return u.L()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bd.prototype={
gcs:function(){return this.b},
gb9:function(a){var u=this.c
if(u==null)return""
if(C.a.T(u,"["))return C.a.n(u,1,u.length-1)
return u},
gaJ:function(a){var u=this.d
if(u==null)return P.kx(this.a)
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
if(t&&!C.a.T(u,"/"))u="/"+u
s=P.jA(null,0,0,b)
return new P.bd(q,o,m,n,u,s,r.r)},
gaL:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.cV(P.kn(t==null?"":t),[u,u])
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
if(!!J.K(b).$ijv)if(s.a==b.gaR())if(s.c!=null===b.gbX())if(s.b==b.gcs())if(s.gb9(s)==b.gb9(b))if(s.gaJ(s)==b.gaJ(b))if(s.e===b.gcc(b)){u=s.f
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
$ijv:1,
gaR:function(){return this.a},
gcc:function(a){return this.e}}
P.iH.prototype={
$1:function(a){throw H.b(P.J("Invalid port",this.a,this.b+1))}}
P.iI.prototype={
$1:function(a){return P.dJ(C.Z,a,C.e,!1)}}
P.iK.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.dJ(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.dJ(C.h,b,C.e,!0))}}}
P.iJ.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.as(b),t=this.a;u.p();)t.$2(a,u.gu(u))}}
P.hH.prototype={
gcr:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.aH(u,"?",o)
s=u.length
if(t>=0){r=P.c3(u,t+1,s,C.j,!1)
s=t}else r=p
return q.c=new P.ia("data",p,p,p,P.c3(u,o,s,C.z,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.iQ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.iP.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lj(u,0,96,b)
return u},
$S:13}
P.iR.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.v(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.iS.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.v(b,0),t=C.a.v(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.it.prototype={
gbX:function(){return this.c>0},
gbZ:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.O()
t=this.e
if(typeof t!=="number")return H.w(t)
t=u+1<t
u=t}else u=!1
return u},
gc_:function(){var u=this.f
if(typeof u!=="number")return u.L()
return u<this.r},
gbY:function(){return this.r<this.a.length},
gbD:function(){return this.b===4&&C.a.T(this.a,"http")},
gbE:function(){return this.b===5&&C.a.T(this.a,"https")},
gaR:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gbD())q=t.x="http"
else if(t.gbE()){t.x="https"
q="https"}else if(q===4&&C.a.T(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.T(t.a,r)){t.x=r
q=r}else{q=C.a.n(t.a,0,q)
t.x=q}return q},
gcs:function(){var u=this.c,t=this.b+3
return u>t?C.a.n(this.a,t,u-1):""},
gb9:function(a){var u=this.c
return u>0?C.a.n(this.a,u,this.d):""},
gaJ:function(a){var u,t=this
if(t.gbZ()){u=t.d
if(typeof u!=="number")return u.O()
return P.dW(C.a.n(t.a,u+1,t.e),null,null)}if(t.gbD())return 80
if(t.gbE())return 443
return 0},
gcc:function(a){return C.a.n(this.a,this.e,this.f)},
gbe:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.L()
return u<t?C.a.n(this.a,u+1,t):""},
gbW:function(){var u=this.r,t=this.a
return u<t.length?C.a.a2(t,u+1):""},
gaL:function(){var u=this,t=u.f
if(typeof t!=="number")return t.L()
if(t>=u.r)return C.a_
t=P.h
return new P.cV(P.kn(u.gbe(u)),[t,t])},
ci:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gaR(),m=n==="file",l=p.c,k=l>0?C.a.n(p.a,p.b+3,l):"",j=p.gbZ()?p.gaJ(p):o
l=p.c
if(l>0)u=C.a.n(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.n(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.T(t,"/"))t="/"+t
r=P.jA(o,0,0,b)
s=p.r
q=s<l.length?C.a.a2(l,s+1):o
return new P.bd(n,k,u,j,t,r,q)},
gA:function(a){var u=this.y
return u==null?this.y=C.a.gA(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.K(b).$ijv&&this.a===b.h(0)},
h:function(a){return this.a},
$ijv:1}
P.ia.prototype={}
W.m.prototype={}
W.dZ.prototype={
gk:function(a){return a.length}}
W.e_.prototype={
h:function(a){return String(a)}}
W.e0.prototype={
h:function(a){return String(a)}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.aZ.prototype={
cv:function(a,b,c){var u=a.getContext(b,P.n0(c))
return u},
$iaZ:1}
W.aG.prototype={
gk:function(a){return a.length}}
W.em.prototype={
gk:function(a){return a.length}}
W.y.prototype={$iy:1}
W.bt.prototype={
gk:function(a){return a.length}}
W.en.prototype={}
W.a_.prototype={}
W.af.prototype={}
W.eo.prototype={
gk:function(a){return a.length}}
W.ep.prototype={
gk:function(a){return a.length}}
W.es.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$ia6:1}
W.ev.prototype={
h:function(a){return String(a)}}
W.ci.prototype={
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
W.cj.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaq(a))+" x "+H.f(this.gan(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.K(b)
return!!u.$ia0&&a.left===u.gc4(b)&&a.top===u.gcp(b)&&this.gaq(a)===u.gaq(b)&&this.gan(a)===u.gan(b)},
gA:function(a){return W.kv(C.d.gA(a.left),C.d.gA(a.top),C.d.gA(this.gaq(a)),C.d.gA(this.gan(a)))},
gan:function(a){return a.height},
gc4:function(a){return a.left},
gcp:function(a){return a.top},
gaq:function(a){return a.width},
$ia0:1,
$aa0:function(){return[P.X]}}
W.ew.prototype={
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
W.ex.prototype={
gk:function(a){return a.length}}
W.i8.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
t:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var u=this.eX(this)
return new J.a5(u,u.length)},
$an:function(){return[W.E]},
$aq:function(){return[W.E]},
$al:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
ge4:function(a){return new W.ib(a)},
gb5:function(a){return new W.i8(a,a.children)},
h:function(a){return a.localName},
Y:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.k1
if(u==null){u=H.c([],[W.az])
t=new W.cz(u)
u.push(W.ku(null))
u.push(W.kw())
$.k1=t
d=t}else d=u
u=$.k0
if(u==null){u=new W.dK(d)
$.k0=u
c=u}else{u.a=d
c=u}}if($.aw==null){u=document
t=u.implementation.createHTMLDocument("")
$.aw=t
$.jj=t.createRange()
s=$.aw.createElement("base")
s.href=u.baseURI
$.aw.head.appendChild(s)}u=$.aw
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aw
if(!!this.$iaX)r=u.body
else{r=u.createElement(a.tagName)
$.aw.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.B(C.X,a.tagName)){$.jj.selectNodeContents(r)
q=$.jj.createContextualFragment(b)}else{r.innerHTML=b
q=$.aw.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aw.body
if(r==null?u!=null:r!==u)J.jS(r)
c.bk(q)
document.adoptNode(q)
return q},
ea:function(a,b,c){return this.Y(a,b,c,null)},
cz:function(a,b){a.textContent=null
a.appendChild(this.Y(a,b,null,null))},
$iE:1,
gcl:function(a){return a.tagName}}
W.eB.prototype={
$1:function(a){return!!J.K(a).$iE}}
W.i.prototype={$ii:1}
W.e.prototype={
e0:function(a,b,c,d){if(c!=null)this.cS(a,b,c,!1)},
cS:function(a,b,c,d){return a.addEventListener(b,H.bh(c,1),!1)}}
W.a7.prototype={$ia7:1}
W.bw.prototype={
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
$ibw:1}
W.eI.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
gk:function(a){return a.length}}
W.ag.prototype={$iag:1}
W.eS.prototype={
gk:function(a){return a.length}}
W.bx.prototype={
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
W.by.prototype={$iby:1}
W.ef.prototype={$iE:1,$iv:1}
W.b2.prototype={$ib2:1}
W.fd.prototype={
h:function(a){return String(a)}}
W.fk.prototype={
gk:function(a){return a.length}}
W.bE.prototype={$ibE:1}
W.fl.prototype={
i:function(a,b){return P.aE(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gS:function(a){var u=H.c([],[P.h])
this.C(a,new W.fm(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
W.fm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fn.prototype={
i:function(a,b){return P.aE(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gS:function(a){var u=H.c([],[P.h])
this.C(a,new W.fo(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
W.fo.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ah.prototype={$iah:1}
W.fp.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ah]},
$iu:1,
$au:function(){return[W.ah]},
$aq:function(){return[W.ah]},
$il:1,
$al:function(){return[W.ah]},
$io:1,
$ao:function(){return[W.ah]}}
W.ai.prototype={$iai:1}
W.T.prototype={
gae:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.b(P.kf("No elements"))
if(t>1)throw H.b(P.kf("More than one element"))
return u.firstChild},
X:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gI:function(a){var u=this.a.childNodes
return new W.cm(u,u.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$an:function(){return[W.v]},
$aq:function(){return[W.v]},
$al:function(){return[W.v]},
$ao:function(){return[W.v]}}
W.v.prototype={
eP:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
eS:function(a,b){var u,t
try{u=a.parentNode
J.lf(u,b,a)}catch(t){H.Y(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.cC(a):u},
dO:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cy.prototype={
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
W.aj.prototype={$iaj:1,
gk:function(a){return a.length}}
W.fG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aj]},
$iu:1,
$au:function(){return[W.aj]},
$aq:function(){return[W.aj]},
$il:1,
$al:function(){return[W.aj]},
$io:1,
$ao:function(){return[W.aj]}}
W.fN.prototype={
i:function(a,b){return P.aE(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gS:function(a){var u=H.c([],[P.h])
this.C(a,new W.fO(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
W.fO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fQ.prototype={
gk:function(a){return a.length}}
W.al.prototype={$ial:1}
W.h0.prototype={
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
W.am.prototype={$iam:1}
W.h1.prototype={
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
W.an.prototype={$ian:1,
gk:function(a){return a.length}}
W.h4.prototype={
i:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
C:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gS:function(a){var u=H.c([],[P.h])
this.C(a,new W.h5(u))
return u},
gk:function(a){return a.length},
$aR:function(){return[P.h,P.h]},
$iI:1,
$aI:function(){return[P.h,P.h]}}
W.h5.prototype={
$2:function(a,b){return this.a.push(a)}}
W.a9.prototype={$ia9:1}
W.cM.prototype={
Y:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
u=W.lx("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.T(t).X(0,new W.T(u))
return t}}
W.h8.prototype={
Y:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.Y(u.createElement("table"),b,c,d)
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
W.h9.prototype={
Y:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.Y(u.createElement("table"),b,c,d)
u.toString
u=new W.T(u)
s=u.gae(u)
t.toString
s.toString
new W.T(t).X(0,new W.T(s))
return t}}
W.bO.prototype={$ibO:1}
W.ao.prototype={$iao:1}
W.aa.prototype={$iaa:1}
W.hc.prototype={
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
W.hd.prototype={
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
W.hf.prototype={
gk:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.b7.prototype={$ib7:1}
W.hj.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ap]},
$iu:1,
$au:function(){return[W.ap]},
$aq:function(){return[W.ap]},
$il:1,
$al:function(){return[W.ap]},
$io:1,
$ao:function(){return[W.ap]}}
W.hk.prototype={
gk:function(a){return a.length}}
W.aR.prototype={}
W.hM.prototype={
h:function(a){return String(a)}}
W.i0.prototype={
gk:function(a){return a.length}}
W.aS.prototype={
ged:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.b(P.r("deltaY is not supported"))},
gec:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.b(P.r("deltaX is not supported"))},
$iaS:1}
W.bT.prototype={
dP:function(a,b){return a.requestAnimationFrame(H.bh(b,1))},
d0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.i9.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iu:1,
$au:function(){return[W.y]},
$aq:function(){return[W.y]},
$il:1,
$al:function(){return[W.y]},
$io:1,
$ao:function(){return[W.y]}}
W.d1.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.K(b)
return!!u.$ia0&&a.left===u.gc4(b)&&a.top===u.gcp(b)&&a.width===u.gaq(b)&&a.height===u.gan(b)},
gA:function(a){return W.kv(C.d.gA(a.left),C.d.gA(a.top),C.d.gA(a.width),C.d.gA(a.height))},
gan:function(a){return a.height},
gaq:function(a){return a.width}}
W.ig.prototype={
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
W.dj.prototype={
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
W.iu.prototype={
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
W.iz.prototype={
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
W.i7.prototype={
C:function(a,b){var u,t,s,r,q
for(u=this.gS(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gS:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.h,P.h]},
$aI:function(){return[P.h,P.h]}}
W.ib.prototype={
i:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gk:function(a){return this.gS(this).length}}
W.id.prototype={}
W.ie.prototype={
$1:function(a){return this.a.$1(a)}}
W.bU.prototype={
cL:function(a){var u
if($.bV.ges($.bV)){for(u=0;u<262;++u)$.bV.m(0,C.W[u],W.n9())
for(u=0;u<12;++u)$.bV.m(0,C.n[u],W.na())}},
al:function(a){return $.lb().B(0,W.bu(a))},
a5:function(a,b,c){var u=$.bV.i(0,H.f(W.bu(a))+"::"+b)
if(u==null)u=$.bV.i(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaz:1}
W.A.prototype={
gI:function(a){return new W.cm(a,this.gk(a))}}
W.cz.prototype={
al:function(a){return C.b.bQ(this.a,new W.fy(a))},
a5:function(a,b,c){return C.b.bQ(this.a,new W.fx(a,b,c))},
$iaz:1}
W.fy.prototype={
$1:function(a){return a.al(this.a)}}
W.fx.prototype={
$1:function(a){return a.a5(this.a,this.b,this.c)}}
W.ds.prototype={
cN:function(a,b,c,d){var u,t,s
this.a.X(0,c)
u=b.aO(0,new W.ir())
t=b.aO(0,new W.is())
this.b.X(0,u)
s=this.c
s.X(0,C.w)
s.X(0,t)},
al:function(a){return this.a.B(0,W.bu(a))},
a5:function(a,b,c){var u=this,t=W.bu(a),s=u.c
if(s.B(0,H.f(t)+"::"+b))return u.d.e2(c)
else if(s.B(0,"*::"+b))return u.d.e2(c)
else{s=u.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
$iaz:1}
W.ir.prototype={
$1:function(a){return!C.b.B(C.n,a)}}
W.is.prototype={
$1:function(a){return C.b.B(C.n,a)}}
W.iC.prototype={
a5:function(a,b,c){if(this.cF(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.iD.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)}}
W.iA.prototype={
al:function(a){var u=J.K(a)
if(!!u.$ibL)return!1
u=!!u.$ij
if(u&&W.bu(a)==="foreignObject")return!1
if(u)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.a.T(b,"on"))return!1
return this.al(a)},
$iaz:1}
W.cm.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.jP(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gu:function(a){return this.d}}
W.az.prototype={}
W.ip.prototype={}
W.dK.prototype={
bk:function(a){new W.iN(this).$2(a,null)},
as:function(a,b){if(b==null)J.jS(a)
else b.removeChild(a)},
dR:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lk(a)
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
try{t=J.a3(a)}catch(r){H.Y(r)}try{s=W.bu(a)
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
return}u=f.gS(f)
t=H.c(u.slice(0),[H.ad(u,0)])
for(s=f.gS(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.a5(a,J.ln(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.K(a).$ibO)p.bk(a.content)}}
W.iN.prototype={
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
W.d0.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.c_.prototype={}
W.c0.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dy.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.c1.prototype={}
W.c2.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
P.iv.prototype={
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
if(!!u.$iav)return new Date(a.a)
if(!!u.$im_)throw H.b(P.hD("structured clone of RegExp"))
if(!!u.$ia7)return a
if(!!u.$iaW)return a
if(!!u.$ibw)return a
if(!!u.$iby)return a
if(!!u.$ibG||!!u.$iaP||!!u.$ibE)return a
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
u.C(a,new P.ix(o,p))
return o.a}if(!!u.$io){t=p.b8(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.e9(a,t)}if(!!u.$ilF){t=p.b8(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.eo(a,new P.iy(o,p))
return o.b}throw H.b(P.hD("structured clone of other type"))},
e9:function(a,b){var u,t=J.ac(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.w(s)
u=0
for(;u<s;++u){q=this.aN(t.i(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.ix.prototype={
$2:function(a,b){this.a.a[a]=this.b.aN(b)},
$S:2}
P.iy.prototype={
$2:function(a,b){this.a.b[a]=this.b.aN(b)},
$S:2}
P.iV.prototype={
$2:function(a,b){this.a[a]=b},
$S:2}
P.iw.prototype={
eo:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.eJ.prototype={
gaD:function(){var u=this.b,t=H.kM(u,"q",0)
return new H.bB(new H.bS(u,new P.eK(),[t]),new P.eL(),[t,W.E])},
m:function(a,b,c){var u=this.gaD()
J.ll(u.b.$1(J.dY(u.a,b)),c)},
t:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.Z(this.gaD().a)},
i:function(a,b){var u=this.gaD()
return u.b.$1(J.dY(u.a,b))},
gI:function(a){var u=P.jr(this.gaD(),!1,W.E)
return new J.a5(u,u.length)},
$an:function(){return[W.E]},
$aq:function(){return[W.E]},
$al:function(){return[W.E]},
$ao:function(){return[W.E]}}
P.eK.prototype={
$1:function(a){return!!J.K(a).$iE}}
P.eL.prototype={
$1:function(a){return H.dX(a,"$iE")}}
P.ik.prototype={}
P.a0.prototype={}
P.ay.prototype={$iay:1}
P.f6.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.ay]},
$aq:function(){return[P.ay]},
$il:1,
$al:function(){return[P.ay]},
$io:1,
$ao:function(){return[P.ay]}}
P.aA.prototype={$iaA:1}
P.fB.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.aA]},
$aq:function(){return[P.aA]},
$il:1,
$al:function(){return[P.aA]},
$io:1,
$ao:function(){return[P.aA]}}
P.fH.prototype={
gk:function(a){return a.length}}
P.bL.prototype={$ibL:1}
P.h7.prototype={
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
gb5:function(a){return new P.eJ(a,new W.T(a))},
Y:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.az])
p.push(W.ku(null))
p.push(W.kw())
p.push(new W.iA())
c=new W.dK(new W.cz(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.p).ea(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.T(s)
q=p.gae(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.aD.prototype={$iaD:1}
P.hl.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.i(a,b)},
$in:1,
$an:function(){return[P.aD]},
$aq:function(){return[P.aD]},
$il:1,
$al:function(){return[P.aD]},
$io:1,
$ao:function(){return[P.aD]}}
P.db.prototype={}
P.dc.prototype={}
P.dm.prototype={}
P.dn.prototype={}
P.dz.prototype={}
P.dA.prototype={}
P.dG.prototype={}
P.dH.prototype={}
P.b8.prototype={$in:1,
$an:function(){return[P.t]},
$il:1,
$al:function(){return[P.t]},
$io:1,
$ao:function(){return[P.t]}}
P.e3.prototype={
gk:function(a){return a.length}}
P.e4.prototype={
i:function(a,b){return P.aE(a.get(b))},
C:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aE(u.value[1]))}},
gS:function(a){var u=H.c([],[P.h])
this.C(a,new P.e5(u))
return u},
gk:function(a){return a.size},
m:function(a,b,c){throw H.b(P.r("Not supported"))},
$aR:function(){return[P.h,null]},
$iI:1,
$aI:function(){return[P.h,null]}}
P.e5.prototype={
$2:function(a,b){return this.a.push(a)}}
P.e6.prototype={
gk:function(a){return a.length}}
P.aV.prototype={}
P.fC.prototype={
gk:function(a){return a.length}}
P.d_.prototype={}
P.h2.prototype={
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
P.dv.prototype={}
P.dw.prototype={}
K.at.prototype={
aa:function(a,b){return!0},
h:function(a){return"all"}}
K.cn.prototype={
aa:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aa(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.aN.prototype={}
K.U.prototype={
aa:function(a,b){return!this.cB(0,b)},
h:function(a){return"!["+this.bp(0)+"]"}}
K.fI.prototype={
aa:function(a,b){if(typeof b!=="number")return H.w(b)
return this.a<=b&&this.b>=b},
h:function(a){var u=H.b5(this.a),t=H.b5(this.b)
return u+".."+t}}
K.fR.prototype={
cI:function(a){var u,t,s,r
if(a.a.length<=0)throw H.b(P.Q("May not create a Set with zero characters."))
u=P.t
t=new H.a8([u,P.aU])
for(s=new H.aM(a,a.gk(a));s.p();)t.m(0,s.d,!0)
r=P.jr(t.gS(t),!0,u)
if(!!r.immutable$list)H.L(P.r("sort"))
H.m7(r,J.mN())
this.a=r},
aa:function(a,b){return C.b.B(this.a,b)},
h:function(a){return P.bN(this.a,0,null)}}
L.cK.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cS(this.a.j(0,b))
r.a=H.c([],[K.aN])
r.c=!1
this.c.push(r)
return r},
ej:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aa(0,a))return r}return},
h:function(a){return this.b},
bI:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.B(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gS(n),n=n.gI(n);n.p();){t=n.gu(n)
o+="\n"
s=p.d.c.i(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.B(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.x)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cQ.prototype={
h:function(a){var u=H.jK(this.b,"\n","\\n"),t=H.jK(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cR.prototype={
ad:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
L.hg.prototype={
j:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new L.cK(this,b)
u.c=H.c([],[L.cS])
this.a.m(0,b,u)}return u},
G:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new L.cR(a)
u=P.h
t.c=new H.a8([u,u])
this.b.m(0,a,t)}return t},
bi:function(a){return this.f_(a)},
f_:function(a){var u=this
return P.mP(function(){var t=a
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
k=g.ej(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.bN(d,0,null)
throw H.b(P.Q("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.L(P.r("removeRange"))
P.aC(0,m,d.length)
d.splice(0,m-0)
C.b.X(c,d)
d=H.c([],f)
e=H.c([],f)
g=u.d
s=!u.c.B(0,p.a)?7:8
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
if(g.d!=null){j=P.bN(e,0,null)
i=g.d
h=i.c.i(0,j)
p=new L.cQ(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.B(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.mr()
case 1:return P.ms(q)}}},L.cQ)},
h:function(a){var u,t=new P.M(""),s=this.d
if(s!=null)t.a=s.bI()+"\n"
for(s=this.a,s=s.gf1(s),s=s.gI(s);s.p();){u=s.gu(s)
if(u!=this.d)t.a+=u.bI()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cS.prototype={
h:function(a){return this.b.b+": "+this.bp(0)}}
O.eh.prototype={
bl:function(a,b){this.b=null
this.c=a},
dC:function(a){return!0},
d3:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gI:function(a){var u=this.a
return new J.a5(u,u.length)},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$il:1}
O.bD.prototype={
gk:function(a){return this.a.length},
gE:function(){var u=this.b
return u==null?this.b=D.ax():u},
af:function(){var u=this.b
if(u!=null)u.Z(null)},
gau:function(a){var u=this.a
if(u.length>0)return C.b.ga6(u)
else return V.k6()},
cf:function(a){var u=this.a
if(a==null)u.push(V.k6())
else u.push(a)
this.af()},
bd:function(){var u=this.a
if(u.length>0){u.pop()
this.af()}}}
E.e9.prototype={}
E.aI.prototype={
sbn:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gE().N(0,s.gc9())
u=s.c
if(u!=null)u.gE().t(0,s.gc9())
t=new D.F("shape",r,s.c)
t.b=!0
s.ab(t)}},
sav:function(a){var u,t,s=this
if(!J.H(s.r,a)){u=s.r
if(u!=null)u.gE().N(0,s.gc7())
if(a!=null)a.gE().t(0,s.gc7())
s.r=a
t=new D.F("mover",u,a)
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
u=u.J(0,V.aO(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.J(0,V.aO(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.aM(0)}q=m.x}else q=null
if(!J.H(q,n.x)){p=n.x
n.x=q
o=new D.F("matrix",p,q)
o.b=!0
n.ab(o)}for(m=n.y.a,m=new J.a5(m,m.length);m.p();)m.d.cq(0,b)},
ao:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gau(n))
else n.a.push(m.J(0,n.gau(n)))
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
t=new A.eu(m,s)
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
t.Q=H.dX(t.y.i(0,"width"),"$ibP")
t.ch=H.dX(t.y.i(0,"stop"),"$ibP")
t.cx=H.dX(t.y.i(0,"viewObjMat"),"$ibQ")
t.cy=H.dX(t.y.i(0,"projMat"),"$ibQ")
if(s.length===0)H.L(P.Q("May not cache a shader with no name."))
if(a.fr.b6(0,s))H.L(P.Q('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.m(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.cd)?o.e=null:m)==null){n=o.d.e6(new Z.i1(a.a),$.aF())
m=n.ei($.aF())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.ef()
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
r=a.cx=s.J(0,r.gau(r))
s=r}n=n.cx
n.toString
n.bm(s.cn(0,!0))
if(u.e)m.frontFace(2304)
n=o.e
n.b2(a)
n.ao(a)
n.f0(a)
if(u.e)m.frontFace(2305)
n=u.a
n.toString
m.useProgram(null)
n.x.ee()}for(n=o.y.a,n=new J.a5(n,n.length);n.p();)n.d.ao(a)
a.ce()
a.dx.bd()},
ab:function(a){var u=this.z
if(u!=null)u.Z(a)},
a0:function(){return this.ab(null)},
ca:function(a){this.e=null
this.ab(a)},
eG:function(){return this.ca(null)},
c8:function(a){this.ab(a)},
eF:function(){return this.c8(null)},
c6:function(a){this.ab(a)},
eC:function(){return this.c6(null)},
eB:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gc5(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.x)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bv()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a0()},
eE:function(a,b){var u,t
for(u=b.gI(b),t=this.gc5();u.p();)u.gu(u).gE().N(0,t)
this.a0()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.aY.prototype={
h:function(a){return this.b}}
E.b3.prototype={
h:function(a){return this.b}}
E.ic.prototype={}
E.fJ.prototype={
cH:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.av(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bD()
t=[V.bC]
u.a=H.c([],t)
u.gE().t(0,new E.fK(s))
s.cy=u
u=new O.bD()
u.a=H.c([],t)
u.gE().t(0,new E.fL(s))
s.db=u
u=new O.bD()
u.a=H.c([],t)
u.gE().t(0,new E.fM(s))
s.dx=u
u=H.c([],[O.cN])
s.dy=u
u.push(null)
s.fr=new H.a8([P.h,A.cH])},
cg:function(a){var u=this.dy
u.push(a==null?(u&&C.b).ga6(u):a)},
ce:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fK.prototype={
$1:function(a){}}
E.fL.prototype={
$1:function(a){this.a.cx=null}}
E.fM.prototype={
$1:function(a){this.a.cx=null}}
E.cO.prototype={
bs:function(a){this.cj()},
br:function(){return this.bs(null)},
gep:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.k_(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.av(s,!1)
return u/r},
bF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.w(r)
u=C.d.bV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.d.bV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ki(C.l,s.geT())}},
cj:function(){if(!this.cx){this.cx=!0
var u=window
C.D.d0(u)
C.D.dP(u,W.kH(new E.he(this),P.X))}},
eR:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.av(r,!1)
s.y=P.k_(r-s.r.a).a*0.000001
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
t=H.jG(q)
P.jJ("Error: "+H.f(u))
P.jJ("Stack: "+H.f(t))
throw H.b(u)}}}
E.he.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.eR()}}}
Z.cY.prototype={}
Z.cc.prototype={
b2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.Y(s)
t=P.Q('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.b(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.i1.prototype={}
Z.cd.prototype={
ei:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b2(a)},
f0:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)p.push(u[s].h(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.l(p,", ")+"\nAttrs:   "+C.b.l(r,", ")}}
Z.co.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bK(this.c))+"'")+"]"}}
Z.cX.prototype={
gbo:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.bm().a)!==0)t+=3
if((u&$.bl().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.c9().a)!==0)t+=3
if((u&$.ca().a)!==0)t+=4
if((u&$.bp().a)!==0)++t
return(u&$.bk().a)!==0?t+4:t},
e3:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ca()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0)if(u===a)return t
return $.l9()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cX))return!1
return this.a===b.a},
h:function(a){var u=H.c([],[P.h]),t=this.a
if((t&$.aF().a)!==0)u.push("Pos")
if((t&$.bm().a)!==0)u.push("Norm")
if((t&$.bl().a)!==0)u.push("Binm")
if((t&$.bn().a)!==0)u.push("Txt2D")
if((t&$.bo().a)!==0)u.push("TxtCube")
if((t&$.c9().a)!==0)u.push("Clr3")
if((t&$.ca().a)!==0)u.push("Clr4")
if((t&$.bp().a)!==0)u.push("Weight")
if((t&$.bk().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.l(u,"|")}}
D.ec.prototype={}
D.bv.prototype={
t:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.B(s,b)
if(s===!0){s=t.a
u=(s&&C.b).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.B(s,b)
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
return!0}if(!t)C.b.C(P.jr(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eE(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.W]}])
C.b.C(u,new D.eF(q))}return!0},
aM:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.Z(u)}}}}
D.eE.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eF.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.eW.prototype={}
D.eX.prototype={}
D.F.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.ce.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ce))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cs.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cs))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.f5.prototype={
eM:function(a){this.d.t(0,a.a)
return!1},
eI:function(a){this.d.N(0,a.a)
return!1}}
X.fe.prototype={
bc:function(a,b){this.r=a.a
return!1},
ax:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cw()
if(typeof u!=="number")return u.aP()
this.r=(u&~t)>>>0
return!1},
aw:function(a,b){return!1},
eN:function(a){return!1},
dn:function(a,b,c){return}}
X.bF.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bF))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fq.prototype={
bc:function(a,b){this.f=a.a
return!1},
ax:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cw()
if(typeof u!=="number")return u.aP()
this.f=(u&~t)>>>0
return!1},
aw:function(a,b){return!1},
eO:function(a,b){return!1}}
X.hi.prototype={
eL:function(a){return!1},
eJ:function(a){return!1},
eK:function(a){return!1}}
X.cW.prototype={
by:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cs(u,new X.bF(t,a.altKey,a.shiftKey))},
aj:function(a){a.shiftKey},
b1:function(a){a.shiftKey},
a9:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.W()
u=t.top
if(typeof r!=="number")return r.W()
return new V.ak(s-q,r-u)},
ar:function(a){return new V.ba(a.movementX,a.movementY)},
b_:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.ak])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
q=C.d.a1(r.pageX)
C.d.a1(r.pageY)
p=o.left
C.d.a1(r.pageX)
n.push(new V.ak(q-p,C.d.a1(r.pageY)-o.top))}return n},
a8:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.ce(u,new X.bF(t,a.altKey,a.shiftKey))},
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
this.b.eM(u)},
dk:function(a){var u
if(!this.f)return
u=this.by(a)
this.b.eI(u)},
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
dz:function(a){var u,t,s,r,q,p=this
p.aj(a)
u=(a&&C.C).gec(a)
t=C.C.ged(a)
s=p.Q
if(typeof u!=="number")return u.J()
if(typeof s!=="number")return H.w(s)
if(typeof t!=="number")return t.J()
r=new V.ba(u*s,t*s)
if(p.x){if(p.d.eN(r))a.preventDefault()
return}if(p.r)return
q=p.a9(a)
if(p.c.eO(r,q))a.preventDefault()},
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
if(t.e.eL(u))a.preventDefault()},
dE:function(a){var u
this.b1(a)
u=this.b_(a)
if(this.e.eJ(u))a.preventDefault()},
dG:function(a){var u
this.b1(a)
u=this.b_(a)
if(this.e.eK(u))a.preventDefault()}}
V.b_.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.eD.prototype={}
V.bC.prototype={
cn:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.D])
return t},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aO(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bC))return!1
u=b.a
t=$.G().a
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
h:function(a){return this.K()},
F:function(a){var u,t,s,r,q,p=this,o=[P.D],n=V.iY(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.iY(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.iY(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.iY(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
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
K:function(){return this.F("")}}
V.ak.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.aB.prototype={
W:function(a,b){return new V.aB(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.aB(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.cF.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cF))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.ba.prototype={
ba:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.w(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.W()
if(typeof t!=="number")return H.w(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.N.prototype={
ba:function(a){return Math.sqrt(this.R(this))},
R:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
at:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
O:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aQ:function(a){return new V.N(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
U:function(a,b){if(Math.abs(b-0)<$.G().a)return V.hQ()
return new V.N(this.a/b,this.b/b,this.c/b)},
eu:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.cg.prototype={
gE:function(){var u=this.b
return u==null?this.b=D.ax():u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cg))return!1
return J.H(this.a,b.a)},
h:function(a){return"Constant: "+this.a.F("          ")}}
U.fr.prototype={}
U.cG.prototype={
gE:function(){var u=this.y
return u==null?this.y=D.ax():u},
ai:function(a){var u=this.y
if(u!=null)u.Z(a)},
sct:function(a){var u
a=V.jL(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.G().a)){this.a=a
u=new D.F("yaw",u,a)
u.b=!0
this.ai(u)}},
scd:function(a,b){var u
b=V.jL(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.G().a)){this.b=b
u=new D.F("pitch",u,b)
u.b=!0
this.ai(u)}},
sck:function(a){var u
a=V.jL(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
u=new D.F("roll",u,a)
u.b=!0
this.ai(u)}},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cG))return!1
u=r.a
t=b.a
s=$.G().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotator: ["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+"], ["+V.z(u.d,3,0)+", "+V.z(u.e,3,0)+", "+V.z(u.f,3,0)+"]"}}
M.ck.prototype={
a7:function(a){var u=this.y
if(u!=null)u.Z(a)},
cM:function(){return this.a7(null)},
d7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga3(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.x)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bv()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.eW()
u.b=!0
this.a7(u)},
d9:function(a,b){var u,t
for(u=b.gI(b),t=this.ga3();u.p();)u.gu(u).gE().N(0,t)
u=new D.eX()
u.b=!0
this.a7(u)},
scm:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gE().N(0,t.ga3())
u=t.d
t.d=a
if(a!=null)a.gE().t(0,t.ga3())
s=new D.F("technique",u,t.d)
s.b=!0
t.a7(s)}},
gE:function(){var u=this.y
return u==null?this.y=D.ax():u},
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
if(typeof s!=="number")return H.w(s)
o=C.d.a1(p*s)
p=q.b
if(typeof r!=="number")return H.w(r)
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
t=$.k8
if(t==null){t=$.ka
if(t==null)t=$.ka=new V.aB(0,0,0)
q=$.kq
if(q==null)q=$.kq=new V.N(0,1,0)
p=$.ko
if(p==null)p=$.ko=new V.N(0,0,-1)
h=p.U(0,Math.sqrt(p.R(p)))
q=q.at(h)
g=q.U(0,Math.sqrt(q.R(q)))
f=h.at(g)
e=new V.N(t.a,t.b,t.c)
d=g.aQ(0).R(e)
c=f.aQ(0).R(e)
b=h.aQ(0).R(e)
t=V.aO(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.k8=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.J(0,a)}a2.db.cf(a)
for(u=a1.e.a,u=new J.a5(u,u.length);u.p();)u.d.cq(0,a2)
for(u=a1.e.a,u=new J.a5(u,u.length);u.p();)u.d.ao(a2)
a1.b.toString
a2.cy.bd()
a2.db.bd()
a1.c.toString
a2.ce()}}
A.cb.prototype={}
A.e2.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ef:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ee:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eu.prototype={}
A.cH.prototype={
cJ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bz:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.b(P.Q("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
dV:function(){var u,t,s,r=this,q=H.c([],[A.cb]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cb(p,t.name,s))}r.x=new A.e2(q)},
dX:function(){var u,t,s,r=this,q=H.c([],[A.cT]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.w(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eb(t.type,t.size,t.name,s))}r.y=new A.hx(q)},
ah:function(a,b,c){var u=this.a
if(a===1)return new A.hp(u,b,c)
else return A.ju(u,this.r,b,a,c)},
cY:function(a,b,c){var u=this.a
if(a===1)return new A.hA(u,b,c)
else return A.ju(u,this.r,b,a,c)},
cZ:function(a,b,c){var u=this.a
if(a===1)return new A.hB(u,b,c)
else return A.ju(u,this.r,b,a,c)},
aE:function(a,b){return new P.d6(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
eb:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ah(b,c,d)
case 5121:return u.ah(b,c,d)
case 5122:return u.ah(b,c,d)
case 5123:return u.ah(b,c,d)
case 5124:return u.ah(b,c,d)
case 5125:return u.ah(b,c,d)
case 5126:return new A.bP(u.a,c,d)
case 35664:return new A.hr(u.a,c,d)
case 35665:return new A.ht(u.a,c,d)
case 35666:return new A.hv(u.a,c,d)
case 35667:return new A.hs(u.a,c,d)
case 35668:return new A.hu(u.a,c,d)
case 35669:return new A.hw(u.a,c,d)
case 35674:return new A.hy(u.a,c,d)
case 35675:return new A.hz(u.a,c,d)
case 35676:return new A.bQ(u.a,c,d)
case 35678:return u.cY(b,c,d)
case 35680:return u.cZ(b,c,d)
case 35670:throw H.b(u.aE("BOOL",c))
case 35671:throw H.b(u.aE("BOOL_VEC2",c))
case 35672:throw H.b(u.aE("BOOL_VEC3",c))
case 35673:throw H.b(u.aE("BOOL_VEC4",c))
default:throw H.b(P.Q("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.cT.prototype={}
A.hx.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.hp.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hs.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hu.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hw.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hq.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.bP.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hr.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.ht.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.hv.prototype={
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hy.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.hz.prototype={
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.bQ.prototype={
bm:function(a){var u=new Float32Array(H.iT(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.hA.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.hB.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ja.prototype={
$1:function(a){return new V.aB(Math.cos(a),Math.sin(a),0)}}
F.iW.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jO(n.$1(o),m)
m=J.jO(n.$1(o+3.141592653589793/p.c),m).W(0,l)
m=new V.N(m.a,m.b,m.c)
u=m.U(0,Math.sqrt(m.R(m)))
n=$.kp
if(n==null){n=new V.N(1,0,0)
$.kp=n
t=n}else t=n
if(!J.H(u,t)){n=$.kr
if(n==null){n=new V.N(0,0,1)
$.kr=n
t=n}else t=n}n=u.at(t)
s=n.U(0,Math.sqrt(n.R(n)))
n=s.at(u)
t=n.U(0,Math.sqrt(n.R(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.J(0,n*m)
m=s.J(0,q*m)
m=new V.aB(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
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
s=V.hQ()
if(q!=null)s=s.O(0,q)
if(u!=null)s=s.O(0,u)
if(t!=null)s=s.O(0,t)
if(s.eu())return
return s.U(0,Math.sqrt(s.R(s)))},
cU:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.W(0,q)
r=new V.N(r.a,r.b,r.c)
s=r.U(0,Math.sqrt(r.R(r)))
r=t.W(0,q)
r=new V.N(r.a,r.b,r.c)
r=s.at(r.U(0,Math.sqrt(r.R(r))))
return r.U(0,Math.sqrt(r.R(r)))},
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
h:function(a){return this.K()},
F:function(a){var u,t,s=this
if(s.gbU())return a+"disposed"
u=a+C.a.ac(J.a3(s.a.e),0)+", "+C.a.ac(J.a3(s.b.e),0)+", "+C.a.ac(J.a3(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.h(0)+", "):u+"-, ")+"-}"
return u},
K:function(){return this.F("")}}
F.eH.prototype={}
F.h_.prototype={
bb:function(a,b,c){var u,t=b.a
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.H()
t=t.e
u=c.c
u.a.a.H()
if(t==u.e){t=b.b
t.a.a.H()
t=t.e
u=c.a
u.a.a.H()
if(t==u.e){t=b.c
t.a.a.H()
t=t.e
u=c.b
u.a.a.H()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.ct.prototype={}
F.f7.prototype={}
F.ho.prototype={}
F.cC.prototype={}
F.fS.prototype={
gE:function(){var u=this.e
return u==null?this.e=D.ax():u},
ey:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.ad(o,0)])
for(o=[F.bR];u.length!==0;){t=C.b.gek(u)
C.b.bf(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.bb(0,t,q)){s.push(q)
C.b.bf(u,r)}}if(s.length>1)b.ex(s)}}p.a.H()
p.c.bg()
p.d.bg()
p.b.eQ()
p.c.bh(new F.ho())
p.d.bh(new F.h_())
o=p.e
if(o!=null)o.aM(0)},
e6:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aF()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bm().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.bn().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.c9().a)!==0)++s
if((t&$.ca().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.bk().a)!==0)++s
r=a4.gbo(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.D])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cc])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.e3(m)
k=l.gbo(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cc(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].ew(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.iT(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cd(new Z.cY(a1,d),o)
c.b=H.c([],[Z.co])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.c([],[P.t])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.H()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.H()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.H()
b.push(t.e)}a=Z.mi(u,34963,b)
c.b.push(new Z.co(4,b.length,a))}return c},
h:function(a){var u=this,t=H.c([],[P.h])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.F("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.F("   "))}return C.b.l(t,"\n")},
a0:function(){var u=this.e
if(u!=null)u.Z(null)}}
F.fT.prototype={
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
h.push(F.eG(m,l,j))
u.a.t(0,m)
u.a.t(0,j)
u.a.t(0,i)
h.push(F.eG(m,j,i))}else{n.t(0,l)
u.a.t(0,j)
u.a.t(0,i)
h.push(F.eG(l,j,i))
u.a.t(0,l)
u.a.t(0,i)
u.a.t(0,m)
h.push(F.eG(l,i,m))}p=!p}r=!r}return h},
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
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].b3())s=!1
return s},
h:function(a){return this.K()},
F:function(a){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)r.push(u[s].F(a))
return C.b.l(r,"\n")},
K:function(){return this.F("")}}
F.fU.prototype={
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
h:function(a){return this.K()},
F:function(a){var u,t,s=H.c([],[P.h])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.d(t,u)
s.push(t[u].F(a+(""+u+". ")))}return C.b.l(s,"\n")},
K:function(){return this.F("")}}
F.fV.prototype={
gk:function(a){return 0},
eQ:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].gf7()
t=t.gf6(t)
if(t.gk(t).P(0,1)){t=this.b
return H.d(t,u)
t[u].aG()}}},
h:function(a){return this.K()},
F:function(a){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].F(a))}return C.b.l(s,"\n")},
K:function(){return this.F("")}}
F.bR.prototype={
bT:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kt(u.cx,r,o,t,s,q,p,a,n)},
ew:function(a){var u,t,s=this
if(a.q(0,$.aF())){u=s.f
t=[P.D]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bm())){u=s.r
t=[P.D]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bl())){u=H.c([0,0,1],[P.D])
return u}else if(a.q(0,$.bn())){u=s.y
t=[P.D]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bo())){u=H.c([0,0,0],[P.D])
return u}else if(a.q(0,$.c9())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.ca())){u=s.Q
t=[P.D]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bp()))return H.c([s.ch],[P.D])
else if(a.q(0,$.bk())){u=H.c([-1,-1,-1,-1],[P.D])
return u}else return H.c([],[P.D])},
b3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hQ()
t.d.C(0,new F.i_(s))
s=s.a
t.r=s.U(0,Math.sqrt(s.R(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.aM(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.K()},
F:function(a){var u,t,s=this,r="-",q=H.c([],[P.h])
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
K:function(){return this.F("")}}
F.i_.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.O(0,t)}}}
F.hR.prototype={
H:function(){var u,t,s,r
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
bO:function(a,b){var u=null,t=F.kt(u,u,a,u,u,b,u,u,0)
this.t(0,t)
return t},
gk:function(a){return this.c.length},
b4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].b3()
return!0},
h:function(a){return this.K()},
F:function(a){var u,t,s,r
this.H()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)u.push(t[r].F(a))
return C.b.l(u,"\n")},
K:function(){return this.F("")}}
F.hS.prototype={
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
C:function(a,b){var u=this
C.b.C(u.b,b)
C.b.C(u.c,new F.hT(u,b))
C.b.C(u.d,new F.hU(u,b))},
h:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)r.push(u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)r.push(u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)r.push(u[s].F(""))
return C.b.l(r,"\n")}}
F.hT.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.hU.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.hV.prototype={
gk:function(a){return 0},
i:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.d(u,t)
return u[t]}else{u=this.b
return H.d(u,b)
return u[b]}},
h:function(a){return this.K()},
K:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].F(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].F(""))}return C.b.l(s,"\n")}}
F.hX.prototype={}
F.hW.prototype={
bb:function(a,b,c){return J.H(b.f,c.f)}}
F.hY.prototype={}
F.fz.prototype={
ex:function(a){var u,t,s,r,q,p,o,n,m=V.hQ()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.N(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.U(0,Math.sqrt(m.R(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.U(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.Z(null)}}}return}}
F.hZ.prototype={
gk:function(a){return 0},
h:function(a){return this.K()},
K:function(){var u,t,s=H.c([],[P.h])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].F(""))}return C.b.l(s,"\n")}}
O.et.prototype={
gE:function(){var u=this.r
return u==null?this.r=D.ax():u},
aB:function(a){var u=this.r
if(u!=null)u.Z(a)},
sbj:function(a){var u,t=this
a=a===!0
u=t.d
if(u!==a){t.d=a
t.a=null
u=new D.F("grey",u,a)
u.b=!0
t.aB(u)}},
sc3:function(a){var u
a=a===!0
u=this.e
if(u!==a){this.e=a
u=new D.F("invert",u,a)
u.b=!0
this.aB(u)}}}
O.cN.prototype={}
X.jh.prototype={}
X.eO.prototype={
gE:function(){var u=this.x
return u==null?this.x=D.ax():u}}
X.cB.prototype={
gE:function(){var u=this.f
return u==null?this.f=D.ax():u},
ag:function(a){var u=this.f
if(u!=null)u.Z(a)},
cQ:function(){return this.ag(null)},
sav:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gE().N(0,s.gbt())
t=s.b
s.b=a
if(a!=null)a.gE().t(0,s.gbt())
u=new D.F("mover",t,s.b)
u.b=!0
s.ag(u)}}}
X.ha.prototype={}
V.ed.prototype={
bM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.jw().gaL().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.d(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.jR(l.c).t(0,p)
n=W.lA("checkbox")
n.checked=s
W.P(n,"change",new V.ee(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.jR(l.c).t(0,q.createElement("br"))
l.d.push(n)
if(r)l.bK(u,s)},
dZ:function(a,b,c){return this.bM(a,b,c,!1)},
bK:function(a,b){var u,t,s,r,q,p=this.a,o=P.jw().gaL().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.eH(o,a-u+1,"0")
t=a>0?C.a.n(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.a2(o,u)
s=P.jw()
u=P.h
r=P.lI(s.gaL(),u,u)
r.m(0,p,t)
q=s.ci(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.iw([],[]).aN(""),"",u)}}
V.ee.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.bK(u.d,t.checked)}}
V.cf.prototype={
aA:function(a){this.b=new P.eT(C.S)
this.c=null
this.d=H.c([],[[P.o,W.a6]])},
D:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.c([],[W.a6]))
u=a.split("\n")
for(l=u.length,t=[W.a6],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.c([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.cX(q,0,q.length)
n=o==null?q:o
C.Q.cz(p,H.jK(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.ga6(m.d).push(p)}},
cb:function(a,b){var u,t,s,r=this
r.d=H.c([],[[P.o,W.a6]])
u=C.b.l(b,"\n")
t=r.c
if(t==null)t=r.c=r.aF()
for(t.toString,s=new H.k(u),s=new P.bc(t.bi(new H.aM(s,s.gk(s))).a());s.p();)r.aK(s.gu(s))}}
V.j8.prototype={
$1:function(a){var u=C.d.co(this.a.gep(),2)
if(u!=="0.00")P.jJ(u+" fps")}}
V.er.prototype={
aK:function(a){var u=this
switch(a.a){case"Class":u.D(a.b,"#551")
break
case"Comment":u.D(a.b,"#777")
break
case"Id":u.D(a.b,"#111")
break
case"Num":u.D(a.b,"#191")
break
case"Reserved":u.D(a.b,"#119")
break
case"String":u.D(a.b,"#171")
break
case"Symbol":u.D(a.b,"#616")
break
case"Type":u.D(a.b,"#B11")
break
case"Whitespace":u.D(a.b,"#111")
break}},
aF:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hh()
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
a1.j(0,k).l(0,k).a.push(new K.at())
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
a1.j(0,h).l(0,h).a.push(new K.at())
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
t.d=t.a.G("Num")
t=a1.j(0,n)
t.d=t.a.G("Num")
t=a1.j(0,m)
t.d=t.a.G("Symbol")
t=a1.j(0,j)
t.d=t.a.G("String")
t=a1.j(0,g)
t.d=t.a.G("String")
t=a1.j(0,c)
t.d=t.a.G(d)
t=a1.j(0,a0)
t.d=t.a.G(a0)
t=a1.j(0,q)
t=t.d=t.a.G(q)
u=[P.h]
t.ad(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ad(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ad(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.eQ.prototype={
aK:function(a){var u=this
switch(a.a){case"Builtin":u.D(a.b,"#411")
break
case"Comment":u.D(a.b,"#777")
break
case"Id":u.D(a.b,"#111")
break
case"Num":u.D(a.b,"#191")
break
case"Preprocess":u.D(a.b,"#737")
break
case"Reserved":u.D(a.b,"#119")
break
case"Symbol":u.D(a.b,"#611")
break
case"Type":u.D(a.b,"#171")
break
case"Whitespace":u.D(a.b,"#111")
break}},
aF:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hh()
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
e.j(0,k).l(0,m).a.push(new K.at())
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
u.d=u.a.G("Num")
u=e.j(0,n)
u.d=u.a.G("Num")
u=e.j(0,m)
u.d=u.a.G("Symbol")
u=e.j(0,i)
u.d=u.a.G(j)
u=e.j(0,g)
u.d=u.a.G(h)
u=e.j(0,f)
u.d=u.a.G(f)
u=e.j(0,q)
u=u.d=u.a.G(q)
t=[P.h]
u.ad(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ad(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ad(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return e}}
V.eR.prototype={
aK:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.D(a.b,"#911")
u.D("=",t)
break
case"Id":u.D(a.b,t)
break
case"Other":u.D(a.b,t)
break
case"Reserved":u.D(a.b,"#119")
break
case"String":u.D(a.b,"#171")
break
case"Symbol":u.D(a.b,"#616")
break}},
aF:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hh()
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
l.j(0,o).l(0,o).a.push(new K.at())
l.j(0,s).l(0,m).a.push(new K.at())
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
u.d=u.a.G("Symbol")
u=l.j(0,n)
u.d=u.a.G("String")
u=l.j(0,r)
t=u.a.G(r)
u.d=t
t.ad(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.j(0,q)
t.d=t.a.G(q)
t=l.j(0,m)
t.d=t.a.G(m)
return l}}
V.fF.prototype={
cb:function(a,b){this.d=H.c([],[[P.o,W.a6]])
this.D(C.b.l(b,"\n"),"#111")},
aK:function(a){},
aF:function(){return}}
V.fW.prototype={
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
W.P(q,"scroll",new V.fY(o),!1)},
bP:function(a){var u,t,s,r,q,p,o,n
this.dW()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.ev(a),s.toString,r=new H.k(r),r=new P.bc(s.bi(new H.aM(r,r.gk(r))).a());r.p();){s=r.gu(r)
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
if(H.kT(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.dJ(C.x,s,C.e,!1)
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
cu:function(a){var u,t,s,r=new V.er("dart")
r.aA("dart")
u=new V.eQ("glsl")
u.aA("glsl")
t=new V.eR("html")
t.aA("html")
s=C.b.el(H.c([r,u,t],[V.cf]),new V.fZ(a))
if(s!=null)return s
r=new V.fF("plain")
r.aA("plain")
return r},
bN:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.c([],[P.t])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.c6(s).T(s,"+")){b0[t]=C.a.a2(s,1)
a6.push(1)
u=!0}else if(C.a.T(s,"-")){b0[t]=C.a.a2(s,1)
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
n=P.dJ(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jT()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.x)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.x)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gI(s);a2.p();)d.appendChild(a2.gu(a2))
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
u=L.hh()
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
u.j(0,q).l(0,i).a.push(new K.at())
s=u.j(0,i).l(0,i)
t=new K.U()
t.a=H.c([],r)
s.a.push(t)
s=K.p(new H.k("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.G(p)
s=u.j(0,n)
s.d=s.a.G(o)
s=u.j(0,"CodeEnd")
s.d=s.a.G(m)
s=u.j(0,j)
s.d=s.a.G("Link")
s=u.j(0,i)
s.d=s.a.G(i)
this.b=u}}
V.fY.prototype={
$1:function(a){P.ki(C.l,new V.fX(this.a))}}
V.fX.prototype={
$0:function(){var u=C.d.a1(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
V.fZ.prototype={
$1:function(a){return a.a===this.a}}
Y.j4.prototype={
$1:function(a){this.a.sbj(a)}}
Y.j5.prototype={
$1:function(a){this.a.sc3(a)}}
Y.j6.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.bN("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bN("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.cC=u.h
u=J.cr.prototype
u.cE=u.h
u=P.l.prototype
u.cD=u.aO
u=W.E.prototype
u.aS=u.Y
u=W.ds.prototype
u.cF=u.a5
u=K.cn.prototype
u.cB=u.aa
u.bp=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"mN","lE",15)
t(P,"mX","mk",6)
t(P,"mY","ml",6)
t(P,"mZ","mm",6)
s(P,"kJ","mV",8)
r(W,"n9",4,null,["$4"],["mp"],11,0)
r(W,"na",4,null,["$4"],["mq"],11,0)
var l
q(l=E.aI.prototype,"gc9",0,0,null,["$1","$0"],["ca","eG"],0,0)
q(l,"gc7",0,0,null,["$1","$0"],["c8","eF"],0,0)
q(l,"gc5",0,0,null,["$1","$0"],["c6","eC"],0,0)
p(l,"geA","eB",3)
p(l,"geD","eE",3)
q(l=E.cO.prototype,"gbq",0,0,null,["$1","$0"],["bs","br"],0,0)
o(l,"geT","cj",8)
n(l=X.cW.prototype,"gdh","di",4)
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
m(V.ba.prototype,"gk","ba",10)
m(V.N.prototype,"gk","ba",10)
q(l=M.ck.prototype,"ga3",0,0,null,["$1","$0"],["a7","cM"],0,0)
p(l,"gd6","d7",3)
p(l,"gd8","d9",3)
q(X.cB.prototype,"gbt",0,0,null,["$1","$0"],["ag","cQ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.jo,J.a,J.a5,P.de,P.l,H.aM,P.f_,H.cl,H.hF,H.ej,H.hm,P.b0,H.bs,H.dx,P.R,H.f8,H.fa,H.f2,P.dD,P.bb,P.bc,P.cZ,P.cL,P.h6,P.cP,P.iO,P.iq,P.ij,P.dd,P.q,P.iG,P.fh,P.eg,P.eU,P.iM,P.iL,P.aU,P.av,P.X,P.aH,P.fD,P.cJ,P.d6,P.eN,P.eP,P.o,P.I,P.aQ,P.h,P.M,P.bd,P.hH,P.it,W.en,W.ef,W.bU,W.A,W.cz,W.ds,W.iA,W.cm,W.az,W.ip,W.dK,P.iv,P.ik,P.b8,K.at,K.cn,K.aN,K.fI,K.fR,L.cK,L.cQ,L.cR,L.hg,O.eh,O.bD,E.e9,E.aI,E.aY,E.b3,E.ic,E.fJ,E.cO,Z.cY,Z.i1,Z.cd,Z.co,Z.cX,D.ec,D.bv,D.W,X.ce,X.cs,X.f5,X.fe,X.bF,X.fq,X.hi,X.cW,V.b_,V.eD,V.bC,V.ak,V.aB,V.cF,V.ba,V.N,M.ck,A.cb,A.e2,A.cT,A.hx,F.b1,F.eH,F.ct,F.f7,F.cC,F.fS,F.fT,F.fU,F.fV,F.bR,F.hR,F.hS,F.hV,F.hX,F.hY,F.hZ,O.cN,X.jh,X.ha,X.cB,V.ed,V.cf,V.fW])
s(J.a,[J.f0,J.cq,J.cr,J.aJ,J.bz,J.aK,H.bG,H.aP,W.e,W.dZ,W.aW,W.af,W.y,W.d0,W.a_,W.es,W.ev,W.d2,W.cj,W.d4,W.ex,W.i,W.d7,W.ag,W.eS,W.d9,W.by,W.fd,W.fk,W.df,W.dg,W.ah,W.dh,W.dk,W.aj,W.dp,W.dr,W.am,W.dt,W.an,W.dy,W.a9,W.dB,W.hf,W.ap,W.dE,W.hk,W.hM,W.dL,W.dN,W.dP,W.dR,W.dT,P.ay,P.db,P.aA,P.dm,P.fH,P.dz,P.aD,P.dG,P.e3,P.d_,P.dv])
s(J.cr,[J.fE,J.b9,J.aL])
t(J.jn,J.aJ)
s(J.bz,[J.cp,J.f1])
t(P.fc,P.de)
s(P.fc,[H.cU,W.i8,W.T,P.eJ])
t(H.k,H.cU)
s(P.l,[H.n,H.bB,H.bS,P.eY])
s(H.n,[H.cu,H.f9])
t(H.eA,H.bB)
s(P.f_,[H.fi,H.i2])
t(H.fj,H.cu)
t(H.ek,H.ej)
s(P.b0,[H.fA,H.f4,H.hE,H.eb,H.fP,P.cA,P.a4,P.hG,P.hC,P.bM,P.ei,P.eq])
s(H.bs,[H.jb,H.hb,H.f3,H.j0,H.j1,H.j2,P.i4,P.i3,P.i5,P.i6,P.iF,P.iE,P.iU,P.im,P.io,P.fb,P.fg,P.ey,P.ez,P.hL,P.hI,P.hJ,P.hK,P.iH,P.iI,P.iK,P.iJ,P.iQ,P.iP,P.iR,P.iS,W.eB,W.fm,W.fo,W.fO,W.h5,W.ie,W.fy,W.fx,W.ir,W.is,W.iD,W.iN,P.ix,P.iy,P.iV,P.eK,P.eL,P.e5,E.fK,E.fL,E.fM,E.he,D.eE,D.eF,F.ja,F.iW,F.i_,F.hT,F.hU,V.ee,V.j8,V.fY,V.fX,V.fZ,Y.j4,Y.j5,Y.j6])
s(H.hb,[H.h3,H.bq])
t(P.ff,P.R)
s(P.ff,[H.a8,W.i7])
t(H.cv,H.aP)
s(H.cv,[H.bW,H.bY])
t(H.bX,H.bW)
t(H.bH,H.bX)
t(H.bZ,H.bY)
t(H.cw,H.bZ)
s(H.cw,[H.fs,H.ft,H.fu,H.fv,H.fw,H.cx,H.bI])
t(P.iB,P.eY)
t(P.il,P.iO)
t(P.ii,P.iq)
t(P.dI,P.fh)
t(P.cV,P.dI)
s(P.eg,[P.e7,P.eC])
t(P.el,P.h6)
s(P.el,[P.e8,P.eT,P.hP,P.hO])
t(P.hN,P.eC)
s(P.X,[P.D,P.t])
s(P.a4,[P.b6,P.eV])
t(P.ia,P.bd)
s(W.e,[W.v,W.eI,W.bE,W.al,W.c_,W.ao,W.aa,W.c1,W.i0,W.bT,P.e6,P.aV])
s(W.v,[W.E,W.aG])
s(W.E,[W.m,P.j])
s(W.m,[W.e_,W.e0,W.aX,W.aZ,W.a6,W.eM,W.fQ,W.cM,W.h8,W.h9,W.bO])
t(W.em,W.af)
t(W.bt,W.d0)
s(W.a_,[W.eo,W.ep])
t(W.d3,W.d2)
t(W.ci,W.d3)
t(W.d5,W.d4)
t(W.ew,W.d5)
t(W.a7,W.aW)
t(W.d8,W.d7)
t(W.bw,W.d8)
t(W.da,W.d9)
t(W.bx,W.da)
t(W.aR,W.i)
s(W.aR,[W.b2,W.ai,W.b7])
t(W.fl,W.df)
t(W.fn,W.dg)
t(W.di,W.dh)
t(W.fp,W.di)
t(W.dl,W.dk)
t(W.cy,W.dl)
t(W.dq,W.dp)
t(W.fG,W.dq)
t(W.fN,W.dr)
t(W.c0,W.c_)
t(W.h0,W.c0)
t(W.du,W.dt)
t(W.h1,W.du)
t(W.h4,W.dy)
t(W.dC,W.dB)
t(W.hc,W.dC)
t(W.c2,W.c1)
t(W.hd,W.c2)
t(W.dF,W.dE)
t(W.hj,W.dF)
t(W.aS,W.ai)
t(W.dM,W.dL)
t(W.i9,W.dM)
t(W.d1,W.cj)
t(W.dO,W.dN)
t(W.ig,W.dO)
t(W.dQ,W.dP)
t(W.dj,W.dQ)
t(W.dS,W.dR)
t(W.iu,W.dS)
t(W.dU,W.dT)
t(W.iz,W.dU)
t(W.ib,W.i7)
t(W.id,P.cL)
t(W.iC,W.ds)
t(P.iw,P.iv)
t(P.a0,P.ik)
t(P.dc,P.db)
t(P.f6,P.dc)
t(P.dn,P.dm)
t(P.fB,P.dn)
t(P.bL,P.j)
t(P.dA,P.dz)
t(P.h7,P.dA)
t(P.dH,P.dG)
t(P.hl,P.dH)
t(P.e4,P.d_)
t(P.fC,P.aV)
t(P.dw,P.dv)
t(P.h2,P.dw)
s(K.cn,[K.U,L.cS])
s(E.e9,[Z.cc,A.cH])
s(D.W,[D.eW,D.eX,D.F])
t(U.fr,D.ec)
s(U.fr,[U.cg,U.cG])
t(A.eu,A.cH)
s(A.cT,[A.hp,A.hs,A.hu,A.hw,A.hq,A.bP,A.hr,A.ht,A.hv,A.hy,A.hz,A.bQ,A.hA,A.hB])
t(F.h_,F.eH)
t(F.ho,F.f7)
t(F.hW,F.hX)
t(F.fz,F.hY)
t(O.et,O.cN)
t(X.eO,X.ha)
s(V.cf,[V.er,V.eQ,V.eR,V.fF])
u(H.cU,H.hF)
u(H.bW,P.q)
u(H.bX,H.cl)
u(H.bY,P.q)
u(H.bZ,H.cl)
u(P.de,P.q)
u(P.dI,P.iG)
u(W.d0,W.en)
u(W.d2,P.q)
u(W.d3,W.A)
u(W.d4,P.q)
u(W.d5,W.A)
u(W.d7,P.q)
u(W.d8,W.A)
u(W.d9,P.q)
u(W.da,W.A)
u(W.df,P.R)
u(W.dg,P.R)
u(W.dh,P.q)
u(W.di,W.A)
u(W.dk,P.q)
u(W.dl,W.A)
u(W.dp,P.q)
u(W.dq,W.A)
u(W.dr,P.R)
u(W.c_,P.q)
u(W.c0,W.A)
u(W.dt,P.q)
u(W.du,W.A)
u(W.dy,P.R)
u(W.dB,P.q)
u(W.dC,W.A)
u(W.c1,P.q)
u(W.c2,W.A)
u(W.dE,P.q)
u(W.dF,W.A)
u(W.dL,P.q)
u(W.dM,W.A)
u(W.dN,P.q)
u(W.dO,W.A)
u(W.dP,P.q)
u(W.dQ,W.A)
u(W.dR,P.q)
u(W.dS,W.A)
u(W.dT,P.q)
u(W.dU,W.A)
u(P.db,P.q)
u(P.dc,W.A)
u(P.dm,P.q)
u(P.dn,W.A)
u(P.dz,P.q)
u(P.dA,W.A)
u(P.dG,P.q)
u(P.dH,W.A)
u(P.d_,P.R)
u(P.dv,P.q)
u(P.dw,W.A)})()
var v={mangledGlobalNames:{t:"int",D:"double",X:"num",h:"String",aU:"bool",aQ:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.aQ,args:[,,]},{func:1,ret:-1,args:[P.t,[P.l,E.aI]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.D},{func:1,ret:P.aU,args:[W.E,P.h,P.h,W.bU]},{func:1,ret:P.aQ,args:[,]},{func:1,ret:P.b8,args:[,,]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:P.t,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.p=W.aX.prototype
C.P=W.aZ.prototype
C.Q=W.a6.prototype
C.T=J.a.prototype
C.b=J.aJ.prototype
C.c=J.cp.prototype
C.U=J.cq.prototype
C.d=J.bz.prototype
C.a=J.aK.prototype
C.V=J.aL.prototype
C.A=J.fE.prototype
C.B=W.cM.prototype
C.o=J.b9.prototype
C.C=W.aS.prototype
C.D=W.bT.prototype
C.E=new E.aY("Browser.chrome")
C.q=new E.aY("Browser.firefox")
C.r=new E.aY("Browser.edge")
C.F=new E.aY("Browser.other")
C.a5=new P.e8()
C.G=new P.e7()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=function() {
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
C.M=function(getTagFallback) {
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
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.L=function(hooks) {
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
C.K=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.N=new P.fD()
C.e=new P.hN()
C.O=new P.hP()
C.f=new P.il()
C.l=new P.aH(0)
C.R=new P.aH(5e6)
C.S=new P.eU("element",!1,!1,!1)
C.v=H.c(u([127,2047,65535,1114111]),[P.t])
C.i=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.t])
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.j=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.t])
C.k=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.t])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.c(u([]),[P.h])
C.Y=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.t])
C.x=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.t])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.t])
C.y=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.t])
C.Z=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.t])
C.z=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.t])
C.m=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.n=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a_=new H.ek(0,{},C.w,[P.h,P.h])
C.a0=new E.b3("OperatingSystem.windows")
C.a1=new E.b3("OperatingSystem.mac")
C.a2=new E.b3("OperatingSystem.linux")
C.a3=new E.b3("OperatingSystem.other")
C.a4=new P.bb(null,2)})();(function staticFields(){$.ae=0
$.br=null
$.jV=null
$.kN=null
$.kI=null
$.kR=null
$.iX=null
$.j3=null
$.jH=null
$.bf=null
$.c4=null
$.c5=null
$.jD=!1
$.ab=C.f
$.V=[]
$.aw=null
$.jj=null
$.k1=null
$.k0=null
$.bV=P.jq(P.h,P.eP)
$.k2=null
$.k5=null
$.k9=null
$.ka=null
$.ke=null
$.ks=null
$.kp=null
$.kq=null
$.kr=null
$.ko=null
$.k8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ns","kW",function(){return H.kL("_$dart_dartClosure")})
u($,"nt","jM",function(){return H.kL("_$dart_js")})
u($,"nu","kX",function(){return H.aq(H.hn({
toString:function(){return"$receiver$"}}))})
u($,"nv","kY",function(){return H.aq(H.hn({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nw","kZ",function(){return H.aq(H.hn(null))})
u($,"nx","l_",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nA","l2",function(){return H.aq(H.hn(void 0))})
u($,"nB","l3",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nz","l1",function(){return H.aq(H.kk(null))})
u($,"ny","l0",function(){return H.aq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nD","l5",function(){return H.aq(H.kk(void 0))})
u($,"nC","l4",function(){return H.aq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nR","jN",function(){return P.mj()})
u($,"nE","l6",function(){return P.mf()})
u($,"nS","la",function(){return H.lN(H.iT(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.t])))})
u($,"nV","lc",function(){return P.m0("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nW","ld",function(){return P.mL()})
u($,"nT","lb",function(){return P.k4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"nL","l9",function(){return Z.a1(0)})
u($,"nF","l7",function(){return Z.a1(511)})
u($,"nN","aF",function(){return Z.a1(1)})
u($,"nM","bm",function(){return Z.a1(2)})
u($,"nH","bl",function(){return Z.a1(4)})
u($,"nO","bn",function(){return Z.a1(8)})
u($,"nP","bo",function(){return Z.a1(16)})
u($,"nI","c9",function(){return Z.a1(32)})
u($,"nJ","ca",function(){return Z.a1(64)})
u($,"nK","l8",function(){return Z.a1(96)})
u($,"nQ","bp",function(){return Z.a1(128)})
u($,"nG","bk",function(){return Z.a1(256)})
u($,"nr","kV",function(){return new V.eD(1e-9)})
u($,"nq","G",function(){return $.kV()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bG,DataView:H.aP,ArrayBufferView:H.aP,Float32Array:H.bH,Float64Array:H.bH,Int16Array:H.fs,Int32Array:H.ft,Int8Array:H.fu,Uint16Array:H.fv,Uint32Array:H.fw,Uint8ClampedArray:H.cx,CanvasPixelArray:H.cx,Uint8Array:H.bI,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.dZ,HTMLAnchorElement:W.e_,HTMLAreaElement:W.e0,Blob:W.aW,HTMLBodyElement:W.aX,HTMLCanvasElement:W.aZ,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.em,CSSCharsetRule:W.y,CSSConditionRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.bt,MSStyleCSSProperties:W.bt,CSS2Properties:W.bt,CSSImageValue:W.a_,CSSKeywordValue:W.a_,CSSNumericValue:W.a_,CSSPositionValue:W.a_,CSSResourceValue:W.a_,CSSUnitValue:W.a_,CSSURLImageValue:W.a_,CSSStyleValue:W.a_,CSSMatrixComponent:W.af,CSSRotation:W.af,CSSScale:W.af,CSSSkew:W.af,CSSTranslation:W.af,CSSTransformComponent:W.af,CSSTransformValue:W.eo,CSSUnparsedValue:W.ep,DataTransferItemList:W.es,HTMLDivElement:W.a6,DOMException:W.ev,ClientRectList:W.ci,DOMRectList:W.ci,DOMRectReadOnly:W.cj,DOMStringList:W.ew,DOMTokenList:W.ex,Element:W.E,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.a7,FileList:W.bw,FileWriter:W.eI,HTMLFormElement:W.eM,Gamepad:W.ag,History:W.eS,HTMLCollection:W.bx,HTMLFormControlsCollection:W.bx,HTMLOptionsCollection:W.bx,ImageData:W.by,KeyboardEvent:W.b2,Location:W.fd,MediaList:W.fk,MessagePort:W.bE,MIDIInputMap:W.fl,MIDIOutputMap:W.fn,MimeType:W.ah,MimeTypeArray:W.fp,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cy,RadioNodeList:W.cy,Plugin:W.aj,PluginArray:W.fG,RTCStatsReport:W.fN,HTMLSelectElement:W.fQ,SourceBuffer:W.al,SourceBufferList:W.h0,SpeechGrammar:W.am,SpeechGrammarList:W.h1,SpeechRecognitionResult:W.an,Storage:W.h4,CSSStyleSheet:W.a9,StyleSheet:W.a9,HTMLTableElement:W.cM,HTMLTableRowElement:W.h8,HTMLTableSectionElement:W.h9,HTMLTemplateElement:W.bO,TextTrack:W.ao,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.hc,TextTrackList:W.hd,TimeRanges:W.hf,Touch:W.ap,TouchEvent:W.b7,TouchList:W.hj,TrackDefaultList:W.hk,CompositionEvent:W.aR,FocusEvent:W.aR,TextEvent:W.aR,UIEvent:W.aR,URL:W.hM,VideoTrackList:W.i0,WheelEvent:W.aS,Window:W.bT,DOMWindow:W.bT,CSSRuleList:W.i9,ClientRect:W.d1,DOMRect:W.d1,GamepadList:W.ig,NamedNodeMap:W.dj,MozNamedAttrMap:W.dj,SpeechRecognitionResultList:W.iu,StyleSheetList:W.iz,SVGLength:P.ay,SVGLengthList:P.f6,SVGNumber:P.aA,SVGNumberList:P.fB,SVGPointList:P.fH,SVGScriptElement:P.bL,SVGStringList:P.h7,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.aD,SVGTransformList:P.hl,AudioBuffer:P.e3,AudioParamMap:P.e4,AudioTrackList:P.e6,AudioContext:P.aV,webkitAudioContext:P.aV,BaseAudioContext:P.aV,OfflineAudioContext:P.fC,SQLResultSetRowList:P.h2})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.bZ.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"
W.c1.$nativeSuperclassTag="EventTarget"
W.c2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Y.kP,[])
else Y.kP([])})})()
//# sourceMappingURL=test.dart.js.map
