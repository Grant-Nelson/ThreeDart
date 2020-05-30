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
a[c]=function(){a[c]=function(){H.p0(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kx:function kx(){},
jZ:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
n4:function(a,b,c,d){if(!!J.S(a).$iq)return new H.fh(a,b,[c,d])
return new H.c3(a,b,[c,d])},
fD:function(){return new P.ce("No element")},
mU:function(){return new P.ce("Too many elements")},
ns:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.K()
H.dn(a,0,u-1,b)},
dn:function(a,b,c,d){if(c-b<=32)H.nr(a,b,c,d)
else H.nq(a,b,c,d)},
nr:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bj(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a0()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nq:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.bj(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.E(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.O()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.O()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a0()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a0()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.O()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.dn(a3,a4,t-2,a6)
H.dn(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.E(a6.$2(d.h(a3,t),b),0);)++t
for(;J.E(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.O()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dn(a3,t,s,a6)}else H.dn(a3,t,s,a6)},
m:function m(a){this.a=a},
q:function q(){},
d7:function d7(){},
b6:function b6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fX:function fX(a,b){this.a=null
this.b=a
this.c=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
iY:function iY(a,b){this.a=a
this.b=b},
d_:function d_(){},
iA:function iA(){},
dC:function dC(){},
mM:function(){throw H.c(P.y("Cannot modify unmodifiable Map"))},
cI:function(a){var u,t=H.p1(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oL:function(a){return v.types[a]},
m5:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iC},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.c(H.ae(a))
return u},
cb:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ni:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.E(s,q)|32)>t)return}return parseInt(a,b)},
cc:function(a){return H.n9(a)+H.lT(H.cH(a),0,null)},
n9:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibE){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cI(t.length>1&&C.a.E(t,0)===36?C.a.a5(t,1):t)},
na:function(){if(!!self.location)return self.location.href
return},
lo:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nj:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aL(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ae(s))}return H.lo(r)},
lp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<0)throw H.c(H.ae(s))
if(s>65535)return H.nj(a)}return H.lo(a)},
nk:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ig()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
by:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aL(u,10))>>>0,56320|u&1023)}}throw H.c(P.Y(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nh:function(a){var u=H.bx(a).getFullYear()+0
return u},
nf:function(a){var u=H.bx(a).getMonth()+1
return u},
nb:function(a){var u=H.bx(a).getDate()+0
return u},
nc:function(a){var u=H.bx(a).getHours()+0
return u},
ne:function(a){var u=H.bx(a).getMinutes()+0
return u},
ng:function(a){var u=H.bx(a).getSeconds()+0
return u},
nd:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ae(a))},
d:function(a,b){if(a==null)J.ag(a)
throw H.c(H.bM(a,b))},
bM:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.dj(b,s)},
oF:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.ak(!0,b,"end",null)},
ae:function(a){return new P.ak(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dg()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mb})
u.name=""}else u.toString=H.mb
return u},
mb:function(){return J.a3(this.dartException)},
p:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aM(a))},
aG:function(a){var u,t,s,r,q,p
a=H.m9(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
io:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ly:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ll:function(a,b){return new H.hu(a,b==null?null:b.method)},
ky:function(a,b){var u=b==null,t=u?null:b.method
return new H.fJ(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aL(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ky(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ll(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mf()
q=$.mg()
p=$.mh()
o=$.mi()
n=$.ml()
m=$.mm()
l=$.mk()
$.mj()
k=$.mo()
j=$.mn()
i=r.af(u)
if(i!=null)return f.$1(H.ky(u,i))
else{i=q.af(u)
if(i!=null){i.method="call"
return f.$1(H.ky(u,i))}else{i=p.af(u)
if(i==null){i=o.af(u)
if(i==null){i=n.af(u)
if(i==null){i=m.af(u)
if(i==null){i=l.af(u)
if(i==null){i=o.af(u)
if(i==null){i=k.af(u)
if(i==null){i=j.af(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ll(u,i))}}return f.$1(new H.iz(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dq()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ak(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dq()
return a},
kU:function(a){var u
if(a==null)return new H.eh(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eh(a)},
oJ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oR:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oR)
a.$identity=u
return u},
mL:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.i1().constructor.prototype):Object.create(new H.bR(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.B()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.la(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mH(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.la(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mH:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oL,a)
if(typeof a=="function")if(b)return a
else{u=c?H.l8:H.kl
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mI:function(a,b,c,d){var u=H.kl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
la:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mK(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mI(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.B()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bS
return new Function(r+H.e(q==null?$.bS=H.eW("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.B()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bS
return new Function(r+H.e(q==null?$.bS=H.eW("self"):q)+"."+H.e(u)+"("+o+");}")()},
mJ:function(a,b,c,d){var u=H.kl,t=H.l8
switch(b?-1:a){case 0:throw H.c(H.no("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mK:function(a,b){var u,t,s,r,q,p,o,n=$.bS
if(n==null)n=$.bS=H.eW("self")
u=$.l7
if(u==null)u=$.l7=H.eW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mJ(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aq
if(typeof u!=="number")return u.B()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.B()
$.aq=u+1
return new Function(n+u+"}")()},
kR:function(a,b,c,d,e,f,g){return H.mL(a,b,c,d,!!e,!!f,g)},
kl:function(a){return a.a},
l8:function(a){return a.c},
eW:function(a){var u,t,s,r=new H.bR("self","target","receiver","name"),q=J.kv(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oW:function(a,b){throw H.c(H.mG(a,H.cI(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.oW(a,b)},
oH:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mG:function(a,b){return new H.eX("CastError: "+P.ks(a)+": type '"+H.e(H.oz(a))+"' is not a subtype of type '"+b+"'")},
oz:function(a){var u,t=J.S(a)
if(!!t.$ibT){u=H.oH(t)
if(u!=null)return H.oX(u)
return"Closure"}return H.cc(a)},
p0:function(a){throw H.c(new P.f8(a))},
no:function(a){return new H.hM(a)},
m3:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cH:function(a){if(a==null)return
return a.$ti},
pB:function(a,b,c){return H.kf(a["$a"+H.e(c)],H.cH(b))},
oK:function(a,b,c,d){var u=H.kf(a["$a"+H.e(c)],H.cH(b))
return u==null?null:u[d]},
kT:function(a,b,c){var u=H.kf(a["$a"+H.e(b)],H.cH(a))
return u==null?null:u[c]},
aJ:function(a,b){var u=H.cH(a)
return u==null?null:u[b]},
oX:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cI(a[0].name)+H.lT(a,1,b)
if(typeof a=="function")return H.cI(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.o4(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o4:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a1)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oI(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lT:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.R("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.i(0)+">"},
kf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pz:function(a,b,c){return a.apply(b,H.kf(J.S(b)["$a"+H.e(c)],H.cH(b)))},
pA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oT:function(a){var u,t,s,r,q=$.m4.$1(a),p=$.jX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lY.$2(a,q)
if(q!=null){p=$.jX[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.k2[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kb(u)
$.jX[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.k2[q]=u
return u}if(s==="-"){r=H.kb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m7(a,u)
if(s==="*")throw H.c(P.iy(q))
if(v.leafTags[q]===true){r=H.kb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m7(a,u)},
m7:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kW(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kb:function(a){return J.kW(a,!1,null,!!a.$iC)},
oU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kb(u)
else return J.kW(u,c,null,null)},
oP:function(){if(!0===$.kV)return
$.kV=!0
H.oQ()},
oQ:function(){var u,t,s,r,q,p,o,n
$.jX=Object.create(null)
$.k2=Object.create(null)
H.oO()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m8.$1(q)
if(p!=null){o=H.oU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oO:function(){var u,t,s,r,q,p,o=C.F()
o=H.bK(C.G,H.bK(C.H,H.bK(C.u,H.bK(C.u,H.bK(C.I,H.bK(C.J,H.bK(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.m4=new H.k_(r)
$.lY=new H.k0(q)
$.m8=new H.k1(p)},
bK:function(a,b){return a(b)||b},
mY:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.T("Illegal RegExp pattern ("+String(p)+")",a,null))},
oZ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oG:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m9:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kY:function(a,b,c){var u=H.p_(a,b,c)
return u},
p_:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m9(b),'g'),H.oG(c))},
f1:function f1(){},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hu:function hu(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
kh:function kh(a){this.a=a},
eh:function eh(a){this.a=a
this.b=null},
bT:function bT(){},
i9:function i9(){},
i1:function i1(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a){this.a=a},
hM:function hM(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fI:function fI(a){this.a=a},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fO:function fO(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
k1:function k1(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cD:function(a){return a},
n7:function(a){return new Int8Array(a)},
aH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bM(b,a))},
o2:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oF(a,b,c))
return b},
c7:function c7(){},
b9:function b9(){},
db:function db(){},
c8:function c8(){},
dc:function dc(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
dd:function dd(){},
c9:function c9(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
oI:function(a){return J.le(a?Object.keys(a):[],null)},
p1:function(a){return v.mangledGlobalNames[a]},
oV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kW:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jY:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kV==null){H.oP()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iy("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l_()]
if(r!=null)return r
r=H.oT(a)
if(r!=null)return r
if(typeof a=="function")return C.R
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l_(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
mV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kk(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Y(a,0,4294967295,"length",null))
return J.le(new Array(a),b)},
le:function(a,b){return J.kv(H.b(a,[b]))},
kv:function(a){a.fixed$length=Array
return a},
mW:function(a,b){return J.cL(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d2.prototype
return J.fG.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.d3.prototype
if(typeof a=="boolean")return J.fF.prototype
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.jY(a)},
bj:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.jY(a)},
eF:function(a){if(a==null)return a
if(a.constructor==Array)return J.b3.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.jY(a)},
m2:function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bE.prototype
return a},
cG:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.a1))return J.bE.prototype
return a},
bO:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.a1)return a
return J.jY(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).q(a,b)},
l1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m2(a).p(a,b)},
bQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m5(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bj(a).h(a,b)},
kj:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.m5(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eF(a).m(a,b,c)},
mx:function(a,b){return J.cG(a).E(a,b)},
my:function(a,b,c){return J.bO(a).fL(a,b,c)},
mz:function(a,b,c,d){return J.bO(a).h3(a,b,c,d)},
mA:function(a,b){return J.cG(a).W(a,b)},
cL:function(a,b){return J.m2(a).aO(a,b)},
eI:function(a,b){return J.eF(a).L(a,b)},
mB:function(a,b,c,d){return J.bO(a).hs(a,b,c,d)},
l2:function(a,b){return J.eF(a).G(a,b)},
mC:function(a){return J.bO(a).ghc(a)},
l3:function(a){return J.bO(a).gbY(a)},
cM:function(a){return J.S(a).gJ(a)},
aK:function(a){return J.eF(a).gT(a)},
ag:function(a){return J.bj(a).gl(a)},
l4:function(a){return J.eF(a).hZ(a)},
mD:function(a,b){return J.bO(a).i2(a,b)},
mE:function(a,b,c){return J.cG(a).t(a,b,c)},
mF:function(a){return J.cG(a).i9(a)},
a3:function(a){return J.S(a).i(a)},
a:function a(){},
fF:function fF(){},
d3:function d3(){},
d4:function d4(){},
hy:function hy(){},
bE:function bE(){},
b5:function b5(){},
b3:function b3(a){this.$ti=a},
kw:function kw(a){this.$ti=a},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c0:function c0(){},
d2:function d2(){},
fG:function fG(){},
b4:function b4(){}},P={
nD:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oA()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bL(new P.j_(s),1)).observe(u,{childList:true})
return new P.iZ(s,u,t)}else if(self.setImmediate!=null)return P.oB()
return P.oC()},
nE:function(a){self.scheduleImmediate(H.bL(new P.j0(a),0))},
nF:function(a){self.setImmediate(H.bL(new P.j1(a),0))},
nG:function(a){P.kE(C.n,a)},
kE:function(a,b){var u=C.c.a2(a.a,1000)
return P.nN(u<0?0:u,b)},
lx:function(a,b){var u=C.c.a2(a.a,1000)
return P.nO(u<0?0:u,b)},
nN:function(a,b){var u=new P.en()
u.es(a,b)
return u},
nO:function(a,b){var u=new P.en()
u.eu(a,b)
return u},
pw:function(a){return new P.bF(a,1)},
nJ:function(){return C.X},
nK:function(a){return new P.bF(a,3)},
o7:function(a,b){return new P.ju(a,[b])},
ot:function(){var u,t
for(;u=$.bJ,u!=null;){$.cF=null
t=u.b
$.bJ=t
if(t==null)$.cE=null
u.a.$0()}},
oy:function(){$.kO=!0
try{P.ot()}finally{$.cF=null
$.kO=!1
if($.bJ!=null)$.l0().$1(P.lZ())}},
ow:function(a){var u=new P.dK(a)
if($.bJ==null){$.bJ=$.cE=u
if(!$.kO)$.l0().$1(P.lZ())}else $.cE=$.cE.b=u},
ox:function(a){var u,t,s=$.bJ
if(s==null){P.ow(a)
$.cF=$.cE
return}u=new P.dK(a)
t=$.cF
if(t==null){u.b=s
$.bJ=$.cF=u}else{u.b=t.b
$.cF=t.b=u
if(u.b==null)$.cE=u}},
lw:function(a,b){var u=$.ap
if(u===C.f)return P.kE(a,b)
return P.kE(a,u.hd(b))},
nv:function(a,b){var u=$.ap
if(u===C.f)return P.lx(a,b)
return P.lx(a,u.d8(b,P.dw))},
lU:function(a,b,c,d,e){var u={}
u.a=d
P.ox(new P.jQ(u,e))},
ou:function(a,b,c,d){var u,t=$.ap
if(t===c)return d.$0()
$.ap=c
u=t
try{t=d.$0()
return t}finally{$.ap=u}},
ov:function(a,b,c,d,e){var u,t=$.ap
if(t===c)return d.$1(e)
$.ap=c
u=t
try{t=d.$1(e)
return t}finally{$.ap=u}},
j_:function j_(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
en:function en(){this.c=0},
jy:function jy(a,b){this.a=a
this.b=b},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ju:function ju(a,b){this.a=a
this.$ti=b},
dK:function dK(a){this.a=a
this.b=null},
ds:function ds(){},
i4:function i4(){},
dw:function dw(){},
jH:function jH(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function(a,b){return new H.I([a,b])},
kz:function(a,b){return new H.I([a,b])},
n1:function(a){return H.oJ(a,new H.I([null,null]))},
c2:function(a){return new P.jc([a])},
kJ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nM:function(a,b){var u=new P.dZ(a,b)
u.c=a.e
return u},
mT:function(a,b,c){var u,t
if(P.kP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.a9.push(a)
try{P.o6(a,u)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=P.lu(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ku:function(a,b,c){var u,t
if(P.kP(a))return b+"..."+c
u=new P.R(b)
$.a9.push(a)
try{t=u
t.a=P.lu(t.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kP:function(a){var u,t
for(u=$.a9.length,t=0;t<u;++t)if(a===$.a9[t])return!0
return!1},
o6:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.u();r=q,q=p){p=n.gC(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
n0:function(a,b,c){var u=P.n_(b,c)
a.G(0,new P.fQ(u))
return u},
lf:function(a,b){var u,t,s=P.c2(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
kB:function(a){var u,t={}
if(P.kP(a))return"{...}"
u=new P.R("")
try{$.a9.push(a)
u.a+="{"
t.a=!0
J.l2(a,new P.fV(t,u))
u.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jc:function jc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jd:function jd(a){this.a=a
this.c=this.b=null},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fC:function fC(){},
fQ:function fQ(a){this.a=a},
fR:function fR(){},
x:function x(){},
fU:function fU(){},
fV:function fV(a,b){this.a=a
this.b=b},
a0:function a0(){},
jz:function jz(){},
fW:function fW(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
jj:function jj(){},
e_:function e_(){},
es:function es(){},
ny:function(a,b,c,d){if(b instanceof Uint8Array)return P.nz(!1,b,c,d)
return},
nz:function(a,b,c,d){var u,t,s=$.mp()
if(s==null)return
u=0===c
if(u&&!0)return P.kH(s,b)
t=b.length
d=P.aT(c,d,t)
if(u&&d===t)return P.kH(s,b)
return P.kH(s,b.subarray(c,d))},
kH:function(a,b){if(P.nB(b))return
return P.nC(a,b)},
nC:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.af(t)}return},
nB:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nA:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.af(t)}return},
lW:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.t(c)
u=J.bj(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a8()
if((s&127)!==s)return t-b}return c-b},
l6:function(a,b,c,d,e,f){if(C.c.bb(f,4)!==0)throw H.c(P.T("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.T("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.T("Invalid base64 padding, more than two '=' characters",a,b))},
eT:function eT(){},
eU:function eU(){},
eZ:function eZ(){},
f3:function f3(){},
fj:function fj(){},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fz:function fz(a){this.a=a},
iI:function iI(){},
iK:function iK(){},
jF:function jF(a){this.b=0
this.c=a},
iJ:function iJ(a){this.a=a},
jE:function jE(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eG:function(a,b,c){var u=H.ni(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.T(a,null,null))},
mQ:function(a){if(a instanceof H.bT)return a.i(0)
return"Instance of '"+H.e(H.cc(a))+"'"},
n2:function(a,b,c){var u,t,s=J.mV(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kA:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aK(a);u.u();)t.push(u.gC(u))
if(b)return t
return J.kv(t)},
cf:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aT(b,c,u)
if(b<=0){if(typeof c!=="number")return c.O()
t=c<u}else t=!0
return H.lp(t?C.b.e6(a,b,c):a)}if(!!J.S(a).$ic9)return H.nk(a,b,P.aT(b,c,a.length))
return P.nt(a,b,c)},
nt:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Y(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Y(c,b,J.ag(a),q,q))
t=J.aK(a)
for(s=0;s<b;++s)if(!t.u())throw H.c(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gC(t))
else for(s=b;s<c;++s){if(!t.u())throw H.c(P.Y(c,b,s,q,q))
r.push(t.gC(t))}return H.lp(r)},
nm:function(a){return new H.fH(a,H.mY(a,!1,!0,!1,!1,!1))},
lu:function(a,b,c){var u=J.aK(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gC(u))
while(u.u())}else{a+=H.e(u.gC(u))
for(;u.u();)a=a+c+H.e(u.gC(u))}return a},
lA:function(){var u=H.na()
if(u!=null)return P.nx(u)
throw H.c(P.y("'Uri.base' is not supported"))},
et:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mv().b
if(typeof b!=="string")H.p(H.ae(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghr().c_(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.by(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mN:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cV:function(a){if(a>=10)return""+a
return"0"+a},
lb:function(a){return new P.b1(1000*a)},
ks:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mQ(a)},
eM:function(a){return new P.ak(!1,null,null,a)},
kk:function(a,b,c){return new P.ak(!0,a,b,c)},
dj:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
aT:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.Y(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.Y(b,a,c,"end",null))
return b}return c},
lq:function(a,b){if(typeof a!=="number")return a.O()
if(a<0)throw H.c(P.Y(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fB(u,!0,a,c,"Index out of range")},
y:function(a){return new P.iB(a)},
iy:function(a){return new P.ix(a)},
lt:function(a){return new P.ce(a)},
aM:function(a){return new P.f0(a)},
v:function(a){return new P.dS(a)},
T:function(a,b,c){return new P.ft(a,b,c)},
n3:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
kX:function(a){H.oV(a)},
nx:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.E(a,4)^58)*3|C.a.E(a,0)^100|C.a.E(a,1)^97|C.a.E(a,2)^116|C.a.E(a,3)^97)>>>0
if(u===0)return P.lz(e<e?C.a.t(a,0,e):a,5,f).gdZ()
else if(u===32)return P.lz(C.a.t(a,5,e),0,f).gdZ()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.w])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lV(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.ie()
if(r>=0)if(P.lV(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.O()
if(typeof n!=="number")return H.t(n)
if(m<n)n=m
if(typeof o!=="number")return o.O()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.O()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.O()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jm(a,r,q,p,o,n,m,k)}return P.nP(a,0,e,r,q,p,o,n,m,k)},
lC:function(a){var u=P.h
return C.b.hx(H.b(a.split("&"),[u]),P.kz(u,u),new P.iG(C.e))},
nw:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iD(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eG(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eG(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iE(a),d=new P.iF(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.W(a,t)
if(p===58){if(t===b){++t
if(C.a.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gat(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nw(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aL(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
nP:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nX(a,b,d)
else{if(d===b)P.bI(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nY(a,u,e-1):""
s=P.nU(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.nW(P.eG(C.a.t(a,r,g),new P.jA(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nV(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.O()
o=h<i?P.kL(a,h+1,i,n):n
return new P.bH(j,t,s,q,p,o,i<c?P.nT(a,i+1,c):n)},
lN:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bI:function(a,b,c){throw H.c(P.T(c,a,b))},
nW:function(a,b){if(a!=null&&a===P.lN(b))return
return a},
nU:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.W(a,u)!==93)P.bI(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nR(a,t,u)
if(typeof s!=="number")return s.O()
if(s<u){r=s+1
q=P.lS(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lB(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.bl(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.lS(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lB(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.o_(a,b,c)},
nR:function(a,b,c){var u,t=C.a.bl(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
lS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.R(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kM(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.R("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bI(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.R("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.R("")
l.a+=C.a.t(a,t,u)
l.a+=P.kK(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kM(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.R("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bI(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.R("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kK(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nX:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lP(C.a.E(a,b)))P.bI(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.E(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bI(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.nQ(t?a.toLowerCase():a)},
nQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nY:function(a,b,c){return P.cB(a,b,c,C.U,!1)},
nV:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cB(a,b,c,C.z,!0):C.i.iD(d,new P.jB(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a1(u,"/"))u="/"+u
return P.nZ(u,e,f)},
nZ:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a1(a,"/"))return P.o0(a,!u||c)
return P.o1(a)},
kL:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.eM("Both query and queryParameters specified"))
return P.cB(a,b,c,C.k,!0)}if(d==null)return
u=new P.R("")
t.a=""
d.G(0,new P.jC(new P.jD(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nT:function(a,b,c){return P.cB(a,b,c,C.k,!0)},
kM:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.jZ(u)
r=H.jZ(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aL(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.by(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
kK:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.E(m,a>>>4)
t[2]=C.a.E(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fW(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.E(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.E(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.cf(t,0,null)},
cB:function(a,b,c,d,e){var u=P.lR(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
lR:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.O()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kM(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bI(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kK(u)}}if(m==null)m=new P.R("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.O()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lQ:function(a){if(C.a.a1(a,"."))return!0
return C.a.dw(a,"/.")!==-1},
o1:function(a){var u,t,s,r,q,p,o
if(!P.lQ(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.E(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
o0:function(a,b){var u,t,s,r,q,p
if(!P.lQ(a))return!b?P.lO(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gat(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gat(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.lO(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
lO:function(a){var u,t,s,r=a.length
if(r>=2&&P.lP(J.mx(a,0)))for(u=1;u<r;++u){t=C.a.E(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.a5(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nS:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.E(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eM("Invalid URL encoding"))}}return u},
kN:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.E(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.m(C.a.t(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.E(a,q)
if(t>127)throw H.c(P.eM("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eM("Truncated URI"))
r.push(P.nS(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iJ(!1).c_(r)},
lP:function(a){var u=a|32
return 97<=u&&u<=122},
lz:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.E(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.T(m,a,t))}}if(s<0&&t>b)throw H.c(P.T(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.E(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gat(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.c(P.T("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hH(0,a,o,u)
else{n=P.lR(a,o,u,C.k,!0)
if(n!=null)a=C.a.aR(a,o,u,n)}return new P.iC(a,l,c)},
o3:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n3(22,new P.jL(),P.bB),n=new P.jK(o),m=new P.jM(),l=new P.jN(),k=n.$2(0,225)
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
lV:function(a,b,c,d,e){var u,t,s,r,q,p=$.mw()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.E(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aI:function aI(){},
ab:function ab(a,b){this.a=a
this.b=b},
O:function O(){},
b1:function b1(a){this.a=a},
ff:function ff(){},
fg:function fg(){},
bq:function bq(){},
dg:function dg(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fB:function fB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(a){this.a=a},
ix:function ix(a){this.a=a},
ce:function ce(a){this.a=a},
f0:function f0(a){this.a=a},
hx:function hx(){},
dq:function dq(){},
f8:function f8(a){this.a=a},
dS:function dS(a){this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(){},
w:function w(){},
j:function j(){},
fE:function fE(){},
o:function o(){},
Q:function Q(){},
ba:function ba(){},
aa:function aa(){},
a1:function a1(){},
h:function h(){},
R:function R(a){this.a=a},
iG:function iG(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
bH:function bH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(){},
jD:function jD(a,b){this.a=a
this.b=b},
jC:function jC(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(){},
jK:function jK(a){this.a=a},
jM:function jM(){},
jN:function jN(){},
jm:function jm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j5:function j5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aV:function(a){var u,t,s,r,q
if(a==null)return
u=P.kz(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oD:function(a){var u={}
a.G(0,new P.jR(u))
return u},
jo:function jo(){},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jR:function jR(a){this.a=a},
jp:function jp(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
fq:function fq(){},
fr:function fr(){},
jb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
je:function je(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aP:function aP(){},
fL:function fL(){},
aS:function aS(){},
hv:function hv(){},
hC:function hC(){},
cd:function cd(){},
i5:function i5(){},
k:function k(){},
aU:function aU(){},
il:function il(){},
dX:function dX(){},
dY:function dY(){},
e7:function e7(){},
e8:function e8(){},
ej:function ej(){},
ek:function ek(){},
eq:function eq(){},
er:function er(){},
bB:function bB(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(a){this.a=a},
eR:function eR(){},
bm:function bm(){},
hw:function hw(){},
dL:function dL(){},
i0:function i0(){},
ef:function ef(){},
eg:function eg(){}},W={
l5:function(){var u=document.createElement("a")
return u},
l9:function(){var u=document.createElement("canvas")
return u},
mP:function(a,b,c){var u=document.body,t=(u&&C.r).ae(u,a,b,c)
t.toString
u=new H.cp(new W.a2(t),new W.fi(),[W.F])
return u.gaF(u)},
kp:function(a){return"wheel"},
bV:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bO(a)
t=u.gdV(a)
if(typeof t==="string")r=u.gdV(a)}catch(s){H.af(s)}return r},
mS:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.af(u)}return s},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lL:function(a,b,c,d){var u=W.ja(W.ja(W.ja(W.ja(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.lX(new W.j8(c),W.i)
if(u!=null&&!0)J.mz(a,b,u,!1)
return new W.j7(a,b,u,!1)},
lK:function(a){var u=W.l5(),t=window.location
u=new W.cr(new W.ji(u,t))
u.ei(a)
return u},
nH:function(a,b,c,d){return!0},
nI:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
lM:function(){var u=P.h,t=P.lf(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jv(t,P.c2(u),P.c2(u),P.c2(u),null)
t.ep(null,new H.fY(C.o,new W.jw(),[H.aJ(C.o,0),u]),s,null)
return t},
lX:function(a,b){var u=$.ap
if(u===C.f)return a
return u.d8(a,b)},
n:function n(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
bn:function bn(){},
bo:function bo(){},
bp:function bp(){},
b_:function b_(){},
f4:function f4(){},
H:function H(){},
bU:function bU(){},
f5:function f5(){},
ah:function ah(){},
as:function as(){},
f6:function f6(){},
f7:function f7(){},
fa:function fa(){},
al:function al(){},
fc:function fc(){},
cX:function cX(){},
cY:function cY(){},
fd:function fd(){},
fe:function fe(){},
j3:function j3(a,b){this.a=a
this.b=b},
P:function P(){},
fi:function fi(){},
i:function i(){},
f:function f(){},
am:function am(){},
bX:function bX(){},
fo:function fo(){},
fs:function fs(){},
at:function at(){},
fy:function fy(){},
bZ:function bZ(){},
c_:function c_(){},
bv:function bv(){},
fS:function fS(){},
hf:function hf(){},
c5:function c5(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hi:function hi(){},
hj:function hj(a){this.a=a},
ax:function ax(){},
hk:function hk(){},
ay:function ay(){},
a2:function a2(a){this.a=a},
F:function F(){},
de:function de(){},
az:function az(){},
hA:function hA(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hN:function hN(){},
aB:function aB(){},
hY:function hY(){},
aC:function aC(){},
hZ:function hZ(){},
aD:function aD(){},
i2:function i2(){},
i3:function i3(a){this.a=a},
an:function an(){},
dt:function dt(){},
i6:function i6(){},
i7:function i7(){},
cg:function cg(){},
aE:function aE(){},
ao:function ao(){},
ia:function ia(){},
ib:function ib(){},
ie:function ie(){},
aF:function aF(){},
bA:function bA(){},
ij:function ij(){},
ik:function ik(){},
bd:function bd(){},
iH:function iH(){},
iW:function iW(){},
bh:function bh(){},
cq:function cq(){},
j4:function j4(){},
dN:function dN(){},
j9:function j9(){},
e4:function e4(){},
jn:function jn(){},
js:function js(){},
j2:function j2(){},
j6:function j6(a){this.a=a},
j7:function j7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j8:function j8(a){this.a=a},
cr:function cr(a){this.a=a},
L:function L(){},
df:function df(a){this.a=a},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(){},
jk:function jk(){},
jl:function jl(){},
jv:function jv(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jw:function jw(){},
jt:function jt(){},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aR:function aR(){},
ji:function ji(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
jG:function jG(a){this.a=a},
dM:function dM(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
cx:function cx(){},
cy:function cy(){},
ed:function ed(){},
ee:function ee(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
cz:function cz(){},
cA:function cA(){},
eo:function eo(){},
ep:function ep(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){}},K={
N:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.E(a,0)
t=C.a.E(b,0)
if(u>t){s=t
t=u
u=s}return new K.hF(u,t)},
u:function(a){var u=new K.hO()
u.ef(a)
return u},
aL:function aL(){},
d1:function d1(){},
b7:function b7(){},
a6:function a6(){this.a=null},
hF:function hF(a,b){this.a=a
this.b=b},
hO:function hO(){this.a=null}},L={
ih:function(){var u=new L.ig(),t=P.h
u.a=new H.I([t,L.dr])
u.b=new H.I([t,L.dy])
u.c=P.c2(t)
return u},
dr:function dr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.b=a
this.c=null},
ig:function ig(){var _=this
_.d=_.c=_.b=_.a=null},
dA:function dA(a){this.b=a
this.a=this.c=null}},O={
kn:function(a){var u=new O.b0([a])
u.bx(a)
return u},
b0:function b0(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c4:function c4(){this.b=this.a=null},
lg:function(){var u,t=new O.d9(),s=O.kn(V.av)
t.e=s
s.bc(t.geV(),t.geX())
s=new O.au(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.f=s
s=new O.au(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.r=s
s=new O.au(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.x=s
s=new O.au(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.y=s
s=new O.h4(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=100
t.z=s
s=new O.h0(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.au(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
t.cx=s
s=new O.h3(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=1
t.cy=s
s=new O.h_(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.d6()
s.bx(D.a5)
s.e=H.b([],[D.eS])
s.f=H.b([],[D.fb])
s.r=H.b([],[D.bw])
s.x=H.b([],[D.i_])
s.z=s.y=null
s.cs(s.geT(),s.gfu(),s.gfA())
t.dx=s
u=new O.h2()
u.b=new V.ar(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.K():u
s.n(0,t.gfN())
s=t.dx
u=s.z
s=u==null?s.z=D.K():u
s.n(0,t.geq())
t.fr=null
return t},
d9:function d9(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(){},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(){},
h_:function h_(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
da:function da(){},
h0:function h0(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
au:function au(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h2:function h2(){var _=this
_.e=_.d=_.c=_.b=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){}},E={
kr:function(){var u,t=new E.aO()
t.a=""
t.b=!0
u=O.kn(E.aO)
t.y=u
u.bc(t.ghI(),t.ghL())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sab(0,null)
t.sb8(null)
t.saC(null)
return t},
nn:function(a,b){var u=new E.hG(a)
u.ee(a,b)
return u},
nu:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibp)return E.lv(a,!0,!0,!0,!1)
u=W.l9()
t=u.style
t.width="100%"
t.height="100%"
s.gbY(a).n(0,u)
return E.lv(u,!0,!0,!0,!1)},
lv:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dv(),p=C.m.e2(a,"webgl2",P.n1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.v("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nn(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dE(a)
t=new X.fK()
t.c=new X.ai(!1,!1,!1)
t.d=P.c2(P.w)
u.b=t
t=new X.hl(u)
t.f=0
t.r=V.bb()
t.x=V.bb()
t.ch=t.Q=1
u.c=t
t=new X.fT(u)
t.r=0
t.x=V.bb()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ii(u)
t.f=V.bb()
t.r=V.bb()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.ds,P.a1]])
u.z=t
s=document
t.push(W.Z(s,"contextmenu",u.gf4(),!1))
u.z.push(W.Z(a,"focus",u.gfa(),!1))
u.z.push(W.Z(a,"blur",u.geZ(),!1))
u.z.push(W.Z(s,"keyup",u.gfe(),!1))
u.z.push(W.Z(s,"keydown",u.gfc(),!1))
u.z.push(W.Z(a,"mousedown",u.gfi(),!1))
u.z.push(W.Z(a,"mouseup",u.gfm(),!1))
u.z.push(W.Z(a,r,u.gfk(),!1))
t=u.z
W.kp(a)
W.kp(a)
t.push(W.Z(a,W.kp(a),u.gfo(),!1))
u.z.push(W.Z(s,r,u.gf6(),!1))
u.z.push(W.Z(s,"mouseup",u.gf8(),!1))
u.z.push(W.Z(s,"pointerlockchange",u.gfq(),!1))
u.z.push(W.Z(a,"touchstart",u.gfG(),!1))
u.z.push(W.Z(a,"touchend",u.gfC(),!1))
u.z.push(W.Z(a,"touchmove",u.gfE(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ab(Date.now(),!1)
q.db=0
q.cU()
return q},
eV:function eV(){},
aO:function aO(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
dv:function dv(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
id:function id(a){this.a=a}},Z={
kI:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cD(c)),35044)
a.bindBuffer(b,null)
return new Z.dJ(b,u)},
aj:function(a){return new Z.bg(a)},
dJ:function dJ(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iX:function iX(a){this.a=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bs:function bs(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
K:function(){var u=new D.br()
u.d=0
return u},
eY:function eY(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
X:function X(){this.b=null},
bt:function bt(){this.b=null},
bu:function bu(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eS:function eS(){},
fb:function fb(){},
a5:function a5(){},
d6:function d6(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
bw:function bw(){var _=this
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(){}},X={cR:function cR(a,b){this.a=a
this.b=b},d5:function d5(a,b){this.a=a
this.b=b},fK:function fK(){var _=this
_.d=_.c=_.b=_.a=null},d8:function d8(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fT:function fT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},aQ:function aQ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hl:function hl(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c6:function c6(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hB:function hB(){},dz:function dz(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ii:function ii(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dE:function dE(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mR:function(a){var u=new X.fu(),t=new V.ar(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ls
if(t==null){t=V.lr(0,0,1,1)
$.ls=t}u.r=t
return u},
km:function km(){},
fu:function fu(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){}},V={
ki:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bb(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.a.ag("null",c)
return C.a.ag(C.d.dX(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bN:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ag(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
b8:function(){var u=$.he
return u==null?$.he=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lk:function(a,b,c){return V.aw(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kC:function(a,b,c,d){return V.aw(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
li:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lj:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aw(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
bb:function(){var u=$.ln
return u==null?$.ln=new V.a7(0,0):u},
n8:function(){var u=$.aA
return u==null?$.aA=new V.U(0,0,0):u},
lr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dk(a,b,c,d)},
cn:function(){var u=$.lI
return u==null?$.lI=new V.B(0,0,0):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.a=a},
hd:function hd(a,b,c,d,e,f,g,h,i){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oY:function(a){P.nv(C.O,new V.kc(a))},
np:function(a){var u=new V.hT()
u.eh(a,!0)
return u},
cS:function cS(){},
kc:function kc(a){this.a=a},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fw:function fw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hz:function hz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(a){this.a=a
this.c=null},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hT:function hT(){this.b=this.a=null},
hV:function hV(a){this.a=a},
hU:function hU(a){this.a=a},
hW:function hW(a){this.a=a}},U={
ko:function(){var u=new U.f_()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
cU:function(a){var u=new U.cT()
if(a==null)a=V.b8()
if(null!=a)u.a=a
return u},
kt:function(){var u=new U.bY()
u.bx(U.ac)
u.bc(u.gem(),u.gfw())
u.e=null
u.f=V.b8()
u.r=0
return u},
f_:function f_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
bY:function bY(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
dl:function dl(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dH:function dH(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kQ:function(a,b,c,d,e,f,g,h){var u,t,s,r,q=c>1?1:c,p=d>1?1:d,o=e>1?1:e,n=new V.W(q,p,o),m=U.kt()
m.n(0,U.cU(V.lk(0,0,2)))
o=new U.dl()
o.r=o.f=o.e=o.d=o.c=o.b=o.a=0
o.se0(0)
o.sdO(0,0)
o.sdU(0)
q=o.d
if(!(Math.abs(q-f)<$.A().a)){o.d=f
q=new D.z("deltaYaw",q,f)
q.b=!0
o.I(q)}q=o.e
if(!(Math.abs(q-g)<$.A().a)){o.e=g
q=new D.z("deltaPitch",q,g)
q.b=!0
o.I(q)}q=o.f
if(!(Math.abs(q-h)<$.A().a)){o.f=h
q=new D.z("deltaRoll",q,h)
q.b=!0
o.I(q)}m.n(0,o)
u=E.kr()
q=U.kt()
q.n(0,U.cU(V.kC(0.1,0.1,0.1,1)))
q.n(0,m)
u.saC(q)
u.sab(0,F.ma(8,8))
q=O.lg()
q.f.say(0,n)
u.sb8(q)
t=new D.bw()
t.c=new V.W(1,1,1)
t.r=1
t.y=t.x=0
t.z=!0
t.a=V.b8()
s=t.b
t.b=m
m.gA().n(0,t.gek())
q=new D.z("mover",s,t.b)
q.b=!0
t.a9(q)
if(!t.c.q(0,n)){s=t.c
t.c=n
q=new D.z("color",s,n)
q.b=!0
t.a9(q)}q=$.lJ
if(q==null){q=new V.co(1,0.00390625,0.0000152587890625,0)
$.lJ=q
r=q}else r=q
if(!J.E(t.f,r)){s=t.f
t.f=r
q=new D.z("shadowAdjust",s,r)
q.b=!0
t.a9(q)}q=t.r
if(!(Math.abs(q-1)<$.A().a)){t.r=1
q=new D.z("attenuation0",q,1)
q.b=!0
t.a9(q)}q=t.x
if(!(Math.abs(q-0.5)<$.A().a)){t.x=0.5
q=new D.z("attenuation1",q,0.5)
q.b=!0
t.a9(q)}q=t.y
if(!(Math.abs(q-0.15)<$.A().a)){t.y=0.15
q=new D.z("attenuation2",q,0.15)
q.b=!0
t.a9(q)}a.dx.n(0,t)
b.e.n(0,u)},
m6:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.np("Test 021"),a=W.l9()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.h]
b.d5(H.b(["Test of the Material Lighting shader with multiple moving point lights. ","Emissive spheres are added at the lights sources."],u))
b.h2(H.b(["shapes"],u))
b.d5(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(e)
if(t==null)H.p(P.v("Failed to find an element with the identifier, testCanvas."))
s=E.nu(t,!0,!0,!0,!1)
r=E.kr()
r.saC(U.cU(V.b8()))
r.sab(0,F.mc())
q=E.kr()
q.saC(U.cU(V.kC(3,3,3,1)))
p=F.kS(1,d,d,1)
p.cb()
q.sab(0,p)
o=U.kt()
p=s.x
n=new U.dG()
m=U.ko()
m.scq(0,!0)
m.sce(6.283185307179586)
m.scg(0)
m.sY(0,0)
m.scf(100)
m.sV(0)
m.sc1(0.5)
n.b=m
l=n.gaJ()
m.gA().n(0,l)
m=U.ko()
m.scq(0,!0)
m.sce(6.283185307179586)
m.scg(0)
m.sY(0,0)
m.scf(100)
m.sV(0)
m.sc1(0.5)
n.c=m
m.gA().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.ai(!1,!1,!1)
j=n.d
n.d=k
m=new D.z(c,j,k)
m.b=!0
n.I(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.z("invertX",m,!1)
m.b=!0
n.I(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.z("invertY",m,!1)
m.b=!0
n.I(m)}n.aY(p)
o.n(0,n)
p=s.x
n=new U.dF()
m=U.ko()
m.scq(0,!0)
m.sce(6.283185307179586)
m.scg(0)
m.sY(0,0)
m.scf(100)
m.sV(0)
m.sc1(0.2)
n.b=m
m.gA().n(0,n.gaJ())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.ai(!0,!1,!1)
j=n.c
n.c=k
m=new D.z(c,j,k)
m.b=!0
n.I(m)
n.aY(p)
o.n(0,n)
p=s.x
n=new U.dH()
n.c=0.01
n.e=n.d=0
k=new X.ai(!1,!1,!1)
n.b=k
m=new D.z(c,d,k)
m.b=!0
n.I(m)
n.aY(p)
o.n(0,n)
o.n(0,U.cU(V.lk(0,0,5)))
i=O.lg()
p=i.r
p.say(0,new V.W(0.15,0.15,0.15))
p=i.x
p.say(0,new V.W(0.4,0.4,0.4))
p=i.z
p.say(0,new V.W(0.3,0.3,0.3))
p=i.z
p.cW(new A.a_(!0,!1,!1))
p.cX(100)
h=new M.cZ()
h.a=!0
p=O.kn(E.aO)
h.e=p
p.bc(h.gf0(),h.gf2())
h.y=h.x=h.r=h.f=null
g=X.mR(d)
f=new X.dh()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saC(d)
p=f.c
if(!(Math.abs(p-1.0471975511965976)<$.A().a)){f.c=1.0471975511965976
p=new D.z("fov",p,1.0471975511965976)
p.b=!0
f.aH(p)}p=f.d
if(!(Math.abs(p-0.1)<$.A().a)){f.d=0.1
p=new D.z("near",p,0.1)
p.b=!0
f.aH(p)}p=f.e
if(!(Math.abs(p-2000)<$.A().a)){f.e=2000
p=new D.z("far",p,2000)
p.b=!0
f.aH(p)}p=h.b
if(p!==f){if(p!=null)p.gA().M(0,h.gap())
j=h.b
h.b=f
f.gA().n(0,h.gap())
p=new D.z("camera",j,h.b)
p.b=!0
h.au(p)}p=h.c
if(p!==g){if(p!=null)p.gA().M(0,h.gap())
j=h.c
h.c=g
g.gA().n(0,h.gap())
p=new D.z("target",j,h.c)
p.b=!0
h.au(p)}h.sb8(d)
h.sb8(i)
h.e.n(0,q)
h.e.n(0,r)
h.b.saC(o)
p=s.d
if(p!==h){if(p!=null)p.gA().M(0,s.gcA())
s.d=h
h.gA().n(0,s.gcA())
s.cB()}U.kQ(i,h,1,0,0,0.3,0,0)
U.kQ(i,h,0,1,0,0,0.4,0)
U.kQ(i,h,0,0,1,0.5,0.5,0)
p=new V.hD("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
p.aX(0,"Cube",new U.k4(r))
p.aX(0,"Cylinder",new U.k5(r))
p.aX(0,"Cone",new U.k6(r))
p.aX(0,"Sphere",new U.k7(r))
p.d3(0,"Toroid",new U.k8(r),!0)
p.aX(0,"Knot",new U.k9(r))
u=s.Q
if(u==null)u=s.Q=D.K()
p=u.b
u=p==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):p
u.push(new U.ka(b,i))
V.oY(s)},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a,b){this.a=a
this.b=b}},M={cZ:function cZ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
n5:function(a,b){var u=a.b0,t=new A.fZ(b,u)
t.eg(b,u)
t.ed(a,b)
return t},
n6:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gao(a2)+a3.gao(a3)+a4.gao(a4)+a5.gao(a5)+a6.gao(a6)+a7.gao(a7)+a8.gao(a8)+a9.gao(a9)+b0.gao(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.l)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.l)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.l)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.l)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(p=b4.length,t=0;t<p;++t,r=!0)s+=b4[t].b
if(!a8.a)p=!1
else p=!0
if(!p)if(!a9.a)o=!1
else o=!0
else o=!0
n=u>0
if(!a3.a)u=!1
else u=!0
if(!u){if(!a4.a)u=!1
else u=!0
if(!u){if(!a5.a)u=!1
else u=!0
if(!u)if(!a6.a)u=!1
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a6.a
if(u)p=!1
else p=!0
l=p||n||q>0||o
if(!a4.a)q=!1
else q=!0
if(!q){if(!a5.a)q=!1
else q=!0
if(!q){if(u)u=!1
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a7.a)u=!1
else u=!0
j=u||o}else j=!0
if(!a7.a)i=!1
else i=!0
h=a1>0
g=j||i||l||!1
f=n&&k
e=$.aZ()
if(j){u=$.aY()
e=new Z.bg(e.a|u.a)}if(i){u=$.aX()
e=new Z.bg(e.a|u.a)}if(h){u=$.aW()
e=new Z.bg(e.a|u.a)}return new A.h1(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jO:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jP:function(a,b,c){var u
A.jO(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eH(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oc:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jO(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
o8:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jP(b,t,"ambient")
b.a+="\n"},
oa:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jP(b,t,"diffuse")
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
od:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jP(b,t,"invDiffuse")
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
oj:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jP(b,t,"specular")
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
of:function(a,b){var u,t,s
if(!a.k4)return
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
oh:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jO(b,t,"reflect")
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
oi:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jO(b,t,"refract")
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
o9:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eH(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 startPnt;\n"
c.a=r
r+="   vec3 endPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.a8()
u=(u&4)!==0
if(u){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+o+"];\n"
r+="\n"
c.a=r
r+="vec3 "+t+"ClosestPoint("+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=r
r+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=r
r+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=r
r+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=r
r+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=r
r+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=r
r+="   return lit.startPnt + t*lineVec;\n"
c.a=r
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Intensity(vec3 normDir, vec3 litPnt, "+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
if(u){r+="   float dist = length(objPos - litPnt);\n"
c.a=r
r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.h]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.j(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
if(!a.b.a)u=!1
else u=!0
if(u)q.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
q.push("highLight")
u=c.a+="   vec3 litPnt  = "+t+"ClosestPoint(lit);\n"
u+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=u
u+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=u
u+="   vec3 intensity = "+t+"Intensity(normDir, litPnt, lit);\n"
c.a=u
c.a=u+"   if(length(intensity) > 0.0001) {\n"
p=H.b([],r)
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.j(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(q," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
c.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
o=c.a+="   for(int i = 0; i < "+o+"; ++i)\n"
o+="   {\n"
c.a=o
o+="      if(i >= "+t+"Count) break;\n"
c.a=o
o+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=o
o+="   }\n"
c.a=o
o+="   return lightAccum;\n"
c.a=o
o+="}\n"
c.a=o
c.a=o+"\n"},
ob:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eH(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a8()
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
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
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
c.a+="      highLight = intensity*("+C.b.j(m," + ")+");\n"}else c.a+="   highLight = "+C.b.j(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
og:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eH(t)
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
if(typeof u!=="number")return u.a8()
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
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.j(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
if(!a.b.a)o=!1
else o=!0
if(o)l.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.j(l," + ")+");\n"
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
ok:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eH(t)
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
if(typeof u!=="number")return u.a8()
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
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.j(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
if(!a.b.a)r=!1
else r=!0
if(r)j.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.b([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
oe:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.h])
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
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ol:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.R("")
j.a="precision mediump float;\n"
j.a=l
u=a.k4
if(u){j.a=k
t=k}else t=l
if(a.r1){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
j.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k2){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k3?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
j.a=t}if(a.dy)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.oc(a,j)
A.o8(a,j)
A.oa(a,j)
A.od(a,j)
A.oj(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oh(a,j)
A.oi(a,j)}A.of(a,j)
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
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.o9(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.ob(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.og(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.ok(a,q[o],j)
A.oe(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a5(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
om:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bj+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k4
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.r1
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
oo:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
on:function(a,b){var u
if(!a.r1)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oq:function(a,b){var u,t
if(!a.r2)return
u=a.x1
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
or:function(a,b){var u,t
if(!a.rx)return
u=a.x2
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
op:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
os:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
eH:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a5(a,1)},
kF:function(a,b,c,d,e){var u=new A.iq(a,c,e)
u.f=d
P.n2(d,0,P.w)
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b){var _=this
_.ip=_.io=_.bk=_.b0=_.bj=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iC=_.iB=_.iA=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.iz=_.iy=_.dn=_.ix=_.iw=_.dm=_.dl=_.iv=_.iu=_.dk=_.dj=_.it=_.is=_.di=_.ir=_.iq=_.dh=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cO:function cO(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
di:function di(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
h1:function h1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bj=b3
_.b0=b4
_.bk=b5},
ci:function ci(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cj:function cj(a,b,c,d,e,f){var _=this
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
dm:function dm(){},
dB:function dB(){},
iv:function iv(a){this.a=a},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
ch:function ch(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ck:function ck(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
kS:function(a,b,c,d){var u=F.kD()
F.cC(u,b,c,d,a,1,0,0,1)
F.cC(u,b,c,d,a,0,1,0,3)
F.cC(u,b,c,d,a,0,0,1,2)
F.cC(u,b,c,d,a,-1,0,0,0)
F.cC(u,b,c,d,a,0,-1,0,0)
F.cC(u,b,c,d,a,0,0,-1,3)
u.as()
return u},
jJ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cC:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.B(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.B(u+a3,t+a1,s+a2)
q=new V.B(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.B(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jJ(i)
l=F.jJ(h)
k=F.kZ(d,a0,new F.jI(j,F.jJ(g),F.jJ(f),l,m,c),b)
if(k!=null)a.b5(k)},
m1:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.kD()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bf])
q=u.a
p=new V.B(0,0,t)
p=p.v(0,Math.sqrt(p.D(p)))
r.push(q.h6(new V.bc(a,-1,-1,-1),new V.ar(1,1,1,1),new V.U(0,0,c),new V.B(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.B(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dI(new V.bc(a,-1,-1,-1),null,new V.ar(i,g,h,1),new V.U(m*k,l*k,c),new V.B(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.h4(r)
return u},
m_:function(a,b,c){return F.oE(!0,a,1,new F.jS(1,c),b)},
oE:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kZ(c,e,new F.jU(d),null)
if(u==null)return
u.as()
u.bU()
if(b)u.b5(F.m1(3,!1,1,new F.jV(d),e))
u.b5(F.m1(1,!0,-1,new F.jW(d),e))
return u},
ma:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kd()
t=F.kS(a,null,new F.ke(s,1),b)
t.bU()
return t},
mc:function(){return F.m0(15,30,0.5,1,new F.kg())},
oS:function(){return F.m0(12,120,0.3,1,new F.k3(3,2))},
m0:function(a,b,c,d,e){var u=F.kZ(a,b,new F.jT(e,d,b,c),null)
if(u==null)return
u.as()
u.bU()
return u},
kZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kD()
t=H.b([],[F.bf])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dI(g,g,new V.ar(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c0(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dI(g,g,new V.ar(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c0(d))}}u.d.h5(a+1,b+1,t)
return u},
bW:function(a,b,c){var u=new F.b2(),t=a.a
if(t==null)H.p(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.v("May not create a face with vertices attached to different shapes."))
u.bS(a)
u.bT(b)
u.fS(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
mZ:function(a,b){var u=new F.c1(),t=a.a
if(t==null)H.p(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.v("May not create a line with vertices attached to different shapes."))
u.bS(a)
u.bT(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
kD:function(){var u=new F.hP(),t=new F.iL(u)
t.b=!1
t.c=H.b([],[F.bf])
u.a=t
t=new F.hS(u)
t.b=H.b([],[F.ca])
u.b=t
t=new F.hR(u)
t.b=H.b([],[F.c1])
u.c=t
t=new F.hQ(u)
t.b=H.b([],[F.b2])
u.d=t
u.e=null
return u},
dI:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bf(),r=new F.iT()
r.b=H.b([],[F.ca])
s.b=r
r=new F.iP()
u=[F.c1]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iM()
u=[F.b2]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mq()
s.e=0
r=$.aZ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aY().a)!==0?e:t
s.x=(u&$.aX().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.mr().a)!==0?c:t
s.ch=(u&$.bP().a)!==0?i:0
s.cx=(u&$.aW().a)!==0?a:t
return s},
jI:function jI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jS:function jS(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
kd:function kd(){},
ke:function ke(a,b){this.a=a
this.b=b},
kg:function kg(){},
k3:function k3(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(){},
hX:function hX(){},
c1:function c1(){this.b=this.a=null},
fM:function fM(){},
ip:function ip(){},
ca:function ca(){this.a=null},
hP:function hP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){this.a=a
this.b=null},
hR:function hR(a){this.a=a
this.b=null},
hS:function hS(a){this.a=a
this.b=null},
bf:function bf(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iV:function iV(a){this.a=a},
iU:function iU(a){this.a=a},
iL:function iL(a){this.a=a
this.c=this.b=null},
iM:function iM(){this.d=this.c=this.b=null},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(){this.c=this.b=null},
iR:function iR(){},
iQ:function iQ(){},
iS:function iS(){},
ht:function ht(){},
iT:function iT(){this.b=null}},T={ic:function ic(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kx.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gJ:function(a){return H.cb(a)},
i:function(a){return"Instance of '"+H.e(H.cc(a))+"'"}}
J.fF.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaI:1}
J.d3.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.d4.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$imX:1}
J.hy.prototype={}
J.bE.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.me()]
if(u==null)return this.ea(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b3.prototype={
cm:function(a,b){if(!!a.fixed$length)H.p(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dj(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.p(P.y("remove"))
for(u=0;u<a.length;++u)if(J.E(a[u],b)){a.splice(u,1)
return!0}return!1},
ad:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aM(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hE:function(a){return this.j(a,"")},
hw:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aM(a))}return u},
hx:function(a,b,c){return this.hw(a,b,c,null)},
hv:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aM(a))}throw H.c(H.fD())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
e6:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Y(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Y(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aJ(a,0)])
return H.b(a.slice(b,c),[H.aJ(a,0)])},
ghu:function(a){if(a.length>0)return a[0]
throw H.c(H.fD())},
gat:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fD())},
d6:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aM(a))}return!1},
aT:function(a,b){if(!!a.immutable$list)H.p(P.y("sort"))
H.ns(a,b==null?J.o5():b)},
e5:function(a){return this.aT(a,null)},
S:function(a,b){var u
for(u=0;u<a.length;++u)if(J.E(a[u],b))return!0
return!1},
i:function(a){return P.ku(a,"[","]")},
gT:function(a){return new J.a4(a,a.length)},
gJ:function(a){return H.cb(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kk(b,u,null))
if(b<0)throw H.c(P.Y(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bM(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bM(a,b))
a[b]=c},
$iq:1,
$ij:1,
$io:1}
J.kw.prototype={}
J.a4.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c0.prototype={
aO:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ae(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbm(b)
if(this.gbm(a)===u)return 0
if(this.gbm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbm:function(a){return a===0?1/a<0:a<0},
dq:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.y(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
dX:function(a,b){var u
if(b>20)throw H.c(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbm(a))return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.y("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.p("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ae(b))
return a*b},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ec:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cZ(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.cZ(a,b)},
cZ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.y("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aL:function(a,b){var u
if(a>0)u=this.cY(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fW:function(a,b){if(b<0)throw H.c(H.ae(b))
return this.cY(a,b)},
cY:function(a,b){return b>31?0:a>>>b},
$iO:1,
$iaa:1}
J.d2.prototype={$iw:1}
J.fG.prototype={}
J.b4.prototype={
W:function(a,b){if(b<0)throw H.c(H.bM(a,b))
if(b>=a.length)H.p(H.bM(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(b>=a.length)throw H.c(H.bM(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kk(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.aT(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.ae(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a1:function(a,b){return this.a4(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.O()
if(b<0)throw H.c(P.dj(b,null))
if(b>c)throw H.c(P.dj(b,null))
if(c>a.length)throw H.c(P.dj(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.t(a,b,null)},
i9:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ag:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
bl:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dw:function(a,b){return this.bl(a,b,0)},
aO:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ae(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ih:1}
H.m.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.W(this.a,b)},
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.q.prototype={}
H.d7.prototype={
gT:function(a){return new H.b6(this,this.gl(this))},
bu:function(a,b){return this.e9(0,b)}}
H.b6.prototype={
gC:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.bj(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aM(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.c3.prototype={
gT:function(a){return new H.fX(J.aK(this.a),this.b)},
gl:function(a){return J.ag(this.a)},
L:function(a,b){return this.b.$1(J.eI(this.a,b))},
$aj:function(a,b){return[b]}}
H.fh.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fX.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.fY.prototype={
gl:function(a){return J.ag(this.a)},
L:function(a,b){return this.b.$1(J.eI(this.a,b))},
$aq:function(a,b){return[b]},
$ad7:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cp.prototype={
gT:function(a){return new H.iY(J.aK(this.a),this.b)}}
H.iY.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.d_.prototype={}
H.iA.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.dC.prototype={}
H.f1.prototype={
i:function(a){return P.kB(this)},
m:function(a,b,c){return H.mM()},
$iQ:1}
H.f2.prototype={
gl:function(a){return this.a},
bZ:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bZ(0,b))return
return this.cM(b)},
cM:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cM(s))}}}
H.im.prototype={
af:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hu.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fJ.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iz.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kh.prototype={
$1:function(a){if(!!J.S(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eh.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bT.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cI(t==null?"unknown":t)+"'"},
gic:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i9.prototype={}
H.i1.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cI(u)+"'"}}
H.bR.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bR))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cb(this.a)
else u=typeof t!=="object"?J.cM(t):H.cb(t)
return(u^H.cb(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cc(u))+"'")}}
H.eX.prototype={
i:function(a){return this.a}}
H.hM.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghD:function(a){return this.a===0},
ga_:function(a){return new H.fO(this,[H.aJ(this,0)])},
gib:function(a){var u=this
return H.n4(u.ga_(u),new H.fI(u),H.aJ(u,0),H.aJ(u,1))},
bZ:function(a,b){var u=this.b
if(u==null)return!1
return this.eE(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.be(r,b)
s=t==null?null:t.b
return s}else return q.hA(b)},
hA:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cO(r,s.dz(a))
t=s.dA(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cE(u==null?s.b=s.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cE(t==null?s.c=s.bL():t,b,c)}else s.hB(b,c)},
hB:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bL()
u=r.dz(a)
t=r.cO(q,u)
if(t==null)r.bQ(q,u,[r.bM(a,b)])
else{s=r.dA(t,a)
if(s>=0)t[s].b=b
else t.push(r.bM(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aM(u))
t=t.c}},
cE:function(a,b,c){var u=this.be(a,b)
if(u==null)this.bQ(a,b,this.bM(b,c))
else u.b=c},
eP:function(){this.r=this.r+1&67108863},
bM:function(a,b){var u,t=this,s=new H.fN(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eP()
return s},
dz:function(a){return J.cM(a)&0x3ffffff},
dA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1},
i:function(a){return P.kB(this)},
be:function(a,b){return a[b]},
cO:function(a,b){return a[b]},
bQ:function(a,b,c){a[b]=c},
eI:function(a,b){delete a[b]},
eE:function(a,b){return this.be(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bQ(t,u,t)
this.eI(t,u)
return t}}
H.fI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aJ(u,1),args:[H.aJ(u,0)]}}}
H.fN.prototype={}
H.fO.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.fP(u,u.r)
t.c=u.e
return t}}
H.fP.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.k_.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.k0.prototype={
$2:function(a,b){return this.a(a,b)}}
H.k1.prototype={
$1:function(a){return this.a(a)}}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inl:1}
H.c7.prototype={$ic7:1}
H.b9.prototype={$ib9:1}
H.db.prototype={
gl:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.c8.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.O]},
$ax:function(){return[P.O]},
$ij:1,
$aj:function(){return[P.O]},
$io:1,
$ao:function(){return[P.O]}}
H.dc.prototype={
m:function(a,b,c){H.aH(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hm.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hn.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.ho.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hp.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.hq.prototype={
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.dd.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]}}
H.c9.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aH(b,a,a.length)
return a[b]},
$ic9:1,
$ibB:1}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
P.j_.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.iZ.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.j0.prototype={
$0:function(){this.a.$0()}}
P.j1.prototype={
$0:function(){this.a.$0()}}
P.en.prototype={
es:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bL(new P.jy(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
eu:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bL(new P.jx(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$idw:1}
P.jy.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jx.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ec(u,q)}s.c=r
t.d.$1(s)}}
P.bF.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bG.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bF){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aK(u)
if(!!r.$ibG){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ju.prototype={
gT:function(a){return new P.bG(this.a())}}
P.dK.prototype={}
P.ds.prototype={}
P.i4.prototype={}
P.dw.prototype={}
P.jH.prototype={}
P.jQ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dg():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jf.prototype={
i4:function(a){var u,t,s,r=null
try{if(C.f===$.ap){a.$0()
return}P.ou(r,r,this,a)}catch(s){u=H.af(s)
t=H.kU(s)
P.lU(r,r,this,u,t)}},
i5:function(a,b){var u,t,s,r=null
try{if(C.f===$.ap){a.$1(b)
return}P.ov(r,r,this,a,b)}catch(s){u=H.af(s)
t=H.kU(s)
P.lU(r,r,this,u,t)}},
i6:function(a,b){return this.i5(a,b,null)},
hd:function(a){return new P.jg(this,a)},
d8:function(a,b){return new P.jh(this,a,b)}}
P.jg.prototype={
$0:function(){return this.a.i4(this.b)}}
P.jh.prototype={
$1:function(a){return this.a.i6(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jc.prototype={
gT:function(a){var u=new P.dZ(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
S:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eD(b)
return t}},
eD:function(a){var u=this.d
if(u==null)return!1
return this.bC(this.cN(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cG(u==null?s.b=P.kJ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cG(t==null?s.c=P.kJ():t,b)}else return s.ew(0,b)},
ew:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kJ()
u=s.cI(b)
t=r[u]
if(t==null)r[u]=[s.bz(b)]
else{if(s.bC(t,b)>=0)return!1
t.push(s.bz(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fJ(this.c,b)
else return this.fI(0,b)},
fI:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cN(r,b)
t=s.bC(u,b)
if(t<0)return!1
s.d0(u.splice(t,1)[0])
return!0},
cG:function(a,b){if(a[b]!=null)return!1
a[b]=this.bz(b)
return!0},
fJ:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d0(u)
delete a[b]
return!0},
cH:function(){this.r=1073741823&this.r+1},
bz:function(a){var u,t=this,s=new P.jd(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cH()
return s},
d0:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cH()},
cI:function(a){return J.cM(a)&1073741823},
cN:function(a,b){return a[this.cI(b)]},
bC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.E(a[t].a,b))return t
return-1}}
P.jd.prototype={}
P.dZ.prototype={
gC:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fC.prototype={}
P.fQ.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.fR.prototype={$iq:1,$ij:1,$io:1}
P.x.prototype={
gT:function(a){return new H.b6(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
i8:function(a,b){var u,t,s=this,r=H.b([],[H.oK(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
i7:function(a){return this.i8(a,!0)},
hs:function(a,b,c,d){var u
P.aT(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.ku(a,"[","]")}}
P.fU.prototype={}
P.fV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a0.prototype={
G:function(a,b){var u,t
for(u=J.aK(this.ga_(a));u.u();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ag(this.ga_(a))},
i:function(a){return P.kB(a)},
$iQ:1}
P.jz.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify unmodifiable map"))}}
P.fW.prototype={
h:function(a,b){return J.bQ(this.a,b)},
m:function(a,b,c){J.kj(this.a,b,c)},
G:function(a,b){J.l2(this.a,b)},
gl:function(a){return J.ag(this.a)},
i:function(a){return J.a3(this.a)},
$iQ:1}
P.dD.prototype={}
P.jj.prototype={
ad:function(a,b){var u
for(u=J.aK(b);u.u();)this.n(0,u.gC(u))},
i:function(a){return P.ku(this,"{","}")},
L:function(a,b){var u,t,s
P.lq(b,"index")
for(u=P.nM(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.e_.prototype={}
P.es.prototype={}
P.eT.prototype={
hH:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aT(a0,a1,b.length)
u=$.mt()
if(typeof a1!=="number")return H.t(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.E(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jZ(C.a.E(b,n))
j=H.jZ(C.a.E(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.R("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.by(m)
s=n
continue}}throw H.c(P.T("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.l6(b,p,a1,q,o,f)
else{e=C.c.bb(f-1,4)+1
if(e===1)throw H.c(P.T(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.l6(b,p,a1,q,o,d)
else{e=C.c.bb(d,4)
if(e===1)throw H.c(P.T(c,b,a1))
if(e>1)b=C.a.aR(b,a1,a1,e===2?"==":"=")}return b}}
P.eU.prototype={}
P.eZ.prototype={}
P.f3.prototype={}
P.fj.prototype={}
P.fA.prototype={
i:function(a){return this.a}}
P.fz.prototype={
eF:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.R("")
if(r>b)q.a+=C.a.t(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mE(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iI.prototype={
ghr:function(){return C.M}}
P.iK.prototype={
c_:function(a){var u,t,s,r=P.aT(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jF(t)
if(s.eK(a,0,r)!==r)s.d2(J.mA(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o2(0,s.b,t.length)))}}
P.jF.prototype={
d2:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eK:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.E(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d2(r,C.a.E(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iJ.prototype={
c_:function(a){var u,t,s,r,q,p,o,n,m=P.ny(!1,a,0,null)
if(m!=null)return m
u=P.aT(0,null,J.ag(a))
t=P.lW(a,0,u)
if(t>0){s=P.cf(a,0,t)
if(t===u)return s
r=new P.R(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.R("")
o=new P.jE(!1,r)
o.c=p
o.hh(a,q,u)
if(o.e>0){H.p(P.T("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.by(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jE.prototype={
hh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bj(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a8()
if((r&192)!==128){q=P.T(k+C.c.b9(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.T("Overlong encoding of 0x"+C.c.b9(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.T("Character outside valid Unicode range: 0x"+C.c.b9(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.by(j)
l.c=!1}if(typeof c!=="number")return H.t(c)
q=s<c
for(;q;){p=P.lW(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cf(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.O()
if(r<0){m=P.T("Negative UTF-8 code unit: -0x"+C.c.b9(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.T(k+C.c.b9(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aI.prototype={}
P.ab.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ab&&this.a===b.a&&!0},
aO:function(a,b){return C.c.aO(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aL(u,30))&1073741823},
i:function(a){var u=this,t=P.mN(H.nh(u)),s=P.cV(H.nf(u)),r=P.cV(H.nb(u)),q=P.cV(H.nc(u)),p=P.cV(H.ne(u)),o=P.cV(H.ng(u)),n=P.mO(H.nd(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.O.prototype={}
P.b1.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aO:function(a,b){return C.c.aO(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fg(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.c.a2(q,6e7)%60)
t=r.$1(C.c.a2(q,1e6)%60)
s=new P.ff().$1(q%1e6)
return""+C.c.a2(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ff.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fg.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bq.prototype={}
P.dg.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbA:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbB()+o+u
if(!q.a)return t
s=q.gbA()
r=P.ks(q.b)
return t+s+": "+r}}
P.bz.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fB.prototype={
gbB:function(){return"RangeError"},
gbA:function(){var u,t=this.b
if(typeof t!=="number")return t.O()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iB.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ix.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ce.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f0.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ks(u)+"."}}
P.hx.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dq.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.f8.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dS.prototype={
i:function(a){return"Exception: "+this.a}}
P.ft.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.E(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.W(f,q)
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
k=""}j=C.a.t(f,m,n)
return h+l+j+k+"\n"+C.a.p(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fv.prototype={}
P.w.prototype={}
P.j.prototype={
bu:function(a,b){return new H.cp(this,b,[H.kT(this,"j",0)])},
gl:function(a){var u,t=this.gT(this)
for(u=0;t.u();)++u
return u},
gaF:function(a){var u,t=this.gT(this)
if(!t.u())throw H.c(H.fD())
u=t.gC(t)
if(t.u())throw H.c(H.mU())
return u},
L:function(a,b){var u,t,s
P.lq(b,"index")
for(u=this.gT(this),t=0;u.u();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.M(b,this,"index",null,t))},
i:function(a){return P.mT(this,"(",")")}}
P.fE.prototype={}
P.o.prototype={$iq:1,$ij:1}
P.Q.prototype={}
P.ba.prototype={
gJ:function(a){return P.a1.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.a1.prototype={constructor:P.a1,$ia1:1,
q:function(a,b){return this===b},
gJ:function(a){return H.cb(this)},
i:function(a){return"Instance of '"+H.e(H.cc(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.R.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iG.prototype={
$2:function(a,b){var u,t,s,r=J.cG(b).dw(b,"=")
if(r===-1){if(b!=="")J.kj(a,P.kN(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.a5(b,r+1)
s=this.a
J.kj(a,P.kN(u,0,u.length,s,!0),P.kN(t,0,t.length,s,!0))}return a}}
P.iD.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv4 address, "+a,this.a,b))}}
P.iE.prototype={
$2:function(a,b){throw H.c(P.T("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iF.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eG(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.O()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bH.prototype={
ge_:function(){return this.b},
gcc:function(a){var u=this.c
if(u==null)return""
if(C.a.a1(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbo:function(a){var u=this.d
if(u==null)return P.lN(this.a)
return u},
gck:function(a){var u=this.f
return u==null?"":u},
gdr:function(){var u=this.r
return u==null?"":u},
dS:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a1(u,"/"))u="/"+u
s=P.kL(null,0,0,b)
return new P.bH(q,o,m,n,u,s,r.r)},
gcl:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dD(P.lC(t==null?"":t),[u,u])
t=u}return t},
gds:function(){return this.c!=null},
gdv:function(){return this.f!=null},
gdt:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ikG)if(s.a==b.gbv())if(s.c!=null===b.gds())if(s.b==b.ge_())if(s.gcc(s)==b.gcc(b))if(s.gbo(s)==b.gbo(b))if(s.e===b.gdN(b)){u=s.f
t=u==null
if(!t===b.gdv()){if(t)u=""
if(u===b.gck(b)){u=s.r
t=u==null
if(!t===b.gdt()){if(t)u=""
u=u===b.gdr()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$ikG:1,
gbv:function(){return this.a},
gdN:function(a){return this.e}}
P.jA.prototype={
$1:function(a){throw H.c(P.T("Invalid port",this.a,this.b+1))}}
P.jB.prototype={
$1:function(a){return P.et(C.V,a,C.e,!1)}}
P.jD.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.et(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.et(C.h,b,C.e,!0))}}}
P.jC.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aK(b),t=this.a;u.u();)t.$2(a,u.gC(u))}}
P.iC.prototype={
gdZ:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bl(u,"?",o)
s=u.length
if(t>=0){r=P.cB(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.j5("data",p,p,p,P.cB(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jL.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jK.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mB(u,0,96,b)
return u},
$S:17}
P.jM.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.E(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jN.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.E(b,0),t=C.a.E(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jm.prototype={
gds:function(){return this.c>0},
gdu:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gdv:function(){var u=this.f
if(typeof u!=="number")return u.O()
return u<this.r},
gdt:function(){return this.r<this.a.length},
gcP:function(){return this.b===4&&C.a.a1(this.a,"http")},
gcQ:function(){return this.b===5&&C.a.a1(this.a,"https")},
gbv:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcP())q=t.x="http"
else if(t.gcQ()){t.x="https"
q="https"}else if(q===4&&C.a.a1(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a1(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
ge_:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gcc:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbo:function(a){var u,t=this
if(t.gdu()){u=t.d
if(typeof u!=="number")return u.B()
return P.eG(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcP())return 80
if(t.gcQ())return 443
return 0},
gdN:function(a){return C.a.t(this.a,this.e,this.f)},
gck:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.O()
return u<t?C.a.t(this.a,u+1,t):""},
gdr:function(){var u=this.r,t=this.a
return u<t.length?C.a.a5(t,u+1):""},
gcl:function(){var u=this,t=u.f
if(typeof t!=="number")return t.O()
if(t>=u.r)return C.W
t=P.h
return new P.dD(P.lC(u.gck(u)),[t,t])},
dS:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbv(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdu()?p.gbo(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a1(t,"/"))t="/"+t
r=P.kL(o,0,0,b)
s=p.r
q=s<l.length?C.a.a5(l,s+1):o
return new P.bH(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ikG&&this.a===b.i(0)},
i:function(a){return this.a},
$ikG:1}
P.j5.prototype={}
W.n.prototype={}
W.eJ.prototype={
gl:function(a){return a.length}}
W.eK.prototype={
i:function(a){return String(a)}}
W.eL.prototype={
i:function(a){return String(a)}}
W.bn.prototype={$ibn:1}
W.bo.prototype={$ibo:1}
W.bp.prototype={
e2:function(a,b,c){var u=a.getContext(b,P.oD(c))
return u},
$ibp:1}
W.b_.prototype={
gl:function(a){return a.length}}
W.f4.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bU.prototype={
gl:function(a){return a.length}}
W.f5.prototype={}
W.ah.prototype={}
W.as.prototype={}
W.f6.prototype={
gl:function(a){return a.length}}
W.f7.prototype={
gl:function(a){return a.length}}
W.fa.prototype={
gl:function(a){return a.length}}
W.al.prototype={$ial:1}
W.fc.prototype={
i:function(a){return String(a)}}
W.cX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a8,P.aa]]},
$iC:1,
$aC:function(){return[[P.a8,P.aa]]},
$ax:function(){return[[P.a8,P.aa]]},
$ij:1,
$aj:function(){return[[P.a8,P.aa]]},
$io:1,
$ao:function(){return[[P.a8,P.aa]]}}
W.cY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaE(a))+" x "+H.e(this.gaA(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia8&&a.left===u.gbn(b)&&a.top===u.gbr(b)&&this.gaE(a)===u.gaE(b)&&this.gaA(a)===u.gaA(b)},
gJ:function(a){return W.lL(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaE(a)),C.d.gJ(this.gaA(a)))},
gd9:function(a){return a.bottom},
gaA:function(a){return a.height},
gbn:function(a){return a.left},
gbq:function(a){return a.right},
gbr:function(a){return a.top},
gaE:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.aa]}}
W.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iC:1,
$aC:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fe.prototype={
gl:function(a){return a.length}}
W.j3.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.i7(this)
return new J.a4(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
W.P.prototype={
ghc:function(a){return new W.j6(a)},
gbY:function(a){return new W.j3(a,a.children)},
gda:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.O()
if(s<0)s=-s*0
if(typeof r!=="number")return r.O()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.ld
if(u==null){u=H.b([],[W.aR])
t=new W.df(u)
u.push(W.lK(null))
u.push(W.lM())
$.ld=t
d=t}else d=u
u=$.lc
if(u==null){u=new W.eu(d)
$.lc=u
c=u}else{u.a=d
c=u}}if($.aN==null){u=document
t=u.implementation.createHTMLDocument("")
$.aN=t
$.kq=t.createRange()
s=$.aN.createElement("base")
s.href=u.baseURI
$.aN.head.appendChild(s)}u=$.aN
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aN
if(!!this.$ibo)r=u.body
else{r=u.createElement(a.tagName)
$.aN.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.S(C.T,a.tagName)){$.kq.selectNodeContents(r)
q=$.kq.createContextualFragment(b)}else{r.innerHTML=b
q=$.aN.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aN.body
if(r==null?u!=null:r!==u)J.l4(r)
c.cr(q)
document.adoptNode(q)
return q},
hk:function(a,b,c){return this.ae(a,b,c,null)},
e4:function(a,b){a.textContent=null
a.appendChild(this.ae(a,b,null,null))},
$iP:1,
gdV:function(a){return a.tagName}}
W.fi.prototype={
$1:function(a){return!!J.S(a).$iP}}
W.i.prototype={$ii:1}
W.f.prototype={
h3:function(a,b,c,d){if(c!=null)this.ex(a,b,c,!1)},
ex:function(a,b,c,d){return a.addEventListener(b,H.bL(c,1),!1)}}
W.am.prototype={$iam:1}
W.bX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.am]},
$iC:1,
$aC:function(){return[W.am]},
$ax:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]},
$io:1,
$ao:function(){return[W.am]},
$ibX:1}
W.fo.prototype={
gl:function(a){return a.length}}
W.fs.prototype={
gl:function(a){return a.length}}
W.at.prototype={$iat:1}
W.fy.prototype={
gl:function(a){return a.length}}
W.bZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.F]},
$iC:1,
$aC:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.c_.prototype={$ic_:1}
W.bv.prototype={$ibv:1}
W.fS.prototype={
i:function(a){return String(a)}}
W.hf.prototype={
gl:function(a){return a.length}}
W.c5.prototype={$ic5:1}
W.hg.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hh(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hi.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hj(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hj.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.hk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iC:1,
$aC:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.ay.prototype={$iay:1}
W.a2.prototype={
gaF:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lt("No elements"))
if(t>1)throw H.c(P.lt("More than one element"))
return u.firstChild},
ad:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.d0(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.F]},
$ax:function(){return[W.F]},
$aj:function(){return[W.F]},
$ao:function(){return[W.F]}}
W.F.prototype={
hZ:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i2:function(a,b){var u,t
try{u=a.parentNode
J.my(u,b,a)}catch(t){H.af(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e8(a):u},
fL:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.de.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.F]},
$iC:1,
$aC:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.az.prototype={$iaz:1,
gl:function(a){return a.length}}
W.hA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iC:1,
$aC:function(){return[W.az]},
$ax:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.hK.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.hL(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
W.hL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hN.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.hY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iC:1,
$aC:function(){return[W.aB]},
$ax:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.aC.prototype={$iaC:1}
W.hZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iC:1,
$aC:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.aD.prototype={$iaD:1,
gl:function(a){return a.length}}
W.i2.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new W.i3(u))
return u},
gl:function(a){return a.length},
$aa0:function(){return[P.h,P.h]},
$iQ:1,
$aQ:function(){return[P.h,P.h]}}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.dt.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=W.mP("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).ad(0,new W.a2(u))
return t}}
W.i6.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaF(u)
s.toString
u=new W.a2(s)
r=u.gaF(u)
t.toString
r.toString
new W.a2(t).ad(0,new W.a2(r))
return t}}
W.i7.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gaF(u)
t.toString
s.toString
new W.a2(t).ad(0,new W.a2(s))
return t}}
W.cg.prototype={$icg:1}
W.aE.prototype={$iaE:1}
W.ao.prototype={$iao:1}
W.ia.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iC:1,
$aC:function(){return[W.ao]},
$ax:function(){return[W.ao]},
$ij:1,
$aj:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]}}
W.ib.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iC:1,
$aC:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.ie.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.bA.prototype={$ibA:1}
W.ij.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iC:1,
$aC:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.ik.prototype={
gl:function(a){return a.length}}
W.bd.prototype={}
W.iH.prototype={
i:function(a){return String(a)}}
W.iW.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
ghn:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.y("deltaY is not supported"))},
ghm:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.y("deltaX is not supported"))},
$ibh:1}
W.cq.prototype={
fM:function(a,b){return a.requestAnimationFrame(H.bL(b,1))},
eJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iC:1,
$aC:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$io:1,
$ao:function(){return[W.H]}}
W.dN.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia8&&a.left===u.gbn(b)&&a.top===u.gbr(b)&&a.width===u.gaE(b)&&a.height===u.gaA(b)},
gJ:function(a){return W.lL(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaA:function(a){return a.height},
gaE:function(a){return a.width}}
W.j9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.at]},
$iC:1,
$aC:function(){return[W.at]},
$ax:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]},
$io:1,
$ao:function(){return[W.at]}}
W.e4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.F]},
$iC:1,
$aC:function(){return[W.F]},
$ax:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.jn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iC:1,
$aC:function(){return[W.aD]},
$ax:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.js.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iC:1,
$aC:function(){return[W.an]},
$ax:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]},
$io:1,
$ao:function(){return[W.an]}}
W.j2.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga_(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga_:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa0:function(){return[P.h,P.h]},
$aQ:function(){return[P.h,P.h]}}
W.j6.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga_(this).length}}
W.j7.prototype={}
W.j8.prototype={
$1:function(a){return this.a.$1(a)}}
W.cr.prototype={
ei:function(a){var u
if($.cs.ghD($.cs)){for(u=0;u<262;++u)$.cs.m(0,C.S[u],W.oM())
for(u=0;u<12;++u)$.cs.m(0,C.p[u],W.oN())}},
aM:function(a){return $.mu().S(0,W.bV(a))},
ar:function(a,b,c){var u=$.cs.h(0,H.e(W.bV(a))+"::"+b)
if(u==null)u=$.cs.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaR:1}
W.L.prototype={
gT:function(a){return new W.d0(a,this.gl(a))}}
W.df.prototype={
aM:function(a){return C.b.d6(this.a,new W.hs(a))},
ar:function(a,b,c){return C.b.d6(this.a,new W.hr(a,b,c))},
$iaR:1}
W.hs.prototype={
$1:function(a){return a.aM(this.a)}}
W.hr.prototype={
$1:function(a){return a.ar(this.a,this.b,this.c)}}
W.ec.prototype={
ep:function(a,b,c,d){var u,t,s
this.a.ad(0,c)
u=b.bu(0,new W.jk())
t=b.bu(0,new W.jl())
this.b.ad(0,u)
s=this.c
s.ad(0,C.w)
s.ad(0,t)},
aM:function(a){return this.a.S(0,W.bV(a))},
ar:function(a,b,c){var u=this,t=W.bV(a),s=u.c
if(s.S(0,H.e(t)+"::"+b))return u.d.h7(c)
else if(s.S(0,"*::"+b))return u.d.h7(c)
else{s=u.b
if(s.S(0,H.e(t)+"::"+b))return!0
else if(s.S(0,"*::"+b))return!0
else if(s.S(0,H.e(t)+"::*"))return!0
else if(s.S(0,"*::*"))return!0}return!1},
$iaR:1}
W.jk.prototype={
$1:function(a){return!C.b.S(C.p,a)}}
W.jl.prototype={
$1:function(a){return C.b.S(C.p,a)}}
W.jv.prototype={
ar:function(a,b,c){if(this.eb(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.S(0,b)
return!1}}
W.jw.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jt.prototype={
aM:function(a){var u=J.S(a)
if(!!u.$icd)return!1
u=!!u.$ik
if(u&&W.bV(a)==="foreignObject")return!1
if(u)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.a.a1(b,"on"))return!1
return this.aM(a)},
$iaR:1}
W.d0.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bQ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aR.prototype={}
W.ji.prototype={}
W.eu.prototype={
cr:function(a){new W.jG(this).$2(a,null)},
aW:function(a,b){if(b==null)J.l4(a)
else b.removeChild(a)},
fQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mC(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.af(r)}t="element unprintable"
try{t=J.a3(a)}catch(r){H.af(r)}try{s=W.bV(a)
this.fP(a,b,p,t,s,o,n)}catch(r){if(H.af(r) instanceof P.ak)throw r
else{this.aW(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aW(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aM(a)){p.aW(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ar(a,"is",g)){p.aW(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga_(f)
t=H.b(u.slice(0),[H.aJ(u,0)])
for(s=f.ga_(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ar(a,J.mF(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$icg)p.cr(a.content)}}
W.jG.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aW(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.af(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dM.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
P.jo.prototype={
ca:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bt:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$iab)return new Date(a.a)
if(!!u.$inl)throw H.c(P.iy("structured clone of RegExp"))
if(!!u.$iam)return a
if(!!u.$ibn)return a
if(!!u.$ibX)return a
if(!!u.$ic_)return a
if(!!u.$ic7||!!u.$ib9||!!u.$ic5)return a
if(!!u.$iQ){t=p.ca(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jq(o,p))
return o.a}if(!!u.$io){t=p.ca(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hj(a,t)}if(!!u.$imX){t=p.ca(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hy(a,new P.jr(o,p))
return o.b}throw H.c(P.iy("structured clone of other type"))},
hj:function(a,b){var u,t=J.bj(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.t(s)
u=0
for(;u<s;++u){q=this.bt(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jq.prototype={
$2:function(a,b){this.a.a[a]=this.b.bt(b)},
$S:3}
P.jr.prototype={
$2:function(a,b){this.a.b[a]=this.b.bt(b)},
$S:3}
P.jR.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jp.prototype={
hy:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fp.prototype={
gbf:function(){var u=this.b,t=H.kT(u,"x",0)
return new H.c3(new H.cp(u,new P.fq(),[t]),new P.fr(),[t,W.P])},
m:function(a,b,c){var u=this.gbf()
J.mD(u.b.$1(J.eI(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ag(this.gbf().a)},
h:function(a,b){var u=this.gbf()
return u.b.$1(J.eI(u.a,b))},
gT:function(a){var u=P.kA(this.gbf(),!1,W.P)
return new J.a4(u,u.length)},
$aq:function(){return[W.P]},
$ax:function(){return[W.P]},
$aj:function(){return[W.P]},
$ao:function(){return[W.P]}}
P.fq.prototype={
$1:function(a){return!!J.S(a).$iP}}
P.fr.prototype={
$1:function(a){return H.r(a,"$iP")}}
P.je.prototype={
gbq:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
gd9:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia8){t=q.a
if(t==u.gbn(b)){s=q.b
if(s==u.gbr(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gbq(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gd9(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cM(t),r=u.b,q=J.cM(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.t(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.t(t)
t=C.c.gJ(r+t)
return P.nL(P.jb(P.jb(P.jb(P.jb(0,s),q),p),t))}}
P.a8.prototype={
gbn:function(a){return this.a},
gbr:function(a){return this.b},
gaE:function(a){return this.c},
gaA:function(a){return this.d}}
P.aP.prototype={$iaP:1}
P.fL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aP]},
$ax:function(){return[P.aP]},
$ij:1,
$aj:function(){return[P.aP]},
$io:1,
$ao:function(){return[P.aP]}}
P.aS.prototype={$iaS:1}
P.hv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aS]},
$ax:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$io:1,
$ao:function(){return[P.aS]}}
P.hC.prototype={
gl:function(a){return a.length}}
P.cd.prototype={$icd:1}
P.i5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gbY:function(a){return new P.fp(a,new W.a2(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aR])
p.push(W.lK(null))
p.push(W.lM())
p.push(new W.jt())
c=new W.eu(new W.df(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hk(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a2(s)
q=p.gaF(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aU.prototype={$iaU:1}
P.il.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$io:1,
$ao:function(){return[P.aU]}}
P.dX.prototype={}
P.dY.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.bB.prototype={$iq:1,
$aq:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eO.prototype={
gl:function(a){return a.length}}
P.eP.prototype={
h:function(a,b){return P.aV(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aV(u.value[1]))}},
ga_:function(a){var u=H.b([],[P.h])
this.G(a,new P.eQ(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.y("Not supported"))},
$aa0:function(){return[P.h,null]},
$iQ:1,
$aQ:function(){return[P.h,null]}}
P.eQ.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eR.prototype={
gl:function(a){return a.length}}
P.bm.prototype={}
P.hw.prototype={
gl:function(a){return a.length}}
P.dL.prototype={}
P.i0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.M(b,a,null,null,null))
return P.aV(a.item(b))},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.Q,,,]]},
$ax:function(){return[[P.Q,,,]]},
$ij:1,
$aj:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.ef.prototype={}
P.eg.prototype={}
K.aL.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"}}
K.d1.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b7.prototype={}
K.a6.prototype={
aB:function(a,b){return!this.e7(0,b)},
i:function(a){return"!["+this.cv(0)+"]"}}
K.hF.prototype={
aB:function(a,b){if(typeof b!=="number")return H.t(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.by(this.a),t=H.by(this.b)
return u+".."+t}}
K.hO.prototype={
ef:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.v("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.aI])
for(s=new H.b6(a,a.gl(a));s.u();)t.m(0,s.d,!0)
r=P.kA(t.ga_(t),!0,u)
C.b.e5(r)
this.a=r},
aB:function(a,b){return C.b.S(this.a,b)},
i:function(a){return P.cf(this.a,0,null)}}
L.dr.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dA(this.a.k(0,b))
r.a=H.b([],[K.b7])
r.c=!1
this.c.push(r)
return r},
ht:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
d_:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.S(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga_(n),n=n.gT(n);n.u();){t=n.gC(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.S(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dx.prototype={
i:function(a){var u=H.kY(this.b,"\n","\\n"),t=H.kY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dy.prototype={
aD:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.ig.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dr(this,b)
u.c=H.b([],[L.dA])
this.a.m(0,b,u)}return u},
R:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dy(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cp:function(a){return this.ia(a)},
ia:function(a){var u=this
return P.o7(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cp(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cm(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.ht(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cf(d,0,null)
throw H.c(P.v("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.y("removeRange"))
P.aT(0,m,d.length)
d.splice(0,m-0)
C.b.ad(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.S(0,p.a)?7:8
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
if(g.d!=null){j=P.cf(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dx(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.S(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nJ()
case 1:return P.nK(q)}}},L.dx)},
i:function(a){var u,t=new P.R(""),s=this.d
if(s!=null)t.a=s.d_()+"\n"
for(s=this.a,s=s.gib(s),s=s.gT(s);s.u();){u=s.gC(s)
if(u!=this.d)t.a+=u.d_()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dA.prototype={
i:function(a){return this.b.b+": "+this.cv(0)}}
O.b0.prototype={
bx:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cs:function(a,b,c){this.b=b
this.c=a},
bc:function(a,b){return this.cs(a,null,b)},
ft:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eS:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a4(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.kT(s,"b0",0)]
if(s.ft(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.eS(t,H.b([b],r))}},
$ij:1}
O.c4.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.K():u},
aG:function(){var u=this.b
if(u!=null)u.F(null)},
ga3:function(a){var u=this.a
if(u.length>0)return C.b.gat(u)
else return V.b8()},
dQ:function(a){var u=this.a
if(a==null)u.push(V.b8())
else u.push(a)
this.aG()},
cj:function(){var u=this.a
if(u.length>0){u.pop()
this.aG()}}}
E.eV.prototype={}
E.aO.prototype={
cF:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a4(u,u.length);u.u();){t=u.d
if(t.f==null)t.cF()}},
sab:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().M(0,s.gdI())
u=s.c
if(u!=null)u.gA().n(0,s.gdI())
t=new D.z("shape",r,s.c)
t.b=!0
s.aj(t)}},
sb8:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gA().M(0,s.gdK())
u=s.f
s.f=a
if(a!=null)a.gA().n(0,s.gdK())
s.cF()
t=new D.z("technique",u,s.f)
t.b=!0
s.aj(t)}},
saC:function(a){var u,t,s=this
if(!J.E(s.r,a)){u=s.r
if(u!=null)u.gA().M(0,s.gdG())
if(a!=null)a.gA().n(0,s.gdG())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.aj(t)}},
am:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.an(0,b,s):null
if(!J.E(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.aj(t)}r=s.f
if(r!=null)r.am(0,b)
for(r=s.y.a,r=new J.a4(r,r.length);r.u();)r.d.am(0,b)},
aQ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga3(s))
else s.a.push(r.p(0,s.ga3(s)))
s.aG()
a.dR(t.f)
s=a.dy
u=(s&&C.b).gat(s)
if(u!=null&&t.d!=null)u.i1(a,t)
for(s=t.y.a,s=new J.a4(s,s.length);s.u();)s.d.aQ(a)
a.dP()
a.dx.cj()},
aj:function(a){var u=this.z
if(u!=null)u.F(a)},
Z:function(){return this.aj(null)},
dJ:function(a){this.e=null
this.aj(a)},
hO:function(){return this.dJ(null)},
dL:function(a){this.aj(a)},
hP:function(){return this.dL(null)},
dH:function(a){this.aj(a)},
hN:function(){return this.dH(null)},
dF:function(a){this.aj(a)},
hK:function(){return this.dF(null)},
hJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdE(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.Z()},
hM:function(a,b){var u,t
for(u=b.gT(b),t=this.gdE();u.u();)u.gC(u).gA().M(0,t)
this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hG.prototype={
ee:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ab(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c4()
t=[V.av]
u.a=H.b([],t)
u.gA().n(0,new E.hH(s))
s.cy=u
u=new O.c4()
u.a=H.b([],t)
u.gA().n(0,new E.hI(s))
s.db=u
u=new O.c4()
u.a=H.b([],t)
u.gA().n(0,new E.hJ(s))
s.dx=u
u=H.b([],[O.du])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dm])},
ghY:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga3(s)
u=t.db
u=t.z=s.p(0,u.ga3(u))
s=u}return s},
dR:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gat(u):a)},
dP:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hH.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hI.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hJ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dv.prototype={
cC:function(a){this.dT()},
cB:function(){return this.cC(null)},
ghz:function(){var u,t=this,s=Date.now(),r=C.c.a2(P.lb(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ab(s,!1)
return u/r},
cU:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.t(r)
u=C.d.dq(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.d.dq(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lw(C.n,s.gi3())}},
dT:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eJ(u)
C.D.fM(u,W.lX(new E.id(this),P.aa))}},
i0:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cU()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ab(r,!1)
s.y=P.lb(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aG()
r=s.db
C.b.sl(r.a,0)
r.aG()
r=s.dx
C.b.sl(r.a,0)
r.aG()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aQ(p.e)}s=p.Q
if(s!=null)s.F(null)}catch(q){u=H.af(q)
t=H.kU(q)
P.kX("Error: "+H.e(u))
P.kX("Stack: "+H.e(t))
throw H.c(u)}}}
E.id.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i0()}}}
Z.dJ.prototype={}
Z.cP.prototype={
bh:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.af(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.iX.prototype={}
Z.cQ.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bh:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bh(a)},
dY:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bs.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cc(this.c))+"'")+"]"}}
Z.bg.prototype={
gcu:function(a){var u=this.a,t=(u&$.aZ().a)!==0?3:0
if((u&$.aY().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=4
if((u&$.bP().a)!==0)++t
return(u&$.aW().a)!==0?t+4:t},
h8:function(a){var u,t=$.aZ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cK()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aW()
if((s&t.a)!==0)if(u===a)return t
return $.ms()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aZ().a)!==0)u.push("Pos")
if((t&$.aY().a)!==0)u.push("Norm")
if((t&$.aX().a)!==0)u.push("Binm")
if((t&$.bk().a)!==0)u.push("Txt2D")
if((t&$.bl().a)!==0)u.push("TxtCube")
if((t&$.cJ().a)!==0)u.push("Clr3")
if((t&$.cK().a)!==0)u.push("Clr4")
if((t&$.bP().a)!==0)u.push("Weight")
if((t&$.aW().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.eY.prototype={}
D.br.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.S(s,b)
if(s===!0){s=t.a
u=(s&&C.b).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.S(s,b)
if(s===!0){s=t.b
u=(s&&C.b).M(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.G(P.kA(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fl(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.G(u,new D.fm(q))}return!0},
ah:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.fl.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fm.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bt.prototype={}
D.bu.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cR.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d5.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fK.prototype={
hU:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hQ:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.d8.prototype={}
X.fT.prototype={
aU:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaN()
r=new X.aQ(a,V.bb(),q.x,t,s)
r.b=!0
q.z=new P.ab(p,!1)
q.x=s
return r},
ci:function(a,b){this.r=a.a
return!1},
b7:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.e3()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aU(a,b))
return!0},
hV:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaN()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.c6(new V.J(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fh:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.d8(c,r.a.gaN(),b)
s.b=!0
t.F(s)
r.y=new P.ab(u,!1)
r.x=V.bb()}}
X.ai.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ai))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aQ.prototype={}
X.hl.prototype={
bD:function(a,b,c){var u=this,t=new P.ab(Date.now(),!1),s=u.a.gaN(),r=new X.aQ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ci:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bD(a,b,!0))
return!0},
b7:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.e3()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bD(a,b,!0))
return!0},
b6:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bD(a,b,!1))
return!0},
hW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaN()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.c6(new V.J(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdd:function(){var u=this.b
return u==null?this.b=D.K():u},
gbs:function(){var u=this.c
return u==null?this.c=D.K():u},
gdC:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.c6.prototype={}
X.hB.prototype={}
X.dz.prototype={}
X.ii.prototype={
aU:function(a,b){var u=this,t=new P.ab(Date.now(),!1),s=a.length>0?a[0]:V.bb(),r=u.a.gaN(),q=new X.dz(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hT:function(a){var u=this.b
if(u==null)return!1
u.F(this.aU(a,!0))
return!0},
hR:function(a){var u=this.c
if(u==null)return!1
u.F(this.aU(a,!0))
return!0},
hS:function(a){var u=this.d
if(u==null)return!1
u.F(this.aU(a,!1))
return!0}}
X.dE.prototype={
gaN:function(){var u=this.a,t=C.m.gda(u).c
t.toString
u=C.m.gda(u).d
u.toString
return V.lr(0,0,t,u)},
cK:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d5(u,new X.ai(t,a.altKey,a.shiftKey))},
aK:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
bR:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.a7(s-q,r-u)},
aV:function(a){return new V.J(a.movementX,a.movementY)},
bN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ak(r.pageX)
C.d.ak(r.pageY)
p=o.left
C.d.ak(r.pageX)
n.push(new V.a7(q-p,C.d.ak(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.ai(t,a.altKey,a.shiftKey))},
bE:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fb:function(a){this.f=!0},
f_:function(a){this.f=!1},
f5:function(a){if(this.f&&this.bE(a))a.preventDefault()},
ff:function(a){var u
if(!this.f)return
u=this.cK(a)
this.b.hU(u)},
fd:function(a){var u
if(!this.f)return
u=this.cK(a)
this.b.hQ(u)},
fj:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aK(a)
if(r.x){u=r.av(a)
t=r.aV(a)
if(r.d.ci(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.av(a)
s=r.ax(a)
if(r.c.ci(u,s))a.preventDefault()},
fn:function(a){var u,t,s,r=this
r.aK(a)
u=r.av(a)
if(r.x){t=r.aV(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b7(u,s))a.preventDefault()},
f9:function(a){var u,t,s,r=this
if(!r.bE(a)){r.aK(a)
u=r.av(a)
if(r.x){t=r.aV(a)
if(r.d.b7(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b7(u,s))a.preventDefault()}},
fl:function(a){var u,t,s,r=this
r.aK(a)
u=r.av(a)
if(r.x){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b6(u,s))a.preventDefault()},
f7:function(a){var u,t,s,r=this
if(!r.bE(a)){r.aK(a)
u=r.av(a)
if(r.x){t=r.aV(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(r.r)return
s=r.ax(a)
if(r.c.b6(u,s))a.preventDefault()}},
fp:function(a){var u,t,s=this
s.aK(a)
u=new V.J((a&&C.C).ghm(a),C.C.ghn(a)).v(0,180)
if(s.x){if(s.d.hV(u))a.preventDefault()
return}if(s.r)return
t=s.ax(a)
if(s.c.hW(u,t))a.preventDefault()},
fs:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ax(s.y)
s.d.fh(u,t,r)}},
fH:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bR(a)
u=t.bN(a)
if(t.e.hT(u))a.preventDefault()},
fD:function(a){var u
this.bR(a)
u=this.bN(a)
if(this.e.hR(u))a.preventDefault()},
fF:function(a){var u
this.bR(a)
u=this.bN(a)
if(this.e.hS(u))a.preventDefault()}}
D.eS.prototype={$ia5:1}
D.fb.prototype={$ia5:1}
D.a5.prototype={}
D.d6.prototype={
a9:function(a){var u=this.y
if(u!=null)u.F(a)},
cS:function(a){var u=this.z
if(u!=null)u.F(a)},
fg:function(){return this.cS(null)},
fv:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.ej(s))return!1}return!0},
eU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcR(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bw)this.r.push(q)
p=q.Q
if(p==null){p=new D.br()
p.d=0
q.Q=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bt()
u.b=!0
this.a9(u)},
fB:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gcR();u.u();){s=u.gC(u)
C.b.M(this.e,s)
s.gA().M(0,t)}u=new D.bu()
u.b=!0
this.a9(u)},
ej:function(a){var u=C.b.S(this.r,a)
return u},
$aj:function(){return[D.a5]},
$ab0:function(){return[D.a5]}}
D.bw.prototype={
a9:function(a){var u=this.Q
if(u!=null)u.F(a)},
el:function(){return this.a9(null)},
ga7:function(){return 4},
$ia5:1}
D.i_.prototype={$ia5:1}
V.W.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.ar.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ar))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fk.prototype={}
V.hd.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.hd))return!1
u=b.a
t=$.A().a
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
i:function(a){var u,t,s,r,q=this,p=[P.O],o=V.bN(H.b([q.a,q.d,q.r],p),3,0),n=V.bN(H.b([q.b,q.e,q.x],p),3,0),m=V.bN(H.b([q.c,q.f,q.y],p),3,0)
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
V.av.prototype={
al:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.O])
return t},
hC:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.b8()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
ba:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
u=b.a
t=$.A().a
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
H:function(a){var u,t,s,r,q,p=this,o=[P.O],n=V.bN(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bN(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bN(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bN(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.H("")}}
V.a7.prototype={
K:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.U.prototype={
B:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.bc.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bc))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.dk.prototype={
gaa:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.J.prototype={
b2:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.J(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.lD
return u==null?$.lD=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.J(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.B.prototype={
b2:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.B(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
az:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
U:function(a){return new V.B(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.cn()
return new V.B(this.a/b,this.b/b,this.c/b)},
dB:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.co.prototype={
b2:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.co))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
U.f_.prototype={
by:function(a){var u=V.ki(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.K():u},
I:function(a){var u=this.y
if(u!=null)u.F(a)},
scq:function(a,b){},
sce:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.by(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.I(s)}},
scg:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.by(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.I(s)}},
sY:function(a,b){var u,t=this
b=t.by(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.I(u)}},
scf:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.I(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.I(t)}},
sc1:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.I(u)}},
am:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.cT.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.K():u},
an:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.E(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.bY.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.K():u},
I:function(a){var u=this.e
if(u!=null)u.F(a)},
a6:function(){return this.I(null)},
en:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaJ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gA()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bt()
u.b=!0
this.I(u)},
fz:function(a,b){var u,t
for(u=b.gT(b),t=this.gaJ();u.u();)u.gC(u).gA().M(0,t)
u=new D.bu()
u.b=!0
this.I(u)},
an:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.O()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a4(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.an(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.b8():u
r=s.e
if(r!=null)r.ah(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.E(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.ac]},
$ab0:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.dl.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.K():u},
I:function(a){var u=this.y
if(u!=null)u.F(a)},
se0:function(a){var u
a=V.ki(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.z("yaw",u,a)
u.b=!0
this.I(u)}},
sdO:function(a,b){var u
b=V.ki(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.A().a)){this.b=b
u=new D.z("pitch",u,b)
u.b=!0
this.I(u)}},
sdU:function(a){var u
a=V.ki(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.z("roll",u,a)
u.b=!0
this.I(u)}},
an:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.se0(u.a+u.d*b.y)
u.sdO(0,u.b+u.e*b.y)
u.sdU(u.c+u.f*b.y)
u.x=V.lj(u.c).p(0,V.li(u.b)).p(0,V.lh(u.a))
t=u.y
if(t!=null)t.ah(0)}return u.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dl))return!1
u=r.a
t=b.a
s=$.A().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+"], ["+V.D(u.d,3,0)+", "+V.D(u.e,3,0)+", "+V.D(u.f,3,0)+"]"}}
U.dF.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.K():u},
I:function(a){var u=this.cy
if(u!=null)u.F(a)},
a6:function(){return this.I(null)},
aY:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdd().n(0,u.gbF())
u.a.c.gdC().n(0,u.gbH())
u.a.c.gbs().n(0,u.gbJ())
return!0},
bG:function(a){var u=this
if(!J.E(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bI:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$iaQ")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.J(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.J(t.a,t.b).p(0,2).v(0,u.gaa())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.J(s.a,s.b).p(0,2).v(0,u.gaa())
s=n.b
q=r.a
if(typeof q!=="number")return q.U()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
n.b.sV(0)
t=t.K(0,a.z)
n.Q=new V.J(t.a,t.b).p(0,2).v(0,u.gaa())}n.a6()},
bK:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sV(t*10*s)
r.a6()}},
an:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.O()
if(s<r){t.ch=r
u=b.y
t.b.am(0,u)
t.cx=V.lj(t.b.d)}return t.cx},
$iac:1}
U.dG.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.K():u},
I:function(a){var u=this.fx
if(u!=null)u.F(a)},
a6:function(){return this.I(null)},
aY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdd().n(0,s.gbF())
s.a.c.gdC().n(0,s.gbH())
s.a.c.gbs().n(0,s.gbJ())
u=s.a.d
t=u.f
u=t==null?u.f=D.K():t
u.n(0,s.geL())
u=s.a.d
t=u.d
u=t==null?u.d=D.K():t
u.n(0,s.geN())
u=s.a.e
t=u.b
u=t==null?u.b=D.K():t
u.n(0,s.gh0())
u=s.a.e
t=u.d
u=t==null?u.d=D.K():t
u.n(0,s.gfZ())
u=s.a.e
t=u.c
u=t==null?u.c=D.K():t
u.n(0,s.gfX())
return!0},
aq:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.J(u,t)},
bG:function(a){var u=this
H.r(a,"$iaQ")
if(!J.E(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bI:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$iaQ")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.J(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.aq(new V.J(t.a,t.b).p(0,2).v(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aq(new V.J(s.a,s.b).p(0,2).v(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.K(0,a.z)
n.dx=n.aq(new V.J(t.a,t.b).p(0,2).v(0,u.gaa()))}n.a6()},
bK:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sV(-t*10*u)
r.a6()}},
eM:function(a){var u=this
if(H.r(a,"$id8").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eO:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$iaQ")
if(!J.E(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aq(new V.J(s.a,s.b).p(0,2).v(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.K(0,a.z)
n.dx=n.aq(new V.J(t.a,t.b).p(0,2).v(0,u.gaa()))
n.a6()},
h1:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
h_:function(a){var u,t,s,r,q,p,o,n=this
H.r(a,"$idz")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.J(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.aq(new V.J(t.a,t.b).p(0,2).v(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aq(new V.J(s.a,s.b).p(0,2).v(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sY(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.K(0,a.z)
n.dx=n.aq(new V.J(t.a,t.b).p(0,2).v(0,u.gaa()))}n.a6()},
fY:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sV(-t*10*u)
r.a6()}},
an:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.O()
if(s<r){t.dy=r
u=b.y
t.c.am(0,u)
t.b.am(0,u)
t.fr=V.lh(t.b.d).p(0,V.li(t.c.d))}return t.fr},
$iac:1}
U.dH.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.K():u},
I:function(a){var u=this.r
if(u!=null)u.F(a)},
aY:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.K():t
t=r.geQ()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.K():s).n(0,t)
return!0},
eR:function(a){var u,t,s,r,q=this
if(!J.E(q.b,q.a.b.c))return
H.r(a,"$ic6")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.I(u)}},
an:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.kC(u,u,u,1)}return t.f},
$iac:1}
M.cZ.prototype={
au:function(a){var u=this.y
if(u!=null)u.F(a)},
eo:function(){return this.au(null)},
f1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gap(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.br()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bt()
u.b=!0
this.au(u)},
f3:function(a,b){var u,t
for(u=b.gT(b),t=this.gap();u.u();)u.gC(u).gA().M(0,t)
u=new D.bu()
u.b=!0
this.au(u)},
sb8:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().M(0,t.gap())
u=t.d
t.d=a
if(a!=null)a.gA().n(0,t.gap())
s=new D.z("technique",u,t.d)
s.b=!0
t.au(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.K():u},
aQ:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.dR(a1.d)
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
if(typeof s!=="number")return H.t(s)
o=C.d.ak(p*s)
p=q.b
if(typeof r!=="number")return H.t(r)
n=C.d.ak(p*r)
p=C.d.ak(q.c*s)
a2.c=p
q=C.d.ak(q.d*r)
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
i=V.aw(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.dQ(i)
t=$.lm
if(t==null){t=V.n8()
q=$.lG
if(q==null)q=$.lG=new V.B(0,1,0)
p=$.lE
if(p==null)p=$.lE=new V.B(0,0,-1)
h=p.v(0,Math.sqrt(p.D(p)))
q=q.az(h)
g=q.v(0,Math.sqrt(q.D(q)))
f=h.az(g)
e=new V.B(t.a,t.b,t.c)
d=g.U(0).D(e)
c=f.U(0).D(e)
b=h.U(0).D(e)
t=V.aw(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.lm=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.an(0,a2,u)
if(a0!=null)a=a0.p(0,a)}a2.db.dQ(a)
u=a1.d
if(u!=null)u.am(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.u();)u.d.am(0,a2)
for(u=a1.e.a,u=new J.a4(u,u.length);u.u();)u.d.aQ(a2)
a1.b.toString
a2.cy.cj()
a2.db.cj()
a1.c.toString
a2.dP()}}
A.cN.prototype={}
A.eN.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
ho:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gao:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a_))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fZ.prototype={
ed:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.R("")
t=c3.fr
if(t){u.a=c2
s=c2}else s=""
r=c3.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.om(c3,u)
A.oo(c3,u)
A.on(c3,u)
A.oq(c3,u)
A.or(c3,u)
A.op(c3,u)
A.os(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.ry
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
u.a=s}if(c3.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.ol(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cL(n,35633)
b8.f=b8.cL(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.v("Failed to link shader: "+H.e(l)))}b8.fT()
b8.fV()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.X(0,"invViewMat"),"$iad")
if(t)b8.dy=H.r(b8.y.X(0,"objMat"),"$iad")
if(r)b8.fr=H.r(b8.y.X(0,"viewObjMat"),"$iad")
b8.fy=H.r(b8.y.X(0,"projViewObjMat"),"$iad")
if(c3.go)b8.fx=H.r(b8.y.X(0,"viewMat"),"$iad")
if(c3.x1)b8.k1=H.r(b8.y.X(0,"txt2DMat"),"$ick")
if(c3.x2)b8.k2=H.r(b8.y.X(0,"txtCubeMat"),"$iad")
if(c3.y1)b8.k3=H.r(b8.y.X(0,"colorMat"),"$iad")
b8.r1=H.b([],[A.ad])
t=c3.bj
if(t>0){b8.k4=b8.y.X(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.v(c0+q+c1))
s.push(H.r(j,"$iad"))}}if(c3.a.a)b8.r2=H.r(b8.y.X(0,"emissionClr"),"$iG")
if(c3.b.a)b8.x1=H.r(b8.y.X(0,"ambientClr"),"$iG")
if(c3.c.a)b8.y2=H.r(b8.y.X(0,"diffuseClr"),"$iG")
if(c3.d.a)b8.bk=H.r(b8.y.X(0,"invDiffuseClr"),"$iG")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.di=H.r(b8.y.X(0,"shininess"),"$iV")
if(t)b8.dh=H.r(b8.y.X(0,"specularClr"),"$iG")}if(c3.db){b8.dj=H.r(b8.y.X(0,"envSampler"),"$ibD")
if(c3.r.a)b8.dk=H.r(b8.y.X(0,"reflectClr"),"$iG")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.dl=H.r(b8.y.X(0,"refraction"),"$iV")
if(t)b8.dm=H.r(b8.y.X(0,"refractClr"),"$iG")}}if(c3.y.a)b8.dn=H.r(b8.y.X(0,"alpha"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.c2=new H.I([r,A.be])
b8.c3=new H.I([r,[P.o,A.ci]])
for(r=[A.ci],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.v(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.v(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.ci(j,d,c,a3,a2,a1))}b8.c3.m(0,g,e)
q=b8.c2
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.c4=new H.I([r,A.be])
b8.c5=new H.I([r,[P.o,A.cj]])
for(r=[A.cj],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a8()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.v(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.v(c0+a4+c1))
H.r(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.v(c0+a4+c1))
H.r(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.v(c0+a4+c1))
H.r(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.v(c0+a4+c1))
H.r(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.r(c,"$ibC")
a8=c}else a8=b9
e.push(new A.cj(a7,a6,a5,j,d,a8))}b8.c5.m(0,g,e)
q=b8.c4
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.c6=new H.I([r,A.be])
b8.c7=new H.I([r,[P.o,A.cl]])
for(r=[A.cl],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.v(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.r(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.r(b,"$ick")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.r(b,"$ibD")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.r(b,"$ibD")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.r(a,"$ich")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.r(b,"$iV")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.r(a,"$iV")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.v(c0+o+c1))
H.r(a0,"$iV")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cl(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.c7.m(0,g,e)
q=b8.c6
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.c8=new H.I([r,A.be])
b8.c9=new H.I([r,[P.o,A.cm]])
for(r=[A.cm],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
H.r(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.v(c0+o+c1))
H.r(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.v(c0+o+c1))
H.r(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.v(c0+o+c1))
H.r(b,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.r(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.v(c0+o+c1))
H.r(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.v(c0+o+c1))
H.r(b2,"$iV")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.v(c0+o+c1))
H.r(b3,"$iV")
b4=b3
b5=b2
a6=a0
a7=a}else{b4=b9
b5=b4
a6=b5
a7=a6}p=(g&2)!==0
if(p){o=b8.y
a4=f+"s["+k+"].shadowAdj"
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.r(a,"$ich")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.v(c0+a4+c1))
H.r(a0,"$iV")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.r(a,"$iV")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.v(c0+a4+c1))
H.r(a0,"$iV")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.v(c0+a4+c1))
H.r(b2,"$iV")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.v(c0+a4+c1))
H.r(a,"$ibC")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.v(c0+o+c1))
H.r(a,"$ibC")
b0=a}else b0=b9
e.push(new A.cm(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.c9.m(0,g,e)
q=b8.c8
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.v(c0+o+c1))
q.m(0,g,j)}}}},
fR:function(a,b){}}
A.cO.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cW.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.di.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dp.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h1.prototype={
i:function(a){return this.b0}}
A.ci.prototype={}
A.cj.prototype={}
A.cl.prototype={}
A.cm.prototype={}
A.dm.prototype={
eg:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cL:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.v("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fT:function(){var u,t,s,r=this,q=H.b([],[A.cN]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cN(p,t.name,s))}r.x=new A.eN(q)},
fV:function(){var u,t,s,r=this,q=H.b([],[A.dB]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hl(t.type,t.size,t.name,s))}r.y=new A.iv(q)},
aI:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.kF(u,this.r,b,a,c)},
eG:function(a,b,c){var u=this.a
if(a===1)return new A.bC(u,b,c)
else return A.kF(u,this.r,b,a,c)},
eH:function(a,b,c){var u=this.a
if(a===1)return new A.bD(u,b,c)
else return A.kF(u,this.r,b,a,c)},
bg:function(a,b){return new P.dS(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hl:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aI(b,c,d)
case 5121:return u.aI(b,c,d)
case 5122:return u.aI(b,c,d)
case 5123:return u.aI(b,c,d)
case 5124:return u.aI(b,c,d)
case 5125:return u.aI(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.ir(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.ch(u.a,c,d)
case 35667:return new A.is(u.a,c,d)
case 35668:return new A.it(u.a,c,d)
case 35669:return new A.iu(u.a,c,d)
case 35674:return new A.iw(u.a,c,d)
case 35675:return new A.ck(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.eG(b,c,d)
case 35680:return u.eH(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dB.prototype={}
A.iv.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
X:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.be.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.is.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.it.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.ch.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ck.prototype={
ai:function(a){var u=new Float32Array(H.cD(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ad.prototype={
ai:function(a){var u=new Float32Array(H.cD(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bC.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bD.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jI.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cd(s.b,b).cd(s.d.cd(s.c,b),c)
a.sY(0,new V.U(r.a,r.b,r.c))
a.sdW(r.v(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sd7(new V.bc(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jS.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.jU.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sY(0,new V.U(s,u,q))
u=new V.B(s,u,q)
a.sdW(u.v(0,Math.sqrt(u.D(u))))
a.sd7(new V.bc(1-c,2+c,-1,-1))}}
F.jV.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jW.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kd.prototype={
$2:function(a,b){return 0}}
F.ke.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=a.f
t=new V.B(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.D(t))).p(0,this.b+s)
a.sY(0,new V.U(s.a,s.b,s.c))}}
F.kg.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}}
F.k3.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.U(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jT.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.l1(n.$1(o),m)
m=J.l1(n.$1(o+3.141592653589793/p.c),m).K(0,l)
m=new V.B(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.D(m)))
n=$.lF
if(n==null){n=new V.B(1,0,0)
$.lF=n
t=n}else t=n
if(!J.E(u,t)){n=$.lH
if(n==null){n=new V.B(0,0,1)
$.lH=n
t=n}else t=n}n=u.az(t)
s=n.v(0,Math.sqrt(n.D(n)))
n=s.az(u)
t=n.v(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.p(0,n*m)
m=s.p(0,q*m)
a.sY(0,l.B(0,new V.U(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b2.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.b.M(u.a.a.d.b,u)
u.a.a.Z()}u.bO()
u.bP()
u.fK()},
bS:function(a){this.a=a
a.d.b.push(this)},
bT:function(a){this.b=a
a.d.c.push(this)},
fS:function(a){this.c=a
a.d.d.push(this)},
bO:function(){var u=this.a
if(u!=null){C.b.M(u.d.b,this)
this.a=null}},
bP:function(){var u=this.b
if(u!=null){C.b.M(u.d.c,this)
this.b=null}},
fK:function(){var u=this.c
if(u!=null){C.b.M(u.d.d,this)
this.c=null}},
gb_:function(){return this.a==null||this.b==null||this.c==null},
eA:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cn()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dB())return
return s.v(0,Math.sqrt(s.D(s)))},
eC:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.D(r)))
r=t.K(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.az(r.v(0,Math.sqrt(r.D(r))))
return r.v(0,Math.sqrt(r.D(r)))},
bX:function(){var u,t=this
if(t.d!=null)return!0
u=t.eA()
if(u==null){u=t.eC()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cn()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dB())return
return s.v(0,Math.sqrt(s.D(s)))},
eB:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.K(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.K(0,g).p(0,p).B(0,g).K(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.D(l)))
l=o.az(q)
l=l.v(0,Math.sqrt(l.D(l))).az(o)
q=l.v(0,Math.sqrt(l.D(l)))}return q},
bV:function(){var u,t=this
if(t.e!=null)return!0
u=t.ez()
if(u==null){u=t.eB()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
ghg:function(a){var u=this
if(J.E(u.a,u.b))return!0
if(J.E(u.b,u.c))return!0
if(J.E(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this
if(s.gb_())return a+"disposed"
u=a+C.a.ag(J.a3(s.a.e),0)+", "+C.a.ag(J.a3(s.b.e),0)+", "+C.a.ag(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.H("")}}
F.fn.prototype={}
F.hX.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c1.prototype={
aZ:function(){var u=this
if(!u.gb_()){C.b.M(u.a.a.c.b,u)
u.a.a.Z()}u.bO()
u.bP()},
bS:function(a){this.a=a
a.c.b.push(this)},
bT:function(a){this.b=a
a.c.c.push(this)},
bO:function(){var u=this.a
if(u!=null){C.b.M(u.c.b,this)
this.a=null}},
bP:function(){var u=this.b
if(u!=null){C.b.M(u.c.c,this)
this.b=null}},
gb_:function(){return this.a==null||this.b==null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){if(this.gb_())return a+"disposed"
return a+C.a.ag(J.a3(this.a.e),0)+", "+C.a.ag(J.a3(this.b.e),0)},
P:function(){return this.H("")}}
F.fM.prototype={}
F.ip.prototype={
b4:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.ca.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ag(J.a3(u.e),0)},
P:function(){return this.H("")}}
F.hP.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.K():u},
b5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.hi())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.ca()
if(n.a==null)H.p(P.v("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.mZ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.bW(l,k,i)}g=h.e
if(g!=null)g.ah(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.ah(0)
return u},
hG:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aJ(o,0)])
for(o=[F.bf];u.length!==0;){t=C.b.ghu(u)
C.b.cm(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b4(0,t,q)){s.push(q)
C.b.cm(u,r)}}if(s.length>1)b.b5(s)}}p.a.w()
p.c.cn()
p.d.cn()
p.b.i_()
p.c.co(new F.ip())
p.d.co(new F.hX())
o=p.e
if(o!=null)o.ah(0)},
bU:function(){this.hG(new F.iQ(),new F.ht())},
cb:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cb()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.d(o,u)
t=o[u]
o=t.r
if(o!=null)t.sdD(new V.B(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.B(s,r,o).v(0,Math.sqrt(s*s+r*r+o*o))
if(!J.E(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}}o=p.e
if(o!=null)o.ah(0)},
he:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aZ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aY().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.cK().a)!==0)++s
if((t&$.bP().a)!==0)++s
if((t&$.aW().a)!==0)++s
r=a4.gcu(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.O])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cP])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.h8(m)
k=l.gcu(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cP(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hF(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cD(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cQ(new Z.dJ(a1,d),o,a4)
c.b=H.b([],[Z.bs])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.bs(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.bs(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.w()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.w()
b.push(t.e)}a=Z.kI(u,34963,b)
c.b.push(new Z.bs(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hQ.prototype={
h4:function(a){var u,t,s,r,q,p=H.b([],[F.b2]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.d(a,r)
r=a[r]
if(s>=q)return H.d(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.bW(u,r,q))}}return p},
h5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b2])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.bW(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bW(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bW(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bW(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b4(0,p,n)){p.aZ()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghg(s)
if(t)s.aZ()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bX())s=!1
return s},
bW:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bV())s=!1
return s},
cb:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.B(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.B(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.F(null)}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
P:function(){return this.H("")}}
F.hR.prototype={
gl:function(a){return this.b.length},
co:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b4(0,p,n)){p.aZ()
break}}}}},
cn:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.E(s.a,s.b)
if(t)s.aZ()}},
i:function(a){return this.P()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
P:function(){return this.H("")}}
F.hS.prototype={
gl:function(a){return this.b.length},
i_:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
P:function(){return this.H("")}}
F.bf.prototype={
c0:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dI(u.cx,r,o,t,s,q,p,a,n)},
hi:function(){return this.c0(null)},
sY:function(a,b){var u
if(!J.E(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sdD:function(a){var u
a=a==null?null:a.v(0,Math.sqrt(a.D(a)))
if(!J.E(this.r,a)){this.r=a
u=this.a
if(u!=null)u.Z()}},
sdW:function(a){var u
if(!J.E(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sd7:function(a){var u
if(!J.E(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
hF:function(a){var u,t,s=this
if(a.q(0,$.aZ())){u=s.f
t=[P.O]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aY())){u=s.r
t=[P.O]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aX())){u=s.x
t=[P.O]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bk())){u=s.y
t=[P.O]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bl())){u=s.z
t=[P.O]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cJ())){u=s.Q
t=[P.O]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cK())){u=s.Q
t=[P.O]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bP()))return H.b([s.ch],[P.O])
else if(a.q(0,$.aW())){u=s.cx
t=[P.O]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.O])},
bX:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cn()
t.d.G(0,new F.iV(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ah(0)}return!0},
bV:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cn()
t.d.G(0,new F.iU(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ah(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ag(J.a3(s.e),0))
u=s.f
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.i(0))
else q.push(r)
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
P:function(){return this.H("")}}
F.iV.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iU.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iL.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
h6:function(a,b,c,d,e,f){var u=F.dI(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bX()
return!0},
bW:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bV()
return!0},
hf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.E(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.P()},
H:function(a){var u,t,s,r
this.w()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
P:function(){return this.H("")}}
F.iM.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.iN(u,b))
C.b.G(u.d,new F.iO(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iN.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)}}
F.iO.prototype={
$1:function(a){var u=this.a
if(!J.E(a.a,u)&&!J.E(a.b,u))this.b.$1(a)}}
F.iP.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.iR.prototype={}
F.iQ.prototype={
b4:function(a,b,c){return J.E(b.f,c.f)}}
F.iS.prototype={}
F.ht.prototype={
b5:function(a){var u,t,s,r=V.cn()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.B(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.v(0,Math.sqrt(r.D(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)a[t].sdD(r)
return}}
F.iT.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.d9.prototype={
gA:function(){var u=this.fr
return u==null?this.fr=D.K():u},
ac:function(a){var u=this.fr
if(u!=null)u.F(a)},
er:function(){return this.ac(null)},
cT:function(a){this.a=null
this.ac(a)},
fO:function(){return this.cT(null)},
eW:function(a,b){var u=new D.bt()
u.b=!0
this.ac(u)},
eY:function(a,b){var u=new D.bu()
u.b=!0
this.ac(u)},
cJ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=u.h(0,q.ga7())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cO])
u.G(0,new O.h5(g,n))
C.b.aT(n,new O.h6())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=m.h(0,q.ga7())
m.m(0,p,o==null?1:o)}l=H.b([],[A.cW])
m.G(0,new O.h7(g,l))
C.b.aT(l,new O.h8())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.ga7()
o=k.h(0,q.ga7())
k.m(0,p,o==null?1:o)}j=H.b([],[A.di])
k.G(0,new O.h9(g,j))
C.b.aT(j,new O.ha())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.ga7()
p=i.h(0,q.ga7())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dp])
i.G(0,new O.hb(g,h))
C.b.aT(h,new O.hc())
f=C.c.a2(g.e.a.length+3,4)
g.dy.e
return A.n6(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ey:function(a,b){},
am:function(a,b){var u,t,s
for(u=this.dx.a,u=new J.a4(u,u.length);u.u();){t=u.d
t.toString
s=$.he
t.a=s==null?$.he=new V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s
s=t.b
if(s!=null)t.a=s.an(0,b,t)}},
i1:function(a8,a9){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a6.a
if(a7==null){a7=a6.cJ()
u=a8.fr.h(0,a7.b0)
if(u==null){u=A.n5(a7,a8.a)
t=u.b
if(t.length===0)H.p(P.v("May not cache a shader with no name."))
if(a8.fr.bZ(0,t))H.p(P.v('Shader cache already contains a shader by the name "'+t+'".'))
a8.fr.m(0,t,u)}a7=a6.a=u
a9.e=null}s=a7.z
r=s.bk
a7=a9.e
if(!(a7 instanceof Z.cQ))a7=a9.e=null
if(a7==null||!a7.d.q(0,r)){a7=s.k4
if(a7)a9.d.as()
q=s.r1
if(q){p=a9.d
o=p.e
if(o!=null)++o.d
p.d.bW()
p.a.bW()
p=p.e
if(p!=null)p.ah(0)}p=s.rx
if(p){o=a9.d
n=o.e
if(n!=null)++n.d
o.a.hf()
o=o.e
if(o!=null)o.ah(0)}m=a9.d.he(new Z.iX(a8.a),r)
m.aP($.aZ()).e=a6.a.Q.c
if(a7)m.aP($.aY()).e=a6.a.cx.c
if(q)m.aP($.aX()).e=a6.a.ch.c
if(s.r2)m.aP($.bk()).e=a6.a.cy.c
if(p)m.aP($.bl()).e=a6.a.db.c
if(s.ry)m.aP($.aW()).e=a6.a.dx.c
a9.e=m}l=H.b([],[T.ic])
a7=a6.a
q=a8.a
q.useProgram(a7.r)
a7.x.hp()
if(s.fr){a7=a6.a
p=a8.dx
p=p.ga3(p)
a7=a7.dy
a7.toString
a7.ai(p.al(0,!0))}if(s.fx){a7=a6.a
p=a8.cx
if(p==null){p=a8.db
p=p.ga3(p)
o=a8.dx
o=a8.cx=p.p(0,o.ga3(o))
p=o}a7=a7.fr
a7.toString
a7.ai(p.al(0,!0))}a7=a6.a
p=a8.ch
if(p==null){p=a8.ghY()
o=a8.dx
o=a8.ch=p.p(0,o.ga3(o))
p=o}a7=a7.fy
a7.toString
a7.ai(p.al(0,!0))
if(s.go){a7=a6.a
p=a8.db
p=p.ga3(p)
a7=a7.fx
a7.toString
a7.ai(p.al(0,!0))}if(s.x1){a7=a6.a
p=a6.b
a7=a7.k1
a7.toString
a7.ai(C.i.al(p,!0))}if(s.x2){a7=a6.a
p=a6.c
a7=a7.k2
a7.toString
a7.ai(C.i.al(p,!0))}if(s.y1){a7=a6.a
p=a6.d
a7=a7.k3
a7.toString
a7.ai(C.i.al(p,!0))}if(s.bj>0){k=a6.e.a.length
a7=a6.a.k4
a7.a.uniform1i(a7.d,k)
for(j=0;j<k;++j){a7=a6.a
p=a6.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
a7=a7.r1
if(j>=a7.length)return H.d(a7,j)
a7=a7[j]
i=new Float32Array(H.cD(p.al(0,!0)))
a7.a.uniformMatrix4fv(a7.d,!1,i)}}if(s.a.a){a7=a6.a
p=a6.f.f
a7=a7.r2
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}if(s.k1){if(s.b.a){a7=a6.a
p=a6.r.f
a7=a7.x1
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}if(s.c.a){a7=a6.a
p=a6.x.f
a7=a7.y2
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}if(s.d.a){a7=a6.a
p=a6.y.f
a7=a7.bk
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}a7=s.e.a
if(!a7)p=!1
else p=!0
if(p){p=a6.a
o=a6.z.ch
p=p.di
p.a.uniform1f(p.d,o)}if(a7){a7=a6.a
p=a6.z.f
a7=a7.dh
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}a7=s.z
if(a7.length>0){p=P.w
h=new H.I([p,p])
for(p=a6.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.bQ(a6.a.c3.h(0,e),d)
n=f.gii()
b=$.aA
n=n.ba(b==null?$.aA=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gim()
b=$.aA
n=n.ba(b==null?$.aA=new V.U(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gay(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.ghq()){n=f.gh9()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gha()
b=c.f
b.a.uniform1f(b.d,n)
n=f.ghb()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=a7.length,g=0;g<a7.length;a7.length===p||(0,H.l)(a7),++g){o=a7[g].a
k=h.h(0,o)
if(k==null)k=0
o=a6.a.c2.h(0,o)
o.a.uniform1i(o.d,k)}}a7=s.Q
if(a7.length>0){p=a8.db
a=p.ga3(p)
p=P.w
a0=new H.I([p,p])
for(p=a6.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a0.h(0,e)
if(d==null)d=0
a0.m(0,e,d+1)
c=J.bQ(a6.a.c5.h(0,e),d)
n=f.gdc(f)
b=C.d.p(a.a,n.gde(n))+C.d.p(a.b,n.gdf(n))+C.d.p(a.c,n.gdg())
a1=C.d.p(a.e,n.gde(n))+C.d.p(a.f,n.gdf(n))+C.d.p(a.r,n.gdg())
n=C.d.p(a.y,n.gde(n))+C.d.p(a.z,n.gdf(n))+C.d.p(a.Q,n.gdg())
n=new V.B(b,a1,n).v(0,Math.sqrt(b*b+a1*a1+n*n))
a1=c.e
b=n.a
a2=n.b
n=n.c
a1.a.uniform3f(a1.d,b,a2,n)
n=f.gay(f)
a2=c.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)
f.gaS()
n=f.gdc(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbs()
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbq(f)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaS()
if(!C.b.S(l,n)){n.sb1(0,l.length)
l.push(n)}n=f.gaS()
b=n.gb3(n)
if(b){b=c.r
b.toString
a1=n.gb3(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gb1(n)
b.a.uniform1i(b.d,n)}}}for(p=a7.length,g=0;g<a7.length;a7.length===p||(0,H.l)(a7),++g){o=a7[g].a
k=a0.h(0,o)
if(k==null)k=0
o=a6.a.c4.h(0,o)
o.a.uniform1i(o.d,k)}}a7=s.ch
if(a7.length>0){p=a8.db
a=p.ga3(p)
p=P.w
a3=new H.I([p,p])
for(p=a6.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.bQ(a6.a.c7.h(0,e),d)
a4=a.p(0,f.a)
n=f.a
b=$.aA
n=n.ba(b==null?$.aA=new V.U(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aA
n=a4.ba(n==null?$.aA=new V.U(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.c
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.r
b=c.y
b.a.uniform1f(b.d,n)
n=f.x
b=c.z
b.a.uniform1f(b.d,n)
n=f.y
b=c.Q
b.a.uniform1f(b.d,n)}for(p=a7.length,g=0;g<a7.length;a7.length===p||(0,H.l)(a7),++g){o=a7[g].a
k=a3.h(0,o)
if(k==null)k=0
o=a6.a.c6.h(0,o)
o.a.uniform1i(o.d,k)}}a7=s.cx
if(a7.length>0){p=a8.db
a=p.ga3(p)
p=P.w
a5=new H.I([p,p])
for(p=a6.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.ga7()
d=a5.h(0,e)
if(d==null)d=0
a5.m(0,e,d+1)
c=J.bQ(a6.a.c9.h(0,e),d)
n=f.ghX(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gdc(f).iE()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.ba(f.ghX(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gay(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaS()
n=f.gbs()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbq(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giF()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giG()
b=c.y
b.a.uniform1f(b.d,n)
f.gaS()
n=f.gaS()
if(!C.b.S(l,n)){n.sb1(0,l.length)
l.push(n)}n=f.gaS()
b=n.gb3(n)
if(b){b=c.dx
b.toString
a1=n.gb3(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gb1(n)
b.a.uniform1i(b.d,n)}}f.gct()
n=f.gih()
b=c.z
b.a.uniform4f(b.d,n.a,n.b,n.c,n.d)
n=f.gct()
if(!C.b.S(l,n)){n.sb1(0,l.length)
l.push(n)}n=f.gct()
b=n.gb3(n)
if(b){b=c.dy
b.toString
a1=n.gb3(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gb1(n)
b.a.uniform1i(b.d,n)}}if(f.gil()){n=f.gik()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gij()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.ghq()){n=f.gh9()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gha()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.ghb()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=a7.length,g=0;g<a7.length;a7.length===p||(0,H.l)(a7),++g){o=a7[g].a
k=a5.h(0,o)
if(k==null)k=0
o=a6.a.c8.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){a7=a6.a
p=a8.Q
if(p==null){p=a8.db
p=a8.Q=p.ga3(p).hC(0)}a7=a7.id
a7.toString
a7.ai(p.al(0,!0))}if(s.db){a6.ey(l,a6.ch)
a7=a6.a
p=a6.ch
a7.fR(a7.dj,p)
if(s.r.a){a7=a6.a
p=a6.cx.f
a7=a7.dk
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}a7=s.x.a
if(!a7)p=!1
else p=!0
if(p){p=a6.a
o=a6.cy.ch
p=p.dl
p.a.uniform1f(p.d,o)}if(a7){a7=a6.a
p=a6.cy.f
a7=a7.dm
a7.a.uniform3f(a7.d,p.a,p.b,p.c)}}a7=s.y.a
p=!a7
if(p)o=!1
else o=!0
if(o){if(a7){a7=a6.a
o=a6.db.f
a7=a7.dn
a7.a.uniform1f(a7.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bh(a8)
a7=a9.e
a7.bh(a8)
a7.aQ(a8)
a7.dY(a8)
if(p)a7=!1
else a7=!0
if(a7)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dY(a8)
a7=a6.a
a7.toString
q.useProgram(null)
a7.x.ho()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cJ().b0}}
O.h5.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cO(a,C.c.a2(b+3,4)*4))}}
O.h6.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h7.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cW(a,C.c.a2(b+3,4)*4))}}
O.h8.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h9.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.di(a,C.c.a2(b+3,4)*4))}}
O.ha.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.hb.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dp(a,C.c.a2(b+3,4)*4))}}
O.hc.prototype={
$2:function(a,b){return J.cL(a.a,b.a)}}
O.h_.prototype={
aw:function(){var u,t=this
t.cw()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.ac(u)}}}
O.da.prototype={
aw:function(){},
cW:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aw()
u=s.a
u.a=null
u.ac(null)}}}
O.h0.prototype={}
O.au.prototype={
cV:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.ac(t)}},
aw:function(){this.cw()
this.cV(new V.W(1,1,1))},
say:function(a,b){this.cW(new A.a_(!0,!1,!1))
this.cV(b)}}
O.h2.prototype={}
O.h3.prototype={
aw:function(){var u,t=this
t.cz()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.ac(u)}}}
O.h4.prototype={
cX:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.ac(t)}},
aw:function(){this.cz()
this.cX(100)}}
O.du.prototype={}
T.ic.prototype={}
X.km.prototype={}
X.fu.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.K():u}}
X.dh.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.K():u},
aH:function(a){var u=this.f
if(u!=null)u.F(a)},
ev:function(){return this.aH(null)},
saC:function(a){var u,t,s=this
if(!J.E(s.b,a)){u=s.b
if(u!=null)u.gA().M(0,s.gcD())
t=s.b
s.b=a
if(a!=null)a.gA().n(0,s.gcD())
u=new D.z("mover",t,s.b)
u.b=!0
s.aH(u)}}}
X.i8.prototype={}
V.cS.prototype={
bd:function(a){this.b=new P.fz(C.P)
this.c=null
this.d=H.b([],[[P.o,W.al]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.al]))
u=a.split("\n")
for(l=u.length,t=[W.al],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eF(q,0,q.length)
n=o==null?q:o
C.N.e4(p,H.kY(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gat(m.d).push(p)}},
dM:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.al]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bi()
for(t.toString,s=new H.m(u),s=new P.bG(t.cp(new H.b6(s,s.gl(s))).a());s.u();)r.bp(s.gC(s))}}
V.kc.prototype={
$1:function(a){var u=C.d.dX(this.a.ghz(),2)
if(u!=="0.00")P.kX(u+" fps")}}
V.f9.prototype={
bp:function(a){var u=this
switch(a.a){case"Class":u.N(a.b,"#551")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break
case"Type":u.N(a.b,"#B11")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ih()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.u(new H.m("_"))
u.a.push(t)
t=K.N("a","z")
u.a.push(t)
t=K.N("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.u(new H.m("_"))
t.a.push(u)
u=K.N("0","9")
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.N("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.N("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.u(new H.m("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.N("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.N("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.u(new H.m(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.u(new H.m(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.u(new H.m('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.u(new H.m('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.u(new H.m("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.u(new H.m('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aL())
t=a1.k(0,r).j(0,h)
u=K.u(new H.m("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.u(new H.m("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.u(new H.m("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.u(new H.m("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aL())
t=a1.k(0,r).j(0,e)
u=K.u(new H.m("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.u(new H.m("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.u(new H.m("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a6()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.m("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.u(new H.m("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.u(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a6()
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.m("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.u(new H.m("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.u(new H.m(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.u(new H.m(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.R("Num")
t=a1.k(0,n)
t.d=t.a.R("Num")
t=a1.k(0,m)
t.d=t.a.R("Symbol")
t=a1.k(0,j)
t.d=t.a.R("String")
t=a1.k(0,g)
t.d=t.a.R("String")
t=a1.k(0,c)
t.d=t.a.R(d)
t=a1.k(0,a0)
t.d=t.a.R(a0)
t=a1.k(0,q)
t=t.d=t.a.R(q)
u=[P.h]
t.aD(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aD(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aD(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fw.prototype={
bp:function(a){var u=this
switch(a.a){case"Builtin":u.N(a.b,"#411")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Preprocess":u.N(a.b,"#737")
break
case"Reserved":u.N(a.b,"#119")
break
case"Symbol":u.N(a.b,"#611")
break
case"Type":u.N(a.b,"#171")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bi:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ih()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.u(new H.m("_"))
u.a.push(t)
t=K.N("a","z")
u.a.push(t)
t=K.N("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.u(new H.m("_"))
t.a.push(u)
u=K.N("0","9")
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.N("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.N("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.u(new H.m("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.N("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.N("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.u(new H.m(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.u(new H.m(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.u(new H.m("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.u(new H.m("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aL())
t=e.k(0,j).j(0,i)
u=K.u(new H.m("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a6()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.u(new H.m("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a6()
u.a=H.b([],s)
t.a.push(u)
t=K.u(new H.m("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.u(new H.m("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.u(new H.m(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.u(new H.m(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.R("Num")
u=e.k(0,n)
u.d=u.a.R("Num")
u=e.k(0,m)
u.d=u.a.R("Symbol")
u=e.k(0,i)
u.d=u.a.R(j)
u=e.k(0,g)
u.d=u.a.R(h)
u=e.k(0,f)
u.d=u.a.R(f)
u=e.k(0,q)
u=u.d=u.a.R(q)
t=[P.h]
u.aD(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aD(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aD(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fx.prototype={
bp:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.N(a.b,"#911")
u.N("=",t)
break
case"Id":u.N(a.b,t)
break
case"Other":u.N(a.b,t)
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break}},
bi:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ih()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.u(new H.m("_"))
u.a.push(t)
t=K.N("a","z")
u.a.push(t)
t=K.N("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.u(new H.m("_"))
t.a.push(u)
u=K.N("0","9")
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.u(new H.m("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.u(new H.m("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.u(new H.m("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.u(new H.m('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.u(new H.m('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.u(new H.m("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.u(new H.m('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aL())
l.k(0,s).j(0,m).a.push(new K.aL())
u=l.k(0,m).j(0,m)
t=new K.a6()
t.a=H.b([],[K.b7])
u.a.push(t)
u=K.u(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.N("a","z")
t.a.push(u)
u=K.N("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.R("Symbol")
u=l.k(0,n)
u.d=u.a.R("String")
u=l.k(0,r)
t=u.a.R(r)
u.d=t
t.aD(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hz.prototype={
dM:function(a,b){this.d=H.b([],[[P.o,W.al]])
this.N(C.b.j(b,"\n"),"#111")},
bp:function(a){},
bi:function(){return}}
V.hD.prototype={
d3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lA().gcl().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.d1(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.l3(m.c).n(0,q)
o=W.mS("radio")
o.checked=s
o.name=u
W.Z(o,"change",new V.hE(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.l3(m.c).n(0,r.createElement("br"))},
aX:function(a,b,c){return this.d3(a,b,c,!1)},
d1:function(a){var u,t,s=P.lA(),r=P.h,q=P.n0(s.gcl(),r,r)
q.m(0,this.a,a)
u=s.dS(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jp([],[]).bt(""),"",t)}}
V.hE.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.d1(u.d)}}}
V.hT.prototype={
eh:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.hV(o),!1)},
d5:function(a){var u,t,s,r,q,p,o,n
this.fU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hE(a),s.toString,r=new H.m(r),r=new P.bG(s.cp(new H.b6(r,r.gl(r))).a());r.u();){s=r.gC(r)
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
if(H.oZ(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.et(C.x,s,C.e,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+H.e(n)
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
e1:function(a){var u,t,s,r=new V.f9("dart")
r.bd("dart")
u=new V.fw("glsl")
u.bd("glsl")
t=new V.fx("html")
t.bd("html")
s=C.b.hv(H.b([r,u,t],[V.cS]),new V.hW(a))
if(s!=null)return s
r=new V.hz("plain")
r.bd("plain")
return r},
d4:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cG(s).a1(s,"+")){b0[t]=C.a.a5(s,1)
a6.push(1)
u=!0}else if(C.a.a1(s,"-")){b0[t]=C.a.a5(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.e1(a8)
r.dM(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.et(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.l5()
j.href="#"+H.e(n)
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.l)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.l)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gT(s);a2.u();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
h2:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fU:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.ih()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.u(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a6()
r=[K.b7]
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.m("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.u(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.u(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a6()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.m("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.u(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.u(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a6()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.m("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.u(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.u(new H.m("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.u(new H.m("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.u(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.m("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.u(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.m("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aL())
s=u.k(0,i).j(0,i)
t=new K.a6()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.m("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.R(p)
s=u.k(0,n)
s.d=s.a.R(o)
s=u.k(0,"CodeEnd")
s.d=s.a.R(m)
s=u.k(0,j)
s.d=s.a.R("Link")
s=u.k(0,i)
s.d=s.a.R(i)
this.b=u}}
V.hV.prototype={
$1:function(a){P.lw(C.n,new V.hU(this.a))}}
V.hU.prototype={
$0:function(){var u=C.d.ak(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.hW.prototype={
$1:function(a){return a.a===this.a}}
U.k4.prototype={
$0:function(){this.a.sab(0,F.kS(1,null,null,1))}}
U.k5.prototype={
$0:function(){this.a.sab(0,F.m_(!0,40,1))}}
U.k6.prototype={
$0:function(){this.a.sab(0,F.m_(!1,40,0))}}
U.k7.prototype={
$0:function(){this.a.sab(0,F.ma(6,6))}}
U.k8.prototype={
$0:function(){this.a.sab(0,F.mc())}}
U.k9.prototype={
$0:function(){this.a.sab(0,F.oS())}}
U.ka.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.d4("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.d4("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.e8=u.i
u=J.d4.prototype
u.ea=u.i
u=P.j.prototype
u.e9=u.bu
u=W.P.prototype
u.bw=u.ae
u=W.ec.prototype
u.eb=u.ar
u=K.d1.prototype
u.e7=u.aB
u.cv=u.i
u=O.da.prototype
u.cw=u.aw
u=O.au.prototype
u.cz=u.aw})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"o5","mW",20)
t(P,"oA","nE",8)
t(P,"oB","nF",8)
t(P,"oC","nG",8)
s(P,"lZ","oy",10)
r(W,"oM",4,null,["$4"],["nH"],15,0)
r(W,"oN",4,null,["$4"],["nI"],15,0)
var l
q(l=E.aO.prototype,"gdI",0,0,null,["$1","$0"],["dJ","hO"],0,0)
q(l,"gdK",0,0,null,["$1","$0"],["dL","hP"],0,0)
q(l,"gdG",0,0,null,["$1","$0"],["dH","hN"],0,0)
q(l,"gdE",0,0,null,["$1","$0"],["dF","hK"],0,0)
p(l,"ghI","hJ",4)
p(l,"ghL","hM",4)
q(l=E.dv.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
o(l,"gi3","dT",10)
n(l=X.dE.prototype,"gfa","fb",5)
n(l,"geZ","f_",5)
n(l,"gf4","f5",2)
n(l,"gfe","ff",11)
n(l,"gfc","fd",11)
n(l,"gfi","fj",2)
n(l,"gfm","fn",2)
n(l,"gf8","f9",2)
n(l,"gfk","fl",2)
n(l,"gf6","f7",2)
n(l,"gfo","fp",18)
n(l,"gfq","fs",5)
n(l,"gfG","fH",6)
n(l,"gfC","fD",6)
n(l,"gfE","fF",6)
q(l=D.d6.prototype,"gcR",0,0,null,["$1","$0"],["cS","fg"],0,0)
n(l,"gfu","fv",19)
p(l,"geT","eU",12)
p(l,"gfA","fB",12)
q(D.bw.prototype,"gek",0,0,null,["$1","$0"],["a9","el"],0,0)
m(V.J.prototype,"gl","b2",7)
m(V.B.prototype,"gl","b2",7)
m(V.co.prototype,"gl","b2",7)
q(l=U.bY.prototype,"gaJ",0,0,null,["$1","$0"],["I","a6"],0,0)
p(l,"gem","en",13)
p(l,"gfw","fz",13)
q(l=U.dF.prototype,"gaJ",0,0,null,["$1","$0"],["I","a6"],0,0)
n(l,"gbF","bG",1)
n(l,"gbH","bI",1)
n(l,"gbJ","bK",1)
q(l=U.dG.prototype,"gaJ",0,0,null,["$1","$0"],["I","a6"],0,0)
n(l,"gbF","bG",1)
n(l,"gbH","bI",1)
n(l,"gbJ","bK",1)
n(l,"geL","eM",1)
n(l,"geN","eO",1)
n(l,"gh0","h1",1)
n(l,"gfZ","h_",1)
n(l,"gfX","fY",1)
n(U.dH.prototype,"geQ","eR",1)
q(l=M.cZ.prototype,"gap",0,0,null,["$1","$0"],["au","eo"],0,0)
p(l,"gf0","f1",4)
p(l,"gf2","f3",4)
q(l=O.d9.prototype,"geq",0,0,null,["$1","$0"],["ac","er"],0,0)
q(l,"gfN",0,0,null,["$1","$0"],["cT","fO"],0,0)
p(l,"geV","eW",14)
p(l,"geX","eY",14)
q(X.dh.prototype,"gcD",0,0,null,["$1","$0"],["aH","ev"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a1,null)
s(P.a1,[H.kx,J.a,J.a4,P.e_,P.j,H.b6,P.fE,H.d_,H.iA,H.f1,H.im,P.bq,H.bT,H.eh,P.a0,H.fN,H.fP,H.fH,P.en,P.bF,P.bG,P.dK,P.ds,P.i4,P.dw,P.jH,P.jj,P.jd,P.dZ,P.x,P.jz,P.fW,P.eZ,P.fA,P.jF,P.jE,P.aI,P.ab,P.aa,P.b1,P.hx,P.dq,P.dS,P.ft,P.fv,P.o,P.Q,P.ba,P.h,P.R,P.bH,P.iC,P.jm,W.f5,W.cr,W.L,W.df,W.ec,W.jt,W.d0,W.aR,W.ji,W.eu,P.jo,P.je,P.bB,K.aL,K.d1,K.b7,K.hF,K.hO,L.dr,L.dx,L.dy,L.ig,O.b0,O.c4,E.eV,E.aO,E.hG,E.dv,Z.dJ,Z.iX,Z.cQ,Z.bs,Z.bg,D.eY,D.br,D.X,X.cR,X.d5,X.fK,X.fT,X.ai,X.hl,X.ii,X.dE,D.eS,D.fb,D.a5,D.bw,D.i_,V.W,V.ar,V.fk,V.hd,V.av,V.a7,V.U,V.bc,V.dk,V.J,V.B,V.co,U.dF,U.dG,U.dH,M.cZ,A.cN,A.eN,A.a_,A.cO,A.cW,A.di,A.dp,A.h1,A.ci,A.cj,A.cl,A.cm,A.dB,A.iv,F.b2,F.fn,F.c1,F.fM,F.ca,F.hP,F.hQ,F.hR,F.hS,F.bf,F.iL,F.iM,F.iP,F.iR,F.iS,F.iT,O.du,O.da,O.h2,X.km,X.i8,X.dh,V.cS,V.hD,V.hT])
s(J.a,[J.fF,J.d3,J.d4,J.b3,J.c0,J.b4,H.c7,H.b9,W.f,W.eJ,W.bn,W.as,W.H,W.dM,W.ah,W.fa,W.fc,W.dO,W.cY,W.dQ,W.fe,W.i,W.dT,W.at,W.fy,W.dV,W.c_,W.fS,W.hf,W.e0,W.e1,W.ax,W.e2,W.e5,W.az,W.e9,W.eb,W.aC,W.ed,W.aD,W.ei,W.an,W.el,W.ie,W.aF,W.eo,W.ik,W.iH,W.ev,W.ex,W.ez,W.eB,W.eD,P.aP,P.dX,P.aS,P.e7,P.hC,P.ej,P.aU,P.eq,P.eO,P.dL,P.ef])
s(J.d4,[J.hy,J.bE,J.b5])
t(J.kw,J.b3)
s(J.c0,[J.d2,J.fG])
t(P.fR,P.e_)
s(P.fR,[H.dC,W.j3,W.a2,P.fp])
t(H.m,H.dC)
s(P.j,[H.q,H.c3,H.cp,P.fC])
s(H.q,[H.d7,H.fO])
t(H.fh,H.c3)
s(P.fE,[H.fX,H.iY])
t(H.fY,H.d7)
t(H.f2,H.f1)
s(P.bq,[H.hu,H.fJ,H.iz,H.eX,H.hM,P.dg,P.ak,P.iB,P.ix,P.ce,P.f0,P.f8])
s(H.bT,[H.kh,H.i9,H.fI,H.k_,H.k0,H.k1,P.j_,P.iZ,P.j0,P.j1,P.jy,P.jx,P.jQ,P.jg,P.jh,P.fQ,P.fV,P.ff,P.fg,P.iG,P.iD,P.iE,P.iF,P.jA,P.jB,P.jD,P.jC,P.jL,P.jK,P.jM,P.jN,W.fi,W.hh,W.hj,W.hL,W.i3,W.j8,W.hs,W.hr,W.jk,W.jl,W.jw,W.jG,P.jq,P.jr,P.jR,P.fq,P.fr,P.eQ,E.hH,E.hI,E.hJ,E.id,D.fl,D.fm,F.jI,F.jS,F.jU,F.jV,F.jW,F.kd,F.ke,F.kg,F.k3,F.jT,F.iV,F.iU,F.iN,F.iO,O.h5,O.h6,O.h7,O.h8,O.h9,O.ha,O.hb,O.hc,V.kc,V.hE,V.hV,V.hU,V.hW,U.k4,U.k5,U.k6,U.k7,U.k8,U.k9,U.ka])
s(H.i9,[H.i1,H.bR])
t(P.fU,P.a0)
s(P.fU,[H.I,W.j2])
t(H.db,H.b9)
s(H.db,[H.ct,H.cv])
t(H.cu,H.ct)
t(H.c8,H.cu)
t(H.cw,H.cv)
t(H.dc,H.cw)
s(H.dc,[H.hm,H.hn,H.ho,H.hp,H.hq,H.dd,H.c9])
t(P.ju,P.fC)
t(P.jf,P.jH)
t(P.jc,P.jj)
t(P.es,P.fW)
t(P.dD,P.es)
s(P.eZ,[P.eT,P.fj])
t(P.f3,P.i4)
s(P.f3,[P.eU,P.fz,P.iK,P.iJ])
t(P.iI,P.fj)
s(P.aa,[P.O,P.w])
s(P.ak,[P.bz,P.fB])
t(P.j5,P.bH)
s(W.f,[W.F,W.fo,W.c5,W.aB,W.cx,W.aE,W.ao,W.cz,W.iW,W.cq,P.eR,P.bm])
s(W.F,[W.P,W.b_])
s(W.P,[W.n,P.k])
s(W.n,[W.eK,W.eL,W.bo,W.bp,W.al,W.fs,W.hN,W.dt,W.i6,W.i7,W.cg])
t(W.f4,W.as)
t(W.bU,W.dM)
s(W.ah,[W.f6,W.f7])
t(W.dP,W.dO)
t(W.cX,W.dP)
t(W.dR,W.dQ)
t(W.fd,W.dR)
t(W.am,W.bn)
t(W.dU,W.dT)
t(W.bX,W.dU)
t(W.dW,W.dV)
t(W.bZ,W.dW)
t(W.bd,W.i)
s(W.bd,[W.bv,W.ay,W.bA])
t(W.hg,W.e0)
t(W.hi,W.e1)
t(W.e3,W.e2)
t(W.hk,W.e3)
t(W.e6,W.e5)
t(W.de,W.e6)
t(W.ea,W.e9)
t(W.hA,W.ea)
t(W.hK,W.eb)
t(W.cy,W.cx)
t(W.hY,W.cy)
t(W.ee,W.ed)
t(W.hZ,W.ee)
t(W.i2,W.ei)
t(W.em,W.el)
t(W.ia,W.em)
t(W.cA,W.cz)
t(W.ib,W.cA)
t(W.ep,W.eo)
t(W.ij,W.ep)
t(W.bh,W.ay)
t(W.ew,W.ev)
t(W.j4,W.ew)
t(W.dN,W.cY)
t(W.ey,W.ex)
t(W.j9,W.ey)
t(W.eA,W.ez)
t(W.e4,W.eA)
t(W.eC,W.eB)
t(W.jn,W.eC)
t(W.eE,W.eD)
t(W.js,W.eE)
t(W.j6,W.j2)
t(W.j7,P.ds)
t(W.jv,W.ec)
t(P.jp,P.jo)
t(P.a8,P.je)
t(P.dY,P.dX)
t(P.fL,P.dY)
t(P.e8,P.e7)
t(P.hv,P.e8)
t(P.cd,P.k)
t(P.ek,P.ej)
t(P.i5,P.ek)
t(P.er,P.eq)
t(P.il,P.er)
t(P.eP,P.dL)
t(P.hw,P.bm)
t(P.eg,P.ef)
t(P.i0,P.eg)
s(K.d1,[K.a6,L.dA])
s(E.eV,[Z.cP,A.dm,T.ic])
s(D.X,[D.bt,D.bu,D.z,X.hB])
s(X.hB,[X.d8,X.aQ,X.c6,X.dz])
s(O.b0,[D.d6,U.bY])
s(D.eY,[U.f_,U.ac])
s(U.ac,[U.cT,U.dl])
t(A.fZ,A.dm)
s(A.dB,[A.be,A.is,A.it,A.iu,A.iq,A.V,A.ir,A.G,A.ch,A.iw,A.ck,A.ad,A.bC,A.bD])
t(F.hX,F.fn)
t(F.ip,F.fM)
t(F.iQ,F.iR)
t(F.ht,F.iS)
t(O.d9,O.du)
s(O.da,[O.h_,O.h0,O.au])
s(O.au,[O.h3,O.h4])
t(X.fu,X.i8)
s(V.cS,[V.f9,V.fw,V.fx,V.hz])
u(H.dC,H.iA)
u(H.ct,P.x)
u(H.cu,H.d_)
u(H.cv,P.x)
u(H.cw,H.d_)
u(P.e_,P.x)
u(P.es,P.jz)
u(W.dM,W.f5)
u(W.dO,P.x)
u(W.dP,W.L)
u(W.dQ,P.x)
u(W.dR,W.L)
u(W.dT,P.x)
u(W.dU,W.L)
u(W.dV,P.x)
u(W.dW,W.L)
u(W.e0,P.a0)
u(W.e1,P.a0)
u(W.e2,P.x)
u(W.e3,W.L)
u(W.e5,P.x)
u(W.e6,W.L)
u(W.e9,P.x)
u(W.ea,W.L)
u(W.eb,P.a0)
u(W.cx,P.x)
u(W.cy,W.L)
u(W.ed,P.x)
u(W.ee,W.L)
u(W.ei,P.a0)
u(W.el,P.x)
u(W.em,W.L)
u(W.cz,P.x)
u(W.cA,W.L)
u(W.eo,P.x)
u(W.ep,W.L)
u(W.ev,P.x)
u(W.ew,W.L)
u(W.ex,P.x)
u(W.ey,W.L)
u(W.ez,P.x)
u(W.eA,W.L)
u(W.eB,P.x)
u(W.eC,W.L)
u(W.eD,P.x)
u(W.eE,W.L)
u(P.dX,P.x)
u(P.dY,W.L)
u(P.e7,P.x)
u(P.e8,W.L)
u(P.ej,P.x)
u(P.ek,W.L)
u(P.eq,P.x)
u(P.er,W.L)
u(P.dL,P.a0)
u(P.ef,P.x)
u(P.eg,W.L)})()
var v={mangledGlobalNames:{w:"int",O:"double",aa:"num",h:"String",aI:"bool",ba:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:P.ba,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.aO]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bA]},{func:1,ret:P.O},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[P.w,[P.j,D.a5]]},{func:1,ret:-1,args:[P.w,[P.j,U.ac]]},{func:1,ret:-1,args:[P.w,[P.j,V.av]]},{func:1,ret:P.aI,args:[W.P,P.h,P.h,W.cr]},{func:1,ret:P.ba,args:[,]},{func:1,ret:P.bB,args:[,,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.aI,args:[[P.j,D.a5]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bo.prototype
C.m=W.bp.prototype
C.N=W.al.prototype
C.Q=J.a.prototype
C.b=J.b3.prototype
C.c=J.d2.prototype
C.i=J.d3.prototype
C.d=J.c0.prototype
C.a=J.b4.prototype
C.R=J.b5.prototype
C.A=J.hy.prototype
C.B=W.dt.prototype
C.q=J.bE.prototype
C.C=W.bh.prototype
C.D=W.cq.prototype
C.Y=new P.eU()
C.E=new P.eT()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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

C.L=new P.hx()
C.e=new P.iI()
C.M=new P.iK()
C.f=new P.jf()
C.n=new P.b1(0)
C.O=new P.b1(5e6)
C.P=new P.fA("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.w])
C.j=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.S=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.k=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.l=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.T=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.U=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.V=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.W=new H.f2(0,{},C.w,[P.h,P.h])
C.X=new P.bF(null,2)})();(function staticFields(){$.aq=0
$.bS=null
$.l7=null
$.m4=null
$.lY=null
$.m8=null
$.jX=null
$.k2=null
$.kV=null
$.bJ=null
$.cE=null
$.cF=null
$.kO=!1
$.ap=C.f
$.a9=[]
$.aN=null
$.kq=null
$.ld=null
$.lc=null
$.cs=P.kz(P.h,P.fv)
$.he=null
$.ln=null
$.aA=null
$.ls=null
$.lD=null
$.lI=null
$.lF=null
$.lG=null
$.lH=null
$.lE=null
$.lJ=null
$.lm=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"p4","me",function(){return H.m3("_$dart_dartClosure")})
u($,"p5","l_",function(){return H.m3("_$dart_js")})
u($,"p6","mf",function(){return H.aG(H.io({
toString:function(){return"$receiver$"}}))})
u($,"p7","mg",function(){return H.aG(H.io({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"p8","mh",function(){return H.aG(H.io(null))})
u($,"p9","mi",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pc","ml",function(){return H.aG(H.io(void 0))})
u($,"pd","mm",function(){return H.aG(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pb","mk",function(){return H.aG(H.ly(null))})
u($,"pa","mj",function(){return H.aG(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pf","mo",function(){return H.aG(H.ly(void 0))})
u($,"pe","mn",function(){return H.aG(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pt","l0",function(){return P.nD()})
u($,"pg","mp",function(){return P.nA()})
u($,"pu","mt",function(){return H.n7(H.cD(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"px","mv",function(){return P.nm("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"py","mw",function(){return P.o3()})
u($,"pv","mu",function(){return P.lf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pn","ms",function(){return Z.aj(0)})
u($,"ph","mq",function(){return Z.aj(511)})
u($,"pp","aZ",function(){return Z.aj(1)})
u($,"po","aY",function(){return Z.aj(2)})
u($,"pj","aX",function(){return Z.aj(4)})
u($,"pq","bk",function(){return Z.aj(8)})
u($,"pr","bl",function(){return Z.aj(16)})
u($,"pk","cJ",function(){return Z.aj(32)})
u($,"pl","cK",function(){return Z.aj(64)})
u($,"pm","mr",function(){return Z.aj(96)})
u($,"ps","bP",function(){return Z.aj(128)})
u($,"pi","aW",function(){return Z.aj(256)})
u($,"p3","md",function(){return new V.fk(1e-9)})
u($,"p2","A",function(){return $.md()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c7,DataView:H.b9,ArrayBufferView:H.b9,Float32Array:H.c8,Float64Array:H.c8,Int16Array:H.hm,Int32Array:H.hn,Int8Array:H.ho,Uint16Array:H.hp,Uint32Array:H.hq,Uint8ClampedArray:H.dd,CanvasPixelArray:H.dd,Uint8Array:H.c9,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eJ,HTMLAnchorElement:W.eK,HTMLAreaElement:W.eL,Blob:W.bn,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bp,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSPerspective:W.f4,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bU,MSStyleCSSProperties:W.bU,CSS2Properties:W.bU,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.f6,CSSUnparsedValue:W.f7,DataTransferItemList:W.fa,HTMLDivElement:W.al,DOMException:W.fc,ClientRectList:W.cX,DOMRectList:W.cX,DOMRectReadOnly:W.cY,DOMStringList:W.fd,DOMTokenList:W.fe,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.am,FileList:W.bX,FileWriter:W.fo,HTMLFormElement:W.fs,Gamepad:W.at,History:W.fy,HTMLCollection:W.bZ,HTMLFormControlsCollection:W.bZ,HTMLOptionsCollection:W.bZ,ImageData:W.c_,KeyboardEvent:W.bv,Location:W.fS,MediaList:W.hf,MessagePort:W.c5,MIDIInputMap:W.hg,MIDIOutputMap:W.hi,MimeType:W.ax,MimeTypeArray:W.hk,PointerEvent:W.ay,MouseEvent:W.ay,DragEvent:W.ay,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.de,RadioNodeList:W.de,Plugin:W.az,PluginArray:W.hA,RTCStatsReport:W.hK,HTMLSelectElement:W.hN,SourceBuffer:W.aB,SourceBufferList:W.hY,SpeechGrammar:W.aC,SpeechGrammarList:W.hZ,SpeechRecognitionResult:W.aD,Storage:W.i2,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.dt,HTMLTableRowElement:W.i6,HTMLTableSectionElement:W.i7,HTMLTemplateElement:W.cg,TextTrack:W.aE,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.ia,TextTrackList:W.ib,TimeRanges:W.ie,Touch:W.aF,TouchEvent:W.bA,TouchList:W.ij,TrackDefaultList:W.ik,CompositionEvent:W.bd,FocusEvent:W.bd,TextEvent:W.bd,UIEvent:W.bd,URL:W.iH,VideoTrackList:W.iW,WheelEvent:W.bh,Window:W.cq,DOMWindow:W.cq,CSSRuleList:W.j4,ClientRect:W.dN,DOMRect:W.dN,GamepadList:W.j9,NamedNodeMap:W.e4,MozNamedAttrMap:W.e4,SpeechRecognitionResultList:W.jn,StyleSheetList:W.js,SVGLength:P.aP,SVGLengthList:P.fL,SVGNumber:P.aS,SVGNumberList:P.hv,SVGPointList:P.hC,SVGScriptElement:P.cd,SVGStringList:P.i5,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aU,SVGTransformList:P.il,AudioBuffer:P.eO,AudioParamMap:P.eP,AudioTrackList:P.eR,AudioContext:P.bm,webkitAudioContext:P.bm,BaseAudioContext:P.bm,OfflineAudioContext:P.hw,SQLResultSetRowList:P.i0})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.db.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
W.cx.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.m6,[])
else U.m6([])})})()
//# sourceMappingURL=test.dart.js.map
