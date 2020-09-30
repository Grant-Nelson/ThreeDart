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
a[c]=function(){a[c]=function(){H.o0(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jN(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jq:function jq(){},
lW:function(a,b){if(t.R.b(a))return new H.bV(a,b)
return new H.b4(a,b)},
h6:function(){return new P.bB("No element")},
lQ:function(){return new P.bB("Too many elements")},
mg:function(a,b){var s=J.aP(a)
if(typeof s!=="number")return s.R()
H.dN(a,0,s-1,b)},
dN:function(a,b,c,d){if(c-b<=32)H.mf(a,b,c,d)
else H.me(a,b,c,d)},
mf:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bh(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.P()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
me:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.S(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.S(a6+a7,2),d=e-h,c=e+h,b=J.bh(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.P()
if(a4>0){s=a3
a3=a2
a2=s}b.m(a5,g,a)
b.m(a5,e,a1)
b.m(a5,f,a3)
b.m(a5,d,b.h(a5,a6))
b.m(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.J(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.aA()
if(n<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.P()
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
if(typeof j!=="number")return j.aA()
if(j<0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.P()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.P()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aA()
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
H.dN(a5,a6,r-2,a8)
H.dN(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.J(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.J(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.m(a5,p,b.h(a5,r))
b.m(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.aA()
m=q-1
if(n<0){b.m(a5,p,b.h(a5,r))
l=r+1
b.m(a5,r,b.h(a5,q))
b.m(a5,q,o)
r=l}else{b.m(a5,p,b.h(a5,q))
b.m(a5,q,o)}q=m
break}}H.dN(a5,r,q,a8)}else H.dN(a5,r,q,a8)},
l:function l(a){this.a=a},
i:function i(){},
c4:function c4(){},
ax:function ax(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b4:function b4(a,b){this.a=a
this.b=b},
bV:function bV(a,b){this.a=a
this.b=b},
c5:function c5(a,b){this.a=null
this.b=a
this.c=b},
c6:function c6(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
bX:function bX(){},
eh:function eh(){},
bE:function bE(){},
lb:function(a){var s,r=H.la(a)
if(r!=null)return r
s="minified:"+a
return s},
nT:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
d:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.a6(a)
if(typeof s!="string")throw H.c(H.bg(a))
return s},
ce:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dG:function(a){return H.lZ(a)},
lZ:function(a){var s,r,q
if(a instanceof P.H)return H.Z(H.cK(a),null)
if(J.cJ(a)===C.M||t.o.b(a)){s=C.o(a)
if(H.ko(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.ko(q))return q}}return H.Z(H.cK(a),null)},
ko:function(a){var s=a!=="Object"&&a!==""
return s},
kn:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
m7:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.cF(q))throw H.c(H.bg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aR(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.bg(q))}return H.kn(p)},
m6:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cF(q))throw H.c(H.bg(q))
if(q<0)throw H.c(H.bg(q))
if(q>65535)return H.m7(a)}return H.kn(a)},
jv:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aR(s,10))>>>0,56320|s&1023)}throw H.c(P.aA(a,0,1114111,null,null))},
by:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m5:function(a){var s=H.by(a).getFullYear()+0
return s},
m3:function(a){var s=H.by(a).getMonth()+1
return s},
m_:function(a){var s=H.by(a).getDate()+0
return s},
m0:function(a){var s=H.by(a).getHours()+0
return s},
m2:function(a){var s=H.by(a).getMinutes()+0
return s},
m4:function(a){var s=H.by(a).getSeconds()+0
return s},
m1:function(a){var s=H.by(a).getMilliseconds()+0
return s},
K:function(a){throw H.c(H.bg(a))},
e:function(a,b){if(a==null)J.aP(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var s,r,q="index"
if(!H.cF(b))return new P.W(!0,b,q,null)
s=J.aP(a)
if(!(b<0)){if(typeof s!=="number")return H.K(s)
r=b>=s}else r=!0
if(r)return P.F(b,a,q,null,s)
return P.dH(b,q)},
nH:function(a,b,c){if(a>c)return P.aA(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aA(b,a,c,"end",null)
return new P.W(!0,b,"end",null)},
bg:function(a){return new P.W(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dx()
s=new Error()
s.dartException=a
r=H.o1
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
o1:function(){return J.a6(this.dartException)},
p:function(a){throw H.c(a)},
n:function(a){throw H.c(P.aU(a))},
am:function(a){var s,r,q,p,o,n
a=H.l8(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ic(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
id:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kx:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kj:function(a,b){return new H.dw(a,b==null?null:b.method)},
jr:function(a,b){var s=b==null,r=s?null:b.method
return new H.df(a,r,s?null:b.receiver)},
as:function(a){if(a==null)return new H.hF(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bj(a,a.dartException)
return H.nA(a)},
bj:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nA:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aR(r,16)&8191)===10)switch(q){case 438:return H.bj(a,H.jr(H.d(s)+" (Error "+q+")",e))
case 445:case 5007:return H.bj(a,H.kj(H.d(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.le()
o=$.lf()
n=$.lg()
m=$.lh()
l=$.lk()
k=$.ll()
j=$.lj()
$.li()
i=$.ln()
h=$.lm()
g=p.Z(s)
if(g!=null)return H.bj(a,H.jr(s,g))
else{g=o.Z(s)
if(g!=null){g.method="call"
return H.bj(a,H.jr(s,g))}else{g=n.Z(s)
if(g==null){g=m.Z(s)
if(g==null){g=l.Z(s)
if(g==null){g=k.Z(s)
if(g==null){g=j.Z(s)
if(g==null){g=m.Z(s)
if(g==null){g=i.Z(s)
if(g==null){g=h.Z(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.bj(a,H.kj(s,g))}}return H.bj(a,new H.eg(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cf()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bj(a,new P.W(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cf()
return a},
jP:function(a){var s
if(a==null)return new H.f_(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.f_(a)},
nJ:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
nS:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.o("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nS)
a.$identity=s
return s},
lJ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.i_().constructor.prototype):Object.create(new H.bQ(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ad
if(typeof r!=="number")return r.w()
$.ad=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k6(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lF(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k6(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lF:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l3,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lD:H.lC
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lG:function(a,b,c,d){var s=H.k4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k6:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lI(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lG(r,!p,s,b)
if(r===0){p=$.ad
if(typeof p!=="number")return p.w()
$.ad=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.d(H.jj())+";return "+n+"."+H.d(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ad
if(typeof p!=="number")return p.w()
$.ad=p+1
m+=p
return new Function("return function("+m+"){return this."+H.d(H.jj())+"."+H.d(s)+"("+m+");}")()},
lH:function(a,b,c,d){var s=H.k4,r=H.lE
switch(b?-1:a){case 0:throw H.c(new H.dK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lI:function(a,b){var s,r,q,p,o,n,m=H.jj(),l=$.k2
if(l==null)l=$.k2=H.k1("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lH(r,!p,s,b)
if(r===1){p="return function(){return this."+H.d(m)+"."+H.d(s)+"(this."+l+");"
o=$.ad
if(typeof o!=="number")return o.w()
$.ad=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.d(m)+"."+H.d(s)+"(this."+l+", "+n+");"
o=$.ad
if(typeof o!=="number")return o.w()
$.ad=o+1
return new Function(p+o+"}")()},
jN:function(a,b,c,d,e,f,g){return H.lJ(a,b,c,d,!!e,!!f,g)},
lC:function(a,b){return H.fd(v.typeUniverse,H.cK(a.a),b)},
lD:function(a,b){return H.fd(v.typeUniverse,H.cK(a.c),b)},
k4:function(a){return a.a},
lE:function(a){return a.c},
jj:function(){var s=$.k3
return s==null?$.k3=H.k1("self"):s},
k1:function(a){var s,r,q,p=new H.bQ("self","target","receiver","name"),o=J.jp(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.k_("Field name "+a+" not found."))},
o0:function(a){throw H.c(new P.d_(a))},
nM:function(a){return v.getIsolateTag(a)},
p3:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nV:function(a){var s,r,q,p,o,n=$.l2.$1(a),m=$.j7[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jc[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.l_.$2(a,n)
if(q!=null){m=$.j7[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jc[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jf(s)
$.j7[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jc[n]=s
return s}if(p==="-"){o=H.jf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l6(a,s)
if(p==="*")throw H.c(P.ky(n))
if(v.leafTags[n]===true){o=H.jf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l6(a,s)},
l6:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jf:function(a){return J.jR(a,!1,null,!!a.$ir)},
nW:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jf(s)
else return J.jR(s,c,null,null)},
nQ:function(){if(!0===$.jQ)return
$.jQ=!0
H.nR()},
nR:function(){var s,r,q,p,o,n,m,l
$.j7=Object.create(null)
$.jc=Object.create(null)
H.nP()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l7.$1(o)
if(n!=null){m=H.nW(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nP:function(){var s,r,q,p,o,n,m=C.A()
m=H.bL(C.B,H.bL(C.C,H.bL(C.p,H.bL(C.p,H.bL(C.D,H.bL(C.E,H.bL(C.F(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.l2=new H.j9(p)
$.l_=new H.ja(o)
$.l7=new H.jb(n)},
bL:function(a,b){return a(b)||b},
lU:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h_("Illegal RegExp pattern ("+String(n)+")",a))},
l9:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nI:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jT:function(a,b,c){var s=H.nZ(a,b,c)
return s},
nZ:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l8(b),'g'),H.nI(c))},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dw:function dw(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a){this.a=a},
hF:function hF(a){this.a=a},
f_:function f_(a){this.a=a
this.b=null},
bo:function bo(){},
i3:function i3(){},
i_:function i_(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a){this.a=a},
u:function u(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h9:function h9(a){this.a=a},
hc:function hc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aw:function aw(a){this.a=a},
di:function di(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cD:function(a){return a},
ao:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
mO:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nH(a,b,c))
return b},
ca:function ca(){},
bv:function bv(){},
b6:function b6(){},
c9:function c9(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
cb:function cb(){},
dv:function dv(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
mc:function(a,b){var s=b.c
return s==null?b.c=H.jH(a,b.z,!0):s},
kr:function(a,b){var s=b.c
return s==null?b.c=H.cB(a,"kb",[b.z]):s},
ks:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ks(a.z)
return s===11||s===12},
mb:function(a){return a.cy},
nK:function(a){return H.jI(v.typeUniverse,a,!1)},
aI:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aI(a,s,a0,a1)
if(r===s)return b
return H.kQ(a,r,!0)
case 7:s=b.z
r=H.aI(a,s,a0,a1)
if(r===s)return b
return H.jH(a,r,!0)
case 8:s=b.z
r=H.aI(a,s,a0,a1)
if(r===s)return b
return H.kP(a,r,!0)
case 9:q=b.Q
p=H.cI(a,q,a0,a1)
if(p===q)return b
return H.cB(a,b.z,p)
case 10:o=b.z
n=H.aI(a,o,a0,a1)
m=b.Q
l=H.cI(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jF(a,n,l)
case 11:k=b.z
j=H.aI(a,k,a0,a1)
i=b.Q
h=H.nx(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kO(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.cI(a,g,a0,a1)
o=b.z
n=H.aI(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jG(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.ft("Attempted to substitute unexpected RTI kind "+c))}},
cI:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aI(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
ny:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aI(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nx:function(a,b,c,d){var s,r=b.a,q=H.cI(a,r,c,d),p=b.b,o=H.cI(a,p,c,d),n=b.c,m=H.ny(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eC()
s.a=q
s.b=o
s.c=m
return s},
p5:function(a,b){a[v.arrayRti]=b
return a},
nE:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.l3(s)
return a.$S()}return null},
l4:function(a,b){var s
if(H.ks(b))if(a instanceof H.bo){s=H.nE(a)
if(s!=null)return s}return H.cK(a)},
cK:function(a){var s
if(a instanceof P.H){s=a.$ti
return s!=null?s:H.jK(a)}if(Array.isArray(a))return H.mL(a)
return H.jK(J.cJ(a))},
mL:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mU:function(a){var s=a.$ti
return s!=null?s:H.jK(a)},
jK:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mV(a,s)},
mV:function(a,b){var s=a instanceof H.bo?a.__proto__.__proto__.constructor:b,r=H.mK(v.typeUniverse,s.name)
b.$ccache=r
return r},
l3:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jI(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mT:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cE(q,a,H.mZ)
if(!H.ar(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cE(q,a,H.n1)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cF
else if(s===t.d||s===t.H)r=H.mY
else if(s===t.N)r=H.n_
else r=s===t.W?H.kW:null
if(r!=null)return H.cE(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.nU)){q.r="$i"+p
return H.cE(q,a,H.n0)}}else if(p===7)return H.cE(q,a,H.mR)
return H.cE(q,a,H.mP)},
cE:function(a,b,c){a.b=c
return a.b(b)},
mS:function(a){var s,r,q=this
if(!H.ar(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.mN
else if(q===t.K)r=H.mM
else r=H.mQ
q.a=r
return q.a(a)},
nq:function(a){var s,r=a.y
if(!H.ar(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
mP:function(a){var s=this
if(a==null)return H.nq(s)
return H.L(v.typeUniverse,H.l4(a,s),null,s,null)},
mR:function(a){if(a==null)return!0
return this.z.b(a)},
n0:function(a){var s=this,r=s.r
if(a instanceof P.H)return!!a[r]
return!!J.cJ(a)[r]},
p2:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kU(a,s)},
mQ:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kU(a,s)},
kU:function(a,b){throw H.c(H.mA(H.kG(a,H.l4(a,b),H.Z(b,null))))},
kG:function(a,b,c){var s=P.fS(a),r=H.Z(b==null?H.cK(a):b,null)
return s+": type '"+H.d(r)+"' is not a subtype of type '"+H.d(c)+"'"},
mA:function(a){return new H.cA("TypeError: "+a)},
S:function(a,b){return new H.cA("TypeError: "+H.kG(a,null,b))},
mZ:function(a){return a!=null},
mM:function(a){return a},
n1:function(a){return!0},
mN:function(a){return a},
kW:function(a){return!0===a||!1===a},
oP:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.S(a,"bool"))},
oR:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.S(a,"bool"))},
oQ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.S(a,"bool?"))},
oS:function(a){if(typeof a=="number")return a
throw H.c(H.S(a,"double"))},
oU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"double"))},
oT:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"double?"))},
cF:function(a){return typeof a=="number"&&Math.floor(a)===a},
oV:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.S(a,"int"))},
oX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.S(a,"int"))},
oW:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.S(a,"int?"))},
mY:function(a){return typeof a=="number"},
oY:function(a){if(typeof a=="number")return a
throw H.c(H.S(a,"num"))},
p_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"num"))},
oZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.S(a,"num?"))},
n_:function(a){return typeof a=="string"},
p0:function(a){if(typeof a=="string")return a
throw H.c(H.S(a,"String"))},
jJ:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.S(a,"String"))},
p1:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.S(a,"String?"))},
nt:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.w(r,H.Z(a[q],b))
return s},
kV:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
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
if(!j)l+=C.b.w(" extends ",H.Z(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.Z(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.w(a3,H.Z(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.w(a3,H.Z(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jW(H.Z(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.d(a1)},
Z:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.Z(a.z,b)
return s}if(l===7){r=a.z
s=H.Z(r,b)
q=r.y
return J.jW(q===11||q===12?C.b.w("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.d(H.Z(a.z,b))+">"
if(l===9){p=H.nz(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nt(o,b)+">"):p}if(l===11)return H.kV(a,b,null)
if(l===12)return H.kV(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nz:function(a){var s,r=H.la(a)
if(r!=null)return r
s="minified:"+a
return s},
kR:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mK:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jI(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cC(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cB(a,b,q)
n[b]=o
return o}else return m},
mI:function(a,b){return H.kT(a.tR,b)},
mH:function(a,b){return H.kT(a.eT,b)},
jI:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kM(H.kK(a,null,b,c))
r.set(b,s)
return s},
fd:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kM(H.kK(a,b,c,!0))
q.set(c,r)
return r},
mJ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jF(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aH:function(a,b){b.a=H.mS
b.b=H.mT
return b},
cC:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a4(null,null)
s.y=b
s.cy=c
r=H.aH(a,s)
a.eC.set(c,r)
return r},
kQ:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mF(a,b,r,c)
a.eC.set(r,s)
return s},
mF:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ar(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a4(null,null)
q.y=6
q.z=b
q.cy=c
return H.aH(a,q)},
jH:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mE(a,b,r,c)
a.eC.set(r,s)
return s},
mE:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ar(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.jd(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.jd(q.z))return q
else return H.mc(a,b)}}p=new H.a4(null,null)
p.y=7
p.z=b
p.cy=c
return H.aH(a,p)},
kP:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mC(a,b,r,c)
a.eC.set(r,s)
return s},
mC:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ar(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cB(a,"kb",[b])
else if(b===t.P||b===t.T)return t.l}q=new H.a4(null,null)
q.y=8
q.z=b
q.cy=c
return H.aH(a,q)},
mG:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a4(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aH(a,s)
a.eC.set(q,r)
return r},
fc:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mB:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cB:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fc(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a4(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aH(a,r)
a.eC.set(p,q)
return q},
jF:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fc(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a4(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aH(a,o)
a.eC.set(q,n)
return n},
kO:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fc(m)
if(j>0){s=l>0?",":""
r=H.fc(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mB(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a4(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aH(a,o)
a.eC.set(q,r)
return r},
jG:function(a,b,c,d){var s,r=b.cy+("<"+H.fc(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mD(a,b,c,r,d)
a.eC.set(r,s)
return s},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aI(a,b,r,0)
m=H.cI(a,c,r,0)
return H.jG(a,n,m,c!==m)}}l=new H.a4(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aH(a,l)},
kK:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kM:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.mu(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kL(a,r,g,f,!1)
else if(q===46)r=H.kL(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.aG(a.u,a.e,f.pop()))
break
case 94:f.push(H.mG(a.u,f.pop()))
break
case 35:f.push(H.cC(a.u,5,"#"))
break
case 64:f.push(H.cC(a.u,2,"@"))
break
case 126:f.push(H.cC(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.jE(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cB(p,n,o))
else{m=H.aG(p,a.e,n)
switch(m.y){case 11:f.push(H.jG(p,m,o,a.n))
break
default:f.push(H.jF(p,m,o))
break}}break
case 38:H.mv(a,f)
break
case 42:l=a.u
f.push(H.kQ(l,H.aG(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jH(l,H.aG(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.kP(l,H.aG(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.eC()
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
f.push(H.kO(p,H.aG(p,a.e,f.pop()),k))
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
H.mx(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.aG(a.u,a.e,h)},
mu:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kL:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kR(s,o.z)[p]
if(n==null)H.p('No "'+p+'" in "'+H.mb(o)+'"')
d.push(H.fd(s,o,n))}else d.push(p)
return m},
mv:function(a,b){var s=b.pop()
if(0===s){b.push(H.cC(a.u,1,"0&"))
return}if(1===s){b.push(H.cC(a.u,4,"1&"))
return}throw H.c(P.ft("Unexpected extended operation "+H.d(s)))},
aG:function(a,b,c){if(typeof c=="string")return H.cB(a,c,a.sEA)
else if(typeof c=="number")return H.mw(a,b,c)
else return c},
jE:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aG(a,b,c[s])},
mx:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aG(a,b,c[s])},
mw:function(a,b,c){var s,r,q=b.y
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
throw H.c(P.ft("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ar(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ar(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=d.z
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kr(a,b),c,d,e)}if(r===7){s=H.L(a,b.z,c,d,e)
return s}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kr(a,d),e)}if(p===7){s=H.L(a,b,c,d.z,e)
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.kX(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kX(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mX(a,b,c,d,e)}return!1},
kX:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
mX:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kR(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fd(a,b,l[p]),c,r[p],e))return!1
return!0},
jd:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ar(a))if(r!==7)if(!(r===6&&H.jd(a.z)))s=r===8&&H.jd(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nU:function(a){var s
if(!H.ar(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
ar:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kT:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eC:function eC(){this.c=this.b=this.a=null},
ex:function ex(){},
cA:function cA(a){this.a=a},
la:function(a){return v.mangledGlobalNames[a]},
nX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fp:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jQ==null){H.nQ()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.ky("Return interceptor for "+H.d(s(a,o))))}q=a.constructor
p=q==null?null:q[J.kd()]
if(p!=null)return p
p=H.nV(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,J.kd(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kd:function(){var s=$.kI
return s==null?$.kI=v.getIsolateTag("_$dart_js"):s},
lR:function(a){if(!H.cF(a))throw H.c(P.k0(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aA(a,0,4294967295,"length",null))
return J.lS(new Array(a))},
kc:function(a){if(!H.cF(a)||a<0)throw H.c(P.k_("Length must be a non-negative integer: "+H.d(a)))
return new Array(a)},
lS:function(a){return J.jp(a)},
jp:function(a){a.fixed$length=Array
return a},
lT:function(a,b){return J.cO(a,b)},
cJ:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c_.prototype
return J.dd.prototype}if(typeof a=="string")return J.ag.prototype
if(a==null)return J.c0.prototype
if(typeof a=="boolean")return J.h7.prototype
if(a.constructor==Array)return J.a1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.H)return a
return J.fp(a)},
nL:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.a1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.H)return a
return J.fp(a)},
bh:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.a1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.H)return a
return J.fp(a)},
j8:function(a){if(a==null)return a
if(a.constructor==Array)return J.a1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.H)return a
return J.fp(a)},
l1:function(a){if(typeof a=="number")return J.b1.prototype
if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.bc.prototype
return a},
jO:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.bc.prototype
return a},
bi:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a9.prototype
return a}if(a instanceof P.H)return a
return J.fp(a)},
jW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nL(a).w(a,b)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cJ(a).n(a,b)},
jX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l1(a).H(a,b)},
cN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nT(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).h(a,b)},
lt:function(a,b,c){return J.bi(a).ew(a,b,c)},
lu:function(a,b,c,d){return J.bi(a).eL(a,b,c,d)},
cO:function(a,b){return J.l1(a).av(a,b)},
ji:function(a,b){return J.bh(a).t(a,b)},
fr:function(a,b){return J.j8(a).u(a,b)},
lv:function(a,b){return J.j8(a).B(a,b)},
lw:function(a){return J.bi(a).geP(a)},
lx:function(a){return J.bi(a).gcd(a)},
a_:function(a){return J.cJ(a).gM(a)},
aO:function(a){return J.j8(a).gI(a)},
aP:function(a){return J.bh(a).gl(a)},
jY:function(a){return J.j8(a).fv(a)},
ly:function(a,b){return J.bi(a).fB(a,b)},
lz:function(a,b,c){return J.jO(a).aM(a,b,c)},
lA:function(a){return J.jO(a).fI(a)},
a6:function(a){return J.cJ(a).i(a)},
a:function a(){},
h7:function h7(){},
c0:function c0(){},
b2:function b2(){},
dC:function dC(){},
bc:function bc(){},
a9:function a9(){},
a1:function a1(){},
de:function de(){},
X:function X(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b1:function b1(){},
c_:function c_(){},
dd:function dd(){},
ag:function ag(){}},P={
ml:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nB()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bM(new P.iJ(q),1)).observe(s,{childList:true})
return new P.iI(q,s,r)}else if(self.setImmediate!=null)return P.nC()
return P.nD()},
mm:function(a){self.scheduleImmediate(H.bM(new P.iK(a),0))},
mn:function(a){self.setImmediate(H.bM(new P.iL(a),0))},
mo:function(a){P.jz(C.i,a)},
jz:function(a,b){var s=C.c.S(a.a,1000)
return P.my(s<0?0:s,b)},
kw:function(a,b){var s=C.c.S(a.a,1000)
return P.mz(s<0?0:s,b)},
my:function(a,b){var s=new P.cz()
s.dh(a,b)
return s},
mz:function(a,b){var s=new P.cz()
s.di(a,b)
return s},
oN:function(a){return new P.bJ(a,1)},
mr:function(){return C.U},
ms:function(a){return new P.bJ(a,3)},
n3:function(a){return new P.cw(a)},
np:function(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.cH=null
r=s.b
$.bK=r
if(r==null)$.cG=null
s.a.$0()}},
nw:function(){$.jL=!0
try{P.np()}finally{$.cH=null
$.jL=!1
if($.bK!=null)$.jV().$1(P.l0())}},
nu:function(a){var s=new P.en(a),r=$.cG
if(r==null){$.bK=$.cG=s
if(!$.jL)$.jV().$1(P.l0())}else $.cG=r.b=s},
nv:function(a){var s,r,q,p=$.bK
if(p==null){P.nu(a)
$.cH=$.cG
return}s=new P.en(a)
r=$.cH
if(r==null){s.b=p
$.bK=$.cH=s}else{q=r.b
s.b=q
$.cH=r.b=s
if(q==null)$.cG=s}},
kv:function(a,b){var s=$.ac
if(s===C.e)return P.jz(a,b)
return P.jz(a,s.eQ(b))},
mi:function(a,b){var s=$.ac
if(s===C.e)return P.kw(a,b)
return P.kw(a,s.cc(b,t.M))},
kY:function(a,b,c,d,e){P.nv(new P.j4(d,e))},
nr:function(a,b,c,d){var s,r=$.ac
if(r===c)return d.$0()
$.ac=c
s=r
try{r=d.$0()
return r}finally{$.ac=s}},
ns:function(a,b,c,d,e){var s,r=$.ac
if(r===c)return d.$1(e)
$.ac=c
s=r
try{r=d.$1(e)
return r}finally{$.ac=s}},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
cz:function cz(){this.c=0},
iZ:function iZ(a,b){this.a=a
this.b=b},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
bf:function bf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cw:function cw(a){this.a=a},
en:function en(a){this.a=a
this.b=null},
dS:function dS(){},
dT:function dT(){},
ch:function ch(){},
j1:function j1(){},
j4:function j4(a,b){this.a=a
this.b=b},
iR:function iR(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function(a,b,c){return H.nJ(a,new H.u(b.aa("@<0>").bP(c).aa("u<1,2>")))},
ke:function(a,b){return new H.u(a.aa("@<0>").bP(b).aa("u<1,2>"))},
c2:function(a){return new P.ck(a.aa("ck<0>"))},
jD:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mt:function(a,b){var s=new P.cl(a,b)
s.c=a.e
return s},
lP:function(a,b,c){var s,r
if(P.jM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.V.push(a)
try{P.n2(a,s)}finally{if(0>=$.V.length)return H.e($.V,-1)
$.V.pop()}r=P.kt(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jo:function(a,b,c){var s,r
if(P.jM(a))return b+"..."+c
s=new P.aC(b)
$.V.push(a)
try{r=s
r.a=P.kt(r.a,a,", ")}finally{if(0>=$.V.length)return H.e($.V,-1)
$.V.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jM:function(a){var s,r
for(s=$.V.length,r=0;r<s;++r)if(a===$.V[r])return!0
return!1},
n2:function(a,b){var s,r,q,p,o,n,m,l=a.gI(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.p())return
s=H.d(l.gv(l))
b.push(s)
k+=s.length+2;++j}if(!l.p()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gv(l);++j
if(!l.p()){if(j<=4){b.push(H.d(p))
return}r=H.d(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gv(l);++j
for(;l.p();p=o,o=n){n=l.gv(l);++j
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
kf:function(a,b){var s,r,q=P.c2(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)q.q(0,b.a(a[r]))
return q},
kg:function(a){var s,r={}
if(P.jM(a))return"{...}"
s=new P.aC("")
try{$.V.push(a)
s.a+="{"
r.a=!0
J.lv(a,new P.hf(r,s))
s.a+="}"}finally{if(0>=$.V.length)return H.e($.V,-1)
$.V.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ck:function ck(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iQ:function iQ(a){this.a=a
this.c=this.b=null},
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bZ:function bZ(){},
c3:function c3(){},
x:function x(){},
dk:function dk(){},
hf:function hf(a,b){this.a=a
this.b=b},
aj:function aj(){},
cs:function cs(){},
cm:function cm(){},
cW:function cW(){},
cZ:function cZ(){},
fP:function fP(){},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
h3:function h3(a){this.a=a},
iq:function iq(){},
ir:function ir(){},
j_:function j_(a){this.b=0
this.c=a},
lN:function(a){if(a instanceof H.bo)return a.i(0)
return"Instance of '"+H.d(H.dG(a))+"'"},
js:function(a,b,c){var s,r=c?J.kc(a):J.lR(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jt:function(a,b){var s,r=[]
for(s=J.aO(a);s.p();)r.push(s.gv(s))
if(b)return r
return J.jp(r)},
jy:function(a){var s,r=a,q=r.length,p=P.jw(0,null,q)
if(typeof p!=="number")return p.aA()
s=p<q
return H.m6(s?r.slice(0,p):r)},
m8:function(a){return new H.h8(a,H.lU(a,!1,!0,!1,!1,!1))},
kt:function(a,b,c){var s=J.aO(b)
if(!s.p())return a
if(c.length===0){do a+=H.d(s.gv(s))
while(s.p())}else{a+=H.d(s.gv(s))
for(;s.p();)a=a+c+H.d(s.gv(s))}return a},
kS:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.ls().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.eV(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jv(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lK:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
k8:function(a){return new P.aW(1000*a)},
fS:function(a){if(typeof a=="number"||H.kW(a)||null==a)return J.a6(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lN(a)},
ft:function(a){return new P.cR(a)},
k_:function(a){return new P.W(!1,null,null,a)},
k0:function(a,b,c){return new P.W(!0,a,b,c)},
lB:function(a,b){if(a==null)throw H.c(new P.W(!1,null,b,"Must not be null"))
return a},
dH:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
jw:function(a,b,c){var s
if(typeof c!=="number")return H.K(c)
s=a>c
if(s)throw H.c(P.aA(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.K(c)
s=b>c}else s=!0
if(s)throw H.c(P.aA(b,a,c,"end",null))
return b}return c},
kp:function(a,b){if(a<0)throw H.c(P.aA(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.aP(b):e
return new P.db(s,!0,a,c,"Index out of range")},
v:function(a){return new P.ei(a)},
ky:function(a){return new P.ef(a)},
jx:function(a){return new P.bB(a)},
aU:function(a){return new P.cX(a)},
o:function(a){return new P.ez(a)},
jS:function(a){H.nX(a)},
ap:function ap(){},
aV:function aV(a,b){this.a=a
this.b=b},
T:function T(){},
aW:function aW(a){this.a=a},
fL:function fL(){},
fM:function fM(){},
E:function E(){},
cR:function cR(a){this.a=a},
dx:function dx(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
db:function db(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ei:function ei(a){this.a=a},
ef:function ef(a){this.a=a},
bB:function bB(a){this.a=a},
cX:function cX(a){this.a=a},
dA:function dA(){},
cf:function cf(){},
d_:function d_(a){this.a=a},
ez:function ez(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b},
h1:function h1(){},
q:function q(){},
f:function f(){},
dc:function dc(){},
ai:function ai(){},
dj:function dj(){},
a3:function a3(){},
M:function M(){},
H:function H(){},
I:function I(){},
aC:function aC(a){this.a=a},
aJ:function(a){var s,r,q,p,o
if(a==null)return null
s=P.ke(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
nF:function(a){var s={}
a.B(0,new P.j5(s))
return s},
j5:function j5(a){this.a=a},
d6:function d6(a,b){this.a=a
this.b=b},
fY:function fY(){},
fZ:function fZ(){},
eT:function eT(){},
aa:function aa(){},
bt:function bt(){},
dh:function dh(){},
bw:function bw(){},
dy:function dy(){},
hH:function hH(){},
bA:function bA(){},
dU:function dU(){},
j:function j(){},
bD:function bD(){},
e2:function e2(){},
eH:function eH(){},
eI:function eI(){},
eP:function eP(){},
eQ:function eQ(){},
f1:function f1(){},
f2:function f2(){},
fa:function fa(){},
fb:function fb(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
cS:function cS(){},
au:function au(){},
dz:function dz(){},
eo:function eo(){},
dQ:function dQ(){},
eY:function eY(){},
eZ:function eZ(){}},W={
jZ:function(){var s=document.createElement("a")
return s},
k5:function(){var s=document.createElement("canvas")
return s},
lM:function(a,b,c){var s,r=document.body
r.toString
s=C.l.Y(r,a,b,c)
s.toString
r=new H.be(new W.O(s),new W.fN())
return t.h.a(r.gam(r))},
fO:function(a){return"wheel"},
bW:function(a){var s,r,q="element tag unavailable"
try{s=J.bi(a)
if(typeof s.gcL(a)=="string")q=s.gcL(a)}catch(r){H.as(r)}return q},
iP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a,b,c,d){var s=W.iP(W.iP(W.iP(W.iP(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
P:function(a,b,c,d){var s=W.kZ(new W.iO(c),t.D)
if(s!=null&&!0)J.lu(a,b,s,!1)
return new W.ey(a,b,s,!1)},
kH:function(a){var s=W.jZ(),r=window.location
s=new W.bI(new W.iU(s,r))
s.d9(a)
return s},
mp:function(a,b,c,d){return!0},
mq:function(a,b,c,d){var s,r=d.a,q=r.a
q.href=c
s=q.hostname
r=r.b
if(!(s==r.hostname&&q.port==r.port&&q.protocol==r.protocol))if(s==="")if(q.port===""){r=q.protocol
r=r===":"||r===""}else r=!1
else r=!1
else r=!0
return r},
kN:function(){var s=t.N
s=new W.f5(P.kf(C.r,s),P.c2(s),P.c2(s),P.c2(s),null)
s.de(null,new H.c6(C.r,new W.iX()),["TEMPLATE"],null)
return s},
kZ:function(a,b){var s=$.ac
if(s===C.e)return a
return s.cc(a,b)},
k:function k(){},
fs:function fs(){},
cP:function cP(){},
cQ:function cQ(){},
bm:function bm(){},
cT:function cT(){},
aQ:function aQ(){},
aR:function aR(){},
a7:function a7(){},
fD:function fD(){},
D:function D(){},
bR:function bR(){},
fE:function fE(){},
a0:function a0(){},
ae:function ae(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
bS:function bS(){},
fJ:function fJ(){},
bT:function bT(){},
bU:function bU(){},
d2:function d2(){},
fK:function fK(){},
ep:function ep(a,b){this.a=a
this.b=b},
w:function w(){},
fN:function fN(){},
h:function h(){},
b:function b(){},
aX:function aX(){},
d4:function d4(){},
d5:function d5(){},
d7:function d7(){},
aY:function aY(){},
h2:function h2(){},
aZ:function aZ(){},
b3:function b3(){},
hd:function hd(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
hy:function hy(){},
hz:function hz(a){this.a=a},
b5:function b5(){},
dp:function dp(){},
Y:function Y(){},
O:function O(a){this.a=a},
t:function t(){},
cc:function cc(){},
b7:function b7(){},
dE:function dE(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
dL:function dL(){},
aB:function aB(){},
dO:function dO(){},
b8:function b8(){},
dP:function dP(){},
b9:function b9(){},
i0:function i0(){},
i1:function i1(a){this.a=a},
aD:function aD(){},
cg:function cg(){},
dV:function dV(){},
dW:function dW(){},
bC:function bC(){},
aE:function aE(){},
ab:function ab(){},
dX:function dX(){},
dY:function dY(){},
i6:function i6(){},
ba:function ba(){},
bb:function bb(){},
e1:function e1(){},
ia:function ia(){},
an:function an(){},
ip:function ip(){},
ek:function ek(){},
aF:function aF(){},
bG:function bG(){},
bH:function bH(){},
eq:function eq(){},
cj:function cj(){},
eD:function eD(){},
cn:function cn(){},
eX:function eX(){},
f3:function f3(){},
iM:function iM(){},
iN:function iN(a){this.a=a},
jn:function jn(a,b){this.a=a
this.$ti=b},
ey:function ey(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iO:function iO(a){this.a=a},
jC:function jC(a){this.$ti=a},
bI:function bI(a){this.a=a},
C:function C(){},
cd:function cd(a){this.a=a},
hD:function hD(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(){},
iV:function iV(){},
iW:function iW(){},
f5:function f5(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iX:function iX(){},
f4:function f4(){},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
a2:function a2(){},
iU:function iU(a,b){this.a=a
this.b=b},
fe:function fe(a){this.a=a
this.b=!1},
j0:function j0(a){this.a=a},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eG:function eG(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eR:function eR(){},
eS:function eS(){},
eU:function eU(){},
cu:function cu(){},
cv:function cv(){},
eV:function eV(){},
eW:function eW(){},
f0:function f0(){},
f6:function f6(){},
f7:function f7(){},
cx:function cx(){},
cy:function cy(){},
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
G:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.o("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.aO(a,0)
r=C.b.aO(b,0)
if(s>r){q=r
r=s
s=q}return new K.hI(s,r)},
m:function(a){var s=new K.hP()
s.d6(a)
return s},
at:function at(){},
d9:function d9(){},
U:function U(){this.a=null},
hI:function hI(a,b){this.a=a
this.b=b},
hP:function hP(){this.a=null}},L={
i8:function(){var s=new L.i7()
s.a=new H.u(t.V)
s.b=new H.u(t.w)
s.c=P.c2(t.k)
return s},
dR:function dR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.b=a
this.c=null},
i7:function i7(){var _=this
_.d=_.c=_.b=_.a=null},
ib:function ib(a){this.b=a
this.a=this.c=null}},O={
jl:function(){var s=new O.bp()
s.bJ()
return s},
bp:function bp(){this.c=this.b=this.a=null},
c7:function c7(){this.b=this.a=null},
dl:function dl(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(){},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(){},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(){},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(){},
hh:function hh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dm:function dm(){},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ak:function ak(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hk:function hk(){var _=this
_.e=_.d=_.c=_.b=null},
hl:function hl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hm:function hm(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
i4:function i4(){}},E={
kE:function(){if(J.ji(window.navigator.vendor,"Google"))return C.y
if(J.ji(window.navigator.userAgent,"Firefox"))return C.m
var s=window.navigator.appVersion
if(J.bh(s).t(s,"Trident")||C.b.t(s,"Edge"))return C.n
if(J.ji(window.navigator.appName,"Microsoft"))return C.n
return C.z},
kF:function(){var s=window.navigator.appVersion
if(J.bh(s).t(s,"Win"))return C.R
if(C.b.t(s,"Mac"))return C.t
if(C.b.t(s,"Linux"))return C.S
return C.T},
ma:function(a,b){var s=new E.hJ(a)
s.d5(a,b)
return s},
mh:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.ku(a,!0,!0,!0,!1)
s=W.k5()
r=s.style
r.width="100%"
r.height="100%"
J.lx(a).q(0,s)
return E.ku(s,!0,!0,!0,!1)},
ku:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.dZ(),n=t.z,m=C.I.cT(a,"webgl2",P.lV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.p(P.o("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ma(m,a)
m.getParameter(3379)
m.getParameter(34076)
n=new X.ej(a)
s=new X.ha()
s.d=P.c2(t.e)
n.b=s
s=new X.hA(n)
s.f=0
s.r=V.dF()
s.x=V.dF()
s.ch=s.Q=1
n.c=s
s=new X.he(n)
s.r=0
s.x=V.dF()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.i9(n)
s.f=V.dF()
s.r=V.dF()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fQ
n.Q=(s==null?$.fQ=new E.ew(E.kE(),E.kF()):s).a===C.m?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.P(q,"contextmenu",n.gdS(),!1))
n.z.push(W.P(a,"focus",n.gdY(),!1))
n.z.push(W.P(a,"blur",n.gdM(),!1))
n.z.push(W.P(q,"keyup",n.ge1(),!1))
n.z.push(W.P(q,"keydown",n.ge_(),!1))
n.z.push(W.P(a,"mousedown",n.ge5(),!1))
n.z.push(W.P(a,"mouseup",n.ge9(),!1))
n.z.push(W.P(a,p,n.ge7(),!1))
r=n.z
W.fO(a)
W.fO(a)
r.push(W.P(a,W.fO(a),n.geb(),!1))
n.z.push(W.P(q,p,n.gdU(),!1))
n.z.push(W.P(q,"mouseup",n.gdW(),!1))
n.z.push(W.P(q,"pointerlockchange",n.ged(),!1))
n.z.push(W.P(a,"touchstart",n.geo(),!1))
n.z.push(W.P(a,"touchend",n.gek(),!1))
n.z.push(W.P(a,"touchmove",n.gem(),!1))
o.ch=!0
o.cx=!1
o.cy=new P.aV(Date.now(),!1)
o.db=0
o.bZ()
return o},
fA:function fA(){},
br:function br(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bn:function bn(a){this.b=a},
bx:function bx(a){this.b=a},
ew:function ew(a,b){this.a=a
this.b=b},
hJ:function hJ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
dZ:function dZ(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
i5:function i5(a){this.a=a}},Z={
mk:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cD(c)),35044)
a.bindBuffer(b,null)
return new Z.el(b,s)},
a5:function(a){return new Z.bd(a)},
el:function el(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iH:function iH(a){this.a=a},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
a8:function(){var s=new D.bs()
s.d=0
return s},
fC:function fC(){},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
af:function af(){this.b=null},
b_:function b_(){this.b=null},
b0:function b0(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ah:function ah(){},
c1:function c1(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={cV:function cV(a,b){this.a=a
this.b=b},dg:function dg(a,b){this.a=a
this.b=b},ha:function ha(){this.d=this.b=this.a=null},he:function he(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c8:function c8(a,b,c){this.a=a
this.b=b
this.c=c},hA:function hA(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i9:function i9(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},ej:function ej(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lO:function(a){var s=new X.h0(),r=V.aq(1)
s.a=new V.aT(0,0,0,r)
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.kq
if(r==null){r=V.m9(0,0,1,1)
$.kq=r}s.r=r
return s},
jk:function jk(){},
h0:function h0(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(){},
l5:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.md("Test 003"),c=W.k5()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
d.c7(["A test of the Material Light Shader with a solid color directional lighting."])
d.c7(["\xab[Back to Tests|../]"])
s=new E.br()
s.a=""
s.b=!0
r=O.jl()
s.y=r
r.b3(s.gfe(),s.gfh())
s.dy=s.dx=s.db=s.cy=s.cx=s.ch=s.Q=s.z=null
s.sbE(0,e)
s.saI(e)
s.sbE(0,F.o2())
r=new U.dJ()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.scQ(0)
r.scF(0,0)
r.scK(0)
q=r.d
$.A().toString
if(!(Math.abs(q-0.1)<1e-9)){r.d=0.1
q=new D.B("deltaYaw",q,0.1)
q.b=!0
r.aq(q)}q=r.e
$.A().toString
if(!(Math.abs(q-0.21)<1e-9)){r.e=0.21
q=new D.B("deltaPitch",q,0.21)
q.b=!0
r.aq(q)}q=r.f
$.A().toString
if(!(Math.abs(q-0.32)<1e-9)){r.f=0.32
q=new D.B("deltaRoll",q,0.32)
q.b=!0
r.aq(q)}s.saI(r)
p=new O.dl()
r=O.jl()
p.e=r
r.b3(p.gdI(),p.gdK())
r=new O.ak(p,"emission")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
p.f=r
r=new O.ak(p,"ambient")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
p.r=r
r=new O.ak(p,"diffuse")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
p.x=r
r=new O.ak(p,"invDiffuse")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
p.y=r
r=new O.hm(p,"specular")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
r.ch=100
p.z=r
r=new O.hi(p,"bump")
r.c=new A.Q(!1,!1,!1)
p.Q=r
p.ch=null
r=new O.ak(p,"reflect")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
p.cx=r
r=new O.hl(p,"refract")
r.c=new A.Q(!1,!1,!1)
r.f=new V.N(0,0,0)
r.ch=1
p.cy=r
r=new O.hh(p,"alpha")
r.c=new A.Q(!1,!1,!1)
r.f=1
p.db=r
r=new D.c1()
r.bJ()
r.e=[]
r.f=[]
r.r=[]
r.x=[]
r.z=r.y=null
r.bD(r.gdG(),r.geg(),r.gei())
p.dx=r
q=new O.hk()
q.b=new V.aT(0,0,0,0)
q.c=1
q.d=10
q.e=!1
p.dy=q
q=r.y
r=q==null?r.y=D.a8():q
r.q(0,p.gey())
r=p.dx
q=r.z
r=q==null?r.z=D.a8():q
r.q(0,p.gdf())
p.fr=null
r=p.dx
o=V.jB()
q=U.k7(V.kh(V.km(),o,new V.z(1,1,-3)))
n=new V.N(1,1,1)
m=new D.bq()
m.c=new V.N(1,1,1)
m.a=V.kC()
m.d=V.jB()
m.e=V.mj()
l=m.b
m.b=q
q.gA().q(0,m.gda())
q=new D.B("mover",l,m.b)
q.b=!0
m.a7(q)
if(!m.c.n(0,n)){l=m.c
m.c=n
q=new D.B("color",l,n)
q.b=!0
m.a7(q)}r.q(0,m)
p.r.sau(0,new V.N(V.aq(0),V.aq(0),V.aq(1)))
p.x.sau(0,new V.N(V.aq(0),V.aq(1),V.aq(0)))
p.z.sau(0,new V.N(V.aq(1),V.aq(0),V.aq(0)))
r=p.z
r.c0(new A.Q(!0,!1,!1))
r.c1(10)
k=new M.d3()
k.a=!0
r=O.jl()
k.e=r
r.b3(k.gdO(),k.gdQ())
k.y=k.x=k.r=k.f=null
j=X.lO(e)
i=new X.dB()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.saI(e)
r=i.c
$.A().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){i.c=1.0471975511965976
r=new D.B("fov",r,1.0471975511965976)
r.b=!0
i.ao(r)}r=i.d
$.A().toString
if(!(Math.abs(r-0.1)<1e-9)){i.d=0.1
r=new D.B("near",r,0.1)
r.b=!0
i.ao(r)}r=i.e
$.A().toString
if(!(Math.abs(r-2000)<1e-9)){i.e=2000
r=new D.B("far",r,2000)
r.b=!0
i.ao(r)}r=k.b
if(r!==i){if(r!=null)r.gA().K(0,k.ga3())
l=k.b
k.b=i
i.gA().q(0,k.ga3())
r=new D.B("camera",l,k.b)
r.b=!0
k.a8(r)}r=k.c
if(r!==j){if(r!=null)r.gA().K(0,k.ga3())
l=k.c
k.c=j
j.gA().q(0,k.ga3())
r=new D.B("target",l,k.c)
r.b=!0
k.a8(r)}k.scM(e)
k.scM(p)
k.e.q(0,s)
k.b.saI(U.k7(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=document.getElementById(f)
if(h==null)H.p(P.o("Failed to find an element with the identifier, testCanvas."))
g=E.mh(h,!0,!0,!0,!1)
r=g.d
if(r!==k){if(r!=null)r.gA().K(0,g.gbK())
g.d=k
k.gA().q(0,g.gbK())
g.bL()}r=g.Q
if(r==null)r=g.Q=D.a8()
q=r.b
r=q==null?r.b=[]:q
r.push(new X.je(d,p))
V.nY(g)},
je:function je(a,b){this.a=a
this.b=b}},V={
aq:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
jU:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.cU(a-b,s)
return(a<0?a+s:a)+b},
y:function(a,b,c){if(a==null)return C.b.ai("null",c)
$.A().toString
return C.b.ai(C.d.cN(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bO:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.n)(a),++q){p=V.y(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.e(m,o)
s=C.b.ai(m[o],r)
n=m.length
if(o>=n)return H.e(m,o)
m[o]=s}return m},
ju:function(){var s=$.ki
return s==null?$.ki=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kh:function(a,b,c){var s=c.E(),r=b.ad(s).E(),q=s.ad(r),p=new V.z(a.a,a.b,a.c),o=r.aB(0).aG(p),n=q.aB(0).aG(p),m=s.aB(0).aG(p)
return V.ay(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
dF:function(){var s=$.kl
return s==null?$.kl=new V.az(0,0):s},
km:function(){var s=$.al
return s==null?$.al=new V.R(0,0,0):s},
m9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dI(a,b,c,d)},
ci:function(){var s=$.kB
return s==null?$.kB=new V.z(0,0,0):s},
mj:function(){var s=$.is
return s==null?$.is=new V.z(-1,0,0):s},
jB:function(){var s=$.it
return s==null?$.it=new V.z(0,1,0):s},
kC:function(){var s=$.iu
return s==null?$.iu=new V.z(0,0,1):s},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(){},
dn:function dn(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bu:function bu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
az:function az(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function(a){P.mi(C.K,new V.jg(a))},
md:function(a){var s=new V.hU()
s.d8(a,!0)
return s},
aS:function aS(){},
jg:function jg(a){this.a=a},
d0:function d0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d8:function d8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
da:function da(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dD:function dD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hU:function hU(){this.b=this.a=null},
hW:function hW(a){this.a=a},
hV:function hV(a){this.a=a},
hX:function hX(a){this.a=a}},U={
k7:function(a){var s=new U.cY()
s.a=a
return s},
cY:function cY(){this.b=this.a=null},
hB:function hB(){},
dJ:function dJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lX:function(a,b){var s=a.aH,r=new A.hg(b,s)
r.d7(b,s)
r.d4(a,b)
return r},
lY:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="MaterialLight_"+a4.ga2(a4)+a5.ga2(a5)+a6.ga2(a6)+a7.ga2(a7)+a8.ga2(a8)+a9.ga2(a9)+b0.ga2(b0)+b1.ga2(b1)+b2.ga2(b2)+"_"
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
c=$.aN()
if(h){s=$.aM()
c=new Z.bd(c.a|s.a)}if(g){s=$.aL()
c=new Z.bd(c.a|s.a)}if(f){s=$.aK()
c=new Z.bd(c.a|s.a)}return new A.hj(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
j2:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
j3:function(a,b,c){var s
A.j2(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fq(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
n8:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.j2(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
n4:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.j3(b,r,"ambient")
b.a+="\n"},
n6:function(a,b){var s,r=a.c
if(!r.a)s=!1
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
r+=u.e
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n9:function(a,b){var s,r=a.d
if(!r.a)s=!1
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
r+=u.e
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nf:function(a,b){var s,r=a.e
if(!r.a)s=!1
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
r+=u.e
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
nb:function(a,b){var s,r,q
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
nd:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.j2(b,r,"reflect")
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
ne:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.j2(b,r,"refract")
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
n5:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.d(s)
q=A.fq(r)
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
if(typeof s!=="number")return s.a_()
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
n7:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.d(s)
q=A.fq(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.a_()
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
nc:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.d(s)
q=A.fq(r)
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
if(typeof s!=="number")return s.a_()
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
ng:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.d(s)
q=A.fq(r)
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
if(typeof s!=="number")return s.a_()
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
if(m){s=$.fQ
if(s==null)s=$.fQ=new E.ew(E.kE(),E.kF())
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
na:function(a,b){var s,r
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
nh:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.aC("")
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
A.n8(a,h)
A.n4(a,h)
A.n6(a,h)
A.n9(a,h)
A.nf(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.nd(a,h)
A.ne(a,h)}A.nb(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.n5(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.n7(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.nc(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.n)(o),++m)A.ng(a,o[m],h)
A.na(a,h)}o=h.a+="// === Main ===\n"
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
h.a+=k+(p[0].toUpperCase()+C.b.a6(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.a6(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.a6(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.n)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.e(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.a6(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)s=!1
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
ni:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aW+"];\n"
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
nk:function(a,b){var s
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
nj:function(a,b){var s
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
nm:function(a,b){var s,r
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
nn:function(a,b){var s,r
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
nl:function(a,b){var s
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
no:function(a,b){var s
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
fq:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.a6(a,1)},
jA:function(a,b,c,d,e){var s=new A.ih(a,c,e)
s.f=d
P.js(d,0,!1)
return s},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b){var _=this
_.fT=_.fS=_.aX=_.aH=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.h5=_.h4=_.h3=_.bt=_.bs=_.br=_.bq=_.bp=_.bo=_.bn=_.bm=_.h2=_.h1=_.cp=_.h0=_.h_=_.co=_.cn=_.fZ=_.fY=_.cm=_.cl=_.fX=_.fW=_.ck=_.fV=_.fU=_.cj=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fz:function fz(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
hj:function hj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aW=b5
_.aH=b6
_.aX=b7},
e7:function e7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
e8:function e8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eb:function eb(a,b,c,d,e,f,g,h,i,j){var _=this
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
ee:function ee(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dM:function dM(){},
ig:function ig(){},
im:function im(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
e3:function e3(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
e5:function e5(a,b,c){this.a=a
this.c=b
this.d=c},
e6:function e6(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
e9:function e9(a,b,c){this.a=a
this.c=b
this.d=c},
ea:function ea(a,b,c){this.a=a
this.c=b
this.d=c},
ec:function ec(a,b,c){this.a=a
this.c=b
this.d=c},
ed:function ed(a,b,c){this.a=a
this.c=b
this.d=c}},F={
o2:function(){return F.nG(15,30,0.5,1,new F.jh())},
nG:function(a,b,c,d,e){var s=F.o_(a,b,new F.j6(e,d,b,c))
if(s==null)return null
s.at()
s.fd(new F.iB(),new F.hE())
return s},
o_:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)return e
if(b<1)return e
s=new F.hQ()
r=new F.iw(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hT()
r.b=[]
s.b=r
r=new F.hS(s)
r.b=[]
s.c=r
r=new F.hR(s)
r.b=[]
s.d=r
q=[]
for(p=0;p<=b;++p){o=p/b
r=s.a
if(o<0)n=0
else n=o>1?1:o
m=r.c6(new V.aT(n,0,0,1),new V.az(o,1))
c.$3(m,o,0)
q.push(m.cf(e))}for(p=1;p<=a;++p){l=p/a
for(r=l>1,n=l<0,k=1-l,j=0;j<=b;++j){o=j/b
i=s.a
if(o<0)h=0
else h=o>1?1:o
if(n)g=0
else g=r?1:l
if(n)f=0
else f=r?1:l
m=i.c6(new V.aT(h,g,f,1),new V.az(o,k))
c.$3(m,o,l)
q.push(m.cf(e))}}s.d.eM(a+1,b+1,q)
return s},
fW:function(a,b,c){var s=new F.fV(),r=a.a
if(r==null)H.p(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.p(P.o("May not create a face with vertices attached to different shapes."))
s.eD(a)
s.eE(b)
s.eF(c)
s.a.a.d.b.push(s)
s.a.a.U()
return s},
kD:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.iv(),p=new F.iE()
p.b=[]
q.b=p
p=new F.iA()
p.b=[]
p.c=[]
q.c=p
p=new F.ix()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.lo()
q.e=0
p=$.aN()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aM().a)!==0?e:r
q.x=(s&$.aL().a)!==0?b:r
q.y=(s&$.bk().a)!==0?f:r
q.z=(s&$.bl().a)!==0?g:r
q.Q=(s&$.lp().a)!==0?c:r
q.ch=(s&$.bP().a)!==0?i:0
q.cx=(s&$.aK().a)!==0?a:r
return q},
jh:function jh(){},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fX:function fX(){},
hY:function hY(){},
hb:function hb(){},
ie:function ie(){},
hQ:function hQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hR:function hR(a){this.a=a
this.b=null},
hS:function hS(a){this.a=a
this.b=null},
hT:function hT(){this.b=null},
iv:function iv(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iG:function iG(a){this.a=a},
iF:function iF(a){this.a=a},
iw:function iw(a){this.a=a
this.c=this.b=null},
ix:function ix(){this.d=this.c=this.b=null},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(){this.c=this.b=null},
iC:function iC(){},
iB:function iB(){},
iD:function iD(){},
hE:function hE(){},
iE:function iE(){this.b=null}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jq.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gM:function(a){return H.ce(a)},
i:function(a){return"Instance of '"+H.d(H.dG(a))+"'"}}
J.h7.prototype={
i:function(a){return String(a)},
gM:function(a){return a?519018:218159}}
J.c0.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gM:function(a){return 0}}
J.b2.prototype={
gM:function(a){return 0},
i:function(a){return String(a)}}
J.dC.prototype={}
J.bc.prototype={}
J.a9.prototype={
i:function(a){var s=a[$.ld()]
if(s==null)return this.d1(a)
return"JavaScript function for "+H.d(J.a6(s))}}
J.a1.prototype={
by:function(a,b){if(!!a.fixed$length)H.p(P.v("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dH(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.p(P.v("remove"))
for(s=0;s<a.length;++s)if(J.J(a[s],b)){a.splice(s,1)
return!0}return!1},
X:function(a,b){var s,r
if(!!a.fixed$length)H.p(P.v("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.n)(b),++r)a.push(b[r])},
B:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aU(a))}},
k:function(a,b){var s,r,q=P.js(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.d(a[s])
if(s>=q.length)return H.e(q,s)
q[s]=r}return q.join(b)},
fa:function(a){return this.k(a,"")},
f7:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.aU(a))}throw H.c(H.h6())},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gf6:function(a){if(a.length>0)return a[0]
throw H.c(H.h6())},
gaZ:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.h6())},
c8:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aU(a))}return!1},
aD:function(a,b){if(!!a.immutable$list)H.p(P.v("sort"))
H.mg(a,b==null?J.mW():b)},
cY:function(a){return this.aD(a,null)},
t:function(a,b){var s
for(s=0;s<a.length;++s)if(J.J(a[s],b))return!0
return!1},
i:function(a){return P.jo(a,"[","]")},
gI:function(a){return new J.X(a,a.length)},
gM:function(a){return H.ce(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.v("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ii:1,
$if:1}
J.de.prototype={}
J.X.prototype={
gv:function(a){return this.d},
p:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.b1.prototype={
av:function(a,b){var s
if(typeof b!="number")throw H.c(H.bg(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaY(b)
if(this.gaY(a)===s)return 0
if(this.gaY(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaY:function(a){return a===0?1/a<0:a<0},
cq:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.v(""+a+".floor()"))},
a1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
cN:function(a,b){var s
if(b>20)throw H.c(P.aA(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaY(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gM:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
cU:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
d3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c2(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.c2(a,b)},
c2:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.v("Result of truncating division is "+H.d(s)+": "+H.d(a)+" ~/ "+b))},
aR:function(a,b){var s
if(a>0)s=this.eJ(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eJ:function(a,b){return b>31?0:a>>>b},
$iT:1,
$iM:1}
J.c_.prototype={$iq:1}
J.dd.prototype={}
J.ag.prototype={
bl:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.p(H.bN(a,b))
return a.charCodeAt(b)},
aO:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.c(P.k0(b,null,null))
return a+b},
b4:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dH(b,null))
if(b>c)throw H.c(P.dH(b,null))
if(c>a.length)throw H.c(P.dH(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.aM(a,b,null)},
fI:function(a){return a.toLowerCase()},
H:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ai:function(a,b){var s=b-a.length
if(s<=0)return a
return this.H(" ",s)+a},
eT:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aA(c,0,s,null,null))
return H.l9(a,b,c)},
t:function(a,b){return this.eT(a,b,0)},
av:function(a,b){var s
if(typeof b!="string")throw H.c(H.bg(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gM:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gl:function(a){return a.length},
$iI:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bl(this.a,b)}}
H.i.prototype={}
H.c4.prototype={
gI:function(a){return new H.ax(this,this.gl(this))},
b2:function(a,b){return this.d0(0,b)}}
H.ax.prototype={
gv:function(a){var s=this.d
return s},
p:function(){var s,r=this,q=r.a,p=J.bh(q),o=p.gl(q)
if(r.b!=o)throw H.c(P.aU(q))
s=r.c
if(typeof o!=="number")return H.K(o)
if(s>=o){r.d=null
return!1}r.d=p.u(q,s);++r.c
return!0}}
H.b4.prototype={
gI:function(a){return new H.c5(J.aO(this.a),this.b)},
gl:function(a){return J.aP(this.a)},
u:function(a,b){return this.b.$1(J.fr(this.a,b))}}
H.bV.prototype={$ii:1}
H.c5.prototype={
p:function(){var s=this,r=s.b
if(r.p()){s.a=s.c.$1(r.gv(r))
return!0}s.a=null
return!1},
gv:function(a){var s=this.a
return s}}
H.c6.prototype={
gl:function(a){return J.aP(this.a)},
u:function(a,b){return this.b.$1(J.fr(this.a,b))}}
H.be.prototype={
gI:function(a){return new H.em(J.aO(this.a),this.b)}}
H.em.prototype={
p:function(){var s,r
for(s=this.a,r=this.b;s.p();)if(r.$1(s.gv(s)))return!0
return!1},
gv:function(a){var s=this.a
return s.gv(s)}}
H.bX.prototype={}
H.eh.prototype={
m:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.bE.prototype={}
H.ic.prototype={
Z:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dw.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.df.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.d(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.d(r.a)+")"
return q+p+"' on '"+s+"' ("+H.d(r.a)+")"}}
H.eg.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hF.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.f_.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bo.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lb(r==null?"unknown":r)+"'"},
gfL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.i_.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lb(s)+"'"}}
H.bQ.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bQ))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gM:function(a){var s,r=this.c
if(r==null)s=H.ce(this.a)
else s=typeof r!=="object"?J.a_(r):H.ce(r)
return(s^H.ce(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.dG(s))+"'")}}
H.dK.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.u.prototype={
gl:function(a){return this.a},
gT:function(a){return new H.aw(this)},
gfK:function(a){return H.lW(new H.aw(this),new H.h9(this))},
eU:function(a,b){var s=this.b
if(s==null)return!1
return this.dv(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aP(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aP(p,b)
q=r==null?n:r.b
return q}else return o.f9(b)},
f9:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bV(q,J.a_(a)&0x3ffffff)
r=this.cr(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bO(s==null?m.b=m.bc():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bO(r==null?m.c=m.bc():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bc()
p=J.a_(b)&0x3ffffff
o=m.bV(q,p)
if(o==null)m.bf(q,p,[m.bd(b,c)])
else{n=m.cr(o,b)
if(n>=0)o[n].b=c
else o.push(m.bd(b,c))}}},
B:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aU(s))
r=r.c}},
bO:function(a,b,c){var s=this.aP(a,b)
if(s==null)this.bf(a,b,this.bd(b,c))
else s.b=c},
dE:function(){this.r=this.r+1&67108863},
bd:function(a,b){var s,r=this,q=new H.hc(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.dE()
return q},
cr:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1},
i:function(a){return P.kg(this)},
aP:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
bf:function(a,b,c){a[b]=c},
dB:function(a,b){delete a[b]},
dv:function(a,b){return this.aP(a,b)!=null},
bc:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bf(r,s,r)
this.dB(r,s)
return r}}
H.h9.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mU(this.a).aa("2(1)")}}
H.hc.prototype={}
H.aw.prototype={
gl:function(a){return this.a.a},
gI:function(a){var s=this.a,r=new H.di(s,s.r)
r.c=s.e
return r}}
H.di.prototype={
gv:function(a){return this.d},
p:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aU(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.j9.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.ja.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jb.prototype={
$1:function(a){return this.a(a)}}
H.h8.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ca.prototype={}
H.bv.prototype={
gl:function(a){return a.length},
$ir:1}
H.b6.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.c9.prototype={
m:function(a,b,c){H.ao(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.dq.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.dr.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.ds.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.dt.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.du.prototype={
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.cb.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.dv.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ao(b,a,a.length)
return a[b]}}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
H.a4.prototype={
aa:function(a){return H.fd(v.typeUniverse,this,a)},
bP:function(a){return H.mJ(v.typeUniverse,this,a)}}
H.eC.prototype={}
H.ex.prototype={
i:function(a){return this.a}}
H.cA.prototype={}
P.iJ.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:13}
P.iI.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.iK.prototype={
$0:function(){this.a.$0()}}
P.iL.prototype={
$0:function(){this.a.$0()}}
P.cz.prototype={
dh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.iZ(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
di:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.iY(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$ich:1}
P.iZ.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iY.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.d3(s,o)}q.c=p
r.d.$1(q)}}
P.bJ.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bf.prototype={
gv:function(a){var s=this.c
if(s==null)return this.b
return s.gv(s)},
p:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.p())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bJ){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aO(s)
if(o instanceof P.bf){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cw.prototype={
gI:function(a){return new P.bf(this.a())}}
P.en.prototype={}
P.dS.prototype={}
P.dT.prototype={}
P.ch.prototype={}
P.j1.prototype={}
P.j4.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.a6(this.b)
throw s}}
P.iR.prototype={
fD:function(a){var s,r,q,p=null
try{if(C.e===$.ac){a.$0()
return}P.nr(p,p,this,a)}catch(q){s=H.as(q)
r=H.jP(q)
P.kY(p,p,this,s,r)}},
fE:function(a,b){var s,r,q,p=null
try{if(C.e===$.ac){a.$1(b)
return}P.ns(p,p,this,a,b)}catch(q){s=H.as(q)
r=H.jP(q)
P.kY(p,p,this,s,r)}},
fF:function(a,b){return this.fE(a,b,t.z)},
eQ:function(a){return new P.iS(this,a)},
cc:function(a,b){return new P.iT(this,a,b)}}
P.iS.prototype={
$0:function(){return this.a.fD(this.b)}}
P.iT.prototype={
$1:function(a){return this.a.fF(this.b,a)},
$S:function(){return this.c.aa("~(0)")}}
P.ck.prototype={
gI:function(a){var s=new P.cl(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
t:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dt(b)
return r}},
dt:function(a){var s=this.d
if(s==null)return!1
return this.ba(s[this.b7(a)],a)>=0},
q:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bQ(s==null?q.b=P.jD():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bQ(r==null?q.c=P.jD():r,b)}else return q.dk(0,b)},
dk:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jD()
s=q.b7(b)
r=p[s]
if(r==null)p[s]=[q.b6(b)]
else{if(q.ba(r,b)>=0)return!1
r.push(q.b6(b))}return!0},
K:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.er(this.c,b)
else return this.eq(0,b)},
eq:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.b7(b)
r=n[s]
q=o.ba(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.c4(p)
return!0},
bQ:function(a,b){if(a[b]!=null)return!1
a[b]=this.b6(b)
return!0},
er:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.c4(s)
delete a[b]
return!0},
bR:function(){this.r=1073741823&this.r+1},
b6:function(a){var s,r=this,q=new P.iQ(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bR()
return q},
c4:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bR()},
b7:function(a){return J.a_(a)&1073741823},
ba:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.J(a[r].a,b))return r
return-1}}
P.iQ.prototype={}
P.cl.prototype={
gv:function(a){return this.d},
p:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aU(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bZ.prototype={}
P.c3.prototype={$ii:1,$if:1}
P.x.prototype={
gI:function(a){return new H.ax(a,this.gl(a))},
u:function(a,b){return this.h(a,b)},
gct:function(a){return this.gl(a)===0},
fH:function(a,b){var s,r,q,p,o=this
if(o.gct(a)){s=J.kc(0)
return s}r=o.h(a,0)
q=P.js(o.gl(a),r,!0)
p=1
while(!0){s=o.gl(a)
if(typeof s!=="number")return H.K(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s;++p}return q},
fG:function(a){return this.fH(a,!0)},
i:function(a){return P.jo(a,"[","]")}}
P.dk.prototype={}
P.hf.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.d(a)
r.a=s+": "
r.a+=H.d(b)},
$S:14}
P.aj.prototype={
B:function(a,b){var s,r
for(s=J.aO(this.gT(a));s.p();){r=s.gv(s)
b.$2(r,this.h(a,r))}},
gl:function(a){return J.aP(this.gT(a))},
i:function(a){return P.kg(a)}}
P.cs.prototype={
X:function(a,b){var s
for(s=J.aO(b);s.p();)this.q(0,s.gv(s))},
i:function(a){return P.jo(this,"{","}")},
u:function(a,b){var s,r,q,p="index"
P.lB(b,p)
P.kp(b,p)
for(s=P.mt(this,this.r),r=0;s.p();){q=s.d
if(b===r)return q;++r}throw H.c(P.F(b,this,p,null,r))},
$ii:1,
$if:1}
P.cm.prototype={}
P.cW.prototype={}
P.cZ.prototype={}
P.fP.prototype={}
P.h4.prototype={
i:function(a){return this.a}}
P.h3.prototype={
dw:function(a,b,c){var s,r,q,p,o,n,m=null
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
default:n=m}if(n!=null){if(o==null)o=new P.aC("")
if(p>b)o.a+=C.b.aM(a,b,p)
o.a+=n
b=p+1}}if(o==null)return m
if(c>b)o.a+=J.lz(a,b,c)
s=o.a
return s.charCodeAt(0)==0?s:s}}
P.iq.prototype={}
P.ir.prototype={
eV:function(a){var s,r,q,p=null,o=P.jw(0,p,a.length)
if(o==null)throw H.c(new P.bz(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.j_(r)
if(q.dD(a,0,o)!==o){C.b.bl(a,o-1)
q.bh()}return new Uint8Array(r.subarray(0,H.mO(0,q.b,r.length)))}}
P.j_.prototype={
bh:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
eK:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bh()
return!1}},
dD:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bl(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.aO(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.eK(p,C.b.aO(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bh()}else if(p<=2047){o=l.b
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
P.ap.prototype={}
P.aV.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aV&&this.a===b.a&&!0},
av:function(a,b){return C.c.av(this.a,b.a)},
gM:function(a){var s=this.a
return(s^C.c.aR(s,30))&1073741823},
i:function(a){var s=this,r=P.lK(H.m5(s)),q=P.d1(H.m3(s)),p=P.d1(H.m_(s)),o=P.d1(H.m0(s)),n=P.d1(H.m2(s)),m=P.d1(H.m4(s)),l=P.lL(H.m1(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.T.prototype={}
P.aW.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gM:function(a){return C.c.gM(this.a)},
av:function(a,b){return C.c.av(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fM(),o=this.a
if(o<0)return"-"+new P.aW(0-o).i(0)
s=p.$1(C.c.S(o,6e7)%60)
r=p.$1(C.c.S(o,1e6)%60)
q=new P.fL().$1(o%1e6)
return""+C.c.S(o,36e8)+":"+H.d(s)+":"+H.d(r)+"."+H.d(q)}}
P.fL.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fM.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.E.prototype={}
P.cR.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fS(s)
return"Assertion failed"}}
P.dx.prototype={
i:function(a){return"Throw of null."}}
P.W.prototype={
gb9:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb8:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gb9()+o+m
if(!q.a)return l
s=q.gb8()
r=P.fS(q.b)
return l+s+": "+r}}
P.bz.prototype={
gb9:function(){return"RangeError"},
gb8:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.d(q):""
else if(q==null)s=": Not greater than or equal to "+H.d(r)
else if(q>r)s=": Not in inclusive range "+H.d(r)+".."+H.d(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.d(r)
return s}}
P.db.prototype={
gb9:function(){return"RangeError"},
gb8:function(){var s,r=this.b
if(typeof r!=="number")return r.aA()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.d(s)},
gl:function(a){return this.f}}
P.ei.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ef.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bB.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cX.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fS(s)+"."}}
P.dA.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.cf.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.d_.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.ez.prototype={
i:function(a){return"Exception: "+this.a}}
P.h_.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.aM(q,0,75)+"..."
return r+"\n"+q}}
P.h1.prototype={}
P.q.prototype={}
P.f.prototype={
b2:function(a,b){return new H.be(this,b)},
gl:function(a){var s,r=this.gI(this)
for(s=0;r.p();)++s
return s},
gam:function(a){var s,r=this.gI(this)
if(!r.p())throw H.c(H.h6())
s=r.gv(r)
if(r.p())throw H.c(H.lQ())
return s},
u:function(a,b){var s,r,q
P.kp(b,"index")
for(s=this.gI(this),r=0;s.p();){q=s.gv(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.lP(this,"(",")")}}
P.dc.prototype={}
P.ai.prototype={$ii:1,$if:1}
P.dj.prototype={}
P.a3.prototype={
gM:function(a){return P.H.prototype.gM.call(C.f,this)},
i:function(a){return"null"}}
P.M.prototype={}
P.H.prototype={constructor:P.H,$iH:1,
n:function(a,b){return this===b},
gM:function(a){return H.ce(this)},
i:function(a){return"Instance of '"+H.d(H.dG(this))+"'"},
toString:function(){return this.i(this)}}
P.I.prototype={}
P.aC.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.fs.prototype={
gl:function(a){return a.length}}
W.cP.prototype={
i:function(a){return String(a)}}
W.cQ.prototype={
i:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.cT.prototype={}
W.aQ.prototype={$iaQ:1}
W.aR.prototype={
cT:function(a,b,c){var s=a.getContext(b,P.nF(c))
return s},
$iaR:1}
W.a7.prototype={
gl:function(a){return a.length}}
W.fD.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bR.prototype={
gl:function(a){return a.length}}
W.fE.prototype={}
W.a0.prototype={}
W.ae.prototype={}
W.fF.prototype={
gl:function(a){return a.length}}
W.fG.prototype={
gl:function(a){return a.length}}
W.fH.prototype={
gl:function(a){return a.length}}
W.bS.prototype={}
W.fJ.prototype={
i:function(a){return String(a)}}
W.bT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.bU.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaz(a))+" x "+H.d(this.gax(a))},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bi(b)
s=a.left==s.gcv(b)&&a.top==s.gcO(b)&&this.gaz(a)==s.gaz(b)&&this.gax(a)==s.gax(b)}else s=!1
return s},
gM:function(a){return W.kJ(J.a_(a.left),J.a_(a.top),J.a_(this.gaz(a)),J.a_(this.gax(a)))},
gax:function(a){return a.height},
gcv:function(a){return a.left},
gcO:function(a){return a.top},
gaz:function(a){return a.width},
$iaa:1}
W.d2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.fK.prototype={
gl:function(a){return a.length}}
W.ep.prototype={
gct:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b])},
q:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var s=this.fG(this)
return new J.X(s,s.length)}}
W.w.prototype={
geP:function(a){return new W.iN(a)},
gcd:function(a){return new W.ep(a,a.children)},
i:function(a){return a.localName},
Y:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.ka
if(s==null){s=[]
r=new W.cd(s)
s.push(W.kH(null))
s.push(W.kN())
$.ka=r
d=r}else d=s
s=$.k9
if(s==null){s=new W.fe(d)
$.k9=s
c=s}else{s.a=d
c=s}}if($.av==null){s=document
r=s.implementation.createHTMLDocument("")
$.av=r
$.jm=r.createRange()
r=$.av.createElement("base")
t.v.a(r)
r.href=s.baseURI
$.av.head.appendChild(r)}s=$.av
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.av
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.av.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.t(C.P,a.tagName)){$.jm.selectNodeContents(q)
s=$.jm
p=s.createContextualFragment(b)}else{q.innerHTML=b
p=$.av.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.av.body)J.jY(q)
c.bC(p)
document.adoptNode(p)
return p},
eW:function(a,b,c){return this.Y(a,b,c,null)},
cW:function(a,b){a.textContent=null
a.appendChild(this.Y(a,b,null,null))},
gcL:function(a){return a.tagName},
$iw:1}
W.fN.prototype={
$1:function(a){return t.h.b(a)}}
W.h.prototype={$ih:1}
W.b.prototype={
eL:function(a,b,c,d){if(c!=null)this.dl(a,b,c,!1)},
dl:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)},
$ib:1}
W.aX.prototype={$iaX:1}
W.d4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.d5.prototype={
gl:function(a){return a.length}}
W.d7.prototype={
gl:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.h2.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b3.prototype={$ib3:1}
W.hd.prototype={
i:function(a){return String(a)}}
W.hv.prototype={
gl:function(a){return a.length}}
W.hw.prototype={
h:function(a,b){return P.aJ(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aJ(s.value[1]))}},
gT:function(a){var s=[]
this.B(a,new W.hx(s))
return s},
gl:function(a){return a.size}}
W.hx.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hy.prototype={
h:function(a,b){return P.aJ(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aJ(s.value[1]))}},
gT:function(a){var s=[]
this.B(a,new W.hz(s))
return s},
gl:function(a){return a.size}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b5.prototype={$ib5:1}
W.dp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.Y.prototype={$iY:1}
W.O.prototype={
gam:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jx("No elements"))
if(r>1)throw H.c(P.jx("More than one element"))
s=s.firstChild
s.toString
return s},
X:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q)}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b])},
gI:function(a){var s=this.a.childNodes
return new W.bY(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.t.prototype={
fv:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
fB:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lt(s,b,a)}catch(q){H.as(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.d_(a):s},
ew:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.cc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b7.prototype={
gl:function(a){return a.length},
$ib7:1}
W.dE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.hN.prototype={
h:function(a,b){return P.aJ(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aJ(s.value[1]))}},
gT:function(a){var s=[]
this.B(a,new W.hO(s))
return s},
gl:function(a){return a.size}}
W.hO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dL.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.dO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b8.prototype={$ib8:1}
W.dP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.b9.prototype={
gl:function(a){return a.length},
$ib9:1}
W.i0.prototype={
h:function(a,b){return a.getItem(H.jJ(b))},
B:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gT:function(a){var s=[]
this.B(a,new W.i1(s))
return s},
gl:function(a){return a.length}}
W.i1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.cg.prototype={
Y:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.b5(a,b,c,d)
s=W.lM("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.O(r).X(0,new W.O(s))
return r}}
W.dV.prototype={
Y:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.b5(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.v.Y(s.createElement("table"),b,c,d)
s.toString
s=new W.O(s)
q=s.gam(s)
q.toString
s=new W.O(q)
p=s.gam(s)
r.toString
p.toString
new W.O(r).X(0,new W.O(p))
return r}}
W.dW.prototype={
Y:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.b5(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.v.Y(s.createElement("table"),b,c,d)
s.toString
s=new W.O(s)
q=s.gam(s)
r.toString
q.toString
new W.O(r).X(0,new W.O(q))
return r}}
W.bC.prototype={$ibC:1}
W.aE.prototype={$iaE:1}
W.ab.prototype={$iab:1}
W.dX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.dY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.i6.prototype={
gl:function(a){return a.length}}
W.ba.prototype={$iba:1}
W.bb.prototype={$ibb:1}
W.e1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.ia.prototype={
gl:function(a){return a.length}}
W.an.prototype={}
W.ip.prototype={
i:function(a){return String(a)}}
W.ek.prototype={
gl:function(a){return a.length}}
W.aF.prototype={
geZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.v("deltaY is not supported"))},
geY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.v("deltaX is not supported"))},
$iaF:1}
W.bG.prototype={
ex:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
dC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bH.prototype={$ibH:1}
W.eq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cj.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bi(b)
s=a.left==s.gcv(b)&&a.top==s.gcO(b)&&a.width==s.gaz(b)&&a.height==s.gax(b)}else s=!1
return s},
gM:function(a){return W.kJ(J.a_(a.left),J.a_(a.top),J.a_(a.width),J.a_(a.height))},
gax:function(a){return a.height},
gaz:function(a){return a.width}}
W.eD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.cn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.eX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.f3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ii:1,
$ir:1,
$if:1}
W.iM.prototype={
B:function(a,b){var s,r,q,p,o
for(s=this.gT(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gT:function(a){var s,r,q,p,o=this.a.attributes,n=[]
for(s=o.length,r=t.x,q=0;q<s;++q){if(q>=o.length)return H.e(o,q)
p=r.a(o[q])
if(p.namespaceURI==null)n.push(p.name)}return n}}
W.iN.prototype={
h:function(a,b){return this.a.getAttribute(H.jJ(b))},
gl:function(a){return this.gT(this).length}}
W.jn.prototype={}
W.ey.prototype={}
W.iO.prototype={
$1:function(a){return this.a.$1(a)}}
W.jC.prototype={}
W.bI.prototype={
d9:function(a){var s
if($.eE.a===0){for(s=0;s<262;++s)$.eE.m(0,C.O[s],W.nN())
for(s=0;s<12;++s)$.eE.m(0,C.j[s],W.nO())}},
as:function(a){return $.lr().t(0,W.bW(a))},
a4:function(a,b,c){var s=$.eE.h(0,H.d(W.bW(a))+"::"+b)
if(s==null)s=$.eE.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$ia2:1}
W.C.prototype={
gI:function(a){return new W.bY(a,this.gl(a))}}
W.cd.prototype={
as:function(a){return C.a.c8(this.a,new W.hD(a))},
a4:function(a,b,c){return C.a.c8(this.a,new W.hC(a,b,c))},
$ia2:1}
W.hD.prototype={
$1:function(a){return a.as(this.a)}}
W.hC.prototype={
$1:function(a){return a.a4(this.a,this.b,this.c)}}
W.ct.prototype={
de:function(a,b,c,d){var s,r,q
this.a.X(0,c)
s=b.b2(0,new W.iV())
r=b.b2(0,new W.iW())
this.b.X(0,s)
q=this.c
q.X(0,C.Q)
q.X(0,r)},
as:function(a){return this.a.t(0,W.bW(a))},
a4:function(a,b,c){var s=this,r=W.bW(a),q=s.c
if(q.t(0,H.d(r)+"::"+b))return s.d.eN(c)
else if(q.t(0,"*::"+b))return s.d.eN(c)
else{q=s.b
if(q.t(0,H.d(r)+"::"+b))return!0
else if(q.t(0,"*::"+b))return!0
else if(q.t(0,H.d(r)+"::*"))return!0
else if(q.t(0,"*::*"))return!0}return!1},
$ia2:1}
W.iV.prototype={
$1:function(a){return!C.a.t(C.j,a)}}
W.iW.prototype={
$1:function(a){return C.a.t(C.j,a)}}
W.f5.prototype={
a4:function(a,b,c){if(this.d2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.t(0,b)
return!1}}
W.iX.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.f4.prototype={
as:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.bW(a)==="foreignObject")return!1
if(s)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.b.b4(b,"on"))return!1
return this.as(a)},
$ia2:1}
W.bY.prototype={
p:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cN(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gv:function(a){return this.d}}
W.a2.prototype={}
W.iU.prototype={}
W.fe.prototype={
bC:function(a){var s=this,r=new W.j0(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aF:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.jY(a)
else b.removeChild(a)},
eB:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.lw(a)
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
n=s?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.as(p)}r="element unprintable"
try{r=J.a6(a)}catch(p){H.as(p)}try{q=W.bW(a)
this.eA(a,b,n,r,q,m,l)}catch(p){if(H.as(p) instanceof P.W)throw p
else{this.aF(a,b)
window
o="Removing corrupted element "+H.d(r)
if(typeof console!="undefined")window.console.warn(o)}}},
eA:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aF(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.as(a)){m.aF(a,b)
window
s="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.a4(a,"is",g)){m.aF(a,b)
window
s="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}r=f.gT(f).slice(0)
for(q=f.gT(f).length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.e(r,q)
p=r[q]
o=m.a
n=J.lA(p)
H.jJ(p)
if(!o.a4(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.d(e)+" "+p+'="'+H.d(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.f.b(a))m.bC(a.content)}}
W.j0.prototype={
$2:function(a,b){var s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.eB(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aF(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.jx("Corrupt HTML")
throw H.c(q)}}catch(o){H.as(o)
q=s
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}}}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eU.prototype={}
W.cu.prototype={}
W.cv.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.f0.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.cx.prototype={}
W.cy.prototype={}
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
P.j5.prototype={
$2:function(a,b){this.a[a]=b},
$S:15}
P.d6.prototype={
gaQ:function(){return new H.b4(new H.be(this.b,new P.fY()),new P.fZ())},
m:function(a,b,c){var s=this.gaQ()
J.ly(s.b.$1(J.fr(s.a,b)),c)},
q:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aP(this.gaQ().a)},
h:function(a,b){var s=this.gaQ()
return s.b.$1(J.fr(s.a,b))},
gI:function(a){var s=P.jt(this.gaQ(),!1)
return new J.X(s,s.length)}}
P.fY.prototype={
$1:function(a){return t.h.b(a)}}
P.fZ.prototype={
$1:function(a){return t.h.a(a)}}
P.eT.prototype={}
P.aa.prototype={}
P.bt.prototype={$ibt:1}
P.dh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bw.prototype={$ibw:1}
P.dy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hH.prototype={
gl:function(a){return a.length}}
P.bA.prototype={$ibA:1}
P.dU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gcd:function(a){return new P.d6(a,new W.O(a))},
Y:function(a,b,c,d){var s,r,q,p,o,n=[]
n.push(W.kH(null))
n.push(W.kN())
n.push(new W.f4())
c=new W.fe(new W.cd(n))
s='<svg version="1.1">'+b+"</svg>"
n=document
r=n.body
r.toString
q=C.l.eW(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.O(q)
o=n.gam(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
$ij:1}
P.bD.prototype={$ibD:1}
P.e2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eH.prototype={}
P.eI.prototype={}
P.eP.prototype={}
P.eQ.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fw.prototype={
gl:function(a){return a.length}}
P.fx.prototype={
h:function(a,b){return P.aJ(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aJ(s.value[1]))}},
gT:function(a){var s=[]
this.B(a,new P.fy(s))
return s},
gl:function(a){return a.size}}
P.fy.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cS.prototype={
gl:function(a){return a.length}}
P.au.prototype={}
P.dz.prototype={
gl:function(a){return a.length}}
P.eo.prototype={}
P.dQ.prototype={
gl:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.F(b,a,null,null,null))
s=P.aJ(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eY.prototype={}
P.eZ.prototype={}
K.at.prototype={
ag:function(a,b){return!0},
i:function(a){return"all"}}
K.d9.prototype={
ag:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].ag(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.U.prototype={
ag:function(a,b){return!this.cZ(0,b)},
i:function(a){return"!["+this.bG(0)+"]"}}
K.hI.prototype={
ag:function(a,b){if(typeof b!=="number")return H.K(b)
return this.a<=b&&this.b>=b},
i:function(a){var s=H.jv(this.a),r=H.jv(this.b)
return s+".."+r}}
K.hP.prototype={
d6:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.o("May not create a Set with zero characters."))
s=new H.u(t.E)
for(r=new H.ax(a,a.gl(a));r.p();){q=r.d
s.m(0,q,!0)}p=P.jt(new H.aw(s),!0)
C.a.cY(p)
this.a=p},
ag:function(a,b){return C.a.t(this.a,b)},
i:function(a){return P.jy(this.a)}}
L.dR.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ib(this.a.j(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
f5:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.ag(0,a))return p}return null},
i:function(a){return this.b},
c3:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.t(0,l))m+=" (consume)"
for(l=new H.aw(n.d.c),l=l.gI(l);l.p();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.d(r)+" => ["+H.d(q)+"]")
m=s.c.t(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.n)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.e_.prototype={
i:function(a){var s=H.jT(this.b,"\n","\\n"),r=H.jT(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.e0.prototype={
aj:function(a,b,c){var s,r,q
for(s=c.length,r=0;r<c.length;c.length===s||(0,H.n)(c),++r){q=c[r]
this.c.m(0,q,b)}},
i:function(a){return this.b}}
L.i7.prototype={
j:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dR(this,b)
s.c=[]
this.a.m(0,b,s)}return s},
F:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.e0(a)
s.c=new H.u(t.i)
this.b.m(0,a,s)}return s},
bB:function(a){return this.fJ(a)},
fJ:function(a){var s=this
return P.n3(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$bB(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.by(a0,0)
else{if(!r.p()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.f5(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.jy(b)
throw H.c(P.o("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.p(P.v("removeRange"))
P.jw(0,k,b.length)
b.splice(0,k-0)
C.a.X(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.t(0,n.a)?7:8
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
if(d.d!=null){g=P.jy(c)
f=d.d
e=f.c.h(0,g)
n=new L.e_(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.t(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.mr()
case 1:return P.ms(o)}}},t.j)},
i:function(a){var s,r=new P.aC(""),q=this.d
if(q!=null)r.a=q.c3()+"\n"
for(q=this.a,q=q.gfK(q),q=new H.c5(J.aO(q.a),q.b);q.p();){s=q.a
if(s!=this.d)r.a+=s.c3()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.ib.prototype={
i:function(a){return this.b.b+": "+this.bG(0)}}
O.bp.prototype={
bJ:function(){this.a=[]
this.c=this.b=null},
bD:function(a,b,c){this.b=b
this.c=a},
b3:function(a,b){return this.bD(a,null,b)},
ef:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dF:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gl:function(a){return this.a.length},
gI:function(a){var s=this.a
return new J.X(s,s.length)},
u:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
q:function(a,b){var s,r
if(this.ef([b])){s=this.a
r=s.length
s.push(b)
this.dF(r,[b])}},
$if:1}
O.c7.prototype={
gl:function(a){return this.a.length},
gA:function(){var s=this.b
return s==null?this.b=D.a8():s},
an:function(){var s=this.b
if(s!=null)s.O(null)},
gN:function(a){var s=this.a
if(s.length>0)return C.a.gaZ(s)
else return V.ju()},
cH:function(a){var s=this.a
if(a==null)s.push(V.ju())
else s.push(a)
this.an()},
bx:function(){var s=this.a
if(s.length>0){s.pop()
this.an()}}}
E.fA.prototype={}
E.br.prototype={
sbE:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gA().K(0,q.gcC())
s=q.c
if(s!=null)s.gA().q(0,q.gcC())
r=new D.B("shape",p,q.c)
r.b=!0
q.ah(r)}},
saI:function(a){var s,r,q=this
if(!J.J(q.r,a)){s=q.r
if(s!=null)s.gA().K(0,q.gcA())
if(a!=null)a.gA().q(0,q.gcA())
q.r=a
r=new D.B("mover",s,a)
r.b=!0
q.ah(r)}},
b1:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.r
if(k!=null){s=k.r
r=b.e
if(s<r){k.r=r
s=k.y
if(s!=null)++s.d
k.scQ(k.a+k.d*b.y)
k.scF(0,k.b+k.e*b.y)
k.scK(k.c+k.f*b.y)
s=k.c
q=Math.cos(s)
p=Math.sin(s)
s=V.ay(q,-p,0,0,p,q,0,0,0,0,1,0,0,0,0,1)
r=k.b
q=Math.cos(r)
p=Math.sin(r)
s=s.H(0,V.ay(q,0,-p,0,0,1,0,0,p,0,q,0,0,0,0,1))
r=k.a
q=Math.cos(r)
p=Math.sin(r)
k.x=s.H(0,V.ay(1,0,0,0,0,q,-p,0,0,p,q,0,0,0,0,1))
s=k.y
if(s!=null)s.ak(0)}o=k.x}else o=null
if(!J.J(o,l.x)){n=l.x
l.x=o
m=new D.B("matrix",n,o)
m.b=!0
l.ah(m)}for(k=l.y.a,k=new J.X(k,k.length);k.p();)k.d.b1(0,b)},
ay:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gN(q))
else o.push(p.H(0,q.gN(q)))
q.an()
a.cI(r.f)
q=a.dy
s=(q&&C.a).gaZ(q)
if(s!=null&&r.d!=null)s.fA(a,r)
for(q=r.y.a,q=new J.X(q,q.length);q.p();)q.d.ay(a)
a.cG()
a.dx.bx()},
ah:function(a){var s=this.z
if(s!=null)s.O(a)},
U:function(){return this.ah(null)},
cD:function(a){this.e=null
this.ah(a)},
fk:function(){return this.cD(null)},
cB:function(a){this.ah(a)},
fj:function(){return this.cB(null)},
cz:function(a){this.ah(a)},
fg:function(){return this.cz(null)},
ff:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcw(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bs()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.U()},
fi:function(a,b){var s,r
for(s=b.gI(b),r=this.gcw();s.p();)s.gv(s).gA().K(0,r)
this.U()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bn.prototype={
i:function(a){return this.b}}
E.bx.prototype={
i:function(a){return this.b}}
E.ew.prototype={}
E.hJ.prototype={
d5:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.aV(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.c7()
s.a=[]
s.gA().q(0,new E.hK(r))
r.cy=s
s=new O.c7()
s.a=[]
s.gA().q(0,new E.hL(r))
r.db=s
s=new O.c7()
s.a=[]
s.gA().q(0,new E.hM(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.u(t.F)},
gfu:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gN(q)
s=r.db
s=r.z=q.H(0,s.gN(s))
q=s}return q},
cI:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gaZ(s):a)},
cG:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hK.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hL.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hM.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.dZ.prototype={
bM:function(a){this.cJ()},
bL:function(){return this.bM(null)},
gf8:function(){var s,r=this,q=Date.now(),p=C.c.S(P.k8(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aV(q,!1)
return s/p},
bZ:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.H()
if(typeof p!=="number")return H.K(p)
s=C.d.cq(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.H()
r=C.d.cq(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.kv(C.i,q.gfC())}},
cJ:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.x.dC(s)
r=W.kZ(new E.i5(this),t.H)
r.toString
C.x.ex(s,r)}},
fz:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.bZ()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aV(p,!1)
q.y=P.k8(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.an()
p=q.db
C.a.sl(p.a,0)
p.an()
p=q.dx
C.a.sl(p.a,0)
p.an()
p=q.dy
p.toString
C.a.sl(p,0)
q.dy.push(null)
m.ay(n.e)}q=n.Q
if(q!=null)q.O(null)}catch(o){s=H.as(o)
r=H.jP(o)
P.jS("Error: "+H.d(s))
P.jS("Stack: "+H.d(r))
throw H.c(s)}}}
E.i5.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fz()}}}
Z.el.prototype={}
Z.fB.prototype={
aT:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.as(q)
r=P.o('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.d(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.d(s.e)+"]"}}
Z.iH.prototype={}
Z.cU.prototype={
aw:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aT:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aT(a)},
cP:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ay:function(a){var s,r,q,p,o,n=this.b.length
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
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.a6(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(o,", ")+"\nAttrs:   "+C.a.k(p,", ")}}
Z.h5.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.dG(this.c))+"'")+"]"}}
Z.bd.prototype={
gbF:function(a){var s=this.a,r=(s&$.aN().a)!==0?3:0
if((s&$.aM().a)!==0)r+=3
if((s&$.aL().a)!==0)r+=3
if((s&$.bk().a)!==0)r+=2
if((s&$.bl().a)!==0)r+=3
if((s&$.cL().a)!==0)r+=3
if((s&$.cM().a)!==0)r+=4
if((s&$.bP().a)!==0)++r
return(s&$.aK().a)!==0?r+4:r},
eO:function(a){var s,r=$.aN(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aK()
if((q&r.a)!==0)if(s===a)return r
return $.lq()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aN().a)!==0)s.push("Pos")
if((r&$.aM().a)!==0)s.push("Norm")
if((r&$.aL().a)!==0)s.push("Binm")
if((r&$.bk().a)!==0)s.push("Txt2D")
if((r&$.bl().a)!==0)s.push("TxtCube")
if((r&$.cL().a)!==0)s.push("Clr3")
if((r&$.cM().a)!==0)s.push("Clr4")
if((r&$.bP().a)!==0)s.push("Weight")
if((r&$.aK().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.fC.prototype={}
D.bs.prototype={
q:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
K:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.t(q,b)
if(q===!0){q=r.a
s=(q&&C.a).K(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.t(q,b)
if(q===!0){q=r.b
s=(q&&C.a).K(q,b)||s}return s},
O:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.af()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.B(P.jt(s,!0),new D.fT(o))
s=p.b
if(s!=null){p.b=[]
C.a.B(s,new D.fU(o))}return!0},
ak:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.O(s)}}}}
D.fT.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fU.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.af.prototype={}
D.b_.prototype={}
D.b0.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cV.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dg.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.ha.prototype={
fp:function(a){this.d.q(0,a.a)
return!1},
fl:function(a){this.d.K(0,a.a)
return!1}}
X.he.prototype={
bw:function(a,b){this.r=a.a
return!1},
aK:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.cV()
if(typeof s!=="number")return s.a_()
this.r=(s&~r)>>>0
return!1},
aJ:function(a,b){return!1},
fq:function(a){return!1},
e4:function(a,b,c){return}}
X.c8.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.c8))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.hA.prototype={
bw:function(a,b){this.f=a.a
return!1},
aK:function(a,b){var s=this.f,r=a.a
if(typeof r!=="number")return r.cV()
if(typeof s!=="number")return s.a_()
this.f=(s&~r)>>>0
return!1},
aJ:function(a,b){return!1},
fs:function(a,b){return!1}}
X.i9.prototype={
fo:function(a){return!1},
fm:function(a){return!1},
fn:function(a){return!1}}
X.ej.prototype={
bT:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.dg(s,new X.c8(r,a.altKey,a.shiftKey))},
ar:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
bg:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
ac:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.R()
if(typeof o!=="number")return H.K(o)
s=r.top
if(typeof p!=="number")return p.R()
if(typeof s!=="number")return H.K(s)
return new V.az(q-o,p-s)},
aE:function(a){return new V.bF(a.movementX,a.movementY)},
be:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=C.d.a1(p.pageX)
C.d.a1(p.pageY)
n=k.left
if(typeof n!=="number")return H.K(n)
C.d.a1(p.pageX)
m=C.d.a1(p.pageY)
l=k.top
if(typeof l!=="number")return H.K(l)
j.push(new V.az(o-n,m-l))}return j},
a9:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cV(s,new X.c8(r,a.altKey,a.shiftKey))},
bb:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.R()
if(typeof n!=="number")return H.K(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.R()
if(typeof p!=="number")return H.K(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.K(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.K(p)
p=r<p}else p=!1
return p},
dZ:function(a){this.f=!0},
dN:function(a){this.f=!1},
dT:function(a){if(this.f&&this.bb(a))a.preventDefault()},
e2:function(a){var s
if(!this.f)return
s=this.bT(a)
this.b.fp(s)},
e0:function(a){var s
if(!this.f)return
s=this.bT(a)
this.b.fl(s)},
e6:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.ar(a)
if(p.x){s=p.a9(a)
r=p.aE(a)
if(p.d.bw(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.a9(a)
q=p.ac(a)
if(p.c.bw(s,q))a.preventDefault()},
ea:function(a){var s,r,q,p=this
p.ar(a)
s=p.a9(a)
if(p.x){r=p.aE(a)
if(p.d.aK(s,r))a.preventDefault()
return}if(p.r)return
q=p.ac(a)
if(p.c.aK(s,q))a.preventDefault()},
dX:function(a){var s,r,q,p=this
if(!p.bb(a)){p.ar(a)
s=p.a9(a)
if(p.x){r=p.aE(a)
if(p.d.aK(s,r))a.preventDefault()
return}if(p.r)return
q=p.ac(a)
if(p.c.aK(s,q))a.preventDefault()}},
e8:function(a){var s,r,q,p=this
p.ar(a)
s=p.a9(a)
if(p.x){r=p.aE(a)
if(p.d.aJ(s,r))a.preventDefault()
return}if(p.r)return
q=p.ac(a)
if(p.c.aJ(s,q))a.preventDefault()},
dV:function(a){var s,r,q,p=this
if(!p.bb(a)){p.ar(a)
s=p.a9(a)
if(p.x){r=p.aE(a)
if(p.d.aJ(s,r))a.preventDefault()
return}if(p.r)return
q=p.ac(a)
if(p.c.aJ(s,q))a.preventDefault()}},
ec:function(a){var s,r,q,p,o,n=this
n.ar(a)
s=(a&&C.w).geY(a)
r=C.w.geZ(a)
q=n.Q
if(typeof s!=="number")return s.H()
if(typeof q!=="number")return H.K(q)
if(typeof r!=="number")return r.H()
p=new V.bF(s*q,r*q)
if(n.x){if(n.d.fq(p))a.preventDefault()
return}if(n.r)return
o=n.ac(a)
if(n.c.fs(p,o))a.preventDefault()},
ee:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.a9(q.y)
r=q.ac(q.y)
q.d.e4(s,r,p)}},
ep:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bg(a)
s=r.be(a)
if(r.e.fo(s))a.preventDefault()},
el:function(a){var s
this.bg(a)
s=this.be(a)
if(this.e.fm(s))a.preventDefault()},
en:function(a){var s
this.bg(a)
s=this.be(a)
if(this.e.fn(s))a.preventDefault()}}
D.bq.prototype={
a7:function(a){var s=this.r
if(s!=null)s.O(a)},
dc:function(){return this.a7(null)},
$iah:1}
D.ah.prototype={}
D.c1.prototype={
a7:function(a){var s=this.y
if(s!=null)s.O(a)},
bX:function(a){var s=this.z
if(s!=null)s.O(a)},
e3:function(){return this.bX(null)},
eh:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(q==null||this.du(q))return!1}return!0},
dH:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbW(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p instanceof D.bq)this.f.push(p)
o=p.r
if(o==null){o=new D.bs()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.b_()
s.b=!0
this.a7(s)},
ej:function(a,b){var s,r,q
for(s=b.gI(b),r=this.gbW();s.p();){q=s.gv(s)
C.a.K(this.e,q)
q.gA().K(0,r)}s=new D.b0()
s.b=!0
this.a7(s)},
du:function(a){var s=C.a.t(this.f,a)
return s}}
V.N.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.aT.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aT))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.fR.prototype={}
V.dn.prototype={
V:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dn))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bO([o.a,o.d,o.r],3,0),m=V.bO([o.b,o.e,o.x],3,0),l=V.bO([o.c,o.f,o.y],3,0),k=n.length
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
V.bu.prototype={
V:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cs:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.ju()
s=1/b3
r=-l
q=-a2
return V.ay((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
H:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ay(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b0:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.z(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aL:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.R(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bu))return!1
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
i:function(a){return this.J()},
D:function(a){var s,r,q,p,o,n=this,m=V.bO([n.a,n.e,n.y,n.cx],3,0),l=V.bO([n.b,n.f,n.z,n.cy],3,0),k=V.bO([n.c,n.r,n.Q,n.db],3,0),j=V.bO([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
J:function(){return this.D("")}}
V.az.prototype={
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.R.prototype={
w:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
H:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.dI.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dI))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.bF.prototype={
bu:function(a){var s,r=this.a
if(typeof r!=="number")return r.H()
s=this.b
if(typeof s!=="number")return s.H()
return Math.sqrt(r*r+s*s)},
n:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bF))return!1
s=b.a
r=this.a
$.A().toString
if(typeof s!=="number")return s.R()
if(typeof r!=="number")return H.K(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.R()
if(typeof r!=="number")return H.K(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.z.prototype={
bu:function(a){return Math.sqrt(this.aG(this))},
aG:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
E:function(){var s=this,r=Math.sqrt(s.aG(s))
if(r===1)return s
return s.cR(0,r)},
ad:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.z(s*r-q*p,q*o-n*r,n*p-s*o)},
w:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
aB:function(a){return new V.z(-this.a,-this.b,-this.c)},
H:function(a,b){return new V.z(this.a*b,this.b*b,this.c*b)},
cR:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.ci()
return new V.z(this.a/b,this.b/b,this.c/b)},
cu:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.cY.prototype={
gA:function(){var s=this.b
return s==null?this.b=D.a8():s},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cY))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.hB.prototype={}
U.dJ.prototype={
gA:function(){var s=this.y
return s==null?this.y=D.a8():s},
aq:function(a){var s=this.y
if(s!=null)s.O(a)},
scQ:function(a){var s
a=V.jU(a,0,6.283185307179586)
s=this.a
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.B("yaw",s,a)
s.b=!0
this.aq(s)}},
scF:function(a,b){var s
b=V.jU(b,0,6.283185307179586)
s=this.b
$.A().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.B("pitch",s,b)
s.b=!0
this.aq(s)}},
scK:function(a){var s
a=V.jU(a,0,6.283185307179586)
s=this.c
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.B("roll",s,a)
s.b=!0
this.aq(s)}},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dJ))return!1
s=q.a
r=b.a
$.A().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+"], ["+V.y(s.d,3,0)+", "+V.y(s.e,3,0)+", "+V.y(s.f,3,0)+"]"}}
M.d3.prototype={
a8:function(a){var s=this.y
if(s!=null)s.O(a)},
dd:function(){return this.a8(null)},
dP:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga3(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bs()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.b_()
s.b=!0
this.a8(s)},
dR:function(a,b){var s,r
for(s=b.gI(b),r=this.ga3();s.p();)s.gv(s).gA().K(0,r)
s=new D.b0()
s.b=!0
this.a8(s)},
scM:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gA().K(0,r.ga3())
s=r.d
r.d=a
if(a!=null)a.gA().q(0,r.ga3())
q=new D.B("technique",s,r.d)
q.b=!0
r.a8(q)}},
gA:function(){var s=this.y
return s==null?this.y=D.a8():s},
ay:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.cI(d.d)
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
if(typeof q!=="number")return H.K(q)
m=C.d.a1(n*q)
n=o.b
if(typeof p!=="number")return H.K(p)
l=C.d.a1(n*p)
n=C.d.a1(o.c*q)
a.c=n
o=C.d.a1(o.d*p)
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
g=V.ay(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.cH(g)
r=$.kk
if(r==null){r=V.km()
o=V.jB()
n=$.kz
r=V.kh(r,o,n==null?$.kz=new V.z(0,0,-1):n)
$.kk=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.H(0,f)}a.db.cH(f)
s=d.d
if(s!=null)s.b1(0,a)
for(s=d.e.a,s=new J.X(s,s.length);s.p();)s.d.b1(0,a)
for(s=d.e.a,s=new J.X(s,s.length);s.p();)s.d.ay(a)
d.b.toString
a.cy.bx()
a.db.bx()
d.c.toString
a.cG()}}
A.fu.prototype={}
A.fv.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
f4:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
f_:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.Q.prototype={
ga2:function(a){var s=this.a?1:0
return s|0|0},
i:function(a){var s=this.a?1:0
return""+(s|0|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.Q))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.hg.prototype={
d4:function(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="Required uniform value, ",c6=", was not defined or used in shader.",c7="uniform mat4 objMat;\n"
c3.z=c8
s=new P.aC("")
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
A.ni(c8,s)
A.nk(c8,s)
A.nj(c8,s)
A.nm(c8,s)
A.nn(c8,s)
A.nl(c8,s)
A.no(c8,s)
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
k=A.nh(c3.z)
c3.c=l
c3.d=k
c3.e=c3.bU(l,35633)
c3.f=c3.bU(c3.d,35632)
q=c3.a
o=q.createProgram()
c3.r=o
q.attachShader(o,c3.e)
q.attachShader(c3.r,c3.f)
q.linkProgram(c3.r)
if(!q.getProgramParameter(c3.r,35714)){j=q.getProgramInfoLog(c3.r)
q.deleteProgram(c3.r)
H.p(P.o("Failed to link shader: "+H.d(j)))}c3.eG()
c3.eI()
c3.Q=c3.x.h(0,"posAttr")
c3.cx=c3.x.h(0,"normAttr")
c3.ch=c3.x.h(0,"binmAttr")
c3.cy=c3.x.h(0,"txt2DAttr")
c3.db=c3.x.h(0,"txtCubeAttr")
c3.dx=c3.x.h(0,"bendAttr")
if(c8.dy)c3.id=t.q.a(c3.y.L(0,"invViewMat"))
if(r)c3.dy=t.q.a(c3.y.L(0,"objMat"))
if(p)c3.fr=t.q.a(c3.y.L(0,"viewObjMat"))
r=t.q
c3.fy=r.a(c3.y.L(0,"projViewObjMat"))
if(c8.go)c3.fx=r.a(c3.y.L(0,"viewMat"))
if(c8.x1)c3.k1=t.O.a(c3.y.L(0,"txt2DMat"))
if(c8.x2)c3.k2=r.a(c3.y.L(0,"txtCubeMat"))
if(c8.y1)c3.k3=r.a(c3.y.L(0,"colorMat"))
c3.r1=[]
q=c8.aW
if(q>0){c3.k4=c3.y.L(0,"bendMatCount")
for(i=0;i<q;++i){p=c3.r1
o=c3.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.p(P.o(c5+n+c6))
p.push(r.a(h))}}if(c8.a.a)c3.r2=t.r.a(c3.y.L(0,"emissionClr"))
if(c8.b.a)c3.x1=t.r.a(c3.y.L(0,"ambientClr"))
if(c8.c.a)c3.y2=t.r.a(c3.y.L(0,"diffuseClr"))
if(c8.d.a)c3.aX=t.r.a(c3.y.L(0,"invDiffuseClr"))
r=c8.e.a
if(!r)q=!1
else q=!0
if(q){c3.ck=t.n.a(c3.y.L(0,"shininess"))
if(r)c3.cj=t.r.a(c3.y.L(0,"specularClr"))}if(c8.db){c3.cl=t.Q.a(c3.y.L(0,"envSampler"))
if(c8.r.a)c3.cm=t.r.a(c3.y.L(0,"reflectClr"))
r=c8.x.a
if(!r)q=!1
else q=!0
if(q){c3.cn=t.n.a(c3.y.L(0,"refraction"))
if(r)c3.co=t.r.a(c3.y.L(0,"refractClr"))}}if(c8.y.a)c3.cp=t.n.a(c3.y.L(0,"alpha"))
if(c8.k1){r=c8.z
q=r.length
if(q!==0){c3.bm=new H.u(t.J)
c3.bn=new H.u(t.s)
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
if(typeof e!=="number")return e.a_()
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
a6=a5}c.push(new A.e7(h,a,a0,a6,a5,a4))}c3.bn.m(0,e,c)
n=c3.bm
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.Q
q=r.length
if(q!==0){c3.bo=new H.u(t.J)
c3.bp=new H.u(t.G)
for(p=t.r,o=t.c,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.d(e)
c=[]
for(n=f.b,i=0;i<n;++i){if(typeof e!=="number")return e.a_()
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
c.push(new A.e8(b0,a9,a8,h,a,b1))}c3.bp.m(0,e,c)
n=c3.bo
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.p(P.o(c5+b+c6))
n.m(0,e,h)}}r=c8.ch
q=r.length
if(q!==0){c3.bq=new H.u(t.J)
c3.br=new H.u(t.U)
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
if(typeof e!=="number")return e.a_()
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
a6=a5}c.push(new A.eb(h,a,b4,a0,b1,b5,b6,a6,a5,a4))}c3.br.m(0,e,c)
a7=c3.bq
b2=c3.y
b3=d+"Count"
h=b2.h(0,b3)
if(h==null)H.p(P.o(c5+b3+c6))
a7.m(0,e,h)}}r=c8.cx
q=r.length
if(q!==0){c3.bs=new H.u(t.J)
c3.bt=new H.u(t.L)
for(p=t.r,o=t.n,n=t.y,m=t.c,g=0;g<r.length;r.length===q||(0,H.n)(r),++g){f=r[g]
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
if(typeof e!=="number")return e.a_()
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
c.push(new A.ee(h,a,a0,a1,b0,a9,c0,b9,b6,c2,c1,a6,a5,a4,b1,b5))}c3.bt.m(0,e,c)
b=c3.bs
a7=c3.y
b2=d+"Count"
h=a7.h(0,b2)
if(h==null)H.p(P.o(c5+b2+c6))
b.m(0,e,h)}}}},
eC:function(a,b){}}
A.fz.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.fI.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.hG.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.hZ.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.hj.prototype={
i:function(a){return this.aH}}
A.e7.prototype={}
A.e8.prototype={}
A.eb.prototype={}
A.ee.prototype={}
A.dM.prototype={
d7:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
bU:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.o("Error compiling shader '"+H.d(q)+"': "+H.d(s)))}return q},
eG:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.K(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.fu(n,r.name,q))}p.x=new A.fv(o)},
eI:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.K(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.eX(r.type,r.size,r.name,q))}p.y=new A.im(o)},
ap:function(a,b,c){var s=this.a
if(a===1)return new A.e4(s,b,c)
else return A.jA(s,this.r,b,a,c)},
dz:function(a,b,c){var s=this.a
if(a===1)return new A.ec(s,b,c)
else return A.jA(s,this.r,b,a,c)},
dA:function(a,b,c){var s=this.a
if(a===1)return new A.ed(s,b,c)
else return A.jA(s,this.r,b,a,c)},
aS:function(a,b){return new P.ez(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
eX:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ap(b,c,d)
case 5121:return s.ap(b,c,d)
case 5122:return s.ap(b,c,d)
case 5123:return s.ap(b,c,d)
case 5124:return s.ap(b,c,d)
case 5125:return s.ap(b,c,d)
case 5126:return new A.e3(s.a,c,d)
case 35664:return new A.ii(s.a,c,d)
case 35665:return new A.e5(s.a,c,d)
case 35666:return new A.e6(s.a,c,d)
case 35667:return new A.ij(s.a,c,d)
case 35668:return new A.ik(s.a,c,d)
case 35669:return new A.il(s.a,c,d)
case 35674:return new A.io(s.a,c,d)
case 35675:return new A.e9(s.a,c,d)
case 35676:return new A.ea(s.a,c,d)
case 35678:return s.dz(b,c,d)
case 35680:return s.dA(b,c,d)
case 35670:throw H.c(s.aS("BOOL",c))
case 35671:throw H.c(s.aS("BOOL_VEC2",c))
case 35672:throw H.c(s.aS("BOOL_VEC3",c))
case 35673:throw H.c(s.aS("BOOL_VEC4",c))
default:throw H.c(P.o("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.ig.prototype={}
A.im.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.J()},
J:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.e4.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.il.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.e3.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.e5.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.e6.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.io.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.e9.prototype={
a0:function(a){var s=new Float32Array(H.cD(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.ea.prototype={
a0:function(a){var s=new Float32Array(H.cD(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.ec.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.ed.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jh.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}}
F.j6.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.jX(l.$1(m),k)
k=J.jX(l.$1(m+3.141592653589793/n.c),k).R(0,j)
s=new V.z(k.a,k.b,k.c).E()
l=$.kA
if(l==null){l=new V.z(1,0,0)
$.kA=l
r=l}else r=l
q=s.ad(!J.J(s,r)?V.kC():r).E()
r=q.ad(s).E()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.H(0,l*k)
k=q.H(0,o*k)
k=j.w(0,new V.R(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.J(a.f,k)){a.f=k
l=a.a
if(l!=null)l.U()}}}
F.fV.prototype={
aV:function(){var s=this
if(!s.gcg()){C.a.K(s.a.a.d.b,s)
s.a.a.U()}s.es()
s.eu()
s.ev()},
eD:function(a){this.a=a
a.d.b.push(this)},
eE:function(a){this.b=a
a.d.c.push(this)},
eF:function(a){this.c=a
a.d.d.push(this)},
es:function(){var s=this.a
if(s!=null){C.a.K(s.d.b,this)
this.a=null}},
eu:function(){var s=this.b
if(s!=null){C.a.K(s.d.c,this)
this.b=null}},
ev:function(){var s=this.c
if(s!=null){C.a.K(s.d.d,this)
this.c=null}},
gcg:function(){return this.a==null||this.b==null||this.c==null},
dq:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ci()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.cu())return p
return q.E()},
ds:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.R(0,n)
q=new V.z(o.a,o.b,o.c).E()
o=r.R(0,n)
return q.ad(new V.z(o.a,o.b,o.c).E()).E()},
bk:function(){var s,r=this
if(r.d!=null)return!0
s=r.dq()
if(s==null){s=r.ds()
if(s==null)return!1}r.d=s
r.a.a.U()
return!0},
dn:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ci()
if(n!=null)q=q.w(0,n)
if(s!=null)q=q.w(0,s)
if(r!=null)q=q.w(0,r)
if(q.cu())return p
return q.E()},
dr:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.R(0,e)
o=new V.z(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.aB(0)}else{n=(j-s.b)/p
j=b.R(0,e).H(0,n).w(0,e).R(0,h)
o=new V.z(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aB(0)}j=l.d
if(j!=null){m=j.E()
o=m.ad(o).E().ad(m).E()}return o},
bi:function(){var s,r=this
if(r.e!=null)return!0
s=r.dn()
if(s==null){s=r.dr()
if(s==null)return!1}r.e=s
r.a.a.U()
return!0},
gce:function(a){var s=this
if(J.J(s.a,s.b))return!0
if(J.J(s.b,s.c))return!0
if(J.J(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var s,r,q=this
if(q.gcg())return a+"disposed"
s=a+C.b.ai(J.a6(q.a.e),0)+", "+C.b.ai(J.a6(q.b.e),0)+", "+C.b.ai(J.a6(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
J:function(){return this.D("")}}
F.fX.prototype={}
F.hY.prototype={
bv:function(a,b,c){var s,r=b.a
r.a.a.G()
r=r.e
s=c.a
s.a.a.G()
if(r==s.e){r=b.b
r.a.a.G()
r=r.e
s=c.b
s.a.a.G()
if(r==s.e){r=b.c
r.a.a.G()
r=r.e
s=c.c
s.a.a.G()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.G()
r=r.e
s=c.b
s.a.a.G()
if(r==s.e){r=b.b
r.a.a.G()
r=r.e
s=c.c
s.a.a.G()
if(r==s.e){r=b.c
r.a.a.G()
r=r.e
s=c.a
s.a.a.G()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.G()
r=r.e
s=c.c
s.a.a.G()
if(r==s.e){r=b.b
r.a.a.G()
r=r.e
s=c.a
s.a.a.G()
if(r==s.e){r=b.c
r.a.a.G()
r=r.e
s=c.b
s.a.a.G()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.hb.prototype={}
F.ie.prototype={}
F.hQ.prototype={
gA:function(){var s=this.e
return s==null?this.e=D.a8():s},
at:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.at()||!1
if(!r.a.at())s=!1
q=r.e
if(q!=null)q.ak(0)
return s},
fd:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.gf6(s)
C.a.by(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(o!=null&&a.bv(0,r,o)){q.push(o)
C.a.by(s,p)}}if(q.length>1)b.fc(q)}}n.a.G()
n.c.bz()
n.d.bz()
n.b.fw()
n.c.bA(new F.ie())
n.d.bA(new F.hY())
m=n.e
if(m!=null)m.ak(0)},
eR:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.aN().a)!==0?1:0
if((s&$.aM().a)!==0)++r
if((s&$.aL().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bl().a)!==0)++r
if((s&$.cL().a)!==0)++r
if((s&$.cM().a)!==0)++r
if((s&$.bP().a)!==0)++r
if((s&$.aK().a)!==0)++r
q=a5.gbF(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.eO(l)
j=k.gbF(k)
n[l]=new Z.fB(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.e(h,i)
g=h[i].fb(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.e(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.cD(o)),35044)
s.bindBuffer(a2,null)
b=new Z.cU(new Z.el(a2,c),n,a5)
b.b=[]
a1.b.toString
a1.c.toString
if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.G()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].b
h.a.a.G()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.e(h,l)
h=h[l].c
h.a.a.G()
a.push(h.e)}a0=Z.mk(s,34963,a)
b.b.push(new Z.h5(4,a.length,a0))}return b},
i:function(a){var s=this,r=[]
if(s.a.c.length!==0){r.push("Vertices:")
r.push(s.a.D("   "))}s.b.toString
s.c.toString
if(s.d.b.length!==0){r.push("Faces:")
r.push(s.d.D("   "))}return C.a.k(r,"\n")},
U:function(){var s=this.e
if(s!=null)s.O(null)}}
F.hR.prototype={
eM:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.q(0,k)
s.a.q(0,j)
s.a.q(0,h)
f.push(F.fW(k,j,h))
s.a.q(0,k)
s.a.q(0,h)
s.a.q(0,g)
f.push(F.fW(k,h,g))}else{l.q(0,j)
s.a.q(0,h)
s.a.q(0,g)
f.push(F.fW(j,h,g))
s.a.q(0,j)
s.a.q(0,g)
s.a.q(0,k)
f.push(F.fW(j,g,k))}n=!n}p=!p}return f},
gl:function(a){return this.b.length},
bA:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.bv(0,n,l)){n.aV()
break}}}}},
bz:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.gce(q)
if(r)q.aV()}},
at:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bk())q=!1
return q},
bj:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bi())q=!1
return q},
i:function(a){return this.J()},
D:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].D(a))
return C.a.k(p,"\n")},
J:function(){return this.D("")}}
F.hS.prototype={
gl:function(a){return 0},
bA:function(a){var s,r,q,p,o
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.e(q,r)
p=q[r]
p.c.toString
o=-1
for(;!1;--o)p.c.h(0,o)}},
bz:function(){var s,r,q
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
q=r[s]
r=q.gce(q)
if(r)q.aV()}},
i:function(a){return this.J()},
D:function(a){var s,r,q=[]
for(s=0;!1;++s){r=this.b
if(s>=0)return H.e(r,s)
q.push(r[s].D(a+(""+s+". ")))}return C.a.k(q,"\n")},
J:function(){return this.D("")}}
F.hT.prototype={
gl:function(a){return 0},
fw:function(){var s,r
for(s=-1;!1;--s){r=this.b
return H.e(r,s)
r=r[s].ghb()
r=r.gh6(r)
if(r.gl(r).P(0,1)){r=this.b
return H.e(r,s)
r[s].aV()}}},
i:function(a){return this.J()},
D:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].D(a))}return C.a.k(q,"\n")},
J:function(){return this.D("")}}
F.iv.prototype={
cf:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kD(s.cx,p,m,r,q,o,n,a,l)},
fb:function(a){var s,r=this
if(a.n(0,$.aN())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aM())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.aL())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.bk())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.n(0,$.bl())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cL())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.n(0,$.cM())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.n(0,$.bP()))return[r.ch]
else if(a.n(0,$.aK()))return[-1,-1,-1,-1]
else return[]},
bk:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ci()
r.d.B(0,new F.iG(q))
r.r=q.a.E()
q=r.a
if(q!=null){q.U()
q=r.a.e
if(q!=null)q.ak(0)}return!0},
bi:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.ci()
r.d.B(0,new F.iF(q))
r.x=q.a.E()
q=r.a
if(q!=null){q.U()
q=r.a.e
if(q!=null)q.ak(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.ai(J.a6(q.e),0))
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
o.push(V.y(q.ch,3,0))
o.push(p)
r=C.a.k(o,", ")
return a+"{"+r+"}"},
J:function(){return this.D("")}}
F.iG.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.iF.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.w(0,r)}}}
F.iw.prototype={
G:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
s[p].e=q;++q}this.b=!1}},
q:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.o("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.U()
return!0},
c6:function(a,b){var s=null,r=F.kD(s,s,a,s,s,b,s,s,0)
this.q(0,r)
return r},
gl:function(a){return this.c.length},
at:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bk()
return!0},
bj:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bi()
return!0},
eS:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r.E()
if(!J.J(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.O(null)}}}}return!0},
i:function(a){return this.J()},
D:function(a){var s,r,q,p
this.G()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].D(a))
return C.a.k(s,"\n")},
J:function(){return this.D("")}}
F.ix.prototype={
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
B:function(a,b){var s=this
C.a.B(s.b,b)
C.a.B(s.c,new F.iy(s,b))
C.a.B(s.d,new F.iz(s,b))},
i:function(a){return this.J()},
J:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].D(""))
return C.a.k(p,"\n")}}
F.iy.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)}}
F.iz.prototype={
$1:function(a){var s=this.a
if(!J.J(a.a,s)&&!J.J(a.b,s))this.b.$1(a)}}
F.iA.prototype={
gl:function(a){return 0},
h:function(a,b){var s,r
if(b>=0){s=this.c
r=b-0
if(r>=0)return H.e(s,r)
return s[r]}else{s=this.b
return H.e(s,b)
return s[b]}},
i:function(a){return this.J()},
J:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].D(""))}for(s=this.c,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].D(""))}return C.a.k(q,"\n")}}
F.iC.prototype={}
F.iB.prototype={
bv:function(a,b,c){return J.J(b.f,c.f)}}
F.iD.prototype={}
F.hE.prototype={
fc:function(a){var s,r,q,p,o,n,m=V.ci()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.z(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.E()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){p=a[r]
o=q?null:m.E()
if(!J.J(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.O(null)}}}return null}}
F.iE.prototype={
gl:function(a){return 0},
i:function(a){return this.J()},
J:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.e(s,r)
q.push(s[r].D(""))}return C.a.k(q,"\n")}}
O.dl.prototype={
gA:function(){var s=this.fr
return s==null?this.fr=D.a8():s},
W:function(a){var s=this.fr
if(s!=null)s.O(a)},
dg:function(){return this.W(null)},
bY:function(a){this.a=null
this.W(a)},
ez:function(){return this.bY(null)},
dJ:function(a,b){var s=new D.b_()
s.b=!0
this.W(s)},
dL:function(a,b){var s=new D.b0()
s.b=!0
this.W(s)},
bS:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.u(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.ga5()
n=d.h(0,p.ga5())
d.m(0,o,n==null?1:n)}m=[]
d.B(0,new O.hn(f,m))
C.a.aD(m,new O.ho())
l=new H.u(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){o=l.h(0,0)
l.m(0,0,o==null?1:o)}k=[]
l.B(0,new O.hp(f,k))
C.a.aD(k,new O.hq())
j=new H.u(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.ga5()
n=j.h(0,p.ga5())
j.m(0,o,n==null?1:n)}i=[]
j.B(0,new O.hr(f,i))
C.a.aD(i,new O.hs())
h=new H.u(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.n)(e),++q){p=e[q]
r=p.ga5()
o=h.h(0,p.ga5())
h.m(0,r,o==null?1:o)}g=[]
h.B(0,new O.ht(f,g))
C.a.aD(g,new O.hu())
e=C.c.S(f.e.a.length+3,4)
f.dy.toString
return A.lY(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
dm:function(a,b){},
b1:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.X(s,s.length);s.p();){r=s.d
r.toString
q=$.iu
if(q==null)q=$.iu=new V.z(0,0,1)
r.a=q
p=$.it
r.d=p==null?$.it=new V.z(0,1,0):p
p=$.is
r.e=p==null?$.is=new V.z(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.b0(q).E()
r.d=o.b0(r.d).E()
r.e=o.b0(r.e).E()}}}},
fA:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.bS()
s=b6.fr.h(0,b5.aH)
if(s==null){s=A.lX(b5,b6.a)
r=s.b
if(r.length===0)H.p(P.o("May not cache a shader with no name."))
if(b6.fr.eU(0,r))H.p(P.o('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.m(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.aX
b5=b7.e
if(!(b5 instanceof Z.cU))b5=b7.e=null
if(b5==null||!b5.d.n(0,p)){b5=q.k4
if(b5)b7.d.at()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bj()
n.a.bj()
n=n.e
if(n!=null)n.ak(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.eS()
m=m.e
if(m!=null)m.ak(0)}k=b7.d.eR(new Z.iH(b6.a),p)
k.aw($.aN()).e=b4.a.Q.c
if(b5)k.aw($.aM()).e=b4.a.cx.c
if(o)k.aw($.aL()).e=b4.a.ch.c
if(q.r2)k.aw($.bk()).e=b4.a.cy.c
if(n)k.aw($.bl()).e=b4.a.db.c
if(q.ry)k.aw($.aK()).e=b4.a.dx.c
b7.e=k}j=[]
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.f4()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gN(n)
b5=b5.dy
b5.toString
b5.a0(n.V(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gN(n)
m=b6.dx
m=b6.cx=n.H(0,m.gN(m))
n=m}b5=b5.fr
b5.toString
b5.a0(n.V(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gfu()
m=b6.dx
m=b6.ch=n.H(0,m.gN(m))
n=m}b5=b5.fy
b5.toString
b5.a0(n.V(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gN(n)
b5=b5.fx
b5.toString
b5.a0(n.V(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.a0(C.f.V(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.a0(C.f.V(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.a0(C.f.V(n,!0))}if(q.aW>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.e(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.e(b5,h)
b5=b5[h]
g=new Float32Array(H.cD(n.V(0,!0)))
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
b5=b5.aX
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.e.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.z.ch
n=n.ck
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.z.f
b5=b5.cj
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.z
if(b5.length>0){f=new H.u(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
c=d.ga5()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
a=J.cN(b4.a.bn.h(0,c),b)
l=d.gfM()
a0=$.al
l=l.aL(a0==null?$.al=new V.R(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gfR()
a0=$.al
l=l.aL(a0==null?$.al=new V.R(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gau(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gci()){l=d.gc9()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gca()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gcb()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bm.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gN(n)
a2=new H.u(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.m(0,0,b+1)
a=J.cN(b4.a.bp.h(0,0),b)
l=a1.b0(d.a).E()
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
m=b4.a.bo.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gN(n)
a5=new H.u(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
c=d.ga5()
b=a5.h(0,c)
if(b==null)b=0
a5.m(0,c,b+1)
a=J.cN(b4.a.br.h(0,c),b)
a6=a1.H(0,d.gN(d))
l=d.gN(d)
a0=$.al
l=l.aL(a0==null?$.al=new V.R(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.al
l=a6.aL(l==null?$.al=new V.R(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gau(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gal()
l=a6.cs(0)
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
g=new Float32Array(H.cD(new V.dn(a0,a3,a4,a7,a8,a9,b0,b1,l).V(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gal()
l=d.gal()
if(!C.a.t(j,l)){l.sae(0,j.length)
j.push(l)}l=d.gal()
a0=l.gaf(l)
if(a0){a0=a.f
a0.toString
a3=l.gaf(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gae(l))}d.gaC()
l=d.gcX()
a0=a.x
a0.toString
a3=l.gf1(l)
a4=l.gf2(l)
a7=l.gf3()
l=l.gf0()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaC()
if(!C.a.t(j,l)){l.sae(0,j.length)
j.push(l)}l=d.gaC()
a0=l.gaf(l)
if(a0){a0=a.r
a0.toString
a3=l.gaf(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gae(l))}if(d.gci()){l=d.gc9()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gca()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gcb()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.bq.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gN(n)
b3=new H.u(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.n)(n),++e){d=n[e]
c=d.ga5()
b=b3.h(0,c)
if(b==null)b=0
b3.m(0,c,b+1)
a=J.cN(b4.a.bt.h(0,c),b)
l=d.gft(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gfP(d).E()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.aL(d.gft(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gau(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gal()
l=d.gha()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gh7(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gh8()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.gh9()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gal()
l=d.gal()
if(!C.a.t(j,l)){l.sae(0,j.length)
j.push(l)}l=d.gal()
a0=l.gaf(l)
if(a0){a0=a.dx
a0.toString
a3=l.gaf(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gae(l))}d.gaC()
l=d.gcX()
a0=a.z
a0.toString
a3=l.gf1(l)
a4=l.gf2(l)
a7=l.gf3()
l=l.gf0()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gaC()
if(!C.a.t(j,l)){l.sae(0,j.length)
j.push(l)}l=d.gaC()
a0=l.gaf(l)
if(a0){a0=a.dy
a0.toString
a3=l.gaf(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.gae(l))}if(d.gfQ()){l=d.gfO()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.gfN()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gci()){l=d.gc9()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gca()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gcb()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.n)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.bs.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gN(n).cs(0)}b5=b5.id
b5.toString
b5.a0(n.V(0,!0))}if(q.db){b4.dm(j,b4.ch)
b5=b4.a
n=b4.ch
b5.eC(b5.cl,n)
if(q.r.a){b5=b4.a
n=b4.cx.f
b5=b5.cm
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}b5=q.x.a
if(!b5)n=!1
else n=!0
if(n){n=b4.a
m=b4.cy.ch
n=n.cn
n.a.uniform1f(n.d,m)}if(b5){b5=b4.a
n=b4.cy.f
b5=b5.co
b5.a.uniform3f(b5.d,n.a,n.b,n.c)}}b5=q.y.a
n=!b5
if(n)m=!1
else m=!0
if(m){if(b5){b5=b4.a
m=b4.db.f
b5=b5.cp
b5.a.uniform1f(b5.d,m)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].aT(b6)
b5=b7.e
b5.aT(b6)
b5.ay(b6)
b5.cP(b6)
if(n)b5=!1
else b5=!0
if(b5)o.disable(3042)
for(h=0;h<j.length;++h)j[h].cP(b6)
b5=b4.a
b5.toString
o.useProgram(null)
b5.x.f_()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.bS().aH}}
O.hn.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.fz(a,C.c.S(b+3,4)*4))}}
O.ho.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.hp.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.fI(a,C.c.S(b+3,4)*4))}}
O.hq.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.hr.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.hG(a,C.c.S(b+3,4)*4))}}
O.hs.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.ht.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.hZ(a,C.c.S(b+3,4)*4))}}
O.hu.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.hh.prototype={
ab:function(){var s,r=this
r.bH()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.B(r.b,s,1)
s.b=!0
r.a.W(s)}}}
O.dm.prototype={
ab:function(){},
c0:function(a){var s,r,q=this
if(!q.c.n(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ab()
s=q.a
s.a=null
s.W(null)}}}
O.hi.prototype={}
O.ak.prototype={
c_:function(a){var s,r,q=this
if(!q.f.n(0,a)){s=q.f
q.f=a
r=new D.B(q.b+".color",s,a)
r.b=!0
q.a.W(r)}},
ab:function(){this.bH()
this.c_(new V.N(1,1,1))},
sau:function(a,b){this.c0(new A.Q(!0,!1,!1))
this.c_(b)}}
O.hk.prototype={}
O.hl.prototype={
ab:function(){var s,r=this
r.bI()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.B(r.b+".refraction",s,1)
s.b=!0
r.a.W(s)}}}
O.hm.prototype={
c1:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.B(s.b+".shininess",r,a)
r.b=!0
s.a.W(r)}},
ab:function(){this.bI()
this.c1(100)}}
O.i4.prototype={}
X.jk.prototype={}
X.h0.prototype={
gA:function(){var s=this.x
return s==null?this.x=D.a8():s}}
X.dB.prototype={
gA:function(){var s=this.f
return s==null?this.f=D.a8():s},
ao:function(a){var s=this.f
if(s!=null)s.O(a)},
dj:function(){return this.ao(null)},
saI:function(a){var s,r,q=this
if(!J.J(q.b,a)){s=q.b
if(s!=null)s.gA().K(0,q.gbN())
r=q.b
q.b=a
if(a!=null)a.gA().q(0,q.gbN())
s=new D.B("mover",r,q.b)
s.b=!0
q.ao(s)}}}
X.i2.prototype={}
V.aS.prototype={
aN:function(a){this.b=new P.h3(C.L)
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
n=l.b.dw(p,0,p.length)
m=n==null?p:n
C.J.cW(o,H.jT(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.gaZ(l.d).push(o)}},
cE:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.aU()
r.toString
q=new H.l(s)
q=new P.bf(r.bB(new H.ax(q,q.gl(q))).a())
for(;q.p();)p.b_(q.gv(q))}}
V.jg.prototype={
$1:function(a){var s=C.d.cN(this.a.gf8(),2)
if(s!=="0.00")P.jS(s+" fps")}}
V.d0.prototype={
b_:function(a){var s=this
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
aU:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.i8()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.G("a","z")
s.a.push(r)
r=K.G("A","Z")
s.a.push(r)
r=a2.j(0,p).k(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.G("0","9")
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=a2.j(0,q).k(0,o)
r=K.G("0","9")
s.a.push(r)
r=a2.j(0,o).k(0,o)
s=K.G("0","9")
r.a.push(s)
s=a2.j(0,o).k(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=a2.j(0,n).k(0,m)
s=K.G("0","9")
r.a.push(s)
s=a2.j(0,m).k(0,m)
r=K.G("0","9")
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
a2.j(0,j).k(0,j).a.push(new K.at())
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
a2.j(0,g).k(0,g).a.push(new K.at())
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
r=new K.U()
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
r=new K.U()
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
r.d=r.a.F("Num")
r=a2.j(0,m)
r.d=r.a.F("Num")
r=a2.j(0,l)
r.d=r.a.F("Symbol")
r=a2.j(0,i)
r.d=r.a.F("String")
r=a2.j(0,f)
r.d=r.a.F("String")
r=a2.j(0,b)
r.d=r.a.F(c)
r=a2.j(0,a1)
r.d=r.a.F(a1)
r=a2.j(0,p)
r=r.d=r.a.F(p)
r.aj(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aj(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aj(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.d8.prototype={
b_:function(a){var s=this
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
aU:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.i8()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.G("a","z")
s.a.push(r)
r=K.G("A","Z")
s.a.push(r)
r=d.j(0,p).k(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.G("0","9")
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=d.j(0,q).k(0,o)
r=K.G("0","9")
s.a.push(r)
r=d.j(0,o).k(0,o)
s=K.G("0","9")
r.a.push(s)
s=d.j(0,o).k(0,n)
r=K.m(new H.l("."))
s.a.push(r)
r=d.j(0,n).k(0,m)
s=K.G("0","9")
r.a.push(s)
s=d.j(0,m).k(0,m)
r=K.G("0","9")
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
d.j(0,j).k(0,l).a.push(new K.at())
r=d.j(0,i).k(0,h)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.j(0,i).k(0,i)
r=new K.U()
r.a=[]
s.a.push(r)
s=K.m(new H.l("\n"))
r.a.push(s)
s=d.j(0,q).k(0,g)
r=K.m(new H.l("#"))
s.a.push(r)
r=d.j(0,g).k(0,g)
s=new K.U()
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
s.d=s.a.F("Num")
s=d.j(0,m)
s.d=s.a.F("Num")
s=d.j(0,l)
s.d=s.a.F("Symbol")
s=d.j(0,h)
s.d=s.a.F(i)
s=d.j(0,f)
s.d=s.a.F(g)
s=d.j(0,e)
s.d=s.a.F(e)
s=d.j(0,p)
s=s.d=s.a.F(p)
s.aj(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aj(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aj(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.da.prototype={
b_:function(a){var s=this,r="#111"
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
aU:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.i8()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=K.m(new H.l("_"))
s.a.push(r)
r=K.G("a","z")
s.a.push(r)
r=K.G("A","Z")
s.a.push(r)
r=j.j(0,p).k(0,p)
s=K.m(new H.l("_"))
r.a.push(s)
s=K.G("0","9")
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
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
j.j(0,m).k(0,m).a.push(new K.at())
j.j(0,q).k(0,k).a.push(new K.at())
s=j.j(0,k).k(0,k)
r=new K.U()
r.a=[]
s.a.push(r)
s=K.m(new H.l('</\\-!>=_"'))
r.a.push(s)
s=K.G("a","z")
r.a.push(s)
s=K.G("A","Z")
r.a.push(s)
s=j.j(0,n)
s.d=s.a.F("Symbol")
s=j.j(0,l)
s.d=s.a.F("String")
s=j.j(0,p)
r=s.a.F(p)
s.d=r
r.aj(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.F(o)
r=j.j(0,k)
r.d=r.a.F(k)
return j}}
V.dD.prototype={
cE:function(a,b){this.d=[]
this.C(C.a.k(b,"\n"),"#111")},
b_:function(a){},
aU:function(){return null}}
V.hU.prototype={
d8:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.P(o,"scroll",new V.hW(m),!1)},
c7:function(a){var s,r,q,p,o,n,m,l
this.eH()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.fa(a)
q.toString
p=new H.l(p)
p=new P.bf(q.bB(new H.ax(p,p.gl(p))).a())
for(;p.p();){q=p.gv(p)
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
if(H.l9(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.e(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.kS(C.q,q,C.h,!1)
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
cS:function(a){var s,r,q,p=new V.d0("dart")
p.aN("dart")
s=new V.d8("glsl")
s.aN("glsl")
r=new V.da("html")
r.aN("html")
q=C.a.f7([p,s,r],new V.hX(a))
if(q!=null)return q
p=new V.dD("plain")
p.aN("plain")
return p},
c5:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(J.jO(q).b4(q,"+")){b2[r]=C.b.a6(q,1)
a8.push(1)
s=!0}else if(C.b.b4(q,"-")){b2[r]=C.b.a6(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.cS(b0)
p.cE(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m)
this.a.appendChild(n)
l=P.kS(C.q,a9,C.h,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.jZ()
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
for(a4=C.a.gI(q);a4.p();)b.appendChild(a4.gv(a4))
d.appendChild(c)
d.appendChild(b)
m.appendChild(d)}},
eH:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=L.i8()
s.d=s.j(0,p)
r=s.j(0,p).k(0,o)
q=K.m(new H.l("*"))
r.a.push(q)
r.c=!0
r=s.j(0,o).k(0,o)
q=new K.U()
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
q=new K.U()
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
q=new K.U()
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
r=new K.U()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
q=s.j(0,j).k(0,i)
r=K.m(new H.l("]"))
q.a.push(r)
q.c=!0
q=s.j(0,j).k(0,j)
r=new K.U()
r.a=[]
q.a.push(r)
q=K.m(new H.l("|]"))
r.a.push(q)
s.j(0,p).k(0,h).a.push(new K.at())
q=s.j(0,h).k(0,h)
r=new K.U()
r.a=[]
q.a.push(r)
q=K.m(new H.l("*_`["))
r.a.push(q)
q=s.j(0,"BoldEnd")
q.d=q.a.F(o)
q=s.j(0,m)
q.d=q.a.F(n)
q=s.j(0,"CodeEnd")
q.d=q.a.F(l)
q=s.j(0,i)
q.d=q.a.F("Link")
q=s.j(0,h)
q.d=q.a.F(h)
this.b=s}}
V.hW.prototype={
$1:function(a){P.kv(C.i,new V.hV(this.a))}}
V.hV.prototype={
$0:function(){var s=C.d.a1(document.documentElement.scrollTop),r=this.a.style,q=H.d(-0.01*s)+"px"
r.top=q}}
V.hX.prototype={
$1:function(a){return a.a===this.a}}
X.je.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
s.c5("Vertex Shader","glsl",0,(q==null?null:q.c).split("\n"))
r=r.a
s.c5("Fragment Shader","glsl",0,(r==null?null:r.d).split("\n"))}};(function aliases(){var s=J.a.prototype
s.d_=s.i
s=J.b2.prototype
s.d1=s.i
s=P.f.prototype
s.d0=s.b2
s=W.w.prototype
s.b5=s.Y
s=W.ct.prototype
s.d2=s.a4
s=K.d9.prototype
s.cZ=s.ag
s.bG=s.i
s=O.dm.prototype
s.bH=s.ab
s=O.ak.prototype
s.bI=s.ab})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"mW","lT",18)
r(P,"nB","mm",5)
r(P,"nC","mn",5)
r(P,"nD","mo",5)
q(P,"l0","nw",6)
r(W,"p4","fO",19)
p(W,"nN",4,null,["$4"],["mp"],11,0)
p(W,"nO",4,null,["$4"],["mq"],11,0)
var j
o(j=E.br.prototype,"gcC",0,0,null,["$1","$0"],["cD","fk"],0,0)
o(j,"gcA",0,0,null,["$1","$0"],["cB","fj"],0,0)
o(j,"gcw",0,0,null,["$1","$0"],["cz","fg"],0,0)
n(j,"gfe","ff",2)
n(j,"gfh","fi",2)
o(j=E.dZ.prototype,"gbK",0,0,null,["$1","$0"],["bM","bL"],0,0)
m(j,"gfC","cJ",6)
l(j=X.ej.prototype,"gdY","dZ",3)
l(j,"gdM","dN",3)
l(j,"gdS","dT",1)
l(j,"ge1","e2",7)
l(j,"ge_","e0",7)
l(j,"ge5","e6",1)
l(j,"ge9","ea",1)
l(j,"gdW","dX",1)
l(j,"ge7","e8",1)
l(j,"gdU","dV",1)
l(j,"geb","ec",16)
l(j,"ged","ee",3)
l(j,"geo","ep",4)
l(j,"gek","el",4)
l(j,"gem","en",4)
o(D.bq.prototype,"gda",0,0,null,["$1","$0"],["a7","dc"],0,0)
o(j=D.c1.prototype,"gbW",0,0,null,["$1","$0"],["bX","e3"],0,0)
l(j,"geg","eh",17)
n(j,"gdG","dH",8)
n(j,"gei","ej",8)
k(V.bF.prototype,"gl","bu",9)
k(V.z.prototype,"gl","bu",9)
o(j=M.d3.prototype,"ga3",0,0,null,["$1","$0"],["a8","dd"],0,0)
n(j,"gdO","dP",2)
n(j,"gdQ","dR",2)
o(j=O.dl.prototype,"gdf",0,0,null,["$1","$0"],["W","dg"],0,0)
o(j,"gey",0,0,null,["$1","$0"],["bY","ez"],0,0)
n(j,"gdI","dJ",10)
n(j,"gdK","dL",10)
o(X.dB.prototype,"gbN",0,0,null,["$1","$0"],["ao","dj"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.H,null)
q(P.H,[H.jq,J.a,J.X,P.cm,P.f,H.ax,P.dc,H.bX,H.eh,H.ic,P.E,H.hF,H.f_,H.bo,P.aj,H.hc,H.di,H.h8,H.a4,H.eC,P.cz,P.bJ,P.bf,P.en,P.dS,P.dT,P.ch,P.j1,P.cs,P.iQ,P.cl,P.x,P.cW,P.h4,P.j_,P.ap,P.aV,P.M,P.aW,P.dA,P.cf,P.ez,P.h_,P.h1,P.ai,P.dj,P.a3,P.I,P.aC,W.fE,W.jn,W.jC,W.bI,W.C,W.cd,W.ct,W.f4,W.bY,W.a2,W.iU,W.fe,P.eT,K.at,K.d9,K.hI,K.hP,L.dR,L.e_,L.e0,L.i7,O.bp,O.c7,E.fA,E.br,E.bn,E.bx,E.ew,E.hJ,E.dZ,Z.el,Z.iH,Z.cU,Z.h5,Z.bd,D.fC,D.bs,D.af,X.cV,X.dg,X.ha,X.he,X.c8,X.hA,X.i9,X.ej,D.bq,D.ah,V.N,V.aT,V.fR,V.dn,V.bu,V.az,V.R,V.dI,V.bF,V.z,M.d3,A.fu,A.fv,A.Q,A.fz,A.fI,A.hG,A.hZ,A.hj,A.e7,A.e8,A.eb,A.ee,A.ig,A.im,F.fV,F.fX,F.hb,F.hQ,F.hR,F.hS,F.hT,F.iv,F.iw,F.ix,F.iA,F.iC,F.iD,F.iE,O.i4,O.dm,O.hk,X.jk,X.i2,X.dB,V.aS,V.hU])
q(J.a,[J.h7,J.c0,J.b2,J.a1,J.b1,J.ag,H.ca,W.b,W.fs,W.cT,W.ae,W.D,W.er,W.a0,W.fH,W.fJ,W.es,W.bU,W.eu,W.fK,W.h,W.eA,W.aY,W.h2,W.eF,W.hd,W.hv,W.eJ,W.eK,W.b5,W.eL,W.eN,W.b7,W.eR,W.eU,W.b8,W.eV,W.b9,W.f0,W.aD,W.f6,W.i6,W.ba,W.f8,W.ia,W.ip,W.ff,W.fh,W.fj,W.fl,W.fn,P.bt,P.eH,P.bw,P.eP,P.hH,P.f1,P.bD,P.fa,P.fw,P.eo,P.eY])
q(J.b2,[J.dC,J.bc,J.a9])
r(J.de,J.a1)
q(J.b1,[J.c_,J.dd])
r(P.c3,P.cm)
q(P.c3,[H.bE,W.ep,W.O,P.d6])
r(H.l,H.bE)
q(P.f,[H.i,H.b4,H.be,P.bZ])
q(H.i,[H.c4,H.aw])
r(H.bV,H.b4)
q(P.dc,[H.c5,H.em])
r(H.c6,H.c4)
q(P.E,[H.dw,H.df,H.eg,H.dK,H.ex,P.cR,P.dx,P.W,P.ei,P.ef,P.bB,P.cX,P.d_])
q(H.bo,[H.i3,H.h9,H.j9,H.ja,H.jb,P.iJ,P.iI,P.iK,P.iL,P.iZ,P.iY,P.j4,P.iS,P.iT,P.hf,P.fL,P.fM,W.fN,W.hx,W.hz,W.hO,W.i1,W.iO,W.hD,W.hC,W.iV,W.iW,W.iX,W.j0,P.j5,P.fY,P.fZ,P.fy,E.hK,E.hL,E.hM,E.i5,D.fT,D.fU,F.jh,F.j6,F.iG,F.iF,F.iy,F.iz,O.hn,O.ho,O.hp,O.hq,O.hr,O.hs,O.ht,O.hu,V.jg,V.hW,V.hV,V.hX,X.je])
q(H.i3,[H.i_,H.bQ])
r(P.dk,P.aj)
q(P.dk,[H.u,W.iM])
r(H.bv,H.ca)
q(H.bv,[H.co,H.cq])
r(H.cp,H.co)
r(H.b6,H.cp)
r(H.cr,H.cq)
r(H.c9,H.cr)
q(H.c9,[H.dq,H.dr,H.ds,H.dt,H.du,H.cb,H.dv])
r(H.cA,H.ex)
r(P.cw,P.bZ)
r(P.iR,P.j1)
r(P.ck,P.cs)
r(P.cZ,P.dT)
r(P.fP,P.cW)
q(P.cZ,[P.h3,P.ir])
r(P.iq,P.fP)
q(P.M,[P.T,P.q])
q(P.W,[P.bz,P.db])
q(W.b,[W.t,W.d5,W.aB,W.cu,W.aE,W.ab,W.cx,W.ek,W.bG,P.cS,P.au])
q(W.t,[W.w,W.a7,W.bH])
q(W.w,[W.k,P.j])
q(W.k,[W.cP,W.cQ,W.bm,W.aQ,W.aR,W.bS,W.d7,W.dL,W.cg,W.dV,W.dW,W.bC])
r(W.fD,W.ae)
r(W.bR,W.er)
q(W.a0,[W.fF,W.fG])
r(W.et,W.es)
r(W.bT,W.et)
r(W.ev,W.eu)
r(W.d2,W.ev)
r(W.aX,W.cT)
r(W.eB,W.eA)
r(W.d4,W.eB)
r(W.eG,W.eF)
r(W.aZ,W.eG)
r(W.an,W.h)
q(W.an,[W.b3,W.Y,W.bb])
r(W.hw,W.eJ)
r(W.hy,W.eK)
r(W.eM,W.eL)
r(W.dp,W.eM)
r(W.eO,W.eN)
r(W.cc,W.eO)
r(W.eS,W.eR)
r(W.dE,W.eS)
r(W.hN,W.eU)
r(W.cv,W.cu)
r(W.dO,W.cv)
r(W.eW,W.eV)
r(W.dP,W.eW)
r(W.i0,W.f0)
r(W.f7,W.f6)
r(W.dX,W.f7)
r(W.cy,W.cx)
r(W.dY,W.cy)
r(W.f9,W.f8)
r(W.e1,W.f9)
r(W.aF,W.Y)
r(W.fg,W.ff)
r(W.eq,W.fg)
r(W.cj,W.bU)
r(W.fi,W.fh)
r(W.eD,W.fi)
r(W.fk,W.fj)
r(W.cn,W.fk)
r(W.fm,W.fl)
r(W.eX,W.fm)
r(W.fo,W.fn)
r(W.f3,W.fo)
r(W.iN,W.iM)
r(W.ey,P.dS)
r(W.f5,W.ct)
r(P.aa,P.eT)
r(P.eI,P.eH)
r(P.dh,P.eI)
r(P.eQ,P.eP)
r(P.dy,P.eQ)
r(P.bA,P.j)
r(P.f2,P.f1)
r(P.dU,P.f2)
r(P.fb,P.fa)
r(P.e2,P.fb)
r(P.fx,P.eo)
r(P.dz,P.au)
r(P.eZ,P.eY)
r(P.dQ,P.eZ)
q(K.d9,[K.U,L.ib])
q(E.fA,[Z.fB,A.dM])
q(D.af,[D.b_,D.b0,D.B])
r(D.c1,O.bp)
r(U.hB,D.fC)
q(U.hB,[U.cY,U.dJ])
r(A.hg,A.dM)
q(A.ig,[A.e4,A.ij,A.ik,A.il,A.ih,A.e3,A.ii,A.e5,A.e6,A.io,A.e9,A.ea,A.ec,A.ed])
r(F.hY,F.fX)
r(F.ie,F.hb)
r(F.iB,F.iC)
r(F.hE,F.iD)
r(O.dl,O.i4)
q(O.dm,[O.hh,O.hi,O.ak])
q(O.ak,[O.hl,O.hm])
r(X.h0,X.i2)
q(V.aS,[V.d0,V.d8,V.da,V.dD])
s(H.bE,H.eh)
s(H.co,P.x)
s(H.cp,H.bX)
s(H.cq,P.x)
s(H.cr,H.bX)
s(P.cm,P.x)
s(W.er,W.fE)
s(W.es,P.x)
s(W.et,W.C)
s(W.eu,P.x)
s(W.ev,W.C)
s(W.eA,P.x)
s(W.eB,W.C)
s(W.eF,P.x)
s(W.eG,W.C)
s(W.eJ,P.aj)
s(W.eK,P.aj)
s(W.eL,P.x)
s(W.eM,W.C)
s(W.eN,P.x)
s(W.eO,W.C)
s(W.eR,P.x)
s(W.eS,W.C)
s(W.eU,P.aj)
s(W.cu,P.x)
s(W.cv,W.C)
s(W.eV,P.x)
s(W.eW,W.C)
s(W.f0,P.aj)
s(W.f6,P.x)
s(W.f7,W.C)
s(W.cx,P.x)
s(W.cy,W.C)
s(W.f8,P.x)
s(W.f9,W.C)
s(W.ff,P.x)
s(W.fg,W.C)
s(W.fh,P.x)
s(W.fi,W.C)
s(W.fj,P.x)
s(W.fk,W.C)
s(W.fl,P.x)
s(W.fm,W.C)
s(W.fn,P.x)
s(W.fo,W.C)
s(P.eH,P.x)
s(P.eI,W.C)
s(P.eP,P.x)
s(P.eQ,W.C)
s(P.f1,P.x)
s(P.f2,W.C)
s(P.fa,P.x)
s(P.fb,W.C)
s(P.eo,P.aj)
s(P.eY,P.x)
s(P.eZ,W.C)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{q:"int",T:"double",M:"num",I:"String",ap:"bool",a3:"Null",ai:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([af*])","~(Y*)","~(q*,f<br*>*)","~(h*)","~(bb*)","~(~())","~()","~(b3*)","~(q*,f<ah*>*)","T*()","~(q*,f<bu*>*)","ap(w,I,I,bI)","@(@)","a3(@)","a3(H?,H?)","a3(@,@)","~(aF*)","ap*(f<ah*>*)","q(@,@)","I(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mI(v.typeUniverse,JSON.parse('{"a9":"b2","dC":"b2","bc":"b2","o4":"h","oe":"h","o6":"au","o5":"b","ok":"b","om":"b","o3":"j","of":"j","o7":"k","oi":"k","og":"t","od":"t","oK":"ab","ob":"an","o8":"a7","on":"a7","ol":"Y","oh":"aZ","oj":"b6","a1":{"i":["1"],"f":["1"]},"de":{"i":["1"],"f":["1"]},"b1":{"T":[],"M":[]},"c_":{"T":[],"q":[],"M":[]},"dd":{"T":[],"M":[]},"ag":{"I":[]},"l":{"i":["q"],"f":["q"]},"i":{"f":["1"]},"c4":{"i":["1"],"f":["1"]},"b4":{"f":["2"]},"bV":{"i":["2"],"f":["2"]},"c6":{"i":["2"],"f":["2"]},"be":{"f":["1"]},"bE":{"i":["1"],"f":["1"]},"dw":{"E":[]},"df":{"E":[]},"eg":{"E":[]},"dK":{"E":[]},"aw":{"i":["1"],"f":["1"]},"bv":{"r":["1"]},"b6":{"r":["T"],"i":["T"],"f":["T"]},"c9":{"r":["q"],"i":["q"],"f":["q"]},"dq":{"r":["q"],"i":["q"],"f":["q"]},"dr":{"r":["q"],"i":["q"],"f":["q"]},"ds":{"r":["q"],"i":["q"],"f":["q"]},"dt":{"r":["q"],"i":["q"],"f":["q"]},"du":{"r":["q"],"i":["q"],"f":["q"]},"cb":{"r":["q"],"i":["q"],"f":["q"]},"dv":{"r":["q"],"i":["q"],"f":["q"]},"ex":{"E":[]},"cA":{"E":[]},"cz":{"ch":[]},"cw":{"f":["1"]},"ck":{"i":["1"],"f":["1"]},"bZ":{"f":["1"]},"c3":{"i":["1"],"f":["1"]},"cs":{"i":["1"],"f":["1"]},"T":{"M":[]},"cR":{"E":[]},"dx":{"E":[]},"W":{"E":[]},"bz":{"E":[]},"db":{"E":[]},"ei":{"E":[]},"ef":{"E":[]},"bB":{"E":[]},"cX":{"E":[]},"dA":{"E":[]},"cf":{"E":[]},"d_":{"E":[]},"q":{"M":[]},"ai":{"i":["1"],"f":["1"]},"k":{"w":[],"t":[],"b":[]},"cP":{"w":[],"t":[],"b":[]},"cQ":{"w":[],"t":[],"b":[]},"bm":{"w":[],"t":[],"b":[]},"aQ":{"w":[],"t":[],"b":[]},"aR":{"w":[],"t":[],"b":[]},"a7":{"t":[],"b":[]},"bS":{"w":[],"t":[],"b":[]},"bT":{"r":["aa<M>"],"i":["aa<M>"],"f":["aa<M>"]},"bU":{"aa":["M"]},"d2":{"r":["I"],"i":["I"],"f":["I"]},"ep":{"i":["w"],"f":["w"]},"w":{"t":[],"b":[]},"d4":{"r":["aX"],"i":["aX"],"f":["aX"]},"d5":{"b":[]},"d7":{"w":[],"t":[],"b":[]},"aZ":{"r":["t"],"i":["t"],"f":["t"]},"b3":{"h":[]},"dp":{"r":["b5"],"i":["b5"],"f":["b5"]},"Y":{"h":[]},"O":{"i":["t"],"f":["t"]},"t":{"b":[]},"cc":{"r":["t"],"i":["t"],"f":["t"]},"dE":{"r":["b7"],"i":["b7"],"f":["b7"]},"dL":{"w":[],"t":[],"b":[]},"aB":{"b":[]},"dO":{"r":["aB"],"b":[],"i":["aB"],"f":["aB"]},"dP":{"r":["b8"],"i":["b8"],"f":["b8"]},"cg":{"w":[],"t":[],"b":[]},"dV":{"w":[],"t":[],"b":[]},"dW":{"w":[],"t":[],"b":[]},"bC":{"w":[],"t":[],"b":[]},"aE":{"b":[]},"ab":{"b":[]},"dX":{"r":["ab"],"i":["ab"],"f":["ab"]},"dY":{"r":["aE"],"b":[],"i":["aE"],"f":["aE"]},"bb":{"h":[]},"e1":{"r":["ba"],"i":["ba"],"f":["ba"]},"an":{"h":[]},"ek":{"b":[]},"aF":{"Y":[],"h":[]},"bG":{"b":[]},"bH":{"t":[],"b":[]},"eq":{"r":["D"],"i":["D"],"f":["D"]},"cj":{"aa":["M"]},"eD":{"r":["aY?"],"i":["aY?"],"f":["aY?"]},"cn":{"r":["t"],"i":["t"],"f":["t"]},"eX":{"r":["b9"],"i":["b9"],"f":["b9"]},"f3":{"r":["aD"],"i":["aD"],"f":["aD"]},"bI":{"a2":[]},"cd":{"a2":[]},"ct":{"a2":[]},"f5":{"a2":[]},"f4":{"a2":[]},"d6":{"i":["w"],"f":["w"]},"aa":{"eT":["1"]},"dh":{"i":["bt"],"f":["bt"]},"dy":{"i":["bw"],"f":["bw"]},"bA":{"j":[],"w":[],"t":[],"b":[]},"dU":{"i":["I"],"f":["I"]},"j":{"w":[],"t":[],"b":[]},"e2":{"i":["bD"],"f":["bD"]},"cS":{"b":[]},"au":{"b":[]},"dz":{"b":[]},"dQ":{"i":["dj<@,@>"],"f":["dj<@,@>"]},"bp":{"f":["1*"]},"b_":{"af":[]},"b0":{"af":[]},"B":{"af":[]},"bq":{"ah":[]},"c1":{"f":["ah*"]},"d0":{"aS":[]},"d8":{"aS":[]},"da":{"aS":[]},"dD":{"aS":[]}}'))
H.mH(v.typeUniverse,JSON.parse('{"a1":1,"de":1,"X":1,"i":1,"c4":1,"ax":1,"b4":2,"bV":2,"c5":2,"c6":2,"be":1,"em":1,"bX":1,"eh":1,"bE":1,"aw":1,"di":1,"bv":1,"bf":1,"cw":1,"dS":1,"dT":2,"cl":1,"bZ":1,"c3":1,"x":1,"dk":2,"aj":2,"cs":1,"cm":1,"cW":2,"cZ":2,"f":1,"dc":1,"ai":1,"ey":1,"C":1,"bY":1,"bp":1,"b_":1,"b0":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.nK
return{v:s("bm"),t:s("aQ"),R:s("i<@>"),h:s("w"),C:s("E"),D:s("h"),Z:s("h1"),b:s("a1<@>"),T:s("c0"),g:s("a9"),p:s("r<@>"),F:s("u<I*,dM*>"),V:s("u<I*,dR*>"),i:s("u<I*,I*>"),w:s("u<I*,e0*>"),s:s("u<q*,ai<e7*>*>"),G:s("u<q*,ai<e8*>*>"),U:s("u<q*,ai<eb*>*>"),L:s("u<q*,ai<ee*>*>"),J:s("u<q*,e4*>"),E:s("u<q*,ap*>"),a:s("u<q*,q*>"),P:s("a3"),K:s("H"),I:s("aa<M>"),Y:s("bA"),N:s("I"),u:s("j"),f:s("bC"),M:s("ch"),o:s("bc"),x:s("bH"),W:s("ap"),d:s("T"),z:s("@"),S:s("q"),B:s("aR*"),A:s("0&*"),_:s("H*"),k:s("I*"),j:s("e_*"),n:s("e3*"),r:s("e5*"),y:s("e6*"),O:s("e9*"),q:s("ea*"),c:s("ec*"),Q:s("ed*"),e:s("q*"),l:s("kb<a3>?"),X:s("H?"),H:s("M")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.aQ.prototype
C.I=W.aR.prototype
C.J=W.bS.prototype
C.M=J.a.prototype
C.a=J.a1.prototype
C.c=J.c_.prototype
C.f=J.c0.prototype
C.d=J.b1.prototype
C.b=J.ag.prototype
C.N=J.a9.prototype
C.u=J.dC.prototype
C.v=W.cg.prototype
C.k=J.bc.prototype
C.w=W.aF.prototype
C.x=W.bG.prototype
C.y=new E.bn("Browser.chrome")
C.m=new E.bn("Browser.firefox")
C.n=new E.bn("Browser.edge")
C.z=new E.bn("Browser.other")
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

C.G=new P.dA()
C.h=new P.iq()
C.H=new P.ir()
C.e=new P.iR()
C.i=new P.aW(0)
C.K=new P.aW(5e6)
C.L=new P.h4("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.q=s([0,0,65498,45055,65535,34815,65534,18431])
C.r=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bx("OperatingSystem.windows")
C.t=new E.bx("OperatingSystem.mac")
C.S=new E.bx("OperatingSystem.linux")
C.T=new E.bx("OperatingSystem.other")
C.U=new P.bJ(null,2)})();(function staticFields(){$.kI=null
$.ad=0
$.k3=null
$.k2=null
$.l2=null
$.l_=null
$.l7=null
$.j7=null
$.jc=null
$.jQ=null
$.bK=null
$.cG=null
$.cH=null
$.jL=!1
$.ac=C.e
$.V=[]
$.av=null
$.jm=null
$.ka=null
$.k9=null
$.eE=P.ke(t.N,t.Z)
$.fQ=null
$.ki=null
$.kl=null
$.al=null
$.kq=null
$.kB=null
$.kA=null
$.is=null
$.it=null
$.iu=null
$.kz=null
$.kk=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"oc","ld",function(){return H.nM("_$dart_dartClosure")})
s($,"oo","le",function(){return H.am(H.id({
toString:function(){return"$receiver$"}}))})
s($,"op","lf",function(){return H.am(H.id({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oq","lg",function(){return H.am(H.id(null))})
s($,"or","lh",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"ou","lk",function(){return H.am(H.id(void 0))})
s($,"ov","ll",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"ot","lj",function(){return H.am(H.kx(null))})
s($,"os","li",function(){return H.am(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"ox","ln",function(){return H.am(H.kx(void 0))})
s($,"ow","lm",function(){return H.am(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"oL","jV",function(){return P.ml()})
s($,"oO","ls",function(){return P.m8("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oM","lr",function(){return P.kf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oE","lq",function(){return Z.a5(0)})
s($,"oy","lo",function(){return Z.a5(511)})
s($,"oG","aN",function(){return Z.a5(1)})
s($,"oF","aM",function(){return Z.a5(2)})
s($,"oA","aL",function(){return Z.a5(4)})
s($,"oH","bk",function(){return Z.a5(8)})
s($,"oI","bl",function(){return Z.a5(16)})
s($,"oB","cL",function(){return Z.a5(32)})
s($,"oC","cM",function(){return Z.a5(64)})
s($,"oD","lp",function(){return Z.a5(96)})
s($,"oJ","bP",function(){return Z.a5(128)})
s($,"oz","aK",function(){return Z.a5(256)})
s($,"oa","lc",function(){return new V.fR()})
s($,"o9","A",function(){return $.lc()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ca,ArrayBufferView:H.ca,Float32Array:H.b6,Float64Array:H.b6,Int16Array:H.dq,Int32Array:H.dr,Int8Array:H.ds,Uint16Array:H.dt,Uint32Array:H.du,Uint8ClampedArray:H.cb,CanvasPixelArray:H.cb,Uint8Array:H.dv,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.fs,HTMLAnchorElement:W.cP,HTMLAreaElement:W.cQ,HTMLBaseElement:W.bm,Blob:W.cT,HTMLBodyElement:W.aQ,HTMLCanvasElement:W.aR,CDATASection:W.a7,CharacterData:W.a7,Comment:W.a7,ProcessingInstruction:W.a7,Text:W.a7,CSSPerspective:W.fD,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bR,MSStyleCSSProperties:W.bR,CSS2Properties:W.bR,CSSImageValue:W.a0,CSSKeywordValue:W.a0,CSSNumericValue:W.a0,CSSPositionValue:W.a0,CSSResourceValue:W.a0,CSSUnitValue:W.a0,CSSURLImageValue:W.a0,CSSStyleValue:W.a0,CSSMatrixComponent:W.ae,CSSRotation:W.ae,CSSScale:W.ae,CSSSkew:W.ae,CSSTranslation:W.ae,CSSTransformComponent:W.ae,CSSTransformValue:W.fF,CSSUnparsedValue:W.fG,DataTransferItemList:W.fH,HTMLDivElement:W.bS,DOMException:W.fJ,ClientRectList:W.bT,DOMRectList:W.bT,DOMRectReadOnly:W.bU,DOMStringList:W.d2,DOMTokenList:W.fK,Element:W.w,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aX,FileList:W.d4,FileWriter:W.d5,HTMLFormElement:W.d7,Gamepad:W.aY,History:W.h2,HTMLCollection:W.aZ,HTMLFormControlsCollection:W.aZ,HTMLOptionsCollection:W.aZ,KeyboardEvent:W.b3,Location:W.hd,MediaList:W.hv,MIDIInputMap:W.hw,MIDIOutputMap:W.hy,MimeType:W.b5,MimeTypeArray:W.dp,PointerEvent:W.Y,MouseEvent:W.Y,DragEvent:W.Y,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cc,RadioNodeList:W.cc,Plugin:W.b7,PluginArray:W.dE,RTCStatsReport:W.hN,HTMLSelectElement:W.dL,SourceBuffer:W.aB,SourceBufferList:W.dO,SpeechGrammar:W.b8,SpeechGrammarList:W.dP,SpeechRecognitionResult:W.b9,Storage:W.i0,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableElement:W.cg,HTMLTableRowElement:W.dV,HTMLTableSectionElement:W.dW,HTMLTemplateElement:W.bC,TextTrack:W.aE,TextTrackCue:W.ab,VTTCue:W.ab,TextTrackCueList:W.dX,TextTrackList:W.dY,TimeRanges:W.i6,Touch:W.ba,TouchEvent:W.bb,TouchList:W.e1,TrackDefaultList:W.ia,CompositionEvent:W.an,FocusEvent:W.an,TextEvent:W.an,UIEvent:W.an,URL:W.ip,VideoTrackList:W.ek,WheelEvent:W.aF,Window:W.bG,DOMWindow:W.bG,Attr:W.bH,CSSRuleList:W.eq,ClientRect:W.cj,DOMRect:W.cj,GamepadList:W.eD,NamedNodeMap:W.cn,MozNamedAttrMap:W.cn,SpeechRecognitionResultList:W.eX,StyleSheetList:W.f3,SVGLength:P.bt,SVGLengthList:P.dh,SVGNumber:P.bw,SVGNumberList:P.dy,SVGPointList:P.hH,SVGScriptElement:P.bA,SVGStringList:P.dU,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bD,SVGTransformList:P.e2,AudioBuffer:P.fw,AudioParamMap:P.fx,AudioTrackList:P.cS,AudioContext:P.au,webkitAudioContext:P.au,BaseAudioContext:P.au,OfflineAudioContext:P.dz,SQLResultSetRowList:P.dQ})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.b6.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
W.cu.$nativeSuperclassTag="EventTarget"
W.cv.$nativeSuperclassTag="EventTarget"
W.cx.$nativeSuperclassTag="EventTarget"
W.cy.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.l5,[])
else X.l5([])})})()
//# sourceMappingURL=test.dart.js.map
