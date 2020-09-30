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
a[c]=function(){a[c]=function(){H.nW(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jM(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jr:function jr(){},
lL:function(a,b){if(t.O.b(a))return new H.bZ(a,b)
return new H.b4(a,b)},
lE:function(){return new P.dW("No element")},
m7:function(a,b){var s=J.bj(a)
if(typeof s!=="number")return s.aa()
H.dR(a,0,s-1,b)},
dR:function(a,b,c,d){if(c-b<=32)H.m6(a,b,c,d)
else H.m5(a,b,c,d)},
m6:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bf(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a9()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
m5:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a1(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a1(a6+a7,2),d=e-h,c=e+h,b=J.bf(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a9()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.A(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.af()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a9()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
q=m
r=l
break}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.af()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a9()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a9()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.af()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.k(a5,a6,b.h(a5,a4))
b.k(a5,a4,a0)
a4=q+1
b.k(a5,a7,b.h(a5,a4))
b.k(a5,a4,a2)
H.dR(a5,a6,r-2,a8)
H.dR(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.A(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.A(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.af()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.dR(a5,r,q,a8)}else H.dR(a5,r,q,a8)},
H:function H(a){this.a=a},
i:function i(){},
bu:function bu(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b4:function b4(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
cc:function cc(a,b){this.a=null
this.b=a
this.c=b},
cu:function cu(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
c1:function c1(){},
el:function el(){},
bF:function bF(){},
l4:function(a){var s,r=H.l3(a)
if(r!=null)return r
s="minified:"+a
return s},
nO:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
if(typeof s!="string")throw H.c(H.aP(a))
return s},
ck:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dJ:function(a){return H.lQ(a)},
lQ:function(a){var s,r,q
if(a instanceof P.G)return H.a4(H.cV(a),null)
if(J.cU(a)===C.K||t.o.b(a)){s=C.o(a)
if(H.ki(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.ki(q))return q}}return H.a4(H.cV(a),null)},
ki:function(a){var s=a!=="Object"&&a!==""
return s},
kh:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
m_:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(!H.bL(q))throw H.c(H.aP(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bd(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aP(q))}return H.kh(p)},
lZ:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bL(q))throw H.c(H.aP(q))
if(q<0)throw H.c(H.aP(q))
if(q>65535)return H.m_(a)}return H.kh(a)},
lY:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.bd(s,10))>>>0,56320|s&1023)}throw H.c(P.au(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lX:function(a){var s=H.bA(a).getFullYear()+0
return s},
lV:function(a){var s=H.bA(a).getMonth()+1
return s},
lR:function(a){var s=H.bA(a).getDate()+0
return s},
lS:function(a){var s=H.bA(a).getHours()+0
return s},
lU:function(a){var s=H.bA(a).getMinutes()+0
return s},
lW:function(a){var s=H.bA(a).getSeconds()+0
return s},
lT:function(a){var s=H.bA(a).getMilliseconds()+0
return s},
q:function(a){throw H.c(H.aP(a))},
e:function(a,b){if(a==null)J.bj(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var s,r,q="index"
if(!H.bL(b))return new P.a5(!0,b,q,null)
s=J.bj(a)
if(!(b<0)){if(typeof s!=="number")return H.q(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dK(b,q)},
nD:function(a,b,c){if(a>c)return P.au(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.au(b,a,c,"end",null)
return new P.a5(!0,b,"end",null)},
aP:function(a){return new P.a5(!0,a,null,null)},
ny:function(a){if(typeof a!="number")throw H.c(H.aP(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dB()
s=new Error()
s.dartException=a
r=H.nX
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nX:function(){return J.a0(this.dartException)},
n:function(a){throw H.c(a)},
m:function(a){throw H.c(P.bU(a))},
av:function(a){var s,r,q,p,o,n
a=H.l0(a.replace(String({}),'$receiver$'))
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
ks:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kc:function(a,b){return new H.dA(a,b==null?null:b.method)},
js:function(a,b){var s=b==null,r=s?null:b.method
return new H.dl(a,r,s?null:b.receiver)},
ft:function(a){if(a==null)return new H.hI(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bh(a,a.dartException)
return H.nu(a)},
bh:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nu:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bd(r,16)&8191)===10)switch(q){case 438:return H.bh(a,H.js(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bh(a,H.kc(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.l7()
o=$.l8()
n=$.l9()
m=$.la()
l=$.ld()
k=$.le()
j=$.lc()
$.lb()
i=$.lg()
h=$.lf()
g=p.ai(s)
if(g!=null)return H.bh(a,H.js(s,g))
else{g=o.ai(s)
if(g!=null){g.method="call"
return H.bh(a,H.js(s,g))}else{g=n.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=l.ai(s)
if(g==null){g=k.ai(s)
if(g==null){g=j.ai(s)
if(g==null){g=m.ai(s)
if(g==null){g=i.ai(s)
if(g==null){g=h.ai(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bh(a,H.kc(s,g))}}return H.bh(a,new H.ek(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cn()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bh(a,new P.a5(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cn()
return a},
jO:function(a){var s
if(a==null)return new H.f4(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f4(a)},
nF:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nN:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.l("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nN)
a.$identity=s
return s},
lz:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i2().constructor.prototype):Object.create(new H.bS(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aj
if(typeof r!=="number")return r.w()
$.aj=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k_(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lv(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k_(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lv:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kW,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lt:H.ls
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lw:function(a,b,c,d){var s=H.jZ
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k_:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ly(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lw(r,!p,s,b)
if(r===0){p=$.aj
if(typeof p!=="number")return p.w()
$.aj=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.ji())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aj
if(typeof p!=="number")return p.w()
$.aj=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.ji())+"."+H.d(s)+"("+m+");}")()},
lx:function(a,b,c,d){var s=H.jZ,r=H.lu
switch(b?-1:a){case 0:throw H.c(new H.dN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ly:function(a,b){var s,r,q,p,o,n,m=H.ji(),l=$.jX
if(l==null)l=$.jX=H.jW("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lx(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.aj
if(typeof o!=="number")return o.w()
$.aj=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.aj
if(typeof o!=="number")return o.w()
$.aj=o+1
return new Function(p+o+"}")()},
jM:function(a,b,c,d,e,f,g){return H.lz(a,b,c,d,!!e,!!f,g)},
ls:function(a,b){return H.fg(v.typeUniverse,H.cV(a.a),b)},
lt:function(a,b){return H.fg(v.typeUniverse,H.cV(a.c),b)},
jZ:function(a){return a.a},
lu:function(a){return a.c},
ji:function(){var s=$.jY
return s==null?$.jY=H.jW("self"):s},
jW:function(a){var s,r,q,p=new H.bS("self","target","receiver","name"),o=J.jq(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jg("Field name "+a+" not found."))},
nW:function(a){throw H.c(new P.d9(a))},
nJ:function(a){return v.getIsolateTag(a)},
oZ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nQ:function(a){var s,r,q,p,o,n=$.kV.$1(a),m=$.j6[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ja[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kT.$2(a,n)
if(q!=null){m=$.j6[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ja[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jc(s)
$.j6[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ja[n]=s
return s}if(p==="-"){o=H.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kZ(a,s)
if(p==="*")throw H.c(P.kt(n))
if(v.leafTags[n]===true){o=H.jc(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kZ(a,s)},
kZ:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jc:function(a){return J.jR(a,!1,null,!!a.$ir)},
nR:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jc(s)
else return J.jR(s,c,null,null)},
nL:function(){if(!0===$.jP)return
$.jP=!0
H.nM()},
nM:function(){var s,r,q,p,o,n,m,l
$.j6=Object.create(null)
$.ja=Object.create(null)
H.nK()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l_.$1(o)
if(n!=null){m=H.nR(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nK:function(){var s,r,q,p,o,n,m=C.z()
m=H.bN(C.A,H.bN(C.B,H.bN(C.p,H.bN(C.p,H.bN(C.C,H.bN(C.D,H.bN(C.E(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kV=new H.j7(p)
$.kT=new H.j8(o)
$.l_=new H.j9(n)},
bN:function(a,b){return a(b)||b},
lH:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h7("Illegal RegExp pattern ("+String(n)+")",a))},
l1:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nE:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l2:function(a,b,c){var s=H.nU(a,b,c)
return s},
nU:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l0(b),'g'),H.nE(c))},
im:function im(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dA:function dA(a,b){this.a=a
this.b=b},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a},
hI:function hI(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
bl:function bl(){},
i6:function i6(){},
i2:function i2(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dN:function dN(a){this.a=a},
t:function t(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hf:function hf(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b
this.c=null},
aD:function aD(a){this.a=a},
dp:function dp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
he:function he(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bK:function(a){return a},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
mI:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nD(a,b,c))
return b},
ch:function ch(){},
bx:function bx(){},
b7:function b7(){},
cg:function cg(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
ci:function ci(){},
dz:function dz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
m3:function(a,b){var s=b.c
return s==null?b.c=H.jH(a,b.z,!0):s},
kk:function(a,b){var s=b.c
return s==null?b.c=H.cN(a,"k3",[b.z]):s},
kl:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kl(a.z)
return s===11||s===12},
m2:function(a){return a.cy},
nG:function(a){return H.jI(v.typeUniverse,a,!1)},
aO:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.kK(a,r,!0)
case 7:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.jH(a,r,!0)
case 8:s=b.z
r=H.aO(a,s,a0,a1)
if(r===s)return b
return H.kJ(a,r,!0)
case 9:q=b.Q
p=H.cT(a,q,a0,a1)
if(p===q)return b
return H.cN(a,b.z,p)
case 10:o=b.z
n=H.aO(a,o,a0,a1)
m=b.Q
l=H.cT(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jF(a,n,l)
case 11:k=b.z
j=H.aO(a,k,a0,a1)
i=b.Q
h=H.nr(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kI(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cT(a,g,a0,a1)
o=b.z
n=H.aO(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jG(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fw("Attempted to substitute unexpected RTI kind "+c))}},
cT:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aO(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
ns:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aO(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nr:function(a,b,c,d){var s,r=b.a,q=H.cT(a,r,c,d),p=b.b,o=H.cT(a,p,c,d),n=b.c,m=H.ns(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eI()
s.a=q
s.b=o
s.c=m
return s},
p0:function(a,b){a[v.arrayRti]=b
return a},
nz:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kW(s)
return a.$S()}return null},
kX:function(a,b){var s
if(H.kl(b))if(a instanceof H.bl){s=H.nz(a)
if(s!=null)return s}return H.cV(a)},
cV:function(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.jJ(a)}if(Array.isArray(a))return H.mE(a)
return H.jJ(J.cU(a))},
mE:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mO:function(a){var s=a.$ti
return s!=null?s:H.jJ(a)},
jJ:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mP(a,s)},
mP:function(a,b){var s=a instanceof H.bl?a.__proto__.__proto__.constructor:b,r=H.mC(v.typeUniverse,s.name)
b.$ccache=r
return r},
kW:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mN:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cQ(q,a,H.mT)
if(!H.az(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cQ(q,a,H.mW)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bL
else if(s===t.Y||s===t.H)r=H.mS
else if(s===t.R)r=H.mU
else r=s===t.v?H.kP:null
if(r!=null)return H.cQ(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.nP)){q.r="$i"+p
return H.cQ(q,a,H.mV)}}else if(p===7)return H.cQ(q,a,H.mL)
return H.cQ(q,a,H.mJ)},
cQ:function(a,b,c){a.b=c
return a.b(b)},
mM:function(a){var s,r,q=this
if(!H.az(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mH
else if(q===t.K)r=H.mF
else r=H.mK
q.a=r
return q.a(a)},
nk:function(a){var s,r=a.y
if(!H.az(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mJ:function(a){var s=this
if(a==null)return H.nk(s)
return H.L(v.typeUniverse,H.kX(a,s),null,s,null)},
mL:function(a){if(a==null)return!0
return this.z.b(a)},
mV:function(a){var s=this,r=s.r
if(a instanceof P.G)return!!a[r]
return!!J.cU(a)[r]},
oY:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kN(a,s)},
mK:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kN(a,s)},
kN:function(a,b){throw H.c(H.ms(H.kC(a,H.kX(a,b),H.a4(b,null))))},
kC:function(a,b,c){var s=P.h1(a),r=H.a4(b==null?H.cV(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
ms:function(a){return new H.cL("TypeError: "+a)},
W:function(a,b){return new H.cL("TypeError: "+H.kC(a,null,b))},
mT:function(a){return a!=null},
mF:function(a){return a},
mW:function(a){return!0},
mH:function(a){return a},
kP:function(a){return!0===a||!1===a},
oK:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.W(a,"bool"))},
oM:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool"))},
oL:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.W(a,"bool?"))},
oN:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"double"))},
oP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double"))},
oO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"double?"))},
bL:function(a){return typeof a=="number"&&Math.floor(a)===a},
oQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.W(a,"int"))},
oS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int"))},
oR:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.W(a,"int?"))},
mS:function(a){return typeof a=="number"},
oT:function(a){if(typeof a=="number")return a
throw H.c(H.W(a,"num"))},
oV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num"))},
oU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.W(a,"num?"))},
mU:function(a){return typeof a=="string"},
oW:function(a){if(typeof a=="string")return a
throw H.c(H.W(a,"String"))},
mG:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String"))},
oX:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.W(a,"String?"))},
nn:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.w(r,H.a4(a[q],b))
return s},
kO:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.w(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.w(" extends ",H.a4(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a4(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.w(a3,H.a4(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.w(a3,H.a4(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jU(H.a4(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
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
return J.jU(q===11||q===12?C.b.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a4(a.z,b))+">"
if(l===9){p=H.nt(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nn(o,b)+">"):p}if(l===11)return H.kO(a,b,null)
if(l===12)return H.kO(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nt:function(a){var s,r=H.l3(a)
if(r!=null)return r
s="minified:"+a
return s},
kL:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mC:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jI(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cO(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cN(a,b,q)
n[b]=o
return o}else return m},
mA:function(a,b){return H.kM(a.tR,b)},
mz:function(a,b){return H.kM(a.eT,b)},
jI:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kH(H.kF(a,null,b,c))
r.set(b,s)
return s},
fg:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kH(H.kF(a,b,c,!0))
q.set(c,r)
return r},
mB:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jF(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aN:function(a,b){b.a=H.mM
b.b=H.mN
return b},
cO:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aN(a,s)
a.eC.set(c,r)
return r},
kK:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mx(a,b,r,c)
a.eC.set(r,s)
return s},
mx:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.az(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aN(a,q)},
jH:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mw(a,b,r,c)
a.eC.set(r,s)
return s},
mw:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.az(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jb(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jb(q.z))return q
else return H.m3(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aN(a,p)},
kJ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mu(a,b,r,c)
a.eC.set(r,s)
return s},
mu:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.az(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cN(a,"k3",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aN(a,q)},
my:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aN(a,s)
a.eC.set(q,r)
return r},
ff:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mt:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cN:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.ff(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aN(a,r)
a.eC.set(p,q)
return q},
jF:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.ff(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aN(a,o)
a.eC.set(q,n)
return n},
kI:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.ff(m)
if(j>0){s=l>0?",":""
r=H.ff(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mt(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aN(a,o)
a.eC.set(q,r)
return r},
jG:function(a,b,c,d){var s,r=b.cy+("<"+H.ff(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mv(a,b,c,r,d)
a.eC.set(r,s)
return s},
mv:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aO(a,b,r,0)
m=H.cT(a,c,r,0)
return H.jG(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aN(a,l)},
kF:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kH:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mm(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kG(a,r,g,f,!1)
else if(q===46)r=H.kG(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aM(a.u,a.e,f.pop()))
break
case 94:f.push(H.my(a.u,f.pop()))
break
case 35:f.push(H.cO(a.u,5,"#"))
break
case 64:f.push(H.cO(a.u,2,"@"))
break
case 126:f.push(H.cO(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jE(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cN(p,n,o))
else{m=H.aM(p,a.e,n)
switch(m.y){case 11:f.push(H.jG(p,m,o,a.n))
break
default:f.push(H.jF(p,m,o))
break}}break
case 38:H.mn(a,f)
break
case 42:l=a.u
f.push(H.kK(l,H.aM(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jH(l,H.aM(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kJ(l,H.aM(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eI()
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
H.jE(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.kI(p,H.aM(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.jE(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mp(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aM(a.u,a.e,h)},
mm:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kG:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kL(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.m2(o)+'"')
d.push(H.fg(s,o,n))}else d.push(p)
return m},
mn:function(a,b){var s=b.pop()
if(0===s){b.push(H.cO(a.u,1,"0&"))
return}if(1===s){b.push(H.cO(a.u,4,"1&"))
return}throw H.c(P.fw("Unexpected extended operation "+H.d(s)))},
aM:function(a,b,c){if(typeof c=="string")return H.cN(a,c,a.sEA)
else if(typeof c=="number")return H.mo(a,b,c)
else return c},
jE:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aM(a,b,c[s])},
mp:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aM(a,b,c[s])},
mo:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fw("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fw("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.az(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.az(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kk(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kk(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.kQ(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kQ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mR(a,b,c,d,e)}return!1},
kQ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
mR:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kL(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fg(a,b,l[p]),c,r[p],e))return!1
return!0},
jb:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.az(a))if(r!==7)if(!(r===6&&H.jb(a.z)))s=r===8&&H.jb(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nP:function(a){var s
if(!H.az(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
az:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kM:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eI:function eI(){this.c=this.b=this.a=null},
eD:function eD(){},
cL:function cL(a){this.a=a},
l3:function(a){return v.mangledGlobalNames[a]},
nS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fr:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jP==null){H.nL()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kt("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.k6()]
if(p!=null)return p
p=H.nQ(a)
if(p!=null)return p
if(typeof a=="function")return C.M
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){Object.defineProperty(q,J.k6(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
k6:function(){var s=$.kD
return s==null?$.kD=v.getIsolateTag("_$dart_js"):s},
lF:function(a){if(!H.bL(a))throw H.c(P.jV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.au(a,0,4294967295,"length",null))
return J.jq(new Array(a))},
k5:function(a){if(!H.bL(a)||a<0)throw H.c(P.jg("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
jq:function(a){a.fixed$length=Array
return a},
lG:function(a,b){return J.d_(a,b)},
cU:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c7.prototype
return J.c6.prototype}if(typeof a=="string")return J.aC.prototype
if(a==null)return J.c8.prototype
if(typeof a=="boolean")return J.hd.prototype
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fr(a)},
nH:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fr(a)},
bf:function(a){if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fr(a)},
jN:function(a){if(a==null)return a
if(a.constructor==Array)return J.a8.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fr(a)},
nI:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.aC.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bE.prototype
return a},
bg:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
return a}if(a instanceof P.G)return a
return J.fr(a)},
jU:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nH(a).w(a,b)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cU(a).n(a,b)},
cZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bf(a).h(a,b)},
ll:function(a,b,c){return J.bg(a).fh(a,b,c)},
lm:function(a,b,c,d){return J.bg(a).fA(a,b,c,d)},
d_:function(a,b){return J.nI(a).aO(a,b)},
je:function(a,b){return J.bf(a).L(a,b)},
jf:function(a,b){return J.jN(a).C(a,b)},
ln:function(a,b){return J.jN(a).F(a,b)},
lo:function(a){return J.bg(a).gcW(a)},
lp:function(a){return J.bg(a).gcZ(a)},
Y:function(a){return J.cU(a).gS(a)},
bi:function(a){return J.jN(a).gN(a)},
bj:function(a){return J.bf(a).gj(a)},
lq:function(a,b){return J.bg(a).hb(a,b)},
a0:function(a){return J.cU(a).i(a)},
a:function a(){},
hd:function hd(){},
c8:function c8(){},
b2:function b2(){},
dG:function dG(){},
bE:function bE(){},
af:function af(){},
a8:function a8(){},
dk:function dk(){},
V:function V(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b1:function b1(){},
c7:function c7(){},
c6:function c6(){},
aC:function aC(){}},P={
me:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bO(new P.iN(q),1)).observe(s,{childList:true})
return new P.iM(q,s,r)}else if(self.setImmediate!=null)return P.nw()
return P.nx()},
mf:function(a){self.scheduleImmediate(H.bO(new P.iO(a),0))},
mg:function(a){self.setImmediate(H.bO(new P.iP(a),0))},
mh:function(a){P.jy(C.k,a)},
jy:function(a,b){var s=C.c.a1(a.a,1000)
return P.mq(s<0?0:s,b)},
kr:function(a,b){var s=C.c.a1(a.a,1000)
return P.mr(s<0?0:s,b)},
mq:function(a,b){var s=new P.cK()
s.dV(a,b)
return s},
mr:function(a,b){var s=new P.cK()
s.dW(a,b)
return s},
oI:function(a){return new P.bI(a,1)},
mi:function(){return C.R},
mj:function(a){return new P.bI(a,3)},
mY:function(a){return new P.cH(a)},
nj:function(){var s,r
for(s=$.bM;s!=null;s=$.bM){$.cS=null
r=s.b
$.bM=r
if(r==null)$.cR=null
s.a.$0()}},
nq:function(){$.jK=!0
try{P.nj()}finally{$.cS=null
$.jK=!1
if($.bM!=null)$.jT().$1(P.kU())}},
no:function(a){var s=new P.es(a),r=$.cR
if(r==null){$.bM=$.cR=s
if(!$.jK)$.jT().$1(P.kU())}else $.cR=r.b=s},
np:function(a){var s,r,q,p=$.bM
if(p==null){P.no(a)
$.cS=$.cR
return}s=new P.es(a)
r=$.cS
if(r==null){s.b=p
$.bM=$.cS=s}else{q=r.b
s.b=q
$.cS=r.b=s
if(q==null)$.cR=s}},
kq:function(a,b){var s=$.ah
if(s===C.e)return P.jy(a,b)
return P.jy(a,s.fE(b))},
mb:function(a,b){var s=$.ah
if(s===C.e)return P.kr(a,b)
return P.kr(a,s.cT(b,t.W))},
kR:function(a,b,c,d,e){P.np(new P.j4(d,e))},
nl:function(a,b,c,d){var s,r=$.ah
if(r===c)return d.$0()
$.ah=c
s=r
try{r=d.$0()
return r}finally{$.ah=s}},
nm:function(a,b,c,d,e){var s,r=$.ah
if(r===c)return d.$1(e)
$.ah=c
s=r
try{r=d.$1(e)
return r}finally{$.ah=s}},
iN:function iN(a){this.a=a},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
cK:function cK(){this.c=0},
iY:function iY(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cH:function cH(a){this.a=a},
es:function es(a){this.a=a
this.b=null},
dX:function dX(){},
dY:function dY(){},
co:function co(){},
j_:function j_(){},
j4:function j4(a,b){this.a=a
this.b=b},
iU:function iU(){},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function(a,b,c){return H.nF(a,new H.t(b.at("@<0>").cv(c).at("t<1,2>")))},
lJ:function(a,b){return new H.t(a.at("@<0>").cv(b).at("t<1,2>"))},
k7:function(a){return new P.cw(a.at("cw<0>"))},
jD:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
ml:function(a,b){var s=new P.cx(a,b)
s.c=a.e
return s},
lD:function(a,b,c){var s,r
if(P.jL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a_.push(a)
try{P.mX(a,s)}finally{if(0>=$.a_.length)return H.e($.a_,-1)
$.a_.pop()}r=P.km(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jp:function(a,b,c){var s,r
if(P.jL(a))return b+"..."+c
s=new P.aI(b)
$.a_.push(a)
try{r=s
r.a=P.km(r.a,a,", ")}finally{if(0>=$.a_.length)return H.e($.a_,-1)
$.a_.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jL:function(a){var s,r
for(s=$.a_.length,r=0;r<s;++r)if(a===$.a_[r])return!0
return!1},
mX:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.d(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.u()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.u();p=o,o=n){n=l.gD(l);++j
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
k8:function(a){var s,r={}
if(P.jL(a))return"{...}"
s=new P.aI("")
try{$.a_.push(a)
s.a+="{"
r.a=!0
J.ln(a,new P.hl(r,s))
s.a+="}"}finally{if(0>=$.a_.length)return H.e($.a_,-1)
$.a_.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cw:function cw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iT:function iT(a){this.a=a
this.c=this.b=null},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c5:function c5(){},
ca:function ca(){},
B:function B(){},
dr:function dr(){},
hl:function hl(a,b){this.a=a
this.b=b},
ap:function ap(){},
cE:function cE(){},
cy:function cy(){},
d6:function d6(){},
d8:function d8(){},
fY:function fY(){},
ix:function ix(){},
iy:function iy(){},
iZ:function iZ(a){this.b=0
this.c=a},
lC:function(a){if(a instanceof H.bl)return a.i(0)
return"Instance of '"+H.d(H.dJ(a))+"'"},
jt:function(a,b,c){var s,r=c?J.k5(a):J.lF(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ju:function(a,b){var s,r=[]
for(s=J.bi(a);s.u();)r.push(s.gD(s))
if(b)return r
return J.jq(r)},
jx:function(a){var s,r=a,q=r.length,p=P.jv(0,null,q)
if(typeof p!=="number")return p.af()
s=p<q
return H.lZ(s?r.slice(0,p):r)},
m0:function(a){return new H.he(a,H.lH(a,!1,!0,!1,!1,!1))},
km:function(a,b,c){var s=J.bi(b)
if(!s.u())return a
if(c.length===0){do a+=H.d(s.gD(s))
while(s.u())}else{a+=H.d(s.gD(s))
for(;s.u();)a=a+c+H.d(s.gD(s))}return a},
mD:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.q){s=$.lk().b
s=s.test(b)}else s=!1
if(s)return b
r=C.G.fI(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lY(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lA:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
k1:function(a){return new P.aW(1000*a)},
h1:function(a){if(typeof a=="number"||H.kP(a)||null==a)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lC(a)},
fw:function(a){return new P.d2(a)},
jg:function(a){return new P.a5(!1,null,null,a)},
jV:function(a,b,c){return new P.a5(!0,a,b,c)},
lr:function(a,b){if(a==null)throw H.c(new P.a5(!1,null,b,"Must not be null"))
return a},
dK:function(a,b){return new P.bB(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bB(b,c,!0,a,d,"Invalid value")},
jv:function(a,b,c){var s
if(typeof c!=="number")return H.q(c)
s=a>c
if(s)throw H.c(P.au(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.q(c)
s=b>c}else s=!0
if(s)throw H.c(P.au(b,a,c,"end",null))
return b}return c},
kj:function(a,b){if(a<0)throw H.c(P.au(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bj(b):e
return new P.di(s,!0,a,c,"Index out of range")},
v:function(a){return new P.em(a)},
kt:function(a){return new P.ej(a)},
bU:function(a){return new P.d7(a)},
l:function(a){return new P.eF(a)},
jS:function(a){H.nS(a)},
be:function be(){},
a7:function a7(a,b){this.a=a
this.b=b},
X:function X(){},
aW:function aW(a){this.a=a},
fV:function fV(){},
fW:function fW(){},
E:function E(){},
d2:function d2(a){this.a=a},
dB:function dB(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bB:function bB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
di:function di(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
em:function em(a){this.a=a},
ej:function ej(a){this.a=a},
dW:function dW(a){this.a=a},
d7:function d7(a){this.a=a},
dE:function dE(){},
cn:function cn(){},
d9:function d9(a){this.a=a},
eF:function eF(a){this.a=a},
h7:function h7(a,b){this.a=a
this.b=b},
p:function p(){},
f:function f(){},
dj:function dj(){},
ao:function ao(){},
dq:function dq(){},
aa:function aa(){},
M:function M(){},
G:function G(){},
J:function J(){},
aI:function aI(a){this.a=a},
nC:function(a){var s
if(t.s.b(a)){s=J.lp(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cM(a.data,a.height,a.width)},
nB:function(a){if(a instanceof P.cM)return{data:a.a,height:a.b,width:a.c}
return a},
aQ:function(a){var s,r,q,p,o
if(a==null)return null
s=P.lJ(t.R,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
nA:function(a){var s={}
a.F(0,new P.j5(s))
return s},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(){},
iS:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mk:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eY:function eY(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bt:function bt(){},
dn:function dn(){},
by:function by(){},
dC:function dC(){},
hL:function hL(){},
dZ:function dZ(){},
j:function j(){},
bD:function bD(){},
e6:function e6(){},
eM:function eM(){},
eN:function eN(){},
eU:function eU(){},
eV:function eV(){},
f6:function f6(){},
f7:function f7(){},
fd:function fd(){},
fe:function fe(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(a){this.a=a},
d3:function d3(){},
aB:function aB(){},
dD:function dD(){},
et:function et(){},
dM:function dM(){},
dU:function dU(){},
f2:function f2(){},
f3:function f3(){}},W={
jk:function(){var s=document.createElement("canvas")
return s},
fX:function(a){return"wheel"},
iR:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kE:function(a,b,c,d){var s=W.iR(W.iR(W.iR(W.iR(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
P:function(a,b,c,d){var s=W.kS(new W.iQ(c),t.D)
if(s!=null&&!0)J.lm(a,b,s,!1)
return new W.eE(a,b,s,!1)},
kS:function(a,b){var s=$.ah
if(s===C.e)return a
return s.cT(a,b)},
k:function k(){},
fu:function fu(){},
d0:function d0(){},
d1:function d1(){},
d4:function d4(){},
aV:function aV(){},
ae:function ae(){},
fL:function fL(){},
D:function D(){},
bW:function bW(){},
fM:function fM(){},
a6:function a6(){},
ak:function ak(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fT:function fT(){},
bX:function bX(){},
bY:function bY(){},
db:function db(){},
fU:function fU(){},
ev:function ev(a,b){this.a=a
this.b=b},
I:function I(){},
h:function h(){},
b:function b(){},
aY:function aY(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
aZ:function aZ(){},
hb:function hb(){},
b_:function b_(){},
b0:function b0(){},
bs:function bs(){},
b3:function b3(){},
hj:function hj(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
b6:function b6(){},
dt:function dt(){},
a2:function a2(){},
eu:function eu(a){this.a=a},
w:function w(){},
cj:function cj(){},
b8:function b8(){},
dH:function dH(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
dO:function dO(){},
aH:function aH(){},
dS:function dS(){},
b9:function b9(){},
dT:function dT(){},
ba:function ba(){},
i3:function i3(){},
i4:function i4(a){this.a=a},
aJ:function aJ(){},
aK:function aK(){},
ag:function ag(){},
e_:function e_(){},
e0:function e0(){},
ih:function ih(){},
bb:function bb(){},
bc:function bc(){},
e5:function e5(){},
ik:function ik(){},
aw:function aw(){},
iw:function iw(){},
ep:function ep(){},
aL:function aL(){},
bH:function bH(){},
ew:function ew(){},
cv:function cv(){},
eJ:function eJ(){},
cz:function cz(){},
f1:function f1(){},
f8:function f8(){},
jn:function jn(a,b){this.a=a
this.$ti=b},
eE:function eE(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iQ:function iQ(a){this.a=a},
jC:function jC(a){this.$ti=a},
C:function C(){},
c2:function c2(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
eZ:function eZ(){},
cF:function cF(){},
cG:function cG(){},
f_:function f_(){},
f0:function f0(){},
f5:function f5(){},
f9:function f9(){},
fa:function fa(){},
cI:function cI(){},
cJ:function cJ(){},
fb:function fb(){},
fc:function fc(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){}},K={
T:function(a){var s=new K.hT()
s.dQ(a)
return s},
fv:function fv(){},
dh:function dh(){},
aE:function aE(){this.a=null},
hT:function hT(){this.a=null}},L={dV:function dV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},e4:function e4(a){this.b=a
this.c=null},ii:function ii(){var _=this
_.d=_.c=_.b=_.a=null},il:function il(a){this.b=a
this.a=this.c=null}},O={
fH:function(){var s=new O.bm()
s.b9()
return s},
bm:function bm(){this.c=this.b=this.a=null},
cf:function cf(){this.b=this.a=null},
k4:function(a,b){var s,r,q,p=new O.dg()
p.r=0
p.scc(null)
p.sbJ(null)
if(a==null){s=$.ku
if(s==null){s=new V.U(1,0)
$.ku=s
r=s}else r=s}else r=a
if(!J.A(p.d,r)){q=p.d
p.d=r
s=new D.o("blurDirection",q,r)
s.b=!0
p.p(s)}p.scY(b)
p.sbK(null)
p.sbL(0)
return p},
ko:function(a,b){var s,r,q,p=new O.bC(),o=p.a
p.a=b
b.gm().l(0,p.gY())
s=new D.o("texture",o,p.a)
s.b=!0
p.p(s)
r=V.b5()
if(!J.A(p.b,r)){o=p.b
p.b=r
s=new D.o("colorMatrix",o,r)
s.b=!0
p.p(s)}q=V.hM()
if(!J.A(p.c,q)){o=p.c
p.c=q
s=new D.o("source",o,q)
s.b=!0
p.p(s)}if(!J.A(p.d,a)){o=p.d
p.d=a
s=new D.o("destination",o,a)
s.b=!0
p.p(s)}if(p.e!==!1){p.e=!1
s=new D.o("flip",!0,!1)
s.b=!0
p.p(s)}p.f=null
return p},
fQ:function fQ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(){},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(){},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
hn:function hn(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cd:function cd(){},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aq:function aq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hq:function hq(){var _=this
_.e=_.d=_.c=_.b=null},
hr:function hr(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hs:function hs(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dQ:function dQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(){},
e1:function e1(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bC:function bC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
fZ:function(a){var s,r=new E.bq()
r.a=""
r.b=!0
s=O.fH()
r.y=s
s.aE(r.gfU(),r.gfX())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scj(0,a)
r.sdl(null)
return r},
kA:function(){if(J.je(window.navigator.vendor,"Google"))return C.x
if(J.je(window.navigator.userAgent,"Firefox"))return C.m
var s=window.navigator.appVersion
if(J.bf(s).L(s,"Trident")||C.b.L(s,"Edge"))return C.n
if(J.je(window.navigator.appName,"Microsoft"))return C.n
return C.y},
kB:function(){var s=window.navigator.appVersion
if(J.bf(s).L(s,"Win"))return C.O
if(C.b.L(s,"Mac"))return C.r
if(C.b.L(s,"Linux"))return C.P
return C.Q},
m1:function(a,b){var s=new E.hN(a)
s.dP(a,b)
return s},
ma:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kp(a,!0,!0,!0,!1)
s=W.jk()
r=s.style
r.width="100%"
r.height="100%"
J.lo(a).l(0,s)
return E.kp(s,!0,!0,!0,!1)},
kp:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e2(),n=t.z,m=C.f.cf(a,"webgl2",P.lK(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.l("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.m1(m,a)
n=new T.id(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.en(a)
s=new X.hg()
s.c=new X.a9(!1,!1,!1)
s.d=P.k7(t.e)
n.b=s
s=new X.hH(n)
s.f=0
s.r=V.aF()
s.x=V.aF()
s.ch=s.Q=1
n.c=s
s=new X.hk(n)
s.r=0
s.x=V.aF()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.ij(n)
s.f=V.aF()
s.r=V.aF()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.h_
n.Q=(s==null?$.h_=new E.eC(E.kA(),E.kB()):s).a===C.m?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.P(q,"contextmenu",n.gey(),!1))
n.z.push(W.P(a,"focus",n.geI(),!1))
n.z.push(W.P(a,"blur",n.ger(),!1))
n.z.push(W.P(q,"keyup",n.geM(),!1))
n.z.push(W.P(q,"keydown",n.geK(),!1))
n.z.push(W.P(a,"mousedown",n.geQ(),!1))
n.z.push(W.P(a,"mouseup",n.geU(),!1))
n.z.push(W.P(a,p,n.geS(),!1))
r=n.z
W.fX(a)
W.fX(a)
r.push(W.P(a,W.fX(a),n.geW(),!1))
n.z.push(W.P(q,p,n.geA(),!1))
n.z.push(W.P(q,"mouseup",n.geC(),!1))
n.z.push(W.P(q,"pointerlockchange",n.geY(),!1))
n.z.push(W.P(a,"touchstart",n.gfd(),!1))
n.z.push(W.P(a,"touchend",n.gf9(),!1))
n.z.push(W.P(a,"touchmove",n.gfb(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a7(Date.now(),!1)
o.db=0
o.cI()
return o},
fE:function fE(){},
bq:function bq(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bk:function bk(a){this.b=a},
bz:function bz(a){this.b=a},
eC:function eC(a,b){this.a=a
this.b=b},
hN:function hN(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
e2:function e2(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ig:function ig(a){this.a=a}},Z={
jB:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bK(c)),35044)
a.bindBuffer(b,null)
return new Z.eq(b,s)},
ad:function(a){return new Z.ax(a)},
eq:function eq(a,b){this.a=a
this.b=b},
fF:function fF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bd:function bd(a){this.a=a},
ai:function ai(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a){this.a=a}},D={
x:function(){var s=new D.aX()
s.d=0
return s},
fG:function fG(){},
aX:function aX(){var _=this
_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
N:function N(){this.b=null},
al:function al(){this.b=null},
am:function am(){this.b=null},
o:function o(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
k0:function(a,b){var s,r,q=new D.bp()
q.c=new V.K(1,1,1)
q.a=V.md()
q.d=V.jA()
q.e=V.mc()
s=q.b
q.b=b
b.gm().l(0,q.gdT())
r=new D.o("mover",s,q.b)
r.b=!0
q.aq(r)
if(!q.c.n(0,a)){s=q.c
q.c=a
r=new D.o("color",s,a)
r.b=!0
q.aq(r)}return q},
bp:function bp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
an:function an(){},
c9:function c9(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={d5:function d5(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},hg:function hg(){var _=this
_.d=_.c=_.b=_.a=null},cb:function cb(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hk:function hk(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},bv:function bv(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hH:function hH(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bw:function bw(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dI:function dI(){},cp:function cp(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ij:function ij(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},en:function en(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jh:function(a,b,c,d){var s,r,q,p,o=new X.fC()
o.d=o.c=o.b=o.a=512
o.e=!0
o.f=!1
o.x=o.r=1
o.ch=T.kn(null)
o.cx=new V.a1(0,0,0,1)
o.cy=!0
o.db=2000
o.dx=!0
o.dy=V.hM()
o.sak(0,512)
o.sah(0,512)
s=new V.a1(0,0,0,1)
if(!o.cx.n(0,s)){r=o.cx
o.cx=s
q=new D.o("color",r,s)
q.b=!0
o.Z(q)}if(o.cy!==d){o.cy=d
q=new D.o("clearColor",!d,d)
q.b=!0
o.Z(q)}q=o.db
$.u().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
q=new D.o("depth",q,2000)
q.b=!0
o.Z(q)}if(!o.f){o.f=!0
q=new D.o("autoResize",!1,!0)
q.b=!0
o.Z(q)}q=o.r
$.u().toString
if(!(Math.abs(q-b)<1e-9)){o.r=b
q=new D.o("autoResizeScalarX",q,b)
q.b=!0
o.Z(q)}q=o.x
$.u().toString
if(!(Math.abs(q-c)<1e-9)){o.x=c
q=new D.o("autoResizeScalarY",q,c)
q.b=!0
o.Z(q)}p=V.hM()
if(!J.A(o.dy,p)){r=o.dy
o.dy=p
q=new D.o("region",r,p)
q.b=!0
o.Z(q)}return o},
jo:function(a,b){var s=new X.h8(),r=new V.a1(0,0,0,1)
s.a=r
s.b=a
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.hM()
s.r=r
return s},
kd:function(a){var s,r,q=new X.dF()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gdX())
r=new D.o("mover",s,q.b)
r.b=!0
q.Z(r)}r=q.c
$.u().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.o("fov",r,1.0471975511965976)
r.b=!0
q.Z(r)}r=q.d
$.u().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.o("near",r,0.1)
r.b=!0
q.Z(r)}r=q.e
$.u().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.o("far",r,2000)
r.b=!0
q.Z(r)}return q},
fC:function fC(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jj:function jj(){},
h8:function h8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(){this.b=this.a=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(){}},V={
fI:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a1(s,r,q,1)},
jQ:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nY:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dD(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){if(a==null)return C.b.aj("null",c)
$.u().toString
return C.b.aj(C.d.dz(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bQ:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.m)(a),++q){p=V.z(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.aj(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
cW:function(a){return C.d.hh(Math.pow(2,C.L.c0(Math.log(H.ny(a))/Math.log(2))))},
b5:function(){var s=$.hB
return s==null?$.hB=V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lP:function(a,b,c){return V.as(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lO:function(a,b,c){return V.as(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kb:function(a,b,c,d){d=V.jA()
return V.ka(V.kg(),d,new V.y(a,b,c))},
ka:function(a,b,c){var s=c.H(),r=b.b_(s).H(),q=s.b_(r),p=new V.y(a.a,a.b,a.c),o=r.M(0).a7(p),n=q.M(0).a7(p),m=s.M(0).a7(p)
return V.as(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aF:function(){var s=$.kf
return s==null?$.kf=new V.a3(0,0):s},
kg:function(){var s=$.at
return s==null?$.at=new V.O(0,0,0):s},
hM:function(){var s=$.cm
return s==null?$.cm=V.cl(0,0,1,1):s},
cl:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
eo:function(){var s=$.ky
return s==null?$.ky=new V.y(0,0,0):s},
mc:function(){var s=$.iz
return s==null?$.iz=new V.y(-1,0,0):s},
jA:function(){var s=$.iA
return s==null?$.iA=new V.y(0,1,0):s},
md:function(){var s=$.iB
return s==null?$.iB=new V.y(0,0,1):s},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(){},
ce:function ce(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ar:function ar(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nT:function(a){P.mb(C.J,new V.jd(a))},
m4:function(a){var s=new V.hY()
s.dR(a,!0)
return s},
jd:function jd(a){this.a=a},
hY:function hY(){this.b=this.a=null},
i_:function i_(a){this.a=a},
hZ:function hZ(a){this.a=a}},U={
jl:function(){var s=new U.fJ()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
jm:function(a){var s=new U.bo()
s.a=a
return s},
fJ:function fJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(){this.b=this.a=null},
br:function br(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
S:function S(){},
cr:function cr(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
fK:function(a,b){var s,r,q,p,o,n,m,l,k,j=null,i=new M.bV()
i.a=!0
s=E.fZ(j)
r=F.jw()
q=r.a
p=new V.y(-1,-1,1).H()
o=q.bg(new V.aG(1,2,4,6),V.fI(255,0,0),new V.O(-1,-1,0),new V.a3(0,1),p,j)
p=r.a
q=new V.y(1,-1,1).H()
n=p.bg(new V.aG(0,3,4,6),V.fI(0,0,255),new V.O(1,-1,0),new V.a3(1,1),q,j)
q=r.a
p=new V.y(1,1,1).H()
m=q.bg(new V.aG(0,2,5,6),V.fI(0,128,0),new V.O(1,1,0),new V.a3(1,0),p,j)
p=r.a
q=V.aF()
l=new V.y(-1,1,1).H()
k=p.bg(new V.aG(0,2,4,7),V.fI(255,255,0),new V.O(-1,1,0),q,l,j)
r.d.fB([o,n,m,k])
r.aw()
s.scj(0,r)
i.e=s
i.saL(j)
i.sap(0,a)
i.saC(b)
return i},
k2:function(){var s,r,q=new M.c_()
q.a=!0
s=O.fH()
q.e=s
s.aE(q.geu(),q.gew())
q.y=q.x=q.r=q.f=null
r=X.jo(!0,null)
q.saL(null)
q.sap(0,r)
q.saC(null)
return q},
bT:function bT(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
bV:function bV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c_:function c_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c3:function c3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Z:function Z(){}},A={
lM:function(a,b){var s=a.ax,r=new A.hm(b,s)
r.aU(b,s)
r.dO(a,b)
return r},
lN:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+a9.gam(a9)+b0.gam(b0)+b1.gam(b1)+b2.gam(b2)+b3.gam(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.m)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.m)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.m)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.m)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.Q()
if(h){s=$.aT()
b=new Z.ax(b.a|s.a)}if(g){s=$.aS()
b=new Z.ax(b.a|s.a)}if(f){s=$.aU()
b=new Z.ax(b.a|s.a)}if(e){s=$.aR()
b=new Z.ax(b.a|s.a)}return new A.hp(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
j2:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j3:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.j2(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fs(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
n2:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.j2(b,r,"emission")
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
mZ:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.j3(b,r,"ambient")
b.a+="\n"},
n0:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.j3(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.q
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n3:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.j3(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.q
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n9:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.j3(b,r,"specular")
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
r+=u.q
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n5:function(a,b){var s,r,q
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
n7:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.j2(b,r,"reflect")
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
n8:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.j2(b,r,"refract")
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
n_:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fs(r)
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
if(typeof s!=="number")return s.al()
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
p+=u.M
c.a=p
p+=u.b
c.a=p
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.q(o," * ")+";\n"
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
if(a.dx){c.a+=u.h
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
s=c.a+="      highLight = intensity*("+C.a.q(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
c.a=s+u.N
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
n1:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fs(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.al()
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
if(a.dx){c.a+=u.h
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
c.a+="      highLight = intensity*("+C.a.q(l," + ")+");\n"}else c.a+="   highLight = "+C.a.q(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.q(m," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.N
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
n6:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fs(r)
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
if(typeof s!=="number")return s.al()
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
if(m){p+=u.M
c.a=p
p+=u.b
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.S
c.a=p
p+=u.U
c.a=p
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.q(j," * ")+";\n"
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
if(a.dx){c.a+=u.h
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
p=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.N
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
na:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fs(r)
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
if(typeof s!=="number")return s.al()
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
if(l){s+=u.M
c.a=s
s+=u.b
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.h_
if(s==null)s=$.h_=new E.eC(E.kA(),E.kB())
p=c.a
if(s.b===C.r){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s+=u.S
c.a=s
s+=u.U
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.q(h," * ")+";\n"
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
if(a.dx){c.a+=u.h
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
s=c.a+="      highLight = intensity*("+C.a.q(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.q(h," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
s+=u.N
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
n4:function(a,b){var s,r
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
s=b.a+="   return "+C.a.q(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nb:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.aI("")
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
A.n2(a,g)
A.mZ(a,g)
A.n0(a,g)
A.n3(a,g)
A.n9(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.n7(a,g)
A.n8(a,g)}A.n5(a,g)
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
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.n_(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.n1(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.n6(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.m)(o),++l)A.na(a,o[l],g)
A.n4(a,g)}o=g.a+="// === Main ===\n"
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
if(p){g.a=s+u.N
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
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aT(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aT(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aT(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.m)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aT(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
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
s=g.a+="   vec4 objClr = vec4("+C.a.q(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nc:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bh+"];\n"
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
ne:function(a,b){var s
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
nd:function(a,b){var s
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
ng:function(a,b){var s,r
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
nh:function(a,b){var s,r
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
nf:function(a,b){var s
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
ni:function(a,b){var s
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
fs:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aT(a,1)},
m9:function(a,b){var s,r,q,p
for(s=0,r="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";s<a;++s)r=r+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
r+="\nvec4 clrAccum;\n"
q=b===C.I
r=(q||b===C.i?r+"float colorCount;\n":r)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.H)r+="      clrAccum += color;\n"
else if(b===C.j)r+="      clrAccum = mix(clrAccum, color, color.a);\n"
else r=q?r+"      clrAccum += color;\n      colorCount += 1.0;\n":r+"      clrAccum = color;\n      colorCount = 1.0;\n"
r+="   }\n}\n\nvoid layoutAll()\n{\n"
p=b===C.i
if(p)for(s=a-1;s>=0;--s)r=r+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)r=r+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
r+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(q)r+="   colorCount = 1.0;\n"
else if(p)r+="   colorCount = 0.0;\n"
r+="   layoutAll();\n"
r=(q?r+"   clrAccum = clrAccum/colorCount;\n":r)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return r.charCodeAt(0)==0?r:r},
m8:function(a,b,c){var s="TextureLayout_"+a+"_"+C.c.i(b.a),r=new A.ic(c,s)
r.aU(c,s)
r.dS(a,b,c)
return r},
jz:function(a,b,c,d,e){var s=new A.iq(a,c,e)
s.f=d
P.jt(d,0,!1)
return s},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ha:function ha(a,b){this.a=a
this.b=b},
hm:function hm(a,b){var _=this
_.d1=_.hs=_.bi=_.ax=_.bh=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hA=_.hz=_.hy=_.c_=_.bZ=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.de=_.hx=_.dd=_.dc=_.hw=_.da=_.d9=_.d8=_.hv=_.d7=_.d6=_.d5=_.hu=_.d4=_.d3=_.ht=_.d2=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fD:function fD(a,b){this.a=a
this.b=b},
fS:function fS(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bh=b5
_.ax=b6
_.bi=b7},
eb:function eb(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ec:function ec(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ef:function ef(a,b,c,d,e,f,g,h,i,j){var _=this
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
ei:function ei(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dP:function dP(){},
bn:function bn(a,b){this.a=a
this.b=b},
i0:function i0(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ic:function ic(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ip:function ip(){},
iu:function iu(a){this.a=a},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
e7:function e7(a,b,c){this.a=a
this.c=b
this.d=c},
e8:function e8(a,b,c){this.a=a
this.c=b
this.d=c},
e9:function e9(a,b,c){this.a=a
this.c=b
this.d=c},
ea:function ea(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
ed:function ed(a,b,c){this.a=a
this.c=b
this.d=c},
ee:function ee(a,b,c){this.a=a
this.c=b
this.d=c},
eg:function eg(a,b,c){this.a=a
this.c=b
this.d=c},
eh:function eh(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j1:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cP:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.y(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.y(s+a5,r+a3,q+a4)
o=new V.y(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.y(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.j1(g)
j=F.j1(f)
i=F.nV(a1,a2,new F.j0(h,F.j1(e),F.j1(d),j,k,a0),b)
if(i!=null)a.fT(i)},
nV:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.jw()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.iD(e,e,new V.a1(n,0,0,1),e,e,new V.a3(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bQ(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.iD(e,e,new V.a1(h,g,f,1),e,e,new V.a3(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bQ(d))}}s.d.fC(a+1,b+1,r)
return s},
c0:function(a,b,c){var s=new F.h4(),r=a.a
if(r==null)H.n(P.l("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.n(P.l("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a8()
return s},
lI:function(a,b){var s=new F.hh(),r=a.a
if(r==null)H.n(P.l("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.l("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.a8()
return s},
jw:function(){var s=new F.hU(),r=new F.iE(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hX(s)
r.b=[]
s.b=r
r=new F.hW(s)
r.b=[]
s.c=r
r=new F.hV(s)
r.b=[]
s.d=r
return s},
iD:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iC(),p=new F.iJ()
p.b=[]
q.b=p
p=new F.iI()
p.b=[]
p.c=[]
q.c=p
p=new F.iF()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lh()
q.e=0
p=$.Q()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aT().a)!==0?e:r
q.x=(s&$.aS().a)!==0?b:r
q.y=(s&$.aA().a)!==0?f:r
q.z=(s&$.aU().a)!==0?g:r
q.Q=(s&$.li().a)!==0?c:r
q.ch=(s&$.bR().a)!==0?i:0
q.cx=(s&$.aR().a)!==0?a:r
return q},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h4:function h4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(){this.b=this.a=null},
hJ:function hJ(){this.a=null},
hU:function hU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a){this.a=a
this.b=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(a){this.a=a
this.b=null},
iC:function iC(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a},
iK:function iK(a){this.a=a},
iE:function iE(a){this.a=a
this.c=this.b=null},
iF:function iF(){this.d=this.c=this.b=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){this.c=this.b=null},
iJ:function iJ(){this.b=null}},T={
kn:function(a){var s=new T.ia()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4="modifiers",b5=V.m4("Test 028"),b6=W.jk()
b6.className="pageLargeCanvas"
b6.id=b2
b5.a.appendChild(b6)
b5.cP(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."])
b5.cP(["\xab[Back to Tests|../]"])
s=document.getElementById(b2)
if(s==null)H.n(P.l("Failed to find an element with the identifier, testCanvas."))
r=E.ma(s,!0,!0,!0,!1)
q=new U.br()
q.b9()
q.aE(q.gej(),q.gf1())
q.e=null
q.f=V.b5()
q.r=0
b5=r.x
p=new U.cs()
o=U.jl()
o.sce(0,!0)
o.sc5(6.283185307179586)
o.sc7(0)
o.sad(0,0)
o.sc6(100)
o.sP(0)
o.sbR(0.5)
p.b=o
n=p.gaJ()
o.gm().l(0,n)
o=U.jl()
o.sce(0,!0)
o.sc5(6.283185307179586)
o.sc7(0)
o.sad(0,0)
o.sc6(100)
o.sP(0)
o.sbR(0.5)
p.c=o
o.gm().l(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.a9(!1,!1,!1)
l=p.d
p.d=m
o=new D.o(b4,l,m)
o.b=!0
p.J(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.o("invertX",o,!1)
o.b=!0
p.J(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.o("invertY",o,!1)
o.b=!0
p.J(o)}p.aY(b5)
q.l(0,p)
b5=r.x
p=new U.cr()
o=U.jl()
o.sce(0,!0)
o.sc5(6.283185307179586)
o.sc7(0)
o.sad(0,0)
o.sc6(100)
o.sP(0)
o.sbR(0.2)
p.b=o
o.gm().l(0,p.gaJ())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.a9(!0,!1,!1)
l=p.c
p.c=m
o=new D.o(b4,l,m)
o.b=!0
p.J(o)
p.aY(b5)
q.l(0,p)
b5=r.x
p=new U.ct()
p.c=0.01
p.e=p.d=0
m=new X.a9(!1,!1,!1)
p.b=m
o=new D.o(b4,b3,m)
o.b=!0
p.J(o)
p.aY(b5)
q.l(0,p)
q.l(0,U.jm(V.lP(0,0,5)))
k=X.kd(q)
j=F.jw()
F.cP(j,b3,b3,1,1,1,0,0,1)
F.cP(j,b3,b3,1,1,0,1,0,3)
F.cP(j,b3,b3,1,1,0,0,1,2)
F.cP(j,b3,b3,1,1,-1,0,0,0)
F.cP(j,b3,b3,1,1,0,-1,0,0)
F.cP(j,b3,b3,1,1,0,0,-1,3)
j.aw()
i=E.fZ(j)
h=E.fZ(b3)
for(g=-1.6;g<=1.7;g+=0.8)for(f=-1.6;f<=1.7;f+=0.8)for(e=-1.6;e<=1.7;e+=0.8){d=new V.ar(1,0,0,g,0,1,0,f,0,0,1,e,0,0,0,1).t(0,new V.ar(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
c=E.fZ(b3)
b5=new U.bo()
b5.sT(0,d)
c.sdl(b5)
b5=c.y
if(b5.bc([i])){p=b5.a
b=p.length
p.push(i)
b5=b5.c
if(b5!=null)b5.$2(b,[i])}b5=h.y
if(b5.bc([c])){p=b5.a
b=p.length
p.push(c)
b5=b5.c
if(b5!=null)b5.$2(b,[c])}}a=r.f.di("../resources/diceColor")
a0=new O.ds()
b5=O.fH()
a0.e=b5
b5.aE(a0.gen(),a0.gep())
b5=new O.aq(a0,"emission")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
a0.f=b5
b5=new O.aq(a0,"ambient")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
a0.r=b5
b5=new O.aq(a0,"diffuse")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
a0.x=b5
b5=new O.aq(a0,"invDiffuse")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
a0.y=b5
b5=new O.hs(a0,"specular")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
b5.ch=100
a0.z=b5
b5=new O.ho(a0,"bump")
b5.c=new A.R(!1,!1,!1)
a0.Q=b5
a0.ch=null
b5=new O.aq(a0,"reflect")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
a0.cx=b5
b5=new O.hr(a0,"refract")
b5.c=new A.R(!1,!1,!1)
b5.f=new V.K(0,0,0)
b5.ch=1
a0.cy=b5
b5=new O.hn(a0,"alpha")
b5.c=new A.R(!1,!1,!1)
b5.f=1
a0.db=b5
b5=new D.c9()
b5.b9()
b5.e=[]
b5.f=[]
b5.r=[]
b5.x=[]
b5.z=b5.y=null
b5.cg(b5.gel(),b5.gf_(),b5.gf3())
a0.dx=b5
p=new O.hq()
p.b=new V.a1(0,0,0,0)
p.c=1
p.d=10
p.e=!1
a0.dy=p
p=b5.y
b5=p==null?b5.y=D.x():p
b5.l(0,a0.gfj())
b5=a0.dx
p=b5.z
b5=p==null?b5.z=D.x():p
b5.l(0,a0.gY())
a0.fr=null
b5=a0.dx
p=U.jm(V.kb(-1,-1,-1,b3))
b5.l(0,D.k0(new V.K(1,0.9,0.9),p))
b5=a0.dx
p=U.jm(V.kb(1,1,2,b3))
b5.l(0,D.k0(new V.K(0.2,0.2,0.35),p))
b5=a0.r
b5.saN(0,new V.K(0.2,0.2,0.2))
a0.r.sb6(a)
b5=a0.x
b5.saN(0,new V.K(0.8,0.8,0.8))
a0.x.sb6(a)
b5=a0.z
b5.saN(0,new V.K(0.7,0.7,0.7))
b5=a0.z
b5.bF(new A.R(!0,!1,b5.c.c))
b5.cK(10)
a0.Q.sb6(r.f.di("../resources/diceBumpMap"))
a1=X.jh(!0,1,1,!1)
b5=r.f.dj("../resources/maskonaive",".jpg")
a2=M.fK(b3,b3)
p=new O.dQ()
p.b=1.0471975511965976
p.d=new V.K(1,1,1)
l=p.c
p.c=b5
b5.gm().l(0,p.gY())
b5=new D.o("boxTexture",l,p.c)
b5.b=!0
p.p(b5)
a2.saC(p)
a2.saL(k)
a2.sap(0,a1)
a3=M.k2()
a3.saL(k)
a3.sap(0,a1)
a3.saC(a0)
a3.e.l(0,h)
a4=X.jh(!0,0.5,0.5,!0)
a5=M.k2()
a5.saL(k)
a5.sap(0,a4)
b5=new O.fQ()
b5.b=1
b5.c=10
b5.f=b5.e=b5.d=!1
$.u().toString
if(!(Math.abs(-2.5)<1e-9)){b5.b=3.5
p=new D.o("start",1,3.5)
p.b=!0
b5.p(p)}p=b5.c
$.u().toString
if(!(Math.abs(p-5.5)<1e-9)){b5.c=5.5
p=new D.o("stop",p,5.5)
p.b=!0
b5.p(p)}a5.saC(b5)
a5.e.l(0,h)
b5=new V.bG(-1,0,0,1)
p=a1.ch
o=a4.ch
a6=new M.c3()
a6.a=!0
a6.c=X.jh(!0,1,1,!1)
n=O.k4(b3,b3)
a7=a6.gR()
n.gm().l(0,a7)
a6.d=n
a6.e=M.fK(a6.c,n)
n=a6.c.ch
a8=$.kv
n=O.k4(a8==null?$.kv=new V.U(0,1):a8,n)
n.gm().l(0,a7)
a6.f=n
a6.r=M.fK(b3,n)
a6.d.sbL(0)
a6.f.sbL(0)
a6.d.scY(p)
a6.d.sbK(o)
a6.f.sbK(o)
a6.d.scc(b3)
a6.f.scc(b3)
a6.d.sbJ(b5)
a6.f.sbJ(b5)
a6.r.sap(0,b3)
a9=new O.e1()
a9.a=new V.a1(0,0,0,0)
b5=O.fH()
a9.c=b5
b5.aE(a9.geE(),a9.geG())
a9.d=0
a9.e=null
a9.r=a9.f=C.j
b0=new V.a1(0,0,0,0)
if(!a9.a.n(0,b0)){l=a9.a
a9.a=b0
b5=new D.o("backColor",l,b0)
b5.b=!0
a9.p(b5)}a9.scU(C.j)
a9.scU(C.i)
b5=a9.c
p=a4.ch
b5.l(0,O.ko(V.cl(0,0.8,0.2,0.2),p))
p=a9.c
b5=a1.ch
p.l(0,O.ko(V.cl(0,0.6,0.2,0.2),b5))
b1=M.fK(b3,b3)
b1.sap(0,X.jo(!1,b3))
b1.saC(a9)
b5=new M.bT()
b5.b9()
b5.e=!0
b5.f=!1
b5.r=null
b5.aE(b5.gf5(),b5.gf7())
b5.bf(0,[a2,a3,a5,a6,b1])
p=r.d
if(p!==b5){if(p!=null)p.gm().K(0,r.gcr())
r.d=b5
b5.gm().l(0,r.gcr())
r.cs()}V.nT(r)}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jr.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gS:function(a){return H.ck(a)},
i:function(a){return"Instance of '"+H.d(H.dJ(a))+"'"}}
J.hd.prototype={
i:function(a){return String(a)},
gS:function(a){return a?519018:218159}}
J.c8.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gS:function(a){return 0}}
J.b2.prototype={
gS:function(a){return 0},
i:function(a){return String(a)}}
J.dG.prototype={}
J.bE.prototype={}
J.af.prototype={
i:function(a){var s=a[$.l6()]
if(s==null)return this.dM(a)
return"JavaScript function for "+H.d(J.a0(s))}}
J.a8.prototype={
h9:function(a,b){var s
if(!!a.fixed$length)H.n(P.v("removeAt"))
s=a.length
if(b>=s)throw H.c(P.dK(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.n(P.v("remove"))
for(s=0;s<a.length;++s)if(J.A(a[s],b)){a.splice(s,1)
return!0}return!1},
bf:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.v("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.m)(b),++r)a.push(b[r])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bU(a))}},
q:function(a,b){var s,r,q=P.jt(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fR:function(a){return this.q(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cl:function(a,b){var s=a.length
if(b>s)throw H.c(P.au(b,0,s,"start",null))
if(b===s)return[]
return a.slice(b,s)},
gc2:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lE())},
aS:function(a,b){if(!!a.immutable$list)H.n(P.v("sort"))
H.m7(a,b==null?J.mQ():b)},
dJ:function(a){return this.aS(a,null)},
L:function(a,b){var s
for(s=0;s<a.length;++s)if(J.A(a[s],b))return!0
return!1},
i:function(a){return P.jp(a,"[","]")},
gN:function(a){return new J.V(a,a.length)},
gS:function(a){return H.ck(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.v("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$ii:1,
$if:1}
J.dk.prototype={}
J.V.prototype={
gD:function(a){return this.d},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.m(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b1.prototype={
aO:function(a,b){var s
if(typeof b!="number")throw H.c(H.aP(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbj(b)
if(this.gbj(a)===s)return 0
if(this.gbj(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbj:function(a){return a===0?1/a<0:a<0},
hh:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.v(""+a+".toInt()"))},
c0:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.v(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
dz:function(a,b){var s
if(b>20)throw H.c(P.au(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbj(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
dD:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dN:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.v("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
bd:function(a,b){var s
if(a>0)s=this.fp(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fp:function(a,b){return b>31?0:a>>>b},
$iX:1,
$iM:1}
J.c7.prototype={$ip:1}
J.c6.prototype={}
J.aC.prototype={
bP:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.n(H.bP(a,b))
return a.charCodeAt(b)},
cw:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.c(P.jV(b,null,null))
return a+b},
cm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dK(b,null))
if(b>c)throw H.c(P.dK(b,null))
if(c>a.length)throw H.c(P.dK(c,null))
return a.substring(b,c)},
aT:function(a,b){return this.cm(a,b,null)},
t:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.t(" ",s)+a},
fG:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.au(c,0,s,null,null))
return H.l1(a,b,c)},
L:function(a,b){return this.fG(a,b,0)},
aO:function(a,b){var s
if(typeof b!="string")throw H.c(H.aP(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gS:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iJ:1}
H.H.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bP(this.a,b)}}
H.i.prototype={}
H.bu.prototype={
gD:function(a){var s=this.d
return s},
u:function(){var s,r=this,q=r.a,p=J.bf(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bU(q))
s=r.c
if(typeof o!=="number")return H.q(o)
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
H.b4.prototype={
gN:function(a){return new H.cc(J.bi(this.a),this.b)},
gj:function(a){return J.bj(this.a)},
C:function(a,b){return this.b.$1(J.jf(this.a,b))}}
H.bZ.prototype={$ii:1}
H.cc.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){var s=this.a
return s}}
H.cu.prototype={
gN:function(a){return new H.er(J.bi(this.a),this.b)}}
H.er.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.c1.prototype={}
H.el.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.bF.prototype={}
H.im.prototype={
ai:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dA.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dl.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.ek.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hI.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f4.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bl.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.l4(r==null?"unknown":r)+"'"},
ghl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i6.prototype={}
H.i2.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.l4(s)+"'"}}
H.bS.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bS))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gS:function(a){var s,r=this.c
if(r==null)s=H.ck(this.a)
else s=typeof r!=="object"?J.Y(r):H.ck(r)
return(s^H.ck(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dJ(s))+"'")}}
H.dN.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.t.prototype={
gj:function(a){return this.a},
gay:function(a){return new H.aD(this)},
ghk:function(a){return H.lL(new H.aD(this),new H.hf(this))},
fH:function(a,b){var s=this.b
if(s==null)return!1
return this.e6(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.ba(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.ba(p,b)
q=r==null?n:r.b
return q}else return o.fQ(b)},
fQ:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cD(q,J.Y(a)&0x3ffffff)
r=this.df(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cu(s==null?m.b=m.bC():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cu(r==null?m.c=m.bC():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bC()
p=J.Y(b)&0x3ffffff
o=m.cD(q,p)
if(o==null)m.bG(q,p,[m.bD(b,c)])
else{n=m.df(o,b)
if(n>=0)o[n].b=c
else o.push(m.bD(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bU(s))
r=r.c}},
cu:function(a,b,c){var s=this.ba(a,b)
if(s==null)this.bG(a,b,this.bD(b,c))
else s.b=c},
bD:function(a,b){var s=this,r=new H.hi(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
df:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.A(a[r].a,b))return r
return-1},
i:function(a){return P.k8(this)},
ba:function(a,b){return a[b]},
cD:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
e9:function(a,b){delete a[b]},
e6:function(a,b){return this.ba(a,b)!=null},
bC:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bG(r,s,r)
this.e9(r,s)
return r}}
H.hf.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mO(this.a).at("2(1)")}}
H.hi.prototype={}
H.aD.prototype={
gj:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.dp(s,s.r)
r.c=s.e
return r}}
H.dp.prototype={
gD:function(a){return this.d},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bU(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.j7.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.j8.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j9.prototype={
$1:function(a){return this.a(a)}}
H.he.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ch.prototype={}
H.bx.prototype={
gj:function(a){return a.length},
$ir:1}
H.b7.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.cg.prototype={
k:function(a,b,c){H.ay(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.du.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dv.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dw.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dx.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dy.prototype={
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.ci.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.ac.prototype={
at:function(a){return H.fg(v.typeUniverse,this,a)},
cv:function(a){return H.mB(v.typeUniverse,this,a)}}
H.eI.prototype={}
H.eD.prototype={
i:function(a){return this.a}}
H.cL.prototype={}
P.iN.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:16}
P.iM.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iO.prototype={
$0:function(){this.a.$0()}}
P.iP.prototype={
$0:function(){this.a.$0()}}
P.cK.prototype={
dV:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.iY(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dW:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.iX(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$ico:1}
P.iY.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iX.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dN(s,o)}q.c=p
r.d.$1(q)}}
P.bI.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bJ.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bI){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bi(s)
if(o instanceof P.bJ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cH.prototype={
gN:function(a){return new P.bJ(this.a())}}
P.es.prototype={}
P.dX.prototype={}
P.dY.prototype={}
P.co.prototype={}
P.j_.prototype={}
P.j4.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a0(this.b)
throw s}}
P.iU.prototype={
hd:function(a){var s,r,q,p=null
try{if(C.e===$.ah){a.$0()
return}P.nl(p,p,this,a)}catch(q){s=H.ft(q)
r=H.jO(q)
P.kR(p,p,this,s,r)}},
he:function(a,b){var s,r,q,p=null
try{if(C.e===$.ah){a.$1(b)
return}P.nm(p,p,this,a,b)}catch(q){s=H.ft(q)
r=H.jO(q)
P.kR(p,p,this,s,r)}},
hf:function(a,b){return this.he(a,b,t.z)},
fE:function(a){return new P.iV(this,a)},
cT:function(a,b){return new P.iW(this,a,b)}}
P.iV.prototype={
$0:function(){return this.a.hd(this.b)}}
P.iW.prototype={
$1:function(a){return this.a.hf(this.b,a)},
$S:function(){return this.c.at("~(0)")}}
P.cw.prototype={
gN:function(a){var s=new P.cx(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
L:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e4(b)
return r}},
e4:function(a){var s=this.d
if(s==null)return!1
return this.bt(s[this.bq(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cz(s==null?q.b=P.jD():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cz(r==null?q.c=P.jD():r,b)}else return q.dZ(0,b)},
dZ:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jD()
s=q.bq(b)
r=p[s]
if(r==null)p[s]=[q.bp(b)]
else{if(q.bt(r,b)>=0)return!1
r.push(q.bp(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fg(this.c,b)
else return this.ff(0,b)},
ff:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bq(b)
r=n[s]
q=o.bt(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cO(p)
return!0},
cz:function(a,b){if(a[b]!=null)return!1
a[b]=this.bp(b)
return!0},
fg:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cO(s)
delete a[b]
return!0},
cE:function(){this.r=1073741823&this.r+1},
bp:function(a){var s,r=this,q=new P.iT(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cE()
return q},
cO:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cE()},
bq:function(a){return J.Y(a)&1073741823},
bt:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.A(a[r].a,b))return r
return-1}}
P.iT.prototype={}
P.cx.prototype={
gD:function(a){return this.d},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bU(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c5.prototype={}
P.ca.prototype={$ii:1,$if:1}
P.B.prototype={
gN:function(a){return new H.bu(a,this.gj(a))},
C:function(a,b){return this.h(a,b)},
gdg:function(a){return this.gj(a)===0},
hi:function(a){var s,r,q,p,o=this
if(o.gdg(a)){s=J.k5(0)
return s}r=o.h(a,0)
q=P.jt(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.q(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
i:function(a){return P.jp(a,"[","]")}}
P.dr.prototype={}
P.hl.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:17}
P.ap.prototype={
F:function(a,b){var s,r
for(s=J.bi(this.gay(a));s.u();){r=s.gD(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.bj(this.gay(a))},
i:function(a){return P.k8(a)}}
P.cE.prototype={
i:function(a){return P.jp(this,"{","}")},
C:function(a,b){var s,r,q,p="index"
P.lr(b,p)
P.kj(b,p)
for(s=P.ml(this,this.r),r=0;s.u();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.cy.prototype={}
P.d6.prototype={}
P.d8.prototype={}
P.fY.prototype={}
P.ix.prototype={}
P.iy.prototype={
fI:function(a){var s,r,q,p=null,o=P.jv(0,p,a.length)
if(o==null)throw H.c(new P.bB(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.iZ(r)
if(q.eb(a,0,o)!==o){C.b.bP(a,o-1)
q.bI()}return new Uint8Array(r.subarray(0,H.mI(0,q.b,r.length)))}}
P.iZ.prototype={
bI:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fz:function(a,b){var s,r,q,p,o,n=this
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
eb:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bP(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.cw(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fz(p,C.b.cw(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
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
P.be.prototype={}
P.a7.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aO:function(a,b){return C.c.aO(this.a,b.a)},
gS:function(a){var s=this.a
return(s^C.c.bd(s,30))&1073741823},
i:function(a){var s=this,r=P.lA(H.lX(s)),q=P.da(H.lV(s)),p=P.da(H.lR(s)),o=P.da(H.lS(s)),n=P.da(H.lU(s)),m=P.da(H.lW(s)),l=P.lB(H.lT(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.X.prototype={}
P.aW.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gS:function(a){return C.c.gS(this.a)},
aO:function(a,b){return C.c.aO(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fW(),o=this.a
if(o<0)return"-"+new P.aW(0-o).i(0)
s=p.$1(C.c.a1(o,6e7)%60)
r=p.$1(C.c.a1(o,1e6)%60)
q=new P.fV().$1(o%1e6)
return""+C.c.a1(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
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
P.E.prototype={}
P.d2.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h1(s)
return"Assertion failed"}}
P.dB.prototype={
i:function(a){return"Throw of null."}}
P.a5.prototype={
gbs:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbr:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbs()+o+m
if(!q.a)return l
s=q.gbr()
r=P.h1(q.b)
return l+s+": "+r}}
P.bB.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.di.prototype={
gbs:function(){return"RangeError"},
gbr:function(){var s,r=this.b
if(typeof r!=="number")return r.af()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gj:function(a){return this.f}}
P.em.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ej.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.d7.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h1(s)+"."}}
P.dE.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.cn.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.d9.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eF.prototype={
i:function(a){return"Exception: "+this.a}}
P.h7.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.cm(q,0,75)+"..."
return r+"\n"+q}}
P.p.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gN(this)
for(s=0;r.u();)++s
return s},
C:function(a,b){var s,r,q
P.kj(b,"index")
for(s=this.gN(this),r=0;s.u();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.lD(this,"(",")")}}
P.dj.prototype={}
P.ao.prototype={$ii:1,$if:1}
P.dq.prototype={}
P.aa.prototype={
gS:function(a){return P.G.prototype.gS.call(C.h,this)},
i:function(a){return"null"}}
P.M.prototype={}
P.G.prototype={constructor:P.G,$iG:1,
n:function(a,b){return this===b},
gS:function(a){return H.ck(this)},
i:function(a){return"Instance of '"+H.d(H.dJ(this))+"'"},
toString:function(){return this.i(this)}}
P.J.prototype={}
P.aI.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fu.prototype={
gj:function(a){return a.length}}
W.d0.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
i:function(a){return String(a)}}
W.d4.prototype={}
W.aV.prototype={
cf:function(a,b,c){if(c!=null)return a.getContext(b,P.nA(c))
return a.getContext(b)},
dC:function(a,b){return this.cf(a,b,null)},
$iaV:1}
W.ae.prototype={
gj:function(a){return a.length}}
W.fL.prototype={
gj:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bW.prototype={
gj:function(a){return a.length}}
W.fM.prototype={}
W.a6.prototype={}
W.ak.prototype={}
W.fN.prototype={
gj:function(a){return a.length}}
W.fO.prototype={
gj:function(a){return a.length}}
W.fP.prototype={
gj:function(a){return a.length}}
W.fT.prototype={
i:function(a){return String(a)}}
W.bX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.bY.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gak(a))+" x "+H.d(this.gah(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bg(b)
s=a.left==s.gbk(b)&&a.top==s.gbm(b)&&this.gak(a)==s.gak(b)&&this.gah(a)==s.gah(b)}else s=!1
return s},
gS:function(a){return W.kE(J.Y(a.left),J.Y(a.top),J.Y(this.gak(a)),J.Y(this.gah(a)))},
gcV:function(a){return a.bottom},
gah:function(a){return a.height},
gbk:function(a){return a.left},
gcb:function(a){return a.right},
gbm:function(a){return a.top},
gak:function(a){return a.width},
$iab:1}
W.db.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fU.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
gdg:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var s=this.hi(this)
return new J.V(s,s.length)}}
W.I.prototype={
gcW:function(a){return new W.ev(a,a.children)},
gcX:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.af()
if(q<0)q=-q*0
if(typeof p!=="number")return p.af()
if(p<0)p=-p*0
return new P.ab(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iI:1}
W.h.prototype={$ih:1}
W.b.prototype={
fA:function(a,b,c,d){if(c!=null)this.e_(a,b,c,!1)},
e_:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)},
$ib:1}
W.aY.prototype={$iaY:1}
W.dc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.dd.prototype={
gj:function(a){return a.length}}
W.df.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.hb.prototype={
gj:function(a){return a.length}}
W.b_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b0.prototype={
gcZ:function(a){return a.data},
$ib0:1}
W.bs.prototype={$ibs:1}
W.b3.prototype={$ib3:1}
W.hj.prototype={
i:function(a){return String(a)}}
W.hC.prototype={
gj:function(a){return a.length}}
W.hD.prototype={
h:function(a,b){return P.aQ(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gay:function(a){var s=[]
this.F(a,new W.hE(s))
return s},
gj:function(a){return a.size}}
W.hE.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hF.prototype={
h:function(a,b){return P.aQ(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gay:function(a){var s=[]
this.F(a,new W.hG(s))
return s},
gj:function(a){return a.size}}
W.hG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b6.prototype={$ib6:1}
W.dt.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.a2.prototype={$ia2:1}
W.eu.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gN:function(a){var s=this.a.childNodes
return new W.c2(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.w.prototype={
hb:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ll(s,b,a)}catch(q){H.ft(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dL(a):s},
fh:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b8.prototype={
gj:function(a){return a.length},
$ib8:1}
W.dH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.hR.prototype={
h:function(a,b){return P.aQ(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gay:function(a){var s=[]
this.F(a,new W.hS(s))
return s},
gj:function(a){return a.size}}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dO.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.dS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b9.prototype={$ib9:1}
W.dT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ba.prototype={
gj:function(a){return a.length},
$iba:1}
W.i3.prototype={
h:function(a,b){return a.getItem(H.mG(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gay:function(a){var s=[]
this.F(a,new W.i4(s))
return s},
gj:function(a){return a.length}}
W.i4.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aJ.prototype={$iaJ:1}
W.aK.prototype={$iaK:1}
W.ag.prototype={$iag:1}
W.e_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.e0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ih.prototype={
gj:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.bc.prototype={$ibc:1}
W.e5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ik.prototype={
gj:function(a){return a.length}}
W.aw.prototype={}
W.iw.prototype={
i:function(a){return String(a)}}
W.ep.prototype={
gj:function(a){return a.length}}
W.aL.prototype={
gfM:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
gfL:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$iaL:1}
W.bH.prototype={
fi:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
ea:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ew.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cv.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bg(b)
s=a.left==s.gbk(b)&&a.top==s.gbm(b)&&a.width==s.gak(b)&&a.height==s.gah(b)}else s=!1
return s},
gS:function(a){return W.kE(J.Y(a.left),J.Y(a.top),J.Y(a.width),J.Y(a.height))},
gah:function(a){return a.height},
gak:function(a){return a.width}}
W.eJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.f1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.jn.prototype={}
W.eE.prototype={}
W.iQ.prototype={
$1:function(a){return this.a.$1(a)}}
W.jC.prototype={}
W.C.prototype={
gN:function(a){return new W.c2(a,this.gj(a))}}
W.c2.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cZ(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return this.d}}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eZ.prototype={}
W.cF.prototype={}
W.cG.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f5.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
P.cM.prototype={$ib0:1,
gcZ:function(a){return this.a}}
P.j5.prototype={
$2:function(a,b){this.a[a]=b},
$S:18}
P.de.prototype={
gbb:function(){return new H.b4(new H.cu(this.b,new P.h5()),new P.h6())},
k:function(a,b,c){var s=this.gbb()
J.lq(s.b.$1(J.jf(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bj(this.gbb().a)},
h:function(a,b){var s=this.gbb()
return s.b.$1(J.jf(s.a,b))},
gN:function(a){var s=P.ju(this.gbb(),!1)
return new J.V(s,s.length)}}
P.h5.prototype={
$1:function(a){return t.h.b(a)}}
P.h6.prototype={
$1:function(a){return t.h.a(a)}}
P.eY.prototype={
gcb:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
gcV:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.q(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bg(b)
if(s==r.gbk(b)){q=n.b
if(q==r.gbm(b)){p=n.c
if(typeof s!=="number")return s.w()
if(typeof p!=="number")return H.q(p)
o=n.$ti.c
if(o.a(s+p)===r.gcb(b)){s=n.d
if(typeof q!=="number")return q.w()
if(typeof s!=="number")return H.q(s)
r=o.a(q+s)===r.gcV(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gS:function(a){var s,r=this,q=r.a,p=J.Y(q),o=r.b,n=J.Y(o),m=r.c
if(typeof q!=="number")return q.w()
if(typeof m!=="number")return H.q(m)
s=r.$ti.c
m=C.c.gS(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.w()
if(typeof q!=="number")return H.q(q)
q=C.c.gS(s.a(o+q))
return P.mk(P.iS(P.iS(P.iS(P.iS(0,p),n),m),q))}}
P.ab.prototype={
gbk:function(a){return this.a},
gbm:function(a){return this.b},
gak:function(a){return this.c},
gah:function(a){return this.d}}
P.bt.prototype={$ibt:1}
P.dn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.by.prototype={$iby:1}
P.dC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hL.prototype={
gj:function(a){return a.length}}
P.dZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcW:function(a){return new P.de(a,new W.eu(a))}}
P.bD.prototype={$ibD:1}
P.e6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eM.prototype={}
P.eN.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f6.prototype={}
P.f7.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.fz.prototype={
gj:function(a){return a.length}}
P.fA.prototype={
h:function(a,b){return P.aQ(a.get(b))},
F:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gay:function(a){var s=[]
this.F(a,new P.fB(s))
return s},
gj:function(a){return a.size}}
P.fB.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d3.prototype={
gj:function(a){return a.length}}
P.aB.prototype={}
P.dD.prototype={
gj:function(a){return a.length}}
P.et.prototype={}
P.dM.prototype={
dw:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bL(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.s.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.nB(g))
return}if(t.k.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jg("Incorrect number or type of arguments"))},
hg:function(a,b,c,d,e,f,g){return this.dw(a,b,c,d,e,f,g,null,null,null)}}
P.dU.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aQ(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.f2.prototype={}
P.f3.prototype={}
K.fv.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"}}
K.dh.prototype={
aP:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)if(s[q].aP(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aE.prototype={
aP:function(a,b){return!this.dK(0,b)},
i:function(a){return"!["+this.cn(0)+"]"}}
K.hT.prototype={
dQ:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.l("May not create a Set with zero characters."))
s=new H.t(t.E)
for(r=new H.bu(a,a.gj(a));r.u();){q=r.d
s.k(0,q,!0)}p=P.ju(new H.aD(s),!0)
C.a.dJ(p)
this.a=p},
aP:function(a,b){return C.a.L(this.a,b)},
i:function(a){return P.jx(this.a)}}
L.dV.prototype={
q:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.il(this.a.I(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
fO:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.aP(0,a))return p}return null},
i:function(a){return this.b},
cN:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.L(0,l))m+=" (consume)"
for(l=new H.aD(n.d.c),l=l.gN(l);l.u();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.L(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.m)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e3.prototype={
i:function(a){var s=H.l2(this.b,"\n","\\n"),r=H.l2(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e4.prototype={
i:function(a){return this.b}}
L.ii.prototype={
I:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dV(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
b7:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e4(a)
s.c=new H.t(t.i)
this.b.k(0,a,s)}return s},
dA:function(a){return this.hj(a)},
hj:function(a){var s=this
return P.mY(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dA(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.h9(a0,0)
else{if(!r.u()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.fO(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jx(b)
throw H.c(P.l("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.v("removeRange"))
P.jv(0,k,b.length)
b.splice(0,k-0)
C.a.bf(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.L(0,n.a)?7:8
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
if(d.d!=null){g=P.jx(c)
f=d.d
e=f.c.h(0,g)
n=new L.e3(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.L(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mi()
case 1:return P.mj(o)}}},t.j)},
i:function(a){var s,r=new P.aI(""),q=this.d
if(q!=null)r.a=q.cN()+"\n"
for(q=this.a,q=q.ghk(q),q=new H.cc(J.bi(q.a),q.b);q.u();){s=q.a
if(s!=this.d)r.a+=s.cN()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.il.prototype={
i:function(a){return this.b.b+": "+this.cn(0)}}
O.bm.prototype={
b9:function(){this.a=[]
this.c=this.b=null},
cg:function(a,b,c){this.b=b
this.c=a},
aE:function(a,b){return this.cg(a,null,b)},
bc:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cq:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.V(s,s.length)},
C:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.bc([b])){s=this.a
r=s.length
s.push(b)
this.cq(r,[b])}},
bf:function(a,b){var s,r
if(this.bc(b)){s=this.a
r=s.length
C.a.bf(s,b)
this.cq(r,b)}},
$if:1}
O.cf.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
aF:function(){var s=this.b
if(s!=null)s.v(null)},
gT:function(a){var s=this.a
if(s.length>0)return C.a.gc2(s)
else return V.b5()},
bl:function(a){var s=this.a
if(a==null)s.push(V.b5())
else s.push(a)
this.aF()},
aA:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
E.fE.prototype={}
E.bq.prototype={
scj:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().K(0,q.gds())
s=q.c
if(s!=null)s.gm().l(0,q.gds())
r=new D.o("shape",p,q.c)
r.b=!0
q.az(r)}},
sdl:function(a){var s,r,q=this
if(!J.A(q.r,a)){s=q.r
if(s!=null)s.gm().K(0,q.gdq())
if(a!=null)a.gm().l(0,q.gdq())
q.r=a
r=new D.o("mover",s,a)
r.b=!0
q.az(r)}},
a3:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.a:null
if(!J.A(o,q.x)){s=q.x
q.x=o
r=new D.o("matrix",s,o)
r.b=!0
q.az(r)}for(p=q.y.a,p=new J.V(p,p.length);p.u();)p.d.a3(0,b)},
V:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gT(q))
else o.push(p.t(0,q.gT(q)))
q.aF()
a.ca(r.f)
q=a.dy
s=(q&&C.a).gc2(q)
if(s!=null&&r.d!=null)s.b5(a,r)
for(q=r.y.a,q=new J.V(q,q.length);q.u();)q.d.V(a)
a.c9()
a.dx.aA()},
az:function(a){var s=this.z
if(s!=null)s.v(a)},
a8:function(){return this.az(null)},
dt:function(a){this.e=null
this.az(a)},
h_:function(){return this.dt(null)},
dr:function(a){this.az(a)},
fZ:function(){return this.dr(null)},
dn:function(a){this.az(a)},
fW:function(){return this.dn(null)},
fV:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdm(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aX()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a8()},
fY:function(a,b){var s,r
for(s=b.gN(b),r=this.gdm();s.u();)s.gD(s).gm().K(0,r)
this.a8()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bk.prototype={
i:function(a){return this.b}}
E.bz.prototype={
i:function(a){return this.b}}
E.eC.prototype={}
E.hN.prototype={
dP:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a7(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.cf()
s.a=[]
s.gm().l(0,new E.hO(r))
r.cy=s
s=new O.cf()
s.a=[]
s.gm().l(0,new E.hP(r))
r.db=s
s=new O.cf()
s.a=[]
s.gm().l(0,new E.hQ(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.t(t.G)},
gh8:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gT(q)
s=r.db
s=r.z=q.t(0,s.gT(s))
q=s}return q},
gdu:function(){var s,r=this,q=r.ch
if(q==null){q=r.gh8()
s=r.dx
s=r.ch=q.t(0,s.gT(s))
q=s}return q},
gdB:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.gT(q)
s=r.dx
s=r.cx=q.t(0,s.gT(s))
q=s}return q},
ca:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gc2(s):a)},
c9:function(){var s=this.dy
if(s.length>1)s.pop()},
aX:function(a){var s=a.b
if(s.length===0)throw H.c(P.l("May not cache a shader with no name."))
if(this.fr.fH(0,s))throw H.c(P.l('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.hO.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hP.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hQ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e2.prototype={
ct:function(a){this.dv()},
cs:function(){return this.ct(null)},
gfP:function(){var s,r=this,q=Date.now(),p=C.c.a1(P.k1(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a7(q,!1)
return s/p},
cI:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.t()
if(typeof p!=="number")return H.q(p)
s=C.d.c0(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.t()
r=C.d.c0(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kq(C.k,q.ghc())}},
dv:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.w.ea(s)
r=W.kS(new E.ig(this),t.H)
r.toString
C.w.fi(s,r)}},
ha:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cI()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a7(p,!1)
q.y=P.k1(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aF()
p=q.db
C.a.sj(p.a,0)
p.aF()
p=q.dx
C.a.sj(p.a,0)
p.aF()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.V(n.e)}}catch(o){s=H.ft(o)
r=H.jO(o)
P.jS("Error: "+H.d(s))
P.jS("Stack: "+H.d(r))
throw H.c(s)}}}
E.ig.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ha()}}}
Z.eq.prototype={}
Z.fF.prototype={
E:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.ft(q)
r=P.l('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.bd.prototype={}
Z.ai.prototype={
ac:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
E:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].E(a)},
a2:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
V:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a0(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(o,", ")+"\nAttrs:   "+C.a.q(p,", ")}}
Z.c4.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dJ(this.c))+"'")+"]"}}
Z.ax.prototype={
gck:function(a){var s=this.a,r=(s&$.Q().a)!==0?3:0
if((s&$.aT().a)!==0)r+=3
if((s&$.aS().a)!==0)r+=3
if((s&$.aA().a)!==0)r+=2
if((s&$.aU().a)!==0)r+=3
if((s&$.cX().a)!==0)r+=3
if((s&$.cY().a)!==0)r+=4
if((s&$.bR().a)!==0)++r
return(s&$.aR().a)!==0?r+4:r},
fD:function(a){var s,r=$.Q(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cY()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bR()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aR()
if((q&r.a)!==0)if(s===a)return r
return $.lj()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ax))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.Q().a)!==0)s.push("Pos")
if((r&$.aT().a)!==0)s.push("Norm")
if((r&$.aS().a)!==0)s.push("Binm")
if((r&$.aA().a)!==0)s.push("Txt2D")
if((r&$.aU().a)!==0)s.push("TxtCube")
if((r&$.cX().a)!==0)s.push("Clr3")
if((r&$.cY().a)!==0)s.push("Clr4")
if((r&$.bR().a)!==0)s.push("Weight")
if((r&$.aR().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.q(s,"|")}}
D.fG.prototype={}
D.aX.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.L(q,b)
if(q===!0){q=r.a
s=(q&&C.a).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.L(q,b)
if(q===!0){q=r.b
s=(q&&C.a).K(q,b)||s}return s},
v:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.N()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.F(P.ju(s,!0),new D.h2(o))
s=p.b
if(s!=null){p.b=[]
C.a.F(s,new D.h3(o))}return!0},
bS:function(){return this.v(null)},
aB:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.h2.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.h3.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.N.prototype={}
D.al.prototype={}
D.am.prototype={}
D.o.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.d5.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d5))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dm.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.hg.prototype={
h4:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
h0:function(a){this.c=a.b
this.d.K(0,a.a)
return!1}}
X.cb.prototype={}
X.hk.prototype={
aV:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.t()
s=b.b
r=o.ch
if(typeof s!=="number")return s.t()
q=new V.a3(m.a+l*k,m.b+s*r)
r=o.a.gaM()
p=new X.bv(a,V.aF(),o.x,r,q)
p.b=!0
o.z=new P.a7(n,!1)
o.x=q
return p},
c8:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dE()
if(typeof s!=="number")return s.al()
this.r=(s&~r)>>>0
return!1},
b3:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.aV(a,b))
return!0},
h5:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaM()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.t()
o=a.b
n=m.cy
if(typeof o!=="number")return o.t()
r=new X.bw(new V.U(q*p,o*n),s,r)
r.b=!0
l.v(r)
return!0},
eP:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cb(c,p.a.gaM(),b)
q.b=!0
r.v(q)
p.y=new P.a7(s,!1)
p.x=V.aF()}}
X.a9.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a9))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bv.prototype={}
X.hH.prototype={
bu:function(a,b,c){var s=this,r=new P.a7(Date.now(),!1),q=s.a.gaM(),p=new X.bv(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
c8:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bu(a,b,!0))
return!0},
b4:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dE()
if(typeof r!=="number")return r.al()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.v(s.bu(a,b,!0))
return!0},
b3:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bu(a,b,!1))
return!0},
h6:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaM()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.t()
p=a.b
o=n.ch
if(typeof p!=="number")return p.t()
s=new X.bw(new V.U(r*q,p*o),s,b)
s.b=!0
m.v(s)
return!0},
gd_:function(){var s=this.b
return s==null?this.b=D.x():s},
gcd:function(){var s=this.c
return s==null?this.c=D.x():s},
gdk:function(){var s=this.d
return s==null?this.d=D.x():s}}
X.bw.prototype={}
X.dI.prototype={}
X.cp.prototype={}
X.ij.prototype={
aV:function(a,b){var s=this,r=new P.a7(Date.now(),!1),q=a.length>0?a[0]:V.aF(),p=s.a.gaM(),o=new X.cp(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
h3:function(a){var s=this.b
if(s==null)return!1
s.v(this.aV(a,!0))
return!0},
h1:function(a){var s=this.c
if(s==null)return!1
s.v(this.aV(a,!0))
return!0},
h2:function(a){var s=this.d
if(s==null)return!1
s.v(this.aV(a,!1))
return!0}}
X.en.prototype={
gaM:function(){var s=this.a,r=C.f.gcX(s).c
r.toString
s=C.f.gcX(s).d
s.toString
return V.cl(0,0,r,s)},
cB:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dm(s,new X.a9(r,a.altKey,a.shiftKey))},
aK:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a9(r,a.altKey,a.shiftKey)},
bH:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a9(r,a.altKey,a.shiftKey)},
av:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.aa()
if(typeof o!=="number")return H.q(o)
s=r.top
if(typeof p!=="number")return p.aa()
if(typeof s!=="number")return H.q(s)
return new V.a3(q-o,p-s)},
aW:function(a){return new V.U(a.movementX,a.movementY)},
bE:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=C.d.W(p.pageX)
C.d.W(p.pageY)
n=k.left
if(typeof n!=="number")return H.q(n)
C.d.W(p.pageX)
m=C.d.W(p.pageY)
l=k.top
if(typeof l!=="number")return H.q(l)
j.push(new V.a3(o-n,m-l))}return j},
as:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.d5(s,new X.a9(r,a.altKey,a.shiftKey))},
bv:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.aa()
if(typeof n!=="number")return H.q(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.aa()
if(typeof p!=="number")return H.q(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.q(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.q(p)
p=r<p}else p=!1
return p},
eJ:function(a){this.f=!0},
es:function(a){this.f=!1},
ez:function(a){if(this.f&&this.bv(a))a.preventDefault()},
eN:function(a){var s
if(!this.f)return
s=this.cB(a)
this.b.h4(s)},
eL:function(a){var s
if(!this.f)return
s=this.cB(a)
this.b.h0(s)},
eR:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aK(a)
if(p.x){s=p.as(a)
r=p.aW(a)
if(p.d.c8(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.as(a)
q=p.av(a)
if(p.c.c8(s,q))a.preventDefault()},
eV:function(a){var s,r,q,p=this
p.aK(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b4(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b4(s,q))a.preventDefault()},
eD:function(a){var s,r,q,p=this
if(!p.bv(a)){p.aK(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b4(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b4(s,q))a.preventDefault()}},
eT:function(a){var s,r,q,p=this
p.aK(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b3(s,q))a.preventDefault()},
eB:function(a){var s,r,q,p=this
if(!p.bv(a)){p.aK(a)
s=p.as(a)
if(p.x){r=p.aW(a)
if(p.d.b3(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b3(s,q))a.preventDefault()}},
eX:function(a){var s,r,q=this
q.aK(a)
s=new V.U((a&&C.v).gfL(a),C.v.gfM(a)).t(0,q.Q)
if(q.x){if(q.d.h5(s))a.preventDefault()
return}if(q.r)return
r=q.av(a)
if(q.c.h6(s,r))a.preventDefault()},
eZ:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.as(q.y)
r=q.av(q.y)
q.d.eP(s,r,p)}},
fe:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bH(a)
s=r.bE(a)
if(r.e.h3(s))a.preventDefault()},
fa:function(a){var s
this.bH(a)
s=this.bE(a)
if(this.e.h1(s))a.preventDefault()},
fc:function(a){var s
this.bH(a)
s=this.bE(a)
if(this.e.h2(s))a.preventDefault()}}
D.bp.prototype={
aq:function(a){var s=this.r
if(s!=null)s.v(a)},
dU:function(){return this.aq(null)},
$ian:1}
D.an.prototype={}
D.c9.prototype={
aq:function(a){var s=this.y
if(s!=null)s.v(a)},
cG:function(a){var s=this.z
if(s!=null)s.v(a)},
eO:function(){return this.cG(null)},
f0:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(q==null||this.e5(q))return!1}return!0},
em:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcF(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p instanceof D.bp)this.f.push(p)
o=p.r
if(o==null){o=new D.aX()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.al()
s.b=!0
this.aq(s)},
f4:function(a,b){var s,r,q
for(s=b.gN(b),r=this.gcF();s.u();){q=s.gD(s)
C.a.K(this.e,q)
q.gm().K(0,r)}s=new D.am()
s.b=!0
this.aq(s)},
e5:function(a){var s=C.a.L(this.f,a)
return s}}
V.K.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.a1.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.h0.prototype={}
V.ce.prototype={
X:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ce))return!1
s=b.a
$.u().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bQ([o.a,o.d,o.r],3,0),m=V.bQ([o.b,o.e,o.x],3,0),l=V.bQ([o.c,o.f,o.y],3,0),k=n.length
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
V.ar.prototype={
X:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c1:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.u().toString
if(Math.abs(b3-0)<1e-9)return V.b5()
s=1/b3
r=-l
q=-a2
return V.as((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
t:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.as(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bn:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b8:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.O(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ar))return!1
s=b.a
$.u().toString
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
i:function(a){return this.G()},
A:function(a){var s,r,q,p,o,n=this,m=V.bQ([n.a,n.e,n.y,n.cx],3,0),l=V.bQ([n.b,n.f,n.z,n.cy],3,0),k=V.bQ([n.c,n.r,n.Q,n.db],3,0),j=V.bQ([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
G:function(){return this.A("")}}
V.a3.prototype={
a4:function(a){return new V.U(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.O.prototype={
aa:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aG.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aG))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.dL.prototype={
gae:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dL))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.U.prototype={
b2:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.t()
if(typeof p!=="number")return H.q(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.q(r)
return q*p+s*r},
t:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.t()
if(typeof b!=="number")return H.q(b)
s=this.b
if(typeof s!=="number")return s.t()
return new V.U(r*b,s*b)},
U:function(a,b){var s,r
$.u().toString
if(Math.abs(b-0)<1e-9){s=$.kw
return s==null?$.kw=new V.U(0,0):s}s=this.a
if(typeof s!=="number")return s.U()
r=this.b
if(typeof r!=="number")return r.U()
return new V.U(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
s=b.a
r=this.a
$.u().toString
if(typeof s!=="number")return s.aa()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.aa()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.y.prototype={
b2:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c3:function(a,b){return new V.y(V.jQ(this.a,a.a,b),V.jQ(this.b,a.b,b),V.jQ(this.c,a.c,b))},
H:function(){var s=this,r=Math.sqrt(s.a7(s))
if(r===1)return s
return s.U(0,r)},
b_:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.y(-this.a,-this.b,-this.c)},
U:function(a,b){$.u().toString
if(Math.abs(b-0)<1e-9)return V.eo()
return new V.y(this.a/b,this.b/b,this.c/b)},
dh:function(){$.u().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.bG.prototype={
b2:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bG))return!1
s=b.a
$.u().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
U.fJ.prototype={
bo:function(a){var s=V.nY(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
J:function(a){var s=this.y
if(s!=null)s.v(a)},
sce:function(a,b){},
sc5:function(a){var s,r=this,q=r.b
$.u().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bo(s)}q=new D.o("maximumLocation",q,r.b)
q.b=!0
r.J(q)}},
sc7:function(a){var s,r=this,q=r.c
$.u().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bo(s)}q=new D.o("minimumLocation",q,r.c)
q.b=!0
r.J(q)}},
sad:function(a,b){var s,r=this
b=r.bo(b)
s=r.d
$.u().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.o("location",s,b)
s.b=!0
r.J(s)}},
sc6:function(a){var s,r,q=this,p=q.e
$.u().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.o("maximumVelocity",p,a)
p.b=!0
q.J(p)}},
sP:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.u().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.o("velocity",r,a)
r.b=!0
s.J(r)}},
sbR:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.u().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.o("dampening",s,a)
s.b=!0
this.J(s)}},
a3:function(a,b){var s,r,q,p=this,o=p.f
$.u().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sad(0,p.d+s*b)
o=p.x
$.u().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sP(s)}}}
U.bo.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
sT:function(a,b){var s,r,q,p=this
if(!J.A(p.a,b)){s=p.a
p.a=b
r=new D.o("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.v(r)}},
aQ:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bo))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.br.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
J:function(a){var s=this.e
if(s!=null)s.v(a)},
ab:function(){return this.J(null)},
ek:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaJ(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.al()
s.b=!0
this.J(s)},
f2:function(a,b){var s,r
for(s=b.gN(b),r=this.gaJ();s.u();)s.gD(s).gm().K(0,r)
s=new D.am()
s.b=!0
this.J(s)},
aQ:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.af()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.V(p,p.length),s=null;p.u();){o=p.d
if(o!=null){r=o.aQ(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}q.f=s==null?V.b5():s
p=q.e
if(p!=null)p.aB(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.br))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.A(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iS:1}
U.S.prototype={}
U.cr.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.x():s},
J:function(a){var s=this.cy
if(s!=null)s.v(a)},
ab:function(){return this.J(null)},
aY:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gd_().l(0,s.gbw())
s.a.c.gdk().l(0,s.gby())
s.a.c.gcd().l(0,s.gbA())
return!0},
bx:function(a){var s=this
if(!J.A(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bz:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a4(a.d)
s=s.a7(s)
r=l.r
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a4(a.d).t(0,2).U(0,s.gae())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.t()
q=l.e
if(typeof q!=="number")return H.q(q)
r.sP(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a4(q).t(0,2).U(0,s.gae())
r=l.b
o=p.a
if(typeof o!=="number")return o.M()
n=l.e
if(typeof n!=="number")return H.q(n)
m=l.z
if(typeof m!=="number")return H.q(m)
r.sad(0,-o*n+m)
l.b.sP(0)
l.Q=a.z.a4(q).t(0,2).U(0,s.gae())}l.ab()},
bB:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.a7(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.t()
q=p.e
if(typeof q!=="number")return H.q(q)
s.sP(r*10*q)
p.ab()}},
aQ:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.af()
if(o<n){p.ch=n
s=b.y
p.b.a3(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.as(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iS:1}
U.cs.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.x():s},
J:function(a){var s=this.fx
if(s!=null)s.v(a)},
ab:function(){return this.J(null)},
aY:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gd_().l(0,q.gbw())
q.a.c.gdk().l(0,q.gby())
q.a.c.gcd().l(0,q.gbA())
s=q.a.d
r=s.f
s=r==null?s.f=D.x():r
s.l(0,q.ged())
s=q.a.d
r=s.d
s=r==null?s.d=D.x():r
s.l(0,q.gef())
s=q.a.e
r=s.b
s=r==null?s.b=D.x():r
s.l(0,q.gfv())
s=q.a.e
r=s.d
s=r==null?s.d=D.x():r
s.l(0,q.gft())
s=q.a.e
r=s.c
s=r==null?s.c=D.x():r
s.l(0,q.gfq())
return!0},
an:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.M()
s=-s}if(this.r){if(typeof r!=="number")return r.M()
r=-r}return new V.U(s,r)},
bx:function(a){var s=this
t.d.a(a)
if(!J.A(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bz:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.an(a.y.a4(a.d).t(0,2).U(0,s.gae()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.an(r.a4(q).t(0,2).U(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sad(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sad(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.an(a.z.a4(q).t(0,2).U(0,s.gae()))}l.ab()},
bB:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sP(-r*10*s)
p.ab()}},
ee:function(a){var s=this
if(t.x.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eg:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.A(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.an(r.a4(q).t(0,2).U(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sad(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sad(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.an(a.z.a4(q).t(0,2).U(0,s.gae()))
l.ab()},
fw:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fu:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a4(a.d)
s=s.a7(s)
r=l.Q
if(typeof r!=="number")return H.q(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.an(a.y.a4(a.d).t(0,2).U(0,s.gae()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.M()
q=l.y
if(typeof q!=="number")return H.q(q)
r.sP(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.M()
r=l.x
if(typeof r!=="number")return H.q(r)
q.sP(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.an(r.a4(q).t(0,2).U(0,s.gae()))
r=l.c
o=p.a
if(typeof o!=="number")return o.M()
n=l.y
if(typeof n!=="number")return H.q(n)
m=l.cy
if(typeof m!=="number")return H.q(m)
r.sad(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.M()
o=l.x
if(typeof o!=="number")return H.q(o)
r=l.db
if(typeof r!=="number")return H.q(r)
m.sad(0,-n*o+r)
l.b.sP(0)
l.c.sP(0)
l.dx=l.an(a.z.a4(q).t(0,2).U(0,s.gae()))}l.ab()},
fs:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.a7(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.M()
q=p.y
if(typeof q!=="number")return H.q(q)
s.sP(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.M()
s=p.x
if(typeof s!=="number")return H.q(s)
q.sP(-r*10*s)
p.ab()}},
aQ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.af()
if(o<n){p.dy=n
s=b.y
p.c.a3(0,s)
p.b.a3(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.as(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.t(0,V.as(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iS:1}
U.ct.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
J:function(a){var s=this.r
if(s!=null)s.v(a)},
aY:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.x():r
r=p.geh()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.x():q).l(0,r)
return!0},
ei:function(a){var s,r,q,p,o=this
if(!J.A(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.t()
p=s+r*q
if(s!==p){o.d=p
s=new D.o("zoom",s,p)
s.b=!0
o.J(s)}},
aQ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.lO(s,s,s)}return r.f},
$iS:1}
M.bT.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
O:function(a){var s=this.r
if(s!=null)s.v(a)},
ar:function(){return this.O(null)},
f6:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gR(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.al()
s.b=!0
this.O(s)},
f8:function(a,b){var s,r
for(s=b.gN(b),r=this.gR();s.u();)s.gD(s).gm().K(0,r)
s=new D.am()
s.b=!0
this.O(s)},
V:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.V(s,s.length);s.u();){r=s.d
if(r!=null)r.V(a)}q.f=!1},
$iZ:1}
M.bV.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
O:function(a){var s=this.r
if(s!=null)s.v(a)},
ar:function(){return this.O(null)},
saL:function(a){var s,r,q=this
if(a==null)a=new X.hc()
s=q.b
if(s!==a){if(s!=null)s.gm().K(0,q.gR())
r=q.b
q.b=a
a.gm().l(0,q.gR())
s=new D.o("camera",r,q.b)
s.b=!0
q.O(s)}},
sap:function(a,b){var s,r,q=this
if(b==null)b=X.jo(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().K(0,q.gR())
r=q.c
q.c=b
b.gm().l(0,q.gR())
s=new D.o("target",r,q.c)
s.b=!0
q.O(s)}},
saC:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().K(0,r.gR())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gR())
q=new D.o("technique",s,r.d)
q.b=!0
r.O(q)}},
V:function(a){var s,r=this
a.ca(r.d)
r.c.E(a)
r.b.E(a)
s=r.d
if(s!=null)s.a3(0,a)
r.e.a3(0,a)
r.e.V(a)
r.b.a2(a)
r.c.a2(a)
a.c9()},
$iZ:1}
M.c_.prototype={
O:function(a){var s=this.y
if(s!=null)s.v(a)},
ar:function(){return this.O(null)},
ev:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gR(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aX()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.al()
s.b=!0
this.O(s)},
ex:function(a,b){var s,r
for(s=b.gN(b),r=this.gR();s.u();)s.gD(s).gm().K(0,r)
s=new D.am()
s.b=!0
this.O(s)},
saL:function(a){var s,r,q=this
if(a==null)a=X.kd(null)
s=q.b
if(s!==a){if(s!=null)s.gm().K(0,q.gR())
r=q.b
q.b=a
a.gm().l(0,q.gR())
s=new D.o("camera",r,q.b)
s.b=!0
q.O(s)}},
sap:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().K(0,r.gR())
s=r.c
r.c=b
b.gm().l(0,r.gR())
q=new D.o("target",s,r.c)
q.b=!0
r.O(q)}},
saC:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().K(0,r.gR())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gR())
q=new D.o("technique",s,r.d)
q.b=!0
r.O(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
V:function(a){var s,r=this
a.ca(r.d)
r.c.E(a)
r.b.E(a)
s=r.d
if(s!=null)s.a3(0,a)
for(s=r.e.a,s=new J.V(s,s.length);s.u();)s.d.a3(0,a)
for(s=r.e.a,s=new J.V(s,s.length);s.u();)s.d.V(a)
r.b.toString
a.cy.aA()
a.db.aA()
r.c.a2(a)
a.c9()},
$iZ:1}
M.c3.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
O:function(a){var s=this.b
if(s!=null)s.v(a)},
ar:function(){return this.O(null)},
V:function(a){var s=this.e
if(s!=null)s.V(a)
s=this.r
if(s!=null)s.V(a)},
$iZ:1}
M.Z.prototype={}
A.fx.prototype={}
A.fy.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
b0:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.R.prototype={
gam:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.R))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.fR.prototype={}
A.h9.prototype={
cL:function(a,b){if(b!=null&&b.d)a.dG(b)}}
A.ha.prototype={
aG:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.e(c,0)
s=c[0]
$.u().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.e(d,0)
q=d[0]
d=C.a.cl(d,1)
c=C.a.cl(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.d(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.e(c,p)
a.a+="  offset = blurScale * "+H.d(c[p])+";\n"
if(p>=d.length)return H.e(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.d(d[p])+";\n"
if(p>=d.length)return H.e(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.d(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.hm.prototype={
dO:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.aI("")
r=c5.fr
if(r){s.a=c4
q=c4}else q=""
p=c5.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c5.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c5.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.nc(c5,s)
A.ne(c5,s)
A.nd(c5,s)
A.ng(c5,s)
A.nh(c5,s)
A.nf(c5,s)
A.ni(c5,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c5.ry
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
s.a=q}if(c5.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c5.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c5.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c5.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c0.b1(0,q.charCodeAt(0)==0?q:q,A.nb(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.B(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.B(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.B(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.B(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.B(0,"viewMat"))
if(c5.x1)c0.k1=t.N.a(c0.y.B(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.B(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.B(0,"colorMat"))
c0.r1=[]
q=c5.bh
if(q>0){c0.k4=c0.y.B(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.l(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.B(0,"emissionClr"))
if(r.c)c0.ry=t.Q.a(c0.y.B(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.B(0,"ambientClr"))
if(r.c)c0.y1=t.Q.a(c0.y.B(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.B(0,"diffuseClr"))
if(r.c)c0.ax=t.Q.a(c0.y.B(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.bi=t.r.a(c0.y.B(0,"invDiffuseClr"))
if(r.c)c0.d1=t.Q.a(c0.y.B(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c0.d4=t.n.a(c0.y.B(0,"shininess"))
if(q)c0.d2=t.r.a(c0.y.B(0,"specularClr"))
if(r.c)c0.d3=t.Q.a(c0.y.B(0,"specularTxt"))}if(c5.f.c)c0.d5=t.Q.a(c0.y.B(0,"bumpTxt"))
if(c5.db){r=t.Q
c0.d6=r.a(c0.y.B(0,"envSampler"))
q=c5.r
if(q.a)c0.d7=t.r.a(c0.y.B(0,"reflectClr"))
if(q.c)c0.d8=r.a(c0.y.B(0,"reflectTxt"))
q=c5.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c0.d9=t.n.a(c0.y.B(0,"refraction"))
if(p)c0.da=t.r.a(c0.y.B(0,"refractClr"))
if(q.c)c0.dc=r.a(c0.y.B(0,"refractTxt"))}}r=c5.y
if(r.a)c0.dd=t.n.a(c0.y.B(0,"alpha"))
if(r.c)c0.de=t.Q.a(c0.y.B(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bT=new H.t(t.J)
c0.bU=new H.t(t.u)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="barLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.l(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.l(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.l(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.al()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.l(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.l(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.l(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.eb(k,d,c,a3,a2,a1))}c0.bU.k(0,h,f)
n=c0.bT
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.l(c2+e+c3))
n.k(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.bV=new H.t(t.J)
c0.bW=new H.t(t.L)
for(p=t.r,o=t.c,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.al()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.l(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.l(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.l(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.l(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.l(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.l(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.ec(a7,a6,a5,k,d,a8))}c0.bW.k(0,h,f)
n=c0.bV
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.l(c2+e+c3))
n.k(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.bX=new H.t(t.J)
c0.bY=new H.t(t.U)
for(p=t.r,o=t.N,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.d(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.l(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.l(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.l(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.al()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.l(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.l(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ef(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.bY.k(0,h,f)
a4=c0.bX
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.l(c2+b0+c3))
a4.k(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.bZ=new H.t(t.J)
c0.c_=new H.t(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,j=0;j<r.length;r.length===q||(0,H.m)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.d(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.l(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.l(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.l(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.l(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.al()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.l(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.l(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.l(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.l(c2+a9+c3))
o.a(b5)
b6=b5
b7=b4
a6=a0
a7=a}else{b6=c1
b7=b6
a6=b7
a7=a6}a4=(h&2)!==0
if(a4){a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.l(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.l(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.l(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.l(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.l(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.ei(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.c_.k(0,h,f)
e=c0.bZ
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.l(c2+a9+c3))
e.k(0,h,k)}}}},
ag:function(a,b){if(b!=null&&b.d>=6)a.ci(b)}}
A.fD.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fS.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hK.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.i1.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hp.prototype={
i:function(a){return this.ax}}
A.eb.prototype={}
A.ec.prototype={}
A.ef.prototype={}
A.ei.prototype={}
A.dP.prototype={
aU:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
b1:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cC(b,35633)
p.f=p.cC(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.l("Failed to link shader: "+H.d(q)))}p.fm()
p.fo()},
E:function(a){a.a.useProgram(this.r)
this.x.fN()},
cC:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.l("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
fm:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fx(n,r.name,q))}p.x=new A.fy(o)},
fo:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.q(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.fK(r.type,r.size,r.name,q))}p.y=new A.iu(o)},
aH:function(a,b,c){var s=this.a
if(a===1)return new A.cq(s,b,c)
else return A.jz(s,this.r,b,a,c)},
e7:function(a,b,c){var s=this.a
if(a===1)return new A.eg(s,b,c)
else return A.jz(s,this.r,b,a,c)},
e8:function(a,b,c){var s=this.a
if(a===1)return new A.eh(s,b,c)
else return A.jz(s,this.r,b,a,c)},
be:function(a,b){return new P.eF(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fK:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aH(b,c,d)
case 5121:return s.aH(b,c,d)
case 5122:return s.aH(b,c,d)
case 5123:return s.aH(b,c,d)
case 5124:return s.aH(b,c,d)
case 5125:return s.aH(b,c,d)
case 5126:return new A.e7(s.a,c,d)
case 35664:return new A.e8(s.a,c,d)
case 35665:return new A.e9(s.a,c,d)
case 35666:return new A.ea(s.a,c,d)
case 35667:return new A.ir(s.a,c,d)
case 35668:return new A.is(s.a,c,d)
case 35669:return new A.it(s.a,c,d)
case 35674:return new A.iv(s.a,c,d)
case 35675:return new A.ed(s.a,c,d)
case 35676:return new A.ee(s.a,c,d)
case 35678:return s.e7(b,c,d)
case 35680:return s.e8(b,c,d)
case 35670:throw H.c(s.be("BOOL",c))
case 35671:throw H.c(s.be("BOOL_VEC2",c))
case 35672:throw H.c(s.be("BOOL_VEC3",c))
case 35673:throw H.c(s.be("BOOL_VEC4",c))
default:throw H.c(P.l("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.bn.prototype={
i:function(a){return this.b}}
A.i0.prototype={}
A.ic.prototype={
dS:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="Required uniform value, ",h=", was not defined or used in shader."
j.b1(0,u.Y.charCodeAt(0)==0?u.Y:u.Y,A.m9(a,b))
j.z=j.x.h(0,"posAttr")
s=t.l
j.Q=s.a(j.y.B(0,"txtCount"))
j.ch=t.y.a(j.y.B(0,"backClr"))
j.cx=[]
j.cy=[]
j.db=[]
j.dx=[]
j.dy=[]
j.fr=[]
j.fx=[]
for(r=t.t,q=t.q,p=t.c,o=0;o<a;++o){n=j.cx
m=j.y
l="txt"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(p.a(k))
n=j.cy
m=j.y
l="clrMat"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(q.a(k))
n=j.db
m=j.y
l="srcLoc"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.dx
m=j.y
l="srcSize"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.dy
m=j.y
l="destLoc"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.fr
m=j.y
l="destSize"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(r.a(k))
n=j.fx
m=j.y
l="flip"+o
k=m.h(0,l)
if(k==null)H.n(P.l(i+l+h))
n.push(s.a(k))}}}
A.ip.prototype={}
A.iu.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
B:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.l("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.G()},
G:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cq.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.is.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.it.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.e7.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.e8.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.e9.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.ea.prototype={
dH:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
dF:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.ed.prototype={
a0:function(a){var s=new Float32Array(H.bK(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.ee.prototype={
a0:function(a){var s=new Float32Array(H.bK(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.eg.prototype={
dG:function(a){var s=a==null||!a.d,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.eh.prototype={
ci:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.j0.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c3(q.b,b).c3(q.d.c3(q.c,b),c)
q=new V.O(p.a,p.b,p.c)
if(!J.A(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a8()}a.sb6(p.H())
q=1-b
s=1-c
s=new V.aG(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.A(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a8()}}}
F.h4.prototype={
e1:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eo()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dh())return p
return q.H()},
e3:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aa(0,n)
q=new V.y(o.a,o.b,o.c).H()
o=r.aa(0,n)
return q.b_(new V.y(o.a,o.b,o.c).H()).H()},
bO:function(){var s,r=this
if(r.d!=null)return!0
s=r.e1()
if(s==null){s=r.e3()
if(s==null)return!1}r.d=s
r.a.a.a8()
return!0},
e0:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eo()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.dh())return p
return q.H()},
e2:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.u().toString
if(Math.abs(p-0)<1e-9){j=b.aa(0,e)
o=new V.y(j.a,j.b,j.c).H()
if(q.a-r.a<0)o=o.M(0)}else{n=(j-s.b)/p
j=b.aa(0,e)
j=new V.O(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aa(0,h)
o=new V.y(j.a,j.b,j.c).H()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.M(0)}j=l.d
if(j!=null){m=j.H()
o=m.b_(o).H().b_(m).H()}return o},
bM:function(){var s,r=this
if(r.e!=null)return!0
s=r.e0()
if(s==null){s=r.e2()
if(s==null)return!1}r.e=s
r.a.a.a8()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.aj(J.a0(q.e),0)+", "+C.b.aj(J.a0(r.b.e),0)+", "+C.b.aj(J.a0(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
G:function(){return this.A("")}}
F.hh.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.aj(J.a0(s.e),0)+", "+C.b.aj(J.a0(this.b.e),0)},
G:function(){return this.A("")}}
F.hJ.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.aj(J.a0(s.e),0)},
G:function(){return this.A("")}}
F.hU.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
fT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.a_()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){p=e[q]
f.a.l(0,p.fJ())}f.a.a_()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.a_()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.l(0,l)
m=new F.hJ()
if(l.a==null)H.n(P.l("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.v(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.a_()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.l(0,j)
n.a.l(0,i)
F.lI(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.m)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.a_()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.w()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.a_()
m=m.e
if(typeof m!=="number")return m.w()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.l(0,j)
m.a.l(0,i)
m.a.l(0,g)
F.c0(j,i,g)}e=f.e
if(e!=null)e.aB(0)},
aw:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aw()||!1
if(!r.a.aw())s=!1
q=r.e
if(q!=null)q.aB(0)
return s},
aZ:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.Q().a)!==0?1:0
if((s&$.aT().a)!==0)++r
if((s&$.aS().a)!==0)++r
if((s&$.aA().a)!==0)++r
if((s&$.aU().a)!==0)++r
if((s&$.cX().a)!==0)++r
if((s&$.cY().a)!==0)++r
if((s&$.bR().a)!==0)++r
if((s&$.aR().a)!==0)++r
q=a5.gck(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.fD(l)
j=k.gck(k)
n[l]=new Z.fF(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fS(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.bK(o)),35044)
s.bindBuffer(a2,null)
b=new Z.ai(new Z.eq(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.a_()
a.push(h.e)}a0=Z.jB(s,34963,a)
b.b.push(new Z.c4(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.a_()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.a_()
a.push(h.e)}a0=Z.jB(s,34963,a)
b.b.push(new Z.c4(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.a_()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.a_()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.a_()
a.push(h.e)}a0=Z.jB(s,34963,a)
b.b.push(new Z.c4(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.A(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.A(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.A(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.A(r))}return C.a.q(q,"\n")},
a8:function(){var s=this.e
if(s!=null)s.v(null)}}
F.hV.prototype={
fB:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.c0(n,q,p))}return o},
fC:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.l(0,k)
s.a.l(0,j)
s.a.l(0,h)
f.push(F.c0(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.c0(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.c0(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.c0(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
aw:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bO())q=!1
return q},
bN:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].bM())q=!1
return q},
i:function(a){return this.G()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(a))
return C.a.q(p,"\n")},
G:function(){return this.A("")}}
F.hW.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].A(a+(""+s+". ")))}return C.a.q(q,"\n")},
G:function(){return this.A("")}}
F.hX.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.G()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(a))
return C.a.q(p,"\n")},
G:function(){return this.A("")}}
F.iC.prototype={
bQ:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iD(s.cx,p,m,r,q,o,n,a,l)},
fJ:function(){return this.bQ(null)},
sb6:function(a){var s
if(!J.A(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a8()}},
fS:function(a){var s,r=this
if(a.n(0,$.Q())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aT())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aS())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aA())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.aU())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cX())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cY())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bR()))return[r.ch]
else if(a.n(0,$.aR())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bO:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eo()
r.d.F(0,new F.iL(q))
r.r=q.a.H()
q=r.a
if(q!=null){q.a8()
q=r.a.e
if(q!=null)q.aB(0)}return!0},
bM:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.eo()
r.d.F(0,new F.iK(q))
r.x=q.a.H()
q=r.a
if(q!=null){q.a8()
q=r.a.e
if(q!=null)q.aB(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
A:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.aj(J.a0(q.e),0))
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
o.push(V.z(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.q(o,", ")
return a+"{"+r+"}"},
G:function(){return this.A("")}}
F.iL.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.iK.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.iE.prototype={
a_:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.l("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a8()
return!0},
bg:function(a,b,c,d,e,f){var s=F.iD(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
aw:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bO()
return!0},
bN:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].bM()
return!0},
fF:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.z==null){o=p.r.H()
if(!J.A(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}return!0},
i:function(a){return this.G()},
A:function(a){var s,r,q,p
this.a_()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p)s.push(r[p].A(a))
return C.a.q(s,"\n")},
G:function(){return this.A("")}}
F.iF.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.iG(s,b))
C.a.F(s.d,new F.iH(s,b))},
i:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(""))
return C.a.q(p,"\n")}}
F.iG.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.iH.prototype={
$1:function(a){var s=this.a
if(!J.A(a.a,s)&&!J.A(a.b,s))this.b.$1(a)}}
F.iI.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(""))
return C.a.q(p,"\n")}}
F.iJ.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.G()},
G:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].A(""))
return C.a.q(p,"\n")}}
O.fQ.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
p:function(a){var s=this.r
if(s!=null)s.v(a)},
a3:function(a,b){},
b5:function(a,b){var s,r,q,p,o=this,n="GreyViewDepth",m=o.a
if(m==null){s=a.fr.h(0,n)
if(s==null){m=a.a
s=new A.fR(m,n)
s.aU(m,n)
s.b1(0,u.d.charCodeAt(0)==0?u.d:u.d,u.H.charCodeAt(0)==0?u.H:u.H)
s.z=s.x.h(0,"posAttr")
m=t.n
s.Q=m.a(s.y.h(0,"width"))
s.ch=m.a(s.y.h(0,"stop"))
m=t.q
s.cx=m.a(s.y.h(0,"viewObjMat"))
s.cy=m.a(s.y.h(0,"projMat"))
a.aX(s)}o.a=s
m=s}r=b.e
if((!(r instanceof Z.ai)?b.e=null:r)==null){m=b.d.aZ(new Z.bd(a.a),$.Q())
r=m.ac($.Q())
q=o.a
r.e=q.z.c
b.e=m
m=q}m.E(a)
r=o.b
q=o.c
p=m.Q
p.a.uniform1f(p.d,r-q)
q=o.c
r=m.ch
r.a.uniform1f(r.d,q)
q=a.cy
q=q.gT(q)
r=m.cy
r.toString
r.a0(q.X(0,!0))
q=a.gdB()
m=m.cx
m.toString
m.a0(q.X(0,!0))
m=b.e
m.E(a)
m.V(a)
m.a2(a)
m=o.a
m.toString
a.a.useProgram(null)
m.x.b0()}}
O.dg.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.x():s},
p:function(a){var s=this.x
if(s!=null)s.v(a)},
a5:function(){return this.p(null)},
sbL:function(a){var s=this.r
$.u().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
s=new D.o("blurValue",s,a)
s.b=!0
this.p(s)}},
scY:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gm().K(0,r.gY())
s=r.e
r.e=a
if(a!=null)a.gm().l(0,r.gY())
q=new D.o("colorTexture",s,r.e)
q.b=!0
r.p(q)}},
sbK:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gm().K(0,q.gY())
s=q.f
q.f=a
if(a!=null)a.gm().l(0,q.gY())
p=new D.o("blurTexture",s,q.f)
r=p.b=!0
q.p(p)
p=q.f==null
if(!(p&&s!=null))p=!p&&s==null
else p=r
if(p){q.a=null
q.p(null)}}},
scc:function(a){var s,r=this,q=$.k9
if(q==null){q=new V.ce(1,0,0,0,1,0,0,0,1)
$.k9=q
a=q}else a=q
if(!J.A(r.b,a)){s=r.b
r.b=a
q=new D.o("textureMatrix",s,a)
q.b=!0
r.p(q)}},
sbJ:function(a){var s,r,q=this
if(a==null){s=$.kz
if(s==null){s=new V.bG(1,0.00390625,0.0000152587890625,0)
$.kz=s
a=s}else a=s}if(!J.A(q.c,a)){r=q.c
q.c=a
s=new D.o("blurAdjust",r,a)
s.b=!0
q.p(s)}},
a3:function(a,b){},
a6:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
b5:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a
if(e==null){s=f.f!=null
e="GaussianBlur_"+(s?"1":"0")
r=e.charCodeAt(0)==0?e:e
q=a.fr.h(0,r)
if(q==null){e=a.a
q=new A.h9(e,r)
q.aU(e,r)
p=q.z=new A.ha(s,r)
o=new P.aI("")
o.a="precision mediump float;\n"
o.a="precision mediump float;\n\n"
o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\n"
if(s){o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\n"
e=o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform sampler2D blurTxt;\nuniform vec4 blurAdj;\n"}else e=o.a="precision mediump float;\n\nuniform sampler2D colorTxt;\nuniform float blurValue;\n"
e+="uniform vec2 blurScale;\n"
o.a=e
e+="\n"
o.a=e
e+="varying vec2 txt2D;\n"
o.a=e
o.a=e+"\n"
p.aG(o,3,[0.75],[0.5])
p.aG(o,6,[0.42857,2.14286],[0.41667,0.08333])
p.aG(o,9,[0,1.8],[0.5122,0.2439])
p.aG(o,12,[0,1.38462,3.23077],[0.22703,0.31622,0.07027])
p.aG(o,15,[0.9375,2.8125],[0.36184,0.13816])
p.aG(o,18,[0.47368,2.36842,4.26316],[0.29916,0.16318,0.03766])
e=o.a+="void main()\n"
e=o.a=e+"{\n"
e=(s?o.a=e+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":e)+"   float blurOffset = abs(blurValue);\n"
o.a=e
e+="\n"
o.a=e
e+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
o.a=e
e+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
o.a=e
e+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
o.a=e
e+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
o.a=e
e+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
o.a=e
e+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
o.a=e
e+="   else                       gl_FragColor = blur18();\n"
o.a=e
e=o.a=e+"}\n"
q.b1(0,u.A.charCodeAt(0)==0?u.A:u.A,e.charCodeAt(0)==0?e:e)
q.Q=q.x.h(0,"posAttr")
q.ch=q.x.h(0,"txtAttr")
q.cx=t.q.a(q.y.h(0,"projViewObjMat"))
q.cy=t.N.a(q.y.h(0,"txt2DMat"))
e=t.c
q.dy=e.a(q.y.h(0,"colorTxt"))
q.dx=t.t.a(q.y.h(0,"blurScale"))
n=q.y
if(s){q.fr=e.a(n.h(0,"blurTxt"))
q.db=t.y.a(q.y.h(0,"blurAdj"))}else q.fx=t.n.a(n.h(0,"blurValue"))
a.aX(q)}e=f.a=q
b.e=null}p=e.z
e=b.e
if((!(e instanceof Z.ai)?b.e=null:e)==null){e=b.d
n=$.Q()
m=$.aA()
m=e.aZ(new Z.bd(a.a),new Z.ax(n.a|m.a))
m.ac($.Q()).e=f.a.Q.c
m.ac($.aA()).e=f.a.ch.c
b.e=m}l=[]
f.a6(l,f.e)
e=p.a
if(e)f.a6(l,f.f)
for(k=0;k<l.length;++k)l[k].E(a)
n=f.a
n.E(a)
m=f.e
n.cL(n.dy,m)
m=f.b
j=n.cy
j.toString
j.a0(m.X(0,!0))
m=f.d
j=m.a
i=a.c
if(typeof j!=="number")return j.U()
m=m.b
h=a.d
if(typeof m!=="number")return m.U()
g=n.dx
g.a.uniform2f(g.d,j/i,m/h)
h=a.gdu()
n=n.cx
n.toString
n.a0(h.X(0,!0))
n=f.a
if(e){e=f.f
n.cL(n.fr,e)
e=f.c
n.db.dH(e)}else{e=f.r
n=n.fx
n.a.uniform1f(n.d,e)}e=b.e
if(e instanceof Z.ai){e.E(a)
e.V(a)
e.a2(a)}else b.e=null
e=f.a
e.toString
n=a.a
n.useProgram(null)
e.x.b0()
for(k=0;k<l.length;++k){e=l[k]
if(e.c){e.c=!1
n.activeTexture(33984+e.a)
n.bindTexture(3553,null)}}}}
O.ds.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.x():s},
p:function(a){var s=this.fr
if(s!=null)s.v(a)},
a5:function(){return this.p(null)},
cH:function(a){this.a=null
this.p(a)},
fk:function(){return this.cH(null)},
eo:function(a,b){var s=new D.al()
s.b=!0
this.p(s)},
eq:function(a,b){var s=new D.am()
s.b=!0
this.p(s)},
cA:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.t(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gao()
n=d.h(0,p.gao())
d.k(0,o,n==null?1:n)}m=[]
d.F(0,new O.ht(f,m))
C.a.aS(m,new O.hu())
l=new H.t(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.F(0,new O.hv(f,k))
C.a.aS(k,new O.hw())
j=new H.t(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
o=p.gao()
n=j.h(0,p.gao())
j.k(0,o,n==null?1:n)}i=[]
j.F(0,new O.hx(f,i))
C.a.aS(i,new O.hy())
h=new H.t(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.m)(e),++q){p=e[q]
r=p.gao()
o=h.h(0,p.gao())
h.k(0,r,o==null?1:o)}g=[]
h.F(0,new O.hz(f,g))
C.a.aS(g,new O.hA())
e=C.c.a1(f.e.a.length+3,4)
f.dy.toString
return A.lN(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
a6:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
a3:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.V(s,s.length);s.u();){r=s.d
r.toString
q=$.iB
if(q==null)q=$.iB=new V.y(0,0,1)
r.a=q
p=$.iA
r.d=p==null?$.iA=new V.y(0,1,0):p
p=$.iz
r.e=p==null?$.iz=new V.y(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bn(q).H()
r.d=o.bn(r.d).H()
r.e=o.bn(r.e).H()}}}},
b5:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cA()
s=b4.fr.h(0,b3.ax)
if(s==null){s=A.lM(b3,b4.a)
b4.aX(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bi
b3=b5.e
if(!(b3 instanceof Z.ai))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.aw()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bN()
o.a.bN()
o=o.e
if(o!=null)o.aB(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.fF()
n=n.e
if(n!=null)n.aB(0)}l=b5.d.aZ(new Z.bd(b4.a),q)
l.ac($.Q()).e=b2.a.Q.c
if(b3)l.ac($.aT()).e=b2.a.cx.c
if(p)l.ac($.aS()).e=b2.a.ch.c
if(r.r2)l.ac($.aA()).e=b2.a.cy.c
if(o)l.ac($.aU()).e=b2.a.db.c
if(r.ry)l.ac($.aR()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.E(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gT(p)
b3=b3.dy
b3.toString
b3.a0(p.X(0,!0))}if(r.fx){b3=b2.a
p=b4.gdB()
b3=b3.fr
b3.toString
b3.a0(p.X(0,!0))}b3=b2.a
p=b4.gdu()
b3=b3.fy
b3.toString
b3.a0(p.X(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gT(p)
b3=b3.fx
b3.toString
b3.a0(p.X(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a0(C.h.X(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a0(C.h.X(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a0(C.h.X(p,!0))}if(r.bh>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.bK(p.X(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.f.e)
b3=b2.a
p=b2.f.e
b3.ag(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.r.e)
b3=b2.a
p=b2.r.e
b3.ag(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.x.e)
b3=b2.a
p=b2.x.e
b3.ag(b3.ax,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bi
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.y.e)
b3=b2.a
p=b2.y.e
b3.ag(b3.d1,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.d4
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.d2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.z.e)
b3=b2.a
p=b2.z.e
b3.ag(b3.d3,p)}b3=r.z
if(b3.length>0){g=new H.t(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gao()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
b=J.cZ(b2.a.bU.h(0,d),c)
n=e.ghm()
m=$.at
n=n.b8(m==null?$.at=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghr()
m=$.at
n=n.b8(m==null?$.at=new V.O(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaN(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gd0()){n=e.gcQ()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gcR()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gcS()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bT.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gT(p)
a0=new H.t(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
b=J.cZ(b2.a.bW.h(0,0),c)
n=a.bn(e.a).H()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.bV.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gT(p)
a3=new H.t(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gao()
c=a3.h(0,d)
if(c==null)c=0
a3.k(0,d,c+1)
b=J.cZ(b2.a.bY.h(0,d),c)
a4=a.t(0,e.gT(e))
n=e.gT(e)
m=$.at
n=n.b8(m==null?$.at=new V.O(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.at
n=a4.b8(n==null?$.at=new V.O(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaN(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaD()
n=a4.c1(0)
m=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=b.d
b0.toString
h=new Float32Array(H.bK(new V.ce(m,a1,a2,a5,a6,a7,a8,a9,n).X(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaD()
n=e.gaD()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gaD()
m=n.gc4(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaR()
n=e.gdI()
m=b.x
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gaR()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gaR()
m=n.gc4(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gd0()){n=e.gcQ()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gcR()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gcS()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.bX.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gT(p)
b1=new H.t(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.m)(p),++f){e=p[f]
d=e.gao()
c=b1.h(0,d)
if(c==null)c=0
b1.k(0,d,c+1)
b=J.cZ(b2.a.c_.h(0,d),c)
n=e.gh7(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghp(e).H()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b8(e.gh7(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaN(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaD()
n=e.gcd()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gcb(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.ghB()
m=b.x
m.a.uniform1f(m.d,n)
n=e.ghC()
m=b.y
m.a.uniform1f(m.d,n)
e.gaD()
n=e.gaD()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gaD()
m=n.gc4(n)
if(m){m=b.dx
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaR()
n=e.gdI()
m=b.z
m.a.uniform4f(m.d,n.a,n.b,n.c,n.d)
n=e.gaR()
if(!C.a.L(k,n)){n.a=k.length
k.push(n)}n=e.gaR()
m=n.gc4(n)
if(m){m=b.dy
a1=n.d
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.ghq()){n=e.gho()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.ghn()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gd0()){n=e.gcQ()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gcR()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gcS()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.m)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.bZ.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.c){b2.a6(k,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.ag(b3.d5,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gT(p).c1(0)}b3=b3.id
b3.toString
b3.a0(p.X(0,!0))}if(r.db){b2.a6(k,b2.ch)
b3=b2.a
p=b2.ch
b3.ag(b3.d6,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.d7
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.ag(b3.d8,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.d9
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.da
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a6(k,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.ag(b3.dc,p)}}b3=r.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.dd
p.a.uniform1f(p.d,n)}if(b3.c){b2.a6(k,b2.db.e)
p=b2.a
n=b2.db.e
p.ag(p.de,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].E(b4)
p=b5.e
p.E(b4)
p.V(b4)
p.a2(b4)
if(o)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.b0()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cA().ax}}
O.ht.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.fD(a,C.c.a1(b+3,4)*4))}}
O.hu.prototype={
$2:function(a,b){return J.d_(a.a,b.a)}}
O.hv.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.fS(a,C.c.a1(b+3,4)*4))}}
O.hw.prototype={
$2:function(a,b){return J.d_(a.a,b.a)}}
O.hx.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.hK(a,C.c.a1(b+3,4)*4))}}
O.hy.prototype={
$2:function(a,b){return J.d_(a.a,b.a)}}
O.hz.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.i1(a,C.c.a1(b+3,4)*4))}}
O.hA.prototype={
$2:function(a,b){return J.d_(a.a,b.a)}}
O.hn.prototype={
au:function(){var s,r=this
r.co()
s=r.f
$.u().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.o(r.b,s,1)
s.b=!0
r.a.p(s)}}}
O.cd.prototype={
p:function(a){return this.a.p(a)},
a5:function(){return this.p(null)},
au:function(){},
bF:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.au()
s=q.a
s.a=null
s.p(null)}},
sb6:function(a){var s,r=this,q=r.c
if(!q.c)r.bF(new A.R(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().K(0,r.gY())
s=r.e
r.e=a
a.gm().l(0,r.gY())
q=new D.o(r.b+".textureCube",s,r.e)
q.b=!0
r.a.p(q)}}}
O.ho.prototype={}
O.aq.prototype={
cJ:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.o(q.b+".color",s,a)
r.b=!0
q.a.p(r)}},
au:function(){this.co()
this.cJ(new V.K(1,1,1))},
saN:function(a,b){this.bF(new A.R(!0,!1,this.c.c))
this.cJ(b)}}
O.hq.prototype={}
O.hr.prototype={
au:function(){var s,r=this
r.cp()
s=r.ch
$.u().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.o(r.b+".refraction",s,1)
s.b=!0
r.a.p(s)}}}
O.hs.prototype={
cK:function(a){var s=this,r=s.ch
$.u().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.o(s.b+".shininess",r,a)
r.b=!0
s.a.p(r)}},
au:function(){this.cp()
this.cK(100)}}
O.dQ.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
p:function(a){var s=this.e
if(s!=null)s.v(a)},
a5:function(){return this.p(null)},
a3:function(a,b){},
b5:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.i0(r,l)
s.aU(r,l)
s.b1(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.aX(s)}m.a=s}if(b.e==null){r=b.d.aZ(new Z.bd(a.a),$.Q())
r.ac($.Q()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.E(a)}r=a.d
q=a.c
p=m.a
p.E(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.ci(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gT(q).c1(0)
p=p.db
p.toString
p.a0(q.X(0,!0))
r=b.e
if(r instanceof Z.ai){r.E(a)
r.V(a)
r.a2(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.b0()
r=m.c
if(r!=null)r.a2(a)}}
O.i7.prototype={}
O.e1.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
p:function(a){var s=this.e
if(s!=null)s.v(a)},
a5:function(){return this.p(null)},
eF:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gY(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.aX()
o.d=0
p.f=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a5()},
eH:function(a,b){var s,r
for(s=b.gN(b),r=this.gY();s.u();)s.gD(s).gm().K(0,r)
this.a5()},
scU:function(a){var s=this.f
if(s!==a){this.f=a
s=new D.o("blend",s,a)
s.b=!0
this.p(s)}},
a3:function(a,b){},
ec:function(a){a=C.c.a1(a+3,4)*4
if(a<=0)return 4
return a},
b5:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.ec(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}s=h.b
if(s==null){s=h.f
r="TextureLayout_"+g+"_"+C.c.i(s.a)
q=a.fr.h(0,r)
if(q==null){q=A.m8(g,s,a.a)
a.aX(q)}h.b=q
s=q}if(b.e==null){s=b.d.aZ(new Z.bd(a.a),$.Q())
r=s.ac($.Q())
p=h.b
r.e=p.z.c
b.e=s
s=p}s.E(a)
o=[]
for(n=0,m=0;s=h.c.a,m<s.length;++m){l=s[m]
if(l!=null&&l.a!=null){s=l.a
if(s!=null)if(!C.a.L(o,s)){s.a=o.length
o.push(s)}s=h.b
r=l.a
s=s.cx
if(n>=s.length)return H.e(s,n)
s=s[n]
p=r==null||!r.d
k=s.a
s=s.d
if(p)k.uniform1i(s,0)
else k.uniform1i(s,r.a)
s=h.b
r=l.b
s=s.cy
if(n>=s.length)return H.e(s,n)
s=s[n]
if(r==null){r=$.hB
if(r==null){r=new V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hB=r}}j=new Float32Array(H.bK(r.X(0,!0)))
s.a.uniformMatrix4fv(s.d,!1,j)
s=h.b
i=l.c
s.toString
if(i==null){r=$.cm
if(r==null){r=V.cl(0,0,1,1)
$.cm=r
i=r}else i=r}r=s.db
if(n>=r.length)return H.e(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.dx
if(n>=s.length)return H.e(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
i=l.d
s.toString
if(i==null){r=$.cm
if(r==null){r=V.cl(0,0,1,1)
$.cm=r
i=r}else i=r}r=s.dy
if(n>=r.length)return H.e(r,n)
r=r[n]
r.a.uniform2f(r.d,i.a,i.b)
s=s.fr
if(n>=s.length)return H.e(s,n)
s=s[n]
s.a.uniform2f(s.d,i.c,i.d)
s=h.b
r=l.e
s=s.fx
if(n>=s.length)return H.e(s,n)
s=s[n]
r=r?1:0
s.a.uniform1i(s.d,r);++n}}s=h.b.Q
s.a.uniform1i(s.d,n)
s=h.b
r=h.a
s.ch.dF(r)
for(m=0;m<o.length;++m)o[m].E(a)
s=b.e
if(s instanceof Z.ai){s.E(a)
s.V(a)
s.a2(a)}else b.e=null
s=h.b
s.toString
r=a.a
r.useProgram(null)
s.x.b0()
for(m=0;m<o.length;++m){s=o[m]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,null)}}}}
O.bC.prototype={
p:function(a){var s=this.f
if(s!=null)s.v(a)},
a5:function(){return this.p(null)}}
T.i8.prototype={}
T.i9.prototype={}
T.ia.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
E:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.ib.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
E:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
a2:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.id.prototype={
dj:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.ib()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aI(s,i,p,34069,!1,!1)
r.aI(s,i,m,34070,!1,!1)
r.aI(s,i,o,34071,!1,!1)
r.aI(s,i,l,34072,!1,!1)
r.aI(s,i,n,34073,!1,!1)
r.aI(s,i,k,34074,!1,!1)
return s},
di:function(a){return this.dj(a,".png")},
aI:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.P(s,"load",new T.ie(this,s,!1,b,!1,d,a),!1)},
fl:function(a,b,c){var s,r,q,p
b=V.cW(b)
s=V.cW(a.width)
r=V.cW(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jk()
q.width=s
q.height=r
p=C.f.dC(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.nC(p.getImageData(0,0,q.width,q.height))}}}
T.ie.prototype={
$1:function(a){var s=this,r=s.a,q=r.fl(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.u.hg(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.bS()}++r.e}}
X.fC.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.x():s},
Z:function(a){var s=this.fr
if(s!=null)s.v(a)},
sak:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.o("width",s,b)
s.b=!0
r.Z(s)}},
sah:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.o("height",s,b)
s.b=!0
r.Z(s)}},
E:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=3553,c=36161,b=36160
if(f.f){s=a.a
r=s.drawingBufferWidth
q=f.r
if(typeof r!=="number")return r.t()
f.sak(0,C.d.W(r*q))
s=s.drawingBufferHeight
q=f.x
if(typeof s!=="number")return s.t()
f.sah(0,C.d.W(s*q))}if(f.y==null){s=a.a
r=f.ch
q=f.a
p=f.b
o=s.getParameter(3379)
n=V.cW(q)
m=V.cW(p)
o=V.cW(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(d,l)
s.texParameteri(d,10242,33071)
s.texParameteri(d,10243,33071)
s.texParameteri(d,10241,9729)
s.texParameteri(d,10240,9729)
C.u.dw(s,d,0,6408,n,m,0,6408,5121,e)
s.bindTexture(d,e)
k=T.kn(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.bS()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.bS()
r=f.ch
q=r.b
f.z=q
f.c=r.r
f.d=r.x
s.bindTexture(d,q)
r=s.createRenderbuffer()
f.Q=r
s.bindRenderbuffer(c,r)
s.renderbufferStorage(c,33189,f.c,f.d)
r=s.createFramebuffer()
f.y=r
s.bindFramebuffer(b,r)
s.framebufferTexture2D(b,36064,d,f.z,0)
s.framebufferRenderbuffer(b,36096,c,f.Q)
s.bindTexture(d,e)
s.bindRenderbuffer(c,e)
s.bindFramebuffer(b,e)}s=a.a
s.bindFramebuffer(b,f.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=f.dy
q=r.c
a.c=C.d.W(q*f.a)
p=r.d
a.d=C.d.W(p*f.b)
j=r.a
i=f.c
h=C.d.W(j*i)
r=r.b
j=f.d
s.viewport(h,C.d.W(r*j),C.d.W(q*i),C.d.W(p*j))
s.clearDepth(f.db)
if(f.cy){r=f.cx
s.clearColor(r.a,r.b,r.c,r.d)
g=16640}else g=256
if(g>0)s.clear(g)},
a2:function(a){a.a.bindFramebuffer(36160,null)}}
X.jj.prototype={}
X.h8.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.x():s},
E:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.d.W(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.d.W(p*r)
p=C.d.W(q.c*s)
a.c=p
q=C.d.W(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)},
a2:function(a){}}
X.hc.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
E:function(a){var s
a.cy.bl(V.b5())
s=V.b5()
a.db.bl(s)},
a2:function(a){a.cy.aA()
a.db.aA()}}
X.dF.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.x():s},
Z:function(a){var s=this.f
if(s!=null)s.v(a)},
dY:function(){return this.Z(null)},
E:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.as(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bl(i)
p=$.ke
if(p==null){p=V.kg()
o=V.jA()
n=$.kx
p=V.ka(p,o,n==null?$.kx=new V.y(0,0,-1):n)
$.ke=p
s=p}else s=p
p=q.b
if(p!=null){r=p.aQ(0,a,q)
if(r!=null)s=r.t(0,s)}a.db.bl(s)},
a2:function(a){a.cy.aA()
a.db.aA()}}
X.i5.prototype={}
V.jd.prototype={
$1:function(a){var s=C.d.dz(this.a.gfP(),2)
if(s!=="0.00")P.jS(s+" fps")}}
V.hY.prototype={
dR:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.P(o,"scroll",new V.i_(m),!1)},
cP:function(a){var s,r,q,p,o,n,m,l
this.fn()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fR(a)
q.toString
p=new H.H(p)
p=new P.bJ(q.dA(new H.bu(p,p.gj(p))).a())
for(;p.u();){q=p.gD(p)
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
if(H.l1(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mD(C.N,q,C.q,!1)
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
fn:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.ii()
s.a=new H.t(t.V)
s.b=new H.t(t.w)
s.c=P.k7(t.f)
s.d=s.I(0,p)
r=s.I(0,p).q(0,o)
q=K.T(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.I(0,o).q(0,o)
q=new K.aE()
q.a=[]
r.a.push(q)
r=K.T(new H.H("*"))
q.a.push(r)
r=s.I(0,o).q(0,"BoldEnd")
q=K.T(new H.H("*"))
r.a.push(q)
r.c=!0
r=s.I(0,p).q(0,n)
q=K.T(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.I(0,n).q(0,n)
q=new K.aE()
q.a=[]
r.a.push(q)
r=K.T(new H.H("_"))
q.a.push(r)
r=s.I(0,n).q(0,m)
q=K.T(new H.H("_"))
r.a.push(q)
r.c=!0
r=s.I(0,p).q(0,l)
q=K.T(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.I(0,l).q(0,l)
q=new K.aE()
q.a=[]
r.a.push(q)
r=K.T(new H.H("`"))
q.a.push(r)
r=s.I(0,l).q(0,"CodeEnd")
q=K.T(new H.H("`"))
r.a.push(q)
r.c=!0
r=s.I(0,p).q(0,k)
q=K.T(new H.H("["))
r.a.push(q)
r.c=!0
r=s.I(0,k).q(0,j)
q=K.T(new H.H("|"))
r.a.push(q)
q=s.I(0,k).q(0,i)
r=K.T(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.I(0,k).q(0,k)
r=new K.aE()
r.a=[]
q.a.push(r)
q=K.T(new H.H("|]"))
r.a.push(q)
q=s.I(0,j).q(0,i)
r=K.T(new H.H("]"))
q.a.push(r)
q.c=!0
q=s.I(0,j).q(0,j)
r=new K.aE()
r.a=[]
q.a.push(r)
q=K.T(new H.H("|]"))
r.a.push(q)
s.I(0,p).q(0,h).a.push(new K.fv())
q=s.I(0,h).q(0,h)
r=new K.aE()
r.a=[]
q.a.push(r)
q=K.T(new H.H("*_`["))
r.a.push(q)
q=s.I(0,"BoldEnd")
q.d=q.a.b7(o)
q=s.I(0,m)
q.d=q.a.b7(n)
q=s.I(0,"CodeEnd")
q.d=q.a.b7(l)
q=s.I(0,i)
q.d=q.a.b7("Link")
q=s.I(0,h)
q.d=q.a.b7(h)
this.b=s}}
V.i_.prototype={
$1:function(a){P.kq(C.k,new V.hZ(this.a))}}
V.hZ.prototype={
$0:function(){var s=C.d.W(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}};(function aliases(){var s=J.a.prototype
s.dL=s.i
s=J.b2.prototype
s.dM=s.i
s=K.dh.prototype
s.dK=s.aP
s.cn=s.i
s=O.cd.prototype
s.co=s.au
s=O.aq.prototype
s.cp=s.au})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mQ","lG",21)
r(P,"nv","mf",7)
r(P,"nw","mg",7)
r(P,"nx","mh",7)
q(P,"kU","nq",8)
r(W,"p_","fX",22)
var k
p(k=E.bq.prototype,"gds",0,0,null,["$1","$0"],["dt","h_"],0,0)
p(k,"gdq",0,0,null,["$1","$0"],["dr","fZ"],0,0)
p(k,"gdm",0,0,null,["$1","$0"],["dn","fW"],0,0)
o(k,"gfU","fV",3)
o(k,"gfX","fY",3)
p(k=E.e2.prototype,"gcr",0,0,null,["$1","$0"],["ct","cs"],0,0)
n(k,"ghc","dv",8)
m(k=X.en.prototype,"geI","eJ",4)
m(k,"ger","es",4)
m(k,"gey","ez",2)
m(k,"geM","eN",9)
m(k,"geK","eL",9)
m(k,"geQ","eR",2)
m(k,"geU","eV",2)
m(k,"geC","eD",2)
m(k,"geS","eT",2)
m(k,"geA","eB",2)
m(k,"geW","eX",19)
m(k,"geY","eZ",4)
m(k,"gfd","fe",5)
m(k,"gf9","fa",5)
m(k,"gfb","fc",5)
p(D.bp.prototype,"gdT",0,0,null,["$1","$0"],["aq","dU"],0,0)
p(k=D.c9.prototype,"gcF",0,0,null,["$1","$0"],["cG","eO"],0,0)
m(k,"gf_","f0",20)
o(k,"gel","em",10)
o(k,"gf3","f4",10)
l(V.U.prototype,"gj","b2",6)
l(V.y.prototype,"gj","b2",6)
l(V.bG.prototype,"gj","b2",6)
p(k=U.br.prototype,"gaJ",0,0,null,["$1","$0"],["J","ab"],0,0)
o(k,"gej","ek",11)
o(k,"gf1","f2",11)
p(k=U.cr.prototype,"gaJ",0,0,null,["$1","$0"],["J","ab"],0,0)
m(k,"gbw","bx",1)
m(k,"gby","bz",1)
m(k,"gbA","bB",1)
p(k=U.cs.prototype,"gaJ",0,0,null,["$1","$0"],["J","ab"],0,0)
m(k,"gbw","bx",1)
m(k,"gby","bz",1)
m(k,"gbA","bB",1)
m(k,"ged","ee",1)
m(k,"gef","eg",1)
m(k,"gfv","fw",1)
m(k,"gft","fu",1)
m(k,"gfq","fs",1)
m(U.ct.prototype,"geh","ei",1)
p(k=M.bT.prototype,"gR",0,0,null,["$1","$0"],["O","ar"],0,0)
o(k,"gf5","f6",12)
o(k,"gf7","f8",12)
p(M.bV.prototype,"gR",0,0,null,["$1","$0"],["O","ar"],0,0)
p(k=M.c_.prototype,"gR",0,0,null,["$1","$0"],["O","ar"],0,0)
o(k,"geu","ev",3)
o(k,"gew","ex",3)
p(M.c3.prototype,"gR",0,0,null,["$1","$0"],["O","ar"],0,0)
p(O.dg.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
p(k=O.ds.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
p(k,"gfj",0,0,null,["$1","$0"],["cH","fk"],0,0)
o(k,"gen","eo",13)
o(k,"gep","eq",13)
p(O.cd.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
p(O.dQ.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
p(k=O.e1.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
o(k,"geE","eF",14)
o(k,"geG","eH",14)
p(O.bC.prototype,"gY",0,0,null,["$1","$0"],["p","a5"],0,0)
p(X.dF.prototype,"gdX",0,0,null,["$1","$0"],["Z","dY"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.jr,J.a,J.V,P.cy,P.f,H.bu,P.dj,H.c1,H.el,H.im,P.E,H.hI,H.f4,H.bl,P.ap,H.hi,H.dp,H.he,H.ac,H.eI,P.cK,P.bI,P.bJ,P.es,P.dX,P.dY,P.co,P.j_,P.cE,P.iT,P.cx,P.B,P.d6,P.iZ,P.be,P.a7,P.M,P.aW,P.dE,P.cn,P.eF,P.h7,P.ao,P.dq,P.aa,P.J,P.aI,W.fM,W.jn,W.jC,W.C,W.c2,P.cM,P.eY,K.fv,K.dh,K.hT,L.dV,L.e3,L.e4,L.ii,O.bm,O.cf,E.fE,E.bq,E.bk,E.bz,E.eC,E.hN,E.e2,Z.eq,Z.bd,Z.ai,Z.c4,Z.ax,D.fG,D.aX,D.N,X.d5,X.dm,X.hg,X.hk,X.a9,X.hH,X.ij,X.en,D.bp,D.an,V.K,V.a1,V.h0,V.ce,V.ar,V.a3,V.O,V.aG,V.dL,V.U,V.y,V.bG,U.cr,U.cs,U.ct,M.bV,M.c_,M.c3,M.Z,A.fx,A.fy,A.R,A.ha,A.fD,A.fS,A.hK,A.i1,A.hp,A.eb,A.ec,A.ef,A.ei,A.bn,A.ip,A.iu,F.h4,F.hh,F.hJ,F.hU,F.hV,F.hW,F.hX,F.iC,F.iE,F.iF,F.iI,F.iJ,O.i7,O.cd,O.hq,O.bC,T.id,X.i5,X.jj,X.hc,X.dF,V.hY])
q(J.a,[J.hd,J.c8,J.b2,J.a8,J.b1,J.aC,H.ch,W.b,W.fu,W.d4,W.ak,W.D,W.ex,W.a6,W.fP,W.fT,W.ey,W.bY,W.eA,W.fU,W.h,W.eG,W.aZ,W.hb,W.eK,W.b0,W.hj,W.hC,W.eO,W.eP,W.b6,W.eQ,W.eS,W.b8,W.eW,W.eZ,W.b9,W.f_,W.ba,W.f5,W.aJ,W.f9,W.ih,W.bb,W.fb,W.ik,W.iw,W.fh,W.fj,W.fl,W.fn,W.fp,P.bt,P.eM,P.by,P.eU,P.hL,P.f6,P.bD,P.fd,P.fz,P.et,P.dM,P.f2])
q(J.b2,[J.dG,J.bE,J.af])
r(J.dk,J.a8)
q(J.b1,[J.c7,J.c6])
r(P.ca,P.cy)
q(P.ca,[H.bF,W.ev,W.eu,P.de])
r(H.H,H.bF)
q(P.f,[H.i,H.b4,H.cu,P.c5])
r(H.bZ,H.b4)
q(P.dj,[H.cc,H.er])
q(P.E,[H.dA,H.dl,H.ek,H.dN,H.eD,P.d2,P.dB,P.a5,P.em,P.ej,P.dW,P.d7,P.d9])
q(H.bl,[H.i6,H.hf,H.j7,H.j8,H.j9,P.iN,P.iM,P.iO,P.iP,P.iY,P.iX,P.j4,P.iV,P.iW,P.hl,P.fV,P.fW,W.hE,W.hG,W.hS,W.i4,W.iQ,P.j5,P.h5,P.h6,P.fB,E.hO,E.hP,E.hQ,E.ig,D.h2,D.h3,F.j0,F.iL,F.iK,F.iG,F.iH,O.ht,O.hu,O.hv,O.hw,O.hx,O.hy,O.hz,O.hA,T.ie,V.jd,V.i_,V.hZ])
q(H.i6,[H.i2,H.bS])
r(P.dr,P.ap)
r(H.t,P.dr)
r(H.aD,H.i)
r(H.bx,H.ch)
q(H.bx,[H.cA,H.cC])
r(H.cB,H.cA)
r(H.b7,H.cB)
r(H.cD,H.cC)
r(H.cg,H.cD)
q(H.cg,[H.du,H.dv,H.dw,H.dx,H.dy,H.ci,H.dz])
r(H.cL,H.eD)
r(P.cH,P.c5)
r(P.iU,P.j_)
r(P.cw,P.cE)
r(P.d8,P.dY)
r(P.fY,P.d6)
r(P.ix,P.fY)
r(P.iy,P.d8)
q(P.M,[P.X,P.p])
q(P.a5,[P.bB,P.di])
q(W.b,[W.w,W.dd,W.aH,W.cF,W.aK,W.ag,W.cI,W.ep,W.bH,P.d3,P.aB])
q(W.w,[W.I,W.ae])
q(W.I,[W.k,P.j])
q(W.k,[W.d0,W.d1,W.aV,W.df,W.bs,W.dO])
r(W.fL,W.ak)
r(W.bW,W.ex)
q(W.a6,[W.fN,W.fO])
r(W.ez,W.ey)
r(W.bX,W.ez)
r(W.eB,W.eA)
r(W.db,W.eB)
r(W.aY,W.d4)
r(W.eH,W.eG)
r(W.dc,W.eH)
r(W.eL,W.eK)
r(W.b_,W.eL)
r(W.aw,W.h)
q(W.aw,[W.b3,W.a2,W.bc])
r(W.hD,W.eO)
r(W.hF,W.eP)
r(W.eR,W.eQ)
r(W.dt,W.eR)
r(W.eT,W.eS)
r(W.cj,W.eT)
r(W.eX,W.eW)
r(W.dH,W.eX)
r(W.hR,W.eZ)
r(W.cG,W.cF)
r(W.dS,W.cG)
r(W.f0,W.f_)
r(W.dT,W.f0)
r(W.i3,W.f5)
r(W.fa,W.f9)
r(W.e_,W.fa)
r(W.cJ,W.cI)
r(W.e0,W.cJ)
r(W.fc,W.fb)
r(W.e5,W.fc)
r(W.aL,W.a2)
r(W.fi,W.fh)
r(W.ew,W.fi)
r(W.cv,W.bY)
r(W.fk,W.fj)
r(W.eJ,W.fk)
r(W.fm,W.fl)
r(W.cz,W.fm)
r(W.fo,W.fn)
r(W.f1,W.fo)
r(W.fq,W.fp)
r(W.f8,W.fq)
r(W.eE,P.dX)
r(P.ab,P.eY)
r(P.eN,P.eM)
r(P.dn,P.eN)
r(P.eV,P.eU)
r(P.dC,P.eV)
r(P.f7,P.f6)
r(P.dZ,P.f7)
r(P.fe,P.fd)
r(P.e6,P.fe)
r(P.fA,P.et)
r(P.dD,P.aB)
r(P.f3,P.f2)
r(P.dU,P.f3)
q(K.dh,[K.aE,L.il])
q(E.fE,[Z.fF,A.dP,T.i8])
q(D.N,[D.al,D.am,D.o,X.dI])
q(X.dI,[X.cb,X.bv,X.bw,X.cp])
q(O.bm,[D.c9,U.br,M.bT])
q(D.fG,[U.fJ,U.S])
r(U.bo,U.S)
q(A.dP,[A.fR,A.h9,A.hm,A.i0,A.ic])
q(A.ip,[A.cq,A.ir,A.is,A.it,A.iq,A.e7,A.e8,A.e9,A.ea,A.iv,A.ed,A.ee,A.eg,A.eh])
q(O.i7,[O.fQ,O.dg,O.ds,O.dQ,O.e1])
q(O.cd,[O.hn,O.ho,O.aq])
q(O.aq,[O.hr,O.hs])
q(T.i8,[T.i9,T.ib])
r(T.ia,T.i9)
q(X.i5,[X.fC,X.h8])
s(H.bF,H.el)
s(H.cA,P.B)
s(H.cB,H.c1)
s(H.cC,P.B)
s(H.cD,H.c1)
s(P.cy,P.B)
s(W.ex,W.fM)
s(W.ey,P.B)
s(W.ez,W.C)
s(W.eA,P.B)
s(W.eB,W.C)
s(W.eG,P.B)
s(W.eH,W.C)
s(W.eK,P.B)
s(W.eL,W.C)
s(W.eO,P.ap)
s(W.eP,P.ap)
s(W.eQ,P.B)
s(W.eR,W.C)
s(W.eS,P.B)
s(W.eT,W.C)
s(W.eW,P.B)
s(W.eX,W.C)
s(W.eZ,P.ap)
s(W.cF,P.B)
s(W.cG,W.C)
s(W.f_,P.B)
s(W.f0,W.C)
s(W.f5,P.ap)
s(W.f9,P.B)
s(W.fa,W.C)
s(W.cI,P.B)
s(W.cJ,W.C)
s(W.fb,P.B)
s(W.fc,W.C)
s(W.fh,P.B)
s(W.fi,W.C)
s(W.fj,P.B)
s(W.fk,W.C)
s(W.fl,P.B)
s(W.fm,W.C)
s(W.fn,P.B)
s(W.fo,W.C)
s(W.fp,P.B)
s(W.fq,W.C)
s(P.eM,P.B)
s(P.eN,W.C)
s(P.eU,P.B)
s(P.eV,W.C)
s(P.f6,P.B)
s(P.f7,W.C)
s(P.fd,P.B)
s(P.fe,W.C)
s(P.et,P.ap)
s(P.f2,P.B)
s(P.f3,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{p:"int",X:"double",M:"num",J:"String",be:"bool",aa:"Null",ao:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([N*])","~(N*)","~(a2*)","~(p*,f<bq*>*)","~(h*)","~(bc*)","X*()","~(~())","~()","~(b3*)","~(p*,f<an*>*)","~(p*,f<S*>*)","~(p*,f<Z*>*)","~(p*,f<ar*>*)","~(p*,f<bC*>*)","@(@)","aa(@)","aa(G?,G?)","aa(@,@)","~(aL*)","be*(f<an*>*)","p(@,@)","J(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mA(v.typeUniverse,JSON.parse('{"af":"b2","dG":"b2","bE":"b2","o_":"h","o9":"h","o1":"aB","o0":"b","og":"b","oi":"b","nZ":"j","ob":"j","o2":"k","oe":"k","oc":"w","o8":"w","oG":"ag","o6":"aw","o3":"ae","oj":"ae","oh":"a2","od":"b_","of":"b7","a8":{"i":["1"],"f":["1"]},"dk":{"i":["1"],"f":["1"]},"b1":{"X":[],"M":[]},"c7":{"X":[],"p":[],"M":[]},"c6":{"X":[],"M":[]},"aC":{"J":[]},"H":{"i":["p"],"f":["p"]},"i":{"f":["1"]},"b4":{"f":["2"]},"bZ":{"i":["2"],"f":["2"]},"cu":{"f":["1"]},"bF":{"i":["1"],"f":["1"]},"dA":{"E":[]},"dl":{"E":[]},"ek":{"E":[]},"dN":{"E":[]},"aD":{"i":["1"],"f":["1"]},"bx":{"r":["1"]},"b7":{"r":["X"],"i":["X"],"f":["X"]},"cg":{"r":["p"],"i":["p"],"f":["p"]},"du":{"r":["p"],"i":["p"],"f":["p"]},"dv":{"r":["p"],"i":["p"],"f":["p"]},"dw":{"r":["p"],"i":["p"],"f":["p"]},"dx":{"r":["p"],"i":["p"],"f":["p"]},"dy":{"r":["p"],"i":["p"],"f":["p"]},"ci":{"r":["p"],"i":["p"],"f":["p"]},"dz":{"r":["p"],"i":["p"],"f":["p"]},"eD":{"E":[]},"cL":{"E":[]},"cK":{"co":[]},"cH":{"f":["1"]},"cw":{"i":["1"],"f":["1"]},"c5":{"f":["1"]},"ca":{"i":["1"],"f":["1"]},"cE":{"i":["1"],"f":["1"]},"X":{"M":[]},"d2":{"E":[]},"dB":{"E":[]},"a5":{"E":[]},"bB":{"E":[]},"di":{"E":[]},"em":{"E":[]},"ej":{"E":[]},"dW":{"E":[]},"d7":{"E":[]},"dE":{"E":[]},"cn":{"E":[]},"d9":{"E":[]},"p":{"M":[]},"ao":{"i":["1"],"f":["1"]},"k":{"I":[],"w":[],"b":[]},"d0":{"I":[],"w":[],"b":[]},"d1":{"I":[],"w":[],"b":[]},"aV":{"I":[],"w":[],"b":[]},"ae":{"w":[],"b":[]},"bX":{"r":["ab<M>"],"i":["ab<M>"],"f":["ab<M>"]},"bY":{"ab":["M"]},"db":{"r":["J"],"i":["J"],"f":["J"]},"ev":{"i":["I"],"f":["I"]},"I":{"w":[],"b":[]},"dc":{"r":["aY"],"i":["aY"],"f":["aY"]},"dd":{"b":[]},"df":{"I":[],"w":[],"b":[]},"b_":{"r":["w"],"i":["w"],"f":["w"]},"bs":{"I":[],"w":[],"b":[]},"b3":{"h":[]},"dt":{"r":["b6"],"i":["b6"],"f":["b6"]},"a2":{"h":[]},"eu":{"i":["w"],"f":["w"]},"w":{"b":[]},"cj":{"r":["w"],"i":["w"],"f":["w"]},"dH":{"r":["b8"],"i":["b8"],"f":["b8"]},"dO":{"I":[],"w":[],"b":[]},"aH":{"b":[]},"dS":{"r":["aH"],"b":[],"i":["aH"],"f":["aH"]},"dT":{"r":["b9"],"i":["b9"],"f":["b9"]},"aK":{"b":[]},"ag":{"b":[]},"e_":{"r":["ag"],"i":["ag"],"f":["ag"]},"e0":{"r":["aK"],"b":[],"i":["aK"],"f":["aK"]},"bc":{"h":[]},"e5":{"r":["bb"],"i":["bb"],"f":["bb"]},"aw":{"h":[]},"ep":{"b":[]},"aL":{"a2":[],"h":[]},"bH":{"b":[]},"ew":{"r":["D"],"i":["D"],"f":["D"]},"cv":{"ab":["M"]},"eJ":{"r":["aZ?"],"i":["aZ?"],"f":["aZ?"]},"cz":{"r":["w"],"i":["w"],"f":["w"]},"f1":{"r":["ba"],"i":["ba"],"f":["ba"]},"f8":{"r":["aJ"],"i":["aJ"],"f":["aJ"]},"cM":{"b0":[]},"de":{"i":["I"],"f":["I"]},"ab":{"eY":["1"]},"dn":{"i":["bt"],"f":["bt"]},"dC":{"i":["by"],"f":["by"]},"dZ":{"i":["J"],"f":["J"]},"j":{"I":[],"w":[],"b":[]},"e6":{"i":["bD"],"f":["bD"]},"d3":{"b":[]},"aB":{"b":[]},"dD":{"b":[]},"dU":{"i":["dq<@,@>"],"f":["dq<@,@>"]},"bm":{"f":["1*"]},"al":{"N":[]},"am":{"N":[]},"o":{"N":[]},"cb":{"N":[]},"bv":{"N":[]},"bw":{"N":[]},"dI":{"N":[]},"cp":{"N":[]},"bp":{"an":[]},"c9":{"f":["an*"]},"bo":{"S":[]},"br":{"S":[],"f":["S*"]},"cr":{"S":[]},"cs":{"S":[]},"ct":{"S":[]},"bT":{"Z":[],"f":["Z*"]},"bV":{"Z":[]},"c_":{"Z":[]},"c3":{"Z":[]}}'))
H.mz(v.typeUniverse,JSON.parse('{"a8":1,"dk":1,"V":1,"i":1,"bu":1,"b4":2,"bZ":2,"cc":2,"cu":1,"er":1,"c1":1,"el":1,"bF":1,"aD":1,"dp":1,"bx":1,"bJ":1,"cH":1,"dX":1,"dY":2,"cx":1,"c5":1,"ca":1,"B":1,"dr":2,"ap":2,"cE":1,"cy":1,"d6":2,"d8":2,"f":1,"dj":1,"ao":1,"eE":1,"C":1,"c2":1,"bm":1,"al":1,"am":1,"o":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",Y:"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",H:"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n",A:"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n",d:"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"}
var t=(function rtii(){var s=H.nG
return{O:s("i<@>"),h:s("I"),C:s("E"),D:s("h"),Z:s("oa"),s:s("b0"),k:s("bs"),b:s("a8<@>"),T:s("c8"),g:s("af"),p:s("r<@>"),G:s("t<J*,dP*>"),V:s("t<J*,dV*>"),i:s("t<J*,J*>"),w:s("t<J*,e4*>"),u:s("t<p*,ao<eb*>*>"),L:s("t<p*,ao<ec*>*>"),U:s("t<p*,ao<ef*>*>"),M:s("t<p*,ao<ei*>*>"),J:s("t<p*,cq*>"),E:s("t<p*,be*>"),a:s("t<p*,p*>"),P:s("aa"),K:s("G"),I:s("ab<M>"),R:s("J"),W:s("co"),o:s("bE"),v:s("be"),Y:s("X"),z:s("@"),S:s("p"),B:s("aV*"),x:s("cb*"),d:s("bv*"),F:s("bw*"),A:s("0&*"),_:s("G*"),f:s("J*"),j:s("e3*"),m:s("cp*"),n:s("e7*"),l:s("cq*"),t:s("e8*"),r:s("e9*"),y:s("ea*"),N:s("ed*"),q:s("ee*"),c:s("eg*"),Q:s("eh*"),e:s("p*"),bc:s("k3<aa>?"),X:s("G?"),H:s("M")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aV.prototype
C.K=J.a.prototype
C.a=J.a8.prototype
C.L=J.c6.prototype
C.c=J.c7.prototype
C.h=J.c8.prototype
C.d=J.b1.prototype
C.b=J.aC.prototype
C.M=J.af.prototype
C.t=J.dG.prototype
C.u=P.dM.prototype
C.l=J.bE.prototype
C.v=W.aL.prototype
C.w=W.bH.prototype
C.x=new E.bk("Browser.chrome")
C.m=new E.bk("Browser.firefox")
C.n=new E.bk("Browser.edge")
C.y=new E.bk("Browser.other")
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

C.F=new P.dE()
C.q=new P.ix()
C.G=new P.iy()
C.e=new P.iU()
C.i=new A.bn(0,"ColorBlendType.Overwrite")
C.H=new A.bn(1,"ColorBlendType.Additive")
C.I=new A.bn(2,"ColorBlendType.Average")
C.j=new A.bn(3,"ColorBlendType.AlphaBlend")
C.k=new P.aW(0)
C.J=new P.aW(5e6)
C.N=s([0,0,65498,45055,65535,34815,65534,18431])
C.O=new E.bz("OperatingSystem.windows")
C.r=new E.bz("OperatingSystem.mac")
C.P=new E.bz("OperatingSystem.linux")
C.Q=new E.bz("OperatingSystem.other")
C.R=new P.bI(null,2)})();(function staticFields(){$.kD=null
$.aj=0
$.jY=null
$.jX=null
$.kV=null
$.kT=null
$.l_=null
$.j6=null
$.ja=null
$.jP=null
$.bM=null
$.cR=null
$.cS=null
$.jK=!1
$.ah=C.e
$.a_=[]
$.h_=null
$.k9=null
$.hB=null
$.kf=null
$.at=null
$.cm=null
$.kw=null
$.ku=null
$.kv=null
$.ky=null
$.iz=null
$.iA=null
$.iB=null
$.kx=null
$.kz=null
$.ke=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"o7","l6",function(){return H.nJ("_$dart_dartClosure")})
s($,"ok","l7",function(){return H.av(H.io({
toString:function(){return"$receiver$"}}))})
s($,"ol","l8",function(){return H.av(H.io({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"om","l9",function(){return H.av(H.io(null))})
s($,"on","la",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oq","ld",function(){return H.av(H.io(void 0))})
s($,"or","le",function(){return H.av(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"op","lc",function(){return H.av(H.ks(null))})
s($,"oo","lb",function(){return H.av(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"ot","lg",function(){return H.av(H.ks(void 0))})
s($,"os","lf",function(){return H.av(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oH","jT",function(){return P.me()})
s($,"oJ","lk",function(){return P.m0("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oA","lj",function(){return Z.ad(0)})
s($,"ou","lh",function(){return Z.ad(511)})
s($,"oC","Q",function(){return Z.ad(1)})
s($,"oB","aT",function(){return Z.ad(2)})
s($,"ow","aS",function(){return Z.ad(4)})
s($,"oD","aA",function(){return Z.ad(8)})
s($,"oE","aU",function(){return Z.ad(16)})
s($,"ox","cX",function(){return Z.ad(32)})
s($,"oy","cY",function(){return Z.ad(64)})
s($,"oz","li",function(){return Z.ad(96)})
s($,"oF","bR",function(){return Z.ad(128)})
s($,"ov","aR",function(){return Z.ad(256)})
s($,"o5","l5",function(){return new V.h0()})
s($,"o4","u",function(){return $.l5()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ch,ArrayBufferView:H.ch,Float32Array:H.b7,Float64Array:H.b7,Int16Array:H.du,Int32Array:H.dv,Int8Array:H.dw,Uint16Array:H.dx,Uint32Array:H.dy,Uint8ClampedArray:H.ci,CanvasPixelArray:H.ci,Uint8Array:H.dz,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fu,HTMLAnchorElement:W.d0,HTMLAreaElement:W.d1,Blob:W.d4,HTMLCanvasElement:W.aV,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSPerspective:W.fL,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bW,MSStyleCSSProperties:W.bW,CSS2Properties:W.bW,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.ak,CSSRotation:W.ak,CSSScale:W.ak,CSSSkew:W.ak,CSSTranslation:W.ak,CSSTransformComponent:W.ak,CSSTransformValue:W.fN,CSSUnparsedValue:W.fO,DataTransferItemList:W.fP,DOMException:W.fT,ClientRectList:W.bX,DOMRectList:W.bX,DOMRectReadOnly:W.bY,DOMStringList:W.db,DOMTokenList:W.fU,Element:W.I,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aY,FileList:W.dc,FileWriter:W.dd,HTMLFormElement:W.df,Gamepad:W.aZ,History:W.hb,HTMLCollection:W.b_,HTMLFormControlsCollection:W.b_,HTMLOptionsCollection:W.b_,ImageData:W.b0,HTMLImageElement:W.bs,KeyboardEvent:W.b3,Location:W.hj,MediaList:W.hC,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.b6,MimeTypeArray:W.dt,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cj,RadioNodeList:W.cj,Plugin:W.b8,PluginArray:W.dH,RTCStatsReport:W.hR,HTMLSelectElement:W.dO,SourceBuffer:W.aH,SourceBufferList:W.dS,SpeechGrammar:W.b9,SpeechGrammarList:W.dT,SpeechRecognitionResult:W.ba,Storage:W.i3,CSSStyleSheet:W.aJ,StyleSheet:W.aJ,TextTrack:W.aK,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.e_,TextTrackList:W.e0,TimeRanges:W.ih,Touch:W.bb,TouchEvent:W.bc,TouchList:W.e5,TrackDefaultList:W.ik,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,UIEvent:W.aw,URL:W.iw,VideoTrackList:W.ep,WheelEvent:W.aL,Window:W.bH,DOMWindow:W.bH,CSSRuleList:W.ew,ClientRect:W.cv,DOMRect:W.cv,GamepadList:W.eJ,NamedNodeMap:W.cz,MozNamedAttrMap:W.cz,SpeechRecognitionResultList:W.f1,StyleSheetList:W.f8,SVGLength:P.bt,SVGLengthList:P.dn,SVGNumber:P.by,SVGNumberList:P.dC,SVGPointList:P.hL,SVGStringList:P.dZ,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bD,SVGTransformList:P.e6,AudioBuffer:P.fz,AudioParamMap:P.fA,AudioTrackList:P.d3,AudioContext:P.aB,webkitAudioContext:P.aB,BaseAudioContext:P.aB,OfflineAudioContext:P.dD,WebGL2RenderingContext:P.dM,SQLResultSetRowList:P.dU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.b7.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kY,[])
else N.kY([])})})()
//# sourceMappingURL=test.dart.js.map
