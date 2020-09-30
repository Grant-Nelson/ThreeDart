(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=='function')n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.ob(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jX(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=='string')q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={jB:function jB(){},
m6:function(a,b){if(t.R.b(a))return new H.c0(a,b)
return new H.b7(a,b)},
hg:function(){return new P.bH("No element")},
m0:function(){return new P.bH("Too many elements")},
mq:function(a,b){var s=J.aV(a)
if(typeof s!=="number")return s.W()
H.dW(a,0,s-1,b)},
dW:function(a,b,c,d){if(c-b<=32)H.mp(a,b,c,d)
else H.mo(a,b,c,d)},
mp:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bl(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.V()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mo:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.X(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.X(a6+a7,2),d=e-h,c=e+h,b=J.bl(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.V()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.D(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a4()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.V()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
q=m
r=l
break}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.a4()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.V()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.V()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a4()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.m(a5,a6,b.h(a5,a4))
b.m(a5,a4,a0)
a4=q+1
b.m(a5,a7,b.h(a5,a4))
b.m(a5,a4,a2)
H.dW(a5,a6,r-2,a8)
H.dW(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.D(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.D(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a4()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.dW(a5,r,q,a8)}else H.dW(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
ca:function ca(){},
aE:function aE(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b7:function b7(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=null
this.b=a
this.c=b},
cd:function cd(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
c2:function c2(){},
eq:function eq(){},
bK:function bK(){},
lm:function(a){var s,r=H.ll(a)
if(r!=null)return r
s="minified:"+a
return s},
o3:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ad(a)
if(typeof s!="string")throw H.c(H.bk(a))
return s},
ck:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dQ:function(a){return H.m9(a)},
m9:function(a){var s,r,q
if(a instanceof P.J)return H.a3(H.cU(a),null)
if(J.cT(a)===C.M||t.o.b(a)){s=C.p(a)
if(H.kx(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kx(q))return q}}return H.a3(H.cU(a),null)},
kx:function(a){var s=a!=="Object"&&a!==""
return s},
kw:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mi:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.cP(q))throw H.c(H.bk(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.bk(q))}return H.kw(p)},
mh:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cP(q))throw H.c(H.bk(q))
if(q<0)throw H.c(H.bk(q))
if(q>65535)return H.mi(a)}return H.kw(a)},
jF:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.b2(s,10))>>>0,56320|s&1023)}throw H.c(P.aF(a,0,1114111,null,null))},
bE:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mg:function(a){var s=H.bE(a).getFullYear()+0
return s},
me:function(a){var s=H.bE(a).getMonth()+1
return s},
ma:function(a){var s=H.bE(a).getDate()+0
return s},
mb:function(a){var s=H.bE(a).getHours()+0
return s},
md:function(a){var s=H.bE(a).getMinutes()+0
return s},
mf:function(a){var s=H.bE(a).getSeconds()+0
return s},
mc:function(a){var s=H.bE(a).getMilliseconds()+0
return s},
q:function(a){throw H.c(H.bk(a))},
e:function(a,b){if(a==null)J.aV(a)
throw H.c(H.bS(a,b))},
bS:function(a,b){var s,r,q="index"
if(!H.cP(b))return new P.a1(!0,b,q,null)
s=J.aV(a)
if(!(b<0)){if(typeof s!=="number")return H.q(s)
r=b>=s}else r=!0
if(r)return P.H(b,a,q,null,s)
return P.dR(b,q)},
nS:function(a,b,c){if(a>c)return P.aF(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aF(b,a,c,"end",null)
return new P.a1(!0,b,"end",null)},
bk:function(a){return new P.a1(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dH()
s=new Error()
s.dartException=a
r=H.oc
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oc:function(){return J.ad(this.dartException)},
p:function(a){throw H.c(a)},
n:function(a){throw H.c(P.b_(a))},
as:function(a){var s,r,q,p,o,n
a=H.lj(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.im(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
io:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kH:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ks:function(a,b){return new H.dG(a,b==null?null:b.method)},
jC:function(a,b){var s=b==null,r=s?null:b.method
return new H.dp(a,r,s?null:b.receiver)},
ax:function(a){if(a==null)return new H.hO(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bm(a,a.dartException)
return H.nL(a)},
bm:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nL:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b2(r,16)&8191)===10)switch(q){case 438:return H.bm(a,H.jC(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bm(a,H.ks(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lp()
o=$.lq()
n=$.lr()
m=$.ls()
l=$.lv()
k=$.lw()
j=$.lu()
$.lt()
i=$.ly()
h=$.lx()
g=p.a8(s)
if(g!=null)return H.bm(a,H.jC(s,g))
else{g=o.a8(s)
if(g!=null){g.method="call"
return H.bm(a,H.jC(s,g))}else{g=n.a8(s)
if(g==null){g=m.a8(s)
if(g==null){g=l.a8(s)
if(g==null){g=k.a8(s)
if(g==null){g=j.a8(s)
if(g==null){g=m.a8(s)
if(g==null){g=i.a8(s)
if(g==null){g=h.a8(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bm(a,H.ks(s,g))}}return H.bm(a,new H.ep(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cl()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bm(a,new P.a1(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cl()
return a},
jZ:function(a){var s
if(a==null)return new H.f8(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f8(a)},
nU:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
o2:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o2)
a.$identity=s
return s},
lU:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i8().constructor.prototype):Object.create(new H.bV(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ai
if(typeof r!=="number")return r.v()
$.ai=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kf(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lQ(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kf(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lQ:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.le,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lO:H.lN
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lR:function(a,b,c,d){var s=H.kd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kf:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lT(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lR(r,!p,s,b)
if(r===0){p=$.ai
if(typeof p!=="number")return p.v()
$.ai=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jt())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ai
if(typeof p!=="number")return p.v()
$.ai=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jt())+"."+H.d(s)+"("+m+");}")()},
lS:function(a,b,c,d){var s=H.kd,r=H.lP
switch(b?-1:a){case 0:throw H.c(new H.dT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lT:function(a,b){var s,r,q,p,o,n,m=H.jt(),l=$.kb
if(l==null)l=$.kb=H.ka("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lS(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.ai
if(typeof o!=="number")return o.v()
$.ai=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.ai
if(typeof o!=="number")return o.v()
$.ai=o+1
return new Function(p+o+"}")()},
jX:function(a,b,c,d,e,f,g){return H.lU(a,b,c,d,!!e,!!f,g)},
lN:function(a,b){return H.fm(v.typeUniverse,H.cU(a.a),b)},
lO:function(a,b){return H.fm(v.typeUniverse,H.cU(a.c),b)},
kd:function(a){return a.a},
lP:function(a){return a.c},
jt:function(){var s=$.kc
return s==null?$.kc=H.ka("self"):s},
ka:function(a){var s,r,q,p=new H.bV("self","target","receiver","name"),o=J.jA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.k8("Field name "+a+" not found."))},
ob:function(a){throw H.c(new P.d8(a))},
nX:function(a){return v.getIsolateTag(a)},
pf:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o5:function(a){var s,r,q,p,o,n=$.ld.$1(a),m=$.jh[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jm[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.la.$2(a,n)
if(q!=null){m=$.jh[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jm[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jp(s)
$.jh[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jm[n]=s
return s}if(p==="-"){o=H.jp(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lh(a,s)
if(p==="*")throw H.c(P.kI(n))
if(v.leafTags[n]===true){o=H.jp(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lh(a,s)},
lh:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k0(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jp:function(a){return J.k0(a,!1,null,!!a.$it)},
o6:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jp(s)
else return J.k0(s,c,null,null)},
o0:function(){if(!0===$.k_)return
$.k_=!0
H.o1()},
o1:function(){var s,r,q,p,o,n,m,l
$.jh=Object.create(null)
$.jm=Object.create(null)
H.o_()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.li.$1(o)
if(n!=null){m=H.o6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
o_:function(){var s,r,q,p,o,n,m=C.B()
m=H.bQ(C.C,H.bQ(C.D,H.bQ(C.q,H.bQ(C.q,H.bQ(C.E,H.bQ(C.F,H.bQ(C.G(C.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ld=new H.jj(p)
$.la=new H.jk(o)
$.li=new H.jl(n)},
bQ:function(a,b){return a(b)||b},
m4:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h9("Illegal RegExp pattern ("+String(n)+")",a))},
lk:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nT:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k2:function(a,b,c){var s=H.o9(a,b,c)
return s},
o9:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lj(b),'g'),H.nT(c))},
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dG:function dG(a,b){this.a=a
this.b=b},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a){this.a=a},
hO:function hO(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
br:function br(){},
ic:function ic(){},
i8:function i8(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dT:function dT(a){this.a=a},
v:function v(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hj:function hj(a){this.a=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aD:function aD(a){this.a=a},
ds:function ds(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cN:function(a){return a},
au:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bS(b,a))},
mZ:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nS(a,b,c))
return b},
cg:function cg(){},
bB:function bB(){},
b9:function b9(){},
cf:function cf(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
ch:function ch(){},
dF:function dF(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
mm:function(a,b){var s=b.c
return s==null?b.c=H.jR(a,b.z,!0):s},
kB:function(a,b){var s=b.c
return s==null?b.c=H.cL(a,"kk",[b.z]):s},
kC:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kC(a.z)
return s===11||s===12},
ml:function(a){return a.cy},
nV:function(a){return H.jS(v.typeUniverse,a,!1)},
aN:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aN(a,s,a0,a1)
if(r===s)return b
return H.l0(a,r,!0)
case 7:s=b.z
r=H.aN(a,s,a0,a1)
if(r===s)return b
return H.jR(a,r,!0)
case 8:s=b.z
r=H.aN(a,s,a0,a1)
if(r===s)return b
return H.l_(a,r,!0)
case 9:q=b.Q
p=H.cS(a,q,a0,a1)
if(p===q)return b
return H.cL(a,b.z,p)
case 10:o=b.z
n=H.aN(a,o,a0,a1)
m=b.Q
l=H.cS(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jP(a,n,l)
case 11:k=b.z
j=H.aN(a,k,a0,a1)
i=b.Q
h=H.nI(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kZ(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cS(a,g,a0,a1)
o=b.z
n=H.aN(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jQ(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fC("Attempted to substitute unexpected RTI kind "+c))}},
cS:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aN(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nJ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aN(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nI:function(a,b,c,d){var s,r=b.a,q=H.cS(a,r,c,d),p=b.b,o=H.cS(a,p,c,d),n=b.c,m=H.nJ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eL()
s.a=q
s.b=o
s.c=m
return s},
ph:function(a,b){a[v.arrayRti]=b
return a},
nP:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.le(s)
return a.$S()}return null},
lf:function(a,b){var s
if(H.kC(b))if(a instanceof H.br){s=H.nP(a)
if(s!=null)return s}return H.cU(a)},
cU:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.jU(a)}if(Array.isArray(a))return H.mW(a)
return H.jU(J.cT(a))},
mW:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n4:function(a){var s=a.$ti
return s!=null?s:H.jU(a)},
jU:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n5(a,s)},
n5:function(a,b){var s=a instanceof H.br?a.__proto__.__proto__.constructor:b,r=H.mV(v.typeUniverse,s.name)
b.$ccache=r
return r},
le:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jS(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n3:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cO(q,a,H.n9)
if(!H.aw(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cO(q,a,H.nc)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cP
else if(s===t.l||s===t.H)r=H.n8
else if(s===t.N)r=H.na
else r=s===t.k?H.l6:null
if(r!=null)return H.cO(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.o4)){q.r="$i"+p
return H.cO(q,a,H.nb)}}else if(p===7)return H.cO(q,a,H.n1)
return H.cO(q,a,H.n_)},
cO:function(a,b,c){a.b=c
return a.b(b)},
n2:function(a){var s,r,q=this
if(!H.aw(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mY
else if(q===t.K)r=H.mX
else r=H.n0
q.a=r
return q.a(a)},
nB:function(a){var s,r=a.y
if(!H.aw(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
n_:function(a){var s=this
if(a==null)return H.nB(s)
return H.M(v.typeUniverse,H.lf(a,s),null,s,null)},
n1:function(a){if(a==null)return!0
return this.z.b(a)},
nb:function(a){var s=this,r=s.r
if(a instanceof P.J)return!!a[r]
return!!J.cT(a)[r]},
pe:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l4(a,s)},
n0:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l4(a,s)},
l4:function(a,b){throw H.c(H.mL(H.kR(a,H.lf(a,b),H.a3(b,null))))},
kR:function(a,b,c){var s=P.h1(a),r=H.a3(b==null?H.cU(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
mL:function(a){return new H.cK("TypeError: "+a)},
V:function(a,b){return new H.cK("TypeError: "+H.kR(a,null,b))},
n9:function(a){return a!=null},
mX:function(a){return a},
nc:function(a){return!0},
mY:function(a){return a},
l6:function(a){return!0===a||!1===a},
p0:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.V(a,"bool"))},
p2:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.V(a,"bool"))},
p1:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.V(a,"bool?"))},
p3:function(a){if(typeof a=="number")return a
throw H.c(H.V(a,"double"))},
p5:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"double"))},
p4:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"double?"))},
cP:function(a){return typeof a=="number"&&Math.floor(a)===a},
p6:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.V(a,"int"))},
p8:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.V(a,"int"))},
p7:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.V(a,"int?"))},
n8:function(a){return typeof a=="number"},
p9:function(a){if(typeof a=="number")return a
throw H.c(H.V(a,"num"))},
pb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"num"))},
pa:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"num?"))},
na:function(a){return typeof a=="string"},
pc:function(a){if(typeof a=="string")return a
throw H.c(H.V(a,"String"))},
jT:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.V(a,"String"))},
pd:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.V(a,"String?"))},
nE:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.v(r,H.a3(a[q],b))
return s},
l5:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.v(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.v(" extends ",H.a3(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a3(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.v(a3,H.a3(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.v(a3,H.a3(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.k4(H.a3(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
a3:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a3(a.z,b)
return s}if(l===7){r=a.z
s=H.a3(r,b)
q=r.y
return J.k4(q===11||q===12?C.b.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a3(a.z,b))+">"
if(l===9){p=H.nK(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nE(o,b)+">"):p}if(l===11)return H.l5(a,b,null)
if(l===12)return H.l5(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nK:function(a){var s,r=H.ll(a)
if(r!=null)return r
s="minified:"+a
return s},
l1:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mV:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jS(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cM(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cL(a,b,q)
n[b]=o
return o}else return m},
mT:function(a,b){return H.l3(a.tR,b)},
mS:function(a,b){return H.l3(a.eT,b)},
jS:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kX(H.kV(a,null,b,c))
r.set(b,s)
return s},
fm:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kX(H.kV(a,b,c,!0))
q.set(c,r)
return r},
mU:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jP(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aM:function(a,b){b.a=H.n2
b.b=H.n3
return b},
cM:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ab(null,null)
s.y=b
s.cy=c
r=H.aM(a,s)
a.eC.set(c,r)
return r},
l0:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mQ(a,b,r,c)
a.eC.set(r,s)
return s},
mQ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aw(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ab(null,null)
q.y=6
q.z=b
q.cy=c
return H.aM(a,q)},
jR:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mP(a,b,r,c)
a.eC.set(r,s)
return s},
mP:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aw(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jn(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jn(q.z))return q
else return H.mm(a,b)}}p=new H.ab(null,null)
p.y=7
p.z=b
p.cy=c
return H.aM(a,p)},
l_:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mN(a,b,r,c)
a.eC.set(r,s)
return s},
mN:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aw(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cL(a,"kk",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ab(null,null)
q.y=8
q.z=b
q.cy=c
return H.aM(a,q)},
mR:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ab(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aM(a,s)
a.eC.set(q,r)
return r},
fl:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mM:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cL:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fl(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ab(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aM(a,r)
a.eC.set(p,q)
return q},
jP:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fl(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ab(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aM(a,o)
a.eC.set(q,n)
return n},
kZ:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fl(m)
if(j>0){s=l>0?",":""
r=H.fl(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mM(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ab(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aM(a,o)
a.eC.set(q,r)
return r},
jQ:function(a,b,c,d){var s,r=b.cy+("<"+H.fl(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mO(a,b,c,r,d)
a.eC.set(r,s)
return s},
mO:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aN(a,b,r,0)
m=H.cS(a,c,r,0)
return H.jQ(a,n,m,c!==m)}}l=new H.ab(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aM(a,l)},
kV:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mF(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kW(a,r,g,f,!1)
else if(q===46)r=H.kW(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aL(a.u,a.e,f.pop()))
break
case 94:f.push(H.mR(a.u,f.pop()))
break
case 35:f.push(H.cM(a.u,5,"#"))
break
case 64:f.push(H.cM(a.u,2,"@"))
break
case 126:f.push(H.cM(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jO(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cL(p,n,o))
else{m=H.aL(p,a.e,n)
switch(m.y){case 11:f.push(H.jQ(p,m,o,a.n))
break
default:f.push(H.jP(p,m,o))
break}}break
case 38:H.mG(a,f)
break
case 42:l=a.u
f.push(H.l0(l,H.aL(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jR(l,H.aL(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.l_(l,H.aL(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eL()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
H.jO(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kZ(p,H.aL(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jO(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mI(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aL(a.u,a.e,h)},
mF:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kW:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l1(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.ml(o)+'"')
d.push(H.fm(s,o,n))}else d.push(p)
return m},
mG:function(a,b){var s=b.pop()
if(0===s){b.push(H.cM(a.u,1,"0&"))
return}if(1===s){b.push(H.cM(a.u,4,"1&"))
return}throw H.c(P.fC("Unexpected extended operation "+H.d(s)))},
aL:function(a,b,c){if(typeof c=="string")return H.cL(a,c,a.sEA)
else if(typeof c=="number")return H.mH(a,b,c)
else return c},
jO:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aL(a,b,c[s])},
mI:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aL(a,b,c[s])},
mH:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fC("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fC("Bad index "+c+" for "+b.i(0)))},
M:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aw(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aw(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.M(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.M(a,b.z,c,d,e)
if(p===6){s=d.z
return H.M(a,b,c,s,e)}if(r===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.kB(a,b),c,d,e)}if(r===7){s=H.M(a,b.z,c,d,e)
return s}if(p===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.kB(a,d),e)}if(p===7){s=H.M(a,b,c,d.z,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
if(p===12){if(b===t.g)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.M(a,k,c,j,e)||!H.M(a,j,e,k,c))return!1}return H.l7(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.l7(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.n7(a,b,c,d,e)}return!1},
l7:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.M(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.M(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.M(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.M(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.M(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
n7:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.M(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l1(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.M(a,H.fm(a,b,l[p]),c,r[p],e))return!1
return!0},
jn:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aw(a))if(r!==7)if(!(r===6&&H.jn(a.z)))s=r===8&&H.jn(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o4:function(a){var s
if(!H.aw(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
aw:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l3:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eL:function eL(){this.c=this.b=this.a=null},
eG:function eG(){},
cK:function cK(a){this.a=a},
ll:function(a){return v.mangledGlobalNames[a]},
o7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fy:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.k_==null){H.o0()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kI("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.km()]
if(p!=null)return p
p=H.o5(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,J.km(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
km:function(){var s=$.kT
return s==null?$.kT=v.getIsolateTag("_$dart_js"):s},
m1:function(a){if(!H.cP(a))throw H.c(P.k9(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aF(a,0,4294967295,"length",null))
return J.m2(new Array(a))},
kl:function(a){if(!H.cP(a)||a<0)throw H.c(P.k8("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
m2:function(a){return J.jA(a)},
jA:function(a){a.fixed$length=Array
return a},
m3:function(a,b){return J.cY(a,b)},
cT:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c5.prototype
return J.dm.prototype}if(typeof a=="string")return J.ak.prototype
if(a==null)return J.c6.prototype
if(typeof a=="boolean")return J.hh.prototype
if(a.constructor==Array)return J.a6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
nW:function(a){if(typeof a=="number")return J.b4.prototype
if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.a6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
bl:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.a6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
ji:function(a){if(a==null)return a
if(a.constructor==Array)return J.a6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
lc:function(a){if(typeof a=="number")return J.b4.prototype
if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bg.prototype
return a},
jY:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bg.prototype
return a},
aP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fy(a)},
k4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nW(a).v(a,b)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cT(a).q(a,b)},
k5:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lc(a).p(a,b)},
cX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bl(a).h(a,b)},
lE:function(a,b,c){return J.aP(a).f4(a,b,c)},
lF:function(a,b,c,d){return J.aP(a).fp(a,b,c,d)},
cY:function(a,b){return J.lc(a).aJ(a,b)},
js:function(a,b){return J.bl(a).w(a,b)},
fA:function(a,b){return J.ji(a).B(a,b)},
lG:function(a,b){return J.ji(a).D(a,b)},
lH:function(a){return J.aP(a).gfu(a)},
lI:function(a){return J.aP(a).gcJ(a)},
X:function(a){return J.cT(a).gR(a)},
aU:function(a){return J.ji(a).gK(a)},
aV:function(a){return J.bl(a).gl(a)},
k6:function(a){return J.ji(a).ha(a)},
lJ:function(a,b){return J.aP(a).he(a,b)},
lK:function(a,b,c){return J.jY(a).aY(a,b,c)},
lL:function(a){return J.jY(a).hl(a)},
ad:function(a){return J.cT(a).i(a)},
a:function a(){},
hh:function hh(){},
c6:function c6(){},
b5:function b5(){},
dM:function dM(){},
bg:function bg(){},
af:function af(){},
a6:function a6(){},
dn:function dn(){},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b4:function b4(){},
c5:function c5(){},
dm:function dm(){},
ak:function ak(){}},P={
mv:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nM()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bR(new P.iS(q),1)).observe(s,{childList:true})
return new P.iR(q,s,r)}else if(self.setImmediate!=null)return P.nN()
return P.nO()},
mw:function(a){self.scheduleImmediate(H.bR(new P.iT(a),0))},
mx:function(a){self.setImmediate(H.bR(new P.iU(a),0))},
my:function(a){P.jJ(C.j,a)},
jJ:function(a,b){var s=C.c.X(a.a,1000)
return P.mJ(s<0?0:s,b)},
kG:function(a,b){var s=C.c.X(a.a,1000)
return P.mK(s<0?0:s,b)},
mJ:function(a,b){var s=new P.cJ()
s.dJ(a,b)
return s},
mK:function(a,b){var s=new P.cJ()
s.dK(a,b)
return s},
oZ:function(a){return new P.bO(a,1)},
mB:function(){return C.U},
mC:function(a){return new P.bO(a,3)},
ne:function(a){return new P.cG(a)},
nA:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.cR=null
r=s.b
$.bP=r
if(r==null)$.cQ=null
s.a.$0()}},
nH:function(){$.jV=!0
try{P.nA()}finally{$.cR=null
$.jV=!1
if($.bP!=null)$.k3().$1(P.lb())}},
nF:function(a){var s=new P.ew(a),r=$.cQ
if(r==null){$.bP=$.cQ=s
if(!$.jV)$.k3().$1(P.lb())}else $.cQ=r.b=s},
nG:function(a){var s,r,q,p=$.bP
if(p==null){P.nF(a)
$.cR=$.cQ
return}s=new P.ew(a)
r=$.cR
if(r==null){s.b=p
$.bP=$.cR=s}else{q=r.b
s.b=q
$.cR=r.b=s
if(q==null)$.cQ=s}},
kF:function(a,b){var s=$.ah
if(s===C.e)return P.jJ(a,b)
return P.jJ(a,s.fv(b))},
ms:function(a,b){var s=$.ah
if(s===C.e)return P.kG(a,b)
return P.kG(a,s.cH(b,t.d))},
l8:function(a,b,c,d,e){P.nG(new P.je(d,e))},
nC:function(a,b,c,d){var s,r=$.ah
if(r===c)return d.$0()
$.ah=c
s=r
try{r=d.$0()
return r}finally{$.ah=s}},
nD:function(a,b,c,d,e){var s,r=$.ah
if(r===c)return d.$1(e)
$.ah=c
s=r
try{r=d.$1(e)
return r}finally{$.ah=s}},
iS:function iS(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
cJ:function cJ(){this.c=0},
j8:function j8(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b){this.a=a
this.b=b},
bj:function bj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cG:function cG(a){this.a=a},
ew:function ew(a){this.a=a
this.b=null},
e0:function e0(){},
e1:function e1(){},
cn:function cn(){},
jb:function jb(){},
je:function je(a,b){this.a=a
this.b=b},
j0:function j0(){},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function(a,b,c){return H.nU(a,new H.v(b.am("@<0>").cg(c).am("v<1,2>")))},
kn:function(a,b){return new H.v(a.am("@<0>").cg(b).am("v<1,2>"))},
c8:function(a){return new P.cu(a.am("cu<0>"))},
jN:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mE:function(a,b){var s=new P.cv(a,b)
s.c=a.e
return s},
m_:function(a,b,c){var s,r
if(P.jW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a0.push(a)
try{P.nd(a,s)}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}r=P.kD(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jz:function(a,b,c){var s,r
if(P.jW(a))return b+"..."+c
s=new P.aH(b)
$.a0.push(a)
try{r=s
r.a=P.kD(r.a,a,", ")}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jW:function(a){var s,r
for(s=$.a0.length,r=0;r<s;++r)if(a===$.a0[r])return!0
return!1},
nd:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.d(l.gA(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gA(l);++j
if(!l.t()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA(l);++j
for(;l.t();p=o,o=n){n=l.gA(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.d(p)
r=H.d(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ko:function(a,b){var s,r,q=P.c8(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)q.n(0,b.a(a[r]))
return q},
kp:function(a){var s,r={}
if(P.jW(a))return"{...}"
s=new P.aH("")
try{$.a0.push(a)
s.a+="{"
r.a=!0
J.lG(a,new P.hp(r,s))
s.a+="}"}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cu:function cu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j_:function j_(a){this.a=a
this.c=this.b=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c4:function c4(){},
c9:function c9(){},
A:function A(){},
du:function du(){},
hp:function hp(a,b){this.a=a
this.b=b},
an:function an(){},
cC:function cC(){},
cw:function cw(){},
d5:function d5(){},
d7:function d7(){},
fZ:function fZ(){},
he:function he(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hd:function hd(a){this.a=a},
iz:function iz(){},
iA:function iA(){},
j9:function j9(a){this.b=0
this.c=a},
lY:function(a){if(a instanceof H.br)return a.i(0)
return"Instance of '"+H.d(H.dQ(a))+"'"},
jD:function(a,b,c){var s,r=c?J.kl(a):J.m1(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jE:function(a,b){var s,r=[]
for(s=J.aU(a);s.t();)r.push(s.gA(s))
if(b)return r
return J.jA(r)},
jI:function(a){var s,r=a,q=r.length,p=P.jG(0,null,q)
if(typeof p!=="number")return p.a4()
s=p<q
return H.mh(s?r.slice(0,p):r)},
mj:function(a){return new H.hi(a,H.m4(a,!1,!0,!1,!1,!1))},
kD:function(a,b,c){var s=J.aU(b)
if(!s.t())return a
if(c.length===0){do a+=H.d(s.gA(s))
while(s.t())}else{a+=H.d(s.gA(s))
for(;s.t();)a=a+c+H.d(s.gA(s))}return a},
l2:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.lD().b
s=s.test(b)}else s=!1
if(s)return b
r=C.I.fC(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jF(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lV:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lW:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
kh:function(a){return new P.b0(1000*a)},
h1:function(a){if(typeof a=="number"||H.l6(a)||null==a)return J.ad(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lY(a)},
fC:function(a){return new P.d0(a)},
k8:function(a){return new P.a1(!1,null,null,a)},
k9:function(a,b,c){return new P.a1(!0,a,b,c)},
lM:function(a,b){if(a==null)throw H.c(new P.a1(!1,null,b,"Must not be null"))
return a},
dR:function(a,b){return new P.bF(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.bF(b,c,!0,a,d,"Invalid value")},
jG:function(a,b,c){var s
if(typeof c!=="number")return H.q(c)
s=a>c
if(s)throw H.c(P.aF(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
s=b>c}else s=!0
if(s)throw H.c(P.aF(b,a,c,"end",null))
return b}return c},
ky:function(a,b){if(a<0)throw H.c(P.aF(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.aV(b):e
return new P.dk(s,!0,a,c,"Index out of range")},
w:function(a){return new P.er(a)},
kI:function(a){return new P.eo(a)},
jH:function(a){return new P.bH(a)},
b_:function(a){return new P.d6(a)},
o:function(a){return new P.eI(a)},
k1:function(a){H.o7(a)},
av:function av(){},
a5:function a5(a,b){this.a=a
this.b=b},
W:function W(){},
b0:function b0(a){this.a=a},
fV:function fV(){},
fW:function fW(){},
F:function F(){},
d0:function d0(a){this.a=a},
dH:function dH(){},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dk:function dk(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
er:function er(a){this.a=a},
eo:function eo(a){this.a=a},
bH:function bH(a){this.a=a},
d6:function d6(a){this.a=a},
dK:function dK(){},
cl:function cl(){},
d8:function d8(a){this.a=a},
eI:function eI(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
hb:function hb(){},
r:function r(){},
f:function f(){},
dl:function dl(){},
am:function am(){},
dt:function dt(){},
a9:function a9(){},
O:function O(){},
J:function J(){},
K:function K(){},
aH:function aH(a){this.a=a},
aO:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kn(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
nQ:function(a){var s={}
a.D(0,new P.jf(s))
return s},
jf:function jf(a){this.a=a},
df:function df(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(){},
iZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
f1:function f1(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bx:function bx(){},
dr:function dr(){},
bC:function bC(){},
dI:function dI(){},
hQ:function hQ(){},
bG:function bG(){},
e2:function e2(){},
j:function j(){},
bJ:function bJ(){},
eb:function eb(){},
eQ:function eQ(){},
eR:function eR(){},
eY:function eY(){},
eZ:function eZ(){},
fa:function fa(){},
fb:function fb(){},
fj:function fj(){},
fk:function fk(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
d1:function d1(){},
az:function az(){},
dJ:function dJ(){},
ex:function ex(){},
dZ:function dZ(){},
f6:function f6(){},
f7:function f7(){}},W={
k7:function(){var s=document.createElement("a")
return s},
ke:function(){var s=document.createElement("canvas")
return s},
lX:function(a,b,c){var s,r=document.body
r.toString
s=C.m.a7(r,a,b,c)
s.toString
r=new H.bi(new W.R(s),new W.fX())
return t.h.a(r.gaA(r))},
fY:function(a){return"wheel"},
c1:function(a){var s,r,q="element tag unavailable"
try{s=J.aP(a)
if(typeof s.gdd(a)=="string")q=s.gdd(a)}catch(r){H.ax(r)}return q},
iY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kU:function(a,b,c,d){var s=W.iY(W.iY(W.iY(W.iY(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
S:function(a,b,c,d){var s=W.l9(new W.iX(c),t.D)
if(s!=null&&!0)J.lF(a,b,s,!1)
return new W.eH(a,b,s,!1)},
kS:function(a){var s=W.k7(),r=window.location
s=new W.bN(new W.j3(s,r))
s.dE(a)
return s},
mz:function(a,b,c,d){return!0},
mA:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
kY:function(){var s=t.N
s=new W.fe(P.ko(C.t,s),P.c8(s),P.c8(s),P.c8(s),null)
s.dI(null,new H.cd(C.t,new W.j6()),["TEMPLATE"],null)
return s},
l9:function(a,b){var s=$.ah
if(s===C.e)return a
return s.cH(a,b)},
k:function k(){},
fB:function fB(){},
cZ:function cZ(){},
d_:function d_(){},
bp:function bp(){},
d2:function d2(){},
aW:function aW(){},
aX:function aX(){},
ae:function ae(){},
fN:function fN(){},
E:function E(){},
bX:function bX(){},
fO:function fO(){},
a4:function a4(){},
aj:function aj(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
bY:function bY(){},
fT:function fT(){},
bZ:function bZ(){},
c_:function c_(){},
db:function db(){},
fU:function fU(){},
ey:function ey(a,b){this.a=a
this.b=b},
y:function y(){},
fX:function fX(){},
h:function h(){},
b:function b(){},
b1:function b1(){},
dd:function dd(){},
de:function de(){},
dg:function dg(){},
b2:function b2(){},
hc:function hc(){},
b3:function b3(){},
b6:function b6(){},
hn:function hn(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
b8:function b8(){},
dz:function dz(){},
a2:function a2(){},
R:function R(a){this.a=a},
u:function u(){},
ci:function ci(){},
ba:function ba(){},
dO:function dO(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
dU:function dU(){},
aG:function aG(){},
dX:function dX(){},
bc:function bc(){},
dY:function dY(){},
bd:function bd(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
aI:function aI(){},
cm:function cm(){},
e3:function e3(){},
e4:function e4(){},
bI:function bI(){},
aJ:function aJ(){},
ag:function ag(){},
e5:function e5(){},
e6:function e6(){},
ig:function ig(){},
be:function be(){},
bf:function bf(){},
ea:function ea(){},
ik:function ik(){},
at:function at(){},
iy:function iy(){},
et:function et(){},
aK:function aK(){},
bL:function bL(){},
bM:function bM(){},
ez:function ez(){},
ct:function ct(){},
eM:function eM(){},
cx:function cx(){},
f5:function f5(){},
fc:function fc(){},
iV:function iV(){},
iW:function iW(a){this.a=a},
jy:function jy(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iX:function iX(a){this.a=a},
jM:function jM(a){this.$ti=a},
bN:function bN(a){this.a=a},
C:function C(){},
cj:function cj(a){this.a=a},
hM:function hM(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(){},
j4:function j4(){},
j5:function j5(){},
fe:function fe(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j6:function j6(){},
fd:function fd(){},
c3:function c3(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a8:function a8(){},
j3:function j3(a,b){this.a=a
this.b=b},
fn:function fn(a){this.a=a
this.b=!1},
ja:function ja(a){this.a=a},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f2:function f2(){},
cE:function cE(){},
cF:function cF(){},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
ff:function ff(){},
fg:function fg(){},
cH:function cH(){},
cI:function cI(){},
fh:function fh(){},
fi:function fi(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){}},K={
I:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.b_(a,0)
r=C.b.b_(b,0)
if(s>r){q=r
r=s
s=q}return new K.hR(s,r)},
m:function(a){var s=new K.hY()
s.dA(a)
return s},
ay:function ay(){},
di:function di(){},
Z:function Z(){this.a=null},
hR:function hR(a,b){this.a=a
this.b=b},
hY:function hY(){this.a=null}},L={
ii:function(){var s=new L.ih()
s.a=new H.v(t.V)
s.b=new H.v(t.w)
s.c=P.c8(t.bw)
return s},
e_:function e_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
e9:function e9(a){this.b=a
this.c=null},
ih:function ih(){var _=this
_.d=_.c=_.b=_.a=null},
il:function il(a){this.b=a
this.a=this.c=null}},O={
jv:function(){var s=new O.bs()
s.bj()
return s},
bs:function bs(){this.c=this.b=this.a=null},
ce:function ce(){this.b=this.a=null},
dv:function dv(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
hr:function hr(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){},
hs:function hs(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hu:function hu(){var _=this
_.e=_.d=_.c=_.b=null},
hv:function hv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hw:function hw(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
id:function id(){}},E={
kP:function(){if(J.js(window.navigator.vendor,"Google"))return C.z
if(J.js(window.navigator.userAgent,"Firefox"))return C.n
var s=window.navigator.appVersion
if(J.bl(s).w(s,"Trident")||C.b.w(s,"Edge"))return C.o
if(J.js(window.navigator.appName,"Microsoft"))return C.o
return C.A},
kQ:function(){var s=window.navigator.appVersion
if(J.bl(s).w(s,"Win"))return C.R
if(C.b.w(s,"Mac"))return C.u
if(C.b.w(s,"Linux"))return C.S
return C.T},
mk:function(a,b){var s=new E.hS(a)
s.dz(a,b)
return s},
mr:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kE(a,!0,!0,!0,!1)
s=W.ke()
r=s.style
r.width="100%"
r.height="100%"
J.lI(a).n(0,s)
return E.kE(s,!0,!0,!0,!1)},
kE:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e7(),n=t.z,m=C.i.di(a,"webgl2",P.m5(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mk(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.es(a)
s=new X.hk()
s.c=new X.a7(!1,!1,!1)
s.d=P.c8(t.e)
n.b=s
s=new X.hK(n)
s.f=0
s.r=V.bb()
s.x=V.bb()
s.ch=s.Q=1
n.c=s
s=new X.ho(n)
s.r=0
s.x=V.bb()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.ij(n)
s.f=V.bb()
s.r=V.bb()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.h_
n.Q=(s==null?$.h_=new E.eF(E.kP(),E.kQ()):s).a===C.n?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.S(q,"contextmenu",n.geo(),!1))
n.z.push(W.S(a,"focus",n.gev(),!1))
n.z.push(W.S(a,"blur",n.geg(),!1))
n.z.push(W.S(q,"keyup",n.gez(),!1))
n.z.push(W.S(q,"keydown",n.gex(),!1))
n.z.push(W.S(a,"mousedown",n.geD(),!1))
n.z.push(W.S(a,"mouseup",n.geH(),!1))
n.z.push(W.S(a,p,n.geF(),!1))
r=n.z
W.fY(a)
W.fY(a)
r.push(W.S(a,W.fY(a),n.geJ(),!1))
n.z.push(W.S(q,p,n.geq(),!1))
n.z.push(W.S(q,"mouseup",n.ges(),!1))
n.z.push(W.S(q,"pointerlockchange",n.geL(),!1))
n.z.push(W.S(a,"touchstart",n.geY(),!1))
n.z.push(W.S(a,"touchend",n.geU(),!1))
n.z.push(W.S(a,"touchmove",n.geW(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a5(Date.now(),!1)
o.db=0
o.cr()
return o},
fJ:function fJ(){},
bu:function bu(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bq:function bq(a){this.b=a},
bD:function bD(a){this.b=a},
eF:function eF(a,b){this.a=a
this.b=b},
hS:function hS(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
e7:function e7(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
ie:function ie(a){this.a=a}},Z={
mu:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cN(c)),35044)
a.bindBuffer(b,null)
return new Z.eu(b,s)},
ac:function(a){return new Z.bh(a)},
eu:function eu(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iQ:function iQ(a){this.a=a},
d3:function d3(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
G:function(){var s=new D.bv()
s.d=0
return s},
fL:function fL(){},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
P:function P(){this.b=null},
aB:function aB(){this.b=null},
aC:function aC(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bt:function bt(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){},
c7:function c7(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={d4:function d4(a,b){this.a=a
this.b=b},dq:function dq(a,b){this.a=a
this.b=b},hk:function hk(){var _=this
_.d=_.c=_.b=_.a=null},cb:function cb(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},bz:function bz(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hK:function hK(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bA:function bA(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dP:function dP(){},co:function co(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ij:function ij(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},es:function es(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lZ:function(a){var s=new X.ha(),r=new V.aZ(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kA
if(r==null){r=V.kz(0,0,1,1)
$.kA=r}s.r=r
return s},
ju:function ju(){},
ha:function ha(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){}},V={
oe:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dj(a-b,s)
return(a<0?a+s:a)+b},
L:function(a,b,c){if(a==null)return C.b.av("null",c)
$.z().toString
return C.b.av(C.d.df(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bT:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.n)(a),++q){p=V.L(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.av(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
dy:function(){var s=$.kr
return s==null?$.kr=V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kq:function(a,b,c){var s=c.G(),r=b.aq(s).G(),q=s.aq(r),p=new V.B(a.a,a.b,a.c),o=r.L(0).Y(p),n=q.L(0).Y(p),m=s.L(0).Y(p)
return V.ap(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bb:function(){var s=$.ku
return s==null?$.ku=new V.aq(0,0):s},
kv:function(){var s=$.ar
return s==null?$.ar=new V.U(0,0,0):s},
kz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dS(a,b,c,d)},
cs:function(){var s=$.kM
return s==null?$.kM=new V.B(0,0,0):s},
mt:function(){var s=$.iB
return s==null?$.iB=new V.B(-1,0,0):s},
jL:function(){var s=$.iC
return s==null?$.iC=new V.B(0,1,0):s},
kN:function(){var s=$.iD
return s==null?$.iD=new V.B(0,0,1):s},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(){},
dx:function dx(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
by:function by(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aq:function aq(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function(a){P.ms(C.K,new V.jq(a))},
mn:function(a){var s=new V.i2()
s.dC(a,!0)
return s},
aY:function aY(){},
jq:function jq(a){this.a=a},
d9:function d9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dh:function dh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dj:function dj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dN:function dN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(){this.b=this.a=null},
i4:function i4(a){this.a=a},
i3:function i3(a){this.a=a},
i5:function i5(a){this.a=a}},U={
jw:function(){var s=new U.fM()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
kg:function(a){var s=new U.bW()
s.a=a
return s},
fM:function fM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bW:function bW(){this.b=this.a=null},
bw:function bw(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Q:function Q(){},
cp:function cp(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cq:function cq(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dc:function dc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m7:function(a,b){var s=a.aT,r=new A.hq(b,s)
r.dB(b,s)
r.dw(a,b)
return r},
m8:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.gac(a4)+a5.gac(a5)+a6.gac(a6)+a7.gac(a7)+a8.gac(a8)+a9.gac(a9)+b0.gac(b0)+b1.gac(b1)+b2.gac(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.n)(b3),++r)b+="_"+H.d(b3[r].a)}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.n)(b4),++r)b+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.n)(b5),++r)b+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.n)(b6),++r)b+="_"+H.d(b6[r].a)}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
for(o=b4.length,r=0;r<o;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(n=b6.length,r=0;r<n;++r,p=!0)q+=b6[r].b
if(!b0.a)n=!1
else n=!0
if(!n)if(!b1.a)m=!1
else m=!0
else m=!0
l=s>0
if(!a5.a)s=!1
else s=!0
if(!s){if(!a6.a)s=!1
else s=!0
if(!s){if(!a7.a)s=!1
else s=!0
if(!s)if(!a8.a)s=!1
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a8.a
if(s)n=!1
else n=!0
j=n||l||o>0||m
if(!a6.a)o=!1
else o=!0
if(!o){if(!a7.a)o=!1
else o=!0
if(!o){if(s)s=!1
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!a9.a)s=!1
else s=!0
h=s||m}else h=!0
if(!a9.a)g=!1
else g=!0
f=a3>0
e=h||g||j||!1
d=l&&i
c=$.aT()
if(h){s=$.aS()
c=new Z.bh(c.a|s.a)}if(g){s=$.aR()
c=new Z.bh(c.a|s.a)}if(f){s=$.aQ()
c=new Z.bh(c.a|s.a)}return new A.ht(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jc:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jd:function(a,b,c){var s
A.jc(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fz(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
nj:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jc(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
nf:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jd(b,r,"ambient")
b.a+="\n"},
nh:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jd(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.e
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nk:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jd(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.e
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nq:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jd(b,r,"specular")
r=b.a+="\n"
r+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=r
r+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=r
r+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=r
r+=u.e
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nm:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s+="\n"
b.a=s
s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f.a
if(!r)q=!1
else q=!0
if(!q||r)s=b.a=s+"   return normalize(normalVec);\n"
else{s+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=s
s+="   vec3 n = normalize(normalVec);\n"
b.a=s
s+="   vec3 b = normalize(binormalVec);\n"
b.a=s
s+="   vec3 c = normalize(cross(b, n));\n"
b.a=s
s+="   b = cross(n, c);\n"
b.a=s
s+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=s
s+="                   -c.x, -c.y, -c.z,\n"
b.a=s
s+="                    n.x,  n.y,  n.z);\n"
b.a=s
s=b.a=s+"   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n"
b.a=s
b.a=s+"\n"},
no:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jc(b,r,"reflect")
r=b.a+="\n"
r+="vec3 reflect(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = reflectClr;\n"
b.a=r}r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
np:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jc(b,r,"refract")
r=b.a+="uniform float refraction;\n"
r+="\n"
b.a=r
r+="vec3 refract(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = refractClr;\n"
b.a=r}r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
ng:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fz(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 startPnt;\n"
c.a=p
p+="   vec3 endPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.a9()
s=(s&4)!==0
if(s){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+m+"];\n"
p+="\n"
c.a=p
p+="vec3 "+r+"ClosestPoint("+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=p
p+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=p
p+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=p
p+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=p
p+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=p
p+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=p
p+="   return lit.startPnt + t*lineVec;\n"
c.a=p
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Intensity(vec3 normDir, vec3 litPnt, "+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
if(s){p+="   float dist = length(objPos - litPnt);\n"
c.a=p
p+=u.u
c.a=p
p+=u.z
c.a=p
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.k(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
if(!a.b.a)s=!1
else s=!0
if(s)o.push("ambientColor")
if(a.dx){c.a+=u.k
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=[]
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.k(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
c.a=s+u.o
m=c.a+="   for(int i = 0; i < "+m+"; ++i)\n"
m+="   {\n"
c.a=m
m+="      if(i >= "+r+"Count) break;\n"
c.a=m
m+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=m
m+="   }\n"
c.a=m
m+="   return lightAccum;\n"
c.a=m
m+="}\n"
c.a=m
c.a=m+"\n"},
ni:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fz(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a9()
s=(s&1)!==0
if(s){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p=c.a=p+"   vec3 objDir;\n"}p+="   vec3 viewDir;\n"
c.a=p
p+="   vec3 color;\n"
c.a=p
p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
if(!a.b.a)p=!1
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
if(!a.c.a)p=!1
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
else p=!0
if(p)l.push("specular(norm, lit.viewDir)")
if(s){p=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
p+="   float tu = dot(offset, lit.objUp);\n"
c.a=p
p+="   float tv = dot(offset, lit.objRight);\n"
c.a=p
p+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=p
p+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.a.k(l," + ")+");\n"}else c.a+="   highLight = "+C.a.k(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.k(m," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
nn:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fz(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 point;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.a9()
o=(s&3)!==0
if(o){p+="   mat3 invViewRotMat;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&4)!==0
if(m){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+h+"];\n"
s=(s&1)!==0
if(s)for(l=0;l<h;++l)p=c.a+="uniform samplerCube "+r+"sTextureCube"+l+";\n"
p+="\n"
c.a=p
k=s?", samplerCube txtCube":""
if(n)k+=", samplerCube shadowCube"
p+="vec3 "+r+"Intensity(vec3 normDir, "+q+" lit"+k+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   float dist = length(objPos - lit.point);\n"
if(m){p+=u.u
c.a=p
p+=u.z
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.v
c.a=p
p+=u.q
c.a=p
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.k(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
if(!a.b.a)p=!1
else p=!0
if(p)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(o){for(l=0;l<h;++l){c.a+="   if("+r+"Count <= "+l+") return lightAccum;\n"
k=s?", "+r+"sTextureCube"+l:""
if(n)k+=", "+r+"sShadowCube"+l
p=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+l+"]"+k+");\n"}h=p}else{h=c.a+="   for(int i = 0; i < "+h+"; ++i)\n"
h+="   {\n"
c.a=h
h+="      if(i >= "+r+"Count) break;\n"
c.a=h
h+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=h
h=c.a=h+"   }\n"}h+="   return lightAccum;\n"
c.a=h
h+="}\n"
c.a=h
c.a=h+"\n"},
nr:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fz(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 objPnt;\n"
c.a=p
p+="   vec3 objDir;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
if(typeof s!=="number")return s.a9()
o=(s&3)!==0
if(o){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p+="   float tuScalar;\n"
c.a=p
p+="   float tvScalar;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&8)!==0
if(m){p+="   float cutoff;\n"
c.a=p
p+="   float coneAngle;\n"
c.a=p}l=(s&4)!==0
if(l){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+e+"];\n"
k=(s&1)!==0
if(k)for(j=0;j<e;++j)p=c.a+=f+r+"sTexture2D"+j+";\n"
if(n)for(j=0;j<e;++j)p=c.a+=f+r+"sShadow2D"+j+";\n"
p+="\n"
c.a=p
i=k?", sampler2D txt2D":""
if(n)i+=", sampler2D shadow2D"
p+="vec3 "+r+"Intensity("+q+" lit"+i+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   vec3 dir = objPos - lit.objPnt;\n"
if((s&6)!==0){s=p+"   float dist = length(dir);\n"
c.a=s}else s=p
if(l){s+=u.u
c.a=s
s+=u.z
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.h_
if(s==null)s=$.h_=new E.eF(E.kP(),E.kQ())
p=c.a
if(s.b===C.u){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=s
s=c.a=s+"   float angle = atan(crossMag, zScale);\n"}else s=c.a=p+"   float angle = acos(zScale);\n"
s+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=s
s+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=s
s+="\n"
c.a=s}if(o){s+="   normDir = normDir / zScale;\n"
c.a=s
s+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=s
s+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=s
s+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=s
s=c.a=s+"\n"}if(n){s+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=s
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.k(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
if(!a.b.a)s=!1
else s=!0
if(s)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.k(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.k(h," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
s+=u.o
c.a=s
if(o){for(j=0;j<e;++j){c.a+="   if("+r+"Count <= "+j+") return lightAccum;\n"
i=k?", "+r+"sTexture2D"+j:""
if(n)i+=", "+r+"sShadow2D"+j
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+j+"]"+i+");\n"}e=s}else{e=c.a+="   for(int i = 0; i < "+e+"; ++i)\n"
e+="   {\n"
c.a=e
e+="      if(i >= "+r+"Count) break;\n"
c.a=e
e+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=e
e=c.a=e+"   }\n"}e+="   return lightAccum;\n"
c.a=e
e+="}\n"
c.a=e
c.a=e+"\n"},
nl:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
if(!a.b.a)s=!1
else s=!0
if(s)r.push("ambientColor")
if(!a.c.a)s=!1
else s=!0
if(s)r.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.k(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
ns:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.aH("")
h.a="precision mediump float;\n"
h.a=j
s=a.k4
if(s){h.a=i
r=i}else r=j
if(a.r1){r+="varying vec3 binormalVec;\n"
h.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
h.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
h.a=r}if(a.k2){r+="varying vec3 objPos;\n"
h.a=r}r=h.a=(a.k3?h.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
h.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
h.a=r}if(a.dy)r=h.a=r+"uniform mat4 invViewMat;\n"
h.a=r+"\n"
A.nj(a,h)
A.nf(a,h)
A.nh(a,h)
A.nk(a,h)
A.nq(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.no(a,h)
A.np(a,h)}A.nm(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y.a
if(o)p=h.a=p+"uniform float alpha;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!o)n=!1
else n=!0
if(!n)p=h.a=p+"   return 1.0;\n"
else if(o){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.ng(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.ni(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.nn(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.nr(a,o[m],h)
A.nl(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
h.a=s}else s=o
if(r)s=h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=[]
if(p){h.a=s+u.o
l.push("lightAccum")
if(!a.b.a)s=!1
else s=!0
if(s)h.a+="   setAmbientColor();\n"
if(!a.c.a)s=!1
else s=!0
if(s)h.a+="   setDiffuseColor();\n"
if(!a.d.a)s=!1
else s=!0
if(s)h.a+="   setInvDiffuseColor();\n"
if(!a.e.a)s=!1
else s=!0
if(s)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ai(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ai(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ai(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ai(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
else s=!0
if(s)l.push("emissionColor()")
if(!a.r.a)s=!1
else s=!0
if(s)l.push("reflect(refl)")
if(!a.x.a)s=!1
else s=!0
if(s)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.k(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nt:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b7+"];\n"
s+="attribute vec4 bendAttr;\n"
b.a=s
s+="\n"
b.a=s
s+="float weightSum;\n"
b.a=s
s=b.a=s+"vec3 bendPos;\n"
r=a.k4
if(r){s+="vec3 bendNorm;\n"
b.a=s}q=a.r1
s=(q?b.a=s+"vec3 bendBinm;\n":s)+"\n"
b.a=s
s+="void adjustBend(float bendVal)\n"
b.a=s
s+="{\n"
b.a=s
s+="   if(bendVal >= 0.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=s
s+="      if(index < bendMatCount)\n"
b.a=s
s+="      {\n"
b.a=s
s+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=s
s+="         mat4 m = bendValues[index].mat;\n"
b.a=s
s+="         weightSum += weight;\n"
b.a=s
s=b.a=s+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(r){s+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=s}s=(q?b.a=s+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":s)+"      }\n"
b.a=s
s+="   }\n"
b.a=s
s+="}\n"
b.a=s
s+="\n"
b.a=s
s+="void setupBendData()\n"
b.a=s
s+="{\n"
b.a=s
s=b.a=s+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(r){s+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":s)+"   weightSum = 0.0;\n"
b.a=s
s+="   adjustBend(bendAttr.x);\n"
b.a=s
s+="   adjustBend(bendAttr.y);\n"
b.a=s
s+="   adjustBend(bendAttr.z);\n"
b.a=s
s+="   adjustBend(bendAttr.w);\n"
b.a=s
s+="   if(weightSum < 1.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      float weight = 1.0 - weightSum;\n"
b.a=s
s=b.a=s+"      bendPos += posAttr*weight;\n"
if(r){s+="      bendNorm += normAttr*weight;\n"
b.a=s}s=(q?b.a=s+"      bendBinm += binmAttr*weight;\n":s)+"   }\n"
b.a=s
s+="   else\n"
b.a=s
s+="   {\n"
b.a=s
s+="      bendPos = bendPos/weightSum;\n"
b.a=s
s=b.a=s+"   }\n"
if(r){s+="   bendNorm = normalize(bendNorm);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = normalize(bendBinm);\n":s)+"}\n"
b.a=s
b.a=s+"\n"},
nv:function(a,b){var s
if(!a.k4)return
s=b.a+="varying vec3 normalVec;\n"
s+="\n"
b.a=s
s+="vec3 getNorm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
nu:function(a,b){var s
if(!a.r1)return
s=b.a+="varying vec3 binormalVec;\n"
s+="\n"
b.a=s
s+="vec3 getBinm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
nx:function(a,b){var s,r
if(!a.r2)return
s=a.x1
if(s)b.a+="uniform mat3 txt2DMat;\n"
r=b.a+="attribute vec2 txt2DAttr;\n"
r+="varying vec2 txt2D;\n"
b.a=r
r+="\n"
b.a=r
r+="vec2 getTxt2D()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=r+"   return txt2DAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
ny:function(a,b){var s,r
if(!a.rx)return
s=a.x2
if(s)b.a+="uniform mat4 txtCubeMat;\n"
r=b.a+="attribute vec3 txtCubeAttr;\n"
r+="varying vec3 txtCube;\n"
b.a=r
r+="\n"
b.a=r
r+="vec3 getTxtCube()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=r+"   return txtCubeAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
nw:function(a,b){var s
if(!a.k2)return
s=b.a+="varying vec3 objPos;\n"
s+="\n"
b.a=s
s+="vec3 getObjPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
nz:function(a,b){var s
if(!a.k3)return
s=b.a+="varying vec3 viewPos;\n"
s+="\n"
b.a=s
s+="vec3 getViewPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
fz:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.ai(a,1)},
jK:function(a,b,c,d,e){var s=new A.ir(a,c,e)
s.f=d
P.jD(d,0,!1)
return s},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a,b){var _=this
_.hw=_.hv=_.b8=_.aT=_.b7=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hJ=_.hI=_.hH=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.bJ=_.hG=_.hF=_.cW=_.hE=_.hD=_.cV=_.cU=_.hC=_.hB=_.cT=_.cS=_.hA=_.hz=_.cR=_.hy=_.hx=_.cQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fI:function fI(a,b){this.a=a
this.b=b},
fS:function fS(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
i7:function i7(a,b){this.a=a
this.b=b},
ht:function ht(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.fy=a0
_.go=a1
_.id=a2
_.k1=a3
_.k2=a4
_.k3=a5
_.k4=a6
_.r1=a7
_.r2=a8
_.rx=a9
_.ry=b0
_.x1=b1
_.x2=b2
_.y1=b3
_.y2=b4
_.b7=b5
_.aT=b6
_.b8=b7},
eg:function eg(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eh:function eh(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ek:function ek(a,b,c,d,e,f,g,h,i,j){var _=this
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
en:function en(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dV:function dV(){},
iq:function iq(){},
iw:function iw(a){this.a=a},
ed:function ed(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
ee:function ee(a,b,c){this.a=a
this.c=b
this.d=c},
ef:function ef(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
ei:function ei(a,b,c){this.a=a
this.c=b
this.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c},
el:function el(a,b,c){this.a=a
this.c=b
this.d=c},
em:function em(a,b,c){this.a=a
this.c=b
this.d=c}},F={
od:function(){return F.nR(15,30,0.5,1,new F.jr())},
nR:function(a,b,c,d,e){var s=F.oa(a,b,new F.jg(e,d,b,c))
if(s==null)return null
s.aH()
s.fV(new F.iK(),new F.hN())
return s},
oa:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=new F.hZ()
r=new F.iF(s)
r.b=!1
r.c=[]
s.a=r
r=new F.i1()
r.b=[]
s.b=r
r=new F.i0(s)
r.b=[]
s.c=r
r=new F.i_(s)
r.b=[]
s.d=r
q=[]
for(p=0;p<=b;++p){o=p/b
r=s.a
if(o<0)n=0
else n=o>1?1:o
m=r.cB(new V.aZ(n,0,0,1),new V.aq(o,1))
c.$3(m,o,0)
q.push(m.cM(e))}for(p=1;p<=a;++p){l=p/a
for(r=l>1,n=l<0,k=1-l,j=0;j<=b;++j){o=j/b
i=s.a
if(o<0)h=0
else h=o>1?1:o
if(n)g=0
else g=r?1:l
if(n)f=0
else f=r?1:l
m=i.cB(new V.aZ(h,g,f,1),new V.aq(o,k))
c.$3(m,o,l)
q.push(m.cM(e))}}s.d.fq(a+1,b+1,q)
return s},
h5:function(a,b,c){var s=new F.h4(),r=a.a
if(r==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
s.fb(a)
s.fc(b)
s.fd(c)
s.a.a.d.b.push(s)
s.a.a.a2()
return s},
kO:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iE(),p=new F.iN()
p.b=[]
q.b=p
p=new F.iJ()
p.b=[]
p.c=[]
q.c=p
p=new F.iG()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lz()
q.e=0
p=$.aT()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aS().a)!==0?e:r
q.x=(s&$.aR().a)!==0?b:r
q.y=(s&$.bn().a)!==0?f:r
q.z=(s&$.bo().a)!==0?g:r
q.Q=(s&$.lA().a)!==0?c:r
q.ch=(s&$.bU().a)!==0?i:0
q.cx=(s&$.aQ().a)!==0?a:r
return q},
jr:function jr(){},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(){},
i6:function i6(){},
hl:function hl(){},
ip:function ip(){},
hZ:function hZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
i1:function i1(){this.b=null},
iE:function iE(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iP:function iP(a){this.a=a},
iO:function iO(a){this.a=a},
iF:function iF(a){this.a=a
this.c=this.b=null},
iG:function iG(){this.d=this.c=this.b=null},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(){this.c=this.b=null},
iL:function iL(){},
iK:function iK(){},
iM:function iM(){},
hN:function hN(){},
iN:function iN(){this.b=null}},Q={
lg:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b="modifiers",a=V.mn("Test 009"),a0=W.ke()
a0.className="pageLargeCanvas"
a0.id=d
a.a.appendChild(a0)
a.cC(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."])
a.cC(["\xab[Back to Tests|../]"])
s=document.getElementById(d)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.mr(s,!0,!0,!0,!1)
q=new E.bu()
q.a=""
q.b=!0
p=O.jv()
q.y=p
p.aX(q.gfW(),q.gfZ())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
q.sc6(0,c)
q.sc6(0,F.od())
o=new O.dv()
p=O.jv()
o.e=p
p.aX(o.gec(),o.gee())
p=new O.ao(o,"emission")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
o.f=p
p=new O.ao(o,"ambient")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
o.r=p
p=new O.ao(o,"diffuse")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
o.x=p
p=new O.ao(o,"invDiffuse")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
o.y=p
p=new O.hw(o,"specular")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
p.ch=100
o.z=p
p=new O.hs(o,"bump")
p.c=new A.T(!1,!1,!1)
o.Q=p
o.ch=null
p=new O.ao(o,"reflect")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
o.cx=p
p=new O.hv(o,"refract")
p.c=new A.T(!1,!1,!1)
p.f=new V.N(0,0,0)
p.ch=1
o.cy=p
p=new O.hr(o,"alpha")
p.c=new A.T(!1,!1,!1)
p.f=1
o.db=p
p=new D.c7()
p.bj()
p.e=[]
p.f=[]
p.r=[]
p.x=[]
p.z=p.y=null
p.c5(p.gea(),p.geO(),p.geS())
o.dx=p
n=new O.hu()
n.b=new V.aZ(0,0,0,0)
n.c=1
n.d=10
n.e=!1
o.dy=n
n=p.y
p=n==null?p.y=D.G():n
p.n(0,o.gf6())
p=o.dx
n=p.z
p=n==null?p.z=D.G():n
p.n(0,o.gei())
o.fr=null
p=o.dx
m=V.jL()
n=U.kg(V.kq(V.kv(),m,new V.B(-1,-1,-1)))
l=new V.N(1,1,1)
k=new D.bt()
k.c=new V.N(1,1,1)
k.a=V.kN()
k.d=V.jL()
k.e=V.mt()
j=k.b
k.b=n
n.gu().n(0,k.gdF())
n=new D.x("mover",j,k.b)
n.b=!0
k.aj(n)
if(!k.c.q(0,l)){j=k.c
k.c=l
n=new D.x("color",j,l)
n.b=!0
k.aj(n)}p.n(0,k)
o.f.sap(0,new V.N(0,0,0))
p=o.r
p.sap(0,new V.N(0,0,1))
p=o.x
p.sap(0,new V.N(0,1,0))
p=o.z
p.sap(0,new V.N(1,0,0))
p=o.z
p.ct(new A.T(!0,!1,!1))
p.cu(10)
i=new U.bw()
i.bj()
i.aX(i.ge8(),i.geQ())
i.e=null
i.f=V.dy()
i.r=0
p=r.x
n=new U.cq()
k=U.jw()
k.sc3(0,!0)
k.sbT(6.283185307179586)
k.sbV(0)
k.sa0(0,0)
k.sbU(100)
k.sN(0)
k.sbI(0.5)
n.b=k
h=n.gaC()
k.gu().n(0,h)
k=U.jw()
k.sc3(0,!0)
k.sbT(6.283185307179586)
k.sbV(0)
k.sa0(0,0)
k.sbU(100)
k.sN(0)
k.sbI(0.5)
n.c=k
k.gu().n(0,h)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
g=new X.a7(!1,!1,!1)
j=n.d
n.d=g
k=new D.x(b,j,g)
k.b=!0
n.I(k)
k=n.f
if(k!==!1){n.f=!1
k=new D.x("invertX",k,!1)
k.b=!0
n.I(k)}k=n.r
if(k!==!0){n.r=!0
k=new D.x("invertY",k,!0)
k.b=!0
n.I(k)}n.aS(p)
i.n(0,n)
p=r.x
n=new U.cp()
k=U.jw()
k.sc3(0,!0)
k.sbT(6.283185307179586)
k.sbV(0)
k.sa0(0,0)
k.sbU(100)
k.sN(0)
k.sbI(0.2)
n.b=k
k.gu().n(0,n.gaC())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
g=new X.a7(!0,!1,!1)
j=n.c
n.c=g
k=new D.x(b,j,g)
k.b=!0
n.I(k)
n.aS(p)
i.n(0,n)
p=r.x
n=new U.cr()
n.c=0.01
n.e=n.d=0
g=new X.a7(!1,!1,!1)
n.b=g
k=new D.x(b,c,g)
k.b=!0
n.I(k)
n.aS(p)
i.n(0,n)
i.n(0,U.kg(V.ap(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
p=new M.dc()
p.a=!0
n=O.jv()
p.e=n
n.aX(p.gek(),p.gem())
p.y=p.x=p.r=p.f=null
f=X.lZ(c)
e=new X.dL()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sd2(c)
n=e.c
$.z().toString
if(!(Math.abs(n-1.0471975511965976)<1e-9)){e.c=1.0471975511965976
n=new D.x("fov",n,1.0471975511965976)
n.b=!0
e.aD(n)}n=e.d
$.z().toString
if(!(Math.abs(n-0.1)<1e-9)){e.d=0.1
n=new D.x("near",n,0.1)
n.b=!0
e.aD(n)}n=e.e
$.z().toString
if(!(Math.abs(n-2000)<1e-9)){e.e=2000
n=new D.x("far",n,2000)
n.b=!0
e.aD(n)}n=p.b
if(n!==e){if(n!=null)n.gu().O(0,p.gad())
j=p.b
p.b=e
e.gu().n(0,p.gad())
n=new D.x("camera",j,p.b)
n.b=!0
p.ak(n)}n=p.c
if(n!==f){if(n!=null)n.gu().O(0,p.gad())
j=p.c
p.c=f
f.gu().n(0,p.gad())
n=new D.x("target",j,p.c)
n.b=!0
p.ak(n)}p.sde(c)
p.sde(o)
p.e.n(0,q)
p.b.sd2(i)
n=r.d
if(n!==p){if(n!=null)n.gu().O(0,r.gcb())
r.d=p
p.gu().n(0,r.gcb())
r.cc()}p=r.Q
if(p==null)p=r.Q=D.G()
n=p.b
p=n==null?p.b=[]:n
p.push(new Q.jo(a,o))
V.o8(r)},
jo:function jo(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jB.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gR:function(a){return H.ck(a)},
i:function(a){return"Instance of '"+H.d(H.dQ(a))+"'"}}
J.hh.prototype={
i:function(a){return String(a)},
gR:function(a){return a?519018:218159}}
J.c6.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gR:function(a){return 0}}
J.b5.prototype={
gR:function(a){return 0},
i:function(a){return String(a)}}
J.dM.prototype={}
J.bg.prototype={}
J.af.prototype={
i:function(a){var s=a[$.lo()]
if(s==null)return this.dt(a)
return"JavaScript function for "+H.d(J.ad(s))}}
J.a6.prototype={
bY:function(a,b){if(!!a.fixed$length)H.p(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dR(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var s
if(!!a.fixed$length)H.p(P.w("remove"))
for(s=0;s<a.length;++s)if(J.D(a[s],b)){a.splice(s,1)
return!0}return!1},
a6:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.w("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.n)(b),++r)a.push(b[r])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b_(a))}},
k:function(a,b){var s,r,q=P.jD(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fS:function(a){return this.k(a,"")},
fP:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.b_(a))}throw H.c(H.hg())},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gfO:function(a){if(a.length>0)return a[0]
throw H.c(H.hg())},
gba:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hg())},
cD:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.b_(a))}return!1},
aO:function(a,b){if(!!a.immutable$list)H.p(P.w("sort"))
H.mq(a,b==null?J.n6():b)},
dn:function(a){return this.aO(a,null)},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.D(a[s],b))return!0
return!1},
i:function(a){return P.jz(a,"[","]")},
gK:function(a){return new J.Y(a,a.length)},
gR:function(a){return H.ck(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.w("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bS(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dn.prototype={}
J.Y.prototype={
gA:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b4.prototype={
aJ:function(a,b){var s
if(typeof b!="number")throw H.c(H.bk(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb9(b)
if(this.gb9(a)===s)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
cX:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
df:function(a,b){var s
if(b>20)throw H.c(P.aF(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gR:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
dj:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dv:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
b2:function(a,b){var s
if(a>0)s=this.fh(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fh:function(a,b){return b>31?0:a>>>b},
$iW:1,
$iO:1}
J.c5.prototype={$ir:1}
J.dm.prototype={}
J.ak.prototype={
bH:function(a,b){if(b<0)throw H.c(H.bS(a,b))
if(b>=a.length)H.p(H.bS(a,b))
return a.charCodeAt(b)},
b_:function(a,b){if(b>=a.length)throw H.c(H.bS(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.k9(b,null,null))
return a+b},
bh:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aY:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dR(b,null))
if(b>c)throw H.c(P.dR(b,null))
if(c>a.length)throw H.c(P.dR(c,null))
return a.substring(b,c)},
ai:function(a,b){return this.aY(a,b,null)},
hl:function(a){return a.toLowerCase()},
p:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
av:function(a,b){var s=b-a.length
if(s<=0)return a
return this.p(" ",s)+a},
fA:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aF(c,0,s,null,null))
return H.lk(a,b,c)},
w:function(a,b){return this.fA(a,b,0)},
aJ:function(a,b){var s
if(typeof b!="string")throw H.c(H.bk(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gR:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gl:function(a){return a.length},
$iK:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bH(this.a,b)}}
H.i.prototype={}
H.ca.prototype={
gK:function(a){return new H.aE(this,this.gl(this))},
bg:function(a,b){return this.ds(0,b)}}
H.aE.prototype={
gA:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.bl(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.b_(q))
s=r.c
if(typeof o!=="number")return H.q(o)
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.b7.prototype={
gK:function(a){return new H.cc(J.aU(this.a),this.b)},
gl:function(a){return J.aV(this.a)},
B:function(a,b){return this.b.$1(J.fA(this.a,b))}}
H.c0.prototype={$ii:1}
H.cc.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gA(r))
return!0}s.a=null
return!1},
gA:function(a){var s=this.a
return s}}
H.cd.prototype={
gl:function(a){return J.aV(this.a)},
B:function(a,b){return this.b.$1(J.fA(this.a,b))}}
H.bi.prototype={
gK:function(a){return new H.ev(J.aU(this.a),this.b)}}
H.ev.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gA(s)))return!0
return!1},
gA:function(a){var s=this.a
return s.gA(s)}}
H.c2.prototype={}
H.eq.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bK.prototype={}
H.im.prototype={
a8:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.dG.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dp.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.ep.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hO.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f8.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.br.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lm(r==null?"unknown":r)+"'"},
gho:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ic.prototype={}
H.i8.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lm(s)+"'"}}
H.bV.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bV))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gR:function(a){var s,r=this.c
if(r==null)s=H.ck(this.a)
else s=typeof r!=="object"?J.X(r):H.ck(r)
return(s^H.ck(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dQ(s))+"'")}}
H.dT.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.v.prototype={
gl:function(a){return this.a},
ga_:function(a){return new H.aD(this)},
ghn:function(a){return H.m6(new H.aD(this),new H.hj(this))},
fB:function(a,b){var s=this.b
if(s==null)return!1
return this.dV(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b0(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b0(p,b)
q=r==null?n:r.b
return q}else return o.fR(b)},
fR:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cn(q,J.X(a)&0x3ffffff)
r=this.cY(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cf(s==null?m.b=m.by():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cf(r==null?m.c=m.by():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.by()
p=J.X(b)&0x3ffffff
o=m.cn(q,p)
if(o==null)m.bB(q,p,[m.bz(b,c)])
else{n=m.cY(o,b)
if(n>=0)o[n].b=c
else o.push(m.bz(b,c))}}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b_(s))
r=r.c}},
cf:function(a,b,c){var s=this.b0(a,b)
if(s==null)this.bB(a,b,this.bz(b,c))
else s.b=c},
e5:function(){this.r=this.r+1&67108863},
bz:function(a,b){var s,r=this,q=new H.hm(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.e5()
return q},
cY:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1},
i:function(a){return P.kp(this)},
b0:function(a,b){return a[b]},
cn:function(a,b){return a[b]},
bB:function(a,b,c){a[b]=c},
dZ:function(a,b){delete a[b]},
dV:function(a,b){return this.b0(a,b)!=null},
by:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bB(r,s,r)
this.dZ(r,s)
return r}}
H.hj.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.n4(this.a).am("2(1)")}}
H.hm.prototype={}
H.aD.prototype={
gl:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.ds(s,s.r)
r.c=s.e
return r}}
H.ds.prototype={
gA:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b_(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jj.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jk.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jl.prototype={
$1:function(a){return this.a(a)}}
H.hi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cg.prototype={}
H.bB.prototype={
gl:function(a){return a.length},
$it:1}
H.b9.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]},
m:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cf.prototype={
m:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dA.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dB.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dC.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dD.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dE.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.ch.prototype={
gl:function(a){return a.length},
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dF.prototype={
gl:function(a){return a.length},
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.ab.prototype={
am:function(a){return H.fm(v.typeUniverse,this,a)},
cg:function(a){return H.mU(v.typeUniverse,this,a)}}
H.eL.prototype={}
H.eG.prototype={
i:function(a){return this.a}}
H.cK.prototype={}
P.iS.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.iR.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iT.prototype={
$0:function(){this.a.$0()}}
P.iU.prototype={
$0:function(){this.a.$0()}}
P.cJ.prototype={
dJ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bR(new P.j8(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dK:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bR(new P.j7(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$icn:1}
P.j8.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j7.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dv(s,o)}q.c=p
r.d.$1(q)}}
P.bO.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bj.prototype={
gA:function(a){var s=this.c
if(s==null)return this.b
return s.gA(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bO){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aU(s)
if(o instanceof P.bj){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cG.prototype={
gK:function(a){return new P.bj(this.a())}}
P.ew.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.cn.prototype={}
P.jb.prototype={}
P.je.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.ad(this.b)
throw s}}
P.j0.prototype={
hg:function(a){var s,r,q,p=null
try{if(C.e===$.ah){a.$0()
return}P.nC(p,p,this,a)}catch(q){s=H.ax(q)
r=H.jZ(q)
P.l8(p,p,this,s,r)}},
hh:function(a,b){var s,r,q,p=null
try{if(C.e===$.ah){a.$1(b)
return}P.nD(p,p,this,a,b)}catch(q){s=H.ax(q)
r=H.jZ(q)
P.l8(p,p,this,s,r)}},
hi:function(a,b){return this.hh(a,b,t.z)},
fv:function(a){return new P.j1(this,a)},
cH:function(a,b){return new P.j2(this,a,b)}}
P.j1.prototype={
$0:function(){return this.a.hg(this.b)}}
P.j2.prototype={
$1:function(a){return this.a.hi(this.b,a)},
$S:function(){return this.c.am("~(0)")}}
P.cu.prototype={
gK:function(a){var s=new P.cv(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dT(b)
return r}},
dT:function(a){var s=this.d
if(s==null)return!1
return this.bp(s[this.bm(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ci(s==null?q.b=P.jN():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ci(r==null?q.c=P.jN():r,b)}else return q.dM(0,b)},
dM:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jN()
s=q.bm(b)
r=p[s]
if(r==null)p[s]=[q.bl(b)]
else{if(q.bp(r,b)>=0)return!1
r.push(q.bl(b))}return!0},
O:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.f0(this.c,b)
else return this.f_(0,b)},
f_:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bm(b)
r=n[s]
q=o.bp(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cz(p)
return!0},
ci:function(a,b){if(a[b]!=null)return!1
a[b]=this.bl(b)
return!0},
f0:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cz(s)
delete a[b]
return!0},
cj:function(){this.r=1073741823&this.r+1},
bl:function(a){var s,r=this,q=new P.j_(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cj()
return q},
cz:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cj()},
bm:function(a){return J.X(a)&1073741823},
bp:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1}}
P.j_.prototype={}
P.cv.prototype={
gA:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b_(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c4.prototype={}
P.c9.prototype={$ii:1,$if:1}
P.A.prototype={
gK:function(a){return new H.aE(a,this.gl(a))},
B:function(a,b){return this.h(a,b)},
gd_:function(a){return this.gl(a)===0},
hk:function(a,b){var s,r,q,p,o=this
if(o.gd_(a)){s=J.kl(0)
return s}r=o.h(a,0)
q=P.jD(o.gl(a),r,!0)
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.q(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
hj:function(a){return this.hk(a,!0)},
i:function(a){return P.jz(a,"[","]")}}
P.du.prototype={}
P.hp.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:16}
P.an.prototype={
D:function(a,b){var s,r
for(s=J.aU(this.ga_(a));s.t();){r=s.gA(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aV(this.ga_(a))},
i:function(a){return P.kp(a)}}
P.cC.prototype={
a6:function(a,b){var s
for(s=J.aU(b);s.t();)this.n(0,s.gA(s))},
i:function(a){return P.jz(this,"{","}")},
B:function(a,b){var s,r,q,p="index"
P.lM(b,p)
P.ky(b,p)
for(s=P.mE(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.H(b,this,p,null,r))},
$ii:1,
$if:1}
P.cw.prototype={}
P.d5.prototype={}
P.d7.prototype={}
P.fZ.prototype={}
P.he.prototype={
i:function(a){return this.a}}
P.hd.prototype={
dW:function(a,b,c){var s,r,q,p,o,n,m=null
for(s=this.a,r=s.e,q=s.d,s=s.c,p=b,o=m;p<c;++p){if(p>=a.length)return H.e(a,p)
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
default:n=m}if(n!=null){if(o==null)o=new P.aH("")
if(p>b)o.a+=C.b.aY(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.lK(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.iz.prototype={}
P.iA.prototype={
fC:function(a){var s,r,q,p=null,o=P.jG(0,p,a.length)
if(o==null)throw H.c(new P.bF(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.j9(r)
if(q.e0(a,0,o)!==o){C.b.bH(a,o-1)
q.bD()}return new Uint8Array(r.subarray(0,H.mZ(0,q.b,r.length)))}}
P.j9.prototype={
bD:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fo:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.e(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.e(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=128|s&63
return!0}else{n.bD()
return!1}},
e0:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bH(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.b_(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fo(p,C.b.b_(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bD()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.e(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.e(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=128|p&63}}}return q}}
P.av.prototype={}
P.a5.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.a5&&this.a===b.a&&!0},
aJ:function(a,b){return C.c.aJ(this.a,b.a)},
gR:function(a){var s=this.a
return(s^C.c.b2(s,30))&1073741823},
i:function(a){var s=this,r=P.lV(H.mg(s)),q=P.da(H.me(s)),p=P.da(H.ma(s)),o=P.da(H.mb(s)),n=P.da(H.md(s)),m=P.da(H.mf(s)),l=P.lW(H.mc(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.W.prototype={}
P.b0.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gR:function(a){return C.c.gR(this.a)},
aJ:function(a,b){return C.c.aJ(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fW(),o=this.a
if(o<0)return"-"+new P.b0(0-o).i(0)
s=p.$1(C.c.X(o,6e7)%60)
r=p.$1(C.c.X(o,1e6)%60)
q=new P.fV().$1(o%1e6)
return""+C.c.X(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fV.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fW.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.F.prototype={}
P.d0.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h1(s)
return"Assertion failed"}}
P.dH.prototype={
i:function(a){return"Throw of null."}}
P.a1.prototype={
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbo()+o+m
if(!q.a)return l
s=q.gbn()
r=P.h1(q.b)
return l+s+": "+r}}
P.bF.prototype={
gbo:function(){return"RangeError"},
gbn:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.dk.prototype={
gbo:function(){return"RangeError"},
gbn:function(){var s,r=this.b
if(typeof r!=="number")return r.a4()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gl:function(a){return this.f}}
P.er.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eo.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bH.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d6.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h1(s)+"."}}
P.dK.prototype={
i:function(a){return"Out of Memory"},
$iF:1}
P.cl.prototype={
i:function(a){return"Stack Overflow"},
$iF:1}
P.d8.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eI.prototype={
i:function(a){return"Exception: "+this.a}}
P.h9.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.aY(q,0,75)+"..."
return r+"\n"+q}}
P.hb.prototype={}
P.r.prototype={}
P.f.prototype={
bg:function(a,b){return new H.bi(this,b)},
gl:function(a){var s,r=this.gK(this)
for(s=0;r.t();)++s
return s},
gaA:function(a){var s,r=this.gK(this)
if(!r.t())throw H.c(H.hg())
s=r.gA(r)
if(r.t())throw H.c(H.m0())
return s},
B:function(a,b){var s,r,q
P.ky(b,"index")
for(s=this.gK(this),r=0;s.t();){q=s.gA(s)
if(b===r)return q;++r}throw H.c(P.H(b,this,"index",null,r))},
i:function(a){return P.m_(this,"(",")")}}
P.dl.prototype={}
P.am.prototype={$ii:1,$if:1}
P.dt.prototype={}
P.a9.prototype={
gR:function(a){return P.J.prototype.gR.call(C.f,this)},
i:function(a){return"null"}}
P.O.prototype={}
P.J.prototype={constructor:P.J,$iJ:1,
q:function(a,b){return this===b},
gR:function(a){return H.ck(this)},
i:function(a){return"Instance of '"+H.d(H.dQ(this))+"'"},
toString:function(){return this.i(this)}}
P.K.prototype={}
P.aH.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fB.prototype={
gl:function(a){return a.length}}
W.cZ.prototype={
i:function(a){return String(a)}}
W.d_.prototype={
i:function(a){return String(a)}}
W.bp.prototype={$ibp:1}
W.d2.prototype={}
W.aW.prototype={$iaW:1}
W.aX.prototype={
di:function(a,b,c){var s=a.getContext(b,P.nQ(c))
return s},
$iaX:1}
W.ae.prototype={
gl:function(a){return a.length}}
W.fN.prototype={
gl:function(a){return a.length}}
W.E.prototype={$iE:1}
W.bX.prototype={
gl:function(a){return a.length}}
W.fO.prototype={}
W.a4.prototype={}
W.aj.prototype={}
W.fP.prototype={
gl:function(a){return a.length}}
W.fQ.prototype={
gl:function(a){return a.length}}
W.fR.prototype={
gl:function(a){return a.length}}
W.bY.prototype={}
W.fT.prototype={
i:function(a){return String(a)}}
W.bZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.c_.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaz(a))+" x "+H.d(this.gar(a))},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aP(b)
s=a.left==s.gbb(b)&&a.top==s.gbe(b)&&this.gaz(a)==s.gaz(b)&&this.gar(a)==s.gar(b)}else s=!1
return s},
gR:function(a){return W.kU(J.X(a.left),J.X(a.top),J.X(this.gaz(a)),J.X(this.gar(a)))},
gcI:function(a){return a.bottom},
gar:function(a){return a.height},
gbb:function(a){return a.left},
gc0:function(a){return a.right},
gbe:function(a){return a.top},
gaz:function(a){return a.width},
$iaa:1}
W.db.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fU.prototype={
gl:function(a){return a.length}}
W.ey.prototype={
gd_:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var s=this.hj(this)
return new J.Y(s,s.length)}}
W.y.prototype={
gfu:function(a){return new W.iW(a)},
gcJ:function(a){return new W.ey(a,a.children)},
gcK:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a4()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a4()
if(p<0)p=-p*0
return new P.aa(s,r,q,p,t.q)},
i:function(a){return a.localName},
a7:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kj
if(s==null){s=[]
r=new W.cj(s)
s.push(W.kS(null))
s.push(W.kY())
$.kj=r
d=r}else d=s
s=$.ki
if(s==null){s=new W.fn(d)
$.ki=s
c=s}else{s.a=d
c=s}}if($.aA==null){s=document
r=s.implementation.createHTMLDocument("")
$.aA=r
$.jx=r.createRange()
r=$.aA.createElement("base")
t.v.a(r)
r.href=s.baseURI
$.aA.head.appendChild(r)}s=$.aA
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aA
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.aA.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.P,a.tagName)){$.jx.selectNodeContents(q)
s=$.jx
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.aA.body)J.k6(q)
c.c4(p)
document.adoptNode(p)
return p},
fD:function(a,b,c){return this.a7(a,b,c,null)},
dl:function(a,b){a.textContent=null
a.appendChild(this.a7(a,b,null,null))},
gdd:function(a){return a.tagName},
$iy:1}
W.fX.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
fp:function(a,b,c,d){if(c!=null)this.dN(a,b,c,!1)},
dN:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$ib:1}
W.b1.prototype={$ib1:1}
W.dd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.de.prototype={
gl:function(a){return a.length}}
W.dg.prototype={
gl:function(a){return a.length}}
W.b2.prototype={$ib2:1}
W.hc.prototype={
gl:function(a){return a.length}}
W.b3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.b6.prototype={$ib6:1}
W.hn.prototype={
i:function(a){return String(a)}}
W.hF.prototype={
gl:function(a){return a.length}}
W.hG.prototype={
h:function(a,b){return P.aO(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
ga_:function(a){var s=[]
this.D(a,new W.hH(s))
return s},
gl:function(a){return a.size}}
W.hH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hI.prototype={
h:function(a,b){return P.aO(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
ga_:function(a){var s=[]
this.D(a,new W.hJ(s))
return s},
gl:function(a){return a.size}}
W.hJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b8.prototype={$ib8:1}
W.dz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.a2.prototype={$ia2:1}
W.R.prototype={
gaA:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jH("No elements"))
if(r>1)throw H.c(P.jH("More than one element"))
s=s.firstChild
s.toString
return s},
a6:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gK:function(a){var s=this.a.childNodes
return new W.c3(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.u.prototype={
ha:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
he:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lE(s,b,a)}catch(q){H.ax(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dr(a):s},
f4:function(a,b,c){return a.replaceChild(b,c)},
$iu:1}
W.ci.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ba.prototype={
gl:function(a){return a.length},
$iba:1}
W.dO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.hW.prototype={
h:function(a,b){return P.aO(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
ga_:function(a){var s=[]
this.D(a,new W.hX(s))
return s},
gl:function(a){return a.size}}
W.hX.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dU.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.dX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bc.prototype={$ibc:1}
W.dY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bd.prototype={
gl:function(a){return a.length},
$ibd:1}
W.i9.prototype={
h:function(a,b){return a.getItem(H.jT(b))},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga_:function(a){var s=[]
this.D(a,new W.ia(s))
return s},
gl:function(a){return a.length}}
W.ia.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aI.prototype={$iaI:1}
W.cm.prototype={
a7:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
s=W.lX("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.R(r).a6(0,new W.R(s))
return r}}
W.e3.prototype={
a7:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.a7(s.createElement("table"),b,c,d)
s.toString
s=new W.R(s)
q=s.gaA(s)
q.toString
s=new W.R(q)
p=s.gaA(s)
r.toString
p.toString
new W.R(r).a6(0,new W.R(p))
return r}}
W.e4.prototype={
a7:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.a7(s.createElement("table"),b,c,d)
s.toString
s=new W.R(s)
q=s.gaA(s)
r.toString
q.toString
new W.R(r).a6(0,new W.R(q))
return r}}
W.bI.prototype={$ibI:1}
W.aJ.prototype={$iaJ:1}
W.ag.prototype={$iag:1}
W.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.e6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ig.prototype={
gl:function(a){return a.length}}
W.be.prototype={$ibe:1}
W.bf.prototype={$ibf:1}
W.ea.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ik.prototype={
gl:function(a){return a.length}}
W.at.prototype={}
W.iy.prototype={
i:function(a){return String(a)}}
W.et.prototype={
gl:function(a){return a.length}}
W.aK.prototype={
gfG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfF:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$iaK:1}
W.bL.prototype={
f5:function(a,b){return a.requestAnimationFrame(H.bR(b,1))},
e_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bM.prototype={$ibM:1}
W.ez.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ct.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aP(b)
s=a.left==s.gbb(b)&&a.top==s.gbe(b)&&a.width==s.gaz(b)&&a.height==s.gar(b)}else s=!1
return s},
gR:function(a){return W.kU(J.X(a.left),J.X(a.top),J.X(a.width),J.X(a.height))},
gar:function(a){return a.height},
gaz:function(a){return a.width}}
W.eM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cx.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.f5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.iV.prototype={
D:function(a,b){var s,r,q,p,o
for(s=this.ga_(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga_:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.iW.prototype={
h:function(a,b){return this.a.getAttribute(H.jT(b))},
gl:function(a){return this.ga_(this).length}}
W.jy.prototype={}
W.eH.prototype={}
W.iX.prototype={
$1:function(a){return this.a.$1(a)}}
W.jM.prototype={}
W.bN.prototype={
dE:function(a){var s
if($.eN.a===0){for(s=0;s<262;++s)$.eN.m(0,C.O[s],W.nY())
for(s=0;s<12;++s)$.eN.m(0,C.k[s],W.nZ())}},
aG:function(a){return $.lC().w(0,W.c1(a))},
af:function(a,b,c){var s=$.eN.h(0,H.d(W.c1(a))+"::"+b)
if(s==null)s=$.eN.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia8:1}
W.C.prototype={
gK:function(a){return new W.c3(a,this.gl(a))}}
W.cj.prototype={
aG:function(a){return C.a.cD(this.a,new W.hM(a))},
af:function(a,b,c){return C.a.cD(this.a,new W.hL(a,b,c))},
$ia8:1}
W.hM.prototype={
$1:function(a){return a.aG(this.a)}}
W.hL.prototype={
$1:function(a){return a.af(this.a,this.b,this.c)}}
W.cD.prototype={
dI:function(a,b,c,d){var s,r,q
this.a.a6(0,c)
s=b.bg(0,new W.j4())
r=b.bg(0,new W.j5())
this.b.a6(0,s)
q=this.c
q.a6(0,C.Q)
q.a6(0,r)},
aG:function(a){return this.a.w(0,W.c1(a))},
af:function(a,b,c){var s=this,r=W.c1(a),q=s.c
if(q.w(0,H.d(r)+"::"+b))return s.d.fs(c)
else if(q.w(0,"*::"+b))return s.d.fs(c)
else{q=s.b
if(q.w(0,H.d(r)+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,H.d(r)+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$ia8:1}
W.j4.prototype={
$1:function(a){return!C.a.w(C.k,a)}}
W.j5.prototype={
$1:function(a){return C.a.w(C.k,a)}}
W.fe.prototype={
af:function(a,b,c){if(this.du(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.j6.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.fd.prototype={
aG:function(a){var s
if(t.Y.b(a))return!1
s=t.W.b(a)
if(s&&W.c1(a)==="foreignObject")return!1
if(s)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.b.bh(b,"on"))return!1
return this.aG(a)},
$ia8:1}
W.c3.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cX(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gA:function(a){return this.d}}
W.a8.prototype={}
W.j3.prototype={}
W.fn.prototype={
c4:function(a){var s=this,r=new W.ja(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aR:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.k6(a)
else b.removeChild(a)},
f9:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.lH(a)
l=m.a.getAttribute("is")
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=='attributes'||h.name=='attributes'||h.id=='lastChild'||h.name=='lastChild'||h.id=='previousSibling'||h.name=='previousSibling'||h.id=='children'||h.name=='children')return true}return false}(a)
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ax(p)}r="element unprintable"
try{r=J.ad(a)}catch(p){H.ax(p)}try{q=W.c1(a)
this.f8(a,b,n,r,q,m,l)}catch(p){if(H.ax(p) instanceof P.a1)throw p
else{this.aR(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
f8:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aR(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aG(a)){m.aR(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.af(a,"is",g)){m.aR(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.ga_(f).slice(0)
for(q=f.ga_(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.lL(p)
H.jT(p)
if(!o.af(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.c4(a.content)}}
W.ja.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.f9(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aR(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.jH("Corrupt HTML")
throw H.c(q)}}catch(o){H.ax(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f2.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f9.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
P.jf.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.df.prototype={
gb1:function(){return new H.b7(new H.bi(this.b,new P.h7()),new P.h8())},
m:function(a,b,c){var s=this.gb1()
J.lJ(s.b.$1(J.fA(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aV(this.gb1().a)},
h:function(a,b){var s=this.gb1()
return s.b.$1(J.fA(s.a,b))},
gK:function(a){var s=P.jE(this.gb1(),!1)
return new J.Y(s,s.length)}}
P.h7.prototype={
$1:function(a){return t.h.b(a)}}
P.h8.prototype={
$1:function(a){return t.h.a(a)}}
P.f1.prototype={
gc0:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
gcI:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
q:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aP(b)
if(s==r.gbb(b)){q=n.b
if(q==r.gbe(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.q(p)
o=n.$ti.c
if(o.a(s+p)===r.gc0(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.q(s)
r=o.a(q+s)===r.gcI(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gR:function(a){var s,r=this,q=r.a,p=J.X(q),o=r.b,n=J.X(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.q(m)
s=r.$ti.c
m=C.c.gR(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.q(q)
q=C.c.gR(s.a(o+q))
return P.mD(P.iZ(P.iZ(P.iZ(P.iZ(0,p),n),m),q))}}
P.aa.prototype={
gbb:function(a){return this.a},
gbe:function(a){return this.b},
gaz:function(a){return this.c},
gar:function(a){return this.d}}
P.bx.prototype={$ibx:1}
P.dr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bC.prototype={$ibC:1}
P.dI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hQ.prototype={
gl:function(a){return a.length}}
P.bG.prototype={$ibG:1}
P.e2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcJ:function(a){return new P.df(a,new W.R(a))},
a7:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.kS(null))
n.push(W.kY())
n.push(new W.fd())
c=new W.fn(new W.cj(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.m.fD(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.R(q)
o=n.gaA(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bJ.prototype={$ibJ:1}
P.eb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eQ.prototype={}
P.eR.prototype={}
P.eY.prototype={}
P.eZ.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fj.prototype={}
P.fk.prototype={}
P.fF.prototype={
gl:function(a){return a.length}}
P.fG.prototype={
h:function(a,b){return P.aO(a.get(b))},
D:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aO(s.value[1]))}},
ga_:function(a){var s=[]
this.D(a,new P.fH(s))
return s},
gl:function(a){return a.size}}
P.fH.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d1.prototype={
gl:function(a){return a.length}}
P.az.prototype={}
P.dJ.prototype={
gl:function(a){return a.length}}
P.ex.prototype={}
P.dZ.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
s=P.aO(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f6.prototype={}
P.f7.prototype={}
K.ay.prototype={
au:function(a,b){return!0},
i:function(a){return"all"}}
K.di.prototype={
au:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].au(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.Z.prototype={
au:function(a,b){return!this.dq(0,b)},
i:function(a){return"!["+this.c8(0)+"]"}}
K.hR.prototype={
au:function(a,b){if(typeof b!=="number")return H.q(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.jF(this.a),r=H.jF(this.b)
return s+".."+r}}
K.hY.prototype={
dA:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
s=new H.v(t.E)
for(r=new H.aE(a,a.gl(a));r.t();){q=r.d
s.m(0,q,!0)}p=P.jE(new H.aD(s),!0)
C.a.dn(p)
this.a=p},
au:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.jI(this.a)}}
L.e_.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.il(this.a.j(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fN:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.au(0,a))return p}return null},
i:function(a){return this.b},
cw:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.w(0,l))m+=" (consume)"
for(l=new H.aD(n.d.c),l=l.gK(l);l.t();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.w(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.n)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e8.prototype={
i:function(a){var s=H.k2(this.b,"\n","\\n"),r=H.k2(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e9.prototype={
aw:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.n)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.ih.prototype={
j:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.e_(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
H:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e9(a)
s.c=new H.v(t.i)
this.b.m(0,a,s)}return s},
c1:function(a){return this.hm(a)},
hm:function(a){var s=this
return P.ne(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$c1(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.bY(a0,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fN(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jI(b)
throw H.c(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.p(P.w("removeRange"))
P.jG(0,k,b.length)
b.splice(0,k-0)
C.a.a6(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.w(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)c.push(j)
d=h.b
if(d.d!=null){g=P.jI(c)
f=d.d
e=f.c.h(0,g)
n=new L.e8(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.w(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mB()
case 1:return P.mC(o)}}},t.j)},
i:function(a){var s,r=new P.aH(""),q=this.d
if(q!=null)r.a=q.cw()+"\n"
for(q=this.a,q=q.ghn(q),q=new H.cc(J.aU(q.a),q.b);q.t();){s=q.a
if(s!=this.d)r.a+=s.cw()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.il.prototype={
i:function(a){return this.b.b+": "+this.c8(0)}}
O.bs.prototype={
bj:function(){this.a=[]
this.c=this.b=null},
c5:function(a,b,c){this.b=b
this.c=a},
aX:function(a,b){return this.c5(a,null,b)},
eN:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dD:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.Y(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.eN([b])){s=this.a
r=s.length
s.push(b)
this.dD(r,[b])}},
$if:1}
O.ce.prototype={
gl:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.G():s},
aB:function(){var s=this.b
if(s!=null)s.C(null)},
gT:function(a){var s=this.a
if(s.length>0)return C.a.gba(s)
else return V.dy()},
d9:function(a){var s=this.a
if(a==null)s.push(V.dy())
else s.push(a)
this.aB()},
bX:function(){var s=this.a
if(s.length>0){s.pop()
this.aB()}}}
E.fJ.prototype={}
E.bu.prototype={
sc6:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gu().O(0,q.gd5())
s=q.c
if(s!=null)s.gu().n(0,q.gd5())
r=new D.x("shape",p,q.c)
r.b=!0
q.bc(r)}},
ah:function(a,b){var s
for(s=this.y.a,s=new J.Y(s,s.length);s.t();)s.d.ah(0,b)},
aL:function(a){var s,r=this,q=a.dx
q.a.push(q.gT(q))
q.aB()
a.da(r.f)
q=a.dy
s=(q&&C.a).gba(q)
if(s!=null&&r.d!=null)s.hd(a,r)
for(q=r.y.a,q=new J.Y(q,q.length);q.t();)q.d.aL(a)
a.d8()
a.dx.bX()},
bc:function(a){var s=this.z
if(s!=null)s.C(a)},
a2:function(){return this.bc(null)},
d6:function(a){this.e=null
this.bc(a)},
h0:function(){return this.d6(null)},
d4:function(a){this.bc(a)},
fY:function(){return this.d4(null)},
fX:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gd3(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bv()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a2()},
h_:function(a,b){var s,r
for(s=b.gK(b),r=this.gd3();s.t();)s.gA(s).gu().O(0,r)
this.a2()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bq.prototype={
i:function(a){return this.b}}
E.bD.prototype={
i:function(a){return this.b}}
E.eF.prototype={}
E.hS.prototype={
dz:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a5(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.ce()
s.a=[]
s.gu().n(0,new E.hT(r))
r.cy=s
s=new O.ce()
s.a=[]
s.gu().n(0,new E.hU(r))
r.db=s
s=new O.ce()
s.a=[]
s.gu().n(0,new E.hV(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.v(t.G)},
gh9:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gT(q)
s=r.db
s=r.z=q.p(0,s.gT(s))
q=s}return q},
da:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gba(s):a)},
d8:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hT.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hU.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hV.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e7.prototype={
cd:function(a){this.dc()},
cc:function(){return this.cd(null)},
gfQ:function(){var s,r=this,q=Date.now(),p=C.c.X(P.kh(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a5(q,!1)
return s/p},
cr:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.q(p)
s=C.d.cX(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.p()
r=C.d.cX(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kF(C.j,q.ghf())}},
dc:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.y.e_(s)
r=W.l9(new E.ie(this),t.H)
r.toString
C.y.f5(s,r)}},
hc:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cr()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a5(p,!1)
q.y=P.kh(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aB()
p=q.db
C.a.sl(p.a,0)
p.aB()
p=q.dx
C.a.sl(p.a,0)
p.aB()
p=q.dy
p.toString
C.a.sl(p,0)
q.dy.push(null)
m.aL(n.e)}q=n.Q
if(q!=null)q.C(null)}catch(o){s=H.ax(o)
r=H.jZ(o)
P.k1("Error: "+H.d(s))
P.k1("Stack: "+H.d(r))
throw H.c(s)}}}
E.ie.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hc()}}}
Z.eu.prototype={}
Z.fK.prototype={
b4:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ax(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.iQ.prototype={}
Z.d3.prototype={
aK:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
b4:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].b4(a)},
dg:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aL:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.ad(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(o,", ")+"\nAttrs:   "+C.a.k(p,", ")}}
Z.hf.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dQ(this.c))+"'")+"]"}}
Z.bh.prototype={
gc7:function(a){var s=this.a,r=(s&$.aT().a)!==0?3:0
if((s&$.aS().a)!==0)r+=3
if((s&$.aR().a)!==0)r+=3
if((s&$.bn().a)!==0)r+=2
if((s&$.bo().a)!==0)r+=3
if((s&$.cV().a)!==0)r+=3
if((s&$.cW().a)!==0)r+=4
if((s&$.bU().a)!==0)++r
return(s&$.aQ().a)!==0?r+4:r},
ft:function(a){var s,r=$.aT(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bo()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aQ()
if((q&r.a)!==0)if(s===a)return r
return $.lB()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aT().a)!==0)s.push("Pos")
if((r&$.aS().a)!==0)s.push("Norm")
if((r&$.aR().a)!==0)s.push("Binm")
if((r&$.bn().a)!==0)s.push("Txt2D")
if((r&$.bo().a)!==0)s.push("TxtCube")
if((r&$.cV().a)!==0)s.push("Clr3")
if((r&$.cW().a)!==0)s.push("Clr4")
if((r&$.bU().a)!==0)s.push("Weight")
if((r&$.aQ().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.fL.prototype={}
D.bv.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
O:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.a
s=(q&&C.a).O(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.b
s=(q&&C.a).O(q,b)||s}return s},
C:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.P()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.D(P.jE(s,!0),new D.h2(o))
s=p.b
if(s!=null){p.b=[]
C.a.D(s,new D.h3(o))}return!0},
ax:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.h2.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.h3.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.P.prototype={}
D.aB.prototype={}
D.aC.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.d4.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dq.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dq))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.hk.prototype={
h5:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
h1:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.cb.prototype={}
X.ho.prototype={
aP:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.p()
s=b.b
r=o.ch
if(typeof s!=="number")return s.p()
q=new V.aq(m.a+l*k,m.b+s*r)
r=o.a.gaI()
p=new X.bz(a,V.bb(),o.x,r,q)
p.b=!0
o.z=new P.a5(n,!1)
o.x=q
return p},
bW:function(a,b){this.r=a.a
return!1},
aV:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dk()
if(typeof s!=="number")return s.a9()
this.r=(s&~r)>>>0
return!1},
aU:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.aP(a,b))
return!0},
h6:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaI()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.p()
o=a.b
n=m.cy
if(typeof o!=="number")return o.p()
r=new X.bA(new V.a_(q*p,o*n),s,r)
r.b=!0
l.C(r)
return!0},
eC:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cb(c,p.a.gaI(),b)
q.b=!0
r.C(q)
p.y=new P.a5(s,!1)
p.x=V.bb()}}
X.a7.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a7))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bz.prototype={}
X.hK.prototype={
bq:function(a,b,c){var s=this,r=new P.a5(Date.now(),!1),q=s.a.gaI(),p=new X.bz(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
bW:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bq(a,b,!0))
return!0},
aV:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dk()
if(typeof r!=="number")return r.a9()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.C(s.bq(a,b,!0))
return!0},
aU:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bq(a,b,!1))
return!0},
h7:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaI()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.p()
p=a.b
o=n.ch
if(typeof p!=="number")return p.p()
s=new X.bA(new V.a_(r*q,p*o),s,b)
s.b=!0
m.C(s)
return!0},
gcO:function(){var s=this.b
return s==null?this.b=D.G():s},
gc2:function(){var s=this.c
return s==null?this.c=D.G():s},
gd1:function(){var s=this.d
return s==null?this.d=D.G():s}}
X.bA.prototype={}
X.dP.prototype={}
X.co.prototype={}
X.ij.prototype={
aP:function(a,b){var s=this,r=new P.a5(Date.now(),!1),q=a.length>0?a[0]:V.bb(),p=s.a.gaI(),o=new X.co(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
h4:function(a){var s=this.b
if(s==null)return!1
s.C(this.aP(a,!0))
return!0},
h2:function(a){var s=this.c
if(s==null)return!1
s.C(this.aP(a,!0))
return!0},
h3:function(a){var s=this.d
if(s==null)return!1
s.C(this.aP(a,!1))
return!0}}
X.es.prototype={
gaI:function(){var s=this.a,r=C.i.gcK(s).c
r.toString
s=C.i.gcK(s).d
s.toString
return V.kz(0,0,r,s)},
cl:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dq(s,new X.a7(r,a.altKey,a.shiftKey))},
aF:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a7(r,a.altKey,a.shiftKey)},
bC:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a7(r,a.altKey,a.shiftKey)},
ao:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.W()
if(typeof o!=="number")return H.q(o)
s=r.top
if(typeof p!=="number")return p.W()
if(typeof s!=="number")return H.q(s)
return new V.aq(q-o,p-s)},
aQ:function(a){return new V.a_(a.movementX,a.movementY)},
bA:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=C.d.ab(p.pageX)
C.d.ab(p.pageY)
n=k.left
if(typeof n!=="number")return H.q(n)
C.d.ab(p.pageX)
m=C.d.ab(p.pageY)
l=k.top
if(typeof l!=="number")return H.q(l)
j.push(new V.aq(o-n,m-l))}return j},
al:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d4(s,new X.a7(r,a.altKey,a.shiftKey))},
br:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.W()
if(typeof n!=="number")return H.q(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.W()
if(typeof p!=="number")return H.q(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.q(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.q(p)
p=r<p}else p=!1
return p},
ew:function(a){this.f=!0},
eh:function(a){this.f=!1},
ep:function(a){if(this.f&&this.br(a))a.preventDefault()},
eA:function(a){var s
if(!this.f)return
s=this.cl(a)
this.b.h5(s)},
ey:function(a){var s
if(!this.f)return
s=this.cl(a)
this.b.h1(s)},
eE:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aF(a)
if(p.x){s=p.al(a)
r=p.aQ(a)
if(p.d.bW(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.al(a)
q=p.ao(a)
if(p.c.bW(s,q))a.preventDefault()},
eI:function(a){var s,r,q,p=this
p.aF(a)
s=p.al(a)
if(p.x){r=p.aQ(a)
if(p.d.aV(s,r))a.preventDefault()
return}if(p.r)return
q=p.ao(a)
if(p.c.aV(s,q))a.preventDefault()},
eu:function(a){var s,r,q,p=this
if(!p.br(a)){p.aF(a)
s=p.al(a)
if(p.x){r=p.aQ(a)
if(p.d.aV(s,r))a.preventDefault()
return}if(p.r)return
q=p.ao(a)
if(p.c.aV(s,q))a.preventDefault()}},
eG:function(a){var s,r,q,p=this
p.aF(a)
s=p.al(a)
if(p.x){r=p.aQ(a)
if(p.d.aU(s,r))a.preventDefault()
return}if(p.r)return
q=p.ao(a)
if(p.c.aU(s,q))a.preventDefault()},
er:function(a){var s,r,q,p=this
if(!p.br(a)){p.aF(a)
s=p.al(a)
if(p.x){r=p.aQ(a)
if(p.d.aU(s,r))a.preventDefault()
return}if(p.r)return
q=p.ao(a)
if(p.c.aU(s,q))a.preventDefault()}},
eK:function(a){var s,r,q=this
q.aF(a)
s=new V.a_((a&&C.x).gfF(a),C.x.gfG(a)).p(0,q.Q)
if(q.x){if(q.d.h6(s))a.preventDefault()
return}if(q.r)return
r=q.ao(a)
if(q.c.h7(s,r))a.preventDefault()},
eM:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.al(q.y)
r=q.ao(q.y)
q.d.eC(s,r,p)}},
eZ:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bC(a)
s=r.bA(a)
if(r.e.h4(s))a.preventDefault()},
eV:function(a){var s
this.bC(a)
s=this.bA(a)
if(this.e.h2(s))a.preventDefault()},
eX:function(a){var s
this.bC(a)
s=this.bA(a)
if(this.e.h3(s))a.preventDefault()}}
D.bt.prototype={
aj:function(a){var s=this.r
if(s!=null)s.C(a)},
dG:function(){return this.aj(null)},
$ial:1}
D.al.prototype={}
D.c7.prototype={
aj:function(a){var s=this.y
if(s!=null)s.C(a)},
cp:function(a){var s=this.z
if(s!=null)s.C(a)},
eB:function(){return this.cp(null)},
eP:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(q==null||this.dU(q))return!1}return!0},
eb:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gco(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p instanceof D.bt)this.f.push(p)
o=p.r
if(o==null){o=new D.bv()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aB()
s.b=!0
this.aj(s)},
eT:function(a,b){var s,r,q
for(s=b.gK(b),r=this.gco();s.t();){q=s.gA(s)
C.a.O(this.e,q)
q.gu().O(0,r)}s=new D.aC()
s.b=!0
this.aj(s)},
dU:function(a){var s=C.a.w(this.f,a)
return s}}
V.N.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.aZ.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aZ))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.L(s.a,3,0)+", "+V.L(s.b,3,0)+", "+V.L(s.c,3,0)+", "+V.L(s.d,3,0)+"]"}}
V.h0.prototype={}
V.dx.prototype={
a3:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dx))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=V.bT([o.a,o.d,o.r],3,0),m=V.bT([o.b,o.e,o.x],3,0),l=V.bT([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.e(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.e(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.e(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.e(n,1)
p=" "+n[1]+", "
if(1>=r)return H.e(m,1)
p=p+m[1]+", "
if(1>=q)return H.e(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.e(n,2)
k=" "+n[2]+", "
if(2>=r)return H.e(m,2)
k=k+m[2]+", "
if(2>=q)return H.e(l,2)
return p+(k+l[2]+"]")}}
V.by.prototype={
a3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cZ:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.z().toString
if(Math.abs(b3-0)<1e-9)return V.dy()
s=1/b3
r=-l
q=-a2
return V.ap((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
p:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ap(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bf:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aW:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.U(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.by))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
if(!(Math.abs(b.z-r.z)<1e-9))return!1
if(!(Math.abs(b.Q-r.Q)<1e-9))return!1
if(!(Math.abs(b.ch-r.ch)<1e-9))return!1
if(!(Math.abs(b.cx-r.cx)<1e-9))return!1
if(!(Math.abs(b.cy-r.cy)<1e-9))return!1
if(!(Math.abs(b.db-r.db)<1e-9))return!1
if(!(Math.abs(b.dx-r.dx)<1e-9))return!1
return!0},
i:function(a){return this.M()},
F:function(a){var s,r,q,p,o,n=this,m=V.bT([n.a,n.e,n.y,n.cx],3,0),l=V.bT([n.b,n.f,n.z,n.cy],3,0),k=V.bT([n.c,n.r,n.Q,n.db],3,0),j=V.bT([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.e(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.e(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.e(m,1)
o=o+m[1]+", "
if(1>=r)return H.e(l,1)
o=o+l[1]+", "
if(1>=q)return H.e(k,1)
o=o+k[1]+", "
if(1>=p)return H.e(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.e(m,2)
s=s+m[2]+", "
if(2>=r)return H.e(l,2)
s=s+l[2]+", "
if(2>=q)return H.e(k,2)
s=s+k[2]+", "
if(2>=p)return H.e(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.e(m,3)
o=o+m[3]+", "
if(3>=r)return H.e(l,3)
o=o+l[3]+", "
if(3>=q)return H.e(k,3)
o=o+k[3]+", "
if(3>=p)return H.e(j,3)
return s+(o+j[3]+"]")},
M:function(){return this.F("")}}
V.aq.prototype={
U:function(a){return new V.a_(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.U.prototype={
v:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
W:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.dS.prototype={
ga1:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dS))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.L(s.a,3,0)+", "+V.L(s.b,3,0)+", "+V.L(s.c,3,0)+", "+V.L(s.d,3,0)+"]"}}
V.a_.prototype={
bR:function(a){return Math.sqrt(this.Y(this))},
Y:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.q(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.q(r)
return q*p+s*r},
p:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.p()
if(typeof b!=="number")return H.q(b)
s=this.b
if(typeof s!=="number")return s.p()
return new V.a_(r*b,s*b)},
S:function(a,b){var s,r
$.z().toString
if(Math.abs(b-0)<1e-9){s=$.kJ
return s==null?$.kJ=new V.a_(0,0):s}s=this.a
if(typeof s!=="number")return s.S()
r=this.b
if(typeof r!=="number")return r.S()
return new V.a_(s/b,r/b)},
q:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
r=this.a
$.z().toString
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.W()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.B.prototype={
bR:function(a){return Math.sqrt(this.Y(this))},
Y:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
G:function(){var s=this,r=Math.sqrt(s.Y(s))
if(r===1)return s
return s.S(0,r)},
aq:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.B(-this.a,-this.b,-this.c)},
p:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
S:function(a,b){$.z().toString
if(Math.abs(b-0)<1e-9)return V.cs()
return new V.B(this.a/b,this.b/b,this.c/b)},
d0:function(){$.z().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.fM.prototype={
bk:function(a){var s=V.oe(a,this.c,this.b)
return s},
gu:function(){var s=this.y
return s==null?this.y=D.G():s},
I:function(a){var s=this.y
if(s!=null)s.C(a)},
sc3:function(a,b){},
sbT:function(a){var s,r=this,q=r.b
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bk(s)}q=new D.x("maximumLocation",q,r.b)
q.b=!0
r.I(q)}},
sbV:function(a){var s,r=this,q=r.c
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bk(s)}q=new D.x("minimumLocation",q,r.c)
q.b=!0
r.I(q)}},
sa0:function(a,b){var s,r=this
b=r.bk(b)
s=r.d
$.z().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.x("location",s,b)
s.b=!0
r.I(s)}},
sbU:function(a){var s,r,q=this,p=q.e
$.z().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.x("maximumVelocity",p,a)
p.b=!0
q.I(p)}},
sN:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.x("velocity",r,a)
r.b=!0
s.I(r)}},
sbI:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.x("dampening",s,a)
s.b=!0
this.I(s)}},
ah:function(a,b){var s,r,q,p=this,o=p.f
$.z().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa0(0,p.d+s*b)
o=p.x
$.z().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sN(s)}}}
U.bW.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.G():s},
aM:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bW))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.bw.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.G():s},
I:function(a){var s=this.e
if(s!=null)s.C(a)},
Z:function(){return this.I(null)},
e9:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaC(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.gu()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aB()
s.b=!0
this.I(s)},
eR:function(a,b){var s,r
for(s=b.gK(b),r=this.gaC();s.t();)s.gA(s).gu().O(0,r)
s=new D.aC()
s.b=!0
this.I(s)},
aM:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a4()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.Y(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.aM(0,b,c)
if(r!=null)s=s==null?r:r.p(0,s)}}q.f=s==null?V.dy():s
p=q.e
if(p!=null)p.ax(0)}return q.f},
q:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bw))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.D(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iQ:1}
U.Q.prototype={}
U.cp.prototype={
gu:function(){var s=this.cy
return s==null?this.cy=D.G():s},
I:function(a){var s=this.cy
if(s!=null)s.C(a)},
Z:function(){return this.I(null)},
aS:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gcO().n(0,s.gbs())
s.a.c.gd1().n(0,s.gbu())
s.a.c.gc2().n(0,s.gbw())
return!0},
bt:function(a){var s=this
if(!J.D(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bv:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.U(a.d)
s=s.Y(s)
r=l.r
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.U(a.d).p(0,2).S(0,s.ga1())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.p()
q=l.e
if(typeof q!=="number")return H.q(q)
r.sN(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.U(q).p(0,2).S(0,s.ga1())
r=l.b
o=p.a
if(typeof o!=="number")return o.L()
n=l.e
if(typeof n!=="number")return H.q(n)
m=l.z
if(typeof m!=="number")return H.q(m)
r.sa0(0,-o*n+m)
l.b.sN(0)
l.Q=a.z.U(q).p(0,2).S(0,s.ga1())}l.Z()},
bx:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.Y(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.p()
q=p.e
if(typeof q!=="number")return H.q(q)
s.sN(r*10*q)
p.Z()}},
aM:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a4()
if(o<n){p.ch=n
s=b.y
p.b.ah(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.ap(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iQ:1}
U.cq.prototype={
gu:function(){var s=this.fx
return s==null?this.fx=D.G():s},
I:function(a){var s=this.fx
if(s!=null)s.C(a)},
Z:function(){return this.I(null)},
aS:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gcO().n(0,q.gbs())
q.a.c.gd1().n(0,q.gbu())
q.a.c.gc2().n(0,q.gbw())
s=q.a.d
r=s.f
s=r==null?s.f=D.G():r
s.n(0,q.ge1())
s=q.a.d
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.ge3())
s=q.a.e
r=s.b
s=r==null?s.b=D.G():r
s.n(0,q.gfm())
s=q.a.e
r=s.d
s=r==null?s.d=D.G():r
s.n(0,q.gfk())
s=q.a.e
r=s.c
s=r==null?s.c=D.G():r
s.n(0,q.gfi())
return!0},
ae:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.L()
s=-s}if(this.r){if(typeof r!=="number")return r.L()
r=-r}return new V.a_(s,r)},
bt:function(a){var s=this
t.c.a(a)
if(!J.D(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bv:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.U(a.d)
s=s.Y(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ae(a.y.U(a.d).p(0,2).S(0,s.ga1()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.L()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sN(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.L()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sN(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ae(r.U(q).p(0,2).S(0,s.ga1()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa0(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa0(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.ae(a.z.U(q).p(0,2).S(0,s.ga1()))}l.Z()},
bx:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Y(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.L()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sN(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.L()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sN(-r*10*s)
p.Z()}},
e2:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
e4:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.D(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ae(r.U(q).p(0,2).S(0,s.ga1()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa0(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa0(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.ae(a.z.U(q).p(0,2).S(0,s.ga1()))
l.Z()},
fn:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fl:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.U(a.d)
s=s.Y(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ae(a.y.U(a.d).p(0,2).S(0,s.ga1()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.L()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sN(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.L()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sN(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.ae(r.U(q).p(0,2).S(0,s.ga1()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa0(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa0(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.ae(a.z.U(q).p(0,2).S(0,s.ga1()))}l.Z()},
fj:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Y(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.L()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sN(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.L()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sN(-r*10*s)
p.Z()}},
aM:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a4()
if(o<n){p.dy=n
s=b.y
p.c.ah(0,s)
p.b.ah(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.ap(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.p(0,V.ap(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iQ:1}
U.cr.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.G():s},
I:function(a){var s=this.r
if(s!=null)s.C(a)},
aS:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.G():r
r=p.ge6()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.G():q).n(0,r)
return!0},
e7:function(a){var s,r,q,p,o=this
if(!J.D(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.p()
p=s+r*q
if(s!==p){o.d=p
s=new D.x("zoom",s,p)
s.b=!0
o.I(s)}},
aM:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ap(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iQ:1}
M.dc.prototype={
ak:function(a){var s=this.y
if(s!=null)s.C(a)},
dH:function(){return this.ak(null)},
el:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gad(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bv()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aB()
s.b=!0
this.ak(s)},
en:function(a,b){var s,r
for(s=b.gK(b),r=this.gad();s.t();)s.gA(s).gu().O(0,r)
s=new D.aC()
s.b=!0
this.ak(s)},
sde:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gu().O(0,r.gad())
s=r.d
r.d=a
if(a!=null)a.gu().n(0,r.gad())
q=new D.x("technique",s,r.d)
q.b=!0
r.ak(q)}},
gu:function(){var s=this.y
return s==null?this.y=D.G():s},
aL:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.da(d.d)
s=d.c
s.toString
r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.q(q)
m=C.d.ab(n*q)
n=o.b
if(typeof p!=="number")return H.q(p)
l=C.d.ab(n*p)
n=C.d.ab(o.c*q)
a.c=n
o=C.d.ab(o.d*p)
a.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=d.b
r=a.c
o=a.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.ap(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.d9(g)
r=$.kt
if(r==null){r=V.kv()
o=V.jL()
n=$.kK
r=V.kq(r,o,n==null?$.kK=new V.B(0,0,-1):n)
$.kt=r
f=r}else f=r
r=s.b
if(r!=null){e=r.aM(0,a,s)
if(e!=null)f=e.p(0,f)}a.db.d9(f)
s=d.d
if(s!=null)s.ah(0,a)
for(s=d.e.a,s=new J.Y(s,s.length);s.t();)s.d.ah(0,a)
for(s=d.e.a,s=new J.Y(s,s.length);s.t();)s.d.aL(a)
d.b.toString
a.cy.bX()
a.db.bX()
d.c.toString
a.d8()}}
A.fD.prototype={}
A.fE.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fM:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fH:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.T.prototype={
gac:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.T))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.hq.prototype={
dw:function(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="Required uniform value, ",c6=", was not defined or used in shader.",c7="uniform mat4 objMat;\n"
c3.z=c8
s=new P.aH("")
r=c8.fr
if(r){s.a=c7
q=c7}else q=""
p=c8.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c8.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c8.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.nt(c8,s)
A.nv(c8,s)
A.nu(c8,s)
A.nx(c8,s)
A.ny(c8,s)
A.nw(c8,s)
A.nz(c8,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c8.ry
q+="   return projViewObjMat*vec4("+(m?"bendPos":"posAttr")+", 1.0);\n"
s.a=q
q+="}\n"
s.a=q
q+="\n"
s.a=q
q+="void main()\n"
s.a=q
q=s.a=q+"{\n"
if(m){q+="   setupBendData();\n"
s.a=q}if(o){q+="   normalVec = getNorm();\n"
s.a=q}if(n){q+="   binormalVec = getBinm();\n"
s.a=q}if(c8.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c8.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c8.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c8.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
l=q.charCodeAt(0)==0?q:q
k=A.ns(c3.z)
c3.c=l
c3.d=k
c3.e=c3.cm(l,35633)
c3.f=c3.cm(c3.d,35632)
q=c3.a
o=q.createProgram()
c3.r=o
q.attachShader(o,c3.e)
q.attachShader(c3.r,c3.f)
q.linkProgram(c3.r)
if(!q.getProgramParameter(c3.r,35714)){j=q.getProgramInfoLog(c3.r)
q.deleteProgram(c3.r)
H.p(P.o("Failed to link shader: "+H.d(j)))}c3.fe()
c3.fg()
c3.Q=c3.x.h(0,"posAttr")
c3.cx=c3.x.h(0,"normAttr")
c3.ch=c3.x.h(0,"binmAttr")
c3.cy=c3.x.h(0,"txt2DAttr")
c3.db=c3.x.h(0,"txtCubeAttr")
c3.dx=c3.x.h(0,"bendAttr")
if(c8.dy)c3.id=t.I.a(c3.y.P(0,"invViewMat"))
if(r)c3.dy=t.I.a(c3.y.P(0,"objMat"))
if(p)c3.fr=t.I.a(c3.y.P(0,"viewObjMat"))
r=t.I
c3.fy=r.a(c3.y.P(0,"projViewObjMat"))
if(c8.go)c3.fx=r.a(c3.y.P(0,"viewMat"))
if(c8.x1)c3.k1=t.O.a(c3.y.P(0,"txt2DMat"))
if(c8.x2)c3.k2=r.a(c3.y.P(0,"txtCubeMat"))
if(c8.y1)c3.k3=r.a(c3.y.P(0,"colorMat"))
c3.r1=[]
q=c8.b7
if(q>0){c3.k4=c3.y.P(0,"bendMatCount")
for(i=0;i<q;++i){p=c3.r1
o=c3.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.p(P.o(c5+n+c6))
p.push(r.a(h))}}if(c8.a.a)c3.r2=t.r.a(c3.y.P(0,"emissionClr"))
if(c8.b.a)c3.x1=t.r.a(c3.y.P(0,"ambientClr"))
if(c8.c.a)c3.y2=t.r.a(c3.y.P(0,"diffuseClr"))
if(c8.d.a)c3.b8=t.r.a(c3.y.P(0,"invDiffuseClr"))
r=c8.e.a
if(!r)q=!1
else q=!0
if(q){c3.cR=t.n.a(c3.y.P(0,"shininess"))
if(r)c3.cQ=t.r.a(c3.y.P(0,"specularClr"))}if(c8.db){c3.cS=t.Q.a(c3.y.P(0,"envSampler"))
if(c8.r.a)c3.cT=t.r.a(c3.y.P(0,"reflectClr"))
r=c8.x.a
if(!r)q=!1
else q=!0
if(q){c3.cU=t.n.a(c3.y.P(0,"refraction"))
if(r)c3.cV=t.r.a(c3.y.P(0,"refractClr"))}}if(c8.y.a)c3.cW=t.n.a(c3.y.P(0,"alpha"))
if(c8.k1){r=c8.z
q=r.length
if(q!==0){c3.bJ=new H.v(t.J)
c3.bK=new H.v(t.u)
for(p=t.r,o=t.n,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.a
d="barLight"+H.d(e)
c=[]
for(n=f.b,i=0;i<n;++i){m=c3.y
b=d+"s["+i+"].startPnt"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
p.a(h)
m=c3.y
b=d+"s["+i+"].endPnt"
a=m.h(0,b)
if(a==null)H.p(P.o(c5+b+c6))
p.a(a)
m=c3.y
b=d+"s["+i+"].color"
a0=m.h(0,b)
if(a0==null)H.p(P.o(c5+b+c6))
p.a(a0)
if(typeof e!=="number")return e.a9()
if((e&4)!==0){m=c3.y
b=d+"s["+i+"].att0"
a1=m.h(0,b)
if(a1==null)H.p(P.o(c5+b+c6))
o.a(a1)
m=c3.y
b=d+"s["+i+"].att1"
a2=m.h(0,b)
if(a2==null)H.p(P.o(c5+b+c6))
o.a(a2)
m=c3.y
b=d+"s["+i+"].att2"
a3=m.h(0,b)
if(a3==null)H.p(P.o(c5+b+c6))
o.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.eg(h,a,a0,a6,a5,a4))}c3.bK.m(0,e,c)
n=c3.bJ
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.Q
q=r.length
if(q!==0){c3.bL=new H.v(t.J)
c3.bM=new H.v(t.L)
for(p=t.r,o=t.s,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.d(e)
c=[]
for(n=f.b,i=0;i<n;++i){if(typeof e!=="number")return e.a9()
m=(e&1)!==0
if(m){b=c3.y
a7=d+"s["+i+"].objUp"
h=b.h(0,a7)
if(h==null)H.p(P.o(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].objRight"
a=b.h(0,a7)
if(a==null)H.p(P.o(c5+a7+c6))
p.a(a)
b=c3.y
a7=d+"s["+i+"].objDir"
a0=b.h(0,a7)
if(a0==null)H.p(P.o(c5+a7+c6))
p.a(a0)
a8=a0
a9=a
b0=h}else{a8=c4
a9=a8
b0=a9}b=c3.y
a7=d+"s["+i+"].viewDir"
h=b.h(0,a7)
if(h==null)H.p(P.o(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].color"
a=b.h(0,a7)
if(a==null)H.p(P.o(c5+a7+c6))
p.a(a)
if(m){m=c3.y
b=d+"sTexture2D"+i
a0=m.h(0,b)
if(a0==null)H.p(P.o(c5+b+c6))
o.a(a0)
b1=a0}else b1=c4
c.push(new A.eh(b0,a9,a8,h,a,b1))}c3.bM.m(0,e,c)
n=c3.bL
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.ch
q=r.length
if(q!==0){c3.bN=new H.v(t.J)
c3.bO=new H.v(t.U)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.d(e)
c=[]
for(a7=f.b,i=0;i<a7;++i){b2=c3.y
b3=d+"s["+i+"].point"
h=b2.h(0,b3)
if(h==null)H.p(P.o(c5+b3+c6))
p.a(h)
b2=c3.y
b3=d+"s["+i+"].viewPnt"
a=b2.h(0,b3)
if(a==null)H.p(P.o(c5+b3+c6))
p.a(a)
b2=c3.y
b3=d+"s["+i+"].color"
a0=b2.h(0,b3)
if(a0==null)H.p(P.o(c5+b3+c6))
p.a(a0)
if(typeof e!=="number")return e.a9()
if((e&3)!==0){b2=c3.y
b3=d+"s["+i+"].invViewRotMat"
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
o.a(a1)
b4=a1}else b4=c4
if((e&1)!==0){b2=c3.y
b3=d+"sTextureCube"+i
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
n.a(a1)
b1=a1}else b1=c4
if((e&2)!==0){b2=c3.y
b3=d+"sShadowCube"+i
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
n.a(a1)
b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
m.a(a2)
b5=a1
b6=a2}else{b5=c4
b6=b5}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a1=b2.h(0,b3)
if(a1==null)H.p(P.o(c5+b3+c6))
b.a(a1)
b2=c3.y
b3=d+"s["+i+"].att1"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
b.a(a2)
b2=c3.y
b3=d+"s["+i+"].att2"
a3=b2.h(0,b3)
if(a3==null)H.p(P.o(c5+b3+c6))
b.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.ek(h,a,b4,a0,b1,b5,b6,a6,a5,a4))}c3.bO.m(0,e,c)
a7=c3.bN
b2=c3.y
b3=d+"Count"
h=b2.h(0,b3)
if(h==null)H.p(P.o(c5+b3+c6))
a7.m(0,e,h)}}r=c8.cx
q=r.length
if(q!==0){c3.bP=new H.v(t.J)
c3.bQ=new H.v(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.s,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.d(e)
c=[]
for(b=f.b,i=0;i<b;++i){a7=c3.y
b2=d+"s["+i+"].objPnt"
h=a7.h(0,b2)
if(h==null)H.p(P.o(c5+b2+c6))
p.a(h)
a7=c3.y
b2=d+"s["+i+"].objDir"
a=a7.h(0,b2)
if(a==null)H.p(P.o(c5+b2+c6))
p.a(a)
a7=c3.y
b2=d+"s["+i+"].viewPnt"
a0=a7.h(0,b2)
if(a0==null)H.p(P.o(c5+b2+c6))
p.a(a0)
a7=c3.y
b2=d+"s["+i+"].color"
a1=a7.h(0,b2)
if(a1==null)H.p(P.o(c5+b2+c6))
p.a(a1)
if(typeof e!=="number")return e.a9()
if((e&3)!==0){a7=c3.y
b2=d+"s["+i+"].objUp"
a2=a7.h(0,b2)
if(a2==null)H.p(P.o(c5+b2+c6))
p.a(a2)
a7=c3.y
b2=d+"s["+i+"].objRight"
a3=a7.h(0,b2)
if(a3==null)H.p(P.o(c5+b2+c6))
p.a(a3)
a7=c3.y
b2=d+"s["+i+"].tuScalar"
b7=a7.h(0,b2)
if(b7==null)H.p(P.o(c5+b2+c6))
o.a(b7)
a7=c3.y
b2=d+"s["+i+"].tvScalar"
b8=a7.h(0,b2)
if(b8==null)H.p(P.o(c5+b2+c6))
o.a(b8)
b9=b8
c0=b7
a9=a3
b0=a2}else{b9=c4
c0=b9
a9=c0
b0=a9}a7=(e&2)!==0
if(a7){b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
n.a(a2)
b6=a2}else b6=c4
if((e&8)!==0){b2=c3.y
b3=d+"s["+i+"].cutoff"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].coneAngle"
a3=b2.h(0,b3)
if(a3==null)H.p(P.o(c5+b3+c6))
o.a(a3)
c1=a3
c2=a2}else{c1=c4
c2=c1}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].att1"
a3=b2.h(0,b3)
if(a3==null)H.p(P.o(c5+b3+c6))
o.a(a3)
b2=c3.y
b3=d+"s["+i+"].att2"
b7=b2.h(0,b3)
if(b7==null)H.p(P.o(c5+b3+c6))
o.a(b7)
a4=b7
a5=a3
a6=a2}else{a4=c4
a5=a4
a6=a5}if((e&1)!==0){b2=c3.y
b3=d+"sTexture2D"+i
a2=b2.h(0,b3)
if(a2==null)H.p(P.o(c5+b3+c6))
m.a(a2)
b1=a2}else b1=c4
if(a7){a7=c3.y
b2=d+"sShadow2D"+i
a2=a7.h(0,b2)
if(a2==null)H.p(P.o(c5+b2+c6))
m.a(a2)
b5=a2}else b5=c4
c.push(new A.en(h,a,a0,a1,b0,a9,c0,b9,b6,c2,c1,a6,a5,a4,b1,b5))}c3.bQ.m(0,e,c)
b=c3.bP
a7=c3.y
b2=d+"Count"
h=a7.h(0,b2)
if(h==null)H.p(P.o(c5+b2+c6))
b.m(0,e,h)}}}},
fa:function(a,b){}}
A.fI.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fS.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hP.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.i7.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.ht.prototype={
i:function(a){return this.aT}}
A.eg.prototype={}
A.eh.prototype={}
A.ek.prototype={}
A.en.prototype={}
A.dV.prototype={
dB:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
cm:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.o("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
fe:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fD(n,r.name,q))}p.x=new A.fE(o)},
fg:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fE(r.type,r.size,r.name,q))}p.y=new A.iw(o)},
aE:function(a,b,c){var s=this.a
if(a===1)return new A.ed(s,b,c)
else return A.jK(s,this.r,b,a,c)},
dX:function(a,b,c){var s=this.a
if(a===1)return new A.el(s,b,c)
else return A.jK(s,this.r,b,a,c)},
dY:function(a,b,c){var s=this.a
if(a===1)return new A.em(s,b,c)
else return A.jK(s,this.r,b,a,c)},
b3:function(a,b){return new P.eI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fE:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aE(b,c,d)
case 5121:return s.aE(b,c,d)
case 5122:return s.aE(b,c,d)
case 5123:return s.aE(b,c,d)
case 5124:return s.aE(b,c,d)
case 5125:return s.aE(b,c,d)
case 5126:return new A.ec(s.a,c,d)
case 35664:return new A.is(s.a,c,d)
case 35665:return new A.ee(s.a,c,d)
case 35666:return new A.ef(s.a,c,d)
case 35667:return new A.it(s.a,c,d)
case 35668:return new A.iu(s.a,c,d)
case 35669:return new A.iv(s.a,c,d)
case 35674:return new A.ix(s.a,c,d)
case 35675:return new A.ei(s.a,c,d)
case 35676:return new A.ej(s.a,c,d)
case 35678:return s.dX(b,c,d)
case 35680:return s.dY(b,c,d)
case 35670:throw H.c(s.b3("BOOL",c))
case 35671:throw H.c(s.b3("BOOL_VEC2",c))
case 35672:throw H.c(s.b3("BOOL_VEC3",c))
case 35673:throw H.c(s.b3("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.iq.prototype={}
A.iw.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
P:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.M()},
M:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ed.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.it.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.ec.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.is.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.ee.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.ef.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.ei.prototype={
aa:function(a){var s=new Float32Array(H.cN(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.ej.prototype={
aa:function(a){var s=new Float32Array(H.cN(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.el.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.em.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jr.prototype={
$1:function(a){return new V.U(Math.cos(a),Math.sin(a),0)}}
F.jg.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.k5(l.$1(m),k)
k=J.k5(l.$1(m+3.141592653589793/n.c),k).W(0,j)
s=new V.B(k.a,k.b,k.c).G()
l=$.kL
if(l==null){l=new V.B(1,0,0)
$.kL=l
r=l}else r=l
q=s.aq(!J.D(s,r)?V.kN():r).G()
r=q.aq(s).G()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.p(0,l*k)
k=q.p(0,o*k)
k=j.v(0,new V.U(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.D(a.f,k)){a.f=k
l=a.a
if(l!=null)l.a2()}}}
F.h4.prototype={
b6:function(){var s=this
if(!s.gcN()){C.a.O(s.a.a.d.b,s)
s.a.a.a2()}s.f1()
s.f2()
s.f3()},
fb:function(a){this.a=a
a.d.b.push(this)},
fc:function(a){this.b=a
a.d.c.push(this)},
fd:function(a){this.c=a
a.d.d.push(this)},
f1:function(){var s=this.a
if(s!=null){C.a.O(s.d.b,this)
this.a=null}},
f2:function(){var s=this.b
if(s!=null){C.a.O(s.d.c,this)
this.b=null}},
f3:function(){var s=this.c
if(s!=null){C.a.O(s.d.d,this)
this.c=null}},
gcN:function(){return this.a==null||this.b==null||this.c==null},
dQ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cs()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.d0())return p
return q.G()},
dS:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.W(0,n)
q=new V.B(o.a,o.b,o.c).G()
o=r.W(0,n)
return q.aq(new V.B(o.a,o.b,o.c).G()).G()},
bG:function(){var s,r=this
if(r.d!=null)return!0
s=r.dQ()
if(s==null){s=r.dS()
if(s==null)return!1}r.d=s
r.a.a.a2()
return!0},
dP:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cs()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.d0())return p
return q.G()},
dR:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.z().toString
if(Math.abs(p-0)<1e-9){j=b.W(0,e)
o=new V.B(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.L(0)}else{n=(j-s.b)/p
j=b.W(0,e).p(0,n).v(0,e).W(0,h)
o=new V.B(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.L(0)}j=l.d
if(j!=null){m=j.G()
o=m.aq(o).G().aq(m).G()}return o},
bE:function(){var s,r=this
if(r.e!=null)return!0
s=r.dP()
if(s==null){s=r.dR()
if(s==null)return!1}r.e=s
r.a.a.a2()
return!0},
gcL:function(a){var s=this
if(J.D(s.a,s.b))return!0
if(J.D(s.b,s.c))return!0
if(J.D(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s,r,q=this
if(q.gcN())return a+"disposed"
s=a+C.b.av(J.ad(q.a.e),0)+", "+C.b.av(J.ad(q.b.e),0)+", "+C.b.av(J.ad(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
M:function(){return this.F("")}}
F.h6.prototype={}
F.i6.prototype={
bS:function(a,b,c){var s,r=b.a
r.a.a.J()
r=r.e
s=c.a
s.a.a.J()
if(r==s.e){r=b.b
r.a.a.J()
r=r.e
s=c.b
s.a.a.J()
if(r==s.e){r=b.c
r.a.a.J()
r=r.e
s=c.c
s.a.a.J()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.J()
r=r.e
s=c.b
s.a.a.J()
if(r==s.e){r=b.b
r.a.a.J()
r=r.e
s=c.c
s.a.a.J()
if(r==s.e){r=b.c
r.a.a.J()
r=r.e
s=c.a
s.a.a.J()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.J()
r=r.e
s=c.c
s.a.a.J()
if(r==s.e){r=b.b
r.a.a.J()
r=r.e
s=c.a
s.a.a.J()
if(r==s.e){r=b.c
r.a.a.J()
r=r.e
s=c.b
s.a.a.J()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.hl.prototype={}
F.ip.prototype={}
F.hZ.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.G():s},
aH:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aH()||!1
if(!r.a.aH())s=!1
q=r.e
if(q!=null)q.ax(0)
return s},
fV:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gfO(s)
C.a.bY(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(o!=null&&a.bS(0,r,o)){q.push(o)
C.a.bY(s,p)}}if(q.length>1)b.fU(q)}}n.a.J()
n.c.bZ()
n.d.bZ()
n.b.hb()
n.c.c_(new F.ip())
n.d.c_(new F.i6())
m=n.e
if(m!=null)m.ax(0)},
fw:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.aT().a)!==0?1:0
if((s&$.aS().a)!==0)++r
if((s&$.aR().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.cV().a)!==0)++r
if((s&$.cW().a)!==0)++r
if((s&$.bU().a)!==0)++r
if((s&$.aQ().a)!==0)++r
q=a5.gc7(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.ft(l)
j=k.gc7(k)
n[l]=new Z.fK(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fT(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cN(o)),35044)
s.bindBuffer(a2,null)
b=new Z.d3(new Z.eu(a2,c),n,a5)
b.b=[]
a1.b.toString
a1.c.toString
if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.J()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.J()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.J()
a.push(h.e)}a0=Z.mu(s,34963,a)
b.b.push(new Z.hf(4,a.length,a0))}return b},
i:function(a){var s=this,r=[]
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.F("   "))}s.b.toString
s.c.toString
if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.F("   "))}return C.a.k(r,"\n")},
a2:function(){var s=this.e
if(s!=null)s.C(null)}}
F.i_.prototype={
fq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.e(c,q)
k=c[q];++q
if(q>=l)return H.e(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.e(c,i)
h=c[i]
if(r<0||r>=l)return H.e(c,r)
g=c[r]
l=s.a
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.h5(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.h5(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.h5(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.h5(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
c_:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.bS(0,n,l)){n.b6()
break}}}}},
bZ:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.gcL(q)
if(r)q.b6()}},
aH:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bG())q=!1
return q},
bF:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bE())q=!1
return q},
i:function(a){return this.M()},
F:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].F(a))
return C.a.k(p,"\n")},
M:function(){return this.F("")}}
F.i0.prototype={
gl:function(a){return 0},
c_:function(a){var s,r,q,p,o
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
p.c.toString
o=-1
for(;!1;--o)p.c.h(0,o)}},
bZ:function(){var s,r,q
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
q=r[s]
r=q.gcL(q)
if(r)q.b6()}},
i:function(a){return this.M()},
F:function(a){var s,r,q=[]
for(s=0;!1;++s){r=this.b
if(s>=0)return H.e(r,s)
q.push(r[s].F(a+(""+s+". ")))}return C.a.k(q,"\n")},
M:function(){return this.F("")}}
F.i1.prototype={
gl:function(a){return 0},
hb:function(){var s,r
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
r=r[s].ghN()
r=r.ghK(r)
if(r.gl(r).V(0,1)){r=this.b
return H.e(r,s)
r[s].b6()}}},
i:function(a){return this.M()},
F:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].F(a))}return C.a.k(q,"\n")},
M:function(){return this.F("")}}
F.iE.prototype={
cM:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kO(s.cx,p,m,r,q,o,n,a,l)},
fT:function(a){var s,r=this
if(a.q(0,$.aT())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aS())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.aR())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.bn())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.q(0,$.bo())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cV())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.q(0,$.cW())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.q(0,$.bU()))return[r.ch]
else if(a.q(0,$.aQ()))return[-1,-1,-1,-1]
else return[]},
bG:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cs()
r.d.D(0,new F.iP(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.a2()
q=r.a.e
if(q!=null)q.ax(0)}return!0},
bE:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.cs()
r.d.D(0,new F.iO(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.a2()
q=r.a.e
if(q!=null)q.ax(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
F:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.av(J.ad(q.e),0))
s=q.f
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.r
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.x
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.y
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.z
if(s!=null)o.push(s.i(0))
else o.push(p)
s=q.Q
if(s!=null)o.push(s.i(0))
else o.push(p)
o.push(V.L(q.ch,3,0))
o.push(p)
r=C.a.k(o,", ")
return a+"{"+r+"}"},
M:function(){return this.F("")}}
F.iP.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iO.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iF.prototype={
J:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a2()
return!0},
cB:function(a,b){var s=null,r=F.kO(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gl:function(a){return this.c.length},
aH:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bG()
return!0},
bF:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bE()
return!0},
fz:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.D(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}}return!0},
i:function(a){return this.M()},
F:function(a){var s,r,q,p
this.J()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].F(a))
return C.a.k(s,"\n")},
M:function(){return this.F("")}}
F.iG.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.e(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.e(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.e(r,b)
return r[b]},
D:function(a,b){var s=this
C.a.D(s.b,b)
C.a.D(s.c,new F.iH(s,b))
C.a.D(s.d,new F.iI(s,b))},
i:function(a){return this.M()},
M:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].F(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].F(""))
return C.a.k(p,"\n")}}
F.iH.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.iI.prototype={
$1:function(a){var s=this.a
if(!J.D(a.a,s)&&!J.D(a.b,s))this.b.$1(a)}}
F.iJ.prototype={
gl:function(a){return 0},
h:function(a,b){var s,r
if(b>=0){s=this.c
r=b-0
if(r>=0)return H.e(s,r)
return s[r]}else{s=this.b
return H.e(s,b)
return s[b]}},
i:function(a){return this.M()},
M:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].F(""))}for(s=this.c,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].F(""))}return C.a.k(q,"\n")}}
F.iL.prototype={}
F.iK.prototype={
bS:function(a,b,c){return J.D(b.f,c.f)}}
F.iM.prototype={}
F.hN.prototype={
fU:function(a){var s,r,q,p,o,n,m=V.cs()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.B(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.G()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){p=a[r]
o=q?null:m.G()
if(!J.D(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}return null}}
F.iN.prototype={
gl:function(a){return 0},
i:function(a){return this.M()},
M:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].F(""))}return C.a.k(q,"\n")}}
O.dv.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.G():s},
a5:function(a){var s=this.fr
if(s!=null)s.C(a)},
ej:function(){return this.a5(null)},
cq:function(a){this.a=null
this.a5(a)},
f7:function(){return this.cq(null)},
ed:function(a,b){var s=new D.aB()
s.b=!0
this.a5(s)},
ef:function(a,b){var s=new D.aC()
s.b=!0
this.a5(s)},
ck:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.v(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.gag()
n=d.h(0,p.gag())
d.m(0,o,n==null?1:n)}m=[]
d.D(0,new O.hx(f,m))
C.a.aO(m,new O.hy())
l=new H.v(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=[]
l.D(0,new O.hz(f,k))
C.a.aO(k,new O.hA())
j=new H.v(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.gag()
n=j.h(0,p.gag())
j.m(0,o,n==null?1:n)}i=[]
j.D(0,new O.hB(f,i))
C.a.aO(i,new O.hC())
h=new H.v(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.n)(e),++q){p=e[q]
r=p.gag()
o=h.h(0,p.gag())
h.m(0,r,o==null?1:o)}g=[]
h.D(0,new O.hD(f,g))
C.a.aO(g,new O.hE())
e=C.c.X(f.e.a.length+3,4)
f.dy.toString
return A.m8(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
dO:function(a,b){},
ah:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.Y(s,s.length);s.t();){r=s.d
r.toString
q=$.iD
if(q==null)q=$.iD=new V.B(0,0,1)
r.a=q
p=$.iC
r.d=p==null?$.iC=new V.B(0,1,0):p
p=$.iB
r.e=p==null?$.iB=new V.B(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bf(q).G()
r.d=o.bf(r.d).G()
r.e=o.bf(r.e).G()}}}},
hd:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.ck()
s=b6.fr.h(0,b5.aT)
if(s==null){s=A.m7(b5,b6.a)
r=s.b
if(r.length===0)H.p(P.o("May not cache a shader with no name."))
if(b6.fr.fB(0,r))H.p(P.o('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.m(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.b8
b5=b7.e
if(!(b5 instanceof Z.d3))b5=b7.e=null
if(b5==null||!b5.d.q(0,p)){b5=q.k4
if(b5)b7.d.aH()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bF()
n.a.bF()
n=n.e
if(n!=null)n.ax(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.fz()
m=m.e
if(m!=null)m.ax(0)}k=b7.d.fw(new Z.iQ(b6.a),p)
k.aK($.aT()).e=b4.a.Q.c
if(b5)k.aK($.aS()).e=b4.a.cx.c
if(o)k.aK($.aR()).e=b4.a.ch.c
if(q.r2)k.aK($.bn()).e=b4.a.cy.c
if(n)k.aK($.bo()).e=b4.a.db.c
if(q.ry)k.aK($.aQ()).e=b4.a.dx.c
b7.e=k}j=[]
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.fM()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gT(n)
b5=b5.dy
b5.toString
b5.aa(n.a3(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gT(n)
m=b6.dx
m=b6.cx=n.p(0,m.gT(m))
n=m}b5=b5.fr
b5.toString
b5.aa(n.a3(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gh9()
m=b6.dx
m=b6.ch=n.p(0,m.gT(m))
n=m}b5=b5.fy
b5.toString
b5.aa(n.a3(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gT(n)
b5=b5.fx
b5.toString
b5.aa(n.a3(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.aa(C.f.a3(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.aa(C.f.a3(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.aa(C.f.a3(n,!0))}if(q.b7>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.e(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.e(b5,h)
b5=b5[h]
g=new Float32Array(H.cN(n.a3(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}if(q.a.a){b5=b4.a
n=b4.f.f
b5=b5.r2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.k1){if(q.b.a){b5=b4.a
n=b4.r.f
b5=b5.x1
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.c.a){b5=b4.a
n=b4.x.f
b5=b5.y2
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}if(q.d.a){b5=b4.a
n=b4.y.f
b5=b5.b8
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.cR
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.cQ
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.v(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
c=d.gag()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
a=J.cX(b4.a.bK.h(0,c),b)
l=d.ghp()
a0=$.ar
l=l.aW(a0==null?$.ar=new V.U(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghu()
a0=$.ar
l=l.aW(a0==null?$.ar=new V.U(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gap(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gcP()){l=d.gcE()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gcF()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gcG()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bJ.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gT(n)
a2=new H.v(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.m(0,0,b+1)
a=J.cX(b4.a.bM.h(0,0),b)
l=a1.bf(d.a).G()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.bL.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gT(n)
a5=new H.v(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
c=d.gag()
b=a5.h(0,c)
if(b==null)b=0
a5.m(0,c,b+1)
a=J.cX(b4.a.bO.h(0,c),b)
a6=a1.p(0,d.gT(d))
l=d.gT(d)
a0=$.ar
l=l.aW(a0==null?$.ar=new V.U(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.ar
l=a6.aW(l==null?$.ar=new V.U(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gap(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=a6.cZ(0)
a0=l.a
a3=l.b
a4=l.c
a7=l.e
a8=l.f
a9=l.r
b0=l.y
b1=l.z
l=l.Q
b2=a.d
b2.toString
g=new Float32Array(H.cN(new V.dx(a0,a3,a4,a7,a8,a9,b0,b1,l).a3(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gay()
l=d.gay()
if(!C.a.w(j,l)){l.sas(0,j.length)
j.push(l)}l=d.gay()
a0=l.gat(l)
if(a0){a0=a.f
a0.toString
a3=l.gat(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gas(l))}d.gaN()
l=d.gdm()
a0=a.x
a0.toString
a3=l.gfJ(l)
a4=l.gfK(l)
a7=l.gfL()
l=l.gfI()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaN()
if(!C.a.w(j,l)){l.sas(0,j.length)
j.push(l)}l=d.gaN()
a0=l.gat(l)
if(a0){a0=a.r
a0.toString
a3=l.gat(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gas(l))}if(d.gcP()){l=d.gcE()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gcF()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gcG()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.bN.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gT(n)
b3=new H.v(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
c=d.gag()
b=b3.h(0,c)
if(b==null)b=0
b3.m(0,c,b+1)
a=J.cX(b4.a.bQ.h(0,c),b)
l=d.gh8(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghs(d).G()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.aW(d.gh8(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gap(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=d.gc2()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gc0(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghL()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.ghM()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gay()
l=d.gay()
if(!C.a.w(j,l)){l.sas(0,j.length)
j.push(l)}l=d.gay()
a0=l.gat(l)
if(a0){a0=a.dx
a0.toString
a3=l.gat(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gas(l))}d.gaN()
l=d.gdm()
a0=a.z
a0.toString
a3=l.gfJ(l)
a4=l.gfK(l)
a7=l.gfL()
l=l.gfI()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaN()
if(!C.a.w(j,l)){l.sas(0,j.length)
j.push(l)}l=d.gaN()
a0=l.gat(l)
if(a0){a0=a.dy
a0.toString
a3=l.gat(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gas(l))}if(d.ght()){l=d.ghr()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.ghq()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gcP()){l=d.gcE()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gcF()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gcG()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.bP.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gT(n).cZ(0)}b5=b5.id
b5.toString
b5.aa(n.a3(0,!0))}if(q.db){b4.dO(j,b4.ch)
b5=b4.a
n=b4.ch
b5.fa(b5.cS,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.cT
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.cU
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.cV
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.cW
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].b4(b6)
b5=b7.e
b5.b4(b6)
b5.aL(b6)
b5.dg(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h)j[h].dg(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.fH()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.ck().aT}}
O.hx.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.fI(a,C.c.X(b+3,4)*4))}}
O.hy.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.fS(a,C.c.X(b+3,4)*4))}}
O.hA.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.hP(a,C.c.X(b+3,4)*4))}}
O.hC.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.i7(a,C.c.X(b+3,4)*4))}}
O.hE.prototype={
$2:function(a,b){return J.cY(a.a,b.a)}}
O.hr.prototype={
an:function(){var s,r=this
r.c9()
s=r.f
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.x(r.b,s,1)
s.b=!0
r.a.a5(s)}}}
O.dw.prototype={
an:function(){},
ct:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.an()
s=q.a
s.a=null
s.a5(null)}}}
O.hs.prototype={}
O.ao.prototype={
cs:function(a){var s,r,q=this
if(!q.f.q(0,a)){s=q.f
q.f=a
r=new D.x(q.b+".color",s,a)
r.b=!0
q.a.a5(r)}},
an:function(){this.c9()
this.cs(new V.N(1,1,1))},
sap:function(a,b){this.ct(new A.T(!0,!1,!1))
this.cs(b)}}
O.hu.prototype={}
O.hv.prototype={
an:function(){var s,r=this
r.ca()
s=r.ch
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.x(r.b+".refraction",s,1)
s.b=!0
r.a.a5(s)}}}
O.hw.prototype={
cu:function(a){var s=this,r=s.ch
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.x(s.b+".shininess",r,a)
r.b=!0
s.a.a5(r)}},
an:function(){this.ca()
this.cu(100)}}
O.id.prototype={}
X.ju.prototype={}
X.ha.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.G():s}}
X.dL.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.G():s},
aD:function(a){var s=this.f
if(s!=null)s.C(a)},
dL:function(){return this.aD(null)},
sd2:function(a){var s,r,q=this
if(!J.D(q.b,a)){s=q.b
if(s!=null)s.gu().O(0,q.gce())
r=q.b
q.b=a
if(a!=null)a.gu().n(0,q.gce())
s=new D.x("mover",r,q.b)
s.b=!0
q.aD(s)}}}
X.ib.prototype={}
V.aY.prototype={
aZ:function(a){this.b=new P.hd(C.L)
this.c=null
this.d=[]},
E:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.dW(p,0,p.length)
m=n==null?p:n
C.J.dl(o,H.k2(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gba(l.d).push(o)}},
d7:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.b5()
r.toString
q=new H.l(s)
q=new P.bj(r.c1(new H.aE(q,q.gl(q))).a())
for(;q.t();)p.bd(q.gA(q))}}
V.jq.prototype={
$1:function(a){var s=C.d.df(this.a.gfQ(),2)
if(s!=="0.00")P.k1(s+" fps")}}
V.d9.prototype={
bd:function(a){var s=this
switch(a.a){case"Class":s.E(a.b,"#551")
break
case"Comment":s.E(a.b,"#777")
break
case"Id":s.E(a.b,"#111")
break
case"Num":s.E(a.b,"#191")
break
case"Reserved":s.E(a.b,"#119")
break
case"String":s.E(a.b,"#171")
break
case"Symbol":s.E(a.b,"#616")
break
case"Type":s.E(a.b,"#B11")
break
case"Whitespace":s.E(a.b,"#111")
break}},
b5:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.ii()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=a2.j(0,p).k(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=a2.j(0,q).k(0,o)
r=K.I("0","9")
s.a.push(r)
r=a2.j(0,o).k(0,o)
s=K.I("0","9")
r.a.push(s)
s=a2.j(0,o).k(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=a2.j(0,n).k(0,m)
s=K.I("0","9")
r.a.push(s)
s=a2.j(0,m).k(0,m)
r=K.I("0","9")
s.a.push(r)
r=a2.j(0,q).k(0,l)
s=K.m(new H.l(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=K.m(new H.l(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=K.m(new H.l('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=K.m(new H.l('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=K.m(new H.l("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=K.m(new H.l('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.ay())
r=a2.j(0,q).k(0,g)
s=K.m(new H.l("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=K.m(new H.l("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=K.m(new H.l("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=K.m(new H.l("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.ay())
r=a2.j(0,q).k(0,d)
s=K.m(new H.l("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=K.m(new H.l("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=K.m(new H.l("\n"))
r.a.push(s)
s=a2.j(0,c).k(0,c)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=a2.j(0,d).k(0,a)
r=K.m(new H.l("*"))
s.a.push(r)
r=a2.j(0,a).k(0,a0)
s=K.m(new H.l("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,a)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.m(new H.l("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,b)
r=K.m(new H.l("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=K.m(new H.l(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=K.m(new H.l(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.H("Num")
r=a2.j(0,m)
r.d=r.a.H("Num")
r=a2.j(0,l)
r.d=r.a.H("Symbol")
r=a2.j(0,i)
r.d=r.a.H("String")
r=a2.j(0,f)
r.d=r.a.H("String")
r=a2.j(0,b)
r.d=r.a.H(c)
r=a2.j(0,a1)
r.d=r.a.H(a1)
r=a2.j(0,p)
r=r.d=r.a.H(p)
r.aw(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aw(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aw(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dh.prototype={
bd:function(a){var s=this
switch(a.a){case"Builtin":s.E(a.b,"#411")
break
case"Comment":s.E(a.b,"#777")
break
case"Id":s.E(a.b,"#111")
break
case"Num":s.E(a.b,"#191")
break
case"Preprocess":s.E(a.b,"#737")
break
case"Reserved":s.E(a.b,"#119")
break
case"Symbol":s.E(a.b,"#611")
break
case"Type":s.E(a.b,"#171")
break
case"Whitespace":s.E(a.b,"#111")
break}},
b5:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.ii()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=d.j(0,p).k(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=d.j(0,q).k(0,o)
r=K.I("0","9")
s.a.push(r)
r=d.j(0,o).k(0,o)
s=K.I("0","9")
r.a.push(s)
s=d.j(0,o).k(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=d.j(0,n).k(0,m)
s=K.I("0","9")
r.a.push(s)
s=d.j(0,m).k(0,m)
r=K.I("0","9")
s.a.push(r)
r=d.j(0,q).k(0,l)
s=K.m(new H.l(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=K.m(new H.l(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=K.m(new H.l("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=K.m(new H.l("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.ay())
r=d.j(0,i).k(0,h)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.j(0,i).k(0,i)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,g)
r=K.m(new H.l("#"))
s.a.push(r)
r=d.j(0,g).k(0,g)
s=new K.Z()
s.a=[]
r.a.push(s)
r=K.m(new H.l("\n"))
s.a.push(r)
r=d.j(0,g).k(0,f)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=K.m(new H.l(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=K.m(new H.l(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.H("Num")
s=d.j(0,m)
s.d=s.a.H("Num")
s=d.j(0,l)
s.d=s.a.H("Symbol")
s=d.j(0,h)
s.d=s.a.H(i)
s=d.j(0,f)
s.d=s.a.H(g)
s=d.j(0,e)
s.d=s.a.H(e)
s=d.j(0,p)
s=s.d=s.a.H(p)
s.aw(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aw(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aw(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dj.prototype={
bd:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.E(a.b,"#911")
s.E("=",r)
break
case"Id":s.E(a.b,r)
break
case"Other":s.E(a.b,r)
break
case"Reserved":s.E(a.b,"#119")
break
case"String":s.E(a.b,"#171")
break
case"Symbol":s.E(a.b,"#616")
break}},
b5:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.ii()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=j.j(0,p).k(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=j.j(0,p).k(0,o)
r=K.m(new H.l("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=K.m(new H.l("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=K.m(new H.l("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=K.m(new H.l('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=K.m(new H.l('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=K.m(new H.l("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=K.m(new H.l('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.ay())
j.j(0,q).k(0,k).a.push(new K.ay())
s=j.j(0,k).k(0,k)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.m(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=j.j(0,n)
s.d=s.a.H("Symbol")
s=j.j(0,l)
s.d=s.a.H("String")
s=j.j(0,p)
r=s.a.H(p)
s.d=r
r.aw(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.H(o)
r=j.j(0,k)
r.d=r.a.H(k)
return j}}
V.dN.prototype={
d7:function(a,b){this.d=[]
this.E(C.a.k(b,"\n"),"#111")},
bd:function(a){},
b5:function(){return null}}
V.i2.prototype={
dC:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
m.className="scrollTop"
n.appendChild(m)
s=o.createElement("div")
s.className="scrollPage"
n.appendChild(s)
r=o.createElement("div")
r.className="pageCenter"
s.appendChild(r)
if(a.length!==0){o.title=a
q=o.createElement("div")
q.className="pageTitle"
q.textContent=a
r.appendChild(q)}p=o.createElement("div")
this.a=p
r.appendChild(p)
this.b=null
W.S(o,"scroll",new V.i4(m),!1)},
cC:function(a){var s,r,q,p,o,n,m,l
this.ff()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fS(a)
q.toString
p=new H.l(p)
p=new P.bj(q.c1(new H.aE(p,p.gl(p))).a())
for(;p.t();){q=p.gA(p)
switch(q.a){case"Bold":o=s.createElement("div")
o.className="boldPar"
o.textContent=q.b
r.appendChild(o)
break
case"Italic":o=s.createElement("div")
o.className="italicPar"
o.textContent=q.b
r.appendChild(o)
break
case"Code":o=s.createElement("div")
o.className="codePar"
o.textContent=q.b
r.appendChild(o)
break
case"Link":q=q.b
if(H.lk(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.l2(C.r,q,C.h,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+l
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
dh:function(a){var s,r,q,p=new V.d9("dart")
p.aZ("dart")
s=new V.dh("glsl")
s.aZ("glsl")
r=new V.dj("html")
r.aZ("html")
q=C.a.fP([p,s,r],new V.i5(a))
if(q!=null)return q
p=new V.dN("plain")
p.aZ("plain")
return p},
cA:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.jY(q).bh(q,"+")){b2[r]=C.b.ai(q,1)
a8.push(1)
s=!0}else if(C.b.bh(q,"-")){b2[r]=C.b.ai(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dh(b0)
p.d7(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.l2(C.r,a9,C.h,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.k7()
h.href="#"+l
h.textContent=a9
i.appendChild(h)
j.appendChild(i)
k.appendChild(j)
m.appendChild(k)
if(s)for(g=b1,f=g,r=0;e=p.d,r<e.length;++r){q=e[r]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className="codeLineNums codeLineLight"
b=o.createElement("td")
b.className=a6
if(r>=a8.length)return H.e(a8,r)
a=a8[r]
if(a===0){++f;++g
c.textContent=""+f
b.textContent=""+g}else if(a>0){d.className="codeTableRow codeLineLightGreen"
c.className="codeLineNums codeLineGreen codeLineCenter"
b.className="codeLineNums codeLineGreen";++g
c.textContent="+"
b.textContent=""+g}else if(a<0){d.className="codeTableRow codeLineLightRed"
c.className="codeLineNums codeLineRed"
b.className="codeLineNums codeLineRed codeLineCenter";++f
c.textContent=""+f
b.textContent="-"}a0=o.createElement("td")
a0.className=a7
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.n)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.n)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gK(q);a4.t();)b.appendChild(a4.gA(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
ff:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.ii()
s.d=s.j(0,p)
r=s.j(0,p).k(0,o)
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,o).k(0,o)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.m(new H.l("*"))
q.a.push(r)
r=s.j(0,o).k(0,"BoldEnd")
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,n)
q=K.m(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.j(0,n).k(0,n)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.m(new H.l("_"))
q.a.push(r)
r=s.j(0,n).k(0,m)
q=K.m(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,l)
q=K.m(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.j(0,l).k(0,l)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.m(new H.l("`"))
q.a.push(r)
r=s.j(0,l).k(0,"CodeEnd")
q=K.m(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,k)
q=K.m(new H.l("["))
r.a.push(q)
r.c=!0
r=s.j(0,k).k(0,j)
q=K.m(new H.l("|"))
r.a.push(q)
q=s.j(0,k).k(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,k).k(0,k)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
q=s.j(0,j).k(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,j).k(0,j)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
s.j(0,p).k(0,h).a.push(new K.ay())
q=s.j(0,h).k(0,h)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.m(new H.l("*_`["))
r.a.push(q)
q=s.j(0,"BoldEnd")
q.d=q.a.H(o)
q=s.j(0,m)
q.d=q.a.H(n)
q=s.j(0,"CodeEnd")
q.d=q.a.H(l)
q=s.j(0,i)
q.d=q.a.H("Link")
q=s.j(0,h)
q.d=q.a.H(h)
this.b=s}}
V.i4.prototype={
$1:function(a){P.kF(C.j,new V.i3(this.a))}}
V.i3.prototype={
$0:function(){var s=C.d.ab(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.i5.prototype={
$1:function(a){return a.a===this.a}}
Q.jo.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
s.cA("Vertex Shader","glsl",0,(q==null?null:q.c).split("\n"))
r=r.a
s.cA("Fragment Shader","glsl",0,(r==null?null:r.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.dr=s.i
s=J.b5.prototype
s.dt=s.i
s=P.f.prototype
s.ds=s.bg
s=W.y.prototype
s.bi=s.a7
s=W.cD.prototype
s.du=s.af
s=K.di.prototype
s.dq=s.au
s.c8=s.i
s=O.dw.prototype
s.c9=s.an
s=O.ao.prototype
s.ca=s.an})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"n6","m3",20)
r(P,"nM","mw",6)
r(P,"nN","mx",6)
r(P,"nO","my",6)
q(P,"lb","nH",7)
r(W,"pg","fY",21)
p(W,"nY",4,null,["$4"],["mz"],13,0)
p(W,"nZ",4,null,["$4"],["mA"],13,0)
var j
o(j=E.bu.prototype,"gd5",0,0,null,["$1","$0"],["d6","h0"],0,0)
o(j,"gd3",0,0,null,["$1","$0"],["d4","fY"],0,0)
n(j,"gfW","fX",3)
n(j,"gfZ","h_",3)
o(j=E.e7.prototype,"gcb",0,0,null,["$1","$0"],["cd","cc"],0,0)
m(j,"ghf","dc",7)
l(j=X.es.prototype,"gev","ew",4)
l(j,"geg","eh",4)
l(j,"geo","ep",2)
l(j,"gez","eA",8)
l(j,"gex","ey",8)
l(j,"geD","eE",2)
l(j,"geH","eI",2)
l(j,"ges","eu",2)
l(j,"geF","eG",2)
l(j,"geq","er",2)
l(j,"geJ","eK",18)
l(j,"geL","eM",4)
l(j,"geY","eZ",5)
l(j,"geU","eV",5)
l(j,"geW","eX",5)
o(D.bt.prototype,"gdF",0,0,null,["$1","$0"],["aj","dG"],0,0)
o(j=D.c7.prototype,"gco",0,0,null,["$1","$0"],["cp","eB"],0,0)
l(j,"geO","eP",19)
n(j,"gea","eb",9)
n(j,"geS","eT",9)
k(V.a_.prototype,"gl","bR",10)
k(V.B.prototype,"gl","bR",10)
o(j=U.bw.prototype,"gaC",0,0,null,["$1","$0"],["I","Z"],0,0)
n(j,"ge8","e9",11)
n(j,"geQ","eR",11)
o(j=U.cp.prototype,"gaC",0,0,null,["$1","$0"],["I","Z"],0,0)
l(j,"gbs","bt",1)
l(j,"gbu","bv",1)
l(j,"gbw","bx",1)
o(j=U.cq.prototype,"gaC",0,0,null,["$1","$0"],["I","Z"],0,0)
l(j,"gbs","bt",1)
l(j,"gbu","bv",1)
l(j,"gbw","bx",1)
l(j,"ge1","e2",1)
l(j,"ge3","e4",1)
l(j,"gfm","fn",1)
l(j,"gfk","fl",1)
l(j,"gfi","fj",1)
l(U.cr.prototype,"ge6","e7",1)
o(j=M.dc.prototype,"gad",0,0,null,["$1","$0"],["ak","dH"],0,0)
n(j,"gek","el",3)
n(j,"gem","en",3)
o(j=O.dv.prototype,"gei",0,0,null,["$1","$0"],["a5","ej"],0,0)
o(j,"gf6",0,0,null,["$1","$0"],["cq","f7"],0,0)
n(j,"gec","ed",12)
n(j,"gee","ef",12)
o(X.dL.prototype,"gce",0,0,null,["$1","$0"],["aD","dL"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.jB,J.a,J.Y,P.cw,P.f,H.aE,P.dl,H.c2,H.eq,H.im,P.F,H.hO,H.f8,H.br,P.an,H.hm,H.ds,H.hi,H.ab,H.eL,P.cJ,P.bO,P.bj,P.ew,P.e0,P.e1,P.cn,P.jb,P.cC,P.j_,P.cv,P.A,P.d5,P.he,P.j9,P.av,P.a5,P.O,P.b0,P.dK,P.cl,P.eI,P.h9,P.hb,P.am,P.dt,P.a9,P.K,P.aH,W.fO,W.jy,W.jM,W.bN,W.C,W.cj,W.cD,W.fd,W.c3,W.a8,W.j3,W.fn,P.f1,K.ay,K.di,K.hR,K.hY,L.e_,L.e8,L.e9,L.ih,O.bs,O.ce,E.fJ,E.bu,E.bq,E.bD,E.eF,E.hS,E.e7,Z.eu,Z.iQ,Z.d3,Z.hf,Z.bh,D.fL,D.bv,D.P,X.d4,X.dq,X.hk,X.ho,X.a7,X.hK,X.ij,X.es,D.bt,D.al,V.N,V.aZ,V.h0,V.dx,V.by,V.aq,V.U,V.dS,V.a_,V.B,U.cp,U.cq,U.cr,M.dc,A.fD,A.fE,A.T,A.fI,A.fS,A.hP,A.i7,A.ht,A.eg,A.eh,A.ek,A.en,A.iq,A.iw,F.h4,F.h6,F.hl,F.hZ,F.i_,F.i0,F.i1,F.iE,F.iF,F.iG,F.iJ,F.iL,F.iM,F.iN,O.id,O.dw,O.hu,X.ju,X.ib,X.dL,V.aY,V.i2])
q(J.a,[J.hh,J.c6,J.b5,J.a6,J.b4,J.ak,H.cg,W.b,W.fB,W.d2,W.aj,W.E,W.eA,W.a4,W.fR,W.fT,W.eB,W.c_,W.eD,W.fU,W.h,W.eJ,W.b2,W.hc,W.eO,W.hn,W.hF,W.eS,W.eT,W.b8,W.eU,W.eW,W.ba,W.f_,W.f2,W.bc,W.f3,W.bd,W.f9,W.aI,W.ff,W.ig,W.be,W.fh,W.ik,W.iy,W.fo,W.fq,W.fs,W.fu,W.fw,P.bx,P.eQ,P.bC,P.eY,P.hQ,P.fa,P.bJ,P.fj,P.fF,P.ex,P.f6])
q(J.b5,[J.dM,J.bg,J.af])
r(J.dn,J.a6)
q(J.b4,[J.c5,J.dm])
r(P.c9,P.cw)
q(P.c9,[H.bK,W.ey,W.R,P.df])
r(H.l,H.bK)
q(P.f,[H.i,H.b7,H.bi,P.c4])
q(H.i,[H.ca,H.aD])
r(H.c0,H.b7)
q(P.dl,[H.cc,H.ev])
r(H.cd,H.ca)
q(P.F,[H.dG,H.dp,H.ep,H.dT,H.eG,P.d0,P.dH,P.a1,P.er,P.eo,P.bH,P.d6,P.d8])
q(H.br,[H.ic,H.hj,H.jj,H.jk,H.jl,P.iS,P.iR,P.iT,P.iU,P.j8,P.j7,P.je,P.j1,P.j2,P.hp,P.fV,P.fW,W.fX,W.hH,W.hJ,W.hX,W.ia,W.iX,W.hM,W.hL,W.j4,W.j5,W.j6,W.ja,P.jf,P.h7,P.h8,P.fH,E.hT,E.hU,E.hV,E.ie,D.h2,D.h3,F.jr,F.jg,F.iP,F.iO,F.iH,F.iI,O.hx,O.hy,O.hz,O.hA,O.hB,O.hC,O.hD,O.hE,V.jq,V.i4,V.i3,V.i5,Q.jo])
q(H.ic,[H.i8,H.bV])
r(P.du,P.an)
q(P.du,[H.v,W.iV])
r(H.bB,H.cg)
q(H.bB,[H.cy,H.cA])
r(H.cz,H.cy)
r(H.b9,H.cz)
r(H.cB,H.cA)
r(H.cf,H.cB)
q(H.cf,[H.dA,H.dB,H.dC,H.dD,H.dE,H.ch,H.dF])
r(H.cK,H.eG)
r(P.cG,P.c4)
r(P.j0,P.jb)
r(P.cu,P.cC)
r(P.d7,P.e1)
r(P.fZ,P.d5)
q(P.d7,[P.hd,P.iA])
r(P.iz,P.fZ)
q(P.O,[P.W,P.r])
q(P.a1,[P.bF,P.dk])
q(W.b,[W.u,W.de,W.aG,W.cE,W.aJ,W.ag,W.cH,W.et,W.bL,P.d1,P.az])
q(W.u,[W.y,W.ae,W.bM])
q(W.y,[W.k,P.j])
q(W.k,[W.cZ,W.d_,W.bp,W.aW,W.aX,W.bY,W.dg,W.dU,W.cm,W.e3,W.e4,W.bI])
r(W.fN,W.aj)
r(W.bX,W.eA)
q(W.a4,[W.fP,W.fQ])
r(W.eC,W.eB)
r(W.bZ,W.eC)
r(W.eE,W.eD)
r(W.db,W.eE)
r(W.b1,W.d2)
r(W.eK,W.eJ)
r(W.dd,W.eK)
r(W.eP,W.eO)
r(W.b3,W.eP)
r(W.at,W.h)
q(W.at,[W.b6,W.a2,W.bf])
r(W.hG,W.eS)
r(W.hI,W.eT)
r(W.eV,W.eU)
r(W.dz,W.eV)
r(W.eX,W.eW)
r(W.ci,W.eX)
r(W.f0,W.f_)
r(W.dO,W.f0)
r(W.hW,W.f2)
r(W.cF,W.cE)
r(W.dX,W.cF)
r(W.f4,W.f3)
r(W.dY,W.f4)
r(W.i9,W.f9)
r(W.fg,W.ff)
r(W.e5,W.fg)
r(W.cI,W.cH)
r(W.e6,W.cI)
r(W.fi,W.fh)
r(W.ea,W.fi)
r(W.aK,W.a2)
r(W.fp,W.fo)
r(W.ez,W.fp)
r(W.ct,W.c_)
r(W.fr,W.fq)
r(W.eM,W.fr)
r(W.ft,W.fs)
r(W.cx,W.ft)
r(W.fv,W.fu)
r(W.f5,W.fv)
r(W.fx,W.fw)
r(W.fc,W.fx)
r(W.iW,W.iV)
r(W.eH,P.e0)
r(W.fe,W.cD)
r(P.aa,P.f1)
r(P.eR,P.eQ)
r(P.dr,P.eR)
r(P.eZ,P.eY)
r(P.dI,P.eZ)
r(P.bG,P.j)
r(P.fb,P.fa)
r(P.e2,P.fb)
r(P.fk,P.fj)
r(P.eb,P.fk)
r(P.fG,P.ex)
r(P.dJ,P.az)
r(P.f7,P.f6)
r(P.dZ,P.f7)
q(K.di,[K.Z,L.il])
q(E.fJ,[Z.fK,A.dV])
q(D.P,[D.aB,D.aC,D.x,X.dP])
q(X.dP,[X.cb,X.bz,X.bA,X.co])
q(O.bs,[D.c7,U.bw])
q(D.fL,[U.fM,U.Q])
r(U.bW,U.Q)
r(A.hq,A.dV)
q(A.iq,[A.ed,A.it,A.iu,A.iv,A.ir,A.ec,A.is,A.ee,A.ef,A.ix,A.ei,A.ej,A.el,A.em])
r(F.i6,F.h6)
r(F.ip,F.hl)
r(F.iK,F.iL)
r(F.hN,F.iM)
r(O.dv,O.id)
q(O.dw,[O.hr,O.hs,O.ao])
q(O.ao,[O.hv,O.hw])
r(X.ha,X.ib)
q(V.aY,[V.d9,V.dh,V.dj,V.dN])
s(H.bK,H.eq)
s(H.cy,P.A)
s(H.cz,H.c2)
s(H.cA,P.A)
s(H.cB,H.c2)
s(P.cw,P.A)
s(W.eA,W.fO)
s(W.eB,P.A)
s(W.eC,W.C)
s(W.eD,P.A)
s(W.eE,W.C)
s(W.eJ,P.A)
s(W.eK,W.C)
s(W.eO,P.A)
s(W.eP,W.C)
s(W.eS,P.an)
s(W.eT,P.an)
s(W.eU,P.A)
s(W.eV,W.C)
s(W.eW,P.A)
s(W.eX,W.C)
s(W.f_,P.A)
s(W.f0,W.C)
s(W.f2,P.an)
s(W.cE,P.A)
s(W.cF,W.C)
s(W.f3,P.A)
s(W.f4,W.C)
s(W.f9,P.an)
s(W.ff,P.A)
s(W.fg,W.C)
s(W.cH,P.A)
s(W.cI,W.C)
s(W.fh,P.A)
s(W.fi,W.C)
s(W.fo,P.A)
s(W.fp,W.C)
s(W.fq,P.A)
s(W.fr,W.C)
s(W.fs,P.A)
s(W.ft,W.C)
s(W.fu,P.A)
s(W.fv,W.C)
s(W.fw,P.A)
s(W.fx,W.C)
s(P.eQ,P.A)
s(P.eR,W.C)
s(P.eY,P.A)
s(P.eZ,W.C)
s(P.fa,P.A)
s(P.fb,W.C)
s(P.fj,P.A)
s(P.fk,W.C)
s(P.ex,P.an)
s(P.f6,P.A)
s(P.f7,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",W:"double",O:"num",K:"String",av:"bool",a9:"Null",am:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([P*])","~(P*)","~(a2*)","~(r*,f<bu*>*)","~(h*)","~(bf*)","~(~())","~()","~(b6*)","~(r*,f<al*>*)","W*()","~(r*,f<Q*>*)","~(r*,f<by*>*)","av(y,K,K,bN)","@(@)","a9(@)","a9(J?,J?)","a9(@,@)","~(aK*)","av*(f<al*>*)","r(@,@)","K(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mT(v.typeUniverse,JSON.parse('{"af":"b5","dM":"b5","bg":"b5","og":"h","oq":"h","oi":"az","oh":"b","ow":"b","oy":"b","of":"j","or":"j","oj":"k","ou":"k","os":"u","op":"u","oW":"ag","on":"at","ok":"ae","oz":"ae","ox":"a2","ot":"b3","ov":"b9","a6":{"i":["1"],"f":["1"]},"dn":{"i":["1"],"f":["1"]},"b4":{"W":[],"O":[]},"c5":{"W":[],"r":[],"O":[]},"dm":{"W":[],"O":[]},"ak":{"K":[]},"l":{"i":["r"],"f":["r"]},"i":{"f":["1"]},"ca":{"i":["1"],"f":["1"]},"b7":{"f":["2"]},"c0":{"i":["2"],"f":["2"]},"cd":{"i":["2"],"f":["2"]},"bi":{"f":["1"]},"bK":{"i":["1"],"f":["1"]},"dG":{"F":[]},"dp":{"F":[]},"ep":{"F":[]},"dT":{"F":[]},"aD":{"i":["1"],"f":["1"]},"bB":{"t":["1"]},"b9":{"t":["W"],"i":["W"],"f":["W"]},"cf":{"t":["r"],"i":["r"],"f":["r"]},"dA":{"t":["r"],"i":["r"],"f":["r"]},"dB":{"t":["r"],"i":["r"],"f":["r"]},"dC":{"t":["r"],"i":["r"],"f":["r"]},"dD":{"t":["r"],"i":["r"],"f":["r"]},"dE":{"t":["r"],"i":["r"],"f":["r"]},"ch":{"t":["r"],"i":["r"],"f":["r"]},"dF":{"t":["r"],"i":["r"],"f":["r"]},"eG":{"F":[]},"cK":{"F":[]},"cJ":{"cn":[]},"cG":{"f":["1"]},"cu":{"i":["1"],"f":["1"]},"c4":{"f":["1"]},"c9":{"i":["1"],"f":["1"]},"cC":{"i":["1"],"f":["1"]},"W":{"O":[]},"d0":{"F":[]},"dH":{"F":[]},"a1":{"F":[]},"bF":{"F":[]},"dk":{"F":[]},"er":{"F":[]},"eo":{"F":[]},"bH":{"F":[]},"d6":{"F":[]},"dK":{"F":[]},"cl":{"F":[]},"d8":{"F":[]},"r":{"O":[]},"am":{"i":["1"],"f":["1"]},"k":{"y":[],"u":[],"b":[]},"cZ":{"y":[],"u":[],"b":[]},"d_":{"y":[],"u":[],"b":[]},"bp":{"y":[],"u":[],"b":[]},"aW":{"y":[],"u":[],"b":[]},"aX":{"y":[],"u":[],"b":[]},"ae":{"u":[],"b":[]},"bY":{"y":[],"u":[],"b":[]},"bZ":{"t":["aa<O>"],"i":["aa<O>"],"f":["aa<O>"]},"c_":{"aa":["O"]},"db":{"t":["K"],"i":["K"],"f":["K"]},"ey":{"i":["y"],"f":["y"]},"y":{"u":[],"b":[]},"dd":{"t":["b1"],"i":["b1"],"f":["b1"]},"de":{"b":[]},"dg":{"y":[],"u":[],"b":[]},"b3":{"t":["u"],"i":["u"],"f":["u"]},"b6":{"h":[]},"dz":{"t":["b8"],"i":["b8"],"f":["b8"]},"a2":{"h":[]},"R":{"i":["u"],"f":["u"]},"u":{"b":[]},"ci":{"t":["u"],"i":["u"],"f":["u"]},"dO":{"t":["ba"],"i":["ba"],"f":["ba"]},"dU":{"y":[],"u":[],"b":[]},"aG":{"b":[]},"dX":{"t":["aG"],"b":[],"i":["aG"],"f":["aG"]},"dY":{"t":["bc"],"i":["bc"],"f":["bc"]},"cm":{"y":[],"u":[],"b":[]},"e3":{"y":[],"u":[],"b":[]},"e4":{"y":[],"u":[],"b":[]},"bI":{"y":[],"u":[],"b":[]},"aJ":{"b":[]},"ag":{"b":[]},"e5":{"t":["ag"],"i":["ag"],"f":["ag"]},"e6":{"t":["aJ"],"b":[],"i":["aJ"],"f":["aJ"]},"bf":{"h":[]},"ea":{"t":["be"],"i":["be"],"f":["be"]},"at":{"h":[]},"et":{"b":[]},"aK":{"a2":[],"h":[]},"bL":{"b":[]},"bM":{"u":[],"b":[]},"ez":{"t":["E"],"i":["E"],"f":["E"]},"ct":{"aa":["O"]},"eM":{"t":["b2?"],"i":["b2?"],"f":["b2?"]},"cx":{"t":["u"],"i":["u"],"f":["u"]},"f5":{"t":["bd"],"i":["bd"],"f":["bd"]},"fc":{"t":["aI"],"i":["aI"],"f":["aI"]},"bN":{"a8":[]},"cj":{"a8":[]},"cD":{"a8":[]},"fe":{"a8":[]},"fd":{"a8":[]},"df":{"i":["y"],"f":["y"]},"aa":{"f1":["1"]},"dr":{"i":["bx"],"f":["bx"]},"dI":{"i":["bC"],"f":["bC"]},"bG":{"j":[],"y":[],"u":[],"b":[]},"e2":{"i":["K"],"f":["K"]},"j":{"y":[],"u":[],"b":[]},"eb":{"i":["bJ"],"f":["bJ"]},"d1":{"b":[]},"az":{"b":[]},"dJ":{"b":[]},"dZ":{"i":["dt<@,@>"],"f":["dt<@,@>"]},"bs":{"f":["1*"]},"aB":{"P":[]},"aC":{"P":[]},"x":{"P":[]},"cb":{"P":[]},"bz":{"P":[]},"bA":{"P":[]},"dP":{"P":[]},"co":{"P":[]},"bt":{"al":[]},"c7":{"f":["al*"]},"bW":{"Q":[]},"bw":{"Q":[],"f":["Q*"]},"cp":{"Q":[]},"cq":{"Q":[]},"cr":{"Q":[]},"d9":{"aY":[]},"dh":{"aY":[]},"dj":{"aY":[]},"dN":{"aY":[]}}'))
H.mS(v.typeUniverse,JSON.parse('{"a6":1,"dn":1,"Y":1,"i":1,"ca":1,"aE":1,"b7":2,"c0":2,"cc":2,"cd":2,"bi":1,"ev":1,"c2":1,"eq":1,"bK":1,"aD":1,"ds":1,"bB":1,"bj":1,"cG":1,"e0":1,"e1":2,"cv":1,"c4":1,"c9":1,"A":1,"du":2,"an":2,"cC":1,"cw":1,"d5":2,"d7":2,"f":1,"dl":1,"am":1,"eH":1,"C":1,"c3":1,"bs":1,"aB":1,"aC":1,"x":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.nV
return{v:s("bp"),t:s("aW"),R:s("i<@>"),h:s("y"),C:s("F"),D:s("h"),Z:s("hb"),b:s("a6<@>"),T:s("c6"),g:s("af"),p:s("t<@>"),G:s("v<K*,dV*>"),V:s("v<K*,e_*>"),i:s("v<K*,K*>"),w:s("v<K*,e9*>"),u:s("v<r*,am<eg*>*>"),L:s("v<r*,am<eh*>*>"),U:s("v<r*,am<ek*>*>"),M:s("v<r*,am<en*>*>"),J:s("v<r*,ed*>"),E:s("v<r*,av*>"),a:s("v<r*,r*>"),P:s("a9"),K:s("J"),q:s("aa<O>"),Y:s("bG"),N:s("K"),W:s("j"),f:s("bI"),d:s("cn"),o:s("bg"),x:s("bM"),k:s("av"),l:s("W"),z:s("@"),S:s("r"),B:s("aX*"),cj:s("cb*"),c:s("bz*"),F:s("bA*"),A:s("0&*"),_:s("J*"),bw:s("K*"),j:s("e8*"),m:s("co*"),n:s("ec*"),r:s("ee*"),y:s("ef*"),O:s("ei*"),I:s("ej*"),s:s("el*"),Q:s("em*"),e:s("r*"),bc:s("kk<a9>?"),X:s("J?"),H:s("O")}})();(function constants(){var s=hunkHelpers.makeConstList
C.m=W.aW.prototype
C.i=W.aX.prototype
C.J=W.bY.prototype
C.M=J.a.prototype
C.a=J.a6.prototype
C.c=J.c5.prototype
C.f=J.c6.prototype
C.d=J.b4.prototype
C.b=J.ak.prototype
C.N=J.af.prototype
C.v=J.dM.prototype
C.w=W.cm.prototype
C.l=J.bg.prototype
C.x=W.aK.prototype
C.y=W.bL.prototype
C.z=new E.bq("Browser.chrome")
C.n=new E.bq("Browser.firefox")
C.o=new E.bq("Browser.edge")
C.A=new E.bq("Browser.other")
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

C.H=new P.dK()
C.h=new P.iz()
C.I=new P.iA()
C.e=new P.j0()
C.j=new P.b0(0)
C.K=new P.b0(5e6)
C.L=new P.he("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.t=s(["bind","if","ref","repeat","syntax"])
C.k=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bD("OperatingSystem.windows")
C.u=new E.bD("OperatingSystem.mac")
C.S=new E.bD("OperatingSystem.linux")
C.T=new E.bD("OperatingSystem.other")
C.U=new P.bO(null,2)})();(function staticFields(){$.kT=null
$.ai=0
$.kc=null
$.kb=null
$.ld=null
$.la=null
$.li=null
$.jh=null
$.jm=null
$.k_=null
$.bP=null
$.cQ=null
$.cR=null
$.jV=!1
$.ah=C.e
$.a0=[]
$.aA=null
$.jx=null
$.kj=null
$.ki=null
$.eN=P.kn(t.N,t.Z)
$.h_=null
$.kr=null
$.ku=null
$.ar=null
$.kA=null
$.kJ=null
$.kM=null
$.kL=null
$.iB=null
$.iC=null
$.iD=null
$.kK=null
$.kt=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"oo","lo",function(){return H.nX("_$dart_dartClosure")})
s($,"oA","lp",function(){return H.as(H.io({
toString:function(){return"$receiver$"}}))})
s($,"oB","lq",function(){return H.as(H.io({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oC","lr",function(){return H.as(H.io(null))})
s($,"oD","ls",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oG","lv",function(){return H.as(H.io(void 0))})
s($,"oH","lw",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oF","lu",function(){return H.as(H.kH(null))})
s($,"oE","lt",function(){return H.as(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oJ","ly",function(){return H.as(H.kH(void 0))})
s($,"oI","lx",function(){return H.as(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oX","k3",function(){return P.mv()})
s($,"p_","lD",function(){return P.mj("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oY","lC",function(){return P.ko(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oQ","lB",function(){return Z.ac(0)})
s($,"oK","lz",function(){return Z.ac(511)})
s($,"oS","aT",function(){return Z.ac(1)})
s($,"oR","aS",function(){return Z.ac(2)})
s($,"oM","aR",function(){return Z.ac(4)})
s($,"oT","bn",function(){return Z.ac(8)})
s($,"oU","bo",function(){return Z.ac(16)})
s($,"oN","cV",function(){return Z.ac(32)})
s($,"oO","cW",function(){return Z.ac(64)})
s($,"oP","lA",function(){return Z.ac(96)})
s($,"oV","bU",function(){return Z.ac(128)})
s($,"oL","aQ",function(){return Z.ac(256)})
s($,"om","ln",function(){return new V.h0()})
s($,"ol","z",function(){return $.ln()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cg,ArrayBufferView:H.cg,Float32Array:H.b9,Float64Array:H.b9,Int16Array:H.dA,Int32Array:H.dB,Int8Array:H.dC,Uint16Array:H.dD,Uint32Array:H.dE,Uint8ClampedArray:H.ch,CanvasPixelArray:H.ch,Uint8Array:H.dF,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fB,HTMLAnchorElement:W.cZ,HTMLAreaElement:W.d_,HTMLBaseElement:W.bp,Blob:W.d2,HTMLBodyElement:W.aW,HTMLCanvasElement:W.aX,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSPerspective:W.fN,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.bX,MSStyleCSSProperties:W.bX,CSS2Properties:W.bX,CSSImageValue:W.a4,CSSKeywordValue:W.a4,CSSNumericValue:W.a4,CSSPositionValue:W.a4,CSSResourceValue:W.a4,CSSUnitValue:W.a4,CSSURLImageValue:W.a4,CSSStyleValue:W.a4,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.fP,CSSUnparsedValue:W.fQ,DataTransferItemList:W.fR,HTMLDivElement:W.bY,DOMException:W.fT,ClientRectList:W.bZ,DOMRectList:W.bZ,DOMRectReadOnly:W.c_,DOMStringList:W.db,DOMTokenList:W.fU,Element:W.y,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.b1,FileList:W.dd,FileWriter:W.de,HTMLFormElement:W.dg,Gamepad:W.b2,History:W.hc,HTMLCollection:W.b3,HTMLFormControlsCollection:W.b3,HTMLOptionsCollection:W.b3,KeyboardEvent:W.b6,Location:W.hn,MediaList:W.hF,MIDIInputMap:W.hG,MIDIOutputMap:W.hI,MimeType:W.b8,MimeTypeArray:W.dz,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.ci,RadioNodeList:W.ci,Plugin:W.ba,PluginArray:W.dO,RTCStatsReport:W.hW,HTMLSelectElement:W.dU,SourceBuffer:W.aG,SourceBufferList:W.dX,SpeechGrammar:W.bc,SpeechGrammarList:W.dY,SpeechRecognitionResult:W.bd,Storage:W.i9,CSSStyleSheet:W.aI,StyleSheet:W.aI,HTMLTableElement:W.cm,HTMLTableRowElement:W.e3,HTMLTableSectionElement:W.e4,HTMLTemplateElement:W.bI,TextTrack:W.aJ,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.e5,TextTrackList:W.e6,TimeRanges:W.ig,Touch:W.be,TouchEvent:W.bf,TouchList:W.ea,TrackDefaultList:W.ik,CompositionEvent:W.at,FocusEvent:W.at,TextEvent:W.at,UIEvent:W.at,URL:W.iy,VideoTrackList:W.et,WheelEvent:W.aK,Window:W.bL,DOMWindow:W.bL,Attr:W.bM,CSSRuleList:W.ez,ClientRect:W.ct,DOMRect:W.ct,GamepadList:W.eM,NamedNodeMap:W.cx,MozNamedAttrMap:W.cx,SpeechRecognitionResultList:W.f5,StyleSheetList:W.fc,SVGLength:P.bx,SVGLengthList:P.dr,SVGNumber:P.bC,SVGNumberList:P.dI,SVGPointList:P.hQ,SVGScriptElement:P.bG,SVGStringList:P.e2,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bJ,SVGTransformList:P.eb,AudioBuffer:P.fF,AudioParamMap:P.fG,AudioTrackList:P.d1,AudioContext:P.az,webkitAudioContext:P.az,BaseAudioContext:P.az,OfflineAudioContext:P.dJ,SQLResultSetRowList:P.dZ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.b9.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.lg,[])
else Q.lg([])})})()
//# sourceMappingURL=test.dart.js.map
