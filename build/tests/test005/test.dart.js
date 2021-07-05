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
a[c]=function(){a[c]=function(){H.og(b)}
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
if(a[b]!==s)H.oh(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kc(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jR:function jR(){},
nR:function(a,b,c){return a},
mb:function(a,b){if(t.O.b(a))return new H.cb(a,b)
return new H.bh(a,b)},
hB:function(){return new P.bL("No element")},
m4:function(){return new P.bL("Too many elements")},
mu:function(a,b){H.ek(a,0,J.b2(a)-1,b)},
ek:function(a,b,c,d){if(c-b<=32)H.mt(a,b,c,d)
else H.ms(a,b,c,d)},
mt:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.dg(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a7()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
ms:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.W(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.W(a4+a5,2),f=g-j,e=g+j,d=J.dg(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.L(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.ek(a3,a4,r-2,a6)
H.ek(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.L(a6.$2(d.h(a3,r),b),0);)++r
for(;J.L(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.ek(a3,r,q,a6)}else H.ek(a3,r,q,a6)},
dP:function dP(a){this.a=a},
o:function o(a){this.a=a},
j:function j(){},
co:function co(){},
aL:function aL(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bh:function bh(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
cq:function cq(a,b){this.a=null
this.b=a
this.c=b},
cr:function cr(a,b){this.a=a
this.b=b},
br:function br(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
cd:function cd(){},
eS:function eS(){},
bN:function bN(){},
lp:function(a){var s,r=H.lo(a)
if(r!=null)return r
s="minified:"+a
return s},
o7:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
u:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dk(a)
return s},
cD:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cE:function(a){return H.md(a)},
md:function(a){var s,r,q,p
if(a instanceof P.M)return H.a5(H.c_(a),null)
if(J.df(a)===C.L||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a5(H.c_(a),null)},
kC:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mm:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.js(q))throw H.c(H.jw(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b5(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jw(q))}return H.kC(p)},
ml:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.js(q))throw H.c(H.jw(q))
if(q<0)throw H.c(H.jw(q))
if(q>65535)return H.mm(a)}return H.kC(a)},
jT:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.b5(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aN(a,0,1114111,null,null))},
bH:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){var s=H.bH(a).getFullYear()+0
return s},
mi:function(a){var s=H.bH(a).getMonth()+1
return s},
me:function(a){var s=H.bH(a).getDate()+0
return s},
mf:function(a){var s=H.bH(a).getHours()+0
return s},
mh:function(a){var s=H.bH(a).getMinutes()+0
return s},
mj:function(a){var s=H.bH(a).getSeconds()+0
return s},
mg:function(a){var s=H.bH(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.b2(a)
throw H.c(H.bY(a,b))},
bY:function(a,b){var s,r="index"
if(!H.js(b))return new P.af(!0,b,r,null)
s=J.b2(a)
if(b<0||b>=s)return P.I(b,a,r,null,s)
return P.ed(b,r)},
nV:function(a,b,c){if(a>c)return P.aN(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aN(b,a,c,"end",null)
return new P.af(!0,b,"end",null)},
jw:function(a){return new P.af(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.e4()
s=new Error()
s.dartException=a
r=H.oi
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
oi:function(){return J.dk(this.dartException)},
f:function(a){throw H.c(a)},
n:function(a){throw H.c(P.ao(a))},
aB:function(a){var s,r,q,p,o,n
a=H.lm(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iG:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kN:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jS:function(a,b){var s=b==null,r=s?null:b.method
return new H.dN(a,r,s?null:b.receiver)},
aF:function(a){if(a==null)return new H.i7(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bt(a,a.dartException)
return H.nN(a)},
bt:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b5(r,16)&8191)===10)switch(q){case 438:return H.bt(a,H.jS(H.u(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.u(s)+" (Error "+q+")"
return H.bt(a,new H.cC(p,e))}}if(a instanceof TypeError){o=$.lt()
n=$.lu()
m=$.lv()
l=$.lw()
k=$.lz()
j=$.lA()
i=$.ly()
$.lx()
h=$.lC()
g=$.lB()
f=o.a5(s)
if(f!=null)return H.bt(a,H.jS(s,f))
else{f=n.a5(s)
if(f!=null){f.method="call"
return H.bt(a,H.jS(s,f))}else{f=m.a5(s)
if(f==null){f=l.a5(s)
if(f==null){f=k.a5(s)
if(f==null){f=j.a5(s)
if(f==null){f=i.a5(s)
if(f==null){f=l.a5(s)
if(f==null){f=h.a5(s)
if(f==null){f=g.a5(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bt(a,new H.cC(s,f==null?e:f.method))}}return H.bt(a,new H.eR(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cI()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bt(a,new P.af(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cI()
return a},
kd:function(a){var s
if(a==null)return new H.fB(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fB(a)},
nX:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
o6:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.e("Unsupported number of arguments for wrapped closure"))},
bX:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o6)
a.$identity=s
return s},
lY:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ep().constructor.prototype):Object.create(new H.bw(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.am
if(typeof r!=="number")return r.R()
$.am=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kq(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lU(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kq(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lU:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.li,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lS:H.lR
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lV:function(a,b,c,d){var s=H.kp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kq:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lX(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lV(r,!p,s,b)
if(r===0){p=$.am
if(typeof p!=="number")return p.R()
$.am=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c1
return new Function(p+(o==null?$.c1=H.ha("self"):o)+";return "+n+"."+H.u(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.am
if(typeof p!=="number")return p.R()
$.am=p+1
m+=p
p="return function("+m+"){return this."
o=$.c1
return new Function(p+(o==null?$.c1=H.ha("self"):o)+"."+H.u(s)+"("+m+");}")()},
lW:function(a,b,c,d){var s=H.kp,r=H.lT
switch(b?-1:a){case 0:throw H.c(new H.eh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lX:function(a,b){var s,r,q,p,o,n,m,l=$.c1
if(l==null)l=$.c1=H.ha("self")
s=$.ko
if(s==null)s=$.ko=H.ha("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lW(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.u(r)+"(this."+s+");"
n=$.am
if(typeof n!=="number")return n.R()
$.am=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.u(r)+"(this."+s+", "+m+");"
n=$.am
if(typeof n!=="number")return n.R()
$.am=n+1
return new Function(o+n+"}")()},
kc:function(a,b,c,d,e,f,g){return H.lY(a,b,c,d,!!e,!!f,g)},
lR:function(a,b){return H.fP(v.typeUniverse,H.c_(a.a),b)},
lS:function(a,b){return H.fP(v.typeUniverse,H.c_(a.c),b)},
kp:function(a){return a.a},
lT:function(a){return a.c},
ha:function(a){var s,r,q,p=new H.bw("self","target","receiver","name"),o=J.jQ(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jJ("Field name "+a+" not found."))},
og:function(a){throw H.c(new P.dw(a))},
o0:function(a){return v.getIsolateTag(a)},
oh:function(a){return H.f(new H.dP(a))},
pk:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o9:function(a){var s,r,q,p,o,n=$.lh.$1(a),m=$.jy[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jE[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.le.$2(a,n)
if(q!=null){m=$.jy[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jE[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jG(s)
$.jy[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jE[n]=s
return s}if(p==="-"){o=H.jG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lk(a,s)
if(p==="*")throw H.c(P.kO(n))
if(v.leafTags[n]===true){o=H.jG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lk(a,s)},
lk:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kg(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jG:function(a){return J.kg(a,!1,null,!!a.$ix)},
ob:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jG(s)
else return J.kg(s,c,null,null)},
o4:function(){if(!0===$.ke)return
$.ke=!0
H.o5()},
o5:function(){var s,r,q,p,o,n,m,l
$.jy=Object.create(null)
$.jE=Object.create(null)
H.o3()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.ll.$1(o)
if(n!=null){m=H.ob(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
o3:function(){var s,r,q,p,o,n,m=C.A()
m=H.bV(C.B,H.bV(C.C,H.bV(C.o,H.bV(C.o,H.bV(C.D,H.bV(C.E,H.bV(C.F(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lh=new H.jB(p)
$.le=new H.jC(o)
$.ll=new H.jD(n)},
bV:function(a,b){return a(b)||b},
m8:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hw("Illegal RegExp pattern ("+String(n)+")",a))},
ln:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nW:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lm:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kj:function(a,b,c){var s=H.oe(a,b,c)
return s},
oe:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lm(b),'g'),H.nW(c))},
iF:function iF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cC:function cC(a,b){this.a=a
this.b=b},
dN:function dN(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(a){this.a=a},
i7:function i7(a){this.a=a},
fB:function fB(a){this.a=a
this.b=null},
b6:function b6(){},
ew:function ew(){},
ep:function ep(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a){this.a=a},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hD:function hD(a){this.a=a},
hH:function hH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aK:function aK(a){this.a=a},
dR:function dR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
hC:function hC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
da:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.dg(a)
r=s.gl(a)
q=P.dS(r,null,!1)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bY(b,a))},
n1:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nV(a,b,c))
return b},
cy:function cy(){},
bF:function bF(){},
bi:function bi(){},
cx:function cx(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
cz:function cz(){},
e3:function e3(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
kG:function(a,b){var s=b.c
return s==null?b.c=H.k5(a,b.z,!0):s},
kF:function(a,b){var s=b.c
return s==null?b.c=H.d6(a,"kv",[b.z]):s},
kH:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kH(a.z)
return s===11||s===12},
mq:function(a){return a.cy},
nY:function(a){return H.k6(v.typeUniverse,a,!1)},
aV:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aV(a,s,a0,a1)
if(r===s)return b
return H.l2(a,r,!0)
case 7:s=b.z
r=H.aV(a,s,a0,a1)
if(r===s)return b
return H.k5(a,r,!0)
case 8:s=b.z
r=H.aV(a,s,a0,a1)
if(r===s)return b
return H.l1(a,r,!0)
case 9:q=b.Q
p=H.de(a,q,a0,a1)
if(p===q)return b
return H.d6(a,b.z,p)
case 10:o=b.z
n=H.aV(a,o,a0,a1)
m=b.Q
l=H.de(a,m,a0,a1)
if(n===o&&l===m)return b
return H.k3(a,n,l)
case 11:k=b.z
j=H.aV(a,k,a0,a1)
i=b.Q
h=H.nK(a,i,a0,a1)
if(j===k&&h===i)return b
return H.l0(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.de(a,g,a0,a1)
o=b.z
n=H.aV(a,o,a0,a1)
if(f===g&&n===o)return b
return H.k4(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.h4("Attempted to substitute unexpected RTI kind "+c))}},
de:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aV(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nL:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aV(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nK:function(a,b,c,d){var s,r=b.a,q=H.de(a,r,c,d),p=b.b,o=H.de(a,p,c,d),n=b.c,m=H.nL(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fe()
s.a=q
s.b=o
s.c=m
return s},
pm:function(a,b){a[v.arrayRti]=b
return a},
nS:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.li(s)
return a.$S()}return null},
lj:function(a,b){var s
if(H.kH(b))if(a instanceof H.b6){s=H.nS(a)
if(s!=null)return s}return H.c_(a)},
c_:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.k7(a)}if(Array.isArray(a))return H.l6(a)
return H.k7(J.df(a))},
l6:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
T:function(a){var s=a.$ti
return s!=null?s:H.k7(a)},
k7:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n8(a,s)},
n8:function(a,b){var s=a instanceof H.b6?a.__proto__.__proto__.constructor:b,r=H.mZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
li:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.k6(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n7:function(a){var s,r,q,p=this
if(p===t.K)return H.db(p,a,H.nc)
if(!H.aE(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.db(p,a,H.nf)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.js
else if(r===t.i||r===t.H)q=H.nb
else if(r===t.N)q=H.nd
else q=r===t.cB?H.k8:null
if(q!=null)return H.db(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.o8)){p.r="$i"+s
return H.db(p,a,H.ne)}}else if(s===7)return H.db(p,a,H.n5)
return H.db(p,a,H.n3)},
db:function(a,b,c){a.b=c
return a.b(b)},
n6:function(a){var s,r=this,q=H.n2
if(!H.aE(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.n0
else if(r===t.K)q=H.n_
else{s=H.dh(r)
if(s)q=H.n4}r.a=q
return r.a(a)},
kb:function(a){var s,r=a.y
if(!H.aE(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kb(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
n3:function(a){var s=this
if(a==null)return H.kb(s)
return H.K(v.typeUniverse,H.lj(a,s),null,s,null)},
n5:function(a){if(a==null)return!0
return this.z.b(a)},
ne:function(a){var s,r=this
if(a==null)return H.kb(r)
s=r.r
if(a instanceof P.M)return!!a[s]
return!!J.df(a)[s]},
n2:function(a){var s,r=this
if(a==null){s=H.dh(r)
if(s)return a}else if(r.b(a))return a
H.l9(a,r)},
n4:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l9(a,s)},
l9:function(a,b){throw H.c(H.mP(H.kU(a,H.lj(a,b),H.a5(b,null))))},
kU:function(a,b,c){var s=P.hq(a),r=H.a5(b==null?H.c_(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mP:function(a){return new H.d4("TypeError: "+a)},
X:function(a,b){return new H.d4("TypeError: "+H.kU(a,null,b))},
nc:function(a){return a!=null},
n_:function(a){if(a!=null)return a
throw H.c(H.X(a,"Object"))},
nf:function(a){return!0},
n0:function(a){return a},
k8:function(a){return!0===a||!1===a},
l7:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.X(a,"bool"))},
p9:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.X(a,"bool"))},
p8:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.X(a,"bool?"))},
pa:function(a){if(typeof a=="number")return a
throw H.c(H.X(a,"double"))},
pc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"double"))},
pb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"double?"))},
js:function(a){return typeof a=="number"&&Math.floor(a)===a},
jo:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.X(a,"int"))},
pe:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.X(a,"int"))},
pd:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.X(a,"int?"))},
nb:function(a){return typeof a=="number"},
pf:function(a){if(typeof a=="number")return a
throw H.c(H.X(a,"num"))},
ph:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"num"))},
pg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"num?"))},
nd:function(a){return typeof a=="string"},
jp:function(a){if(typeof a=="string")return a
throw H.c(H.X(a,"String"))},
pj:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.X(a,"String"))},
pi:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.X(a,"String?"))},
nG:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a5(a[q],b)
return s},
la:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.b.R(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a5(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a5(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a5(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a5(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a5(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a5:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a5(a.z,b)
return s}if(l===7){r=a.z
s=H.a5(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a5(a.z,b)+">"
if(l===9){p=H.nM(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nG(o,b)+">"):p}if(l===11)return H.la(a,b,null)
if(l===12)return H.la(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nM:function(a){var s,r=H.lo(a)
if(r!=null)return r
s="minified:"+a
return s},
l3:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mZ:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.k6(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d7(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d6(a,b,q)
n[b]=o
return o}else return m},
mX:function(a,b){return H.l5(a.tR,b)},
mW:function(a,b){return H.l5(a.eT,b)},
k6:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kZ(H.kX(a,null,b,c))
r.set(b,s)
return s},
fP:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kZ(H.kX(a,b,c,!0))
q.set(c,r)
return r},
mY:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.k3(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aU:function(a,b){b.a=H.n6
b.b=H.n7
return b},
d7:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aU(a,s)
a.eC.set(c,r)
return r},
l2:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mU(a,b,r,c)
a.eC.set(r,s)
return s},
mU:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aU(a,q)},
k5:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mT(a,b,r,c)
a.eC.set(r,s)
return s},
mT:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aE(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dh(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dh(q.z))return q
else return H.kG(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aU(a,p)},
l1:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mR(a,b,r,c)
a.eC.set(r,s)
return s},
mR:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d6(a,"kv",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aU(a,q)},
mV:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aU(a,s)
a.eC.set(q,r)
return r},
fO:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mQ:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d6:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fO(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aU(a,r)
a.eC.set(p,q)
return q},
k3:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fO(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aU(a,o)
a.eC.set(q,n)
return n},
l0:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fO(m)
if(j>0){s=l>0?",":""
r=H.fO(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mQ(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aU(a,o)
a.eC.set(q,r)
return r},
k4:function(a,b,c,d){var s,r=b.cy+("<"+H.fO(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mS(a,b,c,r,d)
a.eC.set(r,s)
return s},
mS:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aV(a,b,r,0)
m=H.de(a,c,r,0)
return H.k4(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aU(a,l)},
kX:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kZ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mJ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kY(a,r,h,g,!1)
else if(q===46)r=H.kY(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aT(a.u,a.e,g.pop()))
break
case 94:g.push(H.mV(a.u,g.pop()))
break
case 35:g.push(H.d7(a.u,5,"#"))
break
case 64:g.push(H.d7(a.u,2,"@"))
break
case 126:g.push(H.d7(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.k2(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.d6(p,n,o))
else{m=H.aT(p,a.e,n)
switch(m.y){case 11:g.push(H.k4(p,m,o,a.n))
break
default:g.push(H.k3(p,m,o))
break}}break
case 38:H.mK(a,g)
break
case 42:p=a.u
g.push(H.l2(p,H.aT(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.k5(p,H.aT(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.l1(p,H.aT(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fe()
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
H.k2(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.l0(p,H.aT(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.k2(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mM(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aT(a.u,a.e,i)},
mJ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kY:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l3(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mq(o)+'"')
d.push(H.fP(s,o,n))}else d.push(p)
return m},
mK:function(a,b){var s=b.pop()
if(0===s){b.push(H.d7(a.u,1,"0&"))
return}if(1===s){b.push(H.d7(a.u,4,"1&"))
return}throw H.c(P.h4("Unexpected extended operation "+H.u(s)))},
aT:function(a,b,c){if(typeof c=="string")return H.d6(a,c,a.sEA)
else if(typeof c=="number")return H.mL(a,b,c)
else return c},
k2:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aT(a,b,c[s])},
mM:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aT(a,b,c[s])},
mL:function(a,b,c){var s,r,q=b.y
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
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aE(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aE(b))return!1
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
if(p===6){s=H.kG(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.kF(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.kF(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
return s||H.K(a,b,c,d.z,e)}if(q)return!1
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.lb(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lb(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.na(a,b,c,d,e)}return!1},
lb:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
na:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l3(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.fP(a,b,l[p]),c,r[p],e))return!1
return!0},
dh:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aE(a))if(r!==7)if(!(r===6&&H.dh(a.z)))s=r===8&&H.dh(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o8:function(a){var s
if(!H.aE(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aE:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l5:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fe:function fe(){this.c=this.b=this.a=null},
f9:function f9(){},
d4:function d4(a){this.a=a},
lo:function(a){return v.mangledGlobalNames[a]},
oc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jA:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.ke==null){H.o4()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kO("Return interceptor for "+H.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.j8
if(o==null)o=$.j8=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.o9(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){o=$.j8
if(o==null)o=$.j8=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
m5:function(a){if(a<0||a>4294967295)throw H.c(P.aN(a,0,4294967295,"length",null))
return J.m6(new Array(a))},
jP:function(a){if(a<0)throw H.c(P.jJ("Length must be a non-negative integer: "+a))
return new Array(a)},
m6:function(a){return J.jQ(a)},
jQ:function(a){a.fixed$length=Array
return a},
m7:function(a,b){return J.lL(a,b)},
df:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ci.prototype
return J.dL.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.cj.prototype
if(typeof a=="boolean")return J.dK.prototype
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.M)return a
return J.jA(a)},
dg:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.M)return a
return J.jA(a)},
jz:function(a){if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.M)return a
return J.jA(a)},
nZ:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bq.prototype
return a},
o_:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bq.prototype
return a},
aX:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.M)return a
return J.jA(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.df(a).q(a,b)},
lI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o7(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dg(a).h(a,b)},
lJ:function(a,b,c){return J.aX(a).eW(a,b,c)},
lK:function(a,b,c,d){return J.aX(a).fa(a,b,c,d)},
lL:function(a,b){return J.nZ(a).a2(a,b)},
h1:function(a,b){return J.jz(a).D(a,b)},
jI:function(a,b){return J.jz(a).E(a,b)},
lM:function(a){return J.aX(a).ga1(a)},
lN:function(a){return J.aX(a).gcJ(a)},
lO:function(a){return J.aX(a).gcK(a)},
h2:function(a){return J.df(a).gK(a)},
al:function(a){return J.jz(a).gM(a)},
b2:function(a){return J.dg(a).gl(a)},
km:function(a){return J.jz(a).fS(a)},
lP:function(a,b){return J.aX(a).fW(a,b)},
lQ:function(a){return J.o_(a).h5(a)},
dk:function(a){return J.df(a).i(a)},
a:function a(){},
dK:function dK(){},
cj:function cj(){},
be:function be(){},
e9:function e9(){},
bq:function bq(){},
at:function at(){},
ah:function ah(){},
dM:function dM(){},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
ci:function ci(){},
dL:function dL(){},
aJ:function aJ(){}},P={
mA:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bX(new P.j4(q),1)).observe(s,{childList:true})
return new P.j3(q,s,r)}else if(self.setImmediate!=null)return P.nP()
return P.nQ()},
mB:function(a){self.scheduleImmediate(H.bX(new P.j5(a),0))},
mC:function(a){self.setImmediate(H.bX(new P.j6(a),0))},
mD:function(a){P.jX(C.h,a)},
jX:function(a,b){var s=C.c.W(a.a,1000)
return P.mN(s<0?0:s,b)},
kM:function(a,b){var s=C.c.W(a.a,1000)
return P.mO(s<0?0:s,b)},
mN:function(a,b){var s=new P.d3()
s.dO(a,b)
return s},
mO:function(a,b){var s=new P.d3()
s.dP(a,b)
return s},
p5:function(a){return new P.bT(a,1)},
mG:function(){return C.V},
mH:function(a){return new P.bT(a,3)},
nh:function(a){return new P.d0(a)},
nD:function(){var s,r
for(s=$.bU;s!=null;s=$.bU){$.dd=null
r=s.b
$.bU=r
if(r==null)$.dc=null
s.a.$0()}},
nJ:function(){$.k9=!0
try{P.nD()}finally{$.dd=null
$.k9=!1
if($.bU!=null)$.kl().$1(P.lf())}},
nH:function(a){var s=new P.eY(a),r=$.dc
if(r==null){$.bU=$.dc=s
if(!$.k9)$.kl().$1(P.lf())}else $.dc=r.b=s},
nI:function(a){var s,r,q,p=$.bU
if(p==null){P.nH(a)
$.dd=$.dc
return}s=new P.eY(a)
r=$.dd
if(r==null){s.b=p
$.bU=$.dd=s}else{q=r.b
s.b=q
$.dd=r.b=s
if(q==null)$.dc=s}},
kL:function(a,b){var s=$.ak
if(s===C.e)return P.jX(a,b)
return P.jX(a,s.fe(b))},
mw:function(a,b){var s=$.ak
if(s===C.e)return P.kM(a,b)
return P.kM(a,s.cI(b,t.r))},
lc:function(a,b,c,d,e){P.nI(new P.jv(d,e))},
nE:function(a,b,c,d){var s,r=$.ak
if(r===c)return d.$0()
$.ak=c
s=r
try{r=d.$0()
return r}finally{$.ak=s}},
nF:function(a,b,c,d,e){var s,r=$.ak
if(r===c)return d.$1(e)
$.ak=c
s=r
try{r=d.$1(e)
return r}finally{$.ak=s}},
j4:function j4(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
d3:function d3(){this.c=0},
jj:function jj(a,b){this.a=a
this.b=b},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b){this.a=a
this.b=b},
bs:function bs(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d0:function d0(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null},
er:function er(){},
es:function es(){},
jm:function jm(){},
jv:function jv(a,b){this.a=a
this.b=b},
jb:function jb(){},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
m9:function(a,b,c){return H.nX(a,new H.P(b.ad("@<0>").cf(c).ad("P<1,2>")))},
N:function(a,b){return new H.P(a.ad("@<0>").cf(b).ad("P<1,2>"))},
cm:function(a){return new P.cP(a.ad("cP<0>"))},
k1:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mI:function(a,b){var s=new P.cQ(a,b)
s.c=a.e
return s},
m3:function(a,b,c){var s,r
if(P.ka(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a1.push(a)
try{P.ng(a,s)}finally{if(0>=$.a1.length)return H.d($.a1,-1)
$.a1.pop()}r=P.kJ(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jO:function(a,b,c){var s,r
if(P.ka(a))return b+"..."+c
s=new P.aP(b)
$.a1.push(a)
try{r=s
r.a=P.kJ(r.a,a,", ")}finally{if(0>=$.a1.length)return H.d($.a1,-1)
$.a1.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ka:function(a){var s,r
for(s=$.a1.length,r=0;r<s;++r)if(a===$.a1[r])return!0
return!1},
ng:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.u(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.t()){if(j<=4){b.push(H.u(p))
return}r=H.u(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.t();p=o,o=n){n=l.gC(l);++j
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
kw:function(a,b){var s,r,q=P.cm(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)q.p(0,b.a(a[r]))
return q},
kx:function(a){var s,r={}
if(P.ka(a))return"{...}"
s=new P.aP("")
try{$.a1.push(a)
s.a+="{"
r.a=!0
J.jI(a,new P.hL(r,s))
s.a+="}"}finally{if(0>=$.a1.length)return H.d($.a1,-1)
$.a1.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cP:function cP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ja:function ja(a){this.a=a
this.c=this.b=null},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function ch(){},
cn:function cn(){},
D:function D(){},
cp:function cp(){},
hL:function hL(a,b){this.a=a
this.b=b},
R:function R(){},
ej:function ej(){},
cX:function cX(){},
cR:function cR(){},
d8:function d8(){},
ds:function ds(){},
dv:function dv(){},
hn:function hn(){},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hz:function hz(a){this.a=a},
iR:function iR(){},
iS:function iS(){},
jk:function jk(a){this.b=0
this.c=a},
m1:function(a){if(a instanceof H.b6)return a.i(0)
return"Instance of '"+H.cE(a)+"'"},
dS:function(a,b,c){var s,r=c?J.jP(a):J.m5(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hI:function(a,b){var s,r=[]
for(s=J.al(a);s.t();)r.push(s.gC(s))
if(b)return r
return J.jQ(r)},
ma:function(a,b){var s,r,q=J.jP(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
jW:function(a){var s=a,r=s.length,q=P.jU(0,null,r)
return H.ml(q<r?s.slice(0,q):s)},
mn:function(a){return new H.hC(a,H.m8(a,!1,!0,!1,!1,!1))},
kJ:function(a,b,c){var s=J.al(b)
if(!s.t())return a
if(c.length===0){do a+=H.u(s.gC(s))
while(s.t())}else{a+=H.u(s.gC(s))
for(;s.t();)a=a+c+H.u(s.gC(s))}return a},
l4:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.lH().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.fk(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jT(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lZ:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
m_:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dy:function(a){if(a>=10)return""+a
return"0"+a},
ks:function(a){return new P.b9(1000*a)},
hq:function(a){if(typeof a=="number"||H.k8(a)||null==a)return J.dk(a)
if(typeof a=="string")return JSON.stringify(a)
return P.m1(a)},
h4:function(a){return new P.dn(a)},
jJ:function(a){return new P.af(!1,null,null,a)},
ed:function(a,b){return new P.cF(null,null,!0,a,b,"Value not in range")},
aN:function(a,b,c,d,e){return new P.cF(b,c,!0,a,d,"Invalid value")},
jU:function(a,b,c){if(a>c)throw H.c(P.aN(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aN(b,a,c,"end",null))
return b}return c},
kD:function(a,b){if(a<0)throw H.c(P.aN(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.b2(b):e
return new P.dI(s,!0,a,c,"Index out of range")},
z:function(a){return new P.eT(a)},
kO:function(a){return new P.eQ(a)},
jV:function(a){return new P.bL(a)},
ao:function(a){return new P.dt(a)},
e:function(a){return new P.fb(a)},
ki:function(a){H.oc(a)},
Z:function Z(a,b){this.a=a
this.b=b},
b9:function b9(a){this.a=a},
hj:function hj(){},
hk:function hk(){},
G:function G(){},
dn:function dn(a){this.a=a},
eE:function eE(){},
e4:function e4(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cF:function cF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dI:function dI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eT:function eT(a){this.a=a},
eQ:function eQ(a){this.a=a},
bL:function bL(a){this.a=a},
dt:function dt(a){this.a=a},
e7:function e7(){},
cI:function cI(){},
dw:function dw(a){this.a=a},
fb:function fb(a){this.a=a},
hw:function hw(a,b){this.a=a
this.b=b},
h:function h(){},
dJ:function dJ(){},
aa:function aa(){},
M:function M(){},
aP:function aP(a){this.a=a},
nU:function(a){var s,r,q,p
if(t.I.b(a)){s=J.lO(a)
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
return new P.d5(r,q,p)},
nT:function(a){if(a instanceof P.d5)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
l8:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.k8(a))return a
if(t.f.b(a))return P.lg(a)
if(t.c.b(a)){s=[]
J.jI(a,new P.jq(s))
a=s}return a},
lg:function(a){var s={}
J.jI(a,new P.jx(s))
return s},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
jx:function jx(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
hu:function hu(){},
hv:function hv(){},
bg:function bg(){},
dQ:function dQ(){},
bj:function bj(){},
e5:function e5(){},
i9:function i9(){},
bJ:function bJ(){},
et:function et(){},
k:function k(){},
bp:function bp(){},
eD:function eD(){},
fj:function fj(){},
fk:function fk(){},
fr:function fr(){},
fs:function fs(){},
fD:function fD(){},
fE:function fE(){},
fM:function fM(){},
fN:function fN(){},
h7:function h7(){},
dp:function dp(){},
h8:function h8(a){this.a=a},
dq:function dq(){},
aH:function aH(){},
e6:function e6(){},
f_:function f_(){},
bI:function bI(){},
en:function en(){},
fz:function fz(){},
fA:function fA(){}},W={
kn:function(){var s=document.createElement("a")
s.toString
return s},
jK:function(){var s=document.createElement("canvas")
s.toString
return s},
m0:function(a,b,c){var s=document.body
s.toString
s=new H.br(new W.W(C.k.a3(s,a,b,c)),new W.hl())
return t.h.a(s.gat(s))},
hm:function(a){return"wheel"},
cc:function(a){var s,r,q="element tag unavailable"
try{s=J.aX(a)
s.gdk(a)
q=s.gdk(a)}catch(r){H.aF(r)}return q},
j9:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kW:function(a,b,c,d){var s=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
S:function(a,b,c,d){var s=W.ld(new W.j7(c),t.B)
if(s!=null&&!0)J.lK(a,b,s,!1)
return new W.fa(a,b,s,!1)},
kV:function(a){var s=W.kn(),r=window
s=new W.bS(new W.je(s,r.location))
s.dI(a)
return s},
mE:function(a,b,c,d){return!0},
mF:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
l_:function(){var s=t.N
s=new W.fH(P.kw(C.r,s),P.cm(s),P.cm(s),P.cm(s),null)
s.dN(null,new H.cr(C.r,new W.jh()),["TEMPLATE"],null)
return s},
ld:function(a,b){var s=$.ak
if(s===C.e)return a
return s.cI(a,b)},
p:function p(){},
h3:function h3(){},
dl:function dl(){},
dm:function dm(){},
bv:function bv(){},
dr:function dr(){},
b4:function b4(){},
b5:function b5(){},
c5:function c5(){},
ag:function ag(){},
hc:function hc(){},
E:function E(){},
c6:function c6(){},
hd:function hd(){},
a8:function a8(){},
ap:function ap(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
c8:function c8(){},
hh:function hh(){},
c9:function c9(){},
ca:function ca(){},
dz:function dz(){},
hi:function hi(){},
f0:function f0(a,b){this.a=a
this.b=b},
A:function A(){},
hl:function hl(){},
i:function i(){},
b:function b(){},
ar:function ar(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
as:function as(){},
hy:function hy(){},
ba:function ba(){},
bb:function bb(){},
bB:function bB(){},
bf:function bf(){},
hJ:function hJ(){},
i_:function i_(){},
dW:function dW(){},
i0:function i0(a){this.a=a},
dX:function dX(){},
i1:function i1(a){this.a=a},
au:function au(){},
dY:function dY(){},
a2:function a2(){},
W:function W(a){this.a=a},
r:function r(){},
cA:function cA(){},
aw:function aw(){},
eb:function eb(){},
eg:function eg(){},
ig:function ig(a){this.a=a},
ei:function ei(){},
ai:function ai(){},
el:function el(){},
ay:function ay(){},
em:function em(){},
az:function az(){},
eq:function eq(){},
ip:function ip(a){this.a=a},
ad:function ad(){},
cJ:function cJ(){},
eu:function eu(){},
ev:function ev(){},
bM:function bM(){},
aj:function aj(){},
a4:function a4(){},
ex:function ex(){},
ey:function ey(){},
iy:function iy(){},
aA:function aA(){},
bo:function bo(){},
eC:function eC(){},
iD:function iD(){},
aC:function aC(){},
iQ:function iQ(){},
eV:function eV(){},
aS:function aS(){},
bQ:function bQ(){},
bR:function bR(){},
f1:function f1(){},
cO:function cO(){},
ff:function ff(){},
cS:function cS(){},
fy:function fy(){},
fF:function fF(){},
eZ:function eZ(){},
f7:function f7(a){this.a=a},
jN:function jN(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j7:function j7(a){this.a=a},
k0:function k0(a){this.$ti=a},
bS:function bS(a){this.a=a},
H:function H(){},
cB:function cB(a){this.a=a},
i5:function i5(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
cY:function cY(){},
jf:function jf(){},
jg:function jg(){},
fH:function fH(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jh:function jh(){},
fG:function fG(){},
ce:function ce(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
je:function je(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a
this.b=0},
jl:function jl(a){this.a=a},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
fc:function fc(){},
fd:function fd(){},
fh:function fh(){},
fi:function fi(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
ft:function ft(){},
fu:function fu(){},
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
s=C.b.b3(a,0)
r=C.b.b3(b,0)
if(s>r){q=r
r=s
s=q}return new K.ia(s,r)},
aG:function aG(){},
dG:function dG(){},
a0:function a0(a){this.a=a},
ia:function ia(a,b){this.a=a
this.b=b},
q:function q(a){this.a=a}},L={
iB:function(){var s=t.N
return new L.iA(P.N(s,t.aJ),P.N(s,t.aX),P.cm(s))},
eo:function eo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a,b){this.b=a
this.c=b},
iA:function iA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iE:function iE(a,b){this.b=a
this.c=!1
this.a=b}},O={
jL:function(){return new O.by([])},
by:function by(a){this.a=a
this.c=this.b=null},
cv:function cv(a){this.a=a
this.b=null},
dV:function(a,b){return new O.ct(new V.O(0,0,0),a,b,new A.a7(!1,!1,!1))},
dT:function dT(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hS:function hS(a,b){this.a=a
this.b=b},
hT:function hT(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(){},
hW:function hW(a,b){this.a=a
this.b=b},
hX:function hX(){},
hY:function hY(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
hM:function hM(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cs:function cs(){},
hN:function hN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
ct:function ct(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hP:function hP(a){this.b=a},
hQ:function hQ(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hR:function hR(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
ir:function ir(){}},E={
kS:function(){var s=window.navigator.vendor
s.toString
if(C.b.v(s,"Google"))return C.y
s=window.navigator.userAgent
s.toString
if(C.b.v(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.b.v(s,"Trident")||C.b.v(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.b.v(s,"Microsoft"))return C.m
return C.z},
kT:function(){var s=window.navigator.appVersion
s.toString
if(C.b.v(s,"Win"))return C.R
if(C.b.v(s,"Mac"))return C.t
if(C.b.v(s,"Linux"))return C.S
return C.T},
mp:function(a,b){var s
Date.now()
s=new E.ib(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.cv([]),new O.cv([]),new O.cv([]),[null],P.N(t.N,t.k))
s.dH(a,b)
return s},
mv:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kK(a,!0,!0,!0,!1)
s=W.jK()
r=s.style
r.width="100%"
r.height="100%"
J.lN(a).p(0,s)
return E.kK(s,!0,!0,!0,!1)},
kK:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.p.c3(a,"webgl2",P.m9(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.e("Failed to get the rendering context for WebGL."))
s=E.mp(l,a)
m=H.jo(l.getParameter(3379))
H.jo(l.getParameter(34076))
r=[]
q=$.ho
p=new X.eU(a,r,(q==null?$.ho=new E.f8(E.kS(),E.kT()):q).a===C.l?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.S(o,"contextmenu",p.gej(),!1))
r.push(W.S(a,"focus",p.gep(),!1))
r.push(W.S(a,"blur",p.ged(),!1))
r.push(W.S(o,"keyup",p.geu(),!1))
r.push(W.S(o,"keydown",p.ger(),!1))
r.push(W.S(a,"mousedown",p.gey(),!1))
r.push(W.S(a,"mouseup",p.geC(),!1))
r.push(W.S(a,n,p.geA(),!1))
W.hm(a)
W.hm(a)
r.push(W.S(a,W.hm(a),p.geE(),!1))
r.push(W.S(o,n,p.gel(),!1))
r.push(W.S(o,"mouseup",p.gen(),!1))
r.push(W.S(o,"pointerlockchange",p.geG(),!1))
r.push(W.S(a,"touchstart",p.geR(),!1))
r.push(W.S(a,"touchend",p.geN(),!1))
r.push(W.S(a,"touchmove",p.geP(),!1))
m=new E.ez(a,s,new T.iv(l,m),new P.Z(Date.now(),!1))
m.cs()
return m},
h9:function h9(){},
bz:function bz(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bx:function bx(a){this.b=a},
bG:function bG(a){this.b=a},
f8:function f8(a,b){this.a=a
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
ez:function ez(a,b,c,d){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.Q=null
_.cx=!1
_.cy=d
_.db=0},
ix:function ix(a){this.a=a}},Z={
k_:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.da(c)),35044)
a.bindBuffer(b,null)
return new Z.eW(b,s)},
ae:function(a){return new Z.aR(a)},
eW:function eW(a,b){this.a=a
this.b=b},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j2:function j2(a){this.a=a},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a){this.a=a}},D={
a9:function(){return new D.bA()},
hb:function hb(){},
bA:function bA(){var _=this
_.c=_.b=_.a=null
_.d=0},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
a_:function a_(){},
bc:function bc(){},
bd:function bd(){},
F:function F(a,b,c){this.c=a
this.d=b
this.e=c},
c7:function c7(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cl:function cl(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c4:function c4(a,b){this.a=a
this.b=b},dO:function dO(a,b){this.a=a
this.b=b},hE:function hE(a){this.d=a},hK:function hK(a,b,c,d){var _=this
_.a=a
_.r=0
_.x=b
_.y=c
_.z=d},bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},i2:function i2(a,b,c,d,e){var _=this
_.a=a
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},iC:function iC(a,b,c,d,e){var _=this
_.a=a
_.e=b
_.f=c
_.r=d
_.x=e},eU:function eU(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
m2:function(a){var s=V.bW(1),r=$.kE
if(r==null){r=V.mo(0,0,1,1)
$.kE=r}return new X.hx(new V.b7(0,0,0,s),r)},
hx:function hx(a,b){this.a=a
this.r=b
this.x=null},
e8:function e8(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iq:function iq(){}},V={
kf:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
bW:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
kk:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dt(a-b,s)
return(a<0?a+s:a)+b},
v:function(a,b,c){$.C().toString
return C.b.a6(C.d.c0(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bZ:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.n)(a),++p){o=a[p]
$.C().toString
n=C.b.a6(C.d.c0(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.b.a6(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
kh:function(a){return C.d.h2(Math.pow(2,C.d.bR(Math.log(a)/Math.log(2))))},
cw:function(){var s=$.kA
return s==null?$.kA=V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kz:function(a,b,c){var s=c.L(),r=b.aS(s).L(),q=s.aS(r),p=new V.B(a.a,a.b,a.c)
return V.aM(r.a,q.a,s.a,r.aI(0).aU(p),r.b,q.b,s.b,q.aI(0).aU(p),r.c,q.c,s.c,s.aI(0).aU(p),0,0,0,1)},
kB:function(){var s=$.ax
return s==null?$.ax=new V.a3(0,0,0):s},
mo:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ee(a,b,c,d)},
cL:function(){var s=$.kQ
return s==null?$.kQ=new V.B(0,0,0):s},
my:function(){var s=$.iT
return s==null?$.iT=new V.B(-1,0,0):s},
jZ:function(){var s=$.iU
return s==null?$.iU=new V.B(0,1,0):s},
mz:function(){var s=$.iV
return s==null?$.iV=new V.B(0,0,1):s},
mx:function(a,b,c){return new V.B(a,b,c)},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(){},
cu:function cu(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bD:function bD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ab:function ab(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
od:function(a){P.mw(C.J,new V.jH(a))},
mr:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.S(n,"scroll",new V.il(s),!1)
return new V.ij(o)},
an:function an(){},
jH:function jH(a){this.a=a},
dx:function dx(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dF:function dF(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dH:function dH(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ea:function ea(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ij:function ij(a){this.a=a
this.b=null},
il:function il(a){this.a=a},
ik:function ik(a){this.a=a},
im:function im(a){this.a=a}},U={
kr:function(a){var s=V.cw(),r=new U.du(s)
if(!s.q(0,a))r.a=a
return r},
du:function du(a){this.a=a
this.b=null},
i3:function i3(){},
ef:function ef(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null}},M={dA:function dA(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mc:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gab(a5)+a6.gab(a6)+a7.gab(a7)+a8.gab(a8)+a9.gab(a9)+b0.gab(b0)+b1.gab(b1)+b2.gab(b2)+b3.gab(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.n)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.n)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.n)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.n)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.b0()
if(h){s=$.b_()
b=new Z.aR(b.a|s.a)}if(g)b=new Z.aR(b.a|$.aZ().a)
if(f)b=new Z.aR(b.a|$.b1().a)
if(e)b=new Z.aR(b.a|$.aY().a)
return new A.hO(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jt:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
ju:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.jt(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h0(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
nm:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jt(b,r,"emission")
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
ni:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ju(b,r,"ambient")
b.a+="\n"},
nk:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ju(b,r,"diffuse")
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
nn:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ju(b,r,"invDiffuse")
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
nt:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ju(b,r,"specular")
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
np:function(a,b){var s,r,q
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
nr:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jt(b,r,"reflect")
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
ns:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jt(b,r,"refract")
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
nj:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
s=c.a+="   return "+C.a.j(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.j(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.j(o," + ")+");\n"
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
nl:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
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
c.a+="      highLight = intensity*("+C.a.j(l," + ")+");\n"}else c.a+="   highLight = "+C.a.j(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.j(m," + ")+");\n"
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
nq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
p=c.a+="   return "+C.a.j(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.a.j(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.j(j," + ")+");\n"
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
nu:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(m){s=$.ho
if(s==null)s=$.ho=new E.f8(E.kS(),E.kT())
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
s=c.a+="   return "+C.a.j(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.j(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.j(h," + ")+");\n"
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
no:function(a,b){var s,r
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
s=b.a+="   return "+C.a.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nv:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.aP(""),j=""+"precision mediump float;\n"
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
A.nm(a,k)
A.ni(a,k)
A.nk(a,k)
A.nn(a,k)
A.nt(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.nr(a,k)
A.ns(a,k)}A.np(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.nj(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.nl(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.nq(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.nu(a,p[n],k)
A.no(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ah(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ah(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ah(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ah(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.j(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
nw:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aB+"];\n"
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
ny:function(a,b){var s
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
nx:function(a,b){var s
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
nA:function(a,b){var s,r
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
nB:function(a,b){var s,r
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
nz:function(a,b){var s
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
nC:function(a,b){var s
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
return a[0].toUpperCase()+C.b.ah(a,1)},
jY:function(a,b,c,d,e){var s=new A.iJ([],a,c,e)
s.f=d
s.e=P.dS(d,0,!1)
return s},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.hk=_.cZ=_.cY=_.hj=_.cX=_.cW=_.cV=_.hi=_.cU=_.cT=_.cS=_.hh=_.cR=_.cQ=_.hg=_.cP=_.cO=_.cN=_.aC=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bJ=c
_.bK=d
_.bL=e
_.bM=f
_.bN=g
_.bO=h
_.bP=i
_.bQ=j
_.hn=_.hm=_.hl=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b3:function b3(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
hO:function hO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aB=b5
_.aC=b6
_.cN=b7},
eI:function eI(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eM:function eM(a,b,c,d,e,f,g,h,i,j){var _=this
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
eP:function eP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cG:function cG(){},
iI:function iI(){},
iO:function iO(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eF:function eF(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
eG:function eG(a,b,c){this.a=a
this.c=b
this.d=c},
eH:function eH(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
eK:function eK(a,b,c){this.a=a
this.c=b
this.d=c},
eL:function eL(a,b,c){this.a=a
this.c=b
this.d=c},
eN:function eN(a,b,c){this.a=a
this.c=b
this.d=c},
eO:function eO(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jr:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
d9:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.B(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.B(s+a4,r+a2,q+a3)
o=new V.B(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.B(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jr(h)
j=F.jr(g)
a.bV(F.of(a0,a1,new F.jn(i,F.jr(f),F.jr(e),j,k,c),b))},
of:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.kI()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.y(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.cC(new V.b7(n,0,0,1),new V.ab(p,1))
c.$3(m,p,0)
r.push(m.bH(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.y(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cC(new V.b7(h,g,f,1),new V.ab(p,k))
c.$3(m,p,l)
r.push(m.bH(d))}}s.gN().fb(a+1,b+1,r)
return s},
kI:function(){return new F.ih()},
kR:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cM()
h=$.lD()
s=$.b0()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b_().a)!==0)q.r=e
if((r&$.aZ().a)!==0)q.x=b
if((r&$.b1().a)!==0)q.y=f
if((r&$.bu().a)!==0)q.z=g
if((r&$.lE().a)!==0)q.Q=c
if((r&$.c0().a)!==0)q.ch=i
if((r&$.aY().a)!==0)q.cx=a
return q},
jn:function jn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aq:function aq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(){},
io:function io(){},
hF:function hF(){this.b=this.a=null},
hG:function hG(){},
iH:function iH(){},
i8:function i8(){this.a=null},
ih:function ih(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cH:function cH(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
cM:function cM(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
bP:function bP(a,b,c){this.b=a
this.c=b
this.d=c},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
aQ:function aQ(a,b){this.b=a
this.c=b},
iZ:function iZ(){},
iY:function iY(){},
j_:function j_(){},
i6:function i6(){},
cN:function cN(a){this.b=a},
oa:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.mr("Test 005"),a=W.jK()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a).toString
b.cD(["A test of the Material Lighting shader with 2D textures and directional ","lighting. This test has texturing for emission, ambient, diffuse, and ","specular. The same texture is used for ambient and diffuse. ","The emission texture makes the lights on the panel glow. ","The specular texture makes specific parts shiny and other parts not."])
b.cD(["\xab[Back to Tests|../]"])
s=document.getElementById(d)
if(s==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
r=E.mv(s,!0,!0,!0,!1)
q=O.jL()
p=new E.bz(q)
q.bg(p.gfE(),p.gfH())
p.sc6(0,c)
p.saX(c)
o=F.kI()
F.d9(o,c,c,1,1,1,0,0,1)
F.d9(o,c,c,1,1,0,1,0,3)
F.d9(o,c,c,1,1,0,0,1,2)
F.d9(o,c,c,1,1,-1,0,0,0)
F.d9(o,c,c,1,1,0,-1,0,0)
F.d9(o,c,c,1,1,0,0,-1,3)
o.aA()
o.fD(new F.iY(),new F.i6())
p.sc6(0,o)
q=new U.ef(V.cw())
q.sdn(0)
q.sde(0,0)
q.sdj(0)
n=q.d
$.C().toString
if(!(Math.abs(n-0.1)<1e-9)){q.d=0.1
q.ax(new D.F("deltaYaw",n,0.1))}n=q.e
$.C().toString
if(!(Math.abs(n-0.21)<1e-9)){q.e=0.21
q.ax(new D.F("deltaPitch",n,0.21))}n=q.f
$.C().toString
if(!(Math.abs(n-0.32)<1e-9)){q.f=0.32
q.ax(new D.F("deltaRoll",n,0.32))}p.saX(q)
q=r.f
m=q.bU("../resources/CtrlPnlColor.png")
n=O.jL()
l=new O.dT(n)
n.bg(l.ge9(),l.geb())
n=l.gd5()
n.gw().p(0,l.gcq())
n.gd4().p(0,l.gaN())
n=l.gd5()
k=V.jZ()
j=U.kr(V.kz(V.kB(),k,new V.B(1,-1,-3)))
i=new V.O(1,1,1)
h=new D.c7(new V.O(1,1,1),V.mz(),V.jZ(),V.my())
g=h.a
h.a=j
j.gw().p(0,h.gdK())
h.ai(new D.F("mover",g,h.a))
if(!h.b.q(0,i)){g=h.b
h.b=i
h.ai(new D.F("color",g,i))}n.p(0,h)
l.gcL().sbc(q.bU("../resources/CtrlPnlEmission.png"))
l.gbB().saR(0,new V.O(V.bW(0.2),V.bW(0.2),V.bW(0.2)))
l.gbI().saR(0,new V.O(V.bW(0.8),V.bW(0.8),V.bW(0.8)))
l.gbB().sbc(m)
l.gbI().sbc(m)
l.gbh().sbc(q.bU("../resources/CtrlPnlSpecular.png"))
q=l.gbh()
q.bx(new A.a7(!0,q.c.b,!1))
q.cu(10)
q=O.jL()
n=new M.dA(q)
q.bg(n.gef(),n.geh())
f=X.m2(c)
e=new X.e8(1.0471975511965976,0.1)
e.saX(c)
j=e.c
$.C().toString
if(!(Math.abs(j-1.0471975511965976)<1e-9)){e.c=1.0471975511965976
e.av(new D.F("fov",j,1.0471975511965976))}j=e.d
$.C().toString
if(!(Math.abs(j-0.1)<1e-9)){e.d=0.1
e.av(new D.F("near",j,0.1))}j=e.e
$.C().toString
if(!(Math.abs(j-2000)<1e-9)){e.e=2000
e.av(new D.F("far",j,2000))}j=n.b
if(j!==e){if(j!=null)j.gw().I(0,n.gac())
g=n.b
n.b=e
e.gw().p(0,n.gac())
n.aj(new D.F("camera",g,n.b))}j=n.c
if(j!==f){if(j!=null)j.gw().I(0,n.gac())
g=n.c
n.c=f
f.gw().p(0,n.gac())
n.aj(new D.F("target",g,n.c))}n.sdl(c)
n.sdl(l)
q.p(0,p)
q=n.b
if(q!=null)q.saX(U.kr(V.aM(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=r.d
if(q!==n){if(q!=null)q.gw().I(0,r.gca())
r.d=n
n.gw().p(0,r.gca())
r.cb()}q=r.Q
if(q==null)q=r.Q=D.a9()
n=q.b
q=n==null?q.b=[]:n
q.push(new F.jF(b,l))
V.od(r)},
jF:function jF(a,b){this.a=a
this.b=b}},T={is:function is(){},it:function it(){},iu:function iu(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},iv:function iv(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},iw:function iw(a,b,c,d,e,f,g){var _=this
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
H.jR.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gK:function(a){return H.cD(a)},
i:function(a){return"Instance of '"+H.cE(a)+"'"}}
J.dK.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iY:1}
J.cj.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.be.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.e9.prototype={}
J.bq.prototype={}
J.at.prototype={
i:function(a){var s=a[$.lr()]
if(s==null)return this.dD(a)
return"JavaScript function for "+J.dk(s)},
$icf:1}
J.ah.prototype={
bY:function(a,b){if(!!a.fixed$length)H.f(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.ed(b,null))
return a.splice(b,1)[0]},
I:function(a,b){var s
if(!!a.fixed$length)H.f(P.z("remove"))
for(s=0;s<a.length;++s)if(J.L(a[s],b)){a.splice(s,1)
return!0}return!1},
a0:function(a,b){if(!!a.fixed$length)H.f(P.z("addAll"))
this.dS(a,b)
return},
dS:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.ao(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.ao(a))}},
j:function(a,b){var s,r,q=a.length,p=P.dS(q,"",!1)
for(s=0;s<a.length;++s){r=H.u(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
fB:function(a){return this.j(a,"")},
fw:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.ao(a))}throw H.c(H.hB())},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gfv:function(a){if(a.length>0)return a[0]
throw H.c(H.hB())},
gba:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hB())},
cE:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.ao(a))}return!1},
aK:function(a,b){if(!!a.immutable$list)H.f(P.z("sort"))
H.mu(a,b==null?J.n9():b)},
dz:function(a){return this.aK(a,null)},
v:function(a,b){var s
for(s=0;s<a.length;++s)if(J.L(a[s],b))return!0
return!1},
i:function(a){return P.jO(a,"[","]")},
gM:function(a){return new J.a6(a,a.length)},
gK:function(a){return H.cD(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.f(P.z("set length"))
if(b>a.length)H.l6(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bY(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.f(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bY(a,b))
a[b]=c},
$it:1,
$ij:1,
$ih:1,
$im:1}
J.dM.prototype={}
J.a6.prototype={
gC:function(a){return H.T(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bC.prototype={
a2:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb8(b)
if(this.gb8(a)===s)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
h2:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
bR:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
c0:function(a,b){var s
if(b>20)throw H.c(P.aN(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dt:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.u(s)+": "+H.u(a)+" ~/ "+b))},
b5:function(a,b){var s
if(a>0)s=this.f8(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
f8:function(a,b){return b>31?0:a>>>b},
$iU:1,
$iV:1}
J.ci.prototype={$il:1}
J.dL.prototype={}
J.aJ.prototype={
bG:function(a,b){if(b<0)throw H.c(H.bY(a,b))
if(b>=a.length)H.f(H.bY(a,b))
return a.charCodeAt(b)},
b3:function(a,b){if(b>=a.length)throw H.c(H.bY(a,b))
return a.charCodeAt(b)},
R:function(a,b){return a+b},
bi:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ed(b,null))
if(b>c)throw H.c(P.ed(b,null))
if(c>a.length)throw H.c(P.ed(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.b1(a,b,null)},
h5:function(a){return a.toLowerCase()},
Z:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a6:function(a,b){var s=b-a.length
if(s<=0)return a
return this.Z(" ",s)+a},
fi:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aN(c,0,s,null,null))
return H.ln(a,b,c)},
v:function(a,b){return this.fi(a,b,0)},
a2:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gK:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$it:1,
$iw:1}
H.dP.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bG(this.a,b)}}
H.j.prototype={}
H.co.prototype={
gM:function(a){return new H.aL(this,this.gl(this))},
bf:function(a,b){return this.dC(0,b)}}
H.aL.prototype={
gC:function(a){return H.T(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.dg(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
H.bh.prototype={
gM:function(a){return new H.cq(J.al(this.a),this.b)},
gl:function(a){return J.b2(this.a)},
D:function(a,b){return this.b.$1(J.h1(this.a,b))}}
H.cb.prototype={$ij:1}
H.cq.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.T(this).Q[1].a(this.a)}}
H.cr.prototype={
gl:function(a){return J.b2(this.a)},
D:function(a,b){return this.b.$1(J.h1(this.a,b))}}
H.br.prototype={
gM:function(a){return new H.eX(J.al(this.a),this.b)}}
H.eX.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cd.prototype={}
H.eS.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.bN.prototype={}
H.iF.prototype={
a5:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cC.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dN.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eR.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i7.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fB.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.b6.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lp(r==null?"unknown":r)+"'"},
$icf:1,
gh9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ew.prototype={}
H.ep.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lp(s)+"'"}}
H.bw.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bw))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gK:function(a){var s,r=this.c
if(r==null)s=H.cD(this.a)
else s=typeof r!=="object"?J.h2(r):H.cD(r)
return(s^H.cD(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.u(this.d)+"' of "+("Instance of '"+H.cE(s)+"'")}}
H.eh.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.P.prototype={
gl:function(a){return this.a},
gX:function(a){return new H.aK(this)},
gh8:function(a){return H.mb(new H.aK(this),new H.hD(this))},
fj:function(a,b){var s=this.b
if(s==null)return!1
return this.dZ(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b4(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b4(p,b)
q=r==null?n:r.b
return q}else return o.fA(b)},
fA:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cm(q,J.h2(a)&0x3ffffff)
r=this.d_(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.ce(s==null?m.b=m.bs():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.ce(r==null?m.c=m.bs():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bs()
p=J.h2(b)&0x3ffffff
o=m.cm(q,p)
if(o==null)m.by(q,p,[m.bt(b,c)])
else{n=m.d_(o,b)
if(n>=0)o[n].b=c
else o.push(m.bt(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.ao(s))
r=r.c}},
ce:function(a,b,c){var s=this.b4(a,b)
if(s==null)this.by(a,b,this.bt(b,c))
else s.b=c},
e5:function(){this.r=this.r+1&67108863},
bt:function(a,b){var s,r=this,q=new H.hH(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.e5()
return q},
d_:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1},
i:function(a){return P.kx(this)},
b4:function(a,b){return a[b]},
cm:function(a,b){return a[b]},
by:function(a,b,c){a[b]=c},
e2:function(a,b){delete a[b]},
dZ:function(a,b){return this.b4(a,b)!=null},
bs:function(){var s="<non-identifier-key>",r=Object.create(null)
this.by(r,s,r)
this.e2(r,s)
return r}}
H.hD.prototype={
$1:function(a){var s=this.a
return H.T(s).Q[1].a(s.h(0,a))},
$S:function(){return H.T(this.a).ad("2(1)")}}
H.hH.prototype={}
H.aK.prototype={
gl:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.dR(s,s.r)
r.c=s.e
return r}}
H.dR.prototype={
gC:function(a){return H.T(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jB.prototype={
$1:function(a){return this.a(a)},
$S:28}
H.jC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.jD.prototype={
$1:function(a){return this.a(a)},
$S:35}
H.hC.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cy.prototype={}
H.bF.prototype={
gl:function(a){return a.length},
$it:1,
$ix:1}
H.bi.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cx.prototype={
m:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dZ.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.e0.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.e1.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.e2.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.cz.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.e3.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.cT.prototype={}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.ac.prototype={
ad:function(a){return H.fP(v.typeUniverse,this,a)},
cf:function(a){return H.mY(v.typeUniverse,this,a)}}
H.fe.prototype={}
H.f9.prototype={
i:function(a){return this.a}}
H.d4.prototype={}
P.j4.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:44}
P.j3.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:24}
P.j5.prototype={
$0:function(){this.a.$0()},
$S:10}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d3.prototype={
dO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bX(new P.jj(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
dP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bX(new P.ji(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$iiz:1}
P.jj.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.ji.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dF(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bT.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.u(this.a)+")"}}
P.bs.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
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
else{o=J.al(s)
if(o instanceof P.bs){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d0.prototype={
gM:function(a){return new P.bs(this.a())}}
P.eY.prototype={}
P.er.prototype={}
P.es.prototype={}
P.jm.prototype={}
P.jv.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.jb.prototype={
fY:function(a){var s,r,q,p=null
try{if(C.e===$.ak){a.$0()
return}P.nE(p,p,this,a)}catch(q){s=H.aF(q)
r=H.kd(q)
P.lc(p,p,this,s,r)}},
fZ:function(a,b){var s,r,q,p=null
try{if(C.e===$.ak){a.$1(b)
return}P.nF(p,p,this,a,b)}catch(q){s=H.aF(q)
r=H.kd(q)
P.lc(p,p,this,s,r)}},
h_:function(a,b){return this.fZ(a,b,t.z)},
fe:function(a){return new P.jc(this,a)},
cI:function(a,b){return new P.jd(this,a,b)}}
P.jc.prototype={
$0:function(){return this.a.fY(this.b)},
$S:1}
P.jd.prototype={
$1:function(a){return this.a.h_(this.b,a)},
$S:function(){return this.c.ad("~(0)")}}
P.cP.prototype={
gM:function(a){var s=new P.cQ(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
v:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dY(b)
return r}},
dY:function(a){var s=this.d
if(s==null)return!1
return this.bq(s[this.bn(a)],a)>=0},
p:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cg(s==null?q.b=P.k1():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cg(r==null?q.c=P.k1():r,b)}else return q.dR(0,b)},
dR:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.k1()
s=q.bn(b)
r=p[s]
if(r==null)p[s]=[q.bm(b)]
else{if(q.bq(r,b)>=0)return!1
r.push(q.bm(b))}return!0},
I:function(a,b){if((b&1073741823)===b)return this.eU(this.c,b)
else return this.eT(0,b)},
eT:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bn(b)
r=n[s]
q=o.bq(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cz(p)
return!0},
cg:function(a,b){if(a[b]!=null)return!1
a[b]=this.bm(b)
return!0},
eU:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cz(s)
delete a[b]
return!0},
ci:function(){this.r=this.r+1&1073741823},
bm:function(a){var s,r=this,q=new P.ja(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.ci()
return q},
cz:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.ci()},
bn:function(a){return J.h2(a)&1073741823},
bq:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1}}
P.ja.prototype={}
P.cQ.prototype={
gC:function(a){return H.T(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ch.prototype={}
P.cn.prototype={$ij:1,$ih:1,$im:1}
P.D.prototype={
gM:function(a){return new H.aL(a,this.gl(a))},
D:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.ao(a))}},
gd1:function(a){return this.gl(a)===0},
h4:function(a,b){var s,r,q,p,o=this
if(o.gd1(a)){s=J.jP(0)
return s}r=o.h(a,0)
q=P.dS(o.gl(a),r,!0)
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
h3:function(a){return this.h4(a,!0)},
i:function(a){return P.jO(a,"[","]")}}
P.cp.prototype={}
P.hL.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.u(a)
r.a=s+": "
r.a+=H.u(b)},
$S:46}
P.R.prototype={
E:function(a,b){var s,r,q
for(s=J.al(this.gX(a)),r=H.c_(a).ad("R.V");s.t();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.b2(this.gX(a))},
i:function(a){return P.kx(a)},
$iQ:1}
P.ej.prototype={
a0:function(a,b){var s
for(s=J.al(b);s.t();)this.p(0,s.gC(s))},
i:function(a){return P.jO(this,"{","}")},
D:function(a,b){var s,r,q,p,o="index"
H.nR(b,o,t.S)
P.kD(b,o)
for(s=P.mI(this,this.r),r=H.T(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.I(b,this,o,null,q))}}
P.cX.prototype={$ij:1,$ih:1}
P.cR.prototype={}
P.d8.prototype={}
P.ds.prototype={}
P.dv.prototype={}
P.hn.prototype={}
P.hA.prototype={
i:function(a){return this.a}}
P.hz.prototype={
e_:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.aP("")
if(o>b)n.a+=C.b.b1(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.b1(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.iR.prototype={}
P.iS.prototype={
fk:function(a){var s,r,q,p=P.jU(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jk(r)
if(q.e4(a,0,p)!==p){C.b.bG(a,p-1)
q.bA()}return new Uint8Array(r.subarray(0,H.n1(0,q.b,s)))}}
P.jk.prototype={
bA:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
f9:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bA()
return!1}},
e4:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bG(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.b3(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.f9(p,C.b.b3(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bA()}else if(p<=2047){o=l.b
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
P.Z.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
a2:function(a,b){return C.c.a2(this.a,b.a)},
gK:function(a){var s=this.a
return(s^C.c.b5(s,30))&1073741823},
i:function(a){var s=this,r=P.lZ(H.mk(s)),q=P.dy(H.mi(s)),p=P.dy(H.me(s)),o=P.dy(H.mf(s)),n=P.dy(H.mh(s)),m=P.dy(H.mj(s)),l=P.m_(H.mg(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b9.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
a2:function(a,b){return C.c.a2(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hk(),o=this.a
if(o<0)return"-"+new P.b9(0-o).i(0)
s=p.$1(C.c.W(o,6e7)%60)
r=p.$1(C.c.W(o,1e6)%60)
q=new P.hj().$1(o%1e6)
return""+C.c.W(o,36e8)+":"+s+":"+r+"."+q}}
P.hj.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.hk.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.G.prototype={}
P.dn.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hq(s)
return"Assertion failed"}}
P.eE.prototype={}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.af.prototype={
gbp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbo:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbp()+o+m
if(!q.a)return l
s=q.gbo()
r=P.hq(q.b)
return l+s+": "+r}}
P.cF.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.u(q):""
else if(q==null)s=": Not greater than or equal to "+H.u(r)
else if(q>r)s=": Not in inclusive range "+H.u(r)+".."+H.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.u(r)
return s}}
P.dI.prototype={
gbp:function(){return"RangeError"},
gbo:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.eT.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eQ.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bL.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dt.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hq(s)+"."}}
P.e7.prototype={
i:function(a){return"Out of Memory"},
$iG:1}
P.cI.prototype={
i:function(a){return"Stack Overflow"},
$iG:1}
P.dw.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fb.prototype={
i:function(a){return"Exception: "+this.a}}
P.hw.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.b1(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
bf:function(a,b){return new H.br(this,b)},
gl:function(a){var s,r=this.gM(this)
for(s=0;r.t();)++s
return s},
gat:function(a){var s,r=this.gM(this)
if(!r.t())throw H.c(H.hB())
s=r.gC(r)
if(r.t())throw H.c(H.m4())
return s},
D:function(a,b){var s,r,q
P.kD(b,"index")
for(s=this.gM(this),r=0;s.t();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.I(b,this,"index",null,r))},
i:function(a){return P.m3(this,"(",")")}}
P.dJ.prototype={}
P.aa.prototype={
gK:function(a){return P.M.prototype.gK.call(C.M,this)},
i:function(a){return"null"}}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gK:function(a){return H.cD(this)},
i:function(a){return"Instance of '"+H.cE(this)+"'"},
toString:function(){return this.i(this)}}
P.aP.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.p.prototype={}
W.h3.prototype={
gl:function(a){return a.length}}
W.dl.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dm.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bv.prototype={$ibv:1}
W.dr.prototype={}
W.b4.prototype={$ib4:1}
W.b5.prototype={
c3:function(a,b,c){if(c!=null)return a.getContext(b,P.lg(c))
return a.getContext(b)},
ds:function(a,b){return this.c3(a,b,null)},
$ib5:1}
W.c5.prototype={$ic5:1}
W.ag.prototype={
gl:function(a){return a.length}}
W.hc.prototype={
gl:function(a){return a.length}}
W.E.prototype={$iE:1}
W.c6.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.hd.prototype={}
W.a8.prototype={}
W.ap.prototype={}
W.he.prototype={
gl:function(a){return a.length}}
W.hf.prototype={
gl:function(a){return a.length}}
W.hg.prototype={
gl:function(a){return a.length}}
W.c8.prototype={}
W.hh.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c9.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.ca.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
return r+H.u(s)+") "+H.u(this.gaH(a))+" x "+H.u(this.gaE(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.J.b(b)){s=a.left
s.toString
r=J.aX(b)
if(s===r.gd3(b)){s=a.top
s.toString
s=s===r.gdm(b)&&this.gaH(a)===r.gaH(b)&&this.gaE(a)===r.gaE(b)}else s=!1}else s=!1
return s},
gK:function(a){var s,r=a.left
r.toString
r=C.d.gK(r)
s=a.top
s.toString
return W.kW(r,C.d.gK(s),C.d.gK(this.gaH(a)),C.d.gK(this.gaE(a)))},
gcn:function(a){return a.height},
gaE:function(a){var s=this.gcn(a)
s.toString
return s},
gd3:function(a){var s=a.left
s.toString
return s},
gdm:function(a){var s=a.top
s.toString
return s},
gcA:function(a){return a.width},
gaH:function(a){var s=this.gcA(a)
s.toString
return s},
$iaO:1}
W.dz.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.hi.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.f0.prototype={
gd1:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
p:function(a,b){this.a.appendChild(b).toString
return b},
gM:function(a){var s=this.h3(this)
return new J.a6(s,s.length)}}
W.A.prototype={
ga1:function(a){return new W.f7(a)},
gcJ:function(a){var s=a.children
s.toString
return new W.f0(a,s)},
i:function(a){var s=a.localName
s.toString
return s},
a3:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.ku
if(s==null){s=[]
r=new W.cB(s)
s.push(W.kV(null))
s.push(W.l_())
$.ku=r
d=r}else d=s
s=$.kt
if(s==null){s=new W.fQ(d)
$.kt=s
c=s}else{s.a=d
c=s}}if($.aI==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aI=r
r=r.createRange()
r.toString
$.jM=r
r=$.aI.createElement("base")
t.w.a(r)
s=s.baseURI
s.toString
r.href=s
$.aI.head.appendChild(r).toString}s=$.aI
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aI
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aI.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.v(C.P,s)}else s=!1
if(s){$.jM.selectNodeContents(q)
s=$.jM
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aI.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aI.body)J.km(q)
c.c4(p)
document.adoptNode(p).toString
return p},
fm:function(a,b,c){return this.a3(a,b,c,null)},
du:function(a,b){var s
a.textContent=null
s=a.appendChild(this.a3(a,b,null,null))
s.toString},
gdk:function(a){var s=a.tagName
s.toString
return s},
$iA:1}
W.hl.prototype={
$1:function(a){return t.h.b(a)},
$S:14}
W.i.prototype={$ii:1}
W.b.prototype={
fa:function(a,b,c,d){if(c!=null)this.dT(a,b,c,!1)},
dT:function(a,b,c,d){return a.addEventListener(b,H.bX(c,1),!1)},
$ib:1}
W.ar.prototype={$iar:1}
W.dB.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.dC.prototype={
gl:function(a){return a.length}}
W.dE.prototype={
gl:function(a){return a.length}}
W.as.prototype={$ias:1}
W.hy.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.ba.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.bb.prototype={
gcK:function(a){var s=a.data
s.toString
return s},
$ibb:1}
W.bB.prototype={$ibB:1}
W.bf.prototype={$ibf:1}
W.hJ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.i_.prototype={
gl:function(a){return a.length}}
W.dW.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gX:function(a){var s=[]
this.E(a,new W.i0(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dX.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gX:function(a){var s=[]
this.E(a,new W.i1(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.i1.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.au.prototype={$iau:1}
W.dY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.a2.prototype={$ia2:1}
W.W.prototype={
gat:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jV("No elements"))
if(r>1)throw H.c(P.jV("More than one element"))
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
return new W.ce(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.r.prototype={
fS:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
fW:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lJ(s,b,a)}catch(q){H.aF(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dB(a):s},
eW:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cA.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.aw.prototype={
gl:function(a){return a.length},
$iaw:1}
W.eb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.eg.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gX:function(a){var s=[]
this.E(a,new W.ig(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.ei.prototype={
gl:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.el.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.ay.prototype={$iay:1}
W.em.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.az.prototype={
gl:function(a){return a.length},
$iaz:1}
W.eq.prototype={
h:function(a,b){return a.getItem(H.jp(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gX:function(a){var s=[]
this.E(a,new W.ip(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iQ:1}
W.ip.prototype={
$2:function(a,b){return this.a.push(a)},
$S:36}
W.ad.prototype={$iad:1}
W.cJ.prototype={
a3:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bj(a,b,c,d)
s=W.m0("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.W(r).a0(0,new W.W(s))
return r}}
W.eu.prototype={
a3:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bj(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.W(C.v.a3(r,b,c,d))
r=new W.W(r.gat(r))
new W.W(s).a0(0,new W.W(r.gat(r)))
return s}}
W.ev.prototype={
a3:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bj(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.W(C.v.a3(r,b,c,d))
new W.W(s).a0(0,new W.W(r.gat(r)))
return s}}
W.bM.prototype={$ibM:1}
W.aj.prototype={$iaj:1}
W.a4.prototype={$ia4:1}
W.ex.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.ey.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.iy.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aA.prototype={$iaA:1}
W.bo.prototype={$ibo:1}
W.eC.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.iD.prototype={
gl:function(a){return a.length}}
W.aC.prototype={}
W.iQ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eV.prototype={
gl:function(a){return a.length}}
W.aS.prototype={
gfp:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.z("deltaY is not supported"))},
gfo:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.z("deltaX is not supported"))},
$iaS:1}
W.bQ.prototype={
eX:function(a,b){var s=a.requestAnimationFrame(H.bX(b,1))
s.toString
return s},
e3:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bR.prototype={$ibR:1}
W.f1.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
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
if(t.J.b(b)){s=a.left
s.toString
r=J.aX(b)
if(s===r.gd3(b)){s=a.top
s.toString
if(s===r.gdm(b)){s=a.width
s.toString
if(s===r.gaH(b)){s=a.height
s.toString
r=s===r.gaE(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gK:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gK(p)
s=a.top
s.toString
s=C.d.gK(s)
r=a.width
r.toString
r=C.d.gK(r)
q=a.height
q.toString
return W.kW(p,s,r,C.d.gK(q))},
gcn:function(a){return a.height},
gaE:function(a){var s=a.height
s.toString
return s},
gcA:function(a){return a.width},
gaH:function(a){var s=a.width
s.toString
return s}}
W.ff.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$ix:1,
$ih:1,
$im:1}
W.eZ.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.gX(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
b.$2(o,H.jp(q.getAttribute(o)))}},
gX:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.f7.prototype={
h:function(a,b){return this.a.getAttribute(H.jp(b))},
gl:function(a){return this.gX(this).length}}
W.jN.prototype={}
W.fa.prototype={}
W.j7.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.k0.prototype={}
W.bS.prototype={
dI:function(a){var s
if($.fg.a===0){for(s=0;s<262;++s)$.fg.m(0,C.O[s],W.o1())
for(s=0;s<12;++s)$.fg.m(0,C.i[s],W.o2())}},
az:function(a){return $.lG().v(0,W.cc(a))},
ae:function(a,b,c){var s=$.fg.h(0,W.cc(a)+"::"+b)
if(s==null)s=$.fg.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iav:1}
W.H.prototype={
gM:function(a){return new W.ce(a,this.gl(a))}}
W.cB.prototype={
az:function(a){return C.a.cE(this.a,new W.i5(a))},
ae:function(a,b,c){return C.a.cE(this.a,new W.i4(a,b,c))},
$iav:1}
W.i5.prototype={
$1:function(a){return a.az(this.a)},
$S:15}
W.i4.prototype={
$1:function(a){return a.ae(this.a,this.b,this.c)},
$S:15}
W.cY.prototype={
dN:function(a,b,c,d){var s,r,q
this.a.a0(0,c)
s=b.bf(0,new W.jf())
r=b.bf(0,new W.jg())
this.b.a0(0,s)
q=this.c
q.a0(0,C.Q)
q.a0(0,r)},
az:function(a){return this.a.v(0,W.cc(a))},
ae:function(a,b,c){var s=this,r=W.cc(a),q=s.c
if(q.v(0,r+"::"+b))return s.d.fc(c)
else if(q.v(0,"*::"+b))return s.d.fc(c)
else{q=s.b
if(q.v(0,r+"::"+b))return!0
else if(q.v(0,"*::"+b))return!0
else if(q.v(0,r+"::*"))return!0
else if(q.v(0,"*::*"))return!0}return!1},
$iav:1}
W.jf.prototype={
$1:function(a){return!C.a.v(C.i,a)},
$S:16}
W.jg.prototype={
$1:function(a){return C.a.v(C.i,a)},
$S:16}
W.fH.prototype={
ae:function(a,b,c){if(this.dE(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.v(0,b)
return!1}}
W.jh.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:26}
W.fG.prototype={
az:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.cc(a)==="foreignObject")return!1
if(s)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.b.bi(b,"on"))return!1
return this.az(a)},
$iav:1}
W.ce.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lI(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.T(this).c.a(this.d)}}
W.je.prototype={}
W.fQ.prototype={
c4:function(a){var s,r=new W.jl(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
aQ:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.km(a)
else b.removeChild(a).toString},
f0:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.lM(a)
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
o=p}l=o}catch(n){H.aF(n)}r="element unprintable"
try{r=J.dk(a)}catch(n){H.aF(n)}try{q=W.cc(a)
this.f_(a,b,l,r,q,k,j)}catch(n){if(H.aF(n) instanceof P.af)throw n
else{this.aQ(a,b)
p=window
p.toString
p="Removing corrupted element "+H.u(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
f_:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aQ(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.az(a)){m.aQ(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.u(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.ae(a,"is",g)){m.aQ(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.gX(f).slice(0)
for(p=f.gX(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.lQ(o)
H.jp(o)
if(!r.ae(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.u(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.d.b(a)){s=a.content
s.toString
m.c4(s)}}}
W.jl.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.f0(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.aQ(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.jV("Corrupt HTML")
throw H.c(n)}}catch(p){H.aF(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:22}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.ft.prototype={}
W.fu.prototype={}
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
P.d5.prototype={$ibb:1,
gcK:function(a){return this.a}}
P.jq.prototype={
$1:function(a){this.a.push(P.l8(a))},
$S:30}
P.jx.prototype={
$2:function(a,b){this.a[a]=P.l8(b)},
$S:31}
P.dD.prototype={
gaO:function(){return new H.bh(new H.br(this.b,new P.hu()),new P.hv())},
E:function(a,b){C.a.E(P.hI(this.gaO(),!1),b)},
m:function(a,b,c){var s=this.gaO()
J.lP(s.b.$1(J.h1(s.a,b)),c)},
p:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.b2(this.gaO().a)},
h:function(a,b){var s=this.gaO()
return s.b.$1(J.h1(s.a,b))},
gM:function(a){var s=P.hI(this.gaO(),!1)
return new J.a6(s,s.length)}}
P.hu.prototype={
$1:function(a){return t.h.b(a)},
$S:14}
P.hv.prototype={
$1:function(a){return t.h.a(a)},
$S:34}
P.bg.prototype={$ibg:1}
P.dQ.prototype={
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bj.prototype={$ibj:1}
P.e5.prototype={
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.i9.prototype={
gl:function(a){return a.length}}
P.bJ.prototype={$ibJ:1}
P.et.prototype={
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gcJ:function(a){return new P.dD(a,new W.W(a))},
a3:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.kV(null))
o.push(W.l_())
o.push(new W.fG())
c=new W.fQ(new W.cB(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.k.fm(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.W(q)
p=r.gat(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ik:1}
P.bp.prototype={$ibp:1}
P.eD.prototype={
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
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fj.prototype={}
P.fk.prototype={}
P.fr.prototype={}
P.fs.prototype={}
P.fD.prototype={}
P.fE.prototype={}
P.fM.prototype={}
P.fN.prototype={}
P.h7.prototype={
gl:function(a){return a.length}}
P.dp.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gX:function(a){var s=[]
this.E(a,new P.h8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
P.h8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
P.dq.prototype={
gl:function(a){return a.length}}
P.aH.prototype={}
P.e6.prototype={
gl:function(a){return a.length}}
P.f_.prototype={}
P.bI.prototype={
h0:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.nT(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jJ("Incorrect number or type of arguments"))},
$ibI:1}
P.en.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=P.aW(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fz.prototype={}
P.fA.prototype={}
K.aG.prototype={
ap:function(a,b){return!0},
i:function(a){return"all"}}
K.dG.prototype={
ap:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].ap(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a0.prototype={
ap:function(a,b){return!this.dA(0,b)},
i:function(a){return"!["+this.bk(0)+"]"}}
K.ia.prototype={
ap:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.jT(this.a),r=H.jT(this.b)
return s+".."+r}}
K.q.prototype={
n:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.e("May not create a Set with zero characters."))
s=new H.P(t.V)
for(r=new H.aL(a,a.gl(a)),q=H.T(r).c;r.t();)s.m(0,q.a(r.d),!0)
p=P.hI(new H.aK(s),!0)
C.a.dz(p)
this.a=p},
ap:function(a,b){return C.a.v(this.a,b)},
i:function(a){return P.jW(this.a)}}
L.eo.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iE(this.a.k(0,b),[])
s.push(p)
return p},
fu:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.ap(0,a))return p}return null},
i:function(a){return this.b},
cw:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.v(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aK(s.c)
s=J.al(s==null?[]:s)
for(;s.t();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.v(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.n)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bk(0))}return l.charCodeAt(0)==0?l:l}}
L.eA.prototype={
i:function(a){var s=H.kj(this.b,"\n","\\n"),r=H.kj(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eB.prototype={
ar:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.n)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.iA.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eo(this,b,[])
s.m(0,b,r)}return r},
J:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eB(a,P.N(s,s))
r.m(0,a,q)}return q},
c1:function(a){return this.h6(a)},
h6:function(a){var s=this
return P.nh(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$c1(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.T(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.a.bY(a1,0)
else{if(!r.t()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=c==null
f=g?null:c.fu(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.jW(a0)
throw H.c(P.e("Untokenizable string [state: "+H.u(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.f(P.z("removeRange"))
P.jU(0,i,a0.length)
a0.splice(0,i-0)
C.a.a0(a1,a0)
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
if(g!=null){e=P.jW(b)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.eA(d==null?g.b:d,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.v(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mG()
case 1:return P.mH(o)}}},t.s)},
i:function(a){var s,r,q=new P.aP(""),p=this.d
if(p!=null)q.a=""+(p.cw()+"\n")
for(p=this.a,p=p.gh8(p),p=new H.cq(J.al(p.a),p.b),s=H.T(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.u(r==null?null:r.cw())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iE.prototype={
i:function(a){return this.b.b+": "+this.bk(0)}}
O.by.prototype={
c5:function(a,b,c){this.b=b
this.c=a},
bg:function(a,b){return this.c5(a,null,b)},
eI:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
e6:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a6(s,s.length)},
D:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
p:function(a,b){var s,r
if(this.eI([b])){s=this.a
r=s.length
s.push(b)
this.e6(r,[b])}},
$ih:1}
O.cv.prototype={
gl:function(a){return this.a.length},
gw:function(){var s=this.b
return s==null?this.b=D.a9():s},
au:function(){var s=this.b
return s==null?null:s.O(null)},
gT:function(a){var s=this.a
if(s.length>0)return C.a.gba(s)
else return V.cw()},
dg:function(a){this.a.push(a)
this.au()},
bX:function(){var s=this.a
if(s.length>0){s.pop()
this.au()}}}
E.h9.prototype={}
E.bz.prototype={
sc6:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().I(0,s.gda())
if(b!=null)b.gw().p(0,s.gda())
s.aq(new D.F("shape",r,b))}},
saX:function(a){var s,r,q=this
if(!J.L(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gw().I(0,q.gd8())
if(a!=null)a.gw().p(0,q.gd8())
r=q.r
q.aq(new D.F("mover",s,r))}},
be:function(a,b){var s,r,q,p,o,n,m=this,l=m.r
if(l==null)s=null
else{r=l.r
q=b.e
if(r<q){l.r=q
r=l.y
if(r!=null)++r.d
l.sdn(l.a+l.d*b.y)
l.sde(0,l.b+l.e*b.y)
l.sdj(l.c+l.f*b.y)
r=l.c
p=Math.cos(r)
o=Math.sin(r)
r=V.aM(p,-o,0,0,o,p,0,0,0,0,1,0,0,0,0,1)
q=l.b
p=Math.cos(q)
o=Math.sin(q)
r=r.Z(0,V.aM(p,0,-o,0,0,1,0,0,o,0,p,0,0,0,0,1))
q=l.a
p=Math.cos(q)
o=Math.sin(q)
l.x=r.Z(0,V.aM(1,0,0,0,0,p,-o,0,0,o,p,0,0,0,0,1))
r=l.y
if(r!=null)r.ag(0)}s=l.x}if(!J.L(s,m.x)){n=m.x
m.x=s
m.aq(new D.F("matrix",n,s))}for(l=m.y.a,l=new J.a6(l,l.length),r=H.T(l).c;l.t();)r.a(l.d).be(0,b)},
aG:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gT(q))
else o.push(p.Z(0,q.gT(q)))
q.au()
a.dh(r.f)
s=C.a.gba(a.dy)
if(r.d!=null)if(s!=null)s.fV(a,r)
for(p=r.y.a,p=new J.a6(p,p.length),o=H.T(p).c;p.t();)o.a(p.d).aG(a)
a.df()
q.bX()},
aq:function(a){var s=this.z
return s==null?null:s.O(a)},
V:function(){return this.aq(null)},
dc:function(a){this.e=null
this.aq(a)},
fK:function(){return this.dc(null)},
d9:function(a){return this.aq(a)},
fJ:function(){return this.d9(null)},
d7:function(a){return this.aq(a)},
fG:function(){return this.d7(null)},
fF:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gd6(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bA()
n=o.a;(n==null?o.a=[]:n).push(r)}this.V()},
fI:function(a,b){var s,r
for(s=b.gM(b),r=this.gd6();s.t();)s.gC(s).gw().I(0,r)
this.V()},
i:function(a){return"Unnamed entity"}}
E.bx.prototype={
i:function(a){return this.b}}
E.bG.prototype={
i:function(a){return this.b}}
E.f8.prototype={}
E.ib.prototype={
dH:function(a,b){var s=this
s.cy.gw().p(0,new E.ic(s))
s.db.gw().p(0,new E.id(s))
s.dx.gw().p(0,new E.ie(s))},
gfR:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gT(q).Z(0,s.gT(s))
q=s}return q},
dh:function(a){var s=this.dy
return s.push(a==null?C.a.gba(s):a)},
df:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.ic.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:6}
E.id.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:6}
E.ie.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:6}
E.ez.prototype={
cc:function(a){this.di()},
cb:function(){return this.cc(null)},
gfz:function(){var s,r=this,q=Date.now(),p=C.c.W(P.ks(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Z(q,!1)
return s/p},
cs:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bR(r*o)
r=s.clientHeight
r.toString
p=C.d.bR(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kL(C.h,this.gfX())}},
di:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.e3(s)
r=W.ld(new E.ix(this),t.H)
r.toString
C.x.eX(s,r)}},
fU:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cs()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=P.ks(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.au()
p=q.db
C.a.sl(p.a,0)
p.au()
p=q.dx
C.a.sl(p.a,0)
p.au()
p=q.dy
C.a.sl(p,0)
p.push(null)
m.aG(q)}q=n.Q
if(q!=null)q.O(null)}catch(o){s=H.aF(o)
r=H.kd(o)
P.ki("Error: "+H.u(s))
P.ki("Stack: "+H.u(r))
throw H.c(s)}}}
E.ix.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fU()}},
$S:23}
Z.eW.prototype={}
Z.c2.prototype={
bC:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aF(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.u(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.j2.prototype={}
Z.c3.prototype={
aD:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bC:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].bC(a)}},
h7:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aG:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cE(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.j(m,", ")+"\nAttrs:   "+C.a.j(o,", ")}}
Z.cg.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cE(this.c)+"'")+"]"}}
Z.aR.prototype={
gc7:function(a){var s=this.a,r=(s&$.b0().a)!==0?3:0
if((s&$.b_().a)!==0)r+=3
if((s&$.aZ().a)!==0)r+=3
if((s&$.b1().a)!==0)r+=2
if((s&$.bu().a)!==0)r+=3
if((s&$.di().a)!==0)r+=3
if((s&$.dj().a)!==0)r+=4
if((s&$.c0().a)!==0)++r
return(s&$.aY().a)!==0?r+4:r},
fd:function(a){var s,r=$.b0(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.di()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aY()
if((q&r.a)!==0)if(s===a)return r
return $.lF()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.b0().a)!==0)s.push("Pos")
if((r&$.b_().a)!==0)s.push("Norm")
if((r&$.aZ().a)!==0)s.push("Binm")
if((r&$.b1().a)!==0)s.push("Txt2D")
if((r&$.bu().a)!==0)s.push("TxtCube")
if((r&$.di().a)!==0)s.push("Clr3")
if((r&$.dj().a)!==0)s.push("Clr4")
if((r&$.c0().a)!==0)s.push("Weight")
if((r&$.aY().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.j(s,"|")}}
D.hb.prototype={}
D.bA.prototype={
p:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
I:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.v(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.I(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.v(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.I(p,b)
s=p===!0||s}return s},
O:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.a_():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.E(P.hI(p,!0),new D.hr(s))
r=q.b
if(r!=null){q.b=[]
C.a.E(r,new D.hs(s))}return!0},
fs:function(){return this.O(null)},
ag:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.O(s)}}}}
D.hr.prototype={
$1:function(a){a.$1(this.a)},
$S:17}
D.hs.prototype={
$1:function(a){a.$1(this.a)},
$S:17}
D.a_.prototype={}
D.bc.prototype={}
D.bd.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.u(this.d)+" => "+H.u(this.e)}}
X.c4.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c4))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dO.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dO))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hE.prototype={}
X.hK.prototype={
bW:function(a,b){this.r=a.a
return!1},
aZ:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
aY:function(a,b){return!1},
fO:function(a){return!1},
ex:function(a,b,c){return}}
X.bE.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bE))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.j(s,"+")}}
X.i2.prototype={
bW:function(a,b){this.f=a.a
return!1},
aZ:function(a,b){this.f=(this.f&~a.a)>>>0
return!1},
aY:function(a,b){return!1},
fP:function(a,b){return!1}}
X.iC.prototype={
fN:function(a){return!1},
fL:function(a){return!1},
fM:function(a){return!1}}
X.eU.prototype={
gb9:function(a){var s=this.b
return s==null?this.b=new X.hE(P.cm(t.S)):s},
gaF:function(){var s,r=this.c
if(r==null){r=$.bk
if(r==null){r=$.bk=new V.ab(0,0)
s=r}else s=r
r=this.c=new X.i2(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gao:function(){var s=this.d
if(s==null){s=$.bk
if(s==null)s=$.bk=new V.ab(0,0)
s=this.d=new X.hK(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gc2:function(){var s,r=this.e
if(r==null){r=$.bk
if(r==null){r=$.bk=new V.ab(0,0)
s=r}else s=r
r=this.e=new X.iC(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
ck:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dO(p,new X.bE(s,r,q))},
ay:function(a){var s
this.gb9(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
bz:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gb9(this)
a.altKey
a.shiftKey},
an:function(a){var s,r,q,p
if(a==null){s=$.bk
return s==null?$.bk=new V.ab(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.ab(r-p,q-s)},
aP:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.bO(r,s)},
bu:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.aa(n)
m=o.pageY
m.toString
C.d.aa(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.aa(l)
l=o.pageY
l.toString
l=C.d.aa(l)
k=j.top
k.toString
s.push(new V.ab(n-m,l-k))}return s},
ak:function(a){var s,r,q,p
if(a==null)return new X.c4(0,new X.bE(!1,!1,!1))
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
return new X.c4(s,new X.bE(r,q,p))},
br:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eq:function(a){return this.f=!0},
ee:function(a){return this.f=!1},
ek:function(a){if(this.f&&this.br(a))a.preventDefault()},
ev:function(a){var s,r=this
if(!r.f)return
s=r.ck(a)
r.gb9(r).d.p(0,s.a)},
es:function(a){var s,r=this
if(!r.f)return
s=r.ck(a)
r.gb9(r).d.I(0,s.a)},
ez:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.ay(a)
if(p.x){s=p.ak(a)
r=p.aP(a)
if(p.gao().bW(s,r))a.preventDefault()
return}s=p.ak(a)
q=p.an(a)
if(p.gaF().bW(s,q))a.preventDefault()},
eD:function(a){var s,r,q,p=this
p.ay(a)
s=p.ak(a)
if(p.x){r=p.aP(a)
if(p.gao().aZ(s,r))a.preventDefault()
return}q=p.an(a)
if(p.gaF().aZ(s,q))a.preventDefault()},
eo:function(a){var s,r,q,p=this
if(!p.br(a)){p.ay(a)
s=p.ak(a)
if(p.x){r=p.aP(a)
if(p.gao().aZ(s,r))a.preventDefault()
return}q=p.an(a)
if(p.gaF().aZ(s,q))a.preventDefault()}},
eB:function(a){var s,r,q,p=this
p.ay(a)
s=p.ak(a)
if(p.x){r=p.aP(a)
if(p.gao().aY(s,r))a.preventDefault()
return}q=p.an(a)
if(p.gaF().aY(s,q))a.preventDefault()},
em:function(a){var s,r,q,p=this
if(!p.br(a)){p.ay(a)
s=p.ak(a)
if(p.x){r=p.aP(a)
if(p.gao().aY(s,r))a.preventDefault()
return}q=p.an(a)
if(p.gaF().aY(s,q))a.preventDefault()}},
eF:function(a){var s,r,q,p=this
p.ay(a)
s=p.Q
r=new V.bO(C.w.gfo(a)*s,C.w.gfp(a)*s)
if(p.x){if(p.gao().fO(r))a.preventDefault()
return}q=p.an(a)
if(p.gaF().fP(r,q))a.preventDefault()},
eH:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ak(q.y)
r=q.an(q.y)
q.gao().ex(s,r,p)}},
eS:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bz(a)
s=r.bu(a)
if(r.gc2().fN(s))a.preventDefault()},
eO:function(a){var s
this.bz(a)
s=this.bu(a)
if(this.gc2().fL(s))a.preventDefault()},
eQ:function(a){var s
this.bz(a)
s=this.bu(a)
if(this.gc2().fM(s))a.preventDefault()}}
D.c7.prototype={
ai:function(a){var s=this.r
return s==null?null:s.O(a)},
dL:function(){return this.ai(null)},
$ick:1}
D.cl.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.a9():s},
gd4:function(){var s=this.z
return s==null?this.z=D.a9():s},
ai:function(a){var s=this.y
return s==null?null:s.O(a)},
cp:function(a){var s=this.z
return s==null?null:s.O(a)},
ew:function(){return this.cp(null)},
eK:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)if(this.dJ(a[r]))return!1
return!0},
e8:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gco(),q=this.f,p=0;p<b.length;b.length===s||(0,H.n)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bA()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ai(new D.bc())},
eM:function(a,b){var s,r,q,p
for(s=b.gM(b),r=this.gco(),q=this.e;s.t();){p=s.gC(s)
C.a.I(q,p)
p.gw().I(0,r)}this.ai(new D.bd())},
dJ:function(a){var s=C.a.v(this.f,a)
return s}}
V.O.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.b7.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b7))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.hp.prototype={}
V.cu.prototype={
Y:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cu))return!1
s=b.a
$.C().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bZ([o.a,o.d,o.r],3,0),m=V.bZ([o.b,o.e,o.x],3,0),l=V.bZ([o.c,o.f,o.y],3,0),k=n.length
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
V.bD.prototype={
Y:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
d0:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.C().toString
if(Math.abs(b3-0)<1e-9)return V.cw()
s=1/b3
r=-l
q=-a2
return V.aM((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
Z:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aM(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bd:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b0:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a3(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bD))return!1
s=b.a
$.C().toString
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
i:function(a){return this.u()},
B:function(a){var s,r,q,p,o,n=this,m=V.bZ([n.a,n.e,n.y,n.cx],3,0),l=V.bZ([n.b,n.f,n.z,n.cy],3,0),k=V.bZ([n.c,n.r,n.Q,n.db],3,0),j=V.bZ([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
u:function(){return this.B("")}}
V.ab.prototype={
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"},
u:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.a3.prototype={
aL:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"},
u:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.ec.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ec))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.ee.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ee))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.bO.prototype={
bS:function(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bO))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.B.prototype={
bS:function(a){return Math.sqrt(this.aU(this))},
aU:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bT:function(a,b){return new V.B(V.kf(this.a,a.a,b),V.kf(this.b,a.b,b),V.kf(this.c,a.c,b))},
L:function(){var s=this,r=Math.sqrt(s.aU(s))
if(r===1)return s
return s.dq(0,r)},
aS:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
R:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
aI:function(a){return new V.B(-this.a,-this.b,-this.c)},
dq:function(a,b){$.C().toString
if(Math.abs(b-0)<1e-9)return V.cL()
return new V.B(this.a/b,this.b/b,this.c/b)},
d2:function(){$.C().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"},
u:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
U.du.prototype={
gw:function(){var s=this.b
return s==null?this.b=D.a9():s},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.du))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.i3.prototype={}
U.ef.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.a9():s},
ax:function(a){var s=this.y
return s==null?null:s.O(a)},
sdn:function(a){var s
a=V.kk(a,0,6.283185307179586)
s=this.a
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.ax(new D.F("yaw",s,a))}},
sde:function(a,b){var s
b=V.kk(b,0,6.283185307179586)
s=this.b
$.C().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.ax(new D.F("pitch",s,b))}},
sdj:function(a){var s
a=V.kk(a,0,6.283185307179586)
s=this.c
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.ax(new D.F("roll",s,a))}},
q:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.ef))return!1
s=q.a
r=b.a
$.C().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+"], ["+V.v(s.d,3,0)+", "+V.v(s.e,3,0)+", "+V.v(s.f,3,0)+"]"}}
M.dA.prototype={
aj:function(a){var s=this.y
return s==null?null:s.O(a)},
dM:function(){return this.aj(null)},
eg:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gac(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bA()
n=o.a;(n==null?o.a=[]:n).push(r)}this.aj(new D.bc())},
ei:function(a,b){var s,r
for(s=b.gM(b),r=this.gac();s.t();)s.gC(s).gw().I(0,r)
this.aj(new D.bd())},
sdl:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gw().I(0,r.gac())
s=r.d
r.d=a
if(a!=null)a.gw().p(0,r.gac())
r.aj(new D.F("technique",s,r.d))}},
gw:function(){var s=this.y
return s==null?this.y=D.a9():s},
aG:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dh(d.d)
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
n=C.d.aa(o.a*q)
m=C.d.aa(o.b*p)
l=C.d.aa(o.c*q)
a.c=l
o=C.d.aa(o.d*p)
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
g=V.aM(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dg(g)
f=$.ls()
e=s.b
if(e!=null)f=e.a.Z(0,f)
a.db.dg(f)}s=d.d
if(s!=null)s.be(0,a)
for(s=d.e.a,r=new J.a6(s,s.length),o=H.T(r).c;r.t();)o.a(r.d).be(0,a)
for(s=new J.a6(s,s.length),r=H.T(s).c;s.t();)r.a(s.d).aG(a)
if(d.b!=null){a.cy.bX()
a.db.bX()}a.df()}}
A.h5.prototype={}
A.h6.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
ft:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fq:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a7.prototype={
gab:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.a7))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dU.prototype={
dG:function(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9=null,d0=u.C,d1="Required uniform value, ",d2=", was not defined or used in shader.",d3=c8.x,d4=new P.aP(""),d5=d3.fr
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
A.nw(d3,d4)
A.ny(d3,d4)
A.nx(d3,d4)
A.nA(d3,d4)
A.nB(d3,d4)
A.nz(d3,d4)
A.nC(d3,d4)
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
m=A.nv(d3)
c8.c=n
c8.d=m
l=c8.cl(n,35633)
k=c8.cl(c8.d,35632)
s=c8.a
q=s.createProgram()
q.toString
c8.e=q
s.attachShader(c8.gal(),l)
s.attachShader(c8.gal(),k)
s.linkProgram(c8.gal())
if(!H.l7(s.getProgramParameter(c8.gal(),35714))){j=s.getProgramInfoLog(c8.gal())
if(j==null)j="undefined log error"
s.deleteProgram(c8.e)
H.f(P.e("Failed to link shader: "+j))}c8.f5()
c8.f7()
c8.y=c8.ga1(c8).h(0,"posAttr")
c8.Q=c8.ga1(c8).h(0,"normAttr")
c8.z=c8.ga1(c8).h(0,"binmAttr")
c8.ch=c8.ga1(c8).h(0,"txt2DAttr")
c8.cx=c8.ga1(c8).h(0,"txtCubeAttr")
c8.cy=c8.ga1(c8).h(0,"bendAttr")
if(d3.dy)c8.fy=t.j.a(c8.gG().F(0,"invViewMat"))
if(d5)c8.db=t.j.a(c8.gG().F(0,"objMat"))
if(r)c8.dx=t.j.a(c8.gG().F(0,"viewObjMat"))
d5=t.j
c8.fr=d5.a(c8.gG().F(0,"projViewObjMat"))
if(d3.go)c8.dy=d5.a(c8.gG().F(0,"viewMat"))
if(d3.x1)c8.go=t.Q.a(c8.gG().F(0,"txt2DMat"))
if(d3.x2)c8.id=d5.a(c8.gG().F(0,"txtCubeMat"))
if(d3.y1)c8.k1=d5.a(c8.gG().F(0,"colorMat"))
c8.k3=[]
s=d3.aB
if(s>0){c8.k2=t.v.a(c8.gG().F(0,"bendMatCount"))
for(i=0;i<s;++i){r=c8.k3
h=c8.r
if(h==null)H.f(P.e(d0))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.f(P.e(d1+q+d2))
r.push(d5.a(g))}}d5=d3.a
if(d5.a)c8.k4=t.g.a(c8.gG().F(0,"emissionClr"))
if(d5.b)c8.r1=t.G.a(c8.gG().F(0,"emissionTxt"))
d5=d3.b
if(d5.a)c8.rx=t.g.a(c8.gG().F(0,"ambientClr"))
if(d5.b)c8.ry=t.G.a(c8.gG().F(0,"ambientTxt"))
d5=d3.c
if(d5.a)c8.x2=t.g.a(c8.gG().F(0,"diffuseClr"))
if(d5.b)c8.y1=t.G.a(c8.gG().F(0,"diffuseTxt"))
d5=d3.d
if(d5.a)c8.aB=t.g.a(c8.gG().F(0,"invDiffuseClr"))
if(d5.b)c8.aC=t.G.a(c8.gG().F(0,"invDiffuseTxt"))
d5=d3.e
s=d5.a
if(s||d5.b||!1){c8.cQ=t.n.a(c8.gG().F(0,"shininess"))
if(s)c8.cO=t.g.a(c8.gG().F(0,"specularClr"))
if(d5.b)c8.cP=t.G.a(c8.gG().F(0,"specularTxt"))}if(d3.f.b)c8.cR=t.G.a(c8.gG().F(0,"bumpTxt"))
if(d3.db){c8.cS=t.a.a(c8.gG().F(0,"envSampler"))
d5=d3.r
if(d5.a)c8.cT=t.g.a(c8.gG().F(0,"reflectClr"))
if(d5.b)c8.cU=t.G.a(c8.gG().F(0,"reflectTxt"))
d5=d3.x
s=d5.a
if(s||d5.b||!1){c8.cV=t.n.a(c8.gG().F(0,"refraction"))
if(s)c8.cW=t.g.a(c8.gG().F(0,"refractClr"))
if(d5.b)c8.cX=t.G.a(c8.gG().F(0,"refractTxt"))}}d5=d3.y
if(d5.a)c8.cY=t.n.a(c8.gG().F(0,"alpha"))
if(d5.b)c8.cZ=t.G.a(c8.gG().F(0,"alphaTxt"))
if(d3.k1){d5=d3.z
s=d5.length
if(s!==0){r=t.S
c8.bJ=P.N(r,t.W)
c8.bK=P.N(r,t.q)
for(r=t.v,q=t.g,p=t.n,f=0;f<d5.length;d5.length===s||(0,H.n)(d5),++f){e=d5[f]
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
a8=a7}b.push(new A.eI(g,a1,a2,a8,a7,a6))}c8.bK.m(0,d,b)
o=c8.bJ
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.Q
s=d5.length
if(s!==0){r=t.S
c8.bL=P.N(r,t.W)
c8.bM=P.N(r,t.L)
for(r=t.v,q=t.g,p=t.G,f=0;f<d5.length;d5.length===s||(0,H.n)(d5),++f){e=d5[f]
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
b.push(new A.eJ(b1,b0,a9,g,a1,b2))}c8.bM.m(0,d,b)
o=c8.bL
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.ch
s=d5.length
if(s!==0){r=t.S
c8.bN=P.N(r,t.W)
c8.bO=P.N(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,a=t.F,a0=t.n,f=0;f<d5.length;d5.length===s||(0,H.n)(d5),++f){e=d5[f]
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
a8=a7}b.push(new A.eM(g,a1,b9,a2,b2,c0,c1,a8,a7,a6))}c8.bO.m(0,d,b)
b3=c8.bN
h=c8.r
if(h==null)H.f(P.e(d0))
b4=c+"Count"
g=h.h(0,b4)
if(g==null)H.f(P.e(d1+b4+d2))
b3.m(0,d,r.a(g))}}d3=d3.cx
d5=d3.length
if(d5!==0){s=t.S
c8.bP=P.N(s,t.W)
c8.bQ=P.N(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,f=0;f<d3.length;d3.length===d5||(0,H.n)(d3),++f){e=d3[f]
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
b.push(new A.eP(g,a1,a2,a3,b1,b0,c5,c4,c1,c7,c6,a8,a7,a6,b2,c0))}c8.bQ.m(0,d,b)
a=c8.bP
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
a.m(0,d,s.a(g))}}}},
a9:function(a,b){if(b!=null&&b.d)if(a!=null)a.dv(b)},
f1:function(a,b){}}
A.b3.prototype={
i:function(a){return"barLight"+this.a}}
A.b8.prototype={
i:function(a){return"dirLight"+this.a}}
A.bl.prototype={
i:function(a){return"pointLight"+this.a}}
A.bn.prototype={
i:function(a){return"spotLight"+this.a}}
A.hO.prototype={
i:function(a){return this.aC}}
A.eI.prototype={}
A.eJ.prototype={}
A.eM.prototype={}
A.eP.prototype={}
A.cG.prototype={
ga1:function(a){var s=this.f
if(s==null)throw H.c(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gG:function(){var s=this.r
if(s==null)throw H.c(P.e(u.C))
return s},
gal:function(){var s=this.e
if(s==null)throw H.c(P.e(u.F))
return s},
cl:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.l7(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.e('Error compiling shader "'+H.u(q)+'": '+s))}return q},
f5:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.jo(l.getProgramParameter(o.gal(),35721))
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
f7:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.jo(j.getProgramParameter(m.gal(),35718))
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
k.push(m.fn(o,n,q,p))}m.r=new A.iO(k)},
aw:function(a,b,c){var s=this.a
if(a===1)return new A.cK(s,b,c)
else return A.jY(s,this.e,b,a,c)},
e0:function(a,b,c){var s=this.a
if(a===1)return new A.eN(s,b,c)
else return A.jY(s,this.e,b,a,c)},
e1:function(a,b,c){var s=this.a
if(a===1)return new A.eO(s,b,c)
else return A.jY(s,this.e,b,a,c)},
b6:function(a,b){return new P.fb(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fn:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aw(b,c,d)
case 5121:return s.aw(b,c,d)
case 5122:return s.aw(b,c,d)
case 5123:return s.aw(b,c,d)
case 5124:return s.aw(b,c,d)
case 5125:return s.aw(b,c,d)
case 5126:return new A.eF(s.a,c,d)
case 35664:return new A.iK(s.a,c,d)
case 35665:return new A.eG(s.a,c,d)
case 35666:return new A.eH(s.a,c,d)
case 35667:return new A.iL(s.a,c,d)
case 35668:return new A.iM(s.a,c,d)
case 35669:return new A.iN(s.a,c,d)
case 35674:return new A.iP(s.a,c,d)
case 35675:return new A.eK(s.a,c,d)
case 35676:return new A.eL(s.a,c,d)
case 35678:return s.e0(b,c,d)
case 35680:return s.e1(b,c,d)
case 35670:throw H.c(s.b6("BOOL",c))
case 35671:throw H.c(s.b6("BOOL_VEC2",c))
case 35672:throw H.c(s.b6("BOOL_VEC3",c))
case 35673:throw H.c(s.b6("BOOL_VEC4",c))
default:throw H.c(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iI.prototype={}
A.iO.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
F:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cK.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iL.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iM.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iN.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iJ.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eF.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iK.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eG.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eH.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iP.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eK.prototype={
a8:function(a){var s=new Float32Array(H.da(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eL.prototype={
a8:function(a){var s=new Float32Array(H.da(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eN.prototype={
dv:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.eO.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jn.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bT(q.b,b).bT(q.d.bT(q.c,b),c)
q=new V.a3(p.a,p.b,p.c)
if(!J.L(a.f,q)){a.f=q
q=a.a
if(q!=null)q.V()}a.sh1(p.L())
q=1-b
s=1-c
s=new V.ec(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.L(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.V()}},
$S:32}
F.aq.prototype={
aM:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.f2(a)
s.f3(b)
s.f4(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gN().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.V()}},
aT:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.I(r.gN().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.V()}}s.bv()
s.bw()
s.eV()},
f2:function(a){this.a=a
a.gN().b.push(this)},
f3:function(a){this.b=a
a.gN().c.push(this)},
f4:function(a){this.c=a
a.gN().d.push(this)},
bv:function(){var s=this.a
if(s!=null)C.a.I(s.gN().b,this)
this.a=null},
bw:function(){var s=this.b
if(s!=null)C.a.I(s.gN().c,this)
this.b=null},
eV:function(){var s=this.c
if(s!=null)C.a.I(s.gN().d,this)
this.c=null},
dV:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cL()
if(n!=null)q=q.R(0,n)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.d2())return p
return q.L()},
dX:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aL(0,n)
q=new V.B(o.a,o.b,o.c).L()
o=r.aL(0,n)
return q.aS(new V.B(o.a,o.b,o.c).L()).L()},
bF:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.dV()
if(s==null){s=q.dX()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.V()}return!0},
dU:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cL()
if(n!=null)q=q.R(0,n)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.d2())return p
return q.L()},
dW:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.aL(0,e)
o=new V.B(j.a,j.b,j.c).L()
if(q.a-r.a<0)o=o.aI(0)}else{n=(j-s.b)/p
j=b.aL(0,e)
j=new V.a3(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aL(0,h)
o=new V.B(j.a,j.b,j.c).L()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aI(0)}m=l.d
if(m!=null){m=m.L()
o=m.aS(o).L().aS(m).L()}return o},
bD:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.dU()
if(s==null){s=q.dW()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.V()}return!0},
gfh:function(a){var s=this
if(J.L(s.a,s.b))return!0
if(J.L(s.b,s.c))return!0
if(J.L(s.c,s.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gA(p)
p=a+C.b.a6(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gA(o)
p=p+C.b.a6(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gA(o)
s=p+C.b.a6(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.B("")}}
F.ht.prototype={}
F.io.prototype={
aW:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.c
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.c
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.a
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gA(q)
s=c.c
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.b
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else return!1}}}}
F.hF.prototype={
aT:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.a.I(r.ga4(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.V()}}s.bv()
s.bw()},
bv:function(){var s=this.a
if(s!=null)C.a.I(s.ga4(s).b,this)
this.a=null},
bw:function(){var s=this.b
if(s!=null)C.a.I(s.ga4(s).c,this)
this.b=null},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gA(s)
s=a+C.b.a6(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gA(r)
return s+C.b.a6(C.c.i(r==null?-1:r),0)},
u:function(){return this.B("")}}
F.hG.prototype={}
F.iH.prototype={
aW:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.b
return q==(s==null?r:s.gA(s))}else{q=b.a
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.a
return q==(s==null?r:s.gA(s))}else return!1}}}
F.i8.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gA(s)
return a+C.b.a6(C.c.i(s),0)},
u:function(){return this.B("")}}
F.ih.prototype={
gU:function(){var s=this.a
return s==null?this.a=new F.y(this,[]):s},
gb_:function(a){var s=this.b
return s==null?this.b=new F.bm(this,[]):s},
ga4:function(a){var s=this.c
return s==null?this.c=new F.bK(this,[]):s},
gN:function(){var s=this.d
return s==null?this.d=new F.cH(this,[]):s},
gw:function(){var s=this.e
return s==null?this.e=D.a9():s},
bV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gU().P()
s=d.gU().c.length
for(b=a.gU().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.y(d,[])
o.p(0,p.fl())}d.gU().P()
for(b=a.gb_(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.y(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bm(d,[]):m).a
m=o.a;(m==null?o.a=new F.y(o,[]):m).p(0,j)
o=new F.i8()
if(j.a==null)H.f(P.e("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.cN([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bm(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.O(c)}}}for(b=a.ga4(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.y(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.y(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.bK(d,[]):m).a
m=o.a;(m==null?o.a=new F.y(o,[]):m).p(0,h)
m=o.a;(m==null?o.a=new F.y(o,[]):m).p(0,g)
o=new F.hF()
m=h.a
if(m==null)H.f(P.e("May not create a line with a start vertex which is not attached to a shape."))
if(m!=g.a)H.f(P.e("May not create a line with vertices attached to different shapes."))
o.a=h
m=h.c;(m==null?h.c=new F.aQ([],[]):m).b.push(o)
o.b=g
m=g.c;(m==null?g.c=new F.aQ([],[]):m).c.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.c;(l==null?m.c=new F.bK(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.O(c)}}}for(b=a.gN().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.y(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.y(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.y(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cH(d,[]):m).a
m=o.a;(m==null?o.a=new F.y(o,[]):m).p(0,h)
m=o.a;(m==null?o.a=new F.y(o,[]):m).p(0,g)
m=o.a;(m==null?o.a=new F.y(o,[]):m).p(0,e)
new F.aq().aM(h,g,e)}b=d.e
if(b!=null)b.ag(0)},
aA:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gN().aA()||!1
if(!r.gU().aA())s=!1
q=r.e
if(q!=null)q.ag(0)
return s},
fD:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gU().c.slice(0)
for(;s.length!==0;){r=C.a.gfv(s)
C.a.bY(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.aW(0,r,o)){q.push(o)
C.a.bY(s,p)}}if(q.length>1)b.bV(q)}n.gU().P()
n.ga4(n).bZ()
n.gN().bZ()
n.gb_(n).fT()
n.ga4(n).c_(new F.iH())
n.gN().c_(new F.io())
m=n.e
if(m!=null)m.ag(0)},
ff:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=34962,d={},c=g.gU().c.length,b=a1.a,a=(b&$.b0().a)!==0?1:0
if((b&$.b_().a)!==0)++a
if((b&$.aZ().a)!==0)++a
if((b&$.b1().a)!==0)++a
if((b&$.bu().a)!==0)++a
if((b&$.di().a)!==0)++a
if((b&$.dj().a)!==0)++a
if((b&$.c0().a)!==0)++a
if((b&$.aY().a)!==0)++a
s=a1.gc7(a1)
r=P.dS(c*s,0,!1)
d.a=0
q=P.ma(a,new F.ii(d,g,a1,s*4,c,s,r))
b=a0.a
p=b.createBuffer()
p.toString
b.bindBuffer(e,p)
b.bufferData(e,new Float32Array(H.da(r)),35044)
b.bindBuffer(e,f)
o=new Z.c3(new Z.eW(e,p),[],q,a1)
if(g.gb_(g).b.length!==0){n=[]
m=0
while(!0){p=g.b
if(p==null){p=g.b=new F.bm(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
p=p[m].a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}p=p.e}n.push(p==null?0:p);++m}j=Z.k_(b,34963,n)
o.b.push(new Z.cg(0,n.length,j))}if(g.ga4(g).b.length!==0){n=[]
m=0
while(!0){p=g.c
if(p==null){p=g.c=new F.bK(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
i=p[m]
p=i.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}p=p.e}n.push(p==null?0:p)
p=i.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}p=p.e}n.push(p==null?0:p);++m}j=Z.k_(b,34963,n)
o.b.push(new Z.cg(1,n.length,j))}if(g.gN().b.length!==0){n=[]
m=0
while(!0){p=g.d
if(p==null){p=g.d=new F.cH(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
h=p[m]
p=h.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}p=p.e}n.push(p==null?0:p)
p=h.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}p=p.e}n.push(p==null?0:p)
p=h.c
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.y(l,[]):k).P()}p=p.e}n.push(p==null?0:p);++m}j=Z.k_(b,34963,n)
o.b.push(new Z.cg(4,n.length,j))}return o},
i:function(a){var s=this,r="   ",q=[]
if(s.gU().c.length!==0){q.push("Vertices:")
q.push(s.gU().B(r))}if(s.gb_(s).b.length!==0){q.push("Points:")
q.push(s.gb_(s).B(r))}if(s.ga4(s).b.length!==0){q.push("Lines:")
q.push(s.ga4(s).B(r))}if(s.gN().b.length!==0){q.push("Faces:")
q.push(s.gN().B(r))}return C.a.j(q,"\n")},
V:function(){var s=this.e
return s==null?null:s.O(null)}}
F.ii.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fd(a),f=g.gc7(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.y(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].fC(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c2(g,f,d*4,h.d)},
$S:33}
F.cH.prototype={
fb:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.y(s,[]):l).p(0,k)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,h)
f=new F.aq()
f.aM(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,k)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,h)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,g)
f=new F.aq()
f.aM(k,h,g)
e.push(f)}else{(l==null?s.a=new F.y(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,h)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,g)
f=new F.aq()
f.aM(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,j)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,g)
l=s.a;(l==null?s.a=new F.y(s,[]):l).p(0,k)
f=new F.aq()
f.aM(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gl:function(a){return this.b.length},
c_:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gU().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.y(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bP([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bP([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.aW(0,n,(q==null?p.d=new F.bP([],[],[]):q).h(0,l))){n.aT()
break}}}}},
bZ:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gfh(q))q.aT()}},
aA:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bF())q=!1
return q},
bE:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bD())q=!1
return q},
i:function(a){return this.u()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(a))
return C.a.j(p,"\n")},
u:function(){return this.B("")}}
F.bK.prototype={
gl:function(a){return this.b.length},
c_:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gU().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.y(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.aQ([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.aQ([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.aW(0,n,(q==null?p.c=new F.aQ([],[]):q).h(0,l))){n.aT()
break}}}}},
bZ:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.L(q.a,q.b))q.aT()}},
i:function(a){return this.u()},
B:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].B(a+(""+s+". ")))}return C.a.j(r,"\n")},
u:function(){return this.B("")}}
F.bm.prototype={
gl:function(a){return this.b.length},
fT:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.cN([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.a.I((o==null?p.b=new F.bm(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.O(null)}}}p=q.a
if(p!=null){o=p.b
C.a.I((o==null?p.b=new F.cN([]):o).b,q)}q.a=null}}},
i:function(a){return this.u()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(a))
return C.a.j(p,"\n")},
u:function(){return this.B("")}}
F.cM.prototype={
bH:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kR(s.cx,p,m,r,q,o,n,a,l)},
fl:function(){return this.bH(null)},
ga4:function(a){var s=this.c
return s==null?this.c=new F.aQ([],[]):s},
gN:function(){var s=this.d
return s==null?this.d=new F.bP([],[],[]):s},
gA:function(a){var s=this.a
if(s!=null)s.gU().P()
return this.e},
sh1:function(a){var s
if(!J.L(this.z,a)){this.z=a
s=this.a
if(s!=null)s.V()}},
fC:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.b0())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.b_())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.q(0,$.aZ())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.q(0,$.b1())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.q(0,$.bu())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.di())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.q(0,$.dj())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.q(0,$.c0()))return[o.ch]
else if(a.q(0,$.aY())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bF:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cL()
p.gN().E(0,new F.j1(o))
p.r=o.a.L()
if(r){s.V()
o=s.e
if(o!=null)o.ag(0)}return!0},
bD:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cL()
p.gN().E(0,new F.j0(o))
p.x=o.a.L()
if(r){s.V()
o=s.e
if(o!=null)o.ag(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.a6(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.u()
n.push(s==null?o:s)
n.push(V.v(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.a.j(n,", ")
return a+"{"+r+"}"},
u:function(){return this.B("")}}
F.j1.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.R(0,r)}},
$S:7}
F.j0.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.R(0,r)}},
$S:7}
F.y.prototype={
P:function(){var s,r,q
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
s.V()
return!0},
cC:function(a,b){var s=null,r=F.kR(s,s,a,s,s,b,s,s,0)
this.p(0,r)
return r},
gl:function(a){return this.c.length},
aA:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bF()
return!0},
bE:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bD()
return!0},
fg:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.L()
if(!J.L(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.O(null)}}}}}return!0},
i:function(a){return this.u()},
B:function(a){var s,r,q,p
this.P()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].B(a))
return C.a.j(s,"\n")},
u:function(){return this.B("")}}
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
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.iW(s,b))
C.a.E(s.d,new F.iX(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
return C.a.j(p,"\n")}}
F.iW.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)},
$S:7}
F.iX.prototype={
$1:function(a){var s=this.a
if(!J.L(a.a,s)&&!J.L(a.b,s))this.b.$1(a)},
$S:7}
F.aQ.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
return C.a.j(p,"\n")}}
F.iZ.prototype={}
F.iY.prototype={
aW:function(a,b,c){return J.L(b.f,c.f)}}
F.j_.prototype={}
F.i6.prototype={
bV:function(a){var s,r,q,p,o,n=V.cL()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.B(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.L()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){p=a[r]
q=n.L()
if(!J.L(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.O(null)}}}return null}}
F.cN.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].B(""))
return C.a.j(p,"\n")}}
O.dT.prototype={
gw:function(){var s=this.fr
return s==null?this.fr=D.a9():s},
S:function(a){var s=this.fr
return s==null?null:s.O(a)},
bl:function(){return this.S(null)},
cr:function(a){this.a=null
this.S(a)},
eY:function(){return this.cr(null)},
ea:function(a,b){return this.S(new D.bc())},
ec:function(a,b){return this.S(new D.bd())},
gd5:function(){var s=this,r=s.dx
if(r==null){r=new D.cl([],[],[],[],[])
r.c5(r.ge7(),r.geJ(),r.geL())
r.gw().p(0,s.gcq())
r.gd4().p(0,s.gaN())
s.dx=r}return r},
gcL:function(){var s=this.f
return s==null?this.f=O.dV(this,"emission"):s},
gbB:function(){var s=this.r
return s==null?this.r=O.dV(this,"ambient"):s},
gbI:function(){var s=this.x
return s==null?this.x=O.dV(this,"diffuse"):s},
gbh:function(){var s=this.z
return s==null?this.z=new O.hR(new V.O(0,0,0),this,"specular",new A.a7(!1,!1,!1)):s},
cj:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.P(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){q=a2[r]
p=q.gaf()
o=a1.h(0,q.gaf())
a1.m(0,p,o==null?1:o)}n=[]
a1.E(0,new O.hS(b,n))
C.a.aK(n,new O.hT())
m=new H.P(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=[]
m.E(0,new O.hU(b,l))
C.a.aK(l,new O.hV())
k=new H.P(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){q=a2[r]
p=q.gaf()
o=k.h(0,q.gaf())
k.m(0,p,o==null?1:o)}j=[]
k.E(0,new O.hW(b,j))
C.a.aK(j,new O.hX())
i=new H.P(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.n)(a0),++r){q=a0[r]
s=q.gaf()
p=i.h(0,q.gaf())
i.m(0,s,p==null?1:p)}h=[]
i.E(0,new O.hY(b,h))
C.a.aK(h,new O.hZ())
a0=C.c.W(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hP(new V.b7(0,0,0,0))
a2=b.gcL().c
s=b.gbB().c
p=b.gbI().c
o=b.y
o=(o==null?b.y=O.dV(b,"invDiffuse"):o).c
g=b.gbh().c
f=b.Q
f=(f==null?b.Q=new O.hN(b,"bump",new A.a7(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.dV(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hQ(new V.O(0,0,0),b,"refract",new A.a7(!1,!1,!1)):d).c
c=b.db
return A.mc(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hM(b,"alpha",new A.a7(!1,!1,!1)):c).c,n,l,j,h)},
a_:function(a,b){if(b!=null)if(!C.a.v(a,b)){b.a=a.length
a.push(b)}},
be:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.al(m==null?[]:m)
s=H.T(m).c
for(;m.t();){r=s.a(m.d)
q=$.iV
if(q==null)q=$.iV=new V.B(0,0,1)
r.c=q
p=$.iU
r.d=p==null?$.iU=new V.B(0,1,0):p
p=$.iT
r.e=p==null?$.iT=new V.B(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bd(q).L()
r.d=n.bd(r.d).L()
r.e=n.bd(r.e).L()}}},
fV:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.cj()
r=s.aC
q=b0.fr
a9=q.h(0,r)
if(a9==null){p=b0.a
o=t.S
n=t.W
a9=new A.dU(s,[],P.N(o,n),P.N(o,t.q),P.N(o,n),P.N(o,t.L),P.N(o,n),P.N(o,t.U),P.N(o,n),P.N(o,t.R),p,r)
a9.dG(s,p)
if(r.length===0)H.f(P.e("May not cache a shader with no name."))
if(q.fj(0,r))H.f(P.e('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,a9)}a9=a7.a=a9
b1.e=null}m=a9.x
l=m.cN
s=b1.e
if(!(s instanceof Z.c3))s=b1.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b1.d
if(r!=null)r.aA()}r=m.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gN().bE()
q.gU().bE()
q=q.e
if(q!=null)q.ag(0)}}q=m.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gU().fg()
p=p.e
if(p!=null)p.ag(0)}}p=b1.d
k=p==null?a8:p.ff(new Z.j2(b0.a),l)
if(k==null)return
p=k.aD($.b0())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=k.aD($.b_())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=k.aD($.aZ())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aD($.b1())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=k.aD($.bu())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aD($.aY())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=k}j=[]
s=b0.a
s.useProgram(a9.e)
a9.ga1(a9).ft()
if(m.fr){r=b0.dx
r=r.gT(r)
q=a9.db
if(q!=null)q.a8(r.Y(0,!0))}if(m.fx){r=b0.cx
if(r==null){r=b0.db
q=b0.dx
q=b0.cx=r.gT(r).Z(0,q.gT(q))
r=q}q=a9.dx
if(q!=null)q.a8(r.Y(0,!0))}r=b0.ch
if(r==null){r=b0.dx
r=b0.ch=b0.gfR().Z(0,r.gT(r))}q=a9.fr
if(q!=null)q.a8(r.Y(0,!0))
if(m.go){r=b0.db
r=r.gT(r)
q=a9.dy
if(q!=null)q.a8(r.Y(0,!0))}if(m.x1){r=$.ky
if(r==null){r=new V.cu(1,0,0,0,1,0,0,0,1)
$.ky=r}q=a9.go
if(q!=null)q.a8(r.Y(0,!0))}if(m.x2){r=V.cw()
q=a9.id
if(q!=null)q.a8(r.Y(0,!0))}if(m.y1){r=V.cw()
q=a9.k1
if(q!=null)q.a8(r.Y(0,!0))}if(m.aB>0){r=a7.e.a
i=r.length
q=a9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=a9.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.da(q.Y(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a7.f
q=q==null?a8:q.f
if(q==null)q=new V.O(0,0,0)
p=a9.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.f
a7.a_(j,r==null?a8:r.d)
r=a7.f
r=r==null?a8:r.d
a9.a9(a9.r1,r)}if(m.k1){r=m.b
if(r.a){q=a7.r
q=q==null?a8:q.f
if(q==null)q=new V.O(0,0,0)
p=a9.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.r
a7.a_(j,r==null?a8:r.d)
r=a7.r
r=r==null?a8:r.d
a9.a9(a9.ry,r)}r=m.c
if(r.a){q=a7.x
q=q==null?a8:q.f
if(q==null)q=new V.O(0,0,0)
p=a9.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.x
a7.a_(j,r==null?a8:r.d)
r=a7.x
r=r==null?a8:r.d
a9.a9(a9.y1,r)}r=m.d
if(r.a){q=a7.y
q=q==null?a8:q.f
if(q==null)q=new V.O(0,0,0)
p=a9.aB
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.y
a7.a_(j,r==null?a8:r.d)
r=a7.y
r=r==null?a8:r.d
a9.a9(a9.aC,r)}r=m.e
q=r.a
if(q||r.b||!1){p=a7.z
p=p==null?a8:p.ch
if(p==null)p=100
o=a9.cQ
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.z
q=q==null?a8:q.f
if(q==null)q=new V.O(1,1,1)
p=a9.cO
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.z
a7.a_(j,r==null?a8:r.d)
r=a7.z
r=r==null?a8:r.d
a9.a9(a9.cP,r)}r=m.z
if(r.length>0){f=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.e
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
c=d.gaf()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
o=a9.bK.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.gha()
n=$.ax
o=o.b0(n==null?$.ax=new V.a3(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghf()
n=$.ax
o=o.b0(n==null?$.ax=new V.a3(0,0,0):n)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaR(d)
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
if(d.gcM()){o=d.gcF()
n=a.e
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcG()
n=a.f
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcH()
n=a.r
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=a9.bJ.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b0.db
a0=q.gT(q)
a1=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.f
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
b=a1.h(0,0)
if(b==null)b=0
a1.m(0,0,b+1)
o=a9.bM.h(0,0)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=a0.bd(d.c).L()
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.b
n=a.f
n.a.uniform3f(n.d,o.a,o.b,o.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=a1.h(0,p)
if(i==null)i=0
p=a9.bL.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b0.db
a0=q.gT(q)
a2=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.r
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
c=d.gaf()
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
o=a9.bO.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
a3=a0.Z(0,d.gT(d))
o=d.gT(d)
n=$.ax
o=o.b0(n==null?$.ax=new V.a3(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=$.ax
o=a3.b0(o==null?$.ax=new V.a3(0,0,0):o)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaR(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gas()
o=a3.d0(0)
n=a.d
if(n!=null){g=new Float32Array(H.da(new V.cu(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).Y(0,!0)))
n.a.uniformMatrix3fv(n.d,!1,g)}d.gas()
o=d.gas()
if(!C.a.v(j,o)){o.a=j.length
j.push(o)}o=d.gas()
n=o.gaV(o)
if(n){n=a.f
if(n!=null){a4=o.gaV(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gA(o))}}d.gaJ()
o=d.gdw()
n=a.x
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaJ()
if(!C.a.v(j,o)){o.a=j.length
j.push(o)}o=d.gaJ()
n=o.gaV(o)
if(n){n=a.r
if(n!=null){a4=o.gaV(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gA(o))}}if(d.gcM()){o=d.gcF()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcG()
n=a.z
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcH()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=a9.bN.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b0.db
a0=q.gT(q)
a6=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.x
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
c=d.gaf()
b=a6.h(0,c)
if(b==null)b=0
a6.m(0,c,b+1)
o=a9.bQ.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.gfQ(d)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghd(d).L()
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=a0.b0(d.gfQ(d))
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaR(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gas()
o=d.ghr()
n=a.f
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gho(d)
n=a.r
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghp()
n=a.x
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghq()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
d.gas()
o=d.gas()
if(!C.a.v(j,o)){o.a=j.length
j.push(o)}o=d.gas()
n=o.gaV(o)
if(n){n=a.dx
if(n!=null){a4=o.d
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.a)}}d.gaJ()
o=d.gdw()
n=a.z
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaJ()
if(!C.a.v(j,o)){o.a=j.length
j.push(o)}o=d.gaJ()
n=o.gaV(o)
if(n){n=a.dy
if(n!=null){a4=o.d
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.a)}}if(d.ghe()){o=d.ghc()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghb()
n=a.ch
if(n!=null)n.a.uniform1f(n.d,o)}if(d.gcM()){o=d.gcF()
n=a.cx
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcG()
n=a.cy
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcH()
n=a.db
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=a6.h(0,p)
if(i==null)i=0
p=a9.bP.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.b){r=a7.Q
a7.a_(j,r==null?a8:r.d)
r=a7.Q
r=r==null?a8:r.d
a9.a9(a9.cR,r)}if(m.dy){r=b0.Q
if(r==null){r=b0.db
r=b0.Q=r.gT(r).d0(0)}q=a9.fy
if(q!=null)q.a8(r.Y(0,!0))}if(m.db){a7.a_(j,a8)
a9.f1(a9.cS,a8)
r=m.r
if(r.a){q=a7.cx
q=q==null?a8:q.f
if(q==null)q=new V.O(1,1,1)
p=a9.cT
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.cx
a7.a_(j,r==null?a8:r.d)
r=a7.cx
r=r==null?a8:r.d
a9.a9(a9.cU,r)}r=m.x
q=r.a
if(q||r.b||!1){p=a7.cy
p=p==null?a8:p.ch
if(p==null)p=0
o=a9.cV
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.cy
q=q==null?a8:q.f
if(q==null)q=new V.O(1,1,1)
p=a9.cW
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a7.cy
a7.a_(j,r==null?a8:r.d)
r=a7.cy
r=r==null?a8:r.d
a9.a9(a9.cX,r)}}r=m.y
q=r.a
p=!q
if(!p||r.b||!1){if(q){q=a7.db
q=q==null?a8:q.f
if(q==null)q=1
o=a9.cY
if(o!=null)o.a.uniform1f(o.d,q)}if(r.b){q=a7.db
a7.a_(j,q==null?a8:q.d)
q=a7.db
q=q==null?a8:q.d
a9.a9(a9.cZ,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(!q.c&&q.d){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(3553,q.b)}}q=t.D.a(b1.e)
q.bC(b0)
q.aG(b0)
q.h7(b0)
if(!p||r.b||!1)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,a8)}}s.useProgram(a8)
a9.ga1(a9).fq()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cj().aC}}
O.hS.prototype={
$2:function(a,b){return this.b.push(new A.b3(a,C.c.W(b+3,4)*4))},
$S:8}
O.hT.prototype={
$2:function(a,b){return C.c.a2(a.a,b.a)},
$S:37}
O.hU.prototype={
$2:function(a,b){return this.b.push(new A.b8(a,C.c.W(b+3,4)*4))},
$S:8}
O.hV.prototype={
$2:function(a,b){return C.c.a2(a.a,b.a)},
$S:38}
O.hW.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.c.W(b+3,4)*4))},
$S:8}
O.hX.prototype={
$2:function(a,b){return C.c.a2(a.a,b.a)},
$S:39}
O.hY.prototype={
$2:function(a,b){return this.b.push(new A.bn(a,C.c.W(b+3,4)*4))},
$S:8}
O.hZ.prototype={
$2:function(a,b){return C.c.a2(a.a,b.a)},
$S:40}
O.hM.prototype={
am:function(){var s,r=this
r.c8()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.S(new D.F(r.b,s,1))}}}
O.cs.prototype={
S:function(a){return this.a.S(a)},
bl:function(){return this.S(null)},
am:function(){},
bx:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.am()
s=q.a
s.a=null
s.S(null)}},
sbc:function(a){var s,r=this,q=r.c
if(!q.b)r.bx(new A.a7(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gw().I(0,r.gaN())
s=r.d
r.d=a
a.gw().p(0,r.gaN())
r.a.S(new D.F(r.b+".texture2D",s,r.d))}}}
O.hN.prototype={}
O.ct.prototype={
ct:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.S(new D.F(r.b+".color",s,a))}},
am:function(){this.c8()
this.ct(new V.O(1,1,1))},
saR:function(a,b){this.bx(new A.a7(!0,this.c.b,!1))
this.ct(b)}}
O.hP.prototype={}
O.hQ.prototype={
am:function(){var s,r=this
r.c9()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.S(new D.F(r.b+".refraction",s,1))}}}
O.hR.prototype={
cu:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.S(new D.F(s.b+".shininess",r,a))}},
am:function(){this.c9()
this.cu(100)}}
O.ir.prototype={}
T.is.prototype={}
T.it.prototype={}
T.iu.prototype={
gw:function(){var s=this.y
return s==null?this.y=D.a9():s}}
T.iv.prototype={
bU:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.iu(o)
W.S(s,"load",new T.iw(this,r,s,!1,o,!1,!1),!1)
return r},
eZ:function(a,b,c){var s,r,q,p,o,n
b=V.kh(b)
s=a.width
r=V.kh(s==null?512:s)
s=a.height
q=V.kh(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jK()
p.width=r
p.height=q
o=t.b.a(C.p.ds(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.nU(o.getImageData(0,0,s,n==null?512:n))}}}
T.iw.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.eZ(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.U.h0(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.fs()}++s.e},
$S:2}
X.hx.prototype={
gw:function(){var s=this.x
return s==null?this.x=D.a9():s}}
X.e8.prototype={
gw:function(){var s=this.f
return s==null?this.f=D.a9():s},
av:function(a){var s=this.f
return s==null?null:s.O(a)},
dQ:function(){return this.av(null)},
saX:function(a){var s,r,q=this
if(!J.L(q.b,a)){s=q.b
if(s!=null)s.gw().I(0,q.gcd())
r=q.b
q.b=a
if(a!=null)a.gw().p(0,q.gcd())
q.av(new D.F("mover",r,q.b))}}}
X.iq.prototype={}
V.an.prototype={
b2:function(a){this.b=new P.hz(C.K)
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
n=l.b.e_(p,0,p.length)
m=n==null?p:n
m=H.kj(m," ","&nbsp;")
C.I.du(o,m)
m=o.style
m.color=b
C.a.gba(l.d).push(o)}},
dd:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.b7()
if(r!=null)for(q=new H.o(s),q=new P.bs(r.c1(new H.aL(q,q.gl(q))).a());q.t();)p.bb(q.gC(q))}}
V.jH.prototype={
$1:function(a){var s=C.d.c0(this.a.gfz(),2)
if(s!=="0.00")P.ki(s+" fps")},
$S:41}
V.dx.prototype={
bb:function(a){var s=this
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
b7:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iB()
a2.d=a2.k(0,q)
s=a2.k(0,q).j(0,p)
r=new K.q([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=a2.k(0,p).j(0,p)
r=new K.q([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
a2.k(0,q).j(0,o).a.push(K.J("0","9"))
a2.k(0,o).j(0,o).a.push(K.J("0","9"))
s=a2.k(0,o).j(0,n)
r=new K.q([])
r.n(new H.o("."))
s.a.push(r)
a2.k(0,n).j(0,m).a.push(K.J("0","9"))
a2.k(0,m).j(0,m).a.push(K.J("0","9"))
r=a2.k(0,q).j(0,l)
s=new K.q([])
s.n(new H.o(k))
r.a.push(s)
s=a2.k(0,l).j(0,l)
r=new K.q([])
r.n(new H.o(k))
s.a.push(r)
r=a2.k(0,q).j(0,j)
s=new K.q([])
s.n(new H.o('"'))
r.a.push(s)
s=a2.k(0,j).j(0,i)
r=new K.q([])
r.n(new H.o('"'))
s.a.push(r)
r=a2.k(0,j).j(0,h)
s=new K.q([])
s.n(new H.o("\\"))
r.a.push(s)
s=a2.k(0,h).j(0,j)
r=new K.q([])
r.n(new H.o('"'))
s.a.push(r)
a2.k(0,j).j(0,j).a.push(new K.aG())
r=a2.k(0,q).j(0,g)
s=new K.q([])
s.n(new H.o("'"))
r.a.push(s)
s=a2.k(0,g).j(0,f)
r=new K.q([])
r.n(new H.o("'"))
s.a.push(r)
r=a2.k(0,g).j(0,e)
s=new K.q([])
s.n(new H.o("\\"))
r.a.push(s)
s=a2.k(0,e).j(0,g)
r=new K.q([])
r.n(new H.o("'"))
s.a.push(r)
a2.k(0,g).j(0,g).a.push(new K.aG())
r=a2.k(0,q).j(0,d)
s=new K.q([])
s.n(new H.o("/"))
r.a.push(s)
s=a2.k(0,d).j(0,c)
r=new K.q([])
r.n(new H.o("/"))
s.a.push(r)
r=a2.k(0,c).j(0,b)
s=new K.q([])
s.n(new H.o("\n"))
r.a.push(s)
s=[]
a2.k(0,c).j(0,c).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("\n"))
s.push(r)
r=a2.k(0,d).j(0,a)
s=new K.q([])
s.n(new H.o("*"))
r.a.push(s)
s=a2.k(0,a).j(0,a0)
r=new K.q([])
r.n(new H.o("*"))
s.a.push(r)
r=[]
a2.k(0,a0).j(0,a).a.push(new K.a0(r))
s=new K.q([])
s.n(new H.o("*"))
r.push(s)
s=a2.k(0,a0).j(0,b)
r=new K.q([])
r.n(new H.o("/"))
s.a.push(r)
r=a2.k(0,q).j(0,a1)
s=new K.q([])
s.n(new H.o(" \n\t"))
r.a.push(s)
s=a2.k(0,a1).j(0,a1)
r=new K.q([])
r.n(new H.o(" \n\t"))
s.a.push(r)
r=a2.k(0,o)
r.d=r.a.J("Num")
r=a2.k(0,m)
r.d=r.a.J("Num")
r=a2.k(0,l)
r.d=r.a.J("Symbol")
r=a2.k(0,i)
r.d=r.a.J("String")
r=a2.k(0,f)
r.d=r.a.J("String")
r=a2.k(0,b)
r.d=r.a.J(c)
r=a2.k(0,a1)
r.d=r.a.J(a1)
r=a2.k(0,p)
r=r.d=r.a.J(p)
r.ar(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.ar(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.ar(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dF.prototype={
bb:function(a){var s=this
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
b7:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iB()
d.d=d.k(0,q)
s=d.k(0,q).j(0,p)
r=new K.q([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=d.k(0,p).j(0,p)
r=new K.q([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
d.k(0,q).j(0,o).a.push(K.J("0","9"))
d.k(0,o).j(0,o).a.push(K.J("0","9"))
s=d.k(0,o).j(0,n)
r=new K.q([])
r.n(new H.o("."))
s.a.push(r)
d.k(0,n).j(0,m).a.push(K.J("0","9"))
d.k(0,m).j(0,m).a.push(K.J("0","9"))
r=d.k(0,q).j(0,l)
s=new K.q([])
s.n(new H.o(k))
r.a.push(s)
s=d.k(0,l).j(0,l)
r=new K.q([])
r.n(new H.o(k))
s.a.push(r)
r=d.k(0,q).j(0,j)
s=new K.q([])
s.n(new H.o("/"))
r.a.push(s)
s=d.k(0,j).j(0,i)
r=new K.q([])
r.n(new H.o("/"))
s.a.push(r)
d.k(0,j).j(0,l).a.push(new K.aG())
r=d.k(0,i).j(0,h)
s=new K.q([])
s.n(new H.o("\n"))
r.a.push(s)
s=[]
d.k(0,i).j(0,i).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("\n"))
s.push(r)
r=d.k(0,q).j(0,g)
s=new K.q([])
s.n(new H.o("#"))
r.a.push(s)
s=[]
d.k(0,g).j(0,g).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("\n"))
s.push(r)
r=d.k(0,g).j(0,f)
s=new K.q([])
s.n(new H.o("\n"))
r.a.push(s)
s=d.k(0,q).j(0,e)
r=new K.q([])
r.n(new H.o(" \n\t"))
s.a.push(r)
r=d.k(0,e).j(0,e)
s=new K.q([])
s.n(new H.o(" \n\t"))
r.a.push(s)
s=d.k(0,o)
s.d=s.a.J("Num")
s=d.k(0,m)
s.d=s.a.J("Num")
s=d.k(0,l)
s.d=s.a.J("Symbol")
s=d.k(0,h)
s.d=s.a.J(i)
s=d.k(0,f)
s.d=s.a.J(g)
s=d.k(0,e)
s.d=s.a.J(e)
s=d.k(0,p)
s=s.d=s.a.J(p)
s.ar(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.ar(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.ar(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dH.prototype={
bb:function(a){var s=this,r="#111"
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
b7:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iB()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=new K.q([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.k(0,p).j(0,p)
r=new K.q([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.k(0,p).j(0,o)
r=new K.q([])
r.n(new H.o("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=new K.q([])
r.n(new H.o("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=new K.q([])
s.n(new H.o("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=new K.q([])
r.n(new H.o('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=new K.q([])
s.n(new H.o('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=new K.q([])
r.n(new H.o("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=new K.q([])
s.n(new H.o('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.aG())
j.k(0,q).j(0,k).a.push(new K.aG())
s=[]
j.k(0,k).j(0,k).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o('</\\-!>=_"'))
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.k(0,n)
s.d=s.a.J("Symbol")
s=j.k(0,l)
s.d=s.a.J("String")
s=j.k(0,p)
r=s.a.J(p)
s.d=r
r.ar(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.k(0,o)
r.d=r.a.J(o)
r=j.k(0,k)
r.d=r.a.J(k)
return j}}
V.ea.prototype={
dd:function(a,b){this.d=[]
this.H(C.a.j(b,"\n"),"#111")},
bb:function(a){},
b7:function(){return null}}
V.ij.prototype={
cD:function(a){var s,r,q,p,o,n,m=this.f6(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.o(C.a.fB(a)),s=new P.bs(m.c1(new H.aL(s,s.gl(s))).a());s.t();){r=s.gC(s)
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
if(H.ln(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.l4(C.q,r,C.f,!1)
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
dr:function(a){var s,r,q,p=new V.dx("dart",[])
p.b2("dart")
s=new V.dF("glsl",[])
s.b2("glsl")
r=new V.dH("html",[])
r.b2("html")
q=C.a.fw([p,s,r],new V.im(a))
if(q!=null)return q
p=new V.ea("plain",[])
p.b2("plain")
return p},
cB:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.bi(q,"+")){b2[r]=C.b.ah(q,1)
a8.push(1)
s=!0}else if(C.b.bi(q,"-")){b2[r]=C.b.ah(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dr(b0)
p.dd(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.l4(C.q,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kn()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.n)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.n)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gM(q);a4.t();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
f6:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.iB()
h.d=h.k(0,q)
s=h.k(0,q).j(0,p)
r=new K.q([])
r.n(new H.o("*"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,p).j(0,p).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("*"))
s.push(r)
r=h.k(0,p).j(0,"BoldEnd")
s=new K.q([])
s.n(new H.o("*"))
r.a.push(s)
r.c=!0
r=h.k(0,q).j(0,o)
s=new K.q([])
s.n(new H.o("_"))
r.a.push(s)
r.c=!0
r=[]
h.k(0,o).j(0,o).a.push(new K.a0(r))
s=new K.q([])
s.n(new H.o("_"))
r.push(s)
s=h.k(0,o).j(0,n)
r=new K.q([])
r.n(new H.o("_"))
s.a.push(r)
s.c=!0
s=h.k(0,q).j(0,m)
r=new K.q([])
r.n(new H.o("`"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,m).j(0,m).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("`"))
s.push(r)
r=h.k(0,m).j(0,"CodeEnd")
s=new K.q([])
s.n(new H.o("`"))
r.a.push(s)
r.c=!0
r=h.k(0,q).j(0,l)
s=new K.q([])
s.n(new H.o("["))
r.a.push(s)
r.c=!0
r=h.k(0,l).j(0,k)
s=new K.q([])
s.n(new H.o("|"))
r.a.push(s)
s=h.k(0,l).j(0,j)
r=new K.q([])
r.n(new H.o("]"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,l).j(0,l).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("|]"))
s.push(r)
r=h.k(0,k).j(0,j)
s=new K.q([])
s.n(new H.o("]"))
r.a.push(s)
r.c=!0
r=[]
h.k(0,k).j(0,k).a.push(new K.a0(r))
s=new K.q([])
s.n(new H.o("|]"))
r.push(s)
h.k(0,q).j(0,i).a.push(new K.aG())
s=[]
h.k(0,i).j(0,i).a.push(new K.a0(s))
r=new K.q([])
r.n(new H.o("*_`["))
s.push(r)
r=h.k(0,"BoldEnd")
r.d=r.a.J(p)
r=h.k(0,n)
r.d=r.a.J(o)
r=h.k(0,"CodeEnd")
r.d=r.a.J(m)
r=h.k(0,j)
r.d=r.a.J("Link")
r=h.k(0,i)
r.d=r.a.J(i)
return this.b=h}}
V.il.prototype={
$1:function(a){P.kL(C.h,new V.ik(this.a))},
$S:2}
V.ik.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.aa(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.u(-0.01*s)+"px"
q.top=r},
$S:1}
V.im.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:42}
F.jF.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.cB("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.cB("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:6};(function aliases(){var s=J.a.prototype
s.dB=s.i
s=J.be.prototype
s.dD=s.i
s=P.h.prototype
s.dC=s.bf
s=W.A.prototype
s.bj=s.a3
s=W.cY.prototype
s.dE=s.ae
s=K.dG.prototype
s.dA=s.ap
s.bk=s.i
s=O.cs.prototype
s.c8=s.am
s=O.ct.prototype
s.c9=s.am})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"n9","m7",43)
r(P,"nO","mB",9)
r(P,"nP","mC",9)
r(P,"nQ","mD",9)
q(P,"lf","nJ",1)
r(W,"pl","hm",45)
p(W,"o1",4,null,["$4"],["mE"],19,0)
p(W,"o2",4,null,["$4"],["mF"],19,0)
var j
o(j=E.bz.prototype,"gda",0,0,null,["$1","$0"],["dc","fK"],0,0)
o(j,"gd8",0,0,null,["$1","$0"],["d9","fJ"],0,0)
o(j,"gd6",0,0,null,["$1","$0"],["d7","fG"],0,0)
n(j,"gfE","fF",5)
n(j,"gfH","fI",5)
o(j=E.ez.prototype,"gca",0,0,null,["$1","$0"],["cc","cb"],0,0)
m(j,"gfX","di",1)
l(j=X.eU.prototype,"gep","eq",2)
l(j,"ged","ee",2)
l(j,"gej","ek",3)
l(j,"geu","ev",18)
l(j,"ger","es",18)
l(j,"gey","ez",3)
l(j,"geC","eD",3)
l(j,"gen","eo",3)
l(j,"geA","eB",3)
l(j,"gel","em",3)
l(j,"geE","eF",27)
l(j,"geG","eH",2)
l(j,"geR","eS",11)
l(j,"geN","eO",11)
l(j,"geP","eQ",11)
o(D.c7.prototype,"gdK",0,0,null,["$1","$0"],["ai","dL"],0,0)
o(j=D.cl.prototype,"gco",0,0,null,["$1","$0"],["cp","ew"],0,0)
l(j,"geJ","eK",29)
n(j,"ge7","e8",12)
n(j,"geL","eM",12)
k(V.bO.prototype,"gl","bS",20)
k(V.B.prototype,"gl","bS",20)
o(j=M.dA.prototype,"gac",0,0,null,["$1","$0"],["aj","dM"],0,0)
n(j,"gef","eg",5)
n(j,"geh","ei",5)
o(j=O.dT.prototype,"gaN",0,0,null,["$1","$0"],["S","bl"],0,0)
o(j,"gcq",0,0,null,["$1","$0"],["cr","eY"],0,0)
n(j,"ge9","ea",21)
n(j,"geb","ec",21)
o(O.cs.prototype,"gaN",0,0,null,["$1","$0"],["S","bl"],0,0)
o(X.e8.prototype,"gcd",0,0,null,["$1","$0"],["av","dQ"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.jR,J.a,J.a6,P.G,P.cR,P.h,H.aL,P.dJ,H.cd,H.eS,H.iF,H.i7,H.fB,H.b6,P.R,H.hH,H.dR,H.hC,H.ac,H.fe,P.d3,P.bT,P.bs,P.eY,P.er,P.es,P.jm,P.d8,P.ja,P.cQ,P.D,P.ej,P.ds,P.hA,P.jk,P.Z,P.b9,P.e7,P.cI,P.fb,P.hw,P.aa,P.aP,W.hd,W.jN,W.k0,W.bS,W.H,W.cB,W.cY,W.fG,W.ce,W.je,W.fQ,P.d5,K.aG,K.dG,K.ia,K.q,L.eo,L.eA,L.eB,L.iA,O.by,O.cv,E.h9,E.bz,E.bx,E.bG,E.f8,E.ib,E.ez,Z.eW,Z.j2,Z.c3,Z.cg,Z.aR,D.hb,D.bA,D.a_,X.c4,X.dO,X.hE,X.hK,X.bE,X.i2,X.iC,X.eU,D.c7,V.O,V.b7,V.hp,V.cu,V.bD,V.ab,V.a3,V.ec,V.ee,V.bO,V.B,M.dA,A.h5,A.h6,A.a7,A.b3,A.b8,A.bl,A.bn,A.hO,A.eI,A.eJ,A.eM,A.eP,A.iI,A.iO,F.aq,F.ht,F.hF,F.hG,F.i8,F.ih,F.cH,F.bK,F.bm,F.cM,F.y,F.bP,F.aQ,F.iZ,F.j_,F.cN,O.ir,O.cs,O.hP,T.iv,X.iq,X.e8,V.an,V.ij])
q(J.a,[J.dK,J.cj,J.be,J.ah,J.bC,J.aJ,H.cy,W.b,W.h3,W.dr,W.c5,W.ap,W.E,W.f2,W.a8,W.hg,W.hh,W.f3,W.ca,W.f5,W.hi,W.i,W.fc,W.as,W.hy,W.fh,W.bb,W.hJ,W.i_,W.fl,W.fm,W.au,W.fn,W.fp,W.aw,W.ft,W.fv,W.ay,W.fw,W.az,W.fC,W.ad,W.fI,W.iy,W.aA,W.fK,W.iD,W.iQ,W.fR,W.fT,W.fV,W.fX,W.fZ,P.bg,P.fj,P.bj,P.fr,P.i9,P.fD,P.bp,P.fM,P.h7,P.f_,P.bI,P.fz])
q(J.be,[J.e9,J.bq,J.at])
r(J.dM,J.ah)
q(J.bC,[J.ci,J.dL])
q(P.G,[H.dP,P.eE,H.dN,H.eR,H.eh,H.f9,P.dn,P.e4,P.af,P.eT,P.eQ,P.bL,P.dt,P.dw])
r(P.cn,P.cR)
q(P.cn,[H.bN,W.f0,W.W,P.dD])
r(H.o,H.bN)
q(P.h,[H.j,H.bh,H.br,P.ch])
q(H.j,[H.co,H.aK])
r(H.cb,H.bh)
q(P.dJ,[H.cq,H.eX])
r(H.cr,H.co)
r(H.cC,P.eE)
q(H.b6,[H.ew,H.hD,H.jB,H.jC,H.jD,P.j4,P.j3,P.j5,P.j6,P.jj,P.ji,P.jv,P.jc,P.jd,P.hL,P.hj,P.hk,W.hl,W.i0,W.i1,W.ig,W.ip,W.j7,W.i5,W.i4,W.jf,W.jg,W.jh,W.jl,P.jq,P.jx,P.hu,P.hv,P.h8,E.ic,E.id,E.ie,E.ix,D.hr,D.hs,F.jn,F.ii,F.j1,F.j0,F.iW,F.iX,O.hS,O.hT,O.hU,O.hV,O.hW,O.hX,O.hY,O.hZ,T.iw,V.jH,V.il,V.ik,V.im,F.jF])
q(H.ew,[H.ep,H.bw])
r(P.cp,P.R)
q(P.cp,[H.P,W.eZ])
r(H.bF,H.cy)
q(H.bF,[H.cT,H.cV])
r(H.cU,H.cT)
r(H.bi,H.cU)
r(H.cW,H.cV)
r(H.cx,H.cW)
q(H.cx,[H.dZ,H.e_,H.e0,H.e1,H.e2,H.cz,H.e3])
r(H.d4,H.f9)
r(P.d0,P.ch)
r(P.jb,P.jm)
r(P.cX,P.d8)
r(P.cP,P.cX)
r(P.dv,P.es)
r(P.hn,P.ds)
q(P.dv,[P.hz,P.iS])
r(P.iR,P.hn)
q(P.af,[P.cF,P.dI])
q(W.b,[W.r,W.dC,W.ai,W.cZ,W.aj,W.a4,W.d1,W.eV,W.bQ,P.dq,P.aH])
q(W.r,[W.A,W.ag,W.bR])
q(W.A,[W.p,P.k])
q(W.p,[W.dl,W.dm,W.bv,W.b4,W.b5,W.c8,W.dE,W.bB,W.ei,W.cJ,W.eu,W.ev,W.bM])
r(W.hc,W.ap)
r(W.c6,W.f2)
q(W.a8,[W.he,W.hf])
r(W.f4,W.f3)
r(W.c9,W.f4)
r(W.f6,W.f5)
r(W.dz,W.f6)
r(W.ar,W.dr)
r(W.fd,W.fc)
r(W.dB,W.fd)
r(W.fi,W.fh)
r(W.ba,W.fi)
r(W.aC,W.i)
q(W.aC,[W.bf,W.a2,W.bo])
r(W.dW,W.fl)
r(W.dX,W.fm)
r(W.fo,W.fn)
r(W.dY,W.fo)
r(W.fq,W.fp)
r(W.cA,W.fq)
r(W.fu,W.ft)
r(W.eb,W.fu)
r(W.eg,W.fv)
r(W.d_,W.cZ)
r(W.el,W.d_)
r(W.fx,W.fw)
r(W.em,W.fx)
r(W.eq,W.fC)
r(W.fJ,W.fI)
r(W.ex,W.fJ)
r(W.d2,W.d1)
r(W.ey,W.d2)
r(W.fL,W.fK)
r(W.eC,W.fL)
r(W.aS,W.a2)
r(W.fS,W.fR)
r(W.f1,W.fS)
r(W.cO,W.ca)
r(W.fU,W.fT)
r(W.ff,W.fU)
r(W.fW,W.fV)
r(W.cS,W.fW)
r(W.fY,W.fX)
r(W.fy,W.fY)
r(W.h_,W.fZ)
r(W.fF,W.h_)
r(W.f7,W.eZ)
r(W.fa,P.er)
r(W.fH,W.cY)
r(P.fk,P.fj)
r(P.dQ,P.fk)
r(P.fs,P.fr)
r(P.e5,P.fs)
r(P.bJ,P.k)
r(P.fE,P.fD)
r(P.et,P.fE)
r(P.fN,P.fM)
r(P.eD,P.fN)
r(P.dp,P.f_)
r(P.e6,P.aH)
r(P.fA,P.fz)
r(P.en,P.fA)
q(K.dG,[K.a0,L.iE])
q(E.h9,[Z.c2,A.cG,T.is])
q(D.a_,[D.bc,D.bd,D.F])
r(D.cl,O.by)
r(U.i3,D.hb)
q(U.i3,[U.du,U.ef])
r(A.dU,A.cG)
q(A.iI,[A.cK,A.iL,A.iM,A.iN,A.iJ,A.eF,A.iK,A.eG,A.eH,A.iP,A.eK,A.eL,A.eN,A.eO])
r(F.io,F.ht)
r(F.iH,F.hG)
r(F.iY,F.iZ)
r(F.i6,F.j_)
r(O.dT,O.ir)
q(O.cs,[O.hM,O.hN,O.ct])
q(O.ct,[O.hQ,O.hR])
r(T.it,T.is)
r(T.iu,T.it)
r(X.hx,X.iq)
q(V.an,[V.dx,V.dF,V.dH,V.ea])
s(H.bN,H.eS)
s(H.cT,P.D)
s(H.cU,H.cd)
s(H.cV,P.D)
s(H.cW,H.cd)
s(P.cR,P.D)
s(P.d8,P.ej)
s(W.f2,W.hd)
s(W.f3,P.D)
s(W.f4,W.H)
s(W.f5,P.D)
s(W.f6,W.H)
s(W.fc,P.D)
s(W.fd,W.H)
s(W.fh,P.D)
s(W.fi,W.H)
s(W.fl,P.R)
s(W.fm,P.R)
s(W.fn,P.D)
s(W.fo,W.H)
s(W.fp,P.D)
s(W.fq,W.H)
s(W.ft,P.D)
s(W.fu,W.H)
s(W.fv,P.R)
s(W.cZ,P.D)
s(W.d_,W.H)
s(W.fw,P.D)
s(W.fx,W.H)
s(W.fC,P.R)
s(W.fI,P.D)
s(W.fJ,W.H)
s(W.d1,P.D)
s(W.d2,W.H)
s(W.fK,P.D)
s(W.fL,W.H)
s(W.fR,P.D)
s(W.fS,W.H)
s(W.fT,P.D)
s(W.fU,W.H)
s(W.fV,P.D)
s(W.fW,W.H)
s(W.fX,P.D)
s(W.fY,W.H)
s(W.fZ,P.D)
s(W.h_,W.H)
s(P.fj,P.D)
s(P.fk,W.H)
s(P.fr,P.D)
s(P.fs,W.H)
s(P.fD,P.D)
s(P.fE,W.H)
s(P.fM,P.D)
s(P.fN,W.H)
s(P.f_,P.R)
s(P.fz,P.D)
s(P.fA,W.H)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",U:"double",V:"num",w:"String",Y:"bool",aa:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([a_?])","~()","~(i)","~(a2)","~(w,@)","~(l,h<bz>)","~(a_)","~(aq)","~(l,l)","~(~())","aa()","~(bo)","~(l,h<ck>)","w(l)","Y(r)","Y(av)","Y(w)","~(~(a_))","~(bf)","Y(A,w,w,bS)","U()","~(l,h<bD>)","~(r,r?)","~(V)","aa(~())","@(@,w)","w(w)","~(aS)","@(@)","Y(h<ck>)","~(@)","~(@,@)","~(cM,U,U)","c2(l)","A(r)","@(w)","~(w,w)","l(b3,b3)","l(b8,b8)","l(bl,bl)","l(bn,bn)","~(iz)","Y(an?)","l(@,@)","aa(@)","w(b)","~(M?,M?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mX(v.typeUniverse,JSON.parse('{"e9":"be","bq":"be","at":"be","ok":"i","ow":"i","om":"aH","ol":"b","oC":"b","oF":"b","oj":"k","ox":"k","on":"p","oA":"p","oy":"r","ov":"r","p2":"a4","or":"aC","oo":"ag","oG":"ag","oE":"a2","oz":"ba","os":"E","ot":"ad","oB":"bi","dK":{"Y":[]},"ah":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"dM":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"bC":{"U":[],"V":[]},"ci":{"U":[],"l":[],"V":[]},"dL":{"U":[],"V":[]},"aJ":{"w":[],"t":["@"]},"dP":{"G":[]},"o":{"m":["l"],"j":["l"],"h":["l"]},"j":{"h":["1"]},"co":{"j":["1"],"h":["1"]},"bh":{"h":["2"]},"cb":{"j":["2"],"h":["2"]},"cr":{"j":["2"],"h":["2"]},"br":{"h":["1"]},"bN":{"m":["1"],"j":["1"],"h":["1"]},"cC":{"G":[]},"dN":{"G":[]},"eR":{"G":[]},"b6":{"cf":[]},"ew":{"cf":[]},"ep":{"cf":[]},"bw":{"cf":[]},"eh":{"G":[]},"P":{"Q":["1","2"],"R.V":"2"},"aK":{"j":["1"],"h":["1"]},"bF":{"x":["1"],"t":["1"]},"bi":{"x":["U"],"m":["U"],"j":["U"],"t":["U"],"h":["U"]},"cx":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dZ":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e_":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e0":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e1":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e2":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"cz":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e3":{"x":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"f9":{"G":[]},"d4":{"G":[]},"d3":{"iz":[]},"d0":{"h":["1"]},"cP":{"j":["1"],"h":["1"]},"ch":{"h":["1"]},"cn":{"m":["1"],"j":["1"],"h":["1"]},"cp":{"Q":["1","2"]},"R":{"Q":["1","2"]},"cX":{"j":["1"],"h":["1"]},"U":{"V":[]},"l":{"V":[]},"m":{"j":["1"],"h":["1"]},"dn":{"G":[]},"eE":{"G":[]},"e4":{"G":[]},"af":{"G":[]},"cF":{"G":[]},"dI":{"G":[]},"eT":{"G":[]},"eQ":{"G":[]},"bL":{"G":[]},"dt":{"G":[]},"e7":{"G":[]},"cI":{"G":[]},"dw":{"G":[]},"A":{"r":[],"b":[]},"bf":{"i":[]},"a2":{"i":[]},"r":{"b":[]},"ai":{"b":[]},"aj":{"b":[]},"a4":{"b":[]},"bo":{"i":[]},"aC":{"i":[]},"aS":{"a2":[],"i":[]},"bS":{"av":[]},"p":{"A":[],"r":[],"b":[]},"dl":{"A":[],"r":[],"b":[]},"dm":{"A":[],"r":[],"b":[]},"bv":{"A":[],"r":[],"b":[]},"b4":{"A":[],"r":[],"b":[]},"b5":{"A":[],"r":[],"b":[]},"ag":{"r":[],"b":[]},"c8":{"A":[],"r":[],"b":[]},"c9":{"m":["aO<V>"],"x":["aO<V>"],"j":["aO<V>"],"h":["aO<V>"],"t":["aO<V>"]},"ca":{"aO":["V"]},"dz":{"m":["w"],"x":["w"],"j":["w"],"h":["w"],"t":["w"]},"f0":{"m":["A"],"j":["A"],"h":["A"]},"dB":{"m":["ar"],"x":["ar"],"j":["ar"],"h":["ar"],"t":["ar"]},"dC":{"b":[]},"dE":{"A":[],"r":[],"b":[]},"ba":{"m":["r"],"x":["r"],"j":["r"],"h":["r"],"t":["r"]},"bB":{"A":[],"r":[],"b":[]},"dW":{"Q":["w","@"],"R.V":"@"},"dX":{"Q":["w","@"],"R.V":"@"},"dY":{"m":["au"],"x":["au"],"j":["au"],"h":["au"],"t":["au"]},"W":{"m":["r"],"j":["r"],"h":["r"]},"cA":{"m":["r"],"x":["r"],"j":["r"],"h":["r"],"t":["r"]},"eb":{"m":["aw"],"x":["aw"],"j":["aw"],"h":["aw"],"t":["aw"]},"eg":{"Q":["w","@"],"R.V":"@"},"ei":{"A":[],"r":[],"b":[]},"el":{"m":["ai"],"x":["ai"],"b":[],"j":["ai"],"h":["ai"],"t":["ai"]},"em":{"m":["ay"],"x":["ay"],"j":["ay"],"h":["ay"],"t":["ay"]},"eq":{"Q":["w","w"],"R.V":"w"},"cJ":{"A":[],"r":[],"b":[]},"eu":{"A":[],"r":[],"b":[]},"ev":{"A":[],"r":[],"b":[]},"bM":{"A":[],"r":[],"b":[]},"ex":{"m":["a4"],"x":["a4"],"j":["a4"],"h":["a4"],"t":["a4"]},"ey":{"m":["aj"],"x":["aj"],"b":[],"j":["aj"],"h":["aj"],"t":["aj"]},"eC":{"m":["aA"],"x":["aA"],"j":["aA"],"h":["aA"],"t":["aA"]},"eV":{"b":[]},"bQ":{"b":[]},"bR":{"r":[],"b":[]},"f1":{"m":["E"],"x":["E"],"j":["E"],"h":["E"],"t":["E"]},"cO":{"aO":["V"]},"ff":{"m":["as?"],"x":["as?"],"j":["as?"],"h":["as?"],"t":["as?"]},"cS":{"m":["r"],"x":["r"],"j":["r"],"h":["r"],"t":["r"]},"fy":{"m":["az"],"x":["az"],"j":["az"],"h":["az"],"t":["az"]},"fF":{"m":["ad"],"x":["ad"],"j":["ad"],"h":["ad"],"t":["ad"]},"eZ":{"Q":["w","w"]},"f7":{"Q":["w","w"],"R.V":"w"},"cB":{"av":[]},"cY":{"av":[]},"fH":{"av":[]},"fG":{"av":[]},"d5":{"bb":[]},"dD":{"m":["A"],"j":["A"],"h":["A"]},"dQ":{"m":["bg"],"j":["bg"],"h":["bg"]},"e5":{"m":["bj"],"j":["bj"],"h":["bj"]},"bJ":{"k":[],"A":[],"r":[],"b":[]},"et":{"m":["w"],"j":["w"],"h":["w"]},"k":{"A":[],"r":[],"b":[]},"eD":{"m":["bp"],"j":["bp"],"h":["bp"]},"dp":{"Q":["w","@"],"R.V":"@"},"dq":{"b":[]},"aH":{"b":[]},"e6":{"b":[]},"en":{"m":["Q<@,@>"],"j":["Q<@,@>"],"h":["Q<@,@>"]},"by":{"h":["1"]},"bc":{"a_":[]},"bd":{"a_":[]},"F":{"a_":[]},"c7":{"ck":[]},"cl":{"h":["ck"]},"dU":{"cG":[]},"dx":{"an":[]},"dF":{"an":[]},"dH":{"an":[]},"ea":{"an":[]},"aO":{"p6":["1"]}}'))
H.mW(v.typeUniverse,JSON.parse('{"ah":1,"dM":1,"a6":1,"j":1,"co":1,"aL":1,"bh":2,"cb":2,"cq":2,"cr":2,"br":1,"eX":1,"cd":1,"eS":1,"bN":1,"aK":1,"dR":1,"bF":1,"bs":1,"d0":1,"er":1,"es":2,"cQ":1,"ch":1,"cn":1,"D":1,"cp":2,"R":2,"ej":1,"cX":1,"cR":1,"d8":1,"ds":2,"dv":2,"h":1,"m":1,"dJ":1,"fa":1,"H":1,"ce":1,"by":1,"bc":1,"bd":1,"F":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nY
return{w:s("bv"),t:s("b4"),D:s("c3"),E:s("b5"),b:s("c5"),O:s("j<@>"),h:s("A"),C:s("G"),B:s("i"),Z:s("cf"),I:s("bb"),l:s("bB"),m:s("ah<@>"),e:s("t<@>"),T:s("cj"),M:s("at"),p:s("x<@>"),V:s("P<l,Y>"),y:s("P<l,l>"),q:s("m<eI>"),L:s("m<eJ>"),U:s("m<eM>"),R:s("m<eP>"),c:s("m<@>"),f:s("Q<@,@>"),P:s("aa"),K:s("M"),J:s("aO<V>"),Y:s("bJ"),k:s("cG"),N:s("w"),u:s("k"),d:s("bM"),r:s("iz"),s:s("eA"),n:s("eF"),v:s("cK"),g:s("eG"),F:s("eH"),Q:s("eK"),j:s("eL"),G:s("eN"),a:s("eO"),o:s("bq"),x:s("bR"),cB:s("Y"),i:s("U"),z:s("@"),S:s("l"),A:s("0&*"),_:s("M*"),bc:s("kv<aa>?"),X:s("M?"),ba:s("bI?"),aJ:s("eo?"),aX:s("eB?"),W:s("cK?"),H:s("V")}})();(function constants(){var s=hunkHelpers.makeConstList
C.k=W.b4.prototype
C.p=W.b5.prototype
C.I=W.c8.prototype
C.L=J.a.prototype
C.a=J.ah.prototype
C.c=J.ci.prototype
C.M=J.cj.prototype
C.d=J.bC.prototype
C.b=J.aJ.prototype
C.N=J.at.prototype
C.u=J.e9.prototype
C.U=P.bI.prototype
C.v=W.cJ.prototype
C.j=J.bq.prototype
C.w=W.aS.prototype
C.x=W.bQ.prototype
C.y=new E.bx("Browser.chrome")
C.l=new E.bx("Browser.firefox")
C.m=new E.bx("Browser.edge")
C.z=new E.bx("Browser.other")
C.n=function getTagFallback(o) {
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
C.o=function(hooks) { return hooks; }

C.G=new P.e7()
C.f=new P.iR()
C.H=new P.iS()
C.e=new P.jb()
C.h=new P.b9(0)
C.J=new P.b9(5e6)
C.K=new P.hA("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.q=s([0,0,65498,45055,65535,34815,65534,18431])
C.r=s(["bind","if","ref","repeat","syntax"])
C.i=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bG("OperatingSystem.windows")
C.t=new E.bG("OperatingSystem.mac")
C.S=new E.bG("OperatingSystem.linux")
C.T=new E.bG("OperatingSystem.other")
C.V=new P.bT(null,2)})();(function staticFields(){$.j8=null
$.am=0
$.c1=null
$.ko=null
$.lh=null
$.le=null
$.ll=null
$.jy=null
$.jE=null
$.ke=null
$.bU=null
$.dc=null
$.dd=null
$.k9=!1
$.ak=C.e
$.a1=[]
$.aI=null
$.jM=null
$.ku=null
$.kt=null
$.fg=P.N(t.N,t.Z)
$.ho=null
$.ky=null
$.kA=null
$.bk=null
$.ax=null
$.kE=null
$.kQ=null
$.iT=null
$.iU=null
$.iV=null
$.kP=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"ou","lr",function(){return H.o0("_$dart_dartClosure")})
s($,"oH","lt",function(){return H.aB(H.iG({
toString:function(){return"$receiver$"}}))})
s($,"oI","lu",function(){return H.aB(H.iG({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oJ","lv",function(){return H.aB(H.iG(null))})
s($,"oK","lw",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oN","lz",function(){return H.aB(H.iG(void 0))})
s($,"oO","lA",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oM","ly",function(){return H.aB(H.kN(null))})
s($,"oL","lx",function(){return H.aB(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oQ","lC",function(){return H.aB(H.kN(void 0))})
s($,"oP","lB",function(){return H.aB(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"p3","kl",function(){return P.mA()})
s($,"p7","lH",function(){return P.mn("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p4","lG",function(){return P.kw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oX","lF",function(){return Z.ae(0)})
s($,"oR","lD",function(){return Z.ae(511)})
s($,"oZ","b0",function(){return Z.ae(1)})
s($,"oY","b_",function(){return Z.ae(2)})
s($,"oT","aZ",function(){return Z.ae(4)})
s($,"p_","b1",function(){return Z.ae(8)})
s($,"p0","bu",function(){return Z.ae(16)})
s($,"oU","di",function(){return Z.ae(32)})
s($,"oV","dj",function(){return Z.ae(64)})
s($,"oW","lE",function(){return Z.ae(96)})
s($,"p1","c0",function(){return Z.ae(128)})
s($,"oS","aY",function(){return Z.ae(256)})
s($,"oq","lq",function(){return new V.hp()})
r($,"op","C",function(){return $.lq()})
r($,"oD","ls",function(){var q=V.kB(),p=V.jZ(),o=$.kP
return V.kz(q,p,o==null?$.kP=V.mx(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cy,ArrayBufferView:H.cy,Float32Array:H.bi,Float64Array:H.bi,Int16Array:H.dZ,Int32Array:H.e_,Int8Array:H.e0,Uint16Array:H.e1,Uint32Array:H.e2,Uint8ClampedArray:H.cz,CanvasPixelArray:H.cz,Uint8Array:H.e3,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.h3,HTMLAnchorElement:W.dl,HTMLAreaElement:W.dm,HTMLBaseElement:W.bv,Blob:W.dr,HTMLBodyElement:W.b4,HTMLCanvasElement:W.b5,CanvasRenderingContext2D:W.c5,CDATASection:W.ag,CharacterData:W.ag,Comment:W.ag,ProcessingInstruction:W.ag,Text:W.ag,CSSPerspective:W.hc,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.c6,MSStyleCSSProperties:W.c6,CSS2Properties:W.c6,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.ap,CSSRotation:W.ap,CSSScale:W.ap,CSSSkew:W.ap,CSSTranslation:W.ap,CSSTransformComponent:W.ap,CSSTransformValue:W.he,CSSUnparsedValue:W.hf,DataTransferItemList:W.hg,HTMLDivElement:W.c8,DOMException:W.hh,ClientRectList:W.c9,DOMRectList:W.c9,DOMRectReadOnly:W.ca,DOMStringList:W.dz,DOMTokenList:W.hi,Element:W.A,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.ar,FileList:W.dB,FileWriter:W.dC,HTMLFormElement:W.dE,Gamepad:W.as,History:W.hy,HTMLCollection:W.ba,HTMLFormControlsCollection:W.ba,HTMLOptionsCollection:W.ba,ImageData:W.bb,HTMLImageElement:W.bB,KeyboardEvent:W.bf,Location:W.hJ,MediaList:W.i_,MIDIInputMap:W.dW,MIDIOutputMap:W.dX,MimeType:W.au,MimeTypeArray:W.dY,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cA,RadioNodeList:W.cA,Plugin:W.aw,PluginArray:W.eb,RTCStatsReport:W.eg,HTMLSelectElement:W.ei,SourceBuffer:W.ai,SourceBufferList:W.el,SpeechGrammar:W.ay,SpeechGrammarList:W.em,SpeechRecognitionResult:W.az,Storage:W.eq,CSSStyleSheet:W.ad,StyleSheet:W.ad,HTMLTableElement:W.cJ,HTMLTableRowElement:W.eu,HTMLTableSectionElement:W.ev,HTMLTemplateElement:W.bM,TextTrack:W.aj,TextTrackCue:W.a4,VTTCue:W.a4,TextTrackCueList:W.ex,TextTrackList:W.ey,TimeRanges:W.iy,Touch:W.aA,TouchEvent:W.bo,TouchList:W.eC,TrackDefaultList:W.iD,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,URL:W.iQ,VideoTrackList:W.eV,WheelEvent:W.aS,Window:W.bQ,DOMWindow:W.bQ,Attr:W.bR,CSSRuleList:W.f1,ClientRect:W.cO,DOMRect:W.cO,GamepadList:W.ff,NamedNodeMap:W.cS,MozNamedAttrMap:W.cS,SpeechRecognitionResultList:W.fy,StyleSheetList:W.fF,SVGLength:P.bg,SVGLengthList:P.dQ,SVGNumber:P.bj,SVGNumberList:P.e5,SVGPointList:P.i9,SVGScriptElement:P.bJ,SVGStringList:P.et,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bp,SVGTransformList:P.eD,AudioBuffer:P.h7,AudioParamMap:P.dp,AudioTrackList:P.dq,AudioContext:P.aH,webkitAudioContext:P.aH,BaseAudioContext:P.aH,OfflineAudioContext:P.e6,WebGL2RenderingContext:P.bI,SQLResultSetRowList:P.en})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.bi.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
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
var s=F.oa
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
