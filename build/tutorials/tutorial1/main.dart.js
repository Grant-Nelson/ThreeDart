(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
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
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.mM(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.mN(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jb"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jb(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={iN:function iN(){},
mo:function(a,b,c){return a},
l5:function(a,b){if(t.O.b(a))return new H.bP(a,b)
return new H.aX(a,b)},
iK:function(){return new P.bm("No element")},
kZ:function(){return new P.bm("Too many elements")},
lo:function(a,b){H.dR(a,0,J.aO(a)-1,b)},
dR:function(a,b,c,d){if(c-b<=32)H.ln(a,b,c,d)
else H.lm(a,b,c,d)},
ln:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cO(a);s<=c;++s){q=r.j(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.j(a,p-1),q)
if(typeof o!=="number")return o.V()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.j(a,n))
p=n}r.m(a,p,q)}},
lm:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.ah(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.ah(a4+a5,2),f=g-j,e=g+j,d=J.cO(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.j(a3,a4))
d.m(a3,e,d.j(a3,a5))
r=a4+1
q=a5-1
if(J.R(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.j(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.m(a3,p,d.j(a3,r))
d.m(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.j(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.m(a3,p,d.j(a3,r))
l=r+1
d.m(a3,r,d.j(a3,q))
d.m(a3,q,o)
q=m
r=l
break}else{d.m(a3,p,d.j(a3,q))
d.m(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.m(a3,p,d.j(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.j(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.m(a3,p,d.j(a3,r))
l=r+1
d.m(a3,r,d.j(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.j(a3,q))
d.m(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.m(a3,a4,d.j(a3,a2))
d.m(a3,a2,b)
a2=q+1
d.m(a3,a5,d.j(a3,a2))
d.m(a3,a2,a0)
H.dR(a3,a4,r-2,a6)
H.dR(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.R(a6.$2(d.j(a3,r),b),0);)++r
for(;J.R(a6.$2(d.j(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.j(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.m(a3,p,d.j(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.j(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.j(a3,q),b)<0){d.m(a3,p,d.j(a3,r))
l=r+1
d.m(a3,r,d.j(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.j(a3,q))
d.m(a3,q,o)}q=m
break}}H.dR(a3,r,q,a6)}else H.dR(a3,r,q,a6)},
dm:function dm(a){this.a=a},
k:function k(a){this.a=a},
h:function h(){},
c3:function c3(){},
aF:function aF(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aX:function aX(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=null
this.b=a
this.c=b},
c6:function c6(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
bS:function bS(){},
ef:function ef(){},
bp:function bp(){},
kk:function(a){var s,r=H.kj(a)
if(r!=null)return r
s="minified:"+a
return s},
mE:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cS(a)
return s},
ce:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cf:function(a){return H.l7(a)},
l7:function(a){var s,r,q,p
if(a instanceof P.J)return H.a2(H.by(a),null)
if(J.cN(a)===C.J||t.o.b(a)){s=C.o(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a2(H.by(a),null)},
jy:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lg:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.x)(a),++r){q=a[r]
if(!H.it(q))throw H.c(H.fp(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aD(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.fp(q))}return H.jy(p)},
lf:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.it(q))throw H.c(H.fp(q))
if(q<0)throw H.c(H.fp(q))
if(q>65535)return H.lg(a)}return H.jy(a)},
iQ:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aD(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aG(a,0,1114111,null,null))},
bi:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
le:function(a){var s=H.bi(a).getFullYear()+0
return s},
lc:function(a){var s=H.bi(a).getMonth()+1
return s},
l8:function(a){var s=H.bi(a).getDate()+0
return s},
l9:function(a){var s=H.bi(a).getHours()+0
return s},
lb:function(a){var s=H.bi(a).getMinutes()+0
return s},
ld:function(a){var s=H.bi(a).getSeconds()+0
return s},
la:function(a){var s=H.bi(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.aO(a)
throw H.c(H.bx(a,b))},
bx:function(a,b){var s,r="index"
if(!H.it(b))return new P.a9(!0,b,r,null)
s=J.aO(a)
if(b<0||b>=s)return P.E(b,a,r,null,s)
return P.dK(b,r)},
mr:function(a,b,c){if(a>c)return P.aG(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aG(b,a,c,"end",null)
return new P.a9(!0,b,"end",null)},
fp:function(a){return new P.a9(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dB()
s=new Error()
s.dartException=a
r=H.mO
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
mO:function(){return J.cS(this.dartException)},
K:function(a){throw H.c(a)},
x:function(a){throw H.c(P.ag(a))},
at:function(a){var s,r,q,p,o,n
a=H.kh(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.hD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hE:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jI:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
iO:function(a,b){var s=b==null,r=s?null:b.method
return new H.dk(a,r,s?null:b.receiver)},
ay:function(a){if(a==null)return new H.he(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.b7(a,a.dartException)
return H.mk(a)},
b7:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mk:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aD(r,16)&8191)===10)switch(q){case 438:return H.b7(a,H.iO(H.q(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.q(s)+" (Error "+q+")"
return H.b7(a,new H.cd(p,e))}}if(a instanceof TypeError){o=$.ko()
n=$.kp()
m=$.kq()
l=$.kr()
k=$.ku()
j=$.kv()
i=$.kt()
$.ks()
h=$.kx()
g=$.kw()
f=o.S(s)
if(f!=null)return H.b7(a,H.iO(s,f))
else{f=n.S(s)
if(f!=null){f.method="call"
return H.b7(a,H.iO(s,f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.b7(a,new H.cd(s,f==null?e:f.method))}}return H.b7(a,new H.ee(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.ck()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b7(a,new P.a9(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.ck()
return a},
jc:function(a){var s
if(a==null)return new H.f_(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f_(a)},
mt:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
mD:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.B("Unsupported number of arguments for wrapped closure"))},
cM:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mD)
a.$identity=s
return s},
kS:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.dW().constructor.prototype):Object.create(new H.b9(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ae
if(typeof r!=="number")return r.N()
$.ae=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jo(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.kO(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jo(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
kO:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kc,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.kM:H.kL
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
kP:function(a,b,c,d){var s=H.jm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jo:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.kR(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.kP(r,!p,s,b)
if(r===0){p=$.ae
if(typeof p!=="number")return p.N()
$.ae=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bF
return new Function(p+(o==null?$.bF=H.fz("self"):o)+";return "+n+"."+H.q(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ae
if(typeof p!=="number")return p.N()
$.ae=p+1
m+=p
p="return function("+m+"){return this."
o=$.bF
return new Function(p+(o==null?$.bF=H.fz("self"):o)+"."+H.q(s)+"("+m+");}")()},
kQ:function(a,b,c,d){var s=H.jm,r=H.kN
switch(b?-1:a){case 0:throw H.c(new H.dO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
kR:function(a,b){var s,r,q,p,o,n,m,l=$.bF
if(l==null)l=$.bF=H.fz("self")
s=$.jl
if(s==null)s=$.jl=H.fz("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.kQ(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.q(r)+"(this."+s+");"
n=$.ae
if(typeof n!=="number")return n.N()
$.ae=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.q(r)+"(this."+s+", "+m+");"
n=$.ae
if(typeof n!=="number")return n.N()
$.ae=n+1
return new Function(o+n+"}")()},
jb:function(a,b,c,d,e,f,g){return H.kS(a,b,c,d,!!e,!!f,g)},
kL:function(a,b){return H.fd(v.typeUniverse,H.by(a.a),b)},
kM:function(a,b){return H.fd(v.typeUniverse,H.by(a.c),b)},
jm:function(a){return a.a},
kN:function(a){return a.c},
fz:function(a){var s,r,q,p=new H.b9("self","target","receiver","name"),o=J.iM(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jk("Field name "+a+" not found."))},
mM:function(a){throw H.c(new P.d2(a))},
mx:function(a){return v.getIsolateTag(a)},
mN:function(a){return H.K(new H.dm(a))},
nQ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mG:function(a){var s,r,q,p,o,n=$.kb.$1(a),m=$.iw[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.k8.$2(a,n)
if(q!=null){m=$.iw[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iE(s)
$.iw[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iD[n]=s
return s}if(p==="-"){o=H.iE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ke(a,s)
if(p==="*")throw H.c(P.jJ(n))
if(v.leafTags[n]===true){o=H.iE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ke(a,s)},
ke:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jf(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iE:function(a){return J.jf(a,!1,null,!!a.$it)},
mI:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iE(s)
else return J.jf(s,c,null,null)},
mB:function(){if(!0===$.jd)return
$.jd=!0
H.mC()},
mC:function(){var s,r,q,p,o,n,m,l
$.iw=Object.create(null)
$.iD=Object.create(null)
H.mA()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kg.$1(o)
if(n!=null){m=H.mI(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mA:function(){var s,r,q,p,o,n,m=C.y()
m=H.bw(C.z,H.bw(C.A,H.bw(C.p,H.bw(C.p,H.bw(C.B,H.bw(C.C,H.bw(C.D(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kb=new H.iA(p)
$.k8=new H.iB(o)
$.kg=new H.iC(n)},
bw:function(a,b){return a(b)||b},
l2:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fU("Illegal RegExp pattern ("+String(n)+")",a))},
ki:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
ms:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kh:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jg:function(a,b,c){var s=H.mK(a,b,c)
return s},
mK:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kh(b),'g'),H.ms(c))},
hD:function hD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cd:function cd(a,b){this.a=a
this.b=b},
dk:function dk(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a){this.a=a},
he:function he(a){this.a=a},
f_:function f_(a){this.a=a
this.b=null},
aR:function aR(){},
e2:function e2(){},
dW:function dW(){},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a){this.a=a},
am:function am(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h_:function h_(a){this.a=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aE:function aE(a){this.a=a},
dp:function dp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
fZ:function fZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j5:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.cO(a)
r=s.gk(a)
q=P.dq(r,null,!1)
for(p=0;p<s.gk(a);++p){o=s.j(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bx(b,a))},
lU:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.mr(a,b,c))
return b},
c9:function c9(){},
bf:function bf(){},
aZ:function aZ(){},
c8:function c8(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
ca:function ca(){},
dA:function dA(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
jC:function(a,b){var s=b.c
return s==null?b.c=H.j2(a,b.z,!0):s},
jB:function(a,b){var s=b.c
return s==null?b.c=H.cE(a,"jt",[b.z]):s},
jD:function(a){var s=a.y
if(s===6||s===7||s===8)return H.jD(a.z)
return s===11||s===12},
lk:function(a){return a.cy},
mu:function(a){return H.j3(v.typeUniverse,a,!1)},
aL:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aL(a,s,a0,a1)
if(r===s)return b
return H.jY(a,r,!0)
case 7:s=b.z
r=H.aL(a,s,a0,a1)
if(r===s)return b
return H.j2(a,r,!0)
case 8:s=b.z
r=H.aL(a,s,a0,a1)
if(r===s)return b
return H.jX(a,r,!0)
case 9:q=b.Q
p=H.cL(a,q,a0,a1)
if(p===q)return b
return H.cE(a,b.z,p)
case 10:o=b.z
n=H.aL(a,o,a0,a1)
m=b.Q
l=H.cL(a,m,a0,a1)
if(n===o&&l===m)return b
return H.j0(a,n,l)
case 11:k=b.z
j=H.aL(a,k,a0,a1)
i=b.Q
h=H.mh(a,i,a0,a1)
if(j===k&&h===i)return b
return H.jW(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cL(a,g,a0,a1)
o=b.z
n=H.aL(a,o,a0,a1)
if(f===g&&n===o)return b
return H.j1(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.ft("Attempted to substitute unexpected RTI kind "+c))}},
cL:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aL(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
mi:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aL(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
mh:function(a,b,c,d){var s,r=b.a,q=H.cL(a,r,c,d),p=b.b,o=H.cL(a,p,c,d),n=b.c,m=H.mi(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eD()
s.a=q
s.b=o
s.c=m
return s},
nS:function(a,b){a[v.arrayRti]=b
return a},
mq:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kc(s)
return a.$S()}return null},
kd:function(a,b){var s
if(H.jD(b))if(a instanceof H.aR){s=H.mq(a)
if(s!=null)return s}return H.by(a)},
by:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.j6(a)}if(Array.isArray(a))return H.k0(a)
return H.j6(J.cN(a))},
k0:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
O:function(a){var s=a.$ti
return s!=null?s:H.j6(a)},
j6:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.m0(a,s)},
m0:function(a,b){var s=a instanceof H.aR?a.__proto__.__proto__.constructor:b,r=H.lR(v.typeUniverse,s.name)
b.$ccache=r
return r},
kc:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.j3(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
m_:function(a){var s,r,q,p=this
if(p===t.K)return H.cI(p,a,H.m4)
if(!H.ax(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cI(p,a,H.m7)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.it
else if(r===t.i||r===t.H)q=H.m3
else if(r===t.N)q=H.m5
else q=r===t.v?H.j7:null
if(q!=null)return H.cI(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.mF)){p.r="$i"+s
return H.cI(p,a,H.m6)}}else if(s===7)return H.cI(p,a,H.lY)
return H.cI(p,a,H.lW)},
cI:function(a,b,c){a.b=c
return a.b(b)},
lZ:function(a){var s,r=this,q=H.lV
if(!H.ax(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.lT
else if(r===t.K)q=H.lS
else{s=H.cP(r)
if(s)q=H.lX}r.a=q
return r.a(a)},
ja:function(a){var s,r=a.y
if(!H.ax(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.ja(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
lW:function(a){var s=this
if(a==null)return H.ja(s)
return H.I(v.typeUniverse,H.kd(a,s),null,s,null)},
lY:function(a){if(a==null)return!0
return this.z.b(a)},
m6:function(a){var s,r=this
if(a==null)return H.ja(r)
s=r.r
if(a instanceof P.J)return!!a[s]
return!!J.cN(a)[s]},
lV:function(a){var s,r=this
if(a==null){s=H.cP(r)
if(s)return a}else if(r.b(a))return a
H.k3(a,r)},
lX:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.k3(a,s)},
k3:function(a,b){throw H.c(H.lH(H.jP(a,H.kd(a,b),H.a2(b,null))))},
jP:function(a,b,c){var s=P.fP(a),r=H.a2(b==null?H.by(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
lH:function(a){return new H.cD("TypeError: "+a)},
U:function(a,b){return new H.cD("TypeError: "+H.jP(a,null,b))},
m4:function(a){return a!=null},
lS:function(a){if(a!=null)return a
throw H.c(H.U(a,"Object"))},
m7:function(a){return!0},
lT:function(a){return a},
j7:function(a){return!0===a||!1===a},
k1:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
nF:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
nE:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
nG:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
nI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
nH:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
it:function(a){return typeof a=="number"&&Math.floor(a)===a},
ip:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
nK:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
nJ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
m3:function(a){return typeof a=="number"},
nL:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
nN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
nM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
m5:function(a){return typeof a=="string"},
iq:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
nP:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
nO:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
md:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a2(a[q],b)
return s},
k4:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.b.N(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a2(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a2(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a2(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a2(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a2(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a2:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a2(a.z,b)
return s}if(l===7){r=a.z
s=H.a2(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a2(a.z,b)+">"
if(l===9){p=H.mj(a.z)
o=a.Q
return o.length!==0?p+("<"+H.md(o,b)+">"):p}if(l===11)return H.k4(a,b,null)
if(l===12)return H.k4(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
mj:function(a){var s,r=H.kj(a)
if(r!=null)return r
s="minified:"+a
return s},
jZ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lR:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.j3(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cF(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cE(a,b,q)
n[b]=o
return o}else return m},
lP:function(a,b){return H.k_(a.tR,b)},
lO:function(a,b){return H.k_(a.eT,b)},
j3:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.jU(H.jS(a,null,b,c))
r.set(b,s)
return s},
fd:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.jU(H.jS(a,b,c,!0))
q.set(c,r)
return r},
lQ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.j0(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aK:function(a,b){b.a=H.lZ
b.b=H.m_
return b},
cF:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a6(null,null)
s.y=b
s.cy=c
r=H.aK(a,s)
a.eC.set(c,r)
return r},
jY:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.lM(a,b,r,c)
a.eC.set(r,s)
return s},
lM:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ax(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a6(null,null)
q.y=6
q.z=b
q.cy=c
return H.aK(a,q)},
j2:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.lL(a,b,r,c)
a.eC.set(r,s)
return s},
lL:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ax(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cP(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cP(q.z))return q
else return H.jC(a,b)}}p=new H.a6(null,null)
p.y=7
p.z=b
p.cy=c
return H.aK(a,p)},
jX:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.lJ(a,b,r,c)
a.eC.set(r,s)
return s},
lJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ax(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cE(a,"jt",[b])
else if(b===t.P||b===t.T)return t.Q}q=new H.a6(null,null)
q.y=8
q.z=b
q.cy=c
return H.aK(a,q)},
lN:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a6(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aK(a,s)
a.eC.set(q,r)
return r},
fc:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
lI:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cE:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a6(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aK(a,r)
a.eC.set(p,q)
return q},
j0:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aK(a,o)
a.eC.set(q,n)
return n},
jW:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fc(m)
if(j>0){s=l>0?",":""
r=H.fc(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.lI(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aK(a,o)
a.eC.set(q,r)
return r},
j1:function(a,b,c,d){var s,r=b.cy+("<"+H.fc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.lK(a,b,c,r,d)
a.eC.set(r,s)
return s},
lK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aL(a,b,r,0)
m=H.cL(a,c,r,0)
return H.j1(a,n,m,c!==m)}}l=new H.a6(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aK(a,l)},
jS:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
jU:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.lC(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.jT(a,r,h,g,!1)
else if(q===46)r=H.jT(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aJ(a.u,a.e,g.pop()))
break
case 94:g.push(H.lN(a.u,g.pop()))
break
case 35:g.push(H.cF(a.u,5,"#"))
break
case 64:g.push(H.cF(a.u,2,"@"))
break
case 126:g.push(H.cF(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.j_(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cE(p,n,o))
else{m=H.aJ(p,a.e,n)
switch(m.y){case 11:g.push(H.j1(p,m,o,a.n))
break
default:g.push(H.j0(p,m,o))
break}}break
case 38:H.lD(a,g)
break
case 42:p=a.u
g.push(H.jY(p,H.aJ(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.j2(p,H.aJ(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.jX(p,H.aJ(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.eD()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.j_(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.jW(p,H.aJ(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.j_(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.lF(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aJ(a.u,a.e,i)},
lC:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
jT:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.jZ(s,o.z)[p]
if(n==null)H.K('No "'+p+'" in "'+H.lk(o)+'"')
d.push(H.fd(s,o,n))}else d.push(p)
return m},
lD:function(a,b){var s=b.pop()
if(0===s){b.push(H.cF(a.u,1,"0&"))
return}if(1===s){b.push(H.cF(a.u,4,"1&"))
return}throw H.c(P.ft("Unexpected extended operation "+H.q(s)))},
aJ:function(a,b,c){if(typeof c=="string")return H.cE(a,c,a.sEA)
else if(typeof c=="number")return H.lE(a,b,c)
else return c},
j_:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aJ(a,b,c[s])},
lF:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aJ(a,b,c[s])},
lE:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.ft("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.ft("Bad index "+c+" for "+b.h(0)))},
I:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ax(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ax(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.I(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.I(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.I(a,b.z,c,d,e)
if(r===6)return H.I(a,b.z,c,d,e)
return r!==7}if(r===6)return H.I(a,b.z,c,d,e)
if(p===6){s=H.jC(a,d)
return H.I(a,b,c,s,e)}if(r===8){if(!H.I(a,b.z,c,d,e))return!1
return H.I(a,H.jB(a,b),c,d,e)}if(r===7){s=H.I(a,t.P,c,d,e)
return s&&H.I(a,b.z,c,d,e)}if(p===8){if(H.I(a,b,c,d.z,e))return!0
return H.I(a,b,c,H.jB(a,d),e)}if(p===7){s=H.I(a,b,c,t.P,e)
return s||H.I(a,b,c,d.z,e)}if(q)return!1
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
if(!H.I(a,k,c,j,e)||!H.I(a,j,e,k,c))return!1}return H.k5(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.k5(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.m2(a,b,c,d,e)}return!1},
k5:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.I(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.I(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.I(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.I(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.I(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
m2:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.I(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.jZ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.I(a,H.fd(a,b,l[p]),c,r[p],e))return!1
return!0},
cP:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ax(a))if(r!==7)if(!(r===6&&H.cP(a.z)))s=r===8&&H.cP(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mF:function(a){var s
if(!H.ax(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ax:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
k_:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eD:function eD(){this.c=this.b=this.a=null},
ey:function ey(){},
cD:function cD(a){this.a=a},
kj:function(a){return v.mangledGlobalNames[a]},
mJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iz:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jd==null){H.mB()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jJ("Return interceptor for "+H.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.i7
if(o==null)o=$.i7=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.mG(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){o=$.i7
if(o==null)o=$.i7=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
l_:function(a){if(a<0||a>4294967295)throw H.c(P.aG(a,0,4294967295,"length",null))
return J.l0(new Array(a))},
iL:function(a){if(a<0)throw H.c(P.jk("Length must be a non-negative integer: "+a))
return new Array(a)},
l0:function(a){return J.iM(a)},
iM:function(a){a.fixed$length=Array
return a},
l1:function(a,b){return J.kG(a,b)},
cN:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bZ.prototype
return J.di.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.c_.prototype
if(typeof a=="boolean")return J.dh.prototype
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.al.prototype
return a}if(a instanceof P.J)return a
return J.iz(a)},
cO:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.al.prototype
return a}if(a instanceof P.J)return a
return J.iz(a)},
iy:function(a){if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.al.prototype
return a}if(a instanceof P.J)return a
return J.iz(a)},
mv:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.b3.prototype
return a},
mw:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.b3.prototype
return a},
b6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.al.prototype
return a}if(a instanceof P.J)return a
return J.iz(a)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cN(a).p(a,b)},
kD:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mE(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cO(a).j(a,b)},
kE:function(a,b,c){return J.b6(a).di(a,b,c)},
kF:function(a,b,c,d){return J.b6(a).du(a,b,c,d)},
kG:function(a,b){return J.mv(a).W(a,b)},
fq:function(a,b){return J.iy(a).w(a,b)},
iF:function(a,b){return J.iy(a).F(a,b)},
kH:function(a){return J.b6(a).gat(a)},
kI:function(a){return J.b6(a).gbI(a)},
fr:function(a){return J.cN(a).gG(a)},
az:function(a){return J.iy(a).gH(a)},
aO:function(a){return J.cO(a).gk(a)},
jj:function(a){return J.iy(a).e8(a)},
kJ:function(a,b){return J.b6(a).ea(a,b)},
kK:function(a){return J.mw(a).eh(a)},
cS:function(a){return J.cN(a).h(a)},
a:function a(){},
dh:function dh(){},
c_:function c_(){},
aU:function aU(){},
dG:function dG(){},
b3:function b3(){},
al:function al(){},
ab:function ab(){},
dj:function dj(){},
Z:function Z(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bd:function bd(){},
bZ:function bZ(){},
di:function di(){},
aD:function aD(){}},P={
lr:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.ml()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cM(new P.i2(q),1)).observe(s,{childList:true})
return new P.i1(q,s,r)}else if(self.setImmediate!=null)return P.mm()
return P.mn()},
ls:function(a){self.scheduleImmediate(H.cM(new P.i3(a),0))},
lt:function(a){self.setImmediate(H.cM(new P.i4(a),0))},
lu:function(a){P.iU(C.h,a)},
iU:function(a,b){var s=C.c.ah(a.a,1000)
return P.lG(s<0?0:s,b)},
lG:function(a,b){var s=new P.ii()
s.cn(a,b)
return s},
nB:function(a){return new P.bu(a,1)},
lz:function(){return C.T},
lA:function(a){return new P.bu(a,3)},
m9:function(a){return new P.cA(a)},
ma:function(){var s,r
for(s=$.bv;s!=null;s=$.bv){$.cK=null
r=s.b
$.bv=r
if(r==null)$.cJ=null
s.a.$0()}},
mg:function(){$.j8=!0
try{P.ma()}finally{$.cK=null
$.j8=!1
if($.bv!=null)$.ji().$1(P.k9())}},
me:function(a){var s=new P.en(a),r=$.cJ
if(r==null){$.bv=$.cJ=s
if(!$.j8)$.ji().$1(P.k9())}else $.cJ=r.b=s},
mf:function(a){var s,r,q,p=$.bv
if(p==null){P.me(a)
$.cK=$.cJ
return}s=new P.en(a)
r=$.cK
if(r==null){s.b=p
$.bv=$.cK=s}else{q=r.b
s.b=q
$.cK=r.b=s
if(q==null)$.cJ=s}},
jH:function(a,b){var s=$.av
if(s===C.e)return P.iU(a,b)
return P.iU(a,s.dA(b))},
k6:function(a,b,c,d,e){P.mf(new P.iu(d,e))},
mb:function(a,b,c,d){var s,r=$.av
if(r===c)return d.$0()
$.av=c
s=r
try{r=d.$0()
return r}finally{$.av=s}},
mc:function(a,b,c,d,e){var s,r=$.av
if(r===c)return d.$1(e)
$.av=c
s=r
try{r=d.$1(e)
return r}finally{$.av=s}},
i2:function i2(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
ii:function ii(){},
ij:function ij(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
b5:function b5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cA:function cA(a){this.a=a},
en:function en(a){this.a=a
this.b=null},
dY:function dY(){},
dZ:function dZ(){},
im:function im(){},
iu:function iu(a,b){this.a=a
this.b=b},
ia:function ia(){},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
l3:function(a,b,c){return H.mt(a,new H.am(b.a_("@<0>").bt(c).a_("am<1,2>")))},
c0:function(a,b){return new H.am(a.a_("@<0>").bt(b).a_("am<1,2>"))},
c1:function(a){return new P.co(a.a_("co<0>"))},
iZ:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lB:function(a,b){var s=new P.cp(a,b)
s.c=a.e
return s},
kY:function(a,b,c){var s,r
if(P.j9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.X.push(a)
try{P.m8(a,s)}finally{if(0>=$.X.length)return H.d($.X,-1)
$.X.pop()}r=P.jF(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
iJ:function(a,b,c){var s,r
if(P.j9(a))return b+"..."+c
s=new P.bn(b)
$.X.push(a)
try{r=s
r.a=P.jF(r.a,a,", ")}finally{if(0>=$.X.length)return H.d($.X,-1)
$.X.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
j9:function(a){var s,r
for(s=$.X.length,r=0;r<s;++r)if(a===$.X[r])return!0
return!1},
m8:function(a,b){var s,r,q,p,o,n,m,l=a.gH(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.q(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.q()){if(j<=4){b.push(H.q(p))
return}r=H.q(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.q();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.q(p)
r=H.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ju:function(a,b){var s,r,q=P.c1(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.x)(a),++r)q.t(0,b.a(a[r]))
return q},
jv:function(a){var s,r={}
if(P.j9(a))return"{...}"
s=new P.bn("")
try{$.X.push(a)
s.a+="{"
r.a=!0
J.iF(a,new P.h6(r,s))
s.a+="}"}finally{if(0>=$.X.length)return H.d($.X,-1)
$.X.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
co:function co(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
i9:function i9(a){this.a=a
this.c=this.b=null},
cp:function cp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function bY(){},
c2:function c2(){},
z:function z(){},
c4:function c4(){},
h6:function h6(a,b){this.a=a
this.b=b},
M:function M(){},
dQ:function dQ(){},
cw:function cw(){},
cq:function cq(){},
cG:function cG(){},
cZ:function cZ(){},
d1:function d1(){},
fN:function fN(){},
fY:function fY(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fX:function fX(a){this.a=a},
hU:function hU(){},
hV:function hV(){},
ik:function ik(a){this.b=0
this.c=a},
kW:function(a){if(a instanceof H.aR)return a.h(0)
return"Instance of '"+H.cf(a)+"'"},
dq:function(a,b,c){var s,r=c?J.iL(a):J.l_(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
h3:function(a,b){var s,r=[]
for(s=J.az(a);s.q();)r.push(s.gB(s))
if(b)return r
return J.iM(r)},
l4:function(a,b){var s,r,q=J.iL(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
iT:function(a){var s=a,r=s.length,q=P.iR(0,null,r)
return H.lf(q<r?s.slice(0,q):s)},
lh:function(a){return new H.fZ(a,H.l2(a,!1,!0,!1,!1,!1))},
jF:function(a,b,c){var s=J.az(b)
if(!s.q())return a
if(c.length===0){do a+=H.q(s.gB(s))
while(s.q())}else{a+=H.q(s.gB(s))
for(;s.q();)a=a+c+H.q(s.gB(s))}return a},
j4:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.kC().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.dG(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.iQ(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
kT:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
kU:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d4:function(a){if(a>=10)return""+a
return"0"+a},
fP:function(a){if(typeof a=="number"||H.j7(a)||null==a)return J.cS(a)
if(typeof a=="string")return JSON.stringify(a)
return P.kW(a)},
ft:function(a){return new P.cV(a)},
jk:function(a){return new P.a9(!1,null,null,a)},
dK:function(a,b){return new P.cg(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cg(b,c,!0,a,d,"Invalid value")},
iR:function(a,b,c){if(a>c)throw H.c(P.aG(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aG(b,a,c,"end",null))
return b}return c},
jz:function(a,b){if(a<0)throw H.c(P.aG(a,0,null,b,null))
return a},
E:function(a,b,c,d,e){var s=e==null?J.aO(b):e
return new P.df(s,!0,a,c,"Index out of range")},
w:function(a){return new P.eg(a)},
jJ:function(a){return new P.ed(a)},
iS:function(a){return new P.bm(a)},
ag:function(a){return new P.d_(a)},
B:function(a){return new P.eA(a)},
kf:function(a){H.mJ(a)},
a_:function a_(a,b){this.a=a
this.b=b},
bO:function bO(a){this.a=a},
fJ:function fJ(){},
fK:function fK(){},
C:function C(){},
cV:function cV(a){this.a=a},
ea:function ea(){},
dB:function dB(){},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
df:function df(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eg:function eg(a){this.a=a},
ed:function ed(a){this.a=a},
bm:function bm(a){this.a=a},
d_:function d_(a){this.a=a},
dE:function dE(){},
ck:function ck(){},
d2:function d2(a){this.a=a},
eA:function eA(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
e:function e(){},
dg:function dg(){},
a4:function a4(){},
J:function J(){},
bn:function bn(a){this.a=a},
aM:function(a){var s,r,q,p,o
if(a==null)return null
s=P.c0(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.x)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
k2:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.j7(a))return a
if(t.f.b(a))return P.ka(a)
if(t.j.b(a)){s=[]
J.iF(a,new P.ir(s))
a=s}return a},
ka:function(a){var s={}
J.iF(a,new P.iv(s))
return s},
ir:function ir(a){this.a=a},
iv:function iv(a){this.a=a},
da:function da(a,b){this.a=a
this.b=b},
fS:function fS(){},
fT:function fT(){},
aW:function aW(){},
dn:function dn(){},
b_:function b_(){},
dC:function dC(){},
hg:function hg(){},
bj:function bj(){},
e_:function e_(){},
i:function i(){},
b2:function b2(){},
e9:function e9(){},
eI:function eI(){},
eJ:function eJ(){},
eQ:function eQ(){},
eR:function eR(){},
f1:function f1(){},
f2:function f2(){},
fa:function fa(){},
fb:function fb(){},
fw:function fw(){},
cW:function cW(){},
fx:function fx(a){this.a=a},
cX:function cX(){},
aB:function aB(){},
dD:function dD(){},
ep:function ep(){},
ch:function ch(){},
dU:function dU(){},
eY:function eY(){},
eZ:function eZ(){}},W={
iG:function(){var s=document.createElement("a")
s.toString
return s},
jn:function(){var s=document.createElement("canvas")
s.toString
return s},
kV:function(a,b,c){var s=document.body
s.toString
s=new H.b4(new W.S(C.l.P(s,a,b,c)),new W.fL())
return t.h.a(s.ga9(s))},
fM:function(a){return"wheel"},
bQ:function(a){var s,r,q="element tag unavailable"
try{s=J.b6(a)
s.gc1(a)
q=s.gc1(a)}catch(r){H.ay(r)}return q},
i8:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
jR:function(a,b,c,d){var s=W.i8(W.i8(W.i8(W.i8(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
T:function(a,b,c,d){var s=W.k7(new W.i6(c),t.B)
if(s!=null&&!0)J.kF(a,b,s,!1)
return new W.ez(a,b,s,!1)},
jQ:function(a){var s=W.iG(),r=window
s=new W.bt(new W.id(s,r.location))
s.ck(a)
return s},
lx:function(a,b,c,d){return!0},
ly:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
o.href=c
s=o.hostname
p=p.b
if(s==p.hostname){r=o.port
q=p.port
q.toString
if(r===q){r=o.protocol
p=p.protocol
p.toString
p=r===p}else p=!1}else p=!1
if(!p)if(s==="")if(o.port===""){p=o.protocol
p=p===":"||p===""}else p=!1
else p=!1
else p=!0
return p},
jV:function(){var s=t.N
s=new W.f5(P.ju(C.q,s),P.c1(s),P.c1(s),P.c1(s),null)
s.cm(null,new H.c6(C.q,new W.ih()),["TEMPLATE"],null)
return s},
k7:function(a,b){var s=$.av
if(s===C.e)return a
return s.dB(a,b)},
j:function j(){},
fs:function fs(){},
cT:function cT(){},
cU:function cU(){},
b8:function b8(){},
cY:function cY(){},
aP:function aP(){},
aQ:function aQ(){},
aa:function aa(){},
fB:function fB(){},
A:function A(){},
bK:function bK(){},
fC:function fC(){},
a3:function a3(){},
ah:function ah(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
bL:function bL(){},
fH:function fH(){},
bM:function bM(){},
bN:function bN(){},
d6:function d6(){},
fI:function fI(){},
eq:function eq(a,b){this.a=a
this.b=b},
y:function y(){},
fL:function fL(){},
f:function f(){},
b:function b(){},
aj:function aj(){},
d8:function d8(){},
d9:function d9(){},
db:function db(){},
ak:function ak(){},
fW:function fW(){},
aT:function aT(){},
aV:function aV(){},
h4:function h4(){},
h7:function h7(){},
ds:function ds(){},
h8:function h8(a){this.a=a},
dt:function dt(){},
h9:function h9(a){this.a=a},
an:function an(){},
du:function du(){},
a0:function a0(){},
S:function S(a){this.a=a},
n:function n(){},
cb:function cb(){},
ap:function ap(){},
dI:function dI(){},
dN:function dN(){},
hm:function hm(a){this.a=a},
dP:function dP(){},
ac:function ac(){},
dS:function dS(){},
aq:function aq(){},
dT:function dT(){},
ar:function ar(){},
dX:function dX(){},
ht:function ht(a){this.a=a},
a7:function a7(){},
cl:function cl(){},
e0:function e0(){},
e1:function e1(){},
bo:function bo(){},
ad:function ad(){},
a1:function a1(){},
e3:function e3(){},
e4:function e4(){},
hx:function hx(){},
as:function as(){},
b1:function b1(){},
e8:function e8(){},
hB:function hB(){},
au:function au(){},
hT:function hT(){},
ek:function ek(){},
aI:function aI(){},
br:function br(){},
bs:function bs(){},
er:function er(){},
cn:function cn(){},
eE:function eE(){},
cr:function cr(){},
eX:function eX(){},
f3:function f3(){},
eo:function eo(){},
ex:function ex(a){this.a=a},
iI:function iI(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
i6:function i6(a){this.a=a},
iY:function iY(a){this.$ti=a},
bt:function bt(a){this.a=a},
D:function D(){},
cc:function cc(a){this.a=a},
hd:function hd(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(){},
ie:function ie(){},
ig:function ig(){},
f5:function f5(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ih:function ih(){},
f4:function f4(){},
bT:function bT(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
id:function id(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a
this.b=0},
il:function il(a){this.a=a},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
cy:function cy(){},
cz:function cz(){},
eV:function eV(){},
eW:function eW(){},
f0:function f0(){},
f6:function f6(){},
f7:function f7(){},
cB:function cB(){},
cC:function cC(){},
f8:function f8(){},
f9:function f9(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){}},K={
F:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.B("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.aB(a,0)
r=C.b.aB(b,0)
if(s>r){q=r
r=s
s=q}return new K.hh(s,r)},
aA:function aA(){},
dd:function dd(){},
W:function W(a){this.a=a},
hh:function hh(a,b){this.a=a
this.b=b},
m:function m(a){this.a=a}},L={
hz:function(){var s=t.N
return new L.hy(P.c0(s,t.R),P.c0(s,t.F),P.c1(s))},
dV:function dV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
e6:function e6(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(a,b){this.b=a
this.c=b},
hy:function hy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hC:function hC(a,b){this.b=a
this.c=!1
this.a=b}},O={
jp:function(){return new O.bJ([])},
bJ:function bJ(a){this.a=a
this.c=this.b=null},
c7:function c7(a){this.a=a
this.b=null},
fG:function fG(){var _=this
_.a=null
_.b=1
_.c=10
_.f=_.e=_.d=!1
_.r=null},
hv:function hv(){}},E={
lv:function(){var s=window.navigator.vendor
s.toString
if(C.b.A(s,"Google"))return C.w
s=window.navigator.userAgent
s.toString
if(C.b.A(s,"Firefox"))return C.m
s=window.navigator.appVersion
s.toString
if(C.b.A(s,"Trident")||C.b.A(s,"Edge"))return C.n
s=window.navigator.appName
s.toString
if(C.b.A(s,"Microsoft"))return C.n
return C.x},
lw:function(){var s=window.navigator.appVersion
s.toString
if(C.b.A(s,"Win"))return C.P
if(C.b.A(s,"Mac"))return C.Q
if(C.b.A(s,"Linux"))return C.R
return C.S},
lj:function(a,b){var s
Date.now()
s=new E.hi(a,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1),new O.c7([]),new O.c7([]),new O.c7([]),[null],P.c0(t.N,t.k))
s.cj(a,b)
return s},
lp:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.jG(a,!0,!0,!0,!1)
s=W.jn()
r=s.style
r.width="100%"
r.height="100%"
J.kI(a).t(0,s)
return E.jG(s,!0,!0,!0,!1)},
jG:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.r.a(C.G.ca(a,"webgl2",P.l3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.B("Failed to get the rendering context for WebGL."))
s=E.lj(l,a)
H.ip(l.getParameter(3379))
H.ip(l.getParameter(34076))
m=[]
r=$.js
if(r==null){q=E.lv()
E.lw()
r=$.js=new E.i5(q)}p=new X.eh(a,m,r.a===C.m?0.16666666666666666:0.005555555555555556)
o=document
o.toString
m.push(W.T(o,"contextmenu",p.gcM(),!1))
m.push(W.T(a,"focus",p.gcS(),!1))
m.push(W.T(a,"blur",p.gcG(),!1))
m.push(W.T(o,"keyup",p.gcW(),!1))
m.push(W.T(o,"keydown",p.gcU(),!1))
m.push(W.T(a,"mousedown",p.gcZ(),!1))
m.push(W.T(a,"mouseup",p.gd2(),!1))
m.push(W.T(a,n,p.gd0(),!1))
W.fM(a)
W.fM(a)
m.push(W.T(a,W.fM(a),p.gd4(),!1))
m.push(W.T(o,n,p.gcO(),!1))
m.push(W.T(o,"mouseup",p.gcQ(),!1))
m.push(W.T(o,"pointerlockchange",p.gd6(),!1))
m.push(W.T(a,"touchstart",p.gde(),!1))
m.push(W.T(a,"touchend",p.gd9(),!1))
m.push(W.T(a,"touchmove",p.gdc(),!1))
Date.now()
m=new E.e5(a,s)
m.bB()
return m},
fy:function fy(){},
bc:function bc(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
ba:function ba(a){this.b=a},
bg:function bg(a){this.b=a},
i5:function i5(a){this.a=a},
hi:function hi(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cx=null
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
e5:function e5(a,b){var _=this
_.b=a
_.d=null
_.e=b
_.cx=!1
_.db=0},
hw:function hw(a){this.a=a}},Z={
iX:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.j5(c)),35044)
a.bindBuffer(b,null)
return new Z.el(b,s)},
a8:function(a){return new Z.ej(a)},
el:function el(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i0:function i0(a){this.a=a},
bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a}},D={
aS:function(){return new D.bR()},
fA:function fA(){},
bR:function bR(){var _=this
_.c=_.b=_.a=null
_.d=0},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
V:function V(){},
bW:function bW(){},
bX:function bX(){},
H:function H(a,b,c){this.c=a
this.d=b
this.e=c}},X={bI:function bI(a,b){this.a=a
this.b=b},dl:function dl(a,b){this.a=a
this.b=b},h0:function h0(a){this.d=a},h5:function h5(a,b,c,d){var _=this
_.a=a
_.r=0
_.x=b
_.y=c
_.z=d},be:function be(a,b,c){this.a=a
this.b=b
this.c=c},ha:function ha(a,b,c,d,e){var _=this
_.a=a
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},hA:function hA(a,b,c,d,e){var _=this
_.a=a
_.e=b
_.f=c
_.r=d
_.x=e},eh:function eh(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
kX:function(a){var s=V.mp(1),r=$.jA
if(r==null){r=V.li(0,0,1,1)
$.jA=r}return new X.fV(new V.bb(0,0,0,s),r)},
fV:function fV(a,b){this.a=a
this.r=b
this.x=null},
dF:function dF(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
hu:function hu(){}},V={
je:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
mp:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
jh:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.cb(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){$.G().toString
return C.b.U(C.d.c4(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ix:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=c+b+1,r=0,q=0;q<4;++q){p=a[q]
$.G().toString
o=C.b.U(C.d.c4(Math.abs(p-0)<1e-9?0:p,b),s)
r=Math.max(r,o.length)
l.push(o)}for(s=l.length,n=s-1;n>=0;--n,s=m){if(n>=s)return H.d(l,n)
s=C.b.U(l[n],r)
m=l.length
if(n>=m)return H.d(l,n)
l[n]=s}return l},
iP:function(){var s=$.jw
return s==null?$.jw=V.aY(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aY:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.dr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l6:function(a,b,c){return new V.bh(a,b,c)},
li:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
iW:function(){var s=$.jN
return s==null?$.jN=new V.N(0,0,0):s},
jK:function(a,b,c){return new V.N(a,b,c)},
lq:function(a){return new V.N(a.a,a.b,a.c)},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(){},
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
a5:function a5(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.B("The html document body was null."))
s=n.createElement("div")
s.className="scrollTop"
m.appendChild(s).toString
r=n.createElement("div")
r.className="scrollPage"
m.appendChild(r).toString
q=n.createElement("div")
q.className="pageCenter"
r.appendChild(q).toString
if(a.length!==0){n.title=a
p=n.createElement("div")
p.className="pageTitle"
p.textContent=a
q.appendChild(p).toString}o=n.createElement("div")
o.toString
q.appendChild(o).toString
W.T(n,"scroll",new V.hr(s),!1)
return new V.hp(o)},
af:function af(){},
d3:function d3(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dc:function dc(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
de:function de(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dH:function dH(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
hp:function hp(a){this.a=a
this.b=null},
hr:function hr(a){this.a=a},
hq:function hq(a){this.a=a},
hs:function hs(a){this.a=a}},U={d0:function d0(a){this.a=a
this.b=null},hb:function hb(){},dM:function dM(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null}},M={d7:function d7(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
iV:function(a,b,c,d,e){var s=new A.hH([],a,c,e)
s.f=d
s.e=P.dq(d,0,!1)
return s},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
d5:function d5(a,b){var _=this
_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
ci:function ci(){},
hF:function hF(){},
hO:function hO(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hH:function hH(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eb:function eb(a,b,c){this.a=a
this.c=b
this.d=c},
hI:function hI(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c}},F={
is:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cH:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.N(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.N(s+a4,r+a2,q+a3)
o=new V.N(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.N(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.is(h)
j=F.is(g)
a.dV(F.mL(a0,a1,new F.io(i,F.is(f),F.is(e),j,k,c),b))},
mL:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.B("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.B("Must have 1 or more divisions of the height for a surface."))
s=F.jE()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.v(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.bG(new V.bb(n,0,0,1),new V.a5(p,1))
c.$3(m,p,0)
r.push(m.b9(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.v(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.bG(new V.bb(h,g,f,1),new V.a5(p,k))
c.$3(m,p,l)
r.push(m.b9(d))}}s.gL().dv(a+1,b+1,r)
return s},
jE:function(){return new F.hn()},
jO:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cm()
h=$.ky()
s=$.aN()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bB().a)!==0)q.r=e
if((r&$.bA().a)!==0)q.x=b
if((r&$.bC().a)!==0)q.y=f
if((r&$.bD().a)!==0)q.z=g
if((r&$.kz().a)!==0)q.Q=c
if((r&$.bE().a)!==0)q.ch=i
if((r&$.bz().a)!==0)q.cx=a
return q},
io:function io(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ai:function ai(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){this.b=this.a=null},
hf:function hf(){this.a=null},
hn:function hn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cj:function cj(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
cm:function cm(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
i_:function i_(a){this.a=a},
v:function v(a,b){this.a=a
this.b=!1
this.c=b},
hW:function hW(a,b,c){this.b=a
this.c=b
this.d=c},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
ei:function ei(a,b){this.b=a
this.c=b},
hZ:function hZ(a){this.b=a},
mH:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g="tutorial1",f=null,e=V.ll("Tutorial 1")
e.K(['This tutorial will walk you through creating the "Hello World" ',"of 3D graphics, a rotating cube. After this tutorial you should know how ","to create a [3Dart|https://github.com/Grant-Nelson/ThreeDart] project. ","However, it is recommended you have a basic understanding of [Dart|https://www.dartlang.org] ","and [3D Matrices|http://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/] ","before starting. You will not need to know [WebGL|https://en.wikipedia.org/wiki/WebGL] ","nor [OpenGL|https://en.wikipedia.org/wiki/OpenGL] until the more advanced ","tutorials."])
s=W.jn()
s.className="pageCanvas"
s.id=g
e.a.appendChild(s).toString
e.as(0,"Getting Started")
e.K(["The following is the [HTML|#index.html] and the [Dart|#main.dart] files ","that we will explore in this tutorial. For this first tutorial I will just ","provide the code and then we'll go over code describing how it works."])
e.bF("index.html","html",0,["<!DOCTYPE html>","<html>","  <head>",'  \t<meta charset="utf-8">','  \t<meta name="viewport" content="width=device-width, initial-scale=1.0">',"   <title>Tutorial 1</title>","  </head>","  <body>",'    <canvas id="tutorial1" width="800" height="600"></canvas>','    <script defer src="main.dart.js"></script>',"  </body>","</html>"])
e.bF("main.dart","dart",0,["library threeDartTutorial1;","","import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;","import 'package:ThreeDart/Shapes.dart' as Shapes;","import 'package:ThreeDart/Movers.dart' as Movers;","import 'package:ThreeDart/Techniques.dart' as Techniques;","import 'package:ThreeDart/Scenes.dart' as Scenes;","","void main() {","  ThreeDart.Entity obj = new ThreeDart.Entity()","    ..shape = Shapes.cube()","    ..mover = new Movers.Rotator()","    ..technique = new Techniques.Depth(fogStart: 3.0, fogStop: 6.0);","","  Scenes.EntityPass pass = new Scenes.EntityPass()","    ..children.add(obj)","    ..camera.mover = new Movers.Constant.translate(0.0, 0.0, 5.0);","",'  new ThreeDart.ThreeDart.fromId("tutorial1")',"    ..scene = pass;","}"])
e.as(4,"ThreeDart")
e.K(["ThreeDart must have a ","[HTML canvas element|http://www.w3schools.com/graphics/canvas_intro.asp] to ","render graphics to. In this example the canvas is provided by [index.html|#index.html] ","and labelled `tutorial1`. On line 21 of [main.dart|#main.dart] the main ThreeDart class ","is created an attached to that canvas using its identifier."])
e.as(4,"Scene")
e.K(["To make the image, the rendering has to have something to render. ","A scene is set to ThreeDart to provide the content to render. A scene ","can be a single rendering pass or a composite of several scenes. In this ","tutorial the scene is only a single pass for rendering entities, the `EntityPass`. "])
e.K(["The EntityPass has a default render target, a `Front Target`, which renders ","directly to the canvas. On render the target will first clear its depth buffer ","and color buffer which is why the background is black."])
e.K(["The EntityPass also has a default camera, a `Perspective Camera`. ","For this example we moved the camera, using a `Constant Mover`, back so that the ","camera is off the center of the scene and looking at the center of the scene."])
e.as(4,"Entity")
e.K(["One or more Entities can be added to the EntityPass. An `Entity` can have ","one or more other Entities added to it too. An Entity describes a shape or group ","of shapes that should be rendered in the scene."])
e.K(["In this tutorial we only add one which is what draws the cube to the scene. ","To make it draw a cube we set the shape of the Entity to a cube. The shape ","can be set to many other built-in shapes, such as sphere, toroid, and knot. ","The shape can be loaded from a file or created mathematically or procedurally."])
e.K(["To make the Entity rotate a `Mover` is attached to it. For this tutorial ","we used the default `Rotator` to cause it to rotate. Movers can be grouped ","to multiply matrices together thus compounding the movements."])
e.K(["The `Technique` attached to the Entity defines how the shape should be ","drawn. In this tutorial we used a very simple technique, `Depth`. Depth ","simply draws the shape with two different colors based on distance from the ","camera. If the background, front target clear color, it the same as the ","far color, it can give the appearance of fog or murky water."])
e.as(4,"Summary")
e.K(["Play around with the Rotator, Shape, and Depth to get a feel for how the parts works. The main take away from this tutorial should be ","how to structure a basic render. A render is one or more pass which draws ","entities. The pass has a camera and target. Entities can contain several ","entities and can draw a shape. An entity can be moved with a Mover and ","rendered with a given technique."])
e.K(["In the next tutorial we will setup a material light technique ","and dive into creating more interesting scenes."])
e=O.jp()
r=new E.bc(e)
e.bi(r.gdW(),r.gdZ())
r.sbk(0,f)
r.sc2(f)
r.saw(f)
q=F.jE()
F.cH(q,f,f,1,1,1,0,0,1)
F.cH(q,f,f,1,1,0,1,0,3)
F.cH(q,f,f,1,1,0,0,1,2)
F.cH(q,f,f,1,1,-1,0,0,0)
F.cH(q,f,f,1,1,0,-1,0,0)
F.cH(q,f,f,1,1,0,0,-1,3)
e=q.e
if(e!=null)++e.d
q.gL().b7()
q.gZ().b7()
e=q.e
if(e!=null)e.aM(0)
r.sbk(0,q)
e=new U.dM(V.iP())
e.sc7(0)
e.sbW(0,0)
e.sc0(0)
p=e.d
$.G().toString
if(!(Math.abs(p-0.1)<1e-9)){e.d=0.1
e.af(new D.H("deltaYaw",p,0.1))}p=e.e
$.G().toString
if(!(Math.abs(p-0.21)<1e-9)){e.e=0.21
e.af(new D.H("deltaPitch",p,0.21))}p=e.f
$.G().toString
if(!(Math.abs(p-0.32)<1e-9)){e.f=0.32
e.af(new D.H("deltaRoll",p,0.32))}r.saw(e)
e=new O.fG()
$.G().toString
if(!(Math.abs(-2)<1e-9)){e.b=3
e.aT(new D.H("start",1,3))}p=e.c
$.G().toString
if(!(Math.abs(p-6)<1e-9)){e.c=6
e.aT(new D.H("stop",p,6))}if(!e.d){e.d=!0
e.a=null
e.aT(new D.H("grey",!1,!0))}r.sc2(e)
e=O.jp()
o=new M.d7(e)
e.bi(o.gcI(),o.gcK())
n=X.kX(f)
m=new X.dF(1.0471975511965976,0.1)
m.saw(f)
p=m.c
$.G().toString
if(!(Math.abs(p-1.0471975511965976)<1e-9)){m.c=1.0471975511965976
m.ad(new D.H("fov",p,1.0471975511965976))}p=m.d
$.G().toString
if(!(Math.abs(p-0.1)<1e-9)){m.d=0.1
m.ad(new D.H("near",p,0.1))}p=m.e
$.G().toString
if(!(Math.abs(p-2000)<1e-9)){m.e=2000
m.ad(new D.H("far",p,2000))}p=o.b
if(p!==m){if(p!=null)p.gD().J(0,o.gab())
l=o.b
o.b=m
m.gD().t(0,o.gab())
o.ac(new D.H("camera",l,o.b))}p=o.c
if(p!==n){if(p!=null)p.gD().J(0,o.gab())
l=o.c
o.c=n
n.gD().t(0,o.gab())
o.ac(new D.H("target",l,o.c))}e.d8([r])
p=e.a
k=p.length
p.push(r)
e.cF(k,[r])
e=o.b
if(e!=null){j=V.aY(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=V.iP()
i=new U.d0(p)
if(!p.p(0,j))i.a=j
e.saw(i)}h=document.getElementById(g)
if(h==null)H.K(P.B("Failed to find an element with the identifier, tutorial1."))
e=E.lp(h,!0,!0,!0,!1)
p=e.d
if(p!==o){if(p!=null)p.gD().J(0,e.gbo())
e.d=o
o.gD().t(0,e.gbo())
e.bp()}}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iN.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.ce(a)},
h:function(a){return"Instance of '"+H.cf(a)+"'"}}
J.dh.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iY:1}
J.c_.prototype={
p:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.aU.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.dG.prototype={}
J.b3.prototype={}
J.al.prototype={
h:function(a){var s=a[$.km()]
if(s==null)return this.cg(a)
return"JavaScript function for "+J.cS(s)},
$ibU:1}
J.ab.prototype={
J:function(a,b){var s
if(!!a.fixed$length)H.K(P.w("remove"))
for(s=0;s<a.length;++s)if(J.R(a[s],b)){a.splice(s,1)
return!0}return!1},
O:function(a,b){if(!!a.fixed$length)H.K(P.w("addAll"))
this.cq(a,b)
return},
cq:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.ag(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.ag(a))}},
l:function(a,b){var s,r,q=a.length,p=P.dq(q,"",!1)
for(s=0;s<a.length;++s){r=H.q(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
dT:function(a){return this.l(a,"")},
dQ:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.ag(a))}throw H.c(H.iK())},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gaI:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.iK())},
bH:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.ag(a))}return!1},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.R(a[s],b))return!0
return!1},
h:function(a){return P.iJ(a,"[","]")},
gH:function(a){return new J.Z(a,a.length)},
gG:function(a){return H.ce(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.K(P.w("set length"))
if(b>a.length)H.k0(a).c.a(null)
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.bx(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.K(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bx(a,b))
a[b]=c},
$ip:1,
$ih:1,
$ie:1,
$il:1}
J.dj.prototype={}
J.Z.prototype={
gB:function(a){return H.O(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.x(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bd.prototype={
W:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaG(b)
if(this.gaG(a)===s)return 0
if(this.gaG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaG:function(a){return a===0?1/a<0:a<0},
bJ:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dD:function(a,b,c){if(C.c.W(b,c)>0)throw H.c(H.fp(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
c4:function(a,b){var s
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaG(a))return"-"+s
return s},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
cb:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ah:function(a,b){return(a|0)===a?a/b|0:this.ds(a,b)},
ds:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.q(s)+": "+H.q(a)+" ~/ "+b))},
aD:function(a,b){var s
if(a>0)s=this.dr(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dr:function(a,b){return b>31?0:a>>>b},
$iP:1,
$iQ:1}
J.bZ.prototype={$io:1}
J.di.prototype={}
J.aD.prototype={
b8:function(a,b){if(b<0)throw H.c(H.bx(a,b))
if(b>=a.length)H.K(H.bx(a,b))
return a.charCodeAt(b)},
aB:function(a,b){if(b>=a.length)throw H.c(H.bx(a,b))
return a.charCodeAt(b)},
N:function(a,b){return a+b},
aQ:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
az:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dK(b,null))
if(b>c)throw H.c(P.dK(b,null))
if(c>a.length)throw H.c(P.dK(c,null))
return a.substring(b,c)},
bn:function(a,b){return this.az(a,b,null)},
eh:function(a){return a.toLowerCase()},
a2:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
U:function(a,b){var s=b-a.length
if(s<=0)return a
return this.a2(" ",s)+a},
dE:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aG(c,0,s,null,null))
return H.ki(a,b,c)},
A:function(a,b){return this.dE(a,b,0)},
W:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
h:function(a){return a},
gG:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk:function(a){return a.length},
$ip:1,
$ir:1}
H.dm.prototype={
h:function(a){var s="LateInitializationError: "+this.a
return s}}
H.k.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.b8(this.a,b)}}
H.h.prototype={}
H.c3.prototype={
gH:function(a){return new H.aF(this,this.gk(this))},
aO:function(a,b){return this.cf(0,b)}}
H.aF.prototype={
gB:function(a){return H.O(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=J.cO(q),o=p.gk(q)
if(r.b!==o)throw H.c(P.ag(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.w(q,s);++r.c
return!0}}
H.aX.prototype={
gH:function(a){return new H.c5(J.az(this.a),this.b)},
gk:function(a){return J.aO(this.a)},
w:function(a,b){return this.b.$1(J.fq(this.a,b))}}
H.bP.prototype={$ih:1}
H.c5.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.O(this).Q[1].a(this.a)}}
H.c6.prototype={
gk:function(a){return J.aO(this.a)},
w:function(a,b){return this.b.$1(J.fq(this.a,b))}}
H.b4.prototype={
gH:function(a){return new H.em(J.az(this.a),this.b)}}
H.em.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.bS.prototype={}
H.ef.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bp.prototype={}
H.hD.prototype={
S:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cd.prototype={
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dk.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.ee.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.he.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f_.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.aR.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kk(r==null?"unknown":r)+"'"},
$ibU:1,
gel:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.e2.prototype={}
H.dW.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kk(s)+"'"}}
H.b9.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.b9))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.ce(this.a)
else s=typeof r!=="object"?J.fr(r):H.ce(r)
return(s^H.ce(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.q(this.d)+"' of "+("Instance of '"+H.cf(s)+"'")}}
H.dO.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.am.prototype={
gk:function(a){return this.a},
gM:function(a){return new H.aE(this)},
gek:function(a){return H.l5(new H.aE(this),new H.h_(this))},
dF:function(a,b){var s=this.b
if(s==null)return!1
return this.cv(s,b)},
j:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aC(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aC(p,b)
q=r==null?n:r.b
return q}else return o.dR(b)},
dR:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bz(q,J.fr(a)&0x3ffffff)
r=this.bK(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bs(s==null?m.b=m.b_():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bs(r==null?m.c=m.b_():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.b_()
p=J.fr(b)&0x3ffffff
o=m.bz(q,p)
if(o==null)m.b2(q,p,[m.b0(b,c)])
else{n=m.bK(o,b)
if(n>=0)o[n].b=c
else o.push(m.b0(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.ag(s))
r=r.c}},
bs:function(a,b,c){var s=this.aC(a,b)
if(s==null)this.b2(a,b,this.b0(b,c))
else s.b=c},
cE:function(){this.r=this.r+1&67108863},
b0:function(a,b){var s,r=this,q=new H.h2(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.cE()
return q},
bK:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1},
h:function(a){return P.jv(this)},
aC:function(a,b){return a[b]},
bz:function(a,b){return a[b]},
b2:function(a,b,c){a[b]=c},
cB:function(a,b){delete a[b]},
cv:function(a,b){return this.aC(a,b)!=null},
b_:function(){var s="<non-identifier-key>",r=Object.create(null)
this.b2(r,s,r)
this.cB(r,s)
return r}}
H.h_.prototype={
$1:function(a){var s=this.a
return H.O(s).Q[1].a(s.j(0,a))},
$S:function(){return H.O(this.a).a_("2(1)")}}
H.h2.prototype={}
H.aE.prototype={
gk:function(a){return this.a.a},
gH:function(a){var s=this.a,r=new H.dp(s,s.r)
r.c=s.e
return r}}
H.dp.prototype={
gB:function(a){return H.O(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.ag(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.iB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:20}
H.fZ.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c9.prototype={}
H.bf.prototype={
gk:function(a){return a.length},
$ip:1,
$it:1}
H.aZ.prototype={
j:function(a,b){H.aw(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$il:1}
H.c8.prototype={
m:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$il:1}
H.dv.prototype={
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dw.prototype={
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dx.prototype={
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dy.prototype={
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dz.prototype={
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.ca.prototype={
gk:function(a){return a.length},
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dA.prototype={
gk:function(a){return a.length},
j:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.cs.prototype={}
H.ct.prototype={}
H.cu.prototype={}
H.cv.prototype={}
H.a6.prototype={
a_:function(a){return H.fd(v.typeUniverse,this,a)},
bt:function(a){return H.lQ(v.typeUniverse,this,a)}}
H.eD.prototype={}
H.ey.prototype={
h:function(a){return this.a}}
H.cD.prototype={}
P.i2.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:25}
P.i1.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:35}
P.i3.prototype={
$0:function(){this.a.$0()},
$S:10}
P.i4.prototype={
$0:function(){this.a.$0()},
$S:10}
P.ii.prototype={
cn:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cM(new P.ij(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))}}
P.ij.prototype={
$0:function(){this.b.$0()},
$S:2}
P.bu.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.q(this.a)+")"}}
P.b5.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bu){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.az(s)
if(o instanceof P.b5){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cA.prototype={
gH:function(a){return new P.b5(this.a())}}
P.en.prototype={}
P.dY.prototype={}
P.dZ.prototype={}
P.im.prototype={}
P.iu.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.h(0)
throw s},
$S:2}
P.ia.prototype={
ec:function(a){var s,r,q,p=null
try{if(C.e===$.av){a.$0()
return}P.mb(p,p,this,a)}catch(q){s=H.ay(q)
r=H.jc(q)
P.k6(p,p,this,s,r)}},
ed:function(a,b){var s,r,q,p=null
try{if(C.e===$.av){a.$1(b)
return}P.mc(p,p,this,a,b)}catch(q){s=H.ay(q)
r=H.jc(q)
P.k6(p,p,this,s,r)}},
ee:function(a,b){return this.ed(a,b,t.z)},
dA:function(a){return new P.ib(this,a)},
dB:function(a,b){return new P.ic(this,a,b)}}
P.ib.prototype={
$0:function(){return this.a.ec(this.b)},
$S:2}
P.ic.prototype={
$1:function(a){return this.a.ee(this.b,a)},
$S:function(){return this.c.a_("~(0)")}}
P.co.prototype={
gH:function(a){var s=new P.cp(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.cu(b)
return r}},
cu:function(a){var s=this.d
if(s==null)return!1
return this.aY(s[this.aV(a)],a)>=0},
t:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bv(s==null?q.b=P.iZ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bv(r==null?q.c=P.iZ():r,b)}else return q.cp(0,b)},
cp:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.iZ()
s=q.aV(b)
r=p[s]
if(r==null)p[s]=[q.aU(b)]
else{if(q.aY(r,b)>=0)return!1
r.push(q.aU(b))}return!0},
J:function(a,b){if((b&1073741823)===b)return this.dh(this.c,b)
else return this.dg(0,b)},
dg:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aV(b)
r=n[s]
q=o.aY(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bD(p)
return!0},
bv:function(a,b){if(a[b]!=null)return!1
a[b]=this.aU(b)
return!0},
dh:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.bD(s)
delete a[b]
return!0},
bw:function(){this.r=this.r+1&1073741823},
aU:function(a){var s,r=this,q=new P.i9(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bw()
return q},
bD:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bw()},
aV:function(a){return J.fr(a)&1073741823},
aY:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1}}
P.i9.prototype={}
P.cp.prototype={
gB:function(a){return H.O(this).c.a(this.d)},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.ag(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bY.prototype={}
P.c2.prototype={$ih:1,$ie:1,$il:1}
P.z.prototype={
gH:function(a){return new H.aF(a,this.gk(a))},
w:function(a,b){return this.j(a,b)},
F:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.j(a,s))
if(r!==this.gk(a))throw H.c(P.ag(a))}},
gbL:function(a){return this.gk(a)===0},
eg:function(a,b){var s,r,q,p,o=this
if(o.gbL(a)){s=J.iL(0)
return s}r=o.j(a,0)
q=P.dq(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.j(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
ef:function(a){return this.eg(a,!0)},
h:function(a){return P.iJ(a,"[","]")}}
P.c4.prototype={}
P.h6.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.q(a)
r.a=s+": "
r.a+=H.q(b)},
$S:29}
P.M.prototype={
F:function(a,b){var s,r,q
for(s=J.az(this.gM(a)),r=H.by(a).a_("M.V");s.q();){q=s.gB(s)
b.$2(q,r.a(this.j(a,q)))}},
gk:function(a){return J.aO(this.gM(a))},
h:function(a){return P.jv(a)},
$iL:1}
P.dQ.prototype={
O:function(a,b){var s
for(s=J.az(b);s.q();)this.t(0,s.gB(s))},
h:function(a){return P.iJ(this,"{","}")},
w:function(a,b){var s,r,q,p,o="index"
H.mo(b,o,t.S)
P.jz(b,o)
for(s=P.lB(this,this.r),r=H.O(s).c,q=0;s.q();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.E(b,this,o,null,q))}}
P.cw.prototype={$ih:1,$ie:1}
P.cq.prototype={}
P.cG.prototype={}
P.cZ.prototype={}
P.d1.prototype={}
P.fN.prototype={}
P.fY.prototype={
h:function(a){return this.a}}
P.fX.prototype={
cw:function(a,b,c){var s,r,q,p,o,n,m,l=null
for(s=a.length,r=this.a,q=r.e,p=r.d,r=r.c,o=b,n=l;o<c;++o){if(o>=s)return H.d(a,o)
switch(a[o]){case"&":m="&amp;"
break
case'"':m=r?"&quot;":l
break
case"'":m=p?"&#39;":l
break
case"<":m="&lt;"
break
case">":m="&gt;"
break
case"/":m=q?"&#47;":l
break
default:m=l}if(m!=null){if(n==null)n=new P.bn("")
if(o>b)n.a+=C.b.az(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.az(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.hU.prototype={}
P.hV.prototype={
dG:function(a){var s,r,q,p=P.iR(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ik(r)
if(q.cD(a,0,p)!==p){C.b.b8(a,p-1)
q.b4()}return new Uint8Array(r.subarray(0,H.lU(0,q.b,s)))}}
P.ik.prototype={
b4:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
dt:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s&63|128
return!0}else{n.b4()
return!1}},
cD:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.b8(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.aB(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.dt(p,C.b.aB(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.b4()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p&63|128}}}return q}}
P.a_.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a_&&this.a===b.a&&!0},
W:function(a,b){return C.c.W(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.c.aD(s,30))&1073741823},
h:function(a){var s=this,r=P.kT(H.le(s)),q=P.d4(H.lc(s)),p=P.d4(H.l8(s)),o=P.d4(H.l9(s)),n=P.d4(H.lb(s)),m=P.d4(H.ld(s)),l=P.kU(H.la(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bO.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.bO&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
W:function(a,b){return C.c.W(this.a,b.a)},
h:function(a){var s,r,q,p=new P.fK(),o=this.a
if(o<0)return"-"+new P.bO(0-o).h(0)
s=p.$1(C.c.ah(o,6e7)%60)
r=p.$1(C.c.ah(o,1e6)%60)
q=new P.fJ().$1(o%1e6)
return""+C.c.ah(o,36e8)+":"+s+":"+r+"."+q}}
P.fJ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.fK.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.C.prototype={}
P.cV.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fP(s)
return"Assertion failed"}}
P.ea.prototype={}
P.dB.prototype={
h:function(a){return"Throw of null."}}
P.a9.prototype={
gaX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaW:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gaX()+o+m
if(!q.a)return l
s=q.gaW()
r=P.fP(q.b)
return l+s+": "+r}}
P.cg.prototype={
gaX:function(){return"RangeError"},
gaW:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.q(q):""
else if(q==null)s=": Not greater than or equal to "+H.q(r)
else if(q>r)s=": Not in inclusive range "+H.q(r)+".."+H.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.q(r)
return s}}
P.df.prototype={
gaX:function(){return"RangeError"},
gaW:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.eg.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ed.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bm.prototype={
h:function(a){return"Bad state: "+this.a}}
P.d_.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fP(s)+"."}}
P.dE.prototype={
h:function(a){return"Out of Memory"},
$iC:1}
P.ck.prototype={
h:function(a){return"Stack Overflow"},
$iC:1}
P.d2.prototype={
h:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eA.prototype={
h:function(a){return"Exception: "+this.a}}
P.fU.prototype={
h:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.az(q,0,75)+"..."
return r+"\n"+q}}
P.e.prototype={
aO:function(a,b){return new H.b4(this,b)},
gk:function(a){var s,r=this.gH(this)
for(s=0;r.q();)++s
return s},
ga9:function(a){var s,r=this.gH(this)
if(!r.q())throw H.c(H.iK())
s=r.gB(r)
if(r.q())throw H.c(H.kZ())
return s},
w:function(a,b){var s,r,q
P.jz(b,"index")
for(s=this.gH(this),r=0;s.q();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.E(b,this,"index",null,r))},
h:function(a){return P.kY(this,"(",")")}}
P.dg.prototype={}
P.a4.prototype={
gG:function(a){return P.J.prototype.gG.call(C.K,this)},
h:function(a){return"null"}}
P.J.prototype={constructor:P.J,$iJ:1,
p:function(a,b){return this===b},
gG:function(a){return H.ce(this)},
h:function(a){return"Instance of '"+H.cf(this)+"'"},
toString:function(){return this.h(this)}}
P.bn.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.j.prototype={}
W.fs.prototype={
gk:function(a){return a.length}}
W.cT.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.cU.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.b8.prototype={$ib8:1}
W.cY.prototype={}
W.aP.prototype={$iaP:1}
W.aQ.prototype={
ca:function(a,b,c){var s=a.getContext(b,P.ka(c))
return s},
$iaQ:1}
W.aa.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
gk:function(a){return a.length}}
W.A.prototype={$iA:1}
W.bK.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.fC.prototype={}
W.a3.prototype={}
W.ah.prototype={}
W.fD.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length}}
W.fF.prototype={
gk:function(a){return a.length}}
W.bL.prototype={}
W.fH.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.bM.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.bN.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.q(r)+", "
s=a.top
s.toString
return r+H.q(s)+") "+H.q(this.gan(a))+" x "+H.q(this.gaj(a))},
p:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.b6(b)
if(s===r.gbM(b)){s=a.top
s.toString
s=s===r.gc5(b)&&this.gan(a)===r.gan(b)&&this.gaj(a)===r.gaj(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.jR(r,C.d.gG(s),C.d.gG(this.gan(a)),C.d.gG(this.gaj(a)))},
gbA:function(a){return a.height},
gaj:function(a){var s=this.gbA(a)
s.toString
return s},
gbM:function(a){var s=a.left
s.toString
return s},
gc5:function(a){var s=a.top
s.toString
return s},
gbE:function(a){return a.width},
gan:function(a){var s=this.gbE(a)
s.toString
return s},
$iaH:1}
W.d6.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.fI.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.eq.prototype={
gbL:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
j:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
t:function(a,b){this.a.appendChild(b).toString
return b},
gH:function(a){var s=this.ef(this)
return new J.Z(s,s.length)}}
W.y.prototype={
gat:function(a){return new W.ex(a)},
gbI:function(a){var s=a.children
s.toString
return new W.eq(a,s)},
h:function(a){var s=a.localName
s.toString
return s},
P:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.jr
if(s==null){s=[]
r=new W.cc(s)
s.push(W.jQ(null))
s.push(W.jV())
$.jr=r
d=r}else d=s
s=$.jq
if(s==null){s=new W.fe(d)
$.jq=s
c=s}else{s.a=d
c=s}}if($.aC==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aC=r
r=r.createRange()
r.toString
$.iH=r
r=$.aC.createElement("base")
t.y.a(r)
s=s.baseURI
s.toString
r.href=s
$.aC.head.appendChild(r).toString}s=$.aC
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aC
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aC.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.A(C.N,s)}else s=!1
if(s){$.iH.selectNodeContents(q)
s=$.iH
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aC.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aC.body)J.jj(q)
c.bh(p)
document.adoptNode(p).toString
return p},
dI:function(a,b,c){return this.P(a,b,c,null)},
cc:function(a,b){var s
a.textContent=null
s=a.appendChild(this.P(a,b,null,null))
s.toString},
gc1:function(a){var s=a.tagName
s.toString
return s},
$iy:1}
W.fL.prototype={
$1:function(a){return t.h.b(a)},
$S:13}
W.f.prototype={$if:1}
W.b.prototype={
du:function(a,b,c,d){if(c!=null)this.cr(a,b,c,!1)},
cr:function(a,b,c,d){return a.addEventListener(b,H.cM(c,1),!1)},
$ib:1}
W.aj.prototype={$iaj:1}
W.d8.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.d9.prototype={
gk:function(a){return a.length}}
W.db.prototype={
gk:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.fW.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.aT.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.aV.prototype={$iaV:1}
W.h4.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.h7.prototype={
gk:function(a){return a.length}}
W.ds.prototype={
j:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aM(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new W.h8(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
W.h8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dt.prototype={
j:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aM(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new W.h9(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.an.prototype={$ian:1}
W.du.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.a0.prototype={$ia0:1}
W.S.prototype={
ga9:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.iS("No elements"))
if(r>1)throw H.c(P.iS("More than one element"))
s=s.firstChild
s.toString
return s},
O:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gH:function(a){var s=this.a.childNodes
return new W.bT(s,s.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.n.prototype={
e8:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
ea:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.kE(s,b,a)}catch(q){H.ay(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.ce(a):s},
di:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$in:1}
W.cb.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.ap.prototype={
gk:function(a){return a.length},
$iap:1}
W.dI.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.dN.prototype={
j:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aM(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new W.hm(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dP.prototype={
gk:function(a){return a.length}}
W.ac.prototype={$iac:1}
W.dS.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.aq.prototype={$iaq:1}
W.dT.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.ar.prototype={
gk:function(a){return a.length},
$iar:1}
W.dX.prototype={
j:function(a,b){return a.getItem(H.iq(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gM:function(a){var s=[]
this.F(a,new W.ht(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iL:1}
W.ht.prototype={
$2:function(a,b){return this.a.push(a)},
$S:28}
W.a7.prototype={$ia7:1}
W.cl.prototype={
P:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aR(a,b,c,d)
s=W.kV("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.S(r).O(0,new W.S(s))
return r}}
W.e0.prototype={
P:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aR(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.S(C.t.P(r,b,c,d))
r=new W.S(r.ga9(r))
new W.S(s).O(0,new W.S(r.ga9(r)))
return s}}
W.e1.prototype={
P:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aR(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.S(C.t.P(r,b,c,d))
new W.S(s).O(0,new W.S(r.ga9(r)))
return s}}
W.bo.prototype={$ibo:1}
W.ad.prototype={$iad:1}
W.a1.prototype={$ia1:1}
W.e3.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.e4.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.hx.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.as.prototype={$ias:1}
W.b1.prototype={$ib1:1}
W.e8.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.hB.prototype={
gk:function(a){return a.length}}
W.au.prototype={}
W.hT.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.ek.prototype={
gk:function(a){return a.length}}
W.aI.prototype={
gdL:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.w("deltaY is not supported"))},
gdK:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.w("deltaX is not supported"))},
$iaI:1}
W.br.prototype={
dj:function(a,b){var s=a.requestAnimationFrame(H.cM(b,1))
s.toString
return s},
cC:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bs.prototype={$ibs:1}
W.er.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.cn.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.q(r)+", "
s=a.top
s.toString
s=r+H.q(s)+") "
r=a.width
r.toString
r=s+H.q(r)+" x "
s=a.height
s.toString
return r+H.q(s)},
p:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.b6(b)
if(s===r.gbM(b)){s=a.top
s.toString
if(s===r.gc5(b)){s=a.width
s.toString
if(s===r.gan(b)){s=a.height
s.toString
r=s===r.gaj(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gG(p)
s=a.top
s.toString
s=C.d.gG(s)
r=a.width
r.toString
r=C.d.gG(r)
q=a.height
q.toString
return W.jR(p,s,r,C.d.gG(q))},
gbA:function(a){return a.height},
gaj:function(a){var s=a.height
s.toString
return s},
gbE:function(a){return a.width},
gan:function(a){var s=a.width
s.toString
return s}}
W.eE.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.cr.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.eX.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.f3.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.eo.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gM(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.x)(s),++p){o=s[p]
b.$2(o,H.iq(q.getAttribute(o)))}},
gM:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.ex.prototype={
j:function(a,b){return this.a.getAttribute(H.iq(b))},
gk:function(a){return this.gM(this).length}}
W.iI.prototype={}
W.ez.prototype={}
W.i6.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.iY.prototype={}
W.bt.prototype={
ck:function(a){var s
if($.eF.a===0){for(s=0;s<262;++s)$.eF.m(0,C.M[s],W.my())
for(s=0;s<12;++s)$.eF.m(0,C.j[s],W.mz())}},
ai:function(a){return $.kB().A(0,W.bQ(a))},
a0:function(a,b,c){var s=$.eF.j(0,W.bQ(a)+"::"+b)
if(s==null)s=$.eF.j(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iao:1}
W.D.prototype={
gH:function(a){return new W.bT(a,this.gk(a))}}
W.cc.prototype={
ai:function(a){return C.a.bH(this.a,new W.hd(a))},
a0:function(a,b,c){return C.a.bH(this.a,new W.hc(a,b,c))},
$iao:1}
W.hd.prototype={
$1:function(a){return a.ai(this.a)},
$S:15}
W.hc.prototype={
$1:function(a){return a.a0(this.a,this.b,this.c)},
$S:15}
W.cx.prototype={
cm:function(a,b,c,d){var s,r,q
this.a.O(0,c)
s=b.aO(0,new W.ie())
r=b.aO(0,new W.ig())
this.b.O(0,s)
q=this.c
q.O(0,C.O)
q.O(0,r)},
ai:function(a){return this.a.A(0,W.bQ(a))},
a0:function(a,b,c){var s=this,r=W.bQ(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.dw(c)
else if(q.A(0,"*::"+b))return s.d.dw(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iao:1}
W.ie.prototype={
$1:function(a){return!C.a.A(C.j,a)},
$S:16}
W.ig.prototype={
$1:function(a){return C.a.A(C.j,a)},
$S:16}
W.f5.prototype={
a0:function(a,b,c){if(this.ci(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.ih.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:24}
W.f4.prototype={
ai:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.bQ(a)==="foreignObject")return!1
if(s)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.b.aQ(b,"on"))return!1
return this.ai(a)},
$iao:1}
W.bT.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kD(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.O(this).c.a(this.d)}}
W.id.prototype={}
W.fe.prototype={
bh:function(a){var s,r=new W.il(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
ar:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.jj(a)
else b.removeChild(a).toString},
dl:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.kH(a)
j=k.a.getAttribute("is")
p=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var i=c.childNodes
if(c.lastChild&&c.lastChild!==i[i.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var h=0
if(c.children)h=c.children.length
for(var g=0;g<h;g++){var f=c.children[g]
if(f.id=='attributes'||f.name=='attributes'||f.id=='lastChild'||f.name=='lastChild'||f.id=='previousSibling'||f.name=='previousSibling'||f.id=='children'||f.name=='children')return true}return false}(a)
p.toString
s=p
if(s)o=!0
else{p=!(a.attributes instanceof NamedNodeMap)
p.toString
o=p}l=o}catch(n){H.ay(n)}r="element unprintable"
try{r=J.cS(a)}catch(n){H.ay(n)}try{q=W.bQ(a)
this.dk(a,b,l,r,q,k,j)}catch(n){if(H.ay(n) instanceof P.a9)throw n
else{this.ar(a,b)
p=window
p.toString
p="Removing corrupted element "+H.q(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
dk:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.ar(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.ai(a)){m.ar(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.q(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.a0(a,"is",g)){m.ar(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.gM(f).slice(0)
for(p=f.gM(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.kK(o)
H.iq(o)
if(!r.a0(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.q(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.G.b(a)){s=a.content
s.toString
m.bh(s)}}}
W.il.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.dl(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.ar(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.iS("Corrupt HTML")
throw H.c(n)}}catch(p){H.ay(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:22}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.f0.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
P.ir.prototype={
$1:function(a){this.a.push(P.k2(a))},
$S:21}
P.iv.prototype={
$2:function(a,b){this.a[a]=P.k2(b)},
$S:37}
P.da.prototype={
gap:function(){return new H.aX(new H.b4(this.b,new P.fS()),new P.fT())},
F:function(a,b){C.a.F(P.h3(this.gap(),!1),b)},
m:function(a,b,c){var s=this.gap()
J.kJ(s.b.$1(J.fq(s.a,b)),c)},
t:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.aO(this.gap().a)},
j:function(a,b){var s=this.gap()
return s.b.$1(J.fq(s.a,b))},
gH:function(a){var s=P.h3(this.gap(),!1)
return new J.Z(s,s.length)}}
P.fS.prototype={
$1:function(a){return t.h.b(a)},
$S:13}
P.fT.prototype={
$1:function(a){return t.h.a(a)},
$S:19}
P.aW.prototype={$iaW:1}
P.dn.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.j(a,b)},
$ih:1,
$ie:1,
$il:1}
P.b_.prototype={$ib_:1}
P.dC.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.j(a,b)},
$ih:1,
$ie:1,
$il:1}
P.hg.prototype={
gk:function(a){return a.length}}
P.bj.prototype={$ibj:1}
P.e_.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.j(a,b)},
$ih:1,
$ie:1,
$il:1}
P.i.prototype={
gbI:function(a){return new P.da(a,new W.S(a))},
P:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.jQ(null))
o.push(W.jV())
o.push(new W.f4())
c=new W.fe(new W.cc(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.dI(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.S(q)
p=r.ga9(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ii:1}
P.b2.prototype={$ib2:1}
P.e9.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.j(a,b)},
$ih:1,
$ie:1,
$il:1}
P.eI.prototype={}
P.eJ.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fw.prototype={
gk:function(a){return a.length}}
P.cW.prototype={
j:function(a,b){return P.aM(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aM(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new P.fx(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
P.fx.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
P.cX.prototype={
gk:function(a){return a.length}}
P.aB.prototype={}
P.dD.prototype={
gk:function(a){return a.length}}
P.ep.prototype={}
P.ch.prototype={$ich:1}
P.dU.prototype={
gk:function(a){var s=a.length
s.toString
return s},
j:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.E(b,a,null,null,null))
s=P.aM(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.j(a,b)},
$ih:1,
$ie:1,
$il:1}
P.eY.prototype={}
P.eZ.prototype={}
K.aA.prototype={
a7:function(a,b){return!0},
h:function(a){return"all"}}
K.dd.prototype={
a7:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)if(s[q].a7(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.x)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.W.prototype={
a7:function(a,b){return!this.cd(0,b)},
h:function(a){return"!["+this.aS(0)+"]"}}
K.hh.prototype={
a7:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var s=H.iQ(this.a),r=H.iQ(this.b)
return s+".."+r}}
K.m.prototype={
n:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.B("May not create a Set with zero characters."))
s=new H.am(t.I)
for(r=new H.aF(a,a.gk(a)),q=H.O(r).c;r.q();)s.m(0,q.a(r.d),!0)
p=P.h3(new H.aE(s),!0)
if(!!p.immutable$list)H.K(P.w("sort"))
H.lo(p,J.m1())
this.a=p},
a7:function(a,b){return C.a.A(this.a,b)},
h:function(a){return P.iT(this.a)}}
L.dV.prototype={
l:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.hC(this.a.i(0,b),[])
s.push(p)
return p},
dP:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
if(p.a7(0,a))return p}return null},
h:function(a){return this.b},
bC:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.A(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aE(s.c)
s=J.az(s==null?[]:s)
for(;s.q();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.j(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.A(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.x)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.aS(0))}return l.charCodeAt(0)==0?l:l}}
L.e6.prototype={
h:function(a){var s=H.jg(this.b,"\n","\\n"),r=H.jg(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e7.prototype={
a8:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.x)(c),++q)r.m(0,c[q],b)},
h:function(a){return this.b}}
L.hy.prototype={
i:function(a,b){var s=this.a,r=s.j(0,b)
if(r==null){r=new L.dV(this,b,[])
s.m(0,b,r)}return r},
E:function(a){var s,r=this.b,q=r.j(0,a)
if(q==null){s=t.N
q=new L.e7(a,P.c0(s,s))
r.m(0,a,q)}return q},
bf:function(a){return this.ei(a)},
ei:function(a){var s=this
return P.m9(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$bf(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.O(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.K(P.w("removeAt"))
if(0>=h)H.K(P.dK(0,null))
g=a1.splice(0,1)[0]}else{if(!r.q()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=c==null
f=h?null:c.dP(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.iT(a0)
throw H.c(P.B("Untokenizable string [state: "+H.q(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.K(P.w("removeRange"))
P.iR(0,i,a0.length)
a0.splice(0,i-0)
C.a.O(a1,a0)
a0=[]
b=[]
c=s.d
q=!m.A(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(g)
c=f.b
h=c.d
if(h!=null){e=P.iT(b)
h=c.d
if(h==null)l=null
else{d=h.c.j(0,e)
h=new L.e6(d==null?h.b:d,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.lz()
case 1:return P.lA(o)}}},t.J)},
h:function(a){var s,r,q=new P.bn(""),p=this.d
if(p!=null)q.a=""+(p.bC()+"\n")
for(p=this.a,p=p.gek(p),p=new H.c5(J.az(p.a),p.b),s=H.O(p).Q[1];p.q();){r=s.a(p.a)
if(r!=this.d)q.a+=H.q(r==null?null:r.bC())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.hC.prototype={
h:function(a){return this.b.b+": "+this.aS(0)}}
O.bJ.prototype={
bi:function(a,b){this.b=null
this.c=a},
d8:function(a){return!0},
cF:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gH:function(a){var s=this.a
return new J.Z(s,s.length)},
w:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
$ie:1}
O.c7.prototype={
gk:function(a){return this.a.length},
gD:function(){var s=this.b
return s==null?this.b=D.aS():s},
aa:function(){var s=this.b
return s==null?null:s.R(null)},
gav:function(a){var s=this.a
if(s.length>0)return C.a.gaI(s)
else return V.iP()},
bY:function(a){this.a.push(a)
this.aa()},
be:function(){var s=this.a
if(s.length>0){s.pop()
this.aa()}}}
E.fy.prototype={}
E.bc.prototype={
bu:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.Z(s,s.length),r=H.O(s).c;s.q();){q=r.a(s.d)
if(q.f==null)q.bu()}},
sbk:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gD().J(0,s.gbR())
if(b!=null)b.gD().t(0,s.gbR())
s.X(new D.H("shape",r,b))}},
sc2:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gD().J(0,s.gbT())
if(a!=null)a.gD().t(0,s.gbT())
s.bu()
s.X(new D.H("technique",r,a))}},
saw:function(a){var s,r,q=this
if(!J.R(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gD().J(0,q.gbP())
if(a!=null)a.gD().t(0,q.gbP())
r=q.r
q.X(new D.H("mover",s,r))}},
c6:function(a,b){var s,r,q,p,o,n,m=this,l=m.r
if(l==null)s=null
else{r=l.r
q=b.e
if(r<q){l.r=q
r=l.y
if(r!=null)++r.d
l.sc7(l.a+l.d*b.y)
l.sbW(0,l.b+l.e*b.y)
l.sc0(l.c+l.f*b.y)
r=l.c
p=Math.cos(r)
o=Math.sin(r)
r=V.aY(p,-o,0,0,o,p,0,0,0,0,1,0,0,0,0,1)
q=l.b
p=Math.cos(q)
o=Math.sin(q)
r=r.a2(0,V.aY(p,0,-o,0,0,1,0,0,o,0,p,0,0,0,0,1))
q=l.a
p=Math.cos(q)
o=Math.sin(q)
l.x=r.a2(0,V.aY(1,0,0,0,0,p,-o,0,0,o,p,0,0,0,0,1))
r=l.y
if(r!=null)r.aM(0)}s=l.x}if(!J.R(s,m.x)){n=m.x
m.x=s
m.X(new D.H("matrix",n,s))}for(l=m.y.a,l=new J.Z(l,l.length),r=H.O(l).c;l.q();)r.a(l.d).c6(0,b)},
am:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=a.dx,g=j.x,f=h.a
if(g==null)f.push(h.gav(h))
else f.push(g.a2(0,h.gav(h)))
h.aa()
a.bZ(j.f)
s=C.a.gaI(a.dy)
if(j.d!=null)if(s!=null){r=s.a
if(r==null){g=s.d
f=g?"High":"Grey"
q=a.fr
r=q.j(0,f+"ViewDepth")
if(r==null){f=a.a
p=g?"High":"Grey"
p+="ViewDepth"
r=new A.d5(f,p)
o=""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
o=o.charCodeAt(0)==0?o:o
n=""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n"
n=(g?n+"   vec3 clr = vec3(f, f, f);\n":n+"  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
r.c=o
r.d=n.charCodeAt(0)==0?n:n
m=r.by(o,35633)
l=r.by(r.d,35632)
o=f.createProgram()
o.toString
r.e=o
f.attachShader(r.ga4(),m)
f.attachShader(r.ga4(),l)
f.linkProgram(r.ga4())
if(!H.k1(f.getProgramParameter(r.ga4(),35714))){k=f.getProgramInfoLog(r.ga4())
if(k==null)k="undefined log error"
f.deleteProgram(r.e)
H.K(P.B("Failed to link shader: "+k))}r.dm()
r.dq()
r.x=r.gat(r).j(0,"posAttr")
g=t.n
r.y=g.a(r.gaN().j(0,"width"))
r.z=g.a(r.gaN().j(0,"stop"))
g=t.a
r.Q=g.a(r.gaN().j(0,"viewObjMat"))
r.ch=g.a(r.gaN().j(0,"projMat"))
if(p.length===0)H.K(P.B("May not cache a shader with no name."))
if(q.dF(0,p))H.K(P.B('Shader cache already contains a shader by the name "'+p+'".'))
q.m(0,p,r)}r=s.a=r}g=j.e
if((!(g instanceof Z.bH)?j.e=null:g)==null){g=j.d
g=g==null?i:g.dC(new Z.i0(a.a),$.aN())
if(g==null)g=i
else{f=g.dO($.aN())
if(f!=null){q=r.x
q=q==null?i:q.c
f.e=q==null?0:q}}j.e=g}g=a.a
g.useProgram(r.e)
r.gat(r).dN()
f=s.b
q=s.c
p=r.y
if(p!=null)p.a.uniform1f(p.d,f-q)
f=s.c
q=r.z
if(q!=null)q.a.uniform1f(q.d,f)
f=a.cy
f=f.gav(f)
q=r.ch
if(q!=null)q.bj(f.c3(0,!0))
f=a.cx
if(f==null){f=a.db
f=a.cx=f.gav(f).a2(0,h.gav(h))}q=r.Q
if(q!=null)q.bj(f.c3(0,!0))
f=t.D.a(j.e)
f.b5(a)
f.am(a)
f.ej(a)
g.useProgram(i)
r.gat(r).dM()}for(g=j.y.a,g=new J.Z(g,g.length),f=H.O(g).c;g.q();)f.a(g.d).am(a)
a.bX()
h.be()},
X:function(a){var s=this.z
return s==null?null:s.R(a)},
T:function(){return this.X(null)},
bS:function(a){this.e=null
this.X(a)},
e1:function(){return this.bS(null)},
bU:function(a){return this.X(a)},
e2:function(){return this.bU(null)},
bQ:function(a){return this.X(a)},
e0:function(){return this.bQ(null)},
bO:function(a){return this.X(a)},
dY:function(){return this.bO(null)},
dX:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbN(),q=0;q<b.length;b.length===s||(0,H.x)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bR()
n=o.a;(n==null?o.a=[]:n).push(r)}this.T()},
e_:function(a,b){var s,r
for(s=b.gH(b),r=this.gbN();s.q();)s.gB(s).gD().J(0,r)
this.T()},
h:function(a){return"Unnamed entity"}}
E.ba.prototype={
h:function(a){return this.b}}
E.bg.prototype={
h:function(a){return this.b}}
E.i5.prototype={}
E.hi.prototype={
cj:function(a,b){var s=this
s.cy.gD().t(0,new E.hj(s))
s.db.gD().t(0,new E.hk(s))
s.dx.gD().t(0,new E.hl(s))},
bZ:function(a){var s=this.dy
return s.push(a==null?C.a.gaI(s):a)},
bX:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hj.prototype={
$1:function(a){},
$S:9}
E.hk.prototype={
$1:function(a){this.a.cx=null},
$S:9}
E.hl.prototype={
$1:function(a){this.a.cx=null},
$S:9}
E.e5.prototype={
bq:function(a){this.c_()},
bp:function(){return this.bq(null)},
bB:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bJ(r*o)
r=s.clientHeight
r.toString
p=C.d.bJ(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.jH(C.h,this.geb())}},
c_:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.v.cC(s)
r=W.k7(new E.hw(this),t.H)
r.toString
C.v.dj(s,r)}},
e9:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.bB()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a_(p,!1)
q.y=1000*(p-q.r.a)*0.000001
p=q.cy
C.a.sk(p.a,0)
p.aa()
p=q.db
C.a.sk(p.a,0)
p.aa()
p=q.dx
C.a.sk(p.a,0)
p.aa()
p=q.dy
C.a.sk(p,0)
p.push(null)
m.am(q)}}catch(o){s=H.ay(o)
r=H.jc(o)
P.kf("Error: "+H.q(s))
P.kf("Stack: "+H.q(r))
throw H.c(s)}}}
E.hw.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.e9()}},
$S:23}
Z.el.prototype={}
Z.bG.prototype={
b5:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ay(q)
r=P.B('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.q(s))
throw H.c(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.q(s.e)+"]"}}
Z.i0.prototype={}
Z.bH.prototype={
dO:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
b5:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].b5(a)}},
ej:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
am:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
h:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cf(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){n=s[q]
o.push("["+n.a.h(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+H.q(n.e)+"]")}return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(m,", ")+"\nAttrs:   "+C.a.l(o,", ")}}
Z.bV.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cf(this.c)+"'")+"]"}}
Z.ej.prototype={
gbl:function(a){var s=this.a,r=(s&$.aN().a)!==0?3:0
if((s&$.bB().a)!==0)r+=3
if((s&$.bA().a)!==0)r+=3
if((s&$.bC().a)!==0)r+=2
if((s&$.bD().a)!==0)r+=3
if((s&$.cQ().a)!==0)r+=3
if((s&$.cR().a)!==0)r+=4
if((s&$.bE().a)!==0)++r
return(s&$.bz().a)!==0?r+4:r},
dz:function(a){var s,r=$.aN(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bE()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bz()
if((q&r.a)!==0)if(s===a)return r
return $.kA()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ej))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.aN().a)!==0)s.push("Pos")
if((r&$.bB().a)!==0)s.push("Norm")
if((r&$.bA().a)!==0)s.push("Binm")
if((r&$.bC().a)!==0)s.push("Txt2D")
if((r&$.bD().a)!==0)s.push("TxtCube")
if((r&$.cQ().a)!==0)s.push("Clr3")
if((r&$.cR().a)!==0)s.push("Clr4")
if((r&$.bE().a)!==0)s.push("Weight")
if((r&$.bz().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.l(s,"|")}}
D.fA.prototype={}
D.bR.prototype={
t:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
J:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.A(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.J(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.A(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.J(p,b)
s=p===!0||s}return s},
R:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.V():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.F(P.h3(p,!0),new D.fQ(s))
r=q.b
if(r!=null){q.b=[]
C.a.F(r,new D.fR(s))}return!0},
aM:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.R(s)}}}}
D.fQ.prototype={
$1:function(a){a.$1(this.a)},
$S:18}
D.fR.prototype={
$1:function(a){a.$1(this.a)},
$S:18}
D.V.prototype={}
D.bW.prototype={}
D.bX.prototype={}
D.H.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.q(this.d)+" => "+H.q(this.e)}}
X.bI.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bI))return!1
if(this.a!==b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.dl.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
if(this.a!==b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.h0.prototype={}
X.h5.prototype={
bd:function(a,b){this.r=a.a
return!1},
ay:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
ax:function(a,b){return!1},
e6:function(a){return!1},
cY:function(a,b,c){return}}
X.be.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.be))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
h:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.l(s,"+")}}
X.ha.prototype={
bd:function(a,b){this.f=a.a
return!1},
ay:function(a,b){this.f=(this.f&~a.a)>>>0
return!1},
ax:function(a,b){return!1},
e7:function(a,b){return!1}}
X.hA.prototype={
e5:function(a){return!1},
e3:function(a){return!1},
e4:function(a){return!1}}
X.eh.prototype={
gaH:function(a){var s=this.b
return s==null?this.b=new X.h0(P.c1(t.S)):s},
gal:function(){var s,r=this.c
if(r==null){r=$.b0
if(r==null){r=$.b0=new V.a5(0,0)
s=r}else s=r
r=this.c=new X.ha(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
ga6:function(){var s=this.d
if(s==null){s=$.b0
if(s==null)s=$.b0=new V.a5(0,0)
s=this.d=new X.h5(this,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return s},
gbg:function(){var s,r=this.e
if(r==null){r=$.b0
if(r==null){r=$.b0=new V.a5(0,0)
s=r}else s=r
r=this.e=new X.hA(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
bx:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dl(p,new X.be(s,r,q))},
ag:function(a){var s
this.gaH(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
b3:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gaH(this)
a.altKey
a.shiftKey},
a5:function(a){var s,r,q,p
if(a==null){s=$.b0
return s==null?$.b0=new V.a5(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a5(r-p,q-s)},
aq:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.bq(r,s)},
b1:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.x)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.Y(n)
m=o.pageY
m.toString
C.d.Y(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.Y(l)
l=o.pageY
l.toString
l=C.d.Y(l)
k=j.top
k.toString
s.push(new V.a5(n-m,l-k))}return s},
a3:function(a){var s,r,q,p
if(a==null)return new X.bI(0,new X.be(!1,!1,!1))
s=a.buttons
if(s==null)s=0
r=a.ctrlKey
r.toString
if(!r){r=a.metaKey
r.toString}else r=!0
q=a.altKey
q.toString
p=a.shiftKey
p.toString
return new X.bI(s,new X.be(r,q,p))},
aZ:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
n.toString
s=a.pageX
s.toString
r=a.pageY
r.toString
q=n.left
q.toString
p=s-q
if(p<0)return!1
s=n.top
s.toString
o=r-s
if(o<0)return!1
s=n.width
s.toString
if(p<s){n=n.height
n.toString
n=o<n}else n=!1
return n},
cT:function(a){return this.f=!0},
cH:function(a){return this.f=!1},
cN:function(a){if(this.f&&this.aZ(a))a.preventDefault()},
cX:function(a){var s,r=this
if(!r.f)return
s=r.bx(a)
r.gaH(r).d.t(0,s.a)},
cV:function(a){var s,r=this
if(!r.f)return
s=r.bx(a)
r.gaH(r).d.J(0,s.a)},
d_:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.ag(a)
if(p.x){s=p.a3(a)
r=p.aq(a)
if(p.ga6().bd(s,r))a.preventDefault()
return}s=p.a3(a)
q=p.a5(a)
if(p.gal().bd(s,q))a.preventDefault()},
d3:function(a){var s,r,q,p=this
p.ag(a)
s=p.a3(a)
if(p.x){r=p.aq(a)
if(p.ga6().ay(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gal().ay(s,q))a.preventDefault()},
cR:function(a){var s,r,q,p=this
if(!p.aZ(a)){p.ag(a)
s=p.a3(a)
if(p.x){r=p.aq(a)
if(p.ga6().ay(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gal().ay(s,q))a.preventDefault()}},
d1:function(a){var s,r,q,p=this
p.ag(a)
s=p.a3(a)
if(p.x){r=p.aq(a)
if(p.ga6().ax(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gal().ax(s,q))a.preventDefault()},
cP:function(a){var s,r,q,p=this
if(!p.aZ(a)){p.ag(a)
s=p.a3(a)
if(p.x){r=p.aq(a)
if(p.ga6().ax(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gal().ax(s,q))a.preventDefault()}},
d5:function(a){var s,r,q,p=this
p.ag(a)
s=p.Q
r=new V.bq(C.u.gdK(a)*s,C.u.gdL(a)*s)
if(p.x){if(p.ga6().e6(r))a.preventDefault()
return}q=p.a5(a)
if(p.gal().e7(r,q))a.preventDefault()},
d7:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.a3(q.y)
r=q.a5(q.y)
q.ga6().cY(s,r,p)}},
df:function(a){var s,r=this
r.a.focus()
r.f=!0
r.b3(a)
s=r.b1(a)
if(r.gbg().e5(s))a.preventDefault()},
da:function(a){var s
this.b3(a)
s=this.b1(a)
if(this.gbg().e3(s))a.preventDefault()},
dd:function(a){var s
this.b3(a)
s=this.b1(a)
if(this.gbg().e4(s))a.preventDefault()}}
V.bb.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bb))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.fO.prototype={}
V.dr.prototype={
c3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
a2:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aY(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dr))return!1
s=b.a
$.G().toString
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
h:function(a){return this.u()},
v:function(a){var s,r,q,p,o,n=this,m=V.ix([n.a,n.e,n.y,n.cx],3,0),l=V.ix([n.b,n.f,n.z,n.cy],3,0),k=V.ix([n.c,n.r,n.Q,n.db],3,0),j=V.ix([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.d(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.d(m,1)
o=o+m[1]+", "
if(1>=r)return H.d(l,1)
o=o+l[1]+", "
if(1>=q)return H.d(k,1)
o=o+k[1]+", "
if(1>=p)return H.d(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.d(m,2)
s=s+m[2]+", "
if(2>=r)return H.d(l,2)
s=s+l[2]+", "
if(2>=q)return H.d(k,2)
s=s+k[2]+", "
if(2>=p)return H.d(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.d(m,3)
o=o+m[3]+", "
if(3>=r)return H.d(l,3)
o=o+l[3]+", "
if(3>=q)return H.d(k,3)
o=o+k[3]+", "
if(3>=p)return H.d(j,3)
return s+(o+j[3]+"]")},
u:function(){return this.v("")}}
V.a5.prototype={
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"},
u:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.bh.prototype={
bm:function(a,b){return new V.bh(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bh))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
u:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.dJ.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dJ))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.dL.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dL))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.bq.prototype={
bb:function(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.N.prototype={
bb:function(a){return Math.sqrt(this.au(this))},
au:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bc:function(a,b){return new V.N(V.je(this.a,a.a,b),V.je(this.b,a.b,b),V.je(this.c,a.c,b))},
a1:function(){var s=this,r=Math.sqrt(s.au(s))
if(r===1)return s
return s.c8(0,r)},
ba:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.N(s*r-q*p,q*o-n*r,n*p-s*o)},
N:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aP:function(a){return new V.N(-this.a,-this.b,-this.c)},
c8:function(a,b){$.G().toString
if(Math.abs(b-0)<1e-9)return V.iW()
return new V.N(this.a/b,this.b/b,this.c/b)},
dS:function(){$.G().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.G().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
u:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.d0.prototype={
gD:function(){var s=this.b
return s==null?this.b=D.aS():s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d0))return!1
return this.a.p(0,b.a)},
h:function(a){return"Constant: "+this.a.v("          ")}}
U.hb.prototype={}
U.dM.prototype={
gD:function(){var s=this.y
return s==null?this.y=D.aS():s},
af:function(a){var s=this.y
return s==null?null:s.R(a)},
sc7:function(a){var s
a=V.jh(a,0,6.283185307179586)
s=this.a
$.G().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.af(new D.H("yaw",s,a))}},
sbW:function(a,b){var s
b=V.jh(b,0,6.283185307179586)
s=this.b
$.G().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.af(new D.H("pitch",s,b))}},
sc0:function(a){var s
a=V.jh(a,0,6.283185307179586)
s=this.c
$.G().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.af(new D.H("roll",s,a))}},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dM))return!1
s=q.a
r=b.a
$.G().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
h:function(a){var s=this
return"Rotator: ["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+"], ["+V.u(s.d,3,0)+", "+V.u(s.e,3,0)+", "+V.u(s.f,3,0)+"]"}}
M.d7.prototype={
ac:function(a){var s=this.y
return s==null?null:s.R(a)},
cl:function(){return this.ac(null)},
cJ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gab(),q=0;q<b.length;b.length===s||(0,H.x)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bR()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ac(new D.bW())},
cL:function(a,b){var s,r
for(s=b.gH(b),r=this.gab();s.q();)s.gB(s).gD().J(0,r)
this.ac(new D.bX())},
gD:function(){var s=this.y
return s==null?this.y=D.aS():s},
am:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.bZ(d.d)
s=d.c
if(s!=null){r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
if(q==null)q=512
p=r.drawingBufferHeight
if(p==null)p=512
o=s.r
n=C.d.Y(o.a*q)
m=C.d.Y(o.b*p)
l=C.d.Y(o.c*q)
a.c=l
o=C.d.Y(o.d*p)
a.d=o
r.viewport(n,m,l,o)
r.clearDepth(2000)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)}s=d.b
if(s!=null){r=a.c
o=a.d
l=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(l*0.5)
g=V.aY(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.bY(g)
f=$.kn()
e=s.b
if(e!=null)f=e.a.a2(0,f)
a.db.bY(f)}for(s=d.e.a,r=new J.Z(s,s.length),o=H.O(r).c;r.q();)o.a(r.d).c6(0,a)
for(s=new J.Z(s,s.length),r=H.O(s).c;s.q();)r.a(s.d).am(a)
if(d.b!=null){a.cy.be()
a.db.be()}a.bX()}}
A.fu.prototype={}
A.fv.prototype={
j:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
dN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dM:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.d5.prototype={}
A.ci.prototype={
gat:function(a){var s=this.f
if(s==null)throw H.c(P.B("Must initialize the shader prior to getting the attributes."))
return s},
gaN:function(){var s=this.r
if(s==null)throw H.c(P.B("Must initialize the shader prior to getting the uniforms."))
return s},
ga4:function(){var s=this.e
if(s==null)throw H.c(P.B(u.d))
return s},
by:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.k1(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.B('Error compiling shader "'+H.q(q)+'": '+s))}return q},
dm:function(){var s,r,q,p,o=this,n=u.d,m=[],l=o.a,k=H.ip(l.getProgramParameter(o.ga4(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.K(P.B(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.K(P.B(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.fu(l,q,p))}o.f=new A.fv(m)},
dq:function(){var s,r,q,p,o,n,m=this,l=u.d,k=[],j=m.a,i=H.ip(j.getProgramParameter(m.ga4(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.K(P.B(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.K(P.B(l))
p=q.name
p.toString
p=j.getUniformLocation(r,p)
p.toString
o=q.type
o.toString
n=q.size
n.toString
q=q.name
q.toString
k.push(m.dJ(o,n,q,p))}m.r=new A.hO(k)},
ae:function(a,b,c){var s=this.a
if(a===1)return new A.hG(s,b,c)
else return A.iV(s,this.e,b,a,c)},
cz:function(a,b,c){var s=this.a
if(a===1)return new A.hR(s,b,c)
else return A.iV(s,this.e,b,a,c)},
cA:function(a,b,c){var s=this.a
if(a===1)return new A.hS(s,b,c)
else return A.iV(s,this.e,b,a,c)},
aE:function(a,b){return new P.eA(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
dJ:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ae(b,c,d)
case 5121:return s.ae(b,c,d)
case 5122:return s.ae(b,c,d)
case 5123:return s.ae(b,c,d)
case 5124:return s.ae(b,c,d)
case 5125:return s.ae(b,c,d)
case 5126:return new A.eb(s.a,c,d)
case 35664:return new A.hI(s.a,c,d)
case 35665:return new A.hK(s.a,c,d)
case 35666:return new A.hM(s.a,c,d)
case 35667:return new A.hJ(s.a,c,d)
case 35668:return new A.hL(s.a,c,d)
case 35669:return new A.hN(s.a,c,d)
case 35674:return new A.hP(s.a,c,d)
case 35675:return new A.hQ(s.a,c,d)
case 35676:return new A.ec(s.a,c,d)
case 35678:return s.cz(b,c,d)
case 35680:return s.cA(b,c,d)
case 35670:throw H.c(s.aE("BOOL",c))
case 35671:throw H.c(s.aE("BOOL_VEC2",c))
case 35672:throw H.c(s.aE("BOOL_VEC3",c))
case 35673:throw H.c(s.aE("BOOL_VEC4",c))
default:throw H.c(P.B("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.hF.prototype={}
A.hO.prototype={
j:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.x)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.hG.prototype={
h:function(a){return"Uniform1i: "+this.c}}
A.hJ.prototype={
h:function(a){return"Uniform2i: "+this.c}}
A.hL.prototype={
h:function(a){return"Uniform3i: "+this.c}}
A.hN.prototype={
h:function(a){return"Uniform4i: "+this.c}}
A.hH.prototype={
h:function(a){return"Uniform1iv: "+this.c}}
A.eb.prototype={
h:function(a){return"Uniform1f: "+this.c}}
A.hI.prototype={
h:function(a){return"Uniform2f: "+this.c}}
A.hK.prototype={
h:function(a){return"Uniform3f: "+this.c}}
A.hM.prototype={
h:function(a){return"Uniform4f: "+this.c}}
A.hP.prototype={
h:function(a){return"Uniform1Mat2 "+this.c}}
A.hQ.prototype={
h:function(a){return"UniformMat3: "+this.c}}
A.ec.prototype={
bj:function(a){var s=new Float32Array(H.j5(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+this.c}}
A.hR.prototype={
h:function(a){return"UniformSampler2D: "+this.c}}
A.hS.prototype={
h:function(a){return"UniformSamplerCube: "+this.c}}
F.io.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bc(q.b,b).bc(q.d.bc(q.c,b),c)
q=new V.bh(p.a,p.b,p.c)
if(!J.R(a.f,q)){a.f=q
q=a.a
if(q!=null)q.T()}q=p.a1()
if(!J.R(a.z,q)){a.z=q
q=a.a
if(q!=null)q.T()}q=1-b
s=1-c
s=new V.dJ(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.R(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.T()}},
$S:30}
F.ai.prototype={
ao:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.B("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.B("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.gL().b.push(s)
s.b=b
b.gL().c.push(s)
s.c=c
c.gL().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gL().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.T()}},
cs:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.iW()
if(n!=null)q=q.N(0,n)
if(s!=null)q=q.N(0,s)
if(r!=null)q=q.N(0,r)
if(q.dS())return p
return q.a1()},
ct:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.bm(0,n)
q=new V.N(o.a,o.b,o.c).a1()
o=r.bm(0,n)
return q.ba(new V.N(o.a,o.b,o.c).a1()).a1()},
b6:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.cs()
if(s==null){s=q.ct()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.T()}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.u()},
v:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gak(p)
p=a+C.b.U(C.c.h(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gak(o)
p=p+C.b.U(C.c.h(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gak(o)
s=p+C.b.U(C.c.h(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
return s+"-}"},
u:function(){return this.v("")}}
F.h1.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.u()},
v:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gak(s)
s=a+C.b.U(C.c.h(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gak(r)
return s+C.b.U(C.c.h(r==null?-1:r),0)},
u:function(){return this.v("")}}
F.hf.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.u()},
v:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gak(s)
return a+C.b.U(C.c.h(s),0)},
u:function(){return this.v("")}}
F.hn.prototype={
gZ:function(){var s=this.a
return s==null?this.a=new F.v(this,[]):s},
gaK:function(a){var s=this.b
return s==null?this.b=new F.bl(this,[]):s},
gaJ:function(a){var s=this.c
return s==null?this.c=new F.bk(this,[]):s},
gL:function(){var s=this.d
return s==null?this.d=new F.cj(this,[]):s},
gD:function(){var s=this.e
return s==null?this.e=D.aS():s},
dV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gZ().I()
s=d.gZ().c.length
for(b=a.gZ().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.x)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.v(d,[])
o.t(0,p.dH())}d.gZ().I()
for(b=a.gaK(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.x)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.v(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.v(l,[]):k).I()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bl(d,[]):m).a
m=o.a;(m==null?o.a=new F.v(o,[]):m).t(0,j)
o=new F.hf()
if(j.a==null)H.K(P.B("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.hZ([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bl(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.R(c)}}}for(b=a.gaJ(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.x)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.v(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.v(l,[]):k).I()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.v(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.v(l,[]):k).I()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.bk(d,[]):m).a
m=o.a;(m==null?o.a=new F.v(o,[]):m).t(0,h)
m=o.a;(m==null?o.a=new F.v(o,[]):m).t(0,g)
o=new F.h1()
m=h.a
if(m==null)H.K(P.B("May not create a line with a start vertex which is not attached to a shape."))
if(m!=g.a)H.K(P.B("May not create a line with vertices attached to different shapes."))
o.a=h
m=h.c;(m==null?h.c=new F.ei([],[]):m).b.push(o)
o.b=g
m=g.c;(m==null?g.c=new F.ei([],[]):m).c.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.c;(l==null?m.c=new F.bk(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.R(c)}}}for(b=a.gL().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.x)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.v(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.v(l,[]):k).I()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.v(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.v(l,[]):k).I()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.v(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.v(l,[]):k).I()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cj(d,[]):m).a
m=o.a;(m==null?o.a=new F.v(o,[]):m).t(0,h)
m=o.a;(m==null?o.a=new F.v(o,[]):m).t(0,g)
m=o.a;(m==null?o.a=new F.v(o,[]):m).t(0,e)
new F.ai().ao(h,g,e)}b=d.e
if(b!=null)b.aM(0)},
dC:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gZ().c.length,c=$.aN(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.bB().a)!==0)++a
if((b&$.bA().a)!==0)++a
if((b&$.bC().a)!==0)++a
if((b&$.bD().a)!==0)++a
if((b&$.cQ().a)!==0)++a
if((b&$.cR().a)!==0)++a
if((b&$.bE().a)!==0)++a
if((b&$.bz().a)!==0)++a
s=a1.gbl(a1)
r=P.dq(d*s,0,!1)
e.a=0
q=P.l4(a,new F.ho(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.j5(r)),35044)
c.bindBuffer(f,g)
p=new Z.bH(new Z.el(f,b),[],q)
if(h.gaK(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bl(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.v(m,[]):l).I()}b=b.e}o.push(b==null?0:b);++n}k=Z.iX(c,34963,o)
p.b.push(new Z.bV(0,o.length,k))}if(h.gaJ(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.bk(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.v(m,[]):l).I()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.v(m,[]):l).I()}b=b.e}o.push(b==null?0:b);++n}k=Z.iX(c,34963,o)
p.b.push(new Z.bV(1,o.length,k))}if(h.gL().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cj(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.v(m,[]):l).I()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.v(m,[]):l).I()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.v(m,[]):l).I()}b=b.e}o.push(b==null?0:b);++n}k=Z.iX(c,34963,o)
p.b.push(new Z.bV(4,o.length,k))}return p},
h:function(a){var s=this,r="   ",q=[]
if(s.gZ().c.length!==0){q.push("Vertices:")
q.push(s.gZ().v(r))}if(s.gaK(s).b.length!==0){q.push("Points:")
q.push(s.gaK(s).v(r))}if(s.gaJ(s).b.length!==0){q.push("Lines:")
q.push(s.gaJ(s).v(r))}if(s.gL().b.length!==0){q.push("Faces:")
q.push(s.gL().v(r))}return C.a.l(q,"\n")},
T:function(){var s=this.e
return s==null?null:s.R(null)}}
F.ho.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.dz(a),f=g.gbl(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.v(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].dU(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bG(g,f,d*4,h.d)},
$S:31}
F.cj.prototype={
dv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.d(c,q)
k=c[q];++q
if(q>=l)return H.d(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.d(c,i)
h=c[i]
if(r<0||r>=l)return H.d(c,r)
g=c[r]
l=s.a
if(n){(l==null?s.a=new F.v(s,[]):l).t(0,k)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,j)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,h)
f=new F.ai()
f.ao(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,k)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,h)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,g)
f=new F.ai()
f.ao(k,h,g)
e.push(f)}else{(l==null?s.a=new F.v(s,[]):l).t(0,j)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,h)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,g)
f=new F.ai()
f.ao(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,j)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,g)
l=s.a;(l==null?s.a=new F.v(s,[]):l).t(0,k)
f=new F.ai()
f.ao(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gk:function(a){return this.b.length},
b7:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.x)(s),++p)if(!s[p].b6())q=!1
return q},
h:function(a){return this.u()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(a))
return C.a.l(p,"\n")},
u:function(){return this.v("")}}
F.bk.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.u()},
v:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].v(a+(""+s+". ")))}return C.a.l(r,"\n")},
u:function(){return this.v("")}}
F.bl.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.u()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(a))
return C.a.l(p,"\n")},
u:function(){return this.v("")}}
F.cm.prototype={
b9:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jO(s.cx,p,m,r,q,o,n,a,l)},
dH:function(){return this.b9(null)},
gL:function(){var s=this.d
return s==null?this.d=new F.hW([],[],[]):s},
gak:function(a){var s=this.a
if(s!=null)s.gZ().I()
return this.e},
dU:function(a){var s,r,q,p,o=this,n=null
if(a.p(0,$.aN())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.p(0,$.bB())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.p(0,$.bA()))return[0,0,1]
else if(a.p(0,$.bC())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.p(0,$.bD())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.p(0,$.cQ())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.p(0,$.cR())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.p(0,$.bE()))return[o.ch]
else if(a.p(0,$.bz())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
b6:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.iW()
p.gL().F(0,new F.i_(o))
p.r=o.a.a1()
if(r){s.T()
o=s.e
if(o!=null)o.aM(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.u()},
v:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.U(C.c.h(q.e),0))
s=q.f
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.u()
n.push(s==null?o:s)
n.push(o)
s=q.y
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.u()
n.push(s==null?o:s)
n.push(V.u(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.a.l(n,", ")
return a+"{"+r+"}"},
u:function(){return this.v("")}}
F.i_.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.N(0,r)}},
$S:7}
F.v.prototype={
I:function(){},
t:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.B("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.T()
return!0},
bG:function(a,b){var s=null,r=F.jO(s,s,a,s,s,b,s,s,0)
this.t(0,r)
return r},
gk:function(a){return this.c.length},
b7:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)s[q].b6()
return!0},
h:function(a){return this.u()},
v:function(a){var s,r,q,p
this.I()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.x)(r),++p)s.push(r[p].v(a))
return C.a.l(s,"\n")},
u:function(){return this.v("")}}
F.hW.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.hX(s,b))
C.a.F(s.d,new F.hY(s,b))},
h:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(""))
return C.a.l(p,"\n")}}
F.hX.prototype={
$1:function(a){if(!J.R(a.a,this.a))this.b.$1(a)},
$S:7}
F.hY.prototype={
$1:function(a){var s=this.a
if(!J.R(a.a,s)&&!J.R(a.b,s))this.b.$1(a)},
$S:7}
F.ei.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(""))
return C.a.l(p,"\n")}}
F.hZ.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)p.push(s[q].v(""))
return C.a.l(p,"\n")}}
O.fG.prototype={
gD:function(){var s=this.r
return s==null?this.r=D.aS():s},
aT:function(a){var s=this.r
return s==null?null:s.R(a)}}
O.hv.prototype={}
X.fV.prototype={
gD:function(){var s=this.x
return s==null?this.x=D.aS():s}}
X.dF.prototype={
gD:function(){var s=this.f
return s==null?this.f=D.aS():s},
ad:function(a){var s=this.f
return s==null?null:s.R(a)},
co:function(){return this.ad(null)},
saw:function(a){var s,r,q=this
if(!J.R(q.b,a)){s=q.b
if(s!=null)s.gD().J(0,q.gbr())
r=q.b
q.b=a
if(a!=null)a.gD().t(0,q.gbr())
q.ad(new D.H("mover",r,q.b))}}}
X.hu.prototype={}
V.af.prototype={
aA:function(a){this.b=new P.fX(C.I)
this.c=null
this.d=[]},
C:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.cw(p,0,p.length)
m=n==null?p:n
m=H.jg(m," ","&nbsp;")
C.H.cc(o,m)
m=o.style
m.color=b
C.a.gaI(l.d).push(o)}},
bV:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.l(b,"\n")
r=p.c
if(r==null)r=p.c=p.aF()
if(r!=null)for(q=new H.k(s),q=new P.b5(r.bf(new H.aF(q,q.gk(q))).a());q.q();)p.aL(q.gB(q))}}
V.d3.prototype={
aL:function(a){var s=this
switch(a.a){case"Class":s.C(a.b,"#551")
break
case"Comment":s.C(a.b,"#777")
break
case"Id":s.C(a.b,"#111")
break
case"Num":s.C(a.b,"#191")
break
case"Reserved":s.C(a.b,"#119")
break
case"String":s.C(a.b,"#171")
break
case"Symbol":s.C(a.b,"#616")
break
case"Type":s.C(a.b,"#B11")
break
case"Whitespace":s.C(a.b,"#111")
break}},
aF:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.hz()
a2.d=a2.i(0,q)
s=a2.i(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
s=a2.i(0,p).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.F("0","9"))
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
a2.i(0,q).l(0,o).a.push(K.F("0","9"))
a2.i(0,o).l(0,o).a.push(K.F("0","9"))
s=a2.i(0,o).l(0,n)
r=new K.m([])
r.n(new H.k("."))
s.a.push(r)
a2.i(0,n).l(0,m).a.push(K.F("0","9"))
a2.i(0,m).l(0,m).a.push(K.F("0","9"))
r=a2.i(0,q).l(0,l)
s=new K.m([])
s.n(new H.k(k))
r.a.push(s)
s=a2.i(0,l).l(0,l)
r=new K.m([])
r.n(new H.k(k))
s.a.push(r)
r=a2.i(0,q).l(0,j)
s=new K.m([])
s.n(new H.k('"'))
r.a.push(s)
s=a2.i(0,j).l(0,i)
r=new K.m([])
r.n(new H.k('"'))
s.a.push(r)
r=a2.i(0,j).l(0,h)
s=new K.m([])
s.n(new H.k("\\"))
r.a.push(s)
s=a2.i(0,h).l(0,j)
r=new K.m([])
r.n(new H.k('"'))
s.a.push(r)
a2.i(0,j).l(0,j).a.push(new K.aA())
r=a2.i(0,q).l(0,g)
s=new K.m([])
s.n(new H.k("'"))
r.a.push(s)
s=a2.i(0,g).l(0,f)
r=new K.m([])
r.n(new H.k("'"))
s.a.push(r)
r=a2.i(0,g).l(0,e)
s=new K.m([])
s.n(new H.k("\\"))
r.a.push(s)
s=a2.i(0,e).l(0,g)
r=new K.m([])
r.n(new H.k("'"))
s.a.push(r)
a2.i(0,g).l(0,g).a.push(new K.aA())
r=a2.i(0,q).l(0,d)
s=new K.m([])
s.n(new H.k("/"))
r.a.push(s)
s=a2.i(0,d).l(0,c)
r=new K.m([])
r.n(new H.k("/"))
s.a.push(r)
r=a2.i(0,c).l(0,b)
s=new K.m([])
s.n(new H.k("\n"))
r.a.push(s)
s=[]
a2.i(0,c).l(0,c).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("\n"))
s.push(r)
r=a2.i(0,d).l(0,a)
s=new K.m([])
s.n(new H.k("*"))
r.a.push(s)
s=a2.i(0,a).l(0,a0)
r=new K.m([])
r.n(new H.k("*"))
s.a.push(r)
r=[]
a2.i(0,a0).l(0,a).a.push(new K.W(r))
s=new K.m([])
s.n(new H.k("*"))
r.push(s)
s=a2.i(0,a0).l(0,b)
r=new K.m([])
r.n(new H.k("/"))
s.a.push(r)
r=a2.i(0,q).l(0,a1)
s=new K.m([])
s.n(new H.k(" \n\t"))
r.a.push(s)
s=a2.i(0,a1).l(0,a1)
r=new K.m([])
r.n(new H.k(" \n\t"))
s.a.push(r)
r=a2.i(0,o)
r.d=r.a.E("Num")
r=a2.i(0,m)
r.d=r.a.E("Num")
r=a2.i(0,l)
r.d=r.a.E("Symbol")
r=a2.i(0,i)
r.d=r.a.E("String")
r=a2.i(0,f)
r.d=r.a.E("String")
r=a2.i(0,b)
r.d=r.a.E(c)
r=a2.i(0,a1)
r.d=r.a.E(a1)
r=a2.i(0,p)
r=r.d=r.a.E(p)
r.a8(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.a8(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.a8(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dc.prototype={
aL:function(a){var s=this
switch(a.a){case"Builtin":s.C(a.b,"#411")
break
case"Comment":s.C(a.b,"#777")
break
case"Id":s.C(a.b,"#111")
break
case"Num":s.C(a.b,"#191")
break
case"Preprocess":s.C(a.b,"#737")
break
case"Reserved":s.C(a.b,"#119")
break
case"Symbol":s.C(a.b,"#611")
break
case"Type":s.C(a.b,"#171")
break
case"Whitespace":s.C(a.b,"#111")
break}},
aF:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.hz()
d.d=d.i(0,q)
s=d.i(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
s=d.i(0,p).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.F("0","9"))
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
d.i(0,q).l(0,o).a.push(K.F("0","9"))
d.i(0,o).l(0,o).a.push(K.F("0","9"))
s=d.i(0,o).l(0,n)
r=new K.m([])
r.n(new H.k("."))
s.a.push(r)
d.i(0,n).l(0,m).a.push(K.F("0","9"))
d.i(0,m).l(0,m).a.push(K.F("0","9"))
r=d.i(0,q).l(0,l)
s=new K.m([])
s.n(new H.k(k))
r.a.push(s)
s=d.i(0,l).l(0,l)
r=new K.m([])
r.n(new H.k(k))
s.a.push(r)
r=d.i(0,q).l(0,j)
s=new K.m([])
s.n(new H.k("/"))
r.a.push(s)
s=d.i(0,j).l(0,i)
r=new K.m([])
r.n(new H.k("/"))
s.a.push(r)
d.i(0,j).l(0,l).a.push(new K.aA())
r=d.i(0,i).l(0,h)
s=new K.m([])
s.n(new H.k("\n"))
r.a.push(s)
s=[]
d.i(0,i).l(0,i).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("\n"))
s.push(r)
r=d.i(0,q).l(0,g)
s=new K.m([])
s.n(new H.k("#"))
r.a.push(s)
s=[]
d.i(0,g).l(0,g).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("\n"))
s.push(r)
r=d.i(0,g).l(0,f)
s=new K.m([])
s.n(new H.k("\n"))
r.a.push(s)
s=d.i(0,q).l(0,e)
r=new K.m([])
r.n(new H.k(" \n\t"))
s.a.push(r)
r=d.i(0,e).l(0,e)
s=new K.m([])
s.n(new H.k(" \n\t"))
r.a.push(s)
s=d.i(0,o)
s.d=s.a.E("Num")
s=d.i(0,m)
s.d=s.a.E("Num")
s=d.i(0,l)
s.d=s.a.E("Symbol")
s=d.i(0,h)
s.d=s.a.E(i)
s=d.i(0,f)
s.d=s.a.E(g)
s=d.i(0,e)
s.d=s.a.E(e)
s=d.i(0,p)
s=s.d=s.a.E(p)
s.a8(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.a8(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.a8(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.de.prototype={
aL:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.C(a.b,"#911")
s.C("=",r)
break
case"Id":s.C(a.b,r)
break
case"Other":s.C(a.b,r)
break
case"Reserved":s.C(a.b,"#119")
break
case"String":s.C(a.b,"#171")
break
case"Symbol":s.C(a.b,"#616")
break}},
aF:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.hz()
j.d=j.i(0,q)
s=j.i(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
s=j.i(0,p).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.F("0","9"))
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
s=j.i(0,p).l(0,o)
r=new K.m([])
r.n(new H.k("="))
s.a.push(r)
s.c=!0
s=j.i(0,q).l(0,n)
r=new K.m([])
r.n(new H.k("</\\-!>="))
s.a.push(r)
r=j.i(0,n).l(0,n)
s=new K.m([])
s.n(new H.k("</\\-!>="))
r.a.push(s)
s=j.i(0,q).l(0,m)
r=new K.m([])
r.n(new H.k('"'))
s.a.push(r)
r=j.i(0,m).l(0,l)
s=new K.m([])
s.n(new H.k('"'))
r.a.push(s)
s=j.i(0,m).l(0,"EscStr")
r=new K.m([])
r.n(new H.k("\\"))
s.a.push(r)
r=j.i(0,"EscStr").l(0,m)
s=new K.m([])
s.n(new H.k('"'))
r.a.push(s)
j.i(0,m).l(0,m).a.push(new K.aA())
j.i(0,q).l(0,k).a.push(new K.aA())
s=[]
j.i(0,k).l(0,k).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k('</\\-!>=_"'))
s.push(r)
s.push(K.F("a","z"))
s.push(K.F("A","Z"))
s=j.i(0,n)
s.d=s.a.E("Symbol")
s=j.i(0,l)
s.d=s.a.E("String")
s=j.i(0,p)
r=s.a.E(p)
s.d=r
r.a8(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.i(0,o)
r.d=r.a.E(o)
r=j.i(0,k)
r.d=r.a.E(k)
return j}}
V.dH.prototype={
bV:function(a,b){this.d=[]
this.C(C.a.l(b,"\n"),"#111")},
aL:function(a){},
aF:function(){return null}}
V.hp.prototype={
as:function(a,b){var s,r,q,p,o
a=C.c.dD(a,0,4)
s=P.j4(C.i,b,C.f,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
q.toString
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.iG()
o.href="#"+s
o.textContent=b
r.appendChild(o).toString
this.a.appendChild(r).toString},
K:function(a){var s,r,q,p,o,n,m=this.dn(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.k(C.a.dT(a)),s=new P.b5(m.bf(new H.aF(s,s.gk(s))).a());s.q();){r=s.gB(s)
switch(r.a){case"Bold":q=l.createElement("div")
q.className="boldPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Italic":q=l.createElement("div")
q.className="italicPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Code":q=l.createElement("div")
q.className="codePar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Link":r=r.b
if(H.ki(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.j4(C.i,r,C.f,!1)
o=l.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=r
k.appendChild(o).toString}break
case"Other":q=l.createElement("div")
q.className="normalPar"
q.textContent=r.b
k.appendChild(q).toString
break}}this.a.appendChild(k).toString},
c9:function(a){var s,r,q,p=new V.d3("dart",[])
p.aA("dart")
s=new V.dc("glsl",[])
s.aA("glsl")
r=new V.de("html",[])
r.aA("html")
q=C.a.dQ([p,s,r],new V.hs(a))
if(q!=null)return q
p=new V.dH("plain",[])
p.aA("plain")
return p},
bF:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.aQ(q,"+")){b2[r]=C.b.bn(q,1)
a8.push(1)
s=!0}else if(C.b.aQ(q,"-")){b2[r]=C.b.bn(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.c9(b0)
p.bV(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.j4(C.i,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.iG()
h.href="#"+l
h.textContent=a9
i.appendChild(h).toString
j.appendChild(i).toString
k.appendChild(j).toString
m.appendChild(k).toString
if(s)for(g=b1,f=g,r=0;e=p.d,r<e.length;++r){q=e[r]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className="codeLineNums codeLineLight"
b=o.createElement("td")
b.className=a6
if(r>=a8.length)return H.d(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.x)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.x)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gH(q);a4.q();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
dn:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.hz()
h.d=h.i(0,q)
s=h.i(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("*"))
s.a.push(r)
s.c=!0
s=[]
h.i(0,p).l(0,p).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("*"))
s.push(r)
r=h.i(0,p).l(0,"BoldEnd")
s=new K.m([])
s.n(new H.k("*"))
r.a.push(s)
r.c=!0
r=h.i(0,q).l(0,o)
s=new K.m([])
s.n(new H.k("_"))
r.a.push(s)
r.c=!0
r=[]
h.i(0,o).l(0,o).a.push(new K.W(r))
s=new K.m([])
s.n(new H.k("_"))
r.push(s)
s=h.i(0,o).l(0,n)
r=new K.m([])
r.n(new H.k("_"))
s.a.push(r)
s.c=!0
s=h.i(0,q).l(0,m)
r=new K.m([])
r.n(new H.k("`"))
s.a.push(r)
s.c=!0
s=[]
h.i(0,m).l(0,m).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("`"))
s.push(r)
r=h.i(0,m).l(0,"CodeEnd")
s=new K.m([])
s.n(new H.k("`"))
r.a.push(s)
r.c=!0
r=h.i(0,q).l(0,l)
s=new K.m([])
s.n(new H.k("["))
r.a.push(s)
r.c=!0
r=h.i(0,l).l(0,k)
s=new K.m([])
s.n(new H.k("|"))
r.a.push(s)
s=h.i(0,l).l(0,j)
r=new K.m([])
r.n(new H.k("]"))
s.a.push(r)
s.c=!0
s=[]
h.i(0,l).l(0,l).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("|]"))
s.push(r)
r=h.i(0,k).l(0,j)
s=new K.m([])
s.n(new H.k("]"))
r.a.push(s)
r.c=!0
r=[]
h.i(0,k).l(0,k).a.push(new K.W(r))
s=new K.m([])
s.n(new H.k("|]"))
r.push(s)
h.i(0,q).l(0,i).a.push(new K.aA())
s=[]
h.i(0,i).l(0,i).a.push(new K.W(s))
r=new K.m([])
r.n(new H.k("*_`["))
s.push(r)
r=h.i(0,"BoldEnd")
r.d=r.a.E(p)
r=h.i(0,n)
r.d=r.a.E(o)
r=h.i(0,"CodeEnd")
r.d=r.a.E(m)
r=h.i(0,j)
r.d=r.a.E("Link")
r=h.i(0,i)
r.d=r.a.E(i)
return this.b=h}}
V.hr.prototype={
$1:function(a){P.jH(C.h,new V.hq(this.a))},
$S:3}
V.hq.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.Y(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.q(-0.01*s)+"px"
q.top=r},
$S:2}
V.hs.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:33};(function aliases(){var s=J.a.prototype
s.ce=s.h
s=J.aU.prototype
s.cg=s.h
s=P.e.prototype
s.cf=s.aO
s=W.y.prototype
s.aR=s.P
s=W.cx.prototype
s.ci=s.a0
s=K.dd.prototype
s.cd=s.a7
s.aS=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"m1","l1",34)
r(P,"ml","ls",6)
r(P,"mm","lt",6)
r(P,"mn","lu",6)
q(P,"k9","mg",2)
r(W,"nR","fM",36)
p(W,"my",4,null,["$4"],["lx"],17,0)
p(W,"mz",4,null,["$4"],["ly"],17,0)
var j
o(j=E.bc.prototype,"gbR",0,0,null,["$1","$0"],["bS","e1"],0,0)
o(j,"gbT",0,0,null,["$1","$0"],["bU","e2"],0,0)
o(j,"gbP",0,0,null,["$1","$0"],["bQ","e0"],0,0)
o(j,"gbN",0,0,null,["$1","$0"],["bO","dY"],0,0)
n(j,"gdW","dX",5)
n(j,"gdZ","e_",5)
o(j=E.e5.prototype,"gbo",0,0,null,["$1","$0"],["bq","bp"],0,0)
m(j,"geb","c_",2)
l(j=X.eh.prototype,"gcS","cT",3)
l(j,"gcG","cH",3)
l(j,"gcM","cN",1)
l(j,"gcW","cX",14)
l(j,"gcU","cV",14)
l(j,"gcZ","d_",1)
l(j,"gd2","d3",1)
l(j,"gcQ","cR",1)
l(j,"gd0","d1",1)
l(j,"gcO","cP",1)
l(j,"gd4","d5",27)
l(j,"gd6","d7",3)
l(j,"gde","df",8)
l(j,"gd9","da",8)
l(j,"gdc","dd",8)
k(V.bq.prototype,"gk","bb",11)
k(V.N.prototype,"gk","bb",11)
o(j=M.d7.prototype,"gab",0,0,null,["$1","$0"],["ac","cl"],0,0)
n(j,"gcI","cJ",5)
n(j,"gcK","cL",5)
o(X.dF.prototype,"gbr",0,0,null,["$1","$0"],["ad","co"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.iN,J.a,J.Z,P.C,P.cq,P.e,H.aF,P.dg,H.bS,H.ef,H.hD,H.he,H.f_,H.aR,P.M,H.h2,H.dp,H.fZ,H.a6,H.eD,P.ii,P.bu,P.b5,P.en,P.dY,P.dZ,P.im,P.cG,P.i9,P.cp,P.z,P.dQ,P.cZ,P.fY,P.ik,P.a_,P.bO,P.dE,P.ck,P.eA,P.fU,P.a4,P.bn,W.fC,W.iI,W.iY,W.bt,W.D,W.cc,W.cx,W.f4,W.bT,W.id,W.fe,K.aA,K.dd,K.hh,K.m,L.dV,L.e6,L.e7,L.hy,O.bJ,O.c7,E.fy,E.bc,E.ba,E.bg,E.i5,E.hi,E.e5,Z.el,Z.i0,Z.bH,Z.bV,Z.ej,D.fA,D.bR,D.V,X.bI,X.dl,X.h0,X.h5,X.be,X.ha,X.hA,X.eh,V.bb,V.fO,V.dr,V.a5,V.bh,V.dJ,V.dL,V.bq,V.N,M.d7,A.fu,A.fv,A.hF,A.hO,F.ai,F.h1,F.hf,F.hn,F.cj,F.bk,F.bl,F.cm,F.v,F.hW,F.ei,F.hZ,O.hv,X.hu,X.dF,V.af,V.hp])
q(J.a,[J.dh,J.c_,J.aU,J.ab,J.bd,J.aD,H.c9,W.b,W.fs,W.cY,W.ah,W.A,W.es,W.a3,W.fF,W.fH,W.et,W.bN,W.ev,W.fI,W.f,W.eB,W.ak,W.fW,W.eG,W.h4,W.h7,W.eK,W.eL,W.an,W.eM,W.eO,W.ap,W.eS,W.eU,W.aq,W.eV,W.ar,W.f0,W.a7,W.f6,W.hx,W.as,W.f8,W.hB,W.hT,W.ff,W.fh,W.fj,W.fl,W.fn,P.aW,P.eI,P.b_,P.eQ,P.hg,P.f1,P.b2,P.fa,P.fw,P.ep,P.ch,P.eY])
q(J.aU,[J.dG,J.b3,J.al])
r(J.dj,J.ab)
q(J.bd,[J.bZ,J.di])
q(P.C,[H.dm,P.ea,H.dk,H.ee,H.dO,H.ey,P.cV,P.dB,P.a9,P.eg,P.ed,P.bm,P.d_,P.d2])
r(P.c2,P.cq)
q(P.c2,[H.bp,W.eq,W.S,P.da])
r(H.k,H.bp)
q(P.e,[H.h,H.aX,H.b4,P.bY])
q(H.h,[H.c3,H.aE])
r(H.bP,H.aX)
q(P.dg,[H.c5,H.em])
r(H.c6,H.c3)
r(H.cd,P.ea)
q(H.aR,[H.e2,H.h_,H.iA,H.iB,H.iC,P.i2,P.i1,P.i3,P.i4,P.ij,P.iu,P.ib,P.ic,P.h6,P.fJ,P.fK,W.fL,W.h8,W.h9,W.hm,W.ht,W.i6,W.hd,W.hc,W.ie,W.ig,W.ih,W.il,P.ir,P.iv,P.fS,P.fT,P.fx,E.hj,E.hk,E.hl,E.hw,D.fQ,D.fR,F.io,F.ho,F.i_,F.hX,F.hY,V.hr,V.hq,V.hs])
q(H.e2,[H.dW,H.b9])
r(P.c4,P.M)
q(P.c4,[H.am,W.eo])
r(H.bf,H.c9)
q(H.bf,[H.cs,H.cu])
r(H.ct,H.cs)
r(H.aZ,H.ct)
r(H.cv,H.cu)
r(H.c8,H.cv)
q(H.c8,[H.dv,H.dw,H.dx,H.dy,H.dz,H.ca,H.dA])
r(H.cD,H.ey)
r(P.cA,P.bY)
r(P.ia,P.im)
r(P.cw,P.cG)
r(P.co,P.cw)
r(P.d1,P.dZ)
r(P.fN,P.cZ)
q(P.d1,[P.fX,P.hV])
r(P.hU,P.fN)
q(P.a9,[P.cg,P.df])
q(W.b,[W.n,W.d9,W.ac,W.cy,W.ad,W.a1,W.cB,W.ek,W.br,P.cX,P.aB])
q(W.n,[W.y,W.aa,W.bs])
q(W.y,[W.j,P.i])
q(W.j,[W.cT,W.cU,W.b8,W.aP,W.aQ,W.bL,W.db,W.dP,W.cl,W.e0,W.e1,W.bo])
r(W.fB,W.ah)
r(W.bK,W.es)
q(W.a3,[W.fD,W.fE])
r(W.eu,W.et)
r(W.bM,W.eu)
r(W.ew,W.ev)
r(W.d6,W.ew)
r(W.aj,W.cY)
r(W.eC,W.eB)
r(W.d8,W.eC)
r(W.eH,W.eG)
r(W.aT,W.eH)
r(W.au,W.f)
q(W.au,[W.aV,W.a0,W.b1])
r(W.ds,W.eK)
r(W.dt,W.eL)
r(W.eN,W.eM)
r(W.du,W.eN)
r(W.eP,W.eO)
r(W.cb,W.eP)
r(W.eT,W.eS)
r(W.dI,W.eT)
r(W.dN,W.eU)
r(W.cz,W.cy)
r(W.dS,W.cz)
r(W.eW,W.eV)
r(W.dT,W.eW)
r(W.dX,W.f0)
r(W.f7,W.f6)
r(W.e3,W.f7)
r(W.cC,W.cB)
r(W.e4,W.cC)
r(W.f9,W.f8)
r(W.e8,W.f9)
r(W.aI,W.a0)
r(W.fg,W.ff)
r(W.er,W.fg)
r(W.cn,W.bN)
r(W.fi,W.fh)
r(W.eE,W.fi)
r(W.fk,W.fj)
r(W.cr,W.fk)
r(W.fm,W.fl)
r(W.eX,W.fm)
r(W.fo,W.fn)
r(W.f3,W.fo)
r(W.ex,W.eo)
r(W.ez,P.dY)
r(W.f5,W.cx)
r(P.eJ,P.eI)
r(P.dn,P.eJ)
r(P.eR,P.eQ)
r(P.dC,P.eR)
r(P.bj,P.i)
r(P.f2,P.f1)
r(P.e_,P.f2)
r(P.fb,P.fa)
r(P.e9,P.fb)
r(P.cW,P.ep)
r(P.dD,P.aB)
r(P.eZ,P.eY)
r(P.dU,P.eZ)
q(K.dd,[K.W,L.hC])
q(E.fy,[Z.bG,A.ci])
q(D.V,[D.bW,D.bX,D.H])
r(U.hb,D.fA)
q(U.hb,[U.d0,U.dM])
r(A.d5,A.ci)
q(A.hF,[A.hG,A.hJ,A.hL,A.hN,A.hH,A.eb,A.hI,A.hK,A.hM,A.hP,A.hQ,A.ec,A.hR,A.hS])
r(O.fG,O.hv)
r(X.fV,X.hu)
q(V.af,[V.d3,V.dc,V.de,V.dH])
s(H.bp,H.ef)
s(H.cs,P.z)
s(H.ct,H.bS)
s(H.cu,P.z)
s(H.cv,H.bS)
s(P.cq,P.z)
s(P.cG,P.dQ)
s(W.es,W.fC)
s(W.et,P.z)
s(W.eu,W.D)
s(W.ev,P.z)
s(W.ew,W.D)
s(W.eB,P.z)
s(W.eC,W.D)
s(W.eG,P.z)
s(W.eH,W.D)
s(W.eK,P.M)
s(W.eL,P.M)
s(W.eM,P.z)
s(W.eN,W.D)
s(W.eO,P.z)
s(W.eP,W.D)
s(W.eS,P.z)
s(W.eT,W.D)
s(W.eU,P.M)
s(W.cy,P.z)
s(W.cz,W.D)
s(W.eV,P.z)
s(W.eW,W.D)
s(W.f0,P.M)
s(W.f6,P.z)
s(W.f7,W.D)
s(W.cB,P.z)
s(W.cC,W.D)
s(W.f8,P.z)
s(W.f9,W.D)
s(W.ff,P.z)
s(W.fg,W.D)
s(W.fh,P.z)
s(W.fi,W.D)
s(W.fj,P.z)
s(W.fk,W.D)
s(W.fl,P.z)
s(W.fm,W.D)
s(W.fn,P.z)
s(W.fo,W.D)
s(P.eI,P.z)
s(P.eJ,W.D)
s(P.eQ,P.z)
s(P.eR,W.D)
s(P.f1,P.z)
s(P.f2,W.D)
s(P.fa,P.z)
s(P.fb,W.D)
s(P.ep,P.M)
s(P.eY,P.z)
s(P.eZ,W.D)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",P:"double",Q:"num",r:"String",Y:"bool",a4:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([V?])","~(a0)","~()","~(f)","~(r,@)","~(o,e<bc>)","~(~())","~(ai)","~(b1)","~(V)","a4()","P()","r(o)","Y(n)","~(aV)","Y(ao)","Y(r)","Y(y,r,r,bt)","~(~(V))","y(n)","@(r)","~(@)","~(n,n?)","~(Q)","r(r)","a4(@)","@(@)","~(aI)","~(r,r)","~(J?,J?)","~(cm,P,P)","bG(o)","@(@,r)","Y(af?)","o(@,@)","a4(~())","r(b)","~(@,@)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.lP(v.typeUniverse,JSON.parse('{"dG":"aU","b3":"aU","al":"aU","mQ":"f","n1":"f","mS":"aB","mR":"b","n7":"b","na":"b","mP":"i","n2":"i","mT":"j","n5":"j","n3":"n","n0":"n","ny":"a1","mX":"au","mU":"aa","nb":"aa","n9":"a0","n4":"aT","mY":"A","mZ":"a7","n6":"aZ","dh":{"Y":[]},"ab":{"l":["1"],"h":["1"],"e":["1"],"p":["1"]},"dj":{"l":["1"],"h":["1"],"e":["1"],"p":["1"]},"bd":{"P":[],"Q":[]},"bZ":{"P":[],"o":[],"Q":[]},"di":{"P":[],"Q":[]},"aD":{"r":[],"p":["@"]},"dm":{"C":[]},"k":{"l":["o"],"h":["o"],"e":["o"]},"h":{"e":["1"]},"c3":{"h":["1"],"e":["1"]},"aX":{"e":["2"]},"bP":{"h":["2"],"e":["2"]},"c6":{"h":["2"],"e":["2"]},"b4":{"e":["1"]},"bp":{"l":["1"],"h":["1"],"e":["1"]},"cd":{"C":[]},"dk":{"C":[]},"ee":{"C":[]},"aR":{"bU":[]},"e2":{"bU":[]},"dW":{"bU":[]},"b9":{"bU":[]},"dO":{"C":[]},"am":{"L":["1","2"],"M.V":"2"},"aE":{"h":["1"],"e":["1"]},"bf":{"t":["1"],"p":["1"]},"aZ":{"t":["P"],"l":["P"],"h":["P"],"p":["P"],"e":["P"]},"c8":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dv":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dw":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dx":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dy":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dz":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"ca":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dA":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"ey":{"C":[]},"cD":{"C":[]},"cA":{"e":["1"]},"co":{"h":["1"],"e":["1"]},"bY":{"e":["1"]},"c2":{"l":["1"],"h":["1"],"e":["1"]},"c4":{"L":["1","2"]},"M":{"L":["1","2"]},"cw":{"h":["1"],"e":["1"]},"P":{"Q":[]},"o":{"Q":[]},"l":{"h":["1"],"e":["1"]},"cV":{"C":[]},"ea":{"C":[]},"dB":{"C":[]},"a9":{"C":[]},"cg":{"C":[]},"df":{"C":[]},"eg":{"C":[]},"ed":{"C":[]},"bm":{"C":[]},"d_":{"C":[]},"dE":{"C":[]},"ck":{"C":[]},"d2":{"C":[]},"y":{"n":[],"b":[]},"aV":{"f":[]},"a0":{"f":[]},"n":{"b":[]},"ac":{"b":[]},"ad":{"b":[]},"a1":{"b":[]},"b1":{"f":[]},"au":{"f":[]},"aI":{"a0":[],"f":[]},"bt":{"ao":[]},"j":{"y":[],"n":[],"b":[]},"cT":{"y":[],"n":[],"b":[]},"cU":{"y":[],"n":[],"b":[]},"b8":{"y":[],"n":[],"b":[]},"aP":{"y":[],"n":[],"b":[]},"aQ":{"y":[],"n":[],"b":[]},"aa":{"n":[],"b":[]},"bL":{"y":[],"n":[],"b":[]},"bM":{"l":["aH<Q>"],"t":["aH<Q>"],"h":["aH<Q>"],"e":["aH<Q>"],"p":["aH<Q>"]},"bN":{"aH":["Q"]},"d6":{"l":["r"],"t":["r"],"h":["r"],"e":["r"],"p":["r"]},"eq":{"l":["y"],"h":["y"],"e":["y"]},"d8":{"l":["aj"],"t":["aj"],"h":["aj"],"e":["aj"],"p":["aj"]},"d9":{"b":[]},"db":{"y":[],"n":[],"b":[]},"aT":{"l":["n"],"t":["n"],"h":["n"],"e":["n"],"p":["n"]},"ds":{"L":["r","@"],"M.V":"@"},"dt":{"L":["r","@"],"M.V":"@"},"du":{"l":["an"],"t":["an"],"h":["an"],"e":["an"],"p":["an"]},"S":{"l":["n"],"h":["n"],"e":["n"]},"cb":{"l":["n"],"t":["n"],"h":["n"],"e":["n"],"p":["n"]},"dI":{"l":["ap"],"t":["ap"],"h":["ap"],"e":["ap"],"p":["ap"]},"dN":{"L":["r","@"],"M.V":"@"},"dP":{"y":[],"n":[],"b":[]},"dS":{"l":["ac"],"t":["ac"],"b":[],"h":["ac"],"e":["ac"],"p":["ac"]},"dT":{"l":["aq"],"t":["aq"],"h":["aq"],"e":["aq"],"p":["aq"]},"dX":{"L":["r","r"],"M.V":"r"},"cl":{"y":[],"n":[],"b":[]},"e0":{"y":[],"n":[],"b":[]},"e1":{"y":[],"n":[],"b":[]},"bo":{"y":[],"n":[],"b":[]},"e3":{"l":["a1"],"t":["a1"],"h":["a1"],"e":["a1"],"p":["a1"]},"e4":{"l":["ad"],"t":["ad"],"b":[],"h":["ad"],"e":["ad"],"p":["ad"]},"e8":{"l":["as"],"t":["as"],"h":["as"],"e":["as"],"p":["as"]},"ek":{"b":[]},"br":{"b":[]},"bs":{"n":[],"b":[]},"er":{"l":["A"],"t":["A"],"h":["A"],"e":["A"],"p":["A"]},"cn":{"aH":["Q"]},"eE":{"l":["ak?"],"t":["ak?"],"h":["ak?"],"e":["ak?"],"p":["ak?"]},"cr":{"l":["n"],"t":["n"],"h":["n"],"e":["n"],"p":["n"]},"eX":{"l":["ar"],"t":["ar"],"h":["ar"],"e":["ar"],"p":["ar"]},"f3":{"l":["a7"],"t":["a7"],"h":["a7"],"e":["a7"],"p":["a7"]},"eo":{"L":["r","r"]},"ex":{"L":["r","r"],"M.V":"r"},"cc":{"ao":[]},"cx":{"ao":[]},"f5":{"ao":[]},"f4":{"ao":[]},"da":{"l":["y"],"h":["y"],"e":["y"]},"dn":{"l":["aW"],"h":["aW"],"e":["aW"]},"dC":{"l":["b_"],"h":["b_"],"e":["b_"]},"bj":{"i":[],"y":[],"n":[],"b":[]},"e_":{"l":["r"],"h":["r"],"e":["r"]},"i":{"y":[],"n":[],"b":[]},"e9":{"l":["b2"],"h":["b2"],"e":["b2"]},"cW":{"L":["r","@"],"M.V":"@"},"cX":{"b":[]},"aB":{"b":[]},"dD":{"b":[]},"dU":{"l":["L<@,@>"],"h":["L<@,@>"],"e":["L<@,@>"]},"bJ":{"e":["1"]},"bW":{"V":[]},"bX":{"V":[]},"H":{"V":[]},"d5":{"ci":[]},"d3":{"af":[]},"dc":{"af":[]},"de":{"af":[]},"dH":{"af":[]},"aH":{"nC":["1"]}}'))
H.lO(v.typeUniverse,JSON.parse('{"ab":1,"dj":1,"Z":1,"h":1,"c3":1,"aF":1,"aX":2,"bP":2,"c5":2,"c6":2,"b4":1,"em":1,"bS":1,"ef":1,"bp":1,"aE":1,"dp":1,"bf":1,"b5":1,"cA":1,"dY":1,"dZ":2,"cp":1,"bY":1,"c2":1,"z":1,"c4":2,"M":2,"dQ":1,"cw":1,"cq":1,"cG":1,"cZ":2,"d1":2,"e":1,"l":1,"dg":1,"ez":1,"D":1,"bT":1,"bJ":1,"bW":1,"bX":1,"H":1}'))
var u={d:"Must initialize the shader prior to getting the program."}
var t=(function rtii(){var s=H.mu
return{y:s("b8"),t:s("aP"),D:s("bH"),E:s("aQ"),O:s("h<@>"),h:s("y"),C:s("C"),B:s("f"),Z:s("bU"),b:s("ab<@>"),e:s("p<@>"),T:s("c_"),g:s("al"),p:s("t<@>"),I:s("am<o,Y>"),j:s("l<@>"),f:s("L<@,@>"),P:s("a4"),K:s("J"),q:s("aH<Q>"),Y:s("bj"),k:s("ci"),N:s("r"),u:s("i"),G:s("bo"),J:s("e6"),n:s("eb"),a:s("ec"),o:s("b3"),x:s("bs"),v:s("Y"),i:s("P"),z:s("@"),S:s("o"),A:s("0&*"),_:s("J*"),Q:s("jt<a4>?"),X:s("J?"),r:s("ch?"),R:s("dV?"),F:s("e7?"),H:s("Q")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.aP.prototype
C.G=W.aQ.prototype
C.H=W.bL.prototype
C.J=J.a.prototype
C.a=J.ab.prototype
C.c=J.bZ.prototype
C.K=J.c_.prototype
C.d=J.bd.prototype
C.b=J.aD.prototype
C.L=J.al.prototype
C.r=J.dG.prototype
C.t=W.cl.prototype
C.k=J.b3.prototype
C.u=W.aI.prototype
C.v=W.br.prototype
C.w=new E.ba("Browser.chrome")
C.m=new E.ba("Browser.firefox")
C.n=new E.ba("Browser.edge")
C.x=new E.ba("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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

C.E=new P.dE()
C.f=new P.hU()
C.F=new P.hV()
C.e=new P.ia()
C.h=new P.bO(0)
C.I=new P.fY("element",!1,!1,!1)
C.M=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.N=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.O=s([])
C.i=s([0,0,65498,45055,65535,34815,65534,18431])
C.q=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.P=new E.bg("OperatingSystem.windows")
C.Q=new E.bg("OperatingSystem.mac")
C.R=new E.bg("OperatingSystem.linux")
C.S=new E.bg("OperatingSystem.other")
C.T=new P.bu(null,2)})();(function staticFields(){$.i7=null
$.ae=0
$.bF=null
$.jl=null
$.kb=null
$.k8=null
$.kg=null
$.iw=null
$.iD=null
$.jd=null
$.bv=null
$.cJ=null
$.cK=null
$.j8=!1
$.av=C.e
$.X=[]
$.aC=null
$.iH=null
$.jr=null
$.jq=null
$.eF=P.c0(t.N,t.Z)
$.js=null
$.jw=null
$.b0=null
$.jx=null
$.jA=null
$.jN=null
$.jM=null
$.jL=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"n_","km",function(){return H.mx("_$dart_dartClosure")})
s($,"nc","ko",function(){return H.at(H.hE({
toString:function(){return"$receiver$"}}))})
s($,"nd","kp",function(){return H.at(H.hE({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ne","kq",function(){return H.at(H.hE(null))})
s($,"nf","kr",function(){return H.at(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ni","ku",function(){return H.at(H.hE(void 0))})
s($,"nj","kv",function(){return H.at(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"nh","kt",function(){return H.at(H.jI(null))})
s($,"ng","ks",function(){return H.at(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"nl","kx",function(){return H.at(H.jI(void 0))})
s($,"nk","kw",function(){return H.at(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"nz","ji",function(){return P.lr()})
s($,"nD","kC",function(){return P.lh("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nA","kB",function(){return P.ju(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"ns","kA",function(){return Z.a8(0)})
s($,"nm","ky",function(){return Z.a8(511)})
s($,"nu","aN",function(){return Z.a8(1)})
s($,"nt","bB",function(){return Z.a8(2)})
s($,"no","bA",function(){return Z.a8(4)})
s($,"nv","bC",function(){return Z.a8(8)})
s($,"nw","bD",function(){return Z.a8(16)})
s($,"np","cQ",function(){return Z.a8(32)})
s($,"nq","cR",function(){return Z.a8(64)})
s($,"nr","kz",function(){return Z.a8(96)})
s($,"nx","bE",function(){return Z.a8(128)})
s($,"nn","bz",function(){return Z.a8(256)})
s($,"mW","kl",function(){return new V.fO()})
r($,"mV","G",function(){return $.kl()})
r($,"n8","kn",function(){var q,p,o,n,m,l,k=$.jx
if(k==null)k=$.jx=V.l6(0,0,0)
q=$.jM
if(q==null)q=$.jM=V.jK(0,1,0)
p=$.jL
o=(p==null?$.jL=V.jK(0,0,-1):p).a1()
n=q.ba(o).a1()
m=o.ba(n)
l=V.lq(k)
return V.aY(n.a,m.a,o.a,n.aP(0).au(l),n.b,m.b,o.b,m.aP(0).au(l),n.c,m.c,o.c,o.aP(0).au(l),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c9,ArrayBufferView:H.c9,Float32Array:H.aZ,Float64Array:H.aZ,Int16Array:H.dv,Int32Array:H.dw,Int8Array:H.dx,Uint16Array:H.dy,Uint32Array:H.dz,Uint8ClampedArray:H.ca,CanvasPixelArray:H.ca,Uint8Array:H.dA,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,AccessibleNodeList:W.fs,HTMLAnchorElement:W.cT,HTMLAreaElement:W.cU,HTMLBaseElement:W.b8,Blob:W.cY,HTMLBodyElement:W.aP,HTMLCanvasElement:W.aQ,CDATASection:W.aa,CharacterData:W.aa,Comment:W.aa,ProcessingInstruction:W.aa,Text:W.aa,CSSPerspective:W.fB,CSSCharsetRule:W.A,CSSConditionRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bK,MSStyleCSSProperties:W.bK,CSS2Properties:W.bK,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ah,CSSRotation:W.ah,CSSScale:W.ah,CSSSkew:W.ah,CSSTranslation:W.ah,CSSTransformComponent:W.ah,CSSTransformValue:W.fD,CSSUnparsedValue:W.fE,DataTransferItemList:W.fF,HTMLDivElement:W.bL,DOMException:W.fH,ClientRectList:W.bM,DOMRectList:W.bM,DOMRectReadOnly:W.bN,DOMStringList:W.d6,DOMTokenList:W.fI,Element:W.y,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aj,FileList:W.d8,FileWriter:W.d9,HTMLFormElement:W.db,Gamepad:W.ak,History:W.fW,HTMLCollection:W.aT,HTMLFormControlsCollection:W.aT,HTMLOptionsCollection:W.aT,KeyboardEvent:W.aV,Location:W.h4,MediaList:W.h7,MIDIInputMap:W.ds,MIDIOutputMap:W.dt,MimeType:W.an,MimeTypeArray:W.du,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,Document:W.n,DocumentFragment:W.n,HTMLDocument:W.n,ShadowRoot:W.n,XMLDocument:W.n,DocumentType:W.n,Node:W.n,NodeList:W.cb,RadioNodeList:W.cb,Plugin:W.ap,PluginArray:W.dI,RTCStatsReport:W.dN,HTMLSelectElement:W.dP,SourceBuffer:W.ac,SourceBufferList:W.dS,SpeechGrammar:W.aq,SpeechGrammarList:W.dT,SpeechRecognitionResult:W.ar,Storage:W.dX,CSSStyleSheet:W.a7,StyleSheet:W.a7,HTMLTableElement:W.cl,HTMLTableRowElement:W.e0,HTMLTableSectionElement:W.e1,HTMLTemplateElement:W.bo,TextTrack:W.ad,TextTrackCue:W.a1,VTTCue:W.a1,TextTrackCueList:W.e3,TextTrackList:W.e4,TimeRanges:W.hx,Touch:W.as,TouchEvent:W.b1,TouchList:W.e8,TrackDefaultList:W.hB,CompositionEvent:W.au,FocusEvent:W.au,TextEvent:W.au,UIEvent:W.au,URL:W.hT,VideoTrackList:W.ek,WheelEvent:W.aI,Window:W.br,DOMWindow:W.br,Attr:W.bs,CSSRuleList:W.er,ClientRect:W.cn,DOMRect:W.cn,GamepadList:W.eE,NamedNodeMap:W.cr,MozNamedAttrMap:W.cr,SpeechRecognitionResultList:W.eX,StyleSheetList:W.f3,SVGLength:P.aW,SVGLengthList:P.dn,SVGNumber:P.b_,SVGNumberList:P.dC,SVGPointList:P.hg,SVGScriptElement:P.bj,SVGStringList:P.e_,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.b2,SVGTransformList:P.e9,AudioBuffer:P.fw,AudioParamMap:P.cW,AudioTrackList:P.cX,AudioContext:P.aB,webkitAudioContext:P.aB,BaseAudioContext:P.aB,OfflineAudioContext:P.dD,WebGL2RenderingContext:P.ch,SQLResultSetRowList:P.dU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.aZ.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=F.mH
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
