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
a[c]=function(){a[c]=function(){H.ox(b)}
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
if(a[b]!==s)H.oy(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kq"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kq(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={k5:function k5(){},
iE:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mM:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
o7:function(a,b,c){return a},
mt:function(a,b){if(t.V.b(a))return new H.cj(a,b)
return new H.bi(a,b)},
hQ:function(){return new P.bS("No element")},
mm:function(){return new P.bS("Too many elements")},
mL:function(a,b){H.es(a,0,J.b6(a)-1,b)},
es:function(a,b,c,d){if(c-b<=32)H.mK(a,b,c,d)
else H.mJ(a,b,c,d)},
mK:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.ha(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ah()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mJ:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a_(a4+a5,2),f=g-j,e=g+j,d=J.ha(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.R(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.es(a3,a4,r-2,a6)
H.es(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.R(a6.$2(d.h(a3,r),b),0);)++r
for(;J.R(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.es(a3,r,q,a6)}else H.es(a3,r,q,a6)},
dX:function dX(a){this.a=a},
n:function n(a){this.a=a},
j:function j(){},
cw:function cw(){},
aR:function aR(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bi:function bi(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=null
this.b=a
this.c=b},
cA:function cA(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
cm:function cm(){},
f_:function f_(){},
bU:function bU(){},
lI:function(a){var s,r=H.lH(a)
if(r!=null)return r
s="minified:"+a
return s},
oo:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.du(a)
return s},
cL:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cM:function(a){return H.mv(a)},
mv:function(a){var s,r,q,p
if(a instanceof P.L)return H.ac(H.c5(a),null)
if(J.dq(a)===C.L||t.o.b(a)){s=C.o(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ac(H.c5(a),null)},
kR:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mE:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.jE(q))throw H.c(H.jI(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bm(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jI(q))}return H.kR(p)},
mD:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jE(q))throw H.c(H.jI(q))
if(q<0)throw H.c(H.jI(q))
if(q>65535)return H.mE(a)}return H.kR(a)},
k7:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bm(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aU(a,0,1114111,null,null))},
bO:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mC:function(a){var s=H.bO(a).getFullYear()+0
return s},
mA:function(a){var s=H.bO(a).getMonth()+1
return s},
mw:function(a){var s=H.bO(a).getDate()+0
return s},
mx:function(a){var s=H.bO(a).getHours()+0
return s},
mz:function(a){var s=H.bO(a).getMinutes()+0
return s},
mB:function(a){var s=H.bO(a).getSeconds()+0
return s},
my:function(a){var s=H.bO(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.b6(a)
throw H.c(H.c3(a,b))},
c3:function(a,b){var s,r="index"
if(!H.jE(b))return new P.ai(!0,b,r,null)
s=J.b6(a)
if(b<0||b>=s)return P.I(b,a,r,null,s)
return P.ek(b,r)},
oc:function(a,b,c){if(a>c)return P.aU(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aU(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
jI:function(a){return new P.ai(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eb()
s=new Error()
s.dartException=a
r=H.oz
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oz:function(){return J.du(this.dartException)},
f:function(a){throw H.c(a)},
q:function(a){throw H.c(P.as(a))},
aD:function(a){var s,r,q,p,o,n
a=H.lF(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iT(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iU:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l2:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
k6:function(a,b){var s=b==null,r=s?null:b.method
return new H.dV(a,r,s?null:b.receiver)},
aI:function(a){if(a==null)return new H.im(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bw(a,a.dartException)
return H.o3(a)},
bw:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
o3:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bm(r,16)&8191)===10)switch(q){case 438:return H.bw(a,H.k6(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bw(a,new H.cK(p,e))}}if(a instanceof TypeError){o=$.lM()
n=$.lN()
m=$.lO()
l=$.lP()
k=$.lS()
j=$.lT()
i=$.lR()
$.lQ()
h=$.lV()
g=$.lU()
f=o.ag(s)
if(f!=null)return H.bw(a,H.k6(s,f))
else{f=n.ag(s)
if(f!=null){f.method="call"
return H.bw(a,H.k6(s,f))}else{f=m.ag(s)
if(f==null){f=l.ag(s)
if(f==null){f=k.ag(s)
if(f==null){f=j.ag(s)
if(f==null){f=i.ag(s)
if(f==null){f=l.ag(s)
if(f==null){f=h.ag(s)
if(f==null){f=g.ag(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bw(a,new H.cK(s,f==null?e:f.method))}}return H.bw(a,new H.eZ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cQ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bw(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cQ()
return a},
kr:function(a){var s
if(a==null)return new H.fL(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fL(a)},
oe:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
on:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.e("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.on)
a.$identity=s
return s},
mg:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ex().constructor.prototype):Object.create(new H.bA(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aq
if(typeof r!=="number")return r.S()
$.aq=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kD(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mc(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kD(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mc:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lB,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.ma:H.m9
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
md:function(a,b,c,d){var s=H.kC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kD:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mf(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.md(r,!p,s,b)
if(r===0){p=$.aq
if(typeof p!=="number")return p.S()
$.aq=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c7
return new Function(p+(o==null?$.c7=H.hl("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aq
if(typeof p!=="number")return p.S()
$.aq=p+1
m+=p
p="return function("+m+"){return this."
o=$.c7
return new Function(p+(o==null?$.c7=H.hl("self"):o)+"."+H.t(s)+"("+m+");}")()},
me:function(a,b,c,d){var s=H.kC,r=H.mb
switch(b?-1:a){case 0:throw H.c(new H.en("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mf:function(a,b){var s,r,q,p,o,n,m,l=$.c7
if(l==null)l=$.c7=H.hl("self")
s=$.kB
if(s==null)s=$.kB=H.hl("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.me(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.aq
if(typeof n!=="number")return n.S()
$.aq=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.aq
if(typeof n!=="number")return n.S()
$.aq=n+1
return new Function(o+n+"}")()},
kq:function(a,b,c,d,e,f,g){return H.mg(a,b,c,d,!!e,!!f,g)},
m9:function(a,b){return H.fZ(v.typeUniverse,H.c5(a.a),b)},
ma:function(a,b){return H.fZ(v.typeUniverse,H.c5(a.c),b)},
kC:function(a){return a.a},
mb:function(a){return a.c},
hl:function(a){var s,r,q,p=new H.bA("self","target","receiver","name"),o=J.k4(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jX("Field name "+a+" not found."))},
ox:function(a){throw H.c(new P.dE(a))},
oh:function(a){return v.getIsolateTag(a)},
oy:function(a){return H.f(new H.dX(a))},
pC:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oq:function(a){var s,r,q,p,o,n=$.lA.$1(a),m=$.jL[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jR[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lw.$2(a,n)
if(q!=null){m=$.jL[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jR[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jT(s)
$.jL[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jR[n]=s
return s}if(p==="-"){o=H.jT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lD(a,s)
if(p==="*")throw H.c(P.l3(n))
if(v.leafTags[n]===true){o=H.jT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lD(a,s)},
lD:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kt(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jT:function(a){return J.kt(a,!1,null,!!a.$iu)},
os:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jT(s)
else return J.kt(s,c,null,null)},
ol:function(){if(!0===$.ks)return
$.ks=!0
H.om()},
om:function(){var s,r,q,p,o,n,m,l
$.jL=Object.create(null)
$.jR=Object.create(null)
H.ok()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lE.$1(o)
if(n!=null){m=H.os(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ok:function(){var s,r,q,p,o,n,m=C.A()
m=H.c1(C.B,H.c1(C.C,H.c1(C.p,H.c1(C.p,H.c1(C.D,H.c1(C.E,H.c1(C.F(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lA=new H.jO(p)
$.lw=new H.jP(o)
$.lE=new H.jQ(n)},
c1:function(a,b){return a(b)||b},
mq:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hK("Illegal RegExp pattern ("+String(n)+")",a))},
lG:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
od:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lF:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kw:function(a,b,c){var s=H.ov(a,b,c)
return s},
ov:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lF(b),'g'),H.od(c))},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cK:function cK(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
im:function im(a){this.a=a},
fL:function fL(a){this.a=a
this.b=null},
ba:function ba(){},
eE:function eE(){},
ex:function ex(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a){this.a=a},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hS:function hS(a){this.a=a},
hV:function hV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aQ:function aQ(a){this.a=a},
dZ:function dZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
hR:function hR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dk:function(a){return a},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c3(b,a))},
ni:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.oc(a,b,c))
return b},
cG:function cG(){},
bM:function bM(){},
bj:function bj(){},
cF:function cF(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
cH:function cH(){},
ea:function ea(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
kW:function(a,b){var s=b.c
return s==null?b.c=H.kj(a,b.z,!0):s},
kV:function(a,b){var s=b.c
return s==null?b.c=H.dh(a,"kJ",[b.z]):s},
kX:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kX(a.z)
return s===11||s===12},
mH:function(a){return a.cy},
of:function(a){return H.kk(v.typeUniverse,a,!1)},
b1:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.lk(a,r,!0)
case 7:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.kj(a,r,!0)
case 8:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.lj(a,r,!0)
case 9:q=b.Q
p=H.dp(a,q,a0,a1)
if(p===q)return b
return H.dh(a,b.z,p)
case 10:o=b.z
n=H.b1(a,o,a0,a1)
m=b.Q
l=H.dp(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kh(a,n,l)
case 11:k=b.z
j=H.b1(a,k,a0,a1)
i=b.Q
h=H.o0(a,i,a0,a1)
if(j===k&&h===i)return b
return H.li(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dp(a,g,a0,a1)
o=b.z
n=H.b1(a,o,a0,a1)
if(f===g&&n===o)return b
return H.ki(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hf("Attempted to substitute unexpected RTI kind "+c))}},
dp:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b1(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
o1:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b1(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
o0:function(a,b,c,d){var s,r=b.a,q=H.dp(a,r,c,d),p=b.b,o=H.dp(a,p,c,d),n=b.c,m=H.o1(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fn()
s.a=q
s.b=o
s.c=m
return s},
pE:function(a,b){a[v.arrayRti]=b
return a},
o8:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lB(s)
return a.$S()}return null},
lC:function(a,b){var s
if(H.kX(b))if(a instanceof H.ba){s=H.o8(a)
if(s!=null)return s}return H.c5(a)},
c5:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.kl(a)}if(Array.isArray(a))return H.lo(a)
return H.kl(J.dq(a))},
lo:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
W:function(a){var s=a.$ti
return s!=null?s:H.kl(a)},
kl:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.np(a,s)},
np:function(a,b){var s=a instanceof H.ba?a.__proto__.__proto__.constructor:b,r=H.nf(v.typeUniverse,s.name)
b.$ccache=r
return r},
lB:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kk(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
no:function(a){var s,r,q,p=this
if(p===t.K)return H.dl(p,a,H.nt)
if(!H.aH(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dl(p,a,H.nw)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jE
else if(r===t.i||r===t.H)q=H.ns
else if(r===t.N)q=H.nu
else q=r===t.cB?H.km:null
if(q!=null)return H.dl(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.op)){p.r="$i"+s
return H.dl(p,a,H.nv)}}else if(s===7)return H.dl(p,a,H.nm)
return H.dl(p,a,H.nk)},
dl:function(a,b,c){a.b=c
return a.b(b)},
nn:function(a){var s,r=this,q=H.nj
if(!H.aH(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.nh
else if(r===t.K)q=H.ng
else{s=H.dr(r)
if(s)q=H.nl}r.a=q
return r.a(a)},
kp:function(a){var s,r=a.y
if(!H.aH(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kp(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nk:function(a){var s=this
if(a==null)return H.kp(s)
return H.K(v.typeUniverse,H.lC(a,s),null,s,null)},
nm:function(a){if(a==null)return!0
return this.z.b(a)},
nv:function(a){var s,r=this
if(a==null)return H.kp(r)
s=r.r
if(a instanceof P.L)return!!a[s]
return!!J.dq(a)[s]},
nj:function(a){var s,r=this
if(a==null){s=H.dr(r)
if(s)return a}else if(r.b(a))return a
H.lr(a,r)},
nl:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lr(a,s)},
lr:function(a,b){throw H.c(H.n5(H.lb(a,H.lC(a,b),H.ac(b,null))))},
lb:function(a,b,c){var s=P.hE(a),r=H.ac(b==null?H.c5(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
n5:function(a){return new H.df("TypeError: "+a)},
a3:function(a,b){return new H.df("TypeError: "+H.lb(a,null,b))},
nt:function(a){return a!=null},
ng:function(a){if(a!=null)return a
throw H.c(H.a3(a,"Object"))},
nw:function(a){return!0},
nh:function(a){return a},
km:function(a){return!0===a||!1===a},
lp:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a3(a,"bool"))},
pr:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a3(a,"bool"))},
pq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a3(a,"bool?"))},
ps:function(a){if(typeof a=="number")return a
throw H.c(H.a3(a,"double"))},
pu:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"double"))},
pt:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"double?"))},
jE:function(a){return typeof a=="number"&&Math.floor(a)===a},
jB:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
pw:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a3(a,"int"))},
pv:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a3(a,"int?"))},
ns:function(a){return typeof a=="number"},
px:function(a){if(typeof a=="number")return a
throw H.c(H.a3(a,"num"))},
pz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"num"))},
py:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"num?"))},
nu:function(a){return typeof a=="string"},
jC:function(a){if(typeof a=="string")return a
throw H.c(H.a3(a,"String"))},
pB:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a3(a,"String"))},
pA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a3(a,"String?"))},
nX:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ac(a[q],b)
return s},
ls:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(!k)m+=" extends "+H.ac(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ac(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ac(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ac(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ac(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ac:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ac(a.z,b)
return s}if(l===7){r=a.z
s=H.ac(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ac(a.z,b)+">"
if(l===9){p=H.o2(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nX(o,b)+">"):p}if(l===11)return H.ls(a,b,null)
if(l===12)return H.ls(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
o2:function(a){var s,r=H.lH(a)
if(r!=null)return r
s="minified:"+a
return s},
ll:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nf:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kk(a,b,!1)
else if(typeof m=="number"){s=m
r=H.di(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dh(a,b,q)
n[b]=o
return o}else return m},
nd:function(a,b){return H.ln(a.tR,b)},
nc:function(a,b){return H.ln(a.eT,b)},
kk:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lg(H.le(a,null,b,c))
r.set(b,s)
return s},
fZ:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lg(H.le(a,b,c,!0))
q.set(c,r)
return r},
ne:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kh(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b0:function(a,b){b.a=H.nn
b.b=H.no
return b},
di:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.af(null,null)
s.y=b
s.cy=c
r=H.b0(a,s)
a.eC.set(c,r)
return r},
lk:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.na(a,b,r,c)
a.eC.set(r,s)
return s},
na:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.af(null,null)
q.y=6
q.z=b
q.cy=c
return H.b0(a,q)},
kj:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n9(a,b,r,c)
a.eC.set(r,s)
return s},
n9:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aH(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dr(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dr(q.z))return q
else return H.kW(a,b)}}p=new H.af(null,null)
p.y=7
p.z=b
p.cy=c
return H.b0(a,p)},
lj:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.n7(a,b,r,c)
a.eC.set(r,s)
return s},
n7:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dh(a,"kJ",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.af(null,null)
q.y=8
q.z=b
q.cy=c
return H.b0(a,q)},
nb:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.af(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b0(a,s)
a.eC.set(q,r)
return r},
fY:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
n6:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dh:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fY(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.af(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b0(a,r)
a.eC.set(p,q)
return q},
kh:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fY(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b0(a,o)
a.eC.set(q,n)
return n},
li:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fY(m)
if(j>0){s=l>0?",":""
r=H.fY(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.n6(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b0(a,o)
a.eC.set(q,r)
return r},
ki:function(a,b,c,d){var s,r=b.cy+("<"+H.fY(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.n8(a,b,c,r,d)
a.eC.set(r,s)
return s},
n8:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b1(a,b,r,0)
m=H.dp(a,c,r,0)
return H.ki(a,n,m,c!==m)}}l=new H.af(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b0(a,l)},
le:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.n_(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lf(a,r,h,g,!1)
else if(q===46)r=H.lf(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b_(a.u,a.e,g.pop()))
break
case 94:g.push(H.nb(a.u,g.pop()))
break
case 35:g.push(H.di(a.u,5,"#"))
break
case 64:g.push(H.di(a.u,2,"@"))
break
case 126:g.push(H.di(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kg(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dh(p,n,o))
else{m=H.b_(p,a.e,n)
switch(m.y){case 11:g.push(H.ki(p,m,o,a.n))
break
default:g.push(H.kh(p,m,o))
break}}break
case 38:H.n0(a,g)
break
case 42:p=a.u
g.push(H.lk(p,H.b_(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kj(p,H.b_(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lj(p,H.b_(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fn()
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
H.kg(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.li(p,H.b_(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kg(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.n2(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b_(a.u,a.e,i)},
n_:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lf:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ll(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mH(o)+'"')
d.push(H.fZ(s,o,n))}else d.push(p)
return m},
n0:function(a,b){var s=b.pop()
if(0===s){b.push(H.di(a.u,1,"0&"))
return}if(1===s){b.push(H.di(a.u,4,"1&"))
return}throw H.c(P.hf("Unexpected extended operation "+H.t(s)))},
b_:function(a,b,c){if(typeof c=="string")return H.dh(a,c,a.sEA)
else if(typeof c=="number")return H.n1(a,b,c)
else return c},
kg:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b_(a,b,c[s])},
n2:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b_(a,b,c[s])},
n1:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hf("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hf("Bad index "+c+" for "+b.i(0)))},
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aH(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aH(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.K(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.K(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.K(a,b.z,c,d,e)
if(r===6)return H.K(a,b.z,c,d,e)
return r!==7}if(r===6)return H.K(a,b.z,c,d,e)
if(p===6){s=H.kW(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.kV(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.kV(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
return s||H.K(a,b,c,d.z,e)}if(q)return!1
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.lt(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lt(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nr(a,b,c,d,e)}return!1},
lt:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.K(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.K(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.K(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.K(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.K(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nr:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ll(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.fZ(a,b,l[p]),c,r[p],e))return!1
return!0},
dr:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aH(a))if(r!==7)if(!(r===6&&H.dr(a.z)))s=r===8&&H.dr(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
op:function(a){var s
if(!H.aH(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aH:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
ln:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fn:function fn(){this.c=this.b=this.a=null},
fi:function fi(){},
df:function df(a){this.a=a},
lH:function(a){return v.mangledGlobalNames[a]},
ot:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jN:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ks==null){H.ol()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.l3("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jm
if(o==null)o=$.jm=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.oq(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){o=$.jm
if(o==null)o=$.jm=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
mn:function(a){if(a<0||a>4294967295)throw H.c(P.aU(a,0,4294967295,"length",null))
return J.mo(new Array(a))},
k3:function(a){if(a<0)throw H.c(P.jX("Length must be a non-negative integer: "+a))
return new Array(a)},
mo:function(a){return J.k4(a)},
k4:function(a){a.fixed$length=Array
return a},
mp:function(a,b){return J.m3(a,b)},
dq:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.dT.prototype}if(typeof a=="string")return J.aP.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.dS.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jN(a)},
ha:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jN(a)},
jM:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jN(a)},
lz:function(a){if(typeof a=="number")return J.bI.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.br.prototype
return a},
og:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.br.prototype
return a},
aG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jN(a)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dq(a).q(a,b)},
ky:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lz(a).J(a,b)},
m0:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oo(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ha(a).h(a,b)},
m1:function(a,b,c){return J.aG(a).fw(a,b,c)},
m2:function(a,b,c,d){return J.aG(a).fT(a,b,c,d)},
m3:function(a,b){return J.lz(a).ad(a,b)},
hc:function(a,b){return J.jM(a).D(a,b)},
jW:function(a,b){return J.jM(a).E(a,b)},
m4:function(a){return J.aG(a).ga4(a)},
m5:function(a){return J.aG(a).gdf(a)},
m6:function(a){return J.aG(a).gdi(a)},
hd:function(a){return J.dq(a).gF(a)},
ap:function(a){return J.jM(a).gM(a)},
b6:function(a){return J.ha(a).gl(a)},
kz:function(a){return J.jM(a).hv(a)},
m7:function(a,b){return J.aG(a).hy(a,b)},
m8:function(a){return J.og(a).hH(a)},
du:function(a){return J.dq(a).i(a)},
a:function a(){},
dS:function dS(){},
cr:function cr(){},
bf:function bf(){},
eg:function eg(){},
br:function br(){},
ax:function ax(){},
al:function al(){},
dU:function dU(){},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(){},
cq:function cq(){},
dT:function dT(){},
aP:function aP(){}},P={
mR:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.o4()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c2(new P.ji(q),1)).observe(s,{childList:true})
return new P.jh(q,s,r)}else if(self.setImmediate!=null)return P.o5()
return P.o6()},
mS:function(a){self.scheduleImmediate(H.c2(new P.jj(a),0))},
mT:function(a){self.setImmediate(H.c2(new P.jk(a),0))},
mU:function(a){P.kb(C.i,a)},
kb:function(a,b){var s=C.c.a_(a.a,1000)
return P.n3(s<0?0:s,b)},
l1:function(a,b){var s=C.c.a_(a.a,1000)
return P.n4(s<0?0:s,b)},
n3:function(a,b){var s=new P.de()
s.e7(a,b)
return s},
n4:function(a,b){var s=new P.de()
s.e8(a,b)
return s},
po:function(a){return new P.c_(a,1)},
mX:function(){return C.V},
mY:function(a){return new P.c_(a,3)},
ny:function(a){return new P.db(a)},
nU:function(){var s,r
for(s=$.c0;s!=null;s=$.c0){$.dn=null
r=s.b
$.c0=r
if(r==null)$.dm=null
s.a.$0()}},
o_:function(){$.kn=!0
try{P.nU()}finally{$.dn=null
$.kn=!1
if($.c0!=null)$.kx().$1(P.lx())}},
nY:function(a){var s=new P.f6(a),r=$.dm
if(r==null){$.c0=$.dm=s
if(!$.kn)$.kx().$1(P.lx())}else $.dm=r.b=s},
nZ:function(a){var s,r,q,p=$.c0
if(p==null){P.nY(a)
$.dn=$.dm
return}s=new P.f6(a)
r=$.dn
if(r==null){s.b=p
$.c0=$.dn=s}else{q=r.b
s.b=q
$.dn=r.b=s
if(q==null)$.dm=s}},
l0:function(a,b){var s=$.an
if(s===C.e)return P.kb(a,b)
return P.kb(a,s.fY(b))},
mO:function(a,b){var s=$.an
if(s===C.e)return P.l1(a,b)
return P.l1(a,s.dc(b,t.ae))},
lu:function(a,b,c,d,e){P.nZ(new P.jH(d,e))},
nV:function(a,b,c,d){var s,r=$.an
if(r===c)return d.$0()
$.an=c
s=r
try{r=d.$0()
return r}finally{$.an=s}},
nW:function(a,b,c,d,e){var s,r=$.an
if(r===c)return d.$1(e)
$.an=c
s=r
try{r=d.$1(e)
return r}finally{$.an=s}},
ji:function ji(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
de:function de(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b){this.a=a
this.b=b},
bv:function bv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
db:function db(a){this.a=a},
f6:function f6(a){this.a=a
this.b=null},
ez:function ez(){},
eA:function eA(){},
jA:function jA(){},
jH:function jH(a,b){this.a=a
this.b=b},
jp:function jp(){},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c){this.a=a
this.b=b
this.c=c},
mr:function(a,b,c){return H.oe(a,new H.T(b.am("@<0>").cJ(c).am("T<1,2>")))},
M:function(a,b){return new H.T(a.am("@<0>").cJ(b).am("T<1,2>"))},
cu:function(a){return new P.d_(a.am("d_<0>"))},
kf:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mZ:function(a,b){var s=new P.d0(a,b)
s.c=a.e
return s},
ml:function(a,b,c){var s,r
if(P.ko(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a8.push(a)
try{P.nx(a,s)}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}r=P.kZ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
k2:function(a,b,c){var s,r
if(P.ko(a))return b+"..."+c
s=new P.aX(b)
$.a8.push(a)
try{r=s
r.a=P.kZ(r.a,a,", ")}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ko:function(a){var s,r
for(s=$.a8.length,r=0;r<s;++r)if(a===$.a8[r])return!0
return!1},
nx:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.t(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.u()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.u();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.t(p)
r=H.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kK:function(a,b){var s,r,q=P.cu(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.n(0,b.a(a[r]))
return q},
kL:function(a){var s,r={}
if(P.ko(a))return"{...}"
s=new P.aX("")
try{$.a8.push(a)
s.a+="{"
r.a=!0
J.jW(a,new P.i_(r,s))
s.a+="}"}finally{if(0>=$.a8.length)return H.d($.a8,-1)
$.a8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d_:function d_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jo:function jo(a){this.a=a
this.c=this.b=null},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cp:function cp(){},
cv:function cv(){},
D:function D(){},
cy:function cy(){},
i_:function i_(a,b){this.a=a
this.b=b},
V:function V(){},
ep:function ep(){},
d7:function d7(){},
d1:function d1(){},
dj:function dj(){},
dB:function dB(){},
dD:function dD(){},
hB:function hB(){},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hN:function hN(a){this.a=a},
j4:function j4(){},
j5:function j5(){},
jy:function jy(a){this.b=0
this.c=a},
mk:function(a){if(a instanceof H.ba)return a.i(0)
return"Instance of '"+H.cM(a)+"'"},
hW:function(a,b,c){var s,r=c?J.k3(a):J.mn(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hX:function(a,b){var s,r=[]
for(s=J.ap(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.k4(r)},
ms:function(a,b){var s,r,q=J.k3(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
ka:function(a){var s=a,r=s.length,q=P.k8(0,null,r)
return H.mD(q<r?s.slice(0,q):s)},
mF:function(a){return new H.hR(a,H.mq(a,!1,!0,!1,!1,!1))},
kZ:function(a,b,c){var s=J.ap(b)
if(!s.u())return a
if(c.length===0){do a+=H.t(s.gC(s))
while(s.u())}else{a+=H.t(s.gC(s))
for(;s.u();)a=a+c+H.t(s.gC(s))}return a},
lm:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.m_().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.h2(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.k7(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mh:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dG:function(a){if(a>=10)return""+a
return"0"+a},
kF:function(a){return new P.bc(1000*a)},
hE:function(a){if(typeof a=="number"||H.km(a)||null==a)return J.du(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mk(a)},
hf:function(a){return new P.dx(a)},
jX:function(a){return new P.ai(!1,null,null,a)},
ek:function(a,b){return new P.cN(null,null,!0,a,b,"Value not in range")},
aU:function(a,b,c,d,e){return new P.cN(b,c,!0,a,d,"Invalid value")},
k8:function(a,b,c){if(a>c)throw H.c(P.aU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aU(b,a,c,"end",null))
return b}return c},
kS:function(a,b){if(a<0)throw H.c(P.aU(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.b6(b):e
return new P.dP(s,!0,a,c,"Index out of range")},
x:function(a){return new P.f0(a)},
l3:function(a){return new P.eY(a)},
k9:function(a){return new P.bS(a)},
as:function(a){return new P.dC(a)},
e:function(a){return new P.fk(a)},
kv:function(a){H.ot(a)},
S:function S(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=a},
hx:function hx(){},
hy:function hy(){},
G:function G(){},
dx:function dx(a){this.a=a},
eM:function eM(){},
eb:function eb(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cN:function cN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dP:function dP(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f0:function f0(a){this.a=a},
eY:function eY(a){this.a=a},
bS:function bS(a){this.a=a},
dC:function dC(a){this.a=a},
ee:function ee(){},
cQ:function cQ(){},
dE:function dE(a){this.a=a},
fk:function fk(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
h:function h(){},
dR:function dR(){},
ae:function ae(){},
L:function L(){},
aX:function aX(a){this.a=a},
oa:function(a){var s,r,q,p
if(t.I.b(a)){s=J.m6(a)
r=s.constructor===Array
r.toString
if(r){r=typeof CanvasPixelArray!=="undefined"
r.toString
if(r){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}}return a}r=a.data
r.toString
q=a.height
q.toString
p=a.width
p.toString
return new P.dg(r,q,p)},
o9:function(a){if(a instanceof P.dg)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var s,r,q,p,o
if(a==null)return null
s=P.M(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
lq:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.km(a))return a
if(t.f.b(a))return P.ly(a)
if(t.d.b(a)){s=[]
J.jW(a,new P.jD(s))
a=s}return a},
ly:function(a){var s={}
J.jW(a,new P.jJ(s))
return s},
dg:function dg(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(a){this.a=a},
jJ:function jJ(a){this.a=a},
dK:function dK(a,b){this.a=a
this.b=b},
hI:function hI(){},
hJ:function hJ(){},
fE:function fE(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
dY:function dY(){},
bk:function bk(){},
ec:function ec(){},
io:function io(){},
bQ:function bQ(){},
eB:function eB(){},
k:function k(){},
bq:function bq(){},
eL:function eL(){},
fs:function fs(){},
ft:function ft(){},
fA:function fA(){},
fB:function fB(){},
fN:function fN(){},
fO:function fO(){},
fW:function fW(){},
fX:function fX(){},
hi:function hi(){},
dy:function dy(){},
hj:function hj(a){this.a=a},
dz:function dz(){},
aK:function aK(){},
ed:function ed(){},
f8:function f8(){},
bP:function bP(){},
ev:function ev(){},
fJ:function fJ(){},
fK:function fK(){}},W={
kA:function(){var s=document.createElement("a")
s.toString
return s},
jY:function(){var s=document.createElement("canvas")
s.toString
return s},
mj:function(a,b,c){var s=document.body
s.toString
s=new H.bu(new W.a2(C.l.ae(s,a,b,c)),new W.hz())
return t.h.a(s.gaI(s))},
hA:function(a){return"wheel"},
ck:function(a){var s,r,q="element tag unavailable"
try{s=J.aG(a)
s.gdN(a)
q=s.gdN(a)}catch(r){H.aI(r)}return q},
jn:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ld:function(a,b,c,d){var s=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
Z:function(a,b,c,d){var s=W.lv(new W.jl(c),t.B)
if(s!=null&&!0)J.m2(a,b,s,!1)
return new W.fj(a,b,s,!1)},
lc:function(a){var s=W.kA(),r=window
s=new W.bZ(new W.js(s,r.location))
s.e2(a)
return s},
mV:function(a,b,c,d){return!0},
mW:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
lh:function(){var s=t.N
s=new W.fR(P.kK(C.r,s),P.cu(s),P.cu(s),P.cu(s),null)
s.e6(null,new H.cA(C.r,new W.jv()),["TEMPLATE"],null)
return s},
lv:function(a,b){var s=$.an
if(s===C.e)return a
return s.dc(a,b)},
o:function o(){},
he:function he(){},
dv:function dv(){},
dw:function dw(){},
bz:function bz(){},
dA:function dA(){},
b8:function b8(){},
b9:function b9(){},
ca:function ca(){},
aj:function aj(){},
hq:function hq(){},
F:function F(){},
ce:function ce(){},
hr:function hr(){},
ad:function ad(){},
at:function at(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
cg:function cg(){},
hv:function hv(){},
ch:function ch(){},
ci:function ci(){},
dH:function dH(){},
hw:function hw(){},
f9:function f9(a,b){this.a=a
this.b=b},
y:function y(){},
hz:function hz(){},
i:function i(){},
b:function b(){},
aN:function aN(){},
dI:function dI(){},
dJ:function dJ(){},
dL:function dL(){},
aO:function aO(){},
hM:function hM(){},
bd:function bd(){},
be:function be(){},
bH:function bH(){},
bg:function bg(){},
hY:function hY(){},
ie:function ie(){},
e2:function e2(){},
ig:function ig(a){this.a=a},
e3:function e3(){},
ih:function ih(a){this.a=a},
aS:function aS(){},
e4:function e4(){},
aa:function aa(){},
a2:function a2(a){this.a=a},
r:function r(){},
cI:function cI(){},
aT:function aT(){},
ei:function ei(){},
em:function em(){},
iu:function iu(a){this.a=a},
eo:function eo(){},
aB:function aB(){},
et:function et(){},
aV:function aV(){},
eu:function eu(){},
aW:function aW(){},
ey:function ey(){},
iD:function iD(a){this.a=a},
am:function am(){},
cR:function cR(){},
eC:function eC(){},
eD:function eD(){},
bT:function bT(){},
aC:function aC(){},
ag:function ag(){},
eF:function eF(){},
eG:function eG(){},
iM:function iM(){},
aY:function aY(){},
bp:function bp(){},
eK:function eK(){},
iR:function iR(){},
aE:function aE(){},
j3:function j3(){},
f2:function f2(){},
aZ:function aZ(){},
bX:function bX(){},
bY:function bY(){},
fa:function fa(){},
cZ:function cZ(){},
fo:function fo(){},
d2:function d2(){},
fI:function fI(){},
fP:function fP(){},
f7:function f7(){},
fg:function fg(a){this.a=a},
k0:function k0(a,b){this.a=a
this.$ti=b},
fj:function fj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jl:function jl(a){this.a=a},
ke:function ke(a){this.$ti=a},
bZ:function bZ(a){this.a=a},
H:function H(){},
cJ:function cJ(a){this.a=a},
ik:function ik(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(){},
jt:function jt(){},
ju:function ju(){},
fR:function fR(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jv:function jv(){},
fQ:function fQ(){},
cn:function cn(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
js:function js(a,b){this.a=a
this.b=b},
h_:function h_(a){this.a=a
this.b=0},
jz:function jz(a){this.a=a},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fl:function fl(){},
fm:function fm(){},
fq:function fq(){},
fr:function fr(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fC:function fC(){},
fD:function fD(){},
fF:function fF(){},
d9:function d9(){},
da:function da(){},
fG:function fG(){},
fH:function fH(){},
fM:function fM(){},
fS:function fS(){},
fT:function fT(){},
dc:function dc(){},
dd:function dd(){},
fU:function fU(){},
fV:function fV(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){}},K={
J:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.e("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.bk(a,0)
r=C.b.bk(b,0)
if(s>r){q=r
r=s
s=q}return new K.ip(s,r)},
aJ:function aJ(){},
dN:function dN(){},
a7:function a7(a){this.a=a},
ip:function ip(a,b){this.a=a
this.b=b},
p:function p(a){this.a=a}},L={
iP:function(){var s=t.N
return new L.iO(P.M(s,t.aJ),P.M(s,t.aX),P.cu(s))},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b){this.b=a
this.c=b},
iO:function iO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iS:function iS(a,b){this.b=a
this.c=!1
this.a=b}},O={
jZ:function(){return new O.bD([])},
bD:function bD(a){this.a=a
this.c=this.b=null},
cE:function cE(a){this.a=a
this.b=null},
e1:function(a,b){return new O.cC(new V.N(0,0,0),a,b,new A.ak(!1,!1,!1))},
e_:function e_(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(){},
i0:function i0(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
e0:function e0(){},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
i3:function i3(a){this.b=a},
i4:function i4(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
i5:function i5(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
cO:function cO(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
iG:function iG(){}},E={
kI:function(){var s=O.jZ(),r=new E.bE(s)
s.b_(r.ghi(),r.ghl())
r.sbC(0,null)
return r},
l9:function(){var s=window.navigator.vendor
s.toString
if(C.b.w(s,"Google"))return C.y
s=window.navigator.userAgent
s.toString
if(C.b.w(s,"Firefox"))return C.m
s=window.navigator.appVersion
s.toString
if(C.b.w(s,"Trident")||C.b.w(s,"Edge"))return C.n
s=window.navigator.appName
s.toString
if(C.b.w(s,"Microsoft"))return C.n
return C.z},
la:function(){var s=window.navigator.appVersion
s.toString
if(C.b.w(s,"Win"))return C.R
if(C.b.w(s,"Mac"))return C.t
if(C.b.w(s,"Linux"))return C.S
return C.T},
mG:function(a,b){var s
Date.now()
s=new E.iq(a,new P.S(Date.now(),!1),new P.S(Date.now(),!1),new O.cE([]),new O.cE([]),new O.cE([]),[null],P.M(t.N,t.k))
s.e1(a,b)
return s},
mN:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.l_(a,!0,!0,!0,!1)
s=W.jY()
r=s.style
r.width="100%"
r.height="100%"
J.m5(a).n(0,s)
return E.l_(s,!0,!0,!0,!1)},
l_:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cw(a,"webgl2",P.mr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.e("Failed to get the rendering context for WebGL."))
s=E.mG(l,a)
H.jB(l.getParameter(3379))
m=H.jB(l.getParameter(34076))
r=[]
q=$.hC
p=new X.f1(a,r,(q==null?$.hC=new E.fh(E.l9(),E.la()):q).a===C.m?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.Z(o,"contextmenu",p.geN(),!1))
r.push(W.Z(a,"focus",p.geT(),!1))
r.push(W.Z(a,"blur",p.geH(),!1))
r.push(W.Z(o,"keyup",p.geX(),!1))
r.push(W.Z(o,"keydown",p.geV(),!1))
r.push(W.Z(a,"mousedown",p.gf0(),!1))
r.push(W.Z(a,"mouseup",p.gf4(),!1))
r.push(W.Z(a,n,p.gf2(),!1))
W.hA(a)
W.hA(a)
r.push(W.Z(a,W.hA(a),p.gf6(),!1))
r.push(W.Z(o,n,p.geP(),!1))
r.push(W.Z(o,"mouseup",p.geR(),!1))
r.push(W.Z(o,"pointerlockchange",p.gf8(),!1))
r.push(W.Z(a,"touchstart",p.gfo(),!1))
r.push(W.Z(a,"touchend",p.gfk(),!1))
r.push(W.Z(a,"touchmove",p.gfm(),!1))
m=new E.eH(a,s,new T.iJ(l,m),p,new P.S(Date.now(),!1))
m.cW()
return m},
hk:function hk(){},
bE:function bE(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bB:function bB(a){this.b=a},
bN:function bN(a){this.b=a},
fh:function fh(a,b){this.a=a
this.b=b},
iq:function iq(a,b,c,d,e,f,g,h){var _=this
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
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
eH:function eH(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
iL:function iL(a){this.a=a}},Z={
l8:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.dk(c)),35044)
a.bindBuffer(b,null)
return new Z.f3(b,s)},
ah:function(a){return new Z.bt(a)},
f3:function f3(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
f4:function f4(a){this.a=a},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a){this.a=a}},D={
C:function(){return new D.bF()},
hm:function hm(){},
bF:function bF(){var _=this
_.c=_.b=_.a=null
_.d=0},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
O:function O(){},
av:function av(){},
aw:function aw(){},
z:function z(a,b,c){this.c=a
this.d=b
this.e=c},
cf:function cf(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
ct:function ct(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c9:function c9(a,b){this.a=a
this.b=b},dW:function dW(a,b){this.a=a
this.b=b},hT:function hT(a,b){this.c=a
this.d=b},cx:function cx(a,b,c){this.x=a
this.c=b
this.d=c},hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},bK:function bK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},ii:function ii(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bL:function bL(a,b,c){this.x=a
this.c=b
this.d=c},ej:function ej(){},cS:function cS(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iQ:function iQ(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},f1:function f1(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
k1:function(a){var s=new V.aL(0,0,0,1),r=$.kU
if(r==null){r=V.kT(0,0,1,1)
$.kU=r}return new X.hL(s,r)},
kP:function(a){var s,r,q=new X.ef(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gt().n(0,q.ge9())
q.al(new D.z("mover",s,q.b))}r=q.c
$.B().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.al(new D.z("fov",r,1.0471975511965976))}r=q.d
$.B().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.al(new D.z("near",r,0.1))}r=q.e
$.B().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.al(new D.z("far",r,2000))}return q},
hL:function hL(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
hP:function hP(){this.b=null},
ef:function ef(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iF:function iF(){}},V={
hn:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aL(s,r,q,1)},
oB:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dQ(a-b,s)
return(a<0?a+s:a)+b},
w:function(a,b,c){$.B().toString
return C.b.aC(C.d.cs(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c4:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.B().toString
n=C.b.aC(C.d.cs(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.b.aC(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
ku:function(a){return C.d.hE(Math.pow(2,C.d.ce(Math.log(a)/Math.log(2))))},
a9:function(){var s=$.kO
return s==null?$.kO=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kN:function(a,b,c){var s=c.G(),r=b.ay(s).G(),q=s.ay(r),p=new V.A(a.a,a.b,a.c)
return V.ay(r.a,q.a,s.a,r.aZ(0).a1(p),r.b,q.b,s.b,q.aZ(0).a1(p),r.c,q.c,s.c,s.aZ(0).a1(p),0,0,0,1)},
kQ:function(){var s=$.aA
return s==null?$.aA=new V.P(0,0,0):s},
kT:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.el(a,b,c,d)},
cX:function(){var s=$.l6
return s==null?$.l6=new V.A(0,0,0):s},
mQ:function(){var s=$.j6
return s==null?$.j6=new V.A(-1,0,0):s},
kd:function(){var s=$.j7
return s==null?$.j7=new V.A(0,1,0):s},
l7:function(){var s=$.j8
return s==null?$.j8=new V.A(0,0,1):s},
mP:function(a,b,c){return new V.A(a,b,c)},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(){},
cD:function cD(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Q:function Q(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
ou:function(a){P.mO(C.J,new V.jU(a))},
mI:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.Z(n,"scroll",new V.iA(s),!1)
return new V.iy(o)},
ar:function ar(){},
jU:function jU(a){this.a=a},
dF:function dF(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dM:function dM(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dO:function dO(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
eh:function eh(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
iy:function iy(a){this.a=a
this.b=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iB:function iB(a){this.a=a}},U={
hp:function(){return new U.ho()},
kE:function(a){var s=V.a9(),r=new U.cc(s)
if(!s.q(0,a))r.a=a
return r},
ho:function ho(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cc:function cc(a){this.a=a
this.b=null},
bG:function bG(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a0:function a0(){},
cU:function cU(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cV:function cV(a,b,c,d,e){var _=this
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
cW:function cW(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={cb:function cb(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},cd:function cd(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},cl:function cl(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mu:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.gak(a4)+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+b1.gak(b1)+b2.gak(b2)+"_"
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
c=$.ao()
if(h){s=$.b5()
c=new Z.bt(c.a|s.a)}if(g)c=new Z.bt(c.a|$.b4().a)
if(f)c=new Z.bt(c.a|$.b3().a)
return new A.i2(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jF:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jG:function(a,b,c){var s
A.jF(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hb(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
nD:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jF(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
nz:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jG(b,r,"ambient")
b.a+="\n"},
nB:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jG(b,r,"diffuse")
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
nE:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jG(b,r,"invDiffuse")
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
nK:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jG(b,r,"specular")
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
nG:function(a,b){var s,r,q
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
nI:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jF(b,r,"reflect")
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
nJ:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jF(b,r,"refract")
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
nA:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hb(r)
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
nC:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.hb(r)
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
nH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hb(r)
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
nL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hb(r)
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
if(m){s=$.hC
if(s==null)s=$.hC=new E.fh(E.l9(),E.la())
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
nF:function(a,b){var s,r
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
nM:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.aX(""),j=""+"precision mediump float;\n"
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
A.nD(a,k)
A.nz(a,k)
A.nB(a,k)
A.nE(a,k)
A.nK(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.nI(a,k)
A.nJ(a,k)}A.nG(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nA(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nC(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nH(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nL(a,p[n],k)
A.nF(a,k)}p=k.a+="// === Main ===\n"
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
k.a+=l+(q[0].toUpperCase()+C.b.ar(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ar(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ar(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ar(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
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
nN:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aT+"];\n"
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
nP:function(a,b){var s
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
nO:function(a,b){var s
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
nR:function(a,b){var s,r
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
nS:function(a,b){var s,r
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
nQ:function(a,b){var s
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
nT:function(a,b){var s
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
hb:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.ar(a,1)},
kc:function(a,b,c,d,e){var s=new A.iX([],a,c,e)
s.f=d
s.e=P.hW(d,0,!1)
return s},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.i_=_.hZ=_.dw=_.hY=_.hX=_.dv=_.du=_.hW=_.hV=_.dt=_.ds=_.hU=_.hT=_.dr=_.hS=_.hR=_.dq=_.dn=_.br=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.c6=c
_.c7=d
_.c8=e
_.c9=f
_.ca=g
_.cb=h
_.cc=i
_.cd=j
_.i2=_.i1=_.i0=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b7:function b7(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aT=b5
_.br=b6
_.dn=b7},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eR:function eR(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eU:function eU(a,b,c,d,e,f,g,h,i,j){var _=this
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
eX:function eX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bR:function bR(){},
cP:function cP(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
iW:function iW(){},
j1:function j1(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.c=b
this.d=c},
iZ:function iZ(a,b,c){this.a=a
this.c=b
this.d=c},
j_:function j_(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eN:function eN(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
eO:function eO(a,b,c){this.a=a
this.c=b
this.d=c},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
eS:function eS(a,b,c){this.a=a
this.c=b
this.d=c},
eT:function eT(a,b,c){this.a=a
this.c=b
this.d=c},
eV:function eV(a,b,c){this.a=a
this.c=b
this.d=c},
eW:function eW(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oA:function(){return F.ob(15,30,0.5,1,new F.jV())},
ob:function(a,b,c,d,e){var s=F.ow(a,b,new F.jK(e,d,b,c))
s.ax()
s.hh(new F.jc(),new F.il())
return s},
ow:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.c(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.kY()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.E(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.j9(e,e,new V.aL(n,0,0,1),e,e,new V.Q(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.dh(e))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.E(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.j9(e,e,new V.aL(h,g,f,1),e,e,new V.Q(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.dh(e))}}s.gP().fV(a+1,b+1,r)
return s},
kY:function(){return new F.iv()},
j9:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cY()
h=$.lW()
s=$.ao()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b5().a)!==0)q.r=e
if((r&$.b4().a)!==0)q.x=b
if((r&$.bx().a)!==0)q.y=f
if((r&$.by().a)!==0)q.z=g
if((r&$.lX().a)!==0)q.Q=c
if((r&$.c6().a)!==0)q.ch=i
if((r&$.b3().a)!==0)q.cx=a
return q},
jV:function jV(){},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hH:function hH(){},
iC:function iC(){},
hU:function hU(){},
iV:function iV(){},
iv:function iv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
eq:function eq(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
iw:function iw(a){this.b=a},
cY:function cY(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jg:function jg(a){this.a=a},
jf:function jf(a){this.a=a},
E:function E(a,b){this.a=a
this.b=!1
this.c=b},
bV:function bV(a,b,c){this.b=a
this.c=b
this.d=c},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.b=a
this.c=b},
jd:function jd(){},
jc:function jc(){},
je:function je(){},
il:function il(){}},T={iH:function iH(){},iI:function iI(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},iJ:function iJ(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},iK:function iK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
or:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="modifiers",a7=34067,a8=V.mI("Test 013"),a9=W.jY()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9).toString
a8.d4(["Test of sky box and cover pass."])
a8.d4(["\xab[Back to Tests|../]"])
s=document.getElementById(a4)
if(s==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
r=E.mN(s,!0,!0,!0,!1)
q=new U.bG(V.a9(),[])
q.b_(q.gez(),q.gfc())
p=r.x
o=U.hp()
n=U.hp()
m=$.bs
if(m==null)m=$.bs=new V.Y(0,0)
m=new U.cV(o,n,new X.a_(!1,!1,!1),m,V.a9())
o.scv(0,!0)
o.sci(6.283185307179586)
o.sck(0)
o.sa7(0,0)
o.scj(100)
o.sV(0)
o.sc5(0.5)
l=m.gaO()
o.gt().n(0,l)
n.scv(0,!0)
n.sci(6.283185307179586)
n.sck(0)
n.sa7(0,0)
n.scj(100)
n.sV(0)
n.sc5(0.5)
n.gt().n(0,l)
o=new X.a_(!1,!1,!1)
if(!m.d.q(0,o)){k=m.d
m.d=o
m.O(new D.z(a6,k,o))}m.b8(p)
q.n(0,m)
U.hp()
if($.bs==null)$.bs=new V.Y(0,0)
V.a9()
o=U.hp()
n=$.bs
if(n==null)n=$.bs=new V.Y(0,0)
n=new U.cU(o,new X.a_(!1,!1,!1),n,V.a9())
o.scv(0,!0)
o.sci(6.283185307179586)
o.sck(0)
o.sa7(0,0)
o.scj(100)
o.sV(0)
o.sc5(0.2)
o.gt().n(0,n.gaO())
o=new X.a_(!0,!1,!1)
if(!n.c.q(0,o)){k=n.c
n.c=o
n.O(new D.z(a6,k,o))}n.b8(p)
q.n(0,n)
o=new X.a_(!1,!1,!1)
n=new U.cW(o,V.a9())
m=new X.a_(!1,!1,!1)
if(!o.q(0,m)){n.b=m
n.O(new D.z(a6,o,m))}n.b8(p)
q.n(0,n)
q.n(0,U.kE(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.kP(q)
i=X.k1(a5)
if(i.b){i.b=!1
i.al(new D.z("clearColor",!0,!1))}h=E.kI()
h.sbC(0,F.oA())
p=O.jZ()
g=new O.e_(p)
p.b_(g.geD(),g.geF())
p=g.gdE()
p.gt().n(0,g.gcU())
p.gdD().n(0,g.gbj())
p=g.gdE()
f=V.kd()
o=U.kE(V.kN(V.kQ(),f,new V.A(0,-1,-1)))
n=new V.N(1,1,1)
m=new D.cf(new V.N(1,1,1),V.l7(),V.kd(),V.mQ())
k=m.a
m.a=o
o.gt().n(0,m.ge4())
m.as(new D.z("mover",k,m.a))
if(!m.b.q(0,n)){k=m.b
m.b=n
m.as(new D.z("color",k,n))}p.n(0,m)
p=g.gd6()
p.saS(0,new V.N(0,0,1))
p=g.gdj()
p.saS(0,new V.N(0,1,0))
p=g.gbD()
p.saS(0,new V.N(1,0,0))
p=g.gbD()
p.cY(new A.ak(!0,!1,!1))
p.cZ(10)
p=r.f
o=p.a
n=o.createTexture()
n.toString
o.bindTexture(a7,n)
o.texParameteri(a7,10242,10497)
o.texParameteri(a7,10243,10497)
o.texParameteri(a7,10241,9729)
o.texParameteri(a7,10240,9729)
o.bindTexture(a7,a5)
e=new T.iI(n)
p.aN(e,n,"../resources/maskonaive/posx.jpg",34069,!1,!1)
p.aN(e,n,"../resources/maskonaive/negx.jpg",34070,!1,!1)
p.aN(e,n,"../resources/maskonaive/posy.jpg",34071,!1,!1)
p.aN(e,n,"../resources/maskonaive/negy.jpg",34072,!1,!1)
p.aN(e,n,"../resources/maskonaive/posz.jpg",34073,!1,!1)
p.aN(e,n,"../resources/maskonaive/negz.jpg",34074,!1,!1)
n=E.kI()
d=new M.cd(n)
c=F.kY()
p=c.gY()
o=new V.A(-1,-1,1).G()
b=p.bo(new V.bl(1,2,4,6),V.hn(255,0,0),new V.P(-1,-1,0),new V.Q(0,1),o,a5)
o=c.gY()
p=new V.A(1,-1,1).G()
a=o.bo(new V.bl(0,3,4,6),V.hn(0,0,255),new V.P(1,-1,0),new V.Q(1,1),p,a5)
p=c.gY()
o=new V.A(1,1,1).G()
a0=p.bo(new V.bl(0,2,5,6),V.hn(0,128,0),new V.P(1,1,0),new V.Q(1,0),o,a5)
o=c.gY()
p=$.a1
if(p==null)p=$.a1=new V.Q(0,0)
m=new V.A(-1,1,1).G()
a1=o.bo(new V.bl(0,2,4,7),V.hn(255,255,0),new V.P(-1,1,0),p,m,a5)
c.gP().fU([b,a,a0,a1])
c.ax()
n.sbC(0,c)
d.sb9(a5)
d.sbe(0,a5)
d.sbf(a5)
p=new O.cO(new V.N(1,1,1))
k=p.c
p.c=e
e.gt().n(0,p.gbj())
p.Z(new D.z("boxTexture",k,p.c))
d.sbf(p)
d.sbe(0,i)
d.sb9(j)
p=O.jZ()
a2=new M.cl(p)
p.b_(a2.geJ(),a2.geL())
a3=X.k1(a5)
a2.sb9(a5)
a2.sbe(0,a3)
a2.sbf(a5)
a2.sb9(j)
a2.sbf(g)
a2.sbe(0,i)
p.n(0,h)
p=new M.cb([])
p.b_(p.gfg(),p.gfi())
p.a0(0,[d,a2])
o=r.d
if(o!==p){if(o!=null)o.gt().N(0,r.gcF())
r.d=p
p.gt().n(0,r.gcF())
r.cG()}p=r.Q
if(p==null)p=r.Q=D.C()
o=p.b
p=o==null?p.b=[]:o
p.push(new B.jS(d,a8))
V.ou(r)},
jS:function jS(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k5.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.cL(a)},
i:function(a){return"Instance of '"+H.cM(a)+"'"}}
J.dS.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia4:1}
J.cr.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bf.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.eg.prototype={}
J.br.prototype={}
J.ax.prototype={
i:function(a){var s=a[$.lK()]
if(s==null)return this.dY(a)
return"JavaScript function for "+J.du(s)},
$ico:1}
J.al.prototype={
co:function(a,b){if(!!a.fixed$length)H.f(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ek(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var s
if(!!a.fixed$length)H.f(P.x("remove"))
for(s=0;s<a.length;++s)if(J.R(a[s],b)){a.splice(s,1)
return!0}return!1},
a0:function(a,b){if(!!a.fixed$length)H.f(P.x("addAll"))
this.ec(a,b)
return},
ec:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.as(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.as(a))}},
k:function(a,b){var s,r,q=a.length,p=P.hW(q,"",!1)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
he:function(a){return this.k(a,"")},
hb:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.as(a))}throw H.c(H.hQ())},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gha:function(a){if(a.length>0)return a[0]
throw H.c(H.hQ())},
gbt:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hQ())},
d7:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.as(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.f(P.x("sort"))
H.mL(a,b==null?J.nq():b)},
dU:function(a){return this.b1(a,null)},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.R(a[s],b))return!0
return!1},
i:function(a){return P.k2(a,"[","]")},
gM:function(a){return new J.a6(a,a.length)},
gF:function(a){return H.cL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.f(P.x("set length"))
if(b>a.length)H.lo(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c3(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.f(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c3(a,b))
a[b]=c},
$ij:1,
$ih:1,
$il:1}
J.dU.prototype={}
J.a6.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bI.prototype={
ad:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
hE:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.x(""+a+".toInt()"))},
ce:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
cs:function(a,b){var s
if(b>20)throw H.c(P.aU(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dQ:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d_(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d_(a,b)},
d_:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
bm:function(a,b){var s
if(a>0)s=this.fL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fL:function(a,b){return b>31?0:a>>>b},
$iX:1,
$ia5:1}
J.cq.prototype={$im:1}
J.dT.prototype={}
J.aP.prototype={
c4:function(a,b){if(b<0)throw H.c(H.c3(a,b))
if(b>=a.length)H.f(H.c3(a,b))
return a.charCodeAt(b)},
bk:function(a,b){if(b>=a.length)throw H.c(H.c3(a,b))
return a.charCodeAt(b)},
S:function(a,b){return a+b},
bE:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
bh:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ek(b,null))
if(b>c)throw H.c(P.ek(b,null))
if(c>a.length)throw H.c(P.ek(c,null))
return a.substring(b,c)},
ar:function(a,b){return this.bh(a,b,null)},
hH:function(a){return a.toLowerCase()},
J:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aC:function(a,b){var s=b-a.length
if(s<=0)return a
return this.J(" ",s)+a},
h0:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aU(c,0,s,null,null))
return H.lG(a,b,c)},
w:function(a,b){return this.h0(a,b,0)},
ad:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gF:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$iv:1}
H.dX.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.n.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.c4(this.a,b)}}
H.j.prototype={}
H.cw.prototype={
gM:function(a){return new H.aR(this,this.gl(this))},
bB:function(a,b){return this.dX(0,b)}}
H.aR.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.ha(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.as(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
H.bi.prototype={
gM:function(a){return new H.cz(J.ap(this.a),this.b)},
gl:function(a){return J.b6(this.a)},
D:function(a,b){return this.b.$1(J.hc(this.a,b))}}
H.cj.prototype={$ij:1}
H.cz.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.W(this).Q[1].a(this.a)}}
H.cA.prototype={
gl:function(a){return J.b6(this.a)},
D:function(a,b){return this.b.$1(J.hc(this.a,b))}}
H.bu.prototype={
gM:function(a){return new H.f5(J.ap(this.a),this.b)}}
H.f5.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cm.prototype={}
H.f_.prototype={
m:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.bU.prototype={}
H.iT.prototype={
ag:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cK.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dV.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eZ.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.im.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fL.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.ba.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lI(r==null?"unknown":r)+"'"},
$ico:1,
ghK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eE.prototype={}
H.ex.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lI(s)+"'"}}
H.bA.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bA))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.cL(this.a)
else s=typeof r!=="object"?J.hd(r):H.cL(r)
return(s^H.cL(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.cM(s)+"'")}}
H.en.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.T.prototype={
gl:function(a){return this.a},
ga5:function(a){return new H.aQ(this)},
ghJ:function(a){return H.mt(new H.aQ(this),new H.hS(this))},
h1:function(a,b){var s=this.b
if(s==null)return!1
return this.ek(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bl(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bl(p,b)
q=r==null?n:r.b
return q}else return o.hd(b)},
hd:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cP(q,J.hd(a)&0x3ffffff)
r=this.dA(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cI(s==null?m.b=m.bW():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cI(r==null?m.c=m.bW():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bW()
p=J.hd(b)&0x3ffffff
o=m.cP(q,p)
if(o==null)m.bZ(q,p,[m.bX(b,c)])
else{n=m.dA(o,b)
if(n>=0)o[n].b=c
else o.push(m.bX(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.as(s))
r=r.c}},
cI:function(a,b,c){var s=this.bl(a,b)
if(s==null)this.bZ(a,b,this.bX(b,c))
else s.b=c},
ew:function(){this.r=this.r+1&67108863},
bX:function(a,b){var s,r=this,q=new H.hV(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ew()
return q},
dA:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1},
i:function(a){return P.kL(this)},
bl:function(a,b){return a[b]},
cP:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eo:function(a,b){delete a[b]},
ek:function(a,b){return this.bl(a,b)!=null},
bW:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bZ(r,s,r)
this.eo(r,s)
return r}}
H.hS.prototype={
$1:function(a){var s=this.a
return H.W(s).Q[1].a(s.h(0,a))},
$S:function(){return H.W(this.a).am("2(1)")}}
H.hV.prototype={}
H.aQ.prototype={
gl:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.dZ(s,s.r)
r.c=s.e
return r}}
H.dZ.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.as(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jO.prototype={
$1:function(a){return this.a(a)},
$S:28}
H.jP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.jQ.prototype={
$1:function(a){return this.a(a)},
$S:38}
H.hR.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cG.prototype={}
H.bM.prototype={
gl:function(a){return a.length},
$iu:1}
H.bj.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.cF.prototype={
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.e5.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e6.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e7.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e8.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e9.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cH.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.ea.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.d3.prototype={}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
H.af.prototype={
am:function(a){return H.fZ(v.typeUniverse,this,a)},
cJ:function(a){return H.ne(v.typeUniverse,this,a)}}
H.fn.prototype={}
H.fi.prototype={
i:function(a){return this.a}}
H.df.prototype={}
P.ji.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:39}
P.jh.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:40}
P.jj.prototype={
$0:function(){this.a.$0()},
$S:11}
P.jk.prototype={
$0:function(){this.a.$0()},
$S:11}
P.de.prototype={
e7:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c2(new P.jx(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
e8:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c2(new P.jw(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$iiN:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jw.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e_(s,o)}q.c=p
r.d.$1(q)},
$S:11}
P.c_.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bv.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.c_){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.ap(s)
if(o instanceof P.bv){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.db.prototype={
gM:function(a){return new P.bv(this.a())}}
P.f6.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.jA.prototype={}
P.jH.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jp.prototype={
hA:function(a){var s,r,q,p=null
try{if(C.e===$.an){a.$0()
return}P.nV(p,p,this,a)}catch(q){s=H.aI(q)
r=H.kr(q)
P.lu(p,p,this,s,r)}},
hB:function(a,b){var s,r,q,p=null
try{if(C.e===$.an){a.$1(b)
return}P.nW(p,p,this,a,b)}catch(q){s=H.aI(q)
r=H.kr(q)
P.lu(p,p,this,s,r)}},
hC:function(a,b){return this.hB(a,b,t.z)},
fY:function(a){return new P.jq(this,a)},
dc:function(a,b){return new P.jr(this,a,b)}}
P.jq.prototype={
$0:function(){return this.a.hA(this.b)},
$S:2}
P.jr.prototype={
$1:function(a){return this.a.hC(this.b,a)},
$S:function(){return this.c.am("~(0)")}}
P.d_.prototype={
gM:function(a){var s=new P.d0(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ej(b)
return r}},
ej:function(a){var s=this.d
if(s==null)return!1
return this.bN(s[this.bK(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cK(s==null?q.b=P.kf():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cK(r==null?q.c=P.kf():r,b)}else return q.eb(0,b)},
eb:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kf()
s=q.bK(b)
r=p[s]
if(r==null)p[s]=[q.bJ(b)]
else{if(q.bN(r,b)>=0)return!1
r.push(q.bJ(b))}return!0},
N:function(a,b){if((b&1073741823)===b)return this.fs(this.c,b)
else return this.fq(0,b)},
fq:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bK(b)
r=n[s]
q=o.bN(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d1(p)
return!0},
cK:function(a,b){if(a[b]!=null)return!1
a[b]=this.bJ(b)
return!0},
fs:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d1(s)
delete a[b]
return!0},
cL:function(){this.r=this.r+1&1073741823},
bJ:function(a){var s,r=this,q=new P.jo(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cL()
return q},
d1:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cL()},
bK:function(a){return J.hd(a)&1073741823},
bN:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.R(a[r].a,b))return r
return-1}}
P.jo.prototype={}
P.d0.prototype={
gC:function(a){return H.W(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.as(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cp.prototype={}
P.cv.prototype={$ij:1,$ih:1,$il:1}
P.D.prototype={
gM:function(a){return new H.aR(a,this.gl(a))},
D:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.as(a))}},
gdB:function(a){return this.gl(a)===0},
hG:function(a,b){var s,r,q,p,o=this
if(o.gdB(a)){s=J.k3(0)
return s}r=o.h(a,0)
q=P.hW(o.gl(a),r,!0)
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hF:function(a){return this.hG(a,!0)},
i:function(a){return P.k2(a,"[","]")}}
P.cy.prototype={}
P.i_.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:34}
P.V.prototype={
E:function(a,b){var s,r,q
for(s=J.ap(this.ga5(a)),r=H.c5(a).am("V.V");s.u();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.b6(this.ga5(a))},
i:function(a){return P.kL(a)},
$iU:1}
P.ep.prototype={
a0:function(a,b){var s
for(s=J.ap(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.k2(this,"{","}")},
D:function(a,b){var s,r,q,p,o="index"
H.o7(b,o,t.S)
P.kS(b,o)
for(s=P.mZ(this,this.r),r=H.W(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.I(b,this,o,null,q))}}
P.d7.prototype={$ij:1,$ih:1}
P.d1.prototype={}
P.dj.prototype={}
P.dB.prototype={}
P.dD.prototype={}
P.hB.prototype={}
P.hO.prototype={
i:function(a){return this.a}}
P.hN.prototype={
el:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.aX("")
if(o>b)n.a+=C.b.bh(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.bh(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.j4.prototype={}
P.j5.prototype={
h2:function(a){var s,r,q,p=P.k8(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jy(r)
if(q.eq(a,0,p)!==p){C.b.c4(a,p-1)
q.c0()}return new Uint8Array(r.subarray(0,H.ni(0,q.b,s)))}}
P.jy.prototype={
c0:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fS:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c0()
return!1}},
eq:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.c4(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bk(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fS(p,C.b.bk(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c0()}else if(p<=2047){o=l.b
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
P.S.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.S&&this.a===b.a&&!0},
ad:function(a,b){return C.c.ad(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.bm(s,30))&1073741823},
i:function(a){var s=this,r=P.mh(H.mC(s)),q=P.dG(H.mA(s)),p=P.dG(H.mw(s)),o=P.dG(H.mx(s)),n=P.dG(H.mz(s)),m=P.dG(H.mB(s)),l=P.mi(H.my(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bc.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bc&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
ad:function(a,b){return C.c.ad(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hy(),o=this.a
if(o<0)return"-"+new P.bc(0-o).i(0)
s=p.$1(C.c.a_(o,6e7)%60)
r=p.$1(C.c.a_(o,1e6)%60)
q=new P.hx().$1(o%1e6)
return""+C.c.a_(o,36e8)+":"+s+":"+r+"."+q}}
P.hx.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.hy.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.G.prototype={}
P.dx.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hE(s)
return"Assertion failed"}}
P.eM.prototype={}
P.eb.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbM()+o+m
if(!q.a)return l
s=q.gbL()
r=P.hE(q.b)
return l+s+": "+r}}
P.cN.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.dP.prototype={
gbM:function(){return"RangeError"},
gbL:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.f0.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eY.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dC.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hE(s)+"."}}
P.ee.prototype={
i:function(a){return"Out of Memory"},
$iG:1}
P.cQ.prototype={
i:function(a){return"Stack Overflow"},
$iG:1}
P.dE.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fk.prototype={
i:function(a){return"Exception: "+this.a}}
P.hK.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.bh(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
bB:function(a,b){return new H.bu(this,b)},
gl:function(a){var s,r=this.gM(this)
for(s=0;r.u();)++s
return s},
gaI:function(a){var s,r=this.gM(this)
if(!r.u())throw H.c(H.hQ())
s=r.gC(r)
if(r.u())throw H.c(H.mm())
return s},
D:function(a,b){var s,r,q
P.kS(b,"index")
for(s=this.gM(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.I(b,this,"index",null,r))},
i:function(a){return P.ml(this,"(",")")}}
P.dR.prototype={}
P.ae.prototype={
gF:function(a){return P.L.prototype.gF.call(C.M,this)},
i:function(a){return"null"}}
P.L.prototype={constructor:P.L,$iL:1,
q:function(a,b){return this===b},
gF:function(a){return H.cL(this)},
i:function(a){return"Instance of '"+H.cM(this)+"'"},
toString:function(){return this.i(this)}}
P.aX.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.o.prototype={}
W.he.prototype={
gl:function(a){return a.length}}
W.dv.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dw.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bz.prototype={$ibz:1}
W.dA.prototype={}
W.b8.prototype={$ib8:1}
W.b9.prototype={
cw:function(a,b,c){if(c!=null)return a.getContext(b,P.ly(c))
return a.getContext(b)},
dP:function(a,b){return this.cw(a,b,null)},
$ib9:1}
W.ca.prototype={$ica:1}
W.aj.prototype={
gl:function(a){return a.length}}
W.hq.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.ce.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.hr.prototype={}
W.ad.prototype={}
W.at.prototype={}
W.hs.prototype={
gl:function(a){return a.length}}
W.ht.prototype={
gl:function(a){return a.length}}
W.hu.prototype={
gl:function(a){return a.length}}
W.cg.prototype={}
W.hv.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ch.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.ci.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
return r+H.t(s)+") "+H.t(this.gaH(a))+" x "+H.t(this.gaA(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aG(b)
if(s===r.gbu(b)){s=a.top
s.toString
s=s===r.gbz(b)&&this.gaH(a)===r.gaH(b)&&this.gaA(a)===r.gaA(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.ld(r,C.d.gF(s),C.d.gF(this.gaH(a)),C.d.gF(this.gaA(a)))},
gdd:function(a){var s=a.bottom
s.toString
return s},
gcQ:function(a){return a.height},
gaA:function(a){var s=this.gcQ(a)
s.toString
return s},
gbu:function(a){var s=a.left
s.toString
return s},
gcr:function(a){var s=a.right
s.toString
return s},
gbz:function(a){var s=a.top
s.toString
return s},
gd2:function(a){return a.width},
gaH:function(a){var s=this.gd2(a)
s.toString
return s},
$iab:1}
W.dH.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.hw.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.f9.prototype={
gdB:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gM:function(a){var s=this.hF(this)
return new J.a6(s,s.length)}}
W.y.prototype={
ga4:function(a){return new W.fg(a)},
gdf:function(a){var s=a.children
s.toString
return new W.f9(a,s)},
gdg:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ab(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
ae:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kH
if(s==null){s=[]
r=new W.cJ(s)
s.push(W.lc(null))
s.push(W.lh())
$.kH=r
d=r}else d=s
s=$.kG
if(s==null){s=new W.h_(d)
$.kG=s
c=s}else{s.a=d
c=s}}if($.aM==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aM=r
r=r.createRange()
r.toString
$.k_=r
r=$.aM.createElement("base")
t.w.a(r)
s=s.baseURI
s.toString
r.href=s
$.aM.head.appendChild(r).toString}s=$.aM
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aM
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aM.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.w(C.P,s)}else s=!1
if(s){$.k_.selectNodeContents(q)
s=$.k_
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aM.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aM.body)J.kz(q)
c.cz(p)
document.adoptNode(p).toString
return p},
h3:function(a,b,c){return this.ae(a,b,c,null)},
dR:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ae(a,b,null,null))
s.toString},
gdN:function(a){var s=a.tagName
s.toString
return s},
$iy:1}
W.hz.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
W.i.prototype={$ii:1}
W.b.prototype={
fT:function(a,b,c,d){if(c!=null)this.ed(a,b,c,!1)},
ed:function(a,b,c,d){return a.addEventListener(b,H.c2(c,1),!1)},
$ib:1}
W.aN.prototype={$iaN:1}
W.dI.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.dJ.prototype={
gl:function(a){return a.length}}
W.dL.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hM.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bd.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.be.prototype={
gdi:function(a){var s=a.data
s.toString
return s},
$ibe:1}
W.bH.prototype={$ibH:1}
W.bg.prototype={$ibg:1}
W.hY.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ie.prototype={
gl:function(a){return a.length}}
W.e2.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga5:function(a){var s=[]
this.E(a,new W.ig(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.e3.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga5:function(a){var s=[]
this.E(a,new W.ih(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.ih.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.aS.prototype={$iaS:1}
W.e4.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.aa.prototype={$iaa:1}
W.a2.prototype={
gaI:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.k9("No elements"))
if(r>1)throw H.c(P.k9("More than one element"))
s=s.firstChild
s.toString
return s},
a0:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gM:function(a){var s=this.a.childNodes
return new W.cn(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.r.prototype={
hv:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
hy:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.m1(s,b,a)}catch(q){H.aI(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dW(a):s},
fw:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cI.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.aT.prototype={
gl:function(a){return a.length},
$iaT:1}
W.ei.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.em.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga5:function(a){var s=[]
this.E(a,new W.iu(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.iu.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eo.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.et.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.aV.prototype={$iaV:1}
W.eu.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.aW.prototype={
gl:function(a){return a.length},
$iaW:1}
W.ey.prototype={
h:function(a,b){return a.getItem(H.jC(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga5:function(a){var s=[]
this.E(a,new W.iD(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iU:1}
W.iD.prototype={
$2:function(a,b){return this.a.push(a)},
$S:32}
W.am.prototype={$iam:1}
W.cR.prototype={
ae:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bF(a,b,c,d)
s=W.mj("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a2(r).a0(0,new W.a2(s))
return r}}
W.eC.prototype={
ae:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bF(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a2(C.v.ae(r,b,c,d))
r=new W.a2(r.gaI(r))
new W.a2(s).a0(0,new W.a2(r.gaI(r)))
return s}}
W.eD.prototype={
ae:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bF(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a2(C.v.ae(r,b,c,d))
new W.a2(s).a0(0,new W.a2(r.gaI(r)))
return s}}
W.bT.prototype={$ibT:1}
W.aC.prototype={$iaC:1}
W.ag.prototype={$iag:1}
W.eF.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.eG.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.iM.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aY.prototype={$iaY:1}
W.bp.prototype={$ibp:1}
W.eK.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.iR.prototype={
gl:function(a){return a.length}}
W.aE.prototype={}
W.j3.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.f2.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={
gh6:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.x("deltaY is not supported"))},
gh5:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.x("deltaX is not supported"))},
$iaZ:1}
W.bX.prototype={
fz:function(a,b){var s=a.requestAnimationFrame(H.c2(b,1))
s.toString
return s},
ep:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bY.prototype={$ibY:1}
W.fa.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.cZ.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
s=r+H.t(s)+") "
r=a.width
r.toString
r=s+H.t(r)+" x "
s=a.height
s.toString
return r+H.t(s)},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aG(b)
if(s===r.gbu(b)){s=a.top
s.toString
if(s===r.gbz(b)){s=a.width
s.toString
if(s===r.gaH(b)){s=a.height
s.toString
r=s===r.gaA(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gF(p)
s=a.top
s.toString
s=C.d.gF(s)
r=a.width
r.toString
r=C.d.gF(r)
q=a.height
q.toString
return W.ld(p,s,r,C.d.gF(q))},
gcQ:function(a){return a.height},
gaA:function(a){var s=a.height
s.toString
return s},
gd2:function(a){return a.width},
gaH:function(a){var s=a.width
s.toString
return s}}
W.fo.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.d2.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.fI.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.fP.prototype={
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
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$il:1}
W.f7.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga5(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.jC(q.getAttribute(o)))}},
ga5:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.fg.prototype={
h:function(a,b){return this.a.getAttribute(H.jC(b))},
gl:function(a){return this.ga5(this).length}}
W.k0.prototype={}
W.fj.prototype={}
W.jl.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.ke.prototype={}
W.bZ.prototype={
e2:function(a){var s
if($.fp.a===0){for(s=0;s<262;++s)$.fp.m(0,C.O[s],W.oi())
for(s=0;s<12;++s)$.fp.m(0,C.j[s],W.oj())}},
aQ:function(a){return $.lZ().w(0,W.ck(a))},
ao:function(a,b,c){var s=$.fp.h(0,W.ck(a)+"::"+b)
if(s==null)s=$.fp.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaz:1}
W.H.prototype={
gM:function(a){return new W.cn(a,this.gl(a))}}
W.cJ.prototype={
aQ:function(a){return C.a.d7(this.a,new W.ik(a))},
ao:function(a,b,c){return C.a.d7(this.a,new W.ij(a,b,c))},
$iaz:1}
W.ik.prototype={
$1:function(a){return a.aQ(this.a)},
$S:13}
W.ij.prototype={
$1:function(a){return a.ao(this.a,this.b,this.c)},
$S:13}
W.d8.prototype={
e6:function(a,b,c,d){var s,r,q
this.a.a0(0,c)
s=b.bB(0,new W.jt())
r=b.bB(0,new W.ju())
this.b.a0(0,s)
q=this.c
q.a0(0,C.Q)
q.a0(0,r)},
aQ:function(a){return this.a.w(0,W.ck(a))},
ao:function(a,b,c){var s=this,r=W.ck(a),q=s.c
if(q.w(0,r+"::"+b))return s.d.fW(c)
else if(q.w(0,"*::"+b))return s.d.fW(c)
else{q=s.b
if(q.w(0,r+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,r+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$iaz:1}
W.jt.prototype={
$1:function(a){return!C.a.w(C.j,a)},
$S:14}
W.ju.prototype={
$1:function(a){return C.a.w(C.j,a)},
$S:14}
W.fR.prototype={
ao:function(a,b,c){if(this.dZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.jv.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:48}
W.fQ.prototype={
aQ:function(a){var s
if(t.r.b(a))return!1
s=t.u.b(a)
if(s&&W.ck(a)==="foreignObject")return!1
if(s)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.b.bE(b,"on"))return!1
return this.aQ(a)},
$iaz:1}
W.cn.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.m0(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.W(this).c.a(this.d)}}
W.js.prototype={}
W.h_.prototype={
cz:function(a){var s,r=new W.jz(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
b7:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.kz(a)
else b.removeChild(a).toString},
fD:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.m4(a)
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
o=p}l=o}catch(n){H.aI(n)}r="element unprintable"
try{r=J.du(a)}catch(n){H.aI(n)}try{q=W.ck(a)
this.fC(a,b,l,r,q,k,j)}catch(n){if(H.aI(n) instanceof P.ai)throw n
else{this.b7(a,b)
p=window
p.toString
p="Removing corrupted element "+H.t(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
fC:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b7(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aQ(a)){m.b7(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.t(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.ao(a,"is",g)){m.b7(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.ga5(f).slice(0)
for(p=f.ga5(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.m8(o)
H.jC(o)
if(!r.ao(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.t(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.bg.b(a)){s=a.content
s.toString
m.cz(s)}}}
W.jz.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.fD(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.b7(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.k9("Corrupt HTML")
throw H.c(n)}}catch(p){H.aI(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:26}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fF.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fM.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
P.dg.prototype={$ibe:1,
gdi:function(a){return this.a}}
P.jD.prototype={
$1:function(a){this.a.push(P.lq(a))},
$S:50}
P.jJ.prototype={
$2:function(a,b){this.a[a]=P.lq(b)},
$S:30}
P.dK.prototype={
gb5:function(){return new H.bi(new H.bu(this.b,new P.hI()),new P.hJ())},
E:function(a,b){C.a.E(P.hX(this.gb5(),!1),b)},
m:function(a,b,c){var s=this.gb5()
J.m7(s.b.$1(J.hc(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.b6(this.gb5().a)},
h:function(a,b){var s=this.gb5()
return s.b.$1(J.hc(s.a,b))},
gM:function(a){var s=P.hX(this.gb5(),!1)
return new J.a6(s,s.length)}}
P.hI.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.hJ.prototype={
$1:function(a){return t.h.a(a)},
$S:31}
P.fE.prototype={
gcr:function(a){return this.$ti.c.a(this.a+this.c)},
gdd:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aG(b)
if(s===r.gbu(b)){q=o.b
if(q===r.gbz(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcr(b)&&p.a(q+o.d)===r.gdd(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.mM(H.iE(H.iE(H.iE(H.iE(0,q),o),r),p))}}
P.ab.prototype={
gbu:function(a){return this.a},
gbz:function(a){return this.b},
gaH:function(a){return this.c},
gaA:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.dY.prototype={
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
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.bk.prototype={$ibk:1}
P.ec.prototype={
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
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.io.prototype={
gl:function(a){return a.length}}
P.bQ.prototype={$ibQ:1}
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
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.k.prototype={
gdf:function(a){return new P.dK(a,new W.a2(a))},
ae:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.lc(null))
o.push(W.lh())
o.push(new W.fQ())
c=new W.h_(new W.cJ(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.h3(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a2(q)
p=r.gaI(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ik:1}
P.bq.prototype={$ibq:1}
P.eL.prototype={
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
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.fs.prototype={}
P.ft.prototype={}
P.fA.prototype={}
P.fB.prototype={}
P.fN.prototype={}
P.fO.prototype={}
P.fW.prototype={}
P.fX.prototype={}
P.hi.prototype={
gl:function(a){return a.length}}
P.dy.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga5:function(a){var s=[]
this.E(a,new P.hj(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iU:1}
P.hj.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.dz.prototype={
gl:function(a){return a.length}}
P.aK.prototype={}
P.ed.prototype={
gl:function(a){return a.length}}
P.f8.prototype={}
P.bP.prototype={
hD:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.o9(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jX("Incorrect number or type of arguments"))},
$ibP:1}
P.ev.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=P.b2(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.fJ.prototype={}
P.fK.prototype={}
K.aJ.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"}}
K.dN.prototype={
aB:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].aB(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a7.prototype={
aB:function(a,b){return!this.dV(0,b)},
i:function(a){return"!["+this.bG(0)+"]"}}
K.ip.prototype={
aB:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.k7(this.a),r=H.k7(this.b)
return s+".."+r}}
K.p.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.e("May not create a Set with zero characters."))
s=new H.T(t.c)
for(r=new H.aR(a,a.gl(a)),q=H.W(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.hX(new H.aQ(s),!0)
C.a.dU(p)
this.a=p},
aB:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.ka(this.a)}}
L.ew.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iS(this.a.j(0,b),[])
s.push(p)
return p},
h9:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.aB(0,a))return p}return null},
i:function(a){return this.b},
d0:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.w(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aQ(s.c)
s=J.ap(s==null?[]:s)
for(;s.u();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.w(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bG(0))}return l.charCodeAt(0)==0?l:l}}
L.eI.prototype={
i:function(a){var s=H.kw(this.b,"\n","\\n"),r=H.kw(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eJ.prototype={
aE:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.iO.prototype={
j:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.ew(this,b,[])
s.m(0,b,r)}return r},
K:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eJ(a,P.M(s,s))
r.m(0,a,q)}return q},
ct:function(a){return this.hI(a)},
hI:function(a){var s=this
return P.ny(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$ct(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.W(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.a.co(a1,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=c==null
f=g?null:c.h9(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.ka(a0)
throw H.c(P.e("Untokenizable string [state: "+H.t(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.f(P.x("removeRange"))
P.k8(0,i,a0.length)
a0.splice(0,i-0)
C.a.a0(a1,a0)
a0=[]
b=[]
c=s.d
q=!m.w(0,l.a)?7:8
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
if(g!=null){e=P.ka(b)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.eI(d==null?g.b:d,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.w(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mX()
case 1:return P.mY(o)}}},t.aR)},
i:function(a){var s,r,q=new P.aX(""),p=this.d
if(p!=null)q.a=""+(p.d0()+"\n")
for(p=this.a,p=p.ghJ(p),p=new H.cz(J.ap(p.a),p.b),s=H.W(p).Q[1];p.u();){r=s.a(p.a)
if(r!=this.d)q.a+=H.t(r==null?null:r.d0())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iS.prototype={
i:function(a){return this.b.b+": "+this.bG(0)}}
O.bD.prototype={
cA:function(a,b,c){this.b=b
this.c=a},
b_:function(a,b){return this.cA(a,null,b)},
cT:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cE:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a6(s,s.length)},
D:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.cT([b])){s=this.a
r=s.length
s.push(b)
this.cE(r,[b])}},
a0:function(a,b){var s,r
if(this.cT(b)){s=this.a
r=s.length
C.a.a0(s,b)
this.cE(r,b)}},
$ih:1}
O.cE.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.C():s},
aK:function(){var s=this.b
return s==null?null:s.A(null)},
gX:function(a){var s=this.a
if(s.length>0)return C.a.gbt(s)
else return V.a9()},
by:function(a){this.a.push(a)
this.aK()},
aD:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.hk.prototype={}
E.bE.prototype={
sbC:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().N(0,s.gdI())
if(b!=null)b.gt().n(0,s.gdI())
s.bv(new D.z("shape",r,b))}},
aj:function(a,b){var s,r
for(s=this.y.a,s=new J.a6(s,s.length),r=H.W(s).c;s.u();)r.a(s.d).aj(0,b)},
a9:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.gX(o))
o.aK()
a.cn(p.f)
s=C.a.gbt(a.dy)
if(p.d!=null)if(s!=null)s.dL(a,p)
for(r=p.y.a,r=new J.a6(r,r.length),q=H.W(r).c;r.u();)q.a(r.d).a9(a)
a.cm()
o.aD()},
bv:function(a){var s=this.z
return s==null?null:s.A(a)},
a8:function(){return this.bv(null)},
dJ:function(a){this.e=null
this.bv(a)},
hn:function(){return this.dJ(null)},
dH:function(a){return this.bv(a)},
hk:function(){return this.dH(null)},
hj:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdG(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bF()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a8()},
hm:function(a,b){var s,r
for(s=b.gM(b),r=this.gdG();s.u();)s.gC(s).gt().N(0,r)
this.a8()},
i:function(a){return"Unnamed entity"}}
E.bB.prototype={
i:function(a){return this.b}}
E.bN.prototype={
i:function(a){return this.b}}
E.fh.prototype={}
E.iq.prototype={
e1:function(a,b){var s=this
s.cy.gt().n(0,new E.ir(s))
s.db.gt().n(0,new E.is(s))
s.dx.gt().n(0,new E.it(s))},
ghu:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gX(q).J(0,s.gX(s))
q=s}return q},
cn:function(a){var s=this.dy
return s.push(a==null?C.a.gbt(s):a)},
cm:function(){var s=this.dy
if(s.length>1)s.pop()},
d5:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.e("May not cache a shader with no name."))
s=this.fr
if(s.h1(0,r))throw H.c(P.e('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.ir.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.is.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.it.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.eH.prototype={
cH:function(a){this.dM()},
cG:function(){return this.cH(null)},
ghc:function(){var s,r=this,q=Date.now(),p=C.c.a_(P.kF(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.S(q,!1)
return s/p},
cW:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.ce(r*o)
r=s.clientHeight
r.toString
p=C.d.ce(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.l0(C.i,this.ghz())}},
dM:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.ep(s)
r=W.lv(new E.iL(this),t.H)
r.toString
C.x.fz(s,r)}},
hx:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cW()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.S(p,!1)
q.y=P.kF(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aK()
p=q.db
C.a.sl(p.a,0)
p.aK()
p=q.dx
C.a.sl(p.a,0)
p.aK()
p=q.dy
C.a.sl(p,0)
p.push(null)
m.a9(q)}q=n.Q
if(q!=null)q.A(null)}catch(o){s=H.aI(o)
r=H.kr(o)
P.kv("Error: "+H.t(s))
P.kv("Stack: "+H.t(r))
throw H.c(s)}}}
E.iL.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hx()}},
$S:25}
Z.f3.prototype={}
Z.c8.prototype={
W:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aI(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.t(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.f4.prototype={}
Z.bC.prototype={
az:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
W:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].W(a)}},
aX:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a9:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cM(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(m,", ")+"\nAttrs:   "+C.a.k(o,", ")}}
Z.dQ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cM(this.c)+"'")+"]"}}
Z.bt.prototype={
gcB:function(a){var s=this.a,r=(s&$.ao().a)!==0?3:0
if((s&$.b5().a)!==0)r+=3
if((s&$.b4().a)!==0)r+=3
if((s&$.bx().a)!==0)r+=2
if((s&$.by().a)!==0)r+=3
if((s&$.ds().a)!==0)r+=3
if((s&$.dt().a)!==0)r+=4
if((s&$.c6().a)!==0)++r
return(s&$.b3().a)!==0?r+4:r},
fX:function(a){var s,r=$.ao(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ds()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b3()
if((q&r.a)!==0)if(s===a)return r
return $.lY()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bt))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ao().a)!==0)s.push("Pos")
if((r&$.b5().a)!==0)s.push("Norm")
if((r&$.b4().a)!==0)s.push("Binm")
if((r&$.bx().a)!==0)s.push("Txt2D")
if((r&$.by().a)!==0)s.push("TxtCube")
if((r&$.ds().a)!==0)s.push("Clr3")
if((r&$.dt().a)!==0)s.push("Clr4")
if((r&$.c6().a)!==0)s.push("Weight")
if((r&$.b3().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.hm.prototype={}
D.bF.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
N:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.w(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.N(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.w(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.N(p,b)
s=p===!0||s}return s},
A:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.O():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.E(P.hX(p,!0),new D.hF(s))
r=q.b
if(r!=null){q.b=[]
C.a.E(r,new D.hG(s))}return!0},
h7:function(){return this.A(null)},
aF:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.hF.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.hG.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.O.prototype={}
D.av.prototype={}
D.aw.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
X.c9.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c9))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dW.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dW))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hT.prototype={}
X.cx.prototype={}
X.hZ.prototype={
b4:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.Q(o.a+b.a,o.b+b.b)
o=q.a.gaR()
s=$.a1
if(s==null)s=$.a1=new V.Q(0,0)
r=q.x
q.z=new P.S(p,!1)
q.x=n
return new X.bK(a,s,r,o,n)},
cl:function(a,b){this.r=a.a
return!1},
bd:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.b4(a,b))
return!0},
hr:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaR()
r=this.x
Date.now()
q.A(new X.bL(new V.Y(a.a,a.b),s,r))
return!0},
f_:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.A(new X.cx(c,q.a.gaR(),b))
q.y=new P.S(s,!1)
s=$.a1
q.x=s==null?$.a1=new V.Q(0,0):s}}
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
X.bK.prototype={}
X.ii.prototype={
bO:function(a,b,c){var s=this,r=new P.S(Date.now(),!1),q=s.a.gaR(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bK(a,p,o,q,b)},
cl:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.bO(a,b,!0))
return!0},
bd:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.A(r.bO(a,b,!0))
return!0},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bO(a,b,!1))
return!0},
hs:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaR()
Date.now()
r.A(new X.bL(new V.Y(a.a,a.b),s,b))
return!0},
gdl:function(){var s=this.b
return s==null?this.b=D.C():s},
gcu:function(){var s=this.c
return s==null?this.c=D.C():s},
gdF:function(){var s=this.d
return s==null?this.d=D.C():s}}
X.bL.prototype={}
X.ej.prototype={}
X.cS.prototype={}
X.iQ.prototype={
b4:function(a,b){var s,r,q,p,o=this,n=new P.S(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a1
if(r==null){r=new V.Q(0,0)
$.a1=r
s=r}else s=r}r=o.a.gaR()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cS(q,p,r,s)},
hq:function(a){var s=this.b
if(s==null)return!1
s.A(this.b4(a,!0))
return!0},
ho:function(a){var s=this.c
if(s==null)return!1
s.A(this.b4(a,!0))
return!0},
hp:function(a){var s=this.d
if(s==null)return!1
s.A(this.b4(a,!1))
return!0}}
X.f1.prototype={
gaU:function(a){var s=this.b
return s==null?this.b=new X.hT(new X.a_(!1,!1,!1),P.cu(t.S)):s},
ga2:function(){var s,r=this.c
if(r==null){r=$.a1
if(r==null){r=$.a1=new V.Q(0,0)
s=r}else s=r
r=this.c=new X.ii(this,r,s,new P.S(Date.now(),!1),new P.S(Date.now(),!1))}return r},
gaf:function(){var s=this.d
if(s==null){s=$.a1
if(s==null)s=$.a1=new V.Q(0,0)
s=this.d=new X.hZ(this,s,new P.S(Date.now(),!1),new P.S(Date.now(),!1))}return s},
gaW:function(){var s,r=this.e
if(r==null){r=$.a1
if(r==null){r=$.a1=new V.Q(0,0)
s=r}else s=r
r=this.e=new X.iQ(this,r,s,new P.S(Date.now(),!1),new P.S(Date.now(),!1))}return r},
gaR:function(){var s=this.a
return V.kT(0,0,C.f.gdg(s).c,C.f.gdg(s).d)},
cN:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dW(p,new X.a_(s,r,q))},
aP:function(a){var s,r,q=this.gaU(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a_(p,s,r)},
c_:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaU(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a_(s,r===!0,q===!0)},
aw:function(a){var s,r,q,p
if(a==null){s=$.a1
return s==null?$.a1=new V.Q(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.Q(r-p,q-s)},
b6:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.Y(r,s)},
bY:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ai(n)
m=o.pageY
m.toString
C.d.ai(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ai(l)
l=o.pageY
l.toString
l=C.d.ai(l)
k=j.top
k.toString
s.push(new V.Q(n-m,l-k))}return s},
at:function(a){var s,r,q,p
if(a==null)return new X.c9(0,new X.a_(!1,!1,!1))
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
return new X.c9(s,new X.a_(r,q,p))},
bP:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eU:function(a){return this.f=!0},
eI:function(a){return this.f=!1},
eO:function(a){if(this.f&&this.bP(a))a.preventDefault()},
eY:function(a){var s,r,q=this
if(!q.f)return
s=q.cN(a)
r=q.gaU(q)
r.c=s.b
r.d.n(0,s.a)},
eW:function(a){var s,r,q=this
if(!q.f)return
s=q.cN(a)
r=q.gaU(q)
r.c=s.b
r.d.N(0,s.a)},
f1:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.at(a)
r=p.b6(a)
if(p.gaf().cl(s,r))a.preventDefault()
return}s=p.at(a)
q=p.aw(a)
if(p.ga2().cl(s,q))a.preventDefault()},
f5:function(a){var s,r,q,p=this
p.aP(a)
s=p.at(a)
if(p.x){r=p.b6(a)
if(p.gaf().bd(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.ga2().bd(s,q))a.preventDefault()},
eS:function(a){var s,r,q,p=this
if(!p.bP(a)){p.aP(a)
s=p.at(a)
if(p.x){r=p.b6(a)
if(p.gaf().bd(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.ga2().bd(s,q))a.preventDefault()}},
f3:function(a){var s,r,q,p=this
p.aP(a)
s=p.at(a)
if(p.x){r=p.b6(a)
if(p.gaf().bc(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.ga2().bc(s,q))a.preventDefault()},
eQ:function(a){var s,r,q,p=this
if(!p.bP(a)){p.aP(a)
s=p.at(a)
if(p.x){r=p.b6(a)
if(p.gaf().bc(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.ga2().bc(s,q))a.preventDefault()}},
f7:function(a){var s,r,q=this
q.aP(a)
s=new V.Y(C.w.gh5(a),C.w.gh6(a)).J(0,q.Q)
if(q.x){if(q.gaf().hr(s))a.preventDefault()
return}r=q.aw(a)
if(q.ga2().hs(s,r))a.preventDefault()},
f9:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.at(q.y)
r=q.aw(q.y)
q.gaf().f_(s,r,p)}},
fp:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c_(a)
s=r.bY(a)
if(r.gaW().hq(s))a.preventDefault()},
fl:function(a){var s
this.c_(a)
s=this.bY(a)
if(this.gaW().ho(s))a.preventDefault()},
fn:function(a){var s
this.c_(a)
s=this.bY(a)
if(this.gaW().hp(s))a.preventDefault()}}
D.cf.prototype={
as:function(a){var s=this.r
return s==null?null:s.A(a)},
e5:function(){return this.as(null)},
$ics:1}
D.ct.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
gdD:function(){var s=this.z
return s==null?this.z=D.C():s},
as:function(a){var s=this.y
return s==null?null:s.A(a)},
cS:function(a){var s=this.z
return s==null?null:s.A(a)},
eZ:function(){return this.cS(null)},
fb:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.e3(a[r]))return!1
return!0},
eC:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcR(),q=this.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bF()
m=n.a;(m==null?n.a=[]:m).push(r)}this.as(new D.av())},
ff:function(a,b){var s,r,q,p
for(s=b.gM(b),r=this.gcR(),q=this.e;s.u();){p=s.gC(s)
C.a.N(q,p)
p.gt().N(0,r)}this.as(new D.aw())},
e3:function(a){var s=C.a.w(this.f,a)
return s}}
V.N.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.aL.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"},
B:function(){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.hD.prototype={}
V.cD.prototype={
a6:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cD))return!1
s=b.a
$.B().toString
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
i:function(a){var s,r,q,p,o=this,n=V.c4([o.a,o.d,o.r],3,0),m=V.c4([o.b,o.e,o.x],3,0),l=V.c4([o.c,o.f,o.y],3,0),k=n.length
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
V.bJ.prototype={
a6:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cf:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.B().toString
if(Math.abs(b3-0)<1e-9)return V.a9()
s=1/b3
r=-l
q=-a2
return V.ay((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
J:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ay(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bA:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.A(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bg:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.P(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bJ))return!1
s=b.a
$.B().toString
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
i:function(a){return this.B()},
I:function(a){var s,r,q,p,o,n=this,m=V.c4([n.a,n.e,n.y,n.cx],3,0),l=V.c4([n.b,n.f,n.z,n.cy],3,0),k=V.c4([n.c,n.r,n.Q,n.db],3,0),j=V.c4([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
B:function(){return this.I("")}}
V.Q.prototype={
aa:function(a){return new V.Y(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"},
B:function(){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.P.prototype={
S:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
aJ:function(a,b){return new V.P(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.P(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"},
B:function(){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.bl.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bl))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"},
B:function(){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.el.prototype={
gaq:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.el))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.w(s.a,3,0)+", "+V.w(s.b,3,0)+", "+V.w(s.c,3,0)+", "+V.w(s.d,3,0)+"]"}}
V.Y.prototype={
cg:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b},
J:function(a,b){return new V.Y(this.a*b,this.b*b)},
ab:function(a,b){var s
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.bs
return s==null?$.bs=new V.Y(0,0):s}return new V.Y(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.A.prototype={
cg:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
G:function(){var s=this,r=Math.sqrt(s.a1(s))
if(r===1)return s
return s.ab(0,r)},
ay:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.A(s*r-q*p,q*o-n*r,n*p-s*o)},
S:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
aZ:function(a){return new V.A(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
ab:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.cX()
return new V.A(this.a/b,this.b/b,this.c/b)},
dC:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.A))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"},
B:function(){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
U.ho.prototype={
bI:function(a){var s=V.oB(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
O:function(a){var s=this.y
return s==null?null:s.A(a)},
scv:function(a,b){},
sci:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bI(s)}r.O(new D.z("maximumLocation",q,r.b))}},
sck:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bI(s)}r.O(new D.z("minimumLocation",q,r.c))}},
sa7:function(a,b){var s,r=this
b=r.bI(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.O(new D.z("location",s,b))}},
scj:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.O(new D.z("maximumVelocity",p,a))}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.O(new D.z("velocity",r,a))}},
sc5:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.O(new D.z("dampening",s,a))}},
aj:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa7(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.cc.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.C():s},
aY:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cc))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bG.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.C():s},
O:function(a){var s=this.e
return s==null?null:s.A(a)},
a3:function(){return this.O(null)},
eA:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaO(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
if(p!=null){o=p.gt()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.O(new D.av())},
fd:function(a,b){var s,r
for(s=b.gM(b),r=this.gaO();s.u();)s.gC(s).gt().N(0,r)
this.O(new D.aw())},
aY:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a6(o,o.length),n=H.W(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.aY(0,b,c)
s=s==null?q:q.J(0,s)}}p.f=s==null?V.a9():s
o=p.e
if(o!=null)o.aF(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.R(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia0:1}
U.a0.prototype={}
U.cU.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.C():s},
O:function(a){var s=this.cy
return s==null?null:s.A(a)},
a3:function(){return this.O(null)},
b8:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga2().gdl().n(0,s.gbQ())
a.ga2().gdF().n(0,s.gbS())
a.ga2().gcu().n(0,s.gbU())
return!0},
bR:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gaU(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bT:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.aa(a.d)
if(s.a1(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa7(0,-a.y.aa(r).J(0,2).ab(0,s.gaq()).a*2.5+p.z)
q.sV(0)
p.Q=a.z.aa(r).J(0,2).ab(0,s.gaq())
p.a3()},
bV:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a1(s)>0.0001){r.b.sV(r.Q.a*10*2.5)
r.a3()}},
aY:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.aj(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.ay(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia0:1}
U.cV.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.C():s},
O:function(a){var s=this.fx
return s==null?null:s.A(a)},
a3:function(){return this.O(null)},
b8:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga2().gdl().n(0,q.gbQ())
a.ga2().gdF().n(0,q.gbS())
a.ga2().gcu().n(0,q.gbU())
s=a.gaf()
r=s.f
s=r==null?s.f=D.C():r
s.n(0,q.ger())
s=a.gaf()
r=s.d
s=r==null?s.d=D.C():r
s.n(0,q.geu())
s=a.gaW()
r=s.b
s=r==null?s.b=D.C():r
s.n(0,q.gfQ())
s=a.gaW()
r=s.d
s=r==null?s.d=D.C():r
s.n(0,q.gfO())
s=a.gaW()
r=s.c
s=r==null?s.c=D.C():r
s.n(0,q.gfM())
return!0},
aM:function(a){return new V.Y(a.a,a.b)},
bR:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bT:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aa(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.aa(r).J(0,2).ab(0,s.gaq()))
p=n.c
p.sa7(0,-q.a*2.5+n.cy)
o=n.b
o.sa7(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aM(a.z.aa(r).J(0,2).ab(0,s.gaq()))
n.a3()},
bV:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a3()}},
es:function(a){var s=this
if(t.e.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ev:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aM(a.y.aa(r).J(0,2).ab(0,s.gaq()))
p=n.c
p.sa7(0,-q.a*2.5+n.cy)
o=n.b
o.sa7(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aM(a.z.aa(r).J(0,2).ab(0,s.gaq()))
n.a3()},
fR:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fP:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aa(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.aa(r).J(0,2).ab(0,s.gaq()))
p=n.c
p.sa7(0,-q.a*2.5+n.cy)
o=n.b
o.sa7(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aM(a.z.aa(r).J(0,2).ab(0,s.gaq()))
n.a3()},
fN:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a3()}},
aY:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aj(0,s)
n=p.b
n.aj(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.ay(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.J(0,V.ay(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
U.cW.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.C():s},
O:function(a){var s=this.r
return s==null?null:s.A(a)},
b8:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga2()
r=s.e
s=r==null?s.e=D.C():r
r=this.gex()
s.n(0,r)
s=a.gaf()
q=s.e;(q==null?s.e=D.C():q).n(0,r)
return!0},
ey:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gaU(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.O(new D.z("zoom",r,q))}},
aY:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ay(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia0:1}
M.cb.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.C():s},
U:function(a){var s=this.r
return s==null?null:s.A(a)},
b3:function(){return this.U(null)},
fh:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gT(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q].gt()
o=p.a;(o==null?p.a=[]:o).push(r)}this.U(new D.av())},
fj:function(a,b){var s,r
for(s=b.gM(b),r=this.gT();s.u();)s.gC(s).gt().N(0,r)
this.U(new D.aw())},
a9:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a6(s,s.length),r=H.W(s).c;s.u();)r.a(s.d).a9(a)
q.f=!1},
$ibn:1}
M.cd.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.C():s},
U:function(a){var s=this.r
return s==null?null:s.A(a)},
b3:function(){return this.U(null)},
sb9:function(a){var s,r,q=this
if(a==null)a=new X.hP()
s=q.b
if(s!==a){if(s!=null)s.gt().N(0,q.gT())
r=q.b
q.b=a
a.gt().n(0,q.gT())
q.U(new D.z("camera",r,q.b))}},
sbe:function(a,b){var s,r,q=this
if(b==null)b=X.k1(null)
s=q.c
if(s!==b){if(s!=null)s.gt().N(0,q.gT())
r=q.c
q.c=b
b.gt().n(0,q.gT())
q.U(new D.z("target",r,q.c))}},
sbf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().N(0,r.gT())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gT())
r.U(new D.z("technique",s,r.d))}},
a9:function(a){var s,r=this
a.cn(r.d)
s=r.c
if(s!=null)s.W(a)
s=r.b
if(s!=null)s.W(a)
s=r.e
s.aj(0,a)
s.a9(a)
s=r.b
if(s!=null)s.aX(a)
a.cm()},
$ibn:1}
M.cl.prototype={
U:function(a){var s=this.y
return s==null?null:s.A(a)},
b3:function(){return this.U(null)},
eK:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gT(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bF()
n=o.a;(n==null?o.a=[]:n).push(r)}this.U(new D.av())},
eM:function(a,b){var s,r
for(s=b.gM(b),r=this.gT();s.u();)s.gC(s).gt().N(0,r)
this.U(new D.aw())},
sb9:function(a){var s,r,q=this
if(a==null)a=X.kP(null)
s=q.b
if(s!==a){if(s!=null)s.gt().N(0,q.gT())
r=q.b
q.b=a
a.gt().n(0,q.gT())
q.U(new D.z("camera",r,q.b))}},
sbe:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gt().N(0,r.gT())
s=r.c
r.c=b
b.gt().n(0,r.gT())
r.U(new D.z("target",s,r.c))}},
sbf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().N(0,r.gT())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gT())
r.U(new D.z("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.C():s},
a9:function(a){var s,r,q,p=this
a.cn(p.d)
s=p.c
if(s!=null)s.W(a)
s=p.b
if(s!=null)s.W(a)
s=p.d
if(s!=null)s.aj(0,a)
for(s=p.e.a,r=new J.a6(s,s.length),q=H.W(r).c;r.u();)q.a(r.d).aj(0,a)
for(s=new J.a6(s,s.length),r=H.W(s).c;s.u();)r.a(s.d).a9(a)
if(p.b!=null){a.cy.aD()
a.db.aD()}a.cm()},
$ibn:1}
A.hg.prototype={}
A.hh.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h8:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dk:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ak.prototype={
gak:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ak))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.cB.prototype={
e0:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.aX(""),d0=c8.fr
if(d0){s=""+"uniform mat4 objMat;\n"
c9.a=s}else s=""
r=c8.fx
s=(r?c9.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
c9.a=s
s+="\n"
c9.a=s
s=c9.a=s+"attribute vec3 posAttr;\n"
q=c8.k4
if(q){s+="attribute vec3 normAttr;\n"
c9.a=s}p=c8.r1
c9.a=(p?c9.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nN(c8,c9)
A.nP(c8,c9)
A.nO(c8,c9)
A.nR(c8,c9)
A.nS(c8,c9)
A.nQ(c8,c9)
A.nT(c8,c9)
s=c9.a+="vec4 getPos()\n"
s+="{\n"
c9.a=s
o=c8.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
c9.a=s
s+="}\n"
c9.a=s
s+="\n"
c9.a=s
s+="void main()\n"
c9.a=s
s=c9.a=s+"{\n"
if(o){s+="   setupBendData();\n"
c9.a=s}if(q){s+="   normalVec = getNorm();\n"
c9.a=s}if(p){s+="   binormalVec = getBinm();\n"
c9.a=s}if(c8.r2){s+="   txt2D = getTxt2D();\n"
c9.a=s}if(c8.rx){s+="   txtCube = getTxtCube();\n"
c9.a=s}if(c8.k2){s+="   objPos = getObjPos();\n"
c9.a=s}s=(c8.k3?c9.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
c9.a=s
s+="}\n"
c9.a=s
s=c9.a=s+"\n"
c3.dz(0,s.charCodeAt(0)==0?s:s,A.nM(c8))
c3.y=c3.ga4(c3).h(0,"posAttr")
c3.Q=c3.ga4(c3).h(0,"normAttr")
c3.z=c3.ga4(c3).h(0,"binmAttr")
c3.ch=c3.ga4(c3).h(0,"txt2DAttr")
c3.cx=c3.ga4(c3).h(0,"txtCubeAttr")
c3.cy=c3.ga4(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gL().R(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gL().R(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gL().R(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gL().R(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gL().R(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gL().R(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gL().R(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gL().R(0,"colorMat"))
c3.k3=[]
s=c8.aT
if(s>0){c3.k2=t.v.a(c3.gL().R(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.e(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.e(c6+q+c7))
r.push(d0.a(l))}}if(c8.a.a)c3.k4=t.g.a(c3.gL().R(0,"emissionClr"))
if(c8.b.a)c3.rx=t.g.a(c3.gL().R(0,"ambientClr"))
if(c8.c.a)c3.x2=t.g.a(c3.gL().R(0,"diffuseClr"))
if(c8.d.a)c3.aT=t.g.a(c3.gL().R(0,"invDiffuseClr"))
d0=c8.e.a
if(!d0)s=!1
else s=!0
if(s){c3.dr=t.n.a(c3.gL().R(0,"shininess"))
if(d0)c3.dq=t.g.a(c3.gL().R(0,"specularClr"))}if(c8.db){c3.ds=t.a.a(c3.gL().R(0,"envSampler"))
if(c8.r.a)c3.dt=t.g.a(c3.gL().R(0,"reflectClr"))
d0=c8.x.a
if(!d0)s=!1
else s=!0
if(s){c3.du=t.n.a(c3.gL().R(0,"refraction"))
if(d0)c3.dv=t.g.a(c3.gL().R(0,"refractClr"))}}if(c8.y.a)c3.dw=t.n.a(c3.gL().R(0,"alpha"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.c6=P.M(r,t.W)
c3.c7=P.M(r,t.J)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.q)(d0),++k){j=d0[k]
i=j.a
h="barLight"+i
g=[]
for(o=j.b,f=(i&4)!==0,n=0;n<o;++n){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].startPnt"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].endPnt"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].color"
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
q.a(c)
if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att0"
b=m.h(0,e)
if(b==null)H.f(P.e(c6+e+c7))
p.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att1"
a=m.h(0,e)
if(a==null)H.f(P.e(c6+e+c7))
p.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att2"
a0=m.h(0,e)
if(a0==null)H.f(P.e(c6+e+c7))
p.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.eQ(l,d,c,a3,a2,a1))}c3.c7.m(0,i,g)
o=c3.c6
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.m(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.c8=P.M(r,t.W)
c3.c9=P.M(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.q)(d0),++k){j=d0[k]
i=j.a
h="dirLight"+i
g=[]
for(o=j.b,f=(i&1)!==0,n=0;n<o;++n){if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objUp"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objRight"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objDir"
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
q.a(c)
a4=c
a5=d
a6=l}else{a4=c4
a5=a4
a6=a5}m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].viewDir"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].color"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"sTexture2D"+n
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
p.a(c)
a7=c}else a7=c4
g.push(new A.eR(a6,a5,a4,l,d,a7))}c3.c9.m(0,i,g)
o=c3.c8
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.m(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.ca=P.M(r,t.W)
c3.cb=P.M(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.q)(d0),++k){j=d0[k]
i=j.a
h="pointLight"+i
g=[]
for(a8=j.b,a9=(i&4)!==0,b0=(i&2)!==0,b1=(i&1)!==0,b2=(i&3)!==0,n=0;n<a8;++n){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].point"
l=m.h(0,b3)
if(l==null)H.f(P.e(c6+b3+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].viewPnt"
d=m.h(0,b3)
if(d==null)H.f(P.e(c6+b3+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].color"
c=m.h(0,b3)
if(c==null)H.f(P.e(c6+b3+c7))
q.a(c)
if(b2){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].invViewRotMat"
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
p.a(b)
b4=b}else b4=c4
if(b1){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"sTextureCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
o.a(b)
a7=b}else a7=c4
if(b0){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"sShadowCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
o.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].shadowAdj"
a=m.h(0,b3)
if(a==null)H.f(P.e(c6+b3+c7))
f.a(a)
b5=b
b6=a}else{b5=c4
b6=b5}if(a9){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att0"
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
e.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att1"
a=m.h(0,b3)
if(a==null)H.f(P.e(c6+b3+c7))
e.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att2"
a0=m.h(0,b3)
if(a0==null)H.f(P.e(c6+b3+c7))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.eU(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.cb.m(0,i,g)
a8=c3.ca
m=c3.r
if(m==null)H.f(P.e(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.e(c6+a9+c7))
a8.m(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.cc=P.M(s,t.W)
c3.cd=P.M(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.q)(c8),++k){j=c8[k]
i=j.a
h="spotLight"+i
g=[]
for(f=j.b,e=(i&2)!==0,a8=(i&1)!==0,a9=(i&4)!==0,b0=(i&8)!==0,b1=(i&3)!==0,n=0;n<f;++n){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objPnt"
l=m.h(0,b2)
if(l==null)H.f(P.e(c6+b2+c7))
r.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objDir"
d=m.h(0,b2)
if(d==null)H.f(P.e(c6+b2+c7))
r.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].viewPnt"
c=m.h(0,b2)
if(c==null)H.f(P.e(c6+b2+c7))
r.a(c)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].color"
b=m.h(0,b2)
if(b==null)H.f(P.e(c6+b2+c7))
r.a(b)
if(b1){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objUp"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
r.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objRight"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
r.a(a0)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].tuScalar"
b7=m.h(0,b2)
if(b7==null)H.f(P.e(c6+b2+c7))
q.a(b7)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].tvScalar"
b8=m.h(0,b2)
if(b8==null)H.f(P.e(c6+b2+c7))
q.a(b8)
b9=b8
c0=b7
a5=a0
a6=a}else{b9=c4
c0=b9
a5=c0
a6=a5}if(e){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].shadowAdj"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
p.a(a)
b6=a}else b6=c4
if(b0){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].cutoff"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].coneAngle"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
q.a(a0)
c1=a0
c2=a}else{c1=c4
c2=c1}if(a9){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att0"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att1"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
q.a(a0)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att2"
b7=m.h(0,b2)
if(b7==null)H.f(P.e(c6+b2+c7))
q.a(b7)
a1=b7
a2=a0
a3=a}else{a1=c4
a2=a1
a3=a2}if(a8){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"sTexture2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
o.a(a)
a7=a}else a7=c4
if(e){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"sShadow2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
o.a(a)
b5=a}else b5=c4
g.push(new A.eX(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.cd.m(0,i,g)
f=c3.cc
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
f.m(0,i,s.a(l))}}}},
fE:function(a,b){}}
A.b7.prototype={
i:function(a){return"barLight"+this.a}}
A.bb.prototype={
i:function(a){return"dirLight"+this.a}}
A.bm.prototype={
i:function(a){return"pointLight"+this.a}}
A.bo.prototype={
i:function(a){return"spotLight"+this.a}}
A.i2.prototype={
i:function(a){return this.br}}
A.eQ.prototype={}
A.eR.prototype={}
A.eU.prototype={}
A.eX.prototype={}
A.bR.prototype={
dz:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cO(b,35633)
r=n.cO(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gau(),s)
q.attachShader(n.gau(),r)
q.linkProgram(n.gau())
if(!H.lp(q.getProgramParameter(n.gau(),35714))){o=q.getProgramInfoLog(n.gau())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.e("Failed to link shader: "+o))}n.fI()
n.fK()},
ga4:function(a){var s=this.f
if(s==null)throw H.c(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gL:function(){var s=this.r
if(s==null)throw H.c(P.e(u.C))
return s},
gau:function(){var s=this.e
if(s==null)throw H.c(P.e(u.F))
return s},
W:function(a){a.a.useProgram(this.e)
this.ga4(this).h8()},
cO:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lp(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.e('Error compiling shader "'+H.t(q)+'": '+s))}return q},
fI:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.jB(l.getProgramParameter(o.gau(),35721))
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
m.push(new A.hg(l,q,p))}o.f=new A.hh(m)},
fK:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.jB(j.getProgramParameter(m.gau(),35718))
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
k.push(m.h4(o,n,q,p))}m.r=new A.j1(k)},
aL:function(a,b,c){var s=this.a
if(a===1)return new A.cT(s,b,c)
else return A.kc(s,this.e,b,a,c)},
em:function(a,b,c){var s=this.a
if(a===1)return new A.eV(s,b,c)
else return A.kc(s,this.e,b,a,c)},
en:function(a,b,c){var s=this.a
if(a===1)return new A.eW(s,b,c)
else return A.kc(s,this.e,b,a,c)},
bn:function(a,b){return new P.fk(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
h4:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aL(b,c,d)
case 5121:return s.aL(b,c,d)
case 5122:return s.aL(b,c,d)
case 5123:return s.aL(b,c,d)
case 5124:return s.aL(b,c,d)
case 5125:return s.aL(b,c,d)
case 5126:return new A.eN(s.a,c,d)
case 35664:return new A.iY(s.a,c,d)
case 35665:return new A.eO(s.a,c,d)
case 35666:return new A.eP(s.a,c,d)
case 35667:return new A.iZ(s.a,c,d)
case 35668:return new A.j_(s.a,c,d)
case 35669:return new A.j0(s.a,c,d)
case 35674:return new A.j2(s.a,c,d)
case 35675:return new A.eS(s.a,c,d)
case 35676:return new A.eT(s.a,c,d)
case 35678:return s.em(b,c,d)
case 35680:return s.en(b,c,d)
case 35670:throw H.c(s.bn("BOOL",c))
case 35671:throw H.c(s.bn("BOOL_VEC2",c))
case 35672:throw H.c(s.bn("BOOL_VEC3",c))
case 35673:throw H.c(s.bn("BOOL_VEC4",c))
default:throw H.c(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.cP.prototype={}
A.iW.prototype={}
A.j1.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
R:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.B()},
B:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cT.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iZ.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.j_.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.j0.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iX.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eN.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iY.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eO.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eP.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.j2.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eS.prototype={
ac:function(a){var s=new Float32Array(H.dk(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eT.prototype={
ac:function(a){var s=new Float32Array(H.dk(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eV.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eW.prototype={
dS:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jV.prototype={
$1:function(a){return new V.P(Math.cos(a),Math.sin(a),0)},
$S:49}
F.jK.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.ky(l.$1(m),k)
k=J.ky(l.$1(m+3.141592653589793/n.c),k).aJ(0,j)
s=new V.A(k.a,k.b,k.c).G()
r=$.l5
if(r==null){r=new V.A(1,0,0)
$.l5=r}q=s.ay(!s.q(0,r)?V.l7():r).G()
r=q.ay(s).G()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.J(0,l*k)
k=q.J(0,o*k)
k=j.S(0,new V.P(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.R(a.f,k)){a.f=k
l=a.a
if(l!=null)l.a8()}},
$S:36}
F.au.prototype={
b2:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.fF(a)
s.fG(b)
s.fH(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gP().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}},
bq:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.N(r.gP().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}}s.ft()
s.fu()
s.fv()},
fF:function(a){this.a=a
a.gP().b.push(this)},
fG:function(a){this.b=a
a.gP().c.push(this)},
fH:function(a){this.c=a
a.gP().d.push(this)},
ft:function(){var s=this.a
if(s!=null)C.a.N(s.gP().b,this)
this.a=null},
fu:function(){var s=this.b
if(s!=null)C.a.N(s.gP().c,this)
this.b=null},
fv:function(){var s=this.c
if(s!=null)C.a.N(s.gP().d,this)
this.c=null},
eg:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cX()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.dC())return p
return q.G()},
ei:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aJ(0,n)
q=new V.A(o.a,o.b,o.c).G()
o=r.aJ(0,n)
return q.ay(new V.A(o.a,o.b,o.c).G()).G()},
c3:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eg()
if(s==null){s=q.ei()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a8()}return!0},
ef:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cX()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.dC())return p
return q.G()},
eh:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.aJ(0,e)
o=new V.A(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.aZ(0)}else{n=(j-s.b)/p
j=b.aJ(0,e).J(0,n).S(0,e).aJ(0,h)
o=new V.A(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aZ(0)}m=l.d
if(m!=null){m=m.G()
o=m.ay(o).G().ay(m).G()}return o},
c1:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ef()
if(s==null){s=q.eh()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a8()}return!0},
gh_:function(a){var s=this
if(J.R(s.a,s.b))return!0
if(J.R(s.b,s.c))return!0
if(J.R(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
I:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gv(p)
p=a+C.b.aC(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gv(o)
p=p+C.b.aC(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gv(o)
s=p+C.b.aC(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.B()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.B()
return s+((p==null?"-":p)+"}")},
B:function(){return this.I("")}}
F.hH.prototype={}
F.iC.prototype={
bb:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.c
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.c
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.a
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gv(q)
s=c.c
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.c
q=q==null?r:q.gv(q)
s=c.b
q=q==(s==null?r:s.gv(s))}else q=!1
return q}else return!1}}}}
F.hU.prototype={}
F.iV.prototype={
bb:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gv(q)
s=c.a
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.b
return q==(s==null?r:s.gv(s))}else{q=b.a
q=q==null?r:q.gv(q)
s=c.b
if(q==(s==null?r:s.gv(s))){q=b.b
q=q==null?r:q.gv(q)
s=c.a
return q==(s==null?r:s.gv(s))}else return!1}}}
F.iv.prototype={
gY:function(){var s=this.a
return s==null?this.a=new F.E(this,[]):s},
gbw:function(a){var s=this.b
return s==null?this.b=new F.iw([]):s},
gaV:function(a){var s=this.c
return s==null?this.c=new F.er(this,[]):s},
gP:function(){var s=this.d
return s==null?this.d=new F.eq(this,[]):s},
gt:function(){var s=this.e
return s==null?this.e=D.C():s},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gP().ax()||!1
if(!r.gY().ax())s=!1
q=r.e
if(q!=null)q.aF(0)
return s},
hh:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gY().c.slice(0)
for(;s.length!==0;){r=C.a.gha(s)
C.a.co(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bb(0,r,o)){q.push(o)
C.a.co(s,p)}}if(q.length>1)b.hg(q)}n.gY().an()
n.gaV(n).cp()
n.gP().cp()
n.gbw(n).hw()
n.gaV(n).cq(new F.iV())
n.gP().cq(new F.iC())
m=n.e
if(m!=null)m.aF(0)},
de:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gY().c.length,c=$.ao(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.b5().a)!==0)++a
if((b&$.b4().a)!==0)++a
if((b&$.bx().a)!==0)++a
if((b&$.by().a)!==0)++a
if((b&$.ds().a)!==0)++a
if((b&$.dt().a)!==0)++a
if((b&$.c6().a)!==0)++a
if((b&$.b3().a)!==0)++a
s=a1.gcB(a1)
r=P.hW(d*s,0,!1)
e.a=0
q=P.ms(a,new F.ix(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.dk(r)),35044)
c.bindBuffer(f,g)
p=new Z.bC(new Z.f3(f,b),[],q,a1)
h.gbw(h)
if(h.gaV(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.er(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
l=b[n]
b=l.a
if(b==null)b=g
else{m=b.a
if(m!=null){k=m.a;(k==null?m.a=new F.E(m,[]):k).an()}b=b.e}o.push(b==null?0:b)
b=l.b
if(b==null)b=g
else{m=b.a
if(m!=null){k=m.a;(k==null?m.a=new F.E(m,[]):k).an()}b=b.e}o.push(b==null?0:b);++n}j=Z.l8(c,34963,o)
p.b.push(new Z.dQ(1,o.length,j))}if(h.gP().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.eq(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){k=m.a;(k==null?m.a=new F.E(m,[]):k).an()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){k=m.a;(k==null?m.a=new F.E(m,[]):k).an()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){k=m.a;(k==null?m.a=new F.E(m,[]):k).an()}b=b.e}o.push(b==null?0:b);++n}j=Z.l8(c,34963,o)
p.b.push(new Z.dQ(4,o.length,j))}return p},
i:function(a){var s=this,r=[]
if(s.gY().c.length!==0){r.push("Vertices:")
r.push(s.gY().I("   "))}s.gbw(s)
if(s.gaV(s).b.length!==0){r.push("Lines:")
r.push(s.gaV(s).I("   "))}if(s.gP().b.length!==0){r.push("Faces:")
r.push(s.gP().I("   "))}return C.a.k(r,"\n")},
a8:function(){var s=this.e
return s==null?null:s.A(null)}}
F.ix.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fX(a),f=g.gcB(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.E(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].hf(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c8(g,f,d*4,h.d)},
$S:37}
F.eq.prototype={
fU:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.E(s,[]):o).n(0,l)
o=s.a;(o==null?s.a=new F.E(s,[]):o).n(0,q)
o=s.a;(o==null?s.a=new F.E(s,[]):o).n(0,p)
n=new F.au()
n.b2(l,q,p)
m.push(n)}return m},
fV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.E(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,h)
f=new F.au()
f.b2(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,g)
f=new F.au()
f.b2(k,h,g)
e.push(f)}else{(l==null?s.a=new F.E(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,g)
f=new F.au()
f.b2(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,g)
l=s.a;(l==null?s.a=new F.E(s,[]):l).n(0,k)
f=new F.au()
f.b2(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gl:function(a){return this.b.length},
cq:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gY().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.E(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bV([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bV([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.bb(0,n,(q==null?p.d=new F.bV([],[],[]):q).h(0,l))){n.bq()
break}}}}},
cp:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gh_(q))q.bq()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c3())q=!1
return q},
c2:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].c1())q=!1
return q},
i:function(a){return this.B()},
I:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(a))
return C.a.k(p,"\n")},
B:function(){return this.I("")}}
F.er.prototype={
gl:function(a){return this.b.length},
cq:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gY().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.E(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.bW([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.bW([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.bb(0,n,(q==null?p.c=new F.bW([],[]):q).h(0,l))){n.bq()
break}}}}},
cp:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.R(q.a,q.b))q.bq()}},
i:function(a){return this.B()},
I:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].I(a+(""+s+". ")))}return C.a.k(r,"\n")},
B:function(){return this.I("")}}
F.iw.prototype={
gl:function(a){return 0},
hw:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r].gi5()
q=q.gbw(q)
q.gl(q)}},
i:function(a){return this.B()},
I:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].I(a))
return C.a.k(q,"\n")},
B:function(){return this.I("")}}
F.cY.prototype={
dh:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.j9(s.cx,p,m,r,q,o,n,a,l)},
gaV:function(a){var s=this.c
return s==null?this.c=new F.bW([],[]):s},
gP:function(){var s=this.d
return s==null?this.d=new F.bV([],[],[]):s},
gv:function(a){var s=this.a
if(s!=null)s.gY().an()
return this.e},
hf:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.ao())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.b5())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.q(0,$.b4())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.q(0,$.bx())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.q(0,$.by())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.ds())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.q(0,$.dt())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.q(0,$.c6()))return[o.ch]
else if(a.q(0,$.b3())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c3:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cX()
p.gP().E(0,new F.jg(o))
p.r=o.a.G()
if(r){s.a8()
o=s.e
if(o!=null)o.aF(0)}return!0},
c1:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cX()
p.gP().E(0,new F.jf(o))
p.x=o.a.G()
if(r){s.a8()
o=s.e
if(o!=null)o.aF(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.B()},
I:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.aC(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.B()
n.push(s==null?o:s)
n.push(V.w(q.ch,3,0))
s=q.cx
s=s==null?p:s.B()
n.push(s==null?o:s)
r=C.a.k(n,", ")
return a+"{"+r+"}"},
B:function(){return this.I("")}}
F.jg.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:8}
F.jf.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:8}
F.E.prototype={
an:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a8()
return!0},
bo:function(a,b,c,d,e,f){var s=F.j9(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c3()
return!0},
c2:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].c1()
return!0},
fZ:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.G()
if(!J.R(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.A(null)}}}}}return!0},
i:function(a){return this.B()},
I:function(a){var s,r,q,p
this.an()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].I(a))
return C.a.k(s,"\n")},
B:function(){return this.I("")}}
F.bV.prototype={
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
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.ja(s,b))
C.a.E(s.d,new F.jb(s,b))},
i:function(a){return this.B()},
B:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.a.k(p,"\n")}}
F.ja.prototype={
$1:function(a){if(!J.R(a.a,this.a))this.b.$1(a)},
$S:8}
F.jb.prototype={
$1:function(a){var s=this.a
if(!J.R(a.a,s)&&!J.R(a.b,s))this.b.$1(a)},
$S:8}
F.bW.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.B()},
B:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].I(""))
return C.a.k(p,"\n")}}
F.jd.prototype={}
F.jc.prototype={
bb:function(a,b,c){return J.R(b.f,c.f)}}
F.je.prototype={}
F.il.prototype={
hg:function(a){var s,r,q,p,o,n=V.cX()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.A(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.G()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.G()
if(!J.R(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}return null}}
O.e_.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.C():s},
Z:function(a){var s=this.fr
return s==null?null:s.A(a)},
bH:function(){return this.Z(null)},
cV:function(a){this.a=null
this.Z(a)},
fA:function(){return this.cV(null)},
eE:function(a,b){return this.Z(new D.av())},
eG:function(a,b){return this.Z(new D.aw())},
gdE:function(){var s=this,r=s.dx
if(r==null){r=new D.ct([],[],[],[],[])
r.cA(r.geB(),r.gfa(),r.gfe())
r.gt().n(0,s.gcU())
r.gdD().n(0,s.gbj())
s.dx=r}return r},
gd6:function(){var s=this.r
return s==null?this.r=O.e1(this,"ambient"):s},
gdj:function(){var s=this.x
return s==null?this.x=O.e1(this,"diffuse"):s},
gbD:function(){var s=this.z
return s==null?this.z=new O.i5(new V.N(0,0,0),this,"specular",new A.ak(!1,!1,!1)):s},
cM:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.T(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gap()
o=a1.h(0,q.gap())
a1.m(0,p,o==null?1:o)}n=[]
a1.E(0,new O.i6(b,n))
C.a.b1(n,new O.i7())
m=new H.T(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=[]
m.E(0,new O.i8(b,l))
C.a.b1(l,new O.i9())
k=new H.T(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gap()
o=k.h(0,q.gap())
k.m(0,p,o==null?1:o)}j=[]
k.E(0,new O.ia(b,j))
C.a.b1(j,new O.ib())
i=new H.T(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gap()
p=i.h(0,q.gap())
i.m(0,s,p==null?1:p)}h=[]
i.E(0,new O.ic(b,h))
C.a.b1(h,new O.id())
a0=C.c.a_(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.i3(new V.aL(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.e1(b,"emission"):a2).c
s=b.gd6().c
p=b.gdj().c
o=b.y
o=(o==null?b.y=O.e1(b,"invDiffuse"):o).c
g=b.gbD().c
f=b.Q
f=(f==null?b.Q=new O.i1(b,"bump",new A.ak(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.e1(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.i4(new V.N(0,0,0),b,"refract",new A.ak(!1,!1,!1)):d).c
c=b.db
return A.mu(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.i0(b,"alpha",new A.ak(!1,!1,!1)):c).c,n,l,j,h)},
ee:function(a,b){},
aj:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.ap(m==null?[]:m)
s=H.W(m).c
for(;m.u();){r=s.a(m.d)
q=$.j8
if(q==null)q=$.j8=new V.A(0,0,1)
r.c=q
p=$.j7
r.d=p==null?$.j7=new V.A(0,1,0):p
p=$.j6
r.e=p==null?$.j6=new V.A(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bA(q).G()
r.d=n.bA(r.d).G()
r.e=n.bA(r.e).G()}}},
dL:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cM()
r=s.br
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.cB(s,[],P.M(p,o),P.M(p,t.J),P.M(p,o),P.M(p,t.L),P.M(p,o),P.M(p,t.U),P.M(p,o),P.M(p,t.R),q,r)
a8.e0(s,q)
a9.d5(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.dn
s=b0.e
if(!(s instanceof Z.bC))s=b0.e=null
if(s==null||!s.d.q(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.ax()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gP().c2()
q.gY().c2()
q=q.e
if(q!=null)q.aF(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gY().fZ()
p=p.e
if(p!=null)p.aF(0)}}p=b0.d
l=p==null?a7:p.de(new Z.f4(a9.a),m)
if(l==null)return
p=l.az($.ao())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.az($.b5())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.az($.b4())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.az($.bx())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.az($.by())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.az($.b3())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.W(a9)
if(n.fr){s=a9.dx
s=s.gX(s)
r=a8.db
if(r!=null)r.ac(s.a6(0,!0))}if(n.fx){s=a9.cx
if(s==null){s=a9.db
r=a9.dx
r=a9.cx=s.gX(s).J(0,r.gX(r))
s=r}r=a8.dx
if(r!=null)r.ac(s.a6(0,!0))}s=a9.ch
if(s==null){s=a9.dx
s=a9.ch=a9.ghu().J(0,s.gX(s))}r=a8.fr
if(r!=null)r.ac(s.a6(0,!0))
if(n.go){s=a9.db
s=s.gX(s)
r=a8.dy
if(r!=null)r.ac(s.a6(0,!0))}if(n.x1){s=$.kM
if(s==null){s=new V.cD(1,0,0,0,1,0,0,0,1)
$.kM=s}r=a8.go
if(r!=null)r.ac(s.a6(0,!0))}if(n.x2){s=V.a9()
r=a8.id
if(r!=null)r.ac(s.a6(0,!0))}if(n.y1){s=V.a9()
r=a8.k1
if(r!=null)r.ac(s.a6(0,!0))}if(n.aT>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.dk(r.a6(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=a6.f
s=s==null?a7:s.f
if(s==null)s=new V.N(0,0,0)
r=a8.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=a6.r
s=s==null?a7:s.f
if(s==null)s=new V.N(0,0,0)
r=a8.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=a6.x
s=s==null?a7:s.f
if(s==null)s=new V.N(0,0,0)
r=a8.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=a6.y
s=s==null?a7:s.f
if(s==null)s=new V.N(0,0,0)
r=a8.aT
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=a6.z
r=r==null?a7:r.ch
if(r==null)r=100
q=a8.dr
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a6.z
s=s==null?a7:s.f
if(s==null)s=new V.N(1,1,1)
r=a8.dq
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
if(s.length>0){g=new H.T(t.y)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gap()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
p=a8.c7.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ghL()
o=$.aA
p=p.bg(o==null?$.aA=new V.P(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghQ()
o=$.aA
p=p.bg(o==null?$.aA=new V.P(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gdm()){p=e.gd8()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd9()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gda()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.c6.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gX(r)
a0=new H.T(t.y)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.m(0,0,c+1)
p=a8.c9.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=a.bA(e.c).G()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.c8.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gX(r)
a1=new H.T(t.y)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gap()
c=a1.h(0,d)
if(c==null)c=0
a1.m(0,d,c+1)
p=a8.cb.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
a2=a.J(0,e.gX(e))
p=e.gX(e)
o=$.aA
p=p.bg(o==null?$.aA=new V.P(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aA
p=a2.bg(p==null?$.aA=new V.P(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaG()
p=a2.cf(0)
o=b.d
if(o!=null){h=new Float32Array(H.dk(new V.cD(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a6(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaG()
p=e.gaG()
if(!C.a.w(k,p)){p.sv(0,k.length)
k.push(p)}p=e.gaG()
o=p.gba(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gb0()
p=e.gdT()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb0()
if(!C.a.w(k,p)){p.sv(0,k.length)
k.push(p)}p=e.gb0()
o=p.gba(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gdm()){p=e.gd8()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd9()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gda()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.ca.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gX(r)
a5=new H.T(t.y)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.q)(r),++f){e=r[f]
d=e.gap()
c=a5.h(0,d)
if(c==null)c=0
a5.m(0,d,c+1)
p=a8.cd.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ght(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghO(e).G()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bg(e.ght(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaG()
p=e.gcu()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gcr(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gi3()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gi4()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaG()
p=e.gaG()
if(!C.a.w(k,p)){p.sv(0,k.length)
k.push(p)}p=e.gaG()
o=p.gba(p)
if(o){o=b.dx
if(o!=null){a3=p.gba(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gv(p))}}e.gb0()
p=e.gdT()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb0()
if(!C.a.w(k,p)){p.sv(0,k.length)
k.push(p)}p=e.gb0()
o=p.gba(p)
if(o){o=b.dy
if(o!=null){a3=p.gba(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gv(p))}}if(e.ghP()){p=e.ghN()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghM()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gdm()){p=e.gd8()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd9()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gda()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.q)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.cc.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gX(s).cf(0)}r=a8.fy
if(r!=null)r.ac(s.a6(0,!0))}if(n.db){a6.ee(k,a7)
a8.fE(a8.ds,a7)
if(n.r.a){s=a6.cx
s=s==null?a7:s.f
if(s==null)s=new V.N(1,1,1)
r=a8.dt
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=a6.cy
r=r==null?a7:r.ch
if(r==null)r=0
q=a8.du
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=a6.cy
s=s==null?a7:s.f
if(s==null)s=new V.N(1,1,1)
r=a8.dv
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=a6.db
s=s==null?a7:s.f
if(s==null)s=1
q=a8.dw
if(q!=null)q.a.uniform1f(q.d,s)}s=a9.a
s.enable(3042)
s.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].W(a9)
s=t.D.a(b0.e)
s.W(a9)
s.a9(a9)
s.aX(a9)
if(r)s=!1
else s=!0
if(s)a9.a.disable(3042)
for(i=0;i<k.length;++i)k[i].aX(a9)
a9.a.useProgram(a7)
a8.ga4(a8).dk()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cM().br}}
O.i6.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.a_(b+3,4)*4))},
$S:5}
O.i7.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:41}
O.i8.prototype={
$2:function(a,b){return this.b.push(new A.bb(a,C.c.a_(b+3,4)*4))},
$S:5}
O.i9.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:42}
O.ia.prototype={
$2:function(a,b){return this.b.push(new A.bm(a,C.c.a_(b+3,4)*4))},
$S:5}
O.ib.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:43}
O.ic.prototype={
$2:function(a,b){return this.b.push(new A.bo(a,C.c.a_(b+3,4)*4))},
$S:5}
O.id.prototype={
$2:function(a,b){return C.c.ad(a.a,b.a)},
$S:44}
O.i0.prototype={
av:function(){var s,r=this
r.cC()
s=r.f
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.Z(new D.z(r.b,s,1))}}}
O.e0.prototype={
av:function(){},
cY:function(a){var s,r,q=this
if(!q.c.q(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.av()
s=q.a
s.a=null
s.Z(null)}}}
O.i1.prototype={}
O.cC.prototype={
cX:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.Z(new D.z(r.b+".color",s,a))}},
av:function(){this.cC()
this.cX(new V.N(1,1,1))},
saS:function(a,b){this.cY(new A.ak(!0,!1,!1))
this.cX(b)}}
O.i3.prototype={}
O.i4.prototype={
av:function(){var s,r=this
r.cD()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.Z(new D.z(r.b+".refraction",s,1))}}}
O.i5.prototype={
cZ:function(a){var s=this,r=s.ch
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.Z(new D.z(s.b+".shininess",r,a))}},
av:function(){this.cD()
this.cZ(100)}}
O.cO.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.C():s},
Z:function(a){var s=this.e
return s==null?null:s.A(a)},
bH:function(){return this.Z(null)},
dL:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.da.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.cP(a.a,"Skybox")
s.dz(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.ga4(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gL().h(0,"fov"))
s.z=r.a(s.gL().h(0,"ratio"))
s.Q=t.g.a(s.gL().h(0,"boxClr"))
s.ch=t.a.a(s.gL().h(0,"boxTxt"))
s.cx=t.j.a(s.gL().h(0,"viewMat"))
a.d5(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.de(new Z.f4(a.a),$.ao())
if(r==null)r=l
else{q=r.az($.ao())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
if(!o.c&&o.d>=6){o.c=!0
r=a.a
r.activeTexture(33985)
r.bindTexture(34067,o.b)}r=a.d
q=a.c
p=m.a
if(p!=null){p.W(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.dS(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gX(r).cf(0)
p=p.cx
if(p!=null)p.ac(r.a6(0,!0))}r=b.e
if(r instanceof Z.bC){r.W(a)
r.a9(a)
r.aX(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.ga4(r).dk()}if(o.c){o.c=!1
r=a.a
r.activeTexture(33984+o.a)
r.bindTexture(34067,l)}}}
O.iG.prototype={}
T.iH.prototype={}
T.iI.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.C():s}}
T.iJ.prototype={
aN:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.Z(s,"load",new T.iK(this,s,!1,b,!1,d,a),!1)},
fB:function(a,b,c){var s,r,q,p,o,n
b=V.ku(b)
s=a.width
r=V.ku(s==null?512:s)
s=a.height
q=V.ku(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jY()
p.width=r
p.height=q
o=t.b.a(C.f.dP(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.oa(o.getImageData(0,0,s,n==null?512:n))}}}
T.iK.prototype={
$1:function(a){var s=this,r=s.a,q=r.fB(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.U.hD(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.h7()}++r.e},
$S:4}
X.hL.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.C():s},
al:function(a){var s=this.x
return s==null?null:s.A(a)},
W:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.ai(q.a*s)
o=C.d.ai(q.b*r)
n=C.d.ai(q.c*s)
a.c=n
q=C.d.ai(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.hP.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.C():s},
W:function(a){var s
a.cy.by(V.a9())
s=V.a9()
a.db.by(s)},
aX:function(a){a.cy.aD()
a.db.aD()}}
X.ef.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.C():s},
al:function(a){var s=this.f
return s==null?null:s.A(a)},
ea:function(){return this.al(null)},
W:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.ay(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.by(i)
s=$.lL()
r=q.b
if(r!=null)s=r.aY(0,a,q).J(0,s)
a.db.by(s)},
aX:function(a){a.cy.aD()
a.db.aD()}}
X.iF.prototype={}
V.ar.prototype={
bi:function(a){this.b=new P.hN(C.K)
this.c=null
this.d=[]},
H:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.el(p,0,p.length)
m=n==null?p:n
m=H.kw(m," ","&nbsp;")
C.I.dR(o,m)
m=o.style
m.color=b
C.a.gbt(l.d).push(o)}},
dK:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.bp()
if(r!=null)for(q=new H.n(s),q=new P.bv(r.ct(new H.aR(q,q.gl(q))).a());q.u();)p.bx(q.gC(q))}}
V.jU.prototype={
$1:function(a){var s=C.d.cs(this.a.ghc(),2)
if(s!=="0.00")P.kv(s+" fps")},
$S:45}
V.dF.prototype={
bx:function(a){var s=this
switch(a.a){case"Class":s.H(a.b,"#551")
break
case"Comment":s.H(a.b,"#777")
break
case"Id":s.H(a.b,"#111")
break
case"Num":s.H(a.b,"#191")
break
case"Reserved":s.H(a.b,"#119")
break
case"String":s.H(a.b,"#171")
break
case"Symbol":s.H(a.b,"#616")
break
case"Type":s.H(a.b,"#B11")
break
case"Whitespace":s.H(a.b,"#111")
break}},
bp:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iP()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=new K.p([])
r.p(new H.n("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=a2.j(0,p).k(0,p)
r=new K.p([])
r.p(new H.n("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
a2.j(0,q).k(0,o).a.push(K.J("0","9"))
a2.j(0,o).k(0,o).a.push(K.J("0","9"))
s=a2.j(0,o).k(0,n)
r=new K.p([])
r.p(new H.n("."))
s.a.push(r)
a2.j(0,n).k(0,m).a.push(K.J("0","9"))
a2.j(0,m).k(0,m).a.push(K.J("0","9"))
r=a2.j(0,q).k(0,l)
s=new K.p([])
s.p(new H.n(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=new K.p([])
r.p(new H.n(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=new K.p([])
s.p(new H.n('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=new K.p([])
r.p(new H.n('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=new K.p([])
s.p(new H.n("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=new K.p([])
r.p(new H.n('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.aJ())
r=a2.j(0,q).k(0,g)
s=new K.p([])
s.p(new H.n("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=new K.p([])
r.p(new H.n("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=new K.p([])
s.p(new H.n("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=new K.p([])
r.p(new H.n("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.aJ())
r=a2.j(0,q).k(0,d)
s=new K.p([])
s.p(new H.n("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=new K.p([])
r.p(new H.n("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=new K.p([])
s.p(new H.n("\n"))
r.a.push(s)
s=[]
a2.j(0,c).k(0,c).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("\n"))
s.push(r)
r=a2.j(0,d).k(0,a)
s=new K.p([])
s.p(new H.n("*"))
r.a.push(s)
s=a2.j(0,a).k(0,a0)
r=new K.p([])
r.p(new H.n("*"))
s.a.push(r)
r=[]
a2.j(0,a0).k(0,a).a.push(new K.a7(r))
s=new K.p([])
s.p(new H.n("*"))
r.push(s)
s=a2.j(0,a0).k(0,b)
r=new K.p([])
r.p(new H.n("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=new K.p([])
s.p(new H.n(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=new K.p([])
r.p(new H.n(" \n\t"))
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
r.aE(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aE(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aE(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dM.prototype={
bx:function(a){var s=this
switch(a.a){case"Builtin":s.H(a.b,"#411")
break
case"Comment":s.H(a.b,"#777")
break
case"Id":s.H(a.b,"#111")
break
case"Num":s.H(a.b,"#191")
break
case"Preprocess":s.H(a.b,"#737")
break
case"Reserved":s.H(a.b,"#119")
break
case"Symbol":s.H(a.b,"#611")
break
case"Type":s.H(a.b,"#171")
break
case"Whitespace":s.H(a.b,"#111")
break}},
bp:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iP()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=new K.p([])
r.p(new H.n("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=d.j(0,p).k(0,p)
r=new K.p([])
r.p(new H.n("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
d.j(0,q).k(0,o).a.push(K.J("0","9"))
d.j(0,o).k(0,o).a.push(K.J("0","9"))
s=d.j(0,o).k(0,n)
r=new K.p([])
r.p(new H.n("."))
s.a.push(r)
d.j(0,n).k(0,m).a.push(K.J("0","9"))
d.j(0,m).k(0,m).a.push(K.J("0","9"))
r=d.j(0,q).k(0,l)
s=new K.p([])
s.p(new H.n(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=new K.p([])
r.p(new H.n(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=new K.p([])
s.p(new H.n("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=new K.p([])
r.p(new H.n("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.aJ())
r=d.j(0,i).k(0,h)
s=new K.p([])
s.p(new H.n("\n"))
r.a.push(s)
s=[]
d.j(0,i).k(0,i).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("\n"))
s.push(r)
r=d.j(0,q).k(0,g)
s=new K.p([])
s.p(new H.n("#"))
r.a.push(s)
s=[]
d.j(0,g).k(0,g).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("\n"))
s.push(r)
r=d.j(0,g).k(0,f)
s=new K.p([])
s.p(new H.n("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=new K.p([])
r.p(new H.n(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=new K.p([])
s.p(new H.n(" \n\t"))
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
s.aE(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aE(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aE(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dO.prototype={
bx:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.H(a.b,"#911")
s.H("=",r)
break
case"Id":s.H(a.b,r)
break
case"Other":s.H(a.b,r)
break
case"Reserved":s.H(a.b,"#119")
break
case"String":s.H(a.b,"#171")
break
case"Symbol":s.H(a.b,"#616")
break}},
bp:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iP()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=new K.p([])
r.p(new H.n("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,p).k(0,p)
r=new K.p([])
r.p(new H.n("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.j(0,p).k(0,o)
r=new K.p([])
r.p(new H.n("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=new K.p([])
r.p(new H.n("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=new K.p([])
s.p(new H.n("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=new K.p([])
r.p(new H.n('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=new K.p([])
s.p(new H.n('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=new K.p([])
r.p(new H.n("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=new K.p([])
s.p(new H.n('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.aJ())
j.j(0,q).k(0,k).a.push(new K.aJ())
s=[]
j.j(0,k).k(0,k).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n('</\\-!>=_"'))
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
r.aE(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.K(o)
r=j.j(0,k)
r.d=r.a.K(k)
return j}}
V.eh.prototype={
dK:function(a,b){this.d=[]
this.H(C.a.k(b,"\n"),"#111")},
bx:function(a){},
bp:function(){return null}}
V.iy.prototype={
d4:function(a){var s,r,q,p,o,n,m=this.fJ(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.n(C.a.he(a)),s=new P.bv(m.ct(new H.aR(s,s.gl(s))).a());s.u();){r=s.gC(s)
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
if(H.lG(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.lm(C.q,r,C.h,!1)
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
dO:function(a){var s,r,q,p=new V.dF("dart",[])
p.bi("dart")
s=new V.dM("glsl",[])
s.bi("glsl")
r=new V.dO("html",[])
r.bi("html")
q=C.a.hb([p,s,r],new V.iB(a))
if(q!=null)return q
p=new V.eh("plain",[])
p.bi("plain")
return p},
d3:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.bE(q,"+")){b2[r]=C.b.ar(q,1)
a8.push(1)
s=!0}else if(C.b.bE(q,"-")){b2[r]=C.b.ar(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dO(b0)
p.dK(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.lm(C.q,a9,C.h,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kA()
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
for(a4=C.a.gM(q);a4.u();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
fJ:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.iP()
h.d=h.j(0,q)
s=h.j(0,q).k(0,p)
r=new K.p([])
r.p(new H.n("*"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,p).k(0,p).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("*"))
s.push(r)
r=h.j(0,p).k(0,"BoldEnd")
s=new K.p([])
s.p(new H.n("*"))
r.a.push(s)
r.c=!0
r=h.j(0,q).k(0,o)
s=new K.p([])
s.p(new H.n("_"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,o).k(0,o).a.push(new K.a7(r))
s=new K.p([])
s.p(new H.n("_"))
r.push(s)
s=h.j(0,o).k(0,n)
r=new K.p([])
r.p(new H.n("_"))
s.a.push(r)
s.c=!0
s=h.j(0,q).k(0,m)
r=new K.p([])
r.p(new H.n("`"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,m).k(0,m).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("`"))
s.push(r)
r=h.j(0,m).k(0,"CodeEnd")
s=new K.p([])
s.p(new H.n("`"))
r.a.push(s)
r.c=!0
r=h.j(0,q).k(0,l)
s=new K.p([])
s.p(new H.n("["))
r.a.push(s)
r.c=!0
r=h.j(0,l).k(0,k)
s=new K.p([])
s.p(new H.n("|"))
r.a.push(s)
s=h.j(0,l).k(0,j)
r=new K.p([])
r.p(new H.n("]"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,l).k(0,l).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("|]"))
s.push(r)
r=h.j(0,k).k(0,j)
s=new K.p([])
s.p(new H.n("]"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,k).k(0,k).a.push(new K.a7(r))
s=new K.p([])
s.p(new H.n("|]"))
r.push(s)
h.j(0,q).k(0,i).a.push(new K.aJ())
s=[]
h.j(0,i).k(0,i).a.push(new K.a7(s))
r=new K.p([])
r.p(new H.n("*_`["))
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
V.iA.prototype={
$1:function(a){P.l0(C.i,new V.iz(this.a))},
$S:4}
V.iz.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ai(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:2}
V.iB.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:46}
B.jS.prototype={
$1:function(a){var s=t.s.a(this.a.d),r=this.b,q=s.a
q=q==null?null:q.c
r.d3("Vertex Shader for Skybox","glsl",0,(q==null?"":q).split("\n"))
q=s.a
q=q==null?null:q.d
r.d3("Fragment Shader for Skybox","glsl",0,(q==null?"":q).split("\n"))},
$S:1};(function aliases(){var s=J.a.prototype
s.dW=s.i
s=J.bf.prototype
s.dY=s.i
s=P.h.prototype
s.dX=s.bB
s=W.y.prototype
s.bF=s.ae
s=W.d8.prototype
s.dZ=s.ao
s=K.dN.prototype
s.dV=s.aB
s.bG=s.i
s=O.e0.prototype
s.cC=s.av
s=O.cC.prototype
s.cD=s.av})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nq","mp",47)
r(P,"o4","mS",10)
r(P,"o5","mT",10)
r(P,"o6","mU",10)
q(P,"lx","o_",2)
r(W,"pD","hA",35)
p(W,"oi",4,null,["$4"],["mV"],21,0)
p(W,"oj",4,null,["$4"],["mW"],21,0)
var j
o(j=E.bE.prototype,"gdI",0,0,null,["$1","$0"],["dJ","hn"],0,0)
o(j,"gdG",0,0,null,["$1","$0"],["dH","hk"],0,0)
n(j,"ghi","hj",7)
n(j,"ghl","hm",7)
o(j=E.eH.prototype,"gcF",0,0,null,["$1","$0"],["cH","cG"],0,0)
m(j,"ghz","dM",2)
l(j=X.f1.prototype,"geT","eU",4)
l(j,"geH","eI",4)
l(j,"geN","eO",3)
l(j,"geX","eY",17)
l(j,"geV","eW",17)
l(j,"gf0","f1",3)
l(j,"gf4","f5",3)
l(j,"geR","eS",3)
l(j,"gf2","f3",3)
l(j,"geP","eQ",3)
l(j,"gf6","f7",27)
l(j,"gf8","f9",4)
l(j,"gfo","fp",12)
l(j,"gfk","fl",12)
l(j,"gfm","fn",12)
o(D.cf.prototype,"ge4",0,0,null,["$1","$0"],["as","e5"],0,0)
o(j=D.ct.prototype,"gcR",0,0,null,["$1","$0"],["cS","eZ"],0,0)
l(j,"gfa","fb",29)
n(j,"geB","eC",18)
n(j,"gfe","ff",18)
k(V.Y.prototype,"gl","cg",19)
k(V.A.prototype,"gl","cg",19)
o(j=U.bG.prototype,"gaO",0,0,null,["$1","$0"],["O","a3"],0,0)
n(j,"gez","eA",20)
n(j,"gfc","fd",20)
o(j=U.cU.prototype,"gaO",0,0,null,["$1","$0"],["O","a3"],0,0)
l(j,"gbQ","bR",9)
l(j,"gbS","bT",9)
l(j,"gbU","bV",9)
o(j=U.cV.prototype,"gaO",0,0,null,["$1","$0"],["O","a3"],0,0)
l(j,"gbQ","bR",1)
l(j,"gbS","bT",1)
l(j,"gbU","bV",1)
l(j,"ger","es",1)
l(j,"geu","ev",1)
l(j,"gfQ","fR",1)
l(j,"gfO","fP",1)
l(j,"gfM","fN",1)
l(U.cW.prototype,"gex","ey",1)
o(j=M.cb.prototype,"gT",0,0,null,["$1","$0"],["U","b3"],0,0)
n(j,"gfg","fh",22)
n(j,"gfi","fj",22)
o(M.cd.prototype,"gT",0,0,null,["$1","$0"],["U","b3"],0,0)
o(j=M.cl.prototype,"gT",0,0,null,["$1","$0"],["U","b3"],0,0)
n(j,"geJ","eK",7)
n(j,"geL","eM",7)
o(j=O.e_.prototype,"gbj",0,0,null,["$1","$0"],["Z","bH"],0,0)
o(j,"gcU",0,0,null,["$1","$0"],["cV","fA"],0,0)
n(j,"geD","eE",23)
n(j,"geF","eG",23)
o(O.cO.prototype,"gbj",0,0,null,["$1","$0"],["Z","bH"],0,0)
o(X.ef.prototype,"ge9",0,0,null,["$1","$0"],["al","ea"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.k5,J.a,J.a6,P.G,P.d1,P.h,H.aR,P.dR,H.cm,H.f_,H.iT,H.im,H.fL,H.ba,P.V,H.hV,H.dZ,H.hR,H.af,H.fn,P.de,P.c_,P.bv,P.f6,P.ez,P.eA,P.jA,P.dj,P.jo,P.d0,P.D,P.ep,P.dB,P.hO,P.jy,P.S,P.bc,P.ee,P.cQ,P.fk,P.hK,P.ae,P.aX,W.hr,W.k0,W.ke,W.bZ,W.H,W.cJ,W.d8,W.fQ,W.cn,W.js,W.h_,P.dg,P.fE,K.aJ,K.dN,K.ip,K.p,L.ew,L.eI,L.eJ,L.iO,O.bD,O.cE,E.hk,E.bE,E.bB,E.bN,E.fh,E.iq,E.eH,Z.f3,Z.f4,Z.bC,Z.dQ,Z.bt,D.hm,D.bF,D.O,X.c9,X.dW,X.hT,X.hZ,X.a_,X.ii,X.iQ,X.f1,D.cf,V.N,V.aL,V.hD,V.cD,V.bJ,V.Q,V.P,V.bl,V.el,V.Y,V.A,U.cU,U.cV,U.cW,M.cd,M.cl,A.hg,A.hh,A.ak,A.b7,A.bb,A.bm,A.bo,A.i2,A.eQ,A.eR,A.eU,A.eX,A.iW,A.j1,F.au,F.hH,F.hU,F.iv,F.eq,F.er,F.iw,F.cY,F.E,F.bV,F.bW,F.jd,F.je,O.iG,O.e0,O.i3,T.iJ,X.iF,X.hP,X.ef,V.ar,V.iy])
q(J.a,[J.dS,J.cr,J.bf,J.al,J.bI,J.aP,H.cG,W.b,W.he,W.dA,W.ca,W.at,W.F,W.fb,W.ad,W.hu,W.hv,W.fc,W.ci,W.fe,W.hw,W.i,W.fl,W.aO,W.hM,W.fq,W.be,W.hY,W.ie,W.fu,W.fv,W.aS,W.fw,W.fy,W.aT,W.fC,W.fF,W.aV,W.fG,W.aW,W.fM,W.am,W.fS,W.iM,W.aY,W.fU,W.iR,W.j3,W.h0,W.h2,W.h4,W.h6,W.h8,P.bh,P.fs,P.bk,P.fA,P.io,P.fN,P.bq,P.fW,P.hi,P.f8,P.bP,P.fJ])
q(J.bf,[J.eg,J.br,J.ax])
r(J.dU,J.al)
q(J.bI,[J.cq,J.dT])
q(P.G,[H.dX,P.eM,H.dV,H.eZ,H.en,H.fi,P.dx,P.eb,P.ai,P.f0,P.eY,P.bS,P.dC,P.dE])
r(P.cv,P.d1)
q(P.cv,[H.bU,W.f9,W.a2,P.dK])
r(H.n,H.bU)
q(P.h,[H.j,H.bi,H.bu,P.cp])
q(H.j,[H.cw,H.aQ])
r(H.cj,H.bi)
q(P.dR,[H.cz,H.f5])
r(H.cA,H.cw)
r(H.cK,P.eM)
q(H.ba,[H.eE,H.hS,H.jO,H.jP,H.jQ,P.ji,P.jh,P.jj,P.jk,P.jx,P.jw,P.jH,P.jq,P.jr,P.i_,P.hx,P.hy,W.hz,W.ig,W.ih,W.iu,W.iD,W.jl,W.ik,W.ij,W.jt,W.ju,W.jv,W.jz,P.jD,P.jJ,P.hI,P.hJ,P.hj,E.ir,E.is,E.it,E.iL,D.hF,D.hG,F.jV,F.jK,F.ix,F.jg,F.jf,F.ja,F.jb,O.i6,O.i7,O.i8,O.i9,O.ia,O.ib,O.ic,O.id,T.iK,V.jU,V.iA,V.iz,V.iB,B.jS])
q(H.eE,[H.ex,H.bA])
r(P.cy,P.V)
q(P.cy,[H.T,W.f7])
r(H.bM,H.cG)
q(H.bM,[H.d3,H.d5])
r(H.d4,H.d3)
r(H.bj,H.d4)
r(H.d6,H.d5)
r(H.cF,H.d6)
q(H.cF,[H.e5,H.e6,H.e7,H.e8,H.e9,H.cH,H.ea])
r(H.df,H.fi)
r(P.db,P.cp)
r(P.jp,P.jA)
r(P.d7,P.dj)
r(P.d_,P.d7)
r(P.dD,P.eA)
r(P.hB,P.dB)
q(P.dD,[P.hN,P.j5])
r(P.j4,P.hB)
q(P.ai,[P.cN,P.dP])
q(W.b,[W.r,W.dJ,W.aB,W.d9,W.aC,W.ag,W.dc,W.f2,W.bX,P.dz,P.aK])
q(W.r,[W.y,W.aj,W.bY])
q(W.y,[W.o,P.k])
q(W.o,[W.dv,W.dw,W.bz,W.b8,W.b9,W.cg,W.dL,W.bH,W.eo,W.cR,W.eC,W.eD,W.bT])
r(W.hq,W.at)
r(W.ce,W.fb)
q(W.ad,[W.hs,W.ht])
r(W.fd,W.fc)
r(W.ch,W.fd)
r(W.ff,W.fe)
r(W.dH,W.ff)
r(W.aN,W.dA)
r(W.fm,W.fl)
r(W.dI,W.fm)
r(W.fr,W.fq)
r(W.bd,W.fr)
r(W.aE,W.i)
q(W.aE,[W.bg,W.aa,W.bp])
r(W.e2,W.fu)
r(W.e3,W.fv)
r(W.fx,W.fw)
r(W.e4,W.fx)
r(W.fz,W.fy)
r(W.cI,W.fz)
r(W.fD,W.fC)
r(W.ei,W.fD)
r(W.em,W.fF)
r(W.da,W.d9)
r(W.et,W.da)
r(W.fH,W.fG)
r(W.eu,W.fH)
r(W.ey,W.fM)
r(W.fT,W.fS)
r(W.eF,W.fT)
r(W.dd,W.dc)
r(W.eG,W.dd)
r(W.fV,W.fU)
r(W.eK,W.fV)
r(W.aZ,W.aa)
r(W.h1,W.h0)
r(W.fa,W.h1)
r(W.cZ,W.ci)
r(W.h3,W.h2)
r(W.fo,W.h3)
r(W.h5,W.h4)
r(W.d2,W.h5)
r(W.h7,W.h6)
r(W.fI,W.h7)
r(W.h9,W.h8)
r(W.fP,W.h9)
r(W.fg,W.f7)
r(W.fj,P.ez)
r(W.fR,W.d8)
r(P.ab,P.fE)
r(P.ft,P.fs)
r(P.dY,P.ft)
r(P.fB,P.fA)
r(P.ec,P.fB)
r(P.bQ,P.k)
r(P.fO,P.fN)
r(P.eB,P.fO)
r(P.fX,P.fW)
r(P.eL,P.fX)
r(P.dy,P.f8)
r(P.ed,P.aK)
r(P.fK,P.fJ)
r(P.ev,P.fK)
q(K.dN,[K.a7,L.iS])
q(E.hk,[Z.c8,A.bR,T.iH])
q(D.O,[D.av,D.aw,D.z,X.ej])
q(X.ej,[X.cx,X.bK,X.bL,X.cS])
q(O.bD,[D.ct,U.bG,M.cb])
q(D.hm,[U.ho,U.a0])
r(U.cc,U.a0)
q(A.bR,[A.cB,A.cP])
q(A.iW,[A.cT,A.iZ,A.j_,A.j0,A.iX,A.eN,A.iY,A.eO,A.eP,A.j2,A.eS,A.eT,A.eV,A.eW])
r(F.iC,F.hH)
r(F.iV,F.hU)
r(F.jc,F.jd)
r(F.il,F.je)
q(O.iG,[O.e_,O.cO])
q(O.e0,[O.i0,O.i1,O.cC])
q(O.cC,[O.i4,O.i5])
r(T.iI,T.iH)
r(X.hL,X.iF)
q(V.ar,[V.dF,V.dM,V.dO,V.eh])
s(H.bU,H.f_)
s(H.d3,P.D)
s(H.d4,H.cm)
s(H.d5,P.D)
s(H.d6,H.cm)
s(P.d1,P.D)
s(P.dj,P.ep)
s(W.fb,W.hr)
s(W.fc,P.D)
s(W.fd,W.H)
s(W.fe,P.D)
s(W.ff,W.H)
s(W.fl,P.D)
s(W.fm,W.H)
s(W.fq,P.D)
s(W.fr,W.H)
s(W.fu,P.V)
s(W.fv,P.V)
s(W.fw,P.D)
s(W.fx,W.H)
s(W.fy,P.D)
s(W.fz,W.H)
s(W.fC,P.D)
s(W.fD,W.H)
s(W.fF,P.V)
s(W.d9,P.D)
s(W.da,W.H)
s(W.fG,P.D)
s(W.fH,W.H)
s(W.fM,P.V)
s(W.fS,P.D)
s(W.fT,W.H)
s(W.dc,P.D)
s(W.dd,W.H)
s(W.fU,P.D)
s(W.fV,W.H)
s(W.h0,P.D)
s(W.h1,W.H)
s(W.h2,P.D)
s(W.h3,W.H)
s(W.h4,P.D)
s(W.h5,W.H)
s(W.h6,P.D)
s(W.h7,W.H)
s(W.h8,P.D)
s(W.h9,W.H)
s(P.fs,P.D)
s(P.ft,W.H)
s(P.fA,P.D)
s(P.fB,W.H)
s(P.fN,P.D)
s(P.fO,W.H)
s(P.fW,P.D)
s(P.fX,W.H)
s(P.f8,P.V)
s(P.fJ,P.D)
s(P.fK,W.H)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",X:"double",a5:"num",v:"String",a4:"bool",ae:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([O?])","~(O)","~()","~(aa)","~(i)","~(m,m)","~(v,@)","~(m,h<bE>)","~(au)","~(O?)","~(~())","ae()","~(bp)","a4(az)","a4(v)","~(~(O))","v(m)","~(bg)","~(m,h<cs>)","X()","~(m,h<a0?>)","a4(y,v,v,bZ)","~(m,h<bn>)","~(m,h<bJ>)","a4(r)","~(a5)","~(r,r?)","~(aZ)","@(@)","a4(h<cs>)","~(@,@)","y(r)","~(v,v)","@(@,v)","~(L?,L?)","v(b)","~(cY,X,X)","c8(m)","@(v)","ae(@)","ae(~())","m(b7,b7)","m(bb,bb)","m(bm,bm)","m(bo,bo)","~(iN)","a4(ar?)","m(@,@)","v(v)","P(X)","~(@)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nd(v.typeUniverse,JSON.parse('{"eg":"bf","br":"bf","ax":"bf","oD":"i","oP":"i","oF":"aK","oE":"b","oV":"b","oY":"b","oC":"k","oQ":"k","oG":"o","oT":"o","oR":"r","oO":"r","pl":"ag","oK":"aE","oH":"aj","oZ":"aj","oX":"aa","oS":"bd","oL":"F","oM":"am","oU":"bj","dS":{"a4":[]},"al":{"l":["1"],"j":["1"],"h":["1"]},"dU":{"l":["1"],"j":["1"],"h":["1"]},"bI":{"X":[],"a5":[]},"cq":{"X":[],"m":[],"a5":[]},"dT":{"X":[],"a5":[]},"aP":{"v":[]},"dX":{"G":[]},"n":{"l":["m"],"j":["m"],"h":["m"]},"j":{"h":["1"]},"cw":{"j":["1"],"h":["1"]},"bi":{"h":["2"]},"cj":{"j":["2"],"h":["2"]},"cA":{"j":["2"],"h":["2"]},"bu":{"h":["1"]},"bU":{"l":["1"],"j":["1"],"h":["1"]},"cK":{"G":[]},"dV":{"G":[]},"eZ":{"G":[]},"ba":{"co":[]},"eE":{"co":[]},"ex":{"co":[]},"bA":{"co":[]},"en":{"G":[]},"T":{"U":["1","2"],"V.V":"2"},"aQ":{"j":["1"],"h":["1"]},"bM":{"u":["1"]},"bj":{"u":["X"],"l":["X"],"j":["X"],"h":["X"]},"cF":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"e5":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"e6":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"e7":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"e8":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"e9":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"cH":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"ea":{"u":["m"],"l":["m"],"j":["m"],"h":["m"]},"fi":{"G":[]},"df":{"G":[]},"de":{"iN":[]},"db":{"h":["1"]},"d_":{"j":["1"],"h":["1"]},"cp":{"h":["1"]},"cv":{"l":["1"],"j":["1"],"h":["1"]},"cy":{"U":["1","2"]},"V":{"U":["1","2"]},"d7":{"j":["1"],"h":["1"]},"X":{"a5":[]},"m":{"a5":[]},"l":{"j":["1"],"h":["1"]},"dx":{"G":[]},"eM":{"G":[]},"eb":{"G":[]},"ai":{"G":[]},"cN":{"G":[]},"dP":{"G":[]},"f0":{"G":[]},"eY":{"G":[]},"bS":{"G":[]},"dC":{"G":[]},"ee":{"G":[]},"cQ":{"G":[]},"dE":{"G":[]},"y":{"r":[],"b":[]},"bg":{"i":[]},"aa":{"i":[]},"r":{"b":[]},"aB":{"b":[]},"aC":{"b":[]},"ag":{"b":[]},"bp":{"i":[]},"aE":{"i":[]},"aZ":{"aa":[],"i":[]},"bZ":{"az":[]},"o":{"y":[],"r":[],"b":[]},"dv":{"y":[],"r":[],"b":[]},"dw":{"y":[],"r":[],"b":[]},"bz":{"y":[],"r":[],"b":[]},"b8":{"y":[],"r":[],"b":[]},"b9":{"y":[],"r":[],"b":[]},"aj":{"r":[],"b":[]},"cg":{"y":[],"r":[],"b":[]},"ch":{"l":["ab<a5>"],"u":["ab<a5>"],"j":["ab<a5>"],"h":["ab<a5>"]},"ci":{"ab":["a5"]},"dH":{"l":["v"],"u":["v"],"j":["v"],"h":["v"]},"f9":{"l":["y"],"j":["y"],"h":["y"]},"dI":{"l":["aN"],"u":["aN"],"j":["aN"],"h":["aN"]},"dJ":{"b":[]},"dL":{"y":[],"r":[],"b":[]},"bd":{"l":["r"],"u":["r"],"j":["r"],"h":["r"]},"bH":{"y":[],"r":[],"b":[]},"e2":{"U":["v","@"],"V.V":"@"},"e3":{"U":["v","@"],"V.V":"@"},"e4":{"l":["aS"],"u":["aS"],"j":["aS"],"h":["aS"]},"a2":{"l":["r"],"j":["r"],"h":["r"]},"cI":{"l":["r"],"u":["r"],"j":["r"],"h":["r"]},"ei":{"l":["aT"],"u":["aT"],"j":["aT"],"h":["aT"]},"em":{"U":["v","@"],"V.V":"@"},"eo":{"y":[],"r":[],"b":[]},"et":{"l":["aB"],"u":["aB"],"b":[],"j":["aB"],"h":["aB"]},"eu":{"l":["aV"],"u":["aV"],"j":["aV"],"h":["aV"]},"ey":{"U":["v","v"],"V.V":"v"},"cR":{"y":[],"r":[],"b":[]},"eC":{"y":[],"r":[],"b":[]},"eD":{"y":[],"r":[],"b":[]},"bT":{"y":[],"r":[],"b":[]},"eF":{"l":["ag"],"u":["ag"],"j":["ag"],"h":["ag"]},"eG":{"l":["aC"],"u":["aC"],"b":[],"j":["aC"],"h":["aC"]},"eK":{"l":["aY"],"u":["aY"],"j":["aY"],"h":["aY"]},"f2":{"b":[]},"bX":{"b":[]},"bY":{"r":[],"b":[]},"fa":{"l":["F"],"u":["F"],"j":["F"],"h":["F"]},"cZ":{"ab":["a5"]},"fo":{"l":["aO?"],"u":["aO?"],"j":["aO?"],"h":["aO?"]},"d2":{"l":["r"],"u":["r"],"j":["r"],"h":["r"]},"fI":{"l":["aW"],"u":["aW"],"j":["aW"],"h":["aW"]},"fP":{"l":["am"],"u":["am"],"j":["am"],"h":["am"]},"f7":{"U":["v","v"]},"fg":{"U":["v","v"],"V.V":"v"},"cJ":{"az":[]},"d8":{"az":[]},"fR":{"az":[]},"fQ":{"az":[]},"dg":{"be":[]},"dK":{"l":["y"],"j":["y"],"h":["y"]},"ab":{"fE":["1"]},"dY":{"l":["bh"],"j":["bh"],"h":["bh"]},"ec":{"l":["bk"],"j":["bk"],"h":["bk"]},"bQ":{"k":[],"y":[],"r":[],"b":[]},"eB":{"l":["v"],"j":["v"],"h":["v"]},"k":{"y":[],"r":[],"b":[]},"eL":{"l":["bq"],"j":["bq"],"h":["bq"]},"dy":{"U":["v","@"],"V.V":"@"},"dz":{"b":[]},"aK":{"b":[]},"ed":{"b":[]},"ev":{"l":["U<@,@>"],"j":["U<@,@>"],"h":["U<@,@>"]},"bD":{"h":["1"]},"av":{"O":[]},"aw":{"O":[]},"z":{"O":[]},"cx":{"O":[]},"bK":{"O":[]},"bL":{"O":[]},"ej":{"O":[]},"cS":{"O":[]},"cf":{"cs":[]},"ct":{"h":["cs"]},"cc":{"a0":[]},"bG":{"a0":[],"h":["a0?"]},"cU":{"a0":[]},"cV":{"a0":[]},"cW":{"a0":[]},"cb":{"bn":[],"h":["bn"]},"cd":{"bn":[]},"cl":{"bn":[]},"cB":{"bR":[]},"cP":{"bR":[]},"dF":{"ar":[]},"dM":{"ar":[]},"dO":{"ar":[]},"eh":{"ar":[]}}'))
H.nc(v.typeUniverse,JSON.parse('{"al":1,"dU":1,"a6":1,"j":1,"cw":1,"aR":1,"bi":2,"cj":2,"cz":2,"cA":2,"bu":1,"f5":1,"cm":1,"f_":1,"bU":1,"aQ":1,"dZ":1,"bM":1,"bv":1,"db":1,"ez":1,"eA":2,"d0":1,"cp":1,"cv":1,"D":1,"cy":2,"V":2,"ep":1,"d7":1,"d1":1,"dj":1,"dB":2,"dD":2,"h":1,"l":1,"dR":1,"fj":1,"H":1,"cn":1,"bD":1,"av":1,"aw":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.of
return{w:s("bz"),t:s("b8"),D:s("bC"),E:s("b9"),b:s("ca"),V:s("j<@>"),h:s("y"),C:s("G"),B:s("i"),Y:s("co"),I:s("be"),l:s("bH"),m:s("al<@>"),T:s("cr"),M:s("ax"),p:s("u<@>"),c:s("T<m,a4>"),y:s("T<m,m>"),J:s("l<eQ>"),L:s("l<eR>"),U:s("l<eU>"),R:s("l<eX>"),d:s("l<@>"),e:s("cx"),f:s("U<@,@>"),Z:s("bK"),O:s("bL"),P:s("ae"),K:s("L"),q:s("ab<a5>"),r:s("bQ"),k:s("bR"),s:s("cO"),N:s("v"),u:s("k"),bg:s("bT"),ae:s("iN"),aR:s("eI"),aM:s("cS"),n:s("eN"),v:s("cT"),g:s("eO"),F:s("eP"),Q:s("eS"),j:s("eT"),G:s("eV"),a:s("eW"),o:s("br"),x:s("bY"),cB:s("a4"),i:s("X"),z:s("@"),S:s("m"),A:s("0&*"),_:s("L*"),bc:s("kJ<ae>?"),d1:s("cB?"),X:s("L?"),ba:s("bP?"),da:s("cP?"),aJ:s("ew?"),aX:s("eJ?"),W:s("cT?"),H:s("a5")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.b8.prototype
C.f=W.b9.prototype
C.I=W.cg.prototype
C.L=J.a.prototype
C.a=J.al.prototype
C.c=J.cq.prototype
C.M=J.cr.prototype
C.d=J.bI.prototype
C.b=J.aP.prototype
C.N=J.ax.prototype
C.u=J.eg.prototype
C.U=P.bP.prototype
C.v=W.cR.prototype
C.k=J.br.prototype
C.w=W.aZ.prototype
C.x=W.bX.prototype
C.y=new E.bB("Browser.chrome")
C.m=new E.bB("Browser.firefox")
C.n=new E.bB("Browser.edge")
C.z=new E.bB("Browser.other")
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

C.G=new P.ee()
C.h=new P.j4()
C.H=new P.j5()
C.e=new P.jp()
C.i=new P.bc(0)
C.J=new P.bc(5e6)
C.K=new P.hO("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.q=s([0,0,65498,45055,65535,34815,65534,18431])
C.r=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bN("OperatingSystem.windows")
C.t=new E.bN("OperatingSystem.mac")
C.S=new E.bN("OperatingSystem.linux")
C.T=new E.bN("OperatingSystem.other")
C.V=new P.c_(null,2)})();(function staticFields(){$.jm=null
$.aq=0
$.c7=null
$.kB=null
$.lA=null
$.lw=null
$.lE=null
$.jL=null
$.jR=null
$.ks=null
$.c0=null
$.dm=null
$.dn=null
$.kn=!1
$.an=C.e
$.a8=[]
$.aM=null
$.k_=null
$.kH=null
$.kG=null
$.fp=P.M(t.N,t.Y)
$.hC=null
$.kM=null
$.kO=null
$.a1=null
$.aA=null
$.kU=null
$.bs=null
$.l6=null
$.l5=null
$.j6=null
$.j7=null
$.j8=null
$.l4=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oN","lK",function(){return H.oh("_$dart_dartClosure")})
s($,"p_","lM",function(){return H.aD(H.iU({
toString:function(){return"$receiver$"}}))})
s($,"p0","lN",function(){return H.aD(H.iU({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"p1","lO",function(){return H.aD(H.iU(null))})
s($,"p2","lP",function(){return H.aD(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"p5","lS",function(){return H.aD(H.iU(void 0))})
s($,"p6","lT",function(){return H.aD(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"p4","lR",function(){return H.aD(H.l2(null))})
s($,"p3","lQ",function(){return H.aD(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"p8","lV",function(){return H.aD(H.l2(void 0))})
s($,"p7","lU",function(){return H.aD(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"pm","kx",function(){return P.mR()})
s($,"pp","m_",function(){return P.mF("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pn","lZ",function(){return P.kK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"pf","lY",function(){return Z.ah(0)})
s($,"p9","lW",function(){return Z.ah(511)})
s($,"ph","ao",function(){return Z.ah(1)})
s($,"pg","b5",function(){return Z.ah(2)})
s($,"pb","b4",function(){return Z.ah(4)})
s($,"pi","bx",function(){return Z.ah(8)})
s($,"pj","by",function(){return Z.ah(16)})
s($,"pc","ds",function(){return Z.ah(32)})
s($,"pd","dt",function(){return Z.ah(64)})
s($,"pe","lX",function(){return Z.ah(96)})
s($,"pk","c6",function(){return Z.ah(128)})
s($,"pa","b3",function(){return Z.ah(256)})
s($,"oJ","lJ",function(){return new V.hD()})
r($,"oI","B",function(){return $.lJ()})
r($,"oW","lL",function(){var q=V.kQ(),p=V.kd(),o=$.l4
return V.kN(q,p,o==null?$.l4=V.mP(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cG,ArrayBufferView:H.cG,Float32Array:H.bj,Float64Array:H.bj,Int16Array:H.e5,Int32Array:H.e6,Int8Array:H.e7,Uint16Array:H.e8,Uint32Array:H.e9,Uint8ClampedArray:H.cH,CanvasPixelArray:H.cH,Uint8Array:H.ea,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.he,HTMLAnchorElement:W.dv,HTMLAreaElement:W.dw,HTMLBaseElement:W.bz,Blob:W.dA,HTMLBodyElement:W.b8,HTMLCanvasElement:W.b9,CanvasRenderingContext2D:W.ca,CDATASection:W.aj,CharacterData:W.aj,Comment:W.aj,ProcessingInstruction:W.aj,Text:W.aj,CSSPerspective:W.hq,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.hs,CSSUnparsedValue:W.ht,DataTransferItemList:W.hu,HTMLDivElement:W.cg,DOMException:W.hv,ClientRectList:W.ch,DOMRectList:W.ch,DOMRectReadOnly:W.ci,DOMStringList:W.dH,DOMTokenList:W.hw,Element:W.y,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aN,FileList:W.dI,FileWriter:W.dJ,HTMLFormElement:W.dL,Gamepad:W.aO,History:W.hM,HTMLCollection:W.bd,HTMLFormControlsCollection:W.bd,HTMLOptionsCollection:W.bd,ImageData:W.be,HTMLImageElement:W.bH,KeyboardEvent:W.bg,Location:W.hY,MediaList:W.ie,MIDIInputMap:W.e2,MIDIOutputMap:W.e3,MimeType:W.aS,MimeTypeArray:W.e4,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cI,RadioNodeList:W.cI,Plugin:W.aT,PluginArray:W.ei,RTCStatsReport:W.em,HTMLSelectElement:W.eo,SourceBuffer:W.aB,SourceBufferList:W.et,SpeechGrammar:W.aV,SpeechGrammarList:W.eu,SpeechRecognitionResult:W.aW,Storage:W.ey,CSSStyleSheet:W.am,StyleSheet:W.am,HTMLTableElement:W.cR,HTMLTableRowElement:W.eC,HTMLTableSectionElement:W.eD,HTMLTemplateElement:W.bT,TextTrack:W.aC,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.eF,TextTrackList:W.eG,TimeRanges:W.iM,Touch:W.aY,TouchEvent:W.bp,TouchList:W.eK,TrackDefaultList:W.iR,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,UIEvent:W.aE,URL:W.j3,VideoTrackList:W.f2,WheelEvent:W.aZ,Window:W.bX,DOMWindow:W.bX,Attr:W.bY,CSSRuleList:W.fa,ClientRect:W.cZ,DOMRect:W.cZ,GamepadList:W.fo,NamedNodeMap:W.d2,MozNamedAttrMap:W.d2,SpeechRecognitionResultList:W.fI,StyleSheetList:W.fP,SVGLength:P.bh,SVGLengthList:P.dY,SVGNumber:P.bk,SVGNumberList:P.ec,SVGPointList:P.io,SVGScriptElement:P.bQ,SVGStringList:P.eB,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bq,SVGTransformList:P.eL,AudioBuffer:P.hi,AudioParamMap:P.dy,AudioTrackList:P.dz,AudioContext:P.aK,webkitAudioContext:P.aK,BaseAudioContext:P.aK,OfflineAudioContext:P.ed,WebGL2RenderingContext:P.bP,SQLResultSetRowList:P.ev})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=B.or
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
