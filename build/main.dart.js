(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}var z=function(){var t=function(){}
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
if(typeof o=="function")o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.fn(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)H.fo(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cG"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cG(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=="string")r=a[r]
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={cr:function cr(){},
dX:function(a,b){return new H.aE(a,b)},
e6:function(a,b){H.b0(a,0,J.bq(a)-1,b)},
b0:function(a,b,c,d){if(c-b<=32)H.e5(a,b,c,d)
else H.e4(a,b,c,d)},
e5:function(a,b,c,d){var t,s,r,q,p,o
for(t=b+1,s=J.ch(a);t<=c;++t){r=s.i(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.i(a,q-1),r)
if(typeof p!=="number")return p.A()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.i(a,o))
q=o}s.j(a,q,r)}},
e4:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k=C.a.D(a4-a3+1,6),j=a3+k,i=a4-k,h=C.a.D(a3+a4,2),g=h-k,f=h+k,e=J.ch(a2),d=e.i(a2,j),c=e.i(a2,g),b=e.i(a2,h),a=e.i(a2,f),a0=e.i(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.A()
if(a1>0){t=a0
a0=a
a=t}e.j(a2,j,d)
e.j(a2,h,b)
e.j(a2,i,a0)
e.j(a2,g,e.i(a2,a3))
e.j(a2,f,e.i(a2,a4))
s=a3+1
r=a4-1
if(J.a_(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.i(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.j(a2,q,e.i(a2,s))
e.j(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.i(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.j(a2,q,e.i(a2,s))
m=s+1
e.j(a2,s,e.i(a2,r))
e.j(a2,r,p)
r=n
s=m
break}else{e.j(a2,q,e.i(a2,r))
e.j(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.i(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.j(a2,q,e.i(a2,s))
e.j(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.i(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.i(a2,r),c)<0){e.j(a2,q,e.i(a2,s))
m=s+1
e.j(a2,s,e.i(a2,r))
e.j(a2,r,p)
s=m}else{e.j(a2,q,e.i(a2,r))
e.j(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.j(a2,a3,e.i(a2,a1))
e.j(a2,a1,c)
a1=r+1
e.j(a2,a4,e.i(a2,a1))
e.j(a2,a1,a)
H.b0(a2,a3,s-2,a5)
H.b0(a2,r+2,a4,a5)
if(l)return
if(s<j&&r>i){for(;J.a_(a5.$2(e.i(a2,s),c),0);)++s
for(;J.a_(a5.$2(e.i(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.i(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.j(a2,q,e.i(a2,s))
e.j(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.i(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.i(a2,r),c)<0){e.j(a2,q,e.i(a2,s))
m=s+1
e.j(a2,s,e.i(a2,r))
e.j(a2,r,p)
s=m}else{e.j(a2,q,e.i(a2,r))
e.j(a2,r,p)}r=n
break}}H.b0(a2,s,r,a5)}else H.b0(a2,s,r,a5)},
aO:function aO(a){this.a=a},
k:function k(a){this.a=a},
aD:function aD(){},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.a=a
this.b=b},
a9:function a9(a,b){this.a=null
this.b=a
this.c=b},
aF:function aF(){},
b9:function b9(){},
ah:function ah(){},
dp:function(a){var t,s=H.dn(a)
if(s!=null)return s
t="minified:"+a
return t},
fW:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
e:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.br(a)
return t},
ac:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bN:function(a){return H.dY(a)},
dY:function(a){var t,s,r,q
if(a instanceof P.j)return H.p(H.au(a),null)
if(J.at(a)===C.u||u.o.b(a)){t=C.h(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.p(H.au(a),null)},
cR:function(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
e0:function(a){var t,s,r,q=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.aw)(a),++s){r=a[s]
if(!H.cd(r))throw H.d(H.bn(r))
if(r<=65535)q.push(r)
else if(r<=1114111){q.push(55296+(C.a.R(r-65536,10)&1023))
q.push(56320+(r&1023))}else throw H.d(H.bn(r))}return H.cR(q)},
e_:function(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!H.cd(r))throw H.d(H.bn(r))
if(r<0)throw H.d(H.bn(r))
if(r>65535)return H.e0(a)}return H.cR(a)},
dZ:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((C.a.R(t,10)|55296)>>>0,t&1023|56320)}throw H.d(P.ae(a,0,1114111,null,null))},
f:function(a,b){if(a==null)J.bq(a)
throw H.d(H.Z(a,b))},
Z:function(a,b){var t,s="index"
if(!H.cd(b))return new P.v(!0,b,s,null)
t=J.bq(a)
if(b<0||b>=t)return P.dP(b,a,s,null,t)
return P.aY(b,s)},
f4:function(a,b,c){if(a>c)return P.ae(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ae(b,a,c,"end",null)
return new P.v(!0,b,"end",null)},
bn:function(a){return new P.v(!0,a,null,null)},
d:function(a){var t,s
if(a==null)a=new P.aW()
t=new Error()
t.dartException=a
s=H.fp
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fp:function(){return J.br(this.dartException)},
D:function(a){throw H.d(a)},
aw:function(a){throw H.d(P.a2(a))},
z:function(a){var t,s,r,q,p,o
a=H.dl(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bW(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
bX:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cW:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cs:function(a,b){var t=b==null,s=t?null:b.method
return new H.aN(a,s,t?null:b.receiver)},
dq:function(a){if(a==null)return new H.bM(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.N(a,a.dartException)
return H.eZ(a)},
N:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eZ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.a.R(s,16)&8191)===10)switch(r){case 438:return H.N(a,H.cs(H.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.e(t)+" (Error "+r+")"
return H.N(a,new H.ab(q,f))}}if(a instanceof TypeError){p=$.ds()
o=$.dt()
n=$.du()
m=$.dv()
l=$.dy()
k=$.dz()
j=$.dx()
$.dw()
i=$.dB()
h=$.dA()
g=p.w(t)
if(g!=null)return H.N(a,H.cs(t,g))
else{g=o.w(t)
if(g!=null){g.method="call"
return H.N(a,H.cs(t,g))}else{g=n.w(t)
if(g==null){g=m.w(t)
if(g==null){g=l.w(t)
if(g==null){g=k.w(t)
if(g==null){g=j.w(t)
if(g==null){g=m.w(t)
if(g==null){g=i.w(t)
if(g==null){g=h.w(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q)return H.N(a,new H.ab(t,g==null?f:g.method))}}return H.N(a,new H.b8(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.af()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.N(a,new P.v(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.af()
return a},
dg:function(a){var t
if(a==null)return new H.bj(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.bj(a)},
ff:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.bD("Unsupported number of arguments for wrapped closure"))},
bo:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ff)
a.$identity=t
return t},
dN:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.bS().constructor.prototype):Object.create(new H.a0(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.w
if(typeof s!=="number")return s.C()
$.w=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.cN(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dJ(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cN(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dJ:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.dh,a)
if(typeof a=="string"){if(b)throw H.d("Cannot compute signature for static tearoff.")
t=c?H.dH:H.dG
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.d("Error in functionType of tearoff")},
dK:function(a,b,c,d){var t=H.cM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cN:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.dM(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dK(s,!q,t,b)
if(s===0){q=$.w
if(typeof q!=="number")return q.C()
$.w=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.a1
return new Function(q+(p==null?$.a1=H.bw("self"):p)+";return "+o+"."+H.e(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.w
if(typeof q!=="number")return q.C()
$.w=q+1
n+=q
q="return function("+n+"){return this."
p=$.a1
return new Function(q+(p==null?$.a1=H.bw("self"):p)+"."+H.e(t)+"("+n+");}")()},
dL:function(a,b,c,d){var t=H.cM,s=H.dI
switch(b?-1:a){case 0:throw H.d(new H.aZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
dM:function(a,b){var t,s,r,q,p,o,n,m=$.a1
if(m==null)m=$.a1=H.bw("self")
t=$.cL
if(t==null)t=$.cL=H.bw("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.dL(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.e(s)+"(this."+t+");"
o=$.w
if(typeof o!=="number")return o.C()
$.w=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.e(s)+"(this."+t+", "+n+");"
o=$.w
if(typeof o!=="number")return o.C()
$.w=o+1
return new Function(p+o+"}")()},
cG:function(a,b,c,d,e,f,g){return H.dN(a,b,c,d,!!e,!!f,g)},
dG:function(a,b){return H.bm(v.typeUniverse,H.au(a.a),b)},
dH:function(a,b){return H.bm(v.typeUniverse,H.au(a.c),b)},
cM:function(a){return a.a},
dI:function(a){return a.c},
bw:function(a){var t,s,r,q=new H.a0("self","target","receiver","name"),p=J.cP(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.d(P.dF("Field name "+a+" not found."))},
fn:function(a){throw H.d(new P.aC(a))},
fb:function(a){return v.getIsolateTag(a)},
fo:function(a){return H.D(new H.aO(a))},
fh:function(a){var t,s,r,q,p,o=$.df.$1(a),n=$.cg[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cm[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.dd.$2(a,o)
if(r!=null){n=$.cg[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cm[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.cn(t)
$.cg[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cm[o]=t
return t}if(q==="-"){p=H.cn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dj(a,t)
if(q==="*")throw H.d(P.cX(o))
if(v.leafTags[o]===true){p=H.cn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dj(a,t)},
dj:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cI(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cn:function(a){return J.cI(a,!1,null,!!a.$iaM)},
fj:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.cn(t)
else return J.cI(t,c,null,null)},
fd:function(){if(!0===$.cH)return
$.cH=!0
H.fe()},
fe:function(){var t,s,r,q,p,o,n,m
$.cg=Object.create(null)
$.cm=Object.create(null)
H.fc()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dk.$1(p)
if(o!=null){n=H.fj(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fc:function(){var t,s,r,q,p,o,n=C.m()
n=H.Y(C.n,H.Y(C.o,H.Y(C.i,H.Y(C.i,H.Y(C.p,H.Y(C.q,H.Y(C.r(C.h),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.df=new H.cj(q)
$.dd=new H.ck(p)
$.dk=new H.cl(o)},
Y:function(a,b){return a(b)||b},
dS:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.d(new P.bF("Illegal RegExp pattern ("+String(o)+")",a))},
fl:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
f6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
dl:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dm:function(a,b,c){var t=H.fm(a,b,c)
return t},
fm:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
s=""+c
for(r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.dl(b),'g'),H.f6(c))},
bW:function bW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ab:function ab(a,b){this.a=a
this.b=b},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a},
bM:function bM(a){this.a=a},
bj:function bj(a){this.a=a
this.b=null},
O:function O(){},
bT:function bT(){},
bS:function bS(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a){this.a=a},
Q:function Q(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bJ:function bJ(a){this.a=a},
bK:function bK(a,b){this.a=a
this.b=b
this.c=null},
R:function R(a){this.a=a},
aP:function aP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
cl:function cl(a){this.a=a},
bH:function bH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d7:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.Z(b,a))},
ey:function(a,b,c){var t
if(!(a>>>0!==a))t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw H.d(H.f4(a,b,c))
return b},
aU:function aU(){},
T:function T(){},
aa:function aa(){},
aV:function aV(){},
aj:function aj(){},
ak:function ak(){},
cT:function(a,b){var t=b.c
return t==null?b.c=H.cA(a,b.z,!0):t},
cS:function(a,b){var t=b.c
return t==null?b.c=H.am(a,"cO",[b.z]):t},
cU:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cU(a.z)
return t===11||t===12},
e2:function(a){return a.cy},
f7:function(a){return H.cB(v.typeUniverse,a,!1)},
J:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.J(a,t,c,a0)
if(s===t)return b
return H.d3(a,s,!0)
case 7:t=b.z
s=H.J(a,t,c,a0)
if(s===t)return b
return H.cA(a,s,!0)
case 8:t=b.z
s=H.J(a,t,c,a0)
if(s===t)return b
return H.d2(a,s,!0)
case 9:r=b.Q
q=H.as(a,r,c,a0)
if(q===r)return b
return H.am(a,b.z,q)
case 10:p=b.z
o=H.J(a,p,c,a0)
n=b.Q
m=H.as(a,n,c,a0)
if(o===p&&m===n)return b
return H.cy(a,o,m)
case 11:l=b.z
k=H.J(a,l,c,a0)
j=b.Q
i=H.eW(a,j,c,a0)
if(k===l&&i===j)return b
return H.d1(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.as(a,h,c,a0)
p=b.z
o=H.J(a,p,c,a0)
if(g===h&&o===p)return b
return H.cz(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.d(P.bv("Attempted to substitute unexpected RTI kind "+d))}},
as:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.J(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
eX:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.J(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
eW:function(a,b,c,d){var t,s=b.a,r=H.as(a,s,c,d),q=b.b,p=H.as(a,q,c,d),o=b.c,n=H.eX(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.bf()
t.a=r
t.b=p
t.c=n
return t},
fX:function(a,b){a[v.arrayRti]=b
return a},
f3:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.dh(t)
return a.$S()}return null},
di:function(a,b){var t
if(H.cU(b))if(a instanceof H.O){t=H.f3(a)
if(t!=null)return t}return H.au(a)},
au:function(a){var t
if(a instanceof P.j){t=a.$ti
return t!=null?t:H.cC(a)}if(Array.isArray(a))return H.ev(a)
return H.cC(J.at(a))},
ev:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
u:function(a){var t=a.$ti
return t!=null?t:H.cC(a)},
cC:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eF(a,t)},
eF:function(a,b){var t=a instanceof H.O?a.__proto__.__proto__.constructor:b,s=H.eu(v.typeUniverse,t.name)
b.$ccache=s
return s},
dh:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.cB(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eE:function(a){var t,s,r,q=this
if(q===u.K)return H.ap(q,a,H.eJ)
if(!H.C(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.ap(q,a,H.eM)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.cd
else if(s===u.i||s===u.H)r=H.eI
else if(s===u.N)r=H.eK
else r=s===u.y?H.da:null
if(r!=null)return H.ap(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.fg)){q.r="$i"+t
return H.ap(q,a,H.eL)}}else if(t===7)return H.ap(q,a,H.eC)
return H.ap(q,a,H.eA)},
ap:function(a,b,c){a.b=c
return a.b(b)},
eD:function(a){var t,s=this,r=H.ez
if(!H.C(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.ex
else if(s===u.K)r=H.ew
else{t=H.av(s)
if(t)r=H.eB}s.a=r
return s.a(a)},
cF:function(a){var t,s=a.y
if(!H.C(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&H.cF(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eA:function(a){var t=this
if(a==null)return H.cF(t)
return H.i(v.typeUniverse,H.di(a,t),null,t,null)},
eC:function(a){if(a==null)return!0
return this.z.b(a)},
eL:function(a){var t,s=this
if(a==null)return H.cF(s)
t=s.r
if(a instanceof P.j)return!!a[t]
return!!J.at(a)[t]},
ez:function(a){var t,s=this
if(a==null){t=H.av(s)
if(t)return a}else if(s.b(a))return a
H.d8(a,s)},
eB:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.d8(a,t)},
d8:function(a,b){throw H.d(H.ek(H.cY(a,H.di(a,b),H.p(b,null))))},
cY:function(a,b,c){var t=P.bC(a),s=H.p(b==null?H.au(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
ek:function(a){return new H.al("TypeError: "+a)},
m:function(a,b){return new H.al("TypeError: "+H.cY(a,null,b))},
eJ:function(a){return a!=null},
ew:function(a){if(a!=null)return a
throw H.d(H.m(a,"Object"))},
eM:function(a){return!0},
ex:function(a){return a},
da:function(a){return!0===a||!1===a},
fH:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.d(H.m(a,"bool"))},
fJ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.m(a,"bool"))},
fI:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.d(H.m(a,"bool?"))},
fK:function(a){if(typeof a=="number")return a
throw H.d(H.m(a,"double"))},
fM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"double"))},
fL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"double?"))},
cd:function(a){return typeof a=="number"&&Math.floor(a)===a},
fN:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.d(H.m(a,"int"))},
fP:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.m(a,"int"))},
fO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.d(H.m(a,"int?"))},
eI:function(a){return typeof a=="number"},
fQ:function(a){if(typeof a=="number")return a
throw H.d(H.m(a,"num"))},
fS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"num"))},
fR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.d(H.m(a,"num?"))},
eK:function(a){return typeof a=="string"},
fT:function(a){if(typeof a=="string")return a
throw H.d(H.m(a,"String"))},
fV:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.m(a,"String"))},
fU:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.d(H.m(a,"String?"))},
eS:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.p(a[r],b)
return t},
d9:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=[]
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)a4.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.f(a4,k)
n=C.b.C(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.p(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.p(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.p(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.p(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.p(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
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
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.p(a.z,b)+">"
if(m===9){q=H.eY(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eS(p,b)+">"):q}if(m===11)return H.d9(a,b,null)
if(m===12)return H.d9(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.f(b,o)
return b[o]}return"?"},
eY:function(a){var t,s=H.dn(a)
if(s!=null)return s
t="minified:"+a
return t},
d4:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eu:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.cB(a,b,!1)
else if(typeof n=="number"){t=n
s=H.an(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.am(a,b,r)
o[b]=p
return p}else return n},
es:function(a,b){return H.d6(a.tR,b)},
er:function(a,b){return H.d6(a.eT,b)},
cB:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.d0(H.cZ(a,null,b,c))
s.set(b,t)
return t},
bm:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.d0(H.cZ(a,b,c,!0))
r.set(c,s)
return s},
et:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cy(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
I:function(a,b){b.a=H.eD
b.b=H.eE
return b},
an:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.t(null,null)
t.y=b
t.cy=c
s=H.I(a,t)
a.eC.set(c,s)
return s},
d3:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ep(a,b,s,c)
a.eC.set(s,t)
return t},
ep:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.C(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.t(null,null)
r.y=6
r.z=b
r.cy=c
return H.I(a,r)},
cA:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.eo(a,b,s,c)
a.eC.set(s,t)
return t},
eo:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.C(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.av(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.av(r.z))return r
else return H.cT(a,b)}}q=new H.t(null,null)
q.y=7
q.z=b
q.cy=c
return H.I(a,q)},
d2:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.em(a,b,s,c)
a.eC.set(s,t)
return t},
em:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.C(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.am(a,"cO",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.t(null,null)
r.y=8
r.z=b
r.cy=c
return H.I(a,r)},
eq:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.t(null,null)
t.y=13
t.z=b
t.cy=r
s=H.I(a,t)
a.eC.set(r,s)
return s},
bl:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
el:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
am:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.bl(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.t(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.I(a,s)
a.eC.set(q,r)
return r},
cy:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.bl(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.t(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.I(a,p)
a.eC.set(r,o)
return o},
d1:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.bl(n)
if(k>0){t=m>0?",":""
s=H.bl(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.el(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.t(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.I(a,p)
a.eC.set(r,s)
return s},
cz:function(a,b,c,d){var t,s=b.cy+("<"+H.bl(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.en(a,b,c,s,d)
a.eC.set(s,t)
return t},
en:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.J(a,b,s,0)
n=H.as(a,c,s,0)
return H.cz(a,o,n,c!==n)}}m=new H.t(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.I(a,m)},
cZ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
d0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.ef(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.d_(a,s,i,h,!1)
else if(r===46)s=H.d_(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.H(a.u,a.e,h.pop()))
break
case 94:h.push(H.eq(a.u,h.pop()))
break
case 35:h.push(H.an(a.u,5,"#"))
break
case 64:h.push(H.an(a.u,2,"@"))
break
case 126:h.push(H.an(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.cx(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.am(q,o,p))
else{n=H.H(q,a.e,o)
switch(n.y){case 11:h.push(H.cz(q,n,p,a.n))
break
default:h.push(H.cy(q,n,p))
break}}break
case 38:H.eg(a,h)
break
case 42:q=a.u
h.push(H.d3(q,H.H(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.cA(q,H.H(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.d2(q,H.H(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.bf()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
H.cx(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.d1(q,H.H(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.cx(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.ei(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.H(a.u,a.e,j)},
ef:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
d_:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.d4(t,p.z)[q]
if(o==null)H.D('No "'+q+'" in "'+H.e2(p)+'"')
d.push(H.bm(t,p,o))}else d.push(q)
return n},
eg:function(a,b){var t=b.pop()
if(0===t){b.push(H.an(a.u,1,"0&"))
return}if(1===t){b.push(H.an(a.u,4,"1&"))
return}throw H.d(P.bv("Unexpected extended operation "+H.e(t)))},
H:function(a,b,c){if(typeof c=="string")return H.am(a,c,a.sEA)
else if(typeof c=="number")return H.eh(a,b,c)
else return c},
cx:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.H(a,b,c[t])},
ei:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.H(a,b,c[t])},
eh:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.d(P.bv("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.d(P.bv("Bad index "+c+" for "+b.h(0)))},
i:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.C(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.C(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.i(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.i(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.i(a,b.z,c,d,e)
if(s===6)return H.i(a,b.z,c,d,e)
return s!==7}if(s===6)return H.i(a,b.z,c,d,e)
if(q===6){t=H.cT(a,d)
return H.i(a,b,c,t,e)}if(s===8){if(!H.i(a,b.z,c,d,e))return!1
return H.i(a,H.cS(a,b),c,d,e)}if(s===7){t=H.i(a,u.P,c,d,e)
return t&&H.i(a,b.z,c,d,e)}if(q===8){if(H.i(a,b,c,d.z,e))return!0
return H.i(a,b,c,H.cS(a,d),e)}if(q===7){t=H.i(a,b,c,u.P,e)
return t||H.i(a,b,c,d.z,e)}if(r)return!1
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
if(!H.i(a,l,c,k,e)||!H.i(a,k,e,l,c))return!1}return H.db(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.db(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.eH(a,b,c,d,e)}return!1},
db:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.i(a2,a3.z,a4,a5.z,a6))return!1
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
if(!H.i(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.i(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.i(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.i(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
eH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.i(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.d4(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.i(a,H.bm(a,b,m[q]),c,s[q],e))return!1
return!0},
av:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.C(a))if(s!==7)if(!(s===6&&H.av(a.z)))t=s===8&&H.av(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fg:function(a){var t
if(!H.C(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
C:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
d6:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
t:function t(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
bf:function bf(){this.c=this.b=this.a=null},
bd:function bd(){},
al:function al(a){this.a=a},
dn:function(a){return v.mangledGlobalNames[a]}},J={
cI:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ci:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cH==null){H.fd()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.d(P.cX("Return interceptor for "+H.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.c5
if(p==null)p=$.c5=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.fh(a)
if(q!=null)return q
if(typeof a=="function")return C.x
t=Object.getPrototypeOf(a)
if(t==null)return C.l
if(t===Object.prototype)return C.l
if(typeof r=="function"){p=$.c5
if(p==null)p=$.c5=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
cP:function(a){a.fixed$length=Array
return a},
dR:function(a,b){return J.dE(a,b)},
at:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a5.prototype
return J.bG.prototype}if(typeof a=="string")return J.L.prototype
if(a==null)return J.a6.prototype
if(typeof a=="boolean")return J.aL.prototype
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.ci(a)},
ch:function(a){if(typeof a=="string")return J.L.prototype
if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.ci(a)},
f8:function(a){if(a==null)return a
if(a.constructor==Array)return J.x.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.ci(a)},
f9:function(a){if(typeof a=="number")return J.a7.prototype
if(typeof a=="string")return J.L.prototype
if(a==null)return a
if(!(a instanceof P.j))return J.U.prototype
return a},
fa:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.j)return a
return J.ci(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.at(a).G(a,b)},
dD:function(a,b,c,d){return J.fa(a).a8(a,b,c,d)},
dE:function(a,b){return J.f9(a).B(a,b)},
bp:function(a){return J.at(a).gt(a)},
co:function(a){return J.f8(a).gv(a)},
bq:function(a){return J.ch(a).gl(a)},
br:function(a){return J.at(a).h(a)},
n:function n(){},
aL:function aL(){},
a6:function a6(){},
M:function M(){},
aX:function aX(){},
U:function U(){},
y:function y(){},
x:function x(){},
bI:function bI(){},
ax:function ax(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
a7:function a7(){},
a5:function a5(){},
bG:function bG(){},
L:function L(){}},P={
e8:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.f0()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bo(new P.c0(r),1)).observe(t,{childList:true})
return new P.c_(r,t,s)}else if(self.setImmediate!=null)return P.f1()
return P.f2()},
e9:function(a){self.scheduleImmediate(H.bo(new P.c1(a),0))},
ea:function(a){self.setImmediate(H.bo(new P.c2(a),0))},
eb:function(a){P.cw(C.j,a)},
cw:function(a,b){var t=C.a.D(a.a,1000)
return P.ej(t<0?0:t,b)},
ej:function(a,b){var t=new P.c9()
t.a6(a,b)
return t},
fF:function(a){return new P.V(a,1)},
ed:function(){return C.y},
ee:function(a){return new P.V(a,3)},
eO:function(a){return new P.bk(a)},
eP:function(){var t,s
for(t=$.X;t!=null;t=$.X){$.ar=null
s=t.b
$.X=s
if(s==null)$.aq=null
t.a.$0()}},
eV:function(){$.cD=!0
try{P.eP()}finally{$.ar=null
$.cD=!1
if($.X!=null)$.cJ().$1(P.de())}},
eT:function(a){var t=new P.bb(a),s=$.aq
if(s==null){$.X=$.aq=t
if(!$.cD)$.cJ().$1(P.de())}else $.aq=s.b=t},
eU:function(a){var t,s,r,q=$.X
if(q==null){P.eT(a)
$.ar=$.aq
return}t=new P.bb(a)
s=$.ar
if(s==null){t.b=q
$.X=$.ar=t}else{r=s.b
t.b=r
$.ar=s.b=t
if(r==null)$.aq=t}},
e7:function(a,b){var t=$.A
if(t===C.c)return P.cw(a,b)
return P.cw(a,t.ak(b))},
dc:function(a,b,c,d,e){P.eU(new P.ce(d,e))},
eQ:function(a,b,c,d){var t,s=$.A
if(s===c)return d.$0()
$.A=c
t=s
try{s=d.$0()
return s}finally{$.A=t}},
eR:function(a,b,c,d,e){var t,s=$.A
if(s===c)return d.$1(e)
$.A=c
t=s
try{s=d.$1(e)
return s}finally{$.A=t}},
c0:function c0(a){this.a=a},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
c1:function c1(a){this.a=a},
c2:function c2(a){this.a=a},
c9:function c9(){},
ca:function ca(a,b){this.a=a
this.b=b},
V:function V(a,b){this.a=a
this.b=b},
W:function W(a){var _=this
_.a=a
_.d=_.c=_.b=null},
bk:function bk(a){this.a=a},
bb:function bb(a){this.a=a
this.b=null},
b2:function b2(){},
b3:function b3(){},
cc:function cc(){},
ce:function ce(a,b){this.a=a
this.b=b},
c6:function c6(){},
c7:function c7(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function(a,b){return new H.Q(a.H("@<0>").a9(b).H("Q<1,2>"))},
dT:function(a){return new P.bg(a.H("bg<0>"))},
dQ:function(a,b,c){var t,s
if(P.cE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.o.push(a)
try{P.eN(a,t)}finally{if(0>=$.o.length)return H.f($.o,-1)
$.o.pop()}s=P.cV(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
cq:function(a,b,c){var t,s
if(P.cE(a))return b+"..."+c
t=new P.ag(b)
$.o.push(a)
try{s=t
s.a=P.cV(s.a,a,", ")}finally{if(0>=$.o.length)return H.f($.o,-1)
$.o.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cE:function(a){var t,s
for(t=$.o.length,s=0;s<t;++s)if(a===$.o[s])return!0
return!1},
eN:function(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.e(m.gq())
b.push(t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.f(b,-1)
s=b.pop()
if(0>=b.length)return H.f(b,-1)
r=b.pop()}else{q=m.gq();++k
if(!m.m()){if(k<=4){b.push(H.e(q))
return}s=H.e(q)
if(0>=b.length)return H.f(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gq();++k
for(;m.m();q=p,p=o){o=m.gq();++k
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
cQ:function(a){var t,s={}
if(P.cE(a))return"{...}"
t=new P.ag("")
try{$.o.push(a)
t.a+="{"
s.a=!0
a.aq(0,new P.bL(s,t))
t.a+="}"}finally{if(0>=$.o.length)return H.f($.o,-1)
$.o.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
bg:function bg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bh:function bh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aJ:function aJ(){},
aQ:function aQ(){},
a8:function a8(){},
aR:function aR(){},
bL:function bL(a,b){this.a=a
this.b=b},
aS:function aS(){},
b_:function b_(){},
bi:function bi(){},
ai:function ai(){},
ao:function ao(){},
az:function az(){},
aB:function aB(){},
bB:function bB(){},
bY:function bY(){},
bZ:function bZ(){},
cb:function cb(a){this.b=0
this.c=a},
dO:function(a){if(a instanceof H.O)return a.h(0)
return"Instance of '"+H.bN(a)+"'"},
dV:function(a,b){var t,s,r
if(a>4294967295)H.D(P.ae(a,0,4294967295,"length",null))
t=J.cP(new Array(a))
if(a!==0&&!0)for(s=t.length,r=0;r<s;++r)t[r]=b
return t},
dW:function(a){var t,s=[]
for(t=a.gv(a);t.m();)s.push(t.gq())
return s},
cv:function(a){var t=a,s=t.length,r=P.cu(0,null,s)
return H.e_(r<s?t.slice(0,r):t)},
e1:function(a){return new H.bH(a,H.dS(a,!1,!0,!1,!1,!1))},
cV:function(a,b,c){var t=J.co(b)
if(!t.m())return a
if(c.length===0){do a+=H.e(t.gq())
while(t.m())}else{a+=H.e(t.gq())
for(;t.m();)a=a+c+H.e(t.gq())}return a},
d5:function(a,b,c,d){var t,s,r,q,p,o,n="0123456789ABCDEF"
if(c===C.d){t=$.dC().b
t=t.test(b)}else t=!1
if(t)return b
s=C.t.an(b)
for(t=s.length,r=0,q="";r<t;++r){p=s[r]
if(p<128){o=p>>>4
if(o>=8)return H.f(a,o)
o=(a[o]&1<<(p&15))!==0}else o=!1
if(o)q+=H.dZ(p)
else q=q+"%"+n[p>>>4&15]+n[p&15]}return q.charCodeAt(0)==0?q:q},
bC:function(a){if(typeof a=="number"||H.da(a)||null==a)return J.br(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dO(a)},
bv:function(a){return new P.ay(a)},
dF:function(a){return new P.v(!1,null,null,a)},
aY:function(a,b){return new P.ad(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.ad(b,c,!0,a,d,"Invalid value")},
cu:function(a,b,c){if(a>c)throw H.d(P.ae(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.d(P.ae(b,a,c,"end",null))
return b}return c},
dP:function(a,b,c,d,e){var t=e==null?J.bq(b):e
return new P.aH(t,!0,a,c,"Index out of range")},
G:function(a){return new P.ba(a)},
cX:function(a){return new P.b7(a)},
a2:function(a){return new P.aA(a)},
bD:function(a){return new P.c4(a)},
a4:function a4(a){this.a=a},
bz:function bz(){},
bA:function bA(){},
h:function h(){},
ay:function ay(a){this.a=a},
b6:function b6(){},
aW:function aW(){},
v:function v(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aH:function aH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ba:function ba(a){this.a=a},
b7:function b7(a){this.a=a},
aA:function aA(a){this.a=a},
af:function af(){},
aC:function aC(a){this.a=a},
c4:function c4(a){this.a=a},
bF:function bF(a,b){this.a=a
this.b=b},
aI:function aI(){},
aK:function aK(){},
r:function r(){},
j:function j(){},
ag:function ag(a){this.a=a}},W={
cK:function(){var t=document.createElement("a")
t.toString
return t},
ec:function(a,b,c,d){var t=W.f_(new W.c3(c),u.z),s=t!=null
if(s&&!0)if(s)J.dD(a,b,t,!1)
return new W.be(a,b,t,!1)},
f_:function(a,b){var t=$.A
if(t===C.c)return a
return t.al(a,b)},
c:function c(){},
bt:function bt(){},
bu:function bu(){},
K:function K(){},
a3:function a3(){},
bx:function bx(){},
by:function by(){},
b:function b(){},
a:function a(){},
P:function P(){},
bE:function bE(){},
q:function q(){},
bO:function bO(){},
cp:function cp(a){this.$ti=a},
be:function be(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
c3:function c3(a){this.a=a},
bc:function bc(){}},K={bs:function bs(){},aG:function aG(){},E:function E(a){this.a=a},l:function l(a){this.a=a}},L={b1:function b1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},b5:function b5(a,b){this.b=a
this.c=b},bU:function bU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},bV:function bV(a,b){this.b=a
this.c=!1
this.a=b}},V={
e3:function(a,b){var t,s,r,q,p=document,o=p.body
if(o==null)throw H.d(P.bD("The html document body was null."))
t=p.createElement("div")
t.className="scrollTop"
o.appendChild(t).toString
s=p.createElement("div")
s.className="scrollPage"
o.appendChild(s).toString
r=p.createElement("div")
r.className="pageCenter"
s.appendChild(r).toString
if(a.length!==0)p.title=a
q=p.createElement("div")
q.toString
r.appendChild(q).toString
W.ec(p,"scroll",new V.bR(t),!1)
return new V.bP(q)},
bP:function bP(a){this.a=a
this.b=null},
bR:function bR(a){this.a=a},
bQ:function bQ(a){this.a=a}},F={
fi:function(){var t,s,r=V.e3("3Dart",!1),q=document,p=q.createElement("div")
p.className="pageImage"
p.id="3Dart"
t=W.cK()
t.href="#3Dart"
s=q.createElement("img")
s.src="resources/ThreeDart.png"
t.appendChild(s).toString
q=p.appendChild(t)
q.toString
r.a.appendChild(p).toString
r.u(["Currently 3Dart is still in beta."])
r.u(["Please visit the [3Dart GitHub repository|https://github.com/Grant-Nelson/ThreeDart] ","were you can download and play with 3Dart right now. Please feel free to help ","develop and contribute to the 3Dart code and community."])
r.T(2,"Examples")
r.u(["[3Dart Craft|./examples/craft/]"])
r.u(["[3Dart Chess|./examples/chess/]"])
r.u(["[Hypersphere|./examples/hypersphere/]"])
r.T(2,"Tutorials")
r.u(["[Getting Started|./tutorials/tutorial1/]"])
r.a_(6,"Tutorials still need to be written","")
r.u(["Material Lighting"])
r.u(["Advanced Movers"])
r.u(["Advanced Shapes"])
r.u(["Advanced Techniques"])
r.u(["Scene Compositing"])
r.T(2,"Tests")
r.u(["[Tests|./tests/]"])}}
var w=[C,H,J,P,W,K,L,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.cr.prototype={}
J.n.prototype={
G:function(a,b){return a===b},
gt:function(a){return H.ac(a)},
h:function(a){return"Instance of '"+H.bN(a)+"'"}}
J.aL.prototype={
h:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$icf:1}
J.a6.prototype={
G:function(a,b){return null==b},
h:function(a){return"null"},
gt:function(a){return 0}}
J.M.prototype={
gt:function(a){return 0},
h:function(a){return String(a)}}
J.aX.prototype={}
J.U.prototype={}
J.y.prototype={
h:function(a){var t=a[$.dr()]
if(t==null)return this.a5(a)
return"JavaScript function for "+J.br(t)}}
J.x.prototype={
aj:function(a,b){if(!!a.fixed$length)H.D(P.G("addAll"))
this.a7(a,b)
return},
a7:function(a,b){var t,s=b.length
if(s===0)return
if(a===b)throw H.d(P.a2(a))
for(t=0;t<s;++t)a.push(b[t])},
as:function(a){var t,s,r=a.length,q=P.dV(r,"")
for(t=0;t<a.length;++t){s=H.e(a[t])
if(t>=r)return H.f(q,t)
q[t]=s}return q.join("")},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.a_(a[t],b))return!0
return!1},
h:function(a){return P.cq(a,"[","]")},
gv:function(a){return new J.ax(a,a.length)},
gt:function(a){return H.ac(a)},
gl:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.d(H.Z(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.D(P.G("indexed set"))
if(b>=a.length||b<0)throw H.d(H.Z(a,b))
a[b]=c}}
J.bI.prototype={}
J.ax.prototype={
gq:function(){return H.u(this).c.a(this.d)},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.d(H.aw(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.a7.prototype={
B:function(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gV(b)
if(this.gV(a)===t)return 0
if(this.gV(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gV:function(a){return a===0?1/a<0:a<0},
at:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.G(""+a+".round()"))},
am:function(a,b,c){if(C.a.B(b,c)>0)throw H.d(H.bn(b))
if(this.B(a,b)<0)return b
if(this.B(a,c)>0)return c
return a},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
D:function(a,b){return(a|0)===a?a/b|0:this.ah(a,b)},
ah:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.d(P.G("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
R:function(a,b){var t
if(a>0)t=this.ag(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ag:function(a,b){return b>31?0:a>>>b}}
J.a5.prototype={$iB:1}
J.bG.prototype={}
J.L.prototype={
U:function(a,b){if(b<0)throw H.d(H.Z(a,b))
if(b>=a.length)H.D(H.Z(a,b))
return a.charCodeAt(b)},
X:function(a,b){if(b>=a.length)throw H.d(H.Z(a,b))
return a.charCodeAt(b)},
C:function(a,b){return a+b},
a2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.aY(b,null))
if(b>c)throw H.d(P.aY(b,null))
if(c>a.length)throw H.d(P.aY(c,null))
return a.substring(b,c)},
B:function(a,b){var t
if(a===b)t=0
else t=a<b?-1:1
return t},
h:function(a){return a},
gt:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gl:function(a){return a.length},
$iF:1}
H.aO.prototype={
h:function(a){var t="LateInitializationError: "+this.a
return t}}
H.k.prototype={
gl:function(a){return this.a.length},
i:function(a,b){return C.b.U(this.a,b)}}
H.aD.prototype={}
H.S.prototype={
gq:function(){return H.u(this).c.a(this.d)},
m:function(){var t,s=this,r=s.a,q=J.ch(r),p=q.gl(r)
if(s.b!==p)throw H.d(P.a2(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.ao(r,t);++s.c
return!0}}
H.aT.prototype={
gv:function(a){var t=this.a
return new H.a9(t.gv(t),this.b)},
gl:function(a){return this.a.a.a}}
H.aE.prototype={}
H.a9.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.a=t.c.$1(H.u(s).c.a(s.d))
return!0}t.a=null
return!1},
gq:function(){return H.u(this).Q[1].a(this.a)}}
H.aF.prototype={}
H.b9.prototype={
j:function(a,b,c){throw H.d(P.G("Cannot modify an unmodifiable list"))}}
H.ah.prototype={}
H.bW.prototype={
w:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.ab.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aN.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.b8.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bM.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.bj.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t}}
H.O.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dp(s==null?"unknown":s)+"'"},
gaz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.bT.prototype={}
H.bS.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dp(t)+"'"}}
H.a0.prototype={
G:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.a0))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gt:function(a){var t,s=this.c
if(s==null)t=H.ac(this.a)
else t=typeof s!=="object"?J.bp(s):H.ac(s)
return(t^H.ac(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bN(t)+"'")}}
H.aZ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.Q.prototype={
gl:function(a){return this.a},
gay:function(a){return H.dX(new H.R(this),new H.bJ(this))},
i:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.M(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.M(q,b)
r=s==null?o:s.b
return r}else return p.ar(b)},
ar:function(a){var t,s,r=this.d
if(r==null)return null
t=this.Y(r,J.bp(a)&0x3ffffff)
s=this.a0(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.W(t==null?n.b=n.N():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.W(s==null?n.c=n.N():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.N()
q=J.bp(b)&0x3ffffff
p=n.Y(r,q)
if(p==null)n.P(r,q,[n.O(b,c)])
else{o=n.a0(p,b)
if(o>=0)p[o].b=c
else p.push(n.O(b,c))}}},
aq:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.d(P.a2(t))
s=s.c}},
W:function(a,b,c){var t=this.M(a,b)
if(t==null)this.P(a,b,this.O(b,c))
else t.b=c},
O:function(a,b){var t=this,s=new H.bK(a,b)
if(t.e==null)t.e=t.f=s
else t.f=t.f.c=s;++t.a
t.r=t.r+1&67108863
return s},
a0:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a_(a[s].a,b))return s
return-1},
h:function(a){return P.cQ(this)},
M:function(a,b){return a[b]},
Y:function(a,b){return a[b]},
P:function(a,b,c){a[b]=c},
ac:function(a,b){delete a[b]},
N:function(){var t="<non-identifier-key>",s=Object.create(null)
this.P(s,t,s)
this.ac(s,t)
return s}}
H.bJ.prototype={
$1:function(a){var t=this.a
return H.u(t).Q[1].a(t.i(0,a))},
$S:function(){return H.u(this.a).H("2(1)")}}
H.bK.prototype={}
H.R.prototype={
gl:function(a){return this.a.a},
gv:function(a){var t=this.a,s=new H.aP(t,t.r)
s.c=t.e
return s}}
H.aP.prototype={
gq:function(){return H.u(this).c.a(this.d)},
m:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.d(P.a2(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
H.cj.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.ck.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.cl.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.bH.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.aU.prototype={}
H.T.prototype={
gl:function(a){return a.length},
$iaM:1}
H.aa.prototype={
j:function(a,b,c){H.d7(b,a,a.length)
a[b]=c}}
H.aV.prototype={
gl:function(a){return a.length},
i:function(a,b){H.d7(b,a,a.length)
return a[b]}}
H.aj.prototype={}
H.ak.prototype={}
H.t.prototype={
H:function(a){return H.bm(v.typeUniverse,this,a)},
a9:function(a){return H.et(v.typeUniverse,this,a)}}
H.bf.prototype={}
H.bd.prototype={
h:function(a){return this.a}}
H.al.prototype={}
P.c0.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:8}
P.c_.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:9}
P.c1.prototype={
$0:function(){this.a.$0()},
$S:2}
P.c2.prototype={
$0:function(){this.a.$0()},
$S:2}
P.c9.prototype={
a6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bo(new P.ca(this,b),0),a)
else throw H.d(P.G("`setTimeout()` not found."))}}
P.ca.prototype={
$0:function(){this.b.$0()},
$S:0}
P.V.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.W.prototype={
gq:function(){var t=this.c
if(t==null)return this.b
return t.gq()},
m:function(){var t,s,r,q,p,o=this
for(;!0;){t=o.c
if(t!=null)if(t.m())return!0
else o.c=null
s=function(a,b,c){var n,m=b
while(true)try{return a(m,n)}catch(l){n=l
m=c}}(o.a,0,1)
if(s instanceof P.V){r=s.b
if(r===2){q=o.d
if(q==null||q.length===0){o.b=null
return!1}if(0>=q.length)return H.f(q,-1)
o.a=q.pop()
continue}else{t=s.a
if(r===3)throw t
else{p=J.co(t)
if(p instanceof P.W){t=o.d
if(t==null)t=o.d=[]
t.push(o.a)
o.a=p.a
continue}else{o.c=p
continue}}}}else{o.b=s
return!0}}return!1}}
P.bk.prototype={
gv:function(a){return new P.W(this.a())}}
P.bb.prototype={}
P.b2.prototype={}
P.b3.prototype={}
P.cc.prototype={}
P.ce.prototype={
$0:function(){var t=H.d(this.a)
t.stack=this.b.h(0)
throw t},
$S:0}
P.c6.prototype={
au:function(a){var t,s,r,q=null
try{if(C.c===$.A){a.$0()
return}P.eQ(q,q,this,a)}catch(r){t=H.dq(r)
s=H.dg(r)
P.dc(q,q,this,t,s)}},
av:function(a,b){var t,s,r,q=null
try{if(C.c===$.A){a.$1(b)
return}P.eR(q,q,this,a,b)}catch(r){t=H.dq(r)
s=H.dg(r)
P.dc(q,q,this,t,s)}},
aw:function(a,b){return this.av(a,b,u.B)},
ak:function(a){return new P.c7(this,a)},
al:function(a,b){return new P.c8(this,a,b)}}
P.c7.prototype={
$0:function(){return this.a.au(this.b)},
$S:0}
P.c8.prototype={
$1:function(a){return this.a.aw(this.b,a)},
$S:function(){return this.c.H("~(0)")}}
P.bg.prototype={
gv:function(a){var t=new P.bh(this,this.r)
t.c=this.e
return t},
gl:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.ab(b)
return s}},
ab:function(a){var t=this.d
if(t==null)return!1
return this.ae(t[this.aa(a)],a)>=0},
aa:function(a){return J.bp(a)&1073741823},
ae:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.a_(a[s].a,b))return s
return-1}}
P.bh.prototype={
gq:function(){return H.u(this).c.a(this.d)},
m:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.d(P.a2(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
P.aJ.prototype={}
P.aQ.prototype={}
P.a8.prototype={
gv:function(a){return new H.S(a,this.gl(a))},
ao:function(a,b){return this.i(a,b)},
h:function(a){return P.cq(a,"[","]")}}
P.aR.prototype={}
P.bL.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.e(a)
s.a=t+": "
s.a+=H.e(b)},
$S:10}
P.aS.prototype={
gl:function(a){return this.a},
h:function(a){return P.cQ(this)}}
P.b_.prototype={
h:function(a){return P.cq(this,"{","}")}}
P.bi.prototype={}
P.ai.prototype={}
P.ao.prototype={}
P.az.prototype={}
P.aB.prototype={}
P.bB.prototype={}
P.bY.prototype={}
P.bZ.prototype={
an:function(a){var t,s,r,q=P.cu(0,null,a.length),p=q-0
if(p===0)return new Uint8Array(0)
t=p*3
s=new Uint8Array(t)
r=new P.cb(s)
if(r.ad(a,0,q)!==q){C.b.U(a,q-1)
r.S()}return new Uint8Array(s.subarray(0,H.ey(0,r.b,t)))}}
P.cb.prototype={
S:function(){var t=this,s=t.c,r=t.b,q=t.b=r+1,p=s.length
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
s[r]=t>>>18|240
r=o.b=q+1
if(q>=p)return H.f(s,q)
s[q]=t>>>12&63|128
q=o.b=r+1
if(r>=p)return H.f(s,r)
s[r]=t>>>6&63|128
o.b=q+1
if(q>=p)return H.f(s,q)
s[q]=t&63|128
return!0}else{o.S()
return!1}},
ad:function(a,b,c){var t,s,r,q,p,o,n,m=this
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(t=m.c,s=t.length,r=b;r<c;++r){q=C.b.X(a,r)
if(q<=127){p=m.b
if(p>=s)break
m.b=p+1
t[p]=q}else{p=q&64512
if(p===55296){if(m.b+4>s)break
o=r+1
if(m.ai(q,C.b.X(a,o)))r=o}else if(p===56320){if(m.b+3>s)break
m.S()}else if(q<=2047){p=m.b
n=p+1
if(n>=s)break
m.b=n
if(p>=s)return H.f(t,p)
t[p]=q>>>6|192
m.b=n+1
t[n]=q&63|128}else{p=m.b
if(p+2>=s)break
n=m.b=p+1
if(p>=s)return H.f(t,p)
t[p]=q>>>12|224
p=m.b=n+1
if(n>=s)return H.f(t,n)
t[n]=q>>>6&63|128
m.b=p+1
if(p>=s)return H.f(t,p)
t[p]=q&63|128}}}return r}}
P.a4.prototype={
G:function(a,b){if(b==null)return!1
return b instanceof P.a4&&this.a===b.a},
gt:function(a){return C.a.gt(this.a)},
B:function(a,b){return C.a.B(this.a,b.a)},
h:function(a){var t,s,r,q=new P.bA(),p=this.a
if(p<0)return"-"+new P.a4(0-p).h(0)
t=q.$1(C.a.D(p,6e7)%60)
s=q.$1(C.a.D(p,1e6)%60)
r=new P.bz().$1(p%1e6)
return""+C.a.D(p,36e8)+":"+t+":"+s+"."+r}}
P.bz.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:3}
P.bA.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:3}
P.h.prototype={}
P.ay.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bC(t)
return"Assertion failed"}}
P.b6.prototype={}
P.aW.prototype={
h:function(a){return"Throw of null."}}
P.v.prototype={
gL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gK:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gL()+p+n
if(!r.a)return m
t=r.gK()
s=P.bC(r.b)
return m+t+": "+s}}
P.ad.prototype={
gL:function(){return"RangeError"},
gK:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.e(r):""
else if(r==null)t=": Not greater than or equal to "+H.e(s)
else if(r>s)t=": Not in inclusive range "+H.e(s)+".."+H.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.e(s)
return t}}
P.aH.prototype={
gL:function(){return"RangeError"},
gK:function(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl:function(a){return this.f}}
P.ba.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.b7.prototype={
h:function(a){var t="UnimplementedError: "+this.a
return t}}
P.aA.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bC(t)+"."}}
P.af.prototype={
h:function(a){return"Stack Overflow"},
$ih:1}
P.aC.prototype={
h:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.c4.prototype={
h:function(a){return"Exception: "+this.a}}
P.bF.prototype={
h:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=C.b.a2(r,0,75)+"..."
return s+"\n"+r}}
P.aI.prototype={
gl:function(a){var t,s=this.gv(this)
for(t=0;s.m();)++t
return t},
h:function(a){return P.dQ(this,"(",")")}}
P.aK.prototype={}
P.r.prototype={
gt:function(a){return P.j.prototype.gt.call(C.v,this)},
h:function(a){return"null"}}
P.j.prototype={constructor:P.j,$ij:1,
G:function(a,b){return this===b},
gt:function(a){return H.ac(this)},
h:function(a){return"Instance of '"+H.bN(this)+"'"},
toString:function(){return this.h(this)}}
P.ag.prototype={
gl:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.bt.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.bu.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.K.prototype={
gl:function(a){return a.length}}
W.a3.prototype={
gl:function(a){var t=a.length
t.toString
return t}}
W.bx.prototype={}
W.by.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.b.prototype={
h:function(a){var t=a.localName
t.toString
return t}}
W.a.prototype={$ia:1}
W.P.prototype={
a8:function(a,b,c,d){return a.addEventListener(b,H.bo(c,1),!1)}}
W.bE.prototype={
gl:function(a){return a.length}}
W.q.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.a4(a):t}}
W.bO.prototype={
gl:function(a){return a.length}}
W.cp.prototype={}
W.be.prototype={}
W.c3.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.bc.prototype={}
K.bs.prototype={
F:function(a){return!0},
h:function(a){return"all"}}
K.aG.prototype={
F:function(a){var t,s,r
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.aw)(t),++r)if(t[r].F(a))return!0
return!1},
h:function(a){var t,s,r,q,p
for(t=this.a,s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.aw)(t),++q){p=t[q]
if(r.length!==0)r+=", "
r+=p.h(0)}return r}}
K.E.prototype={
F:function(a){return!this.a3(a)},
h:function(a){return"!["+this.J(0)+"]"}}
K.l.prototype={
p:function(a){var t,s,r,q
if(a.a.length<=0)throw H.d(P.bD("May not create a Set with zero characters."))
t=new H.Q(u.q)
for(s=new H.S(a,a.gl(a)),r=H.u(s).c;s.m();)t.j(0,r.a(s.d),!0)
q=P.dW(new H.R(t))
if(!!q.immutable$list)H.D(P.G("sort"))
H.e6(q,J.eG())
this.a=q},
F:function(a){return C.e.E(this.a,a)},
h:function(a){return P.cv(this.a)}}
L.b1.prototype={
n:function(a,b){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<s;++r){q=t[r]
if(q.b.b===b)return q}q=new L.bV(this.a.k(0,b),[])
t.push(q)
return q},
ap:function(a){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.aw)(t),++r){q=t[r]
if(q.F(a))return q}return null},
h:function(a){return this.b},
Z:function(){var t,s,r,q,p,o=this,n=""+("("+o.b+")"),m=o.d
if(m!=null){n+=" => ["+m.b+"]"
m=o.a.c
t=o.d
if(m.E(0,t==null?null:t.b))n+=" (consume)"
t=o.d
t=t==null?null:new H.R(t.c)
t=J.co(t==null?[]:t)
for(;t.m();){s=t.gq()
n+="\n"
r=o.d
if(r!=null)r.c.i(0,s)
n+="  -- "+s+" => []"
if(m.E(0,""))n+=" (consume)"}}for(m=o.c,t=m.length,q=0;q<m.length;m.length===t||(0,H.aw)(m),++q){p=m[q]
n+="\n"
n+="  -- "+(p.b.b+": "+p.J(0))}return n.charCodeAt(0)==0?n:n}}
L.b4.prototype={
h:function(a){var t=H.dm(this.b,"\n","\\n"),s=H.dm(t,"\t","\\t")
return this.a+":"+this.c+':"'+s+'"'}}
L.b5.prototype={
h:function(a){return this.b}}
L.bU.prototype={
k:function(a,b){var t=this.a,s=t.i(0,b)
if(s==null){s=new L.b1(this,b,[])
t.j(0,b,s)}return s},
I:function(a){var t,s=this.b,r=s.i(0,a)
if(r==null){t=u.N
r=new L.b5(a,P.ct(t,t))
s.j(0,a,r)}return r},
a1:function(a){return this.ax(a)},
ax:function(a){var t=this
return P.eO(function(){var s=a
var r=0,q=1,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$a1(a0,a1){if(a0===1){p=a1
r=q}while(true)switch(r){case 0:e=t.d
d=[]
c=[]
b=[]
o=H.u(s).c,n=t.c,m=null,l=0,k=0,j=0
case 2:if(!!0){r=3
break}i=b.length
if(i!==0){if(!!b.fixed$length)H.D(P.G("removeAt"))
if(0>=i)H.D(P.aY(0,null))
h=b.splice(0,1)[0]}else{if(!s.m()){r=3
break}h=o.a(s.d)}c.push(h);++l
i=e==null
g=i?null:e.ap(h)
r=g==null?4:6
break
case 4:if(m==null){f=P.cv(c)
throw H.d(P.bD("Untokenizable string [state: "+H.e(i?null:e.b)+", index "+l+']: "'+f+'"'))}if(!!c.fixed$length)H.D(P.G("removeRange"))
P.cu(0,j,c.length)
c.splice(0,j-0)
C.e.aj(b,c)
c=[]
d=[]
e=t.d
r=!n.E(0,m.a)?7:8
break
case 7:r=9
return m
case 9:case 8:l=k
m=null
j=0
r=5
break
case 6:if(!g.c)d.push(h)
e=g.b
i=e.d
if(i!=null){f=P.cv(d)
i=e.d
if(i==null)m=null
else{i.c.i(0,f)
i=i.b
i=new L.b4(i,f,l)
m=i}j=c.length
k=l}case 5:r=2
break
case 3:r=m!=null&&!n.E(0,m.a)?10:11
break
case 10:r=12
return m
case 12:case 11:return P.ed()
case 1:return P.ee(p)}}},u.I)},
h:function(a){var t,s,r=new P.ag(""),q=this.d
if(q!=null)r.a=""+(q.Z()+"\n")
for(q=this.a,q=q.gay(q),t=q.a,q=new H.a9(t.gv(t),q.b),t=H.u(q).Q[1];q.m();){s=t.a(q.a)
if(s!=this.d)r.a+=H.e(s==null?null:s.Z())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.bV.prototype={
h:function(a){return this.b.b+": "+this.J(0)}}
V.bP.prototype={
a_:function(a,b,c){var t,s,r,q
a=C.a.am(a,0,4)
if(c.length===0)c=P.d5(C.k,b,C.d,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=c
s=t.style
s.toString
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.cK()
q.href="#"+c
q.textContent=b
t.appendChild(q).toString
this.a.appendChild(t).toString},
T:function(a,b){return this.a_(a,b,"")},
u:function(a){var t,s,r,q,p,o,n=this.af(),m=document,l=m.createElement("div")
l.className="textPar"
for(t=new H.k(C.e.as(a)),t=new P.W(n.a1(new H.S(t,t.gl(t))).a());t.m();){s=t.gq()
switch(s.a){case"Bold":r=m.createElement("div")
r.className="boldPar"
r.textContent=s.b
l.appendChild(r).toString
break
case"Italic":r=m.createElement("div")
r.className="italicPar"
r.textContent=s.b
l.appendChild(r).toString
break
case"Code":r=m.createElement("div")
r.className="codePar"
r.textContent=s.b
l.appendChild(r).toString
break
case"Link":s=s.b
if(H.fl(s,"|",0)){q=s.split("|")
p=m.createElement("a")
p.className="linkPar"
if(1>=q.length)return H.f(q,1)
p.href=q[1]
p.textContent=q[0]
l.appendChild(p).toString}else{o=P.d5(C.k,s,C.d,!1)
p=m.createElement("a")
p.className="linkPar"
p.href="#"+o
p.textContent=s
l.appendChild(p).toString}break
case"Other":r=m.createElement("div")
r.className="normalPar"
r.textContent=s.b
l.appendChild(r).toString
break}}this.a.appendChild(l).toString},
af:function(){var t,s,r="Start",q="Bold",p="Italic",o="ItalicEnd",n="Code",m="LinkHead",l="LinkTail",k="LinkEnd",j="Other",i=this.b
if(i!=null)return i
t=u.N
i=new L.bU(P.ct(t,u.h),P.ct(t,u.D),P.dT(t))
i.d=i.k(0,r)
t=i.k(0,r).n(0,q)
s=new K.l([])
s.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=[]
i.k(0,q).n(0,q).a.push(new K.E(t))
s=new K.l([])
s.p(new H.k("*"))
t.push(s)
s=i.k(0,q).n(0,"BoldEnd")
t=new K.l([])
t.p(new H.k("*"))
s.a.push(t)
s.c=!0
s=i.k(0,r).n(0,p)
t=new K.l([])
t.p(new H.k("_"))
s.a.push(t)
s.c=!0
s=[]
i.k(0,p).n(0,p).a.push(new K.E(s))
t=new K.l([])
t.p(new H.k("_"))
s.push(t)
t=i.k(0,p).n(0,o)
s=new K.l([])
s.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=i.k(0,r).n(0,n)
s=new K.l([])
s.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=[]
i.k(0,n).n(0,n).a.push(new K.E(t))
s=new K.l([])
s.p(new H.k("`"))
t.push(s)
s=i.k(0,n).n(0,"CodeEnd")
t=new K.l([])
t.p(new H.k("`"))
s.a.push(t)
s.c=!0
s=i.k(0,r).n(0,m)
t=new K.l([])
t.p(new H.k("["))
s.a.push(t)
s.c=!0
s=i.k(0,m).n(0,l)
t=new K.l([])
t.p(new H.k("|"))
s.a.push(t)
t=i.k(0,m).n(0,k)
s=new K.l([])
s.p(new H.k("]"))
t.a.push(s)
t.c=!0
t=[]
i.k(0,m).n(0,m).a.push(new K.E(t))
s=new K.l([])
s.p(new H.k("|]"))
t.push(s)
s=i.k(0,l).n(0,k)
t=new K.l([])
t.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=[]
i.k(0,l).n(0,l).a.push(new K.E(s))
t=new K.l([])
t.p(new H.k("|]"))
s.push(t)
i.k(0,r).n(0,j).a.push(new K.bs())
t=[]
i.k(0,j).n(0,j).a.push(new K.E(t))
s=new K.l([])
s.p(new H.k("*_`["))
t.push(s)
s=i.k(0,"BoldEnd")
s.d=s.a.I(q)
s=i.k(0,o)
s.d=s.a.I(p)
s=i.k(0,"CodeEnd")
s.d=s.a.I(n)
s=i.k(0,k)
s.d=s.a.I("Link")
s=i.k(0,j)
s.d=s.a.I(j)
return this.b=i}}
V.bR.prototype={
$1:function(a){P.e7(C.j,new V.bQ(this.a))},
$S:4}
V.bQ.prototype={
$0:function(){var t,s,r=document.documentElement
if(r==null)t=null
else{r=r.scrollTop
r.toString
r=C.w.at(r)
t=r}if(t==null)t=0
r=this.a.style
r.toString
s=H.e(-0.01*t)+"px"
r.top=s},
$S:0};(function aliases(){var t=J.n.prototype
t.a4=t.h
t=J.M.prototype
t.a5=t.h
t=K.aG.prototype
t.a3=t.F
t.J=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1,r=hunkHelpers._static_0
t(J,"eG","dR",11)
s(P,"f0","e9",1)
s(P,"f1","ea",1)
s(P,"f2","eb",1)
r(P,"de","eV",0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.j,null)
r(P.j,[H.cr,J.n,J.ax,P.h,P.ai,P.aI,H.S,P.aK,H.aF,H.b9,H.bW,H.bM,H.bj,H.O,P.aS,H.bK,H.aP,H.bH,H.t,H.bf,P.c9,P.V,P.W,P.bb,P.b2,P.b3,P.cc,P.ao,P.bh,P.a8,P.b_,P.az,P.cb,P.a4,P.af,P.c4,P.bF,P.r,P.ag,W.bx,W.cp,K.bs,K.aG,K.l,L.b1,L.b4,L.b5,L.bU,V.bP])
r(J.n,[J.aL,J.a6,J.M,J.x,J.a7,J.L,H.aU,W.P,W.bc,W.by,W.a])
r(J.M,[J.aX,J.U,J.y])
s(J.bI,J.x)
r(J.a7,[J.a5,J.bG])
r(P.h,[H.aO,P.b6,H.aN,H.b8,H.aZ,H.bd,P.ay,P.aW,P.v,P.ba,P.b7,P.aA,P.aC])
s(P.aQ,P.ai)
s(H.ah,P.aQ)
s(H.k,H.ah)
r(P.aI,[H.aD,H.aT,P.aJ])
s(H.aE,H.aT)
s(H.a9,P.aK)
s(H.ab,P.b6)
r(H.O,[H.bT,H.bJ,H.cj,H.ck,H.cl,P.c0,P.c_,P.c1,P.c2,P.ca,P.ce,P.c7,P.c8,P.bL,P.bz,P.bA,W.c3,V.bR,V.bQ])
r(H.bT,[H.bS,H.a0])
s(P.aR,P.aS)
s(H.Q,P.aR)
s(H.R,H.aD)
s(H.T,H.aU)
s(H.aj,H.T)
s(H.ak,H.aj)
s(H.aa,H.ak)
s(H.aV,H.aa)
s(H.al,H.bd)
s(P.bk,P.aJ)
s(P.c6,P.cc)
s(P.bi,P.ao)
s(P.bg,P.bi)
s(P.aB,P.b3)
s(P.bB,P.az)
s(P.bY,P.bB)
s(P.bZ,P.aB)
r(P.v,[P.ad,P.aH])
s(W.q,W.P)
r(W.q,[W.b,W.K])
s(W.c,W.b)
r(W.c,[W.bt,W.bu,W.bE,W.bO])
s(W.a3,W.bc)
s(W.be,P.b2)
r(K.aG,[K.E,L.bV])
t(H.ah,H.b9)
t(H.aj,P.a8)
t(H.ak,H.aF)
t(P.ai,P.a8)
t(P.ao,P.b_)
t(W.bc,W.bx)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{B:"int",f5:"double",fk:"num",F:"String",cf:"bool",r:"Null",dU:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","~(~())","r()","F(B)","~(a)","@(@)","@(@,F)","@(F)","r(@)","r(~())","~(j?,j?)","B(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.es(v.typeUniverse,JSON.parse('{"aX":"M","U":"M","y":"M","fq":"a","fs":"a","aL":{"cf":[]},"a5":{"B":[]},"L":{"F":[]},"aO":{"h":[]},"ab":{"h":[]},"aN":{"h":[]},"b8":{"h":[]},"aZ":{"h":[]},"T":{"aM":["1"]},"aa":{"aM":["B"]},"aV":{"aM":["B"]},"bd":{"h":[]},"al":{"h":[]},"ay":{"h":[]},"b6":{"h":[]},"aW":{"h":[]},"v":{"h":[]},"ad":{"h":[]},"aH":{"h":[]},"ba":{"h":[]},"b7":{"h":[]},"aA":{"h":[]},"af":{"h":[]},"aC":{"h":[]}}'))
H.er(v.typeUniverse,JSON.parse('{"x":1,"bI":1,"ax":1,"aD":1,"S":1,"aT":2,"aE":2,"a9":2,"aF":1,"b9":1,"ah":1,"R":1,"aP":1,"T":1,"W":1,"bk":1,"b2":1,"b3":2,"bh":1,"aJ":1,"aQ":1,"a8":1,"aR":2,"aS":2,"b_":1,"bi":1,"ai":1,"ao":1,"az":2,"aB":2,"dU":1,"aI":1,"aK":1,"be":1}'))
0
var u=(function rtii(){var t=H.f7
return{C:t("h"),z:t("a"),Z:t("ft"),b:t("x<@>"),T:t("a6"),g:t("y"),p:t("aM<@>"),q:t("Q<B,cf>"),P:t("r"),K:t("j"),N:t("F"),I:t("b4"),o:t("U"),y:t("cf"),i:t("f5"),B:t("@"),S:t("B"),A:t("0&*"),_:t("j*"),O:t("cO<r>?"),X:t("j?"),h:t("b1?"),D:t("b5?"),H:t("fk")}})();(function constants(){var t=hunkHelpers.makeConstList
C.u=J.n.prototype
C.e=J.x.prototype
C.a=J.a5.prototype
C.v=J.a6.prototype
C.w=J.a7.prototype
C.b=J.L.prototype
C.x=J.y.prototype
C.l=J.aX.prototype
C.f=J.U.prototype
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

C.d=new P.bY()
C.t=new P.bZ()
C.c=new P.c6()
C.j=new P.a4(0)
C.k=t([0,0,65498,45055,65535,34815,65534,18431])
C.y=new P.V(null,2)})();(function staticFields(){$.c5=null
$.w=0
$.a1=null
$.cL=null
$.df=null
$.dd=null
$.dk=null
$.cg=null
$.cm=null
$.cH=null
$.X=null
$.aq=null
$.ar=null
$.cD=!1
$.A=C.c
$.o=[]})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fr","dr",function(){return H.fb("_$dart_dartClosure")})
t($,"fu","ds",function(){return H.z(H.bX({
toString:function(){return"$receiver$"}}))})
t($,"fv","dt",function(){return H.z(H.bX({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fw","du",function(){return H.z(H.bX(null))})
t($,"fx","dv",function(){return H.z(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fA","dy",function(){return H.z(H.bX(void 0))})
t($,"fB","dz",function(){return H.z(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"fz","dx",function(){return H.z(H.cW(null))})
t($,"fy","dw",function(){return H.z(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"fD","dB",function(){return H.z(H.cW(void 0))})
t($,"fC","dA",function(){return H.z(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"fE","cJ",function(){return P.e8()})
t($,"fG","dC",function(){return P.e1("^[\\-\\.0-9A-Z_a-z~]*$")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.n,MediaError:J.n,Navigator:J.n,NavigatorConcurrentHardware:J.n,NavigatorUserMediaError:J.n,OverconstrainedError:J.n,PositionError:J.n,SQLError:J.n,ArrayBufferView:H.aU,Uint8Array:H.aV,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLCanvasElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.bt,HTMLAreaElement:W.bu,CDATASection:W.K,CharacterData:W.K,Comment:W.K,ProcessingInstruction:W.K,Text:W.K,CSSStyleDeclaration:W.a3,MSStyleCSSProperties:W.a3,CSS2Properties:W.a3,DOMException:W.by,SVGAElement:W.b,SVGAnimateElement:W.b,SVGAnimateMotionElement:W.b,SVGAnimateTransformElement:W.b,SVGAnimationElement:W.b,SVGCircleElement:W.b,SVGClipPathElement:W.b,SVGDefsElement:W.b,SVGDescElement:W.b,SVGDiscardElement:W.b,SVGEllipseElement:W.b,SVGFEBlendElement:W.b,SVGFEColorMatrixElement:W.b,SVGFEComponentTransferElement:W.b,SVGFECompositeElement:W.b,SVGFEConvolveMatrixElement:W.b,SVGFEDiffuseLightingElement:W.b,SVGFEDisplacementMapElement:W.b,SVGFEDistantLightElement:W.b,SVGFEFloodElement:W.b,SVGFEFuncAElement:W.b,SVGFEFuncBElement:W.b,SVGFEFuncGElement:W.b,SVGFEFuncRElement:W.b,SVGFEGaussianBlurElement:W.b,SVGFEImageElement:W.b,SVGFEMergeElement:W.b,SVGFEMergeNodeElement:W.b,SVGFEMorphologyElement:W.b,SVGFEOffsetElement:W.b,SVGFEPointLightElement:W.b,SVGFESpecularLightingElement:W.b,SVGFESpotLightElement:W.b,SVGFETileElement:W.b,SVGFETurbulenceElement:W.b,SVGFilterElement:W.b,SVGForeignObjectElement:W.b,SVGGElement:W.b,SVGGeometryElement:W.b,SVGGraphicsElement:W.b,SVGImageElement:W.b,SVGLineElement:W.b,SVGLinearGradientElement:W.b,SVGMarkerElement:W.b,SVGMaskElement:W.b,SVGMetadataElement:W.b,SVGPathElement:W.b,SVGPatternElement:W.b,SVGPolygonElement:W.b,SVGPolylineElement:W.b,SVGRadialGradientElement:W.b,SVGRectElement:W.b,SVGScriptElement:W.b,SVGSetElement:W.b,SVGStopElement:W.b,SVGStyleElement:W.b,SVGElement:W.b,SVGSVGElement:W.b,SVGSwitchElement:W.b,SVGSymbolElement:W.b,SVGTSpanElement:W.b,SVGTextContentElement:W.b,SVGTextElement:W.b,SVGTextPathElement:W.b,SVGTextPositioningElement:W.b,SVGTitleElement:W.b,SVGUseElement:W.b,SVGViewElement:W.b,SVGGradientElement:W.b,SVGComponentTransferFunctionElement:W.b,SVGFEDropShadowElement:W.b,SVGMPathElement:W.b,Element:W.b,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CompositionEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FocusEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,KeyboardEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MouseEvent:W.a,DragEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PointerEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TextEvent:W.a,TouchEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,UIEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,WheelEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Window:W.P,DOMWindow:W.P,EventTarget:W.P,HTMLFormElement:W.bE,Document:W.q,DocumentFragment:W.q,HTMLDocument:W.q,ShadowRoot:W.q,XMLDocument:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,HTMLSelectElement:W.bO})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SQLError:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true})
H.T.$nativeSuperclassTag="ArrayBufferView"
H.aj.$nativeSuperclassTag="ArrayBufferView"
H.ak.$nativeSuperclassTag="ArrayBufferView"
H.aa.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=F.fi
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.dart.js.map
