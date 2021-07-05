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
a[c]=function(){a[c]=function(){H.n2(b)}
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
if(a[b]!==s)H.n3(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jh(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={iX:function iX(){},
mE:function(a,b,c){return a},
li:function(a,b){if(t.O.b(a))return new H.bV(a,b)
return new H.b1(a,b)},
h0:function(){return new P.br("No element")},
lb:function(){return new P.br("Too many elements")},
lB:function(a,b){H.dS(a,0,J.aT(a)-1,b)},
dS:function(a,b,c,d){if(c-b<=32)H.lA(a,b,c,d)
else H.lz(a,b,c,d)},
lA:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.cQ(a);s<=c;++s){q=r.i(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.i(a,p-1),q)
if(typeof o!=="number")return o.V()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.i(a,n))
p=n}r.m(a,p,q)}},
lz:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.d.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.a0(a4+a5,2),f=g-j,e=g+j,d=J.cQ(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
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
d.m(a3,f,d.i(a3,a4))
d.m(a3,e,d.i(a3,a5))
r=a4+1
q=a5-1
if(J.K(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.i(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.m(a3,p,d.i(a3,r))
d.m(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.i(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.m(a3,p,d.i(a3,r))
l=r+1
d.m(a3,r,d.i(a3,q))
d.m(a3,q,o)
q=m
r=l
break}else{d.m(a3,p,d.i(a3,q))
d.m(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.m(a3,p,d.i(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.i(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.m(a3,p,d.i(a3,r))
l=r+1
d.m(a3,r,d.i(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.i(a3,q))
d.m(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.m(a3,a4,d.i(a3,a2))
d.m(a3,a2,b)
a2=q+1
d.m(a3,a5,d.i(a3,a2))
d.m(a3,a2,a0)
H.dS(a3,a4,r-2,a6)
H.dS(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.K(a6.$2(d.i(a3,r),b),0);)++r
for(;J.K(a6.$2(d.i(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.i(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.m(a3,p,d.i(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.i(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.i(a3,q),b)<0){d.m(a3,p,d.i(a3,r))
l=r+1
d.m(a3,r,d.i(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.i(a3,q))
d.m(a3,q,o)}q=m
break}}H.dS(a3,r,q,a6)}else H.dS(a3,r,q,a6)},
dn:function dn(a){this.a=a},
k:function k(a){this.a=a},
h:function h(){},
c6:function c6(){},
aJ:function aJ(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b1:function b1(a,b){this.a=a
this.b=b},
bV:function bV(a,b){this.a=a
this.b=b},
c8:function c8(a,b){this.a=null
this.b=a
this.c=b},
c9:function c9(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
en:function en(a,b){this.a=a
this.b=b},
bY:function bY(){},
eg:function eg(){},
bu:function bu(){},
kx:function(a){var s,r=H.kw(a)
if(r!=null)return r
s="minified:"+a
return s},
mU:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.cU(a)
return s},
ch:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
ci:function(a){return H.lk(a)},
lk:function(a){var s,r,q,p
if(a instanceof P.J)return H.a2(H.bF(a),null)
if(J.cP(a)===C.K||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a2(H.bF(a),null)},
jI:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lt:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.y)(a),++r){q=a[r]
if(!H.iA(q))throw H.c(H.iC(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.d.aC(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.iC(q))}return H.jI(p)},
ls:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.iA(q))throw H.c(H.iC(q))
if(q<0)throw H.c(H.iC(q))
if(q>65535)return H.lt(a)}return H.jI(a)},
iZ:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.d.aC(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aL(a,0,1114111,null,null))},
bp:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lr:function(a){var s=H.bp(a).getFullYear()+0
return s},
lp:function(a){var s=H.bp(a).getMonth()+1
return s},
ll:function(a){var s=H.bp(a).getDate()+0
return s},
lm:function(a){var s=H.bp(a).getHours()+0
return s},
lo:function(a){var s=H.bp(a).getMinutes()+0
return s},
lq:function(a){var s=H.bp(a).getSeconds()+0
return s},
ln:function(a){var s=H.bp(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.aT(a)
throw H.c(H.bE(a,b))},
bE:function(a,b){var s,r="index"
if(!H.iA(b))return new P.a9(!0,b,r,null)
s=J.aT(a)
if(b<0||b>=s)return P.D(b,a,r,null,s)
return P.dL(b,r)},
mI:function(a,b,c){if(a>c)return P.aL(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aL(b,a,c,"end",null)
return new P.a9(!0,b,"end",null)},
iC:function(a){return new P.a9(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dD()
s=new Error()
s.dartException=a
r=H.n4
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
n4:function(){return J.cU(this.dartException)},
P:function(a){throw H.c(a)},
y:function(a){throw H.c(P.aj(a))},
aw:function(a){var s,r,q,p,o,n
a=H.ku(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.hJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
hK:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jS:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
iY:function(a,b){var s=b==null,r=s?null:b.method
return new H.dl(a,r,s?null:b.receiver)},
aA:function(a){if(a==null)return new H.hh(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bb(a,a.dartException)
return H.mA(a)},
bb:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.d.aC(r,16)&8191)===10)switch(q){case 438:return H.bb(a,H.iY(H.q(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.q(s)+" (Error "+q+")"
return H.bb(a,new H.cg(p,e))}}if(a instanceof TypeError){o=$.kB()
n=$.kC()
m=$.kD()
l=$.kE()
k=$.kH()
j=$.kI()
i=$.kG()
$.kF()
h=$.kK()
g=$.kJ()
f=o.U(s)
if(f!=null)return H.bb(a,H.iY(s,f))
else{f=n.U(s)
if(f!=null){f.method="call"
return H.bb(a,H.iY(s,f))}else{f=m.U(s)
if(f==null){f=l.U(s)
if(f==null){f=k.U(s)
if(f==null){f=j.U(s)
if(f==null){f=i.U(s)
if(f==null){f=l.U(s)
if(f==null){f=h.U(s)
if(f==null){f=g.U(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bb(a,new H.cg(s,f==null?e:f.method))}}return H.bb(a,new H.ef(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cn()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bb(a,new P.a9(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cn()
return a},
ji:function(a){var s
if(a==null)return new H.f0(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f0(a)},
mK:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
mT:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.C("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mT)
a.$identity=s
return s},
l4:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.dX().constructor.prototype):Object.create(new H.bd(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ah
if(typeof r!=="number")return r.O()
$.ah=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jw(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.l0(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jw(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
l0:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kq,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.kZ:H.kY
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
l1:function(a,b,c,d){var s=H.ju
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jw:function(a,b,c){var s,r,q,p,o,n,m
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
o=$.bM
return new Function(p+(o==null?$.bM=H.fz("self"):o)+";return "+n+"."+H.q(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ah
if(typeof p!=="number")return p.O()
$.ah=p+1
m+=p
p="return function("+m+"){return this."
o=$.bM
return new Function(p+(o==null?$.bM=H.fz("self"):o)+"."+H.q(s)+"("+m+");}")()},
l2:function(a,b,c,d){var s=H.ju,r=H.l_
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
l3:function(a,b){var s,r,q,p,o,n,m,l=$.bM
if(l==null)l=$.bM=H.fz("self")
s=$.jt
if(s==null)s=$.jt=H.fz("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.l2(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.q(r)+"(this."+s+");"
n=$.ah
if(typeof n!=="number")return n.O()
$.ah=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.q(r)+"(this."+s+", "+m+");"
n=$.ah
if(typeof n!=="number")return n.O()
$.ah=n+1
return new Function(o+n+"}")()},
jh:function(a,b,c,d,e,f,g){return H.l4(a,b,c,d,!!e,!!f,g)},
kY:function(a,b){return H.fe(v.typeUniverse,H.bF(a.a),b)},
kZ:function(a,b){return H.fe(v.typeUniverse,H.bF(a.c),b)},
ju:function(a){return a.a},
l_:function(a){return a.c},
fz:function(a){var s,r,q,p=new H.bd("self","target","receiver","name"),o=J.iW(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.js("Field name "+a+" not found."))},
n2:function(a){throw H.c(new P.d3(a))},
mN:function(a){return v.getIsolateTag(a)},
n3:function(a){return H.P(new H.dn(a))},
o7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mW:function(a){var s,r,q,p,o,n=$.kp.$1(a),m=$.iF[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iM[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kl.$2(a,n)
if(q!=null){m=$.iF[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iM[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iO(s)
$.iF[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iM[n]=s
return s}if(p==="-"){o=H.iO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ks(a,s)
if(p==="*")throw H.c(P.jT(n))
if(v.leafTags[n]===true){o=H.iO(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ks(a,s)},
ks:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jk(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iO:function(a){return J.jk(a,!1,null,!!a.$it)},
mY:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iO(s)
else return J.jk(s,c,null,null)},
mR:function(){if(!0===$.jj)return
$.jj=!0
H.mS()},
mS:function(){var s,r,q,p,o,n,m,l
$.iF=Object.create(null)
$.iM=Object.create(null)
H.mQ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kt.$1(o)
if(n!=null){m=H.mY(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
mQ:function(){var s,r,q,p,o,n,m=C.y()
m=H.bC(C.z,H.bC(C.A,H.bC(C.o,H.bC(C.o,H.bC(C.B,H.bC(C.C,H.bC(C.D(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kp=new H.iJ(p)
$.kl=new H.iK(o)
$.kt=new H.iL(n)},
bC:function(a,b){return a(b)||b},
lf:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fV("Illegal RegExp pattern ("+String(n)+")",a))},
kv:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
mJ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ku:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jm:function(a,b,c){var s=H.n0(a,b,c)
return s},
n0:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ku(b),'g'),H.mJ(c))},
hJ:function hJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cg:function cg(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
ef:function ef(a){this.a=a},
hh:function hh(a){this.a=a},
f0:function f0(a){this.a=a
this.b=null},
aW:function aW(){},
e3:function e3(){},
dX:function dX(){},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a){this.a=a},
ap:function ap(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h2:function h2(a){this.a=a},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aI:function aI(a){this.a=a},
dq:function dq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iJ:function iJ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jb:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.cQ(a)
r=s.gk(a)
q=P.dr(r,null,!1)
for(p=0;p<s.gk(a);++p){o=s.i(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bE(b,a))},
m9:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.mI(a,b,c))
return b},
cc:function cc(){},
bn:function bn(){},
b2:function b2(){},
cb:function cb(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
cd:function cd(){},
dC:function dC(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
jM:function(a,b){var s=b.c
return s==null?b.c=H.j9(a,b.z,!0):s},
jL:function(a,b){var s=b.c
return s==null?b.c=H.cI(a,"jD",[b.z]):s},
jN:function(a){var s=a.y
if(s===6||s===7||s===8)return H.jN(a.z)
return s===11||s===12},
lx:function(a){return a.cy},
mL:function(a){return H.ja(v.typeUniverse,a,!1)},
aQ:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.k9(a,r,!0)
case 7:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.j9(a,r,!0)
case 8:s=b.z
r=H.aQ(a,s,a0,a1)
if(r===s)return b
return H.k8(a,r,!0)
case 9:q=b.Q
p=H.cO(a,q,a0,a1)
if(p===q)return b
return H.cI(a,b.z,p)
case 10:o=b.z
n=H.aQ(a,o,a0,a1)
m=b.Q
l=H.cO(a,m,a0,a1)
if(n===o&&l===m)return b
return H.j7(a,n,l)
case 11:k=b.z
j=H.aQ(a,k,a0,a1)
i=b.Q
h=H.mx(a,i,a0,a1)
if(j===k&&h===i)return b
return H.k7(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cO(a,g,a0,a1)
o=b.z
n=H.aQ(a,o,a0,a1)
if(f===g&&n===o)return b
return H.j8(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.ft("Attempted to substitute unexpected RTI kind "+c))}},
cO:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aQ(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
my:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aQ(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
mx:function(a,b,c,d){var s,r=b.a,q=H.cO(a,r,c,d),p=b.b,o=H.cO(a,p,c,d),n=b.c,m=H.my(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eE()
s.a=q
s.b=o
s.c=m
return s},
o9:function(a,b){a[v.arrayRti]=b
return a},
mG:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kq(s)
return a.$S()}return null},
kr:function(a,b){var s
if(H.jN(b))if(a instanceof H.aW){s=H.mG(a)
if(s!=null)return s}return H.bF(a)},
bF:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.jc(a)}if(Array.isArray(a))return H.kd(a)
return H.jc(J.cP(a))},
kd:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Q:function(a){var s=a.$ti
return s!=null?s:H.jc(a)},
jc:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mg(a,s)},
mg:function(a,b){var s=a instanceof H.aW?a.__proto__.__proto__.constructor:b,r=H.m6(v.typeUniverse,s.name)
b.$ccache=r
return r},
kq:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ja(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mf:function(a){var s,r,q,p=this
if(p===t.K)return H.cL(p,a,H.mk)
if(!H.az(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cL(p,a,H.mn)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.iA
else if(r===t.i||r===t.H)q=H.mj
else if(r===t.N)q=H.ml
else q=r===t.v?H.jd:null
if(q!=null)return H.cL(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.mV)){p.r="$i"+s
return H.cL(p,a,H.mm)}}else if(s===7)return H.cL(p,a,H.md)
return H.cL(p,a,H.mb)},
cL:function(a,b,c){a.b=c
return a.b(b)},
me:function(a){var s,r=this,q=H.ma
if(!H.az(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.m8
else if(r===t.K)q=H.m7
else{s=H.cR(r)
if(s)q=H.mc}r.a=q
return r.a(a)},
jg:function(a){var s,r=a.y
if(!H.az(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jg(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mb:function(a){var s=this
if(a==null)return H.jg(s)
return H.H(v.typeUniverse,H.kr(a,s),null,s,null)},
md:function(a){if(a==null)return!0
return this.z.b(a)},
mm:function(a){var s,r=this
if(a==null)return H.jg(r)
s=r.r
if(a instanceof P.J)return!!a[s]
return!!J.cP(a)[s]},
ma:function(a){var s,r=this
if(a==null){s=H.cR(r)
if(s)return a}else if(r.b(a))return a
H.kg(a,r)},
mc:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kg(a,s)},
kg:function(a,b){throw H.c(H.lX(H.k0(a,H.kr(a,b),H.a2(b,null))))},
k0:function(a,b,c){var s=P.fP(a),r=H.a2(b==null?H.bF(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
lX:function(a){return new H.cH("TypeError: "+a)},
U:function(a,b){return new H.cH("TypeError: "+H.k0(a,null,b))},
mk:function(a){return a!=null},
m7:function(a){if(a!=null)return a
throw H.c(H.U(a,"Object"))},
mn:function(a){return!0},
m8:function(a){return a},
jd:function(a){return!0===a||!1===a},
ke:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
nX:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
nW:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
nY:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
o_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
nZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
iA:function(a){return typeof a=="number"&&Math.floor(a)===a},
ix:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
o1:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
o0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
mj:function(a){return typeof a=="number"},
o2:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
o4:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
o3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
ml:function(a){return typeof a=="string"},
iy:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
o6:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
o5:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
mt:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a2(a[q],b)
return s},
kh:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.b.O(m,a5[j])
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
if(l===9){p=H.mz(a.z)
o=a.Q
return o.length!==0?p+("<"+H.mt(o,b)+">"):p}if(l===11)return H.kh(a,b,null)
if(l===12)return H.kh(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
mz:function(a){var s,r=H.kw(a)
if(r!=null)return r
s="minified:"+a
return s},
ka:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
m6:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ja(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cJ(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cI(a,b,q)
n[b]=o
return o}else return m},
m4:function(a,b){return H.kc(a.tR,b)},
m3:function(a,b){return H.kc(a.eT,b)},
ja:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.k5(H.k3(a,null,b,c))
r.set(b,s)
return s},
fe:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.k5(H.k3(a,b,c,!0))
q.set(c,r)
return r},
m5:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.j7(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aP:function(a,b){b.a=H.me
b.b=H.mf
return b},
cJ:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a6(null,null)
s.y=b
s.cy=c
r=H.aP(a,s)
a.eC.set(c,r)
return r},
k9:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.m1(a,b,r,c)
a.eC.set(r,s)
return s},
m1:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.az(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a6(null,null)
q.y=6
q.z=b
q.cy=c
return H.aP(a,q)},
j9:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.m0(a,b,r,c)
a.eC.set(r,s)
return s},
m0:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.az(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.cR(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.cR(q.z))return q
else return H.jM(a,b)}}p=new H.a6(null,null)
p.y=7
p.z=b
p.cy=c
return H.aP(a,p)},
k8:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.lZ(a,b,r,c)
a.eC.set(r,s)
return s},
lZ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.az(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cI(a,"jD",[b])
else if(b===t.P||b===t.T)return t.Q}q=new H.a6(null,null)
q.y=8
q.z=b
q.cy=c
return H.aP(a,q)},
m2:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a6(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aP(a,s)
a.eC.set(q,r)
return r},
fd:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
lY:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cI:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fd(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a6(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aP(a,r)
a.eC.set(p,q)
return q},
j7:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fd(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aP(a,o)
a.eC.set(q,n)
return n},
k7:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fd(m)
if(j>0){s=l>0?",":""
r=H.fd(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.lY(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a6(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aP(a,o)
a.eC.set(q,r)
return r},
j8:function(a,b,c,d){var s,r=b.cy+("<"+H.fd(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.m_(a,b,c,r,d)
a.eC.set(r,s)
return s},
m_:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aQ(a,b,r,0)
m=H.cO(a,c,r,0)
return H.j8(a,n,m,c!==m)}}l=new H.a6(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aP(a,l)},
k3:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
k5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.lR(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.k4(a,r,h,g,!1)
else if(q===46)r=H.k4(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aO(a.u,a.e,g.pop()))
break
case 94:g.push(H.m2(a.u,g.pop()))
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
case 62:p=a.u
o=g.splice(a.p)
H.j6(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cI(p,n,o))
else{m=H.aO(p,a.e,n)
switch(m.y){case 11:g.push(H.j8(p,m,o,a.n))
break
default:g.push(H.j7(p,m,o))
break}}break
case 38:H.lS(a,g)
break
case 42:p=a.u
g.push(H.k9(p,H.aO(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.j9(p,H.aO(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.k8(p,H.aO(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.eE()
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
H.j6(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.k7(p,H.aO(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.j6(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.lU(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aO(a.u,a.e,i)},
lR:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
k4:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ka(s,o.z)[p]
if(n==null)H.P('No "'+p+'" in "'+H.lx(o)+'"')
d.push(H.fe(s,o,n))}else d.push(p)
return m},
lS:function(a,b){var s=b.pop()
if(0===s){b.push(H.cJ(a.u,1,"0&"))
return}if(1===s){b.push(H.cJ(a.u,4,"1&"))
return}throw H.c(P.ft("Unexpected extended operation "+H.q(s)))},
aO:function(a,b,c){if(typeof c=="string")return H.cI(a,c,a.sEA)
else if(typeof c=="number")return H.lT(a,b,c)
else return c},
j6:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aO(a,b,c[s])},
lU:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aO(a,b,c[s])},
lT:function(a,b,c){var s,r,q=b.y
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
H:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.az(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.az(b))return!1
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
if(p===6){s=H.jM(a,d)
return H.H(a,b,c,s,e)}if(r===8){if(!H.H(a,b.z,c,d,e))return!1
return H.H(a,H.jL(a,b),c,d,e)}if(r===7){s=H.H(a,t.P,c,d,e)
return s&&H.H(a,b.z,c,d,e)}if(p===8){if(H.H(a,b,c,d.z,e))return!0
return H.H(a,b,c,H.jL(a,d),e)}if(p===7){s=H.H(a,b,c,t.P,e)
return s||H.H(a,b,c,d.z,e)}if(q)return!1
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
if(!H.H(a,k,c,j,e)||!H.H(a,j,e,k,c))return!1}return H.ki(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.ki(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mi(a,b,c,d,e)}return!1},
ki:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
mi:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.H(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ka(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.H(a,H.fe(a,b,l[p]),c,r[p],e))return!1
return!0},
cR:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.az(a))if(r!==7)if(!(r===6&&H.cR(a.z)))s=r===8&&H.cR(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mV:function(a){var s
if(!H.az(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
az:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kc:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eE:function eE(){this.c=this.b=this.a=null},
ez:function ez(){},
cH:function cH(a){this.a=a},
kw:function(a){return v.mangledGlobalNames[a]},
mZ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iI:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jj==null){H.mR()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.jT("Return interceptor for "+H.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ih
if(o==null)o=$.ih=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.mW(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){o=$.ih
if(o==null)o=$.ih=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
lc:function(a){if(a<0||a>4294967295)throw H.c(P.aL(a,0,4294967295,"length",null))
return J.ld(new Array(a))},
iV:function(a){if(a<0)throw H.c(P.js("Length must be a non-negative integer: "+a))
return new Array(a)},
ld:function(a){return J.iW(a)},
iW:function(a){a.fixed$length=Array
return a},
le:function(a,b){return J.kT(a,b)},
cP:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c1.prototype
return J.dj.prototype}if(typeof a=="string")return J.aH.prototype
if(a==null)return J.c2.prototype
if(typeof a=="boolean")return J.di.prototype
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.J)return a
return J.iI(a)},
cQ:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.J)return a
return J.iI(a)},
iH:function(a){if(a==null)return a
if(a.constructor==Array)return J.ab.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.J)return a
return J.iI(a)},
ko:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.b7.prototype
return a},
mM:function(a){if(typeof a=="string")return J.aH.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.b7.prototype
return a},
ba:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof P.J)return a
return J.iI(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cP(a).t(a,b)},
jp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ko(a).L(a,b)},
kQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mU(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cQ(a).i(a,b)},
kR:function(a,b,c){return J.ba(a).dD(a,b,c)},
kS:function(a,b,c,d){return J.ba(a).dP(a,b,c,d)},
kT:function(a,b){return J.ko(a).ai(a,b)},
fq:function(a,b){return J.iH(a).v(a,b)},
iR:function(a,b){return J.iH(a).F(a,b)},
kU:function(a){return J.ba(a).gaq(a)},
kV:function(a){return J.ba(a).gbM(a)},
fr:function(a){return J.cP(a).gG(a)},
aB:function(a){return J.iH(a).gI(a)},
aT:function(a){return J.cQ(a).gk(a)},
jq:function(a){return J.iH(a).eq(a)},
kW:function(a,b){return J.ba(a).eu(a,b)},
kX:function(a){return J.mM(a).eB(a)},
cU:function(a){return J.cP(a).h(a)},
a:function a(){},
di:function di(){},
c2:function c2(){},
aZ:function aZ(){},
dI:function dI(){},
b7:function b7(){},
ao:function ao(){},
ab:function ab(){},
dk:function dk(){},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bl:function bl(){},
c1:function c1(){},
dj:function dj(){},
aH:function aH(){}},P={
lG:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.mB()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bD(new P.ib(q),1)).observe(s,{childList:true})
return new P.ia(q,s,r)}else if(self.setImmediate!=null)return P.mC()
return P.mD()},
lH:function(a){self.scheduleImmediate(H.bD(new P.ic(a),0))},
lI:function(a){self.setImmediate(H.bD(new P.id(a),0))},
lJ:function(a){P.j2(C.h,a)},
j2:function(a,b){var s=C.d.a0(a.a,1000)
return P.lV(s<0?0:s,b)},
jR:function(a,b){var s=C.d.a0(a.a,1000)
return P.lW(s<0?0:s,b)},
lV:function(a,b){var s=new P.cG()
s.cz(a,b)
return s},
lW:function(a,b){var s=new P.cG()
s.cA(a,b)
return s},
nT:function(a){return new P.bA(a,1)},
lO:function(){return C.U},
lP:function(a){return new P.bA(a,3)},
mp:function(a){return new P.cD(a)},
mq:function(){var s,r
for(s=$.bB;s!=null;s=$.bB){$.cN=null
r=s.b
$.bB=r
if(r==null)$.cM=null
s.a.$0()}},
mw:function(){$.je=!0
try{P.mq()}finally{$.cN=null
$.je=!1
if($.bB!=null)$.jo().$1(P.km())}},
mu:function(a){var s=new P.eo(a),r=$.cM
if(r==null){$.bB=$.cM=s
if(!$.je)$.jo().$1(P.km())}else $.cM=r.b=s},
mv:function(a){var s,r,q,p=$.bB
if(p==null){P.mu(a)
$.cN=$.cM
return}s=new P.eo(a)
r=$.cN
if(r==null){s.b=p
$.bB=$.cN=s}else{q=r.b
s.b=q
$.cN=r.b=s
if(q==null)$.cM=s}},
jQ:function(a,b){var s=$.ag
if(s===C.e)return P.j2(a,b)
return P.j2(a,s.dT(b))},
lD:function(a,b){var s=$.ag
if(s===C.e)return P.jR(a,b)
return P.jR(a,s.bL(b,t.F))},
kj:function(a,b,c,d,e){P.mv(new P.iB(d,e))},
mr:function(a,b,c,d){var s,r=$.ag
if(r===c)return d.$0()
$.ag=c
s=r
try{r=d.$0()
return r}finally{$.ag=s}},
ms:function(a,b,c,d,e){var s,r=$.ag
if(r===c)return d.$1(e)
$.ag=c
s=r
try{r=d.$1(e)
return r}finally{$.ag=s}},
ib:function ib(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
cG:function cG(){this.c=0},
it:function it(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b){this.a=a
this.b=b},
b9:function b9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cD:function cD(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null},
dZ:function dZ(){},
e_:function e_(){},
iw:function iw(){},
iB:function iB(a,b){this.a=a
this.b=b},
ik:function ik(){},
il:function il(a,b){this.a=a
this.b=b},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
lg:function(a,b,c){return H.mK(a,new H.ap(b.a_("@<0>").bv(c).a_("ap<1,2>")))},
c3:function(a,b){return new H.ap(a.a_("@<0>").bv(b).a_("ap<1,2>"))},
c4:function(a){return new P.cr(a.a_("cr<0>"))},
j5:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lQ:function(a,b){var s=new P.cs(a,b)
s.c=a.e
return s},
la:function(a,b,c){var s,r
if(P.jf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.Y.push(a)
try{P.mo(a,s)}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}r=P.jO(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
iU:function(a,b,c){var s,r
if(P.jf(a))return b+"..."+c
s=new P.bs(b)
$.Y.push(a)
try{r=s
r.a=P.jO(r.a,a,", ")}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jf:function(a){var s,r
for(s=$.Y.length,r=0;r<s;++r)if(a===$.Y[r])return!0
return!1},
mo:function(a,b){var s,r,q,p,o,n,m,l=a.gI(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.q(l.gu(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gu(l);++j
if(!l.q()){if(j<=4){b.push(H.q(p))
return}r=H.q(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gu(l);++j
for(;l.q();p=o,o=n){n=l.gu(l);++j
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
jE:function(a,b){var s,r,q=P.c4(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.y)(a),++r)q.p(0,b.a(a[r]))
return q},
jF:function(a){var s,r={}
if(P.jf(a))return"{...}"
s=new P.bs("")
try{$.Y.push(a)
s.a+="{"
r.a=!0
J.iR(a,new P.h9(r,s))
s.a+="}"}finally{if(0>=$.Y.length)return H.d($.Y,-1)
$.Y.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cr:function cr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ij:function ij(a){this.a=a
this.c=this.b=null},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c0:function c0(){},
c5:function c5(){},
x:function x(){},
c7:function c7(){},
h9:function h9(a,b){this.a=a
this.b=b},
M:function M(){},
dQ:function dQ(){},
cz:function cz(){},
ct:function ct(){},
cK:function cK(){},
d0:function d0(){},
d2:function d2(){},
fN:function fN(){},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fY:function fY(a){this.a=a},
i0:function i0(){},
i1:function i1(){},
iu:function iu(a){this.b=0
this.c=a},
l8:function(a){if(a instanceof H.aW)return a.h(0)
return"Instance of '"+H.ci(a)+"'"},
dr:function(a,b,c){var s,r=c?J.iV(a):J.lc(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
h6:function(a,b){var s,r=[]
for(s=J.aB(a);s.q();)r.push(s.gu(s))
if(b)return r
return J.iW(r)},
lh:function(a,b){var s,r,q=J.iV(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
j1:function(a){var s=a,r=s.length,q=P.j_(0,null,r)
return H.ls(q<r?s.slice(0,q):s)},
lu:function(a){return new H.h1(a,H.lf(a,!1,!0,!1,!1,!1))},
jO:function(a,b,c){var s=J.aB(b)
if(!s.q())return a
if(c.length===0){do a+=H.q(s.gu(s))
while(s.q())}else{a+=H.q(s.gu(s))
for(;s.q();)a=a+c+H.q(s.gu(s))}return a},
kb:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.kP().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.dX(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.iZ(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
l5:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d5:function(a){if(a>=10)return""+a
return"0"+a},
jz:function(a){return new P.aX(1000*a)},
fP:function(a){if(typeof a=="number"||H.jd(a)||null==a)return J.cU(a)
if(typeof a=="string")return JSON.stringify(a)
return P.l8(a)},
ft:function(a){return new P.cX(a)},
js:function(a){return new P.a9(!1,null,null,a)},
dL:function(a,b){return new P.cj(null,null,!0,a,b,"Value not in range")},
aL:function(a,b,c,d,e){return new P.cj(b,c,!0,a,d,"Invalid value")},
j_:function(a,b,c){if(a>c)throw H.c(P.aL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aL(b,a,c,"end",null))
return b}return c},
jJ:function(a,b){if(a<0)throw H.c(P.aL(a,0,null,b,null))
return a},
D:function(a,b,c,d,e){var s=e==null?J.aT(b):e
return new P.dg(s,!0,a,c,"Index out of range")},
u:function(a){return new P.eh(a)},
jT:function(a){return new P.ee(a)},
j0:function(a){return new P.br(a)},
aj:function(a){return new P.d1(a)},
C:function(a){return new P.eB(a)},
jl:function(a){H.mZ(a)},
V:function V(a,b){this.a=a
this.b=b},
aX:function aX(a){this.a=a},
fJ:function fJ(){},
fK:function fK(){},
A:function A(){},
cX:function cX(a){this.a=a},
eb:function eb(){},
dD:function dD(){},
a9:function a9(a,b,c,d){var _=this
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
dg:function dg(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eh:function eh(a){this.a=a},
ee:function ee(a){this.a=a},
br:function br(a){this.a=a},
d1:function d1(a){this.a=a},
dG:function dG(){},
cn:function cn(){},
d3:function d3(a){this.a=a},
eB:function eB(a){this.a=a},
fV:function fV(a,b){this.a=a
this.b=b},
e:function e(){},
dh:function dh(){},
a4:function a4(){},
J:function J(){},
bs:function bs(a){this.a=a},
aR:function(a){var s,r,q,p,o
if(a==null)return null
s=P.c3(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
kf:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jd(a))return a
if(t.f.b(a))return P.kn(a)
if(t.j.b(a)){s=[]
J.iR(a,new P.iz(s))
a=s}return a},
kn:function(a){var s={}
J.iR(a,new P.iD(s))
return s},
iz:function iz(a){this.a=a},
iD:function iD(a){this.a=a},
db:function db(a,b){this.a=a
this.b=b},
fT:function fT(){},
fU:function fU(){},
b0:function b0(){},
dp:function dp(){},
b3:function b3(){},
dE:function dE(){},
hi:function hi(){},
bq:function bq(){},
e0:function e0(){},
i:function i(){},
b6:function b6(){},
ea:function ea(){},
eJ:function eJ(){},
eK:function eK(){},
eR:function eR(){},
eS:function eS(){},
f2:function f2(){},
f3:function f3(){},
fb:function fb(){},
fc:function fc(){},
fw:function fw(){},
cY:function cY(){},
fx:function fx(a){this.a=a},
cZ:function cZ(){},
aD:function aD(){},
dF:function dF(){},
eq:function eq(){},
ck:function ck(){},
dV:function dV(){},
eZ:function eZ(){},
f_:function f_(){}},W={
jr:function(){var s=document.createElement("a")
s.toString
return s},
jv:function(){var s=document.createElement("canvas")
s.toString
return s},
l7:function(a,b,c){var s=document.body
s.toString
s=new H.b8(new W.S(C.k.T(s,a,b,c)),new W.fL())
return t.h.a(s.gab(s))},
fM:function(a){return"wheel"},
bW:function(a){var s,r,q="element tag unavailable"
try{s=J.ba(a)
s.gc9(a)
q=s.gc9(a)}catch(r){H.aA(r)}return q},
ii:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
k2:function(a,b,c,d){var s=W.ii(W.ii(W.ii(W.ii(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
T:function(a,b,c,d){var s=W.kk(new W.ig(c),t.B)
if(s!=null&&!0)J.kS(a,b,s,!1)
return new W.eA(a,b,s,!1)},
k1:function(a){var s=W.jr(),r=window
s=new W.bz(new W.io(s,r.location))
s.ct(a)
return s},
lM:function(a,b,c,d){return!0},
lN:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
k6:function(){var s=t.N
s=new W.f6(P.jE(C.q,s),P.c4(s),P.c4(s),P.c4(s),null)
s.cw(null,new H.c9(C.q,new W.ir()),["TEMPLATE"],null)
return s},
kk:function(a,b){var s=$.ag
if(s===C.e)return a
return s.bL(a,b)},
j:function j(){},
fs:function fs(){},
cV:function cV(){},
cW:function cW(){},
bc:function bc(){},
d_:function d_(){},
aU:function aU(){},
aV:function aV(){},
aa:function aa(){},
fB:function fB(){},
z:function z(){},
bR:function bR(){},
fC:function fC(){},
a3:function a3(){},
ak:function ak(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
bS:function bS(){},
fH:function fH(){},
bT:function bT(){},
bU:function bU(){},
d7:function d7(){},
fI:function fI(){},
er:function er(a,b){this.a=a
this.b=b},
w:function w(){},
fL:function fL(){},
f:function f(){},
b:function b(){},
am:function am(){},
d9:function d9(){},
da:function da(){},
dc:function dc(){},
an:function an(){},
fX:function fX(){},
aY:function aY(){},
b_:function b_(){},
h7:function h7(){},
ha:function ha(){},
du:function du(){},
hb:function hb(a){this.a=a},
dv:function dv(){},
hc:function hc(a){this.a=a},
aq:function aq(){},
dw:function dw(){},
a0:function a0(){},
S:function S(a){this.a=a},
n:function n(){},
ce:function ce(){},
as:function as(){},
dK:function dK(){},
dN:function dN(){},
ho:function ho(a){this.a=a},
dP:function dP(){},
ae:function ae(){},
dT:function dT(){},
at:function at(){},
dU:function dU(){},
au:function au(){},
dY:function dY(){},
hy:function hy(a){this.a=a},
a7:function a7(){},
co:function co(){},
e1:function e1(){},
e2:function e2(){},
bt:function bt(){},
af:function af(){},
a1:function a1(){},
e4:function e4(){},
e5:function e5(){},
hC:function hC(){},
av:function av(){},
b5:function b5(){},
e9:function e9(){},
hH:function hH(){},
ax:function ax(){},
i_:function i_(){},
el:function el(){},
aN:function aN(){},
bx:function bx(){},
by:function by(){},
es:function es(){},
cq:function cq(){},
eF:function eF(){},
cu:function cu(){},
eY:function eY(){},
f4:function f4(){},
ep:function ep(){},
ey:function ey(a){this.a=a},
iT:function iT(a,b){this.a=a
this.$ti=b},
eA:function eA(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ig:function ig(a){this.a=a},
j4:function j4(a){this.$ti=a},
bz:function bz(a){this.a=a},
B:function B(){},
cf:function cf(a){this.a=a},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
cA:function cA(){},
ip:function ip(){},
iq:function iq(){},
f6:function f6(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ir:function ir(){},
f5:function f5(){},
bZ:function bZ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
io:function io(a,b){this.a=a
this.b=b},
ff:function ff(a){this.a=a
this.b=0},
iv:function iv(a){this.a=a},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eC:function eC(){},
eD:function eD(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
cB:function cB(){},
cC:function cC(){},
eW:function eW(){},
eX:function eX(){},
f1:function f1(){},
f7:function f7(){},
f8:function f8(){},
cE:function cE(){},
cF:function cF(){},
f9:function f9(){},
fa:function fa(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){}},K={
E:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.C("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.aA(a,0)
r=C.b.aA(b,0)
if(s>r){q=r
r=s
s=q}return new K.hj(s,r)},
aC:function aC(){},
de:function de(){},
X:function X(a){this.a=a},
hj:function hj(a,b){this.a=a
this.b=b},
m:function m(a){this.a=a}},L={
hF:function(){var s=t.N
return new L.hE(P.c3(s,t.R),P.c3(s,t.L),P.c4(s))},
dW:function dW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a,b){this.b=a
this.c=b},
hE:function hE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hI:function hI(a,b){this.b=a
this.c=!1
this.a=b}},O={
jx:function(){return new O.bf([])},
bf:function bf(a){this.a=a
this.c=this.b=null},
ca:function ca(a){this.a=a
this.b=null},
fG:function fG(){var _=this
_.a=null
_.b=1
_.c=10
_.f=_.e=_.d=!1
_.r=null},
hA:function hA(){}},E={
aF:function(a,b){var s,r=O.jx(),q=new E.bh(r)
r.aP(q.gee(),q.geh())
r=q.c
if(r!==b){q.d=q.c=b
q.e=null
if(r!=null)r.gw().J(0,q.gc0())
b.gw().p(0,q.gc0())
q.a8(new D.F("shape",r,b))}if(!J.K(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gw().J(0,q.gbZ())
a.gw().p(0,q.gbZ())
r=q.r
q.a8(new D.F("mover",s,r))}return q},
lK:function(){var s=window.navigator.vendor
s.toString
if(C.b.A(s,"Google"))return C.w
s=window.navigator.userAgent
s.toString
if(C.b.A(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.b.A(s,"Trident")||C.b.A(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.b.A(s,"Microsoft"))return C.m
return C.x},
lL:function(){var s=window.navigator.appVersion
s.toString
if(C.b.A(s,"Win"))return C.Q
if(C.b.A(s,"Mac"))return C.R
if(C.b.A(s,"Linux"))return C.S
return C.T},
lw:function(a,b){var s
Date.now()
s=new E.hk(a,new P.V(Date.now(),!1),new P.V(Date.now(),!1),new O.ca([]),new O.ca([]),new O.ca([]),[null],P.c3(t.N,t.k))
s.cr(a,b)
return s},
lC:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.jP(a,!0,!0,!0,!1)
s=W.jv()
r=s.style
r.width="100%"
r.height="100%"
J.kV(a).p(0,s)
return E.jP(s,!0,!0,!0,!1)},
jP:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.r.a(C.G.ci(a,"webgl2",P.lg(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.C("Failed to get the rendering context for WebGL."))
s=E.lw(l,a)
H.ix(l.getParameter(3379))
H.ix(l.getParameter(34076))
m=[]
r=$.jC
if(r==null){q=E.lK()
E.lL()
r=$.jC=new E.ie(q)}p=new X.ei(a,m,r.a===C.l?0.16666666666666666:0.005555555555555556)
o=document
o.toString
m.push(W.T(o,"contextmenu",p.gcY(),!1))
m.push(W.T(a,"focus",p.gd3(),!1))
m.push(W.T(a,"blur",p.gcS(),!1))
m.push(W.T(o,"keyup",p.gd7(),!1))
m.push(W.T(o,"keydown",p.gd5(),!1))
m.push(W.T(a,"mousedown",p.gda(),!1))
m.push(W.T(a,"mouseup",p.gdf(),!1))
m.push(W.T(a,n,p.gdd(),!1))
W.fM(a)
W.fM(a)
m.push(W.T(a,W.fM(a),p.gdh(),!1))
m.push(W.T(o,n,p.gd_(),!1))
m.push(W.T(o,"mouseup",p.gd1(),!1))
m.push(W.T(o,"pointerlockchange",p.gdj(),!1))
m.push(W.T(a,"touchstart",p.gdu(),!1))
m.push(W.T(a,"touchend",p.gdq(),!1))
m.push(W.T(a,"touchmove",p.gds(),!1))
m=new E.e6(a,s,new P.V(Date.now(),!1))
m.bC()
return m},
fy:function fy(){},
bh:function bh(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
be:function be(a){this.b=a},
bo:function bo(a){this.b=a},
ie:function ie(a){this.a=a},
hk:function hk(a,b,c,d,e,f,g,h){var _=this
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
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
e6:function e6(a,b,c){var _=this
_.b=a
_.d=null
_.e=b
_.Q=null
_.cx=!1
_.cy=c
_.db=0},
hB:function hB(a){this.a=a}},Z={
lF:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.jb(c)),35044)
a.bindBuffer(b,null)
return new Z.em(b,s)},
a8:function(a){return new Z.ek(a)},
em:function em(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
i9:function i9(a){this.a=a},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a}},D={
al:function(){return new D.bX()},
fA:function fA(){},
bX:function bX(){var _=this
_.c=_.b=_.a=null
_.d=0},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
W:function W(){},
bj:function bj(){},
bk:function bk(){},
F:function F(a,b,c){this.c=a
this.d=b
this.e=c}},X={bP:function bP(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},h3:function h3(a){this.d=a},h8:function h8(a,b,c,d){var _=this
_.a=a
_.r=0
_.x=b
_.y=c
_.z=d},bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},hd:function hd(a,b,c,d,e){var _=this
_.a=a
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},hG:function hG(a,b,c,d,e){var _=this
_.a=a
_.e=b
_.f=c
_.r=d
_.x=e},ei:function ei(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
l9:function(a){var s=V.mF(1),r=$.jK
if(r==null){r=V.lv(0,0,1,1)
$.jK=r}return new X.fW(new V.bg(0,0,0,s),r)},
fW:function fW(a,b){this.a=a
this.r=b
this.x=null},
dH:function dH(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
hz:function hz(){}},V={
mF:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
jn:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.cj(a-b,s)
return(a<0?a+s:a)+b},
v:function(a,b,c){$.I().toString
return C.b.a9(C.c.bi(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
iG:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=c+b+1,r=0,q=0;q<4;++q){p=a[q]
$.I().toString
o=C.b.a9(C.c.bi(Math.abs(p-0)<1e-9?0:p,b),s)
r=Math.max(r,o.length)
l.push(o)}for(s=l.length,n=s-1;n>=0;--n,s=m){if(n>=s)return H.d(l,n)
s=C.b.a9(l[n],r)
m=l.length
if(n>=m)return H.d(l,n)
l[n]=s}return l},
dt:function(){var s=$.jG
return s==null?$.jG=V.aK(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aK:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ds(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lj:function(a,b,c){return new V.ad(a,b,c)},
lv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dM(a,b,c,d)},
i2:function(){var s=$.jZ
return s==null?$.jZ=new V.N(0,0,0):s},
jU:function(a,b,c){return new V.N(a,b,c)},
lE:function(a){return new V.N(a.a,a.b,a.c)},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(){},
ds:function ds(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function(a){P.lD(C.I,new V.iP(a))},
ly:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.C("The html document body was null."))
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
W.T(n,"scroll",new V.hv(s),!1)
return new V.ht(o)},
ai:function ai(){},
iP:function iP(a){this.a=a},
d4:function d4(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dd:function dd(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
df:function df(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dJ:function dJ(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ht:function ht(a){this.a=a
this.b=null},
hv:function hv(a){this.a=a},
hu:function hu(a){this.a=a},
hw:function hw(a){this.a=a}},U={
jy:function(a){var s=V.dt(),r=new U.bQ(s)
if(!s.t(0,a))r.a=a
return r},
bQ:function bQ(a){this.a=a
this.b=null},
bi:function bi(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
ac:function ac(){},
cl:function cl(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null}},M={d8:function d8(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
j3:function(a,b,c,d,e){var s=new A.hO([],a,c,e)
s.f=d
s.e=P.dr(d,0,!1)
return s},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
d6:function d6(a,b){var _=this
_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cm:function cm(){},
hM:function hM(){},
hV:function hV(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
ed:function ed(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c}},F={
n5:function(a,b){return F.mH(15,30,b,a,new F.iQ())},
mH:function(a,b,c,d,e){var s=F.n1(a,b,new F.iE(e,d,b,c)),r=s.e
if(r!=null)++r.d
s.gK().b8()
s.gY().b8()
r=s.e
if(r!=null)r.aw(0)
s.ed(new F.i5(),new F.hg())
return s},
n1:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.C("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.C("Must have 1 or more divisions of the height for a surface."))
s=new F.hp()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.G(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.bI(new V.bg(n,0,0,1),new V.a5(p,1))
c.$3(m,p,0)
r.push(m.bO(null))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.G(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.bI(new V.bg(h,g,f,1),new V.a5(p,k))
c.$3(m,p,l)
r.push(m.bO(null))}}s.gK().dQ(a+1,b+1,r)
return s},
k_:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cp()
h=$.kL()
s=$.aS()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bI().a)!==0)q.r=e
if((r&$.bH().a)!==0)q.x=b
if((r&$.bJ().a)!==0)q.y=f
if((r&$.bK().a)!==0)q.z=g
if((r&$.kM().a)!==0)q.Q=c
if((r&$.bL().a)!==0)q.ch=i
if((r&$.bG().a)!==0)q.cx=a
return q},
iQ:function iQ(){},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(){},
hx:function hx(){},
h4:function h4(){},
hL:function hL(){},
hp:function hp(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hs:function hs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
dR:function dR(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(a){this.b=a},
cp:function cp(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
i8:function i8(a){this.a=a},
G:function G(a,b){this.a=a
this.b=!1
this.c=b},
bw:function bw(a,b,c){this.b=a
this.c=b
this.d=c},
i3:function i3(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.b=a
this.c=b},
i6:function i6(){},
i5:function i5(){},
i7:function i7(){},
hg:function hg(){}},R={
mX:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2="testCanvas",a3=V.ly("Test 004"),a4=W.jv()
a4.className="pageLargeCanvas"
a4.id=a2
a3.a.appendChild(a4).toString
a3.bJ(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."])
a3.bJ(["\xab[Back to Tests|../]"])
s=new U.cl(V.dt())
s.sce(0)
s.sc3(0,0)
s.sc8(0)
s.sbR(0.1)
s.sbP(0.21)
s.sbQ(0.32)
s.sbR(0.51)
s.sbP(0.71)
s.sbQ(0.92)
r=new U.bi(V.dt(),[])
r.aP(r.gcQ(),r.gdm())
r.p(0,U.jy(V.aK(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
r.p(0,s)
q=F.n5(2,0.2)
p=E.aF(r,q)
o=E.aF(r,q)
o.y.p(0,p)
n=E.aF(r,q)
n.y.p(0,o)
m=E.aF(r,q)
m.y.p(0,n)
l=E.aF(r,q)
l.y.p(0,m)
k=E.aF(r,q)
k.y.p(0,l)
j=E.aF(r,q)
j.y.p(0,k)
i=E.aF(r,q)
i.y.p(0,j)
h=E.aF(r,q)
h.y.p(0,i)
g=new O.fG()
$.I().toString
if(!(Math.abs(-2)<1e-9)){g.b=3
g.b1(new D.F("start",1,3))}f=g.c
$.I().toString
if(!(Math.abs(f-6)<1e-9)){g.c=6
g.b1(new D.F("stop",f,6))}if(!g.d){g.d=!0
g.a=null
g.b1(new D.F("grey",!1,!0))}f=O.jx()
e=new M.d8(f)
f.aP(e.gcU(),e.gcW())
d=X.l9(null)
c=new X.dH(1.0471975511965976,0.1)
c.sbW(null)
b=c.c
$.I().toString
if(!(Math.abs(b-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
c.ad(new D.F("fov",b,1.0471975511965976))}b=c.d
$.I().toString
if(!(Math.abs(b-0.1)<1e-9)){c.d=0.1
c.ad(new D.F("near",b,0.1))}b=c.e
$.I().toString
if(!(Math.abs(b-2000)<1e-9)){c.e=2000
c.ad(new D.F("far",b,2000))}b=e.b
if(b!==c){if(b!=null)b.gw().J(0,e.gZ())
a=e.b
e.b=c
c.gw().p(0,e.gZ())
e.a2(new D.F("camera",a,e.b))}b=e.c
if(b!==d){if(b!=null)b.gw().J(0,e.gZ())
a=e.c
e.c=d
d.gw().p(0,e.gZ())
e.a2(new D.F("target",a,e.c))}e.sca(null)
e.sca(g)
f.p(0,h)
f=e.b
if(f!=null)f.sbW(U.jy(V.aK(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a0=document.getElementById(a2)
if(a0==null)H.P(P.C("Failed to find an element with the identifier, testCanvas."))
a1=E.lC(a0,!0,!0,!0,!1)
f=a1.d
if(f!==e){if(f!=null)f.gw().J(0,a1.gbp())
a1.d=e
e.gw().p(0,a1.gbp())
a1.bq()}f=a1.Q
if(f==null)f=a1.Q=D.al()
b=f.b
f=b==null?f.b=[]:b
f.push(new R.iN(a3,g))
V.n_(a1)},
iN:function iN(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iX.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.ch(a)},
h:function(a){return"Instance of '"+H.ci(a)+"'"}}
J.di.prototype={
h:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iZ:1}
J.c2.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gG:function(a){return 0}}
J.aZ.prototype={
gG:function(a){return 0},
h:function(a){return String(a)}}
J.dI.prototype={}
J.b7.prototype={}
J.ao.prototype={
h:function(a){var s=a[$.kz()]
if(s==null)return this.co(a)
return"JavaScript function for "+J.cU(s)},
$ic_:1}
J.ab.prototype={
bf:function(a,b){if(!!a.fixed$length)H.P(P.u("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dL(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.P(P.u("remove"))
for(s=0;s<a.length;++s)if(J.K(a[s],b)){a.splice(s,1)
return!0}return!1},
S:function(a,b){if(!!a.fixed$length)H.P(P.u("addAll"))
this.cD(a,b)
return},
cD:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aj(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aj(a))}},
l:function(a,b){var s,r,q=a.length,p=P.dr(q,"",!1)
for(s=0;s<a.length;++s){r=H.q(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
ea:function(a){return this.l(a,"")},
e6:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aj(a))}throw H.c(H.h0())},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ge5:function(a){if(a.length>0)return a[0]
throw H.c(H.h0())},
gaH:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.h0())},
bK:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aj(a))}return!1},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.K(a[s],b))return!0
return!1},
h:function(a){return P.iU(a,"[","]")},
gI:function(a){return new J.a_(a,a.length)},
gG:function(a){return H.ch(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.P(P.u("set length"))
if(b>a.length)H.kd(a).c.a(null)
a.length=b},
i:function(a,b){if(b>=a.length||b<0)throw H.c(H.bE(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.P(P.u("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bE(a,b))
a[b]=c},
$ip:1,
$ih:1,
$ie:1,
$il:1}
J.dk.prototype={}
J.a_.prototype={
gu:function(a){return H.Q(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.y(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bl.prototype={
ai:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaF(b)
if(this.gaF(a)===s)return 0
if(this.gaF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaF:function(a){return a===0?1/a<0:a<0},
bS:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.u(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
bi:function(a,b){var s
if(b>20)throw H.c(P.aL(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaF(a))return"-"+s
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
cj:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bD(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.bD(a,b)},
bD:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.u("Result of truncating division is "+H.q(s)+": "+H.q(a)+" ~/ "+b))},
aC:function(a,b){var s
if(a>0)s=this.dN(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
dN:function(a,b){return b>31?0:a>>>b},
$iO:1,
$iR:1}
J.c1.prototype={$io:1}
J.dj.prototype={}
J.aH.prototype={
b9:function(a,b){if(b<0)throw H.c(H.bE(a,b))
if(b>=a.length)H.P(H.bE(a,b))
return a.charCodeAt(b)},
aA:function(a,b){if(b>=a.length)throw H.c(H.bE(a,b))
return a.charCodeAt(b)},
O:function(a,b){return a+b},
aQ:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
ax:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dL(b,null))
if(b>c)throw H.c(P.dL(b,null))
if(c>a.length)throw H.c(P.dL(c,null))
return a.substring(b,c)},
bo:function(a,b){return this.ax(a,b,null)},
eB:function(a){return a.toLowerCase()},
L:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a9:function(a,b){var s=b-a.length
if(s<=0)return a
return this.L(" ",s)+a},
dV:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aL(c,0,s,null,null))
return H.kv(a,b,c)},
A:function(a,b){return this.dV(a,b,0)},
ai:function(a,b){var s
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
H.dn.prototype={
h:function(a){var s="LateInitializationError: "+this.a
return s}}
H.k.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.b.b9(this.a,b)}}
H.h.prototype={}
H.c6.prototype={
gI:function(a){return new H.aJ(this,this.gk(this))},
aN:function(a,b){return this.cn(0,b)}}
H.aJ.prototype={
gu:function(a){return H.Q(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=J.cQ(q),o=p.gk(q)
if(r.b!==o)throw H.c(P.aj(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.v(q,s);++r.c
return!0}}
H.b1.prototype={
gI:function(a){return new H.c8(J.aB(this.a),this.b)},
gk:function(a){return J.aT(this.a)},
v:function(a,b){return this.b.$1(J.fq(this.a,b))}}
H.bV.prototype={$ih:1}
H.c8.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gu(r))
return!0}s.a=null
return!1},
gu:function(a){return H.Q(this).Q[1].a(this.a)}}
H.c9.prototype={
gk:function(a){return J.aT(this.a)},
v:function(a,b){return this.b.$1(J.fq(this.a,b))}}
H.b8.prototype={
gI:function(a){return new H.en(J.aB(this.a),this.b)}}
H.en.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gu(s)))return!0
return!1},
gu:function(a){var s=this.a
return s.gu(s)}}
H.bY.prototype={}
H.eg.prototype={
m:function(a,b,c){throw H.c(P.u("Cannot modify an unmodifiable list"))}}
H.bu.prototype={}
H.hJ.prototype={
U:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
h:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dl.prototype={
h:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.ef.prototype={
h:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hh.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f0.prototype={
h:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.aW.prototype={
h:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kx(r==null?"unknown":r)+"'"},
$ic_:1,
geF:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.e3.prototype={}
H.dX.prototype={
h:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kx(s)+"'"}}
H.bd.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bd))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.ch(this.a)
else s=typeof r!=="object"?J.fr(r):H.ch(r)
return(s^H.ch(this.b))>>>0},
h:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.q(this.d)+"' of "+("Instance of '"+H.ci(s)+"'")}}
H.dO.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ap.prototype={
gk:function(a){return this.a},
gM:function(a){return new H.aI(this)},
geE:function(a){return H.li(new H.aI(this),new H.h2(this))},
dW:function(a,b){var s=this.b
if(s==null)return!1
return this.cI(s,b)},
i:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aB(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aB(p,b)
q=r==null?n:r.b
return q}else return o.e8(b)},
e8:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bA(q,J.fr(a)&0x3ffffff)
r=this.bT(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bu(s==null?m.b=m.b_():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bu(r==null?m.c=m.b_():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.b_()
p=J.fr(b)&0x3ffffff
o=m.bA(q,p)
if(o==null)m.b3(q,p,[m.b0(b,c)])
else{n=m.bT(o,b)
if(n>=0)o[n].b=c
else o.push(m.b0(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aj(s))
r=r.c}},
bu:function(a,b,c){var s=this.aB(a,b)
if(s==null)this.b3(a,b,this.b0(b,c))
else s.b=c},
cP:function(){this.r=this.r+1&67108863},
b0:function(a,b){var s,r=this,q=new H.h5(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.cP()
return q},
bT:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1},
h:function(a){return P.jF(this)},
aB:function(a,b){return a[b]},
bA:function(a,b){return a[b]},
b3:function(a,b,c){a[b]=c},
cM:function(a,b){delete a[b]},
cI:function(a,b){return this.aB(a,b)!=null},
b_:function(){var s="<non-identifier-key>",r=Object.create(null)
this.b3(r,s,r)
this.cM(r,s)
return r}}
H.h2.prototype={
$1:function(a){var s=this.a
return H.Q(s).Q[1].a(s.i(0,a))},
$S:function(){return H.Q(this.a).a_("2(1)")}}
H.h5.prototype={}
H.aI.prototype={
gk:function(a){return this.a.a},
gI:function(a){var s=this.a,r=new H.dq(s,s.r)
r.c=s.e
return r}}
H.dq.prototype={
gu:function(a){return H.Q(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aj(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iJ.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.iK.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.iL.prototype={
$1:function(a){return this.a(a)},
$S:34}
H.h1.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cc.prototype={}
H.bn.prototype={
gk:function(a){return a.length},
$ip:1,
$it:1}
H.b2.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$il:1}
H.cb.prototype={
m:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ih:1,
$ie:1,
$il:1}
H.dx.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dy.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dz.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dA.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dB.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cd.prototype={
gk:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dC.prototype={
gk:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
H.a6.prototype={
a_:function(a){return H.fe(v.typeUniverse,this,a)},
bv:function(a){return H.m5(v.typeUniverse,this,a)}}
H.eE.prototype={}
H.ez.prototype={
h:function(a){return this.a}}
H.cH.prototype={}
P.ib.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:30}
P.ia.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:29}
P.ic.prototype={
$0:function(){this.a.$0()},
$S:7}
P.id.prototype={
$0:function(){this.a.$0()},
$S:7}
P.cG.prototype={
cz:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bD(new P.it(this,b),0),a)
else throw H.c(P.u("`setTimeout()` not found."))},
cA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bD(new P.is(this,a,Date.now(),b),0),a)
else throw H.c(P.u("Periodic timer."))},
$ihD:1}
P.it.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.is.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.d.cq(s,o)}q.c=p
r.d.$1(q)},
$S:7}
P.bA.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.q(this.a)+")"}}
P.b9.prototype={
gu:function(a){var s=this.c
if(s==null)return this.b
return s.gu(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bA){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.b9){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cD.prototype={
gI:function(a){return new P.b9(this.a())}}
P.eo.prototype={}
P.dZ.prototype={}
P.e_.prototype={}
P.iw.prototype={}
P.iB.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.h(0)
throw s},
$S:1}
P.ik.prototype={
ew:function(a){var s,r,q,p=null
try{if(C.e===$.ag){a.$0()
return}P.mr(p,p,this,a)}catch(q){s=H.aA(q)
r=H.ji(q)
P.kj(p,p,this,s,r)}},
ex:function(a,b){var s,r,q,p=null
try{if(C.e===$.ag){a.$1(b)
return}P.ms(p,p,this,a,b)}catch(q){s=H.aA(q)
r=H.ji(q)
P.kj(p,p,this,s,r)}},
ey:function(a,b){return this.ex(a,b,t.z)},
dT:function(a){return new P.il(this,a)},
bL:function(a,b){return new P.im(this,a,b)}}
P.il.prototype={
$0:function(){return this.a.ew(this.b)},
$S:1}
P.im.prototype={
$1:function(a){return this.a.ey(this.b,a)},
$S:function(){return this.c.a_("~(0)")}}
P.cr.prototype={
gI:function(a){var s=new P.cs(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.cH(b)
return r}},
cH:function(a){var s=this.d
if(s==null)return!1
return this.aY(s[this.aV(a)],a)>=0},
p:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bw(s==null?q.b=P.j5():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bw(r==null?q.c=P.j5():r,b)}else return q.cC(0,b)},
cC:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.j5()
s=q.aV(b)
r=p[s]
if(r==null)p[s]=[q.aU(b)]
else{if(q.aY(r,b)>=0)return!1
r.push(q.aU(b))}return!0},
J:function(a,b){if((b&1073741823)===b)return this.dz(this.c,b)
else return this.dw(0,b)},
dw:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aV(b)
r=n[s]
q=o.aY(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.bF(p)
return!0},
bw:function(a,b){if(a[b]!=null)return!1
a[b]=this.aU(b)
return!0},
dz:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.bF(s)
delete a[b]
return!0},
bx:function(){this.r=this.r+1&1073741823},
aU:function(a){var s,r=this,q=new P.ij(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bx()
return q},
bF:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bx()},
aV:function(a){return J.fr(a)&1073741823},
aY:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.K(a[r].a,b))return r
return-1}}
P.ij.prototype={}
P.cs.prototype={
gu:function(a){return H.Q(this).c.a(this.d)},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aj(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c0.prototype={}
P.c5.prototype={$ih:1,$ie:1,$il:1}
P.x.prototype={
gI:function(a){return new H.aJ(a,this.gk(a))},
v:function(a,b){return this.i(a,b)},
F:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.i(a,s))
if(r!==this.gk(a))throw H.c(P.aj(a))}},
gbU:function(a){return this.gk(a)===0},
eA:function(a,b){var s,r,q,p,o=this
if(o.gbU(a)){s=J.iV(0)
return s}r=o.i(a,0)
q=P.dr(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.i(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
ez:function(a){return this.eA(a,!0)},
h:function(a){return P.iU(a,"[","]")}}
P.c7.prototype={}
P.h9.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.q(a)
r.a=s+": "
r.a+=H.q(b)},
$S:28}
P.M.prototype={
F:function(a,b){var s,r,q
for(s=J.aB(this.gM(a)),r=H.bF(a).a_("M.V");s.q();){q=s.gu(s)
b.$2(q,r.a(this.i(a,q)))}},
gk:function(a){return J.aT(this.gM(a))},
h:function(a){return P.jF(a)},
$iL:1}
P.dQ.prototype={
S:function(a,b){var s
for(s=J.aB(b);s.q();)this.p(0,s.gu(s))},
h:function(a){return P.iU(this,"{","}")},
v:function(a,b){var s,r,q,p,o="index"
H.mE(b,o,t.S)
P.jJ(b,o)
for(s=P.lQ(this,this.r),r=H.Q(s).c,q=0;s.q();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.D(b,this,o,null,q))}}
P.cz.prototype={$ih:1,$ie:1}
P.ct.prototype={}
P.cK.prototype={}
P.d0.prototype={}
P.d2.prototype={}
P.fN.prototype={}
P.fZ.prototype={
h:function(a){return this.a}}
P.fY.prototype={
cJ:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.bs("")
if(o>b)n.a+=C.b.ax(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.ax(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.i0.prototype={}
P.i1.prototype={
dX:function(a){var s,r,q,p=P.j_(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.iu(r)
if(q.cO(a,0,p)!==p){C.b.b9(a,p-1)
q.b5()}return new Uint8Array(r.subarray(0,H.m9(0,q.b,s)))}}
P.iu.prototype={
b5:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
dO:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.b5()
return!1}},
cO:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.b9(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.aA(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.dO(p,C.b.aA(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.b5()}else if(p<=2047){o=l.b
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
P.V.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.V&&this.a===b.a&&!0},
ai:function(a,b){return C.d.ai(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.d.aC(s,30))&1073741823},
h:function(a){var s=this,r=P.l5(H.lr(s)),q=P.d5(H.lp(s)),p=P.d5(H.ll(s)),o=P.d5(H.lm(s)),n=P.d5(H.lo(s)),m=P.d5(H.lq(s)),l=P.l6(H.ln(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.aX.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gG:function(a){return C.d.gG(this.a)},
ai:function(a,b){return C.d.ai(this.a,b.a)},
h:function(a){var s,r,q,p=new P.fK(),o=this.a
if(o<0)return"-"+new P.aX(0-o).h(0)
s=p.$1(C.d.a0(o,6e7)%60)
r=p.$1(C.d.a0(o,1e6)%60)
q=new P.fJ().$1(o%1e6)
return""+C.d.a0(o,36e8)+":"+s+":"+r+"."+q}}
P.fJ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fK.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.A.prototype={}
P.cX.prototype={
h:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fP(s)
return"Assertion failed"}}
P.eb.prototype={}
P.dD.prototype={
h:function(a){return"Throw of null."}}
P.a9.prototype={
gaX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaW:function(){return""},
h:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gaX()+o+m
if(!q.a)return l
s=q.gaW()
r=P.fP(q.b)
return l+s+": "+r}}
P.cj.prototype={
gaX:function(){return"RangeError"},
gaW:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.q(q):""
else if(q==null)s=": Not greater than or equal to "+H.q(r)
else if(q>r)s=": Not in inclusive range "+H.q(r)+".."+H.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.q(r)
return s}}
P.dg.prototype={
gaX:function(){return"RangeError"},
gaW:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.eh.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ee.prototype={
h:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.br.prototype={
h:function(a){return"Bad state: "+this.a}}
P.d1.prototype={
h:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fP(s)+"."}}
P.dG.prototype={
h:function(a){return"Out of Memory"},
$iA:1}
P.cn.prototype={
h:function(a){return"Stack Overflow"},
$iA:1}
P.d3.prototype={
h:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eB.prototype={
h:function(a){return"Exception: "+this.a}}
P.fV.prototype={
h:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.ax(q,0,75)+"..."
return r+"\n"+q}}
P.e.prototype={
aN:function(a,b){return new H.b8(this,b)},
gk:function(a){var s,r=this.gI(this)
for(s=0;r.q();)++s
return s},
gab:function(a){var s,r=this.gI(this)
if(!r.q())throw H.c(H.h0())
s=r.gu(r)
if(r.q())throw H.c(H.lb())
return s},
v:function(a,b){var s,r,q
P.jJ(b,"index")
for(s=this.gI(this),r=0;s.q();){q=s.gu(s)
if(b===r)return q;++r}throw H.c(P.D(b,this,"index",null,r))},
h:function(a){return P.la(this,"(",")")}}
P.dh.prototype={}
P.a4.prototype={
gG:function(a){return P.J.prototype.gG.call(C.L,this)},
h:function(a){return"null"}}
P.J.prototype={constructor:P.J,$iJ:1,
t:function(a,b){return this===b},
gG:function(a){return H.ch(this)},
h:function(a){return"Instance of '"+H.ci(this)+"'"},
toString:function(){return this.h(this)}}
P.bs.prototype={
gk:function(a){return this.a.length},
h:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.j.prototype={}
W.fs.prototype={
gk:function(a){return a.length}}
W.cV.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.cW.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.bc.prototype={$ibc:1}
W.d_.prototype={}
W.aU.prototype={$iaU:1}
W.aV.prototype={
ci:function(a,b,c){var s=a.getContext(b,P.kn(c))
return s},
$iaV:1}
W.aa.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
gk:function(a){return a.length}}
W.z.prototype={$iz:1}
W.bR.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.fC.prototype={}
W.a3.prototype={}
W.ak.prototype={}
W.fD.prototype={
gk:function(a){return a.length}}
W.fE.prototype={
gk:function(a){return a.length}}
W.fF.prototype={
gk:function(a){return a.length}}
W.bS.prototype={}
W.fH.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.bT.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.bU.prototype={
h:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.q(r)+", "
s=a.top
s.toString
return r+H.q(s)+") "+H.q(this.gam(a))+" x "+H.q(this.gaj(a))},
t:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.ba(b)
if(s===r.gbV(b)){s=a.top
s.toString
s=s===r.gcc(b)&&this.gam(a)===r.gam(b)&&this.gaj(a)===r.gaj(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.c.gG(r)
s=a.top
s.toString
return W.k2(r,C.c.gG(s),C.c.gG(this.gam(a)),C.c.gG(this.gaj(a)))},
gbB:function(a){return a.height},
gaj:function(a){var s=this.gbB(a)
s.toString
return s},
gbV:function(a){var s=a.left
s.toString
return s},
gcc:function(a){var s=a.top
s.toString
return s},
gbG:function(a){return a.width},
gam:function(a){var s=this.gbG(a)
s.toString
return s},
$iaM:1}
W.d7.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
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
W.er.prototype={
gbU:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
i:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
p:function(a,b){this.a.appendChild(b).toString
return b},
gI:function(a){var s=this.ez(this)
return new J.a_(s,s.length)}}
W.w.prototype={
gaq:function(a){return new W.ey(a)},
gbM:function(a){var s=a.children
s.toString
return new W.er(a,s)},
h:function(a){var s=a.localName
s.toString
return s},
T:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.jB
if(s==null){s=[]
r=new W.cf(s)
s.push(W.k1(null))
s.push(W.k6())
$.jB=r
d=r}else d=s
s=$.jA
if(s==null){s=new W.ff(d)
$.jA=s
c=s}else{s.a=d
c=s}}if($.aE==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aE=r
r=r.createRange()
r.toString
$.iS=r
r=$.aE.createElement("base")
t.y.a(r)
s=s.baseURI
s.toString
r.href=s
$.aE.head.appendChild(r).toString}s=$.aE
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aE
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aE.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.A(C.O,s)}else s=!1
if(s){$.iS.selectNodeContents(q)
s=$.iS
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aE.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aE.body)J.jq(q)
c.bl(p)
document.adoptNode(p).toString
return p},
dY:function(a,b,c){return this.T(a,b,c,null)},
ck:function(a,b){var s
a.textContent=null
s=a.appendChild(this.T(a,b,null,null))
s.toString},
gc9:function(a){var s=a.tagName
s.toString
return s},
$iw:1}
W.fL.prototype={
$1:function(a){return t.h.b(a)},
$S:15}
W.f.prototype={$if:1}
W.b.prototype={
dP:function(a,b,c,d){if(c!=null)this.cE(a,b,c,!1)},
cE:function(a,b,c,d){return a.addEventListener(b,H.bD(c,1),!1)},
$ib:1}
W.am.prototype={$iam:1}
W.d9.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.da.prototype={
gk:function(a){return a.length}}
W.dc.prototype={
gk:function(a){return a.length}}
W.an.prototype={$ian:1}
W.fX.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.aY.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.b_.prototype={$ib_:1}
W.h7.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.ha.prototype={
gk:function(a){return a.length}}
W.du.prototype={
i:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aR(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new W.hb(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
W.hb.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dv.prototype={
i:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aR(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new W.hc(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.aq.prototype={$iaq:1}
W.dw.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.a0.prototype={$ia0:1}
W.S.prototype={
gab:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.j0("No elements"))
if(r>1)throw H.c(P.j0("More than one element"))
s=s.firstChild
s.toString
return s},
S:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gI:function(a){var s=this.a.childNodes
return new W.bZ(s,s.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.n.prototype={
eq:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
eu:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.kR(s,b,a)}catch(q){H.aA(q)}return a},
h:function(a){var s=a.nodeValue
return s==null?this.cm(a):s},
dD:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$in:1}
W.ce.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.as.prototype={
gk:function(a){return a.length},
$ias:1}
W.dK.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.dN.prototype={
i:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aR(s.value[1]))}},
gM:function(a){var s=[]
this.F(a,new W.ho(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iL:1}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dP.prototype={
gk:function(a){return a.length}}
W.ae.prototype={$iae:1}
W.dT.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.at.prototype={$iat:1}
W.dU.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.au.prototype={
gk:function(a){return a.length},
$iau:1}
W.dY.prototype={
i:function(a,b){return a.getItem(H.iy(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gM:function(a){var s=[]
this.F(a,new W.hy(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iL:1}
W.hy.prototype={
$2:function(a,b){return this.a.push(a)},
$S:26}
W.a7.prototype={$ia7:1}
W.co.prototype={
T:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aS(a,b,c,d)
s=W.l7("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.S(r).S(0,new W.S(s))
return r}}
W.e1.prototype={
T:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aS(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.S(C.t.T(r,b,c,d))
r=new W.S(r.gab(r))
new W.S(s).S(0,new W.S(r.gab(r)))
return s}}
W.e2.prototype={
T:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.aS(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.S(C.t.T(r,b,c,d))
new W.S(s).S(0,new W.S(r.gab(r)))
return s}}
W.bt.prototype={$ibt:1}
W.af.prototype={$iaf:1}
W.a1.prototype={$ia1:1}
W.e4.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.e5.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.hC.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.av.prototype={$iav:1}
W.b5.prototype={$ib5:1}
W.e9.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.hH.prototype={
gk:function(a){return a.length}}
W.ax.prototype={}
W.i_.prototype={
h:function(a){var s=String(a)
s.toString
return s}}
W.el.prototype={
gk:function(a){return a.length}}
W.aN.prototype={
ge0:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.u("deltaY is not supported"))},
ge_:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.u("deltaX is not supported"))},
$iaN:1}
W.bx.prototype={
dE:function(a,b){var s=a.requestAnimationFrame(H.bD(b,1))
s.toString
return s},
cN:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.by.prototype={$iby:1}
W.es.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.cq.prototype={
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
t:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.ba(b)
if(s===r.gbV(b)){s=a.top
s.toString
if(s===r.gcc(b)){s=a.width
s.toString
if(s===r.gam(b)){s=a.height
s.toString
r=s===r.gaj(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gG(p)
s=a.top
s.toString
s=C.c.gG(s)
r=a.width
r.toString
r=C.c.gG(r)
q=a.height
q.toString
return W.k2(p,s,r,C.c.gG(q))},
gbB:function(a){return a.height},
gaj:function(a){var s=a.height
s.toString
return s},
gbG:function(a){return a.width},
gam:function(a){var s=a.width
s.toString
return s}}
W.eF.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.cu.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.eY.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.f4.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ip:1,
$ih:1,
$it:1,
$ie:1,
$il:1}
W.ep.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gM(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p]
b.$2(o,H.iy(q.getAttribute(o)))}},
gM:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.ey.prototype={
i:function(a,b){return this.a.getAttribute(H.iy(b))},
gk:function(a){return this.gM(this).length}}
W.iT.prototype={}
W.eA.prototype={}
W.ig.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.j4.prototype={}
W.bz.prototype={
ct:function(a){var s
if($.eG.a===0){for(s=0;s<262;++s)$.eG.m(0,C.N[s],W.mO())
for(s=0;s<12;++s)$.eG.m(0,C.i[s],W.mP())}},
ah:function(a){return $.kO().A(0,W.bW(a))},
a1:function(a,b,c){var s=$.eG.i(0,W.bW(a)+"::"+b)
if(s==null)s=$.eG.i(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iar:1}
W.B.prototype={
gI:function(a){return new W.bZ(a,this.gk(a))}}
W.cf.prototype={
ah:function(a){return C.a.bK(this.a,new W.hf(a))},
a1:function(a,b,c){return C.a.bK(this.a,new W.he(a,b,c))},
$iar:1}
W.hf.prototype={
$1:function(a){return a.ah(this.a)},
$S:17}
W.he.prototype={
$1:function(a){return a.a1(this.a,this.b,this.c)},
$S:17}
W.cA.prototype={
cw:function(a,b,c,d){var s,r,q
this.a.S(0,c)
s=b.aN(0,new W.ip())
r=b.aN(0,new W.iq())
this.b.S(0,s)
q=this.c
q.S(0,C.P)
q.S(0,r)},
ah:function(a){return this.a.A(0,W.bW(a))},
a1:function(a,b,c){var s=this,r=W.bW(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.dR(c)
else if(q.A(0,"*::"+b))return s.d.dR(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iar:1}
W.ip.prototype={
$1:function(a){return!C.a.A(C.i,a)},
$S:19}
W.iq.prototype={
$1:function(a){return C.a.A(C.i,a)},
$S:19}
W.f6.prototype={
a1:function(a,b,c){if(this.cp(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.ir.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:24}
W.f5.prototype={
ah:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.bW(a)==="foreignObject")return!1
if(s)return!0
return!1},
a1:function(a,b,c){if(b==="is"||C.b.aQ(b,"on"))return!1
return this.ah(a)},
$iar:1}
W.bZ.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kQ(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gu:function(a){return H.Q(this).c.a(this.d)}}
W.io.prototype={}
W.ff.prototype={
bl:function(a){var s,r=new W.iv(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
ap:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.jq(a)
else b.removeChild(a).toString},
dG:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.kU(a)
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
o=p}l=o}catch(n){H.aA(n)}r="element unprintable"
try{r=J.cU(a)}catch(n){H.aA(n)}try{q=W.bW(a)
this.dF(a,b,l,r,q,k,j)}catch(n){if(H.aA(n) instanceof P.a9)throw n
else{this.ap(a,b)
p=window
p.toString
p="Removing corrupted element "+H.q(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
dF:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.ap(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.ah(a)){m.ap(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.q(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.a1(a,"is",g)){m.ap(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.gM(f).slice(0)
for(p=f.gM(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.kX(o)
H.iy(o)
if(!r.a1(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.q(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.G.b(a)){s=a.content
s.toString
m.bl(s)}}}
W.iv.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.dG(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.ap(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.j0("Corrupt HTML")
throw H.c(n)}}catch(p){H.aA(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:22}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f1.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
P.iz.prototype={
$1:function(a){this.a.push(P.kf(a))},
$S:21}
P.iD.prototype={
$2:function(a,b){this.a[a]=P.kf(b)},
$S:20}
P.db.prototype={
gan:function(){return new H.b1(new H.b8(this.b,new P.fT()),new P.fU())},
F:function(a,b){C.a.F(P.h6(this.gan(),!1),b)},
m:function(a,b,c){var s=this.gan()
J.kW(s.b.$1(J.fq(s.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.aT(this.gan().a)},
i:function(a,b){var s=this.gan()
return s.b.$1(J.fq(s.a,b))},
gI:function(a){var s=P.h6(this.gan(),!1)
return new J.a_(s,s.length)}}
P.fT.prototype={
$1:function(a){return t.h.b(a)},
$S:15}
P.fU.prototype={
$1:function(a){return t.h.a(a)},
$S:40}
P.b0.prototype={$ib0:1}
P.dp.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.b3.prototype={$ib3:1}
P.dE.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.hi.prototype={
gk:function(a){return a.length}}
P.bq.prototype={$ibq:1}
P.e0.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.i.prototype={
gbM:function(a){return new P.db(a,new W.S(a))},
T:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.k1(null))
o.push(W.k6())
o.push(new W.f5())
c=new W.ff(new W.cf(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.k.dY(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.S(q)
p=r.gab(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ii:1}
P.b6.prototype={$ib6:1}
P.ea.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.eJ.prototype={}
P.eK.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.fb.prototype={}
P.fc.prototype={}
P.fw.prototype={
gk:function(a){return a.length}}
P.cY.prototype={
i:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aR(s.value[1]))}},
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
P.cZ.prototype={
gk:function(a){return a.length}}
P.aD.prototype={}
P.dF.prototype={
gk:function(a){return a.length}}
P.eq.prototype={}
P.ck.prototype={$ick:1}
P.dV.prototype={
gk:function(a){var s=a.length
s.toString
return s},
i:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.D(b,a,null,null,null))
s=P.aR(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.i(a,b)},
$ih:1,
$ie:1,
$il:1}
P.eZ.prototype={}
P.f_.prototype={}
K.aC.prototype={
a7:function(a,b){return!0},
h:function(a){return"all"}}
K.de.prototype={
a7:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)if(s[q].a7(0,b))return!0
return!1},
h:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.h(0)}return q}}
K.X.prototype={
a7:function(a,b){return!this.cl(0,b)},
h:function(a){return"!["+this.aT(0)+"]"}}
K.hj.prototype={
a7:function(a,b){return this.a<=b&&this.b>=b},
h:function(a){var s=H.iZ(this.a),r=H.iZ(this.b)
return s+".."+r}}
K.m.prototype={
n:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.C("May not create a Set with zero characters."))
s=new H.ap(t.I)
for(r=new H.aJ(a,a.gk(a)),q=H.Q(r).c;r.q();)s.m(0,q.a(r.d),!0)
p=P.h6(new H.aI(s),!0)
if(!!p.immutable$list)H.P(P.u("sort"))
H.lB(p,J.mh())
this.a=p},
a7:function(a,b){return C.a.A(this.a,b)},
h:function(a){return P.j1(this.a)}}
L.dW.prototype={
l:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.hI(this.a.j(0,b),[])
s.push(p)
return p},
e4:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
if(p.a7(0,a))return p}return null},
h:function(a){return this.b},
bE:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.A(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aI(s.c)
s=J.aB(s==null?[]:s)
for(;s.q();){r=s.gu(s)
l+="\n"
q=m.d
p=q==null?null:q.c.i(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.A(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.y)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.aT(0))}return l.charCodeAt(0)==0?l:l}}
L.e7.prototype={
h:function(a){var s=H.jm(this.b,"\n","\\n"),r=H.jm(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e8.prototype={
aa:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.y)(c),++q)r.m(0,c[q],b)},
h:function(a){return this.b}}
L.hE.prototype={
j:function(a,b){var s=this.a,r=s.i(0,b)
if(r==null){r=new L.dW(this,b,[])
s.m(0,b,r)}return r},
E:function(a){var s,r=this.b,q=r.i(0,a)
if(q==null){s=t.N
q=new L.e8(a,P.c3(s,s))
r.m(0,a,q)}return q},
bj:function(a){return this.eC(a)},
eC:function(a){var s=this
return P.mp(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$bj(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.Q(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.a.bf(a1,0)
else{if(!r.q()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=c==null
f=g?null:c.e4(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.j1(a0)
throw H.c(P.C("Untokenizable string [state: "+H.q(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.P(P.u("removeRange"))
P.j_(0,i,a0.length)
a0.splice(0,i-0)
C.a.S(a1,a0)
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
case 6:if(!f.c)b.push(h)
c=f.b
g=c.d
if(g!=null){e=P.j1(b)
g=c.d
if(g==null)l=null
else{d=g.c.i(0,e)
g=new L.e7(d==null?g.b:d,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.lO()
case 1:return P.lP(o)}}},t.J)},
h:function(a){var s,r,q=new P.bs(""),p=this.d
if(p!=null)q.a=""+(p.bE()+"\n")
for(p=this.a,p=p.geE(p),p=new H.c8(J.aB(p.a),p.b),s=H.Q(p).Q[1];p.q();){r=s.a(p.a)
if(r!=this.d)q.a+=H.q(r==null?null:r.bE())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.hI.prototype={
h:function(a){return this.b.b+": "+this.aT(0)}}
O.bf.prototype={
aP:function(a,b){this.b=null
this.c=a},
dl:function(a){return!0},
cs:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gI:function(a){var s=this.a
return new J.a_(s,s.length)},
v:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
p:function(a,b){var s,r
this.dl([b])
s=this.a
r=s.length
s.push(b)
this.cs(r,[b])},
$ie:1}
O.ca.prototype={
gk:function(a){return this.a.length},
gw:function(){var s=this.b
return s==null?this.b=D.al():s},
ac:function(){var s=this.b
return s==null?null:s.R(null)},
gat:function(a){var s=this.a
if(s.length>0)return C.a.gaH(s)
else return V.dt()},
c5:function(a){this.a.push(a)
this.ac()},
be:function(){var s=this.a
if(s.length>0){s.pop()
this.ac()}}}
E.fy.prototype={}
E.bh.prototype={
cd:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aM(0,b,q)
if(!J.K(o,q.x)){s=q.x
q.x=o
q.a8(new D.F("matrix",s,o))}for(p=q.y.a,p=new J.a_(p,p.length),r=H.Q(p).c;p.q();)r.a(p.d).cd(0,b)},
al:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=null,h=a.dx,g=j.x,f=h.a
if(g==null)f.push(h.gat(h))
else f.push(g.L(0,h.gat(h)))
h.ac()
a.c6(j.f)
s=C.a.gaH(a.dy)
if(j.d!=null)if(s!=null){r=s.a
if(r==null){g=s.d
f=g?"High":"Grey"
q=a.fr
r=q.i(0,f+"ViewDepth")
if(r==null){f=a.a
p=g?"High":"Grey"
p+="ViewDepth"
r=new A.d6(f,p)
o=""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
o=o.charCodeAt(0)==0?o:o
n=""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n"
n=(g?n+"   vec3 clr = vec3(f, f, f);\n":n+"  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
r.c=o
r.d=n.charCodeAt(0)==0?n:n
m=r.bz(o,35633)
l=r.bz(r.d,35632)
o=f.createProgram()
o.toString
r.e=o
f.attachShader(r.ga4(),m)
f.attachShader(r.ga4(),l)
f.linkProgram(r.ga4())
if(!H.ke(f.getProgramParameter(r.ga4(),35714))){k=f.getProgramInfoLog(r.ga4())
if(k==null)k="undefined log error"
f.deleteProgram(r.e)
H.P(P.C("Failed to link shader: "+k))}r.dK()
r.dM()
r.x=r.gaq(r).i(0,"posAttr")
g=t.n
r.y=g.a(r.gaL().i(0,"width"))
r.z=g.a(r.gaL().i(0,"stop"))
g=t.a
r.Q=g.a(r.gaL().i(0,"viewObjMat"))
r.ch=g.a(r.gaL().i(0,"projMat"))
if(p.length===0)H.P(P.C("May not cache a shader with no name."))
if(q.dW(0,p))H.P(P.C('Shader cache already contains a shader by the name "'+p+'".'))
q.m(0,p,r)}r=s.a=r}g=j.e
if((!(g instanceof Z.bO)?j.e=null:g)==null){g=j.d
g=g==null?i:g.dU(new Z.i9(a.a),$.aS())
if(g==null)g=i
else{f=g.e3($.aS())
if(f!=null){q=r.x
q=q==null?i:q.c
f.e=q==null?0:q}}j.e=g}g=a.a
g.useProgram(r.e)
r.gaq(r).e2()
f=s.b
q=s.c
p=r.y
if(p!=null)p.a.uniform1f(p.d,f-q)
f=s.c
q=r.z
if(q!=null)q.a.uniform1f(q.d,f)
f=a.cy
f=f.gat(f)
q=r.ch
if(q!=null)q.bm(f.cb(0,!0))
f=a.cx
if(f==null){f=a.db
f=a.cx=f.gat(f).L(0,h.gat(h))}q=r.Q
if(q!=null)q.bm(f.cb(0,!0))
f=t.D.a(j.e)
f.b6(a)
f.al(a)
f.eD(a)
g.useProgram(i)
r.gaq(r).e1()}for(g=j.y.a,g=new J.a_(g,g.length),f=H.Q(g).c;g.q();)f.a(g.d).al(a)
a.c4()
h.be()},
a8:function(a){var s=this.z
return s==null?null:s.R(a)},
W:function(){return this.a8(null)},
c1:function(a){this.e=null
this.a8(a)},
ek:function(){return this.c1(null)},
c_:function(a){return this.a8(a)},
ej:function(){return this.c_(null)},
bY:function(a){return this.a8(a)},
eg:function(){return this.bY(null)},
ef:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbX(),q=0;q<b.length;b.length===s||(0,H.y)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bX()
n=o.a;(n==null?o.a=[]:n).push(r)}this.W()},
ei:function(a,b){var s,r
for(s=b.gI(b),r=this.gbX();s.q();)s.gu(s).gw().J(0,r)
this.W()},
h:function(a){return"Unnamed entity"}}
E.be.prototype={
h:function(a){return this.b}}
E.bo.prototype={
h:function(a){return this.b}}
E.ie.prototype={}
E.hk.prototype={
cr:function(a,b){var s=this
s.cy.gw().p(0,new E.hl(s))
s.db.gw().p(0,new E.hm(s))
s.dx.gw().p(0,new E.hn(s))},
c6:function(a){var s=this.dy
return s.push(a==null?C.a.gaH(s):a)},
c4:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hl.prototype={
$1:function(a){},
$S:5}
E.hm.prototype={
$1:function(a){this.a.cx=null},
$S:5}
E.hn.prototype={
$1:function(a){this.a.cx=null},
$S:5}
E.e6.prototype={
br:function(a){this.c7()},
bq:function(){return this.br(null)},
ge7:function(){var s,r=this,q=Date.now(),p=C.d.a0(P.jz(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.V(q,!1)
return s/p},
bC:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.bS(r*o)
r=s.clientHeight
r.toString
p=C.c.bS(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.jQ(C.h,this.gev())}},
c7:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.v.cN(s)
r=W.kk(new E.hB(this),t.H)
r.toString
C.v.dE(s,r)}},
es:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.bC()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.V(p,!1)
q.y=P.jz(p-q.r.a).a*0.000001
p=q.cy
C.a.sk(p.a,0)
p.ac()
p=q.db
C.a.sk(p.a,0)
p.ac()
p=q.dx
C.a.sk(p.a,0)
p.ac()
p=q.dy
C.a.sk(p,0)
p.push(null)
m.al(q)}q=n.Q
if(q!=null)q.R(null)}catch(o){s=H.aA(o)
r=H.ji(o)
P.jl("Error: "+H.q(s))
P.jl("Stack: "+H.q(r))
throw H.c(s)}}}
E.hB.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.es()}},
$S:23}
Z.em.prototype={}
Z.bN.prototype={
b6:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aA(q)
r=P.C('Failed to bind buffer attribute "'+p.a.h(0)+'": '+H.q(s))
throw H.c(r)}},
h:function(a){var s=this
return"["+s.a.h(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.q(s.e)+"]"}}
Z.i9.prototype={}
Z.bO.prototype={
e3:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
b6:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].b6(a)}},
eD:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
al:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
h:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.ci(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){n=s[q]
o.push("["+n.a.h(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+H.q(n.e)+"]")}return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(m,", ")+"\nAttrs:   "+C.a.l(o,", ")}}
Z.h_.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ci(this.c)+"'")+"]"}}
Z.ek.prototype={
gbn:function(a){var s=this.a,r=(s&$.aS().a)!==0?3:0
if((s&$.bI().a)!==0)r+=3
if((s&$.bH().a)!==0)r+=3
if((s&$.bJ().a)!==0)r+=2
if((s&$.bK().a)!==0)r+=3
if((s&$.cS().a)!==0)r+=3
if((s&$.cT().a)!==0)r+=4
if((s&$.bL().a)!==0)++r
return(s&$.bG().a)!==0?r+4:r},
dS:function(a){var s,r=$.aS(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bJ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bK()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bG()
if((q&r.a)!==0)if(s===a)return r
return $.kN()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ek))return!1
return this.a===b.a},
h:function(a){var s=[],r=this.a
if((r&$.aS().a)!==0)s.push("Pos")
if((r&$.bI().a)!==0)s.push("Norm")
if((r&$.bH().a)!==0)s.push("Binm")
if((r&$.bJ().a)!==0)s.push("Txt2D")
if((r&$.bK().a)!==0)s.push("TxtCube")
if((r&$.cS().a)!==0)s.push("Clr3")
if((r&$.cT().a)!==0)s.push("Clr4")
if((r&$.bL().a)!==0)s.push("Weight")
if((r&$.bG().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.l(s,"|")}}
D.fA.prototype={}
D.bX.prototype={
p:function(a,b){var s=this.a
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
s=a==null?new D.W():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.F(P.h6(p,!0),new D.fQ(s))
r=q.b
if(r!=null){q.b=[]
C.a.F(r,new D.fR(s))}return!0},
aw:function(a){var s,r=this,q=r.d
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
D.W.prototype={}
D.bj.prototype={}
D.bk.prototype={}
D.F.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.q(this.d)+" => "+H.q(this.e)}}
X.bP.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bP))return!1
if(this.a!==b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.dm.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!==b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+this.a}}
X.h3.prototype={}
X.h8.prototype={
bd:function(a,b){this.r=a.a
return!1},
av:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
au:function(a,b){return!1},
eo:function(a){return!1},
d9:function(a,b,c){return}}
X.bm.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bm))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
h:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.l(s,"+")}}
X.hd.prototype={
bd:function(a,b){this.f=a.a
return!1},
av:function(a,b){this.f=(this.f&~a.a)>>>0
return!1},
au:function(a,b){return!1},
ep:function(a,b){return!1}}
X.hG.prototype={
en:function(a){return!1},
el:function(a){return!1},
em:function(a){return!1}}
X.ei.prototype={
gaG:function(a){var s=this.b
return s==null?this.b=new X.h3(P.c4(t.S)):s},
gak:function(){var s,r=this.c
if(r==null){r=$.b4
if(r==null){r=$.b4=new V.a5(0,0)
s=r}else s=r
r=this.c=new X.hd(this,r,s,new P.V(Date.now(),!1),new P.V(Date.now(),!1))}return r},
ga6:function(){var s=this.d
if(s==null){s=$.b4
if(s==null)s=$.b4=new V.a5(0,0)
s=this.d=new X.h8(this,s,new P.V(Date.now(),!1),new P.V(Date.now(),!1))}return s},
gbk:function(){var s,r=this.e
if(r==null){r=$.b4
if(r==null){r=$.b4=new V.a5(0,0)
s=r}else s=r
r=this.e=new X.hG(this,r,s,new P.V(Date.now(),!1),new P.V(Date.now(),!1))}return r},
by:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dm(p,new X.bm(s,r,q))},
af:function(a){var s
this.gaG(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
b4:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gaG(this)
a.altKey
a.shiftKey},
a5:function(a){var s,r,q,p
if(a==null){s=$.b4
return s==null?$.b4=new V.a5(0,0):s}s=this.a.getBoundingClientRect()
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
ao:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.bv(r,s)},
b2:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.y)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.X(n)
m=o.pageY
m.toString
C.c.X(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.X(l)
l=o.pageY
l.toString
l=C.c.X(l)
k=j.top
k.toString
s.push(new V.a5(n-m,l-k))}return s},
a3:function(a){var s,r,q,p
if(a==null)return new X.bP(0,new X.bm(!1,!1,!1))
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
return new X.bP(s,new X.bm(r,q,p))},
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
d4:function(a){return this.f=!0},
cT:function(a){return this.f=!1},
cZ:function(a){if(this.f&&this.aZ(a))a.preventDefault()},
d8:function(a){var s,r=this
if(!r.f)return
s=r.by(a)
r.gaG(r).d.p(0,s.a)},
d6:function(a){var s,r=this
if(!r.f)return
s=r.by(a)
r.gaG(r).d.J(0,s.a)},
dc:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.af(a)
if(p.x){s=p.a3(a)
r=p.ao(a)
if(p.ga6().bd(s,r))a.preventDefault()
return}s=p.a3(a)
q=p.a5(a)
if(p.gak().bd(s,q))a.preventDefault()},
dg:function(a){var s,r,q,p=this
p.af(a)
s=p.a3(a)
if(p.x){r=p.ao(a)
if(p.ga6().av(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gak().av(s,q))a.preventDefault()},
d2:function(a){var s,r,q,p=this
if(!p.aZ(a)){p.af(a)
s=p.a3(a)
if(p.x){r=p.ao(a)
if(p.ga6().av(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gak().av(s,q))a.preventDefault()}},
de:function(a){var s,r,q,p=this
p.af(a)
s=p.a3(a)
if(p.x){r=p.ao(a)
if(p.ga6().au(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gak().au(s,q))a.preventDefault()},
d0:function(a){var s,r,q,p=this
if(!p.aZ(a)){p.af(a)
s=p.a3(a)
if(p.x){r=p.ao(a)
if(p.ga6().au(s,r))a.preventDefault()
return}q=p.a5(a)
if(p.gak().au(s,q))a.preventDefault()}},
di:function(a){var s,r,q,p=this
p.af(a)
s=p.Q
r=new V.bv(C.u.ge_(a)*s,C.u.ge0(a)*s)
if(p.x){if(p.ga6().eo(r))a.preventDefault()
return}q=p.a5(a)
if(p.gak().ep(r,q))a.preventDefault()},
dk:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.a3(q.y)
r=q.a5(q.y)
q.ga6().d9(s,r,p)}},
dv:function(a){var s,r=this
r.a.focus()
r.f=!0
r.b4(a)
s=r.b2(a)
if(r.gbk().en(s))a.preventDefault()},
dr:function(a){var s
this.b4(a)
s=this.b2(a)
if(this.gbk().el(s))a.preventDefault()},
dt:function(a){var s
this.b4(a)
s=this.b2(a)
if(this.gbk().em(s))a.preventDefault()}}
V.bg.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bg))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"},
B:function(){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.fO.prototype={}
V.ds.prototype={
cb:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
L:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aK(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ds))return!1
s=b.a
$.I().toString
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
h:function(a){return this.B()},
D:function(a){var s,r,q,p,o,n=this,m=V.iG([n.a,n.e,n.y,n.cx],3,0),l=V.iG([n.b,n.f,n.z,n.cy],3,0),k=V.iG([n.c,n.r,n.Q,n.db],3,0),j=V.iG([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
B:function(){return this.D("")}}
V.a5.prototype={
t:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"},
B:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.ad.prototype={
aR:function(a,b){return new V.ad(this.a-b.a,this.b-b.b,this.c-b.c)},
L:function(a,b){return new V.ad(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ad))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"},
B:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.dM.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dM))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
h:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.bv.prototype={
bb:function(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
t:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bv))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.N.prototype={
bb:function(a){return Math.sqrt(this.as(this))},
as:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
N:function(){var s=this,r=Math.sqrt(s.as(s))
if(r===1)return s
return s.cf(0,r)},
ar:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.N(s*r-q*p,q*o-n*r,n*p-s*o)},
O:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
aO:function(a){return new V.N(-this.a,-this.b,-this.c)},
L:function(a,b){return new V.N(this.a*b,this.b*b,this.c*b)},
cf:function(a,b){$.I().toString
if(Math.abs(b-0)<1e-9)return V.i2()
return new V.N(this.a/b,this.b/b,this.c/b)},
e9:function(){$.I().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.I().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
h:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"},
B:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
U.bQ.prototype={
gw:function(){var s=this.b
return s==null?this.b=D.al():s},
aM:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
return this.a.t(0,b.a)},
h:function(a){return"Constant: "+this.a.D("          ")}}
U.bi.prototype={
gw:function(){var s=this.e
return s==null?this.e=D.al():s},
P:function(a){var s=this.e
return s==null?null:s.R(a)},
cu:function(){return this.P(null)},
cR:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbs(),q=0;q<b.length;b.length===s||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.gw()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.P(new D.bj())},
dn:function(a,b){var s,r
for(s=b.gI(b),r=this.gbs();s.q();)s.gu(s).gw().J(0,r)
this.P(new D.bk())},
aM:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a_(o,o.length),n=H.Q(o).c,s=null;o.q();){r=n.a(o.d)
if(r!=null){q=r.aM(0,b,c)
s=s==null?q:q.L(0,s)}}p.f=s==null?V.dt():s
o=p.e
if(o!=null)o.aw(0)}return p.f},
t:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bi))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.K(o,q[p]))return!1}return!0},
h:function(a){return"Group"},
$iac:1}
U.ac.prototype={}
U.cl.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.al():s},
P:function(a){var s=this.y
return s==null?null:s.R(a)},
sce:function(a){var s
a=V.jn(a,0,6.283185307179586)
s=this.a
$.I().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.P(new D.F("yaw",s,a))}},
sc3:function(a,b){var s
b=V.jn(b,0,6.283185307179586)
s=this.b
$.I().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.P(new D.F("pitch",s,b))}},
sc8:function(a){var s
a=V.jn(a,0,6.283185307179586)
s=this.c
$.I().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.P(new D.F("roll",s,a))}},
sbR:function(a){var s=this.d
$.I().toString
if(!(Math.abs(s-a)<1e-9)){this.d=a
this.P(new D.F("deltaYaw",s,a))}},
sbP:function(a){var s=this.e
$.I().toString
if(!(Math.abs(s-a)<1e-9)){this.e=a
this.P(new D.F("deltaPitch",s,a))}},
sbQ:function(a){var s=this.f
$.I().toString
if(!(Math.abs(s-a)<1e-9)){this.f=a
this.P(new D.F("deltaRoll",s,a))}},
aM:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.sce(q.a+q.d*b.y)
q.sc3(0,q.b+q.e*b.y)
q.sc8(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
p=V.aK(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
o=q.b
s=Math.cos(o)
r=Math.sin(o)
p=p.L(0,V.aK(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
o=q.a
s=Math.cos(o)
r=Math.sin(o)
q.x=p.L(0,V.aK(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
p=q.y
if(p!=null)p.aw(0)}return q.x},
t:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cl))return!1
s=q.a
r=b.a
$.I().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
h:function(a){var s=this
return"Rotator: ["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+"], ["+V.v(s.d,3,0)+", "+V.v(s.e,3,0)+", "+V.v(s.f,3,0)+"]"}}
M.d8.prototype={
a2:function(a){var s=this.y
return s==null?null:s.R(a)},
cv:function(){return this.a2(null)},
cV:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gZ(),q=0;q<b.length;b.length===s||(0,H.y)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bX()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a2(new D.bj())},
cX:function(a,b){var s,r
for(s=b.gI(b),r=this.gZ();s.q();)s.gu(s).gw().J(0,r)
this.a2(new D.bk())},
sca:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gw().J(0,r.gZ())
s=r.d
r.d=a
if(a!=null)a.gw().p(0,r.gZ())
r.a2(new D.F("technique",s,r.d))}},
gw:function(){var s=this.y
return s==null?this.y=D.al():s},
al:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.c6(d.d)
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
n=C.c.X(o.a*q)
m=C.c.X(o.b*p)
l=C.c.X(o.c*q)
a.c=l
o=C.c.X(o.d*p)
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
g=V.aK(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.c5(g)
f=$.kA()
e=s.b
if(e!=null)f=e.a.L(0,f)
a.db.c5(f)}for(s=d.e.a,r=new J.a_(s,s.length),o=H.Q(r).c;r.q();)o.a(r.d).cd(0,a)
for(s=new J.a_(s,s.length),r=H.Q(s).c;s.q();)r.a(s.d).al(a)
if(d.b!=null){a.cy.be()
a.db.be()}a.c4()}}
A.fu.prototype={}
A.fv.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
e2:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
e1:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.d6.prototype={}
A.cm.prototype={
gaq:function(a){var s=this.f
if(s==null)throw H.c(P.C("Must initialize the shader prior to getting the attributes."))
return s},
gaL:function(){var s=this.r
if(s==null)throw H.c(P.C("Must initialize the shader prior to getting the uniforms."))
return s},
ga4:function(){var s=this.e
if(s==null)throw H.c(P.C(u.d))
return s},
bz:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.ke(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.C('Error compiling shader "'+H.q(q)+'": '+s))}return q},
dK:function(){var s,r,q,p,o=this,n=u.d,m=[],l=o.a,k=H.ix(l.getProgramParameter(o.ga4(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.P(P.C(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.P(P.C(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.fu(l,q,p))}o.f=new A.fv(m)},
dM:function(){var s,r,q,p,o,n,m=this,l=u.d,k=[],j=m.a,i=H.ix(j.getProgramParameter(m.ga4(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.P(P.C(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.P(P.C(l))
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
k.push(m.dZ(o,n,q,p))}m.r=new A.hV(k)},
ae:function(a,b,c){var s=this.a
if(a===1)return new A.hN(s,b,c)
else return A.j3(s,this.e,b,a,c)},
cK:function(a,b,c){var s=this.a
if(a===1)return new A.hY(s,b,c)
else return A.j3(s,this.e,b,a,c)},
cL:function(a,b,c){var s=this.a
if(a===1)return new A.hZ(s,b,c)
else return A.j3(s,this.e,b,a,c)},
aD:function(a,b){return new P.eB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
dZ:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ae(b,c,d)
case 5121:return s.ae(b,c,d)
case 5122:return s.ae(b,c,d)
case 5123:return s.ae(b,c,d)
case 5124:return s.ae(b,c,d)
case 5125:return s.ae(b,c,d)
case 5126:return new A.ec(s.a,c,d)
case 35664:return new A.hP(s.a,c,d)
case 35665:return new A.hR(s.a,c,d)
case 35666:return new A.hT(s.a,c,d)
case 35667:return new A.hQ(s.a,c,d)
case 35668:return new A.hS(s.a,c,d)
case 35669:return new A.hU(s.a,c,d)
case 35674:return new A.hW(s.a,c,d)
case 35675:return new A.hX(s.a,c,d)
case 35676:return new A.ed(s.a,c,d)
case 35678:return s.cK(b,c,d)
case 35680:return s.cL(b,c,d)
case 35670:throw H.c(s.aD("BOOL",c))
case 35671:throw H.c(s.aD("BOOL_VEC2",c))
case 35672:throw H.c(s.aD("BOOL_VEC3",c))
case 35673:throw H.c(s.aD("BOOL_VEC4",c))
default:throw H.c(P.C("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.hM.prototype={}
A.hV.prototype={
i:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
h:function(a){return this.B()},
B:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.y)(s),++p)q+=s[p].h(0)+"\n"
return q}}
A.hN.prototype={
h:function(a){return"Uniform1i: "+this.c}}
A.hQ.prototype={
h:function(a){return"Uniform2i: "+this.c}}
A.hS.prototype={
h:function(a){return"Uniform3i: "+this.c}}
A.hU.prototype={
h:function(a){return"Uniform4i: "+this.c}}
A.hO.prototype={
h:function(a){return"Uniform1iv: "+this.c}}
A.ec.prototype={
h:function(a){return"Uniform1f: "+this.c}}
A.hP.prototype={
h:function(a){return"Uniform2f: "+this.c}}
A.hR.prototype={
h:function(a){return"Uniform3f: "+this.c}}
A.hT.prototype={
h:function(a){return"Uniform4f: "+this.c}}
A.hW.prototype={
h:function(a){return"Uniform1Mat2 "+this.c}}
A.hX.prototype={
h:function(a){return"UniformMat3: "+this.c}}
A.ed.prototype={
bm:function(a){var s=new Float32Array(H.jb(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
h:function(a){return"UniformMat4: "+this.c}}
A.hY.prototype={
h:function(a){return"UniformSampler2D: "+this.c}}
A.hZ.prototype={
h:function(a){return"UniformSamplerCube: "+this.c}}
F.iQ.prototype={
$1:function(a){return new V.ad(Math.cos(a),Math.sin(a),0)},
$S:31}
F.iE.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.jp(l.$1(m),k)
k=J.jp(l.$1(m+3.141592653589793/n.c),k).aR(0,j)
s=new V.N(k.a,k.b,k.c).N()
r=$.jW
if(r==null){r=new V.N(1,0,0)
$.jW=r}if(!s.t(0,r)){r=$.jY
if(r==null){r=new V.N(0,0,1)
$.jY=r}}q=s.ar(r).N()
r=q.ar(s).N()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.L(0,l*k)
k=q.L(0,o*k)
k=new V.ad(j.a+(l.a-k.a),j.b+(l.b-k.b),j.c+(l.c-k.c))
if(!J.K(a.f,k)){a.f=k
l=a.a
if(l!=null)l.W()}},
$S:32}
F.aG.prototype={
az:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.C("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.C("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.dH(a)
s.dI(b)
s.dJ(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gK().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}},
ba:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.J(r.gK().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.W()}}s.dA()
s.dB()
s.dC()},
dH:function(a){this.a=a
a.gK().b.push(this)},
dI:function(a){this.b=a
a.gK().c.push(this)},
dJ:function(a){this.c=a
a.gK().d.push(this)},
dA:function(){var s=this.a
if(s!=null)C.a.J(s.gK().b,this)
this.a=null},
dB:function(){var s=this.b
if(s!=null)C.a.J(s.gK().c,this)
this.b=null},
dC:function(){var s=this.c
if(s!=null)C.a.J(s.gK().d,this)
this.c=null},
cF:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.i2()
if(n!=null)q=q.O(0,n)
if(s!=null)q=q.O(0,s)
if(r!=null)q=q.O(0,r)
if(q.e9())return p
return q.N()},
cG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aR(0,n)
q=new V.N(o.a,o.b,o.c).N()
o=r.aR(0,n)
return q.ar(new V.N(o.a,o.b,o.c).N()).N()},
b7:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.cF()
if(s==null){s=q.cG()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.W()}return!0},
gbN:function(a){var s=this
if(J.K(s.a,s.b))return!0
if(J.K(s.b,s.c))return!0
if(J.K(s.c,s.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.B()},
D:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gH(p)
p=a+C.b.a9(C.d.h(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gH(o)
p=p+C.b.a9(C.d.h(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gH(o)
s=p+C.b.a9(C.d.h(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.B()
s+=(p==null?"-":p)+", "
return s+"-}"},
B:function(){return this.D("")}}
F.fS.prototype={}
F.hx.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gH(q)
s=c.a
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.b
if(q==(s==null?r:s.gH(s))){q=b.c
q=q==null?r:q.gH(q)
s=c.c
q=q==(s==null?r:s.gH(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gH(q)
s=c.b
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.c
if(q==(s==null?r:s.gH(s))){q=b.c
q=q==null?r:q.gH(q)
s=c.a
q=q==(s==null?r:s.gH(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gH(q)
s=c.c
if(q==(s==null?r:s.gH(s))){q=b.b
q=q==null?r:q.gH(q)
s=c.a
if(q==(s==null?r:s.gH(s))){q=b.c
q=q==null?r:q.gH(q)
s=c.b
q=q==(s==null?r:s.gH(s))}else q=!1
return q}else return!1}}}}
F.h4.prototype={}
F.hL.prototype={}
F.hp.prototype={
gY:function(){var s=this.a
return s==null?this.a=new F.G(this,[]):s},
gaJ:function(a){var s=this.b
return s==null?this.b=new F.hr([]):s},
gaI:function(a){var s=this.c
return s==null?this.c=new F.hq(this,[]):s},
gK:function(){var s=this.d
return s==null?this.d=new F.dR(this,[]):s},
gw:function(){var s=this.e
return s==null?this.e=D.al():s},
ed:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gY().c.slice(0)
for(;s.length!==0;){r=C.a.ge5(s)
C.a.bf(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bc(0,r,o)){q.push(o)
C.a.bf(s,p)}}if(q.length>1)b.ec(q)}n.gY().ag()
n.gaI(n).bg()
n.gK().bg()
n.gaJ(n).er()
n.gaI(n).bh(new F.hL())
n.gK().bh(new F.hx())
m=n.e
if(m!=null)m.aw(0)},
dU:function(a,a0){var s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=34962,f={},e=i.gY().c.length,d=$.aS(),c=a0.a,b=(c&d.a)!==0?1:0
if((c&$.bI().a)!==0)++b
if((c&$.bH().a)!==0)++b
if((c&$.bJ().a)!==0)++b
if((c&$.bK().a)!==0)++b
if((c&$.cS().a)!==0)++b
if((c&$.cT().a)!==0)++b
if((c&$.bL().a)!==0)++b
if((c&$.bG().a)!==0)++b
s=a0.gbn(a0)
r=P.dr(e*s,0,!1)
f.a=0
q=P.lh(b,new F.hs(f,i,a0,s*4,e,s,r))
d=a.a
c=d.createBuffer()
c.toString
d.bindBuffer(g,c)
d.bufferData(g,new Float32Array(H.jb(r)),35044)
d.bindBuffer(g,h)
p=new Z.bO(new Z.em(g,c),[],q)
i.gaJ(i)
i.gaI(i)
if(i.gK().b.length!==0){o=[]
n=0
while(!0){c=i.d
if(c==null){c=i.d=new F.dR(i,[])
m=c}else m=c
if(!(n<c.b.length))break
c=m.b
if(n>=c.length)return H.d(c,n)
l=c[n]
c=l.a
if(c==null)c=h
else{m=c.a
if(m!=null){k=m.a;(k==null?m.a=new F.G(m,[]):k).ag()}c=c.e}o.push(c==null?0:c)
c=l.b
if(c==null)c=h
else{m=c.a
if(m!=null){k=m.a;(k==null?m.a=new F.G(m,[]):k).ag()}c=c.e}o.push(c==null?0:c)
c=l.c
if(c==null)c=h
else{m=c.a
if(m!=null){k=m.a;(k==null?m.a=new F.G(m,[]):k).ag()}c=c.e}o.push(c==null?0:c);++n}j=Z.lF(d,34963,o)
p.b.push(new Z.h_(4,o.length,j))}return p},
h:function(a){var s=this,r=[]
if(s.gY().c.length!==0){r.push("Vertices:")
r.push(s.gY().D("   "))}s.gaJ(s)
s.gaI(s)
if(s.gK().b.length!==0){r.push("Faces:")
r.push(s.gK().D("   "))}return C.a.l(r,"\n")},
W:function(){var s=this.e
return s==null?null:s.R(null)}}
F.hs.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.dS(a),f=g.gbn(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.G(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].eb(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bN(g,f,d*4,h.d)},
$S:33}
F.dR.prototype={
dQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.G(s,[]):l).p(0,k)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,h)
f=new F.aG()
f.az(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,k)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,h)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,g)
f=new F.aG()
f.az(k,h,g)
e.push(f)}else{(l==null?s.a=new F.G(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,h)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,g)
f=new F.aG()
f.az(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,g)
l=s.a;(l==null?s.a=new F.G(s,[]):l).p(0,k)
f=new F.aG()
f.az(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gk:function(a){return this.b.length},
bh:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gY().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.G(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bw([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bw([],[],[]):q).i(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.bc(0,n,(q==null?p.d=new F.bw([],[],[]):q).i(0,l))){n.ba()
break}}}}},
bg:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gbN(q))q.ba()}},
b8:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.y)(s),++p)if(!s[p].b7())q=!1
return q},
h:function(a){return this.B()},
D:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].D(a))
return C.a.l(p,"\n")},
B:function(){return this.D("")}}
F.hq.prototype={
gk:function(a){return 0},
bh:function(a){var s,r,q,p,o
for(s=this.a,r=s.gY().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.G(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
if(p.c==null)p.c=new F.ej([],[])
o=-1
for(;!1;--o){q=p.c;(q==null?p.c=new F.ej([],[]):q).i(0,o)}}},
bg:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r]
if(q.gbN(q))q.ba()}},
h:function(a){return this.B()},
D:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.d(s,r)
q.push(s[r].D(a+(""+r+". ")))}return C.a.l(q,"\n")},
B:function(){return this.D("")}}
F.hr.prototype={
gk:function(a){return 0},
er:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r].geG()
q=q.gaJ(q)
q.gk(q)}},
h:function(a){return this.B()},
D:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].D(a))
return C.a.l(q,"\n")},
B:function(){return this.D("")}}
F.cp.prototype={
bO:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.k_(s.cx,p,m,r,q,o,n,a,l)},
gK:function(){var s=this.d
return s==null?this.d=new F.bw([],[],[]):s},
gH:function(a){var s=this.a
if(s!=null)s.gY().ag()
return this.e},
eb:function(a){var s,r,q,p,o=this,n=null
if(a.t(0,$.aS())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.t(0,$.bI())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.t(0,$.bH()))return[0,0,1]
else if(a.t(0,$.bJ())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.t(0,$.bK()))return[0,0,0]
else if(a.t(0,$.cS())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.t(0,$.cT())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.t(0,$.bL()))return[o.ch]
else if(a.t(0,$.bG()))return[-1,-1,-1,-1]
else return[]},
b7:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.i2()
p.gK().F(0,new F.i8(o))
p.r=o.a.N()
if(r){s.W()
o=s.e
if(o!=null)o.aw(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.B()},
D:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.a9(C.d.h(q.e),0))
s=q.f
s=s==null?p:s.B()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.B()
n.push(s==null?o:s)
n.push(o)
s=q.y
s=s==null?p:s.B()
n.push(s==null?o:s)
n.push(o)
s=q.Q
s=s==null?p:s.B()
n.push(s==null?o:s)
n.push(V.v(q.ch,3,0))
n.push(o)
r=C.a.l(n,", ")
return a+"{"+r+"}"},
B:function(){return this.D("")}}
F.i8.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.O(0,r)}},
$S:10}
F.G.prototype={
ag:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
p:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.C("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.W()
return!0},
bI:function(a,b){var s=null,r=F.k_(s,s,a,s,s,b,s,s,0)
this.p(0,r)
return r},
gk:function(a){return this.c.length},
b8:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].b7()
return!0},
h:function(a){return this.B()},
D:function(a){var s,r,q,p
this.ag()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p)s.push(r[p].D(a))
return C.a.l(s,"\n")},
B:function(){return this.D("")}}
F.bw.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.d(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.d(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.d(r,b)
return r[b]},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.i3(s,b))
C.a.F(s.d,new F.i4(s,b))},
h:function(a){return this.B()},
B:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)p.push(s[q].D(""))
return C.a.l(p,"\n")}}
F.i3.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)},
$S:10}
F.i4.prototype={
$1:function(a){var s=this.a
if(!J.K(a.a,s)&&!J.K(a.b,s))this.b.$1(a)},
$S:10}
F.ej.prototype={
gk:function(a){return 0},
i:function(a,b){var s,r
if(b>=0){s=this.c
r=b-0
if(r>=0)return H.d(s,r)
return s[r]}else{s=this.b
return H.d(s,b)
return s[b]}},
h:function(a){return this.B()},
B:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].D(""))
for(s=this.c,r=0;!1;++r)q.push(s[r].D(""))
return C.a.l(q,"\n")}}
F.i6.prototype={}
F.i5.prototype={
bc:function(a,b,c){return J.K(b.f,c.f)}}
F.i7.prototype={}
F.hg.prototype={
ec:function(a){var s,r,q,p,o,n=V.i2()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.N(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.N()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.y)(a),++r){p=a[r]
q=n.N()
if(!J.K(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.R(null)}}}return null}}
O.fG.prototype={
gw:function(){var s=this.r
return s==null?this.r=D.al():s},
b1:function(a){var s=this.r
return s==null?null:s.R(a)}}
O.hA.prototype={}
X.fW.prototype={
gw:function(){var s=this.x
return s==null?this.x=D.al():s}}
X.dH.prototype={
gw:function(){var s=this.f
return s==null?this.f=D.al():s},
ad:function(a){var s=this.f
return s==null?null:s.R(a)},
cB:function(){return this.ad(null)},
sbW:function(a){var s,r,q=this
if(!J.K(q.b,a)){s=q.b
if(s!=null)s.gw().J(0,q.gbt())
r=q.b
q.b=a
if(a!=null)a.gw().p(0,q.gbt())
q.ad(new D.F("mover",r,q.b))}}}
X.hz.prototype={}
V.ai.prototype={
ay:function(a){this.b=new P.fY(C.J)
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
n=l.b.cJ(p,0,p.length)
m=n==null?p:n
m=H.jm(m," ","&nbsp;")
C.H.ck(o,m)
m=o.style
m.color=b
C.a.gaH(l.d).push(o)}},
c2:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.l(b,"\n")
r=p.c
if(r==null)r=p.c=p.aE()
if(r!=null)for(q=new H.k(s),q=new P.b9(r.bj(new H.aJ(q,q.gk(q))).a());q.q();)p.aK(q.gu(q))}}
V.iP.prototype={
$1:function(a){var s=C.c.bi(this.a.ge7(),2)
if(s!=="0.00")P.jl(s+" fps")},
$S:35}
V.d4.prototype={
aK:function(a){var s=this
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
aE:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.hF()
a2.d=a2.j(0,q)
s=a2.j(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
s=a2.j(0,p).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.E("0","9"))
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
a2.j(0,q).l(0,o).a.push(K.E("0","9"))
a2.j(0,o).l(0,o).a.push(K.E("0","9"))
s=a2.j(0,o).l(0,n)
r=new K.m([])
r.n(new H.k("."))
s.a.push(r)
a2.j(0,n).l(0,m).a.push(K.E("0","9"))
a2.j(0,m).l(0,m).a.push(K.E("0","9"))
r=a2.j(0,q).l(0,l)
s=new K.m([])
s.n(new H.k(k))
r.a.push(s)
s=a2.j(0,l).l(0,l)
r=new K.m([])
r.n(new H.k(k))
s.a.push(r)
r=a2.j(0,q).l(0,j)
s=new K.m([])
s.n(new H.k('"'))
r.a.push(s)
s=a2.j(0,j).l(0,i)
r=new K.m([])
r.n(new H.k('"'))
s.a.push(r)
r=a2.j(0,j).l(0,h)
s=new K.m([])
s.n(new H.k("\\"))
r.a.push(s)
s=a2.j(0,h).l(0,j)
r=new K.m([])
r.n(new H.k('"'))
s.a.push(r)
a2.j(0,j).l(0,j).a.push(new K.aC())
r=a2.j(0,q).l(0,g)
s=new K.m([])
s.n(new H.k("'"))
r.a.push(s)
s=a2.j(0,g).l(0,f)
r=new K.m([])
r.n(new H.k("'"))
s.a.push(r)
r=a2.j(0,g).l(0,e)
s=new K.m([])
s.n(new H.k("\\"))
r.a.push(s)
s=a2.j(0,e).l(0,g)
r=new K.m([])
r.n(new H.k("'"))
s.a.push(r)
a2.j(0,g).l(0,g).a.push(new K.aC())
r=a2.j(0,q).l(0,d)
s=new K.m([])
s.n(new H.k("/"))
r.a.push(s)
s=a2.j(0,d).l(0,c)
r=new K.m([])
r.n(new H.k("/"))
s.a.push(r)
r=a2.j(0,c).l(0,b)
s=new K.m([])
s.n(new H.k("\n"))
r.a.push(s)
s=[]
a2.j(0,c).l(0,c).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("\n"))
s.push(r)
r=a2.j(0,d).l(0,a)
s=new K.m([])
s.n(new H.k("*"))
r.a.push(s)
s=a2.j(0,a).l(0,a0)
r=new K.m([])
r.n(new H.k("*"))
s.a.push(r)
r=[]
a2.j(0,a0).l(0,a).a.push(new K.X(r))
s=new K.m([])
s.n(new H.k("*"))
r.push(s)
s=a2.j(0,a0).l(0,b)
r=new K.m([])
r.n(new H.k("/"))
s.a.push(r)
r=a2.j(0,q).l(0,a1)
s=new K.m([])
s.n(new H.k(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).l(0,a1)
r=new K.m([])
r.n(new H.k(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.E("Num")
r=a2.j(0,m)
r.d=r.a.E("Num")
r=a2.j(0,l)
r.d=r.a.E("Symbol")
r=a2.j(0,i)
r.d=r.a.E("String")
r=a2.j(0,f)
r.d=r.a.E("String")
r=a2.j(0,b)
r.d=r.a.E(c)
r=a2.j(0,a1)
r.d=r.a.E(a1)
r=a2.j(0,p)
r=r.d=r.a.E(p)
r.aa(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aa(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aa(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dd.prototype={
aK:function(a){var s=this
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
aE:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.hF()
d.d=d.j(0,q)
s=d.j(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
s=d.j(0,p).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.E("0","9"))
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
d.j(0,q).l(0,o).a.push(K.E("0","9"))
d.j(0,o).l(0,o).a.push(K.E("0","9"))
s=d.j(0,o).l(0,n)
r=new K.m([])
r.n(new H.k("."))
s.a.push(r)
d.j(0,n).l(0,m).a.push(K.E("0","9"))
d.j(0,m).l(0,m).a.push(K.E("0","9"))
r=d.j(0,q).l(0,l)
s=new K.m([])
s.n(new H.k(k))
r.a.push(s)
s=d.j(0,l).l(0,l)
r=new K.m([])
r.n(new H.k(k))
s.a.push(r)
r=d.j(0,q).l(0,j)
s=new K.m([])
s.n(new H.k("/"))
r.a.push(s)
s=d.j(0,j).l(0,i)
r=new K.m([])
r.n(new H.k("/"))
s.a.push(r)
d.j(0,j).l(0,l).a.push(new K.aC())
r=d.j(0,i).l(0,h)
s=new K.m([])
s.n(new H.k("\n"))
r.a.push(s)
s=[]
d.j(0,i).l(0,i).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("\n"))
s.push(r)
r=d.j(0,q).l(0,g)
s=new K.m([])
s.n(new H.k("#"))
r.a.push(s)
s=[]
d.j(0,g).l(0,g).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("\n"))
s.push(r)
r=d.j(0,g).l(0,f)
s=new K.m([])
s.n(new H.k("\n"))
r.a.push(s)
s=d.j(0,q).l(0,e)
r=new K.m([])
r.n(new H.k(" \n\t"))
s.a.push(r)
r=d.j(0,e).l(0,e)
s=new K.m([])
s.n(new H.k(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.E("Num")
s=d.j(0,m)
s.d=s.a.E("Num")
s=d.j(0,l)
s.d=s.a.E("Symbol")
s=d.j(0,h)
s.d=s.a.E(i)
s=d.j(0,f)
s.d=s.a.E(g)
s=d.j(0,e)
s.d=s.a.E(e)
s=d.j(0,p)
s=s.d=s.a.E(p)
s.aa(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aa(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aa(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.df.prototype={
aK:function(a){var s=this,r="#111"
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
aE:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.hF()
j.d=j.j(0,q)
s=j.j(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
s=j.j(0,p).l(0,p)
r=new K.m([])
r.n(new H.k("_"))
s=s.a
s.push(r)
s.push(K.E("0","9"))
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
s=j.j(0,p).l(0,o)
r=new K.m([])
r.n(new H.k("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).l(0,n)
r=new K.m([])
r.n(new H.k("</\\-!>="))
s.a.push(r)
r=j.j(0,n).l(0,n)
s=new K.m([])
s.n(new H.k("</\\-!>="))
r.a.push(s)
s=j.j(0,q).l(0,m)
r=new K.m([])
r.n(new H.k('"'))
s.a.push(r)
r=j.j(0,m).l(0,l)
s=new K.m([])
s.n(new H.k('"'))
r.a.push(s)
s=j.j(0,m).l(0,"EscStr")
r=new K.m([])
r.n(new H.k("\\"))
s.a.push(r)
r=j.j(0,"EscStr").l(0,m)
s=new K.m([])
s.n(new H.k('"'))
r.a.push(s)
j.j(0,m).l(0,m).a.push(new K.aC())
j.j(0,q).l(0,k).a.push(new K.aC())
s=[]
j.j(0,k).l(0,k).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k('</\\-!>=_"'))
s.push(r)
s.push(K.E("a","z"))
s.push(K.E("A","Z"))
s=j.j(0,n)
s.d=s.a.E("Symbol")
s=j.j(0,l)
s.d=s.a.E("String")
s=j.j(0,p)
r=s.a.E(p)
s.d=r
r.aa(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.E(o)
r=j.j(0,k)
r.d=r.a.E(k)
return j}}
V.dJ.prototype={
c2:function(a,b){this.d=[]
this.C(C.a.l(b,"\n"),"#111")},
aK:function(a){},
aE:function(){return null}}
V.ht.prototype={
bJ:function(a){var s,r,q,p,o,n,m=this.dL(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.k(C.a.ea(a)),s=new P.b9(m.bj(new H.aJ(s,s.gk(s))).a());s.q();){r=s.gu(s)
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
if(H.kv(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kb(C.p,r,C.f,!1)
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
cg:function(a){var s,r,q,p=new V.d4("dart",[])
p.ay("dart")
s=new V.dd("glsl",[])
s.ay("glsl")
r=new V.df("html",[])
r.ay("html")
q=C.a.e6([p,s,r],new V.hw(a))
if(q!=null)return q
p=new V.dJ("plain",[])
p.ay("plain")
return p},
bH:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.aQ(q,"+")){b2[r]=C.b.bo(q,1)
a8.push(1)
s=!0}else if(C.b.aQ(q,"-")){b2[r]=C.b.bo(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.cg(b0)
p.c2(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kb(C.p,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.jr()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.y)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.y)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gI(q);a4.q();)b.appendChild(a4.gu(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
dL:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.hF()
h.d=h.j(0,q)
s=h.j(0,q).l(0,p)
r=new K.m([])
r.n(new H.k("*"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,p).l(0,p).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("*"))
s.push(r)
r=h.j(0,p).l(0,"BoldEnd")
s=new K.m([])
s.n(new H.k("*"))
r.a.push(s)
r.c=!0
r=h.j(0,q).l(0,o)
s=new K.m([])
s.n(new H.k("_"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,o).l(0,o).a.push(new K.X(r))
s=new K.m([])
s.n(new H.k("_"))
r.push(s)
s=h.j(0,o).l(0,n)
r=new K.m([])
r.n(new H.k("_"))
s.a.push(r)
s.c=!0
s=h.j(0,q).l(0,m)
r=new K.m([])
r.n(new H.k("`"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,m).l(0,m).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("`"))
s.push(r)
r=h.j(0,m).l(0,"CodeEnd")
s=new K.m([])
s.n(new H.k("`"))
r.a.push(s)
r.c=!0
r=h.j(0,q).l(0,l)
s=new K.m([])
s.n(new H.k("["))
r.a.push(s)
r.c=!0
r=h.j(0,l).l(0,k)
s=new K.m([])
s.n(new H.k("|"))
r.a.push(s)
s=h.j(0,l).l(0,j)
r=new K.m([])
r.n(new H.k("]"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,l).l(0,l).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("|]"))
s.push(r)
r=h.j(0,k).l(0,j)
s=new K.m([])
s.n(new H.k("]"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,k).l(0,k).a.push(new K.X(r))
s=new K.m([])
s.n(new H.k("|]"))
r.push(s)
h.j(0,q).l(0,i).a.push(new K.aC())
s=[]
h.j(0,i).l(0,i).a.push(new K.X(s))
r=new K.m([])
r.n(new H.k("*_`["))
s.push(r)
r=h.j(0,"BoldEnd")
r.d=r.a.E(p)
r=h.j(0,n)
r.d=r.a.E(o)
r=h.j(0,"CodeEnd")
r.d=r.a.E(m)
r=h.j(0,j)
r.d=r.a.E("Link")
r=h.j(0,i)
r.d=r.a.E(i)
return this.b=h}}
V.hv.prototype={
$1:function(a){P.jQ(C.h,new V.hu(this.a))},
$S:3}
V.hu.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.X(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.q(-0.01*s)+"px"
q.top=r},
$S:1}
V.hw.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:36}
R.iN.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.bH("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.bH("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:5};(function aliases(){var s=J.a.prototype
s.cm=s.h
s=J.aZ.prototype
s.co=s.h
s=P.e.prototype
s.cn=s.aN
s=W.w.prototype
s.aS=s.T
s=W.cA.prototype
s.cp=s.a1
s=K.de.prototype
s.cl=s.a7
s.aT=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"mh","le",37)
r(P,"mB","lH",8)
r(P,"mC","lI",8)
r(P,"mD","lJ",8)
q(P,"km","mw",1)
r(W,"o8","fM",39)
p(W,"mO",4,null,["$4"],["lM"],16,0)
p(W,"mP",4,null,["$4"],["lN"],16,0)
var j
o(j=E.bh.prototype,"gc0",0,0,null,["$1","$0"],["c1","ek"],0,0)
o(j,"gbZ",0,0,null,["$1","$0"],["c_","ej"],0,0)
o(j,"gbX",0,0,null,["$1","$0"],["bY","eg"],0,0)
n(j,"gee","ef",6)
n(j,"geh","ei",6)
o(j=E.e6.prototype,"gbp",0,0,null,["$1","$0"],["br","bq"],0,0)
m(j,"gev","c7",1)
l(j=X.ei.prototype,"gd3","d4",3)
l(j,"gcS","cT",3)
l(j,"gcY","cZ",2)
l(j,"gd7","d8",11)
l(j,"gd5","d6",11)
l(j,"gda","dc",2)
l(j,"gdf","dg",2)
l(j,"gd1","d2",2)
l(j,"gdd","de",2)
l(j,"gd_","d0",2)
l(j,"gdh","di",27)
l(j,"gdj","dk",3)
l(j,"gdu","dv",9)
l(j,"gdq","dr",9)
l(j,"gds","dt",9)
k(V.bv.prototype,"gk","bb",13)
k(V.N.prototype,"gk","bb",13)
o(j=U.bi.prototype,"gbs",0,0,null,["$1","$0"],["P","cu"],0,0)
n(j,"gcQ","cR",12)
n(j,"gdm","dn",12)
o(j=M.d8.prototype,"gZ",0,0,null,["$1","$0"],["a2","cv"],0,0)
n(j,"gcU","cV",6)
n(j,"gcW","cX",6)
o(X.dH.prototype,"gbt",0,0,null,["$1","$0"],["ad","cB"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.iX,J.a,J.a_,P.A,P.ct,P.e,H.aJ,P.dh,H.bY,H.eg,H.hJ,H.hh,H.f0,H.aW,P.M,H.h5,H.dq,H.h1,H.a6,H.eE,P.cG,P.bA,P.b9,P.eo,P.dZ,P.e_,P.iw,P.cK,P.ij,P.cs,P.x,P.dQ,P.d0,P.fZ,P.iu,P.V,P.aX,P.dG,P.cn,P.eB,P.fV,P.a4,P.bs,W.fC,W.iT,W.j4,W.bz,W.B,W.cf,W.cA,W.f5,W.bZ,W.io,W.ff,K.aC,K.de,K.hj,K.m,L.dW,L.e7,L.e8,L.hE,O.bf,O.ca,E.fy,E.bh,E.be,E.bo,E.ie,E.hk,E.e6,Z.em,Z.i9,Z.bO,Z.h_,Z.ek,D.fA,D.bX,D.W,X.bP,X.dm,X.h3,X.h8,X.bm,X.hd,X.hG,X.ei,V.bg,V.fO,V.ds,V.a5,V.ad,V.dM,V.bv,V.N,M.d8,A.fu,A.fv,A.hM,A.hV,F.aG,F.fS,F.h4,F.hp,F.dR,F.hq,F.hr,F.cp,F.G,F.bw,F.ej,F.i6,F.i7,O.hA,X.hz,X.dH,V.ai,V.ht])
q(J.a,[J.di,J.c2,J.aZ,J.ab,J.bl,J.aH,H.cc,W.b,W.fs,W.d_,W.ak,W.z,W.et,W.a3,W.fF,W.fH,W.eu,W.bU,W.ew,W.fI,W.f,W.eC,W.an,W.fX,W.eH,W.h7,W.ha,W.eL,W.eM,W.aq,W.eN,W.eP,W.as,W.eT,W.eV,W.at,W.eW,W.au,W.f1,W.a7,W.f7,W.hC,W.av,W.f9,W.hH,W.i_,W.fg,W.fi,W.fk,W.fm,W.fo,P.b0,P.eJ,P.b3,P.eR,P.hi,P.f2,P.b6,P.fb,P.fw,P.eq,P.ck,P.eZ])
q(J.aZ,[J.dI,J.b7,J.ao])
r(J.dk,J.ab)
q(J.bl,[J.c1,J.dj])
q(P.A,[H.dn,P.eb,H.dl,H.ef,H.dO,H.ez,P.cX,P.dD,P.a9,P.eh,P.ee,P.br,P.d1,P.d3])
r(P.c5,P.ct)
q(P.c5,[H.bu,W.er,W.S,P.db])
r(H.k,H.bu)
q(P.e,[H.h,H.b1,H.b8,P.c0])
q(H.h,[H.c6,H.aI])
r(H.bV,H.b1)
q(P.dh,[H.c8,H.en])
r(H.c9,H.c6)
r(H.cg,P.eb)
q(H.aW,[H.e3,H.h2,H.iJ,H.iK,H.iL,P.ib,P.ia,P.ic,P.id,P.it,P.is,P.iB,P.il,P.im,P.h9,P.fJ,P.fK,W.fL,W.hb,W.hc,W.ho,W.hy,W.ig,W.hf,W.he,W.ip,W.iq,W.ir,W.iv,P.iz,P.iD,P.fT,P.fU,P.fx,E.hl,E.hm,E.hn,E.hB,D.fQ,D.fR,F.iQ,F.iE,F.hs,F.i8,F.i3,F.i4,V.iP,V.hv,V.hu,V.hw,R.iN])
q(H.e3,[H.dX,H.bd])
r(P.c7,P.M)
q(P.c7,[H.ap,W.ep])
r(H.bn,H.cc)
q(H.bn,[H.cv,H.cx])
r(H.cw,H.cv)
r(H.b2,H.cw)
r(H.cy,H.cx)
r(H.cb,H.cy)
q(H.cb,[H.dx,H.dy,H.dz,H.dA,H.dB,H.cd,H.dC])
r(H.cH,H.ez)
r(P.cD,P.c0)
r(P.ik,P.iw)
r(P.cz,P.cK)
r(P.cr,P.cz)
r(P.d2,P.e_)
r(P.fN,P.d0)
q(P.d2,[P.fY,P.i1])
r(P.i0,P.fN)
q(P.a9,[P.cj,P.dg])
q(W.b,[W.n,W.da,W.ae,W.cB,W.af,W.a1,W.cE,W.el,W.bx,P.cZ,P.aD])
q(W.n,[W.w,W.aa,W.by])
q(W.w,[W.j,P.i])
q(W.j,[W.cV,W.cW,W.bc,W.aU,W.aV,W.bS,W.dc,W.dP,W.co,W.e1,W.e2,W.bt])
r(W.fB,W.ak)
r(W.bR,W.et)
q(W.a3,[W.fD,W.fE])
r(W.ev,W.eu)
r(W.bT,W.ev)
r(W.ex,W.ew)
r(W.d7,W.ex)
r(W.am,W.d_)
r(W.eD,W.eC)
r(W.d9,W.eD)
r(W.eI,W.eH)
r(W.aY,W.eI)
r(W.ax,W.f)
q(W.ax,[W.b_,W.a0,W.b5])
r(W.du,W.eL)
r(W.dv,W.eM)
r(W.eO,W.eN)
r(W.dw,W.eO)
r(W.eQ,W.eP)
r(W.ce,W.eQ)
r(W.eU,W.eT)
r(W.dK,W.eU)
r(W.dN,W.eV)
r(W.cC,W.cB)
r(W.dT,W.cC)
r(W.eX,W.eW)
r(W.dU,W.eX)
r(W.dY,W.f1)
r(W.f8,W.f7)
r(W.e4,W.f8)
r(W.cF,W.cE)
r(W.e5,W.cF)
r(W.fa,W.f9)
r(W.e9,W.fa)
r(W.aN,W.a0)
r(W.fh,W.fg)
r(W.es,W.fh)
r(W.cq,W.bU)
r(W.fj,W.fi)
r(W.eF,W.fj)
r(W.fl,W.fk)
r(W.cu,W.fl)
r(W.fn,W.fm)
r(W.eY,W.fn)
r(W.fp,W.fo)
r(W.f4,W.fp)
r(W.ey,W.ep)
r(W.eA,P.dZ)
r(W.f6,W.cA)
r(P.eK,P.eJ)
r(P.dp,P.eK)
r(P.eS,P.eR)
r(P.dE,P.eS)
r(P.bq,P.i)
r(P.f3,P.f2)
r(P.e0,P.f3)
r(P.fc,P.fb)
r(P.ea,P.fc)
r(P.cY,P.eq)
r(P.dF,P.aD)
r(P.f_,P.eZ)
r(P.dV,P.f_)
q(K.de,[K.X,L.hI])
q(E.fy,[Z.bN,A.cm])
q(D.W,[D.bj,D.bk,D.F])
r(U.ac,D.fA)
q(U.ac,[U.bQ,U.cl])
r(U.bi,O.bf)
r(A.d6,A.cm)
q(A.hM,[A.hN,A.hQ,A.hS,A.hU,A.hO,A.ec,A.hP,A.hR,A.hT,A.hW,A.hX,A.ed,A.hY,A.hZ])
r(F.hx,F.fS)
r(F.hL,F.h4)
r(F.i5,F.i6)
r(F.hg,F.i7)
r(O.fG,O.hA)
r(X.fW,X.hz)
q(V.ai,[V.d4,V.dd,V.df,V.dJ])
s(H.bu,H.eg)
s(H.cv,P.x)
s(H.cw,H.bY)
s(H.cx,P.x)
s(H.cy,H.bY)
s(P.ct,P.x)
s(P.cK,P.dQ)
s(W.et,W.fC)
s(W.eu,P.x)
s(W.ev,W.B)
s(W.ew,P.x)
s(W.ex,W.B)
s(W.eC,P.x)
s(W.eD,W.B)
s(W.eH,P.x)
s(W.eI,W.B)
s(W.eL,P.M)
s(W.eM,P.M)
s(W.eN,P.x)
s(W.eO,W.B)
s(W.eP,P.x)
s(W.eQ,W.B)
s(W.eT,P.x)
s(W.eU,W.B)
s(W.eV,P.M)
s(W.cB,P.x)
s(W.cC,W.B)
s(W.eW,P.x)
s(W.eX,W.B)
s(W.f1,P.M)
s(W.f7,P.x)
s(W.f8,W.B)
s(W.cE,P.x)
s(W.cF,W.B)
s(W.f9,P.x)
s(W.fa,W.B)
s(W.fg,P.x)
s(W.fh,W.B)
s(W.fi,P.x)
s(W.fj,W.B)
s(W.fk,P.x)
s(W.fl,W.B)
s(W.fm,P.x)
s(W.fn,W.B)
s(W.fo,P.x)
s(W.fp,W.B)
s(P.eJ,P.x)
s(P.eK,W.B)
s(P.eR,P.x)
s(P.eS,W.B)
s(P.f2,P.x)
s(P.f3,W.B)
s(P.fb,P.x)
s(P.fc,W.B)
s(P.eq,P.M)
s(P.eZ,P.x)
s(P.f_,W.B)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",O:"double",R:"num",r:"String",Z:"bool",a4:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([W?])","~()","~(a0)","~(f)","~(r,@)","~(W)","~(o,e<bh>)","a4()","~(~())","~(b5)","~(aG)","~(b_)","~(o,e<ac?>)","O()","r(o)","Z(n)","Z(w,r,r,bz)","Z(ar)","~(~(W))","Z(r)","~(@,@)","~(@)","~(n,n?)","~(R)","r(r)","@(@)","~(r,r)","~(aN)","~(J?,J?)","a4(~())","a4(@)","ad(O)","~(cp,O,O)","bN(o)","@(r)","~(hD)","Z(ai?)","o(@,@)","@(@,r)","r(b)","w(n)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.m4(v.typeUniverse,JSON.parse('{"dI":"aZ","b7":"aZ","ao":"aZ","n7":"f","nj":"f","n9":"aD","n8":"b","np":"b","ns":"b","n6":"i","nk":"i","na":"j","nn":"j","nl":"n","ni":"n","nQ":"a1","ne":"ax","nb":"aa","nt":"aa","nr":"a0","nm":"aY","nf":"z","ng":"a7","no":"b2","di":{"Z":[]},"ab":{"l":["1"],"h":["1"],"e":["1"],"p":["1"]},"dk":{"l":["1"],"h":["1"],"e":["1"],"p":["1"]},"bl":{"O":[],"R":[]},"c1":{"O":[],"o":[],"R":[]},"dj":{"O":[],"R":[]},"aH":{"r":[],"p":["@"]},"dn":{"A":[]},"k":{"l":["o"],"h":["o"],"e":["o"]},"h":{"e":["1"]},"c6":{"h":["1"],"e":["1"]},"b1":{"e":["2"]},"bV":{"h":["2"],"e":["2"]},"c9":{"h":["2"],"e":["2"]},"b8":{"e":["1"]},"bu":{"l":["1"],"h":["1"],"e":["1"]},"cg":{"A":[]},"dl":{"A":[]},"ef":{"A":[]},"aW":{"c_":[]},"e3":{"c_":[]},"dX":{"c_":[]},"bd":{"c_":[]},"dO":{"A":[]},"ap":{"L":["1","2"],"M.V":"2"},"aI":{"h":["1"],"e":["1"]},"bn":{"t":["1"],"p":["1"]},"b2":{"t":["O"],"l":["O"],"h":["O"],"p":["O"],"e":["O"]},"cb":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dx":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dy":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dz":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dA":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dB":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"cd":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"dC":{"t":["o"],"l":["o"],"h":["o"],"p":["o"],"e":["o"]},"ez":{"A":[]},"cH":{"A":[]},"cG":{"hD":[]},"cD":{"e":["1"]},"cr":{"h":["1"],"e":["1"]},"c0":{"e":["1"]},"c5":{"l":["1"],"h":["1"],"e":["1"]},"c7":{"L":["1","2"]},"M":{"L":["1","2"]},"cz":{"h":["1"],"e":["1"]},"O":{"R":[]},"o":{"R":[]},"l":{"h":["1"],"e":["1"]},"cX":{"A":[]},"eb":{"A":[]},"dD":{"A":[]},"a9":{"A":[]},"cj":{"A":[]},"dg":{"A":[]},"eh":{"A":[]},"ee":{"A":[]},"br":{"A":[]},"d1":{"A":[]},"dG":{"A":[]},"cn":{"A":[]},"d3":{"A":[]},"w":{"n":[],"b":[]},"b_":{"f":[]},"a0":{"f":[]},"n":{"b":[]},"ae":{"b":[]},"af":{"b":[]},"a1":{"b":[]},"b5":{"f":[]},"ax":{"f":[]},"aN":{"a0":[],"f":[]},"bz":{"ar":[]},"j":{"w":[],"n":[],"b":[]},"cV":{"w":[],"n":[],"b":[]},"cW":{"w":[],"n":[],"b":[]},"bc":{"w":[],"n":[],"b":[]},"aU":{"w":[],"n":[],"b":[]},"aV":{"w":[],"n":[],"b":[]},"aa":{"n":[],"b":[]},"bS":{"w":[],"n":[],"b":[]},"bT":{"l":["aM<R>"],"t":["aM<R>"],"h":["aM<R>"],"e":["aM<R>"],"p":["aM<R>"]},"bU":{"aM":["R"]},"d7":{"l":["r"],"t":["r"],"h":["r"],"e":["r"],"p":["r"]},"er":{"l":["w"],"h":["w"],"e":["w"]},"d9":{"l":["am"],"t":["am"],"h":["am"],"e":["am"],"p":["am"]},"da":{"b":[]},"dc":{"w":[],"n":[],"b":[]},"aY":{"l":["n"],"t":["n"],"h":["n"],"e":["n"],"p":["n"]},"du":{"L":["r","@"],"M.V":"@"},"dv":{"L":["r","@"],"M.V":"@"},"dw":{"l":["aq"],"t":["aq"],"h":["aq"],"e":["aq"],"p":["aq"]},"S":{"l":["n"],"h":["n"],"e":["n"]},"ce":{"l":["n"],"t":["n"],"h":["n"],"e":["n"],"p":["n"]},"dK":{"l":["as"],"t":["as"],"h":["as"],"e":["as"],"p":["as"]},"dN":{"L":["r","@"],"M.V":"@"},"dP":{"w":[],"n":[],"b":[]},"dT":{"l":["ae"],"t":["ae"],"b":[],"h":["ae"],"e":["ae"],"p":["ae"]},"dU":{"l":["at"],"t":["at"],"h":["at"],"e":["at"],"p":["at"]},"dY":{"L":["r","r"],"M.V":"r"},"co":{"w":[],"n":[],"b":[]},"e1":{"w":[],"n":[],"b":[]},"e2":{"w":[],"n":[],"b":[]},"bt":{"w":[],"n":[],"b":[]},"e4":{"l":["a1"],"t":["a1"],"h":["a1"],"e":["a1"],"p":["a1"]},"e5":{"l":["af"],"t":["af"],"b":[],"h":["af"],"e":["af"],"p":["af"]},"e9":{"l":["av"],"t":["av"],"h":["av"],"e":["av"],"p":["av"]},"el":{"b":[]},"bx":{"b":[]},"by":{"n":[],"b":[]},"es":{"l":["z"],"t":["z"],"h":["z"],"e":["z"],"p":["z"]},"cq":{"aM":["R"]},"eF":{"l":["an?"],"t":["an?"],"h":["an?"],"e":["an?"],"p":["an?"]},"cu":{"l":["n"],"t":["n"],"h":["n"],"e":["n"],"p":["n"]},"eY":{"l":["au"],"t":["au"],"h":["au"],"e":["au"],"p":["au"]},"f4":{"l":["a7"],"t":["a7"],"h":["a7"],"e":["a7"],"p":["a7"]},"ep":{"L":["r","r"]},"ey":{"L":["r","r"],"M.V":"r"},"cf":{"ar":[]},"cA":{"ar":[]},"f6":{"ar":[]},"f5":{"ar":[]},"db":{"l":["w"],"h":["w"],"e":["w"]},"dp":{"l":["b0"],"h":["b0"],"e":["b0"]},"dE":{"l":["b3"],"h":["b3"],"e":["b3"]},"bq":{"i":[],"w":[],"n":[],"b":[]},"e0":{"l":["r"],"h":["r"],"e":["r"]},"i":{"w":[],"n":[],"b":[]},"ea":{"l":["b6"],"h":["b6"],"e":["b6"]},"cY":{"L":["r","@"],"M.V":"@"},"cZ":{"b":[]},"aD":{"b":[]},"dF":{"b":[]},"dV":{"l":["L<@,@>"],"h":["L<@,@>"],"e":["L<@,@>"]},"bf":{"e":["1"]},"bj":{"W":[]},"bk":{"W":[]},"F":{"W":[]},"bQ":{"ac":[]},"bi":{"ac":[],"e":["ac?"]},"cl":{"ac":[]},"d6":{"cm":[]},"d4":{"ai":[]},"dd":{"ai":[]},"df":{"ai":[]},"dJ":{"ai":[]},"aM":{"nU":["1"]}}'))
H.m3(v.typeUniverse,JSON.parse('{"ab":1,"dk":1,"a_":1,"h":1,"c6":1,"aJ":1,"b1":2,"bV":2,"c8":2,"c9":2,"b8":1,"en":1,"bY":1,"eg":1,"bu":1,"aI":1,"dq":1,"bn":1,"b9":1,"cD":1,"dZ":1,"e_":2,"cs":1,"c0":1,"c5":1,"x":1,"c7":2,"M":2,"dQ":1,"cz":1,"ct":1,"cK":1,"d0":2,"d2":2,"e":1,"l":1,"dh":1,"eA":1,"B":1,"bZ":1,"bf":1,"bj":1,"bk":1,"F":1}'))
var u={d:"Must initialize the shader prior to getting the program."}
var t=(function rtii(){var s=H.mL
return{y:s("bc"),t:s("aU"),D:s("bO"),E:s("aV"),O:s("h<@>"),h:s("w"),C:s("A"),B:s("f"),Z:s("c_"),b:s("ab<@>"),e:s("p<@>"),T:s("c2"),g:s("ao"),p:s("t<@>"),I:s("ap<o,Z>"),j:s("l<@>"),f:s("L<@,@>"),P:s("a4"),K:s("J"),q:s("aM<R>"),Y:s("bq"),k:s("cm"),N:s("r"),u:s("i"),G:s("bt"),F:s("hD"),J:s("e7"),n:s("ec"),a:s("ed"),o:s("b7"),x:s("by"),v:s("Z"),i:s("O"),z:s("@"),S:s("o"),A:s("0&*"),_:s("J*"),Q:s("jD<a4>?"),X:s("J?"),r:s("ck?"),R:s("dW?"),L:s("e8?"),H:s("R")}})();(function constants(){var s=hunkHelpers.makeConstList
C.k=W.aU.prototype
C.G=W.aV.prototype
C.H=W.bS.prototype
C.K=J.a.prototype
C.a=J.ab.prototype
C.d=J.c1.prototype
C.L=J.c2.prototype
C.c=J.bl.prototype
C.b=J.aH.prototype
C.M=J.ao.prototype
C.r=J.dI.prototype
C.t=W.co.prototype
C.j=J.b7.prototype
C.u=W.aN.prototype
C.v=W.bx.prototype
C.w=new E.be("Browser.chrome")
C.l=new E.be("Browser.firefox")
C.m=new E.be("Browser.edge")
C.x=new E.be("Browser.other")
C.n=function getTagFallback(o) {
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
C.o=function(hooks) { return hooks; }

C.E=new P.dG()
C.f=new P.i0()
C.F=new P.i1()
C.e=new P.ik()
C.h=new P.aX(0)
C.I=new P.aX(5e6)
C.J=new P.fZ("element",!1,!1,!1)
C.N=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.O=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.P=s([])
C.p=s([0,0,65498,45055,65535,34815,65534,18431])
C.q=s(["bind","if","ref","repeat","syntax"])
C.i=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.Q=new E.bo("OperatingSystem.windows")
C.R=new E.bo("OperatingSystem.mac")
C.S=new E.bo("OperatingSystem.linux")
C.T=new E.bo("OperatingSystem.other")
C.U=new P.bA(null,2)})();(function staticFields(){$.ih=null
$.ah=0
$.bM=null
$.jt=null
$.kp=null
$.kl=null
$.kt=null
$.iF=null
$.iM=null
$.jj=null
$.bB=null
$.cM=null
$.cN=null
$.je=!1
$.ag=C.e
$.Y=[]
$.aE=null
$.iS=null
$.jB=null
$.jA=null
$.eG=P.c3(t.N,t.Z)
$.jC=null
$.jG=null
$.b4=null
$.jH=null
$.jK=null
$.jZ=null
$.jW=null
$.jX=null
$.jY=null
$.jV=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"nh","kz",function(){return H.mN("_$dart_dartClosure")})
s($,"nu","kB",function(){return H.aw(H.hK({
toString:function(){return"$receiver$"}}))})
s($,"nv","kC",function(){return H.aw(H.hK({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"nw","kD",function(){return H.aw(H.hK(null))})
s($,"nx","kE",function(){return H.aw(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"nA","kH",function(){return H.aw(H.hK(void 0))})
s($,"nB","kI",function(){return H.aw(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"nz","kG",function(){return H.aw(H.jS(null))})
s($,"ny","kF",function(){return H.aw(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"nD","kK",function(){return H.aw(H.jS(void 0))})
s($,"nC","kJ",function(){return H.aw(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"nR","jo",function(){return P.lG()})
s($,"nV","kP",function(){return P.lu("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nS","kO",function(){return P.jE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"nK","kN",function(){return Z.a8(0)})
s($,"nE","kL",function(){return Z.a8(511)})
s($,"nM","aS",function(){return Z.a8(1)})
s($,"nL","bI",function(){return Z.a8(2)})
s($,"nG","bH",function(){return Z.a8(4)})
s($,"nN","bJ",function(){return Z.a8(8)})
s($,"nO","bK",function(){return Z.a8(16)})
s($,"nH","cS",function(){return Z.a8(32)})
s($,"nI","cT",function(){return Z.a8(64)})
s($,"nJ","kM",function(){return Z.a8(96)})
s($,"nP","bL",function(){return Z.a8(128)})
s($,"nF","bG",function(){return Z.a8(256)})
s($,"nd","ky",function(){return new V.fO()})
r($,"nc","I",function(){return $.ky()})
r($,"nq","kA",function(){var q,p,o,n,m,l,k=$.jH
if(k==null)k=$.jH=V.lj(0,0,0)
q=$.jX
if(q==null)q=$.jX=V.jU(0,1,0)
p=$.jV
o=(p==null?$.jV=V.jU(0,0,-1):p).N()
n=q.ar(o).N()
m=o.ar(n)
l=V.lE(k)
return V.aK(n.a,m.a,o.a,n.aO(0).as(l),n.b,m.b,o.b,m.aO(0).as(l),n.c,m.c,o.c,o.aO(0).as(l),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cc,ArrayBufferView:H.cc,Float32Array:H.b2,Float64Array:H.b2,Int16Array:H.dx,Int32Array:H.dy,Int8Array:H.dz,Uint16Array:H.dA,Uint32Array:H.dB,Uint8ClampedArray:H.cd,CanvasPixelArray:H.cd,Uint8Array:H.dC,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,AccessibleNodeList:W.fs,HTMLAnchorElement:W.cV,HTMLAreaElement:W.cW,HTMLBaseElement:W.bc,Blob:W.d_,HTMLBodyElement:W.aU,HTMLCanvasElement:W.aV,CDATASection:W.aa,CharacterData:W.aa,Comment:W.aa,ProcessingInstruction:W.aa,Text:W.aa,CSSPerspective:W.fB,CSSCharsetRule:W.z,CSSConditionRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.a3,CSSKeywordValue:W.a3,CSSNumericValue:W.a3,CSSPositionValue:W.a3,CSSResourceValue:W.a3,CSSUnitValue:W.a3,CSSURLImageValue:W.a3,CSSStyleValue:W.a3,CSSMatrixComponent:W.ak,CSSRotation:W.ak,CSSScale:W.ak,CSSSkew:W.ak,CSSTranslation:W.ak,CSSTransformComponent:W.ak,CSSTransformValue:W.fD,CSSUnparsedValue:W.fE,DataTransferItemList:W.fF,HTMLDivElement:W.bS,DOMException:W.fH,ClientRectList:W.bT,DOMRectList:W.bT,DOMRectReadOnly:W.bU,DOMStringList:W.d7,DOMTokenList:W.fI,Element:W.w,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.am,FileList:W.d9,FileWriter:W.da,HTMLFormElement:W.dc,Gamepad:W.an,History:W.fX,HTMLCollection:W.aY,HTMLFormControlsCollection:W.aY,HTMLOptionsCollection:W.aY,KeyboardEvent:W.b_,Location:W.h7,MediaList:W.ha,MIDIInputMap:W.du,MIDIOutputMap:W.dv,MimeType:W.aq,MimeTypeArray:W.dw,PointerEvent:W.a0,MouseEvent:W.a0,DragEvent:W.a0,Document:W.n,DocumentFragment:W.n,HTMLDocument:W.n,ShadowRoot:W.n,XMLDocument:W.n,DocumentType:W.n,Node:W.n,NodeList:W.ce,RadioNodeList:W.ce,Plugin:W.as,PluginArray:W.dK,RTCStatsReport:W.dN,HTMLSelectElement:W.dP,SourceBuffer:W.ae,SourceBufferList:W.dT,SpeechGrammar:W.at,SpeechGrammarList:W.dU,SpeechRecognitionResult:W.au,Storage:W.dY,CSSStyleSheet:W.a7,StyleSheet:W.a7,HTMLTableElement:W.co,HTMLTableRowElement:W.e1,HTMLTableSectionElement:W.e2,HTMLTemplateElement:W.bt,TextTrack:W.af,TextTrackCue:W.a1,VTTCue:W.a1,TextTrackCueList:W.e4,TextTrackList:W.e5,TimeRanges:W.hC,Touch:W.av,TouchEvent:W.b5,TouchList:W.e9,TrackDefaultList:W.hH,CompositionEvent:W.ax,FocusEvent:W.ax,TextEvent:W.ax,UIEvent:W.ax,URL:W.i_,VideoTrackList:W.el,WheelEvent:W.aN,Window:W.bx,DOMWindow:W.bx,Attr:W.by,CSSRuleList:W.es,ClientRect:W.cq,DOMRect:W.cq,GamepadList:W.eF,NamedNodeMap:W.cu,MozNamedAttrMap:W.cu,SpeechRecognitionResultList:W.eY,StyleSheetList:W.f4,SVGLength:P.b0,SVGLengthList:P.dp,SVGNumber:P.b3,SVGNumberList:P.dE,SVGPointList:P.hi,SVGScriptElement:P.bq,SVGStringList:P.e0,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.b6,SVGTransformList:P.ea,AudioBuffer:P.fw,AudioParamMap:P.cY,AudioTrackList:P.cZ,AudioContext:P.aD,webkitAudioContext:P.aD,BaseAudioContext:P.aD,OfflineAudioContext:P.dF,WebGL2RenderingContext:P.ck,SQLResultSetRowList:P.dV})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bn.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.b2.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=R.mX
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
