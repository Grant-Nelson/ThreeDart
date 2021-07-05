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
a[c]=function(){a[c]=function(){H.ob(b)}
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
if(a[b]!==s)H.oc(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.k7(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jN:function jN(){},
is:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mr:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nO:function(a,b,c){return a},
m8:function(a,b){if(t.V.b(a))return new H.ca(a,b)
return new H.bi(a,b)},
hE:function(){return new P.bM("No element")},
m1:function(){return new P.bM("Too many elements")},
mq:function(a,b){H.ei(a,0,J.b6(a)-1,b)},
ei:function(a,b,c,d){if(c-b<=32)H.mp(a,b,c,d)
else H.mo(a,b,c,d)},
mp:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.de(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ac()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mo:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.V(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.V(a4+a5,2),f=g-j,e=g+j,d=J.de(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ac()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.Q(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
q=m
r=l
break}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=q+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.ei(a3,a4,r-2,a6)
H.ei(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.Q(a6.$2(d.h(a3,r),b),0);)++r
for(;J.Q(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)}q=m
break}}H.ei(a3,r,q,a6)}else H.ei(a3,r,q,a6)},
dM:function dM(a){this.a=a},
o:function o(a){this.a=a},
j:function j(){},
cm:function cm(){},
aU:function aU(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bi:function bi(a,b){this.a=a
this.b=b},
ca:function ca(a,b){this.a=a
this.b=b},
cp:function cp(a,b){this.a=null
this.b=a
this.c=b},
cq:function cq(a,b){this.a=a
this.b=b},
bs:function bs(a,b){this.a=a
this.b=b},
eW:function eW(a,b){this.a=a
this.b=b},
cc:function cc(){},
eQ:function eQ(){},
bO:function bO(){},
ln:function(a){var s,r=H.lm(a)
if(r!=null)return r
s="minified:"+a
return s},
o2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
u:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.di(a)
return s},
cA:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cB:function(a){return H.ma(a)},
ma:function(a){var s,r,q,p
if(a instanceof P.M)return H.ad(H.bZ(a),null)
if(J.dd(a)===C.L||t.o.b(a)){s=C.o(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ad(H.bZ(a),null)},
kx:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mj:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.jo(q))throw H.c(H.js(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bb(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.js(q))}return H.kx(p)},
mi:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jo(q))throw H.c(H.js(q))
if(q<0)throw H.c(H.js(q))
if(q>65535)return H.mj(a)}return H.kx(a)},
jP:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bb(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aV(a,0,1114111,null,null))},
bK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mh:function(a){var s=H.bK(a).getFullYear()+0
return s},
mf:function(a){var s=H.bK(a).getMonth()+1
return s},
mb:function(a){var s=H.bK(a).getDate()+0
return s},
mc:function(a){var s=H.bK(a).getHours()+0
return s},
me:function(a){var s=H.bK(a).getMinutes()+0
return s},
mg:function(a){var s=H.bK(a).getSeconds()+0
return s},
md:function(a){var s=H.bK(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.b6(a)
throw H.c(H.bX(a,b))},
bX:function(a,b){var s,r="index"
if(!H.jo(b))return new P.aj(!0,b,r,null)
s=J.b6(a)
if(b<0||b>=s)return P.I(b,a,r,null,s)
return P.eb(b,r)},
nR:function(a,b,c){if(a>c)return P.aV(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aV(b,a,c,"end",null)
return new P.aj(!0,b,"end",null)},
js:function(a){return new P.aj(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.e2()
s=new Error()
s.dartException=a
r=H.od
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
od:function(){return J.di(this.dartException)},
f:function(a){throw H.c(a)},
q:function(a){throw H.c(P.au(a))},
aH:function(a){var s,r,q,p,o,n
a=H.lk(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iD(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iE:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kI:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jO:function(a,b){var s=b==null,r=s?null:b.method
return new H.dK(a,r,s?null:b.receiver)},
aL:function(a){if(a==null)return new H.i8(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bu(a,a.dartException)
return H.nK(a)},
bu:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nK:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bb(r,16)&8191)===10)switch(q){case 438:return H.bu(a,H.jO(H.u(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.u(s)+" (Error "+q+")"
return H.bu(a,new H.cz(p,e))}}if(a instanceof TypeError){o=$.lr()
n=$.ls()
m=$.lt()
l=$.lu()
k=$.lx()
j=$.ly()
i=$.lw()
$.lv()
h=$.lA()
g=$.lz()
f=o.ab(s)
if(f!=null)return H.bu(a,H.jO(s,f))
else{f=n.ab(s)
if(f!=null){f.method="call"
return H.bu(a,H.jO(s,f))}else{f=m.ab(s)
if(f==null){f=l.ab(s)
if(f==null){f=k.ab(s)
if(f==null){f=j.ab(s)
if(f==null){f=i.ab(s)
if(f==null){f=l.ab(s)
if(f==null){f=h.ab(s)
if(f==null){f=g.ab(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bu(a,new H.cz(s,f==null?e:f.method))}}return H.bu(a,new H.eP(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cF()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bu(a,new P.aj(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cF()
return a},
k8:function(a){var s
if(a==null)return new H.fB(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fB(a)},
nT:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
o1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.e("Unsupported number of arguments for wrapped closure"))},
bW:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o1)
a.$identity=s
return s},
lV:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.en().constructor.prototype):Object.create(new H.by(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.as
if(typeof r!=="number")return r.S()
$.as=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kl(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lR(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kl(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lR:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lg,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lP:H.lO
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lS:function(a,b,c,d){var s=H.kj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kl:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lU(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lS(r,!p,s,b)
if(r===0){p=$.as
if(typeof p!=="number")return p.S()
$.as=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c0
return new Function(p+(o==null?$.c0=H.ha("self"):o)+";return "+n+"."+H.u(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.as
if(typeof p!=="number")return p.S()
$.as=p+1
m+=p
p="return function("+m+"){return this."
o=$.c0
return new Function(p+(o==null?$.c0=H.ha("self"):o)+"."+H.u(s)+"("+m+");}")()},
lT:function(a,b,c,d){var s=H.kj,r=H.lQ
switch(b?-1:a){case 0:throw H.c(new H.ee("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lU:function(a,b){var s,r,q,p,o,n,m,l=$.c0
if(l==null)l=$.c0=H.ha("self")
s=$.ki
if(s==null)s=$.ki=H.ha("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lT(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.u(r)+"(this."+s+");"
n=$.as
if(typeof n!=="number")return n.S()
$.as=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.u(r)+"(this."+s+", "+m+");"
n=$.as
if(typeof n!=="number")return n.S()
$.as=n+1
return new Function(o+n+"}")()},
k7:function(a,b,c,d,e,f,g){return H.lV(a,b,c,d,!!e,!!f,g)},
lO:function(a,b){return H.fP(v.typeUniverse,H.bZ(a.a),b)},
lP:function(a,b){return H.fP(v.typeUniverse,H.bZ(a.c),b)},
kj:function(a){return a.a},
lQ:function(a){return a.c},
ha:function(a){var s,r,q,p=new H.by("self","target","receiver","name"),o=J.jM(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.kh("Field name "+a+" not found."))},
ob:function(a){throw H.c(new P.dt(a))},
nW:function(a){return v.getIsolateTag(a)},
oc:function(a){return H.f(new H.dM(a))},
pg:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o4:function(a){var s,r,q,p,o,n=$.lf.$1(a),m=$.jv[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jB[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lb.$2(a,n)
if(q!=null){m=$.jv[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jB[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jD(s)
$.jv[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jB[n]=s
return s}if(p==="-"){o=H.jD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.li(a,s)
if(p==="*")throw H.c(P.kJ(n))
if(v.leafTags[n]===true){o=H.jD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.li(a,s)},
li:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ka(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jD:function(a){return J.ka(a,!1,null,!!a.$iw)},
o6:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jD(s)
else return J.ka(s,c,null,null)},
o_:function(){if(!0===$.k9)return
$.k9=!0
H.o0()},
o0:function(){var s,r,q,p,o,n,m,l
$.jv=Object.create(null)
$.jB=Object.create(null)
H.nZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lj.$1(o)
if(n!=null){m=H.o6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nZ:function(){var s,r,q,p,o,n,m=C.A()
m=H.bV(C.B,H.bV(C.C,H.bV(C.p,H.bV(C.p,H.bV(C.D,H.bV(C.E,H.bV(C.F(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lf=new H.jy(p)
$.lb=new H.jz(o)
$.lj=new H.jA(n)},
bV:function(a,b){return a(b)||b},
m5:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hy("Illegal RegExp pattern ("+String(n)+")",a))},
ll:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nS:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kc:function(a,b,c){var s=H.o9(a,b,c)
return s},
o9:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lk(b),'g'),H.nS(c))},
iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cz:function cz(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
i8:function i8(a){this.a=a},
fB:function fB(a){this.a=a
this.b=null},
ba:function ba(){},
eu:function eu(){},
en:function en(){},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a){this.a=a},
S:function S(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hG:function hG(a){this.a=a},
hJ:function hJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aT:function aT(a){this.a=a},
dO:function dO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
hF:function hF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d8:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.de(a)
r=s.gl(a)
q=P.dP(r,null,!1)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bX(b,a))},
mZ:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nR(a,b,c))
return b},
cv:function cv(){},
bI:function bI(){},
bj:function bj(){},
cu:function cu(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
cw:function cw(){},
e1:function e1(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
kC:function(a,b){var s=b.c
return s==null?b.c=H.k0(a,b.z,!0):s},
kB:function(a,b){var s=b.c
return s==null?b.c=H.d5(a,"kq",[b.z]):s},
kD:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kD(a.z)
return s===11||s===12},
mm:function(a){return a.cy},
nU:function(a){return H.k1(v.typeUniverse,a,!1)},
b_:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b_(a,s,a0,a1)
if(r===s)return b
return H.l_(a,r,!0)
case 7:s=b.z
r=H.b_(a,s,a0,a1)
if(r===s)return b
return H.k0(a,r,!0)
case 8:s=b.z
r=H.b_(a,s,a0,a1)
if(r===s)return b
return H.kZ(a,r,!0)
case 9:q=b.Q
p=H.dc(a,q,a0,a1)
if(p===q)return b
return H.d5(a,b.z,p)
case 10:o=b.z
n=H.b_(a,o,a0,a1)
m=b.Q
l=H.dc(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jZ(a,n,l)
case 11:k=b.z
j=H.b_(a,k,a0,a1)
i=b.Q
h=H.nH(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kY(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dc(a,g,a0,a1)
o=b.z
n=H.b_(a,o,a0,a1)
if(f===g&&n===o)return b
return H.k_(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.h4("Attempted to substitute unexpected RTI kind "+c))}},
dc:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b_(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nI:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b_(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nH:function(a,b,c,d){var s,r=b.a,q=H.dc(a,r,c,d),p=b.b,o=H.dc(a,p,c,d),n=b.c,m=H.nI(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fd()
s.a=q
s.b=o
s.c=m
return s},
pi:function(a,b){a[v.arrayRti]=b
return a},
nP:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lg(s)
return a.$S()}return null},
lh:function(a,b){var s
if(H.kD(b))if(a instanceof H.ba){s=H.nP(a)
if(s!=null)return s}return H.bZ(a)},
bZ:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.k2(a)}if(Array.isArray(a))return H.l3(a)
return H.k2(J.dd(a))},
l3:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
W:function(a){var s=a.$ti
return s!=null?s:H.k2(a)},
k2:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n5(a,s)},
n5:function(a,b){var s=a instanceof H.ba?a.__proto__.__proto__.constructor:b,r=H.mW(v.typeUniverse,s.name)
b.$ccache=r
return r},
lg:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.k1(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n4:function(a){var s,r,q,p=this
if(p===t.K)return H.d9(p,a,H.n9)
if(!H.aK(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.d9(p,a,H.nc)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jo
else if(r===t.i||r===t.H)q=H.n8
else if(r===t.N)q=H.na
else q=r===t.cB?H.k3:null
if(q!=null)return H.d9(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.o3)){p.r="$i"+s
return H.d9(p,a,H.nb)}}else if(s===7)return H.d9(p,a,H.n2)
return H.d9(p,a,H.n0)},
d9:function(a,b,c){a.b=c
return a.b(b)},
n3:function(a){var s,r=this,q=H.n_
if(!H.aK(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mY
else if(r===t.K)q=H.mX
else{s=H.df(r)
if(s)q=H.n1}r.a=q
return r.a(a)},
k6:function(a){var s,r=a.y
if(!H.aK(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.k6(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
n0:function(a){var s=this
if(a==null)return H.k6(s)
return H.L(v.typeUniverse,H.lh(a,s),null,s,null)},
n2:function(a){if(a==null)return!0
return this.z.b(a)},
nb:function(a){var s,r=this
if(a==null)return H.k6(r)
s=r.r
if(a instanceof P.M)return!!a[s]
return!!J.dd(a)[s]},
n_:function(a){var s,r=this
if(a==null){s=H.df(r)
if(s)return a}else if(r.b(a))return a
H.l6(a,r)},
n1:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l6(a,s)},
l6:function(a,b){throw H.c(H.mM(H.kR(a,H.lh(a,b),H.ad(b,null))))},
kR:function(a,b,c){var s=P.hs(a),r=H.ad(b==null?H.bZ(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mM:function(a){return new H.d4("TypeError: "+a)},
a4:function(a,b){return new H.d4("TypeError: "+H.kR(a,null,b))},
n9:function(a){return a!=null},
mX:function(a){if(a!=null)return a
throw H.c(H.a4(a,"Object"))},
nc:function(a){return!0},
mY:function(a){return a},
k3:function(a){return!0===a||!1===a},
l4:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a4(a,"bool"))},
p5:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a4(a,"bool"))},
p4:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a4(a,"bool?"))},
p6:function(a){if(typeof a=="number")return a
throw H.c(H.a4(a,"double"))},
p8:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"double"))},
p7:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"double?"))},
jo:function(a){return typeof a=="number"&&Math.floor(a)===a},
jl:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a4(a,"int"))},
pa:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a4(a,"int"))},
p9:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a4(a,"int?"))},
n8:function(a){return typeof a=="number"},
pb:function(a){if(typeof a=="number")return a
throw H.c(H.a4(a,"num"))},
pd:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"num"))},
pc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a4(a,"num?"))},
na:function(a){return typeof a=="string"},
jm:function(a){if(typeof a=="string")return a
throw H.c(H.a4(a,"String"))},
pf:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a4(a,"String"))},
pe:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a4(a,"String?"))},
nD:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ad(a[q],b)
return s},
l7:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.b.S(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ad(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ad(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ad(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ad(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ad(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ad:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ad(a.z,b)
return s}if(l===7){r=a.z
s=H.ad(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ad(a.z,b)+">"
if(l===9){p=H.nJ(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nD(o,b)+">"):p}if(l===11)return H.l7(a,b,null)
if(l===12)return H.l7(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nJ:function(a){var s,r=H.lm(a)
if(r!=null)return r
s="minified:"+a
return s},
l0:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mW:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.k1(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d6(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d5(a,b,q)
n[b]=o
return o}else return m},
mU:function(a,b){return H.l2(a.tR,b)},
mT:function(a,b){return H.l2(a.eT,b)},
k1:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kW(H.kU(a,null,b,c))
r.set(b,s)
return s},
fP:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kW(H.kU(a,b,c,!0))
q.set(c,r)
return r},
mV:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jZ(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aZ:function(a,b){b.a=H.n3
b.b=H.n4
return b},
d6:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ag(null,null)
s.y=b
s.cy=c
r=H.aZ(a,s)
a.eC.set(c,r)
return r},
l_:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mR(a,b,r,c)
a.eC.set(r,s)
return s},
mR:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aK(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ag(null,null)
q.y=6
q.z=b
q.cy=c
return H.aZ(a,q)},
k0:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mQ(a,b,r,c)
a.eC.set(r,s)
return s},
mQ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aK(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.df(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.df(q.z))return q
else return H.kC(a,b)}}p=new H.ag(null,null)
p.y=7
p.z=b
p.cy=c
return H.aZ(a,p)},
kZ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mO(a,b,r,c)
a.eC.set(r,s)
return s},
mO:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aK(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d5(a,"kq",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ag(null,null)
q.y=8
q.z=b
q.cy=c
return H.aZ(a,q)},
mS:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ag(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aZ(a,s)
a.eC.set(q,r)
return r},
fO:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mN:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d5:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fO(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ag(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aZ(a,r)
a.eC.set(p,q)
return q},
jZ:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fO(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ag(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aZ(a,o)
a.eC.set(q,n)
return n},
kY:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fO(m)
if(j>0){s=l>0?",":""
r=H.fO(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mN(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ag(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aZ(a,o)
a.eC.set(q,r)
return r},
k_:function(a,b,c,d){var s,r=b.cy+("<"+H.fO(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mP(a,b,c,r,d)
a.eC.set(r,s)
return s},
mP:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b_(a,b,r,0)
m=H.dc(a,c,r,0)
return H.k_(a,n,m,c!==m)}}l=new H.ag(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aZ(a,l)},
kU:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kW:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mG(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kV(a,r,h,g,!1)
else if(q===46)r=H.kV(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aY(a.u,a.e,g.pop()))
break
case 94:g.push(H.mS(a.u,g.pop()))
break
case 35:g.push(H.d6(a.u,5,"#"))
break
case 64:g.push(H.d6(a.u,2,"@"))
break
case 126:g.push(H.d6(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jY(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.d5(p,n,o))
else{m=H.aY(p,a.e,n)
switch(m.y){case 11:g.push(H.k_(p,m,o,a.n))
break
default:g.push(H.jZ(p,m,o))
break}}break
case 38:H.mH(a,g)
break
case 42:p=a.u
g.push(H.l_(p,H.aY(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.k0(p,H.aY(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kZ(p,H.aY(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fd()
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
H.jY(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kY(p,H.aY(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jY(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mJ(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aY(a.u,a.e,i)},
mG:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kV:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l0(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mm(o)+'"')
d.push(H.fP(s,o,n))}else d.push(p)
return m},
mH:function(a,b){var s=b.pop()
if(0===s){b.push(H.d6(a.u,1,"0&"))
return}if(1===s){b.push(H.d6(a.u,4,"1&"))
return}throw H.c(P.h4("Unexpected extended operation "+H.u(s)))},
aY:function(a,b,c){if(typeof c=="string")return H.d5(a,c,a.sEA)
else if(typeof c=="number")return H.mI(a,b,c)
else return c},
jY:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aY(a,b,c[s])},
mJ:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aY(a,b,c[s])},
mI:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.h4("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.h4("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aK(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aK(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.L(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.L(a,b.z,c,d,e)
if(r===6)return H.L(a,b.z,c,d,e)
return r!==7}if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=H.kC(a,d)
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kB(a,b),c,d,e)}if(r===7){s=H.L(a,t.P,c,d,e)
return s&&H.L(a,b.z,c,d,e)}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kB(a,d),e)}if(p===7){s=H.L(a,b,c,t.P,e)
return s||H.L(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.M)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.l8(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.l8(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.n7(a,b,c,d,e)}return!1},
l8:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.L(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
n7:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l0(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fP(a,b,l[p]),c,r[p],e))return!1
return!0},
df:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aK(a))if(r!==7)if(!(r===6&&H.df(a.z)))s=r===8&&H.df(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o3:function(a){var s
if(!H.aK(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aK:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l2:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fd:function fd(){this.c=this.b=this.a=null},
f8:function f8(){},
d4:function d4(a){this.a=a},
lm:function(a){return v.mangledGlobalNames[a]},
o7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ka:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jx:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k9==null){H.o_()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kJ("Return interceptor for "+H.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.j6
if(o==null)o=$.j6=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.o4(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){o=$.j6
if(o==null)o=$.j6=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
m2:function(a){if(a<0||a>4294967295)throw H.c(P.aV(a,0,4294967295,"length",null))
return J.m3(new Array(a))},
jL:function(a){if(a<0)throw H.c(P.kh("Length must be a non-negative integer: "+a))
return new Array(a)},
m3:function(a){return J.jM(a)},
jM:function(a){a.fixed$length=Array
return a},
m4:function(a,b){return J.lJ(a,b)},
dd:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cg.prototype
return J.dI.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.ch.prototype
if(typeof a=="boolean")return J.dH.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.M)return a
return J.jx(a)},
de:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.M)return a
return J.jx(a)},
jw:function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.M)return a
return J.jx(a)},
le:function(a){if(typeof a=="number")return J.bE.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bp.prototype
return a},
nV:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bp.prototype
return a},
b1:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
return a}if(a instanceof P.M)return a
return J.jx(a)},
Q:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dd(a).q(a,b)},
ke:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.le(a).H(a,b)},
lG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.de(a).h(a,b)},
lH:function(a,b,c){return J.b1(a).fj(a,b,c)},
lI:function(a,b,c,d){return J.b1(a).fG(a,b,c,d)},
lJ:function(a,b){return J.le(a).a8(a,b)},
h1:function(a,b){return J.jw(a).B(a,b)},
jG:function(a,b){return J.jw(a).C(a,b)},
lK:function(a){return J.b1(a).ga7(a)},
lL:function(a){return J.b1(a).gcZ(a)},
h2:function(a){return J.dd(a).gD(a)},
ar:function(a){return J.jw(a).gM(a)},
b6:function(a){return J.de(a).gl(a)},
kf:function(a){return J.jw(a).hh(a)},
lM:function(a,b){return J.b1(a).hl(a,b)},
lN:function(a){return J.nV(a).hs(a)},
di:function(a){return J.dd(a).i(a)},
a:function a(){},
dH:function dH(){},
ch:function ch(){},
bf:function bf(){},
e7:function e7(){},
bp:function bp(){},
ay:function ay(){},
am:function am(){},
dJ:function dJ(){},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bE:function bE(){},
cg:function cg(){},
dI:function dI(){},
aS:function aS(){}},P={
mx:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nL()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bW(new P.j2(q),1)).observe(s,{childList:true})
return new P.j1(q,s,r)}else if(self.setImmediate!=null)return P.nM()
return P.nN()},
my:function(a){self.scheduleImmediate(H.bW(new P.j3(a),0))},
mz:function(a){self.setImmediate(H.bW(new P.j4(a),0))},
mA:function(a){P.jT(C.i,a)},
jT:function(a,b){var s=C.c.V(a.a,1000)
return P.mK(s<0?0:s,b)},
kH:function(a,b){var s=C.c.V(a.a,1000)
return P.mL(s<0?0:s,b)},
mK:function(a,b){var s=new P.d3()
s.dZ(a,b)
return s},
mL:function(a,b){var s=new P.d3()
s.e_(a,b)
return s},
p2:function(a){return new P.bT(a,1)},
mD:function(){return C.U},
mE:function(a){return new P.bT(a,3)},
ne:function(a){return new P.d0(a)},
nA:function(){var s,r
for(s=$.bU;s!=null;s=$.bU){$.db=null
r=s.b
$.bU=r
if(r==null)$.da=null
s.a.$0()}},
nG:function(){$.k4=!0
try{P.nA()}finally{$.db=null
$.k4=!1
if($.bU!=null)$.kd().$1(P.lc())}},
nE:function(a){var s=new P.eX(a),r=$.da
if(r==null){$.bU=$.da=s
if(!$.k4)$.kd().$1(P.lc())}else $.da=r.b=s},
nF:function(a){var s,r,q,p=$.bU
if(p==null){P.nE(a)
$.db=$.da
return}s=new P.eX(a)
r=$.db
if(r==null){s.b=p
$.bU=$.db=s}else{q=r.b
s.b=q
$.db=r.b=s
if(q==null)$.da=s}},
kG:function(a,b){var s=$.aq
if(s===C.e)return P.jT(a,b)
return P.jT(a,s.fK(b))},
mt:function(a,b){var s=$.aq
if(s===C.e)return P.kH(a,b)
return P.kH(a,s.cX(b,t.r))},
l9:function(a,b,c,d,e){P.nF(new P.jr(d,e))},
nB:function(a,b,c,d){var s,r=$.aq
if(r===c)return d.$0()
$.aq=c
s=r
try{r=d.$0()
return r}finally{$.aq=s}},
nC:function(a,b,c,d,e){var s,r=$.aq
if(r===c)return d.$1(e)
$.aq=c
s=r
try{r=d.$1(e)
return r}finally{$.aq=s}},
j2:function j2(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
d3:function d3(){this.c=0},
jh:function jh(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=b},
bt:function bt(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d0:function d0(a){this.a=a},
eX:function eX(a){this.a=a
this.b=null},
ep:function ep(){},
eq:function eq(){},
jk:function jk(){},
jr:function jr(a,b){this.a=a
this.b=b},
j9:function j9(){},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
m6:function(a,b,c){return H.nT(a,new H.S(b.ah("@<0>").cs(c).ah("S<1,2>")))},
N:function(a,b){return new H.S(a.ah("@<0>").cs(b).ah("S<1,2>"))},
ck:function(a){return new P.cP(a.ah("cP<0>"))},
jX:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mF:function(a,b){var s=new P.cQ(a,b)
s.c=a.e
return s},
m0:function(a,b,c){var s,r
if(P.k5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a9.push(a)
try{P.nd(a,s)}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}r=P.kE(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jK:function(a,b,c){var s,r
if(P.k5(a))return b+"..."+c
s=new P.aW(b)
$.a9.push(a)
try{r=s
r.a=P.kE(r.a,a,", ")}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
k5:function(a){var s,r
for(s=$.a9.length,r=0;r<s;++r)if(a===$.a9[r])return!0
return!1},
nd:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.u(l.gw(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gw(l);++j
if(!l.t()){if(j<=4){b.push(H.u(p))
return}r=H.u(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gw(l);++j
for(;l.t();p=o,o=n){n=l.gw(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.u(p)
r=H.u(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kr:function(a,b){var s,r,q=P.ck(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.p(0,b.a(a[r]))
return q},
ks:function(a){var s,r={}
if(P.k5(a))return"{...}"
s=new P.aW("")
try{$.a9.push(a)
s.a+="{"
r.a=!0
J.jG(a,new P.hN(r,s))
s.a+="}"}finally{if(0>=$.a9.length)return H.d($.a9,-1)
$.a9.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cP:function cP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j8:function j8(a){this.a=a
this.c=this.b=null},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function cf(){},
cl:function cl(){},
C:function C(){},
co:function co(){},
hN:function hN(a,b){this.a=a
this.b=b},
U:function U(){},
eg:function eg(){},
cX:function cX(){},
cR:function cR(){},
d7:function d7(){},
dq:function dq(){},
ds:function ds(){},
hp:function hp(){},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hB:function hB(a){this.a=a},
iP:function iP(){},
iQ:function iQ(){},
ji:function ji(a){this.b=0
this.c=a},
lZ:function(a){if(a instanceof H.ba)return a.i(0)
return"Instance of '"+H.cB(a)+"'"},
dP:function(a,b,c){var s,r=c?J.jL(a):J.m2(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hK:function(a,b){var s,r=[]
for(s=J.ar(a);s.t();)r.push(s.gw(s))
if(b)return r
return J.jM(r)},
m7:function(a,b){var s,r,q=J.jL(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
jS:function(a){var s=a,r=s.length,q=P.jQ(0,null,r)
return H.mi(q<r?s.slice(0,q):s)},
mk:function(a){return new H.hF(a,H.m5(a,!1,!0,!1,!1,!1))},
kE:function(a,b,c){var s=J.ar(b)
if(!s.t())return a
if(c.length===0){do a+=H.u(s.gw(s))
while(s.t())}else{a+=H.u(s.gw(s))
for(;s.t();)a=a+c+H.u(s.gw(s))}return a},
l1:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.lF().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.fP(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jP(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lW:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lX:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dv:function(a){if(a>=10)return""+a
return"0"+a},
kn:function(a){return new P.bd(1000*a)},
hs:function(a){if(typeof a=="number"||H.k3(a)||null==a)return J.di(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lZ(a)},
h4:function(a){return new P.dl(a)},
kh:function(a){return new P.aj(!1,null,null,a)},
eb:function(a,b){return new P.cC(null,null,!0,a,b,"Value not in range")},
aV:function(a,b,c,d,e){return new P.cC(b,c,!0,a,d,"Invalid value")},
jQ:function(a,b,c){if(a>c)throw H.c(P.aV(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aV(b,a,c,"end",null))
return b}return c},
ky:function(a,b){if(a<0)throw H.c(P.aV(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.b6(b):e
return new P.dF(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eR(a)},
kJ:function(a){return new P.eO(a)},
jR:function(a){return new P.bM(a)},
au:function(a){return new P.dr(a)},
e:function(a){return new P.fa(a)},
kb:function(a){H.o7(a)},
R:function R(a,b){this.a=a
this.b=b},
bd:function bd(a){this.a=a},
hl:function hl(){},
hm:function hm(){},
F:function F(){},
dl:function dl(a){this.a=a},
eC:function eC(){},
e2:function e2(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dF:function dF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eR:function eR(a){this.a=a},
eO:function eO(a){this.a=a},
bM:function bM(a){this.a=a},
dr:function dr(a){this.a=a},
e5:function e5(){},
cF:function cF(){},
dt:function dt(a){this.a=a},
fa:function fa(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b},
h:function h(){},
dG:function dG(){},
af:function af(){},
M:function M(){},
aW:function aW(a){this.a=a},
b0:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
l5:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.k3(a))return a
if(t.f.b(a))return P.ld(a)
if(t.c.b(a)){s=[]
J.jG(a,new P.jn(s))
a=s}return a},
ld:function(a){var s={}
J.jG(a,new P.jt(s))
return s},
jn:function jn(a){this.a=a},
jt:function jt(a){this.a=a},
dA:function dA(a,b){this.a=a
this.b=b},
hw:function hw(){},
hx:function hx(){},
fu:function fu(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
dN:function dN(){},
bk:function bk(){},
e3:function e3(){},
i9:function i9(){},
bL:function bL(){},
er:function er(){},
k:function k(){},
bo:function bo(){},
eB:function eB(){},
fi:function fi(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(){},
fD:function fD(){},
fE:function fE(){},
fM:function fM(){},
fN:function fN(){},
h7:function h7(){},
dm:function dm(){},
h8:function h8(a){this.a=a},
dn:function dn(){},
aN:function aN(){},
e4:function e4(){},
eZ:function eZ(){},
cD:function cD(){},
el:function el(){},
fz:function fz(){},
fA:function fA(){}},W={
kg:function(){var s=document.createElement("a")
s.toString
return s},
kk:function(){var s=document.createElement("canvas")
s.toString
return s},
lY:function(a,b,c){var s=document.body
s.toString
s=new H.bs(new W.a2(C.l.a9(s,a,b,c)),new W.hn())
return t.h.a(s.gaD(s))},
ho:function(a){return"wheel"},
cb:function(a){var s,r,q="element tag unavailable"
try{s=J.b1(a)
s.gdB(a)
q=s.gdB(a)}catch(r){H.aL(r)}return q},
j7:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kT:function(a,b,c,d){var s=W.j7(W.j7(W.j7(W.j7(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a3:function(a,b,c,d){var s=W.la(new W.j5(c),t.B)
if(s!=null&&!0)J.lI(a,b,s,!1)
return new W.f9(a,b,s,!1)},
kS:function(a){var s=W.kg(),r=window
s=new W.bS(new W.jc(s,r.location))
s.dT(a)
return s},
mB:function(a,b,c,d){return!0},
mC:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
kX:function(){var s=t.N
s=new W.fH(P.kr(C.r,s),P.ck(s),P.ck(s),P.ck(s),null)
s.dY(null,new H.cq(C.r,new W.jf()),["TEMPLATE"],null)
return s},
la:function(a,b){var s=$.aq
if(s===C.e)return a
return s.cX(a,b)},
n:function n(){},
h3:function h3(){},
dj:function dj(){},
dk:function dk(){},
bx:function bx(){},
dp:function dp(){},
b8:function b8(){},
b9:function b9(){},
ak:function ak(){},
he:function he(){},
D:function D(){},
c5:function c5(){},
hf:function hf(){},
ae:function ae(){},
av:function av(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
c7:function c7(){},
hj:function hj(){},
c8:function c8(){},
c9:function c9(){},
dw:function dw(){},
hk:function hk(){},
f_:function f_(a,b){this.a=a
this.b=b},
y:function y(){},
hn:function hn(){},
i:function i(){},
b:function b(){},
aw:function aw(){},
dy:function dy(){},
dz:function dz(){},
dB:function dB(){},
ax:function ax(){},
hA:function hA(){},
be:function be(){},
bg:function bg(){},
hL:function hL(){},
i1:function i1(){},
dU:function dU(){},
i2:function i2(a){this.a=a},
dV:function dV(){},
i3:function i3(a){this.a=a},
aA:function aA(){},
dW:function dW(){},
ab:function ab(){},
a2:function a2(a){this.a=a},
r:function r(){},
cx:function cx(){},
aC:function aC(){},
e9:function e9(){},
ed:function ed(){},
ig:function ig(a){this.a=a},
ef:function ef(){},
ao:function ao(){},
ej:function ej(){},
aE:function aE(){},
ek:function ek(){},
aF:function aF(){},
eo:function eo(){},
ir:function ir(a){this.a=a},
ah:function ah(){},
cG:function cG(){},
es:function es(){},
et:function et(){},
bN:function bN(){},
ap:function ap(){},
ac:function ac(){},
ev:function ev(){},
ew:function ew(){},
iw:function iw(){},
aG:function aG(){},
bn:function bn(){},
eA:function eA(){},
iB:function iB(){},
aI:function aI(){},
iO:function iO(){},
eU:function eU(){},
aX:function aX(){},
bQ:function bQ(){},
bR:function bR(){},
f0:function f0(){},
cO:function cO(){},
fe:function fe(){},
cS:function cS(){},
fy:function fy(){},
fF:function fF(){},
eY:function eY(){},
f6:function f6(a){this.a=a},
jJ:function jJ(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j5:function j5(a){this.a=a},
jW:function jW(a){this.$ti=a},
bS:function bS(a){this.a=a},
G:function G(){},
cy:function cy(a){this.a=a},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(){},
jd:function jd(){},
je:function je(){},
fH:function fH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jf:function jf(){},
fG:function fG(){},
cd:function cd(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jc:function jc(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a
this.b=0},
jj:function jj(a){this.a=a},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
fb:function fb(){},
fc:function fc(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
ft:function ft(){},
fv:function fv(){},
cZ:function cZ(){},
d_:function d_(){},
fw:function fw(){},
fx:function fx(){},
fC:function fC(){},
fI:function fI(){},
fJ:function fJ(){},
d1:function d1(){},
d2:function d2(){},
fK:function fK(){},
fL:function fL(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){}},K={
J:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.e("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.b9(a,0)
r=C.b.b9(b,0)
if(s>r){q=r
r=s
s=q}return new K.ia(s,r)},
aM:function aM(){},
dD:function dD(){},
a6:function a6(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
p:function p(a){this.a=a}},L={
iz:function(){var s=t.N
return new L.iy(P.N(s,t.aJ),P.N(s,t.aX),P.ck(s))},
em:function em(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a,b){this.b=a
this.c=b},
iy:function iy(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iC:function iC(a,b){this.b=a
this.c=!1
this.a=b}},O={
jH:function(){return new O.bA([])},
bA:function bA(a){this.a=a
this.c=this.b=null},
ct:function ct(a){this.a=a
this.b=null},
dT:function(a,b){return new O.cr(new V.O(0,0,0),a,b,new A.al(!1,!1,!1))},
dQ:function dQ(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(){},
hO:function hO(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
dS:function dS(){},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
hR:function hR(a){this.b=a},
hS:function hS(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
hT:function hT(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
iu:function iu(){}},E={
kP:function(){var s=window.navigator.vendor
s.toString
if(C.b.v(s,"Google"))return C.y
s=window.navigator.userAgent
s.toString
if(C.b.v(s,"Firefox"))return C.m
s=window.navigator.appVersion
s.toString
if(C.b.v(s,"Trident")||C.b.v(s,"Edge"))return C.n
s=window.navigator.appName
s.toString
if(C.b.v(s,"Microsoft"))return C.n
return C.z},
kQ:function(){var s=window.navigator.appVersion
s.toString
if(C.b.v(s,"Win"))return C.R
if(C.b.v(s,"Mac"))return C.t
if(C.b.v(s,"Linux"))return C.S
return C.T},
ml:function(a,b){var s
Date.now()
s=new E.ib(a,new P.R(Date.now(),!1),new P.R(Date.now(),!1),new O.ct([]),new O.ct([]),new O.ct([]),[null],P.N(t.N,t.k))
s.dR(a,b)
return s},
ms:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kF(a,!0,!0,!0,!1)
s=W.kk()
r=s.style
r.width="100%"
r.height="100%"
J.lL(a).p(0,s)
return E.kF(s,!0,!0,!0,!1)},
kF:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.z,m=t.ba.a(C.h.dF(a,"webgl2",P.m6(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.e("Failed to get the rendering context for WebGL."))
s=E.ml(m,a)
H.jl(m.getParameter(3379))
H.jl(m.getParameter(34076))
n=[]
r=$.hq
q=new X.eS(a,n,(r==null?$.hq=new E.f7(E.kP(),E.kQ()):r).a===C.m?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a3(p,"contextmenu",q.geE(),!1))
n.push(W.a3(a,"focus",q.geK(),!1))
n.push(W.a3(a,"blur",q.gex(),!1))
n.push(W.a3(p,"keyup",q.geO(),!1))
n.push(W.a3(p,"keydown",q.geM(),!1))
n.push(W.a3(a,"mousedown",q.geS(),!1))
n.push(W.a3(a,"mouseup",q.geW(),!1))
n.push(W.a3(a,o,q.geU(),!1))
W.ho(a)
W.ho(a)
n.push(W.a3(a,W.ho(a),q.geY(),!1))
n.push(W.a3(p,o,q.geG(),!1))
n.push(W.a3(p,"mouseup",q.geI(),!1))
n.push(W.a3(p,"pointerlockchange",q.gf_(),!1))
n.push(W.a3(a,"touchstart",q.gfc(),!1))
n.push(W.a3(a,"touchend",q.gf8(),!1))
n.push(W.a3(a,"touchmove",q.gfa(),!1))
n=new E.ex(a,s,q,new P.R(Date.now(),!1))
n.cH()
return n},
h9:function h9(){},
bB:function bB(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bz:function bz(a){this.b=a},
bJ:function bJ(a){this.b=a},
f7:function f7(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cx=_.ch=_.Q=_.z=null
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
ex:function ex(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.Q=null
_.cx=!1
_.cy=d
_.db=0},
iv:function iv(a){this.a=a}},Z={
mw:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.d8(c)),35044)
a.bindBuffer(b,null)
return new Z.eV(b,s)},
ai:function(a){return new Z.br(a)},
eV:function eV(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j0:function j0(a){this.a=a},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a}},D={
H:function(){return new D.bC()},
hb:function hb(){},
bC:function bC(){var _=this
_.c=_.b=_.a=null
_.d=0},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
P:function P(){},
aQ:function aQ(){},
aR:function aR(){},
B:function B(a,b,c){this.c=a
this.d=b
this.e=c},
c6:function c6(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cj:function cj(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c3:function c3(a,b){this.a=a
this.b=b},dL:function dL(a,b){this.a=a
this.b=b},hH:function hH(a,b){this.c=a
this.d=b},cn:function cn(a,b,c){this.x=a
this.c=b
this.d=c},hM:function hM(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},bG:function bG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},i4:function i4(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bH:function bH(a,b,c){this.x=a
this.c=b
this.d=c},ea:function ea(){},cH:function cH(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iA:function iA(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eS:function eS(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
m_:function(a){var s=new V.bb(0,0,0,1),r=$.kA
if(r==null){r=V.kz(0,0,1,1)
$.kA=r}return new X.hz(s,r)},
hz:function hz(a,b){this.a=a
this.r=b
this.x=null},
e6:function e6(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
it:function it(){}},V={
of:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dG(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){$.A().toString
return C.b.ay(C.d.cc(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bY:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.A().toString
n=C.b.ay(C.d.cc(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.b.ay(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
an:function(){var s=$.kv
return s==null?$.kv=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ku:function(a,b,c){var s=c.J(),r=b.au(s).J(),q=s.au(r),p=new V.E(a.a,a.b,a.c)
return V.az(r.a,q.a,s.a,r.aV(0).W(p),r.b,q.b,s.b,q.aV(0).W(p),r.c,q.c,s.c,s.aV(0).W(p),0,0,0,1)},
kw:function(){var s=$.aD
return s==null?$.aD=new V.X(0,0,0):s},
kz:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ec(a,b,c,d)},
cM:function(){var s=$.kM
return s==null?$.kM=new V.E(0,0,0):s},
mv:function(){var s=$.iR
return s==null?$.iR=new V.E(-1,0,0):s},
jV:function(){var s=$.iS
return s==null?$.iS=new V.E(0,1,0):s},
kN:function(){var s=$.iT
return s==null?$.iT=new V.E(0,0,1):s},
mu:function(a,b,c){return new V.E(a,b,c)},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(){},
cs:function cs(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bF:function bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
o8:function(a){P.mt(C.J,new V.jE(a))},
mn:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.e("The html document body was null."))
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
W.a3(n,"scroll",new V.io(s),!1)
return new V.il(o)},
at:function at(){},
jE:function jE(a){this.a=a},
du:function du(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dC:function dC(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dE:function dE(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
e8:function e8(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
il:function il(a){this.a=a
this.b=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
ip:function ip(a){this.a=a}},U={
hd:function(){return new U.hc()},
km:function(a){var s=V.an(),r=new U.c4(s)
if(!s.q(0,a))r.a=a
return r},
hc:function hc(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
c4:function c4(a){this.a=a
this.b=null},
bD:function bD(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a0:function a0(){},
cJ:function cJ(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cK:function cK(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null},
cL:function cL(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={dx:function dx(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
m9:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+b0.gaf(b0)+b1.gaf(b1)+b2.gaf(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.q)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.b5()
if(h){s=$.b4()
c=new Z.br(c.a|s.a)}if(g)c=new Z.br(c.a|$.b3().a)
if(f)c=new Z.br(c.a|$.b2().a)
return new A.hQ(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jp:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jq:function(a,b,c){var s
A.jp(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h0(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
nj:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jp(b,r,"emission")
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
A.jq(b,r,"ambient")
b.a+="\n"},
nh:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jq(b,r,"diffuse")
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
A.jq(b,r,"invDiffuse")
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
A.jq(b,r,"specular")
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
A.jp(b,r,"reflect")
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
A.jp(b,r,"refract")
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
r="barLight"+s
q=A.h0(r)
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
r="dirLight"+s
q=A.h0(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
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
r="pointLight"+s
q=A.h0(r)
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
r="spotLight"+s
q=A.h0(r)
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
if(m){s=$.hq
if(s==null)s=$.hq=new E.f7(E.kP(),E.kQ())
p=c.a
if(s.b===C.t){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
ns:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.aW(""),j=""+"precision mediump float;\n"
k.a=j
j=k.a=j+"\n"
s=a.k4
if(s){j+="varying vec3 normalVec;\n"
k.a=j}if(a.r1){j+="varying vec3 binormalVec;\n"
k.a=j}if(a.r2){j+="varying vec2 txt2D;\n"
k.a=j}if(a.rx){j+="varying vec3 txtCube;\n"
k.a=j}if(a.k2){j+="varying vec3 objPos;\n"
k.a=j}j=k.a=(a.k3?k.a=j+"varying vec3 viewPos;\n":j)+"\n"
r=a.y1
if(r){j+="uniform mat4 colorMat;\n"
k.a=j}if(a.go){j+="uniform mat4 viewMat;\n"
k.a=j}if(a.dy)j=k.a=j+"uniform mat4 invViewMat;\n"
k.a=j+"\n"
A.nj(a,k)
A.nf(a,k)
A.nh(a,k)
A.nk(a,k)
A.nq(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.no(a,k)
A.np(a,k)}A.nm(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y.a
if(p)q=k.a=q+"uniform float alpha;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!p)o=!1
else o=!0
if(!o)q=k.a=q+"   return 1.0;\n"
else if(p){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.ng(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.ni(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nn(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nr(a,p[n],k)
A.nl(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
if(s){s=p+"   vec3 norm = normal();\n"
k.a=s}else s=p
j=j?k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n":s
m=[]
if(q){k.a=j+u.o
m.push("lightAccum")
if(!a.b.a)j=!1
else j=!0
if(j)k.a+="   setAmbientColor();\n"
if(!a.c.a)j=!1
else j=!0
if(j)k.a+="   setDiffuseColor();\n"
if(!a.d.a)j=!1
else j=!0
if(j)k.a+="   setInvDiffuseColor();\n"
if(!a.e.a)j=!1
else j=!0
if(j)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.am(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.am(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.am(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.am(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.k(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
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
s=b.a+="uniform BendingValue bendValues["+a.aP+"];\n"
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
h0:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.am(a,1)},
jU:function(a,b,c,d,e){var s=new A.iH([],a,c,e)
s.f=d
s.e=P.dP(d,0,!1)
return s},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.hL=_.hK=_.de=_.hJ=_.hI=_.dd=_.dc=_.hH=_.hG=_.da=_.d9=_.hF=_.hE=_.d8=_.hD=_.hC=_.d7=_.d6=_.bf=_.aP=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bU=c
_.bV=d
_.bW=e
_.bX=f
_.bY=g
_.bZ=h
_.c_=i
_.c0=j
_.hO=_.hN=_.hM=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b7:function b7(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aP=b5
_.bf=b6
_.d6=b7},
eG:function eG(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eH:function eH(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eK:function eK(a,b,c,d,e,f,g,h,i,j){var _=this
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
eN:function eN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cE:function cE(){},
iG:function iG(){},
iM:function iM(a){this.a=a},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eD:function eD(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
eE:function eE(a,b,c){this.a=a
this.c=b
this.d=c},
eF:function eF(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
eI:function eI(a,b,c){this.a=a
this.c=b
this.d=c},
eJ:function eJ(a,b,c){this.a=a
this.c=b
this.d=c},
eL:function eL(a,b,c){this.a=a
this.c=b
this.d=c},
eM:function eM(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oe:function(){return F.nQ(15,30,0.5,1,new F.jF())},
nQ:function(a,b,c,d,e){var s=F.oa(a,b,new F.ju(e,d,b,c))
s.aN()
s.h3(new F.iW(),new F.i7())
return s},
oa:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.e("Must have 1 or more divisions of the height for a surface."))
s=new F.ih()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.K(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.cQ(new V.bb(n,0,0,1),new V.a1(p,1))
c.$3(m,p,0)
r.push(m.d1(null))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.K(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cQ(new V.bb(h,g,f,1),new V.a1(p,k))
c.$3(m,p,l)
r.push(m.d1(null))}}s.gR().fH(a+1,b+1,r)
return s},
kO:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cN()
h=$.lB()
s=$.b5()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b4().a)!==0)q.r=e
if((r&$.b3().a)!==0)q.x=b
if((r&$.bv().a)!==0)q.y=f
if((r&$.bw().a)!==0)q.z=g
if((r&$.lC().a)!==0)q.Q=c
if((r&$.c_().a)!==0)q.ch=i
if((r&$.b2().a)!==0)q.cx=a
return q},
jF:function jF(){},
ju:function ju(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(){},
iq:function iq(){},
hI:function hI(){},
iF:function iF(){},
ih:function ih(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eh:function eh(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a){this.b=a},
cN:function cN(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j_:function j_(a){this.a=a},
iZ:function iZ(a){this.a=a},
K:function K(a,b){this.a=a
this.b=!1
this.c=b},
bP:function bP(a,b,c){this.b=a
this.c=b
this.d=c},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a,b){this.a=a
this.b=b},
eT:function eT(a,b){this.b=a
this.c=b},
iX:function iX(){},
iW:function iW(){},
iY:function iY(){},
i7:function i7(){}},Q={
o5:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.mn("Test 009"),a=W.kk()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a).toString
b.cR(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."])
b.cR(["\xab[Back to Tests|../]"])
s=document.getElementById(e)
if(s==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
r=E.ms(s,!0,!0,!0,!1)
q=O.jH()
p=new E.bB(q)
q.b5(p.gh4(),p.gh7())
p.scj(0,d)
p.scj(0,F.oe())
q=O.jH()
o=new O.dQ(q)
q.b5(o.ges(),o.gev())
q=o.gdl()
q.gu().p(0,o.gcF())
q.gdk().p(0,o.gcC())
q=o.gdl()
n=V.jV()
m=U.km(V.ku(V.kw(),n,new V.E(-1,-1,-1)))
l=new V.O(1,1,1)
k=new D.c6(new V.O(1,1,1),V.kN(),V.jV(),V.mv())
j=k.a
k.a=m
m.gu().p(0,k.gdV())
k.an(new D.B("mover",j,k.a))
if(!k.b.q(0,l)){j=k.b
k.b=l
k.an(new D.B("color",j,l))}q.p(0,k)
o.gd4().sat(0,new V.O(0,0,0))
q=o.gcS()
q.sat(0,new V.O(0,0,1))
q=o.gd2()
q.sat(0,new V.O(0,1,0))
q=o.gbq()
q.sat(0,new V.O(1,0,0))
q=o.gbq()
q.cJ(new A.al(!0,!1,!1))
q.cK(10)
i=new U.bD(V.an(),[])
i.b5(i.geo(),i.gf4())
q=r.x
m=U.hd()
l=U.hd()
k=$.bq
if(k==null)k=$.bq=new V.Y(0,0)
k=new U.cK(m,l,new X.a_(!1,!1,!1),k,V.an())
m.scf(0,!0)
m.sc3(6.283185307179586)
m.sc5(0)
m.sa_(0,0)
m.sc4(100)
m.sT(0)
m.sbS(0.5)
h=k.gaG()
m.gu().p(0,h)
l.scf(0,!0)
l.sc3(6.283185307179586)
l.sc5(0)
l.sa_(0,0)
l.sc4(100)
l.sT(0)
l.sbS(0.5)
l.gu().p(0,h)
m=new X.a_(!1,!1,!1)
if(!k.d.q(0,m)){j=k.d
k.d=m
k.L(new D.B(c,j,m))}if(!k.r){k.r=!0
k.L(new D.B("invertY",!1,!0))}k.b1(q)
i.p(0,k)
U.hd()
if($.bq==null)$.bq=new V.Y(0,0)
V.an()
m=U.hd()
l=$.bq
if(l==null)l=$.bq=new V.Y(0,0)
l=new U.cJ(m,new X.a_(!1,!1,!1),l,V.an())
m.scf(0,!0)
m.sc3(6.283185307179586)
m.sc5(0)
m.sa_(0,0)
m.sc4(100)
m.sT(0)
m.sbS(0.2)
m.gu().p(0,l.gaG())
m=new X.a_(!0,!1,!1)
if(!l.c.q(0,m)){j=l.c
l.c=m
l.L(new D.B(c,j,m))}l.b1(q)
i.p(0,l)
m=new X.a_(!1,!1,!1)
l=new U.cL(m,V.an())
k=new X.a_(!1,!1,!1)
if(!m.q(0,k)){l.b=k
l.L(new D.B(c,m,k))}l.b1(q)
i.p(0,l)
i.p(0,U.km(V.az(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=O.jH()
m=new M.dx(q)
q.b5(m.geA(),m.geC())
g=X.m_(d)
f=new X.e6(1.0471975511965976,0.1)
f.sdn(d)
l=f.c
$.A().toString
if(!(Math.abs(l-1.0471975511965976)<1e-9)){f.c=1.0471975511965976
f.aH(new D.B("fov",l,1.0471975511965976))}l=f.d
$.A().toString
if(!(Math.abs(l-0.1)<1e-9)){f.d=0.1
f.aH(new D.B("near",l,0.1))}l=f.e
$.A().toString
if(!(Math.abs(l-2000)<1e-9)){f.e=2000
f.aH(new D.B("far",l,2000))}l=m.b
if(l!==f){if(l!=null)l.gu().N(0,m.gag())
j=m.b
m.b=f
f.gu().p(0,m.gag())
m.ao(new D.B("camera",j,m.b))}l=m.c
if(l!==g){if(l!=null)l.gu().N(0,m.gag())
j=m.c
m.c=g
g.gu().p(0,m.gag())
m.ao(new D.B("target",j,m.c))}m.sdC(d)
m.sdC(o)
q.p(0,p)
q=m.b
if(q!=null)q.sdn(i)
q=r.d
if(q!==m){if(q!=null)q.gu().N(0,r.gcn())
r.d=m
m.gu().p(0,r.gcn())
r.co()}q=r.Q
if(q==null)q=r.Q=D.H()
m=q.b
q=m==null?q.b=[]:m
q.push(new Q.jC(b,o))
V.o8(r)},
jC:function jC(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jN.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gD:function(a){return H.cA(a)},
i:function(a){return"Instance of '"+H.cB(a)+"'"}}
J.dH.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$ia5:1}
J.ch.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0}}
J.bf.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.e7.prototype={}
J.bp.prototype={}
J.ay.prototype={
i:function(a){var s=a[$.lp()]
if(s==null)return this.dN(a)
return"JavaScript function for "+J.di(s)},
$ice:1}
J.am.prototype={
c8:function(a,b){if(!!a.fixed$length)H.f(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.eb(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var s
if(!!a.fixed$length)H.f(P.x("remove"))
for(s=0;s<a.length;++s)if(J.Q(a[s],b)){a.splice(s,1)
return!0}return!1},
a6:function(a,b){if(!!a.fixed$length)H.f(P.x("addAll"))
this.e2(a,b)
return},
e2:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.au(a))
for(s=0;s<r;++s)a.push(b[s])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.au(a))}},
k:function(a,b){var s,r,q=a.length,p=P.dP(q,"",!1)
for(s=0;s<a.length;++s){r=H.u(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
h0:function(a){return this.k(a,"")},
fY:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.au(a))}throw H.c(H.hE())},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gfX:function(a){if(a.length>0)return a[0]
throw H.c(H.hE())},
gbh:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hE())},
cT:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.au(a))}return!1},
aX:function(a,b){if(!!a.immutable$list)H.f(P.x("sort"))
H.mq(a,b==null?J.n6():b)},
dJ:function(a){return this.aX(a,null)},
v:function(a,b){var s
for(s=0;s<a.length;++s)if(J.Q(a[s],b))return!0
return!1},
i:function(a){return P.jK(a,"[","]")},
gM:function(a){return new J.aa(a,a.length)},
gD:function(a){return H.cA(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.f(P.x("set length"))
if(b>a.length)H.l3(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bX(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.f(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bX(a,b))
a[b]=c},
$it:1,
$ij:1,
$ih:1,
$im:1}
J.dJ.prototype={}
J.aa.prototype={
gw:function(a){return H.W(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bE.prototype={
a8:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbg(b)
if(this.gbg(a)===s)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
df:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
cc:function(a,b){var s
if(b>20)throw H.c(P.aV(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dG:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cL(a,b)},
V:function(a,b){return(a|0)===a?a/b|0:this.cL(a,b)},
cL:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.u(s)+": "+H.u(a)+" ~/ "+b))},
bb:function(a,b){var s
if(a>0)s=this.fw(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fw:function(a,b){return b>31?0:a>>>b},
$iV:1,
$iZ:1}
J.cg.prototype={$il:1}
J.dI.prototype={}
J.aS.prototype={
bR:function(a,b){if(b<0)throw H.c(H.bX(a,b))
if(b>=a.length)H.f(H.bX(a,b))
return a.charCodeAt(b)},
b9:function(a,b){if(b>=a.length)throw H.c(H.bX(a,b))
return a.charCodeAt(b)},
S:function(a,b){return a+b},
br:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b6:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eb(b,null))
if(b>c)throw H.c(P.eb(b,null))
if(c>a.length)throw H.c(P.eb(c,null))
return a.substring(b,c)},
am:function(a,b){return this.b6(a,b,null)},
hs:function(a){return a.toLowerCase()},
H:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ay:function(a,b){var s=b-a.length
if(s<=0)return a
return this.H(" ",s)+a},
fN:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aV(c,0,s,null,null))
return H.ll(a,b,c)},
v:function(a,b){return this.fN(a,b,0)},
a8:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gD:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$it:1,
$iv:1}
H.dM.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bR(this.a,b)}}
H.j.prototype={}
H.cm.prototype={
gM:function(a){return new H.aU(this,this.gl(this))},
bp:function(a,b){return this.dM(0,b)}}
H.aU.prototype={
gw:function(a){return H.W(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.de(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.bi.prototype={
gM:function(a){return new H.cp(J.ar(this.a),this.b)},
gl:function(a){return J.b6(this.a)},
B:function(a,b){return this.b.$1(J.h1(this.a,b))}}
H.ca.prototype={$ij:1}
H.cp.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gw(r))
return!0}s.a=null
return!1},
gw:function(a){return H.W(this).Q[1].a(this.a)}}
H.cq.prototype={
gl:function(a){return J.b6(this.a)},
B:function(a,b){return this.b.$1(J.h1(this.a,b))}}
H.bs.prototype={
gM:function(a){return new H.eW(J.ar(this.a),this.b)}}
H.eW.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gw(s)))return!0
return!1},
gw:function(a){var s=this.a
return s.gw(s)}}
H.cc.prototype={}
H.eQ.prototype={
m:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.bO.prototype={}
H.iD.prototype={
ab:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cz.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dK.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eP.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i8.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fB.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.ba.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ln(r==null?"unknown":r)+"'"},
$ice:1,
ghv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eu.prototype={}
H.en.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ln(s)+"'"}}
H.by.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.by))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gD:function(a){var s,r=this.c
if(r==null)s=H.cA(this.a)
else s=typeof r!=="object"?J.h2(r):H.cA(r)
return(s^H.cA(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.u(this.d)+"' of "+("Instance of '"+H.cB(s)+"'")}}
H.ee.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.S.prototype={
gl:function(a){return this.a},
gZ:function(a){return new H.aT(this)},
ghu:function(a){return H.m8(new H.aT(this),new H.hG(this))},
fO:function(a,b){var s=this.b
if(s==null)return!1
return this.ea(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.ba(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.ba(p,b)
q=r==null?n:r.b
return q}else return o.h_(b)},
h_:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cA(q,J.h2(a)&0x3ffffff)
r=this.dg(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cr(s==null?m.b=m.bI():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cr(r==null?m.c=m.bI():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bI()
p=J.h2(b)&0x3ffffff
o=m.cA(q,p)
if(o==null)m.bL(q,p,[m.bJ(b,c)])
else{n=m.dg(o,b)
if(n>=0)o[n].b=c
else o.push(m.bJ(b,c))}}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.au(s))
r=r.c}},
cr:function(a,b,c){var s=this.ba(a,b)
if(s==null)this.bL(a,b,this.bJ(b,c))
else s.b=c},
el:function(){this.r=this.r+1&67108863},
bJ:function(a,b){var s,r=this,q=new H.hJ(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.el()
return q},
dg:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1},
i:function(a){return P.ks(this)},
ba:function(a,b){return a[b]},
cA:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
ee:function(a,b){delete a[b]},
ea:function(a,b){return this.ba(a,b)!=null},
bI:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bL(r,s,r)
this.ee(r,s)
return r}}
H.hG.prototype={
$1:function(a){var s=this.a
return H.W(s).Q[1].a(s.h(0,a))},
$S:function(){return H.W(this.a).ah("2(1)")}}
H.hJ.prototype={}
H.aT.prototype={
gl:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.dO(s,s.r)
r.c=s.e
return r}}
H.dO.prototype={
gw:function(a){return H.W(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jy.prototype={
$1:function(a){return this.a(a)},
$S:38}
H.jz.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.jA.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.hF.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cv.prototype={}
H.bI.prototype={
gl:function(a){return a.length},
$it:1,
$iw:1}
H.bj.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cu.prototype={
m:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dX.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dY.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dZ.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.e0.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cw.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.e1.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cT.prototype={}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.ag.prototype={
ah:function(a){return H.fP(v.typeUniverse,this,a)},
cs:function(a){return H.mV(v.typeUniverse,this,a)}}
H.fd.prototype={}
H.f8.prototype={
i:function(a){return this.a}}
H.d4.prototype={}
P.j2.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:33}
P.j1.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:39}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:10}
P.j4.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d3.prototype={
dZ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bW(new P.jh(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
e_:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bW(new P.jg(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$iix:1}
P.jh.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jg.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dP(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bT.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.u(this.a)+")"}}
P.bt.prototype={
gw:function(a){var s=this.c
if(s==null)return this.b
return s.gw(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bT){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.ar(s)
if(o instanceof P.bt){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d0.prototype={
gM:function(a){return new P.bt(this.a())}}
P.eX.prototype={}
P.ep.prototype={}
P.eq.prototype={}
P.jk.prototype={}
P.jr.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.j9.prototype={
hn:function(a){var s,r,q,p=null
try{if(C.e===$.aq){a.$0()
return}P.nB(p,p,this,a)}catch(q){s=H.aL(q)
r=H.k8(q)
P.l9(p,p,this,s,r)}},
ho:function(a,b){var s,r,q,p=null
try{if(C.e===$.aq){a.$1(b)
return}P.nC(p,p,this,a,b)}catch(q){s=H.aL(q)
r=H.k8(q)
P.l9(p,p,this,s,r)}},
hp:function(a,b){return this.ho(a,b,t.z)},
fK:function(a){return new P.ja(this,a)},
cX:function(a,b){return new P.jb(this,a,b)}}
P.ja.prototype={
$0:function(){return this.a.hn(this.b)},
$S:2}
P.jb.prototype={
$1:function(a){return this.a.hp(this.b,a)},
$S:function(){return this.c.ah("~(0)")}}
P.cP.prototype={
gM:function(a){var s=new P.cQ(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
v:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e9(b)
return r}},
e9:function(a){var s=this.d
if(s==null)return!1
return this.bz(s[this.bw(a)],a)>=0},
p:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ct(s==null?q.b=P.jX():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ct(r==null?q.c=P.jX():r,b)}else return q.e1(0,b)},
e1:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jX()
s=q.bw(b)
r=p[s]
if(r==null)p[s]=[q.bv(b)]
else{if(q.bz(r,b)>=0)return!1
r.push(q.bv(b))}return!0},
N:function(a,b){if((b&1073741823)===b)return this.ff(this.c,b)
else return this.fe(0,b)},
fe:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bw(b)
r=n[s]
q=o.bz(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cN(p)
return!0},
ct:function(a,b){if(a[b]!=null)return!1
a[b]=this.bv(b)
return!0},
ff:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cN(s)
delete a[b]
return!0},
cu:function(){this.r=this.r+1&1073741823},
bv:function(a){var s,r=this,q=new P.j8(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cu()
return q},
cN:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cu()},
bw:function(a){return J.h2(a)&1073741823},
bz:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Q(a[r].a,b))return r
return-1}}
P.j8.prototype={}
P.cQ.prototype={
gw:function(a){return H.W(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.au(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cf.prototype={}
P.cl.prototype={$ij:1,$ih:1,$im:1}
P.C.prototype={
gM:function(a){return new H.aU(a,this.gl(a))},
B:function(a,b){return this.h(a,b)},
C:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.au(a))}},
gdi:function(a){return this.gl(a)===0},
hr:function(a,b){var s,r,q,p,o=this
if(o.gdi(a)){s=J.jL(0)
return s}r=o.h(a,0)
q=P.dP(o.gl(a),r,!0)
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hq:function(a){return this.hr(a,!0)},
i:function(a){return P.jK(a,"[","]")}}
P.co.prototype={}
P.hN.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.u(a)
r.a=s+": "
r.a+=H.u(b)},
$S:25}
P.U.prototype={
C:function(a,b){var s,r,q
for(s=J.ar(this.gZ(a)),r=H.bZ(a).ah("U.V");s.t();){q=s.gw(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.b6(this.gZ(a))},
i:function(a){return P.ks(a)},
$iT:1}
P.eg.prototype={
a6:function(a,b){var s
for(s=J.ar(b);s.t();)this.p(0,s.gw(s))},
i:function(a){return P.jK(this,"{","}")},
B:function(a,b){var s,r,q,p,o="index"
H.nO(b,o,t.S)
P.ky(b,o)
for(s=P.mF(this,this.r),r=H.W(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.I(b,this,o,null,q))}}
P.cX.prototype={$ij:1,$ih:1}
P.cR.prototype={}
P.d7.prototype={}
P.dq.prototype={}
P.ds.prototype={}
P.hp.prototype={}
P.hC.prototype={
i:function(a){return this.a}}
P.hB.prototype={
eb:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.aW("")
if(o>b)n.a+=C.b.b6(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.b6(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.iP.prototype={}
P.iQ.prototype={
fP:function(a){var s,r,q,p=P.jQ(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ji(r)
if(q.eg(a,0,p)!==p){C.b.bR(a,p-1)
q.bN()}return new Uint8Array(r.subarray(0,H.mZ(0,q.b,s)))}}
P.ji.prototype={
bN:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fF:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bN()
return!1}},
eg:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bR(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.b9(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fF(p,C.b.b9(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bN()}else if(p<=2047){o=l.b
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
P.R.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.R&&this.a===b.a&&!0},
a8:function(a,b){return C.c.a8(this.a,b.a)},
gD:function(a){var s=this.a
return(s^C.c.bb(s,30))&1073741823},
i:function(a){var s=this,r=P.lW(H.mh(s)),q=P.dv(H.mf(s)),p=P.dv(H.mb(s)),o=P.dv(H.mc(s)),n=P.dv(H.me(s)),m=P.dv(H.mg(s)),l=P.lX(H.md(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bd.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bd&&this.a===b.a},
gD:function(a){return C.c.gD(this.a)},
a8:function(a,b){return C.c.a8(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hm(),o=this.a
if(o<0)return"-"+new P.bd(0-o).i(0)
s=p.$1(C.c.V(o,6e7)%60)
r=p.$1(C.c.V(o,1e6)%60)
q=new P.hl().$1(o%1e6)
return""+C.c.V(o,36e8)+":"+s+":"+r+"."+q}}
P.hl.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.hm.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.F.prototype={}
P.dl.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hs(s)
return"Assertion failed"}}
P.eC.prototype={}
P.e2.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gby()+o+m
if(!q.a)return l
s=q.gbx()
r=P.hs(q.b)
return l+s+": "+r}}
P.cC.prototype={
gby:function(){return"RangeError"},
gbx:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.u(q):""
else if(q==null)s=": Not greater than or equal to "+H.u(r)
else if(q>r)s=": Not in inclusive range "+H.u(r)+".."+H.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.u(r)
return s}}
P.dF.prototype={
gby:function(){return"RangeError"},
gbx:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.eR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eO.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dr.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hs(s)+"."}}
P.e5.prototype={
i:function(a){return"Out of Memory"},
$iF:1}
P.cF.prototype={
i:function(a){return"Stack Overflow"},
$iF:1}
P.dt.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fa.prototype={
i:function(a){return"Exception: "+this.a}}
P.hy.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.b6(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
bp:function(a,b){return new H.bs(this,b)},
gl:function(a){var s,r=this.gM(this)
for(s=0;r.t();)++s
return s},
gaD:function(a){var s,r=this.gM(this)
if(!r.t())throw H.c(H.hE())
s=r.gw(r)
if(r.t())throw H.c(H.m1())
return s},
B:function(a,b){var s,r,q
P.ky(b,"index")
for(s=this.gM(this),r=0;s.t();){q=s.gw(s)
if(b===r)return q;++r}throw H.c(P.I(b,this,"index",null,r))},
i:function(a){return P.m0(this,"(",")")}}
P.dG.prototype={}
P.af.prototype={
gD:function(a){return P.M.prototype.gD.call(C.M,this)},
i:function(a){return"null"}}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gD:function(a){return H.cA(this)},
i:function(a){return"Instance of '"+H.cB(this)+"'"},
toString:function(){return this.i(this)}}
P.aW.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.n.prototype={}
W.h3.prototype={
gl:function(a){return a.length}}
W.dj.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dk.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bx.prototype={$ibx:1}
W.dp.prototype={}
W.b8.prototype={$ib8:1}
W.b9.prototype={
dF:function(a,b,c){var s=a.getContext(b,P.ld(c))
return s},
$ib9:1}
W.ak.prototype={
gl:function(a){return a.length}}
W.he.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.c5.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.hf.prototype={}
W.ae.prototype={}
W.av.prototype={}
W.hg.prototype={
gl:function(a){return a.length}}
W.hh.prototype={
gl:function(a){return a.length}}
W.hi.prototype={
gl:function(a){return a.length}}
W.c7.prototype={}
W.hj.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c8.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.c9.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
return r+H.u(s)+") "+H.u(this.gaC(a))+" x "+H.u(this.gav(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.b1(b)
if(s===r.gbi(b)){s=a.top
s.toString
s=s===r.gbn(b)&&this.gaC(a)===r.gaC(b)&&this.gav(a)===r.gav(b)}else s=!1}else s=!1
return s},
gD:function(a){var s,r=a.left
r.toString
r=C.d.gD(r)
s=a.top
s.toString
return W.kT(r,C.d.gD(s),C.d.gD(this.gaC(a)),C.d.gD(this.gav(a)))},
gcY:function(a){var s=a.bottom
s.toString
return s},
gcB:function(a){return a.height},
gav:function(a){var s=this.gcB(a)
s.toString
return s},
gbi:function(a){var s=a.left
s.toString
return s},
gcb:function(a){var s=a.right
s.toString
return s},
gbn:function(a){var s=a.top
s.toString
return s},
gcO:function(a){return a.width},
gaC:function(a){var s=this.gcO(a)
s.toString
return s},
$ia8:1}
W.dw.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.hk.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.f_.prototype={
gdi:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
p:function(a,b){this.a.appendChild(b).toString
return b},
gM:function(a){var s=this.hq(this)
return new J.aa(s,s.length)}}
W.y.prototype={
ga7:function(a){return new W.f6(a)},
gcZ:function(a){var s=a.children
s.toString
return new W.f_(a,s)},
gd_:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a8(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
a9:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kp
if(s==null){s=[]
r=new W.cy(s)
s.push(W.kS(null))
s.push(W.kX())
$.kp=r
d=r}else d=s
s=$.ko
if(s==null){s=new W.fQ(d)
$.ko=s
c=s}else{s.a=d
c=s}}if($.aO==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aO=r
r=r.createRange()
r.toString
$.jI=r
r=$.aO.createElement("base")
t.w.a(r)
s=s.baseURI
s.toString
r.href=s
$.aO.head.appendChild(r).toString}s=$.aO
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aO
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aO.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.v(C.P,s)}else s=!1
if(s){$.jI.selectNodeContents(q)
s=$.jI
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aO.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aO.body)J.kf(q)
c.cg(p)
document.adoptNode(p).toString
return p},
fQ:function(a,b,c){return this.a9(a,b,c,null)},
dH:function(a,b){var s
a.textContent=null
s=a.appendChild(this.a9(a,b,null,null))
s.toString},
gdB:function(a){var s=a.tagName
s.toString
return s},
$iy:1}
W.hn.prototype={
$1:function(a){return t.h.b(a)},
$S:20}
W.i.prototype={$ii:1}
W.b.prototype={
fG:function(a,b,c,d){if(c!=null)this.e3(a,b,c,!1)},
e3:function(a,b,c,d){return a.addEventListener(b,H.bW(c,1),!1)},
$ib:1}
W.aw.prototype={$iaw:1}
W.dy.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.dz.prototype={
gl:function(a){return a.length}}
W.dB.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.hA.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.be.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.bg.prototype={$ibg:1}
W.hL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.i1.prototype={
gl:function(a){return a.length}}
W.dU.prototype={
h:function(a,b){return P.b0(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b0(s.value[1]))}},
gZ:function(a){var s=[]
this.C(a,new W.i2(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iT:1}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dV.prototype={
h:function(a,b){return P.b0(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b0(s.value[1]))}},
gZ:function(a){var s=[]
this.C(a,new W.i3(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iT:1}
W.i3.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aA.prototype={$iaA:1}
W.dW.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ab.prototype={$iab:1}
W.a2.prototype={
gaD:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jR("No elements"))
if(r>1)throw H.c(P.jR("More than one element"))
s=s.firstChild
s.toString
return s},
a6:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gM:function(a){var s=this.a.childNodes
return new W.cd(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.r.prototype={
hh:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
hl:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lH(s,b,a)}catch(q){H.aL(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dL(a):s},
fj:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cx.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aC.prototype={
gl:function(a){return a.length},
$iaC:1}
W.e9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ed.prototype={
h:function(a,b){return P.b0(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b0(s.value[1]))}},
gZ:function(a){var s=[]
this.C(a,new W.ig(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iT:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ef.prototype={
gl:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.ej.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aE.prototype={$iaE:1}
W.ek.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aF.prototype={
gl:function(a){return a.length},
$iaF:1}
W.eo.prototype={
h:function(a,b){return a.getItem(H.jm(b))},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gZ:function(a){var s=[]
this.C(a,new W.ir(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iT:1}
W.ir.prototype={
$2:function(a,b){return this.a.push(a)},
$S:37}
W.ah.prototype={$iah:1}
W.cG.prototype={
a9:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bs(a,b,c,d)
s=W.lY("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a2(r).a6(0,new W.a2(s))
return r}}
W.es.prototype={
a9:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bs(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a2(C.v.a9(r,b,c,d))
r=new W.a2(r.gaD(r))
new W.a2(s).a6(0,new W.a2(r.gaD(r)))
return s}}
W.et.prototype={
a9:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bs(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a2(C.v.a9(r,b,c,d))
new W.a2(s).a6(0,new W.a2(r.gaD(r)))
return s}}
W.bN.prototype={$ibN:1}
W.ap.prototype={$iap:1}
W.ac.prototype={$iac:1}
W.ev.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ew.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.iw.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aG.prototype={$iaG:1}
W.bn.prototype={$ibn:1}
W.eA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.iB.prototype={
gl:function(a){return a.length}}
W.aI.prototype={}
W.iO.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eU.prototype={
gl:function(a){return a.length}}
W.aX.prototype={
gfT:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.x("deltaY is not supported"))},
gfS:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.x("deltaX is not supported"))},
$iaX:1}
W.bQ.prototype={
fk:function(a,b){var s=a.requestAnimationFrame(H.bW(b,1))
s.toString
return s},
ef:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bR.prototype={$ibR:1}
W.f0.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.cO.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
s=r+H.u(s)+") "
r=a.width
r.toString
r=s+H.u(r)+" x "
s=a.height
s.toString
return r+H.u(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.b1(b)
if(s===r.gbi(b)){s=a.top
s.toString
if(s===r.gbn(b)){s=a.width
s.toString
if(s===r.gaC(b)){s=a.height
s.toString
r=s===r.gav(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gD:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gD(p)
s=a.top
s.toString
s=C.d.gD(s)
r=a.width
r.toString
r=C.d.gD(r)
q=a.height
q.toString
return W.kT(p,s,r,C.d.gD(q))},
gcB:function(a){return a.height},
gav:function(a){var s=a.height
s.toString
return s},
gcO:function(a){return a.width},
gaC:function(a){var s=a.width
s.toString
return s}}
W.fe.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.cS.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.fy.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.fF.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.eY.prototype={
C:function(a,b){var s,r,q,p,o
for(s=this.gZ(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.jm(q.getAttribute(o)))}},
gZ:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.f6.prototype={
h:function(a,b){return this.a.getAttribute(H.jm(b))},
gl:function(a){return this.gZ(this).length}}
W.jJ.prototype={}
W.f9.prototype={}
W.j5.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.jW.prototype={}
W.bS.prototype={
dT:function(a){var s
if($.ff.a===0){for(s=0;s<262;++s)$.ff.m(0,C.O[s],W.nX())
for(s=0;s<12;++s)$.ff.m(0,C.j[s],W.nY())}},
aM:function(a){return $.lE().v(0,W.cb(a))},
ai:function(a,b,c){var s=$.ff.h(0,W.cb(a)+"::"+b)
if(s==null)s=$.ff.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaB:1}
W.G.prototype={
gM:function(a){return new W.cd(a,this.gl(a))}}
W.cy.prototype={
aM:function(a){return C.a.cT(this.a,new W.i6(a))},
ai:function(a,b,c){return C.a.cT(this.a,new W.i5(a,b,c))},
$iaB:1}
W.i6.prototype={
$1:function(a){return a.aM(this.a)},
$S:19}
W.i5.prototype={
$1:function(a){return a.ai(this.a,this.b,this.c)},
$S:19}
W.cY.prototype={
dY:function(a,b,c,d){var s,r,q
this.a.a6(0,c)
s=b.bp(0,new W.jd())
r=b.bp(0,new W.je())
this.b.a6(0,s)
q=this.c
q.a6(0,C.Q)
q.a6(0,r)},
aM:function(a){return this.a.v(0,W.cb(a))},
ai:function(a,b,c){var s=this,r=W.cb(a),q=s.c
if(q.v(0,r+"::"+b))return s.d.fI(c)
else if(q.v(0,"*::"+b))return s.d.fI(c)
else{q=s.b
if(q.v(0,r+"::"+b))return!0
else if(q.v(0,"*::"+b))return!0
else if(q.v(0,r+"::*"))return!0
else if(q.v(0,"*::*"))return!0}return!1},
$iaB:1}
W.jd.prototype={
$1:function(a){return!C.a.v(C.j,a)},
$S:21}
W.je.prototype={
$1:function(a){return C.a.v(C.j,a)},
$S:21}
W.fH.prototype={
ai:function(a,b,c){if(this.dO(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.v(0,b)
return!1}}
W.jf.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:47}
W.fG.prototype={
aM:function(a){var s
if(t.l.b(a))return!1
s=t.u.b(a)
if(s&&W.cb(a)==="foreignObject")return!1
if(s)return!0
return!1},
ai:function(a,b,c){if(b==="is"||C.b.br(b,"on"))return!1
return this.aM(a)},
$iaB:1}
W.cd.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lG(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gw:function(a){return H.W(this).c.a(this.d)}}
W.jc.prototype={}
W.fQ.prototype={
cg:function(a){var s,r=new W.jj(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
b0:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.kf(a)
else b.removeChild(a).toString},
fn:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.lK(a)
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
o=p}l=o}catch(n){H.aL(n)}r="element unprintable"
try{r=J.di(a)}catch(n){H.aL(n)}try{q=W.cb(a)
this.fm(a,b,l,r,q,k,j)}catch(n){if(H.aL(n) instanceof P.aj)throw n
else{this.b0(a,b)
p=window
p.toString
p="Removing corrupted element "+H.u(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
fm:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b0(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aM(a)){m.b0(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.u(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.ai(a,"is",g)){m.b0(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.gZ(f).slice(0)
for(p=f.gZ(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.lN(o)
H.jm(o)
if(!r.ai(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.u(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.m.b(a)){s=a.content
s.toString
m.cg(s)}}}
W.jj.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.fn(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.b0(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.jR("Corrupt HTML")
throw H.c(n)}}catch(p){H.aL(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:49}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fv.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fC.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
P.jn.prototype={
$1:function(a){this.a.push(P.l5(a))},
$S:32}
P.jt.prototype={
$2:function(a,b){this.a[a]=P.l5(b)},
$S:30}
P.dA.prototype={
gaZ:function(){return new H.bi(new H.bs(this.b,new P.hw()),new P.hx())},
C:function(a,b){C.a.C(P.hK(this.gaZ(),!1),b)},
m:function(a,b,c){var s=this.gaZ()
J.lM(s.b.$1(J.h1(s.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.b6(this.gaZ().a)},
h:function(a,b){var s=this.gaZ()
return s.b.$1(J.h1(s.a,b))},
gM:function(a){var s=P.hK(this.gaZ(),!1)
return new J.aa(s,s.length)}}
P.hw.prototype={
$1:function(a){return t.h.b(a)},
$S:20}
P.hx.prototype={
$1:function(a){return t.h.a(a)},
$S:31}
P.fu.prototype={
gcb:function(a){return this.$ti.c.a(this.a+this.c)},
gcY:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.b1(b)
if(s===r.gbi(b)){q=o.b
if(q===r.gbn(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcb(b)&&p.a(q+o.d)===r.gcY(b)}else s=!1}else s=!1}else s=!1
return s},
gD:function(a){var s=this,r=s.a,q=C.c.gD(r),p=s.b,o=C.c.gD(p),n=s.$ti.c
r=C.c.gD(n.a(r+s.c))
p=C.c.gD(n.a(p+s.d))
return H.mr(H.is(H.is(H.is(H.is(0,q),o),r),p))}}
P.a8.prototype={
gbi:function(a){return this.a},
gbn:function(a){return this.b},
gaC:function(a){return this.c},
gav:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.dN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bk.prototype={$ibk:1}
P.e3.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.i9.prototype={
gl:function(a){return a.length}}
P.bL.prototype={$ibL:1}
P.er.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gcZ:function(a){return new P.dA(a,new W.a2(a))},
a9:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.kS(null))
o.push(W.kX())
o.push(new W.fG())
c=new W.fQ(new W.cy(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.fQ(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a2(q)
p=r.gaD(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ik:1}
P.bo.prototype={$ibo:1}
P.eB.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fi.prototype={}
P.fj.prototype={}
P.fq.prototype={}
P.fr.prototype={}
P.fD.prototype={}
P.fE.prototype={}
P.fM.prototype={}
P.fN.prototype={}
P.h7.prototype={
gl:function(a){return a.length}}
P.dm.prototype={
h:function(a,b){return P.b0(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b0(s.value[1]))}},
gZ:function(a){var s=[]
this.C(a,new P.h8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iT:1}
P.h8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dn.prototype={
gl:function(a){return a.length}}
P.aN.prototype={}
P.e4.prototype={
gl:function(a){return a.length}}
P.eZ.prototype={}
P.cD.prototype={$icD:1}
P.el.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=P.b0(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fz.prototype={}
P.fA.prototype={}
K.aM.prototype={
ax:function(a,b){return!0},
i:function(a){return"all"}}
K.dD.prototype={
ax:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].ax(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a6.prototype={
ax:function(a,b){return!this.dK(0,b)},
i:function(a){return"!["+this.bt(0)+"]"}}
K.ia.prototype={
ax:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.jP(this.a),r=H.jP(this.b)
return s+".."+r}}
K.p.prototype={
n:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.e("May not create a Set with zero characters."))
s=new H.S(t.J)
for(r=new H.aU(a,a.gl(a)),q=H.W(r).c;r.t();)s.m(0,q.a(r.d),!0)
p=P.hK(new H.aT(s),!0)
C.a.dJ(p)
this.a=p},
ax:function(a,b){return C.a.v(this.a,b)},
i:function(a){return P.jS(this.a)}}
L.em.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iC(this.a.j(0,b),[])
s.push(p)
return p},
fW:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.ax(0,a))return p}return null},
i:function(a){return this.b},
cM:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.v(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aT(s.c)
s=J.ar(s==null?[]:s)
for(;s.t();){r=s.gw(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.v(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bt(0))}return l.charCodeAt(0)==0?l:l}}
L.ey.prototype={
i:function(a){var s=H.kc(this.b,"\n","\\n"),r=H.kc(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ez.prototype={
az:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.iy.prototype={
j:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.em(this,b,[])
s.m(0,b,r)}return r},
K:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.ez(a,P.N(s,s))
r.m(0,a,q)}return q},
cd:function(a){return this.ht(a)},
ht:function(a){var s=this
return P.ne(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cd(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.W(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.a.c8(a1,0)
else{if(!r.t()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=c==null
f=g?null:c.fW(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.jS(a0)
throw H.c(P.e("Untokenizable string [state: "+H.u(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.f(P.x("removeRange"))
P.jQ(0,i,a0.length)
a0.splice(0,i-0)
C.a.a6(a1,a0)
a0=[]
b=[]
c=s.d
q=!m.v(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(h)
c=f.b
g=c.d
if(g!=null){e=P.jS(b)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.ey(d==null?g.b:d,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.v(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mD()
case 1:return P.mE(o)}}},t.s)},
i:function(a){var s,r,q=new P.aW(""),p=this.d
if(p!=null)q.a=""+(p.cM()+"\n")
for(p=this.a,p=p.ghu(p),p=new H.cp(J.ar(p.a),p.b),s=H.W(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.u(r==null?null:r.cM())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iC.prototype={
i:function(a){return this.b.b+": "+this.bt(0)}}
O.bA.prototype={
ci:function(a,b,c){this.b=b
this.c=a},
b5:function(a,b){return this.ci(a,null,b)},
f1:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dS:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.aa(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
p:function(a,b){var s,r
if(this.f1([b])){s=this.a
r=s.length
s.push(b)
this.dS(r,[b])}},
$ih:1}
O.ct.prototype={
gl:function(a){return this.a.length},
gu:function(){var s=this.b
return s==null?this.b=D.H():s},
aF:function(){var s=this.b
return s==null?null:s.F(null)},
gU:function(a){var s=this.a
if(s.length>0)return C.a.gbh(s)
else return V.an()},
dw:function(a){this.a.push(a)
this.aF()},
c7:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
E.h9.prototype={}
E.bB.prototype={
scj:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gu().N(0,s.gds())
if(b!=null)b.gu().p(0,s.gds())
s.bk(new D.B("shape",r,b))}},
al:function(a,b){var s,r
for(s=this.y.a,s=new J.aa(s,s.length),r=H.W(s).c;s.t();)r.a(s.d).al(0,b)},
aS:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.gU(o))
o.aF()
a.dz(p.f)
s=C.a.gbh(a.dy)
if(p.d!=null)if(s!=null)s.hk(a,p)
for(r=p.y.a,r=new J.aa(r,r.length),q=H.W(r).c;r.t();)q.a(r.d).aS(a)
a.dv()
o.c7()},
bk:function(a){var s=this.z
return s==null?null:s.F(a)},
a0:function(){return this.bk(null)},
dt:function(a){this.e=null
this.bk(a)},
h9:function(){return this.dt(null)},
dr:function(a){return this.bk(a)},
h6:function(){return this.dr(null)},
h5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdq(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bC()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a0()},
h8:function(a,b){var s,r
for(s=b.gM(b),r=this.gdq();s.t();)s.gw(s).gu().N(0,r)
this.a0()},
i:function(a){return"Unnamed entity"}}
E.bz.prototype={
i:function(a){return this.b}}
E.bJ.prototype={
i:function(a){return this.b}}
E.f7.prototype={}
E.ib.prototype={
dR:function(a,b){var s=this
s.cy.gu().p(0,new E.ic(s))
s.db.gu().p(0,new E.id(s))
s.dx.gu().p(0,new E.ie(s))},
ghg:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gU(q).H(0,s.gU(s))
q=s}return q},
dz:function(a){var s=this.dy
return s.push(a==null?C.a.gbh(s):a)},
dv:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.ic.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.id.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.ie.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.ex.prototype={
cp:function(a){this.dA()},
co:function(){return this.cp(null)},
gfZ:function(){var s,r=this,q=Date.now(),p=C.c.V(P.kn(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.R(q,!1)
return s/p},
cH:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.df(r*o)
r=s.clientHeight
r.toString
p=C.d.df(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kG(C.i,this.ghm())}},
dA:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.ef(s)
r=W.la(new E.iv(this),t.H)
r.toString
C.x.fk(s,r)}},
hj:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cH()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.R(p,!1)
q.y=P.kn(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aF()
p=q.db
C.a.sl(p.a,0)
p.aF()
p=q.dx
C.a.sl(p.a,0)
p.aF()
p=q.dy
C.a.sl(p,0)
p.push(null)
m.aS(q)}q=n.Q
if(q!=null)q.F(null)}catch(o){s=H.aL(o)
r=H.k8(o)
P.kb("Error: "+H.u(s))
P.kb("Stack: "+H.u(r))
throw H.c(s)}}}
E.iv.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hj()}},
$S:24}
Z.eV.prototype={}
Z.c1.prototype={
bd:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aL(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.u(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.j0.prototype={}
Z.c2.prototype={
aQ:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bd:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bd(a)}},
dD:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aS:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cB(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(m,", ")+"\nAttrs:   "+C.a.k(o,", ")}}
Z.hD.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cB(this.c)+"'")+"]"}}
Z.br.prototype={
gck:function(a){var s=this.a,r=(s&$.b5().a)!==0?3:0
if((s&$.b4().a)!==0)r+=3
if((s&$.b3().a)!==0)r+=3
if((s&$.bv().a)!==0)r+=2
if((s&$.bw().a)!==0)r+=3
if((s&$.dg().a)!==0)r+=3
if((s&$.dh().a)!==0)r+=4
if((s&$.c_().a)!==0)++r
return(s&$.b2().a)!==0?r+4:r},
fJ:function(a){var s,r=$.b5(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b3()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b2()
if((q&r.a)!==0)if(s===a)return r
return $.lD()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.br))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.b5().a)!==0)s.push("Pos")
if((r&$.b4().a)!==0)s.push("Norm")
if((r&$.b3().a)!==0)s.push("Binm")
if((r&$.bv().a)!==0)s.push("Txt2D")
if((r&$.bw().a)!==0)s.push("TxtCube")
if((r&$.dg().a)!==0)s.push("Clr3")
if((r&$.dh().a)!==0)s.push("Clr4")
if((r&$.c_().a)!==0)s.push("Weight")
if((r&$.b2().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.hb.prototype={}
D.bC.prototype={
p:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
N:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.v(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.N(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.v(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.N(p,b)
s=p===!0||s}return s},
F:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.P():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.C(P.hK(p,!0),new D.ht(s))
r=q.b
if(r!=null){q.b=[]
C.a.C(r,new D.hu(s))}return!0},
aA:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.F(s)}}}}
D.ht.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.hu.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.P.prototype={}
D.aQ.prototype={}
D.aR.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.u(this.d)+" => "+H.u(this.e)}}
X.c3.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c3))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dL.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hH.prototype={}
X.cn.prototype={}
X.hM.prototype={
aY:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gaO()
s=$.a7
if(s==null)s=$.a7=new V.a1(0,0)
r=q.x
q.z=new P.R(p,!1)
q.x=n
return new X.bG(a,s,r,o,n)},
c6:function(a,b){this.r=a.a
return!1},
b3:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.F(this.aY(a,b))
return!0},
hd:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaO()
r=this.x
Date.now()
q.F(new X.bH(new V.Y(a.a,a.b),s,r))
return!0},
eR:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.F(new X.cn(c,q.a.gaO(),b))
q.y=new P.R(s,!1)
s=$.a7
q.x=s==null?$.a7=new V.a1(0,0):s}}
X.a_.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a_))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.k(s,"+")}}
X.bG.prototype={}
X.i4.prototype={
bA:function(a,b,c){var s=this,r=new P.R(Date.now(),!1),q=s.a.gaO(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bG(a,p,o,q,b)},
c6:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.F(this.bA(a,b,!0))
return!0},
b3:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.F(r.bA(a,b,!0))
return!0},
b2:function(a,b){var s=this.d
if(s==null)return!1
s.F(this.bA(a,b,!1))
return!0},
he:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaO()
Date.now()
r.F(new X.bH(new V.Y(a.a,a.b),s,b))
return!0},
gd3:function(){var s=this.b
return s==null?this.b=D.H():s},
gce:function(){var s=this.c
return s==null?this.c=D.H():s},
gdm:function(){var s=this.d
return s==null?this.d=D.H():s}}
X.bH.prototype={}
X.ea.prototype={}
X.cH.prototype={}
X.iA.prototype={
aY:function(a,b){var s,r,q,p,o=this,n=new P.R(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a7
if(r==null){r=new V.a1(0,0)
$.a7=r
s=r}else s=r}r=o.a.gaO()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cH(q,p,r,s)},
hc:function(a){var s=this.b
if(s==null)return!1
s.F(this.aY(a,!0))
return!0},
ha:function(a){var s=this.c
if(s==null)return!1
s.F(this.aY(a,!0))
return!0},
hb:function(a){var s=this.d
if(s==null)return!1
s.F(this.aY(a,!1))
return!0}}
X.eS.prototype={
gaR:function(a){var s=this.b
return s==null?this.b=new X.hH(new X.a_(!1,!1,!1),P.ck(t.S)):s},
gX:function(){var s,r=this.c
if(r==null){r=$.a7
if(r==null){r=$.a7=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.i4(this,r,s,new P.R(Date.now(),!1),new P.R(Date.now(),!1))}return r},
gaa:function(){var s=this.d
if(s==null){s=$.a7
if(s==null)s=$.a7=new V.a1(0,0)
s=this.d=new X.hM(this,s,new P.R(Date.now(),!1),new P.R(Date.now(),!1))}return s},
gaT:function(){var s,r=this.e
if(r==null){r=$.a7
if(r==null){r=$.a7=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.iA(this,r,s,new P.R(Date.now(),!1),new P.R(Date.now(),!1))}return r},
gaO:function(){var s=this.a
return V.kz(0,0,C.h.gd_(s).c,C.h.gd_(s).d)},
cw:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dL(p,new X.a_(s,r,q))},
aK:function(a){var s,r,q=this.gaR(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a_(p,s,r)},
bM:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaR(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a_(s,r===!0,q===!0)},
as:function(a){var s,r,q,p
if(a==null){s=$.a7
return s==null?$.a7=new V.a1(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a1(r-p,q-s)},
b_:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.Y(r,s)},
bK:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ae(n)
m=o.pageY
m.toString
C.d.ae(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ae(l)
l=o.pageY
l.toString
l=C.d.ae(l)
k=j.top
k.toString
s.push(new V.a1(n-m,l-k))}return s},
ap:function(a){var s,r,q,p
if(a==null)return new X.c3(0,new X.a_(!1,!1,!1))
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
return new X.c3(s,new X.a_(r,q,p))},
bB:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eL:function(a){return this.f=!0},
ey:function(a){return this.f=!1},
eF:function(a){if(this.f&&this.bB(a))a.preventDefault()},
eP:function(a){var s,r,q=this
if(!q.f)return
s=q.cw(a)
r=q.gaR(q)
r.c=s.b
r.d.p(0,s.a)},
eN:function(a){var s,r,q=this
if(!q.f)return
s=q.cw(a)
r=q.gaR(q)
r.c=s.b
r.d.N(0,s.a)},
eT:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.ap(a)
r=p.b_(a)
if(p.gaa().c6(s,r))a.preventDefault()
return}s=p.ap(a)
q=p.as(a)
if(p.gX().c6(s,q))a.preventDefault()},
eX:function(a){var s,r,q,p=this
p.aK(a)
s=p.ap(a)
if(p.x){r=p.b_(a)
if(p.gaa().b3(s,r))a.preventDefault()
return}q=p.as(a)
if(p.gX().b3(s,q))a.preventDefault()},
eJ:function(a){var s,r,q,p=this
if(!p.bB(a)){p.aK(a)
s=p.ap(a)
if(p.x){r=p.b_(a)
if(p.gaa().b3(s,r))a.preventDefault()
return}q=p.as(a)
if(p.gX().b3(s,q))a.preventDefault()}},
eV:function(a){var s,r,q,p=this
p.aK(a)
s=p.ap(a)
if(p.x){r=p.b_(a)
if(p.gaa().b2(s,r))a.preventDefault()
return}q=p.as(a)
if(p.gX().b2(s,q))a.preventDefault()},
eH:function(a){var s,r,q,p=this
if(!p.bB(a)){p.aK(a)
s=p.ap(a)
if(p.x){r=p.b_(a)
if(p.gaa().b2(s,r))a.preventDefault()
return}q=p.as(a)
if(p.gX().b2(s,q))a.preventDefault()}},
eZ:function(a){var s,r,q=this
q.aK(a)
s=new V.Y(C.w.gfS(a),C.w.gfT(a)).H(0,q.Q)
if(q.x){if(q.gaa().hd(s))a.preventDefault()
return}r=q.as(a)
if(q.gX().he(s,r))a.preventDefault()},
f0:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ap(q.y)
r=q.as(q.y)
q.gaa().eR(s,r,p)}},
fd:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bM(a)
s=r.bK(a)
if(r.gaT().hc(s))a.preventDefault()},
f9:function(a){var s
this.bM(a)
s=this.bK(a)
if(this.gaT().ha(s))a.preventDefault()},
fb:function(a){var s
this.bM(a)
s=this.bK(a)
if(this.gaT().hb(s))a.preventDefault()}}
D.c6.prototype={
an:function(a){var s=this.r
return s==null?null:s.F(a)},
dW:function(){return this.an(null)},
$ici:1}
D.cj.prototype={
gu:function(){var s=this.y
return s==null?this.y=D.H():s},
gdk:function(){var s=this.z
return s==null?this.z=D.H():s},
an:function(a){var s=this.y
return s==null?null:s.F(a)},
cE:function(a){var s=this.z
return s==null?null:s.F(a)},
eQ:function(){return this.cE(null)},
f3:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.dU(a[r]))return!1
return!0},
er:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcD(),q=this.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bC()
m=n.a;(m==null?n.a=[]:m).push(r)}this.an(new D.aQ())},
f7:function(a,b){var s,r,q,p
for(s=b.gM(b),r=this.gcD(),q=this.e;s.t();){p=s.gw(s)
C.a.N(q,p)
p.gu().N(0,r)}this.an(new D.aR())},
dU:function(a){var s=C.a.v(this.f,a)
return s}}
V.O.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.bb.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bb))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"},
A:function(){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.hr.prototype={}
V.cs.prototype={
a1:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cs))return!1
s=b.a
$.A().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bY([o.a,o.d,o.r],3,0),m=V.bY([o.b,o.e,o.x],3,0),l=V.bY([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.d(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.d(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.d(n,1)
p=" "+n[1]+", "
if(1>=r)return H.d(m,1)
p=p+m[1]+", "
if(1>=q)return H.d(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.d(n,2)
k=" "+n[2]+", "
if(2>=r)return H.d(m,2)
k=k+m[2]+", "
if(2>=q)return H.d(l,2)
return p+(k+l[2]+"]")}}
V.bF.prototype={
a1:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
dh:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.an()
s=1/b3
r=-l
q=-a2
return V.az((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
H:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.az(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bo:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.E(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b4:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.X(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bF))return!1
s=b.a
$.A().toString
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
i:function(a){return this.A()},
I:function(a){var s,r,q,p,o,n=this,m=V.bY([n.a,n.e,n.y,n.cx],3,0),l=V.bY([n.b,n.f,n.z,n.cy],3,0),k=V.bY([n.c,n.r,n.Q,n.db],3,0),j=V.bY([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
A:function(){return this.I("")}}
V.a1.prototype={
a2:function(a){return new V.Y(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"},
A:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.X.prototype={
S:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
aE:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.X))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
A:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.ec.prototype={
gak:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ec))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.Y.prototype={
c1:function(a){return Math.sqrt(this.W(this))},
W:function(a){return this.a*a.a+this.b*a.b},
H:function(a,b){return new V.Y(this.a*b,this.b*b)},
a4:function(a,b){var s
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.bq
return s==null?$.bq=new V.Y(0,0):s}return new V.Y(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.E.prototype={
c1:function(a){return Math.sqrt(this.W(this))},
W:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
J:function(){var s=this,r=Math.sqrt(s.W(s))
if(r===1)return s
return s.a4(0,r)},
au:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
S:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
aV:function(a){return new V.E(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.E(this.a*b,this.b*b,this.c*b)},
a4:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.cM()
return new V.E(this.a/b,this.b/b,this.c/b)},
dj:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"},
A:function(){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.hc.prototype={
bu:function(a){var s=V.of(a,this.c,this.b)
return s},
gu:function(){var s=this.y
return s==null?this.y=D.H():s},
L:function(a){var s=this.y
return s==null?null:s.F(a)},
scf:function(a,b){},
sc3:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bu(s)}r.L(new D.B("maximumLocation",q,r.b))}},
sc5:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bu(s)}r.L(new D.B("minimumLocation",q,r.c))}},
sa_:function(a,b){var s,r=this
b=r.bu(b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.L(new D.B("location",s,b))}},
sc4:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.L(new D.B("maximumVelocity",p,a))}},
sT:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.L(new D.B("velocity",r,a))}},
sbS:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.L(new D.B("dampening",s,a))}},
al:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa_(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sT(s)}}}
U.c4.prototype={
gu:function(){var s=this.b
return s==null?this.b=D.H():s},
aU:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bD.prototype={
gu:function(){var s=this.e
return s==null?this.e=D.H():s},
L:function(a){var s=this.e
return s==null?null:s.F(a)},
Y:function(){return this.L(null)},
ep:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaG(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p!=null){o=p.gu()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.L(new D.aQ())},
f5:function(a,b){var s,r
for(s=b.gM(b),r=this.gaG();s.t();)s.gw(s).gu().N(0,r)
this.L(new D.aR())},
aU:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.aa(o,o.length),n=H.W(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aU(0,b,c)
s=s==null?q:q.H(0,s)}}p.f=s==null?V.an():s
o=p.e
if(o!=null)o.aA(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bD))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.Q(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia0:1}
U.a0.prototype={}
U.cJ.prototype={
gu:function(){var s=this.cy
return s==null?this.cy=D.H():s},
L:function(a){var s=this.cy
return s==null?null:s.F(a)},
Y:function(){return this.L(null)},
b1:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gX().gd3().p(0,s.gbC())
a.gX().gdm().p(0,s.gbE())
a.gX().gce().p(0,s.gbG())
return!0},
bD:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gaR(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bF:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a2(a.d)
if(s.W(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa_(0,-a.y.a2(r).H(0,2).a4(0,s.gak()).a*2.5+p.z)
q.sT(0)
p.Q=a.z.a2(r).H(0,2).a4(0,s.gak())
p.Y()},
bH:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.W(s)>0.0001){r.b.sT(r.Q.a*10*2.5)
r.Y()}},
aU:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.al(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.az(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia0:1}
U.cK.prototype={
gu:function(){var s=this.fx
return s==null?this.fx=D.H():s},
L:function(a){var s=this.fx
return s==null?null:s.F(a)},
Y:function(){return this.L(null)},
b1:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gX().gd3().p(0,q.gbC())
a.gX().gdm().p(0,q.gbE())
a.gX().gce().p(0,q.gbG())
s=a.gaa()
r=s.f
s=r==null?s.f=D.H():r
s.p(0,q.geh())
s=a.gaa()
r=s.d
s=r==null?s.d=D.H():r
s.p(0,q.gej())
s=a.gaT()
r=s.b
s=r==null?s.b=D.H():r
s.p(0,q.gfD())
s=a.gaT()
r=s.d
s=r==null?s.d=D.H():r
s.p(0,q.gfB())
s=a.gaT()
r=s.c
s=r==null?s.c=D.H():r
s.p(0,q.gfz())
return!0},
aJ:function(a){var s=a.b
if(this.r)s=-s
return new V.Y(a.a,s)},
bD:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bF:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a2(a.d)
if(s.W(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aJ(a.y.a2(r).H(0,2).a4(0,s.gak()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sT(0)
p.sT(0)
n.dx=n.aJ(a.z.a2(r).H(0,2).a4(0,s.gak()))
n.Y()},
bH:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.W(s)>0.0001){r.c.sT(-r.dx.a*10*2.5)
r.b.sT(-r.dx.b*10*2.5)
r.Y()}},
ei:function(a){var s=this
if(t.d.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ek:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aJ(a.y.a2(r).H(0,2).a4(0,s.gak()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sT(0)
p.sT(0)
n.dx=n.aJ(a.z.a2(r).H(0,2).a4(0,s.gak()))
n.Y()},
fE:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fC:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a2(a.d)
if(s.W(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aJ(a.y.a2(r).H(0,2).a4(0,s.gak()))
p=n.c
p.sa_(0,-q.a*2.5+n.cy)
o=n.b
o.sa_(0,-q.b*2.5+n.db)
o.sT(0)
p.sT(0)
n.dx=n.aJ(a.z.a2(r).H(0,2).a4(0,s.gak()))
n.Y()},
fA:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.W(s)>0.0001){r.c.sT(-r.dx.a*10*2.5)
r.b.sT(-r.dx.b*10*2.5)
r.Y()}},
aU:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.al(0,s)
n=p.b
n.al(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.az(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.H(0,V.az(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
U.cL.prototype={
gu:function(){var s=this.r
return s==null?this.r=D.H():s},
L:function(a){var s=this.r
return s==null?null:s.F(a)},
b1:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gX()
r=s.e
s=r==null?s.e=D.H():r
r=this.gem()
s.p(0,r)
s=a.gaa()
q=s.e;(q==null?s.e=D.H():q).p(0,r)
return!0},
en:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gaR(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.L(new D.B("zoom",r,q))}},
aU:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.az(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia0:1}
M.dx.prototype={
ao:function(a){var s=this.y
return s==null?null:s.F(a)},
dX:function(){return this.ao(null)},
eB:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gag(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bC()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ao(new D.aQ())},
eD:function(a,b){var s,r
for(s=b.gM(b),r=this.gag();s.t();)s.gw(s).gu().N(0,r)
this.ao(new D.aR())},
sdC:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gu().N(0,r.gag())
s=r.d
r.d=a
if(a!=null)a.gu().p(0,r.gag())
r.ao(new D.B("technique",s,r.d))}},
gu:function(){var s=this.y
return s==null?this.y=D.H():s},
aS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dz(d.d)
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
n=C.d.ae(o.a*q)
m=C.d.ae(o.b*p)
l=C.d.ae(o.c*q)
a.c=l
o=C.d.ae(o.d*p)
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
g=V.az(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dw(g)
f=$.lq()
e=s.b
if(e!=null)f=e.aU(0,a,s).H(0,f)
a.db.dw(f)}s=d.d
if(s!=null)s.al(0,a)
for(s=d.e.a,r=new J.aa(s,s.length),o=H.W(r).c;r.t();)o.a(r.d).al(0,a)
for(s=new J.aa(s,s.length),r=H.W(s).c;s.t();)r.a(s.d).aS(a)
if(d.b!=null){a.cy.c7()
a.db.c7()}a.dv()}}
A.h5.prototype={}
A.h6.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fV:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fU:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.al.prototype={
gaf:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.dR.prototype={
dQ:function(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9=null,d0=u.C,d1="Required uniform value, ",d2=", was not defined or used in shader.",d3=c8.x,d4=new P.aW(""),d5=d3.fr
if(d5){s=""+"uniform mat4 objMat;\n"
d4.a=s}else s=""
r=d3.fx
s=(r?d4.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d4.a=s
s+="\n"
d4.a=s
s=d4.a=s+"attribute vec3 posAttr;\n"
q=d3.k4
if(q){s+="attribute vec3 normAttr;\n"
d4.a=s}p=d3.r1
d4.a=(p?d4.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nt(d3,d4)
A.nv(d3,d4)
A.nu(d3,d4)
A.nx(d3,d4)
A.ny(d3,d4)
A.nw(d3,d4)
A.nz(d3,d4)
s=d4.a+="vec4 getPos()\n"
s+="{\n"
d4.a=s
o=d3.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d4.a=s
s+="}\n"
d4.a=s
s+="\n"
d4.a=s
s+="void main()\n"
d4.a=s
s=d4.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d4.a=s}if(q){s+="   normalVec = getNorm();\n"
d4.a=s}if(p){s+="   binormalVec = getBinm();\n"
d4.a=s}if(d3.r2){s+="   txt2D = getTxt2D();\n"
d4.a=s}if(d3.rx){s+="   txtCube = getTxtCube();\n"
d4.a=s}if(d3.k2){s+="   objPos = getObjPos();\n"
d4.a=s}s=(d3.k3?d4.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d4.a=s
s+="}\n"
d4.a=s
s=d4.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.ns(d3)
c8.c=n
c8.d=m
l=c8.cz(n,35633)
k=c8.cz(c8.d,35632)
s=c8.a
q=s.createProgram()
q.toString
c8.e=q
s.attachShader(c8.gaq(),l)
s.attachShader(c8.gaq(),k)
s.linkProgram(c8.gaq())
if(!H.l4(s.getProgramParameter(c8.gaq(),35714))){j=s.getProgramInfoLog(c8.gaq())
if(j==null)j="undefined log error"
s.deleteProgram(c8.e)
H.f(P.e("Failed to link shader: "+j))}c8.ft()
c8.fv()
c8.y=c8.ga7(c8).h(0,"posAttr")
c8.Q=c8.ga7(c8).h(0,"normAttr")
c8.z=c8.ga7(c8).h(0,"binmAttr")
c8.ch=c8.ga7(c8).h(0,"txt2DAttr")
c8.cx=c8.ga7(c8).h(0,"txtCubeAttr")
c8.cy=c8.ga7(c8).h(0,"bendAttr")
if(d3.dy)c8.fy=t.j.a(c8.gP().O(0,"invViewMat"))
if(d5)c8.db=t.j.a(c8.gP().O(0,"objMat"))
if(r)c8.dx=t.j.a(c8.gP().O(0,"viewObjMat"))
d5=t.j
c8.fr=d5.a(c8.gP().O(0,"projViewObjMat"))
if(d3.go)c8.dy=d5.a(c8.gP().O(0,"viewMat"))
if(d3.x1)c8.go=t.Q.a(c8.gP().O(0,"txt2DMat"))
if(d3.x2)c8.id=d5.a(c8.gP().O(0,"txtCubeMat"))
if(d3.y1)c8.k1=d5.a(c8.gP().O(0,"colorMat"))
c8.k3=[]
s=d3.aP
if(s>0){c8.k2=t.v.a(c8.gP().O(0,"bendMatCount"))
for(i=0;i<s;++i){r=c8.k3
h=c8.r
if(h==null)H.f(P.e(d0))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.f(P.e(d1+q+d2))
r.push(d5.a(g))}}if(d3.a.a)c8.k4=t.g.a(c8.gP().O(0,"emissionClr"))
if(d3.b.a)c8.rx=t.g.a(c8.gP().O(0,"ambientClr"))
if(d3.c.a)c8.x2=t.g.a(c8.gP().O(0,"diffuseClr"))
if(d3.d.a)c8.aP=t.g.a(c8.gP().O(0,"invDiffuseClr"))
d5=d3.e.a
if(!d5)s=!1
else s=!0
if(s){c8.d8=t.n.a(c8.gP().O(0,"shininess"))
if(d5)c8.d7=t.g.a(c8.gP().O(0,"specularClr"))}if(d3.db){c8.d9=t.a.a(c8.gP().O(0,"envSampler"))
if(d3.r.a)c8.da=t.g.a(c8.gP().O(0,"reflectClr"))
d5=d3.x.a
if(!d5)s=!1
else s=!0
if(s){c8.dc=t.n.a(c8.gP().O(0,"refraction"))
if(d5)c8.dd=t.g.a(c8.gP().O(0,"refractClr"))}}if(d3.y.a)c8.de=t.n.a(c8.gP().O(0,"alpha"))
if(d3.k1){d5=d3.z
s=d5.length
if(s!==0){r=t.S
c8.bU=P.N(r,t.W)
c8.bV=P.N(r,t.I)
for(r=t.v,q=t.g,p=t.n,f=0;f<d5.length;d5.length===s||(0,H.q)(d5),++f){e=d5[f]
d=e.a
c="barLight"+d
b=[]
for(o=e.b,a=(d&4)!==0,i=0;i<o;++i){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].startPnt"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].endPnt"
a1=h.h(0,a0)
if(a1==null)H.f(P.e(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].color"
a2=h.h(0,a0)
if(a2==null)H.f(P.e(d1+a0+d2))
q.a(a2)
if(a){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].att0"
a3=h.h(0,a0)
if(a3==null)H.f(P.e(d1+a0+d2))
p.a(a3)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].att1"
a4=h.h(0,a0)
if(a4==null)H.f(P.e(d1+a0+d2))
p.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].att2"
a5=h.h(0,a0)
if(a5==null)H.f(P.e(d1+a0+d2))
p.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.eG(g,a1,a2,a8,a7,a6))}c8.bV.m(0,d,b)
o=c8.bU
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.Q
s=d5.length
if(s!==0){r=t.S
c8.bW=P.N(r,t.W)
c8.bX=P.N(r,t.L)
for(r=t.v,q=t.g,p=t.G,f=0;f<d5.length;d5.length===s||(0,H.q)(d5),++f){e=d5[f]
d=e.a
c="dirLight"+d
b=[]
for(o=e.b,a=(d&1)!==0,i=0;i<o;++i){if(a){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].objUp"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].objRight"
a1=h.h(0,a0)
if(a1==null)H.f(P.e(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].objDir"
a2=h.h(0,a0)
if(a2==null)H.f(P.e(d1+a0+d2))
q.a(a2)
a9=a2
b0=a1
b1=g}else{a9=c9
b0=a9
b1=b0}h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].viewDir"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].color"
a1=h.h(0,a0)
if(a1==null)H.f(P.e(d1+a0+d2))
q.a(a1)
if(a){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"sTexture2D"+i
a2=h.h(0,a0)
if(a2==null)H.f(P.e(d1+a0+d2))
p.a(a2)
b2=a2}else b2=c9
b.push(new A.eH(b1,b0,a9,g,a1,b2))}c8.bX.m(0,d,b)
o=c8.bW
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.ch
s=d5.length
if(s!==0){r=t.S
c8.bY=P.N(r,t.W)
c8.bZ=P.N(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,a=t.F,a0=t.n,f=0;f<d5.length;d5.length===s||(0,H.q)(d5),++f){e=d5[f]
d=e.a
c="pointLight"+d
b=[]
for(b3=e.b,b4=(d&4)!==0,b5=(d&2)!==0,b6=(d&1)!==0,b7=(d&3)!==0,i=0;i<b3;++i){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].point"
g=h.h(0,b8)
if(g==null)H.f(P.e(d1+b8+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].viewPnt"
a1=h.h(0,b8)
if(a1==null)H.f(P.e(d1+b8+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].color"
a2=h.h(0,b8)
if(a2==null)H.f(P.e(d1+b8+d2))
q.a(a2)
if(b7){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].invViewRotMat"
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
p.a(a3)
b9=a3}else b9=c9
if(b6){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"sTextureCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
o.a(a3)
b2=a3}else b2=c9
if(b5){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"sShadowCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
o.a(a3)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].shadowAdj"
a4=h.h(0,b8)
if(a4==null)H.f(P.e(d1+b8+d2))
a.a(a4)
c0=a3
c1=a4}else{c0=c9
c1=c0}if(b4){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].att0"
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
a0.a(a3)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].att1"
a4=h.h(0,b8)
if(a4==null)H.f(P.e(d1+b8+d2))
a0.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].att2"
a5=h.h(0,b8)
if(a5==null)H.f(P.e(d1+b8+d2))
a0.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.eK(g,a1,b9,a2,b2,c0,c1,a8,a7,a6))}c8.bZ.m(0,d,b)
b3=c8.bY
h=c8.r
if(h==null)H.f(P.e(d0))
b4=c+"Count"
g=h.h(0,b4)
if(g==null)H.f(P.e(d1+b4+d2))
b3.m(0,d,r.a(g))}}d3=d3.cx
d5=d3.length
if(d5!==0){s=t.S
c8.c_=P.N(s,t.W)
c8.c0=P.N(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,f=0;f<d3.length;d3.length===d5||(0,H.q)(d3),++f){e=d3[f]
d=e.a
c="spotLight"+d
b=[]
for(a=e.b,a0=(d&2)!==0,b3=(d&1)!==0,b4=(d&4)!==0,b5=(d&8)!==0,b6=(d&3)!==0,i=0;i<a;++i){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objPnt"
g=h.h(0,b7)
if(g==null)H.f(P.e(d1+b7+d2))
r.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objDir"
a1=h.h(0,b7)
if(a1==null)H.f(P.e(d1+b7+d2))
r.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].viewPnt"
a2=h.h(0,b7)
if(a2==null)H.f(P.e(d1+b7+d2))
r.a(a2)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].color"
a3=h.h(0,b7)
if(a3==null)H.f(P.e(d1+b7+d2))
r.a(a3)
if(b6){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objUp"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
r.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objRight"
a5=h.h(0,b7)
if(a5==null)H.f(P.e(d1+b7+d2))
r.a(a5)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].tuScalar"
c2=h.h(0,b7)
if(c2==null)H.f(P.e(d1+b7+d2))
q.a(c2)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].tvScalar"
c3=h.h(0,b7)
if(c3==null)H.f(P.e(d1+b7+d2))
q.a(c3)
c4=c3
c5=c2
b0=a5
b1=a4}else{c4=c9
c5=c4
b0=c5
b1=b0}if(a0){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].shadowAdj"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
p.a(a4)
c1=a4}else c1=c9
if(b5){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].cutoff"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].coneAngle"
a5=h.h(0,b7)
if(a5==null)H.f(P.e(d1+b7+d2))
q.a(a5)
c6=a5
c7=a4}else{c6=c9
c7=c6}if(b4){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].att0"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].att1"
a5=h.h(0,b7)
if(a5==null)H.f(P.e(d1+b7+d2))
q.a(a5)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].att2"
c2=h.h(0,b7)
if(c2==null)H.f(P.e(d1+b7+d2))
q.a(c2)
a6=c2
a7=a5
a8=a4}else{a6=c9
a7=a6
a8=a7}if(b3){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"sTexture2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
o.a(a4)
b2=a4}else b2=c9
if(a0){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"sShadow2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
o.a(a4)
c0=a4}else c0=c9
b.push(new A.eN(g,a1,a2,a3,b1,b0,c5,c4,c1,c7,c6,a8,a7,a6,b2,c0))}c8.c0.m(0,d,b)
a=c8.c_
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
a.m(0,d,s.a(g))}}}},
fo:function(a,b){}}
A.b7.prototype={
i:function(a){return"barLight"+this.a}}
A.bc.prototype={
i:function(a){return"dirLight"+this.a}}
A.bl.prototype={
i:function(a){return"pointLight"+this.a}}
A.bm.prototype={
i:function(a){return"spotLight"+this.a}}
A.hQ.prototype={
i:function(a){return this.bf}}
A.eG.prototype={}
A.eH.prototype={}
A.eK.prototype={}
A.eN.prototype={}
A.cE.prototype={
ga7:function(a){var s=this.f
if(s==null)throw H.c(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gP:function(){var s=this.r
if(s==null)throw H.c(P.e(u.C))
return s},
gaq:function(){var s=this.e
if(s==null)throw H.c(P.e(u.F))
return s},
cz:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.l4(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.e('Error compiling shader "'+H.u(q)+'": '+s))}return q},
ft:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.jl(l.getProgramParameter(o.gaq(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.f(P.e(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.f(P.e(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.h5(l,q,p))}o.f=new A.h6(m)},
fv:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.jl(j.getProgramParameter(m.gaq(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.f(P.e(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.f(P.e(l))
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
k.push(m.fR(o,n,q,p))}m.r=new A.iM(k)},
aI:function(a,b,c){var s=this.a
if(a===1)return new A.cI(s,b,c)
else return A.jU(s,this.e,b,a,c)},
ec:function(a,b,c){var s=this.a
if(a===1)return new A.eL(s,b,c)
else return A.jU(s,this.e,b,a,c)},
ed:function(a,b,c){var s=this.a
if(a===1)return new A.eM(s,b,c)
else return A.jU(s,this.e,b,a,c)},
bc:function(a,b){return new P.fa(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fR:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aI(b,c,d)
case 5121:return s.aI(b,c,d)
case 5122:return s.aI(b,c,d)
case 5123:return s.aI(b,c,d)
case 5124:return s.aI(b,c,d)
case 5125:return s.aI(b,c,d)
case 5126:return new A.eD(s.a,c,d)
case 35664:return new A.iI(s.a,c,d)
case 35665:return new A.eE(s.a,c,d)
case 35666:return new A.eF(s.a,c,d)
case 35667:return new A.iJ(s.a,c,d)
case 35668:return new A.iK(s.a,c,d)
case 35669:return new A.iL(s.a,c,d)
case 35674:return new A.iN(s.a,c,d)
case 35675:return new A.eI(s.a,c,d)
case 35676:return new A.eJ(s.a,c,d)
case 35678:return s.ec(b,c,d)
case 35680:return s.ed(b,c,d)
case 35670:throw H.c(s.bc("BOOL",c))
case 35671:throw H.c(s.bc("BOOL_VEC2",c))
case 35672:throw H.c(s.bc("BOOL_VEC3",c))
case 35673:throw H.c(s.bc("BOOL_VEC4",c))
default:throw H.c(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iG.prototype={}
A.iM.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
O:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.A()},
A:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cI.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iJ.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iK.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iL.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iH.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eD.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iI.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eE.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eF.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iN.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eI.prototype={
ad:function(a){var s=new Float32Array(H.d8(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eJ.prototype={
ad:function(a){var s=new Float32Array(H.d8(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eL.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eM.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jF.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)},
$S:34}
F.ju.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.ke(l.$1(m),k)
k=J.ke(l.$1(m+3.141592653589793/n.c),k).aE(0,j)
s=new V.E(k.a,k.b,k.c).J()
r=$.kL
if(r==null){r=new V.E(1,0,0)
$.kL=r}q=s.au(!s.q(0,r)?V.kN():r).J()
r=q.au(s).J()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.H(0,l*k)
k=q.H(0,o*k)
k=j.S(0,new V.X(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.Q(a.f,k)){a.f=k
l=a.a
if(l!=null)l.a0()}},
$S:35}
F.aP.prototype={
b8:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.fp(a)
s.fq(b)
s.fs(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}},
bT:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.N(r.gR().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}}s.fg()
s.fh()
s.fi()},
fp:function(a){this.a=a
a.gR().b.push(this)},
fq:function(a){this.b=a
a.gR().c.push(this)},
fs:function(a){this.c=a
a.gR().d.push(this)},
fg:function(){var s=this.a
if(s!=null)C.a.N(s.gR().b,this)
this.a=null},
fh:function(){var s=this.b
if(s!=null)C.a.N(s.gR().c,this)
this.b=null},
fi:function(){var s=this.c
if(s!=null)C.a.N(s.gR().d,this)
this.c=null},
e6:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cM()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.dj())return p
return q.J()},
e8:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aE(0,n)
q=new V.E(o.a,o.b,o.c).J()
o=r.aE(0,n)
return q.au(new V.E(o.a,o.b,o.c).J()).J()},
bQ:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.e6()
if(s==null){s=q.e8()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
e5:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cM()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.dj())return p
return q.J()},
e7:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.aE(0,e)
o=new V.E(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.aV(0)}else{n=(j-s.b)/p
j=b.aE(0,e).H(0,n).S(0,e).aE(0,h)
o=new V.E(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aV(0)}m=l.d
if(m!=null){m=m.J()
o=m.au(o).J().au(m).J()}return o},
bO:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.e5()
if(s==null){s=q.e7()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
gd0:function(a){var s=this
if(J.Q(s.a,s.b))return!0
if(J.Q(s.b,s.c))return!0
if(J.Q(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gE(p)
p=a+C.b.ay(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gE(o)
p=p+C.b.ay(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gE(o)
s=p+C.b.ay(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.A()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.A()
return s+((p==null?"-":p)+"}")},
A:function(){return this.I("")}}
F.hv.prototype={}
F.iq.prototype={
c2:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gE(q)
s=c.a
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.b
if(q==(s==null?r:s.gE(s))){q=b.c
q=q==null?r:q.gE(q)
s=c.c
q=q==(s==null?r:s.gE(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gE(q)
s=c.b
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.c
if(q==(s==null?r:s.gE(s))){q=b.c
q=q==null?r:q.gE(q)
s=c.a
q=q==(s==null?r:s.gE(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gE(q)
s=c.c
if(q==(s==null?r:s.gE(s))){q=b.b
q=q==null?r:q.gE(q)
s=c.a
if(q==(s==null?r:s.gE(s))){q=b.c
q=q==null?r:q.gE(q)
s=c.b
q=q==(s==null?r:s.gE(s))}else q=!1
return q}else return!1}}}}
F.hI.prototype={}
F.iF.prototype={}
F.ih.prototype={
ga3:function(){var s=this.a
return s==null?this.a=new F.K(this,[]):s},
gbl:function(a){var s=this.b
return s==null?this.b=new F.ij([]):s},
gbj:function(a){var s=this.c
return s==null?this.c=new F.ii(this,[]):s},
gR:function(){var s=this.d
return s==null?this.d=new F.eh(this,[]):s},
gu:function(){var s=this.e
return s==null?this.e=D.H():s},
aN:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gR().aN()||!1
if(!r.ga3().aN())s=!1
q=r.e
if(q!=null)q.aA(0)
return s},
h3:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.ga3().c.slice(0)
for(;s.length!==0;){r=C.a.gfX(s)
C.a.c8(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.c2(0,r,o)){q.push(o)
C.a.c8(s,p)}}if(q.length>1)b.h2(q)}n.ga3().aL()
n.gbj(n).c9()
n.gR().c9()
n.gbl(n).hi()
n.gbj(n).ca(new F.iF())
n.gR().ca(new F.iq())
m=n.e
if(m!=null)m.aA(0)},
fL:function(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.ga3().c.length,c=a0.a,b=(c&$.b5().a)!==0?1:0
if((c&$.b4().a)!==0)++b
if((c&$.b3().a)!==0)++b
if((c&$.bv().a)!==0)++b
if((c&$.bw().a)!==0)++b
if((c&$.dg().a)!==0)++b
if((c&$.dh().a)!==0)++b
if((c&$.c_().a)!==0)++b
if((c&$.b2().a)!==0)++b
s=a0.gck(a0)
r=P.dP(d*s,0,!1)
e.a=0
q=P.m7(b,new F.ik(e,h,a0,s*4,d,s,r))
c=a.a
p=c.createBuffer()
p.toString
c.bindBuffer(f,p)
c.bufferData(f,new Float32Array(H.d8(r)),35044)
c.bindBuffer(f,g)
o=new Z.c2(new Z.eV(f,p),[],q,a0)
h.gbl(h)
h.gbj(h)
if(h.gR().b.length!==0){n=[]
m=0
while(!0){p=h.d
if(p==null){p=h.d=new F.eh(h,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
k=p[m]
p=k.a
if(p==null)p=g
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.K(l,[]):j).aL()}p=p.e}n.push(p==null?0:p)
p=k.b
if(p==null)p=g
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.K(l,[]):j).aL()}p=p.e}n.push(p==null?0:p)
p=k.c
if(p==null)p=g
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.K(l,[]):j).aL()}p=p.e}n.push(p==null?0:p);++m}i=Z.mw(c,34963,n)
o.b.push(new Z.hD(4,n.length,i))}return o},
i:function(a){var s=this,r=[]
if(s.ga3().c.length!==0){r.push("Vertices:")
r.push(s.ga3().I("   "))}s.gbl(s)
s.gbj(s)
if(s.gR().b.length!==0){r.push("Faces:")
r.push(s.gR().I("   "))}return C.a.k(r,"\n")},
a0:function(){var s=this.e
return s==null?null:s.F(null)}}
F.ik.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fJ(a),f=g.gck(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.K(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].h1(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c1(g,f,d*4,h.d)},
$S:48}
F.eh.prototype={
fH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.K(s,[]):l).p(0,k)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,h)
f=new F.aP()
f.b8(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,k)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,h)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,g)
f=new F.aP()
f.b8(k,h,g)
e.push(f)}else{(l==null?s.a=new F.K(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,h)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,g)
f=new F.aP()
f.b8(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,g)
l=s.a;(l==null?s.a=new F.K(s,[]):l).p(0,k)
f=new F.aP()
f.b8(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gl:function(a){return this.b.length},
ca:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.ga3().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.K(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bP([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bP([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.c2(0,n,(q==null?p.d=new F.bP([],[],[]):q).h(0,l))){n.bT()
break}}}}},
c9:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gd0(q))q.bT()}},
aN:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bQ())q=!1
return q},
bP:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bO())q=!1
return q},
i:function(a){return this.A()},
I:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.a.k(p,"\n")},
A:function(){return this.I("")}}
F.ii.prototype={
gl:function(a){return 0},
ca:function(a){var s,r,q,p,o
for(s=this.a,r=s.ga3().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.K(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
if(p.c==null)p.c=new F.eT([],[])
o=-1
for(;!1;--o){q=p.c;(q==null?p.c=new F.eT([],[]):q).h(0,o)}}},
c9:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r]
if(q.gd0(q))q.bT()}},
i:function(a){return this.A()},
I:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.d(s,r)
q.push(s[r].I(a+(""+r+". ")))}return C.a.k(q,"\n")},
A:function(){return this.I("")}}
F.ij.prototype={
gl:function(a){return 0},
hi:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r].ghR()
q=q.gbl(q)
q.gl(q)}},
i:function(a){return this.A()},
I:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].I(a))
return C.a.k(q,"\n")},
A:function(){return this.I("")}}
F.cN.prototype={
d1:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kO(s.cx,p,m,r,q,o,n,a,l)},
gR:function(){var s=this.d
return s==null?this.d=new F.bP([],[],[]):s},
gE:function(a){var s=this.a
if(s!=null)s.ga3().aL()
return this.e},
h1:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.b5())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.b4())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.q(0,$.b3())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.q(0,$.bv())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.q(0,$.bw())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.dg())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.q(0,$.dh())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.q(0,$.c_()))return[o.ch]
else if(a.q(0,$.b2()))return[-1,-1,-1,-1]
else return[]},
bQ:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cM()
p.gR().C(0,new F.j_(o))
p.r=o.a.J()
if(r){s.a0()
o=s.e
if(o!=null)o.aA(0)}return!0},
bO:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cM()
p.gR().C(0,new F.iZ(o))
p.x=o.a.J()
if(r){s.a0()
o=s.e
if(o!=null)o.aA(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
I:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.ay(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.A()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.A()
n.push(s==null?o:s)
n.push(V.z(q.ch,3,0))
n.push(o)
r=C.a.k(n,", ")
return a+"{"+r+"}"},
A:function(){return this.I("")}}
F.j_.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:7}
F.iZ.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:7}
F.K.prototype={
aL:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
p:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a0()
return!0},
cQ:function(a,b){var s=null,r=F.kO(s,s,a,s,s,b,s,s,0)
this.p(0,r)
return r},
gl:function(a){return this.c.length},
aN:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bQ()
return!0},
bP:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bO()
return!0},
fM:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.J()
if(!J.Q(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.F(null)}}}}}return!0},
i:function(a){return this.A()},
I:function(a){var s,r,q,p
this.aL()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].I(a))
return C.a.k(s,"\n")},
A:function(){return this.I("")}}
F.bP.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.d(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.d(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.d(r,b)
return r[b]},
C:function(a,b){var s=this
C.a.C(s.b,b)
C.a.C(s.c,new F.iU(s,b))
C.a.C(s.d,new F.iV(s,b))},
i:function(a){return this.A()},
A:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.a.k(p,"\n")}}
F.iU.prototype={
$1:function(a){if(!J.Q(a.a,this.a))this.b.$1(a)},
$S:7}
F.iV.prototype={
$1:function(a){var s=this.a
if(!J.Q(a.a,s)&&!J.Q(a.b,s))this.b.$1(a)},
$S:7}
F.eT.prototype={
gl:function(a){return 0},
h:function(a,b){var s,r
if(b>=0){s=this.c
r=b-0
if(r>=0)return H.d(s,r)
return s[r]}else{s=this.b
return H.d(s,b)
return s[b]}},
i:function(a){return this.A()},
A:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].I(""))
for(s=this.c,r=0;!1;++r)q.push(s[r].I(""))
return C.a.k(q,"\n")}}
F.iX.prototype={}
F.iW.prototype={
c2:function(a,b,c){return J.Q(b.f,c.f)}}
F.iY.prototype={}
F.i7.prototype={
h2:function(a){var s,r,q,p,o,n=V.cM()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.E(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.J()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.J()
if(!J.Q(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return null}}
O.dQ.prototype={
gu:function(){var s=this.fr
return s==null?this.fr=D.H():s},
a5:function(a){var s=this.fr
return s==null?null:s.F(a)},
ez:function(){return this.a5(null)},
cG:function(a){this.a=null
this.a5(a)},
fl:function(){return this.cG(null)},
eu:function(a,b){return this.a5(new D.aQ())},
ew:function(a,b){return this.a5(new D.aR())},
gdl:function(){var s=this,r=s.dx
if(r==null){r=new D.cj([],[],[],[],[])
r.ci(r.geq(),r.gf2(),r.gf6())
r.gu().p(0,s.gcF())
r.gdk().p(0,s.gcC())
s.dx=r}return r},
gd4:function(){var s=this.f
return s==null?this.f=O.dT(this,"emission"):s},
gcS:function(){var s=this.r
return s==null?this.r=O.dT(this,"ambient"):s},
gd2:function(){var s=this.x
return s==null?this.x=O.dT(this,"diffuse"):s},
gbq:function(){var s=this.z
return s==null?this.z=new O.hT(new V.O(0,0,0),this,"specular",new A.al(!1,!1,!1)):s},
cv:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.S(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaj()
o=a1.h(0,q.gaj())
a1.m(0,p,o==null?1:o)}n=[]
a1.C(0,new O.hU(b,n))
C.a.aX(n,new O.hV())
m=new H.S(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=[]
m.C(0,new O.hW(b,l))
C.a.aX(l,new O.hX())
k=new H.S(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaj()
o=k.h(0,q.gaj())
k.m(0,p,o==null?1:o)}j=[]
k.C(0,new O.hY(b,j))
C.a.aX(j,new O.hZ())
i=new H.S(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaj()
p=i.h(0,q.gaj())
i.m(0,s,p==null?1:p)}h=[]
i.C(0,new O.i_(b,h))
C.a.aX(h,new O.i0())
a0=C.c.V(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hR(new V.bb(0,0,0,0))
a2=b.gd4().c
s=b.gcS().c
p=b.gd2().c
o=b.y
o=(o==null?b.y=O.dT(b,"invDiffuse"):o).c
g=b.gbq().c
f=b.Q
f=(f==null?b.Q=new O.hP(b,"bump",new A.al(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.dT(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hS(new V.O(0,0,0),b,"refract",new A.al(!1,!1,!1)):d).c
c=b.db
return A.m9(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hO(b,"alpha",new A.al(!1,!1,!1)):c).c,n,l,j,h)},
e4:function(a,b){},
al:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.ar(m==null?[]:m)
s=H.W(m).c
for(;m.t();){r=s.a(m.d)
q=$.iT
if(q==null)q=$.iT=new V.E(0,0,1)
r.c=q
p=$.iS
r.d=p==null?$.iS=new V.E(0,1,0):p
p=$.iR
r.e=p==null?$.iR=new V.E(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bo(q).J()
r.d=n.bo(r.d).J()
r.e=n.bo(r.e).J()}}},
hk:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.cv()
r=s.bf
q=b0.fr
a9=q.h(0,r)
if(a9==null){p=b0.a
o=t.S
n=t.W
a9=new A.dR(s,[],P.N(o,n),P.N(o,t.I),P.N(o,n),P.N(o,t.L),P.N(o,n),P.N(o,t.U),P.N(o,n),P.N(o,t.R),p,r)
a9.dQ(s,p)
if(r.length===0)H.f(P.e("May not cache a shader with no name."))
if(q.fO(0,r))H.f(P.e('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,a9)}a9=a7.a=a9
b1.e=null}m=a9.x
l=m.d6
s=b1.e
if(!(s instanceof Z.c2))s=b1.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b1.d
if(r!=null)r.aN()}r=m.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gR().bP()
q.ga3().bP()
q=q.e
if(q!=null)q.aA(0)}}q=m.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga3().fM()
p=p.e
if(p!=null)p.aA(0)}}p=b1.d
k=p==null?a8:p.fL(new Z.j0(b0.a),l)
if(k==null)return
p=k.aQ($.b5())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=k.aQ($.b4())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=k.aQ($.b3())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aQ($.bv())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=k.aQ($.bw())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aQ($.b2())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=k}j=[]
s=b0.a
s.useProgram(a9.e)
a9.ga7(a9).fV()
if(m.fr){r=b0.dx
r=r.gU(r)
q=a9.db
if(q!=null)q.ad(r.a1(0,!0))}if(m.fx){r=b0.cx
if(r==null){r=b0.db
q=b0.dx
q=b0.cx=r.gU(r).H(0,q.gU(q))
r=q}q=a9.dx
if(q!=null)q.ad(r.a1(0,!0))}r=b0.ch
if(r==null){r=b0.dx
r=b0.ch=b0.ghg().H(0,r.gU(r))}q=a9.fr
if(q!=null)q.ad(r.a1(0,!0))
if(m.go){r=b0.db
r=r.gU(r)
q=a9.dy
if(q!=null)q.ad(r.a1(0,!0))}if(m.x1){r=$.kt
if(r==null){r=new V.cs(1,0,0,0,1,0,0,0,1)
$.kt=r}q=a9.go
if(q!=null)q.ad(r.a1(0,!0))}if(m.x2){r=V.an()
q=a9.id
if(q!=null)q.ad(r.a1(0,!0))}if(m.y1){r=V.an()
q=a9.k1
if(q!=null)q.ad(r.a1(0,!0))}if(m.aP>0){r=a7.e.a
i=r.length
q=a9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=a9.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.d8(q.a1(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.aP
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.d8
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.O(1,1,1)
q=a9.d7
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.S(t.y)
q=a7.dx
q=q==null?a8:q.e
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaj()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
o=a9.bV.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.ghw()
n=$.aD
o=o.b4(n==null?$.aD=new V.X(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghB()
n=$.aD
o=o.b4(n==null?$.aD=new V.X(0,0,0):n)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gat(d)
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
if(d.gd5()){o=d.gcU()
n=a.e
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcV()
n=a.f
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcW()
n=a.r
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=a9.bU.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b0.db
a0=q.gU(q)
a1=new H.S(t.y)
q=a7.dx
q=q==null?a8:q.f
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=a1.h(0,0)
if(b==null)b=0
a1.m(0,0,b+1)
o=a9.bX.h(0,0)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=a0.bo(d.c).J()
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.b
n=a.f
n.a.uniform3f(n.d,o.a,o.b,o.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a1.h(0,p)
if(i==null)i=0
p=a9.bW.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b0.db
a0=q.gU(q)
a2=new H.S(t.y)
q=a7.dx
q=q==null?a8:q.r
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaj()
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
o=a9.bZ.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
a3=a0.H(0,d.gU(d))
o=d.gU(d)
n=$.aD
o=o.b4(n==null?$.aD=new V.X(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=$.aD
o=a3.b4(o==null?$.aD=new V.X(0,0,0):o)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gat(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gaB()
o=a3.dh(0)
n=a.d
if(n!=null){g=new Float32Array(H.d8(new V.cs(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a1(0,!0)))
n.a.uniformMatrix3fv(n.d,!1,g)}d.gaB()
o=d.gaB()
if(!C.a.v(j,o)){o.sE(0,j.length)
j.push(o)}o=d.gaB()
n=o.gaw(o)
if(n){n=a.f
if(n!=null){a4=o.gaw(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gE(o))}}d.gaW()
o=d.gdI()
n=a.x
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaW()
if(!C.a.v(j,o)){o.sE(0,j.length)
j.push(o)}o=d.gaW()
n=o.gaw(o)
if(n){n=a.r
if(n!=null){a4=o.gaw(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gE(o))}}if(d.gd5()){o=d.gcU()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcV()
n=a.z
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcW()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=a9.bY.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b0.db
a0=q.gU(q)
a6=new H.S(t.y)
q=a7.dx
q=q==null?a8:q.x
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaj()
b=a6.h(0,c)
if(b==null)b=0
a6.m(0,c,b+1)
o=a9.c0.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.ghf(d)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghz(d).J()
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=a0.b4(d.ghf(d))
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gat(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gaB()
o=d.gce()
n=a.f
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gcb(d)
n=a.r
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghP()
n=a.x
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghQ()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
d.gaB()
o=d.gaB()
if(!C.a.v(j,o)){o.sE(0,j.length)
j.push(o)}o=d.gaB()
n=o.gaw(o)
if(n){n=a.dx
if(n!=null){a4=o.gaw(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gE(o))}}d.gaW()
o=d.gdI()
n=a.z
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaW()
if(!C.a.v(j,o)){o.sE(0,j.length)
j.push(o)}o=d.gaW()
n=o.gaw(o)
if(n){n=a.dy
if(n!=null){a4=o.gaw(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gE(o))}}if(d.ghA()){o=d.ghy()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghx()
n=a.ch
if(n!=null)n.a.uniform1f(n.d,o)}if(d.gd5()){o=d.gcU()
n=a.cx
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcV()
n=a.cy
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcW()
n=a.db
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a6.h(0,p)
if(i==null)i=0
p=a9.c_.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b0.Q
if(r==null){r=b0.db
r=b0.Q=r.gU(r).dh(0)}q=a9.fy
if(q!=null)q.ad(r.a1(0,!0))}if(m.db){a7.e4(j,a8)
a9.fo(a9.d9,a8)
if(m.r.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.O(1,1,1)
q=a9.da
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.dc
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.O(1,1,1)
q=a9.dd
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.de
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].bd(b0)
r=t.D.a(b1.e)
r.bd(b0)
r.aS(b0)
r.dD(b0)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].dD(b0)
s.useProgram(a8)
a9.ga7(a9).fU()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cv().bf}}
O.hU.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.V(b+3,4)*4))},
$S:8}
O.hV.prototype={
$2:function(a,b){return C.c.a8(a.a,b.a)},
$S:40}
O.hW.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.c.V(b+3,4)*4))},
$S:8}
O.hX.prototype={
$2:function(a,b){return C.c.a8(a.a,b.a)},
$S:41}
O.hY.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.V(b+3,4)*4))},
$S:8}
O.hZ.prototype={
$2:function(a,b){return C.c.a8(a.a,b.a)},
$S:42}
O.i_.prototype={
$2:function(a,b){return this.b.push(new A.bm(a,C.c.V(b+3,4)*4))},
$S:8}
O.i0.prototype={
$2:function(a,b){return C.c.a8(a.a,b.a)},
$S:43}
O.hO.prototype={
ar:function(){var s,r=this
r.cl()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.a5(new D.B(r.b,s,1))}}}
O.dS.prototype={
ar:function(){},
cJ:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ar()
s=q.a
s.a=null
s.a5(null)}}}
O.hP.prototype={}
O.cr.prototype={
cI:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.a5(new D.B(r.b+".color",s,a))}},
ar:function(){this.cl()
this.cI(new V.O(1,1,1))},
sat:function(a,b){this.cJ(new A.al(!0,!1,!1))
this.cI(b)}}
O.hR.prototype={}
O.hS.prototype={
ar:function(){var s,r=this
r.cm()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a5(new D.B(r.b+".refraction",s,1))}}}
O.hT.prototype={
cK:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.a5(new D.B(s.b+".shininess",r,a))}},
ar:function(){this.cm()
this.cK(100)}}
O.iu.prototype={}
X.hz.prototype={
gu:function(){var s=this.x
return s==null?this.x=D.H():s}}
X.e6.prototype={
gu:function(){var s=this.f
return s==null?this.f=D.H():s},
aH:function(a){var s=this.f
return s==null?null:s.F(a)},
e0:function(){return this.aH(null)},
sdn:function(a){var s,r,q=this
if(!J.Q(q.b,a)){s=q.b
if(s!=null)s.gu().N(0,q.gcq())
r=q.b
q.b=a
if(a!=null)a.gu().p(0,q.gcq())
q.aH(new D.B("mover",r,q.b))}}}
X.it.prototype={}
V.at.prototype={
b7:function(a){this.b=new P.hB(C.K)
this.c=null
this.d=[]},
G:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.eb(p,0,p.length)
m=n==null?p:n
m=H.kc(m," ","&nbsp;")
C.I.dH(o,m)
m=o.style
m.color=b
C.a.gbh(l.d).push(o)}},
du:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.be()
if(r!=null)for(q=new H.o(s),q=new P.bt(r.cd(new H.aU(q,q.gl(q))).a());q.t();)p.bm(q.gw(q))}}
V.jE.prototype={
$1:function(a){var s=C.d.cc(this.a.gfZ(),2)
if(s!=="0.00")P.kb(s+" fps")},
$S:44}
V.du.prototype={
bm:function(a){var s=this
switch(a.a){case"Class":s.G(a.b,"#551")
break
case"Comment":s.G(a.b,"#777")
break
case"Id":s.G(a.b,"#111")
break
case"Num":s.G(a.b,"#191")
break
case"Reserved":s.G(a.b,"#119")
break
case"String":s.G(a.b,"#171")
break
case"Symbol":s.G(a.b,"#616")
break
case"Type":s.G(a.b,"#B11")
break
case"Whitespace":s.G(a.b,"#111")
break}},
be:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iz()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=a2.j(0,p).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
a2.j(0,q).k(0,o).a.push(K.J("0","9"))
a2.j(0,o).k(0,o).a.push(K.J("0","9"))
s=a2.j(0,o).k(0,n)
r=new K.p([])
r.n(new H.o("."))
s.a.push(r)
a2.j(0,n).k(0,m).a.push(K.J("0","9"))
a2.j(0,m).k(0,m).a.push(K.J("0","9"))
r=a2.j(0,q).k(0,l)
s=new K.p([])
s.n(new H.o(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=new K.p([])
r.n(new H.o(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=new K.p([])
s.n(new H.o('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=new K.p([])
r.n(new H.o('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=new K.p([])
s.n(new H.o("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=new K.p([])
r.n(new H.o('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.aM())
r=a2.j(0,q).k(0,g)
s=new K.p([])
s.n(new H.o("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=new K.p([])
r.n(new H.o("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=new K.p([])
s.n(new H.o("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=new K.p([])
r.n(new H.o("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.aM())
r=a2.j(0,q).k(0,d)
s=new K.p([])
s.n(new H.o("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=new K.p([])
r.n(new H.o("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=new K.p([])
s.n(new H.o("\n"))
r.a.push(s)
s=[]
a2.j(0,c).k(0,c).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("\n"))
s.push(r)
r=a2.j(0,d).k(0,a)
s=new K.p([])
s.n(new H.o("*"))
r.a.push(s)
s=a2.j(0,a).k(0,a0)
r=new K.p([])
r.n(new H.o("*"))
s.a.push(r)
r=[]
a2.j(0,a0).k(0,a).a.push(new K.a6(r))
s=new K.p([])
s.n(new H.o("*"))
r.push(s)
s=a2.j(0,a0).k(0,b)
r=new K.p([])
r.n(new H.o("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=new K.p([])
s.n(new H.o(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=new K.p([])
r.n(new H.o(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.K("Num")
r=a2.j(0,m)
r.d=r.a.K("Num")
r=a2.j(0,l)
r.d=r.a.K("Symbol")
r=a2.j(0,i)
r.d=r.a.K("String")
r=a2.j(0,f)
r.d=r.a.K("String")
r=a2.j(0,b)
r.d=r.a.K(c)
r=a2.j(0,a1)
r.d=r.a.K(a1)
r=a2.j(0,p)
r=r.d=r.a.K(p)
r.az(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.az(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.az(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dC.prototype={
bm:function(a){var s=this
switch(a.a){case"Builtin":s.G(a.b,"#411")
break
case"Comment":s.G(a.b,"#777")
break
case"Id":s.G(a.b,"#111")
break
case"Num":s.G(a.b,"#191")
break
case"Preprocess":s.G(a.b,"#737")
break
case"Reserved":s.G(a.b,"#119")
break
case"Symbol":s.G(a.b,"#611")
break
case"Type":s.G(a.b,"#171")
break
case"Whitespace":s.G(a.b,"#111")
break}},
be:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iz()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=d.j(0,p).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
d.j(0,q).k(0,o).a.push(K.J("0","9"))
d.j(0,o).k(0,o).a.push(K.J("0","9"))
s=d.j(0,o).k(0,n)
r=new K.p([])
r.n(new H.o("."))
s.a.push(r)
d.j(0,n).k(0,m).a.push(K.J("0","9"))
d.j(0,m).k(0,m).a.push(K.J("0","9"))
r=d.j(0,q).k(0,l)
s=new K.p([])
s.n(new H.o(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=new K.p([])
r.n(new H.o(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=new K.p([])
s.n(new H.o("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=new K.p([])
r.n(new H.o("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.aM())
r=d.j(0,i).k(0,h)
s=new K.p([])
s.n(new H.o("\n"))
r.a.push(s)
s=[]
d.j(0,i).k(0,i).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("\n"))
s.push(r)
r=d.j(0,q).k(0,g)
s=new K.p([])
s.n(new H.o("#"))
r.a.push(s)
s=[]
d.j(0,g).k(0,g).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("\n"))
s.push(r)
r=d.j(0,g).k(0,f)
s=new K.p([])
s.n(new H.o("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=new K.p([])
r.n(new H.o(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=new K.p([])
s.n(new H.o(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.K("Num")
s=d.j(0,m)
s.d=s.a.K("Num")
s=d.j(0,l)
s.d=s.a.K("Symbol")
s=d.j(0,h)
s.d=s.a.K(i)
s=d.j(0,f)
s.d=s.a.K(g)
s=d.j(0,e)
s.d=s.a.K(e)
s=d.j(0,p)
s=s.d=s.a.K(p)
s.az(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.az(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.az(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dE.prototype={
bm:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.G(a.b,"#911")
s.G("=",r)
break
case"Id":s.G(a.b,r)
break
case"Other":s.G(a.b,r)
break
case"Reserved":s.G(a.b,"#119")
break
case"String":s.G(a.b,"#171")
break
case"Symbol":s.G(a.b,"#616")
break}},
be:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iz()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,p).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,p).k(0,o)
r=new K.p([])
r.n(new H.o("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=new K.p([])
r.n(new H.o("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=new K.p([])
s.n(new H.o("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=new K.p([])
r.n(new H.o('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=new K.p([])
s.n(new H.o('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=new K.p([])
r.n(new H.o("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=new K.p([])
s.n(new H.o('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.aM())
j.j(0,q).k(0,k).a.push(new K.aM())
s=[]
j.j(0,k).k(0,k).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o('</\\-!>=_"'))
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,n)
s.d=s.a.K("Symbol")
s=j.j(0,l)
s.d=s.a.K("String")
s=j.j(0,p)
r=s.a.K(p)
s.d=r
r.az(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.K(o)
r=j.j(0,k)
r.d=r.a.K(k)
return j}}
V.e8.prototype={
du:function(a,b){this.d=[]
this.G(C.a.k(b,"\n"),"#111")},
bm:function(a){},
be:function(){return null}}
V.il.prototype={
cR:function(a){var s,r,q,p,o,n,m=this.fu(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.o(C.a.h0(a)),s=new P.bt(m.cd(new H.aU(s,s.gl(s))).a());s.t();){r=s.gw(s)
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
if(H.ll(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.l1(C.q,r,C.f,!1)
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
dE:function(a){var s,r,q,p=new V.du("dart",[])
p.b7("dart")
s=new V.dC("glsl",[])
s.b7("glsl")
r=new V.dE("html",[])
r.b7("html")
q=C.a.fY([p,s,r],new V.ip(a))
if(q!=null)return q
p=new V.e8("plain",[])
p.b7("plain")
return p},
cP:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.br(q,"+")){b2[r]=C.b.am(q,1)
a8.push(1)
s=!0}else if(C.b.br(q,"-")){b2[r]=C.b.am(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dE(b0)
p.du(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.l1(C.q,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kg()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.q)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.q)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gM(q);a4.t();)b.appendChild(a4.gw(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
fu:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.iz()
h.d=h.j(0,q)
s=h.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("*"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,p).k(0,p).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("*"))
s.push(r)
r=h.j(0,p).k(0,"BoldEnd")
s=new K.p([])
s.n(new H.o("*"))
r.a.push(s)
r.c=!0
r=h.j(0,q).k(0,o)
s=new K.p([])
s.n(new H.o("_"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,o).k(0,o).a.push(new K.a6(r))
s=new K.p([])
s.n(new H.o("_"))
r.push(s)
s=h.j(0,o).k(0,n)
r=new K.p([])
r.n(new H.o("_"))
s.a.push(r)
s.c=!0
s=h.j(0,q).k(0,m)
r=new K.p([])
r.n(new H.o("`"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,m).k(0,m).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("`"))
s.push(r)
r=h.j(0,m).k(0,"CodeEnd")
s=new K.p([])
s.n(new H.o("`"))
r.a.push(s)
r.c=!0
r=h.j(0,q).k(0,l)
s=new K.p([])
s.n(new H.o("["))
r.a.push(s)
r.c=!0
r=h.j(0,l).k(0,k)
s=new K.p([])
s.n(new H.o("|"))
r.a.push(s)
s=h.j(0,l).k(0,j)
r=new K.p([])
r.n(new H.o("]"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,l).k(0,l).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("|]"))
s.push(r)
r=h.j(0,k).k(0,j)
s=new K.p([])
s.n(new H.o("]"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,k).k(0,k).a.push(new K.a6(r))
s=new K.p([])
s.n(new H.o("|]"))
r.push(s)
h.j(0,q).k(0,i).a.push(new K.aM())
s=[]
h.j(0,i).k(0,i).a.push(new K.a6(s))
r=new K.p([])
r.n(new H.o("*_`["))
s.push(r)
r=h.j(0,"BoldEnd")
r.d=r.a.K(p)
r=h.j(0,n)
r.d=r.a.K(o)
r=h.j(0,"CodeEnd")
r.d=r.a.K(m)
r=h.j(0,j)
r.d=r.a.K("Link")
r=h.j(0,i)
r.d=r.a.K(i)
return this.b=h}}
V.io.prototype={
$1:function(a){P.kG(C.i,new V.im(this.a))},
$S:4}
V.im.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ae(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.u(-0.01*s)+"px"
q.top=r},
$S:2}
V.ip.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:45}
Q.jC.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.cP("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.cP("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:0};(function aliases(){var s=J.a.prototype
s.dL=s.i
s=J.bf.prototype
s.dN=s.i
s=P.h.prototype
s.dM=s.bp
s=W.y.prototype
s.bs=s.a9
s=W.cY.prototype
s.dO=s.ai
s=K.dD.prototype
s.dK=s.ax
s.bt=s.i
s=O.dS.prototype
s.cl=s.ar
s=O.cr.prototype
s.cm=s.ar})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"n6","m4",46)
r(P,"nL","my",9)
r(P,"nM","mz",9)
r(P,"nN","mA",9)
q(P,"lc","nG",2)
r(W,"ph","ho",36)
p(W,"nX",4,null,["$4"],["mB"],17,0)
p(W,"nY",4,null,["$4"],["mC"],17,0)
var j
o(j=E.bB.prototype,"gds",0,0,null,["$1","$0"],["dt","h9"],1,0)
o(j,"gdq",0,0,null,["$1","$0"],["dr","h6"],1,0)
n(j,"gh4","h5",6)
n(j,"gh7","h8",6)
o(j=E.ex.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],1,0)
m(j,"ghm","dA",2)
l(j=X.eS.prototype,"geK","eL",4)
l(j,"gex","ey",4)
l(j,"geE","eF",3)
l(j,"geO","eP",15)
l(j,"geM","eN",15)
l(j,"geS","eT",3)
l(j,"geW","eX",3)
l(j,"geI","eJ",3)
l(j,"geU","eV",3)
l(j,"geG","eH",3)
l(j,"geY","eZ",27)
l(j,"gf_","f0",4)
l(j,"gfc","fd",11)
l(j,"gf8","f9",11)
l(j,"gfa","fb",11)
o(D.c6.prototype,"gdV",0,0,null,["$1","$0"],["an","dW"],1,0)
o(j=D.cj.prototype,"gcD",0,0,null,["$1","$0"],["cE","eQ"],1,0)
l(j,"gf2","f3",29)
n(j,"geq","er",18)
n(j,"gf6","f7",18)
k(V.Y.prototype,"gl","c1",14)
k(V.E.prototype,"gl","c1",14)
o(j=U.bD.prototype,"gaG",0,0,null,["$1","$0"],["L","Y"],1,0)
n(j,"geo","ep",23)
n(j,"gf4","f5",23)
o(j=U.cJ.prototype,"gaG",0,0,null,["$1","$0"],["L","Y"],1,0)
l(j,"gbC","bD",12)
l(j,"gbE","bF",12)
l(j,"gbG","bH",12)
o(j=U.cK.prototype,"gaG",0,0,null,["$1","$0"],["L","Y"],1,0)
l(j,"gbC","bD",0)
l(j,"gbE","bF",0)
l(j,"gbG","bH",0)
l(j,"geh","ei",0)
l(j,"gej","ek",0)
l(j,"gfD","fE",0)
l(j,"gfB","fC",0)
l(j,"gfz","fA",0)
l(U.cL.prototype,"gem","en",0)
o(j=M.dx.prototype,"gag",0,0,null,["$1","$0"],["ao","dX"],1,0)
n(j,"geA","eB",6)
n(j,"geC","eD",6)
o(j=O.dQ.prototype,"gcC",0,0,null,["$1","$0"],["a5","ez"],1,0)
o(j,"gcF",0,0,null,["$1","$0"],["cG","fl"],1,0)
n(j,"ges","eu",16)
n(j,"gev","ew",16)
o(X.e6.prototype,"gcq",0,0,null,["$1","$0"],["aH","e0"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.jN,J.a,J.aa,P.F,P.cR,P.h,H.aU,P.dG,H.cc,H.eQ,H.iD,H.i8,H.fB,H.ba,P.U,H.hJ,H.dO,H.hF,H.ag,H.fd,P.d3,P.bT,P.bt,P.eX,P.ep,P.eq,P.jk,P.d7,P.j8,P.cQ,P.C,P.eg,P.dq,P.hC,P.ji,P.R,P.bd,P.e5,P.cF,P.fa,P.hy,P.af,P.aW,W.hf,W.jJ,W.jW,W.bS,W.G,W.cy,W.cY,W.fG,W.cd,W.jc,W.fQ,P.fu,K.aM,K.dD,K.ia,K.p,L.em,L.ey,L.ez,L.iy,O.bA,O.ct,E.h9,E.bB,E.bz,E.bJ,E.f7,E.ib,E.ex,Z.eV,Z.j0,Z.c2,Z.hD,Z.br,D.hb,D.bC,D.P,X.c3,X.dL,X.hH,X.hM,X.a_,X.i4,X.iA,X.eS,D.c6,V.O,V.bb,V.hr,V.cs,V.bF,V.a1,V.X,V.ec,V.Y,V.E,U.cJ,U.cK,U.cL,M.dx,A.h5,A.h6,A.al,A.b7,A.bc,A.bl,A.bm,A.hQ,A.eG,A.eH,A.eK,A.eN,A.iG,A.iM,F.aP,F.hv,F.hI,F.ih,F.eh,F.ii,F.ij,F.cN,F.K,F.bP,F.eT,F.iX,F.iY,O.iu,O.dS,O.hR,X.it,X.e6,V.at,V.il])
q(J.a,[J.dH,J.ch,J.bf,J.am,J.bE,J.aS,H.cv,W.b,W.h3,W.dp,W.av,W.D,W.f1,W.ae,W.hi,W.hj,W.f2,W.c9,W.f4,W.hk,W.i,W.fb,W.ax,W.hA,W.fg,W.hL,W.i1,W.fk,W.fl,W.aA,W.fm,W.fo,W.aC,W.fs,W.fv,W.aE,W.fw,W.aF,W.fC,W.ah,W.fI,W.iw,W.aG,W.fK,W.iB,W.iO,W.fR,W.fT,W.fV,W.fX,W.fZ,P.bh,P.fi,P.bk,P.fq,P.i9,P.fD,P.bo,P.fM,P.h7,P.eZ,P.cD,P.fz])
q(J.bf,[J.e7,J.bp,J.ay])
r(J.dJ,J.am)
q(J.bE,[J.cg,J.dI])
q(P.F,[H.dM,P.eC,H.dK,H.eP,H.ee,H.f8,P.dl,P.e2,P.aj,P.eR,P.eO,P.bM,P.dr,P.dt])
r(P.cl,P.cR)
q(P.cl,[H.bO,W.f_,W.a2,P.dA])
r(H.o,H.bO)
q(P.h,[H.j,H.bi,H.bs,P.cf])
q(H.j,[H.cm,H.aT])
r(H.ca,H.bi)
q(P.dG,[H.cp,H.eW])
r(H.cq,H.cm)
r(H.cz,P.eC)
q(H.ba,[H.eu,H.hG,H.jy,H.jz,H.jA,P.j2,P.j1,P.j3,P.j4,P.jh,P.jg,P.jr,P.ja,P.jb,P.hN,P.hl,P.hm,W.hn,W.i2,W.i3,W.ig,W.ir,W.j5,W.i6,W.i5,W.jd,W.je,W.jf,W.jj,P.jn,P.jt,P.hw,P.hx,P.h8,E.ic,E.id,E.ie,E.iv,D.ht,D.hu,F.jF,F.ju,F.ik,F.j_,F.iZ,F.iU,F.iV,O.hU,O.hV,O.hW,O.hX,O.hY,O.hZ,O.i_,O.i0,V.jE,V.io,V.im,V.ip,Q.jC])
q(H.eu,[H.en,H.by])
r(P.co,P.U)
q(P.co,[H.S,W.eY])
r(H.bI,H.cv)
q(H.bI,[H.cT,H.cV])
r(H.cU,H.cT)
r(H.bj,H.cU)
r(H.cW,H.cV)
r(H.cu,H.cW)
q(H.cu,[H.dX,H.dY,H.dZ,H.e_,H.e0,H.cw,H.e1])
r(H.d4,H.f8)
r(P.d0,P.cf)
r(P.j9,P.jk)
r(P.cX,P.d7)
r(P.cP,P.cX)
r(P.ds,P.eq)
r(P.hp,P.dq)
q(P.ds,[P.hB,P.iQ])
r(P.iP,P.hp)
q(P.aj,[P.cC,P.dF])
q(W.b,[W.r,W.dz,W.ao,W.cZ,W.ap,W.ac,W.d1,W.eU,W.bQ,P.dn,P.aN])
q(W.r,[W.y,W.ak,W.bR])
q(W.y,[W.n,P.k])
q(W.n,[W.dj,W.dk,W.bx,W.b8,W.b9,W.c7,W.dB,W.ef,W.cG,W.es,W.et,W.bN])
r(W.he,W.av)
r(W.c5,W.f1)
q(W.ae,[W.hg,W.hh])
r(W.f3,W.f2)
r(W.c8,W.f3)
r(W.f5,W.f4)
r(W.dw,W.f5)
r(W.aw,W.dp)
r(W.fc,W.fb)
r(W.dy,W.fc)
r(W.fh,W.fg)
r(W.be,W.fh)
r(W.aI,W.i)
q(W.aI,[W.bg,W.ab,W.bn])
r(W.dU,W.fk)
r(W.dV,W.fl)
r(W.fn,W.fm)
r(W.dW,W.fn)
r(W.fp,W.fo)
r(W.cx,W.fp)
r(W.ft,W.fs)
r(W.e9,W.ft)
r(W.ed,W.fv)
r(W.d_,W.cZ)
r(W.ej,W.d_)
r(W.fx,W.fw)
r(W.ek,W.fx)
r(W.eo,W.fC)
r(W.fJ,W.fI)
r(W.ev,W.fJ)
r(W.d2,W.d1)
r(W.ew,W.d2)
r(W.fL,W.fK)
r(W.eA,W.fL)
r(W.aX,W.ab)
r(W.fS,W.fR)
r(W.f0,W.fS)
r(W.cO,W.c9)
r(W.fU,W.fT)
r(W.fe,W.fU)
r(W.fW,W.fV)
r(W.cS,W.fW)
r(W.fY,W.fX)
r(W.fy,W.fY)
r(W.h_,W.fZ)
r(W.fF,W.h_)
r(W.f6,W.eY)
r(W.f9,P.ep)
r(W.fH,W.cY)
r(P.a8,P.fu)
r(P.fj,P.fi)
r(P.dN,P.fj)
r(P.fr,P.fq)
r(P.e3,P.fr)
r(P.bL,P.k)
r(P.fE,P.fD)
r(P.er,P.fE)
r(P.fN,P.fM)
r(P.eB,P.fN)
r(P.dm,P.eZ)
r(P.e4,P.aN)
r(P.fA,P.fz)
r(P.el,P.fA)
q(K.dD,[K.a6,L.iC])
q(E.h9,[Z.c1,A.cE])
q(D.P,[D.aQ,D.aR,D.B,X.ea])
q(X.ea,[X.cn,X.bG,X.bH,X.cH])
q(O.bA,[D.cj,U.bD])
q(D.hb,[U.hc,U.a0])
r(U.c4,U.a0)
r(A.dR,A.cE)
q(A.iG,[A.cI,A.iJ,A.iK,A.iL,A.iH,A.eD,A.iI,A.eE,A.eF,A.iN,A.eI,A.eJ,A.eL,A.eM])
r(F.iq,F.hv)
r(F.iF,F.hI)
r(F.iW,F.iX)
r(F.i7,F.iY)
r(O.dQ,O.iu)
q(O.dS,[O.hO,O.hP,O.cr])
q(O.cr,[O.hS,O.hT])
r(X.hz,X.it)
q(V.at,[V.du,V.dC,V.dE,V.e8])
s(H.bO,H.eQ)
s(H.cT,P.C)
s(H.cU,H.cc)
s(H.cV,P.C)
s(H.cW,H.cc)
s(P.cR,P.C)
s(P.d7,P.eg)
s(W.f1,W.hf)
s(W.f2,P.C)
s(W.f3,W.G)
s(W.f4,P.C)
s(W.f5,W.G)
s(W.fb,P.C)
s(W.fc,W.G)
s(W.fg,P.C)
s(W.fh,W.G)
s(W.fk,P.U)
s(W.fl,P.U)
s(W.fm,P.C)
s(W.fn,W.G)
s(W.fo,P.C)
s(W.fp,W.G)
s(W.fs,P.C)
s(W.ft,W.G)
s(W.fv,P.U)
s(W.cZ,P.C)
s(W.d_,W.G)
s(W.fw,P.C)
s(W.fx,W.G)
s(W.fC,P.U)
s(W.fI,P.C)
s(W.fJ,W.G)
s(W.d1,P.C)
s(W.d2,W.G)
s(W.fK,P.C)
s(W.fL,W.G)
s(W.fR,P.C)
s(W.fS,W.G)
s(W.fT,P.C)
s(W.fU,W.G)
s(W.fV,P.C)
s(W.fW,W.G)
s(W.fX,P.C)
s(W.fY,W.G)
s(W.fZ,P.C)
s(W.h_,W.G)
s(P.fi,P.C)
s(P.fj,W.G)
s(P.fq,P.C)
s(P.fr,W.G)
s(P.fD,P.C)
s(P.fE,W.G)
s(P.fM,P.C)
s(P.fN,W.G)
s(P.eZ,P.U)
s(P.fz,P.C)
s(P.fA,W.G)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",V:"double",Z:"num",v:"String",a5:"bool",af:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(P)","~([P?])","~()","~(ab)","~(i)","~(v,@)","~(l,h<bB>)","~(aP)","~(l,l)","~(~())","af()","~(bn)","~(P?)","~(~(P))","V()","~(bg)","~(l,h<bF>)","a5(y,v,v,bS)","~(l,h<ci>)","a5(aB)","a5(r)","a5(v)","v(l)","~(l,h<a0?>)","~(Z)","~(M?,M?)","@(v)","~(aX)","@(@,v)","a5(h<ci>)","~(@,@)","y(r)","~(@)","af(@)","X(V)","~(cN,V,V)","v(b)","~(v,v)","@(@)","af(~())","l(b7,b7)","l(bc,bc)","l(bl,bl)","l(bm,bm)","~(ix)","a5(at?)","l(@,@)","v(v)","c1(l)","~(r,r?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mU(v.typeUniverse,JSON.parse('{"e7":"bf","bp":"bf","ay":"bf","oh":"i","ot":"i","oj":"aN","oi":"b","oz":"b","oC":"b","og":"k","ou":"k","ok":"n","ox":"n","ov":"r","os":"r","p_":"ac","oo":"aI","ol":"ak","oD":"ak","oB":"ab","ow":"be","op":"D","oq":"ah","oy":"bj","dH":{"a5":[]},"am":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"dJ":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"bE":{"V":[],"Z":[]},"cg":{"V":[],"l":[],"Z":[]},"dI":{"V":[],"Z":[]},"aS":{"v":[],"t":["@"]},"dM":{"F":[]},"o":{"m":["l"],"j":["l"],"h":["l"]},"j":{"h":["1"]},"cm":{"j":["1"],"h":["1"]},"bi":{"h":["2"]},"ca":{"j":["2"],"h":["2"]},"cq":{"j":["2"],"h":["2"]},"bs":{"h":["1"]},"bO":{"m":["1"],"j":["1"],"h":["1"]},"cz":{"F":[]},"dK":{"F":[]},"eP":{"F":[]},"ba":{"ce":[]},"eu":{"ce":[]},"en":{"ce":[]},"by":{"ce":[]},"ee":{"F":[]},"S":{"T":["1","2"],"U.V":"2"},"aT":{"j":["1"],"h":["1"]},"bI":{"w":["1"],"t":["1"]},"bj":{"w":["V"],"m":["V"],"j":["V"],"t":["V"],"h":["V"]},"cu":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dX":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dY":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dZ":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e_":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e0":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"cw":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e1":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"f8":{"F":[]},"d4":{"F":[]},"d3":{"ix":[]},"d0":{"h":["1"]},"cP":{"j":["1"],"h":["1"]},"cf":{"h":["1"]},"cl":{"m":["1"],"j":["1"],"h":["1"]},"co":{"T":["1","2"]},"U":{"T":["1","2"]},"cX":{"j":["1"],"h":["1"]},"V":{"Z":[]},"l":{"Z":[]},"m":{"j":["1"],"h":["1"]},"dl":{"F":[]},"eC":{"F":[]},"e2":{"F":[]},"aj":{"F":[]},"cC":{"F":[]},"dF":{"F":[]},"eR":{"F":[]},"eO":{"F":[]},"bM":{"F":[]},"dr":{"F":[]},"e5":{"F":[]},"cF":{"F":[]},"dt":{"F":[]},"y":{"r":[],"b":[]},"bg":{"i":[]},"ab":{"i":[]},"r":{"b":[]},"ao":{"b":[]},"ap":{"b":[]},"ac":{"b":[]},"bn":{"i":[]},"aI":{"i":[]},"aX":{"ab":[],"i":[]},"bS":{"aB":[]},"n":{"y":[],"r":[],"b":[]},"dj":{"y":[],"r":[],"b":[]},"dk":{"y":[],"r":[],"b":[]},"bx":{"y":[],"r":[],"b":[]},"b8":{"y":[],"r":[],"b":[]},"b9":{"y":[],"r":[],"b":[]},"ak":{"r":[],"b":[]},"c7":{"y":[],"r":[],"b":[]},"c8":{"m":["a8<Z>"],"w":["a8<Z>"],"j":["a8<Z>"],"h":["a8<Z>"],"t":["a8<Z>"]},"c9":{"a8":["Z"]},"dw":{"m":["v"],"w":["v"],"j":["v"],"h":["v"],"t":["v"]},"f_":{"m":["y"],"j":["y"],"h":["y"]},"dy":{"m":["aw"],"w":["aw"],"j":["aw"],"h":["aw"],"t":["aw"]},"dz":{"b":[]},"dB":{"y":[],"r":[],"b":[]},"be":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"dU":{"T":["v","@"],"U.V":"@"},"dV":{"T":["v","@"],"U.V":"@"},"dW":{"m":["aA"],"w":["aA"],"j":["aA"],"h":["aA"],"t":["aA"]},"a2":{"m":["r"],"j":["r"],"h":["r"]},"cx":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"e9":{"m":["aC"],"w":["aC"],"j":["aC"],"h":["aC"],"t":["aC"]},"ed":{"T":["v","@"],"U.V":"@"},"ef":{"y":[],"r":[],"b":[]},"ej":{"m":["ao"],"w":["ao"],"b":[],"j":["ao"],"h":["ao"],"t":["ao"]},"ek":{"m":["aE"],"w":["aE"],"j":["aE"],"h":["aE"],"t":["aE"]},"eo":{"T":["v","v"],"U.V":"v"},"cG":{"y":[],"r":[],"b":[]},"es":{"y":[],"r":[],"b":[]},"et":{"y":[],"r":[],"b":[]},"bN":{"y":[],"r":[],"b":[]},"ev":{"m":["ac"],"w":["ac"],"j":["ac"],"h":["ac"],"t":["ac"]},"ew":{"m":["ap"],"w":["ap"],"b":[],"j":["ap"],"h":["ap"],"t":["ap"]},"eA":{"m":["aG"],"w":["aG"],"j":["aG"],"h":["aG"],"t":["aG"]},"eU":{"b":[]},"bQ":{"b":[]},"bR":{"r":[],"b":[]},"f0":{"m":["D"],"w":["D"],"j":["D"],"h":["D"],"t":["D"]},"cO":{"a8":["Z"]},"fe":{"m":["ax?"],"w":["ax?"],"j":["ax?"],"h":["ax?"],"t":["ax?"]},"cS":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"fy":{"m":["aF"],"w":["aF"],"j":["aF"],"h":["aF"],"t":["aF"]},"fF":{"m":["ah"],"w":["ah"],"j":["ah"],"h":["ah"],"t":["ah"]},"eY":{"T":["v","v"]},"f6":{"T":["v","v"],"U.V":"v"},"cy":{"aB":[]},"cY":{"aB":[]},"fH":{"aB":[]},"fG":{"aB":[]},"dA":{"m":["y"],"j":["y"],"h":["y"]},"a8":{"fu":["1"]},"dN":{"m":["bh"],"j":["bh"],"h":["bh"]},"e3":{"m":["bk"],"j":["bk"],"h":["bk"]},"bL":{"k":[],"y":[],"r":[],"b":[]},"er":{"m":["v"],"j":["v"],"h":["v"]},"k":{"y":[],"r":[],"b":[]},"eB":{"m":["bo"],"j":["bo"],"h":["bo"]},"dm":{"T":["v","@"],"U.V":"@"},"dn":{"b":[]},"aN":{"b":[]},"e4":{"b":[]},"el":{"m":["T<@,@>"],"j":["T<@,@>"],"h":["T<@,@>"]},"bA":{"h":["1"]},"aQ":{"P":[]},"aR":{"P":[]},"B":{"P":[]},"cn":{"P":[]},"bG":{"P":[]},"bH":{"P":[]},"ea":{"P":[]},"cH":{"P":[]},"c6":{"ci":[]},"cj":{"h":["ci"]},"c4":{"a0":[]},"bD":{"a0":[],"h":["a0?"]},"cJ":{"a0":[]},"cK":{"a0":[]},"cL":{"a0":[]},"dR":{"cE":[]},"du":{"at":[]},"dC":{"at":[]},"dE":{"at":[]},"e8":{"at":[]}}'))
H.mT(v.typeUniverse,JSON.parse('{"am":1,"dJ":1,"aa":1,"j":1,"cm":1,"aU":1,"bi":2,"ca":2,"cp":2,"cq":2,"bs":1,"eW":1,"cc":1,"eQ":1,"bO":1,"aT":1,"dO":1,"bI":1,"bt":1,"d0":1,"ep":1,"eq":2,"cQ":1,"cf":1,"cl":1,"C":1,"co":2,"U":2,"eg":1,"cX":1,"cR":1,"d7":1,"dq":2,"ds":2,"h":1,"m":1,"dG":1,"f9":1,"G":1,"cd":1,"bA":1,"aQ":1,"aR":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nU
return{w:s("bx"),t:s("b8"),D:s("c2"),E:s("b9"),V:s("j<@>"),h:s("y"),C:s("F"),B:s("i"),Y:s("ce"),b:s("am<@>"),e:s("t<@>"),T:s("ch"),M:s("ay"),p:s("w<@>"),J:s("S<l,a5>"),y:s("S<l,l>"),I:s("m<eG>"),L:s("m<eH>"),U:s("m<eK>"),R:s("m<eN>"),c:s("m<@>"),d:s("cn"),f:s("T<@,@>"),Z:s("bG"),O:s("bH"),P:s("af"),K:s("M"),q:s("a8<Z>"),l:s("bL"),k:s("cE"),N:s("v"),u:s("k"),m:s("bN"),r:s("ix"),s:s("ey"),aM:s("cH"),n:s("eD"),v:s("cI"),g:s("eE"),F:s("eF"),Q:s("eI"),j:s("eJ"),G:s("eL"),a:s("eM"),o:s("bp"),x:s("bR"),cB:s("a5"),i:s("V"),z:s("@"),S:s("l"),A:s("0&*"),_:s("M*"),bc:s("kq<af>?"),X:s("M?"),ba:s("cD?"),aJ:s("em?"),aX:s("ez?"),W:s("cI?"),H:s("Z")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.b8.prototype
C.h=W.b9.prototype
C.I=W.c7.prototype
C.L=J.a.prototype
C.a=J.am.prototype
C.c=J.cg.prototype
C.M=J.ch.prototype
C.d=J.bE.prototype
C.b=J.aS.prototype
C.N=J.ay.prototype
C.u=J.e7.prototype
C.v=W.cG.prototype
C.k=J.bp.prototype
C.w=W.aX.prototype
C.x=W.bQ.prototype
C.y=new E.bz("Browser.chrome")
C.m=new E.bz("Browser.firefox")
C.n=new E.bz("Browser.edge")
C.z=new E.bz("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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

C.G=new P.e5()
C.f=new P.iP()
C.H=new P.iQ()
C.e=new P.j9()
C.i=new P.bd(0)
C.J=new P.bd(5e6)
C.K=new P.hC("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.q=s([0,0,65498,45055,65535,34815,65534,18431])
C.r=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bJ("OperatingSystem.windows")
C.t=new E.bJ("OperatingSystem.mac")
C.S=new E.bJ("OperatingSystem.linux")
C.T=new E.bJ("OperatingSystem.other")
C.U=new P.bT(null,2)})();(function staticFields(){$.j6=null
$.as=0
$.c0=null
$.ki=null
$.lf=null
$.lb=null
$.lj=null
$.jv=null
$.jB=null
$.k9=null
$.bU=null
$.da=null
$.db=null
$.k4=!1
$.aq=C.e
$.a9=[]
$.aO=null
$.jI=null
$.kp=null
$.ko=null
$.ff=P.N(t.N,t.Y)
$.hq=null
$.kt=null
$.kv=null
$.a7=null
$.aD=null
$.kA=null
$.bq=null
$.kM=null
$.kL=null
$.iR=null
$.iS=null
$.iT=null
$.kK=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"or","lp",function(){return H.nW("_$dart_dartClosure")})
s($,"oE","lr",function(){return H.aH(H.iE({
toString:function(){return"$receiver$"}}))})
s($,"oF","ls",function(){return H.aH(H.iE({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oG","lt",function(){return H.aH(H.iE(null))})
s($,"oH","lu",function(){return H.aH(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oK","lx",function(){return H.aH(H.iE(void 0))})
s($,"oL","ly",function(){return H.aH(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oJ","lw",function(){return H.aH(H.kI(null))})
s($,"oI","lv",function(){return H.aH(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oN","lA",function(){return H.aH(H.kI(void 0))})
s($,"oM","lz",function(){return H.aH(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"p0","kd",function(){return P.mx()})
s($,"p3","lF",function(){return P.mk("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p1","lE",function(){return P.kr(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oU","lD",function(){return Z.ai(0)})
s($,"oO","lB",function(){return Z.ai(511)})
s($,"oW","b5",function(){return Z.ai(1)})
s($,"oV","b4",function(){return Z.ai(2)})
s($,"oQ","b3",function(){return Z.ai(4)})
s($,"oX","bv",function(){return Z.ai(8)})
s($,"oY","bw",function(){return Z.ai(16)})
s($,"oR","dg",function(){return Z.ai(32)})
s($,"oS","dh",function(){return Z.ai(64)})
s($,"oT","lC",function(){return Z.ai(96)})
s($,"oZ","c_",function(){return Z.ai(128)})
s($,"oP","b2",function(){return Z.ai(256)})
s($,"on","lo",function(){return new V.hr()})
r($,"om","A",function(){return $.lo()})
r($,"oA","lq",function(){var q=V.kw(),p=V.jV(),o=$.kK
return V.ku(q,p,o==null?$.kK=V.mu(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cv,ArrayBufferView:H.cv,Float32Array:H.bj,Float64Array:H.bj,Int16Array:H.dX,Int32Array:H.dY,Int8Array:H.dZ,Uint16Array:H.e_,Uint32Array:H.e0,Uint8ClampedArray:H.cw,CanvasPixelArray:H.cw,Uint8Array:H.e1,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.h3,HTMLAnchorElement:W.dj,HTMLAreaElement:W.dk,HTMLBaseElement:W.bx,Blob:W.dp,HTMLBodyElement:W.b8,HTMLCanvasElement:W.b9,CDATASection:W.ak,CharacterData:W.ak,Comment:W.ak,ProcessingInstruction:W.ak,Text:W.ak,CSSPerspective:W.he,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.c5,MSStyleCSSProperties:W.c5,CSS2Properties:W.c5,CSSImageValue:W.ae,CSSKeywordValue:W.ae,CSSNumericValue:W.ae,CSSPositionValue:W.ae,CSSResourceValue:W.ae,CSSUnitValue:W.ae,CSSURLImageValue:W.ae,CSSStyleValue:W.ae,CSSMatrixComponent:W.av,CSSRotation:W.av,CSSScale:W.av,CSSSkew:W.av,CSSTranslation:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.hg,CSSUnparsedValue:W.hh,DataTransferItemList:W.hi,HTMLDivElement:W.c7,DOMException:W.hj,ClientRectList:W.c8,DOMRectList:W.c8,DOMRectReadOnly:W.c9,DOMStringList:W.dw,DOMTokenList:W.hk,Element:W.y,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aw,FileList:W.dy,FileWriter:W.dz,HTMLFormElement:W.dB,Gamepad:W.ax,History:W.hA,HTMLCollection:W.be,HTMLFormControlsCollection:W.be,HTMLOptionsCollection:W.be,KeyboardEvent:W.bg,Location:W.hL,MediaList:W.i1,MIDIInputMap:W.dU,MIDIOutputMap:W.dV,MimeType:W.aA,MimeTypeArray:W.dW,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cx,RadioNodeList:W.cx,Plugin:W.aC,PluginArray:W.e9,RTCStatsReport:W.ed,HTMLSelectElement:W.ef,SourceBuffer:W.ao,SourceBufferList:W.ej,SpeechGrammar:W.aE,SpeechGrammarList:W.ek,SpeechRecognitionResult:W.aF,Storage:W.eo,CSSStyleSheet:W.ah,StyleSheet:W.ah,HTMLTableElement:W.cG,HTMLTableRowElement:W.es,HTMLTableSectionElement:W.et,HTMLTemplateElement:W.bN,TextTrack:W.ap,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.ev,TextTrackList:W.ew,TimeRanges:W.iw,Touch:W.aG,TouchEvent:W.bn,TouchList:W.eA,TrackDefaultList:W.iB,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.iO,VideoTrackList:W.eU,WheelEvent:W.aX,Window:W.bQ,DOMWindow:W.bQ,Attr:W.bR,CSSRuleList:W.f0,ClientRect:W.cO,DOMRect:W.cO,GamepadList:W.fe,NamedNodeMap:W.cS,MozNamedAttrMap:W.cS,SpeechRecognitionResultList:W.fy,StyleSheetList:W.fF,SVGLength:P.bh,SVGLengthList:P.dN,SVGNumber:P.bk,SVGNumberList:P.e3,SVGPointList:P.i9,SVGScriptElement:P.bL,SVGStringList:P.er,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bo,SVGTransformList:P.eB,AudioBuffer:P.h7,AudioParamMap:P.dm,AudioTrackList:P.dn,AudioContext:P.aN,webkitAudioContext:P.aN,BaseAudioContext:P.aN,OfflineAudioContext:P.e4,WebGL2RenderingContext:P.cD,SQLResultSetRowList:P.el})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Q.o5
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
