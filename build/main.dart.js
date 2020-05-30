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
a[c]=function(){a[c]=function(){H.e1(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.cd(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={c5:function c5(){},
dd:function(a,b,c,d){return new H.aQ(a,b,[c,d])},
dm:function(a,b){H.am(a,0,J.aA(a)-1,b)},
am:function(a,b,c,d){if(c-b<=32)H.dl(a,b,c,d)
else H.dk(a,b,c,d)},
dl:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bT(a);u<=c;++u){s=t.i(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.i(a,r-1),s)
if(typeof q!=="number")return q.t()
q=q>0}else q=!1
if(!q)break
p=r-1
t.j(a,r,t.i(a,p))
r=p}t.j(a,r,s)}},
dk:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.a.C(a5-a4+1,6),i=a4+j,h=a5-j,g=C.a.C(a4+a5,2),f=g-j,e=g+j,d=J.bT(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.t()
if(a2>0){u=a1
a1=a0
a0=u}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.i(a3,a4))
d.j(a3,e,d.i(a3,a5))
t=a4+1
s=a5-1
if(J.R(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.i(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.H()
if(p<0){if(r!==t){d.j(a3,r,d.i(a3,t))
d.j(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.t()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.j(a3,r,d.i(a3,t))
n=t+1
d.j(a3,t,d.i(a3,s))
d.j(a3,s,q)
s=o
t=n
break}else{d.j(a3,r,d.i(a3,s))
d.j(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.i(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.H()
if(l<0){if(r!==t){d.j(a3,r,d.i(a3,t))
d.j(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.t()
if(k>0)for(;!0;){p=a6.$2(d.i(a3,s),a0)
if(typeof p!=="number")return p.t()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.H()
o=s-1
if(p<0){d.j(a3,r,d.i(a3,t))
n=t+1
d.j(a3,t,d.i(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.i(a3,s))
d.j(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.j(a3,a4,d.i(a3,a2))
d.j(a3,a2,b)
a2=s+1
d.j(a3,a5,d.i(a3,a2))
d.j(a3,a2,a0)
H.am(a3,a4,t-2,a6)
H.am(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.R(a6.$2(d.i(a3,t),b),0);)++t
for(;J.R(a6.$2(d.i(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.i(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.j(a3,r,d.i(a3,t))
d.j(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.i(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.H()
o=s-1
if(p<0){d.j(a3,r,d.i(a3,t))
n=t+1
d.j(a3,t,d.i(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.i(a3,s))
d.j(a3,s,q)}s=o
break}}H.am(a3,t,s,a6)}else H.am(a3,t,s,a6)},
i:function i(a){this.a=a},
aP:function aP(){},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ba:function ba(a,b,c){this.a=a
this.b=b
this.$ti=c},
aQ:function aQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ae:function ae(a,b){this.a=null
this.b=a
this.c=b},
aS:function aS(){},
bu:function bu(){},
as:function as(){},
ay:function(a){var u,t=H.e2(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
dS:function(a){return v.types[a]},
ek:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$ic6},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aB(a)
if(typeof u!=="string")throw H.e(H.x(a))
return u},
a_:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
be:function(a){return H.de(a)+H.cx(H.bV(a),0,null)},
de:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.u||!!n.$ia0){r=C.h(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ay(t.length>1&&C.b.I(t,0)===36?C.b.a3(t,1):t)},
cr:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
dh:function(a){var u,t,s,r=H.f([],[P.n])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.P)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.x(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.a.P(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.e(H.x(s))}return H.cr(r)},
dg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.x(s))
if(s<0)throw H.e(H.x(s))
if(s>65535)return H.dh(a)}return H.cr(a)},
df:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.a.P(u,10))>>>0,56320|u&1023)}throw H.e(P.ak(a,0,1114111,null,null))},
dT:function(a){throw H.e(H.x(a))},
h:function(a,b){if(a==null)J.aA(a)
throw H.e(H.M(a,b))},
M:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.u(!0,b,s,null)
u=J.aA(a)
if(!(b<0)){if(typeof u!=="number")return H.dT(u)
t=b>=u}else t=!0
if(t)return P.d6(b,a,s,null,u)
return P.al(b,s)},
dM:function(a,b,c){var u="Invalid value"
if(a>c)return new P.G(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.G(a,c,!0,b,"end",u)
return new P.u(!0,b,"end",null)},
x:function(a){return new P.u(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.aj()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.cK})
u.name=""}else u.toString=H.cK
return u},
cK:function(){return J.aB(this.dartException)},
Q:function(a){throw H.e(a)},
P:function(a){throw H.e(P.a9(a))},
r:function(a){var u,t,s,r,q,p
a=H.cH(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.f([],[P.p])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.bq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
br:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ct:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
cq:function(a,b){return new H.bc(a,b==null?null:b.method)},
c7:function(a,b){var u=b==null,t=u?null:b.method
return new H.b2(a,t,u?null:b.receiver)},
cL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.c0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.a.P(t,16)&8191)===10)switch(s){case 438:return f.$1(H.c7(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.cq(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.cN()
q=$.cO()
p=$.cP()
o=$.cQ()
n=$.cT()
m=$.cU()
l=$.cS()
$.cR()
k=$.cW()
j=$.cV()
i=r.w(u)
if(i!=null)return f.$1(H.c7(u,i))
else{i=q.w(u)
if(i!=null){i.method="call"
return f.$1(H.c7(u,i))}else{i=p.w(u)
if(i==null){i=o.w(u)
if(i==null){i=n.w(u)
if(i==null){i=m.w(u)
if(i==null){i=l.w(u)
if(i==null){i=o.w(u)
if(i==null){i=k.w(u)
if(i==null){i=j.w(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.cq(u,i))}}return f.$1(new H.bt(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.an()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.u(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.an()
return a},
cD:function(a){var u
if(a==null)return new H.aw(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.aw(a)},
dX:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.c2("Unsupported number of arguments for wrapped closure"))},
ax:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.dX)
a.$identity=u
return u},
d4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.bl().constructor.prototype):Object.create(new H.S(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.q
if(typeof t!=="number")return t.B()
$.q=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.cm(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.d0(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cm(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
d0:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dS,a)
if(typeof a=="function")if(b)return a
else{u=c?H.cl:H.c1
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
d1:function(a,b,c,d){var u=H.c1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
cm:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.d3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.d1(t,!r,u,b)
if(t===0){r=$.q
if(typeof r!=="number")return r.B()
$.q=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.T
return new Function(r+H.d(q==null?$.T=H.aG("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.q
if(typeof r!=="number")return r.B()
$.q=r+1
o+=r
r="return function("+o+"){return this."
q=$.T
return new Function(r+H.d(q==null?$.T=H.aG("self"):q)+"."+H.d(u)+"("+o+");}")()},
d2:function(a,b,c,d){var u=H.c1,t=H.cl
switch(b?-1:a){case 0:throw H.e(new H.bf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
d3:function(a,b){var u,t,s,r,q,p,o,n=$.T
if(n==null)n=$.T=H.aG("self")
u=$.ck
if(u==null)u=$.ck=H.aG("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.d2(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.q
if(typeof u!=="number")return u.B()
$.q=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.q
if(typeof u!=="number")return u.B()
$.q=u+1
return new Function(n+u+"}")()},
cd:function(a,b,c,d,e,f,g){return H.d4(a,b,c,d,!!e,!!f,g)},
c1:function(a){return a.a},
cl:function(a){return a.c},
aG:function(a){var u,t,s,r=new H.S("self","target","receiver","name"),q=J.co(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
e1:function(a){throw H.e(new P.aL(a))},
cB:function(a){return v.getIsolateTag(a)},
f:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
ej:function(a,b,c){return H.cJ(a["$a"+H.d(c)],H.bV(b))},
O:function(a,b){var u=H.bV(a)
return u==null?null:u[b]},
K:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ay(a[0].name)+H.cx(a,1,b)
if(typeof a=="function")return H.ay(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.d(b[t])}if('func' in a)return H.dy(a,b)
if('futureOr' in a)return"FutureOr<"+H.K("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
dy:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.f([],[P.p])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.h(a0,m)
p=C.b.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.m)p+=" extends "+H.K(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.K(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.K(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.K(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.dO(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.K(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
cx:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.H("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.K(p,c)}return"<"+u.h(0)+">"},
cJ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ei:function(a,b,c){return a.apply(b,H.cJ(J.N(b)["$a"+H.d(c)],H.bV(b)))},
dY:function(a){var u,t,s,r,q=$.cC.$1(a),p=$.bR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.cz.$2(a,q)
if(q!=null){p=$.bR[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.bZ[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.c_(u)
$.bR[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.bZ[q]=u
return u}if(s==="-"){r=H.c_(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.cF(a,u)
if(s==="*")throw H.e(P.cu(q))
if(v.leafTags[q]===true){r=H.c_(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.cF(a,u)},
cF:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.cf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
c_:function(a){return J.cf(a,!1,null,!!a.$ic6)},
dZ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.c_(u)
else return J.cf(u,c,null,null)},
dV:function(){if(!0===$.ce)return
$.ce=!0
H.dW()},
dW:function(){var u,t,s,r,q,p,o,n
$.bR=Object.create(null)
$.bZ=Object.create(null)
H.dU()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.cG.$1(q)
if(p!=null){o=H.dZ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
dU:function(){var u,t,s,r,q,p,o=C.m()
o=H.L(C.n,H.L(C.o,H.L(C.i,H.L(C.i,H.L(C.p,H.L(C.q,H.L(C.r(C.h),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.cC=new H.bW(r)
$.cz=new H.bX(q)
$.cG=new H.bY(p)},
L:function(a,b){return a(b)||b},
da:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(new P.aU("Illegal RegExp pattern ("+String(p)+")",a))},
e_:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
dN:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
cH:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cI:function(a,b,c){var u=H.e0(a,b,c)
return u},
e0:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.cH(b),'g'),H.dN(c))},
bq:function bq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bc:function bc(a,b){this.a=a
this.b=b},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a){this.a=a},
c0:function c0(a){this.a=a},
aw:function aw(a){this.a=a
this.b=null},
a8:function a8(){},
bo:function bo(){},
bl:function bl(){},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bf:function bf(a){this.a=a},
E:function E(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
b1:function b1(a){this.a=a},
b3:function b3(a,b){this.a=a
this.b=b
this.c=null},
Y:function Y(a,b){this.a=a
this.$ti=b},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
bY:function bY(a){this.a=a},
b0:function b0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.M(b,a))},
dx:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.dM(a,b,c))
return b},
ai:function ai(){},
ag:function ag(){},
ah:function ah(){},
bb:function bb(){},
a1:function a1(){},
a2:function a2(){},
dO:function(a){return J.d8(a?Object.keys(a):[],null)},
e2:function(a){return v.mangledGlobalNames[a]}},J={
cf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bU:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ce==null){H.dV()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.cu("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.cg()]
if(r!=null)return r
r=H.dY(a)
if(r!=null)return r
if(typeof a=="function")return C.w
u=Object.getPrototypeOf(a)
if(u==null)return C.l
if(u===Object.prototype)return C.l
if(typeof s=="function"){Object.defineProperty(s,$.cg(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
d8:function(a,b){return J.co(H.f(a,[b]))},
co:function(a){a.fixed$length=Array
return a},
d9:function(a,b){return J.cZ(a,b)},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ac.prototype
return J.aZ.prototype}if(typeof a=="string")return J.D.prototype
if(a==null)return J.b_.prototype
if(typeof a=="boolean")return J.aY.prototype
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.m)return a
return J.bU(a)},
bT:function(a){if(typeof a=="string")return J.D.prototype
if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.m)return a
return J.bU(a)},
dP:function(a){if(a==null)return a
if(a.constructor==Array)return J.z.prototype
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.m)return a
return J.bU(a)},
dQ:function(a){if(typeof a=="number")return J.X.prototype
if(typeof a=="string")return J.D.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.a0.prototype
return a},
dR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.A.prototype
return a}if(a instanceof P.m)return a
return J.bU(a)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).F(a,b)},
cY:function(a,b,c,d){return J.dR(a).aa(a,b,c,d)},
cZ:function(a,b){return J.dQ(a).A(a,b)},
az:function(a){return J.N(a).gq(a)},
ci:function(a){return J.dP(a).gv(a)},
aA:function(a){return J.bT(a).gl(a)},
aB:function(a){return J.N(a).h(a)},
k:function k(){},
aY:function aY(){},
b_:function b_(){},
ad:function ad(){},
bd:function bd(){},
a0:function a0(){},
A:function A(){},
z:function z(a){this.$ti=a},
c4:function c4(a){this.$ti=a},
aF:function aF(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
X:function X(){},
ac:function ac(){},
aZ:function aZ(){},
D:function D(){}},P={
dp:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.dJ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.ax(new P.bz(s),1)).observe(u,{childList:true})
return new P.by(s,u,t)}else if(self.setImmediate!=null)return P.dK()
return P.dL()},
dq:function(a){self.scheduleImmediate(H.ax(new P.bA(a),0))},
dr:function(a){self.setImmediate(H.ax(new P.bB(a),0))},
ds:function(a){P.ca(C.j,a)},
ca:function(a,b){var u=C.a.C(a.a,1000)
return P.dw(u<0?0:u,b)},
dw:function(a,b){var u=new P.bM()
u.a9(a,b)
return u},
eg:function(a){return new P.I(a,1)},
du:function(){return C.x},
dv:function(a){return new P.I(a,3)},
dB:function(a,b){return new P.bL(a,[b])},
dC:function(){var u,t
for(;u=$.J,u!=null;){$.a5=null
t=u.b
$.J=t
if(t==null)$.a4=null
u.a.$0()}},
dH:function(){$.cb=!0
try{P.dC()}finally{$.a5=null
$.cb=!1
if($.J!=null)$.ch().$1(P.cA())}},
dF:function(a){var u=new P.at(a)
if($.J==null){$.J=$.a4=u
if(!$.cb)$.ch().$1(P.cA())}else $.a4=$.a4.b=u},
dG:function(a){var u,t,s=$.J
if(s==null){P.dF(a)
$.a5=$.a4
return}u=new P.at(a)
t=$.a5
if(t==null){u.b=s
$.J=$.a5=u}else{u.b=t.b
$.a5=t.b=u
if(u.b==null)$.a4=u}},
dn:function(a,b){var u=$.t
if(u===C.c)return P.ca(a,b)
return P.ca(a,u.ak(b))},
cy:function(a,b,c,d,e){var u={}
u.a=d
P.dG(new P.bQ(u,e))},
dD:function(a,b,c,d){var u,t=$.t
if(t===c)return d.$0()
$.t=c
u=t
try{t=d.$0()
return t}finally{$.t=u}},
dE:function(a,b,c,d,e){var u,t=$.t
if(t===c)return d.$1(e)
$.t=c
u=t
try{t=d.$1(e)
return t}finally{$.t=u}},
bz:function bz(a){this.a=a},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a},
bB:function bB(a){this.a=a},
bM:function bM(){},
bN:function bN(a,b){this.a=a
this.b=b},
I:function I(a,b){this.a=a
this.b=b},
a3:function a3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
bL:function bL(a,b){this.a=a
this.$ti=b},
at:function at(a){this.a=a
this.b=null},
bm:function bm(){},
bn:function bn(){},
bP:function bP(){},
bQ:function bQ(a,b){this.a=a
this.b=b},
bH:function bH(){},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
db:function(a){return new P.bF([a])},
d7:function(a,b,c){var u,t
if(P.cc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.f([],[P.p])
$.l.push(a)
try{P.dA(a,u)}finally{if(0>=$.l.length)return H.h($.l,-1)
$.l.pop()}t=P.cs(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
c3:function(a,b,c){var u,t
if(P.cc(a))return b+"..."+c
u=new P.H(b)
$.l.push(a)
try{t=u
t.a=P.cs(t.a,a,", ")}finally{if(0>=$.l.length)return H.h($.l,-1)
$.l.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
cc:function(a){var u,t
for(u=$.l.length,t=0;t<u;++t)if(a===$.l[t])return!0
return!1},
dA:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.m())return
u=H.d(n.gp())
b.push(u)
m+=u.length+2;++l}if(!n.m()){if(l<=5)return
if(0>=b.length)return H.h(b,-1)
t=b.pop()
if(0>=b.length)return H.h(b,-1)
s=b.pop()}else{r=n.gp();++l
if(!n.m()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.h(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gp();++l
for(;n.m();r=q,q=p){p=n.gp();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.h(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
cp:function(a){var u,t={}
if(P.cc(a))return"{...}"
u=new P.H("")
try{$.l.push(a)
u.a+="{"
t.a=!0
a.aq(0,new P.b8(t,u))
u.a+="}"}finally{if(0>=$.l.length)return H.h($.l,-1)
$.l.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
bF:function bF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bG:function bG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aW:function aW(){},
b6:function b6(){},
F:function F(){},
b7:function b7(){},
b8:function b8(a,b){this.a=a
this.b=b},
b9:function b9(){},
bK:function bK(){},
av:function av(){},
aH:function aH(){},
aJ:function aJ(){},
aR:function aR(){},
bw:function bw(){},
bx:function bx(){},
bO:function bO(a){this.b=0
this.c=a},
d5:function(a){if(a instanceof H.a8)return a.h(0)
return"Instance of '"+H.d(H.be(a))+"'"},
dc:function(a,b,c){var u,t=H.f([],[c])
for(u=a.gv(a);u.m();)t.push(u.gp())
return t},
c9:function(a){var u=a.length,t=P.c8(0,null,u)
return H.dg(t<u?C.d.a2(a,0,t):a)},
di:function(a){return new H.b0(a,H.da(a,!1,!0,!1,!1,!1))},
cs:function(a,b,c){var u=J.ci(b)
if(!u.m())return a
if(c.length===0){do a+=H.d(u.gp())
while(u.m())}else{a+=H.d(u.gp())
for(;u.m();)a=a+c+H.d(u.gp())}return a},
cv:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.cX().b
u=u.test(b)}else u=!1
if(u)return b
t=C.t.an(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.df(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
cn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.d5(a)},
d_:function(a,b,c){return new P.u(!0,a,b,c)},
al:function(a,b){return new P.G(null,null,!0,a,b,"Value not in range")},
ak:function(a,b,c,d,e){return new P.G(b,c,!0,a,d,"Invalid value")},
c8:function(a,b,c){if(0>a||a>c)throw H.e(P.ak(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.e(P.ak(b,a,c,"end",null))
return b}return c},
d6:function(a,b,c,d,e){var u=e==null?J.aA(b):e
return new P.aV(u,!0,a,c,"Index out of range")},
w:function(a){return new P.bv(a)},
cu:function(a){return new P.bs(a)},
a9:function(a){return new P.aI(a)},
c2:function(a){return new P.bE(a)},
a6:function a6(){},
bS:function bS(){},
V:function V(a){this.a=a},
aN:function aN(){},
aO:function aO(){},
W:function W(){},
aj:function aj(){},
u:function u(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aV:function aV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bv:function bv(a){this.a=a},
bs:function bs(a){this.a=a},
aI:function aI(a){this.a=a},
an:function an(){},
aL:function aL(a){this.a=a},
bE:function bE(a){this.a=a},
aU:function aU(a,b){this.a=a
this.b=b},
n:function n(){},
ab:function ab(){},
aX:function aX(){},
b5:function b5(){},
B:function B(){},
a7:function a7(){},
m:function m(){},
p:function p(){},
H:function H(a){this.a=a}},W={
cj:function(){var u=document.createElement("a")
return u},
dt:function(a,b,c,d){var u=W.dI(new W.bD(c),W.a),t=u!=null
if(t&&!0)if(t)J.cY(a,b,u,!1)
return new W.bC(a,b,u,!1)},
dI:function(a,b){var u=$.t
if(u===C.c)return a
return u.al(a,b)},
c:function c(){},
aD:function aD(){},
aE:function aE(){},
y:function y(){},
U:function U(){},
aK:function aK(){},
aM:function aM(){},
b:function b(){},
a:function a(){},
C:function C(){},
aT:function aT(){},
o:function o(){},
bg:function bg(){},
bC:function bC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bD:function bD(a){this.a=a},
au:function au(){}},K={
j:function(a){var u=new K.bh()
u.a7(a)
return u},
aC:function aC(){},
aa:function aa(){},
af:function af(){},
v:function v(){this.a=null},
bh:function bh(){this.a=null}},L={ao:function ao(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},aq:function aq(a){this.b=a
this.c=null},bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},ar:function ar(a){this.b=a
this.a=this.c=null}},V={
dj:function(a,b){var u=new V.bi()
u.a8(a,!1)
return u},
bi:function bi(){this.b=this.a=null},
bk:function bk(a){this.a=a},
bj:function bj(a){this.a=a}},F={
cE:function(){var u,t,s=V.dj("3Dart",!1),r=document,q=r.createElement("div")
q.className="pageImage"
q.id="3Dart"
u=W.cj()
u.href="#3Dart"
t=r.createElement("img")
t.src="resources/ThreeDart.png"
u.appendChild(t)
q.appendChild(u)
s.a.appendChild(q)
r=[P.p]
s.u(H.f(["Currently 3Dart is still in beta."],r))
s.u(H.f(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ","were you can download and play with 3Dart right now. Please feel free to help ","develop and contribute to the 3Dart code and community."],r))
s.R(2,"Examples")
s.u(H.f(["[3Dart Craft|./examples/craft/]"],r))
s.u(H.f(["[3Dart Chess|./examples/chess/]"],r))
s.u(H.f(["[Hypersphere|./examples/hypersphere/]"],r))
s.R(2,"Tutorials")
s.u(H.f(["[Getting Started|./tutorials/tutorial1/]"],r))
s.a_(6,"Tutorials still need to be written","")
s.u(H.f(["Material Lighting"],r))
s.u(H.f(["Advanced Movers"],r))
s.u(H.f(["Advanced Shapes"],r))
s.u(H.f(["Advanced Techniques"],r))
s.u(H.f(["Scene Compositing"],r))
s.R(2,"Tests")
s.u(H.f(["[Tests|./tests/]"],r))}}
var w=[C,H,J,P,W,K,L,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.c5.prototype={}
J.k.prototype={
F:function(a,b){return a===b},
gq:function(a){return H.a_(a)},
h:function(a){return"Instance of '"+H.d(H.be(a))+"'"}}
J.aY.prototype={
h:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$ia6:1}
J.b_.prototype={
F:function(a,b){return null==b},
h:function(a){return"null"},
gq:function(a){return 0}}
J.ad.prototype={
gq:function(a){return 0},
h:function(a){return String(a)}}
J.bd.prototype={}
J.a0.prototype={}
J.A.prototype={
h:function(a){var u=a[$.cM()]
if(u==null)return this.a6(a)
return"JavaScript function for "+H.d(J.aB(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.z.prototype={
aj:function(a,b){var u,t
if(!!a.fixed$length)H.Q(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.P)(b),++t)a.push(b[t])},
as:function(a){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.h(r,u)
r[u]=t}return r.join("")},
a2:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.ak(b,0,u,"start",null))
if(c<b||c>u)throw H.e(P.ak(c,b,u,"end",null))
if(b===c)return H.f([],[H.O(a,0)])
return H.f(a.slice(b,c),[H.O(a,0)])},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
h:function(a){return P.c3(a,"[","]")},
gv:function(a){return new J.aF(a,a.length)},
gq:function(a){return H.a_(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.e(H.M(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.Q(P.w("indexed set"))
if(b>=a.length||b<0)throw H.e(H.M(a,b))
a[b]=c}}
J.c4.prototype={}
J.aF.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.P(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.X.prototype={
A:function(a,b){var u
if(typeof b!=="number")throw H.e(H.x(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gT(b)
if(this.gT(a)===u)return 0
if(this.gT(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gT:function(a){return a===0?1/a<0:a<0},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.w(""+a+".round()"))},
am:function(a,b,c){if(C.a.A(b,c)>0)throw H.e(H.x(b))
if(this.A(a,b)<0)return b
if(this.A(a,c)>0)return c
return a},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
C:function(a,b){return(a|0)===a?a/b|0:this.ai(a,b)},
ai:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.w("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
P:function(a,b){var u
if(a>0)u=this.ah(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ah:function(a,b){return b>31?0:a>>>b},
$ia7:1}
J.ac.prototype={$in:1}
J.aZ.prototype={}
J.D.prototype={
S:function(a,b){if(b<0)throw H.e(H.M(a,b))
if(b>=a.length)H.Q(H.M(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.e(H.M(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.e(P.d_(b,null,null))
return a+b},
U:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.al(b,null))
if(b>c)throw H.e(P.al(b,null))
if(c>a.length)throw H.e(P.al(c,null))
return a.substring(b,c)},
a3:function(a,b){return this.U(a,b,null)},
A:function(a,b){var u
if(typeof b!=="string")throw H.e(H.x(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gq:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ip:1}
H.i.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.S(this.a,b)},
$aF:function(){return[P.n]}}
H.aP.prototype={}
H.Z.prototype={
gp:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.bT(s),q=r.gl(s)
if(t.b!==q)throw H.e(P.a9(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.ao(s,u);++t.c
return!0}}
H.ba.prototype={
gv:function(a){var u=this.a
return new H.ae(u.gv(u),this.b)},
gl:function(a){return this.a.a.a},
$aab:function(a,b){return[b]}}
H.aQ.prototype={}
H.ae.prototype={
m:function(){var u=this,t=u.b
if(t.m()){u.a=u.c.$1(t.d)
return!0}u.a=null
return!1},
gp:function(){return this.a}}
H.aS.prototype={}
H.bu.prototype={
j:function(a,b,c){throw H.e(P.w("Cannot modify an unmodifiable list"))}}
H.as.prototype={}
H.bq.prototype={
w:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.bc.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.b2.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.bt.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.c0.prototype={
$1:function(a){if(!!J.N(a).$iW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:1}
H.aw.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.a8.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ay(t==null?"unknown":t)+"'"},
gaz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bo.prototype={}
H.bl.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ay(u)+"'"}}
H.S.prototype={
F:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.S))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gq:function(a){var u,t=this.c
if(t==null)u=H.a_(this.a)
else u=typeof t!=="object"?J.az(t):H.a_(t)
return(u^H.a_(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.be(u))+"'")}}
H.bf.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.E.prototype={
gl:function(a){return this.a},
gay:function(a){var u=this,t=H.O(u,0)
return H.dd(new H.Y(u,[t]),new H.b1(u),t,H.O(u,1))},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.L(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.L(r,b)
s=t==null?null:t.b
return s}else return q.ar(b)},
ar:function(a){var u,t,s=this.d
if(s==null)return
u=this.X(s,J.az(a)&0x3ffffff)
t=this.a0(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.W(u==null?o.b=o.M():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.W(t==null?o.c=o.M():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.M()
r=J.az(b)&0x3ffffff
q=o.X(s,r)
if(q==null)o.O(s,r,[o.N(b,c)])
else{p=o.a0(q,b)
if(p>=0)q[p].b=c
else q.push(o.N(b,c))}}},
aq:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.a9(u))
t=t.c}},
W:function(a,b,c){var u=this.L(a,b)
if(u==null)this.O(a,b,this.N(b,c))
else u.b=c},
N:function(a,b){var u=this,t=new H.b3(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
a0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
h:function(a){return P.cp(this)},
L:function(a,b){return a[b]},
X:function(a,b){return a[b]},
O:function(a,b,c){a[b]=c},
ad:function(a,b){delete a[b]},
M:function(){var u="<non-identifier-key>",t=Object.create(null)
this.O(t,u,t)
this.ad(t,u)
return t}}
H.b1.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.O(u,1),args:[H.O(u,0)]}}}
H.b3.prototype={}
H.Y.prototype={
gl:function(a){return this.a.a},
gv:function(a){var u=this.a,t=new H.b4(u,u.r)
t.c=u.e
return t}}
H.b4.prototype={
gp:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.a9(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.bW.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.bX.prototype={
$2:function(a,b){return this.a(a,b)}}
H.bY.prototype={
$1:function(a){return this.a(a)}}
H.b0.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ai.prototype={}
H.ag.prototype={
gl:function(a){return a.length},
$ic6:1,
$ac6:function(){}}
H.ah.prototype={
j:function(a,b,c){H.cw(b,a,a.length)
a[b]=c},
$aF:function(){return[P.n]}}
H.bb.prototype={
gl:function(a){return a.length},
i:function(a,b){H.cw(b,a,a.length)
return a[b]}}
H.a1.prototype={}
H.a2.prototype={}
P.bz.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:2}
P.by.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.bA.prototype={
$0:function(){this.a.$0()}}
P.bB.prototype={
$0:function(){this.a.$0()}}
P.bM.prototype={
a9:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.ax(new P.bN(this,b),0),a)
else throw H.e(P.w("`setTimeout()` not found."))}}
P.bN.prototype={
$0:function(){this.b.$0()}}
P.I.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.a3.prototype={
gp:function(){var u=this.c
if(u==null)return this.b
return u.gp()},
m:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.m())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.I){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.h(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.ci(u)
if(!!r.$ia3){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.bL.prototype={
gv:function(a){return new P.a3(this.a())}}
P.at.prototype={}
P.bm.prototype={}
P.bn.prototype={}
P.bP.prototype={}
P.bQ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.aj():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.h(0)
throw u}}
P.bH.prototype={
au:function(a){var u,t,s,r=null
try{if(C.c===$.t){a.$0()
return}P.dD(r,r,this,a)}catch(s){u=H.cL(s)
t=H.cD(s)
P.cy(r,r,this,u,t)}},
av:function(a,b){var u,t,s,r=null
try{if(C.c===$.t){a.$1(b)
return}P.dE(r,r,this,a,b)}catch(s){u=H.cL(s)
t=H.cD(s)
P.cy(r,r,this,u,t)}},
aw:function(a,b){return this.av(a,b,null)},
ak:function(a){return new P.bI(this,a)},
al:function(a,b){return new P.bJ(this,a,b)}}
P.bI.prototype={
$0:function(){return this.a.au(this.b)}}
P.bJ.prototype={
$1:function(a){return this.a.aw(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.bF.prototype={
gv:function(a){var u=new P.bG(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ac(b)
return t}},
ac:function(a){var u=this.d
if(u==null)return!1
return this.af(u[this.ab(a)],a)>=0},
ab:function(a){return J.az(a)&1073741823},
af:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1}}
P.bG.prototype={
gp:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.a9(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.aW.prototype={}
P.b6.prototype={}
P.F.prototype={
gv:function(a){return new H.Z(a,this.gl(a))},
ao:function(a,b){return this.i(a,b)},
h:function(a){return P.c3(a,"[","]")}}
P.b7.prototype={}
P.b8.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:3}
P.b9.prototype={
gl:function(a){return this.a},
h:function(a){return P.cp(this)}}
P.bK.prototype={
h:function(a){return P.c3(this,"{","}")}}
P.av.prototype={}
P.aH.prototype={}
P.aJ.prototype={}
P.aR.prototype={}
P.bw.prototype={}
P.bx.prototype={
an:function(a){var u,t,s=P.c8(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.bO(u)
if(t.ae(a,0,s)!==s)t.Z(C.b.S(a,s-1),0)
return new Uint8Array(u.subarray(0,H.dx(0,t.b,u.length)))}}
P.bO.prototype={
Z:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
ae:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.I(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.Z(r,C.b.I(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.a6.prototype={}
P.bS.prototype={}
P.V.prototype={
F:function(a,b){if(b==null)return!1
return b instanceof P.V&&this.a===b.a},
gq:function(a){return C.a.gq(this.a)},
A:function(a,b){return C.a.A(this.a,b.a)},
h:function(a){var u,t,s,r=new P.aO(),q=this.a
if(q<0)return"-"+new P.V(0-q).h(0)
u=r.$1(C.a.C(q,6e7)%60)
t=r.$1(C.a.C(q,1e6)%60)
s=new P.aN().$1(q%1e6)
return""+C.a.C(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.aN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.aO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.W.prototype={}
P.aj.prototype={
h:function(a){return"Throw of null."}}
P.u.prototype={
gK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gK()+o+u
if(!q.a)return t
s=q.gJ()
r=P.cn(q.b)
return t+s+": "+r}}
P.G.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.aV.prototype={
gK:function(){return"RangeError"},
gJ:function(){var u,t=this.b
if(typeof t!=="number")return t.H()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.bv.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.bs.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aI.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cn(u)+"."}}
P.an.prototype={
h:function(a){return"Stack Overflow"},
$iW:1}
P.aL.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.bE.prototype={
h:function(a){return"Exception: "+this.a}}
P.aU.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.U(s,0,75)+"...":s
return t+"\n"+r}}
P.n.prototype={}
P.ab.prototype={
gl:function(a){var u,t=this.gv(this)
for(u=0;t.m();)++u
return u},
h:function(a){return P.d7(this,"(",")")}}
P.aX.prototype={}
P.b5.prototype={}
P.B.prototype={
gq:function(a){return P.m.prototype.gq.call(this,this)},
h:function(a){return"null"}}
P.a7.prototype={}
P.m.prototype={constructor:P.m,$im:1,
F:function(a,b){return this===b},
gq:function(a){return H.a_(this)},
h:function(a){return"Instance of '"+H.d(H.be(this))+"'"},
toString:function(){return this.h(this)}}
P.p.prototype={}
P.H.prototype={
gl:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.aD.prototype={
h:function(a){return String(a)}}
W.aE.prototype={
h:function(a){return String(a)}}
W.y.prototype={
gl:function(a){return a.length}}
W.U.prototype={
gl:function(a){return a.length}}
W.aK.prototype={}
W.aM.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.C.prototype={
aa:function(a,b,c,d){return a.addEventListener(b,H.ax(c,1),!1)}}
W.aT.prototype={
gl:function(a){return a.length}}
W.o.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.a5(a):u}}
W.bg.prototype={
gl:function(a){return a.length}}
W.bC.prototype={}
W.bD.prototype={
$1:function(a){return this.a.$1(a)}}
W.au.prototype={}
K.aC.prototype={
E:function(a){return!0},
h:function(a){return"all"}}
K.aa.prototype={
E:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)if(u[s].E(a))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.P)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.af.prototype={}
K.v.prototype={
E:function(a){return!this.a4(a)},
h:function(a){return"!["+this.V(0)+"]"}}
K.bh.prototype={
a7:function(a){var u,t,s,r
if(a.a.length<=0)throw H.e(P.c2("May not create a Set with zero characters."))
u=P.n
t=new H.E([u,P.a6])
for(s=new H.Z(a,a.gl(a));s.m();)t.j(0,s.d,!0)
r=P.dc(new H.Y(t,[u]),!0,u)
if(!!r.immutable$list)H.Q(P.w("sort"))
H.dm(r,J.dz())
this.a=r},
E:function(a){return C.d.D(this.a,a)},
h:function(a){return P.c9(this.a)}}
L.ao.prototype={
n:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.ar(this.a.k(0,b))
r.a=H.f([],[K.af])
r.c=!1
this.c.push(r)
return r},
ap:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s]
if(r.E(a))return r}return},
h:function(a){return this.b},
Y:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.D(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.Y(n,[H.O(n,0)]),n=n.gv(n);n.m();){t=n.d
o+="\n"
s=p.d.c.i(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.D(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.P)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.ap.prototype={
h:function(a){var u=H.cI(this.b,"\n","\\n"),t=H.cI(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.aq.prototype={
h:function(a){return this.b}}
L.bp.prototype={
k:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new L.ao(this,b)
u.c=H.f([],[L.ar])
this.a.j(0,b,u)}return u},
G:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new L.aq(a)
u=P.p
t.c=new H.E([u,u])
this.b.j(0,a,t)}return t},
a1:function(a){return this.ax(a)},
ax:function(a){var u=this
return P.dB(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$a1(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.n]
e=H.f([],f)
d=H.f([],f)
c=H.f([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}l=c.length
if(l!==0){if(!!c.fixed$length)H.Q(P.w("removeAt"))
if(0>=l)H.Q(P.al(0,null))
k=c.splice(0,1)[0]}else{if(!t.m()){s=3
break}k=t.d}d.push(k);++o
j=g.ap(k)
s=j==null?4:6
break
case 4:if(p==null){i=P.c9(d)
throw H.e(P.c2("Untokenizable string [state: "+g.b+", index "+o+']: "'+i+'"'))}if(!!d.fixed$length)H.Q(P.w("removeRange"))
P.c8(0,m,d.length)
d.splice(0,m-0)
C.d.aj(c,d)
d=H.f([],f)
e=H.f([],f)
g=u.d
s=!u.c.D(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!j.c)e.push(k)
g=j.b
if(g.d!=null){i=P.c9(e)
l=g.d
h=l.c.i(0,i)
p=new L.ap(h==null?l.b:h,i,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.D(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.du()
case 1:return P.dv(q)}}},L.ap)},
h:function(a){var u,t=new P.H(""),s=this.d
if(s!=null)t.a=s.Y()+"\n"
for(s=this.a,s=s.gay(s),u=s.a,s=new H.ae(u.gv(u),s.b);s.m();){u=s.a
if(u!=this.d)t.a+=u.Y()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.ar.prototype={
h:function(a){return this.b.b+": "+this.V(0)}}
V.bi.prototype={
a8:function(a,b){var u,t,s,r=document,q=r.body,p=r.createElement("div")
p.className="scrollTop"
q.appendChild(p)
u=r.createElement("div")
u.className="scrollPage"
q.appendChild(u)
t=r.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0)r.title=a
s=r.createElement("div")
this.a=s
t.appendChild(s)
this.b=null
W.dt(r,"scroll",new V.bk(p),!1)},
a_:function(a,b,c){var u,t,s,r
a=C.a.am(a,0,4)
if(c.length===0)c=P.cv(C.k,b,C.e,!1)
u=document.createElement("div")
u.className="textHeader"
u.id=c
t=u.style
s=""+(28-a*3)+"px"
t.fontSize=s
r=W.cj()
r.href="#"+c
r.textContent=b
u.appendChild(r)
this.a.appendChild(u)},
R:function(a,b){return this.a_(a,b,"")},
u:function(a){var u,t,s,r,q,p,o,n
this.ag()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.d.as(a),s.toString,r=new H.i(r),r=new P.a3(s.a1(new H.Z(r,r.gl(r))).a());r.m();){s=r.gp()
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
if(H.e_(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.h(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.cv(C.k,s,C.e,!1)
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
ag:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.bp()
t=P.p
u.a=new H.E([t,L.ao])
u.b=new H.E([t,L.aq])
u.c=P.db(t)
u.d=u.k(0,q)
t=u.k(0,q).n(0,p)
s=K.j(new H.i("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).n(0,p)
s=new K.v()
r=[K.af]
s.a=H.f([],r)
t.a.push(s)
t=K.j(new H.i("*"))
s.a.push(t)
t=u.k(0,p).n(0,"BoldEnd")
s=K.j(new H.i("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).n(0,o)
s=K.j(new H.i("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).n(0,o)
s=new K.v()
s.a=H.f([],r)
t.a.push(s)
t=K.j(new H.i("_"))
s.a.push(t)
t=u.k(0,o).n(0,n)
s=K.j(new H.i("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).n(0,m)
s=K.j(new H.i("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).n(0,m)
s=new K.v()
s.a=H.f([],r)
t.a.push(s)
t=K.j(new H.i("`"))
s.a.push(t)
t=u.k(0,m).n(0,"CodeEnd")
s=K.j(new H.i("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).n(0,l)
s=K.j(new H.i("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).n(0,k)
s=K.j(new H.i("|"))
t.a.push(s)
s=u.k(0,l).n(0,j)
t=K.j(new H.i("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).n(0,l)
t=new K.v()
t.a=H.f([],r)
s.a.push(t)
s=K.j(new H.i("|]"))
t.a.push(s)
s=u.k(0,k).n(0,j)
t=K.j(new H.i("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).n(0,k)
t=new K.v()
t.a=H.f([],r)
s.a.push(t)
s=K.j(new H.i("|]"))
t.a.push(s)
u.k(0,q).n(0,i).a.push(new K.aC())
s=u.k(0,i).n(0,i)
t=new K.v()
t.a=H.f([],r)
s.a.push(t)
s=K.j(new H.i("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.G(p)
s=u.k(0,n)
s.d=s.a.G(o)
s=u.k(0,"CodeEnd")
s.d=s.a.G(m)
s=u.k(0,j)
s.d=s.a.G("Link")
s=u.k(0,i)
s.d=s.a.G(i)
this.b=u}}
V.bk.prototype={
$1:function(a){P.dn(C.j,new V.bj(this.a))}}
V.bj.prototype={
$0:function(){var u=C.v.at(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.k.prototype
u.a5=u.h
u=J.ad.prototype
u.a6=u.h
u=K.aa.prototype
u.a4=u.E
u.V=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0
u(J,"dz","d9",4)
t(P,"dJ","dq",0)
t(P,"dK","dr",0)
t(P,"dL","ds",0)
s(P,"cA","dH",5)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.m,null)
s(P.m,[H.c5,J.k,J.aF,P.av,P.ab,H.Z,P.aX,H.aS,H.bu,H.bq,P.W,H.a8,H.aw,P.b9,H.b3,H.b4,H.b0,P.bM,P.I,P.a3,P.at,P.bm,P.bn,P.bP,P.bK,P.bG,P.F,P.aH,P.bO,P.a6,P.a7,P.V,P.an,P.bE,P.aU,P.b5,P.B,P.p,P.H,W.aK,K.aC,K.aa,K.af,K.bh,L.ao,L.ap,L.aq,L.bp,V.bi])
s(J.k,[J.aY,J.b_,J.ad,J.z,J.X,J.D,H.ai,W.C,W.au,W.aM,W.a])
s(J.ad,[J.bd,J.a0,J.A])
t(J.c4,J.z)
s(J.X,[J.ac,J.aZ])
t(P.b6,P.av)
t(H.as,P.b6)
t(H.i,H.as)
s(P.ab,[H.aP,H.ba,P.aW])
t(H.aQ,H.ba)
t(H.ae,P.aX)
s(P.W,[H.bc,H.b2,H.bt,H.bf,P.aj,P.u,P.bv,P.bs,P.aI,P.aL])
s(H.a8,[H.c0,H.bo,H.b1,H.bW,H.bX,H.bY,P.bz,P.by,P.bA,P.bB,P.bN,P.bQ,P.bI,P.bJ,P.b8,P.aN,P.aO,W.bD,V.bk,V.bj])
s(H.bo,[H.bl,H.S])
t(P.b7,P.b9)
t(H.E,P.b7)
t(H.Y,H.aP)
t(H.ag,H.ai)
t(H.a1,H.ag)
t(H.a2,H.a1)
t(H.ah,H.a2)
t(H.bb,H.ah)
t(P.bL,P.aW)
t(P.bH,P.bP)
t(P.bF,P.bK)
t(P.aJ,P.bn)
t(P.aR,P.aH)
t(P.bw,P.aR)
t(P.bx,P.aJ)
s(P.a7,[P.bS,P.n])
s(P.u,[P.G,P.aV])
t(W.o,W.C)
s(W.o,[W.b,W.y])
t(W.c,W.b)
s(W.c,[W.aD,W.aE,W.aT,W.bg])
t(W.U,W.au)
t(W.bC,P.bm)
s(K.aa,[K.v,L.ar])
u(H.as,H.bu)
u(H.a1,P.F)
u(H.a2,H.aS)
u(P.av,P.F)
u(W.au,W.aK)})()
var v={mangledGlobalNames:{n:"int",bS:"double",a7:"num",p:"String",a6:"bool",B:"Null",b5:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.n,args:[,,]},{func:1,ret:-1}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.u=J.k.prototype
C.d=J.z.prototype
C.a=J.ac.prototype
C.v=J.X.prototype
C.b=J.D.prototype
C.w=J.A.prototype
C.l=J.bd.prototype
C.f=J.a0.prototype
C.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
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
C.r=function(getTagFallback) {
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
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
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
C.q=function(hooks) {
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
C.p=function(hooks) {
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
C.i=function(hooks) { return hooks; }

C.e=new P.bw()
C.t=new P.bx()
C.c=new P.bH()
C.j=new P.V(0)
C.k=H.f(u([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.x=new P.I(null,2)})();(function staticFields(){$.q=0
$.T=null
$.ck=null
$.cC=null
$.cz=null
$.cG=null
$.bR=null
$.bZ=null
$.ce=null
$.J=null
$.a4=null
$.a5=null
$.cb=!1
$.t=C.c
$.l=[]})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"e3","cM",function(){return H.cB("_$dart_dartClosure")})
u($,"e4","cg",function(){return H.cB("_$dart_js")})
u($,"e5","cN",function(){return H.r(H.br({
toString:function(){return"$receiver$"}}))})
u($,"e6","cO",function(){return H.r(H.br({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"e7","cP",function(){return H.r(H.br(null))})
u($,"e8","cQ",function(){return H.r(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"eb","cT",function(){return H.r(H.br(void 0))})
u($,"ec","cU",function(){return H.r(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ea","cS",function(){return H.r(H.ct(null))})
u($,"e9","cR",function(){return H.r(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ee","cW",function(){return H.r(H.ct(void 0))})
u($,"ed","cV",function(){return H.r(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ef","ch",function(){return P.dp()})
u($,"eh","cX",function(){return P.di("^[\\-\\.0-9A-Z_a-z~]*$")})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.k,MediaError:J.k,Navigator:J.k,NavigatorConcurrentHardware:J.k,NavigatorUserMediaError:J.k,OverconstrainedError:J.k,PositionError:J.k,SQLError:J.k,ArrayBufferView:H.ai,Uint8Array:H.bb,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aD,HTMLAreaElement:W.aE,CDATASection:W.y,CharacterData:W.y,Comment:W.y,ProcessingInstruction:W.y,Text:W.y,CSSStyleDeclaration:W.U,MSStyleCSSProperties:W.U,CSS2Properties:W.U,DOMException:W.aM,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Window:W.C,DOMWindow:W.C,EventTarget:W.C,HTMLFormElement:W.aT,Document:W.o,DocumentFragment:W.o,HTMLDocument:W.o,ShadowRoot:W.o,XMLDocument:W.o,Attr:W.o,DocumentType:W.o,Node:W.o,HTMLSelectElement:W.bg})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true})
H.ag.$nativeSuperclassTag="ArrayBufferView"
H.a1.$nativeSuperclassTag="ArrayBufferView"
H.a2.$nativeSuperclassTag="ArrayBufferView"
H.ah.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.cE,[])
else F.cE([])})})()
//# sourceMappingURL=main.dart.js.map
