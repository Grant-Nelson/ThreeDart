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
a[c]=function(){a[c]=function(){H.qa(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lK"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.lK(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={lo:function lo(){},
ob:function(a,b){if(u.O.b(a))return new H.cL(a,b)
return new H.c6(a,b)},
ll:function(){return new P.cl("No element")},
o3:function(){return new P.cl("Too many elements")},
oz:function(a,b){var t=J.bX(a)
if(typeof t!=="number")return t.Z()
H.eB(a,0,t-1,b)},
eB:function(a,b,c,d){if(c-b<=32)H.oy(a,b,c,d)
else H.ox(a,b,c,d)},
oy:function(a,b,c,d){var t,s,r,q,p,o
for(t=b+1,s=J.bT(a);t<=c;++t){r=s.k(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.k(a,q-1),r)
if(typeof p!=="number")return p.V()
p=p>0}else p=!1
if(!p)break
o=q-1
s.p(a,q,s.k(a,o))
q=o}s.p(a,q,r)}},
ox:function(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i=C.c.W(a6-a5+1,6),h=a5+i,g=a6-i,f=C.c.W(a5+a6,2),e=f-i,d=f+i,c=J.bT(a4),b=c.k(a4,h),a=c.k(a4,e),a0=c.k(a4,f),a1=c.k(a4,d),a2=c.k(a4,g),a3=a7.$2(b,a)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a
a=b
b=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a2
a2=a1
a1=t}a3=a7.$2(b,a0)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a0
a0=b
b=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(b,a1)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a1
a1=b
b=t}a3=a7.$2(a0,a1)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a1
a1=a0
a0=t}a3=a7.$2(a,a2)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a2
a2=a
a=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.V()
if(a3>0){t=a2
a2=a1
a1=t}c.p(a4,h,b)
c.p(a4,f,a0)
c.p(a4,g,a2)
c.p(a4,e,c.k(a4,a5))
c.p(a4,d,c.k(a4,a6))
s=a5+1
r=a6-1
if(J.t(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.k(a4,q)
o=a7.$2(p,a)
if(o===0)continue
if(typeof o!=="number")return o.a9()
if(o<0){if(q!==s){c.p(a4,q,c.k(a4,s))
c.p(a4,s,p)}++s}else for(;!0;){o=a7.$2(c.k(a4,r),a)
if(typeof o!=="number")return o.V()
if(o>0){--r
continue}else{n=r-1
if(o<0){c.p(a4,q,c.k(a4,s))
m=s+1
c.p(a4,s,c.k(a4,r))
c.p(a4,r,p)
r=n
s=m
break}else{c.p(a4,q,c.k(a4,r))
c.p(a4,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=c.k(a4,q)
k=a7.$2(p,a)
if(typeof k!=="number")return k.a9()
if(k<0){if(q!==s){c.p(a4,q,c.k(a4,s))
c.p(a4,s,p)}++s}else{j=a7.$2(p,a1)
if(typeof j!=="number")return j.V()
if(j>0)for(;!0;){o=a7.$2(c.k(a4,r),a1)
if(typeof o!=="number")return o.V()
if(o>0){--r
if(r<q)break
continue}else{o=a7.$2(c.k(a4,r),a)
if(typeof o!=="number")return o.a9()
n=r-1
if(o<0){c.p(a4,q,c.k(a4,s))
m=s+1
c.p(a4,s,c.k(a4,r))
c.p(a4,r,p)
s=m}else{c.p(a4,q,c.k(a4,r))
c.p(a4,r,p)}r=n
break}}}}l=!1}a3=s-1
c.p(a4,a5,c.k(a4,a3))
c.p(a4,a3,a)
a3=r+1
c.p(a4,a6,c.k(a4,a3))
c.p(a4,a3,a1)
H.eB(a4,a5,s-2,a7)
H.eB(a4,r+2,a6,a7)
if(l)return
if(s<h&&r>g){for(;J.t(a7.$2(c.k(a4,s),a),0);)++s
for(;J.t(a7.$2(c.k(a4,r),a1),0);)--r
for(q=s;q<=r;++q){p=c.k(a4,q)
if(a7.$2(p,a)===0){if(q!==s){c.p(a4,q,c.k(a4,s))
c.p(a4,s,p)}++s}else if(a7.$2(p,a1)===0)for(;!0;)if(a7.$2(c.k(a4,r),a1)===0){--r
if(r<q)break
continue}else{o=a7.$2(c.k(a4,r),a)
if(typeof o!=="number")return o.a9()
n=r-1
if(o<0){c.p(a4,q,c.k(a4,s))
m=s+1
c.p(a4,s,c.k(a4,r))
c.p(a4,r,p)
s=m}else{c.p(a4,q,c.k(a4,r))
c.p(a4,r,p)}r=n
break}}H.eB(a4,s,r,a7)}else H.eB(a4,s,r,a7)},
X:function X(a){this.a=a},
j:function j(){},
cY:function cY(){},
bH:function bH(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(a,b){this.a=a
this.b=b},
cL:function cL(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=null
this.b=a
this.c=b},
d0:function d0(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
cO:function cO(){},
eX:function eX(){},
co:function co(){},
nh:function(a){var t,s=H.ng(a)
if(s!=null)return s
t="minified:"+a
return t},
q1:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a7(a)
if(typeof t!="string")throw H.c(H.bR(a))
return t},
d9:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
on:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.e(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
i8:function(a){return H.of(a)},
of:function(a){var t,s,r
if(a instanceof P.F)return H.aw(H.dJ(a),null)
if(J.b8(a)===C.N||u.o.b(a)){t=C.p(a)
if(H.mr(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.mr(r))return r}}return H.aw(H.dJ(a),null)},
mr:function(a){var t=a!=="Object"&&a!==""
return t},
mq:function(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
oq:function(a){var t,s,r,q=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){r=a[s]
if(!H.cv(r))throw H.c(H.bR(r))
if(r<=65535)q.push(r)
else if(r<=1114111){q.push(55296+(C.c.aW(r-65536,10)&1023))
q.push(56320+(r&1023))}else throw H.c(H.bR(r))}return H.mq(q)},
op:function(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!H.cv(r))throw H.c(H.bR(r))
if(r<0)throw H.c(H.bR(r))
if(r>65535)return H.oq(a)}return H.mq(a)},
oo:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.c.aW(t,10))>>>0,56320|t&1023)}throw H.c(P.b_(a,0,1114111,null,null))},
ci:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
om:function(a){var t=H.ci(a).getFullYear()+0
return t},
ok:function(a){var t=H.ci(a).getMonth()+1
return t},
og:function(a){var t=H.ci(a).getDate()+0
return t},
oh:function(a){var t=H.ci(a).getHours()+0
return t},
oj:function(a){var t=H.ci(a).getMinutes()+0
return t},
ol:function(a){var t=H.ci(a).getSeconds()+0
return t},
oi:function(a){var t=H.ci(a).getMilliseconds()+0
return t},
o:function(a){throw H.c(H.bR(a))},
e:function(a,b){if(a==null)J.bX(a)
throw H.c(H.bS(a,b))},
bS:function(a,b){var t,s,r="index"
if(!H.cv(b))return new P.ar(!0,b,r,null)
t=J.bX(a)
if(!(b<0)){if(typeof t!=="number")return H.o(t)
s=b>=t}else s=!0
if(s)return P.R(b,a,r,null,t)
return P.ex(b,r)},
pO:function(a,b,c){if(a>c)return P.b_(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.b_(b,a,c,"end",null)
return new P.ar(!0,b,"end",null)},
bR:function(a){return new P.ar(!0,a,null,null)},
c:function(a){var t,s
if(a==null)a=new P.eq()
t=new Error()
t.dartException=a
s=H.qb
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
qb:function(){return J.a7(this.dartException)},
Z:function(a){throw H.c(a)},
G:function(a){throw H.c(P.c0(a))},
b4:function(a){var t,s,r,q,p,o
a=H.nd(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.iN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
iO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
mA:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ml:function(a,b){return new H.ep(a,b==null?null:b.method)},
lp:function(a,b){var t=b==null,s=t?null:b.method
return new H.ec(a,s,t?null:b.receiver)},
am:function(a){if(a==null)return new H.i5(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bU(a,a.dartException)
return H.px(a)},
bU:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
px:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.aW(s,16)&8191)===10)switch(r){case 438:return H.bU(a,H.lp(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return H.bU(a,H.ml(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.no()
p=$.np()
o=$.nq()
n=$.nr()
m=$.nu()
l=$.nv()
k=$.nt()
$.ns()
j=$.nx()
i=$.nw()
h=q.a6(t)
if(h!=null)return H.bU(a,H.lp(t,h))
else{h=p.a6(t)
if(h!=null){h.method="call"
return H.bU(a,H.lp(t,h))}else{h=o.a6(t)
if(h==null){h=n.a6(t)
if(h==null){h=m.a6(t)
if(h==null){h=l.a6(t)
if(h==null){h=k.a6(t)
if(h==null){h=n.a6(t)
if(h==null){h=j.a6(t)
if(h==null){h=i.a6(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.bU(a,H.ml(t,h))}}return H.bU(a,new H.eW(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.dc()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.bU(a,new P.ar(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.dc()
return a},
bw:function(a){var t
if(a==null)return new H.du(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.du(a)},
pQ:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
q0:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.a_("Unsupported number of arguments for wrapped closure"))},
dI:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q0)
a.$identity=t
return t},
nV:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.it().constructor.prototype):Object.create(new H.cE(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.aV
if(typeof s!=="number")return s.G()
$.aV=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.m_(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.nR(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.m_(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
nR:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n7,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
t=c?H.nO:H.nN
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.c("Error in functionType of tearoff")},
nS:function(a,b,c,d){var t=H.lZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
m_:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nU(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nS(s,!q,t,b)
if(s===0){q=$.aV
if(typeof q!=="number")return q.G()
$.aV=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.d(H.lg())+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.aV
if(typeof q!=="number")return q.G()
$.aV=q+1
n+=q
return new Function("return function("+n+"){return this."+H.d(H.lg())+"."+H.d(t)+"("+n+");}")()},
nT:function(a,b,c,d){var t=H.lZ,s=H.nP
switch(b?-1:a){case 0:throw H.c(new H.ez("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
nU:function(a,b){var t,s,r,q,p,o,n=H.lg(),m=$.lX
if(m==null)m=$.lX=H.lW("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nT(s,!q,t,b)
if(s===1){q="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+m+");"
p=$.aV
if(typeof p!=="number")return p.G()
$.aV=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+m+", "+o+");"
p=$.aV
if(typeof p!=="number")return p.G()
$.aV=p+1
return new Function(q+p+"}")()},
lK:function(a,b,c,d,e,f,g){return H.nV(a,b,c,d,!!e,!!f,g)},
nN:function(a,b){return H.fR(v.typeUniverse,H.dJ(a.a),b)},
nO:function(a,b){return H.fR(v.typeUniverse,H.dJ(a.c),b)},
lZ:function(a){return a.a},
nP:function(a){return a.c},
lg:function(){var t=$.lY
return t==null?$.lY=H.lW("self"):t},
lW:function(a){var t,s,r,q=new H.cE("self","target","receiver","name"),p=J.lm(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.c(P.lU("Field name "+a+" not found."))},
qa:function(a){throw H.c(new P.e_(a))},
pU:function(a){return v.getIsolateTag(a)},
rF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q3:function(a){var t,s,r,q,p,o=$.n6.$1(a),n=$.l1[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.l6[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.n2.$2(a,o)
if(r!=null){n=$.l1[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.l6[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.l8(t)
$.l1[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.l6[o]=t
return t}if(q==="-"){p=H.l8(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.na(a,t)
if(q==="*")throw H.c(P.mB(o))
if(v.leafTags[o]===true){p=H.l8(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.na(a,t)},
na:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.lN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
l8:function(a){return J.lN(a,!1,null,!!a.$iy)},
q4:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.l8(t)
else return J.lN(t,c,null,null)},
pY:function(){if(!0===$.lL)return
$.lL=!0
H.pZ()},
pZ:function(){var t,s,r,q,p,o,n,m
$.l1=Object.create(null)
$.l6=Object.create(null)
H.pX()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.nc.$1(p)
if(o!=null){n=H.q4(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
pX:function(){var t,s,r,q,p,o,n=C.B()
n=H.cx(C.C,H.cx(C.D,H.cx(C.q,H.cx(C.q,H.cx(C.E,H.cx(C.F,H.cx(C.G(C.p),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.n6=new H.l3(q)
$.n2=new H.l4(p)
$.nc=new H.l5(o)},
cx:function(a,b){return a(b)||b},
o8:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.c(P.m6("Illegal RegExp pattern ("+String(o)+")",a))},
ne:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pP:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nd:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dK:function(a,b,c){var t=H.q7(a,b,c)
return t},
q7:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nd(b),'g'),H.pP(c))},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ep:function ep(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
i5:function i5(a){this.a=a},
du:function du(a){this.a=a
this.b=null},
c_:function c_(){},
iz:function iz(){},
it:function it(){},
cE:function cE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a){this.a=a},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hN:function hN(a){this.a=a},
hR:function hR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bg:function bg(a){this.a=a},
ef:function ef(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
hM:function hM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ix:function ix(a,b){this.a=a
this.c=b},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bS(b,a))},
p7:function(a,b,c){var t
if(!(a>>>0!==a))t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw H.c(H.pO(a,b,c))
return b},
d4:function d4(){},
cg:function cg(){},
bI:function bI(){},
d3:function d3(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
d5:function d5(){},
eo:function eo(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
ov:function(a,b){var t=b.c
return t==null?b.c=H.lD(a,b.z,!0):t},
mv:function(a,b){var t=b.c
return t==null?b.c=H.dz(a,"cQ",[b.z]):t},
mw:function(a){var t=a.y
if(t===6||t===7||t===8)return H.mw(a.z)
return t===11||t===12},
ou:function(a){return a.cy},
pR:function(a){return H.lE(v.typeUniverse,a,!1)},
bt:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bt(a,t,c,a0)
if(s===t)return b
return H.mR(a,s,!0)
case 7:t=b.z
s=H.bt(a,t,c,a0)
if(s===t)return b
return H.lD(a,s,!0)
case 8:t=b.z
s=H.bt(a,t,c,a0)
if(s===t)return b
return H.mQ(a,s,!0)
case 9:r=b.Q
q=H.dH(a,r,c,a0)
if(q===r)return b
return H.dz(a,b.z,q)
case 10:p=b.z
o=H.bt(a,p,c,a0)
n=b.Q
m=H.dH(a,n,c,a0)
if(o===p&&m===n)return b
return H.lB(a,o,m)
case 11:l=b.z
k=H.bt(a,l,c,a0)
j=b.Q
i=H.pu(a,j,c,a0)
if(k===l&&i===j)return b
return H.mP(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.dH(a,h,c,a0)
p=b.z
o=H.bt(a,p,c,a0)
if(g===h&&o===p)return b
return H.lC(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.c(P.hb("Attempted to substitute unexpected RTI kind "+d))}},
dH:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bt(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
pv:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.bt(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
pu:function(a,b,c,d){var t,s=b.a,r=H.dH(a,s,c,d),q=b.b,p=H.dH(a,q,c,d),o=b.c,n=H.pv(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fe()
t.a=r
t.b=p
t.c=n
return t},
rH:function(a,b){a[v.arrayRti]=b
return a},
pM:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.n7(t)
return a.$S()}return null},
n8:function(a,b){var t
if(H.mw(b))if(a instanceof H.c_){t=H.pM(a)
if(t!=null)return t}return H.dJ(a)},
dJ:function(a){var t
if(a instanceof P.F){t=a.$ti
return t!=null?t:H.lG(a)}if(Array.isArray(a))return H.p4(a)
return H.lG(J.b8(a))},
p4:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
pd:function(a){var t=a.$ti
return t!=null?t:H.lG(a)},
lG:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.pe(a,t)},
pe:function(a,b){var t=a instanceof H.c_?a.__proto__.__proto__.constructor:b,s=H.p2(v.typeUniverse,t.name)
b.$ccache=s
return s},
n7:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.lE(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
pc:function(a){var t,s,r=this,q=u.K
if(r===q)return H.dE(r,a,H.pi)
if(!H.b9(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.dE(r,a,H.pl)
q=r.y
t=q===6?r.z:r
if(t===u.r)s=H.cv
else if(t===u.W||t===u.H)s=H.ph
else if(t===u.N)s=H.pj
else s=t===u.v?H.mW:null
if(s!=null)return H.dE(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.q2)){r.r="$i"+q
return H.dE(r,a,H.pk)}}else if(q===7)return H.dE(r,a,H.pa)
return H.dE(r,a,H.p8)},
dE:function(a,b,c){a.b=c
return a.b(b)},
pb:function(a){var t,s,r=this
if(!H.b9(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.p6
else if(r===u.K)s=H.p5
else s=H.p9
r.a=s
return r.a(a)},
pp:function(a){var t,s=a.y
if(!H.b9(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
p8:function(a){var t=this
if(a==null)return H.pp(t)
return H.a0(v.typeUniverse,H.n8(a,t),null,t,null)},
pa:function(a){if(a==null)return!0
return this.z.b(a)},
pk:function(a){var t=this,s=t.r
if(a instanceof P.F)return!!a[s]
return!!J.b8(a)[s]},
rE:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.mU(a,t)},
p9:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.mU(a,t)},
mU:function(a,b){throw H.c(H.oT(H.mG(a,H.n8(a,b),H.aw(b,null))))},
mG:function(a,b,c){var t=P.hz(a),s=H.aw(b==null?H.dJ(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
oT:function(a){return new H.dy("TypeError: "+a)},
ag:function(a,b){return new H.dy("TypeError: "+H.mG(a,null,b))},
pi:function(a){return a!=null},
p5:function(a){return a},
pl:function(a){return!0},
p6:function(a){return a},
mW:function(a){return!0===a||!1===a},
rq:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ag(a,"bool"))},
rs:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ag(a,"bool"))},
rr:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ag(a,"bool?"))},
rt:function(a){if(typeof a=="number")return a
throw H.c(H.ag(a,"double"))},
rv:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ag(a,"double"))},
ru:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ag(a,"double?"))},
cv:function(a){return typeof a=="number"&&Math.floor(a)===a},
rw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ag(a,"int"))},
ry:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ag(a,"int"))},
rx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ag(a,"int?"))},
ph:function(a){return typeof a=="number"},
rz:function(a){if(typeof a=="number")return a
throw H.c(H.ag(a,"num"))},
rB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ag(a,"num"))},
rA:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ag(a,"num?"))},
pj:function(a){return typeof a=="string"},
rC:function(a){if(typeof a=="string")return a
throw H.c(H.ag(a,"String"))},
lF:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ag(a,"String"))},
rD:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ag(a,"String?"))},
pr:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.b.G(s,H.aw(a[r],b))
return t},
mV:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=[]
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)a5.push("T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.e(a5,j)
m=C.b.G(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.b.G(" extends ",H.aw(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.aw(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.b.G(a2,H.aw(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.b.G(a2,H.aw(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.lc(H.aw(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.d(a0)},
aw:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.aw(a.z,b)
return t}if(m===7){s=a.z
t=H.aw(s,b)
r=s.y
return J.lc(r===11||r===12?C.b.G("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.aw(a.z,b))+">"
if(m===9){q=H.pw(a.z)
p=a.Q
return p.length!==0?q+("<"+H.pr(p,b)+">"):q}if(m===11)return H.mV(a,b,null)
if(m===12)return H.mV(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.e(b,o)
return b[o]}return"?"},
pw:function(a){var t,s=H.ng(a)
if(s!=null)return s
t="minified:"+a
return t},
mS:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
p2:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.lE(a,b,!1)
else if(typeof n=="number"){t=n
s=H.dA(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.dz(a,b,r)
o[b]=p
return p}else return n},
p0:function(a,b){return H.mT(a.tR,b)},
p_:function(a,b){return H.mT(a.eT,b)},
lE:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.mN(H.mL(a,null,b,c))
s.set(b,t)
return t},
fR:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.mN(H.mL(a,b,c,!0))
r.set(c,s)
return s},
p1:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.lB(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
bs:function(a,b){b.a=H.pb
b.b=H.pc
return b},
dA:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aD(null,null)
t.y=b
t.cy=c
s=H.bs(a,t)
a.eC.set(c,s)
return s},
mR:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.oY(a,b,s,c)
a.eC.set(s,t)
return t},
oY:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.b9(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.aD(null,null)
r.y=6
r.z=b
r.cy=c
return H.bs(a,r)},
lD:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.oX(a,b,s,c)
a.eC.set(s,t)
return t},
oX:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.b9(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.l7(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.l7(r.z))return r
else return H.ov(a,b)}}q=new H.aD(null,null)
q.y=7
q.z=b
q.cy=c
return H.bs(a,q)},
mQ:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.oV(a,b,s,c)
a.eC.set(s,t)
return t},
oV:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.b9(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.dz(a,"cQ",[b])
else if(b===u.P||b===u.T)return u.U}r=new H.aD(null,null)
r.y=8
r.z=b
r.cy=c
return H.bs(a,r)},
oZ:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aD(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bs(a,t)
a.eC.set(r,s)
return s},
fQ:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
oU:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
dz:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.fQ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aD(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bs(a,s)
a.eC.set(q,r)
return r},
lB:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.fQ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aD(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bs(a,p)
a.eC.set(r,o)
return o},
mP:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.fQ(n)
if(k>0){t=m>0?",":""
s=H.fQ(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.oU(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aD(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.bs(a,p)
a.eC.set(r,s)
return s},
lC:function(a,b,c,d){var t,s=b.cy+("<"+H.fQ(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.oW(a,b,c,s,d)
a.eC.set(s,t)
return t},
oW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bt(a,b,s,0)
n=H.dH(a,c,s,0)
return H.lC(a,o,n,c!==n)}}m=new H.aD(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bs(a,m)},
mL:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mN:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.oO(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.mM(a,s,h,g,!1)
else if(r===46)s=H.mM(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.br(a.u,a.e,g.pop()))
break
case 94:g.push(H.oZ(a.u,g.pop()))
break
case 35:g.push(H.dA(a.u,5,"#"))
break
case 64:g.push(H.dA(a.u,2,"@"))
break
case 126:g.push(H.dA(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.lA(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.dz(q,o,p))
else{n=H.br(q,a.e,o)
switch(n.y){case 11:g.push(H.lC(q,n,p,a.n))
break
default:g.push(H.lB(q,n,p))
break}}break
case 38:H.oP(a,g)
break
case 42:m=a.u
g.push(H.mR(m,H.br(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.lD(m,H.br(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.mQ(m,H.br(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.fe()
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
H.lA(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.mP(q,H.br(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.lA(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.oR(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.br(a.u,a.e,i)},
oO:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
mM:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.mS(t,p.z)[q]
if(o==null)H.Z('No "'+q+'" in "'+H.ou(p)+'"')
d.push(H.fR(t,p,o))}else d.push(q)
return n},
oP:function(a,b){var t=b.pop()
if(0===t){b.push(H.dA(a.u,1,"0&"))
return}if(1===t){b.push(H.dA(a.u,4,"1&"))
return}throw H.c(P.hb("Unexpected extended operation "+H.d(t)))},
br:function(a,b,c){if(typeof c=="string")return H.dz(a,c,a.sEA)
else if(typeof c=="number")return H.oQ(a,b,c)
else return c},
lA:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.br(a,b,c[t])},
oR:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.br(a,b,c[t])},
oQ:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.c(P.hb("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.c(P.hb("Bad index "+c+" for "+b.h(0)))},
a0:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.b9(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.b9(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.a0(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.a0(a,b.z,c,d,e)
if(q===6){t=d.z
return H.a0(a,b,c,t,e)}if(s===8){if(!H.a0(a,b.z,c,d,e))return!1
return H.a0(a,H.mv(a,b),c,d,e)}if(s===7){t=H.a0(a,b.z,c,d,e)
return t}if(q===8){if(H.a0(a,b,c,d.z,e))return!0
return H.a0(a,b,c,H.mv(a,d),e)}if(q===7){t=H.a0(a,b,c,d.z,e)
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
if(!H.a0(a,l,c,k,e)||!H.a0(a,k,e,l,c))return!1}return H.mX(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.mX(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.pg(a,b,c,d,e)}return!1},
mX:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.a0(a2,a3.z,a4,a5.z,a6))return!1
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
if(!H.a0(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.a0(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.a0(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.a0(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
pg:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.a0(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.mS(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.a0(a,H.fR(a,b,m[q]),c,s[q],e))return!1
return!0},
l7:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.b9(a))if(s!==7)if(!(s===6&&H.l7(a.z)))t=s===8&&H.l7(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
q2:function(a){var t
if(!H.b9(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
b9:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
mT:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aD:function aD(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fe:function fe(){this.c=this.b=this.a=null},
fa:function fa(){},
dy:function dy(a){this.a=a},
ng:function(a){return v.mangledGlobalNames[a]},
q5:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h6:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.lL==null){H.pY()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.c(P.mB("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[J.m9()]
if(q!=null)return q
q=H.q3(a)
if(q!=null)return q
if(typeof a=="function")return C.Q
t=Object.getPrototypeOf(a)
if(t==null)return C.u
if(t===Object.prototype)return C.u
if(typeof r=="function"){Object.defineProperty(r,J.m9(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
m9:function(){var t=$.mJ
return t==null?$.mJ=v.getIsolateTag("_$dart_js"):t},
m7:function(a){if(!H.cv(a))throw H.c(P.lf(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.b_(a,0,4294967295,"length",null))
return J.o5(new Array(a))},
o4:function(a){if(!H.cv(a)||a<0)throw H.c(P.lU("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
o5:function(a){return J.lm(a)},
lm:function(a){a.fixed$length=Array
return a},
o6:function(a,b){return J.nE(a,b)},
m8:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
o7:function(a,b){var t,s
for(t=a.length;b<t;){s=C.b.aq(a,b)
if(s!==32&&s!==13&&!J.m8(s))break;++b}return b},
ln:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.b.aw(a,t)
if(s!==32&&s!==13&&!J.m8(s))break}return b},
b8:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cV.prototype
return J.cU.prototype}if(typeof a=="string")return J.aY.prototype
if(a==null)return J.c5.prototype
if(typeof a=="boolean")return J.ea.prototype
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.F)return a
return J.h6(a)},
pS:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.F)return a
return J.h6(a)},
bT:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.F)return a
return J.h6(a)},
l2:function(a){if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.F)return a
return J.h6(a)},
pT:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bN.prototype
return a},
n5:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bN.prototype
return a},
h5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aQ.prototype
return a}if(a instanceof P.F)return a
return J.h6(a)},
lc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pS(a).G(a,b)},
t:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b8(a).m(a,b)},
nC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bT(a).k(a,b)},
nD:function(a,b,c,d){return J.h5(a).eh(a,b,c,d)},
nE:function(a,b){return J.pT(a).ax(a,b)},
ld:function(a,b){return J.bT(a).H(a,b)},
nF:function(a,b){return J.l2(a).I(a,b)},
nG:function(a,b){return J.l2(a).N(a,b)},
nH:function(a){return J.h5(a).gen(a)},
az:function(a){return J.b8(a).gU(a)},
bz:function(a){return J.l2(a).gO(a)},
bX:function(a){return J.bT(a).gl(a)},
nI:function(a,b,c){return J.n5(a).eJ(a,b,c)},
lT:function(a){return J.l2(a).f1(a)},
nJ:function(a){return J.n5(a).fd(a)},
a7:function(a){return J.b8(a).h(a)},
le:function(a,b){return J.b8(a).cG(a,b)},
a:function a(){},
ea:function ea(){},
c5:function c5(){},
bE:function bE(){},
ev:function ev(){},
bN:function bN(){},
aQ:function aQ(){},
at:function at(){},
eb:function eb(){},
aU:function aU(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bD:function bD(){},
cV:function cV(){},
cU:function cU(){},
aY:function aY(){}},P={
oD:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pJ()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.dI(new P.j6(r),1)).observe(t,{childList:true})
return new P.j5(r,t,s)}else if(self.setImmediate!=null)return P.pK()
return P.pL()},
oE:function(a){self.scheduleImmediate(H.dI(new P.j7(a),0))},
oF:function(a){self.setImmediate(H.dI(new P.j8(a),0))},
oG:function(a){P.lw(C.i,a)},
lw:function(a,b){var t=C.c.W(a.a,1000)
return P.oS(t<0?0:t,b)},
oS:function(a,b){var t=new P.jy()
t.d4(a,b)
return t},
ro:function(a){return new P.ct(a,1)},
oM:function(){return C.Z},
oN:function(a){return new P.ct(a,3)},
pn:function(a){return new P.dv(a)},
o0:function(a,b){var t=new P.aJ($.T,b.a2("aJ<0>"))
P.eP(C.i,new P.hI(t,a))
return t},
oJ:function(a,b){var t,s,r
b.a=1
try{a.cE(new P.jg(b),new P.jh(b),u.P)}catch(r){t=H.am(r)
s=H.bw(r)
P.q6(new P.ji(b,t,s))}},
mH:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.bo()
b.a=a.a
b.c=a.c
P.dh(b,s)}else{s=b.c
b.a=2
b.c=a
a.c6(s)}},
dh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={},e=f.a=a
for(t=u.c;!0;){s={}
r=e.a===8
if(b==null){if(r){t=e.c
P.jF(g,g,e.b,t.a,t.b)}return}s.a=b
q=b.a
for(e=b;q!=null;e=q,q=p){e.a=null
P.dh(f.a,e)
s.a=q
p=q.a}o=f.a
n=o.c
s.b=r
s.c=n
m=!r
if(m){l=e.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=e.b.b
if(r){l=o.b===k
l=!(l||l)}else l=!1
if(l){P.jF(g,g,o.b,n.a,n.b)
return}j=$.T
if(j!==k)$.T=k
else j=g
e=e.c
if((e&15)===8)new P.jm(s,f,r).$0()
else if(m){if((e&1)!==0)new P.jl(s,n).$0()}else if((e&2)!==0)new P.jk(f,s).$0()
if(j!=null)$.T=j
e=s.c
if(t.b(e)){i=s.a.b
if(e.a>=4){h=i.c
i.c=null
b=i.aV(h)
i.a=e.a
i.c=e.c
f.a=e
continue}else P.mH(e,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.aV(h)
e=s.b
o=s.c
if(!e){i.a=4
i.c=o}else{i.a=8
i.c=o}f.a=i
e=i}},
mY:function(a,b){if(u.Q.b(a))return a
if(u.D.b(a))return a
throw H.c(P.lf(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
po:function(){var t,s
for(t=$.cw;t!=null;t=$.cw){$.dG=null
s=t.b
$.cw=s
if(s==null)$.dF=null
t.a.$0()}},
pt:function(){$.lI=!0
try{P.po()}finally{$.dG=null
$.lI=!1
if($.cw!=null)$.lS().$1(P.n3())}},
n0:function(a){var t=new P.f2(a),s=$.dF
if(s==null){$.cw=$.dF=t
if(!$.lI)$.lS().$1(P.n3())}else $.dF=s.b=t},
ps:function(a){var t,s,r,q=$.cw
if(q==null){P.n0(a)
$.dG=$.dF
return}t=new P.f2(a)
s=$.dG
if(s==null){t.b=q
$.cw=$.dG=t}else{r=s.b
t.b=r
$.dG=s.b=t
if(r==null)$.dF=t}},
q6:function(a){var t=null,s=$.T
if(C.f===s){P.jH(t,t,C.f,a)
return}P.jH(t,t,s,s.bu(a))},
eP:function(a,b){var t=$.T
if(t===C.f)return P.lw(a,b)
return P.lw(a,t.bu(b))},
hc:function(a,b){var t=b==null?P.lV(a):b
P.nL(a,"error")
return new P.dR(a,t)},
lV:function(a){var t
if(u.C.b(a)){t=a.gaS()
if(t!=null)return t}return C.J},
jF:function(a,b,c,d,e){P.ps(new P.jG(d,e))},
mZ:function(a,b,c,d){var t,s=$.T
if(s===c)return d.$0()
$.T=c
t=s
try{s=d.$0()
return s}finally{$.T=t}},
n_:function(a,b,c,d,e){var t,s=$.T
if(s===c)return d.$1(e)
$.T=c
t=s
try{s=d.$1(e)
return s}finally{$.T=t}},
pq:function(a,b,c,d,e,f){var t,s=$.T
if(s===c)return d.$2(e,f)
$.T=c
t=s
try{s=d.$2(e,f)
return s}finally{$.T=t}},
jH:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.bu(d):c.ep(d)
P.n0(d)},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
jy:function jy(){},
jz:function jz(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
cu:function cu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dv:function dv(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
aJ:function aJ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jf:function jf(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
jn:function jn(a){this.a=a},
jl:function jl(a,b){this.a=a
this.b=b},
jk:function jk(a,b){this.a=a
this.b=b},
f2:function f2(a){this.a=a
this.b=null},
eG:function eG(){},
eH:function eH(){},
dR:function dR(a,b){this.a=a
this.b=b},
jC:function jC(){},
jG:function jG(a,b){this.a=a
this.b=b},
jq:function jq(){},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
o9:function(a,b,c){return H.pQ(a,new H.a8(b.a2("@<0>").bY(c).a2("a8<1,2>")))},
ma:function(a,b){return new H.a8(a.a2("@<0>").bY(b).a2("a8<1,2>"))},
cW:function(a){return new P.di(a.a2("di<0>"))},
lz:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
o2:function(a,b,c){var t,s
if(P.lJ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.al.push(a)
try{P.pm(a,t)}finally{if(0>=$.al.length)return H.e($.al,-1)
$.al.pop()}s=P.my(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
lk:function(a,b,c){var t,s
if(P.lJ(a))return b+"..."+c
t=new P.bK(b)
$.al.push(a)
try{s=t
s.a=P.my(s.a,a,", ")}finally{if(0>=$.al.length)return H.e($.al,-1)
$.al.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
lJ:function(a){var t,s
for(t=$.al.length,s=0;s<t;++s)if(a===$.al[s])return!0
return!1},
pm:function(a,b){var t,s,r,q,p,o,n,m=a.gO(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.w())return
t=H.d(m.gK(m))
b.push(t)
l+=t.length+2;++k}if(!m.w()){if(k<=5)return
if(0>=b.length)return H.e(b,-1)
s=b.pop()
if(0>=b.length)return H.e(b,-1)
r=b.pop()}else{q=m.gK(m);++k
if(!m.w()){if(k<=4){b.push(H.d(q))
return}s=H.d(q)
if(0>=b.length)return H.e(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gK(m);++k
for(;m.w();q=p,p=o){o=m.gK(m);++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.e(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=H.d(q)
s=H.d(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
mb:function(a,b){var t,s,r=P.cW(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s)r.t(0,b.a(a[s]))
return r},
mf:function(a){var t,s={}
if(P.lJ(a))return"{...}"
t=new P.bK("")
try{$.al.push(a)
t.a+="{"
s.a=!0
J.nG(a,new P.hV(s,t))
t.a+="}"}finally{if(0>=$.al.length)return H.e($.al,-1)
$.al.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
di:function di(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jp:function jp(a){this.a=a
this.c=this.b=null},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cT:function cT(){},
cX:function cX(){},
I:function I(){},
eg:function eg(){},
hV:function hV(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
dq:function dq(){},
dj:function dj(){},
dW:function dW(){},
dZ:function dZ(){},
hx:function hx(){},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hK:function hK(a){this.a=a},
iR:function iR(){},
iS:function iS(){},
jA:function jA(a){this.b=0
this.c=a},
q_:function(a){var t=H.on(a,null)
if(t!=null)return t
throw H.c(P.m6(a,null))},
nZ:function(a){if(a instanceof H.c_)return a.h(0)
return"Instance of '"+H.d(H.i8(a))+"'"},
mc:function(a,b,c){var t,s=c?J.o4(a):J.m7(a)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
md:function(a,b){var t,s=[]
for(t=J.bz(a);t.w();)s.push(t.gK(t))
if(b)return s
return J.lm(s)},
oa:function(a,b,c){var t,s,r=J.m7(a)
for(t=0;t<a;++t){s=b.$1(t)
if(t>=r.length)return H.e(r,t)
r[t]=s}return r},
lv:function(a){var t,s=a,r=s.length,q=P.lq(0,null,r)
if(typeof q!=="number")return q.a9()
t=q<r
return H.op(t?s.slice(0,q):s)},
os:function(a){return new H.hM(a,H.o8(a,!1,!0,!1,!1,!1))},
my:function(a,b,c){var t=J.bz(b)
if(!t.w())return a
if(c.length===0){do a+=H.d(t.gK(t))
while(t.w())}else{a+=H.d(t.gK(t))
for(;t.w();)a=a+c+H.d(t.gK(t))}return a},
p3:function(a,b,c,d){var t,s,r,q,p,o,n="0123456789ABCDEF"
if(c===C.r){t=$.nB().b
t=t.test(b)}else t=!1
if(t)return b
s=C.I.ey(b)
for(t=s.length,r=0,q="";r<t;++r){p=s[r]
if(p<128){o=p>>>4
if(o>=8)return H.e(a,o)
o=(a[o]&1<<(p&15))!==0}else o=!1
if(o)q+=H.oo(p)
else q=q+"%"+n[p>>>4&15]+n[p&15]}return q.charCodeAt(0)==0?q:q},
nW:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e0:function(a){if(a>=10)return""+a
return"0"+a},
hs:function(a){return new P.c1(1000*a)},
hz:function(a){if(typeof a=="number"||H.mW(a)||null==a)return J.a7(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nZ(a)},
hb:function(a){return new P.dQ(a)},
lU:function(a){return new P.ar(!1,null,null,a)},
lf:function(a,b,c){return new P.ar(!0,a,b,c)},
nL:function(a,b){if(a==null)throw H.c(new P.ar(!1,null,b,"Must not be null"))
return a},
ex:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
lq:function(a,b,c){var t
if(typeof c!=="number")return H.o(c)
t=a>c
if(t)throw H.c(P.b_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
t=b>c}else t=!0
if(t)throw H.c(P.b_(b,a,c,"end",null))
return b}return c},
or:function(a,b){if(a<0)throw H.c(P.b_(a,0,null,b,null))
return a},
R:function(a,b,c,d,e){var t=e==null?J.bX(b):e
return new P.e8(t,!0,a,c,"Index out of range")},
B:function(a){return new P.eY(a)},
mB:function(a){return new P.eV(a)},
lt:function(a){return new P.cl(a)},
c0:function(a){return new P.dX(a)},
a_:function(a){return new P.jd(a)},
m6:function(a,b){return new P.hF(a,b)},
nb:function(a){H.q5(a)},
b7:function b7(){},
aP:function aP(a,b){this.a=a
this.b=b},
ad:function ad(){},
c1:function c1(a){this.a=a},
ht:function ht(){},
hu:function hu(){},
M:function M(){},
dQ:function dQ(a){this.a=a},
eq:function eq(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e8:function e8(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eY:function eY(a){this.a=a},
eV:function eV(a){this.a=a},
cl:function cl(a){this.a=a},
dX:function dX(a){this.a=a},
et:function et(){},
dc:function dc(){},
e_:function e_(a){this.a=a},
jd:function jd(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
hH:function hH(){},
x:function x(){},
f:function f(){},
e9:function e9(){},
m:function m(){},
cZ:function cZ(){},
a3:function a3(){},
a2:function a2(){},
F:function F(){},
b1:function b1(){},
fG:function fG(){},
Q:function Q(){},
bK:function bK(a){this.a=a},
bu:function(a){var t,s,r,q,p
if(a==null)return null
t=P.ma(u.N,u.z)
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
t.p(0,p,a[p])}return t},
pN:function(a){var t={}
a.N(0,new P.l0(t))
return t},
l0:function l0(a){this.a=a},
fw:function fw(){},
aC:function aC(){},
bG:function bG(){},
ee:function ee(){},
bJ:function bJ(){},
er:function er(){},
i7:function i7(){},
ck:function ck(){},
eI:function eI(){},
k:function k(){},
bM:function bM(){},
eT:function eT(){},
fj:function fj(){},
fk:function fk(){},
fs:function fs(){},
ft:function ft(){},
fE:function fE(){},
fF:function fF(){},
fO:function fO(){},
fP:function fP(){},
hd:function hd(){},
he:function he(){},
hf:function hf(a){this.a=a},
dS:function dS(){},
bc:function bc(){},
es:function es(){},
f3:function f3(){},
eE:function eE(){},
fB:function fB(){},
fC:function fC(){}},W={
nK:function(){var t=document.createElement("a")
return t},
nY:function(a,b,c){var t,s=document.body
s.toString
t=C.m.a4(s,a,b,c)
t.toString
s=new H.cp(new W.af(t),new W.hv())
return u.h.a(s.gan(s))},
hw:function(a){return"wheel"},
cM:function(a){var t,s,r="element tag unavailable"
try{t=J.h5(a)
if(typeof t.gcB(a)=="string")r=t.gcB(a)}catch(s){H.am(s)}return r},
o1:function(a){var t,s=document.createElement("input"),r=u.S.a(s)
try{r.type=a}catch(t){H.am(t)}return r},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mK:function(a,b,c,d){var t=W.jo(W.jo(W.jo(W.jo(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
a4:function(a,b,c,d){var t=W.n1(new W.jc(c),u.B)
if(t!=null&&!0)J.nD(a,b,t,!1)
return new W.fb(a,b,t,!1)},
mI:function(a){var t=W.nK(),s=window.location
t=new W.cs(new W.ju(t,s))
t.d1(a)
return t},
oK:function(a,b,c,d){return!0},
oL:function(a,b,c,d){var t,s=d.a,r=s.a
r.href=c
t=r.hostname
s=s.b
if(!(t==s.hostname&&r.port==s.port&&r.protocol==s.protocol))if(t==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
mO:function(){var t=u.N
t=new W.fJ(P.mb(C.t,t),P.cW(t),P.cW(t),P.cW(t),null)
t.d3(null,new H.d0(C.t,new W.jx()),["TEMPLATE"],null)
return t},
n1:function(a,b){var t=$.T
if(t===C.f)return a
return t.er(a,b)},
n:function n(){},
h9:function h9(){},
dO:function dO(){},
dP:function dP(){},
bY:function bY(){},
dU:function dU(){},
bA:function bA(){},
cF:function cF(){},
aO:function aO(){},
hk:function hk(){},
O:function O(){},
cH:function cH(){},
hl:function hl(){},
aA:function aA(){},
aW:function aW(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){},
cI:function cI(){},
hq:function hq(){},
cJ:function cJ(){},
cK:function cK(){},
e1:function e1(){},
hr:function hr(){},
je:function je(a,b){this.a=a
this.$ti=b},
K:function K(){},
hv:function hv(){},
h:function h(){},
b:function b(){},
be:function be(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
bf:function bf(){},
hJ:function hJ(){},
bC:function bC(){},
c4:function c4(){},
bF:function bF(){},
hS:function hS(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(a){this.a=a},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
bh:function bh(){},
ei:function ei(){},
au:function au(){},
af:function af(a){this.a=a},
w:function w(){},
d6:function d6(){},
bj:function bj(){},
ew:function ew(){},
id:function id(){},
ie:function ie(a){this.a=a},
eA:function eA(){},
b0:function b0(){},
eC:function eC(){},
bl:function bl(){},
eD:function eD(){},
bm:function bm(){},
iu:function iu(){},
iv:function iv(a){this.a=a},
b2:function b2(){},
dd:function dd(){},
eJ:function eJ(){},
eK:function eK(){},
cm:function cm(){},
b3:function b3(){},
aF:function aF(){},
eM:function eM(){},
eN:function eN(){},
iI:function iI(){},
bn:function bn(){},
bL:function bL(){},
eS:function eS(){},
iL:function iL(){},
b5:function b5(){},
iQ:function iQ(){},
f0:function f0(){},
bq:function bq(){},
cq:function cq(){},
cr:function cr(){},
f4:function f4(){},
df:function df(){},
ff:function ff(){},
dk:function dk(){},
fA:function fA(){},
fH:function fH(){},
j9:function j9(){},
ja:function ja(a){this.a=a},
lj:function lj(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jc:function jc(a){this.a=a},
ly:function ly(a){this.$ti=a},
cs:function cs(a){this.a=a},
P:function P(){},
d7:function d7(a){this.a=a},
i3:function i3(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(){},
jv:function jv(){},
jw:function jw(){},
fJ:function fJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jx:function jx(){},
fI:function fI(){},
cP:function cP(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aB:function aB(){},
ju:function ju(a,b){this.a=a
this.b=b},
fS:function fS(a){this.a=a
this.b=!1},
jB:function jB(a){this.a=a},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
fh:function fh(){},
fi:function fi(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fu:function fu(){},
fv:function fv(){},
fx:function fx(){},
ds:function ds(){},
dt:function dt(){},
fy:function fy(){},
fz:function fz(){},
fD:function fD(){},
fK:function fK(){},
fL:function fL(){},
dw:function dw(){},
dx:function dx(){},
fM:function fM(){},
fN:function fN(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){}},K={
a9:function(a){var t=new K.ig()
t.cY(a)
return t},
ha:function ha(){},
e7:function e7(){},
bi:function bi(){this.a=null},
ig:function ig(){this.a=null}},L={eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},eR:function eR(a){this.b=a
this.c=null},iJ:function iJ(){var _=this
_.d=_.c=_.b=_.a=null},iM:function iM(a){this.b=a
this.a=this.c=null}},O={
m0:function(){var t=new O.cG()
t.a=[]
return t},
cG:function cG(){this.c=this.b=this.a=null},
d1:function d1(){this.b=this.a=null},
hp:function hp(a){this.a=a
this.c=this.b=null},
iA:function iA(){}},Y={
nf:function(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1=a4==null||a5==null
if(a1)return a0
if(a6==null)a6=$.dL()
if(a7==null)a7=$.dL()
a6.toString
a1=$.lP().a
t=$.cz()
s=$.cy()
r=a6.bm(t,s)
q=$.cA()
p=$.dM()
o=a6.bm(q,p)
n=$.dN()
m=$.cB()
l=a6.bm(n,m)
l=a7.a&(a1&a6.a|r|o|l)
k=a4.Z(0,a5)
j=$.aK()
a1=k.a
if(a1!==0){if(a1>0){r=s.a
if((l&r)===r){$.A().toString
r=a3.a-(a2.a+a2.d)
i=Math.abs(r)<1e-9?0:r/a1
t=s
h=!0}else{t=a0
i=t
h=!1}}else{r=t.a
if((l&r)===r){$.A().toString
r=a3.a+a3.d-a2.a
i=Math.abs(r)<1e-9?0:r/a1
h=!0}else{t=a0
i=t
h=!1}}if(h){if(typeof i!=="number")return i.a9()
r=i<100&&i>=0&&i<=1}else r=!1
if(r){if(typeof i!=="number")return H.o(i)
g=a2.b+k.b*i
r=a3.b
$.A().toString
if(g-1e-9<r+a3.e&&r-1e-9<g+a2.e){f=a2.c+k.c*i
r=a3.c
if(f-1e-9<r+a3.f&&r-1e-9<f+a2.f){e=t
d=i}else{e=j
d=100}}else{e=j
d=100}}else{e=j
d=100}}else{t=a0
e=j
i=t
d=100}r=k.b
if(r!==0){if(r>0){o=p.a
if((l&o)===o){$.A().toString
o=a3.b-(a2.b+a2.e)
i=Math.abs(o)<1e-9?0:o/r
t=p
h=!0}else h=!1}else{o=q.a
if((l&o)===o){$.A().toString
o=a3.b+a3.e-a2.b
i=Math.abs(o)<1e-9?0:o/r
t=q
h=!0}else h=!1}if(h){if(typeof i!=="number")return i.a9()
o=i<d&&i>=0&&i<=1}else o=!1
if(o){if(typeof i!=="number")return H.o(i)
c=a2.a+a1*i
o=a3.a
$.A().toString
if(c-1e-9<o+a3.d&&o-1e-9<c+a2.d){f=a2.c+k.c*i
o=a3.c
if(f-1e-9<o+a3.f&&o-1e-9<f+a2.f){e=t
d=i}}}}o=k.c
if(o!==0){if(o>0){b=m.a
if((l&b)===b){$.A().toString
l=a3.c-(a2.c+a2.f)
i=Math.abs(l)<1e-9?0:l/o
t=m
h=!0}else h=!1}else{b=n.a
if((l&b)===b){$.A().toString
l=a3.c+a3.f-a2.c
i=Math.abs(l)<1e-9?0:l/o
t=n
h=!0}else h=!1}if(h){if(typeof i!=="number")return i.a9()
o=i<d&&i>=0&&i<=1}else o=!1
if(o){if(typeof i!=="number")return H.o(i)
c=a2.a+a1*i
a1=a3.a
$.A().toString
if(c-1e-9<a1+a3.d&&a1-1e-9<c+a2.d){g=a2.b+r*i
a1=a3.b
if(g-1e-9<a1+a3.e&&a1-1e-9<g+a2.e){e=t
d=i}}}}if(J.t(e,j)){a1=a3.a
r=a2.a
$.A().toString
if(r-1e-9<a1+a3.d&&a1-1e-9<r+a2.d){a1=a3.b
r=a2.b
if(r-1e-9<a1+a3.e&&a1-1e-9<r+a2.e){a1=a3.c
r=a2.c
a1=r-1e-9<a1+a3.f&&a1-1e-9<r+a2.f
a=a1}else a=!1}else a=!1
return new Y.eU(j,a?C.j:C.h,0)}return new Y.eU(e,C.d,d)},
qc:function(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b=a1==null||a2==null
if(b)return c
b=a.a
t=a.b
s=a.c
r=a0.a
q=a0.b
p=a0.c
o=new V.q(b-r,t-q,s-p)
n=a.d
m=n+a0.d
l=m*m
k=o.ae(o)
if(k<l)return new Y.bo(new V.p(b,t,s),new V.p(r,q,p),c,C.j,0)
j=a2.Z(0,a1)
i=Math.sqrt(j.ae(j))
h=o.ae(j.X())
$.A().toString
if(Math.abs(k-l)<1e-9&&h<0)return new Y.bo(c,c,c,C.h,0)
g=h*h+l-k
if(g<0)return new Y.bo(c,c,c,C.h,0)
f=h-Math.sqrt(g)
if(f<0)return new Y.bo(c,c,c,C.h,f)
if(f>i)return new Y.bo(c,c,c,C.w,f)
e=f/i
b+=a1.a*e
t+=a1.b*e
s+=a1.c*e
r+=a2.a*e
q+=a2.b*e
e=p+a2.c*e
d=n/Math.sqrt(k)
return new Y.bo(new V.p(b,t,s),new V.p(r,q,e),new V.p((r-b)*d+b,(q-t)*d+t,(e-s)*d+s),C.d,f)},
cn:function cn(a){this.b=a},
dT:function dT(){},
eU:function eU(a,b,c){this.y=a
this.a=b
this.b=c},
bo:function bo(a,b,c,d,e){var _=this
_.r=a
_.x=b
_.y=c
_.a=d
_.b=e}},E={
m4:function(a){var t,s=new E.c2()
s.a=""
s.b=!0
t=O.m0()
s.y=t
t.bQ(s.geN(),s.geQ())
s.dy=s.dx=s.db=s.cy=s.cx=s.ch=s.Q=s.z=null
s.sbR(0,null)
s.saL(null)
return s},
oH:function(){if(J.ld(window.navigator.vendor,"Google"))return C.z
if(J.ld(window.navigator.userAgent,"Firefox"))return C.n
var t=window.navigator.appVersion
if(J.bT(t).H(t,"Trident")||C.b.H(t,"Edge"))return C.o
if(J.ld(window.navigator.appName,"Microsoft"))return C.o
return C.A},
oI:function(){var t=window.navigator.appVersion
if(J.bT(t).H(t,"Win"))return C.V
if(C.b.H(t,"Mac"))return C.W
if(C.b.H(t,"Linux"))return C.X
return C.Y},
ot:function(a,b){var t=new E.i9(a)
t.cX(a,b)
return t},
c2:function c2(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.d=_.c=_.b=_.a=null},
bZ:function bZ(a){this.b=a},
ch:function ch(a){this.b=a},
jb:function jb(a){this.a=a},
i9:function i9(a){var _=this
_.a=a
_.dy=_.dx=_.db=_.cy=_.x=_.r=_.f=_.e=_.d=_.c=null},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
eO:function eO(){var _=this
_.db=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
iH:function iH(a){this.a=a}},Z={
aI:function(a){return new Z.aH(a)},
aH:function aH(a){this.a=a}},V={hU:function hU(){},
as:function(a){return new V.aj(a)},
lM:function(a,b,c){var t
if(c<=0)t=a
else t=c>=1?b:a+c*(b-a)
return t},
h4:function(a){var t
if(a<0)t=0
else t=a>1?1:a
return t},
C:function(a,b,c){if(a==null)return C.b.a7("null",c)
$.A().toString
return C.b.a7(C.e.b4(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bv:function(a,b,c){var t,s,r,q,p,o,n=[]
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.C(a[r],b,c)
s=Math.max(s,q.length)
n.push(q)}for(t=n.length,p=t-1;p>=0;--p,t=o){if(p>=t)return H.e(n,p)
t=C.b.a7(n[p],s)
o=n.length
if(p>=o)return H.e(n,p)
n[p]=t}return n},
c8:function(){var t=$.mg
return t==null?$.mg=new V.V(1,0,0,1):t},
c7:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.V(t,-s,s,t)},
oc:function(a){var t=a[0],s=a[1],r=a[2],q=a[3]
return new V.V(t,s,r,q)},
cc:function(){var t=$.mh
return t==null?$.mh=new V.N(1,0,0,0,1,0,0,0,1):t},
c9:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.N(1,0,0,0,t,-s,0,s,t)},
ca:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.N(t,0,-s,0,1,0,s,0,t)},
cb:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.N(t,-s,0,s,t,0,0,0,1)},
od:function(a){var t=a[0],s=a[1],r=a[2],q=a[3],p=a[4],o=a[5],n=a[6],m=a[7],l=a[8]
return new V.N(t,s,r,q,p,o,n,m,l)},
aR:function(){var t=$.mk
return t==null?$.mk=V.L(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):t},
L:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.eh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mj:function(a,b,c){return V.L(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mi:function(a,b,c,d){return V.L(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cd:function(a){var t=Math.cos(a),s=Math.sin(a)
return V.L(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)},
ce:function(a){var t=Math.cos(a),s=Math.sin(a)
return V.L(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1)},
cf:function(a){var t=Math.cos(a),s=Math.sin(a)
return V.L(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)},
oe:function(a){var t=V.L(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])
return t},
d8:function(){var t=$.mn
return t==null?$.mn=new V.Y(0,0):t},
mp:function(){var t=$.mo
return t==null?$.mo=new V.p(0,0,0):t},
ey:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.da(a,b,c,d)},
z:function(a,b,c,d,e,f){if(d<0){a+=d
d=-d}if(e<0){b+=e
e=-e}if(f<0){c+=f
f=-f}return new V.db(a,b,c,d,e,f)},
bp:function(){var t=$.iT
return t==null?$.iT=new V.q(0,0,0):t},
bB:function bB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(){},
aj:function aj(a){this.a=a},
V:function V(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
eh:function eh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
p:function p(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ow:function(a,b){var t=new V.il()
t.cZ(a,!1)
return t},
il:function il(){this.b=this.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a}},D={
c3:function(){var t=new D.cN()
t.d=0
return t},
hg:function hg(){},
cN:function cN(){var _=this
_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
aX:function aX(){this.b=null},
cR:function cR(){this.b=null},
cS:function cS(){this.b=null},
ae:function ae(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={dV:function dV(a,b){this.a=a
this.b=b},ed:function ed(a,b){this.a=a
this.b=b},hO:function hO(){this.d=this.b=this.a=null},hT:function hT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},i0:function i0(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},iK:function iK(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eZ:function eZ(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
o_:function(a){var t=new X.hG(),s=V.h4(1)
t.a=new V.bB(0,0,0,s)
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
s=$.ms
if(s==null){s=V.ey(0,0,1,1)
$.ms=s}t.r=s
return t},
lh:function lh(){},
hG:function hG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eu:function eu(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(){}},U={
m1:function(a){var t=new U.dY()
if(a==null)a=V.aR()
if(null!=a)t.a=a
return t},
dY:function dY(){this.b=this.a=null},
i1:function i1(){}},M={e2:function e2(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
py:function(a){a.q(0,"Benchmark Uint8List timing",new M.jU())
a.q(0,"Benchmark List int timing",new M.jV())
a.q(0,"Benchmark cuboid building",new M.jW())
a.q(0,"Benchmark cuboid building and getting normals",new M.jX())
a.q(0,"Benchmark cuboid building and join seams",new M.jY())
a.q(0,"Benchmark sphere building",new M.jZ())},
pz:function(a){var t=new M.k_(),s=new M.k2(t)
a.q(0,"Test of chess location",new M.k3(new M.k1()))
a.q(0,"Test of chess state parse and toString",new M.k4(t))
a.q(0,"Test of chess checked condition determination",new M.k5(new M.k0()))
a.q(0,"Test of chess state movements of pawns",new M.k6(s))
a.q(0,"Test of chess state movements of knights",new M.k7(s))
a.q(0,"Test of chess state movements of bishops",new M.k8(s))
a.q(0,"Test of chess state movements of rooks",new M.k9(s))
a.q(0,"Test of chess state movements of kings",new M.ka(s))
a.q(0,"Test of chess state movements of queens",new M.kb(s))},
pA:function(a){a.q(0,"Collision Between Two AABB Test",new M.kc())
a.q(0,"Collision Between Two Spheres Test",new M.kd())},
ab:function(a,b,c,d,e,f,g,h){var t,s=Y.nf(c,d,e,V.bp(),null,null)
if(s.a===f){t=s.b
$.A().toString
t=!(Math.abs(t-g)<1e-9)||!J.t(s.y,h)}else t=!0
if(t){a.i("Unexpected result from twoAABB3 collision:\n"+("   Message:  "+b+"\n")+("   Original: "+c.h(0)+"\n")+("   Target:   "+d.h(0)+"\n")+("   Vector:   "+e.h(0)+"\n")+("   Expected: "+f.h(0)+" "+H.d(g)+" "+H.d(h)+"\n")+("   Result:   "+s.h(0)+"\n"),"error_log")
a.j()}else a.i("Results from twoAABB3 collision:\n"+("   Message:  "+b+"\n")+("   Original: "+c.h(0)+"\n")+("   Target:   "+d.h(0)+"\n")+("   Vector:   "+e.h(0)+"\n")+("   Result:   "+s.h(0)+"\n"),"info_log")},
jN:function(a,b,c,d,e,f,g,h){var t,s=Y.qc(c,d,e,f),r=s.a
if(r===g){t=s.b
$.A().toString
t=!(Math.abs(t-h)<1e-9)}else t=!0
if(t){a.i("Unexpected result from twoSphere collision:\n"+("   Message:  "+b+"\n")+("   Sphere A: "+c.h(0)+"\n")+("   Sphere B: "+d.h(0)+"\n")+("   Vector A: "+H.d(e)+"\n")+("   Vector B: "+H.d(f)+"\n")+("   Expected: "+g.h(0)+" "+h+"\n")+("   Result:   "+r.h(0)+" "+H.d(s.b)+"\n")+("   ResultOb: "+s.h(0)+"\n"),"error_log")
a.j()}else a.i("Results from twoSphere collision:\n"+("   Message:  "+b+"\n")+("   Sphere A: "+c.h(0)+"\n")+("   Sphere B: "+d.h(0)+"\n")+("   Vector A: "+H.d(e)+"\n")+("   Vector B: "+H.d(f)+"\n")+("   Result:   "+s.h(0)+"\n"),"info_log")},
pB:function(a){a.q(0,"Test of craft example world getBlock",new M.ke())
a.q(0,"Test of craft example world collide with floor",new M.kf())},
l:function(a,b,c,d,e,f,g,h,i,a0){var t,s,r,q,p="Testing getBlock(",o="error_log",n="notice_log",m="info_log",l=b.am(c,d,e),k=l.d,j=k===f
if(!j||l.e!==g||l.a!==h||l.b!==i||l.c!==a0){a.i(p+H.d(c)+", "+H.d(d)+", "+H.d(e)+"): Failed\n",o)
a.j()
a.i("  Expected: "+f+", "+g+", "+h+", "+i+", "+a0+"\n",n)
t=l.e
s=l.a
r=l.b
q=l.c
a.i("  Gotten:   "+k+", "+t+", "+s+", "+r+", "+q+"\n",n)
if(!j){a.i("  Chunk X value "+k+" should be "+f+".\n",o)
a.j()}if(t!==g){a.i("  Chunk Z value "+t+" should be "+g+".\n",o)
a.j()}if(s!==h){a.i("  Block X value "+s+" should be "+h+".\n",o)
a.j()}if(r!==i){a.i("  Block Y value "+r+" should be "+i+".\n",o)
a.j()}if(q!==a0){a.i("  Block Z value "+q+" should be "+a0+".\n",o)
a.j()}a.i("\n",m)}else a.i(p+H.d(c)+", "+H.d(d)+", "+H.d(e)+"): Passed\n",m)},
W:function(a,b,c,d,e,f,g,h,i,j,k,l){var t,s,r,q,p="error_log",o="info_log",n=new B.hj(b)
n.e=$.aK()
n.f=[]
n.r=[]
n.x=[]
t=V.z(-0.25,-1.5,-0.25,0.5,2,0.5)
s=new V.p(c,d,e)
r=new V.q(f,g,h)
q=new V.p(i,j,k)
n.ev(t,s,r)
if(!J.t(n.b,q)||!J.t(n.e,l)){a.i("Testing collide: Failed\n",p)
a.j()
a.i("  Region:   "+t.h(0)+"\n",p)
a.j()
a.i("  Start:    "+s.h(0)+"\n",p)
a.j()
a.i("  Vector:   "+r.h(0)+"\n",p)
a.j()
a.i("  Expected: Collider("+q.h(0)+", "+H.d(l)+")\n",p)
a.j()
a.i("  Gotten:   "+n.h(0)+"\n",p)
a.j()
a.i("\n",o)}else{a.i("Testing collide: Passed\n",o)
a.i("  Region:   "+t.h(0)+"\n",o)
a.i("  Start:    "+s.h(0)+"\n",o)
a.i("  Vector:   "+r.h(0)+"\n",o)
a.i("  Gotten:   "+n.h(0)+"\n",o)
a.i("\n",o)}},
pC:function(a){a.q(0,"Matrix2 Point Transposition Test",new M.kg())
a.q(0,"Matrix2 Vector Transposition Test",new M.kh())
a.q(0,"Matrix2 Identity Test",new M.ki())
a.q(0,"Matrix2 Scalar Test",new M.kj())
a.q(0,"Matrix2 Basic Rotate Test",new M.kk())
a.q(0,"Matrix2 Rotate Test",new M.kl())
a.q(0,"Matrix2 Miscellaneous Test",new M.km())
a.q(0,"Matrix2 Inverse Test",new M.kn())
a.q(0,"Matrix2 Multiplication Test",new M.ko())},
J:function(a,b,c,d){if(b!==c){a.i("Unexpected result from "+d+": "+("\n   Expected: "+c)+("\n   Gotten:   "+H.d(b)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("Checked "+d+" is "+H.d(b)+"\n\n","info_log")},
a1:function(a,b,c,d){var t=c+"\n             "+d,s=b.n("             ")
if(s!==t){a.i("Unexpected result from Matrix2: "+("\n   Expected: "+t)+("\n   Gotten:   "+s+"\n"),"error_log")
a.j()
a.j()}else a.i("Checking: "+b.n("          ")+"\n\n","info_log")},
lH:function(a,b,c,d){var t,s,r,q="             ",p="error_log",o="Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   ",n=b.a1(0)
M.a1(a,n,c,d)
t=n.a1(0)
if(!J.t(t,b)){a.i("Unexpected result from Matrix2.inverse().inverse(): \n   Expected: "+b.n(q)+"\n   Gotten:   "+t.n(q)+"\n",p)
a.j()
a.j()}s=b.F(0,n)
if(!s.m(0,V.c8())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.c8().n(q)+"\n   Gotten:   "+s.n(q)+"\n",p)
a.j()
a.j()}r=b.F(0,n)
if(!r.m(0,V.c8())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.c8().n(q)+"\n   Gotten:   "+r.n(q)+"\n",p)
a.j()
a.j()}},
H:function(a,b,c,d,e,f){var t="info_log",s=new V.Y(e,f),r=new V.Y(b.a*c+b.b*d,b.c*c+b.d*d)
a.i("Checking Matrix2.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.Y(c,d).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix2.transPnt2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jK:function(a,b,c,d,e,f){var t="info_log",s=new V.aa(e,f),r=new V.aa(b.a*c+b.b*d,b.c*c+b.d*d)
a.i("Checking Matrix2.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.aa(c,d).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix2.transVec2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
pD:function(a){a.q(0,"Matrix3 Point Transposition Test",new M.kp())
a.q(0,"Matrix3 Vector Transposition Test",new M.kq())
a.q(0,"Matrix3 Identity Test",new M.kr())
a.q(0,"Matrix3 Scalar Test",new M.kw())
a.q(0,"Matrix3 Basic Rotate X Test",new M.kx())
a.q(0,"Matrix3 Rotate X Test",new M.ky())
a.q(0,"Matrix3 Basic Rotate Y Test",new M.kz())
a.q(0,"Matrix3 Rotate Y Test",new M.kA())
a.q(0,"Matrix3 Basic Rotate Z Test",new M.kB())
a.q(0,"Matrix3 Rotate Z Test",new M.kC())
a.q(0,"Matrix3 Miscellaneous Test",new M.kD())
a.q(0,"Matrix3 Inverse Test",new M.ks())
a.q(0,"Matrix3 Multiplication Test",new M.kt())
a.q(0,"Matrix3 Point2 Transposition Test",new M.ku())
a.q(0,"Matrix3 Vector2 Transposition Test",new M.kv())},
E:function(a,b,c,d,e){var t=c+"\n             "+d+"\n             "+e,s=b.n("             ")
if(s!==t){a.i("Unexpected result from Matrix3: "+("\n   Expected: "+t)+("\n   Gotten:   "+s+"\n"),"error_log")
a.j()
a.j()}else a.i("Checking: "+b.n("          ")+"\n\n","info_log")},
h2:function(a,b,c,d,e){var t,s,r,q="             ",p="error_log",o="Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   ",n=b.a1(0)
M.E(a,n,c,d,e)
t=n.a1(0)
if(!J.t(t,b)){a.i("Unexpected result from Matrix3.inverse().inverse(): \n   Expected: "+b.n(q)+"\n   Gotten:   "+t.n(q)+"\n",p)
a.j()
a.j()}s=b.F(0,n)
if(!s.m(0,V.cc())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.cc().n(q)+"\n   Gotten:   "+s.n(q)+"\n",p)
a.j()
a.j()}r=b.F(0,n)
if(!r.m(0,V.cc())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.cc().n(q)+"\n   Gotten:   "+r.n(q)+"\n",p)
a.j()
a.j()}},
v:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.p(f,g,h),r=new V.p(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.i("Checking Matrix3.transPnt3: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.p(c,d,e).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix3.transPnt3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
bP:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.q(f,g,h),r=new V.q(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.i("Checking Matrix3.transVec3: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.q(c,d,e).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix3.transVec3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jI:function(a,b,c,d,e,f){var t="info_log",s=new V.Y(e,f),r=new V.Y(b.a*c+b.b*d+b.c,b.d*c+b.e*d+b.f)
a.i("Checking Matrix3.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.Y(c,d).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix3.transPnt2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jL:function(a,b,c,d,e,f){var t="info_log",s=new V.aa(e,f),r=new V.aa(b.a*c+b.b*d,b.d*c+b.e*d)
a.i("Checking Matrix3.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.aa(c,d).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix3.transVec2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
pE:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.kE())
a.q(0,"Matrix4 Vector Transposition Test",new M.kF())
a.q(0,"Matrix4 Identity Test",new M.kG())
a.q(0,"Matrix4 Scalar Test",new M.kN())
a.q(0,"Matrix4 Basic Rotate X Test",new M.kO())
a.q(0,"Matrix4 Rotate X Test",new M.kP())
a.q(0,"Matrix4 Basic Rotate Y Test",new M.kQ())
a.q(0,"Matrix4 Rotate Y Test",new M.kR())
a.q(0,"Matrix4 Basic Rotate Z Test",new M.kS())
a.q(0,"Matrix4 Rotate Z Test",new M.kT())
a.q(0,"Matrix4 Miscellaneous Test",new M.kU())
a.q(0,"Matrix4 Inverse Test",new M.kH())
a.q(0,"Matrix4 Multiplication Test",new M.kI())
a.q(0,"Matrix4 Point3 Transposition Test",new M.kJ())
a.q(0,"Matrix4 Vector3 Transposition Test",new M.kK())
a.q(0,"Matrix4 Point2 Transposition Test",new M.kL())
a.q(0,"Matrix4 Vector2 Transposition Test",new M.kM())},
D:function(a,b,c,d,e,f){var t=c+"\n             "+d+"\n             "+e+"\n             "+f,s=b.n("             ")
if(s!==t){a.i("Unexpected result from Matrix4: "+("\n   Expected: "+t)+("\n   Gotten:   "+s+"\n"),"error_log")
a.j()
a.j()}else a.i("Checking: "+b.n("          ")+"\n\n","info_log")},
h3:function(a,b,c,d,e,f){var t,s,r,q="             ",p="error_log",o="Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   ",n=b.a1(0)
M.D(a,n,c,d,e,f)
t=n.a1(0)
if(!J.t(t,b)){a.i("Unexpected result from Matrix4.inverse().inverse(): \n   Expected: "+b.n(q)+"\n   Gotten:   "+t.n(q)+"\n",p)
a.j()
a.j()}s=b.F(0,n)
if(!s.m(0,V.aR())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.aR().n(q)+"\n   Gotten:   "+s.n(q)+"\n",p)
a.j()
a.j()}r=b.F(0,n)
if(!r.m(0,V.aR())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.aR().n(q)+"\n   Gotten:   "+r.n(q)+"\n",p)
a.j()
a.j()}},
r:function(a,b,c,d,e,f,g,h,i,j){var t="info_log",s=new V.bk(c,d,e,f),r=new V.bk(g,h,i,j),q=b.b5(s)
a.i("Checking Matrix4.transPnt4: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+s.h(0)+"\n"),t)
if(!q.m(0,r)){a.i("Unexpected result from Matrix4.transPnt4: "+("\n   Expected: "+r.h(0))+("\n   Gotten:   "+q.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+q.h(0)+"\n\n",t)},
ac:function(a,b,c,d,e,f,g,h,i,j){var t="info_log",s=new V.aG(g,h,i,j),r=new V.aG(b.a*c+b.b*d+b.c*e+b.d*f,b.e*c+b.f*d+b.r*e+b.x*f,b.y*c+b.z*d+b.Q*e+b.ch*f,b.cx*c+b.cy*d+b.db*e+b.dx*f)
a.i("Checking Matrix4.transVec4: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.aG(c,d,e,f).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix4.transVec4: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
bO:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.p(f,g,h),r=new V.p(b.a*c+b.b*d+b.c*e+b.d,b.e*c+b.f*d+b.r*e+b.x,b.y*c+b.z*d+b.Q*e+b.ch)
a.i("Checking Matrix4.transPnt3: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.p(c,d,e).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix4.transPnt3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
bQ:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.q(f,g,h),r=new V.q(b.a*c+b.b*d+b.c*e,b.e*c+b.f*d+b.r*e,b.y*c+b.z*d+b.Q*e)
a.i("Checking Matrix4.transVec3: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.q(c,d,e).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix4.transVec3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jJ:function(a,b,c,d,e,f){var t="info_log",s=new V.Y(e,f),r=new V.Y(b.a*c+b.b*d+b.d,b.e*c+b.f*d+b.x)
a.i("Checking Matrix4.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.Y(c,d).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix4.transPnt2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jM:function(a,b,c,d,e,f){var t="info_log",s=new V.aa(e,f),r=new V.aa(b.a*c+b.b*d,b.e*c+b.f*d)
a.i("Checking Matrix4.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.aa(c,d).h(0)+"\n"),t)
if(!r.m(0,s)){a.i("Unexpected result from Matrix4.transVec2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.j()
a.j()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
pF:function(a){a.q(0,"Region2 Point Expand Test",new M.kV())},
dC:function(a,b,c,d,e,f,g,h){var t,s,r,q,p=new V.Y(c,d),o=b.c,n=b.a
if(c<n){o+=n-c
n=c}else if(c>n+o)o=c-n
t=b.d
s=b.b
if(d<s){t+=s-d
s=d}else if(d>s+t)t=d-s
r=new V.da(n,s,o,t)
q=V.ey(e,f,g,h)
if(!r.m(0,q)){a.i("Unexpected result from expand:\n"+("   Original: "+b.h(0)+"\n")+("   Point:    "+p.h(0)+"\n")+("   Expected: "+q.h(0)+"\n")+("   Result:   "+r.h(0)+"\n"),"error_log")
a.j()}else a.i(b.h(0)+" + "+p.h(0)+" => "+r.h(0)+"\n","info_log")
return r},
pG:function(a){a.q(0,"Region3 Point Expand Test",new M.kW())},
dD:function(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o,n=new V.p(c,d,e),m=b.d,l=b.a
if(c<l){m+=l-c
l=c}else if(c>l+m)m=c-l
t=b.e
s=b.b
if(d<s){t+=s-d
s=d}else if(d>s+t)t=d-s
r=b.f
q=b.c
if(e<q){r+=q-e
q=e}else if(e>q+r)r=e-q
p=new V.db(l,s,q,m,t,r)
o=V.z(f,g,h,i,j,k)
if(!p.m(0,o)){a.i("Unexpected result from expand:\n"+("   Original: "+b.h(0)+"\n")+("   Point:    "+n.h(0)+"\n")+("   Expected: "+o.h(0)+"\n")+("   Result:   "+p.h(0)+"\n"),"error_log")
a.j()}else a.i("["+b.h(0)+"] + ["+n.h(0)+"] => ["+p.h(0)+"]\n","info_log")
return p},
pH:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.kX())},
q9:function(a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0="error_log",a1="mousemove",a2=F.lr()
for(t=0;t<15;++t)a2.a.ej(a6[t].a)
s=E.m4(a)
s.sbR(0,a2)
s.saL(U.m1(a4))
r=new P.bK("")
q=new O.hp(r)
q.b=[]
p=new M.e2()
p.a=!0
o=O.m0()
p.e=o
o.bQ(p.gdq(),p.gds())
p.y=p.x=p.r=p.f=null
n=X.o_(a)
m=new X.eu()
m.c=1.0471975511965976
m.d=0.1
m.e=2000
m.saL(a)
o=m.c
$.A().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){m.c=1.0471975511965976
o=new D.ae("fov",o,1.0471975511965976)
o.b=!0
m.ar(o)}o=m.d
$.A().toString
if(!(Math.abs(o-0.1)<1e-9)){m.d=0.1
o=new D.ae("near",o,0.1)
o.b=!0
m.ar(o)}o=m.e
$.A().toString
if(!(Math.abs(o-2000)<1e-9)){m.e=2000
o=new D.ae("far",o,2000)
o.b=!0
m.ar(o)}o=p.b
if(o!==m){if(o!=null)o.gL().B(0,p.gac())
l=p.b
p.b=m
m.gL().t(0,p.gac())
o=new D.ae("camera",l,p.b)
o.b=!0
p.ag(o)}o=p.c
if(o!==n){if(o!=null)o.gL().B(0,p.gac())
l=p.c
p.c=n
n.gL().t(0,p.gac())
o=new D.ae("target",l,p.c)
o.b=!0
p.ag(o)}p.scC(a)
p.scC(q)
p.e.t(0,s)
p.b.saL(U.m1(a5))
o=document
k=o.createElement("canvas")
j=new E.eO()
i=u.z
h=C.K.cN(k,"webgl2",P.o9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],i,i))
if(h==null)H.Z(P.a_("Failed to get the rendering context for WebGL."))
j.b=k
j.c=h
j.e=E.ot(h,k)
h.getParameter(3379)
h.getParameter(34076)
i=new X.eZ(k)
g=new X.hO()
g.d=P.cW(u.e)
i.b=g
g=new X.i0(i)
g.f=0
g.r=V.d8()
g.x=V.d8()
g.ch=g.Q=1
i.c=g
g=new X.hT(i)
g.r=0
g.x=V.d8()
g.cy=g.cx=g.ch=g.Q=1
i.d=g
g=new X.iK(i)
g.f=V.d8()
g.r=V.d8()
i.e=g
i.x=i.r=i.f=!1
i.y=null
i.z=[]
g=$.m5
if(g==null){f=E.oH()
E.oI()
g=$.m5=new E.jb(f)}i.Q=g.a===C.n?0.16666666666666666:0.005555555555555556
i.z.push(W.a4(o,"contextmenu",i.gdu(),!1))
i.z.push(W.a4(k,"focus",i.gdC(),!1))
i.z.push(W.a4(k,"blur",i.gdl(),!1))
i.z.push(W.a4(o,"keyup",i.gdG(),!1))
i.z.push(W.a4(o,"keydown",i.gdE(),!1))
i.z.push(W.a4(k,"mousedown",i.gdJ(),!1))
i.z.push(W.a4(k,"mouseup",i.gdN(),!1))
i.z.push(W.a4(k,a1,i.gdL(),!1))
e=i.z
W.hw(k)
W.hw(k)
e.push(W.a4(k,W.hw(k),i.gdP(),!1))
i.z.push(W.a4(o,a1,i.gdw(),!1))
i.z.push(W.a4(o,"mouseup",i.gdA(),!1))
i.z.push(W.a4(o,"pointerlockchange",i.gdR(),!1))
i.z.push(W.a4(k,"touchstart",i.gdX(),!1))
i.z.push(W.a4(k,"touchend",i.gdT(),!1))
i.z.push(W.a4(k,"touchmove",i.gdV(),!1))
j.ch=!0
j.cx=!1
Date.now()
j.db=0
j.c7()
if(!j.ch){j.ch=!1
j.b9()}o=j.d
if(o!==p){if(o!=null)o.gL().B(0,j.gbV())
j.d=p
p.gL().t(0,j.gbV())
j.b9()}j.cv()
o=r.a
a3.i(o.charCodeAt(0)==0?o:o,"info_log")
if(q.b.length!==15){for(d="",t=0;o=q.b,t<o.length;++t)d+="\n   "+o[t].a5(1,3)
for(c="",t=0;t<15;++t)c+="\n   "+a6[t].b.a5(1,3)
a3.i("Unexpected number of results from debugging technique: "+("\n   Expected: "+c)+("\n   Gotten:   "+d+"\n\n"),a0)
a3.j()
a3.j()}else for(t=0;o=q.b,i=o.length,t<i;++t){if(t>=15)return H.e(a6,t)
b=a6[t].b
if(t>=i)return H.e(o,t)
d=o[t]
if(!b.m(0,d)){a3.i("Unexpected result from debugging technique at "+t+": "+("\n   Expected: "+b.h(0))+("\n   Gotten:   "+H.d(d.a)+", "+H.d(d.b)+", "+H.d(d.c)+"\n\n"),a0)
if(!a3.z){a3.z=!0
a3.b.className="test_body body_shown"
a3.aa(0)}}}},
n9:function(){var t,s,r,q,p=document,o=p.createElement("div"),n=new M.iF(o)
n.c=new P.hK(C.M)
t=p.createElement("div")
n.b=t
o.children
o.appendChild(t)
s=p.createElement("div")
s.className="log_checkboxes"
n.aU(s,"Information","info_log")
n.aU(s,"Notice","notice_log")
n.aU(s,"Warning","warning_log")
n.aU(s,"Error","error_log")
o.children
o.appendChild(s)
n.d=new P.aP(Date.now(),!1)
n.e=[]
n.r=n.f=0
n.x=""
M.py(n)
M.pI(n)
M.pC(n)
M.pD(n)
M.pE(n)
M.pF(n)
M.pG(n)
M.pA(n)
M.pH(n)
M.pB(n)
M.pz(n)
t=V.ow("Unit-tests",!1)
r=p.createElement("div")
r.appendChild(o)
q=p.createElement("div")
p=q.style
p.display="block"
p.clear="both"
r.appendChild(q)
t.a.appendChild(r)
t.ek(["\xab[Back to Tests|../]"])},
pI:function(a){a.q(0,"VertexTypes and Groups",new M.kY())
a.q(0,"VertexTypes from Type Groups 1",new M.kZ())
a.q(0,"VertexType from Type Groups 2",new M.l_())},
ah:function(a,b,c,d,e,f){var t,s,r,q="error_log",p=J.b8(b)
a.i("Checking vertex type "+p.h(b)+":\n","info_log")
t=p.h(b)
if(t!==c){a.i("Error: Got the wrong name for a vertex type:\n",q)
a.j()
a.i("   Gotten:   "+t+"\n",q)
a.j()
a.i("   Expected: "+c+"\n",q)
a.j()}s=b.a
if(s!==d){a.i("Error: Got the wrong value for a vertex type:\n",q)
a.j()
a.i("   Gotten:   "+s+"\n",q)
a.j()
a.i("   Expected: "+d+"\n",q)
a.j()}r=(s&$.aq().a)!==0?1:0
if((s&$.ap().a)!==0)++r
if((s&$.ao().a)!==0)++r
if((s&$.ai().a)!==0)++r
if((s&$.aM().a)!==0)++r
if((s&$.aL().a)!==0)++r
if((s&$.aT().a)!==0)++r
if((s&$.ay().a)!==0)++r
if((s&$.ax().a)!==0)++r
if(r!==e){a.i("Error: Got the wrong count for a vertex type:\n",q)
a.j()
a.i("   Gotten:   "+r+"\n",q)
a.j()
a.i("   Expected: "+e+"\n",q)
a.j()}r=(s&$.aq().a)!==0?3:0
if((s&$.ap().a)!==0)r+=3
if((s&$.ao().a)!==0)r+=3
if((s&$.ai().a)!==0)r+=2
if((s&$.aM().a)!==0)r+=3
if((s&$.aL().a)!==0)r+=3
if((s&$.aT().a)!==0)r+=4
if((s&$.ay().a)!==0)++r
if((s&$.ax().a)!==0)r+=4
if(r!==f){a.i("Error: Got the wrong size for a vertex type:\n",q)
a.j()
a.i("   Gotten:   "+r+"\n",q)
a.j()
a.i("   Expected: "+f+"\n",q)
a.j()}},
a6:function(a,b,c,d,e,f){var t,s,r,q,p,o,n="error_log",m="Error: Got the wrong index for a vertex type in a group:\n"
a.i("Checking vertex type "+J.a7(c)+" in "+b.h(0)+":\n","info_log")
t=(b.a&c.a)!==0
if(t!==d){a.i("Error: Got the wrong result from has for a vertex type in a group:\n",n)
a.j()
a.i("   Gotten:   "+t+"\n",n)
a.j()
a.i("   Expected: "+d+"\n",n)
a.j()}s=b.eG(0,c)
if(s!==e){a.i(m,n)
a.j()
a.i("   Gotten:   "+s+"\n",n)
a.j()
a.i("   Expected: "+e+"\n",n)
a.j()}r=d?c:$.lb()
q=b.em(e)
p=J.b8(q)
if(!p.m(q,r)){a.i(m,n)
a.j()
a.i("   Gotten:   "+p.h(q)+"\n",n)
a.j()
a.i("   Expected: "+J.a7(r)+"\n",n)
a.j()}o=b.eM(0,c)
if(o!==f){a.i("Error: Got the wrong offset for a vertex type in a group:\n",n)
a.j()
a.i("   Gotten:   "+o+"\n",n)
a.j()
a.i("   Expected: "+f+"\n",n)
a.j()}},
jU:function jU(){},
jT:function jT(a){this.a=a},
jV:function jV(){},
jS:function jS(a){this.a=a},
jW:function jW(){},
jR:function jR(a){this.a=a},
jX:function jX(){},
jQ:function jQ(a){this.a=a},
jY:function jY(){},
jP:function jP(a){this.a=a},
jZ:function jZ(){},
jO:function jO(a){this.a=a},
k_:function k_(){},
k0:function k0(){},
k2:function k2(a){this.a=a},
k1:function k1(){},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(){},
kd:function kd(){},
ke:function ke(){},
kf:function kf(){},
kg:function kg(){},
kh:function kh(){},
ki:function ki(){},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
km:function km(){},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
kq:function kq(){},
kr:function kr(){},
kw:function kw(){},
kx:function kx(){},
ky:function ky(){},
kz:function kz(){},
kA:function kA(){},
kB:function kB(){},
kC:function kC(){},
kD:function kD(){},
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
kE:function kE(){},
kF:function kF(){},
kG:function kG(){},
kN:function kN(){},
kO:function kO(){},
kP:function kP(){},
kQ:function kQ(){},
kR:function kR(){},
kS:function kS(){},
kT:function kT(){},
kU:function kU(){},
kH:function kH(){},
kI:function kI(){},
kJ:function kJ(){},
kK:function kK(){},
kL:function kL(){},
kM:function kM(){},
kV:function kV(){},
kW:function kW(){},
kX:function kX(){},
a5:function a5(){this.b=this.a=null},
eL:function eL(){},
de:function de(a,b,c,d){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.r=c
_.x=d
_.Q=_.z=_.y=null},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iF:function iF(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
kY:function kY(){},
kZ:function kZ(){},
l_:function l_(){}},F={
n4:function(a,b,c){var t=null,s=F.lr()
F.dB(s,t,b,c,a,1,0,0,1)
F.dB(s,t,b,c,a,0,1,0,3)
F.dB(s,t,b,c,a,0,0,1,2)
F.dB(s,t,b,c,a,-1,0,0,0)
F.dB(s,t,b,c,a,0,-1,0,0)
F.dB(s,t,b,c,a,0,0,-1,3)
s.av()
return s},
jE:function(a){var t=a.a>0?1:0
if(a.b>0)t+=2
return(a.c>0?t+4:t)*2},
dB:function(a,b,c,a0,a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.q(g,f+a2,e+a3)
i.a=d
t=a2-a3
s=a3-a4
r=a4-a2
q=i.b=new V.q(t+a4,s+a2,r+a3)
p=new V.q(t-a4,s-a2,r-a3)
i.c=p
o=i.d=new V.q(h-a4,f-a2,e-a3)
if(g>0){i.d=q
i.b=o
g=q
h=o}else{g=o
h=q}for(e=g,g=h,h=d,f=p,n=0;n<a5;++n,m=e,e=h,h=g,g=f,f=m){i.a=g
i.b=f
i.c=e
i.d=h}l=F.jE(h)
k=F.jE(g)
j=F.q8(a0,a1,new F.jD(i,F.jE(f),F.jE(e),k,l,c),b)
if(j!=null)a.b0(j)},
lO:function(){var t,s,r={}
r.a=t
r.a=null
r.a=new F.l9()
s=F.n4(8,new F.la(r,1),8)
s.ck(new F.f_(),new F.i4())
return s},
q8:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a<1)return null
if(b<1)return null
t=F.lr()
s=[]
for(r=0;r<=b;++r){q=r/b
p=t.a
if(q<0)o=0
else o=q>1?1:q
n=p.ca(new V.bB(o,0,0,1),new V.Y(q,1))
c.$3(n,q,0)
s.push(n.bx(d))}for(r=1;r<=a;++r){m=r/a
for(p=m>1,o=m<0,l=1-m,k=0;k<=b;++k){q=k/b
j=t.a
if(q<0)i=0
else i=q>1?1:q
if(o)h=0
else h=p?1:m
if(o)g=0
else g=p?1:m
n=j.ca(new V.bB(i,h,g,1),new V.Y(q,l))
c.$3(n,q,m)
s.push(n.bx(d))}}t.d.ei(a+1,b+1,s)
return t},
e3:function(a,b,c){var t=new F.hC(),s=a.a
if(s==null)H.Z(P.a_("May not create a face with a first vertex which is not attached to a shape."))
if(s!=b.a||s!=c.a)H.Z(P.a_("May not create a face with vertices attached to different shapes."))
t.e6(a)
t.e7(b)
t.e8(c)
t.a.a.d.b.push(t)
t.a.a.R()
return t},
lr:function(){var t=new F.ih(),s=new F.iV(t)
s.b=!1
s.c=[]
t.a=s
s=new F.ik(t)
s.b=[]
t.b=s
s=new F.ij(t)
s.b=[]
t.c=s
s=new F.ii(t)
s.b=[]
t.d=s
return t},
lx:function(a,b,c,d,e,f,g,h,i){var t,s=null,r=new F.iU(),q=new F.j2()
q.b=[]
r.b=q
q=new F.j_()
q.b=[]
q.c=[]
r.c=q
q=new F.iW()
q.b=[]
q.c=[]
q.d=[]
r.d=q
h=$.ny()
r.e=0
q=$.aq()
t=h.a
r.f=(t&q.a)!==0?d:s
r.r=(t&$.ap().a)!==0?e:s
r.x=(t&$.ao().a)!==0?b:s
r.y=(t&$.ai().a)!==0?f:s
r.z=(t&$.aM().a)!==0?g:s
r.Q=(t&$.nz().a)!==0?c:s
r.ch=(t&$.ay().a)!==0?i:0
r.cx=(t&$.ax().a)!==0?a:s
return r},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
l9:function l9(){},
la:function la(a,b){this.a=a
this.b=b},
hC:function hC(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(){},
ip:function ip(){},
hP:function hP(){this.b=this.a=null},
hQ:function hQ(){},
iP:function iP(){},
i6:function i6(){this.a=null},
ih:function ih(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a){this.a=a
this.b=null},
ij:function ij(a){this.a=a
this.b=null},
ik:function ik(a){this.a=a
this.b=null},
iU:function iU(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j3:function j3(a){this.a=a},
iV:function iV(a){this.a=a
this.c=this.b=null},
iW:function iW(){this.d=this.c=this.b=null},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
j_:function j_(){this.c=this.b=null},
j0:function j0(){},
f_:function f_(){},
j1:function j1(){},
iZ:function iZ(){},
i4:function i4(){},
j2:function j2(){this.b=null}},Q={
me:function(a){if(a<0||a>=64)return new Q.i(0,0)
return new Q.i(C.c.W(a,8)+1,C.c.bN(a,8)+1)},
ls:function(){var t=new Q.iq()
t.d_()
return t},
mx:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=Q.ls(),f=$.aS(),e=$.h7()
f=f.a
e=e.a
if(typeof f!=="number")return f.S()
if(typeof e!=="number")return H.o(e)
t=f|e
s=$.bV().a
if(typeof s!=="number")return H.o(s)
r=1&s
g.u(new Q.i(1,1),new Q.u((t|r)>>>0))
q=$.cC()
q=q.a
if(typeof q!=="number")return q.S()
p=q|e
g.u(new Q.i(1,2),new Q.u((p|r)>>>0))
o=$.ba()
o=o.a
if(typeof o!=="number")return o.S()
n=o|e
g.u(new Q.i(1,3),new Q.u((n|r)>>>0))
m=$.bx()
m=m.a
if(typeof m!=="number")return m.S()
g.u(new Q.i(1,4),new Q.u((m|e|r)>>>0))
l=$.an()
l=l.a
if(typeof l!=="number")return l.S()
g.u(new Q.i(1,5),new Q.u((l|e|r)>>>0))
k=2&s
g.u(new Q.i(1,6),new Q.u((n|k)>>>0))
g.u(new Q.i(1,7),new Q.u((p|k)>>>0))
g.u(new Q.i(1,8),new Q.u((t|k)>>>0))
t=$.cD()
t=t.a
if(typeof t!=="number")return t.S()
e=t|e
g.u(new Q.i(2,1),new Q.u((e|r)>>>0))
g.u(new Q.i(2,2),new Q.u((e|k)>>>0))
p=3&s
g.u(new Q.i(2,3),new Q.u((e|p)>>>0))
n=4&s
g.u(new Q.i(2,4),new Q.u((e|n)>>>0))
j=5&s
g.u(new Q.i(2,5),new Q.u((e|j)>>>0))
i=6&s
g.u(new Q.i(2,6),new Q.u((e|i)>>>0))
h=7&s
g.u(new Q.i(2,7),new Q.u((e|h)>>>0))
s=8&s
g.u(new Q.i(2,8),new Q.u((e|s)>>>0))
e=$.bb()
e=e.a
if(typeof e!=="number")return H.o(e)
t|=e
g.u(new Q.i(7,1),new Q.u((t|r)>>>0))
g.u(new Q.i(7,2),new Q.u((t|k)>>>0))
g.u(new Q.i(7,3),new Q.u((t|p)>>>0))
g.u(new Q.i(7,4),new Q.u((t|n)>>>0))
g.u(new Q.i(7,5),new Q.u((t|j)>>>0))
g.u(new Q.i(7,6),new Q.u((t|i)>>>0))
g.u(new Q.i(7,7),new Q.u((t|h)>>>0))
g.u(new Q.i(7,8),new Q.u((t|s)>>>0))
f|=e
g.u(new Q.i(8,1),new Q.u((f|r)>>>0))
t=q|e
g.u(new Q.i(8,2),new Q.u((t|r)>>>0))
s=o|e
g.u(new Q.i(8,3),new Q.u((s|r)>>>0))
g.u(new Q.i(8,4),new Q.u((m|e|r)>>>0))
g.u(new Q.i(8,5),new Q.u((l|e|r)>>>0))
g.u(new Q.i(8,6),new Q.u((s|k)>>>0))
g.u(new Q.i(8,7),new Q.u((t|k)>>>0))
g.u(new Q.i(8,8),new Q.u((f|k)>>>0))
return g},
S:function(a){var t,s,r,q,p,o,n,m,l,k,j=Q.ls(),i=new H.a8(u.E),h=Q.oA(a)
if(h.a!==8||h.b!==8)return null
for(t=0;t<8;t=s)for(s=t+1,r=(s-1)*8,q=0;q<8;++q){p=Q.mz(C.b.fg(h.cM(t,q))).a
o=$.U().a
if(p!=o){n=$.bV().a
if(typeof p!=="number")return p.C()
if(typeof n!=="number")return H.o(n)
if((p&n)>>>0!==o){o=$.h8().a
if(typeof o!=="number")return H.o(o)
i.p(0,(p&o)>>>0,!0)}m=r+(q+1-1)
o=j.a
if(m<0||m>=o.length)return H.e(o,m)
o[m]=p}}for(l=0;l<64;++l){r=j.a
if(l>=r.length)return H.e(r,l)
r=r[l]
p=$.U().a
if(r!=p){o=$.bV().a
if(typeof r!=="number")return r.C()
if(typeof o!=="number")return H.o(o)
p=(r&o)>>>0===p}else p=!1
if(p)for(k=1;k<64;++k){if(typeof r!=="number")return r.S()
p=(r|k)>>>0
o=$.h8().a
if(typeof o!=="number")return H.o(o)
o=(p&o)>>>0
n=i.k(0,o)
if(!(n==null?!1:n)){i.p(0,o,!0)
r=j.a
if(l>=r.length)return H.e(r,l)
r[l]=p
break}}}return j},
lu:function(a,b){var t,s=new Q.iw(a,b)
s.d=!1
t=new Array(a*b)
t.fixed$length=Array
s.c=t
return s},
oA:function(a){var t,s,r,q,p,o,n=[]
for(t=0,s=0;s<8;++s){r=a[s].split("|")
q=r.length
if(q>t)t=q
n.push(r)}p=Q.lu(8,t)
for(s=0;s<n.length;++s){r=n[s]
for(o=0;o<r.length;++o)p.aR(s,o,r[o])}return p},
ak:function(a){return new Q.u(a)},
oB:function(a){switch(a){case"W":return $.bb()
case"B":return $.h7()
default:return $.U()}},
oC:function(a){switch(a){case"P":return $.cD()
case"R":return $.aS()
case"H":return $.cC()
case"B":return $.ba()
case"Q":return $.an()
case"K":return $.bx()
default:return $.U()}},
mz:function(a){var t,s,r,q,p,o
if(a.length<1)return $.U()
t=$.U()
if(a[0]==="+"){s=$.by()
r=t.a
s=s.a
if(typeof r!=="number")return r.S()
if(typeof s!=="number")return H.o(s)
q=new Q.u((r|s)>>>0)
a=C.b.cQ(a,1)}else q=t
s=a.length
if(s<2)return t
r=Q.oB(a[0])
p=Q.oC(a[1])
r=r.a
p=p.a
if(typeof r!=="number")return r.S()
if(typeof p!=="number")return H.o(p)
o=q.a
if(typeof o!=="number")return o.S()
p=(o|r|p)>>>0
t=new Q.u(p)
if(s>2){s=P.q_(a[2])
r=$.bV().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
t=new Q.u((p|s&r)>>>0)}return t},
i:function i(a,b){this.a=a
this.b=b},
av:function av(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iq:function iq(){this.c=this.a=null},
ir:function ir(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
u:function u(a){this.a=a}},B={
nM:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
nQ:function(a){var t=new B.hi(a)
t.cW(a)
return t},
mF:function(a,b){var t=new B.j4(a,b)
t.d0(a,b)
return t},
aN:function aN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hh:function hh(){this.b=this.a=null},
hi:function hi(a){var _=this
_.b=_.a=null
_.c=a
_.e=_.d=null},
hj:function hj(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hE:function hE(){this.b=this.a=null},
j4:function j4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null}}
var w=[C,H,J,P,W,K,L,O,Y,E,Z,V,D,X,U,M,F,Q,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lo.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gU:function(a){return H.d9(a)},
h:function(a){return"Instance of '"+H.d(H.i8(a))+"'"}}
J.ea.prototype={
h:function(a){return String(a)},
gU:function(a){return a?519018:218159},
$ib7:1}
J.c5.prototype={
m:function(a,b){return null==b},
h:function(a){return"null"},
gU:function(a){return 0},
$ia3:1}
J.bE.prototype={
gU:function(a){return 0},
h:function(a){return String(a)}}
J.ev.prototype={}
J.bN.prototype={}
J.aQ.prototype={
h:function(a){var t=a[$.nj()]
if(t==null)return this.cU(a)
return"JavaScript function for "+H.d(J.a7(t))}}
J.at.prototype={
t:function(a,b){if(!!a.fixed$length)H.Z(P.B("add"))
a.push(b)},
bF:function(a,b){if(!!a.fixed$length)H.Z(P.B("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ex(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var t
if(!!a.fixed$length)H.Z(P.B("remove"))
for(t=0;t<a.length;++t)if(J.t(a[t],b)){a.splice(t,1)
return!0}return!1},
a3:function(a,b){var t,s
if(!!a.fixed$length)H.Z(P.B("addAll"))
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.G)(b),++s)a.push(b[s])},
N:function(a,b){var t,s=a.length
for(t=0;t<s;++t){b.$1(a[t])
if(a.length!==s)throw H.c(P.c0(a))}},
A:function(a,b){var t,s,r=P.mc(a.length,"",!1)
for(t=0;t<a.length;++t){s=H.d(a[t])
if(t>=r.length)return H.e(r,t)
r[t]=s}return r.join(b)},
eI:function(a){return this.A(a,"")},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
geD:function(a){if(a.length>0)return a[0]
throw H.c(H.ll())},
gbA:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ll())},
cc:function(a,b){var t,s=a.length
for(t=0;t<s;++t){if(b.$1(a[t]))return!0
if(a.length!==s)throw H.c(P.c0(a))}return!1},
H:function(a,b){var t
for(t=0;t<a.length;++t)if(J.t(a[t],b))return!0
return!1},
h:function(a){return P.lk(a,"[","]")},
gO:function(a){return new J.aU(a,a.length)},
gU:function(a){return H.d9(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.Z(P.B("set length"))
a.length=b},
k:function(a,b){if(!H.cv(b))throw H.c(H.bS(a,b))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
return a[b]},
p:function(a,b,c){if(!!a.immutable$list)H.Z(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
a[b]=c},
$ij:1,
$if:1,
$im:1}
J.eb.prototype={}
J.aU.prototype={
gK:function(a){return this.d},
w:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.c(H.G(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.bD.prototype={
ax:function(a,b){var t
if(typeof b!="number")throw H.c(H.bR(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaY(b)
if(this.gaY(a)===t)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY:function(a){return a===0?1/a<0:a<0},
aG:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.B(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.B(""+a+".round()"))},
b4:function(a,b){var t
if(b>20)throw H.c(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaY(a))return"-"+t
return t},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gU:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
bN:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
W:function(a,b){return(a|0)===a?a/b|0:this.ec(a,b)},
ec:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.B("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
aW:function(a,b){var t
if(a>0)t=this.ea(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ea:function(a,b){return b>31?0:a>>>b},
$iad:1,
$ia2:1}
J.cV.prototype={$ix:1}
J.cU.prototype={}
J.aY.prototype={
aw:function(a,b){if(b<0)throw H.c(H.bS(a,b))
if(b>=a.length)H.Z(H.bS(a,b))
return a.charCodeAt(b)},
aq:function(a,b){if(b>=a.length)throw H.c(H.bS(a,b))
return a.charCodeAt(b)},
eJ:function(a,b,c){var t,s,r=null,q=b.length
if(c>q)throw H.c(P.b_(c,0,q,r,r))
t=a.length
if(c+t>q)return r
for(s=0;s<t;++s)if(this.aq(b,c+s)!==this.aq(a,s))return r
return new H.ix(c,a)},
G:function(a,b){if(typeof b!="string")throw H.c(P.lf(b,null,null))
return a+b},
bS:function(a,b){var t
if(typeof b=="string"){t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)}return J.nI(b,a,0)!=null},
aT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ex(b,null))
if(b>c)throw H.c(P.ex(b,null))
if(c>a.length)throw H.c(P.ex(c,null))
return a.substring(b,c)},
cQ:function(a,b){return this.aT(a,b,null)},
fd:function(a){return a.toLowerCase()},
fg:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.aq(q,0)===133){t=J.o7(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.aw(q,s)===133?J.ln(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
fh:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.aw(t,r)===133)s=J.ln(t,r)}else{s=J.ln(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
F:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
a7:function(a,b){var t=b-a.length
if(t<=0)return a
return this.F(" ",t)+a},
b1:function(a,b){var t=b-a.length
if(t<=0)return a
return a+this.F(" ",t)},
ex:function(a,b,c){var t=a.length
if(c>t)throw H.c(P.b_(c,0,t,null,null))
return H.ne(a,b,c)},
H:function(a,b){return this.ex(a,b,0)},
ax:function(a,b){var t
if(typeof b!="string")throw H.c(H.bR(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
h:function(a){return a},
gU:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gl:function(a){return a.length},
$iQ:1}
H.X.prototype={
gl:function(a){return this.a.length},
k:function(a,b){return C.b.aw(this.a,b)}}
H.j.prototype={}
H.cY.prototype={
gO:function(a){return new H.bH(this,this.gl(this))},
b6:function(a,b){return this.cT(0,b)}}
H.bH.prototype={
gK:function(a){var t=this.d
return t},
w:function(){var t,s=this,r=s.a,q=J.bT(r),p=q.gl(r)
if(s.b!=p)throw H.c(P.c0(r))
t=s.c
if(typeof p!=="number")return H.o(p)
if(t>=p){s.d=null
return!1}s.d=q.I(r,t);++s.c
return!0}}
H.c6.prototype={
gO:function(a){return new H.d_(J.bz(this.a),this.b)},
gl:function(a){return J.bX(this.a)}}
H.cL.prototype={$ij:1}
H.d_.prototype={
w:function(){var t=this,s=t.b
if(s.w()){t.a=t.c.$1(s.gK(s))
return!0}t.a=null
return!1},
gK:function(a){var t=this.a
return t}}
H.d0.prototype={
gl:function(a){return J.bX(this.a)},
I:function(a,b){return this.b.$1(J.nF(this.a,b))}}
H.cp.prototype={
gO:function(a){return new H.f1(J.bz(this.a),this.b)}}
H.f1.prototype={
w:function(){var t,s
for(t=this.a,s=this.b;t.w();)if(s.$1(t.gK(t)))return!0
return!1},
gK:function(a){var t=this.a
return t.gK(t)}}
H.cO.prototype={}
H.eX.prototype={
p:function(a,b,c){throw H.c(P.B("Cannot modify an unmodifiable list"))}}
H.co.prototype={}
H.iN.prototype={
a6:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.ep.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.ec.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.d(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.d(s.a)+")"
return r+q+"' on '"+t+"' ("+H.d(s.a)+")"}}
H.eW.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.i5.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.du.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$ib1:1}
H.c_.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.nh(s==null?"unknown":s)+"'"},
gfj:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iz.prototype={}
H.it.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.nh(t)+"'"}}
H.cE.prototype={
m:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.cE))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gU:function(a){var t,s=this.c
if(s==null)t=H.d9(this.a)
else t=typeof s!=="object"?J.az(s):H.d9(s)
return(t^H.d9(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.i8(t))+"'")}}
H.ez.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.a8.prototype={
gl:function(a){return this.a},
ga0:function(a){return new H.bg(this)},
gfi:function(a){return H.ob(new H.bg(this),new H.hN(this))},
k:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.bh(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.bh(q,b)
r=s==null?o:s.b
return r}else return p.eH(b)},
eH:function(a){var t,s,r=this.d
if(r==null)return null
t=this.c3(r,J.az(a)&0x3ffffff)
s=this.ci(t,a)
if(s<0)return null
return t[s].b},
p:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.bX(t==null?n.b=n.bk():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.bX(s==null?n.c=n.bk():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bk()
q=J.az(b)&0x3ffffff
p=n.c3(r,q)
if(p==null)n.br(r,q,[n.bl(b,c)])
else{o=n.ci(p,b)
if(o>=0)p[o].b=c
else p.push(n.bl(b,c))}}},
N:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.c(P.c0(t))
s=s.c}},
bX:function(a,b,c){var t=this.bh(a,b)
if(t==null)this.br(a,b,this.bl(b,c))
else t.b=c},
dj:function(){this.r=this.r+1&67108863},
bl:function(a,b){var t,s=this,r=new H.hR(a,b)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.d=t
s.f=t.c=r}++s.a
s.dj()
return r},
ci:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.t(a[s].a,b))return s
return-1},
h:function(a){return P.mf(this)},
bh:function(a,b){return a[b]},
c3:function(a,b){return a[b]},
br:function(a,b,c){a[b]=c},
dd:function(a,b){delete a[b]},
bk:function(){var t="<non-identifier-key>",s=Object.create(null)
this.br(s,t,s)
this.dd(s,t)
return s}}
H.hN.prototype={
$1:function(a){return this.a.k(0,a)},
$S:function(){return H.pd(this.a).a2("2(1)")}}
H.hR.prototype={}
H.bg.prototype={
gl:function(a){return this.a.a},
gO:function(a){var t=this.a,s=new H.ef(t,t.r)
s.c=t.e
return s}}
H.ef.prototype={
gK:function(a){return this.d},
w:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.c(P.c0(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
H.l3.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.l4.prototype={
$2:function(a,b){return this.a(a,b)}}
H.l5.prototype={
$1:function(a){return this.a(a)}}
H.hM.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ix.prototype={}
H.d4.prototype={}
H.cg.prototype={
gl:function(a){return a.length},
$iy:1}
H.bI.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]},
p:function(a,b,c){H.b6(b,a,a.length)
a[b]=c},
$ij:1,
$if:1,
$im:1}
H.d3.prototype={
p:function(a,b,c){H.b6(b,a,a.length)
a[b]=c},
$ij:1,
$if:1,
$im:1}
H.ej.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.ek.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.el.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.em.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.en.prototype={
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.d5.prototype={
gl:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.eo.prototype={
gl:function(a){return a.length},
k:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dl.prototype={}
H.dm.prototype={}
H.dn.prototype={}
H.dp.prototype={}
H.aD.prototype={
a2:function(a){return H.fR(v.typeUniverse,this,a)},
bY:function(a){return H.p1(v.typeUniverse,this,a)}}
H.fe.prototype={}
H.fa.prototype={
h:function(a){return this.a}}
H.dy.prototype={}
P.j6.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:8}
P.j5.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
P.j7.prototype={
$0:function(){this.a.$0()}}
P.j8.prototype={
$0:function(){this.a.$0()}}
P.jy.prototype={
d4:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.dI(new P.jz(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))}}
P.jz.prototype={
$0:function(){this.b.$0()}}
P.ct.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.cu.prototype={
gK:function(a){var t=this.c
if(t==null)return this.b
return t.gK(t)},
w:function(){var t,s,r,q,p,o=this
for(;!0;){t=o.c
if(t!=null)if(t.w())return!0
else o.c=null
s=function(a,b,c){var n,m=b
while(true)try{return a(m,n)}catch(l){n=l
m=c}}(o.a,0,1)
if(s instanceof P.ct){r=s.b
if(r===2){q=o.d
if(q==null||q.length===0){o.b=null
return!1}if(0>=q.length)return H.e(q,-1)
o.a=q.pop()
continue}else{t=s.a
if(r===3)throw t
else{p=J.bz(t)
if(p instanceof P.cu){t=o.d
if(t==null)t=o.d=[]
t.push(o.a)
o.a=p.a
continue}else{o.c=p
continue}}}}else{o.b=s
return!0}}return!1}}
P.dv.prototype={
gO:function(a){return new P.cu(this.a())}}
P.hI.prototype={
$0:function(){var t,s,r,q,p
try{this.a.c0(this.b.$0())}catch(r){t=H.am(r)
s=H.bw(r)
q=t
p=s
if(p==null)p=P.lV(q)
this.a.bc(q,p)}}}
P.dg.prototype={
eK:function(a){if((this.c&15)!==6)return!0
return this.b.b.bI(this.d,a.a)},
eF:function(a){var t=this.e,s=this.b.b
if(u.Q.b(t))return s.f7(t,a.a,a.b)
else return s.bI(t,a.a)}}
P.aJ.prototype={
cE:function(a,b,c){var t,s=$.T
if(s!==C.f)b=b!=null?P.mY(b,s):b
t=new P.aJ($.T,c.a2("aJ<0>"))
this.ba(new P.dg(t,b==null?1:3,a,b))
return t},
bK:function(a,b){return this.cE(a,null,b)},
ba:function(a){var t,s=this,r=s.a
if(r<=1){a.a=s.c
s.c=a}else{if(r===2){r=s.c
t=r.a
if(t<4){r.ba(a)
return}s.a=t
s.c=r.c}P.jH(null,null,s.b,new P.jf(s,a))}},
c6:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=n.c
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){t=n.c
o=t.a
if(o<4){t.c6(a)
return}n.a=o
n.c=t.c}m.a=n.aV(a)
P.jH(null,null,n.b,new P.jj(m,n))}},
bo:function(){var t=this.c
this.c=null
return this.aV(t)},
aV:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
c0:function(a){var t,s=this,r=s.$ti
if(r.a2("cQ<1>").b(a))if(r.b(a))P.mH(a,s)
else P.oJ(a,s)
else{t=s.bo()
s.a=4
s.c=a
P.dh(s,t)}},
bc:function(a,b){var t=this,s=t.bo(),r=P.hc(a,b)
t.a=8
t.c=r
P.dh(t,s)},
$icQ:1}
P.jf.prototype={
$0:function(){P.dh(this.a,this.b)}}
P.jj.prototype={
$0:function(){P.dh(this.b,this.a.a)}}
P.jg.prototype={
$1:function(a){var t=this.a
t.a=0
t.c0(a)},
$S:8}
P.jh.prototype={
$2:function(a,b){this.a.bc(a,b)},
$S:15}
P.ji.prototype={
$0:function(){this.a.bc(this.b,this.c)}}
P.jm.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.cA(r.d)}catch(q){t=H.am(q)
s=H.bw(q)
if(n.c){r=n.b.a.c.a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=n.b.a.c
else p.c=P.hc(t,s)
p.b=!0
return}if(m instanceof P.aJ&&m.a>=4){if(m.a===8){r=n.a
r.c=m.c
r.b=!0}return}if(u.c.b(m)){o=n.b.a
r=n.a
r.c=m.bK(new P.jn(o),u.z)
r.b=!1}}}
P.jn.prototype={
$1:function(a){return this.a},
$S:16}
P.jl.prototype={
$0:function(){var t,s,r,q,p
try{r=this.a
q=r.a
r.c=q.b.b.bI(q.d,this.b)}catch(p){t=H.am(p)
s=H.bw(p)
r=this.a
r.c=P.hc(t,s)
r.b=!0}}}
P.jk.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=l.a.a.c
q=l.b
if(q.a.eK(t)&&q.a.e!=null){q.c=q.a.eF(t)
q.b=!1}}catch(p){s=H.am(p)
r=H.bw(p)
q=l.a.a.c
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.hc(s,r)
m.b=!0}}}
P.f2.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.dR.prototype={
h:function(a){return H.d(this.a)},
$iM:1,
gaS:function(){return this.b}}
P.jC.prototype={}
P.jG.prototype={
$0:function(){var t=H.c(this.a)
t.stack=J.a7(this.b)
throw t}}
P.jq.prototype={
f9:function(a){var t,s,r,q=null
try{if(C.f===$.T){a.$0()
return}P.mZ(q,q,this,a)}catch(r){t=H.am(r)
s=H.bw(r)
P.jF(q,q,this,t,s)}},
fb:function(a,b){var t,s,r,q=null
try{if(C.f===$.T){a.$1(b)
return}P.n_(q,q,this,a,b)}catch(r){t=H.am(r)
s=H.bw(r)
P.jF(q,q,this,t,s)}},
fc:function(a,b){return this.fb(a,b,u.z)},
eq:function(a){return new P.js(this,a)},
ep:function(a){return this.eq(a,u.z)},
bu:function(a){return new P.jr(this,a)},
er:function(a,b){return new P.jt(this,a,b)},
f6:function(a){if($.T===C.f)return a.$0()
return P.mZ(null,null,this,a)},
cA:function(a){return this.f6(a,u.z)},
fa:function(a,b){if($.T===C.f)return a.$1(b)
return P.n_(null,null,this,a,b)},
bI:function(a,b){return this.fa(a,b,u.z,u.z)},
f8:function(a,b,c){if($.T===C.f)return a.$2(b,c)
return P.pq(null,null,this,a,b,c)},
f7:function(a,b,c){return this.f8(a,b,c,u.z,u.z,u.z)}}
P.js.prototype={
$0:function(){return this.a.cA(this.b)}}
P.jr.prototype={
$0:function(){return this.a.f9(this.b)}}
P.jt.prototype={
$1:function(a){return this.a.fc(this.b,a)},
$S:function(){return this.c.a2("~(0)")}}
P.di.prototype={
gO:function(a){var t=new P.fl(this,this.r)
t.c=this.e
return t},
gl:function(a){return this.a},
H:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.da(b)
return s}},
da:function(a){var t=this.d
if(t==null)return!1
return this.bg(t[this.bd(a)],a)>=0},
t:function(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.bZ(t==null?r.b=P.lz():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.bZ(s==null?r.c=P.lz():s,b)}else return r.d5(0,b)},
d5:function(a,b){var t,s,r=this,q=r.d
if(q==null)q=r.d=P.lz()
t=r.bd(b)
s=q[t]
if(s==null)q[t]=[r.bb(b)]
else{if(r.bg(s,b)>=0)return!1
s.push(r.bb(b))}return!0},
B:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.e_(this.c,b)
else return this.dZ(0,b)},
dZ:function(a,b){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bd(b)
s=o[t]
r=p.bg(s,b)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.c9(q)
return!0},
bZ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bb(b)
return!0},
e_:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c9(t)
delete a[b]
return!0},
c_:function(){this.r=1073741823&this.r+1},
bb:function(a){var t,s=this,r=new P.jp(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.c_()
return r},
c9:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.c_()},
bd:function(a){return J.az(a)&1073741823},
bg:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.t(a[s].a,b))return s
return-1}}
P.jp.prototype={}
P.fl.prototype={
gK:function(a){return this.d},
w:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.c(P.c0(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
P.cT.prototype={}
P.cX.prototype={$ij:1,$if:1,$im:1}
P.I.prototype={
gO:function(a){return new H.bH(a,this.gl(a))},
I:function(a,b){return this.k(a,b)},
h:function(a){return P.lk(a,"[","]")}}
P.eg.prototype={}
P.hV.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.d(a)
s.a=t+": "
s.a+=H.d(b)},
$S:17}
P.aZ.prototype={
N:function(a,b){var t,s
for(t=J.bz(this.ga0(a));t.w();){s=t.gK(t)
b.$2(s,this.k(a,s))}},
gl:function(a){return J.bX(this.ga0(a))},
h:function(a){return P.mf(a)}}
P.dq.prototype={
a3:function(a,b){var t
for(t=J.bz(b);t.w();)this.t(0,t.gK(t))},
h:function(a){return P.lk(this,"{","}")},
$ij:1,
$if:1}
P.dj.prototype={}
P.dW.prototype={}
P.dZ.prototype={}
P.hx.prototype={}
P.hL.prototype={
h:function(a){return this.a}}
P.hK.prototype={
dc:function(a,b,c){var t,s,r,q,p,o,n,m=null
for(t=a.length,s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=t)return H.e(a,p)
switch(a[p]){case"&":n="&amp;"
break
case'"':n=s?"&quot;":m
break
case"'":n=q?"&#39;":m
break
case"<":n="&lt;"
break
case">":n="&gt;"
break
case"/":n=r?"&#47;":m
break
default:n=m}if(n!=null){if(o==null)o=new P.bK("")
if(p>b)o.a+=C.b.aT(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=C.b.aT(a,b,c)
t=o.a
return t.charCodeAt(0)==0?t:t}}
P.iR.prototype={}
P.iS.prototype={
ey:function(a){var t,s,r,q=null,p=P.lq(0,q,a.length)
if(p==null)throw H.c(new P.cj(q,q,!1,q,q,"Invalid range"))
t=p-0
if(t===0)return new Uint8Array(0)
s=new Uint8Array(t*3)
r=new P.jA(s)
if(r.df(a,0,p)!==p){C.b.aw(a,p-1)
r.bt()}return new Uint8Array(s.subarray(0,H.p7(0,r.b,s.length)))}}
P.jA.prototype={
bt:function(){var t=this,s=t.c,r=t.b,q=t.b=r+1,p=s.length
if(r>=p)return H.e(s,r)
s[r]=239
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=191
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=189},
ef:function(a,b){var t,s,r,q,p,o=this
if((b&64512)===56320){t=65536+((a&1023)<<10)|b&1023
s=o.c
r=o.b
q=o.b=r+1
p=s.length
if(r>=p)return H.e(s,r)
s[r]=240|t>>>18
r=o.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|t>>>12&63
q=o.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|t>>>6&63
o.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|t&63
return!0}else{o.bt()
return!1}},
df:function(a,b,c){var t,s,r,q,p,o,n,m=this
if(b!==c&&(C.b.aw(a,c-1)&64512)===55296)--c
for(t=m.c,s=t.length,r=b;r<c;++r){q=C.b.aq(a,r)
if(q<=127){p=m.b
if(p>=s)break
m.b=p+1
t[p]=q}else{p=q&64512
if(p===55296){if(m.b+4>s)break
o=r+1
if(m.ef(q,C.b.aq(a,o)))r=o}else if(p===56320){if(m.b+3>s)break
m.bt()}else if(q<=2047){p=m.b
n=p+1
if(n>=s)break
m.b=n
if(p>=s)return H.e(t,p)
t[p]=192|q>>>6
m.b=n+1
t[n]=128|q&63}else{p=m.b
if(p+2>=s)break
n=m.b=p+1
if(p>=s)return H.e(t,p)
t[p]=224|q>>>12
p=m.b=n+1
if(n>=s)return H.e(t,n)
t[n]=128|q>>>6&63
m.b=p+1
if(p>=s)return H.e(t,p)
t[p]=128|q&63}}}return r}}
P.b7.prototype={}
P.aP.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a&&!0},
ax:function(a,b){return C.c.ax(this.a,b.a)},
gU:function(a){var t=this.a
return(t^C.c.aW(t,30))&1073741823},
h:function(a){var t=this,s=P.nW(H.om(t)),r=P.e0(H.ok(t)),q=P.e0(H.og(t)),p=P.e0(H.oh(t)),o=P.e0(H.oj(t)),n=P.e0(H.ol(t)),m=P.nX(H.oi(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.ad.prototype={}
P.c1.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.c1&&this.a===b.a},
gU:function(a){return C.c.gU(this.a)},
ax:function(a,b){return C.c.ax(this.a,b.a)},
h:function(a){var t,s,r,q=new P.hu(),p=this.a
if(p<0)return"-"+new P.c1(0-p).h(0)
t=q.$1(C.c.W(p,6e7)%60)
s=q.$1(C.c.W(p,1e6)%60)
r=new P.ht().$1(p%1e6)
return""+C.c.W(p,36e8)+":"+H.d(t)+":"+H.d(s)+"."+H.d(r)}}
P.ht.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.hu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.M.prototype={
gaS:function(){return H.bw(this.$thrownJsError)}}
P.dQ.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.hz(t)
return"Assertion failed"}}
P.eq.prototype={
h:function(a){return"Throw of null."}}
P.ar.prototype={
gbf:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbe:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gbf()+p+n
if(!r.a)return m
t=r.gbe()
s=P.hz(r.b)
return m+t+": "+s}}
P.cj.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.d(r):""
else if(r==null)t=": Not greater than or equal to "+H.d(s)
else if(r>s)t=": Not in inclusive range "+H.d(s)+".."+H.d(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.d(s)
return t}}
P.e8.prototype={
gbf:function(){return"RangeError"},
gbe:function(){var t,s=this.b
if(typeof s!=="number")return s.a9()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gl:function(a){return this.f}}
P.eY.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.eV.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.cl.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dX.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hz(t)+"."}}
P.et.prototype={
h:function(a){return"Out of Memory"},
gaS:function(){return null},
$iM:1}
P.dc.prototype={
h:function(a){return"Stack Overflow"},
gaS:function(){return null},
$iM:1}
P.e_.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jd.prototype={
h:function(a){return"Exception: "+this.a}}
P.hF.prototype={
h:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r=="string"){if(r.length>78)r=C.b.aT(r,0,75)+"..."
return s+"\n"+r}else return s}}
P.hH.prototype={}
P.x.prototype={}
P.f.prototype={
b6:function(a,b){return new H.cp(this,b)},
gl:function(a){var t,s=this.gO(this)
for(t=0;s.w();)++t
return t},
gan:function(a){var t,s=this.gO(this)
if(!s.w())throw H.c(H.ll())
t=s.gK(s)
if(s.w())throw H.c(H.o3())
return t},
I:function(a,b){var t,s,r
P.or(b,"index")
for(t=this.gO(this),s=0;t.w();){r=t.gK(t)
if(b===s)return r;++s}throw H.c(P.R(b,this,"index",null,s))},
h:function(a){return P.o2(this,"(",")")}}
P.e9.prototype={}
P.m.prototype={$ij:1,$if:1}
P.cZ.prototype={}
P.a3.prototype={
gU:function(a){return P.F.prototype.gU.call(C.P,this)},
h:function(a){return"null"}}
P.a2.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
m:function(a,b){return this===b},
gU:function(a){return H.d9(this)},
h:function(a){return"Instance of '"+H.d(H.i8(this))+"'"},
toString:function(){return this.h(this)}}
P.b1.prototype={}
P.fG.prototype={
h:function(a){return""},
$ib1:1}
P.Q.prototype={}
P.bK.prototype={
gl:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.n.prototype={}
W.h9.prototype={
gl:function(a){return a.length}}
W.dO.prototype={
h:function(a){return String(a)}}
W.dP.prototype={
h:function(a){return String(a)}}
W.bY.prototype={$ibY:1}
W.dU.prototype={}
W.bA.prototype={$ibA:1}
W.cF.prototype={
cN:function(a,b,c){var t=a.getContext(b,P.pN(c))
return t}}
W.aO.prototype={
gl:function(a){return a.length}}
W.hk.prototype={
gl:function(a){return a.length}}
W.O.prototype={$iO:1}
W.cH.prototype={
gl:function(a){return a.length}}
W.hl.prototype={}
W.aA.prototype={}
W.aW.prototype={}
W.hm.prototype={
gl:function(a){return a.length}}
W.hn.prototype={
gl:function(a){return a.length}}
W.ho.prototype={
gl:function(a){return a.length}}
W.cI.prototype={}
W.hq.prototype={
h:function(a){return String(a)}}
W.cJ.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.cK.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaA(a))+" x "+H.d(this.gay(a))},
m:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.h5(b)
t=a.left==t.gaZ(b)&&a.top==t.gcJ(b)&&this.gaA(a)==t.gaA(b)&&this.gay(a)==t.gay(b)}else t=!1
return t},
gU:function(a){return W.mK(J.az(a.left),J.az(a.top),J.az(this.gaA(a)),J.az(this.gay(a)))},
gay:function(a){return a.height},
gaZ:function(a){return a.left},
gcJ:function(a){return a.top},
gaA:function(a){return a.width},
$iaC:1}
W.e1.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.hr.prototype={
gl:function(a){return a.length}}
W.je.prototype={
gl:function(a){return this.a.length},
k:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.e(t,b)
return this.$ti.c.a(t[b])},
p:function(a,b,c){throw H.c(P.B("Cannot modify list"))}}
W.K.prototype={
gen:function(a){return new W.ja(a)},
h:function(a){return a.localName},
a4:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.m3
if(t==null){t=[]
s=new W.d7(t)
t.push(W.mI(null))
t.push(W.mO())
$.m3=s
d=s}else d=t
t=$.m2
if(t==null){t=new W.fS(d)
$.m2=t
c=t}else{t.a=d
c=t}}if($.bd==null){t=document
s=t.implementation.createHTMLDocument("")
$.bd=s
$.li=s.createRange()
s=$.bd.createElement("base")
u.y.a(s)
s.href=t.baseURI
$.bd.head.appendChild(s)}t=$.bd
if(t.body==null){s=t.createElement("body")
t.body=u.t.a(s)}t=$.bd
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
r=t.createElement(a.tagName)
$.bd.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.H(C.S,a.tagName)){$.li.selectNodeContents(r)
t=$.li
q=t.createContextualFragment(b)}else{r.innerHTML=b
q=$.bd.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}if(r!==$.bd.body)J.lT(r)
c.bP(q)
document.adoptNode(q)
return q},
ez:function(a,b,c){return this.a4(a,b,c,null)},
cP:function(a,b){a.textContent=null
a.appendChild(this.a4(a,b,null,null))},
gcB:function(a){return a.tagName},
$iK:1}
W.hv.prototype={
$1:function(a){return u.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
eh:function(a,b,c,d){if(c!=null)this.d6(a,b,c,!1)},
d6:function(a,b,c,d){return a.addEventListener(b,H.dI(c,1),!1)},
$ib:1}
W.be.prototype={$ibe:1}
W.e4.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.e5.prototype={
gl:function(a){return a.length}}
W.e6.prototype={
gl:function(a){return a.length}}
W.bf.prototype={$ibf:1}
W.hJ.prototype={
gl:function(a){return a.length}}
W.bC.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.c4.prototype={$ic4:1}
W.bF.prototype={$ibF:1}
W.hS.prototype={
h:function(a){return String(a)}}
W.hW.prototype={
gl:function(a){return a.length}}
W.hX.prototype={
k:function(a,b){return P.bu(a.get(b))},
N:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga0:function(a){var t=[]
this.N(a,new W.hY(t))
return t},
gl:function(a){return a.size}}
W.hY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hZ.prototype={
k:function(a,b){return P.bu(a.get(b))},
N:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga0:function(a){var t=[]
this.N(a,new W.i_(t))
return t},
gl:function(a){return a.size}}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bh.prototype={$ibh:1}
W.ei.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.au.prototype={$iau:1}
W.af.prototype={
gan:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.c(P.lt("No elements"))
if(s>1)throw H.c(P.lt("More than one element"))
t=t.firstChild
t.toString
return t},
a3:function(a,b){var t,s,r,q=b.a,p=this.a
if(q!==p)for(t=q.childNodes.length,s=0;s<t;++s){r=q.firstChild
r.toString
p.appendChild(r)}return},
p:function(a,b,c){var t=this.a,s=t.childNodes
if(b<0||b>=s.length)return H.e(s,b)
t.replaceChild(c,s[b])},
gO:function(a){var t=this.a.childNodes
return new W.cP(t,t.length)},
gl:function(a){return this.a.childNodes.length},
k:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.e(t,b)
return t[b]}}
W.w.prototype={
f1:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
h:function(a){var t=a.nodeValue
return t==null?this.cS(a):t},
$iw:1}
W.d6.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.bj.prototype={
gl:function(a){return a.length},
$ibj:1}
W.ew.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.id.prototype={
k:function(a,b){return P.bu(a.get(b))},
N:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga0:function(a){var t=[]
this.N(a,new W.ie(t))
return t},
gl:function(a){return a.size}}
W.ie.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eA.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.eC.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.bl.prototype={$ibl:1}
W.eD.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.bm.prototype={
gl:function(a){return a.length},
$ibm:1}
W.iu.prototype={
k:function(a,b){return a.getItem(H.lF(b))},
N:function(a,b){var t,s,r
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
r=a.getItem(s)
r.toString
b.$2(s,r)}},
ga0:function(a){var t=[]
this.N(a,new W.iv(t))
return t},
gl:function(a){return a.length}}
W.iv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b2.prototype={$ib2:1}
W.dd.prototype={
a4:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
t=W.nY("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.af(s).a3(0,new W.af(t))
return s}}
W.eJ.prototype={
a4:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.v.a4(t.createElement("table"),b,c,d)
t.toString
t=new W.af(t)
r=t.gan(t)
r.toString
t=new W.af(r)
q=t.gan(t)
s.toString
q.toString
new W.af(s).a3(0,new W.af(q))
return s}}
W.eK.prototype={
a4:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b8(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.v.a4(t.createElement("table"),b,c,d)
t.toString
t=new W.af(t)
r=t.gan(t)
s.toString
r.toString
new W.af(s).a3(0,new W.af(r))
return s}}
W.cm.prototype={$icm:1}
W.b3.prototype={$ib3:1}
W.aF.prototype={$iaF:1}
W.eM.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.eN.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.iI.prototype={
gl:function(a){return a.length}}
W.bn.prototype={$ibn:1}
W.bL.prototype={$ibL:1}
W.eS.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.iL.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.iQ.prototype={
h:function(a){return String(a)}}
W.f0.prototype={
gl:function(a){return a.length}}
W.bq.prototype={
geB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.B("deltaY is not supported"))},
geA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.B("deltaX is not supported"))},
$ibq:1}
W.cq.prototype={
e2:function(a,b){return a.requestAnimationFrame(H.dI(b,1))},
de:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cr.prototype={$icr:1}
W.f4.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.df.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
m:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.h5(b)
t=a.left==t.gaZ(b)&&a.top==t.gcJ(b)&&a.width==t.gaA(b)&&a.height==t.gay(b)}else t=!1
return t},
gU:function(a){return W.mK(J.az(a.left),J.az(a.top),J.az(a.width),J.az(a.height))},
gay:function(a){return a.height},
gaA:function(a){return a.width}}
W.ff.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.dk.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.fA.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.fH.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iy:1,
$if:1,
$im:1}
W.j9.prototype={
N:function(a,b){var t,s,r,q,p
for(t=this.ga0(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.G)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
ga0:function(a){var t,s,r,q,p=this.a.attributes,o=[]
for(t=p.length,s=u.x,r=0;r<t;++r){if(r>=p.length)return H.e(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)o.push(q.name)}return o}}
W.ja.prototype={
k:function(a,b){return this.a.getAttribute(H.lF(b))},
gl:function(a){return this.ga0(this).length}}
W.lj.prototype={}
W.fb.prototype={}
W.jc.prototype={
$1:function(a){return this.a.$1(a)}}
W.ly.prototype={}
W.cs.prototype={
d1:function(a){var t
if($.fg.a===0){for(t=0;t<262;++t)$.fg.p(0,C.R[t],W.pV())
for(t=0;t<12;++t)$.fg.p(0,C.k[t],W.pW())}},
at:function(a){return $.nA().H(0,W.cM(a))},
ad:function(a,b,c){var t=$.fg.k(0,H.d(W.cM(a))+"::"+b)
if(t==null)t=$.fg.k(0,"*::"+b)
if(t==null)return!1
return t.$4(a,b,c,this)},
$iaB:1}
W.P.prototype={
gO:function(a){return new W.cP(a,this.gl(a))}}
W.d7.prototype={
at:function(a){return C.a.cc(this.a,new W.i3(a))},
ad:function(a,b,c){return C.a.cc(this.a,new W.i2(a,b,c))},
$iaB:1}
W.i3.prototype={
$1:function(a){return a.at(this.a)}}
W.i2.prototype={
$1:function(a){return a.ad(this.a,this.b,this.c)}}
W.dr.prototype={
d3:function(a,b,c,d){var t,s,r
this.a.a3(0,c)
t=b.b6(0,new W.jv())
s=b.b6(0,new W.jw())
this.b.a3(0,t)
r=this.c
r.a3(0,C.T)
r.a3(0,s)},
at:function(a){return this.a.H(0,W.cM(a))},
ad:function(a,b,c){var t=this,s=W.cM(a),r=t.c
if(r.H(0,H.d(s)+"::"+b))return t.d.el(c)
else if(r.H(0,"*::"+b))return t.d.el(c)
else{r=t.b
if(r.H(0,H.d(s)+"::"+b))return!0
else if(r.H(0,"*::"+b))return!0
else if(r.H(0,H.d(s)+"::*"))return!0
else if(r.H(0,"*::*"))return!0}return!1},
$iaB:1}
W.jv.prototype={
$1:function(a){return!C.a.H(C.k,a)}}
W.jw.prototype={
$1:function(a){return C.a.H(C.k,a)}}
W.fJ.prototype={
ad:function(a,b,c){if(this.cV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.H(0,b)
return!1}}
W.jx.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.fI.prototype={
at:function(a){var t
if(u.Y.b(a))return!1
t=u.u.b(a)
if(t&&W.cM(a)==="foreignObject")return!1
if(t)return!0
return!1},
ad:function(a,b,c){if(b==="is"||C.b.bS(b,"on"))return!1
return this.at(a)},
$iaB:1}
W.cP.prototype={
w:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.d=J.nC(t.a,s)
t.c=s
return!0}t.d=null
t.c=r
return!1},
gK:function(a){return this.d}}
W.aB.prototype={}
W.ju.prototype={}
W.fS.prototype={
bP:function(a){var t=this,s=new W.jB(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aD:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.lT(a)
else b.removeChild(a)},
e5:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.nH(a)
m=n.a.getAttribute("is")
t=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='previousSibling'||i.name=='previousSibling'||i.id=='children'||i.name=='children')return true}return false}(a)
o=t?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.am(q)}s="element unprintable"
try{s=J.a7(a)}catch(q){H.am(q)}try{r=W.cM(a)
this.e4(a,b,o,s,r,n,m)}catch(q){if(H.am(q) instanceof P.ar)throw q
else{this.aD(a,b)
window
p="Removing corrupted element "+H.d(s)
if(typeof console!="undefined")window.console.warn(p)}}},
e4:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.aD(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.at(a)){n.aD(a,b)
window
t="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.ad(a,"is",g)){n.aD(a,b)
window
t="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}s=f.ga0(f).slice(0)
for(r=f.ga0(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q=s[r]
p=n.a
o=J.nJ(q)
H.lF(q)
if(!p.ad(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.d(e)+" "+q+'="'+H.d(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.f.b(a))n.bP(a.content)}}
W.jB.prototype={
$2:function(a,b){var t,s,r,q,p,o=this.a
switch(a.nodeType){case 1:o.e5(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.aD(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){r=s.nextSibling
q=t
q=r==null?q!=null:r!==q
r=q}else r=!1
if(r){r=P.lt("Corrupt HTML")
throw H.c(r)}}catch(p){H.am(p)
r=t
o.b=!0
q=r.parentNode
q=a==null?q!=null:a!==q
if(q){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}}}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fx.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fD.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
P.l0.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.fw.prototype={}
P.aC.prototype={}
P.bG.prototype={$ibG:1}
P.ee.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$ij:1,
$if:1,
$im:1}
P.bJ.prototype={$ibJ:1}
P.er.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$ij:1,
$if:1,
$im:1}
P.i7.prototype={
gl:function(a){return a.length}}
P.ck.prototype={$ick:1}
P.eI.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$ij:1,
$if:1,
$im:1}
P.k.prototype={
a4:function(a,b,c,d){var t,s,r,q,p,o=[]
o.push(W.mI(null))
o.push(W.mO())
o.push(new W.fI())
c=new W.fS(new W.d7(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
s.toString
r=C.m.ez(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.af(r)
p=o.gan(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ik:1}
P.bM.prototype={$ibM:1}
P.eT.prototype={
gl:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
return a.getItem(b)},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$ij:1,
$if:1,
$im:1}
P.fj.prototype={}
P.fk.prototype={}
P.fs.prototype={}
P.ft.prototype={}
P.fE.prototype={}
P.fF.prototype={}
P.fO.prototype={}
P.fP.prototype={}
P.hd.prototype={
gl:function(a){return a.length}}
P.he.prototype={
k:function(a,b){return P.bu(a.get(b))},
N:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.bu(t.value[1]))}},
ga0:function(a){var t=[]
this.N(a,new P.hf(t))
return t},
gl:function(a){return a.size}}
P.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dS.prototype={
gl:function(a){return a.length}}
P.bc.prototype={}
P.es.prototype={
gl:function(a){return a.length}}
P.f3.prototype={}
P.eE.prototype={
gl:function(a){return a.length},
k:function(a,b){var t
if(b>>>0!==b||b>=a.length)throw H.c(P.R(b,a,null,null,null))
t=P.bu(a.item(b))
t.toString
return t},
p:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
I:function(a,b){return this.k(a,b)},
$ij:1,
$if:1,
$im:1}
P.fB.prototype={}
P.fC.prototype={}
K.ha.prototype={
az:function(a,b){return!0},
h:function(a){return"all"}}
K.e7.prototype={
az:function(a,b){var t,s,r
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)if(t[r].az(0,b))return!0
return!1},
h:function(a){var t,s,r,q,p
for(t=this.a,s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.G)(t),++q){p=t[q]
if(r.length!==0)r+=", "
r+=p.h(0)}return r}}
K.bi.prototype={
az:function(a,b){return!this.cR(0,b)},
h:function(a){return"!["+this.bU(0)+"]"}}
K.ig.prototype={
cY:function(a){var t,s,r,q
if(a.a.length<=0)throw H.c(P.a_("May not create a Set with zero characters."))
t=new H.a8(u.E)
for(s=new H.bH(a,a.gl(a));s.w();){r=s.d
t.p(0,r,!0)}q=P.md(new H.bg(t),!0)
if(!!q.immutable$list)H.Z(P.B("sort"))
H.oz(q,J.pf())
this.a=q},
az:function(a,b){return C.a.H(this.a,b)},
h:function(a){return P.lv(this.a)}}
L.eF.prototype={
A:function(a,b){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<s;++r){q=t[r]
if(q.b.b===b)return q}q=new L.iM(this.a.M(0,b))
q.a=[]
q.c=!1
this.c.push(q)
return q},
eC:function(a){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=t[r]
if(q.az(0,a))return q}return null},
h:function(a){return this.b},
c8:function(){var t,s,r,q,p,o=this,n="("+o.b+")",m=o.d
if(m!=null){m=m.b
n+=" => ["+m+"]"
t=o.a
if(t.c.H(0,m))n+=" (consume)"
for(m=new H.bg(o.d.c),m=m.gO(m);m.w();){s=m.d
n+="\n"
r=o.d.c.k(0,s)
s=n+("  -- "+H.d(s)+" => ["+H.d(r)+"]")
n=t.c.H(0,r)?s+" (consume)":s}}for(m=o.c,t=m.length,q=0;q<m.length;m.length===t||(0,H.G)(m),++q){p=m[q]
n=n+"\n"+("  -- "+p.h(0))}return n.charCodeAt(0)==0?n:n}}
L.eQ.prototype={
h:function(a){var t=H.dK(this.b,"\n","\\n"),s=H.dK(t,"\t","\\t")
return this.a+":"+this.c+':"'+s+'"'}}
L.eR.prototype={
h:function(a){return this.b}}
L.iJ.prototype={
M:function(a,b){var t=this.a.k(0,b)
if(t==null){t=new L.eF(this,b)
t.c=[]
this.a.p(0,b,t)}return t},
aQ:function(a){var t=this.b.k(0,a)
if(t==null){t=new L.eR(a)
t.c=new H.a8(u.i)
this.b.p(0,a,t)}return t},
cI:function(a){return this.ff(a)},
ff:function(a){var t=this
return P.pn(function(){var s=a
var r=0,q=1,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$cI(a0,a1){if(a0===1){p=a1
r=q}while(true)switch(r){case 0:e=t.d
d=[]
c=[]
b=[]
o=null,n=0,m=0,l=0
case 2:if(!!0){r=3
break}if(b.length!==0)k=C.a.bF(b,0)
else{if(!s.w()){r=3
break}j=s.d
k=j}c.push(k);++n
i=e.eC(k)
r=i==null?4:6
break
case 4:if(o==null){h=P.lv(c)
throw H.c(P.a_("Untokenizable string [state: "+e.b+", index "+n+']: "'+h+'"'))}if(!!c.fixed$length)H.Z(P.B("removeRange"))
P.lq(0,l,c.length)
c.splice(0,l-0)
C.a.a3(b,c)
c=[]
d=[]
e=t.d
r=!t.c.H(0,o.a)?7:8
break
case 7:r=9
return o
case 9:case 8:n=m
o=null
l=0
r=5
break
case 6:if(!i.c)d.push(k)
e=i.b
if(e.d!=null){h=P.lv(d)
g=e.d
f=g.c.k(0,h)
o=new L.eQ(f==null?g.b:f,h,n)
l=c.length
m=n}case 5:r=2
break
case 3:r=o!=null&&!t.c.H(0,o.a)?10:11
break
case 10:r=12
return o
case 12:case 11:return P.oM()
case 1:return P.oN(p)}}},u.j)},
h:function(a){var t,s=new P.bK(""),r=this.d
if(r!=null)s.a=r.c8()+"\n"
for(r=this.a,r=r.gfi(r),r=new H.d_(J.bz(r.a),r.b);r.w();){t=r.a
if(t!=this.d)s.a+=t.c8()+"\n"}r=s.a
return r.charCodeAt(0)==0?r:r}}
L.iM.prototype={
h:function(a){return this.b.b+": "+this.bU(0)}}
O.cG.prototype={
bQ:function(a,b){this.b=null
this.c=a},
c5:function(a){return!0},
dk:function(a,b){var t=this.c
if(t!=null)t.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var t=this.a
return new J.aU(t,t.length)},
t:function(a,b){var t,s
if(this.c5([b])){t=this.a
s=t.length
t.push(b)
this.dk(s,[b])}},
$if:1}
O.d1.prototype={
gl:function(a){return this.a.length},
gL:function(){var t=this.b
return t==null?this.b=D.c3():t},
ao:function(){var t=this.b
if(t!=null)t.a_(null)},
gaK:function(a){var t=this.a
if(t.length>0)return C.a.gbA(t)
else return V.aR()},
ct:function(a){var t=this.a
if(a==null)t.push(V.aR())
else t.push(a)
this.ao()},
bE:function(){var t=this.a
if(t.length>0){t.pop()
this.ao()}}}
Y.cn.prototype={
h:function(a){return this.b}}
Y.dT.prototype={
h:function(a){switch(this.a){case C.j:return"intesected"
case C.h:return"noCollision"
case C.w:return"outOfRange at "+H.d(this.b)
case C.d:return"collision at "+H.d(this.b)
default:return"Unknown collision value"}}}
Y.eU.prototype={
h:function(a){var t=this.bT(0)
return t+(this.a===C.d?" "+H.d(this.y):"")}}
Y.bo.prototype={
h:function(a){var t=this,s=t.bT(0)
return s+(t.a===C.d?" "+H.d(t.r)+" "+H.d(t.x)+" "+H.d(t.y):"")}}
E.c2.prototype={
sbR:function(a,b){var t,s,r=this,q=r.c
if(q!=b){r.d=r.c=b
if(q!=null)q.gL().B(0,r.gcp())
t=r.c
if(t!=null)t.gL().t(0,r.gcp())
s=new D.ae("shape",q,r.c)
s.b=!0
r.ak(s)}},
saL:function(a){var t,s,r=this
if(!J.t(r.r,a)){t=r.r
if(t!=null)t.gL().B(0,r.gcn())
if(a!=null)a.gL().t(0,r.gcn())
r.r=a
s=new D.ae("mover",t,a)
s.b=!0
r.ak(s)}},
cK:function(a,b){var t,s,r=this,q=r.r,p=q!=null?q.a:null
if(!J.t(p,r.x)){t=r.x
r.x=p
s=new D.ae("matrix",t,p)
s.b=!0
r.ak(s)}for(q=r.y.a,q=new J.aU(q,q.length);q.w();)q.d.cK(0,b)},
b2:function(a){var t,s,r,q,p=this
if(!p.b)return
t=a.dx
s=p.x
r=t.a
if(s==null)r.push(t.gaK(t))
else r.push(s.F(0,t.gaK(t)))
t.ao()
a.cu(p.f)
t=a.dy
q=(t&&C.a).gbA(t)
if(q!=null&&p.d!=null)q.f3(a,p)
for(t=p.y.a,t=new J.aU(t,t.length);t.w();)t.d.b2(a)
a.cr()
a.dx.bE()},
ak:function(a){var t=this.z
if(t!=null)t.a_(a)},
R:function(){return this.ak(null)},
cq:function(a){this.ak(a)},
eT:function(){return this.cq(null)},
co:function(a){this.ak(a)},
eS:function(){return this.co(null)},
cm:function(a){this.ak(a)},
eP:function(){return this.cm(null)},
eO:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.gcl(),r=0;r<b.length;b.length===t||(0,H.G)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.cN()
p.d=0
q.z=p}o=p.a;(o==null?p.a=[]:o).push(s)}}this.R()},
eR:function(a,b){var t,s
for(t=b.gO(b),s=this.gcl();t.w();)t.gK(t).gL().B(0,s)
this.R()},
h:function(a){var t=this.a,s=t.length
if(s<=0)return"Unnamed entity"
return t}}
E.bZ.prototype={
h:function(a){return this.b}}
E.ch.prototype={
h:function(a){return this.b}}
E.jb.prototype={}
E.i9.prototype={
cX:function(a,b){var t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aP(Date.now(),!1)
t=new O.d1()
t.a=[]
t.gL().t(0,new E.ia(s))
s.cy=t
t=new O.d1()
t.a=[]
t.gL().t(0,new E.ib(s))
s.db=t
t=new O.d1()
t.a=[]
t.gL().t(0,new E.ic(s))
s.dx=t
t=[]
s.dy=t
t.push(null)},
cu:function(a){var t=this.dy
t.push(a==null?(t&&C.a).gbA(t):a)},
cr:function(){var t=this.dy
if(t.length>1)t.pop()}}
E.ia.prototype={
$1:function(a){}}
E.ib.prototype={
$1:function(a){}}
E.ic.prototype={
$1:function(a){}}
E.eO.prototype={
bW:function(a){if(this.ch)this.cw()},
b9:function(){return this.bW(null)},
c7:function(){var t,s,r=this,q=window.devicePixelRatio,p=r.b.clientWidth
if(typeof p!=="number")return p.F()
if(typeof q!=="number")return H.o(q)
t=C.e.aG(p*q)
p=r.b.clientHeight
if(typeof p!=="number")return p.F()
s=C.e.aG(p*q)
p=r.b
if(p.width!==t||p.height!==s){p.width=t
r.b.height=s
P.eP(C.i,r.gf4())}},
cw:function(){var t,s
if(!this.cx){this.cx=!0
t=window
C.y.de(t)
s=W.n1(new E.iH(this),u.H)
s.toString
C.y.e2(t,s)}},
cv:function(){var t,s,r,q,p,o=this,n=null
try{++o.db
o.cx=!1
o.c7()
if(n==null)n=o.d
if(n!=null){r=o.e;++r.e
r.r=r.x
q=Date.now()
r.x=new P.aP(q,!1)
P.hs(q-r.r.a)
q=r.cy
C.a.sl(q.a,0)
q.ao()
q=r.db
C.a.sl(q.a,0)
q.ao()
q=r.dx
C.a.sl(q.a,0)
q.ao()
q=r.dy
q.toString
C.a.sl(q,0)
r.dy.push(null)
n.b2(o.e)}}catch(p){t=H.am(p)
s=H.bw(p)
P.nb("Error: "+H.d(t))
P.nb("Stack: "+H.d(s))
throw H.c(t)}}}
E.iH.prototype={
$1:function(a){var t=this.a
if(t.cx){t.cx=!1
t.cv()}}}
Z.aH.prototype={
em:function(a){var t,s=$.aq(),r=this.a
if((r&s.a)!==0){if(0===a)return s
t=1}else t=0
s=$.ap()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.ao()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.ai()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.aM()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.aL()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.aT()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.ay()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.ax()
if((r&s.a)!==0)if(t===a)return s
return $.lb()},
eG:function(a,b){var t,s=$.aq(),r=this.a
if((r&s.a)!==0){if(J.t(b,s))return 0
t=1}else t=0
s=$.ap()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.ao()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.ai()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.aM()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.aL()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.aT()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.ay()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.ax()
if((r&s.a)!==0)if(J.t(b,s))return t
return-1},
eM:function(a,b){var t,s=$.aq(),r=this.a
if((r&s.a)!==0){if(J.t(b,s))return 0
t=3}else t=0
s=$.ap()
if((r&s.a)!==0){if(J.t(b,s))return t
t+=3}s=$.ao()
if((r&s.a)!==0){if(J.t(b,s))return t
t+=3}s=$.ai()
if((r&s.a)!==0){if(J.t(b,s))return t
t+=2}s=$.aM()
if((r&s.a)!==0){if(J.t(b,s))return t
t+=3}s=$.aL()
if((r&s.a)!==0){if(J.t(b,s))return t
t+=3}s=$.aT()
if((r&s.a)!==0){if(J.t(b,s))return t
t+=4}s=$.ay()
if((r&s.a)!==0){if(J.t(b,s))return t;++t}s=$.ax()
if((r&s.a)!==0)if(J.t(b,s))return t
return-1},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aH))return!1
return this.a===b.a},
h:function(a){var t=[],s=this.a
if((s&$.aq().a)!==0)t.push("Pos")
if((s&$.ap().a)!==0)t.push("Norm")
if((s&$.ao().a)!==0)t.push("Binm")
if((s&$.ai().a)!==0)t.push("Txt2D")
if((s&$.aM().a)!==0)t.push("TxtCube")
if((s&$.aL().a)!==0)t.push("Clr3")
if((s&$.aT().a)!==0)t.push("Clr4")
if((s&$.ay().a)!==0)t.push("Weight")
if((s&$.ax().a)!==0)t.push("Bending")
if(t.length<=0)return"None"
return C.a.A(t,"|")}}
V.hU.prototype={}
D.hg.prototype={}
D.cN.prototype={
t:function(a,b){var t=this.a;(t==null?this.a=[]:t).push(b)},
B:function(a,b){var t,s=this,r=s.a
r=r==null?null:C.a.H(r,b)
if(r===!0){r=s.a
t=(r&&C.a).B(r,b)||!1}else t=!1
r=s.b
r=r==null?null:C.a.H(r,b)
if(r===!0){r=s.b
t=(r&&C.a).B(r,b)||t}return t},
a_:function(a){var t,s,r,q=this,p={}
p.a=a
t=q.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=q.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.aX()
a.b=!0
p.a=a
r=a}else r=a
if(q.d>0){if(q.c==null)q.c=r
return!0}if(!s)C.a.N(P.md(t,!0),new D.hA(p))
t=q.b
if(t!=null){q.b=[]
C.a.N(t,new D.hB(p))}return!0},
b3:function(a){var t,s=this,r=s.d
if(r>0){--r
s.d=r
if(r<=0)r=s.c!=null
else r=!1
if(r){t=s.c
s.c=null
s.a_(t)}}}}
D.hA.prototype={
$1:function(a){var t=this.a.a
t.toString
a.$1(t)}}
D.hB.prototype={
$1:function(a){var t=this.a.a
t.toString
a.$1(t)}}
D.aX.prototype={}
D.cR.prototype={}
D.cS.prototype={}
D.ae.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.dV.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.ed.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ed))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.hO.prototype={
eY:function(a){this.d.t(0,a.a)
return!1},
eU:function(a){this.d.B(0,a.a)
return!1}}
X.hT.prototype={
bD:function(a,b){this.r=a.a
return!1},
aN:function(a,b){var t=this.r,s=a.a
if(typeof s!=="number")return s.cO()
if(typeof t!=="number")return t.C()
this.r=(t&~s)>>>0
return!1},
aM:function(a,b){return!1},
eZ:function(a){return!1},
dI:function(a,b,c){return}}
X.d2.prototype={
m:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof X.d2))return!1
if(t.a!==b.a)return!1
if(t.b!=b.b)return!1
if(t.c!=b.c)return!1
return!0},
h:function(a){var t=this.a?"Ctrl+":""
t+=this.b?"Alt+":""
return t+(this.c?"Shift+":"")}}
X.i0.prototype={
bD:function(a,b){this.f=a.a
return!1},
aN:function(a,b){var t=this.f,s=a.a
if(typeof s!=="number")return s.cO()
if(typeof t!=="number")return t.C()
this.f=(t&~s)>>>0
return!1},
aM:function(a,b){return!1},
f_:function(a,b){return!1}}
X.iK.prototype={
eX:function(a){return!1},
eV:function(a){return!1},
eW:function(a){return!1}}
X.eZ.prototype={
c1:function(a){var t=a.keyCode,s=a.ctrlKey||a.metaKey
return new X.ed(t,new X.d2(s,a.altKey,a.shiftKey))},
as:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bs:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
ai:function(a){var t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.Z()
if(typeof p!=="number")return H.o(p)
t=s.top
if(typeof q!=="number")return q.Z()
if(typeof t!=="number")return H.o(t)
return new V.Y(r-p,q-t)},
aC:function(a){return new V.aa(a.movementX,a.movementY)},
bn:function(a){var t,s,r,q,p,o,n,m,l=this.a.getBoundingClientRect(),k=[]
for(t=a.touches,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=t[r]
p=C.e.ab(q.pageX)
C.e.ab(q.pageY)
o=l.left
if(typeof o!=="number")return H.o(o)
C.e.ab(q.pageX)
n=C.e.ab(q.pageY)
m=l.top
if(typeof m!=="number")return H.o(m)
k.push(new V.Y(p-o,n-m))}return k},
ah:function(a){var t=a.buttons,s=a.ctrlKey||a.metaKey
return new X.dV(t,new X.d2(s,a.altKey,a.shiftKey))},
bj:function(a){var t,s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.Z()
if(typeof o!=="number")return H.o(o)
t=q-o
if(t<0)return!1
q=r.top
if(typeof p!=="number")return p.Z()
if(typeof q!=="number")return H.o(q)
s=p-q
if(s<0)return!1
q=r.width
if(typeof q!=="number")return H.o(q)
if(t<q){q=r.height
if(typeof q!=="number")return H.o(q)
q=s<q}else q=!1
return q},
dD:function(a){this.f=!0},
dm:function(a){this.f=!1},
dv:function(a){if(this.f&&this.bj(a))a.preventDefault()},
dH:function(a){var t
if(!this.f)return
t=this.c1(a)
this.b.eY(t)},
dF:function(a){var t
if(!this.f)return
t=this.c1(a)
this.b.eU(t)},
dK:function(a){var t,s,r,q=this,p=q.a
p.focus()
q.f=!0
q.as(a)
if(q.x){t=q.ah(a)
s=q.aC(a)
if(q.d.bD(t,s))a.preventDefault()
return}if(q.r){q.y=a
p.requestPointerLock()
return}t=q.ah(a)
r=q.ai(a)
if(q.c.bD(t,r))a.preventDefault()},
dO:function(a){var t,s,r,q=this
q.as(a)
t=q.ah(a)
if(q.x){s=q.aC(a)
if(q.d.aN(t,s))a.preventDefault()
return}if(q.r)return
r=q.ai(a)
if(q.c.aN(t,r))a.preventDefault()},
dB:function(a){var t,s,r,q=this
if(!q.bj(a)){q.as(a)
t=q.ah(a)
if(q.x){s=q.aC(a)
if(q.d.aN(t,s))a.preventDefault()
return}if(q.r)return
r=q.ai(a)
if(q.c.aN(t,r))a.preventDefault()}},
dM:function(a){var t,s,r,q=this
q.as(a)
t=q.ah(a)
if(q.x){s=q.aC(a)
if(q.d.aM(t,s))a.preventDefault()
return}if(q.r)return
r=q.ai(a)
if(q.c.aM(t,r))a.preventDefault()},
dz:function(a){var t,s,r,q=this
if(!q.bj(a)){q.as(a)
t=q.ah(a)
if(q.x){s=q.aC(a)
if(q.d.aM(t,s))a.preventDefault()
return}if(q.r)return
r=q.ai(a)
if(q.c.aM(t,r))a.preventDefault()}},
dQ:function(a){var t,s,r,q,p,o=this
o.as(a)
t=(a&&C.x).geA(a)
s=C.x.geB(a)
r=o.Q
if(typeof t!=="number")return t.F()
if(typeof r!=="number")return H.o(r)
if(typeof s!=="number")return s.F()
q=new V.aa(t*r,s*r)
if(o.x){if(o.d.eZ(q))a.preventDefault()
return}if(o.r)return
p=o.ai(a)
if(o.c.f_(q,p))a.preventDefault()},
dS:function(a){var t,s,r=this,q=document.pointerLockElement===r.a
if(q!==r.x){r.x=q
t=r.ah(r.y)
s=r.ai(r.y)
r.d.dI(t,s,q)}},
dY:function(a){var t,s=this
s.a.focus()
s.f=!0
s.bs(a)
t=s.bn(a)
if(s.e.eX(t))a.preventDefault()},
dU:function(a){var t
this.bs(a)
t=this.bn(a)
if(this.e.eV(t))a.preventDefault()},
dW:function(a){var t
this.bs(a)
t=this.bn(a)
if(this.e.eW(t))a.preventDefault()}}
V.bB.prototype={
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bB))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.C(t.a,3,0)+", "+V.C(t.b,3,0)+", "+V.C(t.c,3,0)+", "+V.C(t.d,3,0)+"]"}}
V.hy.prototype={}
V.aj.prototype={
bm:function(a,b){var t=this.a,s=a.a,r=(t&s)===s?b.a:$.aK().a,q=b.a
return r|((t&q)===q?s:$.aK().a)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof V.aj))return!1
return this.a===b.a},
h:function(a){var t,s,r
$.dL()
$.lP()
t=[]
s=this.a
r=$.cz().a
if((s&r)===r)t.push("XPos")
r=$.nl().a
if((s&r)===r)t.push("XCenter")
r=$.cy().a
if((s&r)===r)t.push("XNeg")
r=$.cA().a
if((s&r)===r)t.push("YPos")
r=$.nm().a
if((s&r)===r)t.push("YCenter")
r=$.dM().a
if((s&r)===r)t.push("YNeg")
r=$.dN().a
if((s&r)===r)t.push("ZPos")
r=$.nn().a
if((s&r)===r)t.push("ZCenter")
r=$.cB().a
if((s&r)===r)t.push("ZNeg")
if(t.length<=0)return"None"
return C.a.A(t,"|")}}
V.V.prototype={
aP:function(a){var t=this
return[t.a,t.b,t.c,t.d]},
a1:function(a){var t,s=this,r=s.a,q=s.d,p=s.b,o=s.c,n=r*q-p*o
$.A().toString
if(Math.abs(n-0)<1e-9)return V.c8()
t=1/n
return new V.V(q*t,-p*t,-o*t,r*t)},
F:function(a,b){var t=this,s=t.a,r=b.a,q=t.b,p=b.c,o=b.b,n=b.d,m=t.c,l=t.d
return new V.V(s*r+q*p,s*o+q*n,m*r+l*p,m*o+l*n)},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){return this.E()},
n:function(a){var t,s,r=this,q=V.bv([r.a,r.c],3,0),p=V.bv([r.b,r.d],3,0),o=q.length
if(0>=o)return H.e(q,0)
t="["+q[0]+", "
s=p.length
if(0>=s)return H.e(p,0)
t=t+p[0]+",\n"+a+" "
if(1>=o)return H.e(q,1)
t=t+q[1]+", "
if(1>=s)return H.e(p,1)
return t+p[1]+"]"},
E:function(){return this.n("")}}
V.N.prototype={
aP:function(a){var t=this
return[t.a,t.b,t.c,t.d,t.e,t.f,t.r,t.x,t.y]},
a1:function(a){var t,s=this,r=s.a,q=s.e,p=s.y,o=q*p,n=s.f,m=s.x,l=s.d,k=s.b,j=k*p,i=s.c,h=m*i,g=s.r,f=k*n-q*i,e=r*(o-n*m)-l*(j-h)+g*f
$.A().toString
if(Math.abs(e-0)<1e-9)return V.cc()
t=1/e
return new V.N((o-m*n)*t,(h-j)*t,f*t,(g*n-l*p)*t,(r*p-g*i)*t,(l*i-r*n)*t,(l*m-g*q)*t,(g*k-r*m)*t,(r*q-l*k)*t)},
F:function(a,a0){var t=this,s=t.a,r=a0.a,q=t.b,p=a0.d,o=t.c,n=a0.r,m=a0.b,l=a0.e,k=a0.x,j=a0.c,i=a0.f,h=a0.y,g=t.d,f=t.e,e=t.f,d=t.r,c=t.x,b=t.y
return new V.N(s*r+q*p+o*n,s*m+q*l+o*k,s*j+q*i+o*h,g*r+f*p+e*n,g*m+f*l+e*k,g*j+f*i+e*h,d*r+c*p+b*n,d*m+c*l+b*k,d*j+c*i+b*h)},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
if(!(Math.abs(b.e-s.e)<1e-9))return!1
if(!(Math.abs(b.f-s.f)<1e-9))return!1
if(!(Math.abs(b.r-s.r)<1e-9))return!1
if(!(Math.abs(b.x-s.x)<1e-9))return!1
if(!(Math.abs(b.y-s.y)<1e-9))return!1
return!0},
h:function(a){return this.E()},
n:function(a){var t,s,r,q,p=this,o=V.bv([p.a,p.d,p.r],3,0),n=V.bv([p.b,p.e,p.x],3,0),m=V.bv([p.c,p.f,p.y],3,0),l=o.length
if(0>=l)return H.e(o,0)
t="["+o[0]+", "
s=n.length
if(0>=s)return H.e(n,0)
t=t+n[0]+", "
r=m.length
if(0>=r)return H.e(m,0)
t=t+m[0]+",\n"
q=a+" "
if(1>=l)return H.e(o,1)
q=q+o[1]+", "
if(1>=s)return H.e(n,1)
q=q+n[1]+", "
if(1>=r)return H.e(m,1)
q=t+(q+m[1]+",\n")
t=a+" "
if(2>=l)return H.e(o,2)
t=t+o[2]+", "
if(2>=s)return H.e(n,2)
t=t+n[2]+", "
if(2>=r)return H.e(m,2)
return q+(t+m[2]+"]")},
E:function(){return this.n("")}}
V.eh.prototype={
aP:function(a){var t=this
return[t.a,t.b,t.c,t.d,t.e,t.f,t.r,t.x,t.y,t.z,t.Q,t.ch,t.cx,t.cy,t.db,t.dx]},
a1:function(b3){var t,s,r,q=this,p=q.a,o=q.f,n=q.b,m=q.e,l=p*o-n*m,k=q.r,j=q.c,i=p*k-j*m,h=q.x,g=q.d,f=p*h-g*m,e=n*k-j*o,d=n*h-g*o,c=j*h-g*k,b=q.y,a=q.cy,a0=q.z,a1=q.cx,a2=b*a-a0*a1,a3=q.db,a4=q.Q,a5=b*a3-a4*a1,a6=q.dx,a7=q.ch,a8=b*a6-a7*a1,a9=a0*a3-a4*a,b0=a0*a6-a7*a,b1=a4*a6-a7*a3,b2=l*b1-i*b0+f*a9+e*a8-d*a5+c*a2
$.A().toString
if(Math.abs(b2-0)<1e-9)return V.aR()
t=1/b2
s=-m
r=-a1
return V.L((o*b1-k*b0+h*a9)*t,(-n*b1+j*b0-g*a9)*t,(a*c-a3*d+a6*e)*t,(-a0*c+a4*d-a7*e)*t,(s*b1+k*a8-h*a5)*t,(p*b1-j*a8+g*a5)*t,(r*c+a3*f-a6*i)*t,(b*c-a4*f+a7*i)*t,(m*b0-o*a8+h*a2)*t,(-p*b0+n*a8-g*a2)*t,(a1*d-a*f+a6*l)*t,(-b*d+a0*f-a7*l)*t,(s*a9+o*a5-k*a2)*t,(p*a9-n*a5+j*a2)*t,(r*e+a*i-a3*l)*t,(b*e-a0*i+a4*l)*t)},
F:function(b3,b4){var t=this,s=t.a,r=b4.a,q=t.b,p=b4.e,o=t.c,n=b4.y,m=t.d,l=b4.cx,k=b4.b,j=b4.f,i=b4.z,h=b4.cy,g=b4.c,f=b4.r,e=b4.Q,d=b4.db,c=b4.d,b=b4.x,a=b4.ch,a0=b4.dx,a1=t.e,a2=t.f,a3=t.r,a4=t.x,a5=t.y,a6=t.z,a7=t.Q,a8=t.ch,a9=t.cx,b0=t.cy,b1=t.db,b2=t.dx
return V.L(s*r+q*p+o*n+m*l,s*k+q*j+o*i+m*h,s*g+q*f+o*e+m*d,s*c+q*b+o*a+m*a0,a1*r+a2*p+a3*n+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a1*c+a2*b+a3*a+a4*a0,a5*r+a6*p+a7*n+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d,a5*c+a6*b+a7*a+a8*a0,a9*r+b0*p+b1*n+b2*l,a9*k+b0*j+b1*i+b2*h,a9*g+b0*f+b1*e+b2*d,a9*c+b0*b+b1*a+b2*a0)},
b5:function(a){var t=this,s=a.a,r=a.b,q=a.c,p=a.d
return new V.bk(t.a*s+t.b*r+t.c*q+t.d*p,t.e*s+t.f*r+t.r*q+t.x*p,t.y*s+t.z*r+t.Q*q+t.ch*p,t.cx*s+t.cy*r+t.db*q+t.dx*p)},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.eh))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
if(!(Math.abs(b.e-s.e)<1e-9))return!1
if(!(Math.abs(b.f-s.f)<1e-9))return!1
if(!(Math.abs(b.r-s.r)<1e-9))return!1
if(!(Math.abs(b.x-s.x)<1e-9))return!1
if(!(Math.abs(b.y-s.y)<1e-9))return!1
if(!(Math.abs(b.z-s.z)<1e-9))return!1
if(!(Math.abs(b.Q-s.Q)<1e-9))return!1
if(!(Math.abs(b.ch-s.ch)<1e-9))return!1
if(!(Math.abs(b.cx-s.cx)<1e-9))return!1
if(!(Math.abs(b.cy-s.cy)<1e-9))return!1
if(!(Math.abs(b.db-s.db)<1e-9))return!1
if(!(Math.abs(b.dx-s.dx)<1e-9))return!1
return!0},
h:function(a){return this.E()},
n:function(a){var t,s,r,q,p,o=this,n=V.bv([o.a,o.e,o.y,o.cx],3,0),m=V.bv([o.b,o.f,o.z,o.cy],3,0),l=V.bv([o.c,o.r,o.Q,o.db],3,0),k=V.bv([o.d,o.x,o.ch,o.dx],3,0),j=n.length
if(0>=j)return H.e(n,0)
t="["+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
t=t+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
t=t+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
t=t+k[0]+",\n"
p=a+" "
if(1>=j)return H.e(n,1)
p=p+n[1]+", "
if(1>=s)return H.e(m,1)
p=p+m[1]+", "
if(1>=r)return H.e(l,1)
p=p+l[1]+", "
if(1>=q)return H.e(k,1)
p=t+(p+k[1]+",\n")
t=a+" "
if(2>=j)return H.e(n,2)
t=t+n[2]+", "
if(2>=s)return H.e(m,2)
t=t+m[2]+", "
if(2>=r)return H.e(l,2)
t=t+l[2]+", "
if(2>=q)return H.e(k,2)
t=p+(t+k[2]+",\n")
p=a+" "
if(3>=j)return H.e(n,3)
p=p+n[3]+", "
if(3>=s)return H.e(m,3)
p=p+m[3]+", "
if(3>=r)return H.e(l,3)
p=p+l[3]+", "
if(3>=q)return H.e(k,3)
return t+(p+k[3]+"]")},
E:function(){return this.n("")}}
V.Y.prototype={
a8:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.d8()
return new V.Y(this.a/b,this.b/b)},
m:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.p.prototype={
G:function(a,b){return new V.p(this.a+b.a,this.b+b.b,this.c+b.c)},
Z:function(a,b){return new V.p(this.a-b.a,this.b-b.b,this.c-b.c)},
a8:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.mp()
return new V.p(this.a/b,this.b/b,this.c/b)},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.p))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
return!0},
h:function(a){return this.E()},
a5:function(a,b){return"["+V.C(this.a,a,b)+", "+V.C(this.b,a,b)+", "+V.C(this.c,a,b)+"]"},
E:function(){return this.a5(3,0)}}
V.bk.prototype={
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bk))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){return this.E()},
a5:function(a,b){var t=this
return"["+V.C(t.a,a,b)+", "+V.C(t.b,a,b)+", "+V.C(t.c,a,b)+", "+V.C(t.d,a,b)+"]"},
E:function(){return this.a5(3,0)}}
V.da.prototype={
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.da))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.C(t.a,3,0)+", "+V.C(t.b,3,0)+", "+V.C(t.c,3,0)+", "+V.C(t.d,3,0)+"]"}}
V.db.prototype={
bM:function(a,b){var t=this
return V.z(t.a+b.a,t.b+b.b,t.c+b.c,t.d,t.e,t.f)},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.db))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
if(!(Math.abs(b.e-s.e)<1e-9))return!1
if(!(Math.abs(b.f-s.f)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.C(t.a,3,0)+", "+V.C(t.b,3,0)+", "+V.C(t.c,3,0)+", "+V.C(t.d,3,0)+", "+V.C(t.e,3,0)+", "+V.C(t.f,3,0)+"]"}}
V.aE.prototype={
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.C(t.a,3,0)+", "+V.C(t.b,3,0)+", "+V.C(t.c,3,0)+", "+V.C(t.d,3,0)+"]"}}
V.aa.prototype={
aI:function(a){var t,s=this.a
if(typeof s!=="number")return s.F()
t=this.b
if(typeof t!=="number")return t.F()
return Math.sqrt(s*s+t*t)},
m:function(a,b){var t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
t=b.a
s=this.a
$.A().toString
if(typeof t!=="number")return t.Z()
if(typeof s!=="number")return H.o(s)
if(!(Math.abs(t-s)<1e-9))return!1
t=b.b
s=this.b
if(typeof t!=="number")return t.Z()
if(typeof s!=="number")return H.o(s)
if(!(Math.abs(t-s)<1e-9))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.q.prototype={
aI:function(a){return Math.sqrt(this.ae(this))},
ae:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bB:function(a,b){return new V.q(V.lM(this.a,a.a,b),V.lM(this.b,a.b,b),V.lM(this.c,a.c,b))},
X:function(){var t=this,s=Math.sqrt(t.ae(t))
if(s===1)return t
return t.a8(0,s)},
by:function(a){var t=this.b,s=a.c,r=this.c,q=a.b,p=a.a,o=this.a
return new V.q(t*s-r*q,r*p-o*s,o*q-t*p)},
G:function(a,b){return new V.q(this.a+b.a,this.b+b.b,this.c+b.c)},
Z:function(a,b){return new V.q(this.a-b.a,this.b-b.b,this.c-b.c)},
b7:function(a){return new V.q(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.q(this.a*b,this.b*b,this.c*b)},
a8:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.bp()
return new V.q(this.a/b,this.b/b,this.c/b)},
cj:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.q))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.aG.prototype={
aI:function(a){var t=this,s=t.a,r=t.b,q=t.c,p=t.d
return Math.sqrt(s*s+r*r+q*q+p*p)},
a8:function(a,b){var t,s=this
$.A().toString
if(Math.abs(b-0)<1e-9){t=$.mE
return t==null?$.mE=new V.aG(0,0,0,0):t}return new V.aG(s.a/b,s.b/b,s.c/b,s.d/b)},
m:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aG))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.C(t.a,3,0)+", "+V.C(t.b,3,0)+", "+V.C(t.c,3,0)+", "+V.C(t.d,3,0)+"]"}}
U.dY.prototype={
gL:function(){var t=this.b
return t==null?this.b=D.c3():t},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dY))return!1
return J.t(this.a,b.a)},
h:function(a){return"Constant: "+this.a.n("          ")}}
U.i1.prototype={}
M.e2.prototype={
ag:function(a){var t=this.y
if(t!=null)t.a_(a)},
d2:function(){return this.ag(null)},
dr:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.gac(),r=0;r<b.length;b.length===t||(0,H.G)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.cN()
p.d=0
q.z=p}o=p.a;(o==null?p.a=[]:o).push(s)}}t=new D.cR()
t.b=!0
this.ag(t)},
dt:function(a,b){var t,s
for(t=b.gO(b),s=this.gac();t.w();)t.gK(t).gL().B(0,s)
t=new D.cS()
t.b=!0
this.ag(t)},
scC:function(a){var t,s=this,r=s.d
if(r!=a){if(r!=null)r.gL().B(0,s.gac())
t=s.d
s.d=a
if(a!=null)a.gL().t(0,s.gac())
r=new D.ae("technique",t,s.d)
r.b=!0
s.ag(r)}},
gL:function(){var t=this.y
return t==null?this.y=D.c3():t},
b2:function(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
a3.cu(a2.d)
t=a2.c
t.toString
s=a3.a
s.bindFramebuffer(36160,null)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.o(r)
n=C.e.ab(o*r)
o=p.b
if(typeof q!=="number")return H.o(q)
m=C.e.ab(o*q)
o=C.e.ab(p.c*r)
a3.c=o
p=C.e.ab(p.d*q)
a3.d=p
s.viewport(n,m,o,p)
s.clearDepth(t.c)
t=t.a
s.clearColor(t.a,t.b,t.c,t.d)
s.clear(16640)
t=a2.b
s=a3.c
p=a3.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.L(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
a3.cy.ct(h)
s=$.mm
if(s==null){s=V.mp()
p=$.mD
if(p==null)p=$.mD=new V.q(0,1,0)
o=$.mC
g=(o==null?$.mC=new V.q(0,0,-1):o).X()
f=p.by(g).X()
e=g.by(f)
d=new V.q(s.a,s.b,s.c)
c=f.b7(0).ae(d)
b=e.b7(0).ae(d)
a=g.b7(0).ae(d)
s=V.L(f.a,e.a,g.a,c,f.b,e.b,g.b,b,f.c,e.c,g.c,a,0,0,0,1)
$.mm=s
a0=s}else a0=s
t=t.b
if(t!=null){a1=t.a
if(a1!=null)a0=a1.F(0,a0)}a3.db.ct(a0)
for(t=a2.e.a,t=new J.aU(t,t.length);t.w();)t.d.cK(0,a3)
for(t=a2.e.a,t=new J.aU(t,t.length);t.w();)t.d.b2(a3)
a2.b.toString
a3.cy.bE()
a3.db.bE()
a2.c.toString
a3.cr()}}
F.jD.prototype={
$3:function(a,b,c){var t,s=this,r=s.a,q=r.a.bB(r.b,b).bB(r.d.bB(r.c,b),c)
a.sb_(0,new V.p(q.a,q.b,q.c))
a.sbJ(q.X())
r=1-b
t=1-c
t=new V.bk(s.b+b*c,s.c+r*c,s.d+b*t,s.e+r*t)
if(!J.t(a.cx,t)){a.cx=t
r=a.a
if(r!=null)r.R()}r=s.f
if(r!=null)r.$3(a,b,c)}}
F.l9.prototype={
$2:function(a,b){return 0}}
F.la.prototype={
$3:function(a,b,c){var t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.o(s)
t=a.f
s=new V.q(t.a,t.b,t.c).X().F(0,this.b+s)
a.sb_(0,new V.p(s.a,s.b,s.c))}}
F.hC.prototype={
aE:function(){var t=this
if(!t.gaF()){C.a.B(t.a.a.d.b,t)
t.a.a.R()}t.bp()
t.bq()
t.e0()},
e6:function(a){this.a=a
a.d.b.push(this)},
e7:function(a){this.b=a
a.d.c.push(this)},
e8:function(a){this.c=a
a.d.d.push(this)},
bp:function(){var t=this.a
if(t!=null){C.a.B(t.d.b,this)
this.a=null}},
bq:function(){var t=this.b
if(t!=null){C.a.B(t.d.c,this)
this.b=null}},
e0:function(){var t=this.c
if(t!=null){C.a.B(t.d.d,this)
this.c=null}},
gaF:function(){return this.a==null||this.b==null||this.c==null},
d7:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.r
p=this.b
t=p==null?q:p.r
p=this.c
s=p==null?q:p.r
r=V.bp()
if(o!=null)r=r.G(0,o)
if(t!=null)r=r.G(0,t)
if(s!=null)r=r.G(0,s)
if(r.cj())return q
return r.X()},
d8:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.f
p=this.b
t=p==null?q:p.f
p=this.c
s=p==null?q:p.f
if(o==null||t==null||s==null)return q
p=t.Z(0,o)
r=new V.q(p.a,p.b,p.c).X()
p=s.Z(0,o)
return r.by(new V.q(p.a,p.b,p.c).X()).X()},
bv:function(){var t,s=this
if(s.d!=null)return!0
t=s.d7()
if(t==null){t=s.d8()
if(t==null)return!1}s.d=t
s.a.a.R()
return!0},
ap:function(a,b){var t=b.a
if(t==null)throw H.c(P.a_("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==t)throw H.c(P.a_("May not replace a face's vertex with a vertex attached to a different shape."))},
geu:function(a){var t=this
if(J.t(t.a,t.b))return!0
if(J.t(t.b,t.c))return!0
if(J.t(t.c,t.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.E()},
n:function(a){var t,s,r=this
if(r.gaF())return a+"disposed"
t=a+C.b.a7(J.a7(r.a.e),0)+", "+C.b.a7(J.a7(r.b.e),0)+", "+C.b.a7(J.a7(r.c.e),0)+" {"
s=r.d
t=(s!=null?t+(s.h(0)+", "):t+"-, ")+"-}"
return t},
E:function(){return this.n("")}}
F.hD.prototype={}
F.ip.prototype={
aJ:function(a,b,c){var t,s=b.a
s.a.a.v()
s=s.e
t=c.a
t.a.a.v()
if(s==t.e){s=b.b
s.a.a.v()
s=s.e
t=c.b
t.a.a.v()
if(s==t.e){s=b.c
s.a.a.v()
s=s.e
t=c.c
t.a.a.v()
t=s==t.e
s=t}else s=!1
return s}else{s=b.a
s.a.a.v()
s=s.e
t=c.b
t.a.a.v()
if(s==t.e){s=b.b
s.a.a.v()
s=s.e
t=c.c
t.a.a.v()
if(s==t.e){s=b.c
s.a.a.v()
s=s.e
t=c.a
t.a.a.v()
t=s==t.e
s=t}else s=!1
return s}else{s=b.a
s.a.a.v()
s=s.e
t=c.c
t.a.a.v()
if(s==t.e){s=b.b
s.a.a.v()
s=s.e
t=c.a
t.a.a.v()
if(s==t.e){s=b.c
s.a.a.v()
s=s.e
t=c.b
t.a.a.v()
t=s==t.e
s=t}else s=!1
return s}else return!1}}}}
F.hP.prototype={
aE:function(){var t=this
if(!t.gaF()){C.a.B(t.a.a.c.b,t)
t.a.a.R()}t.bp()
t.bq()},
bp:function(){var t=this.a
if(t!=null){C.a.B(t.c.b,this)
this.a=null}},
bq:function(){var t=this.b
if(t!=null){C.a.B(t.c.c,this)
this.b=null}},
gaF:function(){return this.a==null||this.b==null},
ap:function(a,b){var t=b.a
if(t==null)throw H.c(P.a_("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==t)throw H.c(P.a_("May not replace a line's vertex with a vertex attached to a different shape."))},
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.E()},
n:function(a){if(this.gaF())return a+"disposed"
return a+C.b.a7(J.a7(this.a.e),0)+", "+C.b.a7(J.a7(this.b.e),0)},
E:function(){return this.n("")}}
F.hQ.prototype={}
F.iP.prototype={
aJ:function(a,b,c){var t,s=b.a
s.a.a.v()
s=s.e
t=c.a
t.a.a.v()
if(s==t.e){s=b.b
s.a.a.v()
s=s.e
t=c.b
t.a.a.v()
return s==t.e}else{s=b.a
s.a.a.v()
s=s.e
t=c.b
t.a.a.v()
if(s==t.e){s=b.b
s.a.a.v()
s=s.e
t=c.a
t.a.a.v()
return s==t.e}else return!1}}}
F.i6.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.E()},
n:function(a){var t=this.a
if(t==null)return a+"disposed"
return a+C.b.a7(J.a7(t.e),0)},
E:function(){return this.n("")}}
F.ih.prototype={
gL:function(){var t=this.e
return t==null?this.e=D.c3():t},
b0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
if(f!=null)++f.d
a.a.v()
t=g.a.c.length
for(f=a.a.c,s=f.length,r=0;r<f.length;f.length===s||(0,H.G)(f),++r){q=f[r]
g.a.t(0,q.bw())}g.a.v()
for(f=a.b.b,s=f.length,r=0;r<f.length;f.length===s||(0,H.G)(f),++r){p=f[r]
o=g.a
n=p.a
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
g.b.a.a.t(0,m)
n=new F.i6()
if(m.a==null)H.Z(P.a_("May not create a point with a vertex which is not attached to a shape."))
n.a=m
m.b.b.push(n)
n.a.a.b.b.push(n)
o=n.a.a.e
if(o!=null)o.a_(null)}for(f=a.c.b,s=f.length,r=0;r<f.length;f.length===s||(0,H.G)(f),++r){l=f[r]
o=g.a
n=l.a
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=g.a
o=l.b
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.G()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=g.c.a
o.a.t(0,k)
o.a.t(0,j)
o=new F.hP()
n=k.a
if(n==null)H.Z(P.a_("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.Z(P.a_("May not create a line with vertices attached to different shapes."))
o.a=k
k.c.b.push(o)
o.b=j
j.c.c.push(o)
o.a.a.c.b.push(o)
o=o.a.a.e
if(o!=null)o.a_(null)}for(f=a.d.b,s=f.length,r=0;r<f.length;f.length===s||(0,H.G)(f),++r){i=f[r]
o=g.a
n=i.a
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=g.a
o=i.b
o.a.a.v()
o=o.e
if(typeof o!=="number")return o.G()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=g.a
n=i.c
n.a.a.v()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=g.d.a
n.a.t(0,k)
n.a.t(0,j)
n.a.t(0,h)
F.e3(k,j,h)}f=g.e
if(f!=null)f.b3(0)},
av:function(){var t,s=this,r=s.e
if(r!=null)++r.d
t=s.d.av()||!1
if(!s.a.av())t=!1
r=s.e
if(r!=null)r.b3(0)
return t},
e1:function(a,b){var t,s,r,q,p,o
this.a.t(0,a)
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.G)(b),++s){r=b[s]
for(;q=r.d,q.b.length+q.c.length+q.d.length>0;){q=q.k(0,0)
p=q.a
if(p==null||q.b==null||q.c==null)H.Z(P.a_("May not replace a face's vertex when the point has been disposed."))
if(J.t(p,r)){q.ap(r,a)
p=q.a
if(p!=null){C.a.B(p.d.b,q)
q.a=null}q.a=a
a.d.b.push(q)
o=1}else o=0
if(J.t(q.b,r)){q.ap(r,a)
p=q.b
if(p!=null){C.a.B(p.d.c,q)
q.b=null}q.b=a
a.d.c.push(q);++o}if(J.t(q.c,r)){q.ap(r,a)
p=q.c
if(p!=null){C.a.B(p.d.d,q)
q.c=null}q.c=a
a.d.d.push(q);++o}if(o>0){q=q.a.a.e
if(q!=null)q.a_(null)}}for(;q=r.c,q.b.length+q.c.length>0;){q=q.k(0,0)
p=q.a
if(p==null||q.b==null)H.Z(P.a_("May not replace a line's vertex when the point has been disposed."))
if(J.t(p,r)){q.ap(r,a)
p=q.a
if(p!=null){C.a.B(p.c.b,q)
q.a=null}q.a=a
a.c.b.push(q)
o=1}else o=0
if(J.t(q.b,r)){q.ap(r,a)
p=q.b
if(p!=null){C.a.B(p.c.c,q)
q.b=null}q.b=a
a.c.c.push(q);++o}if(o>0){q=q.a.a.e
if(q!=null)q.a_(null)}}for(;q=r.b.b,q.length>0;){q=q[0]
p=q.a
if(p==null)H.Z(P.a_("May not replace a point's vertex when the point has been disposed."))
if(J.t(p,r)){if(a.a==null)H.Z(P.a_("May not replace a point's vertex with a vertex which is not attached to a shape."))
p=q.a
if(p!=null){C.a.B(p.b.b,q)
q.a=null}q.a=a
a.b.b.push(q)
o=1}else o=0
if(o>0){q=q.a.a.e
if(q!=null)q.a_(null)}}this.a.B(0,r)}},
ck:function(a,b){var t,s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
t=n.a.c.slice(0)
for(;t.length!==0;){s=C.a.geD(t)
C.a.bF(t,0)
if(s!=null){r=[]
r.push(s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.e(t,q)
p=t[q]
if(p!=null&&a.aJ(0,s,p)){r.push(p)
C.a.bF(t,q)}}if(r.length>1){o=b.b0(r)
if(o!=null){n.e1(o,r)
t.push(o)}}}}n.a.v()
n.c.bG()
n.d.bG()
n.b.f2()
n.c.bH(new F.iP())
n.d.bH(new F.ip())
m=n.e
if(m!=null)m.b3(0)},
h:function(a){var t=this,s="   ",r=[]
if(t.a.c.length!==0){r.push("Vertices:")
r.push(t.a.n(s))}if(t.b.b.length!==0){r.push("Points:")
r.push(t.b.n(s))}if(t.c.b.length!==0){r.push("Lines:")
r.push(t.c.n(s))}if(t.d.b.length!==0){r.push("Faces:")
r.push(t.d.n(s))}return C.a.A(r,"\n")},
R:function(){var t=this.e
if(t!=null)t.a_(null)}}
F.ii.prototype={
ei:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=[]
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.t(0,l)
t.a.t(0,k)
t.a.t(0,i)
g.push(F.e3(l,k,i))
t.a.t(0,l)
t.a.t(0,i)
t.a.t(0,h)
g.push(F.e3(l,i,h))}else{m.t(0,k)
t.a.t(0,i)
t.a.t(0,h)
g.push(F.e3(k,i,h))
t.a.t(0,k)
t.a.t(0,h)
t.a.t(0,l)
g.push(F.e3(k,h,l))}o=!o}q=!q}return g},
gl:function(a){return this.b.length},
bH:function(a){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.a.c.length-1;s>=0;--s){r=t.a.c
if(s>=r.length)return H.e(r,s)
q=r[s]
for(r=q.d,p=r.b.length+r.c.length+r.d.length-1;p>=0;--p){o=q.d.k(0,p)
for(n=p-1;n>=0;--n){m=q.d.k(0,n)
if(a.aJ(0,o,m)){o.aE()
break}}}}},
bG:function(){var t,s,r
for(t=this.b.length-1;t>=0;--t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.geu(r)
if(s)r.aE()}},
av:function(){var t,s,r,q
for(t=this.b,s=t.length,r=!0,q=0;q<t.length;t.length===s||(0,H.G)(t),++q)if(!t[q].bv())r=!1
return r},
h:function(a){return this.E()},
n:function(a){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(a))
return C.a.A(q,"\n")},
E:function(){return this.n("")}}
F.ij.prototype={
gl:function(a){return this.b.length},
bH:function(a){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.a.c.length-1;s>=0;--s){r=t.a.c
if(s>=r.length)return H.e(r,s)
q=r[s]
for(r=q.c,p=r.b.length+r.c.length-1;p>=0;--p){o=q.c.k(0,p)
for(n=p-1;n>=0;--n){m=q.c.k(0,n)
if(a.aJ(0,o,m)){o.aE()
break}}}}},
bG:function(){var t,s,r
for(t=this.b.length-1;t>=0;--t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=J.t(r.a,r.b)
if(s)r.aE()}},
h:function(a){return this.E()},
n:function(a){var t,s,r=[],q=this.b.length
for(t=0;t<q;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r.push(s[t].n(a+(""+t+". ")))}return C.a.A(r,"\n")},
E:function(){return this.n("")}}
F.ik.prototype={
gl:function(a){return this.b.length},
f2:function(){var t,s,r
for(t=this.b.length-1;t>=0;--t){s=this.b
if(t>=s.length)return H.e(s,t)
s=s[t]
r=s.a
if(r.b.b.length>1){r=r.a
C.a.B(r.b.b,s)
r=s.a.a.e
if(r!=null)r.a_(null)
r=s.a
if(r!=null){C.a.B(r.b.b,s)
s.a=null}}}},
h:function(a){return this.E()},
n:function(a){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(a))
return C.a.A(q,"\n")},
E:function(){return this.n("")}}
F.iU.prototype={
bx:function(a){var t=this,s=t.f,r=t.r,q=t.x,p=t.y,o=t.z,n=t.Q,m=t.ch
return F.lx(t.cx,q,n,s,r,p,o,a,m)},
bw:function(){return this.bx(null)},
sb_:function(a,b){var t
if(!J.t(this.f,b)){this.f=b
t=this.a
if(t!=null)t.R()}},
sbC:function(a){var t
a=a==null?null:a.X()
if(!J.t(this.r,a)){this.r=a
t=this.a
if(t!=null)t.R()}},
ses:function(a){},
scD:function(a){var t
if(!J.t(this.y,a)){this.y=a
t=this.a
if(t!=null)t.R()}},
sbJ:function(a){var t
if(!J.t(this.z,a)){this.z=a
t=this.a
if(t!=null)t.R()}},
scd:function(a,b){var t
if(!J.t(this.Q,b)){this.Q=b
t=this.a
if(t!=null)t.R()}},
scL:function(a,b){var t
if(this.ch!==b){this.ch=b
t=this.a
if(t!=null)t.R()}},
bv:function(){var t,s=this,r={}
if(s.r!=null)return!0
t=s.a
if(t!=null){t=t.e
if(t!=null)++t.d}r.a=V.bp()
s.d.N(0,new F.j3(r))
s.r=r.a.X()
r=s.a
if(r!=null){r.R()
r=s.a.e
if(r!=null)r.b3(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.E()},
n:function(a){var t,s,r=this,q="-",p=[]
p.push(C.b.a7(J.a7(r.e),0))
t=r.f
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.r
if(t!=null)p.push(t.h(0))
else p.push(q)
p.push(q)
t=r.y
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.z
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.Q
if(t!=null)p.push(t.h(0))
else p.push(q)
p.push(V.C(r.ch,3,0))
t=r.cx
if(t!=null)p.push(t.h(0))
else p.push(q)
s=C.a.A(p,", ")
return a+"{"+s+"}"},
E:function(){return this.n("")}}
F.j3.prototype={
$1:function(a){var t,s=a==null?null:a.d
if(s!=null){t=this.a
t.a=t.a.G(0,s)}}}
F.iV.prototype={
v:function(){var t,s,r,q
if(this.b){t=this.c
s=t.length
for(r=0,q=0;q<s;++q){if(q>=t.length)return H.e(t,q)
t[q].e=r;++r}this.b=!1}},
t:function(a,b){var t,s=b.a
if(s!=null){if(s===this.a)return!1
throw H.c(P.a_("May not add a vertex already attached to another shape to this shape."))}s=this.c
b.e=s.length
t=this.a
b.a=t
s.push(b)
t.R()
return!0},
cb:function(a,b,c){var t=null,s=F.lx(t,t,a,b,t,c,t,t,0)
this.t(0,s)
return s},
ej:function(a){return this.cb(null,a,null)},
ca:function(a,b){return this.cb(a,null,b)},
gl:function(a){return this.c.length},
B:function(a,b){var t,s
if(b==null)return!1
t=this.a
if(b.a!==t)return!1
if(b.b.b.length===0){s=b.c
if(s.b.length===0&&s.c.length===0){s=b.d
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)throw H.c(P.a_("May not remove a vertex without first making it empty."))
b.a=null
C.a.B(this.c,b)
t.R()
return this.b=!0},
av:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)t[r].bv()
return!0},
h:function(a){return this.E()},
n:function(a){var t,s,r,q
this.v()
t=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q)t.push(s[q].n(a))
return C.a.A(t,"\n")},
E:function(){return this.n("")}}
F.iW.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var t,s=this.b,r=s.length
if(b<r){if(b<0)return H.e(s,b)
return s[b]}b-=r
s=this.c
t=s.length
if(b<t){if(b<0)return H.e(s,b)
return s[b]}b-=t
s=this.d
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
N:function(a,b){var t=this
C.a.N(t.b,b)
C.a.N(t.c,new F.iX(t,b))
C.a.N(t.d,new F.iY(t,b))},
h:function(a){return this.E()},
E:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(""))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(""))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(""))
return C.a.A(q,"\n")}}
F.iX.prototype={
$1:function(a){if(!J.t(a.a,this.a))this.b.$1(a)}}
F.iY.prototype={
$1:function(a){var t=this.a
if(!J.t(a.a,t)&&!J.t(a.b,t))this.b.$1(a)}}
F.j_.prototype={
gl:function(a){return this.b.length+this.c.length},
k:function(a,b){var t,s=this.b,r=s.length
if(b>=r){s=this.c
t=b-r
if(t<0||t>=s.length)return H.e(s,t)
return s[t]}else{if(b<0)return H.e(s,b)
return s[b]}},
h:function(a){return this.E()},
E:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(""))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(""))
return C.a.A(q,"\n")}}
F.j0.prototype={}
F.f_.prototype={
aJ:function(a,b,c){return J.t(b.f,c.f)}}
F.j1.prototype={}
F.iZ.prototype={
b0:function(a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null
for(t=a4.length,s=a3,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<t;++h){g=a4[h]
f=g.f
if(f!=null){o=o==null?f:new V.p(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.q(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.y
if(d!=null){r=r==null?d:new V.Y(r.a+d.a,r.b+d.b);++l}c=g.z
if(c!=null){s=s==null?c:new V.q(s.a+c.a,s.b+c.b,s.c+c.c);++k}b=g.Q
if(b!=null){a=b.a
a0=b.b
a1=b.c
b=b.d
if(q==null){b=[a,a0,a1,b]
q=new V.aG(b[0],b[1],b[2],b[3])}else{b=[a,a0,a1,b]
a=b[0]
a0=b[1]
a1=b[2]
b=b[3]
q=new V.aG(q.a+a,q.b+a0,q.c+a1,q.d+b)}++m}b=g.ch
if(typeof b!=="number")return H.o(b)
i+=b;++j}a2=F.lx(a3,a3,a3,a3,a3,a3,a3,a3,0)
if(n<=0||o==null)a2.sb_(0,a3)
else a2.sb_(0,o.a8(0,n))
if(p==null)a2.sbC(a3)
else a2.sbC(p.X())
a2.ses(a3)
if(l<=0||r==null)a2.scD(a3)
else a2.scD(r.a8(0,l))
if(k<=0||s==null)a2.sbJ(a3)
else a2.sbJ(s.a8(0,k))
if(m<=0||q==null)a2.scd(0,a3)
else{t=q.a8(0,m)
t=[t.a,t.b,t.c,t.d]
b=t[0]
a=t[1]
a0=t[2]
t=t[3]
a2.scd(0,new V.bB(V.h4(b),V.h4(a),V.h4(a0),V.h4(t)))}if(j<=0)a2.scL(0,0)
else a2.scL(0,i/j)
return a2}}
F.i4.prototype={
b0:function(a){var t,s,r,q=V.bp()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)q=new V.q(q.a+r.a,q.b+r.b,q.c+r.c)}q=q.X()
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s)a[s].sbC(q)
return null}}
F.j2.prototype={
gl:function(a){return this.b.length},
h:function(a){return this.E()},
E:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)q.push(t[r].n(""))
return C.a.A(q,"\n")}}
O.hp.prototype={
gL:function(){var t=this.c
return t==null?this.c=D.c3():t},
f3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h="            ",g=a.cy,f=g.gaK(g)
g=a.db
t=g.gaK(g)
g=a.dx
s=g.gaK(g)
g=this.a
g.a+="Object:     "+s.n(h)+"\n\n"
g.a+="View:       "+t.n(h)+"\n\n"
g.a+="Projection: "+f.n(h)+"\n\n"
C.a.sl(this.b,0)
r=b.c
if(r!=null){q=r.a
p=q.c.length
for(o=0;o<p;++o){r=q.c
if(o>=r.length)return H.e(r,o)
n=r[o].f
m=new V.bk(n.a,n.b,n.c,1)
l=s.b5(m)
k=t.b5(l)
j=f.b5(k)
i=new V.p(j.a,j.b,j.c).a8(0,j.d)
g.a+=m.a5(3,2)+" => "+l.a5(3,2)+" => "+k.a5(3,2)+" => "+j.a5(3,2)+" => "+i.a5(3,2)+"\n"
this.b.push(i)}}}}
O.iA.prototype={}
X.lh.prototype={}
X.hG.prototype={
gL:function(){var t=this.x
return t==null?this.x=D.c3():t}}
X.eu.prototype={
gL:function(){var t=this.f
return t==null?this.f=D.c3():t},
ar:function(a){var t=this.f
if(t!=null)t.a_(a)},
dn:function(){return this.ar(null)},
saL:function(a){var t,s,r=this
if(!J.t(r.b,a)){t=r.b
if(t!=null)t.gL().B(0,r.gc4())
s=r.b
r.b=a
if(a!=null)a.gL().t(0,r.gc4())
t=new D.ae("mover",s,r.b)
t.b=!0
r.ar(t)}}}
X.iy.prototype={}
V.il.prototype={
cZ:function(a,b){var t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a4(q,"scroll",new V.io(o),!1)},
ek:function(a){var t,s,r,q,p,o,n,m
this.e9()
t=document
s=t.createElement("div")
s.className="textPar"
r=this.b
q=C.a.eI(a)
r.toString
q=new H.X(q)
q=new P.cu(r.cI(new H.bH(q,q.gl(q))).a())
for(;q.w();){r=q.gK(q)
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
if(H.ne(r,"|",0)){o=r.split("|")
n=t.createElement("a")
n.className="linkPar"
if(1>=o.length)return H.e(o,1)
n.href=o[1]
n.textContent=o[0]
s.appendChild(n)}else{m=P.p3(C.U,r,C.r,!1)
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
e9:function(){var t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
t=new L.iJ()
t.a=new H.a8(u.V)
t.b=new H.a8(u.w)
t.c=P.cW(u.R)
t.d=t.M(0,q)
s=t.M(0,q).A(0,p)
r=K.a9(new H.X("*"))
s.a.push(r)
s.c=!0
s=t.M(0,p).A(0,p)
r=new K.bi()
r.a=[]
s.a.push(r)
s=K.a9(new H.X("*"))
r.a.push(s)
s=t.M(0,p).A(0,"BoldEnd")
r=K.a9(new H.X("*"))
s.a.push(r)
s.c=!0
s=t.M(0,q).A(0,o)
r=K.a9(new H.X("_"))
s.a.push(r)
s.c=!0
s=t.M(0,o).A(0,o)
r=new K.bi()
r.a=[]
s.a.push(r)
s=K.a9(new H.X("_"))
r.a.push(s)
s=t.M(0,o).A(0,n)
r=K.a9(new H.X("_"))
s.a.push(r)
s.c=!0
s=t.M(0,q).A(0,m)
r=K.a9(new H.X("`"))
s.a.push(r)
s.c=!0
s=t.M(0,m).A(0,m)
r=new K.bi()
r.a=[]
s.a.push(r)
s=K.a9(new H.X("`"))
r.a.push(s)
s=t.M(0,m).A(0,"CodeEnd")
r=K.a9(new H.X("`"))
s.a.push(r)
s.c=!0
s=t.M(0,q).A(0,l)
r=K.a9(new H.X("["))
s.a.push(r)
s.c=!0
s=t.M(0,l).A(0,k)
r=K.a9(new H.X("|"))
s.a.push(r)
r=t.M(0,l).A(0,j)
s=K.a9(new H.X("]"))
r.a.push(s)
r.c=!0
r=t.M(0,l).A(0,l)
s=new K.bi()
s.a=[]
r.a.push(s)
r=K.a9(new H.X("|]"))
s.a.push(r)
r=t.M(0,k).A(0,j)
s=K.a9(new H.X("]"))
r.a.push(s)
r.c=!0
r=t.M(0,k).A(0,k)
s=new K.bi()
s.a=[]
r.a.push(s)
r=K.a9(new H.X("|]"))
s.a.push(r)
t.M(0,q).A(0,i).a.push(new K.ha())
r=t.M(0,i).A(0,i)
s=new K.bi()
s.a=[]
r.a.push(s)
r=K.a9(new H.X("*_`["))
s.a.push(r)
r=t.M(0,"BoldEnd")
r.d=r.a.aQ(p)
r=t.M(0,n)
r.d=r.a.aQ(o)
r=t.M(0,"CodeEnd")
r.d=r.a.aQ(m)
r=t.M(0,j)
r.d=r.a.aQ("Link")
r=t.M(0,i)
r.d=r.a.aQ(i)
this.b=t}}
V.io.prototype={
$1:function(a){P.eP(C.i,new V.im(this.a))}}
V.im.prototype={
$0:function(){var t=C.e.ab(document.documentElement.scrollTop),s=this.a.style,r=H.d(-0.01*t)+"px"
s.top=r}}
Q.i.prototype={
gY:function(){var t=this.a
if(t>=1)if(t<=8){t=this.b
t=t>=1&&t<=8}else t=!1
else t=!1
return t},
gaX:function(a){return this.gY()?(this.a-1)*8+(this.b-1):-1},
cF:function(){if(this.gY()){var t=this.b-1
if(t<0||t>=8)return H.e("abcdefgh",t)
t="abcdefgh"[t]+(9-this.a)}else t="xx"
return t},
h:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.i))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.av.prototype={
h:function(a){var t=this,s=t.d,r=s!=null?", "+s.h(0)+" => "+H.d(t.e):""
return t.a+", "+t.b.h(0)+" => "+t.c.h(0)+r}}
Q.iq.prototype={
d_:function(){this.a=P.oa(64,new Q.ir($.U().a),!1)
this.c=null},
bw:function(){var t,s,r,q,p=Q.ls()
for(t=p.a,s=this.a,r=0;r<64;++r){if(r>=s.length)return H.e(s,r)
q=s[r]
if(r>=t.length)return H.e(t,r)
t[r]=q}return p},
D:function(a){var t,s
if(!a.gY())return $.lR()
t=a.gaX(a)
s=this.a
if(t<0||t>=s.length)return H.e(s,t)
return new Q.u(s[t])},
u:function(a,b){var t,s,r
if(!a.gY())return!1
t=this.a
s=a.gaX(a)
r=b.a
if(s<0||s>=t.length)return H.e(t,s)
t[s]=r
return!0},
cf:function(a){var t,s,r=a.a,q=$.h8(),p=q.a
if(typeof r!=="number")return r.C()
if(typeof p!=="number")return H.o(p)
t=new Q.u((r&p)>>>0)
for(s=0;r=this.a,s<r.length;++s){r=r[s]
p=q.a
if(typeof r!=="number")return r.C()
if(typeof p!=="number")return H.o(p)
if(new Q.u((r&p)>>>0).m(0,t))return Q.me(s)}return new Q.i(0,0)},
bz:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.bx(),f=a?$.bb():$.h7()
g=g.a
f=f.a
if(typeof g!=="number")return g.S()
if(typeof f!=="number")return H.o(f)
t=$.bV().a
if(typeof t!=="number")return H.o(t)
s=h.cf(new Q.u((g|f|1&t)>>>0))
if(!s.gY())return!1
r=a?-1:1
g=s.a
f=g+r
t=s.b
q=t+1
p=!a
o=$.cD()
if(h.J(new Q.i(f,q),p,[o]))return!0
n=t+-1
if(h.J(new Q.i(f,n),p,[o]))return!0
f=g+2
o=$.cC()
if(h.J(new Q.i(f,q),p,[o]))return!0
if(h.J(new Q.i(f,n),p,[o]))return!0
f=g+1
m=t+2
if(h.J(new Q.i(f,m),p,[o]))return!0
l=g+-1
if(h.J(new Q.i(l,m),p,[o]))return!0
m=g+-2
if(h.J(new Q.i(m,q),p,[o]))return!0
if(h.J(new Q.i(m,n),p,[o]))return!0
m=t+-2
if(h.J(new Q.i(f,m),p,[o]))return!0
if(h.J(new Q.i(l,m),p,[o]))return!0
for(o=g>=1,m=g<=8,k=1;k<8;++k){j=t+k
i=new Q.i(g,j)
if(h.J(i,p,[$.aS(),$.an()]))return!0
if(!(o&&m&&j>=1&&j<=8&&h.D(i).a==$.U().a))break}for(k=1;k<8;++k){j=t+-k
i=new Q.i(g,j)
if(h.J(i,p,[$.aS(),$.an()]))return!0
if(!(o&&m&&j>=1&&j<=8&&h.D(i).a==$.U().a))break}for(o=t>=1,m=t<=8,k=1;k<8;++k){j=g+k
i=new Q.i(j,t)
if(h.J(i,p,[$.aS(),$.an()]))return!0
if(!(j>=1&&j<=8&&o&&m&&h.D(i).a==$.U().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.i(j,t)
if(h.J(i,p,[$.aS(),$.an()]))return!0
if(!(j>=1&&j<=8&&o&&m&&h.D(i).a==$.U().a))break}for(k=1;k<8;++k){o=g+k
m=t+k
i=new Q.i(o,m)
if(h.J(i,p,[$.ba(),$.an()]))return!0
if(!(o>=1&&o<=8&&m>=1&&m<=8&&h.D(i).a==$.U().a))break}for(k=1;k<8;++k){o=g+k
m=t+-k
i=new Q.i(o,m)
if(h.J(i,p,[$.ba(),$.an()]))return!0
if(!(o>=1&&o<=8&&m>=1&&m<=8&&h.D(i).a==$.U().a))break}for(k=1;k<8;++k){o=g+-k
m=t+k
i=new Q.i(o,m)
if(h.J(i,p,[$.ba(),$.an()]))return!0
if(!(o>=1&&o<=8&&m>=1&&m<=8&&h.D(i).a==$.U().a))break}for(k=1;k<8;++k){o=-k
m=g+o
o=t+o
i=new Q.i(m,o)
if(h.J(i,p,[$.ba(),$.an()]))return!0
if(!(m>=1&&m<=8&&o>=1&&o<=8&&h.D(i).a==$.U().a))break}o=$.bx()
if(h.J(new Q.i(f,q),p,[o]))return!0
if(h.J(new Q.i(f,t),p,[o]))return!0
if(h.J(new Q.i(f,n),p,[o]))return!0
if(h.J(new Q.i(g,n),p,[o]))return!0
if(h.J(new Q.i(l,n),p,[o]))return!0
if(h.J(new Q.i(l,t),p,[o]))return!0
if(h.J(new Q.i(l,q),p,[o]))return!0
if(h.J(new Q.i(g,q),p,[o]))return!0
return!1},
J:function(a,b,c){var t,s,r,q,p,o
if(a.gY()){t=this.D(a)
t.toString
s=t.a
r=$.bb().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
if((s&r)>>>0===r===b){r=$.bW()
q=r.a
if(typeof q!=="number")return H.o(q)
p=new Q.u((s&q)>>>0)
for(o=c.length-1;o>=0;--o){if(o>=c.length)return H.e(c,o)
s=c[o].a
q=r.a
if(typeof s!=="number")return s.C()
if(typeof q!=="number")return H.o(q)
if(p.m(0,new Q.u((s&q)>>>0)))return!0}}}return!1},
eE:function(a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="Pawn en passent "
if(!a2.gY())return
t=b.D(a2)
s=new Q.is(b,t,a1)
r=t.a
q=$.bW().a
if(typeof r!=="number")return r.C()
if(typeof q!=="number")return H.o(q)
p=new Q.u((r&q)>>>0)
if(p.m(0,$.cD())){t=b.D(a2)
t.toString
r=t.a
q=$.bb().a
if(typeof r!=="number")return r.C()
if(typeof q!=="number")return H.o(q)
o=(r&q)>>>0===q
n=$.by().a
if(typeof n!=="number")return H.o(n)
m=o?-1:1
l=a2.a
k=l+m
j=a2.b
i=new Q.i(k,j)
h=b.D(i).a
g=$.U().a
if(h==g){s.$1(new Q.av("Pawn move to "+i.h(0),a2,i,a,a))
if((r&n)>>>0!==n){i=new Q.i(l+(m+m),j)
if(b.D(i).a==g)s.$1(new Q.av("Pawn move to "+i.h(0),a2,i,a,a))}}r=j+-1
i=new Q.i(k,r)
f=b.D(i)
h=f.a
e=$.lR().a
if(h!=e)if(h!=g){if(typeof h!=="number")return h.C()
h=(h&q)>>>0===q!==o}else h=!1
else h=!1
if(h)s.$1(new Q.av("Pawn take "+f.gal()+" at "+i.h(0),a2,i,i,a));++j
i=new Q.i(k,j)
f=b.D(i)
h=f.a
if(h!=e)if(h!=g){if(typeof h!=="number")return h.C()
h=(h&q)>>>0===q!==o}else h=!1
else h=!1
if(h)s.$1(new Q.av("Pawn take "+f.gal()+" at "+i.h(0),a2,i,i,a))
if(b.c!=null)h=l===(o?4:5)
else h=!1
if(h){i=new Q.i(k,r)
if(i.gY()&&b.D(i).a==g){d=new Q.i(l,r)
f=b.D(d)
h=f.a
if(h!=g){if(typeof h!=="number")return h.C()
h=(h&q)>>>0===q!==o}else h=!1
if(h){c=b.c.D(new Q.i(l+(m+m),r))
r=c.a
if(typeof r!=="number")return r.C()
if((r&n)>>>0!==n&&c.bO(f))s.$1(new Q.av(a0+f.gal()+" at "+i.h(0),a2,i,d,a))}}i=new Q.i(k,j)
if(i.gY()&&b.D(i).a==g){d=new Q.i(l,j)
f=b.D(d)
r=f.a
if(r!=g){if(typeof r!=="number")return r.C()
r=(r&q)>>>0===q!==o}else r=!1
if(r){c=b.c.D(new Q.i(l+(m+m),j))
r=c.a
if(typeof r!=="number")return r.C()
if((r&n)>>>0!==n&&c.bO(f))s.$1(new Q.av(a0+f.gal()+" at "+i.h(0),a2,i,d,a))}}}}else if(p.m(0,$.aS()))b.e3(s,a2)
else if(p.m(0,$.cC())){b.P(s,a2,2,1)
b.P(s,a2,2,-1)
b.P(s,a2,1,2)
b.P(s,a2,-1,2)
b.P(s,a2,-2,1)
b.P(s,a2,-2,-1)
b.P(s,a2,1,-2)
b.P(s,a2,-1,-2)}else if(p.m(0,$.ba())){b.T(s,a2,1,1)
b.T(s,a2,1,-1)
b.T(s,a2,-1,-1)
b.T(s,a2,-1,1)}else if(p.m(0,$.an())){b.T(s,a2,1,1)
b.T(s,a2,1,0)
b.T(s,a2,1,-1)
b.T(s,a2,0,-1)
b.T(s,a2,-1,-1)
b.T(s,a2,-1,0)
b.T(s,a2,-1,1)
b.T(s,a2,0,1)}else if(p.m(0,$.bx()))b.dh(s,a2)},
P:function(a,b,c,d){var t,s,r,q,p,o=new Q.i(b.a+c,b.b+d)
if(!o.gY())return!0
t=this.D(b)
s=this.D(o)
r=s.a
if(r==$.U().a){a.$1(new Q.av(t.gal()+" move to "+o.h(0),b,o,null,null))
return!1}t.toString
q=t.a
p=$.bb().a
if(typeof q!=="number")return q.C()
if(typeof p!=="number")return H.o(p)
if(typeof r!=="number")return r.C()
r=(r&p)>>>0===p!==((q&p)>>>0===p)
if(r)a.$1(new Q.av(t.gal()+" take "+s.gal()+" at "+o.h(0),b,o,o,null))
return!0},
T:function(a,b,c,d){var t
for(t=1;t<8;++t)if(this.P(a,b,c*t,d*t))return},
e3:function(a,b){var t,s,r,q,p,o,n,m=this,l=m.D(b)
l.toString
t=l.a
s=$.bb().a
if(typeof t!=="number")return t.C()
if(typeof s!=="number")return H.o(s)
r=$.by().a
if(typeof r!=="number")return H.o(r)
m.T(a,b,0,1)
m.T(a,b,0,-1)
m.T(a,b,1,0)
m.T(a,b,-1,0)
if((t&r)>>>0!==r){q=new Q.i((t&s)>>>0===s?8:1,4)
t=m.D(q).a
s=$.bW().a
if(typeof t!=="number")return t.C()
if(typeof s!=="number")return H.o(s)
if(new Q.u((t&s)>>>0).m(0,$.bx())&&(t&r)>>>0!==r){t=b.b
p=t>4?-1:1
n=t+p
t=b.a
while(!0){if(!(n!==4)){o=!0
break}if(m.D(new Q.i(t,n)).a!=$.U().a){o=!1
break}n+=p}if(o){t=q.a
s=4-p-p
a.$1(new Q.av("Rook castles with King",b,new Q.i(t,s+p),q,new Q.i(t,s)))}}}},
dh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.D(b)
i.toString
t=i.a
s=$.by().a
if(typeof t!=="number")return t.C()
if(typeof s!=="number")return H.o(s)
j.P(a,b,1,1)
j.P(a,b,1,0)
j.P(a,b,1,-1)
j.P(a,b,0,-1)
j.P(a,b,-1,-1)
j.P(a,b,-1,0)
j.P(a,b,-1,1)
j.P(a,b,0,1)
if((t&s)>>>0!==s)for(t=b.a,s=b.b,r=1;r<=8;r+=7){q=new Q.i(t,r)
p=j.D(q).a
o=$.bW().a
if(typeof p!=="number")return p.C()
if(typeof o!=="number")return H.o(o)
if(new Q.u((p&o)>>>0).m(0,$.aS())){o=$.by().a
if(typeof o!=="number")return H.o(o)
o=(p&o)>>>0!==o
p=o}else p=!1
if(p){n=s>r?-1:1
l=s+n
k=l
while(!0){if(!(k!==r)){m=!0
break}if(j.D(new Q.i(t,k)).a!=$.U().a){m=!1
break}k+=n}if(m){p=l+n
a.$1(new Q.av("King castles with Rook",b,new Q.i(t,p),q,new Q.i(t,p-n)))}}}},
bL:function(a,b,c){var t,s,r,q,p,o,n,m,l=0
while(!0){if(!(l<64)){t=!1
break}s=this.a
if(l>=s.length)return H.e(s,l)
s=s[l]
r=$.by().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
if((s&r)>>>0===r){t=!0
break}++l}q=Q.lu(8,8)
q.d=c
for(p=0;p<8;p=o)for(o=p+1,s=(o-1)*8,n=0;n<8;n=m){m=n+1
l=s+(m-1)
r=this.a
if(l<0||l>=r.length)return H.e(r,l)
q.aR(p,n,new Q.u(r[l]).cH(0,b,t))}return q.h(0)},
h:function(a){return this.bL(a,!1,!0)},
cG:function(a,b){return this.bL(a,b,!0)},
fe:function(a,b){return this.bL(a,!1,b)}}
Q.ir.prototype={
$1:function(a){return this.a}}
Q.is.prototype={
$1:function(a){var t=this.a.bw(),s=a.b,r=t.D(s),q=a.d,p=q!=null?t.D(q):null,o=$.U()
t.u(s,o)
s=p!=null
if(s)t.u(q,o)
q=$.by()
o=r.a
q=q.a
if(typeof o!=="number")return o.S()
if(typeof q!=="number")return H.o(q)
t.u(a.c,new Q.u((o|q)>>>0))
if(s&&a.e!=null){s=p.a
if(typeof s!=="number")return s.S()
t.u(a.e,new Q.u((s|q)>>>0))}s=this.b
s.toString
s=s.a
q=$.bb().a
if(typeof s!=="number")return s.C()
if(typeof q!=="number")return H.o(q)
if(!t.bz((s&q)>>>0===q))this.c.$1(a)}}
Q.iw.prototype={
bi:function(a,b){var t=this.a,s=a*t+b
if(s<0||s>=t*this.b)return-1
return s},
aR:function(a,b,c){var t,s=this.bi(a,b)
if(s<0)return
t=this.c
if(s>=t.length)return H.e(t,s)
t[s]=c},
cM:function(a,b){var t,s=this.bi(a,b)
if(s<0)return""
t=this.c
if(s>=t.length)return H.e(t,s)
t=t[s]
return t==null?"":t},
di:function(){var t,s,r,q,p=this.c,o=p.length
if(o<=0)return 0
t=p[0]
s=(t==null?"":t).length
for(r=1;r<o;++r){t=p[r]
q=(t==null?"":t).length
if(q>s)s=q}return s},
h:function(a){var t,s,r,q,p,o,n,m,l,k=this,j=[],i=k.di()
if(k.d){t=(""+(k.a-1)).length+1
s=C.b.b1("",t+C.c.W(i-1,2))
for(r=k.b,q=i+1,p=0;p<r;){++p
s+=C.b.b1(" "+p,q)}j.push(C.b.fh(s))}else t=0
for(r=k.a,q=k.b,o=0;o<r;++o){s=k.d?C.b.b1(""+(o+1),t):""
for(p=0;p<q;++p){if(k.d||p!==0)s+="|"
n=k.bi(o,p)
m=k.c
if(n<0||n>=m.length)return H.e(m,n)
l=m[n]
s+=C.b.b1(l==null?"":l,i)}j.push(k.d?s+"|":s)}return C.a.A(j,"\n")}}
Q.u.prototype={
S:function(a,b){var t=this.a,s=b.a
if(typeof t!=="number")return t.S()
if(typeof s!=="number")return H.o(s)
return new Q.u((t|s)>>>0)},
bO:function(a){var t,s=this.a,r=$.h8().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
t=a.a
if(typeof t!=="number")return t.C()
return(s&r)>>>0===(t&r)>>>0},
m:function(a,b){var t
if(b==null)return!1
if(!(b instanceof Q.u))return!1
t=b.a
return this.a==t},
gew:function(){var t,s=this.a,r=$.lQ().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
t=new Q.u((s&r)>>>0)
if(t.m(0,$.h7()))return"B"
if(t.m(0,$.bb()))return"W"
return" "},
gf0:function(){var t,s=this.a,r=$.bW().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
t=new Q.u((s&r)>>>0)
if(t.m(0,$.cD()))return"P"
if(t.m(0,$.aS()))return"R"
if(t.m(0,$.cC()))return"H"
if(t.m(0,$.ba()))return"B"
if(t.m(0,$.an()))return"Q"
if(t.m(0,$.bx()))return"K"
return" "},
geL:function(){var t=this.a,s=$.bV().a
if(typeof t!=="number")return t.C()
if(typeof s!=="number")return H.o(s)
s=(t&s)>>>0
if(s===$.U().a)return" "
return""+s},
gal:function(){var t,s=this.a,r=$.bW().a
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.o(r)
t=new Q.u((s&r)>>>0)
if(t.m(0,$.cD()))return"Pawn"
if(t.m(0,$.aS()))return"Rook"
if(t.m(0,$.cC()))return"Knight"
if(t.m(0,$.ba()))return"Bishop"
if(t.m(0,$.an()))return"Queen"
if(t.m(0,$.bx()))return"King"
return"Empty"},
cH:function(a,b,c){var t,s,r=this,q=r.a
if(q==$.U().a)return""
if(c){t=$.by().a
if(typeof q!=="number")return q.C()
if(typeof t!=="number")return H.o(t)
s=(q&t)>>>0===t?"+":" "}else s=""
s=s+r.gew()+r.gf0()
return b?s+r.geL():s},
h:function(a){return this.cH(a,!0,!0)}}
B.aN.prototype={
gaO:function(a){var t=this,s=t.a+1,r=t.d,q=t.f
if(s>=16){r+=16
q=q==null?null:q.gaO(q)
s=0}return new B.aN(s,t.b,t.c,r,t.e,q)},
gaH:function(){var t=this,s=t.c+1,r=t.e,q=t.f
if(s>=16){r+=16
q=q==null?null:q.gaH()
s=0}return new B.aN(t.a,t.b,s,t.d,r,q)},
h:function(a){var t=this
return H.d(t.f)+".block("+t.a+", "+t.b+", "+t.c+", ("+t.d+", "+t.e+"), "+B.nM(t.gaf(t))+")"},
gaf:function(a){var t=this,s=t.f
s=s==null?null:s.am(t.a,t.b,t.c)
if(s==null)s=t.b<0?100:0
return s}}
B.hh.prototype={
ce:function(a){var t,s,r
for(t=0;t<16;++t)for(s=0;s<16;++s)for(r=0;r<this.b;++r)a.aB(t,r,s,this.dg(t,r,s))
a.cg()},
dg:function(a,b,c){var t=a===0
if(t||c===0)return t&&c===0?112:110
if(a===1&&c===1)return 110
return C.c.bN(a+b+c,2)===0?113:111}}
B.hi.prototype={
cW:function(a){var t,s,r,q,p,o,n,m,l=this
l.d=new Uint8Array(12288)
l.e=[]
for(t=l.c.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=t[r]
p=E.m4(null)
o=q.y
if(o.c5([p])){n=o.a
m=n.length
n.push(p)
o=o.c
if(o!=null)o.$2(m,[p])}l.e.push(p)}l.b=l.a=0},
h:function(a){return"chunk("+this.a+", "+this.b+")"},
cg:function(){var t=this
t.sc2(!1)
t.gaZ(t)
t.gaO(t)
t.gaH()
t.geo(t)},
am:function(a,b,c){var t,s
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
t=this.d
s=(a*48+b)*16+c
if(s<0||s>=12288)return H.e(t,s)
return t[s]},
aB:function(a,b,c,d){var t,s
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
t=this.d
s=(a*48+b)*16+c
if(s<0||s>=12288)return H.e(t,s)
t[s]=d
return!0},
gaZ:function(a){return this.c.aj(this.a-16,this.b)},
gaH:function(){return this.c.aj(this.a,this.b+16)},
gaO:function(a){return this.c.aj(this.a+16,this.b)},
geo:function(a){return this.c.aj(this.a,this.b-16)},
sc2:function(a){var t,s,r
for(t=this.e,s=t.length,r=0;r<s;++r)t[r].b=!1}}
B.hj.prototype={
ev:function(a,b,c){var t,s,r=this
r.b=b
r.c=a
r.d=c
r.e=$.aK()
r.d9()
for(;r.eb(););t=r.b
s=r.d
r.b=t.G(0,new V.p(s.a,s.b,s.c))
return!0},
d9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=a6.c,a8=a6.b,a9=a7.bM(0,new V.q(a8.a,a8.b,a8.c))
a8=a9.bM(0,a6.d)
a7=a9.a
t=a8.a
s=Math.min(a7,t)
r=Math.max(a7+a9.d,t+a8.d)
t=a9.b
a7=a8.b
q=Math.min(t,a7)
p=Math.max(t+a9.e,a7+a8.e)
a7=a9.c
t=a8.c
o=Math.min(a7,t)
n=Math.max(a7+a9.f,t+a8.f)
a8=a6.a
m=a8.am(s,q,o)
l=a8.am(s+(r-s),q+(p-q),o+(n-o))
k=l.a+l.d
j=l.c+l.e
C.a.sl(a6.f,0)
C.a.sl(a6.r,0)
C.a.sl(a6.x,0)
a7=l.b
i=m
while(!0){if(!(i.a+i.d<=k))break
h=i
while(!0){if(!(h.b<=a7))break
g=h
while(!0){if(!(g.c+g.e<=j))break
a8=g.gaf(g)
if(a8>=100&&a8<=117){f=$.aK()
a8=g.a
e=a8-1
d=g.d
c=g.f
if(e<0){b=d-16
a=c==null?null:c.c.aj(c.a-16,c.b)
e=15}else{a=c
b=d}t=g.b
a0=g.c
a1=g.e
a2=new B.aN(e,t,a0,b,a1,a)
a3=a2.gaf(a2)
a3=a3>=100&&a3<=117
if(a3){a3=$.cy()
f=new V.aj(f.a|a3.a)}a2=g.gaO(g)
a3=a2.gaf(a2)
a3=a3>=100&&a3<=117
if(a3){a3=$.cz()
f=new V.aj(f.a|a3.a)}a2=new B.aN(a8,t-1,a0,d,a1,c)
a3=a2.gaf(a2)
a3=a3>=100&&a3<=117
if(a3){a3=$.dM()
f=new V.aj(f.a|a3.a)}a2=new B.aN(a8,t+1,a0,d,a1,c)
a3=a2.gaf(a2)
a3=a3>=100&&a3<=117
if(a3){a3=$.cA()
f=new V.aj(f.a|a3.a)}a4=a0-1
if(a4<0){a5=a1-16
c=c==null?null:c.c.aj(c.a,c.b-16)
a4=15}else a5=a1
a2=new B.aN(a8,t,a4,d,a5,c)
a3=a2.gaf(a2)
a3=a3>=100&&a3<=117
if(a3){a3=$.cB()
f=new V.aj(f.a|a3.a)}a2=g.gaH()
a3=a2.gaf(a2)
a3=a3>=100&&a3<=117
if(a3){a3=$.dN()
f=new V.aj(f.a|a3.a)}a3=$.nk()
if(!J.t(f,a3)){a6.f.push(V.z(a8+d,t,a0+a1,1,1,1))
a8=a6.r
f.toString
t=$.dL().a
a8.push(new V.aj(a3.a&t&~f.a))
a6.x.push(!1)}}g=g.gaH()}h=new B.aN(h.a,h.b+1,h.c,h.d,h.e,h.f)}i=i.gaO(i)}},
eb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.d.cj())return!1
t=h.c
s=h.b
r=t.bM(0,new V.q(s.a,s.b,s.c))
q=$.aK()
for(p=0,o=-1,n=0;t=h.f,n<t.length;++n){s=h.x
if(n>=s.length)return H.e(s,n)
if(!s[n]){m=t[n]
t=h.r
if(n>=t.length)return H.e(t,n)
l=t[n]
t=h.d
s=$.iT
if(s==null)s=$.iT=new V.q(0,0,0)
k=Y.nf(r,m,t,s,$.dL(),l)
if(k.a===C.d)if(J.t(q,$.aK())||p>k.b){q=k.y
p=k.b
o=n}}}t=J.b8(q)
if(t.m(q,$.aK()))return!1
s=h.x
if(o<0||o>=s.length)return H.e(s,o)
s[o]=!0
j=h.d.F(0,p)
i=h.d.F(0,1-p)
if(t.m(q,$.cz())||t.m(q,$.cy())){t=h.b
h.b=new V.p(t.a+j.a,t.b+j.b,t.c+j.c)
h.d=new V.q(0,i.b,i.c)}else if(t.m(q,$.cA())||t.m(q,$.dM())){t=h.b
s=t.b
h.b=new V.p(t.a+j.a,s+j.b,t.c+j.c)
h.d=new V.q(i.a,0,i.c)}else if(t.m(q,$.dN())||t.m(q,$.cB())){t=h.b
s=t.c
h.b=new V.p(t.a+j.a,t.b+j.b,s+j.c)
h.d=new V.q(i.a,i.b,0)}h.e=new V.aj(h.e.a|q.a)
return!0},
h:function(a){return"Collider("+H.d(this.b)+", "+H.d(this.e)+")"}}
B.hE.prototype={
ce:function(a){var t,s,r,q,p=this,o=Math.max(p.a,p.b)
for(t=0;t<16;++t)for(s=0;s<16;++s){for(r=0;q=p.a,r<q;++r)a.aB(t,r,s,103)
for(r=q;r<p.b;++r)a.aB(t,r,s,101)
a.aB(t,o,s,102)}a.cg()}}
B.j4.prototype={
d0:function(a,b){var t,s,r,q,p=this
p.c=[]
p.d=[]
p.e=[]
for(t=0;t<140;++t)p.c.push(B.nQ(p))
for(s=p.b,r=-32;r<32;r+=16)for(q=-32;q<32;q+=16)s.ce(p.cs(r,q))},
aj:function(a,b){var t,s,r,q
for(t=this.d,s=t.length,r=0;r<s;++r){q=t[r]
if(q.a===a&&q.b===b)return q}return null},
am:function(a,b,c){var t,s,r,q=C.e.aG(a),p=C.e.aG(b),o=C.e.aG(c),n=q<0?q-16+1:q,m=o<0?o-16+1:o
n=C.c.W(n,16)*16
m=C.c.W(m,16)*16
t=this.aj(n,m)
s=q-n
r=o-m
if(s<0)s+=16
return new B.aN(s,p,r<0?r+16:r,n,m,t)},
cs:function(a,b){var t,s=this.c
if(0>=s.length)return H.e(s,-1)
t=s.pop()
t.a=a
t.b=b
t.sc2(!1)
this.d.push(t)
return t}}
M.jU.prototype={
$1:function(a){var t=new Uint8Array(1000)
a.au(1,new M.jT(t))
a.i("\n"+H.d(t),"info_log")}}
M.jT.prototype={
$0:function(){var t,s,r
for(t=this.a,s=0;s<1000;++s)t[s]=0
for(r=0;r<100;++r)for(s=0;s<1000;++s)t[s]=t[s]+1}}
M.jV.prototype={
$1:function(a){var t=P.mc(1000,0,!1)
a.au(1,new M.jS(t))
a.i("\n"+H.d(t),"info_log")}}
M.jS.prototype={
$0:function(){var t,s,r
for(t=this.a,s=0;s<1000;++s)t[s]=0
for(r=0;r<100;++r)for(s=0;s<1000;++s)t[s]=t[s]+1}}
M.jW.prototype={
$1:function(a){var t={}
t.a=null
a.au(1,new M.jR(t))}}
M.jR.prototype={
$0:function(){this.a.a=F.n4(8,null,8)}}
M.jX.prototype={
$1:function(a){var t={}
t.a=null
a.au(1,new M.jQ(t))}}
M.jQ.prototype={
$0:function(){var t=F.lO()
this.a.a=t
t.av()}}
M.jY.prototype={
$1:function(a){var t={}
t.a=null
a.au(1,new M.jP(t))}}
M.jP.prototype={
$0:function(){var t=F.lO()
this.a.a=t
t.ck(new F.f_(),new F.iZ())}}
M.jZ.prototype={
$1:function(a){var t={}
t.a=null
a.au(1,new M.jO(t))}}
M.jO.prototype={
$0:function(){this.a.a=F.lO()}}
M.k_.prototype={
$3:function(a,b,c){var t="warning_log",s=C.a.A(c,"\n")
if(s!==b){a.i("Expected:\n  "+H.dK(s,"\n","\n  ")+"\n",t)
a.i("Result:\n  "+H.dK(b,"\n","\n  ")+"\n",t)
a.i("Unexpected string of a chess game state.\n\n","error_log")
a.j()}else a.i(b+"\n\n","info_log")}}
M.k0.prototype={
$4:function(a,b,c,d){var t="error_log",s=Q.S(d)
a.i("State:\n"+H.d(s)+"\n","info_log")
if(s.bz(!0)!==b){a.i("Expected IsChecked(white) to return "+b+" but it wasn't.\n",t)
a.j()}if(s.bz(!1)!==c){a.i("Expected IsChecked(black) to return "+c+" but it wasn't\n",t)
a.j()}}}
M.k2.prototype={
$4:function(a,b,c,d){var t,s,r,q,p,o,n,m,l="info_log"
a.i("moving "+c+"\n",l)
t=b.cf(Q.mz(c))
s=[]
b.eE(C.a.geg(s),t)
r=s.length
q=new Array(r)
q.fixed$length=Array
p=Q.lu(8,8)
p.aR(t.a-1,t.b-1,"O")
for(o=s.length-1;o>=0;--o){if(o>=s.length)return H.e(s,o)
n=s[o]
m=J.a7(n)
if(o>=r)return H.e(q,o)
q[o]=m
m=n.c
p.aR(m.a-1,m.b-1,"X")}a.i("Movements:\n"+p.h(0)+"\n",l)
this.a.$3(a,C.a.A(q,"\n"),d)}}
M.k1.prototype={
$6:function(a,b,c,d,e,f){var t,s,r,q,p="error_log",o=new Q.i(b,c)
if(o.gY()!==d){a.i("Unexpected onBoard: "+o.gY()+" != "+d+"\n",p)
a.j()}if(o.gaX(o)!==e){a.i("Unexpected index: "+o.gaX(o)+" != "+e+"\n",p)
a.j()}if(o.cF()!==f){a.i("Unexpected notation: "+o.cF()+" != "+f+"\n",p)
a.j()}if(!o.gY()){t=0
s=0}else{s=c
t=b}r=Q.me(e)
q=r.a
if(q!==t){a.i("Unexpected row from index: "+q+" != "+t+"\n",p)
a.j()}q=r.b
if(q!==s){a.i("Unexpected column from index: "+q+" != "+s+"\n",p)
a.j()}}}
M.k3.prototype={
$1:function(a){var t=this.a
t.$6(a,0,0,!1,-1,"xx")
t.$6(a,1,1,!0,0,"a8")
t.$6(a,2,2,!0,9,"b7")
t.$6(a,3,3,!0,18,"c6")
t.$6(a,4,4,!0,27,"d5")
t.$6(a,5,5,!0,36,"e4")
t.$6(a,6,6,!0,45,"f3")
t.$6(a,7,7,!0,54,"g2")
t.$6(a,8,8,!0,63,"h1")
t.$6(a,4,7,!0,30,"g5")
t.$6(a,9,1,!1,-1,"xx")
t.$6(a,1,9,!1,-1,"xx")}}
M.k4.prototype={
$1:function(a){var t="    1   2   3   4   5   6   7   8",s="1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|",r="2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|",q="3 |   |   |   |   |   |   |   |   |",p="4 |   |   |   |   |   |   |   |   |",o="5 |   |   |   |   |   |   |   |   |",n="6 |   |   |   |   |   |   |   |   |",m="7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|",l="8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|",k="BR|BH|BB|BK|BQ|BB|BH|BR",j="BP|BP|BP|BP|BP|BP|BP|BP",i="  |  |  |  |  |  |  |  ",h="WP|WP|WP|WP|WP|WP|WP|WP",g="WR|WH|WB|WK|WQ|WB|WH|WR",f="   |   |   |   |   |   |   |   ",e=Q.mx(),d=this.a
d.$3(a,e.h(0),["   1  2  3  4  5  6  7  8","1 |BR|BH|BB|BK|BQ|BB|BH|BR|","2 |BP|BP|BP|BP|BP|BP|BP|BP|","3 |  |  |  |  |  |  |  |  |","4 |  |  |  |  |  |  |  |  |","5 |  |  |  |  |  |  |  |  |","6 |  |  |  |  |  |  |  |  |","7 |WP|WP|WP|WP|WP|WP|WP|WP|","8 |WR|WH|WB|WK|WQ|WB|WH|WR|"])
d.$3(a,e.cG(0,!0),[t,s,r,q,p,o,n,m,l])
d.$3(a,e.fe(0,!1),[k,j,i,i,i,i,h,g])
d.$3(a,J.le(Q.S([k,j,i,i,i,i,h,g]),!0),[t,s,r,q,p,o,n,m,l])
d.$3(a,J.le(Q.S([" BR|   | BB| BK|   | BB| BH|   "," WP|   |   |+BQ|   | BP|+BQ|+BQ","   |+WP|   |   |+BP|   |   |   ","   |   |+WP|+BP|   |   |   |   ","   |   |+BP|+WP|   |   |   |   ","   |+BP|   |   |+WP|   |   |   "," BP|   |   |+WK|   |+WP|+WQ|+WQ","   | WH| WB|   |+WQ| WB|   | WR"]),!0),["    1    2    3    4    5    6    7    8","1 | BR1|    | BB1| BK1|    | BB2| BH1|    |","2 | WP1|    |    |+BQ1|    | BP1|+BQ2|+BQ3|","3 |    |+WP2|    |    |+BP2|    |    |    |","4 |    |    |+WP3|+BP3|    |    |    |    |","5 |    |    |+BP4|+WP4|    |    |    |    |","6 |    |+BP5|    |    |+WP5|    |    |    |","7 | BP6|    |    |+WK1|    |+WP6|+WQ1|+WQ2|","8 |    | WH1| WB1|    |+WQ3| WB2|    | WR1|"])
d.$3(a,J.le(Q.S(["BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1","BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1",f,f,f,f,"WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1","WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1"]),!0),[t,"1 |BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1|","2 |BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1|",q,p,o,n,"7 |WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1|","8 |WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1|"])}}
M.k5.prototype={
$1:function(a){var t="  |  |  |BK|  |  |  |  ",s="  |  |  |  |  |  |  |  ",r="  |  |  |WK|  |  |  |  ",q="  |  |  |  |  |  |BK|  ",p="  |WK|  |  |  |  |  |  ",o=this.a
o.$4(a,!1,!1,[t,s,s,s,s,s,s,r])
o.$4(a,!0,!0,[s,s,s,t,r,s,s,s])
o.$4(a,!1,!0,[s,q,s,s,"  |  |  |WQ|  |  |  |  ",s,p,s])
o.$4(a,!1,!0,[s,q,s,s,s,"  |  |BR|  |  |  |  |  ","  |WK|  |  |  |  |WR|  ",s])
o.$4(a,!1,!0,[s,q,s,s,s,"  |  |WB|  |  |  |  |  ","  |WK|  |  |  |  |BB|  ",s])
o.$4(a,!0,!0,[s,q,"  |  |  |  |  |WP|  |  ",s,s,"  |  |BP|  |  |  |  |  ",p,s])
o.$4(a,!1,!1,[s,"  |  |  |  |  |  |WK|  ","  |  |  |  |  |BP|  |  ",s,s,"  |  |WP|  |  |  |  |  ","  |BK|  |  |  |  |  |  ",s])
o.$4(a,!0,!0,[s,q,s,"  |  |  |  |  |WH|  |  ","  |  |  |  |BH|  |  |  ","  |  |WK|  |  |  |  |  ",s,s])}}
M.k6.prototype={
$1:function(a){var t,s="Pawn move to 6 4, 7 4 => 6 4",r=" BR1| BH1| BB1| BK1| BQ1| BB2| BH2| BR2",q="    |    |    |    |    |    |    |    ",p=" WR1| WH1| WB1| WK1| WQ1| WB2| WH2| WR2",o="  |  |  |  |  |  |  |  ",n=Q.mx(),m=this.a
m.$4(a,n,"WP1",["Pawn move to 6 1, 7 1 => 6 1","Pawn move to 5 1, 7 1 => 5 1"])
m.$4(a,n,"WP4",[s,"Pawn move to 5 4, 7 4 => 5 4"])
m.$4(a,n,"WP8",["Pawn move to 6 8, 7 8 => 6 8","Pawn move to 5 8, 7 8 => 5 8"])
m.$4(a,n,"BP1",["Pawn move to 3 1, 2 1 => 3 1","Pawn move to 4 1, 2 1 => 4 1"])
m.$4(a,n,"BP4",["Pawn move to 3 4, 2 4 => 3 4","Pawn move to 4 4, 2 4 => 4 4"])
m.$4(a,n,"BP8",["Pawn move to 3 8, 2 8 => 3 8","Pawn move to 4 8, 2 8 => 4 8"])
t=Q.S([r,"    | BP2| BP3|    | BP5| BP6| BP7|    ",q,q,"+BP1|+WP2|+WP3|+BP4|+WP5|    |+WP7|+BP8",q," WP1|    |    | WP4|    | WP6|    | WP8",p])
t.c=n
m.$4(a,t,"BP1",["Pawn move to 6 1, 5 1 => 6 1","Pawn en passent Pawn at 6 2, 5 1 => 6 2, 5 2 => null"])
m.$4(a,t,"BP4",["Pawn move to 6 4, 5 4 => 6 4","Pawn en passent Pawn at 6 3, 5 4 => 6 3, 5 3 => null","Pawn en passent Pawn at 6 5, 5 4 => 6 5, 5 5 => null"])
m.$4(a,t,"BP8",["Pawn move to 6 8, 5 8 => 6 8","Pawn en passent Pawn at 6 7, 5 8 => 6 7, 5 7 => null"])
t=Q.S([r," BP1|    |    | BP4|    | BP6|    | BP8",q,"+WP1|+BP2|+BP3|+WP4|+BP5|    |+BP7|+WP8",q,q,"    | WP2| WP3|    | WP5| WP6| WP7|    ",p])
t.c=n
m.$4(a,t,"WP1",["Pawn move to 3 1, 4 1 => 3 1","Pawn en passent Pawn at 3 2, 4 1 => 3 2, 4 2 => null"])
m.$4(a,t,"WP4",["Pawn move to 3 4, 4 4 => 3 4","Pawn en passent Pawn at 3 3, 4 4 => 3 3, 4 3 => null","Pawn en passent Pawn at 3 5, 4 4 => 3 5, 4 5 => null"])
m.$4(a,t,"WP8",["Pawn move to 3 8, 4 8 => 3 8","Pawn en passent Pawn at 3 7, 4 8 => 3 7, 4 7 => null"])
m.$4(a,Q.S([o,o,o,o,o,"BQ|  |  |  |WK|  |  |  ","  |  |  |WP|  |  |  |  ",o]),"WP1",[s])}}
M.k7.prototype={
$1:function(a){var t,s="   |   |    |   |   |   |   |   ",r="info_log",q="   |    |    |    |   |   |   |   ",p="  |  |  |  |  |  |  |  ",o=Q.S([s,s,s,"   |   |+BH1|   |   |   |   |   ",s,s,s,s])
a.i("State:\n"+H.d(o)+"\n",r)
t=this.a
t.$4(a,o,"BH1",["Knight move to 6 4, 4 3 => 6 4","Knight move to 6 2, 4 3 => 6 2","Knight move to 5 5, 4 3 => 5 5","Knight move to 3 5, 4 3 => 3 5","Knight move to 2 4, 4 3 => 2 4","Knight move to 2 2, 4 3 => 2 2","Knight move to 5 1, 4 3 => 5 1","Knight move to 3 1, 4 3 => 3 1"])
o=Q.S([q,"   |+BH1|    |    |   |   |   |   ","   |    |    |+BP1|   |   |   |   ","   |    |+WP1|    |   |   |   |   ",q,q,q,q])
a.i("State:\n"+H.d(o)+"\n",r)
t.$4(a,o,"BH1",["Knight take Pawn at 4 3, 2 2 => 4 3, 4 3 => null","Knight move to 4 1, 2 2 => 4 1","Knight move to 1 4, 2 2 => 1 4"])
t.$4(a,Q.S([p,p,"BQ|  |  |  |  |  |WK|  ","  |  |  |WH|  |  |  |  ",p,p,p,p]),"WH1",["Knight move to 3 6, 4 4 => 3 6","Knight move to 3 2, 4 4 => 3 2"])}}
M.k8.prototype={
$1:function(a){var t,s="   |   |    |   |   |   |   |   ",r="info_log",q="Bishop move to 5 4, 4 3 => 5 4",p="Bishop move to 3 2, 4 3 => 3 2",o="Bishop move to 3 4, 4 3 => 3 4",n="    |    |    |   |    |   |   |   ",m=Q.S([s,s,s,"   |   |+BB1|   |   |   |   |   ",s,s,s,s])
a.i("State:\n"+H.d(m)+"\n",r)
t=this.a
t.$4(a,m,"WB1",[])
t.$4(a,m,"BB1",[q,"Bishop move to 6 5, 4 3 => 6 5","Bishop move to 7 6, 4 3 => 7 6","Bishop move to 8 7, 4 3 => 8 7","Bishop move to 5 2, 4 3 => 5 2","Bishop move to 6 1, 4 3 => 6 1",p,"Bishop move to 2 1, 4 3 => 2 1",o,"Bishop move to 2 5, 4 3 => 2 5","Bishop move to 1 6, 4 3 => 1 6"])
m=Q.S([n,"+WP1|    |    |   |+BP1|   |   |   ",n,"    |    |+WB1|   |    |   |   |   ","    |+BP2|    |   |    |   |   |   ","    |    |    |   |+WP2|   |   |   ",n,n])
a.i("State:\n"+H.d(m)+"\n",r)
t.$4(a,m,"WB1",[q,"Bishop take Pawn at 5 2, 4 3 => 5 2, 5 2 => null",p,o,"Bishop take Pawn at 2 5, 4 3 => 2 5, 2 5 => null"])}}
M.k9.prototype={
$1:function(a1){var t,s="   |   |    |   |   |   |   |   ",r="info_log",q="Rook move to 4 4, 4 3 => 4 4",p="Rook move to 4 2, 4 3 => 4 2",o="Rook move to 5 3, 4 3 => 5 3",n="Rook move to 3 3, 4 3 => 3 3",m="    |   |    |   |    |   |   |   ",l="   |   |   |   |   |   |   |   ",k="Rook move to 1 2, 1 1 => 1 2",j="Rook move to 1 3, 1 1 => 1 3",i="Rook move to 1 7, 1 8 => 1 7",h="Rook move to 1 6, 1 8 => 1 6",g="Rook move to 1 5, 1 8 => 1 5",f="Rook move to 8 2, 8 1 => 8 2",e="Rook move to 8 3, 8 1 => 8 3",d="Rook move to 8 7, 8 8 => 8 7",c="Rook move to 8 6, 8 8 => 8 6",b="Rook move to 8 5, 8 8 => 8 5",a="    |   |   |    |   |   |   |    ",a0=Q.S([s,s,s,"   |   |+BR1|   |   |   |   |   ",s,s,s,s])
a1.i("State:\n"+H.d(a0)+"\n",r)
t=this.a
t.$4(a1,a0,"BR1",[q,"Rook move to 4 5, 4 3 => 4 5","Rook move to 4 6, 4 3 => 4 6","Rook move to 4 7, 4 3 => 4 7","Rook move to 4 8, 4 3 => 4 8",p,"Rook move to 4 1, 4 3 => 4 1",o,"Rook move to 6 3, 4 3 => 6 3","Rook move to 7 3, 4 3 => 7 3","Rook move to 8 3, 4 3 => 8 3",n,"Rook move to 2 3, 4 3 => 2 3","Rook move to 1 3, 4 3 => 1 3"])
a0=Q.S([m,"    |   |+BP1|   |    |   |   |   ",m,"+WP1|   |+WR1|   |+WP2|   |   |   ",m,"    |   |+BP2|   |    |   |   |   ",m,m])
a1.i("State:\n"+H.d(a0)+"\n",r)
t.$4(a1,a0,"WR1",[q,p,o,"Rook take Pawn at 6 3, 4 3 => 6 3, 6 3 => null",n,"Rook take Pawn at 2 3, 4 3 => 2 3, 2 3 => null"])
a0=Q.S(["BR1|   |   |BK1|   |   |   |BR2","BP1|   |   |   |   |   |   |BP2",l,l,l,l,"WP1|   |   |   |   |   |   |WP2","WR1|   |   |WK1|   |   |   |WR2"])
a1.i("State:\n"+H.d(a0)+"\n",r)
t.$4(a1,a0,"BR1",[k,j,"Rook castles with King, 1 1 => 1 3, 1 4 => 1 2"])
t.$4(a1,a0,"BR2",[i,h,g,"Rook castles with King, 1 8 => 1 5, 1 4 => 1 6"])
t.$4(a1,a0,"WR1",[f,e,"Rook castles with King, 8 1 => 8 3, 8 4 => 8 2"])
t.$4(a1,a0,"WR2",[d,c,b,"Rook castles with King, 8 8 => 8 5, 8 4 => 8 6"])
a0=Q.S([" BR1|   |   |+BK1|   |   |   | BR2"," BP1|   |   |    |   |   |   | BP2",a,a,a,a," WP1|   |   |    |   |   |   | WP2","+WR1|   |   | WK1|   |   |   |+WR2"])
a1.i("State:\n"+H.d(a0)+"\n",r)
t.$4(a1,a0,"BR1",[k,j])
t.$4(a1,a0,"BR2",[i,h,g])
t.$4(a1,a0,"WR1",[f,e])
t.$4(a1,a0,"WR2",[d,c,b])}}
M.ka.prototype={
$1:function(a4){var t,s="   |   |   |   |   |   |   |   ",r="info_log",q="BK1",p="King move to 2 5, 1 4 => 2 5",o="King move to 2 4, 1 4 => 2 4",n="King move to 2 3, 1 4 => 2 3",m="King move to 1 3, 1 4 => 1 3",l="King move to 1 5, 1 4 => 1 5",k="King castles with Rook, 1 4 => 1 2, 1 1 => 1 3",j="King castles with Rook, 1 4 => 1 6, 1 8 => 1 5",i="WK1",h="King move to 8 3, 8 4 => 8 3",g="King move to 7 3, 8 4 => 7 3",f="King move to 7 4, 8 4 => 7 4",e="King move to 7 5, 8 4 => 7 5",d="King move to 8 5, 8 4 => 8 5",c="King castles with Rook, 8 4 => 8 2, 8 1 => 8 3",b="King castles with Rook, 8 4 => 8 6, 8 8 => 8 5",a="    |   |   |    |   |   |   |    ",a0="   |   |    |    |    |   |   |   ",a1="BP1|   |BP3|BP4|BP5|   |   |BP8",a2="WP1|   |WP3|WP4|WP5|   |   |WP8",a3=Q.S(["BR1|   |   |BK1|   |   |   |BR2","BP1|   |   |   |   |   |   |BP2",s,s,s,s,"WP1|   |   |   |   |   |   |WP2","WR1|   |   |WK1|   |   |   |WR2"])
a4.i("State:\n"+H.d(a3)+"\n",r)
t=this.a
t.$4(a4,a3,q,[p,o,n,m,l,k,j])
t.$4(a4,a3,i,[h,g,f,e,d,c,b])
a3=Q.S([" BR1|   |   |+BK1|   |   |   | BR2"," BP1|   |   |    |   |   |   | BP2",a,a,a,a," WP1|   |   |    |   |   |   | WP2","+WR1|   |   | WK1|   |   |   |+WR2"])
a4.i("State:\n"+H.d(a3)+"\n",r)
t.$4(a4,a3,q,[p,o,n,m,l])
t.$4(a4,a3,i,[h,g,f,e,d])
a3=Q.S([a0,a0,a0,"   |   |    |+WP2|+WP1|   |   |   ","   |   |+BP3|+WK1|+WP3|   |   |   ","   |   |    |+BP2|+BP1|   |   |   ",a0,a0])
a4.i("State:\n"+H.d(a3)+"\n",r)
t.$4(a4,a3,i,["King take Pawn at 6 5, 5 4 => 6 5, 6 5 => null","King move to 6 3, 5 4 => 6 3","King take Pawn at 5 3, 5 4 => 5 3, 5 3 => null","King move to 4 3, 5 4 => 4 3"])
a3=Q.S(["BR1|BB1|   |BK1|   |   |   |BR2",a1,s,s,s,s,a2,"WR1|WB1|   |WK1|   |   |   |WR2"])
a4.i("State:\n"+H.d(a3)+"\n",r)
t.$4(a4,a3,q,[m,l,j])
t.$4(a4,a3,i,[h,d,b])
a3=Q.S(["BR1|   |   |BK1|   |   |BB2|BR2",a1,s,s,s,s,a2,"WR1|   |   |WK1|   |   |WB2|WR2"])
a4.i("State:\n"+H.d(a3)+"\n",r)
t.$4(a4,a3,q,[m,l,k])
t.$4(a4,a3,i,[h,d,c])}}
M.kb.prototype={
$1:function(a){var t,s="    |   |   |   |   |   |   |    ",r="info_log",q="   |   |    |    |    |   |   |   ",p="  |  |  |  |  |  |  |  ",o=Q.S(["+WQ1|   |   |   |   |   |   |    ",s,s,s,s,s,s,"    |   |   |   |   |   |   |+BQ1"])
a.i("State:\n"+H.d(o)+"\n",r)
t=this.a
t.$4(a,o,"BQ1",["Queen move to 8 7, 8 8 => 8 7","Queen move to 8 6, 8 8 => 8 6","Queen move to 8 5, 8 8 => 8 5","Queen move to 8 4, 8 8 => 8 4","Queen move to 8 3, 8 8 => 8 3","Queen move to 8 2, 8 8 => 8 2","Queen move to 8 1, 8 8 => 8 1","Queen move to 7 7, 8 8 => 7 7","Queen move to 6 6, 8 8 => 6 6","Queen move to 5 5, 8 8 => 5 5","Queen move to 4 4, 8 8 => 4 4","Queen move to 3 3, 8 8 => 3 3","Queen move to 2 2, 8 8 => 2 2","Queen take Queen at 1 1, 8 8 => 1 1, 1 1 => null","Queen move to 7 8, 8 8 => 7 8","Queen move to 6 8, 8 8 => 6 8","Queen move to 5 8, 8 8 => 5 8","Queen move to 4 8, 8 8 => 4 8","Queen move to 3 8, 8 8 => 3 8","Queen move to 2 8, 8 8 => 2 8","Queen move to 1 8, 8 8 => 1 8"])
t.$4(a,o,"WQ1",["Queen move to 2 2, 1 1 => 2 2","Queen move to 3 3, 1 1 => 3 3","Queen move to 4 4, 1 1 => 4 4","Queen move to 5 5, 1 1 => 5 5","Queen move to 6 6, 1 1 => 6 6","Queen move to 7 7, 1 1 => 7 7","Queen take Queen at 8 8, 1 1 => 8 8, 8 8 => null","Queen move to 2 1, 1 1 => 2 1","Queen move to 3 1, 1 1 => 3 1","Queen move to 4 1, 1 1 => 4 1","Queen move to 5 1, 1 1 => 5 1","Queen move to 6 1, 1 1 => 6 1","Queen move to 7 1, 1 1 => 7 1","Queen move to 8 1, 1 1 => 8 1","Queen move to 1 2, 1 1 => 1 2","Queen move to 1 3, 1 1 => 1 3","Queen move to 1 4, 1 1 => 1 4","Queen move to 1 5, 1 1 => 1 5","Queen move to 1 6, 1 1 => 1 6","Queen move to 1 7, 1 1 => 1 7","Queen move to 1 8, 1 1 => 1 8"])
o=Q.S([q,q,"   |BP2|    |    |    |   |   |   ","   |   |    |+WP4|+WP1|   |   |   ","   |   |+BP3|+WQ1|+WP3|   |   |   ","   |   |    |+BP4|+BP1|   |   |   ","   |WP2|    |    |    |   |   |   ",q])
a.i("State:\n"+H.d(o)+"\n",r)
t.$4(a,o,"WQ1",["Queen take Pawn at 6 5, 5 4 => 6 5, 6 5 => null","Queen take Pawn at 6 4, 5 4 => 6 4, 6 4 => null","Queen move to 6 3, 5 4 => 6 3","Queen take Pawn at 5 3, 5 4 => 5 3, 5 3 => null","Queen move to 4 3, 5 4 => 4 3","Queen take Pawn at 3 2, 5 4 => 3 2, 3 2 => null"])
t.$4(a,Q.S(["BQ|  |  |  |  |  |WK|  ",p,"  |  |  |WQ|  |  |  |  ",p,p,p,p,p]),"WQ1",["Queen move to 1 2, 3 4 => 1 2","Queen move to 1 4, 3 4 => 1 4","Queen move to 1 6, 3 4 => 1 6"])}}
M.kc.prototype={
$1:function(a){var t,s=V.z(0,0,0,1,1,1),r=V.z(2,2,2,1,1,1),q=$.aK()
M.ab(a,"Not moving, not touching",s,r,new V.q(0,0,0),C.h,0,q)
M.ab(a,"Moving right but not enough to touch",V.z(0,0,0,1,1,1),V.z(2,0,0,1,1,1),new V.q(0.5,0,0),C.h,0,q)
r=V.z(0,0,0,1,1,1)
s=V.z(2,0,0,1,1,1)
t=$.cy()
M.ab(a,"Moving right until they just touch on edge",r,s,new V.q(1,0,0),C.d,1,t)
M.ab(a,"Moving to pass eachother and hit early",V.z(0,0,0,1,1,1),V.z(2,0,0,1,1,1),new V.q(4,0,0),C.d,0.25,t)
M.ab(a,"Moving away from eachother backwards",V.z(0,0,0,1,1,1),V.z(2,0,0,1,1,1),new V.q(-4,0,0),C.h,0,q)
M.ab(a,"Moving away from eachother already passed",V.z(2,0,0,1,1,1),V.z(0,0,0,1,1,1),new V.q(4,0,0),C.h,0,q)
M.ab(a,"Moving backwards past eachother and hit early",V.z(2,0,0,1,1,1),V.z(0,0,0,1,1,1),new V.q(-4,0,0),C.d,0.25,$.cz())
M.ab(a,"Moving right but offset to pass eachother",V.z(0,0,0,1,1,1),V.z(2,2,2,1,1,1),new V.q(4,0,0),C.h,0,q)
M.ab(a,"Moving almost diagnally at an angle to collide",V.z(0,0,0,1,1,1),V.z(2,2,2,1,1,1),new V.q(2,2.4,2.8),C.d,0.5,t)
M.ab(a,"Moving almost diagnally at a different angle to collide",V.z(0,0,0,1,1,1),V.z(2,2,2,1,1,1),new V.q(2.8,2,2.4),C.d,0.5,$.dM())
M.ab(a,"Moving almost diagnally at another different angle to collide",V.z(0,0,0,1,1,1),V.z(2,2,2,1,1,1),new V.q(2.4,2.8,2),C.d,0.5,$.cB())
M.ab(a,"Moving diagnally to collide",V.z(0,0,0,1,1,1),V.z(2,2,2,1,1,1),new V.q(2,2,2),C.d,0.5,t)
t=V.z(0,11.13,0,0,1.5,0)
s=V.z(0,8,0,0,1,0)
r=$.cA()
M.ab(a,"Moving down and colliding",t,s,new V.q(0,-2.45,0),C.d,0.869387755102041,r)
M.ab(a,"Moving up at an agle and already touching on edge",V.z(0.25,10,0.1,0.25,2,0.25),V.z(0,9,0,1,1,1),new V.q(0,-1,-0.3),C.d,0,r)
M.ab(a,"One already contains the other",V.z(-2,-2,-2,4,4,4),V.z(-1,-1,-1,2,2,2),new V.q(2,2,2),C.j,0,q)
M.ab(a,"Partually overlapping",V.z(-2,-2,-2,2,2,2),V.z(-1,-1,-1,2,2,2),new V.q(2,2,2),C.j,0,q)}}
M.kd.prototype={
$1:function(a){var t=Math.abs(1)
M.jN(a,"Same sized spheres colliding after B moves left",new V.aE(0,0,0,t),new V.aE(3,0,0,t),V.bp(),new V.q(-1,0,0),C.d,1)
M.jN(a,"Same sized spheres colliding after A moves left",new V.aE(3,0,0,t),new V.aE(0,0,0,t),new V.q(-1,0,0),V.bp(),C.d,1)
M.jN(a,"Same sized spheres already touching and A moves left",new V.aE(0,0,0,t),new V.aE(2,0,0,t),new V.q(-1,0,0),V.bp(),C.h,0)
M.jN(a,"Same sized spheres already touching and A moves right",new V.aE(0,0,0,t),new V.aE(2,0,0,t),V.bp(),new V.q(-1,0,0),C.d,0)}}
M.ke.prototype={
$1:function(a){var t,s=new B.hh()
s.a=!0
s.b=10
t=B.mF(null,s)
M.l(a,t,0,0,0,0,0,0,0,0)
M.l(a,t,0.001,0,0,0,0,0,0,0)
M.l(a,t,0,0.001,0,0,0,0,0,0)
M.l(a,t,0,0,0.001,0,0,0,0,0)
M.l(a,t,0.999,0,0,0,0,0,0,0)
M.l(a,t,0,0.999,0,0,0,0,0,0)
M.l(a,t,0,0,0.999,0,0,0,0,0)
M.l(a,t,0.999,0.999,0.999,0,0,0,0,0)
M.l(a,t,-0.001,0,0,-16,0,15,0,0)
M.l(a,t,-0.999,0,0,-16,0,15,0,0)
M.l(a,t,-0.001,0,0,-16,0,15,0,0)
M.l(a,t,-0.001,0,0.001,-16,0,15,0,0)
M.l(a,t,-0.999,0,0.999,-16,0,15,0,0)
M.l(a,t,0,0,-0.001,0,-16,0,0,15)
M.l(a,t,0.001,0,-0.001,0,-16,0,0,15)
M.l(a,t,0,0,-0.999,0,-16,0,0,15)
M.l(a,t,0.999,0,-0.999,0,-16,0,0,15)
M.l(a,t,-0.001,0,-0.001,-16,-16,15,0,15)
M.l(a,t,-0.999,0,-0.999,-16,-16,15,0,15)
M.l(a,t,-0.999,0,-0.001,-16,-16,15,0,15)
M.l(a,t,-0.001,0,-0.999,-16,-16,15,0,15)
M.l(a,t,1,0,0,0,0,1,0,0)
M.l(a,t,0,1,0,0,0,0,1,0)
M.l(a,t,0,0,1,0,0,0,0,1)
M.l(a,t,1.001,0,0,0,0,1,0,0)
M.l(a,t,0,0,1.001,0,0,0,0,1)
M.l(a,t,-1,0,0,-16,0,15,0,0)
M.l(a,t,0,-1,0,0,0,0,-1,0)
M.l(a,t,0,0,-1,0,-16,0,0,15)
M.l(a,t,-1.001,0,0,-16,0,14,0,0)
M.l(a,t,0,0,-1.001,0,-16,0,0,14)
M.l(a,t,0,0,-14.157,0,-16,0,0,1)
M.l(a,t,0,0,-15.157,0,-16,0,0,0)
M.l(a,t,0,0,-16.157,0,-32,0,0,15)
M.l(a,t,0,0,18,0,16,0,0,2)
M.l(a,t,0,0,17,0,16,0,0,1)
M.l(a,t,0,0,16,0,16,0,0,0)
M.l(a,t,0,0,15,0,0,0,0,15)
M.l(a,t,0,0,14,0,0,0,0,14)
M.l(a,t,0,0,13,0,0,0,0,13)
M.l(a,t,0,0,12,0,0,0,0,12)
M.l(a,t,0,0,11,0,0,0,0,11)
M.l(a,t,0,0,10,0,0,0,0,10)
M.l(a,t,0,0,9,0,0,0,0,9)
M.l(a,t,0,0,8,0,0,0,0,8)
M.l(a,t,0,0,7,0,0,0,0,7)
M.l(a,t,0,0,6,0,0,0,0,6)
M.l(a,t,0,0,5,0,0,0,0,5)
M.l(a,t,0,0,4,0,0,0,0,4)
M.l(a,t,0,0,3,0,0,0,0,3)
M.l(a,t,0,0,2,0,0,0,0,2)
M.l(a,t,0,0,1,0,0,0,0,1)
M.l(a,t,0,0,0,0,0,0,0,0)
M.l(a,t,0,0,-1,0,-16,0,0,15)
M.l(a,t,0,0,-2,0,-16,0,0,14)
M.l(a,t,0,0,-3,0,-16,0,0,13)
M.l(a,t,0,0,-4,0,-16,0,0,12)
M.l(a,t,0,0,-5,0,-16,0,0,11)
M.l(a,t,0,0,-6,0,-16,0,0,10)
M.l(a,t,0,0,-7,0,-16,0,0,9)
M.l(a,t,0,0,-8,0,-16,0,0,8)
M.l(a,t,0,0,-9,0,-16,0,0,7)
M.l(a,t,0,0,-10,0,-16,0,0,6)
M.l(a,t,0,0,-11,0,-16,0,0,5)
M.l(a,t,0,0,-12,0,-16,0,0,4)
M.l(a,t,0,0,-13,0,-16,0,0,3)
M.l(a,t,0,0,-14,0,-16,0,0,2)
M.l(a,t,0,0,-15,0,-16,0,0,1)
M.l(a,t,0,0,-16,0,-16,0,0,0)
M.l(a,t,0,0,-17,0,-32,0,0,15)
M.l(a,t,0,0,-18,0,-32,0,0,14)
M.l(a,t,0,0,-19,0,-32,0,0,13)}}
M.kf.prototype={
$1:function(a){var t,s,r,q=new B.hE()
q.a=8
q.b=9
t=B.mF(null,q)
t.cs(0,0)
q=$.cA()
M.W(a,t,0.5,12,0.5,0,-5,0,0.5,11.5,0.5,q)
M.W(a,t,0.5,14,0.5,0,-5,0,0.5,11.5,0.5,q)
M.W(a,t,0.5,14,0.5,0,-1,0,0.5,13,0.5,$.aK())
M.W(a,t,0.5,11.5,0.5,0,-5,0,0.5,11.5,0.5,q)
M.W(a,t,0.5,12,0.5,1,-5,1,1.5,11.5,1.5,q)
M.W(a,t,0.5,11.5,0.5,1,-5,1,1.5,11.5,1.5,q)
M.W(a,t,0.5,12,0.5,1,-5,-1,1.5,11.5,-0.5,q)
M.W(a,t,0.5,11.5,0.5,1,-5,-1,1.5,11.5,-0.5,q)
M.W(a,t,0.5,12,0.5,-1,-5,1,-0.5,11.5,1.5,q)
M.W(a,t,0.5,11.5,0.5,-1,-5,1,-0.5,11.5,1.5,q)
M.W(a,t,0.5,12,0.5,-1,-5,-1,-0.5,11.5,-0.5,q)
M.W(a,t,0.5,11.5,0.5,-1,-5,-1,-0.5,11.5,-0.5,q)
s=t.am(0,10,0)
r=s.f
if(r!=null)r.aB(s.a,s.b,s.c,102)
M.W(a,t,0.5,14,0.5,0,-5,0,0.5,12.5,0.5,q)
M.W(a,t,0.5,14,1.5,0,-5,0,0.5,11.5,1.5,q)
M.W(a,t,0.5,14,-0.5,0,-5,0,0.5,11.5,-0.5,q)
M.W(a,t,1.5,14,0.5,0,-5,0,1.5,11.5,0.5,q)
M.W(a,t,-0.5,14,0.5,0,-5,0,-0.5,11.5,0.5,q)
s=$.cz()
M.W(a,t,2.5,11.5,0.5,-5,0,0,1.25,11.5,0.5,s)
M.W(a,t,2.5,11.5,0.5,-5,-5,0,1.25,11.5,0.5,new V.aj(s.a|q.a))
M.W(a,t,-1.5,11.5,0.5,5,0,0,-0.25,11.5,0.5,$.cy())
M.W(a,t,0.5,11.5,2.5,0,0,-5,0.5,11.5,1.25,$.dN())
M.W(a,t,0.5,11.5,-1.5,0,0,5,0.5,11.5,-0.25,$.cB())}}
M.kg.prototype={
$1:function(a){var t=new V.V(2,3,4,5)
M.a1(a,t,"[2.000, 3.000,"," 4.000, 5.000]")
M.H(a,t,0,0,0,0)
M.H(a,t,1,0,2,4)
M.H(a,t,0,1,3,5)
M.H(a,t,1,1,5,9)}}
M.kh.prototype={
$1:function(a){var t=new V.V(2,3,4,5)
M.a1(a,t,"[2.000, 3.000,"," 4.000, 5.000]")
M.jK(a,t,0,0,0,0)
M.jK(a,t,1,0,2,4)
M.jK(a,t,0,1,3,5)
M.jK(a,t,1,1,5,9)}}
M.ki.prototype={
$1:function(a){var t=V.c8()
M.a1(a,t,"[1.000, 0.000,"," 0.000, 1.000]")
M.H(a,t,0,0,0,0)
M.H(a,t,1,0,1,0)
M.H(a,t,-1,0,-1,0)
M.H(a,t,1,1,1,1)
M.H(a,t,-1,-1,-1,-1)
M.H(a,t,0,1,0,1)
M.H(a,t,0,-1,0,-1)
M.H(a,t,2.3,-4.2,2.3,-4.2)
M.H(a,t,-1.5,7.3,-1.5,7.3)}}
M.kj.prototype={
$1:function(a){var t=new V.V(2,0,0,3)
M.a1(a,t,"[2.000, 0.000,"," 0.000, 3.000]")
M.H(a,t,0,0,0,0)
M.H(a,t,1,0,2,0)
M.H(a,t,-1,0,-2,0)
M.H(a,t,1,1,2,3)
M.H(a,t,-1,-1,-2,-3)
M.H(a,t,0,1,0,3)
M.H(a,t,0,-1,0,-3)
M.H(a,t,2.3,-4.2,4.6,-12.6)
M.H(a,t,-1.5,7.3,-3,21.9)}}
M.kk.prototype={
$1:function(a){var t=V.c7(0.7853981633974483)
M.a1(a,t,"[0.707, -0.707,"," 0.707,  0.707]")
M.H(a,t,0,0,0,0)
M.H(a,t,1,0,0.70710678118,0.70710678118)
M.H(a,t,0.70710678118,0.70710678118,0,1)
M.H(a,t,0,1,-0.70710678118,0.70710678118)
M.H(a,t,-0.70710678118,0.70710678118,-1,0)
M.H(a,t,-1,0,-0.70710678118,-0.70710678118)
M.H(a,t,-0.70710678118,-0.70710678118,0,-1)
M.H(a,t,0,-1,0.70710678118,-0.70710678118)
M.H(a,t,0.70710678118,-0.70710678118,1,0)}}
M.kl.prototype={
$1:function(a){var t="[-1.000,  0.000,",s="  0.000, -1.000]"
M.a1(a,V.c7(-0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.a1(a,V.c7(1.5707963267948966),"[0.000, -1.000,"," 1.000,  0.000]")
M.a1(a,V.c7(-3.141592653589793),t,s)
M.a1(a,V.c7(3.141592653589793),t,s)
M.a1(a,V.c7(1.1780972450961724),"[0.383, -0.924,"," 0.924,  0.383]")}}
M.km.prototype={
$1:function(a){var t,s="[1.000, 2.000,",r=" 3.000, 4.000]",q=new V.V(1,2,3,4)
M.a1(a,q,s,r)
M.a1(a,V.oc(q.aP(0)),s,r)
M.a1(a,new V.V(1,3,2,4),"[1.000, 3.000,"," 2.000, 4.000]")
M.J(a,1,1,"m11")
M.J(a,2,2,"m21")
M.J(a,3,3,"m12")
M.J(a,4,4,"m22")
M.a1(a,new V.V(1,2,4,5),s," 4.000, 5.000]")
t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.a1(a,new V.V(t.a,t.b,t.e,t.f),s," 5.000, 6.000]")}}
M.kn.prototype={
$1:function(a){var t="[1.000, 0.000,",s=" 0.000, 1.000]"
M.lH(a,V.c8(),t,s)
M.lH(a,new V.V(2,0,0,3),"[0.500, 0.000,"," 0.000, 0.333]")
M.lH(a,V.c7(0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.a1(a,new V.V(0,0,0,0).a1(0),t,s)}}
M.ko.prototype={
$1:function(a){M.a1(a,new V.V(1,2,3,4).F(0,new V.V(5,6,7,8)),"[19.000, 22.000,"," 43.000, 50.000]")
M.a1(a,new V.V(5,6,7,8).F(0,new V.V(1,2,3,4)),"[23.000, 34.000,"," 31.000, 46.000]")}}
M.kp.prototype={
$1:function(a){var t=new V.N(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.v(a,t,0,0,0,0,0,0)
M.v(a,t,1,0,0,1,4,7)
M.v(a,t,0,1,0,2,5,8)
M.v(a,t,0,0,1,3,6,9)
M.v(a,t,1,1,0,3,9,15)
M.v(a,t,1,0,1,4,10,16)
M.v(a,t,0,1,1,5,11,17)
M.v(a,t,1,1,1,6,15,24)}}
M.kq.prototype={
$1:function(a){var t=new V.N(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.bP(a,t,0,0,0,0,0,0)
M.bP(a,t,1,0,0,1,4,7)
M.bP(a,t,0,1,0,2,5,8)
M.bP(a,t,0,0,1,3,6,9)
M.bP(a,t,1,1,0,3,9,15)
M.bP(a,t,1,0,1,4,10,16)
M.bP(a,t,0,1,1,5,11,17)
M.bP(a,t,1,1,1,6,15,24)}}
M.kr.prototype={
$1:function(a){var t=V.cc()
M.E(a,t,"[1.000, 0.000, 0.000,"," 0.000, 1.000, 0.000,"," 0.000, 0.000, 1.000]")
M.v(a,t,0,0,0,0,0,0)
M.v(a,t,1,0,0,1,0,0)
M.v(a,t,0,1,0,0,1,0)
M.v(a,t,0,0,1,0,0,1)
M.v(a,t,1,0,1,1,0,1)
M.v(a,t,-1,0,1,-1,0,1)
M.v(a,t,1,1,1,1,1,1)
M.v(a,t,-1,-1,-1,-1,-1,-1)
M.v(a,t,0,1,1,0,1,1)
M.v(a,t,0,-1,-1,0,-1,-1)
M.v(a,t,2.3,-4.2,-0.2,2.3,-4.2,-0.2)
M.v(a,t,-1.5,7.3,4.8,-1.5,7.3,4.8)}}
M.kw.prototype={
$1:function(a){var t=new V.N(2,0,0,0,3,0,0,0,4)
M.E(a,t,"[2.000, 0.000, 0.000,"," 0.000, 3.000, 0.000,"," 0.000, 0.000, 4.000]")
M.v(a,t,0,0,0,0,0,0)
M.v(a,t,1,1,1,2,3,4)
M.v(a,t,-1,-1,-1,-2,-3,-4)
M.v(a,t,2.3,-4.2,-0.2,4.6,-12.6,-0.8)
M.v(a,t,-1.5,7.3,4.8,-3,21.9,19.2)}}
M.kx.prototype={
$1:function(a){var t=V.c9(0.7853981633974483)
M.E(a,t,"[1.000, 0.000,  0.000,"," 0.000, 0.707, -0.707,"," 0.000, 0.707,  0.707]")
M.v(a,t,1,0,0,1,0,0)
M.v(a,t,2,1,0,2,0.70710678118,0.70710678118)
M.v(a,t,3,0.70710678118,0.70710678118,3,0,1)
M.v(a,t,4,0,1,4,-0.70710678118,0.70710678118)
M.v(a,t,5,-0.70710678118,0.70710678118,5,-1,0)
M.v(a,t,6,-1,0,6,-0.70710678118,-0.70710678118)
M.v(a,t,7,-0.70710678118,-0.70710678118,7,0,-1)
M.v(a,t,8,0,-1,8,0.70710678118,-0.70710678118)
M.v(a,t,9,0.70710678118,-0.70710678118,9,1,0)}}
M.ky.prototype={
$1:function(a){var t="[1.000, 0.000,  0.000,",s="[1.000,  0.000,  0.000,",r=" 0.000, -1.000,  0.000,",q=" 0.000,  0.000, -1.000]"
M.E(a,V.c9(-0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.E(a,V.c9(1.5707963267948966),t," 0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000]")
M.E(a,V.c9(-3.141592653589793),s,r,q)
M.E(a,V.c9(3.141592653589793),s,r,q)
M.E(a,V.c9(1.1780972450961724),t," 0.000, 0.383, -0.924,"," 0.000, 0.924,  0.383]")}}
M.kz.prototype={
$1:function(a){var t=V.ca(0.7853981633974483)
M.E(a,t,"[0.707, 0.000, -0.707,"," 0.000, 1.000,  0.000,"," 0.707, 0.000,  0.707]")
M.v(a,t,0,1,0,0,1,0)
M.v(a,t,1,2,0,0.70710678118,2,0.70710678118)
M.v(a,t,0.70710678118,3,0.70710678118,0,3,1)
M.v(a,t,0,4,1,-0.70710678118,4,0.70710678118)
M.v(a,t,-0.70710678118,5,0.70710678118,-1,5,0)
M.v(a,t,-1,6,0,-0.70710678118,6,-0.70710678118)
M.v(a,t,-0.70710678118,7,-0.70710678118,0,7,-1)
M.v(a,t,0,8,-1,0.70710678118,8,-0.70710678118)
M.v(a,t,0.70710678118,9,-0.70710678118,1,9,0)}}
M.kA.prototype={
$1:function(a){var t=" 0.000, 1.000,  0.000,",s="[-1.000, 0.000,  0.000,",r="  0.000, 1.000,  0.000,",q="  0.000, 0.000, -1.000]"
M.E(a,V.ca(-0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.E(a,V.ca(1.5707963267948966),"[0.000, 0.000, -1.000,",t," 1.000, 0.000,  0.000]")
M.E(a,V.ca(-3.141592653589793),s,r,q)
M.E(a,V.ca(3.141592653589793),s,r,q)
M.E(a,V.ca(1.1780972450961724),"[0.383, 0.000, -0.924,",t," 0.924, 0.000,  0.383]")}}
M.kB.prototype={
$1:function(a){var t=V.cb(0.7853981633974483)
M.E(a,t,"[0.707, -0.707, 0.000,"," 0.707,  0.707, 0.000,"," 0.000,  0.000, 1.000]")
M.v(a,t,0,0,1,0,0,1)
M.v(a,t,1,0,2,0.70710678118,0.70710678118,2)
M.v(a,t,0.70710678118,0.70710678118,3,0,1,3)
M.v(a,t,0,1,4,-0.70710678118,0.70710678118,4)
M.v(a,t,-0.70710678118,0.70710678118,5,-1,0,5)
M.v(a,t,-1,0,6,-0.70710678118,-0.70710678118,6)
M.v(a,t,-0.70710678118,-0.70710678118,7,0,-1,7)
M.v(a,t,0,-1,8,0.70710678118,-0.70710678118,8)
M.v(a,t,0.70710678118,-0.70710678118,9,1,0,9)}}
M.kC.prototype={
$1:function(a){var t=" 0.000,  0.000, 1.000]",s="[-1.000,  0.000, 0.000,",r="  0.000, -1.000, 0.000,",q="  0.000,  0.000, 1.000]"
M.E(a,V.cb(-0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.E(a,V.cb(1.5707963267948966),"[0.000, -1.000, 0.000,"," 1.000,  0.000, 0.000,",t)
M.E(a,V.cb(-3.141592653589793),s,r,q)
M.E(a,V.cb(3.141592653589793),s,r,q)
M.E(a,V.cb(1.1780972450961724),"[0.383, -0.924, 0.000,"," 0.924,  0.383, 0.000,",t)}}
M.kD.prototype={
$1:function(a){var t,s="[1.000, 2.000, 3.000,",r=" 4.000, 5.000, 6.000,",q=" 7.000, 8.000, 9.000]",p=" 0.000, 0.000, 1.000]",o=new V.N(1,2,3,4,5,6,7,8,9)
M.E(a,o,s,r,q)
M.E(a,V.od(o.aP(0)),s,r,q)
M.E(a,new V.N(1,4,7,2,5,8,3,6,9),"[1.000, 4.000, 7.000,"," 2.000, 5.000, 8.000,"," 3.000, 6.000, 9.000]")
M.J(a,1,1,"m11")
M.J(a,2,2,"m21")
M.J(a,3,3,"m31")
M.J(a,4,4,"m12")
M.J(a,5,5,"m22")
M.J(a,6,6,"m32")
M.J(a,7,7,"m13")
M.J(a,8,8,"m23")
M.J(a,9,9,"m33")
M.E(a,new V.N(1,0,1.2,0,1,3.4,0,0,1),"[1.000, 0.000, 1.200,"," 0.000, 1.000, 3.400,",p)
M.E(a,new V.N(1,2,0,3,4,0,0,0,1),"[1.000, 2.000, 0.000,"," 3.000, 4.000, 0.000,",p)
t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.E(a,new V.N(t.a,t.b,t.c,t.e,t.f,t.r,t.y,t.z,t.Q),"[1.000,  2.000,  3.000,"," 5.000,  6.000,  7.000,"," 9.000, 10.000, 11.000]")}}
M.ks.prototype={
$1:function(a){var t="[1.000, 0.000, 0.000,",s=" 0.000, 1.000, 0.000,",r=" 0.000, 0.000, 1.000]"
M.h2(a,V.cc(),t,s,r)
M.h2(a,new V.N(2,0,0,0,3,0,0,0,4),"[0.500, 0.000, 0.000,"," 0.000, 0.333, 0.000,"," 0.000, 0.000, 0.250]")
M.h2(a,V.c9(0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.h2(a,V.ca(0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.h2(a,V.cb(0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.E(a,new V.N(0,0,0,0,0,0,0,0,0).a1(0),t,s,r)}}
M.kt.prototype={
$1:function(a){var t="[ 3.000,  3.600,  4.200,",s="  6.600,  8.100,  9.600,",r=" 10.200, 12.600, 15.000]"
M.E(a,new V.N(1,2,3,4,5,6,7,8,9).F(0,new V.N(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9)),t,s,r)
M.E(a,new V.N(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9).F(0,new V.N(1,2,3,4,5,6,7,8,9)),t,s,r)}}
M.ku.prototype={
$1:function(a){var t=new V.N(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.jI(a,t,0,0,3,6)
M.jI(a,t,1,0,4,10)
M.jI(a,t,0,1,5,11)
M.jI(a,t,1,1,6,15)}}
M.kv.prototype={
$1:function(a){var t=new V.N(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.jL(a,t,0,0,0,0)
M.jL(a,t,1,0,1,4)
M.jL(a,t,0,1,2,5)
M.jL(a,t,1,1,3,9)}}
M.kE.prototype={
$1:function(a){var t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.r(a,t,0,0,0,0,0,0,0,0)
M.r(a,t,1,0,0,0,1,5,9,13)
M.r(a,t,0,1,0,0,2,6,10,14)
M.r(a,t,1,1,0,0,3,11,19,27)
M.r(a,t,0,0,1,0,3,7,11,15)
M.r(a,t,1,0,1,0,4,12,20,28)
M.r(a,t,0,1,1,0,5,13,21,29)
M.r(a,t,1,1,1,0,6,18,30,42)
M.r(a,t,0,0,0,1,4,8,12,16)
M.r(a,t,1,0,0,1,5,13,21,29)
M.r(a,t,0,1,0,1,6,14,22,30)
M.r(a,t,1,1,0,1,7,19,31,43)
M.r(a,t,0,0,1,1,7,15,23,31)
M.r(a,t,1,0,1,1,8,20,32,44)
M.r(a,t,0,1,1,1,9,21,33,45)
M.r(a,t,1,1,1,1,10,26,42,58)}}
M.kF.prototype={
$1:function(a){var t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.ac(a,t,0,0,0,0,0,0,0,0)
M.ac(a,t,1,0,0,0,1,5,9,13)
M.ac(a,t,0,1,0,0,2,6,10,14)
M.ac(a,t,1,1,0,0,3,11,19,27)
M.ac(a,t,0,0,1,0,3,7,11,15)
M.ac(a,t,1,0,1,0,4,12,20,28)
M.ac(a,t,0,1,1,0,5,13,21,29)
M.ac(a,t,1,1,1,0,6,18,30,42)
M.ac(a,t,0,0,0,1,4,8,12,16)
M.ac(a,t,1,0,0,1,5,13,21,29)
M.ac(a,t,0,1,0,1,6,14,22,30)
M.ac(a,t,1,1,0,1,7,19,31,43)
M.ac(a,t,0,0,1,1,7,15,23,31)
M.ac(a,t,1,0,1,1,8,20,32,44)
M.ac(a,t,0,1,1,1,9,21,33,45)
M.ac(a,t,1,1,1,1,10,26,42,58)}}
M.kG.prototype={
$1:function(a){var t=V.aR()
M.D(a,t,"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.r(a,t,0,0,0,0,0,0,0,0)
M.r(a,t,1,0,0,0,1,0,0,0)
M.r(a,t,0,1,0,0,0,1,0,0)
M.r(a,t,0,0,1,0,0,0,1,0)
M.r(a,t,1,0,1,0,1,0,1,0)
M.r(a,t,0,1,0,1,0,1,0,1)
M.r(a,t,1,1,1,1,1,1,1,1)
M.r(a,t,-1,0,1,0,-1,0,1,0)
M.r(a,t,1,1,1,0,1,1,1,0)
M.r(a,t,-1,-1,-1,-1,-1,-1,-1,-1)
M.r(a,t,2.3,-4.2,-0.2,3.3,2.3,-4.2,-0.2,3.3)
M.r(a,t,-1.5,7.3,4.8,-9.1,-1.5,7.3,4.8,-9.1)}}
M.kN.prototype={
$1:function(a){var t=V.mi(2,3,4,5)
M.D(a,t,"[2.000, 0.000, 0.000, 0.000,"," 0.000, 3.000, 0.000, 0.000,"," 0.000, 0.000, 4.000, 0.000,"," 0.000, 0.000, 0.000, 5.000]")
M.r(a,t,0,0,0,0,0,0,0,0)
M.r(a,t,1,1,1,1,2,3,4,5)
M.r(a,t,-1,-1,-1,-1,-2,-3,-4,-5)
M.r(a,t,2.3,-4.2,-0.2,3.3,4.6,-12.6,-0.8,16.5)
M.r(a,t,-1.5,7.3,4.8,-9.1,-3,21.9,19.2,-45.5)}}
M.kO.prototype={
$1:function(a){var t=V.cd(0.7853981633974483)
M.D(a,t,"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.707, -0.707, 0.000,"," 0.000, 0.707,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.r(a,t,1,0,0,9,1,0,0,9)
M.r(a,t,2,1,0,8,2,0.70710678118,0.70710678118,8)
M.r(a,t,3,0.70710678118,0.70710678118,7,3,0,1,7)
M.r(a,t,4,0,1,6,4,-0.70710678118,0.70710678118,6)
M.r(a,t,5,-0.70710678118,0.70710678118,5,5,-1,0,5)
M.r(a,t,6,-1,0,4,6,-0.70710678118,-0.70710678118,4)
M.r(a,t,7,-0.70710678118,-0.70710678118,3,7,0,-1,3)
M.r(a,t,8,0,-1,2,8,0.70710678118,-0.70710678118,2)
M.r(a,t,9,0.70710678118,-0.70710678118,1,9,1,0,1)}}
M.kP.prototype={
$1:function(a){var t="[1.000, 0.000,  0.000, 0.000,",s=" 0.000, 0.000,  0.000, 1.000]",r="[1.000,  0.000,  0.000, 0.000,",q=" 0.000, -1.000,  0.000, 0.000,",p=" 0.000,  0.000, -1.000, 0.000,",o=" 0.000,  0.000,  0.000, 1.000]"
M.D(a,V.cd(-0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.D(a,V.cd(1.5707963267948966),t," 0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,",s)
M.D(a,V.cd(-3.141592653589793),r,q,p,o)
M.D(a,V.cd(3.141592653589793),r,q,p,o)
M.D(a,V.cd(1.1780972450961724),t," 0.000, 0.383, -0.924, 0.000,"," 0.000, 0.924,  0.383, 0.000,",s)}}
M.kQ.prototype={
$1:function(a){var t=V.ce(0.7853981633974483)
M.D(a,t,"[0.707, 0.000, -0.707, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.707, 0.000,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.r(a,t,0,1,0,9,0,1,0,9)
M.r(a,t,1,2,0,8,0.70710678118,2,0.70710678118,8)
M.r(a,t,0.70710678118,3,0.70710678118,7,0,3,1,7)
M.r(a,t,0,4,1,6,-0.70710678118,4,0.70710678118,6)
M.r(a,t,-0.70710678118,5,0.70710678118,5,-1,5,0,5)
M.r(a,t,-1,6,0,4,-0.70710678118,6,-0.70710678118,4)
M.r(a,t,-0.70710678118,7,-0.70710678118,3,0,7,-1,3)
M.r(a,t,0,8,-1,2,0.70710678118,8,-0.70710678118,2)
M.r(a,t,0.70710678118,9,-0.70710678118,1,1,9,0,1)}}
M.kR.prototype={
$1:function(a){var t=" 0.000, 1.000,  0.000, 0.000,",s=" 0.000, 0.000,  0.000, 1.000]",r="[-1.000, 0.000,  0.000, 0.000,",q="  0.000, 1.000,  0.000, 0.000,",p="  0.000, 0.000, -1.000, 0.000,",o="  0.000, 0.000,  0.000, 1.000]"
M.D(a,V.ce(-0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.ce(1.5707963267948966),"[0.000, 0.000, -1.000, 0.000,",t," 1.000, 0.000,  0.000, 0.000,",s)
M.D(a,V.ce(-3.141592653589793),r,q,p,o)
M.D(a,V.ce(3.141592653589793),r,q,p,o)
M.D(a,V.ce(1.1780972450961724),"[0.383, 0.000, -0.924, 0.000,",t," 0.924, 0.000,  0.383, 0.000,",s)}}
M.kS.prototype={
$1:function(a){var t=V.cf(0.7853981633974483)
M.D(a,t,"[0.707, -0.707, 0.000, 0.000,"," 0.707,  0.707, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.r(a,t,0,0,1,9,0,0,1,9)
M.r(a,t,1,0,2,8,0.70710678118,0.70710678118,2,8)
M.r(a,t,0.70710678118,0.70710678118,3,7,0,1,3,7)
M.r(a,t,0,1,4,6,-0.70710678118,0.70710678118,4,6)
M.r(a,t,-0.70710678118,0.70710678118,5,5,-1,0,5,5)
M.r(a,t,-1,0,6,4,-0.70710678118,-0.70710678118,6,4)
M.r(a,t,-0.70710678118,-0.70710678118,7,3,0,-1,7,3)
M.r(a,t,0,-1,8,2,0.70710678118,-0.70710678118,8,2)
M.r(a,t,0.70710678118,-0.70710678118,9,1,1,0,9,1)}}
M.kT.prototype={
$1:function(a){var t=" 0.000,  0.000, 1.000, 0.000,",s=" 0.000,  0.000, 0.000, 1.000]",r="[-1.000,  0.000, 0.000, 0.000,",q="  0.000, -1.000, 0.000, 0.000,",p="  0.000,  0.000, 1.000, 0.000,",o="  0.000,  0.000, 0.000, 1.000]"
M.D(a,V.cf(-0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.cf(1.5707963267948966),"[0.000, -1.000, 0.000, 0.000,"," 1.000,  0.000, 0.000, 0.000,",t,s)
M.D(a,V.cf(-3.141592653589793),r,q,p,o)
M.D(a,V.cf(3.141592653589793),r,q,p,o)
M.D(a,V.cf(1.1780972450961724),"[0.383, -0.924, 0.000, 0.000,"," 0.924,  0.383, 0.000, 0.000,",t,s)}}
M.kU.prototype={
$1:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="[ 1.000,  2.000,  3.000,  4.000,",c="  5.000,  6.000,  7.000,  8.000,",b="  9.000, 10.000, 11.000, 12.000,",a=" 13.000, 14.000, 15.000, 16.000]",a0=" 0.000, 0.000, 0.000, 1.000]",a1=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a2,a1,d,c,b,a)
M.D(a2,V.oe(a1.aP(0)),d,c,b,a)
t=a1.a
s=a1.e
r=a1.y
q=a1.cx
p=a1.b
o=a1.f
n=a1.z
m=a1.cy
l=a1.c
k=a1.r
j=a1.Q
i=a1.db
h=a1.d
g=a1.x
f=a1.ch
e=a1.dx
M.D(a2,V.L(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e),"[1.000, 5.000,  9.000, 13.000,"," 2.000, 6.000, 10.000, 14.000,"," 3.000, 7.000, 11.000, 15.000,"," 4.000, 8.000, 12.000, 16.000]")
M.J(a2,t,1,"m11")
M.J(a2,p,2,"m21")
M.J(a2,l,3,"m31")
M.J(a2,h,4,"m41")
M.J(a2,s,5,"m12")
M.J(a2,o,6,"m22")
M.J(a2,k,7,"m32")
M.J(a2,g,8,"m42")
M.J(a2,r,9,"m13")
M.J(a2,n,10,"m23")
M.J(a2,j,11,"m33")
M.J(a2,f,12,"m43")
M.J(a2,q,13,"m14")
M.J(a2,m,14,"m24")
M.J(a2,i,15,"m34")
M.J(a2,e,16,"m44")
M.D(a2,V.mj(1.2,3.4,5.6),"[1.000, 0.000, 0.000, 1.200,"," 0.000, 1.000, 0.000, 3.400,"," 0.000, 0.000, 1.000, 5.600,",a0)
M.D(a2,V.L(1,2,0,0,3,4,0,0,0,0,1,0,0,0,0,1),"[1.000, 2.000, 0.000, 0.000,"," 3.000, 4.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,",a0)
M.D(a2,V.L(1,2,3,0,4,5,6,0,7,8,9,0,0,0,0,1),"[1.000, 2.000, 3.000, 0.000,"," 4.000, 5.000, 6.000, 0.000,"," 7.000, 8.000, 9.000, 0.000,",a0)}}
M.kH.prototype={
$1:function(a){var t="[1.000, 0.000, 0.000, 0.000,",s=" 0.000, 1.000, 0.000, 0.000,",r=" 0.000, 0.000, 1.000, 0.000,",q=" 0.000, 0.000, 0.000, 1.000]",p="  0.000, 0.000, 0.000, 1.000]"
M.h3(a,V.aR(),t,s,r,q)
M.h3(a,V.mi(2,3,4,1),"[0.500, 0.000, 0.000, 0.000,"," 0.000, 0.333, 0.000, 0.000,"," 0.000, 0.000, 0.250, 0.000,",q)
M.h3(a,V.cd(0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.h3(a,V.ce(0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,",p)
M.h3(a,V.cf(0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,",p)
M.D(a,V.L(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0).a1(0),t,s,r,q)}}
M.kI.prototype={
$1:function(a){M.D(a,V.L(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6).F(0,V.L(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6)),"[ 1.900,  2.000,  2.100,  2.200,","  4.620,  4.880,  5.140,  5.400,","  7.340,  7.760,  8.180,  8.600,"," 10.060, 10.640, 11.220, 11.800]")
M.D(a,V.L(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6).F(0,V.L(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6)),"[3.700, 4.200, 4.700,  5.200,"," 4.820, 5.480, 6.140,  6.800,"," 5.940, 6.760, 7.580,  8.400,"," 7.060, 8.040, 9.020, 10.000]")}}
M.kJ.prototype={
$1:function(a){var t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bO(a,t,0,0,0,4,8,12)
M.bO(a,t,1,0,0,5,13,21)
M.bO(a,t,0,1,0,6,14,22)
M.bO(a,t,1,1,0,7,19,31)
M.bO(a,t,0,0,1,7,15,23)
M.bO(a,t,1,0,1,8,20,32)
M.bO(a,t,0,1,1,9,21,33)
M.bO(a,t,1,1,1,10,26,42)}}
M.kK.prototype={
$1:function(a){var t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bQ(a,t,0,0,0,0,0,0)
M.bQ(a,t,1,0,0,1,5,9)
M.bQ(a,t,0,1,0,2,6,10)
M.bQ(a,t,1,1,0,3,11,19)
M.bQ(a,t,0,0,1,3,7,11)
M.bQ(a,t,1,0,1,4,12,20)
M.bQ(a,t,0,1,1,5,13,21)
M.bQ(a,t,1,1,1,6,18,30)}}
M.kL.prototype={
$1:function(a){var t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.jJ(a,t,0,0,4,8)
M.jJ(a,t,1,0,5,13)
M.jJ(a,t,0,1,6,14)
M.jJ(a,t,1,1,7,19)}}
M.kM.prototype={
$1:function(a){var t=V.L(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.jM(a,t,0,0,0,0)
M.jM(a,t,1,0,1,5)
M.jM(a,t,0,1,2,6)
M.jM(a,t,1,1,3,11)}}
M.kV.prototype={
$1:function(a){var t,s=$.mt
if(s==null)s=$.mt=V.ey(0,0,0,0)
M.dC(a,s,0,0,0,0,0,0)
M.dC(a,s,1,2,0,0,1,2)
M.dC(a,s,-1,-2,-1,-2,1,2)
M.dC(a,V.ey(0,0,1,2),-1,-2,-1,-2,2,4)
t=V.ey(-1,-2,2,4)
M.dC(a,t,1,1,-1,-2,2,4)
M.dC(a,t,4,4,-1,-2,5,6)}}
M.kW.prototype={
$1:function(a){var t,s=$.mu
if(s==null)s=$.mu=V.z(0,0,0,0,0,0)
M.dD(a,s,0,0,0,0,0,0,0,0,0)
M.dD(a,s,1,2,3,0,0,0,1,2,3)
M.dD(a,s,-1,-2,-3,-1,-2,-3,1,2,3)
M.dD(a,V.z(0,0,0,1,2,3),-1,-2,-3,-1,-2,-3,2,4,6)
t=V.z(-1,-2,-3,2,4,6)
M.dD(a,t,1,1,1,-1,-2,-3,2,4,6)
M.dD(a,t,4,4,4,-1,-2,-3,5,6,7)}}
M.kX.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=V.aR(),e=V.mj(0,0,-5),d=new M.a5()
d.a=new V.p(0,0,0)
d.b=new V.p(0,0,1.020051002550127)
t=new M.a5()
t.a=new V.p(1,0,0)
t.b=new V.p(-0.3464101615137755,0,1.020051002550127)
s=new M.a5()
s.a=new V.p(-1,0,0)
s.b=new V.p(0.3464101615137755,0,1.020051002550127)
r=new M.a5()
r.a=new V.p(0,1,0)
r.b=new V.p(0,-0.3464101615137755,1.020051002550127)
q=new M.a5()
q.a=new V.p(0,-1,0)
q.b=new V.p(0,0.3464101615137755,1.020051002550127)
p=new M.a5()
p.a=new V.p(0,0,1)
p.b=new V.p(0,0,1.016717502541794)
o=new M.a5()
o.a=new V.p(0,0,-1)
o.b=new V.p(0,0,1.025051252562628)
n=new M.a5()
n.a=new V.p(1,1,1)
n.b=new V.p(-0.2886751345948129,-0.2886751345948129,1.016717502541794)
m=new M.a5()
m.a=new V.p(1,-1,1)
m.b=new V.p(-0.2886751345948129,0.2886751345948129,1.016717502541794)
l=new M.a5()
l.a=new V.p(1,1,-1)
l.b=new V.p(-0.4330127018922194,-0.4330127018922194,1.025051252562628)
k=new M.a5()
k.a=new V.p(1,-1,-1)
k.b=new V.p(-0.4330127018922194,0.4330127018922194,1.025051252562628)
j=new M.a5()
j.a=new V.p(-1,1,1)
j.b=new V.p(0.2886751345948129,-0.2886751345948129,1.016717502541794)
i=new M.a5()
i.a=new V.p(-1,-1,1)
i.b=new V.p(0.2886751345948129,0.2886751345948129,1.016717502541794)
h=new M.a5()
h.a=new V.p(-1,1,-1)
h.b=new V.p(0.4330127018922194,-0.4330127018922194,1.025051252562628)
g=new M.a5()
g.a=new V.p(-1,-1,-1)
g.b=new V.p(0.4330127018922194,0.4330127018922194,1.025051252562628)
M.q9(a,f,e,[d,t,s,r,q,p,o,n,m,l,k,j,i,h,g])}}
M.a5.prototype={}
M.eL.prototype={}
M.de.prototype={
ee:function(a){var t="test_body body_hidden",s=this.b
if(s.className!==t)s.className=t
else s.className="test_body body_shown"},
aa:function(a){var t,s,r,q,p,o=this
if(o.d!=null){t=o.e
if(t==null)t=new P.aP(Date.now(),!1)
s="("+C.e.b4(C.c.W(P.hs(t.a-o.d.a).a,1000)*0.001,2)+"s)"}else s=""
if(!o.y){r=o.c
r.className="test_header queued"
r.textContent="Queued: "+o.r+" "+s}else if(o.z){r=o.c
r.className="test_header failed"
r.textContent="Failed: "+o.r+" "+s}else{r=o.Q
q=o.c
p=o.r
if(r){q.className="test_header passed"
q.textContent="Passed: "+p+" "+s}else{q.className="test_header running"
q.textContent="Running: "+p+" "+s}}o.a.aa(0)},
f5:function(){var t=this,s=u.P,r=P.o0(new M.iB(t),s).bK(new M.iC(t),s),q=new M.iD(t),p=$.T,o=new P.aJ(p,r.$ti)
if(p!==C.f)q=P.mY(q,p)
r.ba(new P.dg(o,2,null,q))
o.bK(new M.iE(t),s)},
i:function(a,b){var t,s,r=this.a.c.dc(a,0,a.length),q=r==null?a:r
q=H.dK(q," ","&nbsp;")
t='</dir><br class="'+b+'"><dir class="'+b+'">'
s=H.dK(q,"\n",t)
q=this.b
C.L.cP(q,J.lc(q.innerHTML,'<dir class="'+b+'">'+s+"</dir>"))},
j:function(){var t=this
if(!t.z){t.z=!0
t.b.className="test_body body_shown"
t.aa(0)}},
au:function(a,b){var t,s,r=this,q="notice_log",p=Date.now()
for(t=0,s=0;t<a;){b.$0();++s
t=C.c.W(P.hs(Date.now()-p).a,1000)/1000}r.i("Benchmark results:\n",q)
r.i("  count    = "+s+"\n",q)
r.i("  duration = "+H.d(t)+" secs\n",q)
r.i("  average  = "+H.d(t/s)+" secs\n",q)
r.i("  estimate = "+H.d(s/t)+" per sec\n",q)},
$ieL:1}
M.iB.prototype={
$0:function(){var t=this.a
t.y=!0
t.aa(0)}}
M.iC.prototype={
$1:function(a){var t=this.a
t.d=new P.aP(Date.now(),!1)
t.f.$1(t)
t.e=new P.aP(Date.now(),!1)},
$S:11}
M.iD.prototype={
$2:function(a,b){var t=this.a
t.e=new P.aP(Date.now(),!1)
t.i("\nException: "+H.d(a),"error_log")
t.j()
t.i("\nStack: "+H.d(b),"warning_log")},
$S:9}
M.iE.prototype={
$1:function(a){var t,s,r,q=this.a
q.Q=!0
t=q.a
s=t.f
if(typeof s!=="number")return s.G()
t.f=s+1
if(q.z){s=t.r
if(typeof s!=="number")return s.G()
t.r=s+1}t.aa(0)
s=t.f
t=t.e
r=t.length
if(typeof s!=="number")return s.a9()
if(s<r)P.eP(C.i,t[s].gcz())
q.aa(0)},
$S:11}
M.iF.prototype={
aU:function(a,b,c){var t,s=W.o1("checkbox")
s.className="log_checkbox"
s.checked=!0
W.a4(s,"change",new M.iG(c,s),!1)
a.children
a.appendChild(s)
t=document.createElement("span")
t.textContent=b
a.children
a.appendChild(t)},
aa:function(a){var t,s,r=this,q=C.e.b4(C.c.W(P.hs(Date.now()-r.d.a).a,1000)*0.001,2),p=r.e.length,o=r.f
if(typeof o!=="number")return H.o(o)
if(p<=o){o=r.r
if(typeof o!=="number")return o.V()
t=r.b
if(o>0){t.className="top_header failed"
o=r.r
t=r.b
if(o===1)t.textContent="Failed 1 Test ("+q+"s)"
else t.textContent="Failed "+H.d(o)+" Tests ("+q+"s)"}else{t.textContent="Tests Passed ("+q+"s)"
t.className="top_header passed"}}else{s=C.O.b4(o/p*100,2)
r.b.textContent="Running Tests: "+H.d(r.f)+"/"+p+" ("+s+"%)"
o=r.r
if(typeof o!=="number")return o.V()
t=r.b
if(o>0){t.textContent=H.d(t.textContent)+" - "+H.d(r.r)+" failed)"
t.className="topHeader failed"}else t.className="topHeader running"}},
q:function(a,b,c){var t,s,r,q,p=this
if(b.length<=0)b=H.d(c)
if(!C.b.bS(b,p.x))return
t=p.e
s=new M.de(p,c,b,!1)
r=document
q=r.createElement("div")
q.className="test_body body_hidden"
s.b=q
r=r.createElement("div")
r.className="running top_header"
W.a4(r,"click",s.ged(),!1)
s.c=r
q=p.a
q.children
q.appendChild(r)
q.appendChild(s.b)
s.e=s.d=null
s.Q=s.z=s.y=!1
s.aa(0)
t.push(s)
p.aa(0)
t=p.f
if(typeof t!=="number")return t.G()
s=p.e
r=s.length
if(t+1===r){if(t>=r)return H.e(s,t)
P.eP(C.i,s[t].gcz())}}}
M.iG.prototype={
$1:function(a){var t,s,r,q=document.querySelectorAll("."+this.a),p=this.b.checked?"block":"none"
for(t=u.L,s=0;s<q.length;++s){r=t.a(q[s]).style
r.display=p}}}
M.kY.prototype={
$1:function(a){var t,s
M.ah(a,$.lb(),"None",0,0,0)
M.ah(a,$.aq(),"Pos",1,1,3)
M.ah(a,$.ap(),"Norm",2,1,3)
M.ah(a,$.ao(),"Binm",4,1,3)
M.ah(a,$.ai(),"Txt2D",8,1,2)
M.ah(a,$.aM(),"TxtCube",16,1,3)
M.ah(a,$.aL(),"Clr3",32,1,3)
M.ah(a,$.aT(),"Clr4",64,1,4)
M.ah(a,$.ay(),"Weight",128,1,1)
M.ah(a,$.ax(),"Bending",256,1,4)
t=$.aq()
s=$.ap()
M.ah(a,new Z.aH(t.a|s.a),"Pos|Norm",3,2,6)
s=$.aq()
t=$.ai()
M.ah(a,new Z.aH(s.a|t.a),"Pos|Txt2D",9,2,5)
t=$.aq()
s=$.ap()
M.ah(a,new Z.aH(t.a|s.a|$.ao().a|$.ai().a|$.aL().a),"Pos|Norm|Binm|Txt2D|Clr3",47,5,14)
s=$.ai()
t=$.ay()
M.ah(a,new Z.aH(s.a|t.a),"Txt2D|Weight",136,2,3)
t=$.aM()
s=$.ax()
M.ah(a,new Z.aH(t.a|s.a),"TxtCube|Bending",272,2,7)}}
M.kZ.prototype={
$1:function(a){var t=$.aq(),s=$.ap(),r=new Z.aH(t.a|s.a|$.ao().a|$.ai().a|$.aM().a|$.aL().a)
M.a6(a,r,t,!0,0,0)
M.a6(a,r,$.ap(),!0,1,3)
M.a6(a,r,$.ao(),!0,2,6)
M.a6(a,r,$.ai(),!0,3,9)
M.a6(a,r,$.aM(),!0,4,11)
M.a6(a,r,$.aL(),!0,5,14)
M.a6(a,r,$.aT(),!1,-1,-1)
M.a6(a,r,$.ay(),!1,-1,-1)
M.a6(a,r,$.ax(),!1,-1,-1)}}
M.l_.prototype={
$1:function(a){var t=$.aq(),s=$.ao(),r=new Z.aH(t.a|s.a|$.aT().a|$.ay().a|$.ax().a)
M.a6(a,r,t,!0,0,0)
M.a6(a,r,$.ap(),!1,-1,-1)
M.a6(a,r,$.ao(),!0,1,3)
M.a6(a,r,$.ai(),!1,-1,-1)
M.a6(a,r,$.aL(),!1,-1,-1)
M.a6(a,r,$.aT(),!0,2,6)
M.a6(a,r,$.ay(),!0,3,10)
M.a6(a,r,$.ax(),!0,4,11)}};(function aliases(){var t=J.a.prototype
t.cS=t.h
t=J.bE.prototype
t.cU=t.h
t=P.f.prototype
t.cT=t.b6
t=W.K.prototype
t.b8=t.a4
t=W.dr.prototype
t.cV=t.ad
t=K.e7.prototype
t.cR=t.az
t.bU=t.h
t=Y.dT.prototype
t.bT=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
t(J,"pf","o6",20)
s(J.at.prototype,"geg","t",13)
r(P,"pJ","oE",7)
r(P,"pK","oF",7)
r(P,"pL","oG",7)
q(P,"n3","pt",3)
r(W,"rG","hw",21)
p(W,"pV",4,null,["$4"],["oK"],12,0)
p(W,"pW",4,null,["$4"],["oL"],12,0)
var j
o(j=E.c2.prototype,"gcp",0,0,null,["$1","$0"],["cq","eT"],0,0)
o(j,"gcn",0,0,null,["$1","$0"],["co","eS"],0,0)
o(j,"gcl",0,0,null,["$1","$0"],["cm","eP"],0,0)
n(j,"geN","eO",2)
n(j,"geQ","eR",2)
o(j=E.eO.prototype,"gbV",0,0,null,["$1","$0"],["bW","b9"],0,0)
m(j,"gf4","cw",3)
l(j=X.eZ.prototype,"gdC","dD",4)
l(j,"gdl","dm",4)
l(j,"gdu","dv",1)
l(j,"gdG","dH",10)
l(j,"gdE","dF",10)
l(j,"gdJ","dK",1)
l(j,"gdN","dO",1)
l(j,"gdA","dB",1)
l(j,"gdL","dM",1)
l(j,"gdw","dz",1)
l(j,"gdP","dQ",18)
l(j,"gdR","dS",4)
l(j,"gdX","dY",5)
l(j,"gdT","dU",5)
l(j,"gdV","dW",5)
k(V.aa.prototype,"gl","aI",6)
k(V.q.prototype,"gl","aI",6)
k(V.aG.prototype,"gl","aI",6)
o(j=M.e2.prototype,"gac",0,0,null,["$1","$0"],["ag","d2"],0,0)
n(j,"gdq","dr",2)
n(j,"gds","dt",2)
o(X.eu.prototype,"gc4",0,0,null,["$1","$0"],["ar","dn"],0,0)
l(j=M.de.prototype,"ged","ee",19)
m(j,"gcz","f5",3)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.F,null)
r(P.F,[H.lo,J.a,J.aU,P.dj,P.f,H.bH,P.e9,H.cO,H.eX,H.iN,P.M,H.i5,H.du,H.c_,P.aZ,H.hR,H.ef,H.hM,H.ix,H.aD,H.fe,P.jy,P.ct,P.cu,P.dg,P.aJ,P.f2,P.eG,P.eH,P.dR,P.jC,P.dq,P.jp,P.fl,P.I,P.dW,P.hL,P.jA,P.b7,P.aP,P.a2,P.c1,P.et,P.dc,P.jd,P.hF,P.hH,P.m,P.cZ,P.a3,P.b1,P.fG,P.Q,P.bK,W.hl,W.lj,W.ly,W.cs,W.P,W.d7,W.dr,W.fI,W.cP,W.aB,W.ju,W.fS,P.fw,K.ha,K.e7,K.ig,L.eF,L.eQ,L.eR,L.iJ,O.cG,O.d1,Y.cn,Y.dT,E.c2,E.bZ,E.ch,E.jb,E.i9,E.eO,Z.aH,V.hU,D.hg,D.cN,D.aX,X.dV,X.ed,X.hO,X.hT,X.d2,X.i0,X.iK,X.eZ,V.bB,V.hy,V.aj,V.V,V.N,V.eh,V.Y,V.p,V.bk,V.da,V.db,V.aE,V.aa,V.q,V.aG,M.e2,F.hC,F.hD,F.hP,F.hQ,F.i6,F.ih,F.ii,F.ij,F.ik,F.iU,F.iV,F.iW,F.j_,F.j0,F.j1,F.j2,O.iA,X.lh,X.iy,X.eu,V.il,Q.i,Q.av,Q.iq,Q.iw,Q.u,B.aN,B.hh,B.hi,B.hj,B.hE,B.j4,M.a5,M.de,M.iF])
r(J.a,[J.ea,J.c5,J.bE,J.at,J.bD,J.aY,H.d4,W.b,W.h9,W.dU,W.aW,W.O,W.f5,W.aA,W.ho,W.hq,W.f6,W.cK,W.f8,W.hr,W.h,W.fc,W.bf,W.hJ,W.fh,W.hS,W.hW,W.fm,W.fn,W.bh,W.fo,W.fq,W.bj,W.fu,W.fx,W.bl,W.fy,W.bm,W.fD,W.b2,W.fK,W.iI,W.bn,W.fM,W.iL,W.iQ,W.fT,W.fV,W.fX,W.fZ,W.h0,P.bG,P.fj,P.bJ,P.fs,P.i7,P.fE,P.bM,P.fO,P.hd,P.f3,P.fB])
r(J.bE,[J.ev,J.bN,J.aQ])
s(J.eb,J.at)
r(J.bD,[J.cV,J.cU])
s(P.cX,P.dj)
r(P.cX,[H.co,W.je,W.af])
s(H.X,H.co)
r(P.f,[H.j,H.c6,H.cp,P.cT])
r(H.j,[H.cY,H.bg])
s(H.cL,H.c6)
r(P.e9,[H.d_,H.f1])
s(H.d0,H.cY)
r(P.M,[H.ep,H.ec,H.eW,H.ez,H.fa,P.dQ,P.eq,P.ar,P.eY,P.eV,P.cl,P.dX,P.e_])
r(H.c_,[H.iz,H.hN,H.l3,H.l4,H.l5,P.j6,P.j5,P.j7,P.j8,P.jz,P.hI,P.jf,P.jj,P.jg,P.jh,P.ji,P.jm,P.jn,P.jl,P.jk,P.jG,P.js,P.jr,P.jt,P.hV,P.ht,P.hu,W.hv,W.hY,W.i_,W.ie,W.iv,W.jc,W.i3,W.i2,W.jv,W.jw,W.jx,W.jB,P.l0,P.hf,E.ia,E.ib,E.ic,E.iH,D.hA,D.hB,F.jD,F.l9,F.la,F.j3,F.iX,F.iY,V.io,V.im,Q.ir,Q.is,M.jU,M.jT,M.jV,M.jS,M.jW,M.jR,M.jX,M.jQ,M.jY,M.jP,M.jZ,M.jO,M.k_,M.k0,M.k2,M.k1,M.k3,M.k4,M.k5,M.k6,M.k7,M.k8,M.k9,M.ka,M.kb,M.kc,M.kd,M.ke,M.kf,M.kg,M.kh,M.ki,M.kj,M.kk,M.kl,M.km,M.kn,M.ko,M.kp,M.kq,M.kr,M.kw,M.kx,M.ky,M.kz,M.kA,M.kB,M.kC,M.kD,M.ks,M.kt,M.ku,M.kv,M.kE,M.kF,M.kG,M.kN,M.kO,M.kP,M.kQ,M.kR,M.kS,M.kT,M.kU,M.kH,M.kI,M.kJ,M.kK,M.kL,M.kM,M.kV,M.kW,M.kX,M.iB,M.iC,M.iD,M.iE,M.iG,M.kY,M.kZ,M.l_])
r(H.iz,[H.it,H.cE])
s(P.eg,P.aZ)
r(P.eg,[H.a8,W.j9])
s(H.cg,H.d4)
r(H.cg,[H.dl,H.dn])
s(H.dm,H.dl)
s(H.bI,H.dm)
s(H.dp,H.dn)
s(H.d3,H.dp)
r(H.d3,[H.ej,H.ek,H.el,H.em,H.en,H.d5,H.eo])
s(H.dy,H.fa)
s(P.dv,P.cT)
s(P.jq,P.jC)
s(P.di,P.dq)
s(P.dZ,P.eH)
s(P.hx,P.dW)
r(P.dZ,[P.hK,P.iS])
s(P.iR,P.hx)
r(P.a2,[P.ad,P.x])
r(P.ar,[P.cj,P.e8])
r(W.b,[W.w,W.e5,W.b0,W.ds,W.b3,W.aF,W.dw,W.f0,W.cq,P.dS,P.bc])
r(W.w,[W.K,W.aO,W.cr])
r(W.K,[W.n,P.k])
r(W.n,[W.dO,W.dP,W.bY,W.bA,W.cF,W.cI,W.e6,W.c4,W.eA,W.dd,W.eJ,W.eK,W.cm])
s(W.hk,W.aW)
s(W.cH,W.f5)
r(W.aA,[W.hm,W.hn])
s(W.f7,W.f6)
s(W.cJ,W.f7)
s(W.f9,W.f8)
s(W.e1,W.f9)
s(W.be,W.dU)
s(W.fd,W.fc)
s(W.e4,W.fd)
s(W.fi,W.fh)
s(W.bC,W.fi)
s(W.b5,W.h)
r(W.b5,[W.bF,W.au,W.bL])
s(W.hX,W.fm)
s(W.hZ,W.fn)
s(W.fp,W.fo)
s(W.ei,W.fp)
s(W.fr,W.fq)
s(W.d6,W.fr)
s(W.fv,W.fu)
s(W.ew,W.fv)
s(W.id,W.fx)
s(W.dt,W.ds)
s(W.eC,W.dt)
s(W.fz,W.fy)
s(W.eD,W.fz)
s(W.iu,W.fD)
s(W.fL,W.fK)
s(W.eM,W.fL)
s(W.dx,W.dw)
s(W.eN,W.dx)
s(W.fN,W.fM)
s(W.eS,W.fN)
s(W.bq,W.au)
s(W.fU,W.fT)
s(W.f4,W.fU)
s(W.df,W.cK)
s(W.fW,W.fV)
s(W.ff,W.fW)
s(W.fY,W.fX)
s(W.dk,W.fY)
s(W.h_,W.fZ)
s(W.fA,W.h_)
s(W.h1,W.h0)
s(W.fH,W.h1)
s(W.ja,W.j9)
s(W.fb,P.eG)
s(W.fJ,W.dr)
s(P.aC,P.fw)
s(P.fk,P.fj)
s(P.ee,P.fk)
s(P.ft,P.fs)
s(P.er,P.ft)
s(P.ck,P.k)
s(P.fF,P.fE)
s(P.eI,P.fF)
s(P.fP,P.fO)
s(P.eT,P.fP)
s(P.he,P.f3)
s(P.es,P.bc)
s(P.fC,P.fB)
s(P.eE,P.fC)
r(K.e7,[K.bi,L.iM])
r(Y.dT,[Y.eU,Y.bo])
r(D.aX,[D.cR,D.cS,D.ae])
s(U.i1,D.hg)
s(U.dY,U.i1)
s(F.ip,F.hD)
s(F.iP,F.hQ)
s(F.f_,F.j0)
r(F.j1,[F.iZ,F.i4])
s(O.hp,O.iA)
s(X.hG,X.iy)
s(M.eL,V.hU)
t(H.co,H.eX)
t(H.dl,P.I)
t(H.dm,H.cO)
t(H.dn,P.I)
t(H.dp,H.cO)
t(P.dj,P.I)
t(W.f5,W.hl)
t(W.f6,P.I)
t(W.f7,W.P)
t(W.f8,P.I)
t(W.f9,W.P)
t(W.fc,P.I)
t(W.fd,W.P)
t(W.fh,P.I)
t(W.fi,W.P)
t(W.fm,P.aZ)
t(W.fn,P.aZ)
t(W.fo,P.I)
t(W.fp,W.P)
t(W.fq,P.I)
t(W.fr,W.P)
t(W.fu,P.I)
t(W.fv,W.P)
t(W.fx,P.aZ)
t(W.ds,P.I)
t(W.dt,W.P)
t(W.fy,P.I)
t(W.fz,W.P)
t(W.fD,P.aZ)
t(W.fK,P.I)
t(W.fL,W.P)
t(W.dw,P.I)
t(W.dx,W.P)
t(W.fM,P.I)
t(W.fN,W.P)
t(W.fT,P.I)
t(W.fU,W.P)
t(W.fV,P.I)
t(W.fW,W.P)
t(W.fX,P.I)
t(W.fY,W.P)
t(W.fZ,P.I)
t(W.h_,W.P)
t(W.h0,P.I)
t(W.h1,W.P)
t(P.fj,P.I)
t(P.fk,W.P)
t(P.fs,P.I)
t(P.ft,W.P)
t(P.fE,P.I)
t(P.fF,W.P)
t(P.fO,P.I)
t(P.fP,W.P)
t(P.f3,P.aZ)
t(P.fB,P.I)
t(P.fC,W.P)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{x:"int",ad:"double",a2:"num",Q:"String",b7:"bool",a3:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([aX*])","~(au*)","~(x*,f<c2*>*)","~()","~(h*)","~(bL*)","ad*()","~(~())","a3(@)","a3(@,@)","~(bF*)","a3(F*)","b7(K,Q,Q,cs)","~(F?)","@(@)","a3(F,b1)","aJ<@>(@)","a3(F?,F?)","~(bq*)","~(@)","x(@,@)","Q(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p0(v.typeUniverse,JSON.parse('{"aQ":"bE","ev":"bE","bN":"bE","qe":"h","qo":"h","qg":"bc","qf":"b","qH":"b","qJ":"b","qd":"k","qp":"k","qh":"n","qF":"n","qD":"w","qn":"w","rl":"aF","ql":"b5","qi":"aO","qK":"aO","qI":"au","qE":"bC","qG":"bI","ea":{"b7":[]},"c5":{"a3":[]},"at":{"m":["1"],"j":["1"],"f":["1"]},"eb":{"m":["1"],"j":["1"],"f":["1"]},"bD":{"ad":[],"a2":[]},"cV":{"ad":[],"x":[],"a2":[]},"cU":{"ad":[],"a2":[]},"aY":{"Q":[]},"X":{"m":["x"],"j":["x"],"f":["x"]},"j":{"f":["1"]},"cY":{"j":["1"],"f":["1"]},"c6":{"f":["2"]},"cL":{"j":["2"],"f":["2"]},"d0":{"j":["2"],"f":["2"]},"cp":{"f":["1"]},"co":{"m":["1"],"j":["1"],"f":["1"]},"ep":{"M":[]},"ec":{"M":[]},"eW":{"M":[]},"du":{"b1":[]},"ez":{"M":[]},"bg":{"j":["1"],"f":["1"]},"cg":{"y":["1"]},"bI":{"y":["ad"],"m":["ad"],"j":["ad"],"f":["ad"]},"d3":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"ej":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"ek":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"el":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"em":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"en":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"d5":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"eo":{"y":["x"],"m":["x"],"j":["x"],"f":["x"]},"fa":{"M":[]},"dy":{"M":[]},"dv":{"f":["1"]},"aJ":{"cQ":["1"]},"dR":{"M":[]},"di":{"j":["1"],"f":["1"]},"cT":{"f":["1"]},"cX":{"m":["1"],"j":["1"],"f":["1"]},"dq":{"j":["1"],"f":["1"]},"ad":{"a2":[]},"dQ":{"M":[]},"eq":{"M":[]},"ar":{"M":[]},"cj":{"M":[]},"e8":{"M":[]},"eY":{"M":[]},"eV":{"M":[]},"cl":{"M":[]},"dX":{"M":[]},"et":{"M":[]},"dc":{"M":[]},"e_":{"M":[]},"x":{"a2":[]},"m":{"j":["1"],"f":["1"]},"fG":{"b1":[]},"n":{"K":[],"w":[],"b":[]},"dO":{"K":[],"w":[],"b":[]},"dP":{"K":[],"w":[],"b":[]},"bY":{"K":[],"w":[],"b":[]},"bA":{"K":[],"w":[],"b":[]},"cF":{"K":[],"w":[],"b":[]},"aO":{"w":[],"b":[]},"cI":{"K":[],"w":[],"b":[]},"cJ":{"m":["aC<a2>"],"y":["aC<a2>"],"j":["aC<a2>"],"f":["aC<a2>"]},"cK":{"aC":["a2"]},"e1":{"m":["Q"],"y":["Q"],"j":["Q"],"f":["Q"]},"je":{"m":["1"],"j":["1"],"f":["1"]},"K":{"w":[],"b":[]},"e4":{"m":["be"],"y":["be"],"j":["be"],"f":["be"]},"e5":{"b":[]},"e6":{"K":[],"w":[],"b":[]},"bC":{"m":["w"],"y":["w"],"j":["w"],"f":["w"]},"c4":{"K":[],"w":[],"b":[]},"bF":{"h":[]},"ei":{"m":["bh"],"y":["bh"],"j":["bh"],"f":["bh"]},"au":{"h":[]},"af":{"m":["w"],"j":["w"],"f":["w"]},"w":{"b":[]},"d6":{"m":["w"],"y":["w"],"j":["w"],"f":["w"]},"ew":{"m":["bj"],"y":["bj"],"j":["bj"],"f":["bj"]},"eA":{"K":[],"w":[],"b":[]},"b0":{"b":[]},"eC":{"m":["b0"],"y":["b0"],"b":[],"j":["b0"],"f":["b0"]},"eD":{"m":["bl"],"y":["bl"],"j":["bl"],"f":["bl"]},"dd":{"K":[],"w":[],"b":[]},"eJ":{"K":[],"w":[],"b":[]},"eK":{"K":[],"w":[],"b":[]},"cm":{"K":[],"w":[],"b":[]},"b3":{"b":[]},"aF":{"b":[]},"eM":{"m":["aF"],"y":["aF"],"j":["aF"],"f":["aF"]},"eN":{"m":["b3"],"y":["b3"],"b":[],"j":["b3"],"f":["b3"]},"bL":{"h":[]},"eS":{"m":["bn"],"y":["bn"],"j":["bn"],"f":["bn"]},"b5":{"h":[]},"f0":{"b":[]},"bq":{"au":[],"h":[]},"cq":{"b":[]},"cr":{"w":[],"b":[]},"f4":{"m":["O"],"y":["O"],"j":["O"],"f":["O"]},"df":{"aC":["a2"]},"ff":{"m":["bf?"],"y":["bf?"],"j":["bf?"],"f":["bf?"]},"dk":{"m":["w"],"y":["w"],"j":["w"],"f":["w"]},"fA":{"m":["bm"],"y":["bm"],"j":["bm"],"f":["bm"]},"fH":{"m":["b2"],"y":["b2"],"j":["b2"],"f":["b2"]},"cs":{"aB":[]},"d7":{"aB":[]},"dr":{"aB":[]},"fJ":{"aB":[]},"fI":{"aB":[]},"aC":{"fw":["1"]},"ee":{"m":["bG"],"j":["bG"],"f":["bG"]},"er":{"m":["bJ"],"j":["bJ"],"f":["bJ"]},"ck":{"k":[],"K":[],"w":[],"b":[]},"eI":{"m":["Q"],"j":["Q"],"f":["Q"]},"k":{"K":[],"w":[],"b":[]},"eT":{"m":["bM"],"j":["bM"],"f":["bM"]},"dS":{"b":[]},"bc":{"b":[]},"es":{"b":[]},"eE":{"m":["cZ<@,@>"],"j":["cZ<@,@>"],"f":["cZ<@,@>"]},"cG":{"f":["1*"]},"cR":{"aX":[]},"cS":{"aX":[]},"ae":{"aX":[]},"de":{"eL":[]}}'))
H.p_(v.typeUniverse,JSON.parse('{"at":1,"eb":1,"aU":1,"j":1,"cY":1,"bH":1,"c6":2,"cL":2,"d_":2,"d0":2,"cp":1,"f1":1,"cO":1,"eX":1,"co":1,"bg":1,"ef":1,"cg":1,"cu":1,"dv":1,"dg":2,"eG":1,"eH":2,"fl":1,"cT":1,"cX":1,"I":1,"eg":2,"aZ":2,"dq":1,"dj":1,"dW":2,"dZ":2,"f":1,"e9":1,"m":1,"fb":1,"P":1,"cP":1,"cG":1,"cR":1,"cS":1,"ae":1}'))
0
var u=(function rtii(){var t=H.pR
return{y:t("bY"),t:t("bA"),O:t("j<@>"),h:t("K"),C:t("M"),B:t("h"),Z:t("hH"),c:t("cQ<@>"),S:t("c4"),b:t("at<@>"),T:t("c5"),g:t("aQ"),p:t("y<@>"),V:t("a8<Q*,eF*>"),i:t("a8<Q*,Q*>"),w:t("a8<Q*,eR*>"),E:t("a8<x*,b7*>"),P:t("a3"),K:t("F"),q:t("aC<a2>"),Y:t("ck"),N:t("Q"),u:t("k"),f:t("cm"),o:t("bN"),x:t("cr"),v:t("b7"),W:t("ad"),z:t("@"),D:t("@(F)"),Q:t("@(F,b1)"),r:t("x"),L:t("K*"),A:t("0&*"),_:t("F*"),R:t("Q*"),j:t("eQ*"),e:t("x*"),U:t("cQ<a3>?"),X:t("F?"),H:t("a2")}})();(function constants(){var t=hunkHelpers.makeConstList
C.m=W.bA.prototype
C.K=W.cF.prototype
C.L=W.cI.prototype
C.N=J.a.prototype
C.a=J.at.prototype
C.O=J.cU.prototype
C.c=J.cV.prototype
C.P=J.c5.prototype
C.e=J.bD.prototype
C.b=J.aY.prototype
C.Q=J.aQ.prototype
C.u=J.ev.prototype
C.v=W.dd.prototype
C.l=J.bN.prototype
C.x=W.bq.prototype
C.y=W.cq.prototype
C.z=new E.bZ("Browser.chrome")
C.n=new E.bZ("Browser.firefox")
C.o=new E.bZ("Browser.edge")
C.A=new E.bZ("Browser.other")
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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

C.H=new P.et()
C.r=new P.iR()
C.I=new P.iS()
C.f=new P.jq()
C.J=new P.fG()
C.i=new P.c1(0)
C.M=new P.hL("element",!1,!1,!1)
C.R=t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.S=t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.T=t([])
C.U=t([0,0,65498,45055,65535,34815,65534,18431])
C.t=t(["bind","if","ref","repeat","syntax"])
C.k=t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.V=new E.ch("OperatingSystem.windows")
C.W=new E.ch("OperatingSystem.mac")
C.X=new E.ch("OperatingSystem.linux")
C.Y=new E.ch("OperatingSystem.other")
C.j=new Y.cn("Type.Intesected")
C.h=new Y.cn("Type.NoCollision")
C.w=new Y.cn("Type.OutOfRange")
C.d=new Y.cn("Type.Collision")
C.Z=new P.ct(null,2)})();(function staticFields(){$.mJ=null
$.aV=0
$.lY=null
$.lX=null
$.n6=null
$.n2=null
$.nc=null
$.l1=null
$.l6=null
$.lL=null
$.cw=null
$.dF=null
$.dG=null
$.lI=!1
$.T=C.f
$.al=[]
$.bd=null
$.li=null
$.m3=null
$.m2=null
$.fg=P.ma(u.N,u.Z)
$.m5=null
$.mg=null
$.mh=null
$.mk=null
$.mn=null
$.mo=null
$.mt=null
$.ms=null
$.mu=null
$.iT=null
$.mD=null
$.mC=null
$.mE=null
$.mm=null})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"qm","nj",function(){return H.pU("_$dart_dartClosure")})
t($,"r_","no",function(){return H.b4(H.iO({
toString:function(){return"$receiver$"}}))})
t($,"r0","np",function(){return H.b4(H.iO({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"r1","nq",function(){return H.b4(H.iO(null))})
t($,"r2","nr",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"r5","nu",function(){return H.b4(H.iO(void 0))})
t($,"r6","nv",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"r4","nt",function(){return H.b4(H.mA(null))})
t($,"r3","ns",function(){return H.b4(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"r8","nx",function(){return H.b4(H.mA(void 0))})
t($,"r7","nw",function(){return H.b4(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"rm","lS",function(){return P.oD()})
t($,"rp","nB",function(){return P.os("^[\\-\\.0-9A-Z_a-z~]*$")})
t($,"rn","nA",function(){return P.mb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"rf","lb",function(){return Z.aI(0)})
t($,"r9","ny",function(){return Z.aI(511)})
t($,"rh","aq",function(){return Z.aI(1)})
t($,"rg","ap",function(){return Z.aI(2)})
t($,"rb","ao",function(){return Z.aI(4)})
t($,"ri","ai",function(){return Z.aI(8)})
t($,"rj","aM",function(){return Z.aI(16)})
t($,"rc","aL",function(){return Z.aI(32)})
t($,"rd","aT",function(){return Z.aI(64)})
t($,"re","nz",function(){return Z.aI(96)})
t($,"rk","ay",function(){return Z.aI(128)})
t($,"ra","ax",function(){return Z.aI(256)})
t($,"qk","ni",function(){return new V.hy()})
t($,"qj","A",function(){return $.ni()})
t($,"qt","aK",function(){return V.as(0)})
t($,"qq","dL",function(){return V.as(511)})
t($,"qw","cz",function(){return V.as(1)})
t($,"qu","nl",function(){return V.as(2)})
t($,"qv","cy",function(){return V.as(4)})
t($,"qz","cA",function(){return V.as(8)})
t($,"qx","nm",function(){return V.as(16)})
t($,"qy","dM",function(){return V.as(32)})
t($,"qC","dN",function(){return V.as(64)})
t($,"qA","nn",function(){return V.as(128)})
t($,"qB","cB",function(){return V.as(256)})
t($,"qs","lP",function(){return V.as(146)})
t($,"qr","nk",function(){return V.as(365)})
t($,"qU","lR",function(){return Q.ak(-1)})
t($,"qP","U",function(){return Q.ak(0)})
t($,"qT","by",function(){return Q.ak(4096)})
t($,"qO","bV",function(){return Q.ak(15)})
t($,"qQ","h8",function(){return $.lQ().S(0,$.bW()).S(0,$.bV())})
t($,"qM","h7",function(){return Q.ak(256)})
t($,"qZ","bb",function(){return Q.ak(512)})
t($,"qN","lQ",function(){return Q.ak(768)})
t($,"qV","cD",function(){return Q.ak(16)})
t($,"qY","aS",function(){return Q.ak(32)})
t($,"qS","cC",function(){return Q.ak(48)})
t($,"qL","ba",function(){return Q.ak(64)})
t($,"qX","an",function(){return Q.ak(80)})
t($,"qR","bx",function(){return Q.ak(96)})
t($,"qW","bW",function(){return Q.ak(240)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.d4,ArrayBufferView:H.d4,Float32Array:H.bI,Float64Array:H.bI,Int16Array:H.ej,Int32Array:H.ek,Int8Array:H.el,Uint16Array:H.em,Uint32Array:H.en,Uint8ClampedArray:H.d5,CanvasPixelArray:H.d5,Uint8Array:H.eo,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.h9,HTMLAnchorElement:W.dO,HTMLAreaElement:W.dP,HTMLBaseElement:W.bY,Blob:W.dU,HTMLBodyElement:W.bA,HTMLCanvasElement:W.cF,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CSSPerspective:W.hk,CSSCharsetRule:W.O,CSSConditionRule:W.O,CSSFontFaceRule:W.O,CSSGroupingRule:W.O,CSSImportRule:W.O,CSSKeyframeRule:W.O,MozCSSKeyframeRule:W.O,WebKitCSSKeyframeRule:W.O,CSSKeyframesRule:W.O,MozCSSKeyframesRule:W.O,WebKitCSSKeyframesRule:W.O,CSSMediaRule:W.O,CSSNamespaceRule:W.O,CSSPageRule:W.O,CSSRule:W.O,CSSStyleRule:W.O,CSSSupportsRule:W.O,CSSViewportRule:W.O,CSSStyleDeclaration:W.cH,MSStyleCSSProperties:W.cH,CSS2Properties:W.cH,CSSImageValue:W.aA,CSSKeywordValue:W.aA,CSSNumericValue:W.aA,CSSPositionValue:W.aA,CSSResourceValue:W.aA,CSSUnitValue:W.aA,CSSURLImageValue:W.aA,CSSStyleValue:W.aA,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.hm,CSSUnparsedValue:W.hn,DataTransferItemList:W.ho,HTMLDivElement:W.cI,DOMException:W.hq,ClientRectList:W.cJ,DOMRectList:W.cJ,DOMRectReadOnly:W.cK,DOMStringList:W.e1,DOMTokenList:W.hr,Element:W.K,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.be,FileList:W.e4,FileWriter:W.e5,HTMLFormElement:W.e6,Gamepad:W.bf,History:W.hJ,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLInputElement:W.c4,KeyboardEvent:W.bF,Location:W.hS,MediaList:W.hW,MIDIInputMap:W.hX,MIDIOutputMap:W.hZ,MimeType:W.bh,MimeTypeArray:W.ei,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.d6,RadioNodeList:W.d6,Plugin:W.bj,PluginArray:W.ew,RTCStatsReport:W.id,HTMLSelectElement:W.eA,SourceBuffer:W.b0,SourceBufferList:W.eC,SpeechGrammar:W.bl,SpeechGrammarList:W.eD,SpeechRecognitionResult:W.bm,Storage:W.iu,CSSStyleSheet:W.b2,StyleSheet:W.b2,HTMLTableElement:W.dd,HTMLTableRowElement:W.eJ,HTMLTableSectionElement:W.eK,HTMLTemplateElement:W.cm,TextTrack:W.b3,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.eM,TextTrackList:W.eN,TimeRanges:W.iI,Touch:W.bn,TouchEvent:W.bL,TouchList:W.eS,TrackDefaultList:W.iL,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.iQ,VideoTrackList:W.f0,WheelEvent:W.bq,Window:W.cq,DOMWindow:W.cq,Attr:W.cr,CSSRuleList:W.f4,ClientRect:W.df,DOMRect:W.df,GamepadList:W.ff,NamedNodeMap:W.dk,MozNamedAttrMap:W.dk,SpeechRecognitionResultList:W.fA,StyleSheetList:W.fH,SVGLength:P.bG,SVGLengthList:P.ee,SVGNumber:P.bJ,SVGNumberList:P.er,SVGPointList:P.i7,SVGScriptElement:P.ck,SVGStringList:P.eI,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bM,SVGTransformList:P.eT,AudioBuffer:P.hd,AudioParamMap:P.he,AudioTrackList:P.dS,AudioContext:P.bc,webkitAudioContext:P.bc,BaseAudioContext:P.bc,OfflineAudioContext:P.es,SQLResultSetRowList:P.eE})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.ds.$nativeSuperclassTag="EventTarget"
W.dt.$nativeSuperclassTag="EventTarget"
W.dw.$nativeSuperclassTag="EventTarget"
W.dx.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.n9,[])
else M.n9([])})})()
//# sourceMappingURL=test.dart.js.map
