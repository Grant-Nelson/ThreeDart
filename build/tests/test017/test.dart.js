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
a[c]=function(){a[c]=function(){H.pr(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lf(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kX:function kX(){},
kj:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
ns:function(a,b,c,d){if(!!J.R(a).$iu)return new H.fx(a,b,[c,d])
return new H.cd(a,b,[c,d])},
fV:function(){return new P.cp("No element")},
nh:function(){return new P.cp("Too many elements")},
nP:function(a,b){var u=J.ak(a)
if(typeof u!=="number")return u.L()
H.dC(a,0,u-1,b)},
dC:function(a,b,c,d){if(c-b<=32)H.nO(a,b,c,d)
else H.nN(a,b,c,d)},
nO:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aw(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a5()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nN:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a7(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a7(a4+a5,2),f=g-j,e=g+j,d=J.aw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.A(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.P()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
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
if(typeof l!=="number")return l.P()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a5()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a5()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
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
H.dC(a3,a4,t-2,a6)
H.dC(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.A(a6.$2(d.h(a3,t),b),0);)++t
for(;J.A(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dC(a3,t,s,a6)}else H.dC(a3,t,s,a6)},
p:function p(a){this.a=a},
u:function u(){},
dj:function dj(){},
bk:function bk(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cd:function cd(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
hd:function hd(a,b){this.a=null
this.b=a
this.c=b},
he:function he(a,b,c){this.a=a
this.b=b
this.$ti=c},
cA:function cA(a,b,c){this.a=a
this.b=b
this.$ti=c},
ji:function ji(a,b){this.a=a
this.b=b},
da:function da(){},
iT:function iT(){},
dR:function dR(){},
na:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cS:function(a){var u,t=H.pt(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pb:function(a){return v.types[a]},
mu:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.c(H.ai(a))
return u},
cm:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nF:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
cn:function(a){return H.nw(a)+H.mh(H.cR(a),0,null)},
nw:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibL){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cS(t.length>1&&C.a.H(t,0)===36?C.a.ab(t,1):t)},
nx:function(){if(!!self.location)return self.location.href
return},
lM:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nG:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aW(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ai(s))}return H.lM(r)},
lN:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<0)throw H.c(H.ai(s))
if(s>65535)return H.nG(a)}return H.lM(a)},
nH:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iE()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bG:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nE:function(a){var u=H.bF(a).getFullYear()+0
return u},
nC:function(a){var u=H.bF(a).getMonth()+1
return u},
ny:function(a){var u=H.bF(a).getDate()+0
return u},
nz:function(a){var u=H.bF(a).getHours()+0
return u},
nB:function(a){var u=H.bF(a).getMinutes()+0
return u},
nD:function(a){var u=H.bF(a).getSeconds()+0
return u},
nA:function(a){var u=H.bF(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ai(a))},
d:function(a,b){if(a==null)J.ak(a)
throw H.c(H.bV(a,b))},
bV:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,s,null)
u=J.ak(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.O(b,a,s,null,u)
return P.dw(b,s)},
p5:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bH(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bH(a,c,!0,b,"end",u)
return new P.ap(!0,b,"end",null)},
ai:function(a){return new P.ap(!0,a,null,null)},
p0:function(a){if(typeof a!=="number")throw H.c(H.ai(a))
return a},
c:function(a){var u
if(a==null)a=new P.dt()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mB})
u.name=""}else u.toString=H.mB
return u},
mB:function(){return J.a7(this.dartException)},
o:function(a){throw H.c(a)},
n:function(a){throw H.c(P.aU(a))},
aN:function(a){var u,t,s,r,q,p
a=H.my(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lI:function(a,b){return new H.hJ(a,b==null?null:b.method)},
kY:function(a,b){var u=b==null,t=u?null:b.method
return new H.h_(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kY(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lI(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mE()
q=$.mF()
p=$.mG()
o=$.mH()
n=$.mK()
m=$.mL()
l=$.mJ()
$.mI()
k=$.mN()
j=$.mM()
i=r.an(u)
if(i!=null)return f.$1(H.kY(u,i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.kY(u,i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lI(u,i))}}return f.$1(new H.iS(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dE()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ap(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dE()
return a},
li:function(a){var u
if(a==null)return new H.ex(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ex(a)},
p9:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ph:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ph)
a.$identity=u
return u},
n9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ij().constructor.prototype):Object.create(new H.c_(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ay
if(typeof t!=="number")return t.B()
$.ay=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ly(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.n5(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ly(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
n5:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pb,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lx:H.kL
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
n6:function(a,b,c,d){var u=H.kL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ly:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n8(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.n6(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.B()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c0
return new Function(r+H.e(q==null?$.c0=H.fb("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.B()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.c0
return new Function(r+H.e(q==null?$.c0=H.fb("self"):q)+"."+H.e(u)+"("+o+");}")()},
n7:function(a,b,c,d){var u=H.kL,t=H.lx
switch(b?-1:a){case 0:throw H.c(H.nL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n8:function(a,b){var u,t,s,r,q,p,o,n=$.c0
if(n==null)n=$.c0=H.fb("self")
u=$.lw
if(u==null)u=$.lw=H.fb("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n7(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ay
if(typeof u!=="number")return u.B()
$.ay=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ay
if(typeof u!=="number")return u.B()
$.ay=u+1
return new Function(n+u+"}")()},
lf:function(a,b,c,d,e,f,g){return H.n9(a,b,c,d,!!e,!!f,g)},
kL:function(a){return a.a},
lx:function(a){return a.c},
fb:function(a){var u,t,s,r=new H.c_("self","target","receiver","name"),q=J.kV(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pn:function(a,b){throw H.c(H.n4(a,H.cS(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.pn(a,b)},
p7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
n4:function(a,b){return new H.fc("CastError: "+P.kS(a)+": type '"+H.e(H.oX(a))+"' is not a subtype of type '"+b+"'")},
oX:function(a){var u,t=J.R(a)
if(!!t.$ic2){u=H.p7(t)
if(u!=null)return H.po(u)
return"Closure"}return H.cn(a)},
pr:function(a){throw H.c(new P.fp(a))},
nL:function(a){return new H.i1(a)},
ms:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cR:function(a){if(a==null)return
return a.$ti},
q3:function(a,b,c){return H.kE(a["$a"+H.e(c)],H.cR(b))},
pa:function(a,b,c,d){var u=H.kE(a["$a"+H.e(c)],H.cR(b))
return u==null?null:u[d]},
lh:function(a,b,c){var u=H.kE(a["$a"+H.e(b)],H.cR(a))
return u==null?null:u[c]},
aQ:function(a,b){var u=H.cR(a)
return u==null?null:u[b]},
po:function(a){return H.br(a,null)},
br:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cS(a[0].name)+H.mh(a,1,b)
if(typeof a=="function")return H.cS(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.os(a,b)
if('futureOr' in a)return"FutureOr<"+H.br("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
os:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.a4)p+=" extends "+H.br(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.br(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.br(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.br(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.p8(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.br(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
mh:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.U("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.br(p,c)}return"<"+u.i(0)+">"},
kE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
q1:function(a,b,c){return a.apply(b,H.kE(J.R(b)["$a"+H.e(c)],H.cR(b)))},
q2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pk:function(a){var u,t,s,r,q=$.mt.$1(a),p=$.kh[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mm.$2(a,q)
if(q!=null){p=$.kh[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kA(u)
$.kh[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kn[q]=u
return u}if(s==="-"){r=H.kA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mw(a,u)
if(s==="*")throw H.c(P.iR(q))
if(v.leafTags[q]===true){r=H.kA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mw(a,u)},
mw:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lk(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kA:function(a){return J.lk(a,!1,null,!!a.$iB)},
pl:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kA(u)
else return J.lk(u,c,null,null)},
pf:function(){if(!0===$.lj)return
$.lj=!0
H.pg()},
pg:function(){var u,t,s,r,q,p,o,n
$.kh=Object.create(null)
$.kn=Object.create(null)
H.pe()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mx.$1(q)
if(p!=null){o=H.pl(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pe:function(){var u,t,s,r,q,p,o=C.K()
o=H.bT(C.L,H.bT(C.M,H.bT(C.w,H.bT(C.w,H.bT(C.N,H.bT(C.O,H.bT(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mt=new H.kk(r)
$.mm=new H.kl(q)
$.mx=new H.km(p)},
bT:function(a,b){return a(b)||b},
nl:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.W("Illegal RegExp pattern ("+String(p)+")",a,null))},
mA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
p6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
my:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ln:function(a,b,c){var u=H.pq(a,b,c)
return u},
pq:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.my(b),'g'),H.p6(c))},
fi:function fi(){},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iG:function iG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hJ:function hJ(a,b){this.a=a
this.b=b},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
kH:function kH(a){this.a=a},
ex:function ex(a){this.a=a
this.b=null},
c2:function c2(){},
is:function is(){},
ij:function ij(){},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a){this.a=a},
i1:function i1(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a){this.a=a},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h4:function h4(a,b){this.a=a
this.$ti=b},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bR:function(a){return a},
nv:function(a){return new Int8Array(a)},
aO:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bV(b,a))},
oq:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p5(a,b,c))
return b},
ci:function ci(){},
bm:function bm(){},
dn:function dn(){},
cj:function cj(){},
dp:function dp(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(){},
dq:function dq(){},
ck:function ck(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
p8:function(a){return J.lE(a?Object.keys(a):[],null)},
pt:function(a){return v.mangledGlobalNames[a]},
pm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ki:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lj==null){H.pf()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iR("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lo()]
if(r!=null)return r
r=H.pk(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.lo(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
ni:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kK(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.lE(new Array(a),b)},
lE:function(a,b){return J.kV(H.b(a,[b]))},
kV:function(a){a.fixed$length=Array
return a},
nj:function(a,b){return J.cV(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.df.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a4)return a
return J.ki(a)},
aw:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a4)return a
return J.ki(a)},
eW:function(a){if(a==null)return a
if(a.constructor==Array)return J.bh.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a4)return a
return J.ki(a)},
mr:function(a){if(typeof a=="number")return J.ca.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.a4))return J.bL.prototype
return a},
cQ:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.a4))return J.bL.prototype
return a},
bX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bj.prototype
return a}if(a instanceof P.a4)return a
return J.ki(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).u(a,b)},
lq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mr(a).t(a,b)},
bZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mu(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aw(a).h(a,b)},
kI:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mu(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eW(a).m(a,b,c)},
mW:function(a,b){return J.cQ(a).H(a,b)},
mX:function(a,b,c){return J.bX(a).ha(a,b,c)},
mY:function(a,b,c,d){return J.bX(a).ht(a,b,c,d)},
mZ:function(a,b){return J.cQ(a).Z(a,b)},
cV:function(a,b){return J.mr(a).aZ(a,b)},
kJ:function(a,b){return J.aw(a).G(a,b)},
eZ:function(a,b){return J.eW(a).M(a,b)},
n_:function(a,b,c,d){return J.bX(a).hR(a,b,c,d)},
lr:function(a,b){return J.eW(a).I(a,b)},
n0:function(a){return J.bX(a).ghy(a)},
ls:function(a){return J.bX(a).gcc(a)},
cW:function(a){return J.R(a).gK(a)},
aR:function(a){return J.eW(a).gS(a)},
ak:function(a){return J.aw(a).gl(a)},
lt:function(a){return J.eW(a).io(a)},
n1:function(a,b){return J.bX(a).ir(a,b)},
n2:function(a,b,c){return J.cQ(a).v(a,b,c)},
n3:function(a){return J.cQ(a).iz(a)},
a7:function(a){return J.R(a).i(a)},
a:function a(){},
fX:function fX(){},
df:function df(){},
dg:function dg(){},
hN:function hN(){},
bL:function bL(){},
bj:function bj(){},
bh:function bh(a){this.$ti=a},
kW:function kW(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ca:function ca(){},
de:function de(){},
dd:function dd(){},
bi:function bi(){}},P={
o0:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oY()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bU(new P.jk(s),1)).observe(u,{childList:true})
return new P.jj(s,u,t)}else if(self.setImmediate!=null)return P.oZ()
return P.p_()},
o1:function(a){self.scheduleImmediate(H.bU(new P.jl(a),0))},
o2:function(a){self.setImmediate(H.bU(new P.jm(a),0))},
o3:function(a){P.l2(C.n,a)},
l2:function(a,b){var u=C.c.a7(a.a,1000)
return P.oa(u<0?0:u,b)},
lV:function(a,b){var u=C.c.a7(a.a,1000)
return P.ob(u<0?0:u,b)},
oa:function(a,b){var u=new P.eD()
u.eO(a,b)
return u},
ob:function(a,b){var u=new P.eD()
u.eP(a,b)
return u},
pZ:function(a){return new P.bN(a,1)},
o6:function(){return C.a6},
o7:function(a){return new P.bN(a,3)},
ov:function(a,b){return new P.jP(a,[b])},
oR:function(){var u,t
for(;u=$.bS,u!=null;){$.cP=null
t=u.b
$.bS=t
if(t==null)$.cO=null
u.a.$0()}},
oW:function(){$.ld=!0
try{P.oR()}finally{$.cP=null
$.ld=!1
if($.bS!=null)$.lp().$1(P.mn())}},
oU:function(a){var u=new P.dZ(a)
if($.bS==null){$.bS=$.cO=u
if(!$.ld)$.lp().$1(P.mn())}else $.cO=$.cO.b=u},
oV:function(a){var u,t,s=$.bS
if(s==null){P.oU(a)
$.cP=$.cO
return}u=new P.dZ(a)
t=$.cP
if(t==null){u.b=s
$.bS=$.cP=u}else{u.b=t.b
$.cP=t.b=u
if(u.b==null)$.cO=u}},
lU:function(a,b){var u=$.av
if(u===C.f)return P.l2(a,b)
return P.l2(a,u.hz(b))},
nS:function(a,b){var u=$.av
if(u===C.f)return P.lV(a,b)
return P.lV(a,u.dF(b,P.dL))},
mi:function(a,b,c,d,e){var u={}
u.a=d
P.oV(new P.ka(u,e))},
oS:function(a,b,c,d){var u,t=$.av
if(t===c)return d.$0()
$.av=c
u=t
try{t=d.$0()
return t}finally{$.av=u}},
oT:function(a,b,c,d,e){var u,t=$.av
if(t===c)return d.$1(e)
$.av=c
u=t
try{t=d.$1(e)
return t}finally{$.av=u}},
jk:function jk(a){this.a=a},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
eD:function eD(){this.c=0},
jT:function jT(a,b){this.a=a
this.b=b},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b){this.a=a
this.b=b},
bO:function bO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jP:function jP(a,b){this.a=a
this.$ti=b},
dZ:function dZ(a){this.a=a
this.b=null},
dG:function dG(){},
im:function im(){},
dL:function dL(){},
k1:function k1(){},
ka:function ka(a,b){this.a=a
this.b=b},
jA:function jA(){},
jB:function jB(a,b){this.a=a
this.b=b},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
nn:function(a,b){return new H.K([a,b])},
kZ:function(a,b){return new H.K([a,b])},
np:function(a){return H.p9(a,new H.K([null,null]))},
cc:function(a){return new P.jx([a])},
l8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o9:function(a,b){var u=new P.ee(a,b)
u.c=a.e
return u},
ng:function(a,b,c){var u,t
if(P.le(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ad.push(a)
try{P.ou(a,u)}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}t=P.lS(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kU:function(a,b,c){var u,t
if(P.le(a))return b+"..."+c
u=new P.U(b)
$.ad.push(a)
try{t=u
t.a=P.lS(t.a,a,", ")}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
le:function(a){var u,t
for(u=$.ad.length,t=0;t<u;++t)if(a===$.ad[t])return!0
return!1},
ou:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gF(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gF(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gF(n);++l
for(;n.w();r=q,q=p){p=n.gF(n);++l
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
no:function(a,b,c){var u=P.nn(b,c)
a.I(0,new P.h6(u))
return u},
lF:function(a,b){var u,t,s=P.cc(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)s.n(0,a[t])
return s},
l0:function(a){var u,t={}
if(P.le(a))return"{...}"
u=new P.U("")
try{$.ad.push(a)
u.a+="{"
t.a=!0
J.lr(a,new P.hb(t,u))
u.a+="}"}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jx:function jx(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jy:function jy(a){this.a=a
this.c=this.b=null},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fU:function fU(){},
h6:function h6(a){this.a=a},
h7:function h7(){},
y:function y(){},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
a3:function a3(){},
jU:function jU(){},
hc:function hc(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
jE:function jE(){},
ef:function ef(){},
eJ:function eJ(){},
nV:function(a,b,c,d){if(b instanceof Uint8Array)return P.nW(!1,b,c,d)
return},
nW:function(a,b,c,d){var u,t,s=$.mO()
if(s==null)return
u=0===c
if(u&&!0)return P.l5(s,b)
t=b.length
d=P.b3(c,d,t)
if(u&&d===t)return P.l5(s,b)
return P.l5(s,b.subarray(c,d))},
l5:function(a,b){if(P.nY(b))return
return P.nZ(a,b)},
nZ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
nY:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nX:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mk:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.t(c)
u=J.aw(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ae()
if((s&127)!==s)return t-b}return c-b},
lv:function(a,b,c,d,e,f){if(C.c.bn(f,4)!==0)throw H.c(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.W("Invalid base64 padding, more than two '=' characters",a,b))},
f8:function f8(){},
f9:function f9(){},
fe:function fe(){},
fk:function fk(){},
fz:function fz(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fQ:function fQ(a){this.a=a},
j0:function j0(){},
j2:function j2(){},
k_:function k_(a){this.b=0
this.c=a},
j1:function j1(a){this.a=a},
jZ:function jZ(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eX:function(a,b,c){var u=H.nF(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.W(a,null,null))},
ne:function(a){if(a instanceof H.c2)return a.i(0)
return"Instance of '"+H.e(H.cn(a))+"'"},
nq:function(a,b,c){var u,t,s=J.ni(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l_:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aR(a);u.w();)t.push(u.gF(u))
if(b)return t
return J.kV(t)},
cq:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b3(b,c,u)
if(b<=0){if(typeof c!=="number")return c.P()
t=c<u}else t=!0
return H.lN(t?C.b.ez(a,b,c):a)}if(!!J.R(a).$ick)return H.nH(a,b,P.b3(b,c,a.length))
return P.nQ(a,b,c)},
nQ:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a_(b,0,J.ak(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a_(c,b,J.ak(a),q,q))
t=J.aR(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gF(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.a_(c,b,s,q,q))
r.push(t.gF(t))}return H.lN(r)},
nJ:function(a){return new H.fY(a,H.nl(a,!1,!0,!1,!1,!1))},
lS:function(a,b,c){var u=J.aR(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gF(u))
while(u.w())}else{a+=H.e(u.gF(u))
for(;u.w();)a=a+c+H.e(u.gF(u))}return a},
lY:function(){var u=H.nx()
if(u!=null)return P.nU(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eK:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mU().b
if(typeof b!=="string")H.o(H.ai(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghQ().ce(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bG(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nb:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nc:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d5:function(a){if(a>=10)return""+a
return"0"+a},
lA:function(a){return new P.be(1000*a)},
kS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ne(a)},
cX:function(a){return new P.ap(!1,null,null,a)},
kK:function(a,b,c){return new P.ap(!0,a,b,c)},
dw:function(a,b){return new P.bH(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bH(b,c,!0,a,d,"Invalid value")},
b3:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
lO:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.a_(a,0,null,b,null))},
O:function(a,b,c,d,e){var u=e==null?J.ak(b):e
return new P.fT(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iU(a)},
iR:function(a){return new P.iQ(a)},
lR:function(a){return new P.cp(a)},
aU:function(a){return new P.fh(a)},
m:function(a){return new P.e7(a)},
W:function(a,b,c){return new P.fK(a,b,c)},
nr:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
lm:function(a){H.pm(a)},
nU:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.lX(e<e?C.a.v(a,0,e):a,5,f).gep()
else if(u===32)return P.lX(C.a.v(a,5,e),0,f).gep()}t=new Array(8)
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
if(P.mj(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iD()
if(r>=0)if(P.mj(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.t(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jH(a,r,q,p,o,n,m,k)}return P.oc(a,0,e,r,q,p,o,n,m,k)},
m_:function(a){var u=P.h
return C.b.hX(H.b(a.split("&"),[u]),P.kZ(u,u),new P.iZ(C.e))},
nT:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iW(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Z(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eX(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eX(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iX(a),d=new P.iY(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Z(a,t)
if(p===58){if(t===b){++t
if(C.a.Z(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gay(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nT(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aW(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
oc:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ok(a,b,d)
else{if(d===b)P.bQ(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ol(a,u,e-1):""
s=P.oh(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.oj(P.eX(C.a.v(a,r,g),new P.jV(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oi(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.la(a,h+1,i,n):n
return new P.bP(j,t,s,q,p,o,i<c?P.og(a,i+1,c):n)},
mb:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bQ:function(a,b,c){throw H.c(P.W(c,a,b))},
oj:function(a,b){if(a!=null&&a===P.mb(b))return
return a},
oh:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Z(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.Z(a,u)!==93)P.bQ(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oe(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.mg(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lZ(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.Z(a,p)===58){s=C.a.bB(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mg(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lZ(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.on(a,b,c)},
oe:function(a,b,c){var u,t=C.a.bB(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
mg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.U(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Z(a,u)
if(r===37){q=P.lb(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.U("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bQ(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.U("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Z(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.U("")
l.a+=C.a.v(a,t,u)
l.a+=P.l9(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
on:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Z(a,u)
if(q===37){p=P.lb(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.U("")
n=C.a.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.U("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bQ(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.U("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l9(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ok:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.md(C.a.H(a,b)))P.bQ(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bQ(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.od(t?a.toLowerCase():a)},
od:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ol:function(a,b,c){return P.cM(a,b,c,C.a_,!1)},
oi:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cM(a,b,c,C.B,!0):C.j.iU(d,new P.jW(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a6(u,"/"))u="/"+u
return P.om(u,e,f)},
om:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a6(a,"/"))return P.oo(a,!u||c)
return P.op(a)},
la:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cX("Both query and queryParameters specified"))
return P.cM(a,b,c,C.l,!0)}if(d==null)return
u=new P.U("")
t.a=""
d.I(0,new P.jX(new P.jY(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
og:function(a,b,c){return P.cM(a,b,c,C.l,!0)},
lb:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Z(a,b+1)
t=C.a.Z(a,p)
s=H.kj(u)
r=H.kj(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aW(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bG(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
l9:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hl(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.H(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.H(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.cq(t,0,null)},
cM:function(a,b,c,d,e){var u=P.mf(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
mf:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.Z(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lb(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bQ(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Z(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.l9(u)}}if(m==null)m=new P.U("")
m.a+=C.a.v(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
me:function(a){if(C.a.a6(a,"."))return!0
return C.a.e5(a,"/.")!==-1},
op:function(a){var u,t,s,r,q,p,o
if(!P.me(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.A(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
oo:function(a,b){var u,t,s,r,q,p
if(!P.me(a))return!b?P.mc(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gay(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gay(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.mc(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
mc:function(a){var u,t,s,r=a.length
if(r>=2&&P.md(J.mW(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
of:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cX("Invalid URL encoding"))}}return u},
lc:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.p(C.a.v(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.c(P.cX("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cX("Truncated URI"))
r.push(P.of(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.j1(!1).ce(r)},
md:function(a){var u=a|32
return 97<=u&&u<=122},
lX:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.W(m,a,t))}}if(s<0&&t>b)throw H.c(P.W(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gay(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.c(P.W("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.i5(0,a,o,u)
else{n=P.mf(a,o,u,C.l,!0)
if(n!=null)a=C.a.b1(a,o,u,n)}return new P.iV(a,l,c)},
or:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nr(22,new P.k5(),P.bJ),n=new P.k4(o),m=new P.k6(),l=new P.k7(),k=n.$2(0,225)
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
mj:function(a,b,c,d,e){var u,t,s,r,q,p=$.mV()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.H(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aP:function aP(){},
ag:function ag(a,b){this.a=a
this.b=b},
M:function M(){},
be:function be(a){this.a=a},
fv:function fv(){},
fw:function fw(){},
bz:function bz(){},
dt:function dt(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fT:function fT(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iU:function iU(a){this.a=a},
iQ:function iQ(a){this.a=a},
cp:function cp(a){this.a=a},
fh:function fh(a){this.a=a},
hM:function hM(){},
dE:function dE(){},
fp:function fp(a){this.a=a},
e7:function e7(a){this.a=a},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(){},
w:function w(){},
i:function i(){},
fW:function fW(){},
q:function q(){},
T:function T(){},
bn:function bn(){},
ae:function ae(){},
a4:function a4(){},
h:function h(){},
U:function U(a){this.a=a},
iZ:function iZ(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
iY:function iY(a,b){this.a=a
this.b=b},
bP:function bP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jV:function jV(a,b){this.a=a
this.b=b},
jW:function jW(){},
jY:function jY(a,b){this.a=a
this.b=b},
jX:function jX(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(){},
k4:function k4(a){this.a=a},
k6:function k6(){},
k7:function k7(){},
jH:function jH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jq:function jq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
p3:function(a){var u,t=J.R(a)
if(!!t.$iaY){u=t.gdK(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eI(a.data,a.height,a.width)},
p2:function(a){if(a instanceof P.eI)return{data:a.a,height:a.b,width:a.c}
return a},
b8:function(a){var u,t,s,r,q
if(a==null)return
u=P.kZ(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
p1:function(a){var u={}
a.I(0,new P.kb(u))
return u},
jJ:function jJ(){},
jL:function jL(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
kb:function kb(a){this.a=a},
jK:function jK(a,b){this.a=a
this.b=b},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fI:function fI(){},
jw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o8:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jz:function jz(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
h1:function h1(){},
b2:function b2(){},
hK:function hK(){},
hS:function hS(){},
co:function co(){},
io:function io(){},
l:function l(){},
b4:function b4(){},
iF:function iF(){},
ec:function ec(){},
ed:function ed(){},
en:function en(){},
eo:function eo(){},
ez:function ez(){},
eA:function eA(){},
eG:function eG(){},
eH:function eH(){},
bJ:function bJ(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(a){this.a=a},
f6:function f6(){},
bt:function bt(){},
hL:function hL(){},
e_:function e_(){},
dy:function dy(){},
ii:function ii(){},
ev:function ev(){},
ew:function ew(){}},W={
lu:function(){var u=document.createElement("a")
return u},
kN:function(){var u=document.createElement("canvas")
return u},
nd:function(a,b,c){var u=document.body,t=(u&&C.r).am(u,a,b,c)
t.toString
u=new H.cA(new W.a5(t),new W.fy(),[W.E])
return u.gaO(u)},
kQ:function(a){return"wheel"},
c4:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bX(a)
t=u.gen(a)
if(typeof t==="string")r=u.gen(a)}catch(s){H.aj(s)}return r},
nf:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.aj(u)}return s},
jv:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a,b,c,d){var u=W.jv(W.jv(W.jv(W.jv(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d){var u=W.ml(new W.jt(c),W.k)
if(u!=null&&!0)J.mY(a,b,u,!1)
return new W.js(a,b,u,!1)},
m8:function(a){var u=W.lu(),t=window.location
u=new W.cC(new W.jD(u,t))
u.eK(a)
return u},
o4:function(a,b,c,d){return!0},
o5:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
ma:function(){var u=P.h,t=P.lF(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jQ(t,P.cc(u),P.cc(u),P.cc(u),null)
t.eN(null,new H.he(C.o,new W.jR(),[H.aQ(C.o,0),u]),s,null)
return t},
ml:function(a,b){var u=$.av
if(u===C.f)return a
return u.dF(a,b)},
r:function r(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
bu:function bu(){},
bv:function bv(){},
bx:function bx(){},
bd:function bd(){},
fl:function fl(){},
J:function J(){},
c3:function c3(){},
fm:function fm(){},
al:function al(){},
az:function az(){},
fn:function fn(){},
fo:function fo(){},
fr:function fr(){},
aq:function aq(){},
fs:function fs(){},
d7:function d7(){},
d8:function d8(){},
ft:function ft(){},
fu:function fu(){},
jo:function jo(a,b){this.a=a
this.b=b},
S:function S(){},
fy:function fy(){},
k:function k(){},
f:function f(){},
ar:function ar(){},
c6:function c6(){},
fF:function fF(){},
fJ:function fJ(){},
aA:function aA(){},
fP:function fP(){},
c8:function c8(){},
aY:function aY(){},
c9:function c9(){},
bC:function bC(){},
h8:function h8(){},
hu:function hu(){},
cg:function cg(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
hx:function hx(){},
hy:function hy(a){this.a=a},
aD:function aD(){},
hz:function hz(){},
aE:function aE(){},
a5:function a5(a){this.a=a},
E:function E(){},
dr:function dr(){},
aF:function aF(){},
hP:function hP(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
i2:function i2(){},
aI:function aI(){},
ie:function ie(){},
aJ:function aJ(){},
ig:function ig(){},
aK:function aK(){},
ik:function ik(){},
il:function il(a){this.a=a},
at:function at(){},
dH:function dH(){},
ip:function ip(){},
iq:function iq(){},
cr:function cr(){},
aL:function aL(){},
au:function au(){},
it:function it(){},
iu:function iu(){},
iz:function iz(){},
aM:function aM(){},
bI:function bI(){},
iD:function iD(){},
iE:function iE(){},
bo:function bo(){},
j_:function j_(){},
jh:function jh(){},
bq:function bq(){},
cB:function cB(){},
jp:function jp(){},
e1:function e1(){},
ju:function ju(){},
ek:function ek(){},
jI:function jI(){},
jN:function jN(){},
jn:function jn(){},
jr:function jr(a){this.a=a},
js:function js(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jt:function jt(a){this.a=a},
cC:function cC(a){this.a=a},
N:function N(){},
ds:function ds(a){this.a=a},
hH:function hH(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(){},
jF:function jF(){},
jG:function jG(){},
jQ:function jQ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jR:function jR(){},
jO:function jO(){},
db:function db(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
b1:function b1(){},
jD:function jD(a,b){this.a=a
this.b=b},
eL:function eL(a){this.a=a},
k0:function k0(a){this.a=a},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
cI:function cI(){},
cJ:function cJ(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
eB:function eB(){},
eC:function eC(){},
cK:function cK(){},
cL:function cL(){},
eE:function eE(){},
eF:function eF(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){}},K={
P:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.m("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.H(a,0)
t=C.a.H(b,0)
if(u>t){s=t
t=u
u=s}return new K.hV(u,t)},
v:function(a){var u=new K.i3()
u.eI(a)
return u},
aS:function aS(){},
dc:function dc(){},
bl:function bl(){},
aa:function aa(){this.a=null},
hV:function hV(a,b){this.a=a
this.b=b},
i3:function i3(){this.a=null}},L={
iB:function(){var u=new L.iA(),t=P.h
u.a=new H.K([t,L.dF])
u.b=new H.K([t,L.dN])
u.c=P.cc(t)
return u},
dF:function dF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.b=a
this.c=null},
iA:function iA(){var _=this
_.d=_.c=_.b=_.a=null},
dP:function dP(a){this.b=a
this.a=this.c=null}},O={
kO:function(a){var u=new O.aT([a])
u.bp(a)
return u},
aT:function aT(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cf:function cf(){this.b=this.a=null},
dl:function dl(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(){},
hg:function hg(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ce:function ce(){},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aB:function aB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hj:function hj(){var _=this
_.e=_.d=_.c=_.b=null},
hk:function hk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hl:function hl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dB:function dB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dI:function dI(){}},E={
lD:function(){var u,t=new E.aW()
t.a=""
t.b=!0
u=O.kO(E.aW)
t.y=u
u.b3(t.gi6(),t.gi9())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa9(0,null)
return t},
m6:function(){if(J.kJ(window.navigator.vendor,"Google"))return C.H
if(J.kJ(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.aw(u).G(u,"Trident")||C.a.G(u,"Edge"))return C.u
if(J.kJ(window.navigator.appName,"Microsoft"))return C.u
return C.I},
m7:function(){var u=window.navigator.appVersion
if(J.aw(u).G(u,"Win"))return C.a2
if(C.a.G(u,"Mac"))return C.C
if(C.a.G(u,"Linux"))return C.a3
return C.a4},
nK:function(a,b){var u=new E.hW(a)
u.eH(a,b)
return u},
nR:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibx)return E.lT(a,!0,!0,!0,!1)
u=W.kN()
t=u.style
t.width="100%"
t.height="100%"
s.gcc(a).n(0,u)
return E.lT(u,!0,!0,!0,!1)},
lT:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dK(),o=C.i.cO(a,"webgl2",P.np(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.o(P.m("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nK(o,a)
u=new T.iw(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dT(a)
t=new X.h0()
t.c=new X.am(!1,!1,!1)
t.d=P.cc(P.w)
u.b=t
t=new X.hA(u)
t.f=0
t.r=V.aG()
t.x=V.aG()
t.ch=t.Q=1
u.c=t
t=new X.h9(u)
t.r=0
t.x=V.aG()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iC(u)
t.f=V.aG()
t.r=V.aG()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dG,P.a4]])
t=$.fA
u.Q=(t==null?$.fA=new E.e6(E.m6(),E.m7()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.a0(r,"contextmenu",u.gfs(),!1))
u.z.push(W.a0(a,"focus",u.gfA(),!1))
u.z.push(W.a0(a,"blur",u.gfj(),!1))
u.z.push(W.a0(r,"keyup",u.gfE(),!1))
u.z.push(W.a0(r,"keydown",u.gfC(),!1))
u.z.push(W.a0(a,"mousedown",u.gfI(),!1))
u.z.push(W.a0(a,"mouseup",u.gfM(),!1))
u.z.push(W.a0(a,q,u.gfK(),!1))
s=u.z
W.kQ(a)
W.kQ(a)
s.push(W.a0(a,W.kQ(a),u.gfO(),!1))
u.z.push(W.a0(r,q,u.gfu(),!1))
u.z.push(W.a0(r,"mouseup",u.gfw(),!1))
u.z.push(W.a0(r,"pointerlockchange",u.gfQ(),!1))
u.z.push(W.a0(a,"touchstart",u.gh5(),!1))
u.z.push(W.a0(a,"touchend",u.gh1(),!1))
u.z.push(W.a0(a,"touchmove",u.gh3(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ag(Date.now(),!1)
p.db=0
p.dh()
return p},
fa:function fa(){},
aW:function aW(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bw:function bw(a){this.b=a},
bE:function bE(a){this.b=a},
e6:function e6(a,b){this.a=a
this.b=b},
hW:function hW(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
dK:function dK(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iy:function iy(a){this.a=a}},Z={
l7:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bR(c)),35044)
a.bindBuffer(b,null)
return new Z.dX(b,u)},
ao:function(a){return new Z.b7(a)},
dX:function dX(a,b){this.a=a
this.b=b},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dY:function dY(a){this.a=a},
c1:function c1(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
G:function(){var u=new D.bA()
u.d=0
return u},
fd:function fd(){},
bA:function bA(){var _=this
_.d=_.c=_.b=_.a=null},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
Z:function Z(){this.b=null},
bf:function bf(){this.b=null},
bg:function bg(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f7:function f7(){},
by:function by(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){},
di:function di(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hQ:function hQ(){},
ih:function ih(){}},X={d0:function d0(a,b){this.a=a
this.b=b},dh:function dh(a,b){this.a=a
this.b=b},h0:function h0(){var _=this
_.d=_.c=_.b=_.a=null},dk:function dk(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h9:function h9(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},b0:function b0(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hA:function hA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ch:function ch(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hR:function hR(){},dO:function dO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iC:function iC(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dT:function dT(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kT:function(a){var u=new X.fL(),t=new V.af(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lQ
if(t==null){t=V.lP(0,0,1,1)
$.lQ=t}u.r=t
return u},
lJ:function(a){var u,t,s=new X.du()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().n(0,s.gfl())
t=new D.C("mover",u,s.b)
t.b=!0
s.au(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.D().a)){s.c=1.0471975511965976
t=new D.C("fov",t,1.0471975511965976)
t.b=!0
s.au(t)}t=s.d
if(!(Math.abs(t-0.1)<$.D().a)){s.d=0.1
t=new D.C("near",t,0.1)
t.b=!0
s.au(t)}t=s.e
if(!(Math.abs(t-2000)<$.D().a)){s.e=2000
t=new D.C("far",t,2000)
t.b=!0
s.au(t)}return s},
kM:function kM(){},
fL:function fL(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){this.b=this.a=null},
du:function du(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ir:function ir(){}},V={
ff:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.af(u,t,s,1)},
pu:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bn(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.ao("null",c)
return C.a.ao(C.d.eo(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
bW:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ao(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
ll:function(a){return C.d.ix(Math.pow(2,C.W.cr(Math.log(H.p0(a))/Math.log(2))))},
bD:function(){var u=$.lH
return u==null?$.lH=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lG:function(a,b,c){var u=c.p(0,Math.sqrt(c.A(c))),t=b.aE(u),s=t.p(0,Math.sqrt(t.A(t))),r=u.aE(s),q=new V.x(a.a,a.b,a.c),p=s.V(0).A(q),o=r.V(0).A(q),n=u.V(0).A(q)
return V.aC(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aG:function(){var u=$.lL
return u==null?$.lL=new V.X(0,0):u},
l1:function(){var u=$.aH
return u==null?$.aH=new V.H(0,0,0):u},
lP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dx(a,b,c,d)},
cy:function(){var u=$.m3
return u==null?$.m3=new V.x(0,0,0):u},
o_:function(){var u=$.j3
return u==null?$.j3=new V.x(-1,0,0):u},
l6:function(){var u=$.j4
return u==null?$.j4=new V.x(0,1,0):u},
m4:function(){var u=$.j5
return u==null?$.j5=new V.x(0,0,1):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fB:function fB(a){this.a=a},
dm:function dm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b_:function b_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pp:function(a){P.nS(C.T,new V.kB(a))},
nM:function(a){var u=new V.i8()
u.eJ(a,!0)
return u},
d1:function d1(){},
kB:function kB(a){this.a=a},
fq:function fq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hO:function hO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hT:function hT(a){this.a=a
this.c=null},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i8:function i8(){this.b=this.a=null},
ia:function ia(a){this.a=a},
i9:function i9(a){this.a=a},
ib:function ib(a){this.a=a}},U={
kP:function(){var u=new U.fg()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lz:function(a){var u=new U.d3()
u.a=a
return u},
fg:function fg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){this.b=this.a=null},
c7:function c7(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dW:function dW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d2:function d2(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},d4:function d4(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d9:function d9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},as:function as(){}},A={
nt:function(a,b){var u=a.aF,t=new A.hf(b,u)
t.cW(b,u)
t.eG(a,b)
return t},
nu:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+b0.gas(b0)+b1.gas(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.n)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.n)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.n)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(q=b4.length,t=0;t<q;++t,r=!0)s+=b4[t].b
for(p=b5.length,t=0;t<p;++t,r=!0)s+=b5[t].b
if(!a9.a)p=a9.c
else p=!0
if(!p)if(!b0.a){p=b0.c
o=p}else o=!0
else o=!0
n=u>0
if(!a4.a)u=a4.c
else u=!0
if(!u){if(!a5.a)u=a5.c
else u=!0
if(!u){if(!a6.a)u=a6.c
else u=!0
if(!u)if(!a7.a)u=a7.c
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a7.a
if(u)p=a7.c
else p=!0
l=p||n||q>0||o
if(!a5.a)q=a5.c
else q=!0
if(!q){if(!a6.a)q=a6.c
else q=!0
if(!q){if(u)u=a7.c
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a8.a)u=a8.c
else u=!0
j=u||o}else j=!0
if(!a8.a)i=a8.c
else i=!0
h=a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c
g=a2>0
f=j||i||l||!1
e=n&&k
b=b&&h
d=$.ax()
if(j){u=$.bb()
d=new Z.b7(d.a|u.a)}if(i){u=$.ba()
d=new Z.b7(d.a|u.a)}if(h){u=$.bc()
d=new Z.b7(d.a|u.a)}if(g){u=$.b9()
d=new Z.b7(d.a|u.a)}return new A.hi(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k8:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
k9:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.k8(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eY(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
oA:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k8(b,t,"emission")
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
ow:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k9(b,t,"ambient")
b.a+="\n"},
oy:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k9(b,t,"diffuse")
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
oB:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k9(b,t,"invDiffuse")
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
oH:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k9(b,t,"specular")
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
oD:function(a,b){var u,t,s
if(!a.k4)return
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
oF:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k8(b,t,"reflect")
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
oG:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k8(b,t,"refract")
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
ox:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eY(t)
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
if(typeof u!=="number")return u.ae()
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
u=a.b
if(!u.a)u=u.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)p.push("diffuse(norm, normDir)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
u=a.e
if(!u.a)u=u.c
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
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eY(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
oE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eY(t)
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
if(typeof u!=="number")return u.ae()
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
o=a.b
if(!o.a)o=o.c
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
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
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
oI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eY(t)
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
if(typeof u!=="number")return u.ae()
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.fA
if(u==null)u=$.fA=new E.e6(E.m6(),E.m7())
r=c.a
if(u.b===C.C){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=u
u=c.a=u+"   float angle = atan(crossMag, zScale);\n"}else u=c.a=r+"   float angle = acos(zScale);\n"
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
r=a.b
if(!r.a)r=r.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
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
oC:function(a,b){var u,t
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
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oJ:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.U("")
i.a="precision mediump float;\n"
i.a=k
u=a.k4
if(u){i.a=j
t=j}else t=k
if(a.r1){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
i.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k2){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k3?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
i.a=t}if(a.dy)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.oA(a,i)
A.ow(a,i)
A.oy(a,i)
A.oB(a,i)
A.oH(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.oF(a,i)
A.oG(a,i)}A.oD(a,i)
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
r=a.k1
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.ox(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.oz(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.oE(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.oI(a,q[n],i)
A.oC(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.h])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oK:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bz+"];\n"
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
oM:function(a,b){var u
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
oL:function(a,b){var u
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
oO:function(a,b){var u,t
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
oP:function(a,b){var u,t
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
oN:function(a,b){var u
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
oQ:function(a,b){var u
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
eY:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ab(a,1)},
l3:function(a,b,c,d,e){var u=new A.iJ(a,c,e)
u.f=d
P.nq(d,0,P.w)
return u},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a,b){var _=this
_.dO=_.iL=_.bA=_.aF=_.bz=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iT=_.iS=_.iR=_.cp=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.ci=_.e_=_.iQ=_.dZ=_.dY=_.iP=_.dX=_.dW=_.dV=_.iO=_.dU=_.dT=_.dS=_.iN=_.dR=_.dQ=_.iM=_.dP=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cZ:function cZ(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
dD:function dD(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bz=b3
_.aF=b4
_.bA=b5},
ct:function ct(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cu:function cu(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cw:function cw(a,b,c,d,e,f,g,h,i,j){var _=this
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
cx:function cx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dz:function dz(){},
id:function id(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dQ:function dQ(){},
iO:function iO(a){this.a=a},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
cs:function cs(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
cv:function cv(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bK:function bK(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lg:function(a,b,c,d){var u=F.dA()
F.cN(u,b,c,d,a,1,0,0,1)
F.cN(u,b,c,d,a,0,1,0,3)
F.cN(u,b,c,d,a,0,0,1,2)
F.cN(u,b,c,d,a,-1,0,0,0)
F.cN(u,b,c,d,a,0,-1,0,0)
F.cN(u,b,c,d,a,0,0,-1,3)
u.ak()
return u},
k3:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cN:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.x(h,g+a1,f+a2)
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
j.d=i}m=F.k3(i)
l=F.k3(h)
k=F.kF(d,a0,new F.k2(j,F.k3(g),F.k3(f),l,m,c),b)
if(k!=null)a.b0(k)},
mq:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.dA()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.b6])
q=u.a
p=new V.x(0,0,t)
p=p.p(0,Math.sqrt(p.A(p)))
r.push(q.hv(new V.an(a,-1,-1,-1),new V.af(1,1,1,1),new V.H(0,0,c),new V.x(0,0,t),new V.X(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.x(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bM(new V.an(a,-1,-1,-1),null,new V.af(i,g,h,1),new V.H(m*k,l*k,c),new V.x(0,0,t),new V.X(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.du(r)
return u},
mo:function(a,b,c){return F.p4(!0,a,1,new F.kc(1,c),b)},
p4:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kF(c,e,new F.ke(d),null)
if(u==null)return
u.ak()
u.bx()
if(b)u.b0(F.mq(3,!1,1,new F.kf(d),e))
u.b0(F.mq(1,!0,-1,new F.kg(d),e))
return u},
pj:function(a,b){var u=F.kF(a,b,new F.kp(),null)
u.d.bI()
u.ak()
u.bx()
return u},
a6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.A(b)))
u=b.a
t=b.b
s=b.c
r=F.bM(j,j,j,new V.H(u,t,s),b,j,j,j,0)
q=a.hS(r,new F.cz())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sal(0,new V.af(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scJ(new V.X(l,k<0?-k:k))
a.a.n(0,r)
return r},
Q:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bv(0,b,d,c)
else{u=F.a6(a,b.r.B(0,c.r).t(0,0.5))
t=F.a6(a,c.r.B(0,d.r).t(0,0.5))
s=F.a6(a,d.r.B(0,b.r).t(0,0.5))
r=e-1
F.Q(a,b,u,s,r)
F.Q(a,u,c,t,r)
F.Q(a,t,s,u,r)
F.Q(a,s,t,d,r)}},
mz:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kC()
t=F.lg(a,null,new F.kD(s,1),b)
t.bx()
return t},
ps:function(){return F.mp(15,30,0.5,1,new F.kG())},
pi:function(){return F.mp(12,120,0.3,1,new F.ko(3,2))},
mp:function(a,b,c,d,e){var u=F.kF(a,b,new F.kd(e,d,b,c),null)
if(u==null)return
u.ak()
u.bx()
return u},
kF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.dA()
t=H.b([],[F.b6])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bM(g,g,new V.af(p,0,0,1),g,g,new V.X(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.cf(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bM(g,g,new V.af(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.cf(d))}}u.d.hu(a+1,b+1,t)
return u},
c5:function(a,b,c){var u=new F.aX(),t=a.a
if(t==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.m("May not create a face with vertices attached to different shapes."))
u.bs(a)
u.bt(b)
u.dk(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
nm:function(a,b){var u=new F.cb(),t=a.a
if(t==null)H.o(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.m("May not create a line with vertices attached to different shapes."))
u.bs(a)
u.bt(b)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
dA:function(){var u=new F.i4(),t=new F.j6(u)
t.b=!1
t.c=H.b([],[F.b6])
u.a=t
t=new F.i7(u)
t.b=H.b([],[F.cl])
u.b=t
t=new F.i6(u)
t.b=H.b([],[F.cb])
u.c=t
t=new F.i5(u)
t.b=H.b([],[F.aX])
u.d=t
u.e=null
return u},
bM:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b6(),r=new F.je()
r.b=H.b([],[F.cl])
s.b=r
r=new F.jb()
u=[F.cb]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j7()
u=[F.aX]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mP()
s.e=0
r=$.ax()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bb().a)!==0?e:t
s.x=(u&$.ba().a)!==0?b:t
s.y=(u&$.bs().a)!==0?f:t
s.z=(u&$.bc().a)!==0?g:t
s.Q=(u&$.mQ().a)!==0?c:t
s.ch=(u&$.bY().a)!==0?i:0
s.cx=(u&$.b9().a)!==0?a:t
return s},
k2:function k2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kc:function kc(a,b){this.a=a
this.b=b},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kp:function kp(){},
kC:function kC(){},
kD:function kD(a,b){this.a=a
this.b=b},
kG:function kG(){},
ko:function ko(a,b){this.a=a
this.b=b},
kd:function kd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aX:function aX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(){},
ic:function ic(){},
cb:function cb(){this.b=this.a=null},
h2:function h2(){},
iI:function iI(){},
cl:function cl(){this.a=null},
i4:function i4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){this.a=a
this.b=null},
i6:function i6(a){this.a=a
this.b=null},
i7:function i7(a){this.a=a
this.b=null},
b6:function b6(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jg:function jg(a){this.a=a},
jf:function jf(a){this.a=a},
j6:function j6(a){this.a=a
this.c=this.b=null},
j7:function j7(){this.d=this.c=this.b=null},
j8:function j8(a,b){this.a=a
this.b=b},
j9:function j9(a,b){this.a=a
this.b=b},
jb:function jb(){this.c=this.b=null},
jc:function jc(){},
cz:function cz(){},
jd:function jd(){},
ja:function ja(){},
hI:function hI(){},
je:function je(){this.b=null}},T={dJ:function dJ(){},iv:function iv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iw:function iw(a){var _=this
_.a=a
_.e=_.d=_.c=null},ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.nM("Test 017"),b0=W.kN()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0)
u=[P.h]
a9.dw(H.b(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],u))
a9.hs(H.b(["shapes"],u))
a9.dw(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a6)
if(t==null)H.o(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.nR(t,!0,!0,!0,!1)
r=E.lD()
r.sa9(0,F.mz(8,8))
q=X.kT(a7)
if(q.b){q.b=!1
p=new D.C("clearColor",!0,!1)
p.b=!0
q.au(p)}o=s.f.eb("../resources/maskonaive",".jpg")
n=s.f.ea("../resources/earthSpecular")
m=s.f.ea("../resources/earthColor")
l=new O.dl()
p=O.kO(V.b_)
l.e=p
p.b3(l.gff(),l.gfh())
p=new O.aB(l,"emission")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.f=p
p=new O.aB(l,"ambient")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.r=p
p=new O.aB(l,"diffuse")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.x=p
p=new O.aB(l,"invDiffuse")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.y=p
p=new O.hl(l,"specular")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
p.ch=100
l.z=p
p=new O.hh(l,"bump")
p.c=new A.a2(!1,!1,!1)
l.Q=p
l.ch=null
p=new O.aB(l,"reflect")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.cx=p
p=new O.hk(l,"refract")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
p.ch=1
l.cy=p
p=new O.hg(l,"alpha")
p.c=new A.a2(!1,!1,!1)
p.f=1
l.db=p
p=new D.di()
p.bp(D.a9)
p.e=H.b([],[D.f7])
p.f=H.b([],[D.by])
p.r=H.b([],[D.hQ])
p.x=H.b([],[D.ih])
p.z=p.y=null
p.cQ(p.gfd(),p.gfS(),p.gfW())
l.dx=p
k=new O.hj()
k.b=new V.af(0,0,0,0)
k.c=1
k.d=10
k.e=!1
l.dy=k
k=p.y
p=k==null?p.y=D.G():k
p.n(0,l.ghd())
p=l.dx
k=p.z
p=k==null?p.z=D.G():k
k=l.gaR()
p.n(0,k)
l.fr=null
p=l.dx
j=V.l6()
i=U.lz(V.lG(V.l1(),j,new V.x(-1,-1,-1)))
h=new V.Y(1,1,1)
g=new D.by()
g.c=new V.Y(1,1,1)
g.a=V.m4()
g.d=V.l6()
g.e=V.o_()
f=g.b
g.b=i
i.gq().n(0,g.geL())
i=new D.C("mover",f,g.b)
i.b=!0
g.aA(i)
if(!g.c.u(0,h)){f=g.c
g.c=h
i=new D.C("color",f,h)
i.b=!0
g.aA(i)}p.n(0,g)
p=l.r
p.sal(0,new V.Y(0.5,0.5,0.5))
p=l.x
p.sal(0,new V.Y(0.5,0.5,0.5))
l.r.saq(m)
l.x.saq(m)
l.z.saq(n)
p=l.ch
if(p!==o){if(p!=null)p.gq().D(0,k)
f=l.ch
l.ch=o
o.gq().n(0,k)
p=new D.C("environment",f,l.ch)
p.b=!0
l.Y(p)}l.cx.saq(n)
p=l.cx
p.sal(0,new V.Y(0.5,0.5,0.5))
p=l.z
p.c6(new A.a2(!0,!1,p.c.c))
p.dj(10)
e=new U.c7()
e.bp(U.ah)
e.b3(e.gfb(),e.gfU())
e.e=null
e.f=V.bD()
e.r=0
p=s.x
k=new U.dV()
i=U.kP()
i.scN(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa_(0,0)
i.scw(100)
i.sX(0)
i.scg(0.5)
k.b=i
g=k.gaQ()
i.gq().n(0,g)
i=U.kP()
i.scN(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa_(0,0)
i.scw(100)
i.sX(0)
i.scg(0.5)
k.c=i
i.gq().n(0,g)
k.d=null
k.r=k.f=k.e=!1
k.y=k.x=2.5
k.Q=4
k.ch=k.cx=!1
k.db=k.cy=0
k.dx=null
k.dy=0
k.fx=k.fr=null
d=new X.am(!1,!1,!1)
f=k.d
k.d=d
i=new D.C(a8,f,d)
i.b=!0
k.U(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.C("invertX",i,!1)
i.b=!0
k.U(i)}i=k.r
if(i!==!1){k.r=!1
i=new D.C("invertY",i,!1)
i.b=!0
k.U(i)}k.bb(p)
e.n(0,k)
p=s.x
k=new U.dU()
i=U.kP()
i.scN(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa_(0,0)
i.scw(100)
i.sX(0)
i.scg(0.2)
k.b=i
i.gq().n(0,k.gaQ())
k.c=null
k.d=!1
k.e=2.5
k.r=4
k.x=k.y=!1
k.z=0
k.Q=null
k.ch=0
k.cy=k.cx=null
d=new X.am(!0,!1,!1)
f=k.c
k.c=d
i=new D.C(a8,f,d)
i.b=!0
k.U(i)
k.bb(p)
e.n(0,k)
p=s.x
k=new U.dW()
k.c=0.01
k.e=k.d=0
d=new X.am(!1,!1,!1)
k.b=d
i=new D.C(a8,a7,d)
i.b=!0
k.U(i)
k.bb(p)
e.n(0,k)
e.n(0,U.lz(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lJ(e)
b=new M.d4()
b.a=!0
p=E.lD()
a=F.dA()
k=a.a
i=new V.x(-1,-1,1)
i=i.p(0,Math.sqrt(i.A(i)))
a0=k.bw(new V.an(1,2,4,6),V.ff(255,0,0),new V.H(-1,-1,0),new V.X(0,1),i,a7)
i=a.a
k=new V.x(1,-1,1)
k=k.p(0,Math.sqrt(k.A(k)))
a1=i.bw(new V.an(0,3,4,6),V.ff(0,0,255),new V.H(1,-1,0),new V.X(1,1),k,a7)
k=a.a
i=new V.x(1,1,1)
i=i.p(0,Math.sqrt(i.A(i)))
a2=k.bw(new V.an(0,2,5,6),V.ff(0,128,0),new V.H(1,1,0),new V.X(1,0),i,a7)
i=a.a
k=V.aG()
g=new V.x(-1,1,1)
g=g.p(0,Math.sqrt(g.A(g)))
a3=i.bw(new V.an(0,2,4,7),V.ff(255,255,0),new V.H(-1,1,0),k,g,a7)
a.d.du(H.b([a0,a1,a2,a3],[F.b6]))
a.ak()
p.sa9(0,a)
b.e=p
b.sbc(a7)
b.sbj(0,a7)
b.sbk(a7)
p=new O.dB()
p.b=1.0471975511965976
p.d=new V.Y(1,1,1)
f=p.c
p.c=o
o.gq().n(0,p.gaR())
k=new D.C("boxTexture",f,p.c)
k.b=!0
p.Y(k)
b.sbk(p)
b.sbj(0,q)
b.sbc(c)
a4=new M.d9()
a4.a=!0
p=O.kO(E.aW)
a4.e=p
p.b3(a4.gfn(),a4.gfp())
a4.y=a4.x=a4.r=a4.f=null
a5=X.kT(a7)
a4.sbc(a7)
a4.sbj(0,a5)
a4.sbk(a7)
a4.sbc(c)
a4.sbk(l)
a4.sbj(0,q)
a4.e.n(0,r)
p=M.as
k=H.b([b,a4],[p])
i=new M.d2()
i.bp(p)
i.e=!0
i.f=!1
i.r=null
i.b3(i.gfY(),i.gh_())
i.a8(0,k)
p=s.d
if(p!==i){if(p!=null)p.gq().D(0,s.gcY())
s.d=i
i.gq().n(0,s.gcY())
s.cZ()}p=new V.hT("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.o("Failed to find shapes for RadioGroup")
p.av(0,"Cube",new T.kq(r))
p.av(0,"Cuboid",new T.kr(r))
p.av(0,"Cylinder",new T.ks(r))
p.av(0,"Cone",new T.kt(r))
p.av(0,"LatLonSphere",new T.ku(r))
p.av(0,"IsoSphere",new T.kv(r))
p.bv(0,"Sphere",new T.kw(r),!0)
p.av(0,"Toroid",new T.kx(r))
p.av(0,"Knot",new T.ky(r))
u=s.Q
if(u==null)u=s.Q=D.G()
p=u.b
u=p==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):p
u.push(new T.kz(a9,l))
V.pp(s)},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kX.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gK:function(a){return H.cm(a)},
i:function(a){return"Instance of '"+H.e(H.cn(a))+"'"}}
J.fX.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iaP:1}
J.df.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dg.prototype={
gK:function(a){return 0},
i:function(a){return String(a)},
$ink:1}
J.hN.prototype={}
J.bL.prototype={}
J.bj.prototype={
i:function(a){var u=a[$.mD()]
if(u==null)return this.eD(a)
return"JavaScript function for "+H.e(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bh.prototype={
cG:function(a,b){if(!!a.fixed$length)H.o(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dw(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.o(P.z("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
a8:function(a,b){var u,t
if(!!a.fixed$length)H.o(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aU(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
i3:function(a){return this.j(a,"")},
hW:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aU(a))}return u},
hX:function(a,b,c){return this.hW(a,b,c,null)},
hV:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aU(a))}throw H.c(H.fV())},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ez:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aQ(a,0)])
return H.b(a.slice(b,c),[H.aQ(a,0)])},
ghU:function(a){if(a.length>0)return a[0]
throw H.c(H.fV())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fV())},
dA:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aU(a))}return!1},
b5:function(a,b){if(!!a.immutable$list)H.o(P.z("sort"))
H.nP(a,b==null?J.ot():b)},
ey:function(a){return this.b5(a,null)},
G:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
i:function(a){return P.kU(a,"[","]")},
gS:function(a){return new J.a8(a,a.length)},
gK:function(a){return H.cm(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.o(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kK(b,u,null))
if(b<0)throw H.c(P.a_(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bV(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.o(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bV(a,b))
a[b]=c},
$iu:1,
$ii:1,
$iq:1}
J.kW.prototype={}
J.a8.prototype={
gF:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.ca.prototype={
aZ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ai(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbC(b)
if(this.gbC(a)===u)return 0
if(this.gbC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbC:function(a){return a===0?1/a<0:a<0},
ix:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
cr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
eo:function(a,b){var u
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbC(a))return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.o(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hl:function(a,b){if(b<0)throw H.c(H.ai(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iae:1}
J.de.prototype={$iw:1}
J.dd.prototype={}
J.bi.prototype={
Z:function(a,b){if(b<0)throw H.c(H.bV(a,b))
if(b>=a.length)H.o(H.bV(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bV(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kK(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.b3(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.o(H.ai(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.dw(b,null))
if(b>c)throw H.c(P.dw(b,null))
if(c>a.length)throw H.c(P.dw(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.v(a,b,null)},
iz:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
bB:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e5:function(a,b){return this.bB(a,b,0)},
hC:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.a_(c,0,u,null,null))
return H.mA(a,b,c)},
G:function(a,b){return this.hC(a,b,0)},
aZ:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ai(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ih:1}
H.p.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Z(this.a,b)},
$au:function(){return[P.w]},
$ay:function(){return[P.w]},
$ai:function(){return[P.w]},
$aq:function(){return[P.w]}}
H.u.prototype={}
H.dj.prototype={
gS:function(a){return new H.bk(this,this.gl(this))},
bM:function(a,b){return this.eC(0,b)}}
H.bk.prototype={
gF:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.aw(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aU(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.M(s,u);++t.c
return!0}}
H.cd.prototype={
gS:function(a){return new H.hd(J.aR(this.a),this.b)},
gl:function(a){return J.ak(this.a)},
M:function(a,b){return this.b.$1(J.eZ(this.a,b))},
$ai:function(a,b){return[b]}}
H.fx.prototype={$iu:1,
$au:function(a,b){return[b]}}
H.hd.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gF(t))
return!0}u.a=null
return!1},
gF:function(a){return this.a}}
H.he.prototype={
gl:function(a){return J.ak(this.a)},
M:function(a,b){return this.b.$1(J.eZ(this.a,b))},
$au:function(a,b){return[b]},
$adj:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cA.prototype={
gS:function(a){return new H.ji(J.aR(this.a),this.b)}}
H.ji.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.da.prototype={}
H.iT.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dR.prototype={}
H.fi.prototype={
i:function(a){return P.l0(this)},
m:function(a,b,c){return H.na()},
$iT:1}
H.fj.prototype={
gl:function(a){return this.a},
cd:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cd(0,b))return
return this.d7(b)},
d7:function(a){return this.b[a]},
I:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d7(s))}}}
H.iG.prototype={
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
H.hJ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h_.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iS.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kH.prototype={
$1:function(a){if(!!J.R(a).$ibz)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ex.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c2.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cS(t==null?"unknown":t)+"'"},
giC:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.is.prototype={}
H.ij.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cS(u)+"'"}}
H.c_.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c_))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cm(this.a)
else u=typeof t!=="object"?J.cW(t):H.cm(t)
return(u^H.cm(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cn(u))+"'")}}
H.fc.prototype={
i:function(a){return this.a}}
H.i1.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.K.prototype={
gl:function(a){return this.a},
gi2:function(a){return this.a===0},
ga3:function(a){return new H.h4(this,[H.aQ(this,0)])},
giB:function(a){var u=this
return H.ns(u.ga3(u),new H.fZ(u),H.aQ(u,0),H.aQ(u,1))},
cd:function(a,b){var u=this.b
if(u==null)return!1
return this.eY(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.i0(b)},
i0:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.d9(r,s.e7(a))
t=s.e8(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.d0(u==null?s.b=s.c1():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d0(t==null?s.c=s.c1():t,b,c)}else s.i1(b,c)},
i1:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.c1()
u=r.e7(a)
t=r.d9(q,u)
if(t==null)r.c7(q,u,[r.c2(a,b)])
else{s=r.e8(t,a)
if(s>=0)t[s].b=b
else t.push(r.c2(a,b))}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aU(u))
t=t.c}},
d0:function(a,b,c){var u=this.bq(a,b)
if(u==null)this.c7(a,b,this.c2(b,c))
else u.b=c},
f8:function(){this.r=this.r+1&67108863},
c2:function(a,b){var u,t=this,s=new H.h3(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f8()
return s},
e7:function(a){return J.cW(a)&0x3ffffff},
e8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
i:function(a){return P.l0(this)},
bq:function(a,b){return a[b]},
d9:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
eY:function(a,b){return this.bq(a,b)!=null},
c1:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c7(t,u,t)
this.f1(t,u)
return t}}
H.fZ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aQ(u,1),args:[H.aQ(u,0)]}}}
H.h3.prototype={}
H.h4.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.h5(u,u.r)
t.c=u.e
return t}}
H.h5.prototype={
gF:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aU(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kk.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.kl.prototype={
$2:function(a,b){return this.a(a,b)}}
H.km.prototype={
$1:function(a){return this.a(a)}}
H.fY.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inI:1}
H.ci.prototype={$ici:1}
H.bm.prototype={$ibm:1}
H.dn.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.cj.prototype={
h:function(a,b){H.aO(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aO(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.M]},
$ay:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]},
$iq:1,
$aq:function(){return[P.M]}}
H.dp.prototype={
m:function(a,b,c){H.aO(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.w]},
$ay:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
H.hB.prototype={
h:function(a,b){H.aO(b,a,a.length)
return a[b]}}
H.hC.prototype={
h:function(a,b){H.aO(b,a,a.length)
return a[b]}}
H.hD.prototype={
h:function(a,b){H.aO(b,a,a.length)
return a[b]}}
H.hE.prototype={
h:function(a,b){H.aO(b,a,a.length)
return a[b]}}
H.hF.prototype={
h:function(a,b){H.aO(b,a,a.length)
return a[b]}}
H.dq.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aO(b,a,a.length)
return a[b]}}
H.ck.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aO(b,a,a.length)
return a[b]},
$ick:1,
$ibJ:1}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
H.cH.prototype={}
P.jk.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jj.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jl.prototype={
$0:function(){this.a.$0()}}
P.jm.prototype={
$0:function(){this.a.$0()}}
P.eD.prototype={
eO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bU(new P.jT(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bU(new P.jS(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idL:1}
P.jT.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jS.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eF(u,q)}s.c=r
t.d.$1(s)}}
P.bN.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bO.prototype={
gF:function(a){var u=this.c
if(u==null)return this.b
return u.gF(u)},
w:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.w())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bN){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aR(u)
if(!!r.$ibO){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jP.prototype={
gS:function(a){return new P.bO(this.a())}}
P.dZ.prototype={}
P.dG.prototype={}
P.im.prototype={}
P.dL.prototype={}
P.k1.prototype={}
P.ka.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dt():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jA.prototype={
it:function(a){var u,t,s,r=null
try{if(C.f===$.av){a.$0()
return}P.oS(r,r,this,a)}catch(s){u=H.aj(s)
t=H.li(s)
P.mi(r,r,this,u,t)}},
iu:function(a,b){var u,t,s,r=null
try{if(C.f===$.av){a.$1(b)
return}P.oT(r,r,this,a,b)}catch(s){u=H.aj(s)
t=H.li(s)
P.mi(r,r,this,u,t)}},
iv:function(a,b){return this.iu(a,b,null)},
hz:function(a){return new P.jB(this,a)},
dF:function(a,b){return new P.jC(this,a,b)}}
P.jB.prototype={
$0:function(){return this.a.it(this.b)}}
P.jC.prototype={
$1:function(a){return this.a.iv(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jx.prototype={
gS:function(a){var u=new P.ee(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
G:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eW(b)
return t}},
eW:function(a){var u=this.d
if(u==null)return!1
return this.bT(this.d8(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d1(u==null?s.b=P.l8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d1(t==null?s.c=P.l8():t,b)}else return s.eQ(0,b)},
eQ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.l8()
u=s.d3(b)
t=r[u]
if(t==null)r[u]=[s.bQ(b)]
else{if(s.bT(t,b)>=0)return!1
t.push(s.bQ(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h8(this.c,b)
else return this.h7(0,b)},
h7:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d8(r,b)
t=s.bT(u,b)
if(t<0)return!1
s.dq(u.splice(t,1)[0])
return!0},
d1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bQ(b)
return!0},
h8:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dq(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bQ:function(a){var u,t=this,s=new P.jy(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dq:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
d3:function(a){return J.cW(a)&1073741823},
d8:function(a,b){return a[this.d3(b)]},
bT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.jy.prototype={}
P.ee.prototype={
gF:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aU(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fU.prototype={}
P.h6.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h7.prototype={$iu:1,$ii:1,$iq:1}
P.y.prototype={
gS:function(a){return new H.bk(a,this.gl(a))},
M:function(a,b){return this.h(a,b)},
iy:function(a,b){var u,t,s=this,r=H.b([],[H.pa(s,a,"y",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
cK:function(a){return this.iy(a,!0)},
hR:function(a,b,c,d){var u
P.b3(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kU(a,"[","]")}}
P.ha.prototype={}
P.hb.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a3.prototype={
I:function(a,b){var u,t
for(u=J.aR(this.ga3(a));u.w();){t=u.gF(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ak(this.ga3(a))},
i:function(a){return P.l0(a)},
$iT:1}
P.jU.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.hc.prototype={
h:function(a,b){return J.bZ(this.a,b)},
m:function(a,b,c){J.kI(this.a,b,c)},
I:function(a,b){J.lr(this.a,b)},
gl:function(a){return J.ak(this.a)},
i:function(a){return J.a7(this.a)},
$iT:1}
P.dS.prototype={}
P.jE.prototype={
a8:function(a,b){var u
for(u=J.aR(b);u.w();)this.n(0,u.gF(u))},
i:function(a){return P.kU(this,"{","}")},
M:function(a,b){var u,t,s
P.lO(b,"index")
for(u=P.o9(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
$iu:1,
$ii:1}
P.ef.prototype={}
P.eJ.prototype={}
P.f8.prototype={
i5:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b3(a0,a1,b.length)
u=$.mS()
if(typeof a1!=="number")return H.t(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kj(C.a.H(b,n))
j=H.kj(C.a.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.U("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.bG(m)
s=n
continue}}throw H.c(P.W("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.lv(b,p,a1,q,o,f)
else{e=C.c.bn(f-1,4)+1
if(e===1)throw H.c(P.W(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lv(b,p,a1,q,o,d)
else{e=C.c.bn(d,4)
if(e===1)throw H.c(P.W(c,b,a1))
if(e>1)b=C.a.b1(b,a1,a1,e===2?"==":"=")}return b}}
P.f9.prototype={}
P.fe.prototype={}
P.fk.prototype={}
P.fz.prototype={}
P.fR.prototype={
i:function(a){return this.a}}
P.fQ.prototype={
eZ:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.U("")
if(r>b)q.a+=C.a.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.n2(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.j0.prototype={
ghQ:function(){return C.R}}
P.j2.prototype={
ce:function(a){var u,t,s,r=P.b3(0,null,a.length)
if(typeof r!=="number")return r.L()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.k_(t)
if(s.f3(a,0,r)!==r)s.ds(J.mZ(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oq(0,s.b,t.length)))}}
P.k_.prototype={
ds:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f3:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.Z(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ds(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j1.prototype={
ce:function(a){var u,t,s,r,q,p,o,n,m=P.nV(!1,a,0,null)
if(m!=null)return m
u=P.b3(0,null,J.ak(a))
t=P.mk(a,0,u)
if(t>0){s=P.cq(a,0,t)
if(t===u)return s
r=new P.U(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.U("")
o=new P.jZ(!1,r)
o.c=p
o.hD(a,q,u)
if(o.e>0){H.o(P.W("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bG(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jZ.prototype={
hD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.aw(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ae()
if((r&192)!==128){q=P.W(k+C.c.bl(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.W("Overlong encoding of 0x"+C.c.bl(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.c.bl(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bG(j)
l.c=!1}if(typeof c!=="number")return H.t(c)
q=s<c
for(;q;){p=P.mk(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cq(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.c.bl(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.W(k+C.c.bl(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aP.prototype={}
P.ag.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aZ:function(a,b){return C.c.aZ(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.c.aW(u,30))&1073741823},
i:function(a){var u=this,t=P.nb(H.nE(u)),s=P.d5(H.nC(u)),r=P.d5(H.ny(u)),q=P.d5(H.nz(u)),p=P.d5(H.nB(u)),o=P.d5(H.nD(u)),n=P.nc(H.nA(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.be.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.be&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
aZ:function(a,b){return C.c.aZ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fw(),q=this.a
if(q<0)return"-"+new P.be(0-q).i(0)
u=r.$1(C.c.a7(q,6e7)%60)
t=r.$1(C.c.a7(q,1e6)%60)
s=new P.fv().$1(q%1e6)
return""+C.c.a7(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fv.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fw.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bz.prototype={}
P.dt.prototype={
i:function(a){return"Throw of null."}}
P.ap.prototype={
gbS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbR:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbS()+o+u
if(!q.a)return t
s=q.gbR()
r=P.kS(q.b)
return t+s+": "+r}}
P.bH.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fT.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iU.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iQ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cp.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fh.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kS(u)+"."}}
P.hM.prototype={
i:function(a){return"Out of Memory"},
$ibz:1}
P.dE.prototype={
i:function(a){return"Stack Overflow"},
$ibz:1}
P.fp.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e7.prototype={
i:function(a){return"Exception: "+this.a}}
P.fK.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.Z(f,q)
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
k=""}j=C.a.v(f,m,n)
return h+l+j+k+"\n"+C.a.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fM.prototype={}
P.w.prototype={}
P.i.prototype={
bM:function(a,b){return new H.cA(this,b,[H.lh(this,"i",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.w();)++u
return u},
gaO:function(a){var u,t=this.gS(this)
if(!t.w())throw H.c(H.fV())
u=t.gF(t)
if(t.w())throw H.c(H.nh())
return u},
M:function(a,b){var u,t,s
P.lO(b,"index")
for(u=this.gS(this),t=0;u.w();){s=u.gF(u)
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
i:function(a){return P.ng(this,"(",")")}}
P.fW.prototype={}
P.q.prototype={$iu:1,$ii:1}
P.T.prototype={}
P.bn.prototype={
gK:function(a){return P.a4.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.a4.prototype={constructor:P.a4,$ia4:1,
u:function(a,b){return this===b},
gK:function(a){return H.cm(this)},
i:function(a){return"Instance of '"+H.e(H.cn(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.U.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iZ.prototype={
$2:function(a,b){var u,t,s,r=J.cQ(b).e5(b,"=")
if(r===-1){if(b!=="")J.kI(a,P.lc(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ab(b,r+1)
s=this.a
J.kI(a,P.lc(u,0,u.length,s,!0),P.lc(t,0,t.length,s,!0))}return a}}
P.iW.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv4 address, "+a,this.a,b))}}
P.iX.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iY.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eX(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bP.prototype={
geq:function(){return this.b},
gcs:function(a){var u=this.c
if(u==null)return""
if(C.a.a6(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbF:function(a){var u=this.d
if(u==null)return P.mb(this.a)
return u},
gcE:function(a){var u=this.f
return u==null?"":u},
ge0:function(){var u=this.r
return u==null?"":u},
el:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a6(u,"/"))u="/"+u
s=P.la(null,0,0,b)
return new P.bP(q,o,m,n,u,s,r.r)},
gcF:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dS(P.m_(t==null?"":t),[u,u])
t=u}return t},
ge1:function(){return this.c!=null},
ge4:function(){return this.f!=null},
ge2:function(){return this.r!=null},
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
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$il4)if(s.a==b.gbN())if(s.c!=null===b.ge1())if(s.b==b.geq())if(s.gcs(s)==b.gcs(b))if(s.gbF(s)==b.gbF(b))if(s.e===b.gej(b)){u=s.f
t=u==null
if(!t===b.ge4()){if(t)u=""
if(u===b.gcE(b)){u=s.r
t=u==null
if(!t===b.ge2()){if(t)u=""
u=u===b.ge0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.a.gK(this.i(0)):u},
$il4:1,
gbN:function(){return this.a},
gej:function(a){return this.e}}
P.jV.prototype={
$1:function(a){throw H.c(P.W("Invalid port",this.a,this.b+1))}}
P.jW.prototype={
$1:function(a){return P.eK(C.a0,a,C.e,!1)}}
P.jY.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eK(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eK(C.h,b,C.e,!0))}}}
P.jX.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aR(b),t=this.a;u.w();)t.$2(a,u.gF(u))}}
P.iV.prototype={
gep:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bB(u,"?",o)
s=u.length
if(t>=0){r=P.cM(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jq("data",p,p,p,P.cM(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k5.prototype={
$1:function(a){return new Uint8Array(96)}}
P.k4.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.n_(u,0,96,b)
return u},
$S:18}
P.k6.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k7.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jH.prototype={
ge1:function(){return this.c>0},
ge3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
ge4:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
ge2:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.a.a6(this.a,"http")},
gdc:function(){return this.b===5&&C.a.a6(this.a,"https")},
gbN:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gda())q=t.x="http"
else if(t.gdc()){t.x="https"
q="https"}else if(q===4&&C.a.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a6(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
geq:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gcs:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbF:function(a){var u,t=this
if(t.ge3()){u=t.d
if(typeof u!=="number")return u.B()
return P.eX(C.a.v(t.a,u+1,t.e),null,null)}if(t.gda())return 80
if(t.gdc())return 443
return 0},
gej:function(a){return C.a.v(this.a,this.e,this.f)},
gcE:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.v(this.a,u+1,t):""},
ge0:function(){var u=this.r,t=this.a
return u<t.length?C.a.ab(t,u+1):""},
gcF:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.a1
t=P.h
return new P.dS(P.m_(u.gcE(u)),[t,t])},
el:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbN(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.ge3()?p.gbF(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a6(t,"/"))t="/"+t
r=P.la(o,0,0,b)
s=p.r
q=s<l.length?C.a.ab(l,s+1):o
return new P.bP(n,k,u,j,t,r,q)},
gK:function(a){var u=this.y
return u==null?this.y=C.a.gK(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$il4&&this.a===b.i(0)},
i:function(a){return this.a},
$il4:1}
P.jq.prototype={}
W.r.prototype={}
W.f_.prototype={
gl:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.bx.prototype={
cO:function(a,b,c){if(c!=null)return a.getContext(b,P.p1(c))
return a.getContext(b)},
eu:function(a,b){return this.cO(a,b,null)},
$ibx:1}
W.bd.prototype={
gl:function(a){return a.length}}
W.fl.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.c3.prototype={
gl:function(a){return a.length}}
W.fm.prototype={}
W.al.prototype={}
W.az.prototype={}
W.fn.prototype={
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length}}
W.fr.prototype={
gl:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.fs.prototype={
i:function(a){return String(a)}}
W.d7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.ab,P.ae]]},
$iB:1,
$aB:function(){return[[P.ab,P.ae]]},
$ay:function(){return[[P.ab,P.ae]]},
$ii:1,
$ai:function(){return[[P.ab,P.ae]]},
$iq:1,
$aq:function(){return[[P.ab,P.ae]]}}
W.d8.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaN(a))+" x "+H.e(this.gaH(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$iab&&a.left===u.gbD(b)&&a.top===u.gbJ(b)&&this.gaN(a)===u.gaN(b)&&this.gaH(a)===u.gaH(b)},
gK:function(a){return W.m9(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(this.gaN(a)),C.d.gK(this.gaH(a)))},
gdH:function(a){return a.bottom},
gaH:function(a){return a.height},
gbD:function(a){return a.left},
gcI:function(a){return a.right},
gbJ:function(a){return a.top},
gaN:function(a){return a.width},
$iab:1,
$aab:function(){return[P.ae]}}
W.ft.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
W.fu.prototype={
gl:function(a){return a.length}}
W.jo.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.cK(this)
return new J.a8(u,u.length)},
$au:function(){return[W.S]},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$aq:function(){return[W.S]}}
W.S.prototype={
ghy:function(a){return new W.jr(a)},
gcc:function(a){return new W.jo(a,a.children)},
gdJ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lC
if(u==null){u=H.b([],[W.b1])
t=new W.ds(u)
u.push(W.m8(null))
u.push(W.ma())
$.lC=t
d=t}else d=u
u=$.lB
if(u==null){u=new W.eL(d)
$.lB=u
c=u}else{u.a=d
c=u}}if($.aV==null){u=document
t=u.implementation.createHTMLDocument("")
$.aV=t
$.kR=t.createRange()
s=$.aV.createElement("base")
s.href=u.baseURI
$.aV.head.appendChild(s)}u=$.aV
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aV
if(!!this.$ibv)r=u.body
else{r=u.createElement(a.tagName)
$.aV.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.G(C.Z,a.tagName)){$.kR.selectNodeContents(r)
q=$.kR.createContextualFragment(b)}else{r.innerHTML=b
q=$.aV.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aV.body
if(r==null?u!=null:r!==u)J.lt(r)
c.cP(q)
document.adoptNode(q)
return q},
hG:function(a,b,c){return this.am(a,b,c,null)},
ew:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iS:1,
gen:function(a){return a.tagName}}
W.fy.prototype={
$1:function(a){return!!J.R(a).$iS}}
W.k.prototype={$ik:1}
W.f.prototype={
ht:function(a,b,c,d){if(c!=null)this.eR(a,b,c,!1)},
eR:function(a,b,c,d){return a.addEventListener(b,H.bU(c,1),!1)}}
W.ar.prototype={$iar:1}
W.c6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ar]},
$iB:1,
$aB:function(){return[W.ar]},
$ay:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$iq:1,
$aq:function(){return[W.ar]},
$ic6:1}
W.fF.prototype={
gl:function(a){return a.length}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.fP.prototype={
gl:function(a){return a.length}}
W.c8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$iq:1,
$aq:function(){return[W.E]}}
W.aY.prototype={$iaY:1,
gdK:function(a){return a.data}}
W.c9.prototype={$ic9:1}
W.bC.prototype={$ibC:1}
W.h8.prototype={
i:function(a){return String(a)}}
W.hu.prototype={
gl:function(a){return a.length}}
W.cg.prototype={$icg:1}
W.hv.prototype={
h:function(a,b){return P.b8(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.I(a,new W.hw(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hw.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hx.prototype={
h:function(a,b){return P.b8(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.I(a,new W.hy(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aD]},
$iB:1,
$aB:function(){return[W.aD]},
$ay:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$iq:1,
$aq:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.a5.prototype={
gaO:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lR("No elements"))
if(t>1)throw H.c(P.lR("More than one element"))
return u.firstChild},
a8:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.db(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.E]},
$ay:function(){return[W.E]},
$ai:function(){return[W.E]},
$aq:function(){return[W.E]}}
W.E.prototype={
io:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ir:function(a,b){var u,t
try{u=a.parentNode
J.mX(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eB(a):u},
ha:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$iq:1,
$aq:function(){return[W.E]}}
W.aF.prototype={$iaF:1,
gl:function(a){return a.length}}
W.hP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aF]},
$iB:1,
$aB:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$iq:1,
$aq:function(){return[W.aF]}}
W.i_.prototype={
h:function(a,b){return P.b8(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.I(a,new W.i0(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.i2.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aI]},
$iB:1,
$aB:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$iq:1,
$aq:function(){return[W.aI]}}
W.aJ.prototype={$iaJ:1}
W.ig.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aJ]},
$iB:1,
$aB:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$iq:1,
$aq:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1,
gl:function(a){return a.length}}
W.ik.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.b([],[P.h])
this.I(a,new W.il(u))
return u},
gl:function(a){return a.length},
$aa3:function(){return[P.h,P.h]},
$iT:1,
$aT:function(){return[P.h,P.h]}}
W.il.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.dH.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=W.nd("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a5(t).a8(0,new W.a5(u))
return t}}
W.ip.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.am(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaO(u)
s.toString
u=new W.a5(s)
r=u.gaO(u)
t.toString
r.toString
new W.a5(t).a8(0,new W.a5(r))
return t}}
W.iq.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.am(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaO(u)
t.toString
s.toString
new W.a5(t).a8(0,new W.a5(s))
return t}}
W.cr.prototype={$icr:1}
W.aL.prototype={$iaL:1}
W.au.prototype={$iau:1}
W.it.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.au]},
$iB:1,
$aB:function(){return[W.au]},
$ay:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$iq:1,
$aq:function(){return[W.au]}}
W.iu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aL]},
$iB:1,
$aB:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$iq:1,
$aq:function(){return[W.aL]}}
W.iz.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.bI.prototype={$ibI:1}
W.iD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aM]},
$iB:1,
$aB:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ii:1,
$ai:function(){return[W.aM]},
$iq:1,
$aq:function(){return[W.aM]}}
W.iE.prototype={
gl:function(a){return a.length}}
W.bo.prototype={}
W.j_.prototype={
i:function(a){return String(a)}}
W.jh.prototype={
gl:function(a){return a.length}}
W.bq.prototype={
ghJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibq:1}
W.cB.prototype={
hc:function(a,b){return a.requestAnimationFrame(H.bU(b,1))},
f2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.J]},
$iB:1,
$aB:function(){return[W.J]},
$ay:function(){return[W.J]},
$ii:1,
$ai:function(){return[W.J]},
$iq:1,
$aq:function(){return[W.J]}}
W.e1.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$iab&&a.left===u.gbD(b)&&a.top===u.gbJ(b)&&a.width===u.gaN(b)&&a.height===u.gaH(b)},
gK:function(a){return W.m9(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(a.width),C.d.gK(a.height))},
gaH:function(a){return a.height},
gaN:function(a){return a.width}}
W.ju.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aA]},
$iB:1,
$aB:function(){return[W.aA]},
$ay:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$iq:1,
$aq:function(){return[W.aA]}}
W.ek.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$iq:1,
$aq:function(){return[W.E]}}
W.jI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aK]},
$iB:1,
$aB:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$iq:1,
$aq:function(){return[W.aK]}}
W.jN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.at]},
$iB:1,
$aB:function(){return[W.at]},
$ay:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$iq:1,
$aq:function(){return[W.at]}}
W.jn.prototype={
I:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa3:function(){return[P.h,P.h]},
$aT:function(){return[P.h,P.h]}}
W.jr.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.js.prototype={}
W.jt.prototype={
$1:function(a){return this.a.$1(a)}}
W.cC.prototype={
eK:function(a){var u
if($.cD.gi2($.cD)){for(u=0;u<262;++u)$.cD.m(0,C.Y[u],W.pc())
for(u=0;u<12;++u)$.cD.m(0,C.p[u],W.pd())}},
aX:function(a){return $.mT().G(0,W.c4(a))},
aw:function(a,b,c){var u=$.cD.h(0,H.e(W.c4(a))+"::"+b)
if(u==null)u=$.cD.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$ib1:1}
W.N.prototype={
gS:function(a){return new W.db(a,this.gl(a))}}
W.ds.prototype={
aX:function(a){return C.b.dA(this.a,new W.hH(a))},
aw:function(a,b,c){return C.b.dA(this.a,new W.hG(a,b,c))},
$ib1:1}
W.hH.prototype={
$1:function(a){return a.aX(this.a)}}
W.hG.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)}}
W.es.prototype={
eN:function(a,b,c,d){var u,t,s
this.a.a8(0,c)
u=b.bM(0,new W.jF())
t=b.bM(0,new W.jG())
this.b.a8(0,u)
s=this.c
s.a8(0,C.y)
s.a8(0,t)},
aX:function(a){return this.a.G(0,W.c4(a))},
aw:function(a,b,c){var u=this,t=W.c4(a),s=u.c
if(s.G(0,H.e(t)+"::"+b))return u.d.hw(c)
else if(s.G(0,"*::"+b))return u.d.hw(c)
else{s=u.b
if(s.G(0,H.e(t)+"::"+b))return!0
else if(s.G(0,"*::"+b))return!0
else if(s.G(0,H.e(t)+"::*"))return!0
else if(s.G(0,"*::*"))return!0}return!1},
$ib1:1}
W.jF.prototype={
$1:function(a){return!C.b.G(C.p,a)}}
W.jG.prototype={
$1:function(a){return C.b.G(C.p,a)}}
W.jQ.prototype={
aw:function(a,b,c){if(this.eE(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.G(0,b)
return!1}}
W.jR.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jO.prototype={
aX:function(a){var u=J.R(a)
if(!!u.$ico)return!1
u=!!u.$il
if(u&&W.c4(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.aX(a)},
$ib1:1}
W.db.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bZ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gF:function(a){return this.d}}
W.b1.prototype={}
W.jD.prototype={}
W.eL.prototype={
cP:function(a){new W.k0(this).$2(a,null)},
ba:function(a,b){if(b==null)J.lt(a)
else b.removeChild(a)},
hh:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.n0(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.a7(a)}catch(r){H.aj(r)}try{s=W.c4(a)
this.hg(a,b,p,t,s,o,n)}catch(r){if(H.aj(r) instanceof P.ap)throw r
else{this.ba(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hg:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aX(a)){p.ba(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aw(a,"is",g)){p.ba(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.b(u.slice(0),[H.aQ(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.aw(a,J.n3(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$icr)p.cP(a.content)}}
W.k0.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hh(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ba(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
P.jJ.prototype={
cq:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bL:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iag)return new Date(a.a)
if(!!u.$inI)throw H.c(P.iR("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibu)return a
if(!!u.$ic6)return a
if(!!u.$iaY)return a
if(!!u.$ici||!!u.$ibm||!!u.$icg)return a
if(!!u.$iT){t=p.cq(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.I(a,new P.jL(o,p))
return o.a}if(!!u.$iq){t=p.cq(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hF(a,t)}if(!!u.$ink){t=p.cq(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hY(a,new P.jM(o,p))
return o.b}throw H.c(P.iR("structured clone of other type"))},
hF:function(a,b){var u,t=J.aw(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.t(s)
u=0
for(;u<s;++u){q=this.bL(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jL.prototype={
$2:function(a,b){this.a.a[a]=this.b.bL(b)},
$S:3}
P.jM.prototype={
$2:function(a,b){this.a.b[a]=this.b.bL(b)},
$S:3}
P.eI.prototype={$iaY:1,
gdK:function(a){return this.a}}
P.kb.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jK.prototype={
hY:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fG.prototype={
gbr:function(){var u=this.b,t=H.lh(u,"y",0)
return new H.cd(new H.cA(u,new P.fH(),[t]),new P.fI(),[t,W.S])},
m:function(a,b,c){var u=this.gbr()
J.n1(u.b.$1(J.eZ(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ak(this.gbr().a)},
h:function(a,b){var u=this.gbr()
return u.b.$1(J.eZ(u.a,b))},
gS:function(a){var u=P.l_(this.gbr(),!1,W.S)
return new J.a8(u,u.length)},
$au:function(){return[W.S]},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$aq:function(){return[W.S]}}
P.fH.prototype={
$1:function(a){return!!J.R(a).$iS}}
P.fI.prototype={
$1:function(a){return H.j(a,"$iS")}}
P.jz.prototype={
gcI:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
gdH:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
u:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$iab){t=q.a
if(t==u.gbD(b)){s=q.b
if(s==u.gbJ(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gcI(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gdH(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u=this,t=u.a,s=J.cW(t),r=u.b,q=J.cW(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.t(p)
p=C.c.gK(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.t(t)
t=C.c.gK(r+t)
return P.o8(P.jw(P.jw(P.jw(P.jw(0,s),q),p),t))}}
P.ab.prototype={
gbD:function(a){return this.a},
gbJ:function(a){return this.b},
gaN:function(a){return this.c},
gaH:function(a){return this.d}}
P.aZ.prototype={$iaZ:1}
P.h1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.aZ]},
$ay:function(){return[P.aZ]},
$ii:1,
$ai:function(){return[P.aZ]},
$iq:1,
$aq:function(){return[P.aZ]}}
P.b2.prototype={$ib2:1}
P.hK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.b2]},
$ay:function(){return[P.b2]},
$ii:1,
$ai:function(){return[P.b2]},
$iq:1,
$aq:function(){return[P.b2]}}
P.hS.prototype={
gl:function(a){return a.length}}
P.co.prototype={$ico:1}
P.io.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
P.l.prototype={
gcc:function(a){return new P.fG(a,new W.a5(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.b1])
p.push(W.m8(null))
p.push(W.ma())
p.push(new W.jO())
c=new W.eL(new W.ds(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hG(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a5(s)
q=p.gaO(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b4.prototype={$ib4:1}
P.iF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.b4]},
$ay:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$iq:1,
$aq:function(){return[P.b4]}}
P.ec.prototype={}
P.ed.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.bJ.prototype={$iu:1,
$au:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
P.f3.prototype={
gl:function(a){return a.length}}
P.f4.prototype={
h:function(a,b){return P.b8(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.I(a,new P.f5(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
P.f5.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f6.prototype={
gl:function(a){return a.length}}
P.bt.prototype={}
P.hL.prototype={
gl:function(a){return a.length}}
P.e_.prototype={}
P.dy.prototype={
iw:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaY)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.p2(g))
return}if(!!t.$ic9)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cX("Incorrect number or type of arguments"))}}
P.ii.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return P.b8(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[[P.T,,,]]},
$ay:function(){return[[P.T,,,]]},
$ii:1,
$ai:function(){return[[P.T,,,]]},
$iq:1,
$aq:function(){return[[P.T,,,]]}}
P.ev.prototype={}
P.ew.prototype={}
K.aS.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"}}
K.dc.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bl.prototype={}
K.aa.prototype={
aI:function(a,b){return!this.eA(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}}
K.hV.prototype={
aI:function(a,b){if(typeof b!=="number")return H.t(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bG(this.a),t=H.bG(this.b)
return u+".."+t}}
K.i3.prototype={
eI:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
u=P.w
t=new H.K([u,P.aP])
for(s=new H.bk(a,a.gl(a));s.w();)t.m(0,s.d,!0)
r=P.l_(t.ga3(t),!0,u)
C.b.ey(r)
this.a=r},
aI:function(a,b){return C.b.G(this.a,b)},
i:function(a){return P.cq(this.a,0,null)}}
L.dF.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dP(this.a.k(0,b))
r.a=H.b([],[K.bl])
r.c=!1
this.c.push(r)
return r},
hT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
dn:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.G(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga3(n),n=n.gS(n);n.w();){t=n.gF(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.G(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dM.prototype={
i:function(a){var u=H.ln(this.b,"\n","\\n"),t=H.ln(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dN.prototype={
aK:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.n)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iA.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dF(this,b)
u.c=H.b([],[L.dP])
this.a.m(0,b,u)}return u},
T:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dN(a)
u=P.h
t.c=new H.K([u,u])
this.b.m(0,a,t)}return t},
cL:function(a){return this.iA(a)},
iA:function(a){var u=this
return P.ov(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cL(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cG(c,0)
else{if(!t.w()){s=3
break}l=t.d}d.push(l);++o
k=g.hT(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cq(d,0,null)
throw H.c(P.m("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.o(P.z("removeRange"))
P.b3(0,m,d.length)
d.splice(0,m-0)
C.b.a8(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.G(0,p.a)?7:8
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
if(g.d!=null){j=P.cq(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dM(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.G(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.o6()
case 1:return P.o7(q)}}},L.dM)},
i:function(a){var u,t=new P.U(""),s=this.d
if(s!=null)t.a=s.dn()+"\n"
for(s=this.a,s=s.giB(s),s=s.gS(s);s.w();){u=s.gF(s)
if(u!=this.d)t.a+=u.dn()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dP.prototype={
i:function(a){return this.b.b+": "+this.cT(0)}}
O.aT.prototype={
bp:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cQ:function(a,b,c){this.b=b
this.c=a},
b3:function(a,b){return this.cQ(a,null,b)},
df:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cX:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a8(u,u.length)},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.lh(s,"aT",0)]
if(s.df(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cX(t,H.b([b],r))}},
a8:function(a,b){var u,t
if(this.df(b)){u=this.a
t=u.length
C.b.a8(u,b)
this.cX(t,b)}},
$ii:1}
O.cf.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.G():u},
aP:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.b.gay(u)
else return V.bD()},
bH:function(a){var u=this.a
if(a==null)u.push(V.bD())
else u.push(a)
this.aP()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}}}
E.fa.prototype={}
E.aW.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().D(0,s.geg())
u=s.c
if(u!=null)u.gq().n(0,s.geg())
t=new D.C("shape",r,s.c)
t.b=!0
s.bE(t)}},
ar:function(a,b){var u
for(u=this.y.a,u=new J.a8(u,u.length);u.w();)u.d.ar(0,b)},
ag:function(a){var u,t=this,s=a.dx
s.a.push(s.ga4(s))
s.aP()
a.cD(t.f)
s=a.dy
u=(s&&C.b).gay(s)
if(u!=null&&t.d!=null)u.ek(a,t)
for(s=t.y.a,s=new J.a8(s,s.length);s.w();)s.d.ag(a)
a.cC()
a.dx.aJ()},
bE:function(a){var u=this.z
if(u!=null)u.E(a)},
W:function(){return this.bE(null)},
eh:function(a){this.e=null
this.bE(a)},
ib:function(){return this.eh(null)},
ef:function(a){this.bE(a)},
i8:function(){return this.ef(null)},
i7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gee(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bA()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
ia:function(a,b){var u,t
for(u=b.gS(b),t=this.gee();u.w();)u.gF(u).gq().D(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bw.prototype={
i:function(a){return this.b}}
E.bE.prototype={
i:function(a){return this.b}}
E.e6.prototype={}
E.hW.prototype={
eH:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ag(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cf()
t=[V.b_]
u.a=H.b([],t)
u.gq().n(0,new E.hX(s))
s.cy=u
u=new O.cf()
u.a=H.b([],t)
u.gq().n(0,new E.hY(s))
s.db=u
u=new O.cf()
u.a=H.b([],t)
u.gq().n(0,new E.hZ(s))
s.dx=u
u=H.b([],[O.dI])
s.dy=u
u.push(null)
s.fr=new H.K([P.h,A.dz])},
gim:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.t(0,u.ga4(u))
s=u}return s},
cD:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gay(u):a)},
cC:function(){var u=this.dy
if(u.length>1)u.pop()},
dz:function(a){var u=a.b
if(u.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.cd(0,u))throw H.c(P.m('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hX.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hY.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hZ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dK.prototype={
d_:function(a){this.em()},
cZ:function(){return this.d_(null)},
ghZ:function(){var u,t=this,s=Date.now(),r=C.c.a7(P.lA(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ag(s,!1)
return u/r},
dh:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.t(r)
u=C.d.cr(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.d.cr(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lU(C.n,s.gis())}},
em:function(){if(!this.cx){this.cx=!0
var u=window
C.G.f2(u)
C.G.hc(u,W.ml(new E.iy(this),P.ae))}},
iq:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.dh()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ag(r,!1)
s.y=P.lA(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aP()
r=s.db
C.b.sl(r.a,0)
r.aP()
r=s.dx
C.b.sl(r.a,0)
r.aP()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ag(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.li(q)
P.lm("Error: "+H.e(u))
P.lm("Stack: "+H.e(t))
throw H.c(u)}}}
E.iy.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.iq()}}}
Z.dX.prototype={}
Z.d_.prototype={
a2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dY.prototype={}
Z.c1.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a2(a)},
aM:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bB.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cn(this.c))+"'")+"]"}}
Z.b7.prototype={
gcS:function(a){var u=this.a,t=(u&$.ax().a)!==0?3:0
if((u&$.bb().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=2
if((u&$.bc().a)!==0)t+=3
if((u&$.cT().a)!==0)t+=3
if((u&$.cU().a)!==0)t+=4
if((u&$.bY().a)!==0)++t
return(u&$.b9().a)!==0?t+4:t},
hx:function(a){var u,t=$.ax(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0)if(u===a)return t
return $.mR()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.ax().a)!==0)u.push("Pos")
if((t&$.bb().a)!==0)u.push("Norm")
if((t&$.ba().a)!==0)u.push("Binm")
if((t&$.bs().a)!==0)u.push("Txt2D")
if((t&$.bc().a)!==0)u.push("TxtCube")
if((t&$.cT().a)!==0)u.push("Clr3")
if((t&$.cU().a)!==0)u.push("Clr4")
if((t&$.bY().a)!==0)u.push("Weight")
if((t&$.b9().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.fd.prototype={}
D.bA.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
D:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.G(s,b)
if(s===!0){s=t.a
u=(s&&C.b).D(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.G(s,b)
if(s===!0){s=t.b
u=(s&&C.b).D(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.I(P.l_(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fC(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.I(u,new D.fD(q))}return!0},
hO:function(){return this.E(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fC.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fD.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.bf.prototype={}
D.bg.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.d0.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d0))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dh.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.h0.prototype={
ii:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
ic:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.dk.prototype={}
X.h9.prototype={
b8:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=o.B(0,new V.X(n*m,u*t))
t=q.a.gaY()
r=new X.b0(a,V.aG(),q.x,t,s)
r.b=!0
q.z=new P.ag(p,!1)
q.x=s
return r},
cB:function(a,b){this.r=a.a
return!1},
bi:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ev()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b8(a,b))
return!0},
ij:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaY()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.ch(new V.L(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fH:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dk(c,r.a.gaY(),b)
s.b=!0
t.E(s)
r.y=new P.ag(u,!1)
r.x=V.aG()}}
X.am.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.am))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b0.prototype={}
X.hA.prototype={
bU:function(a,b,c){var u=this,t=new P.ag(Date.now(),!1),s=u.a.gaY(),r=new X.b0(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cB:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bU(a,b,!0))
return!0},
bi:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ev()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bU(a,b,!0))
return!0},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bU(a,b,!1))
return!0},
ik:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaY()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.ch(new V.L(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdM:function(){var u=this.b
return u==null?this.b=D.G():u},
gcM:function(){var u=this.c
return u==null?this.c=D.G():u},
ged:function(){var u=this.d
return u==null?this.d=D.G():u}}
X.ch.prototype={}
X.hR.prototype={}
X.dO.prototype={}
X.iC.prototype={
b8:function(a,b){var u=this,t=new P.ag(Date.now(),!1),s=a.length>0?a[0]:V.aG(),r=u.a.gaY(),q=new X.dO(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ih:function(a){var u=this.b
if(u==null)return!1
u.E(this.b8(a,!0))
return!0},
ie:function(a){var u=this.c
if(u==null)return!1
u.E(this.b8(a,!0))
return!0},
ig:function(a){var u=this.d
if(u==null)return!1
u.E(this.b8(a,!1))
return!0}}
X.dT.prototype={
gaY:function(){var u=this.a,t=C.i.gdJ(u).c
t.toString
u=C.i.gdJ(u).d
u.toString
return V.lP(0,0,t,u)},
d5:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dh(u,new X.am(t,a.altKey,a.shiftKey))},
aV:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
c8:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.X(s-q,r-u)},
b9:function(a){return new V.L(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.d.ap(r.pageX)
C.d.ap(r.pageY)
p=o.left
C.d.ap(r.pageX)
n.push(new V.X(q-p,C.d.ap(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.d0(u,new X.am(t,a.altKey,a.shiftKey))},
bV:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fB:function(a){this.f=!0},
fk:function(a){this.f=!1},
ft:function(a){if(this.f&&this.bV(a))a.preventDefault()},
fF:function(a){var u
if(!this.f)return
u=this.d5(a)
this.b.ii(u)},
fD:function(a){var u
if(!this.f)return
u=this.d5(a)
this.b.ic(u)},
fJ:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aV(a)
if(r.x){u=r.aB(a)
t=r.b9(a)
if(r.d.cB(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aB(a)
s=r.aD(a)
if(r.c.cB(u,s))a.preventDefault()},
fN:function(a){var u,t,s,r=this
r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bi(u,s))a.preventDefault()},
fz:function(a){var u,t,s,r=this
if(!r.bV(a)){r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bi(u,s))a.preventDefault()}},
fL:function(a){var u,t,s,r=this
r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bh(u,s))a.preventDefault()},
fv:function(a){var u,t,s,r=this
if(!r.bV(a)){r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bh(u,s))a.preventDefault()}},
fP:function(a){var u,t,s=this
s.aV(a)
u=new V.L((a&&C.F).ghI(a),C.F.ghJ(a)).t(0,s.Q)
if(s.x){if(s.d.ij(u))a.preventDefault()
return}if(s.r)return
t=s.aD(a)
if(s.c.ik(u,t))a.preventDefault()},
fR:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.fH(u,t,r)}},
h6:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c8(a)
u=t.c3(a)
if(t.e.ih(u))a.preventDefault()},
h2:function(a){var u
this.c8(a)
u=this.c3(a)
if(this.e.ie(u))a.preventDefault()},
h4:function(a){var u
this.c8(a)
u=this.c3(a)
if(this.e.ig(u))a.preventDefault()}}
D.f7.prototype={$ia9:1}
D.by.prototype={
aA:function(a){var u=this.r
if(u!=null)u.E(a)},
eM:function(){return this.aA(null)},
$ia9:1}
D.a9.prototype={}
D.di.prototype={
aA:function(a){var u=this.y
if(u!=null)u.E(a)},
de:function(a){var u=this.z
if(u!=null)u.E(a)},
fG:function(){return this.de(null)},
fT:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.eX(s))return!1}return!0},
fe:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdd(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.by)this.f.push(q)
p=q.r
if(p==null){p=new D.bA()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bf()
u.b=!0
this.aA(u)},
fX:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gdd();u.w();){s=u.gF(u)
C.b.D(this.e,s)
s.gq().D(0,t)}u=new D.bg()
u.b=!0
this.aA(u)},
eX:function(a){var u=C.b.G(this.f,a)
return u},
$ai:function(){return[D.a9]},
$aaT:function(){return[D.a9]}}
D.hQ.prototype={$ia9:1}
D.ih.prototype={$ia9:1}
V.Y.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.af.prototype={
cK:function(a){var u=this
return H.b([u.a,u.b,u.c,u.d],[P.M])},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fB.prototype={}
V.dm.prototype={
ad:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dm))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bW(H.b([q.a,q.d,q.r],p),3,0),n=V.bW(H.b([q.b,q.e,q.x],p),3,0),m=V.bW(H.b([q.c,q.f,q.y],p),3,0)
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
V.b_.prototype={
ad:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
ct:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.D().a)return V.bD()
u=1/b1
t=-n
s=-a0
return V.aC((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aC(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bK:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.x(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.H(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b_))return!1
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
i:function(a){return this.R()},
J:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bW(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bW(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bW(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bW(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.J("")}}
V.X.prototype={
B:function(a,b){return new V.X(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.aG()
return new V.X(this.a/b,this.b/b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.H.prototype={
B:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.H(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.l1()
return new V.H(this.a/b,this.b/b,this.c/b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.an.prototype={
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dx.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dx))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.L.prototype={
bf:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
if(typeof b!=="number")return H.t(b)
u=this.b
if(typeof u!=="number")return u.t()
return new V.L(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.m0
return u==null?$.m0=new V.L(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.L(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.x.prototype={
bf:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.x(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.x(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.x(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cy()
return new V.x(this.a/b,this.b/b,this.c/b)},
e9:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.b5.prototype={
bf:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.D().a){u=$.m5
return u==null?$.m5=new V.b5(0,0,0,0):u}return new V.b5(t.a/b,t.b/b,t.c/b,t.d/b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b5))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.fg.prototype={
bP:function(a){var u=V.pu(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.G():u},
U:function(a){var u=this.y
if(u!=null)u.E(a)},
scN:function(a,b){},
scv:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bP(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.U(s)}},
scz:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bP(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.U(s)}},
sa_:function(a,b){var u,t=this
b=t.bP(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.U(u)}},
scw:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.U(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.U(t)}},
scg:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.U(u)}},
ar:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
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
u=s}r.sX(u)}}}
U.d3.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.G():u},
b2:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d3))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.c7.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
U:function(a){var u=this.e
if(u!=null)u.E(a)},
ac:function(){return this.U(null)},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaQ(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bf()
u.b=!0
this.U(u)},
fV:function(a,b){var u,t
for(u=b.gS(b),t=this.gaQ();u.w();)u.gF(u).gq().D(0,t)
u=new D.bg()
u.b=!0
this.U(u)},
b2:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a8(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.b2(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.bD():u
r=s.e
if(r!=null)r.az(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c7))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.A(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aaT:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.dU.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.G():u},
U:function(a){var u=this.cy
if(u!=null)u.E(a)},
ac:function(){return this.U(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdM().n(0,u.gbW())
u.a.c.ged().n(0,u.gbY())
u.a.c.gcM().n(0,u.gc_())
return!0},
bX:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$ib0")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.L(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.L(t.a,t.b).t(0,2).p(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.L(s.a,s.b).t(0,2).p(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
n.b.sX(0)
t=t.L(0,a.z)
n.Q=new V.L(t.a,t.b).t(0,2).p(0,u.gaf())}n.ac()},
c0:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sX(t*10*s)
r.ac()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.ar(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aC(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iah:1}
U.dV.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.G():u},
U:function(a){var u=this.fx
if(u!=null)u.E(a)},
ac:function(){return this.U(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().n(0,s.gbW())
s.a.c.ged().n(0,s.gbY())
s.a.c.gcM().n(0,s.gc_())
u=s.a.d
t=u.f
u=t==null?u.f=D.G():t
u.n(0,s.gf4())
u=s.a.d
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.gf6())
u=s.a.e
t=u.b
u=t==null?u.b=D.G():t
u.n(0,s.ghq())
u=s.a.e
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.gho())
u=s.a.e
t=u.c
u=t==null?u.c=D.G():t
u.n(0,s.ghm())
return!0},
at:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.L(u,t)},
bX:function(a){var u=this
H.j(a,"$ib0")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$ib0")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.L(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.L(t.a,t.b).t(0,2).p(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.L(s.a,s.b).t(0,2).p(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.at(new V.L(t.a,t.b).t(0,2).p(0,u.gaf()))}n.ac()},
c0:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sX(-t*10*u)
r.ac()}},
f5:function(a){var u=this
if(H.j(a,"$idk").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f7:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$ib0")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.L(s.a,s.b).t(0,2).p(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.at(new V.L(t.a,t.b).t(0,2).p(0,u.gaf()))
n.ac()},
hr:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hp:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$idO")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.L(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.at(new V.L(t.a,t.b).t(0,2).p(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.at(new V.L(s.a,s.b).t(0,2).p(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.at(new V.L(t.a,t.b).t(0,2).p(0,u.gaf()))}n.ac()},
hn:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sX(-t*10*u)
r.ac()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.ar(0,u)
r.b.ar(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aC(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aC(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.dW.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.G():u},
U:function(a){var u=this.r
if(u!=null)u.E(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.G():t
t=r.gf9()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.G():s).n(0,t)
return!0},
fa:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.j(a,"$ich")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.C("zoom",u,r)
u.b=!0
q.U(u)}},
b2:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aC(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.d2.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.G():u},
a1:function(a){var u=this.r
if(u!=null)u.E(a)},
b6:function(){return this.a1(null)},
fZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bf()
u.b=!0
this.a1(u)},
h0:function(a,b){var u,t
for(u=b.gS(b),t=this.ga0();u.w();)u.gF(u).gq().D(0,t)
u=new D.bg()
u.b=!0
this.a1(u)},
ag:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a8(u,u.length);u.w();){t=u.d
if(t!=null)t.ag(a)}s.f=!1},
$ai:function(){return[M.as]},
$aaT:function(){return[M.as]},
$ias:1}
M.d4.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.G():u},
a1:function(a){var u=this.r
if(u!=null)u.E(a)},
b6:function(){return this.a1(null)},
sbc:function(a){var u,t,s=this
if(a==null)a=new X.fS()
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga0())
t=s.b
s.b=a
a.gq().n(0,s.ga0())
u=new D.C("camera",t,s.b)
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t,s=this
if(b==null)b=X.kT(null)
u=s.c
if(u!==b){if(u!=null)u.gq().D(0,s.ga0())
t=s.c
s.c=b
b.gq().n(0,s.ga0())
u=new D.C("target",t,s.c)
u.b=!0
s.a1(u)}},
sbk:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.ga0())
s=new D.C("technique",u,t.d)
s.b=!0
t.a1(s)}},
ag:function(a){var u=this
a.cD(u.d)
u.c.a2(a)
u.b.a2(a)
u.e.ar(0,a)
u.e.ag(a)
u.b.aM(a)
u.c.toString
a.cC()},
$ias:1}
M.d9.prototype={
a1:function(a){var u=this.y
if(u!=null)u.E(a)},
b6:function(){return this.a1(null)},
fo:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bA()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bf()
u.b=!0
this.a1(u)},
fq:function(a,b){var u,t
for(u=b.gS(b),t=this.ga0();u.w();)u.gF(u).gq().D(0,t)
u=new D.bg()
u.b=!0
this.a1(u)},
sbc:function(a){var u,t,s=this
if(a==null)a=X.lJ(null)
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga0())
t=s.b
s.b=a
a.gq().n(0,s.ga0())
u=new D.C("camera",t,s.b)
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().D(0,t.ga0())
u=t.c
t.c=b
b.gq().n(0,t.ga0())
s=new D.C("target",u,t.c)
s.b=!0
t.a1(s)}},
sbk:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.ga0())
s=new D.C("technique",u,t.d)
s.b=!0
t.a1(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.G():u},
ag:function(a){var u,t=this
a.cD(t.d)
t.c.a2(a)
t.b.a2(a)
u=t.d
if(u!=null)u.ar(0,a)
for(u=t.e.a,u=new J.a8(u,u.length);u.w();)u.d.ar(0,a)
for(u=t.e.a,u=new J.a8(u,u.length);u.w();)u.d.ag(a)
t.b.toString
a.cy.aJ()
a.db.aJ()
t.c.toString
a.cC()},
$ias:1}
M.as.prototype={}
A.cY.prototype={}
A.f2.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hP:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a2.prototype={
gas:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
u:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a2))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.hf.prototype={
eG:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.U("")
t=c0.fr
if(t){u.a=b9
s=b9}else s=""
r=c0.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.oK(c0,u)
A.oM(c0,u)
A.oL(c0,u)
A.oO(c0,u)
A.oP(c0,u)
A.oN(c0,u)
A.oQ(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.ry
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
u.a=s}if(c0.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.e6(0,s.charCodeAt(0)==0?s:s,A.oJ(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.j(b5.y.N(0,"invViewMat"),"$iac")
if(t)b5.dy=H.j(b5.y.N(0,"objMat"),"$iac")
if(r)b5.fr=H.j(b5.y.N(0,"viewObjMat"),"$iac")
b5.fy=H.j(b5.y.N(0,"projViewObjMat"),"$iac")
if(c0.go)b5.fx=H.j(b5.y.N(0,"viewMat"),"$iac")
if(c0.x1)b5.k1=H.j(b5.y.N(0,"txt2DMat"),"$icv")
if(c0.x2)b5.k2=H.j(b5.y.N(0,"txtCubeMat"),"$iac")
if(c0.y1)b5.k3=H.j(b5.y.N(0,"colorMat"),"$iac")
b5.r1=H.b([],[A.ac])
t=c0.bz
if(t>0){b5.k4=b5.y.N(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.o(P.m(b7+q+b8))
s.push(H.j(m,"$iac"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.N(0,"emissionClr"),"$iI")
if(t.c)b5.ry=H.j(b5.y.N(0,"emissionTxt"),"$ia1")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.N(0,"ambientClr"),"$iI")
if(t.c)b5.y1=H.j(b5.y.N(0,"ambientTxt"),"$ia1")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.N(0,"diffuseClr"),"$iI")
if(t.c)b5.aF=H.j(b5.y.N(0,"diffuseTxt"),"$ia1")
t=c0.d
if(t.a)b5.bA=H.j(b5.y.N(0,"invDiffuseClr"),"$iI")
if(t.c)b5.dO=H.j(b5.y.N(0,"invDiffuseTxt"),"$ia1")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dR=H.j(b5.y.N(0,"shininess"),"$iV")
if(s)b5.dP=H.j(b5.y.N(0,"specularClr"),"$iI")
if(t.c)b5.dQ=H.j(b5.y.N(0,"specularTxt"),"$ia1")}if(c0.f.c)b5.dS=H.j(b5.y.N(0,"bumpTxt"),"$ia1")
if(c0.db){b5.dT=H.j(b5.y.N(0,"envSampler"),"$ia1")
t=c0.r
if(t.a)b5.dU=H.j(b5.y.N(0,"reflectClr"),"$iI")
if(t.c)b5.dV=H.j(b5.y.N(0,"reflectTxt"),"$ia1")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dW=H.j(b5.y.N(0,"refraction"),"$iV")
if(s)b5.dX=H.j(b5.y.N(0,"refractClr"),"$iI")
if(t.c)b5.dY=H.j(b5.y.N(0,"refractTxt"),"$ia1")}}t=c0.y
if(t.a)b5.dZ=H.j(b5.y.N(0,"alpha"),"$iV")
if(t.c)b5.e_=H.j(b5.y.N(0,"alphaTxt"),"$ia1")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.ci=new H.K([r,A.bp])
b5.cj=new H.K([r,[P.q,A.ct]])
for(r=[A.ct],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.j(m,"$iI")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.j(g,"$iI")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$iI")
if(typeof j!=="number")return j.ae()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.j(c,"$iV")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.ct(m,g,f,a0,a,b))}b5.cj.m(0,j,h)
q=b5.ci
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.ck=new H.K([r,A.bp])
b5.cl=new H.K([r,[P.q,A.cu]])
for(r=[A.cu],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ae()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.j(m,"$iI")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.j(g,"$iI")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.o(P.m(b7+a1+b8))
H.j(f,"$iI")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.j(m,"$iI")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.j(g,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$ibK")
a5=f}else a5=b6
h.push(new A.cu(a4,a3,a2,m,g,a5))}b5.cl.m(0,j,h)
q=b5.ck
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.cm=new H.K([r,A.bp])
b5.cn=new H.K([r,[P.q,A.cw]])
for(r=[A.cw],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.j(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.j(g,"$iI")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$iI")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$icv")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$ia1")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$ia1")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$ics")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.j(c,"$iV")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cw(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.cn.m(0,j,h)
q=b5.cm
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.co=new H.K([r,A.bp])
b5.cp=new H.K([r,[P.q,A.cx]])
for(r=[A.cx],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.j(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.j(g,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$iI")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.j(c,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.o(P.m(b7+o+b8))
H.j(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.o(P.m(b7+o+b8))
H.j(b0,"$iV")
b1=b0
b2=a9
a3=c
a4=d}else{b1=b6
b2=b1
a3=b2
a4=a3}p=(j&2)!==0
if(p){o=b5.y
a1=i+"s["+n+"].shadowAdj"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$ics")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$iV")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.j(c,"$iV")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$iV")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.j(c,"$iV")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.o(P.m(b7+a1+b8))
H.j(a9,"$iV")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$ibK")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$ibK")
a7=d}else a7=b6
h.push(new A.cx(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cp.m(0,j,h)
q=b5.co
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}}},
aj:function(a,b){if(b!=null&&b.d>=6)a.cR(b)}}
A.cZ.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d6.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dv.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dD.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hi.prototype={
i:function(a){return this.aF}}
A.ct.prototype={}
A.cu.prototype={}
A.cw.prototype={}
A.cx.prototype={}
A.dz.prototype={
cW:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e6:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d6(b,35633)
r.f=r.d6(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.o(P.m("Failed to link shader: "+H.e(s)))}r.hi()
r.hk()},
a2:function(a){a.a.useProgram(this.r)
this.x.hP()},
d6:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.m("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
hi:function(){var u,t,s,r=this,q=H.b([],[A.cY]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cY(p,t.name,s))}r.x=new A.f2(q)},
hk:function(){var u,t,s,r=this,q=H.b([],[A.dQ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hH(t.type,t.size,t.name,s))}r.y=new A.iO(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.l3(u,this.r,b,a,c)},
f_:function(a,b,c){var u=this.a
if(a===1)return new A.bK(u,b,c)
else return A.l3(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.a1(u,b,c)
else return A.l3(u,this.r,b,a,c)},
bu:function(a,b){return new P.e7(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hH:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iK(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.cs(u.a,c,d)
case 35667:return new A.iL(u.a,c,d)
case 35668:return new A.iM(u.a,c,d)
case 35669:return new A.iN(u.a,c,d)
case 35674:return new A.iP(u.a,c,d)
case 35675:return new A.cv(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.f_(b,c,d)
case 35680:return u.f0(b,c,d)
case 35670:throw H.c(u.bu("BOOL",c))
case 35671:throw H.c(u.bu("BOOL_VEC2",c))
case 35672:throw H.c(u.bu("BOOL_VEC3",c))
case 35673:throw H.c(u.bu("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.id.prototype={}
A.dQ.prototype={}
A.iO.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bp.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iN.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cs.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cv.prototype={
ah:function(a){var u=new Float32Array(H.bR(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
ah:function(a){var u=new Float32Array(H.bR(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bK.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a1.prototype={
cR:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.k2.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cu(s.b,b).cu(s.d.cu(s.c,b),c)
a.sa_(0,new V.H(r.a,r.b,r.c))
a.saq(r.p(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
a.sdE(new V.an(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.kc.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.ke.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sa_(0,new V.H(s,u,q))
u=new V.x(s,u,q)
a.saq(u.p(0,Math.sqrt(u.A(u))))
a.sdE(new V.an(1-c,2+c,-1,-1))}}
F.kf.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kg.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kp.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.x(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.A(r)))
a.sa_(0,new V.H(s.a,s.b,s.c))}}
F.kC.prototype={
$2:function(a,b){return 0}}
F.kD.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=a.f
t=new V.x(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.A(t))).t(0,this.b+s)
a.sa_(0,new V.H(s.a,s.b,s.c))}}
F.kG.prototype={
$1:function(a){return new V.H(Math.cos(a),Math.sin(a),0)}}
F.ko.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.H(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.kd.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lq(n.$1(o),m)
m=J.lq(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.x(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.A(m)))
n=$.m2
if(n==null){n=new V.x(1,0,0)
$.m2=n
t=n}else t=n
n=u.aE(!J.A(u,t)?V.m4():t)
s=n.p(0,Math.sqrt(n.A(n)))
n=s.aE(u)
t=n.p(0,Math.sqrt(n.A(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
a.sa_(0,l.B(0,new V.H(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aX.prototype={
bd:function(){var u=this
if(!u.gbe()){C.b.D(u.a.a.d.b,u)
u.a.a.W()}u.c4()
u.c5()
u.h9()},
bs:function(a){this.a=a
a.d.b.push(this)},
bt:function(a){this.b=a
a.d.c.push(this)},
dk:function(a){this.c=a
a.d.d.push(this)},
c4:function(){var u=this.a
if(u!=null){C.b.D(u.d.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.b.D(u.d.c,this)
this.b=null}},
h9:function(){var u=this.c
if(u!=null){C.b.D(u.d.d,this)
this.c=null}},
gbe:function(){return this.a==null||this.b==null||this.c==null},
eT:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cy()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e9())return
return s.p(0,Math.sqrt(s.A(s)))},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.A(r)))
r=t.L(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.aE(r.p(0,Math.sqrt(r.A(r))))
return r.p(0,Math.sqrt(r.A(r)))},
cb:function(){var u,t=this
if(t.d!=null)return!0
u=t.eT()
if(u==null){u=t.eV()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cy()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e9())return
return s.p(0,Math.sqrt(s.A(s)))},
eU:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.D().a){l=d.L(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.L(0,g).t(0,p).B(0,g).L(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.A(l)))
l=o.aE(q)
l=l.p(0,Math.sqrt(l.A(l))).aE(o)
q=l.p(0,Math.sqrt(l.A(l)))}return q},
c9:function(){var u,t=this
if(t.e!=null)return!0
u=t.eS()
if(u==null){u=t.eU()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
aS:function(a,b){var u=b.a
if(u==null)throw H.c(P.m("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.m("May not replace a face's vertex with a vertex attached to a different shape."))},
ghB:function(a){var u=this
if(J.A(u.a,u.b))return!0
if(J.A(u.b,u.c))return!0
if(J.A(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this
if(s.gbe())return a+"disposed"
u=a+C.a.ao(J.a7(s.a.e),0)+", "+C.a.ao(J.a7(s.b.e),0)+", "+C.a.ao(J.a7(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.J("")}}
F.fE.prototype={}
F.ic.prototype={
b_:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cb.prototype={
bd:function(){var u=this
if(!u.gbe()){C.b.D(u.a.a.c.b,u)
u.a.a.W()}u.c4()
u.c5()},
bs:function(a){this.a=a
a.c.b.push(this)},
bt:function(a){this.b=a
a.c.c.push(this)},
c4:function(){var u=this.a
if(u!=null){C.b.D(u.c.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.b.D(u.c.c,this)
this.b=null}},
gbe:function(){return this.a==null||this.b==null},
aS:function(a,b){var u=b.a
if(u==null)throw H.c(P.m("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.m("May not replace a line's vertex with a vertex attached to a different shape."))},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){if(this.gbe())return a+"disposed"
return a+C.a.ao(J.a7(this.a.e),0)+", "+C.a.ao(J.a7(this.b.e),0)},
R:function(){return this.J("")}}
F.h2.prototype={}
F.iI.prototype={
b_:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
return t==u.e}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
return t==u.e}else return!1}}}
F.cl.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ao(J.a7(u.e),0)},
R:function(){return this.J("")}}
F.i4.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
b0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.C()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.n(0,r.hE())}h.a.C()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cl()
if(n.a==null)H.o(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.nm(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.C()
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
F.c5(l,k,i)}g=h.e
if(g!=null)g.az(0)},
ak:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ak()||!1
if(!t.a.ak())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
hS:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.d(t,u)
s=t[u]
if(b.b_(0,a,s))return s}return},
hb:function(a,b){var u,t,s,r,q,p
this.a.n(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.o(P.m("May not replace a face's vertex when the point has been disposed."))
if(J.A(q,s)){r.aS(s,a)
q=r.a
if(q!=null){C.b.D(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aS(s,a)
q=r.b
if(q!=null){C.b.D(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.A(r.c,s)){r.aS(s,a)
q=r.c
if(q!=null){C.b.D(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null)H.o(P.m("May not replace a line's vertex when the point has been disposed."))
if(J.A(q,s)){r.aS(s,a)
q=r.a
if(q!=null){C.b.D(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aS(s,a)
q=r.b
if(q!=null){C.b.D(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.o(P.m("May not replace a point's vertex when the point has been disposed."))
if(J.A(q,s)){if(a.a==null)H.o(P.m("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}this.a.D(0,s)}},
ec:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.b(n.slice(0),[H.aQ(n,0)])
for(n=[F.b6];u.length!==0;){t=C.b.ghU(u)
C.b.cG(u,0)
if(t!=null){s=H.b([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b_(0,t,q)){s.push(q)
C.b.cG(u,r)}}if(s.length>1){p=b.b0(s)
if(p!=null){o.hb(p,s)
u.push(p)}}}}o.a.C()
o.c.bI()
o.d.bI()
o.b.ip()
o.c.cH(new F.iI())
o.d.cH(new F.ic())
n=o.e
if(n!=null)n.az(0)},
bx:function(){this.ec(new F.cz(),new F.hI())},
dI:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ax()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bb().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.cT().a)!==0)++s
if((t&$.cU().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.b9().a)!==0)++s
r=a4.gcS(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.d_])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hx(m)
k=l.gcS(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.d_(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].i4(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bR(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c1(new Z.dX(a1,d),o,a4)
c.b=H.b([],[Z.bB])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)}a=Z.l7(u,34963,b)
c.b.push(new Z.bB(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.C()
b.push(t.e)}a=Z.l7(u,34963,b)
c.b.push(new Z.bB(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.C()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.C()
b.push(t.e)}a=Z.l7(u,34963,b)
c.b.push(new Z.bB(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.J(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.J(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.J(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.J(t))}return C.b.j(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.E(null)}}
F.i5.prototype={
bv:function(a,b,c,d){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t.a.n(0,d)
u=new F.aX()
t=b.a
if(t==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.o(P.m("May not create a face with vertices attached to different shapes."))
u.bs(b)
u.bt(c)
u.dk(d)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
du:function(a){var u,t,s,r,q,p=H.b([],[F.aX]),o=a.length
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
p.push(F.c5(u,r,q))}}return p},
hu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aX])
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
h.push(F.c5(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c5(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c5(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c5(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cH:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b_(0,p,n)){p.bd()
break}}}}},
bI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghB(s)
if(t)s.bd()}},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].cb())s=!1
return s},
ca:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].c9())s=!1
return s},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(a))
return C.b.j(r,"\n")},
R:function(){return this.J("")}}
F.i6.prototype={
gl:function(a){return this.b.length},
cH:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b_(0,p,n)){p.bd()
break}}}}},
bI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.A(s.a,s.b)
if(t)s.bd()}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].J(a+(""+u+". ")))}return C.b.j(s,"\n")},
R:function(){return this.J("")}}
F.i7.prototype={
gl:function(a){return this.b.length},
ip:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(a))
return C.b.j(r,"\n")},
R:function(){return this.J("")}}
F.b6.prototype={
cf:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bM(u.cx,r,o,t,s,q,p,a,n)},
hE:function(){return this.cf(null)},
sa_:function(a,b){var u
if(!J.A(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
scA:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.A(this.r,a)){this.r=a
u=this.a
if(u!=null)u.W()}},
sdG:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.A(this.x,a)){this.x=a
u=this.a
if(u!=null)u.W()}},
scJ:function(a){var u
if(!J.A(this.y,a)){this.y=a
u=this.a
if(u!=null)u.W()}},
saq:function(a){var u
if(!J.A(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sal:function(a,b){var u
if(!J.A(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.W()}},
ser:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.W()}},
sdE:function(a){var u
if(!J.A(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
i4:function(a){var u,t,s=this
if(a.u(0,$.ax())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.bb())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.ba())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.bs())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.bc())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cT())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cU())){u=s.Q
if(u==null)return H.b([1,1,1,1],[P.M])
else return u.cK(0)}else if(a.u(0,$.bY()))return H.b([s.ch],[P.M])
else if(a.u(0,$.b9())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
cb:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cy()
t.d.I(0,new F.jg(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.az(0)}return!0},
c9:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cy()
t.d.I(0,new F.jf(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.az(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ao(J.a7(s.e),0))
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
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
R:function(){return this.J("")}}
F.jg.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.jf.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j6.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
dv:function(a,b,c,d,e,f,g){var u=F.bM(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bw:function(a,b,c,d,e,f){return this.dv(a,b,c,null,d,e,f)},
hv:function(a,b,c,d,e,f){return this.dv(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.m("May not remove a vertex without first making it empty."))
b.a=null
C.b.D(this.c,b)
u.W()
return this.b=!0},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].cb()
return!0},
ca:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].c9()
return!0},
hA:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.R()},
J:function(a){var u,t,s,r
this.C()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].J(a))
return C.b.j(u,"\n")},
R:function(){return this.J("")}}
F.j7.prototype={
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
I:function(a,b){var u=this
C.b.I(u.b,b)
C.b.I(u.c,new F.j8(u,b))
C.b.I(u.d,new F.j9(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(""))
return C.b.j(r,"\n")}}
F.j8.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.j9.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.jb.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(""))
return C.b.j(r,"\n")}}
F.jc.prototype={}
F.cz.prototype={
b_:function(a,b,c){return J.A(b.f,c.f)}}
F.jd.prototype={}
F.ja.prototype={
b0:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.H(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.x(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.x(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.X(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.x(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b5(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b5(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.t(a)
i+=a;++j}a3=F.bM(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sa_(0,a4)
else a3.sa_(0,o.p(0,n))
if(p==null)a3.scA(a4)
else a3.scA(p.p(0,Math.sqrt(p.A(p))))
if(q==null)a3.sdG(a4)
else a3.sdG(q.p(0,Math.sqrt(q.A(q))))
if(l<=0||s==null)a3.scJ(a4)
else a3.scJ(s.p(0,l))
if(k<=0||t==null)a3.saq(a4)
else a3.saq(t.p(0,k))
if(m<=0||r==null)a3.sal(0,a4)
else{u=r.p(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sal(0,new V.af(a,a0,a1,u))}if(j<=0)a3.ser(0,0)
else a3.ser(0,i/j)
return a3}}
F.hI.prototype={
b0:function(a){var u,t,s,r=V.cy()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.x(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.p(0,Math.sqrt(r.A(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)a[t].scA(r)
return}}
F.je.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].J(""))
return C.b.j(r,"\n")}}
O.dl.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.G():u},
Y:function(a){var u=this.fr
if(u!=null)u.E(a)},
b7:function(){return this.Y(null)},
dg:function(a){this.a=null
this.Y(a)},
he:function(){return this.dg(null)},
fg:function(a,b){var u=new D.bf()
u.b=!0
this.Y(u)},
fi:function(a,b){var u=new D.bg()
u.b=!0
this.Y(u)},
d4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.K(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gax()
o=u.h(0,q.gax())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cZ])
u.I(0,new O.hm(g,n))
C.b.b5(n,new O.hn())
m=new H.K(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d6])
m.I(0,new O.ho(g,l))
C.b.b5(l,new O.hp())
k=new H.K(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gax()
o=k.h(0,q.gax())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dv])
k.I(0,new O.hq(g,j))
C.b.b5(j,new O.hr())
i=new H.K(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.gax()
p=i.h(0,q.gax())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dD])
i.I(0,new O.hs(g,h))
C.b.b5(h,new O.ht())
f=C.c.a7(g.e.a.length+3,4)
g.dy.e
return A.nu(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ai:function(a,b){if(b!=null)if(!C.b.G(a,b)){b.a=a.length
a.push(b)}},
ar:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a8(u,u.length);u.w();){t=u.d
t.toString
s=$.j5
if(s==null)s=$.j5=new V.x(0,0,1)
t.a=s
r=$.j4
t.d=r==null?$.j4=new V.x(0,1,0):r
r=$.j3
t.e=r==null?$.j3=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bK(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bK(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bK(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
ek:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.d4()
u=b2.fr.h(0,b1.aF)
if(u==null){u=A.nt(b1,b2.a)
b2.dz(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bA
b1=b3.e
if(!(b1 instanceof Z.c1))b1=b3.e=null
if(b1==null||!b1.d.u(0,s)){b1=t.k4
if(b1)b3.d.ak()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.ca()
q.a.ca()
q=q.e
if(q!=null)q.az(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hA()
p=p.e
if(p!=null)p.az(0)}n=b3.d.dI(new Z.dY(b2.a),s)
n.aG($.ax()).e=b0.a.Q.c
if(b1)n.aG($.bb()).e=b0.a.cx.c
if(r)n.aG($.ba()).e=b0.a.ch.c
if(t.r2)n.aG($.bs()).e=b0.a.cy.c
if(q)n.aG($.bc()).e=b0.a.db.c
if(t.ry)n.aG($.b9()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dJ])
b0.a.a2(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga4(r)
b1=b1.dy
b1.toString
b1.ah(r.ad(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga4(r)
q=b2.dx
q=b2.cx=r.t(0,q.ga4(q))
r=q}b1=b1.fr
b1.toString
b1.ah(r.ad(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gim()
q=b2.dx
q=b2.ch=r.t(0,q.ga4(q))
r=q}b1=b1.fy
b1.toString
b1.ah(r.ad(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga4(r)
b1=b1.fx
b1.toString
b1.ah(r.ad(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ah(C.j.ad(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ah(C.j.ad(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ah(C.j.ad(r,!0))}if(t.bz>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bR(r.ad(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.aj(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.aj(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.aj(b1.aF,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bA
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.aj(b1.dO,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.dR
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.dP
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.aj(b1.dQ,r)}b1=t.z
if(b1.length>0){r=P.w
i=new H.K([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gax()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.bZ(b0.a.cj.h(0,f),e)
p=g.giF()
o=$.aH
p=p.bm(o==null?$.aH=new V.H(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giK()
o=$.aH
p=p.bm(o==null?$.aH=new V.H(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gal(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdN()){p=g.gdB()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdC()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdD()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.ci.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
b=new H.K([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.bZ(b0.a.cl.h(0,0),e)
p=c.bK(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.p(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.ck.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
a1=new H.K([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gax()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.bZ(b0.a.cn.h(0,f),e)
a2=c.t(0,g.ga4(g))
p=g.ga4(g)
o=$.aH
p=p.bm(o==null?$.aH=new V.H(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aH
p=a2.bm(p==null?$.aH=new V.H(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gal(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaL()
p=a2.ct(0)
o=p.a
a=p.b
a0=p.c
a3=p.e
a4=p.f
a5=p.r
a6=p.y
a7=p.z
p=p.Q
a8=d.d
a8.toString
j=new Float32Array(H.bR(new V.dm(o,a,a0,a3,a4,a5,a6,a7,p).ad(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaL()
p=g.gaL()
if(!C.b.G(m,p)){p.a=m.length
m.push(p)}p=g.gaL()
o=p.gbg(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb4()
p=g.gex()
o=d.x
o.toString
a=p.ghL(p)
a0=p.ghM(p)
a3=p.ghN()
p=p.ghK()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb4()
if(!C.b.G(m,p)){p.a=m.length
m.push(p)}p=g.gb4()
o=p.gbg(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdN()){p=g.gdB()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdC()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdD()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.cm.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
a9=new H.K([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gax()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.bZ(b0.a.cp.h(0,f),e)
p=g.gil(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giI(g).iV()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bm(g.gil(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gal(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaL()
p=g.gcM()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcI(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giW()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giX()
o=d.y
o.a.uniform1f(o.d,p)
g.gaL()
p=g.gaL()
if(!C.b.G(m,p)){p.a=m.length
m.push(p)}p=g.gaL()
o=p.gbg(p)
if(o){o=d.dx
o.toString
a=p.gbg(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gi_(p)
o.a.uniform1i(o.d,p)}}g.gb4()
p=g.gex()
o=d.z
o.toString
a=p.ghL(p)
a0=p.ghM(p)
a3=p.ghN()
p=p.ghK()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb4()
if(!C.b.G(m,p)){p.a=m.length
m.push(p)}p=g.gb4()
o=p.gbg(p)
if(o){o=d.dy
o.toString
a=p.gbg(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gi_(p)
o.a.uniform1i(o.d,p)}}if(g.giJ()){p=g.giH()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.giG()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdN()){p=g.gdB()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdC()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdD()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.co.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.ai(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.aj(b1.dS,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga4(r).ct(0)}b1=b1.id
b1.toString
b1.ah(r.ad(0,!0))}if(t.db){b0.ai(m,b0.ch)
b1=b0.a
r=b0.ch
b1.aj(b1.dT,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dU
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.aj(b1.dV,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.dW
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dX
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.aj(b1.dY,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.dZ
r.a.uniform1f(r.d,p)}if(b1.c){b0.ai(m,b0.db.e)
r=b0.a
p=b0.db.e
r.aj(r.e_,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a2(b2)
r=b3.e
r.a2(b2)
r.ag(b2)
r.aM(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.dL()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d4().aF}}
O.hm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cZ(a,C.c.a7(b+3,4)*4))}}
O.hn.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.ho.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d6(a,C.c.a7(b+3,4)*4))}}
O.hp.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.hq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dv(a,C.c.a7(b+3,4)*4))}}
O.hr.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.hs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dD(a,C.c.a7(b+3,4)*4))}}
O.ht.prototype={
$2:function(a,b){return J.cV(a.a,b.a)}}
O.hg.prototype={
aC:function(){var u,t=this
t.cU()
u=t.f
if(!(Math.abs(u-1)<$.D().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.Y(u)}}}
O.ce.prototype={
Y:function(a){return this.a.Y(a)},
b7:function(){return this.Y(null)},
aC:function(){},
c6:function(a){var u,t,s=this
if(!s.c.u(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.Y(null)}},
saq:function(a){var u,t=this,s=t.c
if(!s.c)t.c6(new A.a2(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gq().D(0,t.gaR())
u=t.e
t.e=a
a.gq().n(0,t.gaR())
s=new D.C(t.b+".textureCube",u,t.e)
s.b=!0
t.a.Y(s)}}}
O.hh.prototype={}
O.aB.prototype={
di:function(a){var u,t,s=this
if(!s.f.u(0,a)){u=s.f
s.f=a
t=new D.C(s.b+".color",u,a)
t.b=!0
s.a.Y(t)}},
aC:function(){this.cU()
this.di(new V.Y(1,1,1))},
sal:function(a,b){this.c6(new A.a2(!0,!1,this.c.c))
this.di(b)}}
O.hj.prototype={}
O.hk.prototype={
aC:function(){var u,t=this
t.cV()
u=t.ch
if(!(Math.abs(u-1)<$.D().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.Y(u)}}}
O.hl.prototype={
dj:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.D().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.Y(t)}},
aC:function(){this.cV()
this.dj(100)}}
O.dB.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
Y:function(a){var u=this.e
if(u!=null)u.E(a)},
b7:function(){return this.Y(null)},
ek:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.id(t,n)
u.cW(t,n)
u.e6(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"fov"),"$iV")
u.ch=H.j(u.y.h(0,"ratio"),"$iV")
u.cx=H.j(u.y.h(0,"boxClr"),"$iI")
u.cy=H.j(u.y.h(0,"boxTxt"),"$ia1")
u.db=H.j(u.y.h(0,"viewMat"),"$iac")
a.dz(u)}o.a=u}if(b.e==null){t=b.d.dI(new Z.dY(a.a),$.ax())
t.aG($.ax()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a2(a)}t=a.d
s=a.c
r=o.a
r.a2(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cR(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).ct(0)
r=r.db
r.toString
r.ah(s.ad(0,!0))
t=b.e
if(t instanceof Z.c1){t.a2(a)
t.ag(a)
t.aM(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dL()
t=o.c
if(t!=null)t.aM(a)}}
O.dI.prototype={}
T.dJ.prototype={}
T.iv.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
a2:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aM:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iw.prototype={
eb:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.iv()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aU(u,k,r,34069,!1,!1)
t.aU(u,k,o,34070,!1,!1)
t.aU(u,k,q,34071,!1,!1)
t.aU(u,k,n,34072,!1,!1)
t.aU(u,k,p,34073,!1,!1)
t.aU(u,k,m,34074,!1,!1)
return u},
ea:function(a){return this.eb(a,".png")},
aU:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.a0(u,"load",new T.ix(this,u,!1,b,!1,d,a),!1)},
hf:function(a,b,c){var u,t,s,r
b=V.ll(b)
u=V.ll(a.width)
t=V.ll(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kN()
s.width=u
s.height=t
r=C.i.eu(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.p3(r.getImageData(0,0,s.width,s.height))}}}
T.ix.prototype={
$1:function(a){var u=this,t=u.a,s=t.hf(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.a5.iw(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hO()}++t.e}}
X.kM.prototype={}
X.fL.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.G():u},
au:function(a){var u=this.x
if(u!=null)u.E(a)},
a2:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.d.ap(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.d.ap(r*t)
r=C.d.ap(s.c*u)
a.c=r
s=C.d.ap(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fS.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.G():u},
a2:function(a){var u
a.cy.bH(V.bD())
u=V.bD()
a.db.bH(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()}}
X.du.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.G():u},
au:function(a){var u=this.f
if(u!=null)u.E(a)},
fm:function(){return this.au(null)},
a2:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aC(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bH(k)
r=$.lK
if(r==null){r=V.l1()
q=V.l6()
p=$.m1
r=V.lG(r,q,p==null?$.m1=new V.x(0,0,-1):p)
$.lK=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b2(0,a,s)
if(t!=null)u=t.t(0,u)}a.db.bH(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()}}
X.ir.prototype={}
V.d1.prototype={
bo:function(a){this.b=new P.fQ(C.U)
this.c=null
this.d=H.b([],[[P.q,W.aq]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.aq]))
u=a.split("\n")
for(l=u.length,t=[W.aq],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eZ(q,0,q.length)
n=o==null?q:o
C.S.ew(p,H.ln(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gay(m.d).push(p)}},
ei:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.q,W.aq]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.by()
for(t.toString,s=new H.p(u),s=new P.bO(t.cL(new H.bk(s,s.gl(s))).a());s.w();)r.bG(s.gF(s))}}
V.kB.prototype={
$1:function(a){var u=C.d.eo(this.a.ghZ(),2)
if(u!=="0.00")P.lm(u+" fps")}}
V.fq.prototype={
bG:function(a){var u=this
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
by:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iB()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.v(new H.p("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.v(new H.p("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.P("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.P("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.v(new H.p("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.P("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.P("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.v(new H.p(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.v(new H.p(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.v(new H.p('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.v(new H.p('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.v(new H.p("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.v(new H.p('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aS())
t=a1.k(0,r).j(0,h)
u=K.v(new H.p("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.v(new H.p("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.v(new H.p("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.v(new H.p("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aS())
t=a1.k(0,r).j(0,e)
u=K.v(new H.p("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.v(new H.p("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.v(new H.p("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.aa()
s=[K.bl]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.v(new H.p("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.v(new H.p("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.aa()
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.v(new H.p("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.v(new H.p(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.v(new H.p(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.T("Num")
t=a1.k(0,n)
t.d=t.a.T("Num")
t=a1.k(0,m)
t.d=t.a.T("Symbol")
t=a1.k(0,j)
t.d=t.a.T("String")
t=a1.k(0,g)
t.d=t.a.T("String")
t=a1.k(0,c)
t.d=t.a.T(d)
t=a1.k(0,a0)
t.d=t.a.T(a0)
t=a1.k(0,q)
t=t.d=t.a.T(q)
u=[P.h]
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fN.prototype={
bG:function(a){var u=this
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
by:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iB()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.v(new H.p("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.v(new H.p("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.P("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.P("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.v(new H.p("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.P("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.P("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.v(new H.p(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.v(new H.p(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.v(new H.p("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.v(new H.p("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aS())
t=e.k(0,j).j(0,i)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.aa()
s=[K.bl]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.v(new H.p("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.aa()
u.a=H.b([],s)
t.a.push(u)
t=K.v(new H.p("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.v(new H.p(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.v(new H.p(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.T("Num")
u=e.k(0,n)
u.d=u.a.T("Num")
u=e.k(0,m)
u.d=u.a.T("Symbol")
u=e.k(0,i)
u.d=u.a.T(j)
u=e.k(0,g)
u.d=u.a.T(h)
u=e.k(0,f)
u.d=u.a.T(f)
u=e.k(0,q)
u=u.d=u.a.T(q)
t=[P.h]
u.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fO.prototype={
bG:function(a){var u=this,t="#111"
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
by:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iB()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.v(new H.p("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.v(new H.p("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.v(new H.p("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.v(new H.p("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.v(new H.p("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.v(new H.p('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.v(new H.p('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.v(new H.p("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.v(new H.p('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aS())
l.k(0,s).j(0,m).a.push(new K.aS())
u=l.k(0,m).j(0,m)
t=new K.aa()
t.a=H.b([],[K.bl])
u.a.push(t)
u=K.v(new H.p('</\\-!>=_"'))
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.T("Symbol")
u=l.k(0,n)
u.d=u.a.T("String")
u=l.k(0,r)
t=u.a.T(r)
u.d=t
t.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.T(q)
t=l.k(0,m)
t.d=t.a.T(m)
return l}}
V.hO.prototype={
ei:function(a,b){this.d=H.b([],[[P.q,W.aq]])
this.O(C.b.j(b,"\n"),"#111")},
bG:function(a){},
by:function(){return}}
V.hT.prototype={
bv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lY().gcF().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.dr(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ls(m.c).n(0,q)
o=W.nf("radio")
o.checked=s
o.name=u
W.a0(o,"change",new V.hU(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.ls(m.c).n(0,r.createElement("br"))},
av:function(a,b,c){return this.bv(a,b,c,!1)},
dr:function(a){var u,t,s=P.lY(),r=P.h,q=P.no(s.gcF(),r,r)
q.m(0,this.a,a)
u=s.el(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jK([],[]).bL(""),"",t)}}
V.hU.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dr(u.d)}}}
V.i8.prototype={
eJ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a0(q,"scroll",new V.ia(o),!1)},
dw:function(a){var u,t,s,r,q,p,o,n
this.hj()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.i3(a),s.toString,r=new H.p(r),r=new P.bO(s.cL(new H.bk(r,r.gl(r))).a());r.w();){s=r.gF(r)
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
if(H.mA(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eK(C.z,s,C.e,!1)
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
es:function(a){var u,t,s,r=new V.fq("dart")
r.bo("dart")
u=new V.fN("glsl")
u.bo("glsl")
t=new V.fO("html")
t.bo("html")
s=C.b.hV(H.b([r,u,t],[V.d1]),new V.ib(a))
if(s!=null)return s
r=new V.hO("plain")
r.bo("plain")
return r},
dt:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cQ(s).a6(s,"+")){b0[t]=C.a.ab(s,1)
a6.push(1)
u=!0}else if(C.a.a6(s,"-")){b0[t]=C.a.ab(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.es(a8)
r.ei(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eK(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lu()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.n)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.n)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gS(s);a2.w();)d.appendChild(a2.gF(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hs:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
hj:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.iB()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.v(new H.p("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.aa()
r=[K.bl]
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.p("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.v(new H.p("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.v(new H.p("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.aa()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.p("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.v(new H.p("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.v(new H.p("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.aa()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.p("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.v(new H.p("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.v(new H.p("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.v(new H.p("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.v(new H.p("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.aa()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.v(new H.p("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.aa()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aS())
s=u.k(0,i).j(0,i)
t=new K.aa()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.T(p)
s=u.k(0,n)
s.d=s.a.T(o)
s=u.k(0,"CodeEnd")
s.d=s.a.T(m)
s=u.k(0,j)
s.d=s.a.T("Link")
s=u.k(0,i)
s.d=s.a.T(i)
this.b=u}}
V.ia.prototype={
$1:function(a){P.lU(C.n,new V.i9(this.a))}}
V.i9.prototype={
$0:function(){var u=C.d.ap(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.ib.prototype={
$1:function(a){return a.a===this.a}}
T.kq.prototype={
$0:function(){this.a.sa9(0,F.lg(1,null,null,1))}}
T.kr.prototype={
$0:function(){this.a.sa9(0,F.lg(8,null,null,8))}}
T.ks.prototype={
$0:function(){this.a.sa9(0,F.mo(!0,40,1))}}
T.kt.prototype={
$0:function(){this.a.sa9(0,F.mo(!1,40,0))}}
T.ku.prototype={
$0:function(){this.a.sa9(0,F.pj(10,20))}}
T.kv.prototype={
$0:function(){var u=F.dA(),t=Math.sqrt(5)/2+0.5,s=F.a6(u,new V.x(-1,t,0)),r=F.a6(u,new V.x(1,t,0)),q=-t,p=F.a6(u,new V.x(-1,q,0)),o=F.a6(u,new V.x(1,q,0)),n=F.a6(u,new V.x(0,-1,q)),m=F.a6(u,new V.x(0,1,q)),l=F.a6(u,new V.x(0,-1,t)),k=F.a6(u,new V.x(0,1,t)),j=F.a6(u,new V.x(t,0,1)),i=F.a6(u,new V.x(t,0,-1)),h=F.a6(u,new V.x(q,0,1)),g=F.a6(u,new V.x(q,0,-1))
F.Q(u,s,g,m,2)
F.Q(u,s,m,r,2)
F.Q(u,s,r,k,2)
F.Q(u,s,k,h,2)
F.Q(u,s,h,g,2)
F.Q(u,r,m,i,2)
F.Q(u,m,g,n,2)
F.Q(u,g,h,p,2)
F.Q(u,h,k,l,2)
F.Q(u,k,r,j,2)
F.Q(u,o,i,n,2)
F.Q(u,o,n,p,2)
F.Q(u,o,p,l,2)
F.Q(u,o,l,j,2)
F.Q(u,o,j,i,2)
F.Q(u,n,i,m,2)
F.Q(u,p,n,g,2)
F.Q(u,l,p,h,2)
F.Q(u,j,l,k,2)
F.Q(u,i,j,r,2)
u.ec(new F.cz(),new F.ja())
this.a.sa9(0,u)}}
T.kw.prototype={
$0:function(){this.a.sa9(0,F.mz(6,6))}}
T.kx.prototype={
$0:function(){this.a.sa9(0,F.ps())}}
T.ky.prototype={
$0:function(){this.a.sa9(0,F.pi())}}
T.kz.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.dt("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dt("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eB=u.i
u=J.dg.prototype
u.eD=u.i
u=P.i.prototype
u.eC=u.bM
u=W.S.prototype
u.bO=u.am
u=W.es.prototype
u.eE=u.aw
u=K.dc.prototype
u.eA=u.aI
u.cT=u.i
u=O.ce.prototype
u.cU=u.aC
u=O.aB.prototype
u.cV=u.aC})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ot","nj",21)
t(P,"oY","o1",8)
t(P,"oZ","o2",8)
t(P,"p_","o3",8)
s(P,"mn","oW",10)
r(W,"pc",4,null,["$4"],["o4"],16,0)
r(W,"pd",4,null,["$4"],["o5"],16,0)
var l
q(l=E.aW.prototype,"geg",0,0,null,["$1","$0"],["eh","ib"],0,0)
q(l,"gee",0,0,null,["$1","$0"],["ef","i8"],0,0)
p(l,"gi6","i7",4)
p(l,"gi9","ia",4)
q(l=E.dK.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],0,0)
o(l,"gis","em",10)
n(l=X.dT.prototype,"gfA","fB",5)
n(l,"gfj","fk",5)
n(l,"gfs","ft",2)
n(l,"gfE","fF",11)
n(l,"gfC","fD",11)
n(l,"gfI","fJ",2)
n(l,"gfM","fN",2)
n(l,"gfw","fz",2)
n(l,"gfK","fL",2)
n(l,"gfu","fv",2)
n(l,"gfO","fP",19)
n(l,"gfQ","fR",5)
n(l,"gh5","h6",6)
n(l,"gh1","h2",6)
n(l,"gh3","h4",6)
q(D.by.prototype,"geL",0,0,null,["$1","$0"],["aA","eM"],0,0)
q(l=D.di.prototype,"gdd",0,0,null,["$1","$0"],["de","fG"],0,0)
n(l,"gfS","fT",20)
p(l,"gfd","fe",12)
p(l,"gfW","fX",12)
m(V.L.prototype,"gl","bf",7)
m(V.x.prototype,"gl","bf",7)
m(V.b5.prototype,"gl","bf",7)
q(l=U.c7.prototype,"gaQ",0,0,null,["$1","$0"],["U","ac"],0,0)
p(l,"gfb","fc",13)
p(l,"gfU","fV",13)
q(l=U.dU.prototype,"gaQ",0,0,null,["$1","$0"],["U","ac"],0,0)
n(l,"gbW","bX",1)
n(l,"gbY","bZ",1)
n(l,"gc_","c0",1)
q(l=U.dV.prototype,"gaQ",0,0,null,["$1","$0"],["U","ac"],0,0)
n(l,"gbW","bX",1)
n(l,"gbY","bZ",1)
n(l,"gc_","c0",1)
n(l,"gf4","f5",1)
n(l,"gf6","f7",1)
n(l,"ghq","hr",1)
n(l,"gho","hp",1)
n(l,"ghm","hn",1)
n(U.dW.prototype,"gf9","fa",1)
q(l=M.d2.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
p(l,"gfY","fZ",14)
p(l,"gh_","h0",14)
q(M.d4.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
q(l=M.d9.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
p(l,"gfn","fo",4)
p(l,"gfp","fq",4)
q(l=O.dl.prototype,"gaR",0,0,null,["$1","$0"],["Y","b7"],0,0)
q(l,"ghd",0,0,null,["$1","$0"],["dg","he"],0,0)
p(l,"gff","fg",15)
p(l,"gfh","fi",15)
q(O.ce.prototype,"gaR",0,0,null,["$1","$0"],["Y","b7"],0,0)
q(O.dB.prototype,"gaR",0,0,null,["$1","$0"],["Y","b7"],0,0)
q(X.du.prototype,"gfl",0,0,null,["$1","$0"],["au","fm"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a4,null)
s(P.a4,[H.kX,J.a,J.a8,P.ef,P.i,H.bk,P.fW,H.da,H.iT,H.fi,H.iG,P.bz,H.c2,H.ex,P.a3,H.h3,H.h5,H.fY,P.eD,P.bN,P.bO,P.dZ,P.dG,P.im,P.dL,P.k1,P.jE,P.jy,P.ee,P.y,P.jU,P.hc,P.fe,P.fR,P.k_,P.jZ,P.aP,P.ag,P.ae,P.be,P.hM,P.dE,P.e7,P.fK,P.fM,P.q,P.T,P.bn,P.h,P.U,P.bP,P.iV,P.jH,W.fm,W.cC,W.N,W.ds,W.es,W.jO,W.db,W.b1,W.jD,W.eL,P.jJ,P.eI,P.jz,P.bJ,K.aS,K.dc,K.bl,K.hV,K.i3,L.dF,L.dM,L.dN,L.iA,O.aT,O.cf,E.fa,E.aW,E.bw,E.bE,E.e6,E.hW,E.dK,Z.dX,Z.dY,Z.c1,Z.bB,Z.b7,D.fd,D.bA,D.Z,X.d0,X.dh,X.h0,X.h9,X.am,X.hA,X.iC,X.dT,D.f7,D.by,D.a9,D.hQ,D.ih,V.Y,V.af,V.fB,V.dm,V.b_,V.X,V.H,V.an,V.dx,V.L,V.x,V.b5,U.dU,U.dV,U.dW,M.d4,M.d9,M.as,A.cY,A.f2,A.a2,A.cZ,A.d6,A.dv,A.dD,A.hi,A.ct,A.cu,A.cw,A.cx,A.dQ,A.iO,F.aX,F.fE,F.cb,F.h2,F.cl,F.i4,F.i5,F.i6,F.i7,F.b6,F.j6,F.j7,F.jb,F.jc,F.jd,F.je,O.dI,O.ce,O.hj,T.iw,X.kM,X.ir,X.fS,X.du,V.d1,V.hT,V.i8])
s(J.a,[J.fX,J.df,J.dg,J.bh,J.ca,J.bi,H.ci,H.bm,W.f,W.f_,W.bu,W.az,W.J,W.e0,W.al,W.fr,W.fs,W.e2,W.d8,W.e4,W.fu,W.k,W.e8,W.aA,W.fP,W.ea,W.aY,W.h8,W.hu,W.eg,W.eh,W.aD,W.ei,W.el,W.aF,W.ep,W.er,W.aJ,W.et,W.aK,W.ey,W.at,W.eB,W.iz,W.aM,W.eE,W.iE,W.j_,W.eM,W.eO,W.eQ,W.eS,W.eU,P.aZ,P.ec,P.b2,P.en,P.hS,P.ez,P.b4,P.eG,P.f3,P.e_,P.dy,P.ev])
s(J.dg,[J.hN,J.bL,J.bj])
t(J.kW,J.bh)
s(J.ca,[J.de,J.dd])
t(P.h7,P.ef)
s(P.h7,[H.dR,W.jo,W.a5,P.fG])
t(H.p,H.dR)
s(P.i,[H.u,H.cd,H.cA,P.fU])
s(H.u,[H.dj,H.h4])
t(H.fx,H.cd)
s(P.fW,[H.hd,H.ji])
t(H.he,H.dj)
t(H.fj,H.fi)
s(P.bz,[H.hJ,H.h_,H.iS,H.fc,H.i1,P.dt,P.ap,P.iU,P.iQ,P.cp,P.fh,P.fp])
s(H.c2,[H.kH,H.is,H.fZ,H.kk,H.kl,H.km,P.jk,P.jj,P.jl,P.jm,P.jT,P.jS,P.ka,P.jB,P.jC,P.h6,P.hb,P.fv,P.fw,P.iZ,P.iW,P.iX,P.iY,P.jV,P.jW,P.jY,P.jX,P.k5,P.k4,P.k6,P.k7,W.fy,W.hw,W.hy,W.i0,W.il,W.jt,W.hH,W.hG,W.jF,W.jG,W.jR,W.k0,P.jL,P.jM,P.kb,P.fH,P.fI,P.f5,E.hX,E.hY,E.hZ,E.iy,D.fC,D.fD,F.k2,F.kc,F.ke,F.kf,F.kg,F.kp,F.kC,F.kD,F.kG,F.ko,F.kd,F.jg,F.jf,F.j8,F.j9,O.hm,O.hn,O.ho,O.hp,O.hq,O.hr,O.hs,O.ht,T.ix,V.kB,V.hU,V.ia,V.i9,V.ib,T.kq,T.kr,T.ks,T.kt,T.ku,T.kv,T.kw,T.kx,T.ky,T.kz])
s(H.is,[H.ij,H.c_])
t(P.ha,P.a3)
s(P.ha,[H.K,W.jn])
t(H.dn,H.bm)
s(H.dn,[H.cE,H.cG])
t(H.cF,H.cE)
t(H.cj,H.cF)
t(H.cH,H.cG)
t(H.dp,H.cH)
s(H.dp,[H.hB,H.hC,H.hD,H.hE,H.hF,H.dq,H.ck])
t(P.jP,P.fU)
t(P.jA,P.k1)
t(P.jx,P.jE)
t(P.eJ,P.hc)
t(P.dS,P.eJ)
s(P.fe,[P.f8,P.fz])
t(P.fk,P.im)
s(P.fk,[P.f9,P.fQ,P.j2,P.j1])
t(P.j0,P.fz)
s(P.ae,[P.M,P.w])
s(P.ap,[P.bH,P.fT])
t(P.jq,P.bP)
s(W.f,[W.E,W.fF,W.cg,W.aI,W.cI,W.aL,W.au,W.cK,W.jh,W.cB,P.f6,P.bt])
s(W.E,[W.S,W.bd])
s(W.S,[W.r,P.l])
s(W.r,[W.f0,W.f1,W.bv,W.bx,W.aq,W.fJ,W.c9,W.i2,W.dH,W.ip,W.iq,W.cr])
t(W.fl,W.az)
t(W.c3,W.e0)
s(W.al,[W.fn,W.fo])
t(W.e3,W.e2)
t(W.d7,W.e3)
t(W.e5,W.e4)
t(W.ft,W.e5)
t(W.ar,W.bu)
t(W.e9,W.e8)
t(W.c6,W.e9)
t(W.eb,W.ea)
t(W.c8,W.eb)
t(W.bo,W.k)
s(W.bo,[W.bC,W.aE,W.bI])
t(W.hv,W.eg)
t(W.hx,W.eh)
t(W.ej,W.ei)
t(W.hz,W.ej)
t(W.em,W.el)
t(W.dr,W.em)
t(W.eq,W.ep)
t(W.hP,W.eq)
t(W.i_,W.er)
t(W.cJ,W.cI)
t(W.ie,W.cJ)
t(W.eu,W.et)
t(W.ig,W.eu)
t(W.ik,W.ey)
t(W.eC,W.eB)
t(W.it,W.eC)
t(W.cL,W.cK)
t(W.iu,W.cL)
t(W.eF,W.eE)
t(W.iD,W.eF)
t(W.bq,W.aE)
t(W.eN,W.eM)
t(W.jp,W.eN)
t(W.e1,W.d8)
t(W.eP,W.eO)
t(W.ju,W.eP)
t(W.eR,W.eQ)
t(W.ek,W.eR)
t(W.eT,W.eS)
t(W.jI,W.eT)
t(W.eV,W.eU)
t(W.jN,W.eV)
t(W.jr,W.jn)
t(W.js,P.dG)
t(W.jQ,W.es)
t(P.jK,P.jJ)
t(P.ab,P.jz)
t(P.ed,P.ec)
t(P.h1,P.ed)
t(P.eo,P.en)
t(P.hK,P.eo)
t(P.co,P.l)
t(P.eA,P.ez)
t(P.io,P.eA)
t(P.eH,P.eG)
t(P.iF,P.eH)
t(P.f4,P.e_)
t(P.hL,P.bt)
t(P.ew,P.ev)
t(P.ii,P.ew)
s(K.dc,[K.aa,L.dP])
s(E.fa,[Z.d_,A.dz,T.dJ])
s(D.Z,[D.bf,D.bg,D.C,X.hR])
s(X.hR,[X.dk,X.b0,X.ch,X.dO])
s(O.aT,[D.di,U.c7,M.d2])
s(D.fd,[U.fg,U.ah])
t(U.d3,U.ah)
s(A.dz,[A.hf,A.id])
s(A.dQ,[A.bp,A.iL,A.iM,A.iN,A.iJ,A.V,A.iK,A.I,A.cs,A.iP,A.cv,A.ac,A.bK,A.a1])
t(F.ic,F.fE)
t(F.iI,F.h2)
t(F.cz,F.jc)
s(F.jd,[F.ja,F.hI])
s(O.dI,[O.dl,O.dB])
s(O.ce,[O.hg,O.hh,O.aB])
s(O.aB,[O.hk,O.hl])
t(T.iv,T.dJ)
t(X.fL,X.ir)
s(V.d1,[V.fq,V.fN,V.fO,V.hO])
u(H.dR,H.iT)
u(H.cE,P.y)
u(H.cF,H.da)
u(H.cG,P.y)
u(H.cH,H.da)
u(P.ef,P.y)
u(P.eJ,P.jU)
u(W.e0,W.fm)
u(W.e2,P.y)
u(W.e3,W.N)
u(W.e4,P.y)
u(W.e5,W.N)
u(W.e8,P.y)
u(W.e9,W.N)
u(W.ea,P.y)
u(W.eb,W.N)
u(W.eg,P.a3)
u(W.eh,P.a3)
u(W.ei,P.y)
u(W.ej,W.N)
u(W.el,P.y)
u(W.em,W.N)
u(W.ep,P.y)
u(W.eq,W.N)
u(W.er,P.a3)
u(W.cI,P.y)
u(W.cJ,W.N)
u(W.et,P.y)
u(W.eu,W.N)
u(W.ey,P.a3)
u(W.eB,P.y)
u(W.eC,W.N)
u(W.cK,P.y)
u(W.cL,W.N)
u(W.eE,P.y)
u(W.eF,W.N)
u(W.eM,P.y)
u(W.eN,W.N)
u(W.eO,P.y)
u(W.eP,W.N)
u(W.eQ,P.y)
u(W.eR,W.N)
u(W.eS,P.y)
u(W.eT,W.N)
u(W.eU,P.y)
u(W.eV,W.N)
u(P.ec,P.y)
u(P.ed,W.N)
u(P.en,P.y)
u(P.eo,W.N)
u(P.ez,P.y)
u(P.eA,W.N)
u(P.eG,P.y)
u(P.eH,W.N)
u(P.e_,P.a3)
u(P.ev,P.y)
u(P.ew,W.N)})()
var v={mangledGlobalNames:{w:"int",M:"double",ae:"num",h:"String",aP:"bool",bn:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.bn,args:[,,]},{func:1,ret:-1,args:[P.w,[P.i,E.aW]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bI]},{func:1,ret:P.M},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bC]},{func:1,ret:-1,args:[P.w,[P.i,D.a9]]},{func:1,ret:-1,args:[P.w,[P.i,U.ah]]},{func:1,ret:-1,args:[P.w,[P.i,M.as]]},{func:1,ret:-1,args:[P.w,[P.i,V.b_]]},{func:1,ret:P.aP,args:[W.S,P.h,P.h,W.cC]},{func:1,ret:P.bn,args:[,]},{func:1,ret:P.bJ,args:[,,]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:P.aP,args:[[P.i,D.a9]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bv.prototype
C.i=W.bx.prototype
C.S=W.aq.prototype
C.V=J.a.prototype
C.b=J.bh.prototype
C.W=J.dd.prototype
C.c=J.de.prototype
C.j=J.df.prototype
C.d=J.ca.prototype
C.a=J.bi.prototype
C.X=J.bj.prototype
C.D=J.hN.prototype
C.a5=P.dy.prototype
C.E=W.dH.prototype
C.q=J.bL.prototype
C.F=W.bq.prototype
C.G=W.cB.prototype
C.H=new E.bw("Browser.chrome")
C.t=new E.bw("Browser.firefox")
C.u=new E.bw("Browser.edge")
C.I=new E.bw("Browser.other")
C.a7=new P.f9()
C.J=new P.f8()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.Q=new P.hM()
C.e=new P.j0()
C.R=new P.j2()
C.f=new P.jA()
C.n=new P.be(0)
C.T=new P.be(5e6)
C.U=new P.fR("element",!1,!1,!1)
C.x=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.Y=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.Z=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.y=H.b(u([]),[P.h])
C.a_=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.A=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.B=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.fj(0,{},C.y,[P.h,P.h])
C.a2=new E.bE("OperatingSystem.windows")
C.C=new E.bE("OperatingSystem.mac")
C.a3=new E.bE("OperatingSystem.linux")
C.a4=new E.bE("OperatingSystem.other")
C.a6=new P.bN(null,2)})();(function staticFields(){$.ay=0
$.c0=null
$.lw=null
$.mt=null
$.mm=null
$.mx=null
$.kh=null
$.kn=null
$.lj=null
$.bS=null
$.cO=null
$.cP=null
$.ld=!1
$.av=C.f
$.ad=[]
$.aV=null
$.kR=null
$.lC=null
$.lB=null
$.cD=P.kZ(P.h,P.fM)
$.fA=null
$.lH=null
$.lL=null
$.aH=null
$.lQ=null
$.m0=null
$.m3=null
$.m2=null
$.j3=null
$.j4=null
$.j5=null
$.m1=null
$.m5=null
$.lK=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"px","mD",function(){return H.ms("_$dart_dartClosure")})
u($,"py","lo",function(){return H.ms("_$dart_js")})
u($,"pz","mE",function(){return H.aN(H.iH({
toString:function(){return"$receiver$"}}))})
u($,"pA","mF",function(){return H.aN(H.iH({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pB","mG",function(){return H.aN(H.iH(null))})
u($,"pC","mH",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pF","mK",function(){return H.aN(H.iH(void 0))})
u($,"pG","mL",function(){return H.aN(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pE","mJ",function(){return H.aN(H.lW(null))})
u($,"pD","mI",function(){return H.aN(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pI","mN",function(){return H.aN(H.lW(void 0))})
u($,"pH","mM",function(){return H.aN(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pW","lp",function(){return P.o0()})
u($,"pJ","mO",function(){return P.nX()})
u($,"pX","mS",function(){return H.nv(H.bR(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"q_","mU",function(){return P.nJ("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q0","mV",function(){return P.or()})
u($,"pY","mT",function(){return P.lF(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pQ","mR",function(){return Z.ao(0)})
u($,"pK","mP",function(){return Z.ao(511)})
u($,"pS","ax",function(){return Z.ao(1)})
u($,"pR","bb",function(){return Z.ao(2)})
u($,"pM","ba",function(){return Z.ao(4)})
u($,"pT","bs",function(){return Z.ao(8)})
u($,"pU","bc",function(){return Z.ao(16)})
u($,"pN","cT",function(){return Z.ao(32)})
u($,"pO","cU",function(){return Z.ao(64)})
u($,"pP","mQ",function(){return Z.ao(96)})
u($,"pV","bY",function(){return Z.ao(128)})
u($,"pL","b9",function(){return Z.ao(256)})
u($,"pw","mC",function(){return new V.fB(1e-9)})
u($,"pv","D",function(){return $.mC()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ci,DataView:H.bm,ArrayBufferView:H.bm,Float32Array:H.cj,Float64Array:H.cj,Int16Array:H.hB,Int32Array:H.hC,Int8Array:H.hD,Uint16Array:H.hE,Uint32Array:H.hF,Uint8ClampedArray:H.dq,CanvasPixelArray:H.dq,Uint8Array:H.ck,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.f_,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.bx,CDATASection:W.bd,CharacterData:W.bd,Comment:W.bd,ProcessingInstruction:W.bd,Text:W.bd,CSSPerspective:W.fl,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.c3,MSStyleCSSProperties:W.c3,CSS2Properties:W.c3,CSSImageValue:W.al,CSSKeywordValue:W.al,CSSNumericValue:W.al,CSSPositionValue:W.al,CSSResourceValue:W.al,CSSUnitValue:W.al,CSSURLImageValue:W.al,CSSStyleValue:W.al,CSSMatrixComponent:W.az,CSSRotation:W.az,CSSScale:W.az,CSSSkew:W.az,CSSTranslation:W.az,CSSTransformComponent:W.az,CSSTransformValue:W.fn,CSSUnparsedValue:W.fo,DataTransferItemList:W.fr,HTMLDivElement:W.aq,DOMException:W.fs,ClientRectList:W.d7,DOMRectList:W.d7,DOMRectReadOnly:W.d8,DOMStringList:W.ft,DOMTokenList:W.fu,Element:W.S,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.c6,FileWriter:W.fF,HTMLFormElement:W.fJ,Gamepad:W.aA,History:W.fP,HTMLCollection:W.c8,HTMLFormControlsCollection:W.c8,HTMLOptionsCollection:W.c8,ImageData:W.aY,HTMLImageElement:W.c9,KeyboardEvent:W.bC,Location:W.h8,MediaList:W.hu,MessagePort:W.cg,MIDIInputMap:W.hv,MIDIOutputMap:W.hx,MimeType:W.aD,MimeTypeArray:W.hz,PointerEvent:W.aE,MouseEvent:W.aE,DragEvent:W.aE,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dr,RadioNodeList:W.dr,Plugin:W.aF,PluginArray:W.hP,RTCStatsReport:W.i_,HTMLSelectElement:W.i2,SourceBuffer:W.aI,SourceBufferList:W.ie,SpeechGrammar:W.aJ,SpeechGrammarList:W.ig,SpeechRecognitionResult:W.aK,Storage:W.ik,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableElement:W.dH,HTMLTableRowElement:W.ip,HTMLTableSectionElement:W.iq,HTMLTemplateElement:W.cr,TextTrack:W.aL,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.it,TextTrackList:W.iu,TimeRanges:W.iz,Touch:W.aM,TouchEvent:W.bI,TouchList:W.iD,TrackDefaultList:W.iE,CompositionEvent:W.bo,FocusEvent:W.bo,TextEvent:W.bo,UIEvent:W.bo,URL:W.j_,VideoTrackList:W.jh,WheelEvent:W.bq,Window:W.cB,DOMWindow:W.cB,CSSRuleList:W.jp,ClientRect:W.e1,DOMRect:W.e1,GamepadList:W.ju,NamedNodeMap:W.ek,MozNamedAttrMap:W.ek,SpeechRecognitionResultList:W.jI,StyleSheetList:W.jN,SVGLength:P.aZ,SVGLengthList:P.h1,SVGNumber:P.b2,SVGNumberList:P.hK,SVGPointList:P.hS,SVGScriptElement:P.co,SVGStringList:P.io,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b4,SVGTransformList:P.iF,AudioBuffer:P.f3,AudioParamMap:P.f4,AudioTrackList:P.f6,AudioContext:P.bt,webkitAudioContext:P.bt,BaseAudioContext:P.bt,OfflineAudioContext:P.hL,WebGL2RenderingContext:P.dy,SQLResultSetRowList:P.ii})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cK.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.mv,[])
else T.mv([])})})()
//# sourceMappingURL=test.dart.js.map
