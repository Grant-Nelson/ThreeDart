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
a[c]=function(){a[c]=function(){H.nn(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.jr(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={j4:function j4(){},
lC:function(a,b){if(u.O.b(a))return new H.bV(a,b)
return new H.aZ(a,b)},
j2:function(){return new P.bx("No element")},
lw:function(){return new P.bx("Too many elements")},
lU:function(a,b){var t=J.aL(a)
if(typeof t!=="number")return t.V()
H.dT(a,0,t-1,b)},
dT:function(a,b,c,d){if(c-b<=32)H.lT(a,b,c,d)
else H.lS(a,b,c,d)},
lT:function(a,b,c,d){var t,s,r,q,p,o
for(t=b+1,s=J.bd(a);t<=c;++t){r=s.j(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.j(a,q-1),r)
if(typeof p!=="number")return p.U()
p=p>0}else p=!1
if(!p)break
o=q-1
s.m(a,q,s.j(a,o))
q=o}s.m(a,q,r)}},
lS:function(a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i=C.c.a8(a6-a5+1,6),h=a5+i,g=a6-i,f=C.c.a8(a5+a6,2),e=f-i,d=f+i,c=J.bd(a4),b=c.j(a4,h),a=c.j(a4,e),a0=c.j(a4,f),a1=c.j(a4,d),a2=c.j(a4,g),a3=a7.$2(b,a)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a
a=b
b=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a2
a2=a1
a1=t}a3=a7.$2(b,a0)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a0
a0=b
b=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(b,a1)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a1
a1=b
b=t}a3=a7.$2(a0,a1)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a1
a1=a0
a0=t}a3=a7.$2(a,a2)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a2
a2=a
a=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.U()
if(a3>0){t=a2
a2=a1
a1=t}c.m(a4,h,b)
c.m(a4,f,a0)
c.m(a4,g,a2)
c.m(a4,e,c.j(a4,a5))
c.m(a4,d,c.j(a4,a6))
s=a5+1
r=a6-1
if(J.H(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.j(a4,q)
o=a7.$2(p,a)
if(o===0)continue
if(typeof o!=="number")return o.a0()
if(o<0){if(q!==s){c.m(a4,q,c.j(a4,s))
c.m(a4,s,p)}++s}else for(;!0;){o=a7.$2(c.j(a4,r),a)
if(typeof o!=="number")return o.U()
if(o>0){--r
continue}else{n=r-1
if(o<0){c.m(a4,q,c.j(a4,s))
m=s+1
c.m(a4,s,c.j(a4,r))
c.m(a4,r,p)
r=n
s=m
break}else{c.m(a4,q,c.j(a4,r))
c.m(a4,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=c.j(a4,q)
k=a7.$2(p,a)
if(typeof k!=="number")return k.a0()
if(k<0){if(q!==s){c.m(a4,q,c.j(a4,s))
c.m(a4,s,p)}++s}else{j=a7.$2(p,a1)
if(typeof j!=="number")return j.U()
if(j>0)for(;!0;){o=a7.$2(c.j(a4,r),a1)
if(typeof o!=="number")return o.U()
if(o>0){--r
if(r<q)break
continue}else{o=a7.$2(c.j(a4,r),a)
if(typeof o!=="number")return o.a0()
n=r-1
if(o<0){c.m(a4,q,c.j(a4,s))
m=s+1
c.m(a4,s,c.j(a4,r))
c.m(a4,r,p)
s=m}else{c.m(a4,q,c.j(a4,r))
c.m(a4,r,p)}r=n
break}}}}l=!1}a3=s-1
c.m(a4,a5,c.j(a4,a3))
c.m(a4,a3,a)
a3=r+1
c.m(a4,a6,c.j(a4,a3))
c.m(a4,a3,a1)
H.dT(a4,a5,s-2,a7)
H.dT(a4,r+2,a6,a7)
if(l)return
if(s<h&&r>g){for(;J.H(a7.$2(c.j(a4,s),a),0);)++s
for(;J.H(a7.$2(c.j(a4,r),a1),0);)--r
for(q=s;q<=r;++q){p=c.j(a4,q)
if(a7.$2(p,a)===0){if(q!==s){c.m(a4,q,c.j(a4,s))
c.m(a4,s,p)}++s}else if(a7.$2(p,a1)===0)for(;!0;)if(a7.$2(c.j(a4,r),a1)===0){--r
if(r<q)break
continue}else{o=a7.$2(c.j(a4,r),a)
if(typeof o!=="number")return o.a0()
n=r-1
if(o<0){c.m(a4,q,c.j(a4,s))
m=s+1
c.m(a4,s,c.j(a4,r))
c.m(a4,r,p)
s=m}else{c.m(a4,q,c.j(a4,r))
c.m(a4,r,p)}r=n
break}}H.dT(a4,s,r,a7)}else H.dT(a4,s,r,a7)},
k:function k(a){this.a=a},
i:function i(){},
c7:function c7(){},
au:function au(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aZ:function aZ(a,b){this.a=a
this.b=b},
bV:function bV(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=null
this.b=a
this.c=b},
ca:function ca(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
bY:function bY(){},
ed:function ed(){},
bB:function bB(){},
kQ:function(a){var t,s=H.kP(a)
if(s!=null)return s
t="minified:"+a
return t},
nf:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.V(a)
if(typeof t!="string")throw H.c(H.aE(a))
return t},
ch:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dM:function(a){return H.lD(a)},
lD:function(a){var t,s,r
if(a instanceof P.E)return H.a1(H.cR(a),null)
if(J.cQ(a)===C.K||u.o.b(a)){t=C.o(a)
if(H.k3(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.k3(r))return r}}return H.a1(H.cR(a),null)},
k3:function(a){var t=a!=="Object"&&a!==""
return t},
k2:function(a){var t,s,r,q,p=a.length
if(p<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<p;s=r){r=s+500
q=r<p?r:p
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lM:function(a){var t,s,r,q=[]
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.r)(a),++s){r=a[s]
if(!H.cM(r))throw H.c(H.aE(r))
if(r<=65535)q.push(r)
else if(r<=1114111){q.push(55296+(C.c.aM(r-65536,10)&1023))
q.push(56320+(r&1023))}else throw H.c(H.aE(r))}return H.k2(q)},
lL:function(a){var t,s,r
for(t=a.length,s=0;s<t;++s){r=a[s]
if(!H.cM(r))throw H.c(H.aE(r))
if(r<0)throw H.c(H.aE(r))
if(r>65535)return H.lM(a)}return H.k2(a)},
j8:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.c.aM(t,10))>>>0,56320|t&1023)}throw H.c(P.aw(a,0,1114111,null,null))},
bu:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lK:function(a){var t=H.bu(a).getFullYear()+0
return t},
lI:function(a){var t=H.bu(a).getMonth()+1
return t},
lE:function(a){var t=H.bu(a).getDate()+0
return t},
lF:function(a){var t=H.bu(a).getHours()+0
return t},
lH:function(a){var t=H.bu(a).getMinutes()+0
return t},
lJ:function(a){var t=H.bu(a).getSeconds()+0
return t},
lG:function(a){var t=H.bu(a).getMilliseconds()+0
return t},
n:function(a){throw H.c(H.aE(a))},
e:function(a,b){if(a==null)J.aL(a)
throw H.c(H.bJ(a,b))},
bJ:function(a,b){var t,s,r="index"
if(!H.cM(b))return new P.Z(!0,b,r,null)
t=J.aL(a)
if(!(b<0)){if(typeof t!=="number")return H.n(t)
s=b>=t}else s=!0
if(s)return P.B(b,a,r,null,t)
return P.dN(b,r)},
n2:function(a,b,c){if(a>c)return P.aw(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aw(b,a,c,"end",null)
return new P.Z(!0,b,"end",null)},
aE:function(a){return new P.Z(!0,a,null,null)},
mY:function(a){if(typeof a!="number")throw H.c(H.aE(a))
return a},
c:function(a){var t,s
if(a==null)a=new P.dC()
t=new Error()
t.dartException=a
s=H.no
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
no:function(){return J.V(this.dartException)},
L:function(a){throw H.c(a)},
r:function(a){throw H.c(P.aQ(a))},
ak:function(a){var t,s,r,q,p,o
a=H.kN(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ke:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jZ:function(a,b){return new H.dB(a,b==null?null:b.method)},
j5:function(a,b){var t=b==null,s=t?null:b.method
return new H.dj(a,s,t?null:b.receiver)},
ap:function(a){if(a==null)return new H.hf(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.be(a,a.dartException)
return H.mU(a)},
be:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mU:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.aM(s,16)&8191)===10)switch(r){case 438:return H.be(a,H.j5(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return H.be(a,H.jZ(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.kT()
p=$.kU()
o=$.kV()
n=$.kW()
m=$.kZ()
l=$.l_()
k=$.kY()
$.kX()
j=$.l1()
i=$.l0()
h=q.a3(t)
if(h!=null)return H.be(a,H.j5(t,h))
else{h=p.a3(t)
if(h!=null){h.method="call"
return H.be(a,H.j5(t,h))}else{h=o.a3(t)
if(h==null){h=n.a3(t)
if(h==null){h=m.a3(t)
if(h==null){h=l.a3(t)
if(h==null){h=k.a3(t)
if(h==null){h=n.a3(t)
if(h==null){h=j.a3(t)
if(h==null){h=i.a3(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.be(a,H.jZ(t,h))}}return H.be(a,new H.ec(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ci()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.be(a,new P.Z(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ci()
return a},
jt:function(a){var t
if(a==null)return new H.eW(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.eW(a)},
n4:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
ne:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.J("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ne)
a.$identity=t
return t},
lq:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.hy().constructor.prototype):Object.create(new H.bO(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.af
if(typeof s!=="number")return s.v()
$.af=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.jJ(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.lm(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jJ(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
lm:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kI,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
t=c?H.lk:H.lj
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.c("Error in functionType of tearoff")},
ln:function(a,b,c,d){var t=H.jI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jJ:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.lp(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.ln(s,!q,t,b)
if(s===0){q=$.af
if(typeof q!=="number")return q.v()
$.af=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.d(H.iW())+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.af
if(typeof q!=="number")return q.v()
$.af=q+1
n+=q
return new Function("return function("+n+"){return this."+H.d(H.iW())+"."+H.d(t)+"("+n+");}")()},
lo:function(a,b,c,d){var t=H.jI,s=H.ll
switch(b?-1:a){case 0:throw H.c(new H.dQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lp:function(a,b){var t,s,r,q,p,o,n=H.iW(),m=$.jG
if(m==null)m=$.jG=H.jF("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lo(s,!q,t,b)
if(s===1){q="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+m+");"
p=$.af
if(typeof p!=="number")return p.v()
$.af=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+m+", "+o+");"
p=$.af
if(typeof p!=="number")return p.v()
$.af=p+1
return new Function(q+p+"}")()},
jr:function(a,b,c,d,e,f,g){return H.lq(a,b,c,d,!!e,!!f,g)},
lj:function(a,b){return H.f9(v.typeUniverse,H.cR(a.a),b)},
lk:function(a,b){return H.f9(v.typeUniverse,H.cR(a.c),b)},
jI:function(a){return a.a},
ll:function(a){return a.c},
iW:function(){var t=$.jH
return t==null?$.jH=H.jF("self"):t},
jF:function(a){var t,s,r,q=new H.bO("self","target","receiver","name"),p=J.j3(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw H.c(P.iV("Field name "+a+" not found."))},
nn:function(a){throw H.c(new P.d3(a))},
n8:function(a){return v.getIsolateTag(a)},
oq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nh:function(a){var t,s,r,q,p,o=$.kH.$1(a),n=$.iK[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.iP[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=$.kF.$2(a,o)
if(r!=null){n=$.iK[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.iP[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.iS(t)
$.iK[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.iP[o]=t
return t}if(q==="-"){p=H.iS(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kL(a,t)
if(q==="*")throw H.c(P.kf(o))
if(v.leafTags[o]===true){p=H.iS(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kL(a,t)},
kL:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.jw(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iS:function(a){return J.jw(a,!1,null,!!a.$io)},
ni:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.iS(t)
else return J.jw(t,c,null,null)},
nc:function(){if(!0===$.ju)return
$.ju=!0
H.nd()},
nd:function(){var t,s,r,q,p,o,n,m
$.iK=Object.create(null)
$.iP=Object.create(null)
H.nb()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kM.$1(p)
if(o!=null){n=H.ni(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nb:function(){var t,s,r,q,p,o,n=C.z()
n=H.bH(C.A,H.bH(C.B,H.bH(C.p,H.bH(C.p,H.bH(C.C,H.bH(C.D,H.bH(C.E(C.o),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.kH=new H.iM(q)
$.kF=new H.iN(p)
$.kM=new H.iO(o)},
bH:function(a,b){return a(b)||b},
lA:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.c(new P.fR("Illegal RegExp pattern ("+String(o)+")",a))},
kO:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
n3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kN:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jz:function(a,b,c){var t=H.nl(a,b,c)
return t},
nl:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kN(b),'g'),H.n3(c))},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dB:function dB(a,b){this.a=a
this.b=b},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a},
hf:function hf(a){this.a=a},
eW:function eW(a){this.a=a
this.b=null},
bh:function bh(){},
hC:function hC(){},
hy:function hy(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a){this.a=a},
O:function O(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fZ:function fZ(a){this.a=a},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
at:function at(a){this.a=a},
dm:function dm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jn:function(a){return a},
am:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bJ(b,a))},
ms:function(a,b,c){var t
if(!(a>>>0!==a))t=b>>>0!==b||a>b||b>c
else t=!0
if(t)throw H.c(H.n2(a,b,c))
return b},
cd:function cd(){},
br:function br(){},
b0:function b0(){},
cc:function cc(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
ce:function ce(){},
dz:function dz(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
lQ:function(a,b){var t=b.c
return t==null?b.c=H.jk(a,b.z,!0):t},
k7:function(a,b){var t=b.c
return t==null?b.c=H.cI(a,"jQ",[b.z]):t},
k8:function(a){var t=a.y
if(t===6||t===7||t===8)return H.k8(a.z)
return t===11||t===12},
lP:function(a){return a.cy},
n5:function(a){return H.jl(v.typeUniverse,a,!1)},
aD:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.aD(a,t,c,a0)
if(s===t)return b
return H.kv(a,s,!0)
case 7:t=b.z
s=H.aD(a,t,c,a0)
if(s===t)return b
return H.jk(a,s,!0)
case 8:t=b.z
s=H.aD(a,t,c,a0)
if(s===t)return b
return H.ku(a,s,!0)
case 9:r=b.Q
q=H.cP(a,r,c,a0)
if(q===r)return b
return H.cI(a,b.z,q)
case 10:p=b.z
o=H.aD(a,p,c,a0)
n=b.Q
m=H.cP(a,n,c,a0)
if(o===p&&m===n)return b
return H.ji(a,o,m)
case 11:l=b.z
k=H.aD(a,l,c,a0)
j=b.Q
i=H.mR(a,j,c,a0)
if(k===l&&i===j)return b
return H.kt(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.cP(a,h,c,a0)
p=b.z
o=H.aD(a,p,c,a0)
if(g===h&&o===p)return b
return H.jj(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.c(P.fo("Attempted to substitute unexpected RTI kind "+d))}},
cP:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.aD(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
mS:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.aD(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
mR:function(a,b,c,d){var t,s=b.a,r=H.cP(a,s,c,d),q=b.b,p=H.cP(a,q,c,d),o=b.c,n=H.mS(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.ey()
t.a=r
t.b=p
t.c=n
return t},
os:function(a,b){a[v.arrayRti]=b
return a},
mZ:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.kI(t)
return a.$S()}return null},
kJ:function(a,b){var t
if(H.k8(b))if(a instanceof H.bh){t=H.mZ(a)
if(t!=null)return t}return H.cR(a)},
cR:function(a){var t
if(a instanceof P.E){t=a.$ti
return t!=null?t:H.jo(a)}if(Array.isArray(a))return H.mp(a)
return H.jo(J.cQ(a))},
mp:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
my:function(a){var t=a.$ti
return t!=null?t:H.jo(a)},
jo:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.mz(a,t)},
mz:function(a,b){var t=a instanceof H.bh?a.__proto__.__proto__.constructor:b,s=H.mo(v.typeUniverse,t.name)
b.$ccache=s
return s},
kI:function(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=H.jl(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
mx:function(a){var t,s,r=this,q=u.K
if(r===q)return H.cL(r,a,H.mD)
if(!H.ao(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.cL(r,a,H.mG)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.cM
else if(t===u.W||t===u.H)s=H.mC
else if(t===u.N)s=H.mE
else s=t===u.v?H.kB:null
if(s!=null)return H.cL(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.ng)){r.r="$i"+q
return H.cL(r,a,H.mF)}}else if(q===7)return H.cL(r,a,H.mv)
return H.cL(r,a,H.mt)},
cL:function(a,b,c){a.b=c
return a.b(b)},
mw:function(a){var t,s,r=this
if(!H.ao(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.mr
else if(r===u.K)s=H.mq
else s=H.mu
r.a=s
return r.a(a)},
mK:function(a){var t,s=a.y
if(!H.ao(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
mt:function(a){var t=this
if(a==null)return H.mK(t)
return H.K(v.typeUniverse,H.kJ(a,t),null,t,null)},
mv:function(a){if(a==null)return!0
return this.z.b(a)},
mF:function(a){var t=this,s=t.r
if(a instanceof P.E)return!!a[s]
return!!J.cQ(a)[s]},
op:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.kz(a,t)},
mu:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.kz(a,t)},
kz:function(a,b){throw H.c(H.me(H.kl(a,H.kJ(a,b),H.a1(b,null))))},
kl:function(a,b,c){var t=P.fL(a),s=H.a1(b==null?H.cR(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
me:function(a){return new H.cG("TypeError: "+a)},
S:function(a,b){return new H.cG("TypeError: "+H.kl(a,null,b))},
mD:function(a){return a!=null},
mq:function(a){return a},
mG:function(a){return!0},
mr:function(a){return a},
kB:function(a){return!0===a||!1===a},
ob:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.S(a,"bool"))},
od:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.S(a,"bool"))},
oc:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.S(a,"bool?"))},
oe:function(a){if(typeof a=="number")return a
throw H.c(H.S(a,"double"))},
og:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"double"))},
of:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"double?"))},
cM:function(a){return typeof a=="number"&&Math.floor(a)===a},
oh:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.S(a,"int"))},
oj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.S(a,"int"))},
oi:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.S(a,"int?"))},
mC:function(a){return typeof a=="number"},
ok:function(a){if(typeof a=="number")return a
throw H.c(H.S(a,"num"))},
om:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"num"))},
ol:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"num?"))},
mE:function(a){return typeof a=="string"},
on:function(a){if(typeof a=="string")return a
throw H.c(H.S(a,"String"))},
jm:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.S(a,"String"))},
oo:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.S(a,"String?"))},
mN:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.b.v(s,H.a1(a[r],b))
return t},
kA:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=[]
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)a5.push("T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.e(a5,j)
m=C.b.v(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.b.v(" extends ",H.a1(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a1(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.b.v(a2,H.a1(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.b.v(a2,H.a1(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.jB(H.a1(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.d(a0)},
a1:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.a1(a.z,b)
return t}if(m===7){s=a.z
t=H.a1(s,b)
r=s.y
return J.jB(r===11||r===12?C.b.v("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.a1(a.z,b))+">"
if(m===9){q=H.mT(a.z)
p=a.Q
return p.length!==0?q+("<"+H.mN(p,b)+">"):q}if(m===11)return H.kA(a,b,null)
if(m===12)return H.kA(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.e(b,o)
return b[o]}return"?"},
mT:function(a){var t,s=H.kP(a)
if(s!=null)return s
t="minified:"+a
return t},
kw:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
mo:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.jl(a,b,!1)
else if(typeof n=="number"){t=n
s=H.cJ(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.cI(a,b,r)
o[b]=p
return p}else return n},
mm:function(a,b){return H.ky(a.tR,b)},
ml:function(a,b){return H.ky(a.eT,b)},
jl:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.kr(H.kp(a,null,b,c))
s.set(b,t)
return t},
f9:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.kr(H.kp(a,b,c,!0))
r.set(c,s)
return s},
mn:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.ji(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
aC:function(a,b){b.a=H.mw
b.b=H.mx
return b},
cJ:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.a9(null,null)
t.y=b
t.cy=c
s=H.aC(a,t)
a.eC.set(c,s)
return s},
kv:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.mj(a,b,s,c)
a.eC.set(s,t)
return t},
mj:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.ao(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.a9(null,null)
r.y=6
r.z=b
r.cy=c
return H.aC(a,r)},
jk:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.mi(a,b,s,c)
a.eC.set(s,t)
return t},
mi:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.ao(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.iQ(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.iQ(r.z))return r
else return H.lQ(a,b)}}q=new H.a9(null,null)
q.y=7
q.z=b
q.cy=c
return H.aC(a,q)},
ku:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.mg(a,b,s,c)
a.eC.set(s,t)
return t},
mg:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.ao(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.cI(a,"jQ",[b])
else if(b===u.P||b===u.T)return u.a}r=new H.a9(null,null)
r.y=8
r.z=b
r.cy=c
return H.aC(a,r)},
mk:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.a9(null,null)
t.y=13
t.z=b
t.cy=r
s=H.aC(a,t)
a.eC.set(r,s)
return s},
f8:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
mf:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
cI:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.f8(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.a9(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.aC(a,s)
a.eC.set(q,r)
return r},
ji:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.f8(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.a9(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.aC(a,p)
a.eC.set(r,o)
return o},
kt:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.f8(n)
if(k>0){t=m>0?",":""
s=H.f8(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.mf(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.a9(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.aC(a,p)
a.eC.set(r,s)
return s},
jj:function(a,b,c,d){var t,s=b.cy+("<"+H.f8(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.mh(a,b,c,s,d)
a.eC.set(s,t)
return t},
mh:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.aD(a,b,s,0)
n=H.cP(a,c,s,0)
return H.jj(a,o,n,c!==n)}}m=new H.a9(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.aC(a,m)},
kp:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kr:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.m8(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.kq(a,s,h,g,!1)
else if(r===46)s=H.kq(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aB(a.u,a.e,g.pop()))
break
case 94:g.push(H.mk(a.u,g.pop()))
break
case 35:g.push(H.cJ(a.u,5,"#"))
break
case 64:g.push(H.cJ(a.u,2,"@"))
break
case 126:g.push(H.cJ(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.jh(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.cI(q,o,p))
else{n=H.aB(q,a.e,o)
switch(n.y){case 11:g.push(H.jj(q,n,p,a.n))
break
default:g.push(H.ji(q,n,p))
break}}break
case 38:H.m9(a,g)
break
case 42:m=a.u
g.push(H.kv(m,H.aB(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.jk(m,H.aB(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.ku(m,H.aB(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.ey()
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
H.jh(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.kt(q,H.aB(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.jh(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.mb(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.aB(a.u,a.e,i)},
m8:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
kq:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.kw(t,p.z)[q]
if(o==null)H.L('No "'+q+'" in "'+H.lP(p)+'"')
d.push(H.f9(t,p,o))}else d.push(q)
return n},
m9:function(a,b){var t=b.pop()
if(0===t){b.push(H.cJ(a.u,1,"0&"))
return}if(1===t){b.push(H.cJ(a.u,4,"1&"))
return}throw H.c(P.fo("Unexpected extended operation "+H.d(t)))},
aB:function(a,b,c){if(typeof c=="string")return H.cI(a,c,a.sEA)
else if(typeof c=="number")return H.ma(a,b,c)
else return c},
jh:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.aB(a,b,c[t])},
mb:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.aB(a,b,c[t])},
ma:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.c(P.fo("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.c(P.fo("Bad index "+c+" for "+b.h(0)))},
K:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.ao(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.ao(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.K(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.K(a,b.z,c,d,e)
if(q===6){t=d.z
return H.K(a,b,c,t,e)}if(s===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.k7(a,b),c,d,e)}if(s===7){t=H.K(a,b.z,c,d,e)
return t}if(q===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.k7(a,d),e)}if(q===7){t=H.K(a,b,c,d.z,e)
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
if(!H.K(a,l,c,k,e)||!H.K(a,k,e,l,c))return!1}return H.kC(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.kC(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.mB(a,b,c,d,e)}return!1},
kC:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.K(a2,a3.z,a4,a5.z,a6))return!1
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
if(!H.K(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.K(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.K(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.K(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
mB:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.K(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.kw(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.K(a,H.f9(a,b,m[q]),c,s[q],e))return!1
return!0},
iQ:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.ao(a))if(s!==7)if(!(s===6&&H.iQ(a.z)))t=s===8&&H.iQ(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ng:function(a){var t
if(!H.ao(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
ao:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
ky:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ey:function ey(){this.c=this.b=this.a=null},
et:function et(){},
cG:function cG(a){this.a=a},
kP:function(a){return v.mangledGlobalNames[a]},
nj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fl:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.ju==null){H.nc()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.c(P.kf("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[J.jS()]
if(q!=null)return q
q=H.nh(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.t
if(t===Object.prototype)return C.t
if(typeof r=="function"){Object.defineProperty(r,J.jS(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
jS:function(){var t=$.kn
return t==null?$.kn=v.getIsolateTag("_$dart_js"):t},
lx:function(a){if(!H.cM(a))throw H.c(P.jE(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aw(a,0,4294967295,"length",null))
return J.ly(new Array(a))},
jR:function(a){if(!H.cM(a)||a<0)throw H.c(P.iV("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
ly:function(a){return J.j3(a)},
j3:function(a){a.fixed$length=Array
return a},
lz:function(a,b){return J.la(a,b)},
cQ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c2.prototype
return J.c1.prototype}if(typeof a=="string")return J.ah.prototype
if(a==null)return J.c3.prototype
if(typeof a=="boolean")return J.fX.prototype
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.E)return a
return J.fl(a)},
n6:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.E)return a
return J.fl(a)},
bd:function(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.E)return a
return J.fl(a)},
iL:function(a){if(a==null)return a
if(a.constructor==Array)return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.E)return a
return J.fl(a)},
n7:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.b8.prototype
return a},
js:function(a){if(typeof a=="string")return J.ah.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.b8.prototype
return a},
an:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ac.prototype
return a}if(a instanceof P.E)return a
return J.fl(a)},
jB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.n6(a).v(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cQ(a).p(a,b)},
l7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).j(a,b)},
l8:function(a,b,c){return J.an(a).e2(a,b,c)},
l9:function(a,b,c,d){return J.an(a).ei(a,b,c,d)},
la:function(a,b){return J.n7(a).av(a,b)},
iU:function(a,b){return J.bd(a).C(a,b)},
fm:function(a,b){return J.iL(a).A(a,b)},
lb:function(a,b){return J.iL(a).I(a,b)},
lc:function(a){return J.an(a).gem(a)},
ld:function(a){return J.an(a).gc8(a)},
le:function(a){return J.an(a).gca(a)},
U:function(a){return J.cQ(a).gM(a)},
aK:function(a){return J.iL(a).gK(a)},
aL:function(a){return J.bd(a).gk(a)},
jC:function(a){return J.iL(a).eX(a)},
lf:function(a,b){return J.an(a).f0(a,b)},
lg:function(a,b,c){return J.js(a).aH(a,b,c)},
lh:function(a){return J.js(a).fa(a)},
V:function(a){return J.cQ(a).h(a)},
a:function a(){},
fX:function fX(){},
c3:function c3(){},
aX:function aX(){},
dH:function dH(){},
b8:function b8(){},
ac:function ac(){},
a4:function a4(){},
di:function di(){},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aW:function aW(){},
c2:function c2(){},
c1:function c1(){},
ah:function ah(){}},P={
lX:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.mV()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.bI(new P.ij(r),1)).observe(t,{childList:true})
return new P.ii(r,t,s)}else if(self.setImmediate!=null)return P.mW()
return P.mX()},
lY:function(a){self.scheduleImmediate(H.bI(new P.ik(a),0))},
lZ:function(a){self.setImmediate(H.bI(new P.il(a),0))},
m_:function(a){P.jc(C.i,a)},
jc:function(a,b){var t=C.c.a8(a.a,1000)
return P.mc(t<0?0:t,b)},
kd:function(a,b){var t=C.c.a8(a.a,1000)
return P.md(t<0?0:t,b)},
mc:function(a,b){var t=new P.cF()
t.cU(a,b)
return t},
md:function(a,b){var t=new P.cF()
t.cV(a,b)
return t},
o9:function(a){return new P.bF(a,1)},
m4:function(){return C.W},
m5:function(a){return new P.bF(a,3)},
mI:function(a){return new P.cC(a)},
mJ:function(){var t,s
for(t=$.bG;t!=null;t=$.bG){$.cO=null
s=t.b
$.bG=s
if(s==null)$.cN=null
t.a.$0()}},
mQ:function(){$.jp=!0
try{P.mJ()}finally{$.cO=null
$.jp=!1
if($.bG!=null)$.jA().$1(P.kG())}},
mO:function(a){var t=new P.ek(a),s=$.cN
if(s==null){$.bG=$.cN=t
if(!$.jp)$.jA().$1(P.kG())}else $.cN=s.b=t},
mP:function(a){var t,s,r,q=$.bG
if(q==null){P.mO(a)
$.cO=$.cN
return}t=new P.ek(a)
s=$.cO
if(s==null){t.b=q
$.bG=$.cO=t}else{r=s.b
t.b=r
$.cO=s.b=t
if(r==null)$.cN=t}},
kc:function(a,b){var t=$.ae
if(t===C.e)return P.jc(a,b)
return P.jc(a,t.en(b))},
lW:function(a,b){var t=$.ae
if(t===C.e)return P.kd(a,b)
return P.kd(a,t.c6(b,u.L))},
kD:function(a,b,c,d,e){P.mP(new P.iI(d,e))},
mL:function(a,b,c,d){var t,s=$.ae
if(s===c)return d.$0()
$.ae=c
t=s
try{s=d.$0()
return s}finally{$.ae=t}},
mM:function(a,b,c,d,e){var t,s=$.ae
if(s===c)return d.$1(e)
$.ae=c
t=s
try{s=d.$1(e)
return s}finally{$.ae=t}},
ij:function ij(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
cF:function cF(){this.c=0},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b){this.a=a
this.b=b},
bb:function bb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cC:function cC(a){this.a=a},
ek:function ek(a){this.a=a
this.b=null},
dY:function dY(){},
dZ:function dZ(){},
ck:function ck(){},
iF:function iF(){},
iI:function iI(a,b){this.a=a
this.b=b},
iu:function iu(){},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
lB:function(a,b,c){return H.n4(a,new H.O(b.ac("@<0>").bR(c).ac("O<1,2>")))},
jT:function(a,b){return new H.O(a.ac("@<0>").bR(b).ac("O<1,2>"))},
c4:function(a){return new P.cq(a.ac("cq<0>"))},
jg:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m7:function(a,b){var t=new P.cr(a,b)
t.c=a.e
return t},
lv:function(a,b,c){var t,s
if(P.jq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
$.Y.push(a)
try{P.mH(a,t)}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}s=P.ka(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
j1:function(a,b,c){var t,s
if(P.jq(a))return b+"..."+c
t=new P.by(b)
$.Y.push(a)
try{s=t
s.a=P.ka(s.a,a,", ")}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
jq:function(a){var t,s
for(t=$.Y.length,s=0;s<t;++s)if(a===$.Y[s])return!0
return!1},
mH:function(a,b){var t,s,r,q,p,o,n,m=a.gK(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.q())return
t=H.d(m.gB(m))
b.push(t)
l+=t.length+2;++k}if(!m.q()){if(k<=5)return
if(0>=b.length)return H.e(b,-1)
s=b.pop()
if(0>=b.length)return H.e(b,-1)
r=b.pop()}else{q=m.gB(m);++k
if(!m.q()){if(k<=4){b.push(H.d(q))
return}s=H.d(q)
if(0>=b.length)return H.e(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gB(m);++k
for(;m.q();q=p,p=o){o=m.gB(m);++k
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
jU:function(a,b){var t,s,r=P.c4(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.r)(a),++s)r.n(0,b.a(a[s]))
return r},
jV:function(a){var t,s={}
if(P.jq(a))return"{...}"
t=new P.by("")
try{$.Y.push(a)
t.a+="{"
s.a=!0
J.lb(a,new P.h4(s,t))
t.a+="}"}finally{if(0>=$.Y.length)return H.e($.Y,-1)
$.Y.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
cq:function cq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
it:function it(a){this.a=a
this.c=this.b=null},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c0:function c0(){},
c6:function c6(){},
v:function v(){},
dp:function dp(){},
h4:function h4(a,b){this.a=a
this.b=b},
ai:function ai(){},
cy:function cy(){},
cs:function cs(){},
d0:function d0(){},
d2:function d2(){},
fJ:function fJ(){},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fV:function fV(a){this.a=a},
i5:function i5(){},
i6:function i6(){},
iD:function iD(a){this.b=0
this.c=a},
lu:function(a){if(a instanceof H.bh)return a.h(0)
return"Instance of '"+H.d(H.dM(a))+"'"},
j6:function(a,b,c){var t,s=c?J.jR(a):J.lx(a)
if(a!==0&&b!=null)for(t=0;t<s.length;++t)s[t]=b
return s},
j7:function(a,b){var t,s=[]
for(t=J.aK(a);t.q();)s.push(t.gB(t))
if(b)return s
return J.j3(s)},
jb:function(a){var t,s=a,r=s.length,q=P.j9(0,null,r)
if(typeof q!=="number")return q.a0()
t=q<r
return H.lL(t?s.slice(0,q):s)},
lN:function(a){return new H.fY(a,H.lA(a,!1,!0,!1,!1,!1))},
ka:function(a,b,c){var t=J.aK(b)
if(!t.q())return a
if(c.length===0){do a+=H.d(t.gB(t))
while(t.q())}else{a+=H.d(t.gB(t))
for(;t.q();)a=a+c+H.d(t.gB(t))}return a},
kx:function(a,b,c,d){var t,s,r,q,p,o,n="0123456789ABCDEF"
if(c===C.h){t=$.l6().b
t=t.test(b)}else t=!1
if(t)return b
s=C.G.es(b)
for(t=s.length,r=0,q="";r<t;++r){p=s[r]
if(p<128){o=p>>>4
if(o>=8)return H.e(a,o)
o=(a[o]&1<<(p&15))!==0}else o=!1
if(o)q+=H.j8(p)
else q=q+"%"+n[p>>>4&15]+n[p&15]}return q.charCodeAt(0)==0?q:q},
lr:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
ls:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d5:function(a){if(a>=10)return""+a
return"0"+a},
jL:function(a){return new P.aR(1000*a)},
fL:function(a){if(typeof a=="number"||H.kB(a)||null==a)return J.V(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lu(a)},
fo:function(a){return new P.cW(a)},
iV:function(a){return new P.Z(!1,null,null,a)},
jE:function(a,b,c){return new P.Z(!0,a,b,c)},
li:function(a,b){if(a==null)throw H.c(new P.Z(!1,null,b,"Must not be null"))
return a},
dN:function(a,b){return new P.bv(null,null,!0,a,b,"Value not in range")},
aw:function(a,b,c,d,e){return new P.bv(b,c,!0,a,d,"Invalid value")},
j9:function(a,b,c){var t
if(typeof c!=="number")return H.n(c)
t=a>c
if(t)throw H.c(P.aw(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.n(c)
t=b>c}else t=!0
if(t)throw H.c(P.aw(b,a,c,"end",null))
return b}return c},
k4:function(a,b){if(a<0)throw H.c(P.aw(a,0,null,b,null))
return a},
B:function(a,b,c,d,e){var t=e==null?J.aL(b):e
return new P.dg(t,!0,a,c,"Index out of range")},
t:function(a){return new P.ee(a)},
kf:function(a){return new P.eb(a)},
ja:function(a){return new P.bx(a)},
aQ:function(a){return new P.d1(a)},
J:function(a){return new P.ev(a)},
jy:function(a){H.nj(a)},
bc:function bc(){},
a3:function a3(a,b){this.a=a
this.b=b},
T:function T(){},
aR:function aR(a){this.a=a},
fF:function fF(){},
fG:function fG(){},
A:function A(){},
cW:function cW(a){this.a=a},
dC:function dC(){},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dg:function dg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ee:function ee(a){this.a=a},
eb:function eb(a){this.a=a},
bx:function bx(a){this.a=a},
d1:function d1(a){this.a=a},
dF:function dF(){},
ci:function ci(){},
d3:function d3(a){this.a=a},
ev:function ev(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fT:function fT(){},
q:function q(){},
f:function f(){},
dh:function dh(){},
c5:function c5(){},
dn:function dn(){},
a7:function a7(){},
M:function M(){},
E:function E(){},
F:function F(){},
by:function by(a){this.a=a},
n1:function(a){var t
if(u.I.b(a)){t=J.le(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.cH(a.data,a.height,a.width)},
n0:function(a){if(a instanceof P.cH)return{data:a.a,height:a.b,width:a.c}
return a},
aF:function(a){var t,s,r,q,p
if(a==null)return null
t=P.jT(u.N,u.z)
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
t.m(0,p,a[p])}return t},
n_:function(a){var t={}
a.I(0,new P.iJ(t))
return t},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
db:function db(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(){},
is:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eP:function eP(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bo:function bo(){},
dl:function dl(){},
bs:function bs(){},
dD:function dD(){},
hh:function hh(){},
bw:function bw(){},
e_:function e_(){},
j:function j(){},
bA:function bA(){},
e8:function e8(){},
eD:function eD(){},
eE:function eE(){},
eL:function eL(){},
eM:function eM(){},
eY:function eY(){},
eZ:function eZ(){},
f6:function f6(){},
f7:function f7(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(a){this.a=a},
cX:function cX(){},
ar:function ar(){},
dE:function dE(){},
el:function el(){},
dP:function dP(){},
dW:function dW(){},
eU:function eU(){},
eV:function eV(){}},W={
jD:function(){var t=document.createElement("a")
return t},
iY:function(){var t=document.createElement("canvas")
return t},
lt:function(a,b,c){var t,s=document.body
s.toString
t=C.l.a2(s,a,b,c)
t.toString
s=new H.ba(new W.R(t),new W.fH())
return u.h.a(s.gal(s))},
fI:function(a){return"wheel"},
bW:function(a){var t,s,r="element tag unavailable"
try{t=J.an(a)
if(typeof t.gct(a)=="string")r=t.gct(a)}catch(s){H.ap(s)}return r},
ir:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ko:function(a,b,c,d){var t=W.ir(W.ir(W.ir(W.ir(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
P:function(a,b,c,d){var t=W.kE(new W.iq(c),u.D)
if(t!=null&&!0)J.l9(a,b,t,!1)
return new W.eu(a,b,t,!1)},
km:function(a){var t=W.jD(),s=window.location
t=new W.bE(new W.ix(t,s))
t.cR(a)
return t},
m2:function(a,b,c,d){return!0},
m3:function(a,b,c,d){var t,s=d.a,r=s.a
r.href=c
t=r.hostname
s=s.b
if(!(t==s.hostname&&r.port==s.port&&r.protocol==s.protocol))if(t==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
ks:function(){var t=u.N
t=new W.f1(P.jU(C.r,t),P.c4(t),P.c4(t),P.c4(t),null)
t.cT(null,new H.ca(C.r,new W.iA()),["TEMPLATE"],null)
return t},
kE:function(a,b){var t=$.ae
if(t===C.e)return a
return t.c6(a,b)},
l:function l(){},
fn:function fn(){},
cU:function cU(){},
cV:function cV(){},
bf:function bf(){},
cY:function cY(){},
aM:function aM(){},
aN:function aN(){},
ab:function ab(){},
fy:function fy(){},
z:function z(){},
bR:function bR(){},
fz:function fz(){},
a2:function a2(){},
ag:function ag(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
bS:function bS(){},
fD:function fD(){},
bT:function bT(){},
bU:function bU(){},
d6:function d6(){},
fE:function fE(){},
em:function em(a,b){this.a=a
this.b=b},
u:function u(){},
fH:function fH(){},
h:function h(){},
b:function b(){},
aS:function aS(){},
d9:function d9(){},
da:function da(){},
dc:function dc(){},
aT:function aT(){},
fU:function fU(){},
aU:function aU(){},
aV:function aV(){},
bl:function bl(){},
aY:function aY(){},
h2:function h2(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(a){this.a=a},
h8:function h8(){},
h9:function h9(a){this.a=a},
b_:function b_(){},
dt:function dt(){},
a0:function a0(){},
R:function R(a){this.a=a},
p:function p(){},
cf:function cf(){},
b1:function b1(){},
dJ:function dJ(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
dR:function dR(){},
ax:function ax(){},
dU:function dU(){},
b4:function b4(){},
dV:function dV(){},
b5:function b5(){},
hz:function hz(){},
hA:function hA(a){this.a=a},
ay:function ay(){},
cj:function cj(){},
e0:function e0(){},
e1:function e1(){},
bz:function bz(){},
az:function az(){},
ad:function ad(){},
e2:function e2(){},
e3:function e3(){},
hJ:function hJ(){},
b6:function b6(){},
b7:function b7(){},
e7:function e7(){},
hN:function hN(){},
al:function al(){},
i4:function i4(){},
eh:function eh(){},
aA:function aA(){},
bC:function bC(){},
bD:function bD(){},
en:function en(){},
cp:function cp(){},
ez:function ez(){},
ct:function ct(){},
eT:function eT(){},
f_:function f_(){},
im:function im(){},
io:function io(a){this.a=a},
j0:function j0(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iq:function iq(a){this.a=a},
jf:function jf(a){this.$ti=a},
bE:function bE(a){this.a=a},
x:function x(){},
cg:function cg(a){this.a=a},
hc:function hc(a){this.a=a},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(){},
iy:function iy(){},
iz:function iz(){},
f1:function f1(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(){},
f0:function f0(){},
bZ:function bZ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a6:function a6(){},
ix:function ix(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a
this.b=!1},
iE:function iE(a){this.a=a},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
ex:function ex(){},
eB:function eB(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
cA:function cA(){},
cB:function cB(){},
eR:function eR(){},
eS:function eS(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
cD:function cD(){},
cE:function cE(){},
f4:function f4(){},
f5:function f5(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){}},K={
C:function(a,b){var t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.J("The given low and high character strings for a Range must have one and only one characters."))
t=C.b.aJ(a,0)
s=C.b.aJ(b,0)
if(t>s){r=s
s=t
t=r}return new K.hi(t,s)},
m:function(a){var t=new K.hp()
t.cN(a)
return t},
aq:function aq(){},
de:function de(){},
W:function W(){this.a=null},
hi:function hi(a,b){this.a=a
this.b=b},
hp:function hp(){this.a=null}},L={
hL:function(){var t=new L.hK()
t.a=new H.O(u.V)
t.b=new H.O(u.w)
t.c=P.c4(u.U)
return t},
dX:function dX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e5:function e5(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.b=a
this.c=null},
hK:function hK(){var _=this
_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.b=a
this.a=this.c=null}},O={
jK:function(){var t=new O.bi()
t.bJ()
return t},
bi:function bi(){this.c=this.b=this.a=null},
cb:function cb(){this.b=this.a=null},
dA:function dA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(){}},E={
m0:function(){if(J.iU(window.navigator.vendor,"Google"))return C.x
if(J.iU(window.navigator.userAgent,"Firefox"))return C.m
var t=window.navigator.appVersion
if(J.bd(t).C(t,"Trident")||C.b.C(t,"Edge"))return C.n
if(J.iU(window.navigator.appName,"Microsoft"))return C.n
return C.y},
m1:function(){var t=window.navigator.appVersion
if(J.bd(t).C(t,"Win"))return C.R
if(C.b.C(t,"Mac"))return C.S
if(C.b.C(t,"Linux"))return C.T
return C.U},
lO:function(a,b){var t=new E.hj(a)
t.cM(a,b)
return t},
lV:function(a,b,c,d,e){var t,s
if(u.B.b(a))return E.kb(a,!0,!0,!0,!1)
t=W.iY()
s=t.style
s.width="100%"
s.height="100%"
J.ld(a).n(0,t)
return E.kb(t,!0,!0,!0,!1)},
kb:function(a,b,c,d,e){var t,s,r,q,p="mousemove",o=new E.e4(),n=u.z,m=C.f.bD(a,"webgl2",P.lB(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.L(P.J("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.lO(m,a)
n=new T.hG(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.ef(a)
t=new X.h_()
t.c=new X.a5(!1,!1,!1)
t.d=P.c4(u.e)
n.b=t
t=new X.ha(n)
t.f=0
t.r=V.b2()
t.x=V.b2()
t.ch=t.Q=1
n.c=t
t=new X.h3(n)
t.r=0
t.x=V.b2()
t.cy=t.cx=t.ch=t.Q=1
n.d=t
t=new X.hM(n)
t.f=V.b2()
t.r=V.b2()
n.e=t
n.x=n.r=n.f=!1
n.y=null
n.z=[]
t=$.jO
if(t==null){s=E.m0()
E.m1()
t=$.jO=new E.ip(s)}n.Q=t.a===C.m?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.P(q,"contextmenu",n.gdt(),!1))
n.z.push(W.P(a,"focus",n.gdB(),!1))
n.z.push(W.P(a,"blur",n.gdl(),!1))
n.z.push(W.P(q,"keyup",n.gdF(),!1))
n.z.push(W.P(q,"keydown",n.gdD(),!1))
n.z.push(W.P(a,"mousedown",n.gdI(),!1))
n.z.push(W.P(a,"mouseup",n.gdM(),!1))
n.z.push(W.P(a,p,n.gdK(),!1))
r=n.z
W.fI(a)
W.fI(a)
r.push(W.P(a,W.fI(a),n.gdO(),!1))
n.z.push(W.P(q,p,n.gdv(),!1))
n.z.push(W.P(q,"mouseup",n.gdz(),!1))
n.z.push(W.P(q,"pointerlockchange",n.gdQ(),!1))
n.z.push(W.P(a,"touchstart",n.gdZ(),!1))
n.z.push(W.P(a,"touchend",n.gdV(),!1))
n.z.push(W.P(a,"touchmove",n.gdX(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a3(Date.now(),!1)
o.db=0
o.bX()
return o},
fu:function fu(){},
bj:function bj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bg:function bg(a){this.b=a},
bt:function bt(a){this.b=a},
ip:function ip(a){this.a=a},
hj:function hj(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
e4:function e4(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hI:function hI(a){this.a=a}},Z={
je:function(a,b,c){var t=a.createBuffer()
a.bindBuffer(b,t)
a.bufferData(b,new Int16Array(H.jn(c)),35044)
a.bindBuffer(b,null)
return new Z.ei(b,t)},
aa:function(a){return new Z.b9(a)},
ei:function ei(a,b){this.a=a
this.b=b},
fv:function fv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ih:function ih(a){this.a=a},
cZ:function cZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a){this.a=a}},D={
D:function(){var t=new D.bX()
t.d=0
return t},
fw:function fw(){},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
N:function N(){this.b=null},
bm:function bm(){this.b=null},
bn:function bn(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
kK:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=null,a2="modifiers",a3=34067,a4=V.lR("Test 030"),a5=W.iY()
a5.className="pageLargeCanvas"
a5.id=a0
a4.a.appendChild(a5)
a4.c4(["A test of the Normal shader for dynamically rendering normal maps."])
a4.c4(["\xab[Back to Tests|../]"])
t=document.getElementById(a0)
if(t==null)H.L(P.J("Failed to find an element with the identifier, testCanvas."))
s=E.lV(t,!0,!0,!0,!1)
r=new E.bj()
r.a=""
r.b=!0
q=O.jK()
r.y=q
q.aX(r.geJ(),r.geM())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sbF(0,a1)
r.saE(a1)
p=F.k9()
F.cK(p,a1,a1,1,1,1,0,0,1)
F.cK(p,a1,a1,1,1,0,1,0,3)
F.cK(p,a1,a1,1,1,0,0,1,2)
F.cK(p,a1,a1,1,1,-1,0,0,0)
F.cK(p,a1,a1,1,1,0,-1,0,0)
F.cK(p,a1,a1,1,1,0,0,-1,3)
p.at()
r.sbF(0,p)
q=new U.bk()
q.bJ()
q.aX(q.gdj(),q.gdT())
q.e=null
q.f=V.ds()
q.r=0
o=s.x
n=new U.cn()
m=U.iZ()
m.sbC(0,!0)
m.sbv(6.283185307179586)
m.sbx(0)
m.sZ(0,0)
m.sbw(100)
m.sL(0)
m.sbr(0.5)
n.b=m
l=n.gaq()
m.gt().n(0,l)
m=U.iZ()
m.sbC(0,!0)
m.sbv(6.283185307179586)
m.sbx(0)
m.sZ(0,0)
m.sbw(100)
m.sL(0)
m.sbr(0.5)
n.c=m
m.gt().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.a5(!1,!1,!1)
j=n.d
n.d=k
m=new D.w(a2,j,k)
m.b=!0
n.H(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.w("invertX",m,!1)
m.b=!0
n.H(m)}m=n.r
if(m!==!1){n.r=!1
m=new D.w("invertY",m,!1)
m.b=!0
n.H(m)}n.aC(o)
q.n(0,n)
o=s.x
n=new U.cm()
m=U.iZ()
m.sbC(0,!0)
m.sbv(6.283185307179586)
m.sbx(0)
m.sZ(0,0)
m.sbw(100)
m.sL(0)
m.sbr(0.2)
n.b=m
m.gt().n(0,n.gaq())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.a5(!0,!1,!1)
j=n.c
n.c=k
m=new D.w(a2,j,k)
m.b=!0
n.H(m)
n.aC(o)
q.n(0,n)
o=s.x
n=new U.co()
n.c=0.01
n.e=n.d=0
k=new X.a5(!1,!1,!1)
n.b=k
m=new D.w(a2,a1,k)
m.b=!0
n.H(m)
n.aC(o)
q.n(0,n)
r.saE(q)
i=new O.dA()
q=$.jW
i.b=q==null?$.jW=new V.dq(1,0,0,0,1,0,0,0,1):q
i.c=V.ds()
i.d=new A.bP(!1,!1,!1)
i.bY(a1)
i.bZ(a1)
i.bO()
i.r=null
q=s.f
o=q.a
h=o.createTexture()
o.bindTexture(a3,h)
o.texParameteri(a3,10242,10497)
o.texParameteri(a3,10243,10497)
o.texParameteri(a3,10241,9729)
o.texParameteri(a3,10240,9729)
o.bindTexture(a3,a1)
g=new T.hF()
g.a=0
g.b=h
g.c=!1
g.d=0
q.ap(g,h,"../resources/diceBumpMap/posx.png",34069,!1,!1)
q.ap(g,h,"../resources/diceBumpMap/negx.png",34070,!1,!1)
q.ap(g,h,"../resources/diceBumpMap/posy.png",34071,!1,!1)
q.ap(g,h,"../resources/diceBumpMap/negy.png",34072,!1,!1)
q.ap(g,h,"../resources/diceBumpMap/posz.png",34073,!1,!1)
q.ap(g,h,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(!i.d.c){i.d=new A.bP(!1,!1,!0)
i.bY(a1)
i.a=null}i.bZ(g)
f=X.jP(a1)
e=new V.aP(0.5,0.5,1,1)
if(!f.a.p(0,e)){j=f.a
f.a=e
q=new D.w("color",j,e)
q.b=!0
o=f.x
if(o!=null)o.D(q)}d=new M.d7()
d.a=!0
q=O.jK()
d.e=q
q.aX(d.gdn(),d.gdr())
d.y=d.x=d.r=d.f=null
c=X.jP(a1)
b=new X.dG()
b.c=1.0471975511965976
b.d=0.1
b.e=2000
b.saE(a1)
q=b.c
$.y().toString
if(!(Math.abs(q-1.0471975511965976)<1e-9)){b.c=1.0471975511965976
q=new D.w("fov",q,1.0471975511965976)
q.b=!0
b.an(q)}q=b.d
$.y().toString
if(!(Math.abs(q-0.1)<1e-9)){b.d=0.1
q=new D.w("near",q,0.1)
q.b=!0
b.an(q)}q=b.e
$.y().toString
if(!(Math.abs(q-2000)<1e-9)){b.e=2000
q=new D.w("far",q,2000)
q.b=!0
b.an(q)}q=d.b
if(q!==b){if(q!=null)q.gt().O(0,d.ga6())
j=d.b
d.b=b
b.gt().n(0,d.ga6())
q=new D.w("camera",j,d.b)
q.b=!0
d.aa(q)}d.scu(0,c)
d.scv(a1)
d.scv(i)
d.scu(0,f)
d.e.n(0,r)
q=d.b
a=V.av(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
o=new U.bQ()
o.a=a
q.saE(o)
q=s.d
if(q!==d){if(q!=null)q.gt().O(0,s.gbK())
s.d=d
d.gt().n(0,s.gbK())
s.bL()}q=s.Q
if(q==null)q=s.Q=D.D()
o=q.b
q=o==null?q.b=[]:o
q.push(new D.iR(a4,i))
V.nk(s)},
iR:function iR(a,b){this.a=a
this.b=b}},X={d_:function d_(a,b){this.a=a
this.b=b},dk:function dk(a,b){this.a=a
this.b=b},h_:function h_(){var _=this
_.d=_.c=_.b=_.a=null},c8:function c8(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h3:function h3(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},bp:function bp(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ha:function ha(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bq:function bq(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dL:function dL(){},cl:function cl(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ef:function ef(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jP:function(a){var t=new X.fS(),s=new V.aP(0,0,0,1)
t.a=s
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
s=$.k6
if(s==null){s=V.k5(0,0,1,1)
$.k6=s}t.r=s
return t},
iX:function iX(){},
fS:function fS(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(){}},V={
jv:function(a,b,c){var t
if(c<=0)t=a
else t=c>=1?b:a+c*(b-a)
return t},
np:function(a,b,c){var t
if(c<=b)return b
t=c-b
a=C.d.cD(a-b,t)
return(a<0?a+t:a)+b},
G:function(a,b,c){if(a==null)return C.b.a4("null",c)
$.y().toString
return C.b.a4(C.d.cw(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bK:function(a,b,c){var t,s,r,q,p,o,n=[]
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.r)(a),++r){q=V.G(a[r],b,c)
s=Math.max(s,q.length)
n.push(q)}for(t=n.length,p=t-1;p>=0;--p,t=o){if(p>=t)return H.e(n,p)
t=C.b.a4(n[p],s)
o=n.length
if(p>=o)return H.e(n,p)
n[p]=t}return n},
jx:function(a){return C.d.f7(Math.pow(2,C.L.bs(Math.log(H.mY(a))/Math.log(2))))},
ds:function(){var t=$.jX
return t==null?$.jX=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):t},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.dr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b2:function(){var t=$.k0
return t==null?$.k0=new V.aj(0,0):t},
k5:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dO(a,b,c,d)},
eg:function(){var t=$.kj
return t==null?$.kj=new V.I(0,0,0):t},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(){},
dq:function dq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
dr:function dr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
dK:function dK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
nk:function(a){P.lW(C.I,new V.iT(a))},
lR:function(a){var t=new V.hu()
t.cP(a,!0)
return t},
aO:function aO(){},
iT:function iT(a){this.a=a},
d4:function d4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dd:function dd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
df:function df(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dI:function dI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hu:function hu(){this.b=this.a=null},
hw:function hw(a){this.a=a},
hv:function hv(a){this.a=a},
hx:function hx(a){this.a=a}},U={
iZ:function(){var t=new U.fx()
t.a=!0
t.b=1e12
t.c=-1e12
t.d=0
t.e=100
t.r=t.x=t.f=0
return t},
fx:function fx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){this.b=this.a=null},
bk:function bk(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Q:function Q(){},
cm:function cm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cn:function cn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
co:function co(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d7:function d7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jY:function(a){var t,s=a.c,r=a.c,q="Normal_"+a.gfd(a),p=$.aI(),o=$.aH()
o=p.a|o.a
t=new Z.b9(o)
if(s)t=new Z.b9(o|$.aG().a)
return new A.he(a,s,!1,r,q,r?new Z.b9(t.a|$.aJ().a):t)},
jd:function(a,b,c,d,e){var t=new A.hU(a,c,e)
t.f=d
P.j6(d,0,!1)
return t},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a){this.a=a},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
he:function he(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dS:function dS(){},
hR:function hR(){},
i0:function i0(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
e9:function e9(a,b,c){this.a=a
this.c=b
this.d=c},
i3:function i3(a,b,c){this.a=a
this.c=b
this.d=c},
ea:function ea(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iH:function(a){var t=a.a>0?1:0
if(a.b>0)t+=2
return(a.c>0?t+4:t)*2},
cK:function(a,b,c,a0,a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.I(g,f+a2,e+a3)
i.a=d
t=a2-a3
s=a3-a4
r=a4-a2
q=i.b=new V.I(t+a4,s+a2,r+a3)
p=new V.I(t-a4,s-a2,r-a3)
i.c=p
o=i.d=new V.I(h-a4,f-a2,e-a3)
if(g>0){i.d=q
i.b=o
g=q
h=o}else{g=o
h=q}for(e=g,g=h,h=d,f=p,n=0;n<a5;++n,m=e,e=h,h=g,g=f,f=m){i.a=g
i.b=f
i.c=e
i.d=h}l=F.iH(h)
k=F.iH(g)
j=F.nm(a0,a1,new F.iG(i,F.iH(f),F.iH(e),k,l,c),b)
if(j!=null)a.eI(j)},
nm:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a<1)return null
if(b<1)return null
t=F.k9()
s=[]
for(r=0;r<=b;++r){q=r/b
p=t.a
if(q<0)o=0
else o=q>1?1:q
n=p.c3(new V.aP(o,0,0,1),new V.aj(q,1))
c.$3(n,q,0)
s.push(n.bq(d))}for(r=1;r<=a;++r){m=r/a
for(p=m>1,o=m<0,l=1-m,k=0;k<=b;++k){q=k/b
j=t.a
if(q<0)i=0
else i=q>1?1:q
if(o)h=0
else h=p?1:m
if(o)g=0
else g=p?1:m
n=j.c3(new V.aP(i,h,g,1),new V.aj(q,l))
c.$3(n,q,m)
s.push(n.bq(d))}}t.d.ej(a+1,b+1,s)
return t},
d8:function(a,b,c){var t=new F.fO(),s=a.a
if(s==null)H.L(P.J("May not create a face with a first vertex which is not attached to a shape."))
if(s!=b.a||s!=c.a)H.L(P.J("May not create a face with vertices attached to different shapes."))
t.a=a
a.d.b.push(t)
t.b=b
b.d.c.push(t)
t.c=c
c.d.d.push(t)
t.a.a.d.b.push(t)
t.a.a.Y()
return t},
k9:function(){var t=new F.hq(),s=new F.i8(t)
s.b=!1
s.c=[]
t.a=s
s=new F.ht(t)
s.b=[]
t.b=s
s=new F.hs(t)
s.b=[]
t.c=s
s=new F.hr(t)
s.b=[]
t.d=s
return t},
kk:function(a,b,c,d,e,f,g,h,i){var t,s=null,r=new F.i7(),q=new F.id()
q.b=[]
r.b=q
q=new F.ic()
q.b=[]
q.c=[]
r.c=q
q=new F.i9()
q.b=[]
q.c=[]
q.d=[]
r.d=q
h=$.l2()
r.e=0
q=$.aI()
t=h.a
r.f=(t&q.a)!==0?d:s
r.r=(t&$.aH().a)!==0?e:s
r.x=(t&$.aG().a)!==0?b:s
r.y=(t&$.bM().a)!==0?f:s
r.z=(t&$.aJ().a)!==0?g:s
r.Q=(t&$.l3().a)!==0?c:s
r.ch=(t&$.bN().a)!==0?i:0
r.cx=(t&$.bL().a)!==0?a:s
return r},
iG:function iG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fO:function fO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(){this.b=this.a=null},
hg:function hg(){this.a=null},
hq:function hq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){this.a=a
this.b=null},
hs:function hs(a){this.a=a
this.b=null},
ht:function ht(a){this.a=a
this.b=null},
i7:function i7(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){this.a=a},
ie:function ie(a){this.a=a},
i8:function i8(a){this.a=a
this.c=this.b=null},
i9:function i9(){this.d=this.c=this.b=null},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(){this.c=this.b=null},
id:function id(){this.b=null}},T={hE:function hE(){},hF:function hF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hG:function hG(a){var _=this
_.a=a
_.e=_.d=_.c=null},hH:function hH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j4.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gM:function(a){return H.ch(a)},
h:function(a){return"Instance of '"+H.d(H.dM(a))+"'"}}
J.fX.prototype={
h:function(a){return String(a)},
gM:function(a){return a?519018:218159}}
J.c3.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gM:function(a){return 0}}
J.aX.prototype={
gM:function(a){return 0},
h:function(a){return String(a)}}
J.dH.prototype={}
J.b8.prototype={}
J.ac.prototype={
h:function(a){var t=a[$.kS()]
if(t==null)return this.cJ(a)
return"JavaScript function for "+H.d(J.V(t))}}
J.a4.prototype={
eY:function(a,b){var t
if(!!a.fixed$length)H.L(P.t("removeAt"))
t=a.length
if(b>=t)throw H.c(P.dN(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var t
if(!!a.fixed$length)H.L(P.t("remove"))
for(t=0;t<a.length;++t)if(J.H(a[t],b)){a.splice(t,1)
return!0}return!1},
a1:function(a,b){var t,s
if(!!a.fixed$length)H.L(P.t("addAll"))
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.r)(b),++s)a.push(b[s])},
I:function(a,b){var t,s=a.length
for(t=0;t<s;++t){b.$1(a[t])
if(a.length!==s)throw H.c(P.aQ(a))}},
l:function(a,b){var t,s,r=P.j6(a.length,"",!1)
for(t=0;t<a.length;++t){s=H.d(a[t])
if(t>=r.length)return H.e(r,t)
r[t]=s}return r.join(b)},
eG:function(a){return this.l(a,"")},
eD:function(a,b){var t,s,r=a.length
for(t=0;t<r;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==r)throw H.c(P.aQ(a))}throw H.c(H.j2())},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gaR:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.j2())},
c5:function(a,b){var t,s=a.length
for(t=0;t<s;++t){if(b.$1(a[t]))return!0
if(a.length!==s)throw H.c(P.aQ(a))}return!1},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.H(a[t],b))return!0
return!1},
h:function(a){return P.j1(a,"[","]")},
gK:function(a){return new J.a_(a,a.length)},
gM:function(a){return H.ch(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.L(P.t("set length"))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.bJ(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.L(P.t("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bJ(a,b))
a[b]=c},
$ii:1,
$if:1}
J.di.prototype={}
J.a_.prototype={
gB:function(a){return this.d},
q:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.c(H.r(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.aW.prototype={
av:function(a,b){var t
if(typeof b!="number")throw H.c(H.aE(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaQ(b)
if(this.gaQ(a)===t)return 0
if(this.gaQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaQ:function(a){return a===0?1/a<0:a<0},
f7:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.c(P.t(""+a+".toInt()"))},
bs:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
cw:function(a,b){var t
if(b>20)throw H.c(P.aw(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaQ(a))return"-"+t
return t},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
cD:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
cL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c_(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.c_(a,b)},
c_:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.d(t)+": "+H.d(a)+" ~/ "+b))},
aM:function(a,b){var t
if(a>0)t=this.ea(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ea:function(a,b){return b>31?0:a>>>b},
$iT:1,
$iM:1}
J.c2.prototype={$iq:1}
J.c1.prototype={}
J.ah.prototype={
bp:function(a,b){if(b<0)throw H.c(H.bJ(a,b))
if(b>=a.length)H.L(H.bJ(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.c(H.bJ(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.jE(b,null,null))
return a+b},
aZ:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aH:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dN(b,null))
if(b>c)throw H.c(P.dN(b,null))
if(c>a.length)throw H.c(P.dN(c,null))
return a.substring(b,c)},
bH:function(a,b){return this.aH(a,b,null)},
fa:function(a){return a.toLowerCase()},
u:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
a4:function(a,b){var t=b-a.length
if(t<=0)return a
return this.u(" ",t)+a},
eq:function(a,b,c){var t=a.length
if(c>t)throw H.c(P.aw(c,0,t,null,null))
return H.kO(a,b,c)},
C:function(a,b){return this.eq(a,b,0)},
av:function(a,b){var t
if(typeof b!="string")throw H.c(H.aE(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
h:function(a){return a},
gM:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gk:function(a){return a.length},
$iF:1}
H.k.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.bp(this.a,b)}}
H.i.prototype={}
H.c7.prototype={
gK:function(a){return new H.au(this,this.gk(this))},
aW:function(a,b){return this.cI(0,b)}}
H.au.prototype={
gB:function(a){var t=this.d
return t},
q:function(){var t,s=this,r=s.a,q=J.bd(r),p=q.gk(r)
if(s.b!=p)throw H.c(P.aQ(r))
t=s.c
if(typeof p!=="number")return H.n(p)
if(t>=p){s.d=null
return!1}s.d=q.A(r,t);++s.c
return!0}}
H.aZ.prototype={
gK:function(a){return new H.c9(J.aK(this.a),this.b)},
gk:function(a){return J.aL(this.a)},
A:function(a,b){return this.b.$1(J.fm(this.a,b))}}
H.bV.prototype={$ii:1}
H.c9.prototype={
q:function(){var t=this,s=t.b
if(s.q()){t.a=t.c.$1(s.gB(s))
return!0}t.a=null
return!1},
gB:function(a){var t=this.a
return t}}
H.ca.prototype={
gk:function(a){return J.aL(this.a)},
A:function(a,b){return this.b.$1(J.fm(this.a,b))}}
H.ba.prototype={
gK:function(a){return new H.ej(J.aK(this.a),this.b)}}
H.ej.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gB(t)))return!0
return!1},
gB:function(a){var t=this.a
return t.gB(t)}}
H.bY.prototype={}
H.ed.prototype={
m:function(a,b,c){throw H.c(P.t("Cannot modify an unmodifiable list"))}}
H.bB.prototype={}
H.hP.prototype={
a3:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.dB.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.dj.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.d(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.d(s.a)+")"
return r+q+"' on '"+t+"' ("+H.d(s.a)+")"}}
H.ec.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hf.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eW.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t}}
H.bh.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.kQ(s==null?"unknown":s)+"'"},
gff:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hC.prototype={}
H.hy.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.kQ(t)+"'"}}
H.bO.prototype={
p:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.bO))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gM:function(a){var t,s=this.c
if(s==null)t=H.ch(this.a)
else t=typeof s!=="object"?J.U(s):H.ch(s)
return(t^H.ch(this.b))>>>0},
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dM(t))+"'")}}
H.dQ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.O.prototype={
gk:function(a){return this.a},
gX:function(a){return new H.at(this)},
gfe:function(a){return H.lC(new H.at(this),new H.fZ(this))},
er:function(a,b){var t=this.b
if(t==null)return!1
return this.d4(t,b)},
j:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.aK(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.aK(q,b)
r=s==null?o:s.b
return r}else return p.eF(b)},
eF:function(a){var t,s,r=this.d
if(r==null)return null
t=this.bW(r,J.U(a)&0x3ffffff)
s=this.cc(t,a)
if(s<0)return null
return t[s].b},
m:function(a,b,c){var t,s,r,q,p,o,n=this
if(typeof b=="string"){t=n.b
n.bQ(t==null?n.b=n.bf():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.bQ(s==null?n.c=n.bf():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bf()
q=J.U(b)&0x3ffffff
p=n.bW(r,q)
if(p==null)n.bi(r,q,[n.bg(b,c)])
else{o=n.cc(p,b)
if(o>=0)p[o].b=c
else p.push(n.bg(b,c))}}},
I:function(a,b){var t=this,s=t.e,r=t.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==t.r)throw H.c(P.aQ(t))
s=s.c}},
bQ:function(a,b,c){var t=this.aK(a,b)
if(t==null)this.bi(a,b,this.bg(b,c))
else t.b=c},
dg:function(){this.r=this.r+1&67108863},
bg:function(a,b){var t,s=this,r=new H.h1(a,b)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.d=t
s.f=t.c=r}++s.a
s.dg()
return r},
cc:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
h:function(a){return P.jV(this)},
aK:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
bi:function(a,b,c){a[b]=c},
d8:function(a,b){delete a[b]},
d4:function(a,b){return this.aK(a,b)!=null},
bf:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bi(s,t,s)
this.d8(s,t)
return s}}
H.fZ.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){return H.my(this.a).ac("2(1)")}}
H.h1.prototype={}
H.at.prototype={
gk:function(a){return this.a.a},
gK:function(a){var t=this.a,s=new H.dm(t,t.r)
s.c=t.e
return s}}
H.dm.prototype={
gB:function(a){return this.d},
q:function(){var t,s=this,r=s.a
if(s.b!==r.r)throw H.c(P.aQ(r))
t=s.c
if(t==null){s.d=null
return!1}else{s.d=t.a
s.c=t.c
return!0}}}
H.iM.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.iN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iO.prototype={
$1:function(a){return this.a(a)}}
H.fY.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cd.prototype={}
H.br.prototype={
gk:function(a){return a.length},
$io:1}
H.b0.prototype={
j:function(a,b){H.am(b,a,a.length)
return a[b]},
m:function(a,b,c){H.am(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cc.prototype={
m:function(a,b,c){H.am(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.du.prototype={
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.dv.prototype={
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.dw.prototype={
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.dx.prototype={
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.dy.prototype={
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.ce.prototype={
gk:function(a){return a.length},
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.dz.prototype={
gk:function(a){return a.length},
j:function(a,b){H.am(b,a,a.length)
return a[b]}}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
H.a9.prototype={
ac:function(a){return H.f9(v.typeUniverse,this,a)},
bR:function(a){return H.mn(v.typeUniverse,this,a)}}
H.ey.prototype={}
H.et.prototype={
h:function(a){return this.a}}
H.cG.prototype={}
P.ij.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:13}
P.ii.prototype={
$1:function(a){var t,s
this.a.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)}}
P.ik.prototype={
$0:function(){this.a.$0()}}
P.il.prototype={
$0:function(){this.a.$0()}}
P.cF.prototype={
cU:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bI(new P.iC(this,b),0),a)
else throw H.c(P.t("`setTimeout()` not found."))},
cV:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bI(new P.iB(this,a,Date.now(),b),0),a)
else throw H.c(P.t("Periodic timer."))},
$ick:1}
P.iC.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iB.prototype={
$0:function(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=C.c.cL(t,p)}r.c=q
s.d.$1(r)}}
P.bF.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bb.prototype={
gB:function(a){var t=this.c
if(t==null)return this.b
return t.gB(t)},
q:function(){var t,s,r,q,p,o=this
for(;!0;){t=o.c
if(t!=null)if(t.q())return!0
else o.c=null
s=function(a,b,c){var n,m=b
while(true)try{return a(m,n)}catch(l){n=l
m=c}}(o.a,0,1)
if(s instanceof P.bF){r=s.b
if(r===2){q=o.d
if(q==null||q.length===0){o.b=null
return!1}if(0>=q.length)return H.e(q,-1)
o.a=q.pop()
continue}else{t=s.a
if(r===3)throw t
else{p=J.aK(t)
if(p instanceof P.bb){t=o.d
if(t==null)t=o.d=[]
t.push(o.a)
o.a=p.a
continue}else{o.c=p
continue}}}}else{o.b=s
return!0}}return!1}}
P.cC.prototype={
gK:function(a){return new P.bb(this.a())}}
P.ek.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.ck.prototype={}
P.iF.prototype={}
P.iI.prototype={
$0:function(){var t=H.c(this.a)
t.stack=J.V(this.b)
throw t}}
P.iu.prototype={
f2:function(a){var t,s,r,q=null
try{if(C.e===$.ae){a.$0()
return}P.mL(q,q,this,a)}catch(r){t=H.ap(r)
s=H.jt(r)
P.kD(q,q,this,t,s)}},
f3:function(a,b){var t,s,r,q=null
try{if(C.e===$.ae){a.$1(b)
return}P.mM(q,q,this,a,b)}catch(r){t=H.ap(r)
s=H.jt(r)
P.kD(q,q,this,t,s)}},
f4:function(a,b){return this.f3(a,b,u.z)},
en:function(a){return new P.iv(this,a)},
c6:function(a,b){return new P.iw(this,a,b)}}
P.iv.prototype={
$0:function(){return this.a.f2(this.b)}}
P.iw.prototype={
$1:function(a){return this.a.f4(this.b,a)},
$S:function(){return this.c.ac("~(0)")}}
P.cq.prototype={
gK:function(a){var t=new P.cr(this,this.r)
t.c=this.e
return t},
gk:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else{s=this.d3(b)
return s}},
d3:function(a){var t=this.d
if(t==null)return!1
return this.b6(t[this.b3(a)],a)>=0},
n:function(a,b){var t,s,r=this
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.bS(t==null?r.b=P.jg():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.bS(s==null?r.c=P.jg():s,b)}else return r.cX(0,b)},
cX:function(a,b){var t,s,r=this,q=r.d
if(q==null)q=r.d=P.jg()
t=r.b3(b)
s=q[t]
if(s==null)q[t]=[r.b2(b)]
else{if(r.b6(s,b)>=0)return!1
s.push(r.b2(b))}return!0},
O:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.e1(this.c,b)
else return this.e0(0,b)},
e0:function(a,b){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.b3(b)
s=o[t]
r=p.b6(s,b)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.c1(q)
return!0},
bS:function(a,b){if(a[b]!=null)return!1
a[b]=this.b2(b)
return!0},
e1:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.c1(t)
delete a[b]
return!0},
bT:function(){this.r=1073741823&this.r+1},
b2:function(a){var t,s=this,r=new P.it(a)
if(s.e==null)s.e=s.f=r
else{t=s.f
t.toString
r.c=t
s.f=t.b=r}++s.a
s.bT()
return r},
c1:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.bT()},
b3:function(a){return J.U(a)&1073741823},
b6:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1}}
P.it.prototype={}
P.cr.prototype={
gB:function(a){return this.d},
q:function(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw H.c(P.aQ(r))
else if(s==null){t.d=null
return!1}else{t.d=s.a
t.c=s.b
return!0}}}
P.c0.prototype={}
P.c6.prototype={$ii:1,$if:1}
P.v.prototype={
gK:function(a){return new H.au(a,this.gk(a))},
A:function(a,b){return this.j(a,b)},
gcd:function(a){return this.gk(a)===0},
f9:function(a,b){var t,s,r,q,p=this
if(p.gcd(a)){t=J.jR(0)
return t}s=p.j(a,0)
r=P.j6(p.gk(a),s,!0)
q=1
while(!0){t=p.gk(a)
if(typeof t!=="number")return H.n(t)
if(!(q<t))break
t=p.j(a,q)
if(q>=r.length)return H.e(r,q)
r[q]=t;++q}return r},
f8:function(a){return this.f9(a,!0)},
h:function(a){return P.j1(a,"[","]")}}
P.dp.prototype={}
P.h4.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.d(a)
s.a=t+": "
s.a+=H.d(b)},
$S:14}
P.ai.prototype={
I:function(a,b){var t,s
for(t=J.aK(this.gX(a));t.q();){s=t.gB(t)
b.$2(s,this.j(a,s))}},
gk:function(a){return J.aL(this.gX(a))},
h:function(a){return P.jV(a)}}
P.cy.prototype={
a1:function(a,b){var t
for(t=J.aK(b);t.q();)this.n(0,t.gB(t))},
h:function(a){return P.j1(this,"{","}")},
A:function(a,b){var t,s,r,q="index"
P.li(b,q)
P.k4(b,q)
for(t=P.m7(this,this.r),s=0;t.q();){r=t.d
if(b===s)return r;++s}throw H.c(P.B(b,this,q,null,s))},
$ii:1,
$if:1}
P.cs.prototype={}
P.d0.prototype={}
P.d2.prototype={}
P.fJ.prototype={}
P.fW.prototype={
h:function(a){return this.a}}
P.fV.prototype={
d5:function(a,b,c){var t,s,r,q,p,o,n=null
for(t=this.a,s=t.e,r=t.d,t=t.c,q=b,p=n;q<c;++q){if(q>=a.length)return H.e(a,q)
switch(a[q]){case"&":o="&amp;"
break
case'"':o=t?"&quot;":n
break
case"'":o=r?"&#39;":n
break
case"<":o="&lt;"
break
case">":o="&gt;"
break
case"/":o=s?"&#47;":n
break
default:o=n}if(o!=null){if(p==null)p=new P.by("")
if(q>b)p.a+=C.b.aH(a,b,q)
p.a+=o
b=q+1}}if(p==null)return n
if(c>b)p.a+=J.lg(a,b,c)
t=p.a
return t.charCodeAt(0)==0?t:t}}
P.i5.prototype={}
P.i6.prototype={
es:function(a){var t,s,r,q=null,p=P.j9(0,q,a.length)
if(p==null)throw H.c(new P.bv(q,q,!1,q,q,"Invalid range"))
t=p-0
if(t===0)return new Uint8Array(0)
s=new Uint8Array(t*3)
r=new P.iD(s)
if(r.da(a,0,p)!==p){C.b.bp(a,p-1)
r.bk()}return new Uint8Array(s.subarray(0,H.ms(0,r.b,s.length)))}}
P.iD.prototype={
bk:function(){var t=this,s=t.c,r=t.b,q=t.b=r+1,p=s.length
if(r>=p)return H.e(s,r)
s[r]=239
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=191
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=189},
eh:function(a,b){var t,s,r,q,p,o=this
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
return!0}else{o.bk()
return!1}},
da:function(a,b,c){var t,s,r,q,p,o,n,m=this
if(b!==c&&(C.b.bp(a,c-1)&64512)===55296)--c
for(t=m.c,s=t.length,r=b;r<c;++r){q=C.b.aJ(a,r)
if(q<=127){p=m.b
if(p>=s)break
m.b=p+1
t[p]=q}else{p=q&64512
if(p===55296){if(m.b+4>s)break
o=r+1
if(m.eh(q,C.b.aJ(a,o)))r=o}else if(p===56320){if(m.b+3>s)break
m.bk()}else if(q<=2047){p=m.b
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
P.bc.prototype={}
P.a3.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a3&&this.a===b.a&&!0},
av:function(a,b){return C.c.av(this.a,b.a)},
gM:function(a){var t=this.a
return(t^C.c.aM(t,30))&1073741823},
h:function(a){var t=this,s=P.lr(H.lK(t)),r=P.d5(H.lI(t)),q=P.d5(H.lE(t)),p=P.d5(H.lF(t)),o=P.d5(H.lH(t)),n=P.d5(H.lJ(t)),m=P.ls(H.lG(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.T.prototype={}
P.aR.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gM:function(a){return C.c.gM(this.a)},
av:function(a,b){return C.c.av(this.a,b.a)},
h:function(a){var t,s,r,q=new P.fG(),p=this.a
if(p<0)return"-"+new P.aR(0-p).h(0)
t=q.$1(C.c.a8(p,6e7)%60)
s=q.$1(C.c.a8(p,1e6)%60)
r=new P.fF().$1(p%1e6)
return""+C.c.a8(p,36e8)+":"+H.d(t)+":"+H.d(s)+"."+H.d(r)}}
P.fF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.A.prototype={}
P.cW.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.fL(t)
return"Assertion failed"}}
P.dC.prototype={
h:function(a){return"Throw of null."}}
P.Z.prototype={
gb5:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb4:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gb5()+p+n
if(!r.a)return m
t=r.gb4()
s=P.fL(r.b)
return m+t+": "+s}}
P.bv.prototype={
gb5:function(){return"RangeError"},
gb4:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.d(r):""
else if(r==null)t=": Not greater than or equal to "+H.d(s)
else if(r>s)t=": Not in inclusive range "+H.d(s)+".."+H.d(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.d(s)
return t}}
P.dg.prototype={
gb5:function(){return"RangeError"},
gb4:function(){var t,s=this.b
if(typeof s!=="number")return s.a0()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gk:function(a){return this.f}}
P.ee.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.eb.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bx.prototype={
h:function(a){return"Bad state: "+this.a}}
P.d1.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fL(t)+"."}}
P.dF.prototype={
h:function(a){return"Out of Memory"},
$iA:1}
P.ci.prototype={
h:function(a){return"Stack Overflow"},
$iA:1}
P.d3.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.ev.prototype={
h:function(a){return"Exception: "+this.a}}
P.fR.prototype={
h:function(a){var t=this.a,s=""!==t?"FormatException: "+t:"FormatException",r=this.b
if(r.length>78)r=C.b.aH(r,0,75)+"..."
return s+"\n"+r}}
P.fT.prototype={}
P.q.prototype={}
P.f.prototype={
aW:function(a,b){return new H.ba(this,b)},
gk:function(a){var t,s=this.gK(this)
for(t=0;s.q();)++t
return t},
gal:function(a){var t,s=this.gK(this)
if(!s.q())throw H.c(H.j2())
t=s.gB(s)
if(s.q())throw H.c(H.lw())
return t},
A:function(a,b){var t,s,r
P.k4(b,"index")
for(t=this.gK(this),s=0;t.q();){r=t.gB(t)
if(b===s)return r;++s}throw H.c(P.B(b,this,"index",null,s))},
h:function(a){return P.lv(this,"(",")")}}
P.dh.prototype={}
P.c5.prototype={$ii:1,$if:1}
P.dn.prototype={}
P.a7.prototype={
gM:function(a){return P.E.prototype.gM.call(C.M,this)},
h:function(a){return"null"}}
P.M.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
p:function(a,b){return this===b},
gM:function(a){return H.ch(this)},
h:function(a){return"Instance of '"+H.d(H.dM(this))+"'"},
toString:function(){return this.h(this)}}
P.F.prototype={}
P.by.prototype={
gk:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.l.prototype={}
W.fn.prototype={
gk:function(a){return a.length}}
W.cU.prototype={
h:function(a){return String(a)}}
W.cV.prototype={
h:function(a){return String(a)}}
W.bf.prototype={$ibf:1}
W.cY.prototype={}
W.aM.prototype={$iaM:1}
W.aN.prototype={
bD:function(a,b,c){if(c!=null)return a.getContext(b,P.n_(c))
return a.getContext(b)},
cC:function(a,b){return this.bD(a,b,null)},
$iaN:1}
W.ab.prototype={
gk:function(a){return a.length}}
W.fy.prototype={
gk:function(a){return a.length}}
W.z.prototype={$iz:1}
W.bR.prototype={
gk:function(a){return a.length}}
W.fz.prototype={}
W.a2.prototype={}
W.ag.prototype={}
W.fA.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
gk:function(a){return a.length}}
W.fC.prototype={
gk:function(a){return a.length}}
W.bS.prototype={}
W.fD.prototype={
h:function(a){return String(a)}}
W.bT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.bU.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gak(a))+" x "+H.d(this.gae(a))},
p:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.an(b)
t=a.left==t.gaS(b)&&a.top==t.gaV(b)&&this.gak(a)==t.gak(b)&&this.gae(a)==t.gae(b)}else t=!1
return t},
gM:function(a){return W.ko(J.U(a.left),J.U(a.top),J.U(this.gak(a)),J.U(this.gae(a)))},
gc7:function(a){return a.bottom},
gae:function(a){return a.height},
gaS:function(a){return a.left},
gcs:function(a){return a.right},
gaV:function(a){return a.top},
gak:function(a){return a.width},
$ia8:1}
W.d6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.fE.prototype={
gk:function(a){return a.length}}
W.em.prototype={
gcd:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
j:function(a,b){var t=this.b
if(b<0||b>=t.length)return H.e(t,b)
return u.h.a(t[b])},
m:function(a,b,c){var t=this.b
if(b<0||b>=t.length)return H.e(t,b)
this.a.replaceChild(c,t[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var t=this.f8(this)
return new J.a_(t,t.length)}}
W.u.prototype={
gem:function(a){return new W.io(a)},
gc8:function(a){return new W.em(a,a.children)},
gc9:function(a){var t=a.clientLeft,s=a.clientTop,r=a.clientWidth,q=a.clientHeight
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
if(typeof q!=="number")return q.a0()
if(q<0)q=-q*0
return new P.a8(t,s,r,q,u.q)},
h:function(a){return a.localName},
a2:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.jN
if(t==null){t=[]
s=new W.cg(t)
t.push(W.km(null))
t.push(W.ks())
$.jN=s
d=s}else d=t
t=$.jM
if(t==null){t=new W.fa(d)
$.jM=t
c=t}else{t.a=d
c=t}}if($.as==null){t=document
s=t.implementation.createHTMLDocument("")
$.as=s
$.j_=s.createRange()
s=$.as.createElement("base")
u.y.a(s)
s.href=t.baseURI
$.as.head.appendChild(s)}t=$.as
if(t.body==null){s=t.createElement("body")
t.body=u.t.a(s)}t=$.as
if(u.t.b(a)){t=t.body
t.toString
r=t}else{t.toString
r=t.createElement(a.tagName)
$.as.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.P,a.tagName)){$.j_.selectNodeContents(r)
t=$.j_
q=t.createContextualFragment(b)}else{r.innerHTML=b
q=$.as.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}if(r!==$.as.body)J.jC(r)
c.bE(q)
document.adoptNode(q)
return q},
ev:function(a,b,c){return this.a2(a,b,c,null)},
cF:function(a,b){a.textContent=null
a.appendChild(this.a2(a,b,null,null))},
gct:function(a){return a.tagName},
$iu:1}
W.fH.prototype={
$1:function(a){return u.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
ei:function(a,b,c,d){if(c!=null)this.cY(a,b,c,!1)},
cY:function(a,b,c,d){return a.addEventListener(b,H.bI(c,1),!1)},
$ib:1}
W.aS.prototype={$iaS:1}
W.d9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.da.prototype={
gk:function(a){return a.length}}
W.dc.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.fU.prototype={
gk:function(a){return a.length}}
W.aU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.aV.prototype={
gca:function(a){return a.data},
$iaV:1}
W.bl.prototype={$ibl:1}
W.aY.prototype={$iaY:1}
W.h2.prototype={
h:function(a){return String(a)}}
W.h5.prototype={
gk:function(a){return a.length}}
W.h6.prototype={
j:function(a,b){return P.aF(a.get(b))},
I:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.aF(t.value[1]))}},
gX:function(a){var t=[]
this.I(a,new W.h7(t))
return t},
gk:function(a){return a.size}}
W.h7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h8.prototype={
j:function(a,b){return P.aF(a.get(b))},
I:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.aF(t.value[1]))}},
gX:function(a){var t=[]
this.I(a,new W.h9(t))
return t},
gk:function(a){return a.size}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b_.prototype={$ib_:1}
W.dt.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.a0.prototype={$ia0:1}
W.R.prototype={
gal:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.c(P.ja("No elements"))
if(s>1)throw H.c(P.ja("More than one element"))
t=t.firstChild
t.toString
return t},
a1:function(a,b){var t,s,r,q=b.a,p=this.a
if(q!==p)for(t=q.childNodes.length,s=0;s<t;++s){r=q.firstChild
r.toString
p.appendChild(r)}return},
m:function(a,b,c){var t=this.a,s=t.childNodes
if(b<0||b>=s.length)return H.e(s,b)
t.replaceChild(c,s[b])},
gK:function(a){var t=this.a.childNodes
return new W.bZ(t,t.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var t=this.a.childNodes
if(b<0||b>=t.length)return H.e(t,b)
return t[b]}}
W.p.prototype={
eX:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
f0:function(a,b){var t,s,r
try{s=a.parentNode
s.toString
t=s
J.l8(t,b,a)}catch(r){H.ap(r)}return a},
h:function(a){var t=a.nodeValue
return t==null?this.cH(a):t},
e2:function(a,b,c){return a.replaceChild(b,c)},
$ip:1}
W.cf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.b1.prototype={
gk:function(a){return a.length},
$ib1:1}
W.dJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.hn.prototype={
j:function(a,b){return P.aF(a.get(b))},
I:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.aF(t.value[1]))}},
gX:function(a){var t=[]
this.I(a,new W.ho(t))
return t},
gk:function(a){return a.size}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dR.prototype={
gk:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.dU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.b4.prototype={$ib4:1}
W.dV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.b5.prototype={
gk:function(a){return a.length},
$ib5:1}
W.hz.prototype={
j:function(a,b){return a.getItem(H.jm(b))},
I:function(a,b){var t,s,r
for(t=0;!0;++t){s=a.key(t)
if(s==null)return
r=a.getItem(s)
r.toString
b.$2(s,r)}},
gX:function(a){var t=[]
this.I(a,new W.hA(t))
return t},
gk:function(a){return a.length}}
W.hA.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.cj.prototype={
a2:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
t=W.lt("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).a1(0,new W.R(t))
return s}}
W.e0.prototype={
a2:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.u.a2(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gal(t)
r.toString
t=new W.R(r)
q=t.gal(t)
s.toString
q.toString
new W.R(s).a1(0,new W.R(q))
return s}}
W.e1.prototype={
a2:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b_(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.u.a2(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.gal(t)
s.toString
r.toString
new W.R(s).a1(0,new W.R(r))
return s}}
W.bz.prototype={$ibz:1}
W.az.prototype={$iaz:1}
W.ad.prototype={$iad:1}
W.e2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.e3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.hJ.prototype={
gk:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.b7.prototype={$ib7:1}
W.e7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.hN.prototype={
gk:function(a){return a.length}}
W.al.prototype={}
W.i4.prototype={
h:function(a){return String(a)}}
W.eh.prototype={
gk:function(a){return a.length}}
W.aA.prototype={
gey:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
gex:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.t("deltaX is not supported"))},
$iaA:1}
W.bC.prototype={
e3:function(a,b){return a.requestAnimationFrame(H.bI(b,1))},
d9:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bD.prototype={$ibD:1}
W.en.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.cp.prototype={
h:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.an(b)
t=a.left==t.gaS(b)&&a.top==t.gaV(b)&&a.width==t.gak(b)&&a.height==t.gae(b)}else t=!1
return t},
gM:function(a){return W.ko(J.U(a.left),J.U(a.top),J.U(a.width),J.U(a.height))},
gae:function(a){return a.height},
gak:function(a){return a.width}}
W.ez.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.ct.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.eT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.f_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$io:1,
$if:1}
W.im.prototype={
I:function(a,b){var t,s,r,q,p
for(t=this.gX(this),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.r)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gX:function(a){var t,s,r,q,p=this.a.attributes,o=[]
for(t=p.length,s=u.x,r=0;r<t;++r){if(r>=p.length)return H.e(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)o.push(q.name)}return o}}
W.io.prototype={
j:function(a,b){return this.a.getAttribute(H.jm(b))},
gk:function(a){return this.gX(this).length}}
W.j0.prototype={}
W.eu.prototype={}
W.iq.prototype={
$1:function(a){return this.a.$1(a)}}
W.jf.prototype={}
W.bE.prototype={
cR:function(a){var t
if($.eA.a===0){for(t=0;t<262;++t)$.eA.m(0,C.O[t],W.n9())
for(t=0;t<12;++t)$.eA.m(0,C.j[t],W.na())}},
as:function(a){return $.l5().C(0,W.bW(a))},
a9:function(a,b,c){var t=$.eA.j(0,H.d(W.bW(a))+"::"+b)
if(t==null)t=$.eA.j(0,"*::"+b)
if(t==null)return!1
return t.$4(a,b,c,this)},
$ia6:1}
W.x.prototype={
gK:function(a){return new W.bZ(a,this.gk(a))}}
W.cg.prototype={
as:function(a){return C.a.c5(this.a,new W.hc(a))},
a9:function(a,b,c){return C.a.c5(this.a,new W.hb(a,b,c))},
$ia6:1}
W.hc.prototype={
$1:function(a){return a.as(this.a)}}
W.hb.prototype={
$1:function(a){return a.a9(this.a,this.b,this.c)}}
W.cz.prototype={
cT:function(a,b,c,d){var t,s,r
this.a.a1(0,c)
t=b.aW(0,new W.iy())
s=b.aW(0,new W.iz())
this.b.a1(0,t)
r=this.c
r.a1(0,C.Q)
r.a1(0,s)},
as:function(a){return this.a.C(0,W.bW(a))},
a9:function(a,b,c){var t=this,s=W.bW(a),r=t.c
if(r.C(0,H.d(s)+"::"+b))return t.d.ek(c)
else if(r.C(0,"*::"+b))return t.d.ek(c)
else{r=t.b
if(r.C(0,H.d(s)+"::"+b))return!0
else if(r.C(0,"*::"+b))return!0
else if(r.C(0,H.d(s)+"::*"))return!0
else if(r.C(0,"*::*"))return!0}return!1},
$ia6:1}
W.iy.prototype={
$1:function(a){return!C.a.C(C.j,a)}}
W.iz.prototype={
$1:function(a){return C.a.C(C.j,a)}}
W.f1.prototype={
a9:function(a,b,c){if(this.cK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.iA.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.f0.prototype={
as:function(a){var t
if(u.Y.b(a))return!1
t=u.u.b(a)
if(t&&W.bW(a)==="foreignObject")return!1
if(t)return!0
return!1},
a9:function(a,b,c){if(b==="is"||C.b.aZ(b,"on"))return!1
return this.as(a)},
$ia6:1}
W.bZ.prototype={
q:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.d=J.l7(t.a,s)
t.c=s
return!0}t.d=null
t.c=r
return!1},
gB:function(a){return this.d}}
W.a6.prototype={}
W.ix.prototype={}
W.fa.prototype={
bE:function(a){var t=this,s=new W.iE(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aB:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.jC(a)
else b.removeChild(a)},
e6:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.lc(a)
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
o=t?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.ap(q)}s="element unprintable"
try{s=J.V(a)}catch(q){H.ap(q)}try{r=W.bW(a)
this.e5(a,b,o,s,r,n,m)}catch(q){if(H.ap(q) instanceof P.Z)throw q
else{this.aB(a,b)
window
p="Removing corrupted element "+H.d(s)
if(typeof console!="undefined")window.console.warn(p)}}},
e5:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.aB(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.as(a)){n.aB(a,b)
window
t="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.a9(a,"is",g)){n.aB(a,b)
window
t="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}s=f.gX(f).slice(0)
for(r=f.gX(f).length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q=s[r]
p=n.a
o=J.lh(q)
H.jm(q)
if(!p.a9(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.d(e)+" "+q+'="'+H.d(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.f.b(a))n.bE(a.content)}}
W.iE.prototype={
$2:function(a,b){var t,s,r,q,p,o=this.a
switch(a.nodeType){case 1:o.e6(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.aB(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){r=s.nextSibling
q=t
q=r==null?q!=null:r!==q
r=q}else r=!1
if(r){r=P.ja("Corrupt HTML")
throw H.c(r)}}catch(p){H.ap(p)
r=t
o.b=!0
q=r.parentNode
q=a==null?q!=null:a!==q
if(q){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}}}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eQ.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eX.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
P.cH.prototype={$iaV:1,
gca:function(a){return this.a}}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.db.prototype={
gaL:function(){return new H.aZ(new H.ba(this.b,new P.fP()),new P.fQ())},
m:function(a,b,c){var t=this.gaL()
J.lf(t.b.$1(J.fm(t.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aL(this.gaL().a)},
j:function(a,b){var t=this.gaL()
return t.b.$1(J.fm(t.a,b))},
gK:function(a){var t=P.j7(this.gaL(),!1)
return new J.a_(t,t.length)}}
P.fP.prototype={
$1:function(a){return u.h.b(a)}}
P.fQ.prototype={
$1:function(a){return u.h.a(a)}}
P.eP.prototype={
gcs:function(a){var t=this.a,s=this.c
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.n(s)
return this.$ti.c.a(t+s)},
gc7:function(a){var t=this.b,s=this.d
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.n(s)
return this.$ti.c.a(t+s)},
h:function(a){var t=this
return"Rectangle ("+H.d(t.a)+", "+H.d(t.b)+") "+H.d(t.c)+" x "+H.d(t.d)},
p:function(a,b){var t,s,r,q,p,o=this
if(b==null)return!1
if(u.q.b(b)){t=o.a
s=J.an(b)
if(t==s.gaS(b)){r=o.b
if(r==s.gaV(b)){q=o.c
if(typeof t!=="number")return t.v()
if(typeof q!=="number")return H.n(q)
p=o.$ti.c
if(p.a(t+q)===s.gcs(b)){t=o.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.n(t)
s=p.a(r+t)===s.gc7(b)
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gM:function(a){var t,s=this,r=s.a,q=J.U(r),p=s.b,o=J.U(p),n=s.c
if(typeof r!=="number")return r.v()
if(typeof n!=="number")return H.n(n)
t=s.$ti.c
n=C.c.gM(t.a(r+n))
r=s.d
if(typeof p!=="number")return p.v()
if(typeof r!=="number")return H.n(r)
r=C.c.gM(t.a(p+r))
return P.m6(P.is(P.is(P.is(P.is(0,q),o),n),r))}}
P.a8.prototype={
gaS:function(a){return this.a},
gaV:function(a){return this.b},
gak:function(a){return this.c},
gae:function(a){return this.d}}
P.bo.prototype={$ibo:1}
P.dl.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.bs.prototype={$ibs:1}
P.dD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.hh.prototype={
gk:function(a){return a.length}}
P.bw.prototype={$ibw:1}
P.e_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gc8:function(a){return new P.db(a,new W.R(a))},
a2:function(a,b,c,d){var t,s,r,q,p,o=[]
o.push(W.km(null))
o.push(W.ks())
o.push(new W.f0())
c=new W.fa(new W.cg(o))
t='<svg version="1.1">'+b+"</svg>"
o=document
s=o.body
s.toString
r=C.l.ev(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.R(r)
p=o.gal(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
$ij:1}
P.bA.prototype={$ibA:1}
P.e8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.eD.prototype={}
P.eE.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fr.prototype={
gk:function(a){return a.length}}
P.fs.prototype={
j:function(a,b){return P.aF(a.get(b))},
I:function(a,b){var t,s=a.entries()
for(;!0;){t=s.next()
if(t.done)return
b.$2(t.value[0],P.aF(t.value[1]))}},
gX:function(a){var t=[]
this.I(a,new P.ft(t))
return t},
gk:function(a){return a.size}}
P.ft.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cX.prototype={
gk:function(a){return a.length}}
P.ar.prototype={}
P.dE.prototype={
gk:function(a){return a.length}}
P.el.prototype={}
P.dP.prototype={
f5:function(a,b,c,d,e,f,g){var t
if(u.I.b(g))t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,P.n0(g))
return}if(u.R.b(g))t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.iV("Incorrect number or type of arguments"))}}
P.dW.prototype={
gk:function(a){return a.length},
j:function(a,b){var t
if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
t=P.aF(a.item(b))
t.toString
return t},
m:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
A:function(a,b){return this.j(a,b)},
$ii:1,
$if:1}
P.eU.prototype={}
P.eV.prototype={}
K.aq.prototype={
af:function(a,b){return!0},
h:function(a){return"all"}}
K.de.prototype={
af:function(a,b){var t,s,r
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)if(t[r].af(0,b))return!0
return!1},
h:function(a){var t,s,r,q,p
for(t=this.a,s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.r)(t),++q){p=t[q]
if(r.length!==0)r+=", "
r+=p.h(0)}return r}}
K.W.prototype={
af:function(a,b){return!this.cG(0,b)},
h:function(a){return"!["+this.bI(0)+"]"}}
K.hi.prototype={
af:function(a,b){if(typeof b!=="number")return H.n(b)
return this.a<=b&&this.b>=b},
h:function(a){var t=H.j8(this.a),s=H.j8(this.b)
return t+".."+s}}
K.hp.prototype={
cN:function(a){var t,s,r,q
if(a.a.length<=0)throw H.c(P.J("May not create a Set with zero characters."))
t=new H.O(u.E)
for(s=new H.au(a,a.gk(a));s.q();){r=s.d
t.m(0,r,!0)}q=P.j7(new H.at(t),!0)
if(!!q.immutable$list)H.L(P.t("sort"))
H.lU(q,J.mA())
this.a=q},
af:function(a,b){return C.a.C(this.a,b)},
h:function(a){return P.jb(this.a)}}
L.dX.prototype={
l:function(a,b){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<s;++r){q=t[r]
if(q.b.b===b)return q}q=new L.hO(this.a.i(0,b))
q.a=[]
q.c=!1
this.c.push(q)
return q},
eC:function(a){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
if(q.af(0,a))return q}return null},
h:function(a){return this.b},
c0:function(){var t,s,r,q,p,o=this,n="("+o.b+")",m=o.d
if(m!=null){m=m.b
n+=" => ["+m+"]"
t=o.a
if(t.c.C(0,m))n+=" (consume)"
for(m=new H.at(o.d.c),m=m.gK(m);m.q();){s=m.d
n+="\n"
r=o.d.c.j(0,s)
s=n+("  -- "+H.d(s)+" => ["+H.d(r)+"]")
n=t.c.C(0,r)?s+" (consume)":s}}for(m=o.c,t=m.length,q=0;q<m.length;m.length===t||(0,H.r)(m),++q){p=m[q]
n=n+"\n"+("  -- "+p.h(0))}return n.charCodeAt(0)==0?n:n}}
L.e5.prototype={
h:function(a){var t=H.jz(this.b,"\n","\\n"),s=H.jz(t,"\t","\\t")
return this.a+":"+this.c+':"'+s+'"'}}
L.e6.prototype={
ai:function(a,b,c){var t,s,r
for(t=c.length,s=0;s<c.length;c.length===t||(0,H.r)(c),++s){r=c[s]
this.c.m(0,r,b)}},
h:function(a){return this.b}}
L.hK.prototype={
i:function(a,b){var t=this.a.j(0,b)
if(t==null){t=new L.dX(this,b)
t.c=[]
this.a.m(0,b,t)}return t},
G:function(a){var t=this.b.j(0,a)
if(t==null){t=new L.e6(a)
t.c=new H.O(u.i)
this.b.m(0,a,t)}return t},
bB:function(a){return this.fb(a)},
fb:function(a){var t=this
return P.mI(function(){var s=a
var r=0,q=1,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
return function $async$bB(a0,a1){if(a0===1){p=a1
r=q}while(true)switch(r){case 0:e=t.d
d=[]
c=[]
b=[]
o=null,n=0,m=0,l=0
case 2:if(!!0){r=3
break}if(b.length!==0)k=C.a.eY(b,0)
else{if(!s.q()){r=3
break}j=s.d
k=j}c.push(k);++n
i=e.eC(k)
r=i==null?4:6
break
case 4:if(o==null){h=P.jb(c)
throw H.c(P.J("Untokenizable string [state: "+e.b+", index "+n+']: "'+h+'"'))}if(!!c.fixed$length)H.L(P.t("removeRange"))
P.j9(0,l,c.length)
c.splice(0,l-0)
C.a.a1(b,c)
c=[]
d=[]
e=t.d
r=!t.c.C(0,o.a)?7:8
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
if(e.d!=null){h=P.jb(d)
g=e.d
f=g.c.j(0,h)
o=new L.e5(f==null?g.b:f,h,n)
l=c.length
m=n}case 5:r=2
break
case 3:r=o!=null&&!t.c.C(0,o.a)?10:11
break
case 10:r=12
return o
case 12:case 11:return P.m4()
case 1:return P.m5(p)}}},u.j)},
h:function(a){var t,s=new P.by(""),r=this.d
if(r!=null)s.a=r.c0()+"\n"
for(r=this.a,r=r.gfe(r),r=new H.c9(J.aK(r.a),r.b);r.q();){t=r.a
if(t!=this.d)s.a+=t.c0()+"\n"}r=s.a
return r.charCodeAt(0)==0?r:r}}
L.hO.prototype={
h:function(a){return this.b.b+": "+this.bI(0)}}
O.bi.prototype={
bJ:function(){this.a=[]
this.c=this.b=null},
aX:function(a,b){this.b=null
this.c=a},
dS:function(a){return!0},
cQ:function(a,b){var t=this.c
if(t!=null)t.$2(a,b)},
gk:function(a){return this.a.length},
gK:function(a){var t=this.a
return new J.a_(t,t.length)},
A:function(a,b){var t=this.a
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
n:function(a,b){var t,s
if(this.dS([b])){t=this.a
s=t.length
t.push(b)
this.cQ(s,[b])}},
$if:1}
O.cb.prototype={
gk:function(a){return this.a.length},
gt:function(){var t=this.b
return t==null?this.b=D.D():t},
am:function(){var t=this.b
if(t!=null)t.D(null)},
gag:function(a){var t=this.a
if(t.length>0)return C.a.gaR(t)
else return V.ds()},
cp:function(a){var t=this.a
if(a==null)t.push(V.ds())
else t.push(a)
this.am()},
bz:function(){var t=this.a
if(t.length>0){t.pop()
this.am()}}}
E.fu.prototype={}
E.bj.prototype={
sbF:function(a,b){var t,s,r=this,q=r.c
if(q!=b){r.d=r.c=b
r.e=null
if(q!=null)q.gt().O(0,r.gcl())
t=r.c
if(t!=null)t.gt().n(0,r.gcl())
s=new D.w("shape",q,r.c)
s.b=!0
r.ah(s)}},
saE:function(a){var t,s,r=this
if(!J.H(r.r,a)){t=r.r
if(t!=null)t.gt().O(0,r.gcj())
if(a!=null)a.gt().n(0,r.gcj())
r.r=a
s=new D.w("mover",t,a)
s.b=!0
r.ah(s)}},
ax:function(a,b){var t,s,r=this,q=r.r,p=q!=null?q.ay(0,b,r):null
if(!J.H(p,r.x)){t=r.x
r.x=p
s=new D.w("matrix",t,p)
s.b=!0
r.ah(s)}for(q=r.y.a,q=new J.a_(q,q.length);q.q();)q.d.ax(0,b)},
aw:function(a){var t,s=this,r=a.dx,q=s.x,p=r.a
if(q==null)p.push(r.gag(r))
else p.push(q.u(0,r.gag(r)))
r.am()
a.cq(s.f)
r=a.dy
t=(r&&C.a).gaR(r)
if(t!=null&&s.d!=null)t.f_(a,s)
for(r=s.y.a,r=new J.a_(r,r.length);r.q();)r.d.aw(a)
a.co()
a.dx.bz()},
ah:function(a){var t=this.z
if(t!=null)t.D(a)},
Y:function(){return this.ah(null)},
cm:function(a){this.e=null
this.ah(a)},
eP:function(){return this.cm(null)},
ck:function(a){this.ah(a)},
eO:function(){return this.ck(null)},
ci:function(a){this.ah(a)},
eL:function(){return this.ci(null)},
eK:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.gcg(),r=0;r<b.length;b.length===t||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bX()
p.d=0
q.z=p}o=p.a;(o==null?p.a=[]:o).push(s)}}this.Y()},
eN:function(a,b){var t,s
for(t=b.gK(b),s=this.gcg();t.q();)t.gB(t).gt().O(0,s)
this.Y()},
h:function(a){var t=this.a,s=t.length
if(s<=0)return"Unnamed entity"
return t}}
E.bg.prototype={
h:function(a){return this.b}}
E.bt.prototype={
h:function(a){return this.b}}
E.ip.prototype={}
E.hj.prototype={
cM:function(a,b){var t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a3(Date.now(),!1)
s.y=0
s.cx=s.ch=s.z=null
t=new O.cb()
t.a=[]
t.gt().n(0,new E.hk(s))
s.cy=t
t=new O.cb()
t.a=[]
t.gt().n(0,new E.hl(s))
s.db=t
t=new O.cb()
t.a=[]
t.gt().n(0,new E.hm(s))
s.dx=t
t=[]
s.dy=t
t.push(null)
s.fr=new H.O(u.G)},
cq:function(a){var t=this.dy
t.push(a==null?(t&&C.a).gaR(t):a)},
co:function(){var t=this.dy
if(t.length>1)t.pop()}}
E.hk.prototype={
$1:function(a){var t=this.a
t.ch=t.z=null}}
E.hl.prototype={
$1:function(a){var t=this.a
t.cx=t.ch=t.z=null}}
E.hm.prototype={
$1:function(a){var t=this.a
t.cx=t.ch=null}}
E.e4.prototype={
bM:function(a){this.cr()},
bL:function(){return this.bM(null)},
geE:function(){var t,s=this,r=Date.now(),q=C.c.a8(P.jL(r-s.cy.a).a,1000)/1000
if(q<=0)return 0
t=s.db
s.db=0
s.cy=new P.a3(r,!1)
return t/q},
bX:function(){var t,s,r=this,q=window.devicePixelRatio,p=r.b.clientWidth
if(typeof p!=="number")return p.u()
if(typeof q!=="number")return H.n(q)
t=C.d.bs(p*q)
p=r.b.clientHeight
if(typeof p!=="number")return p.u()
s=C.d.bs(p*q)
p=r.b
if(p.width!==t||p.height!==s){p.width=t
r.b.height=s
P.kc(C.i,r.gf1())}},
cr:function(){var t,s
if(!this.cx){this.cx=!0
t=window
C.w.d9(t)
s=W.kE(new E.hI(this),u.H)
s.toString
C.w.e3(t,s)}},
eZ:function(){var t,s,r,q,p,o=this,n=null
try{++o.db
o.cx=!1
o.bX()
if(n==null)n=o.d
if(n!=null){r=o.e;++r.e
r.r=r.x
q=Date.now()
r.x=new P.a3(q,!1)
r.y=P.jL(q-r.r.a).a*0.000001
q=r.cy
C.a.sk(q.a,0)
q.am()
q=r.db
C.a.sk(q.a,0)
q.am()
q=r.dx
C.a.sk(q.a,0)
q.am()
q=r.dy
q.toString
C.a.sk(q,0)
r.dy.push(null)
n.aw(o.e)}r=o.Q
if(r!=null)r.D(null)}catch(p){t=H.ap(p)
s=H.jt(p)
P.jy("Error: "+H.d(t))
P.jy("Stack: "+H.d(s))
throw H.c(t)}}}
E.hI.prototype={
$1:function(a){var t=this.a
if(t.cx){t.cx=!1
t.eZ()}}}
Z.ei.prototype={}
Z.fv.prototype={
bl:function(a){var t,s,r,q=this
try{s=a.a
s.enableVertexAttribArray(q.e)
s.vertexAttribPointer(q.e,q.b,5126,!1,q.d,q.c)}catch(r){t=H.ap(r)
s=P.J('Failed to bind buffer attribute "'+q.a.h(0)+'": '+H.d(t))
throw H.c(s)}},
h:function(a){var t=this
return"["+t.a.h(0)+", Size: "+t.b+", Offset: "+t.c+", Stride: "+t.d+", Attr: "+H.d(t.e)+"]"}}
Z.ih.prototype={}
Z.cZ.prototype={
aP:function(a){var t,s,r,q
for(t=this.c,s=t.length,r=0;r<s;++r){q=t[r]
if((q.a.a&a.a)!==0)return q}return null},
bl:function(a){var t,s=this.a
a.a.bindBuffer(s.a,s.b)
for(s=this.c,t=s.length-1;t>=0;--t)s[t].bl(a)},
fc:function(a){var t,s,r
for(t=this.c,s=t.length-1,r=a.a;s>=0;--s)r.disableVertexAttribArray(t[s].e)
r.bindBuffer(this.a.a,null)},
aw:function(a){var t,s,r,q,p,o=this.b.length
for(t=a.a,s=0;s<o;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
t.bindBuffer(p,r.b)
t.drawElements(q.a,q.b,5123,0)
t.bindBuffer(p,null)}},
h:function(a){var t,s,r,q,p=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)p.push(t[r].h(0))
q=[]
for(t=this.c,s=t.length,r=0;r<s;++r)q.push(J.V(t[r]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(q,", ")}}
Z.c_.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dM(this.c))+"'")+"]"}}
Z.b9.prototype={
gbG:function(a){var t=this.a,s=(t&$.aI().a)!==0?3:0
if((t&$.aH().a)!==0)s+=3
if((t&$.aG().a)!==0)s+=3
if((t&$.bM().a)!==0)s+=2
if((t&$.aJ().a)!==0)s+=3
if((t&$.cS().a)!==0)s+=3
if((t&$.cT().a)!==0)s+=4
if((t&$.bN().a)!==0)++s
return(t&$.bL().a)!==0?s+4:s},
el:function(a){var t,s=$.aI(),r=this.a
if((r&s.a)!==0){if(0===a)return s
t=1}else t=0
s=$.aH()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.aG()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bM()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.aJ()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.cS()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.cT()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bN()
if((r&s.a)!==0){if(t===a)return s;++t}s=$.bL()
if((r&s.a)!==0)if(t===a)return s
return $.l4()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b9))return!1
return this.a===b.a},
h:function(a){var t=[],s=this.a
if((s&$.aI().a)!==0)t.push("Pos")
if((s&$.aH().a)!==0)t.push("Norm")
if((s&$.aG().a)!==0)t.push("Binm")
if((s&$.bM().a)!==0)t.push("Txt2D")
if((s&$.aJ().a)!==0)t.push("TxtCube")
if((s&$.cS().a)!==0)t.push("Clr3")
if((s&$.cT().a)!==0)t.push("Clr4")
if((s&$.bN().a)!==0)t.push("Weight")
if((s&$.bL().a)!==0)t.push("Bending")
if(t.length<=0)return"None"
return C.a.l(t,"|")}}
D.fw.prototype={}
D.bX.prototype={
n:function(a,b){var t=this.a;(t==null?this.a=[]:t).push(b)},
O:function(a,b){var t,s=this,r=s.a
r=r==null?null:C.a.C(r,b)
if(r===!0){r=s.a
t=(r&&C.a).O(r,b)||!1}else t=!1
r=s.b
r=r==null?null:C.a.C(r,b)
if(r===!0){r=s.b
t=(r&&C.a).O(r,b)||t}return t},
D:function(a){var t,s,r,q=this,p={}
p.a=a
t=q.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=q.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.N()
a.b=!0
p.a=a
r=a}else r=a
if(q.d>0){if(q.c==null)q.c=r
return!0}if(!s)C.a.I(P.j7(t,!0),new D.fM(p))
t=q.b
if(t!=null){q.b=[]
C.a.I(t,new D.fN(p))}return!0},
eA:function(){return this.D(null)},
aj:function(a){var t,s=this,r=s.d
if(r>0){--r
s.d=r
if(r<=0)r=s.c!=null
else r=!1
if(r){t=s.c
s.c=null
s.D(t)}}}}
D.fM.prototype={
$1:function(a){var t=this.a.a
t.toString
a.$1(t)}}
D.fN.prototype={
$1:function(a){var t=this.a.a
t.toString
a.$1(t)}}
D.N.prototype={}
D.bm.prototype={}
D.bn.prototype={}
D.w.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.d_.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d_))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.dk.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dk))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.d(this.a)}}
X.h_.prototype={
eU:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
eQ:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.c8.prototype={}
X.h3.prototype={
az:function(a,b){var t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.u()
t=b.b
s=p.ch
if(typeof t!=="number")return t.u()
r=new V.aj(n.a+m*l,n.b+t*s)
s=p.a.gau()
q=new X.bp(a,V.b2(),p.x,s,r)
q.b=!0
p.z=new P.a3(o,!1)
p.x=r
return q},
by:function(a,b){this.r=a.a
return!1},
aG:function(a,b){var t=this.r,s=a.a
if(typeof s!=="number")return s.cE()
if(typeof t!=="number")return t.cA()
this.r=(t&~s)>>>0
return!1},
aF:function(a,b){var t=this.d
if(t==null)return!1
t.D(this.az(a,b))
return!0},
eV:function(a){var t,s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
t=n.a.gau()
s=n.x
Date.now()
r=a.a
q=n.cx
if(typeof r!=="number")return r.u()
p=a.b
o=n.cy
if(typeof p!=="number")return p.u()
s=new X.bq(new V.X(r*q,p*o),t,s)
s.b=!0
m.D(s)
return!0},
dH:function(a,b,c){var t,s,r,q=this
if(q.f==null)return
t=Date.now()
s=q.f
r=new X.c8(c,q.a.gau(),b)
r.b=!0
s.D(r)
q.y=new P.a3(t,!1)
q.x=V.b2()}}
X.a5.prototype={
p:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof X.a5))return!1
if(t.a!==b.a)return!1
if(t.b!=b.b)return!1
if(t.c!=b.c)return!1
return!0},
h:function(a){var t=this.a?"Ctrl+":""
t+=this.b?"Alt+":""
return t+(this.c?"Shift+":"")}}
X.bp.prototype={}
X.ha.prototype={
b7:function(a,b,c){var t=this,s=new P.a3(Date.now(),!1),r=t.a.gau(),q=new X.bp(a,t.r,t.x,r,b)
q.b=!0
if(c){t.y=s
t.r=b}t.z=s
t.x=b
return q},
by:function(a,b){var t
this.f=a.a
t=this.b
if(t==null)return!1
t.D(this.b7(a,b,!0))
return!0},
aG:function(a,b){var t=this,s=t.f,r=a.a
if(typeof r!=="number")return r.cE()
if(typeof s!=="number")return s.cA()
t.f=(s&~r)>>>0
s=t.c
if(s==null)return!1
s.D(t.b7(a,b,!0))
return!0},
aF:function(a,b){var t=this.d
if(t==null)return!1
t.D(this.b7(a,b,!1))
return!0},
eW:function(a,b){var t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
t=o.a.gau()
Date.now()
s=a.a
r=o.Q
if(typeof s!=="number")return s.u()
q=a.b
p=o.ch
if(typeof q!=="number")return q.u()
t=new X.bq(new V.X(s*r,q*p),t,b)
t.b=!0
n.D(t)
return!0},
gcb:function(){var t=this.b
return t==null?this.b=D.D():t},
gcz:function(){var t=this.c
return t==null?this.c=D.D():t},
gcf:function(){var t=this.d
return t==null?this.d=D.D():t}}
X.bq.prototype={}
X.dL.prototype={}
X.cl.prototype={}
X.hM.prototype={
az:function(a,b){var t=this,s=new P.a3(Date.now(),!1),r=a.length>0?a[0]:V.b2(),q=t.a.gau(),p=new X.cl(t.f,t.r,q,r)
p.b=!0
if(b){t.x=s
t.f=r}t.y=s
t.r=r
return p},
eT:function(a){var t=this.b
if(t==null)return!1
t.D(this.az(a,!0))
return!0},
eR:function(a){var t=this.c
if(t==null)return!1
t.D(this.az(a,!0))
return!0},
eS:function(a){var t=this.d
if(t==null)return!1
t.D(this.az(a,!1))
return!0}}
X.ef.prototype={
gau:function(){var t=this.a,s=C.f.gc9(t).c
s.toString
t=C.f.gc9(t).d
t.toString
return V.k5(0,0,s,t)},
bU:function(a){var t=a.keyCode,s=a.ctrlKey||a.metaKey
return new X.dk(t,new X.a5(s,a.altKey,a.shiftKey))},
ar:function(a){var t=this.b,s=a.ctrlKey||a.metaKey
t.c=new X.a5(s,a.altKey,a.shiftKey)},
bj:function(a){var t=this.b,s=a.ctrlKey||a.metaKey
t.c=new X.a5(s,a.altKey,a.shiftKey)},
ad:function(a){var t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.V()
if(typeof p!=="number")return H.n(p)
t=s.top
if(typeof q!=="number")return q.V()
if(typeof t!=="number")return H.n(t)
return new V.aj(r-p,q-t)},
aA:function(a){return new V.X(a.movementX,a.movementY)},
bh:function(a){var t,s,r,q,p,o,n,m,l=this.a.getBoundingClientRect(),k=[]
for(t=a.touches,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
p=C.d.a5(q.pageX)
C.d.a5(q.pageY)
o=l.left
if(typeof o!=="number")return H.n(o)
C.d.a5(q.pageX)
n=C.d.a5(q.pageY)
m=l.top
if(typeof m!=="number")return H.n(m)
k.push(new V.aj(p-o,n-m))}return k},
ab:function(a){var t=a.buttons,s=a.ctrlKey||a.metaKey
return new X.d_(t,new X.a5(s,a.altKey,a.shiftKey))},
b8:function(a){var t,s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.V()
if(typeof o!=="number")return H.n(o)
t=q-o
if(t<0)return!1
q=r.top
if(typeof p!=="number")return p.V()
if(typeof q!=="number")return H.n(q)
s=p-q
if(s<0)return!1
q=r.width
if(typeof q!=="number")return H.n(q)
if(t<q){q=r.height
if(typeof q!=="number")return H.n(q)
q=s<q}else q=!1
return q},
dC:function(a){this.f=!0},
dm:function(a){this.f=!1},
du:function(a){if(this.f&&this.b8(a))a.preventDefault()},
dG:function(a){var t
if(!this.f)return
t=this.bU(a)
this.b.eU(t)},
dE:function(a){var t
if(!this.f)return
t=this.bU(a)
this.b.eQ(t)},
dJ:function(a){var t,s,r,q=this,p=q.a
p.focus()
q.f=!0
q.ar(a)
if(q.x){t=q.ab(a)
s=q.aA(a)
if(q.d.by(t,s))a.preventDefault()
return}if(q.r){q.y=a
p.requestPointerLock()
return}t=q.ab(a)
r=q.ad(a)
if(q.c.by(t,r))a.preventDefault()},
dN:function(a){var t,s,r,q=this
q.ar(a)
t=q.ab(a)
if(q.x){s=q.aA(a)
if(q.d.aG(t,s))a.preventDefault()
return}if(q.r)return
r=q.ad(a)
if(q.c.aG(t,r))a.preventDefault()},
dA:function(a){var t,s,r,q=this
if(!q.b8(a)){q.ar(a)
t=q.ab(a)
if(q.x){s=q.aA(a)
if(q.d.aG(t,s))a.preventDefault()
return}if(q.r)return
r=q.ad(a)
if(q.c.aG(t,r))a.preventDefault()}},
dL:function(a){var t,s,r,q=this
q.ar(a)
t=q.ab(a)
if(q.x){s=q.aA(a)
if(q.d.aF(t,s))a.preventDefault()
return}if(q.r)return
r=q.ad(a)
if(q.c.aF(t,r))a.preventDefault()},
dw:function(a){var t,s,r,q=this
if(!q.b8(a)){q.ar(a)
t=q.ab(a)
if(q.x){s=q.aA(a)
if(q.d.aF(t,s))a.preventDefault()
return}if(q.r)return
r=q.ad(a)
if(q.c.aF(t,r))a.preventDefault()}},
dP:function(a){var t,s,r=this
r.ar(a)
t=new V.X((a&&C.v).gex(a),C.v.gey(a)).u(0,r.Q)
if(r.x){if(r.d.eV(t))a.preventDefault()
return}if(r.r)return
s=r.ad(a)
if(r.c.eW(t,s))a.preventDefault()},
dR:function(a){var t,s,r=this,q=document.pointerLockElement===r.a
if(q!==r.x){r.x=q
t=r.ab(r.y)
s=r.ad(r.y)
r.d.dH(t,s,q)}},
e_:function(a){var t,s=this
s.a.focus()
s.f=!0
s.bj(a)
t=s.bh(a)
if(s.e.eT(t))a.preventDefault()},
dW:function(a){var t
this.bj(a)
t=this.bh(a)
if(this.e.eR(t))a.preventDefault()},
dY:function(a){var t
this.bj(a)
t=this.bh(a)
if(this.e.eS(t))a.preventDefault()}}
V.aP.prototype={
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aP))return!1
t=b.a
$.y().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.G(t.a,3,0)+", "+V.G(t.b,3,0)+", "+V.G(t.c,3,0)+", "+V.G(t.d,3,0)+"]"}}
V.fK.prototype={}
V.dq.prototype={
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dq))return!1
t=b.a
$.y().toString
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
h:function(a){var t,s,r,q,p=this,o=V.bK([p.a,p.d,p.r],3,0),n=V.bK([p.b,p.e,p.x],3,0),m=V.bK([p.c,p.f,p.y],3,0),l=o.length
if(0>=l)return H.e(o,0)
t="["+o[0]+", "
s=n.length
if(0>=s)return H.e(n,0)
t=t+n[0]+", "
r=m.length
if(0>=r)return H.e(m,0)
t=t+m[0]+",\n"
if(1>=l)return H.e(o,1)
q=" "+o[1]+", "
if(1>=s)return H.e(n,1)
q=q+n[1]+", "
if(1>=r)return H.e(m,1)
q=t+(q+m[1]+",\n")
if(2>=l)return H.e(o,2)
l=" "+o[2]+", "
if(2>=s)return H.e(n,2)
l=l+n[2]+", "
if(2>=r)return H.e(m,2)
return q+(l+m[2]+"]")}}
V.dr.prototype={
bA:function(a,b){var t=this
return[t.a,t.e,t.y,t.cx,t.b,t.f,t.z,t.cy,t.c,t.r,t.Q,t.db,t.d,t.x,t.ch,t.dx]},
u:function(b3,b4){var t=this,s=t.a,r=b4.a,q=t.b,p=b4.e,o=t.c,n=b4.y,m=t.d,l=b4.cx,k=b4.b,j=b4.f,i=b4.z,h=b4.cy,g=b4.c,f=b4.r,e=b4.Q,d=b4.db,c=b4.d,b=b4.x,a=b4.ch,a0=b4.dx,a1=t.e,a2=t.f,a3=t.r,a4=t.x,a5=t.y,a6=t.z,a7=t.Q,a8=t.ch,a9=t.cx,b0=t.cy,b1=t.db,b2=t.dx
return V.av(s*r+q*p+o*n+m*l,s*k+q*j+o*i+m*h,s*g+q*f+o*e+m*d,s*c+q*b+o*a+m*a0,a1*r+a2*p+a3*n+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a1*c+a2*b+a3*a+a4*a0,a5*r+a6*p+a7*n+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d,a5*c+a6*b+a7*a+a8*a0,a9*r+b0*p+b1*n+b2*l,a9*k+b0*j+b1*i+b2*h,a9*g+b0*f+b1*e+b2*d,a9*c+b0*b+b1*a+b2*a0)},
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dr))return!1
t=b.a
$.y().toString
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
h:function(a){return this.F()},
w:function(a){var t,s,r,q,p,o=this,n=V.bK([o.a,o.e,o.y,o.cx],3,0),m=V.bK([o.b,o.f,o.z,o.cy],3,0),l=V.bK([o.c,o.r,o.Q,o.db],3,0),k=V.bK([o.d,o.x,o.ch,o.dx],3,0),j=n.length
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
F:function(){return this.w("")}}
V.aj.prototype={
S:function(a){return new V.X(a.a-this.a,a.b-this.b)},
p:function(a,b){var t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
t=b.a
$.y().toString
if(!(Math.abs(t-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.b3.prototype={
V:function(a,b){return new V.b3(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b3))return!1
t=b.a
$.y().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.dK.prototype={
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dK))return!1
t=b.a
$.y().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.G(t.a,3,0)+", "+V.G(t.b,3,0)+", "+V.G(t.c,3,0)+", "+V.G(t.d,3,0)+"]"}}
V.dO.prototype={
ga_:function(){var t=this.c,s=this.d
return t>s?s:t},
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dO))return!1
t=b.a
$.y().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
if(!(Math.abs(b.d-s.d)<1e-9))return!1
return!0},
h:function(a){var t=this
return"["+V.G(t.a,3,0)+", "+V.G(t.b,3,0)+", "+V.G(t.c,3,0)+", "+V.G(t.d,3,0)+"]"}}
V.X.prototype={
bt:function(a){return Math.sqrt(this.T(this))},
T:function(a){var t,s,r=this.a,q=a.a
if(typeof r!=="number")return r.u()
if(typeof q!=="number")return H.n(q)
t=this.b
s=a.b
if(typeof t!=="number")return t.u()
if(typeof s!=="number")return H.n(s)
return r*q+t*s},
u:function(a,b){var t,s=this.a
if(typeof s!=="number")return s.u()
if(typeof b!=="number")return H.n(b)
t=this.b
if(typeof t!=="number")return t.u()
return new V.X(s*b,t*b)},
P:function(a,b){var t,s
$.y().toString
if(Math.abs(b-0)<1e-9){t=$.kg
return t==null?$.kg=new V.X(0,0):t}t=this.a
if(typeof t!=="number")return t.P()
s=this.b
if(typeof s!=="number")return s.P()
return new V.X(t/b,s/b)},
p:function(a,b){var t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
t=b.a
s=this.a
$.y().toString
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.n(s)
if(!(Math.abs(t-s)<1e-9))return!1
t=b.b
s=this.b
if(typeof t!=="number")return t.V()
if(typeof s!=="number")return H.n(s)
if(!(Math.abs(t-s)<1e-9))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.I.prototype={
bt:function(a){return Math.sqrt(this.T(this))},
T:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bu:function(a,b){return new V.I(V.jv(this.a,a.a,b),V.jv(this.b,a.b,b),V.jv(this.c,a.c,b))},
N:function(){var t=this,s=Math.sqrt(t.T(t))
if(s===1)return t
return t.P(0,s)},
aD:function(a){var t=this.b,s=a.c,r=this.c,q=a.b,p=a.a,o=this.a
return new V.I(t*s-r*q,r*p-o*s,o*q-t*p)},
v:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
J:function(a){return new V.I(-this.a,-this.b,-this.c)},
P:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.eg()
return new V.I(this.a/b,this.b/b,this.c/b)},
ce:function(){$.y().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.I))return!1
t=b.a
$.y().toString
if(!(Math.abs(t-s.a)<1e-9))return!1
if(!(Math.abs(b.b-s.b)<1e-9))return!1
if(!(Math.abs(b.c-s.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.fx.prototype={
b1:function(a){var t=V.np(a,this.c,this.b)
return t},
gt:function(){var t=this.y
return t==null?this.y=D.D():t},
H:function(a){var t=this.y
if(t!=null)t.D(a)},
sbC:function(a,b){},
sbv:function(a){var t,s=this,r=s.b
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.b=a
if(a<s.c)s.d=s.c=a
else{t=s.d
if(a<t)s.d=s.b1(t)}r=new D.w("maximumLocation",r,s.b)
r.b=!0
s.H(r)}},
sbx:function(a){var t,s=this,r=s.c
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.c=a
if(s.b<a)s.d=s.b=a
else{t=s.d
if(a>t)s.d=s.b1(t)}r=new D.w("minimumLocation",r,s.c)
r.b=!0
s.H(r)}},
sZ:function(a,b){var t,s=this
b=s.b1(b)
t=s.d
$.y().toString
if(!(Math.abs(t-b)<1e-9)){s.d=b
t=new D.w("location",t,b)
t.b=!0
s.H(t)}},
sbw:function(a){var t,s,r=this,q=r.e
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.e=a
t=r.f
s=-a
if(t<s)t=s
else if(t>a)t=a
r.f=t
q=new D.w("maximumVelocity",q,a)
q.b=!0
r.H(q)}},
sL:function(a){var t=this,s=t.e,r=-s
if(a<r)a=r
else if(a>s)a=s
s=t.f
$.y().toString
if(!(Math.abs(s-a)<1e-9)){t.f=a
s=new D.w("velocity",s,a)
s.b=!0
t.H(s)}},
sbr:function(a){var t
if(a<0)a=0
else if(a>1)a=1
t=this.x
$.y().toString
if(!(Math.abs(t-a)<1e-9)){this.x=a
t=new D.w("dampening",t,a)
t.b=!0
this.H(t)}},
ax:function(a,b){var t,s,r,q=this,p=q.f
$.y().toString
if(!(Math.abs(p-0)<1e-9)||!(Math.abs(q.r-0)<1e-9)){t=p+q.r*b
p=q.e
s=-p
if(t<s)t=s
else if(t>p)t=p
q.sZ(0,q.d+t*b)
p=q.x
$.y().toString
if(!(Math.abs(p-0)<1e-9)){r=t*Math.pow(1-p,b)
if(t<0){if(r<t)r=t
else if(r>0)r=0}else if(r<0)r=0
else if(r>t)r=t
t=r}q.sL(t)}}}
U.bQ.prototype={
gt:function(){var t=this.b
return t==null?this.b=D.D():t},
ay:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
return J.H(this.a,b.a)},
h:function(a){return"Constant: "+this.a.w("          ")}}
U.bk.prototype={
gt:function(){var t=this.e
return t==null?this.e=D.D():t},
H:function(a){var t=this.e
if(t!=null)t.D(a)},
W:function(){return this.H(null)},
dk:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.gaq(),r=0;r<b.length;b.length===t||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=[]:o).push(s)}}t=new D.bm()
t.b=!0
this.H(t)},
dU:function(a,b){var t,s
for(t=b.gK(b),s=this.gaq();t.q();)t.gB(t).gt().O(0,s)
t=new D.bn()
t.b=!0
this.H(t)},
ay:function(a,b,c){var t,s,r=this,q=r.r,p=b.e
if(typeof q!=="number")return q.a0()
if(q<p){r.r=p
q=r.e
if(q!=null)++q.d
for(q=r.a,q=new J.a_(q,q.length),t=null;q.q();){p=q.d
if(p!=null){s=p.ay(0,b,c)
if(s!=null)t=t==null?s:s.u(0,t)}}r.f=t==null?V.ds():t
q=r.e
if(q!=null)q.aj(0)}return r.f},
p:function(a,b){var t,s,r,q
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bk))return!1
t=this.a.length
for(s=0;s<t;++s){r=this.a
if(s>=r.length)return H.e(r,s)
r=r[s]
q=b.a
if(s>=q.length)return H.e(q,s)
if(!J.H(r,q[s]))return!1}return!0},
h:function(a){return"Group"},
$iQ:1}
U.Q.prototype={}
U.cm.prototype={
gt:function(){var t=this.cy
return t==null?this.cy=D.D():t},
H:function(a){var t=this.cy
if(t!=null)t.D(a)},
W:function(){return this.H(null)},
aC:function(a){var t=this
if(t.a!=null)return!1
t.a=a
a.c.gcb().n(0,t.gb9())
t.a.c.gcf().n(0,t.gbb())
t.a.c.gcz().n(0,t.gbd())
return!0},
ba:function(a){var t=this
if(!J.H(t.c,t.a.b.c))return
t.x=t.y=!0
t.z=t.b.d},
bc:function(a){var t,s,r,q,p,o,n,m=this
u.c.a(a)
if(!m.y)return
if(m.x){t=a.y.S(a.d)
t=t.T(t)
s=m.r
if(typeof s!=="number")return H.n(s)
if(t<s)return
m.x=!1}if(m.d){t=a.c
t=a.y.S(a.d).u(0,2).P(0,t.ga_())
m.Q=t
s=m.b
t=t.a
if(typeof t!=="number")return t.u()
r=m.e
if(typeof r!=="number")return H.n(r)
s.sL(t*10*r)}else{t=a.c
s=a.y
r=a.d
q=s.S(r).u(0,2).P(0,t.ga_())
s=m.b
p=q.a
if(typeof p!=="number")return p.J()
o=m.e
if(typeof o!=="number")return H.n(o)
n=m.z
if(typeof n!=="number")return H.n(n)
s.sZ(0,-p*o+n)
m.b.sL(0)
m.Q=a.z.S(r).u(0,2).P(0,t.ga_())}m.W()},
be:function(a){var t,s,r,q=this
if(!q.y)return
q.y=!1
if(q.x)return
t=q.Q
if(t.T(t)>0.0001){t=q.b
s=q.Q.a
if(typeof s!=="number")return s.u()
r=q.e
if(typeof r!=="number")return H.n(r)
t.sL(s*10*r)
q.W()}},
ay:function(a,b,c){var t,s,r,q=this,p=q.ch,o=b.e
if(typeof p!=="number")return p.a0()
if(p<o){q.ch=o
t=b.y
q.b.ax(0,t)
p=q.b.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.av(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iQ:1}
U.cn.prototype={
gt:function(){var t=this.fx
return t==null?this.fx=D.D():t},
H:function(a){var t=this.fx
if(t!=null)t.D(a)},
W:function(){return this.H(null)},
aC:function(a){var t,s,r=this
if(r.a!=null)return!1
r.a=a
a.c.gcb().n(0,r.gb9())
r.a.c.gcf().n(0,r.gbb())
r.a.c.gcz().n(0,r.gbd())
t=r.a.d
s=t.f
t=s==null?t.f=D.D():s
t.n(0,r.gdc())
t=r.a.d
s=t.d
t=s==null?t.d=D.D():s
t.n(0,r.gde())
t=r.a.e
s=t.b
t=s==null?t.b=D.D():s
t.n(0,r.gef())
t=r.a.e
s=t.d
t=s==null?t.d=D.D():s
t.n(0,r.ged())
t=r.a.e
s=t.c
t=s==null?t.c=D.D():s
t.n(0,r.geb())
return!0},
a7:function(a){var t=a.a,s=a.b
if(this.f){if(typeof t!=="number")return t.J()
t=-t}if(this.r){if(typeof s!=="number")return s.J()
s=-s}return new V.X(t,s)},
ba:function(a){var t=this
u.c.a(a)
if(!J.H(t.d,a.x.b))return
t.ch=t.cx=!0
t.cy=t.c.d
t.db=t.b.d},
bc:function(a){var t,s,r,q,p,o,n,m=this
u.c.a(a)
if(!m.cx)return
if(m.ch){t=a.y.S(a.d)
t=t.T(t)
s=m.Q
if(typeof s!=="number")return H.n(s)
if(t<s)return
m.ch=!1}if(m.e){t=a.c
t=m.a7(a.y.S(a.d).u(0,2).P(0,t.ga_()))
m.dx=t
s=m.c
t=t.a
if(typeof t!=="number")return t.J()
r=m.y
if(typeof r!=="number")return H.n(r)
s.sL(-t*10*r)
r=m.b
t=m.dx.b
if(typeof t!=="number")return t.J()
s=m.x
if(typeof s!=="number")return H.n(s)
r.sL(-t*10*s)}else{t=a.c
s=a.y
r=a.d
q=m.a7(s.S(r).u(0,2).P(0,t.ga_()))
s=m.c
p=q.a
if(typeof p!=="number")return p.J()
o=m.y
if(typeof o!=="number")return H.n(o)
n=m.cy
if(typeof n!=="number")return H.n(n)
s.sZ(0,-p*o+n)
n=m.b
o=q.b
if(typeof o!=="number")return o.J()
p=m.x
if(typeof p!=="number")return H.n(p)
s=m.db
if(typeof s!=="number")return H.n(s)
n.sZ(0,-o*p+s)
m.b.sL(0)
m.c.sL(0)
m.dx=m.a7(a.z.S(r).u(0,2).P(0,t.ga_()))}m.W()},
be:function(a){var t,s,r,q=this
if(!q.cx)return
q.cx=!1
if(q.ch)return
t=q.dx
if(t.T(t)>0.0001){t=q.c
s=q.dx.a
if(typeof s!=="number")return s.J()
r=q.y
if(typeof r!=="number")return H.n(r)
t.sL(-s*10*r)
r=q.b
s=q.dx.b
if(typeof s!=="number")return s.J()
t=q.x
if(typeof t!=="number")return H.n(t)
r.sL(-s*10*t)
q.W()}},
dd:function(a){var t=this
if(u.J.a(a).x){t.ch=!0
t.cy=t.c.d
t.db=t.b.d}},
df:function(a){var t,s,r,q,p,o,n,m=this
u.c.a(a)
if(!J.H(m.d,a.x.b))return
t=a.c
s=a.y
r=a.d
q=m.a7(s.S(r).u(0,2).P(0,t.ga_()))
s=m.c
p=q.a
if(typeof p!=="number")return p.J()
o=m.y
if(typeof o!=="number")return H.n(o)
n=m.cy
if(typeof n!=="number")return H.n(n)
s.sZ(0,-p*o+n)
n=m.b
o=q.b
if(typeof o!=="number")return o.J()
p=m.x
if(typeof p!=="number")return H.n(p)
s=m.db
if(typeof s!=="number")return H.n(s)
n.sZ(0,-o*p+s)
m.b.sL(0)
m.c.sL(0)
m.dx=m.a7(a.z.S(r).u(0,2).P(0,t.ga_()))
m.W()},
eg:function(a){var t=this
t.ch=t.cx=!0
t.cy=t.c.d
t.db=t.b.d},
ee:function(a){var t,s,r,q,p,o,n,m=this
u.m.a(a)
if(!m.cx)return
if(m.ch){t=a.y.S(a.d)
t=t.T(t)
s=m.Q
if(typeof s!=="number")return H.n(s)
if(t<s)return
m.ch=!1}if(m.e){t=a.c
t=m.a7(a.y.S(a.d).u(0,2).P(0,t.ga_()))
m.dx=t
s=m.c
t=t.a
if(typeof t!=="number")return t.J()
r=m.y
if(typeof r!=="number")return H.n(r)
s.sL(-t*10*r)
r=m.b
t=m.dx.b
if(typeof t!=="number")return t.J()
s=m.x
if(typeof s!=="number")return H.n(s)
r.sL(-t*10*s)}else{t=a.c
s=a.y
r=a.d
q=m.a7(s.S(r).u(0,2).P(0,t.ga_()))
s=m.c
p=q.a
if(typeof p!=="number")return p.J()
o=m.y
if(typeof o!=="number")return H.n(o)
n=m.cy
if(typeof n!=="number")return H.n(n)
s.sZ(0,-p*o+n)
n=m.b
o=q.b
if(typeof o!=="number")return o.J()
p=m.x
if(typeof p!=="number")return H.n(p)
s=m.db
if(typeof s!=="number")return H.n(s)
n.sZ(0,-o*p+s)
m.b.sL(0)
m.c.sL(0)
m.dx=m.a7(a.z.S(r).u(0,2).P(0,t.ga_()))}m.W()},
ec:function(a){var t,s,r,q=this
if(!q.cx)return
q.cx=!1
if(q.ch)return
t=q.dx
if(t.T(t)>0.0001){t=q.c
s=q.dx.a
if(typeof s!=="number")return s.J()
r=q.y
if(typeof r!=="number")return H.n(r)
t.sL(-s*10*r)
r=q.b
s=q.dx.b
if(typeof s!=="number")return s.J()
t=q.x
if(typeof t!=="number")return H.n(t)
r.sL(-s*10*t)
q.W()}},
ay:function(a,b,c){var t,s,r,q=this,p=q.dy,o=b.e
if(typeof p!=="number")return p.a0()
if(p<o){q.dy=o
t=b.y
q.c.ax(0,t)
q.b.ax(0,t)
p=q.b.d
s=Math.cos(p)
r=Math.sin(p)
p=V.av(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)
o=q.c.d
s=Math.cos(o)
r=Math.sin(o)
q.fr=p.u(0,V.av(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))}return q.fr},
$iQ:1}
U.co.prototype={
gt:function(){var t=this.r
return t==null?this.r=D.D():t},
H:function(a){var t=this.r
if(t!=null)t.D(a)},
aC:function(a){var t,s,r,q=this
if(q.a!=null)return!1
q.a=a
t=a.c
s=t.e
t=s==null?t.e=D.D():s
s=q.gdh()
t.n(0,s)
t=q.a.d
r=t.e;(r==null?t.e=D.D():r).n(0,s)
return!0},
di:function(a){var t,s,r,q,p=this
if(!J.H(p.b,p.a.b.c))return
u.F.a(a)
t=p.d
s=a.x.b
r=p.c
if(typeof s!=="number")return s.u()
q=t+s*r
if(t!==q){p.d=q
t=new D.w("zoom",t,q)
t.b=!0
p.H(t)}},
ay:function(a,b,c){var t,s=this,r=s.e,q=b.e
if(r<q){s.e=q
t=Math.pow(10,s.d)
s.f=V.av(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)}return s.f},
$iQ:1}
M.d7.prototype={
aa:function(a){var t=this.y
if(t!=null)t.D(a)},
cS:function(){return this.aa(null)},
dq:function(a,b){var t,s,r,q,p,o
for(t=b.length,s=this.ga6(),r=0;r<b.length;b.length===t||(0,H.r)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bX()
p.d=0
q.z=p}o=p.a;(o==null?p.a=[]:o).push(s)}}t=new D.bm()
t.b=!0
this.aa(t)},
ds:function(a,b){var t,s
for(t=b.gK(b),s=this.ga6();t.q();)t.gB(t).gt().O(0,s)
t=new D.bn()
t.b=!0
this.aa(t)},
scu:function(a,b){var t,s=this,r=s.c
if(r!==b){if(r!=null)r.gt().O(0,s.ga6())
t=s.c
s.c=b
b.gt().n(0,s.ga6())
r=new D.w("target",t,s.c)
r.b=!0
s.aa(r)}},
scv:function(a){var t,s=this,r=s.d
if(r!=a){if(r!=null)r.gt().O(0,s.ga6())
t=s.d
s.d=a
if(a!=null)a.gt().n(0,s.ga6())
r=new D.w("technique",t,s.d)
r.b=!0
s.aa(r)}},
gt:function(){var t=this.y
return t==null?this.y=D.D():t},
aw:function(a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
a3.cq(a2.d)
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
if(typeof r!=="number")return H.n(r)
n=C.d.a5(o*r)
o=p.b
if(typeof q!=="number")return H.n(q)
m=C.d.a5(o*q)
o=C.d.a5(p.c*r)
a3.c=o
p=C.d.a5(p.d*q)
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
h=V.av(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
a3.cy.cp(h)
s=$.k_
if(s==null){s=$.k1
if(s==null)s=$.k1=new V.b3(0,0,0)
p=$.ki
if(p==null)p=$.ki=new V.I(0,1,0)
o=$.kh
g=(o==null?$.kh=new V.I(0,0,-1):o).N()
f=p.aD(g).N()
e=g.aD(f)
d=new V.I(s.a,s.b,s.c)
c=f.J(0).T(d)
b=e.J(0).T(d)
a=g.J(0).T(d)
s=V.av(f.a,e.a,g.a,c,f.b,e.b,g.b,b,f.c,e.c,g.c,a,0,0,0,1)
$.k_=s
a0=s}else a0=s
t=t.b
if(t!=null){a1=t.a
if(a1!=null)a0=a1.u(0,a0)}a3.db.cp(a0)
for(t=a2.e.a,t=new J.a_(t,t.length);t.q();)t.d.ax(0,a3)
for(t=a2.e.a,t=new J.a_(t,t.length);t.q();)t.d.aw(a3)
a2.b.toString
a3.cy.bz()
a3.db.bz()
a2.c.toString
a3.co()}}
A.fp.prototype={}
A.fq.prototype={
j:function(a,b){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(q.b===b)return q}return null},
eB:function(){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
q.a.enableVertexAttribArray(q.c)}},
ez:function(){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
q.a.disableVertexAttribArray(q.c)}}}
A.bP.prototype={
gfd:function(a){return 0|(this.c?4:0)},
h:function(a){return""+(0|(this.c?4:0))},
p:function(a,b){var t
if(b==null)return!1
if(!(b instanceof A.bP))return!1
t=this.c===b.c
return t}}
A.hd.prototype={}
A.he.prototype={
h:function(a){return this.e}}
A.dS.prototype={
cO:function(a,b){var t=this
t.y=t.x=t.r=t.f=t.e=t.d=t.c=null},
bV:function(a,b){var t,s=this.a,r=s.createShader(b)
s.shaderSource(r,a)
s.compileShader(r)
if(!s.getShaderParameter(r,35713)){t=s.getShaderInfoLog(r)
s.deleteShader(r)
throw H.c(P.J("Error compiling shader '"+H.d(r)+"': "+H.d(t)))}return r},
e7:function(){var t,s,r,q=this,p=[],o=q.a,n=o.getProgramParameter(q.r,35721)
if(typeof n!=="number")return H.n(n)
t=0
for(;t<n;++t){s=o.getActiveAttrib(q.r,t)
r=o.getAttribLocation(q.r,s.name)
p.push(new A.fp(o,s.name,r))}q.x=new A.fq(p)},
e9:function(){var t,s,r,q=this,p=[],o=q.a,n=o.getProgramParameter(q.r,35718)
if(typeof n!=="number")return H.n(n)
t=0
for(;t<n;++t){s=o.getActiveUniform(q.r,t)
r=o.getUniformLocation(q.r,s.name)
p.push(q.ew(s.type,s.size,s.name,r))}q.y=new A.i0(p)},
ao:function(a,b,c){var t=this.a
if(a===1)return new A.hT(t,b,c)
else return A.jd(t,this.r,b,a,c)},
d6:function(a,b,c){var t=this.a
if(a===1)return new A.i3(t,b,c)
else return A.jd(t,this.r,b,a,c)},
d7:function(a,b,c){var t=this.a
if(a===1)return new A.ea(t,b,c)
else return A.jd(t,this.r,b,a,c)},
aN:function(a,b){return new P.ev(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
ew:function(a,b,c,d){var t=this
switch(a){case 5120:return t.ao(b,c,d)
case 5121:return t.ao(b,c,d)
case 5122:return t.ao(b,c,d)
case 5123:return t.ao(b,c,d)
case 5124:return t.ao(b,c,d)
case 5125:return t.ao(b,c,d)
case 5126:return new A.hS(t.a,c,d)
case 35664:return new A.hV(t.a,c,d)
case 35665:return new A.hX(t.a,c,d)
case 35666:return new A.hZ(t.a,c,d)
case 35667:return new A.hW(t.a,c,d)
case 35668:return new A.hY(t.a,c,d)
case 35669:return new A.i_(t.a,c,d)
case 35674:return new A.i1(t.a,c,d)
case 35675:return new A.i2(t.a,c,d)
case 35676:return new A.e9(t.a,c,d)
case 35678:return t.d6(b,c,d)
case 35680:return t.d7(b,c,d)
case 35670:throw H.c(t.aN("BOOL",c))
case 35671:throw H.c(t.aN("BOOL_VEC2",c))
case 35672:throw H.c(t.aN("BOOL_VEC3",c))
case 35673:throw H.c(t.aN("BOOL_VEC4",c))
default:throw H.c(P.J("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hR.prototype={}
A.i0.prototype={
j:function(a,b){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(q.c===b)return q}return null},
aU:function(a,b){var t=this.j(0,b)
if(t==null)throw H.c(P.J("Required uniform value, "+b+", was not defined or used in shader."))
return t},
h:function(a){return this.F()},
F:function(){var t,s,r,q
for(t=this.a,s=t.length,r="",q=0;q<t.length;t.length===s||(0,H.r)(t),++q)r+=t[q].h(0)+"\n"
return r}}
A.hT.prototype={
h:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hW.prototype={
h:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hY.prototype={
h:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i_.prototype={
h:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hU.prototype={
h:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.hS.prototype={
h:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hV.prototype={
h:function(a){return"Uniform2f: "+H.d(this.c)}}
A.hX.prototype={
h:function(a){return"Uniform3f: "+H.d(this.c)}}
A.hZ.prototype={
h:function(a){return"Uniform4f: "+H.d(this.c)}}
A.i1.prototype={
h:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.i2.prototype={
h:function(a){return"UniformMat3: "+H.d(this.c)}}
A.e9.prototype={
aY:function(a){var t=new Float32Array(H.jn(a))
this.a.uniformMatrix4fv(this.d,!1,t)},
h:function(a){return"UniformMat4: "+H.d(this.c)}}
A.i3.prototype={
h:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.ea.prototype={
h:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.iG.prototype={
$3:function(a,b,c){var t,s=this,r=s.a,q=r.a.bu(r.b,b).bu(r.d.bu(r.c,b),c)
r=new V.b3(q.a,q.b,q.c)
if(!J.H(a.f,r)){a.f=r
r=a.a
if(r!=null)r.Y()}a.sf6(q.N())
r=1-b
t=1-c
t=new V.dK(s.b+b*c,s.c+r*c,s.d+b*t,s.e+r*t)
if(!J.H(a.cx,t)){a.cx=t
r=a.a
if(r!=null)r.Y()}}}
F.fO.prototype={
d0:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.r
p=this.b
t=p==null?q:p.r
p=this.c
s=p==null?q:p.r
r=V.eg()
if(o!=null)r=r.v(0,o)
if(t!=null)r=r.v(0,t)
if(s!=null)r=r.v(0,s)
if(r.ce())return q
return r.N()},
d2:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.f
p=this.b
t=p==null?q:p.f
p=this.c
s=p==null?q:p.f
if(o==null||t==null||s==null)return q
p=t.V(0,o)
r=new V.I(p.a,p.b,p.c).N()
p=s.V(0,o)
return r.aD(new V.I(p.a,p.b,p.c).N()).N()},
bo:function(){var t,s=this
if(s.d!=null)return!0
t=s.d0()
if(t==null){t=s.d2()
if(t==null)return!1}s.d=t
s.a.a.Y()
return!0},
d_:function(){var t,s,r,q=null,p=this.a,o=p==null?q:p.x
p=this.b
t=p==null?q:p.x
p=this.c
s=p==null?q:p.x
r=V.eg()
if(o!=null)r=r.v(0,o)
if(t!=null)r=r.v(0,t)
if(s!=null)r=r.v(0,s)
if(r.ce())return q
return r.N()},
d1:function(){var t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k==null,i=j?l:k.f,h=m.b,g=h==null,f=g?l:h.f,e=m.c,d=e==null,c=d?l:e.f
if(i==null||f==null||c==null)return l
t=j?l:k.y
s=g?l:h.y
r=d?l:e.y
if(t==null||s==null||r==null)return l
k=s.b
q=k-r.b
$.y().toString
if(Math.abs(q-0)<1e-9){k=c.V(0,f)
p=new V.I(k.a,k.b,k.c).N()
if(r.a-s.a<0)p=p.J(0)}else{o=(k-t.b)/q
k=c.V(0,f)
k=new V.b3(k.a*o+f.a,k.b*o+f.b,k.c*o+f.c).V(0,i)
p=new V.I(k.a,k.b,k.c).N()
r=r.a
s=s.a
if((r-s)*o+s-t.a<0)p=p.J(0)}k=m.d
if(k!=null){n=k.N()
p=n.aD(p).N().aD(n).N()}return p},
bm:function(){var t,s=this
if(s.e!=null)return!0
t=s.d_()
if(t==null){t=s.d1()
if(t==null)return!1}s.e=t
s.a.a.Y()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.F()},
w:function(a){var t,s=this,r=s.a
if(r==null||s.b==null||s.c==null)return a+"disposed"
t=a+C.b.a4(J.V(r.e),0)+", "+C.b.a4(J.V(s.b.e),0)+", "+C.b.a4(J.V(s.c.e),0)+" {"
r=s.d
t=r!=null?t+(r.h(0)+", "):t+"-, "
r=s.e
return r!=null?t+(r.h(0)+"}"):t+"-}"},
F:function(){return this.w("")}}
F.h0.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.F()},
w:function(a){var t=this.a
if(t==null||this.b==null)return a+"disposed"
return a+C.b.a4(J.V(t.e),0)+", "+C.b.a4(J.V(this.b.e),0)},
F:function(){return this.w("")}}
F.hg.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.F()},
w:function(a){var t=this.a
if(t==null)return a+"disposed"
return a+C.b.a4(J.V(t.e),0)},
F:function(){return this.w("")}}
F.hq.prototype={
gt:function(){var t=this.e
return t==null?this.e=D.D():t},
eI:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.e
if(f!=null)++f.d
a.a.R()
t=g.a.c.length
for(f=a.a.c,s=f.length,r=0;r<f.length;f.length===s||(0,H.r)(f),++r){q=f[r]
g.a.n(0,q.eu())}g.a.R()
for(f=a.b.b,s=f.length,r=0;r<f.length;f.length===s||(0,H.r)(f),++r){p=f[r]
o=g.a
n=p.a
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.v()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
g.b.a.a.n(0,m)
n=new F.hg()
if(m.a==null)H.L(P.J("May not create a point with a vertex which is not attached to a shape."))
n.a=m
m.b.b.push(n)
n.a.a.b.b.push(n)
o=n.a.a.e
if(o!=null)o.D(null)}for(f=a.c.b,s=f.length,r=0;r<f.length;f.length===s||(0,H.r)(f),++r){l=f[r]
o=g.a
n=l.a
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.v()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=g.a
o=l.b
o.a.a.R()
o=o.e
if(typeof o!=="number")return o.v()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=g.c.a
o.a.n(0,k)
o.a.n(0,j)
o=new F.h0()
n=k.a
if(n==null)H.L(P.J("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.L(P.J("May not create a line with vertices attached to different shapes."))
o.a=k
k.c.b.push(o)
o.b=j
j.c.c.push(o)
o.a.a.c.b.push(o)
o=o.a.a.e
if(o!=null)o.D(null)}for(f=a.d.b,s=f.length,r=0;r<f.length;f.length===s||(0,H.r)(f),++r){i=f[r]
o=g.a
n=i.a
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.v()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=g.a
o=i.b
o.a.a.R()
o=o.e
if(typeof o!=="number")return o.v()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=g.a
n=i.c
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.v()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=g.d.a
n.a.n(0,k)
n.a.n(0,j)
n.a.n(0,h)
F.d8(k,j,h)}f=g.e
if(f!=null)f.aj(0)},
at:function(){var t,s=this,r=s.e
if(r!=null)++r.d
t=s.d.at()||!1
if(!s.a.at())t=!1
r=s.e
if(r!=null)r.aj(0)
return t},
eo:function(a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=34962,a0=b.a.c.length,a1=a4.a,a2=(a1&$.aI().a)!==0?1:0
if((a1&$.aH().a)!==0)++a2
if((a1&$.aG().a)!==0)++a2
if((a1&$.bM().a)!==0)++a2
if((a1&$.aJ().a)!==0)++a2
if((a1&$.cS().a)!==0)++a2
if((a1&$.cT().a)!==0)++a2
if((a1&$.bN().a)!==0)++a2
if((a1&$.bL().a)!==0)++a2
t=a4.gbG(a4)
s=t*4
a1=a0*t
r=new Array(a1)
r.fixed$length=Array
q=new Array(a2)
q.fixed$length=Array
for(p=0,o=0;o<a2;++o){n=a4.el(o)
m=n.gbG(n)
q[o]=new Z.fv(n,m,p*4,s)
for(l=0;l<a0;++l){k=b.a.c
if(l>=k.length)return H.e(k,l)
j=k[l].eH(n)
i=p+l*t
for(k=j.length,h=0;h<k;++h){g=j[h]
if(i<0||i>=a1)return H.e(r,i)
r[i]=g;++i}}p+=m}a1=a3.a
f=a1.createBuffer()
a1.bindBuffer(a,f)
a1.bufferData(a,new Float32Array(H.jn(r)),35044)
a1.bindBuffer(a,null)
e=new Z.cZ(new Z.ei(a,f),q,a4)
e.b=[]
if(b.b.b.length!==0){d=[]
for(o=0;k=b.b.b,o<k.length;++o){k=k[o].a
k.a.a.R()
d.push(k.e)}c=Z.je(a1,34963,d)
e.b.push(new Z.c_(0,d.length,c))}if(b.c.b.length!==0){d=[]
for(o=0;k=b.c.b,o<k.length;++o){k=k[o].a
k.a.a.R()
d.push(k.e)
k=b.c.b
if(o>=k.length)return H.e(k,o)
k=k[o].b
k.a.a.R()
d.push(k.e)}c=Z.je(a1,34963,d)
e.b.push(new Z.c_(1,d.length,c))}if(b.d.b.length!==0){d=[]
for(o=0;k=b.d.b,o<k.length;++o){k=k[o].a
k.a.a.R()
d.push(k.e)
k=b.d.b
if(o>=k.length)return H.e(k,o)
k=k[o].b
k.a.a.R()
d.push(k.e)
k=b.d.b
if(o>=k.length)return H.e(k,o)
k=k[o].c
k.a.a.R()
d.push(k.e)}c=Z.je(a1,34963,d)
e.b.push(new Z.c_(4,d.length,c))}return e},
h:function(a){var t=this,s="   ",r=[]
if(t.a.c.length!==0){r.push("Vertices:")
r.push(t.a.w(s))}if(t.b.b.length!==0){r.push("Points:")
r.push(t.b.w(s))}if(t.c.b.length!==0){r.push("Lines:")
r.push(t.c.w(s))}if(t.d.b.length!==0){r.push("Faces:")
r.push(t.d.w(s))}return C.a.l(r,"\n")},
Y:function(){var t=this.e
if(t!=null)t.D(null)}}
F.hr.prototype={
ej:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=[]
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
if(o){m.n(0,l)
t.a.n(0,k)
t.a.n(0,i)
g.push(F.d8(l,k,i))
t.a.n(0,l)
t.a.n(0,i)
t.a.n(0,h)
g.push(F.d8(l,i,h))}else{m.n(0,k)
t.a.n(0,i)
t.a.n(0,h)
g.push(F.d8(k,i,h))
t.a.n(0,k)
t.a.n(0,h)
t.a.n(0,l)
g.push(F.d8(k,h,l))}o=!o}q=!q}return g},
gk:function(a){return this.b.length},
at:function(){var t,s,r,q
for(t=this.b,s=t.length,r=!0,q=0;q<t.length;t.length===s||(0,H.r)(t),++q)if(!t[q].bo())r=!1
return r},
bn:function(){var t,s,r,q
for(t=this.b,s=t.length,r=!0,q=0;q<t.length;t.length===s||(0,H.r)(t),++q)if(!t[q].bm())r=!1
return r},
h:function(a){return this.F()},
w:function(a){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(a))
return C.a.l(q,"\n")},
F:function(){return this.w("")}}
F.hs.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.F()},
w:function(a){var t,s,r=[],q=this.b.length
for(t=0;t<q;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r.push(s[t].w(a+(""+t+". ")))}return C.a.l(r,"\n")},
F:function(){return this.w("")}}
F.ht.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.F()},
w:function(a){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(a))
return C.a.l(q,"\n")},
F:function(){return this.w("")}}
F.i7.prototype={
bq:function(a){var t=this,s=t.f,r=t.r,q=t.x,p=t.y,o=t.z,n=t.Q,m=t.ch
return F.kk(t.cx,q,n,s,r,p,o,a,m)},
eu:function(){return this.bq(null)},
sf6:function(a){var t
if(!J.H(this.z,a)){this.z=a
t=this.a
if(t!=null)t.Y()}},
eH:function(a){var t,s=this
if(a.p(0,$.aI())){t=s.f
if(t==null)return[0,0,0]
else return[t.a,t.b,t.c]}else if(a.p(0,$.aH())){t=s.r
if(t==null)return[0,1,0]
else return[t.a,t.b,t.c]}else if(a.p(0,$.aG())){t=s.x
if(t==null)return[0,0,1]
else return[t.a,t.b,t.c]}else if(a.p(0,$.bM())){t=s.y
if(t==null)return[0,0]
else return[t.a,t.b]}else if(a.p(0,$.aJ())){t=s.z
if(t==null)return[0,0,0]
else return[t.a,t.b,t.c]}else if(a.p(0,$.cS())){t=s.Q
if(t==null)return[1,1,1]
else return[t.a,t.b,t.c]}else if(a.p(0,$.cT())){t=s.Q
if(t==null)return[1,1,1,1]
else return[t.a,t.b,t.c,t.d]}else if(a.p(0,$.bN()))return[s.ch]
else if(a.p(0,$.bL())){t=s.cx
if(t==null)return[-1,-1,-1,-1]
else return[t.a,t.b,t.c,t.d]}else return[]},
bo:function(){var t,s=this,r={}
if(s.r!=null)return!0
t=s.a
if(t!=null){t=t.e
if(t!=null)++t.d}r.a=V.eg()
s.d.I(0,new F.ig(r))
s.r=r.a.N()
r=s.a
if(r!=null){r.Y()
r=s.a.e
if(r!=null)r.aj(0)}return!0},
bm:function(){var t,s=this,r={}
if(s.x!=null)return!0
t=s.a
if(t!=null){t=t.e
if(t!=null)++t.d}r.a=V.eg()
s.d.I(0,new F.ie(r))
s.x=r.a.N()
r=s.a
if(r!=null){r.Y()
r=s.a.e
if(r!=null)r.aj(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.F()},
w:function(a){var t,s,r=this,q="-",p=[]
p.push(C.b.a4(J.V(r.e),0))
t=r.f
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.r
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.x
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.y
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.z
if(t!=null)p.push(t.h(0))
else p.push(q)
t=r.Q
if(t!=null)p.push(t.h(0))
else p.push(q)
p.push(V.G(r.ch,3,0))
t=r.cx
if(t!=null)p.push(t.h(0))
else p.push(q)
s=C.a.l(p,", ")
return a+"{"+s+"}"},
F:function(){return this.w("")}}
F.ig.prototype={
$1:function(a){var t,s=a==null?null:a.d
if(s!=null){t=this.a
t.a=t.a.v(0,s)}}}
F.ie.prototype={
$1:function(a){var t,s=a==null?null:a.e
if(s!=null){t=this.a
t.a=t.a.v(0,s)}}}
F.i8.prototype={
R:function(){},
n:function(a,b){var t,s=b.a
if(s!=null){if(s===this.a)return!1
throw H.c(P.J("May not add a vertex already attached to another shape to this shape."))}s=this.c
b.e=s.length
t=this.a
b.a=t
s.push(b)
t.Y()
return!0},
c3:function(a,b){var t=null,s=F.kk(t,t,a,t,t,b,t,t,0)
this.n(0,s)
return s},
gk:function(a){return this.c.length},
at:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)t[r].bo()
return!0},
bn:function(){var t,s,r
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)t[r].bm()
return!0},
ep:function(){var t,s,r,q,p
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r){q=t[r]
if(q.z==null){p=q.r.N()
if(!J.H(q.z,p)){q.z=p
p=q.a
if(p!=null){p=p.e
if(p!=null)p.D(null)}}}}return!0},
h:function(a){return this.F()},
w:function(a){var t,s,r,q
this.R()
t=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)t.push(s[q].w(a))
return C.a.l(t,"\n")},
F:function(){return this.w("")}}
F.i9.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){var t=this
C.a.I(t.b,b)
C.a.I(t.c,new F.ia(t,b))
C.a.I(t.d,new F.ib(t,b))},
h:function(a){return this.F()},
F:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(""))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(""))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(""))
return C.a.l(q,"\n")}}
F.ia.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.ib.prototype={
$1:function(a){var t=this.a
if(!J.H(a.a,t)&&!J.H(a.b,t))this.b.$1(a)}}
F.ic.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.F()},
F:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(""))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(""))
return C.a.l(q,"\n")}}
F.id.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.F()},
F:function(){var t,s,r,q=[]
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.r)(t),++r)q.push(t[r].w(""))
return C.a.l(q,"\n")}}
O.dA.prototype={
gt:function(){var t=this.r
return t==null?this.r=D.D():t},
b0:function(a){var t=this.r
if(t!=null)t.D(a)},
bO:function(){return this.b0(null)},
bY:function(a){},
bZ:function(a){var t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().O(0,s.gbN())
t=s.f
s.f=a
if(a!=null)a.gt().n(0,s.gbN())
r=new D.w("bumpyTextureCube",t,s.f)
r.b=!0
s.b0(r)}},
cZ:function(a,b){if(b!=null)if(!C.a.C(a,b)){b.a=a.length
a.push(b)}},
f_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f="varying vec3 txtCube;\n",e=g.a
if(e==null){e=A.jY(g.d)
t=e.e
s=a.fr.j(0,t)
if(s==null){r=a.a
s=new A.hd(r,t)
s.cO(r,t)
s.z=e
q=e.d
p=(q?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
o=e.b
if(o)p+="attribute vec3 binmAttr;\n"
p=(q?p+"attribute vec3 txtCubeAttr;\n":p)+"\nvarying vec3 normalVec;\n"
if(o)p+="varying vec3 binormalVec;\n"
p=(q?p+f:p)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(o)p+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
p=(q?p+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":p)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
n=p.charCodeAt(0)==0?p:p
p=o?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
p=(q?p+f:p)+"\n"
if(e.a.c)p+="uniform samplerCube bumpTxt;\n"
p+="\nvec3 normal()\n{\n"
e=e.a
o=e.c
if(!o||!1)p+="   return normalize(normalVec);\n"
else p+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
p+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
s.c=n
s.d=p.charCodeAt(0)==0?p:p
s.e=s.bV(n,35633)
s.f=s.bV(s.d,35632)
p=r.createProgram()
s.r=p
r.attachShader(p,s.e)
r.attachShader(s.r,s.f)
r.linkProgram(s.r)
if(!r.getProgramParameter(s.r,35714)){m=r.getProgramInfoLog(s.r)
r.deleteProgram(s.r)
H.L(P.J("Failed to link shader: "+H.d(m)))}s.e7()
s.e9()
s.Q=s.x.j(0,"posAttr")
s.cx=s.x.j(0,"normAttr")
s.ch=s.x.j(0,"binmAttr")
s.cy=s.x.j(0,"txt2DAttr")
s.db=s.x.j(0,"txtCubeAttr")
r=u.M
s.dx=r.a(s.y.aU(0,"viewObjMat"))
s.dy=r.a(s.y.aU(0,"projViewObjMat"))
if(q)s.fx=r.a(s.y.aU(0,"txtCubeMat"))
if(e.c)s.go=u.Q.a(s.y.aU(0,"bumpTxt"))
if(t.length===0)H.L(P.J("May not cache a shader with no name."))
if(a.fr.er(0,t))H.L(P.J('Shader cache already contains a shader by the name "'+t+'".'))
a.fr.m(0,t,s)}e=g.a=s
b.e=null}l=e.z
k=l.f
e=b.e
if(!(e instanceof Z.cZ))e=b.e=null
if(e==null||!e.d.p(0,k)){b.d.at()
e=l.b
if(e){t=b.d
r=t.e
if(r!=null)++r.d
t.d.bn()
t.a.bn()
t=t.e
if(t!=null)t.aj(0)}t=l.d
if(t){r=b.d
q=r.e
if(q!=null)++q.d
r.a.ep()
r=r.e
if(r!=null)r.aj(0)}j=b.d.eo(new Z.ih(a.a),k)
j.aP($.aI()).e=g.a.Q.c
j.aP($.aH()).e=g.a.cx.c
if(e)j.aP($.aG()).e=g.a.ch.c
if(t)j.aP($.aJ()).e=g.a.db.c
b.e=j}i=[]
e=g.a
t=a.a
t.useProgram(e.r)
e.x.eB()
e=g.a
r=a.cx
if(r==null){r=a.db
r=r.gag(r)
q=a.dx
q=a.cx=r.u(0,q.gag(q))
r=q}e=e.dx
e.toString
e.aY(r.bA(0,!0))
r=g.a
e=a.ch
if(e==null){e=a.z
if(e==null){e=a.cy
e=e.gag(e)
q=a.db
q=a.z=e.u(0,q.gag(q))
e=q}q=a.dx
q=a.ch=e.u(0,q.gag(q))
e=q}r=r.dy
r.toString
r.aY(e.bA(0,!0))
if(l.d){e=g.a
r=g.c
e=e.fx
e.toString
e.aY(r.bA(0,!0))}if(l.a.c){g.cZ(i,g.f)
e=g.a
r=g.f
e=e.go
q=r!=null
if(q&&r.d>=6){e.toString
q=!q||r.d<6
p=e.a
e=e.d
if(q)p.uniform1i(e,0)
else p.uniform1i(e,r.a)}}for(h=0;h<i.length;++h){e=i[h]
if(!e.c&&e.d>=6){e.c=!0
t.activeTexture(33984+e.a)
t.bindTexture(34067,e.b)}}e=b.e
e.bl(a)
e.aw(a)
e.fc(a)
for(h=0;h<i.length;++h){e=i[h]
if(e.c){e.c=!1
t.activeTexture(33984+e.a)
t.bindTexture(34067,null)}}e=g.a
e.toString
t.useProgram(null)
e.x.ez()},
h:function(a){var t=this.a
if(t!=null)return t.b
else return A.jY(this.d).e}}
O.hD.prototype={}
T.hE.prototype={}
T.hF.prototype={
gt:function(){var t=this.e
return t==null?this.e=D.D():t}}
T.hG.prototype={
ap:function(a,b,c,d,e,f){var t=document.createElement("img")
t.src=c;++this.d
W.P(t,"load",new T.hH(this,t,!1,b,!1,d,a),!1)},
e4:function(a,b,c){var t,s,r,q
b=V.jx(b)
t=V.jx(a.width)
s=V.jx(a.height)
t=Math.min(t,b)
s=Math.min(s,b)
if(a.width===t&&a.height===s)return a
else{r=W.iY()
r.width=t
r.height=s
q=C.f.cC(r,"2d")
q.imageSmoothingEnabled=!1
q.drawImage(a,0,0,r.width,r.height)
return P.n1(q.getImageData(0,0,r.width,r.height))}}}
T.hH.prototype={
$1:function(a){var t=this,s=t.a,r=s.e4(t.b,s.c,t.c),q=s.a
q.bindTexture(34067,t.d)
q.pixelStorei(37440,t.e?1:0)
C.V.f5(q,t.f,0,6408,6408,5121,r)
q.bindTexture(34067,null)
q=t.r
if(++q.d>=6){q=q.e
if(q!=null)q.eA()}++s.e}}
X.iX.prototype={}
X.fS.prototype={
gt:function(){var t=this.x
return t==null?this.x=D.D():t}}
X.dG.prototype={
gt:function(){var t=this.f
return t==null?this.f=D.D():t},
an:function(a){var t=this.f
if(t!=null)t.D(a)},
cW:function(){return this.an(null)},
saE:function(a){var t,s,r=this
if(!J.H(r.b,a)){t=r.b
if(t!=null)t.gt().O(0,r.gbP())
s=r.b
r.b=a
if(a!=null)a.gt().n(0,r.gbP())
t=new D.w("mover",s,r.b)
t.b=!0
r.an(t)}}}
X.hB.prototype={}
V.aO.prototype={
aI:function(a){this.b=new P.fV(C.J)
this.c=null
this.d=[]},
E:function(a,b){var t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push([])
t=a.split("\n")
for(l=t.length,s=!0,r=0;r<l;++r){q=t[r]
if(s)s=!1
else m.d.push([])
p=document.createElement("div")
p.className="codePart"
o=m.b.d5(q,0,q.length)
n=o==null?q:o
C.H.cF(p,H.jz(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaR(m.d).push(p)}},
cn:function(a,b){var t,s,r,q=this
q.d=[]
t=C.a.l(b,"\n")
s=q.c
if(s==null)s=q.c=q.aO()
s.toString
r=new H.k(t)
r=new P.bb(s.bB(new H.au(r,r.gk(r))).a())
for(;r.q();)q.aT(r.gB(r))}}
V.iT.prototype={
$1:function(a){var t=C.d.cw(this.a.geE(),2)
if(t!=="0.00")P.jy(t+" fps")}}
V.d4.prototype={
aT:function(a){var t=this
switch(a.a){case"Class":t.E(a.b,"#551")
break
case"Comment":t.E(a.b,"#777")
break
case"Id":t.E(a.b,"#111")
break
case"Num":t.E(a.b,"#191")
break
case"Reserved":t.E(a.b,"#119")
break
case"String":t.E(a.b,"#171")
break
case"Symbol":t.E(a.b,"#616")
break
case"Type":t.E(a.b,"#B11")
break
case"Whitespace":t.E(a.b,"#111")
break}},
aO:function(){var t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hL()
a1.d=a1.i(0,r)
t=a1.i(0,r).l(0,q)
s=K.m(new H.k("_"))
t.a.push(s)
s=K.C("a","z")
t.a.push(s)
s=K.C("A","Z")
t.a.push(s)
s=a1.i(0,q).l(0,q)
t=K.m(new H.k("_"))
s.a.push(t)
t=K.C("0","9")
s.a.push(t)
t=K.C("a","z")
s.a.push(t)
t=K.C("A","Z")
s.a.push(t)
t=a1.i(0,r).l(0,p)
s=K.C("0","9")
t.a.push(s)
s=a1.i(0,p).l(0,p)
t=K.C("0","9")
s.a.push(t)
t=a1.i(0,p).l(0,o)
s=K.m(new H.k("."))
t.a.push(s)
s=a1.i(0,o).l(0,n)
t=K.C("0","9")
s.a.push(t)
t=a1.i(0,n).l(0,n)
s=K.C("0","9")
t.a.push(s)
s=a1.i(0,r).l(0,m)
t=K.m(new H.k(l))
s.a.push(t)
t=a1.i(0,m).l(0,m)
s=K.m(new H.k(l))
t.a.push(s)
s=a1.i(0,r).l(0,k)
t=K.m(new H.k('"'))
s.a.push(t)
t=a1.i(0,k).l(0,j)
s=K.m(new H.k('"'))
t.a.push(s)
s=a1.i(0,k).l(0,i)
t=K.m(new H.k("\\"))
s.a.push(t)
t=a1.i(0,i).l(0,k)
s=K.m(new H.k('"'))
t.a.push(s)
a1.i(0,k).l(0,k).a.push(new K.aq())
s=a1.i(0,r).l(0,h)
t=K.m(new H.k("'"))
s.a.push(t)
t=a1.i(0,h).l(0,g)
s=K.m(new H.k("'"))
t.a.push(s)
s=a1.i(0,h).l(0,f)
t=K.m(new H.k("\\"))
s.a.push(t)
t=a1.i(0,f).l(0,h)
s=K.m(new H.k("'"))
t.a.push(s)
a1.i(0,h).l(0,h).a.push(new K.aq())
s=a1.i(0,r).l(0,e)
t=K.m(new H.k("/"))
s.a.push(t)
t=a1.i(0,e).l(0,d)
s=K.m(new H.k("/"))
t.a.push(s)
s=a1.i(0,d).l(0,c)
t=K.m(new H.k("\n"))
s.a.push(t)
t=a1.i(0,d).l(0,d)
s=new K.W()
s.a=[]
t.a.push(s)
t=K.m(new H.k("\n"))
s.a.push(t)
t=a1.i(0,e).l(0,b)
s=K.m(new H.k("*"))
t.a.push(s)
s=a1.i(0,b).l(0,a)
t=K.m(new H.k("*"))
s.a.push(t)
t=a1.i(0,a).l(0,b)
s=new K.W()
s.a=[]
t.a.push(s)
t=K.m(new H.k("*"))
s.a.push(t)
t=a1.i(0,a).l(0,c)
s=K.m(new H.k("/"))
t.a.push(s)
s=a1.i(0,r).l(0,a0)
t=K.m(new H.k(" \n\t"))
s.a.push(t)
t=a1.i(0,a0).l(0,a0)
s=K.m(new H.k(" \n\t"))
t.a.push(s)
s=a1.i(0,p)
s.d=s.a.G("Num")
s=a1.i(0,n)
s.d=s.a.G("Num")
s=a1.i(0,m)
s.d=s.a.G("Symbol")
s=a1.i(0,j)
s.d=s.a.G("String")
s=a1.i(0,g)
s.d=s.a.G("String")
s=a1.i(0,c)
s.d=s.a.G(d)
s=a1.i(0,a0)
s.d=s.a.G(a0)
s=a1.i(0,q)
s=s.d=s.a.G(q)
s.ai(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
s.ai(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
s.ai(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a1}}
V.dd.prototype={
aT:function(a){var t=this
switch(a.a){case"Builtin":t.E(a.b,"#411")
break
case"Comment":t.E(a.b,"#777")
break
case"Id":t.E(a.b,"#111")
break
case"Num":t.E(a.b,"#191")
break
case"Preprocess":t.E(a.b,"#737")
break
case"Reserved":t.E(a.b,"#119")
break
case"Symbol":t.E(a.b,"#611")
break
case"Type":t.E(a.b,"#171")
break
case"Whitespace":t.E(a.b,"#111")
break}},
aO:function(){var t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hL()
e.d=e.i(0,r)
t=e.i(0,r).l(0,q)
s=K.m(new H.k("_"))
t.a.push(s)
s=K.C("a","z")
t.a.push(s)
s=K.C("A","Z")
t.a.push(s)
s=e.i(0,q).l(0,q)
t=K.m(new H.k("_"))
s.a.push(t)
t=K.C("0","9")
s.a.push(t)
t=K.C("a","z")
s.a.push(t)
t=K.C("A","Z")
s.a.push(t)
t=e.i(0,r).l(0,p)
s=K.C("0","9")
t.a.push(s)
s=e.i(0,p).l(0,p)
t=K.C("0","9")
s.a.push(t)
t=e.i(0,p).l(0,o)
s=K.m(new H.k("."))
t.a.push(s)
s=e.i(0,o).l(0,n)
t=K.C("0","9")
s.a.push(t)
t=e.i(0,n).l(0,n)
s=K.C("0","9")
t.a.push(s)
s=e.i(0,r).l(0,m)
t=K.m(new H.k(l))
s.a.push(t)
t=e.i(0,m).l(0,m)
s=K.m(new H.k(l))
t.a.push(s)
s=e.i(0,r).l(0,k)
t=K.m(new H.k("/"))
s.a.push(t)
t=e.i(0,k).l(0,j)
s=K.m(new H.k("/"))
t.a.push(s)
e.i(0,k).l(0,m).a.push(new K.aq())
s=e.i(0,j).l(0,i)
t=K.m(new H.k("\n"))
s.a.push(t)
t=e.i(0,j).l(0,j)
s=new K.W()
s.a=[]
t.a.push(s)
t=K.m(new H.k("\n"))
s.a.push(t)
t=e.i(0,r).l(0,h)
s=K.m(new H.k("#"))
t.a.push(s)
s=e.i(0,h).l(0,h)
t=new K.W()
t.a=[]
s.a.push(t)
s=K.m(new H.k("\n"))
t.a.push(s)
s=e.i(0,h).l(0,g)
t=K.m(new H.k("\n"))
s.a.push(t)
t=e.i(0,r).l(0,f)
s=K.m(new H.k(" \n\t"))
t.a.push(s)
s=e.i(0,f).l(0,f)
t=K.m(new H.k(" \n\t"))
s.a.push(t)
t=e.i(0,p)
t.d=t.a.G("Num")
t=e.i(0,n)
t.d=t.a.G("Num")
t=e.i(0,m)
t.d=t.a.G("Symbol")
t=e.i(0,i)
t.d=t.a.G(j)
t=e.i(0,g)
t.d=t.a.G(h)
t=e.i(0,f)
t.d=t.a.G(f)
t=e.i(0,q)
t=t.d=t.a.G(q)
t.ai(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
t.ai(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
t.ai(0,"Builtin",["gl_FragColor","gl_Position"])
return e}}
V.df.prototype={
aT:function(a){var t=this,s="#111"
switch(a.a){case"Attr":t.E(a.b,"#911")
t.E("=",s)
break
case"Id":t.E(a.b,s)
break
case"Other":t.E(a.b,s)
break
case"Reserved":t.E(a.b,"#119")
break
case"String":t.E(a.b,"#171")
break
case"Symbol":t.E(a.b,"#616")
break}},
aO:function(){var t,s,r="Start",q="Id",p="Attr",o="Sym",n="OpenStr",m="CloseStr",l="Other",k=L.hL()
k.d=k.i(0,r)
t=k.i(0,r).l(0,q)
s=K.m(new H.k("_"))
t.a.push(s)
s=K.C("a","z")
t.a.push(s)
s=K.C("A","Z")
t.a.push(s)
s=k.i(0,q).l(0,q)
t=K.m(new H.k("_"))
s.a.push(t)
t=K.C("0","9")
s.a.push(t)
t=K.C("a","z")
s.a.push(t)
t=K.C("A","Z")
s.a.push(t)
t=k.i(0,q).l(0,p)
s=K.m(new H.k("="))
t.a.push(s)
t.c=!0
t=k.i(0,r).l(0,o)
s=K.m(new H.k("</\\-!>="))
t.a.push(s)
s=k.i(0,o).l(0,o)
t=K.m(new H.k("</\\-!>="))
s.a.push(t)
t=k.i(0,r).l(0,n)
s=K.m(new H.k('"'))
t.a.push(s)
s=k.i(0,n).l(0,m)
t=K.m(new H.k('"'))
s.a.push(t)
t=k.i(0,n).l(0,"EscStr")
s=K.m(new H.k("\\"))
t.a.push(s)
s=k.i(0,"EscStr").l(0,n)
t=K.m(new H.k('"'))
s.a.push(t)
k.i(0,n).l(0,n).a.push(new K.aq())
k.i(0,r).l(0,l).a.push(new K.aq())
t=k.i(0,l).l(0,l)
s=new K.W()
s.a=[]
t.a.push(s)
t=K.m(new H.k('</\\-!>=_"'))
s.a.push(t)
t=K.C("a","z")
s.a.push(t)
t=K.C("A","Z")
s.a.push(t)
t=k.i(0,o)
t.d=t.a.G("Symbol")
t=k.i(0,m)
t.d=t.a.G("String")
t=k.i(0,q)
s=t.a.G(q)
t.d=s
s.ai(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
s=k.i(0,p)
s.d=s.a.G(p)
s=k.i(0,l)
s.d=s.a.G(l)
return k}}
V.dI.prototype={
cn:function(a,b){this.d=[]
this.E(C.a.l(b,"\n"),"#111")},
aT:function(a){},
aO:function(){return null}}
V.hu.prototype={
cP:function(a,b){var t,s,r,q,p=document,o=p.body,n=p.createElement("div")
n.className="scrollTop"
o.appendChild(n)
t=p.createElement("div")
t.className="scrollPage"
o.appendChild(t)
s=p.createElement("div")
s.className="pageCenter"
t.appendChild(s)
if(a.length!==0){p.title=a
r=p.createElement("div")
r.className="pageTitle"
r.textContent=a
s.appendChild(r)}q=p.createElement("div")
this.a=q
s.appendChild(q)
this.b=null
W.P(p,"scroll",new V.hw(n),!1)},
c4:function(a){var t,s,r,q,p,o,n,m
this.e8()
t=document
s=t.createElement("div")
s.className="textPar"
r=this.b
q=C.a.eG(a)
r.toString
q=new H.k(q)
q=new P.bb(r.bB(new H.au(q,q.gk(q))).a())
for(;q.q();){r=q.gB(q)
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
if(H.kO(r,"|",0)){o=r.split("|")
n=t.createElement("a")
n.className="linkPar"
if(1>=o.length)return H.e(o,1)
n.href=o[1]
n.textContent=o[0]
s.appendChild(n)}else{m=P.kx(C.q,r,C.h,!1)
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
cB:function(a){var t,s,r,q=new V.d4("dart")
q.aI("dart")
t=new V.dd("glsl")
t.aI("glsl")
s=new V.df("html")
s.aI("html")
r=C.a.eD([q,t,s],new V.hx(a))
if(r!=null)return r
q=new V.dI("plain")
q.aI("plain")
return q},
c2:function(a8,a9,b0,b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText",a7=[]
for(t=!1,s=0;s<b1.length;++s){r=b1[s]
if(J.js(r).aZ(r,"+")){b1[s]=C.b.bH(r,1)
a7.push(1)
t=!0}else if(C.b.aZ(r,"-")){b1[s]=C.b.bH(r,1)
a7.push(-1)
t=!0}else a7.push(0)}q=this.cB(a9)
q.cn(0,b1)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.kx(C.q,a8,C.h,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jD()
i.href="#"+m
i.textContent=a8
j.appendChild(i)
k.appendChild(j)
l.appendChild(k)
n.appendChild(l)
if(t)for(h=b0,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className=a5
if(s>=a7.length)return H.e(a7,s)
b=a7[s]
if(b===0){++g;++h
d.textContent=""+g
c.textContent=""+h}else if(b>0){e.className="codeTableRow codeLineLightGreen"
d.className="codeLineNums codeLineGreen codeLineCenter"
c.className="codeLineNums codeLineGreen";++h
d.textContent="+"
c.textContent=""+h}else if(b<0){e.className="codeTableRow codeLineLightRed"
d.className="codeLineNums codeLineRed"
c.className="codeLineNums codeLineRed codeLineCenter";++g
d.textContent=""+g
c.textContent="-"}a=p.createElement("td")
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.r)(r),++a0)a.appendChild(r[a0])
e.appendChild(d)
e.appendChild(c)
e.appendChild(a)
n.appendChild(e)}else for(f=q.d,a1=f.length,a2=b0,a0=0;a0<f.length;f.length===a1||(0,H.r)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className=a4
d=p.createElement("td")
d.className=a5;++a2
d.textContent=""+a2
c=p.createElement("td")
c.className=a6
for(a3=C.a.gK(r);a3.q();)c.appendChild(a3.gB(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
e8:function(){var t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
t=L.hL()
t.d=t.i(0,q)
s=t.i(0,q).l(0,p)
r=K.m(new H.k("*"))
s.a.push(r)
s.c=!0
s=t.i(0,p).l(0,p)
r=new K.W()
r.a=[]
s.a.push(r)
s=K.m(new H.k("*"))
r.a.push(s)
s=t.i(0,p).l(0,"BoldEnd")
r=K.m(new H.k("*"))
s.a.push(r)
s.c=!0
s=t.i(0,q).l(0,o)
r=K.m(new H.k("_"))
s.a.push(r)
s.c=!0
s=t.i(0,o).l(0,o)
r=new K.W()
r.a=[]
s.a.push(r)
s=K.m(new H.k("_"))
r.a.push(s)
s=t.i(0,o).l(0,n)
r=K.m(new H.k("_"))
s.a.push(r)
s.c=!0
s=t.i(0,q).l(0,m)
r=K.m(new H.k("`"))
s.a.push(r)
s.c=!0
s=t.i(0,m).l(0,m)
r=new K.W()
r.a=[]
s.a.push(r)
s=K.m(new H.k("`"))
r.a.push(s)
s=t.i(0,m).l(0,"CodeEnd")
r=K.m(new H.k("`"))
s.a.push(r)
s.c=!0
s=t.i(0,q).l(0,l)
r=K.m(new H.k("["))
s.a.push(r)
s.c=!0
s=t.i(0,l).l(0,k)
r=K.m(new H.k("|"))
s.a.push(r)
r=t.i(0,l).l(0,j)
s=K.m(new H.k("]"))
r.a.push(s)
r.c=!0
r=t.i(0,l).l(0,l)
s=new K.W()
s.a=[]
r.a.push(s)
r=K.m(new H.k("|]"))
s.a.push(r)
r=t.i(0,k).l(0,j)
s=K.m(new H.k("]"))
r.a.push(s)
r.c=!0
r=t.i(0,k).l(0,k)
s=new K.W()
s.a=[]
r.a.push(s)
r=K.m(new H.k("|]"))
s.a.push(r)
t.i(0,q).l(0,i).a.push(new K.aq())
r=t.i(0,i).l(0,i)
s=new K.W()
s.a=[]
r.a.push(s)
r=K.m(new H.k("*_`["))
s.a.push(r)
r=t.i(0,"BoldEnd")
r.d=r.a.G(p)
r=t.i(0,n)
r.d=r.a.G(o)
r=t.i(0,"CodeEnd")
r.d=r.a.G(m)
r=t.i(0,j)
r.d=r.a.G("Link")
r=t.i(0,i)
r.d=r.a.G(i)
this.b=t}}
V.hw.prototype={
$1:function(a){P.kc(C.i,new V.hv(this.a))}}
V.hv.prototype={
$0:function(){var t=C.d.a5(document.documentElement.scrollTop),s=this.a.style,r=H.d(-0.01*t)+"px"
s.top=r}}
V.hx.prototype={
$1:function(a){return a.a===this.a}}
D.iR.prototype={
$1:function(a){var t=this.a,s=this.b,r=s.a
t.c2("Vertex Shader","glsl",0,(r==null?null:r.c).split("\n"))
s=s.a
t.c2("Fragment Shader","glsl",0,(s==null?null:s.d).split("\n"))}};(function aliases(){var t=J.a.prototype
t.cH=t.h
t=J.aX.prototype
t.cJ=t.h
t=P.f.prototype
t.cI=t.aW
t=W.u.prototype
t.b_=t.a2
t=W.cz.prototype
t.cK=t.a9
t=K.de.prototype
t.cG=t.af
t.bI=t.h})();(function installTearOffs(){var t=hunkHelpers._static_2,s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
t(J,"mA","lz",17)
s(P,"mV","lY",6)
s(P,"mW","lZ",6)
s(P,"mX","m_",6)
r(P,"kG","mQ",7)
s(W,"or","fI",18)
q(W,"n9",4,null,["$4"],["m2"],11,0)
q(W,"na",4,null,["$4"],["m3"],11,0)
var k
p(k=E.bj.prototype,"gcl",0,0,null,["$1","$0"],["cm","eP"],1,0)
p(k,"gcj",0,0,null,["$1","$0"],["ck","eO"],1,0)
p(k,"gcg",0,0,null,["$1","$0"],["ci","eL"],1,0)
o(k,"geJ","eK",3)
o(k,"geM","eN",3)
p(k=E.e4.prototype,"gbK",0,0,null,["$1","$0"],["bM","bL"],1,0)
n(k,"gf1","cr",7)
m(k=X.ef.prototype,"gdB","dC",4)
m(k,"gdl","dm",4)
m(k,"gdt","du",2)
m(k,"gdF","dG",8)
m(k,"gdD","dE",8)
m(k,"gdI","dJ",2)
m(k,"gdM","dN",2)
m(k,"gdz","dA",2)
m(k,"gdK","dL",2)
m(k,"gdv","dw",2)
m(k,"gdO","dP",16)
m(k,"gdQ","dR",4)
m(k,"gdZ","e_",5)
m(k,"gdV","dW",5)
m(k,"gdX","dY",5)
l(V.X.prototype,"gk","bt",9)
l(V.I.prototype,"gk","bt",9)
p(k=U.bk.prototype,"gaq",0,0,null,["$1","$0"],["H","W"],1,0)
o(k,"gdj","dk",10)
o(k,"gdT","dU",10)
p(k=U.cm.prototype,"gaq",0,0,null,["$1","$0"],["H","W"],1,0)
m(k,"gb9","ba",0)
m(k,"gbb","bc",0)
m(k,"gbd","be",0)
p(k=U.cn.prototype,"gaq",0,0,null,["$1","$0"],["H","W"],1,0)
m(k,"gb9","ba",0)
m(k,"gbb","bc",0)
m(k,"gbd","be",0)
m(k,"gdc","dd",0)
m(k,"gde","df",0)
m(k,"gef","eg",0)
m(k,"ged","ee",0)
m(k,"geb","ec",0)
m(U.co.prototype,"gdh","di",0)
p(k=M.d7.prototype,"ga6",0,0,null,["$1","$0"],["aa","cS"],1,0)
o(k,"gdn","dq",3)
o(k,"gdr","ds",3)
p(O.dA.prototype,"gbN",0,0,null,["$1","$0"],["b0","bO"],1,0)
p(X.dG.prototype,"gbP",0,0,null,["$1","$0"],["an","cW"],1,0)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.E,null)
r(P.E,[H.j4,J.a,J.a_,P.cs,P.f,H.au,P.dh,H.bY,H.ed,H.hP,P.A,H.hf,H.eW,H.bh,P.ai,H.h1,H.dm,H.fY,H.a9,H.ey,P.cF,P.bF,P.bb,P.ek,P.dY,P.dZ,P.ck,P.iF,P.cy,P.it,P.cr,P.v,P.d0,P.fW,P.iD,P.bc,P.a3,P.M,P.aR,P.dF,P.ci,P.ev,P.fR,P.fT,P.c5,P.dn,P.a7,P.F,P.by,W.fz,W.j0,W.jf,W.bE,W.x,W.cg,W.cz,W.f0,W.bZ,W.a6,W.ix,W.fa,P.cH,P.eP,K.aq,K.de,K.hi,K.hp,L.dX,L.e5,L.e6,L.hK,O.bi,O.cb,E.fu,E.bj,E.bg,E.bt,E.ip,E.hj,E.e4,Z.ei,Z.ih,Z.cZ,Z.c_,Z.b9,D.fw,D.bX,D.N,X.d_,X.dk,X.h_,X.h3,X.a5,X.ha,X.hM,X.ef,V.aP,V.fK,V.dq,V.dr,V.aj,V.b3,V.dK,V.dO,V.X,V.I,U.cm,U.cn,U.co,M.d7,A.fp,A.fq,A.bP,A.he,A.hR,A.i0,F.fO,F.h0,F.hg,F.hq,F.hr,F.hs,F.ht,F.i7,F.i8,F.i9,F.ic,F.id,O.hD,T.hG,X.iX,X.hB,X.dG,V.aO,V.hu])
r(J.a,[J.fX,J.c3,J.aX,J.a4,J.aW,J.ah,H.cd,W.b,W.fn,W.cY,W.ag,W.z,W.eo,W.a2,W.fC,W.fD,W.ep,W.bU,W.er,W.fE,W.h,W.ew,W.aT,W.fU,W.eB,W.aV,W.h2,W.h5,W.eF,W.eG,W.b_,W.eH,W.eJ,W.b1,W.eN,W.eQ,W.b4,W.eR,W.b5,W.eX,W.ay,W.f2,W.hJ,W.b6,W.f4,W.hN,W.i4,W.fb,W.fd,W.ff,W.fh,W.fj,P.bo,P.eD,P.bs,P.eL,P.hh,P.eY,P.bA,P.f6,P.fr,P.el,P.dP,P.eU])
r(J.aX,[J.dH,J.b8,J.ac])
s(J.di,J.a4)
r(J.aW,[J.c2,J.c1])
s(P.c6,P.cs)
r(P.c6,[H.bB,W.em,W.R,P.db])
s(H.k,H.bB)
r(P.f,[H.i,H.aZ,H.ba,P.c0])
r(H.i,[H.c7,H.at])
s(H.bV,H.aZ)
r(P.dh,[H.c9,H.ej])
s(H.ca,H.c7)
r(P.A,[H.dB,H.dj,H.ec,H.dQ,H.et,P.cW,P.dC,P.Z,P.ee,P.eb,P.bx,P.d1,P.d3])
r(H.bh,[H.hC,H.fZ,H.iM,H.iN,H.iO,P.ij,P.ii,P.ik,P.il,P.iC,P.iB,P.iI,P.iv,P.iw,P.h4,P.fF,P.fG,W.fH,W.h7,W.h9,W.ho,W.hA,W.iq,W.hc,W.hb,W.iy,W.iz,W.iA,W.iE,P.iJ,P.fP,P.fQ,P.ft,E.hk,E.hl,E.hm,E.hI,D.fM,D.fN,F.iG,F.ig,F.ie,F.ia,F.ib,T.hH,V.iT,V.hw,V.hv,V.hx,D.iR])
r(H.hC,[H.hy,H.bO])
s(P.dp,P.ai)
r(P.dp,[H.O,W.im])
s(H.br,H.cd)
r(H.br,[H.cu,H.cw])
s(H.cv,H.cu)
s(H.b0,H.cv)
s(H.cx,H.cw)
s(H.cc,H.cx)
r(H.cc,[H.du,H.dv,H.dw,H.dx,H.dy,H.ce,H.dz])
s(H.cG,H.et)
s(P.cC,P.c0)
s(P.iu,P.iF)
s(P.cq,P.cy)
s(P.d2,P.dZ)
s(P.fJ,P.d0)
r(P.d2,[P.fV,P.i6])
s(P.i5,P.fJ)
r(P.M,[P.T,P.q])
r(P.Z,[P.bv,P.dg])
r(W.b,[W.p,W.da,W.ax,W.cA,W.az,W.ad,W.cD,W.eh,W.bC,P.cX,P.ar])
r(W.p,[W.u,W.ab,W.bD])
r(W.u,[W.l,P.j])
r(W.l,[W.cU,W.cV,W.bf,W.aM,W.aN,W.bS,W.dc,W.bl,W.dR,W.cj,W.e0,W.e1,W.bz])
s(W.fy,W.ag)
s(W.bR,W.eo)
r(W.a2,[W.fA,W.fB])
s(W.eq,W.ep)
s(W.bT,W.eq)
s(W.es,W.er)
s(W.d6,W.es)
s(W.aS,W.cY)
s(W.ex,W.ew)
s(W.d9,W.ex)
s(W.eC,W.eB)
s(W.aU,W.eC)
s(W.al,W.h)
r(W.al,[W.aY,W.a0,W.b7])
s(W.h6,W.eF)
s(W.h8,W.eG)
s(W.eI,W.eH)
s(W.dt,W.eI)
s(W.eK,W.eJ)
s(W.cf,W.eK)
s(W.eO,W.eN)
s(W.dJ,W.eO)
s(W.hn,W.eQ)
s(W.cB,W.cA)
s(W.dU,W.cB)
s(W.eS,W.eR)
s(W.dV,W.eS)
s(W.hz,W.eX)
s(W.f3,W.f2)
s(W.e2,W.f3)
s(W.cE,W.cD)
s(W.e3,W.cE)
s(W.f5,W.f4)
s(W.e7,W.f5)
s(W.aA,W.a0)
s(W.fc,W.fb)
s(W.en,W.fc)
s(W.cp,W.bU)
s(W.fe,W.fd)
s(W.ez,W.fe)
s(W.fg,W.ff)
s(W.ct,W.fg)
s(W.fi,W.fh)
s(W.eT,W.fi)
s(W.fk,W.fj)
s(W.f_,W.fk)
s(W.io,W.im)
s(W.eu,P.dY)
s(W.f1,W.cz)
s(P.a8,P.eP)
s(P.eE,P.eD)
s(P.dl,P.eE)
s(P.eM,P.eL)
s(P.dD,P.eM)
s(P.bw,P.j)
s(P.eZ,P.eY)
s(P.e_,P.eZ)
s(P.f7,P.f6)
s(P.e8,P.f7)
s(P.fs,P.el)
s(P.dE,P.ar)
s(P.eV,P.eU)
s(P.dW,P.eV)
r(K.de,[K.W,L.hO])
r(E.fu,[Z.fv,A.dS,T.hE])
r(D.N,[D.bm,D.bn,D.w,X.dL])
r(X.dL,[X.c8,X.bp,X.bq,X.cl])
r(D.fw,[U.fx,U.Q])
s(U.bQ,U.Q)
s(U.bk,O.bi)
s(A.hd,A.dS)
r(A.hR,[A.hT,A.hW,A.hY,A.i_,A.hU,A.hS,A.hV,A.hX,A.hZ,A.i1,A.i2,A.e9,A.i3,A.ea])
s(O.dA,O.hD)
s(T.hF,T.hE)
s(X.fS,X.hB)
r(V.aO,[V.d4,V.dd,V.df,V.dI])
t(H.bB,H.ed)
t(H.cu,P.v)
t(H.cv,H.bY)
t(H.cw,P.v)
t(H.cx,H.bY)
t(P.cs,P.v)
t(W.eo,W.fz)
t(W.ep,P.v)
t(W.eq,W.x)
t(W.er,P.v)
t(W.es,W.x)
t(W.ew,P.v)
t(W.ex,W.x)
t(W.eB,P.v)
t(W.eC,W.x)
t(W.eF,P.ai)
t(W.eG,P.ai)
t(W.eH,P.v)
t(W.eI,W.x)
t(W.eJ,P.v)
t(W.eK,W.x)
t(W.eN,P.v)
t(W.eO,W.x)
t(W.eQ,P.ai)
t(W.cA,P.v)
t(W.cB,W.x)
t(W.eR,P.v)
t(W.eS,W.x)
t(W.eX,P.ai)
t(W.f2,P.v)
t(W.f3,W.x)
t(W.cD,P.v)
t(W.cE,W.x)
t(W.f4,P.v)
t(W.f5,W.x)
t(W.fb,P.v)
t(W.fc,W.x)
t(W.fd,P.v)
t(W.fe,W.x)
t(W.ff,P.v)
t(W.fg,W.x)
t(W.fh,P.v)
t(W.fi,W.x)
t(W.fj,P.v)
t(W.fk,W.x)
t(P.eD,P.v)
t(P.eE,W.x)
t(P.eL,P.v)
t(P.eM,W.x)
t(P.eY,P.v)
t(P.eZ,W.x)
t(P.f6,P.v)
t(P.f7,W.x)
t(P.el,P.ai)
t(P.eU,P.v)
t(P.eV,W.x)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",T:"double",M:"num",F:"String",bc:"bool",a7:"Null",c5:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(N*)","~([N*])","~(a0*)","~(q*,f<bj*>*)","~(h*)","~(b7*)","~(~())","~()","~(aY*)","T*()","~(q*,f<Q*>*)","bc(u,F,F,bE)","@(@)","a7(@)","a7(E?,E?)","a7(@,@)","~(aA*)","q(@,@)","F(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mm(v.typeUniverse,JSON.parse('{"ac":"aX","dH":"aX","b8":"aX","nr":"h","nB":"h","nt":"ar","ns":"b","nH":"b","nJ":"b","nq":"j","nC":"j","nu":"l","nF":"l","nD":"p","nA":"p","o6":"ad","ny":"al","nv":"ab","nK":"ab","nI":"a0","nE":"aU","nG":"b0","a4":{"i":["1"],"f":["1"]},"di":{"i":["1"],"f":["1"]},"aW":{"T":[],"M":[]},"c2":{"T":[],"q":[],"M":[]},"c1":{"T":[],"M":[]},"ah":{"F":[]},"k":{"i":["q"],"f":["q"]},"i":{"f":["1"]},"c7":{"i":["1"],"f":["1"]},"aZ":{"f":["2"]},"bV":{"i":["2"],"f":["2"]},"ca":{"i":["2"],"f":["2"]},"ba":{"f":["1"]},"bB":{"i":["1"],"f":["1"]},"dB":{"A":[]},"dj":{"A":[]},"ec":{"A":[]},"dQ":{"A":[]},"at":{"i":["1"],"f":["1"]},"br":{"o":["1"]},"b0":{"o":["T"],"i":["T"],"f":["T"]},"cc":{"o":["q"],"i":["q"],"f":["q"]},"du":{"o":["q"],"i":["q"],"f":["q"]},"dv":{"o":["q"],"i":["q"],"f":["q"]},"dw":{"o":["q"],"i":["q"],"f":["q"]},"dx":{"o":["q"],"i":["q"],"f":["q"]},"dy":{"o":["q"],"i":["q"],"f":["q"]},"ce":{"o":["q"],"i":["q"],"f":["q"]},"dz":{"o":["q"],"i":["q"],"f":["q"]},"et":{"A":[]},"cG":{"A":[]},"cF":{"ck":[]},"cC":{"f":["1"]},"cq":{"i":["1"],"f":["1"]},"c0":{"f":["1"]},"c6":{"i":["1"],"f":["1"]},"cy":{"i":["1"],"f":["1"]},"T":{"M":[]},"cW":{"A":[]},"dC":{"A":[]},"Z":{"A":[]},"bv":{"A":[]},"dg":{"A":[]},"ee":{"A":[]},"eb":{"A":[]},"bx":{"A":[]},"d1":{"A":[]},"dF":{"A":[]},"ci":{"A":[]},"d3":{"A":[]},"q":{"M":[]},"c5":{"i":["1"],"f":["1"]},"l":{"u":[],"p":[],"b":[]},"cU":{"u":[],"p":[],"b":[]},"cV":{"u":[],"p":[],"b":[]},"bf":{"u":[],"p":[],"b":[]},"aM":{"u":[],"p":[],"b":[]},"aN":{"u":[],"p":[],"b":[]},"ab":{"p":[],"b":[]},"bS":{"u":[],"p":[],"b":[]},"bT":{"o":["a8<M>"],"i":["a8<M>"],"f":["a8<M>"]},"bU":{"a8":["M"]},"d6":{"o":["F"],"i":["F"],"f":["F"]},"em":{"i":["u"],"f":["u"]},"u":{"p":[],"b":[]},"d9":{"o":["aS"],"i":["aS"],"f":["aS"]},"da":{"b":[]},"dc":{"u":[],"p":[],"b":[]},"aU":{"o":["p"],"i":["p"],"f":["p"]},"bl":{"u":[],"p":[],"b":[]},"aY":{"h":[]},"dt":{"o":["b_"],"i":["b_"],"f":["b_"]},"a0":{"h":[]},"R":{"i":["p"],"f":["p"]},"p":{"b":[]},"cf":{"o":["p"],"i":["p"],"f":["p"]},"dJ":{"o":["b1"],"i":["b1"],"f":["b1"]},"dR":{"u":[],"p":[],"b":[]},"ax":{"b":[]},"dU":{"o":["ax"],"b":[],"i":["ax"],"f":["ax"]},"dV":{"o":["b4"],"i":["b4"],"f":["b4"]},"cj":{"u":[],"p":[],"b":[]},"e0":{"u":[],"p":[],"b":[]},"e1":{"u":[],"p":[],"b":[]},"bz":{"u":[],"p":[],"b":[]},"az":{"b":[]},"ad":{"b":[]},"e2":{"o":["ad"],"i":["ad"],"f":["ad"]},"e3":{"o":["az"],"b":[],"i":["az"],"f":["az"]},"b7":{"h":[]},"e7":{"o":["b6"],"i":["b6"],"f":["b6"]},"al":{"h":[]},"eh":{"b":[]},"aA":{"a0":[],"h":[]},"bC":{"b":[]},"bD":{"p":[],"b":[]},"en":{"o":["z"],"i":["z"],"f":["z"]},"cp":{"a8":["M"]},"ez":{"o":["aT?"],"i":["aT?"],"f":["aT?"]},"ct":{"o":["p"],"i":["p"],"f":["p"]},"eT":{"o":["b5"],"i":["b5"],"f":["b5"]},"f_":{"o":["ay"],"i":["ay"],"f":["ay"]},"bE":{"a6":[]},"cg":{"a6":[]},"cz":{"a6":[]},"f1":{"a6":[]},"f0":{"a6":[]},"cH":{"aV":[]},"db":{"i":["u"],"f":["u"]},"a8":{"eP":["1"]},"dl":{"i":["bo"],"f":["bo"]},"dD":{"i":["bs"],"f":["bs"]},"bw":{"j":[],"u":[],"p":[],"b":[]},"e_":{"i":["F"],"f":["F"]},"j":{"u":[],"p":[],"b":[]},"e8":{"i":["bA"],"f":["bA"]},"cX":{"b":[]},"ar":{"b":[]},"dE":{"b":[]},"dW":{"i":["dn<@,@>"],"f":["dn<@,@>"]},"bi":{"f":["1*"]},"bm":{"N":[]},"bn":{"N":[]},"w":{"N":[]},"c8":{"N":[]},"bp":{"N":[]},"bq":{"N":[]},"dL":{"N":[]},"cl":{"N":[]},"bQ":{"Q":[]},"bk":{"Q":[],"f":["Q*"]},"cm":{"Q":[]},"cn":{"Q":[]},"co":{"Q":[]},"d4":{"aO":[]},"dd":{"aO":[]},"df":{"aO":[]},"dI":{"aO":[]}}'))
H.ml(v.typeUniverse,JSON.parse('{"a4":1,"di":1,"a_":1,"i":1,"c7":1,"au":1,"aZ":2,"bV":2,"c9":2,"ca":2,"ba":1,"ej":1,"bY":1,"ed":1,"bB":1,"at":1,"dm":1,"br":1,"bb":1,"cC":1,"dY":1,"dZ":2,"cr":1,"c0":1,"c6":1,"v":1,"dp":2,"ai":2,"cy":1,"cs":1,"d0":2,"d2":2,"f":1,"dh":1,"c5":1,"eu":1,"x":1,"bZ":1,"bi":1,"bm":1,"bn":1,"w":1}'))
0
var u=(function rtii(){var t=H.n5
return{y:t("bf"),t:t("aM"),O:t("i<@>"),h:t("u"),C:t("A"),D:t("h"),Z:t("fT"),I:t("aV"),R:t("bl"),b:t("a4<@>"),T:t("c3"),g:t("ac"),p:t("o<@>"),G:t("O<F*,dS*>"),V:t("O<F*,dX*>"),i:t("O<F*,F*>"),w:t("O<F*,e6*>"),E:t("O<q*,bc*>"),P:t("a7"),K:t("E"),q:t("a8<M>"),Y:t("bw"),N:t("F"),u:t("j"),f:t("bz"),L:t("ck"),o:t("b8"),x:t("bD"),v:t("bc"),W:t("T"),z:t("@"),S:t("q"),B:t("aN*"),J:t("c8*"),c:t("bp*"),F:t("bq*"),A:t("0&*"),_:t("E*"),U:t("F*"),j:t("e5*"),m:t("cl*"),M:t("e9*"),Q:t("ea*"),e:t("q*"),a:t("jQ<a7>?"),X:t("E?"),H:t("M")}})();(function constants(){var t=hunkHelpers.makeConstList
C.l=W.aM.prototype
C.f=W.aN.prototype
C.H=W.bS.prototype
C.K=J.a.prototype
C.a=J.a4.prototype
C.L=J.c1.prototype
C.c=J.c2.prototype
C.M=J.c3.prototype
C.d=J.aW.prototype
C.b=J.ah.prototype
C.N=J.ac.prototype
C.t=J.dH.prototype
C.V=P.dP.prototype
C.u=W.cj.prototype
C.k=J.b8.prototype
C.v=W.aA.prototype
C.w=W.bC.prototype
C.x=new E.bg("Browser.chrome")
C.m=new E.bg("Browser.firefox")
C.n=new E.bg("Browser.edge")
C.y=new E.bg("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.F=new P.dF()
C.h=new P.i5()
C.G=new P.i6()
C.e=new P.iu()
C.i=new P.aR(0)
C.I=new P.aR(5e6)
C.J=new P.fW("element",!1,!1,!1)
C.O=t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=t([])
C.q=t([0,0,65498,45055,65535,34815,65534,18431])
C.r=t(["bind","if","ref","repeat","syntax"])
C.j=t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bt("OperatingSystem.windows")
C.S=new E.bt("OperatingSystem.mac")
C.T=new E.bt("OperatingSystem.linux")
C.U=new E.bt("OperatingSystem.other")
C.W=new P.bF(null,2)})();(function staticFields(){$.kn=null
$.af=0
$.jH=null
$.jG=null
$.kH=null
$.kF=null
$.kM=null
$.iK=null
$.iP=null
$.ju=null
$.bG=null
$.cN=null
$.cO=null
$.jp=!1
$.ae=C.e
$.Y=[]
$.as=null
$.j_=null
$.jN=null
$.jM=null
$.eA=P.jT(u.N,u.Z)
$.jO=null
$.jW=null
$.jX=null
$.k0=null
$.k1=null
$.k6=null
$.kg=null
$.kj=null
$.ki=null
$.kh=null
$.k_=null})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"nz","kS",function(){return H.n8("_$dart_dartClosure")})
t($,"nL","kT",function(){return H.ak(H.hQ({
toString:function(){return"$receiver$"}}))})
t($,"nM","kU",function(){return H.ak(H.hQ({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"nN","kV",function(){return H.ak(H.hQ(null))})
t($,"nO","kW",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"nR","kZ",function(){return H.ak(H.hQ(void 0))})
t($,"nS","l_",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"nQ","kY",function(){return H.ak(H.ke(null))})
t($,"nP","kX",function(){return H.ak(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"nU","l1",function(){return H.ak(H.ke(void 0))})
t($,"nT","l0",function(){return H.ak(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"o7","jA",function(){return P.lX()})
t($,"oa","l6",function(){return P.lN("^[\\-\\.0-9A-Z_a-z~]*$")})
t($,"o8","l5",function(){return P.jU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"o0","l4",function(){return Z.aa(0)})
t($,"nV","l2",function(){return Z.aa(511)})
t($,"o2","aI",function(){return Z.aa(1)})
t($,"o1","aH",function(){return Z.aa(2)})
t($,"nX","aG",function(){return Z.aa(4)})
t($,"o3","bM",function(){return Z.aa(8)})
t($,"o4","aJ",function(){return Z.aa(16)})
t($,"nY","cS",function(){return Z.aa(32)})
t($,"nZ","cT",function(){return Z.aa(64)})
t($,"o_","l3",function(){return Z.aa(96)})
t($,"o5","bN",function(){return Z.aa(128)})
t($,"nW","bL",function(){return Z.aa(256)})
t($,"nx","kR",function(){return new V.fK()})
t($,"nw","y",function(){return $.kR()})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cd,ArrayBufferView:H.cd,Float32Array:H.b0,Float64Array:H.b0,Int16Array:H.du,Int32Array:H.dv,Int8Array:H.dw,Uint16Array:H.dx,Uint32Array:H.dy,Uint8ClampedArray:H.ce,CanvasPixelArray:H.ce,Uint8Array:H.dz,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fn,HTMLAnchorElement:W.cU,HTMLAreaElement:W.cV,HTMLBaseElement:W.bf,Blob:W.cY,HTMLBodyElement:W.aM,HTMLCanvasElement:W.aN,CDATASection:W.ab,CharacterData:W.ab,Comment:W.ab,ProcessingInstruction:W.ab,Text:W.ab,CSSPerspective:W.fy,CSSCharsetRule:W.z,CSSConditionRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.a2,CSSKeywordValue:W.a2,CSSNumericValue:W.a2,CSSPositionValue:W.a2,CSSResourceValue:W.a2,CSSUnitValue:W.a2,CSSURLImageValue:W.a2,CSSStyleValue:W.a2,CSSMatrixComponent:W.ag,CSSRotation:W.ag,CSSScale:W.ag,CSSSkew:W.ag,CSSTranslation:W.ag,CSSTransformComponent:W.ag,CSSTransformValue:W.fA,CSSUnparsedValue:W.fB,DataTransferItemList:W.fC,HTMLDivElement:W.bS,DOMException:W.fD,ClientRectList:W.bT,DOMRectList:W.bT,DOMRectReadOnly:W.bU,DOMStringList:W.d6,DOMTokenList:W.fE,Element:W.u,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aS,FileList:W.d9,FileWriter:W.da,HTMLFormElement:W.dc,Gamepad:W.aT,History:W.fU,HTMLCollection:W.aU,HTMLFormControlsCollection:W.aU,HTMLOptionsCollection:W.aU,ImageData:W.aV,HTMLImageElement:W.bl,KeyboardEvent:W.aY,Location:W.h2,MediaList:W.h5,MIDIInputMap:W.h6,MIDIOutputMap:W.h8,MimeType:W.b_,MimeTypeArray:W.dt,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,Document:W.p,DocumentFragment:W.p,HTMLDocument:W.p,ShadowRoot:W.p,XMLDocument:W.p,DocumentType:W.p,Node:W.p,NodeList:W.cf,RadioNodeList:W.cf,Plugin:W.b1,PluginArray:W.dJ,RTCStatsReport:W.hn,HTMLSelectElement:W.dR,SourceBuffer:W.ax,SourceBufferList:W.dU,SpeechGrammar:W.b4,SpeechGrammarList:W.dV,SpeechRecognitionResult:W.b5,Storage:W.hz,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableElement:W.cj,HTMLTableRowElement:W.e0,HTMLTableSectionElement:W.e1,HTMLTemplateElement:W.bz,TextTrack:W.az,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.e2,TextTrackList:W.e3,TimeRanges:W.hJ,Touch:W.b6,TouchEvent:W.b7,TouchList:W.e7,TrackDefaultList:W.hN,CompositionEvent:W.al,FocusEvent:W.al,TextEvent:W.al,UIEvent:W.al,URL:W.i4,VideoTrackList:W.eh,WheelEvent:W.aA,Window:W.bC,DOMWindow:W.bC,Attr:W.bD,CSSRuleList:W.en,ClientRect:W.cp,DOMRect:W.cp,GamepadList:W.ez,NamedNodeMap:W.ct,MozNamedAttrMap:W.ct,SpeechRecognitionResultList:W.eT,StyleSheetList:W.f_,SVGLength:P.bo,SVGLengthList:P.dl,SVGNumber:P.bs,SVGNumberList:P.dD,SVGPointList:P.hh,SVGScriptElement:P.bw,SVGStringList:P.e_,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bA,SVGTransformList:P.e8,AudioBuffer:P.fr,AudioParamMap:P.fs,AudioTrackList:P.cX,AudioContext:P.ar,webkitAudioContext:P.ar,BaseAudioContext:P.ar,OfflineAudioContext:P.dE,WebGL2RenderingContext:P.dP,SQLResultSetRowList:P.dW})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.br.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.b0.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.kK,[])
else D.kK([])})})()
//# sourceMappingURL=test.dart.js.map
