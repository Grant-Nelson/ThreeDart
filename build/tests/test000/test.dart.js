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
a[c]=function(){a[c]=function(){H.q3(b)}
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
if(a[b]!==t)H.q4(b)
a[b]=s}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.lO(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={lq:function lq(){},
pD:function(a,b,c){return a},
o5:function(a,b){if(u.O.b(a))return new H.cT(a,b)
return new H.c9(a,b)},
ln:function(){return new P.cp("No element")},
nY:function(){return new P.cp("Too many elements")},
os:function(a,b){H.eU(a,0,J.bZ(a)-1,b)},
eU:function(a,b,c,d){if(c-b<=32)H.or(a,b,c,d)
else H.oq(a,b,c,d)},
or:function(a,b,c,d){var t,s,r,q,p,o
for(t=b+1,s=J.ht(a);t<=c;++t){r=s.l(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.l(a,q-1),r)
if(typeof p!=="number")return p.aa()
p=p>0}else p=!1
if(!p)break
o=q-1
s.p(a,q,s.l(a,o))
q=o}s.p(a,q,r)}},
oq:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k=C.c.X(a4-a3+1,6),j=a3+k,i=a4-k,h=C.c.X(a3+a4,2),g=h-k,f=h+k,e=J.ht(a2),d=e.l(a2,j),c=e.l(a2,g),b=e.l(a2,h),a=e.l(a2,f),a0=e.l(a2,i),a1=a5.$2(d,c)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=c
c=d
d=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=a0
a0=a
a=t}a1=a5.$2(d,b)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=b
b=d
d=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(d,a)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=a
a=d
d=t}a1=a5.$2(b,a)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=a
a=b
b=t}a1=a5.$2(c,a0)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=a0
a0=c
c=t}a1=a5.$2(c,b)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=b
b=c
c=t}a1=a5.$2(a,a0)
if(typeof a1!=="number")return a1.aa()
if(a1>0){t=a0
a0=a
a=t}e.p(a2,j,d)
e.p(a2,h,b)
e.p(a2,i,a0)
e.p(a2,g,e.l(a2,a3))
e.p(a2,f,e.l(a2,a4))
s=a3+1
r=a4-1
if(J.I(a5.$2(c,a),0)){for(q=s;q<=r;++q){p=e.l(a2,q)
o=a5.$2(p,c)
if(o===0)continue
if(o<0){if(q!==s){e.p(a2,q,e.l(a2,s))
e.p(a2,s,p)}++s}else for(;!0;){o=a5.$2(e.l(a2,r),c)
if(o>0){--r
continue}else{n=r-1
if(o<0){e.p(a2,q,e.l(a2,s))
m=s+1
e.p(a2,s,e.l(a2,r))
e.p(a2,r,p)
r=n
s=m
break}else{e.p(a2,q,e.l(a2,r))
e.p(a2,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=e.l(a2,q)
if(a5.$2(p,c)<0){if(q!==s){e.p(a2,q,e.l(a2,s))
e.p(a2,s,p)}++s}else if(a5.$2(p,a)>0)for(;!0;)if(a5.$2(e.l(a2,r),a)>0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.l(a2,r),c)<0){e.p(a2,q,e.l(a2,s))
m=s+1
e.p(a2,s,e.l(a2,r))
e.p(a2,r,p)
s=m}else{e.p(a2,q,e.l(a2,r))
e.p(a2,r,p)}r=n
break}}l=!1}a1=s-1
e.p(a2,a3,e.l(a2,a1))
e.p(a2,a1,c)
a1=r+1
e.p(a2,a4,e.l(a2,a1))
e.p(a2,a1,a)
H.eU(a2,a3,s-2,a5)
H.eU(a2,r+2,a4,a5)
if(l)return
if(s<j&&r>i){for(;J.I(a5.$2(e.l(a2,s),c),0);)++s
for(;J.I(a5.$2(e.l(a2,r),a),0);)--r
for(q=s;q<=r;++q){p=e.l(a2,q)
if(a5.$2(p,c)===0){if(q!==s){e.p(a2,q,e.l(a2,s))
e.p(a2,s,p)}++s}else if(a5.$2(p,a)===0)for(;!0;)if(a5.$2(e.l(a2,r),a)===0){--r
if(r<q)break
continue}else{n=r-1
if(a5.$2(e.l(a2,r),c)<0){e.p(a2,q,e.l(a2,s))
m=s+1
e.p(a2,s,e.l(a2,r))
e.p(a2,r,p)
s=m}else{e.p(a2,q,e.l(a2,r))
e.p(a2,r,p)}r=n
break}}H.eU(a2,s,r,a5)}else H.eU(a2,s,r,a5)},
er:function er(a){this.a=a},
a0:function a0(a){this.a=a},
j:function j(){},
d4:function d4(){},
bL:function bL(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c9:function c9(a,b){this.a=a
this.b=b},
cT:function cT(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=null
this.b=a
this.c=b},
d7:function d7(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
cW:function cW(){},
fi:function fi(){},
cs:function cs(){},
nd:function(a){var t,s=H.nc(a)
if(s!=null)return s
t="minified:"+a
return t},
pU:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
k:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.e_(a)
return t},
df:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
oh:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.d(s,3)
t=s[3]
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
iv:function(a){return H.o9(a)},
o9:function(a){var t,s,r,q
if(a instanceof P.F)return H.aw(H.cE(a),null)
if(J.dU(a)===C.N||u.o.b(a)){t=C.p(a)
s=t!=="Object"&&t!==""
if(s)return t
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string")s=q!=="Object"&&q!==""
else s=!1
if(s)return q}}return H.aw(H.cE(a),null)},
mj:function(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ok:function(a){var t,s,r,q=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.H)(a),++s){r=a[s]
if(!H.jK(r))throw H.c(H.hr(r))
if(r<=65535)q.push(r)
else if(r<=1114111){q.push(55296+(C.c.b4(r-65536,10)&1023))
q.push(56320+(r&1023))}else throw H.c(H.hr(r))}return H.mj(q)},
oj:function(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!H.jK(r))throw H.c(H.hr(r))
if(r<0)throw H.c(H.hr(r))
if(r>65535)return H.ok(a)}return H.mj(a)},
oi:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((C.c.b4(t,10)|55296)>>>0,t&1023|56320)}throw H.c(P.bo(a,0,1114111,null,null))},
cm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
og:function(a){var t=H.cm(a).getFullYear()+0
return t},
oe:function(a){var t=H.cm(a).getMonth()+1
return t},
oa:function(a){var t=H.cm(a).getDate()+0
return t},
ob:function(a){var t=H.cm(a).getHours()+0
return t},
od:function(a){var t=H.cm(a).getMinutes()+0
return t},
of:function(a){var t=H.cm(a).getSeconds()+0
return t},
oc:function(a){var t=H.cm(a).getMilliseconds()+0
return t},
pO:function(a){throw H.c(H.hr(a))},
d:function(a,b){if(a==null)J.bZ(a)
throw H.c(H.cD(a,b))},
cD:function(a,b){var t,s="index"
if(!H.jK(b))return new P.ax(!0,b,s,null)
t=J.bZ(a)
if(b<0||b>=t)return P.S(b,a,s,null,t)
return P.eN(b,s)},
pF:function(a,b,c){if(a>c)return P.bo(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.bo(b,a,c,"end",null)
return new P.ax(!0,b,"end",null)},
hr:function(a){return new P.ax(!0,a,null,null)},
c:function(a){var t,s
if(a==null)a=new P.eG()
t=new Error()
t.dartException=a
s=H.q5
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
q5:function(){return J.e_(this.dartException)},
a6:function(a){throw H.c(a)},
H:function(a){throw H.c(P.be(a))},
aY:function(a){var t,s,r,q,p,o
a=H.n9(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.iX(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
iY:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
mu:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lr:function(a,b){var t=b==null,s=t?null:b.method
return new H.ep(a,s,t?null:b.receiver)},
am:function(a){if(a==null)return new H.ir(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bW(a,a.dartException)
return H.po(a)},
bW:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
po:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.b4(s,16)&8191)===10)switch(r){case 438:return H.bW(a,H.lr(H.k(t)+" (Error "+r+")",f))
case 445:case 5007:q=H.k(t)+" (Error "+r+")"
return H.bW(a,new H.de(q,f))}}if(a instanceof TypeError){p=$.nl()
o=$.nm()
n=$.nn()
m=$.no()
l=$.nr()
k=$.ns()
j=$.nq()
$.np()
i=$.nu()
h=$.nt()
g=p.a7(t)
if(g!=null)return H.bW(a,H.lr(t,g))
else{g=o.a7(t)
if(g!=null){g.method="call"
return H.bW(a,H.lr(t,g))}else{g=n.a7(t)
if(g==null){g=m.a7(t)
if(g==null){g=l.a7(t)
if(g==null){g=k.a7(t)
if(g==null){g=j.a7(t)
if(g==null){g=m.a7(t)
if(g==null){g=i.a7(t)
if(g==null){g=h.a7(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q)return H.bW(a,new H.de(t,g==null?f:g.method))}}return H.bW(a,new H.fh(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.dl()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.bW(a,new P.ax(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.dl()
return a},
b2:function(a){var t
if(a==null)return new H.dE(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dE(a)},
pH:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
pT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.V("Unsupported number of arguments for wrapped closure"))},
dT:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pT)
a.$identity=t
return t},
nP:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.eZ().constructor.prototype):Object.create(new H.c0(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.aP
if(typeof s!=="number")return s.W()
$.aP=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.m2(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.nL(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.m2(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
nL:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n4,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
t=c?H.nJ:H.nI
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.c("Error in functionType of tearoff")},
nM:function(a,b,c,d){var t=H.m0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
m2:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nO(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nM(s,!q,t,b)
if(s===0){q=$.aP
if(typeof q!=="number")return q.W()
$.aP=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.cL
return new Function(q+(p==null?$.cL=H.hE("self"):p)+";return "+o+"."+H.k(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.aP
if(typeof q!=="number")return q.W()
$.aP=q+1
n+=q
q="return function("+n+"){return this."
p=$.cL
return new Function(q+(p==null?$.cL=H.hE("self"):p)+"."+H.k(t)+"("+n+");}")()},
nN:function(a,b,c,d){var t=H.m0,s=H.nK
switch(b?-1:a){case 0:throw H.c(new H.eQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
nO:function(a,b){var t,s,r,q,p,o,n,m=$.cL
if(m==null)m=$.cL=H.hE("self")
t=$.m_
if(t==null)t=$.m_=H.hE("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nN(r,!p,s,b)
if(r===1){p="return function(){return this."+m+"."+H.k(s)+"(this."+t+");"
o=$.aP
if(typeof o!=="number")return o.W()
$.aP=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+m+"."+H.k(s)+"(this."+t+", "+n+");"
o=$.aP
if(typeof o!=="number")return o.W()
$.aP=o+1
return new Function(p+o+"}")()},
lO:function(a,b,c,d,e,f,g){return H.nP(a,b,c,d,!!e,!!f,g)},
nI:function(a,b){return H.hd(v.typeUniverse,H.cE(a.a),b)},
nJ:function(a,b){return H.hd(v.typeUniverse,H.cE(a.c),b)},
m0:function(a){return a.a},
nK:function(a){return a.c},
hE:function(a){var t,s,r,q=new H.c0("self","target","receiver","name"),p=J.lo(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.c(P.lY("Field name "+a+" not found."))},
q3:function(a){throw H.c(new P.ec(a))},
pL:function(a){return v.getIsolateTag(a)},
q4:function(a){return H.a6(new H.er(a))},
rB:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pW:function(a){var t,s,r,q,p,o=$.n3.$1(a),n=$.l7[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ld[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.n_.$2(a,o)
if(r!=null){n=$.l7[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ld[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.le(t)
$.l7[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ld[o]=t
return t}if(q==="-"){p=H.le(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.n6(a,t)
if(q==="*")throw H.c(P.mv(o))
if(v.leafTags[o]===true){p=H.le(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.n6(a,t)},
n6:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.lR(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
le:function(a){return J.lR(a,!1,null,!!a.$ix)},
pY:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.le(t)
else return J.lR(t,c,null,null)},
pQ:function(){if(!0===$.lP)return
$.lP=!0
H.pR()},
pR:function(){var t,s,r,q,p,o,n,m
$.l7=Object.create(null)
$.ld=Object.create(null)
H.pP()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.n8.$1(p)
if(o!=null){n=H.pY(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
pP:function(){var t,s,r,q,p,o,n=C.B()
n=H.cC(C.C,H.cC(C.D,H.cC(C.q,H.cC(C.q,H.cC(C.E,H.cC(C.F,H.cC(C.G(C.p),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.n3=new H.la(q)
$.n_=new H.lb(p)
$.n8=new H.lc(o)},
cC:function(a,b){return a(b)||b},
o3:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.c(P.m8("Illegal RegExp pattern ("+String(o)+")",a))},
na:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pG:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n9:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dW:function(a,b,c){var t=H.q0(a,b,c)
return t},
q0:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
s=""+c
for(r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n9(b),'g'),H.pG(c))},
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
de:function de(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
ir:function ir(a){this.a=a},
dE:function dE(a){this.a=a
this.b=null},
bF:function bF(){},
f5:function f5(){},
eZ:function eZ(){},
c0:function c0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eQ:function eQ(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i9:function i9(a){this.a=a},
id:function id(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bj:function bj(a){this.a=a},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
i8:function i8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cD(b,a))},
p_:function(a,b,c){var t
if(!(a>>>0!==a))t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw H.c(H.pF(a,b,c))
return b},
da:function da(){},
ck:function ck(){},
bM:function bM(){},
d9:function d9(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
db:function db(){},
eF:function eF(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
mp:function(a,b){var t=b.c
return t==null?b.c=H.lG(a,b.z,!0):t},
mo:function(a,b){var t=b.c
return t==null?b.c=H.dJ(a,"c5",[b.z]):t},
mq:function(a){var t=a.y
if(t===6||t===7||t===8)return H.mq(a.z)
return t===11||t===12},
oo:function(a){return a.cy},
pI:function(a){return H.lH(v.typeUniverse,a,!1)},
bw:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bw(a,t,c,a0)
if(s===t)return b
return H.mM(a,s,!0)
case 7:t=b.z
s=H.bw(a,t,c,a0)
if(s===t)return b
return H.lG(a,s,!0)
case 8:t=b.z
s=H.bw(a,t,c,a0)
if(s===t)return b
return H.mL(a,s,!0)
case 9:r=b.Q
q=H.dS(a,r,c,a0)
if(q===r)return b
return H.dJ(a,b.z,q)
case 10:p=b.z
o=H.bw(a,p,c,a0)
n=b.Q
m=H.dS(a,n,c,a0)
if(o===p&&m===n)return b
return H.lE(a,o,m)
case 11:l=b.z
k=H.bw(a,l,c,a0)
j=b.Q
i=H.pl(a,j,c,a0)
if(k===l&&i===j)return b
return H.mK(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.dS(a,h,c,a0)
p=b.z
o=H.bw(a,p,c,a0)
if(g===h&&o===p)return b
return H.lF(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.c(P.hA("Attempted to substitute unexpected RTI kind "+d))}},
dS:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bw(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
pm:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.bw(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
pl:function(a,b,c,d){var t,s=b.a,r=H.dS(a,s,c,d),q=b.b,p=H.dS(a,q,c,d),o=b.c,n=H.pm(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fC()
t.a=r
t.b=p
t.c=n
return t},
rD:function(a,b){a[v.arrayRti]=b
return a},
pE:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.n4(t)
return a.$S()}return null},
n5:function(a,b){var t
if(H.mq(b))if(a instanceof H.bF){t=H.pE(a)
if(t!=null)return t}return H.cE(a)},
cE:function(a){var t
if(a instanceof P.F){t=a.$ti
return t!=null?t:H.lI(a)}if(Array.isArray(a))return H.mP(a)
return H.lI(J.dU(a))},
mP:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
al:function(a){var t=a.$ti
return t!=null?t:H.lI(a)},
lI:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.p6(a,t)},
p6:function(a,b){var t=a instanceof H.bF?a.__proto__.__proto__.constructor:b,s=H.oW(v.typeUniverse,t.name)
b.$ccache=s
return s},
n4:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.lH(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
p5:function(a){var t,s,r,q=this
if(q===u.K)return H.dP(q,a,H.pa)
if(!H.b3(q))if(!(q===u._))t=!1
else t=!0
else t=!0
if(t)return H.dP(q,a,H.pd)
t=q.y
s=t===6?q.z:q
if(s===u.S)r=H.jK
else if(s===u.i||s===u.H)r=H.p9
else if(s===u.N)r=H.pb
else r=s===u.v?H.lK:null
if(r!=null)return H.dP(q,a,r)
if(s.y===9){t=s.z
if(s.Q.every(H.pV)){q.r="$i"+t
return H.dP(q,a,H.pc)}}else if(t===7)return H.dP(q,a,H.p3)
return H.dP(q,a,H.p1)},
dP:function(a,b,c){a.b=c
return a.b(b)},
p4:function(a){var t,s=this,r=H.p0
if(!H.b3(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=H.oZ
else if(s===u.K)r=H.oY
else{t=H.dV(s)
if(t)r=H.p2}s.a=r
return s.a(a)},
lN:function(a){var t,s=a.y
if(!H.b3(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&H.lN(a.z)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
p1:function(a){var t=this
if(a==null)return H.lN(t)
return H.U(v.typeUniverse,H.n5(a,t),null,t,null)},
p3:function(a){if(a==null)return!0
return this.z.b(a)},
pc:function(a){var t,s=this
if(a==null)return H.lN(s)
t=s.r
if(a instanceof P.F)return!!a[t]
return!!J.dU(a)[t]},
p0:function(a){var t,s=this
if(a==null){t=H.dV(s)
if(t)return a}else if(s.b(a))return a
H.mS(a,s)},
p2:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.mS(a,t)},
mS:function(a,b){throw H.c(H.oM(H.mC(a,H.n5(a,b),H.aw(b,null))))},
mC:function(a,b,c){var t=P.hY(a),s=H.aw(b==null?H.cE(a):b,null)
return t+": type '"+s+"' is not a subtype of type '"+c+"'"},
oM:function(a){return new H.dI("TypeError: "+a)},
ad:function(a,b){return new H.dI("TypeError: "+H.mC(a,null,b))},
pa:function(a){return a!=null},
oY:function(a){if(a!=null)return a
throw H.c(H.ad(a,"Object"))},
pd:function(a){return!0},
oZ:function(a){return a},
lK:function(a){return!0===a||!1===a},
ro:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ad(a,"bool"))},
rq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ad(a,"bool"))},
rp:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ad(a,"bool?"))},
rr:function(a){if(typeof a=="number")return a
throw H.c(H.ad(a,"double"))},
rt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"double"))},
rs:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"double?"))},
jK:function(a){return typeof a=="number"&&Math.floor(a)===a},
mQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ad(a,"int"))},
rv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ad(a,"int"))},
ru:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ad(a,"int?"))},
p9:function(a){return typeof a=="number"},
rw:function(a){if(typeof a=="number")return a
throw H.c(H.ad(a,"num"))},
ry:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"num"))},
rx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ad(a,"num?"))},
pb:function(a){return typeof a=="string"},
jH:function(a){if(typeof a=="string")return a
throw H.c(H.ad(a,"String"))},
rA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ad(a,"String"))},
rz:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ad(a,"String?"))},
pi:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+H.aw(a[r],b)
return t},
mT:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=[]
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)a4.push("T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){n+=m
l=a4.length
k=l-1-q
if(k<0)return H.d(a4,k)
n=C.b.W(n,a4[k])
j=a5[q]
i=j.y
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+H.aw(j,a4)}n+=">"}else{n=""
s=null}p=a3.z
h=a3.Q
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=H.aw(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+H.aw(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+H.aw(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=H.aw(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
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
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+H.aw(a.z,b)+">"
if(m===9){q=H.pn(a.z)
p=a.Q
return p.length!==0?q+("<"+H.pi(p,b)+">"):q}if(m===11)return H.mT(a,b,null)
if(m===12)return H.mT(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.d(b,o)
return b[o]}return"?"},
pn:function(a){var t,s=H.nc(a)
if(s!=null)return s
t="minified:"+a
return t},
mN:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
oW:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.lH(a,b,!1)
else if(typeof n=="number"){t=n
s=H.dK(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.dJ(a,b,r)
o[b]=p
return p}else return n},
oU:function(a,b){return H.mO(a.tR,b)},
oT:function(a,b){return H.mO(a.eT,b)},
lH:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.mI(H.mG(a,null,b,c))
s.set(b,t)
return t},
hd:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.mI(H.mG(a,b,c,!0))
r.set(c,s)
return s},
oV:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.lE(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
bv:function(a,b){b.a=H.p4
b.b=H.p5
return b},
dK:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aA(null,null)
t.y=b
t.cy=c
s=H.bv(a,t)
a.eC.set(c,s)
return s},
mM:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.oR(a,b,s,c)
a.eC.set(s,t)
return t},
oR:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.b3(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.aA(null,null)
r.y=6
r.z=b
r.cy=c
return H.bv(a,r)},
lG:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.oQ(a,b,s,c)
a.eC.set(s,t)
return t},
oQ:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.b3(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.dV(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.dV(r.z))return r
else return H.mp(a,b)}}q=new H.aA(null,null)
q.y=7
q.z=b
q.cy=c
return H.bv(a,q)},
mL:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.oO(a,b,s,c)
a.eC.set(s,t)
return t},
oO:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.b3(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.dJ(a,"c5",[b])
else if(b===u.P||b===u.T)return u.R}r=new H.aA(null,null)
r.y=8
r.z=b
r.cy=c
return H.bv(a,r)},
oS:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aA(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bv(a,t)
a.eC.set(r,s)
return s},
hc:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
oN:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
dJ:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.hc(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aA(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bv(a,s)
a.eC.set(q,r)
return r},
lE:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.hc(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aA(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bv(a,p)
a.eC.set(r,o)
return o},
mK:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.hc(n)
if(k>0){t=m>0?",":""
s=H.hc(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.oN(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aA(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.bv(a,p)
a.eC.set(r,s)
return s},
lF:function(a,b,c,d){var t,s=b.cy+("<"+H.hc(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.oP(a,b,c,s,d)
a.eC.set(s,t)
return t},
oP:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bw(a,b,s,0)
n=H.dS(a,c,s,0)
return H.lF(a,o,n,c!==n)}}m=new H.aA(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bv(a,m)},
mG:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mI:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=H.oH(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.mH(a,s,i,h,!1)
else if(r===46)s=H.mH(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(H.bu(a.u,a.e,h.pop()))
break
case 94:h.push(H.oS(a.u,h.pop()))
break
case 35:h.push(H.dK(a.u,5,"#"))
break
case 64:h.push(H.dK(a.u,2,"@"))
break
case 126:h.push(H.dK(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
H.lD(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(H.dJ(q,o,p))
else{n=H.bu(q,a.e,o)
switch(n.y){case 11:h.push(H.lF(q,n,p,a.n))
break
default:h.push(H.lE(q,n,p))
break}}break
case 38:H.oI(a,h)
break
case 42:q=a.u
h.push(H.mM(q,H.bu(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(H.lG(q,H.bu(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(H.mL(q,H.bu(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new H.fC()
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
H.lD(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(H.mK(q,H.bu(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
H.lD(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
H.oK(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return H.bu(a.u,a.e,j)},
oH:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
mH:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.mN(t,p.z)[q]
if(o==null)H.a6('No "'+q+'" in "'+H.oo(p)+'"')
d.push(H.hd(t,p,o))}else d.push(q)
return n},
oI:function(a,b){var t=b.pop()
if(0===t){b.push(H.dK(a.u,1,"0&"))
return}if(1===t){b.push(H.dK(a.u,4,"1&"))
return}throw H.c(P.hA("Unexpected extended operation "+H.k(t)))},
bu:function(a,b,c){if(typeof c=="string")return H.dJ(a,c,a.sEA)
else if(typeof c=="number")return H.oJ(a,b,c)
else return c},
lD:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.bu(a,b,c[t])},
oK:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.bu(a,b,c[t])},
oJ:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.c(P.hA("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.c(P.hA("Bad index "+c+" for "+b.h(0)))},
U:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.b3(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.b3(b))return!1
if(b.y!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(H.U(a,c[b.z],c,d,e))return!0
q=d.y
t=b===u.P||b===u.T
if(t){if(q===8)return H.U(a,b,c,d.z,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return H.U(a,b.z,c,d,e)
if(s===6)return H.U(a,b.z,c,d,e)
return s!==7}if(s===6)return H.U(a,b.z,c,d,e)
if(q===6){t=H.mp(a,d)
return H.U(a,b,c,t,e)}if(s===8){if(!H.U(a,b.z,c,d,e))return!1
return H.U(a,H.mo(a,b),c,d,e)}if(s===7){t=H.U(a,u.P,c,d,e)
return t&&H.U(a,b.z,c,d,e)}if(q===8){if(H.U(a,b,c,d.z,e))return!0
return H.U(a,b,c,H.mo(a,d),e)}if(q===7){t=H.U(a,b,c,u.P,e)
return t||H.U(a,b,c,d.z,e)}if(r)return!1
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
if(!H.U(a,l,c,k,e)||!H.U(a,k,e,l,c))return!1}return H.mU(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.mU(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.p8(a,b,c,d,e)}return!1},
mU:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.U(a2,a3.z,a4,a5.z,a6))return!1
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
if(!H.U(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.U(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.U(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.U(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
p8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.U(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.mN(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.U(a,H.hd(a,b,m[q]),c,s[q],e))return!1
return!0},
dV:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.b3(a))if(s!==7)if(!(s===6&&H.dV(a.z)))t=s===8&&H.dV(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
pV:function(a){var t
if(!H.b3(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
b3:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
mO:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fC:function fC(){this.c=this.b=this.a=null},
fy:function fy(){},
dI:function dI(a){this.a=a},
nc:function(a){return v.mangledGlobalNames[a]},
pZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
l9:function(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lP==null){H.pQ()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw H.c(P.mv("Return interceptor for "+H.k(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.jr
if(p==null)p=$.jr=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=H.pW(a)
if(q!=null)return q
if(typeof a=="function")return C.P
t=Object.getPrototypeOf(a)
if(t==null)return C.u
if(t===Object.prototype)return C.u
if(typeof r=="function"){p=$.jr
if(p==null)p=$.jr=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
nZ:function(a){if(a<0||a>4294967295)throw H.c(P.bo(a,0,4294967295,"length",null))
return J.o0(new Array(a))},
o_:function(a){if(a<0)throw H.c(P.lY("Length must be a non-negative integer: "+a))
return new Array(a)},
o0:function(a){return J.lo(a)},
lo:function(a){a.fixed$length=Array
return a},
o1:function(a,b){return J.nB(a,b)},
m9:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
o2:function(a,b){var t,s
for(t=a.length;b<t;){s=C.b.b_(a,b)
if(s!==32&&s!==13&&!J.m9(s))break;++b}return b},
lp:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.b.ax(a,t)
if(s!==32&&s!==13&&!J.m9(s))break}return b},
dU:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d1.prototype
return J.en.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.c7.prototype
if(typeof a=="boolean")return J.em.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.F)return a
return J.l9(a)},
ht:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.F)return a
return J.l9(a)},
l8:function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.F)return a
return J.l9(a)},
pJ:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bS.prototype
return a},
pK:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bS.prototype
return a},
hu:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.F)return a
return J.l9(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dU(a).j(a,b)},
nz:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ht(a).l(a,b)},
nA:function(a,b,c,d){return J.hu(a).eo(a,b,c,d)},
nB:function(a,b){return J.pJ(a).ay(a,b)},
nC:function(a,b){return J.l8(a).G(a,b)},
li:function(a,b){return J.l8(a).M(a,b)},
nD:function(a){return J.hu(a).gev(a)},
hx:function(a){return J.dU(a).gK(a)},
bc:function(a){return J.l8(a).gP(a)},
bZ:function(a){return J.ht(a).gm(a)},
lX:function(a){return J.l8(a).f3(a)},
nE:function(a){return J.pK(a).fg(a)},
e_:function(a){return J.dU(a).h(a)},
a:function a(){},
em:function em(){},
c7:function c7(){},
bI:function bI(){},
eL:function eL(){},
bS:function bS(){},
aS:function aS(){},
az:function az(){},
eo:function eo(){},
aO:function aO(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(){},
d1:function d1(){},
en:function en(){},
bi:function bi(){}},P={
ox:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pA()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.dT(new P.jb(r),1)).observe(t,{childList:true})
return new P.ja(r,t,s)}else if(self.setImmediate!=null)return P.pB()
return P.pC()},
oy:function(a){self.scheduleImmediate(H.dT(new P.jc(a),0))},
oz:function(a){self.setImmediate(H.dT(new P.jd(a),0))},
oA:function(a){P.lz(C.i,a)},
lz:function(a,b){var t=C.c.X(a.a,1000)
return P.oL(t<0?0:t,b)},
oL:function(a,b){var t=new P.jB()
t.d7(a,b)
return t},
rl:function(a){return new P.cz(a,1)},
oF:function(){return C.Y},
oG:function(a){return new P.cz(a,3)},
pf:function(a){return new P.dF(a)},
hB:function(a,b){var t=H.pD(a,"error",u.K)
return new P.e3(t,b==null?P.lZ(a):b)},
lZ:function(a){var t
if(u.C.b(a)){t=a.gaX()
if(t!=null)return t}return C.J},
nV:function(a,b){var t=new P.aG($.W,b.T("aG<0>"))
P.f9(C.i,new P.i4(t,a))
return t},
mD:function(a,b){var t,s
for(;t=a.a,t===2;)a=a.c
if(t>=4){s=b.b2()
b.a=a.a
b.c=a.c
P.cx(b,s)}else{s=b.c
b.a=2
b.c=a
a.ce(s)}},
cx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={},e=f.a=a
for(t=u.c;!0;){s={}
r=e.a===8
if(b==null){if(r){t=e.c
P.jL(g,g,e.b,t.a,t.b)}return}s.a=b
q=b.a
for(e=b;q!=null;e=q,q=p){e.a=null
P.cx(f.a,e)
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
if(l){P.jL(g,g,o.b,n.a,n.b)
return}j=$.W
if(j!==k)$.W=k
else j=g
e=e.c
if((e&15)===8)new P.jp(s,f,r).$0()
else if(m){if((e&1)!==0)new P.jo(s,n).$0()}else if((e&2)!==0)new P.jn(f,s).$0()
if(j!=null)$.W=j
e=s.c
if(t.b(e)){o=s.a.$ti
o=o.T("c5<2>").b(e)||!o.Q[1].b(e)}else o=!1
if(o){i=s.a.b
if(e.a>=4){h=i.c
i.c=null
b=i.b3(h)
i.a=e.a
i.c=e.c
f.a=e
continue}else P.mD(e,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.b3(h)
e=s.b
o=s.c
if(!e){i.a=4
i.c=o}else{i.a=8
i.c=o}f.a=i
e=i}},
mV:function(a,b){if(u.Q.b(a))return a
if(u.w.b(a))return a
throw H.c(P.nG(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
pg:function(){var t,s
for(t=$.cB;t!=null;t=$.cB){$.dR=null
s=t.b
$.cB=s
if(s==null)$.dQ=null
t.a.$0()}},
pk:function(){$.lL=!0
try{P.pg()}finally{$.dR=null
$.lL=!1
if($.cB!=null)$.lW().$1(P.n0())}},
mY:function(a){var t=new P.fo(a),s=$.dQ
if(s==null){$.cB=$.dQ=t
if(!$.lL)$.lW().$1(P.n0())}else $.dQ=s.b=t},
pj:function(a){var t,s,r,q=$.cB
if(q==null){P.mY(a)
$.dR=$.dQ
return}t=new P.fo(a)
s=$.dR
if(s==null){t.b=q
$.cB=$.dR=t}else{r=s.b
t.b=r
$.dR=s.b=t
if(r==null)$.dQ=t}},
q_:function(a){var t=null,s=$.W
if(C.f===s){P.jN(t,t,C.f,a)
return}P.jN(t,t,s,s.bC(a))},
f9:function(a,b){var t=$.W
if(t===C.f)return P.lz(a,b)
return P.lz(a,t.bC(b))},
jL:function(a,b,c,d,e){P.pj(new P.jM(d,e))},
mW:function(a,b,c,d){var t,s=$.W
if(s===c)return d.$0()
$.W=c
t=s
try{s=d.$0()
return s}finally{$.W=t}},
mX:function(a,b,c,d,e){var t,s=$.W
if(s===c)return d.$1(e)
$.W=c
t=s
try{s=d.$1(e)
return s}finally{$.W=t}},
ph:function(a,b,c,d,e,f){var t,s=$.W
if(s===c)return d.$2(e,f)
$.W=c
t=s
try{s=d.$2(e,f)
return s}finally{$.W=t}},
jN:function(a,b,c,d){if(C.f!==c)d=c.bC(d)
P.mY(d)},
jb:function jb(a){this.a=a},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a){this.a=a},
jd:function jd(a){this.a=a},
jB:function jB(){},
jC:function jC(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=a
this.b=b},
cA:function cA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dF:function dF(a){this.a=a},
e3:function e3(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aG:function aG(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ji:function ji(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
jo:function jo(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
fo:function fo(a){this.a=a
this.b=null},
f0:function f0(){},
f1:function f1(){},
jF:function jF(){},
jM:function jM(a,b){this.a=a
this.b=b},
ju:function ju(){},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
o4:function(a,b,c){return H.pH(a,new H.aK(b.T("@<0>").aZ(c).T("aK<1,2>")))},
eu:function(a,b){return new H.aK(a.T("@<0>").aZ(b).T("aK<1,2>"))},
d2:function(a){return new P.dt(a.T("dt<0>"))},
lC:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
nX:function(a,b,c){var t,s
if(P.lM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.as.push(a)
try{P.pe(a,t)}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}s=P.ms(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
lm:function(a,b,c){var t,s
if(P.lM(a))return b+"..."+c
t=new P.bP(b)
$.as.push(a)
try{s=t
s.a=P.ms(s.a,a,", ")}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
lM:function(a){var t,s
for(t=$.as.length,s=0;s<t;++s)if(a===$.as[s])return!0
return!1},
pe:function(a,b){var t,s,r,q,p,o,n,m=a.gP(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.A())return
t=H.k(m.gF(m))
b.push(t)
l+=t.length+2;++k}if(!m.A()){if(k<=5)return
if(0>=b.length)return H.d(b,-1)
s=b.pop()
if(0>=b.length)return H.d(b,-1)
r=b.pop()}else{q=m.gF(m);++k
if(!m.A()){if(k<=4){b.push(H.k(q))
return}s=H.k(q)
if(0>=b.length)return H.d(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gF(m);++k
for(;m.A();q=p,p=o){o=m.gF(m);++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.d(b,-1)
l-=b.pop().length+2;--k}b.push("...")
return}}r=H.k(q)
s=H.k(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)b.push(n)
b.push(r)
b.push(s)},
ma:function(a,b){var t,s,r=P.d2(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.H)(a),++s)r.u(0,b.a(a[s]))
return r},
md:function(a){var t,s={}
if(P.lM(a))return"{...}"
t=new P.bP("")
try{$.as.push(a)
t.a+="{"
s.a=!0
J.li(a,new P.ih(s,t))
t.a+="}"}finally{if(0>=$.as.length)return H.d($.as,-1)
$.as.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
dt:function dt(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jt:function jt(a){this.a=a
this.c=this.b=null},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d0:function d0(){},
d3:function d3(){},
K:function K(){},
d5:function d5(){},
ih:function ih(a,b){this.a=a
this.b=b},
a3:function a3(){},
eS:function eS(){},
dA:function dA(){},
du:function du(){},
dL:function dL(){},
e8:function e8(){},
eb:function eb(){},
hW:function hW(){},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
i6:function i6(a){this.a=a},
j0:function j0(){},
j1:function j1(){},
jD:function jD(a){this.b=0
this.c=a},
pS:function(a){var t=H.oh(a,null)
if(t!=null)return t
throw H.c(P.m8(a,null))},
nT:function(a){if(a instanceof H.bF)return a.h(0)
return"Instance of '"+H.iv(a)+"'"},
ev:function(a,b,c){var t,s=c?J.o_(a):J.nZ(a)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
mb:function(a,b){var t,s=[]
for(t=J.bc(a);t.A();)s.push(t.gF(t))
if(b)return s
return J.lo(s)},
ly:function(a){var t=a,s=t.length,r=P.lt(0,null,s)
return H.oj(r<s?t.slice(0,r):t)},
om:function(a){return new H.i8(a,H.o3(a,!1,!0,!1,!1,!1))},
ms:function(a,b,c){var t=J.bc(b)
if(!t.A())return a
if(c.length===0){do a+=H.k(t.gF(t))
while(t.A())}else{a+=H.k(t.gF(t))
for(;t.A();)a=a+c+H.k(t.gF(t))}return a},
oX:function(a,b,c,d){var t,s,r,q,p,o,n="0123456789ABCDEF"
if(c===C.r){t=$.ny().b
t=t.test(b)}else t=!1
if(t)return b
s=C.I.eD(b)
for(t=s.length,r=0,q="";r<t;++r){p=s[r]
if(p<128){o=p>>>4
if(o>=8)return H.d(a,o)
o=(a[o]&1<<(p&15))!==0}else o=!1
if(o)q+=H.oi(p)
else q=q+"%"+n[p>>>4&15]+n[p&15]}return q.charCodeAt(0)==0?q:q},
nQ:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ed:function(a){if(a>=10)return""+a
return"0"+a},
hR:function(a){return new P.c2(1000*a)},
hY:function(a){if(typeof a=="number"||H.lK(a)||null==a)return J.e_(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nT(a)},
hA:function(a){return new P.e2(a)},
lY:function(a){return new P.ax(!1,null,null,a)},
nG:function(a,b,c){return new P.ax(!0,a,b,c)},
eN:function(a,b){return new P.dg(null,null,!0,a,b,"Value not in range")},
bo:function(a,b,c,d,e){return new P.dg(b,c,!0,a,d,"Invalid value")},
lt:function(a,b,c){if(a>c)throw H.c(P.bo(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.bo(b,a,c,"end",null))
return b}return c},
ol:function(a,b){if(a<0)throw H.c(P.bo(a,0,null,b,null))
return a},
S:function(a,b,c,d,e){var t=e==null?J.bZ(b):e
return new P.ek(t,!0,a,c,"Index out of range")},
C:function(a){return new P.fj(a)},
mv:function(a){return new P.fg(a)},
lw:function(a){return new P.cp(a)},
be:function(a){return new P.e9(a)},
V:function(a){return new P.jg(a)},
m8:function(a,b){return new P.i2(a,b)},
n7:function(a){H.pZ(a)},
a7:function a7(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
hS:function hS(){},
hT:function hT(){},
J:function J(){},
e2:function e2(a){this.a=a},
ff:function ff(){},
eG:function eG(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ek:function ek(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fj:function fj(a){this.a=a},
fg:function fg(a){this.a=a},
cp:function cp(a){this.a=a},
e9:function e9(a){this.a=a},
eJ:function eJ(){},
dl:function dl(){},
ec:function ec(a){this.a=a},
jg:function jg(a){this.a=a},
i2:function i2(a,b){this.a=a
this.b=b},
f:function f(){},
el:function el(){},
a1:function a1(){},
F:function F(){},
h2:function h2(){},
bP:function bP(a){this.a=a},
bx:function(a){var t,s,r,q,p
if(a==null)return null
t=P.eu(u.N,u.z)
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
t.p(0,p,a[p])}return t},
mR:function(a){var t
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.lK(a))return a
if(u.f.b(a))return P.n1(a)
if(u.j.b(a)){t=[]
J.li(a,new P.jI(t))
a=t}return a},
n1:function(a){var t={}
J.li(a,new P.l6(t))
return t},
jI:function jI(a){this.a=a},
l6:function l6(a){this.a=a},
bK:function bK(){},
es:function es(){},
bN:function bN(){},
eH:function eH(){},
iu:function iu(){},
cn:function cn(){},
f2:function f2(){},
i:function i(){},
bR:function bR(){},
fd:function fd(){},
fH:function fH(){},
fI:function fI(){},
fQ:function fQ(){},
fR:function fR(){},
h0:function h0(){},
h1:function h1(){},
ha:function ha(){},
hb:function hb(){},
hC:function hC(){},
e4:function e4(){},
hD:function hD(a){this.a=a},
e5:function e5(){},
bd:function bd(){},
eI:function eI(){},
fq:function fq(){},
dj:function dj(){},
eX:function eX(){},
fY:function fY(){},
fZ:function fZ(){}},W={
nF:function(){var t=document.createElement("a")
t.toString
return t},
nS:function(a,b,c){var t=document.body
t.toString
t=new H.ct(new W.aj(C.m.a4(t,a,b,c)),new W.hU())
return u.h.a(t.gap(t))},
hV:function(a){return"wheel"},
cU:function(a){var t,s,r="element tag unavailable"
try{t=J.hu(a)
t.gcJ(a)
r=t.gcJ(a)}catch(s){H.am(s)}return r},
nW:function(a){var t,s=document.createElement("input"),r=u.r.a(s)
try{r.type=a}catch(t){H.am(t)}return r},
js:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mF:function(a,b,c,d){var t=W.js(W.js(W.js(W.js(0,a),b),c),d),s=t+((t&67108863)<<3)&536870911
s^=s>>>11
return s+((s&16383)<<15)&536870911},
a8:function(a,b,c,d){var t=W.mZ(new W.jf(c),u.B)
if(t!=null&&!0)J.nA(a,b,t,!1)
return new W.fz(a,b,t,!1)},
mE:function(a){var t=W.nF(),s=window
t=new W.cy(new W.jx(t,s.location))
t.d4(a)
return t},
oD:function(a,b,c,d){return!0},
oE:function(a,b,c,d){var t,s,r,q=d.a,p=q.a
p.href=c
t=p.hostname
q=q.b
if(t==q.hostname){s=p.port
r=q.port
r.toString
if(s===r){s=p.protocol
q=q.protocol
q.toString
q=s===q}else q=!1}else q=!1
if(!q)if(t==="")if(p.port===""){q=p.protocol
q=q===":"||q===""}else q=!1
else q=!1
else q=!0
return q},
mJ:function(){var t=u.N
t=new W.h5(P.ma(C.t,t),P.d2(t),P.d2(t),P.d2(t),null)
t.d6(null,new H.d7(C.t,new W.jA()),["TEMPLATE"],null)
return t},
mZ:function(a,b){var t=$.W
if(t===C.f)return a
return t.ex(a,b)},
n:function n(){},
hy:function hy(){},
e0:function e0(){},
e1:function e1(){},
c_:function c_(){},
e7:function e7(){},
bE:function bE(){},
cN:function cN(){},
aJ:function aJ(){},
hJ:function hJ(){},
N:function N(){},
cP:function cP(){},
hK:function hK(){},
ay:function ay(){},
aQ:function aQ(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
cQ:function cQ(){},
hP:function hP(){},
cR:function cR(){},
cS:function cS(){},
ee:function ee(){},
hQ:function hQ(){},
jh:function jh(a,b){this.a=a
this.$ti=b},
O:function O(){},
hU:function hU(){},
e:function e(){},
b:function b(){},
bg:function bg(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
bh:function bh(){},
i5:function i5(){},
bH:function bH(){},
c6:function c6(){},
bJ:function bJ(){},
ie:function ie(){},
ii:function ii(){},
ex:function ex(){},
ij:function ij(a){this.a=a},
ey:function ey(){},
ik:function ik(a){this.a=a},
bk:function bk(){},
ez:function ez(){},
av:function av(){},
aj:function aj(a){this.a=a},
u:function u(){},
dc:function dc(){},
bm:function bm(){},
eM:function eM(){},
eP:function eP(){},
iA:function iA(a){this.a=a},
eR:function eR(){},
aW:function aW(){},
eV:function eV(){},
bp:function bp(){},
eW:function eW(){},
bq:function bq(){},
f_:function f_(){},
iH:function iH(a){this.a=a},
aL:function aL(){},
dp:function dp(){},
f3:function f3(){},
f4:function f4(){},
cq:function cq(){},
aX:function aX(){},
aC:function aC(){},
f6:function f6(){},
f7:function f7(){},
iS:function iS(){},
br:function br(){},
bQ:function bQ(){},
fc:function fc(){},
iV:function iV(){},
aZ:function aZ(){},
j_:function j_(){},
fm:function fm(){},
bt:function bt(){},
cu:function cu(){},
cv:function cv(){},
fr:function fr(){},
ds:function ds(){},
fD:function fD(){},
dv:function dv(){},
fX:function fX(){},
h3:function h3(){},
fp:function fp(){},
fx:function fx(a){this.a=a},
ll:function ll(a,b){this.a=a
this.$ti=b},
fz:function fz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jf:function jf(a){this.a=a},
lB:function lB(a){this.$ti=a},
cy:function cy(a){this.a=a},
Q:function Q(){},
dd:function dd(a){this.a=a},
ip:function ip(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(){},
jy:function jy(){},
jz:function jz(){},
h5:function h5(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jA:function jA(){},
h4:function h4(){},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jx:function jx(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a
this.b=0},
jE:function jE(a){this.a=a},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fA:function fA(){},
fB:function fB(){},
fF:function fF(){},
fG:function fG(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
dC:function dC(){},
dD:function dD(){},
fV:function fV(){},
fW:function fW(){},
h_:function h_(){},
h6:function h6(){},
h7:function h7(){},
dG:function dG(){},
dH:function dH(){},
h8:function h8(){},
h9:function h9(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(){}},K={hz:function hz(){},ej:function ej(){},bl:function bl(a){this.a=a},a4:function a4(a){this.a=a}},L={eY:function eY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},fb:function fb(a,b){this.b=a
this.c=b},iT:function iT(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},iW:function iW(a,b){this.b=a
this.c=!1
this.a=b}},O={
m3:function(){return new O.cO([])},
cO:function cO(a){this.a=a
this.c=this.b=null},
d8:function d8(a){this.a=a
this.b=null},
hO:function hO(a,b){this.a=a
this.b=b
this.c=null},
iK:function iK(){}},Y={
nb:function(a1,a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(a5==null)a5=$.dX()
if(a6==null)a6=$.dX()
t=$.lT().a
s=a5.a
r=$.cG()
q=$.cF()
p=a5.bv(r,q)
o=$.cH()
n=$.dY()
m=a5.bv(o,n)
l=$.dZ()
k=$.cI()
j=a5.bv(l,k)
j=a6.a&(t&s|p|m|j)
i=a3.aF(0,a4)
h=$.aH()
t=i.a
if(t!==0){if(t>0){s=q.a
if((j&s)===s){s=a2.a-(a1.a+a1.d)
$.A().toString
g=Math.abs(s)<1e-9?0:s/t
r=q
f=!0}else{r=h
g=0
f=!1}}else{s=r.a
if((j&s)===s){s=a2.a+a2.d-a1.a
$.A().toString
g=Math.abs(s)<1e-9?0:s/t
f=!0}else{r=h
g=0
f=!1}}if(f&&g<100&&g>=0&&g<=1){e=a1.b+i.b*g
s=a2.b
$.A().toString
if(e-1e-9<s+a2.e&&s-1e-9<e+a1.e){d=a1.c+i.c*g
s=a2.c
if(d-1e-9<s+a2.f&&s-1e-9<d+a1.f){c=r
b=g}else{c=h
b=100}}else{c=h
b=100}}else{c=h
b=100}}else{r=h
c=r
b=100
g=0}s=i.b
if(s!==0){if(s>0){p=n.a
if((j&p)===p){p=a2.b-(a1.b+a1.e)
$.A().toString
g=Math.abs(p)<1e-9?0:p/s
r=n
f=!0}else f=!1}else{p=o.a
if((j&p)===p){p=a2.b+a2.e-a1.b
$.A().toString
g=Math.abs(p)<1e-9?0:p/s
r=o
f=!0}else f=!1}if(f&&g<b&&g>=0&&g<=1){a=a1.a+t*g
p=a2.a
$.A().toString
if(a-1e-9<p+a2.d&&p-1e-9<a+a1.d){d=a1.c+i.c*g
p=a2.c
if(d-1e-9<p+a2.f&&p-1e-9<d+a1.f){c=r
b=g}}}}p=i.c
if(p!==0){if(p>0){m=k.a
if((j&m)===m){m=a2.c-(a1.c+a1.f)
$.A().toString
g=Math.abs(m)<1e-9?0:m/p
r=k
f=!0}else f=!1}else{m=l.a
if((j&m)===m){m=a2.c+a2.f-a1.c
$.A().toString
g=Math.abs(m)<1e-9?0:m/p
r=l
f=!0}else f=!1}if(f&&g<b&&g>=0&&g<=1){a=a1.a+t*g
t=a2.a
$.A().toString
if(a-1e-9<t+a2.d&&t-1e-9<a+a1.d){e=a1.b+s*g
t=a2.b
if(e-1e-9<t+a2.e&&t-1e-9<e+a1.e){c=r
b=g}}}}if(c.j(0,h)){t=a2.a
s=a1.a
$.A().toString
if(s-1e-9<t+a2.d&&t-1e-9<s+a1.d){t=a2.b
s=a1.b
if(s-1e-9<t+a2.e&&t-1e-9<s+a1.e){t=a2.c
s=a1.c
t=s-1e-9<t+a2.f&&t-1e-9<s+a1.f
a0=t}else a0=!1}else a0=!1
return new Y.fe(h,a0?C.j:C.h,0)}return new Y.fe(c,C.e,b)},
q6:function(a,a0,a1,a2){var t,s,r,q,p,o,n,m=null,l=a.a,k=a.b,j=a.c,i=a0.a,h=a0.b,g=a0.c,f=new V.p(l-i,k-h,j-g),e=a.d,d=e+a0.d,c=d*d,b=f.af(f)
if(b<c)return new Y.bs(new V.o(l,k,j),new V.o(i,h,g),m,C.j,0)
t=a2.aF(0,a1)
s=Math.sqrt(t.af(t))
r=f.af(t.Y())
$.A().toString
if(Math.abs(b-c)<1e-9&&r<0)return new Y.bs(m,m,m,C.h,0)
q=r*r+c-b
if(q<0)return new Y.bs(m,m,m,C.h,0)
p=r-Math.sqrt(q)
if(p<0)return new Y.bs(m,m,m,C.h,p)
if(p>s)return new Y.bs(m,m,m,C.w,p)
o=p/s
l+=a1.a*o
k+=a1.b*o
j+=a1.c*o
i+=a2.a*o
h+=a2.b*o
o=g+a2.c*o
n=e/Math.sqrt(b)
return new Y.bs(new V.o(l,k,j),new V.o(i,h,o),new V.o((i-l)*n+l,(h-k)*n+k,(o-j)*n+j),C.e,p)},
cr:function cr(a){this.b=a},
e6:function e6(){},
fe:function fe(a,b,c){this.y=a
this.a=b
this.b=c},
bs:function bs(a,b,c,d,e){var _=this
_.r=a
_.x=b
_.y=c
_.a=d
_.b=e}},E={
lk:function(a){var t=O.m3(),s=new E.c3(t)
t.c_(s.geR(),s.geU())
s.sc0(0,null)
s.saP(null)
return s},
oB:function(){var t=window.navigator.vendor
t.toString
if(C.b.E(t,"Google"))return C.z
t=window.navigator.userAgent
t.toString
if(C.b.E(t,"Firefox"))return C.n
t=window.navigator.appVersion
t.toString
if(C.b.E(t,"Trident")||C.b.E(t,"Edge"))return C.o
t=window.navigator.appName
t.toString
if(C.b.E(t,"Microsoft"))return C.o
return C.A},
oC:function(){var t=window.navigator.appVersion
t.toString
if(C.b.E(t,"Win"))return C.U
if(C.b.E(t,"Mac"))return C.V
if(C.b.E(t,"Linux"))return C.W
return C.X},
on:function(a,b){var t
Date.now()
t=new E.iw(a,new P.a7(Date.now(),!1),new P.a7(Date.now(),!1),new O.d8([]),new O.d8([]),new O.d8([]),[null])
t.d2(a,b)
return t},
c3:function c3(a){var _=this
_.b=!0
_.x=_.r=_.f=_.d=_.c=null
_.y=a
_.z=null},
c1:function c1(a){this.b=a},
cl:function cl(a){this.b=a},
je:function je(a){this.a=a},
iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.cy=d
_.db=e
_.dx=f
_.dy=g},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
f8:function f8(a,b){var _=this
_.b=a
_.d=null
_.e=b
_.ch=!0
_.cx=!1
_.db=0},
iR:function iR(a){this.a=a}},Z={
aF:function(a){return new Z.aE(a)},
aE:function aE(a){this.a=a}},D={
c4:function(){return new D.cV()},
hF:function hF(){},
cV:function cV(){var _=this
_.c=_.b=_.a=null
_.d=0},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
an:function an(){},
cZ:function cZ(){},
d_:function d_(){},
ai:function ai(a,b,c){this.c=a
this.d=b
this.e=c}},X={cM:function cM(a,b){this.a=a
this.b=b},eq:function eq(a,b){this.a=a
this.b=b},ia:function ia(a){this.d=a},ig:function ig(a,b,c,d){var _=this
_.a=a
_.r=0
_.x=b
_.y=c
_.z=d},cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},il:function il(a,b,c,d,e){var _=this
_.a=a
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},iU:function iU(a,b,c,d,e){var _=this
_.a=a
_.e=b
_.f=c
_.r=d
_.x=e},fk:function fk(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
nU:function(a){var t=V.hs(1),s=$.mk
if(s==null){s=V.eO(0,0,1,1)
$.mk=s}return new X.i3(new V.bG(0,0,0,t),s)},
i3:function i3(a,b){this.a=a
this.r=b
this.x=null},
eK:function eK(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iJ:function iJ(){}},V={
au:function(a){return new V.ao(a)},
lQ:function(a,b,c){var t
if(c<=0)t=a
else t=c>=1?b:a+c*(b-a)
return t},
hs:function(a){var t
if(a<0)t=0
else t=a>1?1:a
return t},
y:function(a,b,c){$.A().toString
return C.b.a8(C.d.aU(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
by:function(a,b,c){var t,s,r,q,p,o,n,m=[]
for(t=a.length,s=c+b+1,r=0,q=0;q<a.length;a.length===t||(0,H.H)(a),++q){p=a[q]
$.A().toString
o=C.b.a8(C.d.aU(Math.abs(p-0)<1e-9?0:p,b),s)
r=Math.max(r,o.length)
m.push(o)}for(t=m.length,n=t-1;n>=0;--n,t=s){if(n>=t)return H.d(m,n)
t=C.b.a8(m[n],r)
s=m.length
if(n>=s)return H.d(m,n)
m[n]=t}return m},
cb:function(){var t=$.me
return t==null?$.me=new V.Y(1,0,0,1):t},
ca:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.Y(t,-s,s,t)},
o6:function(a){var t=a[0],s=a[1],r=a[2],q=a[3]
return new V.Y(t,s,r,q)},
cf:function(){var t=$.mf
return t==null?$.mf=new V.P(1,0,0,0,1,0,0,0,1):t},
cc:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.P(1,0,0,0,t,-s,0,s,t)},
cd:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.P(t,0,-s,0,1,0,s,0,t)},
ce:function(a){var t=Math.cos(a),s=Math.sin(a)
return new V.P(t,-s,0,s,t,0,0,0,1)},
o7:function(a){var t=a[0],s=a[1],r=a[2],q=a[3],p=a[4],o=a[5],n=a[6],m=a[7],l=a[8]
return new V.P(t,s,r,q,p,o,n,m,l)},
aT:function(){var t=$.mi
return t==null?$.mi=V.M(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):t},
M:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ew(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mh:function(a,b,c){return V.M(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mg:function(a,b,c,d){return V.M(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cg:function(a){var t=Math.cos(a),s=Math.sin(a)
return V.M(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)},
ch:function(a){var t=Math.cos(a),s=Math.sin(a)
return V.M(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1)},
ci:function(a){var t=Math.cos(a),s=Math.sin(a)
return V.M(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)},
o8:function(a){var t=V.M(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15])
return t},
ls:function(){var t=$.it
return t==null?$.it=new V.o(0,0,0):t},
eO:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dh(a,b,c,d)},
mn:function(){var t=$.mm
return t==null?$.mm=V.B(0,0,0,0,0,0):t},
B:function(a,b,c,d,e,f){if(d<0){a+=d
d=-d}if(e<0){b+=e
e=-e}if(f<0){c+=f
f=-f}return new V.di(a,b,c,d,e,f)},
b_:function(){var t=$.j2
return t==null?$.j2=new V.p(0,0,0):t},
mw:function(a,b,c){return new V.p(a,b,c)},
ow:function(a){return new V.p(a.a,a.b,a.c)},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(){},
ao:function ao(a){this.a=a},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
P:function P(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ew:function ew(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
R:function R(a,b){this.a=a
this.b=b},
o:function o(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b){this.a=a
this.b=b},
p:function p(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
op:function(a,b){var t,s,r,q,p=document,o=p.body
if(o==null)throw H.c(P.V("The html document body was null."))
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
W.a8(p,"scroll",new V.iE(t),!1)
return new V.iC(q)},
iC:function iC(a){this.a=a
this.b=null},
iE:function iE(a){this.a=a},
iD:function iD(a){this.a=a}},U={
m4:function(a){var t=V.aT(),s=new U.ea(t)
if(!t.j(0,a))s.a=a
return s},
ea:function ea(a){this.a=a
this.b=null},
im:function im(){}},M={ef:function ef(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
pp:function(a){a.q(0,"Benchmark Uint8List timing",new M.k_())
a.q(0,"Benchmark List int timing",new M.k0())
a.q(0,"Benchmark cuboid building",new M.k1())
a.q(0,"Benchmark cuboid building and getting normals",new M.k2())
a.q(0,"Benchmark cuboid building and join seams",new M.k3())
a.q(0,"Benchmark sphere building",new M.k4())},
pq:function(a){var t=new M.k5(),s=new M.k8(t)
a.q(0,"Test of chess location",new M.k9(new M.k7()))
a.q(0,"Test of chess state parse and toString",new M.ka(t))
a.q(0,"Test of chess checked condition determination",new M.kb(new M.k6()))
a.q(0,"Test of chess state movements of pawns",new M.kc(s))
a.q(0,"Test of chess state movements of knights",new M.kd(s))
a.q(0,"Test of chess state movements of bishops",new M.ke(s))
a.q(0,"Test of chess state movements of rooks",new M.kf(s))
a.q(0,"Test of chess state movements of kings",new M.kg(s))
a.q(0,"Test of chess state movements of queens",new M.kh(s))},
pr:function(a){a.q(0,"Collision Between Two AABB Test",new M.ki())
a.q(0,"Collision Between Two Spheres Test",new M.kj())},
ae:function(a,b,c,d,e,f,g,h){var t,s=Y.nb(c,d,e,V.b_(),null,null)
if(s.a===f){$.A().toString
t=!(Math.abs(s.b-g)<1e-9)||!s.y.j(0,h)}else t=!0
if(t){a.i("Unexpected result from twoAABB3 collision:\n"+("   Message:  "+b+"\n")+("   Original: "+c.h(0)+"\n")+("   Target:   "+d.h(0)+"\n")+("   Vector:   "+e.h(0)+"\n")+("   Expected: "+f.h(0)+" "+H.k(g)+" "+h.h(0)+"\n")+("   Result:   "+s.h(0)+"\n"),"error_log")
a.k()}else a.i("Results from twoAABB3 collision:\n"+("   Message:  "+b+"\n")+("   Original: "+c.h(0)+"\n")+("   Target:   "+d.h(0)+"\n")+("   Vector:   "+e.h(0)+"\n")+("   Result:   "+s.h(0)+"\n"),"info_log")},
jT:function(a,b,c,d,e,f,g,h){var t,s=Y.q6(c,d,e,f),r=s.a
if(r===g){$.A().toString
t=!(Math.abs(s.b-h)<1e-9)}else t=!0
if(t){a.i("Unexpected result from twoSphere collision:\n"+("   Message:  "+b+"\n")+("   Sphere A: "+c.h(0)+"\n")+("   Sphere B: "+d.h(0)+"\n")+("   Vector A: "+e.h(0)+"\n")+("   Vector B: "+f.h(0)+"\n")+("   Expected: "+g.h(0)+" "+h+"\n")+("   Result:   "+r.h(0)+" "+H.k(s.b)+"\n")+("   ResultOb: "+s.h(0)+"\n"),"error_log")
a.k()}else a.i("Results from twoSphere collision:\n"+("   Message:  "+b+"\n")+("   Sphere A: "+c.h(0)+"\n")+("   Sphere B: "+d.h(0)+"\n")+("   Vector A: "+e.h(0)+"\n")+("   Vector B: "+f.h(0)+"\n")+("   Result:   "+s.h(0)+"\n"),"info_log")},
ps:function(a){a.q(0,"Test of craft example world getBlock",new M.kk())
a.q(0,"Test of craft example world collide with floor",new M.kl())},
m:function(a,b,c,d,e,f,g,h,a0,a1){var t,s,r,q,p,o,n,m="Testing getBlock(",l="error_log",k="notice_log",j="info_log",i=b.ao(c,d,e)
if(i==null){a.i(m+H.k(c)+", "+H.k(d)+", "+H.k(e)+"): Failed\n",l)
a.k()
a.i("  Block was null\n",k)
a.i("\n",j)
return}t=i.d
s=t===f
if(!s||i.e!==g||i.a!==h||i.b!==a0||i.c!==a1){a.i(m+H.k(c)+", "+H.k(d)+", "+H.k(e)+"): Failed\n",l)
a.k()
a.i("  Expected: "+f+", "+g+", "+h+", "+a0+", "+a1+"\n",k)
r="  Gotten:   "+t+", "
q=i.e
r=r+q+", "
p=i.a
r=r+p+", "
o=i.b
r=r+o+", "
n=i.c
a.i(r+n+"\n",k)
if(!s){a.i("  Chunk X value "+t+" should be "+f+".\n",l)
a.k()}if(q!==g){a.i("  Chunk Z value "+q+" should be "+g+".\n",l)
a.k()}if(p!==h){a.i("  Block X value "+p+" should be "+h+".\n",l)
a.k()}if(o!==a0){a.i("  Block Y value "+o+" should be "+a0+".\n",l)
a.k()}if(n!==a1){a.i("  Block Z value "+n+" should be "+a1+".\n",l)
a.k()}a.i("\n",j)
return}a.i(m+H.k(c)+", "+H.k(d)+", "+H.k(e)+"): Passed\n",j)},
Z:function(a,b,c,d,e,f,g,h,i,j,k,l){var t="error_log",s="info_log",r=new B.hI(b,V.ls(),V.mn(),V.b_(),$.aH(),[],[],[]),q=V.B(-0.25,-1.5,-0.25,0.5,2,0.5),p=new V.o(c,d,e),o=new V.p(f,g,h),n=new V.o(i,j,k)
r.eA(q,p,o)
if(!r.b.j(0,n)||!r.e.j(0,l)){a.i("Testing collide: Failed\n",t)
a.k()
a.i("  Region:   "+q.h(0)+"\n",t)
a.k()
a.i("  Start:    "+p.h(0)+"\n",t)
a.k()
a.i("  Vector:   "+o.h(0)+"\n",t)
a.k()
a.i("  Expected: Collider("+n.h(0)+", "+l.h(0)+")\n",t)
a.k()
a.i("  Gotten:   "+r.h(0)+"\n",t)
a.k()
a.i("\n",s)}else{a.i("Testing collide: Passed\n",s)
a.i("  Region:   "+q.h(0)+"\n",s)
a.i("  Start:    "+p.h(0)+"\n",s)
a.i("  Vector:   "+o.h(0)+"\n",s)
a.i("  Gotten:   "+r.h(0)+"\n",s)
a.i("\n",s)}},
pt:function(a){a.q(0,"Matrix2 Point Transposition Test",new M.km())
a.q(0,"Matrix2 Vector Transposition Test",new M.kn())
a.q(0,"Matrix2 Identity Test",new M.ko())
a.q(0,"Matrix2 Scalar Test",new M.kp())
a.q(0,"Matrix2 Basic Rotate Test",new M.kq())
a.q(0,"Matrix2 Rotate Test",new M.kr())
a.q(0,"Matrix2 Miscellaneous Test",new M.ks())
a.q(0,"Matrix2 Inverse Test",new M.kt())
a.q(0,"Matrix2 Multiplication Test",new M.ku())},
L:function(a,b,c,d){if(b!==c){a.i("Unexpected result from "+d+": "+("\n   Expected: "+c)+("\n   Gotten:   "+H.k(b)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("Checked "+d+" is "+H.k(b)+"\n\n","info_log")},
a5:function(a,b,c,d){var t=c+"\n             "+d,s=b.n("             ")
if(s!==t){a.i("Unexpected result from Matrix2: "+("\n   Expected: "+t)+("\n   Gotten:   "+s+"\n"),"error_log")
a.k()
a.k()}else a.i("Checking: "+b.n("          ")+"\n\n","info_log")},
lJ:function(a,b,c,d){var t,s,r,q="             ",p="error_log",o="Unexpected result from Matrix2*Matrix2.inverse(): \n   Matrix:   ",n=b.a2(0)
M.a5(a,n,c,d)
t=n.a2(0)
if(!t.j(0,b)){a.i("Unexpected result from Matrix2.inverse().inverse(): \n   Expected: "+b.n(q)+"\n   Gotten:   "+t.n(q)+"\n",p)
a.k()
a.k()}s=b.L(0,n)
if(!s.j(0,V.cb())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.cb().n(q)+"\n   Gotten:   "+s.n(q)+"\n",p)
a.k()
a.k()}r=b.L(0,n)
if(!r.j(0,V.cb())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.cb().n(q)+"\n   Gotten:   "+r.n(q)+"\n",p)
a.k()
a.k()}},
G:function(a,b,c,d,e,f){var t="info_log",s=new V.R(e,f),r=new V.R(b.a*c+b.b*d,b.c*c+b.d*d)
a.i("Checking Matrix2.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.R(c,d).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix2.transPnt2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jQ:function(a,b,c,d,e,f){var t="info_log",s=new V.ac(e,f),r=new V.ac(b.a*c+b.b*d,b.c*c+b.d*d)
a.i("Checking Matrix2.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.ac(c,d).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix2.transVec2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
pu:function(a){a.q(0,"Matrix3 Point Transposition Test",new M.kv())
a.q(0,"Matrix3 Vector Transposition Test",new M.kw())
a.q(0,"Matrix3 Identity Test",new M.kx())
a.q(0,"Matrix3 Scalar Test",new M.kC())
a.q(0,"Matrix3 Basic Rotate X Test",new M.kD())
a.q(0,"Matrix3 Rotate X Test",new M.kE())
a.q(0,"Matrix3 Basic Rotate Y Test",new M.kF())
a.q(0,"Matrix3 Rotate Y Test",new M.kG())
a.q(0,"Matrix3 Basic Rotate Z Test",new M.kH())
a.q(0,"Matrix3 Rotate Z Test",new M.kI())
a.q(0,"Matrix3 Miscellaneous Test",new M.kJ())
a.q(0,"Matrix3 Inverse Test",new M.ky())
a.q(0,"Matrix3 Multiplication Test",new M.kz())
a.q(0,"Matrix3 Point2 Transposition Test",new M.kA())
a.q(0,"Matrix3 Vector2 Transposition Test",new M.kB())},
E:function(a,b,c,d,e){var t=c+"\n             "+d+"\n             "+e,s=b.n("             ")
if(s!==t){a.i("Unexpected result from Matrix3: "+("\n   Expected: "+t)+("\n   Gotten:   "+s+"\n"),"error_log")
a.k()
a.k()}else a.i("Checking: "+b.n("          ")+"\n\n","info_log")},
hp:function(a,b,c,d,e){var t,s,r,q="             ",p="error_log",o="Unexpected result from Matrix3*Matrix3.inverse(): \n   Matrix:   ",n=b.a2(0)
M.E(a,n,c,d,e)
t=n.a2(0)
if(!t.j(0,b)){a.i("Unexpected result from Matrix3.inverse().inverse(): \n   Expected: "+b.n(q)+"\n   Gotten:   "+t.n(q)+"\n",p)
a.k()
a.k()}s=b.L(0,n)
if(!s.j(0,V.cf())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.cf().n(q)+"\n   Gotten:   "+s.n(q)+"\n",p)
a.k()
a.k()}r=b.L(0,n)
if(!r.j(0,V.cf())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.cf().n(q)+"\n   Gotten:   "+r.n(q)+"\n",p)
a.k()
a.k()}},
v:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.o(f,g,h),r=new V.o(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.i("Checking Matrix3.transPnt3: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.o(c,d,e).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix3.transPnt3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
bU:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.p(f,g,h),r=new V.p(b.a*c+b.b*d+b.c*e,b.d*c+b.e*d+b.f*e,b.r*c+b.x*d+b.y*e)
a.i("Checking Matrix3.transVec3: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.p(c,d,e).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix3.transVec3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jO:function(a,b,c,d,e,f){var t="info_log",s=new V.R(e,f),r=new V.R(b.a*c+b.b*d+b.c,b.d*c+b.e*d+b.f)
a.i("Checking Matrix3.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.R(c,d).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix3.transPnt2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jR:function(a,b,c,d,e,f){var t="info_log",s=new V.ac(e,f),r=new V.ac(b.a*c+b.b*d,b.d*c+b.e*d)
a.i("Checking Matrix3.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.ac(c,d).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix3.transVec2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
pv:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.kK())
a.q(0,"Matrix4 Vector Transposition Test",new M.kL())
a.q(0,"Matrix4 Identity Test",new M.kM())
a.q(0,"Matrix4 Scalar Test",new M.kT())
a.q(0,"Matrix4 Basic Rotate X Test",new M.kU())
a.q(0,"Matrix4 Rotate X Test",new M.kV())
a.q(0,"Matrix4 Basic Rotate Y Test",new M.kW())
a.q(0,"Matrix4 Rotate Y Test",new M.kX())
a.q(0,"Matrix4 Basic Rotate Z Test",new M.kY())
a.q(0,"Matrix4 Rotate Z Test",new M.kZ())
a.q(0,"Matrix4 Miscellaneous Test",new M.l_())
a.q(0,"Matrix4 Inverse Test",new M.kN())
a.q(0,"Matrix4 Multiplication Test",new M.kO())
a.q(0,"Matrix4 Point3 Transposition Test",new M.kP())
a.q(0,"Matrix4 Vector3 Transposition Test",new M.kQ())
a.q(0,"Matrix4 Point2 Transposition Test",new M.kR())
a.q(0,"Matrix4 Vector2 Transposition Test",new M.kS())},
D:function(a,b,c,d,e,f){var t=c+"\n             "+d+"\n             "+e+"\n             "+f,s=b.n("             ")
if(s!==t){a.i("Unexpected result from Matrix4: "+("\n   Expected: "+t)+("\n   Gotten:   "+s+"\n"),"error_log")
a.k()
a.k()}else a.i("Checking: "+b.n("          ")+"\n\n","info_log")},
hq:function(a,b,c,d,e,f){var t,s,r,q="             ",p="error_log",o="Unexpected result from Matrix4*Matrix4.inverse(): \n   Matrix:   ",n=b.a2(0)
M.D(a,n,c,d,e,f)
t=n.a2(0)
if(!t.j(0,b)){a.i("Unexpected result from Matrix4.inverse().inverse(): \n   Expected: "+b.n(q)+"\n   Gotten:   "+t.n(q)+"\n",p)
a.k()
a.k()}s=b.L(0,n)
if(!s.j(0,V.aT())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.aT().n(q)+"\n   Gotten:   "+s.n(q)+"\n",p)
a.k()
a.k()}r=b.L(0,n)
if(!r.j(0,V.aT())){a.i(o+b.n(q)+"\n   Inverted: "+n.n(q)+"\n   Expected: "+V.aT().n(q)+"\n   Gotten:   "+r.n(q)+"\n",p)
a.k()
a.k()}},
q:function(a,b,c,d,e,f,g,h,i,j){var t="info_log",s=new V.bn(c,d,e,f),r=new V.bn(g,h,i,j),q=b.be(s)
a.i("Checking Matrix4.transPnt4: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+s.h(0)+"\n"),t)
if(!q.j(0,r)){a.i("Unexpected result from Matrix4.transPnt4: "+("\n   Expected: "+r.h(0))+("\n   Gotten:   "+q.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+q.h(0)+"\n\n",t)},
af:function(a,b,c,d,e,f,g,h,i,j){var t="info_log",s=new V.aD(g,h,i,j),r=new V.aD(b.a*c+b.b*d+b.c*e+b.d*f,b.e*c+b.f*d+b.r*e+b.x*f,b.y*c+b.z*d+b.Q*e+b.ch*f,b.cx*c+b.cy*d+b.db*e+b.dx*f)
a.i("Checking Matrix4.transVec4: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.aD(c,d,e,f).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix4.transVec4: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
bT:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.o(f,g,h),r=new V.o(b.a*c+b.b*d+b.c*e+b.d,b.e*c+b.f*d+b.r*e+b.x,b.y*c+b.z*d+b.Q*e+b.ch)
a.i("Checking Matrix4.transPnt3: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.o(c,d,e).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix4.transPnt3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
bV:function(a,b,c,d,e,f,g,h){var t="info_log",s=new V.p(f,g,h),r=new V.p(b.a*c+b.b*d+b.c*e,b.e*c+b.f*d+b.r*e,b.y*c+b.z*d+b.Q*e)
a.i("Checking Matrix4.transVec3: \n   Matrix:   "+b.n("             ")+("\n   Vector:   "+new V.p(c,d,e).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix4.transVec3: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jP:function(a,b,c,d,e,f){var t="info_log",s=new V.R(e,f),r=new V.R(b.a*c+b.b*d+b.d,b.e*c+b.f*d+b.x)
a.i("Checking Matrix4.transPnt2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.R(c,d).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix4.transPnt2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
jS:function(a,b,c,d,e,f){var t="info_log",s=new V.ac(e,f),r=new V.ac(b.a*c+b.b*d,b.e*c+b.f*d)
a.i("Checking Matrix4.transVec2: \n   Matrix:   "+b.n("             ")+("\n   Point:    "+new V.ac(c,d).h(0)+"\n"),t)
if(!r.j(0,s)){a.i("Unexpected result from Matrix4.transVec2: "+("\n   Expected: "+s.h(0))+("\n   Gotten:   "+r.h(0)+"\n\n"),"error_log")
a.k()
a.k()}else a.i("   Result:   "+r.h(0)+"\n\n",t)},
pw:function(a){a.q(0,"Region2 Point Expand Test",new M.l0())},
dN:function(a,b,c,d,e,f,g,h){var t,s,r,q,p=new V.R(c,d),o=b.c,n=b.a
if(c<n){o+=n-c
n=c}else if(c>n+o)o=c-n
t=b.d
s=b.b
if(d<s){t+=s-d
s=d}else if(d>s+t)t=d-s
r=new V.dh(n,s,o,t)
q=V.eO(e,f,g,h)
if(!r.j(0,q)){a.i("Unexpected result from expand:\n"+("   Original: "+b.h(0)+"\n")+("   Point:    "+p.h(0)+"\n")+("   Expected: "+q.h(0)+"\n")+("   Result:   "+r.h(0)+"\n"),"error_log")
a.k()}else a.i(b.h(0)+" + "+p.h(0)+" => "+r.h(0)+"\n","info_log")
return r},
px:function(a){a.q(0,"Region3 Point Expand Test",new M.l1())},
dO:function(a,b,c,d,e,f,g,h,i,j,k){var t,s,r,q,p,o,n=new V.o(c,d,e),m=b.d,l=b.a
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
p=new V.di(l,s,q,m,t,r)
o=V.B(f,g,h,i,j,k)
if(!p.j(0,o)){a.i("Unexpected result from expand:\n"+("   Original: "+b.h(0)+"\n")+("   Point:    "+n.h(0)+"\n")+("   Expected: "+o.h(0)+"\n")+("   Result:   "+p.h(0)+"\n"),"error_log")
a.k()}else a.i("["+b.h(0)+"] + ["+n.h(0)+"] => ["+p.h(0)+"]\n","info_log")
return p},
py:function(a){a.q(0,"Matrix4 Point Transposition Test",new M.l2())},
q2:function(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=null,a1="error_log",a2="mousemove",a3=F.lu()
for(t=0;t<15;++t){s=a3.a
if(s==null)s=a3.a=new F.z(a3,[])
s.eq(a7[t].a)}r=E.lk(a0)
r.sc0(0,a3)
r.saP(U.m4(a5))
q=new P.bP("")
s=[]
p=O.m3()
o=new M.ef(p)
p.c_(o.gdz(),o.gdB())
n=X.nU(a0)
m=new X.eK(1.0471975511965976,0.1)
m.saP(a0)
l=m.c
$.A().toString
if(!(Math.abs(l-1.0471975511965976)<1e-9)){m.c=1.0471975511965976
m.as(new D.ai("fov",l,1.0471975511965976))}l=m.d
$.A().toString
if(!(Math.abs(l-0.1)<1e-9)){m.d=0.1
m.as(new D.ai("near",l,0.1))}l=m.e
$.A().toString
if(!(Math.abs(l-2000)<1e-9)){m.e=2000
m.as(new D.ai("far",l,2000))}l=o.b
if(l!==m){if(l!=null)l.gI().C(0,o.gad())
k=o.b
o.b=m
m.gI().u(0,o.gad())
o.ah(new D.ai("camera",k,o.b))}l=o.c
if(l!==n){if(l!=null)l.gI().C(0,o.gad())
k=o.c
o.c=n
n.gI().u(0,o.gad())
o.ah(new D.ai("target",k,o.c))}o.scK(a0)
o.scK(new O.hO(q,s))
p.u(0,r)
p=o.b
if(p!=null)p.saP(U.m4(a6))
p=document
l=p.createElement("canvas")
l.toString
j=u.z
i=u.s.a(C.K.cU(l,"webgl2",P.o4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],j,j)))
if(i==null)H.a6(P.V("Failed to get the rendering context for WebGL."))
h=E.on(i,l)
H.mQ(i.getParameter(3379))
H.mQ(i.getParameter(34076))
j=[]
g=$.m7
if(g==null){f=E.oB()
E.oC()
g=$.m7=new E.je(f)}e=new X.fk(l,j,g.a===C.n?0.16666666666666666:0.005555555555555556)
j.push(W.a8(p,"contextmenu",e.gdD(),!1))
j.push(W.a8(l,"focus",e.gdJ(),!1))
j.push(W.a8(l,"blur",e.gdu(),!1))
j.push(W.a8(p,"keyup",e.gdN(),!1))
j.push(W.a8(p,"keydown",e.gdL(),!1))
j.push(W.a8(l,"mousedown",e.gdQ(),!1))
j.push(W.a8(l,"mouseup",e.gdU(),!1))
j.push(W.a8(l,a2,e.gdS(),!1))
W.hV(l)
W.hV(l)
j.push(W.a8(l,W.hV(l),e.gdW(),!1))
j.push(W.a8(p,a2,e.gdF(),!1))
j.push(W.a8(p,"mouseup",e.gdH(),!1))
j.push(W.a8(p,"pointerlockchange",e.gdY(),!1))
j.push(W.a8(l,"touchstart",e.ge3(),!1))
j.push(W.a8(l,"touchend",e.ge_(),!1))
j.push(W.a8(l,"touchmove",e.ge1(),!1))
Date.now()
d=new E.f8(l,h)
d.cf()
if(!d.ch){d.ch=!1
d.bj()}p=d.d
if(p!==o){if(p!=null)p.gI().C(0,d.gc3())
d.d=o
o.gI().u(0,d.gc3())
d.bj()}d.cG()
p=q.a
a4.i(p.charCodeAt(0)==0?p:p,"info_log")
if(s.length!==15){for(c="",t=0;t<s.length;++t)c+="\n   "+s[t].a5(1,3)
for(b="",t=0;t<15;++t)b+="\n   "+a7[t].b.a5(1,3)
a4.i("Unexpected number of results from debugging technique: "+("\n   Expected: "+b)+("\n   Gotten:   "+c+"\n\n"),a1)
a4.k()
a4.k()}else for(p=a4.b,t=0;l=s.length,t<l;++t){if(t>=15)return H.d(a7,t)
a=a7[t].b
if(t>=l)return H.d(s,t)
c=s[t]
if(!a.j(0,c)){a4.i("Unexpected result from debugging technique at "+t+": "+("\n   Expected: "+a.h(0))+("\n   Gotten:   "+H.k(c.a)+", "+H.k(c.b)+", "+H.k(c.c)+"\n\n"),a1)
if(!a4.z){a4.z=!0
p.className="test_body body_shown"
a4.ab(0)}}}},
pX:function(){var t,s,r,q,p,o=document,n=o.createElement("div")
n.toString
t=o.createElement("div")
t.toString
s=new M.iP(n,t,new P.i6(C.M),new P.a7(Date.now(),!1),[])
n.children.toString
n.appendChild(t).toString
r=o.createElement("div")
r.className="log_checkboxes"
s.b1(r,"Information","info_log")
s.b1(r,"Notice","notice_log")
s.b1(r,"Warning","warning_log")
s.b1(r,"Error","error_log")
n.appendChild(r).toString
M.pp(s)
M.pz(s)
M.pt(s)
M.pu(s)
M.pv(s)
M.pw(s)
M.px(s)
M.pr(s)
M.py(s)
M.ps(s)
M.pq(s)
t=V.op("Unit-tests",!1)
q=o.createElement("div")
q.appendChild(n).toString
p=o.createElement("div")
o=p.style
o.display="block"
o.clear="both"
q.appendChild(p).toString
t.a.appendChild(q).toString
t.er(["\xab[Back to Tests|../]"])},
pz:function(a){a.q(0,"VertexTypes and Groups",new M.l3())
a.q(0,"VertexTypes from Type Groups 1",new M.l4())
a.q(0,"VertexType from Type Groups 2",new M.l5())},
ak:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h="error_log"
a.i("Checking vertex type "+b.h(0)+":\n","info_log")
t=b.h(0)
if(t!==c){a.i("Error: Got the wrong name for a vertex type:\n",h)
a.k()
a.i("   Gotten:   "+t+"\n",h)
a.k()
a.i("   Expected: "+c+"\n",h)
a.k()}s=b.a
if(s!==d){a.i("Error: Got the wrong value for a vertex type:\n",h)
a.k()
a.i("   Gotten:   "+s+"\n",h)
a.k()
a.i("   Expected: "+d+"\n",h)
a.k()}r=(s&$.b9().a)!==0
q=r?1:0
p=(s&$.b8().a)!==0
if(p)++q
o=(s&$.b7().a)!==0
if(o)++q
n=(s&$.ba().a)!==0
if(n)++q
m=(s&$.bD().a)!==0
if(m)++q
l=(s&$.bB().a)!==0
if(l)++q
k=(s&$.bC().a)!==0
if(k)++q
j=(s&$.bb().a)!==0
if(j)++q
i=(s&$.b6().a)!==0
if(i)++q
if(q!==e){a.i("Error: Got the wrong count for a vertex type:\n",h)
a.k()
a.i("   Gotten:   "+q+"\n",h)
a.k()
a.i("   Expected: "+e+"\n",h)
a.k()}q=r?3:0
if(p)q+=3
if(o)q+=3
if(n)q+=2
if(m)q+=3
if(l)q+=3
if(k)q+=4
if(j)++q
if(i)q+=4
if(q!==f){a.i("Error: Got the wrong size for a vertex type:\n",h)
a.k()
a.i("   Gotten:   "+q+"\n",h)
a.k()
a.i("   Expected: "+f+"\n",h)
a.k()}},
ab:function(a,b,c,d,e,f){var t,s,r,q,p,o="error_log",n="Error: Got the wrong index for a vertex type in a group:\n"
a.i("Checking vertex type "+c.h(0)+" in "+b.h(0)+":\n","info_log")
t=(b.a&c.a)!==0
if(t!==d){a.i("Error: Got the wrong result from has for a vertex type in a group:\n",o)
a.k()
a.i("   Gotten:   "+t+"\n",o)
a.k()
a.i("   Expected: "+d+"\n",o)
a.k()}s=b.eL(0,c)
if(s!==e){a.i(n,o)
a.k()
a.i("   Gotten:   "+s+"\n",o)
a.k()
a.i("   Expected: "+e+"\n",o)
a.k()}r=d?c:$.lh()
q=b.eu(e)
if(!q.j(0,r)){a.i(n,o)
a.k()
a.i("   Gotten:   "+q.h(0)+"\n",o)
a.k()
a.i("   Expected: "+r.h(0)+"\n",o)
a.k()}p=b.eQ(0,c)
if(p!==f){a.i("Error: Got the wrong offset for a vertex type in a group:\n",o)
a.k()
a.i("   Gotten:   "+p+"\n",o)
a.k()
a.i("   Expected: "+f+"\n",o)
a.k()}},
k_:function k_(){},
jZ:function jZ(a){this.a=a},
k0:function k0(){},
jY:function jY(a){this.a=a},
k1:function k1(){},
jX:function jX(a){this.a=a},
k2:function k2(){},
jW:function jW(a){this.a=a},
k3:function k3(){},
jV:function jV(a){this.a=a},
k4:function k4(){},
jU:function jU(a){this.a=a},
k5:function k5(){},
k6:function k6(){},
k8:function k8(a){this.a=a},
k7:function k7(){},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
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
ks:function ks(){},
kt:function kt(){},
ku:function ku(){},
kv:function kv(){},
kw:function kw(){},
kx:function kx(){},
kC:function kC(){},
kD:function kD(){},
kE:function kE(){},
kF:function kF(){},
kG:function kG(){},
kH:function kH(){},
kI:function kI(){},
kJ:function kJ(){},
ky:function ky(){},
kz:function kz(){},
kA:function kA(){},
kB:function kB(){},
kK:function kK(){},
kL:function kL(){},
kM:function kM(){},
kT:function kT(){},
kU:function kU(){},
kV:function kV(){},
kW:function kW(){},
kX:function kX(){},
kY:function kY(){},
kZ:function kZ(){},
l_:function l_(){},
kN:function kN(){},
kO:function kO(){},
kP:function kP(){},
kQ:function kQ(){},
kR:function kR(){},
kS:function kS(){},
l0:function l0(){},
l1:function l1(){},
l2:function l2(){},
aa:function aa(a,b){this.a=a
this.b=b},
dq:function dq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null
_.f=d
_.r=e
_.x=f
_.Q=_.z=_.y=!1},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=0},
iQ:function iQ(a,b){this.a=a
this.b=b},
l3:function l3(){},
l4:function l4(){},
l5:function l5(){}},F={
n2:function(a,b,c){var t=null,s=F.lu()
F.dM(s,t,b,c,a,1,0,0,1)
F.dM(s,t,b,c,a,0,1,0,3)
F.dM(s,t,b,c,a,0,0,1,2)
F.dM(s,t,b,c,a,-1,0,0,0)
F.dM(s,t,b,c,a,0,-1,0,0)
F.dM(s,t,b,c,a,0,0,-1,3)
s.aw()
return s},
jJ:function(a){var t=a.a>0?1:0
if(a.b>0)t+=2
return(a.c>0?t+4:t)*2},
dM:function(a,b,c,d,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.p(h,g+a1,f+a2)
j.a=e
t=a1-a2
s=a2-a3
r=a3-a1
q=j.b=new V.p(t+a3,s+a1,r+a2)
p=new V.p(t-a3,s-a1,r-a2)
j.c=p
o=j.d=new V.p(i-a3,g-a1,f-a2)
if(h>0){j.d=q
j.b=o
h=q
i=o}else{h=o
i=q}for(f=h,h=i,i=e,g=p,n=0;n<a4;++n,m=f,f=i,i=h,h=g,g=m){j.a=h
j.b=g
j.c=f
j.d=i}l=F.jJ(i)
k=F.jJ(h)
a.b9(F.q1(d,a0,new F.jG(j,F.jJ(g),F.jJ(f),k,l,c),b))},
lS:function(){var t=F.n2(8,new F.lf(1,new F.lg()),8)
t.ct(new F.fl(),new F.iq())
return t},
q1:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a<1)throw H.c(P.V("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.V("Must have 1 or more divisions of the height for a surface."))
t=F.lu()
s=[]
for(r=0;r<=b;++r){q=r/b
p=t.a
if(p==null)p=t.a=new F.z(t,[])
if(q<0)o=0
else o=q>1?1:q
n=p.ck(new V.bG(o,0,0,1),new V.R(q,1))
c.$3(n,q,0)
s.push(n.bF(d))}for(r=1;r<=a;++r){m=r/a
for(p=m>1,o=m<0,l=1-m,k=0;k<=b;++k){q=k/b
j=t.a
if(j==null)j=t.a=new F.z(t,[])
if(q<0)i=0
else i=q>1?1:q
if(o)h=0
else h=p?1:m
if(o)g=0
else g=p?1:m
n=j.ck(new V.bG(i,h,g,1),new V.R(q,l))
c.$3(n,q,m)
s.push(n.bF(d))}}t.gN().ep(a+1,b+1,s)
return t},
lu:function(){return new F.iB()},
lA:function(a,b,c,d,e,f,g,h,i){var t,s,r=new F.dr()
h=$.nv()
t=$.b9()
s=h.a
if((s&t.a)!==0)r.f=d
if((s&$.b8().a)!==0)r.r=e
if((s&$.b7().a)!==0)r.x=b
if((s&$.ba().a)!==0)r.y=f
if((s&$.bD().a)!==0)r.z=g
if((s&$.nw().a)!==0)r.Q=c
if((s&$.bb().a)!==0)r.ch=i
if((s&$.b6().a)!==0)r.cx=a
return r},
jG:function jG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
lg:function lg(){},
lf:function lf(a,b){this.a=a
this.b=b},
aR:function aR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(){},
iF:function iF(){},
ib:function ib(){this.b=this.a=null},
ic:function ic(){},
iZ:function iZ(){},
is:function is(){this.a=null},
iB:function iB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eT:function eT(a,b){this.a=a
this.b=b},
dk:function dk(a,b){this.a=a
this.b=b},
co:function co(a,b){this.a=a
this.b=b},
dr:function dr(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j8:function j8(a){this.a=a},
z:function z(a,b){this.a=a
this.b=!1
this.c=b},
aq:function aq(a,b,c){this.b=a
this.c=b
this.d=c},
j3:function j3(a,b){this.a=a
this.b=b},
j4:function j4(a,b){this.a=a
this.b=b},
ar:function ar(a,b){this.b=a
this.c=b},
j6:function j6(){},
fl:function fl(){},
j7:function j7(){},
j5:function j5(){},
iq:function iq(){},
b0:function b0(a){this.b=a}},Q={
mc:function(a){if(a<0||a>=64)return new Q.h(0,0)
return new Q.h(C.c.X(a,8)+1,C.c.bW(a,8)+1)},
lv:function(){return new Q.dn(P.ev(64,$.X().a,!1))},
mr:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=Q.lv(),f=$.aN(),e=$.hv()
f=f.a
e=e.a
t=f|e
s=$.bX().a
r=s&1
g.w(new Q.h(1,1),new Q.t((t|r)>>>0))
q=$.cJ()
q=q.a
p=q|e
g.w(new Q.h(1,2),new Q.t((p|r)>>>0))
o=$.b4()
o=o.a
n=o|e
g.w(new Q.h(1,3),new Q.t((n|r)>>>0))
m=$.bz()
m=m.a
g.w(new Q.h(1,4),new Q.t((m|e|r)>>>0))
l=$.at()
l=l.a
g.w(new Q.h(1,5),new Q.t((l|e|r)>>>0))
k=s&2
g.w(new Q.h(1,6),new Q.t((n|k)>>>0))
g.w(new Q.h(1,7),new Q.t((p|k)>>>0))
g.w(new Q.h(1,8),new Q.t((t|k)>>>0))
t=$.cK()
t=t.a
e=t|e
g.w(new Q.h(2,1),new Q.t((e|r)>>>0))
g.w(new Q.h(2,2),new Q.t((e|k)>>>0))
p=s&3
g.w(new Q.h(2,3),new Q.t((e|p)>>>0))
n=s&4
g.w(new Q.h(2,4),new Q.t((e|n)>>>0))
j=s&5
g.w(new Q.h(2,5),new Q.t((e|j)>>>0))
i=s&6
g.w(new Q.h(2,6),new Q.t((e|i)>>>0))
h=s&7
g.w(new Q.h(2,7),new Q.t((e|h)>>>0))
s&=8
g.w(new Q.h(2,8),new Q.t((e|s)>>>0))
e=$.b5()
e=e.a
t|=e
g.w(new Q.h(7,1),new Q.t((t|r)>>>0))
g.w(new Q.h(7,2),new Q.t((t|k)>>>0))
g.w(new Q.h(7,3),new Q.t((t|p)>>>0))
g.w(new Q.h(7,4),new Q.t((t|n)>>>0))
g.w(new Q.h(7,5),new Q.t((t|j)>>>0))
g.w(new Q.h(7,6),new Q.t((t|i)>>>0))
g.w(new Q.h(7,7),new Q.t((t|h)>>>0))
g.w(new Q.h(7,8),new Q.t((t|s)>>>0))
f|=e
g.w(new Q.h(8,1),new Q.t((f|r)>>>0))
t=q|e
g.w(new Q.h(8,2),new Q.t((t|r)>>>0))
s=o|e
g.w(new Q.h(8,3),new Q.t((s|r)>>>0))
g.w(new Q.h(8,4),new Q.t((m|e|r)>>>0))
g.w(new Q.h(8,5),new Q.t((l|e|r)>>>0))
g.w(new Q.h(8,6),new Q.t((s|k)>>>0))
g.w(new Q.h(8,7),new Q.t((t|k)>>>0))
g.w(new Q.h(8,8),new Q.t((f|k)>>>0))
return g},
T:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=Q.lv(),h=new H.aK(u.q),g=Q.ot(a)
if(g.a!==8||g.b!==8)throw H.c(P.V("Must provide an 8x8 board to parse a state."))
for(t=i.a,s=0;s<8;s=r)for(r=s+1,q=(r-1)*8,p=0;p<8;++p){o=Q.mt(C.b.fj(g.cT(s,p))).a
n=$.X().a
if(o!==n){if((o&$.bX().a)>>>0!==n)h.p(0,(o&$.hw().a)>>>0,!0)
m=q+(p+1-1)
if(m<0||m>=64)return H.d(t,m)
t[m]=o}}for(l=0;l<64;++l){q=t[l]
o=$.X().a
if(q!==o&&(q&$.bX().a)>>>0===o)for(k=1;k<64;++k){o=(q|k)>>>0
n=(o&$.hw().a)>>>0
j=h.l(0,n)
if(!(j==null?!1:j)){h.p(0,n,!0)
t[l]=o
break}}}return i},
lx:function(a,b){return new Q.iI(a,b,P.ev(a*b,"",!1))},
ot:function(a){var t,s,r,q,p,o,n=[]
for(t=0,s=0;s<8;++s){r=a[s].split("|")
q=r.length
if(q>t)t=q
n.push(r)}p=Q.lx(8,t)
for(s=0;s<n.length;++s){r=n[s]
for(o=0;o<r.length;++o)p.aW(s,o,r[o])}return p},
ap:function(a){return new Q.t(a)},
ou:function(a){switch(a){case"W":return $.b5()
case"B":return $.hv()
default:return $.X()}},
ov:function(a){switch(a){case"P":return $.cK()
case"R":return $.aN()
case"H":return $.cJ()
case"B":return $.b4()
case"Q":return $.at()
case"K":return $.bz()
default:return $.X()}},
mt:function(a){var t,s,r,q,p
if(a.length<1)return $.X()
t=$.X()
if(a[0]==="+"){s=$.bA()
r=new Q.t((t.a|s.a)>>>0)
a=C.b.cW(a,1)}else r=t
s=a.length
if(s<2)return t
q=Q.ou(a[0])
p=Q.ov(a[1])
p=(r.a|q.a|p.a)>>>0
t=new Q.t(p)
return s>2?new Q.t((p|P.pS(a[2])&$.bX().a)>>>0):t},
h:function h(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dn:function dn(a){this.a=a
this.c=null},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
t:function t(a){this.a=a}},B={
nH:function(a){switch(a){case 0:return"air"
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
m1:function(a){var t=new B.hH(a,new Uint8Array(12288),[])
t.d1(a)
return t},
mB:function(a,b){var t=new B.j9(a,b,[],[],[])
t.d3(a,b)
return t},
aI:function aI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hG:function hG(){},
hH:function hH(a,b,c){var _=this
_.b=_.a=0
_.c=a
_.d=b
_.e=c},
hI:function hI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
i1:function i1(a,b){this.a=a
this.b=b},
j9:function j9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var w=[C,H,J,P,W,K,L,O,Y,E,Z,D,X,V,U,M,F,Q,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lq.prototype={}
J.a.prototype={
j:function(a,b){return a===b},
gK:function(a){return H.df(a)},
h:function(a){return"Instance of '"+H.iv(a)+"'"}}
J.em.prototype={
h:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$ia9:1}
J.c7.prototype={
j:function(a,b){return null==b},
h:function(a){return"null"},
gK:function(a){return 0},
$ia1:1}
J.bI.prototype={
gK:function(a){return 0},
h:function(a){return String(a)}}
J.eL.prototype={}
J.bS.prototype={}
J.aS.prototype={
h:function(a){var t=a[$.nf()]
if(t==null)return this.d_(a)
return"JavaScript function for "+J.e_(t)},
$icY:1}
J.az.prototype={
u:function(a,b){if(!!a.fixed$length)H.a6(P.C("add"))
a.push(b)},
bN:function(a,b){if(!!a.fixed$length)H.a6(P.C("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eN(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var t
if(!!a.fixed$length)H.a6(P.C("remove"))
for(t=0;t<a.length;++t)if(J.I(a[t],b)){a.splice(t,1)
return!0}return!1},
a3:function(a,b){if(!!a.fixed$length)H.a6(P.C("addAll"))
this.d9(a,b)
return},
d9:function(a,b){var t,s=b.length
if(s===0)return
if(a===b)throw H.c(P.be(a))
for(t=0;t<s;++t)a.push(b[t])},
M:function(a,b){var t,s=a.length
for(t=0;t<s;++t){b.$1(a[t])
if(a.length!==s)throw H.c(P.be(a))}},
B:function(a,b){var t,s,r=a.length,q=P.ev(r,"",!1)
for(t=0;t<a.length;++t){s=H.k(a[t])
if(t>=r)return H.d(q,t)
q[t]=s}return q.join(b)},
eN:function(a){return this.B(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
geI:function(a){if(a.length>0)return a[0]
throw H.c(H.ln())},
gbI:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.ln())},
cm:function(a,b){var t,s=a.length
for(t=0;t<s;++t){if(b.$1(a[t]))return!0
if(a.length!==s)throw H.c(P.be(a))}return!1},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.I(a[t],b))return!0
return!1},
h:function(a){return P.lm(a,"[","]")},
gP:function(a){return new J.aO(a,a.length)},
gK:function(a){return H.df(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.a6(P.C("set length"))
if(b>a.length)H.mP(a).c.a(null)
a.length=b},
l:function(a,b){if(b>=a.length||b<0)throw H.c(H.cD(a,b))
return a[b]},
p:function(a,b,c){if(!!a.immutable$list)H.a6(P.C("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cD(a,b))
a[b]=c},
$ij:1,
$if:1,
$il:1}
J.eo.prototype={}
J.aO.prototype={
gF:function(a){return H.al(this).c.a(this.d)},
A:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.c(H.H(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.c8.prototype={
ay:function(a,b){var t
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gb5(b)
if(this.gb5(a)===t)return 0
if(this.gb5(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb5:function(a){return a===0?1/a<0:a<0},
aK:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.C(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.C(""+a+".round()"))},
aU:function(a,b){var t
if(b>20)throw H.c(P.bo(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gb5(a))return"-"+t
return t},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
bW:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
X:function(a,b){return(a|0)===a?a/b|0:this.ej(a,b)},
ej:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.C("Result of truncating division is "+H.k(t)+": "+H.k(a)+" ~/ "+b))},
b4:function(a,b){var t
if(a>0)t=this.eh(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
eh:function(a,b){return b>31?0:a>>>b},
$ia_:1,
$iag:1}
J.d1.prototype={$iw:1}
J.en.prototype={}
J.bi.prototype={
ax:function(a,b){if(b<0)throw H.c(H.cD(a,b))
if(b>=a.length)H.a6(H.cD(a,b))
return a.charCodeAt(b)},
b_:function(a,b){if(b>=a.length)throw H.c(H.cD(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
c1:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aY:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eN(b,null))
if(b>c)throw H.c(P.eN(b,null))
if(c>a.length)throw H.c(P.eN(c,null))
return a.substring(b,c)},
cW:function(a,b){return this.aY(a,b,null)},
fg:function(a){return a.toLowerCase()},
fj:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.b_(q,0)===133){t=J.o2(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.ax(q,s)===133?J.lp(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
fk:function(a){var t,s,r
if(typeof a.trimRight!="undefined"){t=a.trimRight()
s=t.length
if(s===0)return t
r=s-1
if(this.ax(t,r)===133)s=J.lp(t,r)}else{s=J.lp(a,a.length)
t=a}if(s===t.length)return t
if(s===0)return""
return t.substring(0,s)},
L:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
a8:function(a,b){var t=b-a.length
if(t<=0)return a
return this.L(" ",t)+a},
ba:function(a,b){var t=b-a.length
if(t<=0)return a
return a+this.L(" ",t)},
eC:function(a,b,c){var t=a.length
if(c>t)throw H.c(P.bo(c,0,t,null,null))
return H.na(a,b,c)},
E:function(a,b){return this.eC(a,b,0)},
ay:function(a,b){var t
if(a===b)t=0
else t=a<b?-1:1
return t},
h:function(a){return a},
gK:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm:function(a){return a.length},
$ir:1}
H.er.prototype={
h:function(a){var t="LateInitializationError: "+this.a
return t}}
H.a0.prototype={
gm:function(a){return this.a.length},
l:function(a,b){return C.b.ax(this.a,b)}}
H.j.prototype={}
H.d4.prototype={
gP:function(a){return new H.bL(this,this.gm(this))},
bf:function(a,b){return this.cZ(0,b)}}
H.bL.prototype={
gF:function(a){return H.al(this).c.a(this.d)},
A:function(){var t,s=this,r=s.a,q=J.ht(r),p=q.gm(r)
if(s.b!==p)throw H.c(P.be(r))
t=s.c
if(t>=p){s.d=null
return!1}s.d=q.G(r,t);++s.c
return!0}}
H.c9.prototype={
gP:function(a){return new H.d6(J.bc(this.a),this.b)},
gm:function(a){return J.bZ(this.a)}}
H.cT.prototype={$ij:1}
H.d6.prototype={
A:function(){var t=this,s=t.b
if(s.A()){t.a=t.c.$1(s.gF(s))
return!0}t.a=null
return!1},
gF:function(a){return H.al(this).Q[1].a(this.a)}}
H.d7.prototype={
gm:function(a){return J.bZ(this.a)},
G:function(a,b){return this.b.$1(J.nC(this.a,b))}}
H.ct.prototype={
gP:function(a){return new H.fn(J.bc(this.a),this.b)}}
H.fn.prototype={
A:function(){var t,s
for(t=this.a,s=this.b;t.A();)if(s.$1(t.gF(t)))return!0
return!1},
gF:function(a){var t=this.a
return t.gF(t)}}
H.cW.prototype={}
H.fi.prototype={
p:function(a,b,c){throw H.c(P.C("Cannot modify an unmodifiable list"))}}
H.cs.prototype={}
H.iX.prototype={
a7:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.de.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.ep.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
H.fh.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ir.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.dE.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$idm:1}
H.bF.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.nd(s==null?"unknown":s)+"'"},
$icY:1,
gfm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f5.prototype={}
H.eZ.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.nd(t)+"'"}}
H.c0.prototype={
j:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.c0))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gK:function(a){var t,s=this.c
if(s==null)t=H.df(this.a)
else t=typeof s!=="object"?J.hx(s):H.df(s)
return(t^H.df(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.iv(t)+"'")}}
H.eQ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aK.prototype={
gm:function(a){return this.a},
ga0:function(a){return new H.bj(this)},
gfl:function(a){return H.o5(new H.bj(this),new H.i9(this))},
l:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.bq(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.bq(q,b)
r=s==null?o:s.b
return r}else return p.eM(b)},
eM:function(a){var t,s,r=this.d
if(r==null)return null
t=this.ca(r,J.hx(a)&0x3ffffff)
s=this.cr(t,a)
if(s<0)return null
return t[s].b},
p:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.c5(t==null?n.b=n.bt():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.c5(s==null?n.c=n.bt():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bt()
q=J.hx(b)&0x3ffffff
p=n.ca(r,q)
if(p==null)n.bz(r,q,[n.bu(b,c)])
else{o=n.cr(p,b)
if(o>=0)p[o].b=c
else p.push(n.bu(b,c))}}},
M:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.c(P.be(t))
s=s.c}},
c5:function(a,b,c){var t=this.bq(a,b)
if(t==null)this.bz(a,b,this.bu(b,c))
else t.b=c},
ds:function(){this.r=this.r+1&67108863},
bu:function(a,b){var t,s=this,r=new H.id(a,b)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.d=t
s.f=t.c=r}++s.a
s.ds()
return r},
cr:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
h:function(a){return P.md(this)},
bq:function(a,b){return a[b]},
ca:function(a,b){return a[b]},
bz:function(a,b,c){a[b]=c},
dk:function(a,b){delete a[b]},
bt:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bz(s,t,s)
this.dk(s,t)
return s}}
H.i9.prototype={
$1:function(a){var t=this.a
return H.al(t).Q[1].a(t.l(0,a))},
$S:function(){return H.al(this.a).T("2(1)")}}
H.id.prototype={}
H.bj.prototype={
gm:function(a){return this.a.a},
gP:function(a){var t=this.a,s=new H.et(t,t.r)
s.c=t.e
return s}}
H.et.prototype={
gF:function(a){return H.al(this).c.a(this.d)},
A:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.c(P.be(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
H.la.prototype={
$1:function(a){return this.a(a)},
$S:44}
H.lb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:41}
H.lc.prototype={
$1:function(a){return this.a(a)},
$S:36}
H.i8.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.da.prototype={}
H.ck.prototype={
gm:function(a){return a.length},
$ix:1}
H.bM.prototype={
l:function(a,b){H.b1(b,a,a.length)
return a[b]},
p:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
$ij:1,
$if:1,
$il:1}
H.d9.prototype={
p:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
$ij:1,
$if:1,
$il:1}
H.eA.prototype={
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eB.prototype={
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eC.prototype={
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eD.prototype={
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eE.prototype={
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.db.prototype={
gm:function(a){return a.length},
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eF.prototype={
gm:function(a){return a.length},
l:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.dw.prototype={}
H.dx.prototype={}
H.dy.prototype={}
H.dz.prototype={}
H.aA.prototype={
T:function(a){return H.hd(v.typeUniverse,this,a)},
aZ:function(a){return H.oV(v.typeUniverse,this,a)}}
H.fC.prototype={}
H.fy.prototype={
h:function(a){return this.a}}
H.dI.prototype={}
P.jb.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:18}
P.ja.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:34}
P.jc.prototype={
$0:function(){this.a.$0()},
$S:7}
P.jd.prototype={
$0:function(){this.a.$0()},
$S:7}
P.jB.prototype={
d7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.dT(new P.jC(this,b),0),a)
else throw H.c(P.C("`setTimeout()` not found."))}}
P.jC.prototype={
$0:function(){this.b.$0()},
$S:1}
P.cz.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.k(this.a)+")"}}
P.cA.prototype={
gF:function(a){var t=this.c
if(t==null)return this.b
return t.gF(t)},
A:function(){var t,s,r,q,p,o=this
for(;!0;){t=o.c
if(t!=null)if(t.A())return!0
else o.c=null
s=function(a,b,c){var n,m=b
while(true)try{return a(m,n)}catch(l){n=l
m=c}}(o.a,0,1)
if(s instanceof P.cz){r=s.b
if(r===2){q=o.d
if(q==null||q.length===0){o.b=null
return!1}if(0>=q.length)return H.d(q,-1)
o.a=q.pop()
continue}else{t=s.a
if(r===3)throw t
else{p=J.bc(t)
if(p instanceof P.cA){t=o.d
if(t==null)t=o.d=[]
t.push(o.a)
o.a=p.a
continue}else{o.c=p
continue}}}}else{o.b=s
return!0}}return!1}}
P.dF.prototype={
gP:function(a){return new P.cA(this.a())}}
P.e3.prototype={
h:function(a){return H.k(this.a)},
$iJ:1,
gaX:function(){return this.b}}
P.i4.prototype={
$0:function(){var t,s,r,q,p
try{this.a.dg(this.b.$0())}catch(r){t=H.am(r)
s=H.b2(r)
q=t
p=s
if(p==null)p=P.lZ(q)
this.a.b0(q,p)}},
$S:1}
P.cw.prototype={
eO:function(a){if((this.c&15)!==6)return!0
return this.b.b.bQ(this.d,a.a)},
eK:function(a){var t=this.e,s=a.a,r=this.b.b
if(u.Q.b(t))return r.fa(t,s,a.b)
else return r.bQ(t,s)}}
P.aG.prototype={
cM:function(a,b,c){var t,s,r=$.W
if(r!==C.f)b=b!=null?P.mV(b,r):b
t=new P.aG(r,c.T("aG<0>"))
s=b==null?1:3
this.bk(new P.cw(t,s,a,b,this.$ti.T("@<1>").aZ(c).T("cw<1,2>")))
return t},
bS:function(a,b){return this.cM(a,null,b)},
bk:function(a){var t,s=this,r=s.a
if(r<=1){a.a=s.c
s.c=a}else{if(r===2){r=s.c
t=r.a
if(t<4){r.bk(a)
return}s.a=t
s.c=r.c}P.jN(null,null,s.b,new P.ji(s,a))}},
ce:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=n.c
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){t=n.c
o=t.a
if(o<4){t.ce(a)
return}n.a=o
n.c=t.c}m.a=n.b3(a)
P.jN(null,null,n.b,new P.jm(m,n))}},
b2:function(){var t=this.c
this.c=null
return this.b3(t)},
b3:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
de:function(a){var t,s,r,q=this
q.a=1
try{a.cM(new P.jj(q),new P.jk(q),u.P)}catch(r){t=H.am(r)
s=H.b2(r)
P.q_(new P.jl(q,t,s))}},
dg:function(a){var t,s=this,r=s.$ti
if(r.T("c5<1>").b(a))if(r.b(a))P.mD(a,s)
else s.de(a)
else{t=s.b2()
s.a=4
s.c=a
P.cx(s,t)}},
dh:function(a){var t=this,s=t.b2()
t.a=4
t.c=a
P.cx(t,s)},
b0:function(a,b){var t=this,s=t.b2(),r=P.hB(a,b)
t.a=8
t.c=r
P.cx(t,s)},
$ic5:1}
P.ji.prototype={
$0:function(){P.cx(this.a,this.b)},
$S:1}
P.jm.prototype={
$0:function(){P.cx(this.b,this.a.a)},
$S:1}
P.jj.prototype={
$1:function(a){var t,s,r,q=this.a
q.a=0
try{q.dh(q.$ti.c.a(a))}catch(r){t=H.am(r)
s=H.b2(r)
q.b0(t,s)}},
$S:18}
P.jk.prototype={
$2:function(a,b){this.a.b0(a,b)},
$S:32}
P.jl.prototype={
$0:function(){this.a.b0(this.b,this.c)},
$S:1}
P.jp.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.f8(r.d)}catch(q){t=H.am(q)
s=H.b2(q)
r=n.c&&n.b.a.c.a===t
p=n.a
if(r)p.c=n.b.a.c
else p.c=P.hB(t,s)
p.b=!0
return}if(m instanceof P.aG&&m.a>=4){if(m.a===8){r=n.a
r.c=m.c
r.b=!0}return}if(u.c.b(m)){o=n.b.a
r=n.a
r.c=m.bS(new P.jq(o),u.z)
r.b=!1}},
$S:1}
P.jq.prototype={
$1:function(a){return this.a},
$S:31}
P.jo.prototype={
$0:function(){var t,s,r,q,p
try{r=this.a
q=r.a
r.c=q.b.b.bQ(q.d,this.b)}catch(p){t=H.am(p)
s=H.b2(p)
r=this.a
r.c=P.hB(t,s)
r.b=!0}},
$S:1}
P.jn.prototype={
$0:function(){var t,s,r,q,p,o,n=this
try{t=n.a.a.c
q=n.b
if(q.a.eO(t)&&q.a.e!=null){q.c=q.a.eK(t)
q.b=!1}}catch(p){s=H.am(p)
r=H.b2(p)
q=n.a.a.c
o=n.b
if(q.a===s)o.c=q
else o.c=P.hB(s,r)
o.b=!0}},
$S:1}
P.fo.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.jF.prototype={}
P.jM.prototype={
$0:function(){var t=H.c(this.a)
t.stack=this.b.h(0)
throw t},
$S:1}
P.ju.prototype={
fc:function(a){var t,s,r,q=null
try{if(C.f===$.W){a.$0()
return}P.mW(q,q,this,a)}catch(r){t=H.am(r)
s=H.b2(r)
P.jL(q,q,this,t,s)}},
fe:function(a,b){var t,s,r,q=null
try{if(C.f===$.W){a.$1(b)
return}P.mX(q,q,this,a,b)}catch(r){t=H.am(r)
s=H.b2(r)
P.jL(q,q,this,t,s)}},
ff:function(a,b){return this.fe(a,b,u.z)},
bC:function(a){return new P.jv(this,a)},
ex:function(a,b){return new P.jw(this,a,b)},
f9:function(a){if($.W===C.f)return a.$0()
return P.mW(null,null,this,a)},
f8:function(a){return this.f9(a,u.z)},
fd:function(a,b){if($.W===C.f)return a.$1(b)
return P.mX(null,null,this,a,b)},
bQ:function(a,b){return this.fd(a,b,u.z,u.z)},
fb:function(a,b,c){if($.W===C.f)return a.$2(b,c)
return P.ph(null,null,this,a,b,c)},
fa:function(a,b,c){return this.fb(a,b,c,u.z,u.z,u.z)}}
P.jv.prototype={
$0:function(){return this.a.fc(this.b)},
$S:1}
P.jw.prototype={
$1:function(a){return this.a.ff(this.b,a)},
$S:function(){return this.c.T("~(0)")}}
P.dt.prototype={
gP:function(a){var t=new P.fJ(this,this.r)
t.c=this.e
return t},
gm:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.di(b)
return s}},
di:function(a){var t=this.d
if(t==null)return!1
return this.bp(t[this.bm(a)],a)>=0},
u:function(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.c6(t==null?r.b=P.lC():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.c6(s==null?r.c=P.lC():s,b)}else return r.d8(0,b)},
d8:function(a,b){var t,s,r=this,q=r.d
if(q==null)q=r.d=P.lC()
t=r.bm(b)
s=q[t]
if(s==null)q[t]=[r.bl(b)]
else{if(r.bp(s,b)>=0)return!1
s.push(r.bl(b))}return!0},
C:function(a,b){if((b&1073741823)===b)return this.e6(this.c,b)
else return this.e5(0,b)},
e5:function(a,b){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bm(b)
s=o[t]
r=p.bp(s,b)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.ci(q)
return!0},
c6:function(a,b){if(a[b]!=null)return!1
a[b]=this.bl(b)
return!0},
e6:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.ci(t)
delete a[b]
return!0},
c7:function(){this.r=this.r+1&1073741823},
bl:function(a){var t,s=this,r=new P.jt(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.c7()
return r},
ci:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.c7()},
bm:function(a){return J.hx(a)&1073741823},
bp:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1}}
P.jt.prototype={}
P.fJ.prototype={
gF:function(a){return H.al(this).c.a(this.d)},
A:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.c(P.be(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
P.d0.prototype={}
P.d3.prototype={$ij:1,$if:1,$il:1}
P.K.prototype={
gP:function(a){return new H.bL(a,this.gm(a))},
G:function(a,b){return this.l(a,b)},
M:function(a,b){var t,s=this.gm(a)
for(t=0;t<s;++t){b.$1(this.l(a,t))
if(s!==this.gm(a))throw H.c(P.be(a))}},
h:function(a){return P.lm(a,"[","]")}}
P.d5.prototype={}
P.ih.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.k(a)
s.a=t+": "
s.a+=H.k(b)},
$S:30}
P.a3.prototype={
M:function(a,b){var t,s,r
for(t=J.bc(this.ga0(a)),s=H.cE(a).T("a3.V");t.A();){r=t.gF(t)
b.$2(r,s.a(this.l(a,r)))}},
gm:function(a){return J.bZ(this.ga0(a))},
h:function(a){return P.md(a)},
$ia2:1}
P.eS.prototype={
a3:function(a,b){var t
for(t=J.bc(b);t.A();)this.u(0,t.gF(t))},
h:function(a){return P.lm(this,"{","}")}}
P.dA.prototype={$ij:1,$if:1}
P.du.prototype={}
P.dL.prototype={}
P.e8.prototype={}
P.eb.prototype={}
P.hW.prototype={}
P.i7.prototype={
h:function(a){return this.a}}
P.i6.prototype={
dj:function(a,b,c){var t,s,r,q,p,o,n,m=null
for(t=a.length,s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=t)return H.d(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.bP("")
if(p>b)o.a+=C.b.aY(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=C.b.aY(a,b,c)
t=o.a
return t.charCodeAt(0)==0?t:t}}
P.j0.prototype={}
P.j1.prototype={
eD:function(a){var t,s,r,q=P.lt(0,null,a.length),p=q-0
if(p===0)return new Uint8Array(0)
t=p*3
s=new Uint8Array(t)
r=new P.jD(s)
if(r.dm(a,0,q)!==q){C.b.ax(a,q-1)
r.bB()}return new Uint8Array(s.subarray(0,H.p_(0,r.b,t)))}}
P.jD.prototype={
bB:function(){var t=this,s=t.c,r=t.b,q=t.b=r+1,p=s.length
if(r>=p)return H.d(s,r)
s[r]=239
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=191
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=189},
em:function(a,b){var t,s,r,q,p,o=this
if((b&64512)===56320){t=65536+((a&1023)<<10)|b&1023
s=o.c
r=o.b
q=o.b=r+1
p=s.length
if(r>=p)return H.d(s,r)
s[r]=t>>>18|240
r=o.b=q+1
if(q>=p)return H.d(s,q)
s[q]=t>>>12&63|128
q=o.b=r+1
if(r>=p)return H.d(s,r)
s[r]=t>>>6&63|128
o.b=q+1
if(q>=p)return H.d(s,q)
s[q]=t&63|128
return!0}else{o.bB()
return!1}},
dm:function(a,b,c){var t,s,r,q,p,o,n,m=this
if(b!==c&&(C.b.ax(a,c-1)&64512)===55296)--c
for(t=m.c,s=t.length,r=b;r<c;++r){q=C.b.b_(a,r)
if(q<=127){p=m.b
if(p>=s)break
m.b=p+1
t[p]=q}else{p=q&64512
if(p===55296){if(m.b+4>s)break
o=r+1
if(m.em(q,C.b.b_(a,o)))r=o}else if(p===56320){if(m.b+3>s)break
m.bB()}else if(q<=2047){p=m.b
n=p+1
if(n>=s)break
m.b=n
if(p>=s)return H.d(t,p)
t[p]=q>>>6|192
m.b=n+1
t[n]=q&63|128}else{p=m.b
if(p+2>=s)break
n=m.b=p+1
if(p>=s)return H.d(t,p)
t[p]=q>>>12|224
p=m.b=n+1
if(n>=s)return H.d(t,n)
t[n]=q>>>6&63|128
m.b=p+1
if(p>=s)return H.d(t,p)
t[p]=q&63|128}}}return r}}
P.a7.prototype={
j:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
ay:function(a,b){return C.c.ay(this.a,b.a)},
gK:function(a){var t=this.a
return(t^C.c.b4(t,30))&1073741823},
h:function(a){var t=this,s=P.nQ(H.og(t)),r=P.ed(H.oe(t)),q=P.ed(H.oa(t)),p=P.ed(H.ob(t)),o=P.ed(H.od(t)),n=P.ed(H.of(t)),m=P.nR(H.oc(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.c2.prototype={
j:function(a,b){if(b==null)return!1
return b instanceof P.c2&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
ay:function(a,b){return C.c.ay(this.a,b.a)},
h:function(a){var t,s,r,q=new P.hT(),p=this.a
if(p<0)return"-"+new P.c2(0-p).h(0)
t=q.$1(C.c.X(p,6e7)%60)
s=q.$1(C.c.X(p,1e6)%60)
r=new P.hS().$1(p%1e6)
return""+C.c.X(p,36e8)+":"+t+":"+s+"."+r}}
P.hS.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.hT.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.J.prototype={
gaX:function(){return H.b2(this.$thrownJsError)}}
P.e2.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.hY(t)
return"Assertion failed"}}
P.ff.prototype={}
P.eG.prototype={
h:function(a){return"Throw of null."}}
P.ax.prototype={
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gbo()+p+n
if(!r.a)return m
t=r.gbn()
s=P.hY(r.b)
return m+t+": "+s}}
P.dg.prototype={
gbo:function(){return"RangeError"},
gbn:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.k(r):""
else if(r==null)t=": Not greater than or equal to "+H.k(s)
else if(r>s)t=": Not in inclusive range "+H.k(s)+".."+H.k(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.k(s)
return t}}
P.ek.prototype={
gbo:function(){return"RangeError"},
gbn:function(){if(this.b<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gm:function(a){return this.f}}
P.fj.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.fg.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.cp.prototype={
h:function(a){return"Bad state: "+this.a}}
P.e9.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hY(t)+"."}}
P.eJ.prototype={
h:function(a){return"Out of Memory"},
gaX:function(){return null},
$iJ:1}
P.dl.prototype={
h:function(a){return"Stack Overflow"},
gaX:function(){return null},
$iJ:1}
P.ec.prototype={
h:function(a){var t="Reading static variable '"+this.a+"' during its initialization"
return t}}
P.jg.prototype={
h:function(a){return"Exception: "+this.a}}
P.i2.prototype={
h:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(typeof r=="string"){if(r.length>78)r=C.b.aY(r,0,75)+"..."
return s+"\n"+r}else return s}}
P.f.prototype={
bf:function(a,b){return new H.ct(this,b)},
gm:function(a){var t,s=this.gP(this)
for(t=0;s.A();)++t
return t},
gap:function(a){var t,s=this.gP(this)
if(!s.A())throw H.c(H.ln())
t=s.gF(s)
if(s.A())throw H.c(H.nY())
return t},
G:function(a,b){var t,s,r
P.ol(b,"index")
for(t=this.gP(this),s=0;t.A();){r=t.gF(t)
if(b===s)return r;++s}throw H.c(P.S(b,this,"index",null,s))},
h:function(a){return P.nX(this,"(",")")}}
P.el.prototype={}
P.a1.prototype={
gK:function(a){return P.F.prototype.gK.call(C.O,this)},
h:function(a){return"null"}}
P.F.prototype={constructor:P.F,$iF:1,
j:function(a,b){return this===b},
gK:function(a){return H.df(this)},
h:function(a){return"Instance of '"+H.iv(this)+"'"},
toString:function(){return this.h(this)}}
P.h2.prototype={
h:function(a){return""},
$idm:1}
P.bP.prototype={
gm:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.n.prototype={}
W.hy.prototype={
gm:function(a){return a.length}}
W.e0.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.e1.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.c_.prototype={$ic_:1}
W.e7.prototype={}
W.bE.prototype={$ibE:1}
W.cN.prototype={
cU:function(a,b,c){var t=a.getContext(b,P.n1(c))
return t}}
W.aJ.prototype={
gm:function(a){return a.length}}
W.hJ.prototype={
gm:function(a){return a.length}}
W.N.prototype={$iN:1}
W.cP.prototype={
gm:function(a){var t=a.length
t.toString
return t}}
W.hK.prototype={}
W.ay.prototype={}
W.aQ.prototype={}
W.hL.prototype={
gm:function(a){return a.length}}
W.hM.prototype={
gm:function(a){return a.length}}
W.hN.prototype={
gm:function(a){return a.length}}
W.cQ.prototype={}
W.hP.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.cR.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.cS.prototype={
h:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.k(s)+", "
t=a.top
t.toString
return s+H.k(t)+") "+H.k(this.gaD(a))+" x "+H.k(this.gaz(a))},
j:function(a,b){var t,s
if(b==null)return!1
if(u.I.b(b)){t=a.left
t.toString
s=J.hu(b)
if(t===s.gb7(b)){t=a.top
t.toString
t=t===s.gcQ(b)&&this.gaD(a)===s.gaD(b)&&this.gaz(a)===s.gaz(b)}else t=!1}else t=!1
return t},
gK:function(a){var t,s=a.left
s.toString
s=C.d.gK(s)
t=a.top
t.toString
return W.mF(s,C.d.gK(t),C.d.gK(this.gaD(a)),C.d.gK(this.gaz(a)))},
gcb:function(a){return a.height},
gaz:function(a){var t=this.gcb(a)
t.toString
return t},
gb7:function(a){var t=a.left
t.toString
return t},
gcQ:function(a){var t=a.top
t.toString
return t},
gcj:function(a){return a.width},
gaD:function(a){var t=this.gcj(a)
t.toString
return t},
$ibO:1}
W.ee.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.hQ.prototype={
gm:function(a){var t=a.length
t.toString
return t}}
W.jh.prototype={
gm:function(a){return this.a.length},
l:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.d(t,b)
return this.$ti.c.a(t[b])},
p:function(a,b,c){throw H.c(P.C("Cannot modify list"))}}
W.O.prototype={
gev:function(a){return new W.fx(a)},
h:function(a){var t=a.localName
t.toString
return t},
a4:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.m6
if(t==null){t=[]
s=new W.dd(t)
t.push(W.mE(null))
t.push(W.mJ())
$.m6=s
d=s}else d=t
t=$.m5
if(t==null){t=new W.he(d)
$.m5=t
c=t}else{t.a=d
c=t}}if($.bf==null){t=document
s=t.implementation.createHTMLDocument("")
s.toString
$.bf=s
s=s.createRange()
s.toString
$.lj=s
s=$.bf.createElement("base")
u.y.a(s)
t=t.baseURI
t.toString
s.href=t
$.bf.head.appendChild(s).toString}t=$.bf
if(t.body==null){s=t.createElement("body")
t.body=u.t.a(s)}t=$.bf
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
s=a.tagName
s.toString
r=t.createElement(s)
$.bf.body.appendChild(r).toString}t="createContextualFragment" in window.Range.prototype
t.toString
if(t){t=a.tagName
t.toString
t=!C.a.E(C.R,t)}else t=!1
if(t){$.lj.selectNodeContents(r)
t=$.lj
t=t.createContextualFragment(b)
t.toString
q=t}else{r.innerHTML=b
t=$.bf.createDocumentFragment()
t.toString
for(;s=r.firstChild,s!=null;)t.appendChild(s).toString
q=t}if(r!==$.bf.body)J.lX(r)
c.bZ(q)
document.adoptNode(q).toString
return q},
eE:function(a,b,c){return this.a4(a,b,c,null)},
cV:function(a,b){var t
a.textContent=null
t=a.appendChild(this.a4(a,b,null,null))
t.toString},
gcJ:function(a){var t=a.tagName
t.toString
return t},
$iO:1}
W.hU.prototype={
$1:function(a){return u.h.b(a)},
$S:28}
W.e.prototype={$ie:1}
W.b.prototype={
eo:function(a,b,c,d){if(c!=null)this.da(a,b,c,!1)},
da:function(a,b,c,d){return a.addEventListener(b,H.dT(c,1),!1)},
$ib:1}
W.bg.prototype={$ibg:1}
W.eg.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.eh.prototype={
gm:function(a){return a.length}}
W.ei.prototype={
gm:function(a){return a.length}}
W.bh.prototype={$ibh:1}
W.i5.prototype={
gm:function(a){var t=a.length
t.toString
return t}}
W.bH.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.c6.prototype={$ic6:1}
W.bJ.prototype={$ibJ:1}
W.ie.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.ii.prototype={
gm:function(a){return a.length}}
W.ex.prototype={
l:function(a,b){return P.bx(a.get(b))},
M:function(a,b){var t,s,r=a.entries()
for(;!0;){t=r.next()
s=t.done
s.toString
if(s)return
s=t.value[0]
s.toString
b.$2(s,P.bx(t.value[1]))}},
ga0:function(a){var t=[]
this.M(a,new W.ij(t))
return t},
gm:function(a){var t=a.size
t.toString
return t},
$ia2:1}
W.ij.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.ey.prototype={
l:function(a,b){return P.bx(a.get(b))},
M:function(a,b){var t,s,r=a.entries()
for(;!0;){t=r.next()
s=t.done
s.toString
if(s)return
s=t.value[0]
s.toString
b.$2(s,P.bx(t.value[1]))}},
ga0:function(a){var t=[]
this.M(a,new W.ik(t))
return t},
gm:function(a){var t=a.size
t.toString
return t},
$ia2:1}
W.ik.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.bk.prototype={$ibk:1}
W.ez.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.av.prototype={$iav:1}
W.aj.prototype={
gap:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.c(P.lw("No elements"))
if(s>1)throw H.c(P.lw("More than one element"))
t=t.firstChild
t.toString
return t},
a3:function(a,b){var t,s,r,q=b.a,p=this.a
if(q!==p)for(t=q.childNodes.length,s=0;s<t;++s){r=q.firstChild
r.toString
p.appendChild(r).toString}return},
p:function(a,b,c){var t=this.a,s=t.childNodes
if(b<0||b>=s.length)return H.d(s,b)
t.replaceChild(c,s[b]).toString},
gP:function(a){var t=this.a.childNodes
return new W.cX(t,t.length)},
gm:function(a){return this.a.childNodes.length},
l:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.d(t,b)
return t[b]}}
W.u.prototype={
f3:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a).toString},
h:function(a){var t=a.nodeValue
return t==null?this.cY(a):t},
$iu:1}
W.dc.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.bm.prototype={
gm:function(a){return a.length},
$ibm:1}
W.eM.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.eP.prototype={
l:function(a,b){return P.bx(a.get(b))},
M:function(a,b){var t,s,r=a.entries()
for(;!0;){t=r.next()
s=t.done
s.toString
if(s)return
s=t.value[0]
s.toString
b.$2(s,P.bx(t.value[1]))}},
ga0:function(a){var t=[]
this.M(a,new W.iA(t))
return t},
gm:function(a){var t=a.size
t.toString
return t},
$ia2:1}
W.iA.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eR.prototype={
gm:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.eV.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.bp.prototype={$ibp:1}
W.eW.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.bq.prototype={
gm:function(a){return a.length},
$ibq:1}
W.f_.prototype={
l:function(a,b){return a.getItem(H.jH(b))},
M:function(a,b){var t,s,r
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
r=a.getItem(s)
r.toString
b.$2(s,r)}},
ga0:function(a){var t=[]
this.M(a,new W.iH(t))
return t},
gm:function(a){var t=a.length
t.toString
return t},
$ia2:1}
W.iH.prototype={
$2:function(a,b){return this.a.push(a)},
$S:27}
W.aL.prototype={$iaL:1}
W.dp.prototype={
a4:function(a,b,c,d){var t,s="createContextualFragment" in window.Range.prototype
s.toString
if(s)return this.bh(a,b,c,d)
t=W.nS("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
new W.aj(s).a3(0,new W.aj(t))
return s}}
W.f3.prototype={
a4:function(a,b,c,d){var t,s="createContextualFragment" in window.Range.prototype
s.toString
if(s)return this.bh(a,b,c,d)
s=document
t=s.createDocumentFragment()
t.toString
s=s.createElement("table")
s.toString
s=new W.aj(C.v.a4(s,b,c,d))
s=new W.aj(s.gap(s))
new W.aj(t).a3(0,new W.aj(s.gap(s)))
return t}}
W.f4.prototype={
a4:function(a,b,c,d){var t,s="createContextualFragment" in window.Range.prototype
s.toString
if(s)return this.bh(a,b,c,d)
s=document
t=s.createDocumentFragment()
t.toString
s=s.createElement("table")
s.toString
s=new W.aj(C.v.a4(s,b,c,d))
new W.aj(t).a3(0,new W.aj(s.gap(s)))
return t}}
W.cq.prototype={$icq:1}
W.aX.prototype={$iaX:1}
W.aC.prototype={$iaC:1}
W.f6.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.f7.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.iS.prototype={
gm:function(a){var t=a.length
t.toString
return t}}
W.br.prototype={$ibr:1}
W.bQ.prototype={$ibQ:1}
W.fc.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.iV.prototype={
gm:function(a){return a.length}}
W.aZ.prototype={}
W.j_.prototype={
h:function(a){var t=String(a)
t.toString
return t}}
W.fm.prototype={
gm:function(a){return a.length}}
W.bt.prototype={
geG:function(a){var t=a.deltaY
if(t!=null)return t
throw H.c(P.C("deltaY is not supported"))},
geF:function(a){var t=a.deltaX
if(t!=null)return t
throw H.c(P.C("deltaX is not supported"))},
$ibt:1}
W.cu.prototype={
e9:function(a,b){var t=a.requestAnimationFrame(H.dT(b,1))
t.toString
return t},
dl:function(a){var t=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
t.toString
if(t)return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cv.prototype={$icv:1}
W.fr.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.ds.prototype={
h:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.k(s)+", "
t=a.top
t.toString
t=s+H.k(t)+") "
s=a.width
s.toString
s=t+H.k(s)+" x "
t=a.height
t.toString
return s+H.k(t)},
j:function(a,b){var t,s
if(b==null)return!1
if(u.I.b(b)){t=a.left
t.toString
s=J.hu(b)
if(t===s.gb7(b)){t=a.top
t.toString
if(t===s.gcQ(b)){t=a.width
t.toString
if(t===s.gaD(b)){t=a.height
t.toString
s=t===s.gaz(b)
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gK:function(a){var t,s,r,q=a.left
q.toString
q=C.d.gK(q)
t=a.top
t.toString
t=C.d.gK(t)
s=a.width
s.toString
s=C.d.gK(s)
r=a.height
r.toString
return W.mF(q,t,s,C.d.gK(r))},
gcb:function(a){return a.height},
gaz:function(a){var t=a.height
t.toString
return t},
gcj:function(a){return a.width},
gaD:function(a){var t=a.width
t.toString
return t}}
W.fD.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
return a[b]},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.dv.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.fX.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.h3.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=b>>>0!==b||b>=a.length
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a[b]
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ix:1,
$if:1,
$il:1}
W.fp.prototype={
M:function(a,b){var t,s,r,q,p
for(t=this.ga0(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.H)(t),++q){p=t[q]
b.$2(p,H.jH(r.getAttribute(p)))}},
ga0:function(a){var t,s,r,q,p,o=this.a.attributes,n=[]
for(t=o.length,s=u.x,r=0;r<t;++r){if(r>=o.length)return H.d(o,r)
q=s.a(o[r])
if(q.namespaceURI==null){p=q.name
p.toString
n.push(p)}}return n}}
W.fx.prototype={
l:function(a,b){return this.a.getAttribute(H.jH(b))},
gm:function(a){return this.ga0(this).length}}
W.ll.prototype={}
W.fz.prototype={}
W.jf.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.lB.prototype={}
W.cy.prototype={
d4:function(a){var t
if($.fE.a===0){for(t=0;t<262;++t)$.fE.p(0,C.Q[t],W.pM())
for(t=0;t<12;++t)$.fE.p(0,C.k[t],W.pN())}},
au:function(a){return $.nx().E(0,W.cU(a))},
ae:function(a,b,c){var t=$.fE.l(0,W.cU(a)+"::"+b)
if(t==null)t=$.fE.l(0,"*::"+b)
if(t==null)return!1
return t.$4(a,b,c,this)},
$iaU:1}
W.Q.prototype={
gP:function(a){return new W.cX(a,this.gm(a))}}
W.dd.prototype={
au:function(a){return C.a.cm(this.a,new W.ip(a))},
ae:function(a,b,c){return C.a.cm(this.a,new W.io(a,b,c))},
$iaU:1}
W.ip.prototype={
$1:function(a){return a.au(this.a)},
$S:22}
W.io.prototype={
$1:function(a){return a.ae(this.a,this.b,this.c)},
$S:22}
W.dB.prototype={
d6:function(a,b,c,d){var t,s,r
this.a.a3(0,c)
t=b.bf(0,new W.jy())
s=b.bf(0,new W.jz())
this.b.a3(0,t)
r=this.c
r.a3(0,C.S)
r.a3(0,s)},
au:function(a){return this.a.E(0,W.cU(a))},
ae:function(a,b,c){var t=this,s=W.cU(a),r=t.c
if(r.E(0,s+"::"+b))return t.d.es(c)
else if(r.E(0,"*::"+b))return t.d.es(c)
else{r=t.b
if(r.E(0,s+"::"+b))return!0
else if(r.E(0,"*::"+b))return!0
else if(r.E(0,s+"::*"))return!0
else if(r.E(0,"*::*"))return!0}return!1},
$iaU:1}
W.jy.prototype={
$1:function(a){return!C.a.E(C.k,a)},
$S:20}
W.jz.prototype={
$1:function(a){return C.a.E(C.k,a)},
$S:20}
W.h5.prototype={
ae:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.jA.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:24}
W.h4.prototype={
au:function(a){var t
if(u.Y.b(a))return!1
t=u.u.b(a)
if(t&&W.cU(a)==="foreignObject")return!1
if(t)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.b.c1(b,"on"))return!1
return this.au(a)},
$iaU:1}
W.cX.prototype={
A:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.d=J.nz(t.a,s)
t.c=s
return!0}t.d=null
t.c=r
return!1},
gF:function(a){return H.al(this).c.a(this.d)}}
W.jx.prototype={}
W.he.prototype={
bZ:function(a){var t,s=new W.jE(this)
do{t=this.b
s.$2(a,null)}while(t!==this.b)},
aI:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.lX(a)
else b.removeChild(a).toString},
ec:function(a,b){var t,s,r,q,p,o,n,m=!0,l=null,k=null
try{l=J.nD(a)
k=l.a.getAttribute("is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var j=c.childNodes
if(c.lastChild&&c.lastChild!==j[j.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var i=0
if(c.children)i=c.children.length
for(var h=0;h<i;h++){var g=c.children[h]
if(g.id=='attributes'||g.name=='attributes'||g.id=='lastChild'||g.name=='lastChild'||g.id=='previousSibling'||g.name=='previousSibling'||g.id=='children'||g.name=='children')return true}return false}(a)
q.toString
t=q
if(t)p=!0
else{q=!(a.attributes instanceof NamedNodeMap)
q.toString
p=q}m=p}catch(o){H.am(o)}s="element unprintable"
try{s=J.e_(a)}catch(o){H.am(o)}try{r=W.cU(a)
this.eb(a,b,m,s,r,l,k)}catch(o){if(H.am(o) instanceof P.ax)throw o
else{this.aI(a,b)
q=window
q.toString
q="Removing corrupted element "+H.k(s)
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(q)}}},
eb:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.aI(a,b)
window.toString
t="Removing element due to corrupted attributes on <"+d+">"
s=typeof console!="undefined"
s.toString
if(s)window.console.warn(t)
return}if(!n.a.au(a)){n.aI(a,b)
window.toString
t="Removing disallowed element <"+e+"> from "+H.k(b)
s=typeof console!="undefined"
s.toString
if(s)window.console.warn(t)
return}if(g!=null)if(!n.a.ae(a,"is",g)){n.aI(a,b)
window.toString
t="Removing disallowed type extension <"+e+' is="'+g+'">'
s=typeof console!="undefined"
s.toString
if(s)window.console.warn(t)
return}r=f.ga0(f).slice(0)
for(q=f.ga0(f).length-1,t=f.a;q>=0;--q){if(q>=r.length)return H.d(r,q)
p=r[q]
s=n.a
o=J.nE(p)
H.jH(p)
if(!s.ae(a,o,t.getAttribute(p))){window.toString
s="Removing disallowed attribute <"+e+" "+p+'="'+H.k(t.getAttribute(p))+'">'
o=typeof console!="undefined"
o.toString
if(o)window.console.warn(s)
t.removeAttribute(p)}}if(u.G.b(a)){t=a.content
t.toString
n.bZ(t)}}}
W.jE.prototype={
$2:function(a,b){var t,s,r,q,p=this.a,o=a.nodeType
o.toString
switch(o){case 1:p.ec(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aI(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){o=s.nextSibling
r=t
r=o==null?r!=null:o!==r
o=r}else o=!1
if(o){o=P.lw("Corrupt HTML")
throw H.c(o)}}catch(q){H.am(q)
o=t;++p.b
r=o.parentNode
if(a!==r){if(r!=null)r.removeChild(o).toString}else a.removeChild(o).toString
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:23}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.h_.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
W.hj.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.ho.prototype={}
P.jI.prototype={
$1:function(a){this.a.push(P.mR(a))},
$S:21}
P.l6.prototype={
$2:function(a,b){this.a[a]=P.mR(b)},
$S:46}
P.bK.prototype={$ibK:1}
P.es.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=a.length
t.toString
t=b>>>0!==b||b>=t
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a.getItem(b)
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){return this.l(a,b)},
$ij:1,
$if:1,
$il:1}
P.bN.prototype={$ibN:1}
P.eH.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=a.length
t.toString
t=b>>>0!==b||b>=t
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a.getItem(b)
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){return this.l(a,b)},
$ij:1,
$if:1,
$il:1}
P.iu.prototype={
gm:function(a){return a.length}}
P.cn.prototype={$icn:1}
P.f2.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=a.length
t.toString
t=b>>>0!==b||b>=t
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a.getItem(b)
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){return this.l(a,b)},
$ij:1,
$if:1,
$il:1}
P.i.prototype={
a4:function(a,b,c,d){var t,s,r,q,p=[]
p.push(W.mE(null))
p.push(W.mJ())
p.push(new W.h4())
c=new W.he(new W.dd(p))
t='<svg version="1.1">'+b+"</svg>"
p=document
s=p.body
s.toString
r=C.m.eE(s,t,c)
p=p.createDocumentFragment()
p.toString
s=new W.aj(r)
q=s.gap(s)
for(;s=q.firstChild,s!=null;)p.appendChild(s).toString
return p},
$ii:1}
P.bR.prototype={$ibR:1}
P.fd.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=a.length
t.toString
t=b>>>0!==b||b>=t
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=a.getItem(b)
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){return this.l(a,b)},
$ij:1,
$if:1,
$il:1}
P.fH.prototype={}
P.fI.prototype={}
P.fQ.prototype={}
P.fR.prototype={}
P.h0.prototype={}
P.h1.prototype={}
P.ha.prototype={}
P.hb.prototype={}
P.hC.prototype={
gm:function(a){return a.length}}
P.e4.prototype={
l:function(a,b){return P.bx(a.get(b))},
M:function(a,b){var t,s,r=a.entries()
for(;!0;){t=r.next()
s=t.done
s.toString
if(s)return
s=t.value[0]
s.toString
b.$2(s,P.bx(t.value[1]))}},
ga0:function(a){var t=[]
this.M(a,new P.hD(t))
return t},
gm:function(a){var t=a.size
t.toString
return t},
$ia2:1}
P.hD.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.e5.prototype={
gm:function(a){return a.length}}
P.bd.prototype={}
P.eI.prototype={
gm:function(a){return a.length}}
P.fq.prototype={}
P.dj.prototype={$idj:1}
P.eX.prototype={
gm:function(a){var t=a.length
t.toString
return t},
l:function(a,b){var t=a.length
t.toString
t=b>>>0!==b||b>=t
t.toString
if(t)throw H.c(P.S(b,a,null,null,null))
t=P.bx(a.item(b))
t.toString
return t},
p:function(a,b,c){throw H.c(P.C("Cannot assign element of immutable List."))},
G:function(a,b){return this.l(a,b)},
$ij:1,
$if:1,
$il:1}
P.fY.prototype={}
P.fZ.prototype={}
K.hz.prototype={
aA:function(a,b){return!0},
h:function(a){return"all"}}
K.ej.prototype={
aA:function(a,b){var t,s,r
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)if(t[r].aA(0,b))return!0
return!1},
h:function(a){var t,s,r,q,p
for(t=this.a,s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.H)(t),++q){p=t[q]
if(r.length!==0)r+=", "
r+=p.h(0)}return r}}
K.bl.prototype={
aA:function(a,b){return!this.cX(0,b)},
h:function(a){return"!["+this.bi(0)+"]"}}
K.a4.prototype={
S:function(a){var t,s,r,q
if(a.a.length<=0)throw H.c(P.V("May not create a Set with zero characters."))
t=new H.aK(u.q)
for(s=new H.bL(a,a.gm(a)),r=H.al(s).c;s.A();)t.p(0,r.a(s.d),!0)
q=P.mb(new H.bj(t),!0)
if(!!q.immutable$list)H.a6(P.C("sort"))
H.os(q,J.p7())
this.a=q},
aA:function(a,b){return C.a.E(this.a,b)},
h:function(a){return P.ly(this.a)}}
L.eY.prototype={
B:function(a,b){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<s;++r){q=t[r]
if(q.b.b===b)return q}q=new L.iW(this.a.J(0,b),[])
t.push(q)
return q},
eH:function(a){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=t[r]
if(q.aA(0,a))return q}return null},
h:function(a){return this.b},
cg:function(){var t,s,r,q,p,o=this,n=""+("("+o.b+")"),m=o.d
if(m!=null){n+=" => ["+m.b+"]"
m=o.a.c
t=o.d
if(m.E(0,t==null?null:t.b))n+=" (consume)"
t=o.d
t=t==null?null:new H.bj(t.c)
t=J.bc(t==null?[]:t)
for(;t.A();){s=t.gF(t)
n+="\n"
r=o.d
if(r!=null)r.c.l(0,s)
n+="  -- "+s+" => []"
if(m.E(0,""))n+=" (consume)"}}for(m=o.c,t=m.length,q=0;q<m.length;m.length===t||(0,H.H)(m),++q){p=m[q]
n+="\n"
n+="  -- "+(p.b.b+": "+p.bi(0))}return n.charCodeAt(0)==0?n:n}}
L.fa.prototype={
h:function(a){var t=H.dW(this.b,"\n","\\n"),s=H.dW(t,"\t","\\t")
return this.a+":"+this.c+':"'+s+'"'}}
L.fb.prototype={
h:function(a){return this.b}}
L.iT.prototype={
J:function(a,b){var t=this.a,s=t.l(0,b)
if(s==null){s=new L.eY(this,b,[])
t.p(0,b,s)}return s},
aV:function(a){var t,s=this.b,r=s.l(0,a)
if(r==null){t=u.N
r=new L.fb(a,P.eu(t,t))
s.p(0,a,r)}return r},
cP:function(a){return this.fi(a)},
fi:function(a){var t=this
return P.pf(function(){var s=a
var r=0,q=1,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$cP(a0,a1){if(a0===1){p=a1
r=q}while(true)switch(r){case 0:e=t.d
d=[]
c=[]
b=[]
o=H.al(s).c,n=t.c,m=null,l=0,k=0,j=0
case 2:if(!!0){r=3
break}if(b.length!==0)i=C.a.bN(b,0)
else{if(!s.A()){r=3
break}i=o.a(s.d)}c.push(i);++l
h=e==null
g=h?null:e.eH(i)
r=g==null?4:6
break
case 4:if(m==null){f=P.ly(c)
throw H.c(P.V("Untokenizable string [state: "+H.k(h?null:e.b)+", index "+l+']: "'+f+'"'))}if(!!c.fixed$length)H.a6(P.C("removeRange"))
P.lt(0,j,c.length)
c.splice(0,j-0)
C.a.a3(b,c)
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
case 6:if(!g.c)d.push(i)
e=g.b
h=e.d
if(h!=null){f=P.ly(d)
h=e.d
if(h==null)m=null
else{h.c.l(0,f)
h=h.b
h=new L.fa(h,f,l)
m=h}j=c.length
k=l}case 5:r=2
break
case 3:r=m!=null&&!n.E(0,m.a)?10:11
break
case 10:r=12
return m
case 12:case 11:return P.oF()
case 1:return P.oG(p)}}},u.J)},
h:function(a){var t,s,r=new P.bP(""),q=this.d
if(q!=null)r.a=""+(q.cg()+"\n")
for(q=this.a,q=q.gfl(q),q=new H.d6(J.bc(q.a),q.b),t=H.al(q).Q[1];q.A();){s=t.a(q.a)
if(s!=this.d)r.a+=H.k(s==null?null:s.cg())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.iW.prototype={
h:function(a){return this.b.b+": "+this.bi(0)}}
O.cO.prototype={
c_:function(a,b){this.b=null
this.c=a},
cd:function(a){return!0},
dt:function(a,b){var t=this.c
return t==null?null:t.$2(a,b)},
gm:function(a){return this.a.length},
gP:function(a){var t=this.a
return new J.aO(t,t.length)},
u:function(a,b){var t,s
this.cd([b])
t=this.a
s=t.length
t.push(b)
this.dt(s,[b])},
$if:1}
O.d8.prototype={
gm:function(a){return this.a.length},
gI:function(){var t=this.b
return t==null?this.b=D.c4():t},
aq:function(){var t=this.b
return t==null?null:t.a_(null)},
gaO:function(a){var t=this.a
if(t.length>0)return C.a.gbI(t)
else return V.aT()},
cE:function(a){this.a.push(a)
this.aq()},
bM:function(){var t=this.a
if(t.length>0){t.pop()
this.aq()}}}
Y.cr.prototype={
h:function(a){return this.b}}
Y.e6.prototype={
h:function(a){switch(this.a){case C.j:return"intesected"
case C.h:return"noCollision"
case C.w:return"outOfRange at "+H.k(this.b)
case C.e:return"collision at "+H.k(this.b)
default:return"Unknown collision value"}}}
Y.fe.prototype={
h:function(a){var t=this.c2(0)
return t+(this.a===C.e?" "+this.y.h(0):"")}}
Y.bs.prototype={
h:function(a){var t=this,s=t.c2(0)
return s+(t.a===C.e?" "+H.k(t.r)+" "+H.k(t.x)+" "+H.k(t.y):"")}}
E.c3.prototype={
sc0:function(a,b){var t=this,s=t.c
if(s!=b){t.d=t.c=b
if(s!=null)s.gI().C(0,t.gcA())
if(b!=null)b.gI().u(0,t.gcA())
t.am(new D.ai("shape",s,b))}},
saP:function(a){var t,s,r=this
if(!J.I(r.r,a)){t=r.r
r.r=a
if(t!=null)t.gI().C(0,r.gcw())
if(a!=null)a.gI().u(0,r.gcw())
s=r.r
r.am(new D.ai("mover",t,s))}},
cR:function(a,b){var t,s,r=this,q=r.r,p=q==null?null:q.a
if(!J.I(p,r.x)){t=r.x
r.x=p
r.am(new D.ai("matrix",t,p))}for(q=r.y.a,q=new J.aO(q,q.length),s=H.al(q).c;q.A();)s.a(q.d).cR(0,b)},
bb:function(a){var t,s,r,q,p=this
if(!p.b)return
t=a.dx
s=p.x
r=t.a
if(s==null)r.push(t.gaO(t))
else r.push(s.L(0,t.gaO(t)))
t.aq()
a.cF(p.f)
q=C.a.gbI(a.dy)
if(p.d!=null)if(q!=null)q.f5(a,p)
for(s=p.y.a,s=new J.aO(s,s.length),r=H.al(s).c;s.A();)r.a(s.d).bb(a)
a.cC()
t.bM()},
am:function(a){var t=this.z
return t==null?null:t.a_(a)},
R:function(){return this.am(null)},
cB:function(a){this.am(a)},
eX:function(){return this.cB(null)},
cz:function(a){return this.am(a)},
eW:function(){return this.cz(null)},
cv:function(a){return this.am(a)},
eT:function(){return this.cv(null)},
eS:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.gcu(),r=0;r<b.length;b.length===t||(0,H.H)(b),++r){q=b[r]
p=q.z
if(p==null)p=q.z=new D.cV()
o=p.a;(o==null?p.a=[]:o).push(s)}this.R()},
eV:function(a,b){var t,s
for(t=b.gP(b),s=this.gcu();t.A();)t.gF(t).gI().C(0,s)
this.R()},
h:function(a){return"Unnamed entity"}}
E.c1.prototype={
h:function(a){return this.b}}
E.cl.prototype={
h:function(a){return this.b}}
E.je.prototype={}
E.iw.prototype={
d2:function(a,b){var t=this
t.cy.gI().u(0,new E.ix(t))
t.db.gI().u(0,new E.iy(t))
t.dx.gI().u(0,new E.iz(t))},
cF:function(a){var t=this.dy
return t.push(a==null?C.a.gbI(t):a)},
cC:function(){var t=this.dy
if(t.length>1)t.pop()}}
E.ix.prototype={
$1:function(a){},
$S:10}
E.iy.prototype={
$1:function(a){},
$S:10}
E.iz.prototype={
$1:function(a){},
$S:10}
E.f8.prototype={
c4:function(a){if(this.ch)this.cH()},
bj:function(){return this.c4(null)},
cf:function(){var t,s,r,q,p=window.devicePixelRatio
p.toString
t=this.b
s=t.clientWidth
s.toString
r=C.d.aK(s*p)
s=t.clientHeight
s.toString
q=C.d.aK(s*p)
if(t.width!==r||t.height!==q){t.width=r
t.height=q
P.f9(C.i,this.gf6())}},
cH:function(){var t,s
if(!this.cx){this.cx=!0
t=window
t.toString
C.y.dl(t)
s=W.mZ(new E.iR(this),u.H)
s.toString
C.y.e9(t,s)}},
cG:function(){var t,s,r,q,p,o=this,n=null
try{++o.db
o.cx=!1
o.cf()
if(n==null)n=o.d
if(n!=null){r=o.e;++r.e
r.r=r.x
q=Date.now()
r.x=new P.a7(q,!1)
P.hR(q-r.r.a)
q=r.cy
C.a.sm(q.a,0)
q.aq()
q=r.db
C.a.sm(q.a,0)
q.aq()
q=r.dx
C.a.sm(q.a,0)
q.aq()
q=r.dy
C.a.sm(q,0)
q.push(null)
n.bb(r)}}catch(p){t=H.am(p)
s=H.b2(p)
P.n7("Error: "+H.k(t))
P.n7("Stack: "+H.k(s))
throw H.c(t)}}}
E.iR.prototype={
$1:function(a){var t=this.a
if(t.cx){t.cx=!1
t.cG()}},
$S:25}
Z.aE.prototype={
eu:function(a){var t,s=$.b9(),r=this.a
if((r&s.a)!==0){if(0===a)return s
t=1}else t=0
s=$.b8()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.b7()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.ba()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bD()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bB()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bC()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bb()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.b6()
if((r&s.a)!==0)if(t===a)return s
return $.lh()},
eL:function(a,b){var t,s=$.b9(),r=this.a
if((r&s.a)!==0){if(b.j(0,s))return 0
t=1}else t=0
s=$.b8()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.b7()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.ba()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.bD()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.bB()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.bC()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.bb()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.b6()
if((r&s.a)!==0)if(b.j(0,s))return t
return-1},
eQ:function(a,b){var t,s=$.b9(),r=this.a
if((r&s.a)!==0){if(b.j(0,s))return 0
t=3}else t=0
s=$.b8()
if((r&s.a)!==0){if(b.j(0,s))return t
t+=3}s=$.b7()
if((r&s.a)!==0){if(b.j(0,s))return t
t+=3}s=$.ba()
if((r&s.a)!==0){if(b.j(0,s))return t
t+=2}s=$.bD()
if((r&s.a)!==0){if(b.j(0,s))return t
t+=3}s=$.bB()
if((r&s.a)!==0){if(b.j(0,s))return t
t+=3}s=$.bC()
if((r&s.a)!==0){if(b.j(0,s))return t
t+=4}s=$.bb()
if((r&s.a)!==0){if(b.j(0,s))return t;++t}s=$.b6()
if((r&s.a)!==0)if(b.j(0,s))return t
return-1},
j:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aE))return!1
return this.a===b.a},
h:function(a){var t=[],s=this.a
if((s&$.b9().a)!==0)t.push("Pos")
if((s&$.b8().a)!==0)t.push("Norm")
if((s&$.b7().a)!==0)t.push("Binm")
if((s&$.ba().a)!==0)t.push("Txt2D")
if((s&$.bD().a)!==0)t.push("TxtCube")
if((s&$.bB().a)!==0)t.push("Clr3")
if((s&$.bC().a)!==0)t.push("Clr4")
if((s&$.bb().a)!==0)t.push("Weight")
if((s&$.b6().a)!==0)t.push("Bending")
if(t.length<=0)return"None"
return C.a.B(t,"|")}}
D.hF.prototype={}
D.cV.prototype={
u:function(a,b){var t=this.a
return(t==null?this.a=[]:t).push(b)},
C:function(a,b){var t,s=this,r=null,q=s.a
q=q==null?r:C.a.E(q,b)
if(q===!0){q=s.a
q=q==null?r:C.a.C(q,b)
t=q===!0||!1}else t=!1
q=s.b
q=q==null?r:C.a.E(q,b)
if(q===!0){q=s.b
q=q==null?r:C.a.C(q,b)
t=q===!0||t}return t},
a_:function(a){var t,s,r=this,q=r.a,p=q==null,o=p?null:q.length===0
if(o!==!1){o=r.b
o=o==null?null:o.length===0
o=o!==!1}else o=!1
if(o)return!1
t=a==null?new D.an():a
if(r.d>0){if(r.c==null)r.c=t
return!0}if(!p)C.a.M(P.mb(q,!0),new D.hZ(t))
s=r.b
if(s!=null){r.b=[]
C.a.M(s,new D.i_(t))}return!0},
bc:function(a){var t,s=this,r=s.d
if(r>0){--r
s.d=r
if(r<=0)r=s.c!=null
else r=!1
if(r){t=s.c
s.c=null
s.a_(t)}}}}
D.hZ.prototype={
$1:function(a){a.$1(this.a)},
$S:19}
D.i_.prototype={
$1:function(a){a.$1(this.a)},
$S:19}
D.an.prototype={}
D.cZ.prototype={}
D.d_.prototype={}
D.ai.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.cM.prototype={
j:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cM))return!1
if(this.a!==b.a)return!1
if(!this.b.j(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.eq.prototype={
j:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eq))return!1
if(this.a!==b.a)return!1
if(!this.b.j(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.ia.prototype={}
X.ig.prototype={
bL:function(a,b){this.r=a.a
return!1},
aR:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
aQ:function(a,b){return!1},
f0:function(a){return!1},
dP:function(a,b,c){return}}
X.cj.prototype={
j:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof X.cj))return!1
if(t.a!==b.a)return!1
if(t.b!==b.b)return!1
if(t.c!==b.c)return!1
return!0},
h:function(a){var t=[]
if(this.a)t.push("Ctrl")
if(this.b)t.push("Alt")
if(this.c)t.push("Shift")
return C.a.B(t,"+")}}
X.il.prototype={
bL:function(a,b){this.f=a.a
return!1},
aR:function(a,b){this.f=(this.f&~a.a)>>>0
return!1},
aQ:function(a,b){return!1},
f1:function(a,b){return!1}}
X.iU.prototype={
f_:function(a){return!1},
eY:function(a){return!1},
eZ:function(a){return!1}}
X.fk.prototype={
gb6:function(a){var t=this.b
return t==null?this.b=new X.ia(P.d2(u.S)):t},
gaB:function(){var t,s=this.c
if(s==null){s=$.aV
if(s==null){s=$.aV=new V.R(0,0)
t=s}else t=s
s=this.c=new X.il(this,s,t,new P.a7(Date.now(),!1),new P.a7(Date.now(),!1))}return s},
gal:function(){var t=this.d
if(t==null){t=$.aV
if(t==null)t=$.aV=new V.R(0,0)
t=this.d=new X.ig(this,t,new P.a7(Date.now(),!1),new P.a7(Date.now(),!1))}return t},
gbU:function(){var t,s=this.e
if(s==null){s=$.aV
if(s==null){s=$.aV=new V.R(0,0)
t=s}else t=s
s=this.e=new X.iU(this,s,t,new P.a7(Date.now(),!1),new P.a7(Date.now(),!1))}return s},
c8:function(a){var t,s,r,q=a.keyCode
q.toString
t=a.ctrlKey
t.toString
if(!t){t=a.metaKey
t.toString}else t=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
return new X.eq(q,new X.cj(t,s,r))},
at:function(a){var t
this.gb6(this)
t=a.ctrlKey
t.toString
if(!t)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
bA:function(a){var t=a.ctrlKey
if(t!==!0)a.metaKey
this.gb6(this)
a.altKey
a.shiftKey},
aj:function(a){var t,s,r,q
if(a==null){t=$.aV
return t==null?$.aV=new V.R(0,0):t}t=this.a.getBoundingClientRect()
t.toString
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.left
q.toString
t=t.top
t.toString
return new V.R(s-q,r-t)},
aH:function(a){var t,s=a.movementX
s.toString
t=a.movementY
t.toString
return new V.ac(s,t)},
bw:function(a){var t,s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect()
k.toString
t=[]
s=a.touches
if(s==null)s=[]
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
o=p.pageX
o.toString
o=C.d.ac(o)
n=p.pageY
n.toString
C.d.ac(n)
n=k.left
n.toString
m=p.pageX
m.toString
C.d.ac(m)
m=p.pageY
m.toString
m=C.d.ac(m)
l=k.top
l.toString
t.push(new V.R(o-n,m-l))}return t},
ai:function(a){var t,s,r,q
if(a==null)return new X.cM(0,new X.cj(!1,!1,!1))
t=a.buttons
if(t==null)t=0
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.cM(t,new X.cj(s,r,q))},
bs:function(a){var t,s,r,q,p,o=this.a.getBoundingClientRect()
o.toString
t=a.pageX
t.toString
s=a.pageY
s.toString
r=o.left
r.toString
q=t-r
if(q<0)return!1
t=o.top
t.toString
p=s-t
if(p<0)return!1
t=o.width
t.toString
if(q<t){o=o.height
o.toString
o=p<o}else o=!1
return o},
dK:function(a){return this.f=!0},
dv:function(a){return this.f=!1},
dE:function(a){if(this.f&&this.bs(a))a.preventDefault()},
dO:function(a){var t,s=this
if(!s.f)return
t=s.c8(a)
s.gb6(s).d.u(0,t.a)},
dM:function(a){var t,s=this
if(!s.f)return
t=s.c8(a)
s.gb6(s).d.C(0,t.a)},
dR:function(a){var t,s,r,q=this
q.a.focus()
q.f=!0
q.at(a)
if(q.x){t=q.ai(a)
s=q.aH(a)
if(q.gal().bL(t,s))a.preventDefault()
return}t=q.ai(a)
r=q.aj(a)
if(q.gaB().bL(t,r))a.preventDefault()},
dV:function(a){var t,s,r,q=this
q.at(a)
t=q.ai(a)
if(q.x){s=q.aH(a)
if(q.gal().aR(t,s))a.preventDefault()
return}r=q.aj(a)
if(q.gaB().aR(t,r))a.preventDefault()},
dI:function(a){var t,s,r,q=this
if(!q.bs(a)){q.at(a)
t=q.ai(a)
if(q.x){s=q.aH(a)
if(q.gal().aR(t,s))a.preventDefault()
return}r=q.aj(a)
if(q.gaB().aR(t,r))a.preventDefault()}},
dT:function(a){var t,s,r,q=this
q.at(a)
t=q.ai(a)
if(q.x){s=q.aH(a)
if(q.gal().aQ(t,s))a.preventDefault()
return}r=q.aj(a)
if(q.gaB().aQ(t,r))a.preventDefault()},
dG:function(a){var t,s,r,q=this
if(!q.bs(a)){q.at(a)
t=q.ai(a)
if(q.x){s=q.aH(a)
if(q.gal().aQ(t,s))a.preventDefault()
return}r=q.aj(a)
if(q.gaB().aQ(t,r))a.preventDefault()}},
dX:function(a){var t,s,r,q=this
q.at(a)
t=q.Q
s=new V.ac(C.x.geF(a)*t,C.x.geG(a)*t)
if(q.x){if(q.gal().f0(s))a.preventDefault()
return}r=q.aj(a)
if(q.gaB().f1(s,r))a.preventDefault()},
dZ:function(a){var t,s,r=this,q=document.pointerLockElement===r.a
if(q!==r.x){r.x=q
t=r.ai(r.y)
s=r.aj(r.y)
r.gal().dP(t,s,q)}},
e4:function(a){var t,s=this
s.a.focus()
s.f=!0
s.bA(a)
t=s.bw(a)
if(s.gbU().f_(t))a.preventDefault()},
e0:function(a){var t
this.bA(a)
t=this.bw(a)
if(this.gbU().eY(t))a.preventDefault()},
e2:function(a){var t
this.bA(a)
t=this.bw(a)
if(this.gbU().eZ(t))a.preventDefault()}}
V.bG.prototype={
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bG))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.y(t.a,3,0)+", "+V.y(t.b,3,0)+", "+V.y(t.c,3,0)+", "+V.y(t.d,3,0)+"]"},
t:function(){var t=this
return"["+V.y(t.a,3,0)+", "+V.y(t.b,3,0)+", "+V.y(t.c,3,0)+", "+V.y(t.d,3,0)+"]"}}
V.hX.prototype={}
V.ao.prototype={
bv:function(a,b){var t=this.a,s=a.a,r=(t&s)===s?b.a:$.aH().a,q=b.a
return r|((t&q)===q?s:$.aH().a)},
j:function(a,b){if(b==null)return!1
if(!(b instanceof V.ao))return!1
return this.a===b.a},
h:function(a){var t,s,r
$.dX()
$.lT()
t=[]
s=this.a
r=$.cG().a
if((s&r)===r)t.push("XPos")
r=$.nh().a
if((s&r)===r)t.push("XCenter")
r=$.cF().a
if((s&r)===r)t.push("XNeg")
r=$.cH().a
if((s&r)===r)t.push("YPos")
r=$.ni().a
if((s&r)===r)t.push("YCenter")
r=$.dY().a
if((s&r)===r)t.push("YNeg")
r=$.dZ().a
if((s&r)===r)t.push("ZPos")
r=$.nj().a
if((s&r)===r)t.push("ZCenter")
r=$.cI().a
if((s&r)===r)t.push("ZNeg")
if(t.length<=0)return"None"
return C.a.B(t,"|")}}
V.Y.prototype={
aT:function(a){var t=this
return[t.a,t.b,t.c,t.d]},
a2:function(a){var t,s=this,r=s.a,q=s.d,p=s.b,o=s.c,n=r*q-p*o
$.A().toString
if(Math.abs(n-0)<1e-9)return V.cb()
t=1/n
return new V.Y(q*t,-p*t,-o*t,r*t)},
L:function(a,b){var t=this,s=t.a,r=b.a,q=t.b,p=b.c,o=b.b,n=b.d,m=t.c,l=t.d
return new V.Y(s*r+q*p,s*o+q*n,m*r+l*p,m*o+l*n)},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){return this.t()},
n:function(a){var t,s,r=this,q=V.by([r.a,r.c],3,0),p=V.by([r.b,r.d],3,0),o=q.length
if(0>=o)return H.d(q,0)
t="["+q[0]+", "
s=p.length
if(0>=s)return H.d(p,0)
t=t+p[0]+",\n"+a+" "
if(1>=o)return H.d(q,1)
t=t+q[1]+", "
if(1>=s)return H.d(p,1)
return t+p[1]+"]"},
t:function(){return this.n("")}}
V.P.prototype={
aT:function(a){var t=this
return[t.a,t.b,t.c,t.d,t.e,t.f,t.r,t.x,t.y]},
a2:function(a){var t,s=this,r=s.a,q=s.e,p=s.y,o=q*p,n=s.f,m=s.x,l=s.d,k=s.b,j=k*p,i=s.c,h=m*i,g=s.r,f=k*n-q*i,e=r*(o-n*m)-l*(j-h)+g*f
$.A().toString
if(Math.abs(e-0)<1e-9)return V.cf()
t=1/e
return new V.P((o-m*n)*t,(h-j)*t,f*t,(g*n-l*p)*t,(r*p-g*i)*t,(l*i-r*n)*t,(l*m-g*q)*t,(g*k-r*m)*t,(r*q-l*k)*t)},
L:function(a,a0){var t=this,s=t.a,r=a0.a,q=t.b,p=a0.d,o=t.c,n=a0.r,m=a0.b,l=a0.e,k=a0.x,j=a0.c,i=a0.f,h=a0.y,g=t.d,f=t.e,e=t.f,d=t.r,c=t.x,b=t.y
return new V.P(s*r+q*p+o*n,s*m+q*l+o*k,s*j+q*i+o*h,g*r+f*p+e*n,g*m+f*l+e*k,g*j+f*i+e*h,d*r+c*p+b*n,d*m+c*l+b*k,d*j+c*i+b*h)},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.P))return!1
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
h:function(a){return this.t()},
n:function(a){var t,s,r,q,p=this,o=V.by([p.a,p.d,p.r],3,0),n=V.by([p.b,p.e,p.x],3,0),m=V.by([p.c,p.f,p.y],3,0),l=o.length
if(0>=l)return H.d(o,0)
t="["+o[0]+", "
s=n.length
if(0>=s)return H.d(n,0)
t=t+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
t=t+m[0]+",\n"
q=a+" "
if(1>=l)return H.d(o,1)
q=q+o[1]+", "
if(1>=s)return H.d(n,1)
q=q+n[1]+", "
if(1>=r)return H.d(m,1)
q=t+(q+m[1]+",\n")
t=a+" "
if(2>=l)return H.d(o,2)
t=t+o[2]+", "
if(2>=s)return H.d(n,2)
t=t+n[2]+", "
if(2>=r)return H.d(m,2)
return q+(t+m[2]+"]")},
t:function(){return this.n("")}}
V.ew.prototype={
aT:function(a){var t=this
return[t.a,t.b,t.c,t.d,t.e,t.f,t.r,t.x,t.y,t.z,t.Q,t.ch,t.cx,t.cy,t.db,t.dx]},
a2:function(b3){var t,s,r,q=this,p=q.a,o=q.f,n=q.b,m=q.e,l=p*o-n*m,k=q.r,j=q.c,i=p*k-j*m,h=q.x,g=q.d,f=p*h-g*m,e=n*k-j*o,d=n*h-g*o,c=j*h-g*k,b=q.y,a=q.cy,a0=q.z,a1=q.cx,a2=b*a-a0*a1,a3=q.db,a4=q.Q,a5=b*a3-a4*a1,a6=q.dx,a7=q.ch,a8=b*a6-a7*a1,a9=a0*a3-a4*a,b0=a0*a6-a7*a,b1=a4*a6-a7*a3,b2=l*b1-i*b0+f*a9+e*a8-d*a5+c*a2
$.A().toString
if(Math.abs(b2-0)<1e-9)return V.aT()
t=1/b2
s=-m
r=-a1
return V.M((o*b1-k*b0+h*a9)*t,(-n*b1+j*b0-g*a9)*t,(a*c-a3*d+a6*e)*t,(-a0*c+a4*d-a7*e)*t,(s*b1+k*a8-h*a5)*t,(p*b1-j*a8+g*a5)*t,(r*c+a3*f-a6*i)*t,(b*c-a4*f+a7*i)*t,(m*b0-o*a8+h*a2)*t,(-p*b0+n*a8-g*a2)*t,(a1*d-a*f+a6*l)*t,(-b*d+a0*f-a7*l)*t,(s*a9+o*a5-k*a2)*t,(p*a9-n*a5+j*a2)*t,(r*e+a*i-a3*l)*t,(b*e-a0*i+a4*l)*t)},
L:function(b3,b4){var t=this,s=t.a,r=b4.a,q=t.b,p=b4.e,o=t.c,n=b4.y,m=t.d,l=b4.cx,k=b4.b,j=b4.f,i=b4.z,h=b4.cy,g=b4.c,f=b4.r,e=b4.Q,d=b4.db,c=b4.d,b=b4.x,a=b4.ch,a0=b4.dx,a1=t.e,a2=t.f,a3=t.r,a4=t.x,a5=t.y,a6=t.z,a7=t.Q,a8=t.ch,a9=t.cx,b0=t.cy,b1=t.db,b2=t.dx
return V.M(s*r+q*p+o*n+m*l,s*k+q*j+o*i+m*h,s*g+q*f+o*e+m*d,s*c+q*b+o*a+m*a0,a1*r+a2*p+a3*n+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a1*c+a2*b+a3*a+a4*a0,a5*r+a6*p+a7*n+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d,a5*c+a6*b+a7*a+a8*a0,a9*r+b0*p+b1*n+b2*l,a9*k+b0*j+b1*i+b2*h,a9*g+b0*f+b1*e+b2*d,a9*c+b0*b+b1*a+b2*a0)},
be:function(a){var t=this,s=a.a,r=a.b,q=a.c,p=a.d
return new V.bn(t.a*s+t.b*r+t.c*q+t.d*p,t.e*s+t.f*r+t.r*q+t.x*p,t.y*s+t.z*r+t.Q*q+t.ch*p,t.cx*s+t.cy*r+t.db*q+t.dx*p)},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ew))return!1
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
h:function(a){return this.t()},
n:function(a){var t,s,r,q,p,o=this,n=V.by([o.a,o.e,o.y,o.cx],3,0),m=V.by([o.b,o.f,o.z,o.cy],3,0),l=V.by([o.c,o.r,o.Q,o.db],3,0),k=V.by([o.d,o.x,o.ch,o.dx],3,0),j=n.length
if(0>=j)return H.d(n,0)
t="["+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
t=t+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
t=t+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
t=t+k[0]+",\n"
p=a+" "
if(1>=j)return H.d(n,1)
p=p+n[1]+", "
if(1>=s)return H.d(m,1)
p=p+m[1]+", "
if(1>=r)return H.d(l,1)
p=p+l[1]+", "
if(1>=q)return H.d(k,1)
p=t+(p+k[1]+",\n")
t=a+" "
if(2>=j)return H.d(n,2)
t=t+n[2]+", "
if(2>=s)return H.d(m,2)
t=t+m[2]+", "
if(2>=r)return H.d(l,2)
t=t+l[2]+", "
if(2>=q)return H.d(k,2)
t=p+(t+k[2]+",\n")
p=a+" "
if(3>=j)return H.d(n,3)
p=p+n[3]+", "
if(3>=s)return H.d(m,3)
p=p+m[3]+", "
if(3>=r)return H.d(l,3)
p=p+l[3]+", "
if(3>=q)return H.d(k,3)
return t+(p+k[3]+"]")},
t:function(){return this.n("")}}
V.R.prototype={
a9:function(a,b){var t
$.A().toString
if(Math.abs(b-0)<1e-9){t=$.aV
return t==null?$.aV=new V.R(0,0):t}return new V.R(this.a/b,this.b/b)},
j:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"},
t:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.o.prototype={
W:function(a,b){return new V.o(this.a+b.a,this.b+b.b,this.c+b.c)},
aF:function(a,b){return new V.o(this.a-b.a,this.b-b.b,this.c-b.c)},
a9:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.ls()
return new V.o(this.a/b,this.b/b,this.c/b)},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.o))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
return!0},
h:function(a){return this.t()},
a5:function(a,b){return"["+V.y(this.a,a,b)+", "+V.y(this.b,a,b)+", "+V.y(this.c,a,b)+"]"},
t:function(){return this.a5(3,0)}}
V.bn.prototype={
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bn))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){return this.t()},
a5:function(a,b){var t=this
return"["+V.y(t.a,a,b)+", "+V.y(t.b,a,b)+", "+V.y(t.c,a,b)+", "+V.y(t.d,a,b)+"]"},
t:function(){return this.a5(3,0)}}
V.dh.prototype={
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dh))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.y(t.a,3,0)+", "+V.y(t.b,3,0)+", "+V.y(t.c,3,0)+", "+V.y(t.d,3,0)+"]"}}
V.di.prototype={
bV:function(a,b){var t=this
return V.B(t.a+b.a,t.b+b.b,t.c+b.c,t.d,t.e,t.f)},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
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
return"["+V.y(t.a,3,0)+", "+V.y(t.b,3,0)+", "+V.y(t.c,3,0)+", "+V.y(t.d,3,0)+", "+V.y(t.e,3,0)+", "+V.y(t.f,3,0)+"]"}}
V.aB.prototype={
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aB))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.y(t.a,3,0)+", "+V.y(t.b,3,0)+", "+V.y(t.c,3,0)+", "+V.y(t.d,3,0)+"]"}}
V.ac.prototype={
aM:function(a){var t=this.a,s=this.b
return Math.sqrt(t*t+s*s)},
j:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.p.prototype={
aM:function(a){return Math.sqrt(this.af(this))},
af:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bJ:function(a,b){return new V.p(V.lQ(this.a,a.a,b),V.lQ(this.b,a.b,b),V.lQ(this.c,a.c,b))},
Y:function(){var t=this,s=Math.sqrt(t.af(t))
if(s===1)return t
return t.a9(0,s)},
bG:function(a){var t=this.b,s=a.c,r=this.c,q=a.b,p=a.a,o=this.a
return new V.p(t*s-r*q,r*p-o*s,o*q-t*p)},
W:function(a,b){return new V.p(this.a+b.a,this.b+b.b,this.c+b.c)},
aF:function(a,b){return new V.p(this.a-b.a,this.b-b.b,this.c-b.c)},
bg:function(a){return new V.p(-this.a,-this.b,-this.c)},
L:function(a,b){return new V.p(this.a*b,this.b*b,this.c*b)},
a9:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.b_()
return new V.p(this.a/b,this.b/b,this.c/b)},
cs:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.p))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
t:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.aD.prototype={
aM:function(a){var t=this,s=t.a,r=t.b,q=t.c,p=t.d
return Math.sqrt(s*s+r*r+q*q+p*p)},
a9:function(a,b){var t,s=this
$.A().toString
if(Math.abs(b-0)<1e-9){t=$.mA
return t==null?$.mA=new V.aD(0,0,0,0):t}return new V.aD(s.a/b,s.b/b,s.c/b,s.d/b)},
j:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aD))return!1
t=b.a
$.A().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.y(t.a,3,0)+", "+V.y(t.b,3,0)+", "+V.y(t.c,3,0)+", "+V.y(t.d,3,0)+"]"}}
U.ea.prototype={
gI:function(){var t=this.b
return t==null?this.b=D.c4():t},
j:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ea))return!1
return this.a.j(0,b.a)},
h:function(a){return"Constant: "+this.a.n("          ")}}
U.im.prototype={}
M.ef.prototype={
ah:function(a){var t=this.y
return t==null?null:t.a_(a)},
d5:function(){return this.ah(null)},
dA:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.gad(),r=0;r<b.length;b.length===t||(0,H.H)(b),++r){q=b[r]
p=q.z
if(p==null)p=q.z=new D.cV()
o=p.a;(o==null?p.a=[]:o).push(s)}this.ah(new D.cZ())},
dC:function(a,b){var t,s
for(t=b.gP(b),s=this.gad();t.A();)t.gF(t).gI().C(0,s)
this.ah(new D.d_())},
scK:function(a){var t,s=this,r=s.d
if(r!=a){if(r!=null)r.gI().C(0,s.gad())
t=s.d
s.d=a
if(a!=null)a.gI().u(0,s.gad())
s.ah(new D.ai("technique",t,s.d))}},
gI:function(){var t=this.y
return t==null?this.y=D.c4():t},
bb:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
a.cF(e.d)
t=e.c
if(t!=null){s=a.a
s.bindFramebuffer(36160,null)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=s.drawingBufferWidth
if(r==null)r=512
q=s.drawingBufferHeight
if(q==null)q=512
p=t.r
o=C.d.ac(p.a*r)
n=C.d.ac(p.b*q)
m=C.d.ac(p.c*r)
a.c=m
p=C.d.ac(p.d*q)
a.d=p
s.viewport(o,n,m,p)
s.clearDepth(2000)
t=t.a
s.clearColor(t.a,t.b,t.c,t.d)
s.clear(16640)}t=e.b
if(t!=null){s=a.c
p=a.d
m=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(m*0.5)
h=V.M(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
a.cy.cE(h)
g=$.nk()
f=t.b
if(f!=null)g=f.a.L(0,g)
a.db.cE(g)}for(t=e.e.a,s=new J.aO(t,t.length),p=H.al(s).c;s.A();)p.a(s.d).cR(0,a)
for(t=new J.aO(t,t.length),s=H.al(t).c;t.A();)s.a(t.d).bb(a)
if(e.b!=null){a.cy.bM()
a.db.bM()}a.cC()}}
F.jG.prototype={
$3:function(a,b,c){var t,s=this,r=s.a,q=r.a.bJ(r.b,b).bJ(r.d.bJ(r.c,b),c)
a.sb8(0,new V.o(q.a,q.b,q.c))
a.sbR(q.Y())
r=1-b
t=1-c
t=new V.bn(s.b+b*c,s.c+r*c,s.d+b*t,s.e+r*t)
if(!J.I(a.cx,t)){a.cx=t
r=a.a
if(r!=null)r.R()}r=s.f
if(r!=null)r.$3(a,b,c)},
$S:14}
F.lg.prototype={
$2:function(a,b){return 0},
$S:33}
F.lf.prototype={
$3:function(a,b,c){var t,s,r,q=this.b.$2(b,c)
if(typeof q!=="number")return H.pO(q)
t=a.f
if(t!=null)s=new V.p(t.a,t.b,t.c)
else{r=$.mz
if(r==null){r=new V.p(0,0,1)
$.mz=r
s=r}else s=r}q=s.Y().L(0,this.a+q)
a.sb8(0,new V.o(q.a,q.b,q.c))},
$S:14}
F.aR.prototype={
aG:function(a,b,c){var t=this,s=a.a
if(s==null)throw H.c(P.V("May not create a face with a first vertex which is not attached to a shape."))
if(s!==b.a||s!==c.a)throw H.c(P.V("May not create a face with vertices attached to different shapes."))
t.e=t.d=null
t.ed(a)
t.ee(b)
t.ef(c)
s=t.a
if(s!=null){s=s.a
if(s!=null)s.gN().b.push(t)}s=t.a
if(s!=null){s=s.a
if(s!=null)s.R()}},
aJ:function(){var t=this,s=t.a,r=s==null
if(!(r||t.b==null||t.c==null)){if(!r){s=s.a
if(s!=null)C.a.C(s.gN().b,t)}s=t.a
if(s!=null){s=s.a
if(s!=null)s.R()}}t.bx()
t.by()
t.e7()},
ed:function(a){this.a=a
a.gN().b.push(this)},
ee:function(a){this.b=a
a.gN().c.push(this)},
ef:function(a){this.c=a
a.gN().d.push(this)},
bx:function(){var t=this.a
if(t!=null)C.a.C(t.gN().b,this)
this.a=null},
by:function(){var t=this.b
if(t!=null)C.a.C(t.gN().c,this)
this.b=null},
e7:function(){var t=this.c
if(t!=null)C.a.C(t.gN().d,this)
this.c=null},
dc:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.r
p=this.b
t=p==null?q:p.r
p=this.c
s=p==null?q:p.r
r=V.b_()
if(o!=null)r=r.W(0,o)
if(t!=null)r=r.W(0,t)
if(s!=null)r=r.W(0,s)
if(r.cs())return q
return r.Y()},
dd:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.f
p=this.b
t=p==null?q:p.f
p=this.c
s=p==null?q:p.f
if(o==null||t==null||s==null)return q
p=t.aF(0,o)
r=new V.p(p.a,p.b,p.c).Y()
p=s.aF(0,o)
return r.bG(new V.p(p.a,p.b,p.c).Y()).Y()},
bD:function(){var t,s,r=this
if(r.d!=null)return!0
t=r.dc()
if(t==null){t=r.dd()
if(t==null)return!1}r.d=t
s=r.a
if(s!=null){s=s.a
if(s!=null)s.R()}return!0},
ar:function(a,b){var t,s=b.a
if(s==null)throw H.c(P.V("May not replace a face's vertex with a vertex which is not attached to a shape."))
t=a.a
if(t!==s)throw H.c(P.V("May not replace a face's vertex with a vertex attached to a different shape."))},
gez:function(a){var t=this
if(J.I(t.a,t.b))return!0
if(J.I(t.b,t.c))return!0
if(J.I(t.c,t.a))return!0
return!1},
j:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.t()},
n:function(a){var t,s=this,r=null,q=s.a,p=q==null
if(p||s.b==null||s.c==null)return a+"disposed"
q=p?r:q.gv(q)
q=a+C.b.a8(C.c.h(q==null?-1:q),0)+", "
p=s.b
p=p==null?r:p.gv(p)
q=q+C.b.a8(C.c.h(p==null?-1:p),0)+", "
p=s.c
p=p==null?r:p.gv(p)
t=q+C.b.a8(C.c.h(p==null?-1:p),0)+" {"
q=s.d
q=q==null?r:q.t()
t+=(q==null?"-":q)+", "
return t+"-}"},
t:function(){return this.n("")}}
F.i0.prototype={}
F.iF.prototype={
aN:function(a,b,c){var t,s=null,r=b.a
r=r==null?s:r.gv(r)
t=c.a
if(r==(t==null?s:t.gv(t))){r=b.b
r=r==null?s:r.gv(r)
t=c.b
if(r==(t==null?s:t.gv(t))){r=b.c
r=r==null?s:r.gv(r)
t=c.c
r=r==(t==null?s:t.gv(t))}else r=!1
return r}else{r=b.a
r=r==null?s:r.gv(r)
t=c.b
if(r==(t==null?s:t.gv(t))){r=b.b
r=r==null?s:r.gv(r)
t=c.c
if(r==(t==null?s:t.gv(t))){r=b.c
r=r==null?s:r.gv(r)
t=c.a
r=r==(t==null?s:t.gv(t))}else r=!1
return r}else{r=b.a
r=r==null?s:r.gv(r)
t=c.c
if(r==(t==null?s:t.gv(t))){r=b.b
r=r==null?s:r.gv(r)
t=c.a
if(r==(t==null?s:t.gv(t))){r=b.c
r=r==null?s:r.gv(r)
t=c.b
r=r==(t==null?s:t.gv(t))}else r=!1
return r}else return!1}}}}
F.ib.prototype={
aJ:function(){var t=this,s=t.a,r=s==null
if(!(r||t.b==null)){if(!r){s=s.a
if(s!=null)C.a.C(s.ga6(s).b,t)}s=t.a
if(s!=null){s=s.a
if(s!=null)s.R()}}t.bx()
t.by()},
bx:function(){var t=this.a
if(t!=null)C.a.C(t.ga6(t).b,this)
this.a=null},
by:function(){var t=this.b
if(t!=null)C.a.C(t.ga6(t).c,this)
this.b=null},
ar:function(a,b){var t,s=b.a
if(s==null)throw H.c(P.V("May not replace a line's vertex with a vertex which is not attached to a shape."))
t=a.a
if(t!==s)throw H.c(P.V("May not replace a line's vertex with a vertex attached to a different shape."))},
j:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.t()},
n:function(a){var t=this.a,s=t==null
if(s||this.b==null)return a+"disposed"
t=s?null:t.gv(t)
t=a+C.b.a8(C.c.h(t==null?-1:t),0)+", "
s=this.b
s=s==null?null:s.gv(s)
return t+C.b.a8(C.c.h(s==null?-1:s),0)},
t:function(){return this.n("")}}
F.ic.prototype={}
F.iZ.prototype={
aN:function(a,b,c){var t,s=null,r=b.a
r=r==null?s:r.gv(r)
t=c.a
if(r==(t==null?s:t.gv(t))){r=b.b
r=r==null?s:r.gv(r)
t=c.b
return r==(t==null?s:t.gv(t))}else{r=b.a
r=r==null?s:r.gv(r)
t=c.b
if(r==(t==null?s:t.gv(t))){r=b.b
r=r==null?s:r.gv(r)
t=c.a
return r==(t==null?s:t.gv(t))}else return!1}}}
F.is.prototype={
j:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.t()},
n:function(a){var t=this.a
if(t==null)return a+"disposed"
t=t.gv(t)
return a+C.b.a8(C.c.h(t),0)},
t:function(){return this.n("")}}
F.iB.prototype={
gV:function(){var t=this.a
return t==null?this.a=new F.z(this,[]):t},
gaC:function(a){var t=this.b
return t==null?this.b=new F.co(this,[]):t},
ga6:function(a){var t=this.c
return t==null?this.c=new F.dk(this,[]):t},
gN:function(){var t=this.d
return t==null?this.d=new F.eT(this,[]):t},
gI:function(){var t=this.e
return t==null?this.e=D.c4():t},
b9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=e.e
if(c!=null)++c.d
a.gV().a1()
t=e.gV().c.length
for(c=a.gV().c,s=c.length,r=0;r<c.length;c.length===s||(0,H.H)(c),++r){q=c[r]
p=e.a
if(p==null)p=e.a=new F.z(e,[])
p.u(0,q.bE())}e.gV().a1()
for(c=a.gaC(a).b,s=c.length,r=0;r<c.length;c.length===s||(0,H.H)(c),++r){o=c[r]
p=e.a
if(p==null)p=e.a=new F.z(e,[])
n=o.a
if(n==null)n=d
else{m=n.a
if(m!=null){l=m.a;(l==null?m.a=new F.z(m,[]):l).a1()}n=n.e}n=(n==null?0:n)+t
p=p.c
if(n>=p.length)return H.d(p,n)
k=p[n]
n=e.b
p=(n==null?e.b=new F.co(e,[]):n).a
n=p.a;(n==null?p.a=new F.z(p,[]):n).u(0,k)
p=new F.is()
if(k.a==null)H.a6(P.V("May not create a point with a vertex which is not attached to a shape."))
p.a=k
n=k.b;(n==null?k.b=new F.b0([]):n).b.push(p)
n=p.a
if(n!=null){n=n.a
if(n!=null){m=n.b;(m==null?n.b=new F.co(n,[]):m).b.push(p)}}p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.a_(d)}}}for(c=a.ga6(a).b,s=c.length,r=0;r<c.length;c.length===s||(0,H.H)(c),++r){j=c[r]
p=e.a
if(p==null)p=e.a=new F.z(e,[])
n=j.a
if(n==null)n=d
else{m=n.a
if(m!=null){l=m.a;(l==null?m.a=new F.z(m,[]):l).a1()}n=n.e}n=(n==null?0:n)+t
p=p.c
if(n>=p.length)return H.d(p,n)
i=p[n]
n=e.a
p=n==null?e.a=new F.z(e,[]):n
n=j.b
if(n==null)n=d
else{m=n.a
if(m!=null){l=m.a;(l==null?m.a=new F.z(m,[]):l).a1()}n=n.e}n=(n==null?0:n)+t
p=p.c
if(n>=p.length)return H.d(p,n)
h=p[n]
n=e.c
p=(n==null?e.c=new F.dk(e,[]):n).a
n=p.a;(n==null?p.a=new F.z(p,[]):n).u(0,i)
n=p.a;(n==null?p.a=new F.z(p,[]):n).u(0,h)
p=new F.ib()
n=i.a
if(n==null)H.a6(P.V("May not create a line with a start vertex which is not attached to a shape."))
if(n!=h.a)H.a6(P.V("May not create a line with vertices attached to different shapes."))
p.a=i
n=i.c;(n==null?i.c=new F.ar([],[]):n).b.push(p)
p.b=h
n=h.c;(n==null?h.c=new F.ar([],[]):n).c.push(p)
n=p.a
if(n!=null){n=n.a
if(n!=null){m=n.c;(m==null?n.c=new F.dk(n,[]):m).b.push(p)}}p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.a_(d)}}}for(c=a.gN().b,s=c.length,r=0;r<c.length;c.length===s||(0,H.H)(c),++r){g=c[r]
p=e.a
if(p==null)p=e.a=new F.z(e,[])
n=g.a
if(n==null)n=d
else{m=n.a
if(m!=null){l=m.a;(l==null?m.a=new F.z(m,[]):l).a1()}n=n.e}n=(n==null?0:n)+t
p=p.c
if(n>=p.length)return H.d(p,n)
i=p[n]
n=e.a
p=n==null?e.a=new F.z(e,[]):n
n=g.b
if(n==null)n=d
else{m=n.a
if(m!=null){l=m.a;(l==null?m.a=new F.z(m,[]):l).a1()}n=n.e}n=(n==null?0:n)+t
p=p.c
if(n>=p.length)return H.d(p,n)
h=p[n]
n=e.a
p=n==null?e.a=new F.z(e,[]):n
n=g.c
if(n==null)n=d
else{m=n.a
if(m!=null){l=m.a;(l==null?m.a=new F.z(m,[]):l).a1()}n=n.e}n=(n==null?0:n)+t
p=p.c
if(n>=p.length)return H.d(p,n)
f=p[n]
n=e.d
p=(n==null?e.d=new F.eT(e,[]):n).a
n=p.a;(n==null?p.a=new F.z(p,[]):n).u(0,i)
n=p.a;(n==null?p.a=new F.z(p,[]):n).u(0,h)
n=p.a;(n==null?p.a=new F.z(p,[]):n).u(0,f)
new F.aR().aG(i,h,f)}c=e.e
if(c!=null)c.bc(0)},
aw:function(){var t,s=this,r=s.e
if(r!=null)++r.d
t=s.gN().aw()||!1
if(!s.gV().aw())t=!1
r=s.e
if(r!=null)r.bc(0)
return t},
e8:function(a,b){var t,s,r,q,p,o,n,m=this
m.gV().u(0,a)
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.H)(b),++s){r=b[s]
while(!0){q=r.d
if(q==null){q=r.d=new F.aq([],[],[])
p=q}else p=q
if(!(q.b.length+q.c.length+q.d.length>0))break
q=p.l(0,0)
p=q.a
if(p==null||q.b==null||q.c==null)H.a6(P.V("May not replace a face's vertex when the point has been disposed."))
if(J.I(p,r)){q.ar(r,a)
p=q.a
if(p!=null){o=p.d
C.a.C((o==null?p.d=new F.aq([],[],[]):o).b,q)}q.a=null
q.a=a
p=a.d;(p==null?a.d=new F.aq([],[],[]):p).b.push(q)
n=1}else n=0
if(J.I(q.b,r)){q.ar(r,a)
p=q.b
if(p!=null){o=p.d
C.a.C((o==null?p.d=new F.aq([],[],[]):o).c,q)}q.b=null
q.b=a
p=a.d;(p==null?a.d=new F.aq([],[],[]):p).c.push(q);++n}if(J.I(q.c,r)){q.ar(r,a)
p=q.c
if(p!=null){o=p.d
C.a.C((o==null?p.d=new F.aq([],[],[]):o).d,q)}q.c=null
q.c=a
p=a.d;(p==null?a.d=new F.aq([],[],[]):p).d.push(q);++n}if(n>0){q=q.a
if(q!=null){q=q.a
if(q!=null){q=q.e
if(q!=null)q.a_(null)}}}}while(!0){q=r.c
if(q==null){q=r.c=new F.ar([],[])
p=q}else p=q
if(!(q.b.length+q.c.length>0))break
q=p.l(0,0)
p=q.a
if(p==null||q.b==null)H.a6(P.V("May not replace a line's vertex when the point has been disposed."))
if(J.I(p,r)){q.ar(r,a)
p=q.a
if(p!=null){o=p.c
C.a.C((o==null?p.c=new F.ar([],[]):o).b,q)}q.a=null
q.a=a
p=a.c;(p==null?a.c=new F.ar([],[]):p).b.push(q)
n=1}else n=0
if(J.I(q.b,r)){q.ar(r,a)
p=q.b
if(p!=null){o=p.c
C.a.C((o==null?p.c=new F.ar([],[]):o).c,q)}q.b=null
q.b=a
p=a.c;(p==null?a.c=new F.ar([],[]):p).c.push(q);++n}if(n>0){q=q.a
if(q!=null){q=q.a
if(q!=null){q=q.e
if(q!=null)q.a_(null)}}}}while(!0){q=r.b
if(q==null){q=r.b=new F.b0([])
p=q}else p=q
if(!(q.b.length>0))break
q=p.b
if(0>=q.length)return H.d(q,0)
q=q[0]
p=q.a
if(p==null)H.a6(P.V("May not replace a point's vertex when the point has been disposed."))
if(J.I(p,r)){if(a.a==null)H.a6(P.V("May not replace a point's vertex with a vertex which is not attached to a shape."))
p=q.a
if(p!=null){o=p.b
C.a.C((o==null?p.b=new F.b0([]):o).b,q)}q.a=null
q.a=a
p=a.b;(p==null?a.b=new F.b0([]):p).b.push(q)
n=1}else n=0
if(n>0){q=q.a
if(q!=null){q=q.a
if(q!=null){q=q.e
if(q!=null)q.a_(null)}}}}q=m.a;(q==null?m.a=new F.z(m,[]):q).C(0,r)}},
ct:function(a,b){var t,s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
t=n.gV().c.slice(0)
for(;t.length!==0;){s=C.a.geI(t)
C.a.bN(t,0)
r=[]
r.push(s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.d(t,q)
p=t[q]
if(a.aN(0,s,p)){r.push(p)
C.a.bN(t,q)}}if(r.length>1){o=b.b9(r)
if(o!=null){n.e8(o,r)
t.push(o)}}}n.gV().a1()
n.ga6(n).bO()
n.gN().bO()
n.gaC(n).f4()
n.ga6(n).bP(new F.iZ())
n.gN().bP(new F.iF())
m=n.e
if(m!=null)m.bc(0)},
h:function(a){var t=this,s="   ",r=[]
if(t.gV().c.length!==0){r.push("Vertices:")
r.push(t.gV().n(s))}if(t.gaC(t).b.length!==0){r.push("Points:")
r.push(t.gaC(t).n(s))}if(t.ga6(t).b.length!==0){r.push("Lines:")
r.push(t.ga6(t).n(s))}if(t.gN().b.length!==0){r.push("Faces:")
r.push(t.gN().n(s))}return C.a.B(r,"\n")},
R:function(){var t=this.e
return t==null?null:t.a_(null)}}
F.eT.prototype={
ep:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){(m==null?t.a=new F.z(t,[]):m).u(0,l)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,k)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,i)
g=new F.aR()
g.aG(l,k,i)
f.push(g)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,l)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,i)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,h)
g=new F.aR()
g.aG(l,i,h)
f.push(g)}else{(m==null?t.a=new F.z(t,[]):m).u(0,k)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,i)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,h)
g=new F.aR()
g.aG(k,i,h)
f.push(g)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,k)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,h)
m=t.a;(m==null?t.a=new F.z(t,[]):m).u(0,l)
g=new F.aR()
g.aG(k,h,l)
f.push(g)}o=!o}q=!q}return f},
gm:function(a){return this.b.length},
bP:function(a){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.gV().c.length-1;s>=0;--s){r=t.a
r=(r==null?t.a=new F.z(t,[]):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.d
if(r==null)r=q.d=new F.aq([],[],[])
p=r.b.length+r.c.length+r.d.length-1
for(;p>=0;p=n){r=q.d
o=(r==null?q.d=new F.aq([],[],[]):r).l(0,p)
for(n=p-1,m=n;m>=0;--m){r=q.d
if(a.aN(0,o,(r==null?q.d=new F.aq([],[],[]):r).l(0,m))){o.aJ()
break}}}}},
bO:function(){var t,s,r
for(t=this.b,s=t.length-1;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(r.gez(r))r.aJ()}},
aw:function(){var t,s,r,q
for(t=this.b,s=t.length,r=!0,q=0;q<t.length;t.length===s||(0,H.H)(t),++q)if(!t[q].bD())r=!1
return r},
h:function(a){return this.t()},
n:function(a){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(a))
return C.a.B(q,"\n")},
t:function(){return this.n("")}}
F.dk.prototype={
gm:function(a){return this.b.length},
bP:function(a){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.gV().c.length-1;s>=0;--s){r=t.a
r=(r==null?t.a=new F.z(t,[]):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
if(r==null)r=q.c=new F.ar([],[])
p=r.b.length+r.c.length-1
for(;p>=0;p=n){r=q.c
o=(r==null?q.c=new F.ar([],[]):r).l(0,p)
for(n=p-1,m=n;m>=0;--m){r=q.c
if(a.aN(0,o,(r==null?q.c=new F.ar([],[]):r).l(0,m))){o.aJ()
break}}}}},
bO:function(){var t,s,r
for(t=this.b,s=t.length-1;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(J.I(r.a,r.b))r.aJ()}},
h:function(a){return this.t()},
n:function(a){var t,s=[],r=this.b,q=r.length
for(t=0;t<q;++t){if(t>=r.length)return H.d(r,t)
s.push(r[t].n(a+(""+t+". ")))}return C.a.B(s,"\n")},
t:function(){return this.n("")}}
F.co.prototype={
gm:function(a){return this.b.length},
f4:function(){var t,s,r,q,p,o,n
for(t=this.b,s=t.length-1;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
q=r.a
p=q==null
if(p)o=null
else{n=q.b
n=(n==null?q.b=new F.b0([]):n).b.length
o=n}if((o==null?0:o)>1){if(!p){q=q.a
if(q!=null){p=q.b
C.a.C((p==null?q.b=new F.co(q,[]):p).b,r)}q=r.a
if(q!=null){q=q.a
if(q!=null){q=q.e
if(q!=null)q.a_(null)}}}q=r.a
if(q!=null){p=q.b
C.a.C((p==null?q.b=new F.b0([]):p).b,r)}r.a=null}}},
h:function(a){return this.t()},
n:function(a){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(a))
return C.a.B(q,"\n")},
t:function(){return this.n("")}}
F.dr.prototype={
bF:function(a){var t=this,s=t.f,r=t.r,q=t.x,p=t.y,o=t.z,n=t.Q,m=t.ch
return F.lA(t.cx,q,n,s,r,p,o,a,m)},
bE:function(){return this.bF(null)},
gaC:function(a){var t=this.b
return t==null?this.b=new F.b0([]):t},
ga6:function(a){var t=this.c
return t==null?this.c=new F.ar([],[]):t},
gN:function(){var t=this.d
return t==null?this.d=new F.aq([],[],[]):t},
gv:function(a){var t=this.a
if(t!=null)t.gV().a1()
return this.e},
sb8:function(a,b){var t
if(!J.I(this.f,b)){this.f=b
t=this.a
if(t!=null)t.R()}},
sbK:function(a){var t
a=a==null?null:a.Y()
if(!J.I(this.r,a)){this.r=a
t=this.a
if(t!=null)t.R()}},
sey:function(a){},
scL:function(a){var t
if(!J.I(this.y,a)){this.y=a
t=this.a
if(t!=null)t.R()}},
sbR:function(a){var t
if(!J.I(this.z,a)){this.z=a
t=this.a
if(t!=null)t.R()}},
scn:function(a,b){var t
if(!J.I(this.Q,b)){this.Q=b
t=this.a
if(t!=null)t.R()}},
scS:function(a,b){var t
if(this.ch!==b){this.ch=b
t=this.a
if(t!=null)t.R()}},
bD:function(){var t,s,r,q=this,p={}
if(q.r!=null)return!0
t=q.a
s=t!=null
if(s){r=t.e
if(r!=null)++r.d}p.a=V.b_()
q.gN().M(0,new F.j8(p))
q.r=p.a.Y()
if(s){t.R()
p=t.e
if(p!=null)p.bc(0)}return!0},
j:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.t()},
n:function(a){var t,s,r=this,q=null,p="-",o=[]
o.push(C.b.a8(C.c.h(r.e),0))
t=r.f
t=t==null?q:t.t()
o.push(t==null?p:t)
t=r.r
t=t==null?q:t.t()
o.push(t==null?p:t)
o.push(p)
t=r.y
t=t==null?q:t.t()
o.push(t==null?p:t)
t=r.z
t=t==null?q:t.t()
o.push(t==null?p:t)
t=r.Q
t=t==null?q:t.t()
o.push(t==null?p:t)
o.push(V.y(r.ch,3,0))
t=r.cx
t=t==null?q:t.t()
o.push(t==null?p:t)
s=C.a.B(o,", ")
return a+"{"+s+"}"},
t:function(){return this.n("")}}
F.j8.prototype={
$1:function(a){var t,s=a.d
if(s!=null){t=this.a
t.a=t.a.W(0,s)}},
$S:12}
F.z.prototype={
a1:function(){var t,s,r
if(this.b){t=this.c
s=t.length
for(r=0;r<s;++r)t[r].e=r
this.b=!1}},
u:function(a,b){var t,s=b.a
if(s!=null){if(s===this.a)return!1
throw H.c(P.V("May not add a vertex already attached to another shape to this shape."))}s=this.c
b.e=s.length
t=this.a
b.a=t
s.push(b)
t.R()
return!0},
cl:function(a,b,c){var t=null,s=F.lA(t,t,a,b,t,c,t,t,0)
this.u(0,s)
return s},
eq:function(a){return this.cl(null,a,null)},
ck:function(a,b){return this.cl(a,null,b)},
gm:function(a){return this.c.length},
C:function(a,b){var t,s=this.a
if(b.a!==s)return!1
if(b.gaC(b).b.length===0){t=b.ga6(b)
if(t.b.length===0&&t.c.length===0){t=b.gN()
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.V("May not remove a vertex without first making it empty."))
b.a=null
C.a.C(this.c,b)
s.R()
return this.b=!0},
aw:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)t[r].bD()
return!0},
h:function(a){return this.t()},
n:function(a){var t,s,r,q
this.a1()
t=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q)t.push(s[q].n(a))
return C.a.B(t,"\n")},
t:function(){return this.n("")}}
F.aq.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
l:function(a,b){var t,s=this.b,r=s.length
if(b<r){if(b<0)return H.d(s,b)
return s[b]}b-=r
s=this.c
t=s.length
if(b<t){if(b<0)return H.d(s,b)
return s[b]}b-=t
s=this.d
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
M:function(a,b){var t=this
C.a.M(t.b,b)
C.a.M(t.c,new F.j3(t,b))
C.a.M(t.d,new F.j4(t,b))},
h:function(a){return this.t()},
t:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(""))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(""))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(""))
return C.a.B(q,"\n")}}
F.j3.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)},
$S:12}
F.j4.prototype={
$1:function(a){var t=this.a
if(!J.I(a.a,t)&&!J.I(a.b,t))this.b.$1(a)},
$S:12}
F.ar.prototype={
gm:function(a){return this.b.length+this.c.length},
l:function(a,b){var t,s=this.b,r=s.length
if(b>=r){s=this.c
t=b-r
if(t<0||t>=s.length)return H.d(s,t)
return s[t]}else{if(b<0)return H.d(s,b)
return s[b]}},
h:function(a){return this.t()},
t:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(""))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(""))
return C.a.B(q,"\n")}}
F.j6.prototype={}
F.fl.prototype={
aN:function(a,b,c){return J.I(b.f,c.f)}}
F.j7.prototype={}
F.j5.prototype={
b9:function(a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(t=a5.length,s=a4,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<t;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.o(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.p(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.y
if(d!=null){r=r==null?d:new V.R(r.a+d.a,r.b+d.b);++l}c=g.z
if(c!=null){s=s==null?c:new V.p(s.a+c.a,s.b+c.b,s.c+c.c);++k}b=g.Q
if(b!=null){a=b.a
a0=b.b
a1=b.c
a2=b.d
if(q==null){a=[a,a0,a1,a2]
q=new V.aD(a[0],a[1],a[2],a[3])}else{a=[a,a0,a1,a2]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
q=new V.aD(q.a+a0,q.b+a1,q.c+a2,q.d+a)}++m}i+=g.ch;++j}a3=F.lA(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sb8(0,a4)
else a3.sb8(0,o.a9(0,n))
if(p==null)a3.sbK(a4)
else a3.sbK(p.Y())
a3.sey(a4)
if(l<=0||r==null)a3.scL(a4)
else a3.scL(r.a9(0,l))
if(k<=0||s==null)a3.sbR(a4)
else a3.sbR(s.a9(0,k))
if(m<=0||q==null)a3.scn(0,a4)
else{t=q.a9(0,m)
t=[t.a,t.b,t.c,t.d]
a=t[0]
a0=t[1]
a1=t[2]
t=t[3]
a3.scn(0,new V.bG(V.hs(a),V.hs(a0),V.hs(a1),V.hs(t)))}if(j<=0)a3.scS(0,0)
else a3.scS(0,i/j)
return a3}}
F.iq.prototype={
b9:function(a){var t,s,r,q=V.b_()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)q=new V.p(q.a+r.a,q.b+r.b,q.c+r.c)}q=q.Y()
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.H)(a),++s)a[s].sbK(q)
return null}}
F.b0.prototype={
gm:function(a){return this.b.length},
h:function(a){return this.t()},
t:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)q.push(t[r].n(""))
return C.a.B(q,"\n")}}
O.hO.prototype={
gI:function(){var t=this.c
return t==null?this.c=D.c4():t},
f5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="            ",e=a.cy,d=e.gaO(e)
e=a.db
t=e.gaO(e)
e=a.dx
s=e.gaO(e)
r=this.a
r.a+="Object:     "+s.n(f)+"\n\n"
r.a+="View:       "+t.n(f)+"\n\n"
r.a+="Projection: "+d.n(f)+"\n\n"
e=this.b
C.a.sm(e,0)
q=b.c
if(q!=null){p=q.gV()
q=p.c
o=q.length
for(n=0;n<o;++n){if(n>=q.length)return H.d(q,n)
m=q[n].f
if(m==null){l=$.it
if(l==null){l=new V.o(0,0,0)
$.it=l
m=l}else m=l}k=new V.bn(m.a,m.b,m.c,1)
j=s.be(k)
i=t.be(j)
h=d.be(i)
g=new V.o(h.a,h.b,h.c).a9(0,h.d)
r.a+=k.a5(3,2)+" => "+j.a5(3,2)+" => "+i.a5(3,2)+" => "+h.a5(3,2)+" => "+g.a5(3,2)+"\n"
e.push(g)}}}}
O.iK.prototype={}
X.i3.prototype={
gI:function(){var t=this.x
return t==null?this.x=D.c4():t}}
X.eK.prototype={
gI:function(){var t=this.f
return t==null?this.f=D.c4():t},
as:function(a){var t=this.f
return t==null?null:t.a_(a)},
dw:function(){return this.as(null)},
saP:function(a){var t,s,r=this
if(!J.I(r.b,a)){t=r.b
if(t!=null)t.gI().C(0,r.gcc())
s=r.b
r.b=a
if(a!=null)a.gI().u(0,r.gcc())
r.as(new D.ai("mover",s,r.b))}}}
X.iJ.prototype={}
V.iC.prototype={
er:function(a){var t,s,r,q,p,o,n=this.eg(),m=document,l=m.createElement("div")
l.className="textPar"
for(t=new H.a0(C.a.eN(a)),t=new P.cA(n.cP(new H.bL(t,t.gm(t))).a());t.A();){s=t.gF(t)
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
if(H.na(s,"|",0)){q=s.split("|")
p=m.createElement("a")
p.className="linkPar"
if(1>=q.length)return H.d(q,1)
p.href=q[1]
p.textContent=q[0]
l.appendChild(p).toString}else{o=P.oX(C.T,s,C.r,!1)
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
eg:function(){var t,s,r="Start",q="Bold",p="Italic",o="ItalicEnd",n="Code",m="LinkHead",l="LinkTail",k="LinkEnd",j="Other",i=this.b
if(i!=null)return i
t=u.N
i=new L.iT(P.eu(t,u.U),P.eu(t,u.D),P.d2(t))
i.d=i.J(0,r)
t=i.J(0,r).B(0,q)
s=new K.a4([])
s.S(new H.a0("*"))
t.a.push(s)
t.c=!0
t=[]
i.J(0,q).B(0,q).a.push(new K.bl(t))
s=new K.a4([])
s.S(new H.a0("*"))
t.push(s)
s=i.J(0,q).B(0,"BoldEnd")
t=new K.a4([])
t.S(new H.a0("*"))
s.a.push(t)
s.c=!0
s=i.J(0,r).B(0,p)
t=new K.a4([])
t.S(new H.a0("_"))
s.a.push(t)
s.c=!0
s=[]
i.J(0,p).B(0,p).a.push(new K.bl(s))
t=new K.a4([])
t.S(new H.a0("_"))
s.push(t)
t=i.J(0,p).B(0,o)
s=new K.a4([])
s.S(new H.a0("_"))
t.a.push(s)
t.c=!0
t=i.J(0,r).B(0,n)
s=new K.a4([])
s.S(new H.a0("`"))
t.a.push(s)
t.c=!0
t=[]
i.J(0,n).B(0,n).a.push(new K.bl(t))
s=new K.a4([])
s.S(new H.a0("`"))
t.push(s)
s=i.J(0,n).B(0,"CodeEnd")
t=new K.a4([])
t.S(new H.a0("`"))
s.a.push(t)
s.c=!0
s=i.J(0,r).B(0,m)
t=new K.a4([])
t.S(new H.a0("["))
s.a.push(t)
s.c=!0
s=i.J(0,m).B(0,l)
t=new K.a4([])
t.S(new H.a0("|"))
s.a.push(t)
t=i.J(0,m).B(0,k)
s=new K.a4([])
s.S(new H.a0("]"))
t.a.push(s)
t.c=!0
t=[]
i.J(0,m).B(0,m).a.push(new K.bl(t))
s=new K.a4([])
s.S(new H.a0("|]"))
t.push(s)
s=i.J(0,l).B(0,k)
t=new K.a4([])
t.S(new H.a0("]"))
s.a.push(t)
s.c=!0
s=[]
i.J(0,l).B(0,l).a.push(new K.bl(s))
t=new K.a4([])
t.S(new H.a0("|]"))
s.push(t)
i.J(0,r).B(0,j).a.push(new K.hz())
t=[]
i.J(0,j).B(0,j).a.push(new K.bl(t))
s=new K.a4([])
s.S(new H.a0("*_`["))
t.push(s)
s=i.J(0,"BoldEnd")
s.d=s.a.aV(q)
s=i.J(0,o)
s.d=s.a.aV(p)
s=i.J(0,"CodeEnd")
s.d=s.a.aV(n)
s=i.J(0,k)
s.d=s.a.aV("Link")
s=i.J(0,j)
s.d=s.a.aV(j)
return this.b=i}}
V.iE.prototype={
$1:function(a){P.f9(C.i,new V.iD(this.a))},
$S:4}
V.iD.prototype={
$0:function(){var t,s,r=document.documentElement
if(r==null)t=null
else{r=r.scrollTop
r.toString
r=C.d.ac(r)
t=r}if(t==null)t=0
r=this.a.style
r.toString
s=H.k(-0.01*t)+"px"
r.top=s},
$S:1}
Q.h.prototype={
gZ:function(){var t=this.a
if(t>=1)if(t<=8){t=this.b
t=t>=1&&t<=8}else t=!1
else t=!1
return t},
gv:function(a){return this.gZ()?(this.a-1)*8+(this.b-1):-1},
cN:function(){if(this.gZ()){var t=this.b-1
if(t<0||t>=8)return H.d("abcdefgh",t)
t="abcdefgh"[t]+(9-this.a)}else t="xx"
return t},
h:function(a){return""+this.a+" "+this.b},
j:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.h))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.ah.prototype={
h:function(a){var t=this,s=t.d,r=s!=null?", "+s.h(0)+" => "+H.k(t.e):""
return t.a+", "+t.b.h(0)+" => "+t.c.h(0)+r}}
Q.dn.prototype={
bE:function(){var t,s,r,q=Q.lv()
for(t=q.a,s=this.a,r=0;r<64;++r)t[r]=s[r]
return q},
D:function(a){var t,s
if(!a.gZ())return $.lV()
t=a.gv(a)
s=this.a
if(t<0||t>=64)return H.d(s,t)
return new Q.t(s[t])},
w:function(a,b){var t,s,r
if(!a.gZ())return!1
t=this.a
s=a.gv(a)
r=b.a
if(s<0||s>=64)return H.d(t,s)
t[s]=r
return!0},
cp:function(a){var t,s,r=$.hw(),q=new Q.t((a.a&r.a)>>>0)
for(t=this.a,s=0;s<64;++s)if(new Q.t((t[s]&r.a)>>>0).j(0,q))return Q.mc(s)
return new Q.h(0,0)},
bH:function(a){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=$.bz(),g=a?$.b5():$.hv(),f=i.cp(new Q.t((h.a|g.a|$.bX().a&1)>>>0))
if(!f.gZ())return!1
t=a?-1:1
h=f.a
g=h+t
s=f.b
r=s+1
q=!a
p=$.cK()
if(i.H(new Q.h(g,r),q,[p]))return!0
o=s+-1
if(i.H(new Q.h(g,o),q,[p]))return!0
g=h+2
p=$.cJ()
if(i.H(new Q.h(g,r),q,[p]))return!0
if(i.H(new Q.h(g,o),q,[p]))return!0
g=h+1
n=s+2
if(i.H(new Q.h(g,n),q,[p]))return!0
m=h+-1
if(i.H(new Q.h(m,n),q,[p]))return!0
n=h+-2
if(i.H(new Q.h(n,r),q,[p]))return!0
if(i.H(new Q.h(n,o),q,[p]))return!0
n=s+-2
if(i.H(new Q.h(g,n),q,[p]))return!0
if(i.H(new Q.h(m,n),q,[p]))return!0
for(p=h>=1,n=h<=8,l=1;l<8;++l){k=s+l
j=new Q.h(h,k)
if(i.H(j,q,[$.aN(),$.at()]))return!0
if(!(p&&n&&k>=1&&k<=8&&i.D(j).a===$.X().a))break}for(l=1;l<8;++l){k=s+-l
j=new Q.h(h,k)
if(i.H(j,q,[$.aN(),$.at()]))return!0
if(!(p&&n&&k>=1&&k<=8&&i.D(j).a===$.X().a))break}for(p=s>=1,n=s<=8,l=1;l<8;++l){k=h+l
j=new Q.h(k,s)
if(i.H(j,q,[$.aN(),$.at()]))return!0
if(!(k>=1&&k<=8&&p&&n&&i.D(j).a===$.X().a))break}for(l=1;l<8;++l){k=h+-l
j=new Q.h(k,s)
if(i.H(j,q,[$.aN(),$.at()]))return!0
if(!(k>=1&&k<=8&&p&&n&&i.D(j).a===$.X().a))break}for(l=1;l<8;++l){p=h+l
n=s+l
j=new Q.h(p,n)
if(i.H(j,q,[$.b4(),$.at()]))return!0
if(!(p>=1&&p<=8&&n>=1&&n<=8&&i.D(j).a===$.X().a))break}for(l=1;l<8;++l){p=h+l
n=s+-l
j=new Q.h(p,n)
if(i.H(j,q,[$.b4(),$.at()]))return!0
if(!(p>=1&&p<=8&&n>=1&&n<=8&&i.D(j).a===$.X().a))break}for(l=1;l<8;++l){p=h+-l
n=s+l
j=new Q.h(p,n)
if(i.H(j,q,[$.b4(),$.at()]))return!0
if(!(p>=1&&p<=8&&n>=1&&n<=8&&i.D(j).a===$.X().a))break}for(l=1;l<8;++l){p=-l
n=h+p
p=s+p
j=new Q.h(n,p)
if(i.H(j,q,[$.b4(),$.at()]))return!0
if(!(n>=1&&n<=8&&p>=1&&p<=8&&i.D(j).a===$.X().a))break}p=$.bz()
if(i.H(new Q.h(g,r),q,[p]))return!0
if(i.H(new Q.h(g,s),q,[p]))return!0
if(i.H(new Q.h(g,o),q,[p]))return!0
if(i.H(new Q.h(h,o),q,[p]))return!0
if(i.H(new Q.h(m,o),q,[p]))return!0
if(i.H(new Q.h(m,s),q,[p]))return!0
if(i.H(new Q.h(m,r),q,[p]))return!0
if(i.H(new Q.h(h,r),q,[p]))return!0
return!1},
H:function(a,b,c){var t,s,r,q,p
if(a.gZ()){t=this.D(a)
s=$.b5()
r=t.a
s=s.a
if((r&s)>>>0===s===b){s=$.bY()
q=new Q.t((r&s.a)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.d(c,p)
if(q.j(0,new Q.t((c[p].a&s.a)>>>0)))return!0}}}return!1},
eJ:function(a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="Pawn en passent "
if(!a3.gZ())return
t=a.D(a3)
s=new Q.iG(a,t,a2)
r=new Q.t((t.a&$.bY().a)>>>0)
if(r.j(0,$.cK())){t=a.D(a3)
q=$.b5()
p=t.a
q=q.a
o=(p&q)>>>0===q
n=$.bA().a
m=o?-1:1
l=a3.a
k=l+m
j=a3.b
i=new Q.h(k,j)
h=a.D(i).a
g=$.X().a
if(h===g){s.$1(new Q.ah("Pawn move to "+i.h(0),a3,i,a0,a0))
if((p&n)>>>0!==n){i=new Q.h(l+(m+m),j)
if(a.D(i).a===g)s.$1(new Q.ah("Pawn move to "+i.h(0),a3,i,a0,a0))}}p=j+-1
i=new Q.h(k,p)
f=a.D(i)
h=f.a
e=$.lV().a
if(h!==e&&h!==g&&(h&q)>>>0===q!==o)s.$1(new Q.ah("Pawn take "+f.gan()+" at "+i.h(0),a3,i,i,a0));++j
i=new Q.h(k,j)
f=a.D(i)
h=f.a
if(h!==e&&h!==g&&(h&q)>>>0===q!==o)s.$1(new Q.ah("Pawn take "+f.gan()+" at "+i.h(0),a3,i,i,a0))
d=a.c
if(d!=null)h=l===(o?4:5)
else h=!1
if(h){i=new Q.h(k,p)
if(i.gZ()&&a.D(i).a===g){c=new Q.h(l,p)
f=a.D(c)
h=f.a
if(h!==g&&(h&q)>>>0===q!==o){b=d.D(new Q.h(l+(m+m),p))
if((b.a&n)>>>0!==n&&b.bY(f))s.$1(new Q.ah(a1+f.gan()+" at "+i.h(0),a3,i,c,a0))}}i=new Q.h(k,j)
if(i.gZ()&&a.D(i).a===g){c=new Q.h(l,j)
f=a.D(c)
p=f.a
if(p!==g&&(p&q)>>>0===q!==o){b=d.D(new Q.h(l+(m+m),j))
if((b.a&n)>>>0!==n&&b.bY(f))s.$1(new Q.ah(a1+f.gan()+" at "+i.h(0),a3,i,c,a0))}}}}else if(r.j(0,$.aN()))a.ea(s,a3)
else if(r.j(0,$.cJ())){a.O(s,a3,2,1)
a.O(s,a3,2,-1)
a.O(s,a3,1,2)
a.O(s,a3,-1,2)
a.O(s,a3,-2,1)
a.O(s,a3,-2,-1)
a.O(s,a3,1,-2)
a.O(s,a3,-1,-2)}else if(r.j(0,$.b4())){a.U(s,a3,1,1)
a.U(s,a3,1,-1)
a.U(s,a3,-1,-1)
a.U(s,a3,-1,1)}else if(r.j(0,$.at())){a.U(s,a3,1,1)
a.U(s,a3,1,0)
a.U(s,a3,1,-1)
a.U(s,a3,0,-1)
a.U(s,a3,-1,-1)
a.U(s,a3,-1,0)
a.U(s,a3,-1,1)
a.U(s,a3,0,1)}else if(r.j(0,$.bz()))a.dq(s,a3)},
O:function(a,b,c,d){var t,s,r,q,p,o=new Q.h(b.a+c,b.b+d)
if(!o.gZ())return!0
t=this.D(b)
s=this.D(o)
r=s.a
if(r===$.X().a){a.$1(new Q.ah(t.gan()+" move to "+o.h(0),b,o,null,null))
return!1}q=$.b5()
p=t.a
q=q.a
if((r&q)>>>0===q!==((p&q)>>>0===q))a.$1(new Q.ah(t.gan()+" take "+s.gan()+" at "+o.h(0),b,o,o,null))
return!0},
U:function(a,b,c,d){var t
for(t=1;t<8;++t)if(this.O(a,b,c*t,d*t))return},
ea:function(a,b){var t,s,r,q,p,o=this,n=o.D(b),m=$.b5(),l=n.a
m=m.a
t=$.bA().a
o.U(a,b,0,1)
o.U(a,b,0,-1)
o.U(a,b,1,0)
o.U(a,b,-1,0)
if((l&t)>>>0!==t){s=new Q.h((l&m)>>>0===m?8:1,4)
m=o.D(s).a
if(new Q.t((m&$.bY().a)>>>0).j(0,$.bz())&&(m&t)>>>0!==t){m=b.b
r=m>4?-1:1
p=m+r
m=b.a
while(!0){if(!(p!==4)){q=!0
break}if(o.D(new Q.h(m,p)).a!==$.X().a){q=!1
break}p+=r}if(q){m=s.a
l=4-r-r
a.$1(new Q.ah("Rook castles with King",b,new Q.h(m,l+r),s,new Q.h(m,l)))}}}},
dq:function(a,b){var t,s,r,q,p,o,n,m,l=this,k=l.D(b),j=$.bA(),i=k.a
j=j.a
l.O(a,b,1,1)
l.O(a,b,1,0)
l.O(a,b,1,-1)
l.O(a,b,0,-1)
l.O(a,b,-1,-1)
l.O(a,b,-1,0)
l.O(a,b,-1,1)
l.O(a,b,0,1)
if((i&j)>>>0!==j)for(j=b.a,i=b.b,t=1;t<=8;t+=7){s=new Q.h(j,t)
r=l.D(s).a
if(new Q.t((r&$.bY().a)>>>0).j(0,$.aN())){q=$.bA().a
q=(r&q)>>>0!==q
r=q}else r=!1
if(r){p=i>t?-1:1
n=i+p
m=n
while(!0){if(!(m!==t)){o=!0
break}if(l.D(new Q.h(j,m)).a!==$.X().a){o=!1
break}m+=p}if(o){r=n+p
a.$1(new Q.ah("King castles with Rook",b,new Q.h(j,r),s,new Q.h(j,r-p)))}}}},
bT:function(a,b,c){var t,s,r,q,p,o,n,m,l=this.a,k=0
while(!0){if(!(k<64)){t=!1
break}s=l[k]
r=$.bA().a
if((s&r)>>>0===r){t=!0
break}++k}q=Q.lx(8,8)
q.d=c
for(p=0;p<8;p=o)for(o=p+1,s=(o-1)*8,n=0;n<8;n=m){m=n+1
k=s+(m-1)
if(k<0||k>=64)return H.d(l,k)
q.aW(p,n,new Q.t(l[k]).cO(0,b,t))}return q.h(0)},
h:function(a){return this.bT(a,!1,!0)},
bd:function(a,b){return this.bT(a,b,!0)},
fh:function(a,b){return this.bT(a,!1,b)}}
Q.iG.prototype={
$1:function(a){var t,s=this.a.bE(),r=a.b,q=s.D(r),p=a.d,o=p!=null,n=o?s.D(p):null,m=$.X()
s.w(r,m)
r=n!=null
if(r&&o)s.w(p,m)
o=$.bA()
m=q.a
o=o.a
s.w(a.c,new Q.t((m|o)>>>0))
t=a.e
if(r&&t!=null)s.w(t,new Q.t((n.a|o)>>>0))
r=$.b5().a
if(!s.bH((this.b.a&r)>>>0===r))this.c.$1(a)},
$S:35}
Q.iI.prototype={
br:function(a,b){var t=this.a,s=a*t+b
if(s<0||s>=t*this.b)return-1
return s},
aW:function(a,b,c){var t,s=this.br(a,b)
if(s<0)return
t=this.c
if(s>=t.length)return H.d(t,s)
t[s]=c},
cT:function(a,b){var t,s=this.br(a,b)
if(s<0)return""
t=this.c
if(s>=t.length)return H.d(t,s)
return t[s]},
dr:function(){var t,s,r,q=this.c,p=q.length
if(p<=0)return 0
t=q[0].length
for(s=1;s<p;++s){r=q[s].length
if(r>t)t=r}return t},
h:function(a){var t,s,r,q,p,o,n,m,l,k=this,j=[],i=k.dr()
if(k.d){t=(""+(k.a-1)).length+1
s=C.b.ba("",t+C.c.X(i-1,2))
for(r=k.b,q=i+1,p=0;p<r;){++p
s+=C.b.ba(" "+p,q)}j.push(C.b.fk(s))}else t=0
for(r=k.a,q=k.b,o=k.c,n=o.length,m=0;m<r;++m){s=k.d?C.b.ba(""+(m+1),t):""
for(p=0;p<q;++p){if(k.d||p!==0)s+="|"
l=k.br(m,p)
if(l<0||l>=n)return H.d(o,l)
s+=C.b.ba(o[l],i)}j.push(k.d?s+"|":s)}return C.a.B(j,"\n")}}
Q.t.prototype={
bX:function(a,b){return new Q.t((this.a|b.a)>>>0)},
bY:function(a){var t=$.hw().a
return(this.a&t)>>>0===(a.a&t)>>>0},
j:function(a,b){if(b==null)return!1
if(!(b instanceof Q.t))return!1
return this.a===b.a},
geB:function(){var t=new Q.t((this.a&$.lU().a)>>>0)
if(t.j(0,$.hv()))return"B"
if(t.j(0,$.b5()))return"W"
return" "},
gf2:function(){var t=new Q.t((this.a&$.bY().a)>>>0)
if(t.j(0,$.cK()))return"P"
if(t.j(0,$.aN()))return"R"
if(t.j(0,$.cJ()))return"H"
if(t.j(0,$.b4()))return"B"
if(t.j(0,$.at()))return"Q"
if(t.j(0,$.bz()))return"K"
return" "},
geP:function(){var t=(this.a&$.bX().a)>>>0
if(t===$.X().a)return" "
return""+t},
gan:function(){var t=new Q.t((this.a&$.bY().a)>>>0)
if(t.j(0,$.cK()))return"Pawn"
if(t.j(0,$.aN()))return"Rook"
if(t.j(0,$.cJ()))return"Knight"
if(t.j(0,$.b4()))return"Bishop"
if(t.j(0,$.at()))return"Queen"
if(t.j(0,$.bz()))return"King"
return"Empty"},
cO:function(a,b,c){var t,s,r=this,q=r.a
if(q===$.X().a)return""
if(c){t=$.bA().a
s=(q&t)>>>0===t?"+":" "}else s=""
s=s+r.geB()+r.gf2()
return b?s+r.geP():s},
h:function(a){return this.cO(a,!0,!0)}}
B.aI.prototype={
gaS:function(a){var t=this,s=t.a+1,r=t.d,q=t.f
if(s>=16){r+=16
q=q==null?null:q.gaS(q)
s=0}return new B.aI(s,t.b,t.c,r,t.e,q)},
gaL:function(){var t=this,s=t.c+1,r=t.e,q=t.f
if(s>=16){r+=16
q=q==null?null:q.gaL()
s=0}return new B.aI(t.a,t.b,s,t.d,r,q)},
h:function(a){var t=this
return H.k(t.f)+".block("+t.a+", "+t.b+", "+t.c+", ("+t.d+", "+t.e+"), "+B.nH(t.gag(t))+")"},
gag:function(a){var t=this,s=t.f
s=s==null?null:s.ao(t.a,t.b,t.c)
if(s==null)s=t.b<0?100:0
return s}}
B.hG.prototype={
co:function(a){var t,s,r
for(t=0;t<16;++t)for(s=0;s<16;++s)for(r=0;r<10;++r)a.aE(t,r,s,this.dn(t,r,s))
a.cq()},
dn:function(a,b,c){var t=a===0
if(t||c===0)return t&&c===0?112:110
if(a===1&&c===1)return 110
return C.c.bW(a+b+c,2)===0?113:111}}
B.hH.prototype={
d1:function(a){var t,s,r,q,p,o,n,m,l
for(t=this.c.e,s=t.length,r=this.e,q=0;q<t.length;t.length===s||(0,H.H)(t),++q){p=t[q]
o=E.lk(null)
n=p.y
n.cd([o])
m=n.a
l=m.length
m.push(o)
n=n.c
if(n!=null)n.$2(l,[o])
r.push(o)}},
h:function(a){return"chunk("+this.a+", "+this.b+")"},
cq:function(){var t=this
t.sc9(!1)
t.gb7(t)
t.gaS(t)
t.gaL()
t.gew(t)},
ao:function(a,b,c){var t,s
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
t=this.d
s=(a*48+b)*16+c
if(s<0||s>=12288)return H.d(t,s)
return t[s]},
aE:function(a,b,c,d){var t,s
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
t=this.d
s=(a*48+b)*16+c
if(s<0||s>=12288)return H.d(t,s)
t[s]=d
return!0},
gb7:function(a){return this.c.ak(this.a-16,this.b)},
gaL:function(){return this.c.ak(this.a,this.b+16)},
gaS:function(a){return this.c.ak(this.a+16,this.b)},
gew:function(a){return this.c.ak(this.a,this.b-16)},
sc9:function(a){var t,s,r
for(t=this.e,s=t.length,r=0;r<s;++r)t[r].b=!1}}
B.hI.prototype={
eA:function(a,b,c){var t,s,r=this
r.b=b
r.c=a
r.d=c
r.e=$.aH()
r.df()
for(;r.ei(););t=r.b
s=r.d
r.b=t.W(0,new V.o(s.a,s.b,s.c))
return!0},
df:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.c,b1=a9.b,b2=b0.bV(0,new V.p(b1.a,b1.b,b1.c))
b1=b2.bV(0,a9.d)
b0=b2.a
t=b1.a
s=Math.min(b0,t)
r=Math.max(b0+b2.d,t+b1.d)
t=b2.b
b0=b1.b
q=Math.min(t,b0)
p=Math.max(t+b2.e,b0+b1.e)
b0=b2.c
t=b1.c
o=Math.min(b0,t)
n=Math.max(b0+b2.f,t+b1.f)
b1=a9.a
m=b1.ao(s,q,o)
l=b1.ao(s+(r-s),q+(p-q),o+(n-o))
if(m==null||l==null)return
k=l.a+l.d
j=l.c+l.e
b0=a9.f
C.a.sm(b0,0)
b1=a9.r
C.a.sm(b1,0)
t=a9.x
C.a.sm(t,0)
i=l.b
h=m
while(!0){if(!(h!=null&&h.a+h.d<=k))break
g=h
while(!0){if(!(g!=null&&g.b<=i))break
f=g
while(!0){if(!(f!=null&&f.c+f.e<=j))break
e=f.gag(f)
if(e>=100&&e<=117){d=$.aH()
e=f.a
c=e-1
b=f.d
a=f.f
if(c<0){a0=b-16
a1=a==null?null:a.c.ak(a.a-16,a.b)
c=15}else{a1=a
a0=b}a2=f.b
a3=f.c
a4=f.e
a5=new B.aI(c,a2,a3,a0,a4,a1)
a6=a5.gag(a5)
a6=a6>=100&&a6<=117
if(a6){a6=$.cF()
d=new V.ao(d.a|a6.a)}a5=f.gaS(f)
a6=a5.gag(a5)
a6=a6>=100&&a6<=117
if(a6)d=new V.ao(d.a|$.cG().a)
a5=new B.aI(e,a2-1,a3,b,a4,a)
a6=a5.gag(a5)
a6=a6>=100&&a6<=117
if(a6)d=new V.ao(d.a|$.dY().a)
a5=new B.aI(e,a2+1,a3,b,a4,a)
a6=a5.gag(a5)
a6=a6>=100&&a6<=117
if(a6)d=new V.ao(d.a|$.cH().a)
a7=a3-1
if(a7<0){a8=a4-16
a=a==null?null:a.c.ak(a.a,a.b-16)
a7=15}else a8=a4
a5=new B.aI(e,a2,a7,b,a8,a)
a6=a5.gag(a5)
a6=a6>=100&&a6<=117
if(a6)d=new V.ao(d.a|$.cI().a)
a5=f.gaL()
a6=a5.gag(a5)
a6=a6>=100&&a6<=117
if(a6)d=new V.ao(d.a|$.dZ().a)
a6=$.ng()
if(!d.j(0,a6)){b0.push(V.B(e+b,a2,a3+a4,1,1,1))
e=$.dX().a
b1.push(new V.ao(a6.a&e&~d.a))
t.push(!1)}}f=f.gaL()}g=new B.aI(g.a,g.b+1,g.c,g.d,g.e,g.f)}h=h.gaS(h)}},
ei:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.d.cs())return!1
t=e.c
s=e.b
r=t.bV(0,new V.p(s.a,s.b,s.c))
q=$.aH()
for(t=e.f,s=e.x,p=e.r,o=0,n=-1,m=0;m<t.length;++m){if(m>=s.length)return H.d(s,m)
if(!s[m]){l=t[m]
if(m>=p.length)return H.d(p,m)
k=p[m]
j=e.d
i=$.j2
if(i==null)i=$.j2=new V.p(0,0,0)
h=Y.nb(r,l,j,i,$.dX(),k)
if(h.a===C.e)if(q.j(0,$.aH())||o>h.b){q=h.y
o=h.b
n=m}}}if(q.j(0,$.aH()))return!1
if(n<0||n>=s.length)return H.d(s,n)
s[n]=!0
g=e.d.L(0,o)
f=e.d.L(0,1-o)
if(q.j(0,$.cG())||q.j(0,$.cF())){t=e.b
e.b=new V.o(t.a+g.a,t.b+g.b,t.c+g.c)
e.d=new V.p(0,f.b,f.c)}else if(q.j(0,$.cH())||q.j(0,$.dY())){t=e.b
e.b=new V.o(t.a+g.a,t.b+g.b,t.c+g.c)
e.d=new V.p(f.a,0,f.c)}else if(q.j(0,$.dZ())||q.j(0,$.cI())){t=e.b
e.b=new V.o(t.a+g.a,t.b+g.b,t.c+g.c)
e.d=new V.p(f.a,f.b,0)}e.e=new V.ao(e.e.a|q.a)
return!0},
h:function(a){return"Collider("+this.b.h(0)+", "+H.k(this.e)+")"}}
B.i1.prototype={
co:function(a){var t,s,r,q=this.a,p=this.b,o=Math.max(q,p)
for(t=0;t<16;++t)for(s=0;s<16;++s){for(r=0;r<q;++r)a.aE(t,r,s,103)
for(r=q;r<p;++r)a.aE(t,r,s,101)
a.aE(t,o,s,102)}a.cq()}}
B.j9.prototype={
d3:function(a,b){var t,s,r,q=this,p=[],o=q.e,n=0
for(;!1;++n)o.push(E.lk(p[n]))
for(p=q.c,t=0;t<140;++t)p.push(B.m1(q))
for(p=q.b,s=-32;s<32;s+=16)for(r=-32;r<32;r+=16)p.co(q.cD(s,r))},
ak:function(a,b){var t,s,r,q
for(t=this.d,s=t.length,r=0;r<s;++r){q=t[r]
if(q.a===a&&q.b===b)return q}return null},
ao:function(a,b,c){var t,s,r,q=C.d.aK(a),p=C.d.aK(b),o=C.d.aK(c),n=q<0?q-16+1:q,m=o<0?o-16+1:o
n=C.c.X(n,16)*16
m=C.c.X(m,16)*16
t=this.ak(n,m)
if(t==null)return null
s=q-n
r=o-m
if(s<0)s+=16
return new B.aI(s,p,r<0?r+16:r,n,m,t)},
cD:function(a,b){var t,s=this.c,r=s.length
if(r!==0){if(0>=r)return H.d(s,-1)
s=s.pop()
t=s}else t=null
if(t==null)t=B.m1(this)
t.a=a
t.b=b
t.sc9(!1)
this.d.push(t)
return t}}
M.k_.prototype={
$1:function(a){var t=new Uint8Array(1000)
a.av(1,new M.jZ(t))
a.i("\n"+H.k(t),"info_log")},
$S:0}
M.jZ.prototype={
$0:function(){var t,s,r
for(t=this.a,s=0;s<1000;++s)t[s]=0
for(r=0;r<100;++r)for(s=0;s<1000;++s)t[s]=t[s]+1},
$S:1}
M.k0.prototype={
$1:function(a){var t=P.ev(1000,0,!1)
a.av(1,new M.jY(t))
a.i("\n"+H.k(t),"info_log")},
$S:0}
M.jY.prototype={
$0:function(){var t,s,r
for(t=this.a,s=0;s<1000;++s)t[s]=0
for(r=0;r<100;++r)for(s=0;s<1000;++s)t[s]=t[s]+1},
$S:1}
M.k1.prototype={
$1:function(a){var t={}
t.a=null
a.av(1,new M.jX(t))},
$S:0}
M.jX.prototype={
$0:function(){this.a.a=F.n2(8,null,8)},
$S:1}
M.k2.prototype={
$1:function(a){var t={}
t.a=null
a.av(1,new M.jW(t))},
$S:0}
M.jW.prototype={
$0:function(){var t=F.lS()
this.a.a=t
t.aw()},
$S:1}
M.k3.prototype={
$1:function(a){var t={}
t.a=null
a.av(1,new M.jV(t))},
$S:0}
M.jV.prototype={
$0:function(){var t=F.lS()
this.a.a=t
t.ct(new F.fl(),new F.j5())},
$S:1}
M.k4.prototype={
$1:function(a){var t={}
t.a=null
a.av(1,new M.jU(t))},
$S:0}
M.jU.prototype={
$0:function(){this.a.a=F.lS()},
$S:1}
M.k5.prototype={
$3:function(a,b,c){var t="warning_log",s=C.a.B(c,"\n")
if(s!==b){a.i("Expected:\n  "+H.dW(s,"\n","\n  ")+"\n",t)
a.i("Result:\n  "+H.dW(b,"\n","\n  ")+"\n",t)
a.i("Unexpected string of a chess game state.\n\n","error_log")
a.k()}else a.i(b+"\n\n","info_log")},
$S:37}
M.k6.prototype={
$4:function(a,b,c,d){var t="error_log",s=Q.T(d)
a.i("State:\n"+s.h(0)+"\n","info_log")
if(s.bH(!0)!==b){a.i("Expected IsChecked(white) to return "+b+" but it wasn't.\n",t)
a.k()}if(s.bH(!1)!==c){a.i("Expected IsChecked(black) to return "+c+" but it wasn't\n",t)
a.k()}},
$S:38}
M.k8.prototype={
$4:function(a,b,c,d){var t,s,r,q,p,o,n,m,l="info_log"
a.i("moving "+c+"\n",l)
t=b.cp(Q.mt(c))
s=[]
b.eJ(C.a.gen(s),t)
r=s.length
q=P.ev(r,"",!1)
p=Q.lx(8,8)
p.aW(t.a-1,t.b-1,"O")
for(o=s.length-1;o>=0;--o){if(o>=s.length)return H.d(s,o)
n=s[o]
m=n.h(0)
if(o>=r)return H.d(q,o)
q[o]=m
m=n.c
p.aW(m.a-1,m.b-1,"X")}a.i("Movements:\n"+p.h(0)+"\n",l)
this.a.$3(a,C.a.B(q,"\n"),d)},
$S:39}
M.k7.prototype={
$6:function(a,b,c,d,e,f){var t,s,r,q,p="error_log",o=new Q.h(b,c)
if(o.gZ()!==d){a.i("Unexpected onBoard: "+o.gZ()+" != "+d+"\n",p)
a.k()}if(o.gv(o)!==e){a.i("Unexpected index: "+o.gv(o)+" != "+e+"\n",p)
a.k()}if(o.cN()!==f){a.i("Unexpected notation: "+o.cN()+" != "+f+"\n",p)
a.k()}if(!o.gZ()){t=0
s=0}else{s=c
t=b}r=Q.mc(e)
q=r.a
if(q!==t){a.i("Unexpected row from index: "+q+" != "+t+"\n",p)
a.k()}q=r.b
if(q!==s){a.i("Unexpected column from index: "+q+" != "+s+"\n",p)
a.k()}},
$S:40}
M.k9.prototype={
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
t.$6(a,1,9,!1,-1,"xx")},
$S:0}
M.ka.prototype={
$1:function(a){var t="    1   2   3   4   5   6   7   8",s="1 |BR1|BH1|BB1|BK1|BQ1|BB2|BH2|BR2|",r="2 |BP1|BP2|BP3|BP4|BP5|BP6|BP7|BP8|",q="3 |   |   |   |   |   |   |   |   |",p="4 |   |   |   |   |   |   |   |   |",o="5 |   |   |   |   |   |   |   |   |",n="6 |   |   |   |   |   |   |   |   |",m="7 |WP1|WP2|WP3|WP4|WP5|WP6|WP7|WP8|",l="8 |WR1|WH1|WB1|WK1|WQ1|WB2|WH2|WR2|",k="BR|BH|BB|BK|BQ|BB|BH|BR",j="BP|BP|BP|BP|BP|BP|BP|BP",i="  |  |  |  |  |  |  |  ",h="WP|WP|WP|WP|WP|WP|WP|WP",g="WR|WH|WB|WK|WQ|WB|WH|WR",f="   |   |   |   |   |   |   |   ",e=Q.mr(),d=this.a
d.$3(a,e.h(0),["   1  2  3  4  5  6  7  8","1 |BR|BH|BB|BK|BQ|BB|BH|BR|","2 |BP|BP|BP|BP|BP|BP|BP|BP|","3 |  |  |  |  |  |  |  |  |","4 |  |  |  |  |  |  |  |  |","5 |  |  |  |  |  |  |  |  |","6 |  |  |  |  |  |  |  |  |","7 |WP|WP|WP|WP|WP|WP|WP|WP|","8 |WR|WH|WB|WK|WQ|WB|WH|WR|"])
d.$3(a,e.bd(0,!0),[t,s,r,q,p,o,n,m,l])
d.$3(a,e.fh(0,!1),[k,j,i,i,i,i,h,g])
d.$3(a,Q.T([k,j,i,i,i,i,h,g]).bd(0,!0),[t,s,r,q,p,o,n,m,l])
d.$3(a,Q.T([" BR|   | BB| BK|   | BB| BH|   "," WP|   |   |+BQ|   | BP|+BQ|+BQ","   |+WP|   |   |+BP|   |   |   ","   |   |+WP|+BP|   |   |   |   ","   |   |+BP|+WP|   |   |   |   ","   |+BP|   |   |+WP|   |   |   "," BP|   |   |+WK|   |+WP|+WQ|+WQ","   | WH| WB|   |+WQ| WB|   | WR"]).bd(0,!0),["    1    2    3    4    5    6    7    8","1 | BR1|    | BB1| BK1|    | BB2| BH1|    |","2 | WP1|    |    |+BQ1|    | BP1|+BQ2|+BQ3|","3 |    |+WP2|    |    |+BP2|    |    |    |","4 |    |    |+WP3|+BP3|    |    |    |    |","5 |    |    |+BP4|+WP4|    |    |    |    |","6 |    |+BP5|    |    |+WP5|    |    |    |","7 | BP6|    |    |+WK1|    |+WP6|+WQ1|+WQ2|","8 |    | WH1| WB1|    |+WQ3| WB2|    | WR1|"])
d.$3(a,Q.T(["BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1","BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1",f,f,f,f,"WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1","WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1"]).bd(0,!0),[t,"1 |BR2|BH2|BB2|BK1|BQ1|BB1|BH1|BR1|","2 |BP8|BP7|BP6|BP5|BP4|BP3|BP2|BP1|",q,p,o,n,"7 |WP8|WP7|WP6|WP5|WP4|WP3|WP2|WP1|","8 |WR2|WH2|WB2|WK1|WQ1|WB1|WH1|WR1|"])},
$S:0}
M.kb.prototype={
$1:function(a){var t="  |  |  |BK|  |  |  |  ",s="  |  |  |  |  |  |  |  ",r="  |  |  |WK|  |  |  |  ",q="  |  |  |  |  |  |BK|  ",p="  |WK|  |  |  |  |  |  ",o=this.a
o.$4(a,!1,!1,[t,s,s,s,s,s,s,r])
o.$4(a,!0,!0,[s,s,s,t,r,s,s,s])
o.$4(a,!1,!0,[s,q,s,s,"  |  |  |WQ|  |  |  |  ",s,p,s])
o.$4(a,!1,!0,[s,q,s,s,s,"  |  |BR|  |  |  |  |  ","  |WK|  |  |  |  |WR|  ",s])
o.$4(a,!1,!0,[s,q,s,s,s,"  |  |WB|  |  |  |  |  ","  |WK|  |  |  |  |BB|  ",s])
o.$4(a,!0,!0,[s,q,"  |  |  |  |  |WP|  |  ",s,s,"  |  |BP|  |  |  |  |  ",p,s])
o.$4(a,!1,!1,[s,"  |  |  |  |  |  |WK|  ","  |  |  |  |  |BP|  |  ",s,s,"  |  |WP|  |  |  |  |  ","  |BK|  |  |  |  |  |  ",s])
o.$4(a,!0,!0,[s,q,s,"  |  |  |  |  |WH|  |  ","  |  |  |  |BH|  |  |  ","  |  |WK|  |  |  |  |  ",s,s])},
$S:0}
M.kc.prototype={
$1:function(a){var t,s="Pawn move to 6 4, 7 4 => 6 4",r=" BR1| BH1| BB1| BK1| BQ1| BB2| BH2| BR2",q="    |    |    |    |    |    |    |    ",p=" WR1| WH1| WB1| WK1| WQ1| WB2| WH2| WR2",o="  |  |  |  |  |  |  |  ",n=Q.mr(),m=this.a
m.$4(a,n,"WP1",["Pawn move to 6 1, 7 1 => 6 1","Pawn move to 5 1, 7 1 => 5 1"])
m.$4(a,n,"WP4",[s,"Pawn move to 5 4, 7 4 => 5 4"])
m.$4(a,n,"WP8",["Pawn move to 6 8, 7 8 => 6 8","Pawn move to 5 8, 7 8 => 5 8"])
m.$4(a,n,"BP1",["Pawn move to 3 1, 2 1 => 3 1","Pawn move to 4 1, 2 1 => 4 1"])
m.$4(a,n,"BP4",["Pawn move to 3 4, 2 4 => 3 4","Pawn move to 4 4, 2 4 => 4 4"])
m.$4(a,n,"BP8",["Pawn move to 3 8, 2 8 => 3 8","Pawn move to 4 8, 2 8 => 4 8"])
t=Q.T([r,"    | BP2| BP3|    | BP5| BP6| BP7|    ",q,q,"+BP1|+WP2|+WP3|+BP4|+WP5|    |+WP7|+BP8",q," WP1|    |    | WP4|    | WP6|    | WP8",p])
t.c=n
m.$4(a,t,"BP1",["Pawn move to 6 1, 5 1 => 6 1","Pawn en passent Pawn at 6 2, 5 1 => 6 2, 5 2 => null"])
m.$4(a,t,"BP4",["Pawn move to 6 4, 5 4 => 6 4","Pawn en passent Pawn at 6 3, 5 4 => 6 3, 5 3 => null","Pawn en passent Pawn at 6 5, 5 4 => 6 5, 5 5 => null"])
m.$4(a,t,"BP8",["Pawn move to 6 8, 5 8 => 6 8","Pawn en passent Pawn at 6 7, 5 8 => 6 7, 5 7 => null"])
t=Q.T([r," BP1|    |    | BP4|    | BP6|    | BP8",q,"+WP1|+BP2|+BP3|+WP4|+BP5|    |+BP7|+WP8",q,q,"    | WP2| WP3|    | WP5| WP6| WP7|    ",p])
t.c=n
m.$4(a,t,"WP1",["Pawn move to 3 1, 4 1 => 3 1","Pawn en passent Pawn at 3 2, 4 1 => 3 2, 4 2 => null"])
m.$4(a,t,"WP4",["Pawn move to 3 4, 4 4 => 3 4","Pawn en passent Pawn at 3 3, 4 4 => 3 3, 4 3 => null","Pawn en passent Pawn at 3 5, 4 4 => 3 5, 4 5 => null"])
m.$4(a,t,"WP8",["Pawn move to 3 8, 4 8 => 3 8","Pawn en passent Pawn at 3 7, 4 8 => 3 7, 4 7 => null"])
m.$4(a,Q.T([o,o,o,o,o,"BQ|  |  |  |WK|  |  |  ","  |  |  |WP|  |  |  |  ",o]),"WP1",[s])},
$S:0}
M.kd.prototype={
$1:function(a){var t,s="   |   |    |   |   |   |   |   ",r="info_log",q="   |    |    |    |   |   |   |   ",p="  |  |  |  |  |  |  |  ",o=Q.T([s,s,s,"   |   |+BH1|   |   |   |   |   ",s,s,s,s])
a.i("State:\n"+o.h(0)+"\n",r)
t=this.a
t.$4(a,o,"BH1",["Knight move to 6 4, 4 3 => 6 4","Knight move to 6 2, 4 3 => 6 2","Knight move to 5 5, 4 3 => 5 5","Knight move to 3 5, 4 3 => 3 5","Knight move to 2 4, 4 3 => 2 4","Knight move to 2 2, 4 3 => 2 2","Knight move to 5 1, 4 3 => 5 1","Knight move to 3 1, 4 3 => 3 1"])
o=Q.T([q,"   |+BH1|    |    |   |   |   |   ","   |    |    |+BP1|   |   |   |   ","   |    |+WP1|    |   |   |   |   ",q,q,q,q])
a.i("State:\n"+o.h(0)+"\n",r)
t.$4(a,o,"BH1",["Knight take Pawn at 4 3, 2 2 => 4 3, 4 3 => null","Knight move to 4 1, 2 2 => 4 1","Knight move to 1 4, 2 2 => 1 4"])
t.$4(a,Q.T([p,p,"BQ|  |  |  |  |  |WK|  ","  |  |  |WH|  |  |  |  ",p,p,p,p]),"WH1",["Knight move to 3 6, 4 4 => 3 6","Knight move to 3 2, 4 4 => 3 2"])},
$S:0}
M.ke.prototype={
$1:function(a){var t,s="   |   |    |   |   |   |   |   ",r="info_log",q="Bishop move to 5 4, 4 3 => 5 4",p="Bishop move to 3 2, 4 3 => 3 2",o="Bishop move to 3 4, 4 3 => 3 4",n="    |    |    |   |    |   |   |   ",m=Q.T([s,s,s,"   |   |+BB1|   |   |   |   |   ",s,s,s,s])
a.i("State:\n"+m.h(0)+"\n",r)
t=this.a
t.$4(a,m,"WB1",[])
t.$4(a,m,"BB1",[q,"Bishop move to 6 5, 4 3 => 6 5","Bishop move to 7 6, 4 3 => 7 6","Bishop move to 8 7, 4 3 => 8 7","Bishop move to 5 2, 4 3 => 5 2","Bishop move to 6 1, 4 3 => 6 1",p,"Bishop move to 2 1, 4 3 => 2 1",o,"Bishop move to 2 5, 4 3 => 2 5","Bishop move to 1 6, 4 3 => 1 6"])
m=Q.T([n,"+WP1|    |    |   |+BP1|   |   |   ",n,"    |    |+WB1|   |    |   |   |   ","    |+BP2|    |   |    |   |   |   ","    |    |    |   |+WP2|   |   |   ",n,n])
a.i("State:\n"+m.h(0)+"\n",r)
t.$4(a,m,"WB1",[q,"Bishop take Pawn at 5 2, 4 3 => 5 2, 5 2 => null",p,o,"Bishop take Pawn at 2 5, 4 3 => 2 5, 2 5 => null"])},
$S:0}
M.kf.prototype={
$1:function(a1){var t,s="   |   |    |   |   |   |   |   ",r="info_log",q="Rook move to 4 4, 4 3 => 4 4",p="Rook move to 4 2, 4 3 => 4 2",o="Rook move to 5 3, 4 3 => 5 3",n="Rook move to 3 3, 4 3 => 3 3",m="    |   |    |   |    |   |   |   ",l="   |   |   |   |   |   |   |   ",k="Rook move to 1 2, 1 1 => 1 2",j="Rook move to 1 3, 1 1 => 1 3",i="Rook move to 1 7, 1 8 => 1 7",h="Rook move to 1 6, 1 8 => 1 6",g="Rook move to 1 5, 1 8 => 1 5",f="Rook move to 8 2, 8 1 => 8 2",e="Rook move to 8 3, 8 1 => 8 3",d="Rook move to 8 7, 8 8 => 8 7",c="Rook move to 8 6, 8 8 => 8 6",b="Rook move to 8 5, 8 8 => 8 5",a="    |   |   |    |   |   |   |    ",a0=Q.T([s,s,s,"   |   |+BR1|   |   |   |   |   ",s,s,s,s])
a1.i("State:\n"+a0.h(0)+"\n",r)
t=this.a
t.$4(a1,a0,"BR1",[q,"Rook move to 4 5, 4 3 => 4 5","Rook move to 4 6, 4 3 => 4 6","Rook move to 4 7, 4 3 => 4 7","Rook move to 4 8, 4 3 => 4 8",p,"Rook move to 4 1, 4 3 => 4 1",o,"Rook move to 6 3, 4 3 => 6 3","Rook move to 7 3, 4 3 => 7 3","Rook move to 8 3, 4 3 => 8 3",n,"Rook move to 2 3, 4 3 => 2 3","Rook move to 1 3, 4 3 => 1 3"])
a0=Q.T([m,"    |   |+BP1|   |    |   |   |   ",m,"+WP1|   |+WR1|   |+WP2|   |   |   ",m,"    |   |+BP2|   |    |   |   |   ",m,m])
a1.i("State:\n"+a0.h(0)+"\n",r)
t.$4(a1,a0,"WR1",[q,p,o,"Rook take Pawn at 6 3, 4 3 => 6 3, 6 3 => null",n,"Rook take Pawn at 2 3, 4 3 => 2 3, 2 3 => null"])
a0=Q.T(["BR1|   |   |BK1|   |   |   |BR2","BP1|   |   |   |   |   |   |BP2",l,l,l,l,"WP1|   |   |   |   |   |   |WP2","WR1|   |   |WK1|   |   |   |WR2"])
a1.i("State:\n"+a0.h(0)+"\n",r)
t.$4(a1,a0,"BR1",[k,j,"Rook castles with King, 1 1 => 1 3, 1 4 => 1 2"])
t.$4(a1,a0,"BR2",[i,h,g,"Rook castles with King, 1 8 => 1 5, 1 4 => 1 6"])
t.$4(a1,a0,"WR1",[f,e,"Rook castles with King, 8 1 => 8 3, 8 4 => 8 2"])
t.$4(a1,a0,"WR2",[d,c,b,"Rook castles with King, 8 8 => 8 5, 8 4 => 8 6"])
a0=Q.T([" BR1|   |   |+BK1|   |   |   | BR2"," BP1|   |   |    |   |   |   | BP2",a,a,a,a," WP1|   |   |    |   |   |   | WP2","+WR1|   |   | WK1|   |   |   |+WR2"])
a1.i("State:\n"+a0.h(0)+"\n",r)
t.$4(a1,a0,"BR1",[k,j])
t.$4(a1,a0,"BR2",[i,h,g])
t.$4(a1,a0,"WR1",[f,e])
t.$4(a1,a0,"WR2",[d,c,b])},
$S:0}
M.kg.prototype={
$1:function(a4){var t,s="   |   |   |   |   |   |   |   ",r="info_log",q="BK1",p="King move to 2 5, 1 4 => 2 5",o="King move to 2 4, 1 4 => 2 4",n="King move to 2 3, 1 4 => 2 3",m="King move to 1 3, 1 4 => 1 3",l="King move to 1 5, 1 4 => 1 5",k="King castles with Rook, 1 4 => 1 2, 1 1 => 1 3",j="King castles with Rook, 1 4 => 1 6, 1 8 => 1 5",i="WK1",h="King move to 8 3, 8 4 => 8 3",g="King move to 7 3, 8 4 => 7 3",f="King move to 7 4, 8 4 => 7 4",e="King move to 7 5, 8 4 => 7 5",d="King move to 8 5, 8 4 => 8 5",c="King castles with Rook, 8 4 => 8 2, 8 1 => 8 3",b="King castles with Rook, 8 4 => 8 6, 8 8 => 8 5",a="    |   |   |    |   |   |   |    ",a0="   |   |    |    |    |   |   |   ",a1="BP1|   |BP3|BP4|BP5|   |   |BP8",a2="WP1|   |WP3|WP4|WP5|   |   |WP8",a3=Q.T(["BR1|   |   |BK1|   |   |   |BR2","BP1|   |   |   |   |   |   |BP2",s,s,s,s,"WP1|   |   |   |   |   |   |WP2","WR1|   |   |WK1|   |   |   |WR2"])
a4.i("State:\n"+a3.h(0)+"\n",r)
t=this.a
t.$4(a4,a3,q,[p,o,n,m,l,k,j])
t.$4(a4,a3,i,[h,g,f,e,d,c,b])
a3=Q.T([" BR1|   |   |+BK1|   |   |   | BR2"," BP1|   |   |    |   |   |   | BP2",a,a,a,a," WP1|   |   |    |   |   |   | WP2","+WR1|   |   | WK1|   |   |   |+WR2"])
a4.i("State:\n"+a3.h(0)+"\n",r)
t.$4(a4,a3,q,[p,o,n,m,l])
t.$4(a4,a3,i,[h,g,f,e,d])
a3=Q.T([a0,a0,a0,"   |   |    |+WP2|+WP1|   |   |   ","   |   |+BP3|+WK1|+WP3|   |   |   ","   |   |    |+BP2|+BP1|   |   |   ",a0,a0])
a4.i("State:\n"+a3.h(0)+"\n",r)
t.$4(a4,a3,i,["King take Pawn at 6 5, 5 4 => 6 5, 6 5 => null","King move to 6 3, 5 4 => 6 3","King take Pawn at 5 3, 5 4 => 5 3, 5 3 => null","King move to 4 3, 5 4 => 4 3"])
a3=Q.T(["BR1|BB1|   |BK1|   |   |   |BR2",a1,s,s,s,s,a2,"WR1|WB1|   |WK1|   |   |   |WR2"])
a4.i("State:\n"+a3.h(0)+"\n",r)
t.$4(a4,a3,q,[m,l,j])
t.$4(a4,a3,i,[h,d,b])
a3=Q.T(["BR1|   |   |BK1|   |   |BB2|BR2",a1,s,s,s,s,a2,"WR1|   |   |WK1|   |   |WB2|WR2"])
a4.i("State:\n"+a3.h(0)+"\n",r)
t.$4(a4,a3,q,[m,l,k])
t.$4(a4,a3,i,[h,d,c])},
$S:0}
M.kh.prototype={
$1:function(a){var t,s="    |   |   |   |   |   |   |    ",r="info_log",q="   |   |    |    |    |   |   |   ",p="  |  |  |  |  |  |  |  ",o=Q.T(["+WQ1|   |   |   |   |   |   |    ",s,s,s,s,s,s,"    |   |   |   |   |   |   |+BQ1"])
a.i("State:\n"+o.h(0)+"\n",r)
t=this.a
t.$4(a,o,"BQ1",["Queen move to 8 7, 8 8 => 8 7","Queen move to 8 6, 8 8 => 8 6","Queen move to 8 5, 8 8 => 8 5","Queen move to 8 4, 8 8 => 8 4","Queen move to 8 3, 8 8 => 8 3","Queen move to 8 2, 8 8 => 8 2","Queen move to 8 1, 8 8 => 8 1","Queen move to 7 7, 8 8 => 7 7","Queen move to 6 6, 8 8 => 6 6","Queen move to 5 5, 8 8 => 5 5","Queen move to 4 4, 8 8 => 4 4","Queen move to 3 3, 8 8 => 3 3","Queen move to 2 2, 8 8 => 2 2","Queen take Queen at 1 1, 8 8 => 1 1, 1 1 => null","Queen move to 7 8, 8 8 => 7 8","Queen move to 6 8, 8 8 => 6 8","Queen move to 5 8, 8 8 => 5 8","Queen move to 4 8, 8 8 => 4 8","Queen move to 3 8, 8 8 => 3 8","Queen move to 2 8, 8 8 => 2 8","Queen move to 1 8, 8 8 => 1 8"])
t.$4(a,o,"WQ1",["Queen move to 2 2, 1 1 => 2 2","Queen move to 3 3, 1 1 => 3 3","Queen move to 4 4, 1 1 => 4 4","Queen move to 5 5, 1 1 => 5 5","Queen move to 6 6, 1 1 => 6 6","Queen move to 7 7, 1 1 => 7 7","Queen take Queen at 8 8, 1 1 => 8 8, 8 8 => null","Queen move to 2 1, 1 1 => 2 1","Queen move to 3 1, 1 1 => 3 1","Queen move to 4 1, 1 1 => 4 1","Queen move to 5 1, 1 1 => 5 1","Queen move to 6 1, 1 1 => 6 1","Queen move to 7 1, 1 1 => 7 1","Queen move to 8 1, 1 1 => 8 1","Queen move to 1 2, 1 1 => 1 2","Queen move to 1 3, 1 1 => 1 3","Queen move to 1 4, 1 1 => 1 4","Queen move to 1 5, 1 1 => 1 5","Queen move to 1 6, 1 1 => 1 6","Queen move to 1 7, 1 1 => 1 7","Queen move to 1 8, 1 1 => 1 8"])
o=Q.T([q,q,"   |BP2|    |    |    |   |   |   ","   |   |    |+WP4|+WP1|   |   |   ","   |   |+BP3|+WQ1|+WP3|   |   |   ","   |   |    |+BP4|+BP1|   |   |   ","   |WP2|    |    |    |   |   |   ",q])
a.i("State:\n"+o.h(0)+"\n",r)
t.$4(a,o,"WQ1",["Queen take Pawn at 6 5, 5 4 => 6 5, 6 5 => null","Queen take Pawn at 6 4, 5 4 => 6 4, 6 4 => null","Queen move to 6 3, 5 4 => 6 3","Queen take Pawn at 5 3, 5 4 => 5 3, 5 3 => null","Queen move to 4 3, 5 4 => 4 3","Queen take Pawn at 3 2, 5 4 => 3 2, 3 2 => null"])
t.$4(a,Q.T(["BQ|  |  |  |  |  |WK|  ",p,"  |  |  |WQ|  |  |  |  ",p,p,p,p,p]),"WQ1",["Queen move to 1 2, 3 4 => 1 2","Queen move to 1 4, 3 4 => 1 4","Queen move to 1 6, 3 4 => 1 6"])},
$S:0}
M.ki.prototype={
$1:function(a){var t,s=V.B(0,0,0,1,1,1),r=V.B(2,2,2,1,1,1),q=$.aH()
M.ae(a,"Not moving, not touching",s,r,new V.p(0,0,0),C.h,0,q)
M.ae(a,"Moving right but not enough to touch",V.B(0,0,0,1,1,1),V.B(2,0,0,1,1,1),new V.p(0.5,0,0),C.h,0,q)
r=V.B(0,0,0,1,1,1)
s=V.B(2,0,0,1,1,1)
t=$.cF()
M.ae(a,"Moving right until they just touch on edge",r,s,new V.p(1,0,0),C.e,1,t)
M.ae(a,"Moving to pass eachother and hit early",V.B(0,0,0,1,1,1),V.B(2,0,0,1,1,1),new V.p(4,0,0),C.e,0.25,t)
M.ae(a,"Moving away from eachother backwards",V.B(0,0,0,1,1,1),V.B(2,0,0,1,1,1),new V.p(-4,0,0),C.h,0,q)
M.ae(a,"Moving away from eachother already passed",V.B(2,0,0,1,1,1),V.B(0,0,0,1,1,1),new V.p(4,0,0),C.h,0,q)
M.ae(a,"Moving backwards past eachother and hit early",V.B(2,0,0,1,1,1),V.B(0,0,0,1,1,1),new V.p(-4,0,0),C.e,0.25,$.cG())
M.ae(a,"Moving right but offset to pass eachother",V.B(0,0,0,1,1,1),V.B(2,2,2,1,1,1),new V.p(4,0,0),C.h,0,q)
M.ae(a,"Moving almost diagnally at an angle to collide",V.B(0,0,0,1,1,1),V.B(2,2,2,1,1,1),new V.p(2,2.4,2.8),C.e,0.5,t)
M.ae(a,"Moving almost diagnally at a different angle to collide",V.B(0,0,0,1,1,1),V.B(2,2,2,1,1,1),new V.p(2.8,2,2.4),C.e,0.5,$.dY())
M.ae(a,"Moving almost diagnally at another different angle to collide",V.B(0,0,0,1,1,1),V.B(2,2,2,1,1,1),new V.p(2.4,2.8,2),C.e,0.5,$.cI())
M.ae(a,"Moving diagnally to collide",V.B(0,0,0,1,1,1),V.B(2,2,2,1,1,1),new V.p(2,2,2),C.e,0.5,t)
t=V.B(0,11.13,0,0,1.5,0)
s=V.B(0,8,0,0,1,0)
r=$.cH()
M.ae(a,"Moving down and colliding",t,s,new V.p(0,-2.45,0),C.e,0.869387755102041,r)
M.ae(a,"Moving up at an agle and already touching on edge",V.B(0.25,10,0.1,0.25,2,0.25),V.B(0,9,0,1,1,1),new V.p(0,-1,-0.3),C.e,0,r)
M.ae(a,"One already contains the other",V.B(-2,-2,-2,4,4,4),V.B(-1,-1,-1,2,2,2),new V.p(2,2,2),C.j,0,q)
M.ae(a,"Partually overlapping",V.B(-2,-2,-2,2,2,2),V.B(-1,-1,-1,2,2,2),new V.p(2,2,2),C.j,0,q)},
$S:0}
M.kj.prototype={
$1:function(a){var t=Math.abs(1)
M.jT(a,"Same sized spheres colliding after B moves left",new V.aB(0,0,0,t),new V.aB(3,0,0,t),V.b_(),new V.p(-1,0,0),C.e,1)
M.jT(a,"Same sized spheres colliding after A moves left",new V.aB(3,0,0,t),new V.aB(0,0,0,t),new V.p(-1,0,0),V.b_(),C.e,1)
M.jT(a,"Same sized spheres already touching and A moves left",new V.aB(0,0,0,t),new V.aB(2,0,0,t),new V.p(-1,0,0),V.b_(),C.h,0)
M.jT(a,"Same sized spheres already touching and A moves right",new V.aB(0,0,0,t),new V.aB(2,0,0,t),V.b_(),new V.p(-1,0,0),C.e,0)},
$S:0}
M.kk.prototype={
$1:function(a){var t=B.mB(null,new B.hG())
M.m(a,t,0,0,0,0,0,0,0,0)
M.m(a,t,0.001,0,0,0,0,0,0,0)
M.m(a,t,0,0.001,0,0,0,0,0,0)
M.m(a,t,0,0,0.001,0,0,0,0,0)
M.m(a,t,0.999,0,0,0,0,0,0,0)
M.m(a,t,0,0.999,0,0,0,0,0,0)
M.m(a,t,0,0,0.999,0,0,0,0,0)
M.m(a,t,0.999,0.999,0.999,0,0,0,0,0)
M.m(a,t,-0.001,0,0,-16,0,15,0,0)
M.m(a,t,-0.999,0,0,-16,0,15,0,0)
M.m(a,t,-0.001,0,0,-16,0,15,0,0)
M.m(a,t,-0.001,0,0.001,-16,0,15,0,0)
M.m(a,t,-0.999,0,0.999,-16,0,15,0,0)
M.m(a,t,0,0,-0.001,0,-16,0,0,15)
M.m(a,t,0.001,0,-0.001,0,-16,0,0,15)
M.m(a,t,0,0,-0.999,0,-16,0,0,15)
M.m(a,t,0.999,0,-0.999,0,-16,0,0,15)
M.m(a,t,-0.001,0,-0.001,-16,-16,15,0,15)
M.m(a,t,-0.999,0,-0.999,-16,-16,15,0,15)
M.m(a,t,-0.999,0,-0.001,-16,-16,15,0,15)
M.m(a,t,-0.001,0,-0.999,-16,-16,15,0,15)
M.m(a,t,1,0,0,0,0,1,0,0)
M.m(a,t,0,1,0,0,0,0,1,0)
M.m(a,t,0,0,1,0,0,0,0,1)
M.m(a,t,1.001,0,0,0,0,1,0,0)
M.m(a,t,0,0,1.001,0,0,0,0,1)
M.m(a,t,-1,0,0,-16,0,15,0,0)
M.m(a,t,0,-1,0,0,0,0,-1,0)
M.m(a,t,0,0,-1,0,-16,0,0,15)
M.m(a,t,-1.001,0,0,-16,0,14,0,0)
M.m(a,t,0,0,-1.001,0,-16,0,0,14)
M.m(a,t,0,0,-14.157,0,-16,0,0,1)
M.m(a,t,0,0,-15.157,0,-16,0,0,0)
M.m(a,t,0,0,-16.157,0,-32,0,0,15)
M.m(a,t,0,0,18,0,16,0,0,2)
M.m(a,t,0,0,17,0,16,0,0,1)
M.m(a,t,0,0,16,0,16,0,0,0)
M.m(a,t,0,0,15,0,0,0,0,15)
M.m(a,t,0,0,14,0,0,0,0,14)
M.m(a,t,0,0,13,0,0,0,0,13)
M.m(a,t,0,0,12,0,0,0,0,12)
M.m(a,t,0,0,11,0,0,0,0,11)
M.m(a,t,0,0,10,0,0,0,0,10)
M.m(a,t,0,0,9,0,0,0,0,9)
M.m(a,t,0,0,8,0,0,0,0,8)
M.m(a,t,0,0,7,0,0,0,0,7)
M.m(a,t,0,0,6,0,0,0,0,6)
M.m(a,t,0,0,5,0,0,0,0,5)
M.m(a,t,0,0,4,0,0,0,0,4)
M.m(a,t,0,0,3,0,0,0,0,3)
M.m(a,t,0,0,2,0,0,0,0,2)
M.m(a,t,0,0,1,0,0,0,0,1)
M.m(a,t,0,0,0,0,0,0,0,0)
M.m(a,t,0,0,-1,0,-16,0,0,15)
M.m(a,t,0,0,-2,0,-16,0,0,14)
M.m(a,t,0,0,-3,0,-16,0,0,13)
M.m(a,t,0,0,-4,0,-16,0,0,12)
M.m(a,t,0,0,-5,0,-16,0,0,11)
M.m(a,t,0,0,-6,0,-16,0,0,10)
M.m(a,t,0,0,-7,0,-16,0,0,9)
M.m(a,t,0,0,-8,0,-16,0,0,8)
M.m(a,t,0,0,-9,0,-16,0,0,7)
M.m(a,t,0,0,-10,0,-16,0,0,6)
M.m(a,t,0,0,-11,0,-16,0,0,5)
M.m(a,t,0,0,-12,0,-16,0,0,4)
M.m(a,t,0,0,-13,0,-16,0,0,3)
M.m(a,t,0,0,-14,0,-16,0,0,2)
M.m(a,t,0,0,-15,0,-16,0,0,1)
M.m(a,t,0,0,-16,0,-16,0,0,0)
M.m(a,t,0,0,-17,0,-32,0,0,15)
M.m(a,t,0,0,-18,0,-32,0,0,14)
M.m(a,t,0,0,-19,0,-32,0,0,13)},
$S:0}
M.kl.prototype={
$1:function(a){var t,s,r,q=B.mB(null,new B.i1(8,9))
q.cD(0,0)
t=$.cH()
M.Z(a,q,0.5,12,0.5,0,-5,0,0.5,11.5,0.5,t)
M.Z(a,q,0.5,14,0.5,0,-5,0,0.5,11.5,0.5,t)
M.Z(a,q,0.5,14,0.5,0,-1,0,0.5,13,0.5,$.aH())
M.Z(a,q,0.5,11.5,0.5,0,-5,0,0.5,11.5,0.5,t)
M.Z(a,q,0.5,12,0.5,1,-5,1,1.5,11.5,1.5,t)
M.Z(a,q,0.5,11.5,0.5,1,-5,1,1.5,11.5,1.5,t)
M.Z(a,q,0.5,12,0.5,1,-5,-1,1.5,11.5,-0.5,t)
M.Z(a,q,0.5,11.5,0.5,1,-5,-1,1.5,11.5,-0.5,t)
M.Z(a,q,0.5,12,0.5,-1,-5,1,-0.5,11.5,1.5,t)
M.Z(a,q,0.5,11.5,0.5,-1,-5,1,-0.5,11.5,1.5,t)
M.Z(a,q,0.5,12,0.5,-1,-5,-1,-0.5,11.5,-0.5,t)
M.Z(a,q,0.5,11.5,0.5,-1,-5,-1,-0.5,11.5,-0.5,t)
s=q.ao(0,10,0)
if(s!=null){r=s.f
if(r!=null)r.aE(s.a,s.b,s.c,102)}M.Z(a,q,0.5,14,0.5,0,-5,0,0.5,12.5,0.5,t)
M.Z(a,q,0.5,14,1.5,0,-5,0,0.5,11.5,1.5,t)
M.Z(a,q,0.5,14,-0.5,0,-5,0,0.5,11.5,-0.5,t)
M.Z(a,q,1.5,14,0.5,0,-5,0,1.5,11.5,0.5,t)
M.Z(a,q,-0.5,14,0.5,0,-5,0,-0.5,11.5,0.5,t)
s=$.cG()
M.Z(a,q,2.5,11.5,0.5,-5,0,0,1.25,11.5,0.5,s)
M.Z(a,q,2.5,11.5,0.5,-5,-5,0,1.25,11.5,0.5,new V.ao(s.a|t.a))
M.Z(a,q,-1.5,11.5,0.5,5,0,0,-0.25,11.5,0.5,$.cF())
M.Z(a,q,0.5,11.5,2.5,0,0,-5,0.5,11.5,1.25,$.dZ())
M.Z(a,q,0.5,11.5,-1.5,0,0,5,0.5,11.5,-0.25,$.cI())},
$S:0}
M.km.prototype={
$1:function(a){var t=new V.Y(2,3,4,5)
M.a5(a,t,"[2.000, 3.000,"," 4.000, 5.000]")
M.G(a,t,0,0,0,0)
M.G(a,t,1,0,2,4)
M.G(a,t,0,1,3,5)
M.G(a,t,1,1,5,9)},
$S:0}
M.kn.prototype={
$1:function(a){var t=new V.Y(2,3,4,5)
M.a5(a,t,"[2.000, 3.000,"," 4.000, 5.000]")
M.jQ(a,t,0,0,0,0)
M.jQ(a,t,1,0,2,4)
M.jQ(a,t,0,1,3,5)
M.jQ(a,t,1,1,5,9)},
$S:0}
M.ko.prototype={
$1:function(a){var t=V.cb()
M.a5(a,t,"[1.000, 0.000,"," 0.000, 1.000]")
M.G(a,t,0,0,0,0)
M.G(a,t,1,0,1,0)
M.G(a,t,-1,0,-1,0)
M.G(a,t,1,1,1,1)
M.G(a,t,-1,-1,-1,-1)
M.G(a,t,0,1,0,1)
M.G(a,t,0,-1,0,-1)
M.G(a,t,2.3,-4.2,2.3,-4.2)
M.G(a,t,-1.5,7.3,-1.5,7.3)},
$S:0}
M.kp.prototype={
$1:function(a){var t=new V.Y(2,0,0,3)
M.a5(a,t,"[2.000, 0.000,"," 0.000, 3.000]")
M.G(a,t,0,0,0,0)
M.G(a,t,1,0,2,0)
M.G(a,t,-1,0,-2,0)
M.G(a,t,1,1,2,3)
M.G(a,t,-1,-1,-2,-3)
M.G(a,t,0,1,0,3)
M.G(a,t,0,-1,0,-3)
M.G(a,t,2.3,-4.2,4.6,-12.6)
M.G(a,t,-1.5,7.3,-3,21.9)},
$S:0}
M.kq.prototype={
$1:function(a){var t=V.ca(0.7853981633974483)
M.a5(a,t,"[0.707, -0.707,"," 0.707,  0.707]")
M.G(a,t,0,0,0,0)
M.G(a,t,1,0,0.70710678118,0.70710678118)
M.G(a,t,0.70710678118,0.70710678118,0,1)
M.G(a,t,0,1,-0.70710678118,0.70710678118)
M.G(a,t,-0.70710678118,0.70710678118,-1,0)
M.G(a,t,-1,0,-0.70710678118,-0.70710678118)
M.G(a,t,-0.70710678118,-0.70710678118,0,-1)
M.G(a,t,0,-1,0.70710678118,-0.70710678118)
M.G(a,t,0.70710678118,-0.70710678118,1,0)},
$S:0}
M.kr.prototype={
$1:function(a){var t="[-1.000,  0.000,",s="  0.000, -1.000]"
M.a5(a,V.ca(-0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.a5(a,V.ca(1.5707963267948966),"[0.000, -1.000,"," 1.000,  0.000]")
M.a5(a,V.ca(-3.141592653589793),t,s)
M.a5(a,V.ca(3.141592653589793),t,s)
M.a5(a,V.ca(1.1780972450961724),"[0.383, -0.924,"," 0.924,  0.383]")},
$S:0}
M.ks.prototype={
$1:function(a){var t,s="[1.000, 2.000,",r=" 3.000, 4.000]",q=new V.Y(1,2,3,4)
M.a5(a,q,s,r)
M.a5(a,V.o6(q.aT(0)),s,r)
M.a5(a,new V.Y(1,3,2,4),"[1.000, 3.000,"," 2.000, 4.000]")
M.L(a,1,1,"m11")
M.L(a,2,2,"m21")
M.L(a,3,3,"m12")
M.L(a,4,4,"m22")
M.a5(a,new V.Y(1,2,4,5),s," 4.000, 5.000]")
t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.a5(a,new V.Y(t.a,t.b,t.e,t.f),s," 5.000, 6.000]")},
$S:0}
M.kt.prototype={
$1:function(a){var t="[1.000, 0.000,",s=" 0.000, 1.000]"
M.lJ(a,V.cb(),t,s)
M.lJ(a,new V.Y(2,0,0,3),"[0.500, 0.000,"," 0.000, 0.333]")
M.lJ(a,V.ca(0.7853981633974483),"[ 0.707, 0.707,"," -0.707, 0.707]")
M.a5(a,new V.Y(0,0,0,0).a2(0),t,s)},
$S:0}
M.ku.prototype={
$1:function(a){M.a5(a,new V.Y(1,2,3,4).L(0,new V.Y(5,6,7,8)),"[19.000, 22.000,"," 43.000, 50.000]")
M.a5(a,new V.Y(5,6,7,8).L(0,new V.Y(1,2,3,4)),"[23.000, 34.000,"," 31.000, 46.000]")},
$S:0}
M.kv.prototype={
$1:function(a){var t=new V.P(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.v(a,t,0,0,0,0,0,0)
M.v(a,t,1,0,0,1,4,7)
M.v(a,t,0,1,0,2,5,8)
M.v(a,t,0,0,1,3,6,9)
M.v(a,t,1,1,0,3,9,15)
M.v(a,t,1,0,1,4,10,16)
M.v(a,t,0,1,1,5,11,17)
M.v(a,t,1,1,1,6,15,24)},
$S:0}
M.kw.prototype={
$1:function(a){var t=new V.P(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.bU(a,t,0,0,0,0,0,0)
M.bU(a,t,1,0,0,1,4,7)
M.bU(a,t,0,1,0,2,5,8)
M.bU(a,t,0,0,1,3,6,9)
M.bU(a,t,1,1,0,3,9,15)
M.bU(a,t,1,0,1,4,10,16)
M.bU(a,t,0,1,1,5,11,17)
M.bU(a,t,1,1,1,6,15,24)},
$S:0}
M.kx.prototype={
$1:function(a){var t=V.cf()
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
M.v(a,t,-1.5,7.3,4.8,-1.5,7.3,4.8)},
$S:0}
M.kC.prototype={
$1:function(a){var t=new V.P(2,0,0,0,3,0,0,0,4)
M.E(a,t,"[2.000, 0.000, 0.000,"," 0.000, 3.000, 0.000,"," 0.000, 0.000, 4.000]")
M.v(a,t,0,0,0,0,0,0)
M.v(a,t,1,1,1,2,3,4)
M.v(a,t,-1,-1,-1,-2,-3,-4)
M.v(a,t,2.3,-4.2,-0.2,4.6,-12.6,-0.8)
M.v(a,t,-1.5,7.3,4.8,-3,21.9,19.2)},
$S:0}
M.kD.prototype={
$1:function(a){var t=V.cc(0.7853981633974483)
M.E(a,t,"[1.000, 0.000,  0.000,"," 0.000, 0.707, -0.707,"," 0.000, 0.707,  0.707]")
M.v(a,t,1,0,0,1,0,0)
M.v(a,t,2,1,0,2,0.70710678118,0.70710678118)
M.v(a,t,3,0.70710678118,0.70710678118,3,0,1)
M.v(a,t,4,0,1,4,-0.70710678118,0.70710678118)
M.v(a,t,5,-0.70710678118,0.70710678118,5,-1,0)
M.v(a,t,6,-1,0,6,-0.70710678118,-0.70710678118)
M.v(a,t,7,-0.70710678118,-0.70710678118,7,0,-1)
M.v(a,t,8,0,-1,8,0.70710678118,-0.70710678118)
M.v(a,t,9,0.70710678118,-0.70710678118,9,1,0)},
$S:0}
M.kE.prototype={
$1:function(a){var t="[1.000, 0.000,  0.000,",s="[1.000,  0.000,  0.000,",r=" 0.000, -1.000,  0.000,",q=" 0.000,  0.000, -1.000]"
M.E(a,V.cc(-0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.E(a,V.cc(1.5707963267948966),t," 0.000, 0.000, -1.000,"," 0.000, 1.000,  0.000]")
M.E(a,V.cc(-3.141592653589793),s,r,q)
M.E(a,V.cc(3.141592653589793),s,r,q)
M.E(a,V.cc(1.1780972450961724),t," 0.000, 0.383, -0.924,"," 0.000, 0.924,  0.383]")},
$S:0}
M.kF.prototype={
$1:function(a){var t=V.cd(0.7853981633974483)
M.E(a,t,"[0.707, 0.000, -0.707,"," 0.000, 1.000,  0.000,"," 0.707, 0.000,  0.707]")
M.v(a,t,0,1,0,0,1,0)
M.v(a,t,1,2,0,0.70710678118,2,0.70710678118)
M.v(a,t,0.70710678118,3,0.70710678118,0,3,1)
M.v(a,t,0,4,1,-0.70710678118,4,0.70710678118)
M.v(a,t,-0.70710678118,5,0.70710678118,-1,5,0)
M.v(a,t,-1,6,0,-0.70710678118,6,-0.70710678118)
M.v(a,t,-0.70710678118,7,-0.70710678118,0,7,-1)
M.v(a,t,0,8,-1,0.70710678118,8,-0.70710678118)
M.v(a,t,0.70710678118,9,-0.70710678118,1,9,0)},
$S:0}
M.kG.prototype={
$1:function(a){var t=" 0.000, 1.000,  0.000,",s="[-1.000, 0.000,  0.000,",r="  0.000, 1.000,  0.000,",q="  0.000, 0.000, -1.000]"
M.E(a,V.cd(-0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.E(a,V.cd(1.5707963267948966),"[0.000, 0.000, -1.000,",t," 1.000, 0.000,  0.000]")
M.E(a,V.cd(-3.141592653589793),s,r,q)
M.E(a,V.cd(3.141592653589793),s,r,q)
M.E(a,V.cd(1.1780972450961724),"[0.383, 0.000, -0.924,",t," 0.924, 0.000,  0.383]")},
$S:0}
M.kH.prototype={
$1:function(a){var t=V.ce(0.7853981633974483)
M.E(a,t,"[0.707, -0.707, 0.000,"," 0.707,  0.707, 0.000,"," 0.000,  0.000, 1.000]")
M.v(a,t,0,0,1,0,0,1)
M.v(a,t,1,0,2,0.70710678118,0.70710678118,2)
M.v(a,t,0.70710678118,0.70710678118,3,0,1,3)
M.v(a,t,0,1,4,-0.70710678118,0.70710678118,4)
M.v(a,t,-0.70710678118,0.70710678118,5,-1,0,5)
M.v(a,t,-1,0,6,-0.70710678118,-0.70710678118,6)
M.v(a,t,-0.70710678118,-0.70710678118,7,0,-1,7)
M.v(a,t,0,-1,8,0.70710678118,-0.70710678118,8)
M.v(a,t,0.70710678118,-0.70710678118,9,1,0,9)},
$S:0}
M.kI.prototype={
$1:function(a){var t=" 0.000,  0.000, 1.000]",s="[-1.000,  0.000, 0.000,",r="  0.000, -1.000, 0.000,",q="  0.000,  0.000, 1.000]"
M.E(a,V.ce(-0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.E(a,V.ce(1.5707963267948966),"[0.000, -1.000, 0.000,"," 1.000,  0.000, 0.000,",t)
M.E(a,V.ce(-3.141592653589793),s,r,q)
M.E(a,V.ce(3.141592653589793),s,r,q)
M.E(a,V.ce(1.1780972450961724),"[0.383, -0.924, 0.000,"," 0.924,  0.383, 0.000,",t)},
$S:0}
M.kJ.prototype={
$1:function(a){var t,s="[1.000, 2.000, 3.000,",r=" 4.000, 5.000, 6.000,",q=" 7.000, 8.000, 9.000]",p=" 0.000, 0.000, 1.000]",o=new V.P(1,2,3,4,5,6,7,8,9)
M.E(a,o,s,r,q)
M.E(a,V.o7(o.aT(0)),s,r,q)
M.E(a,new V.P(1,4,7,2,5,8,3,6,9),"[1.000, 4.000, 7.000,"," 2.000, 5.000, 8.000,"," 3.000, 6.000, 9.000]")
M.L(a,1,1,"m11")
M.L(a,2,2,"m21")
M.L(a,3,3,"m31")
M.L(a,4,4,"m12")
M.L(a,5,5,"m22")
M.L(a,6,6,"m32")
M.L(a,7,7,"m13")
M.L(a,8,8,"m23")
M.L(a,9,9,"m33")
M.E(a,new V.P(1,0,1.2,0,1,3.4,0,0,1),"[1.000, 0.000, 1.200,"," 0.000, 1.000, 3.400,",p)
M.E(a,new V.P(1,2,0,3,4,0,0,0,1),"[1.000, 2.000, 0.000,"," 3.000, 4.000, 0.000,",p)
t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.E(a,new V.P(t.a,t.b,t.c,t.e,t.f,t.r,t.y,t.z,t.Q),"[1.000,  2.000,  3.000,"," 5.000,  6.000,  7.000,"," 9.000, 10.000, 11.000]")},
$S:0}
M.ky.prototype={
$1:function(a){var t="[1.000, 0.000, 0.000,",s=" 0.000, 1.000, 0.000,",r=" 0.000, 0.000, 1.000]"
M.hp(a,V.cf(),t,s,r)
M.hp(a,new V.P(2,0,0,0,3,0,0,0,4),"[0.500, 0.000, 0.000,"," 0.000, 0.333, 0.000,"," 0.000, 0.000, 0.250]")
M.hp(a,V.cc(0.7853981633974483),"[1.000,  0.000, 0.000,"," 0.000,  0.707, 0.707,"," 0.000, -0.707, 0.707]")
M.hp(a,V.cd(0.7853981633974483),"[ 0.707, 0.000, 0.707,","  0.000, 1.000, 0.000,"," -0.707, 0.000, 0.707]")
M.hp(a,V.ce(0.7853981633974483),"[ 0.707, 0.707, 0.000,"," -0.707, 0.707, 0.000,","  0.000, 0.000, 1.000]")
M.E(a,new V.P(0,0,0,0,0,0,0,0,0).a2(0),t,s,r)},
$S:0}
M.kz.prototype={
$1:function(a){var t="[ 3.000,  3.600,  4.200,",s="  6.600,  8.100,  9.600,",r=" 10.200, 12.600, 15.000]"
M.E(a,new V.P(1,2,3,4,5,6,7,8,9).L(0,new V.P(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9)),t,s,r)
M.E(a,new V.P(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9).L(0,new V.P(1,2,3,4,5,6,7,8,9)),t,s,r)},
$S:0}
M.kA.prototype={
$1:function(a){var t=new V.P(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.jO(a,t,0,0,3,6)
M.jO(a,t,1,0,4,10)
M.jO(a,t,0,1,5,11)
M.jO(a,t,1,1,6,15)},
$S:0}
M.kB.prototype={
$1:function(a){var t=new V.P(1,2,3,4,5,6,7,8,9)
M.E(a,t,"[1.000, 2.000, 3.000,"," 4.000, 5.000, 6.000,"," 7.000, 8.000, 9.000]")
M.jR(a,t,0,0,0,0)
M.jR(a,t,1,0,1,4)
M.jR(a,t,0,1,2,5)
M.jR(a,t,1,1,3,9)},
$S:0}
M.kK.prototype={
$1:function(a){var t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.q(a,t,0,0,0,0,0,0,0,0)
M.q(a,t,1,0,0,0,1,5,9,13)
M.q(a,t,0,1,0,0,2,6,10,14)
M.q(a,t,1,1,0,0,3,11,19,27)
M.q(a,t,0,0,1,0,3,7,11,15)
M.q(a,t,1,0,1,0,4,12,20,28)
M.q(a,t,0,1,1,0,5,13,21,29)
M.q(a,t,1,1,1,0,6,18,30,42)
M.q(a,t,0,0,0,1,4,8,12,16)
M.q(a,t,1,0,0,1,5,13,21,29)
M.q(a,t,0,1,0,1,6,14,22,30)
M.q(a,t,1,1,0,1,7,19,31,43)
M.q(a,t,0,0,1,1,7,15,23,31)
M.q(a,t,1,0,1,1,8,20,32,44)
M.q(a,t,0,1,1,1,9,21,33,45)
M.q(a,t,1,1,1,1,10,26,42,58)},
$S:0}
M.kL.prototype={
$1:function(a){var t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.af(a,t,0,0,0,0,0,0,0,0)
M.af(a,t,1,0,0,0,1,5,9,13)
M.af(a,t,0,1,0,0,2,6,10,14)
M.af(a,t,1,1,0,0,3,11,19,27)
M.af(a,t,0,0,1,0,3,7,11,15)
M.af(a,t,1,0,1,0,4,12,20,28)
M.af(a,t,0,1,1,0,5,13,21,29)
M.af(a,t,1,1,1,0,6,18,30,42)
M.af(a,t,0,0,0,1,4,8,12,16)
M.af(a,t,1,0,0,1,5,13,21,29)
M.af(a,t,0,1,0,1,6,14,22,30)
M.af(a,t,1,1,0,1,7,19,31,43)
M.af(a,t,0,0,1,1,7,15,23,31)
M.af(a,t,1,0,1,1,8,20,32,44)
M.af(a,t,0,1,1,1,9,21,33,45)
M.af(a,t,1,1,1,1,10,26,42,58)},
$S:0}
M.kM.prototype={
$1:function(a){var t=V.aT()
M.D(a,t,"[1.000, 0.000, 0.000, 0.000,"," 0.000, 1.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,"," 0.000, 0.000, 0.000, 1.000]")
M.q(a,t,0,0,0,0,0,0,0,0)
M.q(a,t,1,0,0,0,1,0,0,0)
M.q(a,t,0,1,0,0,0,1,0,0)
M.q(a,t,0,0,1,0,0,0,1,0)
M.q(a,t,1,0,1,0,1,0,1,0)
M.q(a,t,0,1,0,1,0,1,0,1)
M.q(a,t,1,1,1,1,1,1,1,1)
M.q(a,t,-1,0,1,0,-1,0,1,0)
M.q(a,t,1,1,1,0,1,1,1,0)
M.q(a,t,-1,-1,-1,-1,-1,-1,-1,-1)
M.q(a,t,2.3,-4.2,-0.2,3.3,2.3,-4.2,-0.2,3.3)
M.q(a,t,-1.5,7.3,4.8,-9.1,-1.5,7.3,4.8,-9.1)},
$S:0}
M.kT.prototype={
$1:function(a){var t=V.mg(2,3,4,5)
M.D(a,t,"[2.000, 0.000, 0.000, 0.000,"," 0.000, 3.000, 0.000, 0.000,"," 0.000, 0.000, 4.000, 0.000,"," 0.000, 0.000, 0.000, 5.000]")
M.q(a,t,0,0,0,0,0,0,0,0)
M.q(a,t,1,1,1,1,2,3,4,5)
M.q(a,t,-1,-1,-1,-1,-2,-3,-4,-5)
M.q(a,t,2.3,-4.2,-0.2,3.3,4.6,-12.6,-0.8,16.5)
M.q(a,t,-1.5,7.3,4.8,-9.1,-3,21.9,19.2,-45.5)},
$S:0}
M.kU.prototype={
$1:function(a){var t=V.cg(0.7853981633974483)
M.D(a,t,"[1.000, 0.000,  0.000, 0.000,"," 0.000, 0.707, -0.707, 0.000,"," 0.000, 0.707,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.q(a,t,1,0,0,9,1,0,0,9)
M.q(a,t,2,1,0,8,2,0.70710678118,0.70710678118,8)
M.q(a,t,3,0.70710678118,0.70710678118,7,3,0,1,7)
M.q(a,t,4,0,1,6,4,-0.70710678118,0.70710678118,6)
M.q(a,t,5,-0.70710678118,0.70710678118,5,5,-1,0,5)
M.q(a,t,6,-1,0,4,6,-0.70710678118,-0.70710678118,4)
M.q(a,t,7,-0.70710678118,-0.70710678118,3,7,0,-1,3)
M.q(a,t,8,0,-1,2,8,0.70710678118,-0.70710678118,2)
M.q(a,t,9,0.70710678118,-0.70710678118,1,9,1,0,1)},
$S:0}
M.kV.prototype={
$1:function(a){var t="[1.000, 0.000,  0.000, 0.000,",s=" 0.000, 0.000,  0.000, 1.000]",r="[1.000,  0.000,  0.000, 0.000,",q=" 0.000, -1.000,  0.000, 0.000,",p=" 0.000,  0.000, -1.000, 0.000,",o=" 0.000,  0.000,  0.000, 1.000]"
M.D(a,V.cg(-0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.D(a,V.cg(1.5707963267948966),t," 0.000, 0.000, -1.000, 0.000,"," 0.000, 1.000,  0.000, 0.000,",s)
M.D(a,V.cg(-3.141592653589793),r,q,p,o)
M.D(a,V.cg(3.141592653589793),r,q,p,o)
M.D(a,V.cg(1.1780972450961724),t," 0.000, 0.383, -0.924, 0.000,"," 0.000, 0.924,  0.383, 0.000,",s)},
$S:0}
M.kW.prototype={
$1:function(a){var t=V.ch(0.7853981633974483)
M.D(a,t,"[0.707, 0.000, -0.707, 0.000,"," 0.000, 1.000,  0.000, 0.000,"," 0.707, 0.000,  0.707, 0.000,"," 0.000, 0.000,  0.000, 1.000]")
M.q(a,t,0,1,0,9,0,1,0,9)
M.q(a,t,1,2,0,8,0.70710678118,2,0.70710678118,8)
M.q(a,t,0.70710678118,3,0.70710678118,7,0,3,1,7)
M.q(a,t,0,4,1,6,-0.70710678118,4,0.70710678118,6)
M.q(a,t,-0.70710678118,5,0.70710678118,5,-1,5,0,5)
M.q(a,t,-1,6,0,4,-0.70710678118,6,-0.70710678118,4)
M.q(a,t,-0.70710678118,7,-0.70710678118,3,0,7,-1,3)
M.q(a,t,0,8,-1,2,0.70710678118,8,-0.70710678118,2)
M.q(a,t,0.70710678118,9,-0.70710678118,1,1,9,0,1)},
$S:0}
M.kX.prototype={
$1:function(a){var t=" 0.000, 1.000,  0.000, 0.000,",s=" 0.000, 0.000,  0.000, 1.000]",r="[-1.000, 0.000,  0.000, 0.000,",q="  0.000, 1.000,  0.000, 0.000,",p="  0.000, 0.000, -1.000, 0.000,",o="  0.000, 0.000,  0.000, 1.000]"
M.D(a,V.ch(-0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.ch(1.5707963267948966),"[0.000, 0.000, -1.000, 0.000,",t," 1.000, 0.000,  0.000, 0.000,",s)
M.D(a,V.ch(-3.141592653589793),r,q,p,o)
M.D(a,V.ch(3.141592653589793),r,q,p,o)
M.D(a,V.ch(1.1780972450961724),"[0.383, 0.000, -0.924, 0.000,",t," 0.924, 0.000,  0.383, 0.000,",s)},
$S:0}
M.kY.prototype={
$1:function(a){var t=V.ci(0.7853981633974483)
M.D(a,t,"[0.707, -0.707, 0.000, 0.000,"," 0.707,  0.707, 0.000, 0.000,"," 0.000,  0.000, 1.000, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.q(a,t,0,0,1,9,0,0,1,9)
M.q(a,t,1,0,2,8,0.70710678118,0.70710678118,2,8)
M.q(a,t,0.70710678118,0.70710678118,3,7,0,1,3,7)
M.q(a,t,0,1,4,6,-0.70710678118,0.70710678118,4,6)
M.q(a,t,-0.70710678118,0.70710678118,5,5,-1,0,5,5)
M.q(a,t,-1,0,6,4,-0.70710678118,-0.70710678118,6,4)
M.q(a,t,-0.70710678118,-0.70710678118,7,3,0,-1,7,3)
M.q(a,t,0,-1,8,2,0.70710678118,-0.70710678118,8,2)
M.q(a,t,0.70710678118,-0.70710678118,9,1,1,0,9,1)},
$S:0}
M.kZ.prototype={
$1:function(a){var t=" 0.000,  0.000, 1.000, 0.000,",s=" 0.000,  0.000, 0.000, 1.000]",r="[-1.000,  0.000, 0.000, 0.000,",q="  0.000, -1.000, 0.000, 0.000,",p="  0.000,  0.000, 1.000, 0.000,",o="  0.000,  0.000, 0.000, 1.000]"
M.D(a,V.ci(-0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,","  0.000, 0.000, 0.000, 1.000]")
M.D(a,V.ci(1.5707963267948966),"[0.000, -1.000, 0.000, 0.000,"," 1.000,  0.000, 0.000, 0.000,",t,s)
M.D(a,V.ci(-3.141592653589793),r,q,p,o)
M.D(a,V.ci(3.141592653589793),r,q,p,o)
M.D(a,V.ci(1.1780972450961724),"[0.383, -0.924, 0.000, 0.000,"," 0.924,  0.383, 0.000, 0.000,",t,s)},
$S:0}
M.l_.prototype={
$1:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="[ 1.000,  2.000,  3.000,  4.000,",c="  5.000,  6.000,  7.000,  8.000,",b="  9.000, 10.000, 11.000, 12.000,",a=" 13.000, 14.000, 15.000, 16.000]",a0=" 0.000, 0.000, 0.000, 1.000]",a1=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a2,a1,d,c,b,a)
M.D(a2,V.o8(a1.aT(0)),d,c,b,a)
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
M.D(a2,V.M(t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e),"[1.000, 5.000,  9.000, 13.000,"," 2.000, 6.000, 10.000, 14.000,"," 3.000, 7.000, 11.000, 15.000,"," 4.000, 8.000, 12.000, 16.000]")
M.L(a2,t,1,"m11")
M.L(a2,p,2,"m21")
M.L(a2,l,3,"m31")
M.L(a2,h,4,"m41")
M.L(a2,s,5,"m12")
M.L(a2,o,6,"m22")
M.L(a2,k,7,"m32")
M.L(a2,g,8,"m42")
M.L(a2,r,9,"m13")
M.L(a2,n,10,"m23")
M.L(a2,j,11,"m33")
M.L(a2,f,12,"m43")
M.L(a2,q,13,"m14")
M.L(a2,m,14,"m24")
M.L(a2,i,15,"m34")
M.L(a2,e,16,"m44")
M.D(a2,V.mh(1.2,3.4,5.6),"[1.000, 0.000, 0.000, 1.200,"," 0.000, 1.000, 0.000, 3.400,"," 0.000, 0.000, 1.000, 5.600,",a0)
M.D(a2,V.M(1,2,0,0,3,4,0,0,0,0,1,0,0,0,0,1),"[1.000, 2.000, 0.000, 0.000,"," 3.000, 4.000, 0.000, 0.000,"," 0.000, 0.000, 1.000, 0.000,",a0)
M.D(a2,V.M(1,2,3,0,4,5,6,0,7,8,9,0,0,0,0,1),"[1.000, 2.000, 3.000, 0.000,"," 4.000, 5.000, 6.000, 0.000,"," 7.000, 8.000, 9.000, 0.000,",a0)},
$S:0}
M.kN.prototype={
$1:function(a){var t="[1.000, 0.000, 0.000, 0.000,",s=" 0.000, 1.000, 0.000, 0.000,",r=" 0.000, 0.000, 1.000, 0.000,",q=" 0.000, 0.000, 0.000, 1.000]",p="  0.000, 0.000, 0.000, 1.000]"
M.hq(a,V.aT(),t,s,r,q)
M.hq(a,V.mg(2,3,4,1),"[0.500, 0.000, 0.000, 0.000,"," 0.000, 0.333, 0.000, 0.000,"," 0.000, 0.000, 0.250, 0.000,",q)
M.hq(a,V.cg(0.7853981633974483),"[1.000,  0.000, 0.000, 0.000,"," 0.000,  0.707, 0.707, 0.000,"," 0.000, -0.707, 0.707, 0.000,"," 0.000,  0.000, 0.000, 1.000]")
M.hq(a,V.ch(0.7853981633974483),"[ 0.707, 0.000, 0.707, 0.000,","  0.000, 1.000, 0.000, 0.000,"," -0.707, 0.000, 0.707, 0.000,",p)
M.hq(a,V.ci(0.7853981633974483),"[ 0.707, 0.707, 0.000, 0.000,"," -0.707, 0.707, 0.000, 0.000,","  0.000, 0.000, 1.000, 0.000,",p)
M.D(a,V.M(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0).a2(0),t,s,r,q)},
$S:0}
M.kO.prototype={
$1:function(a){M.D(a,V.M(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6).L(0,V.M(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6)),"[ 1.900,  2.000,  2.100,  2.200,","  4.620,  4.880,  5.140,  5.400,","  7.340,  7.760,  8.180,  8.600,"," 10.060, 10.640, 11.220, 11.800]")
M.D(a,V.M(1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2,2.1,2.2,2.3,2.4,2.5,2.6).L(0,V.M(0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6)),"[3.700, 4.200, 4.700,  5.200,"," 4.820, 5.480, 6.140,  6.800,"," 5.940, 6.760, 7.580,  8.400,"," 7.060, 8.040, 9.020, 10.000]")},
$S:0}
M.kP.prototype={
$1:function(a){var t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bT(a,t,0,0,0,4,8,12)
M.bT(a,t,1,0,0,5,13,21)
M.bT(a,t,0,1,0,6,14,22)
M.bT(a,t,1,1,0,7,19,31)
M.bT(a,t,0,0,1,7,15,23)
M.bT(a,t,1,0,1,8,20,32)
M.bT(a,t,0,1,1,9,21,33)
M.bT(a,t,1,1,1,10,26,42)},
$S:0}
M.kQ.prototype={
$1:function(a){var t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.bV(a,t,0,0,0,0,0,0)
M.bV(a,t,1,0,0,1,5,9)
M.bV(a,t,0,1,0,2,6,10)
M.bV(a,t,1,1,0,3,11,19)
M.bV(a,t,0,0,1,3,7,11)
M.bV(a,t,1,0,1,4,12,20)
M.bV(a,t,0,1,1,5,13,21)
M.bV(a,t,1,1,1,6,18,30)},
$S:0}
M.kR.prototype={
$1:function(a){var t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.jP(a,t,0,0,4,8)
M.jP(a,t,1,0,5,13)
M.jP(a,t,0,1,6,14)
M.jP(a,t,1,1,7,19)},
$S:0}
M.kS.prototype={
$1:function(a){var t=V.M(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)
M.D(a,t,"[ 1.000,  2.000,  3.000,  4.000,","  5.000,  6.000,  7.000,  8.000,","  9.000, 10.000, 11.000, 12.000,"," 13.000, 14.000, 15.000, 16.000]")
M.jS(a,t,0,0,0,0)
M.jS(a,t,1,0,1,5)
M.jS(a,t,0,1,2,6)
M.jS(a,t,1,1,3,11)},
$S:0}
M.l0.prototype={
$1:function(a){var t,s=$.ml
if(s==null)s=$.ml=V.eO(0,0,0,0)
M.dN(a,s,0,0,0,0,0,0)
M.dN(a,s,1,2,0,0,1,2)
M.dN(a,s,-1,-2,-1,-2,1,2)
M.dN(a,V.eO(0,0,1,2),-1,-2,-1,-2,2,4)
t=V.eO(-1,-2,2,4)
M.dN(a,t,1,1,-1,-2,2,4)
M.dN(a,t,4,4,-1,-2,5,6)},
$S:0}
M.l1.prototype={
$1:function(a){var t,s=V.mn()
M.dO(a,s,0,0,0,0,0,0,0,0,0)
M.dO(a,s,1,2,3,0,0,0,1,2,3)
M.dO(a,s,-1,-2,-3,-1,-2,-3,1,2,3)
M.dO(a,V.B(0,0,0,1,2,3),-1,-2,-3,-1,-2,-3,2,4,6)
t=V.B(-1,-2,-3,2,4,6)
M.dO(a,t,1,1,1,-1,-2,-3,2,4,6)
M.dO(a,t,4,4,4,-1,-2,-3,5,6,7)},
$S:0}
M.l2.prototype={
$1:function(a){M.q2(a,V.aT(),V.mh(0,0,-5),[new M.aa(new V.o(0,0,0),new V.o(0,0,1.020051002550127)),new M.aa(new V.o(1,0,0),new V.o(-0.3464101615137755,0,1.020051002550127)),new M.aa(new V.o(-1,0,0),new V.o(0.3464101615137755,0,1.020051002550127)),new M.aa(new V.o(0,1,0),new V.o(0,-0.3464101615137755,1.020051002550127)),new M.aa(new V.o(0,-1,0),new V.o(0,0.3464101615137755,1.020051002550127)),new M.aa(new V.o(0,0,1),new V.o(0,0,1.016717502541794)),new M.aa(new V.o(0,0,-1),new V.o(0,0,1.025051252562628)),new M.aa(new V.o(1,1,1),new V.o(-0.2886751345948129,-0.2886751345948129,1.016717502541794)),new M.aa(new V.o(1,-1,1),new V.o(-0.2886751345948129,0.2886751345948129,1.016717502541794)),new M.aa(new V.o(1,1,-1),new V.o(-0.4330127018922194,-0.4330127018922194,1.025051252562628)),new M.aa(new V.o(1,-1,-1),new V.o(-0.4330127018922194,0.4330127018922194,1.025051252562628)),new M.aa(new V.o(-1,1,1),new V.o(0.2886751345948129,-0.2886751345948129,1.016717502541794)),new M.aa(new V.o(-1,-1,1),new V.o(0.2886751345948129,0.2886751345948129,1.016717502541794)),new M.aa(new V.o(-1,1,-1),new V.o(0.4330127018922194,-0.4330127018922194,1.025051252562628)),new M.aa(new V.o(-1,-1,-1),new V.o(0.4330127018922194,0.4330127018922194,1.025051252562628))])},
$S:0}
M.aa.prototype={}
M.dq.prototype={
el:function(a){var t="test_body body_hidden",s=this.b,r=s.className
r.toString
if(r!==t)s.className=t
else s.className="test_body body_shown"},
ab:function(a){var t,s,r,q,p=this,o=p.d
if(o!=null){t=p.e
if(t==null)t=new P.a7(Date.now(),!1)
s="("+C.d.aU(C.c.X(P.hR(t.a-o.a).a,1000)*0.001,2)+"s)"}else s=""
if(!p.y){r=p.c
r.className="test_header queued"
r.textContent="Queued: "+p.r+" "+s}else if(p.z){r=p.c
r.className="test_header failed"
r.textContent="Failed: "+p.r+" "+s}else{r=p.c
q=p.r
if(p.Q){r.className="test_header passed"
r.textContent="Passed: "+q+" "+s}else{r.className="test_header running"
r.textContent="Running: "+q+" "+s}}p.a.ab(0)},
f7:function(){var t=this,s=u.P,r=P.nV(new M.iL(t),s).bS(new M.iM(t),s),q=new M.iN(t),p=r.$ti,o=$.W,n=new P.aG(o,p)
if(o!==C.f)q=P.mV(q,o)
r.bk(new P.cw(n,2,null,q,p.T("@<1>").aZ(p.c).T("cw<1,2>")))
n.bS(new M.iO(t),s)},
i:function(a,b){var t,s,r,q=this.a.c.dj(a,0,a.length),p=q==null?a:q
p=H.dW(p," ","&nbsp;")
t='</dir><br class="'+b+'"><dir class="'+b+'">'
s=H.dW(p,"\n",t)
p=this.b
r=p.innerHTML
if(r==null)r=""
C.L.cV(p,r+('<dir class="'+b+'">'+s+"</dir>"))},
k:function(){var t=this
if(!t.z){t.z=!0
t.b.className="test_body body_shown"
t.ab(0)}},
av:function(a,b){var t,s,r=this,q="notice_log",p=Date.now()
for(t=0,s=0;t<a;){b.$0();++s
t=C.c.X(P.hR(Date.now()-p).a,1000)/1000}r.i("Benchmark results:\n",q)
r.i("  count    = "+s+"\n",q)
r.i("  duration = "+H.k(t)+" secs\n",q)
r.i("  average  = "+H.k(t/s)+" secs\n",q)
r.i("  estimate = "+H.k(s/t)+" per sec\n",q)},
$iaM:1}
M.iL.prototype={
$0:function(){var t=this.a
t.y=!0
t.ab(0)},
$S:7}
M.iM.prototype={
$1:function(a){var t=this.a
t.d=new P.a7(Date.now(),!1)
t.f.$1(t)
t.e=new P.a7(Date.now(),!1)},
$S:13}
M.iN.prototype={
$2:function(a,b){var t=this.a
t.e=new P.a7(Date.now(),!1)
t.i("\nException: "+H.k(a),"error_log")
t.k()
t.i("\nStack: "+H.k(b),"warning_log")},
$S:42}
M.iO.prototype={
$1:function(a){var t,s,r=this.a
r.Q=!0
t=r.a;++t.f
if(r.z)++t.r
t.ab(0)
s=t.f
t=t.e
if(s<t.length)P.f9(C.i,t[s].gcI())
r.ab(0)},
$S:13}
M.iP.prototype={
b1:function(a,b,c){var t,s=W.nW("checkbox")
s.className="log_checkbox"
s.checked=!0
W.a8(s,"change",new M.iQ(c,s),!1)
a.children.toString
a.appendChild(s).toString
t=document.createElement("span")
t.textContent=b
a.appendChild(t).toString},
ab:function(a){var t,s,r=this,q=C.d.aU(C.c.X(P.hR(Date.now()-r.d.a).a,1000)*0.001,2),p=r.e.length,o=r.f
if(p<=o){o=r.b
if(r.r>0){o.className="top_header failed"
t=r.r
if(t===1)o.textContent="Failed 1 Test ("+q+"s)"
else o.textContent="Failed "+t+" Tests ("+q+"s)"}else{o.textContent="Tests Passed ("+q+"s)"
o.className="top_header passed"}}else{s=C.d.aU(o/p*100,2)
o=r.b
o.textContent="Running Tests: "+r.f+"/"+p+" ("+s+"%)"
if(r.r>0){o.textContent=H.k(o.textContent)+" - "+r.r+" failed)"
o.className="topHeader failed"}else o.className="topHeader running"}},
q:function(a,b,c){var t,s,r,q,p,o=this
if(b.length<=0)b=H.k(c)
if(!C.b.c1(b,""))return
t=o.e
s=document
r=s.createElement("div")
r.className="test_body body_hidden"
s=s.createElement("div")
s.className="running top_header"
q=new M.dq(o,r,s,c,b,!1)
W.a8(s,"click",q.gek(),!1)
p=o.a
p.children.toString
p.appendChild(s).toString
p.appendChild(r).toString
q.ab(0)
t.push(q)
o.ab(0)
s=o.f
r=t.length
if(s+1===r){if(s>=r)return H.d(t,s)
P.f9(C.i,t[s].gcI())}}}
M.iQ.prototype={
$1:function(a){var t,s,r,q,p=document.querySelectorAll("."+this.a)
p.toString
t=this.b.checked
s=t===!0?"block":"none"
for(t=u.h,r=0;r<p.length;++r){q=t.a(p[r]).style
q.display=s}},
$S:4}
M.l3.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
M.ak(a,$.lh(),"None",0,0,0)
t=$.b9()
M.ak(a,t,"Pos",1,1,3)
s=$.b8()
M.ak(a,s,"Norm",2,1,3)
r=$.b7()
M.ak(a,r,"Binm",4,1,3)
q=$.ba()
M.ak(a,q,"Txt2D",8,1,2)
p=$.bD()
M.ak(a,p,"TxtCube",16,1,3)
o=$.bB()
M.ak(a,o,"Clr3",32,1,3)
M.ak(a,$.bC(),"Clr4",64,1,4)
n=$.bb()
M.ak(a,n,"Weight",128,1,1)
m=$.b6()
M.ak(a,m,"Bending",256,1,4)
t=t.a
s=t|s.a
M.ak(a,new Z.aE(s),"Pos|Norm",3,2,6)
q=q.a
M.ak(a,new Z.aE(t|q),"Pos|Txt2D",9,2,5)
M.ak(a,new Z.aE(s|r.a|q|o.a),"Pos|Norm|Binm|Txt2D|Clr3",47,5,14)
M.ak(a,new Z.aE(q|n.a),"Txt2D|Weight",136,2,3)
M.ak(a,new Z.aE(p.a|m.a),"TxtCube|Bending",272,2,7)},
$S:0}
M.l4.prototype={
$1:function(a){var t=$.b9(),s=$.b8(),r=t.a,q=s.a,p=$.b7(),o=p.a,n=$.ba(),m=n.a,l=$.bD(),k=l.a,j=$.bB(),i=new Z.aE(r|q|o|m|k|j.a)
M.ab(a,i,t,!0,0,0)
M.ab(a,i,s,!0,1,3)
M.ab(a,i,p,!0,2,6)
M.ab(a,i,n,!0,3,9)
M.ab(a,i,l,!0,4,11)
M.ab(a,i,j,!0,5,14)
M.ab(a,i,$.bC(),!1,-1,-1)
M.ab(a,i,$.bb(),!1,-1,-1)
M.ab(a,i,$.b6(),!1,-1,-1)},
$S:0}
M.l5.prototype={
$1:function(a){var t=$.b9(),s=$.b7(),r=t.a,q=s.a,p=$.bC(),o=p.a,n=$.bb(),m=n.a,l=$.b6(),k=new Z.aE(r|q|o|m|l.a)
M.ab(a,k,t,!0,0,0)
M.ab(a,k,$.b8(),!1,-1,-1)
M.ab(a,k,s,!0,1,3)
M.ab(a,k,$.ba(),!1,-1,-1)
M.ab(a,k,$.bB(),!1,-1,-1)
M.ab(a,k,p,!0,2,6)
M.ab(a,k,n,!0,3,10)
M.ab(a,k,l,!0,4,11)},
$S:0};(function aliases(){var t=J.a.prototype
t.cY=t.h
t=J.bI.prototype
t.d_=t.h
t=P.f.prototype
t.cZ=t.bf
t=W.O.prototype
t.bh=t.a4
t=W.dB.prototype
t.d0=t.ae
t=K.ej.prototype
t.cX=t.aA
t.bi=t.h
t=Y.e6.prototype
t.c2=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._instance_1i,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
t(J,"p7","o1",43)
s(J.az.prototype,"gen","u",26)
r(P,"pA","oy",9)
r(P,"pB","oz",9)
r(P,"pC","oA",9)
q(P,"n0","pk",1)
r(W,"rC","hV",45)
p(W,"pM",4,null,["$4"],["oD"],15,0)
p(W,"pN",4,null,["$4"],["oE"],15,0)
var j
o(j=E.c3.prototype,"gcA",0,0,null,["$1","$0"],["cB","eX"],2,0)
o(j,"gcw",0,0,null,["$1","$0"],["cz","eW"],2,0)
o(j,"gcu",0,0,null,["$1","$0"],["cv","eT"],2,0)
n(j,"geR","eS",5)
n(j,"geU","eV",5)
o(j=E.f8.prototype,"gc3",0,0,null,["$1","$0"],["c4","bj"],2,0)
m(j,"gf6","cH",1)
l(j=X.fk.prototype,"gdJ","dK",4)
l(j,"gdu","dv",4)
l(j,"gdD","dE",3)
l(j,"gdN","dO",17)
l(j,"gdL","dM",17)
l(j,"gdQ","dR",3)
l(j,"gdU","dV",3)
l(j,"gdH","dI",3)
l(j,"gdS","dT",3)
l(j,"gdF","dG",3)
l(j,"gdW","dX",29)
l(j,"gdY","dZ",4)
l(j,"ge3","e4",11)
l(j,"ge_","e0",11)
l(j,"ge1","e2",11)
k(V.ac.prototype,"gm","aM",8)
k(V.p.prototype,"gm","aM",8)
k(V.aD.prototype,"gm","aM",8)
o(j=M.ef.prototype,"gad",0,0,null,["$1","$0"],["ah","d5"],2,0)
n(j,"gdz","dA",5)
n(j,"gdB","dC",5)
o(X.eK.prototype,"gcc",0,0,null,["$1","$0"],["as","dw"],2,0)
l(j=M.dq.prototype,"gek","el",21)
m(j,"gcI","f7",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.F,null)
r(P.F,[H.lq,J.a,J.aO,P.J,P.du,P.f,H.bL,P.el,H.cW,H.fi,H.iX,H.ir,H.dE,H.bF,P.a3,H.id,H.et,H.i8,H.aA,H.fC,P.jB,P.cz,P.cA,P.e3,P.cw,P.aG,P.fo,P.f0,P.f1,P.jF,P.dL,P.jt,P.fJ,P.K,P.eS,P.e8,P.i7,P.jD,P.a7,P.c2,P.eJ,P.dl,P.jg,P.i2,P.a1,P.h2,P.bP,W.hK,W.ll,W.lB,W.cy,W.Q,W.dd,W.dB,W.h4,W.cX,W.jx,W.he,K.hz,K.ej,K.a4,L.eY,L.fa,L.fb,L.iT,O.cO,O.d8,Y.cr,Y.e6,E.c3,E.c1,E.cl,E.je,E.iw,E.f8,Z.aE,D.hF,D.cV,D.an,X.cM,X.eq,X.ia,X.ig,X.cj,X.il,X.iU,X.fk,V.bG,V.hX,V.ao,V.Y,V.P,V.ew,V.R,V.o,V.bn,V.dh,V.di,V.aB,V.ac,V.p,V.aD,M.ef,F.aR,F.i0,F.ib,F.ic,F.is,F.iB,F.eT,F.dk,F.co,F.dr,F.z,F.aq,F.ar,F.j6,F.j7,F.b0,O.iK,X.iJ,X.eK,V.iC,Q.h,Q.ah,Q.dn,Q.iI,Q.t,B.aI,B.hG,B.hH,B.hI,B.i1,B.j9,M.aa,M.dq,M.iP])
r(J.a,[J.em,J.c7,J.bI,J.az,J.c8,J.bi,H.da,W.b,W.hy,W.e7,W.aQ,W.N,W.fs,W.ay,W.hN,W.hP,W.ft,W.cS,W.fv,W.hQ,W.e,W.fA,W.bh,W.i5,W.fF,W.ie,W.ii,W.fK,W.fL,W.bk,W.fM,W.fO,W.bm,W.fS,W.fU,W.bp,W.fV,W.bq,W.h_,W.aL,W.h6,W.iS,W.br,W.h8,W.iV,W.j_,W.hf,W.hh,W.hj,W.hl,W.hn,P.bK,P.fH,P.bN,P.fQ,P.iu,P.h0,P.bR,P.ha,P.hC,P.fq,P.dj,P.fY])
r(J.bI,[J.eL,J.bS,J.aS])
s(J.eo,J.az)
r(J.c8,[J.d1,J.en])
r(P.J,[H.er,P.ff,H.ep,H.fh,H.eQ,H.fy,P.e2,P.eG,P.ax,P.fj,P.fg,P.cp,P.e9,P.ec])
s(P.d3,P.du)
r(P.d3,[H.cs,W.jh,W.aj])
s(H.a0,H.cs)
r(P.f,[H.j,H.c9,H.ct,P.d0])
r(H.j,[H.d4,H.bj])
s(H.cT,H.c9)
r(P.el,[H.d6,H.fn])
s(H.d7,H.d4)
s(H.de,P.ff)
r(H.bF,[H.f5,H.i9,H.la,H.lb,H.lc,P.jb,P.ja,P.jc,P.jd,P.jC,P.i4,P.ji,P.jm,P.jj,P.jk,P.jl,P.jp,P.jq,P.jo,P.jn,P.jM,P.jv,P.jw,P.ih,P.hS,P.hT,W.hU,W.ij,W.ik,W.iA,W.iH,W.jf,W.ip,W.io,W.jy,W.jz,W.jA,W.jE,P.jI,P.l6,P.hD,E.ix,E.iy,E.iz,E.iR,D.hZ,D.i_,F.jG,F.lg,F.lf,F.j8,F.j3,F.j4,V.iE,V.iD,Q.iG,M.k_,M.jZ,M.k0,M.jY,M.k1,M.jX,M.k2,M.jW,M.k3,M.jV,M.k4,M.jU,M.k5,M.k6,M.k8,M.k7,M.k9,M.ka,M.kb,M.kc,M.kd,M.ke,M.kf,M.kg,M.kh,M.ki,M.kj,M.kk,M.kl,M.km,M.kn,M.ko,M.kp,M.kq,M.kr,M.ks,M.kt,M.ku,M.kv,M.kw,M.kx,M.kC,M.kD,M.kE,M.kF,M.kG,M.kH,M.kI,M.kJ,M.ky,M.kz,M.kA,M.kB,M.kK,M.kL,M.kM,M.kT,M.kU,M.kV,M.kW,M.kX,M.kY,M.kZ,M.l_,M.kN,M.kO,M.kP,M.kQ,M.kR,M.kS,M.l0,M.l1,M.l2,M.iL,M.iM,M.iN,M.iO,M.iQ,M.l3,M.l4,M.l5])
r(H.f5,[H.eZ,H.c0])
s(P.d5,P.a3)
r(P.d5,[H.aK,W.fp])
s(H.ck,H.da)
r(H.ck,[H.dw,H.dy])
s(H.dx,H.dw)
s(H.bM,H.dx)
s(H.dz,H.dy)
s(H.d9,H.dz)
r(H.d9,[H.eA,H.eB,H.eC,H.eD,H.eE,H.db,H.eF])
s(H.dI,H.fy)
s(P.dF,P.d0)
s(P.ju,P.jF)
s(P.dA,P.dL)
s(P.dt,P.dA)
s(P.eb,P.f1)
s(P.hW,P.e8)
r(P.eb,[P.i6,P.j1])
s(P.j0,P.hW)
r(P.ax,[P.dg,P.ek])
r(W.b,[W.u,W.eh,W.aW,W.dC,W.aX,W.aC,W.dG,W.fm,W.cu,P.e5,P.bd])
r(W.u,[W.O,W.aJ,W.cv])
r(W.O,[W.n,P.i])
r(W.n,[W.e0,W.e1,W.c_,W.bE,W.cN,W.cQ,W.ei,W.c6,W.eR,W.dp,W.f3,W.f4,W.cq])
s(W.hJ,W.aQ)
s(W.cP,W.fs)
r(W.ay,[W.hL,W.hM])
s(W.fu,W.ft)
s(W.cR,W.fu)
s(W.fw,W.fv)
s(W.ee,W.fw)
s(W.bg,W.e7)
s(W.fB,W.fA)
s(W.eg,W.fB)
s(W.fG,W.fF)
s(W.bH,W.fG)
s(W.aZ,W.e)
r(W.aZ,[W.bJ,W.av,W.bQ])
s(W.ex,W.fK)
s(W.ey,W.fL)
s(W.fN,W.fM)
s(W.ez,W.fN)
s(W.fP,W.fO)
s(W.dc,W.fP)
s(W.fT,W.fS)
s(W.eM,W.fT)
s(W.eP,W.fU)
s(W.dD,W.dC)
s(W.eV,W.dD)
s(W.fW,W.fV)
s(W.eW,W.fW)
s(W.f_,W.h_)
s(W.h7,W.h6)
s(W.f6,W.h7)
s(W.dH,W.dG)
s(W.f7,W.dH)
s(W.h9,W.h8)
s(W.fc,W.h9)
s(W.bt,W.av)
s(W.hg,W.hf)
s(W.fr,W.hg)
s(W.ds,W.cS)
s(W.hi,W.hh)
s(W.fD,W.hi)
s(W.hk,W.hj)
s(W.dv,W.hk)
s(W.hm,W.hl)
s(W.fX,W.hm)
s(W.ho,W.hn)
s(W.h3,W.ho)
s(W.fx,W.fp)
s(W.fz,P.f0)
s(W.h5,W.dB)
s(P.fI,P.fH)
s(P.es,P.fI)
s(P.fR,P.fQ)
s(P.eH,P.fR)
s(P.cn,P.i)
s(P.h1,P.h0)
s(P.f2,P.h1)
s(P.hb,P.ha)
s(P.fd,P.hb)
s(P.e4,P.fq)
s(P.eI,P.bd)
s(P.fZ,P.fY)
s(P.eX,P.fZ)
r(K.ej,[K.bl,L.iW])
r(Y.e6,[Y.fe,Y.bs])
r(D.an,[D.cZ,D.d_,D.ai])
s(U.im,D.hF)
s(U.ea,U.im)
s(F.iF,F.i0)
s(F.iZ,F.ic)
s(F.fl,F.j6)
r(F.j7,[F.j5,F.iq])
s(O.hO,O.iK)
s(X.i3,X.iJ)
t(H.cs,H.fi)
t(H.dw,P.K)
t(H.dx,H.cW)
t(H.dy,P.K)
t(H.dz,H.cW)
t(P.du,P.K)
t(P.dL,P.eS)
t(W.fs,W.hK)
t(W.ft,P.K)
t(W.fu,W.Q)
t(W.fv,P.K)
t(W.fw,W.Q)
t(W.fA,P.K)
t(W.fB,W.Q)
t(W.fF,P.K)
t(W.fG,W.Q)
t(W.fK,P.a3)
t(W.fL,P.a3)
t(W.fM,P.K)
t(W.fN,W.Q)
t(W.fO,P.K)
t(W.fP,W.Q)
t(W.fS,P.K)
t(W.fT,W.Q)
t(W.fU,P.a3)
t(W.dC,P.K)
t(W.dD,W.Q)
t(W.fV,P.K)
t(W.fW,W.Q)
t(W.h_,P.a3)
t(W.h6,P.K)
t(W.h7,W.Q)
t(W.dG,P.K)
t(W.dH,W.Q)
t(W.h8,P.K)
t(W.h9,W.Q)
t(W.hf,P.K)
t(W.hg,W.Q)
t(W.hh,P.K)
t(W.hi,W.Q)
t(W.hj,P.K)
t(W.hk,W.Q)
t(W.hl,P.K)
t(W.hm,W.Q)
t(W.hn,P.K)
t(W.ho,W.Q)
t(P.fH,P.K)
t(P.fI,W.Q)
t(P.fQ,P.K)
t(P.fR,W.Q)
t(P.h0,P.K)
t(P.h1,W.Q)
t(P.ha,P.K)
t(P.hb,W.Q)
t(P.fq,P.a3)
t(P.fY,P.K)
t(P.fZ,W.Q)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{w:"int",a_:"double",ag:"num",r:"String",a9:"bool",a1:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(aM)","~()","~([an?])","~(av)","~(e)","~(w,f<c3>)","~(r,@)","a1()","a_()","~(~())","~(an)","~(bQ)","~(aR)","a1(F?)","~(dr,a_,a_)","a9(O,r,r,cy)","r(w)","~(bJ)","a1(@)","~(~(an))","a9(r)","~(@)","a9(aU)","~(u,u?)","r(r)","~(ag)","~(F?)","~(r,r)","a9(u)","~(bt)","~(F?,F?)","aG<@>(@)","a1(F,dm)","a_(a_,a_)","a1(~())","~(ah)","@(r)","~(aM,r,l<r>)","~(aM,a9,a9,l<r>)","~(aM,dn,r,l<r>)","~(aM,w,w,a9,w,r)","@(@,r)","a1(@,@)","w(@,@)","@(@)","r(b)","~(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.oU(v.typeUniverse,JSON.parse('{"eL":"bI","bS":"bI","aS":"bI","q8":"e","qk":"e","qa":"bd","q9":"b","qD":"b","qG":"b","q7":"i","ql":"i","qb":"n","qB":"n","qz":"u","qj":"u","ri":"aC","qf":"aZ","qc":"aJ","qH":"aJ","qF":"av","qA":"bH","qg":"N","qh":"aL","qC":"bM","em":{"a9":[]},"c7":{"a1":[]},"az":{"l":["1"],"j":["1"],"f":["1"]},"eo":{"l":["1"],"j":["1"],"f":["1"]},"c8":{"a_":[],"ag":[]},"d1":{"a_":[],"w":[],"ag":[]},"en":{"a_":[],"ag":[]},"bi":{"r":[]},"er":{"J":[]},"a0":{"l":["w"],"j":["w"],"f":["w"]},"j":{"f":["1"]},"d4":{"j":["1"],"f":["1"]},"c9":{"f":["2"]},"cT":{"j":["2"],"f":["2"]},"d7":{"j":["2"],"f":["2"]},"ct":{"f":["1"]},"cs":{"l":["1"],"j":["1"],"f":["1"]},"de":{"J":[]},"ep":{"J":[]},"fh":{"J":[]},"dE":{"dm":[]},"bF":{"cY":[]},"f5":{"cY":[]},"eZ":{"cY":[]},"c0":{"cY":[]},"eQ":{"J":[]},"aK":{"a2":["1","2"],"a3.V":"2"},"bj":{"j":["1"],"f":["1"]},"ck":{"x":["1"]},"bM":{"x":["a_"],"l":["a_"],"j":["a_"],"f":["a_"]},"d9":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"eA":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"eB":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"eC":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"eD":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"eE":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"db":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"eF":{"x":["w"],"l":["w"],"j":["w"],"f":["w"]},"fy":{"J":[]},"dI":{"J":[]},"aG":{"c5":["1"]},"dF":{"f":["1"]},"e3":{"J":[]},"dt":{"j":["1"],"f":["1"]},"d0":{"f":["1"]},"d3":{"l":["1"],"j":["1"],"f":["1"]},"d5":{"a2":["1","2"]},"a3":{"a2":["1","2"]},"dA":{"j":["1"],"f":["1"]},"a_":{"ag":[]},"w":{"ag":[]},"l":{"j":["1"],"f":["1"]},"e2":{"J":[]},"ff":{"J":[]},"eG":{"J":[]},"ax":{"J":[]},"dg":{"J":[]},"ek":{"J":[]},"fj":{"J":[]},"fg":{"J":[]},"cp":{"J":[]},"e9":{"J":[]},"eJ":{"J":[]},"dl":{"J":[]},"ec":{"J":[]},"h2":{"dm":[]},"O":{"u":[],"b":[]},"bJ":{"e":[]},"av":{"e":[]},"u":{"b":[]},"aW":{"b":[]},"aX":{"b":[]},"aC":{"b":[]},"bQ":{"e":[]},"aZ":{"e":[]},"bt":{"av":[],"e":[]},"cy":{"aU":[]},"n":{"O":[],"u":[],"b":[]},"e0":{"O":[],"u":[],"b":[]},"e1":{"O":[],"u":[],"b":[]},"c_":{"O":[],"u":[],"b":[]},"bE":{"O":[],"u":[],"b":[]},"cN":{"O":[],"u":[],"b":[]},"aJ":{"u":[],"b":[]},"cQ":{"O":[],"u":[],"b":[]},"cR":{"l":["bO<ag>"],"x":["bO<ag>"],"j":["bO<ag>"],"f":["bO<ag>"]},"cS":{"bO":["ag"]},"ee":{"l":["r"],"x":["r"],"j":["r"],"f":["r"]},"jh":{"l":["1"],"j":["1"],"f":["1"]},"eg":{"l":["bg"],"x":["bg"],"j":["bg"],"f":["bg"]},"eh":{"b":[]},"ei":{"O":[],"u":[],"b":[]},"bH":{"l":["u"],"x":["u"],"j":["u"],"f":["u"]},"c6":{"O":[],"u":[],"b":[]},"ex":{"a2":["r","@"],"a3.V":"@"},"ey":{"a2":["r","@"],"a3.V":"@"},"ez":{"l":["bk"],"x":["bk"],"j":["bk"],"f":["bk"]},"aj":{"l":["u"],"j":["u"],"f":["u"]},"dc":{"l":["u"],"x":["u"],"j":["u"],"f":["u"]},"eM":{"l":["bm"],"x":["bm"],"j":["bm"],"f":["bm"]},"eP":{"a2":["r","@"],"a3.V":"@"},"eR":{"O":[],"u":[],"b":[]},"eV":{"l":["aW"],"x":["aW"],"b":[],"j":["aW"],"f":["aW"]},"eW":{"l":["bp"],"x":["bp"],"j":["bp"],"f":["bp"]},"f_":{"a2":["r","r"],"a3.V":"r"},"dp":{"O":[],"u":[],"b":[]},"f3":{"O":[],"u":[],"b":[]},"f4":{"O":[],"u":[],"b":[]},"cq":{"O":[],"u":[],"b":[]},"f6":{"l":["aC"],"x":["aC"],"j":["aC"],"f":["aC"]},"f7":{"l":["aX"],"x":["aX"],"b":[],"j":["aX"],"f":["aX"]},"fc":{"l":["br"],"x":["br"],"j":["br"],"f":["br"]},"fm":{"b":[]},"cu":{"b":[]},"cv":{"u":[],"b":[]},"fr":{"l":["N"],"x":["N"],"j":["N"],"f":["N"]},"ds":{"bO":["ag"]},"fD":{"l":["bh?"],"x":["bh?"],"j":["bh?"],"f":["bh?"]},"dv":{"l":["u"],"x":["u"],"j":["u"],"f":["u"]},"fX":{"l":["bq"],"x":["bq"],"j":["bq"],"f":["bq"]},"h3":{"l":["aL"],"x":["aL"],"j":["aL"],"f":["aL"]},"fp":{"a2":["r","r"]},"fx":{"a2":["r","r"],"a3.V":"r"},"dd":{"aU":[]},"dB":{"aU":[]},"h5":{"aU":[]},"h4":{"aU":[]},"es":{"l":["bK"],"j":["bK"],"f":["bK"]},"eH":{"l":["bN"],"j":["bN"],"f":["bN"]},"cn":{"i":[],"O":[],"u":[],"b":[]},"f2":{"l":["r"],"j":["r"],"f":["r"]},"i":{"O":[],"u":[],"b":[]},"fd":{"l":["bR"],"j":["bR"],"f":["bR"]},"e4":{"a2":["r","@"],"a3.V":"@"},"e5":{"b":[]},"bd":{"b":[]},"eI":{"b":[]},"eX":{"l":["a2<@,@>"],"j":["a2<@,@>"],"f":["a2<@,@>"]},"cO":{"f":["1"]},"cZ":{"an":[]},"d_":{"an":[]},"ai":{"an":[]},"dq":{"aM":[]},"bO":{"rm":["1"]}}'))
H.oT(v.typeUniverse,JSON.parse('{"az":1,"eo":1,"aO":1,"j":1,"d4":1,"bL":1,"c9":2,"cT":2,"d6":2,"d7":2,"ct":1,"fn":1,"cW":1,"fi":1,"cs":1,"bj":1,"et":1,"ck":1,"cA":1,"dF":1,"f0":1,"f1":2,"fJ":1,"d0":1,"d3":1,"K":1,"d5":2,"a3":2,"eS":1,"dA":1,"du":1,"dL":1,"e8":2,"eb":2,"f":1,"l":1,"el":1,"fz":1,"Q":1,"cX":1,"cO":1,"cZ":1,"d_":1,"ai":1}'))
0
var u=(function rtii(){var t=H.pI
return{y:t("c_"),t:t("bE"),O:t("j<@>"),h:t("O"),C:t("J"),B:t("e"),Z:t("cY"),c:t("c5<@>"),r:t("c6"),b:t("az<@>"),T:t("c7"),g:t("aS"),p:t("x<@>"),q:t("aK<w,a9>"),j:t("l<@>"),f:t("a2<@,@>"),P:t("a1"),K:t("F"),I:t("bO<ag>"),Y:t("cn"),N:t("r"),u:t("i"),G:t("cq"),J:t("fa"),o:t("bS"),x:t("cv"),v:t("a9"),i:t("a_"),z:t("@"),w:t("@(F)"),Q:t("@(F,dm)"),S:t("w"),A:t("0&*"),_:t("F*"),R:t("c5<a1>?"),X:t("F?"),s:t("dj?"),U:t("eY?"),D:t("fb?"),H:t("ag")}})();(function constants(){var t=hunkHelpers.makeConstList
C.m=W.bE.prototype
C.K=W.cN.prototype
C.L=W.cQ.prototype
C.N=J.a.prototype
C.a=J.az.prototype
C.c=J.d1.prototype
C.O=J.c7.prototype
C.d=J.c8.prototype
C.b=J.bi.prototype
C.P=J.aS.prototype
C.u=J.eL.prototype
C.v=W.dp.prototype
C.l=J.bS.prototype
C.x=W.bt.prototype
C.y=W.cu.prototype
C.z=new E.c1("Browser.chrome")
C.n=new E.c1("Browser.firefox")
C.o=new E.c1("Browser.edge")
C.A=new E.c1("Browser.other")
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

C.H=new P.eJ()
C.r=new P.j0()
C.I=new P.j1()
C.f=new P.ju()
C.J=new P.h2()
C.i=new P.c2(0)
C.M=new P.i7("element",!1,!1,!1)
C.Q=t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.R=t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.S=t([])
C.T=t([0,0,65498,45055,65535,34815,65534,18431])
C.t=t(["bind","if","ref","repeat","syntax"])
C.k=t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.U=new E.cl("OperatingSystem.windows")
C.V=new E.cl("OperatingSystem.mac")
C.W=new E.cl("OperatingSystem.linux")
C.X=new E.cl("OperatingSystem.other")
C.j=new Y.cr("Type.Intesected")
C.h=new Y.cr("Type.NoCollision")
C.w=new Y.cr("Type.OutOfRange")
C.e=new Y.cr("Type.Collision")
C.Y=new P.cz(null,2)})();(function staticFields(){$.jr=null
$.aP=0
$.cL=null
$.m_=null
$.n3=null
$.n_=null
$.n8=null
$.l7=null
$.ld=null
$.lP=null
$.cB=null
$.dQ=null
$.dR=null
$.lL=!1
$.W=C.f
$.as=[]
$.bf=null
$.lj=null
$.m6=null
$.m5=null
$.fE=P.eu(u.N,u.Z)
$.m7=null
$.me=null
$.mf=null
$.mi=null
$.aV=null
$.it=null
$.ml=null
$.mk=null
$.mm=null
$.j2=null
$.my=null
$.mz=null
$.mx=null
$.mA=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"qi","nf",function(){return H.pL("_$dart_dartClosure")})
t($,"qX","nl",function(){return H.aY(H.iY({
toString:function(){return"$receiver$"}}))})
t($,"qY","nm",function(){return H.aY(H.iY({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"qZ","nn",function(){return H.aY(H.iY(null))})
t($,"r_","no",function(){return H.aY(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"r2","nr",function(){return H.aY(H.iY(void 0))})
t($,"r3","ns",function(){return H.aY(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"r1","nq",function(){return H.aY(H.mu(null))})
t($,"r0","np",function(){return H.aY(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"r5","nu",function(){return H.aY(H.mu(void 0))})
t($,"r4","nt",function(){return H.aY(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"rj","lW",function(){return P.ox()})
t($,"rn","ny",function(){return P.om("^[\\-\\.0-9A-Z_a-z~]*$")})
t($,"rk","nx",function(){return P.ma(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"rc","lh",function(){return Z.aF(0)})
t($,"r6","nv",function(){return Z.aF(511)})
t($,"re","b9",function(){return Z.aF(1)})
t($,"rd","b8",function(){return Z.aF(2)})
t($,"r8","b7",function(){return Z.aF(4)})
t($,"rf","ba",function(){return Z.aF(8)})
t($,"rg","bD",function(){return Z.aF(16)})
t($,"r9","bB",function(){return Z.aF(32)})
t($,"ra","bC",function(){return Z.aF(64)})
t($,"rb","nw",function(){return Z.aF(96)})
t($,"rh","bb",function(){return Z.aF(128)})
t($,"r7","b6",function(){return Z.aF(256)})
t($,"qe","ne",function(){return new V.hX()})
s($,"qd","A",function(){return $.ne()})
t($,"qp","aH",function(){return V.au(0)})
t($,"qm","dX",function(){return V.au(511)})
t($,"qs","cG",function(){return V.au(1)})
t($,"qq","nh",function(){return V.au(2)})
t($,"qr","cF",function(){return V.au(4)})
t($,"qv","cH",function(){return V.au(8)})
t($,"qt","ni",function(){return V.au(16)})
t($,"qu","dY",function(){return V.au(32)})
t($,"qy","dZ",function(){return V.au(64)})
t($,"qw","nj",function(){return V.au(128)})
t($,"qx","cI",function(){return V.au(256)})
t($,"qo","lT",function(){return V.au(146)})
t($,"qn","ng",function(){return V.au(365)})
s($,"qE","nk",function(){var r,q,p,o,n,m=V.ls(),l=$.my
if(l==null)l=$.my=V.mw(0,1,0)
r=$.mx
q=(r==null?$.mx=V.mw(0,0,-1):r).Y()
p=l.bG(q).Y()
o=q.bG(p)
n=V.ow(m)
return V.M(p.a,o.a,q.a,p.bg(0).af(n),p.b,o.b,q.b,o.bg(0).af(n),p.c,o.c,q.c,q.bg(0).af(n),0,0,0,1)})
t($,"qR","lV",function(){return Q.ap(-1)})
t($,"qM","X",function(){return Q.ap(0)})
t($,"qQ","bA",function(){return Q.ap(4096)})
t($,"qL","bX",function(){return Q.ap(15)})
t($,"qN","hw",function(){return $.lU().bX(0,$.bY()).bX(0,$.bX())})
t($,"qJ","hv",function(){return Q.ap(256)})
t($,"qW","b5",function(){return Q.ap(512)})
t($,"qK","lU",function(){return Q.ap(768)})
t($,"qS","cK",function(){return Q.ap(16)})
t($,"qV","aN",function(){return Q.ap(32)})
t($,"qP","cJ",function(){return Q.ap(48)})
t($,"qI","b4",function(){return Q.ap(64)})
t($,"qU","at",function(){return Q.ap(80)})
t($,"qO","bz",function(){return Q.ap(96)})
t($,"qT","bY",function(){return Q.ap(240)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.da,ArrayBufferView:H.da,Float32Array:H.bM,Float64Array:H.bM,Int16Array:H.eA,Int32Array:H.eB,Int8Array:H.eC,Uint16Array:H.eD,Uint32Array:H.eE,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.eF,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.hy,HTMLAnchorElement:W.e0,HTMLAreaElement:W.e1,HTMLBaseElement:W.c_,Blob:W.e7,HTMLBodyElement:W.bE,HTMLCanvasElement:W.cN,CDATASection:W.aJ,CharacterData:W.aJ,Comment:W.aJ,ProcessingInstruction:W.aJ,Text:W.aJ,CSSPerspective:W.hJ,CSSCharsetRule:W.N,CSSConditionRule:W.N,CSSFontFaceRule:W.N,CSSGroupingRule:W.N,CSSImportRule:W.N,CSSKeyframeRule:W.N,MozCSSKeyframeRule:W.N,WebKitCSSKeyframeRule:W.N,CSSKeyframesRule:W.N,MozCSSKeyframesRule:W.N,WebKitCSSKeyframesRule:W.N,CSSMediaRule:W.N,CSSNamespaceRule:W.N,CSSPageRule:W.N,CSSRule:W.N,CSSStyleRule:W.N,CSSSupportsRule:W.N,CSSViewportRule:W.N,CSSStyleDeclaration:W.cP,MSStyleCSSProperties:W.cP,CSS2Properties:W.cP,CSSImageValue:W.ay,CSSKeywordValue:W.ay,CSSNumericValue:W.ay,CSSPositionValue:W.ay,CSSResourceValue:W.ay,CSSUnitValue:W.ay,CSSURLImageValue:W.ay,CSSStyleValue:W.ay,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.hL,CSSUnparsedValue:W.hM,DataTransferItemList:W.hN,HTMLDivElement:W.cQ,DOMException:W.hP,ClientRectList:W.cR,DOMRectList:W.cR,DOMRectReadOnly:W.cS,DOMStringList:W.ee,DOMTokenList:W.hQ,Element:W.O,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,SubmitEvent:W.e,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.bg,FileList:W.eg,FileWriter:W.eh,HTMLFormElement:W.ei,Gamepad:W.bh,History:W.i5,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,HTMLInputElement:W.c6,KeyboardEvent:W.bJ,Location:W.ie,MediaList:W.ii,MIDIInputMap:W.ex,MIDIOutputMap:W.ey,MimeType:W.bk,MimeTypeArray:W.ez,PointerEvent:W.av,MouseEvent:W.av,DragEvent:W.av,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.dc,RadioNodeList:W.dc,Plugin:W.bm,PluginArray:W.eM,RTCStatsReport:W.eP,HTMLSelectElement:W.eR,SourceBuffer:W.aW,SourceBufferList:W.eV,SpeechGrammar:W.bp,SpeechGrammarList:W.eW,SpeechRecognitionResult:W.bq,Storage:W.f_,CSSStyleSheet:W.aL,StyleSheet:W.aL,HTMLTableElement:W.dp,HTMLTableRowElement:W.f3,HTMLTableSectionElement:W.f4,HTMLTemplateElement:W.cq,TextTrack:W.aX,TextTrackCue:W.aC,VTTCue:W.aC,TextTrackCueList:W.f6,TextTrackList:W.f7,TimeRanges:W.iS,Touch:W.br,TouchEvent:W.bQ,TouchList:W.fc,TrackDefaultList:W.iV,CompositionEvent:W.aZ,FocusEvent:W.aZ,TextEvent:W.aZ,UIEvent:W.aZ,URL:W.j_,VideoTrackList:W.fm,WheelEvent:W.bt,Window:W.cu,DOMWindow:W.cu,Attr:W.cv,CSSRuleList:W.fr,ClientRect:W.ds,DOMRect:W.ds,GamepadList:W.fD,NamedNodeMap:W.dv,MozNamedAttrMap:W.dv,SpeechRecognitionResultList:W.fX,StyleSheetList:W.h3,SVGLength:P.bK,SVGLengthList:P.es,SVGNumber:P.bN,SVGNumberList:P.eH,SVGPointList:P.iu,SVGScriptElement:P.cn,SVGStringList:P.f2,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.bR,SVGTransformList:P.fd,AudioBuffer:P.hC,AudioParamMap:P.e4,AudioTrackList:P.e5,AudioContext:P.bd,webkitAudioContext:P.bd,BaseAudioContext:P.bd,OfflineAudioContext:P.eI,WebGL2RenderingContext:P.dj,SQLResultSetRowList:P.eX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
W.dC.$nativeSuperclassTag="EventTarget"
W.dD.$nativeSuperclassTag="EventTarget"
W.dG.$nativeSuperclassTag="EventTarget"
W.dH.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=M.pX
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=test.dart.js.map
