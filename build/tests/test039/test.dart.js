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
a[c]=function(){a[c]=function(){H.ni(b)}
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
if(a[b]!==s)H.nj(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jr(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={j7:function j7(){},
mW:function(a,b,c){return a},
lg:function(a,b){if(t.O.b(a))return new H.bW(a,b)
return new H.b3(a,b)},
jG:function(){return new P.e_("No element")},
lA:function(a,b){H.dV(a,0,J.bg(a)-1,b)},
dV:function(a,b,c,d){if(c-b<=32)H.lz(a,b,c,d)
else H.ly(a,b,c,d)},
lz:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cV(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a2()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
ly:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.U(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.U(a4+a5,2),f=g-j,e=g+j,d=J.cV(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.I(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
q=m
r=l
break}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.dV(a3,a4,r-2,a6)
H.dV(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.I(a6.$2(d.h(a3,r),b),0);)++r
for(;J.I(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}H.dV(a3,r,q,a6)}else H.dV(a3,r,q,a6)},
dp:function dp(a){this.a=a},
K:function K(a){this.a=a},
j:function j(){},
bo:function bo(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b3:function b3(a,b){this.a=a
this.b=b},
bW:function bW(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=null
this.b=a
this.c=b},
cs:function cs(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
bX:function bX(){},
er:function er(){},
bx:function bx(){},
kz:function(a){var s,r=H.ky(a)
if(r!=null)return r
s="minified:"+a
return s},
n9:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
v:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fy(a)
return s},
ch:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ci:function(a){return H.li(a)},
li:function(a){var s,r,q,p
if(a instanceof P.J)return H.a1(H.bK(a),null)
if(J.cU(a)===C.E||t.o.b(a)){s=C.k(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a1(H.bK(a),null)},
jN:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
ls:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.iJ(q))throw H.c(H.iN(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.aY(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.iN(q))}return H.jN(p)},
lr:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.iJ(q))throw H.c(H.iN(q))
if(q<0)throw H.c(H.iN(q))
if(q>65535)return H.ls(a)}return H.jN(a)},
lq:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.aY(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aC(a,0,1114111,null,null))},
bt:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lp:function(a){var s=H.bt(a).getFullYear()+0
return s},
ln:function(a){var s=H.bt(a).getMonth()+1
return s},
lj:function(a){var s=H.bt(a).getDate()+0
return s},
lk:function(a){var s=H.bt(a).getHours()+0
return s},
lm:function(a){var s=H.bt(a).getMinutes()+0
return s},
lo:function(a){var s=H.bt(a).getSeconds()+0
return s},
ll:function(a){var s=H.bt(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.bg(a)
throw H.c(H.bH(a,b))},
bH:function(a,b){var s,r="index"
if(!H.iJ(b))return new P.ag(!0,b,r,null)
s=J.bg(a)
if(b<0||b>=s)return P.F(b,a,r,null,s)
return P.dO(b,r)},
n_:function(a,b,c){if(a>c)return P.aC(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aC(b,a,c,"end",null)
return new P.ag(!0,b,"end",null)},
iN:function(a){return new P.ag(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dG()
s=new Error()
s.dartException=a
r=H.nk
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nk:function(){return J.fy(this.dartException)},
f:function(a){throw H.c(a)},
o:function(a){throw H.c(P.aT(a))},
at:function(a){var s,r,q,p,o,n
a=H.kv(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.i_(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
i0:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jZ:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
j8:function(a,b){var s=b==null,r=s?null:b.method
return new H.dm(a,r,s?null:b.receiver)},
fw:function(a){if(a==null)return new H.hx(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.be(a,a.dartException)
return H.mS(a)},
be:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mS:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aY(r,16)&8191)===10)switch(q){case 438:return H.be(a,H.j8(H.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.v(s)+" (Error "+q+")"
return H.be(a,new H.cg(p,e))}}if(a instanceof TypeError){o=$.kD()
n=$.kE()
m=$.kF()
l=$.kG()
k=$.kJ()
j=$.kK()
i=$.kI()
$.kH()
h=$.kM()
g=$.kL()
f=o.a0(s)
if(f!=null)return H.be(a,H.j8(s,f))
else{f=n.a0(s)
if(f!=null){f.method="call"
return H.be(a,H.j8(s,f))}else{f=m.a0(s)
if(f==null){f=l.a0(s)
if(f==null){f=k.a0(s)
if(f==null){f=j.a0(s)
if(f==null){f=i.a0(s)
if(f==null){f=l.a0(s)
if(f==null){f=h.a0(s)
if(f==null){f=g.a0(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.be(a,new H.cg(s,f==null?e:f.method))}}return H.be(a,new H.eq(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cm()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.be(a,new P.ag(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cm()
return a},
jt:function(a){var s
if(a==null)return new H.f8(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f8(a)},
n1:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
n8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.e("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n8)
a.$identity=s
return s},
l4:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hL().constructor.prototype):Object.create(new H.bM(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ah
if(typeof r!=="number")return r.O()
$.ah=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jD(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.l0(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jD(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
l0:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kr,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.kZ:H.kY
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
l1:function(a,b,c,d){var s=H.jC
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jD:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.l3(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.l1(r,!p,s,b)
if(r===0){p=$.ah
if(typeof p!=="number")return p.O()
$.ah=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bN
return new Function(p+(o==null?$.bN=H.fH("self"):o)+";return "+n+"."+H.v(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ah
if(typeof p!=="number")return p.O()
$.ah=p+1
m+=p
p="return function("+m+"){return this."
o=$.bN
return new Function(p+(o==null?$.bN=H.fH("self"):o)+"."+H.v(s)+"("+m+");}")()},
l2:function(a,b,c,d){var s=H.jC,r=H.l_
switch(b?-1:a){case 0:throw H.c(new H.dS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
l3:function(a,b){var s,r,q,p,o,n,m,l=$.bN
if(l==null)l=$.bN=H.fH("self")
s=$.jB
if(s==null)s=$.jB=H.fH("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.l2(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.v(r)+"(this."+s+");"
n=$.ah
if(typeof n!=="number")return n.O()
$.ah=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.v(r)+"(this."+s+", "+m+");"
n=$.ah
if(typeof n!=="number")return n.O()
$.ah=n+1
return new Function(o+n+"}")()},
jr:function(a,b,c,d,e,f,g){return H.l4(a,b,c,d,!!e,!!f,g)},
kY:function(a,b){return H.fk(v.typeUniverse,H.bK(a.a),b)},
kZ:function(a,b){return H.fk(v.typeUniverse,H.bK(a.c),b)},
jC:function(a){return a.a},
l_:function(a){return a.c},
fH:function(a){var s,r,q,p=new H.bM("self","target","receiver","name"),o=J.j6(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.j_("Field name "+a+" not found."))},
ni:function(a){throw H.c(new P.d8(a))},
n4:function(a){return v.getIsolateTag(a)},
nj:function(a){return H.f(new H.dp(a))},
om:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nb:function(a){var s,r,q,p,o,n=$.kq.$1(a),m=$.iP[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iU[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kn.$2(a,n)
if(q!=null){m=$.iP[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iU[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iW(s)
$.iP[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iU[n]=s
return s}if(p==="-"){o=H.iW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kt(a,s)
if(p==="*")throw H.c(P.k_(n))
if(v.leafTags[n]===true){o=H.iW(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kt(a,s)},
kt:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jw(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iW:function(a){return J.jw(a,!1,null,!!a.$it)},
nd:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iW(s)
else return J.jw(s,c,null,null)},
n6:function(){if(!0===$.ju)return
$.ju=!0
H.n7()},
n7:function(){var s,r,q,p,o,n,m,l
$.iP=Object.create(null)
$.iU=Object.create(null)
H.n5()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ku.$1(o)
if(n!=null){m=H.nd(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
n5:function(){var s,r,q,p,o,n,m=C.v()
m=H.bE(C.w,H.bE(C.x,H.bE(C.l,H.bE(C.l,H.bE(C.y,H.bE(C.z,H.bE(C.A(C.k),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kq=new H.iR(p)
$.kn=new H.iS(o)
$.ku=new H.iT(n)},
bE:function(a,b){return a(b)||b},
ld:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h1("Illegal RegExp pattern ("+String(n)+")",a))},
kw:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
n0:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kv:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kx:function(a,b,c){var s=H.ng(a,b,c)
return s},
ng:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kv(b),'g'),H.n0(c))},
i_:function i_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cg:function cg(a,b){this.a=a
this.b=b},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
hx:function hx(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null},
bi:function bi(){},
hO:function hO(){},
hL:function hL(){},
bM:function bM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a){this.a=a},
N:function N(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h5:function h5(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b
this.c=null},
az:function az(a){this.a=a},
dr:function dr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cP:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.cV(a)
r=s.gj(a)
q=P.ds(r,null,!1)
for(p=0;p<s.gj(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
av:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bH(b,a))},
m6:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.n_(a,b,c))
return b},
cd:function cd(){},
br:function br(){},
b4:function b4(){},
cc:function cc(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
ce:function ce(){},
dF:function dF(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
jR:function(a,b){var s=b.c
return s==null?b.c=H.jk(a,b.z,!0):s},
jQ:function(a,b){var s=b.c
return s==null?b.c=H.cL(a,"jF",[b.z]):s},
jS:function(a){var s=a.y
if(s===6||s===7||s===8)return H.jS(a.z)
return s===11||s===12},
lw:function(a){return a.cy},
n2:function(a){return H.jl(v.typeUniverse,a,!1)},
aJ:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aJ(a,s,a0,a1)
if(r===s)return b
return H.kc(a,r,!0)
case 7:s=b.z
r=H.aJ(a,s,a0,a1)
if(r===s)return b
return H.jk(a,r,!0)
case 8:s=b.z
r=H.aJ(a,s,a0,a1)
if(r===s)return b
return H.kb(a,r,!0)
case 9:q=b.Q
p=H.cT(a,q,a0,a1)
if(p===q)return b
return H.cL(a,b.z,p)
case 10:o=b.z
n=H.aJ(a,o,a0,a1)
m=b.Q
l=H.cT(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ji(a,n,l)
case 11:k=b.z
j=H.aJ(a,k,a0,a1)
i=b.Q
h=H.mP(a,i,a0,a1)
if(j===k&&h===i)return b
return H.ka(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cT(a,g,a0,a1)
o=b.z
n=H.aJ(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jj(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fB("Attempted to substitute unexpected RTI kind "+c))}},
cT:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aJ(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
mQ:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aJ(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
mP:function(a,b,c,d){var s,r=b.a,q=H.cT(a,r,c,d),p=b.b,o=H.cT(a,p,c,d),n=b.c,m=H.mQ(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eN()
s.a=q
s.b=o
s.c=m
return s},
oo:function(a,b){a[v.arrayRti]=b
return a},
mX:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kr(s)
return a.$S()}return null},
ks:function(a,b){var s
if(H.jS(b))if(a instanceof H.bi){s=H.mX(a)
if(s!=null)return s}return H.bK(a)},
bK:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.jm(a)}if(Array.isArray(a))return H.kf(a)
return H.jm(J.cU(a))},
kf:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.jm(a)},
jm:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.md(a,s)},
md:function(a,b){var s=a instanceof H.bi?a.__proto__.__proto__.constructor:b,r=H.m1(v.typeUniverse,s.name)
b.$ccache=r
return r},
kr:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jl(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mc:function(a){var s,r,q,p=this
if(p===t.K)return H.cQ(p,a,H.mh)
if(!H.aw(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cQ(p,a,H.mk)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.iJ
else if(r===t.i||r===t.H)q=H.mg
else if(r===t.N)q=H.mi
else q=r===t.w?H.jn:null
if(q!=null)return H.cQ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.na)){p.r="$i"+s
return H.cQ(p,a,H.mj)}}else if(s===7)return H.cQ(p,a,H.ma)
return H.cQ(p,a,H.m8)},
cQ:function(a,b,c){a.b=c
return a.b(b)},
mb:function(a){var s,r=this,q=H.m7
if(!H.aw(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.m5
else if(r===t.K)q=H.m3
else{s=H.cW(r)
if(s)q=H.m9}r.a=q
return r.a(a)},
jq:function(a){var s,r=a.y
if(!H.aw(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jq(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
m8:function(a){var s=this
if(a==null)return H.jq(s)
return H.H(v.typeUniverse,H.ks(a,s),null,s,null)},
ma:function(a){if(a==null)return!0
return this.z.b(a)},
mj:function(a){var s,r=this
if(a==null)return H.jq(r)
s=r.r
if(a instanceof P.J)return!!a[s]
return!!J.cU(a)[s]},
m7:function(a){var s,r=this
if(a==null){s=H.cW(r)
if(s)return a}else if(r.b(a))return a
H.ki(a,r)},
m9:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ki(a,s)},
ki:function(a,b){throw H.c(H.lS(H.k5(a,H.ks(a,b),H.a1(b,null))))},
k5:function(a,b,c){var s=P.fW(a),r=H.a1(b==null?H.bK(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
lS:function(a){return new H.cJ("TypeError: "+a)},
V:function(a,b){return new H.cJ("TypeError: "+H.k5(a,null,b))},
mh:function(a){return a!=null},
m3:function(a){if(a!=null)return a
throw H.c(H.V(a,"Object"))},
mk:function(a){return!0},
m5:function(a){return a},
jn:function(a){return!0===a||!1===a},
kg:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.V(a,"bool"))},
ob:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.V(a,"bool"))},
oa:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.V(a,"bool?"))},
oc:function(a){if(typeof a=="number")return a
throw H.c(H.V(a,"double"))},
oe:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"double"))},
od:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"double?"))},
iJ:function(a){return typeof a=="number"&&Math.floor(a)===a},
iG:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.V(a,"int"))},
og:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.V(a,"int"))},
of:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.V(a,"int?"))},
mg:function(a){return typeof a=="number"},
oh:function(a){if(typeof a=="number")return a
throw H.c(H.V(a,"num"))},
oj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"num"))},
oi:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.V(a,"num?"))},
mi:function(a){return typeof a=="string"},
m4:function(a){if(typeof a=="string")return a
throw H.c(H.V(a,"String"))},
ol:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.V(a,"String"))},
ok:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.V(a,"String?"))},
mL:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a1(a[q],b)
return s},
kj:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.c.O(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a1(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a1(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a1(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a1(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a1(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a1:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a1(a.z,b)
return s}if(l===7){r=a.z
s=H.a1(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a1(a.z,b)+">"
if(l===9){p=H.mR(a.z)
o=a.Q
return o.length!==0?p+("<"+H.mL(o,b)+">"):p}if(l===11)return H.kj(a,b,null)
if(l===12)return H.kj(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
mR:function(a){var s,r=H.ky(a)
if(r!=null)return r
s="minified:"+a
return s},
kd:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
m1:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jl(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cM(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cL(a,b,q)
n[b]=o
return o}else return m},
m_:function(a,b){return H.ke(a.tR,b)},
lZ:function(a,b){return H.ke(a.eT,b)},
jl:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.k9(H.k7(a,null,b,c))
r.set(b,s)
return s},
fk:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.k9(H.k7(a,b,c,!0))
q.set(c,r)
return r},
m0:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ji(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aI:function(a,b){b.a=H.mb
b.b=H.mc
return b},
cM:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a6(null,null)
s.y=b
s.cy=c
r=H.aI(a,s)
a.eC.set(c,r)
return r},
kc:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.lX(a,b,r,c)
a.eC.set(r,s)
return s},
lX:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aw(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a6(null,null)
q.y=6
q.z=b
q.cy=c
return H.aI(a,q)},
jk:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.lW(a,b,r,c)
a.eC.set(r,s)
return s},
lW:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aw(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cW(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cW(q.z))return q
else return H.jR(a,b)}}p=new H.a6(null,null)
p.y=7
p.z=b
p.cy=c
return H.aI(a,p)},
kb:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.lU(a,b,r,c)
a.eC.set(r,s)
return s},
lU:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aw(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cL(a,"jF",[b])
else if(b===t.P||b===t.T)return t.r}q=new H.a6(null,null)
q.y=8
q.z=b
q.cy=c
return H.aI(a,q)},
lY:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a6(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aI(a,s)
a.eC.set(q,r)
return r},
fj:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
lT:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cL:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a6(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aI(a,r)
a.eC.set(p,q)
return q},
ji:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aI(a,o)
a.eC.set(q,n)
return n},
ka:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fj(m)
if(j>0){s=l>0?",":""
r=H.fj(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.lT(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aI(a,o)
a.eC.set(q,r)
return r},
jj:function(a,b,c,d){var s,r=b.cy+("<"+H.fj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.lV(a,b,c,r,d)
a.eC.set(r,s)
return s},
lV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aJ(a,b,r,0)
m=H.cT(a,c,r,0)
return H.jj(a,n,m,c!==m)}}l=new H.a6(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aI(a,l)},
k7:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
k9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.lM(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.k8(a,r,h,g,!1)
else if(q===46)r=H.k8(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aH(a.u,a.e,g.pop()))
break
case 94:g.push(H.lY(a.u,g.pop()))
break
case 35:g.push(H.cM(a.u,5,"#"))
break
case 64:g.push(H.cM(a.u,2,"@"))
break
case 126:g.push(H.cM(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jh(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cL(p,n,o))
else{m=H.aH(p,a.e,n)
switch(m.y){case 11:g.push(H.jj(p,m,o,a.n))
break
default:g.push(H.ji(p,m,o))
break}}break
case 38:H.lN(a,g)
break
case 42:p=a.u
g.push(H.kc(p,H.aH(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.jk(p,H.aH(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kb(p,H.aH(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.eN()
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
H.jh(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.ka(p,H.aH(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jh(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.lP(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aH(a.u,a.e,i)},
lM:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
k8:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kd(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.lw(o)+'"')
d.push(H.fk(s,o,n))}else d.push(p)
return m},
lN:function(a,b){var s=b.pop()
if(0===s){b.push(H.cM(a.u,1,"0&"))
return}if(1===s){b.push(H.cM(a.u,4,"1&"))
return}throw H.c(P.fB("Unexpected extended operation "+H.v(s)))},
aH:function(a,b,c){if(typeof c=="string")return H.cL(a,c,a.sEA)
else if(typeof c=="number")return H.lO(a,b,c)
else return c},
jh:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aH(a,b,c[s])},
lP:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aH(a,b,c[s])},
lO:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fB("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fB("Bad index "+c+" for "+b.i(0)))},
H:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aw(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aw(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.H(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.H(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.H(a,b.z,c,d,e)
if(r===6)return H.H(a,b.z,c,d,e)
return r!==7}if(r===6)return H.H(a,b.z,c,d,e)
if(p===6){s=H.jR(a,d)
return H.H(a,b,c,s,e)}if(r===8){if(!H.H(a,b.z,c,d,e))return!1
return H.H(a,H.jQ(a,b),c,d,e)}if(r===7){s=H.H(a,t.P,c,d,e)
return s&&H.H(a,b.z,c,d,e)}if(p===8){if(H.H(a,b,c,d.z,e))return!0
return H.H(a,b,c,H.jQ(a,d),e)}if(p===7){s=H.H(a,b,c,t.P,e)
return s||H.H(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
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
if(!H.H(a,k,c,j,e)||!H.H(a,j,e,k,c))return!1}return H.kk(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.kk(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mf(a,b,c,d,e)}return!1},
kk:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.H(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.H(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.H(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.H(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.H(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mf:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.H(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kd(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.H(a,H.fk(a,b,l[p]),c,r[p],e))return!1
return!0},
cW:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aw(a))if(r!==7)if(!(r===6&&H.cW(a.z)))s=r===8&&H.cW(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
na:function(a){var s
if(!H.aw(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aw:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
ke:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eN:function eN(){this.c=this.b=this.a=null},
eI:function eI(){},
cJ:function cJ(a){this.a=a},
ky:function(a){return v.mangledGlobalNames[a]},
ne:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iQ:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ju==null){H.n6()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.k_("Return interceptor for "+H.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iv
if(o==null)o=$.iv=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.nb(a)
if(p!=null)return p
if(typeof a=="function")return C.G
s=Object.getPrototypeOf(a)
if(s==null)return C.p
if(s===Object.prototype)return C.p
if(typeof q=="function"){o=$.iv
if(o==null)o=$.iv=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.h,enumerable:false,writable:true,configurable:true})
return C.h}return C.h},
la:function(a){if(a<0||a>4294967295)throw H.c(P.aC(a,0,4294967295,"length",null))
return J.lb(new Array(a))},
j5:function(a){if(a<0)throw H.c(P.j_("Length must be a non-negative integer: "+a))
return new Array(a)},
lb:function(a){return J.j6(a)},
j6:function(a){a.fixed$length=Array
return a},
lc:function(a,b){return J.kU(a,b)},
cU:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c0.prototype
return J.dk.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.c1.prototype
if(typeof a=="boolean")return J.dj.prototype
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.am.prototype
return a}if(a instanceof P.J)return a
return J.iQ(a)},
cV:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.am.prototype
return a}if(a instanceof P.J)return a
return J.iQ(a)},
js:function(a){if(a==null)return a
if(a.constructor==Array)return J.ac.prototype
if(typeof a!="object"){if(typeof a=="function")return J.am.prototype
return a}if(a instanceof P.J)return a
return J.iQ(a)},
n3:function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bw.prototype
return a},
bJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.am.prototype
return a}if(a instanceof P.J)return a
return J.iQ(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cU(a).l(a,b)},
kR:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cV(a).h(a,b)},
kS:function(a,b,c){return J.bJ(a).eu(a,b,c)},
kT:function(a,b,c,d){return J.bJ(a).eI(a,b,c,d)},
kU:function(a,b){return J.n3(a).Z(a,b)},
iY:function(a,b){return J.js(a).w(a,b)},
iZ:function(a,b){return J.js(a).C(a,b)},
kV:function(a){return J.bJ(a).gcn(a)},
kW:function(a){return J.bJ(a).gco(a)},
fx:function(a){return J.cU(a).gG(a)},
ax:function(a){return J.js(a).gK(a)},
bg:function(a){return J.cV(a).gj(a)},
kX:function(a,b){return J.bJ(a).fl(a,b)},
fy:function(a){return J.cU(a).i(a)},
a:function a(){},
dj:function dj(){},
c1:function c1(){},
b0:function b0(){},
dL:function dL(){},
bw:function bw(){},
am:function am(){},
ac:function ac(){},
dl:function dl(){},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bn:function bn(){},
c0:function c0(){},
dk:function dk(){},
b_:function b_(){}},P={
lF:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.mT()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bG(new P.ir(q),1)).observe(s,{childList:true})
return new P.iq(q,s,r)}else if(self.setImmediate!=null)return P.mU()
return P.mV()},
lG:function(a){self.scheduleImmediate(H.bG(new P.is(a),0))},
lH:function(a){self.setImmediate(H.bG(new P.it(a),0))},
lI:function(a){P.jb(C.f,a)},
jb:function(a,b){var s=C.b.U(a.a,1000)
return P.lQ(s<0?0:s,b)},
jY:function(a,b){var s=C.b.U(a.a,1000)
return P.lR(s<0?0:s,b)},
lQ:function(a,b){var s=new P.cI()
s.dj(a,b)
return s},
lR:function(a,b){var s=new P.cI()
s.dk(a,b)
return s},
o7:function(a){return new P.bB(a,1)},
lJ:function(){return C.M},
lK:function(a){return new P.bB(a,3)},
mm:function(a){return new P.cF(a)},
mI:function(){var s,r
for(s=$.bD;s!=null;s=$.bD){$.cS=null
r=s.b
$.bD=r
if(r==null)$.cR=null
s.a.$0()}},
mO:function(){$.jo=!0
try{P.mI()}finally{$.cS=null
$.jo=!1
if($.bD!=null)$.jA().$1(P.ko())}},
mM:function(a){var s=new P.ex(a),r=$.cR
if(r==null){$.bD=$.cR=s
if(!$.jo)$.jA().$1(P.ko())}else $.cR=r.b=s},
mN:function(a){var s,r,q,p=$.bD
if(p==null){P.mM(a)
$.cS=$.cR
return}s=new P.ex(a)
r=$.cS
if(r==null){s.b=p
$.bD=$.cS=s}else{q=r.b
s.b=q
$.cS=r.b=s
if(q==null)$.cR=s}},
jW:function(a,b){var s=$.af
if(s===C.e)return P.jb(a,b)
return P.jb(a,s.eL(b))},
jX:function(a,b){var s=$.af
if(s===C.e)return P.jY(a,b)
return P.jY(a,s.cm(b,t.Y))},
kl:function(a,b,c,d,e){P.mN(new P.iM(d,e))},
mJ:function(a,b,c,d){var s,r=$.af
if(r===c)return d.$0()
$.af=c
s=r
try{r=d.$0()
return r}finally{$.af=s}},
mK:function(a,b,c,d,e){var s,r=$.af
if(r===c)return d.$1(e)
$.af=c
s=r
try{r=d.$1(e)
return r}finally{$.af=s}},
ir:function ir(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
cI:function cI(){this.c=0},
iC:function iC(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b){this.a=a
this.b=b},
bC:function bC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cF:function cF(a){this.a=a},
ex:function ex(a){this.a=a
this.b=null},
e1:function e1(){},
e2:function e2(){},
iE:function iE(){},
iM:function iM(a,b){this.a=a
this.b=b},
iy:function iy(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
le:function(a,b,c){return H.n1(a,new H.N(b.a8("@<0>").bX(c).a8("N<1,2>")))},
L:function(a,b){return new H.N(a.a8("@<0>").bX(b).a8("N<1,2>"))},
jH:function(a){return new P.cu(a.a8("cu<0>"))},
jg:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lL:function(a,b){var s=new P.cv(a,b)
s.c=a.e
return s},
l9:function(a,b,c){var s,r
if(P.jp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.Y.push(a)
try{P.ml(a,s)}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}r=P.jU(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
j4:function(a,b,c){var s,r
if(P.jp(a))return b+"..."+c
s=new P.ba(b)
$.Y.push(a)
try{r=s
r.a=P.jU(r.a,a,", ")}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jp:function(a){var s,r
for(s=$.Y.length,r=0;r<s;++r)if(a===$.Y[r])return!0
return!1},
ml:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.v(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.q()){if(j<=4){b.push(H.v(p))
return}r=H.v(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.q();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.v(p)
r=H.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jI:function(a){var s,r={}
if(P.jp(a))return"{...}"
s=new P.ba("")
try{$.Y.push(a)
s.a+="{"
r.a=!0
J.iZ(a,new P.hc(r,s))
s.a+="}"}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cu:function cu(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ix:function ix(a){this.a=a
this.c=this.b=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c_:function c_(){},
c4:function c4(){},
A:function A(){},
c5:function c5(){},
hc:function hc(a,b){this.a=a
this.b=b},
P:function P(){},
dU:function dU(){},
cC:function cC(){},
cw:function cw(){},
cN:function cN(){},
d4:function d4(){},
d7:function d7(){},
fT:function fT(){},
ib:function ib(){},
ic:function ic(){},
iD:function iD(a){this.b=0
this.c=a},
l7:function(a){if(a instanceof H.bi)return a.i(0)
return"Instance of '"+H.ci(a)+"'"},
ds:function(a,b,c){var s,r=c?J.j5(a):J.la(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
dt:function(a,b){var s,r=[]
for(s=J.ax(a);s.q();)r.push(s.gD(s))
if(b)return r
return J.j6(r)},
lf:function(a,b){var s,r,q=J.j5(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
ja:function(a){var s=a,r=s.length,q=P.j9(0,null,r)
return H.lr(q<r?s.slice(0,q):s)},
lt:function(a){return new H.h4(a,H.ld(a,!1,!0,!1,!1,!1))},
jU:function(a,b,c){var s=J.ax(b)
if(!s.q())return a
if(c.length===0){do a+=H.v(s.gD(s))
while(s.q())}else{a+=H.v(s.gD(s))
for(;s.q();)a=a+c+H.v(s.gD(s))}return a},
m2:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.m){s=$.kQ().b
s=s.test(b)}else s=!1
if(s)return b
r=C.C.eR(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lq(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
l5:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
j2:function(a){return new P.aV(1000*a)},
fW:function(a){if(typeof a=="number"||H.jn(a)||null==a)return J.fy(a)
if(typeof a=="string")return JSON.stringify(a)
return P.l7(a)},
fB:function(a){return new P.d0(a)},
j_:function(a){return new P.ag(!1,null,null,a)},
dO:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
j9:function(a,b,c){if(a>c)throw H.c(P.aC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aC(b,a,c,"end",null))
return b}return c},
jO:function(a,b){if(a<0)throw H.c(P.aC(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bg(b):e
return new P.dh(s,!0,a,c,"Index out of range")},
w:function(a){return new P.es(a)},
k_:function(a){return new P.ep(a)},
aT:function(a){return new P.d5(a)},
e:function(a){return new P.eK(a)},
jy:function(a){H.ne(a)},
W:function W(a,b){this.a=a
this.b=b},
aV:function aV(a){this.a=a},
fQ:function fQ(){},
fR:function fR(){},
D:function D(){},
d0:function d0(a){this.a=a},
ed:function ed(){},
dG:function dG(){},
ag:function ag(a,b,c,d){var _=this
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
dh:function dh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
es:function es(a){this.a=a},
ep:function ep(a){this.a=a},
e_:function e_(a){this.a=a},
d5:function d5(a){this.a=a},
dJ:function dJ(){},
cm:function cm(){},
d8:function d8(a){this.a=a},
eK:function eK(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
h:function h(){},
di:function di(){},
a4:function a4(){},
J:function J(){},
ba:function ba(a){this.a=a},
mZ:function(a){var s,r,q,p
if(t.I.b(a)){s=J.kW(a)
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
return new P.cK(r,q,p)},
mY:function(a){if(a instanceof P.cK)return{data:a.a,height:a.b,width:a.c}
return a},
aK:function(a){var s,r,q,p,o
if(a==null)return null
s=P.L(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
kh:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jn(a))return a
if(t.f.b(a))return P.kp(a)
if(t.c.b(a)){s=[]
J.iZ(a,new P.iH(s))
a=s}return a},
kp:function(a){var s={}
J.iZ(a,new P.iO(s))
return s},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
iO:function iO(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
h_:function h_(){},
h0:function h0(){},
b2:function b2(){},
dq:function dq(){},
b5:function b5(){},
dH:function dH(){},
hz:function hz(){},
e3:function e3(){},
k:function k(){},
bc:function bc(){},
ec:function ec(){},
eR:function eR(){},
eS:function eS(){},
eZ:function eZ(){},
f_:function f_(){},
fa:function fa(){},
fb:function fb(){},
fh:function fh(){},
fi:function fi(){},
fE:function fE(){},
d1:function d1(){},
fF:function fF(a){this.a=a},
d2:function d2(){},
ay:function ay(){},
dI:function dI(){},
ey:function ey(){},
bu:function bu(){},
dY:function dY(){},
f6:function f6(){},
f7:function f7(){}},W={
j0:function(){var s=document.createElement("canvas")
s.toString
return s},
fS:function(a){return"wheel"},
iw:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
k6:function(a,b,c,d){var s=W.iw(W.iw(W.iw(W.iw(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
R:function(a,b,c,d){var s=W.km(new W.iu(c),t.B)
if(s!=null&&!0)J.kT(a,b,s,!1)
return new W.eJ(a,b,s,!1)},
km:function(a,b){var s=$.af
if(s===C.e)return a
return s.cm(a,b)},
l:function l(){},
fz:function fz(){},
cZ:function cZ(){},
d_:function d_(){},
d3:function d3(){},
aR:function aR(){},
bR:function bR(){},
a9:function a9(){},
fJ:function fJ(){},
B:function B(){},
bS:function bS(){},
fK:function fK(){},
a3:function a3(){},
ai:function ai(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
bU:function bU(){},
bV:function bV(){},
da:function da(){},
fP:function fP(){},
eA:function eA(a,b){this.a=a
this.b=b},
G:function G(){},
i:function i(){},
b:function b(){},
ak:function ak(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
al:function al(){},
h3:function h3(){},
aW:function aW(){},
aX:function aX(){},
bm:function bm(){},
b1:function b1(){},
ha:function ha(){},
hr:function hr(){},
dx:function dx(){},
hs:function hs(a){this.a=a},
dy:function dy(){},
ht:function ht(a){this.a=a},
an:function an(){},
dz:function dz(){},
Z:function Z(){},
ez:function ez(a){this.a=a},
q:function q(){},
cf:function cf(){},
ao:function ao(){},
dM:function dM(){},
dR:function dR(){},
hE:function hE(a){this.a=a},
dT:function dT(){},
ad:function ad(){},
dW:function dW(){},
aq:function aq(){},
dX:function dX(){},
ar:function ar(){},
e0:function e0(){},
hM:function hM(a){this.a=a},
a7:function a7(){},
ae:function ae(){},
a0:function a0(){},
e4:function e4(){},
e5:function e5(){},
hU:function hU(){},
as:function as(){},
bb:function bb(){},
eb:function eb(){},
hY:function hY(){},
au:function au(){},
ia:function ia(){},
eu:function eu(){},
aG:function aG(){},
bA:function bA(){},
eB:function eB(){},
ct:function ct(){},
eO:function eO(){},
cx:function cx(){},
f5:function f5(){},
fc:function fc(){},
j3:function j3(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iu:function iu(a){this.a=a},
jf:function jf(a){this.$ti=a},
E:function E(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
cD:function cD(){},
cE:function cE(){},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
fd:function fd(){},
fe:function fe(){},
cG:function cG(){},
cH:function cH(){},
ff:function ff(){},
fg:function fg(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){}},K={fA:function fA(){},dg:function dg(){},aB:function aB(a){this.a=a},O:function O(a){this.a=a}},L={dZ:function dZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},ea:function ea(a,b){this.b=a
this.c=b},hW:function hW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},hZ:function hZ(a,b){this.b=a
this.c=!1
this.a=b}},O={
j1:function(){return new O.bj([])},
bj:function bj(a){this.a=a
this.c=this.b=null},
ca:function ca(a){this.a=a
this.b=null},
dw:function(a,b){return new O.c8(new V.M(0,0,0),a,b,new A.aa(!1,!1,!1))},
du:function du(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(){},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(){},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(){},
hd:function hd(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
c7:function c7(){},
he:function he(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
c8:function c8(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hg:function hg(a){this.b=a},
hh:function hh(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hi:function hi(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hP:function hP(){}},E={
k3:function(){var s=window.navigator.vendor
s.toString
if(C.c.H(s,"Google"))return C.t
s=window.navigator.userAgent
s.toString
if(C.c.H(s,"Firefox"))return C.i
s=window.navigator.appVersion
s.toString
if(C.c.H(s,"Trident")||C.c.H(s,"Edge"))return C.j
s=window.navigator.appName
s.toString
if(C.c.H(s,"Microsoft"))return C.j
return C.u},
k4:function(){var s=window.navigator.appVersion
s.toString
if(C.c.H(s,"Win"))return C.I
if(C.c.H(s,"Mac"))return C.o
if(C.c.H(s,"Linux"))return C.J
return C.K},
lv:function(a,b){var s
Date.now()
s=new E.hA(a,new P.W(Date.now(),!1),new P.W(Date.now(),!1),new O.ca([]),new O.ca([]),new O.ca([]),[null],P.L(t.N,t.k))
s.df(a,b)
return s},
lB:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.jV(a,!0,!0,!0,!1)
s=W.j0()
r=s.style
r.width="100%"
r.height="100%"
J.kV(a).n(0,s)
return E.jV(s,!0,!0,!0,!1)},
jV:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.s.a(C.n.bL(a,"webgl2",P.le(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.e("Failed to get the rendering context for WebGL."))
s=E.lv(l,a)
m=H.iG(l.getParameter(3379))
H.iG(l.getParameter(34076))
r=[]
q=$.fU
p=new X.et(a,r,(q==null?$.fU=new E.eH(E.k3(),E.k4()):q).a===C.i?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.R(o,"contextmenu",p.gdS(),!1))
r.push(W.R(a,"focus",p.gdY(),!1))
r.push(W.R(a,"blur",p.gdM(),!1))
r.push(W.R(o,"keyup",p.ge1(),!1))
r.push(W.R(o,"keydown",p.ge_(),!1))
r.push(W.R(a,"mousedown",p.ge5(),!1))
r.push(W.R(a,"mouseup",p.ge9(),!1))
r.push(W.R(a,n,p.ge7(),!1))
W.fS(a)
W.fS(a)
r.push(W.R(a,W.fS(a),p.geb(),!1))
r.push(W.R(o,n,p.gdU(),!1))
r.push(W.R(o,"mouseup",p.gdW(),!1))
r.push(W.R(o,"pointerlockchange",p.ged(),!1))
r.push(W.R(a,"touchstart",p.geo(),!1))
r.push(W.R(a,"touchend",p.gek(),!1))
r.push(W.R(a,"touchmove",p.gem(),!1))
m=new E.e8(a,s,new T.hR(l,m),new P.W(Date.now(),!1))
m.c9()
return m},
fG:function fG(){},
bk:function bk(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bh:function bh(a){this.b=a},
bs:function bs(a){this.b=a},
eH:function eH(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c,d,e,f,g,h){var _=this
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
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
e8:function e8(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.cx=!1
_.cy=d
_.db=0},
hT:function hT(a){this.a=a}},Z={
je:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cP(c)),35044)
a.bindBuffer(b,null)
return new Z.ev(b,s)},
a8:function(a){return new Z.aF(a)},
ev:function ev(a,b){this.a=a
this.b=b},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ip:function ip(a){this.a=a},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a){this.a=a}},D={
ab:function(){return new D.bl()},
fI:function fI(){},
bl:function bl(){var _=this
_.c=_.b=_.a=null
_.d=0},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
X:function X(){},
aY:function aY(){},
aZ:function aZ(){},
C:function C(a,b,c){this.c=a
this.d=b
this.e=c},
bT:function bT(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
c3:function c3(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={bQ:function bQ(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},h6:function h6(a){this.d=a},hb:function hb(a,b,c,d){var _=this
_.a=a
_.r=0
_.x=b
_.y=c
_.z=d},bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},hu:function hu(a,b,c,d,e){var _=this
_.a=a
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},hX:function hX(a,b,c,d,e){var _=this
_.a=a
_.e=b
_.f=c
_.r=d
_.x=e},et:function et(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
l8:function(a){var s=V.bF(1),r=$.jP
if(r==null){r=V.lu(0,0,1,1)
$.jP=r}return new X.h2(new V.aS(0,0,0,s),r)},
h2:function h2(a,b){this.a=a
this.r=b
this.x=null},
dK:function dK(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
hN:function hN(){}},V={
jv:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
bF:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
jz:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.d5(a-b,s)
return(a<0?a+s:a)+b},
r:function(a,b,c){$.z().toString
return C.c.a1(C.d.bJ(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bI:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.z().toString
n=C.c.a1(C.d.bJ(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.c.a1(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
jx:function(a){return C.d.ft(Math.pow(2,C.d.bz(Math.log(a)/Math.log(2))))},
cb:function(){var s=$.jL
return s==null?$.jL=V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jK:function(a,b,c){var s=c.I(),r=b.aM(s).I(),q=s.aM(r),p=new V.y(a.a,a.b,a.c)
return V.aA(r.a,q.a,s.a,r.aC(0).aO(p),r.b,q.b,s.b,q.aC(0).aO(p),r.c,q.c,s.c,s.aC(0).aO(p),0,0,0,1)},
jM:function(){var s=$.ap
return s==null?$.ap=new V.a_(0,0,0):s},
lu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dP(a,b,c,d)},
cp:function(){var s=$.k1
return s==null?$.k1=new V.y(0,0,0):s},
lD:function(){var s=$.id
return s==null?$.id=new V.y(-1,0,0):s},
jd:function(){var s=$.ie
return s==null?$.ie=new V.y(0,1,0):s},
lE:function(){var s=$.ig
return s==null?$.ig=new V.y(0,0,1):s},
lC:function(a,b,c){return new V.y(a,b,c)},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(){},
c9:function c9(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bp:function bp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function(a){P.jX(C.D,new V.iX(a))},
lx:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.R(n,"scroll",new V.hJ(s),!1)
return new V.hH(o)},
iX:function iX(a){this.a=a},
hH:function hH(a){this.a=a
this.b=null},
hJ:function hJ(a){this.a=a},
hI:function hI(a){this.a=a}},U={
jE:function(a){var s=V.cb(),r=new U.d6(s)
if(!s.l(0,a))r.a=a
return r},
d6:function d6(a){this.a=a
this.b=null},
hv:function hv(){},
dQ:function dQ(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null}},M={db:function db(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
lh:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.ga6(a5)+a6.ga6(a6)+a7.ga6(a7)+a8.ga6(a8)+a9.ga6(a9)+b0.ga6(b0)+b1.ga6(b1)+b2.ga6(b2)+b3.ga6(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
m=b1.a||b1.b||!1||b2.a||b2.b||!1
l=s>0
if(!(a6.a||a6.b||!1))if(!(a7.a||a7.b||!1)){s=a8.a||a8.b||!1||a9.a||a9.b||!1
k=s}else k=!0
else k=!0
s=!a9.a
j=!s||a9.b||!1||l||o>0||m
if(!(a7.a||a7.b||!1))i=a8.a||a8.b||!1||!s||a9.b||!1
else i=!0
if(!i)h=b0.a||b0.b||!1||m
else h=!0
g=b0.a||b0.b||!1
f=a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b
e=a4>0
d=h||g||j||!1
c=l&&i
a0=a0&&f
b=$.aO()
if(h){s=$.aN()
b=new Z.aF(b.a|s.a)}if(g)b=new Z.aF(b.a|$.aM().a)
if(f)b=new Z.aF(b.a|$.aP().a)
if(e)b=new Z.aF(b.a|$.aL().a)
return new A.hf(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
iK:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iL:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.iK(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fv(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
mr:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iK(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.b){r=s+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
mn:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iL(b,r,"ambient")
b.a+="\n"},
mp:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iL(b,r,"diffuse")
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
ms:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iL(b,r,"invDiffuse")
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
my:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iL(b,r,"specular")
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
mu:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f
q=r.b
if(q){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=r.a
if(!(r||q||!1)||r)s=b.a=s+"   return normalize(normalVec);\n"
else{s=(q?b.a=s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
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
mw:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iK(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
mx:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iK(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
mo:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fv(r)
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
s=c.a+="   return "+C.a.m(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
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
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.m(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.m(o," + ")+");\n"
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
mq:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fv(r)
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
p=a.b
if(p.a||p.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(p.a||p.b||!1)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.m(l," + ")+");\n"}else c.a+="   highLight = "+C.a.m(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.m(m," + ")+");\n"
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
mv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fv(r)
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
p=c.a+="   return "+C.a.m(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(p.a||p.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.m(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.m(j," + ")+");\n"
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
mz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fv(r)
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
if(m){s=$.fU
if(s==null)s=$.fU=new E.eH(E.k3(),E.k4())
p=c.a
if(s.b===C.o){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s=c.a+="   return "+C.a.m(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(s.a||s.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.m(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.m(h," + ")+");\n"
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
mt:function(a,b){var s,r
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
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.m(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
mA:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.ba(""),j=""+"precision mediump float;\n"
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
A.mr(a,k)
A.mn(a,k)
A.mp(a,k)
A.ms(a,k)
A.my(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.mw(a,k)
A.mx(a,k)}A.mu(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
k.a=q}p=p.b
if(p)q=k.a=q+"uniform sampler2D alphaTxt;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!(o||p||!1))q=k.a=q+"   return 1.0;\n"
else if(p||!1){if(o){if(p){q+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
k.a=q}}else if(p){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
k.a=q}q+="   if (a <= 0.000001) discard;\n"
k.a=q
q+="   return a;\n"
k.a=q}else if(o){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mo(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mq(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mv(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mz(a,p[n],k)
A.mt(a,k)}p=k.a+="// === Main ===\n"
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
j=a.b
if(j.a||j.b||!1)k.a+="   setAmbientColor();\n"
j=a.c
if(j.a||j.b||!1)k.a+="   setDiffuseColor();\n"
j=a.d
if(j.a||j.b||!1)k.a+="   setInvDiffuseColor();\n"
j=a.e
if(j.a||j.b||!1)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aG(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aG(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aG(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.c.aG(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.m(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
mB:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.at+"];\n"
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
mD:function(a,b){var s
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
mC:function(a,b){var s
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
mF:function(a,b){var s,r
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
mG:function(a,b){var s,r
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
mE:function(a,b){var s
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
mH:function(a,b){var s
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
fv:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.c.aG(a,1)},
jc:function(a,b,c,d,e){var s=new A.i3([],a,c,e)
s.f=d
s.e=P.ds(d,0,!1)
return s},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.fL=_.cF=_.cE=_.fK=_.cD=_.cC=_.cB=_.fJ=_.cA=_.cz=_.cw=_.fI=_.cv=_.cu=_.fH=_.ct=_.cs=_.cr=_.au=_.at=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.br=c
_.bs=d
_.bt=e
_.bu=f
_.bv=g
_.bw=h
_.bx=i
_.by=j
_.fO=_.fN=_.fM=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
aQ:function aQ(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.at=b5
_.au=b6
_.cr=b7},
eh:function eh(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ei:function ei(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
el:function el(a,b,c,d,e,f,g,h,i,j){var _=this
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
eo:function eo(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ck:function ck(){},
i2:function i2(){},
i8:function i8(a){this.a=a},
co:function co(a,b,c){this.a=a
this.c=b
this.d=c},
i5:function i5(a,b,c){this.a=a
this.c=b
this.d=c},
i6:function i6(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){this.a=a
this.c=b
this.d=c},
i3:function i3(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ee:function ee(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
ef:function ef(a,b,c){this.a=a
this.c=b
this.d=c},
eg:function eg(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
em:function em(a,b,c){this.a=a
this.c=b
this.d=c},
en:function en(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iI:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cO:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.y(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.y(s+a4,r+a2,q+a3)
o=new V.y(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.y(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.iI(h)
j=F.iI(g)
a.bD(F.nh(a0,a1,new F.iF(i,F.iI(f),F.iI(e),j,k,c),b))},
nh:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.jT()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.u(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.cg(new V.aS(n,0,0,1),new V.a5(p,1))
c.$3(m,p,0)
r.push(m.bp(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.u(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cg(new V.aS(h,g,f,1),new V.a5(p,k))
c.$3(m,p,l)
r.push(m.bp(d))}}s.gJ().eJ(a+1,b+1,r)
return s},
jT:function(){return new F.hF()},
k2:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cq()
h=$.kN()
s=$.aO()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aN().a)!==0)q.r=e
if((r&$.aM().a)!==0)q.x=b
if((r&$.aP().a)!==0)q.y=f
if((r&$.bf().a)!==0)q.z=g
if((r&$.kO().a)!==0)q.Q=c
if((r&$.bL().a)!==0)q.ch=i
if((r&$.aL().a)!==0)q.cx=a
return q},
iF:function iF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aj:function aj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fZ:function fZ(){},
hK:function hK(){},
h7:function h7(){this.b=this.a=null},
h8:function h8(){},
i1:function i1(){},
hy:function hy(){this.a=null},
hF:function hF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cl:function cl(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
cq:function cq(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
u:function u(a,b){this.a=a
this.b=!1
this.c=b},
bz:function bz(a,b,c){this.b=a
this.c=b
this.d=c},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
aE:function aE(a,b){this.b=a
this.c=b},
ik:function ik(){},
ij:function ij(){},
il:function il(){},
hw:function hw(){},
cr:function cr(a){this.b=a}},T={hQ:function hQ(){},cn:function cn(){},e6:function e6(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.f=null},e7:function e7(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},hR:function hR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},hS:function hS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
nc:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.lx("Test 039"),c=W.j0()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c).toString
d.ci(["Test of an animated texture on a square."])
d.ci(["\xab[Back to Tests|../]"])
s=document.getElementById(f)
if(s==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
r=E.lB(s,!0,!0,!0,!1)
d=O.j1()
q=new E.bk(d)
d.b3(q.gf4(),q.gf7())
q.sbN(0,e)
q.saQ(e)
p=F.jT()
F.cO(p,e,e,1,1,1,0,0,1)
F.cO(p,e,e,1,1,0,1,0,3)
F.cO(p,e,e,1,1,0,0,1,2)
F.cO(p,e,e,1,1,-1,0,0,0)
F.cO(p,e,e,1,1,0,-1,0,0)
F.cO(p,e,e,1,1,0,0,-1,3)
p.as()
p.f3(new F.ij(),new F.hw())
q.sbN(0,p)
d=new U.dQ(V.cb())
d.sd2(0)
d.scT(0,0)
d.scY(0)
o=d.d
$.z().toString
if(!(Math.abs(o-0.1)<1e-9)){d.d=0.1
d.aq(new D.C("deltaYaw",o,0.1))}o=d.e
$.z().toString
if(!(Math.abs(o-0.21)<1e-9)){d.e=0.21
d.aq(new D.C("deltaPitch",o,0.21))}o=d.f
$.z().toString
if(!(Math.abs(o-0.32)<1e-9)){d.f=0.32
d.aq(new D.C("deltaRoll",o,0.32))}q.saQ(d)
d=r.f
d=P.dt([d.ax("../resources/diceColor/posx.png"),d.ax("../resources/diceColor/posz.png"),d.ax("../resources/diceColor/negx.png"),d.ax("../resources/diceColor/negy.png"),d.ax("../resources/diceColor/posy.png"),d.ax("../resources/diceColor/negz.png")],!0)
n=new T.e6(d)
P.jX(P.j2(500),new N.iV(n))
d=O.j1()
m=new O.du(d)
d.b3(m.gdI(),m.gdK())
d=m.gcM()
d.gt().n(0,m.gc7())
d.gcL().n(0,m.gaI())
d=m.gcM()
l=V.jd()
o=U.jE(V.jK(V.jM(),l,new V.y(1,-1,-3)))
k=new V.M(1,1,1)
j=new D.bT(new V.M(1,1,1),V.lE(),V.jd(),V.lD())
i=j.a
j.a=o
o.gt().n(0,j.gdg())
j.ac(new D.C("mover",i,j.a))
if(!j.b.l(0,k)){i=j.b
j.b=k
j.ac(new D.C("color",i,k))}d.n(0,j)
m.gbk().saL(0,new V.M(V.bF(0.2),V.bF(0.2),V.bF(0.2)))
m.gbq().saL(0,new V.M(V.bF(0.8),V.bF(0.8),V.bF(0.8)))
m.gbk().sd_(n)
m.gbq().sd_(n)
d=O.j1()
o=new M.db(d)
d.b3(o.gdO(),o.gdQ())
h=X.l8(e)
g=new X.dK(1.0471975511965976,0.1)
g.saQ(e)
k=g.c
$.z().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){g.c=1.0471975511965976
g.ao(new D.C("fov",k,1.0471975511965976))}k=g.d
$.z().toString
if(!(Math.abs(k-0.1)<1e-9)){g.d=0.1
g.ao(new D.C("near",k,0.1))}k=g.e
$.z().toString
if(!(Math.abs(k-2000)<1e-9)){g.e=2000
g.ao(new D.C("far",k,2000))}k=o.b
if(k!==g){if(k!=null)k.gt().E(0,o.ga7())
i=o.b
o.b=g
g.gt().n(0,o.ga7())
o.ad(new D.C("camera",i,o.b))}k=o.c
if(k!==h){if(k!=null)k.gt().E(0,o.ga7())
i=o.c
o.c=h
h.gt().n(0,o.ga7())
o.ad(new D.C("target",i,o.c))}o.scZ(e)
o.scZ(m)
d.n(0,q)
d=o.b
if(d!=null)d.saQ(U.jE(V.aA(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
d=r.d
if(d!==o){if(d!=null)d.gt().E(0,r.gbS())
r.d=o
o.gt().n(0,r.gbS())
r.bT()}V.nf(r)},
iV:function iV(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j7.prototype={}
J.a.prototype={
l:function(a,b){return a===b},
gG:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.ci(a)+"'"}}
J.dj.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ibd:1}
J.c1.prototype={
l:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.b0.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.dL.prototype={}
J.bw.prototype={}
J.am.prototype={
i:function(a){var s=a[$.kB()]
if(s==null)return this.dc(a)
return"JavaScript function for "+J.fy(s)}}
J.ac.prototype={
bG:function(a,b){if(!!a.fixed$length)H.f(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dO(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var s
if(!!a.fixed$length)H.f(P.w("remove"))
for(s=0;s<a.length;++s)if(J.I(a[s],b)){a.splice(s,1)
return!0}return!1},
eH:function(a,b){if(!!a.fixed$length)H.f(P.w("addAll"))
this.dn(a,b)
return},
dn:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aT(a))
for(s=0;s<r;++s)a.push(b[s])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aT(a))}},
m:function(a,b){var s,r,q=a.length,p=P.ds(q,"",!1)
for(s=0;s<a.length;++s){r=H.v(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
f1:function(a){return this.m(a,"")},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
geZ:function(a){if(a.length>0)return a[0]
throw H.c(H.jG())},
gbA:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jG())},
aE:function(a,b){if(!!a.immutable$list)H.f(P.w("sort"))
H.lA(a,b==null?J.me():b)},
d8:function(a){return this.aE(a,null)},
H:function(a,b){var s
for(s=0;s<a.length;++s)if(J.I(a[s],b))return!0
return!1},
i:function(a){return P.j4(a,"[","]")},
gK:function(a){return new J.a2(a,a.length)},
gG:function(a){return H.ch(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.w("set length"))
if(b>a.length)H.kf(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bH(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bH(a,b))
a[b]=c},
$ip:1,
$ij:1,
$ih:1,
$in:1}
J.dl.prototype={}
J.a2.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bn.prototype={
Z:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb_(b)
if(this.gb_(a)===s)return 0
if(this.gb_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb_:function(a){return a===0?1/a<0:a<0},
ft:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.w(""+a+".toInt()"))},
bz:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
bJ:function(a,b){var s
if(b>20)throw H.c(P.aC(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb_(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
d5:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dd:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cc(a,b)},
U:function(a,b){return(a|0)===a?a/b|0:this.cc(a,b)},
cc:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.v(s)+": "+H.v(a)+" ~/ "+b))},
aY:function(a,b){var s
if(a>0)s=this.eF(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eF:function(a,b){return b>31?0:a>>>b},
$iT:1,
$iU:1}
J.c0.prototype={$im:1}
J.dk.prototype={}
J.b_.prototype={
bo:function(a,b){if(b<0)throw H.c(H.bH(a,b))
if(b>=a.length)H.f(H.bH(a,b))
return a.charCodeAt(b)},
bY:function(a,b){if(b>=a.length)throw H.c(H.bH(a,b))
return a.charCodeAt(b)},
O:function(a,b){return a+b},
bP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dO(b,null))
if(b>c)throw H.c(P.dO(b,null))
if(c>a.length)throw H.c(P.dO(c,null))
return a.substring(b,c)},
aG:function(a,b){return this.bP(a,b,null)},
X:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.B)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a1:function(a,b){var s=b-a.length
if(s<=0)return a
return this.X(" ",s)+a},
eP:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aC(c,0,s,null,null))
return H.kw(a,b,c)},
H:function(a,b){return this.eP(a,b,0)},
Z:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gG:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$ip:1,
$ix:1}
H.dp.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.K.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bo(this.a,b)}}
H.j.prototype={}
H.bo.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=J.cV(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.aT(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.w(q,s);++r.c
return!0}}
H.b3.prototype={
gK:function(a){return new H.c6(J.ax(this.a),this.b)},
gj:function(a){return J.bg(this.a)},
w:function(a,b){return this.b.$1(J.iY(this.a,b))}}
H.bW.prototype={$ij:1}
H.c6.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.S(this).Q[1].a(this.a)}}
H.cs.prototype={
gK:function(a){return new H.ew(J.ax(this.a),this.b)}}
H.ew.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.bX.prototype={}
H.er.prototype={
k:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bx.prototype={}
H.i_.prototype={
a0:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cg.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dm.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eq.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hx.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f8.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bi.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kz(r==null?"unknown":r)+"'"},
gfA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hO.prototype={}
H.hL.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kz(s)+"'"}}
H.bM.prototype={
l:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bM))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.ch(this.a)
else s=typeof r!=="object"?J.fx(r):H.ch(r)
return(s^H.ch(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.v(this.d)+"' of "+("Instance of '"+H.ci(s)+"'")}}
H.dS.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.N.prototype={
gj:function(a){return this.a},
gaj:function(a){return new H.az(this)},
gfz:function(a){return H.lg(new H.az(this),new H.h5(this))},
eQ:function(a,b){var s=this.b
if(s==null)return!1
return this.dz(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aX(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aX(p,b)
q=r==null?n:r.b
return q}else return o.f0(b)},
f0:function(a){var s,r,q=this.d
if(q==null)return null
s=this.c2(q,J.fx(a)&0x3ffffff)
r=this.cG(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bW(s==null?m.b=m.bc():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bW(r==null?m.c=m.bc():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bc()
p=J.fx(b)&0x3ffffff
o=m.c2(q,p)
if(o==null)m.bh(q,p,[m.bd(b,c)])
else{n=m.cG(o,b)
if(n>=0)o[n].b=c
else o.push(m.bd(b,c))}}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aT(s))
r=r.c}},
bW:function(a,b,c){var s=this.aX(a,b)
if(s==null)this.bh(a,b,this.bd(b,c))
else s.b=c},
bd:function(a,b){var s=this,r=new H.h9(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
cG:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.I(a[r].a,b))return r
return-1},
i:function(a){return P.jI(this)},
aX:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
bh:function(a,b,c){a[b]=c},
dC:function(a,b){delete a[b]},
dz:function(a,b){return this.aX(a,b)!=null},
bc:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bh(r,s,r)
this.dC(r,s)
return r}}
H.h5.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).a8("2(1)")}}
H.h9.prototype={}
H.az.prototype={
gj:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.dr(s,s.r)
r.c=s.e
return r}}
H.dr.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aT(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iR.prototype={
$1:function(a){return this.a(a)},
$S:20}
H.iS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:22}
H.iT.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.h4.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cd.prototype={}
H.br.prototype={
gj:function(a){return a.length},
$ip:1,
$it:1}
H.b4.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]},
k:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$in:1}
H.cc.prototype={
k:function(a,b,c){H.av(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$in:1}
H.dA.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.dB.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.dC.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.dD.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.dE.prototype={
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.ce.prototype={
gj:function(a){return a.length},
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){H.av(b,a,a.length)
return a[b]}}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.a6.prototype={
a8:function(a){return H.fk(v.typeUniverse,this,a)},
bX:function(a){return H.m0(v.typeUniverse,this,a)}}
H.eN.prototype={}
H.eI.prototype={
i:function(a){return this.a}}
H.cJ.prototype={}
P.ir.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:27}
P.iq.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:33}
P.is.prototype={
$0:function(){this.a.$0()},
$S:9}
P.it.prototype={
$0:function(){this.a.$0()},
$S:9}
P.cI.prototype={
dj:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bG(new P.iC(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dk:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bG(new P.iB(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$ihV:1}
P.iC.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.iB.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.dd(s,o)}q.c=p
r.d.$1(q)},
$S:9}
P.bB.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.v(this.a)+")"}}
P.bC.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bB){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.ax(s)
if(o instanceof P.bC){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cF.prototype={
gK:function(a){return new P.bC(this.a())}}
P.ex.prototype={}
P.e1.prototype={}
P.e2.prototype={}
P.iE.prototype={}
P.iM.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.iy.prototype={
fn:function(a){var s,r,q,p=null
try{if(C.e===$.af){a.$0()
return}P.mJ(p,p,this,a)}catch(q){s=H.fw(q)
r=H.jt(q)
P.kl(p,p,this,s,r)}},
fo:function(a,b){var s,r,q,p=null
try{if(C.e===$.af){a.$1(b)
return}P.mK(p,p,this,a,b)}catch(q){s=H.fw(q)
r=H.jt(q)
P.kl(p,p,this,s,r)}},
fp:function(a,b){return this.fo(a,b,t.z)},
eL:function(a){return new P.iz(this,a)},
cm:function(a,b){return new P.iA(this,a,b)}}
P.iz.prototype={
$0:function(){return this.a.fn(this.b)},
$S:1}
P.iA.prototype={
$1:function(a){return this.a.fp(this.b,a)},
$S:function(){return this.c.a8("~(0)")}}
P.cu.prototype={
gK:function(a){var s=new P.cv(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
H:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dv(b)
return r}},
dv:function(a){var s=this.d
if(s==null)return!1
return this.ba(s[this.b7(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bZ(s==null?q.b=P.jg():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bZ(r==null?q.c=P.jg():r,b)}else return q.dm(0,b)},
dm:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jg()
s=q.b7(b)
r=p[s]
if(r==null)p[s]=[q.b6(b)]
else{if(q.ba(r,b)>=0)return!1
r.push(q.b6(b))}return!0},
E:function(a,b){if((b&1073741823)===b)return this.er(this.c,b)
else return this.eq(0,b)},
eq:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.b7(b)
r=n[s]
q=o.ba(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.ce(p)
return!0},
bZ:function(a,b){if(a[b]!=null)return!1
a[b]=this.b6(b)
return!0},
er:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.ce(s)
delete a[b]
return!0},
c4:function(){this.r=this.r+1&1073741823},
b6:function(a){var s,r=this,q=new P.ix(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c4()
return q},
ce:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c4()},
b7:function(a){return J.fx(a)&1073741823},
ba:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.I(a[r].a,b))return r
return-1}}
P.ix.prototype={}
P.cv.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aT(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c_.prototype={}
P.c4.prototype={$ij:1,$ih:1,$in:1}
P.A.prototype={
gK:function(a){return new H.bo(a,this.gj(a))},
w:function(a,b){return this.h(a,b)},
C:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.aT(a))}},
gcI:function(a){return this.gj(a)===0},
fv:function(a,b){var s,r,q,p,o=this
if(o.gcI(a)){s=J.j5(0)
return s}r=o.h(a,0)
q=P.ds(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
fu:function(a){return this.fv(a,!0)},
i:function(a){return P.j4(a,"[","]")}}
P.c5.prototype={}
P.hc.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.v(a)
r.a=s+": "
r.a+=H.v(b)},
$S:24}
P.P.prototype={
C:function(a,b){var s,r,q
for(s=J.ax(this.gaj(a)),r=H.bK(a).a8("P.V");s.q();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.bg(this.gaj(a))},
i:function(a){return P.jI(a)},
$iQ:1}
P.dU.prototype={
i:function(a){return P.j4(this,"{","}")},
w:function(a,b){var s,r,q,p,o="index"
H.mW(b,o,t.S)
P.jO(b,o)
for(s=P.lL(this,this.r),r=H.S(s).c,q=0;s.q();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.F(b,this,o,null,q))}}
P.cC.prototype={$ij:1,$ih:1}
P.cw.prototype={}
P.cN.prototype={}
P.d4.prototype={}
P.d7.prototype={}
P.fT.prototype={}
P.ib.prototype={}
P.ic.prototype={
eR:function(a){var s,r,q,p=P.j9(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.iD(r)
if(q.dE(a,0,p)!==p){C.c.bo(a,p-1)
q.bj()}return new Uint8Array(r.subarray(0,H.m6(0,q.b,s)))}}
P.iD.prototype={
bj:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
eG:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bj()
return!1}},
dE:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.c.bo(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.c.bY(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.eG(p,C.c.bY(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bj()}else if(p<=2047){o=l.b
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
P.W.prototype={
l:function(a,b){if(b==null)return!1
return b instanceof P.W&&this.a===b.a&&!0},
Z:function(a,b){return C.b.Z(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.b.aY(s,30))&1073741823},
i:function(a){var s=this,r=P.l5(H.lp(s)),q=P.d9(H.ln(s)),p=P.d9(H.lj(s)),o=P.d9(H.lk(s)),n=P.d9(H.lm(s)),m=P.d9(H.lo(s)),l=P.l6(H.ll(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.aV.prototype={
l:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a},
gG:function(a){return C.b.gG(this.a)},
Z:function(a,b){return C.b.Z(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fR(),o=this.a
if(o<0)return"-"+new P.aV(0-o).i(0)
s=p.$1(C.b.U(o,6e7)%60)
r=p.$1(C.b.U(o,1e6)%60)
q=new P.fQ().$1(o%1e6)
return""+C.b.U(o,36e8)+":"+s+":"+r+"."+q}}
P.fQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.D.prototype={}
P.d0.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fW(s)
return"Assertion failed"}}
P.ed.prototype={}
P.dG.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gb9:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb8:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gb9()+o+m
if(!q.a)return l
s=q.gb8()
r=P.fW(q.b)
return l+s+": "+r}}
P.cj.prototype={
gb9:function(){return"RangeError"},
gb8:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.v(q):""
else if(q==null)s=": Not greater than or equal to "+H.v(r)
else if(q>r)s=": Not in inclusive range "+H.v(r)+".."+H.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.v(r)
return s}}
P.dh.prototype={
gb9:function(){return"RangeError"},
gb8:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.es.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ep.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.e_.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d5.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fW(s)+"."}}
P.dJ.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cm.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.d8.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eK.prototype={
i:function(a){return"Exception: "+this.a}}
P.h1.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.c.bP(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gK(this)
for(s=0;r.q();)++s
return s},
w:function(a,b){var s,r,q
P.jO(b,"index")
for(s=this.gK(this),r=0;s.q();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.l9(this,"(",")")}}
P.di.prototype={}
P.a4.prototype={
gG:function(a){return P.J.prototype.gG.call(C.F,this)},
i:function(a){return"null"}}
P.J.prototype={constructor:P.J,$iJ:1,
l:function(a,b){return this===b},
gG:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.ci(this)+"'"},
toString:function(){return this.i(this)}}
P.ba.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fz.prototype={
gj:function(a){return a.length}}
W.cZ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.d_.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.d3.prototype={}
W.aR.prototype={
bL:function(a,b,c){if(c!=null)return a.getContext(b,P.kp(c))
return a.getContext(b)},
d4:function(a,b){return this.bL(a,b,null)},
$iaR:1}
W.bR.prototype={$ibR:1}
W.a9.prototype={
gj:function(a){return a.length}}
W.fJ.prototype={
gj:function(a){return a.length}}
W.B.prototype={$iB:1}
W.bS.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fK.prototype={}
W.a3.prototype={}
W.ai.prototype={}
W.fL.prototype={
gj:function(a){return a.length}}
W.fM.prototype={
gj:function(a){return a.length}}
W.fN.prototype={
gj:function(a){return a.length}}
W.fO.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bU.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.bV.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
return r+H.v(s)+") "+H.v(this.gaB(a))+" x "+H.v(this.gaw(a))},
l:function(a,b){var s,r
if(b==null)return!1
if(t.J.b(b)){s=a.left
s.toString
r=J.bJ(b)
if(s===r.gcK(b)){s=a.top
s.toString
s=s===r.gd1(b)&&this.gaB(a)===r.gaB(b)&&this.gaw(a)===r.gaw(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.k6(r,C.d.gG(s),C.d.gG(this.gaB(a)),C.d.gG(this.gaw(a)))},
gc3:function(a){return a.height},
gaw:function(a){var s=this.gc3(a)
s.toString
return s},
gcK:function(a){var s=a.left
s.toString
return s},
gd1:function(a){var s=a.top
s.toString
return s},
gcf:function(a){return a.width},
gaB:function(a){var s=this.gcf(a)
s.toString
return s},
$iaD:1}
W.da.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.fP.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eA.prototype={
gcI:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gK:function(a){var s=this.fu(this)
return new J.a2(s,s.length)}}
W.G.prototype={
gcn:function(a){var s=a.children
s.toString
return new W.eA(a,s)},
i:function(a){var s=a.localName
s.toString
return s},
$iG:1}
W.i.prototype={$ii:1}
W.b.prototype={
eI:function(a,b,c,d){if(c!=null)this.dq(a,b,c,!1)},
dq:function(a,b,c,d){return a.addEventListener(b,H.bG(c,1),!1)},
$ib:1}
W.ak.prototype={$iak:1}
W.dc.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.dd.prototype={
gj:function(a){return a.length}}
W.df.prototype={
gj:function(a){return a.length}}
W.al.prototype={$ial:1}
W.h3.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aW.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.aX.prototype={
gco:function(a){var s=a.data
s.toString
return s},
$iaX:1}
W.bm.prototype={$ibm:1}
W.b1.prototype={$ib1:1}
W.ha.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hr.prototype={
gj:function(a){return a.length}}
W.dx.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aK(s.value[1]))}},
gaj:function(a){var s=[]
this.C(a,new W.hs(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.hs.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dy.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aK(s.value[1]))}},
gaj:function(a){var s=[]
this.C(a,new W.ht(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.ht.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.an.prototype={$ian:1}
W.dz.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.Z.prototype={$iZ:1}
W.ez.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gK:function(a){var s=this.a.childNodes
return new W.bY(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.q.prototype={
fl:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.kS(s,b,a)}catch(q){H.fw(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.da(a):s},
eu:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iq:1}
W.cf.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.ao.prototype={
gj:function(a){return a.length},
$iao:1}
W.dM.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.dR.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aK(s.value[1]))}},
gaj:function(a){var s=[]
this.C(a,new W.hE(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.hE.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dT.prototype={
gj:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.dW.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.aq.prototype={$iaq:1}
W.dX.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.ar.prototype={
gj:function(a){return a.length},
$iar:1}
W.e0.prototype={
h:function(a,b){return a.getItem(H.m4(b))},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaj:function(a){var s=[]
this.C(a,new W.hM(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iQ:1}
W.hM.prototype={
$2:function(a,b){return this.a.push(a)},
$S:32}
W.a7.prototype={$ia7:1}
W.ae.prototype={$iae:1}
W.a0.prototype={$ia0:1}
W.e4.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.e5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.hU.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.as.prototype={$ias:1}
W.bb.prototype={$ibb:1}
W.eb.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.hY.prototype={
gj:function(a){return a.length}}
W.au.prototype={}
W.ia.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eu.prototype={
gj:function(a){return a.length}}
W.aG.prototype={
geV:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.w("deltaY is not supported"))},
geU:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.w("deltaX is not supported"))},
$iaG:1}
W.bA.prototype={
ev:function(a,b){var s=a.requestAnimationFrame(H.bG(b,1))
s.toString
return s},
dD:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eB.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.ct.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
s=r+H.v(s)+") "
r=a.width
r.toString
r=s+H.v(r)+" x "
s=a.height
s.toString
return r+H.v(s)},
l:function(a,b){var s,r
if(b==null)return!1
if(t.J.b(b)){s=a.left
s.toString
r=J.bJ(b)
if(s===r.gcK(b)){s=a.top
s.toString
if(s===r.gd1(b)){s=a.width
s.toString
if(s===r.gaB(b)){s=a.height
s.toString
r=s===r.gaw(b)
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
return W.k6(p,s,r,C.d.gG(q))},
gc3:function(a){return a.height},
gaw:function(a){var s=a.height
s.toString
return s},
gcf:function(a){return a.width},
gaB:function(a){var s=a.width
s.toString
return s}}
W.eO.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.cx.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.f5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.fc.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ij:1,
$it:1,
$ih:1,
$in:1}
W.j3.prototype={}
W.eJ.prototype={}
W.iu.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.jf.prototype={}
W.E.prototype={
gK:function(a){return new W.bY(a,this.gj(a))}}
W.bY.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kR(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.S(this).c.a(this.d)}}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f9.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
P.cK.prototype={$iaX:1,
gco:function(a){return this.a}}
P.iH.prototype={
$1:function(a){this.a.push(P.kh(a))},
$S:39}
P.iO.prototype={
$2:function(a,b){this.a[a]=P.kh(b)},
$S:19}
P.de.prototype={
gaJ:function(){return new H.b3(new H.cs(this.b,new P.h_()),new P.h0())},
C:function(a,b){C.a.C(P.dt(this.gaJ(),!1),b)},
k:function(a,b,c){var s=this.gaJ()
J.kX(s.b.$1(J.iY(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.bg(this.gaJ().a)},
h:function(a,b){var s=this.gaJ()
return s.b.$1(J.iY(s.a,b))},
gK:function(a){var s=P.dt(this.gaJ(),!1)
return new J.a2(s,s.length)}}
P.h_.prototype={
$1:function(a){return t.h.b(a)},
$S:40}
P.h0.prototype={
$1:function(a){return t.h.a(a)},
$S:21}
P.b2.prototype={$ib2:1}
P.dq.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$in:1}
P.b5.prototype={$ib5:1}
P.dH.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$in:1}
P.hz.prototype={
gj:function(a){return a.length}}
P.e3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$in:1}
P.k.prototype={
gcn:function(a){return new P.de(a,new W.ez(a))}}
P.bc.prototype={$ibc:1}
P.ec.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$in:1}
P.eR.prototype={}
P.eS.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.fE.prototype={
gj:function(a){return a.length}}
P.d1.prototype={
h:function(a,b){return P.aK(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aK(s.value[1]))}},
gaj:function(a){var s=[]
this.C(a,new P.fF(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iQ:1}
P.fF.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
P.d2.prototype={
gj:function(a){return a.length}}
P.ay.prototype={}
P.dI.prototype={
gj:function(a){return a.length}}
P.ey.prototype={}
P.bu.prototype={
fq:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.mY(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.j_("Incorrect number or type of arguments"))},
$ibu:1}
P.dY.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=P.aK(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$in:1}
P.f6.prototype={}
P.f7.prototype={}
K.fA.prototype={
ay:function(a,b){return!0},
i:function(a){return"all"}}
K.dg.prototype={
ay:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].ay(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aB.prototype={
ay:function(a,b){return!this.d9(0,b)},
i:function(a){return"!["+this.b4(0)+"]"}}
K.O.prototype={
N:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.e("May not create a Set with zero characters."))
s=new H.N(t.V)
for(r=new H.bo(a,a.gj(a)),q=H.S(r).c;r.q();)s.k(0,q.a(r.d),!0)
p=P.dt(new H.az(s),!0)
C.a.d8(p)
this.a=p},
ay:function(a,b){return C.a.H(this.a,b)},
i:function(a){return P.ja(this.a)}}
L.dZ.prototype={
m:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.hZ(this.a.F(0,b),[])
s.push(p)
return p},
eY:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.ay(0,a))return p}return null},
i:function(a){return this.b},
cd:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.H(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.az(s.c)
s=J.ax(s==null?[]:s)
for(;s.q();){r=s.gD(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.H(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.b4(0))}return m.charCodeAt(0)==0?m:m}}
L.e9.prototype={
i:function(a){var s=H.kx(this.b,"\n","\\n"),r=H.kx(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ea.prototype={
i:function(a){return this.b}}
L.hW.prototype={
F:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.dZ(this,b,[])
s.k(0,b,r)}return r},
aU:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.ea(a,P.L(s,s))
r.k(0,a,q)}return q},
d0:function(a){return this.fw(a)},
fw:function(a){var s=this
return P.mm(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$d0(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a0.length!==0)h=C.a.bG(a0,0)
else{if(!r.q()){q=3
break}h=n.a(r.d)}b.push(h);++k
g=d==null
f=g?null:d.eY(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.ja(b)
throw H.c(P.e("Untokenizable string [state: "+H.v(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.w("removeRange"))
P.j9(0,i,b.length)
b.splice(0,i-0)
C.a.eH(a0,b)
b=[]
c=[]
d=s.d
q=!m.H(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)c.push(h)
d=f.b
g=d.d
if(g!=null){e=P.ja(c)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.e9(g,e,k)
l=g}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.H(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.lJ()
case 1:return P.lK(o)}}},t.d)},
i:function(a){var s,r,q=new P.ba(""),p=this.d
if(p!=null)q.a=""+(p.cd()+"\n")
for(p=this.a,p=p.gfz(p),p=new H.c6(J.ax(p.a),p.b),s=H.S(p).Q[1];p.q();){r=s.a(p.a)
if(r!=this.d)q.a+=H.v(r==null?null:r.cd())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.hZ.prototype={
i:function(a){return this.b.b+": "+this.b4(0)}}
O.bj.prototype={
bM:function(a,b,c){this.b=b
this.c=a},
b3:function(a,b){return this.bM(a,null,b)},
ef:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dF:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.a2(s,s.length)},
w:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.ef([b])){s=this.a
r=s.length
s.push(b)
this.dF(r,[b])}},
$ih:1}
O.ca.prototype={
gj:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.ab():s},
an:function(){var s=this.b
return s==null?null:s.M(null)},
gR:function(a){var s=this.a
if(s.length>0)return C.a.gbA(s)
else return V.cb()},
cV:function(a){this.a.push(a)
this.an()},
bF:function(){var s=this.a
if(s.length>0){s.pop()
this.an()}}}
E.fG.prototype={}
E.bk.prototype={
sbN:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().E(0,s.gcR())
if(b!=null)b.gt().n(0,s.gcR())
s.al(new D.C("shape",r,b))}},
saQ:function(a){var s,r,q=this
if(!J.I(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gt().E(0,q.gcP())
if(a!=null)a.gt().n(0,q.gcP())
r=q.r
q.al(new D.C("mover",s,r))}},
b2:function(a,b){var s,r,q,p,o,n,m=this,l=m.r
if(l==null)s=null
else{r=l.r
q=b.e
if(r<q){l.r=q
r=l.y
if(r!=null)++r.d
l.sd2(l.a+l.d*b.y)
l.scT(0,l.b+l.e*b.y)
l.scY(l.c+l.f*b.y)
r=l.c
p=Math.cos(r)
o=Math.sin(r)
r=V.aA(p,-o,0,0,o,p,0,0,0,0,1,0,0,0,0,1)
q=l.b
p=Math.cos(q)
o=Math.sin(q)
r=r.X(0,V.aA(p,0,-o,0,0,1,0,0,o,0,p,0,0,0,0,1))
q=l.a
p=Math.cos(q)
o=Math.sin(q)
l.x=r.X(0,V.aA(1,0,0,0,0,p,-o,0,0,o,p,0,0,0,0,1))
r=l.y
if(r!=null)r.ab(0)}s=l.x}if(!J.I(s,m.x)){n=m.x
m.x=s
m.al(new D.C("matrix",n,s))}for(l=m.y.a,l=new J.a2(l,l.length),r=H.S(l).c;l.q();)r.a(l.d).b2(0,b)},
aA:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gR(q))
else o.push(p.X(0,q.gR(q)))
q.an()
a.cW(r.f)
s=C.a.gbA(a.dy)
if(r.d!=null)if(s!=null)s.fk(a,r)
for(p=r.y.a,p=new J.a2(p,p.length),o=H.S(p).c;p.q();)o.a(p.d).aA(a)
a.cU()
q.bF()},
al:function(a){var s=this.z
return s==null?null:s.M(a)},
T:function(){return this.al(null)},
cS:function(a){this.e=null
this.al(a)},
fa:function(){return this.cS(null)},
cQ:function(a){return this.al(a)},
f9:function(){return this.cQ(null)},
cO:function(a){return this.al(a)},
f6:function(){return this.cO(null)},
f5:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcN(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bl()
n=o.a;(n==null?o.a=[]:n).push(r)}this.T()},
f8:function(a,b){var s,r
for(s=b.gK(b),r=this.gcN();s.q();)s.gD(s).gt().E(0,r)
this.T()},
i:function(a){return"Unnamed entity"}}
E.bh.prototype={
i:function(a){return this.b}}
E.bs.prototype={
i:function(a){return this.b}}
E.eH.prototype={}
E.hA.prototype={
df:function(a,b){var s=this
s.cy.gt().n(0,new E.hB(s))
s.db.gt().n(0,new E.hC(s))
s.dx.gt().n(0,new E.hD(s))},
gfh:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gR(q).X(0,s.gR(s))
q=s}return q},
cW:function(a){var s=this.dy
return s.push(a==null?C.a.gbA(s):a)},
cU:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hB.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:10}
E.hC.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:10}
E.hD.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:10}
E.e8.prototype={
bU:function(a){this.cX()},
bT:function(){return this.bU(null)},
gf_:function(){var s,r=this,q=Date.now(),p=C.b.U(P.j2(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.W(q,!1)
return s/p},
c9:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bz(r*o)
r=s.clientHeight
r.toString
p=C.d.bz(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.jW(C.f,this.gfm())}},
cX:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.r.dD(s)
r=W.km(new E.hT(this),t.H)
r.toString
C.r.ev(s,r)}},
fj:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.c9()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.W(p,!1)
q.y=P.j2(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.an()
p=q.db
C.a.sj(p.a,0)
p.an()
p=q.dx
C.a.sj(p.a,0)
p.an()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.aA(q)}}catch(o){s=H.fw(o)
r=H.jt(o)
P.jy("Error: "+H.v(s))
P.jy("Stack: "+H.v(r))
throw H.c(s)}}}
E.hT.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fj()}},
$S:25}
Z.ev.prototype={}
Z.bO.prototype={
ai:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fw(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.v(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.ip.prototype={}
Z.bP.prototype={
av:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
ai:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].ai(a)}},
aW:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aA:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.ci(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(m,", ")+"\nAttrs:   "+C.a.m(o,", ")}}
Z.bZ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ci(this.c)+"'")+"]"}}
Z.aF.prototype={
gbO:function(a){var s=this.a,r=(s&$.aO().a)!==0?3:0
if((s&$.aN().a)!==0)r+=3
if((s&$.aM().a)!==0)r+=3
if((s&$.aP().a)!==0)r+=2
if((s&$.bf().a)!==0)r+=3
if((s&$.cX().a)!==0)r+=3
if((s&$.cY().a)!==0)r+=4
if((s&$.bL().a)!==0)++r
return(s&$.aL().a)!==0?r+4:r},
eK:function(a){var s,r=$.aO(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aN()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bf()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cY()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aL()
if((q&r.a)!==0)if(s===a)return r
return $.kP()},
l:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aF))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aO().a)!==0)s.push("Pos")
if((r&$.aN().a)!==0)s.push("Norm")
if((r&$.aM().a)!==0)s.push("Binm")
if((r&$.aP().a)!==0)s.push("Txt2D")
if((r&$.bf().a)!==0)s.push("TxtCube")
if((r&$.cX().a)!==0)s.push("Clr3")
if((r&$.cY().a)!==0)s.push("Clr4")
if((r&$.bL().a)!==0)s.push("Weight")
if((r&$.aL().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.m(s,"|")}}
D.fI.prototype={}
D.bl.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
E:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.H(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.E(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.H(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.E(p,b)
s=p===!0||s}return s},
M:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.X():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.C(P.dt(p,!0),new D.fX(s))
r=q.b
if(r!=null){q.b=[]
C.a.C(r,new D.fY(s))}return!0},
cp:function(){return this.M(null)},
ab:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.M(s)}}}}
D.fX.prototype={
$1:function(a){a.$1(this.a)},
$S:12}
D.fY.prototype={
$1:function(a){a.$1(this.a)},
$S:12}
D.X.prototype={}
D.aY.prototype={}
D.aZ.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.v(this.d)+" => "+H.v(this.e)}}
X.bQ.prototype={
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bQ))return!1
if(this.a!==b.a)return!1
if(!this.b.l(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dn.prototype={
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!==b.a)return!1
if(!this.b.l(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.h6.prototype={}
X.hb.prototype={
bE:function(a,b){this.r=a.a
return!1},
aS:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
aR:function(a,b){return!1},
fe:function(a){return!1},
e4:function(a,b,c){return}}
X.bq.prototype={
l:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bq))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.m(s,"+")}}
X.hu.prototype={
bE:function(a,b){this.f=a.a
return!1},
aS:function(a,b){this.f=(this.f&~a.a)>>>0
return!1},
aR:function(a,b){return!1},
ff:function(a,b){return!1}}
X.hX.prototype={
fd:function(a){return!1},
fb:function(a){return!1},
fc:function(a){return!1}}
X.et.prototype={
gb0:function(a){var s=this.b
return s==null?this.b=new X.h6(P.jH(t.S)):s},
gaz:function(){var s,r=this.c
if(r==null){r=$.b6
if(r==null){r=$.b6=new V.a5(0,0)
s=r}else s=r
r=this.c=new X.hu(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gak:function(){var s=this.d
if(s==null){s=$.b6
if(s==null)s=$.b6=new V.a5(0,0)
s=this.d=new X.hb(this,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return s},
gbK:function(){var s,r=this.e
if(r==null){r=$.b6
if(r==null){r=$.b6=new V.a5(0,0)
s=r}else s=r
r=this.e=new X.hX(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
c0:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dn(p,new X.bq(s,r,q))},
ar:function(a){var s
this.gb0(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
bi:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gb0(this)
a.altKey
a.shiftKey},
ah:function(a){var s,r,q,p
if(a==null){s=$.b6
return s==null?$.b6=new V.a5(0,0):s}s=this.a.getBoundingClientRect()
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
aK:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.by(r,s)},
be:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.a5(n)
m=o.pageY
m.toString
C.d.a5(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.a5(l)
l=o.pageY
l.toString
l=C.d.a5(l)
k=j.top
k.toString
s.push(new V.a5(n-m,l-k))}return s},
ae:function(a){var s,r,q,p
if(a==null)return new X.bQ(0,new X.bq(!1,!1,!1))
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
return new X.bQ(s,new X.bq(r,q,p))},
bb:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
dZ:function(a){return this.f=!0},
dN:function(a){return this.f=!1},
dT:function(a){if(this.f&&this.bb(a))a.preventDefault()},
e2:function(a){var s,r=this
if(!r.f)return
s=r.c0(a)
r.gb0(r).d.n(0,s.a)},
e0:function(a){var s,r=this
if(!r.f)return
s=r.c0(a)
r.gb0(r).d.E(0,s.a)},
e6:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.ar(a)
if(p.x){s=p.ae(a)
r=p.aK(a)
if(p.gak().bE(s,r))a.preventDefault()
return}s=p.ae(a)
q=p.ah(a)
if(p.gaz().bE(s,q))a.preventDefault()},
ea:function(a){var s,r,q,p=this
p.ar(a)
s=p.ae(a)
if(p.x){r=p.aK(a)
if(p.gak().aS(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaz().aS(s,q))a.preventDefault()},
dX:function(a){var s,r,q,p=this
if(!p.bb(a)){p.ar(a)
s=p.ae(a)
if(p.x){r=p.aK(a)
if(p.gak().aS(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaz().aS(s,q))a.preventDefault()}},
e8:function(a){var s,r,q,p=this
p.ar(a)
s=p.ae(a)
if(p.x){r=p.aK(a)
if(p.gak().aR(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaz().aR(s,q))a.preventDefault()},
dV:function(a){var s,r,q,p=this
if(!p.bb(a)){p.ar(a)
s=p.ae(a)
if(p.x){r=p.aK(a)
if(p.gak().aR(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaz().aR(s,q))a.preventDefault()}},
ec:function(a){var s,r,q,p=this
p.ar(a)
s=p.Q
r=new V.by(C.q.geU(a)*s,C.q.geV(a)*s)
if(p.x){if(p.gak().fe(r))a.preventDefault()
return}q=p.ah(a)
if(p.gaz().ff(r,q))a.preventDefault()},
ee:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ae(q.y)
r=q.ah(q.y)
q.gak().e4(s,r,p)}},
ep:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bi(a)
s=r.be(a)
if(r.gbK().fd(s))a.preventDefault()},
el:function(a){var s
this.bi(a)
s=this.be(a)
if(this.gbK().fb(s))a.preventDefault()},
en:function(a){var s
this.bi(a)
s=this.be(a)
if(this.gbK().fc(s))a.preventDefault()}}
D.bT.prototype={
ac:function(a){var s=this.r
return s==null?null:s.M(a)},
dh:function(){return this.ac(null)},
$ic2:1}
D.c3.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.ab():s},
gcL:function(){var s=this.z
return s==null?this.z=D.ab():s},
ac:function(a){var s=this.y
return s==null?null:s.M(a)},
c6:function(a){var s=this.z
return s==null?null:s.M(a)},
e3:function(){return this.c6(null)},
eh:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.dw(a[r]))return!1
return!0},
dH:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gc5(),q=this.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bl()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ac(new D.aY())},
ej:function(a,b){var s,r,q,p
for(s=b.gK(b),r=this.gc5(),q=this.e;s.q();){p=s.gD(s)
C.a.E(q,p)
p.gt().E(0,r)}this.ac(new D.aZ())},
dw:function(a){var s=C.a.H(this.f,a)
return s}}
V.M.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
V.aS.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aS))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.r(s.a,3,0)+", "+V.r(s.b,3,0)+", "+V.r(s.c,3,0)+", "+V.r(s.d,3,0)+"]"},
p:function(){var s=this
return"["+V.r(s.a,3,0)+", "+V.r(s.b,3,0)+", "+V.r(s.c,3,0)+", "+V.r(s.d,3,0)+"]"}}
V.fV.prototype={}
V.c9.prototype={
W:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.c9))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bI([o.a,o.d,o.r],3,0),m=V.bI([o.b,o.e,o.x],3,0),l=V.bI([o.c,o.f,o.y],3,0),k=n.length
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
V.bp.prototype={
W:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cH:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.z().toString
if(Math.abs(b3-0)<1e-9)return V.cb()
s=1/b3
r=-l
q=-a2
return V.aA((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
X:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aA(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b1:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aV:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a_(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bp))return!1
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
i:function(a){return this.p()},
v:function(a){var s,r,q,p,o,n=this,m=V.bI([n.a,n.e,n.y,n.cx],3,0),l=V.bI([n.b,n.f,n.z,n.cy],3,0),k=V.bI([n.c,n.r,n.Q,n.db],3,0),j=V.bI([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
p:function(){return this.v("")}}
V.a5.prototype={
l:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"},
p:function(){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"}}
V.a_.prototype={
aF:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"},
p:function(){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
V.dN.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dN))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.r(s.a,3,0)+", "+V.r(s.b,3,0)+", "+V.r(s.c,3,0)+", "+V.r(s.d,3,0)+"]"},
p:function(){var s=this
return"["+V.r(s.a,3,0)+", "+V.r(s.b,3,0)+", "+V.r(s.c,3,0)+", "+V.r(s.d,3,0)+"]"}}
V.dP.prototype={
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dP))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.r(s.a,3,0)+", "+V.r(s.b,3,0)+", "+V.r(s.c,3,0)+", "+V.r(s.d,3,0)+"]"}}
V.by.prototype={
bB:function(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
l:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.by))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+"]"}}
V.y.prototype={
bB:function(a){return Math.sqrt(this.aO(this))},
aO:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bC:function(a,b){return new V.y(V.jv(this.a,a.a,b),V.jv(this.b,a.b,b),V.jv(this.c,a.c,b))},
I:function(){var s=this,r=Math.sqrt(s.aO(s))
if(r===1)return s
return s.d3(0,r)},
aM:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
O:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
aC:function(a){return new V.y(-this.a,-this.b,-this.c)},
d3:function(a,b){$.z().toString
if(Math.abs(b-0)<1e-9)return V.cp()
return new V.y(this.a/b,this.b/b,this.c/b)},
cJ:function(){$.z().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
l:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"},
p:function(){return"["+V.r(this.a,3,0)+", "+V.r(this.b,3,0)+", "+V.r(this.c,3,0)+"]"}}
U.d6.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.ab():s},
l:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d6))return!1
return this.a.l(0,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.hv.prototype={}
U.dQ.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.ab():s},
aq:function(a){var s=this.y
return s==null?null:s.M(a)},
sd2:function(a){var s
a=V.jz(a,0,6.283185307179586)
s=this.a
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.aq(new D.C("yaw",s,a))}},
scT:function(a,b){var s
b=V.jz(b,0,6.283185307179586)
s=this.b
$.z().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.aq(new D.C("pitch",s,b))}},
scY:function(a){var s
a=V.jz(a,0,6.283185307179586)
s=this.c
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.aq(new D.C("roll",s,a))}},
l:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dQ))return!1
s=q.a
r=b.a
$.z().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.r(s.a,3,0)+", "+V.r(s.b,3,0)+", "+V.r(s.c,3,0)+"], ["+V.r(s.d,3,0)+", "+V.r(s.e,3,0)+", "+V.r(s.f,3,0)+"]"}}
M.db.prototype={
ad:function(a){var s=this.y
return s==null?null:s.M(a)},
di:function(){return this.ad(null)},
dP:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga7(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bl()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ad(new D.aY())},
dR:function(a,b){var s,r
for(s=b.gK(b),r=this.ga7();s.q();)s.gD(s).gt().E(0,r)
this.ad(new D.aZ())},
scZ:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().E(0,r.ga7())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.ga7())
r.ad(new D.C("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.ab():s},
aA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.cW(d.d)
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
n=C.d.a5(o.a*q)
m=C.d.a5(o.b*p)
l=C.d.a5(o.c*q)
a.c=l
o=C.d.a5(o.d*p)
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
g=V.aA(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.cV(g)
f=$.kC()
e=s.b
if(e!=null)f=e.a.X(0,f)
a.db.cV(f)}s=d.d
if(s!=null)s.b2(0,a)
for(s=d.e.a,r=new J.a2(s,s.length),o=H.S(r).c;r.q();)o.a(r.d).b2(0,a)
for(s=new J.a2(s,s.length),r=H.S(s).c;s.q();)r.a(s.d).aA(a)
if(d.b!=null){a.cy.bF()
a.db.bF()}a.cU()}}
A.fC.prototype={}
A.fD.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
eX:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
eW:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aa.prototype={
ga6:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
l:function(a,b){if(b==null)return!1
if(!(b instanceof A.aa))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dv.prototype={
de:function(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9=null,d0=u.C,d1="Required uniform value, ",d2=", was not defined or used in shader.",d3=c8.x,d4=new P.ba(""),d5=d3.fr
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
A.mB(d3,d4)
A.mD(d3,d4)
A.mC(d3,d4)
A.mF(d3,d4)
A.mG(d3,d4)
A.mE(d3,d4)
A.mH(d3,d4)
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
m=A.mA(d3)
c8.c=n
c8.d=m
l=c8.c1(n,35633)
k=c8.c1(c8.d,35632)
s=c8.a
q=s.createProgram()
q.toString
c8.e=q
s.attachShader(c8.gaf(),l)
s.attachShader(c8.gaf(),k)
s.linkProgram(c8.gaf())
if(!H.kg(s.getProgramParameter(c8.gaf(),35714))){j=s.getProgramInfoLog(c8.gaf())
if(j==null)j="undefined log error"
s.deleteProgram(c8.e)
H.f(P.e("Failed to link shader: "+j))}c8.eC()
c8.eE()
c8.y=c8.ga9(c8).h(0,"posAttr")
c8.Q=c8.ga9(c8).h(0,"normAttr")
c8.z=c8.ga9(c8).h(0,"binmAttr")
c8.ch=c8.ga9(c8).h(0,"txt2DAttr")
c8.cx=c8.ga9(c8).h(0,"txtCubeAttr")
c8.cy=c8.ga9(c8).h(0,"bendAttr")
if(d3.dy)c8.fy=t.j.a(c8.gB().A(0,"invViewMat"))
if(d5)c8.db=t.j.a(c8.gB().A(0,"objMat"))
if(r)c8.dx=t.j.a(c8.gB().A(0,"viewObjMat"))
d5=t.j
c8.fr=d5.a(c8.gB().A(0,"projViewObjMat"))
if(d3.go)c8.dy=d5.a(c8.gB().A(0,"viewMat"))
if(d3.x1)c8.go=t.Q.a(c8.gB().A(0,"txt2DMat"))
if(d3.x2)c8.id=d5.a(c8.gB().A(0,"txtCubeMat"))
if(d3.y1)c8.k1=d5.a(c8.gB().A(0,"colorMat"))
c8.k3=[]
s=d3.at
if(s>0){c8.k2=t.v.a(c8.gB().A(0,"bendMatCount"))
for(i=0;i<s;++i){r=c8.k3
h=c8.r
if(h==null)H.f(P.e(d0))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.f(P.e(d1+q+d2))
r.push(d5.a(g))}}d5=d3.a
if(d5.a)c8.k4=t.g.a(c8.gB().A(0,"emissionClr"))
if(d5.b)c8.r1=t.G.a(c8.gB().A(0,"emissionTxt"))
d5=d3.b
if(d5.a)c8.rx=t.g.a(c8.gB().A(0,"ambientClr"))
if(d5.b)c8.ry=t.G.a(c8.gB().A(0,"ambientTxt"))
d5=d3.c
if(d5.a)c8.x2=t.g.a(c8.gB().A(0,"diffuseClr"))
if(d5.b)c8.y1=t.G.a(c8.gB().A(0,"diffuseTxt"))
d5=d3.d
if(d5.a)c8.at=t.g.a(c8.gB().A(0,"invDiffuseClr"))
if(d5.b)c8.au=t.G.a(c8.gB().A(0,"invDiffuseTxt"))
d5=d3.e
s=d5.a
if(s||d5.b||!1){c8.cu=t.n.a(c8.gB().A(0,"shininess"))
if(s)c8.cs=t.g.a(c8.gB().A(0,"specularClr"))
if(d5.b)c8.ct=t.G.a(c8.gB().A(0,"specularTxt"))}if(d3.f.b)c8.cv=t.G.a(c8.gB().A(0,"bumpTxt"))
if(d3.db){c8.cw=t.a.a(c8.gB().A(0,"envSampler"))
d5=d3.r
if(d5.a)c8.cz=t.g.a(c8.gB().A(0,"reflectClr"))
if(d5.b)c8.cA=t.G.a(c8.gB().A(0,"reflectTxt"))
d5=d3.x
s=d5.a
if(s||d5.b||!1){c8.cB=t.n.a(c8.gB().A(0,"refraction"))
if(s)c8.cC=t.g.a(c8.gB().A(0,"refractClr"))
if(d5.b)c8.cD=t.G.a(c8.gB().A(0,"refractTxt"))}}d5=d3.y
if(d5.a)c8.cE=t.n.a(c8.gB().A(0,"alpha"))
if(d5.b)c8.cF=t.G.a(c8.gB().A(0,"alphaTxt"))
if(d3.k1){d5=d3.z
s=d5.length
if(s!==0){r=t.S
c8.br=P.L(r,t.W)
c8.bs=P.L(r,t.q)
for(r=t.v,q=t.g,p=t.n,f=0;f<d5.length;d5.length===s||(0,H.o)(d5),++f){e=d5[f]
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
a8=a7}b.push(new A.eh(g,a1,a2,a8,a7,a6))}c8.bs.k(0,d,b)
o=c8.br
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.k(0,d,r.a(g))}}d5=d3.Q
s=d5.length
if(s!==0){r=t.S
c8.bt=P.L(r,t.W)
c8.bu=P.L(r,t.L)
for(r=t.v,q=t.g,p=t.G,f=0;f<d5.length;d5.length===s||(0,H.o)(d5),++f){e=d5[f]
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
b.push(new A.ei(b1,b0,a9,g,a1,b2))}c8.bu.k(0,d,b)
o=c8.bt
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.k(0,d,r.a(g))}}d5=d3.ch
s=d5.length
if(s!==0){r=t.S
c8.bv=P.L(r,t.W)
c8.bw=P.L(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,a=t.F,a0=t.n,f=0;f<d5.length;d5.length===s||(0,H.o)(d5),++f){e=d5[f]
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
a8=a7}b.push(new A.el(g,a1,b9,a2,b2,c0,c1,a8,a7,a6))}c8.bw.k(0,d,b)
b3=c8.bv
h=c8.r
if(h==null)H.f(P.e(d0))
b4=c+"Count"
g=h.h(0,b4)
if(g==null)H.f(P.e(d1+b4+d2))
b3.k(0,d,r.a(g))}}d3=d3.cx
d5=d3.length
if(d5!==0){s=t.S
c8.bx=P.L(s,t.W)
c8.by=P.L(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,f=0;f<d3.length;d3.length===d5||(0,H.o)(d3),++f){e=d3[f]
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
b.push(new A.eo(g,a1,a2,a3,b1,b0,c5,c4,c1,c7,c6,a8,a7,a6,b2,c0))}c8.by.k(0,d,b)
a=c8.bx
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
a.k(0,d,s.a(g))}}}},
a4:function(a,b){if(b!=null&&b.gV(b))if(a!=null)a.d6(b)},
ey:function(a,b){}}
A.aQ.prototype={
i:function(a){return"barLight"+this.a}}
A.aU.prototype={
i:function(a){return"dirLight"+this.a}}
A.b7.prototype={
i:function(a){return"pointLight"+this.a}}
A.b9.prototype={
i:function(a){return"spotLight"+this.a}}
A.hf.prototype={
i:function(a){return this.au}}
A.eh.prototype={}
A.ei.prototype={}
A.el.prototype={}
A.eo.prototype={}
A.ck.prototype={
ga9:function(a){var s=this.f
if(s==null)throw H.c(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gB:function(){var s=this.r
if(s==null)throw H.c(P.e(u.C))
return s},
gaf:function(){var s=this.e
if(s==null)throw H.c(P.e(u.F))
return s},
c1:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.kg(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.e('Error compiling shader "'+H.v(q)+'": '+s))}return q},
eC:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.iG(l.getProgramParameter(o.gaf(),35721))
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
m.push(new A.fC(l,q,p))}o.f=new A.fD(m)},
eE:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.iG(j.getProgramParameter(m.gaf(),35718))
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
k.push(m.eT(o,n,q,p))}m.r=new A.i8(k)},
ap:function(a,b,c){var s=this.a
if(a===1)return new A.co(s,b,c)
else return A.jc(s,this.e,b,a,c)},
dA:function(a,b,c){var s=this.a
if(a===1)return new A.em(s,b,c)
else return A.jc(s,this.e,b,a,c)},
dB:function(a,b,c){var s=this.a
if(a===1)return new A.en(s,b,c)
else return A.jc(s,this.e,b,a,c)},
aZ:function(a,b){return new P.eK(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
eT:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ap(b,c,d)
case 5121:return s.ap(b,c,d)
case 5122:return s.ap(b,c,d)
case 5123:return s.ap(b,c,d)
case 5124:return s.ap(b,c,d)
case 5125:return s.ap(b,c,d)
case 5126:return new A.ee(s.a,c,d)
case 35664:return new A.i4(s.a,c,d)
case 35665:return new A.ef(s.a,c,d)
case 35666:return new A.eg(s.a,c,d)
case 35667:return new A.i5(s.a,c,d)
case 35668:return new A.i6(s.a,c,d)
case 35669:return new A.i7(s.a,c,d)
case 35674:return new A.i9(s.a,c,d)
case 35675:return new A.ej(s.a,c,d)
case 35676:return new A.ek(s.a,c,d)
case 35678:return s.dA(b,c,d)
case 35680:return s.dB(b,c,d)
case 35670:throw H.c(s.aZ("BOOL",c))
case 35671:throw H.c(s.aZ("BOOL_VEC2",c))
case 35672:throw H.c(s.aZ("BOOL_VEC3",c))
case 35673:throw H.c(s.aZ("BOOL_VEC4",c))
default:throw H.c(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.i2.prototype={}
A.i8.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
A:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.p()},
p:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.co.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.i5.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.i6.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.i7.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.i3.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ee.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.i4.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ef.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eg.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.i9.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.ej.prototype={
a3:function(a){var s=new Float32Array(H.cP(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.ek.prototype={
a3:function(a){var s=new Float32Array(H.cP(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.em.prototype={
d6:function(a){var s=a.gV(a),r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.en.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.iF.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bC(q.b,b).bC(q.d.bC(q.c,b),c)
q=new V.a_(p.a,p.b,p.c)
if(!J.I(a.f,q)){a.f=q
q=a.a
if(q!=null)q.T()}a.sfs(p.I())
q=1-b
s=1-c
s=new V.dN(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.I(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.T()}},
$S:30}
F.aj.prototype={
aH:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.ez(a)
s.eA(b)
s.eB(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gJ().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.T()}},
aN:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.E(r.gJ().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.T()}}s.bf()
s.bg()
s.es()},
ez:function(a){this.a=a
a.gJ().b.push(this)},
eA:function(a){this.b=a
a.gJ().c.push(this)},
eB:function(a){this.c=a
a.gJ().d.push(this)},
bf:function(){var s=this.a
if(s!=null)C.a.E(s.gJ().b,this)
this.a=null},
bg:function(){var s=this.b
if(s!=null)C.a.E(s.gJ().c,this)
this.b=null},
es:function(){var s=this.c
if(s!=null)C.a.E(s.gJ().d,this)
this.c=null},
ds:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cp()
if(n!=null)q=q.O(0,n)
if(s!=null)q=q.O(0,s)
if(r!=null)q=q.O(0,r)
if(q.cJ())return p
return q.I()},
du:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aF(0,n)
q=new V.y(o.a,o.b,o.c).I()
o=r.aF(0,n)
return q.aM(new V.y(o.a,o.b,o.c).I()).I()},
bn:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ds()
if(s==null){s=q.du()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.T()}return!0},
dr:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cp()
if(n!=null)q=q.O(0,n)
if(s!=null)q=q.O(0,s)
if(r!=null)q=q.O(0,r)
if(q.cJ())return p
return q.I()},
dt:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.z().toString
if(Math.abs(p-0)<1e-9){j=b.aF(0,e)
o=new V.y(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.aC(0)}else{n=(j-s.b)/p
j=b.aF(0,e)
j=new V.a_(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aF(0,h)
o=new V.y(j.a,j.b,j.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aC(0)}m=l.d
if(m!=null){m=m.I()
o=m.aM(o).I().aM(m).I()}return o},
bl:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.dr()
if(s==null){s=q.dt()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.T()}return!0},
geO:function(a){var s=this
if(J.I(s.a,s.b))return!0
if(J.I(s.b,s.c))return!0
if(J.I(s.c,s.a))return!0
return!1},
l:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.p()},
v:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gu(p)
p=a+C.c.a1(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gu(o)
p=p+C.c.a1(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gu(o)
s=p+C.c.a1(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.p()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.p()
return s+((p==null?"-":p)+"}")},
p:function(){return this.v("")}}
F.fZ.prototype={}
F.hK.prototype={
aP:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.c
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.c
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.a
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gu(q)
s=c.c
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.c
q=q==null?r:q.gu(q)
s=c.b
q=q==(s==null?r:s.gu(s))}else q=!1
return q}else return!1}}}}
F.h7.prototype={
aN:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.a.E(r.ga_(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.T()}}s.bf()
s.bg()},
bf:function(){var s=this.a
if(s!=null)C.a.E(s.ga_(s).b,this)
this.a=null},
bg:function(){var s=this.b
if(s!=null)C.a.E(s.ga_(s).c,this)
this.b=null},
l:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.p()},
v:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gu(s)
s=a+C.c.a1(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gu(r)
return s+C.c.a1(C.b.i(r==null?-1:r),0)},
p:function(){return this.v("")}}
F.h8.prototype={}
F.i1.prototype={
aP:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gu(q)
s=c.a
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.b
return q==(s==null?r:s.gu(s))}else{q=b.a
q=q==null?r:q.gu(q)
s=c.b
if(q==(s==null?r:s.gu(s))){q=b.b
q=q==null?r:q.gu(q)
s=c.a
return q==(s==null?r:s.gu(s))}else return!1}}}
F.hy.prototype={
l:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.p()},
v:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gu(s)
return a+C.c.a1(C.b.i(s),0)},
p:function(){return this.v("")}}
F.hF.prototype={
gS:function(){var s=this.a
return s==null?this.a=new F.u(this,[]):s},
gaT:function(a){var s=this.b
return s==null?this.b=new F.b8(this,[]):s},
ga_:function(a){var s=this.c
return s==null?this.c=new F.bv(this,[]):s},
gJ:function(){var s=this.d
return s==null?this.d=new F.cl(this,[]):s},
gt:function(){var s=this.e
return s==null?this.e=D.ab():s},
bD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gS().L()
s=d.gS().c.length
for(b=a.gS().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
o.n(0,p.eS())}d.gS().L()
for(b=a.gaT(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.b8(d,[]):m).a
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,j)
o=new F.hy()
if(j.a==null)H.f(P.e("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.cr([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.b8(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.M(c)}}}for(b=a.ga_(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.u(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.bv(d,[]):m).a
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,h)
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,g)
o=new F.h7()
m=h.a
if(m==null)H.f(P.e("May not create a line with a start vertex which is not attached to a shape."))
if(m!=g.a)H.f(P.e("May not create a line with vertices attached to different shapes."))
o.a=h
m=h.c;(m==null?h.c=new F.aE([],[]):m).b.push(o)
o.b=g
m=g.c;(m==null?g.c=new F.aE([],[]):m).c.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.c;(l==null?m.c=new F.bv(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.M(c)}}}for(b=a.gJ().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.u(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.u(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cl(d,[]):m).a
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,h)
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,g)
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,e)
new F.aj().aH(h,g,e)}b=d.e
if(b!=null)b.ab(0)},
as:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gJ().as()||!1
if(!r.gS().as())s=!1
q=r.e
if(q!=null)q.ab(0)
return s},
f3:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gS().c.slice(0)
for(;s.length!==0;){r=C.a.geZ(s)
C.a.bG(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.aP(0,r,o)){q.push(o)
C.a.bG(s,p)}}if(q.length>1)b.bD(q)}n.gS().L()
n.ga_(n).bH()
n.gJ().bH()
n.gaT(n).fi()
n.ga_(n).bI(new F.i1())
n.gJ().bI(new F.hK())
m=n.e
if(m!=null)m.ab(0)},
eM:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=34962,d={},c=g.gS().c.length,b=a1.a,a=(b&$.aO().a)!==0?1:0
if((b&$.aN().a)!==0)++a
if((b&$.aM().a)!==0)++a
if((b&$.aP().a)!==0)++a
if((b&$.bf().a)!==0)++a
if((b&$.cX().a)!==0)++a
if((b&$.cY().a)!==0)++a
if((b&$.bL().a)!==0)++a
if((b&$.aL().a)!==0)++a
s=a1.gbO(a1)
r=P.ds(c*s,0,!1)
d.a=0
q=P.lf(a,new F.hG(d,g,a1,s*4,c,s,r))
b=a0.a
p=b.createBuffer()
p.toString
b.bindBuffer(e,p)
b.bufferData(e,new Float32Array(H.cP(r)),35044)
b.bindBuffer(e,f)
o=new Z.bP(new Z.ev(e,p),[],q,a1)
if(g.gaT(g).b.length!==0){n=[]
m=0
while(!0){p=g.b
if(p==null){p=g.b=new F.b8(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
p=p[m].a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}p=p.e}n.push(p==null?0:p);++m}j=Z.je(b,34963,n)
o.b.push(new Z.bZ(0,n.length,j))}if(g.ga_(g).b.length!==0){n=[]
m=0
while(!0){p=g.c
if(p==null){p=g.c=new F.bv(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
i=p[m]
p=i.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}p=p.e}n.push(p==null?0:p)
p=i.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}p=p.e}n.push(p==null?0:p);++m}j=Z.je(b,34963,n)
o.b.push(new Z.bZ(1,n.length,j))}if(g.gJ().b.length!==0){n=[]
m=0
while(!0){p=g.d
if(p==null){p=g.d=new F.cl(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
h=p[m]
p=h.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}p=p.e}n.push(p==null?0:p)
p=h.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}p=p.e}n.push(p==null?0:p)
p=h.c
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).L()}p=p.e}n.push(p==null?0:p);++m}j=Z.je(b,34963,n)
o.b.push(new Z.bZ(4,n.length,j))}return o},
i:function(a){var s=this,r="   ",q=[]
if(s.gS().c.length!==0){q.push("Vertices:")
q.push(s.gS().v(r))}if(s.gaT(s).b.length!==0){q.push("Points:")
q.push(s.gaT(s).v(r))}if(s.ga_(s).b.length!==0){q.push("Lines:")
q.push(s.ga_(s).v(r))}if(s.gJ().b.length!==0){q.push("Faces:")
q.push(s.gJ().v(r))}return C.a.m(q,"\n")},
T:function(){var s=this.e
return s==null?null:s.M(null)}}
F.hG.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.eK(a),f=g.gbO(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.u(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].f2(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bO(g,f,d*4,h.d)},
$S:31}
F.cl.prototype={
eJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.u(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,h)
f=new F.aj()
f.aH(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,g)
f=new F.aj()
f.aH(k,h,g)
e.push(f)}else{(l==null?s.a=new F.u(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,g)
f=new F.aj()
f.aH(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,g)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,k)
f=new F.aj()
f.aH(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
bI:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gS().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.u(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bz([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bz([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.aP(0,n,(q==null?p.d=new F.bz([],[],[]):q).h(0,l))){n.aN()
break}}}}},
bH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.geO(q))q.aN()}},
as:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bn())q=!1
return q},
bm:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bl())q=!1
return q},
i:function(a){return this.p()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(a))
return C.a.m(p,"\n")},
p:function(){return this.v("")}}
F.bv.prototype={
gj:function(a){return this.b.length},
bI:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gS().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.u(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.aE([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.aE([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.aP(0,n,(q==null?p.c=new F.aE([],[]):q).h(0,l))){n.aN()
break}}}}},
bH:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.I(q.a,q.b))q.aN()}},
i:function(a){return this.p()},
v:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].v(a+(""+s+". ")))}return C.a.m(r,"\n")},
p:function(){return this.v("")}}
F.b8.prototype={
gj:function(a){return this.b.length},
fi:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.cr([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.a.E((o==null?p.b=new F.b8(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.M(null)}}}p=q.a
if(p!=null){o=p.b
C.a.E((o==null?p.b=new F.cr([]):o).b,q)}q.a=null}}},
i:function(a){return this.p()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(a))
return C.a.m(p,"\n")},
p:function(){return this.v("")}}
F.cq.prototype={
bp:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.k2(s.cx,p,m,r,q,o,n,a,l)},
eS:function(){return this.bp(null)},
ga_:function(a){var s=this.c
return s==null?this.c=new F.aE([],[]):s},
gJ:function(){var s=this.d
return s==null?this.d=new F.bz([],[],[]):s},
gu:function(a){var s=this.a
if(s!=null)s.gS().L()
return this.e},
sfs:function(a){var s
if(!J.I(this.z,a)){this.z=a
s=this.a
if(s!=null)s.T()}},
f2:function(a){var s,r,q,p,o=this,n=null
if(a.l(0,$.aO())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.l(0,$.aN())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.l(0,$.aM())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.l(0,$.aP())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.l(0,$.bf())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.l(0,$.cX())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.l(0,$.cY())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.l(0,$.bL()))return[o.ch]
else if(a.l(0,$.aL())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bn:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cp()
p.gJ().C(0,new F.io(o))
p.r=o.a.I()
if(r){s.T()
o=s.e
if(o!=null)o.ab(0)}return!0},
bl:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cp()
p.gJ().C(0,new F.im(o))
p.x=o.a.I()
if(r){s.T()
o=s.e
if(o!=null)o.ab(0)}return!0},
l:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.p()},
v:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.c.a1(C.b.i(q.e),0))
s=q.f
s=s==null?p:s.p()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.p()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.p()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.p()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.p()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.p()
n.push(s==null?o:s)
n.push(V.r(q.ch,3,0))
s=q.cx
s=s==null?p:s.p()
n.push(s==null?o:s)
r=C.a.m(n,", ")
return a+"{"+r+"}"},
p:function(){return this.v("")}}
F.io.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.O(0,r)}},
$S:6}
F.im.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.O(0,r)}},
$S:6}
F.u.prototype={
L:function(){var s,r,q
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
s.T()
return!0},
cg:function(a,b){var s=null,r=F.k2(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gj:function(a){return this.c.length},
as:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bn()
return!0},
bm:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bl()
return!0},
eN:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.I()
if(!J.I(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.M(null)}}}}}return!0},
i:function(a){return this.p()},
v:function(a){var s,r,q,p
this.L()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].v(a))
return C.a.m(s,"\n")},
p:function(){return this.v("")}}
F.bz.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
C.a.C(s.c,new F.ih(s,b))
C.a.C(s.d,new F.ii(s,b))},
i:function(a){return this.p()},
p:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
return C.a.m(p,"\n")}}
F.ih.prototype={
$1:function(a){if(!J.I(a.a,this.a))this.b.$1(a)},
$S:6}
F.ii.prototype={
$1:function(a){var s=this.a
if(!J.I(a.a,s)&&!J.I(a.b,s))this.b.$1(a)},
$S:6}
F.aE.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.p()},
p:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
return C.a.m(p,"\n")}}
F.ik.prototype={}
F.ij.prototype={
aP:function(a,b,c){return J.I(b.f,c.f)}}
F.il.prototype={}
F.hw.prototype={
bD:function(a){var s,r,q,p,o,n=V.cp()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.y(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.I()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){p=a[r]
q=n.I()
if(!J.I(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.M(null)}}}return null}}
F.cr.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.p()},
p:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
return C.a.m(p,"\n")}}
O.du.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.ab():s},
P:function(a){var s=this.fr
return s==null?null:s.M(a)},
b5:function(){return this.P(null)},
c8:function(a){this.a=null
this.P(a)},
ew:function(){return this.c8(null)},
dJ:function(a,b){return this.P(new D.aY())},
dL:function(a,b){return this.P(new D.aZ())},
gcM:function(){var s=this,r=s.dx
if(r==null){r=new D.c3([],[],[],[],[])
r.bM(r.gdG(),r.geg(),r.gei())
r.gt().n(0,s.gc7())
r.gcL().n(0,s.gaI())
s.dx=r}return r},
gbk:function(){var s=this.r
return s==null?this.r=O.dw(this,"ambient"):s},
gbq:function(){var s=this.x
return s==null?this.x=O.dw(this,"diffuse"):s},
c_:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.N(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gaa()
o=a1.h(0,q.gaa())
a1.k(0,p,o==null?1:o)}n=[]
a1.C(0,new O.hj(b,n))
C.a.aE(n,new O.hk())
m=new H.N(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=[]
m.C(0,new O.hl(b,l))
C.a.aE(l,new O.hm())
k=new H.N(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gaa()
o=k.h(0,q.gaa())
k.k(0,p,o==null?1:o)}j=[]
k.C(0,new O.hn(b,j))
C.a.aE(j,new O.ho())
i=new H.N(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.o)(a0),++r){q=a0[r]
s=q.gaa()
p=i.h(0,q.gaa())
i.k(0,s,p==null?1:p)}h=[]
i.C(0,new O.hp(b,h))
C.a.aE(h,new O.hq())
a0=C.b.U(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hg(new V.aS(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dw(b,"emission"):a2).c
s=b.gbk().c
p=b.gbq().c
o=b.y
o=(o==null?b.y=O.dw(b,"invDiffuse"):o).c
g=b.z
g=(g==null?b.z=new O.hi(new V.M(0,0,0),b,"specular",new A.aa(!1,!1,!1)):g).c
f=b.Q
f=(f==null?b.Q=new O.he(b,"bump",new A.aa(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.dw(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hh(new V.M(0,0,0),b,"refract",new A.aa(!1,!1,!1)):d).c
c=b.db
return A.lh(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hd(b,"alpha",new A.aa(!1,!1,!1)):c).c,n,l,j,h)},
Y:function(a,b){if(b!=null)if(!C.a.H(a,b)){b.a=a.length
a.push(b)}},
b2:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.ax(m==null?[]:m)
s=H.S(m).c
for(;m.q();){r=s.a(m.d)
q=$.ig
if(q==null)q=$.ig=new V.y(0,0,1)
r.c=q
p=$.ie
r.d=p==null?$.ie=new V.y(0,1,0):p
p=$.id
r.e=p==null?$.id=new V.y(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.b1(q).I()
r.d=n.b1(r.d).I()
r.e=n.b1(r.e).I()}}},
fk:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.c_()
r=s.au
q=b0.fr
a9=q.h(0,r)
if(a9==null){p=b0.a
o=t.S
n=t.W
a9=new A.dv(s,[],P.L(o,n),P.L(o,t.q),P.L(o,n),P.L(o,t.L),P.L(o,n),P.L(o,t.U),P.L(o,n),P.L(o,t.R),p,r)
a9.de(s,p)
if(r.length===0)H.f(P.e("May not cache a shader with no name."))
if(q.eQ(0,r))H.f(P.e('Shader cache already contains a shader by the name "'+r+'".'))
q.k(0,r,a9)}a9=a7.a=a9
b1.e=null}m=a9.x
l=m.cr
s=b1.e
if(!(s instanceof Z.bP))s=b1.e=null
if(s==null||!s.d.l(0,l)){s=m.k4
if(s){r=b1.d
if(r!=null)r.as()}r=m.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gJ().bm()
q.gS().bm()
q=q.e
if(q!=null)q.ab(0)}}q=m.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gS().eN()
p=p.e
if(p!=null)p.ab(0)}}p=b1.d
k=p==null?a8:p.eM(new Z.ip(b0.a),l)
if(k==null)return
p=k.av($.aO())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=k.av($.aN())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=k.av($.aM())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.av($.aP())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=k.av($.bf())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.av($.aL())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=k}j=[]
s=b0.a
s.useProgram(a9.e)
a9.ga9(a9).eX()
if(m.fr){r=b0.dx
r=r.gR(r)
q=a9.db
if(q!=null)q.a3(r.W(0,!0))}if(m.fx){r=b0.cx
if(r==null){r=b0.db
q=b0.dx
q=b0.cx=r.gR(r).X(0,q.gR(q))
r=q}q=a9.dx
if(q!=null)q.a3(r.W(0,!0))}r=b0.ch
if(r==null){r=b0.dx
r=b0.ch=b0.gfh().X(0,r.gR(r))}q=a9.fr
if(q!=null)q.a3(r.W(0,!0))
if(m.go){r=b0.db
r=r.gR(r)
q=a9.dy
if(q!=null)q.a3(r.W(0,!0))}if(m.x1){r=$.jJ
if(r==null){r=new V.c9(1,0,0,0,1,0,0,0,1)
$.jJ=r}q=a9.go
if(q!=null)q.a3(r.W(0,!0))}if(m.x2){r=V.cb()
q=a9.id
if(q!=null)q.a3(r.W(0,!0))}if(m.y1){r=V.cb()
q=a9.k1
if(q!=null)q.a3(r.W(0,!0))}if(m.at>0){r=a7.e.a
i=r.length
q=a9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=a9.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cP(q.W(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a7.f
q=q==null?a8:q.f
if(q==null)q=new V.M(0,0,0)
p=a9.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.f
a7.Y(j,r==null?a8:r.d)
r=a7.f
r=r==null?a8:r.d
a9.a4(a9.r1,r)}if(m.k1){r=m.b
if(r.a){q=a7.r
q=q==null?a8:q.f
if(q==null)q=new V.M(0,0,0)
p=a9.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.r
a7.Y(j,r==null?a8:r.d)
r=a7.r
r=r==null?a8:r.d
a9.a4(a9.ry,r)}r=m.c
if(r.a){q=a7.x
q=q==null?a8:q.f
if(q==null)q=new V.M(0,0,0)
p=a9.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.x
a7.Y(j,r==null?a8:r.d)
r=a7.x
r=r==null?a8:r.d
a9.a4(a9.y1,r)}r=m.d
if(r.a){q=a7.y
q=q==null?a8:q.f
if(q==null)q=new V.M(0,0,0)
p=a9.at
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.y
a7.Y(j,r==null?a8:r.d)
r=a7.y
r=r==null?a8:r.d
a9.a4(a9.au,r)}r=m.e
q=r.a
if(q||r.b||!1){p=a7.z
p=p==null?a8:p.ch
if(p==null)p=100
o=a9.cu
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.z
q=q==null?a8:q.f
if(q==null)q=new V.M(1,1,1)
p=a9.cs
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.z
a7.Y(j,r==null?a8:r.d)
r=a7.z
r=r==null?a8:r.d
a9.a4(a9.ct,r)}r=m.z
if(r.length>0){f=new H.N(t.y)
q=a7.dx
q=q==null?a8:q.e
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
c=d.gaa()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
o=a9.bs.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.gfB()
n=$.ap
o=o.aV(n==null?$.ap=new V.a_(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gfG()
n=$.ap
o=o.aV(n==null?$.ap=new V.a_(0,0,0):n)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaL(d)
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
if(d.gcq()){o=d.gcj()
n=a.e
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gck()
n=a.f
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcl()
n=a.r
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=a9.br.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b0.db
a0=q.gR(q)
a1=new H.N(t.y)
q=a7.dx
q=q==null?a8:q.f
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
b=a1.h(0,0)
if(b==null)b=0
a1.k(0,0,b+1)
o=a9.bu.h(0,0)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=a0.b1(d.c).I()
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.b
n=a.f
n.a.uniform3f(n.d,o.a,o.b,o.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=a1.h(0,p)
if(i==null)i=0
p=a9.bt.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b0.db
a0=q.gR(q)
a2=new H.N(t.y)
q=a7.dx
q=q==null?a8:q.r
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
c=d.gaa()
b=a2.h(0,c)
if(b==null)b=0
a2.k(0,c,b+1)
o=a9.bw.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
a3=a0.X(0,d.gR(d))
o=d.gR(d)
n=$.ap
o=o.aV(n==null?$.ap=new V.a_(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=$.ap
o=a3.aV(o==null?$.ap=new V.a_(0,0,0):o)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaL(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gam()
o=a3.cH(0)
n=a.d
if(n!=null){g=new Float32Array(H.cP(new V.c9(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).W(0,!0)))
n.a.uniformMatrix3fv(n.d,!1,g)}d.gam()
o=d.gam()
if(!C.a.H(j,o)){o.a=j.length
j.push(o)}o=d.gam()
n=o.gV(o)
if(n){n=a.f
if(n!=null){a4=o.gV(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gu(o))}}d.gaD()
o=d.gd7()
n=a.x
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaD()
if(!C.a.H(j,o)){o.a=j.length
j.push(o)}o=d.gaD()
n=o.gV(o)
if(n){n=a.r
if(n!=null){a4=o.gV(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gu(o))}}if(d.gcq()){o=d.gcj()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gck()
n=a.z
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcl()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=a9.bv.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b0.db
a0=q.gR(q)
a6=new H.N(t.y)
q=a7.dx
q=q==null?a8:q.x
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.o)(q),++e){d=q[e]
c=d.gaa()
b=a6.h(0,c)
if(b==null)b=0
a6.k(0,c,b+1)
o=a9.by.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.gfg(d)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gfE(d).I()
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=a0.aV(d.gfg(d))
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaL(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gam()
o=d.gfS()
n=a.f
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gfP(d)
n=a.r
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gfQ()
n=a.x
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gfR()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
d.gam()
o=d.gam()
if(!C.a.H(j,o)){o.a=j.length
j.push(o)}o=d.gam()
n=o.gV(o)
if(n){n=a.dx
if(n!=null){a4=o.d
if(a4==null)a4=o.c
a4=a4==null?a8:a4.gV(a4)
a4=a4!==!0
a5=n.a
n=n.d
if(a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.a)}}d.gaD()
o=d.gd7()
n=a.z
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaD()
if(!C.a.H(j,o)){o.a=j.length
j.push(o)}o=d.gaD()
n=o.gV(o)
if(n){n=a.dy
if(n!=null){a4=o.d
if(a4==null)a4=o.c
a4=a4==null?a8:a4.gV(a4)
a4=a4!==!0
a5=n.a
n=n.d
if(a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.a)}}if(d.gfF()){o=d.gfD()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gfC()
n=a.ch
if(n!=null)n.a.uniform1f(n.d,o)}if(d.gcq()){o=d.gcj()
n=a.cx
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gck()
n=a.cy
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcl()
n=a.db
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.o)(r),++e){p=r[e].a
i=a6.h(0,p)
if(i==null)i=0
p=a9.bx.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.b){r=a7.Q
a7.Y(j,r==null?a8:r.d)
r=a7.Q
r=r==null?a8:r.d
a9.a4(a9.cv,r)}if(m.dy){r=b0.Q
if(r==null){r=b0.db
r=b0.Q=r.gR(r).cH(0)}q=a9.fy
if(q!=null)q.a3(r.W(0,!0))}if(m.db){a7.Y(j,a8)
a9.ey(a9.cw,a8)
r=m.r
if(r.a){q=a7.cx
q=q==null?a8:q.f
if(q==null)q=new V.M(1,1,1)
p=a9.cz
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.cx
a7.Y(j,r==null?a8:r.d)
r=a7.cx
r=r==null?a8:r.d
a9.a4(a9.cA,r)}r=m.x
q=r.a
if(q||r.b||!1){p=a7.cy
p=p==null?a8:p.ch
if(p==null)p=0
o=a9.cB
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.cy
q=q==null?a8:q.f
if(q==null)q=new V.M(1,1,1)
p=a9.cC
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.cy
a7.Y(j,r==null?a8:r.d)
r=a7.cy
r=r==null?a8:r.d
a9.a4(a9.cD,r)}}r=m.y
q=r.a
p=!q
if(!p||r.b||!1){if(q){q=a7.db
q=q==null?a8:q.f
if(q==null)q=1
o=a9.cE
if(o!=null)o.a.uniform1f(o.d,q)}if(r.b){q=a7.db
a7.Y(j,q==null?a8:q.d)
q=a7.db
q=q==null?a8:q.d
a9.a4(a9.cF,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(q.d==null){q=q.d=q.c
if(q!=null)q.ai(b0)}}q=t.D.a(b1.e)
q.ai(b0)
q.aA(b0)
q.aW(b0)
if(!p||r.b||!1)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
q=r.d
if(q!=null){q.aW(b0)
r.d=null}}s.useProgram(a8)
a9.ga9(a9).eW()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.c_().au}}
O.hj.prototype={
$2:function(a,b){return this.b.push(new A.aQ(a,C.b.U(b+3,4)*4))},
$S:7}
O.hk.prototype={
$2:function(a,b){return C.b.Z(a.a,b.a)},
$S:34}
O.hl.prototype={
$2:function(a,b){return this.b.push(new A.aU(a,C.b.U(b+3,4)*4))},
$S:7}
O.hm.prototype={
$2:function(a,b){return C.b.Z(a.a,b.a)},
$S:35}
O.hn.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.b.U(b+3,4)*4))},
$S:7}
O.ho.prototype={
$2:function(a,b){return C.b.Z(a.a,b.a)},
$S:36}
O.hp.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.b.U(b+3,4)*4))},
$S:7}
O.hq.prototype={
$2:function(a,b){return C.b.Z(a.a,b.a)},
$S:37}
O.hd.prototype={
ag:function(){var s,r=this
r.bQ()
s=r.f
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.P(new D.C(r.b,s,1))}}}
O.c7.prototype={
P:function(a){return this.a.P(a)},
b5:function(){return this.P(null)},
ag:function(){},
cb:function(a){var s,r,q=this
if(!q.c.l(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.ag()
s=q.a
s.a=null
s.P(null)}},
sd_:function(a){var s,r=this,q=r.c
if(!q.b)r.cb(new A.aa(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gt().E(0,r.gaI())
s=r.d
r.d=a
a.gt().n(0,r.gaI())
r.a.P(new D.C(r.b+".texture2D",s,r.d))}}}
O.he.prototype={}
O.c8.prototype={
ca:function(a){var s,r=this
if(!r.f.l(0,a)){s=r.f
r.f=a
r.a.P(new D.C(r.b+".color",s,a))}},
ag:function(){this.bQ()
this.ca(new V.M(1,1,1))},
saL:function(a,b){this.cb(new A.aa(!0,this.c.b,!1))
this.ca(b)}}
O.hg.prototype={}
O.hh.prototype={
ag:function(){var s,r=this
r.bR()
s=r.ch
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.P(new D.C(r.b+".refraction",s,1))}}}
O.hi.prototype={
ag:function(){var s,r=this
r.bR()
s=r.ch
$.z().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
r.a.P(new D.C(r.b+".shininess",s,100))}}}
O.hP.prototype={}
T.hQ.prototype={}
T.cn.prototype={}
T.e6.prototype={
gV:function(a){var s=this.d
if(s==null)s=this.c
s=s==null?null:s.gV(s)
return s===!0},
gt:function(){var s=this.f
return s==null?this.f=D.ab():s},
ai:function(a){var s
if(this.d==null){s=this.d=this.c
if(s!=null)s.ai(a)}},
aW:function(a){var s=this.d
if(s!=null){s.aW(a)
this.d=null}}}
T.e7.prototype={
gV:function(a){return this.d},
ai:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
aW:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.hR.prototype={
ax:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.e7(o)
W.R(s,"load",new T.hS(this,r,s,!1,o,!1,!1),!1)
return r},
ex:function(a,b,c){var s,r,q,p,o,n
b=V.jx(b)
s=a.width
r=V.jx(s==null?512:s)
s=a.height
q=V.jx(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.j0()
p.width=r
p.height=q
o=t.b.a(C.n.d4(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.mZ(o.getImageData(0,0,s,n==null?512:n))}}}
T.hS.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.ex(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.L.fq(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.cp()}++s.e},
$S:2}
X.h2.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.ab():s}}
X.dK.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.ab():s},
ao:function(a){var s=this.f
return s==null?null:s.M(a)},
dl:function(){return this.ao(null)},
saQ:function(a){var s,r,q=this
if(!J.I(q.b,a)){s=q.b
if(s!=null)s.gt().E(0,q.gbV())
r=q.b
q.b=a
if(a!=null)a.gt().n(0,q.gbV())
q.ao(new D.C("mover",r,q.b))}}}
X.hN.prototype={}
V.iX.prototype={
$1:function(a){var s=C.d.bJ(this.a.gf_(),2)
if(s!=="0.00")P.jy(s+" fps")},
$S:18}
V.hH.prototype={
ci:function(a){var s,r,q,p,o,n,m=this.eD(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.K(C.a.f1(a)),s=new P.bC(m.d0(new H.bo(s,s.gj(s))).a());s.q();){r=s.gD(s)
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
if(H.kw(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.m2(C.H,r,C.m,!1)
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
eD:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.hW(P.L(s,t.t),P.L(s,t.u),P.jH(s))
h.d=h.F(0,q)
s=h.F(0,q).m(0,p)
r=new K.O([])
r.N(new H.K("*"))
s.a.push(r)
s.c=!0
s=[]
h.F(0,p).m(0,p).a.push(new K.aB(s))
r=new K.O([])
r.N(new H.K("*"))
s.push(r)
r=h.F(0,p).m(0,"BoldEnd")
s=new K.O([])
s.N(new H.K("*"))
r.a.push(s)
r.c=!0
r=h.F(0,q).m(0,o)
s=new K.O([])
s.N(new H.K("_"))
r.a.push(s)
r.c=!0
r=[]
h.F(0,o).m(0,o).a.push(new K.aB(r))
s=new K.O([])
s.N(new H.K("_"))
r.push(s)
s=h.F(0,o).m(0,n)
r=new K.O([])
r.N(new H.K("_"))
s.a.push(r)
s.c=!0
s=h.F(0,q).m(0,m)
r=new K.O([])
r.N(new H.K("`"))
s.a.push(r)
s.c=!0
s=[]
h.F(0,m).m(0,m).a.push(new K.aB(s))
r=new K.O([])
r.N(new H.K("`"))
s.push(r)
r=h.F(0,m).m(0,"CodeEnd")
s=new K.O([])
s.N(new H.K("`"))
r.a.push(s)
r.c=!0
r=h.F(0,q).m(0,l)
s=new K.O([])
s.N(new H.K("["))
r.a.push(s)
r.c=!0
r=h.F(0,l).m(0,k)
s=new K.O([])
s.N(new H.K("|"))
r.a.push(s)
s=h.F(0,l).m(0,j)
r=new K.O([])
r.N(new H.K("]"))
s.a.push(r)
s.c=!0
s=[]
h.F(0,l).m(0,l).a.push(new K.aB(s))
r=new K.O([])
r.N(new H.K("|]"))
s.push(r)
r=h.F(0,k).m(0,j)
s=new K.O([])
s.N(new H.K("]"))
r.a.push(s)
r.c=!0
r=[]
h.F(0,k).m(0,k).a.push(new K.aB(r))
s=new K.O([])
s.N(new H.K("|]"))
r.push(s)
h.F(0,q).m(0,i).a.push(new K.fA())
s=[]
h.F(0,i).m(0,i).a.push(new K.aB(s))
r=new K.O([])
r.N(new H.K("*_`["))
s.push(r)
r=h.F(0,"BoldEnd")
r.d=r.a.aU(p)
r=h.F(0,n)
r.d=r.a.aU(o)
r=h.F(0,"CodeEnd")
r.d=r.a.aU(m)
r=h.F(0,j)
r.d=r.a.aU("Link")
r=h.F(0,i)
r.d=r.a.aU(i)
return this.b=h}}
V.hJ.prototype={
$1:function(a){P.jW(C.f,new V.hI(this.a))},
$S:2}
V.hI.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a5(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.v(-0.01*s)+"px"
q.top=r},
$S:1}
N.iV.prototype={
$1:function(a){var s=this.a,r=s.b,q=s.e,p=q.length
r=(r+1)%p
if(r<p){s.b=r
s.c=q[r]
s=s.f
if(s!=null)s.cp()}return null},
$S:18};(function aliases(){var s=J.a.prototype
s.da=s.i
s=J.b0.prototype
s.dc=s.i
s=K.dg.prototype
s.d9=s.ay
s.b4=s.i
s=O.c7.prototype
s.bQ=s.ag
s=O.c8.prototype
s.bR=s.ag})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"me","lc",38)
r(P,"mT","lG",8)
r(P,"mU","lH",8)
r(P,"mV","lI",8)
q(P,"ko","mO",1)
r(W,"on","fS",29)
var k
p(k=E.bk.prototype,"gcR",0,0,null,["$1","$0"],["cS","fa"],0,0)
p(k,"gcP",0,0,null,["$1","$0"],["cQ","f9"],0,0)
p(k,"gcN",0,0,null,["$1","$0"],["cO","f6"],0,0)
o(k,"gf4","f5",5)
o(k,"gf7","f8",5)
p(k=E.e8.prototype,"gbS",0,0,null,["$1","$0"],["bU","bT"],0,0)
n(k,"gfm","cX",1)
m(k=X.et.prototype,"gdY","dZ",2)
m(k,"gdM","dN",2)
m(k,"gdS","dT",3)
m(k,"ge1","e2",15)
m(k,"ge_","e0",15)
m(k,"ge5","e6",3)
m(k,"ge9","ea",3)
m(k,"gdW","dX",3)
m(k,"ge7","e8",3)
m(k,"gdU","dV",3)
m(k,"geb","ec",26)
m(k,"ged","ee",2)
m(k,"geo","ep",11)
m(k,"gek","el",11)
m(k,"gem","en",11)
p(D.bT.prototype,"gdg",0,0,null,["$1","$0"],["ac","dh"],0,0)
p(k=D.c3.prototype,"gc5",0,0,null,["$1","$0"],["c6","e3"],0,0)
m(k,"geg","eh",28)
o(k,"gdG","dH",13)
o(k,"gei","ej",13)
l(V.by.prototype,"gj","bB",16)
l(V.y.prototype,"gj","bB",16)
p(k=M.db.prototype,"ga7",0,0,null,["$1","$0"],["ad","di"],0,0)
o(k,"gdO","dP",5)
o(k,"gdQ","dR",5)
p(k=O.du.prototype,"gaI",0,0,null,["$1","$0"],["P","b5"],0,0)
p(k,"gc7",0,0,null,["$1","$0"],["c8","ew"],0,0)
o(k,"gdI","dJ",17)
o(k,"gdK","dL",17)
p(O.c7.prototype,"gaI",0,0,null,["$1","$0"],["P","b5"],0,0)
p(X.dK.prototype,"gbV",0,0,null,["$1","$0"],["ao","dl"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.j7,J.a,J.a2,P.D,P.cw,P.h,H.bo,P.di,H.bX,H.er,H.i_,H.hx,H.f8,H.bi,P.P,H.h9,H.dr,H.h4,H.a6,H.eN,P.cI,P.bB,P.bC,P.ex,P.e1,P.e2,P.iE,P.cN,P.ix,P.cv,P.A,P.dU,P.d4,P.iD,P.W,P.aV,P.dJ,P.cm,P.eK,P.h1,P.a4,P.ba,W.fK,W.j3,W.jf,W.E,W.bY,P.cK,K.fA,K.dg,K.O,L.dZ,L.e9,L.ea,L.hW,O.bj,O.ca,E.fG,E.bk,E.bh,E.bs,E.eH,E.hA,E.e8,Z.ev,Z.ip,Z.bP,Z.bZ,Z.aF,D.fI,D.bl,D.X,X.bQ,X.dn,X.h6,X.hb,X.bq,X.hu,X.hX,X.et,D.bT,V.M,V.aS,V.fV,V.c9,V.bp,V.a5,V.a_,V.dN,V.dP,V.by,V.y,M.db,A.fC,A.fD,A.aa,A.aQ,A.aU,A.b7,A.b9,A.hf,A.eh,A.ei,A.el,A.eo,A.i2,A.i8,F.aj,F.fZ,F.h7,F.h8,F.hy,F.hF,F.cl,F.bv,F.b8,F.cq,F.u,F.bz,F.aE,F.ik,F.il,F.cr,O.hP,O.c7,O.hg,T.hR,X.hN,X.dK,V.hH])
q(J.a,[J.dj,J.c1,J.b0,J.ac,J.bn,J.b_,H.cd,W.b,W.fz,W.d3,W.bR,W.ai,W.B,W.eC,W.a3,W.fN,W.fO,W.eD,W.bV,W.eF,W.fP,W.i,W.eL,W.al,W.h3,W.eP,W.aX,W.ha,W.hr,W.eT,W.eU,W.an,W.eV,W.eX,W.ao,W.f0,W.f2,W.aq,W.f3,W.ar,W.f9,W.a7,W.fd,W.hU,W.as,W.ff,W.hY,W.ia,W.fl,W.fn,W.fp,W.fr,W.ft,P.b2,P.eR,P.b5,P.eZ,P.hz,P.fa,P.bc,P.fh,P.fE,P.ey,P.bu,P.f6])
q(J.b0,[J.dL,J.bw,J.am])
r(J.dl,J.ac)
q(J.bn,[J.c0,J.dk])
q(P.D,[H.dp,P.ed,H.dm,H.eq,H.dS,H.eI,P.d0,P.dG,P.ag,P.es,P.ep,P.e_,P.d5,P.d8])
r(P.c4,P.cw)
q(P.c4,[H.bx,W.eA,W.ez,P.de])
r(H.K,H.bx)
q(P.h,[H.j,H.b3,H.cs,P.c_])
r(H.bW,H.b3)
q(P.di,[H.c6,H.ew])
r(H.cg,P.ed)
q(H.bi,[H.hO,H.h5,H.iR,H.iS,H.iT,P.ir,P.iq,P.is,P.it,P.iC,P.iB,P.iM,P.iz,P.iA,P.hc,P.fQ,P.fR,W.hs,W.ht,W.hE,W.hM,W.iu,P.iH,P.iO,P.h_,P.h0,P.fF,E.hB,E.hC,E.hD,E.hT,D.fX,D.fY,F.iF,F.hG,F.io,F.im,F.ih,F.ii,O.hj,O.hk,O.hl,O.hm,O.hn,O.ho,O.hp,O.hq,T.hS,V.iX,V.hJ,V.hI,N.iV])
q(H.hO,[H.hL,H.bM])
r(P.c5,P.P)
r(H.N,P.c5)
r(H.az,H.j)
r(H.br,H.cd)
q(H.br,[H.cy,H.cA])
r(H.cz,H.cy)
r(H.b4,H.cz)
r(H.cB,H.cA)
r(H.cc,H.cB)
q(H.cc,[H.dA,H.dB,H.dC,H.dD,H.dE,H.ce,H.dF])
r(H.cJ,H.eI)
r(P.cF,P.c_)
r(P.iy,P.iE)
r(P.cC,P.cN)
r(P.cu,P.cC)
r(P.d7,P.e2)
r(P.fT,P.d4)
r(P.ib,P.fT)
r(P.ic,P.d7)
q(P.ag,[P.cj,P.dh])
q(W.b,[W.q,W.dd,W.ad,W.cD,W.ae,W.a0,W.cG,W.eu,W.bA,P.d2,P.ay])
q(W.q,[W.G,W.a9])
q(W.G,[W.l,P.k])
q(W.l,[W.cZ,W.d_,W.aR,W.df,W.bm,W.dT])
r(W.fJ,W.ai)
r(W.bS,W.eC)
q(W.a3,[W.fL,W.fM])
r(W.eE,W.eD)
r(W.bU,W.eE)
r(W.eG,W.eF)
r(W.da,W.eG)
r(W.ak,W.d3)
r(W.eM,W.eL)
r(W.dc,W.eM)
r(W.eQ,W.eP)
r(W.aW,W.eQ)
r(W.au,W.i)
q(W.au,[W.b1,W.Z,W.bb])
r(W.dx,W.eT)
r(W.dy,W.eU)
r(W.eW,W.eV)
r(W.dz,W.eW)
r(W.eY,W.eX)
r(W.cf,W.eY)
r(W.f1,W.f0)
r(W.dM,W.f1)
r(W.dR,W.f2)
r(W.cE,W.cD)
r(W.dW,W.cE)
r(W.f4,W.f3)
r(W.dX,W.f4)
r(W.e0,W.f9)
r(W.fe,W.fd)
r(W.e4,W.fe)
r(W.cH,W.cG)
r(W.e5,W.cH)
r(W.fg,W.ff)
r(W.eb,W.fg)
r(W.aG,W.Z)
r(W.fm,W.fl)
r(W.eB,W.fm)
r(W.ct,W.bV)
r(W.fo,W.fn)
r(W.eO,W.fo)
r(W.fq,W.fp)
r(W.cx,W.fq)
r(W.fs,W.fr)
r(W.f5,W.fs)
r(W.fu,W.ft)
r(W.fc,W.fu)
r(W.eJ,P.e1)
r(P.eS,P.eR)
r(P.dq,P.eS)
r(P.f_,P.eZ)
r(P.dH,P.f_)
r(P.fb,P.fa)
r(P.e3,P.fb)
r(P.fi,P.fh)
r(P.ec,P.fi)
r(P.d1,P.ey)
r(P.dI,P.ay)
r(P.f7,P.f6)
r(P.dY,P.f7)
q(K.dg,[K.aB,L.hZ])
q(E.fG,[Z.bO,A.ck,T.hQ])
q(D.X,[D.aY,D.aZ,D.C])
r(D.c3,O.bj)
r(U.hv,D.fI)
q(U.hv,[U.d6,U.dQ])
r(A.dv,A.ck)
q(A.i2,[A.co,A.i5,A.i6,A.i7,A.i3,A.ee,A.i4,A.ef,A.eg,A.i9,A.ej,A.ek,A.em,A.en])
r(F.hK,F.fZ)
r(F.i1,F.h8)
r(F.ij,F.ik)
r(F.hw,F.il)
r(O.du,O.hP)
q(O.c7,[O.hd,O.he,O.c8])
q(O.c8,[O.hh,O.hi])
r(T.cn,T.hQ)
q(T.cn,[T.e6,T.e7])
r(X.h2,X.hN)
s(H.bx,H.er)
s(H.cy,P.A)
s(H.cz,H.bX)
s(H.cA,P.A)
s(H.cB,H.bX)
s(P.cw,P.A)
s(P.cN,P.dU)
s(W.eC,W.fK)
s(W.eD,P.A)
s(W.eE,W.E)
s(W.eF,P.A)
s(W.eG,W.E)
s(W.eL,P.A)
s(W.eM,W.E)
s(W.eP,P.A)
s(W.eQ,W.E)
s(W.eT,P.P)
s(W.eU,P.P)
s(W.eV,P.A)
s(W.eW,W.E)
s(W.eX,P.A)
s(W.eY,W.E)
s(W.f0,P.A)
s(W.f1,W.E)
s(W.f2,P.P)
s(W.cD,P.A)
s(W.cE,W.E)
s(W.f3,P.A)
s(W.f4,W.E)
s(W.f9,P.P)
s(W.fd,P.A)
s(W.fe,W.E)
s(W.cG,P.A)
s(W.cH,W.E)
s(W.ff,P.A)
s(W.fg,W.E)
s(W.fl,P.A)
s(W.fm,W.E)
s(W.fn,P.A)
s(W.fo,W.E)
s(W.fp,P.A)
s(W.fq,W.E)
s(W.fr,P.A)
s(W.fs,W.E)
s(W.ft,P.A)
s(W.fu,W.E)
s(P.eR,P.A)
s(P.eS,W.E)
s(P.eZ,P.A)
s(P.f_,W.E)
s(P.fa,P.A)
s(P.fb,W.E)
s(P.fh,P.A)
s(P.fi,W.E)
s(P.ey,P.P)
s(P.f6,P.A)
s(P.f7,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{m:"int",T:"double",U:"num",x:"String",bd:"bool",a4:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([X?])","~()","~(i)","~(Z)","~(x,@)","~(m,h<bk>)","~(aj)","~(m,m)","~(~())","a4()","~(X)","~(bb)","~(~(X))","~(m,h<c2>)","x(m)","~(b1)","T()","~(m,h<bp>)","~(hV)","~(@,@)","@(@)","G(q)","@(@,x)","@(x)","~(J?,J?)","~(U)","~(aG)","a4(@)","bd(h<c2>)","x(b)","~(cq,T,T)","bO(m)","~(x,x)","a4(~())","m(aQ,aQ)","m(aU,aU)","m(b7,b7)","m(b9,b9)","m(@,@)","~(@)","bd(q)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.m_(v.typeUniverse,JSON.parse('{"dL":"b0","bw":"b0","am":"b0","nm":"i","ny":"i","no":"ay","nn":"b","nF":"b","nI":"b","nl":"k","nA":"k","np":"l","nD":"l","nB":"q","nx":"q","o5":"a0","nt":"au","nq":"a9","nJ":"a9","nH":"Z","nC":"aW","nu":"B","nv":"a7","nE":"b4","dj":{"bd":[]},"ac":{"n":["1"],"j":["1"],"h":["1"],"p":["1"]},"dl":{"n":["1"],"j":["1"],"h":["1"],"p":["1"]},"bn":{"T":[],"U":[]},"c0":{"T":[],"m":[],"U":[]},"dk":{"T":[],"U":[]},"b_":{"x":[],"p":["@"]},"dp":{"D":[]},"K":{"n":["m"],"j":["m"],"h":["m"]},"j":{"h":["1"]},"b3":{"h":["2"]},"bW":{"j":["2"],"h":["2"]},"cs":{"h":["1"]},"bx":{"n":["1"],"j":["1"],"h":["1"]},"cg":{"D":[]},"dm":{"D":[]},"eq":{"D":[]},"dS":{"D":[]},"N":{"Q":["1","2"],"P.V":"2"},"az":{"j":["1"],"h":["1"]},"br":{"t":["1"],"p":["1"]},"b4":{"t":["T"],"n":["T"],"j":["T"],"p":["T"],"h":["T"]},"cc":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"dA":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"dB":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"dC":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"dD":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"dE":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"ce":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"dF":{"t":["m"],"n":["m"],"j":["m"],"p":["m"],"h":["m"]},"eI":{"D":[]},"cJ":{"D":[]},"cI":{"hV":[]},"cF":{"h":["1"]},"cu":{"j":["1"],"h":["1"]},"c_":{"h":["1"]},"c4":{"n":["1"],"j":["1"],"h":["1"]},"c5":{"Q":["1","2"]},"P":{"Q":["1","2"]},"cC":{"j":["1"],"h":["1"]},"T":{"U":[]},"m":{"U":[]},"n":{"j":["1"],"h":["1"]},"d0":{"D":[]},"ed":{"D":[]},"dG":{"D":[]},"ag":{"D":[]},"cj":{"D":[]},"dh":{"D":[]},"es":{"D":[]},"ep":{"D":[]},"e_":{"D":[]},"d5":{"D":[]},"dJ":{"D":[]},"cm":{"D":[]},"d8":{"D":[]},"G":{"q":[],"b":[]},"b1":{"i":[]},"Z":{"i":[]},"q":{"b":[]},"ad":{"b":[]},"ae":{"b":[]},"a0":{"b":[]},"bb":{"i":[]},"au":{"i":[]},"aG":{"Z":[],"i":[]},"l":{"G":[],"q":[],"b":[]},"cZ":{"G":[],"q":[],"b":[]},"d_":{"G":[],"q":[],"b":[]},"aR":{"G":[],"q":[],"b":[]},"a9":{"q":[],"b":[]},"bU":{"n":["aD<U>"],"t":["aD<U>"],"j":["aD<U>"],"h":["aD<U>"],"p":["aD<U>"]},"bV":{"aD":["U"]},"da":{"n":["x"],"t":["x"],"j":["x"],"h":["x"],"p":["x"]},"eA":{"n":["G"],"j":["G"],"h":["G"]},"dc":{"n":["ak"],"t":["ak"],"j":["ak"],"h":["ak"],"p":["ak"]},"dd":{"b":[]},"df":{"G":[],"q":[],"b":[]},"aW":{"n":["q"],"t":["q"],"j":["q"],"h":["q"],"p":["q"]},"bm":{"G":[],"q":[],"b":[]},"dx":{"Q":["x","@"],"P.V":"@"},"dy":{"Q":["x","@"],"P.V":"@"},"dz":{"n":["an"],"t":["an"],"j":["an"],"h":["an"],"p":["an"]},"ez":{"n":["q"],"j":["q"],"h":["q"]},"cf":{"n":["q"],"t":["q"],"j":["q"],"h":["q"],"p":["q"]},"dM":{"n":["ao"],"t":["ao"],"j":["ao"],"h":["ao"],"p":["ao"]},"dR":{"Q":["x","@"],"P.V":"@"},"dT":{"G":[],"q":[],"b":[]},"dW":{"n":["ad"],"t":["ad"],"b":[],"j":["ad"],"h":["ad"],"p":["ad"]},"dX":{"n":["aq"],"t":["aq"],"j":["aq"],"h":["aq"],"p":["aq"]},"e0":{"Q":["x","x"],"P.V":"x"},"e4":{"n":["a0"],"t":["a0"],"j":["a0"],"h":["a0"],"p":["a0"]},"e5":{"n":["ae"],"t":["ae"],"b":[],"j":["ae"],"h":["ae"],"p":["ae"]},"eb":{"n":["as"],"t":["as"],"j":["as"],"h":["as"],"p":["as"]},"eu":{"b":[]},"bA":{"b":[]},"eB":{"n":["B"],"t":["B"],"j":["B"],"h":["B"],"p":["B"]},"ct":{"aD":["U"]},"eO":{"n":["al?"],"t":["al?"],"j":["al?"],"h":["al?"],"p":["al?"]},"cx":{"n":["q"],"t":["q"],"j":["q"],"h":["q"],"p":["q"]},"f5":{"n":["ar"],"t":["ar"],"j":["ar"],"h":["ar"],"p":["ar"]},"fc":{"n":["a7"],"t":["a7"],"j":["a7"],"h":["a7"],"p":["a7"]},"cK":{"aX":[]},"de":{"n":["G"],"j":["G"],"h":["G"]},"dq":{"n":["b2"],"j":["b2"],"h":["b2"]},"dH":{"n":["b5"],"j":["b5"],"h":["b5"]},"e3":{"n":["x"],"j":["x"],"h":["x"]},"k":{"G":[],"q":[],"b":[]},"ec":{"n":["bc"],"j":["bc"],"h":["bc"]},"d1":{"Q":["x","@"],"P.V":"@"},"d2":{"b":[]},"ay":{"b":[]},"dI":{"b":[]},"dY":{"n":["Q<@,@>"],"j":["Q<@,@>"],"h":["Q<@,@>"]},"bj":{"h":["1"]},"aY":{"X":[]},"aZ":{"X":[]},"C":{"X":[]},"bT":{"c2":[]},"c3":{"h":["c2"]},"dv":{"ck":[]},"e6":{"cn":[]},"e7":{"cn":[]},"aD":{"o8":["1"]}}'))
H.lZ(v.typeUniverse,JSON.parse('{"ac":1,"dl":1,"a2":1,"j":1,"bo":1,"b3":2,"bW":2,"c6":2,"cs":1,"ew":1,"bX":1,"er":1,"bx":1,"az":1,"dr":1,"br":1,"bC":1,"cF":1,"e1":1,"e2":2,"cv":1,"c_":1,"c4":1,"A":1,"c5":2,"P":2,"dU":1,"cC":1,"cw":1,"cN":1,"d4":2,"d7":2,"h":1,"n":1,"di":1,"eJ":1,"E":1,"bY":1,"bj":1,"aY":1,"aZ":1,"C":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.n2
return{D:s("bP"),E:s("aR"),b:s("bR"),O:s("j<@>"),h:s("G"),C:s("D"),B:s("i"),Z:s("nz"),I:s("aX"),l:s("bm"),m:s("ac<@>"),e:s("p<@>"),T:s("c1"),M:s("am"),p:s("t<@>"),V:s("N<m,bd>"),y:s("N<m,m>"),q:s("n<eh>"),L:s("n<ei>"),U:s("n<el>"),R:s("n<eo>"),c:s("n<@>"),f:s("Q<@,@>"),P:s("a4"),K:s("J"),J:s("aD<U>"),k:s("ck"),N:s("x"),Y:s("hV"),d:s("e9"),n:s("ee"),v:s("co"),g:s("ef"),F:s("eg"),Q:s("ej"),j:s("ek"),G:s("em"),a:s("en"),o:s("bw"),w:s("bd"),i:s("T"),z:s("@"),S:s("m"),A:s("0&*"),_:s("J*"),r:s("jF<a4>?"),X:s("J?"),s:s("bu?"),t:s("dZ?"),u:s("ea?"),W:s("co?"),H:s("U")}})();(function constants(){var s=hunkHelpers.makeConstList
C.n=W.aR.prototype
C.E=J.a.prototype
C.a=J.ac.prototype
C.b=J.c0.prototype
C.F=J.c1.prototype
C.d=J.bn.prototype
C.c=J.b_.prototype
C.G=J.am.prototype
C.p=J.dL.prototype
C.L=P.bu.prototype
C.h=J.bw.prototype
C.q=W.aG.prototype
C.r=W.bA.prototype
C.t=new E.bh("Browser.chrome")
C.i=new E.bh("Browser.firefox")
C.j=new E.bh("Browser.edge")
C.u=new E.bh("Browser.other")
C.k=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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
C.l=function(hooks) { return hooks; }

C.B=new P.dJ()
C.m=new P.ib()
C.C=new P.ic()
C.e=new P.iy()
C.f=new P.aV(0)
C.D=new P.aV(5e6)
C.H=s([0,0,65498,45055,65535,34815,65534,18431])
C.I=new E.bs("OperatingSystem.windows")
C.o=new E.bs("OperatingSystem.mac")
C.J=new E.bs("OperatingSystem.linux")
C.K=new E.bs("OperatingSystem.other")
C.M=new P.bB(null,2)})();(function staticFields(){$.iv=null
$.ah=0
$.bN=null
$.jB=null
$.kq=null
$.kn=null
$.ku=null
$.iP=null
$.iU=null
$.ju=null
$.bD=null
$.cR=null
$.cS=null
$.jo=!1
$.af=C.e
$.Y=[]
$.fU=null
$.jJ=null
$.jL=null
$.b6=null
$.ap=null
$.jP=null
$.k1=null
$.id=null
$.ie=null
$.ig=null
$.k0=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"nw","kB",function(){return H.n4("_$dart_dartClosure")})
s($,"nK","kD",function(){return H.at(H.i0({
toString:function(){return"$receiver$"}}))})
s($,"nL","kE",function(){return H.at(H.i0({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"nM","kF",function(){return H.at(H.i0(null))})
s($,"nN","kG",function(){return H.at(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"nQ","kJ",function(){return H.at(H.i0(void 0))})
s($,"nR","kK",function(){return H.at(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"nP","kI",function(){return H.at(H.jZ(null))})
s($,"nO","kH",function(){return H.at(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"nT","kM",function(){return H.at(H.jZ(void 0))})
s($,"nS","kL",function(){return H.at(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"o6","jA",function(){return P.lF()})
s($,"o9","kQ",function(){return P.lt("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"o_","kP",function(){return Z.a8(0)})
s($,"nU","kN",function(){return Z.a8(511)})
s($,"o1","aO",function(){return Z.a8(1)})
s($,"o0","aN",function(){return Z.a8(2)})
s($,"nW","aM",function(){return Z.a8(4)})
s($,"o2","aP",function(){return Z.a8(8)})
s($,"o3","bf",function(){return Z.a8(16)})
s($,"nX","cX",function(){return Z.a8(32)})
s($,"nY","cY",function(){return Z.a8(64)})
s($,"nZ","kO",function(){return Z.a8(96)})
s($,"o4","bL",function(){return Z.a8(128)})
s($,"nV","aL",function(){return Z.a8(256)})
s($,"ns","kA",function(){return new V.fV()})
r($,"nr","z",function(){return $.kA()})
r($,"nG","kC",function(){var q=V.jM(),p=V.jd(),o=$.k0
return V.jK(q,p,o==null?$.k0=V.lC(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cd,ArrayBufferView:H.cd,Float32Array:H.b4,Float64Array:H.b4,Int16Array:H.dA,Int32Array:H.dB,Int8Array:H.dC,Uint16Array:H.dD,Uint32Array:H.dE,Uint8ClampedArray:H.ce,CanvasPixelArray:H.ce,Uint8Array:H.dF,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fz,HTMLAnchorElement:W.cZ,HTMLAreaElement:W.d_,Blob:W.d3,HTMLCanvasElement:W.aR,CanvasRenderingContext2D:W.bR,CDATASection:W.a9,CharacterData:W.a9,Comment:W.a9,ProcessingInstruction:W.a9,Text:W.a9,CSSPerspective:W.fJ,CSSCharsetRule:W.B,CSSConditionRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bS,MSStyleCSSProperties:W.bS,CSS2Properties:W.bS,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.fL,CSSUnparsedValue:W.fM,DataTransferItemList:W.fN,DOMException:W.fO,ClientRectList:W.bU,DOMRectList:W.bU,DOMRectReadOnly:W.bV,DOMStringList:W.da,DOMTokenList:W.fP,Element:W.G,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.ak,FileList:W.dc,FileWriter:W.dd,HTMLFormElement:W.df,Gamepad:W.al,History:W.h3,HTMLCollection:W.aW,HTMLFormControlsCollection:W.aW,HTMLOptionsCollection:W.aW,ImageData:W.aX,HTMLImageElement:W.bm,KeyboardEvent:W.b1,Location:W.ha,MediaList:W.hr,MIDIInputMap:W.dx,MIDIOutputMap:W.dy,MimeType:W.an,MimeTypeArray:W.dz,PointerEvent:W.Z,MouseEvent:W.Z,DragEvent:W.Z,Document:W.q,DocumentFragment:W.q,HTMLDocument:W.q,ShadowRoot:W.q,XMLDocument:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeList:W.cf,RadioNodeList:W.cf,Plugin:W.ao,PluginArray:W.dM,RTCStatsReport:W.dR,HTMLSelectElement:W.dT,SourceBuffer:W.ad,SourceBufferList:W.dW,SpeechGrammar:W.aq,SpeechGrammarList:W.dX,SpeechRecognitionResult:W.ar,Storage:W.e0,CSSStyleSheet:W.a7,StyleSheet:W.a7,TextTrack:W.ae,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.e4,TextTrackList:W.e5,TimeRanges:W.hU,Touch:W.as,TouchEvent:W.bb,TouchList:W.eb,TrackDefaultList:W.hY,CompositionEvent:W.au,FocusEvent:W.au,TextEvent:W.au,UIEvent:W.au,URL:W.ia,VideoTrackList:W.eu,WheelEvent:W.aG,Window:W.bA,DOMWindow:W.bA,CSSRuleList:W.eB,ClientRect:W.ct,DOMRect:W.ct,GamepadList:W.eO,NamedNodeMap:W.cx,MozNamedAttrMap:W.cx,SpeechRecognitionResultList:W.f5,StyleSheetList:W.fc,SVGLength:P.b2,SVGLengthList:P.dq,SVGNumber:P.b5,SVGNumberList:P.dH,SVGPointList:P.hz,SVGStringList:P.e3,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bc,SVGTransformList:P.ec,AudioBuffer:P.fE,AudioParamMap:P.d1,AudioTrackList:P.d2,AudioContext:P.ay,webkitAudioContext:P.ay,BaseAudioContext:P.ay,OfflineAudioContext:P.dI,WebGL2RenderingContext:P.bu,SQLResultSetRowList:P.dY})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.br.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.b4.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=N.nc
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
