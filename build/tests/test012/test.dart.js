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
a[c]=function(){a[c]=function(){H.oj(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.k3(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jH:function jH(){},
mb:function(a,b){if(t.U.b(a))return new H.c2(a,b)
return new H.bb(a,b)},
jF:function(){return new P.bJ("No element")},
m5:function(){return new P.bJ("Too many elements")},
mv:function(a,b){var s=J.aY(a)
if(typeof s!=="number")return s.Z()
H.e2(a,0,s-1,b)},
e2:function(a,b,c,d){if(c-b<=32)H.mu(a,b,c,d)
else H.mt(a,b,c,d)},
mu:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bn(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.Y()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mt:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.W(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.W(a6+a7,2),d=e-h,c=e+h,b=J.bn(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.Y()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.L(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.a5()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.Y()
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
if(typeof j!=="number")return j.a5()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.Y()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.Y()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
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
H.e2(a5,a6,r-2,a8)
H.e2(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.L(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.L(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a5()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.e2(a5,r,q,a8)}else H.e2(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
ce:function ce(){},
aF:function aF(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bb:function bb(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
cg:function cg(a,b){this.a=null
this.b=a
this.c=b},
ch:function ch(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
c4:function c4(){},
ex:function ex(){},
bM:function bM(){},
lq:function(a){var s,r=H.lp(a)
if(r!=null)return r
s="minified:"+a
return s},
ob:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.X(a)
if(typeof s!="string")throw H.c(H.aQ(a))
return s},
cp:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dW:function(a){return H.me(a)},
me:function(a){var s,r,q
if(a instanceof P.J)return H.a4(H.d_(a),null)
if(J.cZ(a)===C.M||t.o.b(a)){s=C.p(a)
if(H.kD(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kD(q))return q}}return H.a4(H.d_(a),null)},
kD:function(a){var s=a!=="Object"&&a!==""
return s},
kC:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mn:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){q=a[r]
if(!H.cV(q))throw H.c(H.aQ(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.b8(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aQ(q))}return H.kC(p)},
mm:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cV(q))throw H.c(H.aQ(q))
if(q<0)throw H.c(H.aQ(q))
if(q>65535)return H.mn(a)}return H.kC(a)},
jL:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.b8(s,10))>>>0,56320|s&1023)}throw H.c(P.aG(a,0,1114111,null,null))},
bG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ml:function(a){var s=H.bG(a).getFullYear()+0
return s},
mj:function(a){var s=H.bG(a).getMonth()+1
return s},
mf:function(a){var s=H.bG(a).getDate()+0
return s},
mg:function(a){var s=H.bG(a).getHours()+0
return s},
mi:function(a){var s=H.bG(a).getMinutes()+0
return s},
mk:function(a){var s=H.bG(a).getSeconds()+0
return s},
mh:function(a){var s=H.bG(a).getMilliseconds()+0
return s},
q:function(a){throw H.c(H.aQ(a))},
e:function(a,b){if(a==null)J.aY(a)
throw H.c(H.bU(a,b))},
bU:function(a,b){var s,r,q="index"
if(!H.cV(b))return new P.a1(!0,b,q,null)
s=J.aY(a)
if(!(b<0)){if(typeof s!=="number")return H.q(s)
r=b>=s}else r=!0
if(r)return P.H(b,a,q,null,s)
return P.dX(b,q)},
nZ:function(a,b,c){if(a>c)return P.aG(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aG(b,a,c,"end",null)
return new P.a1(!0,b,"end",null)},
aQ:function(a){return new P.a1(!0,a,null,null)},
nU:function(a){if(typeof a!="number")throw H.c(H.aQ(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dM()
s=new Error()
s.dartException=a
r=H.ok
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ok:function(){return J.X(this.dartException)},
p:function(a){throw H.c(a)},
k:function(a){throw H.c(P.b2(a))},
as:function(a){var s,r,q,p,o,n
a=H.ln(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iu(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
iv:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kO:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ky:function(a,b){return new H.dL(a,b==null?null:b.method)},
jI:function(a,b){var s=b==null,r=s?null:b.method
return new H.dv(a,r,s?null:b.receiver)},
ay:function(a){if(a==null)return new H.hR(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bo(a,a.dartException)
return H.nQ(a)},
bo:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nQ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.b8(r,16)&8191)===10)switch(q){case 438:return H.bo(a,H.jI(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bo(a,H.ky(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lt()
o=$.lu()
n=$.lv()
m=$.lw()
l=$.lz()
k=$.lA()
j=$.ly()
$.lx()
i=$.lC()
h=$.lB()
g=p.aa(s)
if(g!=null)return H.bo(a,H.jI(s,g))
else{g=o.aa(s)
if(g!=null){g.method="call"
return H.bo(a,H.jI(s,g))}else{g=n.aa(s)
if(g==null){g=m.aa(s)
if(g==null){g=l.aa(s)
if(g==null){g=k.aa(s)
if(g==null){g=j.aa(s)
if(g==null){g=m.aa(s)
if(g==null){g=i.aa(s)
if(g==null){g=h.aa(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bo(a,H.ky(s,g))}}return H.bo(a,new H.ew(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cq()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bo(a,new P.a1(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cq()
return a},
k5:function(a){var s
if(a==null)return new H.fg(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fg(a)},
o0:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
oa:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bT:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oa)
a.$identity=s
return s},
lZ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ib().constructor.prototype):Object.create(new H.bX(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ai
if(typeof r!=="number")return r.v()
$.ai=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kl(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lV(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kl(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lV:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.li,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lT:H.lS
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lW:function(a,b,c,d){var s=H.kk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kl:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lY(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lW(r,!p,s,b)
if(r===0){p=$.ai
if(typeof p!=="number")return p.v()
$.ai=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jx())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ai
if(typeof p!=="number")return p.v()
$.ai=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jx())+"."+H.d(s)+"("+m+");}")()},
lX:function(a,b,c,d){var s=H.kk,r=H.lU
switch(b?-1:a){case 0:throw H.c(new H.e_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lY:function(a,b){var s,r,q,p,o,n,m=H.jx(),l=$.ki
if(l==null)l=$.ki=H.kh("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lX(r,!p,s,b)
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
k3:function(a,b,c,d,e,f,g){return H.lZ(a,b,c,d,!!e,!!f,g)},
lS:function(a,b){return H.fu(v.typeUniverse,H.d_(a.a),b)},
lT:function(a,b){return H.fu(v.typeUniverse,H.d_(a.c),b)},
kk:function(a){return a.a},
lU:function(a){return a.c},
jx:function(){var s=$.kj
return s==null?$.kj=H.kh("self"):s},
kh:function(a){var s,r,q,p=new H.bX("self","target","receiver","name"),o=J.jG(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jw("Field name "+a+" not found."))},
oj:function(a){throw H.c(new P.de(a))},
o4:function(a){return v.getIsolateTag(a)},
pm:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
od:function(a){var s,r,q,p,o,n=$.lh.$1(a),m=$.jl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jq[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lf.$2(a,n)
if(q!=null){m=$.jl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jq[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jt(s)
$.jl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jq[n]=s
return s}if(p==="-"){o=H.jt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ll(a,s)
if(p==="*")throw H.c(P.kP(n))
if(v.leafTags[n]===true){o=H.jt(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ll(a,s)},
ll:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k8(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jt:function(a){return J.k8(a,!1,null,!!a.$it)},
oe:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jt(s)
else return J.k8(s,c,null,null)},
o8:function(){if(!0===$.k6)return
$.k6=!0
H.o9()},
o9:function(){var s,r,q,p,o,n,m,l
$.jl=Object.create(null)
$.jq=Object.create(null)
H.o7()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lm.$1(o)
if(n!=null){m=H.oe(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
o7:function(){var s,r,q,p,o,n,m=C.B()
m=H.bS(C.C,H.bS(C.D,H.bS(C.q,H.bS(C.q,H.bS(C.E,H.bS(C.F,H.bS(C.G(C.p),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lh=new H.jn(p)
$.lf=new H.jo(o)
$.lm=new H.jp(n)},
bS:function(a,b){return a(b)||b},
m9:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hf("Illegal RegExp pattern ("+String(n)+")",a))},
lo:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
o_:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ln:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kb:function(a,b,c){var s=H.oh(a,b,c)
return s},
oh:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ln(b),'g'),H.o_(c))},
iu:function iu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dL:function dL(a,b){this.a=a
this.b=b},
dv:function dv(a,b,c){this.a=a
this.b=b
this.c=c},
ew:function ew(a){this.a=a},
hR:function hR(a){this.a=a},
fg:function fg(a){this.a=a
this.b=null},
bs:function bs(){},
ig:function ig(){},
ib:function ib(){},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a){this.a=a},
v:function v(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hn:function hn(a){this.a=a},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aE:function aE(a){this.a=a},
dy:function dy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cT:function(a){return a},
au:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bU(b,a))},
n3:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nZ(a,b,c))
return b},
cl:function cl(){},
bD:function bD(){},
bd:function bd(){},
ck:function ck(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
cm:function cm(){},
dK:function dK(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
mr:function(a,b){var s=b.c
return s==null?b.c=H.jY(a,b.z,!0):s},
kH:function(a,b){var s=b.c
return s==null?b.c=H.cQ(a,"kq",[b.z]):s},
kI:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kI(a.z)
return s===11||s===12},
mq:function(a){return a.cy},
o1:function(a){return H.jZ(v.typeUniverse,a,!1)},
aP:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aP(a,s,a0,a1)
if(r===s)return b
return H.l5(a,r,!0)
case 7:s=b.z
r=H.aP(a,s,a0,a1)
if(r===s)return b
return H.jY(a,r,!0)
case 8:s=b.z
r=H.aP(a,s,a0,a1)
if(r===s)return b
return H.l4(a,r,!0)
case 9:q=b.Q
p=H.cY(a,q,a0,a1)
if(p===q)return b
return H.cQ(a,b.z,p)
case 10:o=b.z
n=H.aP(a,o,a0,a1)
m=b.Q
l=H.cY(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jW(a,n,l)
case 11:k=b.z
j=H.aP(a,k,a0,a1)
i=b.Q
h=H.nN(a,i,a0,a1)
if(j===k&&h===i)return b
return H.l3(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cY(a,g,a0,a1)
o=b.z
n=H.aP(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jX(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fK("Attempted to substitute unexpected RTI kind "+c))}},
cY:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aP(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nO:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aP(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nN:function(a,b,c,d){var s,r=b.a,q=H.cY(a,r,c,d),p=b.b,o=H.cY(a,p,c,d),n=b.c,m=H.nO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eT()
s.a=q
s.b=o
s.c=m
return s},
po:function(a,b){a[v.arrayRti]=b
return a},
nV:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.li(s)
return a.$S()}return null},
lj:function(a,b){var s
if(H.kI(b))if(a instanceof H.bs){s=H.nV(a)
if(s!=null)return s}return H.d_(a)},
d_:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.k0(a)}if(Array.isArray(a))return H.n0(a)
return H.k0(J.cZ(a))},
n0:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
n9:function(a){var s=a.$ti
return s!=null?s:H.k0(a)},
k0:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.na(a,s)},
na:function(a,b){var s=a instanceof H.bs?a.__proto__.__proto__.constructor:b,r=H.n_(v.typeUniverse,s.name)
b.$ccache=r
return r},
li:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jZ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n8:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cU(q,a,H.ne)
if(!H.ax(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cU(q,a,H.nh)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cV
else if(s===t.cb||s===t.H)r=H.nd
else if(s===t.N)r=H.nf
else r=s===t.cB?H.lb:null
if(r!=null)return H.cU(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.oc)){q.r="$i"+p
return H.cU(q,a,H.ng)}}else if(p===7)return H.cU(q,a,H.n6)
return H.cU(q,a,H.n4)},
cU:function(a,b,c){a.b=c
return a.b(b)},
n7:function(a){var s,r,q=this
if(!H.ax(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.n2
else if(q===t.K)r=H.n1
else r=H.n5
q.a=r
return q.a(a)},
nG:function(a){var s,r=a.y
if(!H.ax(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
n4:function(a){var s=this
if(a==null)return H.nG(s)
return H.M(v.typeUniverse,H.lj(a,s),null,s,null)},
n6:function(a){if(a==null)return!0
return this.z.b(a)},
ng:function(a){var s=this,r=s.r
if(a instanceof P.J)return!!a[r]
return!!J.cZ(a)[r]},
pl:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l9(a,s)},
n5:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l9(a,s)},
l9:function(a,b){throw H.c(H.mQ(H.kW(a,H.lj(a,b),H.a4(b,null))))},
kW:function(a,b,c){var s=P.h9(a),r=H.a4(b==null?H.d_(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
mQ:function(a){return new H.cO("TypeError: "+a)},
U:function(a,b){return new H.cO("TypeError: "+H.kW(a,null,b))},
ne:function(a){return a!=null},
n1:function(a){return a},
nh:function(a){return!0},
n2:function(a){return a},
lb:function(a){return!0===a||!1===a},
p7:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.U(a,"bool"))},
p9:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool"))},
p8:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.U(a,"bool?"))},
pa:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"double"))},
pc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double"))},
pb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"double?"))},
cV:function(a){return typeof a=="number"&&Math.floor(a)===a},
pd:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.U(a,"int"))},
pf:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int"))},
pe:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.U(a,"int?"))},
nd:function(a){return typeof a=="number"},
pg:function(a){if(typeof a=="number")return a
throw H.c(H.U(a,"num"))},
pi:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num"))},
ph:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.U(a,"num?"))},
nf:function(a){return typeof a=="string"},
pj:function(a){if(typeof a=="string")return a
throw H.c(H.U(a,"String"))},
k_:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String"))},
pk:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.U(a,"String?"))},
nJ:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.v(r,H.a4(a[q],b))
return s},
la:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
if(!j)l+=C.b.v(" extends ",H.a4(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a4(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.v(a3,H.a4(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.v(a3,H.a4(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kd(H.a4(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
a4:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a4(a.z,b)
return s}if(l===7){r=a.z
s=H.a4(r,b)
q=r.y
return J.kd(q===11||q===12?C.b.v("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a4(a.z,b))+">"
if(l===9){p=H.nP(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nJ(o,b)+">"):p}if(l===11)return H.la(a,b,null)
if(l===12)return H.la(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nP:function(a){var s,r=H.lp(a)
if(r!=null)return r
s="minified:"+a
return s},
l6:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
n_:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jZ(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cR(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cQ(a,b,q)
n[b]=o
return o}else return m},
mY:function(a,b){return H.l8(a.tR,b)},
mX:function(a,b){return H.l8(a.eT,b)},
jZ:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.l1(H.l_(a,null,b,c))
r.set(b,s)
return s},
fu:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.l1(H.l_(a,b,c,!0))
q.set(c,r)
return r},
mZ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jW(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aO:function(a,b){b.a=H.n7
b.b=H.n8
return b},
cR:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aO(a,s)
a.eC.set(c,r)
return r},
l5:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mV(a,b,r,c)
a.eC.set(r,s)
return s},
mV:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ax(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aO(a,q)},
jY:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mU(a,b,r,c)
a.eC.set(r,s)
return s},
mU:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ax(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jr(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jr(q.z))return q
else return H.mr(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aO(a,p)},
l4:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mS(a,b,r,c)
a.eC.set(r,s)
return s},
mS:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ax(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cQ(a,"kq",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aO(a,q)},
mW:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aO(a,s)
a.eC.set(q,r)
return r},
ft:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mR:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cQ:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.ft(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aO(a,r)
a.eC.set(p,q)
return q},
jW:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.ft(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aO(a,o)
a.eC.set(q,n)
return n},
l3:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.ft(m)
if(j>0){s=l>0?",":""
r=H.ft(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mR(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aO(a,o)
a.eC.set(q,r)
return r},
jX:function(a,b,c,d){var s,r=b.cy+("<"+H.ft(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mT(a,b,c,r,d)
a.eC.set(r,s)
return s},
mT:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aP(a,b,r,0)
m=H.cY(a,c,r,0)
return H.jX(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aO(a,l)},
l_:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mK(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.l0(a,r,g,f,!1)
else if(q===46)r=H.l0(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aN(a.u,a.e,f.pop()))
break
case 94:f.push(H.mW(a.u,f.pop()))
break
case 35:f.push(H.cR(a.u,5,"#"))
break
case 64:f.push(H.cR(a.u,2,"@"))
break
case 126:f.push(H.cR(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jV(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cQ(p,n,o))
else{m=H.aN(p,a.e,n)
switch(m.y){case 11:f.push(H.jX(p,m,o,a.n))
break
default:f.push(H.jW(p,m,o))
break}}break
case 38:H.mL(a,f)
break
case 42:l=a.u
f.push(H.l5(l,H.aN(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jY(l,H.aN(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.l4(l,H.aN(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eT()
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
H.jV(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.l3(p,H.aN(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jV(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mN(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aN(a.u,a.e,h)},
mK:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l0:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l6(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.mq(o)+'"')
d.push(H.fu(s,o,n))}else d.push(p)
return m},
mL:function(a,b){var s=b.pop()
if(0===s){b.push(H.cR(a.u,1,"0&"))
return}if(1===s){b.push(H.cR(a.u,4,"1&"))
return}throw H.c(P.fK("Unexpected extended operation "+H.d(s)))},
aN:function(a,b,c){if(typeof c=="string")return H.cQ(a,c,a.sEA)
else if(typeof c=="number")return H.mM(a,b,c)
else return c},
jV:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aN(a,b,c[s])},
mN:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aN(a,b,c[s])},
mM:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fK("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fK("Bad index "+c+" for "+b.i(0)))},
M:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ax(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ax(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.M(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.M(a,b.z,c,d,e)
if(p===6){s=d.z
return H.M(a,b,c,s,e)}if(r===8){if(!H.M(a,b.z,c,d,e))return!1
return H.M(a,H.kH(a,b),c,d,e)}if(r===7){s=H.M(a,b.z,c,d,e)
return s}if(p===8){if(H.M(a,b,c,d.z,e))return!0
return H.M(a,b,c,H.kH(a,d),e)}if(p===7){s=H.M(a,b,c,d.z,e)
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
if(!H.M(a,k,c,j,e)||!H.M(a,j,e,k,c))return!1}return H.lc(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.lc(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nc(a,b,c,d,e)}return!1},
lc:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
nc:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.M(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l6(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.M(a,H.fu(a,b,l[p]),c,r[p],e))return!1
return!0},
jr:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ax(a))if(r!==7)if(!(r===6&&H.jr(a.z)))s=r===8&&H.jr(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oc:function(a){var s
if(!H.ax(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
ax:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l8:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eT:function eT(){this.c=this.b=this.a=null},
eO:function eO(){},
cO:function cO(a){this.a=a},
lp:function(a){return v.mangledGlobalNames[a]},
of:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fG:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.k6==null){H.o8()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kP("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.ks()]
if(p!=null)return p
p=H.od(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,J.ks(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
ks:function(){var s=$.kY
return s==null?$.kY=v.getIsolateTag("_$dart_js"):s},
m6:function(a){if(!H.cV(a))throw H.c(P.kg(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aG(a,0,4294967295,"length",null))
return J.m7(new Array(a))},
kr:function(a){if(!H.cV(a)||a<0)throw H.c(P.jw("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
m7:function(a){return J.jG(a)},
jG:function(a){a.fixed$length=Array
return a},
m8:function(a,b){return J.d3(a,b)},
cZ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c9.prototype
return J.c8.prototype}if(typeof a=="string")return J.ak.prototype
if(a==null)return J.ca.prototype
if(typeof a=="boolean")return J.hl.prototype
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fG(a)},
o2:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fG(a)},
bn:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fG(a)},
jm:function(a){if(a==null)return a
if(a.constructor==Array)return J.a7.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fG(a)},
o3:function(a){if(typeof a=="number")return J.b8.prototype
if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bk.prototype
return a},
k4:function(a){if(typeof a=="string")return J.ak.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bk.prototype
return a},
aw:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.J)return a
return J.fG(a)},
kd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.o2(a).v(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cZ(a).p(a,b)},
d2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ob(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).h(a,b)},
lI:function(a,b,c){return J.aw(a).f8(a,b,c)},
lJ:function(a,b,c,d){return J.aw(a).fq(a,b,c,d)},
d3:function(a,b){return J.o3(a).aL(a,b)},
jv:function(a,b){return J.bn(a).w(a,b)},
fI:function(a,b){return J.jm(a).C(a,b)},
lK:function(a,b){return J.jm(a).F(a,b)},
lL:function(a){return J.aw(a).gfv(a)},
lM:function(a){return J.aw(a).gcP(a)},
lN:function(a){return J.aw(a).gcR(a)},
W:function(a){return J.cZ(a).gO(a)},
aX:function(a){return J.jm(a).gK(a)},
aY:function(a){return J.bn(a).gl(a)},
ke:function(a){return J.jm(a).hd(a)},
lO:function(a,b){return J.aw(a).hh(a,b)},
lP:function(a,b,c){return J.k4(a).b2(a,b,c)},
lQ:function(a){return J.k4(a).hq(a)},
X:function(a){return J.cZ(a).i(a)},
a:function a(){},
hl:function hl(){},
ca:function ca(){},
b9:function b9(){},
dR:function dR(){},
bk:function bk(){},
af:function af(){},
a7:function a7(){},
du:function du(){},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b8:function b8(){},
c9:function c9(){},
c8:function c8(){},
ak:function ak(){}},P={
mA:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nR()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bT(new P.iV(q),1)).observe(s,{childList:true})
return new P.iU(q,s,r)}else if(self.setImmediate!=null)return P.nS()
return P.nT()},
mB:function(a){self.scheduleImmediate(H.bT(new P.iW(a),0))},
mC:function(a){self.setImmediate(H.bT(new P.iX(a),0))},
mD:function(a){P.jP(C.j,a)},
jP:function(a,b){var s=C.c.W(a.a,1000)
return P.mO(s<0?0:s,b)},
kN:function(a,b){var s=C.c.W(a.a,1000)
return P.mP(s<0?0:s,b)},
mO:function(a,b){var s=new P.cN()
s.dT(a,b)
return s},
mP:function(a,b){var s=new P.cN()
s.dU(a,b)
return s},
p5:function(a){return new P.bQ(a,1)},
mG:function(){return C.W},
mH:function(a){return new P.bQ(a,3)},
nj:function(a){return new P.cK(a)},
nF:function(){var s,r
for(s=$.bR;s!=null;s=$.bR){$.cX=null
r=s.b
$.bR=r
if(r==null)$.cW=null
s.a.$0()}},
nM:function(){$.k1=!0
try{P.nF()}finally{$.cX=null
$.k1=!1
if($.bR!=null)$.kc().$1(P.lg())}},
nK:function(a){var s=new P.eE(a),r=$.cW
if(r==null){$.bR=$.cW=s
if(!$.k1)$.kc().$1(P.lg())}else $.cW=r.b=s},
nL:function(a){var s,r,q,p=$.bR
if(p==null){P.nK(a)
$.cX=$.cW
return}s=new P.eE(a)
r=$.cX
if(r==null){s.b=p
$.bR=$.cX=s}else{q=r.b
s.b=q
$.cX=r.b=s
if(q==null)$.cW=s}},
kM:function(a,b){var s=$.ah
if(s===C.e)return P.jP(a,b)
return P.jP(a,s.fw(b))},
mx:function(a,b){var s=$.ah
if(s===C.e)return P.kN(a,b)
return P.kN(a,s.cN(b,t.l))},
ld:function(a,b,c,d,e){P.nL(new P.jj(d,e))},
nH:function(a,b,c,d){var s,r=$.ah
if(r===c)return d.$0()
$.ah=c
s=r
try{r=d.$0()
return r}finally{$.ah=s}},
nI:function(a,b,c,d,e){var s,r=$.ah
if(r===c)return d.$1(e)
$.ah=c
s=r
try{r=d.$1(e)
return r}finally{$.ah=s}},
iV:function iV(a){this.a=a},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
cN:function cN(){this.c=0},
jb:function jb(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b){this.a=a
this.b=b},
bm:function bm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cK:function cK(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null},
e7:function e7(){},
e8:function e8(){},
cs:function cs(){},
je:function je(){},
jj:function jj(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
ma:function(a,b,c){return H.o0(a,new H.v(b.ap("@<0>").co(c).ap("v<1,2>")))},
kt:function(a,b){return new H.v(a.ap("@<0>").co(b).ap("v<1,2>"))},
cc:function(a){return new P.cy(a.ap("cy<0>"))},
jU:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mJ:function(a,b){var s=new P.cz(a,b)
s.c=a.e
return s},
m4:function(a,b,c){var s,r
if(P.k2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a0.push(a)
try{P.ni(a,s)}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}r=P.kK(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jE:function(a,b,c){var s,r
if(P.k2(a))return b+"..."+c
s=new P.aI(b)
$.a0.push(a)
try{r=s
r.a=P.kK(r.a,a,", ")}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
k2:function(a){var s,r
for(s=$.a0.length,r=0;r<s;++r)if(a===$.a0[r])return!0
return!1},
ni:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.d(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.q()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.q();p=o,o=n){n=l.gB(l);++j
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
ku:function(a,b){var s,r,q=P.cc(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r)q.n(0,b.a(a[r]))
return q},
kv:function(a){var s,r={}
if(P.k2(a))return"{...}"
s=new P.aI("")
try{$.a0.push(a)
s.a+="{"
r.a=!0
J.lK(a,new P.ht(r,s))
s.a+="}"}finally{if(0>=$.a0.length)return H.e($.a0,-1)
$.a0.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cy:function cy(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j2:function j2(a){this.a=a
this.c=this.b=null},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c7:function c7(){},
cd:function cd(){},
A:function A(){},
dA:function dA(){},
ht:function ht(a,b){this.a=a
this.b=b},
an:function an(){},
cG:function cG(){},
cA:function cA(){},
db:function db(){},
dd:function dd(){},
h6:function h6(){},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hj:function hj(a){this.a=a},
iF:function iF(){},
iG:function iG(){},
jc:function jc(a){this.b=0
this.c=a},
m2:function(a){if(a instanceof H.bs)return a.i(0)
return"Instance of '"+H.d(H.dW(a))+"'"},
jJ:function(a,b,c){var s,r=c?J.kr(a):J.m6(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jK:function(a,b){var s,r=[]
for(s=J.aX(a);s.q();)r.push(s.gB(s))
if(b)return r
return J.jG(r)},
jO:function(a){var s,r=a,q=r.length,p=P.jM(0,null,q)
if(typeof p!=="number")return p.a5()
s=p<q
return H.mm(s?r.slice(0,p):r)},
mo:function(a){return new H.hm(a,H.m9(a,!1,!0,!1,!1,!1))},
kK:function(a,b,c){var s=J.aX(b)
if(!s.q())return a
if(c.length===0){do a+=H.d(s.gB(s))
while(s.q())}else{a+=H.d(s.gB(s))
for(;s.q();)a=a+c+H.d(s.gB(s))}return a},
l7:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.i){s=$.lH().b
s=s.test(b)}else s=!1
if(s)return b
r=C.I.fD(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jL(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
m_:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
m0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dg:function(a){if(a>=10)return""+a
return"0"+a},
kn:function(a){return new P.b3(1000*a)},
h9:function(a){if(typeof a=="number"||H.lb(a)||null==a)return J.X(a)
if(typeof a=="string")return JSON.stringify(a)
return P.m2(a)},
fK:function(a){return new P.d6(a)},
jw:function(a){return new P.a1(!1,null,null,a)},
kg:function(a,b,c){return new P.a1(!0,a,b,c)},
lR:function(a,b){if(a==null)throw H.c(new P.a1(!1,null,b,"Must not be null"))
return a},
dX:function(a,b){return new P.bH(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.bH(b,c,!0,a,d,"Invalid value")},
jM:function(a,b,c){var s
if(typeof c!=="number")return H.q(c)
s=a>c
if(s)throw H.c(P.aG(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
s=b>c}else s=!0
if(s)throw H.c(P.aG(b,a,c,"end",null))
return b}return c},
kE:function(a,b){if(a<0)throw H.c(P.aG(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.aY(b):e
return new P.ds(s,!0,a,c,"Index out of range")},
w:function(a){return new P.ey(a)},
kP:function(a){return new P.ev(a)},
jN:function(a){return new P.bJ(a)},
b2:function(a){return new P.dc(a)},
o:function(a){return new P.eQ(a)},
ka:function(a){H.of(a)},
av:function av(){},
a6:function a6(a,b){this.a=a
this.b=b},
V:function V(){},
b3:function b3(a){this.a=a},
h2:function h2(){},
h3:function h3(){},
G:function G(){},
d6:function d6(a){this.a=a},
dM:function dM(){},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ds:function ds(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ey:function ey(a){this.a=a},
ev:function ev(a){this.a=a},
bJ:function bJ(a){this.a=a},
dc:function dc(a){this.a=a},
dP:function dP(){},
cq:function cq(){},
de:function de(a){this.a=a},
eQ:function eQ(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
hh:function hh(){},
r:function r(){},
f:function f(){},
dt:function dt(){},
am:function am(){},
dz:function dz(){},
aa:function aa(){},
N:function N(){},
J:function J(){},
K:function K(){},
aI:function aI(a){this.a=a},
nY:function(a){var s
if(t.s.b(a)){s=J.lN(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cP(a.data,a.height,a.width)},
nX:function(a){if(a instanceof P.cP)return{data:a.a,height:a.b,width:a.c}
return a},
aR:function(a){var s,r,q,p,o
if(a==null)return null
s=P.kt(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.k)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
nW:function(a){var s={}
a.F(0,new P.jk(s))
return s},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a){this.a=a},
dm:function dm(a,b){this.a=a
this.b=b},
hd:function hd(){},
he:function he(){},
j1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
f9:function f9(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bz:function bz(){},
dx:function dx(){},
bE:function bE(){},
dN:function dN(){},
hU:function hU(){},
bI:function bI(){},
e9:function e9(){},
j:function j(){},
bL:function bL(){},
ei:function ei(){},
eY:function eY(){},
eZ:function eZ(){},
f5:function f5(){},
f6:function f6(){},
fi:function fi(){},
fj:function fj(){},
fr:function fr(){},
fs:function fs(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
d7:function d7(){},
aA:function aA(){},
dO:function dO(){},
eF:function eF(){},
dZ:function dZ(){},
e5:function e5(){},
fe:function fe(){},
ff:function ff(){}},W={
kf:function(){var s=document.createElement("a")
return s},
jz:function(){var s=document.createElement("canvas")
return s},
m1:function(a,b,c){var s,r=document.body
r.toString
s=C.m.a9(r,a,b,c)
s.toString
r=new H.bl(new W.T(s),new W.h4())
return t.h.a(r.gaA(r))},
h5:function(a){return"wheel"},
c3:function(a){var s,r,q="element tag unavailable"
try{s=J.aw(a)
if(typeof s.gdn(a)=="string")q=s.gdn(a)}catch(r){H.ay(r)}return q},
j0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a,b,c,d){var s=W.j0(W.j0(W.j0(W.j0(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
Q:function(a,b,c,d){var s=W.le(new W.j_(c),t.D)
if(s!=null&&!0)J.lJ(a,b,s,!1)
return new W.eP(a,b,s,!1)},
kX:function(a){var s=W.kf(),r=window.location
s=new W.bP(new W.j6(s,r))
s.dO(a)
return s},
mE:function(a,b,c,d){return!0},
mF:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
l2:function(){var s=t.N
s=new W.fm(P.ku(C.t,s),P.cc(s),P.cc(s),P.cc(s),null)
s.dS(null,new H.ch(C.t,new W.j9()),["TEMPLATE"],null)
return s},
le:function(a,b){var s=$.ah
if(s===C.e)return a
return s.cN(a,b)},
m:function m(){},
fJ:function fJ(){},
d4:function d4(){},
d5:function d5(){},
bq:function bq(){},
d8:function d8(){},
aZ:function aZ(){},
b_:function b_(){},
ae:function ae(){},
fV:function fV(){},
F:function F(){},
bZ:function bZ(){},
fW:function fW(){},
a5:function a5(){},
aj:function aj(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
c_:function c_(){},
h0:function h0(){},
c0:function c0(){},
c1:function c1(){},
dh:function dh(){},
h1:function h1(){},
eG:function eG(a,b){this.a=a
this.b=b},
y:function y(){},
h4:function h4(){},
h:function h(){},
b:function b(){},
b4:function b4(){},
dk:function dk(){},
dl:function dl(){},
dn:function dn(){},
b5:function b5(){},
hi:function hi(){},
b6:function b6(){},
b7:function b7(){},
by:function by(){},
ba:function ba(){},
hr:function hr(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
bc:function bc(){},
dE:function dE(){},
a2:function a2(){},
T:function T(a){this.a=a},
u:function u(){},
cn:function cn(){},
be:function be(){},
dT:function dT(){},
i_:function i_(){},
i0:function i0(a){this.a=a},
e0:function e0(){},
aH:function aH(){},
e3:function e3(){},
bg:function bg(){},
e4:function e4(){},
bh:function bh(){},
ic:function ic(){},
id:function id(a){this.a=a},
aJ:function aJ(){},
cr:function cr(){},
ea:function ea(){},
eb:function eb(){},
bK:function bK(){},
aK:function aK(){},
ag:function ag(){},
ec:function ec(){},
ed:function ed(){},
io:function io(){},
bi:function bi(){},
bj:function bj(){},
eh:function eh(){},
is:function is(){},
at:function at(){},
iE:function iE(){},
eB:function eB(){},
aM:function aM(){},
bN:function bN(){},
bO:function bO(){},
eH:function eH(){},
cx:function cx(){},
eU:function eU(){},
cB:function cB(){},
fd:function fd(){},
fk:function fk(){},
iY:function iY(){},
iZ:function iZ(a){this.a=a},
jD:function jD(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j_:function j_(a){this.a=a},
jT:function jT(a){this.$ti=a},
bP:function bP(a){this.a=a},
E:function E(){},
co:function co(a){this.a=a},
hQ:function hQ(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(){},
j7:function j7(){},
j8:function j8(){},
fm:function fm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j9:function j9(){},
fl:function fl(){},
c5:function c5(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a9:function a9(){},
j6:function j6(a,b){this.a=a
this.b=b},
fv:function fv(a){this.a=a
this.b=!1},
jd:function jd(a){this.a=a},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f7:function f7(){},
f8:function f8(){},
fa:function fa(){},
cI:function cI(){},
cJ:function cJ(){},
fb:function fb(){},
fc:function fc(){},
fh:function fh(){},
fn:function fn(){},
fo:function fo(){},
cL:function cL(){},
cM:function cM(){},
fp:function fp(){},
fq:function fq(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){}},K={
I:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.b5(a,0)
r=C.b.b5(b,0)
if(s>r){q=r
r=s
s=q}return new K.hV(s,r)},
n:function(a){var s=new K.i1()
s.dK(a)
return s},
az:function az(){},
dq:function dq(){},
Z:function Z(){this.a=null},
hV:function hV(a,b){this.a=a
this.b=b},
i1:function i1(){this.a=null}},L={
iq:function(){var s=new L.ip()
s.a=new H.v(t.V)
s.b=new H.v(t.w)
s.c=P.cc(t.bw)
return s},
e6:function e6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.b=a
this.c=null},
ip:function ip(){var _=this
_.d=_.c=_.b=_.a=null},
it:function it(a){this.b=a
this.a=this.c=null}},O={
jA:function(){var s=new O.bt()
s.bm()
return s},
bt:function bt(){this.c=this.b=this.a=null},
cj:function cj(){this.b=this.a=null},
dB:function dB(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(){},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
hv:function hv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ci:function ci(){},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ao:function ao(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hy:function hy(){var _=this
_.e=_.d=_.c=_.b=null},
hz:function hz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ih:function ih(){}},E={
kU:function(){if(J.jv(window.navigator.vendor,"Google"))return C.z
if(J.jv(window.navigator.userAgent,"Firefox"))return C.n
var s=window.navigator.appVersion
if(J.bn(s).w(s,"Trident")||C.b.w(s,"Edge"))return C.o
if(J.jv(window.navigator.appName,"Microsoft"))return C.o
return C.A},
kV:function(){var s=window.navigator.appVersion
if(J.bn(s).w(s,"Win"))return C.S
if(C.b.w(s,"Mac"))return C.u
if(C.b.w(s,"Linux"))return C.T
return C.U},
mp:function(a,b){var s=new E.hW(a)
s.dJ(a,b)
return s},
mw:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kL(a,!0,!0,!0,!1)
s=W.jz()
r=s.style
r.width="100%"
r.height="100%"
J.lM(a).n(0,s)
return E.kL(s,!0,!0,!0,!1)},
kL:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.ee(),n=t.z,m=C.f.ca(a,"webgl2",P.ma(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mp(m,a)
n=new T.ik(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.ez(a)
s=new X.ho()
s.c=new X.a8(!1,!1,!1)
s.d=P.cc(t.e)
n.b=s
s=new X.hO(n)
s.f=0
s.r=V.bf()
s.x=V.bf()
s.ch=s.Q=1
n.c=s
s=new X.hs(n)
s.r=0
s.x=V.bf()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.ir(n)
s.f=V.bf()
s.r=V.bf()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.h7
n.Q=(s==null?$.h7=new E.eN(E.kU(),E.kV()):s).a===C.n?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.Q(q,"contextmenu",n.gew(),!1))
n.z.push(W.Q(a,"focus",n.geC(),!1))
n.z.push(W.Q(a,"blur",n.gep(),!1))
n.z.push(W.Q(q,"keyup",n.geG(),!1))
n.z.push(W.Q(q,"keydown",n.geE(),!1))
n.z.push(W.Q(a,"mousedown",n.geK(),!1))
n.z.push(W.Q(a,"mouseup",n.geO(),!1))
n.z.push(W.Q(a,p,n.geM(),!1))
r=n.z
W.h5(a)
W.h5(a)
r.push(W.Q(a,W.h5(a),n.geQ(),!1))
n.z.push(W.Q(q,p,n.gey(),!1))
n.z.push(W.Q(q,"mouseup",n.geA(),!1))
n.z.push(W.Q(q,"pointerlockchange",n.geS(),!1))
n.z.push(W.Q(a,"touchstart",n.gf4(),!1))
n.z.push(W.Q(a,"touchend",n.gf0(),!1))
n.z.push(W.Q(a,"touchmove",n.gf2(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a6(Date.now(),!1)
o.db=0
o.cA()
return o},
fR:function fR(){},
bv:function bv(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
br:function br(a){this.b=a},
bF:function bF(a){this.b=a},
eN:function eN(a,b){this.a=a
this.b=b},
hW:function hW(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
ee:function ee(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
im:function im(a){this.a=a}},Z={
jS:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cT(c)),35044)
a.bindBuffer(b,null)
return new Z.eC(b,s)},
ad:function(a){return new Z.aL(a)},
eC:function eC(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iT:function iT(a){this.a=a},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c6:function c6(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a){this.a=a},
lk:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.ms("Test 012"),a2=W.jz()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
a1.cI(["A test of the Material Lighting shader with cube textures and ","a directional light with a cube texture bump map."])
a1.cI(["\xab[Back to Tests|../]"])
s=document.getElementById(b)
if(s==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
r=E.mw(s,!0,!0,!0,!1)
q=new E.bv()
q.a=""
q.b=!0
p=O.jA()
q.y=p
p.b1(q.gfY(),q.gh0())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
q.scd(0,a)
q.saY(a)
o=F.kJ()
F.cS(o,a,a,1,1,1,0,0,1)
F.cS(o,a,a,1,1,0,1,0,3)
F.cS(o,a,a,1,1,0,0,1,2)
F.cS(o,a,a,1,1,-1,0,0,0)
F.cS(o,a,a,1,1,0,-1,0,0)
F.cS(o,a,a,1,1,0,0,-1,3)
o.aI()
q.scd(0,o)
p=new U.bx()
p.bm()
p.b1(p.geh(),p.geX())
p.e=null
p.f=V.dD()
p.r=0
n=r.x
m=new U.cv()
l=U.jB()
l.sc9(0,!0)
l.sc1(6.283185307179586)
l.sc3(0)
l.sa2(0,0)
l.sc2(100)
l.sN(0)
l.sbP(0.5)
m.b=l
k=m.gaF()
l.gt().n(0,k)
l=U.jB()
l.sc9(0,!0)
l.sc1(6.283185307179586)
l.sc3(0)
l.sa2(0,0)
l.sc2(100)
l.sN(0)
l.sbP(0.5)
m.c=l
l.gt().n(0,k)
m.d=null
m.r=m.f=m.e=!1
m.y=m.x=2.5
m.Q=4
m.ch=m.cx=!1
m.db=m.cy=0
m.dx=null
m.dy=0
m.fx=m.fr=null
j=new X.a8(!1,!1,!1)
i=m.d
m.d=j
l=new D.x(a0,i,j)
l.b=!0
m.J(l)
l=m.f
if(l!==!1){m.f=!1
l=new D.x("invertX",l,!1)
l.b=!0
m.J(l)}l=m.r
if(l!==!0){m.r=!0
l=new D.x("invertY",l,!0)
l.b=!0
m.J(l)}m.aV(n)
p.n(0,m)
n=r.x
m=new U.cu()
l=U.jB()
l.sc9(0,!0)
l.sc1(6.283185307179586)
l.sc3(0)
l.sa2(0,0)
l.sc2(100)
l.sN(0)
l.sbP(0.2)
m.b=l
l.gt().n(0,m.gaF())
m.c=null
m.d=!1
m.e=2.5
m.r=4
m.x=m.y=!1
m.z=0
m.Q=null
m.ch=0
m.cy=m.cx=null
j=new X.a8(!0,!1,!1)
i=m.c
m.c=j
l=new D.x(a0,i,j)
l.b=!0
m.J(l)
m.aV(n)
p.n(0,m)
n=r.x
m=new U.cw()
m.c=0.01
m.e=m.d=0
j=new X.a8(!1,!1,!1)
m.b=j
l=new D.x(a0,a,j)
l.b=!0
m.J(l)
m.aV(n)
p.n(0,m)
q.saY(p)
h=r.f.c0("../resources/diceColor")
g=new O.dB()
p=O.jA()
g.e=p
p.b1(g.gel(),g.gen())
p=new O.ao(g,"emission")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
g.f=p
p=new O.ao(g,"ambient")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
g.r=p
p=new O.ao(g,"diffuse")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
g.x=p
p=new O.ao(g,"invDiffuse")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
g.y=p
p=new O.hA(g,"specular")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
p.ch=100
g.z=p
p=new O.hw(g,"bump")
p.c=new A.R(!1,!1,!1)
g.Q=p
g.ch=null
p=new O.ao(g,"reflect")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
g.cx=p
p=new O.hz(g,"refract")
p.c=new A.R(!1,!1,!1)
p.f=new V.O(0,0,0)
p.ch=1
g.cy=p
p=new O.hv(g,"alpha")
p.c=new A.R(!1,!1,!1)
p.f=1
g.db=p
p=new D.cb()
p.bm()
p.e=[]
p.f=[]
p.r=[]
p.x=[]
p.z=p.y=null
p.cc(p.gej(),p.geV(),p.geZ())
g.dx=p
n=new O.hy()
n.b=new V.b1(0,0,0,0)
n.c=1
n.d=10
n.e=!1
g.dy=n
n=p.y
p=n==null?p.y=D.D():n
p.n(0,g.gfa())
p=g.dx
n=p.z
p=n==null?p.z=D.D():n
p.n(0,g.gb4())
g.fr=null
p=g.dx
f=V.jR()
n=U.km(V.kw(V.kB(),f,new V.B(1,1,-3)))
e=new V.O(1,1,1)
m=new D.bu()
m.c=new V.O(1,1,1)
m.a=V.mz()
m.d=V.jR()
m.e=V.my()
i=m.b
m.b=n
n.gt().n(0,m.gdP())
n=new D.x("mover",i,m.b)
n.b=!0
m.am(n)
if(!m.c.p(0,e)){i=m.c
m.c=e
n=new D.x("color",i,e)
n.b=!0
m.am(n)}p.n(0,m)
p=g.r
p.saK(0,new V.O(0.2,0.2,0.2))
p=g.x
p.saK(0,new V.O(0.8,0.8,0.8))
p=g.z
p.saK(0,new V.O(0.7,0.7,0.7))
g.r.saO(h)
g.x.saO(h)
g.z.saO(r.f.c0("../resources/diceSpecular"))
p=g.z
p.bF(new A.R(!0,!1,p.c.c))
p.cC(10)
g.Q.saO(r.f.c0("../resources/diceBumpMap"))
p=new M.di()
p.a=!0
n=O.jA()
p.e=n
n.b1(p.ger(),p.geu())
p.y=p.x=p.r=p.f=null
d=X.m3(a)
c=new X.dQ()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saY(a)
n=c.c
$.z().toString
if(!(Math.abs(n-1.0471975511965976)<1e-9)){c.c=1.0471975511965976
n=new D.x("fov",n,1.0471975511965976)
n.b=!0
c.aC(n)}n=c.d
$.z().toString
if(!(Math.abs(n-0.1)<1e-9)){c.d=0.1
n=new D.x("near",n,0.1)
n.b=!0
c.aC(n)}n=c.e
$.z().toString
if(!(Math.abs(n-2000)<1e-9)){c.e=2000
n=new D.x("far",n,2000)
n.b=!0
c.aC(n)}n=p.b
if(n!==c){if(n!=null)n.gt().P(0,p.gag())
i=p.b
p.b=c
c.gt().n(0,p.gag())
n=new D.x("camera",i,p.b)
n.b=!0
p.an(n)}n=p.c
if(n!==d){if(n!=null)n.gt().P(0,p.gag())
i=p.c
p.c=d
d.gt().n(0,p.gag())
n=new D.x("target",i,p.c)
n.b=!0
p.an(n)}p.sdq(a)
p.sdq(g)
p.e.n(0,q)
p.b.saY(U.km(V.ap(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=r.d
if(n!==p){if(n!=null)n.gt().P(0,r.gcj())
r.d=p
p.gt().n(0,r.gcj())
r.ck()}p=r.Q
if(p==null)p=r.Q=D.D()
n=p.b
p=n==null?p.b=[]:n
p.push(new Z.js(a1,g))
V.og(r)},
js:function js(a,b){this.a=a
this.b=b}},D={
D:function(){var s=new D.bw()
s.d=0
return s},
fT:function fT(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
P:function P(){this.b=null},
aC:function aC(){this.b=null},
aD:function aD(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bu:function bu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
al:function al(){},
cb:function cb(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={da:function da(a,b){this.a=a
this.b=b},dw:function dw(a,b){this.a=a
this.b=b},ho:function ho(){var _=this
_.d=_.c=_.b=_.a=null},cf:function cf(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hs:function hs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},bB:function bB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hO:function hO(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bC:function bC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dV:function dV(){},ct:function ct(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ir:function ir(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ez:function ez(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m3:function(a){var s=new X.hg(),r=new V.b1(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kG
if(r==null){r=V.kF(0,0,1,1)
$.kG=r}s.r=r
return s},
jy:function jy(){},
hg:function hg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(){}},V={
k7:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
ol:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.du(a-b,s)
return(a<0?a+s:a)+b},
C:function(a,b,c){if(a==null)return C.b.ab("null",c)
$.z().toString
return C.b.ab(C.d.dr(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bV:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.k)(a),++q){p=V.C(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.ab(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
k9:function(a){return C.d.hn(Math.pow(2,C.N.bY(Math.log(H.nU(a))/Math.log(2))))},
dD:function(){var s=$.kx
return s==null?$.kx=V.ap(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ap:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kw:function(a,b,c){var s=c.M(),r=b.aW(s).M(),q=s.aW(r),p=new V.B(a.a,a.b,a.c),o=r.L(0).X(p),n=q.L(0).X(p),m=s.L(0).X(p)
return V.ap(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
bf:function(){var s=$.kA
return s==null?$.kA=new V.aq(0,0):s},
kB:function(){var s=$.ar
return s==null?$.ar=new V.a3(0,0,0):s},
kF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dY(a,b,c,d)},
eA:function(){var s=$.kS
return s==null?$.kS=new V.B(0,0,0):s},
my:function(){var s=$.iH
return s==null?$.iH=new V.B(-1,0,0):s},
jR:function(){var s=$.iI
return s==null?$.iI=new V.B(0,1,0):s},
mz:function(){var s=$.iJ
return s==null?$.iJ=new V.B(0,0,1):s},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(){},
dC:function dC(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bA:function bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
og:function(a){P.mx(C.K,new V.ju(a))},
ms:function(a){var s=new V.i6()
s.dM(a,!0)
return s},
b0:function b0(){},
ju:function ju(a){this.a=a},
df:function df(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dp:function dp(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dr:function dr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dS:function dS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(){this.b=this.a=null},
i8:function i8(a){this.a=a},
i7:function i7(a){this.a=a},
i9:function i9(a){this.a=a}},U={
jB:function(){var s=new U.fU()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
km:function(a){var s=new U.bY()
s.a=a
return s},
fU:function fU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bY:function bY(){this.b=this.a=null},
bx:function bx(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cu:function cu(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cv:function cv(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cw:function cw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={di:function di(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mc:function(a,b){var s=a.as,r=new A.hu(b,s)
r.dL(b,s)
r.dI(a,b)
return r},
md:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+b0.gaf(b0)+b1.gaf(b1)+b2.gaf(b2)+b3.gaf(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.k)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.k)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.k)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.k)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
if(!b1.a)n=b1.c
else n=!0
if(!n)if(!b2.a){n=b2.c
m=n}else m=!0
else m=!0
l=s>0
if(!a6.a)s=a6.c
else s=!0
if(!s){if(!a7.a)s=a7.c
else s=!0
if(!s){if(!a8.a)s=a8.c
else s=!0
if(!s)if(!a9.a)s=a9.c
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a9.a
if(s)n=a9.c
else n=!0
j=n||l||o>0||m
if(!a7.a)o=a7.c
else o=!0
if(!o){if(!a8.a)o=a8.c
else o=!0
if(!o){if(s)s=a9.c
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!b0.a)s=b0.c
else s=!0
h=s||m}else h=!0
if(!b0.a)g=b0.c
else g=!0
f=a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c||b2.c||b3.c
e=a4>0
d=h||g||j||!1
c=l&&i
a1=a1&&f
b=$.aV()
if(h){s=$.aU()
b=new Z.aL(b.a|s.a)}if(g){s=$.aT()
b=new Z.aL(b.a|s.a)}if(f){s=$.aW()
b=new Z.aL(b.a|s.a)}if(e){s=$.aS()
b=new Z.aL(b.a|s.a)}return new A.hx(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jh:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
ji:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jh(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fH(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
no:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jh(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.c){r=s+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
nk:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.ji(b,r,"ambient")
b.a+="\n"},
nm:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.ji(b,r,"diffuse")
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
np:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.ji(b,r,"invDiffuse")
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
nv:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.ji(b,r,"specular")
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
nr:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
if(a.f.c){s+="uniform samplerCube bumpTxt;\n"
b.a=s
s+="\n"
b.a=s}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f
q=r.a
if(!q)r=r.c
else r=!0
if(!r||q)s=b.a=s+"   return normalize(normalVec);\n"
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
nt:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jh(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nu:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jh(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
nl:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fH(r)
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
if(typeof s!=="number")return s.ac()
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
s=a.b
if(!s.a)s=s.c
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
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)n.push("diffuse(norm, normDir)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
s=a.e
if(!s.a)s=s.c
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
nn:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fH(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ac()
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
if(!p.a)p=p.c
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
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
ns:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fH(r)
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
if(typeof s!=="number")return s.ac()
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
p=a.b
if(!p.a)p=p.c
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
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)i.push("diffuse(norm, normDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
p=a.e
if(!p.a)p=p.c
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
nw:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fH(r)
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
if(typeof s!=="number")return s.ac()
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
if(m){s=$.h7
if(s==null)s=$.h7=new E.eN(E.kU(),E.kV())
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
s=a.b
if(!s.a)s=s.c
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
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
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
nq:function(a,b){var s,r
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
if(!s.a)s=s.c
else s=!0
if(s)r.push("ambientColor")
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)r.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.k(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nx:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.aI("")
g.a="precision mediump float;\n"
g.a=i
s=a.k4
if(s){g.a=h
r=h}else r=i
if(a.r1){r+="varying vec3 binormalVec;\n"
g.a=r}if(a.r2){r+="varying vec2 txt2D;\n"
g.a=r}if(a.rx){r+="varying vec3 txtCube;\n"
g.a=r}if(a.k2){r+="varying vec3 objPos;\n"
g.a=r}r=g.a=(a.k3?g.a=r+"varying vec3 viewPos;\n":r)+"\n"
q=a.y1
if(q){r+="uniform mat4 colorMat;\n"
g.a=r}if(a.go){r+="uniform mat4 viewMat;\n"
g.a=r}if(a.dy)r=g.a=r+"uniform mat4 invViewMat;\n"
g.a=r+"\n"
A.no(a,g)
A.nk(a,g)
A.nm(a,g)
A.np(a,g)
A.nv(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.nt(a,g)
A.nu(a,g)}A.nr(a,g)
p=g.a+="// === Alpha ===\n"
p=g.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
g.a=p}o=o.c
p=(o?g.a=p+"uniform samplerCube alphaTxt;\n":p)+"float alphaValue()\n"
g.a=p
p=g.a=p+"{\n"
if(!n)m=o
else m=!0
if(!m)p=g.a=p+"   return 1.0;\n"
else if(o){if(n){p+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
g.a=p}else{p+="   float a = textureCube(alphaTxt, txtCube).a;\n"
g.a=p}p+="   if (a <= 0.000001) discard;\n"
g.a=p
p+="   return a;\n"
g.a=p}else if(n){p+="   return alpha;\n"
g.a=p}p+="}\n"
g.a=p
g.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.k)(o),++l)A.nl(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.k)(o),++l)A.nn(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.k)(o),++l)A.ns(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.k)(o),++l)A.nw(a,o[l],g)
A.nq(a,g)}o=g.a+="// === Main ===\n"
o+="\n"
g.a=o
o+="void main()\n"
g.a=o
o+="{\n"
g.a=o
o=g.a=o+"   float alpha = alphaValue();\n"
if(s){s=o+"   vec3 norm = normal();\n"
g.a=s}else s=o
if(r)s=g.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
k=[]
if(p){g.a=s+u.o
k.push("lightAccum")
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setAmbientColor();\n"
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setDiffuseColor();\n"
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setInvDiffuseColor();\n"
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.al(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.al(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.al(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.k)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.al(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(!s.a)s=s.c
else s=!0
if(s)k.push("emissionColor()")
s=a.r
if(!s.a)s=s.c
else s=!0
if(s)k.push("reflect(refl)")
s=a.x
if(!s.a)s=s.c
else s=!0
if(s)k.push("refract(refl)")
if(k.length<=0)k.push("vec3(0.0, 0.0, 0.0)")
s=g.a+="   vec4 objClr = vec4("+C.a.k(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
ny:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bb+"];\n"
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
nA:function(a,b){var s
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
nz:function(a,b){var s
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
nC:function(a,b){var s,r
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
nD:function(a,b){var s,r
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
nB:function(a,b){var s
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
nE:function(a,b){var s
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
fH:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.al(a,1)},
jQ:function(a,b,c,d,e){var s=new A.ix(a,c,e)
s.f=d
P.jJ(d,0,!1)
return s},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
fM:function fM(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a,b){var _=this
_.cU=_.hB=_.bc=_.as=_.bb=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hJ=_.hI=_.hH=_.bX=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.d5=_.hG=_.d4=_.d3=_.hF=_.d2=_.d1=_.d0=_.hE=_.d_=_.cZ=_.cY=_.hD=_.cX=_.cW=_.hC=_.cV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fQ:function fQ(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bb=b5
_.as=b6
_.bc=b7},
en:function en(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eo:function eo(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
er:function er(a,b,c,d,e,f,g,h,i,j){var _=this
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
eu:function eu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
e1:function e1(){},
iw:function iw(){},
iC:function iC(a){this.a=a},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
el:function el(a,b,c){this.a=a
this.c=b
this.d=c},
em:function em(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
ep:function ep(a,b,c){this.a=a
this.c=b
this.d=c},
eq:function eq(a,b,c){this.a=a
this.c=b
this.d=c},
es:function es(a,b,c){this.a=a
this.c=b
this.d=c},
et:function et(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jg:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cS:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.B(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.B(s+a5,r+a3,q+a4)
o=new V.B(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.B(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.jg(g)
j=F.jg(f)
i=F.oi(a1,a2,new F.jf(h,F.jg(e),F.jg(d),j,k,a0),b)
if(i!=null)a.fX(i)},
oi:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.kJ()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.cH(new V.b1(n,0,0,1),new V.aq(p,1))
c.$3(m,p,0)
r.push(m.bO(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cH(new V.b1(h,g,f,1),new V.aq(p,k))
c.$3(m,p,l)
r.push(m.bO(d))}}s.d.fs(a+1,b+1,r)
return s},
dj:function(a,b,c){var s=new F.hc(),r=a.a
if(r==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a1()
return s},
kJ:function(){var s=new F.i2(),r=new F.iL(s)
r.b=!1
r.c=[]
s.a=r
r=new F.i5(s)
r.b=[]
s.b=r
r=new F.i4(s)
r.b=[]
s.c=r
r=new F.i3(s)
r.b=[]
s.d=r
return s},
kT:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iK(),p=new F.iQ()
p.b=[]
q.b=p
p=new F.iP()
p.b=[]
p.c=[]
q.c=p
p=new F.iM()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lD()
q.e=0
p=$.aV()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aU().a)!==0?e:r
q.x=(s&$.aT().a)!==0?b:r
q.y=(s&$.bp().a)!==0?f:r
q.z=(s&$.aW().a)!==0?g:r
q.Q=(s&$.lE().a)!==0?c:r
q.ch=(s&$.bW().a)!==0?i:0
q.cx=(s&$.aS().a)!==0?a:r
return q},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hc:function hc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(){this.b=this.a=null},
hS:function hS(){this.a=null},
i2:function i2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i3:function i3(a){this.a=a
this.b=null},
i4:function i4(a){this.a=a
this.b=null},
i5:function i5(a){this.a=a
this.b=null},
iK:function iK(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iS:function iS(a){this.a=a},
iR:function iR(a){this.a=a},
iL:function iL(a){this.a=a
this.c=this.b=null},
iM:function iM(){this.d=this.c=this.b=null},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(){this.c=this.b=null},
iQ:function iQ(){this.b=null}},T={ii:function ii(){},ij:function ij(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ik:function ik(a){var _=this
_.a=a
_.e=_.d=_.c=null},il:function il(a,b,c,d,e,f,g){var _=this
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
H.jH.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gO:function(a){return H.cp(a)},
i:function(a){return"Instance of '"+H.d(H.dW(a))+"'"}}
J.hl.prototype={
i:function(a){return String(a)},
gO:function(a){return a?519018:218159}}
J.ca.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gO:function(a){return 0}}
J.b9.prototype={
gO:function(a){return 0},
i:function(a){return String(a)}}
J.dR.prototype={}
J.bk.prototype={}
J.af.prototype={
i:function(a){var s=a[$.ls()]
if(s==null)return this.dF(a)
return"JavaScript function for "+H.d(J.X(s))}}
J.a7.prototype={
he:function(a,b){var s
if(!!a.fixed$length)H.p(P.w("removeAt"))
s=a.length
if(b>=s)throw H.c(P.dX(b,null))
return a.splice(b,1)[0]},
P:function(a,b){var s
if(!!a.fixed$length)H.p(P.w("remove"))
for(s=0;s<a.length;++s)if(J.L(a[s],b)){a.splice(s,1)
return!0}return!1},
a8:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.w("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.k)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b2(a))}},
k:function(a,b){var s,r,q=P.jJ(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fV:function(a){return this.k(a,"")},
fR:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.b2(a))}throw H.c(H.jF())},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gbe:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jF())},
cJ:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.b2(a))}return!1},
aR:function(a,b){if(!!a.immutable$list)H.p(P.w("sort"))
H.mv(a,b==null?J.nb():b)},
dB:function(a){return this.aR(a,null)},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.L(a[s],b))return!0
return!1},
i:function(a){return P.jE(a,"[","]")},
gK:function(a){return new J.Y(a,a.length)},
gO:function(a){return H.cp(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.w("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bU(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bU(a,b))
a[b]=c},
$ii:1,
$if:1}
J.du.prototype={}
J.Y.prototype={
gB:function(a){return this.d},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.k(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b8.prototype={
aL:function(a,b){var s
if(typeof b!="number")throw H.c(H.aQ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbd(b)
if(this.gbd(a)===s)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
hn:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.w(""+a+".toInt()"))},
bY:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
dr:function(a,b){var s
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gO:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
du:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cD(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cD(a,b)},
cD:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
b8:function(a,b){var s
if(a>0)s=this.fi(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fi:function(a,b){return b>31?0:a>>>b},
$iV:1,
$iN:1}
J.c9.prototype={$ir:1}
J.c8.prototype={}
J.ak.prototype={
bN:function(a,b){if(b<0)throw H.c(H.bU(a,b))
if(b>=a.length)H.p(H.bU(a,b))
return a.charCodeAt(b)},
b5:function(a,b){if(b>=a.length)throw H.c(H.bU(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.c(P.kg(b,null,null))
return a+b},
bk:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
b2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dX(b,null))
if(b>c)throw H.c(P.dX(b,null))
if(c>a.length)throw H.c(P.dX(c,null))
return a.substring(b,c)},
al:function(a,b){return this.b2(a,b,null)},
hq:function(a){return a.toLowerCase()},
u:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ab:function(a,b){var s=b-a.length
if(s<=0)return a
return this.u(" ",s)+a},
fB:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aG(c,0,s,null,null))
return H.lo(a,b,c)},
w:function(a,b){return this.fB(a,b,0)},
aL:function(a,b){var s
if(typeof b!="string")throw H.c(H.aQ(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gO:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gl:function(a){return a.length},
$iK:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bN(this.a,b)}}
H.i.prototype={}
H.ce.prototype={
gK:function(a){return new H.aF(this,this.gl(this))},
bj:function(a,b){return this.dE(0,b)}}
H.aF.prototype={
gB:function(a){var s=this.d
return s},
q:function(){var s,r=this,q=r.a,p=J.bn(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.b2(q))
s=r.c
if(typeof o!=="number")return H.q(o)
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
H.bb.prototype={
gK:function(a){return new H.cg(J.aX(this.a),this.b)},
gl:function(a){return J.aY(this.a)},
C:function(a,b){return this.b.$1(J.fI(this.a,b))}}
H.c2.prototype={$ii:1}
H.cg.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){var s=this.a
return s}}
H.ch.prototype={
gl:function(a){return J.aY(this.a)},
C:function(a,b){return this.b.$1(J.fI(this.a,b))}}
H.bl.prototype={
gK:function(a){return new H.eD(J.aX(this.a),this.b)}}
H.eD.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.c4.prototype={}
H.ex.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bM.prototype={}
H.iu.prototype={
aa:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dL.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dv.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.ew.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hR.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fg.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bs.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lq(r==null?"unknown":r)+"'"},
ghu:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ig.prototype={}
H.ib.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lq(s)+"'"}}
H.bX.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bX))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gO:function(a){var s,r=this.c
if(r==null)s=H.cp(this.a)
else s=typeof r!=="object"?J.W(r):H.cp(r)
return(s^H.cp(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dW(s))+"'")}}
H.e_.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.v.prototype={
gl:function(a){return this.a},
ga0:function(a){return new H.aE(this)},
ght:function(a){return H.mb(new H.aE(this),new H.hn(this))},
fC:function(a,b){var s=this.b
if(s==null)return!1
return this.e3(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b6(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b6(p,b)
q=r==null?n:r.b
return q}else return o.fU(b)},
fU:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cu(q,J.W(a)&0x3ffffff)
r=this.d6(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cn(s==null?m.b=m.bC():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cn(r==null?m.c=m.bC():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bC()
p=J.W(b)&0x3ffffff
o=m.cu(q,p)
if(o==null)m.bG(q,p,[m.bD(b,c)])
else{n=m.d6(o,b)
if(n>=0)o[n].b=c
else o.push(m.bD(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b2(s))
r=r.c}},
cn:function(a,b,c){var s=this.b6(a,b)
if(s==null)this.bG(a,b,this.bD(b,c))
else s.b=c},
ee:function(){this.r=this.r+1&67108863},
bD:function(a,b){var s,r=this,q=new H.hq(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ee()
return q},
d6:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1},
i:function(a){return P.kv(this)},
b6:function(a,b){return a[b]},
cu:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
e3:function(a,b){return this.b6(a,b)!=null},
bC:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bG(r,s,r)
this.e7(r,s)
return r}}
H.hn.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.n9(this.a).ap("2(1)")}}
H.hq.prototype={}
H.aE.prototype={
gl:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.dy(s,s.r)
r.c=s.e
return r}}
H.dy.prototype={
gB:function(a){return this.d},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b2(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jn.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.jo.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jp.prototype={
$1:function(a){return this.a(a)}}
H.hm.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cl.prototype={}
H.bD.prototype={
gl:function(a){return a.length},
$it:1}
H.bd.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]},
m:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.ck.prototype={
m:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dF.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dG.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dH.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dI.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dJ.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.cm.prototype={
gl:function(a){return a.length},
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.dK.prototype={
gl:function(a){return a.length},
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
H.ac.prototype={
ap:function(a){return H.fu(v.typeUniverse,this,a)},
co:function(a){return H.mZ(v.typeUniverse,this,a)}}
H.eT.prototype={}
H.eO.prototype={
i:function(a){return this.a}}
H.cO.prototype={}
P.iV.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
P.iU.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iW.prototype={
$0:function(){this.a.$0()}}
P.iX.prototype={
$0:function(){this.a.$0()}}
P.cN.prototype={
dT:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bT(new P.jb(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dU:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bT(new P.ja(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$ics:1}
P.jb.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ja.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dH(s,o)}q.c=p
r.d.$1(q)}}
P.bQ.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bm.prototype={
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
if(r instanceof P.bQ){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aX(s)
if(o instanceof P.bm){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cK.prototype={
gK:function(a){return new P.bm(this.a())}}
P.eE.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.cs.prototype={}
P.je.prototype={}
P.jj.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.X(this.b)
throw s}}
P.j3.prototype={
hj:function(a){var s,r,q,p=null
try{if(C.e===$.ah){a.$0()
return}P.nH(p,p,this,a)}catch(q){s=H.ay(q)
r=H.k5(q)
P.ld(p,p,this,s,r)}},
hk:function(a,b){var s,r,q,p=null
try{if(C.e===$.ah){a.$1(b)
return}P.nI(p,p,this,a,b)}catch(q){s=H.ay(q)
r=H.k5(q)
P.ld(p,p,this,s,r)}},
hl:function(a,b){return this.hk(a,b,t.z)},
fw:function(a){return new P.j4(this,a)},
cN:function(a,b){return new P.j5(this,a,b)}}
P.j4.prototype={
$0:function(){return this.a.hj(this.b)}}
P.j5.prototype={
$1:function(a){return this.a.hl(this.b,a)},
$S:function(){return this.c.ap("~(0)")}}
P.cy.prototype={
gK:function(a){var s=new P.cz(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e1(b)
return r}},
e1:function(a){var s=this.d
if(s==null)return!1
return this.bt(s[this.bq(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cp(s==null?q.b=P.jU():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cp(r==null?q.c=P.jU():r,b)}else return q.dW(0,b)},
dW:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jU()
s=q.bq(b)
r=p[s]
if(r==null)p[s]=[q.bp(b)]
else{if(q.bt(r,b)>=0)return!1
r.push(q.bp(b))}return!0},
P:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.f7(this.c,b)
else return this.f6(0,b)},
f6:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bq(b)
r=n[s]
q=o.bt(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cF(p)
return!0},
cp:function(a,b){if(a[b]!=null)return!1
a[b]=this.bp(b)
return!0},
f7:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cF(s)
delete a[b]
return!0},
cq:function(){this.r=1073741823&this.r+1},
bp:function(a){var s,r=this,q=new P.j2(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cq()
return q},
cF:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cq()},
bq:function(a){return J.W(a)&1073741823},
bt:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.L(a[r].a,b))return r
return-1}}
P.j2.prototype={}
P.cz.prototype={
gB:function(a){return this.d},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b2(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c7.prototype={}
P.cd.prototype={$ii:1,$if:1}
P.A.prototype={
gK:function(a){return new H.aF(a,this.gl(a))},
C:function(a,b){return this.h(a,b)},
gd8:function(a){return this.gl(a)===0},
hp:function(a,b){var s,r,q,p,o=this
if(o.gd8(a)){s=J.kr(0)
return s}r=o.h(a,0)
q=P.jJ(o.gl(a),r,!0)
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.q(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
ho:function(a){return this.hp(a,!0)},
i:function(a){return P.jE(a,"[","]")}}
P.dA.prototype={}
P.ht.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:16}
P.an.prototype={
F:function(a,b){var s,r
for(s=J.aX(this.ga0(a));s.q();){r=s.gB(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aY(this.ga0(a))},
i:function(a){return P.kv(a)}}
P.cG.prototype={
a8:function(a,b){var s
for(s=J.aX(b);s.q();)this.n(0,s.gB(s))},
i:function(a){return P.jE(this,"{","}")},
C:function(a,b){var s,r,q,p="index"
P.lR(b,p)
P.kE(b,p)
for(s=P.mJ(this,this.r),r=0;s.q();){q=s.d
if(b===r)return q;++r}throw H.c(P.H(b,this,p,null,r))},
$ii:1,
$if:1}
P.cA.prototype={}
P.db.prototype={}
P.dd.prototype={}
P.h6.prototype={}
P.hk.prototype={
i:function(a){return this.a}}
P.hj.prototype={
e4:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.aI("")
if(p>b)o.a+=C.b.b2(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.lP(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.iF.prototype={}
P.iG.prototype={
fD:function(a){var s,r,q,p=null,o=P.jM(0,p,a.length)
if(o==null)throw H.c(new P.bH(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jc(r)
if(q.e9(a,0,o)!==o){C.b.bN(a,o-1)
q.bI()}return new Uint8Array(r.subarray(0,H.n3(0,q.b,r.length)))}}
P.jc.prototype={
bI:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fp:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bI()
return!1}},
e9:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bN(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.b5(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fp(p,C.b.b5(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bI()}else if(p<=2047){o=l.b
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
P.a6.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a6&&this.a===b.a&&!0},
aL:function(a,b){return C.c.aL(this.a,b.a)},
gO:function(a){var s=this.a
return(s^C.c.b8(s,30))&1073741823},
i:function(a){var s=this,r=P.m_(H.ml(s)),q=P.dg(H.mj(s)),p=P.dg(H.mf(s)),o=P.dg(H.mg(s)),n=P.dg(H.mi(s)),m=P.dg(H.mk(s)),l=P.m0(H.mh(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.V.prototype={}
P.b3.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gO:function(a){return C.c.gO(this.a)},
aL:function(a,b){return C.c.aL(this.a,b.a)},
i:function(a){var s,r,q,p=new P.h3(),o=this.a
if(o<0)return"-"+new P.b3(0-o).i(0)
s=p.$1(C.c.W(o,6e7)%60)
r=p.$1(C.c.W(o,1e6)%60)
q=new P.h2().$1(o%1e6)
return""+C.c.W(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.h2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.h3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.G.prototype={}
P.d6.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h9(s)
return"Assertion failed"}}
P.dM.prototype={
i:function(a){return"Throw of null."}}
P.a1.prototype={
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbs()+o+m
if(!q.a)return l
s=q.gbr()
r=P.h9(q.b)
return l+s+": "+r}}
P.bH.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.ds.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var s,r=this.b
if(typeof r!=="number")return r.a5()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gl:function(a){return this.f}}
P.ey.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ev.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dc.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h9(s)+"."}}
P.dP.prototype={
i:function(a){return"Out of Memory"},
$iG:1}
P.cq.prototype={
i:function(a){return"Stack Overflow"},
$iG:1}
P.de.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eQ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hf.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.b2(q,0,75)+"..."
return r+"\n"+q}}
P.hh.prototype={}
P.r.prototype={}
P.f.prototype={
bj:function(a,b){return new H.bl(this,b)},
gl:function(a){var s,r=this.gK(this)
for(s=0;r.q();)++s
return s},
gaA:function(a){var s,r=this.gK(this)
if(!r.q())throw H.c(H.jF())
s=r.gB(r)
if(r.q())throw H.c(H.m5())
return s},
C:function(a,b){var s,r,q
P.kE(b,"index")
for(s=this.gK(this),r=0;s.q();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.H(b,this,"index",null,r))},
i:function(a){return P.m4(this,"(",")")}}
P.dt.prototype={}
P.am.prototype={$ii:1,$if:1}
P.dz.prototype={}
P.aa.prototype={
gO:function(a){return P.J.prototype.gO.call(C.h,this)},
i:function(a){return"null"}}
P.N.prototype={}
P.J.prototype={constructor:P.J,$iJ:1,
p:function(a,b){return this===b},
gO:function(a){return H.cp(this)},
i:function(a){return"Instance of '"+H.d(H.dW(this))+"'"},
toString:function(){return this.i(this)}}
P.K.prototype={}
P.aI.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.m.prototype={}
W.fJ.prototype={
gl:function(a){return a.length}}
W.d4.prototype={
i:function(a){return String(a)}}
W.d5.prototype={
i:function(a){return String(a)}}
W.bq.prototype={$ibq:1}
W.d8.prototype={}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={
ca:function(a,b,c){if(c!=null)return a.getContext(b,P.nW(c))
return a.getContext(b)},
dt:function(a,b){return this.ca(a,b,null)},
$ib_:1}
W.ae.prototype={
gl:function(a){return a.length}}
W.fV.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bZ.prototype={
gl:function(a){return a.length}}
W.fW.prototype={}
W.a5.prototype={}
W.aj.prototype={}
W.fX.prototype={
gl:function(a){return a.length}}
W.fY.prototype={
gl:function(a){return a.length}}
W.fZ.prototype={
gl:function(a){return a.length}}
W.c_.prototype={}
W.h0.prototype={
i:function(a){return String(a)}}
W.c0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.c1.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaz(a))+" x "+H.d(this.gat(a))},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aw(b)
s=a.left==s.gbf(b)&&a.top==s.gbh(b)&&this.gaz(a)==s.gaz(b)&&this.gat(a)==s.gat(b)}else s=!1
return s},
gO:function(a){return W.kZ(J.W(a.left),J.W(a.top),J.W(this.gaz(a)),J.W(this.gat(a)))},
gcO:function(a){return a.bottom},
gat:function(a){return a.height},
gbf:function(a){return a.left},
gc6:function(a){return a.right},
gbh:function(a){return a.top},
gaz:function(a){return a.width},
$iab:1}
W.dh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.h1.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gd8:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var s=this.ho(this)
return new J.Y(s,s.length)}}
W.y.prototype={
gfv:function(a){return new W.iZ(a)},
gcP:function(a){return new W.eG(a,a.children)},
gcQ:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.a5()
if(q<0)q=-q*0
if(typeof p!=="number")return p.a5()
if(p<0)p=-p*0
return new P.ab(s,r,q,p,t.q)},
i:function(a){return a.localName},
a9:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kp
if(s==null){s=[]
r=new W.co(s)
s.push(W.kX(null))
s.push(W.l2())
$.kp=r
d=r}else d=s
s=$.ko
if(s==null){s=new W.fv(d)
$.ko=s
c=s}else{s.a=d
c=s}}if($.aB==null){s=document
r=s.implementation.createHTMLDocument("")
$.aB=r
$.jC=r.createRange()
r=$.aB.createElement("base")
t.v.a(r)
r.href=s.baseURI
$.aB.head.appendChild(r)}s=$.aB
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aB
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.aB.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.Q,a.tagName)){$.jC.selectNodeContents(q)
s=$.jC
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.aB.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.aB.body)J.ke(q)
c.cb(p)
document.adoptNode(p)
return p},
fF:function(a,b,c){return this.a9(a,b,c,null)},
dw:function(a,b){a.textContent=null
a.appendChild(this.a9(a,b,null,null))},
gdn:function(a){return a.tagName},
$iy:1}
W.h4.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
fq:function(a,b,c,d){if(c!=null)this.dX(a,b,c,!1)},
dX:function(a,b,c,d){return a.addEventListener(b,H.bT(c,1),!1)},
$ib:1}
W.b4.prototype={$ib4:1}
W.dk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.dl.prototype={
gl:function(a){return a.length}}
W.dn.prototype={
gl:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.hi.prototype={
gl:function(a){return a.length}}
W.b6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.b7.prototype={
gcR:function(a){return a.data},
$ib7:1}
W.by.prototype={$iby:1}
W.ba.prototype={$iba:1}
W.hr.prototype={
i:function(a){return String(a)}}
W.hJ.prototype={
gl:function(a){return a.length}}
W.hK.prototype={
h:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
ga0:function(a){var s=[]
this.F(a,new W.hL(s))
return s},
gl:function(a){return a.size}}
W.hL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hM.prototype={
h:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
ga0:function(a){var s=[]
this.F(a,new W.hN(s))
return s},
gl:function(a){return a.size}}
W.hN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.bc.prototype={$ibc:1}
W.dE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.a2.prototype={$ia2:1}
W.T.prototype={
gaA:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jN("No elements"))
if(r>1)throw H.c(P.jN("More than one element"))
s=s.firstChild
s.toString
return s},
a8:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gK:function(a){var s=this.a.childNodes
return new W.c5(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.u.prototype={
hd:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
hh:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lI(s,b,a)}catch(q){H.ay(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dD(a):s},
f8:function(a,b,c){return a.replaceChild(b,c)},
$iu:1}
W.cn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.be.prototype={
gl:function(a){return a.length},
$ibe:1}
W.dT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.i_.prototype={
h:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
ga0:function(a){var s=[]
this.F(a,new W.i0(s))
return s},
gl:function(a){return a.size}}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)}}
W.e0.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.e3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bg.prototype={$ibg:1}
W.e4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.bh.prototype={
gl:function(a){return a.length},
$ibh:1}
W.ic.prototype={
h:function(a,b){return a.getItem(H.k_(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga0:function(a){var s=[]
this.F(a,new W.id(s))
return s},
gl:function(a){return a.length}}
W.id.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.cr.prototype={
a9:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
s=W.m1("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.T(r).a8(0,new W.T(s))
return r}}
W.ea.prototype={
a9:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.a9(s.createElement("table"),b,c,d)
s.toString
s=new W.T(s)
q=s.gaA(s)
q.toString
s=new W.T(q)
p=s.gaA(s)
r.toString
p.toString
new W.T(r).a8(0,new W.T(p))
return r}}
W.eb.prototype={
a9:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.w.a9(s.createElement("table"),b,c,d)
s.toString
s=new W.T(s)
q=s.gaA(s)
r.toString
q.toString
new W.T(r).a8(0,new W.T(q))
return r}}
W.bK.prototype={$ibK:1}
W.aK.prototype={$iaK:1}
W.ag.prototype={$iag:1}
W.ec.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.ed.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.io.prototype={
gl:function(a){return a.length}}
W.bi.prototype={$ibi:1}
W.bj.prototype={$ibj:1}
W.eh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.is.prototype={
gl:function(a){return a.length}}
W.at.prototype={}
W.iE.prototype={
i:function(a){return String(a)}}
W.eB.prototype={
gl:function(a){return a.length}}
W.aM.prototype={
gfI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
gfH:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$iaM:1}
W.bN.prototype={
f9:function(a,b){return a.requestAnimationFrame(H.bT(b,1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bO.prototype={$ibO:1}
W.eH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cx.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var s
if(b==null)return!1
if(t.q.b(b)){s=J.aw(b)
s=a.left==s.gbf(b)&&a.top==s.gbh(b)&&a.width==s.gaz(b)&&a.height==s.gat(b)}else s=!1
return s},
gO:function(a){return W.kZ(J.W(a.left),J.W(a.top),J.W(a.width),J.W(a.height))},
gat:function(a){return a.height},
gaz:function(a){return a.width}}
W.eU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.cB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.fk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$it:1,
$if:1}
W.iY.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga0(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.k)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
ga0:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.iZ.prototype={
h:function(a,b){return this.a.getAttribute(H.k_(b))},
gl:function(a){return this.ga0(this).length}}
W.jD.prototype={}
W.eP.prototype={}
W.j_.prototype={
$1:function(a){return this.a.$1(a)}}
W.jT.prototype={}
W.bP.prototype={
dO:function(a){var s
if($.eV.a===0){for(s=0;s<262;++s)$.eV.m(0,C.P[s],W.o5())
for(s=0;s<12;++s)$.eV.m(0,C.k[s],W.o6())}},
aH:function(a){return $.lG().w(0,W.c3(a))},
ai:function(a,b,c){var s=$.eV.h(0,H.d(W.c3(a))+"::"+b)
if(s==null)s=$.eV.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia9:1}
W.E.prototype={
gK:function(a){return new W.c5(a,this.gl(a))}}
W.co.prototype={
aH:function(a){return C.a.cJ(this.a,new W.hQ(a))},
ai:function(a,b,c){return C.a.cJ(this.a,new W.hP(a,b,c))},
$ia9:1}
W.hQ.prototype={
$1:function(a){return a.aH(this.a)}}
W.hP.prototype={
$1:function(a){return a.ai(this.a,this.b,this.c)}}
W.cH.prototype={
dS:function(a,b,c,d){var s,r,q
this.a.a8(0,c)
s=b.bj(0,new W.j7())
r=b.bj(0,new W.j8())
this.b.a8(0,s)
q=this.c
q.a8(0,C.R)
q.a8(0,r)},
aH:function(a){return this.a.w(0,W.c3(a))},
ai:function(a,b,c){var s=this,r=W.c3(a),q=s.c
if(q.w(0,H.d(r)+"::"+b))return s.d.ft(c)
else if(q.w(0,"*::"+b))return s.d.ft(c)
else{q=s.b
if(q.w(0,H.d(r)+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,H.d(r)+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$ia9:1}
W.j7.prototype={
$1:function(a){return!C.a.w(C.k,a)}}
W.j8.prototype={
$1:function(a){return C.a.w(C.k,a)}}
W.fm.prototype={
ai:function(a,b,c){if(this.dG(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.j9.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.fl.prototype={
aH:function(a){var s
if(t.Y.b(a))return!1
s=t.k.b(a)
if(s&&W.c3(a)==="foreignObject")return!1
if(s)return!0
return!1},
ai:function(a,b,c){if(b==="is"||C.b.bk(b,"on"))return!1
return this.aH(a)},
$ia9:1}
W.c5.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.d2(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return this.d}}
W.a9.prototype={}
W.j6.prototype={}
W.fv.prototype={
cb:function(a){var s=this,r=new W.jd(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aU:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.ke(a)
else b.removeChild(a)},
fe:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.lL(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.ay(p)}r="element unprintable"
try{r=J.X(a)}catch(p){H.ay(p)}try{q=W.c3(a)
this.fd(a,b,n,r,q,m,l)}catch(p){if(H.ay(p) instanceof P.a1)throw p
else{this.aU(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fd:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aU(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aH(a)){m.aU(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ai(a,"is",g)){m.aU(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.ga0(f).slice(0)
for(q=f.ga0(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.lQ(p)
H.k_(p)
if(!o.ai(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.cb(a.content)}}
W.jd.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fe(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aU(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.jN("Corrupt HTML")
throw H.c(q)}}catch(o){H.ay(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fa.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fh.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
P.cP.prototype={$ib7:1,
gcR:function(a){return this.a}}
P.jk.prototype={
$2:function(a,b){this.a[a]=b},
$S:17}
P.dm.prototype={
gb7:function(){return new H.bb(new H.bl(this.b,new P.hd()),new P.he())},
m:function(a,b,c){var s=this.gb7()
J.lO(s.b.$1(J.fI(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aY(this.gb7().a)},
h:function(a,b){var s=this.gb7()
return s.b.$1(J.fI(s.a,b))},
gK:function(a){var s=P.jK(this.gb7(),!1)
return new J.Y(s,s.length)}}
P.hd.prototype={
$1:function(a){return t.h.b(a)}}
P.he.prototype={
$1:function(a){return t.h.a(a)}}
P.f9.prototype={
gc6:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
gcO:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
p:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.q.b(b)){s=n.a
r=J.aw(b)
if(s==r.gbf(b)){q=n.b
if(q==r.gbh(b)){p=n.c
if(typeof s!=="number")return s.v()
if(typeof p!=="number")return H.q(p)
o=n.$ti.c
if(o.a(s+p)===r.gc6(b)){s=n.d
if(typeof q!=="number")return q.v()
if(typeof s!=="number")return H.q(s)
r=o.a(q+s)===r.gcO(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gO:function(a){var s,r=this,q=r.a,p=J.W(q),o=r.b,n=J.W(o),m=r.c
if(typeof q!=="number")return q.v()
if(typeof m!=="number")return H.q(m)
s=r.$ti.c
m=C.c.gO(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.v()
if(typeof q!=="number")return H.q(q)
q=C.c.gO(s.a(o+q))
return P.mI(P.j1(P.j1(P.j1(P.j1(0,p),n),m),q))}}
P.ab.prototype={
gbf:function(a){return this.a},
gbh:function(a){return this.b},
gaz:function(a){return this.c},
gat:function(a){return this.d}}
P.bz.prototype={$ibz:1}
P.dx.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bE.prototype={$ibE:1}
P.dN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hU.prototype={
gl:function(a){return a.length}}
P.bI.prototype={$ibI:1}
P.e9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcP:function(a){return new P.dm(a,new W.T(a))},
a9:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.kX(null))
n.push(W.l2())
n.push(new W.fl())
c=new W.fv(new W.co(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.m.fF(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.T(q)
o=n.gaA(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bL.prototype={$ibL:1}
P.ei.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eY.prototype={}
P.eZ.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.fr.prototype={}
P.fs.prototype={}
P.fN.prototype={
gl:function(a){return a.length}}
P.fO.prototype={
h:function(a,b){return P.aR(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aR(s.value[1]))}},
ga0:function(a){var s=[]
this.F(a,new P.fP(s))
return s},
gl:function(a){return a.size}}
P.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d7.prototype={
gl:function(a){return a.length}}
P.aA.prototype={}
P.dO.prototype={
gl:function(a){return a.length}}
P.eF.prototype={}
P.dZ.prototype={
hm:function(a,b,c,d,e,f,g){var s
if(t.s.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.nX(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jw("Incorrect number or type of arguments"))}}
P.e5.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.H(b,a,null,null,null))
s=P.aR(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.fe.prototype={}
P.ff.prototype={}
K.az.prototype={
au:function(a,b){return!0},
i:function(a){return"all"}}
K.dq.prototype={
au:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)if(s[q].au(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.k)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.Z.prototype={
au:function(a,b){return!this.dC(0,b)},
i:function(a){return"!["+this.cf(0)+"]"}}
K.hV.prototype={
au:function(a,b){if(typeof b!=="number")return H.q(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.jL(this.a),r=H.jL(this.b)
return s+".."+r}}
K.i1.prototype={
dK:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
s=new H.v(t.E)
for(r=new H.aF(a,a.gl(a));r.q();){q=r.d
s.m(0,q,!0)}p=P.jK(new H.aE(s),!0)
C.a.dB(p)
this.a=p},
au:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.jO(this.a)}}
L.e6.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.it(this.a.j(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fQ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
if(p.au(0,a))return p}return null},
i:function(a){return this.b},
cE:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.w(0,l))m+=" (consume)"
for(l=new H.aE(n.d.c),l=l.gK(l);l.q();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.w(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.k)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.ef.prototype={
i:function(a){var s=H.kb(this.b,"\n","\\n"),r=H.kb(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eg.prototype={
aw:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.k)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.ip.prototype={
j:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.e6(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
I:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eg(a)
s.c=new H.v(t.i)
this.b.m(0,a,s)}return s},
c7:function(a){return this.hr(a)},
hr:function(a){var s=this
return P.nj(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$c7(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.he(a0,0)
else{if(!r.q()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fQ(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jO(b)
throw H.c(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.p(P.w("removeRange"))
P.jM(0,k,b.length)
b.splice(0,k-0)
C.a.a8(a0,b)
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
if(d.d!=null){g=P.jO(c)
f=d.d
e=f.c.h(0,g)
n=new L.ef(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.w(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mG()
case 1:return P.mH(o)}}},t.j)},
i:function(a){var s,r=new P.aI(""),q=this.d
if(q!=null)r.a=q.cE()+"\n"
for(q=this.a,q=q.ght(q),q=new H.cg(J.aX(q.a),q.b);q.q();){s=q.a
if(s!=this.d)r.a+=s.cE()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.it.prototype={
i:function(a){return this.b.b+": "+this.cf(0)}}
O.bt.prototype={
bm:function(){this.a=[]
this.c=this.b=null},
cc:function(a,b,c){this.b=b
this.c=a},
b1:function(a,b){return this.cc(a,null,b)},
eU:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dN:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.Y(s,s.length)},
C:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.eU([b])){s=this.a
r=s.length
s.push(b)
this.dN(r,[b])}},
$if:1}
O.cj.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.D():s},
aB:function(){var s=this.b
if(s!=null)s.D(null)},
gU:function(a){var s=this.a
if(s.length>0)return C.a.gbe(s)
else return V.dD()},
dk:function(a){var s=this.a
if(a==null)s.push(V.dD())
else s.push(a)
this.aB()},
c5:function(){var s=this.a
if(s.length>0){s.pop()
this.aB()}}}
E.fR.prototype={}
E.bv.prototype={
scd:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gt().P(0,q.gdg())
s=q.c
if(s!=null)s.gt().n(0,q.gdg())
r=new D.x("shape",p,q.c)
r.b=!0
q.av(r)}},
saY:function(a){var s,r,q=this
if(!J.L(q.r,a)){s=q.r
if(s!=null)s.gt().P(0,q.gde())
if(a!=null)a.gt().n(0,q.gde())
q.r=a
r=new D.x("mover",s,a)
r.b=!0
q.av(r)}},
ak:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.aP(0,b,q):null
if(!J.L(o,q.x)){s=q.x
q.x=o
r=new D.x("matrix",s,o)
r.b=!0
q.av(r)}for(p=q.y.a,p=new J.Y(p,p.length);p.q();)p.d.ak(0,b)},
aN:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gU(q))
else o.push(p.u(0,q.gU(q)))
q.aB()
a.dl(r.f)
q=a.dy
s=(q&&C.a).gbe(q)
if(s!=null&&r.d!=null)s.hg(a,r)
for(q=r.y.a,q=new J.Y(q,q.length);q.q();)q.d.aN(a)
a.dj()
a.dx.c5()},
av:function(a){var s=this.z
if(s!=null)s.D(a)},
a1:function(){return this.av(null)},
dh:function(a){this.e=null
this.av(a)},
h3:function(){return this.dh(null)},
df:function(a){this.av(a)},
h2:function(){return this.df(null)},
dd:function(a){this.av(a)},
h_:function(){return this.dd(null)},
fZ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdc(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a1()},
h1:function(a,b){var s,r
for(s=b.gK(b),r=this.gdc();s.q();)s.gB(s).gt().P(0,r)
this.a1()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.br.prototype={
i:function(a){return this.b}}
E.bF.prototype={
i:function(a){return this.b}}
E.eN.prototype={}
E.hW.prototype={
dJ:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a6(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cj()
s.a=[]
s.gt().n(0,new E.hX(r))
r.cy=s
s=new O.cj()
s.a=[]
s.gt().n(0,new E.hY(r))
r.db=s
s=new O.cj()
s.a=[]
s.gt().n(0,new E.hZ(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.v(t.G)},
ghc:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gU(q)
s=r.db
s=r.z=q.u(0,s.gU(s))
q=s}return q},
dl:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbe(s):a)},
dj:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hX.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hY.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hZ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.ee.prototype={
cl:function(a){this.dm()},
ck:function(){return this.cl(null)},
gfS:function(){var s,r=this,q=Date.now(),p=C.c.W(P.kn(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a6(q,!1)
return s/p},
cA:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.u()
if(typeof p!=="number")return H.q(p)
s=C.d.bY(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.u()
r=C.d.bY(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kM(C.j,q.ghi())}},
dm:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.y.e8(s)
r=W.le(new E.im(this),t.H)
r.toString
C.y.f9(s,r)}},
hf:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cA()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a6(p,!1)
q.y=P.kn(p-q.r.a).a*0.000001
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
m.aN(n.e)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.ay(o)
r=H.k5(o)
P.ka("Error: "+H.d(s))
P.ka("Stack: "+H.d(r))
throw H.c(s)}}}
E.im.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hf()}}}
Z.eC.prototype={}
Z.fS.prototype={
bJ:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ay(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.iT.prototype={}
Z.d9.prototype={
aM:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
bJ:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].bJ(a)},
hs:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aN:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.X(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(o,", ")+"\nAttrs:   "+C.a.k(p,", ")}}
Z.c6.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dW(this.c))+"'")+"]"}}
Z.aL.prototype={
gce:function(a){var s=this.a,r=(s&$.aV().a)!==0?3:0
if((s&$.aU().a)!==0)r+=3
if((s&$.aT().a)!==0)r+=3
if((s&$.bp().a)!==0)r+=2
if((s&$.aW().a)!==0)r+=3
if((s&$.d0().a)!==0)r+=3
if((s&$.d1().a)!==0)r+=4
if((s&$.bW().a)!==0)++r
return(s&$.aS().a)!==0?r+4:r},
fu:function(a){var s,r=$.aV(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0)if(s===a)return r
return $.lF()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aL))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aV().a)!==0)s.push("Pos")
if((r&$.aU().a)!==0)s.push("Norm")
if((r&$.aT().a)!==0)s.push("Binm")
if((r&$.bp().a)!==0)s.push("Txt2D")
if((r&$.aW().a)!==0)s.push("TxtCube")
if((r&$.d0().a)!==0)s.push("Clr3")
if((r&$.d1().a)!==0)s.push("Clr4")
if((r&$.bW().a)!==0)s.push("Weight")
if((r&$.aS().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.fT.prototype={}
D.bw.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
P:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.a
s=(q&&C.a).P(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.w(q,b)
if(q===!0){q=r.b
s=(q&&C.a).P(q,b)||s}return s},
D:function(a){var s,r,q,p=this,o={}
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
return!0}if(!r)C.a.F(P.jK(s,!0),new D.ha(o))
s=p.b
if(s!=null){p.b=[]
C.a.F(s,new D.hb(o))}return!0},
fO:function(){return this.D(null)},
ax:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.ha.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.hb.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.P.prototype={}
D.aC.prototype={}
D.aD.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.da.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dw.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.ho.prototype={
h8:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
h4:function(a){this.c=a.b
this.d.P(0,a.a)
return!1}}
X.cf.prototype={}
X.hs.prototype={
aS:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.u()
s=b.b
r=o.ch
if(typeof s!=="number")return s.u()
q=new V.aq(m.a+l*k,m.b+s*r)
r=o.a.gaJ()
p=new X.bB(a,V.bf(),o.x,r,q)
p.b=!0
o.z=new P.a6(n,!1)
o.x=q
return p},
c4:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dv()
if(typeof s!=="number")return s.ac()
this.r=(s&~r)>>>0
return!1},
aZ:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.aS(a,b))
return!0},
h9:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaJ()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.u()
o=a.b
n=m.cy
if(typeof o!=="number")return o.u()
r=new X.bC(new V.a_(q*p,o*n),s,r)
r.b=!0
l.D(r)
return!0},
eJ:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cf(c,p.a.gaJ(),b)
q.b=!0
r.D(q)
p.y=new P.a6(s,!1)
p.x=V.bf()}}
X.a8.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a8))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bB.prototype={}
X.hO.prototype={
bu:function(a,b,c){var s=this,r=new P.a6(Date.now(),!1),q=s.a.gaJ(),p=new X.bB(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
c4:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.bu(a,b,!0))
return!0},
b_:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dv()
if(typeof r!=="number")return r.ac()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.D(s.bu(a,b,!0))
return!0},
aZ:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bu(a,b,!1))
return!0},
ha:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaJ()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.u()
p=a.b
o=n.ch
if(typeof p!=="number")return p.u()
s=new X.bC(new V.a_(r*q,p*o),s,b)
s.b=!0
m.D(s)
return!0},
gcS:function(){var s=this.b
return s==null?this.b=D.D():s},
gc8:function(){var s=this.c
return s==null?this.c=D.D():s},
gda:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.bC.prototype={}
X.dV.prototype={}
X.ct.prototype={}
X.ir.prototype={
aS:function(a,b){var s=this,r=new P.a6(Date.now(),!1),q=a.length>0?a[0]:V.bf(),p=s.a.gaJ(),o=new X.ct(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
h7:function(a){var s=this.b
if(s==null)return!1
s.D(this.aS(a,!0))
return!0},
h5:function(a){var s=this.c
if(s==null)return!1
s.D(this.aS(a,!0))
return!0},
h6:function(a){var s=this.d
if(s==null)return!1
s.D(this.aS(a,!1))
return!0}}
X.ez.prototype={
gaJ:function(){var s=this.a,r=C.f.gcQ(s).c
r.toString
s=C.f.gcQ(s).d
s.toString
return V.kF(0,0,r,s)},
cs:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dw(s,new X.a8(r,a.altKey,a.shiftKey))},
aG:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a8(r,a.altKey,a.shiftKey)},
bH:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a8(r,a.altKey,a.shiftKey)},
ar:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.Z()
if(typeof o!=="number")return H.q(o)
s=r.top
if(typeof p!=="number")return p.Z()
if(typeof s!=="number")return H.q(s)
return new V.aq(q-o,p-s)},
aT:function(a){return new V.a_(a.movementX,a.movementY)},
bE:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=C.d.ae(p.pageX)
C.d.ae(p.pageY)
n=k.left
if(typeof n!=="number")return H.q(n)
C.d.ae(p.pageX)
m=C.d.ae(p.pageY)
l=k.top
if(typeof l!=="number")return H.q(l)
j.push(new V.aq(o-n,m-l))}return j},
ao:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.da(s,new X.a8(r,a.altKey,a.shiftKey))},
bv:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.Z()
if(typeof n!=="number")return H.q(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.Z()
if(typeof p!=="number")return H.q(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.q(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.q(p)
p=r<p}else p=!1
return p},
eD:function(a){this.f=!0},
eq:function(a){this.f=!1},
ex:function(a){if(this.f&&this.bv(a))a.preventDefault()},
eH:function(a){var s
if(!this.f)return
s=this.cs(a)
this.b.h8(s)},
eF:function(a){var s
if(!this.f)return
s=this.cs(a)
this.b.h4(s)},
eL:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aG(a)
if(p.x){s=p.ao(a)
r=p.aT(a)
if(p.d.c4(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.ao(a)
q=p.ar(a)
if(p.c.c4(s,q))a.preventDefault()},
eP:function(a){var s,r,q,p=this
p.aG(a)
s=p.ao(a)
if(p.x){r=p.aT(a)
if(p.d.b_(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.b_(s,q))a.preventDefault()},
eB:function(a){var s,r,q,p=this
if(!p.bv(a)){p.aG(a)
s=p.ao(a)
if(p.x){r=p.aT(a)
if(p.d.b_(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.b_(s,q))a.preventDefault()}},
eN:function(a){var s,r,q,p=this
p.aG(a)
s=p.ao(a)
if(p.x){r=p.aT(a)
if(p.d.aZ(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.aZ(s,q))a.preventDefault()},
ez:function(a){var s,r,q,p=this
if(!p.bv(a)){p.aG(a)
s=p.ao(a)
if(p.x){r=p.aT(a)
if(p.d.aZ(s,r))a.preventDefault()
return}if(p.r)return
q=p.ar(a)
if(p.c.aZ(s,q))a.preventDefault()}},
eR:function(a){var s,r,q=this
q.aG(a)
s=new V.a_((a&&C.x).gfH(a),C.x.gfI(a)).u(0,q.Q)
if(q.x){if(q.d.h9(s))a.preventDefault()
return}if(q.r)return
r=q.ar(a)
if(q.c.ha(s,r))a.preventDefault()},
eT:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ao(q.y)
r=q.ar(q.y)
q.d.eJ(s,r,p)}},
f5:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bH(a)
s=r.bE(a)
if(r.e.h7(s))a.preventDefault()},
f1:function(a){var s
this.bH(a)
s=this.bE(a)
if(this.e.h5(s))a.preventDefault()},
f3:function(a){var s
this.bH(a)
s=this.bE(a)
if(this.e.h6(s))a.preventDefault()}}
D.bu.prototype={
am:function(a){var s=this.r
if(s!=null)s.D(a)},
dQ:function(){return this.am(null)},
$ial:1}
D.al.prototype={}
D.cb.prototype={
am:function(a){var s=this.y
if(s!=null)s.D(a)},
cw:function(a){var s=this.z
if(s!=null)s.D(a)},
eI:function(){return this.cw(null)},
eW:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.k)(a),++r){q=a[r]
if(q==null||this.e2(q))return!1}return!0},
ek:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcv(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p instanceof D.bu)this.f.push(p)
o=p.r
if(o==null){o=new D.bw()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aC()
s.b=!0
this.am(s)},
f_:function(a,b){var s,r,q
for(s=b.gK(b),r=this.gcv();s.q();){q=s.gB(s)
C.a.P(this.e,q)
q.gt().P(0,r)}s=new D.aD()
s.b=!0
this.am(s)},
e2:function(a){var s=C.a.w(this.f,a)
return s}}
V.O.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.b1.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b1))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.h8.prototype={}
V.dC.prototype={
a4:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dC))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bV([o.a,o.d,o.r],3,0),m=V.bV([o.b,o.e,o.x],3,0),l=V.bV([o.c,o.f,o.y],3,0),k=n.length
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
V.bA.prototype={
a4:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
d7:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.z().toString
if(Math.abs(b3-0)<1e-9)return V.dD()
s=1/b3
r=-l
q=-a2
return V.ap((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
u:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ap(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bi:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b0:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a3(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bA))return!1
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
i:function(a){return this.H()},
A:function(a){var s,r,q,p,o,n=this,m=V.bV([n.a,n.e,n.y,n.cx],3,0),l=V.bV([n.b,n.f,n.z,n.cy],3,0),k=V.bV([n.c,n.r,n.Q,n.db],3,0),j=V.bV([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
H:function(){return this.A("")}}
V.aq.prototype={
V:function(a){return new V.a_(a.a-this.a,a.b-this.b)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.a3.prototype={
Z:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
V.dU.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dU))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.dY.prototype={
ga3:function(){var s=this.c,r=this.d
return s>r?r:s},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dY))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.C(s.a,3,0)+", "+V.C(s.b,3,0)+", "+V.C(s.c,3,0)+", "+V.C(s.d,3,0)+"]"}}
V.a_.prototype={
bZ:function(a){return Math.sqrt(this.X(this))},
X:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.u()
if(typeof p!=="number")return H.q(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.q(r)
return q*p+s*r},
u:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.u()
if(typeof b!=="number")return H.q(b)
s=this.b
if(typeof s!=="number")return s.u()
return new V.a_(r*b,s*b)},
R:function(a,b){var s,r
$.z().toString
if(Math.abs(b-0)<1e-9){s=$.kQ
return s==null?$.kQ=new V.a_(0,0):s}s=this.a
if(typeof s!=="number")return s.R()
r=this.b
if(typeof r!=="number")return r.R()
return new V.a_(s/b,r/b)},
p:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
r=this.a
$.z().toString
if(typeof s!=="number")return s.Z()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.Z()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+"]"}}
V.B.prototype={
bZ:function(a){return Math.sqrt(this.X(this))},
X:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c_:function(a,b){return new V.B(V.k7(this.a,a.a,b),V.k7(this.b,a.b,b),V.k7(this.c,a.c,b))},
M:function(){var s=this,r=Math.sqrt(s.X(s))
if(r===1)return s
return s.R(0,r)},
aW:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
v:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a){return new V.B(-this.a,-this.b,-this.c)},
R:function(a,b){$.z().toString
if(Math.abs(b-0)<1e-9)return V.eA()
return new V.B(this.a/b,this.b/b,this.c/b)},
d9:function(){$.z().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.z().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.C(this.a,3,0)+", "+V.C(this.b,3,0)+", "+V.C(this.c,3,0)+"]"}}
U.fU.prototype={
bo:function(a){var s=V.ol(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.D():s},
J:function(a){var s=this.y
if(s!=null)s.D(a)},
sc9:function(a,b){},
sc1:function(a){var s,r=this,q=r.b
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bo(s)}q=new D.x("maximumLocation",q,r.b)
q.b=!0
r.J(q)}},
sc3:function(a){var s,r=this,q=r.c
$.z().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bo(s)}q=new D.x("minimumLocation",q,r.c)
q.b=!0
r.J(q)}},
sa2:function(a,b){var s,r=this
b=r.bo(b)
s=r.d
$.z().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.x("location",s,b)
s.b=!0
r.J(s)}},
sc2:function(a){var s,r,q=this,p=q.e
$.z().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.x("maximumVelocity",p,a)
p.b=!0
q.J(p)}},
sN:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.x("velocity",r,a)
r.b=!0
s.J(r)}},
sbP:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.z().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.x("dampening",s,a)
s.b=!0
this.J(s)}},
ak:function(a,b){var s,r,q,p=this,o=p.f
$.z().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa2(0,p.d+s*b)
o=p.x
$.z().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sN(s)}}}
U.bY.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.D():s},
aP:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bx.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.D():s},
J:function(a){var s=this.e
if(s!=null)s.D(a)},
a_:function(){return this.J(null)},
ei:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaF(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.gt()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aC()
s.b=!0
this.J(s)},
eY:function(a,b){var s,r
for(s=b.gK(b),r=this.gaF();s.q();)s.gB(s).gt().P(0,r)
s=new D.aD()
s.b=!0
this.J(s)},
aP:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.a5()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.Y(p,p.length),s=null;p.q();){o=p.d
if(o!=null){r=o.aP(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}q.f=s==null?V.dD():s
p=q.e
if(p!=null)p.ax(0)}return q.f},
p:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bx))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.L(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cu.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.D():s},
J:function(a){var s=this.cy
if(s!=null)s.D(a)},
a_:function(){return this.J(null)},
aV:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gcS().n(0,s.gbw())
s.a.c.gda().n(0,s.gby())
s.a.c.gc8().n(0,s.gbA())
return!0},
bx:function(a){var s=this
if(!J.L(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bz:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.y)return
if(l.x){s=a.y.V(a.d)
s=s.X(s)
r=l.r
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.V(a.d).u(0,2).R(0,s.ga3())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.u()
q=l.e
if(typeof q!=="number")return H.q(q)
r.sN(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.V(q).u(0,2).R(0,s.ga3())
r=l.b
o=p.a
if(typeof o!=="number")return o.L()
n=l.e
if(typeof n!=="number")return H.q(n)
m=l.z
if(typeof m!=="number")return H.q(m)
r.sa2(0,-o*n+m)
l.b.sN(0)
l.Q=a.z.V(q).u(0,2).R(0,s.ga3())}l.a_()},
bB:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.X(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.u()
q=p.e
if(typeof q!=="number")return H.q(q)
s.sN(r*10*q)
p.a_()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.a5()
if(o<n){p.ch=n
s=b.y
p.b.ak(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.ap(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iS:1}
U.cv.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.D():s},
J:function(a){var s=this.fx
if(s!=null)s.D(a)},
a_:function(){return this.J(null)},
aV:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gcS().n(0,q.gbw())
q.a.c.gda().n(0,q.gby())
q.a.c.gc8().n(0,q.gbA())
s=q.a.d
r=s.f
s=r==null?s.f=D.D():r
s.n(0,q.gea())
s=q.a.d
r=s.d
s=r==null?s.d=D.D():r
s.n(0,q.gec())
s=q.a.e
r=s.b
s=r==null?s.b=D.D():r
s.n(0,q.gfn())
s=q.a.e
r=s.d
s=r==null?s.d=D.D():r
s.n(0,q.gfl())
s=q.a.e
r=s.c
s=r==null?s.c=D.D():r
s.n(0,q.gfj())
return!0},
ah:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.L()
s=-s}if(this.r){if(typeof r!=="number")return r.L()
r=-r}return new V.a_(s,r)},
bx:function(a){var s=this
t.c.a(a)
if(!J.L(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bz:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!l.cx)return
if(l.ch){s=a.y.V(a.d)
s=s.X(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ah(a.y.V(a.d).u(0,2).R(0,s.ga3()))
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
p=l.ah(r.V(q).u(0,2).R(0,s.ga3()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa2(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.ah(a.z.V(q).u(0,2).R(0,s.ga3()))}l.a_()},
bB:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.X(s)>0.0001){s=p.c
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
p.a_()}},
eb:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ed:function(a){var s,r,q,p,o,n,m,l=this
t.c.a(a)
if(!J.L(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.ah(r.V(q).u(0,2).R(0,s.ga3()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa2(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.ah(a.z.V(q).u(0,2).R(0,s.ga3()))
l.a_()},
fo:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fm:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.V(a.d)
s=s.X(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.ah(a.y.V(a.d).u(0,2).R(0,s.ga3()))
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
p=l.ah(r.V(q).u(0,2).R(0,s.ga3()))
r=l.c
o=p.a
if(typeof o!=="number")return o.L()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sa2(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.L()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sa2(0,-n*o+r)
l.b.sN(0)
l.c.sN(0)
l.dx=l.ah(a.z.V(q).u(0,2).R(0,s.ga3()))}l.a_()},
fk:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.X(s)>0.0001){s=p.c
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
p.a_()}},
aP:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.a5()
if(o<n){p.dy=n
s=b.y
p.c.ak(0,s)
p.b.ak(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.ap(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.u(0,V.ap(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iS:1}
U.cw.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.D():s},
J:function(a){var s=this.r
if(s!=null)s.D(a)},
aV:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.D():r
r=p.gef()
s.n(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.D():q).n(0,r)
return!0},
eg:function(a){var s,r,q,p,o=this
if(!J.L(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.u()
p=s+r*q
if(s!==p){o.d=p
s=new D.x("zoom",s,p)
s.b=!0
o.J(s)}},
aP:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ap(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iS:1}
M.di.prototype={
an:function(a){var s=this.y
if(s!=null)s.D(a)},
dR:function(){return this.an(null)},
es:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gag(),q=0;q<b.length;b.length===s||(0,H.k)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bw()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aC()
s.b=!0
this.an(s)},
ev:function(a,b){var s,r
for(s=b.gK(b),r=this.gag();s.q();)s.gB(s).gt().P(0,r)
s=new D.aD()
s.b=!0
this.an(s)},
sdq:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().P(0,r.gag())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gag())
q=new D.x("technique",s,r.d)
q.b=!0
r.an(q)}},
gt:function(){var s=this.y
return s==null?this.y=D.D():s},
aN:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dl(d.d)
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
m=C.d.ae(n*q)
n=o.b
if(typeof p!=="number")return H.q(p)
l=C.d.ae(n*p)
n=C.d.ae(o.c*q)
a.c=n
o=C.d.ae(o.d*p)
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
a.cy.dk(g)
r=$.kz
if(r==null){r=V.kB()
o=V.jR()
n=$.kR
r=V.kw(r,o,n==null?$.kR=new V.B(0,0,-1):n)
$.kz=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.u(0,f)}a.db.dk(f)
s=d.d
if(s!=null)s.ak(0,a)
for(s=d.e.a,s=new J.Y(s,s.length);s.q();)s.d.ak(0,a)
for(s=d.e.a,s=new J.Y(s,s.length);s.q();)s.d.aN(a)
d.b.toString
a.cy.c5()
a.db.c5()
d.c.toString
a.dj()}}
A.fL.prototype={}
A.fM.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fP:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fJ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.R.prototype={
gaf:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.R))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.hu.prototype={
dI:function(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="Required uniform value, ",c6=", was not defined or used in shader.",c7="uniform mat4 objMat;\n"
c3.z=c8
s=new P.aI("")
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
A.ny(c8,s)
A.nA(c8,s)
A.nz(c8,s)
A.nC(c8,s)
A.nD(c8,s)
A.nB(c8,s)
A.nE(c8,s)
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
k=A.nx(c3.z)
c3.c=l
c3.d=k
c3.e=c3.ct(l,35633)
c3.f=c3.ct(c3.d,35632)
q=c3.a
o=q.createProgram()
c3.r=o
q.attachShader(o,c3.e)
q.attachShader(c3.r,c3.f)
q.linkProgram(c3.r)
if(!q.getProgramParameter(c3.r,35714)){j=q.getProgramInfoLog(c3.r)
q.deleteProgram(c3.r)
H.p(P.o("Failed to link shader: "+H.d(j)))}c3.ff()
c3.fh()
c3.Q=c3.x.h(0,"posAttr")
c3.cx=c3.x.h(0,"normAttr")
c3.ch=c3.x.h(0,"binmAttr")
c3.cy=c3.x.h(0,"txt2DAttr")
c3.db=c3.x.h(0,"txtCubeAttr")
c3.dx=c3.x.h(0,"bendAttr")
if(c8.dy)c3.id=t.I.a(c3.y.E(0,"invViewMat"))
if(r)c3.dy=t.I.a(c3.y.E(0,"objMat"))
if(p)c3.fr=t.I.a(c3.y.E(0,"viewObjMat"))
r=t.I
c3.fy=r.a(c3.y.E(0,"projViewObjMat"))
if(c8.go)c3.fx=r.a(c3.y.E(0,"viewMat"))
if(c8.x1)c3.k1=t.O.a(c3.y.E(0,"txt2DMat"))
if(c8.x2)c3.k2=r.a(c3.y.E(0,"txtCubeMat"))
if(c8.y1)c3.k3=r.a(c3.y.E(0,"colorMat"))
c3.r1=[]
q=c8.bb
if(q>0){c3.k4=c3.y.E(0,"bendMatCount")
for(i=0;i<q;++i){p=c3.r1
o=c3.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.p(P.o(c5+n+c6))
p.push(r.a(h))}}r=c8.a
if(r.a)c3.r2=t.r.a(c3.y.E(0,"emissionClr"))
if(r.c)c3.ry=t.Q.a(c3.y.E(0,"emissionTxt"))
r=c8.b
if(r.a)c3.x1=t.r.a(c3.y.E(0,"ambientClr"))
if(r.c)c3.y1=t.Q.a(c3.y.E(0,"ambientTxt"))
r=c8.c
if(r.a)c3.y2=t.r.a(c3.y.E(0,"diffuseClr"))
if(r.c)c3.as=t.Q.a(c3.y.E(0,"diffuseTxt"))
r=c8.d
if(r.a)c3.bc=t.r.a(c3.y.E(0,"invDiffuseClr"))
if(r.c)c3.cU=t.Q.a(c3.y.E(0,"invDiffuseTxt"))
r=c8.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c3.cX=t.n.a(c3.y.E(0,"shininess"))
if(q)c3.cV=t.r.a(c3.y.E(0,"specularClr"))
if(r.c)c3.cW=t.Q.a(c3.y.E(0,"specularTxt"))}if(c8.f.c)c3.cY=t.Q.a(c3.y.E(0,"bumpTxt"))
if(c8.db){r=t.Q
c3.cZ=r.a(c3.y.E(0,"envSampler"))
q=c8.r
if(q.a)c3.d_=t.r.a(c3.y.E(0,"reflectClr"))
if(q.c)c3.d0=r.a(c3.y.E(0,"reflectTxt"))
q=c8.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c3.d1=t.n.a(c3.y.E(0,"refraction"))
if(p)c3.d2=t.r.a(c3.y.E(0,"refractClr"))
if(q.c)c3.d3=r.a(c3.y.E(0,"refractTxt"))}}r=c8.y
if(r.a)c3.d4=t.n.a(c3.y.E(0,"alpha"))
if(r.c)c3.d5=t.Q.a(c3.y.E(0,"alphaTxt"))
if(c8.k1){r=c8.z
q=r.length
if(q!==0){c3.bQ=new H.v(t.J)
c3.bR=new H.v(t.L)
for(p=t.r,o=t.n,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.ac()
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
a6=a5}c.push(new A.en(h,a,a0,a6,a5,a4))}c3.bR.m(0,e,c)
n=c3.bQ
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.Q
q=r.length
if(q!==0){c3.bS=new H.v(t.J)
c3.bT=new H.v(t.M)
for(p=t.r,o=t.u,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.d(e)
c=[]
for(n=f.b,i=0;i<n;++i){if(typeof e!=="number")return e.ac()
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
c.push(new A.eo(b0,a9,a8,h,a,b1))}c3.bT.m(0,e,c)
n=c3.bS
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.ch
q=r.length
if(q!==0){c3.bU=new H.v(t.J)
c3.bV=new H.v(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.ac()
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
a6=a5}c.push(new A.er(h,a,b4,a0,b1,b5,b6,a6,a5,a4))}c3.bV.m(0,e,c)
a7=c3.bU
b2=c3.y
b3=d+"Count"
h=b2.h(0,b3)
if(h==null)H.p(P.o(c5+b3+c6))
a7.m(0,e,h)}}r=c8.cx
q=r.length
if(q!==0){c3.bW=new H.v(t.J)
c3.bX=new H.v(t.d)
for(p=t.r,o=t.n,n=t.y,m=t.u,g=0;g<r.length;r.length===q||(0,H.k)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.ac()
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
c.push(new A.eu(h,a,a0,a1,b0,a9,c0,b9,b6,c2,c1,a6,a5,a4,b1,b5))}c3.bX.m(0,e,c)
b=c3.bW
a7=c3.y
b2=d+"Count"
h=a7.h(0,b2)
if(h==null)H.p(P.o(c5+b2+c6))
b.m(0,e,h)}}}},
a7:function(a,b){if(b!=null&&b.d>=6)a.dz(b)}}
A.fQ.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.h_.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hT.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.ia.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hx.prototype={
i:function(a){return this.as}}
A.en.prototype={}
A.eo.prototype={}
A.er.prototype={}
A.eu.prototype={}
A.e1.prototype={
dL:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
ct:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.o("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
ff:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fL(n,r.name,q))}p.x=new A.fM(o)},
fh:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fG(r.type,r.size,r.name,q))}p.y=new A.iC(o)},
aD:function(a,b,c){var s=this.a
if(a===1)return new A.ek(s,b,c)
else return A.jQ(s,this.r,b,a,c)},
e5:function(a,b,c){var s=this.a
if(a===1)return new A.es(s,b,c)
else return A.jQ(s,this.r,b,a,c)},
e6:function(a,b,c){var s=this.a
if(a===1)return new A.et(s,b,c)
else return A.jQ(s,this.r,b,a,c)},
b9:function(a,b){return new P.eQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fG:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aD(b,c,d)
case 5121:return s.aD(b,c,d)
case 5122:return s.aD(b,c,d)
case 5123:return s.aD(b,c,d)
case 5124:return s.aD(b,c,d)
case 5125:return s.aD(b,c,d)
case 5126:return new A.ej(s.a,c,d)
case 35664:return new A.iy(s.a,c,d)
case 35665:return new A.el(s.a,c,d)
case 35666:return new A.em(s.a,c,d)
case 35667:return new A.iz(s.a,c,d)
case 35668:return new A.iA(s.a,c,d)
case 35669:return new A.iB(s.a,c,d)
case 35674:return new A.iD(s.a,c,d)
case 35675:return new A.ep(s.a,c,d)
case 35676:return new A.eq(s.a,c,d)
case 35678:return s.e5(b,c,d)
case 35680:return s.e6(b,c,d)
case 35670:throw H.c(s.b9("BOOL",c))
case 35671:throw H.c(s.b9("BOOL_VEC2",c))
case 35672:throw H.c(s.b9("BOOL_VEC3",c))
case 35673:throw H.c(s.b9("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.iw.prototype={}
A.iC.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
E:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.H()},
H:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.k)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ek.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.ej.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.el.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.em.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.ep.prototype={
ad:function(a){var s=new Float32Array(H.cT(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.eq.prototype={
ad:function(a){var s=new Float32Array(H.cT(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.es.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.et.prototype={
dz:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jf.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c_(q.b,b).c_(q.d.c_(q.c,b),c)
q=new V.a3(p.a,p.b,p.c)
if(!J.L(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a1()}a.saO(p.M())
q=1-b
s=1-c
s=new V.dU(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.L(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a1()}}}
F.hc.prototype={
dZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eA()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.d9())return p
return q.M()},
e0:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.Z(0,n)
q=new V.B(o.a,o.b,o.c).M()
o=r.Z(0,n)
return q.aW(new V.B(o.a,o.b,o.c).M()).M()},
bM:function(){var s,r=this
if(r.d!=null)return!0
s=r.dZ()
if(s==null){s=r.e0()
if(s==null)return!1}r.d=s
r.a.a.a1()
return!0},
dY:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eA()
if(n!=null)q=q.v(0,n)
if(s!=null)q=q.v(0,s)
if(r!=null)q=q.v(0,r)
if(q.d9())return p
return q.M()},
e_:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.z().toString
if(Math.abs(p-0)<1e-9){j=b.Z(0,e)
o=new V.B(j.a,j.b,j.c).M()
if(q.a-r.a<0)o=o.L(0)}else{n=(j-s.b)/p
j=b.Z(0,e)
j=new V.a3(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).Z(0,h)
o=new V.B(j.a,j.b,j.c).M()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.L(0)}j=l.d
if(j!=null){m=j.M()
o=m.aW(o).M().aW(m).M()}return o},
bK:function(){var s,r=this
if(r.e!=null)return!0
s=r.dY()
if(s==null){s=r.e_()
if(s==null)return!1}r.e=s
r.a.a.a1()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.ab(J.X(q.e),0)+", "+C.b.ab(J.X(r.b.e),0)+", "+C.b.ab(J.X(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
H:function(){return this.A("")}}
F.hp.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.ab(J.X(s.e),0)+", "+C.b.ab(J.X(this.b.e),0)},
H:function(){return this.A("")}}
F.hS.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.ab(J.X(s.e),0)},
H:function(){return this.A("")}}
F.i2.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.D():s},
fX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.T()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){p=e[q]
f.a.n(0,p.fE())}f.a.T()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.hS()
if(l.a==null)H.p(P.o("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.D(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
n=new F.hp()
m=j.a
if(m==null)H.p(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(m!=i.a)H.p(P.o("May not create a line with vertices attached to different shapes."))
n.a=j
j.c.b.push(n)
n.b=i
i.c.c.push(n)
n.a.a.c.b.push(n)
n=n.a.a.e
if(n!=null)n.D(null)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.k)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.v()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.T()
m=m.e
if(typeof m!=="number")return m.v()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.dj(j,i,g)}e=f.e
if(e!=null)e.ax(0)},
aI:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aI()||!1
if(!r.a.aI())s=!1
q=r.e
if(q!=null)q.ax(0)
return s},
fz:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.aV().a)!==0?1:0
if((s&$.aU().a)!==0)++r
if((s&$.aT().a)!==0)++r
if((s&$.bp().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.d0().a)!==0)++r
if((s&$.d1().a)!==0)++r
if((s&$.bW().a)!==0)++r
if((s&$.aS().a)!==0)++r
q=a5.gce(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fu(l)
j=k.gce(k)
n[l]=new Z.fS(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fW(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cT(o)),35044)
s.bindBuffer(a2,null)
b=new Z.d9(new Z.eC(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.T()
a.push(h.e)}a0=Z.jS(s,34963,a)
b.b.push(new Z.c6(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.T()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.T()
a.push(h.e)}a0=Z.jS(s,34963,a)
b.b.push(new Z.c6(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.T()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.T()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.T()
a.push(h.e)}a0=Z.jS(s,34963,a)
b.b.push(new Z.c6(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.A(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.A(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.A(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.A(r))}return C.a.k(q,"\n")},
a1:function(){var s=this.e
if(s!=null)s.D(null)}}
F.i3.prototype={
fs:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
f.push(F.dj(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.dj(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.dj(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.dj(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
aI:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.k)(s),++p)if(!s[p].bM())q=!1
return q},
bL:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.k)(s),++p)if(!s[p].bK())q=!1
return q},
i:function(a){return this.H()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(a))
return C.a.k(p,"\n")},
H:function(){return this.A("")}}
F.i4.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
A:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].A(a+(""+s+". ")))}return C.a.k(q,"\n")},
H:function(){return this.A("")}}
F.i5.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(a))
return C.a.k(p,"\n")},
H:function(){return this.A("")}}
F.iK.prototype={
bO:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kT(s.cx,p,m,r,q,o,n,a,l)},
fE:function(){return this.bO(null)},
saO:function(a){var s
if(!J.L(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a1()}},
fW:function(a){var s,r=this
if(a.p(0,$.aV())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.aU())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.aT())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.p(0,$.bp())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.p(0,$.aW())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.p(0,$.d0())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.p(0,$.d1())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.p(0,$.bW()))return[r.ch]
else if(a.p(0,$.aS())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bM:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eA()
r.d.F(0,new F.iS(q))
r.r=q.a.M()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.ax(0)}return!0},
bK:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eA()
r.d.F(0,new F.iR(q))
r.x=q.a.M()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.ax(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
A:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ab(J.X(q.e),0))
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
o.push(V.C(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.k(o,", ")
return a+"{"+r+"}"},
H:function(){return this.A("")}}
F.iS.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iR.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.v(0,r)}}}
F.iL.prototype={
T:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a1()
return!0},
cH:function(a,b){var s=null,r=F.kT(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gl:function(a){return this.c.length},
aI:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)s[q].bM()
return!0},
bL:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)s[q].bK()
return!0},
fA:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
if(p.z==null){o=p.r.M()
if(!J.L(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}}return!0},
i:function(a){return this.H()},
A:function(a){var s,r,q,p
this.T()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.k)(r),++p)s.push(r[p].A(a))
return C.a.k(s,"\n")},
H:function(){return this.A("")}}
F.iM.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.iN(s,b))
C.a.F(s.d,new F.iO(s,b))},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(""))
return C.a.k(p,"\n")}}
F.iN.prototype={
$1:function(a){if(!J.L(a.a,this.a))this.b.$1(a)}}
F.iO.prototype={
$1:function(a){var s=this.a
if(!J.L(a.a,s)&&!J.L(a.b,s))this.b.$1(a)}}
F.iP.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(""))
return C.a.k(p,"\n")}}
F.iQ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
H:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q)p.push(s[q].A(""))
return C.a.k(p,"\n")}}
O.dB.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.D():s},
S:function(a){var s=this.fr
if(s!=null)s.D(a)},
bn:function(){return this.S(null)},
cz:function(a){this.a=null
this.S(a)},
fb:function(){return this.cz(null)},
em:function(a,b){var s=new D.aC()
s.b=!0
this.S(s)},
eo:function(a,b){var s=new D.aD()
s.b=!0
this.S(s)},
cr:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.v(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=p.gaj()
n=d.h(0,p.gaj())
d.m(0,o,n==null?1:n)}m=[]
d.F(0,new O.hB(f,m))
C.a.aR(m,new O.hC())
l=new H.v(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=[]
l.F(0,new O.hD(f,k))
C.a.aR(k,new O.hE())
j=new H.v(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.k)(s),++q){p=s[q]
o=p.gaj()
n=j.h(0,p.gaj())
j.m(0,o,n==null?1:n)}i=[]
j.F(0,new O.hF(f,i))
C.a.aR(i,new O.hG())
h=new H.v(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.k)(e),++q){p=e[q]
r=p.gaj()
o=h.h(0,p.gaj())
h.m(0,r,o==null?1:o)}g=[]
h.F(0,new O.hH(f,g))
C.a.aR(g,new O.hI())
e=C.c.W(f.e.a.length+3,4)
f.dy.toString
return A.md(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a6:function(a,b){if(b!=null)if(!C.a.w(a,b)){b.a=a.length
a.push(b)}},
ak:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.Y(s,s.length);s.q();){r=s.d
r.toString
q=$.iJ
if(q==null)q=$.iJ=new V.B(0,0,1)
r.a=q
p=$.iI
r.d=p==null?$.iI=new V.B(0,1,0):p
p=$.iH
r.e=p==null?$.iH=new V.B(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bi(q).M()
r.d=o.bi(r.d).M()
r.e=o.bi(r.e).M()}}}},
hg:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.cr()
s=b6.fr.h(0,b5.as)
if(s==null){s=A.mc(b5,b6.a)
r=s.b
if(r.length===0)H.p(P.o("May not cache a shader with no name."))
if(b6.fr.fC(0,r))H.p(P.o('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.m(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.bc
b5=b7.e
if(!(b5 instanceof Z.d9))b5=b7.e=null
if(b5==null||!b5.d.p(0,p)){b5=q.k4
if(b5)b7.d.aI()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bL()
n.a.bL()
n=n.e
if(n!=null)n.ax(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.fA()
m=m.e
if(m!=null)m.ax(0)}k=b7.d.fz(new Z.iT(b6.a),p)
k.aM($.aV()).e=b4.a.Q.c
if(b5)k.aM($.aU()).e=b4.a.cx.c
if(o)k.aM($.aT()).e=b4.a.ch.c
if(q.r2)k.aM($.bp()).e=b4.a.cy.c
if(n)k.aM($.aW()).e=b4.a.db.c
if(q.ry)k.aM($.aS()).e=b4.a.dx.c
b7.e=k}j=[]
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.fP()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gU(n)
b5=b5.dy
b5.toString
b5.ad(n.a4(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gU(n)
m=b6.dx
m=b6.cx=n.u(0,m.gU(m))
n=m}b5=b5.fr
b5.toString
b5.ad(n.a4(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.ghc()
m=b6.dx
m=b6.ch=n.u(0,m.gU(m))
n=m}b5=b5.fy
b5.toString
b5.ad(n.a4(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gU(n)
b5=b5.fx
b5.toString
b5.ad(n.a4(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.ad(C.h.a4(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.ad(C.h.a4(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.ad(C.h.a4(n,!0))}if(q.bb>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.e(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.e(b5,h)
b5=b5[h]
g=new Float32Array(H.cT(n.a4(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.f.e)
b5=b4.a
n=b4.f.e
b5.a7(b5.ry,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.r.e)
b5=b4.a
n=b4.r.e
b5.a7(b5.y1,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.x.e)
b5=b4.a
n=b4.x.e
b5.a7(b5.as,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.bc
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.y.e)
b5=b4.a
n=b4.y.e
b5.a7(b5.cU,n)}b5=q.e
n=b5.a
if(!n)m=b5.c
else m=!0
if(m){m=b4.a
l=b4.z.ch
m=m.cX
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.cV
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.z.e)
b5=b4.a
n=b4.z.e
b5.a7(b5.cW,n)}b5=q.z
if(b5.length>0){f=new H.v(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
c=d.gaj()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
a=J.d2(b4.a.bR.h(0,c),b)
l=d.ghv()
a0=$.ar
l=l.b0(a0==null?$.ar=new V.a3(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghA()
a0=$.ar
l=l.b0(a0==null?$.ar=new V.a3(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaK(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gcT()){l=d.gcK()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gcL()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gcM()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bQ.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gU(n)
a2=new H.v(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.m(0,0,b+1)
a=J.d2(b4.a.bT.h(0,0),b)
l=a1.bi(d.a).M()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.bS.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gU(n)
a5=new H.v(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
c=d.gaj()
b=a5.h(0,c)
if(b==null)b=0
a5.m(0,c,b+1)
a=J.d2(b4.a.bV.h(0,c),b)
a6=a1.u(0,d.gU(d))
l=d.gU(d)
a0=$.ar
l=l.b0(a0==null?$.ar=new V.a3(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.ar
l=a6.b0(l==null?$.ar=new V.a3(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaK(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=a6.d7(0)
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
g=new Float32Array(H.cT(new V.dC(a0,a3,a4,a7,a8,a9,b0,b1,l).a4(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gay()
l=d.gay()
if(!C.a.w(j,l)){l.a=j.length
j.push(l)}l=d.gay()
a0=l.gaX(l)
if(a0){a0=a.f
a3=l.d
a4=a0.a
a0=a0.d
if(a3<6)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gaQ()
l=d.gdA()
a0=a.x
a0.toString
a3=l.gfL(l)
a4=l.gfM(l)
a7=l.gfN()
l=l.gfK()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaQ()
if(!C.a.w(j,l)){l.a=j.length
j.push(l)}l=d.gaQ()
a0=l.gaX(l)
if(a0){a0=a.r
a3=l.d
a4=a0.a
a0=a0.d
if(a3<6)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.gcT()){l=d.gcK()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gcL()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gcM()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.bU.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gU(n)
b3=new H.v(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.k)(n),++e){d=n[e]
c=d.gaj()
b=b3.h(0,c)
if(b==null)b=0
b3.m(0,c,b+1)
a=J.d2(b4.a.bX.h(0,c),b)
l=d.ghb(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghy(d).M()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.b0(d.ghb(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaK(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gay()
l=d.gc8()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gc6(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.ghK()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.ghL()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gay()
l=d.gay()
if(!C.a.w(j,l)){l.a=j.length
j.push(l)}l=d.gay()
a0=l.gaX(l)
if(a0){a0=a.dx
a0.toString
a3=l.gaX(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gfT(l))}d.gaQ()
l=d.gdA()
a0=a.z
a0.toString
a3=l.gfL(l)
a4=l.gfM(l)
a7=l.gfN()
l=l.gfK()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaQ()
if(!C.a.w(j,l)){l.a=j.length
j.push(l)}l=d.gaQ()
a0=l.gaX(l)
if(a0){a0=a.dy
a0.toString
a3=l.gaX(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gfT(l))}if(d.ghz()){l=d.ghx()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.ghw()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gcT()){l=d.gcK()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gcL()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gcM()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.k)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.bW.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.c){b4.a6(j,b4.Q.e)
b5=b4.a
n=b4.Q.e
b5.a7(b5.cY,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gU(n).d7(0)}b5=b5.id
b5.toString
b5.ad(n.a4(0,!0))}if(q.db){b4.a6(j,b4.ch)
b5=b4.a
n=b4.ch
b5.a7(b5.cZ,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.d_
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.cx.e)
b5=b4.a
n=b4.cx.e
b5.a7(b5.d0,n)}b5=q.x
n=b5.a
if(!n)m=b5.c
else m=!0
if(m){m=b4.a
l=b4.cy.ch
m=m.d1
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.d2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.c){b4.a6(j,b4.cy.e)
b5=b4.a
n=b4.cy.e
b5.a7(b5.d3,n)}}b5=q.y
n=b5.a
m=!n
if(m)l=b5.c
else l=!0
if(l){if(n){n=b4.a
l=b4.db.f
n=n.d4
n.a.uniform1f(n.d,l)}if(b5.c){b4.a6(j,b4.db.e)
n=b4.a
l=b4.db.e
n.a7(n.d5,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(!n.c&&n.d>=6){n.c=!0
o.activeTexture(33984+n.a)
o.bindTexture(34067,n.b)}}n=b7.e
n.bJ(b6)
n.aN(b6)
n.hs(b6)
if(m)b5=b5.c
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
if(b5.c){b5.c=!1
o.activeTexture(33984+b5.a)
o.bindTexture(34067,null)}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.fJ()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cr().as}}
O.hB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.fQ(a,C.c.W(b+3,4)*4))}}
O.hC.prototype={
$2:function(a,b){return J.d3(a.a,b.a)}}
O.hD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.h_(a,C.c.W(b+3,4)*4))}}
O.hE.prototype={
$2:function(a,b){return J.d3(a.a,b.a)}}
O.hF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.hT(a,C.c.W(b+3,4)*4))}}
O.hG.prototype={
$2:function(a,b){return J.d3(a.a,b.a)}}
O.hH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.ia(a,C.c.W(b+3,4)*4))}}
O.hI.prototype={
$2:function(a,b){return J.d3(a.a,b.a)}}
O.hv.prototype={
aq:function(){var s,r=this
r.cg()
s=r.f
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.x(r.b,s,1)
s.b=!0
r.a.S(s)}}}
O.ci.prototype={
S:function(a){return this.a.S(a)},
bn:function(){return this.S(null)},
aq:function(){},
bF:function(a){var s,r,q=this
if(!q.c.p(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aq()
s=q.a
s.a=null
s.S(null)}},
saO:function(a){var s,r=this,q=r.c
if(!q.c)r.bF(new A.R(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gt().P(0,r.gb4())
s=r.e
r.e=a
a.gt().n(0,r.gb4())
q=new D.x(r.b+".textureCube",s,r.e)
q.b=!0
r.a.S(q)}}}
O.hw.prototype={}
O.ao.prototype={
cB:function(a){var s,r,q=this
if(!q.f.p(0,a)){s=q.f
q.f=a
r=new D.x(q.b+".color",s,a)
r.b=!0
q.a.S(r)}},
aq:function(){this.cg()
this.cB(new V.O(1,1,1))},
saK:function(a,b){this.bF(new A.R(!0,!1,this.c.c))
this.cB(b)}}
O.hy.prototype={}
O.hz.prototype={
aq:function(){var s,r=this
r.ci()
s=r.ch
$.z().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.x(r.b+".refraction",s,1)
s.b=!0
r.a.S(s)}}}
O.hA.prototype={
cC:function(a){var s=this,r=s.ch
$.z().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.x(s.b+".shininess",r,a)
r.b=!0
s.a.S(r)}},
aq:function(){this.ci()
this.cC(100)}}
O.ih.prototype={}
T.ii.prototype={}
T.ij.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.D():s}}
T.ik.prototype={
c0:function(a){var s,r=this,q=34067,p=a+"/posx.png",o=a+"/posy.png",n=a+"/posz.png",m=a+"/negx.png",l=a+"/negy.png",k=a+"/negz.png",j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.ij()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aE(s,i,p,34069,!1,!1)
r.aE(s,i,m,34070,!1,!1)
r.aE(s,i,o,34071,!1,!1)
r.aE(s,i,l,34072,!1,!1)
r.aE(s,i,n,34073,!1,!1)
r.aE(s,i,k,34074,!1,!1)
return s},
aE:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.Q(s,"load",new T.il(this,s,!1,b,!1,d,a),!1)},
fc:function(a,b,c){var s,r,q,p
b=V.k9(b)
s=V.k9(a.width)
r=V.k9(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jz()
q.width=s
q.height=r
p=C.f.dt(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nY(p.getImageData(0,0,q.width,q.height))}}}
T.il.prototype={
$1:function(a){var s=this,r=s.a,q=r.fc(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.V.hm(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.fO()}++r.e}}
X.jy.prototype={}
X.hg.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.D():s}}
X.dQ.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.D():s},
aC:function(a){var s=this.f
if(s!=null)s.D(a)},
dV:function(){return this.aC(null)},
saY:function(a){var s,r,q=this
if(!J.L(q.b,a)){s=q.b
if(s!=null)s.gt().P(0,q.gcm())
r=q.b
q.b=a
if(a!=null)a.gt().n(0,q.gcm())
s=new D.x("mover",r,q.b)
s.b=!0
q.aC(s)}}}
X.ie.prototype={}
V.b0.prototype={
b3:function(a){this.b=new P.hj(C.L)
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
n=l.b.e4(p,0,p.length)
m=n==null?p:n
C.J.dw(o,H.kb(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gbe(l.d).push(o)}},
di:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.ba()
r.toString
q=new H.l(s)
q=new P.bm(r.c7(new H.aF(q,q.gl(q))).a())
for(;q.q();)p.bg(q.gB(q))}}
V.ju.prototype={
$1:function(a){var s=C.d.dr(this.a.gfS(),2)
if(s!=="0.00")P.ka(s+" fps")}}
V.df.prototype={
bg:function(a){var s=this
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
ba:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iq()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=a2.j(0,p).k(0,p)
s=K.n(new H.l("_"))
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
r=K.n(new H.l("."))
s.a.push(r)
r=a2.j(0,n).k(0,m)
s=K.I("0","9")
r.a.push(s)
s=a2.j(0,m).k(0,m)
r=K.I("0","9")
s.a.push(r)
r=a2.j(0,q).k(0,l)
s=K.n(new H.l(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=K.n(new H.l(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=K.n(new H.l('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=K.n(new H.l('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=K.n(new H.l("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=K.n(new H.l('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.az())
r=a2.j(0,q).k(0,g)
s=K.n(new H.l("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=K.n(new H.l("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=K.n(new H.l("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=K.n(new H.l("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.az())
r=a2.j(0,q).k(0,d)
s=K.n(new H.l("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=K.n(new H.l("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=K.n(new H.l("\n"))
r.a.push(s)
s=a2.j(0,c).k(0,c)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.l("\n"))
r.a.push(s)
s=a2.j(0,d).k(0,a)
r=K.n(new H.l("*"))
s.a.push(r)
r=a2.j(0,a).k(0,a0)
s=K.n(new H.l("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,a)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.l("*"))
r.a.push(s)
s=a2.j(0,a0).k(0,b)
r=K.n(new H.l("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=K.n(new H.l(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=K.n(new H.l(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.I("Num")
r=a2.j(0,m)
r.d=r.a.I("Num")
r=a2.j(0,l)
r.d=r.a.I("Symbol")
r=a2.j(0,i)
r.d=r.a.I("String")
r=a2.j(0,f)
r.d=r.a.I("String")
r=a2.j(0,b)
r.d=r.a.I(c)
r=a2.j(0,a1)
r.d=r.a.I(a1)
r=a2.j(0,p)
r=r.d=r.a.I(p)
r.aw(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aw(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aw(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dp.prototype={
bg:function(a){var s=this
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
ba:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iq()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=d.j(0,p).k(0,p)
s=K.n(new H.l("_"))
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
r=K.n(new H.l("."))
s.a.push(r)
r=d.j(0,n).k(0,m)
s=K.I("0","9")
r.a.push(s)
s=d.j(0,m).k(0,m)
r=K.I("0","9")
s.a.push(r)
r=d.j(0,q).k(0,l)
s=K.n(new H.l(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=K.n(new H.l(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=K.n(new H.l("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=K.n(new H.l("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.az())
r=d.j(0,i).k(0,h)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,i).k(0,i)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,g)
r=K.n(new H.l("#"))
s.a.push(r)
r=d.j(0,g).k(0,g)
s=new K.Z()
s.a=[]
r.a.push(s)
r=K.n(new H.l("\n"))
s.a.push(r)
r=d.j(0,g).k(0,f)
s=K.n(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=K.n(new H.l(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=K.n(new H.l(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.I("Num")
s=d.j(0,m)
s.d=s.a.I("Num")
s=d.j(0,l)
s.d=s.a.I("Symbol")
s=d.j(0,h)
s.d=s.a.I(i)
s=d.j(0,f)
s.d=s.a.I(g)
s=d.j(0,e)
s.d=s.a.I(e)
s=d.j(0,p)
s=s.d=s.a.I(p)
s.aw(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aw(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aw(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dr.prototype={
bg:function(a){var s=this,r="#111"
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
ba:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iq()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=K.n(new H.l("_"))
s.a.push(r)
r=K.I("a","z")
s.a.push(r)
r=K.I("A","Z")
s.a.push(r)
r=j.j(0,p).k(0,p)
s=K.n(new H.l("_"))
r.a.push(s)
s=K.I("0","9")
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=j.j(0,p).k(0,o)
r=K.n(new H.l("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=K.n(new H.l("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=K.n(new H.l("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=K.n(new H.l('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=K.n(new H.l('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=K.n(new H.l("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=K.n(new H.l('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.az())
j.j(0,q).k(0,k).a.push(new K.az())
s=j.j(0,k).k(0,k)
r=new K.Z()
r.a=[]
s.a.push(r)
s=K.n(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.I("a","z")
r.a.push(s)
s=K.I("A","Z")
r.a.push(s)
s=j.j(0,n)
s.d=s.a.I("Symbol")
s=j.j(0,l)
s.d=s.a.I("String")
s=j.j(0,p)
r=s.a.I(p)
s.d=r
r.aw(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.I(o)
r=j.j(0,k)
r.d=r.a.I(k)
return j}}
V.dS.prototype={
di:function(a,b){this.d=[]
this.G(C.a.k(b,"\n"),"#111")},
bg:function(a){},
ba:function(){return null}}
V.i6.prototype={
dM:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.Q(o,"scroll",new V.i8(m),!1)},
cI:function(a){var s,r,q,p,o,n,m,l
this.fg()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fV(a)
q.toString
p=new H.l(p)
p=new P.bm(q.c7(new H.aF(p,p.gl(p))).a())
for(;p.q();){q=p.gB(p)
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
if(H.lo(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.l7(C.r,q,C.i,!1)
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
ds:function(a){var s,r,q,p=new V.df("dart")
p.b3("dart")
s=new V.dp("glsl")
s.b3("glsl")
r=new V.dr("html")
r.b3("html")
q=C.a.fR([p,s,r],new V.i9(a))
if(q!=null)return q
p=new V.dS("plain")
p.b3("plain")
return p},
cG:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.k4(q).bk(q,"+")){b2[r]=C.b.al(q,1)
a8.push(1)
s=!0}else if(C.b.bk(q,"-")){b2[r]=C.b.al(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.ds(b0)
p.di(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.l7(C.r,a9,C.i,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kf()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.k)(q),++a1)a0.appendChild(q[a1])
d.appendChild(c)
d.appendChild(b)
d.appendChild(a0)
m.appendChild(d)}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.k)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gK(q);a4.q();)b.appendChild(a4.gB(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
fg:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.iq()
s.d=s.j(0,p)
r=s.j(0,p).k(0,o)
q=K.n(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,o).k(0,o)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.n(new H.l("*"))
q.a.push(r)
r=s.j(0,o).k(0,"BoldEnd")
q=K.n(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,n)
q=K.n(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.j(0,n).k(0,n)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.n(new H.l("_"))
q.a.push(r)
r=s.j(0,n).k(0,m)
q=K.n(new H.l("_"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,l)
q=K.n(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.j(0,l).k(0,l)
q=new K.Z()
q.a=[]
r.a.push(q)
r=K.n(new H.l("`"))
q.a.push(r)
r=s.j(0,l).k(0,"CodeEnd")
q=K.n(new H.l("`"))
r.a.push(q)
r.c=!0
r=s.j(0,p).k(0,k)
q=K.n(new H.l("["))
r.a.push(q)
r.c=!0
r=s.j(0,k).k(0,j)
q=K.n(new H.l("|"))
r.a.push(q)
q=s.j(0,k).k(0,i)
r=K.n(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,k).k(0,k)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.n(new H.l("|]"))
r.a.push(q)
q=s.j(0,j).k(0,i)
r=K.n(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,j).k(0,j)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.n(new H.l("|]"))
r.a.push(q)
s.j(0,p).k(0,h).a.push(new K.az())
q=s.j(0,h).k(0,h)
r=new K.Z()
r.a=[]
q.a.push(r)
q=K.n(new H.l("*_`["))
r.a.push(q)
q=s.j(0,"BoldEnd")
q.d=q.a.I(o)
q=s.j(0,m)
q.d=q.a.I(n)
q=s.j(0,"CodeEnd")
q.d=q.a.I(l)
q=s.j(0,i)
q.d=q.a.I("Link")
q=s.j(0,h)
q.d=q.a.I(h)
this.b=s}}
V.i8.prototype={
$1:function(a){P.kM(C.j,new V.i7(this.a))}}
V.i7.prototype={
$0:function(){var s=C.d.ae(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.i9.prototype={
$1:function(a){return a.a===this.a}}
Z.js.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
s.cG("Vertex Shader","glsl",0,(q==null?null:q.c).split("\n"))
r=r.a
s.cG("Fragment Shader","glsl",0,(r==null?null:r.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.dD=s.i
s=J.b9.prototype
s.dF=s.i
s=P.f.prototype
s.dE=s.bj
s=W.y.prototype
s.bl=s.a9
s=W.cH.prototype
s.dG=s.ai
s=K.dq.prototype
s.dC=s.au
s.cf=s.i
s=O.ci.prototype
s.cg=s.aq
s=O.ao.prototype
s.ci=s.aq})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nb","m8",20)
r(P,"nR","mB",6)
r(P,"nS","mC",6)
r(P,"nT","mD",6)
q(P,"lg","nM",7)
r(W,"pn","h5",21)
p(W,"o5",4,null,["$4"],["mE"],13,0)
p(W,"o6",4,null,["$4"],["mF"],13,0)
var j
o(j=E.bv.prototype,"gdg",0,0,null,["$1","$0"],["dh","h3"],0,0)
o(j,"gde",0,0,null,["$1","$0"],["df","h2"],0,0)
o(j,"gdc",0,0,null,["$1","$0"],["dd","h_"],0,0)
n(j,"gfY","fZ",3)
n(j,"gh0","h1",3)
o(j=E.ee.prototype,"gcj",0,0,null,["$1","$0"],["cl","ck"],0,0)
m(j,"ghi","dm",7)
l(j=X.ez.prototype,"geC","eD",4)
l(j,"gep","eq",4)
l(j,"gew","ex",2)
l(j,"geG","eH",8)
l(j,"geE","eF",8)
l(j,"geK","eL",2)
l(j,"geO","eP",2)
l(j,"geA","eB",2)
l(j,"geM","eN",2)
l(j,"gey","ez",2)
l(j,"geQ","eR",18)
l(j,"geS","eT",4)
l(j,"gf4","f5",5)
l(j,"gf0","f1",5)
l(j,"gf2","f3",5)
o(D.bu.prototype,"gdP",0,0,null,["$1","$0"],["am","dQ"],0,0)
o(j=D.cb.prototype,"gcv",0,0,null,["$1","$0"],["cw","eI"],0,0)
l(j,"geV","eW",19)
n(j,"gej","ek",9)
n(j,"geZ","f_",9)
k(V.a_.prototype,"gl","bZ",10)
k(V.B.prototype,"gl","bZ",10)
o(j=U.bx.prototype,"gaF",0,0,null,["$1","$0"],["J","a_"],0,0)
n(j,"geh","ei",11)
n(j,"geX","eY",11)
o(j=U.cu.prototype,"gaF",0,0,null,["$1","$0"],["J","a_"],0,0)
l(j,"gbw","bx",1)
l(j,"gby","bz",1)
l(j,"gbA","bB",1)
o(j=U.cv.prototype,"gaF",0,0,null,["$1","$0"],["J","a_"],0,0)
l(j,"gbw","bx",1)
l(j,"gby","bz",1)
l(j,"gbA","bB",1)
l(j,"gea","eb",1)
l(j,"gec","ed",1)
l(j,"gfn","fo",1)
l(j,"gfl","fm",1)
l(j,"gfj","fk",1)
l(U.cw.prototype,"gef","eg",1)
o(j=M.di.prototype,"gag",0,0,null,["$1","$0"],["an","dR"],0,0)
n(j,"ger","es",3)
n(j,"geu","ev",3)
o(j=O.dB.prototype,"gb4",0,0,null,["$1","$0"],["S","bn"],0,0)
o(j,"gfa",0,0,null,["$1","$0"],["cz","fb"],0,0)
n(j,"gel","em",12)
n(j,"gen","eo",12)
o(O.ci.prototype,"gb4",0,0,null,["$1","$0"],["S","bn"],0,0)
o(X.dQ.prototype,"gcm",0,0,null,["$1","$0"],["aC","dV"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.jH,J.a,J.Y,P.cA,P.f,H.aF,P.dt,H.c4,H.ex,H.iu,P.G,H.hR,H.fg,H.bs,P.an,H.hq,H.dy,H.hm,H.ac,H.eT,P.cN,P.bQ,P.bm,P.eE,P.e7,P.e8,P.cs,P.je,P.cG,P.j2,P.cz,P.A,P.db,P.hk,P.jc,P.av,P.a6,P.N,P.b3,P.dP,P.cq,P.eQ,P.hf,P.hh,P.am,P.dz,P.aa,P.K,P.aI,W.fW,W.jD,W.jT,W.bP,W.E,W.co,W.cH,W.fl,W.c5,W.a9,W.j6,W.fv,P.cP,P.f9,K.az,K.dq,K.hV,K.i1,L.e6,L.ef,L.eg,L.ip,O.bt,O.cj,E.fR,E.bv,E.br,E.bF,E.eN,E.hW,E.ee,Z.eC,Z.iT,Z.d9,Z.c6,Z.aL,D.fT,D.bw,D.P,X.da,X.dw,X.ho,X.hs,X.a8,X.hO,X.ir,X.ez,D.bu,D.al,V.O,V.b1,V.h8,V.dC,V.bA,V.aq,V.a3,V.dU,V.dY,V.a_,V.B,U.cu,U.cv,U.cw,M.di,A.fL,A.fM,A.R,A.fQ,A.h_,A.hT,A.ia,A.hx,A.en,A.eo,A.er,A.eu,A.iw,A.iC,F.hc,F.hp,F.hS,F.i2,F.i3,F.i4,F.i5,F.iK,F.iL,F.iM,F.iP,F.iQ,O.ih,O.ci,O.hy,T.ik,X.jy,X.ie,X.dQ,V.b0,V.i6])
q(J.a,[J.hl,J.ca,J.b9,J.a7,J.b8,J.ak,H.cl,W.b,W.fJ,W.d8,W.aj,W.F,W.eI,W.a5,W.fZ,W.h0,W.eJ,W.c1,W.eL,W.h1,W.h,W.eR,W.b5,W.hi,W.eW,W.b7,W.hr,W.hJ,W.f_,W.f0,W.bc,W.f1,W.f3,W.be,W.f7,W.fa,W.bg,W.fb,W.bh,W.fh,W.aJ,W.fn,W.io,W.bi,W.fp,W.is,W.iE,W.fw,W.fy,W.fA,W.fC,W.fE,P.bz,P.eY,P.bE,P.f5,P.hU,P.fi,P.bL,P.fr,P.fN,P.eF,P.dZ,P.fe])
q(J.b9,[J.dR,J.bk,J.af])
r(J.du,J.a7)
q(J.b8,[J.c9,J.c8])
r(P.cd,P.cA)
q(P.cd,[H.bM,W.eG,W.T,P.dm])
r(H.l,H.bM)
q(P.f,[H.i,H.bb,H.bl,P.c7])
q(H.i,[H.ce,H.aE])
r(H.c2,H.bb)
q(P.dt,[H.cg,H.eD])
r(H.ch,H.ce)
q(P.G,[H.dL,H.dv,H.ew,H.e_,H.eO,P.d6,P.dM,P.a1,P.ey,P.ev,P.bJ,P.dc,P.de])
q(H.bs,[H.ig,H.hn,H.jn,H.jo,H.jp,P.iV,P.iU,P.iW,P.iX,P.jb,P.ja,P.jj,P.j4,P.j5,P.ht,P.h2,P.h3,W.h4,W.hL,W.hN,W.i0,W.id,W.j_,W.hQ,W.hP,W.j7,W.j8,W.j9,W.jd,P.jk,P.hd,P.he,P.fP,E.hX,E.hY,E.hZ,E.im,D.ha,D.hb,F.jf,F.iS,F.iR,F.iN,F.iO,O.hB,O.hC,O.hD,O.hE,O.hF,O.hG,O.hH,O.hI,T.il,V.ju,V.i8,V.i7,V.i9,Z.js])
q(H.ig,[H.ib,H.bX])
r(P.dA,P.an)
q(P.dA,[H.v,W.iY])
r(H.bD,H.cl)
q(H.bD,[H.cC,H.cE])
r(H.cD,H.cC)
r(H.bd,H.cD)
r(H.cF,H.cE)
r(H.ck,H.cF)
q(H.ck,[H.dF,H.dG,H.dH,H.dI,H.dJ,H.cm,H.dK])
r(H.cO,H.eO)
r(P.cK,P.c7)
r(P.j3,P.je)
r(P.cy,P.cG)
r(P.dd,P.e8)
r(P.h6,P.db)
q(P.dd,[P.hj,P.iG])
r(P.iF,P.h6)
q(P.N,[P.V,P.r])
q(P.a1,[P.bH,P.ds])
q(W.b,[W.u,W.dl,W.aH,W.cI,W.aK,W.ag,W.cL,W.eB,W.bN,P.d7,P.aA])
q(W.u,[W.y,W.ae,W.bO])
q(W.y,[W.m,P.j])
q(W.m,[W.d4,W.d5,W.bq,W.aZ,W.b_,W.c_,W.dn,W.by,W.e0,W.cr,W.ea,W.eb,W.bK])
r(W.fV,W.aj)
r(W.bZ,W.eI)
q(W.a5,[W.fX,W.fY])
r(W.eK,W.eJ)
r(W.c0,W.eK)
r(W.eM,W.eL)
r(W.dh,W.eM)
r(W.b4,W.d8)
r(W.eS,W.eR)
r(W.dk,W.eS)
r(W.eX,W.eW)
r(W.b6,W.eX)
r(W.at,W.h)
q(W.at,[W.ba,W.a2,W.bj])
r(W.hK,W.f_)
r(W.hM,W.f0)
r(W.f2,W.f1)
r(W.dE,W.f2)
r(W.f4,W.f3)
r(W.cn,W.f4)
r(W.f8,W.f7)
r(W.dT,W.f8)
r(W.i_,W.fa)
r(W.cJ,W.cI)
r(W.e3,W.cJ)
r(W.fc,W.fb)
r(W.e4,W.fc)
r(W.ic,W.fh)
r(W.fo,W.fn)
r(W.ec,W.fo)
r(W.cM,W.cL)
r(W.ed,W.cM)
r(W.fq,W.fp)
r(W.eh,W.fq)
r(W.aM,W.a2)
r(W.fx,W.fw)
r(W.eH,W.fx)
r(W.cx,W.c1)
r(W.fz,W.fy)
r(W.eU,W.fz)
r(W.fB,W.fA)
r(W.cB,W.fB)
r(W.fD,W.fC)
r(W.fd,W.fD)
r(W.fF,W.fE)
r(W.fk,W.fF)
r(W.iZ,W.iY)
r(W.eP,P.e7)
r(W.fm,W.cH)
r(P.ab,P.f9)
r(P.eZ,P.eY)
r(P.dx,P.eZ)
r(P.f6,P.f5)
r(P.dN,P.f6)
r(P.bI,P.j)
r(P.fj,P.fi)
r(P.e9,P.fj)
r(P.fs,P.fr)
r(P.ei,P.fs)
r(P.fO,P.eF)
r(P.dO,P.aA)
r(P.ff,P.fe)
r(P.e5,P.ff)
q(K.dq,[K.Z,L.it])
q(E.fR,[Z.fS,A.e1,T.ii])
q(D.P,[D.aC,D.aD,D.x,X.dV])
q(X.dV,[X.cf,X.bB,X.bC,X.ct])
q(O.bt,[D.cb,U.bx])
q(D.fT,[U.fU,U.S])
r(U.bY,U.S)
r(A.hu,A.e1)
q(A.iw,[A.ek,A.iz,A.iA,A.iB,A.ix,A.ej,A.iy,A.el,A.em,A.iD,A.ep,A.eq,A.es,A.et])
r(O.dB,O.ih)
q(O.ci,[O.hv,O.hw,O.ao])
q(O.ao,[O.hz,O.hA])
r(T.ij,T.ii)
r(X.hg,X.ie)
q(V.b0,[V.df,V.dp,V.dr,V.dS])
s(H.bM,H.ex)
s(H.cC,P.A)
s(H.cD,H.c4)
s(H.cE,P.A)
s(H.cF,H.c4)
s(P.cA,P.A)
s(W.eI,W.fW)
s(W.eJ,P.A)
s(W.eK,W.E)
s(W.eL,P.A)
s(W.eM,W.E)
s(W.eR,P.A)
s(W.eS,W.E)
s(W.eW,P.A)
s(W.eX,W.E)
s(W.f_,P.an)
s(W.f0,P.an)
s(W.f1,P.A)
s(W.f2,W.E)
s(W.f3,P.A)
s(W.f4,W.E)
s(W.f7,P.A)
s(W.f8,W.E)
s(W.fa,P.an)
s(W.cI,P.A)
s(W.cJ,W.E)
s(W.fb,P.A)
s(W.fc,W.E)
s(W.fh,P.an)
s(W.fn,P.A)
s(W.fo,W.E)
s(W.cL,P.A)
s(W.cM,W.E)
s(W.fp,P.A)
s(W.fq,W.E)
s(W.fw,P.A)
s(W.fx,W.E)
s(W.fy,P.A)
s(W.fz,W.E)
s(W.fA,P.A)
s(W.fB,W.E)
s(W.fC,P.A)
s(W.fD,W.E)
s(W.fE,P.A)
s(W.fF,W.E)
s(P.eY,P.A)
s(P.eZ,W.E)
s(P.f5,P.A)
s(P.f6,W.E)
s(P.fi,P.A)
s(P.fj,W.E)
s(P.fr,P.A)
s(P.fs,W.E)
s(P.eF,P.an)
s(P.fe,P.A)
s(P.ff,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{r:"int",V:"double",N:"num",K:"String",av:"bool",aa:"Null",am:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([P*])","~(P*)","~(a2*)","~(r*,f<bv*>*)","~(h*)","~(bj*)","~(~())","~()","~(ba*)","~(r*,f<al*>*)","V*()","~(r*,f<S*>*)","~(r*,f<bA*>*)","av(y,K,K,bP)","@(@)","aa(@)","aa(J?,J?)","aa(@,@)","~(aM*)","av*(f<al*>*)","r(@,@)","K(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mY(v.typeUniverse,JSON.parse('{"af":"b9","dR":"b9","bk":"b9","on":"h","ox":"h","op":"aA","oo":"b","oD":"b","oF":"b","om":"j","oy":"j","oq":"m","oB":"m","oz":"u","ow":"u","p2":"ag","ou":"at","or":"ae","oG":"ae","oE":"a2","oA":"b6","oC":"bd","a7":{"i":["1"],"f":["1"]},"du":{"i":["1"],"f":["1"]},"b8":{"V":[],"N":[]},"c9":{"V":[],"r":[],"N":[]},"c8":{"V":[],"N":[]},"ak":{"K":[]},"l":{"i":["r"],"f":["r"]},"i":{"f":["1"]},"ce":{"i":["1"],"f":["1"]},"bb":{"f":["2"]},"c2":{"i":["2"],"f":["2"]},"ch":{"i":["2"],"f":["2"]},"bl":{"f":["1"]},"bM":{"i":["1"],"f":["1"]},"dL":{"G":[]},"dv":{"G":[]},"ew":{"G":[]},"e_":{"G":[]},"aE":{"i":["1"],"f":["1"]},"bD":{"t":["1"]},"bd":{"t":["V"],"i":["V"],"f":["V"]},"ck":{"t":["r"],"i":["r"],"f":["r"]},"dF":{"t":["r"],"i":["r"],"f":["r"]},"dG":{"t":["r"],"i":["r"],"f":["r"]},"dH":{"t":["r"],"i":["r"],"f":["r"]},"dI":{"t":["r"],"i":["r"],"f":["r"]},"dJ":{"t":["r"],"i":["r"],"f":["r"]},"cm":{"t":["r"],"i":["r"],"f":["r"]},"dK":{"t":["r"],"i":["r"],"f":["r"]},"eO":{"G":[]},"cO":{"G":[]},"cN":{"cs":[]},"cK":{"f":["1"]},"cy":{"i":["1"],"f":["1"]},"c7":{"f":["1"]},"cd":{"i":["1"],"f":["1"]},"cG":{"i":["1"],"f":["1"]},"V":{"N":[]},"d6":{"G":[]},"dM":{"G":[]},"a1":{"G":[]},"bH":{"G":[]},"ds":{"G":[]},"ey":{"G":[]},"ev":{"G":[]},"bJ":{"G":[]},"dc":{"G":[]},"dP":{"G":[]},"cq":{"G":[]},"de":{"G":[]},"r":{"N":[]},"am":{"i":["1"],"f":["1"]},"m":{"y":[],"u":[],"b":[]},"d4":{"y":[],"u":[],"b":[]},"d5":{"y":[],"u":[],"b":[]},"bq":{"y":[],"u":[],"b":[]},"aZ":{"y":[],"u":[],"b":[]},"b_":{"y":[],"u":[],"b":[]},"ae":{"u":[],"b":[]},"c_":{"y":[],"u":[],"b":[]},"c0":{"t":["ab<N>"],"i":["ab<N>"],"f":["ab<N>"]},"c1":{"ab":["N"]},"dh":{"t":["K"],"i":["K"],"f":["K"]},"eG":{"i":["y"],"f":["y"]},"y":{"u":[],"b":[]},"dk":{"t":["b4"],"i":["b4"],"f":["b4"]},"dl":{"b":[]},"dn":{"y":[],"u":[],"b":[]},"b6":{"t":["u"],"i":["u"],"f":["u"]},"by":{"y":[],"u":[],"b":[]},"ba":{"h":[]},"dE":{"t":["bc"],"i":["bc"],"f":["bc"]},"a2":{"h":[]},"T":{"i":["u"],"f":["u"]},"u":{"b":[]},"cn":{"t":["u"],"i":["u"],"f":["u"]},"dT":{"t":["be"],"i":["be"],"f":["be"]},"e0":{"y":[],"u":[],"b":[]},"aH":{"b":[]},"e3":{"t":["aH"],"b":[],"i":["aH"],"f":["aH"]},"e4":{"t":["bg"],"i":["bg"],"f":["bg"]},"cr":{"y":[],"u":[],"b":[]},"ea":{"y":[],"u":[],"b":[]},"eb":{"y":[],"u":[],"b":[]},"bK":{"y":[],"u":[],"b":[]},"aK":{"b":[]},"ag":{"b":[]},"ec":{"t":["ag"],"i":["ag"],"f":["ag"]},"ed":{"t":["aK"],"b":[],"i":["aK"],"f":["aK"]},"bj":{"h":[]},"eh":{"t":["bi"],"i":["bi"],"f":["bi"]},"at":{"h":[]},"eB":{"b":[]},"aM":{"a2":[],"h":[]},"bN":{"b":[]},"bO":{"u":[],"b":[]},"eH":{"t":["F"],"i":["F"],"f":["F"]},"cx":{"ab":["N"]},"eU":{"t":["b5?"],"i":["b5?"],"f":["b5?"]},"cB":{"t":["u"],"i":["u"],"f":["u"]},"fd":{"t":["bh"],"i":["bh"],"f":["bh"]},"fk":{"t":["aJ"],"i":["aJ"],"f":["aJ"]},"bP":{"a9":[]},"co":{"a9":[]},"cH":{"a9":[]},"fm":{"a9":[]},"fl":{"a9":[]},"cP":{"b7":[]},"dm":{"i":["y"],"f":["y"]},"ab":{"f9":["1"]},"dx":{"i":["bz"],"f":["bz"]},"dN":{"i":["bE"],"f":["bE"]},"bI":{"j":[],"y":[],"u":[],"b":[]},"e9":{"i":["K"],"f":["K"]},"j":{"y":[],"u":[],"b":[]},"ei":{"i":["bL"],"f":["bL"]},"d7":{"b":[]},"aA":{"b":[]},"dO":{"b":[]},"e5":{"i":["dz<@,@>"],"f":["dz<@,@>"]},"bt":{"f":["1*"]},"aC":{"P":[]},"aD":{"P":[]},"x":{"P":[]},"cf":{"P":[]},"bB":{"P":[]},"bC":{"P":[]},"dV":{"P":[]},"ct":{"P":[]},"bu":{"al":[]},"cb":{"f":["al*"]},"bY":{"S":[]},"bx":{"S":[],"f":["S*"]},"cu":{"S":[]},"cv":{"S":[]},"cw":{"S":[]},"df":{"b0":[]},"dp":{"b0":[]},"dr":{"b0":[]},"dS":{"b0":[]}}'))
H.mX(v.typeUniverse,JSON.parse('{"a7":1,"du":1,"Y":1,"i":1,"ce":1,"aF":1,"bb":2,"c2":2,"cg":2,"ch":2,"bl":1,"eD":1,"c4":1,"ex":1,"bM":1,"aE":1,"dy":1,"bD":1,"bm":1,"cK":1,"e7":1,"e8":2,"cz":1,"c7":1,"cd":1,"A":1,"dA":2,"an":2,"cG":1,"cA":1,"db":2,"dd":2,"f":1,"dt":1,"am":1,"eP":1,"E":1,"c5":1,"bt":1,"aC":1,"aD":1,"x":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.o1
return{v:s("bq"),t:s("aZ"),U:s("i<@>"),h:s("y"),C:s("G"),D:s("h"),Z:s("hh"),s:s("b7"),R:s("by"),b:s("a7<@>"),T:s("ca"),g:s("af"),p:s("t<@>"),G:s("v<K*,e1*>"),V:s("v<K*,e6*>"),i:s("v<K*,K*>"),w:s("v<K*,eg*>"),L:s("v<r*,am<en*>*>"),M:s("v<r*,am<eo*>*>"),W:s("v<r*,am<er*>*>"),d:s("v<r*,am<eu*>*>"),J:s("v<r*,ek*>"),E:s("v<r*,av*>"),a:s("v<r*,r*>"),P:s("aa"),K:s("J"),q:s("ab<N>"),Y:s("bI"),N:s("K"),k:s("j"),f:s("bK"),l:s("cs"),o:s("bk"),x:s("bO"),cB:s("av"),cb:s("V"),z:s("@"),S:s("r"),B:s("b_*"),cj:s("cf*"),c:s("bB*"),F:s("bC*"),A:s("0&*"),_:s("J*"),bw:s("K*"),j:s("ef*"),m:s("ct*"),n:s("ej*"),r:s("el*"),y:s("em*"),O:s("ep*"),I:s("eq*"),u:s("es*"),Q:s("et*"),e:s("r*"),bc:s("kq<aa>?"),X:s("J?"),H:s("N")}})();(function constants(){var s=hunkHelpers.makeConstList
C.m=W.aZ.prototype
C.f=W.b_.prototype
C.J=W.c_.prototype
C.M=J.a.prototype
C.a=J.a7.prototype
C.N=J.c8.prototype
C.c=J.c9.prototype
C.h=J.ca.prototype
C.d=J.b8.prototype
C.b=J.ak.prototype
C.O=J.af.prototype
C.v=J.dR.prototype
C.V=P.dZ.prototype
C.w=W.cr.prototype
C.l=J.bk.prototype
C.x=W.aM.prototype
C.y=W.bN.prototype
C.z=new E.br("Browser.chrome")
C.n=new E.br("Browser.firefox")
C.o=new E.br("Browser.edge")
C.A=new E.br("Browser.other")
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

C.H=new P.dP()
C.i=new P.iF()
C.I=new P.iG()
C.e=new P.j3()
C.j=new P.b3(0)
C.K=new P.b3(5e6)
C.L=new P.hk("element",!1,!1,!1)
C.P=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.Q=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.R=s([])
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.t=s(["bind","if","ref","repeat","syntax"])
C.k=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.S=new E.bF("OperatingSystem.windows")
C.u=new E.bF("OperatingSystem.mac")
C.T=new E.bF("OperatingSystem.linux")
C.U=new E.bF("OperatingSystem.other")
C.W=new P.bQ(null,2)})();(function staticFields(){$.kY=null
$.ai=0
$.kj=null
$.ki=null
$.lh=null
$.lf=null
$.lm=null
$.jl=null
$.jq=null
$.k6=null
$.bR=null
$.cW=null
$.cX=null
$.k1=!1
$.ah=C.e
$.a0=[]
$.aB=null
$.jC=null
$.kp=null
$.ko=null
$.eV=P.kt(t.N,t.Z)
$.h7=null
$.kx=null
$.kA=null
$.ar=null
$.kG=null
$.kQ=null
$.kS=null
$.iH=null
$.iI=null
$.iJ=null
$.kR=null
$.kz=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"ov","ls",function(){return H.o4("_$dart_dartClosure")})
s($,"oH","lt",function(){return H.as(H.iv({
toString:function(){return"$receiver$"}}))})
s($,"oI","lu",function(){return H.as(H.iv({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oJ","lv",function(){return H.as(H.iv(null))})
s($,"oK","lw",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oN","lz",function(){return H.as(H.iv(void 0))})
s($,"oO","lA",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oM","ly",function(){return H.as(H.kO(null))})
s($,"oL","lx",function(){return H.as(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oQ","lC",function(){return H.as(H.kO(void 0))})
s($,"oP","lB",function(){return H.as(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"p3","kc",function(){return P.mA()})
s($,"p6","lH",function(){return P.mo("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p4","lG",function(){return P.ku(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oX","lF",function(){return Z.ad(0)})
s($,"oR","lD",function(){return Z.ad(511)})
s($,"oZ","aV",function(){return Z.ad(1)})
s($,"oY","aU",function(){return Z.ad(2)})
s($,"oT","aT",function(){return Z.ad(4)})
s($,"p_","bp",function(){return Z.ad(8)})
s($,"p0","aW",function(){return Z.ad(16)})
s($,"oU","d0",function(){return Z.ad(32)})
s($,"oV","d1",function(){return Z.ad(64)})
s($,"oW","lE",function(){return Z.ad(96)})
s($,"p1","bW",function(){return Z.ad(128)})
s($,"oS","aS",function(){return Z.ad(256)})
s($,"ot","lr",function(){return new V.h8()})
s($,"os","z",function(){return $.lr()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cl,ArrayBufferView:H.cl,Float32Array:H.bd,Float64Array:H.bd,Int16Array:H.dF,Int32Array:H.dG,Int8Array:H.dH,Uint16Array:H.dI,Uint32Array:H.dJ,Uint8ClampedArray:H.cm,CanvasPixelArray:H.cm,Uint8Array:H.dK,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.fJ,HTMLAnchorElement:W.d4,HTMLAreaElement:W.d5,HTMLBaseElement:W.bq,Blob:W.d8,HTMLBodyElement:W.aZ,HTMLCanvasElement:W.b_,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSPerspective:W.fV,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,CSSImageValue:W.a5,CSSKeywordValue:W.a5,CSSNumericValue:W.a5,CSSPositionValue:W.a5,CSSResourceValue:W.a5,CSSUnitValue:W.a5,CSSURLImageValue:W.a5,CSSStyleValue:W.a5,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.fX,CSSUnparsedValue:W.fY,DataTransferItemList:W.fZ,HTMLDivElement:W.c_,DOMException:W.h0,ClientRectList:W.c0,DOMRectList:W.c0,DOMRectReadOnly:W.c1,DOMStringList:W.dh,DOMTokenList:W.h1,Element:W.y,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.b4,FileList:W.dk,FileWriter:W.dl,HTMLFormElement:W.dn,Gamepad:W.b5,History:W.hi,HTMLCollection:W.b6,HTMLFormControlsCollection:W.b6,HTMLOptionsCollection:W.b6,ImageData:W.b7,HTMLImageElement:W.by,KeyboardEvent:W.ba,Location:W.hr,MediaList:W.hJ,MIDIInputMap:W.hK,MIDIOutputMap:W.hM,MimeType:W.bc,MimeTypeArray:W.dE,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.cn,RadioNodeList:W.cn,Plugin:W.be,PluginArray:W.dT,RTCStatsReport:W.i_,HTMLSelectElement:W.e0,SourceBuffer:W.aH,SourceBufferList:W.e3,SpeechGrammar:W.bg,SpeechGrammarList:W.e4,SpeechRecognitionResult:W.bh,Storage:W.ic,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,HTMLTableElement:W.cr,HTMLTableRowElement:W.ea,HTMLTableSectionElement:W.eb,HTMLTemplateElement:W.bK,TextTrack:W.aK,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.ec,TextTrackList:W.ed,TimeRanges:W.io,Touch:W.bi,TouchEvent:W.bj,TouchList:W.eh,TrackDefaultList:W.is,CompositionEvent:W.at,FocusEvent:W.at,TextEvent:W.at,UIEvent:W.at,URL:W.iE,VideoTrackList:W.eB,WheelEvent:W.aM,Window:W.bN,DOMWindow:W.bN,Attr:W.bO,CSSRuleList:W.eH,ClientRect:W.cx,DOMRect:W.cx,GamepadList:W.eU,NamedNodeMap:W.cB,MozNamedAttrMap:W.cB,SpeechRecognitionResultList:W.fd,StyleSheetList:W.fk,SVGLength:P.bz,SVGLengthList:P.dx,SVGNumber:P.bE,SVGNumberList:P.dN,SVGPointList:P.hU,SVGScriptElement:P.bI,SVGStringList:P.e9,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bL,SVGTransformList:P.ei,AudioBuffer:P.fN,AudioParamMap:P.fO,AudioTrackList:P.d7,AudioContext:P.aA,webkitAudioContext:P.aA,BaseAudioContext:P.aA,OfflineAudioContext:P.dO,WebGL2RenderingContext:P.dZ,SQLResultSetRowList:P.e5})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.lk,[])
else Z.lk([])})})()
//# sourceMappingURL=test.dart.js.map
