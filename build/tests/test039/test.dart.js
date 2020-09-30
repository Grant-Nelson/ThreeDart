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
a[c]=function(){a[c]=function(){H.ni(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jh"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jh(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={iY:function iY(){},
lc:function(a,b){if(t.U.b(a))return new H.bH(a,b)
return new H.aU(a,b)},
jA:function(){return new P.dA("No element")},
ly:function(a,b){var s=J.b7(a)
if(typeof s!=="number")return s.T()
H.dv(a,0,s-1,b)},
dv:function(a,b,c,d){if(c-b<=32)H.lx(a,b,c,d)
else H.lw(a,b,c,d)},
lx:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b3(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.S()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
lw:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.P(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.P(a6+a7,2),d=e-h,c=e+h,b=J.b3(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.S()
if(a4>0){s=a3
a3=a2
a2=s}b.k(a5,g,a)
b.k(a5,e,a1)
b.k(a5,f,a3)
b.k(a5,d,b.h(a5,a6))
b.k(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.D(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.at()
if(n<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.S()
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
if(typeof j!=="number")return j.at()
if(j<0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.S()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.S()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.at()
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
H.dv(a5,a6,r-2,a8)
H.dv(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.D(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.D(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.k(a5,p,b.h(a5,r))
b.k(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.at()
m=q-1
if(n<0){b.k(a5,p,b.h(a5,r))
l=r+1
b.k(a5,r,b.h(a5,q))
b.k(a5,q,o)
r=l}else{b.k(a5,p,b.h(a5,q))
b.k(a5,q,o)}q=m
break}}H.dv(a5,r,q,a8)}else H.dv(a5,r,q,a8)},
F:function F(a){this.a=a},
i:function i(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aU:function aU(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
bR:function bR(a,b){this.a=null
this.b=a
this.c=b},
c2:function c2(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
bI:function bI(){},
dZ:function dZ(){},
bp:function bp(){},
kw:function(a){var s,r=H.kv(a)
if(r!=null)return r
s="minified:"+a
return s},
na:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
e:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.S(a)
if(typeof s!="string")throw H.c(H.aA(a))
return s},
bZ:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
dm:function(a){return H.lf(a)},
lf:function(a){var s,r,q
if(a instanceof P.E)return H.W(H.cv(a),null)
if(J.cu(a)===C.F||t.o.b(a)){s=C.l(a)
if(H.jM(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.jM(q))return q}}return H.W(H.cv(a),null)},
jM:function(a){var s=a!=="Object"&&a!==""
return s},
jL:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lp:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(!H.cq(q))throw H.c(H.aA(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aP(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.aA(q))}return H.jL(p)},
lo:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.cq(q))throw H.c(H.aA(q))
if(q<0)throw H.c(H.aA(q))
if(q>65535)return H.lp(a)}return H.jL(a)},
ln:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aP(s,10))>>>0,56320|s&1023)}throw H.c(P.ar(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lm:function(a){var s=H.bl(a).getFullYear()+0
return s},
lk:function(a){var s=H.bl(a).getMonth()+1
return s},
lg:function(a){var s=H.bl(a).getDate()+0
return s},
lh:function(a){var s=H.bl(a).getHours()+0
return s},
lj:function(a){var s=H.bl(a).getMinutes()+0
return s},
ll:function(a){var s=H.bl(a).getSeconds()+0
return s},
li:function(a){var s=H.bl(a).getMilliseconds()+0
return s},
G:function(a){throw H.c(H.aA(a))},
d:function(a,b){if(a==null)J.b7(a)
throw H.c(H.by(a,b))},
by:function(a,b){var s,r,q="index"
if(!H.cq(b))return new P.Y(!0,b,q,null)
s=J.b7(a)
if(!(b<0)){if(typeof s!=="number")return H.G(s)
r=b>=s}else r=!0
if(r)return P.C(b,a,q,null,s)
return P.dn(b,q)},
n_:function(a,b,c){if(a>c)return P.ar(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ar(b,a,c,"end",null)
return new P.Y(!0,b,"end",null)},
aA:function(a){return new P.Y(!0,a,null,null)},
mV:function(a){if(typeof a!="number")throw H.c(H.aA(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.dd()
s=new Error()
s.dartException=a
r=H.nj
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nj:function(){return J.S(this.dartException)},
m:function(a){throw H.c(a)},
l:function(a){throw H.c(P.bD(a))},
ah:function(a){var s,r,q,p,o,n
a=H.ks(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.hP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
hQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
jX:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jH:function(a,b){return new H.dc(a,b==null?null:b.method)},
iZ:function(a,b){var s=b==null,r=s?null:b.method
return new H.cY(a,r,s?null:b.receiver)},
f5:function(a){if(a==null)return new H.hd(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.b4(a,a.dartException)
return H.mR(a)},
b4:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
mR:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aP(r,16)&8191)===10)switch(q){case 438:return H.b4(a,H.iZ(H.e(s)+" (Error "+q+")",e))
case 445:case 5007:return H.b4(a,H.jH(H.e(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.kz()
o=$.kA()
n=$.kB()
m=$.kC()
l=$.kF()
k=$.kG()
j=$.kE()
$.kD()
i=$.kI()
h=$.kH()
g=p.W(s)
if(g!=null)return H.b4(a,H.iZ(s,g))
else{g=o.W(s)
if(g!=null){g.method="call"
return H.b4(a,H.iZ(s,g))}else{g=n.W(s)
if(g==null){g=m.W(s)
if(g==null){g=l.W(s)
if(g==null){g=k.W(s)
if(g==null){g=j.W(s)
if(g==null){g=m.W(s)
if(g==null){g=i.W(s)
if(g==null){g=h.W(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.b4(a,H.jH(s,g))}}return H.b4(a,new H.dY(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.c_()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.b4(a,new P.Y(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.c_()
return a},
jj:function(a){var s
if(a==null)return new H.eH(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.eH(a)},
n1:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
n9:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.n("Unsupported number of arguments for wrapped closure"))},
bx:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n9)
a.$identity=s
return s},
l0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hx().constructor.prototype):Object.create(new H.bC(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.a9
if(typeof r!=="number")return r.u()
$.a9=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jx(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.kX(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jx(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
kX:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kn,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.kV:H.kU
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
kY:function(a,b,c,d){var s=H.jw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jx:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.l_(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.kY(r,!p,s,b)
if(r===0){p=$.a9
if(typeof p!=="number")return p.u()
$.a9=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.e(H.iQ())+";return "+n+"."+H.e(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.a9
if(typeof p!=="number")return p.u()
$.a9=p+1
m+=p
return new Function("return function("+m+"){return this."+H.e(H.iQ())+"."+H.e(s)+"("+m+");}")()},
kZ:function(a,b,c,d){var s=H.jw,r=H.kW
switch(b?-1:a){case 0:throw H.c(new H.ds("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
l_:function(a,b){var s,r,q,p,o,n,m=H.iQ(),l=$.ju
if(l==null)l=$.ju=H.jt("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kZ(r,!p,s,b)
if(r===1){p="return function(){return this."+H.e(m)+"."+H.e(s)+"(this."+l+");"
o=$.a9
if(typeof o!=="number")return o.u()
$.a9=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.e(m)+"."+H.e(s)+"(this."+l+", "+n+");"
o=$.a9
if(typeof o!=="number")return o.u()
$.a9=o+1
return new Function(p+o+"}")()},
jh:function(a,b,c,d,e,f,g){return H.l0(a,b,c,d,!!e,!!f,g)},
kU:function(a,b){return H.eT(v.typeUniverse,H.cv(a.a),b)},
kV:function(a,b){return H.eT(v.typeUniverse,H.cv(a.c),b)},
jw:function(a){return a.a},
kW:function(a){return a.c},
iQ:function(){var s=$.jv
return s==null?$.jv=H.jt("self"):s},
jt:function(a){var s,r,q,p=new H.bC("self","target","receiver","name"),o=J.iX(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.iP("Field name "+a+" not found."))},
ni:function(a){throw H.c(new P.cL(a))},
n5:function(a){return v.getIsolateTag(a)},
ok:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nc:function(a){var s,r,q,p,o,n=$.km.$1(a),m=$.iE[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kk.$2(a,n)
if(q!=null){m=$.iE[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.iI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.iL(s)
$.iE[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.iI[n]=s
return s}if(p==="-"){o=H.iL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kq(a,s)
if(p==="*")throw H.c(P.jY(n))
if(v.leafTags[n]===true){o=H.iL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kq(a,s)},
kq:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jm(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
iL:function(a){return J.jm(a,!1,null,!!a.$ip)},
nd:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.iL(s)
else return J.jm(s,c,null,null)},
n7:function(){if(!0===$.jk)return
$.jk=!0
H.n8()},
n8:function(){var s,r,q,p,o,n,m,l
$.iE=Object.create(null)
$.iI=Object.create(null)
H.n6()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kr.$1(o)
if(n!=null){m=H.nd(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
n6:function(){var s,r,q,p,o,n,m=C.w()
m=H.bv(C.x,H.bv(C.y,H.bv(C.m,H.bv(C.m,H.bv(C.z,H.bv(C.A,H.bv(C.B(C.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.km=new H.iF(p)
$.kk=new H.iG(o)
$.kr=new H.iH(n)},
bv:function(a,b){return a(b)||b},
l9:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.fD("Illegal RegExp pattern ("+String(n)+")",a))},
kt:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
n0:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ks:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ku:function(a,b,c){var s=H.ng(a,b,c)
return s},
ng:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ks(b),'g'),H.n0(c))},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dc:function dc(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a){this.a=a},
hd:function hd(a){this.a=a},
eH:function eH(a){this.a=a
this.b=null},
b9:function b9(){},
hB:function hB(){},
hx:function hx(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a){this.a=a},
q:function q(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fI:function fI(a){this.a=a},
fM:function fM(a,b){this.a=a
this.b=b
this.c=null},
an:function an(a){this.a=a},
d0:function d0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
co:function(a){return a},
aj:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.by(b,a))},
m4:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.n_(a,b,c))
return b},
bW:function bW(){},
bi:function bi(){},
aW:function aW(){},
bV:function bV(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
bX:function bX(){},
db:function db(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
lu:function(a,b){var s=b.c
return s==null?b.c=H.jc(a,b.z,!0):s},
jP:function(a,b){var s=b.c
return s==null?b.c=H.cl(a,"jz",[b.z]):s},
jQ:function(a){var s=a.y
if(s===6||s===7||s===8)return H.jQ(a.z)
return s===11||s===12},
lt:function(a){return a.cy},
n2:function(a){return H.jd(v.typeUniverse,a,!1)},
az:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.az(a,s,a0,a1)
if(r===s)return b
return H.kb(a,r,!0)
case 7:s=b.z
r=H.az(a,s,a0,a1)
if(r===s)return b
return H.jc(a,r,!0)
case 8:s=b.z
r=H.az(a,s,a0,a1)
if(r===s)return b
return H.ka(a,r,!0)
case 9:q=b.Q
p=H.ct(a,q,a0,a1)
if(p===q)return b
return H.cl(a,b.z,p)
case 10:o=b.z
n=H.az(a,o,a0,a1)
m=b.Q
l=H.ct(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ja(a,n,l)
case 11:k=b.z
j=H.az(a,k,a0,a1)
i=b.Q
h=H.mO(a,i,a0,a1)
if(j===k&&h===i)return b
return H.k9(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ct(a,g,a0,a1)
o=b.z
n=H.az(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jb(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.f8("Attempted to substitute unexpected RTI kind "+c))}},
ct:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.az(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
mP:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.az(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
mO:function(a,b,c,d){var s,r=b.a,q=H.ct(a,r,c,d),p=b.b,o=H.ct(a,p,c,d),n=b.c,m=H.mP(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.ek()
s.a=q
s.b=o
s.c=m
return s},
om:function(a,b){a[v.arrayRti]=b
return a},
mW:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kn(s)
return a.$S()}return null},
ko:function(a,b){var s
if(H.jQ(b))if(a instanceof H.b9){s=H.mW(a)
if(s!=null)return s}return H.cv(a)},
cv:function(a){var s
if(a instanceof P.E){s=a.$ti
return s!=null?s:H.je(a)}if(Array.isArray(a))return H.m0(a)
return H.je(J.cu(a))},
m0:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
ma:function(a){var s=a.$ti
return s!=null?s:H.je(a)},
je:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mb(a,s)},
mb:function(a,b){var s=a instanceof H.b9?a.__proto__.__proto__.constructor:b,r=H.lZ(v.typeUniverse,s.name)
b.$ccache=r
return r},
kn:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jd(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
m9:function(a){var s,r,q=this,p=t.K
if(q===p)return H.cp(q,a,H.mf)
if(!H.ak(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.cp(q,a,H.mi)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.cq
else if(s===t.d||s===t.H)r=H.me
else if(s===t.N)r=H.mg
else r=s===t.v?H.kg:null
if(r!=null)return H.cp(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.nb)){q.r="$i"+p
return H.cp(q,a,H.mh)}}else if(p===7)return H.cp(q,a,H.m7)
return H.cp(q,a,H.m5)},
cp:function(a,b,c){a.b=c
return a.b(b)},
m8:function(a){var s,r,q=this
if(!H.ak(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.m3
else if(q===t.K)r=H.m1
else r=H.m6
q.a=r
return q.a(a)},
mH:function(a){var s,r=a.y
if(!H.ak(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
m5:function(a){var s=this
if(a==null)return H.mH(s)
return H.J(v.typeUniverse,H.ko(a,s),null,s,null)},
m7:function(a){if(a==null)return!0
return this.z.b(a)},
mh:function(a){var s=this,r=s.r
if(a instanceof P.E)return!!a[r]
return!!J.cu(a)[r]},
oj:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ke(a,s)},
m6:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ke(a,s)},
ke:function(a,b){throw H.c(H.lP(H.k3(a,H.ko(a,b),H.W(b,null))))},
k3:function(a,b,c){var s=P.fw(a),r=H.W(b==null?H.cv(a):b,null)
return s+": type '"+H.e(r)+"' is not a subtype of type '"+H.e(c)+"'"},
lP:function(a){return new H.cj("TypeError: "+a)},
P:function(a,b){return new H.cj("TypeError: "+H.k3(a,null,b))},
mf:function(a){return a!=null},
m1:function(a){return a},
mi:function(a){return!0},
m3:function(a){return a},
kg:function(a){return!0===a||!1===a},
o5:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.P(a,"bool"))},
o7:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.P(a,"bool"))},
o6:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.P(a,"bool?"))},
o8:function(a){if(typeof a=="number")return a
throw H.c(H.P(a,"double"))},
oa:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"double"))},
o9:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"double?"))},
cq:function(a){return typeof a=="number"&&Math.floor(a)===a},
ob:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.P(a,"int"))},
od:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.P(a,"int"))},
oc:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.P(a,"int?"))},
me:function(a){return typeof a=="number"},
oe:function(a){if(typeof a=="number")return a
throw H.c(H.P(a,"num"))},
og:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"num"))},
of:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.P(a,"num?"))},
mg:function(a){return typeof a=="string"},
oh:function(a){if(typeof a=="string")return a
throw H.c(H.P(a,"String"))},
m2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.P(a,"String"))},
oi:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.P(a,"String?"))},
mK:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.b.u(r,H.W(a[q],b))
return s},
kf:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=[]
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.X,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.d(a6,i)
l=C.b.u(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.b.u(" extends ",H.W(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.W(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.b.u(a3,H.W(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.b.u(a3,H.W(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.jr(H.W(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.e(a1)},
W:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.W(a.z,b)
return s}if(l===7){r=a.z
s=H.W(r,b)
q=r.y
return J.jr(q===11||q===12?C.b.u("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.e(H.W(a.z,b))+">"
if(l===9){p=H.mQ(a.z)
o=a.Q
return o.length!==0?p+("<"+H.mK(o,b)+">"):p}if(l===11)return H.kf(a,b,null)
if(l===12)return H.kf(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
mQ:function(a){var s,r=H.kv(a)
if(r!=null)return r
s="minified:"+a
return s},
kc:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
lZ:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jd(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cm(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cl(a,b,q)
n[b]=o
return o}else return m},
lX:function(a,b){return H.kd(a.tR,b)},
lW:function(a,b){return H.kd(a.eT,b)},
jd:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.k8(H.k6(a,null,b,c))
r.set(b,s)
return s},
eT:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.k8(H.k6(a,b,c,!0))
q.set(c,r)
return r},
lY:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ja(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
ay:function(a,b){b.a=H.m8
b.b=H.m9
return b},
cm:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.a1(null,null)
s.y=b
s.cy=c
r=H.ay(a,s)
a.eC.set(c,r)
return r},
kb:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.lU(a,b,r,c)
a.eC.set(r,s)
return s},
lU:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ak(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.a1(null,null)
q.y=6
q.z=b
q.cy=c
return H.ay(a,q)},
jc:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.lT(a,b,r,c)
a.eC.set(r,s)
return s},
lT:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ak(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.iJ(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.iJ(q.z))return q
else return H.lu(a,b)}}p=new H.a1(null,null)
p.y=7
p.z=b
p.cy=c
return H.ay(a,p)},
ka:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.lR(a,b,r,c)
a.eC.set(r,s)
return s},
lR:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ak(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cl(a,"jz",[b])
else if(b===t.P||b===t.T)return t.k}q=new H.a1(null,null)
q.y=8
q.z=b
q.cy=c
return H.ay(a,q)},
lV:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.a1(null,null)
s.y=13
s.z=b
s.cy=q
r=H.ay(a,s)
a.eC.set(q,r)
return r},
eS:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
lQ:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cl:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.eS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.a1(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.ay(a,r)
a.eC.set(p,q)
return q},
ja:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.eS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a1(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.ay(a,o)
a.eC.set(q,n)
return n},
k9:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.eS(m)
if(j>0){s=l>0?",":""
r=H.eS(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.lQ(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.a1(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.ay(a,o)
a.eC.set(q,r)
return r},
jb:function(a,b,c,d){var s,r=b.cy+("<"+H.eS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.lS(a,b,c,r,d)
a.eC.set(r,s)
return s},
lS:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.az(a,b,r,0)
m=H.ct(a,c,r,0)
return H.jb(a,n,m,c!==m)}}l=new H.a1(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.ay(a,l)},
k6:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
k8:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.lJ(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.k7(a,r,g,f,!1)
else if(q===46)r=H.k7(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.ax(a.u,a.e,f.pop()))
break
case 94:f.push(H.lV(a.u,f.pop()))
break
case 35:f.push(H.cm(a.u,5,"#"))
break
case 64:f.push(H.cm(a.u,2,"@"))
break
case 126:f.push(H.cm(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.j9(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.cl(p,n,o))
else{m=H.ax(p,a.e,n)
switch(m.y){case 11:f.push(H.jb(p,m,o,a.n))
break
default:f.push(H.ja(p,m,o))
break}}break
case 38:H.lK(a,f)
break
case 42:l=a.u
f.push(H.kb(l,H.ax(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.jc(l,H.ax(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.ka(l,H.ax(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.ek()
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
H.j9(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.k9(p,H.ax(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.j9(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.lM(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.ax(a.u,a.e,h)},
lJ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
k7:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kc(s,o.z)[p]
if(n==null)H.m('No "'+p+'" in "'+H.lt(o)+'"')
d.push(H.eT(s,o,n))}else d.push(p)
return m},
lK:function(a,b){var s=b.pop()
if(0===s){b.push(H.cm(a.u,1,"0&"))
return}if(1===s){b.push(H.cm(a.u,4,"1&"))
return}throw H.c(P.f8("Unexpected extended operation "+H.e(s)))},
ax:function(a,b,c){if(typeof c=="string")return H.cl(a,c,a.sEA)
else if(typeof c=="number")return H.lL(a,b,c)
else return c},
j9:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.ax(a,b,c[s])},
lM:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.ax(a,b,c[s])},
lL:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.f8("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.f8("Bad index "+c+" for "+b.i(0)))},
J:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ak(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ak(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.J(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.J(a,b.z,c,d,e)
if(p===6){s=d.z
return H.J(a,b,c,s,e)}if(r===8){if(!H.J(a,b.z,c,d,e))return!1
return H.J(a,H.jP(a,b),c,d,e)}if(r===7){s=H.J(a,b.z,c,d,e)
return s}if(p===8){if(H.J(a,b,c,d.z,e))return!0
return H.J(a,b,c,H.jP(a,d),e)}if(p===7){s=H.J(a,b,c,d.z,e)
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
if(!H.J(a,k,c,j,e)||!H.J(a,j,e,k,c))return!1}return H.kh(a,b.z,c,d.z,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return H.kh(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.md(a,b,c,d,e)}return!1},
kh:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.J(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.J(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.J(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.J(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.J(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
md:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.J(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kc(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.J(a,H.eT(a,b,l[p]),c,r[p],e))return!1
return!0},
iJ:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ak(a))if(r!==7)if(!(r===6&&H.iJ(a.z)))s=r===8&&H.iJ(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nb:function(a){var s
if(!H.ak(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
ak:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kd:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
ek:function ek(){this.c=this.b=this.a=null},
ef:function ef(){},
cj:function cj(a){this.a=a},
kv:function(a){return v.mangledGlobalNames[a]},
ne:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f3:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.jk==null){H.n7()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.jY("Return interceptor for "+H.e(s(a,o))))}q=a.constructor
p=q==null?null:q[J.jC()]
if(p!=null)return p
p=H.nc(a)
if(p!=null)return p
if(typeof a=="function")return C.H
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){Object.defineProperty(q,J.jC(),{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
jC:function(){var s=$.k4
return s==null?$.k4=v.getIsolateTag("_$dart_js"):s},
l6:function(a){if(!H.cq(a))throw H.c(P.js(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ar(a,0,4294967295,"length",null))
return J.l7(new Array(a))},
jB:function(a){if(!H.cq(a)||a<0)throw H.c(P.iP("Length must be a non-negative integer: "+H.e(a)))
return new Array(a)},
l7:function(a){return J.iX(a)},
iX:function(a){a.fixed$length=Array
return a},
l8:function(a,b){return J.cz(a,b)},
cu:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bN.prototype
return J.bM.prototype}if(typeof a=="string")return J.am.prototype
if(a==null)return J.bO.prototype
if(typeof a=="boolean")return J.fG.prototype
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.E)return a
return J.f3(a)},
n3:function(a){if(typeof a=="number")return J.aR.prototype
if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.E)return a
return J.f3(a)},
b3:function(a){if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.E)return a
return J.f3(a)},
ji:function(a){if(a==null)return a
if(a.constructor==Array)return J.a_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.E)return a
return J.f3(a)},
n4:function(a){if(typeof a=="number")return J.aR.prototype
if(typeof a=="string")return J.am.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bo.prototype
return a},
bA:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a5.prototype
return a}if(a instanceof P.E)return a
return J.f3(a)},
jr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.n3(a).u(a,b)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.cu(a).m(a,b)},
cy:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.na(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b3(a).h(a,b)},
kN:function(a,b,c){return J.bA(a).eg(a,b,c)},
kO:function(a,b,c,d){return J.bA(a).ew(a,b,c,d)},
cz:function(a,b){return J.n4(a).al(a,b)},
iN:function(a,b){return J.b3(a).H(a,b)},
iO:function(a,b){return J.ji(a).w(a,b)},
kP:function(a,b){return J.ji(a).B(a,b)},
kQ:function(a){return J.bA(a).gc7(a)},
kR:function(a){return J.bA(a).gc8(a)},
X:function(a){return J.cu(a).gL(a)},
b6:function(a){return J.ji(a).gI(a)},
b7:function(a){return J.b3(a).gj(a)},
kS:function(a,b){return J.bA(a).fg(a,b)},
S:function(a){return J.cu(a).i(a)},
a:function a(){},
fG:function fG(){},
bO:function bO(){},
aS:function aS(){},
di:function di(){},
bo:function bo(){},
a5:function a5(){},
a_:function a_(){},
cX:function cX(){},
T:function T(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aR:function aR(){},
bN:function bN(){},
bM:function bM(){},
am:function am(){}},P={
lC:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.mS()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bx(new P.ik(q),1)).observe(s,{childList:true})
return new P.ij(q,s,r)}else if(self.setImmediate!=null)return P.mT()
return P.mU()},
lD:function(a){self.scheduleImmediate(H.bx(new P.il(a),0))},
lE:function(a){self.setImmediate(H.bx(new P.im(a),0))},
lF:function(a){P.j3(C.h,a)},
j3:function(a,b){var s=C.c.P(a.a,1000)
return P.lN(s<0?0:s,b)},
jW:function(a,b){var s=C.c.P(a.a,1000)
return P.lO(s<0?0:s,b)},
lN:function(a,b){var s=new P.ci()
s.d6(a,b)
return s},
lO:function(a,b){var s=new P.ci()
s.d7(a,b)
return s},
o3:function(a){return new P.bs(a,1)},
lG:function(){return C.N},
lH:function(a){return new P.bs(a,3)},
mk:function(a){return new P.cf(a)},
mG:function(){var s,r
for(s=$.bu;s!=null;s=$.bu){$.cs=null
r=s.b
$.bu=r
if(r==null)$.cr=null
s.a.$0()}},
mN:function(){$.jf=!0
try{P.mG()}finally{$.cs=null
$.jf=!1
if($.bu!=null)$.jq().$1(P.kl())}},
mL:function(a){var s=new P.e4(a),r=$.cr
if(r==null){$.bu=$.cr=s
if(!$.jf)$.jq().$1(P.kl())}else $.cr=r.b=s},
mM:function(a){var s,r,q,p=$.bu
if(p==null){P.mL(a)
$.cs=$.cr
return}s=new P.e4(a)
r=$.cs
if(r==null){s.b=p
$.bu=$.cs=s}else{q=r.b
s.b=q
$.cs=r.b=s
if(q==null)$.cr=s}},
jU:function(a,b){var s=$.a8
if(s===C.e)return P.j3(a,b)
return P.j3(a,s.ez(b))},
jV:function(a,b){var s=$.a8
if(s===C.e)return P.jW(a,b)
return P.jW(a,s.c6(b,t.Y))},
ki:function(a,b,c,d,e){P.mM(new P.iC(d,e))},
mI:function(a,b,c,d){var s,r=$.a8
if(r===c)return d.$0()
$.a8=c
s=r
try{r=d.$0()
return r}finally{$.a8=s}},
mJ:function(a,b,c,d,e){var s,r=$.a8
if(r===c)return d.$1(e)
$.a8=c
s=r
try{r=d.$1(e)
return r}finally{$.a8=s}},
ik:function ik(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
ci:function ci(){this.c=0},
iv:function iv(a,b){this.a=a
this.b=b},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b){this.a=a
this.b=b},
bt:function bt(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cf:function cf(a){this.a=a},
e4:function e4(a){this.a=a
this.b=null},
dB:function dB(){},
dC:function dC(){},
c0:function c0(){},
ix:function ix(){},
iC:function iC(a,b){this.a=a
this.b=b},
ir:function ir(){},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
lb:function(a,b,c){return H.n1(a,new H.q(b.a8("@<0>").bL(c).a8("q<1,2>")))},
la:function(a,b){return new H.q(a.a8("@<0>").bL(b).a8("q<1,2>"))},
jD:function(a){return new P.c4(a.a8("c4<0>"))},
j8:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lI:function(a,b){var s=new P.c5(a,b)
s.c=a.e
return s},
l5:function(a,b,c){var s,r
if(P.jg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.R.push(a)
try{P.mj(a,s)}finally{if(0>=$.R.length)return H.d($.R,-1)
$.R.pop()}r=P.jS(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
iW:function(a,b,c){var s,r
if(P.jg(a))return b+"..."+c
s=new P.b_(b)
$.R.push(a)
try{r=s
r.a=P.jS(r.a,a,", ")}finally{if(0>=$.R.length)return H.d($.R,-1)
$.R.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jg:function(a){var s,r
for(s=$.R.length,r=0;r<s;++r)if(a===$.R[r])return!0
return!1},
mj:function(a,b){var s,r,q,p,o,n,m,l=a.gI(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.e(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.q()){if(j<=4){b.push(H.e(p))
return}r=H.e(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.q();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.e(p)
r=H.e(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jE:function(a){var s,r={}
if(P.jg(a))return"{...}"
s=new P.b_("")
try{$.R.push(a)
s.a+="{"
r.a=!0
J.kP(a,new P.fQ(r,s))
s.a+="}"}finally{if(0>=$.R.length)return H.d($.R,-1)
$.R.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
c4:function c4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iq:function iq(a){this.a=a
this.c=this.b=null},
c5:function c5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function bL(){},
bQ:function bQ(){},
w:function w(){},
d2:function d2(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
ae:function ae(){},
cc:function cc(){},
c6:function c6(){},
cH:function cH(){},
cK:function cK(){},
ft:function ft(){},
i0:function i0(){},
i1:function i1(){},
iw:function iw(a){this.b=0
this.c=a},
l3:function(a){if(a instanceof H.b9)return a.i(0)
return"Instance of '"+H.e(H.dm(a))+"'"},
j_:function(a,b,c){var s,r=c?J.jB(a):J.l6(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
fN:function(a,b){var s,r=[]
for(s=J.b6(a);s.q();)r.push(s.gD(s))
if(b)return r
return J.iX(r)},
j2:function(a){var s,r=a,q=r.length,p=P.j1(0,null,q)
if(typeof p!=="number")return p.at()
s=p<q
return H.lo(s?r.slice(0,p):r)},
lq:function(a){return new H.fH(a,H.l9(a,!1,!0,!1,!1,!1))},
jS:function(a,b,c){var s=J.b6(b)
if(!s.q())return a
if(c.length===0){do a+=H.e(s.gD(s))
while(s.q())}else{a+=H.e(s.gD(s))
for(;s.q();)a=a+c+H.e(s.gD(s))}return a},
m_:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.n){s=$.kM().b
s=s.test(b)}else s=!1
if(s)return b
r=C.D.eF(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ln(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
l1:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
l2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cM:function(a){if(a>=10)return""+a
return"0"+a},
iU:function(a){return new P.aK(1000*a)},
fw:function(a){if(typeof a=="number"||H.kg(a)||null==a)return J.S(a)
if(typeof a=="string")return JSON.stringify(a)
return P.l3(a)},
f8:function(a){return new P.cC(a)},
iP:function(a){return new P.Y(!1,null,null,a)},
js:function(a,b,c){return new P.Y(!0,a,b,c)},
kT:function(a,b){if(a==null)throw H.c(new P.Y(!1,null,b,"Must not be null"))
return a},
dn:function(a,b){return new P.bm(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.bm(b,c,!0,a,d,"Invalid value")},
j1:function(a,b,c){var s
if(typeof c!=="number")return H.G(c)
s=a>c
if(s)throw H.c(P.ar(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.G(c)
s=b>c}else s=!0
if(s)throw H.c(P.ar(b,a,c,"end",null))
return b}return c},
jN:function(a,b){if(a<0)throw H.c(P.ar(a,0,null,b,null))
return a},
C:function(a,b,c,d,e){var s=e==null?J.b7(b):e
return new P.cV(s,!0,a,c,"Index out of range")},
r:function(a){return new P.e_(a)},
jY:function(a){return new P.dX(a)},
bD:function(a){return new P.cI(a)},
n:function(a){return new P.eh(a)},
jo:function(a){H.ne(a)},
b2:function b2(){},
aJ:function aJ(a,b){this.a=a
this.b=b},
Q:function Q(){},
aK:function aK(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
B:function B(){},
cC:function cC(a){this.a=a},
dd:function dd(){},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cV:function cV(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e_:function e_(a){this.a=a},
dX:function dX(a){this.a=a},
dA:function dA(a){this.a=a},
cI:function cI(a){this.a=a},
dg:function dg(){},
c_:function c_(){},
cL:function cL(a){this.a=a},
eh:function eh(a){this.a=a},
fD:function fD(a,b){this.a=a
this.b=b},
o:function o(){},
f:function f(){},
cW:function cW(){},
ad:function ad(){},
d1:function d1(){},
a0:function a0(){},
K:function K(){},
E:function E(){},
I:function I(){},
b_:function b_(a){this.a=a},
mZ:function(a){var s
if(t.I.b(a)){s=J.kR(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.ck(a.data,a.height,a.width)},
mY:function(a){if(a instanceof P.ck)return{data:a.a,height:a.b,width:a.c}
return a},
aB:function(a){var s,r,q,p,o
if(a==null)return null
s=P.la(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
mX:function(a){var s={}
a.B(0,new P.iD(s))
return s},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(a){this.a=a},
cS:function cS(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
eA:function eA(){},
a6:function a6(){},
bf:function bf(){},
d_:function d_(){},
bj:function bj(){},
de:function de(){},
hg:function hg(){},
dD:function dD(){},
j:function j(){},
bn:function bn(){},
dK:function dK(){},
eo:function eo(){},
ep:function ep(){},
ew:function ew(){},
ex:function ex(){},
eJ:function eJ(){},
eK:function eK(){},
eQ:function eQ(){},
eR:function eR(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(a){this.a=a},
cD:function cD(){},
al:function al(){},
df:function df(){},
e5:function e5(){},
dq:function dq(){},
dy:function dy(){},
eF:function eF(){},
eG:function eG(){}},W={
iS:function(){var s=document.createElement("canvas")
return s},
fs:function(a){return"wheel"},
ip:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k5:function(a,b,c,d){var s=W.ip(W.ip(W.ip(W.ip(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
L:function(a,b,c,d){var s=W.kj(new W.io(c),t.D)
if(s!=null&&!0)J.kO(a,b,s,!1)
return new W.eg(a,b,s,!1)},
kj:function(a,b){var s=$.a8
if(s===C.e)return a
return s.c6(a,b)},
k:function k(){},
f6:function f6(){},
cA:function cA(){},
cB:function cB(){},
cE:function cE(){},
aH:function aH(){},
a3:function a3(){},
fi:function fi(){},
A:function A(){},
bE:function bE(){},
fj:function fj(){},
Z:function Z(){},
aa:function aa(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fo:function fo(){},
bF:function bF(){},
bG:function bG(){},
cN:function cN(){},
fp:function fp(){},
e7:function e7(a,b){this.a=a
this.b=b},
H:function H(){},
h:function h(){},
b:function b(){},
aL:function aL(){},
cQ:function cQ(){},
cR:function cR(){},
cT:function cT(){},
aM:function aM(){},
fF:function fF(){},
aN:function aN(){},
aO:function aO(){},
be:function be(){},
aT:function aT(){},
fO:function fO(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(a){this.a=a},
h8:function h8(){},
h9:function h9(a){this.a=a},
aV:function aV(){},
d5:function d5(){},
U:function U(){},
e6:function e6(a){this.a=a},
t:function t(){},
bY:function bY(){},
aX:function aX(){},
dj:function dj(){},
hl:function hl(){},
hm:function hm(a){this.a=a},
dt:function dt(){},
as:function as(){},
dw:function dw(){},
aY:function aY(){},
dx:function dx(){},
aZ:function aZ(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
at:function at(){},
au:function au(){},
a7:function a7(){},
dE:function dE(){},
dF:function dF(){},
hK:function hK(){},
b0:function b0(){},
b1:function b1(){},
dJ:function dJ(){},
hN:function hN(){},
ai:function ai(){},
i_:function i_(){},
e1:function e1(){},
aw:function aw(){},
br:function br(){},
e8:function e8(){},
c3:function c3(){},
el:function el(){},
c7:function c7(){},
eE:function eE(){},
eL:function eL(){},
iV:function iV(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
io:function io(a){this.a=a},
j7:function j7(a){this.$ti=a},
z:function z(){},
bJ:function bJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ei:function ei(){},
ej:function ej(){},
em:function em(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ey:function ey(){},
ez:function ez(){},
eB:function eB(){},
cd:function cd(){},
ce:function ce(){},
eC:function eC(){},
eD:function eD(){},
eI:function eI(){},
eM:function eM(){},
eN:function eN(){},
cg:function cg(){},
ch:function ch(){},
eO:function eO(){},
eP:function eP(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){}},K={
N:function(a){var s=new K.hn()
s.d0(a)
return s},
f7:function f7(){},
cU:function cU(){},
ap:function ap(){this.a=null},
hn:function hn(){this.a=null}},L={dz:function dz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},dI:function dI(a){this.b=a
this.c=null},hL:function hL(){var _=this
_.d=_.c=_.b=_.a=null},hO:function hO(a){this.b=a
this.a=this.c=null}},O={
iT:function(){var s=new O.ba()
s.bF()
return s},
ba:function ba(){this.c=this.b=this.a=null},
bT:function bT(){this.b=this.a=null},
d3:function d3(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
fS:function fS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bS:function bS(){},
fT:function fT(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
af:function af(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fV:function fV(){var _=this
_.e=_.d=_.c=_.b=null},
fW:function fW(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fX:function fX(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hC:function hC(){}},E={
k1:function(){if(J.iN(window.navigator.vendor,"Google"))return C.u
if(J.iN(window.navigator.userAgent,"Firefox"))return C.j
var s=window.navigator.appVersion
if(J.b3(s).H(s,"Trident")||C.b.H(s,"Edge"))return C.k
if(J.iN(window.navigator.appName,"Microsoft"))return C.k
return C.v},
k2:function(){var s=window.navigator.appVersion
if(J.b3(s).H(s,"Win"))return C.J
if(C.b.H(s,"Mac"))return C.p
if(C.b.H(s,"Linux"))return C.K
return C.L},
ls:function(a,b){var s=new E.hh(a)
s.d_(a,b)
return s},
lz:function(a,b,c,d,e){var s,r
if(t.B.b(a))return E.jT(a,!0,!0,!0,!1)
s=W.iS()
r=s.style
r.width="100%"
r.height="100%"
J.kQ(a).n(0,s)
return E.jT(s,!0,!0,!0,!1)},
jT:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.dG(),n=t.z,m=C.o.bx(a,"webgl2",P.lb(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.m(P.n("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.ls(m,a)
n=new T.hH(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.e0(a)
s=new X.fJ()
s.d=P.jD(t.e)
n.b=s
s=new X.ha(n)
s.f=0
s.r=V.dk()
s.x=V.dk()
s.ch=s.Q=1
n.c=s
s=new X.fP(n)
s.r=0
s.x=V.dk()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.hM(n)
s.f=V.dk()
s.r=V.dk()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=[]
s=$.fu
n.Q=(s==null?$.fu=new E.ee(E.k1(),E.k2()):s).a===C.j?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.L(q,"contextmenu",n.gdF(),!1))
n.z.push(W.L(a,"focus",n.gdL(),!1))
n.z.push(W.L(a,"blur",n.gdz(),!1))
n.z.push(W.L(q,"keyup",n.gdP(),!1))
n.z.push(W.L(q,"keydown",n.gdN(),!1))
n.z.push(W.L(a,"mousedown",n.gdT(),!1))
n.z.push(W.L(a,"mouseup",n.gdX(),!1))
n.z.push(W.L(a,p,n.gdV(),!1))
r=n.z
W.fs(a)
W.fs(a)
r.push(W.L(a,W.fs(a),n.gdZ(),!1))
n.z.push(W.L(q,p,n.gdH(),!1))
n.z.push(W.L(q,"mouseup",n.gdJ(),!1))
n.z.push(W.L(q,"pointerlockchange",n.ge0(),!1))
n.z.push(W.L(a,"touchstart",n.geb(),!1))
n.z.push(W.L(a,"touchend",n.ge7(),!1))
n.z.push(W.L(a,"touchmove",n.ge9(),!1))
o.ch=!0
o.cx=!1
o.cy=new P.aJ(Date.now(),!1)
o.db=0
o.bW()
return o},
ff:function ff(){},
bc:function bc(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(a){this.b=a},
bk:function bk(a){this.b=a},
ee:function ee(a,b){this.a=a
this.b=b},
hh:function hh(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
dG:function dG(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.f=_.e=_.d=_.c=_.b=null},
hJ:function hJ(a){this.a=a}},Z={
j6:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.co(c)),35044)
a.bindBuffer(b,null)
return new Z.e2(b,s)},
a2:function(a){return new Z.av(a)},
e2:function e2(a,b){this.a=a
this.b=b},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ii:function ii(a){this.a=a},
cF:function cF(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bK:function bK(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a){this.a=a}},D={
a4:function(){var s=new D.bd()
s.d=0
return s},
fh:function fh(){},
bd:function bd(){var _=this
_.d=_.c=_.b=_.a=null},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
ab:function ab(){this.b=null},
aP:function aP(){this.b=null},
aQ:function aQ(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
bb:function bb(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
bP:function bP(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null}},X={cG:function cG(a,b){this.a=a
this.b=b},cZ:function cZ(a,b){this.a=a
this.b=b},fJ:function fJ(){this.d=this.b=this.a=null},fP:function fP(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},ha:function ha(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l4:function(a){var s=new X.fE(),r=V.bw(1)
s.a=new V.aI(0,0,0,r)
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.jO
if(r==null){r=V.lr(0,0,1,1)
$.jO=r}s.r=r
return s},
iR:function iR(){},
fE:function fE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dh:function dh(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(){}},V={
jl:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
bw:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
jp:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.cQ(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){if(a==null)return C.b.X("null",c)
$.x().toString
return C.b.X(C.d.cK(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bz:function(a,b,c){var s,r,q,p,o,n,m=[]
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.l)(a),++q){p=V.u(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.d(m,o)
s=C.b.X(m[o],r)
n=m.length
if(o>=n)return H.d(m,o)
m[o]=s}return m},
jn:function(a){return C.d.fn(Math.pow(2,C.G.bn(Math.log(H.mV(a))/Math.log(2))))},
j0:function(){var s=$.jG
return s==null?$.jG=V.ao(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ao:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jF:function(a,b,c){var s=c.G(),r=b.aA(s).G(),q=s.aA(r),p=new V.v(a.a,a.b,a.c),o=r.au(0).aD(p),n=q.au(0).aD(p),m=s.au(0).aD(p)
return V.ao(r.a,q.a,s.a,o,r.b,q.b,s.b,n,r.c,q.c,s.c,m,0,0,0,1)},
dk:function(){var s=$.jJ
return s==null?$.jJ=new V.aq(0,0):s},
jK:function(){var s=$.ag
return s==null?$.ag=new V.V(0,0,0):s},
lr:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dp(a,b,c,d)},
c1:function(){var s=$.k_
return s==null?$.k_=new V.v(0,0,0):s},
lA:function(){var s=$.i2
return s==null?$.i2=new V.v(-1,0,0):s},
j5:function(){var s=$.i3
return s==null?$.i3=new V.v(0,1,0):s},
lB:function(){var s=$.i4
return s==null?$.i4=new V.v(0,0,1):s},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(){},
d4:function d4(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
dl:function dl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function(a){P.jV(C.E,new V.iM(a))},
lv:function(a){var s=new V.hs()
s.d2(a,!0)
return s},
iM:function iM(a){this.a=a},
hs:function hs(){this.b=this.a=null},
hu:function hu(a){this.a=a},
ht:function ht(a){this.a=a}},U={
jy:function(a){var s=new U.cJ()
s.a=a
return s},
cJ:function cJ(){this.b=this.a=null},
hb:function hb(){},
dr:function dr(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cO:function cO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
ld:function(a,b){var s=a.aE,r=new A.fR(b,s)
r.d1(b,s)
r.cZ(a,b)
return r},
le:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.ga1(a5)+a6.ga1(a6)+a7.ga1(a7)+a8.ga1(a8)+a9.ga1(a9)+b0.ga1(b0)+b1.ga1(b1)+b2.ga1(b2)+b3.ga1(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.l)(b4),++r)a+="_"+H.e(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.l)(b5),++r)a+="_"+H.e(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.l)(b6),++r)a+="_"+H.e(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.l)(b7),++r)a+="_"+H.e(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aF()
if(h){s=$.aE()
b=new Z.av(b.a|s.a)}if(g){s=$.aD()
b=new Z.av(b.a|s.a)}if(f){s=$.aG()
b=new Z.av(b.a|s.a)}if(e){s=$.aC()
b=new Z.av(b.a|s.a)}return new A.fU(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
iA:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iB:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.iA(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.f4(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
mp:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iA(b,r,"emission")
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
ml:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iB(b,r,"ambient")
b.a+="\n"},
mn:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iB(b,r,"diffuse")
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
mq:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iB(b,r,"invDiffuse")
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
mw:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iB(b,r,"specular")
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
ms:function(a,b){var s,r,q
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
mu:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iA(b,r,"reflect")
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
mv:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iA(b,r,"refract")
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
mm:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.e(s)
q=A.f4(r)
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
if(typeof s!=="number")return s.Y()
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
s=c.a+="   return "+C.a.l(o," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.l(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.l(o," + ")+");\n"
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
mo:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+H.e(s)
q=A.f4(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.Y()
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
c.a+="      highLight = intensity*("+C.a.l(l," + ")+");\n"}else c.a+="   highLight = "+C.a.l(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.l(m," + ")+");\n"
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
mt:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.e(s)
q=A.f4(r)
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
if(typeof s!=="number")return s.Y()
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
p=c.a+="   return "+C.a.l(j," * ")+";\n"
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
p=c.a+="      highLight = intensity*("+C.a.l(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.l(j," + ")+");\n"
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
mx:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.e(s)
q=A.f4(r)
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
if(typeof s!=="number")return s.Y()
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
if(m){s=$.fu
if(s==null)s=$.fu=new E.ee(E.k1(),E.k2())
p=c.a
if(s.b===C.p){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s=c.a+="   return "+C.a.l(h," * ")+";\n"
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
s=c.a+="      highLight = intensity*("+C.a.l(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.l(h," + ")+");\n"
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
mr:function(a,b){var s,r
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
s=b.a+="   return "+C.a.l(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
my:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.b_("")
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
A.mp(a,h)
A.ml(a,h)
A.mn(a,h)
A.mq(a,h)
A.mw(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.mu(a,h)
A.mv(a,h)}A.ms(a,h)
p=h.a+="// === Alpha ===\n"
p=h.a=p+"\n"
o=a.y
n=o.a
if(n){p+="uniform float alpha;\n"
h.a=p}o=o.b
if(o)p=h.a=p+"uniform sampler2D alphaTxt;\n"
p+="float alphaValue()\n"
h.a=p
p=h.a=p+"{\n"
if(!(n||o||!1))p=h.a=p+"   return 1.0;\n"
else if(o||!1){if(n){if(o){p+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
h.a=p}}else if(o){p+="   float a = texture2D(alphaTxt, txt2D).a;\n"
h.a=p}p+="   if (a <= 0.000001) discard;\n"
h.a=p
p+="   return a;\n"
h.a=p}else if(n){p+="   return alpha;\n"
h.a=p}p+="}\n"
h.a=p
h.a=p+"\n"
p=a.k1
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mm(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mo(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mt(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.l)(o),++m)A.mx(a,o[m],h)
A.mr(a,h)}o=h.a+="// === Main ===\n"
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
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ax(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ax(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ax(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.l)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.d(p,0)
h.a+=k+(p[0].toUpperCase()+C.b.ax(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.a.l(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
mz:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.am+"];\n"
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
mB:function(a,b){var s
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
mA:function(a,b){var s
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
mD:function(a,b){var s,r
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
mE:function(a,b){var s,r
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
mC:function(a,b){var s
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
mF:function(a,b){var s
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
f4:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.ax(a,1)},
j4:function(a,b,c,d,e){var s=new A.hT(a,c,e)
s.f=d
P.j_(d,0,!1)
return s},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
fa:function fa(a){this.a=a},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a,b){var _=this
_.fB=_.cb=_.aR=_.aE=_.am=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.fJ=_.fI=_.fH=_.bm=_.bl=_.bk=_.bj=_.bi=_.bh=_.bg=_.bf=_.fG=_.co=_.cn=_.fF=_.cm=_.cl=_.ck=_.fE=_.cj=_.ci=_.cg=_.fD=_.cf=_.ce=_.fC=_.cd=_.cc=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fe:function fe(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
hw:function hw(a,b){this.a=a
this.b=b},
fU:function fU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.am=b5
_.aE=b6
_.aR=b7},
dP:function dP(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dQ:function dQ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dT:function dT(a,b,c,d,e,f,g,h,i,j){var _=this
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
dW:function dW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
du:function du(){},
hS:function hS(){},
hY:function hY(a){this.a=a},
dM:function dM(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
dL:function dL(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
dN:function dN(a,b,c){this.a=a
this.c=b
this.d=c},
dO:function dO(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
dR:function dR(a,b,c){this.a=a
this.c=b
this.d=c},
dS:function dS(a,b,c){this.a=a
this.c=b
this.d=c},
dU:function dU(a,b,c){this.a=a
this.c=b
this.d=c},
dV:function dV(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iz:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cn:function(a,b,a0,a1,a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h={},g=a3+a4,f=g+a5,e=a4+a5,d=a5+a3,c=new V.v(f,e+a3,d+a4)
h.a=c
s=a3-a4
r=a4-a5
q=a5-a3
p=h.b=new V.v(s+a5,r+a3,q+a4)
o=new V.v(s-a5,r-a3,q-a4)
h.c=o
n=h.d=new V.v(g-a5,e-a3,d-a4)
if(f>0){h.d=p
h.b=n
f=p
g=n}else{f=n
g=p}for(d=f,f=g,g=c,e=o,m=0;m<a6;++m,l=d,d=g,g=f,f=e,e=l){h.a=f
h.b=e
h.c=d
h.d=g}k=F.iz(g)
j=F.iz(f)
i=F.nh(a1,a2,new F.iy(h,F.iz(e),F.iz(d),j,k,a0),b)
if(i!=null)a.br(i)},
nh:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)return null
if(b<1)return null
s=F.jR()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(p<0)n=0
else n=p>1?1:p
m=o.c1(new V.aI(n,0,0,1),new V.aq(p,1))
c.$3(m,p,0)
r.push(m.be(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.c1(new V.aI(h,g,f,1),new V.aq(p,k))
c.$3(m,p,l)
r.push(m.be(d))}}s.d.ex(a+1,b+1,r)
return s},
cP:function(a,b,c){var s=new F.fz(),r=a.a
if(r==null)H.m(P.n("May not create a face with a first vertex which is not attached to a shape."))
if(r!=b.a||r!=c.a)H.m(P.n("May not create a face with vertices attached to different shapes."))
s.em(a)
s.en(b)
s.eo(c)
s.a.a.d.b.push(s)
s.a.a.O()
return s},
jR:function(){var s=new F.ho(),r=new F.i6(s)
r.b=!1
r.c=[]
s.a=r
r=new F.hr(s)
r.b=[]
s.b=r
r=new F.hq(s)
r.b=[]
s.c=r
r=new F.hp(s)
r.b=[]
s.d=r
return s},
k0:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.i5(),p=new F.ie()
p.b=[]
q.b=p
p=new F.ia()
p.b=[]
p.c=[]
q.c=p
p=new F.i7()
p.b=[]
p.c=[]
p.d=[]
q.d=p
h=$.kJ()
q.e=0
p=$.aF()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aE().a)!==0?e:r
q.x=(s&$.aD().a)!==0?b:r
q.y=(s&$.aG().a)!==0?f:r
q.z=(s&$.b5().a)!==0?g:r
q.Q=(s&$.kK().a)!==0?c:r
q.ch=(s&$.bB().a)!==0?i:0
q.cx=(s&$.aC().a)!==0?a:r
return q},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fz:function fz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(){},
hv:function hv(){},
fK:function fK(){this.b=this.a=null},
fL:function fL(){},
hR:function hR(){},
he:function he(){this.a=null},
ho:function ho(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){this.a=a
this.b=null},
hq:function hq(a){this.a=a
this.b=null},
hr:function hr(a){this.a=a
this.b=null},
i5:function i5(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(a){this.a=a},
ig:function ig(a){this.a=a},
i6:function i6(a){this.a=a
this.c=this.b=null},
i7:function i7(){this.d=this.c=this.b=null},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(){this.c=this.b=null},
ic:function ic(){},
ib:function ib(){},
id:function id(){},
hc:function hc(){},
ie:function ie(){this.b=null}},T={hD:function hD(){},hE:function hE(){},hF:function hF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},hG:function hG(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hH:function hH(a){var _=this
_.a=a
_.e=_.d=_.b=null},hI:function hI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
kp:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.lv("Test 039"),c=W.iS()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c)
d.c2(["Test of an animated texture on a square."])
d.c2(["\xab[Back to Tests|../]"])
s=document.getElementById(f)
if(s==null)H.m(P.n("Failed to find an element with the identifier, testCanvas."))
r=E.lz(s,!0,!0,!0,!1)
q=new E.bc()
q.a=""
q.b=!0
d=O.iT()
q.y=d
d.aV(q.geY(),q.gf0())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
q.sbz(0,e)
q.saG(e)
p=F.jR()
F.cn(p,e,e,1,1,1,0,0,1)
F.cn(p,e,e,1,1,0,1,0,3)
F.cn(p,e,e,1,1,0,0,1,2)
F.cn(p,e,e,1,1,-1,0,0,0)
F.cn(p,e,e,1,1,0,-1,0,0)
F.cn(p,e,e,1,1,0,0,-1,3)
p.ak()
p.eX(new F.ib(),new F.hc())
q.sbz(0,p)
d=new U.dr()
d.r=d.f=d.e=d.d=d.c=d.b=d.a=0
d.scN(0)
d.scC(0,0)
d.scH(0)
o=d.d
$.x().toString
if(!(Math.abs(o-0.1)<1e-9)){d.d=0.1
o=new D.y("deltaYaw",o,0.1)
o.b=!0
d.ai(o)}o=d.e
$.x().toString
if(!(Math.abs(o-0.21)<1e-9)){d.e=0.21
o=new D.y("deltaPitch",o,0.21)
o.b=!0
d.ai(o)}o=d.f
$.x().toString
if(!(Math.abs(o-0.32)<1e-9)){d.f=0.32
o=new D.y("deltaRoll",o,0.32)
o.b=!0
d.ai(o)}q.saG(d)
d=P.fN([r.f.ap("../resources/diceColor/posx.png"),r.f.ap("../resources/diceColor/posz.png"),r.f.ap("../resources/diceColor/negx.png"),r.f.ap("../resources/diceColor/negy.png"),r.f.ap("../resources/diceColor/posy.png"),r.f.ap("../resources/diceColor/negz.png")],!0)
n=new T.hF()
n.b=n.a=0
n.e=d
P.jV(P.iU(500),new N.iK(n))
m=new O.d3()
d=O.iT()
m.e=d
d.aV(m.gdt(),m.gdv())
d=new O.af(m,"emission")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
m.f=d
d=new O.af(m,"ambient")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
m.r=d
d=new O.af(m,"diffuse")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
m.x=d
d=new O.af(m,"invDiffuse")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
m.y=d
d=new O.fX(m,"specular")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
d.ch=100
m.z=d
d=new O.fT(m,"bump")
d.c=new A.O(!1,!1,!1)
m.Q=d
m.ch=null
d=new O.af(m,"reflect")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
m.cx=d
d=new O.fW(m,"refract")
d.c=new A.O(!1,!1,!1)
d.f=new V.M(0,0,0)
d.ch=1
m.cy=d
d=new O.fS(m,"alpha")
d.c=new A.O(!1,!1,!1)
d.f=1
m.db=d
d=new D.bP()
d.bF()
d.e=[]
d.f=[]
d.r=[]
d.x=[]
d.z=d.y=null
d.by(d.gdr(),d.ge3(),d.ge5())
m.dx=d
o=new O.fV()
o.b=new V.aI(0,0,0,0)
o.c=1
o.d=10
o.e=!1
m.dy=o
o=d.y
d=o==null?d.y=D.a4():o
d.n(0,m.gei())
d=m.dx
o=d.z
d=o==null?d.z=D.a4():o
d.n(0,m.gaM())
m.fr=null
d=m.dx
l=V.j5()
o=U.jy(V.jF(V.jK(),l,new V.v(1,-1,-3)))
k=new V.M(1,1,1)
j=new D.bb()
j.c=new V.M(1,1,1)
j.a=V.lB()
j.d=V.j5()
j.e=V.lA()
i=j.b
j.b=o
o.gv().n(0,j.gd3())
o=new D.y("mover",i,j.b)
o.b=!0
j.a5(o)
if(!j.c.m(0,k)){i=j.c
j.c=k
o=new D.y("color",i,k)
o.b=!0
j.a5(o)}d.n(0,j)
m.r.saz(0,new V.M(V.bw(0.2),V.bw(0.2),V.bw(0.2)))
m.x.saz(0,new V.M(V.bw(0.8),V.bw(0.8),V.bw(0.8)))
m.r.scJ(n)
m.x.scJ(n)
d=new M.cO()
d.a=!0
o=O.iT()
d.e=o
o.aV(d.gdB(),d.gdD())
d.y=d.x=d.r=d.f=null
h=X.l4(e)
g=new X.dh()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.saG(e)
o=g.c
$.x().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){g.c=1.0471975511965976
o=new D.y("fov",o,1.0471975511965976)
o.b=!0
g.ag(o)}o=g.d
$.x().toString
if(!(Math.abs(o-0.1)<1e-9)){g.d=0.1
o=new D.y("near",o,0.1)
o.b=!0
g.ag(o)}o=g.e
$.x().toString
if(!(Math.abs(o-2000)<1e-9)){g.e=2000
o=new D.y("far",o,2000)
o.b=!0
g.ag(o)}o=d.b
if(o!==g){if(o!=null)o.gv().C(0,d.ga2())
i=d.b
d.b=g
g.gv().n(0,d.ga2())
o=new D.y("camera",i,d.b)
o.b=!0
d.a6(o)}o=d.c
if(o!==h){if(o!=null)o.gv().C(0,d.ga2())
i=d.c
d.c=h
h.gv().n(0,d.ga2())
o=new D.y("target",i,d.c)
o.b=!0
d.a6(o)}d.scI(e)
d.scI(m)
d.e.n(0,q)
d.b.saG(U.jy(V.ao(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
o=r.d
if(o!==d){if(o!=null)o.gv().C(0,r.gbG())
r.d=d
d.gv().n(0,r.gbG())
r.bH()}V.nf(r)},
iK:function iK(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iY.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gL:function(a){return H.bZ(a)},
i:function(a){return"Instance of '"+H.e(H.dm(a))+"'"}}
J.fG.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159}}
J.bO.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0}}
J.aS.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.di.prototype={}
J.bo.prototype={}
J.a5.prototype={
i:function(a){var s=a[$.ky()]
if(s==null)return this.cX(a)
return"JavaScript function for "+H.e(J.S(s))}}
J.a_.prototype={
bu:function(a,b){if(!!a.fixed$length)H.m(P.r("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dn(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var s
if(!!a.fixed$length)H.m(P.r("remove"))
for(s=0;s<a.length;++s)if(J.D(a[s],b)){a.splice(s,1)
return!0}return!1},
ev:function(a,b){var s,r
if(!!a.fixed$length)H.m(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.l)(b),++r)a.push(b[r])},
B:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bD(a))}},
l:function(a,b){var s,r,q=P.j_(a.length,"",!1)
for(s=0;s<a.length;++s){r=H.e(a[s])
if(s>=q.length)return H.d(q,s)
q[s]=r}return q.join(b)},
eV:function(a){return this.l(a,"")},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
geR:function(a){if(a.length>0)return a[0]
throw H.c(H.jA())},
gbo:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jA())},
aw:function(a,b){if(!!a.immutable$list)H.m(P.r("sort"))
H.ly(a,b==null?J.mc():b)},
cU:function(a){return this.aw(a,null)},
H:function(a,b){var s
for(s=0;s<a.length;++s)if(J.D(a[s],b))return!0
return!1},
i:function(a){return P.iW(a,"[","]")},
gI:function(a){return new J.T(a,a.length)},
gL:function(a){return H.bZ(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.m(P.r("set length"))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.by(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.m(P.r("indexed set"))
if(b>=a.length||b<0)throw H.c(H.by(a,b))
a[b]=c},
$ii:1,
$if:1}
J.cX.prototype={}
J.T.prototype={
gD:function(a){return this.d},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.l(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aR.prototype={
al:function(a,b){var s
if(typeof b!="number")throw H.c(H.aA(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gaS(b)
if(this.gaS(a)===s)return 0
if(this.gaS(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaS:function(a){return a===0?1/a<0:a<0},
fn:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.r(""+a+".toInt()"))},
bn:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.r(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
cK:function(a,b){var s
if(b>20)throw H.c(P.ar(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gaS(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
cQ:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
cY:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bZ(a,b)},
P:function(a,b){return(a|0)===a?a/b|0:this.bZ(a,b)},
bZ:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.r("Result of truncating division is "+H.e(s)+": "+H.e(a)+" ~/ "+b))},
aP:function(a,b){var s
if(a>0)s=this.es(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
es:function(a,b){return b>31?0:a>>>b},
$iQ:1,
$iK:1}
J.bN.prototype={$io:1}
J.bM.prototype={}
J.am.prototype={
bd:function(a,b){if(b<0)throw H.c(H.by(a,b))
if(b>=a.length)H.m(H.by(a,b))
return a.charCodeAt(b)},
bM:function(a,b){if(b>=a.length)throw H.c(H.by(a,b))
return a.charCodeAt(b)},
u:function(a,b){if(typeof b!="string")throw H.c(P.js(b,null,null))
return a+b},
bB:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dn(b,null))
if(b>c)throw H.c(P.dn(b,null))
if(c>a.length)throw H.c(P.dn(c,null))
return a.substring(b,c)},
ax:function(a,b){return this.bB(a,b,null)},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
X:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
eD:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ar(c,0,s,null,null))
return H.kt(a,b,c)},
H:function(a,b){return this.eD(a,b,0)},
al:function(a,b){var s
if(typeof b!="string")throw H.c(H.aA(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gL:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gj:function(a){return a.length},
$iI:1}
H.F.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.b.bd(this.a,b)}}
H.i.prototype={}
H.bg.prototype={
gD:function(a){var s=this.d
return s},
q:function(){var s,r=this,q=r.a,p=J.b3(q),o=p.gj(q)
if(r.b!=o)throw H.c(P.bD(q))
s=r.c
if(typeof o!=="number")return H.G(o)
if(s>=o){r.d=null
return!1}r.d=p.w(q,s);++r.c
return!0}}
H.aU.prototype={
gI:function(a){return new H.bR(J.b6(this.a),this.b)},
gj:function(a){return J.b7(this.a)},
w:function(a,b){return this.b.$1(J.iO(this.a,b))}}
H.bH.prototype={$ii:1}
H.bR.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){var s=this.a
return s}}
H.c2.prototype={
gI:function(a){return new H.e3(J.b6(this.a),this.b)}}
H.e3.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.bI.prototype={}
H.dZ.prototype={
k:function(a,b,c){throw H.c(P.r("Cannot modify an unmodifiable list"))}}
H.bp.prototype={}
H.hP.prototype={
W:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dc.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.cY.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.e(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.e(r.a)+")"
return q+p+"' on '"+s+"' ("+H.e(r.a)+")"}}
H.dY.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hd.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.eH.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.b9.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kw(r==null?"unknown":r)+"'"},
gfs:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hB.prototype={}
H.hx.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kw(s)+"'"}}
H.bC.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bC))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gL:function(a){var s,r=this.c
if(r==null)s=H.bZ(this.a)
else s=typeof r!=="object"?J.X(r):H.bZ(r)
return(s^H.bZ(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.dm(s))+"'")}}
H.ds.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.q.prototype={
gj:function(a){return this.a},
gac:function(a){return new H.an(this)},
gfq:function(a){return H.lc(new H.an(this),new H.fI(this))},
eE:function(a,b){var s=this.b
if(s==null)return!1
return this.di(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aN(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aN(p,b)
q=r==null?n:r.b
return q}else return o.eU(b)},
eU:function(a){var s,r,q=this.d
if(q==null)return null
s=this.bR(q,J.X(a)&0x3ffffff)
r=this.cp(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.bK(s==null?m.b=m.b2():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bK(r==null?m.c=m.b2():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.b2()
p=J.X(b)&0x3ffffff
o=m.bR(q,p)
if(o==null)m.b7(q,p,[m.b3(b,c)])
else{n=m.cp(o,b)
if(n>=0)o[n].b=c
else o.push(m.b3(b,c))}}},
B:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bD(s))
r=r.c}},
bK:function(a,b,c){var s=this.aN(a,b)
if(s==null)this.b7(a,b,this.b3(b,c))
else s.b=c},
b3:function(a,b){var s=this,r=new H.fM(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
cp:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1},
i:function(a){return P.jE(this)},
aN:function(a,b){return a[b]},
bR:function(a,b){return a[b]},
b7:function(a,b,c){a[b]=c},
dl:function(a,b){delete a[b]},
di:function(a,b){return this.aN(a,b)!=null},
b2:function(){var s="<non-identifier-key>",r=Object.create(null)
this.b7(r,s,r)
this.dl(r,s)
return r}}
H.fI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.ma(this.a).a8("2(1)")}}
H.fM.prototype={}
H.an.prototype={
gj:function(a){return this.a.a},
gI:function(a){var s=this.a,r=new H.d0(s,s.r)
r.c=s.e
return r}}
H.d0.prototype={
gD:function(a){return this.d},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:11}
H.iG.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iH.prototype={
$1:function(a){return this.a(a)}}
H.fH.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bW.prototype={}
H.bi.prototype={
gj:function(a){return a.length},
$ip:1}
H.aW.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aj(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.bV.prototype={
k:function(a,b,c){H.aj(b,a,a.length)
a[b]=c},
$ii:1,
$if:1}
H.d6.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.d7.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.d8.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.d9.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.da.prototype={
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.bX.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.db.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aj(b,a,a.length)
return a[b]}}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
H.cb.prototype={}
H.a1.prototype={
a8:function(a){return H.eT(v.typeUniverse,this,a)},
bL:function(a){return H.lY(v.typeUniverse,this,a)}}
H.ek.prototype={}
H.ef.prototype={
i:function(a){return this.a}}
H.cj.prototype={}
P.ik.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:12}
P.ij.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.il.prototype={
$0:function(){this.a.$0()}}
P.im.prototype={
$0:function(){this.a.$0()}}
P.ci.prototype={
d6:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bx(new P.iv(this,b),0),a)
else throw H.c(P.r("`setTimeout()` not found."))},
d7:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bx(new P.iu(this,a,Date.now(),b),0),a)
else throw H.c(P.r("Periodic timer."))},
$ic0:1}
P.iv.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iu.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.cY(s,o)}q.c=p
r.d.$1(q)}}
P.bs.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bt.prototype={
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
if(r instanceof P.bs){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.b6(s)
if(o instanceof P.bt){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cf.prototype={
gI:function(a){return new P.bt(this.a())}}
P.e4.prototype={}
P.dB.prototype={}
P.dC.prototype={}
P.c0.prototype={}
P.ix.prototype={}
P.iC.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.S(this.b)
throw s}}
P.ir.prototype={
fi:function(a){var s,r,q,p=null
try{if(C.e===$.a8){a.$0()
return}P.mI(p,p,this,a)}catch(q){s=H.f5(q)
r=H.jj(q)
P.ki(p,p,this,s,r)}},
fj:function(a,b){var s,r,q,p=null
try{if(C.e===$.a8){a.$1(b)
return}P.mJ(p,p,this,a,b)}catch(q){s=H.f5(q)
r=H.jj(q)
P.ki(p,p,this,s,r)}},
fk:function(a,b){return this.fj(a,b,t.z)},
ez:function(a){return new P.is(this,a)},
c6:function(a,b){return new P.it(this,a,b)}}
P.is.prototype={
$0:function(){return this.a.fi(this.b)}}
P.it.prototype={
$1:function(a){return this.a.fk(this.b,a)},
$S:function(){return this.c.a8("~(0)")}}
P.c4.prototype={
gI:function(a){var s=new P.c5(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
H:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dg(b)
return r}},
dg:function(a){var s=this.d
if(s==null)return!1
return this.b0(s[this.aY(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bN(s==null?q.b=P.j8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bN(r==null?q.c=P.j8():r,b)}else return q.d9(0,b)},
d9:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.j8()
s=q.aY(b)
r=p[s]
if(r==null)p[s]=[q.aX(b)]
else{if(q.b0(r,b)>=0)return!1
r.push(q.aX(b))}return!0},
C:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.ee(this.c,b)
else return this.ed(0,b)},
ed:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.aY(b)
r=n[s]
q=o.b0(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.c0(p)
return!0},
bN:function(a,b){if(a[b]!=null)return!1
a[b]=this.aX(b)
return!0},
ee:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.c0(s)
delete a[b]
return!0},
bS:function(){this.r=1073741823&this.r+1},
aX:function(a){var s,r=this,q=new P.iq(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bS()
return q},
c0:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bS()},
aY:function(a){return J.X(a)&1073741823},
b0:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.D(a[r].a,b))return r
return-1}}
P.iq.prototype={}
P.c5.prototype={
gD:function(a){return this.d},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bD(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.bL.prototype={}
P.bQ.prototype={$ii:1,$if:1}
P.w.prototype={
gI:function(a){return new H.bg(a,this.gj(a))},
w:function(a,b){return this.h(a,b)},
gcr:function(a){return this.gj(a)===0},
fo:function(a){var s,r,q,p,o=this
if(o.gcr(a)){s=J.jB(0)
return s}r=o.h(a,0)
q=P.j_(o.gj(a),r,!0)
p=1
while(!0){s=o.gj(a)
if(typeof s!=="number")return H.G(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s;++p}return q},
i:function(a){return P.iW(a,"[","]")}}
P.d2.prototype={}
P.fQ.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.e(a)
r.a=s+": "
r.a+=H.e(b)},
$S:13}
P.ae.prototype={
B:function(a,b){var s,r
for(s=J.b6(this.gac(a));s.q();){r=s.gD(s)
b.$2(r,this.h(a,r))}},
gj:function(a){return J.b7(this.gac(a))},
i:function(a){return P.jE(a)}}
P.cc.prototype={
i:function(a){return P.iW(this,"{","}")},
w:function(a,b){var s,r,q,p="index"
P.kT(b,p)
P.jN(b,p)
for(s=P.lI(this,this.r),r=0;s.q();){q=s.d
if(b===r)return q;++r}throw H.c(P.C(b,this,p,null,r))},
$ii:1,
$if:1}
P.c6.prototype={}
P.cH.prototype={}
P.cK.prototype={}
P.ft.prototype={}
P.i0.prototype={}
P.i1.prototype={
eF:function(a){var s,r,q,p=null,o=P.j1(0,p,a.length)
if(o==null)throw H.c(new P.bm(p,p,!1,p,p,"Invalid range"))
s=o-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.iw(r)
if(q.dn(a,0,o)!==o){C.b.bd(a,o-1)
q.b9()}return new Uint8Array(r.subarray(0,H.m4(0,q.b,r.length)))}}
P.iw.prototype={
b9:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
eu:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=128|s&63
return!0}else{n.b9()
return!1}},
dn:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bd(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bM(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.eu(p,C.b.bM(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.b9()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=128|p&63}}}return q}}
P.b2.prototype={}
P.aJ.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aJ&&this.a===b.a&&!0},
al:function(a,b){return C.c.al(this.a,b.a)},
gL:function(a){var s=this.a
return(s^C.c.aP(s,30))&1073741823},
i:function(a){var s=this,r=P.l1(H.lm(s)),q=P.cM(H.lk(s)),p=P.cM(H.lg(s)),o=P.cM(H.lh(s)),n=P.cM(H.lj(s)),m=P.cM(H.ll(s)),l=P.l2(H.li(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.Q.prototype={}
P.aK.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a},
gL:function(a){return C.c.gL(this.a)},
al:function(a,b){return C.c.al(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fr(),o=this.a
if(o<0)return"-"+new P.aK(0-o).i(0)
s=p.$1(C.c.P(o,6e7)%60)
r=p.$1(C.c.P(o,1e6)%60)
q=new P.fq().$1(o%1e6)
return""+C.c.P(o,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.fq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fr.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.B.prototype={}
P.cC.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.fw(s)
return"Assertion failed"}}
P.dd.prototype={
i:function(a){return"Throw of null."}}
P.Y.prototype={
gb_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaZ:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gb_()+o+m
if(!q.a)return l
s=q.gaZ()
r=P.fw(q.b)
return l+s+": "+r}}
P.bm.prototype={
gb_:function(){return"RangeError"},
gaZ:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.e(q):""
else if(q==null)s=": Not greater than or equal to "+H.e(r)
else if(q>r)s=": Not in inclusive range "+H.e(r)+".."+H.e(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.e(r)
return s}}
P.cV.prototype={
gb_:function(){return"RangeError"},
gaZ:function(){var s,r=this.b
if(typeof r!=="number")return r.at()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.e(s)},
gj:function(a){return this.f}}
P.e_.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.dX.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dA.prototype={
i:function(a){return"Bad state: "+this.a}}
P.cI.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fw(s)+"."}}
P.dg.prototype={
i:function(a){return"Out of Memory"},
$iB:1}
P.c_.prototype={
i:function(a){return"Stack Overflow"},
$iB:1}
P.cL.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.eh.prototype={
i:function(a){return"Exception: "+this.a}}
P.fD.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.bB(q,0,75)+"..."
return r+"\n"+q}}
P.o.prototype={}
P.f.prototype={
gj:function(a){var s,r=this.gI(this)
for(s=0;r.q();)++s
return s},
w:function(a,b){var s,r,q
P.jN(b,"index")
for(s=this.gI(this),r=0;s.q();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.C(b,this,"index",null,r))},
i:function(a){return P.l5(this,"(",")")}}
P.cW.prototype={}
P.ad.prototype={$ii:1,$if:1}
P.d1.prototype={}
P.a0.prototype={
gL:function(a){return P.E.prototype.gL.call(C.f,this)},
i:function(a){return"null"}}
P.K.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
m:function(a,b){return this===b},
gL:function(a){return H.bZ(this)},
i:function(a){return"Instance of '"+H.e(H.dm(this))+"'"},
toString:function(){return this.i(this)}}
P.I.prototype={}
P.b_.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.k.prototype={}
W.f6.prototype={
gj:function(a){return a.length}}
W.cA.prototype={
i:function(a){return String(a)}}
W.cB.prototype={
i:function(a){return String(a)}}
W.cE.prototype={}
W.aH.prototype={
bx:function(a,b,c){if(c!=null)return a.getContext(b,P.mX(c))
return a.getContext(b)},
cP:function(a,b){return this.bx(a,b,null)},
$iaH:1}
W.a3.prototype={
gj:function(a){return a.length}}
W.fi.prototype={
gj:function(a){return a.length}}
W.A.prototype={$iA:1}
W.bE.prototype={
gj:function(a){return a.length}}
W.fj.prototype={}
W.Z.prototype={}
W.aa.prototype={}
W.fk.prototype={
gj:function(a){return a.length}}
W.fl.prototype={
gj:function(a){return a.length}}
W.fm.prototype={
gj:function(a){return a.length}}
W.fo.prototype={
i:function(a){return String(a)}}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.bG.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gas(a))+" x "+H.e(this.gao(a))},
m:function(a,b){var s
if(b==null)return!1
if(t.L.b(b)){s=J.bA(b)
s=a.left==s.gct(b)&&a.top==s.gcM(b)&&this.gas(a)==s.gas(b)&&this.gao(a)==s.gao(b)}else s=!1
return s},
gL:function(a){return W.k5(J.X(a.left),J.X(a.top),J.X(this.gas(a)),J.X(this.gao(a)))},
gao:function(a){return a.height},
gct:function(a){return a.left},
gcM:function(a){return a.top},
gas:function(a){return a.width},
$ia6:1}
W.cN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.fp.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
gcr:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gI:function(a){var s=this.fo(this)
return new J.T(s,s.length)}}
W.H.prototype={
gc7:function(a){return new W.e7(a,a.children)},
i:function(a){return a.localName},
$iH:1}
W.h.prototype={$ih:1}
W.b.prototype={
ew:function(a,b,c,d){if(c!=null)this.da(a,b,c,!1)},
da:function(a,b,c,d){return a.addEventListener(b,H.bx(c,1),!1)},
$ib:1}
W.aL.prototype={$iaL:1}
W.cQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.cR.prototype={
gj:function(a){return a.length}}
W.cT.prototype={
gj:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.fF.prototype={
gj:function(a){return a.length}}
W.aN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.aO.prototype={
gc8:function(a){return a.data},
$iaO:1}
W.be.prototype={$ibe:1}
W.aT.prototype={$iaT:1}
W.fO.prototype={
i:function(a){return String(a)}}
W.h5.prototype={
gj:function(a){return a.length}}
W.h6.prototype={
h:function(a,b){return P.aB(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aB(s.value[1]))}},
gac:function(a){var s=[]
this.B(a,new W.h7(s))
return s},
gj:function(a){return a.size}}
W.h7.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h8.prototype={
h:function(a,b){return P.aB(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aB(s.value[1]))}},
gac:function(a){var s=[]
this.B(a,new W.h9(s))
return s},
gj:function(a){return a.size}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aV.prototype={$iaV:1}
W.d5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.U.prototype={$iU:1}
W.e6.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b])},
gI:function(a){var s=this.a.childNodes
return new W.bJ(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
fg:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.kN(s,b,a)}catch(q){H.f5(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.cW(a):s},
eg:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.bY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.aX.prototype={
gj:function(a){return a.length},
$iaX:1}
W.dj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.hl.prototype={
h:function(a,b){return P.aB(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aB(s.value[1]))}},
gac:function(a){var s=[]
this.B(a,new W.hm(s))
return s},
gj:function(a){return a.size}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.dt.prototype={
gj:function(a){return a.length}}
W.as.prototype={$ias:1}
W.dw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.aY.prototype={$iaY:1}
W.dx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.aZ.prototype={
gj:function(a){return a.length},
$iaZ:1}
W.hy.prototype={
h:function(a,b){return a.getItem(H.m2(b))},
B:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gac:function(a){var s=[]
this.B(a,new W.hz(s))
return s},
gj:function(a){return a.length}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.au.prototype={$iau:1}
W.a7.prototype={$ia7:1}
W.dE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.hK.prototype={
gj:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.b1.prototype={$ib1:1}
W.dJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.hN.prototype={
gj:function(a){return a.length}}
W.ai.prototype={}
W.i_.prototype={
i:function(a){return String(a)}}
W.e1.prototype={
gj:function(a){return a.length}}
W.aw.prototype={
geJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
geI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.r("deltaX is not supported"))},
$iaw:1}
W.br.prototype={
eh:function(a,b){return a.requestAnimationFrame(H.bx(b,1))},
dm:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.c3.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
m:function(a,b){var s
if(b==null)return!1
if(t.L.b(b)){s=J.bA(b)
s=a.left==s.gct(b)&&a.top==s.gcM(b)&&a.width==s.gas(b)&&a.height==s.gao(b)}else s=!1
return s},
gL:function(a){return W.k5(J.X(a.left),J.X(a.top),J.X(a.width),J.X(a.height))},
gao:function(a){return a.height},
gas:function(a){return a.width}}
W.el.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.c7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.eE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.eL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ii:1,
$ip:1,
$if:1}
W.iV.prototype={}
W.eg.prototype={}
W.io.prototype={
$1:function(a){return this.a.$1(a)}}
W.j7.prototype={}
W.z.prototype={
gI:function(a){return new W.bJ(a,this.gj(a))}}
W.bJ.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.cy(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return this.d}}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eB.prototype={}
W.cd.prototype={}
W.ce.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
P.ck.prototype={$iaO:1,
gc8:function(a){return this.a}}
P.iD.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.cS.prototype={
gaO:function(){return new H.aU(new H.c2(this.b,new P.fB()),new P.fC())},
k:function(a,b,c){var s=this.gaO()
J.kS(s.b.$1(J.iO(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.b7(this.gaO().a)},
h:function(a,b){var s=this.gaO()
return s.b.$1(J.iO(s.a,b))},
gI:function(a){var s=P.fN(this.gaO(),!1)
return new J.T(s,s.length)}}
P.fB.prototype={
$1:function(a){return t.h.b(a)}}
P.fC.prototype={
$1:function(a){return t.h.a(a)}}
P.eA.prototype={}
P.a6.prototype={}
P.bf.prototype={$ibf:1}
P.d_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.bj.prototype={$ibj:1}
P.de.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.hg.prototype={
gj:function(a){return a.length}}
P.dD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.j.prototype={
gc7:function(a){return new P.cS(a,new W.e6(a))}}
P.bn.prototype={$ibn:1}
P.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eo.prototype={}
P.ep.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eQ.prototype={}
P.eR.prototype={}
P.fb.prototype={
gj:function(a){return a.length}}
P.fc.prototype={
h:function(a,b){return P.aB(a.get(b))},
B:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.aB(s.value[1]))}},
gac:function(a){var s=[]
this.B(a,new P.fd(s))
return s},
gj:function(a){return a.size}}
P.fd.prototype={
$2:function(a,b){return this.a.push(a)}}
P.cD.prototype={
gj:function(a){return a.length}}
P.al.prototype={}
P.df.prototype={
gj:function(a){return a.length}}
P.e5.prototype={}
P.dq.prototype={
fl:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.mY(g))
return}if(t.R.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.iP("Incorrect number or type of arguments"))}}
P.dy.prototype={
gj:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.C(b,a,null,null,null))
s=P.aB(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
w:function(a,b){return this.h(a,b)},
$ii:1,
$if:1}
P.eF.prototype={}
P.eG.prototype={}
K.f7.prototype={
aq:function(a,b){return!0},
i:function(a){return"all"}}
K.cU.prototype={
aq:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)if(s[q].aq(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.ap.prototype={
aq:function(a,b){return!this.cV(0,b)},
i:function(a){return"!["+this.bC(0)+"]"}}
K.hn.prototype={
d0:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.n("May not create a Set with zero characters."))
s=new H.q(t.E)
for(r=new H.bg(a,a.gj(a));r.q();){q=r.d
s.k(0,q,!0)}p=P.fN(new H.an(s),!0)
C.a.cU(p)
this.a=p},
aq:function(a,b){return C.a.H(this.a,b)},
i:function(a){return P.j2(this.a)}}
L.dz.prototype={
l:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.hO(this.a.F(0,b))
p.a=[]
p.c=!1
this.c.push(p)
return p},
eQ:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.aq(0,a))return p}return null},
i:function(a){return this.b},
c_:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.H(0,l))m+=" (consume)"
for(l=new H.an(n.d.c),l=l.gI(l);l.q();){r=l.d
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.e(r)+" => ["+H.e(q)+"]")
m=s.c.H(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.l)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.dH.prototype={
i:function(a){var s=H.ku(this.b,"\n","\\n"),r=H.ku(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.dI.prototype={
i:function(a){return this.b}}
L.hL.prototype={
F:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.dz(this,b)
s.c=[]
this.a.k(0,b,s)}return s},
aJ:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.dI(a)
s.c=new H.q(t.i)
this.b.k(0,a,s)}return s},
cL:function(a){return this.fp(a)},
fp:function(a){var s=this
return P.mk(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$cL(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a0.length!==0)j=C.a.bu(a0,0)
else{if(!r.q()){q=3
break}i=r.d
j=i}b.push(j);++m
h=d.eQ(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.j2(b)
throw H.c(P.n("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!b.fixed$length)H.m(P.r("removeRange"))
P.j1(0,k,b.length)
b.splice(0,k-0)
C.a.ev(a0,b)
b=[]
c=[]
d=s.d
q=!s.c.H(0,n.a)?7:8
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
if(d.d!=null){g=P.j2(c)
f=d.d
e=f.c.h(0,g)
n=new L.dH(e==null?f.b:e,g,m)
k=b.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.H(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.lG()
case 1:return P.lH(o)}}},t.j)},
i:function(a){var s,r=new P.b_(""),q=this.d
if(q!=null)r.a=q.c_()+"\n"
for(q=this.a,q=q.gfq(q),q=new H.bR(J.b6(q.a),q.b);q.q();){s=q.a
if(s!=this.d)r.a+=s.c_()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.hO.prototype={
i:function(a){return this.b.b+": "+this.bC(0)}}
O.ba.prototype={
bF:function(){this.a=[]
this.c=this.b=null},
by:function(a,b,c){this.b=b
this.c=a},
aV:function(a,b){return this.by(a,null,b)},
e2:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
dq:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gj:function(a){return this.a.length},
gI:function(a){var s=this.a
return new J.T(s,s.length)},
w:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.e2([b])){s=this.a
r=s.length
s.push(b)
this.dq(r,[b])}},
$if:1}
O.bT.prototype={
gj:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.a4():s},
af:function(){var s=this.b
if(s!=null)s.J(null)},
gN:function(a){var s=this.a
if(s.length>0)return C.a.gbo(s)
else return V.j0()},
cE:function(a){var s=this.a
if(a==null)s.push(V.j0())
else s.push(a)
this.af()},
bt:function(){var s=this.a
if(s.length>0){s.pop()
this.af()}}}
E.ff.prototype={}
E.bc.prototype={
sbz:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gv().C(0,q.gcA())
s=q.c
if(s!=null)s.gv().n(0,q.gcA())
r=new D.y("shape",p,q.c)
r.b=!0
q.ad(r)}},
saG:function(a){var s,r,q=this
if(!J.D(q.r,a)){s=q.r
if(s!=null)s.gv().C(0,q.gcw())
if(a!=null)a.gv().n(0,q.gcw())
q.r=a
r=new D.y("mover",s,a)
r.b=!0
q.ad(r)}},
aU:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.r
if(k!=null){s=k.r
r=b.e
if(s<r){k.r=r
s=k.y
if(s!=null)++s.d
k.scN(k.a+k.d*b.y)
k.scC(0,k.b+k.e*b.y)
k.scH(k.c+k.f*b.y)
s=k.c
q=Math.cos(s)
p=Math.sin(s)
s=V.ao(q,-p,0,0,p,q,0,0,0,0,1,0,0,0,0,1)
r=k.b
q=Math.cos(r)
p=Math.sin(r)
s=s.K(0,V.ao(q,0,-p,0,0,1,0,0,p,0,q,0,0,0,0,1))
r=k.a
q=Math.cos(r)
p=Math.sin(r)
k.x=s.K(0,V.ao(1,0,0,0,0,q,-p,0,0,p,q,0,0,0,0,1))
s=k.y
if(s!=null)s.a4(0)}o=k.x}else o=null
if(!J.D(o,l.x)){n=l.x
l.x=o
m=new D.y("matrix",n,o)
m.b=!0
l.ad(m)}for(k=l.y.a,k=new J.T(k,k.length);k.q();)k.d.aU(0,b)},
ar:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gN(q))
else o.push(p.K(0,q.gN(q)))
q.af()
a.cF(r.f)
q=a.dy
s=(q&&C.a).gbo(q)
if(s!=null&&r.d!=null)s.ff(a,r)
for(q=r.y.a,q=new J.T(q,q.length);q.q();)q.d.ar(a)
a.cD()
a.dx.bt()},
ad:function(a){var s=this.z
if(s!=null)s.J(a)},
O:function(){return this.ad(null)},
cB:function(a){this.e=null
this.ad(a)},
f3:function(){return this.cB(null)},
cz:function(a){this.ad(a)},
f2:function(){return this.cz(null)},
cv:function(a){this.ad(a)},
f_:function(){return this.cv(null)},
eZ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcu(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bd()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}this.O()},
f1:function(a,b){var s,r
for(s=b.gI(b),r=this.gcu();s.q();)s.gD(s).gv().C(0,r)
this.O()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.b8.prototype={
i:function(a){return this.b}}
E.bk.prototype={
i:function(a){return this.b}}
E.ee.prototype={}
E.hh.prototype={
d_:function(a,b){var s,r=this
r.d=r.c=512
r.e=0
r.x=r.r=r.f=new P.aJ(Date.now(),!1)
r.y=0
r.cx=r.ch=r.Q=r.z=null
s=new O.bT()
s.a=[]
s.gv().n(0,new E.hi(r))
r.cy=s
s=new O.bT()
s.a=[]
s.gv().n(0,new E.hj(r))
r.db=s
s=new O.bT()
s.a=[]
s.gv().n(0,new E.hk(r))
r.dx=s
s=[]
r.dy=s
s.push(null)
r.fr=new H.q(t.F)},
gfc:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.gN(q)
s=r.db
s=r.z=q.K(0,s.gN(s))
q=s}return q},
cF:function(a){var s=this.dy
s.push(a==null?(s&&C.a).gbo(s):a)},
cD:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.hi.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.hj.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.hk.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.dG.prototype={
bI:function(a){this.cG()},
bH:function(){return this.bI(null)},
geS:function(){var s,r=this,q=Date.now(),p=C.c.P(P.iU(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.aJ(q,!1)
return s/p},
bW:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.K()
if(typeof p!=="number")return H.G(p)
s=C.d.bn(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.K()
r=C.d.bn(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.jU(C.h,q.gfh())}},
cG:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.t.dm(s)
r=W.kj(new E.hJ(this),t.H)
r.toString
C.t.eh(s,r)}},
fe:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.bW()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.aJ(p,!1)
q.y=P.iU(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.af()
p=q.db
C.a.sj(p.a,0)
p.af()
p=q.dx
C.a.sj(p.a,0)
p.af()
p=q.dy
p.toString
C.a.sj(p,0)
q.dy.push(null)
m.ar(n.e)}}catch(o){s=H.f5(o)
r=H.jj(o)
P.jo("Error: "+H.e(s))
P.jo("Stack: "+H.e(r))
throw H.c(s)}}}
E.hJ.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fe()}}}
Z.e2.prototype={}
Z.fg.prototype={
ab:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.f5(q)
r=P.n('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.e(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.e(s.e)+"]"}}
Z.ii.prototype={}
Z.cF.prototype={
an:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
ab:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].ab(a)},
aL:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
ar:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)o.push(s[q].i(0))
p=[]
for(s=this.c,r=s.length,q=0;q<r;++q)p.push(J.S(s[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(o,", ")+"\nAttrs:   "+C.a.l(p,", ")}}
Z.bK.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.dm(this.c))+"'")+"]"}}
Z.av.prototype={
gbA:function(a){var s=this.a,r=(s&$.aF().a)!==0?3:0
if((s&$.aE().a)!==0)r+=3
if((s&$.aD().a)!==0)r+=3
if((s&$.aG().a)!==0)r+=2
if((s&$.b5().a)!==0)r+=3
if((s&$.cw().a)!==0)r+=3
if((s&$.cx().a)!==0)r+=4
if((s&$.bB().a)!==0)++r
return(s&$.aC().a)!==0?r+4:r},
ey:function(a){var s,r=$.aF(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aE()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cw()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aC()
if((q&r.a)!==0)if(s===a)return r
return $.kL()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.av))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aF().a)!==0)s.push("Pos")
if((r&$.aE().a)!==0)s.push("Norm")
if((r&$.aD().a)!==0)s.push("Binm")
if((r&$.aG().a)!==0)s.push("Txt2D")
if((r&$.b5().a)!==0)s.push("TxtCube")
if((r&$.cw().a)!==0)s.push("Clr3")
if((r&$.cx().a)!==0)s.push("Clr4")
if((r&$.bB().a)!==0)s.push("Weight")
if((r&$.aC().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.l(s,"|")}}
D.fh.prototype={}
D.bd.prototype={
n:function(a,b){var s=this.a;(s==null?this.a=[]:s).push(b)},
C:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.a.H(q,b)
if(q===!0){q=r.a
s=(q&&C.a).C(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.a.H(q,b)
if(q===!0){q=r.b
s=(q&&C.a).C(q,b)||s}return s},
J:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.ab()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.a.B(P.fN(s,!0),new D.fx(o))
s=p.b
if(s!=null){p.b=[]
C.a.B(s,new D.fy(o))}return!0},
c9:function(){return this.J(null)},
a4:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.J(s)}}}}
D.fx.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.fy.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ab.prototype={}
D.aP.prototype={}
D.aQ.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cG.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cZ.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fJ.prototype={
f8:function(a){this.d.n(0,a.a)
return!1},
f4:function(a){this.d.C(0,a.a)
return!1}}
X.fP.prototype={
bs:function(a,b){this.r=a.a
return!1},
aI:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.cR()
if(typeof s!=="number")return s.Y()
this.r=(s&~r)>>>0
return!1},
aH:function(a,b){return!1},
f9:function(a){return!1},
dS:function(a,b,c){return}}
X.bU.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bU))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.ha.prototype={
bs:function(a,b){this.f=a.a
return!1},
aI:function(a,b){var s=this.f,r=a.a
if(typeof r!=="number")return r.cR()
if(typeof s!=="number")return s.Y()
this.f=(s&~r)>>>0
return!1},
aH:function(a,b){return!1},
fa:function(a,b){return!1}}
X.hM.prototype={
f7:function(a){return!1},
f5:function(a){return!1},
f6:function(a){return!1}}
X.e0.prototype={
bP:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.cZ(s,new X.bU(r,a.altKey,a.shiftKey))},
aj:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
b8:function(a){if(!a.ctrlKey)a.metaKey
a.altKey
a.shiftKey},
aa:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.T()
if(typeof o!=="number")return H.G(o)
s=r.top
if(typeof p!=="number")return p.T()
if(typeof s!=="number")return H.G(s)
return new V.aq(q-o,p-s)},
ay:function(a){return new V.bq(a.movementX,a.movementY)},
b4:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=[]
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=C.d.a0(p.pageX)
C.d.a0(p.pageY)
n=k.left
if(typeof n!=="number")return H.G(n)
C.d.a0(p.pageX)
m=C.d.a0(p.pageY)
l=k.top
if(typeof l!=="number")return H.G(l)
j.push(new V.aq(o-n,m-l))}return j},
a7:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.cG(s,new X.bU(r,a.altKey,a.shiftKey))},
b1:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.T()
if(typeof n!=="number")return H.G(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.T()
if(typeof p!=="number")return H.G(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.G(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.G(p)
p=r<p}else p=!1
return p},
dM:function(a){this.f=!0},
dA:function(a){this.f=!1},
dG:function(a){if(this.f&&this.b1(a))a.preventDefault()},
dQ:function(a){var s
if(!this.f)return
s=this.bP(a)
this.b.f8(s)},
dO:function(a){var s
if(!this.f)return
s=this.bP(a)
this.b.f4(s)},
dU:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aj(a)
if(p.x){s=p.a7(a)
r=p.ay(a)
if(p.d.bs(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.a7(a)
q=p.aa(a)
if(p.c.bs(s,q))a.preventDefault()},
dY:function(a){var s,r,q,p=this
p.aj(a)
s=p.a7(a)
if(p.x){r=p.ay(a)
if(p.d.aI(s,r))a.preventDefault()
return}if(p.r)return
q=p.aa(a)
if(p.c.aI(s,q))a.preventDefault()},
dK:function(a){var s,r,q,p=this
if(!p.b1(a)){p.aj(a)
s=p.a7(a)
if(p.x){r=p.ay(a)
if(p.d.aI(s,r))a.preventDefault()
return}if(p.r)return
q=p.aa(a)
if(p.c.aI(s,q))a.preventDefault()}},
dW:function(a){var s,r,q,p=this
p.aj(a)
s=p.a7(a)
if(p.x){r=p.ay(a)
if(p.d.aH(s,r))a.preventDefault()
return}if(p.r)return
q=p.aa(a)
if(p.c.aH(s,q))a.preventDefault()},
dI:function(a){var s,r,q,p=this
if(!p.b1(a)){p.aj(a)
s=p.a7(a)
if(p.x){r=p.ay(a)
if(p.d.aH(s,r))a.preventDefault()
return}if(p.r)return
q=p.aa(a)
if(p.c.aH(s,q))a.preventDefault()}},
e_:function(a){var s,r,q,p,o,n=this
n.aj(a)
s=(a&&C.r).geI(a)
r=C.r.geJ(a)
q=n.Q
if(typeof s!=="number")return s.K()
if(typeof q!=="number")return H.G(q)
if(typeof r!=="number")return r.K()
p=new V.bq(s*q,r*q)
if(n.x){if(n.d.f9(p))a.preventDefault()
return}if(n.r)return
o=n.aa(a)
if(n.c.fa(p,o))a.preventDefault()},
e1:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.a7(q.y)
r=q.aa(q.y)
q.d.dS(s,r,p)}},
ec:function(a){var s,r=this
r.a.focus()
r.f=!0
r.b8(a)
s=r.b4(a)
if(r.e.f7(s))a.preventDefault()},
e8:function(a){var s
this.b8(a)
s=this.b4(a)
if(this.e.f5(s))a.preventDefault()},
ea:function(a){var s
this.b8(a)
s=this.b4(a)
if(this.e.f6(s))a.preventDefault()}}
D.bb.prototype={
a5:function(a){var s=this.r
if(s!=null)s.J(a)},
d4:function(){return this.a5(null)},
$iac:1}
D.ac.prototype={}
D.bP.prototype={
a5:function(a){var s=this.y
if(s!=null)s.J(a)},
bU:function(a){var s=this.z
if(s!=null)s.J(a)},
dR:function(){return this.bU(null)},
e4:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){q=a[r]
if(q==null||this.dh(q))return!1}return!0},
ds:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbT(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p instanceof D.bb)this.f.push(p)
o=p.r
if(o==null){o=new D.bd()
o.d=0
p.r=o}n=o.a;(n==null?o.a=[]:n).push(r)}s=new D.aP()
s.b=!0
this.a5(s)},
e6:function(a,b){var s,r,q
for(s=b.gI(b),r=this.gbT();s.q();){q=s.gD(s)
C.a.C(this.e,q)
q.gv().C(0,r)}s=new D.aQ()
s.b=!0
this.a5(s)},
dh:function(a){var s=C.a.H(this.f,a)
return s}}
V.M.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aI.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aI))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.fv.prototype={}
V.d4.prototype={
U:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.d4))return!1
s=b.a
$.x().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bz([o.a,o.d,o.r],3,0),m=V.bz([o.b,o.e,o.x],3,0),l=V.bz([o.c,o.f,o.y],3,0),k=n.length
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
V.bh.prototype={
U:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cq:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.x().toString
if(Math.abs(b3-0)<1e-9)return V.j0()
s=1/b3
r=-l
q=-a2
return V.ao((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ao(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
aT:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.v(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aK:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.V(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bh))return!1
s=b.a
$.x().toString
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
i:function(a){return this.E()},
t:function(a){var s,r,q,p,o,n=this,m=V.bz([n.a,n.e,n.y,n.cx],3,0),l=V.bz([n.b,n.f,n.z,n.cy],3,0),k=V.bz([n.c,n.r,n.Q,n.db],3,0),j=V.bz([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
E:function(){return this.t("")}}
V.aq.prototype={
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.V.prototype={
T:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.dl.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dl))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.dp.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dp))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.bq.prototype={
bp:function(a){var s,r=this.a
if(typeof r!=="number")return r.K()
s=this.b
if(typeof s!=="number")return s.K()
return Math.sqrt(r*r+s*s)},
m:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bq))return!1
s=b.a
r=this.a
$.x().toString
if(typeof s!=="number")return s.T()
if(typeof r!=="number")return H.G(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.T()
if(typeof r!=="number")return H.G(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.v.prototype={
bp:function(a){return Math.sqrt(this.aD(this))},
aD:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bq:function(a,b){return new V.v(V.jl(this.a,a.a,b),V.jl(this.b,a.b,b),V.jl(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.aD(s))
if(r===1)return s
return s.cO(0,r)},
aA:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.v(s*r-q*p,q*o-n*r,n*p-s*o)},
u:function(a,b){return new V.v(this.a+b.a,this.b+b.b,this.c+b.c)},
au:function(a){return new V.v(-this.a,-this.b,-this.c)},
cO:function(a,b){$.x().toString
if(Math.abs(b-0)<1e-9)return V.c1()
return new V.v(this.a/b,this.b/b,this.c/b)},
cs:function(){$.x().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.v))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.cJ.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.a4():s},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cJ))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.hb.prototype={}
U.dr.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.a4():s},
ai:function(a){var s=this.y
if(s!=null)s.J(a)},
scN:function(a){var s
a=V.jp(a,0,6.283185307179586)
s=this.a
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
s=new D.y("yaw",s,a)
s.b=!0
this.ai(s)}},
scC:function(a,b){var s
b=V.jp(b,0,6.283185307179586)
s=this.b
$.x().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
s=new D.y("pitch",s,b)
s.b=!0
this.ai(s)}},
scH:function(a){var s
a=V.jp(a,0,6.283185307179586)
s=this.c
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
s=new D.y("roll",s,a)
s.b=!0
this.ai(s)}},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.dr))return!1
s=q.a
r=b.a
$.x().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+"], ["+V.u(s.d,3,0)+", "+V.u(s.e,3,0)+", "+V.u(s.f,3,0)+"]"}}
M.cO.prototype={
a6:function(a){var s=this.y
if(s!=null)s.J(a)},
d5:function(){return this.a6(null)},
dC:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga2(),q=0;q<b.length;b.length===s||(0,H.l)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bd()
o.d=0
p.z=o}n=o.a;(n==null?o.a=[]:n).push(r)}}s=new D.aP()
s.b=!0
this.a6(s)},
dE:function(a,b){var s,r
for(s=b.gI(b),r=this.ga2();s.q();)s.gD(s).gv().C(0,r)
s=new D.aQ()
s.b=!0
this.a6(s)},
scI:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().C(0,r.ga2())
s=r.d
r.d=a
if(a!=null)a.gv().n(0,r.ga2())
q=new D.y("technique",s,r.d)
q.b=!0
r.a6(q)}},
gv:function(){var s=this.y
return s==null?this.y=D.a4():s},
ar:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.cF(d.d)
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
if(typeof q!=="number")return H.G(q)
m=C.d.a0(n*q)
n=o.b
if(typeof p!=="number")return H.G(p)
l=C.d.a0(n*p)
n=C.d.a0(o.c*q)
a.c=n
o=C.d.a0(o.d*p)
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
g=V.ao(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.cE(g)
r=$.jI
if(r==null){r=V.jK()
o=V.j5()
n=$.jZ
r=V.jF(r,o,n==null?$.jZ=new V.v(0,0,-1):n)
$.jI=r
f=r}else f=r
s=s.b
if(s!=null){e=s.a
if(e!=null)f=e.K(0,f)}a.db.cE(f)
s=d.d
if(s!=null)s.aU(0,a)
for(s=d.e.a,s=new J.T(s,s.length);s.q();)s.d.aU(0,a)
for(s=d.e.a,s=new J.T(s,s.length);s.q();)s.d.ar(a)
d.b.toString
a.cy.bt()
a.db.bt()
d.c.toString
a.cD()}}
A.f9.prototype={}
A.fa.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
eP:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
eK:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.O.prototype={
ga1:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.O))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fR.prototype={
cZ:function(c8,c9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5="Required uniform value, ",c6=", was not defined or used in shader.",c7="uniform mat4 objMat;\n"
c3.z=c8
s=new P.b_("")
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
A.mz(c8,s)
A.mB(c8,s)
A.mA(c8,s)
A.mD(c8,s)
A.mE(c8,s)
A.mC(c8,s)
A.mF(c8,s)
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
k=A.my(c3.z)
c3.c=l
c3.d=k
c3.e=c3.bQ(l,35633)
c3.f=c3.bQ(c3.d,35632)
q=c3.a
o=q.createProgram()
c3.r=o
q.attachShader(o,c3.e)
q.attachShader(c3.r,c3.f)
q.linkProgram(c3.r)
if(!q.getProgramParameter(c3.r,35714)){j=q.getProgramInfoLog(c3.r)
q.deleteProgram(c3.r)
H.m(P.n("Failed to link shader: "+H.e(j)))}c3.ep()
c3.er()
c3.Q=c3.x.h(0,"posAttr")
c3.cx=c3.x.h(0,"normAttr")
c3.ch=c3.x.h(0,"binmAttr")
c3.cy=c3.x.h(0,"txt2DAttr")
c3.db=c3.x.h(0,"txtCubeAttr")
c3.dx=c3.x.h(0,"bendAttr")
if(c8.dy)c3.id=t.q.a(c3.y.A(0,"invViewMat"))
if(r)c3.dy=t.q.a(c3.y.A(0,"objMat"))
if(p)c3.fr=t.q.a(c3.y.A(0,"viewObjMat"))
r=t.q
c3.fy=r.a(c3.y.A(0,"projViewObjMat"))
if(c8.go)c3.fx=r.a(c3.y.A(0,"viewMat"))
if(c8.x1)c3.k1=t.O.a(c3.y.A(0,"txt2DMat"))
if(c8.x2)c3.k2=r.a(c3.y.A(0,"txtCubeMat"))
if(c8.y1)c3.k3=r.a(c3.y.A(0,"colorMat"))
c3.r1=[]
q=c8.am
if(q>0){c3.k4=c3.y.A(0,"bendMatCount")
for(i=0;i<q;++i){p=c3.r1
o=c3.y
n="bendValues["+i+"].mat"
h=o.h(0,n)
if(h==null)H.m(P.n(c5+n+c6))
p.push(r.a(h))}}r=c8.a
if(r.a)c3.r2=t.r.a(c3.y.A(0,"emissionClr"))
if(r.b)c3.rx=t.c.a(c3.y.A(0,"emissionTxt"))
r=c8.b
if(r.a)c3.x1=t.r.a(c3.y.A(0,"ambientClr"))
if(r.b)c3.x2=t.c.a(c3.y.A(0,"ambientTxt"))
r=c8.c
if(r.a)c3.y2=t.r.a(c3.y.A(0,"diffuseClr"))
if(r.b)c3.am=t.c.a(c3.y.A(0,"diffuseTxt"))
r=c8.d
if(r.a)c3.aR=t.r.a(c3.y.A(0,"invDiffuseClr"))
if(r.b)c3.cb=t.c.a(c3.y.A(0,"invDiffuseTxt"))
r=c8.e
q=r.a
if(q||r.b||!1){c3.ce=t.n.a(c3.y.A(0,"shininess"))
if(q)c3.cc=t.r.a(c3.y.A(0,"specularClr"))
if(r.b)c3.cd=t.c.a(c3.y.A(0,"specularTxt"))}if(c8.f.b)c3.cf=t.c.a(c3.y.A(0,"bumpTxt"))
if(c8.db){c3.cg=t.Q.a(c3.y.A(0,"envSampler"))
r=c8.r
if(r.a)c3.ci=t.r.a(c3.y.A(0,"reflectClr"))
if(r.b)c3.cj=t.c.a(c3.y.A(0,"reflectTxt"))
r=c8.x
q=r.a
if(q||r.b||!1){c3.ck=t.n.a(c3.y.A(0,"refraction"))
if(q)c3.cl=t.r.a(c3.y.A(0,"refractClr"))
if(r.b)c3.cm=t.c.a(c3.y.A(0,"refractTxt"))}}r=c8.y
if(r.a)c3.cn=t.n.a(c3.y.A(0,"alpha"))
if(r.b)c3.co=t.c.a(c3.y.A(0,"alphaTxt"))
if(c8.k1){r=c8.z
q=r.length
if(q!==0){c3.bf=new H.q(t.J)
c3.bg=new H.q(t.s)
for(p=t.r,o=t.n,g=0;g<r.length;r.length===q||(0,H.l)(r),++g){f=r[g]
e=f.a
d="barLight"+H.e(e)
c=[]
for(n=f.b,i=0;i<n;++i){m=c3.y
b=d+"s["+i+"].startPnt"
h=m.h(0,b)
if(h==null)H.m(P.n(c5+b+c6))
p.a(h)
m=c3.y
b=d+"s["+i+"].endPnt"
a=m.h(0,b)
if(a==null)H.m(P.n(c5+b+c6))
p.a(a)
m=c3.y
b=d+"s["+i+"].color"
a0=m.h(0,b)
if(a0==null)H.m(P.n(c5+b+c6))
p.a(a0)
if(typeof e!=="number")return e.Y()
if((e&4)!==0){m=c3.y
b=d+"s["+i+"].att0"
a1=m.h(0,b)
if(a1==null)H.m(P.n(c5+b+c6))
o.a(a1)
m=c3.y
b=d+"s["+i+"].att1"
a2=m.h(0,b)
if(a2==null)H.m(P.n(c5+b+c6))
o.a(a2)
m=c3.y
b=d+"s["+i+"].att2"
a3=m.h(0,b)
if(a3==null)H.m(P.n(c5+b+c6))
o.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.dP(h,a,a0,a6,a5,a4))}c3.bg.k(0,e,c)
n=c3.bf
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.m(P.n(c5+b+c6))
n.k(0,e,h)}}r=c8.Q
q=r.length
if(q!==0){c3.bh=new H.q(t.J)
c3.bi=new H.q(t.G)
for(p=t.r,o=t.c,g=0;g<r.length;r.length===q||(0,H.l)(r),++g){f=r[g]
e=f.a
d="dirLight"+H.e(e)
c=[]
for(n=f.b,i=0;i<n;++i){if(typeof e!=="number")return e.Y()
m=(e&1)!==0
if(m){b=c3.y
a7=d+"s["+i+"].objUp"
h=b.h(0,a7)
if(h==null)H.m(P.n(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].objRight"
a=b.h(0,a7)
if(a==null)H.m(P.n(c5+a7+c6))
p.a(a)
b=c3.y
a7=d+"s["+i+"].objDir"
a0=b.h(0,a7)
if(a0==null)H.m(P.n(c5+a7+c6))
p.a(a0)
a8=a0
a9=a
b0=h}else{a8=c4
a9=a8
b0=a9}b=c3.y
a7=d+"s["+i+"].viewDir"
h=b.h(0,a7)
if(h==null)H.m(P.n(c5+a7+c6))
p.a(h)
b=c3.y
a7=d+"s["+i+"].color"
a=b.h(0,a7)
if(a==null)H.m(P.n(c5+a7+c6))
p.a(a)
if(m){m=c3.y
b=d+"sTexture2D"+i
a0=m.h(0,b)
if(a0==null)H.m(P.n(c5+b+c6))
o.a(a0)
b1=a0}else b1=c4
c.push(new A.dQ(b0,a9,a8,h,a,b1))}c3.bi.k(0,e,c)
n=c3.bh
m=c3.y
b=d+"Count"
h=m.h(0,b)
if(h==null)H.m(P.n(c5+b+c6))
n.k(0,e,h)}}r=c8.ch
q=r.length
if(q!==0){c3.bj=new H.q(t.J)
c3.bk=new H.q(t.W)
for(p=t.r,o=t.O,n=t.Q,m=t.y,b=t.n,g=0;g<r.length;r.length===q||(0,H.l)(r),++g){f=r[g]
e=f.a
d="pointLight"+H.e(e)
c=[]
for(a7=f.b,i=0;i<a7;++i){b2=c3.y
b3=d+"s["+i+"].point"
h=b2.h(0,b3)
if(h==null)H.m(P.n(c5+b3+c6))
p.a(h)
b2=c3.y
b3=d+"s["+i+"].viewPnt"
a=b2.h(0,b3)
if(a==null)H.m(P.n(c5+b3+c6))
p.a(a)
b2=c3.y
b3=d+"s["+i+"].color"
a0=b2.h(0,b3)
if(a0==null)H.m(P.n(c5+b3+c6))
p.a(a0)
if(typeof e!=="number")return e.Y()
if((e&3)!==0){b2=c3.y
b3=d+"s["+i+"].invViewRotMat"
a1=b2.h(0,b3)
if(a1==null)H.m(P.n(c5+b3+c6))
o.a(a1)
b4=a1}else b4=c4
if((e&1)!==0){b2=c3.y
b3=d+"sTextureCube"+i
a1=b2.h(0,b3)
if(a1==null)H.m(P.n(c5+b3+c6))
n.a(a1)
b1=a1}else b1=c4
if((e&2)!==0){b2=c3.y
b3=d+"sShadowCube"+i
a1=b2.h(0,b3)
if(a1==null)H.m(P.n(c5+b3+c6))
n.a(a1)
b2=c3.y
b3=d+"s["+i+"].shadowAdj"
a2=b2.h(0,b3)
if(a2==null)H.m(P.n(c5+b3+c6))
m.a(a2)
b5=a1
b6=a2}else{b5=c4
b6=b5}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a1=b2.h(0,b3)
if(a1==null)H.m(P.n(c5+b3+c6))
b.a(a1)
b2=c3.y
b3=d+"s["+i+"].att1"
a2=b2.h(0,b3)
if(a2==null)H.m(P.n(c5+b3+c6))
b.a(a2)
b2=c3.y
b3=d+"s["+i+"].att2"
a3=b2.h(0,b3)
if(a3==null)H.m(P.n(c5+b3+c6))
b.a(a3)
a4=a3
a5=a2
a6=a1}else{a4=c4
a5=a4
a6=a5}c.push(new A.dT(h,a,b4,a0,b1,b5,b6,a6,a5,a4))}c3.bk.k(0,e,c)
a7=c3.bj
b2=c3.y
b3=d+"Count"
h=b2.h(0,b3)
if(h==null)H.m(P.n(c5+b3+c6))
a7.k(0,e,h)}}r=c8.cx
q=r.length
if(q!==0){c3.bl=new H.q(t.J)
c3.bm=new H.q(t.M)
for(p=t.r,o=t.n,n=t.y,m=t.c,g=0;g<r.length;r.length===q||(0,H.l)(r),++g){f=r[g]
e=f.a
d="spotLight"+H.e(e)
c=[]
for(b=f.b,i=0;i<b;++i){a7=c3.y
b2=d+"s["+i+"].objPnt"
h=a7.h(0,b2)
if(h==null)H.m(P.n(c5+b2+c6))
p.a(h)
a7=c3.y
b2=d+"s["+i+"].objDir"
a=a7.h(0,b2)
if(a==null)H.m(P.n(c5+b2+c6))
p.a(a)
a7=c3.y
b2=d+"s["+i+"].viewPnt"
a0=a7.h(0,b2)
if(a0==null)H.m(P.n(c5+b2+c6))
p.a(a0)
a7=c3.y
b2=d+"s["+i+"].color"
a1=a7.h(0,b2)
if(a1==null)H.m(P.n(c5+b2+c6))
p.a(a1)
if(typeof e!=="number")return e.Y()
if((e&3)!==0){a7=c3.y
b2=d+"s["+i+"].objUp"
a2=a7.h(0,b2)
if(a2==null)H.m(P.n(c5+b2+c6))
p.a(a2)
a7=c3.y
b2=d+"s["+i+"].objRight"
a3=a7.h(0,b2)
if(a3==null)H.m(P.n(c5+b2+c6))
p.a(a3)
a7=c3.y
b2=d+"s["+i+"].tuScalar"
b7=a7.h(0,b2)
if(b7==null)H.m(P.n(c5+b2+c6))
o.a(b7)
a7=c3.y
b2=d+"s["+i+"].tvScalar"
b8=a7.h(0,b2)
if(b8==null)H.m(P.n(c5+b2+c6))
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
if(a2==null)H.m(P.n(c5+b3+c6))
n.a(a2)
b6=a2}else b6=c4
if((e&8)!==0){b2=c3.y
b3=d+"s["+i+"].cutoff"
a2=b2.h(0,b3)
if(a2==null)H.m(P.n(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].coneAngle"
a3=b2.h(0,b3)
if(a3==null)H.m(P.n(c5+b3+c6))
o.a(a3)
c1=a3
c2=a2}else{c1=c4
c2=c1}if((e&4)!==0){b2=c3.y
b3=d+"s["+i+"].att0"
a2=b2.h(0,b3)
if(a2==null)H.m(P.n(c5+b3+c6))
o.a(a2)
b2=c3.y
b3=d+"s["+i+"].att1"
a3=b2.h(0,b3)
if(a3==null)H.m(P.n(c5+b3+c6))
o.a(a3)
b2=c3.y
b3=d+"s["+i+"].att2"
b7=b2.h(0,b3)
if(b7==null)H.m(P.n(c5+b3+c6))
o.a(b7)
a4=b7
a5=a3
a6=a2}else{a4=c4
a5=a4
a6=a5}if((e&1)!==0){b2=c3.y
b3=d+"sTexture2D"+i
a2=b2.h(0,b3)
if(a2==null)H.m(P.n(c5+b3+c6))
m.a(a2)
b1=a2}else b1=c4
if(a7){a7=c3.y
b2=d+"sShadow2D"+i
a2=a7.h(0,b2)
if(a2==null)H.m(P.n(c5+b2+c6))
m.a(a2)
b5=a2}else b5=c4
c.push(new A.dW(h,a,a0,a1,b0,a9,c0,b9,b6,c2,c1,a6,a5,a4,b1,b5))}c3.bm.k(0,e,c)
b=c3.bl
a7=c3.y
b2=d+"Count"
h=a7.h(0,b2)
if(h==null)H.m(P.n(c5+b2+c6))
b.k(0,e,h)}}}},
a_:function(a,b){if(b!=null&&b.gR(b))a.cS(b)},
el:function(a,b){}}
A.fe.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.fn.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.hf.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.hw.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fU.prototype={
i:function(a){return this.aE}}
A.dP.prototype={}
A.dQ.prototype={}
A.dT.prototype={}
A.dW.prototype={}
A.du.prototype={
d1:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
bQ:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.n("Error compiling shader '"+H.e(q)+"': "+H.e(s)))}return q},
ep:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.G(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.f9(n,r.name,q))}p.x=new A.fa(o)},
er:function(){var s,r,q,p=this,o=[],n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.G(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.eH(r.type,r.size,r.name,q))}p.y=new A.hY(o)},
ah:function(a,b,c){var s=this.a
if(a===1)return new A.dM(s,b,c)
else return A.j4(s,this.r,b,a,c)},
dj:function(a,b,c){var s=this.a
if(a===1)return new A.dU(s,b,c)
else return A.j4(s,this.r,b,a,c)},
dk:function(a,b,c){var s=this.a
if(a===1)return new A.dV(s,b,c)
else return A.j4(s,this.r,b,a,c)},
aQ:function(a,b){return new P.eh(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
eH:function(a,b,c,d){var s=this
switch(a){case 5120:return s.ah(b,c,d)
case 5121:return s.ah(b,c,d)
case 5122:return s.ah(b,c,d)
case 5123:return s.ah(b,c,d)
case 5124:return s.ah(b,c,d)
case 5125:return s.ah(b,c,d)
case 5126:return new A.dL(s.a,c,d)
case 35664:return new A.hU(s.a,c,d)
case 35665:return new A.dN(s.a,c,d)
case 35666:return new A.dO(s.a,c,d)
case 35667:return new A.hV(s.a,c,d)
case 35668:return new A.hW(s.a,c,d)
case 35669:return new A.hX(s.a,c,d)
case 35674:return new A.hZ(s.a,c,d)
case 35675:return new A.dR(s.a,c,d)
case 35676:return new A.dS(s.a,c,d)
case 35678:return s.dj(b,c,d)
case 35680:return s.dk(b,c,d)
case 35670:throw H.c(s.aQ("BOOL",c))
case 35671:throw H.c(s.aQ("BOOL_VEC2",c))
case 35672:throw H.c(s.aQ("BOOL_VEC3",c))
case 35673:throw H.c(s.aQ("BOOL_VEC4",c))
default:throw H.c(P.n("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.hS.prototype={}
A.hY.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
A:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.E()},
E:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.l)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.dM.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.dL.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.dN.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.dO.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.dR.prototype={
Z:function(a){var s=new Float32Array(H.co(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.dS.prototype={
Z:function(a){var s=new Float32Array(H.co(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.dU.prototype={
cS:function(a){var s=a.gR(a),r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.dV.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iy.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.bq(q.b,b).bq(q.d.bq(q.c,b),c)
q=new V.V(p.a,p.b,p.c)
if(!J.D(a.f,q)){a.f=q
q=a.a
if(q!=null)q.O()}a.sfm(p.G())
q=1-b
s=1-c
s=new V.dl(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.D(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.O()}}}
F.fz.prototype={
aB:function(){var s=this
if(!s.gaC()){C.a.C(s.a.a.d.b,s)
s.a.a.O()}s.b5()
s.b6()
s.ef()},
em:function(a){this.a=a
a.d.b.push(this)},
en:function(a){this.b=a
a.d.c.push(this)},
eo:function(a){this.c=a
a.d.d.push(this)},
b5:function(){var s=this.a
if(s!=null){C.a.C(s.d.b,this)
this.a=null}},
b6:function(){var s=this.b
if(s!=null){C.a.C(s.d.c,this)
this.b=null}},
ef:function(){var s=this.c
if(s!=null){C.a.C(s.d.d,this)
this.c=null}},
gaC:function(){return this.a==null||this.b==null||this.c==null},
dd:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.c1()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.cs())return p
return q.G()},
df:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.T(0,n)
q=new V.v(o.a,o.b,o.c).G()
o=r.T(0,n)
return q.aA(new V.v(o.a,o.b,o.c).G()).G()},
bc:function(){var s,r=this
if(r.d!=null)return!0
s=r.dd()
if(s==null){s=r.df()
if(s==null)return!1}r.d=s
r.a.a.O()
return!0},
dc:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.c1()
if(n!=null)q=q.u(0,n)
if(s!=null)q=q.u(0,s)
if(r!=null)q=q.u(0,r)
if(q.cs())return p
return q.G()},
de:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.x().toString
if(Math.abs(p-0)<1e-9){j=b.T(0,e)
o=new V.v(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.au(0)}else{n=(j-s.b)/p
j=b.T(0,e)
j=new V.V(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).T(0,h)
o=new V.v(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.au(0)}j=l.d
if(j!=null){m=j.G()
o=m.aA(o).G().aA(m).G()}return o},
ba:function(){var s,r=this
if(r.e!=null)return!0
s=r.dc()
if(s==null){s=r.de()
if(s==null)return!1}r.e=s
r.a.a.O()
return!0},
geC:function(a){var s=this
if(J.D(s.a,s.b))return!0
if(J.D(s.b,s.c))return!0
if(J.D(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var s,r,q=this
if(q.gaC())return a+"disposed"
s=a+C.b.X(J.S(q.a.e),0)+", "+C.b.X(J.S(q.b.e),0)+", "+C.b.X(J.S(q.c.e),0)+" {"
r=q.d
s=r!=null?s+(r.i(0)+", "):s+"-, "
r=q.e
return r!=null?s+(r.i(0)+"}"):s+"-}"},
E:function(){return this.t("")}}
F.fA.prototype={}
F.hv.prototype={
aF:function(a,b,c){var s,r=b.a
r.a.a.p()
r=r.e
s=c.a
s.a.a.p()
if(r==s.e){r=b.b
r.a.a.p()
r=r.e
s=c.b
s.a.a.p()
if(r==s.e){r=b.c
r.a.a.p()
r=r.e
s=c.c
s.a.a.p()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.p()
r=r.e
s=c.b
s.a.a.p()
if(r==s.e){r=b.b
r.a.a.p()
r=r.e
s=c.c
s.a.a.p()
if(r==s.e){r=b.c
r.a.a.p()
r=r.e
s=c.a
s.a.a.p()
s=r==s.e
r=s}else r=!1
return r}else{r=b.a
r.a.a.p()
r=r.e
s=c.c
s.a.a.p()
if(r==s.e){r=b.b
r.a.a.p()
r=r.e
s=c.a
s.a.a.p()
if(r==s.e){r=b.c
r.a.a.p()
r=r.e
s=c.b
s.a.a.p()
s=r==s.e
r=s}else r=!1
return r}else return!1}}}}
F.fK.prototype={
aB:function(){var s=this
if(!s.gaC()){C.a.C(s.a.a.c.b,s)
s.a.a.O()}s.b5()
s.b6()},
b5:function(){var s=this.a
if(s!=null){C.a.C(s.c.b,this)
this.a=null}},
b6:function(){var s=this.b
if(s!=null){C.a.C(s.c.c,this)
this.b=null}},
gaC:function(){return this.a==null||this.b==null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){if(this.gaC())return a+"disposed"
return a+C.b.X(J.S(this.a.e),0)+", "+C.b.X(J.S(this.b.e),0)},
E:function(){return this.t("")}}
F.fL.prototype={}
F.hR.prototype={
aF:function(a,b,c){var s,r=b.a
r.a.a.p()
r=r.e
s=c.a
s.a.a.p()
if(r==s.e){r=b.b
r.a.a.p()
r=r.e
s=c.b
s.a.a.p()
return r==s.e}else{r=b.a
r.a.a.p()
r=r.e
s=c.b
s.a.a.p()
if(r==s.e){r=b.b
r.a.a.p()
r=r.e
s=c.a
s.a.a.p()
return r==s.e}else return!1}}}
F.he.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.b.X(J.S(s.e),0)},
E:function(){return this.t("")}}
F.ho.prototype={
gv:function(){var s=this.e
return s==null?this.e=D.a4():s},
br:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.e
if(e!=null)++e.d
a.a.p()
s=f.a.c.length
for(e=a.a.c,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){p=e[q]
f.a.n(0,p.eG())}f.a.p()
for(e=a.b.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){o=e[q]
n=f.a
m=o.a
m.a.a.p()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
l=n[m]
f.b.a.a.n(0,l)
m=new F.he()
if(l.a==null)H.m(P.n("May not create a point with a vertex which is not attached to a shape."))
m.a=l
l.b.b.push(m)
m.a.a.b.b.push(m)
n=m.a.a.e
if(n!=null)n.J(null)}for(e=a.c.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){k=e[q]
n=f.a
m=k.a
m.a.a.p()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=k.b
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.c.a
n.a.n(0,j)
n.a.n(0,i)
n=new F.fK()
m=j.a
if(m==null)H.m(P.n("May not create a line with a start vertex which is not attached to a shape."))
if(m!=i.a)H.m(P.n("May not create a line with vertices attached to different shapes."))
n.a=j
j.c.b.push(n)
n.b=i
i.c.c.push(n)
n.a.a.c.b.push(n)
n=n.a.a.e
if(n!=null)n.J(null)}for(e=a.d.b,r=e.length,q=0;q<e.length;e.length===r||(0,H.l)(e),++q){h=e[q]
n=f.a
m=h.a
m.a.a.p()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
j=n[m]
m=f.a
n=h.b
n.a.a.p()
n=n.e
if(typeof n!=="number")return n.u()
n+=s
m=m.c
if(n>=m.length)return H.d(m,n)
i=m[n]
n=f.a
m=h.c
m.a.a.p()
m=m.e
if(typeof m!=="number")return m.u()
m+=s
n=n.c
if(m>=n.length)return H.d(n,m)
g=n[m]
m=f.d.a
m.a.n(0,j)
m.a.n(0,i)
m.a.n(0,g)
F.cP(j,i,g)}e=f.e
if(e!=null)e.a4(0)},
ak:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.ak()||!1
if(!r.a.ak())s=!1
q=r.e
if(q!=null)q.a4(0)
return s},
eX:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.a.c.slice(0)
for(;s.length!==0;){r=C.a.geR(s)
C.a.bu(s,0)
if(r!=null){q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(o!=null&&a.aF(0,r,o)){q.push(o)
C.a.bu(s,p)}}if(q.length>1)b.br(q)}}n.a.p()
n.c.bv()
n.d.bv()
n.b.fd()
n.c.bw(new F.hR())
n.d.bw(new F.hv())
m=n.e
if(m!=null)m.a4(0)},
eA:function(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=34962,a3=a1.a.c.length
a5.toString
s=a5.a
r=(s&$.aF().a)!==0?1:0
if((s&$.aE().a)!==0)++r
if((s&$.aD().a)!==0)++r
if((s&$.aG().a)!==0)++r
if((s&$.b5().a)!==0)++r
if((s&$.cw().a)!==0)++r
if((s&$.cx().a)!==0)++r
if((s&$.bB().a)!==0)++r
if((s&$.aC().a)!==0)++r
q=a5.gbA(a5)
p=q*4
s=a3*q
o=new Array(s)
o.fixed$length=Array
n=new Array(r)
n.fixed$length=Array
for(m=0,l=0;l<r;++l){k=a5.ey(l)
j=k.gbA(k)
n[l]=new Z.fg(k,j,m*4,p)
for(i=0;i<a3;++i){h=a1.a.c
if(i>=h.length)return H.d(h,i)
g=h[i].eW(k)
f=m+i*q
for(h=g.length,e=0;e<h;++e){d=g[e]
if(f<0||f>=s)return H.d(o,f)
o[f]=d;++f}}m+=j}s=a4.a
c=s.createBuffer()
s.bindBuffer(a2,c)
s.bufferData(a2,new Float32Array(H.co(o)),35044)
s.bindBuffer(a2,null)
b=new Z.cF(new Z.e2(a2,c),n,a5)
b.b=[]
if(a1.b.b.length!==0){a=[]
for(l=0;h=a1.b.b,l<h.length;++l){h=h[l].a
h.a.a.p()
a.push(h.e)}a0=Z.j6(s,34963,a)
b.b.push(new Z.bK(0,a.length,a0))}if(a1.c.b.length!==0){a=[]
for(l=0;h=a1.c.b,l<h.length;++l){h=h[l].a
h.a.a.p()
a.push(h.e)
h=a1.c.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.p()
a.push(h.e)}a0=Z.j6(s,34963,a)
b.b.push(new Z.bK(1,a.length,a0))}if(a1.d.b.length!==0){a=[]
for(l=0;h=a1.d.b,l<h.length;++l){h=h[l].a
h.a.a.p()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].b
h.a.a.p()
a.push(h.e)
h=a1.d.b
if(l>=h.length)return H.d(h,l)
h=h[l].c
h.a.a.p()
a.push(h.e)}a0=Z.j6(s,34963,a)
b.b.push(new Z.bK(4,a.length,a0))}return b},
i:function(a){var s=this,r="   ",q=[]
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.t(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.t(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.t(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.t(r))}return C.a.l(q,"\n")},
O:function(){var s=this.e
if(s!=null)s.J(null)}}
F.hp.prototype={
ex:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=[]
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
if(n){l.n(0,k)
s.a.n(0,j)
s.a.n(0,h)
f.push(F.cP(k,j,h))
s.a.n(0,k)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cP(k,h,g))}else{l.n(0,j)
s.a.n(0,h)
s.a.n(0,g)
f.push(F.cP(j,h,g))
s.a.n(0,j)
s.a.n(0,g)
s.a.n(0,k)
f.push(F.cP(j,g,k))}n=!n}p=!p}return f},
gj:function(a){return this.b.length},
bw:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.d,o=q.b.length+q.c.length+q.d.length-1;o>=0;--o){n=p.d.h(0,o)
for(m=o-1;m>=0;--m){l=p.d.h(0,m)
if(a.aF(0,n,l)){n.aB()
break}}}}},
bv:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.geC(q)
if(r)q.aB()}},
ak:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].bc())q=!1
return q},
bb:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.l)(s),++p)if(!s[p].ba())q=!1
return q},
i:function(a){return this.E()},
t:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(a))
return C.a.l(p,"\n")},
E:function(){return this.t("")}}
F.hq.prototype={
gj:function(a){return this.b.length},
bw:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.a.c.length-1;r>=0;--r){q=s.a.c
if(r>=q.length)return H.d(q,r)
p=q[r]
for(q=p.c,o=q.b.length+q.c.length-1;o>=0;--o){n=p.c.h(0,o)
for(m=o-1;m>=0;--m){l=p.c.h(0,m)
if(a.aF(0,n,l)){n.aB()
break}}}}},
bv:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=J.D(q.a,q.b)
if(r)q.aB()}},
i:function(a){return this.E()},
t:function(a){var s,r,q=[],p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q.push(r[s].t(a+(""+s+". ")))}return C.a.l(q,"\n")},
E:function(){return this.t("")}}
F.hr.prototype={
gj:function(a){return this.b.length},
fd:function(){var s,r,q
for(s=this.b.length-1;s>=0;--s){r=this.b
if(s>=r.length)return H.d(r,s)
r=r[s]
q=r.a
if(q.b.b.length>1){q=q.a
C.a.C(q.b.b,r)
q=r.a.a.e
if(q!=null)q.J(null)
q=r.a
if(q!=null){C.a.C(q.b.b,r)
r.a=null}}}},
i:function(a){return this.E()},
t:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(a))
return C.a.l(p,"\n")},
E:function(){return this.t("")}}
F.i5.prototype={
be:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.k0(s.cx,p,m,r,q,o,n,a,l)},
eG:function(){return this.be(null)},
sfm:function(a){var s
if(!J.D(this.z,a)){this.z=a
s=this.a
if(s!=null)s.O()}},
eW:function(a){var s,r=this
if(a.m(0,$.aF())){s=r.f
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.m(0,$.aE())){s=r.r
if(s==null)return[0,1,0]
else return[s.a,s.b,s.c]}else if(a.m(0,$.aD())){s=r.x
if(s==null)return[0,0,1]
else return[s.a,s.b,s.c]}else if(a.m(0,$.aG())){s=r.y
if(s==null)return[0,0]
else return[s.a,s.b]}else if(a.m(0,$.b5())){s=r.z
if(s==null)return[0,0,0]
else return[s.a,s.b,s.c]}else if(a.m(0,$.cw())){s=r.Q
if(s==null)return[1,1,1]
else return[s.a,s.b,s.c]}else if(a.m(0,$.cx())){s=r.Q
if(s==null)return[1,1,1,1]
else return[s.a,s.b,s.c,s.d]}else if(a.m(0,$.bB()))return[r.ch]
else if(a.m(0,$.aC())){s=r.cx
if(s==null)return[-1,-1,-1,-1]
else return[s.a,s.b,s.c,s.d]}else return[]},
bc:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.c1()
r.d.B(0,new F.ih(q))
r.r=q.a.G()
q=r.a
if(q!=null){q.O()
q=r.a.e
if(q!=null)q.a4(0)}return!0},
ba:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.c1()
r.d.B(0,new F.ig(q))
r.x=q.a.G()
q=r.a
if(q!=null){q.O()
q=r.a.e
if(q!=null)q.a4(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.E()},
t:function(a){var s,r,q=this,p="-",o=[]
o.push(C.b.X(J.S(q.e),0))
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
o.push(V.u(q.ch,3,0))
s=q.cx
if(s!=null)o.push(s.i(0))
else o.push(p)
r=C.a.l(o,", ")
return a+"{"+r+"}"},
E:function(){return this.t("")}}
F.ih.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.ig.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.u(0,r)}}}
F.i6.prototype={
p:function(){var s,r,q,p
if(this.b){s=this.c
r=s.length
for(q=0,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
s[p].e=q;++q}this.b=!1}},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.n("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.O()
return!0},
c1:function(a,b){var s=null,r=F.k0(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gj:function(a){return this.c.length},
ak:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].bc()
return!0},
bb:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)s[q].ba()
return!0},
eB:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
if(p.z==null){o=p.r.G()
if(!J.D(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}}return!0},
i:function(a){return this.E()},
t:function(a){var s,r,q,p
this.p()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.l)(r),++p)s.push(r[p].t(a))
return C.a.l(s,"\n")},
E:function(){return this.t("")}}
F.i7.prototype={
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
B:function(a,b){var s=this
C.a.B(s.b,b)
C.a.B(s.c,new F.i8(s,b))
C.a.B(s.d,new F.i9(s,b))},
i:function(a){return this.E()},
E:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(""))
return C.a.l(p,"\n")}}
F.i8.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.i9.prototype={
$1:function(a){var s=this.a
if(!J.D(a.a,s)&&!J.D(a.b,s))this.b.$1(a)}}
F.ia.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.E()},
E:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(""))
return C.a.l(p,"\n")}}
F.ic.prototype={}
F.ib.prototype={
aF:function(a,b,c){return J.D(b.f,c.f)}}
F.id.prototype={}
F.hc.prototype={
br:function(a){var s,r,q,p,o,n,m=V.c1()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)m=new V.v(m.a+q.a,m.b+q.b,m.c+q.c)}m=m.G()
for(s=a.length,q=m==null,r=0;r<a.length;a.length===s||(0,H.l)(a),++r){p=a[r]
o=q?null:m.G()
if(!J.D(p.r,o)){p.r=o
n=p.a
if(n!=null){n=n.e
if(n!=null)n.J(null)}}}return null}}
F.ie.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.E()},
E:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q)p.push(s[q].t(""))
return C.a.l(p,"\n")}}
O.d3.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.a4():s},
M:function(a){var s=this.fr
if(s!=null)s.J(a)},
aW:function(){return this.M(null)},
bV:function(a){this.a=null
this.M(a)},
ej:function(){return this.bV(null)},
du:function(a,b){var s=new D.aP()
s.b=!0
this.M(s)},
dw:function(a,b){var s=new D.aQ()
s.b=!0
this.M(s)},
bO:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.q(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.ga3()
n=d.h(0,p.ga3())
d.k(0,o,n==null?1:n)}m=[]
d.B(0,new O.fY(f,m))
C.a.aw(m,new O.fZ())
l=new H.q(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){o=l.h(0,0)
l.k(0,0,o==null?1:o)}k=[]
l.B(0,new O.h_(f,k))
C.a.aw(k,new O.h0())
j=new H.q(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.l)(s),++q){p=s[q]
o=p.ga3()
n=j.h(0,p.ga3())
j.k(0,o,n==null?1:n)}i=[]
j.B(0,new O.h1(f,i))
C.a.aw(i,new O.h2())
h=new H.q(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.l)(e),++q){p=e[q]
r=p.ga3()
o=h.h(0,p.ga3())
h.k(0,r,o==null?1:o)}g=[]
h.B(0,new O.h3(f,g))
C.a.aw(g,new O.h4())
e=C.c.P(f.e.a.length+3,4)
f.dy.toString
return A.le(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
V:function(a,b){if(b!=null)if(!C.a.H(a,b)){b.a=a.length
a.push(b)}},
aU:function(a,b){var s,r,q,p,o
for(s=this.dx.a,s=new J.T(s,s.length);s.q();){r=s.d
r.toString
q=$.i4
if(q==null)q=$.i4=new V.v(0,0,1)
r.a=q
p=$.i3
r.d=p==null?$.i3=new V.v(0,1,0):p
p=$.i2
r.e=p==null?$.i2=new V.v(-1,0,0):p
p=r.b
if(p!=null){o=p.a
if(o!=null){r.a=o.aT(q).G()
r.d=o.aT(r.d).G()
r.e=o.aT(r.e).G()}}}},
ff:function(b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=b4.a
if(b5==null){b5=b4.bO()
s=b6.fr.h(0,b5.aE)
if(s==null){s=A.ld(b5,b6.a)
r=s.b
if(r.length===0)H.m(P.n("May not cache a shader with no name."))
if(b6.fr.eE(0,r))H.m(P.n('Shader cache already contains a shader by the name "'+r+'".'))
b6.fr.k(0,r,s)}b5=b4.a=s
b7.e=null}q=b5.z
p=q.aR
b5=b7.e
if(!(b5 instanceof Z.cF))b5=b7.e=null
if(b5==null||!b5.d.m(0,p)){b5=q.k4
if(b5)b7.d.ak()
o=q.r1
if(o){n=b7.d
m=n.e
if(m!=null)++m.d
n.d.bb()
n.a.bb()
n=n.e
if(n!=null)n.a4(0)}n=q.rx
if(n){m=b7.d
l=m.e
if(l!=null)++l.d
m.a.eB()
m=m.e
if(m!=null)m.a4(0)}k=b7.d.eA(new Z.ii(b6.a),p)
k.an($.aF()).e=b4.a.Q.c
if(b5)k.an($.aE()).e=b4.a.cx.c
if(o)k.an($.aD()).e=b4.a.ch.c
if(q.r2)k.an($.aG()).e=b4.a.cy.c
if(n)k.an($.b5()).e=b4.a.db.c
if(q.ry)k.an($.aC()).e=b4.a.dx.c
b7.e=k}j=[]
b5=b4.a
o=b6.a
o.useProgram(b5.r)
b5.x.eP()
if(q.fr){b5=b4.a
n=b6.dx
n=n.gN(n)
b5=b5.dy
b5.toString
b5.Z(n.U(0,!0))}if(q.fx){b5=b4.a
n=b6.cx
if(n==null){n=b6.db
n=n.gN(n)
m=b6.dx
m=b6.cx=n.K(0,m.gN(m))
n=m}b5=b5.fr
b5.toString
b5.Z(n.U(0,!0))}b5=b4.a
n=b6.ch
if(n==null){n=b6.gfc()
m=b6.dx
m=b6.ch=n.K(0,m.gN(m))
n=m}b5=b5.fy
b5.toString
b5.Z(n.U(0,!0))
if(q.go){b5=b4.a
n=b6.db
n=n.gN(n)
b5=b5.fx
b5.toString
b5.Z(n.U(0,!0))}if(q.x1){b5=b4.a
n=b4.b
b5=b5.k1
b5.toString
b5.Z(C.f.U(n,!0))}if(q.x2){b5=b4.a
n=b4.c
b5=b5.k2
b5.toString
b5.Z(C.f.U(n,!0))}if(q.y1){b5=b4.a
n=b4.d
b5=b5.k3
b5.toString
b5.Z(C.f.U(n,!0))}if(q.am>0){i=b4.e.a.length
b5=b4.a.k4
b5.a.uniform1i(b5.d,i)
for(h=0;h<i;++h){b5=b4.a
n=b4.e.a
if(h>=n.length)return H.d(n,h)
n=n[h]
b5=b5.r1
if(h>=b5.length)return H.d(b5,h)
b5=b5[h]
g=new Float32Array(H.co(n.U(0,!0)))
b5.a.uniformMatrix4fv(b5.d,!1,g)}}b5=q.a
if(b5.a){n=b4.a
m=b4.f.f
n=n.r2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.f.d)
b5=b4.a
n=b4.f.d
b5.a_(b5.rx,n)}if(q.k1){b5=q.b
if(b5.a){n=b4.a
m=b4.r.f
n=n.x1
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.r.d)
b5=b4.a
n=b4.r.d
b5.a_(b5.x2,n)}b5=q.c
if(b5.a){n=b4.a
m=b4.x.f
n=n.y2
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.x.d)
b5=b4.a
n=b4.x.d
b5.a_(b5.am,n)}b5=q.d
if(b5.a){n=b4.a
m=b4.y.f
n=n.aR
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.y.d)
b5=b4.a
n=b4.y.d
b5.a_(b5.cb,n)}b5=q.e
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.z.ch
m=m.ce
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.z.f
n=n.cc
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.z.d)
b5=b4.a
n=b4.z.d
b5.a_(b5.cd,n)}b5=q.z
if(b5.length>0){f=new H.q(t.a)
for(n=b4.dx.e,m=n.length,e=0;e<n.length;n.length===m||(0,H.l)(n),++e){d=n[e]
c=d.ga3()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
a=J.cy(b4.a.bg.h(0,c),b)
l=d.gft()
a0=$.ag
l=l.aK(a0==null?$.ag=new V.V(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gfA()
a0=$.ag
l=l.aK(a0==null?$.ag=new V.V(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaz(d)
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
if(d.gca()){l=d.gc3()
a0=a.e
a0.a.uniform1f(a0.d,l)
l=d.gc4()
a0=a.f
a0.a.uniform1f(a0.d,l)
l=d.gc5()
a0=a.r
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.l)(b5),++e){m=b5[e].a
i=f.h(0,m)
if(i==null)i=0
m=b4.a.bf.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.Q
if(b5.length>0){n=b6.db
a1=n.gN(n)
a2=new H.q(t.a)
for(n=b4.dx.f,m=n.length,e=0;e<n.length;n.length===m||(0,H.l)(n),++e){d=n[e]
b=a2.h(0,0)
if(b==null)b=0
a2.k(0,0,b+1)
a=J.cy(b4.a.bi.h(0,0),b)
l=a1.aT(d.a).G()
a0=a.e
a3=l.a
a4=l.b
l=l.c
a0.a.uniform3f(a0.d,a3,a4,l)
l=d.c
a4=a.f
a4.a.uniform3f(a4.d,l.a,l.b,l.c)}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.l)(b5),++e){m=b5[e].a
i=a2.h(0,m)
if(i==null)i=0
m=b4.a.bh.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.ch
if(b5.length>0){n=b6.db
a1=n.gN(n)
a5=new H.q(t.a)
for(n=b4.dx.r,m=n.length,e=0;e<n.length;n.length===m||(0,H.l)(n),++e){d=n[e]
c=d.ga3()
b=a5.h(0,c)
if(b==null)b=0
a5.k(0,c,b+1)
a=J.cy(b4.a.bk.h(0,c),b)
a6=a1.K(0,d.gN(d))
l=d.gN(d)
a0=$.ag
l=l.aK(a0==null?$.ag=new V.V(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=$.ag
l=a6.aK(l==null?$.ag=new V.V(0,0,0):l)
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaz(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gae()
l=a6.cq(0)
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
g=new Float32Array(H.co(new V.d4(a0,a3,a4,a7,a8,a9,b0,b1,l).U(0,!0)))
b2.a.uniformMatrix3fv(b2.d,!1,g)
d.gae()
l=d.gae()
if(!C.a.H(j,l)){l.a=j.length
j.push(l)}l=d.gae()
a0=l.gR(l)
if(a0){a0=a.f
a0.toString
a3=l.gR(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.geT(l))}d.gav()
l=d.gcT()
a0=a.x
a0.toString
a3=l.geM(l)
a4=l.geN(l)
a7=l.geO()
l=l.geL()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gav()
if(!C.a.H(j,l)){l.a=j.length
j.push(l)}l=d.gav()
a0=l.gR(l)
if(a0){a0=a.r
a0.toString
a3=l.gR(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.geT(l))}if(d.gca()){l=d.gc3()
a0=a.y
a0.a.uniform1f(a0.d,l)
l=d.gc4()
a0=a.z
a0.a.uniform1f(a0.d,l)
l=d.gc5()
a0=a.Q
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.l)(b5),++e){m=b5[e].a
i=a5.h(0,m)
if(i==null)i=0
m=b4.a.bj.h(0,m)
m.a.uniform1i(m.d,i)}}b5=q.cx
if(b5.length>0){n=b6.db
a1=n.gN(n)
b3=new H.q(t.a)
for(n=b4.dx.x,m=n.length,e=0;e<n.length;n.length===m||(0,H.l)(n),++e){d=n[e]
c=d.ga3()
b=b3.h(0,c)
if(b==null)b=0
b3.k(0,c,b+1)
a=J.cy(b4.a.bm.h(0,c),b)
l=d.gfb(d)
a0=a.b
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gfw(d).G()
a0=a.c
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=a1.aK(d.gfb(d))
a0=a.d
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gaz(d)
a0=a.e
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
d.gae()
l=d.gfN()
a0=a.f
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gfK(d)
a0=a.r
a0.a.uniform3f(a0.d,l.a,l.b,l.c)
l=d.gfL()
a0=a.x
a0.a.uniform1f(a0.d,l)
l=d.gfM()
a0=a.y
a0.a.uniform1f(a0.d,l)
d.gae()
l=d.gae()
if(!C.a.H(j,l)){l.a=j.length
j.push(l)}l=d.gae()
a0=l.gR(l)
if(a0){a0=a.dx
a0.toString
a3=l.gR(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}d.gav()
l=d.gcT()
a0=a.z
a0.toString
a3=l.geM(l)
a4=l.geN(l)
a7=l.geO()
l=l.geL()
a0.a.uniform4f(a0.d,a3,a4,a7,l)
l=d.gav()
if(!C.a.H(j,l)){l.a=j.length
j.push(l)}l=d.gav()
a0=l.gR(l)
if(a0){a0=a.dy
a0.toString
a3=l.gR(l)
a4=a0.a
a0=a0.d
if(!a3)a4.uniform1i(a0,0)
else a4.uniform1i(a0,l.a)}if(d.gfz()){l=d.gfv()
a0=a.Q
a0.a.uniform1f(a0.d,l)
l=d.gfu()
a0=a.ch
a0.a.uniform1f(a0.d,l)}if(d.gca()){l=d.gc3()
a0=a.cx
a0.a.uniform1f(a0.d,l)
l=d.gc4()
a0=a.cy
a0.a.uniform1f(a0.d,l)
l=d.gc5()
a0=a.db
a0.a.uniform1f(a0.d,l)}}for(n=b5.length,e=0;e<b5.length;b5.length===n||(0,H.l)(b5),++e){m=b5[e].a
i=b3.h(0,m)
if(i==null)i=0
m=b4.a.bl.h(0,m)
m.a.uniform1i(m.d,i)}}}if(q.f.b){b4.V(j,b4.Q.d)
b5=b4.a
n=b4.Q.d
b5.a_(b5.cf,n)}if(q.dy){b5=b4.a
n=b6.Q
if(n==null){n=b6.db
n=b6.Q=n.gN(n).cq(0)}b5=b5.id
b5.toString
b5.Z(n.U(0,!0))}if(q.db){b4.V(j,b4.ch)
b5=b4.a
n=b4.ch
b5.el(b5.cg,n)
b5=q.r
if(b5.a){n=b4.a
m=b4.cx.f
n=n.ci
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.cx.d)
b5=b4.a
n=b4.cx.d
b5.a_(b5.cj,n)}b5=q.x
n=b5.a
if(n||b5.b||!1){m=b4.a
l=b4.cy.ch
m=m.ck
m.a.uniform1f(m.d,l)}if(n){n=b4.a
m=b4.cy.f
n=n.cl
n.a.uniform3f(n.d,m.a,m.b,m.c)}if(b5.b){b4.V(j,b4.cy.d)
b5=b4.a
n=b4.cy.d
b5.a_(b5.cm,n)}}b5=q.y
n=b5.a
m=!n
if(!m||b5.b||!1){if(n){n=b4.a
l=b4.db.f
n=n.cn
n.a.uniform1f(n.d,l)}if(b5.b){b4.V(j,b4.db.d)
n=b4.a
l=b4.db.d
n.a_(n.co,l)}o.enable(3042)
o.blendFunc(770,771)}for(h=0;h<j.length;++h){n=j[h]
if(n.d==null){n=n.d=n.c
if(n!=null)n.ab(b6)}}n=b7.e
n.ab(b6)
n.ar(b6)
n.aL(b6)
if(!m||b5.b||!1)o.disable(3042)
for(h=0;h<j.length;++h){b5=j[h]
n=b5.d
if(n!=null){n.aL(b6)
b5.d=null}}b5=b4.a
b5.toString
o.useProgram(null)
b5.x.eK()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.bO().aE}}
O.fY.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fe(a,C.c.P(b+3,4)*4))}}
O.fZ.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.h_.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.fn(a,C.c.P(b+3,4)*4))}}
O.h0.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.h1.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hf(a,C.c.P(b+3,4)*4))}}
O.h2.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.h3.prototype={
$2:function(a,b){if(typeof b!=="number")return b.u()
return this.b.push(new A.hw(a,C.c.P(b+3,4)*4))}}
O.h4.prototype={
$2:function(a,b){return J.cz(a.a,b.a)}}
O.fS.prototype={
a9:function(){var s,r=this
r.bD()
s=r.f
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
s=new D.y(r.b,s,1)
s.b=!0
r.a.M(s)}}}
O.bS.prototype={
M:function(a){return this.a.M(a)},
aW:function(){return this.M(null)},
a9:function(){},
bY:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.a9()
s=q.a
s.a=null
s.M(null)}},
scJ:function(a){var s,r=this,q=r.c
if(!q.b)r.bY(new A.O(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gv().C(0,r.gaM())
s=r.d
r.d=a
a.gv().n(0,r.gaM())
q=new D.y(r.b+".texture2D",s,r.d)
q.b=!0
r.a.M(q)}}}
O.fT.prototype={}
O.af.prototype={
bX:function(a){var s,r,q=this
if(!q.f.m(0,a)){s=q.f
q.f=a
r=new D.y(q.b+".color",s,a)
r.b=!0
q.a.M(r)}},
a9:function(){this.bD()
this.bX(new V.M(1,1,1))},
saz:function(a,b){this.bY(new A.O(!0,this.c.b,!1))
this.bX(b)}}
O.fV.prototype={}
O.fW.prototype={
a9:function(){var s,r=this
r.bE()
s=r.ch
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.y(r.b+".refraction",s,1)
s.b=!0
r.a.M(s)}}}
O.fX.prototype={
a9:function(){var s,r=this
r.bE()
s=r.ch
$.x().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
s=new D.y(r.b+".shininess",s,100)
s.b=!0
r.a.M(s)}}}
O.hC.prototype={}
T.hD.prototype={}
T.hE.prototype={}
T.hF.prototype={
gR:function(a){var s=this.d
s=s==null?null:s.gR(s)
if(s==null){s=this.c
s=s==null?null:s.gR(s)}return s===!0},
gv:function(){var s=this.f
return s==null?this.f=D.a4():s},
ab:function(a){var s
if(this.d==null){s=this.d=this.c
if(s!=null)s.ab(a)}},
aL:function(a){var s=this.d
if(s!=null){s.aL(a)
this.d=null}}}
T.hG.prototype={
gR:function(a){return this.d},
ab:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
aL:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.hH.prototype={
ap:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.hG()
r.a=0
r.b=o
r.d=r.c=!1
W.L(s,"load",new T.hI(this,r,s,!1,o,!1,!1),!1)
return r},
ek:function(a,b,c){var s,r,q,p
b=V.jn(b)
s=V.jn(a.width)
r=V.jn(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.iS()
q.width=s
q.height=r
p=C.o.cP(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.mZ(p.getImageData(0,0,q.width,q.height))}}}
T.hI.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.ek(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.M.fl(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.c9()}++s.e}}
X.iR.prototype={}
X.fE.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.a4():s}}
X.dh.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.a4():s},
ag:function(a){var s=this.f
if(s!=null)s.J(a)},
d8:function(){return this.ag(null)},
saG:function(a){var s,r,q=this
if(!J.D(q.b,a)){s=q.b
if(s!=null)s.gv().C(0,q.gbJ())
r=q.b
q.b=a
if(a!=null)a.gv().n(0,q.gbJ())
s=new D.y("mover",r,q.b)
s.b=!0
q.ag(s)}}}
X.hA.prototype={}
V.iM.prototype={
$1:function(a){var s=C.d.cK(this.a.geS(),2)
if(s!=="0.00")P.jo(s+" fps")}}
V.hs.prototype={
d2:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.L(o,"scroll",new V.hu(m),!1)},
c2:function(a){var s,r,q,p,o,n,m,l
this.eq()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.a.eV(a)
q.toString
p=new H.F(p)
p=new P.bt(q.cL(new H.bg(p,p.gj(p))).a())
for(;p.q();){q=p.gD(p)
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
if(H.kt(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.d(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.m_(C.I,q,C.n,!1)
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
eq:function(){var s,r,q,p="Start",o="Bold",n="Italic",m="ItalicEnd",l="Code",k="LinkHead",j="LinkTail",i="LinkEnd",h="Other"
if(this.b!=null)return
s=new L.hL()
s.a=new H.q(t.V)
s.b=new H.q(t.w)
s.c=P.jD(t.f)
s.d=s.F(0,p)
r=s.F(0,p).l(0,o)
q=K.N(new H.F("*"))
r.a.push(q)
r.c=!0
r=s.F(0,o).l(0,o)
q=new K.ap()
q.a=[]
r.a.push(q)
r=K.N(new H.F("*"))
q.a.push(r)
r=s.F(0,o).l(0,"BoldEnd")
q=K.N(new H.F("*"))
r.a.push(q)
r.c=!0
r=s.F(0,p).l(0,n)
q=K.N(new H.F("_"))
r.a.push(q)
r.c=!0
r=s.F(0,n).l(0,n)
q=new K.ap()
q.a=[]
r.a.push(q)
r=K.N(new H.F("_"))
q.a.push(r)
r=s.F(0,n).l(0,m)
q=K.N(new H.F("_"))
r.a.push(q)
r.c=!0
r=s.F(0,p).l(0,l)
q=K.N(new H.F("`"))
r.a.push(q)
r.c=!0
r=s.F(0,l).l(0,l)
q=new K.ap()
q.a=[]
r.a.push(q)
r=K.N(new H.F("`"))
q.a.push(r)
r=s.F(0,l).l(0,"CodeEnd")
q=K.N(new H.F("`"))
r.a.push(q)
r.c=!0
r=s.F(0,p).l(0,k)
q=K.N(new H.F("["))
r.a.push(q)
r.c=!0
r=s.F(0,k).l(0,j)
q=K.N(new H.F("|"))
r.a.push(q)
q=s.F(0,k).l(0,i)
r=K.N(new H.F("]"))
q.a.push(r)
q.c=!0
q=s.F(0,k).l(0,k)
r=new K.ap()
r.a=[]
q.a.push(r)
q=K.N(new H.F("|]"))
r.a.push(q)
q=s.F(0,j).l(0,i)
r=K.N(new H.F("]"))
q.a.push(r)
q.c=!0
q=s.F(0,j).l(0,j)
r=new K.ap()
r.a=[]
q.a.push(r)
q=K.N(new H.F("|]"))
r.a.push(q)
s.F(0,p).l(0,h).a.push(new K.f7())
q=s.F(0,h).l(0,h)
r=new K.ap()
r.a=[]
q.a.push(r)
q=K.N(new H.F("*_`["))
r.a.push(q)
q=s.F(0,"BoldEnd")
q.d=q.a.aJ(o)
q=s.F(0,m)
q.d=q.a.aJ(n)
q=s.F(0,"CodeEnd")
q.d=q.a.aJ(l)
q=s.F(0,i)
q.d=q.a.aJ("Link")
q=s.F(0,h)
q.d=q.a.aJ(h)
this.b=s}}
V.hu.prototype={
$1:function(a){P.jU(C.h,new V.ht(this.a))}}
V.ht.prototype={
$0:function(){var s=C.d.a0(document.documentElement.scrollTop),r=this.a.style,q=H.e(-0.01*s)+"px"
r.top=q}}
N.iK.prototype={
$1:function(a){var s=this.a,r=s.b,q=s.e,p=q.length
r=(r+1)%p
if(r<p){s.b=r
s.c=q[r]
s=s.f
if(s!=null)s.c9()}return null}};(function aliases(){var s=J.a.prototype
s.cW=s.i
s=J.aS.prototype
s.cX=s.i
s=K.cU.prototype
s.cV=s.aq
s.bC=s.i
s=O.bS.prototype
s.bD=s.a9
s=O.af.prototype
s.bE=s.a9})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mc","l8",17)
r(P,"mS","lD",5)
r(P,"mT","lE",5)
r(P,"mU","lF",5)
q(P,"kl","mN",6)
r(W,"ol","fs",18)
var k
p(k=E.bc.prototype,"gcA",0,0,null,["$1","$0"],["cB","f3"],0,0)
p(k,"gcw",0,0,null,["$1","$0"],["cz","f2"],0,0)
p(k,"gcu",0,0,null,["$1","$0"],["cv","f_"],0,0)
o(k,"geY","eZ",2)
o(k,"gf0","f1",2)
p(k=E.dG.prototype,"gbG",0,0,null,["$1","$0"],["bI","bH"],0,0)
n(k,"gfh","cG",6)
m(k=X.e0.prototype,"gdL","dM",3)
m(k,"gdz","dA",3)
m(k,"gdF","dG",1)
m(k,"gdP","dQ",7)
m(k,"gdN","dO",7)
m(k,"gdT","dU",1)
m(k,"gdX","dY",1)
m(k,"gdJ","dK",1)
m(k,"gdV","dW",1)
m(k,"gdH","dI",1)
m(k,"gdZ","e_",15)
m(k,"ge0","e1",3)
m(k,"geb","ec",4)
m(k,"ge7","e8",4)
m(k,"ge9","ea",4)
p(D.bb.prototype,"gd3",0,0,null,["$1","$0"],["a5","d4"],0,0)
p(k=D.bP.prototype,"gbT",0,0,null,["$1","$0"],["bU","dR"],0,0)
m(k,"ge3","e4",16)
o(k,"gdr","ds",8)
o(k,"ge5","e6",8)
l(V.bq.prototype,"gj","bp",9)
l(V.v.prototype,"gj","bp",9)
p(k=M.cO.prototype,"ga2",0,0,null,["$1","$0"],["a6","d5"],0,0)
o(k,"gdB","dC",2)
o(k,"gdD","dE",2)
p(k=O.d3.prototype,"gaM",0,0,null,["$1","$0"],["M","aW"],0,0)
p(k,"gei",0,0,null,["$1","$0"],["bV","ej"],0,0)
o(k,"gdt","du",10)
o(k,"gdv","dw",10)
p(O.bS.prototype,"gaM",0,0,null,["$1","$0"],["M","aW"],0,0)
p(X.dh.prototype,"gbJ",0,0,null,["$1","$0"],["ag","d8"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.E,null)
q(P.E,[H.iY,J.a,J.T,P.c6,P.f,H.bg,P.cW,H.bI,H.dZ,H.hP,P.B,H.hd,H.eH,H.b9,P.ae,H.fM,H.d0,H.fH,H.a1,H.ek,P.ci,P.bs,P.bt,P.e4,P.dB,P.dC,P.c0,P.ix,P.cc,P.iq,P.c5,P.w,P.cH,P.iw,P.b2,P.aJ,P.K,P.aK,P.dg,P.c_,P.eh,P.fD,P.ad,P.d1,P.a0,P.I,P.b_,W.fj,W.iV,W.j7,W.z,W.bJ,P.ck,P.eA,K.f7,K.cU,K.hn,L.dz,L.dH,L.dI,L.hL,O.ba,O.bT,E.ff,E.bc,E.b8,E.bk,E.ee,E.hh,E.dG,Z.e2,Z.ii,Z.cF,Z.bK,Z.av,D.fh,D.bd,D.ab,X.cG,X.cZ,X.fJ,X.fP,X.bU,X.ha,X.hM,X.e0,D.bb,D.ac,V.M,V.aI,V.fv,V.d4,V.bh,V.aq,V.V,V.dl,V.dp,V.bq,V.v,M.cO,A.f9,A.fa,A.O,A.fe,A.fn,A.hf,A.hw,A.fU,A.dP,A.dQ,A.dT,A.dW,A.hS,A.hY,F.fz,F.fA,F.fK,F.fL,F.he,F.ho,F.hp,F.hq,F.hr,F.i5,F.i6,F.i7,F.ia,F.ic,F.id,F.ie,O.hC,O.bS,O.fV,T.hH,X.iR,X.hA,X.dh,V.hs])
q(J.a,[J.fG,J.bO,J.aS,J.a_,J.aR,J.am,H.bW,W.b,W.f6,W.cE,W.aa,W.A,W.e9,W.Z,W.fm,W.fo,W.ea,W.bG,W.ec,W.fp,W.h,W.ei,W.aM,W.fF,W.em,W.aO,W.fO,W.h5,W.eq,W.er,W.aV,W.es,W.eu,W.aX,W.ey,W.eB,W.aY,W.eC,W.aZ,W.eI,W.at,W.eM,W.hK,W.b0,W.eO,W.hN,W.i_,W.eU,W.eW,W.eY,W.f_,W.f1,P.bf,P.eo,P.bj,P.ew,P.hg,P.eJ,P.bn,P.eQ,P.fb,P.e5,P.dq,P.eF])
q(J.aS,[J.di,J.bo,J.a5])
r(J.cX,J.a_)
q(J.aR,[J.bN,J.bM])
r(P.bQ,P.c6)
q(P.bQ,[H.bp,W.e7,W.e6,P.cS])
r(H.F,H.bp)
q(P.f,[H.i,H.aU,H.c2,P.bL])
r(H.bH,H.aU)
q(P.cW,[H.bR,H.e3])
q(P.B,[H.dc,H.cY,H.dY,H.ds,H.ef,P.cC,P.dd,P.Y,P.e_,P.dX,P.dA,P.cI,P.cL])
q(H.b9,[H.hB,H.fI,H.iF,H.iG,H.iH,P.ik,P.ij,P.il,P.im,P.iv,P.iu,P.iC,P.is,P.it,P.fQ,P.fq,P.fr,W.h7,W.h9,W.hm,W.hz,W.io,P.iD,P.fB,P.fC,P.fd,E.hi,E.hj,E.hk,E.hJ,D.fx,D.fy,F.iy,F.ih,F.ig,F.i8,F.i9,O.fY,O.fZ,O.h_,O.h0,O.h1,O.h2,O.h3,O.h4,T.hI,V.iM,V.hu,V.ht,N.iK])
q(H.hB,[H.hx,H.bC])
r(P.d2,P.ae)
r(H.q,P.d2)
r(H.an,H.i)
r(H.bi,H.bW)
q(H.bi,[H.c8,H.ca])
r(H.c9,H.c8)
r(H.aW,H.c9)
r(H.cb,H.ca)
r(H.bV,H.cb)
q(H.bV,[H.d6,H.d7,H.d8,H.d9,H.da,H.bX,H.db])
r(H.cj,H.ef)
r(P.cf,P.bL)
r(P.ir,P.ix)
r(P.c4,P.cc)
r(P.cK,P.dC)
r(P.ft,P.cH)
r(P.i0,P.ft)
r(P.i1,P.cK)
q(P.K,[P.Q,P.o])
q(P.Y,[P.bm,P.cV])
q(W.b,[W.t,W.cR,W.as,W.cd,W.au,W.a7,W.cg,W.e1,W.br,P.cD,P.al])
q(W.t,[W.H,W.a3])
q(W.H,[W.k,P.j])
q(W.k,[W.cA,W.cB,W.aH,W.cT,W.be,W.dt])
r(W.fi,W.aa)
r(W.bE,W.e9)
q(W.Z,[W.fk,W.fl])
r(W.eb,W.ea)
r(W.bF,W.eb)
r(W.ed,W.ec)
r(W.cN,W.ed)
r(W.aL,W.cE)
r(W.ej,W.ei)
r(W.cQ,W.ej)
r(W.en,W.em)
r(W.aN,W.en)
r(W.ai,W.h)
q(W.ai,[W.aT,W.U,W.b1])
r(W.h6,W.eq)
r(W.h8,W.er)
r(W.et,W.es)
r(W.d5,W.et)
r(W.ev,W.eu)
r(W.bY,W.ev)
r(W.ez,W.ey)
r(W.dj,W.ez)
r(W.hl,W.eB)
r(W.ce,W.cd)
r(W.dw,W.ce)
r(W.eD,W.eC)
r(W.dx,W.eD)
r(W.hy,W.eI)
r(W.eN,W.eM)
r(W.dE,W.eN)
r(W.ch,W.cg)
r(W.dF,W.ch)
r(W.eP,W.eO)
r(W.dJ,W.eP)
r(W.aw,W.U)
r(W.eV,W.eU)
r(W.e8,W.eV)
r(W.c3,W.bG)
r(W.eX,W.eW)
r(W.el,W.eX)
r(W.eZ,W.eY)
r(W.c7,W.eZ)
r(W.f0,W.f_)
r(W.eE,W.f0)
r(W.f2,W.f1)
r(W.eL,W.f2)
r(W.eg,P.dB)
r(P.a6,P.eA)
r(P.ep,P.eo)
r(P.d_,P.ep)
r(P.ex,P.ew)
r(P.de,P.ex)
r(P.eK,P.eJ)
r(P.dD,P.eK)
r(P.eR,P.eQ)
r(P.dK,P.eR)
r(P.fc,P.e5)
r(P.df,P.al)
r(P.eG,P.eF)
r(P.dy,P.eG)
q(K.cU,[K.ap,L.hO])
q(E.ff,[Z.fg,A.du,T.hD])
q(D.ab,[D.aP,D.aQ,D.y])
r(D.bP,O.ba)
r(U.hb,D.fh)
q(U.hb,[U.cJ,U.dr])
r(A.fR,A.du)
q(A.hS,[A.dM,A.hV,A.hW,A.hX,A.hT,A.dL,A.hU,A.dN,A.dO,A.hZ,A.dR,A.dS,A.dU,A.dV])
r(F.hv,F.fA)
r(F.hR,F.fL)
r(F.ib,F.ic)
r(F.hc,F.id)
r(O.d3,O.hC)
q(O.bS,[O.fS,O.fT,O.af])
q(O.af,[O.fW,O.fX])
r(T.hE,T.hD)
q(T.hE,[T.hF,T.hG])
r(X.fE,X.hA)
s(H.bp,H.dZ)
s(H.c8,P.w)
s(H.c9,H.bI)
s(H.ca,P.w)
s(H.cb,H.bI)
s(P.c6,P.w)
s(W.e9,W.fj)
s(W.ea,P.w)
s(W.eb,W.z)
s(W.ec,P.w)
s(W.ed,W.z)
s(W.ei,P.w)
s(W.ej,W.z)
s(W.em,P.w)
s(W.en,W.z)
s(W.eq,P.ae)
s(W.er,P.ae)
s(W.es,P.w)
s(W.et,W.z)
s(W.eu,P.w)
s(W.ev,W.z)
s(W.ey,P.w)
s(W.ez,W.z)
s(W.eB,P.ae)
s(W.cd,P.w)
s(W.ce,W.z)
s(W.eC,P.w)
s(W.eD,W.z)
s(W.eI,P.ae)
s(W.eM,P.w)
s(W.eN,W.z)
s(W.cg,P.w)
s(W.ch,W.z)
s(W.eO,P.w)
s(W.eP,W.z)
s(W.eU,P.w)
s(W.eV,W.z)
s(W.eW,P.w)
s(W.eX,W.z)
s(W.eY,P.w)
s(W.eZ,W.z)
s(W.f_,P.w)
s(W.f0,W.z)
s(W.f1,P.w)
s(W.f2,W.z)
s(P.eo,P.w)
s(P.ep,W.z)
s(P.ew,P.w)
s(P.ex,W.z)
s(P.eJ,P.w)
s(P.eK,W.z)
s(P.eQ,P.w)
s(P.eR,W.z)
s(P.e5,P.ae)
s(P.eF,P.w)
s(P.eG,W.z)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",Q:"double",K:"num",I:"String",b2:"bool",a0:"Null",ad:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([ab*])","~(U*)","~(o*,f<bc*>*)","~(h*)","~(b1*)","~(~())","~()","~(aT*)","~(o*,f<ac*>*)","Q*()","~(o*,f<bh*>*)","@(@)","a0(@)","a0(E?,E?)","a0(@,@)","~(aw*)","b2*(f<ac*>*)","o(@,@)","I(b)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.lX(v.typeUniverse,JSON.parse('{"a5":"aS","di":"aS","bo":"aS","nl":"h","nv":"h","nn":"al","nm":"b","nC":"b","nE":"b","nk":"j","nx":"j","no":"k","nA":"k","ny":"t","nu":"t","o1":"a7","ns":"ai","np":"a3","nF":"a3","nD":"U","nz":"aN","nB":"aW","a_":{"i":["1"],"f":["1"]},"cX":{"i":["1"],"f":["1"]},"aR":{"Q":[],"K":[]},"bN":{"Q":[],"o":[],"K":[]},"bM":{"Q":[],"K":[]},"am":{"I":[]},"F":{"i":["o"],"f":["o"]},"i":{"f":["1"]},"aU":{"f":["2"]},"bH":{"i":["2"],"f":["2"]},"c2":{"f":["1"]},"bp":{"i":["1"],"f":["1"]},"dc":{"B":[]},"cY":{"B":[]},"dY":{"B":[]},"ds":{"B":[]},"an":{"i":["1"],"f":["1"]},"bi":{"p":["1"]},"aW":{"p":["Q"],"i":["Q"],"f":["Q"]},"bV":{"p":["o"],"i":["o"],"f":["o"]},"d6":{"p":["o"],"i":["o"],"f":["o"]},"d7":{"p":["o"],"i":["o"],"f":["o"]},"d8":{"p":["o"],"i":["o"],"f":["o"]},"d9":{"p":["o"],"i":["o"],"f":["o"]},"da":{"p":["o"],"i":["o"],"f":["o"]},"bX":{"p":["o"],"i":["o"],"f":["o"]},"db":{"p":["o"],"i":["o"],"f":["o"]},"ef":{"B":[]},"cj":{"B":[]},"ci":{"c0":[]},"cf":{"f":["1"]},"c4":{"i":["1"],"f":["1"]},"bL":{"f":["1"]},"bQ":{"i":["1"],"f":["1"]},"cc":{"i":["1"],"f":["1"]},"Q":{"K":[]},"cC":{"B":[]},"dd":{"B":[]},"Y":{"B":[]},"bm":{"B":[]},"cV":{"B":[]},"e_":{"B":[]},"dX":{"B":[]},"dA":{"B":[]},"cI":{"B":[]},"dg":{"B":[]},"c_":{"B":[]},"cL":{"B":[]},"o":{"K":[]},"ad":{"i":["1"],"f":["1"]},"k":{"H":[],"t":[],"b":[]},"cA":{"H":[],"t":[],"b":[]},"cB":{"H":[],"t":[],"b":[]},"aH":{"H":[],"t":[],"b":[]},"a3":{"t":[],"b":[]},"bF":{"p":["a6<K>"],"i":["a6<K>"],"f":["a6<K>"]},"bG":{"a6":["K"]},"cN":{"p":["I"],"i":["I"],"f":["I"]},"e7":{"i":["H"],"f":["H"]},"H":{"t":[],"b":[]},"cQ":{"p":["aL"],"i":["aL"],"f":["aL"]},"cR":{"b":[]},"cT":{"H":[],"t":[],"b":[]},"aN":{"p":["t"],"i":["t"],"f":["t"]},"be":{"H":[],"t":[],"b":[]},"aT":{"h":[]},"d5":{"p":["aV"],"i":["aV"],"f":["aV"]},"U":{"h":[]},"e6":{"i":["t"],"f":["t"]},"t":{"b":[]},"bY":{"p":["t"],"i":["t"],"f":["t"]},"dj":{"p":["aX"],"i":["aX"],"f":["aX"]},"dt":{"H":[],"t":[],"b":[]},"as":{"b":[]},"dw":{"p":["as"],"b":[],"i":["as"],"f":["as"]},"dx":{"p":["aY"],"i":["aY"],"f":["aY"]},"au":{"b":[]},"a7":{"b":[]},"dE":{"p":["a7"],"i":["a7"],"f":["a7"]},"dF":{"p":["au"],"b":[],"i":["au"],"f":["au"]},"b1":{"h":[]},"dJ":{"p":["b0"],"i":["b0"],"f":["b0"]},"ai":{"h":[]},"e1":{"b":[]},"aw":{"U":[],"h":[]},"br":{"b":[]},"e8":{"p":["A"],"i":["A"],"f":["A"]},"c3":{"a6":["K"]},"el":{"p":["aM?"],"i":["aM?"],"f":["aM?"]},"c7":{"p":["t"],"i":["t"],"f":["t"]},"eE":{"p":["aZ"],"i":["aZ"],"f":["aZ"]},"eL":{"p":["at"],"i":["at"],"f":["at"]},"ck":{"aO":[]},"cS":{"i":["H"],"f":["H"]},"a6":{"eA":["1"]},"d_":{"i":["bf"],"f":["bf"]},"de":{"i":["bj"],"f":["bj"]},"dD":{"i":["I"],"f":["I"]},"j":{"H":[],"t":[],"b":[]},"dK":{"i":["bn"],"f":["bn"]},"cD":{"b":[]},"al":{"b":[]},"df":{"b":[]},"dy":{"i":["d1<@,@>"],"f":["d1<@,@>"]},"ba":{"f":["1*"]},"aP":{"ab":[]},"aQ":{"ab":[]},"y":{"ab":[]},"bb":{"ac":[]},"bP":{"f":["ac*"]}}'))
H.lW(v.typeUniverse,JSON.parse('{"a_":1,"cX":1,"T":1,"i":1,"bg":1,"aU":2,"bH":2,"bR":2,"c2":1,"e3":1,"bI":1,"dZ":1,"bp":1,"an":1,"d0":1,"bi":1,"bt":1,"cf":1,"dB":1,"dC":2,"c5":1,"bL":1,"bQ":1,"w":1,"d2":2,"ae":2,"cc":1,"c6":1,"cH":2,"cK":2,"f":1,"cW":1,"ad":1,"eg":1,"z":1,"bJ":1,"ba":1,"aP":1,"aQ":1,"y":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"}
var t=(function rtii(){var s=H.n2
return{U:s("i<@>"),h:s("H"),C:s("B"),D:s("h"),Z:s("nw"),I:s("aO"),R:s("be"),b:s("a_<@>"),T:s("bO"),g:s("a5"),p:s("p<@>"),F:s("q<I*,du*>"),V:s("q<I*,dz*>"),i:s("q<I*,I*>"),w:s("q<I*,dI*>"),s:s("q<o*,ad<dP*>*>"),G:s("q<o*,ad<dQ*>*>"),W:s("q<o*,ad<dT*>*>"),M:s("q<o*,ad<dW*>*>"),J:s("q<o*,dM*>"),E:s("q<o*,b2*>"),a:s("q<o*,o*>"),P:s("a0"),K:s("E"),L:s("a6<K>"),N:s("I"),Y:s("c0"),o:s("bo"),v:s("b2"),d:s("Q"),z:s("@"),S:s("o"),B:s("aH*"),A:s("0&*"),_:s("E*"),f:s("I*"),j:s("dH*"),n:s("dL*"),r:s("dN*"),y:s("dO*"),O:s("dR*"),q:s("dS*"),c:s("dU*"),Q:s("dV*"),e:s("o*"),k:s("jz<a0>?"),X:s("E?"),H:s("K")}})();(function constants(){var s=hunkHelpers.makeConstList
C.o=W.aH.prototype
C.F=J.a.prototype
C.a=J.a_.prototype
C.G=J.bM.prototype
C.c=J.bN.prototype
C.f=J.bO.prototype
C.d=J.aR.prototype
C.b=J.am.prototype
C.H=J.a5.prototype
C.q=J.di.prototype
C.M=P.dq.prototype
C.i=J.bo.prototype
C.r=W.aw.prototype
C.t=W.br.prototype
C.u=new E.b8("Browser.chrome")
C.j=new E.b8("Browser.firefox")
C.k=new E.b8("Browser.edge")
C.v=new E.b8("Browser.other")
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.C=new P.dg()
C.n=new P.i0()
C.D=new P.i1()
C.e=new P.ir()
C.h=new P.aK(0)
C.E=new P.aK(5e6)
C.I=s([0,0,65498,45055,65535,34815,65534,18431])
C.J=new E.bk("OperatingSystem.windows")
C.p=new E.bk("OperatingSystem.mac")
C.K=new E.bk("OperatingSystem.linux")
C.L=new E.bk("OperatingSystem.other")
C.N=new P.bs(null,2)})();(function staticFields(){$.k4=null
$.a9=0
$.jv=null
$.ju=null
$.km=null
$.kk=null
$.kr=null
$.iE=null
$.iI=null
$.jk=null
$.bu=null
$.cr=null
$.cs=null
$.jf=!1
$.a8=C.e
$.R=[]
$.fu=null
$.jG=null
$.jJ=null
$.ag=null
$.jO=null
$.k_=null
$.i2=null
$.i3=null
$.i4=null
$.jZ=null
$.jI=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"nt","ky",function(){return H.n5("_$dart_dartClosure")})
s($,"nG","kz",function(){return H.ah(H.hQ({
toString:function(){return"$receiver$"}}))})
s($,"nH","kA",function(){return H.ah(H.hQ({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"nI","kB",function(){return H.ah(H.hQ(null))})
s($,"nJ","kC",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nM","kF",function(){return H.ah(H.hQ(void 0))})
s($,"nN","kG",function(){return H.ah(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"nL","kE",function(){return H.ah(H.jX(null))})
s($,"nK","kD",function(){return H.ah(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"nP","kI",function(){return H.ah(H.jX(void 0))})
s($,"nO","kH",function(){return H.ah(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"o2","jq",function(){return P.lC()})
s($,"o4","kM",function(){return P.lq("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nW","kL",function(){return Z.a2(0)})
s($,"nQ","kJ",function(){return Z.a2(511)})
s($,"nY","aF",function(){return Z.a2(1)})
s($,"nX","aE",function(){return Z.a2(2)})
s($,"nS","aD",function(){return Z.a2(4)})
s($,"nZ","aG",function(){return Z.a2(8)})
s($,"o_","b5",function(){return Z.a2(16)})
s($,"nT","cw",function(){return Z.a2(32)})
s($,"nU","cx",function(){return Z.a2(64)})
s($,"nV","kK",function(){return Z.a2(96)})
s($,"o0","bB",function(){return Z.a2(128)})
s($,"nR","aC",function(){return Z.a2(256)})
s($,"nr","kx",function(){return new V.fv()})
s($,"nq","x",function(){return $.kx()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bW,ArrayBufferView:H.bW,Float32Array:H.aW,Float64Array:H.aW,Int16Array:H.d6,Int32Array:H.d7,Int8Array:H.d8,Uint16Array:H.d9,Uint32Array:H.da,Uint8ClampedArray:H.bX,CanvasPixelArray:H.bX,Uint8Array:H.db,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.f6,HTMLAnchorElement:W.cA,HTMLAreaElement:W.cB,Blob:W.cE,HTMLCanvasElement:W.aH,CDATASection:W.a3,CharacterData:W.a3,Comment:W.a3,ProcessingInstruction:W.a3,Text:W.a3,CSSPerspective:W.fi,CSSCharsetRule:W.A,CSSConditionRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bE,MSStyleCSSProperties:W.bE,CSS2Properties:W.bE,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSPositionValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.aa,CSSRotation:W.aa,CSSScale:W.aa,CSSSkew:W.aa,CSSTranslation:W.aa,CSSTransformComponent:W.aa,CSSTransformValue:W.fk,CSSUnparsedValue:W.fl,DataTransferItemList:W.fm,DOMException:W.fo,ClientRectList:W.bF,DOMRectList:W.bF,DOMRectReadOnly:W.bG,DOMStringList:W.cN,DOMTokenList:W.fp,Element:W.H,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,SubmitEvent:W.h,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aL,FileList:W.cQ,FileWriter:W.cR,HTMLFormElement:W.cT,Gamepad:W.aM,History:W.fF,HTMLCollection:W.aN,HTMLFormControlsCollection:W.aN,HTMLOptionsCollection:W.aN,ImageData:W.aO,HTMLImageElement:W.be,KeyboardEvent:W.aT,Location:W.fO,MediaList:W.h5,MIDIInputMap:W.h6,MIDIOutputMap:W.h8,MimeType:W.aV,MimeTypeArray:W.d5,PointerEvent:W.U,MouseEvent:W.U,DragEvent:W.U,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.bY,RadioNodeList:W.bY,Plugin:W.aX,PluginArray:W.dj,RTCStatsReport:W.hl,HTMLSelectElement:W.dt,SourceBuffer:W.as,SourceBufferList:W.dw,SpeechGrammar:W.aY,SpeechGrammarList:W.dx,SpeechRecognitionResult:W.aZ,Storage:W.hy,CSSStyleSheet:W.at,StyleSheet:W.at,TextTrack:W.au,TextTrackCue:W.a7,VTTCue:W.a7,TextTrackCueList:W.dE,TextTrackList:W.dF,TimeRanges:W.hK,Touch:W.b0,TouchEvent:W.b1,TouchList:W.dJ,TrackDefaultList:W.hN,CompositionEvent:W.ai,FocusEvent:W.ai,TextEvent:W.ai,UIEvent:W.ai,URL:W.i_,VideoTrackList:W.e1,WheelEvent:W.aw,Window:W.br,DOMWindow:W.br,CSSRuleList:W.e8,ClientRect:W.c3,DOMRect:W.c3,GamepadList:W.el,NamedNodeMap:W.c7,MozNamedAttrMap:W.c7,SpeechRecognitionResultList:W.eE,StyleSheetList:W.eL,SVGLength:P.bf,SVGLengthList:P.d_,SVGNumber:P.bj,SVGNumberList:P.de,SVGPointList:P.hg,SVGStringList:P.dD,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.bn,SVGTransformList:P.dK,AudioBuffer:P.fb,AudioParamMap:P.fc,AudioTrackList:P.cD,AudioContext:P.al,webkitAudioContext:P.al,BaseAudioContext:P.al,OfflineAudioContext:P.df,WebGL2RenderingContext:P.dq,SQLResultSetRowList:P.dy})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bi.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.aW.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
W.cd.$nativeSuperclassTag="EventTarget"
W.ce.$nativeSuperclassTag="EventTarget"
W.cg.$nativeSuperclassTag="EventTarget"
W.ch.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.kp,[])
else N.kp([])})})()
//# sourceMappingURL=test.dart.js.map
