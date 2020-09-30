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
a[c]=function(){a[c]=function(){H.oq(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kd(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jS:function jS(){},
mg:function(a,b){if(t.U.b(a))return new H.c2(a,b)
return new H.b4(a,b)},
m9:function(){return new P.cp("No element")},
mD:function(a,b){var s=J.bk(a)
if(typeof s!=="number")return s.a_()
H.e_(a,0,s-1,b)},
e_:function(a,b,c,d){if(c-b<=32)H.mC(a,b,c,d)
else H.mB(a,b,c,d)},
mC:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.be(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
mB:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a0(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a0(a6+a7,2),d=e-h,c=e+h,b=J.be(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a3()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.H(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.ab()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a3()
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
if(typeof j!=="number")return j.ab()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a3()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a3()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ab()
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
H.e_(a5,a6,r-2,a8)
H.e_(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.H(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.H(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.ab()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.e_(a5,r,q,a8)}else H.e_(a5,r,q,a8)},
J:function J(a){this.a=a},
i:function i(){},
by:function by(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b4:function b4(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=null
this.b=a
this.c=b},
cw:function cw(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
c6:function c6(){},
es:function es(){},
bJ:function bJ(){},
lz:function(a){var s,r=H.ly(a)
if(r!=null)return r
s="minified:"+a
return s},
og:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a0(a)
if(typeof s!="string")throw H.c(H.aO(a))
return s},
cm:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dS:function(a){return H.ml(a)},
ml:function(a){var s,r,q
if(a instanceof P.C)return H.a5(H.d_(a),null)
if(J.cZ(a)===C.J||t.o.b(a)){s=C.n(a)
if(H.kL(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.kL(q))return q}}return H.a5(H.d_(a),null)},
kL:function(a){var s=a!=="Object"&&a!==""
return s},
kK:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mv:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(!H.bO(q))throw H.c(H.aO(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bc(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aO(q))}return H.kK(p)},
mu:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bO(q))throw H.c(H.aO(q))
if(q<0)throw H.c(H.aO(q))
if(q>65535)return H.mv(a)}return H.kK(a)},
mt:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.bc(s,10))>>>0,56320|s&1023)}throw H.c(P.aF(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ms:function(a){var s=H.bF(a).getFullYear()+0
return s},
mq:function(a){var s=H.bF(a).getMonth()+1
return s},
mm:function(a){var s=H.bF(a).getDate()+0
return s},
mn:function(a){var s=H.bF(a).getHours()+0
return s},
mp:function(a){var s=H.bF(a).getMinutes()+0
return s},
mr:function(a){var s=H.bF(a).getSeconds()+0
return s},
mo:function(a){var s=H.bF(a).getMilliseconds()+0
return s},
o:function(a){throw H.c(H.aO(a))},
e:function(a,b){if(a==null)J.bk(a)
throw H.c(H.bS(a,b))},
bS:function(a,b){var s,r,q="index"
if(!H.bO(b))return new P.a7(!0,b,q,null)
s=J.bk(a)
if(!(b<0)){if(typeof s!=="number")return H.o(s)
r=b>=s}else r=!0
if(r)return P.G(b,a,q,null,s)
return P.dT(b,q)},
o5:function(a,b,c){if(a>c)return P.aF(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aF(b,a,c,"end",null)
return new P.a7(!0,b,"end",null)},
aO:function(a){return new P.a7(!0,a,null,null)},
o0:function(a){if(typeof a!="number")throw H.c(H.aO(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dJ()
s=new Error()
s.dartException=a
r=H.or
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
or:function(){return J.a0(this.dartException)},
n:function(a){throw H.c(a)},
l:function(a){throw H.c(P.bY(a))},
au:function(a){var s,r,q,p,o,n
a=H.lv(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
ir:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kX:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kF:function(a,b){return new H.dI(a,b==null?null:b.method)},
jT:function(a,b){var s=b==null,r=s?null:b.method
return new H.dt(a,r,s?null:b.receiver)},
aR:function(a){if(a==null)return new H.hK(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bh(a,a.dartException)
return H.nX(a)},
bh:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bc(r,16)&8191)===10)switch(q){case 438:return H.bh(a,H.jT(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bh(a,H.kF(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.lC()
o=$.lD()
n=$.lE()
m=$.lF()
l=$.lI()
k=$.lJ()
j=$.lH()
$.lG()
i=$.lL()
h=$.lK()
g=p.af(s)
if(g!=null)return H.bh(a,H.jT(s,g))
else{g=o.af(s)
if(g!=null){g.method="call"
return H.bh(a,H.jT(s,g))}else{g=n.af(s)
if(g==null){g=m.af(s)
if(g==null){g=l.af(s)
if(g==null){g=k.af(s)
if(g==null){g=j.af(s)
if(g==null){g=m.af(s)
if(g==null){g=i.af(s)
if(g==null){g=h.af(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bh(a,H.kF(s,g))}}return H.bh(a,new H.er(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.co()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bh(a,new P.a7(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.co()
return a},
bg:function(a){var s
if(a==null)return new H.cK(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.cK(a)},
o7:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
of:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.of)
a.$identity=s
return s},
m3:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i5().constructor.prototype):Object.create(new H.bV(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aj
if(typeof r!=="number")return r.u()
$.aj=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kq(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.m_(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kq(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
m_:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lq,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lY:H.lX
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
m0:function(a,b,c,d){var s=H.kp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kq:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.m2(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.m0(r,!p,s,b)
if(r===0){p=$.aj
if(typeof p!=="number")return p.u()
$.aj=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jI())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aj
if(typeof p!=="number")return p.u()
$.aj=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jI())+"."+H.d(s)+"("+m+");}")()},
m1:function(a,b,c,d){var s=H.kp,r=H.lZ
switch(b?-1:a){case 0:throw H.c(new H.dW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
m2:function(a,b){var s,r,q,p,o,n,m=H.jI(),l=$.kn
if(l==null)l=$.kn=H.km("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.m1(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.aj
if(typeof o!=="number")return o.u()
$.aj=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.aj
if(typeof o!=="number")return o.u()
$.aj=o+1
return new Function(p+o+"}")()},
kd:function(a,b,c,d,e,f,g){return H.m3(a,b,c,d,!!e,!!f,g)},
lX:function(a,b){return H.fp(v.typeUniverse,H.d_(a.a),b)},
lY:function(a,b){return H.fp(v.typeUniverse,H.d_(a.c),b)},
kp:function(a){return a.a},
lZ:function(a){return a.c},
jI:function(){var s=$.ko
return s==null?$.ko=H.km("self"):s},
km:function(a){var s,r,q,p=new H.bV("self","target","receiver","name"),o=J.jR(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jF("Field name "+a+" not found."))},
oq:function(a){throw H.c(new P.dh(a))},
ob:function(a){return v.getIsolateTag(a)},
ps:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oi:function(a){var s,r,q,p,o,n=$.lp.$1(a),m=$.jq[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ju[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.ln.$2(a,n)
if(q!=null){m=$.jq[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ju[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jy(s)
$.jq[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ju[n]=s
return s}if(p==="-"){o=H.jy(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lt(a,s)
if(p==="*")throw H.c(P.kY(n))
if(v.leafTags[n]===true){o=H.jy(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lt(a,s)},
lt:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kh(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jy:function(a){return J.kh(a,!1,null,!!a.$ir)},
oj:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jy(s)
else return J.kh(s,c,null,null)},
od:function(){if(!0===$.kf)return
$.kf=!0
H.oe()},
oe:function(){var s,r,q,p,o,n,m,l
$.jq=Object.create(null)
$.ju=Object.create(null)
H.oc()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lu.$1(o)
if(n!=null){m=H.oj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oc:function(){var s,r,q,p,o,n,m=C.z()
m=H.bR(C.A,H.bR(C.B,H.bR(C.o,H.bR(C.o,H.bR(C.C,H.bR(C.D,H.bR(C.E(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lp=new H.jr(p)
$.ln=new H.js(o)
$.lu=new H.jt(n)},
bR:function(a,b){return a(b)||b},
mc:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hc("Illegal RegExp pattern ("+String(n)+")",a))},
lw:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
o6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lv:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lx:function(a,b,c){var s=H.oo(a,b,c)
return s},
oo:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lv(b),'g'),H.o6(c))},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dI:function dI(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
hK:function hK(a){this.a=a},
cK:function cK(a){this.a=a
this.b=null},
bn:function bn(){},
i9:function i9(){},
i5:function i5(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dW:function dW(a){this.a=a},
u:function u(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hi:function hi(a){this.a=a},
hl:function hl(a,b){this.a=a
this.b=b
this.c=null},
aA:function aA(a){this.a=a},
dw:function dw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function(a){return a},
aw:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bS(b,a))},
nb:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.o5(a,b,c))
return b},
cj:function cj(){},
bC:function bC(){},
b6:function b6(){},
ci:function ci(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
ck:function ck(){},
dH:function dH(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
mz:function(a,b){var s=b.c
return s==null?b.c=H.k8(a,b.z,!0):s},
kP:function(a,b){var s=b.c
return s==null?b.c=H.cR(a,"bt",[b.z]):s},
kQ:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kQ(a.z)
return s===11||s===12},
my:function(a){return a.cy},
o8:function(a){return H.k9(v.typeUniverse,a,!1)},
aN:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aN(a,s,a0,a1)
if(r===s)return b
return H.lc(a,r,!0)
case 7:s=b.z
r=H.aN(a,s,a0,a1)
if(r===s)return b
return H.k8(a,r,!0)
case 8:s=b.z
r=H.aN(a,s,a0,a1)
if(r===s)return b
return H.lb(a,r,!0)
case 9:q=b.Q
p=H.cY(a,q,a0,a1)
if(p===q)return b
return H.cR(a,b.z,p)
case 10:o=b.z
n=H.aN(a,o,a0,a1)
m=b.Q
l=H.cY(a,m,a0,a1)
if(n===o&&l===m)return b
return H.k6(a,n,l)
case 11:k=b.z
j=H.aN(a,k,a0,a1)
i=b.Q
h=H.nU(a,i,a0,a1)
if(j===k&&h===i)return b
return H.la(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cY(a,g,a0,a1)
o=b.z
n=H.aN(a,o,a0,a1)
if(f===g&&n===o)return b
return H.k7(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fE("Attempted to substitute unexpected RTI kind "+c))}},
cY:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aN(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nV:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aN(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nU:function(a,b,c,d){var s,r=b.a,q=H.cY(a,r,c,d),p=b.b,o=H.cY(a,p,c,d),n=b.c,m=H.nV(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eQ()
s.a=q
s.b=o
s.c=m
return s},
pu:function(a,b){a[v.arrayRti]=b
return a},
o1:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lq(s)
return a.$S()}return null},
lr:function(a,b){var s
if(H.kQ(b))if(a instanceof H.bn){s=H.o1(a)
if(s!=null)return s}return H.d_(a)},
d_:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.ka(a)}if(Array.isArray(a))return H.n7(a)
return H.ka(J.cZ(a))},
n7:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
nh:function(a){var s=a.$ti
return s!=null?s:H.ka(a)},
ka:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.ni(a,s)},
ni:function(a,b){var s=a instanceof H.bn?a.__proto__.__proto__.constructor:b,r=H.n5(v.typeUniverse,s.name)
b.$ccache=r
return r},
lq:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.k9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ng:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cV(q,a,H.nm)
if(!H.ax(q))if(!(q===t.c))p=q===p
else p=!0
else p=!0
if(p)return H.cV(q,a,H.np)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bO
else if(s===t.f||s===t.H)r=H.nl
else if(s===t.N)r=H.nn
else r=s===t.v?H.lh:null
if(r!=null)return H.cV(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.oh)){q.r="$i"+p
return H.cV(q,a,H.no)}}else if(p===7)return H.cV(q,a,H.ne)
return H.cV(q,a,H.nc)},
cV:function(a,b,c){a.b=c
return a.b(b)},
nf:function(a){var s,r,q=this
if(!H.ax(q))if(!(q===t.c))s=q===t.K
else s=!0
else s=!0
if(s)r=H.na
else if(q===t.K)r=H.n8
else r=H.nd
q.a=r
return q.a(a)},
nO:function(a){var s,r=a.y
if(!H.ax(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
nc:function(a){var s=this
if(a==null)return H.nO(s)
return H.N(v.typeUniverse,H.lr(a,s),null,s,null)},
ne:function(a){if(a==null)return!0
return this.z.b(a)},
no:function(a){var s=this,r=s.r
if(a instanceof P.C)return!!a[r]
return!!J.cZ(a)[r]},
pr:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lf(a,s)},
nd:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lf(a,s)},
lf:function(a,b){throw H.c(H.mW(H.l3(a,H.lr(a,b),H.a5(b,null))))},
l3:function(a,b,c){var s=P.h6(a),r=H.a5(b==null?H.d_(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
mW:function(a){return new H.cP("TypeError: "+a)},
X:function(a,b){return new H.cP("TypeError: "+H.l3(a,null,b))},
nm:function(a){return a!=null},
n8:function(a){return a},
np:function(a){return!0},
na:function(a){return a},
lh:function(a){return!0===a||!1===a},
pd:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.X(a,"bool"))},
pf:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.X(a,"bool"))},
pe:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.X(a,"bool?"))},
pg:function(a){if(typeof a=="number")return a
throw H.c(H.X(a,"double"))},
pi:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"double"))},
ph:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"double?"))},
bO:function(a){return typeof a=="number"&&Math.floor(a)===a},
pj:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.X(a,"int"))},
pl:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.X(a,"int"))},
pk:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.X(a,"int?"))},
nl:function(a){return typeof a=="number"},
pm:function(a){if(typeof a=="number")return a
throw H.c(H.X(a,"num"))},
po:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"num"))},
pn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.X(a,"num?"))},
nn:function(a){return typeof a=="string"},
pp:function(a){if(typeof a=="string")return a
throw H.c(H.X(a,"String"))},
n9:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.X(a,"String"))},
pq:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.X(a,"String?"))},
nR:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.u(r,H.a5(a[q],b))
return s},
lg:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t.c,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.e(a6,i)
l=C.b.u(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.u(" extends ",H.a5(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.a5(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.u(a3,H.a5(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.u(a3,H.a5(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.kk(H.a5(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
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
return J.kk(q===11||q===12?C.b.u("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.a5(a.z,b))+">"
if(l===9){p=H.nW(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nR(o,b)+">"):p}if(l===11)return H.lg(a,b,null)
if(l===12)return H.lg(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nW:function(a){var s,r=H.ly(a)
if(r!=null)return r
s="minified:"+a
return s},
ld:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
n5:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.k9(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cS(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cR(a,b,q)
n[b]=o
return o}else return m},
n3:function(a,b){return H.le(a.tR,b)},
n2:function(a,b){return H.le(a.eT,b)},
k9:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.l9(H.l7(a,null,b,c))
r.set(b,s)
return s},
fp:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.l9(H.l7(a,b,c,!0))
q.set(c,r)
return r},
n4:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.k6(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aM:function(a,b){b.a=H.nf
b.b=H.ng
return b},
cS:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aM(a,s)
a.eC.set(c,r)
return r},
lc:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.n0(a,b,r,c)
a.eC.set(r,s)
return s},
n0:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ax(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aM(a,q)},
k8:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n_(a,b,r,c)
a.eC.set(r,s)
return s},
n_:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ax(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jv(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jv(q.z))return q
else return H.mz(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aM(a,p)},
lb:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mY(a,b,r,c)
a.eC.set(r,s)
return s},
mY:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ax(b))if(!(b===t.c))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cR(a,"bt",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aM(a,q)},
n1:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aM(a,s)
a.eC.set(q,r)
return r},
fo:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mX:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cR:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fo(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aM(a,r)
a.eC.set(p,q)
return q},
k6:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fo(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aM(a,o)
a.eC.set(q,n)
return n},
la:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fo(m)
if(j>0){s=l>0?",":""
r=H.fo(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mX(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aM(a,o)
a.eC.set(q,r)
return r},
k7:function(a,b,c,d){var s,r=b.cy+("<"+H.fo(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
mZ:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aN(a,b,r,0)
m=H.cY(a,c,r,0)
return H.k7(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aM(a,l)},
l7:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mQ(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.l8(a,r,g,f,!1)
else if(q===46)r=H.l8(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aL(a.u,a.e,f.pop()))
break
case 94:f.push(H.n1(a.u,f.pop()))
break
case 35:f.push(H.cS(a.u,5,"#"))
break
case 64:f.push(H.cS(a.u,2,"@"))
break
case 126:f.push(H.cS(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.k5(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cR(p,n,o))
else{m=H.aL(p,a.e,n)
switch(m.y){case 11:f.push(H.k7(p,m,o,a.n))
break
default:f.push(H.k6(p,m,o))
break}}break
case 38:H.mR(a,f)
break
case 42:l=a.u
f.push(H.lc(l,H.aL(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.k8(l,H.aL(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.lb(l,H.aL(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eQ()
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
H.k5(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.la(p,H.aL(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.k5(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.mT(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aL(a.u,a.e,h)},
mQ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l8:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ld(s,o.z)[p]
if(n==null)H.n('No "'+p+'" in "'+H.my(o)+'"')
d.push(H.fp(s,o,n))}else d.push(p)
return m},
mR:function(a,b){var s=b.pop()
if(0===s){b.push(H.cS(a.u,1,"0&"))
return}if(1===s){b.push(H.cS(a.u,4,"1&"))
return}throw H.c(P.fE("Unexpected extended operation "+H.d(s)))},
aL:function(a,b,c){if(typeof c=="string")return H.cR(a,c,a.sEA)
else if(typeof c=="number")return H.mS(a,b,c)
else return c},
k5:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aL(a,b,c[s])},
mT:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aL(a,b,c[s])},
mS:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fE("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fE("Bad index "+c+" for "+b.i(0)))},
N:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ax(d))if(!(d===t.c))s=d===t.K
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
if(q)if(H.N(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.N(a,b.z,c,d,e)
if(p===6){s=d.z
return H.N(a,b,c,s,e)}if(r===8){if(!H.N(a,b.z,c,d,e))return!1
return H.N(a,H.kP(a,b),c,d,e)}if(r===7){s=H.N(a,b.z,c,d,e)
return s}if(p===8){if(H.N(a,b,c,d.z,e))return!0
return H.N(a,b,c,H.kP(a,d),e)}if(p===7){s=H.N(a,b,c,d.z,e)
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
if(!H.N(a,k,c,j,e)||!H.N(a,j,e,k,c))return!1}return H.li(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.li(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nk(a,b,c,d,e)}return!1},
li:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.N(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.N(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.N(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.N(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.N(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nk:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.N(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ld(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.N(a,H.fp(a,b,l[p]),c,r[p],e))return!1
return!0},
jv:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ax(a))if(r!==7)if(!(r===6&&H.jv(a.z)))s=r===8&&H.jv(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oh:function(a){var s
if(!H.ax(a))if(!(a===t.c))s=a===t.K
else s=!0
else s=!0
return s},
ax:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
le:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eQ:function eQ(){this.c=this.b=this.a=null},
eL:function eL(){},
cP:function cP(a){this.a=a},
ly:function(a){return v.mangledGlobalNames[a]},
ok:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fA:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.kf==null){H.od()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.kY("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.kw()]
if(p!=null)return p
p=H.oi(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){Object.defineProperty(q,J.kw(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kw:function(){var s=$.l5
return s==null?$.l5=v.getIsolateTag("_$dart_js"):s},
ma:function(a){if(!H.bO(a))throw H.c(P.jG(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aF(a,0,4294967295,"length",null))
return J.jR(new Array(a))},
kv:function(a){if(!H.bO(a)||a<0)throw H.c(P.jF("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
jR:function(a){a.fixed$length=Array
return a},
mb:function(a,b){return J.d4(a,b)},
cZ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.ca.prototype}if(typeof a=="string")return J.az.prototype
if(a==null)return J.bw.prototype
if(typeof a=="boolean")return J.hg.prototype
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.C)return a
return J.fA(a)},
o9:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.C)return a
return J.fA(a)},
be:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.C)return a
return J.fA(a)},
ke:function(a){if(a==null)return a
if(a.constructor==Array)return J.aa.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.C)return a
return J.fA(a)},
oa:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bI.prototype
return a},
bf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ag.prototype
return a}if(a instanceof P.C)return a
return J.fA(a)},
kk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.o9(a).u(a,b)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cZ(a).n(a,b)},
d3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.og(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).h(a,b)},
lQ:function(a,b,c){return J.bf(a).fN(a,b,c)},
lR:function(a,b,c,d){return J.bf(a).h2(a,b,c,d)},
d4:function(a,b){return J.oa(a).aL(a,b)},
jD:function(a,b){return J.be(a).K(a,b)},
jE:function(a,b){return J.ke(a).B(a,b)},
lS:function(a,b){return J.ke(a).E(a,b)},
lT:function(a){return J.bf(a).gd5(a)},
lU:function(a){return J.bf(a).gd7(a)},
Z:function(a){return J.cZ(a).gP(a)},
bj:function(a){return J.ke(a).gL(a)},
bk:function(a){return J.be(a).gj(a)},
lV:function(a,b){return J.bf(a).hR(a,b)},
a0:function(a){return J.cZ(a).i(a)},
a:function a(){},
hg:function hg(){},
bw:function bw(){},
b2:function b2(){},
dO:function dO(){},
bI:function bI(){},
ag:function ag(){},
aa:function aa(){},
ds:function ds(){},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b1:function b1(){},
cb:function cb(){},
ca:function ca(){},
az:function az(){}},P={
mI:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nY()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.aP(new P.iR(q),1)).observe(s,{childList:true})
return new P.iQ(q,s,r)}else if(self.setImmediate!=null)return P.nZ()
return P.o_()},
mJ:function(a){self.scheduleImmediate(H.aP(new P.iS(a),0))},
mK:function(a){self.setImmediate(H.aP(new P.iT(a),0))},
mL:function(a){P.k_(C.i,a)},
k_:function(a,b){var s=C.c.a0(a.a,1000)
return P.mU(s<0?0:s,b)},
kW:function(a,b){var s=C.c.a0(a.a,1000)
return P.mV(s<0?0:s,b)},
mU:function(a,b){var s=new P.cO()
s.ee(a,b)
return s},
mV:function(a,b){var s=new P.cO()
s.ef(a,b)
return s},
pb:function(a){return new P.bM(a,1)},
mM:function(){return C.P},
mN:function(a){return new P.bM(a,3)},
nr:function(a){return new P.cL(a)},
l4:function(a,b){var s,r,q
b.a=1
try{a.dM(new P.iZ(b),new P.j_(b),t.P)}catch(q){s=H.aR(q)
r=H.bg(q)
P.om(new P.j0(b,s,r))}},
iY:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.ba()
b.a=a.a
b.c=a.c
P.bL(b,r)}else{r=b.c
b.a=2
b.c=a
a.cS(r)}},
bL:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.d;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.jn(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.bL(e.a,d)
r.a=p
o=p.a}n=e.a
m=n.c
r.b=q
r.c=m
l=!q
if(l){k=d.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){j=d.b.b
if(q){k=n.b===j
k=!(k||k)}else k=!1
if(k){P.jn(f,f,n.b,m.a,m.b)
return}i=$.I
if(i!==j)$.I=j
else i=f
d=d.c
if((d&15)===8)new P.j5(r,e,q).$0()
else if(l){if((d&1)!==0)new P.j4(r,m).$0()}else if((d&2)!==0)new P.j3(e,r).$0()
if(i!=null)$.I=i
d=r.c
if(s.b(d)){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bb(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.iY(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bb(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
nP:function(a,b){if(t.R.b(a))return a
if(t.x.b(a))return a
throw H.c(P.jG(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nN:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.cX=null
r=s.b
$.bP=r
if(r==null)$.cW=null
s.a.$0()}},
nT:function(){$.kb=!0
try{P.nN()}finally{$.cX=null
$.kb=!1
if($.bP!=null)$.kj().$1(P.lo())}},
ll:function(a){var s=new P.ez(a),r=$.cW
if(r==null){$.bP=$.cW=s
if(!$.kb)$.kj().$1(P.lo())}else $.cW=r.b=s},
nS:function(a){var s,r,q,p=$.bP
if(p==null){P.ll(a)
$.cX=$.cW
return}s=new P.ez(a)
r=$.cX
if(r==null){s.b=p
$.bP=$.cX=s}else{q=r.b
s.b=q
$.cX=r.b=s
if(q==null)$.cW=s}},
om:function(a){var s=null,r=$.I
if(C.e===r){P.bQ(s,s,C.e,a)
return}P.bQ(s,s,r,r.bM(a))},
kV:function(a,b){var s=$.I
if(s===C.e)return P.k_(a,b)
return P.k_(a,s.bM(b))},
mF:function(a,b){var s=$.I
if(s===C.e)return P.kW(a,b)
return P.kW(a,s.d3(b,t.Y))},
fF:function(a,b){var s=b==null?P.kl(a):b
P.jH(a,"error")
return new P.d8(a,s)},
kl:function(a){var s
if(t.C.b(a)){s=a.gb5()
if(s!=null)return s}return C.H},
jn:function(a,b,c,d,e){P.nS(new P.jo(d,e))},
lj:function(a,b,c,d){var s,r=$.I
if(r===c)return d.$0()
$.I=c
s=r
try{r=d.$0()
return r}finally{$.I=s}},
lk:function(a,b,c,d,e){var s,r=$.I
if(r===c)return d.$1(e)
$.I=c
s=r
try{r=d.$1(e)
return r}finally{$.I=s}},
nQ:function(a,b,c,d,e,f){var s,r=$.I
if(r===c)return d.$2(e,f)
$.I=c
s=r
try{r=d.$2(e,f)
return r}finally{$.I=s}},
bQ:function(a,b,c,d){var s=C.e!==c
if(s)d=!(!s||!1)?c.bM(d):c.h6(d)
P.ll(d)},
iR:function iR(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
cO:function cO(){this.c=0},
jg:function jg(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cL:function cL(a){this.a=a},
eD:function eD(){},
cx:function cx(a,b){this.a=a
this.$ti=b},
eR:function eR(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
ai:function ai(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iV:function iV(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j4:function j4(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
ez:function ez(a){this.a=a
this.b=null},
e4:function e4(){},
e5:function e5(){},
cq:function cq(){},
d8:function d8(a,b){this.a=a
this.b=b},
ji:function ji(){},
jo:function jo(a,b){this.a=a
this.b=b},
jb:function jb(){},
jd:function jd(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
mf:function(a,b,c){return H.o7(a,new H.u(b.a4("@<0>").cF(c).a4("u<1,2>")))},
me:function(a,b){return new H.u(a.a4("@<0>").cF(b).a4("u<1,2>"))},
kx:function(a){return new P.cz(a.a4("cz<0>"))},
k4:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mP:function(a,b){var s=new P.cA(a,b)
s.c=a.e
return s},
m8:function(a,b,c){var s,r
if(P.kc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a_.push(a)
try{P.nq(a,s)}finally{if(0>=$.a_.length)return H.e($.a_,-1)
$.a_.pop()}r=P.kS(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jQ:function(a,b,c){var s,r
if(P.kc(a))return b+"..."+c
s=new P.ba(b)
$.a_.push(a)
try{r=s
r.a=P.kS(r.a,a,", ")}finally{if(0>=$.a_.length)return H.e($.a_,-1)
$.a_.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kc:function(a){var s,r
for(s=$.a_.length,r=0;r<s;++r)if(a===$.a_[r])return!0
return!1},
nq:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.d(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.t()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.t();p=o,o=n){n=l.gD(l);++j
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
ky:function(a){var s,r={}
if(P.kc(a))return"{...}"
s=new P.ba("")
try{$.a_.push(a)
s.a+="{"
r.a=!0
J.lS(a,new P.ho(r,s))
s.a+="}"}finally{if(0>=$.a_.length)return H.e($.a_,-1)
$.a_.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cz:function cz(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ja:function ja(a){this.a=a
this.c=this.b=null},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c9:function c9(){},
cd:function cd(){},
A:function A(){},
dy:function dy(){},
ho:function ho(a,b){this.a=a
this.b=b},
ap:function ap(){},
cH:function cH(){},
cB:function cB(){},
dc:function dc(){},
dg:function dg(){},
h3:function h3(){},
iB:function iB(){},
iC:function iC(){},
jh:function jh(a){this.b=0
this.c=a},
m7:function(a){if(a instanceof H.bn)return a.i(0)
return"Instance of '"+H.d(H.dS(a))+"'"},
jU:function(a,b,c){var s,r=c?J.kv(a):J.ma(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jV:function(a,b){var s,r=[]
for(s=J.bj(a);s.t();)r.push(s.gD(s))
if(b)return r
return J.jR(r)},
jZ:function(a){var s,r=a,q=r.length,p=P.jW(0,null,q)
if(typeof p!=="number")return p.ab()
s=p<q
return H.mu(s?r.slice(0,p):r)},
mw:function(a){return new H.hh(a,H.mc(a,!1,!0,!1,!1,!1))},
kS:function(a,b,c){var s=J.bj(b)
if(!s.t())return a
if(c.length===0){do a+=H.d(s.gD(s))
while(s.t())}else{a+=H.d(s.gD(s))
for(;s.t();)a=a+c+H.d(s.gD(s))}return a},
n6:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.p){s=$.lP().b
s=s.test(b)}else s=!1
if(s)return b
r=C.G.hd(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.mt(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
m5:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
m6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
di:function(a){if(a>=10)return""+a
return"0"+a},
ks:function(a){return new P.aX(1000*a)},
h6:function(a){if(typeof a=="number"||H.lh(a)||null==a)return J.a0(a)
if(typeof a=="string")return JSON.stringify(a)
return P.m7(a)},
fE:function(a){return new P.d7(a)},
jF:function(a){return new P.a7(!1,null,null,a)},
jG:function(a,b,c){return new P.a7(!0,a,b,c)},
jH:function(a,b){if(a==null)throw H.c(new P.a7(!1,null,b,"Must not be null"))
return a},
dT:function(a,b){return new P.bG(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.bG(b,c,!0,a,d,"Invalid value")},
jW:function(a,b,c){var s
if(typeof c!=="number")return H.o(c)
s=a>c
if(s)throw H.c(P.aF(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.o(c)
s=b>c}else s=!0
if(s)throw H.c(P.aF(b,a,c,"end",null))
return b}return c},
kM:function(a,b){if(a<0)throw H.c(P.aF(a,0,null,b,null))
return a},
G:function(a,b,c,d,e){var s=e==null?J.bk(b):e
return new P.dq(s,!0,a,c,"Index out of range")},
v:function(a){return new P.et(a)},
kY:function(a){return new P.eq(a)},
kR:function(a){return new P.cp(a)},
bY:function(a){return new P.df(a)},
m:function(a){return new P.eN(a)},
ki:function(a){H.ok(a)},
bd:function bd(){},
a9:function a9(a,b){this.a=a
this.b=b},
Y:function Y(){},
aX:function aX(a){this.a=a},
h0:function h0(){},
h1:function h1(){},
B:function B(){},
d7:function d7(a){this.a=a},
dJ:function dJ(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bG:function bG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dq:function dq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
et:function et(a){this.a=a},
eq:function eq(a){this.a=a},
cp:function cp(a){this.a=a},
df:function df(a){this.a=a},
dM:function dM(){},
co:function co(){},
dh:function dh(a){this.a=a},
eN:function eN(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
q:function q(){},
f:function f(){},
dr:function dr(){},
ao:function ao(){},
dx:function dx(){},
U:function U(){},
P:function P(){},
C:function C(){},
at:function at(){},
fg:function fg(){},
L:function L(){},
ba:function ba(a){this.a=a},
o4:function(a){var s
if(t.s.b(a)){s=J.lU(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.cQ(a.data,a.height,a.width)},
o3:function(a){if(a instanceof P.cQ)return{data:a.a,height:a.b,width:a.c}
return a},
aQ:function(a){var s,r,q,p,o
if(a==null)return null
s=P.me(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
o2:function(a){var s={}
a.E(0,new P.jp(s))
return s},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a){this.a=a},
dm:function dm(a,b){this.a=a
this.b=b},
ha:function ha(){},
hb:function hb(){},
ol:function(a,b){var s=new P.ai($.I,b.a4("ai<0>")),r=new P.cx(s,b.a4("cx<0>"))
a.then(H.aP(new P.jz(r),1),H.aP(new P.jA(r),1))
return s},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j7:function j7(){},
f6:function f6(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bx:function bx(){},
dv:function dv(){},
bD:function bD(){},
dK:function dK(){},
hN:function hN(){},
e6:function e6(){},
j:function j(){},
bH:function bH(){},
ed:function ed(){},
eV:function eV(){},
eW:function eW(){},
f2:function f2(){},
f3:function f3(){},
fe:function fe(){},
ff:function ff(){},
fm:function fm(){},
fn:function fn(){},
fI:function fI(){},
fL:function fL(){},
fM:function fM(a){this.a=a},
d9:function d9(){},
ay:function ay(){},
dL:function dL(){},
eA:function eA(){},
dV:function dV(){},
e2:function e2(){},
fb:function fb(){},
fc:function fc(){}},W={
lW:function(a){var s=new Audio(a)
return s},
jK:function(){var s=document.createElement("canvas")
return s},
h2:function(a){return"wheel"},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l6:function(a,b,c,d){var s=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
M:function(a,b,c,d){var s=W.lm(new W.iU(c),t.D)
if(s!=null&&!0)J.lR(a,b,s,!1)
return new W.eM(a,b,s,!1)},
lm:function(a,b){var s=$.I
if(s===C.e)return a
return s.d3(a,b)},
k:function k(){},
fC:function fC(){},
d5:function d5(){},
d6:function d6(){},
da:function da(){},
aW:function aW(){},
af:function af(){},
fT:function fT(){},
F:function F(){},
c_:function c_(){},
fU:function fU(){},
a8:function a8(){},
ak:function ak(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fZ:function fZ(){},
c0:function c0(){},
c1:function c1(){},
dj:function dj(){},
h_:function h_(){},
eC:function eC(a,b){this.a=a
this.b=b},
K:function K(){},
h:function h(){},
b:function b(){},
aY:function aY(){},
dk:function dk(){},
dl:function dl(){},
dn:function dn(){},
aZ:function aZ(){},
he:function he(){},
b_:function b_(){},
b0:function b0(){},
bv:function bv(){},
b3:function b3(){},
hm:function hm(){},
hE:function hE(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hH:function hH(){},
hI:function hI(a){this.a=a},
b5:function b5(){},
dB:function dB(){},
a3:function a3(){},
eB:function eB(a){this.a=a},
w:function w(){},
cl:function cl(){},
b7:function b7(){},
dQ:function dQ(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
dX:function dX(){},
aG:function aG(){},
e0:function e0(){},
b8:function b8(){},
e1:function e1(){},
b9:function b9(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
aH:function aH(){},
aI:function aI(){},
ah:function ah(){},
e7:function e7(){},
e8:function e8(){},
ik:function ik(){},
bb:function bb(){},
bc:function bc(){},
ec:function ec(){},
io:function io(){},
av:function av(){},
iA:function iA(){},
ew:function ew(){},
aK:function aK(){},
bK:function bK(){},
eE:function eE(){},
cy:function cy(){},
eS:function eS(){},
cC:function cC(){},
fa:function fa(){},
fh:function fh(){},
jO:function jO(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iU:function iU(a){this.a=a},
k3:function k3(a){this.$ti=a},
D:function D(){},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
f7:function f7(){},
cI:function cI(){},
cJ:function cJ(){},
f8:function f8(){},
f9:function f9(){},
fd:function fd(){},
fi:function fi(){},
fj:function fj(){},
cM:function cM(){},
cN:function cN(){},
fk:function fk(){},
fl:function fl(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){}},K={
V:function(a){var s=new K.hU()
s.e1(a)
return s},
fD:function fD(){},
dp:function dp(){},
aC:function aC(){this.a=null},
hU:function hU(){this.a=null}},L={e3:function e3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},eb:function eb(a){this.b=a
this.c=null},il:function il(){var _=this
_.d=_.c=_.b=_.a=null},ip:function ip(a){this.b=a
this.a=this.c=null}},F={fJ:function fJ(){this.b=this.a=null},fK:function fK(a,b){this.a=a
this.b=b},dP:function dP(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
jk:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cT:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.y(f,e+a3,d+a4)
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
h.d=g}k=F.jk(g)
j=F.jk(f)
i=F.op(a1,a2,new F.jj(h,F.jk(e),F.jk(d),j,k,a0),b)
if(i!=null)a.hw(i)},
op:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=F.jY()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
o.toString
m=F.iH(e,e,new V.a1(n,0,0,1),e,e,new V.a4(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bS(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
i.toString
m=F.iH(e,e,new V.a1(h,g,f,1),e,e,new V.a4(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bS(d))}}s.d.h4(a+1,b+1,r)
return s},
c5:function(a,b,c){var s=new F.h9(),r=a.a
if(r==null)H.n(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.n(P.m("May not create a face with vertices attached to different shapes."))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.a1()
return s},
md:function(a,b){var s=new F.hk(),r=a.a
if(r==null)H.n(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(r!=b.a)H.n(P.m("May not create a line with vertices attached to different shapes."))
s.a=a
a.c.b.push(s)
s.b=b
b.c.c.push(s)
s.a.a.c.b.push(s)
s.a.a.a1()
return s},
jY:function(){var s=new F.hV(),r=new F.iI(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hY(s)
r.b=[]
s.b=r
r=new F.hX(s)
r.b=[]
s.c=r
r=new F.hW(s)
r.b=[]
s.d=r
return s},
iH:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iG(),p=new F.iN()
p.b=[]
q.b=p
p=new F.iM()
p.b=[]
p.c=[]
q.c=p
p=new F.iJ()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lM()
q.e=0
p=$.a6()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aU().a)!==0?e:r
q.x=(s&$.aT().a)!==0?b:r
q.y=(s&$.bi().a)!==0?f:r
q.z=(s&$.aV().a)!==0?g:r
q.Q=(s&$.lN().a)!==0?c:r
q.ch=(s&$.bU().a)!==0?i:0
q.cx=(s&$.aS().a)!==0?a:r
return q},
jj:function jj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h9:function h9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(){this.b=this.a=null},
hL:function hL(){this.a=null},
hV:function hV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(a){this.a=a
this.b=null},
hY:function hY(a){this.a=a
this.b=null},
iG:function iG(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iP:function iP(a){this.a=a},
iO:function iO(a){this.a=a},
iI:function iI(a){this.a=a
this.c=this.b=null},
iJ:function iJ(){this.d=this.c=this.b=null},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(){this.c=this.b=null},
iN:function iN(){this.b=null}},O={
jL:function(){var s=new O.bo()
s.b6()
return s},
bo:function bo(){this.c=this.b=this.a=null},
ch:function ch(){this.b=this.a=null},
dz:function dz(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hq:function hq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cg:function cg(){},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aq:function aq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(){var _=this
_.e=_.d=_.c=_.b=null},
hu:function hu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dZ:function dZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(){this.c=this.b=this.a=null},
ia:function ia(){}},E={
c3:function(a){var s,r=new E.br()
r.a=""
r.b=!0
s=O.jL()
r.y=s
s.aR(r.ghx(),r.ghA())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scq(0,a)
r.saQ(null)
r.sce(null)
return r},
l1:function(){if(J.jD(window.navigator.vendor,"Google"))return C.x
if(J.jD(window.navigator.userAgent,"Firefox"))return C.l
var s=window.navigator.appVersion
if(J.be(s).K(s,"Trident")||C.b.K(s,"Edge"))return C.m
if(J.jD(window.navigator.appName,"Microsoft"))return C.m
return C.y},
l2:function(){var s=window.navigator.appVersion
if(J.be(s).K(s,"Win"))return C.M
if(C.b.K(s,"Mac"))return C.r
if(C.b.K(s,"Linux"))return C.N
return C.O},
mx:function(a,b){var s=new E.hO(a)
s.e0(a,b)
return s},
mE:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.kU(a,!0,!0,!0,!1)
s=W.jK()
r=s.style
r.width="100%"
r.height="100%"
J.lT(a).l(0,s)
return E.kU(s,!0,!0,!0,!1)},
kU:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.e9(),n=t.z,m=C.f.cn(a,"webgl2",P.mf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.n(P.m("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.mx(m,a)
n=new T.ig(m)
m.getParameter(3379)
n.c=m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new F.fJ()
n.b=n.a=0
o.r=n
n=new X.eu(a)
s=new X.hj()
s.c=new X.a2(!1,!1,!1)
s.d=P.kx(t.e)
n.b=s
s=new X.hJ(n)
s.f=0
s.r=V.aD()
s.x=V.aD()
s.ch=s.Q=1
n.c=s
s=new X.hn(n)
s.r=0
s.x=V.aD()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.im(n)
s.f=V.aD()
s.r=V.aD()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.h4
n.Q=(s==null?$.h4=new E.eK(E.l1(),E.l2()):s).a===C.l?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.M(q,"contextmenu",n.gf0(),!1))
n.z.push(W.M(a,"focus",n.gfa(),!1))
n.z.push(W.M(a,"blur",n.geV(),!1))
n.z.push(W.M(q,"keyup",n.gfe(),!1))
n.z.push(W.M(q,"keydown",n.gfc(),!1))
n.z.push(W.M(a,"mousedown",n.gfi(),!1))
n.z.push(W.M(a,"mouseup",n.gfm(),!1))
n.z.push(W.M(a,p,n.gfk(),!1))
r=n.z
W.h2(a)
W.h2(a)
r.push(W.M(a,W.h2(a),n.gfo(),!1))
n.z.push(W.M(q,p,n.gf2(),!1))
n.z.push(W.M(q,"mouseup",n.gf4(),!1))
n.z.push(W.M(q,"pointerlockchange",n.gfq(),!1))
n.z.push(W.M(a,"touchstart",n.gfJ(),!1))
n.z.push(W.M(a,"touchend",n.gfF(),!1))
n.z.push(W.M(a,"touchmove",n.gfH(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.a9(Date.now(),!1)
o.db=0
o.cU()
return o},
fP:function fP(){},
br:function br(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bl:function bl(a){this.b=a},
bE:function bE(a){this.b=a},
eK:function eK(a,b){this.a=a
this.b=b},
hO:function hO(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
e9:function e9(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ij:function ij(a){this.a=a}},Z={
k2:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cU(c)),35044)
a.bindBuffer(b,null)
return new Z.ex(b,s)},
ae:function(a){return new Z.aJ(a)},
ex:function ex(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cv:function cv(a){this.a=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},
aJ:function aJ(a){this.a=a}},D={
x:function(){var s=new D.bs()
s.d=0
return s},
fR:function fR(){},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
O:function O(){this.b=null},
al:function al(){this.b=null},
am:function am(){this.b=null},
p:function p(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
kr:function(a,b){var s,r,q=new D.bq()
q.c=new V.E(1,1,1)
q.a=V.mH()
q.d=V.k1()
q.e=V.mG()
s=q.b
q.b=b
b.gm().l(0,q.ge3())
r=new D.p("mover",s,q.b)
r.b=!0
q.as(r)
if(!q.c.n(0,a)){s=q.c
q.c=a
r=new D.p("color",s,a)
r.b=!0
q.as(r)}return q},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
an:function an(){},
cc:function cc(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={db:function db(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},hj:function hj(){var _=this
_.d=_.c=_.b=_.a=null},ce:function ce(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},bA:function bA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hJ:function hJ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bB:function bB(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},dR:function dR(){},cr:function cr(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},im:function im(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},eu:function eu(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jP:function(a,b){var s=new X.hd(),r=new V.a1(0,0,0,1)
s.a=r
s.b=a
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=V.jX()
s.r=r
return s},
kG:function(a){var s,r,q=new X.dN()
q.c=1.0471975511965976
q.d=0.1
q.e=2000
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.geg())
r=new D.p("mover",s,q.b)
r.b=!0
q.X(r)}r=q.c
$.t().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
r=new D.p("fov",r,1.0471975511965976)
r.b=!0
q.X(r)}r=q.d
$.t().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
r=new D.p("near",r,0.1)
r.b=!0
q.X(r)}r=q.e
$.t().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
r=new D.p("far",r,2000)
r.b=!0
q.X(r)}return q},
fN:function fN(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jJ:function jJ(){},
hd:function hd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){this.b=this.a=null},
dN:function dN(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(){}},V={
m4:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.aM(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.E(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.E(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.E(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
l=b>1?1:b
return new V.E(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
l=b>1?1:b
return new V.E(n,m,l)
default:n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.E(n,m,l)}},
dd:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.a1(s,r,q,p)},
kg:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
jC:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dR(a-b,s)
return(a<0?a+s:a)+b},
z:function(a,b,c){if(a==null)return C.b.ag("null",c)
$.t().toString
return C.b.ag(C.d.dN(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bT:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.l)(a),++q){p=V.z(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.ag(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
d0:function(a){return C.d.i1(Math.pow(2,C.j.aM(Math.log(H.o0(a))/Math.log(2))))},
bz:function(){var s=$.kE
return s==null?$.kE=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mk:function(a,b,c){return V.ar(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mj:function(a,b,c){return V.ar(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kA:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ar(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
kB:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ar(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
kC:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.ar(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
kD:function(a,b,c,d){d=V.k1()
return V.kz(V.kJ(),d,new V.y(a,b,c))},
kz:function(a,b,c){var s=c.G(),r=b.aZ(s).G(),q=s.aZ(r),p=new V.y(a.a,a.b,a.c),o=r.I(0).Z(p),n=q.I(0).Z(p),m=s.I(0).Z(p)
return V.ar(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
aD:function(){var s=$.kI
return s==null?$.kI=new V.a4(0,0):s},
kJ:function(){var s=$.as
return s==null?$.as=new V.R(0,0,0):s},
jX:function(){var s=$.kO
return s==null?$.kO=V.kN(0,0,1,1):s},
kN:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)},
ev:function(){var s=$.l0
return s==null?$.l0=new V.y(0,0,0):s},
mG:function(){var s=$.iD
return s==null?$.iD=new V.y(-1,0,0):s},
k1:function(){var s=$.iE
return s==null?$.iE=new V.y(0,1,0):s},
mH:function(){var s=$.iF
return s==null?$.iF=new V.y(0,0,1):s},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(){},
dA:function dA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aB:function aB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
on:function(a){P.mF(C.I,new V.jB(a))},
mA:function(a){var s=new V.hZ()
s.e2(a,!0)
return s},
jB:function jB(a){this.a=a},
hZ:function hZ(){this.b=this.a=null},
i0:function i0(a){this.a=a},
i_:function i_(a){this.a=a}},U={
jM:function(){var s=new U.fS()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
jN:function(a){var s=new U.bp()
s.a=a
return s},
ku:function(){var s=new U.bu()
s.b6()
s.aR(s.ge5(),s.gfv())
s.e=null
s.f=V.bz()
s.r=0
return s},
fS:function fS(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bp:function bp(){this.b=this.a=null},
bu:function bu(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
Q:function Q(){},
cn:function cn(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ct:function ct(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ls:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8="testCanvas",b9=null,c0="modifiers",c1=V.mA("Test 047"),c2=W.jK()
c2.className="pageLargeCanvas"
c2.id=b8
c1.a.appendChild(c2)
c1.d_(["Test of the audio player. When you click on a cube it will ","play the same audio at slightly different rate and volume."])
c1.d_(["\xab[Back to Tests|../]"])
s=document.getElementById(b8)
if(s==null)H.n(P.m("Failed to find an element with the identifier, testCanvas."))
r=E.mE(s,!0,!0,!0,!1)
q=U.ku()
c1=r.x
p=new U.ct()
o=U.jM()
o.scm(0,!0)
o.scb(6.283185307179586)
o.scd(0)
o.sa8(0,0)
o.scc(100)
o.sM(0)
o.sbT(0.5)
p.b=o
n=p.gaG()
o.gm().l(0,n)
o=U.jM()
o.scm(0,!0)
o.scb(6.283185307179586)
o.scd(0)
o.sa8(0,0)
o.scc(100)
o.sM(0)
o.sbT(0.5)
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
m=new X.a2(!1,!1,!1)
l=p.d
p.d=m
o=new D.p(c0,l,m)
o.b=!0
p.A(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.p("invertX",o,!1)
o.b=!0
p.A(o)}o=p.r
if(o!==!1){p.r=!1
o=new D.p("invertY",o,!1)
o.b=!0
p.A(o)}p.aw(c1)
q.l(0,p)
c1=r.x
p=new U.cs()
o=U.jM()
o.scm(0,!0)
o.scb(6.283185307179586)
o.scd(0)
o.sa8(0,0)
o.scc(100)
o.sM(0)
o.sbT(0.2)
p.b=o
o.gm().l(0,p.gaG())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.a2(!0,!1,!1)
l=p.c
p.c=m
o=new D.p(c0,l,m)
o.b=!0
p.A(o)
p.aw(c1)
q.l(0,p)
c1=r.x
p=new U.cu()
p.c=0.01
p.e=p.d=0
m=new X.a2(!1,!1,!1)
p.b=m
o=new D.p(c0,b9,m)
o.b=!0
p.A(o)
p.aw(c1)
q.l(0,p)
q.l(0,U.jN(V.mk(0,0,5)))
k=X.kG(q)
j=r.f.dt("../resources/diceColor")
i=new O.dz()
c1=O.jL()
i.e=c1
c1.aR(i.geR(),i.geT())
c1=new O.aq(i,"emission")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
i.f=c1
c1=new O.aq(i,"ambient")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
i.r=c1
c1=new O.aq(i,"diffuse")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
i.x=c1
c1=new O.aq(i,"invDiffuse")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
i.y=c1
c1=new O.hv(i,"specular")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
c1.ch=100
i.z=c1
c1=new O.hr(i,"bump")
c1.c=new A.T(!1,!1,!1)
i.Q=c1
i.ch=null
c1=new O.aq(i,"reflect")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
i.cx=c1
c1=new O.hu(i,"refract")
c1.c=new A.T(!1,!1,!1)
c1.f=new V.E(0,0,0)
c1.ch=1
i.cy=c1
c1=new O.hq(i,"alpha")
c1.c=new A.T(!1,!1,!1)
c1.f=1
i.db=c1
c1=new D.cc()
c1.b6()
c1.e=[]
c1.f=[]
c1.r=[]
c1.x=[]
c1.z=c1.y=null
c1.co(c1.geP(),c1.gft(),c1.gfz())
i.dx=c1
p=new O.ht()
p.b=new V.a1(0,0,0,0)
p.c=1
p.d=10
p.e=!1
i.dy=p
p=c1.y
c1=p==null?c1.y=D.x():p
c1.l(0,i.gfP())
c1=i.dx
p=c1.z
c1=p==null?c1.z=D.x():p
c1.l(0,i.gaD())
i.fr=null
c1=i.dx
p=U.jN(V.kD(-1,-1,-1,b9))
c1.l(0,D.kr(new V.E(1,0.9,0.9),p))
c1=i.dx
p=U.jN(V.kD(1,1,2,b9))
c1.l(0,D.kr(new V.E(0.2,0.2,0.35),p))
c1=i.r
c1.saK(0,new V.E(0.2,0.2,0.2))
i.r.sb2(j)
c1=i.x
c1.saK(0,new V.E(0.8,0.8,0.8))
i.x.sb2(j)
c1=i.z
c1.saK(0,new V.E(0.7,0.7,0.7))
c1=i.z
c1.bH(new A.T(!0,!1,c1.c.c))
c1.cW(10)
i.Q.sb2(r.f.dt("../resources/diceBumpMap"))
h=r.r.hu("../resources/tink.mp3")
g=[]
f=[]
e=F.jY()
F.cT(e,b9,b9,1,1,1,0,0,1)
F.cT(e,b9,b9,1,1,0,1,0,3)
F.cT(e,b9,b9,1,1,0,0,1,2)
F.cT(e,b9,b9,1,1,-1,0,0,0)
F.cT(e,b9,b9,1,1,0,-1,0,0)
F.cT(e,b9,b9,1,1,0,0,-1,3)
e.ax()
d=E.c3(e)
c=E.c3(b9)
b=E.c3(b9)
for(a=-1.6;a<=1.7;a+=0.8)for(a0=-1.6;a0<=1.7;a0+=0.8)for(a1=-1.6;a1<=1.7;a1+=0.8){a2=new V.aB(1,0,0,a,0,1,0,a0,0,0,1,a1,0,0,0,1).q(0,new V.aB(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
q=new U.cn()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.sdP(0)
q.sdG(0,0)
q.sdJ(0)
c1=q.d
$.t().toString
if(!(Math.abs(c1-0)<1e-9)){q.d=0
c1=new D.p("deltaYaw",c1,0)
c1.b=!0
p=q.y
if(p!=null)p.v(c1)}q.sbU(0)
q.sbV(0)
g.push(q)
a3=U.ku()
if(a3.an([q])){c1=a3.a
a4=c1.length
c1.push(q)
c1=a3.c
if(c1!=null)c1.$2(a4,[q])}c1=new U.bp()
c1.sR(0,a2)
if(a3.an([c1])){p=a3.a
a4=p.length
p.push(c1)
p=a3.c
if(p!=null)p.$2(a4,[c1])}a5=E.c3(b9)
a5.saQ(i)
a5.sce(a3)
c1=a5.y
if(c1.an([d])){p=c1.a
a4=p.length
p.push(d)
c1=c1.c
if(c1!=null)c1.$2(a4,[d])}c1=c.y
if(c1.an([a5])){p=c1.a
a4=p.length
p.push(a5)
c1=c1.c
if(c1!=null)c1.$2(a4,[a5])}c1=V.m4(f.length/125,1,1)
j=new V.a1(Math.floor(c1.a*255)/255,Math.floor(c1.b*255)/255,Math.floor(c1.c*255)/255,Math.floor(255)/255)
f.push(j)
a6=E.c3(b9)
c1=new O.i2()
c1.b=j
a6.saQ(c1)
a6.sce(a3)
c1=a6.y
if(c1.an([d])){p=c1.a
a4=p.length
p.push(d)
c1=c1.c
if(c1!=null)c1.$2(a4,[d])}c1=b.y
if(c1.an([a6])){p=c1.a
a4=p.length
p.push(a6)
c1=c1.c
if(c1!=null)c1.$2(a4,[a6])}}a7=new X.fN()
a7.d=a7.c=a7.b=a7.a=512
a7.e=!0
a7.f=!1
a7.x=a7.r=1
a7.ch=T.kT(b9)
a7.cx=new V.a1(0,0,0,1)
a7.cy=!0
a7.db=2000
a7.dx=!0
a7.dy=V.jX()
a7.sai(0,512)
a7.sae(0,512)
j=new V.a1(0,0,0,1)
if(!a7.cx.n(0,j)){l=a7.cx
a7.cx=j
c1=new D.p("color",l,j)
c1.b=!0
a7.X(c1)}c1=a7.db
$.t().toString
if(!(Math.abs(c1-2000)<1e-9)){a7.db=2000
c1=new D.p("depth",c1,2000)
c1.b=!0
a7.X(c1)}if(!a7.f){a7.f=!0
c1=new D.p("autoResize",!1,!0)
c1.b=!0
a7.X(c1)}c1=a7.r
$.t().toString
if(!(Math.abs(c1-0.5)<1e-9)){a7.r=0.5
c1=new D.p("autoResizeScalarX",c1,0.5)
c1.b=!0
a7.X(c1)}c1=a7.x
$.t().toString
if(!(Math.abs(c1-0.5)<1e-9)){a7.x=0.5
c1=new D.p("autoResizeScalarY",c1,0.5)
c1.b=!0
a7.X(c1)}a8=V.jX()
if(!J.H(a7.dy,a8)){l=a7.dy
a7.dy=a8
c1=new D.p("region",l,a8)
c1.b=!0
a7.X(c1)}a9=M.kt()
a9.e.l(0,b)
a9.saP(0,a7)
a9.saI(k)
b0=X.jP(!1,b9)
b1=M.kt()
b1.e.l(0,c)
b1.saP(0,b0)
b1.saI(k)
c1=r.f.du("../resources/maskonaive",".jpg")
b2=new M.bZ()
b2.a=!0
p=E.c3(b9)
e=F.jY()
o=e.a
n=new V.y(-1,-1,1).G()
b3=o.bf(new V.aE(1,2,4,6),V.dd(255,0,0,255),new V.R(-1,-1,0),new V.a4(0,1),n,b9)
n=e.a
o=new V.y(1,-1,1).G()
b4=n.bf(new V.aE(0,3,4,6),V.dd(0,0,255,255),new V.R(1,-1,0),new V.a4(1,1),o,b9)
o=e.a
n=new V.y(1,1,1).G()
b5=o.bf(new V.aE(0,2,5,6),V.dd(0,128,0,255),new V.R(1,1,0),new V.a4(1,0),n,b9)
n=e.a
o=V.aD()
b6=new V.y(-1,1,1).G()
b7=n.bf(new V.aE(0,2,4,7),V.dd(255,255,0,255),new V.R(-1,1,0),o,b6,b9)
e.d.h3([b3,b4,b5,b7])
e.ax()
p.scq(0,e)
b2.e=p
b2.saI(b9)
b2.saP(0,b9)
b2.saQ(b9)
p=new O.dZ()
p.b=1.0471975511965976
p.d=new V.E(1,1,1)
l=p.c
p.c=c1
c1.gm().l(0,p.gaD())
c1=new D.p("boxTexture",l,p.c)
c1.b=!0
p.O(c1)
b2.saQ(p)
b2.saP(0,b0)
b2.saI(k)
c1=r.z
if(c1==null)c1=r.z=D.x()
c1.l(0,new U.jw(g))
c1=r.f
p=r.x
o=a7.ch
n=new T.de()
n.a=c1
n.z=4
n.ch=n.Q=!1
m=new X.a2(!1,!1,!1)
n.c=m
c1=new D.p(c0,b9,m)
c1.b=!0
n.b7(c1)
c1=n.d
if(c1!==o){if(c1!=null)c1.gm().J(0,n.gcC())
l=n.d
n.d=o
o.gm().l(0,n.gcC())
c1=new D.p("texture",l,n.d)
c1.b=!0
n.b7(c1)}n.aw(p)
c1=n.x
if(c1==null)c1=n.x=D.x()
c1.l(0,new U.jx(f,g,h))
c1=new M.bX()
c1.b6()
c1.e=!0
c1.f=!1
c1.r=null
c1.aR(c1.gfB(),c1.gfD())
c1.be(0,[a9,b2,b1])
p=r.d
if(p!==c1){if(p!=null)p.gm().J(0,r.gcz())
r.d=c1
c1.gm().l(0,r.gcz())
r.cA()}V.on(r)},
jw:function jw(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c}},M={
kt:function(){var s,r,q=new M.c4()
q.a=!0
s=O.jL()
q.e=s
s.aR(q.geX(),q.geZ())
q.y=q.x=q.r=q.f=null
r=X.jP(!0,null)
q.saI(null)
q.saP(0,r)
return q},
bX:function bX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
bZ:function bZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c4:function c4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ad:function ad(){}},A={
mh:function(a,b){var s=a.ay,r=new A.hp(b,s)
r.bo(b,s)
r.e_(a,b)
return r},
mi:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+b2.gal(b2)+b3.gal(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.l)(b4),++r)a+="_"+H.d(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.l)(b5),++r)a+="_"+H.d(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.l)(b6),++r)a+="_"+H.d(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.l)(b7),++r)a+="_"+H.d(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.a6()
if(h){s=$.aU()
b=new Z.aJ(b.a|s.a)}if(g){s=$.aT()
b=new Z.aJ(b.a|s.a)}if(f){s=$.aV()
b=new Z.aJ(b.a|s.a)}if(e){s=$.aS()
b=new Z.aJ(b.a|s.a)}return new A.hs(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jl:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jm:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jl(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fB(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
nw:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jl(b,r,"emission")
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
ns:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jm(b,r,"ambient")
b.a+="\n"},
nu:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jm(b,r,"diffuse")
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
nx:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jm(b,r,"invDiffuse")
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
nD:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jm(b,r,"specular")
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
nz:function(a,b){var s,r,q
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
nB:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jl(b,r,"reflect")
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
nC:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jl(b,r,"refract")
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
nt:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fB(r)
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
if(typeof s!=="number")return s.aj()
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
s=c.a+="   return "+C.a.p(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
nv:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fB(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.aj()
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
c.a+="      highLight = intensity*("+C.a.p(l," + ")+");\n"}else c.a+="   highLight = "+C.a.p(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.p(m," + ")+");\n"
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
nA:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fB(r)
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
if(typeof s!=="number")return s.aj()
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
p=c.a+="   return "+C.a.p(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
nE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fB(r)
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
if(typeof s!=="number")return s.aj()
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
if(m){s=$.h4
if(s==null)s=$.h4=new E.eK(E.l1(),E.l2())
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
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.p(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(h," + ")+");\n"
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
ny:function(a,b){var s,r
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
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nF:function(a){var s,r,q,p,o,n,m,l,k,j="   lightAccum += all",i="precision mediump float;\n\n",h="precision mediump float;\n\nvarying vec3 normalVec;\n",g=new P.ba("")
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
A.nw(a,g)
A.ns(a,g)
A.nu(a,g)
A.nx(a,g)
A.nD(a,g)
r=a.db
if(r){p=g.a+="// === Environmental ===\n"
p+="\n"
g.a=p
p+="uniform samplerCube envSampler;\n"
g.a=p
g.a=p+"\n"
A.nB(a,g)
A.nC(a,g)}A.nz(a,g)
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
if(p){for(o=a.z,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.nt(a,o[l],g)
for(o=a.Q,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.nv(a,o[l],g)
for(o=a.ch,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.nA(a,o[l],g)
for(o=a.cx,n=o.length,l=0;l<o.length;o.length===n||(0,H.l)(o),++l)A.nE(a,o[l],g)
A.ny(a,g)}o=g.a+="// === Main ===\n"
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
for(s=a.z,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,l=0;l<s.length;s.length===r||(0,H.l)(s),++l){p=s[l].i(0)
if(0>=p.length)return H.e(p,0)
g.a+=j+(p[0].toUpperCase()+C.b.aU(p,1))+"Values(norm);\n"}if(a.cy<=0)g.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
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
s=g.a+="   vec4 objClr = vec4("+C.a.p(k," + ")+", alpha);\n"
if(q)s=g.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
g.a=s
s=g.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
nG:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bg+"];\n"
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
nI:function(a,b){var s
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
nH:function(a,b){var s
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
nK:function(a,b){var s,r
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
nL:function(a,b){var s,r
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
nJ:function(a,b){var s
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
nM:function(a,b){var s
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
fB:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aU(a,1)},
k0:function(a,b,c,d,e){var s=new A.it(a,c,e)
s.f=d
P.jU(d,0,!1)
return s},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a,b){var _=this
_.da=_.ig=_.bh=_.ay=_.bg=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ip=_.io=_.im=_.c5=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.dn=_.il=_.dm=_.dl=_.ik=_.dk=_.dj=_.di=_.ij=_.dh=_.dg=_.df=_.ii=_.de=_.dd=_.ih=_.dc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fO:function fO(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bg=b5
_.ay=b6
_.bh=b7},
ei:function ei(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ej:function ej(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
em:function em(a,b,c,d,e,f,g,h,i,j){var _=this
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
ep:function ep(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dY:function dY(){},
i1:function i1(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i3:function i3(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
is:function is(){},
iy:function iy(a){this.a=a},
ef:function ef(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
ee:function ee(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
eg:function eg(a,b,c){this.a=a
this.c=b
this.d=c},
eh:function eh(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
el:function el(a,b,c){this.a=a
this.c=b
this.d=c},
en:function en(a,b,c){this.a=a
this.c=b
this.d=c},
eo:function eo(a,b,c){this.a=a
this.c=b
this.d=c}},T={
kT:function(a){var s=new T.id()
s.a=0
s.b=a
s.d=s.c=!1
s.x=s.r=s.f=s.e=0
return s},
de:function de(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bW:function bW(a,b){this.c=a
this.d=b
this.b=null},
ib:function ib(){},
ic:function ic(){},
id:function id(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ih:function ih(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,F,O,E,Z,D,X,V,U,M,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jS.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gP:function(a){return H.cm(a)},
i:function(a){return"Instance of '"+H.d(H.dS(a))+"'"}}
J.hg.prototype={
i:function(a){return String(a)},
gP:function(a){return a?519018:218159}}
J.bw.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gP:function(a){return 0},
$iU:1}
J.b2.prototype={
gP:function(a){return 0},
i:function(a){return String(a)}}
J.dO.prototype={}
J.bI.prototype={}
J.ag.prototype={
i:function(a){var s=a[$.lB()]
if(s==null)return this.dY(a)
return"JavaScript function for "+H.d(J.a0(s))}}
J.aa.prototype={
hP:function(a,b){var s
if(!!a.fixed$length)H.n(P.v("removeAt"))
s=a.length
if(b>=s)throw H.c(P.dT(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var s
if(!!a.fixed$length)H.n(P.v("remove"))
for(s=0;s<a.length;++s)if(J.H(a[s],b)){a.splice(s,1)
return!0}return!1},
be:function(a,b){var s,r
if(!!a.fixed$length)H.n(P.v("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.l)(b),++r)a.push(b[r])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bY(a))}},
p:function(a,b){var s,r,q=P.jU(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
hs:function(a){return this.p(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gc8:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.m9())},
aT:function(a,b){if(!!a.immutable$list)H.n(P.v("sort"))
H.mD(a,b==null?J.nj():b)},
dV:function(a){return this.aT(a,null)},
K:function(a,b){var s
for(s=0;s<a.length;++s)if(J.H(a[s],b))return!0
return!1},
i:function(a){return P.jQ(a,"[","]")},
gL:function(a){return new J.S(a,a.length)},
gP:function(a){return H.cm(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.n(P.v("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bS(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.n(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
a[b]=c},
$ii:1,
$if:1}
J.ds.prototype={}
J.S.prototype={
gD:function(a){return this.d},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.l(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b1.prototype={
aL:function(a,b){var s
if(typeof b!="number")throw H.c(H.aO(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbi(b)
if(this.gbi(a)===s)return 0
if(this.gbi(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbi:function(a){return a===0?1/a<0:a<0},
i1:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.v(""+a+".toInt()"))},
aM:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.v(""+a+".floor()"))},
T:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
dN:function(a,b){var s
if(b>20)throw H.c(P.aF(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbi(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gP:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
dR:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.v("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
bc:function(a,b){var s
if(a>0)s=this.fV(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fV:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iP:1}
J.cb.prototype={$iq:1}
J.ca.prototype={}
J.az.prototype={
bR:function(a,b){if(b<0)throw H.c(H.bS(a,b))
if(b>=a.length)H.n(H.bS(a,b))
return a.charCodeAt(b)},
cH:function(a,b){if(b>=a.length)throw H.c(H.bS(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!="string")throw H.c(P.jG(b,null,null))
return a+b},
ct:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dT(b,null))
if(b>c)throw H.c(P.dT(b,null))
if(c>a.length)throw H.c(P.dT(c,null))
return a.substring(b,c)},
aU:function(a,b){return this.ct(a,b,null)},
q:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ag:function(a,b){var s=b-a.length
if(s<=0)return a
return this.q(" ",s)+a},
hb:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aF(c,0,s,null,null))
return H.lw(a,b,c)},
K:function(a,b){return this.hb(a,b,0)},
aL:function(a,b){var s
if(typeof b!="string")throw H.c(H.aO(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gP:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iL:1}
H.J.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bR(this.a,b)}}
H.i.prototype={}
H.by.prototype={
gD:function(a){var s=this.d
return s},
t:function(){var s,r=this,q=r.a,p=J.be(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bY(q))
s=r.c
if(typeof o!=="number")return H.o(o)
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.b4.prototype={
gL:function(a){return new H.cf(J.bj(this.a),this.b)},
gj:function(a){return J.bk(this.a)},
B:function(a,b){return this.b.$1(J.jE(this.a,b))}}
H.c2.prototype={$ii:1}
H.cf.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){var s=this.a
return s}}
H.cw.prototype={
gL:function(a){return new H.ey(J.bj(this.a),this.b)}}
H.ey.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.c6.prototype={}
H.es.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.bJ.prototype={}
H.iq.prototype={
af:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dI.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dt.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.er.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hK.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.cK.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iat:1}
H.bn.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lz(r==null?"unknown":r)+"'"},
gi7:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i9.prototype={}
H.i5.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lz(s)+"'"}}
H.bV.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bV))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gP:function(a){var s,r=this.c
if(r==null)s=H.cm(this.a)
else s=typeof r!=="object"?J.Z(r):H.cm(r)
return(s^H.cm(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dS(s))+"'")}}
H.dW.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.u.prototype={
gj:function(a){return this.a},
gaz:function(a){return new H.aA(this)},
gi5:function(a){return H.mg(new H.aA(this),new H.hi(this))},
hc:function(a,b){var s=this.b
if(s==null)return!1
return this.ew(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.b8(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.b8(p,b)
q=r==null?n:r.b
return q}else return o.hr(b)},
hr:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cM(q,J.Z(a)&0x3ffffff)
r=this.dq(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cD(s==null?m.b=m.bE():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cD(r==null?m.c=m.bE():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bE()
p=J.Z(b)&0x3ffffff
o=m.cM(q,p)
if(o==null)m.bI(q,p,[m.bF(b,c)])
else{n=m.dq(o,b)
if(n>=0)o[n].b=c
else o.push(m.bF(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bY(s))
r=r.c}},
cD:function(a,b,c){var s=this.b8(a,b)
if(s==null)this.bI(a,b,this.bF(b,c))
else s.b=c},
bF:function(a,b){var s=this,r=new H.hl(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dq:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1},
i:function(a){return P.ky(this)},
b8:function(a,b){return a[b]},
cM:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
ez:function(a,b){delete a[b]},
ew:function(a,b){return this.b8(a,b)!=null},
bE:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bI(r,s,r)
this.ez(r,s)
return r}}
H.hi.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.nh(this.a).a4("2(1)")}}
H.hl.prototype={}
H.aA.prototype={
gj:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.dw(s,s.r)
r.c=s.e
return r}}
H.dw.prototype={
gD:function(a){return this.d},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bY(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jr.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.js.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jt.prototype={
$1:function(a){return this.a(a)}}
H.hh.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cj.prototype={}
H.bC.prototype={
gj:function(a){return a.length},
$ir:1}
H.b6.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.ci.prototype={
k:function(a,b,c){H.aw(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dC.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dD.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dE.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dF.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dG.prototype={
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.ck.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.dH.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aw(b,a,a.length)
return a[b]}}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
H.ac.prototype={
a4:function(a){return H.fp(v.typeUniverse,this,a)},
cF:function(a){return H.n4(v.typeUniverse,this,a)}}
H.eQ.prototype={}
H.eL.prototype={
i:function(a){return this.a}}
H.cP.prototype={}
P.iR.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:7}
P.iQ.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iS.prototype={
$0:function(){this.a.$0()}}
P.iT.prototype={
$0:function(){this.a.$0()}}
P.cO.prototype={
ee:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aP(new P.jg(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
ef:function(a,b){if(self.setTimeout!=null)self.setInterval(H.aP(new P.jf(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$icq:1}
P.jg.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jf.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dZ(s,o)}q.c=p
r.d.$1(q)}}
P.bM.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bN.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bM){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bj(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cL.prototype={
gL:function(a){return new P.bN(this.a())}}
P.eD.prototype={
ha:function(a){var s,r
P.jH(a,"error")
s=this.a
if(s.a!==0)throw H.c(P.kR("Future already completed"))
r=P.kl(a)
s.el(a,r)}}
P.cx.prototype={
h9:function(a,b){var s=this.a
if(s.a!==0)throw H.c(P.kR("Future already completed"))
s.ek(b)}}
P.eR.prototype={
hv:function(a){if((this.c&15)!==6)return!0
return this.b.b.cl(this.d,a.a)},
hp:function(a){var s=this.e,r=this.b.b
if(t.R.b(s))return r.hU(s,a.a,a.b)
else return r.cl(s,a.a)}}
P.ai.prototype={
dM:function(a,b,c){var s,r=$.I
if(r!==C.e)b=b!=null?P.nP(b,r):b
s=new P.ai($.I,c.a4("ai<0>"))
this.cE(new P.eR(s,b==null?1:3,a,b))
return s},
i0:function(a,b){return this.dM(a,null,b)},
cE:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.cE(a)
return}r.a=s
r.c=q.c}P.bQ(null,null,r.b,new P.iV(r,a))}},
cS:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.cS(a)
return}m.a=n
m.c=s.c}l.a=m.bb(a)
P.bQ(null,null,m.b,new P.j2(l,m))}},
ba:function(){var s=this.c
this.c=null
return this.bb(s)},
bb:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eu:function(a){var s,r=this,q=r.$ti
if(q.a4("bt<1>").b(a))if(q.b(a))P.iY(a,r)
else P.l4(a,r)
else{s=r.ba()
r.a=4
r.c=a
P.bL(r,s)}},
bx:function(a,b){var s=this,r=s.ba(),q=P.fF(a,b)
s.a=8
s.c=q
P.bL(s,r)},
ek:function(a){if(this.$ti.a4("bt<1>").b(a)){this.er(a)
return}this.em(a)},
em:function(a){this.a=1
P.bQ(null,null,this.b,new P.iX(this,a))},
er:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.bQ(null,null,s.b,new P.j1(s,a))}else P.iY(a,s)
return}P.l4(a,s)},
el:function(a,b){this.a=1
P.bQ(null,null,this.b,new P.iW(this,a,b))},
$ibt:1}
P.iV.prototype={
$0:function(){P.bL(this.a,this.b)}}
P.j2.prototype={
$0:function(){P.bL(this.b,this.a.a)}}
P.iZ.prototype={
$1:function(a){var s=this.a
s.a=0
s.eu(a)},
$S:7}
P.j_.prototype={
$2:function(a,b){this.a.bx(a,b)},
$S:17}
P.j0.prototype={
$0:function(){this.a.bx(this.b,this.c)}}
P.iX.prototype={
$0:function(){var s=this.a,r=s.ba()
s.a=4
s.c=this.b
P.bL(s,r)}}
P.j1.prototype={
$0:function(){P.iY(this.b,this.a)}}
P.iW.prototype={
$0:function(){this.a.bx(this.b,this.c)}}
P.j5.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.dK(q.d)}catch(p){s=H.aR(p)
r=H.bg(p)
if(m.c){q=m.b.a.c.a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.fF(s,r)
o.b=!0
return}if(l instanceof P.ai&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.i0(new P.j6(n),t.z)
q.b=!1}}}
P.j6.prototype={
$1:function(a){return this.a},
$S:18}
P.j4.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.cl(p.d,this.b)}catch(o){s=H.aR(o)
r=H.bg(o)
q=this.a
q.c=P.fF(s,r)
q.b=!0}}}
P.j3.prototype={
$0:function(){var s,r,q,p,o,n,m,l,k=this
try{s=k.a.a.c
p=k.b
if(p.a.hv(s)&&p.a.e!=null){p.c=p.a.hp(s)
p.b=!1}}catch(o){r=H.aR(o)
q=H.bg(o)
p=k.a.a.c
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=P.fF(r,q)
l.b=!0}}}
P.ez.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.cq.prototype={}
P.d8.prototype={
i:function(a){return H.d(this.a)},
$iB:1,
gb5:function(){return this.b}}
P.ji.prototype={}
P.jo.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a0(this.b)
throw s}}
P.jb.prototype={
hW:function(a){var s,r,q,p=null
try{if(C.e===$.I){a.$0()
return}P.lj(p,p,this,a)}catch(q){s=H.aR(q)
r=H.bg(q)
P.jn(p,p,this,s,r)}},
hY:function(a,b){var s,r,q,p=null
try{if(C.e===$.I){a.$1(b)
return}P.lk(p,p,this,a,b)}catch(q){s=H.aR(q)
r=H.bg(q)
P.jn(p,p,this,s,r)}},
hZ:function(a,b){return this.hY(a,b,t.z)},
h7:function(a){return new P.jd(this,a)},
h6:function(a){return this.h7(a,t.z)},
bM:function(a){return new P.jc(this,a)},
d3:function(a,b){return new P.je(this,a,b)},
hT:function(a){if($.I===C.e)return a.$0()
return P.lj(null,null,this,a)},
dK:function(a){return this.hT(a,t.z)},
hX:function(a,b){if($.I===C.e)return a.$1(b)
return P.lk(null,null,this,a,b)},
cl:function(a,b){return this.hX(a,b,t.z,t.z)},
hV:function(a,b,c){if($.I===C.e)return a.$2(b,c)
return P.nQ(null,null,this,a,b,c)},
hU:function(a,b,c){return this.hV(a,b,c,t.z,t.z,t.z)}}
P.jd.prototype={
$0:function(){return this.a.dK(this.b)}}
P.jc.prototype={
$0:function(){return this.a.hW(this.b)}}
P.je.prototype={
$1:function(a){return this.a.hZ(this.b,a)},
$S:function(){return this.c.a4("~(0)")}}
P.cz.prototype={
gL:function(a){var s=new P.cA(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
K:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.es(b)
return r}},
es:function(a){var s=this.d
if(s==null)return!1
return this.bB(s[this.by(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cI(s==null?q.b=P.k4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cI(r==null?q.c=P.k4():r,b)}else return q.ei(0,b)},
ei:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.k4()
s=q.by(b)
r=p[s]
if(r==null)p[s]=[q.bw(b)]
else{if(q.bB(r,b)>=0)return!1
r.push(q.bw(b))}return!0},
J:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.fM(this.c,b)
else return this.fL(0,b)},
fL:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.by(b)
r=n[s]
q=o.bB(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cZ(p)
return!0},
cI:function(a,b){if(a[b]!=null)return!1
a[b]=this.bw(b)
return!0},
fM:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cZ(s)
delete a[b]
return!0},
cN:function(){this.r=1073741823&this.r+1},
bw:function(a){var s,r=this,q=new P.ja(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cN()
return q},
cZ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cN()},
by:function(a){return J.Z(a)&1073741823},
bB:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.H(a[r].a,b))return r
return-1}}
P.ja.prototype={}
P.cA.prototype={
gD:function(a){return this.d},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bY(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c9.prototype={}
P.cd.prototype={$ii:1,$if:1}
P.A.prototype={
gL:function(a){return new H.by(a,this.gj(a))},
B:function(a,b){return this.h(a,b)},
gdr:function(a){return this.gj(a)===0},
i2:function(a){var s,r,q,p,o=this
if(o.gdr(a)){s=J.kv(0)
return s}r=o.h(a,0)
q=P.jU(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.o(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
i:function(a){return P.jQ(a,"[","]")}}
P.dy.prototype={}
P.ho.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:19}
P.ap.prototype={
E:function(a,b){var s,r
for(s=J.bj(this.gaz(a));s.t();){r=s.gD(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.bk(this.gaz(a))},
i:function(a){return P.ky(a)}}
P.cH.prototype={
i:function(a){return P.jQ(this,"{","}")},
B:function(a,b){var s,r,q,p="index"
P.jH(b,p)
P.kM(b,p)
for(s=P.mP(this,this.r),r=0;s.t();){q=s.d
if(b===r)return q;++r}throw H.c(P.G(b,this,p,null,r))},
$ii:1,
$if:1}
P.cB.prototype={}
P.dc.prototype={}
P.dg.prototype={}
P.h3.prototype={}
P.iB.prototype={}
P.iC.prototype={
hd:function(a){var s,r,q,p=null,o=P.jW(0,p,a.length)
if(o==null)throw H.c(new P.bG(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.jh(r)
if(q.eB(a,0,o)!==o){C.b.bR(a,o-1)
q.bK()}return new Uint8Array(r.subarray(0,H.nb(0,q.b,r.length)))}}
P.jh.prototype={
bK:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
h1:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bK()
return!1}},
eB:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bR(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.cH(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.h1(p,C.b.cH(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bK()}else if(p<=2047){o=l.b
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
P.bd.prototype={}
P.a9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aL:function(a,b){return C.c.aL(this.a,b.a)},
gP:function(a){var s=this.a
return(s^C.c.bc(s,30))&1073741823},
i:function(a){var s=this,r=P.m5(H.ms(s)),q=P.di(H.mq(s)),p=P.di(H.mm(s)),o=P.di(H.mn(s)),n=P.di(H.mp(s)),m=P.di(H.mr(s)),l=P.m6(H.mo(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Y.prototype={}
P.aX.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gP:function(a){return C.c.gP(this.a)},
aL:function(a,b){return C.c.aL(this.a,b.a)},
i:function(a){var s,r,q,p=new P.h1(),o=this.a
if(o<0)return"-"+new P.aX(0-o).i(0)
s=p.$1(C.c.a0(o,6e7)%60)
r=p.$1(C.c.a0(o,1e6)%60)
q=new P.h0().$1(o%1e6)
return""+C.c.a0(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.h0.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.h1.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.B.prototype={
gb5:function(){return H.bg(this.$thrownJsError)}}
P.d7.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h6(s)
return"Assertion failed"}}
P.dJ.prototype={
i:function(a){return"Throw of null."}}
P.a7.prototype={
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbA()+o+m
if(!q.a)return l
s=q.gbz()
r=P.h6(q.b)
return l+s+": "+r}}
P.bG.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.dq.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var s,r=this.b
if(typeof r!=="number")return r.ab()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gj:function(a){return this.f}}
P.et.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eq.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cp.prototype={
i:function(a){return"Bad state: "+this.a}}
P.df.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h6(s)+"."}}
P.dM.prototype={
i:function(a){return"Out of Memory"},
gb5:function(){return null},
$iB:1}
P.co.prototype={
i:function(a){return"Stack Overflow"},
gb5:function(){return null},
$iB:1}
P.dh.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eN.prototype={
i:function(a){return"Exception: "+this.a}}
P.hc.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.ct(q,0,75)+"..."
return r+"\n"+q}}
P.q.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gL(this)
for(s=0;r.t();)++s
return s},
B:function(a,b){var s,r,q
P.kM(b,"index")
for(s=this.gL(this),r=0;s.t();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.G(b,this,"index",null,r))},
i:function(a){return P.m8(this,"(",")")}}
P.dr.prototype={}
P.ao.prototype={$ii:1,$if:1}
P.dx.prototype={}
P.U.prototype={
gP:function(a){return P.C.prototype.gP.call(C.h,this)},
i:function(a){return"null"}}
P.P.prototype={}
P.C.prototype={constructor:P.C,$iC:1,
n:function(a,b){return this===b},
gP:function(a){return H.cm(this)},
i:function(a){return"Instance of '"+H.d(H.dS(this))+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.fg.prototype={
i:function(a){return""},
$iat:1}
P.L.prototype={}
P.ba.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fC.prototype={
gj:function(a){return a.length}}
W.d5.prototype={
i:function(a){return String(a)}}
W.d6.prototype={
i:function(a){return String(a)}}
W.da.prototype={}
W.aW.prototype={
cn:function(a,b,c){if(c!=null)return a.getContext(b,P.o2(c))
return a.getContext(b)},
dQ:function(a,b){return this.cn(a,b,null)},
$iaW:1}
W.af.prototype={
gj:function(a){return a.length}}
W.fT.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.c_.prototype={
gj:function(a){return a.length}}
W.fU.prototype={}
W.a8.prototype={}
W.ak.prototype={}
W.fV.prototype={
gj:function(a){return a.length}}
W.fW.prototype={
gj:function(a){return a.length}}
W.fX.prototype={
gj:function(a){return a.length}}
W.fZ.prototype={
i:function(a){return String(a)}}
W.c0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.c1.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gai(a))+" x "+H.d(this.gae(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bf(b)
s=a.left==s.gbj(b)&&a.top==s.gbl(b)&&this.gai(a)==s.gai(b)&&this.gae(a)==s.gae(b)}else s=!1
return s},
gP:function(a){return W.l6(J.Z(a.left),J.Z(a.top),J.Z(this.gai(a)),J.Z(this.gae(a)))},
gd4:function(a){return a.bottom},
gae:function(a){return a.height},
gbj:function(a){return a.left},
gck:function(a){return a.right},
gbl:function(a){return a.top},
gai:function(a){return a.width},
$iab:1}
W.dj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.h_.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
gdr:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gL:function(a){var s=this.i2(this)
return new J.S(s,s.length)}}
W.K.prototype={
gd5:function(a){return new W.eC(a,a.children)},
gd6:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.ab()
if(q<0)q=-q*0
if(typeof p!=="number")return p.ab()
if(p<0)p=-p*0
return new P.ab(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iK:1}
W.h.prototype={$ih:1}
W.b.prototype={
h2:function(a,b,c,d){if(c!=null)this.ej(a,b,c,!1)},
ej:function(a,b,c,d){return a.addEventListener(b,H.aP(c,1),!1)},
$ib:1}
W.aY.prototype={$iaY:1}
W.dk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.dl.prototype={
gj:function(a){return a.length}}
W.dn.prototype={
gj:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.he.prototype={
gj:function(a){return a.length}}
W.b_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b0.prototype={
gd7:function(a){return a.data},
$ib0:1}
W.bv.prototype={$ibv:1}
W.b3.prototype={$ib3:1}
W.hm.prototype={
i:function(a){return String(a)}}
W.hE.prototype={
gj:function(a){return a.length}}
W.hF.prototype={
h:function(a,b){return P.aQ(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gaz:function(a){var s=[]
this.E(a,new W.hG(s))
return s},
gj:function(a){return a.size}}
W.hG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hH.prototype={
h:function(a,b){return P.aQ(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gaz:function(a){var s=[]
this.E(a,new W.hI(s))
return s},
gj:function(a){return a.size}}
W.hI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b5.prototype={$ib5:1}
W.dB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.a3.prototype={$ia3:1}
W.eB.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gL:function(a){var s=this.a.childNodes
return new W.c7(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.w.prototype={
hR:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lQ(s,b,a)}catch(q){H.aR(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dX(a):s},
fN:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b7.prototype={
gj:function(a){return a.length},
$ib7:1}
W.dQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.hS.prototype={
h:function(a,b){return P.aQ(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gaz:function(a){var s=[]
this.E(a,new W.hT(s))
return s},
gj:function(a){return a.size}}
W.hT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dX.prototype={
gj:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.e0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b8.prototype={$ib8:1}
W.e1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b9.prototype={
gj:function(a){return a.length},
$ib9:1}
W.i6.prototype={
h:function(a,b){return a.getItem(H.n9(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaz:function(a){var s=[]
this.E(a,new W.i7(s))
return s},
gj:function(a){return a.length}}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aH.prototype={$iaH:1}
W.aI.prototype={$iaI:1}
W.ah.prototype={$iah:1}
W.e7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ik.prototype={
gj:function(a){return a.length}}
W.bb.prototype={$ibb:1}
W.bc.prototype={$ibc:1}
W.ec.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.io.prototype={
gj:function(a){return a.length}}
W.av.prototype={}
W.iA.prototype={
i:function(a){return String(a)}}
W.ew.prototype={
gj:function(a){return a.length}}
W.aK.prototype={
ghh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
ghg:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$iaK:1}
W.bK.prototype={
fO:function(a,b){return a.requestAnimationFrame(H.aP(b,1))},
eA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cy.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bf(b)
s=a.left==s.gbj(b)&&a.top==s.gbl(b)&&a.width==s.gai(b)&&a.height==s.gae(b)}else s=!1
return s},
gP:function(a){return W.l6(J.Z(a.left),J.Z(a.top),J.Z(a.width),J.Z(a.height))},
gae:function(a){return a.height},
gai:function(a){return a.width}}
W.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fa.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.jO.prototype={}
W.eM.prototype={}
W.iU.prototype={
$1:function(a){return this.a.$1(a)}}
W.k3.prototype={}
W.D.prototype={
gL:function(a){return new W.c7(a,this.gj(a))}}
W.c7.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.d3(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return this.d}}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f7.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fd.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
P.cQ.prototype={$ib0:1,
gd7:function(a){return this.a}}
P.jp.prototype={
$2:function(a,b){this.a[a]=b},
$S:20}
P.dm.prototype={
gb9:function(){return new H.b4(new H.cw(this.b,new P.ha()),new P.hb())},
k:function(a,b,c){var s=this.gb9()
J.lV(s.b.$1(J.jE(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bk(this.gb9().a)},
h:function(a,b){var s=this.gb9()
return s.b.$1(J.jE(s.a,b))},
gL:function(a){var s=P.jV(this.gb9(),!1)
return new J.S(s,s.length)}}
P.ha.prototype={
$1:function(a){return t.h.b(a)}}
P.hb.prototype={
$1:function(a){return t.h.a(a)}}
P.jz.prototype={
$1:function(a){return this.a.h9(0,a)},
$S:8}
P.jA.prototype={
$1:function(a){return this.a.ha(a)},
$S:8}
P.j7.prototype={
dv:function(){return Math.random()}}
P.f6.prototype={
gck:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
gd4:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.o(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.d(s.a)+", "+H.d(s.b)+") "+H.d(s.c)+" x "+H.d(s.d)},
n:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bf(b)
if(s==r.gbj(b)){q=n.b
if(q==r.gbl(b)){p=n.c
if(typeof s!=="number")return s.u()
if(typeof p!=="number")return H.o(p)
o=n.$ti.c
if(o.a(s+p)===r.gck(b)){s=n.d
if(typeof q!=="number")return q.u()
if(typeof s!=="number")return H.o(s)
r=o.a(q+s)===r.gd4(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gP:function(a){var s,r=this,q=r.a,p=J.Z(q),o=r.b,n=J.Z(o),m=r.c
if(typeof q!=="number")return q.u()
if(typeof m!=="number")return H.o(m)
s=r.$ti.c
m=C.c.gP(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.u()
if(typeof q!=="number")return H.o(q)
q=C.c.gP(s.a(o+q))
return P.mO(P.j9(P.j9(P.j9(P.j9(0,p),n),m),q))}}
P.ab.prototype={
gbj:function(a){return this.a},
gbl:function(a){return this.b},
gai:function(a){return this.c},
gae:function(a){return this.d}}
P.bx.prototype={$ibx:1}
P.dv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bD.prototype={$ibD:1}
P.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hN.prototype={
gj:function(a){return a.length}}
P.e6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gd5:function(a){return new P.dm(a,new W.eB(a))}}
P.bH.prototype={$ibH:1}
P.ed.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eV.prototype={}
P.eW.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.fm.prototype={}
P.fn.prototype={}
P.fI.prototype={
gj:function(a){return a.length}}
P.fL.prototype={
h:function(a,b){return P.aQ(a.get(b))},
E:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aQ(s.value[1]))}},
gaz:function(a){var s=[]
this.E(a,new P.fM(s))
return s},
gj:function(a){return a.size}}
P.fM.prototype={
$2:function(a,b){return this.a.push(a)}}
P.d9.prototype={
gj:function(a){return a.length}}
P.ay.prototype={}
P.dL.prototype={
gj:function(a){return a.length}}
P.eA.prototype={}
P.dV.prototype={
dL:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.bO(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.s.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.o3(g))
return}if(t.k.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jF("Incorrect number or type of arguments"))},
i_:function(a,b,c,d,e,f,g){return this.dL(a,b,c,d,e,f,g,null,null,null)}}
P.e2.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
s=P.aQ(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.fb.prototype={}
P.fc.prototype={}
K.fD.prototype={
aN:function(a,b){return!0},
i:function(a){return"all"}}
K.dp.prototype={
aN:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)if(s[q].aN(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aC.prototype={
aN:function(a,b){return!this.dW(0,b)},
i:function(a){return"!["+this.cu(0)+"]"}}
K.hU.prototype={
e1:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
s=new H.u(t.E)
for(r=new H.by(a,a.gj(a));r.t();){q=r.d
s.k(0,q,!0)}p=P.jV(new H.aA(s),!0)
C.a.dV(p)
this.a=p},
aN:function(a,b){return C.a.K(this.a,b)},
i:function(a){return P.jZ(this.a)}}
L.e3.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ip(this.a.H(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
hn:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.aN(0,a))return p}return null},
i:function(a){return this.b},
cY:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.K(0,l))m+=" (consume)"
for(l=new H.aA(n.d.c),l=l.gL(l);l.t();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.K(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.l)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.ea.prototype={
i:function(a){var s=H.lx(this.b,"\n","\\n"),r=H.lx(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eb.prototype={
i:function(a){return this.b}}
L.il.prototype={
H:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.e3(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
b3:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.eb(a)
s.c=new H.u(t.i)
this.b.k(0,a,s)}return s},
dO:function(a){return this.i3(a)},
i3:function(a){var s=this
return P.nr(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dO(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.hP(a0,0)
else{if(!r.t()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.hn(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jZ(b)
throw H.c(P.m("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.n(P.v("removeRange"))
P.jW(0,k,b.length)
b.splice(0,k-0)
C.a.be(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.K(0,n.a)?7:8
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
if(d.d!=null){g=P.jZ(c)
f=d.d
e=f.c.h(0,g)
n=new L.ea(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.K(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mM()
case 1:return P.mN(o)}}},t.j)},
i:function(a){var s,r=new P.ba(""),q=this.d
if(q!=null)r.a=q.cY()+"\n"
for(q=this.a,q=q.gi5(q),q=new H.cf(J.bj(q.a),q.b);q.t();){s=q.a
if(s!=this.d)r.a+=s.cY()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ip.prototype={
i:function(a){return this.b.b+": "+this.cu(0)}}
F.fJ.prototype={
hu:function(a){var s,r=W.lW(a)
r.autoplay=!1
r.preload="auto";++this.a
s=new F.dP(r)
s.b=!1
W.M(r,"playing",s.gf8(),!1)
W.M(r,"pause",s.gf6(),!1)
W.M(r,"load",new F.fK(this,s),!1)
return s}}
F.fK.prototype={
$1:function(a){var s=this.b
if(!s.b)s.b=!0;++this.a.b}}
F.dP.prototype={
f9:function(a){return null},
f7:function(a){return null},
si6:function(a,b){var s,r
if(b<0)b=0
else if(b>1)b=1
s=this.a
r=s.volume
$.t().toString
if(typeof r!=="number")return r.a_()
if(!(Math.abs(r-b)<1e-9))s.volume=b},
shO:function(a,b){var s,r
if(b<0.001)b=0.001
else if(b>100)b=100
s=this.a
r=s.playbackRate
$.t().toString
if(typeof r!=="number")return r.a_()
if(!(Math.abs(r-b)<1e-9))s.playbackRate=b}}
O.bo.prototype={
b6:function(){this.a=[]
this.c=this.b=null},
co:function(a,b,c){this.b=b
this.c=a},
aR:function(a,b){return this.co(a,null,b)},
an:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
cO:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.S(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.an([b])){s=this.a
r=s.length
s.push(b)
this.cO(r,[b])}},
be:function(a,b){var s,r
if(this.an(b)){s=this.a
r=s.length
C.a.be(s,b)
this.cO(r,b)}},
$if:1}
O.ch.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
aC:function(){var s=this.b
if(s!=null)s.v(null)},
gR:function(a){var s=this.a
if(s.length>0)return C.a.gc8(s)
else return V.bz()},
bk:function(a){var s=this.a
if(a==null)s.push(V.bz())
else s.push(a)
this.aC()},
aA:function(){var s=this.a
if(s.length>0){s.pop()
this.aC()}}}
E.fP.prototype={}
E.br.prototype={
cG:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.S(s,s.length);s.t();){r=s.d
if(r.f==null)r.cG()}},
scq:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gm().J(0,q.gdC())
s=q.c
if(s!=null)s.gm().l(0,q.gdC())
r=new D.p("shape",p,q.c)
r.b=!0
q.ak(r)}},
saQ:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gm().J(0,q.gdE())
s=q.f
q.f=a
if(a!=null)a.gm().l(0,q.gdE())
q.cG()
r=new D.p("technique",s,q.f)
r.b=!0
q.ak(r)}},
sce:function(a){var s,r,q=this
if(!J.H(q.r,a)){s=q.r
if(s!=null)s.gm().J(0,q.gdA())
if(a!=null)a.gm().l(0,q.gdA())
q.r=a
r=new D.p("mover",s,a)
r.b=!0
q.ak(r)}},
ah:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.ar(0,b,q):null
if(!J.H(o,q.x)){s=q.x
q.x=o
r=new D.p("matrix",s,o)
r.b=!0
q.ak(r)}p=q.f
if(p!=null)p.ah(0,b)
for(p=q.y.a,p=new J.S(p,p.length);p.t();)p.d.ah(0,b)},
a6:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gR(q))
else o.push(p.q(0,q.gR(q)))
q.aC()
a.ci(r.f)
q=a.dy
s=(q&&C.a).gc8(q)
if(s!=null&&r.d!=null)s.cj(a,r)
for(q=r.y.a,q=new J.S(q,q.length);q.t();)q.d.a6(a)
a.cg()
a.dx.aA()},
ak:function(a){var s=this.z
if(s!=null)s.v(a)},
a1:function(){return this.ak(null)},
dD:function(a){this.e=null
this.ak(a)},
hD:function(){return this.dD(null)},
dF:function(a){this.ak(a)},
hE:function(){return this.dF(null)},
dB:function(a){this.ak(a)},
hC:function(){return this.dB(null)},
dz:function(a){this.ak(a)},
hz:function(){return this.dz(null)},
hy:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdw(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bs()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.a1()},
hB:function(a,b){var s,r
for(s=b.gL(b),r=this.gdw();s.t();)s.gD(s).gm().J(0,r)
this.a1()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bl.prototype={
i:function(a){return this.b}}
E.bE.prototype={
i:function(a){return this.b}}
E.eK.prototype={}
E.hO.prototype={
e0:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.a9(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.ch()
s.a=[]
s.gm().l(0,new E.hP(r))
r.cy=s
s=new O.ch()
s.a=[]
s.gm().l(0,new E.hQ(r))
r.db=s
s=new O.ch()
s.a=[]
s.gm().l(0,new E.hR(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.u(t.G)},
ghN:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gR(q)
s=r.db
s=r.z=q.q(0,s.gR(s))
q=s}return q},
gdH:function(){var s,r=this,q=r.ch
if(q==null){q=r.ghN()
s=r.dx
s=r.ch=q.q(0,s.gR(s))
q=s}return q},
ci:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gc8(s):a)},
cg:function(){var s=this.dy
if(s.length>1)s.pop()},
bL:function(a){var s=a.b
if(s.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.hc(0,s))throw H.c(P.m('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.k(0,s,a)}}
E.hP.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hQ.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hR.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.e9.prototype={
cB:function(a){this.dI()},
cA:function(){return this.cB(null)},
gho:function(){var s,r=this,q=Date.now(),p=C.c.a0(P.ks(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a9(q,!1)
return s/p},
cU:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.q()
if(typeof p!=="number")return H.o(p)
s=C.d.aM(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.q()
r=C.d.aM(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kV(C.i,q.ghS())}},
dI:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.w.eA(s)
r=W.lm(new E.ij(this),t.H)
r.toString
C.w.fO(s,r)}},
hQ:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cU()
q=n.z
if(q!=null)q.v(null)
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a9(p,!1)
q.y=P.ks(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aC()
p=q.db
C.a.sj(p.a,0)
p.aC()
p=q.dx
C.a.sj(p.a,0)
p.aC()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.a6(n.e)}}catch(o){s=H.aR(o)
r=H.bg(o)
P.ki("Error: "+H.d(s))
P.ki("Stack: "+H.d(r))
throw H.c(s)}}}
E.ij.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hQ()}}}
Z.ex.prototype={}
Z.fQ.prototype={
N:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aR(q)
r=P.m('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.cv.prototype={}
Z.bm.prototype={
ap:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
N:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].N(a)},
aa:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
a6:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a0(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(o,", ")+"\nAttrs:   "+C.a.p(p,", ")}}
Z.c8.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dS(this.c))+"'")+"]"}}
Z.aJ.prototype={
gcr:function(a){var s=this.a,r=(s&$.a6().a)!==0?3:0
if((s&$.aU().a)!==0)r+=3
if((s&$.aT().a)!==0)r+=3
if((s&$.bi().a)!==0)r+=2
if((s&$.aV().a)!==0)r+=3
if((s&$.d1().a)!==0)r+=3
if((s&$.d2().a)!==0)r+=4
if((s&$.bU().a)!==0)++r
return(s&$.aS().a)!==0?r+4:r},
h5:function(a){var s,r=$.a6(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aT()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bi()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d2()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aS()
if((q&r.a)!==0)if(s===a)return r
return $.lO()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aJ))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.a6().a)!==0)s.push("Pos")
if((r&$.aU().a)!==0)s.push("Norm")
if((r&$.aT().a)!==0)s.push("Binm")
if((r&$.bi().a)!==0)s.push("Txt2D")
if((r&$.aV().a)!==0)s.push("TxtCube")
if((r&$.d1().a)!==0)s.push("Clr3")
if((r&$.d2().a)!==0)s.push("Clr4")
if((r&$.bU().a)!==0)s.push("Weight")
if((r&$.aS().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fR.prototype={}
D.bs.prototype={
l:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
J:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.K(q,b)
if(q===!0){q=r.a
s=(q&&C.a).J(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.K(q,b)
if(q===!0){q=r.b
s=(q&&C.a).J(q,b)||s}return s},
v:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.O()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.E(P.jV(s,!0),new D.h7(o))
s=p.b
if(s!=null){p.b=[]
C.a.E(s,new D.h8(o))}return!0},
bY:function(){return this.v(null)},
aq:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.h7.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.h8.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.O.prototype={}
D.al.prototype={}
D.am.prototype={}
D.p.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.db.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.du.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.hj.prototype={
hJ:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hF:function(a){this.c=a.b
this.d.J(0,a.a)
return!1}}
X.ce.prototype={}
X.hn.prototype={
aX:function(a,b){var s,r,q,p,o=this,n=Date.now(),m=o.x,l=b.a,k=o.Q
if(typeof l!=="number")return l.q()
s=b.b
r=o.ch
if(typeof s!=="number")return s.q()
q=new V.a4(m.a+l*k,m.b+s*r)
r=o.a.gaJ()
p=new X.bA(a,V.aD(),o.x,r,q)
p.b=!0
o.z=new P.a9(n,!1)
o.x=q
return p},
cf:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.dS()
if(typeof s!=="number")return s.aj()
this.r=(s&~r)>>>0
return!1},
b0:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.aX(a,b))
return!0},
hK:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaJ()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.q()
o=a.b
n=m.cy
if(typeof o!=="number")return o.q()
r=new X.bB(new V.W(q*p,o*n),s,r)
r.b=!0
l.v(r)
return!0},
fh:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.ce(c,p.a.gaJ(),b)
q.b=!0
r.v(q)
p.y=new P.a9(s,!1)
p.x=V.aD()}}
X.a2.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a2))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.bA.prototype={}
X.hJ.prototype={
bC:function(a,b,c){var s=this,r=new P.a9(Date.now(),!1),q=s.a.gaJ(),p=new X.bA(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cf:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bC(a,b,!0))
return!0},
b1:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.dS()
if(typeof r!=="number")return r.aj()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.v(s.bC(a,b,!0))
return!0},
b0:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bC(a,b,!1))
return!0},
hL:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaJ()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.q()
p=a.b
o=n.ch
if(typeof p!=="number")return p.q()
s=new X.bB(new V.W(r*q,p*o),s,b)
s.b=!0
m.v(s)
return!0},
gbX:function(){var s=this.b
return s==null?this.b=D.x():s},
gbn:function(){var s=this.c
return s==null?this.c=D.x():s},
gaO:function(){var s=this.d
return s==null?this.d=D.x():s}}
X.bB.prototype={}
X.dR.prototype={}
X.cr.prototype={}
X.im.prototype={
aX:function(a,b){var s=this,r=new P.a9(Date.now(),!1),q=a.length>0?a[0]:V.aD(),p=s.a.gaJ(),o=new X.cr(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
hI:function(a){var s=this.b
if(s==null)return!1
s.v(this.aX(a,!0))
return!0},
hG:function(a){var s=this.c
if(s==null)return!1
s.v(this.aX(a,!0))
return!0},
hH:function(a){var s=this.d
if(s==null)return!1
s.v(this.aX(a,!1))
return!0},
gcs:function(a){var s=this.b
return s==null?this.b=D.x():s},
gd9:function(a){var s=this.c
return s==null?this.c=D.x():s},
gaO:function(){var s=this.d
return s==null?this.d=D.x():s}}
X.eu.prototype={
gaJ:function(){var s=this.a,r=C.f.gd6(s).c
r.toString
s=C.f.gd6(s).d
s.toString
return V.kN(0,0,r,s)},
cK:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.du(s,new X.a2(r,a.altKey,a.shiftKey))},
aH:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a2(r,a.altKey,a.shiftKey)},
bJ:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.a2(r,a.altKey,a.shiftKey)},
av:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.a_()
if(typeof o!=="number")return H.o(o)
s=r.top
if(typeof p!=="number")return p.a_()
if(typeof s!=="number")return H.o(s)
return new V.a4(q-o,p-s)},
aY:function(a){return new V.W(a.movementX,a.movementY)},
bG:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=C.d.T(p.pageX)
C.d.T(p.pageY)
n=k.left
if(typeof n!=="number")return H.o(n)
C.d.T(p.pageX)
m=C.d.T(p.pageY)
l=k.top
if(typeof l!=="number")return H.o(l)
j.push(new V.a4(o-n,m-l))}return j},
at:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.db(s,new X.a2(r,a.altKey,a.shiftKey))},
bD:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.a_()
if(typeof n!=="number")return H.o(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.a_()
if(typeof p!=="number")return H.o(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.o(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.o(p)
p=r<p}else p=!1
return p},
fb:function(a){this.f=!0},
eW:function(a){this.f=!1},
f1:function(a){if(this.f&&this.bD(a))a.preventDefault()},
ff:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.hJ(s)},
fd:function(a){var s
if(!this.f)return
s=this.cK(a)
this.b.hF(s)},
fj:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aH(a)
if(p.x){s=p.at(a)
r=p.aY(a)
if(p.d.cf(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.at(a)
q=p.av(a)
if(p.c.cf(s,q))a.preventDefault()},
fn:function(a){var s,r,q,p=this
p.aH(a)
s=p.at(a)
if(p.x){r=p.aY(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b1(s,q))a.preventDefault()},
f5:function(a){var s,r,q,p=this
if(!p.bD(a)){p.aH(a)
s=p.at(a)
if(p.x){r=p.aY(a)
if(p.d.b1(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b1(s,q))a.preventDefault()}},
fl:function(a){var s,r,q,p=this
p.aH(a)
s=p.at(a)
if(p.x){r=p.aY(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b0(s,q))a.preventDefault()},
f3:function(a){var s,r,q,p=this
if(!p.bD(a)){p.aH(a)
s=p.at(a)
if(p.x){r=p.aY(a)
if(p.d.b0(s,r))a.preventDefault()
return}if(p.r)return
q=p.av(a)
if(p.c.b0(s,q))a.preventDefault()}},
fp:function(a){var s,r,q=this
q.aH(a)
s=new V.W((a&&C.v).ghg(a),C.v.ghh(a)).q(0,q.Q)
if(q.x){if(q.d.hK(s))a.preventDefault()
return}if(q.r)return
r=q.av(a)
if(q.c.hL(s,r))a.preventDefault()},
fs:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.at(q.y)
r=q.av(q.y)
q.d.fh(s,r,p)}},
fK:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bJ(a)
s=r.bG(a)
if(r.e.hI(s))a.preventDefault()},
fG:function(a){var s
this.bJ(a)
s=this.bG(a)
if(this.e.hG(s))a.preventDefault()},
fI:function(a){var s
this.bJ(a)
s=this.bG(a)
if(this.e.hH(s))a.preventDefault()}}
D.bq.prototype={
as:function(a){var s=this.r
if(s!=null)s.v(a)},
e4:function(){return this.as(null)},
$ian:1}
D.an.prototype={}
D.cc.prototype={
as:function(a){var s=this.y
if(s!=null)s.v(a)},
cQ:function(a){var s=this.z
if(s!=null)s.v(a)},
fg:function(){return this.cQ(null)},
fu:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(q==null||this.ev(q))return!1}return!0},
eQ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcP(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p instanceof D.bq)this.f.push(p)
o=p.r
if(o==null){o=new D.bs()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.al()
s.b=!0
this.as(s)},
fA:function(a,b){var s,r,q
for(s=b.gL(b),r=this.gcP();s.t();){q=s.gD(s)
C.a.J(this.e,q)
q.gm().J(0,r)}s=new D.am()
s.b=!0
this.as(s)},
ev:function(a){var s=C.a.K(this.f,a)
return s}}
V.E.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.a1.prototype={
i4:function(){var s=this
return new V.a1(Math.floor(s.a*255)/255,Math.floor(s.b*255)/255,Math.floor(s.c*255)/255,Math.floor(s.d*255)/255)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.h5.prototype={}
V.dA.prototype={
a2:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dA))return!1
s=b.a
$.t().toString
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
V.aB.prototype={
a2:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c7:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.t().toString
if(Math.abs(b3-0)<1e-9)return V.bz()
s=1/b3
r=-l
q=-a2
return V.ar((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
q:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ar(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bm:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.y(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
b4:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.R(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
s=b.a
$.t().toString
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
i:function(a){return this.F()},
w:function(a){var s,r,q,p,o,n=this,m=V.bT([n.a,n.e,n.y,n.cx],3,0),l=V.bT([n.b,n.f,n.z,n.cy],3,0),k=V.bT([n.c,n.r,n.Q,n.db],3,0),j=V.bT([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
F:function(){return this.w("")}}
V.a4.prototype={
V:function(a){return new V.W(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.R.prototype={
a_:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aE))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.dU.prototype={
ga9:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dU))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+", "+V.z(s.d,3,0)+"]"}}
V.W.prototype={
c9:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.q()
if(typeof p!=="number")return H.o(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.o(r)
return q*p+s*r},
q:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.q()
if(typeof b!=="number")return H.o(b)
s=this.b
if(typeof s!=="number")return s.q()
return new V.W(r*b,s*b)},
W:function(a,b){var s,r
$.t().toString
if(Math.abs(b-0)<1e-9){s=$.kZ
return s==null?$.kZ=new V.W(0,0):s}s=this.a
if(typeof s!=="number")return s.W()
r=this.b
if(typeof r!=="number")return r.W()
return new V.W(s/b,r/b)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
r=this.a
$.t().toString
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.a_()
if(typeof r!=="number")return H.o(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.y.prototype={
c9:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){return new V.y(V.kg(this.a,a.a,b),V.kg(this.b,a.b,b),V.kg(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.Z(s))
if(r===1)return s
return s.W(0,r)},
aZ:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
u:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
I:function(a){return new V.y(-this.a,-this.b,-this.c)},
W:function(a,b){$.t().toString
if(Math.abs(b-0)<1e-9)return V.ev()
return new V.y(this.a/b,this.b/b,this.c/b)},
ds:function(){$.t().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.fS.prototype={
bv:function(a){var s=V.jC(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
A:function(a){var s=this.y
if(s!=null)s.v(a)},
scm:function(a,b){},
scb:function(a){var s,r=this,q=r.b
$.t().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bv(s)}q=new D.p("maximumLocation",q,r.b)
q.b=!0
r.A(q)}},
scd:function(a){var s,r=this,q=r.c
$.t().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bv(s)}q=new D.p("minimumLocation",q,r.c)
q.b=!0
r.A(q)}},
sa8:function(a,b){var s,r=this
b=r.bv(b)
s=r.d
$.t().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.p("location",s,b)
s.b=!0
r.A(s)}},
scc:function(a){var s,r,q=this,p=q.e
$.t().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.p("maximumVelocity",p,a)
p.b=!0
q.A(p)}},
sM:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.t().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.p("velocity",r,a)
r.b=!0
s.A(r)}},
sbT:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.p("dampening",s,a)
s.b=!0
this.A(s)}},
ah:function(a,b){var s,r,q,p=this,o=p.f
$.t().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa8(0,p.d+s*b)
o=p.x
$.t().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sM(s)}}}
U.bp.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
sR:function(a,b){var s,r,q,p=this
if(!J.H(p.a,b)){s=p.a
p.a=b
r=new D.p("matrix",s,b)
r.b=!0
q=p.b
if(q!=null)q.v(r)}},
ar:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bp))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bu.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
A:function(a){var s=this.e
if(s!=null)s.v(a)},
a5:function(){return this.A(null)},
e6:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaG(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.al()
s.b=!0
this.A(s)},
fw:function(a,b){var s,r
for(s=b.gL(b),r=this.gaG();s.t();)s.gD(s).gm().J(0,r)
s=new D.am()
s.b=!0
this.A(s)},
ar:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.ab()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.S(p,p.length),s=null;p.t();){o=p.d
if(o!=null){r=o.ar(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}q.f=s==null?V.bz():s
p=q.e
if(p!=null)p.aq(0)}return q.f},
n:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bu))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.e(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.e(p,r)
if(!J.H(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iQ:1}
U.Q.prototype={}
U.cn.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
A:function(a){var s=this.y
if(s!=null)s.v(a)},
sdP:function(a){var s
a=V.jC(a,0,6.283185307179586)
s=this.a
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.p("yaw",s,a)
s.b=!0
this.A(s)}},
sdG:function(a,b){var s
b=V.jC(b,0,6.283185307179586)
s=this.b
$.t().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.p("pitch",s,b)
s.b=!0
this.A(s)}},
sdJ:function(a){var s
a=V.jC(a,0,6.283185307179586)
s=this.c
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.p("roll",s,a)
s.b=!0
this.A(s)}},
sbU:function(a){var s=this.e
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.e=a
s=new D.p("deltaPitch",s,a)
s.b=!0
this.A(s)}},
sbV:function(a){var s=this.f
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.f=a
s=new D.p("deltaRoll",s,a)
s.b=!0
this.A(s)}},
ar:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sdP(s.a+s.d*b.y)
s.sdG(0,s.b+s.e*b.y)
s.sdJ(s.c+s.f*b.y)
s.x=V.kC(s.c).q(0,V.kB(s.b)).q(0,V.kA(s.a))
r=s.y
if(r!=null)r.aq(0)}return s.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cn))return!1
s=q.a
r=b.a
$.t().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.z(s.a,3,0)+", "+V.z(s.b,3,0)+", "+V.z(s.c,3,0)+"], ["+V.z(s.d,3,0)+", "+V.z(s.e,3,0)+", "+V.z(s.f,3,0)+"]"}}
U.cs.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.x():s},
A:function(a){var s=this.cy
if(s!=null)s.v(a)},
a5:function(){return this.A(null)},
aw:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gbX().l(0,s.gbp())
s.a.c.gaO().l(0,s.gbr())
s.a.c.gbn().l(0,s.gbt())
return!0},
bq:function(a){var s=this
if(!J.H(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
bs:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!l.y)return
if(l.x){s=a.y.V(a.d)
s=s.Z(s)
r=l.r
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.V(a.d).q(0,2).W(0,s.ga9())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.q()
q=l.e
if(typeof q!=="number")return H.o(q)
r.sM(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.V(q).q(0,2).W(0,s.ga9())
r=l.b
o=p.a
if(typeof o!=="number")return o.I()
n=l.e
if(typeof n!=="number")return H.o(n)
m=l.z
if(typeof m!=="number")return H.o(m)
r.sa8(0,-o*n+m)
l.b.sM(0)
l.Q=a.z.V(q).q(0,2).W(0,s.ga9())}l.a5()},
bu:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.Z(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.q()
q=p.e
if(typeof q!=="number")return H.o(q)
s.sM(r*10*q)
p.a5()}},
ar:function(a,b,c){var s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.ch=p
s=b.y
r.b.ah(0,s)
r.cx=V.kC(r.b.d)}return r.cx},
$iQ:1}
U.ct.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.x():s},
A:function(a){var s=this.fx
if(s!=null)s.v(a)},
a5:function(){return this.A(null)},
aw:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gbX().l(0,q.gbp())
q.a.c.gaO().l(0,q.gbr())
q.a.c.gbn().l(0,q.gbt())
s=q.a.d
r=s.f
s=r==null?s.f=D.x():r
s.l(0,q.geD())
s=q.a.d
r=s.d
s=r==null?s.d=D.x():r
s.l(0,q.geF())
s=q.a.e
s.gcs(s).l(0,q.geb())
q.a.e.gaO().l(0,q.ge9())
s=q.a.e
s.gd9(s).l(0,q.ge7())
return!0},
am:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.I()
s=-s}if(this.r){if(typeof r!=="number")return r.I()
r=-r}return new V.W(s,r)},
bq:function(a){var s=this
t._.a(a)
if(!J.H(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bs:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!l.cx)return
if(l.ch){s=a.y.V(a.d)
s=s.Z(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.am(a.y.V(a.d).q(0,2).W(0,s.ga9()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.I()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sM(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.I()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sM(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.am(r.V(q).q(0,2).W(0,s.ga9()))
r=l.c
o=p.a
if(typeof o!=="number")return o.I()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa8(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.I()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa8(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.am(a.z.V(q).q(0,2).W(0,s.ga9()))}l.a5()},
bu:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Z(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.I()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sM(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.I()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sM(-r*10*s)
p.a5()}},
eE:function(a){var s=this
if(t.cj.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eG:function(a){var s,r,q,p,o,n,m,l=this
t._.a(a)
if(!J.H(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.am(r.V(q).q(0,2).W(0,s.ga9()))
r=l.c
o=p.a
if(typeof o!=="number")return o.I()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa8(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.I()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa8(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.am(a.z.V(q).q(0,2).W(0,s.ga9()))
l.a5()},
ec:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ea:function(a){var s,r,q,p,o,n,m,l=this
t.m.a(a)
if(!l.cx)return
if(l.ch){s=a.y.V(a.d)
s=s.Z(s)
r=l.Q
if(typeof r!=="number")return H.o(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.am(a.y.V(a.d).q(0,2).W(0,s.ga9()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.I()
q=l.y
if(typeof q!=="number")return H.o(q)
r.sM(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.I()
r=l.x
if(typeof r!=="number")return H.o(r)
q.sM(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.am(r.V(q).q(0,2).W(0,s.ga9()))
r=l.c
o=p.a
if(typeof o!=="number")return o.I()
n=l.y
if(typeof n!=="number")return H.o(n)
m=l.cy
if(typeof m!=="number")return H.o(m)
r.sa8(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.I()
o=l.x
if(typeof o!=="number")return H.o(o)
r=l.db
if(typeof r!=="number")return H.o(r)
m.sa8(0,-n*o+r)
l.b.sM(0)
l.c.sM(0)
l.dx=l.am(a.z.V(q).q(0,2).W(0,s.ga9()))}l.a5()},
e8:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.Z(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.I()
q=p.y
if(typeof q!=="number")return H.o(q)
s.sM(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.I()
s=p.x
if(typeof s!=="number")return H.o(s)
q.sM(-r*10*s)
p.a5()}},
ar:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ab()
if(q<p){r.dy=p
s=b.y
r.c.ah(0,s)
r.b.ah(0,s)
r.fr=V.kA(r.b.d).q(0,V.kB(r.c.d))}return r.fr},
$iQ:1}
U.cu.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
A:function(a){var s=this.r
if(s!=null)s.v(a)},
aw:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.x():r
r=p.geN()
s.l(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.x():q).l(0,r)
return!0},
eO:function(a){var s,r,q,p,o=this
if(!J.H(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.q()
p=s+r*q
if(s!==p){o.d=p
s=new D.p("zoom",s,p)
s.b=!0
o.A(s)}},
ar:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.mj(s,s,s)}return r.f},
$iQ:1}
M.bX.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
S:function(a){var s=this.r
if(s!=null)s.v(a)},
aV:function(){return this.S(null)},
fC:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gU(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.al()
s.b=!0
this.S(s)},
fE:function(a,b){var s,r
for(s=b.gL(b),r=this.gU();s.t();)s.gD(s).gm().J(0,r)
s=new D.am()
s.b=!0
this.S(s)},
a6:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.S(s,s.length);s.t();){r=s.d
if(r!=null)r.a6(a)}q.f=!1},
$iad:1}
M.bZ.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.x():s},
S:function(a){var s=this.r
if(s!=null)s.v(a)},
aV:function(){return this.S(null)},
saI:function(a){var s,r,q=this
if(a==null)a=new X.hf()
s=q.b
if(s!==a){if(s!=null)s.gm().J(0,q.gU())
r=q.b
q.b=a
a.gm().l(0,q.gU())
s=new D.p("camera",r,q.b)
s.b=!0
q.S(s)}},
saP:function(a,b){var s,r,q=this
if(b==null)b=X.jP(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().J(0,q.gU())
r=q.c
q.c=b
b.gm().l(0,q.gU())
s=new D.p("target",r,q.c)
s.b=!0
q.S(s)}},
saQ:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().J(0,r.gU())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gU())
q=new D.p("technique",s,r.d)
q.b=!0
r.S(q)}},
a6:function(a){var s=this
a.ci(s.d)
s.c.N(a)
s.b.N(a)
s.e.ah(0,a)
s.e.a6(a)
s.b.aa(a)
s.c.toString
a.cg()},
$iad:1}
M.c4.prototype={
S:function(a){var s=this.y
if(s!=null)s.v(a)},
aV:function(){return this.S(null)},
eY:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gU(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bs()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.al()
s.b=!0
this.S(s)},
f_:function(a,b){var s,r
for(s=b.gL(b),r=this.gU();s.t();)s.gD(s).gm().J(0,r)
s=new D.am()
s.b=!0
this.S(s)},
saI:function(a){var s,r,q=this
if(a==null)a=X.kG(null)
s=q.b
if(s!==a){if(s!=null)s.gm().J(0,q.gU())
r=q.b
q.b=a
a.gm().l(0,q.gU())
s=new D.p("camera",r,q.b)
s.b=!0
q.S(s)}},
saP:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().J(0,r.gU())
s=r.c
r.c=b
b.gm().l(0,r.gU())
q=new D.p("target",s,r.c)
q.b=!0
r.S(q)}},
gm:function(){var s=this.y
return s==null?this.y=D.x():s},
a6:function(a){var s,r=this
a.ci(r.d)
r.c.N(a)
r.b.N(a)
for(s=r.e.a,s=new J.S(s,s.length);s.t();)s.d.ah(0,a)
for(s=r.e.a,s=new J.S(s,s.length);s.t();)s.d.a6(a)
r.b.toString
a.cy.aA()
a.db.aA()
r.c.aa(a)
a.cg()},
$iad:1}
M.ad.prototype={}
A.fG.prototype={}
A.fH.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hm:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bW:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.T.prototype={
gal:function(a){var s=this.a?1:0,r=this.c?4:0
return s|0|r},
i:function(a){var s=this.a?1:0,r=this.c?4:0
return""+(s|0|r)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.T))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.hp.prototype={
e_:function(c5,c6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2="Required uniform value, ",c3=", was not defined or used in shader.",c4="uniform mat4 objMat;\n"
c0.z=c5
s=new P.ba("")
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
A.nG(c5,s)
A.nI(c5,s)
A.nH(c5,s)
A.nK(c5,s)
A.nL(c5,s)
A.nJ(c5,s)
A.nM(c5,s)
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
c0.c6(0,q.charCodeAt(0)==0?q:q,A.nF(c0.z))
c0.Q=c0.x.h(0,"posAttr")
c0.cx=c0.x.h(0,"normAttr")
c0.ch=c0.x.h(0,"binmAttr")
c0.cy=c0.x.h(0,"txt2DAttr")
c0.db=c0.x.h(0,"txtCubeAttr")
c0.dx=c0.x.h(0,"bendAttr")
if(c5.dy)c0.id=t.q.a(c0.y.C(0,"invViewMat"))
if(r)c0.dy=t.q.a(c0.y.C(0,"objMat"))
if(p)c0.fr=t.q.a(c0.y.C(0,"viewObjMat"))
r=t.q
c0.fy=r.a(c0.y.C(0,"projViewObjMat"))
if(c5.go)c0.fx=r.a(c0.y.C(0,"viewMat"))
if(c5.x1)c0.k1=t.O.a(c0.y.C(0,"txt2DMat"))
if(c5.x2)c0.k2=r.a(c0.y.C(0,"txtCubeMat"))
if(c5.y1)c0.k3=r.a(c0.y.C(0,"colorMat"))
c0.r1=[]
q=c5.bg
if(q>0){c0.k4=c0.y.C(0,"bendMatCount")
for(l=0;l<q;++l){p=c0.r1
o=c0.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.n(P.m(c2+n+c3))
p.push(r.a(k))}}r=c5.a
if(r.a)c0.r2=t.r.a(c0.y.C(0,"emissionClr"))
if(r.c)c0.ry=t.Q.a(c0.y.C(0,"emissionTxt"))
r=c5.b
if(r.a)c0.x1=t.r.a(c0.y.C(0,"ambientClr"))
if(r.c)c0.y1=t.Q.a(c0.y.C(0,"ambientTxt"))
r=c5.c
if(r.a)c0.y2=t.r.a(c0.y.C(0,"diffuseClr"))
if(r.c)c0.ay=t.Q.a(c0.y.C(0,"diffuseTxt"))
r=c5.d
if(r.a)c0.bh=t.r.a(c0.y.C(0,"invDiffuseClr"))
if(r.c)c0.da=t.Q.a(c0.y.C(0,"invDiffuseTxt"))
r=c5.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){c0.de=t.n.a(c0.y.C(0,"shininess"))
if(q)c0.dc=t.r.a(c0.y.C(0,"specularClr"))
if(r.c)c0.dd=t.Q.a(c0.y.C(0,"specularTxt"))}if(c5.f.c)c0.df=t.Q.a(c0.y.C(0,"bumpTxt"))
if(c5.db){r=t.Q
c0.dg=r.a(c0.y.C(0,"envSampler"))
q=c5.r
if(q.a)c0.dh=t.r.a(c0.y.C(0,"reflectClr"))
if(q.c)c0.di=r.a(c0.y.C(0,"reflectTxt"))
q=c5.x
p=q.a
if(!p)o=q.c
else o=!0
if(o){c0.dj=t.n.a(c0.y.C(0,"refraction"))
if(p)c0.dk=t.r.a(c0.y.C(0,"refractClr"))
if(q.c)c0.dl=r.a(c0.y.C(0,"refractTxt"))}}r=c5.y
if(r.a)c0.dm=t.n.a(c0.y.C(0,"alpha"))
if(r.c)c0.dn=t.Q.a(c0.y.C(0,"alphaTxt"))
if(c5.k1){r=c5.z
q=r.length
if(q!==0){c0.bZ=new H.u(t.J)
c0.c_=new H.u(t.u)
for(p=t.r,o=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="barLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){m=c0.y
e=g+"s["+l+"].startPnt"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
p.a(k)
m=c0.y
e=g+"s["+l+"].endPnt"
d=m.h(0,e)
if(d==null)H.n(P.m(c2+e+c3))
p.a(d)
m=c0.y
e=g+"s["+l+"].color"
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
p.a(c)
if(typeof h!=="number")return h.aj()
if((h&4)!==0){m=c0.y
e=g+"s["+l+"].att0"
b=m.h(0,e)
if(b==null)H.n(P.m(c2+e+c3))
o.a(b)
m=c0.y
e=g+"s["+l+"].att1"
a=m.h(0,e)
if(a==null)H.n(P.m(c2+e+c3))
o.a(a)
m=c0.y
e=g+"s["+l+"].att2"
a0=m.h(0,e)
if(a0==null)H.n(P.m(c2+e+c3))
o.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.ei(k,d,c,a3,a2,a1))}c0.c_.k(0,h,f)
n=c0.bZ
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.Q
q=r.length
if(q!==0){c0.c0=new H.u(t.J)
c0.c1=new H.u(t.L)
for(p=t.r,o=t.t,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.d(h)
f=[]
for(n=i.b,l=0;l<n;++l){if(typeof h!=="number")return h.aj()
m=(h&1)!==0
if(m){e=c0.y
a4=g+"s["+l+"].objUp"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].objRight"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
e=c0.y
a4=g+"s["+l+"].objDir"
c=e.h(0,a4)
if(c==null)H.n(P.m(c2+a4+c3))
p.a(c)
a5=c
a6=d
a7=k}else{a5=c1
a6=a5
a7=a6}e=c0.y
a4=g+"s["+l+"].viewDir"
k=e.h(0,a4)
if(k==null)H.n(P.m(c2+a4+c3))
p.a(k)
e=c0.y
a4=g+"s["+l+"].color"
d=e.h(0,a4)
if(d==null)H.n(P.m(c2+a4+c3))
p.a(d)
if(m){m=c0.y
e=g+"sTexture2D"+l
c=m.h(0,e)
if(c==null)H.n(P.m(c2+e+c3))
o.a(c)
a8=c}else a8=c1
f.push(new A.ej(a7,a6,a5,k,d,a8))}c0.c1.k(0,h,f)
n=c0.c0
m=c0.y
e=g+"Count"
k=m.h(0,e)
if(k==null)H.n(P.m(c2+e+c3))
n.k(0,h,k)}}r=c5.ch
q=r.length
if(q!==0){c0.c2=new H.u(t.J)
c0.c3=new H.u(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.d(h)
f=[]
for(a4=i.b,l=0;l<a4;++l){a9=c0.y
b0=g+"s["+l+"].point"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
p.a(k)
a9=c0.y
b0=g+"s["+l+"].viewPnt"
d=a9.h(0,b0)
if(d==null)H.n(P.m(c2+b0+c3))
p.a(d)
a9=c0.y
b0=g+"s["+l+"].color"
c=a9.h(0,b0)
if(c==null)H.n(P.m(c2+b0+c3))
p.a(c)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){a9=c0.y
b0=g+"s["+l+"].invViewRotMat"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
o.a(b)
b1=b}else b1=c1
if((h&1)!==0){a9=c0.y
b0=g+"sTextureCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a8=b}else a8=c1
if((h&2)!==0){a9=c0.y
b0=g+"sShadowCube"+l
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
n.a(b)
a9=c0.y
b0=g+"s["+l+"].shadowAdj"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
b2=b
b3=a}else{b2=c1
b3=b2}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
b=a9.h(0,b0)
if(b==null)H.n(P.m(c2+b0+c3))
e.a(b)
a9=c0.y
b0=g+"s["+l+"].att1"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
e.a(a)
a9=c0.y
b0=g+"s["+l+"].att2"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c1
a2=a1
a3=a2}f.push(new A.em(k,d,b1,c,a8,b2,b3,a3,a2,a1))}c0.c3.k(0,h,f)
a4=c0.c2
a9=c0.y
b0=g+"Count"
k=a9.h(0,b0)
if(k==null)H.n(P.m(c2+b0+c3))
a4.k(0,h,k)}}r=c5.cx
q=r.length
if(q!==0){c0.c4=new H.u(t.J)
c0.c5=new H.u(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.t,j=0;j<r.length;r.length===q||(0,H.l)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.d(h)
f=[]
for(e=i.b,l=0;l<e;++l){a4=c0.y
a9=g+"s["+l+"].objPnt"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
p.a(k)
a4=c0.y
a9=g+"s["+l+"].objDir"
d=a4.h(0,a9)
if(d==null)H.n(P.m(c2+a9+c3))
p.a(d)
a4=c0.y
a9=g+"s["+l+"].viewPnt"
c=a4.h(0,a9)
if(c==null)H.n(P.m(c2+a9+c3))
p.a(c)
a4=c0.y
a9=g+"s["+l+"].color"
b=a4.h(0,a9)
if(b==null)H.n(P.m(c2+a9+c3))
p.a(b)
if(typeof h!=="number")return h.aj()
if((h&3)!==0){a4=c0.y
a9=g+"s["+l+"].objUp"
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
p.a(a)
a4=c0.y
a9=g+"s["+l+"].objRight"
a0=a4.h(0,a9)
if(a0==null)H.n(P.m(c2+a9+c3))
p.a(a0)
a4=c0.y
a9=g+"s["+l+"].tuScalar"
b4=a4.h(0,a9)
if(b4==null)H.n(P.m(c2+a9+c3))
o.a(b4)
a4=c0.y
a9=g+"s["+l+"].tvScalar"
b5=a4.h(0,a9)
if(b5==null)H.n(P.m(c2+a9+c3))
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
if(a==null)H.n(P.m(c2+b0+c3))
n.a(a)
b3=a}else b3=c1
if((h&8)!==0){a9=c0.y
b0=g+"s["+l+"].cutoff"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].coneAngle"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
b8=a0
b9=a}else{b8=c1
b9=b8}if((h&4)!==0){a9=c0.y
b0=g+"s["+l+"].att0"
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
o.a(a)
a9=c0.y
b0=g+"s["+l+"].att1"
a0=a9.h(0,b0)
if(a0==null)H.n(P.m(c2+b0+c3))
o.a(a0)
a9=c0.y
b0=g+"s["+l+"].att2"
b4=a9.h(0,b0)
if(b4==null)H.n(P.m(c2+b0+c3))
o.a(b4)
a1=b4
a2=a0
a3=a}else{a1=c1
a2=a1
a3=a2}if((h&1)!==0){a9=c0.y
b0=g+"sTexture2D"+l
a=a9.h(0,b0)
if(a==null)H.n(P.m(c2+b0+c3))
m.a(a)
a8=a}else a8=c1
if(a4){a4=c0.y
a9=g+"sShadow2D"+l
a=a4.h(0,a9)
if(a==null)H.n(P.m(c2+a9+c3))
m.a(a)
b2=a}else b2=c1
f.push(new A.ep(k,d,c,b,a7,a6,b7,b6,b3,b9,b8,a3,a2,a1,a8,b2))}c0.c5.k(0,h,f)
e=c0.c4
a4=c0.y
a9=g+"Count"
k=a4.h(0,a9)
if(k==null)H.n(P.m(c2+a9+c3))
e.k(0,h,k)}}}},
ad:function(a,b){if(b!=null&&b.d>=6)a.cp(b)}}
A.fO.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fY.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hM.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.i4.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hs.prototype={
i:function(a){return this.ay}}
A.ei.prototype={}
A.ej.prototype={}
A.em.prototype={}
A.ep.prototype={}
A.dY.prototype={
bo:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
c6:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.cL(b,35633)
p.f=p.cL(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.n(P.m("Failed to link shader: "+H.d(q)))}p.fS()
p.fU()},
N:function(a){a.a.useProgram(this.r)
this.x.hm()},
cL:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.m("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
fS:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fG(n,r.name,q))}p.x=new A.fH(o)},
fU:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.o(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.hf(r.type,r.size,r.name,q))}p.y=new A.iy(o)},
aE:function(a,b,c){var s=this.a
if(a===1)return new A.ef(s,b,c)
else return A.k0(s,this.r,b,a,c)},
ex:function(a,b,c){var s=this.a
if(a===1)return new A.en(s,b,c)
else return A.k0(s,this.r,b,a,c)},
ey:function(a,b,c){var s=this.a
if(a===1)return new A.eo(s,b,c)
else return A.k0(s,this.r,b,a,c)},
bd:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
hf:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aE(b,c,d)
case 5121:return s.aE(b,c,d)
case 5122:return s.aE(b,c,d)
case 5123:return s.aE(b,c,d)
case 5124:return s.aE(b,c,d)
case 5125:return s.aE(b,c,d)
case 5126:return new A.ee(s.a,c,d)
case 35664:return new A.iu(s.a,c,d)
case 35665:return new A.eg(s.a,c,d)
case 35666:return new A.eh(s.a,c,d)
case 35667:return new A.iv(s.a,c,d)
case 35668:return new A.iw(s.a,c,d)
case 35669:return new A.ix(s.a,c,d)
case 35674:return new A.iz(s.a,c,d)
case 35675:return new A.ek(s.a,c,d)
case 35676:return new A.el(s.a,c,d)
case 35678:return s.ex(b,c,d)
case 35680:return s.ey(b,c,d)
case 35670:throw H.c(s.bd("BOOL",c))
case 35671:throw H.c(s.bd("BOOL_VEC2",c))
case 35672:throw H.c(s.bd("BOOL_VEC3",c))
case 35673:throw H.c(s.bd("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.i1.prototype={}
A.i3.prototype={}
A.is.prototype={}
A.iy.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
C:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.F()},
F:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ef.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.iw.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.it.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.ee.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.eg.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.eh.prototype={
dT:function(a){var s=a.a,r=a.b,q=a.c,p=a.d
return this.a.uniform4f(this.d,s,r,q,p)},
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.ek.prototype={
a7:function(a){var s=new Float32Array(H.cU(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.el.prototype={
a7:function(a){var s=new Float32Array(H.cU(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.en.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.eo.prototype={
cp:function(a){var s=a==null||a.d<6,r=this.a,q=this.d
if(s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jj.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ca(q.b,b).ca(q.d.ca(q.c,b),c)
q=new V.R(p.a,p.b,p.c)
if(!J.H(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a1()}a.sb2(p.G())
q=1-b
s=1-c
s=new V.aE(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.H(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a1()}}}
F.h9.prototype={
eo:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ev()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.ds())return p
return q.G()},
eq:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.a_(0,n)
q=new V.y(o.a,o.b,o.c).G()
o=r.a_(0,n)
return q.aZ(new V.y(o.a,o.b,o.c).G()).G()},
bQ:function(){var s,r=this
if(r.d!=null)return!0
s=r.eo()
if(s==null){s=r.eq()
if(s==null)return!1}r.d=s
r.a.a.a1()
return!0},
en:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ev()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.ds())return p
return q.G()},
ep:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.t().toString
if(Math.abs(p-0)<1e-9){j=b.a_(0,e)
o=new V.y(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.I(0)}else{n=(j-s.b)/p
j=b.a_(0,e)
j=new V.R(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).a_(0,h)
o=new V.y(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.I(0)}j=l.d
if(j!=null){m=j.G()
o=m.aZ(o).G().aZ(m).G()}return o},
bO:function(){var s,r=this
if(r.e!=null)return!0
s=r.en()
if(s==null){s=r.ep()
if(s==null)return!1}r.e=s
r.a.a.a1()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.b.ag(J.a0(q.e),0)+", "+C.b.ag(J.a0(r.b.e),0)+", "+C.b.ag(J.a0(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
F:function(){return this.w("")}}
F.hk.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.b.ag(J.a0(s.e),0)+", "+C.b.ag(J.a0(this.b.e),0)},
F:function(){return this.w("")}}
F.hL.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.ag(J.a0(s.e),0)},
F:function(){return this.w("")}}
F.hV.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
hw:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.Y()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){p=e[q]
f.a.l(0,p.he())}f.a.Y()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
l=n[m]
f.b.a.a.l(0,l)
m=new F.hL()
if(l.a==null)H.n(P.m("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.v(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.c.a
n.a.l(0,j)
n.a.l(0,i)
F.md(j,i)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.Y()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.e(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.Y()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.e(n,m)
g=n[m]
m=f.d.a
m.a.l(0,j)
m.a.l(0,i)
m.a.l(0,g)
F.c5(j,i,g)}e=f.e
if(e!=null)e.aq(0)},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ax()||!1
if(!r.a.ax())s=!1
q=r.e
if(q!=null)q.aq(0)
return s},
bN:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.a6().a)!==0?1:0
if((s&$.aU().a)!==0)++r
if((s&$.aT().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.aV().a)!==0)++r
if((s&$.d1().a)!==0)++r
if((s&$.d2().a)!==0)++r
if((s&$.bU().a)!==0)++r
if((s&$.aS().a)!==0)++r
q=a5.gcr(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.h5(l)
j=k.gcr(k)
n[l]=new Z.fQ(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].ht(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cU(o)),35044)
s.bindBuffer(a2,null)
b=new Z.bm(new Z.ex(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.Y()
a.push(h.e)}a0=Z.k2(s,34963,a)
b.b.push(new Z.c8(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.Y()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.Y()
a.push(h.e)}a0=Z.k2(s,34963,a)
b.b.push(new Z.c8(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.Y()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.Y()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.Y()
a.push(h.e)}a0=Z.k2(s,34963,a)
b.b.push(new Z.c8(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.w(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.w(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.w(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.w(r))}return C.a.p(q,"\n")},
a1:function(){var s=this.e
if(s!=null)s.v(null)}}
F.hW.prototype={
h3:function(a){var s,r,q,p,o=[],n=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.l(0,n)
s.a.l(0,q)
s.a.l(0,p)
o.push(F.c5(n,q,p))}return o},
h4:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
f.push(F.c5(k,j,h))
s.a.l(0,k)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.c5(k,h,g))}else{l.l(0,j)
s.a.l(0,h)
s.a.l(0,g)
f.push(F.c5(j,h,g))
s.a.l(0,j)
s.a.l(0,g)
s.a.l(0,k)
f.push(F.c5(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bQ())q=!1
return q},
bP:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bO())q=!1
return q},
i:function(a){return this.F()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
F:function(){return this.w("")}}
F.hX.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.F()},
w:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q.push(r[s].w(a+(""+s+". ")))}return C.a.p(q,"\n")},
F:function(){return this.w("")}}
F.hY.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.F()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
F:function(){return this.w("")}}
F.iG.prototype={
bS:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iH(s.cx,p,m,r,q,o,n,a,l)},
he:function(){return this.bS(null)},
sb2:function(a){var s
if(!J.H(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a1()}},
ht:function(a){var s,r=this
if(a.n(0,$.a6())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aU())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aT())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.bi())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.aV())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.d1())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.d2())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bU()))return[r.ch]
else if(a.n(0,$.aS())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bQ:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ev()
r.d.E(0,new F.iP(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
bO:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ev()
r.d.E(0,new F.iO(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.a1()
q=r.a.e
if(q!=null)q.aq(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.F()},
w:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ag(J.a0(q.e),0))
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
r=C.a.p(o,", ")
return a+"{"+r+"}"},
F:function(){return this.w("")}}
F.iP.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.iO.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.iI.prototype={
Y:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a1()
return!0},
bf:function(a,b,c,d,e,f){var s=F.iH(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bQ()
return!0},
bP:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bO()
return!0},
h8:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.H(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.v(null)}}}}return!0},
i:function(a){return this.F()},
w:function(a){var s,r,q,p
this.Y()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p)s.push(r[p].w(a))
return C.a.p(s,"\n")},
F:function(){return this.w("")}}
F.iJ.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.iK(s,b))
C.a.E(s.d,new F.iL(s,b))},
i:function(a){return this.F()},
F:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.iK.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.iL.prototype={
$1:function(a){var s=this.a
if(!J.H(a.a,s)&&!J.H(a.b,s))this.b.$1(a)}}
F.iM.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.F()},
F:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.iN.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.F()},
F:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
O.dz.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.x():s},
O:function(a){var s=this.fr
if(s!=null)s.v(a)},
aW:function(){return this.O(null)},
cT:function(a){this.a=null
this.O(a)},
fQ:function(){return this.cT(null)},
eS:function(a,b){var s=new D.al()
s.b=!0
this.O(s)},
eU:function(a,b){var s=new D.am()
s.b=!0
this.O(s)},
cJ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.u(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.gao()
n=d.h(0,p.gao())
d.k(0,o,n==null?1:n)}m=[]
d.E(0,new O.hw(f,m))
C.a.aT(m,new O.hx())
l=new H.u(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.E(0,new O.hy(f,k))
C.a.aT(k,new O.hz())
j=new H.u(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.gao()
n=j.h(0,p.gao())
j.k(0,o,n==null?1:n)}i=[]
j.E(0,new O.hA(f,i))
C.a.aT(i,new O.hB())
h=new H.u(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.l)(e),++q){p=e[q]
r=p.gao()
o=h.h(0,p.gao())
h.k(0,r,o==null?1:o)}g=[]
h.E(0,new O.hC(f,g))
C.a.aT(g,new O.hD())
e=C.c.a0(f.e.a.length+3,4)
f.dy.toString
return A.mi(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
ac:function(a,b){if(b!=null)if(!C.a.K(a,b)){b.a=a.length
a.push(b)}},
ah:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.S(s,s.length);s.t();){r=s.d
r.toString
q=$.iF
if(q==null)q=$.iF=new V.y(0,0,1)
r.a=q
p=$.iE
r.d=p==null?$.iE=new V.y(0,1,0):p
p=$.iD
r.e=p==null?$.iD=new V.y(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.bm(q).G()
r.d=o.bm(r.d).G()
r.e=o.bm(r.e).G()}}}},
cj:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cJ()
s=b4.fr.h(0,b3.ay)
if(s==null){s=A.mh(b3,b4.a)
b4.bL(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bh
b3=b5.e
if(!(b3 instanceof Z.bm))b3=b5.e=null
if(b3==null||!b3.d.n(0,q)){b3=r.k4
if(b3)b5.d.ax()
p=r.r1
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.d.bP()
o.a.bP()
o=o.e
if(o!=null)o.aq(0)}o=r.rx
if(o){n=b5.d
m=n.e
if(m!=null)++m.d
n.a.h8()
n=n.e
if(n!=null)n.aq(0)}l=b5.d.bN(new Z.cv(b4.a),q)
l.ap($.a6()).e=b2.a.Q.c
if(b3)l.ap($.aU()).e=b2.a.cx.c
if(p)l.ap($.aT()).e=b2.a.ch.c
if(r.r2)l.ap($.bi()).e=b2.a.cy.c
if(o)l.ap($.aV()).e=b2.a.db.c
if(r.ry)l.ap($.aS()).e=b2.a.dx.c
b5.e=l}k=[]
b2.a.N(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.gR(p)
b3=b3.dy
b3.toString
b3.a7(p.a2(0,!0))}if(r.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gR(p)
o=b4.dx
o=b4.cx=p.q(0,o.gR(o))
p=o}b3=b3.fr
b3.toString
b3.a7(p.a2(0,!0))}b3=b2.a
p=b4.gdH()
b3=b3.fy
b3.toString
b3.a7(p.a2(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.gR(p)
b3=b3.fx
b3.toString
b3.a7(p.a2(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a7(C.h.a2(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a7(C.h.a2(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a7(C.h.a2(p,!0))}if(r.bg>0){j=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,j)
for(i=0;i<j;++i){b3=b2.a
p=b2.e.a
if(i>=p.length)return H.e(p,i)
p=p[i]
b3=b3.r1
if(i>=b3.length)return H.e(b3,i)
b3=b3[i]
h=new Float32Array(H.cU(p.a2(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,h)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.f.e)
b3=b2.a
p=b2.f.e
b3.ad(b3.ry,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.r.e)
b3=b2.a
p=b2.r.e
b3.ad(b3.y1,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.x.e)
b3=b2.a
p=b2.x.e
b3.ad(b3.ay,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bh
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.y.e)
b3=b2.a
p=b2.y.e
b3.ad(b3.da,p)}b3=r.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.de
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dc
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.z.e)
b3=b2.a
p=b2.z.e
b3.ad(b3.dd,p)}b3=r.z
if(b3.length>0){g=new H.u(t.a)
for(p=b2.dx.e,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gao()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
b=J.d3(b2.a.c_.h(0,d),c)
n=e.gi8()
m=$.as
n=n.b4(m==null?$.as=new V.R(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gie()
m=$.as
n=n.b4(m==null?$.as=new V.R(0,0,0):m)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaK(e)
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
if(e.gd8()){n=e.gd0()
m=b.e
m.a.uniform1f(m.d,n)
n=e.gd1()
m=b.f
m.a.uniform1f(m.d,n)
n=e.gd2()
m=b.r
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=g.h(0,o)
if(j==null)j=0
o=b2.a.bZ.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.gR(p)
a0=new H.u(t.a)
for(p=b2.dx.f,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
b=J.d3(b2.a.c1.h(0,0),c)
n=a.bm(e.a).G()
m=b.e
a1=n.a
a2=n.b
n=n.c
m.a.uniform3f(m.d,a1,a2,n)
n=e.c
a2=b.f
a2.a.uniform3f(a2.d,n.a,n.b,n.c)}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a0.h(0,o)
if(j==null)j=0
o=b2.a.c0.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.gR(p)
a3=new H.u(t.a)
for(p=b2.dx.r,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gao()
c=a3.h(0,d)
if(c==null)c=0
a3.k(0,d,c+1)
b=J.d3(b2.a.c3.h(0,d),c)
a4=a.q(0,e.gR(e))
n=e.gR(e)
m=$.as
n=n.b4(m==null?$.as=new V.R(0,0,0):m)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=$.as
n=a4.b4(n==null?$.as=new V.R(0,0,0):n)
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaK(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaB()
n=a4.c7(0)
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
h=new Float32Array(H.cU(new V.dA(m,a1,a2,a5,a6,a7,a8,a9,n).a2(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,h)
e.gaB()
n=e.gaB()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaB()
m=n.gb_(n)
if(m){m=b.f
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}e.gaS()
n=e.gdU()
m=b.x
m.toString
a1=n.ghj(n)
a2=n.ghk(n)
a5=n.ghl()
n=n.ghi()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaS()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaS()
m=n.gb_(n)
if(m){m=b.r
a1=n.d
a2=m.a
m=m.d
if(a1<6)a2.uniform1i(m,0)
else a2.uniform1i(m,n.a)}if(e.gd8()){n=e.gd0()
m=b.y
m.a.uniform1f(m.d,n)
n=e.gd1()
m=b.z
m.a.uniform1f(m.d,n)
n=e.gd2()
m=b.Q
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=a3.h(0,o)
if(j==null)j=0
o=b2.a.c2.h(0,o)
o.a.uniform1i(o.d,j)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.gR(p)
b1=new H.u(t.a)
for(p=b2.dx.x,o=p.length,f=0;f<p.length;p.length===o||(0,H.l)(p),++f){e=p[f]
d=e.gao()
c=b1.h(0,d)
if(c==null)c=0
b1.k(0,d,c+1)
b=J.d3(b2.a.c5.h(0,d),c)
n=e.ghM(e)
m=b.b
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gib(e).G()
m=b.c
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=a.b4(e.ghM(e))
m=b.d
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gaK(e)
m=b.e
m.a.uniform3f(m.d,n.a,n.b,n.c)
e.gaB()
n=e.gbn()
m=b.f
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.gck(e)
m=b.r
m.a.uniform3f(m.d,n.a,n.b,n.c)
n=e.giq()
m=b.x
m.a.uniform1f(m.d,n)
n=e.gir()
m=b.y
m.a.uniform1f(m.d,n)
e.gaB()
n=e.gaB()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaB()
m=n.gb_(n)
if(m){m=b.dx
m.toString
a1=n.gb_(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.ghq(n))}e.gaS()
n=e.gdU()
m=b.z
m.toString
a1=n.ghj(n)
a2=n.ghk(n)
a5=n.ghl()
n=n.ghi()
m.a.uniform4f(m.d,a1,a2,a5,n)
n=e.gaS()
if(!C.a.K(k,n)){n.a=k.length
k.push(n)}n=e.gaS()
m=n.gb_(n)
if(m){m=b.dy
m.toString
a1=n.gb_(n)
a2=m.a
m=m.d
if(!a1)a2.uniform1i(m,0)
else a2.uniform1i(m,n.ghq(n))}if(e.gic()){n=e.gia()
m=b.Q
m.a.uniform1f(m.d,n)
n=e.gi9()
m=b.ch
m.a.uniform1f(m.d,n)}if(e.gd8()){n=e.gd0()
m=b.cx
m.a.uniform1f(m.d,n)
n=e.gd1()
m=b.cy
m.a.uniform1f(m.d,n)
n=e.gd2()
m=b.db
m.a.uniform1f(m.d,n)}}for(p=b3.length,f=0;f<b3.length;b3.length===p||(0,H.l)(b3),++f){o=b3[f].a
j=b1.h(0,o)
if(j==null)j=0
o=b2.a.c4.h(0,o)
o.a.uniform1i(o.d,j)}}}if(r.f.c){b2.ac(k,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.ad(b3.df,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gR(p).c7(0)}b3=b3.id
b3.toString
b3.a7(p.a2(0,!0))}if(r.db){b2.ac(k,b2.ch)
b3=b2.a
p=b2.ch
b3.ad(b3.dg,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dh
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.ad(b3.di,p)}b3=r.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.dj
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dk
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(k,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.ad(b3.dl,p)}}b3=r.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.dm
p.a.uniform1f(p.d,n)}if(b3.c){b2.ac(k,b2.db.e)
p=b2.a
n=b2.db.e
p.ad(p.dn,n)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].N(b4)
p=b5.e
p.N(b4)
p.a6(b4)
p.aa(b4)
if(o)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,i=0;i<k.length;++i){p=k[i]
if(p.c){p.c=!1
b3.activeTexture(33984+p.a)
b3.bindTexture(34067,null)}}p=b2.a
p.toString
b3.useProgram(null)
p.x.bW()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cJ().ay}}
O.hw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fO(a,C.c.a0(b+3,4)*4))}}
O.hx.prototype={
$2:function(a,b){return J.d4(a.a,b.a)}}
O.hy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fY(a,C.c.a0(b+3,4)*4))}}
O.hz.prototype={
$2:function(a,b){return J.d4(a.a,b.a)}}
O.hA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hM(a,C.c.a0(b+3,4)*4))}}
O.hB.prototype={
$2:function(a,b){return J.d4(a.a,b.a)}}
O.hC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.i4(a,C.c.a0(b+3,4)*4))}}
O.hD.prototype={
$2:function(a,b){return J.d4(a.a,b.a)}}
O.hq.prototype={
au:function(){var s,r=this
r.cv()
s=r.f
$.t().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.p(r.b,s,1)
s.b=!0
r.a.O(s)}}}
O.cg.prototype={
O:function(a){return this.a.O(a)},
aW:function(){return this.O(null)},
au:function(){},
bH:function(a){var s,r,q=this
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
s.O(null)}},
sb2:function(a){var s,r=this,q=r.c
if(!q.c)r.bH(new A.T(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().J(0,r.gaD())
s=r.e
r.e=a
a.gm().l(0,r.gaD())
q=new D.p(r.b+".textureCube",s,r.e)
q.b=!0
r.a.O(q)}}}
O.hr.prototype={}
O.aq.prototype={
cV:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.p(q.b+".color",s,a)
r.b=!0
q.a.O(r)}},
au:function(){this.cv()
this.cV(new V.E(1,1,1))},
saK:function(a,b){this.bH(new A.T(!0,!1,this.c.c))
this.cV(b)}}
O.ht.prototype={}
O.hu.prototype={
au:function(){var s,r=this
r.cw()
s=r.ch
$.t().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.p(r.b+".refraction",s,1)
s.b=!0
r.a.O(s)}}}
O.hv.prototype={
cW:function(a){var s=this,r=s.ch
$.t().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.p(s.b+".shininess",r,a)
r.b=!0
s.a.O(r)}},
au:function(){this.cw()
this.cW(100)}}
O.dZ.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
O:function(a){var s=this.e
if(s!=null)s.v(a)},
aW:function(){return this.O(null)},
cj:function(a,b){var s,r,q,p,o,n,m=this,l="Skybox"
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.i1(r,l)
s.bo(r,l)
s.c6(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.z=s.x.h(0,"posAttr")
r=t.n
s.Q=r.a(s.y.h(0,"fov"))
s.ch=r.a(s.y.h(0,"ratio"))
s.cx=t.r.a(s.y.h(0,"boxClr"))
s.cy=t.Q.a(s.y.h(0,"boxTxt"))
s.db=t.q.a(s.y.h(0,"viewMat"))
a.bL(s)}m.a=s}if(b.e==null){r=b.d.bN(new Z.cv(a.a),$.a6())
r.ap($.a6()).e=m.a.z.c
b.e=r}r=m.c
if(r!=null){r.a=1
r.N(a)}r=a.d
q=a.c
p=m.a
p.N(a)
o=m.b
n=p.Q
n.a.uniform1f(n.d,o)
o=p.ch
o.a.uniform1f(o.d,r/q)
q=m.c
p.cy.cp(q)
q=m.d
r=p.cx
r.a.uniform3f(r.d,q.a,q.b,q.c)
q=a.db
q=q.gR(q).c7(0)
p=p.db
p.toString
p.a7(q.a2(0,!0))
r=b.e
if(r instanceof Z.bm){r.N(a)
r.a6(a)
r.aa(a)}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.bW()
r=m.c
if(r!=null)r.aa(a)}}
O.i2.prototype={
gm:function(){var s=this.c
return s==null?this.c=D.x():s},
ah:function(a,b){},
cj:function(a,b){var s,r,q,p=this,o="SolidColor",n=p.a
if(n==null){s=a.fr.h(0,o)
if(s==null){n=a.a
s=new A.i3(n,o)
s.bo(n,o)
s.c6(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
s.z=s.x.h(0,"posAttr")
s.Q=t.y.a(s.y.h(0,"color"))
s.ch=t.q.a(s.y.h(0,"projViewObjMat"))
a.bL(s)}p.a=s
n=s}r=b.e
if((!(r instanceof Z.bm)?b.e=null:r)==null){n=b.d.bN(new Z.cv(a.a),$.a6())
r=n.ap($.a6())
q=p.a
r.e=q.z.c
b.e=n
n=q}n.N(a)
r=p.b
n.Q.dT(r)
r=a.gdH()
n=n.ch
n.toString
n.a7(r.a2(0,!0))
r=b.e
r.N(a)
r.a6(a)
r.aa(a)
r=p.a
r.toString
a.a.useProgram(null)
r.x.bW()}}
O.ia.prototype={}
T.de.prototype={
b7:function(a){},
ed:function(){return this.b7(null)},
aw:function(a){var s,r=this
if(r.b!=null)return!1
r.b=a
a.c.gbX().l(0,r.geH())
r.b.c.gaO().l(0,r.geJ())
r.b.c.gbn().l(0,r.geL())
s=r.b.e
s.gcs(s).l(0,r.gh_())
r.b.e.gaO().l(0,r.gfY())
s=r.b.e
s.gd9(s).l(0,r.gfW())
return!0},
eI:function(a){if(!t._.a(a).x.b.n(0,this.c))return
this.ch=this.Q=!0},
eK:function(a){var s,r=this
if(!r.Q)return
if(r.ch){t._.a(a)
s=a.y.V(a.d)
if(s.Z(s)<r.z)return
r.ch=!1}},
eM:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.cR(a)},
h0:function(a){this.ch=this.Q=!0},
fZ:function(a){var s,r=this
if(!r.Q)return
if(r.ch){t.m.a(a)
s=a.y.V(a.d)
if(s.Z(s)<r.z)return
r.ch=!1}},
fX:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.cR(a)},
cR:function(a){var s,r,q,p,o,n,m,l,k
t._.a(a)
s=a.d
r=s.a
q=a.c
p=r/q.c
o=s.b/q.d
q=this.a
s=this.d
n=C.j.aM(p*(s.r-1))
m=C.j.aM(o*(s.x-1))
q=q.a
r=s.x
q.bindFramebuffer(36160,q.createFramebuffer())
q.readBuffer(36064)
q.framebufferTexture2D(36160,36064,3553,s.b,0)
l=new Uint8Array(4)
q.readPixels(n,r-1-m,1,1,6408,5121,l)
q.bindFramebuffer(36160,null)
new T.ii(l,1,1).eC()
s=l.length
if(0>=s)return H.e(l,0)
r=l[0]
if(1>=s)return H.e(l,1)
q=l[1]
if(2>=s)return H.e(l,2)
k=l[2]
if(3>=s)return H.e(l,3)
k=new T.bW(new V.W(p,o),V.dd(r,q,k,l[3]))
k.b=!0
q=this.x
if(q!=null)q.v(k)}}
T.bW.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.ib.prototype={}
T.ic.prototype={}
T.id.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.x():s}}
T.ie.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.x():s},
N:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aa:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.ig.prototype={
du:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.ie()
s.a=0
s.b=i
s.c=!1
s.d=0
r.aF(s,i,p,34069,!1,!1)
r.aF(s,i,m,34070,!1,!1)
r.aF(s,i,o,34071,!1,!1)
r.aF(s,i,l,34072,!1,!1)
r.aF(s,i,n,34073,!1,!1)
r.aF(s,i,k,34074,!1,!1)
return s},
dt:function(a){return this.du(a,".png")},
aF:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.M(s,"load",new T.ih(this,s,!1,b,!1,d,a),!1)},
fR:function(a,b,c){var s,r,q,p
b=V.d0(b)
s=V.d0(a.width)
r=V.d0(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.jK()
q.width=s
q.height=r
p=C.f.dQ(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.o4(p.getImageData(0,0,q.width,q.height))}}}
T.ih.prototype={
$1:function(a){var s=this,r=s.a,q=r.fR(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,s.e?1:0)
C.u.i_(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.bY()}++r.e}}
T.ii.prototype={
eC:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.c.a0(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.e(p,f)
d=p[f]
if(e<0||e>=o)return H.e(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.fN.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.x():s},
X:function(a){var s=this.fr
if(s!=null)s.v(a)},
sai:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
s=new D.p("width",s,b)
s.b=!0
r.X(s)}},
sae:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
s=new D.p("height",s,b)
s.b=!0
r.X(s)}},
N:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
q=g.r
if(typeof r!=="number")return r.q()
g.sai(0,C.d.T(r*q))
s=s.drawingBufferHeight
q=g.x
if(typeof s!=="number")return s.q()
g.sae(0,C.d.T(s*q))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=s.getParameter(3379)
n=V.d0(q)
m=V.d0(p)
o=V.d0(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.u.dL(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.kT(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.bY()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
r=r.y
if(r!=null)r.bY()
r=g.ch
q=r.b
g.z=q
g.c=r.r
g.d=r.x
s.bindTexture(e,q)
r=s.createRenderbuffer()
g.Q=r
s.bindRenderbuffer(d,r)
s.renderbufferStorage(d,33189,g.c,g.d)
r=s.createFramebuffer()
g.y=r
s.bindFramebuffer(c,r)
s.framebufferTexture2D(c,36064,e,g.z,0)
s.framebufferRenderbuffer(c,36096,d,g.Q)
s.bindTexture(e,f)
s.bindRenderbuffer(d,f)
s.bindFramebuffer(c,f)}s=a.a
s.bindFramebuffer(c,g.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
r=g.dy
q=r.c
a.c=C.d.T(q*g.a)
p=r.d
a.d=C.d.T(p*g.b)
j=r.a
i=g.c
h=C.d.T(j*i)
r=r.b
j=g.d
s.viewport(h,C.d.T(r*j),C.d.T(q*i),C.d.T(p*j))
s.clearDepth(g.db)
r=g.cx
s.clearColor(r.a,r.b,r.c,r.d)
s.clear(16640)},
aa:function(a){a.a.bindFramebuffer(36160,null)}}
X.jJ.prototype={}
X.hd.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.x():s},
N:function(a){var s,r,q,p,o,n,m,l=this,k=a.a
k.bindFramebuffer(36160,null)
k.enable(2884)
k.enable(2929)
k.depthFunc(513)
s=k.drawingBufferWidth
r=k.drawingBufferHeight
q=l.r
p=q.a
if(typeof s!=="number")return H.o(s)
o=C.d.T(p*s)
p=q.b
if(typeof r!=="number")return H.o(r)
n=C.d.T(p*r)
p=C.d.T(q.c*s)
a.c=p
q=C.d.T(q.d*r)
a.d=q
k.viewport(o,n,p,q)
k.clearDepth(l.c)
if(l.b){q=l.a
k.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
k.clear(m)},
aa:function(a){}}
X.hf.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.x():s},
N:function(a){var s
a.cy.bk(V.bz())
s=V.bz()
a.db.bk(s)},
aa:function(a){a.cy.aA()
a.db.aA()}}
X.dN.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.x():s},
X:function(a){var s=this.f
if(s!=null)s.v(a)},
eh:function(){return this.X(null)},
N:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.ar(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bk(i)
p=$.kH
if(p==null){p=V.kJ()
o=V.k1()
n=$.l_
p=V.kz(p,o,n==null?$.l_=new V.y(0,0,-1):n)
$.kH=p
s=p}else s=p
p=q.b
if(p!=null){r=p.ar(0,a,q)
if(r!=null)s=r.q(0,s)}a.db.bk(s)},
aa:function(a){a.cy.aA()
a.db.aA()}}
X.i8.prototype={}
V.jB.prototype={
$1:function(a){var s=C.d.dN(this.a.gho(),2)
if(s!=="0.00")P.ki(s+" fps")}}
V.hZ.prototype={
e2:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.M(o,"scroll",new V.i0(m),!1)},
d_:function(a){var s,r,q,p,o,n,m,l
this.fT()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.hs(a)
q.toString
p=new H.J(p)
p=new P.bN(q.dO(new H.by(p,p.gj(p))).a())
for(;p.t();){q=p.gD(p)
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
if(H.lw(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.n6(C.L,q,C.p,!1)
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
fT:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.il()
s.a=new H.u(t.V)
s.b=new H.u(t.w)
s.c=P.kx(t.bw)
s.d=s.H(0,p)
r=s.H(0,p).p(0,o)
q=K.V(new H.J("*"))
r.a.push(q)
r.c=!0
r=s.H(0,o).p(0,o)
q=new K.aC()
q.a=[]
r.a.push(q)
r=K.V(new H.J("*"))
q.a.push(r)
r=s.H(0,o).p(0,"BoldEnd")
q=K.V(new H.J("*"))
r.a.push(q)
r.c=!0
r=s.H(0,p).p(0,n)
q=K.V(new H.J("_"))
r.a.push(q)
r.c=!0
r=s.H(0,n).p(0,n)
q=new K.aC()
q.a=[]
r.a.push(q)
r=K.V(new H.J("_"))
q.a.push(r)
r=s.H(0,n).p(0,m)
q=K.V(new H.J("_"))
r.a.push(q)
r.c=!0
r=s.H(0,p).p(0,l)
q=K.V(new H.J("`"))
r.a.push(q)
r.c=!0
r=s.H(0,l).p(0,l)
q=new K.aC()
q.a=[]
r.a.push(q)
r=K.V(new H.J("`"))
q.a.push(r)
r=s.H(0,l).p(0,"CodeEnd")
q=K.V(new H.J("`"))
r.a.push(q)
r.c=!0
r=s.H(0,p).p(0,k)
q=K.V(new H.J("["))
r.a.push(q)
r.c=!0
r=s.H(0,k).p(0,j)
q=K.V(new H.J("|"))
r.a.push(q)
q=s.H(0,k).p(0,i)
r=K.V(new H.J("]"))
q.a.push(r)
q.c=!0
q=s.H(0,k).p(0,k)
r=new K.aC()
r.a=[]
q.a.push(r)
q=K.V(new H.J("|]"))
r.a.push(q)
q=s.H(0,j).p(0,i)
r=K.V(new H.J("]"))
q.a.push(r)
q.c=!0
q=s.H(0,j).p(0,j)
r=new K.aC()
r.a=[]
q.a.push(r)
q=K.V(new H.J("|]"))
r.a.push(q)
s.H(0,p).p(0,h).a.push(new K.fD())
q=s.H(0,h).p(0,h)
r=new K.aC()
r.a=[]
q.a.push(r)
q=K.V(new H.J("*_`["))
r.a.push(q)
q=s.H(0,"BoldEnd")
q.d=q.a.b3(o)
q=s.H(0,m)
q.d=q.a.b3(n)
q=s.H(0,"CodeEnd")
q.d=q.a.b3(l)
q=s.H(0,i)
q.d=q.a.b3("Link")
q=s.H(0,h)
q.d=q.a.b3(h)
this.b=s}}
V.i0.prototype={
$1:function(a){P.kV(C.i,new V.i_(this.a))}}
V.i_.prototype={
$0:function(){var s=C.d.T(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
U.jw.prototype={
$1:function(a){var s,r,q
for(s=this.a,r=0;r<s.length;++r){q=s[r]
q.sbU(0.99*q.e)
q.sbV(0.99*q.f)}}}
U.jx.prototype={
$1:function(a){var s,r,q,p=t.l.a(a).d.i4()
for(s=this.a,r=0;r<s.length;++r)if(s[r].n(0,p)){s=this.b
if(r>=s.length)return H.e(s,r)
q=s[r]
q.sbU(1.21)
q.sbV(1.31)
s=this.c
s.shO(0,C.q.dv()*2.8+0.2)
s.si6(0,C.q.dv()*0.8+0.2)
P.ol(s.a.play(),t.z)
break}}};(function aliases(){var s=J.a.prototype
s.dX=s.i
s=J.b2.prototype
s.dY=s.i
s=K.dp.prototype
s.dW=s.aN
s.cu=s.i
s=O.cg.prototype
s.cv=s.au
s=O.aq.prototype
s.cw=s.au})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_0i
s(J,"nj","mb",23)
r(P,"nY","mJ",6)
r(P,"nZ","mK",6)
r(P,"o_","mL",6)
q(P,"lo","nT",9)
r(W,"pt","h2",24)
var k
p(k=F.dP.prototype,"gf8","f9",3)
p(k,"gf6","f7",3)
o(k=E.br.prototype,"gdC",0,0,null,["$1","$0"],["dD","hD"],0,0)
o(k,"gdE",0,0,null,["$1","$0"],["dF","hE"],0,0)
o(k,"gdA",0,0,null,["$1","$0"],["dB","hC"],0,0)
o(k,"gdw",0,0,null,["$1","$0"],["dz","hz"],0,0)
n(k,"ghx","hy",4)
n(k,"ghA","hB",4)
o(k=E.e9.prototype,"gcz",0,0,null,["$1","$0"],["cB","cA"],0,0)
m(k,"ghS","dI",9)
p(k=X.eu.prototype,"gfa","fb",3)
p(k,"geV","eW",3)
p(k,"gf0","f1",2)
p(k,"gfe","ff",10)
p(k,"gfc","fd",10)
p(k,"gfi","fj",2)
p(k,"gfm","fn",2)
p(k,"gf4","f5",2)
p(k,"gfk","fl",2)
p(k,"gf2","f3",2)
p(k,"gfo","fp",21)
p(k,"gfq","fs",3)
p(k,"gfJ","fK",5)
p(k,"gfF","fG",5)
p(k,"gfH","fI",5)
o(D.bq.prototype,"ge3",0,0,null,["$1","$0"],["as","e4"],0,0)
o(k=D.cc.prototype,"gcP",0,0,null,["$1","$0"],["cQ","fg"],0,0)
p(k,"gft","fu",22)
n(k,"geP","eQ",11)
n(k,"gfz","fA",11)
l(V.W.prototype,"gj","c9",12)
l(V.y.prototype,"gj","c9",12)
o(k=U.bu.prototype,"gaG",0,0,null,["$1","$0"],["A","a5"],0,0)
n(k,"ge5","e6",13)
n(k,"gfv","fw",13)
o(k=U.cs.prototype,"gaG",0,0,null,["$1","$0"],["A","a5"],0,0)
p(k,"gbp","bq",1)
p(k,"gbr","bs",1)
p(k,"gbt","bu",1)
o(k=U.ct.prototype,"gaG",0,0,null,["$1","$0"],["A","a5"],0,0)
p(k,"gbp","bq",1)
p(k,"gbr","bs",1)
p(k,"gbt","bu",1)
p(k,"geD","eE",1)
p(k,"geF","eG",1)
p(k,"geb","ec",1)
p(k,"ge9","ea",1)
p(k,"ge7","e8",1)
p(U.cu.prototype,"geN","eO",1)
o(k=M.bX.prototype,"gU",0,0,null,["$1","$0"],["S","aV"],0,0)
n(k,"gfB","fC",14)
n(k,"gfD","fE",14)
o(M.bZ.prototype,"gU",0,0,null,["$1","$0"],["S","aV"],0,0)
o(k=M.c4.prototype,"gU",0,0,null,["$1","$0"],["S","aV"],0,0)
n(k,"geX","eY",4)
n(k,"geZ","f_",4)
o(k=O.dz.prototype,"gaD",0,0,null,["$1","$0"],["O","aW"],0,0)
o(k,"gfP",0,0,null,["$1","$0"],["cT","fQ"],0,0)
n(k,"geR","eS",15)
n(k,"geT","eU",15)
o(O.cg.prototype,"gaD",0,0,null,["$1","$0"],["O","aW"],0,0)
o(O.dZ.prototype,"gaD",0,0,null,["$1","$0"],["O","aW"],0,0)
o(k=T.de.prototype,"gcC",0,0,null,["$1","$0"],["b7","ed"],0,0)
p(k,"geH","eI",1)
p(k,"geJ","eK",1)
p(k,"geL","eM",1)
p(k,"gh_","h0",1)
p(k,"gfY","fZ",1)
p(k,"gfW","fX",1)
o(X.dN.prototype,"geg",0,0,null,["$1","$0"],["X","eh"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.jS,J.a,J.S,P.cB,P.f,H.by,P.dr,H.c6,H.es,H.iq,P.B,H.hK,H.cK,H.bn,P.ap,H.hl,H.dw,H.hh,H.ac,H.eQ,P.cO,P.bM,P.bN,P.eD,P.eR,P.ai,P.ez,P.e4,P.e5,P.cq,P.d8,P.ji,P.cH,P.ja,P.cA,P.A,P.dc,P.jh,P.bd,P.a9,P.P,P.aX,P.dM,P.co,P.eN,P.hc,P.ao,P.dx,P.U,P.at,P.fg,P.L,P.ba,W.fU,W.jO,W.k3,W.D,W.c7,P.cQ,P.j7,P.f6,K.fD,K.dp,K.hU,L.e3,L.ea,L.eb,L.il,F.fJ,F.dP,O.bo,O.ch,E.fP,E.br,E.bl,E.bE,E.eK,E.hO,E.e9,Z.ex,Z.cv,Z.bm,Z.c8,Z.aJ,D.fR,D.bs,D.O,X.db,X.du,X.hj,X.hn,X.a2,X.hJ,X.im,X.eu,D.bq,D.an,V.E,V.a1,V.h5,V.dA,V.aB,V.a4,V.R,V.aE,V.dU,V.W,V.y,U.cs,U.ct,U.cu,M.bZ,M.c4,M.ad,A.fG,A.fH,A.T,A.fO,A.fY,A.hM,A.i4,A.hs,A.ei,A.ej,A.em,A.ep,A.is,A.iy,F.h9,F.hk,F.hL,F.hV,F.hW,F.hX,F.hY,F.iG,F.iI,F.iJ,F.iM,F.iN,O.ia,O.cg,O.ht,T.de,T.ig,T.ii,X.i8,X.jJ,X.hf,X.dN,V.hZ])
q(J.a,[J.hg,J.bw,J.b2,J.aa,J.b1,J.az,H.cj,W.b,W.fC,W.da,W.ak,W.F,W.eF,W.a8,W.fX,W.fZ,W.eG,W.c1,W.eI,W.h_,W.h,W.eO,W.aZ,W.he,W.eT,W.b0,W.hm,W.hE,W.eX,W.eY,W.b5,W.eZ,W.f0,W.b7,W.f4,W.f7,W.b8,W.f8,W.b9,W.fd,W.aH,W.fi,W.ik,W.bb,W.fk,W.io,W.iA,W.fq,W.fs,W.fu,W.fw,W.fy,P.bx,P.eV,P.bD,P.f2,P.hN,P.fe,P.bH,P.fm,P.fI,P.eA,P.dV,P.fb])
q(J.b2,[J.dO,J.bI,J.ag])
r(J.ds,J.aa)
q(J.b1,[J.cb,J.ca])
r(P.cd,P.cB)
q(P.cd,[H.bJ,W.eC,W.eB,P.dm])
r(H.J,H.bJ)
q(P.f,[H.i,H.b4,H.cw,P.c9])
r(H.c2,H.b4)
q(P.dr,[H.cf,H.ey])
q(P.B,[H.dI,H.dt,H.er,H.dW,H.eL,P.d7,P.dJ,P.a7,P.et,P.eq,P.cp,P.df,P.dh])
q(H.bn,[H.i9,H.hi,H.jr,H.js,H.jt,P.iR,P.iQ,P.iS,P.iT,P.jg,P.jf,P.iV,P.j2,P.iZ,P.j_,P.j0,P.iX,P.j1,P.iW,P.j5,P.j6,P.j4,P.j3,P.jo,P.jd,P.jc,P.je,P.ho,P.h0,P.h1,W.hG,W.hI,W.hT,W.i7,W.iU,P.jp,P.ha,P.hb,P.jz,P.jA,P.fM,F.fK,E.hP,E.hQ,E.hR,E.ij,D.h7,D.h8,F.jj,F.iP,F.iO,F.iK,F.iL,O.hw,O.hx,O.hy,O.hz,O.hA,O.hB,O.hC,O.hD,T.ih,V.jB,V.i0,V.i_,U.jw,U.jx])
q(H.i9,[H.i5,H.bV])
r(P.dy,P.ap)
r(H.u,P.dy)
r(H.aA,H.i)
r(H.bC,H.cj)
q(H.bC,[H.cD,H.cF])
r(H.cE,H.cD)
r(H.b6,H.cE)
r(H.cG,H.cF)
r(H.ci,H.cG)
q(H.ci,[H.dC,H.dD,H.dE,H.dF,H.dG,H.ck,H.dH])
r(H.cP,H.eL)
r(P.cL,P.c9)
r(P.cx,P.eD)
r(P.jb,P.ji)
r(P.cz,P.cH)
r(P.dg,P.e5)
r(P.h3,P.dc)
r(P.iB,P.h3)
r(P.iC,P.dg)
q(P.P,[P.Y,P.q])
q(P.a7,[P.bG,P.dq])
q(W.b,[W.w,W.dl,W.aG,W.cI,W.aI,W.ah,W.cM,W.ew,W.bK,P.d9,P.ay])
q(W.w,[W.K,W.af])
q(W.K,[W.k,P.j])
q(W.k,[W.d5,W.d6,W.aW,W.dn,W.bv,W.dX])
r(W.fT,W.ak)
r(W.c_,W.eF)
q(W.a8,[W.fV,W.fW])
r(W.eH,W.eG)
r(W.c0,W.eH)
r(W.eJ,W.eI)
r(W.dj,W.eJ)
r(W.aY,W.da)
r(W.eP,W.eO)
r(W.dk,W.eP)
r(W.eU,W.eT)
r(W.b_,W.eU)
r(W.av,W.h)
q(W.av,[W.b3,W.a3,W.bc])
r(W.hF,W.eX)
r(W.hH,W.eY)
r(W.f_,W.eZ)
r(W.dB,W.f_)
r(W.f1,W.f0)
r(W.cl,W.f1)
r(W.f5,W.f4)
r(W.dQ,W.f5)
r(W.hS,W.f7)
r(W.cJ,W.cI)
r(W.e0,W.cJ)
r(W.f9,W.f8)
r(W.e1,W.f9)
r(W.i6,W.fd)
r(W.fj,W.fi)
r(W.e7,W.fj)
r(W.cN,W.cM)
r(W.e8,W.cN)
r(W.fl,W.fk)
r(W.ec,W.fl)
r(W.aK,W.a3)
r(W.fr,W.fq)
r(W.eE,W.fr)
r(W.cy,W.c1)
r(W.ft,W.fs)
r(W.eS,W.ft)
r(W.fv,W.fu)
r(W.cC,W.fv)
r(W.fx,W.fw)
r(W.fa,W.fx)
r(W.fz,W.fy)
r(W.fh,W.fz)
r(W.eM,P.e4)
r(P.ab,P.f6)
r(P.eW,P.eV)
r(P.dv,P.eW)
r(P.f3,P.f2)
r(P.dK,P.f3)
r(P.ff,P.fe)
r(P.e6,P.ff)
r(P.fn,P.fm)
r(P.ed,P.fn)
r(P.fL,P.eA)
r(P.dL,P.ay)
r(P.fc,P.fb)
r(P.e2,P.fc)
q(K.dp,[K.aC,L.ip])
q(E.fP,[Z.fQ,A.dY,T.ib])
q(D.O,[D.al,D.am,D.p,X.dR,T.bW])
q(X.dR,[X.ce,X.bA,X.bB,X.cr])
q(O.bo,[D.cc,U.bu,M.bX])
q(D.fR,[U.fS,U.Q])
q(U.Q,[U.bp,U.cn])
q(A.dY,[A.hp,A.i1,A.i3])
q(A.is,[A.ef,A.iv,A.iw,A.ix,A.it,A.ee,A.iu,A.eg,A.eh,A.iz,A.ek,A.el,A.en,A.eo])
q(O.ia,[O.dz,O.dZ,O.i2])
q(O.cg,[O.hq,O.hr,O.aq])
q(O.aq,[O.hu,O.hv])
q(T.ib,[T.ic,T.ie])
r(T.id,T.ic)
q(X.i8,[X.fN,X.hd])
s(H.bJ,H.es)
s(H.cD,P.A)
s(H.cE,H.c6)
s(H.cF,P.A)
s(H.cG,H.c6)
s(P.cB,P.A)
s(W.eF,W.fU)
s(W.eG,P.A)
s(W.eH,W.D)
s(W.eI,P.A)
s(W.eJ,W.D)
s(W.eO,P.A)
s(W.eP,W.D)
s(W.eT,P.A)
s(W.eU,W.D)
s(W.eX,P.ap)
s(W.eY,P.ap)
s(W.eZ,P.A)
s(W.f_,W.D)
s(W.f0,P.A)
s(W.f1,W.D)
s(W.f4,P.A)
s(W.f5,W.D)
s(W.f7,P.ap)
s(W.cI,P.A)
s(W.cJ,W.D)
s(W.f8,P.A)
s(W.f9,W.D)
s(W.fd,P.ap)
s(W.fi,P.A)
s(W.fj,W.D)
s(W.cM,P.A)
s(W.cN,W.D)
s(W.fk,P.A)
s(W.fl,W.D)
s(W.fq,P.A)
s(W.fr,W.D)
s(W.fs,P.A)
s(W.ft,W.D)
s(W.fu,P.A)
s(W.fv,W.D)
s(W.fw,P.A)
s(W.fx,W.D)
s(W.fy,P.A)
s(W.fz,W.D)
s(P.eV,P.A)
s(P.eW,W.D)
s(P.f2,P.A)
s(P.f3,W.D)
s(P.fe,P.A)
s(P.ff,W.D)
s(P.fm,P.A)
s(P.fn,W.D)
s(P.eA,P.ap)
s(P.fb,P.A)
s(P.fc,W.D)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",Y:"double",P:"num",L:"String",bd:"bool",U:"Null",ao:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([O*])","~(O*)","~(a3*)","~(h*)","~(q*,f<br*>*)","~(bc*)","~(~())","U(@)","~(@)","~()","~(b3*)","~(q*,f<an*>*)","Y*()","~(q*,f<Q*>*)","~(q*,f<ad*>*)","~(q*,f<aB*>*)","@(@)","U(C,at)","ai<@>(@)","U(C?,C?)","U(@,@)","~(aK*)","bd*(f<an*>*)","q(@,@)","L(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.n3(v.typeUniverse,JSON.parse('{"ag":"b2","dO":"b2","bI":"b2","ot":"h","oD":"h","ov":"ay","ou":"b","oK":"b","oM":"b","os":"j","oF":"j","ow":"k","oI":"k","oG":"w","oC":"w","p9":"ah","oA":"av","ox":"af","oN":"af","oL":"a3","oH":"b_","oJ":"b6","bw":{"U":[]},"aa":{"i":["1"],"f":["1"]},"ds":{"i":["1"],"f":["1"]},"b1":{"Y":[],"P":[]},"cb":{"Y":[],"q":[],"P":[]},"ca":{"Y":[],"P":[]},"az":{"L":[]},"J":{"i":["q"],"f":["q"]},"i":{"f":["1"]},"b4":{"f":["2"]},"c2":{"i":["2"],"f":["2"]},"cw":{"f":["1"]},"bJ":{"i":["1"],"f":["1"]},"dI":{"B":[]},"dt":{"B":[]},"er":{"B":[]},"cK":{"at":[]},"dW":{"B":[]},"aA":{"i":["1"],"f":["1"]},"bC":{"r":["1"]},"b6":{"r":["Y"],"i":["Y"],"f":["Y"]},"ci":{"r":["q"],"i":["q"],"f":["q"]},"dC":{"r":["q"],"i":["q"],"f":["q"]},"dD":{"r":["q"],"i":["q"],"f":["q"]},"dE":{"r":["q"],"i":["q"],"f":["q"]},"dF":{"r":["q"],"i":["q"],"f":["q"]},"dG":{"r":["q"],"i":["q"],"f":["q"]},"ck":{"r":["q"],"i":["q"],"f":["q"]},"dH":{"r":["q"],"i":["q"],"f":["q"]},"eL":{"B":[]},"cP":{"B":[]},"cO":{"cq":[]},"cL":{"f":["1"]},"cx":{"eD":["1"]},"ai":{"bt":["1"]},"d8":{"B":[]},"cz":{"i":["1"],"f":["1"]},"c9":{"f":["1"]},"cd":{"i":["1"],"f":["1"]},"cH":{"i":["1"],"f":["1"]},"Y":{"P":[]},"d7":{"B":[]},"dJ":{"B":[]},"a7":{"B":[]},"bG":{"B":[]},"dq":{"B":[]},"et":{"B":[]},"eq":{"B":[]},"cp":{"B":[]},"df":{"B":[]},"dM":{"B":[]},"co":{"B":[]},"dh":{"B":[]},"q":{"P":[]},"ao":{"i":["1"],"f":["1"]},"fg":{"at":[]},"k":{"K":[],"w":[],"b":[]},"d5":{"K":[],"w":[],"b":[]},"d6":{"K":[],"w":[],"b":[]},"aW":{"K":[],"w":[],"b":[]},"af":{"w":[],"b":[]},"c0":{"r":["ab<P>"],"i":["ab<P>"],"f":["ab<P>"]},"c1":{"ab":["P"]},"dj":{"r":["L"],"i":["L"],"f":["L"]},"eC":{"i":["K"],"f":["K"]},"K":{"w":[],"b":[]},"dk":{"r":["aY"],"i":["aY"],"f":["aY"]},"dl":{"b":[]},"dn":{"K":[],"w":[],"b":[]},"b_":{"r":["w"],"i":["w"],"f":["w"]},"bv":{"K":[],"w":[],"b":[]},"b3":{"h":[]},"dB":{"r":["b5"],"i":["b5"],"f":["b5"]},"a3":{"h":[]},"eB":{"i":["w"],"f":["w"]},"w":{"b":[]},"cl":{"r":["w"],"i":["w"],"f":["w"]},"dQ":{"r":["b7"],"i":["b7"],"f":["b7"]},"dX":{"K":[],"w":[],"b":[]},"aG":{"b":[]},"e0":{"r":["aG"],"b":[],"i":["aG"],"f":["aG"]},"e1":{"r":["b8"],"i":["b8"],"f":["b8"]},"aI":{"b":[]},"ah":{"b":[]},"e7":{"r":["ah"],"i":["ah"],"f":["ah"]},"e8":{"r":["aI"],"b":[],"i":["aI"],"f":["aI"]},"bc":{"h":[]},"ec":{"r":["bb"],"i":["bb"],"f":["bb"]},"av":{"h":[]},"ew":{"b":[]},"aK":{"a3":[],"h":[]},"bK":{"b":[]},"eE":{"r":["F"],"i":["F"],"f":["F"]},"cy":{"ab":["P"]},"eS":{"r":["aZ?"],"i":["aZ?"],"f":["aZ?"]},"cC":{"r":["w"],"i":["w"],"f":["w"]},"fa":{"r":["b9"],"i":["b9"],"f":["b9"]},"fh":{"r":["aH"],"i":["aH"],"f":["aH"]},"cQ":{"b0":[]},"dm":{"i":["K"],"f":["K"]},"ab":{"f6":["1"]},"dv":{"i":["bx"],"f":["bx"]},"dK":{"i":["bD"],"f":["bD"]},"e6":{"i":["L"],"f":["L"]},"j":{"K":[],"w":[],"b":[]},"ed":{"i":["bH"],"f":["bH"]},"d9":{"b":[]},"ay":{"b":[]},"dL":{"b":[]},"e2":{"i":["dx<@,@>"],"f":["dx<@,@>"]},"bo":{"f":["1*"]},"al":{"O":[]},"am":{"O":[]},"p":{"O":[]},"ce":{"O":[]},"bA":{"O":[]},"bB":{"O":[]},"dR":{"O":[]},"cr":{"O":[]},"bq":{"an":[]},"cc":{"f":["an*"]},"bp":{"Q":[]},"bu":{"Q":[],"f":["Q*"]},"cn":{"Q":[]},"cs":{"Q":[]},"ct":{"Q":[]},"cu":{"Q":[]},"bX":{"ad":[],"f":["ad*"]},"bZ":{"ad":[]},"c4":{"ad":[]},"bW":{"O":[]}}'))
H.n2(v.typeUniverse,JSON.parse('{"aa":1,"ds":1,"S":1,"i":1,"by":1,"b4":2,"c2":2,"cf":2,"cw":1,"ey":1,"c6":1,"es":1,"bJ":1,"aA":1,"dw":1,"bC":1,"bN":1,"cL":1,"eR":2,"e4":1,"e5":2,"cA":1,"c9":1,"cd":1,"A":1,"dy":2,"ap":2,"cH":1,"cB":1,"dc":2,"dg":2,"f":1,"dr":1,"ao":1,"eM":1,"D":1,"c7":1,"bo":1,"al":1,"am":1,"p":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.o8
return{U:s("i<@>"),h:s("K"),C:s("B"),D:s("h"),Z:s("oE"),d:s("bt<@>"),s:s("b0"),k:s("bv"),b:s("aa<@>"),T:s("bw"),g:s("ag"),p:s("r<@>"),G:s("u<L*,dY*>"),V:s("u<L*,e3*>"),i:s("u<L*,L*>"),w:s("u<L*,eb*>"),u:s("u<q*,ao<ei*>*>"),L:s("u<q*,ao<ej*>*>"),W:s("u<q*,ao<em*>*>"),M:s("u<q*,ao<ep*>*>"),J:s("u<q*,ef*>"),E:s("u<q*,bd*>"),a:s("u<q*,q*>"),P:s("U"),K:s("C"),I:s("ab<P>"),N:s("L"),Y:s("cq"),o:s("bI"),v:s("bd"),f:s("Y"),z:s("@"),x:s("@(C)"),R:s("@(C,at)"),S:s("q"),B:s("aW*"),l:s("bW*"),cj:s("ce*"),_:s("bA*"),F:s("bB*"),A:s("0&*"),c:s("C*"),bw:s("L*"),j:s("ea*"),m:s("cr*"),n:s("ee*"),r:s("eg*"),y:s("eh*"),O:s("ek*"),q:s("el*"),t:s("en*"),Q:s("eo*"),e:s("q*"),bc:s("bt<U>?"),X:s("C?"),H:s("P")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aW.prototype
C.J=J.a.prototype
C.a=J.aa.prototype
C.j=J.ca.prototype
C.c=J.cb.prototype
C.h=J.bw.prototype
C.d=J.b1.prototype
C.b=J.az.prototype
C.K=J.ag.prototype
C.t=J.dO.prototype
C.u=P.dV.prototype
C.k=J.bI.prototype
C.v=W.aK.prototype
C.w=W.bK.prototype
C.x=new E.bl("Browser.chrome")
C.l=new E.bl("Browser.firefox")
C.m=new E.bl("Browser.edge")
C.y=new E.bl("Browser.other")
C.n=function getTagFallback(o) {
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
C.o=function(hooks) { return hooks; }

C.F=new P.dM()
C.p=new P.iB()
C.G=new P.iC()
C.q=new P.j7()
C.e=new P.jb()
C.H=new P.fg()
C.i=new P.aX(0)
C.I=new P.aX(5e6)
C.L=s([0,0,65498,45055,65535,34815,65534,18431])
C.M=new E.bE("OperatingSystem.windows")
C.r=new E.bE("OperatingSystem.mac")
C.N=new E.bE("OperatingSystem.linux")
C.O=new E.bE("OperatingSystem.other")
C.P=new P.bM(null,2)})();(function staticFields(){$.l5=null
$.aj=0
$.ko=null
$.kn=null
$.lp=null
$.ln=null
$.lu=null
$.jq=null
$.ju=null
$.kf=null
$.bP=null
$.cW=null
$.cX=null
$.kb=!1
$.I=C.e
$.a_=[]
$.h4=null
$.kE=null
$.kI=null
$.as=null
$.kO=null
$.kZ=null
$.l0=null
$.iD=null
$.iE=null
$.iF=null
$.l_=null
$.kH=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"oB","lB",function(){return H.ob("_$dart_dartClosure")})
s($,"oO","lC",function(){return H.au(H.ir({
toString:function(){return"$receiver$"}}))})
s($,"oP","lD",function(){return H.au(H.ir({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oQ","lE",function(){return H.au(H.ir(null))})
s($,"oR","lF",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oU","lI",function(){return H.au(H.ir(void 0))})
s($,"oV","lJ",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"oT","lH",function(){return H.au(H.kX(null))})
s($,"oS","lG",function(){return H.au(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"oX","lL",function(){return H.au(H.kX(void 0))})
s($,"oW","lK",function(){return H.au(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"pa","kj",function(){return P.mI()})
s($,"pc","lP",function(){return P.mw("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p3","lO",function(){return Z.ae(0)})
s($,"oY","lM",function(){return Z.ae(511)})
s($,"p5","a6",function(){return Z.ae(1)})
s($,"p4","aU",function(){return Z.ae(2)})
s($,"p_","aT",function(){return Z.ae(4)})
s($,"p6","bi",function(){return Z.ae(8)})
s($,"p7","aV",function(){return Z.ae(16)})
s($,"p0","d1",function(){return Z.ae(32)})
s($,"p1","d2",function(){return Z.ae(64)})
s($,"p2","lN",function(){return Z.ae(96)})
s($,"p8","bU",function(){return Z.ae(128)})
s($,"oZ","aS",function(){return Z.ae(256)})
s($,"oz","lA",function(){return new V.h5()})
s($,"oy","t",function(){return $.lA()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cj,ArrayBufferView:H.cj,Float32Array:H.b6,Float64Array:H.b6,Int16Array:H.dC,Int32Array:H.dD,Int8Array:H.dE,Uint16Array:H.dF,Uint32Array:H.dG,Uint8ClampedArray:H.ck,CanvasPixelArray:H.ck,Uint8Array:H.dH,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fC,HTMLAnchorElement:W.d5,HTMLAreaElement:W.d6,Blob:W.da,HTMLCanvasElement:W.aW,CDATASection:W.af,CharacterData:W.af,Comment:W.af,ProcessingInstruction:W.af,Text:W.af,CSSPerspective:W.fT,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.c_,MSStyleCSSProperties:W.c_,CSS2Properties:W.c_,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.ak,CSSRotation:W.ak,CSSScale:W.ak,CSSSkew:W.ak,CSSTranslation:W.ak,CSSTransformComponent:W.ak,CSSTransformValue:W.fV,CSSUnparsedValue:W.fW,DataTransferItemList:W.fX,DOMException:W.fZ,ClientRectList:W.c0,DOMRectList:W.c0,DOMRectReadOnly:W.c1,DOMStringList:W.dj,DOMTokenList:W.h_,Element:W.K,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aY,FileList:W.dk,FileWriter:W.dl,HTMLFormElement:W.dn,Gamepad:W.aZ,History:W.he,HTMLCollection:W.b_,HTMLFormControlsCollection:W.b_,HTMLOptionsCollection:W.b_,ImageData:W.b0,HTMLImageElement:W.bv,KeyboardEvent:W.b3,Location:W.hm,MediaList:W.hE,MIDIInputMap:W.hF,MIDIOutputMap:W.hH,MimeType:W.b5,MimeTypeArray:W.dB,PointerEvent:W.a3,MouseEvent:W.a3,DragEvent:W.a3,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cl,RadioNodeList:W.cl,Plugin:W.b7,PluginArray:W.dQ,RTCStatsReport:W.hS,HTMLSelectElement:W.dX,SourceBuffer:W.aG,SourceBufferList:W.e0,SpeechGrammar:W.b8,SpeechGrammarList:W.e1,SpeechRecognitionResult:W.b9,Storage:W.i6,CSSStyleSheet:W.aH,StyleSheet:W.aH,TextTrack:W.aI,TextTrackCue:W.ah,VTTCue:W.ah,TextTrackCueList:W.e7,TextTrackList:W.e8,TimeRanges:W.ik,Touch:W.bb,TouchEvent:W.bc,TouchList:W.ec,TrackDefaultList:W.io,CompositionEvent:W.av,FocusEvent:W.av,TextEvent:W.av,UIEvent:W.av,URL:W.iA,VideoTrackList:W.ew,WheelEvent:W.aK,Window:W.bK,DOMWindow:W.bK,CSSRuleList:W.eE,ClientRect:W.cy,DOMRect:W.cy,GamepadList:W.eS,NamedNodeMap:W.cC,MozNamedAttrMap:W.cC,SpeechRecognitionResultList:W.fa,StyleSheetList:W.fh,SVGLength:P.bx,SVGLengthList:P.dv,SVGNumber:P.bD,SVGNumberList:P.dK,SVGPointList:P.hN,SVGStringList:P.e6,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bH,SVGTransformList:P.ed,AudioBuffer:P.fI,AudioParamMap:P.fL,AudioTrackList:P.d9,AudioContext:P.ay,webkitAudioContext:P.ay,BaseAudioContext:P.ay,OfflineAudioContext:P.dL,WebGL2RenderingContext:P.dV,SQLResultSetRowList:P.e2})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.b6.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.ls,[])
else U.ls([])})})()
//# sourceMappingURL=test.dart.js.map
