(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.fr(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cA(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cn:function cn(){},
e_:function(a,b){return new H.aD(a,b)},
ea:function(a,b){H.aZ(a,0,J.bo(a)-1,b)},
aZ:function(a,b,c,d){if(c-b<=32)H.e9(a,b,c,d)
else H.e8(a,b,c,d)},
e9:function(a,b,c,d){var t,s,r,q,p,o
for(t=b+1,s=J.cc(a);t<=c;++t){r=s.i(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.i(a,q-1),r)
if(typeof p!=="number")return p.u()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.i(a,o))
q=o}s.j(a,q,r)}},
e8:function(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i=C.a.C(a6-a5+1,6),h=a5+i,g=a6-i,f=C.a.C(a5+a6,2),e=f-i,d=f+i,c=J.cc(a4),b=c.i(a4,h),a=c.i(a4,e),a0=c.i(a4,f),a1=c.i(a4,d),a2=c.i(a4,g),a3=a7.$2(b,a)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a
a=b
b=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a2
a2=a1
a1=t}a3=a7.$2(b,a0)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a0
a0=b
b=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(b,a1)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a1
a1=b
b=t}a3=a7.$2(a0,a1)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a1
a1=a0
a0=t}a3=a7.$2(a,a2)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a2
a2=a
a=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.u()
if(a3>0){t=a2
a2=a1
a1=t}c.j(a4,h,b)
c.j(a4,f,a0)
c.j(a4,g,a2)
c.j(a4,e,c.i(a4,a5))
c.j(a4,d,c.i(a4,a6))
s=a5+1
r=a6-1
if(J.a1(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.i(a4,q)
o=a7.$2(p,a)
if(o===0)continue
if(typeof o!=="number")return o.H()
if(o<0){if(q!==s){c.j(a4,q,c.i(a4,s))
c.j(a4,s,p)}++s}else for(;!0;){o=a7.$2(c.i(a4,r),a)
if(typeof o!=="number")return o.u()
if(o>0){--r
continue}else{n=r-1
if(o<0){c.j(a4,q,c.i(a4,s))
m=s+1
c.j(a4,s,c.i(a4,r))
c.j(a4,r,p)
r=n
s=m
break}else{c.j(a4,q,c.i(a4,r))
c.j(a4,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=c.i(a4,q)
k=a7.$2(p,a)
if(typeof k!=="number")return k.H()
if(k<0){if(q!==s){c.j(a4,q,c.i(a4,s))
c.j(a4,s,p)}++s}else{j=a7.$2(p,a1)
if(typeof j!=="number")return j.u()
if(j>0)for(;!0;){o=a7.$2(c.i(a4,r),a1)
if(typeof o!=="number")return o.u()
if(o>0){--r
if(r<q)break
continue}else{o=a7.$2(c.i(a4,r),a)
if(typeof o!=="number")return o.H()
n=r-1
if(o<0){c.j(a4,q,c.i(a4,s))
m=s+1
c.j(a4,s,c.i(a4,r))
c.j(a4,r,p)
s=m}else{c.j(a4,q,c.i(a4,r))
c.j(a4,r,p)}r=n
break}}}}l=!1}a3=s-1
c.j(a4,a5,c.i(a4,a3))
c.j(a4,a3,a)
a3=r+1
c.j(a4,a6,c.i(a4,a3))
c.j(a4,a3,a1)
H.aZ(a4,a5,s-2,a7)
H.aZ(a4,r+2,a6,a7)
if(l)return
if(s<h&&r>g){for(;J.a1(a7.$2(c.i(a4,s),a),0);)++s
for(;J.a1(a7.$2(c.i(a4,r),a1),0);)--r
for(q=s;q<=r;++q){p=c.i(a4,q)
if(a7.$2(p,a)===0){if(q!==s){c.j(a4,q,c.i(a4,s))
c.j(a4,s,p)}++s}else if(a7.$2(p,a1)===0)for(;!0;)if(a7.$2(c.i(a4,r),a1)===0){--r
if(r<q)break
continue}else{o=a7.$2(c.i(a4,r),a)
if(typeof o!=="number")return o.H()
n=r-1
if(o<0){c.j(a4,q,c.i(a4,s))
m=s+1
c.j(a4,s,c.i(a4,r))
c.j(a4,r,p)
s=m}else{c.j(a4,q,c.i(a4,r))
c.j(a4,r,p)}r=n
break}}H.aZ(a4,s,r,a7)}else H.aZ(a4,s,r,a7)},
j:function j(a){this.a=a},
aC:function aC(){},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aR:function aR(a,b){this.a=a
this.b=b},
aD:function aD(a,b){this.a=a
this.b=b},
a8:function a8(a,b){this.a=null
this.b=a
this.c=b},
aE:function aE(){},
b6:function b6(){},
af:function af(){},
dr:function(a){var t,s=H.dq(a)
if(s!=null)return s
t="minified:"+a
return t},
h_:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.au(a)
if(typeof t!="string")throw H.d(H.K(a))
return t},
aa:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bJ:function(a){return H.e0(a)},
e0:function(a){var t,s,r
if(a instanceof P.h)return H.p(H.as(a),null)
if(J.ar(a)===C.u||u.o.b(a)){t=C.h(a)
if(H.cS(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cS(r))return r}}return H.p(H.as(a),null)},
cS:function(a){var t=a!=="Object"&&a!==""
return t},
cR:function(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
e3:function(a){var t,s,r,q=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.a0)(a),++s){r=a[s]
if(!H.c9(r))throw H.d(H.K(r))
if(r<=65535)q.push(r)
else if(r<=1114111){q.push(55296+(C.a.P(r-65536,10)&1023))
q.push(56320+(r&1023))}else throw H.d(H.K(r))}return H.cR(q)},
e2:function(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!H.c9(r))throw H.d(H.K(r))
if(r<0)throw H.d(H.K(r))
if(r>65535)return H.e3(a)}return H.cR(a)},
e1:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.a.P(t,10))>>>0,56320|t&1023)}throw H.d(P.ac(a,0,1114111,null,null))},
fh:function(a){throw H.d(H.K(a))},
f:function(a,b){if(a==null)J.bo(a)
throw H.d(H.a_(a,b))},
a_:function(a,b){var t,s,r="index"
if(!H.c9(b))return new P.v(!0,b,r,null)
t=J.bo(a)
if(!(b<0)){if(typeof t!=="number")return H.fh(t)
s=b>=t}else s=!0
if(s)return P.dS(b,a,r,null,t)
return P.aX(b,r)},
f9:function(a,b,c){if(a>c)return P.ac(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ac(b,a,c,"end",null)
return new P.v(!0,b,"end",null)},
K:function(a){return new P.v(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.aV()
t=new Error()
t.dartException=a
s=H.fs
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fs:function(){return J.au(this.dartException)},
O:function(a){throw H.d(a)},
a0:function(a){throw H.d(P.az(a))},
B:function(a){var t,s,r,q,p,o
a=H.dn(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cW:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cQ:function(a,b){return new H.aU(a,b==null?null:b.method)},
co:function(a,b){var t=b==null,s=t?null:b.method
return new H.aL(a,s,t?null:b.receiver)},
ds:function(a){if(a==null)return new H.bI(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.N(a,a.dartException)
return H.f3(a)},
N:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
f3:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.a.P(s,16)&8191)===10)switch(r){case 438:return H.N(a,H.co(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:return H.N(a,H.cQ(H.e(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.du()
p=$.dv()
o=$.dw()
n=$.dx()
m=$.dA()
l=$.dB()
k=$.dz()
$.dy()
j=$.dD()
i=$.dC()
h=q.A(t)
if(h!=null)return H.N(a,H.co(t,h))
else{h=p.A(t)
if(h!=null){h.method="call"
return H.N(a,H.co(t,h))}else{h=o.A(t)
if(h==null){h=n.A(t)
if(h==null){h=m.A(t)
if(h==null){h=l.A(t)
if(h==null){h=k.A(t)
if(h==null){h=n.A(t)
if(h==null){h=j.A(t)
if(h==null){h=i.A(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.N(a,H.cQ(t,h))}}return H.N(a,new H.b5(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ad()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.N(a,new P.v(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ad()
return a},
dh:function(a){var t
if(a==null)return new H.bg(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bg(a)},
fl:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.cl("Unsupported number of arguments for wrapped closure"))},
bk:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fl)
a.$identity=t
return t},
dQ:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bP().constructor.prototype):Object.create(new H.a2(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.z
if(typeof s!=="number")return s.t()
$.z=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.cL(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dM(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cL(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dM:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.di,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.dK:H.dJ
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
dN:function(a,b,c,d){var t=H.cK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cL:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.dP(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dN(s,!q,t,b)
if(s===0){q=$.z
if(typeof q!=="number")return q.t()
$.z=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.e(H.cj())+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.z
if(typeof q!=="number")return q.t()
$.z=q+1
n+=q
return new Function("return function("+n+"){return this."+H.e(H.cj())+"."+H.e(t)+"("+n+");}")()},
dO:function(a,b,c,d){var t=H.cK,s=H.dL
switch(b?-1:a){case 0:throw H.d(new H.aY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
dP:function(a,b){var t,s,r,q,p,o,n=H.cj(),m=$.cI
if(m==null)m=$.cI=H.cH("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dO(s,!q,t,b)
if(s===1){q="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+m+");"
p=$.z
if(typeof p!=="number")return p.t()
$.z=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+m+", "+o+");"
p=$.z
if(typeof p!=="number")return p.t()
$.z=p+1
return new Function(q+p+"}")()},
cA:function(a,b,c,d,e,f,g){return H.dQ(a,b,c,d,!!e,!!f,g)},
dJ:function(a,b){return H.bj(v.typeUniverse,H.as(a.a),b)},
dK:function(a,b){return H.bj(v.typeUniverse,H.as(a.c),b)},
cK:function(a){return a.a},
dL:function(a){return a.c},
cj:function(){var t=$.cJ
return t==null?$.cJ=H.cH("self"):t},
cH:function(a){var t,s,r,q=new H.a2("self","target","receiver","name"),p=J.cN(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.dH("Field name "+a+" not found."))},
fr:function(a){throw H.d(new P.aB(a))},
fg:function(a){return v.getIsolateTag(a)},
fn:function(a){var t,s,r,q,p,o=$.dg.$1(a),n=$.cb[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cg[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.de.$2(a,o)
if(r!=null){n=$.cb[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cg[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.ci(t)
$.cb[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cg[o]=t
return t}if(q==="-"){p=H.ci(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dl(a,t)
if(q==="*")throw H.d(P.cX(o))
if(v.leafTags[o]===true){p=H.ci(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dl(a,t)},
dl:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cC(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ci:function(a){return J.cC(a,!1,null,!!a.$iaK)},
fo:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ci(t)
else return J.cC(t,c,null,null)},
fj:function(){if(!0===$.cB)return
$.cB=!0
H.fk()},
fk:function(){var t,s,r,q,p,o,n,m
$.cb=Object.create(null)
$.cg=Object.create(null)
H.fi()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dm.$1(p)
if(o!=null){n=H.fo(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fi:function(){var t,s,r,q,p,o,n=C.m()
n=H.Z(C.n,H.Z(C.o,H.Z(C.i,H.Z(C.i,H.Z(C.p,H.Z(C.q,H.Z(C.r(C.h),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dg=new H.cd(q)
$.de=new H.ce(p)
$.dm=new H.cf(o)},
Z:function(a,b){return a(b)||b},
dW:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.d(new P.bA("Illegal RegExp pattern ("+String(o)+")",a))},
fp:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fa:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
dn:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dp:function(a,b,c){var t=H.fq(a,b,c)
return t},
fq:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.dn(b),'g'),H.fa(c))},
bT:function bT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aU:function aU(a,b){this.a=a
this.b=b},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a},
bI:function bI(a){this.a=a},
bg:function bg(a){this.a=a
this.b=null},
P:function P(){},
bQ:function bQ(){},
bP:function bP(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(a){this.a=a},
y:function y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bF:function bF(a){this.a=a},
bG:function bG(a,b){this.a=a
this.b=b
this.c=null},
S:function S(a){this.a=a},
aM:function aM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function cd(a){this.a=a},
ce:function ce(a){this.a=a},
cf:function cf(a){this.a=a},
bD:function bD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d8:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.a_(b,a))},
eC:function(a,b,c){var t
if(!(a>>>0!==a))t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw H.d(H.f9(a,b,c))
return b},
aS:function aS(){},
U:function U(){},
a9:function a9(){},
aT:function aT(){},
ah:function ah(){},
ai:function ai(){},
e6:function(a,b){var t=b.c
return t==null?b.c=H.cv(a,b.z,!0):t},
cT:function(a,b){var t=b.c
return t==null?b.c=H.ak(a,"cM",[b.z]):t},
cU:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cU(a.z)
return t===11||t===12},
e5:function(a){return a.cy},
fb:function(a){return H.cw(v.typeUniverse,a,!1)},
J:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.J(a,t,c,a0)
if(s===t)return b
return H.d4(a,s,!0)
case 7:t=b.z
s=H.J(a,t,c,a0)
if(s===t)return b
return H.cv(a,s,!0)
case 8:t=b.z
s=H.J(a,t,c,a0)
if(s===t)return b
return H.d3(a,s,!0)
case 9:r=b.Q
q=H.ap(a,r,c,a0)
if(q===r)return b
return H.ak(a,b.z,q)
case 10:p=b.z
o=H.J(a,p,c,a0)
n=b.Q
m=H.ap(a,n,c,a0)
if(o===p&&m===n)return b
return H.ct(a,o,m)
case 11:l=b.z
k=H.J(a,l,c,a0)
j=b.Q
i=H.f0(a,j,c,a0)
if(k===l&&i===j)return b
return H.d2(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.ap(a,h,c,a0)
p=b.z
o=H.J(a,p,c,a0)
if(g===h&&o===p)return b
return H.cu(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.bs("Attempted to substitute unexpected RTI kind "+d))}},
ap:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.J(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
f1:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.J(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
f0:function(a,b,c,d){var t,s=b.a,r=H.ap(a,s,c,d),q=b.b,p=H.ap(a,q,c,d),o=b.c,n=H.f1(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bc()
t.a=r
t.b=p
t.c=n
return t},
h0:function(a,b){a[v.arrayRti]=b
return a},
f8:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.di(t)
return a.$S()}return null},
dj:function(a,b){var t
if(H.cU(b))if(a instanceof H.P){t=H.f8(a)
if(t!=null)return t}return H.as(a)},
as:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.cx(a)}if(Array.isArray(a))return H.ez(a)
return H.cx(J.ar(a))},
ez:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
eI:function(a){var t=a.$ti
return t!=null?t:H.cx(a)},
cx:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eJ(a,t)},
eJ:function(a,b){var t=a instanceof H.P?a.__proto__.__proto__.constructor:b,s=H.ey(v.typeUniverse,t.name)
b.$ccache=s
return s},
di:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.cw(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eH:function(a){var t,s,r=this,q=u.K
if(r===q)return H.am(r,a,H.eN)
if(!H.D(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.am(r,a,H.eQ)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.c9
else if(t===u.W||t===u.H)s=H.eM
else if(t===u.N)s=H.eO
else s=t===u.y?H.db:null
if(s!=null)return H.am(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.fm)){r.r="$i"+q
return H.am(r,a,H.eP)}}else if(q===7)return H.am(r,a,H.eF)
return H.am(r,a,H.eD)},
am:function(a,b,c){a.b=c
return a.b(b)},
eG:function(a){var t,s,r=this
if(!H.D(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.eB
else if(r===u.K)s=H.eA
else s=H.eE
r.a=s
return r.a(a)},
eU:function(a){var t,s=a.y
if(!H.D(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
eD:function(a){var t=this
if(a==null)return H.eU(t)
return H.k(v.typeUniverse,H.dj(a,t),null,t,null)},
eF:function(a){if(a==null)return!0
return this.z.b(a)},
eP:function(a){var t=this,s=t.r
if(a instanceof P.h)return!!a[s]
return!!J.ar(a)[s]},
fZ:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.d9(a,t)},
eE:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.d9(a,t)},
d9:function(a,b){throw H.d(H.eo(H.cY(a,H.dj(a,b),H.p(b,null))))},
cY:function(a,b,c){var t=P.by(a),s=H.p(b==null?H.as(a):b,null)
return t+": type '"+H.e(s)+"' is not a subtype of type '"+H.e(c)+"'"},
eo:function(a){return new H.aj("TypeError: "+a)},
m:function(a,b){return new H.aj("TypeError: "+H.cY(a,null,b))},
eN:function(a){return a!=null},
eA:function(a){return a},
eQ:function(a){return!0},
eB:function(a){return a},
db:function(a){return!0===a||!1===a},
fK:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.m(a,"bool"))},
fM:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.m(a,"bool"))},
fL:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.m(a,"bool?"))},
fN:function(a){if(typeof a=="number")return a
throw H.d(H.m(a,"double"))},
fP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"double"))},
fO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"double?"))},
c9:function(a){return typeof a=="number"&&Math.floor(a)===a},
fQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.m(a,"int"))},
fS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.m(a,"int"))},
fR:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.m(a,"int?"))},
eM:function(a){return typeof a=="number"},
fT:function(a){if(typeof a=="number")return a
throw H.d(H.m(a,"num"))},
fV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"num"))},
fU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"num?"))},
eO:function(a){return typeof a=="string"},
fW:function(a){if(typeof a=="string")return a
throw H.d(H.m(a,"String"))},
fY:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.m(a,"String"))},
fX:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.m(a,"String?"))},
eX:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.b.t(s,H.p(a[r],b))
return t},
da:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=[]
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)a5.push("T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.f(a5,j)
m=C.b.t(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.b.t(" extends ",H.p(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.p(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.b.t(a2,H.p(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.b.t(a2,H.p(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.cE(H.p(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.e(a0)},
p:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.p(a.z,b)
return t}if(m===7){s=a.z
t=H.p(s,b)
r=s.y
return J.cE(r===11||r===12?C.b.t("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.e(H.p(a.z,b))+">"
if(m===9){q=H.f2(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eX(p,b)+">"):q}if(m===11)return H.da(a,b,null)
if(m===12)return H.da(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.f(b,o)
return b[o]}return"?"},
f2:function(a){var t,s=H.dq(a)
if(s!=null)return s
t="minified:"+a
return t},
d5:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ey:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cw(a,b,!1)
else if(typeof n=="number"){t=n
s=H.al(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.ak(a,b,r)
o[b]=p
return p}else return n},
ew:function(a,b){return H.d7(a.tR,b)},
ev:function(a,b){return H.d7(a.eT,b)},
cw:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.d1(H.d_(a,null,b,c))
s.set(b,t)
return t},
bj:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.d1(H.d_(a,b,c,!0))
r.set(c,s)
return s},
ex:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.ct(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
I:function(a,b){b.a=H.eG
b.b=H.eH
return b},
al:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.r(null,null)
t.y=b
t.cy=c
s=H.I(a,t)
a.eC.set(c,s)
return s},
d4:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.et(a,b,s,c)
a.eC.set(s,t)
return t},
et:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.D(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.r(null,null)
r.y=6
r.z=b
r.cy=c
return H.I(a,r)},
cv:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.es(a,b,s,c)
a.eC.set(s,t)
return t},
es:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.D(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ch(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ch(r.z))return r
else return H.e6(a,b)}}q=new H.r(null,null)
q.y=7
q.z=b
q.cy=c
return H.I(a,q)},
d3:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.eq(a,b,s,c)
a.eC.set(s,t)
return t},
eq:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.D(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.ak(a,"cM",[b])
else if(b===u.P||b===u.T)return u.Q}r=new H.r(null,null)
r.y=8
r.z=b
r.cy=c
return H.I(a,r)},
eu:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.r(null,null)
t.y=13
t.z=b
t.cy=r
s=H.I(a,t)
a.eC.set(r,s)
return s},
bi:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
ep:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
ak:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.bi(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.r(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.I(a,s)
a.eC.set(q,r)
return r},
ct:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.bi(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.r(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.I(a,p)
a.eC.set(r,o)
return o},
d2:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.bi(n)
if(k>0){t=m>0?",":""
s=H.bi(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.ep(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.r(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.I(a,p)
a.eC.set(r,s)
return s},
cu:function(a,b,c,d){var t,s=b.cy+("<"+H.bi(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.er(a,b,c,s,d)
a.eC.set(s,t)
return t},
er:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.J(a,b,s,0)
n=H.ap(a,c,s,0)
return H.cu(a,o,n,c!==n)}}m=new H.r(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.I(a,m)},
d_:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.ej(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.d0(a,s,h,g,!1)
else if(r===46)s=H.d0(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.H(a.u,a.e,g.pop()))
break
case 94:g.push(H.eu(a.u,g.pop()))
break
case 35:g.push(H.al(a.u,5,"#"))
break
case 64:g.push(H.al(a.u,2,"@"))
break
case 126:g.push(H.al(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.cs(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.ak(q,o,p))
else{n=H.H(q,a.e,o)
switch(n.y){case 11:g.push(H.cu(q,n,p,a.n))
break
default:g.push(H.ct(q,n,p))
break}}break
case 38:H.ek(a,g)
break
case 42:m=a.u
g.push(H.d4(m,H.H(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.cv(m,H.H(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.d3(m,H.H(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.bc()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.cs(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.d2(q,H.H(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.cs(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.em(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.H(a.u,a.e,i)},
ej:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d0:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.d5(t,p.z)[q]
if(o==null)H.O('No "'+q+'" in "'+H.e5(p)+'"')
d.push(H.bj(t,p,o))}else d.push(q)
return n},
ek:function(a,b){var t=b.pop()
if(0===t){b.push(H.al(a.u,1,"0&"))
return}if(1===t){b.push(H.al(a.u,4,"1&"))
return}throw H.d(P.bs("Unexpected extended operation "+H.e(t)))},
H:function(a,b,c){if(typeof c=="string")return H.ak(a,c,a.sEA)
else if(typeof c=="number")return H.el(a,b,c)
else return c},
cs:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.H(a,b,c[t])},
em:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.H(a,b,c[t])},
el:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.bs("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.bs("Bad index "+c+" for "+b.h(0)))},
k:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.D(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.D(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.k(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.k(a,b.z,c,d,e)
if(q===6){t=d.z
return H.k(a,b,c,t,e)}if(s===8){if(!H.k(a,b.z,c,d,e))return!1
return H.k(a,H.cT(a,b),c,d,e)}if(s===7){t=H.k(a,b.z,c,d,e)
return t}if(q===8){if(H.k(a,b,c,d.z,e))return!0
return H.k(a,b,c,H.cT(a,d),e)}if(q===7){t=H.k(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.k(a,l,c,k,e)||!H.k(a,k,e,l,c))return!1}return H.dc(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.dc(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.eL(a,b,c,d,e)}return!1},
dc:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.k(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.k(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.k(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.k(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!H.k(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eL:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.k(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.d5(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.k(a,H.bj(a,b,m[q]),c,s[q],e))return!1
return!0},
ch:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.D(a))if(s!==7)if(!(s===6&&H.ch(a.z)))t=s===8&&H.ch(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fm:function(a){var t
if(!H.D(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
D:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
d7:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
r:function r(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bc:function bc(){this.c=this.b=this.a=null},
ba:function ba(){},
aj:function aj(a){this.a=a},
dq:function(a){return v.mangledGlobalNames[a]}},J={
cC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bm:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.cB==null){H.fj()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.d(P.cX("Return interceptor for "+H.e(t(a,p))))}r=a.constructor
q=r==null?null:r[J.cO()]
if(q!=null)return q
q=H.fn(a)
if(q!=null)return q
if(typeof a=="function")return C.x
t=Object.getPrototypeOf(a)
if(t==null)return C.l
if(t===Object.prototype)return C.l
if(typeof r=="function"){Object.defineProperty(r,J.cO(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
cO:function(){var t=$.cZ
return t==null?$.cZ=v.getIsolateTag("_$dart_js"):t},
dU:function(a){if(a>4294967295)throw H.d(P.ac(a,0,4294967295,"length",null))
return J.cN(new Array(a))},
cN:function(a){a.fixed$length=Array
return a},
dV:function(a,b){return J.dG(a,b)},
ar:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a5.prototype
return J.bC.prototype}if(typeof a=="string")return J.E.prototype
if(a==null)return J.a6.prototype
if(typeof a=="boolean")return J.bB.prototype
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
fc:function(a){if(typeof a=="number")return J.R.prototype
if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
cc:function(a){if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
fd:function(a){if(a==null)return a
if(a.constructor==Array)return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
fe:function(a){if(typeof a=="number")return J.R.prototype
if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(!(a instanceof P.h))return J.V.prototype
return a},
ff:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
return a}if(a instanceof P.h)return a
return J.bm(a)},
cE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fc(a).t(a,b)},
a1:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ar(a).F(a,b)},
dF:function(a,b,c,d){return J.ff(a).a9(a,b,c,d)},
dG:function(a,b){return J.fe(a).B(a,b)},
bn:function(a){return J.ar(a).gq(a)},
cF:function(a){return J.fd(a).gw(a)},
bo:function(a){return J.cc(a).gl(a)},
au:function(a){return J.ar(a).h(a)},
n:function n(){},
bB:function bB(){},
a6:function a6(){},
M:function M(){},
aW:function aW(){},
V:function V(){},
x:function x(){},
w:function w(){},
bE:function bE(){},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
R:function R(){},
a5:function a5(){},
bC:function bC(){},
E:function E(){}},P={
ec:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.f5()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bk(new P.bY(r),1)).observe(t,{childList:true})
return new P.bX(r,t,s)}else if(self.setImmediate!=null)return P.f6()
return P.f7()},
ed:function(a){self.scheduleImmediate(H.bk(new P.bZ(a),0))},
ee:function(a){self.setImmediate(H.bk(new P.c_(a),0))},
ef:function(a){P.cr(C.j,a)},
cr:function(a,b){var t=C.a.C(a.a,1000)
return P.en(t<0?0:t,b)},
en:function(a,b){var t=new P.c5()
t.a8(a,b)
return t},
fI:function(a){return new P.W(a,1)},
eh:function(){return C.y},
ei:function(a){return new P.W(a,3)},
eS:function(a){return new P.bh(a)},
eT:function(){var t,s
for(t=$.Y;t!=null;t=$.Y){$.ao=null
s=t.b
$.Y=s
if(s==null)$.an=null
t.a.$0()}},
f_:function(){$.cy=!0
try{P.eT()}finally{$.ao=null
$.cy=!1
if($.Y!=null)$.cD().$1(P.df())}},
eY:function(a){var t=new P.b8(a),s=$.an
if(s==null){$.Y=$.an=t
if(!$.cy)$.cD().$1(P.df())}else $.an=s.b=t},
eZ:function(a){var t,s,r,q=$.Y
if(q==null){P.eY(a)
$.ao=$.an
return}t=new P.b8(a)
s=$.ao
if(s==null){t.b=q
$.Y=$.ao=t}else{r=s.b
t.b=r
$.ao=s.b=t
if(r==null)$.an=t}},
eb:function(a,b){var t=$.C
if(t===C.c)return P.cr(a,b)
return P.cr(a,t.ak(b))},
dd:function(a,b,c,d,e){P.eZ(new P.ca(d,e))},
eV:function(a,b,c,d){var t,s=$.C
if(s===c)return d.$0()
$.C=c
t=s
try{s=d.$0()
return s}finally{$.C=t}},
eW:function(a,b,c,d,e){var t,s=$.C
if(s===c)return d.$1(e)
$.C=c
t=s
try{s=d.$1(e)
return s}finally{$.C=t}},
bY:function bY(a){this.a=a},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
c5:function c5(){},
c6:function c6(a,b){this.a=a
this.b=b},
W:function W(a,b){this.a=a
this.b=b},
X:function X(a){var _=this
_.a=a
_.d=_.c=_.b=null},
bh:function bh(a){this.a=a},
b8:function b8(a){this.a=a
this.b=null},
b0:function b0(){},
b1:function b1(){},
c8:function c8(){},
ca:function ca(a,b){this.a=a
this.b=b},
c2:function c2(){},
c3:function c3(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function(a){return new P.bd(a.K("bd<0>"))},
dT:function(a,b,c){var t,s
if(P.cz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.o.push(a)
try{P.eR(a,t)}finally{if(0>=$.o.length)return H.f($.o,-1)
$.o.pop()}s=P.cV(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cm:function(a,b,c){var t,s
if(P.cz(a))return b+"..."+c
t=new P.ae(b)
$.o.push(a)
try{s=t
s.a=P.cV(s.a,a,", ")}finally{if(0>=$.o.length)return H.f($.o,-1)
$.o.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cz:function(a){var t,s
for(t=$.o.length,s=0;s<t;++s)if(a===$.o[s])return!0
return!1},
eR:function(a,b){var t,s,r,q,p,o,n,m=a.gw(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.e(m.gp())
b.push(t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.f(b,-1)
s=b.pop()
if(0>=b.length)return H.f(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.m()){if(k<=4){b.push(H.e(q))
return}s=H.e(q)
if(0>=b.length)return H.f(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.m();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.f(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=H.e(q)
s=H.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
cP:function(a){var t,s={}
if(P.cz(a))return"{...}"
t=new P.ae("")
try{$.o.push(a)
t.a+="{"
s.a=!0
a.aq(0,new P.bH(s,t))
t.a+="}"}finally{if(0>=$.o.length)return H.f($.o,-1)
$.o.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
bd:function bd(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
be:function be(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aI:function aI(){},
aO:function aO(){},
a7:function a7(){},
aP:function aP(){},
bH:function bH(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
bf:function bf(){},
ag:function ag(){},
ax:function ax(){},
aA:function aA(){},
bx:function bx(){},
bV:function bV(){},
bW:function bW(){},
c7:function c7(a){this.b=0
this.c=a},
dR:function(a){if(a instanceof H.P)return a.h(0)
return"Instance of '"+H.e(H.bJ(a))+"'"},
dY:function(a,b){var t,s=J.dU(a)
if(a!==0&&!0)for(t=0;t<s.length;++t)s[t]=b
return s},
dZ:function(a){var t,s=[]
for(t=a.gw(a);t.m();)s.push(t.gp())
return s},
cq:function(a){var t=a,s=t.length,r=P.cp(0,null,s)
return H.e2(r<s?t.slice(0,r):t)},
e4:function(a){return new H.bD(a,H.dW(a,!1,!0,!1,!1,!1))},
cV:function(a,b,c){var t=J.cF(b)
if(!t.m())return a
if(c.length===0){do a+=H.e(t.gp())
while(t.m())}else{a+=H.e(t.gp())
for(;t.m();)a=a+c+H.e(t.gp())}return a},
d6:function(a,b,c,d){var t,s,r,q,p,o,n="0123456789ABCDEF"
if(c===C.d){t=$.dE().b
t=t.test(b)}else t=!1
if(t)return b
s=C.t.an(b)
for(t=s.length,r=0,q="";r<t;++r){p=s[r]
if(p<128){o=p>>>4
if(o>=8)return H.f(a,o)
o=(a[o]&1<<(p&15))!==0}else o=!1
if(o)q+=H.e1(p)
else q=q+"%"+n[p>>>4&15]+n[p&15]}return q.charCodeAt(0)==0?q:q},
by:function(a){if(typeof a=="number"||H.db(a)||null==a)return J.au(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dR(a)},
bs:function(a){return new P.aw(a)},
dH:function(a){return new P.v(!1,null,null,a)},
dI:function(a,b,c){return new P.v(!0,a,b,c)},
aX:function(a,b){return new P.ab(null,null,!0,a,b,"Value not in range")},
ac:function(a,b,c,d,e){return new P.ab(b,c,!0,a,d,"Invalid value")},
cp:function(a,b,c){if(a>c)throw H.d(P.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ac(b,a,c,"end",null))
return b}return c},
dS:function(a,b,c,d,e){var t=e==null?J.bo(b):e
return new P.aG(t,!0,a,c,"Index out of range")},
G:function(a){return new P.b7(a)},
cX:function(a){return new P.b4(a)},
az:function(a){return new P.ay(a)},
cl:function(a){return new P.c1(a)},
aq:function aq(){},
bl:function bl(){},
a4:function a4(a){this.a=a},
bv:function bv(){},
bw:function bw(){},
i:function i(){},
aw:function aw(a){this.a=a},
aV:function aV(){},
v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aG:function aG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b7:function b7(a){this.a=a},
b4:function b4(a){this.a=a},
ay:function ay(a){this.a=a},
ad:function ad(){},
aB:function aB(a){this.a=a},
c1:function c1(a){this.a=a},
bA:function bA(a,b){this.a=a
this.b=b},
u:function u(){},
aH:function aH(){},
aJ:function aJ(){},
aN:function aN(){},
A:function A(){},
at:function at(){},
h:function h(){},
t:function t(){},
ae:function ae(a){this.a=a}},W={
cG:function(){var t=document.createElement("a")
return t},
eg:function(a,b,c,d){var t=W.f4(new W.c0(c),u.z),s=t!=null
if(s&&!0)if(s)J.dF(a,b,t,!1)
return new W.bb(a,b,t,!1)},
f4:function(a,b){var t=$.C
if(t===C.c)return a
return t.al(a,b)},
c:function c(){},
bq:function bq(){},
br:function br(){},
L:function L(){},
a3:function a3(){},
bt:function bt(){},
bu:function bu(){},
b:function b(){},
a:function a(){},
Q:function Q(){},
bz:function bz(){},
q:function q(){},
bK:function bK(){},
ck:function ck(a){this.$ti=a},
bb:function bb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
c0:function c0(a){this.a=a},
b9:function b9(){}},K={
l:function(a){var t=new K.bL()
t.a6(a)
return t},
bp:function bp(){},
aF:function aF(){},
F:function F(){this.a=null},
bL:function bL(){this.a=null}},L={b_:function b_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},b3:function b3(a){this.b=a
this.c=null},bR:function bR(){var _=this
_.d=_.c=_.b=_.a=null},bS:function bS(a){this.b=a
this.a=this.c=null}},V={
e7:function(a,b){var t=new V.bM()
t.a7(a,!1)
return t},
bM:function bM(){this.b=this.a=null},
bO:function bO(a){this.a=a},
bN:function bN(a){this.a=a}},F={
dk:function(){var t,s,r=V.e7("3Dart",!1),q=document,p=q.createElement("div")
p.className="pageImage"
p.id="3Dart"
t=W.cG()
t.href="#3Dart"
s=q.createElement("img")
s.src="resources/ThreeDart.png"
t.appendChild(s)
p.appendChild(t)
r.a.appendChild(p)
r.v(["Currently 3Dart is still in beta."])
r.v(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ","were you can download and play with 3Dart right now. Please feel free to help ","develop and contribute to the 3Dart code and community."])
r.S(2,"Examples")
r.v(["[3Dart Craft|./examples/craft/]"])
r.v(["[3Dart Chess|./examples/chess/]"])
r.v(["[Hypersphere|./examples/hypersphere/]"])
r.S(2,"Tutorials")
r.v(["[Getting Started|./tutorials/tutorial1/]"])
r.a_(6,"Tutorials still need to be written","")
r.v(["Material Lighting"])
r.v(["Advanced Movers"])
r.v(["Advanced Shapes"])
r.v(["Advanced Techniques"])
r.v(["Scene Compositing"])
r.S(2,"Tests")
r.v(["[Tests|./tests/]"])}}
var w=[C,H,J,P,W,K,L,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cn.prototype={}
J.n.prototype={
F:function(a,b){return a===b},
gq:function(a){return H.aa(a)},
h:function(a){return"Instance of '"+H.e(H.bJ(a))+"'"}}
J.bB.prototype={
h:function(a){return String(a)},
gq:function(a){return a?519018:218159}}
J.a6.prototype={
F:function(a,b){return null==b},
h:function(a){return"null"},
gq:function(a){return 0}}
J.M.prototype={
gq:function(a){return 0},
h:function(a){return String(a)}}
J.aW.prototype={}
J.V.prototype={}
J.x.prototype={
h:function(a){var t=a[$.dt()]
if(t==null)return this.a5(a)
return"JavaScript function for "+H.e(J.au(t))}}
J.w.prototype={
aj:function(a,b){var t,s
if(!!a.fixed$length)H.O(P.G("addAll"))
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.a0)(b),++s)a.push(b[s])},
as:function(a){var t,s,r=P.dY(a.length,"")
for(t=0;t<a.length;++t){s=H.e(a[t])
if(t>=r.length)return H.f(r,t)
r[t]=s}return r.join("")},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.a1(a[t],b))return!0
return!1},
h:function(a){return P.cm(a,"[","]")},
gw:function(a){return new J.av(a,a.length)},
gq:function(a){return H.aa(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.a_(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.O(P.G("indexed set"))
if(b>=a.length||b<0)throw H.d(H.a_(a,b))
a[b]=c}}
J.bE.prototype={}
J.av.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.a0(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.R.prototype={
B:function(a,b){var t
if(typeof b!="number")throw H.d(H.K(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gU(b)
if(this.gU(a)===t)return 0
if(this.gU(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gU:function(a){return a===0?1/a<0:a<0},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.G(""+a+".round()"))},
am:function(a,b,c){if(C.a.B(b,c)>0)throw H.d(H.K(b))
if(this.B(a,b)<0)return b
if(this.B(a,c)>0)return c
return a},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
C:function(a,b){return(a|0)===a?a/b|0:this.ah(a,b)},
ah:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.G("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
P:function(a,b){var t
if(a>0)t=this.ag(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ag:function(a,b){return b>31?0:a>>>b}}
J.a5.prototype={$iu:1}
J.bC.prototype={}
J.E.prototype={
T:function(a,b){if(b<0)throw H.d(H.a_(a,b))
if(b>=a.length)H.O(H.a_(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(b>=a.length)throw H.d(H.a_(a,b))
return a.charCodeAt(b)},
t:function(a,b){if(typeof b!="string")throw H.d(P.dI(b,null,null))
return a+b},
a2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.aX(b,null))
if(b>c)throw H.d(P.aX(b,null))
if(c>a.length)throw H.d(P.aX(c,null))
return a.substring(b,c)},
B:function(a,b){var t
if(typeof b!="string")throw H.d(H.K(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
h:function(a){return a},
gq:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gl:function(a){return a.length},
$it:1}
H.j.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.T(this.a,b)}}
H.aC.prototype={}
H.T.prototype={
gp:function(){var t=this.d
return t},
m:function(){var t,s=this,r=s.a,q=J.cc(r),p=q.gl(r)
if(s.b!==p)throw H.d(P.az(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.ao(r,t);++s.c
return!0}}
H.aR.prototype={
gw:function(a){var t=this.a
return new H.a8(t.gw(t),this.b)},
gl:function(a){return this.a.a.a}}
H.aD.prototype={}
H.a8.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.a=t.c.$1(s.d)
return!0}t.a=null
return!1},
gp:function(){var t=this.a
return t}}
H.aE.prototype={}
H.b6.prototype={
j:function(a,b,c){throw H.d(P.G("Cannot modify an unmodifiable list"))}}
H.af.prototype={}
H.bT.prototype={
A:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aU.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aL.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.e(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.e(s.a)+")"
return r+q+"' on '"+t+"' ("+H.e(s.a)+")"}}
H.b5.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bI.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bg.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t}}
H.P.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dr(s==null?"unknown":s)+"'"},
gaz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bQ.prototype={}
H.bP.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dr(t)+"'"}}
H.a2.prototype={
F:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.a2))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gq:function(a){var t,s=this.c
if(s==null)t=H.aa(this.a)
else t=typeof s!=="object"?J.bn(s):H.aa(s)
return(t^H.aa(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bJ(t))+"'")}}
H.aY.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.y.prototype={
gl:function(a){return this.a},
gay:function(a){return H.e_(new H.S(this),new H.bF(this))},
i:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.L(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.L(q,b)
r=s==null?o:s.b
return r}else return p.ar(b)},
ar:function(a){var t,s,r=this.d
if(r==null)return null
t=this.Y(r,J.bn(a)&0x3ffffff)
s=this.a0(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.W(t==null?n.b=n.M():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.W(s==null?n.c=n.M():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.M()
q=J.bn(b)&0x3ffffff
p=n.Y(r,q)
if(p==null)n.O(r,q,[n.N(b,c)])
else{o=n.a0(p,b)
if(o>=0)p[o].b=c
else p.push(n.N(b,c))}}},
aq:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.d(P.az(t))
s=s.c}},
W:function(a,b,c){var t=this.L(a,b)
if(t==null)this.O(a,b,this.N(b,c))
else t.b=c},
N:function(a,b){var t=this,s=new H.bG(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&67108863
return s},
a0:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a1(a[s].a,b))return s
return-1},
h:function(a){return P.cP(this)},
L:function(a,b){return a[b]},
Y:function(a,b){return a[b]},
O:function(a,b,c){a[b]=c},
ac:function(a,b){delete a[b]},
M:function(){var t="<non-identifier-key>",s=Object.create(null)
this.O(s,t,s)
this.ac(s,t)
return s}}
H.bF.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){return H.eI(this.a).K("2(1)")}}
H.bG.prototype={}
H.S.prototype={
gl:function(a){return this.a.a},
gw:function(a){var t=this.a,s=new H.aM(t,t.r)
s.c=t.e
return s}}
H.aM.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.az(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
H.cd.prototype={
$1:function(a){return this.a(a)},
$S:1}
H.ce.prototype={
$2:function(a,b){return this.a(a,b)}}
H.cf.prototype={
$1:function(a){return this.a(a)}}
H.bD.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.aS.prototype={}
H.U.prototype={
gl:function(a){return a.length},
$iaK:1}
H.a9.prototype={
j:function(a,b,c){H.d8(b,a,a.length)
a[b]=c}}
H.aT.prototype={
gl:function(a){return a.length},
i:function(a,b){H.d8(b,a,a.length)
return a[b]}}
H.ah.prototype={}
H.ai.prototype={}
H.r.prototype={
K:function(a){return H.bj(v.typeUniverse,this,a)},
aA:function(a){return H.ex(v.typeUniverse,this,a)}}
H.bc.prototype={}
H.ba.prototype={
h:function(a){return this.a}}
H.aj.prototype={}
P.bY.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:2}
P.bX.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
P.bZ.prototype={
$0:function(){this.a.$0()}}
P.c_.prototype={
$0:function(){this.a.$0()}}
P.c5.prototype={
a8:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bk(new P.c6(this,b),0),a)
else throw H.d(P.G("`setTimeout()` not found."))}}
P.c6.prototype={
$0:function(){this.b.$0()}}
P.W.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.X.prototype={
gp:function(){var t=this.c
if(t==null)return this.b
return t.gp()},
m:function(){var t,s,r,q,p,o=this
for(;!0;){t=o.c
if(t!=null)if(t.m())return!0
else o.c=null
s=function(a,b,c){var n,m=b
while(true)try{return a(m,n)}catch(l){n=l
m=c}}(o.a,0,1)
if(s instanceof P.W){r=s.b
if(r===2){q=o.d
if(q==null||q.length===0){o.b=null
return!1}if(0>=q.length)return H.f(q,-1)
o.a=q.pop()
continue}else{t=s.a
if(r===3)throw t
else{p=J.cF(t)
if(p instanceof P.X){t=o.d
if(t==null)t=o.d=[]
t.push(o.a)
o.a=p.a
continue}else{o.c=p
continue}}}}else{o.b=s
return!0}}return!1}}
P.bh.prototype={
gw:function(a){return new P.X(this.a())}}
P.b8.prototype={}
P.b0.prototype={}
P.b1.prototype={}
P.c8.prototype={}
P.ca.prototype={
$0:function(){var t=H.d(this.a)
t.stack=J.au(this.b)
throw t}}
P.c2.prototype={
au:function(a){var t,s,r,q=null
try{if(C.c===$.C){a.$0()
return}P.eV(q,q,this,a)}catch(r){t=H.ds(r)
s=H.dh(r)
P.dd(q,q,this,t,s)}},
av:function(a,b){var t,s,r,q=null
try{if(C.c===$.C){a.$1(b)
return}P.eW(q,q,this,a,b)}catch(r){t=H.ds(r)
s=H.dh(r)
P.dd(q,q,this,t,s)}},
aw:function(a,b){return this.av(a,b,u.B)},
ak:function(a){return new P.c3(this,a)},
al:function(a,b){return new P.c4(this,a,b)}}
P.c3.prototype={
$0:function(){return this.a.au(this.b)}}
P.c4.prototype={
$1:function(a){return this.a.aw(this.b,a)},
$S:function(){return this.c.K("~(0)")}}
P.bd.prototype={
gw:function(a){var t=new P.be(this,this.r)
t.c=this.e
return t},
gl:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.ab(b)
return s}},
ab:function(a){var t=this.d
if(t==null)return!1
return this.ae(t[this.aa(a)],a)>=0},
aa:function(a){return J.bn(a)&1073741823},
ae:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a1(a[s].a,b))return s
return-1}}
P.be.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.d(P.az(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
P.aI.prototype={}
P.aO.prototype={}
P.a7.prototype={
gw:function(a){return new H.T(a,this.gl(a))},
ao:function(a,b){return this.i(a,b)},
h:function(a){return P.cm(a,"[","]")}}
P.aP.prototype={}
P.bH.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.e(a)
s.a=t+": "
s.a+=H.e(b)},
$S:3}
P.aQ.prototype={
gl:function(a){return this.a},
h:function(a){return P.cP(this)}}
P.bf.prototype={
h:function(a){return P.cm(this,"{","}")}}
P.ag.prototype={}
P.ax.prototype={}
P.aA.prototype={}
P.bx.prototype={}
P.bV.prototype={}
P.bW.prototype={
an:function(a){var t,s,r=P.cp(0,null,a.length),q=r-0
if(q===0)return new Uint8Array(0)
t=new Uint8Array(q*3)
s=new P.c7(t)
if(s.ad(a,0,r)!==r){C.b.T(a,r-1)
s.R()}return new Uint8Array(t.subarray(0,H.eC(0,s.b,t.length)))}}
P.c7.prototype={
R:function(){var t=this,s=t.c,r=t.b,q=t.b=r+1,p=s.length
if(r>=p)return H.f(s,r)
s[r]=239
r=t.b=q+1
if(q>=p)return H.f(s,q)
s[q]=191
t.b=r+1
if(r>=p)return H.f(s,r)
s[r]=189},
ai:function(a,b){var t,s,r,q,p,o=this
if((b&64512)===56320){t=65536+((a&1023)<<10)|b&1023
s=o.c
r=o.b
q=o.b=r+1
p=s.length
if(r>=p)return H.f(s,r)
s[r]=240|t>>>18
r=o.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|t>>>12&63
q=o.b=r+1
if(r>=p)return H.f(s,r)
s[r]=128|t>>>6&63
o.b=q+1
if(q>=p)return H.f(s,q)
s[q]=128|t&63
return!0}else{o.R()
return!1}},
ad:function(a,b,c){var t,s,r,q,p,o,n,m=this
if(b!==c&&(C.b.T(a,c-1)&64512)===55296)--c
for(t=m.c,s=t.length,r=b;r<c;++r){q=C.b.X(a,r)
if(q<=127){p=m.b
if(p>=s)break
m.b=p+1
t[p]=q}else{p=q&64512
if(p===55296){if(m.b+4>s)break
o=r+1
if(m.ai(q,C.b.X(a,o)))r=o}else if(p===56320){if(m.b+3>s)break
m.R()}else if(q<=2047){p=m.b
n=p+1
if(n>=s)break
m.b=n
if(p>=s)return H.f(t,p)
t[p]=192|q>>>6
m.b=n+1
t[n]=128|q&63}else{p=m.b
if(p+2>=s)break
n=m.b=p+1
if(p>=s)return H.f(t,p)
t[p]=224|q>>>12
p=m.b=n+1
if(n>=s)return H.f(t,n)
t[n]=128|q>>>6&63
m.b=p+1
if(p>=s)return H.f(t,p)
t[p]=128|q&63}}}return r}}
P.aq.prototype={}
P.bl.prototype={}
P.a4.prototype={
F:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a},
gq:function(a){return C.a.gq(this.a)},
B:function(a,b){return C.a.B(this.a,b.a)},
h:function(a){var t,s,r,q=new P.bw(),p=this.a
if(p<0)return"-"+new P.a4(0-p).h(0)
t=q.$1(C.a.C(p,6e7)%60)
s=q.$1(C.a.C(p,1e6)%60)
r=new P.bv().$1(p%1e6)
return""+C.a.C(p,36e8)+":"+H.e(t)+":"+H.e(s)+"."+H.e(r)}}
P.bv.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.bw.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.i.prototype={}
P.aw.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.by(t)
return"Assertion failed"}}
P.aV.prototype={
h:function(a){return"Throw of null."}}
P.v.prototype={
gJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gI:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gJ()+p+n
if(!r.a)return m
t=r.gI()
s=P.by(r.b)
return m+t+": "+s}}
P.ab.prototype={
gJ:function(){return"RangeError"},
gI:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.aG.prototype={
gJ:function(){return"RangeError"},
gI:function(){var t,s=this.b
if(typeof s!=="number")return s.H()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gl:function(a){return this.f}}
P.b7.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b4.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ay.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.by(t)+"."}}
P.ad.prototype={
h:function(a){return"Stack Overflow"},
$ii:1}
P.aB.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.c1.prototype={
h:function(a){return"Exception: "+this.a}}
P.bA.prototype={
h:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=C.b.a2(r,0,75)+"..."
return s+"\n"+r}}
P.u.prototype={}
P.aH.prototype={
gl:function(a){var t,s=this.gw(this)
for(t=0;s.m();)++t
return t},
h:function(a){return P.dT(this,"(",")")}}
P.aJ.prototype={}
P.aN.prototype={}
P.A.prototype={
gq:function(a){return P.h.prototype.gq.call(C.v,this)},
h:function(a){return"null"}}
P.at.prototype={}
P.h.prototype={constructor:P.h,$ih:1,
F:function(a,b){return this===b},
gq:function(a){return H.aa(this)},
h:function(a){return"Instance of '"+H.e(H.bJ(this))+"'"},
toString:function(){return this.h(this)}}
P.t.prototype={}
P.ae.prototype={
gl:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.bq.prototype={
h:function(a){return String(a)}}
W.br.prototype={
h:function(a){return String(a)}}
W.L.prototype={
gl:function(a){return a.length}}
W.a3.prototype={
gl:function(a){return a.length}}
W.bt.prototype={}
W.bu.prototype={
h:function(a){return String(a)}}
W.b.prototype={
h:function(a){return a.localName}}
W.a.prototype={$ia:1}
W.Q.prototype={
a9:function(a,b,c,d){return a.addEventListener(b,H.bk(c,1),!1)}}
W.bz.prototype={
gl:function(a){return a.length}}
W.q.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a4(a):t}}
W.bK.prototype={
gl:function(a){return a.length}}
W.ck.prototype={}
W.bb.prototype={}
W.c0.prototype={
$1:function(a){return this.a.$1(a)}}
W.b9.prototype={}
K.bp.prototype={
E:function(a){return!0},
h:function(a){return"all"}}
K.aF.prototype={
E:function(a){var t,s,r
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.a0)(t),++r)if(t[r].E(a))return!0
return!1},
h:function(a){var t,s,r,q,p
for(t=this.a,s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.a0)(t),++q){p=t[q]
if(r.length!==0)r+=", "
r+=p.h(0)}return r}}
K.F.prototype={
E:function(a){return!this.a3(a)},
h:function(a){return"!["+this.V(0)+"]"}}
K.bL.prototype={
a6:function(a){var t,s,r,q
if(a.a.length<=0)throw H.d(P.cl("May not create a Set with zero characters."))
t=new H.y(u.E)
for(s=new H.T(a,a.gl(a));s.m();){r=s.d
t.j(0,r,!0)}q=P.dZ(new H.S(t))
if(!!q.immutable$list)H.O(P.G("sort"))
H.ea(q,J.eK())
this.a=q},
E:function(a){return C.e.D(this.a,a)},
h:function(a){return P.cq(this.a)}}
L.b_.prototype={
n:function(a,b){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<s;++r){q=t[r]
if(q.b.b===b)return q}q=new L.bS(this.a.k(0,b))
q.a=[]
q.c=!1
this.c.push(q)
return q},
ap:function(a){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.a0)(t),++r){q=t[r]
if(q.E(a))return q}return null},
h:function(a){return this.b},
Z:function(){var t,s,r,q,p,o=this,n="("+o.b+")",m=o.d
if(m!=null){m=m.b
n+=" => ["+m+"]"
t=o.a
if(t.c.D(0,m))n+=" (consume)"
for(m=new H.S(o.d.c),m=m.gw(m);m.m();){s=m.d
n+="\n"
r=o.d.c.i(0,s)
s=n+("  -- "+H.e(s)+" => ["+H.e(r)+"]")
n=t.c.D(0,r)?s+" (consume)":s}}for(m=o.c,t=m.length,q=0;q<m.length;m.length===t||(0,H.a0)(m),++q){p=m[q]
n=n+"\n"+("  -- "+p.h(0))}return n.charCodeAt(0)==0?n:n}}
L.b2.prototype={
h:function(a){var t=H.dp(this.b,"\n","\\n"),s=H.dp(t,"\t","\\t")
return this.a+":"+this.c+':"'+s+'"'}}
L.b3.prototype={
h:function(a){return this.b}}
L.bR.prototype={
k:function(a,b){var t=this.a.i(0,b)
if(t==null){t=new L.b_(this,b)
t.c=[]
this.a.j(0,b,t)}return t},
G:function(a){var t=this.b.i(0,a)
if(t==null){t=new L.b3(a)
t.c=new H.y(u.i)
this.b.j(0,a,t)}return t},
a1:function(a){return this.ax(a)},
ax:function(a){var t=this
return P.eS(function(){var s=a
var r=0,q=1,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$a1(a0,a1){if(a0===1){p=a1
r=q}while(true)switch(r){case 0:e=t.d
d=[]
c=[]
b=[]
o=null,n=0,m=0,l=0
case 2:if(!!0){r=3
break}k=b.length
if(k!==0){if(!!b.fixed$length)H.O(P.G("removeAt"))
if(0>=k)H.O(P.aX(0,null))
j=b.splice(0,1)[0]}else{if(!s.m()){r=3
break}i=s.d
j=i}c.push(j);++n
h=e.ap(j)
r=h==null?4:6
break
case 4:if(o==null){g=P.cq(c)
throw H.d(P.cl("Untokenizable string [state: "+e.b+", index "+n+']: "'+g+'"'))}if(!!c.fixed$length)H.O(P.G("removeRange"))
P.cp(0,l,c.length)
c.splice(0,l-0)
C.e.aj(b,c)
c=[]
d=[]
e=t.d
r=!t.c.D(0,o.a)?7:8
break
case 7:r=9
return o
case 9:case 8:n=m
o=null
l=0
r=5
break
case 6:if(!h.c)d.push(j)
e=h.b
if(e.d!=null){g=P.cq(d)
k=e.d
f=k.c.i(0,g)
o=new L.b2(f==null?k.b:f,g,n)
l=c.length
m=n}case 5:r=2
break
case 3:r=o!=null&&!t.c.D(0,o.a)?10:11
break
case 10:r=12
return o
case 12:case 11:return P.eh()
case 1:return P.ei(p)}}},u.j)},
h:function(a){var t,s,r=new P.ae(""),q=this.d
if(q!=null)r.a=q.Z()+"\n"
for(q=this.a,q=q.gay(q),t=q.a,q=new H.a8(t.gw(t),q.b);q.m();){s=q.a
if(s!=this.d)r.a+=s.Z()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.bS.prototype={
h:function(a){return this.b.b+": "+this.V(0)}}
V.bM.prototype={
a7:function(a,b){var t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
t=q.createElement("div")
t.className="scrollPage"
p.appendChild(t)
s=q.createElement("div")
s.className="pageCenter"
t.appendChild(s)
if(a.length!==0)q.title=a
r=q.createElement("div")
this.a=r
s.appendChild(r)
this.b=null
W.eg(q,"scroll",new V.bO(o),!1)},
a_:function(a,b,c){var t,s,r,q
a=C.a.am(a,0,4)
if(c.length===0)c=P.d6(C.k,b,C.d,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=c
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.cG()
q.href="#"+c
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
S:function(a,b){return this.a_(a,b,"")},
v:function(a){var t,s,r,q,p,o,n,m
this.af()
t=document
s=t.createElement("div")
s.className="textPar"
r=this.b
q=C.e.as(a)
r.toString
q=new H.j(q)
q=new P.X(r.a1(new H.T(q,q.gl(q))).a())
for(;q.m();){r=q.gp()
switch(r.a){case"Bold":p=t.createElement("div")
p.className="boldPar"
p.textContent=r.b
s.appendChild(p)
break
case"Italic":p=t.createElement("div")
p.className="italicPar"
p.textContent=r.b
s.appendChild(p)
break
case"Code":p=t.createElement("div")
p.className="codePar"
p.textContent=r.b
s.appendChild(p)
break
case"Link":r=r.b
if(H.fp(r,"|",0)){o=r.split("|")
n=t.createElement("a")
n.className="linkPar"
if(1>=o.length)return H.f(o,1)
n.href=o[1]
n.textContent=o[0]
s.appendChild(n)}else{m=P.d6(C.k,r,C.d,!1)
n=t.createElement("a")
n.className="linkPar"
n.href="#"+m
n.textContent=r
s.appendChild(n)}break
case"Other":p=t.createElement("div")
p.className="normalPar"
p.textContent=r.b
s.appendChild(p)
break}}this.a.appendChild(s)},
af:function(){var t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
t=new L.bR()
t.a=new H.y(u.V)
t.b=new H.y(u.w)
t.c=P.dX(u.O)
t.d=t.k(0,q)
s=t.k(0,q).n(0,p)
r=K.l(new H.j("*"))
s.a.push(r)
s.c=!0
s=t.k(0,p).n(0,p)
r=new K.F()
r.a=[]
s.a.push(r)
s=K.l(new H.j("*"))
r.a.push(s)
s=t.k(0,p).n(0,"BoldEnd")
r=K.l(new H.j("*"))
s.a.push(r)
s.c=!0
s=t.k(0,q).n(0,o)
r=K.l(new H.j("_"))
s.a.push(r)
s.c=!0
s=t.k(0,o).n(0,o)
r=new K.F()
r.a=[]
s.a.push(r)
s=K.l(new H.j("_"))
r.a.push(s)
s=t.k(0,o).n(0,n)
r=K.l(new H.j("_"))
s.a.push(r)
s.c=!0
s=t.k(0,q).n(0,m)
r=K.l(new H.j("`"))
s.a.push(r)
s.c=!0
s=t.k(0,m).n(0,m)
r=new K.F()
r.a=[]
s.a.push(r)
s=K.l(new H.j("`"))
r.a.push(s)
s=t.k(0,m).n(0,"CodeEnd")
r=K.l(new H.j("`"))
s.a.push(r)
s.c=!0
s=t.k(0,q).n(0,l)
r=K.l(new H.j("["))
s.a.push(r)
s.c=!0
s=t.k(0,l).n(0,k)
r=K.l(new H.j("|"))
s.a.push(r)
r=t.k(0,l).n(0,j)
s=K.l(new H.j("]"))
r.a.push(s)
r.c=!0
r=t.k(0,l).n(0,l)
s=new K.F()
s.a=[]
r.a.push(s)
r=K.l(new H.j("|]"))
s.a.push(r)
r=t.k(0,k).n(0,j)
s=K.l(new H.j("]"))
r.a.push(s)
r.c=!0
r=t.k(0,k).n(0,k)
s=new K.F()
s.a=[]
r.a.push(s)
r=K.l(new H.j("|]"))
s.a.push(r)
t.k(0,q).n(0,i).a.push(new K.bp())
r=t.k(0,i).n(0,i)
s=new K.F()
s.a=[]
r.a.push(s)
r=K.l(new H.j("*_`["))
s.a.push(r)
r=t.k(0,"BoldEnd")
r.d=r.a.G(p)
r=t.k(0,n)
r.d=r.a.G(o)
r=t.k(0,"CodeEnd")
r.d=r.a.G(m)
r=t.k(0,j)
r.d=r.a.G("Link")
r=t.k(0,i)
r.d=r.a.G(i)
this.b=t}}
V.bO.prototype={
$1:function(a){P.eb(C.j,new V.bN(this.a))}}
V.bN.prototype={
$0:function(){var t=C.w.at(document.documentElement.scrollTop),s=this.a.style,r=H.e(-0.01*t)+"px"
s.top=r}};(function aliases(){var t=J.n.prototype
t.a4=t.h
t=J.M.prototype
t.a5=t.h
t=K.aF.prototype
t.a3=t.E
t.V=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1,r=hunkHelpers._static_0
t(J,"eK","dV",4)
s(P,"f5","ed",0)
s(P,"f6","ee",0)
s(P,"f7","ef",0)
r(P,"df","f_",5)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.cn,J.n,J.av,P.ag,P.aH,H.T,P.aJ,H.aE,H.b6,H.bT,P.i,H.bI,H.bg,H.P,P.aQ,H.bG,H.aM,H.bD,H.r,H.bc,P.c5,P.W,P.X,P.b8,P.b0,P.b1,P.c8,P.bf,P.be,P.a7,P.ax,P.c7,P.aq,P.at,P.a4,P.ad,P.c1,P.bA,P.aN,P.A,P.t,P.ae,W.bt,W.ck,K.bp,K.aF,K.bL,L.b_,L.b2,L.b3,L.bR,V.bM])
r(J.n,[J.bB,J.a6,J.M,J.w,J.R,J.E,H.aS,W.Q,W.b9,W.bu,W.a])
r(J.M,[J.aW,J.V,J.x])
s(J.bE,J.w)
r(J.R,[J.a5,J.bC])
s(P.aO,P.ag)
s(H.af,P.aO)
s(H.j,H.af)
r(P.aH,[H.aC,H.aR,P.aI])
s(H.aD,H.aR)
s(H.a8,P.aJ)
r(P.i,[H.aU,H.aL,H.b5,H.aY,H.ba,P.aw,P.aV,P.v,P.b7,P.b4,P.ay,P.aB])
r(H.P,[H.bQ,H.bF,H.cd,H.ce,H.cf,P.bY,P.bX,P.bZ,P.c_,P.c6,P.ca,P.c3,P.c4,P.bH,P.bv,P.bw,W.c0,V.bO,V.bN])
r(H.bQ,[H.bP,H.a2])
s(P.aP,P.aQ)
s(H.y,P.aP)
s(H.S,H.aC)
s(H.U,H.aS)
s(H.ah,H.U)
s(H.ai,H.ah)
s(H.a9,H.ai)
s(H.aT,H.a9)
s(H.aj,H.ba)
s(P.bh,P.aI)
s(P.c2,P.c8)
s(P.bd,P.bf)
s(P.aA,P.b1)
s(P.bx,P.ax)
s(P.bV,P.bx)
s(P.bW,P.aA)
r(P.at,[P.bl,P.u])
r(P.v,[P.ab,P.aG])
s(W.q,W.Q)
r(W.q,[W.b,W.L])
s(W.c,W.b)
r(W.c,[W.bq,W.br,W.bz,W.bK])
s(W.a3,W.b9)
s(W.bb,P.b0)
r(K.aF,[K.F,L.bS])
t(H.af,H.b6)
t(H.ah,P.a7)
t(H.ai,H.aE)
t(P.ag,P.a7)
t(W.b9,W.bt)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{u:"int",bl:"double",at:"num",t:"String",aq:"bool",A:"Null",aN:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(~())","@(@)","A(@)","A(h?,h?)","u(@,@)","~()"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.ew(v.typeUniverse,JSON.parse('{"x":"M","aW":"M","V":"M","ft":"a","fv":"a","a5":{"u":[]},"E":{"t":[]},"aU":{"i":[]},"aL":{"i":[]},"b5":{"i":[]},"aY":{"i":[]},"U":{"aK":["1"]},"a9":{"aK":["u"]},"aT":{"aK":["u"]},"ba":{"i":[]},"aj":{"i":[]},"aw":{"i":[]},"aV":{"i":[]},"v":{"i":[]},"ab":{"i":[]},"aG":{"i":[]},"b7":{"i":[]},"b4":{"i":[]},"ay":{"i":[]},"ad":{"i":[]},"aB":{"i":[]}}'))
H.ev(v.typeUniverse,JSON.parse('{"w":1,"bE":1,"av":1,"aC":1,"T":1,"aR":2,"aD":2,"a8":2,"aE":1,"b6":1,"af":1,"S":1,"aM":1,"U":1,"X":1,"bh":1,"b0":1,"b1":2,"be":1,"aI":1,"aO":1,"a7":1,"aP":2,"aQ":2,"bf":1,"ag":1,"ax":2,"aA":2,"aH":1,"aJ":1,"aN":1,"bb":1}'))
0
var u=(function rtii(){var t=H.fb
return{C:t("i"),z:t("a"),Z:t("fw"),b:t("w<@>"),T:t("a6"),g:t("x"),p:t("aK<@>"),V:t("y<t*,b_*>"),i:t("y<t*,t*>"),w:t("y<t*,b3*>"),E:t("y<u*,aq*>"),P:t("A"),K:t("h"),N:t("t"),o:t("V"),y:t("aq"),W:t("bl"),B:t("@"),S:t("u"),A:t("0&*"),_:t("h*"),O:t("t*"),j:t("b2*"),Q:t("cM<A>?"),X:t("h?"),H:t("at")}})();(function constants(){var t=hunkHelpers.makeConstList
C.u=J.n.prototype
C.e=J.w.prototype
C.a=J.a5.prototype
C.v=J.a6.prototype
C.w=J.R.prototype
C.b=J.E.prototype
C.x=J.x.prototype
C.l=J.aW.prototype
C.f=J.V.prototype
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

C.d=new P.bV()
C.t=new P.bW()
C.c=new P.c2()
C.j=new P.a4(0)
C.k=t([0,0,65498,45055,65535,34815,65534,18431])
C.y=new P.W(null,2)})();(function staticFields(){$.cZ=null
$.z=0
$.cJ=null
$.cI=null
$.dg=null
$.de=null
$.dm=null
$.cb=null
$.cg=null
$.cB=null
$.Y=null
$.an=null
$.ao=null
$.cy=!1
$.C=C.c
$.o=[]})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"fu","dt",function(){return H.fg("_$dart_dartClosure")})
t($,"fx","du",function(){return H.B(H.bU({
toString:function(){return"$receiver$"}}))})
t($,"fy","dv",function(){return H.B(H.bU({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fz","dw",function(){return H.B(H.bU(null))})
t($,"fA","dx",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fD","dA",function(){return H.B(H.bU(void 0))})
t($,"fE","dB",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fC","dz",function(){return H.B(H.cW(null))})
t($,"fB","dy",function(){return H.B(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"fG","dD",function(){return H.B(H.cW(void 0))})
t($,"fF","dC",function(){return H.B(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"fH","cD",function(){return P.ec()})
t($,"fJ","dE",function(){return P.e4("^[\\-\\.0-9A-Z_a-z~]*$")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.n,MediaError:J.n,Navigator:J.n,NavigatorConcurrentHardware:J.n,NavigatorUserMediaError:J.n,OverconstrainedError:J.n,PositionError:J.n,SQLError:J.n,ArrayBufferView:H.aS,Uint8Array:H.aT,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bq,HTMLAreaElement:W.br,CDATASection:W.L,CharacterData:W.L,Comment:W.L,ProcessingInstruction:W.L,Text:W.L,CSSStyleDeclaration:W.a3,MSStyleCSSProperties:W.a3,CSS2Properties:W.a3,DOMException:W.bu,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Window:W.Q,DOMWindow:W.Q,EventTarget:W.Q,HTMLFormElement:W.bz,Document:W.q,DocumentFragment:W.q,HTMLDocument:W.q,ShadowRoot:W.q,XMLDocument:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,HTMLSelectElement:W.bK})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true})
H.U.$nativeSuperclassTag="ArrayBufferView"
H.ah.$nativeSuperclassTag="ArrayBufferView"
H.ai.$nativeSuperclassTag="ArrayBufferView"
H.a9.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dk,[])
else F.dk([])})})()
//# sourceMappingURL=main.dart.js.map
