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
a[c]=function(){a[c]=function(){H.rk(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.mm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.mm"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.mm(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={lU:function lU(){},
lW:function(a){return new H.ei(a)},
kY:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
oX:function(a,b){if(t.G.b(a))return new H.cB(a,b)
return new H.bF(a,b)},
oO:function(){return new P.cY("No element")},
pj:function(a,b){var s=J.ar(a)
if(typeof s!=="number")return s.p()
H.eT(a,0,s-1,b)},
eT:function(a,b,c,d){if(c-b<=32)H.pi(a,b,c,d)
else H.ph(a,b,c,d)},
pi:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.b7(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a4()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
ph:function(a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h=C.c.a5(a7-a6+1,6),g=a6+h,f=a7-h,e=C.c.a5(a6+a7,2),d=e-h,c=e+h,b=J.b7(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.a4()
if(a4>0){s=a3
a3=a2
a2=s}b.j(a5,g,a)
b.j(a5,e,a1)
b.j(a5,f,a3)
b.j(a5,d,b.h(a5,a6))
b.j(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.G(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.N()
if(n<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.a4()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
q=m
r=l
break}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.N()
if(j<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.a4()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.a4()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.N()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.j(a5,a6,b.h(a5,a4))
b.j(a5,a4,a0)
a4=q+1
b.j(a5,a7,b.h(a5,a4))
b.j(a5,a4,a2)
H.eT(a5,a6,r-2,a8)
H.eT(a5,q+2,a7,a8)
if(k)return
if(r<g&&q>f){for(;J.G(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.G(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.N()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}H.eT(a5,r,q,a8)}else H.eT(a5,r,q,a8)},
ei:function ei(a){this.a=a},
P:function P(a){this.a=a},
o:function o(){},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bF:function bF(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=null
this.b=a
this.c=b},
d9:function d9(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
cE:function cE(){},
fn:function fn(){},
cd:function cd(){},
oG:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
o4:function(a){var s,r=H.o3(a)
if(r!=null)return r
s="minified:"+a
return s},
nX:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
h:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aj(a)
if(typeof s!="string")throw H.c(H.ap(a))
return s},
cW:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mU:function(a,b){var s,r,q,p,o,n,m=null
if(typeof a!="string")H.l(H.ap(a))
s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return m
if(3>=s.length)return H.b(s,3)
r=s[3]
if(b==null){if(r!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return m}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",m))
if(b===10&&r!=null)return parseInt(a,10)
if(b<10||r==null){q=b<=10?47+b:86+b
p=s[1]
for(o=p.length,n=0;n<o;++n)if((C.a.D(p,n)|32)>q)return m}return parseInt(a,b)},
pa:function(a){var s,r
if(typeof a!="string")H.l(H.ap(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=J.lH(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
eL:function(a){return H.p1(a)},
p1:function(a){var s,r,q
if(a instanceof P.C)return H.av(H.bO(a),null)
if(J.dF(a)===C.O||t.ak.b(a)){s=C.r(a)
if(H.mT(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mT(q))return q}}return H.av(H.bO(a),null)},
mT:function(a){var s=a!=="Object"&&a!==""
return s},
p2:function(){if(!!self.location)return self.location.href
return null},
mS:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
pb:function(a){var s,r,q,p=H.d([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.t)(a),++r){q=a[r]
if(!H.bM(q))throw H.c(H.ap(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aQ(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.ap(q))}return H.mS(p)},
mV:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.bM(q))throw H.c(H.ap(q))
if(q<0)throw H.c(H.ap(q))
if(q>65535)return H.pb(a)}return H.mS(a)},
pc:function(a,b,c){var s,r,q,p
if(typeof c!=="number")return c.jE()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
if(q<c)p=q
else p=c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b0:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.c.aQ(s,10))>>>0,56320|s&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c9:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
p9:function(a){var s=H.c9(a).getFullYear()+0
return s},
p7:function(a){var s=H.c9(a).getMonth()+1
return s},
p3:function(a){var s=H.c9(a).getDate()+0
return s},
p4:function(a){var s=H.c9(a).getHours()+0
return s},
p6:function(a){var s=H.c9(a).getMinutes()+0
return s},
p8:function(a){var s=H.c9(a).getSeconds()+0
return s},
p5:function(a){var s=H.c9(a).getMilliseconds()+0
return s},
f:function(a){throw H.c(H.ap(a))},
b:function(a,b){if(a==null)J.ar(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var s,r,q="index"
if(!H.bM(b))return new P.aw(!0,b,q,null)
s=J.ar(a)
if(!(b<0)){if(typeof s!=="number")return H.f(s)
r=b>=s}else r=!0
if(r)return P.O(b,a,q,null,s)
return P.eN(b,q)},
r2:function(a,b,c){if(a>c)return P.af(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.af(b,a,c,"end",null)
return new P.aw(!0,b,"end",null)},
ap:function(a){return new P.aw(!0,a,null,null)},
cp:function(a){if(typeof a!="number")throw H.c(H.ap(a))
return a},
c:function(a){var s,r
if(a==null)a=new P.ez()
s=new Error()
s.dartException=a
r=H.rl
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
rl:function(){return J.aj(this.dartException)},
l:function(a){throw H.c(a)},
t:function(a){throw H.c(P.bV(a))},
b2:function(a){var s,r,q,p,o,n
a=H.o0(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jF(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jG:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nb:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mP:function(a,b){return new H.ey(a,b==null?null:b.method)},
lV:function(a,b){var s=b==null,r=s?null:b.method
return new H.eg(a,r,s?null:b.receiver)},
W:function(a){if(a==null)return new H.jc(a)
if(a instanceof H.cC)return H.br(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.br(a,a.dartException)
return H.qV(a)},
br:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aQ(r,16)&8191)===10)switch(q){case 438:return H.br(a,H.lV(H.h(s)+" (Error "+q+")",e))
case 445:case 5007:return H.br(a,H.mP(H.h(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.o7()
o=$.o8()
n=$.o9()
m=$.oa()
l=$.od()
k=$.oe()
j=$.oc()
$.ob()
i=$.og()
h=$.of()
g=p.ap(s)
if(g!=null)return H.br(a,H.lV(s,g))
else{g=o.ap(s)
if(g!=null){g.method="call"
return H.br(a,H.lV(s,g))}else{g=n.ap(s)
if(g==null){g=m.ap(s)
if(g==null){g=l.ap(s)
if(g==null){g=k.ap(s)
if(g==null){g=j.ap(s)
if(g==null){g=m.ap(s)
if(g==null){g=i.ap(s)
if(g==null){g=h.ap(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.br(a,H.mP(s,g))}}return H.br(a,new H.fm(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cX()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.br(a,new P.aw(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cX()
return a},
bq:function(a){var s
if(a instanceof H.cC)return a.b
if(a==null)return new H.dq(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.dq(a)},
r5:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
rc:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.k("Unsupported number of arguments for wrapped closure"))},
cq:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.rc)
a.$identity=s
return s},
oD:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.js().constructor.prototype):Object.create(new H.cu(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aS
if(typeof r!=="number")return r.n()
$.aS=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.mA(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.oz(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mA(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
oz:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nV,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.ox:H.ow
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
oA:function(a,b,c,d){var s=H.mz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mA:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.oC(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.oA(r,!p,s,b)
if(r===0){p=$.aS
if(typeof p!=="number")return p.n()
$.aS=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.h(H.lK())+";return "+n+"."+H.h(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aS
if(typeof p!=="number")return p.n()
$.aS=p+1
m+=p
return new Function("return function("+m+"){return this."+H.h(H.lK())+"."+H.h(s)+"("+m+");}")()},
oB:function(a,b,c,d){var s=H.mz,r=H.oy
switch(b?-1:a){case 0:throw H.c(new H.eR("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
oC:function(a,b){var s,r,q,p,o,n,m=H.lK(),l=$.mx
if(l==null)l=$.mx=H.mw("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.oB(r,!p,s,b)
if(r===1){p="return function(){return this."+H.h(m)+"."+H.h(s)+"(this."+l+");"
o=$.aS
if(typeof o!=="number")return o.n()
$.aS=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.h(m)+"."+H.h(s)+"(this."+l+", "+n+");"
o=$.aS
if(typeof o!=="number")return o.n()
$.aS=o+1
return new Function(p+o+"}")()},
mm:function(a,b,c,d,e,f,g){return H.oD(a,b,c,d,!!e,!!f,g)},
ow:function(a,b){return H.hr(v.typeUniverse,H.bO(a.a),b)},
ox:function(a,b){return H.hr(v.typeUniverse,H.bO(a.c),b)},
mz:function(a){return a.a},
oy:function(a){return a.c},
lK:function(){var s=$.my
return s==null?$.my=H.mw("self"):s},
mw:function(a){var s,r,q,p=new H.cu("self","target","receiver","name"),o=J.lT(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bR("Field name "+a+" not found."))},
rk:function(a){throw H.c(new P.e0(a))},
r8:function(a){return v.getIsolateTag(a)},
tv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
re:function(a){var s,r,q,p,o,n=$.nU.$1(a),m=$.kW[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.l1[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nR.$2(a,n)
if(q!=null){m=$.kW[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.l1[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.lC(s)
$.kW[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.l1[n]=s
return s}if(p==="-"){o=H.lC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nZ(a,s)
if(p==="*")throw H.c(P.jO(n))
if(v.leafTags[n]===true){o=H.lC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nZ(a,s)},
nZ:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mp(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lC:function(a){return J.mp(a,!1,null,!!a.$iy)},
rf:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.lC(s)
else return J.mp(s,c,null,null)},
ra:function(){if(!0===$.mo)return
$.mo=!0
H.rb()},
rb:function(){var s,r,q,p,o,n,m,l
$.kW=Object.create(null)
$.l1=Object.create(null)
H.r9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.o_.$1(o)
if(n!=null){m=H.rf(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
r9:function(){var s,r,q,p,o,n,m=C.D()
m=H.co(C.E,H.co(C.F,H.co(C.t,H.co(C.t,H.co(C.G,H.co(C.H,H.co(C.I(C.r),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nU=new H.kZ(p)
$.nR=new H.l_(o)
$.o_=new H.l0(n)},
co:function(a,b){return a(b)||b},
mG:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.ab("Illegal RegExp pattern ("+String(n)+")",a,null))},
o1:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
r4:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
o0:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
o2:function(a,b,c){var s=H.rj(a,b,c)
return s},
rj:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.o0(b),'g'),H.r4(c))},
cw:function cw(){},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ey:function ey(a,b){this.a=a
this.b=b},
eg:function eg(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
jc:function jc(a){this.a=a},
cC:function cC(a,b){this.a=a
this.b=b},
dq:function dq(a){this.a=a
this.b=null},
bU:function bU(){},
jv:function jv(){},
js:function js(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a){this.a=a},
x:function x(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iM:function iM(a){this.a=a},
iL:function iL(a){this.a=a},
iO:function iO(a,b){this.a=a
this.b=b
this.c=null},
cL:function cL(a){this.a=a},
ek:function ek(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
ef:function ef(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fV:function fV(a){this.b=a},
k7:function k7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cl:function(a){return a},
b5:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
q9:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.r2(a,b,c))
return b},
cS:function cS(){},
a_:function a_(){},
c6:function c6(){},
bG:function bG(){},
cT:function cT(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
cU:function cU(){},
c7:function c7(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
pf:function(a,b){var s=b.c
return s==null?b.c=H.ma(a,b.z,!0):s},
n4:function(a,b){var s=b.c
return s==null?b.c=H.dx(a,"ay",[b.z]):s},
n5:function(a){var s=a.y
if(s===6||s===7||s===8)return H.n5(a.z)
return s===11||s===12},
pe:function(a){return a.cy},
mn:function(a){return H.mb(v.typeUniverse,a,!1)},
bn:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.ny(a,r,!0)
case 7:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.ma(a,r,!0)
case 8:s=b.z
r=H.bn(a,s,a0,a1)
if(r===s)return b
return H.nx(a,r,!0)
case 9:q=b.Q
p=H.dE(a,q,a0,a1)
if(p===q)return b
return H.dx(a,b.z,p)
case 10:o=b.z
n=H.bn(a,o,a0,a1)
m=b.Q
l=H.dE(a,m,a0,a1)
if(n===o&&l===m)return b
return H.m8(a,n,l)
case 11:k=b.z
j=H.bn(a,k,a0,a1)
i=b.Q
h=H.qS(a,i,a0,a1)
if(j===k&&h===i)return b
return H.nw(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dE(a,g,a0,a1)
o=b.z
n=H.bn(a,o,a0,a1)
if(f===g&&n===o)return b
return H.m9(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hL("Attempted to substitute unexpected RTI kind "+c))}},
dE:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bn(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qT:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bn(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qS:function(a,b,c,d){var s,r=b.a,q=H.dE(a,r,c,d),p=b.b,o=H.dE(a,p,c,d),n=b.c,m=H.qT(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fP()
s.a=q
s.b=o
s.c=m
return s},
d:function(a,b){a[v.arrayRti]=b
return a},
qZ:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nV(s)
return a.$S()}return null},
nW:function(a,b){var s
if(H.n5(b))if(a instanceof H.bU){s=H.qZ(a)
if(s!=null)return s}return H.bO(a)},
bO:function(a){var s
if(a instanceof P.C){s=a.$ti
return s!=null?s:H.mi(a)}if(Array.isArray(a))return H.q4(a)
return H.mi(J.dF(a))},
q4:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
mh:function(a){var s=a.$ti
return s!=null?s:H.mi(a)},
mi:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.qg(a,s)},
qg:function(a,b){var s=a instanceof H.bU?a.__proto__.__proto__.constructor:b,r=H.pP(v.typeUniverse,s.name)
b.$ccache=r
return r},
nV:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.mb(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
qf:function(a){var s,r,q=this,p=t.K
if(q===p)return H.dB(q,a,H.qk)
if(!H.b8(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.dB(q,a,H.qn)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bM
else if(s===t.gR||s===t.H)r=H.qj
else if(s===t.N)r=H.ql
else r=s===t.cJ?H.mj:null
if(r!=null)return H.dB(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.rd)){q.r="$i"+p
return H.dB(q,a,H.qm)}}else if(p===7)return H.dB(q,a,H.qd)
return H.dB(q,a,H.qb)},
dB:function(a,b,c){a.b=c
return a.b(b)},
qe:function(a){var s,r,q=this
if(!H.b8(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.q7
else if(q===t.K)r=H.q5
else r=H.qc
q.a=r
return q.a(a)},
qM:function(a){var s,r=a.y
if(!H.b8(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.A||r===7||a===t.P||a===t.T},
qb:function(a){var s=this
if(a==null)return H.qM(s)
return H.a5(v.typeUniverse,H.nW(a,s),null,s,null)},
qd:function(a){if(a==null)return!0
return this.z.b(a)},
qm:function(a){var s=this,r=s.r
if(a instanceof P.C)return!!a[r]
return!!J.dF(a)[r]},
tt:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nH(a,s)},
qc:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nH(a,s)},
nH:function(a,b){throw H.c(H.pF(H.np(a,H.nW(a,b),H.av(b,null))))},
np:function(a,b,c){var s=P.ia(a),r=H.av(b==null?H.bO(a):b,null)
return s+": type '"+H.h(r)+"' is not a subtype of type '"+H.h(c)+"'"},
pF:function(a){return new H.dv("TypeError: "+a)},
ai:function(a,b){return new H.dv("TypeError: "+H.np(a,null,b))},
qk:function(a){return a!=null},
q5:function(a){return a},
qn:function(a){return!0},
q7:function(a){return a},
mj:function(a){return!0===a||!1===a},
tf:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.ai(a,"bool"))},
th:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ai(a,"bool"))},
tg:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.ai(a,"bool?"))},
ti:function(a){if(typeof a=="number")return a
throw H.c(H.ai(a,"double"))},
tk:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ai(a,"double"))},
tj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ai(a,"double?"))},
bM:function(a){return typeof a=="number"&&Math.floor(a)===a},
tl:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.ai(a,"int"))},
tn:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ai(a,"int"))},
tm:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.ai(a,"int?"))},
qj:function(a){return typeof a=="number"},
to:function(a){if(typeof a=="number")return a
throw H.c(H.ai(a,"num"))},
tq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ai(a,"num"))},
tp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.ai(a,"num?"))},
ql:function(a){return typeof a=="string"},
tr:function(a){if(typeof a=="string")return a
throw H.c(H.ai(a,"String"))},
q6:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ai(a,"String"))},
ts:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.ai(a,"String?"))},
qP:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.a.n(r,H.av(a[q],b))
return s},
nI:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.d([],t.s)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)a6.push("T"+(q+p))
for(o=t.Y,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.b(a6,i)
l=C.a.n(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.a.n(" extends ",H.av(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.av(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.a.n(a3,H.av(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.a.n(a3,H.av(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.ms(H.av(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.h(a1)},
av:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.av(a.z,b)
return s}if(l===7){r=a.z
s=H.av(r,b)
q=r.y
return J.ms(q===11||q===12?C.a.n("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.h(H.av(a.z,b))+">"
if(l===9){p=H.qU(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qP(o,b)+">"):p}if(l===11)return H.nI(a,b,null)
if(l===12)return H.nI(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.b(b,n)
return b[n]}return"?"},
qU:function(a){var s,r=H.o3(a)
if(r!=null)return r
s="minified:"+a
return s},
nz:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pP:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.mb(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dy(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dx(a,b,q)
n[b]=o
return o}else return m},
pN:function(a,b){return H.nG(a.tR,b)},
pM:function(a,b){return H.nG(a.eT,b)},
mb:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.nv(H.nt(a,null,b,c))
r.set(b,s)
return s},
hr:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.nv(H.nt(a,b,c,!0))
q.set(c,r)
return r},
pO:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.m8(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bl:function(a,b){b.a=H.qe
b.b=H.qf
return b},
dy:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aA(null,null)
s.y=b
s.cy=c
r=H.bl(a,s)
a.eC.set(c,r)
return r},
ny:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pK(a,b,r,c)
a.eC.set(r,s)
return s},
pK:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aA(null,null)
q.y=6
q.z=b
q.cy=c
return H.bl(a,q)},
ma:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pJ(a,b,r,c)
a.eC.set(r,s)
return s},
pJ:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b8(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.l2(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.l2(q.z))return q
else return H.pf(a,b)}}p=new H.aA(null,null)
p.y=7
p.z=b
p.cy=c
return H.bl(a,p)},
nx:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pH(a,b,r,c)
a.eC.set(r,s)
return s},
pH:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b8(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dx(a,"ay",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.aA(null,null)
q.y=8
q.z=b
q.cy=c
return H.bl(a,q)},
pL:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aA(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bl(a,s)
a.eC.set(q,r)
return r},
hq:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pG:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dx:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aA(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bl(a,r)
a.eC.set(p,q)
return q},
m8:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bl(a,o)
a.eC.set(q,n)
return n},
nw:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hq(m)
if(j>0){s=l>0?",":""
r=H.hq(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pG(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aA(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bl(a,o)
a.eC.set(q,r)
return r},
m9:function(a,b,c,d){var s,r=b.cy+("<"+H.hq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pI(a,b,c,r,d)
a.eC.set(r,s)
return s},
pI:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bn(a,b,r,0)
m=H.dE(a,c,r,0)
return H.m9(a,n,m,c!==m)}}l=new H.aA(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bl(a,l)},
nt:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nv:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.pz(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.nu(a,r,g,f,!1)
else if(q===46)r=H.nu(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bk(a.u,a.e,f.pop()))
break
case 94:f.push(H.pL(a.u,f.pop()))
break
case 35:f.push(H.dy(a.u,5,"#"))
break
case 64:f.push(H.dy(a.u,2,"@"))
break
case 126:f.push(H.dy(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.m7(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.dx(p,n,o))
else{m=H.bk(p,a.e,n)
switch(m.y){case 11:f.push(H.m9(p,m,o,a.n))
break
default:f.push(H.m8(p,m,o))
break}}break
case 38:H.pA(a,f)
break
case 42:l=a.u
f.push(H.ny(l,H.bk(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.ma(l,H.bk(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.nx(l,H.bk(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fP()
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
H.m7(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.nw(p,H.bk(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.m7(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.pC(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bk(a.u,a.e,h)},
pz:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nu:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.nz(s,o.z)[p]
if(n==null)H.l('No "'+p+'" in "'+H.pe(o)+'"')
d.push(H.hr(s,o,n))}else d.push(p)
return m},
pA:function(a,b){var s=b.pop()
if(0===s){b.push(H.dy(a.u,1,"0&"))
return}if(1===s){b.push(H.dy(a.u,4,"1&"))
return}throw H.c(P.hL("Unexpected extended operation "+H.h(s)))},
bk:function(a,b,c){if(typeof c=="string")return H.dx(a,c,a.sEA)
else if(typeof c=="number")return H.pB(a,b,c)
else return c},
m7:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bk(a,b,c[s])},
pC:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bk(a,b,c[s])},
pB:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hL("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hL("Bad index "+c+" for "+b.i(0)))},
a5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b8(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b8(b))return!1
if(b.y!==1)s=b===t.P||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.a5(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.a5(a,b.z,c,d,e)
if(p===6){s=d.z
return H.a5(a,b,c,s,e)}if(r===8){if(!H.a5(a,b.z,c,d,e))return!1
return H.a5(a,H.n4(a,b),c,d,e)}if(r===7){s=H.a5(a,b.z,c,d,e)
return s}if(p===8){if(H.a5(a,b,c,d.z,e))return!0
return H.a5(a,b,c,H.n4(a,d),e)}if(p===7){s=H.a5(a,b,c,d.z,e)
return s}if(q)return!1
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
if(!H.a5(a,k,c,j,e)||!H.a5(a,j,e,k,c))return!1}return H.nJ(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.nJ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.qi(a,b,c,d,e)}return!1},
nJ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.a5(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.a5(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.a5(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.a5(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.a5(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
qi:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.a5(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.nz(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.a5(a,H.hr(a,b,l[p]),c,r[p],e))return!1
return!0},
l2:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b8(a))if(r!==7)if(!(r===6&&H.l2(a.z)))s=r===8&&H.l2(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
rd:function(a){var s
if(!H.b8(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
b8:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.Y},
nG:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fP:function fP(){this.c=this.b=this.a=null},
fK:function fK(){},
dv:function dv(a){this.a=a},
o3:function(a){return v.mangledGlobalNames[a]},
rg:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hE:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.mo==null){H.ra()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.c(P.jO("Return interceptor for "+H.h(s(a,o))))}q=a.constructor
p=q==null?null:q[J.mH()]
if(p!=null)return p
p=H.re(a)
if(p!=null)return p
if(typeof a=="function")return C.Q
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,J.mH(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
mH:function(){var s=$.nr
return s==null?$.nr=v.getIsolateTag("_$dart_js"):s},
oP:function(a,b){if(!H.bM(a))throw H.c(P.lI(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lT(H.d(new Array(a),b.L("u<0>")))},
lS:function(a,b){if(!H.bM(a)||a<0)throw H.c(P.bR("Length must be a non-negative integer: "+H.h(a)))
return H.d(new Array(a),b.L("u<0>"))},
lT:function(a){a.fixed$length=Array
return a},
oQ:function(a,b){return J.dI(a,b)},
mF:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
oR:function(a,b){var s,r
for(s=a.length;b<s;){r=C.a.D(a,b)
if(r!==32&&r!==13&&!J.mF(r))break;++b}return b},
oS:function(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.a.S(a,s)
if(r!==32&&r!==13&&!J.mF(r))break}return b},
dF:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cI.prototype
return J.cH.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.c0.prototype
if(typeof a=="boolean")return J.ee.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.C)return a
return J.hE(a)},
r6:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.C)return a
return J.hE(a)},
b7:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.C)return a
return J.hE(a)},
kX:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.C)return a
return J.hE(a)},
r7:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bK.prototype
return a},
dG:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bK.prototype
return a},
bp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aI.prototype
return a}if(a instanceof P.C)return a
return J.hE(a)},
ms:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.r6(a).n(a,b)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dF(a).w(a,b)},
D:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b7(a).h(a,b)},
lE:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.nX(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.kX(a).j(a,b,c)},
op:function(a,b){return J.dG(a).D(a,b)},
oq:function(a,b,c){return J.bp(a).hK(a,b,c)},
or:function(a,b,c,d){return J.bp(a).ii(a,b,c,d)},
os:function(a,b){return J.dG(a).S(a,b)},
dI:function(a,b){return J.r7(a).aU(a,b)},
lF:function(a,b){return J.b7(a).U(a,b)},
lG:function(a,b){return J.kX(a).F(a,b)},
ot:function(a,b,c,d){return J.bp(a).iG(a,b,c,d)},
hH:function(a,b){return J.kX(a).q(a,b)},
dJ:function(a){return J.bp(a).gdM(a)},
ou:function(a){return J.bp(a).gdP(a)},
aq:function(a){return J.dF(a).gT(a)},
bu:function(a){return J.kX(a).ga1(a)},
ar:function(a){return J.b7(a).gk(a)},
mt:function(a,b){return J.dG(a).cD(a,b)},
ov:function(a,b){return J.bp(a).jo(a,b)},
mu:function(a,b,c){return J.dG(a).u(a,b,c)},
aj:function(a){return J.dF(a).i(a)},
lH:function(a){return J.dG(a).eE(a)},
a:function a(){},
ee:function ee(){},
c0:function c0(){},
bd:function bd(){},
eF:function eF(){},
bK:function bK(){},
aI:function aI(){},
u:function u(a){this.$ti=a},
iK:function iK(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bD:function bD(){},
cI:function cI(){},
cH:function cH(){},
aU:function aU(){}},P={
pr:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cq(new P.k9(q),1)).observe(s,{childList:true})
return new P.k8(q,s,r)}else if(self.setImmediate!=null)return P.qX()
return P.qY()},
ps:function(a){self.scheduleImmediate(H.cq(new P.ka(a),0))},
pt:function(a){self.setImmediate(H.cq(new P.kb(a),0))},
pu:function(a){P.m2(C.n,a)},
m2:function(a,b){var s=C.c.a5(a.a,1000)
return P.pD(s<0?0:s,b)},
na:function(a,b){var s=C.c.a5(a.a,1000)
return P.pE(s<0?0:s,b)},
pD:function(a,b){var s=new P.du()
s.eZ(a,b)
return s},
pE:function(a,b){var s=new P.du()
s.f_(a,b)
return s},
a6:function(a){return new P.fx(new P.a9($.K,a.L("a9<0>")),a.L("fx<0>"))},
a4:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ae:function(a,b){P.q8(a,b)},
a3:function(a,b){b.cm(0,a)},
a2:function(a,b){b.bB(H.W(a),H.bq(a))},
q8:function(a,b){var s,r,q=new P.kH(b),p=new P.kI(b)
if(a instanceof P.a9)a.dw(q,p,t.z)
else{s=t.z
if(t.g.b(a))a.cM(q,p,s)
else{r=new P.a9($.K,t.eI)
r.a=4
r.c=a
r.dw(q,p,s)}}},
a7:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.K.ex(new P.kU(s))},
tc:function(a){return new P.ci(a,1)},
pv:function(){return C.a_},
pw:function(a){return new P.ci(a,3)},
qp:function(a){return new P.dr(a)},
nq:function(a,b){var s,r,q
b.a=1
try{a.cM(new P.kh(b),new P.ki(b),t.P)}catch(q){s=H.W(q)
r=H.bq(q)
P.rh(new P.kj(b,s,r))}},
kg:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.bt()
b.a=a.a
b.c=a.c
P.ch(b,r)}else{r=b.c
b.a=2
b.c=a
a.dn(r)}},
ch:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.g;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.kR(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.ch(e.a,d)
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
if(k){P.kR(f,f,n.b,m.a,m.b)
return}i=$.K
if(i!==j)$.K=j
else i=f
d=d.c
if((d&15)===8)new P.ko(r,e,q).$0()
else if(l){if((d&1)!==0)new P.kn(r,m).$0()}else if((d&2)!==0)new P.km(e,r).$0()
if(i!=null)$.K=i
d=r.c
if(s.b(d)){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bu(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.kg(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bu(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
qN:function(a,b){if(t.W.b(a))return b.ex(a)
if(t.bI.b(a))return a
throw H.c(P.lI(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
qL:function(){var s,r
for(s=$.cm;s!=null;s=$.cm){$.dD=null
r=s.b
$.cm=r
if(r==null)$.dC=null
s.a.$0()}},
qR:function(){$.mk=!0
try{P.qL()}finally{$.dD=null
$.mk=!1
if($.cm!=null)$.mr().$1(P.nS())}},
nN:function(a){var s=new P.fy(a),r=$.dC
if(r==null){$.cm=$.dC=s
if(!$.mk)$.mr().$1(P.nS())}else $.dC=r.b=s},
qQ:function(a){var s,r,q,p=$.cm
if(p==null){P.nN(a)
$.dD=$.dC
return}s=new P.fy(a)
r=$.dD
if(r==null){s.b=p
$.cm=$.dD=s}else{q=r.b
s.b=q
$.dD=r.b=s
if(q==null)$.dC=s}},
rh:function(a){var s=null,r=$.K
if(C.e===r){P.cn(s,s,C.e,a)
return}P.cn(s,s,r,r.cj(a))},
rK:function(a){P.hK(a,"stream")
return new P.he()},
n9:function(a,b){var s=$.K
if(s===C.e)return P.m2(a,b)
return P.m2(a,s.cj(b))},
pm:function(a,b){var s=$.K
if(s===C.e)return P.na(a,b)
return P.na(a,s.dJ(b,t.aF))},
hM:function(a,b){var s=b==null?P.lJ(a):b
P.hK(a,"error")
return new P.dN(a,s)},
lJ:function(a){var s
if(t.C.b(a)){s=a.gbm()
if(s!=null)return s}return C.L},
kR:function(a,b,c,d,e){P.qQ(new P.kS(d,e))},
nK:function(a,b,c,d){var s,r=$.K
if(r===c)return d.$0()
$.K=c
s=r
try{r=d.$0()
return r}finally{$.K=s}},
nL:function(a,b,c,d,e){var s,r=$.K
if(r===c)return d.$1(e)
$.K=c
s=r
try{r=d.$1(e)
return r}finally{$.K=s}},
qO:function(a,b,c,d,e,f){var s,r=$.K
if(r===c)return d.$2(e,f)
$.K=c
s=r
try{r=d.$2(e,f)
return r}finally{$.K=s}},
cn:function(a,b,c,d){var s=C.e!==c
if(s)d=!(!s||!1)?c.cj(d):c.io(d)
P.nN(d)},
k9:function k9(a){this.a=a},
k8:function k8(a,b,c){this.a=a
this.b=b
this.c=c},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
du:function du(){this.c=0},
kB:function kB(a,b){this.a=a
this.b=b},
kA:function kA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a,b){this.a=a
this.b=!1
this.$ti=b},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kU:function kU(a){this.a=a},
ci:function ci(a,b){this.a=a
this.b=b},
cj:function cj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dr:function dr(a){this.a=a},
ay:function ay(){},
db:function db(){},
da:function da(a,b){this.a=a
this.$ti=b},
dd:function dd(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
a9:function a9(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kd:function kd(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a,b){this.a=a
this.b=b},
kk:function kk(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
ko:function ko(a,b,c){this.a=a
this.b=b
this.c=c},
kp:function kp(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
km:function km(a,b){this.a=a
this.b=b},
fy:function fy(a){this.a=a
this.b=null},
cZ:function cZ(){},
f0:function f0(){},
he:function he(){},
d_:function d_(){},
dN:function dN(a,b){this.a=a
this.b=b},
kG:function kG(){},
kS:function kS(a,b){this.a=a
this.b=b},
kt:function kt(){},
kv:function kv(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.a=a
this.b=b},
kw:function kw(a,b,c){this.a=a
this.b=b
this.c=c},
oU:function(a,b){return new H.x(a.L("@<0>").bQ(b).L("x<1,2>"))},
oV:function(a,b,c){return H.r5(a,new H.x(b.L("@<0>").bQ(c).L("x<1,2>")))},
mI:function(a,b){return new H.x(a.L("@<0>").bQ(b).L("x<1,2>"))},
mK:function(a){return new P.de(a.L("de<0>"))},
m6:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
py:function(a,b){var s=new P.df(a,b)
s.c=a.e
return s},
oN:function(a,b,c){var s,r
if(P.ml(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.d([],t.s)
$.ao.push(a)
try{P.qo(a,s)}finally{if(0>=$.ao.length)return H.b($.ao,-1)
$.ao.pop()}r=P.n7(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lR:function(a,b,c){var s,r
if(P.ml(a))return b+"..."+c
s=new P.a1(b)
$.ao.push(a)
try{r=s
r.a=P.n7(r.a,a,", ")}finally{if(0>=$.ao.length)return H.b($.ao,-1)
$.ao.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ml:function(a){var s,r
for(s=$.ao.length,r=0;r<s;++r)if(a===$.ao[r])return!0
return!1},
qo:function(a,b){var s,r,q,p,o,n,m,l=a.ga1(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.A())return
s=H.h(l.gI(l))
b.push(s)
k+=s.length+2;++j}if(!l.A()){if(j<=5)return
if(0>=b.length)return H.b(b,-1)
r=b.pop()
if(0>=b.length)return H.b(b,-1)
q=b.pop()}else{p=l.gI(l);++j
if(!l.A()){if(j<=4){b.push(H.h(p))
return}r=H.h(p)
if(0>=b.length)return H.b(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gI(l);++j
for(;l.A();p=o,o=n){n=l.gI(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.h(p)
r=H.h(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
mJ:function(a,b,c){var s=P.oU(b,c)
a.q(0,new P.iP(s,b,c))
return s},
lY:function(a){var s,r={}
if(P.ml(a))return"{...}"
s=new P.a1("")
try{$.ao.push(a)
s.a+="{"
r.a=!0
J.hH(a,new P.iT(r,s))
s.a+="}"}finally{if(0>=$.ao.length)return H.b($.ao,-1)
$.ao.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
de:function de(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ks:function ks(a){this.a=a
this.c=this.b=null},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function cG(){},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(){},
i:function i(){},
cO:function cO(){},
iT:function iT(a,b){this.a=a
this.b=b},
aJ:function aJ(){},
hs:function hs(){},
cP:function cP(){},
ce:function ce(a,b){this.a=a
this.$ti=b},
dm:function dm(){},
dg:function dg(){},
dz:function dz(){},
pp:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.pq(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
pq:function(a,b,c,d){var s=a?$.oi():$.oh()
if(s==null)return null
if(0===c&&d===b.length)return P.nf(s,b)
return P.nf(s,b.subarray(c,P.bg(c,d,b.length)))},
nf:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.W(r)}return null},
mv:function(a,b,c,d,e,f){if(C.c.bj(f,4)!==0)throw H.c(P.ab("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.ab("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.ab("Invalid base64 padding, more than two '=' characters",a,b))},
q3:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
q2:function(a,b,c){var s,r,q,p,o,n
if(typeof c!=="number")return c.p()
s=c-b
r=new Uint8Array(s)
for(q=r.length,p=J.b7(a),o=0;o<s;++o){n=p.h(a,b+o)
if(typeof n!=="number")return n.ak()
if((n&4294967040)>>>0!==0)n=255
if(o>=q)return H.b(r,o)
r[o]=n}return r},
jX:function jX(){},
jY:function jY(){},
hQ:function hQ(){},
hR:function hR(){},
dX:function dX(){},
e_:function e_(){},
i6:function i6(){},
jV:function jV(){},
jZ:function jZ(){},
kF:function kF(a){this.b=0
this.c=a},
jW:function jW(a){this.a=a},
kE:function kE(a){this.a=a
this.b=16
this.c=0},
cs:function(a,b){var s=H.mU(a,b)
if(s!=null)return s
throw H.c(P.ab(a,null,null))},
r3:function(a){var s=H.pa(a)
if(s!=null)return s
throw H.c(P.ab("Invalid double",a,null))},
oJ:function(a){if(a instanceof H.bU)return a.i(0)
return"Instance of '"+H.h(H.eL(a))+"'"},
iQ:function(a,b,c,d){var s,r=c?J.lS(a,d):J.oP(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
lX:function(a,b,c){var s,r=H.d([],c.L("u<0>"))
for(s=J.bu(a);s.A();)r.push(s.gI(s))
if(b)return r
return J.lT(r)},
oW:function(a,b,c){var s,r,q=J.lS(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.b(q,s)
q[s]=r}return q},
f2:function(a,b,c){var s,r,q
if(Array.isArray(a)){s=a
r=s.length
c=P.bg(b,c,r)
if(b<=0){if(typeof c!=="number")return c.N()
q=c<r}else q=!0
return H.mV(q?s.slice(b,c):s)}if(t.bm.b(a))return H.pc(a,b,P.bg(b,c,a.length))
return P.pk(a,b,c)},
pk:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.af(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.af(c,b,a.length,o,o))
r=J.bu(a)
for(q=0;q<b;++q)if(!r.A())throw H.c(P.af(b,0,q,o,o))
p=[]
if(s)for(;r.A();)p.push(r.gI(r))
else for(q=b;q<c;++q){if(!r.A())throw H.c(P.af(c,b,q,o,o))
p.push(r.gI(r))}return H.mV(p)},
m1:function(a){return new H.ef(a,H.mG(a,!1,!0,!1,!1,!1))},
n7:function(a,b,c){var s=J.bu(b)
if(!s.A())return a
if(c.length===0){do a+=H.h(s.gI(s))
while(s.A())}else{a+=H.h(s.gI(s))
for(;s.A();)a=a+c+H.h(s.gI(s))}return a},
fq:function(){var s=H.p2()
if(s!=null)return P.po(s)
throw H.c(P.z("'Uri.base' is not supported"))},
mg:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.on().b
if(typeof b!="string")H.l(H.ap(b))
s=s.test(b)}else s=!1
if(s)return b
r=c.giE().co(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.b(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.b0(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
oH:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oI:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e1:function(a){if(a>=10)return""+a
return"0"+a},
mB:function(a){return new P.bx(1000*a)},
ia:function(a){if(typeof a=="number"||H.mj(a)||null==a)return J.aj(a)
if(typeof a=="string")return JSON.stringify(a)
return P.oJ(a)},
hL:function(a){return new P.dM(a)},
bR:function(a){return new P.aw(!1,null,null,a)},
lI:function(a,b,c){return new P.aw(!0,a,b,c)},
hK:function(a,b){if(a==null)throw H.c(new P.aw(!1,null,b,"Must not be null"))
return a},
mX:function(a){var s=null
return new P.ca(s,s,!1,s,s,a)},
eN:function(a,b){return new P.ca(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
bg:function(a,b,c){var s
if(0<=a){if(typeof c!=="number")return H.f(c)
s=a>c}else s=!0
if(s)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.f(c)
s=b>c}else s=!0
if(s)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
mY:function(a,b){if(a<0)throw H.c(P.af(a,0,null,b,null))
return a},
O:function(a,b,c,d,e){var s=e==null?J.ar(b):e
return new P.ea(s,!0,a,c,"Index out of range")},
z:function(a){return new P.fo(a)},
jO:function(a){return new P.fl(a)},
n6:function(a){return new P.cY(a)},
bV:function(a){return new P.dZ(a)},
k:function(a){return new P.fM(a)},
ab:function(a,b,c){return new P.ig(a,b,c)},
hF:function(a){H.rg(a)},
po:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.D(a5,4)^58)*3|C.a.D(a5,0)^100|C.a.D(a5,1)^97|C.a.D(a5,2)^116|C.a.D(a5,3)^97)>>>0
if(s===0)return P.nc(a4<a4?C.a.u(a5,0,a4):a5,5,a3).geG()
else if(s===32)return P.nc(C.a.u(a5,5,a4),0,a3).geG()}r=P.iQ(8,0,!1,t.S)
q=r.length
if(0>=q)return H.b(r,0)
r[0]=0
if(1>=q)return H.b(r,1)
r[1]=-1
if(2>=q)return H.b(r,2)
r[2]=-1
if(7>=q)return H.b(r,7)
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.nM(a5,0,a4,0,r)>=14){if(7>=r.length)return H.b(r,7)
r[7]=a4}if(1>=r.length)return H.b(r,1)
p=r[1]
if(p>=0)if(P.nM(a5,0,p,20,r)===20){if(7>=r.length)return H.b(r,7)
r[7]=p}q=r.length
if(2>=q)return H.b(r,2)
o=r[2]+1
if(3>=q)return H.b(r,3)
n=r[3]
if(4>=q)return H.b(r,4)
m=r[4]
if(5>=q)return H.b(r,5)
l=r[5]
if(6>=q)return H.b(r,6)
k=r[6]
if(k<l)l=k
if(m<o)m=l
else if(m<=p)m=p+1
if(n<o)n=m
if(7>=q)return H.b(r,7)
j=r[7]<0
if(j)if(o>p+3){i=a3
j=!1}else{q=n>0
if(q&&n+1===m){i=a3
j=!1}else{if(!(l<a4&&l===m+2&&C.a.ad(a5,"..",m)))h=l>m+2&&C.a.ad(a5,"/..",l-3)
else h=!0
if(h){i=a3
j=!1}else{if(p===4)if(C.a.ad(a5,"file",0)){if(o<=0){if(!C.a.ad(a5,"/",m)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.u(a5,m,a4)
p-=0
q=s-0
l+=q
k+=q
a4=a5.length
o=7
n=7
m=7}else if(m===l){++k
f=l+1
a5=C.a.aZ(a5,m,l,"/");++a4
l=f}i="file"}else if(C.a.ad(a5,"http",0)){if(q&&n+3===m&&C.a.ad(a5,"80",n+1)){k-=3
e=m-3
l-=3
a5=C.a.aZ(a5,n,m,"")
a4-=3
m=e}i="http"}else i=a3
else if(p===5&&C.a.ad(a5,"https",0)){if(q&&n+4===m&&C.a.ad(a5,"443",n+1)){k-=4
e=m-4
l-=4
a5=C.a.aZ(a5,n,m,"")
a4-=3
m=e}i="https"}else i=a3
j=!0}}}else i=a3
if(j){if(a4<a5.length){a5=C.a.u(a5,0,a4)
p-=0
o-=0
n-=0
m-=0
l-=0
k-=0}return new P.h7(a5,p,o,n,m,l,k,i)}if(i==null)if(p>0)i=P.pX(a5,0,p)
else{if(p===0)P.ck(a5,0,"Invalid empty scheme")
i=""}if(o>0){d=p+3
c=d<o?P.pY(a5,d,o-1):""
b=P.pU(a5,o,n,!1)
q=n+1
if(q<m){a=H.mU(C.a.u(a5,q,m),a3)
a0=P.pW(a==null?H.l(P.ab("Invalid port",a5,q)):a,i)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.pV(a5,m,l,a3,i,b!=null)
a2=l<k?P.md(a5,l+1,k,a3):a3
return new P.bL(i,c,b,a0,a1,a2,k<a4?P.pT(a5,k+1,a4):a3)},
ne:function(a){var s=t.N
return C.b.iL(H.d(a.split("&"),t.s),P.mI(s,s),new P.jT(C.f))},
pn:function(a,b,c){var s,r,q,p,o,n,m,l="IPv4 address should contain exactly 4 parts",k="each part must be in the range 0..255",j=new P.jQ(a),i=new Uint8Array(4)
for(s=i.length,r=b,q=r,p=0;r<c;++r){o=C.a.S(a,r)
if(o!==46){if((o^48)>9)j.$2("invalid character",r)}else{if(p===3)j.$2(l,r)
n=P.cs(C.a.u(a,q,r),null)
if(typeof n!=="number")return n.a4()
if(n>255)j.$2(k,q)
m=p+1
if(p>=s)return H.b(i,p)
i[p]=n
q=r+1
p=m}}if(p!==3)j.$2(l,c)
n=P.cs(C.a.u(a,q,c),null)
if(typeof n!=="number")return n.a4()
if(n>255)j.$2(k,q)
if(p>=s)return H.b(i,p)
i[p]=n
return i},
nd:function(a,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=new P.jR(a),b=new P.jS(c,a)
if(a.length<2)c.$1("address is too short")
s=H.d([],t.t)
for(r=a0,q=r,p=!1,o=!1;r<a1;++r){n=C.a.S(a,r)
if(n===58){if(r===a0){++r
if(C.a.S(a,r)!==58)c.$2("invalid start colon.",r)
q=r}if(r===q){if(p)c.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(b.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)c.$1("too few parts")
m=q===a1
l=C.b.gaH(s)
if(m&&l!==-1)c.$2("expected a part after last `:`",a1)
if(!m)if(!o)s.push(b.$2(q,a1))
else{k=P.pn(a,q,a1)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)c.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)c.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.b(j,g)
j[g]=0
d=g+1
if(d>=i)return H.b(j,d)
j[d]=0
g+=2}else{d=C.c.aQ(f,8)
if(g<0||g>=i)return H.b(j,g)
j[g]=d
d=g+1
if(d>=i)return H.b(j,d)
j[d]=f&255
g+=2}}return j},
nA:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ck:function(a,b,c){throw H.c(P.ab(c,a,b))},
pW:function(a,b){if(a!=null&&a===P.nA(b))return null
return a},
pU:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.S(a,b)===91){s=c-1
if(C.a.S(a,s)!==93)P.ck(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.pR(a,r,s)
if(q<s){p=q+1
o=P.nF(a,C.a.ad(a,"25",p)?q+3:p,s,"%25")}else o=""
P.nd(a,r,q)
return C.a.u(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.S(a,n)===58){q=C.a.bE(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.nF(a,C.a.ad(a,"25",p)?q+3:p,c,"%25")}else o=""
P.nd(a,b,q)
return"["+C.a.u(a,b,q)+o+"]"}return P.q_(a,b,c)},
pR:function(a,b,c){var s=C.a.bE(a,"%",b)
return s>=b&&s<c?s:c},
nF:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.a1(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.S(a,s)
if(p===37){o=P.me(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.a1("")
m=i.a+=C.a.u(a,r,s)
if(n)o=C.a.u(a,s,s+3)
else if(o==="%")P.ck(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.a1("")
if(r<s){i.a+=C.a.u(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.S(a,s+1)
if((l&64512)===56320){p=65536|(p&1023)<<10|l&1023
k=2}else k=1}else k=1
j=C.a.u(a,r,s)
if(i==null){i=new P.a1("")
n=i}else n=i
n.a+=j
n.a+=P.mc(p)
s+=k
r=s}}}if(i==null)return C.a.u(a,b,c)
if(r<c)i.a+=C.a.u(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
q_:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.S(a,s)
if(o===37){n=P.me(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.a1("")
l=C.a.u(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.u(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.b(C.u,m)
m=(C.u[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.a1("")
if(r<s){q.a+=C.a.u(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.b(C.k,m)
m=(C.k[m]&1<<(o&15))!==0}else m=!1
if(m)P.ck(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.S(a,s+1)
if((i&64512)===56320){o=65536|(o&1023)<<10|i&1023
j=2}else j=1}else j=1
l=C.a.u(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.a1("")
m=q}else m=q
m.a+=l
m.a+=P.mc(o)
s+=j
r=s}}}}if(q==null)return C.a.u(a,b,c)
if(r<c){l=C.a.u(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
pX:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.nC(C.a.D(a,b)))P.ck(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.D(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.b(C.m,p)
p=(C.m[p]&1<<(q&15))!==0}else p=!1
if(!p)P.ck(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.u(a,b,c)
return P.pQ(r?a.toLowerCase():a)},
pQ:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
pY:function(a,b,c){return P.dA(a,b,c,C.S,!1)},
pV:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dA(a,b,c,C.v,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.al(s,"/"))s="/"+s
return P.pZ(s,e,f)},
pZ:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.al(a,"/"))return P.q0(a,!s||c)
return P.q1(a)},
md:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bR("Both query and queryParameters specified"))
return P.dA(a,b,c,C.l,!0)}if(d==null)return null
s=new P.a1("")
r.a=""
d.q(0,new P.kC(new P.kD(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
pT:function(a,b,c){return P.dA(a,b,c,C.l,!0)},
me:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.S(a,b+1)
r=C.a.S(a,n)
q=H.kY(s)
p=H.kY(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aQ(o,4)
if(n>=8)return H.b(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.b0(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.u(a,b,b+3).toUpperCase()
return null},
mc:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
r=s.length
if(0>=r)return H.b(s,0)
s[0]=37
q=C.a.D(k,a>>>4)
if(1>=r)return H.b(s,1)
s[1]=q
q=C.a.D(k,a&15)
if(2>=r)return H.b(s,2)
s[2]=q}else{if(a>2047)if(a>65535){p=240
o=4}else{p=224
o=3}else{p=192
o=2}s=new Uint8Array(3*o)
for(r=s.length,n=0;--o,o>=0;p=128){m=C.c.hV(a,6*o)&63|p
if(n>=r)return H.b(s,n)
s[n]=37
q=n+1
l=C.a.D(k,m>>>4)
if(q>=r)return H.b(s,q)
s[q]=l
l=n+2
q=C.a.D(k,m&15)
if(l>=r)return H.b(s,l)
s[l]=q
n+=3}}return P.f2(s,0,null)},
dA:function(a,b,c,d,e){var s=P.nE(a,b,c,d,e)
return s==null?C.a.u(a,b,c):s},
nE:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.S(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.b(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.me(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.b(C.k,n)
n=(C.k[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.ck(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.S(a,n)
if((k&64512)===56320){o=65536|(o&1023)<<10|k&1023
l=2}else l=1}else l=1}else l=1
m=P.mc(o)}}if(p==null){p=new P.a1("")
n=p}else n=p
n.a+=C.a.u(a,q,r)
n.a+=H.h(m)
if(typeof l!=="number")return H.f(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.u(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
nD:function(a){if(C.a.al(a,"."))return!0
return C.a.cD(a,"/.")!==-1},
q1:function(a){var s,r,q,p,o,n,m
if(!P.nD(a))return a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.G(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.b(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.v(s,"/")},
q0:function(a,b){var s,r,q,p,o,n
if(!P.nD(a))return!b?P.nB(a):a
s=H.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaH(s)!==".."){if(0>=s.length)return H.b(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.b(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaH(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.b(s,0)
r=P.nB(s[0])
if(0>=s.length)return H.b(s,0)
s[0]=r}return C.b.v(s,"/")},
nB:function(a){var s,r,q,p=a.length
if(p>=2&&P.nC(J.op(a,0)))for(s=1;s<p;++s){r=C.a.D(a,s)
if(r===58)return C.a.u(a,0,s)+"%3A"+C.a.ah(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.b(C.m,q)
q=(C.m[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
pS:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.D(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bR("Invalid URL encoding"))}}return s},
mf:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.D(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.f!==d)q=!1
else q=!0
if(q)return C.a.u(a,b,c)
else p=new H.P(C.a.u(a,b,c))}else{p=H.d([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.D(a,o)
if(r>127)throw H.c(P.bR("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bR("Truncated URI"))
p.push(P.pS(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.Z.co(p)},
nC:function(a){var s=a|32
return 97<=s&&s<=122},
nc:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.D(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.ab(k,a,r))}}if(q<0&&r>b)throw H.c(P.ab(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.D(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaH(j)
if(p!==44||r!==n+7||!C.a.ad(a,"base64",n+1))throw H.c(P.ab("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.C.iW(0,a,m,s)
else{l=P.nE(a,m,s,C.l,!0)
if(l!=null)a=C.a.aZ(a,m,s,l)}return new P.jP(a,j,c)},
qa:function(){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",r=".",q=":",p="/",o="?",n="#",m=P.oW(22,new P.kK(),t.gc),l=new P.kJ(m),k=new P.kL(),j=new P.kM(),i=l.$2(0,225)
k.$3(i,s,1)
k.$3(i,r,14)
k.$3(i,q,34)
k.$3(i,p,3)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(14,225)
k.$3(i,s,1)
k.$3(i,r,15)
k.$3(i,q,34)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(15,225)
k.$3(i,s,1)
k.$3(i,"%",225)
k.$3(i,q,34)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(1,225)
k.$3(i,s,1)
k.$3(i,q,34)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(2,235)
k.$3(i,s,139)
k.$3(i,p,131)
k.$3(i,r,146)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(3,235)
k.$3(i,s,11)
k.$3(i,p,68)
k.$3(i,r,18)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(4,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,"[",232)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(5,229)
k.$3(i,s,5)
j.$3(i,"AZ",229)
k.$3(i,q,102)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(6,231)
j.$3(i,"19",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(7,231)
j.$3(i,"09",7)
k.$3(i,"@",68)
k.$3(i,p,138)
k.$3(i,o,172)
k.$3(i,n,205)
k.$3(l.$2(8,8),"]",5)
i=l.$2(9,235)
k.$3(i,s,11)
k.$3(i,r,16)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(16,235)
k.$3(i,s,11)
k.$3(i,r,17)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(17,235)
k.$3(i,s,11)
k.$3(i,p,9)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(10,235)
k.$3(i,s,11)
k.$3(i,r,18)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(18,235)
k.$3(i,s,11)
k.$3(i,r,19)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(19,235)
k.$3(i,s,11)
k.$3(i,p,234)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(11,235)
k.$3(i,s,11)
k.$3(i,p,10)
k.$3(i,o,172)
k.$3(i,n,205)
i=l.$2(12,236)
k.$3(i,s,12)
k.$3(i,o,12)
k.$3(i,n,205)
i=l.$2(13,237)
k.$3(i,s,13)
k.$3(i,o,13)
j.$3(l.$2(20,245),"az",21)
i=l.$2(21,245)
j.$3(i,"az",21)
j.$3(i,"09",21)
k.$3(i,"+-.",21)
return m},
nM:function(a,b,c,d,e){var s,r,q,p,o,n=$.oo()
for(s=b;s<c;++s){if(d<0||d>=n.length)return H.b(n,d)
r=n[d]
q=C.a.D(a,s)^96
if(q>95)q=31
if(q>=r.length)return H.b(r,q)
p=r[q]
d=p&31
o=p>>>5
if(o>=8)return H.b(e,o)
e[o]=s}return d},
b6:function b6(){},
as:function as(a,b){this.a=a
this.b=b},
a8:function a8(){},
bx:function bx(a){this.a=a},
i3:function i3(){},
i4:function i4(){},
J:function J(){},
dM:function dM(a){this.a=a},
ez:function ez(){},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ea:function ea(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fo:function fo(a){this.a=a},
fl:function fl(a){this.a=a},
cY:function cY(a){this.a=a},
dZ:function dZ(a){this.a=a},
eD:function eD(){},
cX:function cX(){},
e0:function e0(a){this.a=a},
fM:function fM(a){this.a=a},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
j:function j(){},
ed:function ed(){},
q:function q(){},
F:function F(){},
a0:function a0(){},
U:function U(){},
C:function C(){},
m0:function m0(){},
al:function al(){},
hh:function hh(){},
A:function A(){},
a1:function a1(a){this.a=a},
jT:function jT(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
kD:function kD(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
kK:function kK(){},
kJ:function kJ(a){this.a=a},
kL:function kL(){},
kM:function kM(){},
h7:function h7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fE:function fE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
r1:function(a){var s
if(t.u.b(a)){s=J.ou(a)
if(s.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}return a}return new P.dw(a.data,a.height,a.width)},
r0:function(a){if(a instanceof P.dw)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var s,r,q,p,o
if(a==null)return null
s=P.mI(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.t)(r),++p){o=r[p]
s.j(0,o,a[o])}return s},
r_:function(a){var s={}
a.q(0,new P.kV(s))
return s},
kx:function kx(){},
ky:function ky(a,b){this.a=a
this.b=b},
kz:function kz(a,b){this.a=a
this.b=b},
dw:function dw(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a){this.a=a},
hi:function hi(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
id:function id(){},
ie:function ie(){},
kr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
px:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h5:function h5(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
ej:function ej(){},
aY:function aY(){},
eA:function eA(){},
jd:function jd(){},
f1:function f1(){},
p:function p(){},
b1:function b1(){},
fb:function fb(){},
fT:function fT(){},
fU:function fU(){},
h1:function h1(){},
h2:function h2(){},
hf:function hf(){},
hg:function hg(){},
ho:function ho(){},
hp:function hp(){},
bi:function bi(){},
hO:function hO(){},
dP:function dP(){},
hP:function hP(a){this.a=a},
dQ:function dQ(){},
b9:function b9(){},
eC:function eC(){},
fz:function fz(){},
eP:function eP(){},
eY:function eY(){},
hb:function hb(){},
hc:function hc(){}},W={
lM:function(){var s=document.createElement("canvas")
return s},
i5:function(a){return"wheel"},
mC:function(a){return W.oM(a,null,null).eB(new W.ij(),t.N)},
oM:function(a,b,c){var s=new P.a9($.K,t.ao),r=new P.da(s,t.bj),q=new XMLHttpRequest()
C.N.j4(q,"GET",a,!0)
W.T(q,"load",new W.ik(q,r),!1)
W.T(q,"error",r.giq(),!1)
q.send()
return s},
mD:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.W(s)}return q},
kq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ns:function(a,b,c,d){var s=W.kq(W.kq(W.kq(W.kq(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
T:function(a,b,c,d){var s=new W.fL(a,b,c==null?null:W.nQ(new W.kc(c),t.aD),!1)
s.i3()
return s},
nQ:function(a,b){var s=$.K
if(s===C.e)return a
return s.dJ(a,b)},
r:function r(){},
hI:function hI(){},
dK:function dK(){},
dL:function dL(){},
bv:function bv(){},
bw:function bw(){},
aG:function aG(){},
hX:function hX(){},
I:function I(){},
cy:function cy(){},
hY:function hY(){},
ax:function ax(){},
aT:function aT(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
cz:function cz(){},
cA:function cA(){},
e4:function e4(){},
i2:function i2(){},
fB:function fB(a,b){this.a=a
this.b=b},
E:function E(){},
m:function m(){},
e:function e(){},
at:function at(){},
bW:function bW(){},
e6:function e6(){},
e8:function e8(){},
aH:function aH(){},
ii:function ii(){},
bA:function bA(){},
ba:function ba(){},
ij:function ij(){},
ik:function ik(a,b){this.a=a
this.b=b},
bB:function bB(){},
bC:function bC(){},
bY:function bY(){},
c_:function c_(){},
dW:function dW(){},
bE:function bE(){},
iR:function iR(){},
j8:function j8(){},
c3:function c3(){},
ep:function ep(){},
j9:function j9(a){this.a=a},
eq:function eq(){},
ja:function ja(a){this.a=a},
aK:function aK(){},
er:function er(){},
au:function au(){},
fA:function fA(a){this.a=a},
v:function v(){},
cV:function cV(){},
aL:function aL(){},
eG:function eG(){},
bI:function bI(){},
eQ:function eQ(){},
jk:function jk(a){this.a=a},
eS:function eS(){},
aC:function aC(){},
eU:function eU(){},
aM:function aM(){},
eV:function eV(){},
aN:function aN(){},
f_:function f_(){},
jt:function jt(a){this.a=a},
aD:function aD(){},
bh:function bh(){},
aE:function aE(){},
am:function am(){},
f4:function f4(){},
f5:function f5(){},
jB:function jB(){},
aO:function aO(){},
bJ:function bJ(){},
fa:function fa(){},
jE:function jE(){},
b3:function b3(){},
jU:function jU(){},
ft:function ft(){},
bj:function bj(){},
cg:function cg(){},
fC:function fC(){},
dc:function dc(){},
fQ:function fQ(){},
dh:function dh(){},
ha:function ha(){},
hj:function hj(){},
lQ:function lQ(a,b){this.a=a
this.$ti=b},
fL:function fL(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kc:function kc(a){this.a=a},
m5:function m5(a){this.$ti=a},
N:function N(){},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fD:function fD(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fN:function fN(){},
fO:function fO(){},
fR:function fR(){},
fS:function fS(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h3:function h3(){},
h4:function h4(){},
h6:function h6(){},
dn:function dn(){},
dp:function dp(){},
h8:function h8(){},
h9:function h9(){},
hd:function hd(){},
hk:function hk(){},
hl:function hl(){},
ds:function ds(){},
dt:function dt(){},
hm:function hm(){},
hn:function hn(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){}},K={
ag:function(a){var s=new K.jl()
s.eV(a)
return s},
hJ:function hJ(){},
e9:function e9(){},
iU:function iU(){},
bf:function bf(){this.a=null},
jl:function jl(){this.a=null}},L={eZ:function eZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},f9:function f9(a){this.b=a
this.c=null},jC:function jC(){var _=this
_.d=_.c=_.b=_.a=null},fc:function fc(a){this.b=a
this.a=this.c=null}},O={
lN:function(a){var s=new O.ak(a.L("ak<0>"))
s.bM(a)
return s},
ak:function ak(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cR:function cR(){this.b=this.a=null},
nT:function(a){var s=C.a.iT(a,"/")
if(s<=0)return a
return C.a.u(a,0,s)},
nP:function(a){var s,r,q=P.m1("([^\\s]+)")
$.nO=q
s=q.iJ(a)
if(s==null)return H.d([],t.i)
q=s.b
if(1>=q.length)return H.b(q,1)
r=q[1]
return H.d([r,C.a.eE(C.a.ah(a,r.length))],t.i)},
kT:function(a){var s,r=H.d([],t.i),q=P.m1("([^\\s]+)")
$.nO=q
q=new H.k7(q,a,0)
for(;q.A();){s=q.d.b
if(1>=s.length)return H.b(s,1)
r.push(s[1])}return r},
bm:function(a){var s,r=O.kT(a),q=H.d([],t.m),p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.b(r,s)
q.push(P.r3(r[s]))}return q},
es:function(a,b,c){return O.p_(a,b,!1)},
p_:function(a,b,c){var s=0,r=P.a6(t.g1),q,p=2,o,n=[],m,l,k,j,i,h,g,f
var $async$es=P.a7(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:p=4
m=O.nT(a)
i=new O.kP(b)
i.b=new H.x(t.o)
l=i
s=7
return P.ae(W.mC(a),$async$es)
case 7:k=e
s=8
return P.ae(l.aw(k,m,!1),$async$es)
case 8:h=l.b
q=h
s=1
break
p=2
s=6
break
case 4:p=3
f=o
j=H.W(f)
P.hF(a+": "+H.h(j))
h=P.k(a+": "+H.h(j))
throw H.c(h)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a3(q,r)
case 2:return P.a2(o,r)}})
return P.a4($async$es,r)},
eB:function(a,b){var s=null,r=null,q=!1
return O.p0(a,b)},
p0:function(a1,a2){var s=0,r=P.a6(t.l),q,p=2,o,n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$eB=P.a7(function(a3,a4){if(a3===1){o=a4
s=p}while(true)switch(s){case 0:c=null
b=null
a=!1
p=4
m=O.nT(a1)
i=c
h=new O.kQ(a2)
h.b=H.d([],t.fz)
h.c=H.d([],t.v)
h.d=H.d([],t.cz)
g=new H.x(t.o)
h.e=g
h.f=b
h.r=""
f=O.mL()
e=f.r
e.sW(0,new V.S(0.35,0.35,0.35))
e=f.x
e.sW(0,new V.S(0.65,0.65,0.65))
h.x=f
h.Q=E.i7(null)
if(i!=null)g.by(0,i)
h.bv()
l=h
s=7
return P.ae(W.mC(a1),$async$eB)
case 7:k=a4
s=8
return P.ae(l.aw(k,m,a),$async$eB)
case 8:i=b
if(i!=null){g=new O.eM()
g.b=!0
i.G(g)}i=l.giF()
q=i
s=1
break
p=2
s=6
break
case 4:p=3
a0=o
j=H.W(a0)
P.hF(a1+": "+H.h(j))
i=P.k(a1+": "+H.h(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a3(q,r)
case 2:return P.a2(o,r)}})
return P.a4($async$eB,r)},
kP:function kP(a){this.a=a
this.c=this.b=null},
hD:function hD(a){this.a=a
this.b=null},
kQ:function kQ(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
eM:function eM(){this.b=null},
mL:function(){var s,r=new O.c2(),q=O.lN(t.hc)
r.e=q
q.bl(r.gfP(),r.gfR())
q=new O.aW(r,"emission")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
r.f=q
q=new O.aW(r,"ambient")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
r.r=q
q=new O.aW(r,"diffuse")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
r.x=q
q=new O.aW(r,"invDiffuse")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
r.y=q
q=new O.j_(r,"specular")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
q.ch=100
r.z=q
q=new O.iW(r,"bump")
q.c=new A.X(!1,!1,!1)
r.Q=q
r.ch=null
q=new O.aW(r,"reflect")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
r.cx=q
q=new O.iZ(r,"refract")
q.c=new A.X(!1,!1,!1)
q.f=new V.S(0,0,0)
q.ch=1
r.cy=q
q=new O.iV(r,"alpha")
q.c=new A.X(!1,!1,!1)
q.f=1
r.db=q
q=new D.cJ()
q.bM(t.gj)
q.e=H.d([],t.bb)
q.f=H.d([],t.cP)
q.r=H.d([],t.eb)
q.x=H.d([],t.du)
q.z=q.y=null
q.cR(q.gfN(),q.ghn(),q.ghr())
r.dx=q
s=new O.iY()
s.b=new V.L(0,0,0,0)
s.c=1
s.d=10
s.e=!1
r.dy=s
s=q.y
q=s==null?q.y=D.M():s
q.m(0,r.ghM())
q=r.dx
s=q.z
q=s==null?q.z=D.M():s
q.m(0,r.gbn())
r.fr=null
return r},
eb:function eb(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a},
iH:function iH(a,b){this.a=a
this.b=b},
iG:function iG(a){this.a=a},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
im:function im(a){this.a=a},
il:function il(a){this.a=a},
c2:function c2(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(){},
j2:function j2(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(){},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(){},
iV:function iV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cQ:function cQ(){},
iW:function iW(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aW:function aW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
iY:function iY(){var _=this
_.e=_.d=_.c=_.b=null},
iZ:function iZ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
j_:function j_(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f3:function f3(){}},E={
i7:function(a){var s,r=new E.by()
r.a=""
r.b=!0
s=O.lN(t.l)
r.y=s
s.bl(r.giX(),r.gj_())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.scS(0,a)
r.sb0(null)
r.sbb(null)
return r},
nn:function(){if(J.lF(window.navigator.vendor,"Google"))return C.A
if(J.lF(window.navigator.userAgent,"Firefox"))return C.p
var s=window.navigator.appVersion
if(J.b7(s).U(s,"Trident")||C.a.U(s,"Edge"))return C.q
if(J.lF(window.navigator.appName,"Microsoft"))return C.q
return C.B},
no:function(){var s=window.navigator.appVersion
if(J.b7(s).U(s,"Win"))return C.V
if(C.a.U(s,"Mac"))return C.w
if(C.a.U(s,"Linux"))return C.W
return C.X},
pd:function(a,b){var s=new E.jg(a)
s.eU(a,b)
return s},
pl:function(a,b,c,d,e){var s,r
if(t.fr.b(a))return E.n8(a,!0,!0,!0,!1)
s=W.lM()
r=s.style
r.width="100%"
r.height="100%"
J.dJ(a).m(0,s)
return E.n8(s,!0,!0,!0,!1)},
n8:function(a,b,c,d,e){var s,r,q,p="mousemove",o=new E.f7(),n=t.z,m=C.j.cQ(a,"webgl2",P.oV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n))
if(m==null)H.l(P.k("Failed to get the rendering context for WebGL."))
o.b=a
o.c=m
o.e=E.pd(m,a)
n=new T.jy(m)
n.b=m.getParameter(3379)
m.getParameter(34076)
n.e=n.d=0
o.f=n
n=new X.fr(a)
s=new X.iN()
s.c=new X.az(!1,!1,!1)
s.d=P.mK(t.e)
n.b=s
s=new X.jb(n)
s.f=0
s.r=V.bH()
s.x=V.bH()
s.ch=s.Q=1
n.c=s
s=new X.iS(n)
s.r=0
s.x=V.bH()
s.cy=s.cx=s.ch=s.Q=1
n.d=s
s=new X.jD(n)
s.f=V.bH()
s.r=V.bH()
n.e=s
n.x=n.r=n.f=!1
n.y=null
n.z=H.d([],t.eG)
s=$.i8
n.Q=(s==null?$.i8=new E.fJ(E.nn(),E.no()):s).a===C.p?0.16666666666666666:0.005555555555555556
r=n.z
q=document
r.push(W.T(q,"contextmenu",n.gfZ(),!1))
n.z.push(W.T(a,"focus",n.gh4(),!1))
n.z.push(W.T(a,"blur",n.gfT(),!1))
n.z.push(W.T(q,"keyup",n.gh8(),!1))
n.z.push(W.T(q,"keydown",n.gh6(),!1))
n.z.push(W.T(a,"mousedown",n.ghc(),!1))
n.z.push(W.T(a,"mouseup",n.ghg(),!1))
n.z.push(W.T(a,p,n.ghe(),!1))
r=n.z
W.i5(a)
W.i5(a)
r.push(W.T(a,W.i5(a),n.ghi(),!1))
n.z.push(W.T(q,p,n.gh0(),!1))
n.z.push(W.T(q,"mouseup",n.gh2(),!1))
n.z.push(W.T(q,"pointerlockchange",n.ghk(),!1))
n.z.push(W.T(a,"touchstart",n.ghx(),!1))
n.z.push(W.T(a,"touchend",n.ght(),!1))
n.z.push(W.T(a,"touchmove",n.ghv(),!1))
o.x=n
o.ch=!0
o.cx=!1
o.cy=new P.as(Date.now(),!1)
o.db=0
o.ds()
return o},
hS:function hS(){},
by:function by(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bS:function bS(a){this.b=a},
c8:function c8(a){this.b=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
jg:function jg(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
f7:function f7(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
jA:function jA(a){this.a=a}},Z={
m4:function(a,b,c){var s=a.createBuffer()
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.fu(b,s)},
aF:function(a){return new Z.b4(a)},
fu:function fu(a,b){this.a=a
this.b=b},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
fv:function fv(a){this.a=a},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
dU:function dU(){this.a=null},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a}},D={
M:function(){var s=new D.bz()
s.d=0
return s},
hT:function hT(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
V:function V(){this.b=null},
bb:function bb(){this.b=null},
bc:function bc(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
dR:function dR(){},
e2:function e2(){},
Y:function Y(){},
cJ:function cJ(){var _=this
_.d=_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
eI:function eI(){},
eW:function eW(){}},X={dV:function dV(a,b){this.a=a
this.b=b},eh:function eh(a,b){this.a=a
this.b=b},iN:function iN(){var _=this
_.d=_.c=_.b=_.a=null},cN:function cN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},iS:function iS(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},az:function az(a,b,c){this.a=a
this.b=b
this.c=c},c4:function c4(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},jb:function jb(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c5:function c5(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},eJ:function eJ(){},d0:function d0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},jD:function jD(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},fr:function fr(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
oL:function(a){var s=new X.ih(),r=new V.L(0,0,0,1)
s.a=r
s.b=!0
s.c=2000
s.d=!0
s.e=0
s.f=!1
r=$.n0
if(r==null){r=V.n_(0,0,1,1)
$.n0=r}s.r=r
return s},
lL:function lL(){},
ih:function ih(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eE:function eE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ju:function ju(){}},V={
lO:function(a){var s,r,q=a.length
if(0>=q)return H.b(a,0)
s=a[0]
if(1>=q)return H.b(a,1)
r=a[1]
if(2>=q)return H.b(a,2)
q=a[2]
if(typeof s!=="number")return s.N()
if(s<0)s=0
else if(s>1)s=1
if(typeof r!=="number")return r.N()
if(r<0)r=0
else if(r>1)r=1
if(typeof q!=="number")return q.N()
if(q<0)q=0
else if(q>1)q=1
return new V.S(s,r,q)},
oE:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.bD(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:if(b<0)n=0
else n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.S(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
if(b<0)m=0
else m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.S(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
if(b<0)m=0
else m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.S(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
if(b<0)l=0
else l=b>1?1:b
return new V.S(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
if(b<0)l=0
else l=b>1?1:b
return new V.S(n,m,l)
default:if(b<0)n=0
else n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.S(n,m,l)}},
dY:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.L(a,a,a,1)},
oF:function(a){return new V.L(a.a,a.b,a.c,1)},
rm:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bj(a-b,s)
return(a<0?a+s:a)+b},
H:function(a,b,c){if(a==null)return C.a.aq("null",c)
$.B().toString
return C.a.aq(C.d.eC(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cr:function(a,b,c){var s,r,q,p,o,n,m=H.d([],t.i)
for(s=a.length,r=0,q=0;q<a.length;a.length===s||(0,H.t)(a),++q){p=V.H(a[q],b,c)
r=Math.max(r,p.length)
m.push(p)}for(s=m.length,o=s-1;o>=0;--o,s=n){if(o>=s)return H.b(m,o)
s=C.a.aq(m[o],r)
n=m.length
if(o>=n)return H.b(m,o)
m[o]=s}return m},
mq:function(a){return C.d.jz(Math.pow(2,C.P.bD(Math.log(H.cp(a))/Math.log(2))))},
eo:function(){var s=$.mO
return s==null?$.mO=V.aX(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aX:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mN:function(a,b,c){return V.aX(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mM:function(a,b,c){return V.aX(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
bH:function(){var s=$.mR
return s==null?$.mR=new V.aZ(0,0):s},
m_:function(){var s=$.b_
return s==null?$.b_=new V.ac(0,0,0):s},
n_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eO(a,b,c,d)},
n1:function(a,b,c,d,e,f){return new V.cb(a,b,c,d,e,f)},
n2:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a==null)return b
if(b==null)return a
s=a.a
r=b.a
q=Math.min(H.cp(s),H.cp(r))
p=a.b
o=b.b
n=Math.min(H.cp(p),H.cp(o))
m=a.c
l=b.c
k=Math.min(H.cp(m),H.cp(l))
j=a.d
if(typeof s!=="number")return s.n()
i=b.d
if(typeof r!=="number")return r.n()
h=Math.max(s+j,r+i)
i=a.e
if(typeof p!=="number")return p.n()
r=b.e
if(typeof o!=="number")return o.n()
g=Math.max(p+i,o+r)
r=a.f
if(typeof m!=="number")return m.n()
o=b.f
if(typeof l!=="number")return l.n()
return new V.cb(q,n,k,h-q,g-n,Math.max(m+r,l+o)-k)},
R:function(){var s=$.nk
return s==null?$.nk=new V.Q(0,0,0):s},
nm:function(){var s=$.ni
return s==null?$.ni=new V.Q(1,0,0):s},
nl:function(){var s=$.nh
return s==null?$.nh=new V.Q(0,0,-1):s},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(){},
en:function en(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
be:function be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aZ:function aZ(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
an:function an(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
ri:function(a){P.pm(C.M,new V.lD(a))},
mW:function(a){var s=new V.je(a),r=document.getElementById(a)
s.c=r
if(r==null)H.l("Failed to find "+a+" for RadioGroup")
return s},
pg:function(a){var s=new V.jp()
s.eW(a,!0)
return s},
hU:function hU(a){this.a=a
this.d=this.c=null},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lD:function lD(a){this.a=a},
je:function je(a){this.a=a
this.c=null},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(){this.b=this.a=null},
jr:function jr(a){this.a=a},
jq:function jq(a){this.a=a}},U={
lP:function(){var s=new U.hW()
s.a=!0
s.b=1e12
s.c=-1e12
s.d=0
s.e=100
s.r=s.x=s.f=0
return s},
hW:function hW(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cv:function cv(){this.b=this.a=null},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
Z:function Z(){},
d6:function d6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={e5:function e5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
oY:function(a,b){var s=a.b9,r=new A.em(b,s)
r.cX(b,s)
r.eT(a,b)
return r},
oZ:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="MaterialLight_"+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+b0.gaf(b0)+b1.gaf(b1)+b2.gaf(b2)+b3.gaf(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.t)(b4),++r)a+="_"+H.h(b4[r].a)}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.t)(b5),++r)a+="_"+H.h(b5[r].a)}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.t)(b6),++r)a+="_"+H.h(b6[r].a)}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.t)(b7),++r)a+="_"+H.h(b7[r].a)}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.aR()
if(h){s=$.aQ()
b=new Z.b4(b.a|s.a)}if(g){s=$.aP()
b=new Z.b4(b.a|s.a)}if(f){s=$.bt()
b=new Z.b4(b.a|s.a)}if(e){s=$.bs()
b=new Z.b4(b.a|s.a)}return new A.iX(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
kN:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kO:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.kN(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hG(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
qu:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.kN(b,r,"emission")
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
qq:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.kO(b,r,"ambient")
b.a+="\n"},
qs:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.kO(b,r,"diffuse")
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
qv:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.kO(b,r,"invDiffuse")
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
qB:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.kO(b,r,"specular")
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
qx:function(a,b){var s,r,q
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
qz:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.kN(b,r,"reflect")
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
qA:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.kN(b,r,"refract")
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
qr:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+H.h(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.ak()
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
c.a=p+"\n"}p=t.i
o=H.d([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.v(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.d([],p)
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
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
n=H.d([],p)
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.v(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.v(o," + ")+");\n"
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
qt:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+H.h(s)
q=A.hG(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
if(typeof s!=="number")return s.ak()
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
p=c.a+="uniform "+q+" "+r+"s["+j+"];\n"
if(s)for(o=0;o<j;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
p=t.i
m=H.d([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.h
k=H.d([],p)
p=a.c
if(p.a||p.b||!1)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.v(k," + ")+");\n"}else c.a+="   highLight = "+C.b.v(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.v(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<j;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}j=s}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+r+"Count) break;\n"
c.a=j
j+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
qy:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+H.h(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.ak()
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
c.a=p+"\n"}p=t.i
j=H.d([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.v(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.d([],p)
m=a.b
if(m.a||m.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.d([],p)
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.v(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.v(j," + ")+");\n"
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
qC:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+H.h(s)
q=A.hG(r)
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
if(typeof s!=="number")return s.ak()
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
if(m){s=$.i8
if(s==null)s=$.i8=new E.fJ(E.nn(),E.no())
p=c.a
if(s.b===C.w){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}s=t.i
h=H.d([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.v(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.d([],s)
p=a.b
if(p.a||p.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.d([],s)
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.v(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.v(h," + ")+");\n"
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
qw:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.d([],t.i)
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.v(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
qD:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j="precision mediump float;\n\n",i="precision mediump float;\n\nvarying vec3 normalVec;\n",h=new P.a1("")
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
A.qu(a,h)
A.qq(a,h)
A.qs(a,h)
A.qv(a,h)
A.qB(a,h)
r=a.db
if(r){p=h.a+="// === Environmental ===\n"
p+="\n"
h.a=p
p+="uniform samplerCube envSampler;\n"
h.a=p
h.a=p+"\n"
A.qz(a,h)
A.qA(a,h)}A.qx(a,h)
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
if(p){for(o=a.z,n=o.length,m=0;m<o.length;o.length===n||(0,H.t)(o),++m)A.qr(a,o[m],h)
for(o=a.Q,n=o.length,m=0;m<o.length;o.length===n||(0,H.t)(o),++m)A.qt(a,o[m],h)
for(o=a.ch,n=o.length,m=0;m<o.length;o.length===n||(0,H.t)(o),++m)A.qy(a,o[m],h)
for(o=a.cx,n=o.length,m=0;m<o.length;o.length===n||(0,H.t)(o),++m)A.qC(a,o[m],h)
A.qw(a,h)}o=h.a+="// === Main ===\n"
o+="\n"
h.a=o
o+="void main()\n"
h.a=o
o+="{\n"
h.a=o
o=h.a=o+"   float alpha = alphaValue();\n"
s=s?h.a=o+"   vec3 norm = normal();\n":o
if(r)h.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.d([],t.i)
if(p){h.a+=u.N
l.push("lightAccum")
s=a.b
if(s.a||s.b||!1)h.a+="   setAmbientColor();\n"
s=a.c
if(s.a||s.b||!1)h.a+="   setDiffuseColor();\n"
s=a.d
if(s.a||s.b||!1)h.a+="   setInvDiffuseColor();\n"
s=a.e
if(s.a||s.b||!1)h.a+="   setSpecularColor();\n"
for(s=a.z,r=s.length,m=0;m<s.length;s.length===r||(0,H.t)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}for(s=a.Q,r=s.length,m=0;m<s.length;s.length===r||(0,H.t)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}for(s=a.ch,r=s.length,m=0;m<s.length;s.length===r||(0,H.t)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}for(s=a.cx,r=s.length,m=0;m<s.length;s.length===r||(0,H.t)(s),++m){p=s[m].i(0)
if(0>=p.length)return H.b(p,0)
h.a+=k+(p[0].toUpperCase()+C.a.ah(p,1))+"Values(norm);\n"}if(a.cy<=0)h.a+="   lightAccum += nonLightValues(norm);\n"}s=a.a
if(s.a||s.b||!1)l.push("emissionColor()")
s=a.r
if(s.a||s.b||!1)l.push("reflect(refl)")
s=a.x
if(s.a||s.b||!1)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
s=h.a+="   vec4 objClr = vec4("+C.b.v(l," + ")+", alpha);\n"
if(q)s=h.a=s+"   objClr = colorMat*objClr;\n"
s+="   gl_FragColor = objClr;\n"
h.a=s
s=h.a=s+"}\n"
return s.charCodeAt(0)==0?s:s},
qE:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aV+"];\n"
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
qG:function(a,b){var s
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
qF:function(a,b){var s
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
qI:function(a,b){var s,r
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
qJ:function(a,b){var s,r
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
qH:function(a,b){var s
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
qK:function(a,b){var s
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
hG:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ah(a,1)},
m3:function(a,b,c,d,e){var s=new A.jH(a,c,e)
s.f=d
P.iQ(d,0,!1,t.e)
return s},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a){this.a=a},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
em:function em(a,b){var _=this
_.jK=_.dU=_.bC=_.b9=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jS=_.jR=_.jQ=_.cz=_.cw=_.cv=_.cu=_.ct=_.cs=_.cr=_.cq=_.jP=_.e5=_.e4=_.jO=_.e3=_.e2=_.e1=_.jN=_.e0=_.e_=_.dZ=_.jM=_.dY=_.dX=_.jL=_.dW=_.dV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dS:function dS(a,b){this.a=a
this.b=b},
e3:function e3(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
eX:function eX(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aV=b5
_.b9=b6
_.bC=b7},
d1:function d1(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d2:function d2(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d4:function d4(a,b,c,d,e,f,g,h,i,j){var _=this
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
d5:function d5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cc:function cc(){},
fd:function fd(){},
jM:function jM(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.c=b
this.d=c},
jJ:function jJ(a,b,c){this.a=a
this.c=b
this.d=c},
jK:function jK(a,b,c){this.a=a
this.c=b
this.d=c},
jL:function jL(a,b,c){this.a=a
this.c=b
this.d=c},
jH:function jH(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
fe:function fe(a,b,c){this.a=a
this.c=b
this.d=c},
jI:function jI(a,b,c){this.a=a
this.c=b
this.d=c},
fg:function fg(a,b,c){this.a=a
this.c=b
this.d=c},
fh:function fh(a,b,c){this.a=a
this.c=b
this.d=c},
jN:function jN(a,b,c){this.a=a
this.c=b
this.d=c},
fi:function fi(a,b,c){this.a=a
this.c=b
this.d=c},
d3:function d3(a,b,c){this.a=a
this.c=b
this.d=c},
fj:function fj(a,b,c){this.a=a
this.c=b
this.d=c},
fk:function fk(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oK:function(a,b,c){var s=new F.cD(),r=a.a
if(r==null)H.l(P.k(u.p))
if(r!=b.a||r!=c.a)H.l(P.k(u.R))
s.a=a
a.d.b.push(s)
s.b=b
b.d.c.push(s)
s.c=c
c.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.Z()
return s},
oT:function(a,b){var s,r=new F.cK()
if(a==null)H.l(P.k(u.e))
if(b==null)H.l(P.k(u.k))
s=a.a
if(s==null)H.l(P.k(u.E))
if(s!=b.a)H.l(P.k(u.T))
r.a=a
a.c.b.push(r)
r.b=b
b.c.c.push(r)
r.a.a.c.b.push(r)
r.a.a.Z()
return r},
lZ:function(a){var s=new F.eH()
if(a.a==null)H.l(P.k("May not create a point with a vertex which is not attached to a shape."))
s.a=a
a.b.b.push(s)
s.a.a.b.b.push(s)
s.a.a.Z()
return s},
ad:function(){var s=new F.aB(),r=new F.k_(s)
r.b=!1
r.c=H.d([],t.j)
s.a=r
r=new F.jo(s)
r.b=H.d([],t.k)
s.b=r
r=new F.jn(s)
r.b=H.d([],t.B)
s.c=r
r=new F.jm(s)
r.b=H.d([],t.b)
s.d=r
s.e=null
return s},
cf:function(a,b,c,d,e,f,g,h,i){var s,r=null,q=new F.fs(),p=new F.k4()
p.b=H.d([],t.k)
q.b=p
p=new F.k3()
s=t.B
p.b=H.d([],s)
p.c=H.d([],s)
q.c=p
p=new F.k0()
s=t.b
p.b=H.d([],s)
p.c=H.d([],s)
p.d=H.d([],s)
q.d=p
h=$.oj()
q.e=0
p=$.aR()
s=h.a
q.f=(s&p.a)!==0?d:r
q.r=(s&$.aQ().a)!==0?e:r
q.x=(s&$.aP().a)!==0?b:r
q.y=(s&$.bt().a)!==0?f:r
q.z=(s&$.bQ().a)!==0?g:r
q.Q=(s&$.ok().a)!==0?c:r
q.ch=(s&$.ct().a)!==0?i:0
q.cx=(s&$.bs().a)!==0?a:r
return q},
cD:function cD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
cK:function cK(){this.b=this.a=null},
eH:function eH(){this.a=null},
aB:function aB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jm:function jm(a){this.a=a
this.b=null},
jn:function jn(a){this.a=a
this.b=null},
jo:function jo(a){this.a=a
this.b=null},
fs:function fs(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
k6:function k6(a){this.a=a},
k5:function k5(a){this.a=a},
k_:function k_(a){this.a=a
this.c=this.b=null},
k0:function k0(){this.d=this.c=this.b=null},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(){this.c=this.b=null},
k4:function k4(){this.b=null}},T={f6:function f6(){},jw:function jw(){},jx:function jx(){var _=this
_.y=_.d=_.c=_.b=_.a=null},jy:function jy(a){var _=this
_.a=a
_.e=_.d=_.b=null},jz:function jz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
nY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="controls",b="modifiers",a={},a0=V.pg("Test 032"),a1=W.lM()
a1.className="pageLargeCanvas"
a1.id=e
a0.a.appendChild(a1)
s=t.i
a0.dE(H.d(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],s))
a0.ih(H.d(["controls","shapes","scalars"],s))
a0.dE(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(e)
if(r==null)H.l(P.k("Failed to find an element with the identifier, testCanvas."))
q=E.pl(r,!0,!0,!0,!1)
a.a=!0
p=E.i7(d)
a0=new U.bX()
a0.bM(t.ah)
a0.bl(a0.gfL(),a0.ghp())
a0.e=null
a0.f=V.eo()
a0.r=0
o=q.x
n=new U.d7()
m=U.lP()
m.scO(0,!0)
m.scF(6.283185307179586)
m.scH(0)
m.sab(0,0)
m.scG(100)
m.sX(0)
m.scp(0.5)
n.b=m
l=n.gaN()
m.gB().m(0,l)
m=U.lP()
m.scO(0,!0)
m.scF(6.283185307179586)
m.scH(0)
m.sab(0,0)
m.scG(100)
m.sX(0)
m.scp(0.5)
n.c=m
m.gB().m(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.az(!1,!1,!1)
j=n.d
n.d=k
m=new D.w(b,j,k)
m.b=!0
n.R(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.w("invertX",m,!1)
m.b=!0
n.R(m)}m=n.r
if(m!==!0){n.r=!0
m=new D.w("invertY",m,!0)
m.b=!0
n.R(m)}n.b7(o)
a0.m(0,n)
o=q.x
n=new U.d6()
m=U.lP()
m.scO(0,!0)
m.scF(6.283185307179586)
m.scH(0)
m.sab(0,0)
m.scG(100)
m.sX(0)
m.scp(0.2)
n.b=m
m.gB().m(0,n.gaN())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.az(!0,!1,!1)
j=n.c
n.c=k
m=new D.w(b,j,k)
m.b=!0
n.R(m)
n.b7(o)
a0.m(0,n)
o=q.x
n=new U.d8()
n.c=0.01
n.e=n.d=0
k=new X.az(!1,!1,!1)
n.b=k
m=new D.w(b,d,k)
m.b=!0
n.R(m)
n.b7(o)
a0.m(0,n)
p.sbb(a0)
i=new O.eb()
i.b=V.nl()
i.c=new V.L(0.2,0.3,0.4,1)
i.d=new V.L(0.1,0.2,0.3,1)
i.e=V.dY(0.7)
i.f=V.dY(0.3)
i.r=V.dY(0.5)
i.x=V.dY(0.5)
i.y=new V.L(1,1,1,1)
i.z=V.dY(0.8)
i.r1=i.k4=i.k3=i.k2=i.k1=i.id=i.go=i.fy=i.fx=i.fr=i.dy=i.dx=i.db=i.cy=i.cx=i.ch=i.Q=!1
i.r2=1
i.sag(0.4)
a0=new M.e5()
a0.a=!0
o=O.lN(t.l)
a0.e=o
o.bl(a0.gfV(),a0.gfX())
a0.y=a0.x=a0.r=a0.f=null
h=X.oL(d)
g=new X.eE()
g.c=1.0471975511965976
g.d=0.1
g.e=2000
g.sbb(d)
o=g.c
$.B().toString
if(!(Math.abs(o-1.0471975511965976)<1e-9)){g.c=1.0471975511965976
o=new D.w("fov",o,1.0471975511965976)
o.b=!0
g.aL(o)}o=g.d
$.B().toString
if(!(Math.abs(o-0.1)<1e-9)){g.d=0.1
o=new D.w("near",o,0.1)
o.b=!0
g.aL(o)}o=g.e
$.B().toString
if(!(Math.abs(o-2000)<1e-9)){g.e=2000
o=new D.w("far",o,2000)
o.b=!0
g.aL(o)}o=a0.b
if(o!==g){if(o!=null)o.gB().a_(0,a0.gay())
j=a0.b
a0.b=g
g.gB().m(0,a0.gay())
o=new D.w("camera",j,a0.b)
o.b=!0
a0.aA(o)}o=a0.c
if(o!==h){if(o!=null)o.gB().a_(0,a0.gay())
j=a0.c
a0.c=h
h.gB().m(0,a0.gay())
o=new D.w("target",j,a0.c)
o.b=!0
a0.aA(o)}a0.sb0(d)
a0.sb0(i)
a0.e.m(0,p)
o=a0.b
f=V.mN(0,0,5)
n=new U.cv()
n.a=f
o.sbb(n)
o=q.d
if(o!==a0){if(o!=null)o.gB().a_(0,q.gcY())
q.d=a0
a0.gB().m(0,q.gcY())
q.cZ()}a0=new V.hU(c)
s=s.getElementById(c)
a0.c=s
if(s==null)H.l("Failed to find controls for CheckGroup")
a0.d=H.d([],t.aM)
a0.a9(0,"Material",new G.l3(a,p),!0)
a0.t(0,"Filled",new G.l4(i))
a0.a9(0,"Wire Frame",new G.l5(i),!0)
a0.t(0,"Vertices",new G.lg(i))
a0.t(0,"Normals",new G.lr(i))
a0.t(0,"Binormals",new G.lt(i))
a0.t(0,"Tangentals",new G.lu(i))
a0.t(0,"Face Centers",new G.lv(i))
a0.t(0,"Face Normals",new G.lw(i))
a0.t(0,"Face Binormals",new G.lx(i))
a0.t(0,"Face Tangentals",new G.ly(i))
a0.t(0,"Colors",new G.l6(i))
a0.t(0,"Textures2D",new G.l7(i))
a0.t(0,"TexturesCube",new G.l8(i))
a0.t(0,"Weight",new G.l9(i))
a0.a9(0,"Axis",new G.la(i),!0)
a0.t(0,"AABB",new G.lb(i))
a=new G.lB(a,q,p,new G.lz(),i)
a0=V.mW("shapes")
a0.a9(0,"Cube",new G.lc(a),!0)
a0.t(0,"Low Poly Tree",new G.ld(a))
a0.t(0,"Low Poly Wolf",new G.le(a))
a0.t(0,"Plant",new G.lf(a))
a=V.mW("scalars")
a.t(0,"0.01",new G.lh(i))
a.t(0,"0.02",new G.li(i))
a.t(0,"0.04",new G.lj(i))
a.t(0,"0.06",new G.lk(i))
a.t(0,"0.08",new G.ll(i))
a.t(0,"0.1",new G.lm(i))
a.t(0,"0.2",new G.ln(i))
a.a9(0,"0.4",new G.lo(i),!0)
a.t(0,"0.6",new G.lp(i))
a.t(0,"0.8",new G.lq(i))
a.t(0,"1.0",new G.ls(i))
V.ri(q)},
l3:function l3(a,b){this.a=a
this.b=b},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
lg:function lg(a){this.a=a},
lr:function lr(a){this.a=a},
lt:function lt(a){this.a=a},
lu:function lu(a){this.a=a},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
lx:function lx(a){this.a=a},
ly:function ly(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lz:function lz(){},
lA:function lA(a,b){this.a=a
this.b=b},
lB:function lB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
lf:function lf(a){this.a=a},
lh:function lh(a){this.a=a},
li:function li(a){this.a=a},
lj:function lj(a){this.a=a},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
lp:function lp(a){this.a=a},
lq:function lq(a){this.a=a},
ls:function ls(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lU.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gT:function(a){return H.cW(a)},
i:function(a){return"Instance of '"+H.h(H.eL(a))+"'"}}
J.ee.prototype={
i:function(a){return String(a)},
gT:function(a){return a?519018:218159},
$ib6:1}
J.c0.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gT:function(a){return 0},
$ia0:1}
J.bd.prototype={
gT:function(a){return 0},
i:function(a){return String(a)},
$imE:1}
J.eF.prototype={}
J.bK.prototype={}
J.aI.prototype={
i:function(a){var s=a[$.o6()]
if(s==null)return this.eR(a)
return"JavaScript function for "+H.h(J.aj(s))}}
J.u.prototype={
jm:function(a,b){var s
if(!!a.fixed$length)H.l(P.z("removeAt"))
s=a.length
if(b>=s)throw H.c(P.eN(b,null))
return a.splice(b,1)[0]},
a_:function(a,b){var s
if(!!a.fixed$length)H.l(P.z("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
by:function(a,b){var s,r
if(!!a.fixed$length)H.l(P.z("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.t)(b),++r)a.push(b[r])},
q:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.bV(a))}},
v:function(a,b){var s,r,q=P.iQ(a.length,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.h(a[s])
if(s>=q.length)return H.b(q,s)
q[s]=r}return q.join(b)},
iS:function(a){return this.v(a,"")},
iK:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.bV(a))}return s},
iL:function(a,b,c){return this.iK(a,b,c,t.z)},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
gaH:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.oO())},
b4:function(a,b){if(!!a.immutable$list)H.l(P.z("sort"))
H.pj(a,b==null?J.qh():b)},
eO:function(a){return this.b4(a,null)},
U:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.lR(a,"[","]")},
ga1:function(a){return new J.aa(a,a.length)},
gT:function(a){return H.cW(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.l(P.z("set length"))
a.length=b},
h:function(a,b){if(!H.bM(b))throw H.c(H.bN(a,b))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.l(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$io:1,
$ij:1,
$iq:1}
J.iK.prototype={}
J.aa.prototype={
gI:function(a){return this.d},
A:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.t(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bD.prototype={
aU:function(a,b){var s
if(typeof b!="number")throw H.c(H.ap(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbF(b)
if(this.gbF(a)===s)return 0
if(this.gbF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbF:function(a){return a===0?1/a<0:a<0},
jz:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
bD:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
ax:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
eC:function(a,b){var s
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbF(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gT:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
bj:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eS:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.h(s)+": "+H.h(a)+" ~/ "+b))},
aQ:function(a,b){var s
if(a>0)s=this.du(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hV:function(a,b){if(b<0)throw H.c(H.ap(b))
return this.du(a,b)},
du:function(a,b){return b>31?0:a>>>b},
$ia8:1,
$iU:1}
J.cI.prototype={$in:1}
J.cH.prototype={}
J.aU.prototype={
S:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.l(H.bN(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!="string")throw H.c(P.lI(b,null,null))
return a+b},
aZ:function(a,b,c,d){var s,r,q=P.bg(b,c,a.length)
if(!H.bM(q))H.l(H.ap(q))
s=a.substring(0,b)
r=a.substring(q)
return s+d+r},
ad:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
al:function(a,b){return this.ad(a,b,0)},
u:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eN(b,null))
if(b>c)throw H.c(P.eN(b,null))
if(c>a.length)throw H.c(P.eN(c,null))
return a.substring(b,c)},
ah:function(a,b){return this.u(a,b,null)},
eE:function(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.D(p,0)===133){s=J.oR(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.S(p,r)===133?J.oS(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
l:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aq:function(a,b){var s=b-a.length
if(s<=0)return a
return this.l(" ",s)+a},
j5:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.l(c,s)},
bE:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cD:function(a,b){return this.bE(a,b,0)},
iT:function(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
ir:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.af(c,0,s,null,null))
return H.o1(a,b,c)},
U:function(a,b){return this.ir(a,b,0)},
aU:function(a,b){var s
if(typeof b!="string")throw H.c(H.ap(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gT:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
$iA:1}
H.ei.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.P.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.S(this.a,b)}}
H.o.prototype={}
H.c1.prototype={
gI:function(a){var s=this.d
return s},
A:function(){var s,r=this,q=r.a,p=J.b7(q),o=p.gk(q)
if(r.b!=o)throw H.c(P.bV(q))
s=r.c
if(typeof o!=="number")return H.f(o)
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.bF.prototype={
ga1:function(a){return new H.el(J.bu(this.a),this.b)},
gk:function(a){return J.ar(this.a)},
F:function(a,b){return this.b.$1(J.lG(this.a,b))}}
H.cB.prototype={$io:1}
H.el.prototype={
A:function(){var s=this,r=s.b
if(r.A()){s.a=s.c.$1(r.gI(r))
return!0}s.a=null
return!1},
gI:function(a){var s=this.a
return s}}
H.d9.prototype={
ga1:function(a){return new H.fw(J.bu(this.a),this.b)}}
H.fw.prototype={
A:function(){var s,r
for(s=this.a,r=this.b;s.A();)if(r.$1(s.gI(s)))return!0
return!1},
gI:function(a){var s=this.a
return s.gI(s)}}
H.cE.prototype={}
H.fn.prototype={
j:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.cd.prototype={}
H.cw.prototype={
i:function(a){return P.lY(this)},
j:function(a,b,c){H.oG()},
$iF:1}
H.cx.prototype={
gk:function(a){return this.a},
cn:function(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cn(0,b))return null
return this.dg(b)},
dg:function(a){return this.b[a]},
q:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.dg(q))}}}
H.jF.prototype={
ap:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ey.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eg.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.h(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.h(r.a)+")"
return q+p+"' on '"+s+"' ("+H.h(r.a)+")"}}
H.fm.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.jc.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.cC.prototype={}
H.dq.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ial:1}
H.bU.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.o4(r==null?"unknown":r)+"'"},
gjD:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.jv.prototype={}
H.js.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.o4(s)+"'"}}
H.cu.prototype={
w:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cu))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gT:function(a){var s,r=this.c
if(r==null)s=H.cW(this.a)
else s=typeof r!=="object"?J.aq(r):H.cW(r)
return(s^H.cW(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.h(H.eL(s))+"'")}}
H.eR.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.x.prototype={
gk:function(a){return this.a},
gao:function(a){return new H.cL(this)},
gjC:function(a){return H.oX(this.gao(this),new H.iM(this))},
cn:function(a,b){var s=this.b
if(s==null)return!1
return this.fk(s,b)},
by:function(a,b){J.hH(b,new H.iL(this))},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bp(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bp(p,b)
q=r==null?n:r.b
return q}else return o.iQ(b)},
iQ:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.dh(p,q.ec(a))
r=q.ed(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.d3(s==null?q.b=q.c5():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.d3(r==null?q.c=q.c5():r,b,c)}else q.iR(b,c)},
iR:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.c5()
s=p.ec(a)
r=p.dh(o,s)
if(r==null)p.ce(o,s,[p.c6(a,b)])
else{q=p.ed(r,a)
if(q>=0)r[q].b=b
else r.push(p.c6(a,b))}},
q:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.bV(s))
r=r.c}},
d3:function(a,b,c){var s=this.bp(a,b)
if(s==null)this.ce(a,b,this.c6(b,c))
else s.b=c},
c6:function(a,b){var s=this,r=new H.iO(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
ec:function(a){return J.aq(a)&0x3ffffff},
ed:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.lY(this)},
bp:function(a,b){return a[b]},
dh:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
fn:function(a,b){delete a[b]},
fk:function(a,b){return this.bp(a,b)!=null},
c5:function(){var s="<non-identifier-key>",r=Object.create(null)
this.ce(r,s,r)
this.fn(r,s)
return r}}
H.iM.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return H.mh(this.a).L("2(1)")}}
H.iL.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:function(){return H.mh(this.a).L("a0(1,2)")}}
H.iO.prototype={}
H.cL.prototype={
gk:function(a){return this.a.a},
ga1:function(a){var s=this.a,r=new H.ek(s,s.r)
r.c=s.e
return r}}
H.ek.prototype={
gI:function(a){return this.d},
A:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.bV(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.kZ.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.l_.prototype={
$2:function(a,b){return this.a(a,b)}}
H.l0.prototype={
$1:function(a){return this.a(a)}}
H.ef.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfI:function(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=H.mG(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
iJ:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.fV(s)},
fp:function(a,b){var s,r=this.gfI()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new H.fV(s)},
$imZ:1}
H.fV.prototype={}
H.k7.prototype={
gI:function(a){var s=this.d
s.toString
return s},
A:function(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.fp(l,s)
if(p!=null){m.d=p
s=p.b
o=s.index
n=o+s[0].length
if(o===n){if(q.b.unicode){s=m.c
q=s+1
if(q<r){s=C.a.S(l,s)
if(s>=55296&&s<=56319){s=C.a.S(l,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
n=(s?n+1:n)+1}m.c=n
return!0}}m.b=m.d=null
return!1}}
H.cS.prototype={$icS:1}
H.a_.prototype={$ia_:1}
H.c6.prototype={
gk:function(a){return a.length},
$iy:1}
H.bG.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]},
j:function(a,b,c){H.b5(b,a,a.length)
a[b]=c},
$io:1,
$ij:1,
$iq:1}
H.cT.prototype={
j:function(a,b,c){H.b5(b,a,a.length)
a[b]=c},
$io:1,
$ij:1,
$iq:1}
H.et.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eu.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ev.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ew.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.ex.prototype={
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.cU.prototype={
gk:function(a){return a.length},
h:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.c7.prototype={
gk:function(a){return a.length},
h:function(a,b){H.b5(b,a,a.length)
return a[b]},
$ic7:1,
$ibi:1}
H.di.prototype={}
H.dj.prototype={}
H.dk.prototype={}
H.dl.prototype={}
H.aA.prototype={
L:function(a){return H.hr(v.typeUniverse,this,a)},
bQ:function(a){return H.pO(v.typeUniverse,this,a)}}
H.fP.prototype={}
H.fK.prototype={
i:function(a){return this.a}}
H.dv.prototype={}
P.k9.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:9}
P.k8.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)}}
P.ka.prototype={
$0:function(){this.a.$0()}}
P.kb.prototype={
$0:function(){this.a.$0()}}
P.du.prototype={
eZ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cq(new P.kB(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
f_:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cq(new P.kA(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$id_:1}
P.kB.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.kA.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eS(s,o)}q.c=p
r.d.$1(q)}}
P.fx.prototype={
cm:function(a,b){var s,r=this
if(!r.b)r.a.d4(b)
else{s=r.a
if(r.$ti.L("ay<1>").b(b))s.d9(b)
else s.dc(b)}},
bB:function(a,b){var s
if(b==null)b=P.lJ(a)
s=this.a
if(this.b)s.bo(a,b)
else s.d5(a,b)}}
P.kH.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:17}
P.kI.prototype={
$2:function(a,b){this.a.$2(1,new H.cC(a,b))},
$S:18}
P.kU.prototype={
$2:function(a,b){this.a(a,b)}}
P.ci.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.h(this.a)+")"}}
P.cj.prototype={
gI:function(a){var s=this.c
if(s==null)return this.b
return s.gI(s)},
A:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.A())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.ci){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.b(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.bu(s)
if(o instanceof P.cj){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dr.prototype={
ga1:function(a){return new P.cj(this.a())}}
P.ay.prototype={}
P.db.prototype={
bB:function(a,b){var s
P.hK(a,"error")
s=this.a
if(s.a!==0)throw H.c(P.n6("Future already completed"))
if(b==null)b=P.lJ(a)
s.d5(a,b)},
dO:function(a){return this.bB(a,null)}}
P.da.prototype={
cm:function(a,b){var s=this.a
if(s.a!==0)throw H.c(P.n6("Future already completed"))
s.d4(b)}}
P.dd.prototype={
iV:function(a){if((this.c&15)!==6)return!0
return this.b.b.cL(this.d,a.a)},
iO:function(a){var s=this.e,r=this.b.b
if(t.W.b(s))return r.js(s,a.a,a.b)
else return r.cL(s,a.a)}}
P.a9.prototype={
cM:function(a,b,c){var s,r=$.K
if(r!==C.e)b=b!=null?P.qN(b,r):b
s=new P.a9($.K,c.L("a9<0>"))
this.bO(new P.dd(s,b==null?1:3,a,b))
return s},
eB:function(a,b){return this.cM(a,null,b)},
dw:function(a,b,c){var s=new P.a9($.K,c.L("a9<0>"))
this.bO(new P.dd(s,19,a,b))
return s},
bO:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.bO(a)
return}r.a=s
r.c=q.c}P.cn(null,null,r.b,new P.kd(r,a))}},
dn:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.dn(a)
return}m.a=n
m.c=s.c}l.a=m.bu(a)
P.cn(null,null,m.b,new P.kl(l,m))}},
bt:function(){var s=this.c
this.c=null
return this.bu(s)},
bu:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
fh:function(a){var s,r=this,q=r.$ti
if(q.L("ay<1>").b(a))if(q.b(a))P.kg(a,r)
else P.nq(a,r)
else{s=r.bt()
r.a=4
r.c=a
P.ch(r,s)}},
dc:function(a){var s=this,r=s.bt()
s.a=4
s.c=a
P.ch(s,r)},
bo:function(a,b){var s=this,r=s.bt(),q=P.hM(a,b)
s.a=8
s.c=q
P.ch(s,r)},
d4:function(a){if(this.$ti.L("ay<1>").b(a)){this.d9(a)
return}this.f5(a)},
f5:function(a){this.a=1
P.cn(null,null,this.b,new P.kf(this,a))},
d9:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.cn(null,null,s.b,new P.kk(s,a))}else P.kg(a,s)
return}P.nq(a,s)},
d5:function(a,b){this.a=1
P.cn(null,null,this.b,new P.ke(this,a,b))},
$iay:1}
P.kd.prototype={
$0:function(){P.ch(this.a,this.b)}}
P.kl.prototype={
$0:function(){P.ch(this.b,this.a.a)}}
P.kh.prototype={
$1:function(a){var s=this.a
s.a=0
s.fh(a)},
$S:9}
P.ki.prototype={
$2:function(a,b){this.a.bo(a,b)},
$S:20}
P.kj.prototype={
$0:function(){this.a.bo(this.b,this.c)}}
P.kf.prototype={
$0:function(){this.a.dc(this.b)}}
P.kk.prototype={
$0:function(){P.kg(this.b,this.a)}}
P.ke.prototype={
$0:function(){this.a.bo(this.b,this.c)}}
P.ko.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.eA(q.d)}catch(p){s=H.W(p)
r=H.bq(p)
if(m.c){q=m.b.a.c.a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.hM(s,r)
o.b=!0
return}if(l instanceof P.a9&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.g.b(l)){n=m.b.a
q=m.a
q.c=l.eB(new P.kp(n),t.z)
q.b=!1}}}
P.kp.prototype={
$1:function(a){return this.a},
$S:21}
P.kn.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.cL(p.d,this.b)}catch(o){s=H.W(o)
r=H.bq(o)
q=this.a
q.c=P.hM(s,r)
q.b=!0}}}
P.km.prototype={
$0:function(){var s,r,q,p,o,n,m,l,k=this
try{s=k.a.a.c
p=k.b
if(p.a.iV(s)&&p.a.e!=null){p.c=p.a.iO(s)
p.b=!1}}catch(o){r=H.W(o)
q=H.bq(o)
p=k.a.a.c
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=P.hM(r,q)
l.b=!0}}}
P.fy.prototype={}
P.cZ.prototype={}
P.f0.prototype={}
P.he.prototype={}
P.d_.prototype={}
P.dN.prototype={
i:function(a){return H.h(this.a)},
$iJ:1,
gbm:function(){return this.b}}
P.kG.prototype={}
P.kS.prototype={
$0:function(){var s=H.c(this.a)
s.stack=J.aj(this.b)
throw s}}
P.kt.prototype={
ju:function(a){var s,r,q,p=null
try{if(C.e===$.K){a.$0()
return}P.nK(p,p,this,a)}catch(q){s=H.W(q)
r=H.bq(q)
P.kR(p,p,this,s,r)}},
jw:function(a,b){var s,r,q,p=null
try{if(C.e===$.K){a.$1(b)
return}P.nL(p,p,this,a,b)}catch(q){s=H.W(q)
r=H.bq(q)
P.kR(p,p,this,s,r)}},
jx:function(a,b){return this.jw(a,b,t.z)},
ip:function(a){return new P.kv(this,a)},
io:function(a){return this.ip(a,t.z)},
cj:function(a){return new P.ku(this,a)},
dJ:function(a,b){return new P.kw(this,a,b)},
jr:function(a){if($.K===C.e)return a.$0()
return P.nK(null,null,this,a)},
eA:function(a){return this.jr(a,t.z)},
jv:function(a,b){if($.K===C.e)return a.$1(b)
return P.nL(null,null,this,a,b)},
cL:function(a,b){return this.jv(a,b,t.z,t.z)},
jt:function(a,b,c){if($.K===C.e)return a.$2(b,c)
return P.qO(null,null,this,a,b,c)},
js:function(a,b,c){return this.jt(a,b,c,t.z,t.z,t.z)},
jl:function(a){return a},
ex:function(a){return this.jl(a,t.z,t.z,t.z)}}
P.kv.prototype={
$0:function(){return this.a.eA(this.b)}}
P.ku.prototype={
$0:function(){return this.a.ju(this.b)}}
P.kw.prototype={
$1:function(a){return this.a.jx(this.b,a)},
$S:function(){return this.c.L("~(0)")}}
P.de.prototype={
ga1:function(a){var s=new P.df(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
U:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.fe(b)
return r}},
fe:function(a){var s=this.d
if(s==null)return!1
return this.bX(s[this.bT(a)],a)>=0},
m:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.da(s==null?q.b=P.m6():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.da(r==null?q.c=P.m6():r,b)}else return q.f3(0,b)},
f3:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.m6()
s=q.bT(b)
r=p[s]
if(r==null)p[s]=[q.bS(b)]
else{if(q.bX(r,b)>=0)return!1
r.push(q.bS(b))}return!0},
a_:function(a,b){if(typeof b=="number"&&(b&1073741823)===b)return this.hJ(this.c,b)
else return this.hI(0,b)},
hI:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bT(b)
r=n[s]
q=o.bX(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dA(p)
return!0},
da:function(a,b){if(a[b]!=null)return!1
a[b]=this.bS(b)
return!0},
hJ:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dA(s)
delete a[b]
return!0},
dk:function(){this.r=1073741823&this.r+1},
bS:function(a){var s,r=this,q=new P.ks(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dk()
return q},
dA:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dk()},
bT:function(a){return J.aq(a)&1073741823},
bX:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.ks.prototype={}
P.df.prototype={
gI:function(a){return this.d},
A:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.bV(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cG.prototype={}
P.iP.prototype={
$2:function(a,b){this.a.j(0,this.b.a(a),this.c.a(b))},
$S:4}
P.cM.prototype={$io:1,$ij:1,$iq:1}
P.i.prototype={
ga1:function(a){return new H.c1(a,this.gk(a))},
F:function(a,b){return this.h(a,b)},
gef:function(a){return this.gk(a)===0},
jA:function(a){var s,r,q,p,o=this
if(o.gef(a)){s=J.lS(0,H.bO(a).L("i.E"))
return s}r=o.h(a,0)
q=P.iQ(o.gk(a),r,!0,H.bO(a).L("i.E"))
p=1
while(!0){s=o.gk(a)
if(typeof s!=="number")return H.f(s)
if(!(p<s))break
s=o.h(a,p)
if(p>=q.length)return H.b(q,p)
q[p]=s;++p}return q},
iG:function(a,b,c,d){var s
P.bg(b,c,this.gk(a))
for(s=b;s<c;++s)this.j(a,s,d)},
i:function(a){return P.lR(a,"[","]")}}
P.cO.prototype={}
P.iT.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.h(a)
r.a=s+": "
r.a+=H.h(b)},
$S:22}
P.aJ.prototype={
q:function(a,b){var s,r
for(s=J.bu(this.gao(a));s.A();){r=s.gI(s)
b.$2(r,this.h(a,r))}},
gk:function(a){return J.ar(this.gao(a))},
i:function(a){return P.lY(a)},
$iF:1}
P.hs.prototype={
j:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.cP.prototype={
h:function(a,b){return J.D(this.a,b)},
j:function(a,b,c){J.lE(this.a,b,c)},
q:function(a,b){J.hH(this.a,b)},
gk:function(a){return J.ar(this.a)},
i:function(a){return J.aj(this.a)},
$iF:1}
P.ce.prototype={}
P.dm.prototype={
i:function(a){return P.lR(this,"{","}")},
F:function(a,b){var s,r,q,p="index"
P.hK(b,p)
P.mY(b,p)
for(s=P.py(this,this.r),r=0;s.A();){q=s.d
if(b===r)return q;++r}throw H.c(P.O(b,this,p,null,r))},
$io:1,
$ij:1}
P.dg.prototype={}
P.dz.prototype={}
P.jX.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.W(r)}return null}}
P.jY.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.W(r)}return null}}
P.hQ.prototype={
iW:function(a0,a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a3=P.bg(a2,a3,a1.length)
if(a3==null)throw H.c(P.mX("Invalid range"))
s=$.om()
for(r=a2,q=r,p=null,o=-1,n=-1,m=0;r<a3;r=l){l=r+1
k=C.a.D(a1,r)
if(k===37){j=l+2
if(j<=a3){i=H.kY(C.a.D(a1,l))
h=H.kY(C.a.D(a1,l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){if(g<0||g>=s.length)return H.b(s,g)
f=s[g]
if(f>=0){g=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new P.a1("")
e=p}else e=p
d=e.a+=C.a.u(a1,q,r)
e.a=d+H.b0(k)
q=l
continue}}throw H.c(P.ab("Invalid base64 data",a1,r))}if(p!=null){e=p.a+=C.a.u(a1,q,a3)
d=e.length
if(o>=0)P.mv(a1,n,a3,o,m,d)
else{c=C.c.bj(d-1,4)+1
if(c===1)throw H.c(P.ab(a,a1,a3))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return C.a.aZ(a1,a2,a3,e.charCodeAt(0)==0?e:e)}b=a3-a2
if(o>=0)P.mv(a1,n,a3,o,m,b)
else{c=C.c.bj(b,4)
if(c===1)throw H.c(P.ab(a,a1,a3))
if(c>1)a1=C.a.aZ(a1,a3,a3,c===2?"==":"=")}return a1}}
P.hR.prototype={}
P.dX.prototype={}
P.e_.prototype={}
P.i6.prototype={}
P.jV.prototype={
giE:function(){return C.K}}
P.jZ.prototype={
co:function(a){var s,r,q,p=P.bg(0,null,a.length)
if(p==null)throw H.c(P.mX("Invalid range"))
s=p-0
if(s===0)return new Uint8Array(0)
r=new Uint8Array(s*3)
q=new P.kF(r)
if(q.fB(a,0,p)!==p){J.os(a,p-1)
q.cg()}return new Uint8Array(r.subarray(0,H.q9(0,q.b,r.length)))}}
P.kF.prototype={
cg:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.b(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.b(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.b(r,q)
r[q]=189},
ig:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.b(r,q)
r[q]=240|s>>>18
q=n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s>>>12&63
p=n.b=q+1
if(q>=o)return H.b(r,q)
r[q]=128|s>>>6&63
n.b=p+1
if(p>=o)return H.b(r,p)
r[p]=128|s&63
return!0}else{n.cg()
return!1}},
fB:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.D(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.ig(p,C.a.D(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cg()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.b(s,o)
s[o]=192|p>>>6
l.b=m+1
s[m]=128|p&63}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=224|p>>>12
o=l.b=m+1
if(m>=r)return H.b(s,m)
s[m]=128|p>>>6&63
l.b=o+1
if(o>=r)return H.b(s,o)
s[o]=128|p&63}}}return q}}
P.jW.prototype={
co:function(a){var s=this.a,r=P.pp(s,a,0,null)
if(r!=null)return r
return new P.kE(s).is(a,0,null,!0)}}
P.kE.prototype={
is:function(a,b,c,d){var s,r,q,p,o=this,n=P.bg(b,c,J.ar(a))
if(b===n)return""
s=P.q2(a,b,n)
if(typeof n!=="number")return n.p()
n-=b
r=o.bU(s,0,n,!0)
q=o.b
if((q&1)!==0){p=P.q3(q)
o.b=0
throw H.c(P.ab(p,a,b+o.c))}return r},
bU:function(a,b,c,d){var s,r,q=this
if(typeof c!=="number")return c.p()
if(c-b>1000){s=C.c.a5(b+c,2)
r=q.bU(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bU(a,s,c,d)}return q.iv(a,b,c,d)},
iv:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.a1(""),f=b+1,e=a.length
if(b<0||b>=e)return H.b(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.D("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.D(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.b0(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.b0(j)
break
case 65:g.a+=H.b0(j);--f
break
default:p=g.a+=H.b0(j)
g.a=p+H.b0(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.b(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.b(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.b(a,l)
g.a+=H.b0(a[l])}else g.a+=P.f2(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.b0(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.b6.prototype={}
P.as.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a&&!0},
aU:function(a,b){return C.c.aU(this.a,b.a)},
gT:function(a){var s=this.a
return(s^C.c.aQ(s,30))&1073741823},
i:function(a){var s=this,r=P.oH(H.p9(s)),q=P.e1(H.p7(s)),p=P.e1(H.p3(s)),o=P.e1(H.p4(s)),n=P.e1(H.p6(s)),m=P.e1(H.p8(s)),l=P.oI(H.p5(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.a8.prototype={}
P.bx.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
gT:function(a){return C.c.gT(this.a)},
aU:function(a,b){return C.c.aU(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i4(),o=this.a
if(o<0)return"-"+new P.bx(0-o).i(0)
s=p.$1(C.c.a5(o,6e7)%60)
r=p.$1(C.c.a5(o,1e6)%60)
q=new P.i3().$1(o%1e6)
return""+C.c.a5(o,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.i3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.i4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.J.prototype={
gbm:function(){return H.bq(this.$thrownJsError)}}
P.dM.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ia(s)
return"Assertion failed"}}
P.ez.prototype={
i:function(a){return"Throw of null."}}
P.aw.prototype={
gbW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbV:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbW()+o+m
if(!q.a)return l
s=q.gbV()
r=P.ia(q.b)
return l+s+": "+r}}
P.ca.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.h(q):""
else if(q==null)s=": Not greater than or equal to "+H.h(r)
else if(q>r)s=": Not in inclusive range "+H.h(r)+".."+H.h(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.h(r)
return s}}
P.ea.prototype={
gbW:function(){return"RangeError"},
gbV:function(){var s,r=this.b
if(typeof r!=="number")return r.N()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.h(s)},
gk:function(a){return this.f}}
P.fo.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fl.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cY.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dZ.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ia(s)+"."}}
P.eD.prototype={
i:function(a){return"Out of Memory"},
gbm:function(){return null},
$iJ:1}
P.cX.prototype={
i:function(a){return"Stack Overflow"},
gbm:function(){return null},
$iJ:1}
P.e0.prototype={
i:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fM.prototype={
i:function(a){return"Exception: "+this.a}}
P.ig.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=g!=null&&""!==g?"FormatException: "+H.h(g):"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.u(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.D(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.S(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=C.a.u(d,k,l)
return f+j+h+i+"\n"+C.a.l(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.h(e)+")"):f}}
P.n.prototype={}
P.j.prototype={
gk:function(a){var s,r=this.ga1(this)
for(s=0;r.A();)++s
return s},
F:function(a,b){var s,r,q
P.mY(b,"index")
for(s=this.ga1(this),r=0;s.A();){q=s.gI(s)
if(b===r)return q;++r}throw H.c(P.O(b,this,"index",null,r))},
i:function(a){return P.oN(this,"(",")")}}
P.ed.prototype={}
P.q.prototype={$io:1,$ij:1}
P.F.prototype={}
P.a0.prototype={
gT:function(a){return P.C.prototype.gT.call(C.i,this)},
i:function(a){return"null"}}
P.U.prototype={}
P.C.prototype={constructor:P.C,$iC:1,
w:function(a,b){return this===b},
gT:function(a){return H.cW(this)},
i:function(a){return"Instance of '"+H.h(H.eL(this))+"'"},
toString:function(){return this.i(this)}}
P.m0.prototype={}
P.al.prototype={}
P.hh.prototype={
i:function(a){return""},
$ial:1}
P.A.prototype={}
P.a1.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.jT.prototype={
$2:function(a,b){var s,r,q,p=J.dG(b).cD(b,"=")
if(p===-1){if(b!=="")J.lE(a,P.mf(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.u(b,0,p)
r=C.a.ah(b,p+1)
q=this.a
J.lE(a,P.mf(s,0,s.length,q,!0),P.mf(r,0,r.length,q,!0))}return a}}
P.jQ.prototype={
$2:function(a,b){throw H.c(P.ab("Illegal IPv4 address, "+a,this.a,b))}}
P.jR.prototype={
$2:function(a,b){throw H.c(P.ab("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jS.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.cs(C.a.u(this.b,a,b),16)
if(typeof s!=="number")return s.N()
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s}}
P.bL.prototype={
gbw:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.h(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.l(H.lW("Field '_text' has been assigned during initialization."))}return o},
gT:function(a){var s=this,r=s.z
if(r==null){r=C.a.gT(s.gbw())
if(s.z==null)s.z=r
else r=H.l(H.lW("Field 'hashCode' has been assigned during initialization."))}return r},
gaY:function(){var s=this,r=s.Q
if(r==null){r=new P.ce(P.ne(s.gbf(s)),t.U)
if(s.Q==null)s.Q=r
else r=H.l(H.lW("Field 'queryParameters' has been assigned during initialization."))}return r},
geH:function(){return this.b},
gcC:function(a){var s=this.c
if(s==null)return""
if(C.a.al(s,"["))return C.a.u(s,1,s.length-1)
return s},
gbH:function(a){var s=this.d
return s==null?P.nA(this.a):s},
gbf:function(a){var s=this.f
return s==null?"":s},
gcB:function(){var s=this.r
return s==null?"":s},
cK:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.al(s,"/"))s="/"+s
q=s
p=P.md(null,0,0,b)
return new P.bL(n,l,j,k,q,p,o.r)},
ge7:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge8:function(){return this.r!=null},
i:function(a){return this.gbw()},
w:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
return t.R.b(b)&&s.a===b.gbL()&&s.c!=null===b.ge7()&&s.b===b.geH()&&s.gcC(s)===b.gcC(b)&&s.gbH(s)===b.gbH(b)&&s.e===b.ger(b)&&s.f!=null===b.gea()&&s.gbf(s)===b.gbf(b)&&s.r!=null===b.ge8()&&s.gcB()===b.gcB()},
$ifp:1,
gbL:function(){return this.a},
ger:function(a){return this.e}}
P.kD.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=H.h(P.mg(C.h,a,C.f,!0))
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=H.h(P.mg(C.h,b,C.f,!0))}}}
P.kC.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.bu(b),r=this.a;s.A();)r.$2(a,s.gI(s))}}
P.jP.prototype={
geG:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.b(m,0)
s=o.a
m=m[0]+1
r=C.a.bE(s,"?",m)
q=s.length
if(r>=0){p=P.dA(s,r+1,q,C.l,!1)
q=r}else p=n
m=o.c=new P.fE("data","",n,n,P.dA(s,m,q,C.v,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.b(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.kK.prototype={
$1:function(a){return new Uint8Array(96)}}
P.kJ.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.b(s,a)
s=s[a]
J.ot(s,0,96,b)
return s},
$S:23}
P.kL.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=b.length,r=a.length,q=0;q<s;++q){p=C.a.D(b,q)^96
if(p>=r)return H.b(a,p)
a[p]=c}}}
P.kM.prototype={
$3:function(a,b,c){var s,r,q,p
for(s=C.a.D(b,0),r=C.a.D(b,1),q=a.length;s<=r;++s){p=(s^96)>>>0
if(p>=q)return H.b(a,p)
a[p]=c}}}
P.h7.prototype={
ge7:function(){return this.c>0},
ge9:function(){return this.c>0&&this.d+1<this.e},
gea:function(){return this.f<this.r},
ge8:function(){return this.r<this.a.length},
gdi:function(){return this.b===4&&C.a.al(this.a,"http")},
gdj:function(){return this.b===5&&C.a.al(this.a,"https")},
gbL:function(){var s=this.x
return s==null?this.x=this.fi():s},
fi:function(){var s=this,r=s.b
if(r<=0)return""
if(s.gdi())return"http"
if(s.gdj())return"https"
if(r===4&&C.a.al(s.a,"file"))return"file"
if(r===7&&C.a.al(s.a,"package"))return"package"
return C.a.u(s.a,0,r)},
geH:function(){var s=this.c,r=this.b+3
return s>r?C.a.u(this.a,r,s-1):""},
gcC:function(a){var s=this.c
return s>0?C.a.u(this.a,s,this.d):""},
gbH:function(a){var s=this
if(s.ge9())return P.cs(C.a.u(s.a,s.d+1,s.e),null)
if(s.gdi())return 80
if(s.gdj())return 443
return 0},
ger:function(a){return C.a.u(this.a,this.e,this.f)},
gbf:function(a){var s=this.f,r=this.r
return s<r?C.a.u(this.a,s+1,r):""},
gcB:function(){var s=this.r,r=this.a
return s<r.length?C.a.ah(r,s+1):""},
gaY:function(){var s=this
if(s.f>=s.r)return C.U
return new P.ce(P.ne(s.gbf(s)),t.U)},
cK:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbL(),k=l==="file",j=n.c,i=j>0?C.a.u(n.a,n.b+3,j):"",h=n.ge9()?n.gbH(n):m
j=n.c
if(j>0)s=C.a.u(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.u(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.al(r,"/"))r="/"+r
p=P.md(m,0,0,b)
q=n.r
o=q<j.length?C.a.ah(j,q+1):m
return new P.bL(l,i,s,h,r,p,o)},
gT:function(a){var s=this.y
return s==null?this.y=C.a.gT(this.a):s},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifp:1}
P.fE.prototype={}
W.r.prototype={}
W.hI.prototype={
gk:function(a){return a.length}}
W.dK.prototype={
i:function(a){return String(a)}}
W.dL.prototype={
i:function(a){return String(a)}}
W.bv.prototype={$ibv:1}
W.bw.prototype={
cQ:function(a,b,c){if(c!=null)return a.getContext(b,P.r_(c))
return a.getContext(b)},
eK:function(a,b){return this.cQ(a,b,null)},
$ibw:1}
W.aG.prototype={
gk:function(a){return a.length}}
W.hX.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cy.prototype={
gk:function(a){return a.length}}
W.hY.prototype={}
W.ax.prototype={}
W.aT.prototype={}
W.hZ.prototype={
gk:function(a){return a.length}}
W.i_.prototype={
gk:function(a){return a.length}}
W.i0.prototype={
gk:function(a){return a.length}}
W.i1.prototype={
i:function(a){return String(a)}}
W.cz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.cA.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gaJ(a))+" x "+H.h(this.gaG(a))},
w:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bp(b)
s=a.left==s.gbG(b)&&a.top==s.gbJ(b)&&this.gaJ(a)==s.gaJ(b)&&this.gaG(a)==s.gaG(b)}else s=!1
return s},
gT:function(a){return W.ns(J.aq(a.left),J.aq(a.top),J.aq(this.gaJ(a)),J.aq(this.gaG(a)))},
gdK:function(a){return a.bottom},
gaG:function(a){return a.height},
gbG:function(a){return a.left},
gbI:function(a){return a.right},
gbJ:function(a){return a.top},
gaJ:function(a){return a.width},
$iah:1}
W.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.i2.prototype={
gk:function(a){return a.length}}
W.fB.prototype={
gef:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
return t.h.a(s[b])},
j:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.b(s,b)
this.a.replaceChild(c,s[b])},
m:function(a,b){this.a.appendChild(b)
return b},
ga1:function(a){var s=this.jA(this)
return new J.aa(s,s.length)}}
W.E.prototype={
gdM:function(a){return new W.fB(a,a.children)},
gdN:function(a){var s=a.clientLeft,r=a.clientTop,q=a.clientWidth,p=a.clientHeight
if(typeof q!=="number")return q.N()
if(q<0)q=-q*0
if(typeof p!=="number")return p.N()
if(p<0)p=-p*0
return new P.ah(s,r,q,p,t.I)},
i:function(a){return a.localName},
$iE:1}
W.m.prototype={$im:1}
W.e.prototype={
ii:function(a,b,c,d){if(c!=null)this.f4(a,b,c,!1)},
f4:function(a,b,c,d){return a.addEventListener(b,H.cq(c,1),!1)},
$ie:1}
W.at.prototype={$iat:1}
W.bW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1,
$ibW:1}
W.e6.prototype={
gk:function(a){return a.length}}
W.e8.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.ii.prototype={
gk:function(a){return a.length}}
W.bA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.ba.prototype={
j4:function(a,b,c,d){return a.open(b,c,!0)},
$iba:1}
W.ij.prototype={
$1:function(a){return a.responseText}}
W.ik.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.status
if(typeof o!=="number")return o.cP()
s=o>=200&&o<300
r=o>307&&o<400
o=s||o===0||o===304||r
q=this.b
if(o)q.cm(0,p)
else q.dO(a)}}
W.bB.prototype={}
W.bC.prototype={
gdP:function(a){return a.data},
$ibC:1}
W.bY.prototype={$ibY:1}
W.c_.prototype={$ic_:1}
W.dW.prototype={$iE:1,$ie:1,$iv:1}
W.bE.prototype={$ibE:1}
W.iR.prototype={
i:function(a){return String(a)}}
W.j8.prototype={
gk:function(a){return a.length}}
W.c3.prototype={$ic3:1}
W.ep.prototype={
h:function(a,b){return P.bo(a.get(b))},
q:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
gao:function(a){var s=H.d([],t.s)
this.q(a,new W.j9(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.z("Not supported"))},
$iF:1}
W.j9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eq.prototype={
h:function(a,b){return P.bo(a.get(b))},
q:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
gao:function(a){var s=H.d([],t.s)
this.q(a,new W.ja(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.z("Not supported"))},
$iF:1}
W.ja.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aK.prototype={$iaK:1}
W.er.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.au.prototype={$iau:1}
W.fA.prototype={
j:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.b(r,b)
s.replaceChild(c,r[b])},
ga1:function(a){var s=this.a.childNodes
return new W.cF(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.b(s,b)
return s[b]}}
W.v.prototype={
jo:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.oq(s,b,a)}catch(q){H.W(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.eQ(a):s},
hK:function(a,b,c){return a.replaceChild(b,c)},
$iv:1}
W.cV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.aL.prototype={
gk:function(a){return a.length},
$iaL:1}
W.eG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.bI.prototype={$ibI:1}
W.eQ.prototype={
h:function(a,b){return P.bo(a.get(b))},
q:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
gao:function(a){var s=H.d([],t.s)
this.q(a,new W.jk(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.z("Not supported"))},
$iF:1}
W.jk.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eS.prototype={
gk:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.eU.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.aM.prototype={$iaM:1}
W.eV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.aN.prototype={
gk:function(a){return a.length},
$iaN:1}
W.f_.prototype={
h:function(a,b){return a.getItem(H.q6(b))},
j:function(a,b,c){a.setItem(b,c)},
q:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gao:function(a){var s=H.d([],t.s)
this.q(a,new W.jt(s))
return s},
gk:function(a){return a.length},
$iF:1}
W.jt.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aD.prototype={$iaD:1}
W.bh.prototype={$ibh:1}
W.aE.prototype={$iaE:1}
W.am.prototype={$iam:1}
W.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.f5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.jB.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.bJ.prototype={$ibJ:1}
W.fa.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.jE.prototype={
gk:function(a){return a.length}}
W.b3.prototype={}
W.jU.prototype={
i:function(a){return String(a)}}
W.ft.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gix:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
giw:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibj:1}
W.cg.prototype={
hL:function(a,b){return a.requestAnimationFrame(H.cq(b,1))},
fo:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.dc.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
w:function(a,b){var s
if(b==null)return!1
if(t.I.b(b)){s=J.bp(b)
s=a.left==s.gbG(b)&&a.top==s.gbJ(b)&&a.width==s.gaJ(b)&&a.height==s.gaG(b)}else s=!1
return s},
gT:function(a){return W.ns(J.aq(a.left),J.aq(a.top),J.aq(a.width),J.aq(a.height))},
gaG:function(a){return a.height},
gaJ:function(a){return a.width}}
W.fQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.dh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.ha.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.hj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$io:1,
$iy:1,
$ij:1,
$iq:1}
W.lQ.prototype={}
W.fL.prototype={
i3:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.or(s,this.c,r,!1)}}}
W.kc.prototype={
$1:function(a){return this.a.$1(a)}}
W.m5.prototype={}
W.N.prototype={
ga1:function(a){return new W.cF(a,this.gk(a))}}
W.cF.prototype={
A:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.D(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gI:function(a){return this.d}}
W.fD.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h6.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.hd.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.ht.prototype={}
W.hu.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
P.kx.prototype={
cA:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bi:function(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(H.mj(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.as)return new Date(a.a)
if(t.fv.b(a))throw H.c(P.jO("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.D.b(a))return a
if(t.bX.b(a))return a
if(t.u.b(a))return a
if(t.bZ.b(a)||t.dD.b(a)||t.bK.b(a))return a
if(t.eO.b(a)){s=o.cA(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.a=r[s]
if(p!=null)return p
p={}
n.a=p
if(s>=q)return H.b(r,s)
r[s]=p
J.hH(a,new P.ky(n,o))
return n.a}if(t.aH.b(a)){s=o.cA(a)
n=o.b
if(s>=n.length)return H.b(n,s)
p=n[s]
if(p!=null)return p
return o.it(a,s)}if(t.eH.b(a)){s=o.cA(a)
r=o.b
q=r.length
if(s>=q)return H.b(r,s)
p=n.b=r[s]
if(p!=null)return p
p={}
n.b=p
if(s>=q)return H.b(r,s)
r[s]=p
o.iM(a,new P.kz(n,o))
return n.b}throw H.c(P.jO("structured clone of other type"))},
it:function(a,b){var s,r=J.b7(a),q=r.gk(a),p=new Array(q),o=this.b
if(b>=o.length)return H.b(o,b)
o[b]=p
if(typeof q!=="number")return H.f(q)
s=0
for(;s<q;++s){o=this.bi(r.h(a,s))
if(s>=p.length)return H.b(p,s)
p[s]=o}return p}}
P.ky.prototype={
$2:function(a,b){this.a.a[a]=this.b.bi(b)},
$S:4}
P.kz.prototype={
$2:function(a,b){this.a.b[a]=this.b.bi(b)},
$S:4}
P.dw.prototype={$ibC:1,
gdP:function(a){return this.a}}
P.kV.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.hi.prototype={
iM:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<r;++q){p=s[q]
b.$2(p,a[p])}}}
P.e7.prototype={
gbq:function(){return new H.bF(new H.d9(this.b,new P.id()),new P.ie())},
j:function(a,b,c){var s=this.gbq()
J.ov(s.b.$1(J.lG(s.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ar(this.gbq().a)},
h:function(a,b){var s=this.gbq()
return s.b.$1(J.lG(s.a,b))},
ga1:function(a){var s=P.lX(this.gbq(),!1,t.h)
return new J.aa(s,s.length)}}
P.id.prototype={
$1:function(a){return t.h.b(a)}}
P.ie.prototype={
$1:function(a){return t.h.a(a)}}
P.h5.prototype={
gbI:function(a){var s=this.a,r=this.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
gdK:function(a){var s=this.b,r=this.d
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
return this.$ti.c.a(s+r)},
i:function(a){var s=this
return"Rectangle ("+H.h(s.a)+", "+H.h(s.b)+") "+H.h(s.c)+" x "+H.h(s.d)},
w:function(a,b){var s,r,q,p,o,n=this
if(b==null)return!1
if(t.I.b(b)){s=n.a
r=J.bp(b)
if(s==r.gbG(b)){q=n.b
if(q==r.gbJ(b)){p=n.c
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.f(p)
o=n.$ti.c
if(o.a(s+p)===r.gbI(b)){s=n.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.f(s)
r=o.a(q+s)===r.gdK(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gT:function(a){var s,r=this,q=r.a,p=J.aq(q),o=r.b,n=J.aq(o),m=r.c
if(typeof q!=="number")return q.n()
if(typeof m!=="number")return H.f(m)
s=r.$ti.c
m=C.c.gT(s.a(q+m))
q=r.d
if(typeof o!=="number")return o.n()
if(typeof q!=="number")return H.f(q)
q=C.c.gT(s.a(o+q))
return P.px(P.kr(P.kr(P.kr(P.kr(0,p),n),m),q))}}
P.ah.prototype={
gbG:function(a){return this.a},
gbJ:function(a){return this.b},
gaJ:function(a){return this.c},
gaG:function(a){return this.d}}
P.aV.prototype={$iaV:1}
P.ej.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$iq:1}
P.aY.prototype={$iaY:1}
P.eA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$iq:1}
P.jd.prototype={
gk:function(a){return a.length}}
P.f1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$iq:1}
P.p.prototype={
gdM:function(a){return new P.e7(a,new W.fA(a))}}
P.b1.prototype={$ib1:1}
P.fb.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$iq:1}
P.fT.prototype={}
P.fU.prototype={}
P.h1.prototype={}
P.h2.prototype={}
P.hf.prototype={}
P.hg.prototype={}
P.ho.prototype={}
P.hp.prototype={}
P.bi.prototype={$io:1,$ij:1,$iq:1}
P.hO.prototype={
gk:function(a){return a.length}}
P.dP.prototype={
h:function(a,b){return P.bo(a.get(b))},
q:function(a,b){var s,r=a.entries()
for(;!0;){s=r.next()
if(s.done)return
b.$2(s.value[0],P.bo(s.value[1]))}},
gao:function(a){var s=H.d([],t.s)
this.q(a,new P.hP(s))
return s},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.z("Not supported"))},
$iF:1}
P.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dQ.prototype={
gk:function(a){return a.length}}
P.b9.prototype={}
P.eC.prototype={
gk:function(a){return a.length}}
P.fz.prototype={}
P.eP.prototype={
jy:function(a,b,c,d,e,f,g){var s
if(t.u.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.r0(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bR("Incorrect number or type of arguments"))}}
P.eY.prototype={
gk:function(a){return a.length},
h:function(a,b){var s
if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
s=P.bo(a.item(b))
s.toString
return s},
j:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$io:1,
$ij:1,
$iq:1}
P.hb.prototype={}
P.hc.prototype={}
K.hJ.prototype={
aX:function(a,b){return!0},
i:function(a){return"all"}}
K.e9.prototype={
aX:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)if(s[q].aX(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.t)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.iU.prototype={}
K.bf.prototype={
aX:function(a,b){return!this.eP(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}}
K.jl.prototype={
eV:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.k("May not create a Set with zero characters."))
s=new H.x(t.E)
for(r=new H.c1(a,a.gk(a));r.A();){q=r.d
s.j(0,q,!0)}p=P.lX(s.gao(s),!0,t.e)
C.b.eO(p)
this.a=p},
aX:function(a,b){return C.b.U(this.a,b)},
i:function(a){return P.f2(this.a,0,null)}}
L.eZ.prototype={
v:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.fc(this.a.P(0,b))
p.a=H.d([],t.L)
p.c=!1
this.c.push(p)
return p},
iH:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
if(p.aX(0,a))return p}return null},
i:function(a){return this.b},
dz:function(){var s,r,q,p,o,n=this,m="("+n.b+")",l=n.d
if(l!=null){l=l.b
m+=" => ["+l+"]"
s=n.a
if(s.c.U(0,l))m+=" (consume)"
for(l=n.d.c,l=l.gao(l),l=l.ga1(l);l.A();){r=l.gI(l)
m+="\n"
q=n.d.c.h(0,r)
r=m+("  -- "+H.h(r)+" => ["+H.h(q)+"]")
m=s.c.U(0,q)?r+" (consume)":r}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.t)(l),++p){o=l[p]
m=m+"\n"+("  -- "+o.i(0))}return m.charCodeAt(0)==0?m:m}}
L.f8.prototype={
i:function(a){var s=H.o2(this.b,"\n","\\n"),r=H.o2(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.f9.prototype={
i:function(a){return this.b}}
L.jC.prototype={
P:function(a,b){var s=this.a.h(0,b)
if(s==null){s=new L.eZ(this,b)
s.c=H.d([],t.br)
this.a.j(0,b,s)}return s},
bh:function(a){var s=this.b.h(0,a)
if(s==null){s=new L.f9(a)
s.c=new H.x(t.dO)
this.b.j(0,a,s)}return s},
eD:function(a){return this.jB(a)},
jB:function(a){var s=this
return P.qp(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$eD(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.V
b=H.d([],c)
a0=H.d([],c)
a1=H.d([],c)
n=null,m=0,l=0,k=0
case 2:if(!!0){q=3
break}if(a1.length!==0)j=C.b.jm(a1,0)
else{if(!r.A()){q=3
break}i=r.d
j=i}a0.push(j);++m
h=d.iH(j)
q=h==null?4:6
break
case 4:if(n==null){g=P.f2(a0,0,null)
throw H.c(P.k("Untokenizable string [state: "+d.b+", index "+m+']: "'+g+'"'))}if(!!a0.fixed$length)H.l(P.z("removeRange"))
P.bg(0,k,a0.length)
a0.splice(0,k-0)
C.b.by(a1,a0)
a0=H.d([],c)
b=H.d([],c)
d=s.d
q=!s.c.U(0,n.a)?7:8
break
case 7:q=9
return n
case 9:case 8:m=l
n=null
k=0
q=5
break
case 6:if(!h.c)b.push(j)
d=h.b
if(d.d!=null){g=P.f2(b,0,null)
f=d.d
e=f.c.h(0,g)
n=new L.f8(e==null?f.b:e,g,m)
k=a0.length
l=m}case 5:q=2
break
case 3:q=n!=null&&!s.c.U(0,n.a)?10:11
break
case 10:q=12
return n
case 12:case 11:return P.pv()
case 1:return P.pw(o)}}},t.eB)},
i:function(a){var s,r=new P.a1(""),q=this.d
if(q!=null)r.a=q.dz()+"\n"
for(q=this.a,q=q.gjC(q),q=q.ga1(q);q.A();){s=q.gI(q)
if(s!=this.d)r.a+=s.dz()+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.fc.prototype={
i:function(a){return this.b.b+": "+this.cU(0)}}
O.ak.prototype={
bM:function(a){var s=this
s.a=H.d([],a.L("u<0*>"))
s.d=s.c=s.b=null},
cR:function(a,b,c){this.b=b
this.c=a
this.d=c},
bl:function(a,b){return this.cR(a,null,b)},
hm:function(a){var s=this.b
if(s!=null)return s.$1(a)
return!0},
eX:function(a,b){var s=this.c
if(s!=null)s.$2(a,b)},
gk:function(a){return this.a.length},
ga1:function(a){var s=this.a
return new J.aa(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.b(s,b)
return s[b]},
m:function(a,b){var s,r,q=this,p=H.mh(q).L("u<ak.T*>")
if(q.hm(H.d([b],p))){s=q.a
r=s.length
s.push(b)
q.eX(r,H.d([b],p))}},
$ij:1}
O.cR.prototype={
gk:function(a){return this.a.length},
gB:function(){var s=this.b
return s==null?this.b=D.M():s},
aK:function(){var s=this.b
if(s!=null)s.G(null)},
ga3:function(a){var s=this.a
if(s.length>0)return C.b.gaH(s)
else return V.eo()},
ev:function(a){var s=this.a
if(a==null)s.push(V.eo())
else s.push(a)
this.aK()},
cJ:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.hS.prototype={}
E.by.prototype={
d8:function(){var s,r
this.e=null
for(s=this.y.a,s=new J.aa(s,s.length);s.A();){r=s.d
if(r.f==null)r.d8()}},
scS:function(a,b){var s,r,q=this,p=q.c
if(p!=b){q.d=q.c=b
q.e=null
if(p!=null)p.gB().a_(0,q.gem())
s=q.c
if(s!=null)s.gB().m(0,q.gem())
r=new D.w("shape",p,q.c)
r.b=!0
q.au(r)}},
sb0:function(a){var s,r,q=this,p=q.f
if(p!=a){if(p!=null)p.gB().a_(0,q.geo())
s=q.f
q.f=a
if(a!=null)a.gB().m(0,q.geo())
q.d8()
r=new D.w("technique",s,q.f)
r.b=!0
q.au(r)}},
sbb:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
if(s!=null)s.gB().a_(0,q.gek())
if(a!=null)a.gB().m(0,q.gek())
q.r=a
r=new D.w("mover",s,a)
r.b=!0
q.au(r)}},
b8:function(){var s=this.d,r=s!=null?V.n2(null,s.b8()):null
for(s=this.y.a,s=new J.aa(s,s.length);s.A();)r=V.n2(r,s.d.b8())
return r},
jq:function(a){var s,r,q,p,o,n=this.b8(),m=V.m_(),l=n.a,k=n.d
if(typeof l!=="number")return l.n()
s=n.b
r=n.e
if(typeof s!=="number")return s.n()
q=n.c
p=n.f
if(typeof q!=="number")return q.n()
m=m.p(0,new V.ac(l+k/2,s+r/2,q+p/2))
if(r>k)k=r
if(p>k)k=p
if(k===0)return
o=a/k
this.bz(V.mM(o,o,o).l(0,V.mN(m.a,m.b,m.c)))},
bz:function(a){var s=this.c
if(s!=null)s.bz(a)
for(s=this.y.a,s=new J.aa(s,s.length);s.A();)s.d.bz(a)},
as:function(a,b){var s,r,q=this,p=q.r,o=p!=null?p.b2(0,b,q):null
if(!J.G(o,q.x)){s=q.x
q.x=o
r=new D.w("matrix",s,o)
r.b=!0
q.au(r)}p=q.f
if(p!=null)p.as(0,b)
for(p=q.y.a,p=new J.aa(p,p.length);p.A();)p.d.as(0,b)},
aI:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.ga3(s))
else q.push(r.l(0,s.ga3(s)))
s.aK()
a.ew(o.f)
s=a.dy
p=(s&&C.b).gaH(s)
if(p!=null&&o.d!=null)p.ey(a,o)
for(s=o.y.a,s=new J.aa(s,s.length);s.A();)s.d.aI(a)
a.es()
a.dx.cJ()},
au:function(a){var s=this.z
if(s!=null)s.G(a)},
Z:function(){return this.au(null)},
en:function(a){this.e=null
this.au(a)},
j2:function(){return this.en(null)},
ep:function(a){this.au(a)},
j3:function(){return this.ep(null)},
el:function(a){this.au(a)},
j1:function(){return this.el(null)},
ej:function(a){this.au(a)},
iZ:function(){return this.ej(null)},
iY:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gei(),q=t.f,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}this.Z()},
j0:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gei(),q=0;q<b.length;b.length===s||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.d=0
p.z=o}o.a_(0,r)}}this.Z()},
i:function(a){var s=this.a,r=s.length
if(r<=0)return"Unnamed entity"
return s}}
E.bS.prototype={
i:function(a){return this.b}}
E.c8.prototype={
i:function(a){return this.b}}
E.fJ.prototype={}
E.jg.prototype={
eU:function(a,b){var s,r,q=this
q.d=q.c=512
q.e=0
q.x=q.r=q.f=new P.as(Date.now(),!1)
q.y=0
q.cx=q.ch=q.Q=q.z=null
s=new O.cR()
r=t.p
s.a=H.d([],r)
s.gB().m(0,new E.jh(q))
q.cy=s
s=new O.cR()
s.a=H.d([],r)
s.gB().m(0,new E.ji(q))
q.db=s
s=new O.cR()
s.a=H.d([],r)
s.gB().m(0,new E.jj(q))
q.dx=s
s=H.d([],t.fG)
q.dy=s
s.push(null)
q.fr=new H.x(t.h9)},
gjk:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
q=q.ga3(q)
s=r.db
s=r.z=q.l(0,s.ga3(s))
q=s}return q},
geu:function(){var s,r=this,q=r.ch
if(q==null){q=r.gjk()
s=r.dx
s=r.ch=q.l(0,s.ga3(s))
q=s}return q},
geI:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
q=q.ga3(q)
s=r.dx
s=r.cx=q.l(0,s.ga3(s))
q=s}return q},
ew:function(a){var s=this.dy
s.push(a==null?(s&&C.b).gaH(s):a)},
es:function(){var s=this.dy
if(s.length>1)s.pop()},
dF:function(a){var s=a.b
if(s.length===0)throw H.c(P.k("May not cache a shader with no name."))
if(this.fr.cn(0,s))throw H.c(P.k('Shader cache already contains a shader by the name "'+s+'".'))
this.fr.j(0,s,a)}}
E.jh.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null}}
E.ji.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null}}
E.jj.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null}}
E.f7.prototype={
d_:function(a){this.ez()},
cZ:function(){return this.d_(null)},
giN:function(){var s,r=this,q=Date.now(),p=C.c.a5(P.mB(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.as(q,!1)
return s/p},
ds:function(){var s,r,q=this,p=window.devicePixelRatio,o=q.b.clientWidth
if(typeof o!=="number")return o.l()
if(typeof p!=="number")return H.f(p)
s=C.d.bD(o*p)
o=q.b.clientHeight
if(typeof o!=="number")return o.l()
r=C.d.bD(o*p)
o=q.b
if(o.width!==s||o.height!==r){o.width=s
q.b.height=r
P.n9(C.n,q.gjp())}},
ez:function(){var s,r
if(!this.cx){this.cx=!0
s=window
C.z.fo(s)
r=W.nQ(new E.jA(this),t.H)
r.toString
C.z.hL(s,r)}},
jn:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.ds()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.as(p,!1)
q.y=P.mB(p-q.r.a).a*0.000001
p=q.cy
C.b.sk(p.a,0)
p.aK()
p=q.db
C.b.sk(p.a,0)
p.aK()
p=q.dx
C.b.sk(p.a,0)
p.aK()
p=q.dy
p.toString
C.b.sk(p,0)
q.dy.push(null)
m.aI(n.e)}}catch(o){s=H.W(o)
r=H.bq(o)
P.hF("Error: "+H.h(s))
P.hF("Stack: "+H.h(r))
throw H.c(s)}}}
E.jA.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.jn()}}}
Z.fu.prototype={}
Z.dT.prototype={
aE:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.W(q)
r=P.k('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.h(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+H.h(s.e)+"]"}}
Z.fv.prototype={}
Z.bT.prototype={
an:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if((p.a.a&a.a)!==0)return p}return null},
aE:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s)r[s].aE(a)},
eF:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r)q.disableVertexAttribArray(s[r].e)
q.bindBuffer(this.a.a,null)},
aI:function(a){var s,r,q,p,o,n=this.b.length
for(s=a.a,r=0;r<n;++r){q=this.b
if(r>=q.length)return H.b(q,r)
p=q[r]
q=p.c
o=q.a
s.bindBuffer(o,q.b)
s.drawElements(p.a,p.b,5123,0)
s.bindBuffer(o,null)}},
eq:function(a){this.aE(a)
this.aI(a)
this.eF(a)},
i:function(a){var s,r,q,p,o=t.i,n=H.d([],o)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)n.push(s[q].i(0))
p=H.d([],o)
for(o=this.c,s=o.length,q=0;q<s;++q)p.push(J.aj(o[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.v(n,", ")+"\nAttrs:   "+C.b.v(p,", ")}}
Z.dU.prototype={}
Z.bZ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.h(H.eL(this.c))+"'")+"]"}}
Z.b4.prototype={
gcT:function(a){var s=this.a,r=(s&$.aR().a)!==0?3:0
if((s&$.aQ().a)!==0)r+=3
if((s&$.aP().a)!==0)r+=3
if((s&$.bt().a)!==0)r+=2
if((s&$.bQ().a)!==0)r+=3
if((s&$.bP().a)!==0)r+=3
if((s&$.dH().a)!==0)r+=4
if((s&$.ct().a)!==0)++r
return(s&$.bs().a)!==0?r+4:r},
im:function(a){var s,r=$.aR(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bt()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ct()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0)if(s===a)return r
return $.ol()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b4))return!1
return this.a===b.a},
i:function(a){var s=H.d([],t.i),r=this.a
if((r&$.aR().a)!==0)s.push("Pos")
if((r&$.aQ().a)!==0)s.push("Norm")
if((r&$.aP().a)!==0)s.push("Binm")
if((r&$.bt().a)!==0)s.push("Txt2D")
if((r&$.bQ().a)!==0)s.push("TxtCube")
if((r&$.bP().a)!==0)s.push("Clr3")
if((r&$.dH().a)!==0)s.push("Clr4")
if((r&$.ct().a)!==0)s.push("Weight")
if((r&$.bs().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.v(s,"|")}}
D.hT.prototype={}
D.bz.prototype={
m:function(a,b){var s=this.a;(s==null?this.a=H.d([],t.f):s).push(b)},
a_:function(a,b){var s,r=this,q=r.a
q=q==null?null:C.b.U(q,b)
if(q===!0){q=r.a
s=(q&&C.b).a_(q,b)||!1}else s=!1
q=r.b
q=q==null?null:C.b.U(q,b)
if(q===!0){q=r.b
s=(q&&C.b).a_(q,b)||s}return s},
G:function(a){var s,r,q,p=this,o={}
o.a=a
s=p.a
r=s==null
q=r?null:s.length===0
if(q!==!1){q=p.b
q=q==null?null:q.length===0
q=q!==!1}else q=!1
if(q)return!1
if(a==null){a=new D.V()
a.b=!0
o.a=a
q=a}else q=a
if(p.d>0){if(p.c==null)p.c=q
return!0}if(!r)C.b.q(P.lX(s,!0,t.dm),new D.ib(o))
s=p.b
if(s!=null){p.b=H.d([],t.f)
C.b.q(s,new D.ic(o))}return!0},
iC:function(){return this.G(null)},
b_:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.G(s)}}}}
D.ib.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.ic.prototype={
$1:function(a){var s=this.a.a
s.toString
a.$1(s)}}
D.V.prototype={}
D.bb.prototype={}
D.bc.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
O.kP.prototype={
aw:function(a,b,c){return this.ji(a,b,!1)},
ji:function(a,b,c){var s=0,r=P.a6(t.z),q=this
var $async$aw=P.a7(function(d,e){if(d===1)return P.a2(e,r)
while(true)switch(s){case 0:s=2
return P.ae(q.av(H.d(a.split("\n"),t.s),b,!1),$async$aw)
case 2:return P.a3(null,r)}})
return P.a4($async$aw,r)},
av:function(a,b,c){return this.jg(a,b,!1)},
jg:function(a,b,c){var s=0,r=P.a6(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$av=P.a7(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.N()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.b(a,k)
s=1
break}s=9
return P.ae(m.a6(a[k],b,!1),$async$av)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.W(g)
k=h
if(typeof k!=="number"){q=k.n()
s=1
break}throw H.c(P.k("Line "+H.h(k+1)+": "+H.h(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.n()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.a3(q,r)
case 2:return P.a2(o,r)}})
return P.a4($async$av,r)},
a6:function(a,b,c){return this.je(a,b,!1)},
je:function(a,b,c){var s=0,r=P.a6(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$a6=P.a7(function(a0,a1){if(a0===1){o=a1
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.mt(a,"#")
i=l
if(typeof i!=="number"){q=i.cP()
s=1
break}if(i>=0)a=J.mu(a,0,l)
a=J.lH(a)
if(J.ar(a)<=0){s=1
break}k=O.nP(a)
if(J.ar(k)<1){s=1
break}case 7:switch(J.D(k,0)){case"newmtl":s=9
break
case"Ka":s=10
break
case"Kd":s=11
break
case"Ks":s=12
break
case"Ns":s=13
break
case"d":s=14
break
case"Tr":s=15
break
case"map_Ka":s=16
break
case"map_Kd":s=17
break
case"map_Ks":s=18
break
case"map_d":s=19
break
case"map_bump":s=20
break
case"bump":s=21
break
default:s=22
break}break
case 9:i=J.D(k,1)
h=O.mL()
m.c=h
m.b.j(0,i,h)
s=1
break
case 10:g=O.bm(J.D(k,1))
m.c.r.sW(0,V.lO(g))
s=1
break
case 11:g=O.bm(J.D(k,1))
m.c.x.sW(0,V.lO(g))
s=1
break
case 12:g=O.bm(J.D(k,1))
m.c.z.sW(0,V.lO(g))
s=1
break
case 13:g=O.bm(J.D(k,1))
i=g.length
if(i!==1)H.l(P.k("Shininess may only have 1 number."))
h=m.c.z
if(0>=i){q=H.b(g,0)
s=1
break}f=g[0]
h.toString
if(f==null)f=100
i=h.c.b
if(f<=0){h.aP(new A.X(!1,i,!1))
h.cd(0)}else{h.aP(new A.X(!0,i,!1))
h.cd(f)}s=1
break
case 14:g=O.bm(J.D(k,1))
i=g.length
if(i!==1)H.l(P.k("Alpha may only have 1 number."))
h=m.c.db
if(0>=i){q=H.b(g,0)
s=1
break}h.saf(0,g[0])
s=1
break
case 15:g=O.bm(J.D(k,1))
i=g.length
if(i!==1)H.l(P.k("Alpha may only have 1 number."))
h=m.c.db
if(0>=i){q=H.b(g,0)
s=1
break}i=g[0]
if(typeof i!=="number"){q=H.f(i)
s=1
break}h.saf(0,1-i)
s=1
break
case 16:s=23
return P.ae(m.c8(J.D(k,1),b),$async$a6)
case 23:s=1
break
case 17:s=24
return P.ae(m.c9(J.D(k,1),b),$async$a6)
case 24:s=1
break
case 18:s=25
return P.ae(m.ca(J.D(k,1),b),$async$a6)
case 25:s=1
break
case 19:s=26
return P.ae(m.c7(J.D(k,1),b),$async$a6)
case 26:s=1
break
case 20:s=27
return P.ae(m.br(J.D(k,1),b),$async$a6)
case 27:s=1
break
case 21:s=28
return P.ae(m.br(J.D(k,1),b),$async$a6)
case 28:s=1
break
case 22:s=1
break
case 8:p=2
s=6
break
case 4:p=3
d=o
j=H.W(d)
i=P.k('Line: "'+H.h(a)+'": '+H.h(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a3(q,r)
case 2:return P.a2(o,r)}})
return P.a4($async$a6,r)},
c8:function(a,b){return this.hA(a,b)},
hA:function(a,b){var s=0,r=P.a6(t.z),q=this,p,o
var $async$c8=P.a7(function(c,d){if(c===1)return P.a2(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.r.sbg(q.a.ba(p))
return P.a3(null,r)}})
return P.a4($async$c8,r)},
c9:function(a,b){return this.hC(a,b)},
hC:function(a,b){var s=0,r=P.a6(t.z),q=this,p,o
var $async$c9=P.a7(function(c,d){if(c===1)return P.a2(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.x.sbg(q.a.ba(p))
return P.a3(null,r)}})
return P.a4($async$c9,r)},
ca:function(a,b){return this.hH(a,b)},
hH:function(a,b){var s=0,r=P.a6(t.z),q=this,p,o
var $async$ca=P.a7(function(c,d){if(c===1)return P.a2(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.z.sbg(q.a.ba(p))
return P.a3(null,r)}})
return P.a4($async$ca,r)},
c7:function(a,b){return this.hz(a,b)},
hz:function(a,b){var s=0,r=P.a6(t.z),q=this,p,o
var $async$c7=P.a7(function(c,d){if(c===1)return P.a2(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.db.sbg(q.a.ba(p))
return P.a3(null,r)}})
return P.a4($async$c7,r)},
br:function(a,b){return this.hB(a,b)},
hB:function(a,b){var s=0,r=P.a6(t.z),q=this,p,o
var $async$br=P.a7(function(c,d){if(c===1)return P.a2(d,r)
while(true)switch(s){case 0:p=b+"/"+a
o=q.c
o.Q.sbg(q.a.ba(p))
return P.a3(null,r)}})
return P.a4($async$br,r)}}
O.hD.prototype={}
O.kQ.prototype={
giF:function(){var s=this.Q,r=s.y.a,q=r.length
if(q===1){if(0>=q)return H.b(r,0)
return r[0]}return s},
aw:function(a,b,c){return this.jj(a,b,!1)},
jj:function(a,b,c){var s=0,r=P.a6(t.z),q=this
var $async$aw=P.a7(function(d,e){if(d===1)return P.a2(e,r)
while(true)switch(s){case 0:s=2
return P.ae(q.av(H.d(a.split("\n"),t.s),b,!1),$async$aw)
case 2:return P.a3(null,r)}})
return P.a4($async$aw,r)},
av:function(a,b,c){return this.jh(a,b,!1)},
jh:function(a,b,c){var s=0,r=P.a6(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$av=P.a7(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.N()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.b(a,k)
s=1
break}s=9
return P.ae(m.a6(a[k],b,!1),$async$av)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.W(g)
k=h
if(typeof k!=="number"){q=k.n()
s=1
break}throw H.c(P.k("Line "+H.h(k+1)+": "+H.h(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.n()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.a3(q,r)
case 2:return P.a2(o,r)}})
return P.a4($async$av,r)},
a6:function(a,b,c){return this.jf(a,b,!1)},
jf:function(a,b,a0){var s=0,r=P.a6(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$a6=P.a7(function(a1,a2){if(a1===1){o=a2
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.mt(a,"#")
i=l
if(typeof i!=="number"){q=i.cP()
s=1
break}if(i>=0)a=J.mu(a,0,l)
a=J.lH(a)
if(J.ar(a)<=0){s=1
break}k=O.nP(a)
if(J.ar(k)<1){s=1
break}case 7:switch(J.D(k,0)){case"v":s=9
break
case"vt":s=10
break
case"vn":s=11
break
case"p":s=12
break
case"l":s=13
break
case"f":s=14
break
case"mtllib":s=15
break
case"usemtl":s=16
break
case"g":s=17
break
case"o":s=18
break
default:s=19
break}break
case 9:h=O.bm(J.D(k,1))
i=h.length
if(i<3)H.l(P.k("Positions must have at least 3 numbers."))
if(i>4)H.l(P.k("Positions must have at most than 4 numbers."))
if(i===4){if(3>=i){q=H.b(h,3)
s=1
break}g=h[3]
$.B().toString
if(typeof g!=="number"){q=g.p()
s=1
break}if(!(Math.abs(g-1)<1e-9))H.l(P.k("Currently, non-one w values in positions are not supported."))}g=m.b
if(0>=i){q=H.b(h,0)
s=1
break}f=h[0]
if(1>=i){q=H.b(h,1)
s=1
break}e=h[1]
if(2>=i){q=H.b(h,2)
s=1
break}e=[f,e,h[2]]
e=new O.hD(new V.ac(e[0],e[1],e[2]))
e.b=H.d([],t.j)
g.push(e)
s=1
break
case 10:h=O.bm(J.D(k,1))
i=h.length
if(i<2)H.l(P.k("Textures must have at least 2 numbers."))
if(i>3)H.l(P.k("Textures must have at most than 3 numbers."))
if(i===3){if(2>=i){q=H.b(h,2)
s=1
break}g=h[2]
$.B().toString
if(typeof g!=="number"){q=g.p()
s=1
break}if(!(Math.abs(g-0)<1e-9))H.l(P.k("Currently, non-zero z values in textures are not supported."))}g=m.c
if(0>=i){q=H.b(h,0)
s=1
break}f=h[0]
if(1>=i){q=H.b(h,1)
s=1
break}f=[f,h[1]]
g.push(new V.aZ(f[0],f[1]))
s=1
break
case 11:h=O.bm(J.D(k,1))
i=h.length
if(i!==3)H.l(P.k("Normals must have exactly 3 numbers."))
g=m.d
if(0>=i){q=H.b(h,0)
s=1
break}f=h[0]
if(1>=i){q=H.b(h,1)
s=1
break}e=h[1]
if(2>=i){q=H.b(h,2)
s=1
break}g.push(new V.Q(f,e,h[2]))
s=1
break
case 12:m.hG(J.D(k,1))
s=1
break
case 13:m.hE(J.D(k,1))
s=1
break
case 14:m.hD(J.D(k,1))
s=1
break
case 15:s=20
return P.ae(m.bs(J.D(k,1),b,!1),$async$a6)
case 20:s=1
break
case 16:i=J.D(k,1)
m.x=m.e.h(0,i)
m.bv()
s=1
break
case 17:m.r=J.D(k,1)
m.bv()
s=1
break
case 18:m.r=J.D(k,1)
m.bv()
s=1
break
case 19:s=1
break
case 8:p=2
s=6
break
case 4:p=3
c=o
j=H.W(c)
i=P.k('Line: "'+H.h(a)+'": '+H.h(j))
throw H.c(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.a3(q,r)
case 2:return P.a2(o,r)}})
return P.a4($async$a6,r)},
bv:function(){var s,r,q,p=this
if(p.z==null||p.y.a.c.length!==0){s=F.ad()
p.y=s
s=E.i7(s)
p.z=s
p.Q.y.m(0,s)
for(s=p.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)C.b.sk(s[q].b,0)}p.z.sb0(p.x)
p.z.a=p.r},
bP:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=", was out of range [-",d=a.split("/"),c=d.length
if(0>=c)return H.b(d,0)
s=P.cs(d[0],f)
r=g.b.length
if(typeof s!=="number")return s.N()
if(s<-r||s>r||s===0)throw H.c(P.k("The position index, "+s+e+r+".."+r+"] or 0."))
if(s<0)s=r+s+1;--s
if(c>1){q=d[1]
if(q!=null&&q.length>0){p=P.cs(q,f)
o=g.c
r=o.length
if(typeof p!=="number")return p.N()
if(p<-r||p>r||p===0)throw H.c(P.k("The texture index, "+p+e+r+".."+r+"] or 0."))
if(p<0)p=r+p+1
n=p-1
if(n<0||n>=r)return H.b(o,n)
m=o[n]}else m=f}else m=f
if(c>2){q=d[2]
if(q!=null&&q.length>0){l=P.cs(q,f)
c=g.d
r=c.length
if(typeof l!=="number")return l.N()
if(l<-r||l>r||l===0)throw H.c(P.k("The normal index, "+l+e+r+".."+r+"] or 0."))
if(l<0)l=r+l+1
o=l-1
if(o<0||o>=r)return H.b(c,o)
k=c[o]}else k=f}else k=f
c=g.b
if(s<0||s>=c.length)return H.b(c,s)
j=c[s]
for(c=j.b,o=c.length,i=0;i<c.length;c.length===o||(0,H.t)(c),++i){h=c[i]
if(J.G(h.y,m)&&J.G(h.r,k))return h}h=F.cf(f,f,f,f,f,f,f,f,0)
h.sab(0,j.a)
if(!J.G(h.y,m)){h.y=m
c=h.a
if(c!=null)c.Z()}h.sbc(k)
g.y.a.m(0,h)
j.b.push(h)
return h},
hG:function(a){var s,r=O.kT(a),q=H.d([],t.j),p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.b(r,s)
q.push(this.bP(r[s]))}this.y.b.il(q)},
hE:function(a){var s,r=O.kT(a),q=H.d([],t.j),p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.b(r,s)
q.push(this.bP(r[s]))}this.y.c.ik(q)},
hD:function(a){var s,r=O.kT(a),q=H.d([],t.j),p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.b(r,s)
q.push(this.bP(r[s]))}this.y.d.ij(q)},
bs:function(a,b,c){return this.hF(a,b,!1)},
hF:function(a,b,c){var s=0,r=P.a6(t.z),q=this,p
var $async$bs=P.a7(function(d,e){if(d===1)return P.a2(e,r)
while(true)switch(s){case 0:s=2
return P.ae(O.es(b+"/"+a,q.a,!1),$async$bs)
case 2:p=e
q.e.by(0,p)
return P.a3(null,r)}})
return P.a4($async$bs,r)}}
O.eM.prototype={}
X.dV.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dV))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.eh.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eh))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.iN.prototype={
ja:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
j6:function(a){this.c=a.b
this.d.a_(0,a.a)
return!1}}
X.cN.prototype={}
X.iS.prototype={
b5:function(a,b){var s,r,q,p,o,n=this,m=Date.now(),l=n.x,k=b.a,j=n.Q
if(typeof k!=="number")return k.l()
s=b.b
r=n.ch
if(typeof s!=="number")return s.l()
q=l.a
if(typeof q!=="number")return q.n()
l=l.b
if(typeof l!=="number")return l.n()
p=new V.aZ(q+k*j,l+s*r)
r=n.a.gaT()
o=new X.c4(a,V.bH(),n.x,r,p)
o.b=!0
n.z=new P.as(m,!1)
n.x=p
return o},
cI:function(a,b){this.r=a.a
return!1},
be:function(a,b){var s=this.r,r=a.a
if(typeof r!=="number")return r.eL()
if(typeof s!=="number")return s.ak()
this.r=(s&~r)>>>0
return!1},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.b5(a,b))
return!0},
jb:function(a){var s,r,q,p,o,n,m=this,l=m.e
if(l==null)return!1
s=m.a.gaT()
r=m.x
Date.now()
q=a.a
p=m.cx
if(typeof q!=="number")return q.l()
o=a.b
n=m.cy
if(typeof o!=="number")return o.l()
r=new X.c5(new V.an(q*p,o*n),s,r)
r.b=!0
l.G(r)
return!0},
hb:function(a,b,c){var s,r,q,p=this
if(p.f==null)return
s=Date.now()
r=p.f
q=new X.cN(c,p.a.gaT(),b)
q.b=!0
r.G(q)
p.y=new P.as(s,!1)
p.x=V.bH()}}
X.az.prototype={
w:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.az))return!1
if(s.a!==b.a)return!1
if(s.b!=b.b)return!1
if(s.c!=b.c)return!1
return!0},
i:function(a){var s=this.a?"Ctrl+":""
s+=this.b?"Alt+":""
return s+(this.c?"Shift+":"")}}
X.c4.prototype={}
X.jb.prototype={
bY:function(a,b,c){var s=this,r=new P.as(Date.now(),!1),q=s.a.gaT(),p=new X.c4(a,s.r,s.x,q,b)
p.b=!0
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return p},
cI:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.G(this.bY(a,b,!0))
return!0},
be:function(a,b){var s=this,r=s.f,q=a.a
if(typeof q!=="number")return q.eL()
if(typeof r!=="number")return r.ak()
s.f=(r&~q)>>>0
r=s.c
if(r==null)return!1
r.G(s.bY(a,b,!0))
return!0},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.G(this.bY(a,b,!1))
return!0},
jc:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m==null)return!1
s=n.a.gaT()
Date.now()
r=a.a
q=n.Q
if(typeof r!=="number")return r.l()
p=a.b
o=n.ch
if(typeof p!=="number")return p.l()
s=new X.c5(new V.an(r*q,p*o),s,b)
s.b=!0
m.G(s)
return!0},
gdS:function(){var s=this.b
return s==null?this.b=D.M():s},
gbK:function(){var s=this.c
return s==null?this.c=D.M():s},
geh:function(){var s=this.d
return s==null?this.d=D.M():s}}
X.c5.prototype={}
X.eJ.prototype={}
X.d0.prototype={}
X.jD.prototype={
b5:function(a,b){var s=this,r=new P.as(Date.now(),!1),q=a.length>0?a[0]:V.bH(),p=s.a.gaT(),o=new X.d0(s.f,s.r,p,q)
o.b=!0
if(b){s.x=r
s.f=q}s.y=r
s.r=q
return o},
j9:function(a){var s=this.b
if(s==null)return!1
s.G(this.b5(a,!0))
return!0},
j7:function(a){var s=this.c
if(s==null)return!1
s.G(this.b5(a,!0))
return!0},
j8:function(a){var s=this.d
if(s==null)return!1
s.G(this.b5(a,!1))
return!0}}
X.fr.prototype={
gaT:function(){var s=this.a,r=C.j.gdN(s).c
r.toString
s=C.j.gdN(s).d
s.toString
return V.n_(0,0,r,s)},
de:function(a){var s=a.keyCode,r=a.ctrlKey||a.metaKey
return new X.eh(s,new X.az(r,a.altKey,a.shiftKey))},
aO:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.az(r,a.altKey,a.shiftKey)},
cf:function(a){var s=this.b,r=a.ctrlKey||a.metaKey
s.c=new X.az(r,a.altKey,a.shiftKey)},
aD:function(a){var s,r=this.a.getBoundingClientRect(),q=a.pageX,p=a.pageY,o=r.left
if(typeof q!=="number")return q.p()
if(typeof o!=="number")return H.f(o)
s=r.top
if(typeof p!=="number")return p.p()
if(typeof s!=="number")return H.f(s)
return new V.aZ(q-o,p-s)},
b6:function(a){return new V.an(a.movementX,a.movementY)},
cb:function(a){var s,r,q,p,o,n,m,l,k=this.a.getBoundingClientRect(),j=H.d([],t.v)
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
o=C.d.ax(p.pageX)
C.d.ax(p.pageY)
n=k.left
if(typeof n!=="number")return H.f(n)
C.d.ax(p.pageX)
m=C.d.ax(p.pageY)
l=k.top
if(typeof l!=="number")return H.f(l)
j.push(new V.aZ(o-n,m-l))}return j},
aB:function(a){var s=a.buttons,r=a.ctrlKey||a.metaKey
return new X.dV(s,new X.az(r,a.altKey,a.shiftKey))},
bZ:function(a){var s,r,q=this.a.getBoundingClientRect(),p=a.pageX,o=a.pageY,n=q.left
if(typeof p!=="number")return p.p()
if(typeof n!=="number")return H.f(n)
s=p-n
if(s<0)return!1
p=q.top
if(typeof o!=="number")return o.p()
if(typeof p!=="number")return H.f(p)
r=o-p
if(r<0)return!1
p=q.width
if(typeof p!=="number")return H.f(p)
if(s<p){p=q.height
if(typeof p!=="number")return H.f(p)
p=r<p}else p=!1
return p},
h5:function(a){this.f=!0},
fU:function(a){this.f=!1},
h_:function(a){if(this.f&&this.bZ(a))a.preventDefault()},
h9:function(a){var s
if(!this.f)return
s=this.de(a)
this.b.ja(s)},
h7:function(a){var s
if(!this.f)return
s=this.de(a)
this.b.j6(s)},
hd:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aO(a)
if(p.x){s=p.aB(a)
r=p.b6(a)
if(p.d.cI(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.aB(a)
q=p.aD(a)
if(p.c.cI(s,q))a.preventDefault()},
hh:function(a){var s,r,q,p=this
p.aO(a)
s=p.aB(a)
if(p.x){r=p.b6(a)
if(p.d.be(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.be(s,q))a.preventDefault()},
h3:function(a){var s,r,q,p=this
if(!p.bZ(a)){p.aO(a)
s=p.aB(a)
if(p.x){r=p.b6(a)
if(p.d.be(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.be(s,q))a.preventDefault()}},
hf:function(a){var s,r,q,p=this
p.aO(a)
s=p.aB(a)
if(p.x){r=p.b6(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bd(s,q))a.preventDefault()},
h1:function(a){var s,r,q,p=this
if(!p.bZ(a)){p.aO(a)
s=p.aB(a)
if(p.x){r=p.b6(a)
if(p.d.bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.aD(a)
if(p.c.bd(s,q))a.preventDefault()}},
hj:function(a){var s,r,q=this
q.aO(a)
s=new V.an((a&&C.y).giw(a),C.y.gix(a)).l(0,q.Q)
if(q.x){if(q.d.jb(s))a.preventDefault()
return}if(q.r)return
r=q.aD(a)
if(q.c.jc(s,r))a.preventDefault()},
hl:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aB(q.y)
r=q.aD(q.y)
q.d.hb(s,r,p)}},
hy:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cf(a)
s=r.cb(a)
if(r.e.j9(s))a.preventDefault()},
hu:function(a){var s
this.cf(a)
s=this.cb(a)
if(this.e.j7(s))a.preventDefault()},
hw:function(a){var s
this.cf(a)
s=this.cb(a)
if(this.e.j8(s))a.preventDefault()}}
D.dR.prototype={$iY:1}
D.e2.prototype={$iY:1}
D.Y.prototype={}
D.cJ.prototype={
d0:function(a){var s=this.y
if(s!=null)s.G(a)},
dm:function(a){var s=this.z
if(s!=null)s.G(a)},
ha:function(){return this.dm(null)},
ho:function(a){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.t)(a),++r){q=a[r]
if(q==null||this.fj(q))return!1}return!0},
fO:function(a,b){var s,r,q,p
for(s=b.length,r=this.gdl(),q=0;q<b.length;b.length===s||(0,H.t)(b),++q){p=b[q]
p.gB().m(0,r)}s=new D.bb()
s.b=!0
this.d0(s)},
hs:function(a,b){var s,r,q,p
for(s=b.length,r=this.gdl(),q=0;q<b.length;b.length===s||(0,H.t)(b),++q){p=b[q]
p.gB().a_(0,r)}s=new D.bc()
s.b=!0
this.d0(s)},
fj:function(a){var s=C.b.U(this.e,a)
return s}}
D.eI.prototype={$iY:1}
D.eW.prototype={$iY:1}
V.S.prototype={
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.L.prototype={
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.L))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.i9.prototype={}
V.en.prototype={
a7:function(a,b){var s=this,r=H.d([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.m)
return r},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.en))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=t.m,m=V.cr(H.d([o.a,o.d,o.r],n),3,0),l=V.cr(H.d([o.b,o.e,o.x],n),3,0),k=V.cr(H.d([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.b(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.b(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.b(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.b(m,1)
p=" "+m[1]+", "
if(1>=r)return H.b(l,1)
p=p+l[1]+", "
if(1>=q)return H.b(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.b(m,2)
n=" "+m[2]+", "
if(2>=r)return H.b(l,2)
n=n+l[2]+", "
if(2>=q)return H.b(k,2)
return p+(n+k[2]+"]")}}
V.be.prototype={
a7:function(a,b){var s=this,r=H.d([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.m)
return r},
ee:function(b4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b1.f
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b1.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b2*b3-s*r
p=b1.r
if(typeof p!=="number")return H.f(p)
o=b1.c
if(typeof o!=="number")return o.l()
n=b2*p-o*r
m=b1.x
if(typeof m!=="number")return H.f(m)
l=b1.d
if(typeof l!=="number")return l.l()
k=b2*m-l*r
j=s*p-o*b3
i=s*m-l*b3
h=o*m-l*p
g=b1.y
f=b1.cy
if(typeof g!=="number")return g.l()
e=b1.z
d=b1.cx
if(typeof e!=="number")return e.l()
c=g*f-e*d
b=b1.db
a=b1.Q
if(typeof a!=="number")return a.l()
a0=g*b-a*d
a1=b1.dx
a2=b1.ch
if(typeof a2!=="number")return a2.l()
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
$.B().toString
if(Math.abs(a7-0)<1e-9)return V.eo()
a8=1/a7
a9=-r
b0=-d
return V.aX((b3*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(b2*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-b3*a3+m*c)*a8,(-b2*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+b3*a0-p*c)*a8,(b2*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
l:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.a,b3=b5.a
if(typeof b2!=="number")return b2.l()
if(typeof b3!=="number")return H.f(b3)
s=b1.b
r=b5.e
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=b1.c
p=b5.y
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=b1.d
n=b5.cx
if(typeof o!=="number")return o.l()
m=b5.b
if(typeof m!=="number")return H.f(m)
l=b5.f
if(typeof l!=="number")return H.f(l)
k=b5.z
if(typeof k!=="number")return H.f(k)
j=b5.cy
i=b5.c
if(typeof i!=="number")return H.f(i)
h=b5.r
if(typeof h!=="number")return H.f(h)
g=b5.Q
if(typeof g!=="number")return H.f(g)
f=b5.db
e=b5.d
if(typeof e!=="number")return H.f(e)
d=b5.x
if(typeof d!=="number")return H.f(d)
c=b5.ch
if(typeof c!=="number")return H.f(c)
b=b5.dx
a=b1.e
if(typeof a!=="number")return a.l()
a0=b1.f
if(typeof a0!=="number")return a0.l()
a1=b1.r
if(typeof a1!=="number")return a1.l()
a2=b1.x
if(typeof a2!=="number")return a2.l()
a3=b1.y
if(typeof a3!=="number")return a3.l()
a4=b1.z
if(typeof a4!=="number")return a4.l()
a5=b1.Q
if(typeof a5!=="number")return a5.l()
a6=b1.ch
if(typeof a6!=="number")return a6.l()
a7=b1.cx
a8=b1.cy
a9=b1.db
b0=b1.dx
return V.aX(b2*b3+s*r+q*p+o*n,b2*m+s*l+q*k+o*j,b2*i+s*h+q*g+o*f,b2*e+s*d+q*c+o*b,a*b3+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*b3+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*b3+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cN:function(a){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=a.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.f(g)
s=i.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=i.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=i.e
if(typeof o!=="number")return o.l()
n=i.f
if(typeof n!=="number")return n.l()
m=i.r
if(typeof m!=="number")return m.l()
l=i.y
if(typeof l!=="number")return l.l()
k=i.z
if(typeof k!=="number")return k.l()
j=i.Q
if(typeof j!=="number")return j.l()
return new V.Q(h*g+s*r+q*p,o*g+n*r+m*p,l*g+k*r+j*p)},
b1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=f.a,d=a.a
if(typeof e!=="number")return e.l()
if(typeof d!=="number")return H.f(d)
s=f.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=f.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
o=f.d
if(typeof o!=="number")return H.f(o)
n=f.e
if(typeof n!=="number")return n.l()
m=f.f
if(typeof m!=="number")return m.l()
l=f.r
if(typeof l!=="number")return l.l()
k=f.x
if(typeof k!=="number")return H.f(k)
j=f.y
if(typeof j!=="number")return j.l()
i=f.z
if(typeof i!=="number")return i.l()
h=f.Q
if(typeof h!=="number")return h.l()
g=f.ch
if(typeof g!=="number")return H.f(g)
return new V.ac(e*d+s*r+q*p+o,n*d+m*r+l*p+k,j*d+i*r+h*p+g)},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.be))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.d
r=q.d
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.e
r=q.e
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.f
r=q.f
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.r
r=q.r
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.x
r=q.x
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.y
r=q.y
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.z
r=q.z
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.Q
r=q.Q
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.ch
r=q.ch
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.cx-q.cx)<1e-9))return!1
if(!(Math.abs(b.cy-q.cy)<1e-9))return!1
if(!(Math.abs(b.db-q.db)<1e-9))return!1
if(!(Math.abs(b.dx-q.dx)<1e-9))return!1
return!0},
i:function(a){return this.O()},
E:function(a){var s,r,q,p,o,n=this,m=t.m,l=V.cr(H.d([n.a,n.e,n.y,n.cx],m),3,0),k=V.cr(H.d([n.b,n.f,n.z,n.cy],m),3,0),j=V.cr(H.d([n.c,n.r,n.Q,n.db],m),3,0),i=V.cr(H.d([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.b(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.b(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.b(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.b(l,1)
o=o+l[1]+", "
if(1>=r)return H.b(k,1)
o=o+k[1]+", "
if(1>=q)return H.b(j,1)
o=o+j[1]+", "
if(1>=p)return H.b(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.b(l,2)
s=s+l[2]+", "
if(2>=r)return H.b(k,2)
s=s+k[2]+", "
if(2>=q)return H.b(j,2)
s=s+j[2]+", "
if(2>=p)return H.b(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.b(l,3)
o=o+l[3]+", "
if(3>=r)return H.b(k,3)
o=o+k[3]+", "
if(3>=q)return H.b(j,3)
o=o+j[3]+", "
if(3>=p)return H.b(i,3)
return s+(o+i[3]+"]")},
O:function(){return this.E("")}}
V.aZ.prototype={
a8:function(a){var s,r,q=a.a,p=this.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.f(p)
s=a.b
r=this.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
return new V.an(q-p,s-r)},
w:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aZ))return!1
s=b.a
r=this.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.ac.prototype={
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.ac(o+n,s+r,q+p)},
p:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.p()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.f(p)
return new V.ac(o-n,s-r,q-p)},
K:function(a,b){var s,r,q
$.B().toString
if(Math.abs(b-0)<1e-9)return V.m_()
s=this.a
if(typeof s!=="number")return s.K()
r=this.b
if(typeof r!=="number")return r.K()
q=this.c
if(typeof q!=="number")return q.K()
return new V.ac(s/b,r/b,q/b)},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.ac))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.eO.prototype={
gaj:function(){var s=this.c,r=this.d
return s>r?r:s},
w:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eO))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+"]"}}
V.cb.prototype={
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cb))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(b.d-q.d)<1e-9))return!1
if(!(Math.abs(b.e-q.e)<1e-9))return!1
if(!(Math.abs(b.f-q.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.H(s.a,3,0)+", "+V.H(s.b,3,0)+", "+V.H(s.c,3,0)+", "+V.H(s.d,3,0)+", "+V.H(s.e,3,0)+", "+V.H(s.f,3,0)+"]"}}
V.an.prototype={
cE:function(a){return Math.sqrt(this.aa(this))},
aa:function(a){var s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
return q*p+s*r},
l:function(a,b){var s,r=this.a
if(typeof r!=="number")return r.l()
if(typeof b!=="number")return H.f(b)
s=this.b
if(typeof s!=="number")return s.l()
return new V.an(r*b,s*b)},
K:function(a,b){var s,r
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.ng
return s==null?$.ng=new V.an(0,0):s}s=this.a
if(typeof s!=="number")return s.K()
r=this.b
if(typeof r!=="number")return r.K()
return new V.an(s/b,r/b)},
w:function(a,b){var s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.an))return!1
s=b.a
r=this.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=this.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.Q.prototype={
cE:function(a){return Math.sqrt(this.aa(this))},
aa:function(a){var s,r,q,p,o=this.a,n=a.a
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.b
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=this.c
p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.f(p)
return o*n+s*r+q*p},
Y:function(){var s=this,r=Math.sqrt(s.aa(s))
if(r===1)return s
return s.K(0,r)},
aF:function(a){var s,r,q,p,o=this.b,n=a.c
if(typeof o!=="number")return o.l()
if(typeof n!=="number")return H.f(n)
s=this.c
r=a.b
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.f(r)
q=a.a
if(typeof q!=="number")return H.f(q)
p=this.a
if(typeof p!=="number")return p.l()
return new V.Q(o*n-s*r,s*q-p*n,p*r-o*q)},
n:function(a,b){var s,r,q,p,o=this.a,n=b.a
if(typeof o!=="number")return o.n()
if(typeof n!=="number")return H.f(n)
s=this.b
r=b.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.f(r)
q=this.c
p=b.c
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.f(p)
return new V.Q(o+n,s+r,q+p)},
J:function(a){var s,r,q=this.a
if(typeof q!=="number")return q.J()
s=this.b
if(typeof s!=="number")return s.J()
r=this.c
if(typeof r!=="number")return r.J()
return new V.Q(-q,-s,-r)},
K:function(a,b){var s,r,q
$.B().toString
if(Math.abs(b-0)<1e-9)return V.R()
s=this.a
if(typeof s!=="number")return s.K()
r=this.b
if(typeof r!=="number")return r.K()
q=this.c
if(typeof q!=="number")return q.K()
return new V.Q(s/b,r/b,q/b)},
eg:function(){var s=this.a
$.B().toString
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.b
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
s=this.c
if(typeof s!=="number")return H.f(s)
if(!(Math.abs(0-s)<1e-9))return!1
return!0},
w:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
r=q.a
$.B().toString
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.b
r=q.b
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
s=b.c
r=q.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.f(r)
if(!(Math.abs(s-r)<1e-9))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.hW.prototype={
bR:function(a){var s=V.rm(a,this.c,this.b)
return s},
gB:function(){var s=this.y
return s==null?this.y=D.M():s},
R:function(a){var s=this.y
if(s!=null)s.G(a)},
scO:function(a,b){},
scF:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bR(s)}q=new D.w("maximumLocation",q,r.b)
q.b=!0
r.R(q)}},
scH:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bR(s)}q=new D.w("minimumLocation",q,r.c)
q.b=!0
r.R(q)}},
sab:function(a,b){var s,r=this
b=r.bR(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
s=new D.w("location",s,b)
s.b=!0
r.R(s)}},
scG:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
p=new D.w("maximumVelocity",p,a)
p.b=!0
q.R(p)}},
sX:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.w("velocity",r,a)
r.b=!0
s.R(r)}},
scp:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
s=new D.w("dampening",s,a)
s.b=!0
this.R(s)}},
as:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(p.r-0)<1e-9)){s=o+p.r*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sab(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sX(s)}}}
U.cv.prototype={
gB:function(){var s=this.b
return s==null?this.b=D.M():s},
b2:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cv))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bX.prototype={
gB:function(){var s=this.e
return s==null?this.e=D.M():s},
R:function(a){var s=this.e
if(s!=null)s.G(a)},
ae:function(){return this.R(null)},
fM:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaN(),q=t.f,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p]
if(o!=null){n=o.gB()
m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.bb()
s.b=!0
this.R(s)},
hq:function(a,b){var s,r,q,p
for(s=b.length,r=this.gaN(),q=0;q<b.length;b.length===s||(0,H.t)(b),++q){p=b[q]
if(p!=null)p.gB().a_(0,r)}s=new D.bc()
s.b=!0
this.R(s)},
b2:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(typeof p!=="number")return p.N()
if(p<o){q.r=o
p=q.e
if(p!=null)++p.d
for(p=q.a,p=new J.aa(p,p.length),s=null;p.A();){o=p.d
if(o!=null){r=o.b2(0,b,c)
if(r!=null)s=s==null?r:r.l(0,s)}}q.f=s==null?V.eo():s
p=q.e
if(p!=null)p.b_(0)}return q.f},
w:function(a,b){var s,r,q,p
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
s=this.a.length
for(r=0;r<s;++r){q=this.a
if(r>=q.length)return H.b(q,r)
q=q[r]
p=b.a
if(r>=p.length)return H.b(p,r)
if(!J.G(q,p[r]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.d6.prototype={
gB:function(){var s=this.cy
return s==null?this.cy=D.M():s},
R:function(a){var s=this.cy
if(s!=null)s.G(a)},
ae:function(){return this.R(null)},
b7:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.c.gdS().m(0,s.gc_())
s.a.c.geh().m(0,s.gc1())
s.a.c.gbK().m(0,s.gc3())
return!0},
c0:function(a){var s=this
if(!J.G(s.c,s.a.b.c))return
s.x=s.y=!0
s.z=s.b.d},
c2:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.y)return
if(l.x){s=a.y.a8(a.d)
s=s.aa(s)
r=l.r
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.x=!1}if(l.d){s=a.c
s=a.y.a8(a.d).l(0,2).K(0,s.gaj())
l.Q=s
r=l.b
s=s.a
if(typeof s!=="number")return s.l()
q=l.e
if(typeof q!=="number")return H.f(q)
r.sX(s*10*q)}else{s=a.c
r=a.y
q=a.d
p=r.a8(q).l(0,2).K(0,s.gaj())
r=l.b
o=p.a
if(typeof o!=="number")return o.J()
n=l.e
if(typeof n!=="number")return H.f(n)
m=l.z
if(typeof m!=="number")return H.f(m)
r.sab(0,-o*n+m)
l.b.sX(0)
l.Q=a.z.a8(q).l(0,2).K(0,s.gaj())}l.ae()},
c4:function(a){var s,r,q,p=this
if(!p.y)return
p.y=!1
if(p.x)return
s=p.Q
if(s.aa(s)>0.0001){s=p.b
r=p.Q.a
if(typeof r!=="number")return r.l()
q=p.e
if(typeof q!=="number")return H.f(q)
s.sX(r*10*q)
p.ae()}},
b2:function(a,b,c){var s,r,q,p=this,o=p.ch,n=b.e
if(typeof o!=="number")return o.N()
if(o<n){p.ch=n
s=b.y
p.b.as(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
p.cx=V.aX(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return p.cx},
$iZ:1}
U.d7.prototype={
gB:function(){var s=this.fx
return s==null?this.fx=D.M():s},
R:function(a){var s=this.fx
if(s!=null)s.G(a)},
ae:function(){return this.R(null)},
b7:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.c.gdS().m(0,q.gc_())
q.a.c.geh().m(0,q.gc1())
q.a.c.gbK().m(0,q.gc3())
s=q.a.d
r=s.f
s=r==null?s.f=D.M():r
s.m(0,q.gfC())
s=q.a.d
r=s.d
s=r==null?s.d=D.M():r
s.m(0,q.gfE())
s=q.a.e
r=s.b
s=r==null?s.b=D.M():r
s.m(0,q.gi1())
s=q.a.e
r=s.d
s=r==null?s.d=D.M():r
s.m(0,q.gi_())
s=q.a.e
r=s.c
s=r==null?s.c=D.M():r
s.m(0,q.ghY())
return!0},
az:function(a){var s=a.a,r=a.b
if(this.f){if(typeof s!=="number")return s.J()
s=-s}if(this.r){if(typeof r!=="number")return r.J()
r=-r}return new V.an(s,r)},
c0:function(a){var s=this
t.d.a(a)
if(!J.G(s.d,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
c2:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a8(a.d)
s=s.aa(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.az(a.y.a8(a.d).l(0,2).K(0,s.gaj()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sX(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sX(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.az(r.a8(q).l(0,2).K(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sab(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sab(0,-n*o+r)
l.b.sX(0)
l.c.sX(0)
l.dx=l.az(a.z.a8(q).l(0,2).K(0,s.gaj()))}l.ae()},
c4:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.aa(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sX(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sX(-r*10*s)
p.ae()}},
fD:function(a){var s=this
if(t.dn.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
fF:function(a){var s,r,q,p,o,n,m,l=this
t.d.a(a)
if(!J.G(l.d,a.x.b))return
s=a.c
r=a.y
q=a.d
p=l.az(r.a8(q).l(0,2).K(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sab(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sab(0,-n*o+r)
l.b.sX(0)
l.c.sX(0)
l.dx=l.az(a.z.a8(q).l(0,2).K(0,s.gaj()))
l.ae()},
i2:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
i0:function(a){var s,r,q,p,o,n,m,l=this
t.eP.a(a)
if(!l.cx)return
if(l.ch){s=a.y.a8(a.d)
s=s.aa(s)
r=l.Q
if(typeof r!=="number")return H.f(r)
if(s<r)return
l.ch=!1}if(l.e){s=a.c
s=l.az(a.y.a8(a.d).l(0,2).K(0,s.gaj()))
l.dx=s
r=l.c
s=s.a
if(typeof s!=="number")return s.J()
q=l.y
if(typeof q!=="number")return H.f(q)
r.sX(-s*10*q)
q=l.b
s=l.dx.b
if(typeof s!=="number")return s.J()
r=l.x
if(typeof r!=="number")return H.f(r)
q.sX(-s*10*r)}else{s=a.c
r=a.y
q=a.d
p=l.az(r.a8(q).l(0,2).K(0,s.gaj()))
r=l.c
o=p.a
if(typeof o!=="number")return o.J()
n=l.y
if(typeof n!=="number")return H.f(n)
m=l.cy
if(typeof m!=="number")return H.f(m)
r.sab(0,-o*n+m)
m=l.b
n=p.b
if(typeof n!=="number")return n.J()
o=l.x
if(typeof o!=="number")return H.f(o)
r=l.db
if(typeof r!=="number")return H.f(r)
m.sab(0,-n*o+r)
l.b.sX(0)
l.c.sX(0)
l.dx=l.az(a.z.a8(q).l(0,2).K(0,s.gaj()))}l.ae()},
hZ:function(a){var s,r,q,p=this
if(!p.cx)return
p.cx=!1
if(p.ch)return
s=p.dx
if(s.aa(s)>0.0001){s=p.c
r=p.dx.a
if(typeof r!=="number")return r.J()
q=p.y
if(typeof q!=="number")return H.f(q)
s.sX(-r*10*q)
q=p.b
r=p.dx.b
if(typeof r!=="number")return r.J()
s=p.x
if(typeof s!=="number")return H.f(s)
q.sX(-r*10*s)
p.ae()}},
b2:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(typeof o!=="number")return o.N()
if(o<n){p.dy=n
s=b.y
p.c.as(0,s)
p.b.as(0,s)
o=p.b.d
r=Math.cos(o)
q=Math.sin(o)
o=V.aX(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
n=p.c.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=o.l(0,V.aX(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.d8.prototype={
gB:function(){var s=this.r
return s==null?this.r=D.M():s},
R:function(a){var s=this.r
if(s!=null)s.G(a)},
b7:function(a){var s,r,q,p=this
if(p.a!=null)return!1
p.a=a
s=a.c
r=s.e
s=r==null?s.e=D.M():r
r=p.gfG()
s.m(0,r)
s=p.a.d
q=s.e;(q==null?s.e=D.M():q).m(0,r)
return!0},
fH:function(a){var s,r,q,p,o=this
if(!J.G(o.b,o.a.b.c))return
t.F.a(a)
s=o.d
r=a.x.b
q=o.c
if(typeof r!=="number")return r.l()
p=s+r*q
if(s!==p){o.d=p
s=new D.w("zoom",s,p)
s.b=!0
o.R(s)}},
b2:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.mM(s,s,s)}return r.f},
$iZ:1}
M.e5.prototype={
aA:function(a){var s=this.y
if(s!=null)s.G(a)},
eY:function(){return this.aA(null)},
fW:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gay(),q=t.f,p=0;p<b.length;b.length===s||(0,H.t)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bz()
n.d=0
o.z=n}m=n.a;(m==null?n.a=H.d([],q):m).push(r)}}s=new D.bb()
s.b=!0
this.aA(s)},
fY:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gay(),q=0;q<b.length;b.length===s||(0,H.t)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bz()
o.d=0
p.z=o}o.a_(0,r)}}s=new D.bc()
s.b=!0
this.aA(s)},
sb0:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gB().a_(0,r.gay())
s=r.d
r.d=a
if(a!=null)a.gB().m(0,r.gay())
q=new D.w("technique",s,r.d)
q.b=!0
r.aA(q)}},
gB:function(){var s=this.y
return s==null?this.y=D.M():s},
aI:function(a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this
a4.ew(a3.d)
s=a3.c
s.toString
r=a4.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
p=r.drawingBufferHeight
o=s.r
n=o.a
if(typeof q!=="number")return H.f(q)
m=C.d.ax(n*q)
n=o.b
if(typeof p!=="number")return H.f(p)
l=C.d.ax(n*p)
n=C.d.ax(o.c*q)
a4.c=n
o=C.d.ax(o.d*p)
a4.d=o
r.viewport(m,l,n,o)
r.clearDepth(s.c)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)
s=a3.b
r=a4.c
o=a4.d
n=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(n*0.5)
g=V.aX(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a4.cy.ev(g)
r=$.mQ
if(r==null){r=V.m_()
o=$.nj
if(o==null)o=$.nj=new V.Q(0,1,0)
f=V.nl().Y()
e=o.aF(f).Y()
d=f.aF(e)
c=new V.Q(r.a,r.b,r.c)
b=e.J(0).aa(c)
a=d.J(0).aa(c)
a0=f.J(0).aa(c)
r=V.aX(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.mQ=r
a1=r}else a1=r
s=s.b
if(s!=null){a2=s.a
if(a2!=null)a1=a2.l(0,a1)}a4.db.ev(a1)
for(s=a3.e.a,s=new J.aa(s,s.length);s.A();)s.d.as(0,a4)
for(s=a3.e.a,s=new J.aa(s,s.length);s.A();)s.d.aI(a4)
a3.b.toString
a4.cy.cJ()
a4.db.cJ()
a3.c.toString
a4.es()}}
A.dO.prototype={}
A.hN.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
iD:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dR:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.X.prototype={
gaf:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof A.X))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.ec.prototype={}
A.em.prototype={
eT:function(c6,c7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3="Required uniform value, ",c4=", was not defined or used in shader.",c5="uniform mat4 objMat;\n"
c1.z=c6
s=new P.a1("")
r=c6.fr
if(r){s.a=c5
q=c5}else q=""
p=c6.fx
q=(p?s.a=q+"uniform mat4 viewObjMat;\n":q)+"uniform mat4 projViewObjMat;\n"
s.a=q
q+="\n"
s.a=q
q=s.a=q+"attribute vec3 posAttr;\n"
o=c6.k4
if(o){q+="attribute vec3 normAttr;\n"
s.a=q}n=c6.r1
s.a=(n?s.a=q+"attribute vec3 binmAttr;\n":q)+"\n"
A.qE(c6,s)
A.qG(c6,s)
A.qF(c6,s)
A.qI(c6,s)
A.qJ(c6,s)
A.qH(c6,s)
A.qK(c6,s)
q=s.a+="vec4 getPos()\n"
q+="{\n"
s.a=q
m=c6.ry
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
s.a=q}if(c6.r2){q+="   txt2D = getTxt2D();\n"
s.a=q}if(c6.rx){q+="   txtCube = getTxtCube();\n"
s.a=q}if(c6.k2){q+="   objPos = getObjPos();\n"
s.a=q}q=(c6.k3?s.a=q+"   viewPos = getViewPos();\n":q)+"   gl_Position = getPos();\n"
s.a=q
q+="}\n"
s.a=q
q=s.a=q+"\n"
c1.eb(0,q.charCodeAt(0)==0?q:q,A.qD(c1.z))
c1.Q=c1.x.h(0,"posAttr")
c1.cx=c1.x.h(0,"normAttr")
c1.ch=c1.x.h(0,"binmAttr")
c1.cy=c1.x.h(0,"txt2DAttr")
c1.db=c1.x.h(0,"txtCubeAttr")
c1.dx=c1.x.h(0,"bendAttr")
if(c6.dy)c1.id=t.q.a(c1.y.H(0,"invViewMat"))
if(r)c1.dy=t.q.a(c1.y.H(0,"objMat"))
if(p)c1.fr=t.q.a(c1.y.H(0,"viewObjMat"))
r=t.q
c1.fy=r.a(c1.y.H(0,"projViewObjMat"))
if(c6.go)c1.fx=r.a(c1.y.H(0,"viewMat"))
if(c6.x1)c1.k1=t.O.a(c1.y.H(0,"txt2DMat"))
if(c6.x2)c1.k2=r.a(c1.y.H(0,"txtCubeMat"))
if(c6.y1)c1.k3=r.a(c1.y.H(0,"colorMat"))
c1.r1=H.d([],t.hg)
q=c6.aV
if(q>0){c1.k4=c1.y.H(0,"bendMatCount")
for(l=0;l<q;++l){p=c1.r1
o=c1.y
n="bendValues["+l+"].mat"
k=o.h(0,n)
if(k==null)H.l(P.k(c3+n+c4))
p.push(r.a(k))}}r=c6.a
if(r.a)c1.r2=t.r.a(c1.y.H(0,"emissionClr"))
if(r.b)c1.rx=t.c.a(c1.y.H(0,"emissionTxt"))
r=c6.b
if(r.a)c1.x1=t.r.a(c1.y.H(0,"ambientClr"))
if(r.b)c1.x2=t.c.a(c1.y.H(0,"ambientTxt"))
r=c6.c
if(r.a)c1.y2=t.r.a(c1.y.H(0,"diffuseClr"))
if(r.b)c1.aV=t.c.a(c1.y.H(0,"diffuseTxt"))
r=c6.d
if(r.a)c1.bC=t.r.a(c1.y.H(0,"invDiffuseClr"))
if(r.b)c1.dU=t.c.a(c1.y.H(0,"invDiffuseTxt"))
r=c6.e
q=r.a
if(q||r.b||!1){c1.dX=t.n.a(c1.y.H(0,"shininess"))
if(q)c1.dV=t.r.a(c1.y.H(0,"specularClr"))
if(r.b)c1.dW=t.c.a(c1.y.H(0,"specularTxt"))}if(c6.f.b)c1.dY=t.c.a(c1.y.H(0,"bumpTxt"))
if(c6.db){c1.dZ=t.Q.a(c1.y.H(0,"envSampler"))
r=c6.r
if(r.a)c1.e_=t.r.a(c1.y.H(0,"reflectClr"))
if(r.b)c1.e0=t.c.a(c1.y.H(0,"reflectTxt"))
r=c6.x
q=r.a
if(q||r.b||!1){c1.e1=t.n.a(c1.y.H(0,"refraction"))
if(q)c1.e2=t.r.a(c1.y.H(0,"refractClr"))
if(r.b)c1.e3=t.c.a(c1.y.H(0,"refractTxt"))}}r=c6.y
if(r.a)c1.e4=t.n.a(c1.y.H(0,"alpha"))
if(r.b)c1.e5=t.c.a(c1.y.H(0,"alphaTxt"))
if(c6.k1){r=c6.z
q=r.length
if(q!==0){c1.cq=new H.x(t.J)
c1.cr=new H.x(t.en)
for(p=t.r,o=t.n,n=t.d6,j=0;j<r.length;r.length===q||(0,H.t)(r),++j){i=r[j]
h=i.a
g="barLight"+H.h(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){e=c1.y
d=g+"s["+l+"].startPnt"
k=e.h(0,d)
if(k==null)H.l(P.k(c3+d+c4))
p.a(k)
e=c1.y
d=g+"s["+l+"].endPnt"
c=e.h(0,d)
if(c==null)H.l(P.k(c3+d+c4))
p.a(c)
e=c1.y
d=g+"s["+l+"].color"
b=e.h(0,d)
if(b==null)H.l(P.k(c3+d+c4))
p.a(b)
if(typeof h!=="number")return h.ak()
if((h&4)!==0){e=c1.y
d=g+"s["+l+"].att0"
a=e.h(0,d)
if(a==null)H.l(P.k(c3+d+c4))
o.a(a)
e=c1.y
d=g+"s["+l+"].att1"
a0=e.h(0,d)
if(a0==null)H.l(P.k(c3+d+c4))
o.a(a0)
e=c1.y
d=g+"s["+l+"].att2"
a1=e.h(0,d)
if(a1==null)H.l(P.k(c3+d+c4))
o.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d1(k,c,b,a4,a3,a2))}c1.cr.j(0,h,f)
m=c1.cq
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.l(P.k(c3+d+c4))
m.j(0,h,k)}}r=c6.Q
q=r.length
if(q!==0){c1.cs=new H.x(t.J)
c1.ct=new H.x(t.af)
for(p=t.r,o=t.c,n=t.dv,j=0;j<r.length;r.length===q||(0,H.t)(r),++j){i=r[j]
h=i.a
g="dirLight"+H.h(h)
f=H.d([],n)
for(m=i.b,l=0;l<m;++l){if(typeof h!=="number")return h.ak()
e=(h&1)!==0
if(e){d=c1.y
a5=g+"s["+l+"].objUp"
k=d.h(0,a5)
if(k==null)H.l(P.k(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].objRight"
c=d.h(0,a5)
if(c==null)H.l(P.k(c3+a5+c4))
p.a(c)
d=c1.y
a5=g+"s["+l+"].objDir"
b=d.h(0,a5)
if(b==null)H.l(P.k(c3+a5+c4))
p.a(b)
a6=b
a7=c
a8=k}else{a6=c2
a7=a6
a8=a7}d=c1.y
a5=g+"s["+l+"].viewDir"
k=d.h(0,a5)
if(k==null)H.l(P.k(c3+a5+c4))
p.a(k)
d=c1.y
a5=g+"s["+l+"].color"
c=d.h(0,a5)
if(c==null)H.l(P.k(c3+a5+c4))
p.a(c)
if(e){e=c1.y
d=g+"sTexture2D"+l
b=e.h(0,d)
if(b==null)H.l(P.k(c3+d+c4))
o.a(b)
a9=b}else a9=c2
f.push(new A.d2(a8,a7,a6,k,c,a9))}c1.ct.j(0,h,f)
m=c1.cs
e=c1.y
d=g+"Count"
k=e.h(0,d)
if(k==null)H.l(P.k(c3+d+c4))
m.j(0,h,k)}}r=c6.ch
q=r.length
if(q!==0){c1.cu=new H.x(t.J)
c1.cv=new H.x(t.gr)
for(p=t.r,o=t.O,n=t.Q,m=t.y,e=t.n,d=t.by,j=0;j<r.length;r.length===q||(0,H.t)(r),++j){i=r[j]
h=i.a
g="pointLight"+H.h(h)
f=H.d([],d)
for(a5=i.b,l=0;l<a5;++l){b0=c1.y
b1=g+"s["+l+"].point"
k=b0.h(0,b1)
if(k==null)H.l(P.k(c3+b1+c4))
p.a(k)
b0=c1.y
b1=g+"s["+l+"].viewPnt"
c=b0.h(0,b1)
if(c==null)H.l(P.k(c3+b1+c4))
p.a(c)
b0=c1.y
b1=g+"s["+l+"].color"
b=b0.h(0,b1)
if(b==null)H.l(P.k(c3+b1+c4))
p.a(b)
if(typeof h!=="number")return h.ak()
if((h&3)!==0){b0=c1.y
b1=g+"s["+l+"].invViewRotMat"
a=b0.h(0,b1)
if(a==null)H.l(P.k(c3+b1+c4))
o.a(a)
b2=a}else b2=c2
if((h&1)!==0){b0=c1.y
b1=g+"sTextureCube"+l
a=b0.h(0,b1)
if(a==null)H.l(P.k(c3+b1+c4))
n.a(a)
a9=a}else a9=c2
if((h&2)!==0){b0=c1.y
b1=g+"sShadowCube"+l
a=b0.h(0,b1)
if(a==null)H.l(P.k(c3+b1+c4))
n.a(a)
b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.l(P.k(c3+b1+c4))
m.a(a0)
b3=a
b4=a0}else{b3=c2
b4=b3}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a=b0.h(0,b1)
if(a==null)H.l(P.k(c3+b1+c4))
e.a(a)
b0=c1.y
b1=g+"s["+l+"].att1"
a0=b0.h(0,b1)
if(a0==null)H.l(P.k(c3+b1+c4))
e.a(a0)
b0=c1.y
b1=g+"s["+l+"].att2"
a1=b0.h(0,b1)
if(a1==null)H.l(P.k(c3+b1+c4))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c2
a3=a2
a4=a3}f.push(new A.d4(k,c,b2,b,a9,b3,b4,a4,a3,a2))}c1.cv.j(0,h,f)
a5=c1.cu
b0=c1.y
b1=g+"Count"
k=b0.h(0,b1)
if(k==null)H.l(P.k(c3+b1+c4))
a5.j(0,h,k)}}r=c6.cx
q=r.length
if(q!==0){c1.cw=new H.x(t.J)
c1.cz=new H.x(t.gb)
for(p=t.r,o=t.n,n=t.y,m=t.c,e=t.fF,j=0;j<r.length;r.length===q||(0,H.t)(r),++j){i=r[j]
h=i.a
g="spotLight"+H.h(h)
f=H.d([],e)
for(d=i.b,l=0;l<d;++l){a5=c1.y
b0=g+"s["+l+"].objPnt"
k=a5.h(0,b0)
if(k==null)H.l(P.k(c3+b0+c4))
p.a(k)
a5=c1.y
b0=g+"s["+l+"].objDir"
c=a5.h(0,b0)
if(c==null)H.l(P.k(c3+b0+c4))
p.a(c)
a5=c1.y
b0=g+"s["+l+"].viewPnt"
b=a5.h(0,b0)
if(b==null)H.l(P.k(c3+b0+c4))
p.a(b)
a5=c1.y
b0=g+"s["+l+"].color"
a=a5.h(0,b0)
if(a==null)H.l(P.k(c3+b0+c4))
p.a(a)
if(typeof h!=="number")return h.ak()
if((h&3)!==0){a5=c1.y
b0=g+"s["+l+"].objUp"
a0=a5.h(0,b0)
if(a0==null)H.l(P.k(c3+b0+c4))
p.a(a0)
a5=c1.y
b0=g+"s["+l+"].objRight"
a1=a5.h(0,b0)
if(a1==null)H.l(P.k(c3+b0+c4))
p.a(a1)
a5=c1.y
b0=g+"s["+l+"].tuScalar"
b5=a5.h(0,b0)
if(b5==null)H.l(P.k(c3+b0+c4))
o.a(b5)
a5=c1.y
b0=g+"s["+l+"].tvScalar"
b6=a5.h(0,b0)
if(b6==null)H.l(P.k(c3+b0+c4))
o.a(b6)
b7=b6
b8=b5
a7=a1
a8=a0}else{b7=c2
b8=b7
a7=b8
a8=a7}a5=(h&2)!==0
if(a5){b0=c1.y
b1=g+"s["+l+"].shadowAdj"
a0=b0.h(0,b1)
if(a0==null)H.l(P.k(c3+b1+c4))
n.a(a0)
b4=a0}else b4=c2
if((h&8)!==0){b0=c1.y
b1=g+"s["+l+"].cutoff"
a0=b0.h(0,b1)
if(a0==null)H.l(P.k(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].coneAngle"
a1=b0.h(0,b1)
if(a1==null)H.l(P.k(c3+b1+c4))
o.a(a1)
b9=a1
c0=a0}else{b9=c2
c0=b9}if((h&4)!==0){b0=c1.y
b1=g+"s["+l+"].att0"
a0=b0.h(0,b1)
if(a0==null)H.l(P.k(c3+b1+c4))
o.a(a0)
b0=c1.y
b1=g+"s["+l+"].att1"
a1=b0.h(0,b1)
if(a1==null)H.l(P.k(c3+b1+c4))
o.a(a1)
b0=c1.y
b1=g+"s["+l+"].att2"
b5=b0.h(0,b1)
if(b5==null)H.l(P.k(c3+b1+c4))
o.a(b5)
a2=b5
a3=a1
a4=a0}else{a2=c2
a3=a2
a4=a3}if((h&1)!==0){b0=c1.y
b1=g+"sTexture2D"+l
a0=b0.h(0,b1)
if(a0==null)H.l(P.k(c3+b1+c4))
m.a(a0)
a9=a0}else a9=c2
if(a5){a5=c1.y
b0=g+"sShadow2D"+l
a0=a5.h(0,b0)
if(a0==null)H.l(P.k(c3+b0+c4))
m.a(a0)
b3=a0}else b3=c2
f.push(new A.d5(k,c,b,a,a8,a7,b8,b7,b4,c0,b9,a4,a3,a2,a9,b3))}c1.cz.j(0,h,f)
d=c1.cw
a5=c1.y
b0=g+"Count"
k=a5.h(0,b0)
if(k==null)H.l(P.k(c3+b0+c4))
d.j(0,h,k)}}}},
at:function(a,b){if(b!=null&&b.d)a.eM(b)},
hP:function(a,b){}}
A.dS.prototype={
i:function(a){return"barLight"+H.h(this.a)}}
A.e3.prototype={
i:function(a){return"dirLight"+H.h(this.a)}}
A.eK.prototype={
i:function(a){return"pointLight"+H.h(this.a)}}
A.eX.prototype={
i:function(a){return"spotLight"+H.h(this.a)}}
A.iX.prototype={
i:function(a){return this.b9}}
A.d1.prototype={}
A.d2.prototype={}
A.d4.prototype={}
A.d5.prototype={}
A.cc.prototype={
cX:function(a,b){var s=this
s.y=s.x=s.r=s.f=s.e=s.d=s.c=null},
eb:function(a,b,c){var s,r,q,p=this
p.c=b
p.d=c
p.e=p.df(b,35633)
p.f=p.df(p.d,35632)
s=p.a
r=s.createProgram()
p.r=r
s.attachShader(r,p.e)
s.attachShader(p.r,p.f)
s.linkProgram(p.r)
if(!s.getProgramParameter(p.r,35714)){q=s.getProgramInfoLog(p.r)
s.deleteProgram(p.r)
H.l(P.k("Failed to link shader: "+H.h(q)))}p.hQ()
p.hS()},
aE:function(a){a.a.useProgram(this.r)
this.x.iD()},
df:function(a,b){var s,r=this.a,q=r.createShader(b)
r.shaderSource(q,a)
r.compileShader(q)
if(!r.getShaderParameter(q,35713)){s=r.getShaderInfoLog(q)
r.deleteShader(q)
throw H.c(P.k("Error compiling shader '"+H.h(q)+"': "+H.h(s)))}return q},
hQ:function(){var s,r,q,p=this,o=H.d([],t.x),n=p.a,m=n.getProgramParameter(p.r,35721)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveAttrib(p.r,s)
q=n.getAttribLocation(p.r,r.name)
o.push(new A.dO(n,r.name,q))}p.x=new A.hN(o)},
hS:function(){var s,r,q,p=this,o=H.d([],t.fj),n=p.a,m=n.getProgramParameter(p.r,35718)
if(typeof m!=="number")return H.f(m)
s=0
for(;s<m;++s){r=n.getActiveUniform(p.r,s)
q=n.getUniformLocation(p.r,r.name)
o.push(p.iu(r.type,r.size,r.name,q))}p.y=new A.jM(o)},
aM:function(a,b,c){var s=this.a
if(a===1)return new A.ff(s,b,c)
else return A.m3(s,this.r,b,a,c)},
fl:function(a,b,c){var s=this.a
if(a===1)return new A.fj(s,b,c)
else return A.m3(s,this.r,b,a,c)},
fm:function(a,b,c){var s=this.a
if(a===1)return new A.fk(s,b,c)
else return A.m3(s,this.r,b,a,c)},
bx:function(a,b){return new P.fM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
iu:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aM(b,c,d)
case 5121:return s.aM(b,c,d)
case 5122:return s.aM(b,c,d)
case 5123:return s.aM(b,c,d)
case 5124:return s.aM(b,c,d)
case 5125:return s.aM(b,c,d)
case 5126:return new A.fe(s.a,c,d)
case 35664:return new A.jI(s.a,c,d)
case 35665:return new A.fg(s.a,c,d)
case 35666:return new A.fh(s.a,c,d)
case 35667:return new A.jJ(s.a,c,d)
case 35668:return new A.jK(s.a,c,d)
case 35669:return new A.jL(s.a,c,d)
case 35674:return new A.jN(s.a,c,d)
case 35675:return new A.fi(s.a,c,d)
case 35676:return new A.d3(s.a,c,d)
case 35678:return s.fl(b,c,d)
case 35680:return s.fm(b,c,d)
case 35670:throw H.c(s.bx("BOOL",c))
case 35671:throw H.c(s.bx("BOOL_VEC2",c))
case 35672:throw H.c(s.bx("BOOL_VEC3",c))
case 35673:throw H.c(s.bx("BOOL_VEC4",c))
default:throw H.c(P.k("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.fd.prototype={}
A.jM.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
H:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.k("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.O()},
O:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.t)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.ff.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.jJ.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.jK.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.jL.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.jH.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)}}
A.fe.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.jI.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.fh.prototype={
bk:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.jN.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.fi.prototype={
ac:function(a){var s=new Float32Array(H.cl(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.d3.prototype={
ac:function(a){var s=new Float32Array(H.cl(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.fj.prototype={
eM:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.fk.prototype={
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.cD.prototype={
f7:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.R()
if(n!=null)q=q.n(0,n)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eg())return p
return q.Y()},
fd:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.p(0,n)
q=new V.Q(o.a,o.b,o.c).Y()
o=r.p(0,n)
return q.aF(new V.Q(o.a,o.b,o.c).Y()).Y()},
cl:function(){var s,r=this
if(r.d!=null)return!0
s=r.f7()
if(s==null){s=r.fd()
if(s==null)return!1}r.d=s
r.a.a.Z()
return!0},
f6:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.R()
if(n!=null)q=q.n(0,n)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.eg())return p
return q.Y()},
fc:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
i=q.b
if(typeof j!=="number")return j.p()
if(typeof i!=="number")return H.f(i)
p=j-i
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.p(0,e)
o=new V.Q(j.a,j.b,j.c).Y()
j=q.a
r=r.a
if(typeof j!=="number")return j.p()
if(typeof r!=="number")return H.f(r)
if(j-r<0)o=o.J(0)}else{i=s.b
if(typeof i!=="number")return H.f(i)
n=(j-i)/p
i=b.p(0,e)
j=i.a
if(typeof j!=="number")return j.l()
g=i.b
if(typeof g!=="number")return g.l()
i=i.c
if(typeof i!=="number")return i.l()
i=new V.ac(j*n,g*n,i*n).n(0,e).p(0,h)
o=new V.Q(i.a,i.b,i.c).Y()
q=q.a
r=r.a
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.f(r)
s=s.a
if(typeof s!=="number")return H.f(s)
if((q-r)*n+r-s<0)o=o.J(0)}j=l.d
if(j!=null){m=j.Y()
o=m.aF(o).Y().aF(m).Y()}return o},
ck:function(){var s,r=this
if(r.e!=null)return!0
s=r.f6()
if(s==null){s=r.fc()
if(s==null)return!1}r.e=s
r.a.a.Z()
return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var s,r=this,q=r.a
if(q==null||r.b==null||r.c==null)return a+"disposed"
s=a+C.a.aq(J.aj(q.e),0)+", "+C.a.aq(J.aj(r.b.e),0)+", "+C.a.aq(J.aj(r.c.e),0)+" {"
q=r.d
s=q!=null?s+(q.i(0)+", "):s+"-, "
q=r.e
return q!=null?s+(q.i(0)+"}"):s+"-}"},
O:function(){return this.E("")}}
F.cK.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var s=this.a
if(s==null||this.b==null)return a+"disposed"
return a+C.a.aq(J.aj(s.e),0)+", "+C.a.aq(J.aj(this.b.e),0)},
O:function(){return this.E("")}}
F.eH.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
return a+C.a.aq(J.aj(s.e),0)},
O:function(){return this.E("")}}
F.aB.prototype={
gB:function(){var s=this.e
return s==null?this.e=D.M():s},
aS:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aS()||!1
if(!r.a.aS())s=!1
q=r.e
if(q!=null)q.b_(0)
return s},
aR:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.d.aR()||!1
if(!r.a.aR())s=!1
q=r.e
if(q!=null)q.b_(0)
return s},
bA:function(){var s=this.e
if(s!=null)++s.d
this.a.bA()
s=this.e
if(s!=null)s.b_(0)
return!0},
b8:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a.c,f=g.length
if(f<=0){g=$.n3
return g==null?$.n3=V.n1(0,0,0,0,0,0):g}s=g[0].f
r=V.n1(s.a,s.b,s.c,0,0,0)
for(q=f-1;q>=1;--q){s=g[q].f
p=s.a
o=s.b
s=s.c
n=r.d
m=r.a
if(typeof p!=="number")return p.N()
if(typeof m!=="number")return H.f(m)
if(p<m){n+=m-p
l=p}else{if(p>m+n)n=p-m
l=m}k=r.e
p=r.b
if(typeof o!=="number")return o.N()
if(typeof p!=="number")return H.f(p)
if(o<p){k+=p-o
j=o}else{if(o>p+k)k=o-p
j=p}i=r.f
p=r.c
if(typeof s!=="number")return s.N()
if(typeof p!=="number")return H.f(p)
if(s<p){i+=p-s
h=s}else{if(s>p+i)i=s-p
h=p}r=new V.cb(l,j,h,n,k,i)}return r},
bz:function(a){var s,r,q
for(s=this.a.c.length-1;s>=0;--s){r=this.a.c
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.f
if(r!=null){r=a.b1(r)
if(!J.G(q.f,r)){q.f=r
r=q.a
if(r!=null){r=r.e
if(r!=null)r.G(null)}}}r=q.r
if(r!=null)q.sbc(a.cN(r))
r=q.x
if(r!=null)q.sV(a.cN(r))}},
dL:function(a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=34962,a4=a2.a.c.length
a6.toString
s=a6.a
r=(s&$.aR().a)!==0?1:0
if((s&$.aQ().a)!==0)++r
if((s&$.aP().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bQ().a)!==0)++r
if((s&$.bP().a)!==0)++r
if((s&$.dH().a)!==0)++r
if((s&$.ct().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a6.gcT(a6)
p=q*4
s=new Array(a4*q)
s.fixed$length=Array
o=H.d(s,t.m)
s=new Array(r)
s.fixed$length=Array
n=H.d(s,t.g0)
for(s=o.length,m=n.length,l=0,k=0;k<r;++k){j=a6.im(k)
i=j.gcT(j)
if(k>=m)return H.b(n,k)
n[k]=new Z.dT(j,i,l*4,p)
for(h=0;h<a4;++h){g=a2.a.c
if(h>=g.length)return H.b(g,h)
f=g[h].iU(j)
e=l+h*q
for(g=f.length,d=0;d<g;++d){c=f[d]
if(e<0||e>=s)return H.b(o,e)
o[e]=c;++e}}l+=i}s=a5.a
b=s.createBuffer()
s.bindBuffer(a3,b)
s.bufferData(a3,new Float32Array(H.cl(o)),35044)
s.bindBuffer(a3,null)
a=new Z.bT(new Z.fu(a3,b),n,a6)
a.b=H.d([],t.aZ)
if(a2.b.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.b.b,k<m.length;++k){m=m[k].a
m.a.a.M()
a0.push(m.e)}a1=Z.m4(s,34963,a0)
a.b.push(new Z.bZ(0,a0.length,a1))}if(a2.c.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.c.b,k<m.length;++k){m=m[k].a
m.a.a.M()
a0.push(m.e)
m=a2.c.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.M()
a0.push(m.e)}a1=Z.m4(s,34963,a0)
a.b.push(new Z.bZ(1,a0.length,a1))}if(a2.d.b.length!==0){a0=H.d([],t.V)
for(k=0;m=a2.d.b,k<m.length;++k){m=m[k].a
m.a.a.M()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].b
m.a.a.M()
a0.push(m.e)
m=a2.d.b
if(k>=m.length)return H.b(m,k)
m=m[k].c
m.a.a.M()
a0.push(m.e)}a1=Z.m4(s,34963,a0)
a.b.push(new Z.bZ(4,a0.length,a1))}return a},
i:function(a){var s=this,r="   ",q=H.d([],t.i)
if(s.a.c.length!==0){q.push("Vertices:")
q.push(s.a.E(r))}if(s.b.b.length!==0){q.push("Points:")
q.push(s.b.E(r))}if(s.c.b.length!==0){q.push("Lines:")
q.push(s.c.E(r))}if(s.d.b.length!==0){q.push("Faces:")
q.push(s.d.E(r))}return C.b.v(q,"\n")},
Z:function(){var s=this.e
if(s!=null)s.G(null)}}
F.jm.prototype={
a9:function(a,b,c,d){var s,r=this.a
r.a.m(0,b)
r.a.m(0,c)
r.a.m(0,d)
s=new F.cD()
r=b.a
if(r==null)H.l(P.k(u.p))
if(r!=c.a||r!=d.a)H.l(P.k(u.R))
s.a=b
b.d.b.push(s)
s.b=c
c.d.c.push(s)
s.c=d
d.d.d.push(s)
s.a.a.d.b.push(s)
s.a.a.Z()
return s},
ij:function(a){var s,r,q,p,o,n=H.d([],t.b),m=a.length
if(m>0){s=a[0]
for(r=this.a,q=2;q<m;++q){p=q-1
o=a.length
if(p>=o)return H.b(a,p)
p=a[p]
if(q>=o)return H.b(a,q)
o=a[q]
r.a.m(0,s)
r.a.m(0,p)
r.a.m(0,o)
n.push(F.oK(s,p,o))}}return n},
gk:function(a){return this.b.length},
aS:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.t)(s),++p)if(!s[p].cl())q=!1
return q},
aR:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.t)(s),++p)if(!s[p].ck())q=!1
return q},
i:function(a){return this.O()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(a))
return C.b.v(p,"\n")},
O:function(){return this.E("")}}
F.jn.prototype={
t:function(a,b,c){var s,r=this.a
r.a.m(0,b)
r.a.m(0,c)
r=new F.cK()
if(b==null)H.l(P.k(u.e))
if(c==null)H.l(P.k(u.k))
s=b.a
if(s==null)H.l(P.k(u.E))
if(s!=c.a)H.l(P.k(u.T))
r.a=b
b.c.b.push(r)
r.b=c
c.c.c.push(r)
r.a.a.c.b.push(r)
r.a.a.Z()
return r},
ik:function(a){var s,r,q,p,o=H.d([],t.B),n=a.length
for(s=this.a,r=1;r<n;r+=2){q=r-1
p=a.length
if(q>=p)return H.b(a,q)
q=a[q]
if(r>=p)return H.b(a,r)
p=a[r]
s.a.m(0,q)
s.a.m(0,p)
o.push(F.oT(q,p))}return o},
gk:function(a){return this.b.length},
i:function(a){return this.O()},
E:function(a){var s,r,q=H.d([],t.i),p=this.b.length
for(s=0;s<p;++s){r=this.b
if(s>=r.length)return H.b(r,s)
q.push(r[s].E(a+(""+s+". ")))}return C.b.v(q,"\n")},
O:function(){return this.E("")}}
F.jo.prototype={
il:function(a){var s,r,q,p=H.d([],t.k),o=a.length
for(s=this.a,r=0;r<o;++r){if(r>=a.length)return H.b(a,r)
q=a[r]
s.a.m(0,q)
p.push(F.lZ(q))}return p},
gk:function(a){return this.b.length},
i:function(a){return this.O()},
E:function(a){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(a))
return C.b.v(p,"\n")},
O:function(){return this.E("")}}
F.fs.prototype={
a0:function(){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.cf(s.cx,p,m,r,q,o,n,null,l)},
sab:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Z()}},
sbc:function(a){var s
a=a==null?null:a.Y()
if(!J.G(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Z()}},
sV:function(a){var s
a=a==null?null:a.Y()
if(!J.G(this.x,a)){this.x=a
s=this.a
if(s!=null)s.Z()}},
sW:function(a,b){var s
if(!J.G(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.Z()}},
iU:function(a){var s,r,q=this
if(a.w(0,$.aR())){s=q.f
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.w(0,$.aQ())){s=q.r
r=t.m
if(s==null)return H.d([0,1,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.w(0,$.aP())){s=q.x
r=t.m
if(s==null)return H.d([0,0,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.w(0,$.bt())){s=q.y
r=t.m
if(s==null)return H.d([0,0],r)
else return H.d([s.a,s.b],r)}else if(a.w(0,$.bQ())){s=q.z
r=t.m
if(s==null)return H.d([0,0,0],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.w(0,$.bP())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1],r)
else return H.d([s.a,s.b,s.c],r)}else if(a.w(0,$.dH())){s=q.Q
r=t.m
if(s==null)return H.d([1,1,1,1],r)
else return H.d([s.a,s.b,s.c,s.d],r)}else if(a.w(0,$.ct()))return H.d([q.ch],t.m)
else if(a.w(0,$.bs())){s=H.d([-1,-1,-1,-1],t.m)
return s}else return H.d([],t.m)},
cl:function(){var s,r=this,q={}
if(r.r!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.R()
r.d.q(0,new F.k6(q))
r.r=q.a.Y()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.b_(0)}return!0},
ck:function(){var s,r=this,q={}
if(r.x!=null)return!0
s=r.a
if(s!=null){s=s.e
if(s!=null)++s.d}q.a=V.R()
r.d.q(0,new F.k5(q))
r.x=q.a.Y()
q=r.a
if(q!=null){q.Z()
q=r.a.e
if(q!=null)q.b_(0)}return!0},
e6:function(a){var s,r,q,p=this.c.b.length
for(s=0;s<p;++s){r=this.c.b
if(s>=r.length)return H.b(r,s)
q=r[s]
r=q.b
r.a.a.M()
r=r.e
a.a.a.M()
if(r==a.e)return q}return null},
iI:function(a){var s=this.e6(a)
if(s!=null)return s
return a.e6(this)},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var s,r,q=this,p="-",o=H.d([],t.i)
o.push(C.a.aq(J.aj(q.e),0))
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
o.push(V.H(q.ch,3,0))
o.push(p)
r=C.b.v(o,", ")
return a+"{"+r+"}"},
O:function(){return this.E("")}}
F.k6.prototype={
$1:function(a){var s,r=a==null?null:a.d
if(r!=null){s=this.a
s.a=s.a.n(0,r)}}}
F.k5.prototype={
$1:function(a){var s,r=a==null?null:a.e
if(r!=null){s=this.a
s.a=s.a.n(0,r)}}}
F.k_.prototype={
M:function(){},
m:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.k("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Z()
return!0},
ci:function(a,b,c){var s=null,r=F.cf(s,s,s,new V.ac(a,b,c),s,s,s,s,0)
this.m(0,r)
return r},
gk:function(a){return this.c.length},
aS:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)s[q].cl()
return!0},
aR:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)s[q].ck()
return!0},
bA:function(){var s,r,q,p,o
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
if(p.z==null){o=p.r.Y()
if(!J.G(p.z,o)){p.z=o
o=p.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}}return!0},
i:function(a){return this.O()},
E:function(a){var s,r,q,p
this.M()
s=H.d([],t.i)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.t)(r),++p)s.push(r[p].E(a))
return C.b.v(s,"\n")},
O:function(){return this.E("")}}
F.k0.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
q:function(a,b){var s=this
C.b.q(s.b,b)
C.b.q(s.c,new F.k1(s,b))
C.b.q(s.d,new F.k2(s,b))},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(""))
return C.b.v(p,"\n")}}
F.k1.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.k2.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)}}
F.k3.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(""))
return C.b.v(p,"\n")}}
F.k4.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.O()},
O:function(){var s,r,q,p=H.d([],t.i)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q)p.push(s[q].E(""))
return C.b.v(p,"\n")}}
O.eb.prototype={
gB:function(){var s=this.rx
return s==null?this.rx=D.M():s},
C:function(a){var s=this.rx
if(s!=null)s.G(a)},
sag:function(a){var s=this.r2
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.r2=a
s=new D.w("vectorScale",s,a)
s.b=!0
this.C(s)}},
as:function(a,b){},
ey:function(a,b){var s,r,q,p,o,n,m=this,l="Inspection",k=2929
if(m.a==null){s=a.fr.h(0,l)
if(s==null){r=a.a
s=new A.ec(r,l)
s.cX(r,l)
s.eb(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
s.z=s.x.h(0,"posAttr")
s.Q=s.x.h(0,"normAttr")
s.ch=s.x.h(0,"clrAttr")
s.cx=s.x.h(0,"binmAttr")
s.cy=t.r.a(s.y.h(0,"lightVec"))
r=t.y
s.db=r.a(s.y.h(0,"ambientClr"))
s.dx=r.a(s.y.h(0,"diffuseClr"))
s.dy=t.n.a(s.y.h(0,"weightScalar"))
r=t.q
s.fr=r.a(s.y.h(0,"viewMat"))
s.fx=r.a(s.y.h(0,"viewObjMatrix"))
s.fy=r.a(s.y.h(0,"projViewObjMatrix"))
a.dF(s)}m.a=s}if(b.e==null){b.d.aS()
b.d.aR()
b.d.bA()
r=new Z.dU()
r.a=new H.x(t.f5)
b.e=r}r=m.a
r.aE(a)
q=m.r2
p=r.dy
p.a.uniform1f(p.d,q)
q=m.b
p=r.cy
p.toString
o=q.a
n=q.b
q=q.c
p.a.uniform3f(p.d,o,n,q)
q=a.db
q=q.ga3(q)
n=r.fr
n.toString
n.ac(q.a7(0,!0))
q=a.geI()
n=r.fx
n.toString
n.ac(q.a7(0,!0))
q=a.geu()
r=r.fy
r.toString
r.ac(q.a7(0,!0))
r=b.e
if(r instanceof Z.dU){q=a.a
q.blendFunc(1,1)
if(b.c==null){q.disable(k)
q.enable(3042)
q.blendFunc(1,1)
if(m.k3)m.dq(a,r,b.d,"Axis",m.gd6(),m.z,m.y)
if(m.k4)m.dq(a,r,b.d,"AABB",m.gd2(),m.z,m.y)
q.enable(k)
q.blendFunc(770,771)}else{q.enable(k)
q.enable(3042)
q.blendFunc(770,771)
if(m.Q)m.a2(a,r,b.c,"shapeFill",m.ghT(),m.d,m.c)
if(m.id)m.a2(a,r,b.c,"colorFill",m.gff(),m.x,m.r)
if(m.k1)m.a2(a,r,b.c,"txt2DColor",m.gi4(),m.x,m.r)
if(m.k2)m.a2(a,r,b.c,"weight",m.gia(),m.x,m.r)
q.disable(k)
q.blendFunc(1,1)
if(m.cx)m.a2(a,r,b.c,"vertices",m.gi8(),m.f,m.e)
if(m.fr)m.a2(a,r,b.c,"faceCenters",m.gft(),m.f,m.e)
if(m.ch)m.a2(a,r,b.c,"wireFrame",m.gic(),m.f,m.e)
if(m.cy)m.a2(a,r,b.c,"normals",m.gfJ(),m.f,m.e)
if(m.db)m.a2(a,r,b.c,"binormals",m.gfa(),m.f,m.e)
if(m.dx)m.a2(a,r,b.c,"tangentals",m.ghW(),m.f,m.e)
if(m.dy)m.a2(a,r,b.c,"textureCube",m.gi6(),m.f,m.e)
if(m.fx)m.a2(a,r,b.c,"faceNormals",m.gfv(),m.f,m.e)
if(m.fy)m.a2(a,r,b.c,"faceBinormals",m.gfq(),m.x,m.r)
if(m.go)m.a2(a,r,b.c,"faceTangentals",m.gfz(),m.x,m.r)
if(m.k3)m.a2(a,r,b.c,"Axis",m.gd6(),m.z,m.y)
if(m.k4)m.a2(a,r,b.c,"AABB",m.gd2(),m.z,m.y)
q.enable(k)
q.blendFunc(770,771)}}else b.e=null
r=m.a
r.toString
a.a.useProgram(null)
r.x.dR()},
a2:function(a,b,c,d,e,f,g){var s,r=b.a.h(0,d)
if(r==null){r=this.d7(a,e.$1(c))
b.a.j(0,d,r)}s=this.a
s.db.bk(f)
s.dx.bk(g)
r.eq(a)},
dq:function(a,b,c,d,e,f,g){var s,r=b.a.h(0,d)
if(r==null){r=this.d7(a,e.$1(c))
b.a.j(0,d,r)}s=this.a
s.db.bk(f)
s.dx.bk(g)
r.eq(a)},
d7:function(a,b){var s=this,r=$.aR(),q=$.aQ(),p=b.dL(new Z.fv(a.a),new Z.b4(r.a|q.a|$.aP().a|$.bP().a))
p.an($.aR()).e=s.a.z.c
p.an($.aQ()).e=s.a.Q.c
p.an($.bP()).e=s.a.ch.c
p.an($.aP()).e=s.a.cx.c
return p},
hU:function(a){var s=F.ad()
C.b.q(a.a.c,new O.iw(s,new V.L(1,1,1,1)))
C.b.q(a.d.b,new O.ix(s))
return s},
dD:function(a,b){var s,r={}
r.a=b
s=F.ad()
r.a=new V.L(0,0.7,1,1)
C.b.q(a.a.c,new O.iH(r,s))
r=new O.iG(s)
C.b.q(a.c.b,new O.iI(s,r))
C.b.q(a.d.b,new O.iJ(s,r))
return s},
ie:function(a){return this.dD(a,null)},
i9:function(a){var s=F.ad()
C.b.q(a.a.c,new O.iC(new V.L(1,1,1,1),s))
return s},
fK:function(a){var s=F.ad()
C.b.q(a.a.c,new O.iv(new V.L(1,1,0.3,1),s))
return s},
fb:function(a){var s=F.ad()
C.b.q(a.a.c,new O.io(new V.L(1,0.3,0.3,1),s))
return s},
hX:function(a){var s=F.ad()
C.b.q(a.a.c,new O.iy(new V.L(1,0.3,1,1),s))
return s},
i7:function(a){var s=F.ad()
C.b.q(a.a.c,new O.iB(new V.L(1,0.3,0.3,1),s))
return s},
fu:function(a){var s=F.ad()
C.b.q(a.d.b,new O.is(new V.L(1,1,0.3,1),s))
return s},
fw:function(a){var s=F.ad()
C.b.q(a.d.b,new O.it(new V.L(1,1,0.3,1),s))
return s},
fs:function(a){var s=F.ad()
C.b.q(a.d.b,new O.ir(new V.L(1,0.3,0.3,1),s))
return s},
fA:function(a){var s=F.ad()
C.b.q(a.d.b,new O.iu(new V.L(1,0.3,1,1),s))
return s},
fg:function(a){var s=F.ad()
C.b.q(a.a.c,new O.ip(s))
C.b.q(a.d.b,new O.iq(s))
return s},
i5:function(a){var s=F.ad()
C.b.q(a.a.c,new O.iz(s))
C.b.q(a.d.b,new O.iA(s))
return s},
ib:function(a){var s,r,q={},p=F.ad(),o=a.a.c
if(o.length<1)return p
q.a=q.b=o[0].ch
C.b.q(o,new O.iD(q))
o=q.a
s=q.b
if(typeof o!=="number")return o.p()
if(typeof s!=="number")return H.f(s)
r=o-s
q.c=r
if(r<=0)q.c=1
C.b.q(a.a.c,new O.iE(q,p))
C.b.q(a.d.b,new O.iF(p))
return p},
f8:function(a){return this.f9(a)},
f9:function(a){var s=F.ad(),r=new O.im(s)
r.$3(1,0,0)
r.$3(0,1,0)
r.$3(0,0,1)
return s},
f1:function(a){return this.f2(a)},
f2:function(a){var s,r,q,p,o,n,m,l,k,j=a.b8(),i=F.ad(),h=new O.il(i),g=j.a,f=j.b,e=j.c,d=h.$3(g,f,e),c=j.d
if(typeof g!=="number")return g.n()
c=g+c
s=h.$3(c,f,e)
r=j.e
if(typeof f!=="number")return f.n()
r=f+r
q=h.$3(c,r,e)
p=h.$3(g,r,e)
o=j.f
if(typeof e!=="number")return e.n()
o=e+o
n=h.$3(g,f,o)
m=h.$3(c,f,o)
l=h.$3(c,r,o)
k=h.$3(g,r,o)
i.c.t(0,d,s)
i.c.t(0,s,q)
i.c.t(0,q,p)
i.c.t(0,p,d)
i.c.t(0,n,m)
i.c.t(0,m,l)
i.c.t(0,l,k)
i.c.t(0,k,n)
i.c.t(0,d,n)
i.c.t(0,s,m)
i.c.t(0,q,l)
i.c.t(0,p,k)
return i}}
O.iw.prototype={
$1:function(a){var s=this.a.a,r=a.a0()
r.sW(0,this.b)
r.sV(V.R())
s.m(0,r)}}
O.ix.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.M()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a9(0,s,r,q)}}
O.iH.prototype={
$1:function(a){var s=this.b.a,r=a.a0()
r.sW(0,this.a.a)
r.sV(V.R())
s.m(0,r)}}
O.iG.prototype={
$2:function(a,b){if(a.iI(b)==null)this.a.c.t(0,a,b)}}
O.iI.prototype={
$1:function(a){var s,r=this.a,q=r.a,p=a.a
p.a.a.M()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r=r.a
p=a.b
p.a.a.M()
p=p.e
r=r.c
if(p>>>0!==p||p>=r.length)return H.b(r,p)
this.b.$2(s,r[p])}}
O.iJ.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.M()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
p=p.a
o=a.c
o.a.a.M()
o=o.e
p=p.c
if(o>>>0!==o||o>=p.length)return H.b(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)}}
O.iC.prototype={
$1:function(a){var s,r=a.a0()
r.sW(0,this.a)
r.sV(V.R())
s=this.b
s.a.m(0,r)
s.b.a.a.m(0,r)
F.lZ(r)}}
O.iv.prototype={
$1:function(a){var s,r,q=a.a0()
q.sW(0,this.a)
q.sV(V.R())
s=q.a0()
s.sV(q.r)
r=this.b
r.a.m(0,q)
r.a.m(0,s)
r.c.t(0,q,s)}}
O.io.prototype={
$1:function(a){var s,r,q=a.a0()
q.sW(0,this.a)
q.sV(V.R())
s=q.a0()
s.sV(a.x)
r=this.b
r.a.m(0,q)
r.a.m(0,s)
r.c.t(0,q,s)}}
O.iy.prototype={
$1:function(a){var s,r,q=a.a0()
q.sW(0,this.a)
q.sV(V.R())
s=q.a0()
s.sV(a.x.aF(a.r).J(0))
r=this.b
r.a.m(0,q)
r.a.m(0,s)
r.c.t(0,q,s)}}
O.iB.prototype={
$1:function(a){var s,r,q=a.a0()
q.sW(0,this.a)
q.sV(V.R())
s=q.a0()
s.sV(a.z)
r=this.b
r.a.m(0,q)
r.a.m(0,s)
r.c.t(0,q,s)}}
O.is.prototype={
$1:function(a){var s=null,r=a.a.f.n(0,a.b.f).n(0,a.c.f).K(0,3),q=a.d,p=F.cf(s,V.R(),this.a,r,q,s,s,s,0)
q=this.b
q.a.m(0,p)
q.b.a.a.m(0,p)
F.lZ(p)}}
O.it.prototype={
$1:function(a){var s=null,r=a.a.f.n(0,a.b.f).n(0,a.c.f).K(0,3),q=a.d,p=F.cf(s,V.R(),this.a,r,q,s,s,s,0),o=p.a0()
o.sV(a.d)
q=this.b
q.a.m(0,p)
q.a.m(0,o)
q.c.t(0,p,o)}}
O.ir.prototype={
$1:function(a){var s=null,r=a.a.f.n(0,a.b.f).n(0,a.c.f).K(0,3),q=a.d,p=F.cf(s,V.R(),this.a,r,q,s,s,s,0),o=p.a0()
o.sV(a.e)
q=this.b
q.a.m(0,p)
q.a.m(0,o)
q.c.t(0,p,o)}}
O.iu.prototype={
$1:function(a){var s=null,r=a.a.f.n(0,a.b.f).n(0,a.c.f).K(0,3),q=a.d,p=F.cf(s,V.R(),this.a,r,q,s,s,s,0),o=p.a0()
o.sV(a.e.aF(a.d).J(0))
q=this.b
q.a.m(0,p)
q.a.m(0,o)
q.c.t(0,p,o)}}
O.ip.prototype={
$1:function(a){var s=this.a.a,r=a.a0()
r.sV(V.R())
s.m(0,r)}}
O.iq.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.M()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a9(0,s,r,q)}}
O.iz.prototype={
$1:function(a){var s,r,q=a.y,p=this.a.a,o=a.a0(),n=q.a,m=q.b
if(typeof n!=="number")return n.N()
if(n<0)n=0
else if(n>1)n=1
if(typeof m!=="number")return m.N()
s=m<0
if(s)r=0
else if(m>1)r=1
else r=m
if(s)m=0
else if(m>1)m=1
o.sW(0,new V.L(n,r,m,1))
o.sV(V.R())
p.m(0,o)}}
O.iA.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.M()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a9(0,s,r,q)}}
O.iD.prototype={
$1:function(a){var s=this.a,r=s.b,q=a.ch
if(typeof r!=="number")return r.a4()
if(typeof q!=="number")return H.f(q)
if(r>q)s.b=q
r=s.a
if(typeof r!=="number")return r.N()
if(r<q)s.a=q}}
O.iE.prototype={
$1:function(a){var s,r=a.ch,q=this.a,p=q.b
if(typeof r!=="number")return r.p()
if(typeof p!=="number")return H.f(p)
s=V.oE((r-p)/q.c*5/6,1,1)
q=this.b.a
p=a.a0()
p.sV(V.R())
p.sW(0,V.oF(s))
q.m(0,p)}}
O.iF.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.a,n=a.a
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
s=o[n]
n=p.a
o=a.b
o.a.a.M()
o=o.e
n=n.c
if(o>>>0!==o||o>=n.length)return H.b(n,o)
r=n[o]
o=p.a
n=a.c
n.a.a.M()
n=n.e
o=o.c
if(n>>>0!==n||n>=o.length)return H.b(o,n)
q=o[n]
p.d.a9(0,s,r,q)}}
O.im.prototype={
$3:function(a,b,c){var s,r,q=a>1?1:a,p=b>1?1:b,o=c>1?1:c,n=new V.L(q,p,o,1)
q=this.a
s=q.a.ci(0,0,0)
s.sV(V.R())
s.sbc(V.nm())
s.sW(0,n)
r=q.a.ci(a,b,c)
r.sV(V.R())
r.sbc(V.nm())
r.sW(0,n)
q.c.t(0,s,r)}}
O.il.prototype={
$3:function(a,b,c){var s=this.a.a.ci(a,b,c)
s.sV(V.R())
s.sbc(new V.Q(a,b,c))
return s}}
O.c2.prototype={
gB:function(){var s=this.fr
return s==null?this.fr=D.M():s},
C:function(a){var s=this.fr
if(s!=null)s.G(a)},
bN:function(){return this.C(null)},
dr:function(a){this.a=null
this.C(a)},
hN:function(){return this.dr(null)},
fQ:function(a,b){var s=new D.bb()
s.b=!0
this.C(s)},
fS:function(a,b){var s=new D.bc()
s.b=!0
this.C(s)},
dd:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=t.a,d=new H.x(e)
for(s=f.dx.e,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
o=p.gai()
n=d.h(0,p.gai())
d.j(0,o,n==null?1:n)}m=H.d([],t.am)
d.q(0,new O.j0(f,m))
C.b.b4(m,new O.j1())
l=new H.x(e)
for(s=f.dx.f,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
o=p.gai()
n=l.h(0,p.gai())
l.j(0,o,n==null?1:n)}k=H.d([],t.ed)
l.q(0,new O.j2(f,k))
C.b.b4(k,new O.j3())
j=new H.x(e)
for(s=f.dx.r,r=s.length,q=0;q<s.length;s.length===r||(0,H.t)(s),++q){p=s[q]
o=p.gai()
n=j.h(0,p.gai())
j.j(0,o,n==null?1:n)}i=H.d([],t.d1)
j.q(0,new O.j4(f,i))
C.b.b4(i,new O.j5())
h=new H.x(e)
for(e=f.dx.x,s=e.length,q=0;q<e.length;e.length===s||(0,H.t)(e),++q){p=e[q]
r=p.gai()
o=h.h(0,p.gai())
h.j(0,r,o==null?1:o)}g=H.d([],t.cA)
h.q(0,new O.j6(f,g))
C.b.b4(g,new O.j7())
e=C.c.a5(f.e.a.length+3,4)
f.dy.toString
return A.oZ(!1,!1,!1,!1,e*4,f.f.c,f.r.c,f.x.c,f.y.c,f.z.c,f.Q.c,f.cx.c,f.cy.c,f.db.c,m,k,i,g)},
am:function(a,b){if(b!=null)if(!C.b.U(a,b)){b.a=a.length
a.push(b)}},
as:function(a,b){var s
for(s=this.dx.a,s=new J.aa(s,s.length);s.A();)C.i.as(s.d,b)},
ey:function(b4,b5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.dd()
s=b4.fr.h(0,b3.b9)
if(s==null){s=A.oY(b3,b4.a)
b4.dF(s)}b3=b2.a=s
b5.e=null}r=b3.z
q=r.bC
b3=b5.e
if(!(b3 instanceof Z.bT))b3=b5.e=null
if(b3==null||!b3.d.w(0,q)){b3=r.k4
if(b3)b5.d.aS()
p=r.r1
if(p)b5.d.aR()
o=r.rx
if(o)b5.d.bA()
n=b5.d.dL(new Z.fv(b4.a),q)
n.an($.aR()).e=b2.a.Q.c
if(b3)n.an($.aQ()).e=b2.a.cx.c
if(p)n.an($.aP()).e=b2.a.ch.c
if(r.r2)n.an($.bt()).e=b2.a.cy.c
if(o)n.an($.bQ()).e=b2.a.db.c
if(r.ry)n.an($.bs()).e=b2.a.dx.c
b5.e=n}m=H.d([],t.bw)
b2.a.aE(b4)
if(r.fr){b3=b2.a
p=b4.dx
p=p.ga3(p)
b3=b3.dy
b3.toString
b3.ac(p.a7(0,!0))}if(r.fx){b3=b2.a
p=b4.geI()
b3=b3.fr
b3.toString
b3.ac(p.a7(0,!0))}b3=b2.a
p=b4.geu()
b3=b3.fy
b3.toString
b3.ac(p.a7(0,!0))
if(r.go){b3=b2.a
p=b4.db
p=p.ga3(p)
b3=b3.fx
b3.toString
b3.ac(p.a7(0,!0))}if(r.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ac(C.i.a7(p,!0))}if(r.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ac(C.i.a7(p,!0))}if(r.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ac(C.i.a7(p,!0))}if(r.aV>0){l=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,l)
for(k=0;k<l;++k){b3=b2.a
p=b2.e.a
if(k>=p.length)return H.b(p,k)
p=p[k]
b3=b3.r1
if(k>=b3.length)return H.b(b3,k)
b3=b3[k]
j=new Float32Array(H.cl(p.a7(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,j)}}b3=r.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.f.d)
b3=b2.a
p=b2.f.d
b3.at(b3.rx,p)}if(r.k1){b3=r.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.r.d)
b3=b2.a
p=b2.r.d
b3.at(b3.x2,p)}b3=r.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.x.d)
b3=b2.a
p=b2.x.d
b3.at(b3.aV,p)}b3=r.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bC
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.y.d)
b3=b2.a
p=b2.y.d
b3.at(b3.dU,p)}b3=r.e
p=b3.a
if(p||b3.b||!1){o=b2.a
i=b2.z.ch
o=o.dX
o.a.uniform1f(o.d,i)}if(p){p=b2.a
o=b2.z.f
p=p.dV
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.z.d)
b3=b2.a
p=b2.z.d
b3.at(b3.dW,p)}b3=r.z
if(b3.length>0){h=new H.x(t.a)
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.t)(p),++g){f=p[g]
e=f.gai()
d=h.h(0,e)
if(d==null)d=0
h.j(0,e,d+1)
c=J.D(b2.a.cr.h(0,e),d)
i=f.gjF()
b=$.b_
i=i.b1(b==null?$.b_=new V.ac(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gjJ()
b=$.b_
i=i.b1(b==null?$.b_=new V.ac(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gW(f)
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
if(f.gdT()){i=f.gdG()
b=c.e
b.a.uniform1f(b.d,i)
i=f.gdH()
b=c.f
b.a.uniform1f(b.d,i)
i=f.gdI()
b=c.r
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.t)(b3),++g){o=b3[g].a
l=h.h(0,o)
if(l==null)l=0
o=b2.a.cq.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.Q
if(b3.length>0){p=b4.db
a=p.ga3(p)
a0=new H.x(t.a)
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.t)(p),++g){f=p[g]
e=f.gai()
d=a0.h(0,e)
if(d==null)d=0
a0.j(0,e,d+1)
c=J.D(b2.a.ct.h(0,e),d)
i=a.cN(f.gdQ(f)).Y()
b=c.e
a1=i.a
a2=i.b
i=i.c
b.a.uniform3f(b.d,a1,a2,i)
i=f.gW(f)
a2=c.f
a2.a.uniform3f(a2.d,i.a,i.b,i.c)
f.gar()
i=f.gdQ(f)
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gbK()
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gbI(f)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gar()
if(!C.b.U(m,i)){i.a=m.length
m.push(i)}i=f.gar()
b=i.gaW(i)
if(b){b=c.r
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.t)(b3),++g){o=b3[g].a
l=a0.h(0,o)
if(l==null)l=0
o=b2.a.cs.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.ch
if(b3.length>0){p=b4.db
a=p.ga3(p)
a3=new H.x(t.a)
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.t)(p),++g){f=p[g]
e=f.gai()
d=a3.h(0,e)
if(d==null)d=0
a3.j(0,e,d+1)
c=J.D(b2.a.cv.h(0,e),d)
a4=a.l(0,f.ga3(f))
i=f.ga3(f)
b=$.b_
i=i.b1(b==null?$.b_=new V.ac(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=$.b_
i=a4.b1(i==null?$.b_=new V.ac(0,0,0):i)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gW(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gar()
i=a4.ee(0)
b=i.a
a1=i.b
a2=i.c
a5=i.e
a6=i.f
a7=i.r
a8=i.y
a9=i.z
i=i.Q
b0=c.d
b0.toString
j=new Float32Array(H.cl(new V.en(b,a1,a2,a5,a6,a7,a8,a9,i).a7(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,j)
f.gar()
i=f.gar()
if(!C.b.U(m,i)){i.a=m.length
m.push(i)}i=f.gar()
b=i.gaW(i)
if(b){b=c.f
b.toString
a1=i.gaW(i)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.giP(i))}f.gb3()
i=f.geN()
b=c.x
b.toString
a1=i.giz(i)
a2=i.giA(i)
a5=i.giB()
i=i.giy()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gb3()
if(!C.b.U(m,i)){i.a=m.length
m.push(i)}i=f.gb3()
b=i.gaW(i)
if(b){b=c.r
b.toString
a1=i.gaW(i)
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.giP(i))}if(f.gdT()){i=f.gdG()
b=c.y
b.a.uniform1f(b.d,i)
i=f.gdH()
b=c.z
b.a.uniform1f(b.d,i)
i=f.gdI()
b=c.Q
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.t)(b3),++g){o=b3[g].a
l=a3.h(0,o)
if(l==null)l=0
o=b2.a.cu.h(0,o)
o.a.uniform1i(o.d,l)}}b3=r.cx
if(b3.length>0){p=b4.db
a=p.ga3(p)
b1=new H.x(t.a)
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.t)(p),++g){f=p[g]
e=f.gai()
d=b1.h(0,e)
if(d==null)d=0
b1.j(0,e,d+1)
c=J.D(b2.a.cz.h(0,e),d)
i=f.gjd(f)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gdQ(f).Y()
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=a.b1(f.gjd(f))
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gW(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gar()
i=f.gbK()
b=c.f
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gbI(f)
b=c.r
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gjT()
b=c.x
b.a.uniform1f(b.d,i)
i=f.gjU()
b=c.y
b.a.uniform1f(b.d,i)
f.gar()
i=f.gar()
if(!C.b.U(m,i)){i.a=m.length
m.push(i)}i=f.gar()
b=i.gaW(i)
if(b){b=c.dx
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}f.gb3()
i=f.geN()
b=c.z
b.toString
a1=i.giz(i)
a2=i.giA(i)
a5=i.giB()
i=i.giy()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gb3()
if(!C.b.U(m,i)){i.a=m.length
m.push(i)}i=f.gb3()
b=i.gaW(i)
if(b){b=c.dy
a1=i.d
a2=b.a
b=b.d
if(!a1)a2.uniform1i(b,0)
else a2.uniform1i(b,i.a)}if(f.gjI()){i=f.gjH()
b=c.Q
b.a.uniform1f(b.d,i)
i=f.gjG()
b=c.ch
b.a.uniform1f(b.d,i)}if(f.gdT()){i=f.gdG()
b=c.cx
b.a.uniform1f(b.d,i)
i=f.gdH()
b=c.cy
b.a.uniform1f(b.d,i)
i=f.gdI()
b=c.db
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.t)(b3),++g){o=b3[g].a
l=b1.h(0,o)
if(l==null)l=0
o=b2.a.cw.h(0,o)
o.a.uniform1i(o.d,l)}}}if(r.f.b){b2.am(m,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.at(b3.dY,p)}if(r.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga3(p).ee(0)}b3=b3.id
b3.toString
b3.ac(p.a7(0,!0))}if(r.db){b2.am(m,b2.ch)
b3=b2.a
p=b2.ch
b3.hP(b3.dZ,p)
b3=r.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.e_
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.at(b3.e0,p)}b3=r.x
p=b3.a
if(p||b3.b||!1){o=b2.a
i=b2.cy.ch
o=o.e1
o.a.uniform1f(o.d,i)}if(p){p=b2.a
o=b2.cy.f
p=p.e2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.am(m,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.at(b3.e3,p)}}b3=r.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
i=b2.db.f
p=p.e4
p.a.uniform1f(p.d,i)}if(b3.b){b2.am(m,b2.db.d)
p=b2.a
i=b2.db.d
p.at(p.e5,i)}p=b4.a
p.enable(3042)
p.blendFunc(770,771)}for(p=b4.a,k=0;k<m.length;++k){i=m[k]
if(!i.c&&i.d){i.c=!0
p.activeTexture(33984+i.a)
p.bindTexture(3553,i.b)}}i=t.aP.a(b5.e)
i.aE(b4)
i.aI(b4)
i.eF(b4)
if(!o||b3.b||!1)p.disable(3042)
for(k=0;k<m.length;++k){b3=m[k]
if(b3.c){b3.c=!1
p.activeTexture(33984+b3.a)
p.bindTexture(3553,null)}}b3=b2.a
b3.toString
p.useProgram(null)
b3.x.dR()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dd().b9}}
O.j0.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.dS(a,C.c.a5(b+3,4)*4))}}
O.j1.prototype={
$2:function(a,b){return J.dI(a.a,b.a)}}
O.j2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.e3(a,C.c.a5(b+3,4)*4))}}
O.j3.prototype={
$2:function(a,b){return J.dI(a.a,b.a)}}
O.j4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.eK(a,C.c.a5(b+3,4)*4))}}
O.j5.prototype={
$2:function(a,b){return J.dI(a.a,b.a)}}
O.j6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.n()
return this.b.push(new A.eX(a,C.c.a5(b+3,4)*4))}}
O.j7.prototype={
$2:function(a,b){return J.dI(a.a,b.a)}}
O.iV.prototype={
cc:function(a){var s=this,r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
r=new D.w(s.b,r,a)
r.b=!0
s.a.C(r)}},
aC:function(){this.cV()
this.cc(1)},
saf:function(a,b){var s,r=this
if(b==null)b=1
s=r.c.b
if(b<=0){r.aP(new A.X(!1,s,!1))
r.cc(0)}else{r.aP(new A.X(!0,s,!1))
r.cc(b>=1?1:b)}}}
O.cQ.prototype={
C:function(a){return this.a.C(a)},
bN:function(){return this.C(null)},
aC:function(){},
aP:function(a){var s,r,q=this
if(!q.c.w(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.aC()
s=q.a
s.a=null
s.C(null)}},
sbg:function(a){var s,r=this,q=r.c
if(!q.b)r.aP(new A.X(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gB().a_(0,r.gbn())
s=r.d
r.d=a
a.gB().m(0,r.gbn())
q=new D.w(r.b+".texture2D",s,r.d)
q.b=!0
r.a.C(q)}}}
O.iW.prototype={}
O.aW.prototype={
dt:function(a){var s,r,q=this
if(!q.f.w(0,a)){s=q.f
q.f=a
r=new D.w(q.b+".color",s,a)
r.b=!0
q.a.C(r)}},
aC:function(){this.cV()
this.dt(new V.S(1,1,1))},
sW:function(a,b){this.aP(new A.X(!0,this.c.b,!1))
this.dt(b)}}
O.iY.prototype={}
O.iZ.prototype={
aC:function(){var s,r=this
r.cW()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
s=new D.w(r.b+".refraction",s,1)
s.b=!0
r.a.C(s)}}}
O.j_.prototype={
cd:function(a){var s=this,r=s.ch
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
r=new D.w(s.b+".shininess",r,a)
r.b=!0
s.a.C(r)}},
aC:function(){this.cW()
this.cd(100)}}
O.f3.prototype={}
T.f6.prototype={}
T.jw.prototype={}
T.jx.prototype={
gB:function(){var s=this.y
return s==null?this.y=D.M():s}}
T.jy.prototype={
ba:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.jx()
r.a=0
r.b=o
r.d=r.c=!1
W.T(s,"load",new T.jz(this,r,s,!1,o,!1,!1),!1)
return r},
hO:function(a,b,c){var s,r,q,p
b=V.mq(b)
s=V.mq(a.width)
r=V.mq(a.height)
s=Math.min(s,b)
r=Math.min(r,b)
if(a.width===s&&a.height===r)return a
else{q=W.lM()
q.width=s
q.height=r
p=C.j.eK(q,"2d")
p.imageSmoothingEnabled=!1
p.drawImage(a,0,0,q.width,q.height)
return P.r1(p.getImageData(0,0,q.width,q.height))}}}
T.jz.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.hO(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,q.f?1:0)
C.Y.jy(o,p,0,6408,6408,5121,r)
if(q.r)o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.iC()}++s.e}}
X.lL.prototype={}
X.ih.prototype={
gB:function(){var s=this.x
return s==null?this.x=D.M():s}}
X.eE.prototype={
gB:function(){var s=this.f
return s==null?this.f=D.M():s},
aL:function(a){var s=this.f
if(s!=null)s.G(a)},
f0:function(){return this.aL(null)},
sbb:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gB().a_(0,q.gd1())
r=q.b
q.b=a
if(a!=null)a.gB().m(0,q.gd1())
s=new D.w("mover",r,q.b)
s.b=!0
q.aL(s)}}}
X.ju.prototype={}
V.hU.prototype={
a9:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if(j.c==null)return
s=j.d.length
r=P.fq().gaY().h(0,j.a)
if(r==null||r.length<=s){q=d
p=!0}else{if(s>=r.length)return H.b(r,s)
q=r[s]==="1"
p=!1}c.$1(q)
o=document
n=o.createElement("label")
m=n.style
m.whiteSpace="nowrap"
J.dJ(j.c).m(0,n)
l=W.mD("checkbox")
l.checked=q
W.T(l,"change",new V.hV(j,c,l,s),!1)
n.children
n.appendChild(l)
k=o.createElement("span")
k.textContent=b
n.children
n.appendChild(k)
J.dJ(j.c).m(0,o.createElement("br"))
j.d.push(l)
if(p)j.dC(s,q)},
t:function(a,b,c){return this.a9(a,b,c,!1)},
dC:function(a,b){var s,r,q,p,o,n=this.a,m=P.fq().gaY().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.j5(m,a-s+1,"0")
r=a>0?C.a.u(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.ah(m,s)
q=P.fq()
s=t.X
p=P.mJ(q.gaY(),s,s)
p.j(0,n,r)
o=q.cK(0,p)
n=window.history
s=o.gbw()
n.toString
n.replaceState(new P.hi([],[]).bi(""),"",s)}}
V.hV.prototype={
$1:function(a){var s=this,r=s.c
s.b.$1(r.checked)
s.a.dC(s.d,r.checked)}}
V.lD.prototype={
$1:function(a){var s=C.d.eC(this.a.giN(),2)
if(s!=="0.00")P.hF(s+" fps")}}
V.je.prototype={
a9:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if(k.c==null)return
s=k.a
r=P.fq().gaY().h(0,H.h(s))
if(r==null)if(d){c.$0()
k.dB(b)
q=!0}else q=!1
else if(r===b){c.$0()
q=!0}else q=!1
p=document
o=p.createElement("label")
n=o.style
n.whiteSpace="nowrap"
J.dJ(k.c).m(0,o)
m=W.mD("radio")
m.checked=q
m.name=s
W.T(m,"change",new V.jf(k,m,c,b),!1)
o.children
o.appendChild(m)
l=p.createElement("span")
l.textContent=b
o.children
o.appendChild(l)
J.dJ(k.c).m(0,p.createElement("br"))},
t:function(a,b,c){return this.a9(a,b,c,!1)},
dB:function(a){var s,r,q=P.fq(),p=t.X,o=P.mJ(q.gaY(),p,p)
o.j(0,this.a,a)
s=q.cK(0,o)
p=window.history
r=s.gbw()
p.toString
p.replaceState(new P.hi([],[]).bi(""),"",r)}}
V.jf.prototype={
$1:function(a){var s=this
if(s.b.checked){s.c.$0()
s.a.dB(s.d)}}}
V.jp.prototype={
eW:function(a,b){var s,r,q,p,o=document,n=o.body,m=o.createElement("div")
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
W.T(o,"scroll",new V.jr(m),!1)},
dE:function(a){var s,r,q,p,o,n,m,l
this.hR()
s=document
r=s.createElement("div")
r.className="textPar"
q=this.b
p=C.b.iS(a)
q.toString
p=new H.P(p)
p=new P.cj(q.eD(new H.c1(p,p.gk(p))).a())
for(;p.A();){q=p.gI(p)
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
if(H.o1(q,"|",0)){n=q.split("|")
m=s.createElement("a")
m.className="linkPar"
if(1>=n.length)return H.b(n,1)
m.href=n[1]
m.textContent=n[0]
r.appendChild(m)}else{l=P.mg(C.T,q,C.f,!1)
m=s.createElement("a")
m.className="linkPar"
m.href="#"+H.h(l)
m.textContent=q
r.appendChild(m)}break
case"Other":o=s.createElement("div")
o.className="normalPar"
o.textContent=q.b
r.appendChild(o)
break}}this.a.appendChild(r)},
ih:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k)
r=k.insertRow(-1)
s=t.bY
q=s.a(r.insertCell(-1)).style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
for(p=0;p<3;++p){o=l.createElement("div")
o.id=a[p]
q=o.style
q.textAlign="left"
q=o.style
q.verticalAlign="top"
n=s.a(r.insertCell(-1))
q=n.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=m
q.marginRight=m
n.appendChild(o)}},
hR:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other"
if(this.b!=null)return
s=new L.jC()
s.a=new H.x(t.cn)
s.b=new H.x(t.w)
s.c=P.mK(t.X)
s.d=s.P(0,o)
r=s.P(0,o).v(0,n)
q=K.ag(new H.P("*"))
r.a.push(q)
r.c=!0
r=s.P(0,n).v(0,n)
q=new K.bf()
p=t.L
q.a=H.d([],p)
r.a.push(q)
r=K.ag(new H.P("*"))
q.a.push(r)
r=s.P(0,n).v(0,"BoldEnd")
q=K.ag(new H.P("*"))
r.a.push(q)
r.c=!0
r=s.P(0,o).v(0,m)
q=K.ag(new H.P("_"))
r.a.push(q)
r.c=!0
r=s.P(0,m).v(0,m)
q=new K.bf()
q.a=H.d([],p)
r.a.push(q)
r=K.ag(new H.P("_"))
q.a.push(r)
r=s.P(0,m).v(0,l)
q=K.ag(new H.P("_"))
r.a.push(q)
r.c=!0
r=s.P(0,o).v(0,k)
q=K.ag(new H.P("`"))
r.a.push(q)
r.c=!0
r=s.P(0,k).v(0,k)
q=new K.bf()
q.a=H.d([],p)
r.a.push(q)
r=K.ag(new H.P("`"))
q.a.push(r)
r=s.P(0,k).v(0,"CodeEnd")
q=K.ag(new H.P("`"))
r.a.push(q)
r.c=!0
r=s.P(0,o).v(0,j)
q=K.ag(new H.P("["))
r.a.push(q)
r.c=!0
r=s.P(0,j).v(0,i)
q=K.ag(new H.P("|"))
r.a.push(q)
q=s.P(0,j).v(0,h)
r=K.ag(new H.P("]"))
q.a.push(r)
q.c=!0
q=s.P(0,j).v(0,j)
r=new K.bf()
r.a=H.d([],p)
q.a.push(r)
q=K.ag(new H.P("|]"))
r.a.push(q)
q=s.P(0,i).v(0,h)
r=K.ag(new H.P("]"))
q.a.push(r)
q.c=!0
q=s.P(0,i).v(0,i)
r=new K.bf()
r.a=H.d([],p)
q.a.push(r)
q=K.ag(new H.P("|]"))
r.a.push(q)
s.P(0,o).v(0,g).a.push(new K.hJ())
q=s.P(0,g).v(0,g)
r=new K.bf()
r.a=H.d([],p)
q.a.push(r)
q=K.ag(new H.P("*_`["))
r.a.push(q)
q=s.P(0,"BoldEnd")
q.d=q.a.bh(n)
q=s.P(0,l)
q.d=q.a.bh(m)
q=s.P(0,"CodeEnd")
q.d=q.a.bh(k)
q=s.P(0,h)
q.d=q.a.bh("Link")
q=s.P(0,g)
q.d=q.a.bh(g)
this.b=s}}
V.jr.prototype={
$1:function(a){P.n9(C.n,new V.jq(this.a))}}
V.jq.prototype={
$0:function(){var s=C.d.ax(document.documentElement.scrollTop),r=this.a.style,q=H.h(-0.01*s)+"px"
r.top=q}}
G.l3.prototype={
$1:function(a){var s
this.a.a=a
s=this.b.y.a
if(s.length>1)s[0].b=a}}
G.l4.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.Q!==a){r.Q=a
s=new D.w("showFilled",!a,a)
s.b=!0
r.C(s)}}}
G.l5.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.ch!==a){r.ch=a
s=new D.w("showWireFrame",!a,a)
s.b=!0
r.C(s)}}}
G.lg.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.cx!==a){r.cx=a
s=new D.w("showVertices",!a,a)
s.b=!0
r.C(s)}}}
G.lr.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.cy!==a){r.cy=a
s=new D.w("showNormals",!a,a)
s.b=!0
r.C(s)}}}
G.lt.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.db!==a){r.db=a
s=new D.w("showBinormals",!a,a)
s.b=!0
r.C(s)}}}
G.lu.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.dx!==a){r.dx=a
s=new D.w("showTangentals",!a,a)
s.b=!0
r.C(s)}}}
G.lv.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.fr!==a){r.fr=a
s=new D.w("showFaceCenters",!a,a)
s.b=!0
r.C(s)}}}
G.lw.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.fx!==a){r.fx=a
s=new D.w("showFaceNormals",!a,a)
s.b=!0
r.C(s)}}}
G.lx.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.fy!==a){r.fy=a
s=new D.w("showFaceBinormals",!a,a)
s.b=!0
r.C(s)}}}
G.ly.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.go!==a){r.go=a
s=new D.w("showFaceTangentals",!a,a)
s.b=!0
r.C(s)}}}
G.l6.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.id!==a){r.id=a
s=new D.w("showColorFill",!a,a)
s.b=!0
r.C(s)}}}
G.l7.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k1!==a){r.k1=a
s=new D.w("showTxt2DColor",!a,a)
s.b=!0
r.C(s)}}}
G.l8.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.dy!==a){r.dy=a
s=new D.w("showTxtCube",!a,a)
s.b=!0
r.C(s)}}}
G.l9.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k2!==a){r.k2=a
s=new D.w("showWeight",!a,a)
s.b=!0
r.C(s)}}}
G.la.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k3!==a){r.k3=a
s=new D.w("showAxis",!a,a)
s.b=!0
r.C(s)}}}
G.lb.prototype={
$1:function(a){var s,r=this.a
a=a===!0
if(r.k4!==a){r.k4=a
s=new D.w("showAABB",!a,a)
s.b=!0
r.C(s)}}}
G.lz.prototype={
$1:function(a){var s=E.i7(null)
s.scS(0,a.c)
C.b.q(a.y.a,new G.lA(s,this))
return s}}
G.lA.prototype={
$1:function(a){this.a.y.m(0,this.b.$1(a))}}
G.lB.prototype={
eJ:function(a){var s=0,r=P.a6(t.z),q=this,p,o,n,m,l
var $async$$1=P.a7(function(b,c){if(b===1)return P.a2(c,r)
while(true)switch(s){case 0:s=2
return P.ae(O.eB(a,q.b.f),$async$$1)
case 2:l=c
l.jq(3.5)
p=q.c
o=p.y
n=o.a
if(n.length>0){o.a=H.d([],o.$ti.L("u<ak.T*>"))
o=o.d
if(o!=null)o.$2(0,n)}p.y.m(0,l)
l.b=q.a.a
m=q.d.$1(l)
m.sb0(q.e)
p.y.m(0,m)
return P.a3(null,r)}})
return P.a4($async$$1,r)},
$1:function(a){return this.eJ(a)}}
G.lc.prototype={
$0:function(){var s=0,r=P.a6(t.P),q=this
var $async$$0=P.a7(function(a,b){if(a===1)return P.a2(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/Cube.obj")
return P.a3(null,r)}})
return P.a4($async$$0,r)}}
G.ld.prototype={
$0:function(){var s=0,r=P.a6(t.P),q=this
var $async$$0=P.a7(function(a,b){if(a===1)return P.a2(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/tree/tree.obj")
return P.a3(null,r)}})
return P.a4($async$$0,r)}}
G.le.prototype={
$0:function(){var s=0,r=P.a6(t.P),q=this
var $async$$0=P.a7(function(a,b){if(a===1)return P.a2(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/Wolf.obj")
return P.a3(null,r)}})
return P.a4($async$$0,r)}}
G.lf.prototype={
$0:function(){var s=0,r=P.a6(t.P),q=this
var $async$$0=P.a7(function(a,b){if(a===1)return P.a2(b,r)
while(true)switch(s){case 0:q.a.$1("../resources/plant/plant.obj")
return P.a3(null,r)}})
return P.a4($async$$0,r)}}
G.lh.prototype={
$0:function(){this.a.sag(0.01)}}
G.li.prototype={
$0:function(){this.a.sag(0.02)}}
G.lj.prototype={
$0:function(){this.a.sag(0.04)}}
G.lk.prototype={
$0:function(){this.a.sag(0.06)}}
G.ll.prototype={
$0:function(){this.a.sag(0.08)}}
G.lm.prototype={
$0:function(){this.a.sag(0.1)}}
G.ln.prototype={
$0:function(){this.a.sag(0.2)}}
G.lo.prototype={
$0:function(){this.a.sag(0.4)}}
G.lp.prototype={
$0:function(){this.a.sag(0.6)}}
G.lq.prototype={
$0:function(){this.a.sag(0.8)}}
G.ls.prototype={
$0:function(){this.a.sag(1)}};(function aliases(){var s=J.a.prototype
s.eQ=s.i
s=J.bd.prototype
s.eR=s.i
s=K.e9.prototype
s.eP=s.aX
s.cU=s.i
s=O.cQ.prototype
s.cV=s.aC
s=O.aW.prototype
s.cW=s.aC})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"qh","oQ",27)
r(P,"qW","ps",8)
r(P,"qX","pt",8)
r(P,"qY","pu",8)
q(P,"nS","qR",10)
p(P.db.prototype,"giq",0,1,null,["$2","$1"],["bB","dO"],19,0)
r(W,"tw","i5",28)
var k
p(k=E.by.prototype,"gem",0,0,null,["$1","$0"],["en","j2"],1,0)
p(k,"geo",0,0,null,["$1","$0"],["ep","j3"],1,0)
p(k,"gek",0,0,null,["$1","$0"],["el","j1"],1,0)
p(k,"gei",0,0,null,["$1","$0"],["ej","iZ"],1,0)
o(k,"giX","iY",5)
o(k,"gj_","j0",5)
p(k=E.f7.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],1,0)
n(k,"gjp","ez",10)
m(k=X.fr.prototype,"gh4","h5",6)
m(k,"gfT","fU",6)
m(k,"gfZ","h_",3)
m(k,"gh8","h9",11)
m(k,"gh6","h7",11)
m(k,"ghc","hd",3)
m(k,"ghg","hh",3)
m(k,"gh2","h3",3)
m(k,"ghe","hf",3)
m(k,"gh0","h1",3)
m(k,"ghi","hj",24)
m(k,"ghk","hl",6)
m(k,"ghx","hy",7)
m(k,"ght","hu",7)
m(k,"ghv","hw",7)
p(k=D.cJ.prototype,"gdl",0,0,null,["$1","$0"],["dm","ha"],1,0)
m(k,"ghn","ho",25)
o(k,"gfN","fO",12)
o(k,"ghr","hs",12)
l(V.an.prototype,"gk","cE",13)
l(V.Q.prototype,"gk","cE",13)
p(k=U.bX.prototype,"gaN",0,0,null,["$1","$0"],["R","ae"],1,0)
o(k,"gfL","fM",14)
o(k,"ghp","hq",14)
p(k=U.d6.prototype,"gaN",0,0,null,["$1","$0"],["R","ae"],1,0)
m(k,"gc_","c0",2)
m(k,"gc1","c2",2)
m(k,"gc3","c4",2)
p(k=U.d7.prototype,"gaN",0,0,null,["$1","$0"],["R","ae"],1,0)
m(k,"gc_","c0",2)
m(k,"gc1","c2",2)
m(k,"gc3","c4",2)
m(k,"gfC","fD",2)
m(k,"gfE","fF",2)
m(k,"gi1","i2",2)
m(k,"gi_","i0",2)
m(k,"ghY","hZ",2)
m(U.d8.prototype,"gfG","fH",2)
p(k=M.e5.prototype,"gay",0,0,null,["$1","$0"],["aA","eY"],1,0)
o(k,"gfV","fW",5)
o(k,"gfX","fY",5)
m(k=O.eb.prototype,"ghT","hU",0)
p(k,"gic",0,1,null,["$2$color","$1"],["dD","ie"],26,0)
m(k,"gi8","i9",0)
m(k,"gfJ","fK",0)
m(k,"gfa","fb",0)
m(k,"ghW","hX",0)
m(k,"gi6","i7",0)
m(k,"gft","fu",0)
m(k,"gfv","fw",0)
m(k,"gfq","fs",0)
m(k,"gfz","fA",0)
m(k,"gff","fg",0)
m(k,"gi4","i5",0)
m(k,"gia","ib",0)
m(k,"gd6","f8",0)
m(k,"gd2","f1",0)
p(k=O.c2.prototype,"gbn",0,0,null,["$1","$0"],["C","bN"],1,0)
p(k,"ghM",0,0,null,["$1","$0"],["dr","hN"],1,0)
o(k,"gfP","fQ",15)
o(k,"gfR","fS",15)
p(O.cQ.prototype,"gbn",0,0,null,["$1","$0"],["C","bN"],1,0)
p(X.eE.prototype,"gd1",0,0,null,["$1","$0"],["aL","f0"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.C,null)
q(P.C,[H.lU,J.a,J.aa,P.J,P.dg,P.j,H.c1,P.ed,H.cE,H.fn,H.cw,H.jF,H.jc,H.cC,H.dq,H.bU,P.aJ,H.iO,H.ek,H.ef,H.fV,H.k7,H.aA,H.fP,P.du,P.fx,P.ci,P.cj,P.ay,P.db,P.dd,P.a9,P.fy,P.cZ,P.f0,P.he,P.d_,P.dN,P.kG,P.dm,P.ks,P.df,P.i,P.hs,P.cP,P.dX,P.kF,P.kE,P.b6,P.as,P.U,P.bx,P.eD,P.cX,P.fM,P.ig,P.q,P.F,P.a0,P.m0,P.al,P.hh,P.A,P.a1,P.bL,P.jP,P.h7,W.hY,W.dW,W.lQ,W.m5,W.N,W.cF,P.kx,P.dw,P.h5,P.bi,K.hJ,K.e9,K.iU,K.jl,L.eZ,L.f8,L.f9,L.jC,O.ak,O.cR,E.hS,E.by,E.bS,E.c8,E.fJ,E.jg,E.f7,Z.fu,Z.fv,Z.bT,Z.dU,Z.bZ,Z.b4,D.hT,D.bz,D.V,O.kP,O.hD,O.kQ,X.dV,X.eh,X.iN,X.iS,X.az,X.jb,X.jD,X.fr,D.dR,D.e2,D.Y,D.eI,D.eW,V.S,V.L,V.i9,V.en,V.be,V.aZ,V.ac,V.eO,V.cb,V.an,V.Q,U.d6,U.d7,U.d8,M.e5,A.dO,A.hN,A.X,A.dS,A.e3,A.eK,A.eX,A.iX,A.d1,A.d2,A.d4,A.d5,A.fd,A.jM,F.cD,F.cK,F.eH,F.aB,F.jm,F.jn,F.jo,F.fs,F.k_,F.k0,F.k3,F.k4,O.f3,O.cQ,O.iY,T.jy,X.lL,X.ju,X.eE,V.hU,V.je,V.jp])
q(J.a,[J.ee,J.c0,J.bd,J.u,J.bD,J.aU,H.cS,H.a_,W.e,W.hI,W.bv,W.aT,W.I,W.fD,W.ax,W.i0,W.i1,W.fF,W.cA,W.fH,W.i2,W.m,W.fN,W.aH,W.ii,W.fR,W.bC,W.iR,W.j8,W.fW,W.fX,W.aK,W.fY,W.h_,W.aL,W.h3,W.h6,W.aM,W.h8,W.aN,W.hd,W.aD,W.hk,W.jB,W.aO,W.hm,W.jE,W.jU,W.ht,W.hv,W.hx,W.hz,W.hB,P.aV,P.fT,P.aY,P.h1,P.jd,P.hf,P.b1,P.ho,P.hO,P.fz,P.eP,P.hb])
q(J.bd,[J.eF,J.bK,J.aI])
r(J.iK,J.u)
q(J.bD,[J.cI,J.cH])
q(P.J,[H.ei,H.ey,H.eg,H.fm,H.eR,H.fK,P.dM,P.ez,P.aw,P.fo,P.fl,P.cY,P.dZ,P.e0])
r(P.cM,P.dg)
q(P.cM,[H.cd,W.fB,W.fA,P.e7])
r(H.P,H.cd)
q(P.j,[H.o,H.bF,H.d9,P.cG])
r(H.cB,H.bF)
q(P.ed,[H.el,H.fw])
r(H.cx,H.cw)
q(H.bU,[H.jv,H.iM,H.iL,H.kZ,H.l_,H.l0,P.k9,P.k8,P.ka,P.kb,P.kB,P.kA,P.kH,P.kI,P.kU,P.kd,P.kl,P.kh,P.ki,P.kj,P.kf,P.kk,P.ke,P.ko,P.kp,P.kn,P.km,P.kS,P.kv,P.ku,P.kw,P.iP,P.iT,P.jX,P.jY,P.i3,P.i4,P.jT,P.jQ,P.jR,P.jS,P.kD,P.kC,P.kK,P.kJ,P.kL,P.kM,W.ij,W.ik,W.j9,W.ja,W.jk,W.jt,W.kc,P.ky,P.kz,P.kV,P.id,P.ie,P.hP,E.jh,E.ji,E.jj,E.jA,D.ib,D.ic,F.k6,F.k5,F.k1,F.k2,O.iw,O.ix,O.iH,O.iG,O.iI,O.iJ,O.iC,O.iv,O.io,O.iy,O.iB,O.is,O.it,O.ir,O.iu,O.ip,O.iq,O.iz,O.iA,O.iD,O.iE,O.iF,O.im,O.il,O.j0,O.j1,O.j2,O.j3,O.j4,O.j5,O.j6,O.j7,T.jz,V.hV,V.lD,V.jf,V.jr,V.jq,G.l3,G.l4,G.l5,G.lg,G.lr,G.lt,G.lu,G.lv,G.lw,G.lx,G.ly,G.l6,G.l7,G.l8,G.l9,G.la,G.lb,G.lz,G.lA,G.lB,G.lc,G.ld,G.le,G.lf,G.lh,G.li,G.lj,G.lk,G.ll,G.lm,G.ln,G.lo,G.lp,G.lq,G.ls])
q(H.jv,[H.js,H.cu])
r(P.cO,P.aJ)
r(H.x,P.cO)
r(H.cL,H.o)
r(H.c6,H.a_)
q(H.c6,[H.di,H.dk])
r(H.dj,H.di)
r(H.bG,H.dj)
r(H.dl,H.dk)
r(H.cT,H.dl)
q(H.cT,[H.et,H.eu,H.ev,H.ew,H.ex,H.cU,H.c7])
r(H.dv,H.fK)
r(P.dr,P.cG)
r(P.da,P.db)
r(P.kt,P.kG)
r(P.de,P.dm)
r(P.dz,P.cP)
r(P.ce,P.dz)
q(P.dX,[P.hQ,P.i6])
r(P.e_,P.f0)
q(P.e_,[P.hR,P.jZ,P.jW])
r(P.jV,P.i6)
q(P.U,[P.a8,P.n])
q(P.aw,[P.ca,P.ea])
r(P.fE,P.bL)
q(W.e,[W.v,W.e6,W.bB,W.c3,W.aC,W.dn,W.aE,W.am,W.ds,W.ft,W.cg,P.dQ,P.b9])
q(W.v,[W.E,W.aG])
q(W.E,[W.r,P.p])
q(W.r,[W.dK,W.dL,W.bw,W.e8,W.bY,W.c_,W.eS,W.bh])
r(W.hX,W.aT)
r(W.cy,W.fD)
q(W.ax,[W.hZ,W.i_])
r(W.fG,W.fF)
r(W.cz,W.fG)
r(W.fI,W.fH)
r(W.e4,W.fI)
r(W.at,W.bv)
r(W.fO,W.fN)
r(W.bW,W.fO)
r(W.fS,W.fR)
r(W.bA,W.fS)
r(W.ba,W.bB)
q(W.m,[W.b3,W.bI])
q(W.b3,[W.bE,W.au,W.bJ])
r(W.ep,W.fW)
r(W.eq,W.fX)
r(W.fZ,W.fY)
r(W.er,W.fZ)
r(W.h0,W.h_)
r(W.cV,W.h0)
r(W.h4,W.h3)
r(W.eG,W.h4)
r(W.eQ,W.h6)
r(W.dp,W.dn)
r(W.eU,W.dp)
r(W.h9,W.h8)
r(W.eV,W.h9)
r(W.f_,W.hd)
r(W.hl,W.hk)
r(W.f4,W.hl)
r(W.dt,W.ds)
r(W.f5,W.dt)
r(W.hn,W.hm)
r(W.fa,W.hn)
r(W.bj,W.au)
r(W.hu,W.ht)
r(W.fC,W.hu)
r(W.dc,W.cA)
r(W.hw,W.hv)
r(W.fQ,W.hw)
r(W.hy,W.hx)
r(W.dh,W.hy)
r(W.hA,W.hz)
r(W.ha,W.hA)
r(W.hC,W.hB)
r(W.hj,W.hC)
r(W.fL,P.cZ)
r(P.hi,P.kx)
r(P.ah,P.h5)
r(P.fU,P.fT)
r(P.ej,P.fU)
r(P.h2,P.h1)
r(P.eA,P.h2)
r(P.hg,P.hf)
r(P.f1,P.hg)
r(P.hp,P.ho)
r(P.fb,P.hp)
r(P.dP,P.fz)
r(P.eC,P.b9)
r(P.hc,P.hb)
r(P.eY,P.hc)
q(K.e9,[K.bf,L.fc])
q(E.hS,[Z.dT,A.cc,T.f6])
q(D.V,[D.bb,D.bc,D.w,O.eM,X.eJ])
q(X.eJ,[X.cN,X.c4,X.c5,X.d0])
q(O.ak,[D.cJ,U.bX])
q(D.hT,[U.hW,U.Z])
r(U.cv,U.Z)
q(A.cc,[A.ec,A.em])
q(A.fd,[A.ff,A.jJ,A.jK,A.jL,A.jH,A.fe,A.jI,A.fg,A.fh,A.jN,A.fi,A.d3,A.fj,A.fk])
q(O.f3,[O.eb,O.c2])
q(O.cQ,[O.iV,O.iW,O.aW])
q(O.aW,[O.iZ,O.j_])
r(T.jw,T.f6)
r(T.jx,T.jw)
r(X.ih,X.ju)
s(H.cd,H.fn)
s(H.di,P.i)
s(H.dj,H.cE)
s(H.dk,P.i)
s(H.dl,H.cE)
s(P.dg,P.i)
s(P.dz,P.hs)
s(W.fD,W.hY)
s(W.fF,P.i)
s(W.fG,W.N)
s(W.fH,P.i)
s(W.fI,W.N)
s(W.fN,P.i)
s(W.fO,W.N)
s(W.fR,P.i)
s(W.fS,W.N)
s(W.fW,P.aJ)
s(W.fX,P.aJ)
s(W.fY,P.i)
s(W.fZ,W.N)
s(W.h_,P.i)
s(W.h0,W.N)
s(W.h3,P.i)
s(W.h4,W.N)
s(W.h6,P.aJ)
s(W.dn,P.i)
s(W.dp,W.N)
s(W.h8,P.i)
s(W.h9,W.N)
s(W.hd,P.aJ)
s(W.hk,P.i)
s(W.hl,W.N)
s(W.ds,P.i)
s(W.dt,W.N)
s(W.hm,P.i)
s(W.hn,W.N)
s(W.ht,P.i)
s(W.hu,W.N)
s(W.hv,P.i)
s(W.hw,W.N)
s(W.hx,P.i)
s(W.hy,W.N)
s(W.hz,P.i)
s(W.hA,W.N)
s(W.hB,P.i)
s(W.hC,W.N)
s(P.fT,P.i)
s(P.fU,W.N)
s(P.h1,P.i)
s(P.h2,W.N)
s(P.hf,P.i)
s(P.hg,W.N)
s(P.ho,P.i)
s(P.hp,W.N)
s(P.fz,P.aJ)
s(P.hb,P.i)
s(P.hc,W.N)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",a8:"double",U:"num",A:"String",b6:"bool",a0:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["aB*(aB*)","~([V*])","~(V*)","~(au*)","a0(@,@)","~(n*,j<by*>*)","~(m*)","~(bJ*)","~(~())","a0(@)","~()","~(bE*)","~(n*,j<Y*>*)","a8*()","~(n*,j<Z*>*)","~(n*,j<be*>*)","@(@)","~(@)","a0(@,al)","~(C[al?])","a0(C,al)","a9<@>(@)","a0(C?,C?)","bi(@,@)","~(bj*)","b6*(j<Y*>*)","aB*(aB*{color:L*})","n(@,@)","A(e)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pN(v.typeUniverse,JSON.parse('{"aI":"bd","eF":"bd","bK":"bd","ro":"m","ry":"m","rq":"b9","rp":"e","rH":"e","rJ":"e","rn":"p","rA":"p","td":"bI","rr":"r","rE":"r","rB":"v","rx":"v","t9":"am","rv":"b3","rs":"aG","rL":"aG","rI":"au","rD":"bB","rC":"bA","rG":"bG","rF":"a_","ee":{"b6":[]},"c0":{"a0":[]},"bd":{"mE":[]},"u":{"q":["1"],"o":["1"],"j":["1"]},"iK":{"u":["1"],"q":["1"],"o":["1"],"j":["1"]},"bD":{"a8":[],"U":[]},"cI":{"a8":[],"n":[],"U":[]},"cH":{"a8":[],"U":[]},"aU":{"A":[]},"ei":{"J":[]},"P":{"i":["n"],"q":["n"],"o":["n"],"j":["n"],"i.E":"n"},"o":{"j":["1"]},"bF":{"j":["2"]},"cB":{"o":["2"],"j":["2"]},"d9":{"j":["1"]},"cd":{"i":["1"],"q":["1"],"o":["1"],"j":["1"]},"cw":{"F":["1","2"]},"cx":{"F":["1","2"]},"ey":{"J":[]},"eg":{"J":[]},"fm":{"J":[]},"dq":{"al":[]},"eR":{"J":[]},"x":{"F":["1","2"]},"cL":{"o":["1"],"j":["1"]},"ef":{"mZ":[]},"c6":{"y":["1"],"a_":[]},"bG":{"i":["a8"],"y":["a8"],"q":["a8"],"a_":[],"o":["a8"],"j":["a8"],"i.E":"a8"},"cT":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"]},"et":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"eu":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"ev":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"ew":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"ex":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"cU":{"i":["n"],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"c7":{"i":["n"],"bi":[],"y":["n"],"q":["n"],"a_":[],"o":["n"],"j":["n"],"i.E":"n"},"fK":{"J":[]},"dv":{"J":[]},"du":{"d_":[]},"dr":{"j":["1"]},"da":{"db":["1"]},"a9":{"ay":["1"]},"dN":{"J":[]},"de":{"o":["1"],"j":["1"]},"cG":{"j":["1"]},"cM":{"i":["1"],"q":["1"],"o":["1"],"j":["1"]},"cO":{"F":["1","2"]},"aJ":{"F":["1","2"]},"cP":{"F":["1","2"]},"ce":{"F":["1","2"]},"dm":{"o":["1"],"j":["1"]},"a8":{"U":[]},"dM":{"J":[]},"ez":{"J":[]},"aw":{"J":[]},"ca":{"J":[]},"ea":{"J":[]},"fo":{"J":[]},"fl":{"J":[]},"cY":{"J":[]},"dZ":{"J":[]},"eD":{"J":[]},"cX":{"J":[]},"e0":{"J":[]},"n":{"U":[]},"q":{"o":["1"],"j":["1"]},"hh":{"al":[]},"bL":{"fp":[]},"h7":{"fp":[]},"fE":{"fp":[]},"r":{"E":[],"v":[],"e":[]},"dK":{"E":[],"v":[],"e":[]},"dL":{"E":[],"v":[],"e":[]},"bw":{"E":[],"v":[],"e":[]},"aG":{"v":[],"e":[]},"cz":{"i":["ah<U>"],"q":["ah<U>"],"y":["ah<U>"],"o":["ah<U>"],"j":["ah<U>"],"i.E":"ah<U>"},"cA":{"ah":["U"]},"e4":{"i":["A"],"q":["A"],"y":["A"],"o":["A"],"j":["A"],"i.E":"A"},"fB":{"i":["E"],"q":["E"],"o":["E"],"j":["E"],"i.E":"E"},"E":{"v":[],"e":[]},"at":{"bv":[]},"bW":{"i":["at"],"q":["at"],"y":["at"],"o":["at"],"j":["at"],"i.E":"at"},"e6":{"e":[]},"e8":{"E":[],"v":[],"e":[]},"bA":{"i":["v"],"q":["v"],"y":["v"],"o":["v"],"j":["v"],"i.E":"v"},"ba":{"e":[]},"bB":{"e":[]},"bY":{"E":[],"v":[],"e":[]},"c_":{"E":[],"v":[],"e":[]},"dW":{"E":[],"v":[],"e":[]},"bE":{"m":[]},"c3":{"e":[]},"ep":{"F":["A","@"]},"eq":{"F":["A","@"]},"er":{"i":["aK"],"q":["aK"],"y":["aK"],"o":["aK"],"j":["aK"],"i.E":"aK"},"au":{"m":[]},"fA":{"i":["v"],"q":["v"],"o":["v"],"j":["v"],"i.E":"v"},"v":{"e":[]},"cV":{"i":["v"],"q":["v"],"y":["v"],"o":["v"],"j":["v"],"i.E":"v"},"eG":{"i":["aL"],"q":["aL"],"y":["aL"],"o":["aL"],"j":["aL"],"i.E":"aL"},"bI":{"m":[]},"eQ":{"F":["A","@"]},"eS":{"E":[],"v":[],"e":[]},"aC":{"e":[]},"eU":{"i":["aC"],"q":["aC"],"y":["aC"],"e":[],"o":["aC"],"j":["aC"],"i.E":"aC"},"eV":{"i":["aM"],"q":["aM"],"y":["aM"],"o":["aM"],"j":["aM"],"i.E":"aM"},"f_":{"F":["A","A"]},"bh":{"E":[],"v":[],"e":[]},"aE":{"e":[]},"am":{"e":[]},"f4":{"i":["am"],"q":["am"],"y":["am"],"o":["am"],"j":["am"],"i.E":"am"},"f5":{"i":["aE"],"q":["aE"],"y":["aE"],"e":[],"o":["aE"],"j":["aE"],"i.E":"aE"},"bJ":{"m":[]},"fa":{"i":["aO"],"q":["aO"],"y":["aO"],"o":["aO"],"j":["aO"],"i.E":"aO"},"b3":{"m":[]},"ft":{"e":[]},"bj":{"au":[],"m":[]},"cg":{"e":[]},"fC":{"i":["I"],"q":["I"],"y":["I"],"o":["I"],"j":["I"],"i.E":"I"},"dc":{"ah":["U"]},"fQ":{"i":["aH?"],"q":["aH?"],"y":["aH?"],"o":["aH?"],"j":["aH?"],"i.E":"aH?"},"dh":{"i":["v"],"q":["v"],"y":["v"],"o":["v"],"j":["v"],"i.E":"v"},"ha":{"i":["aN"],"q":["aN"],"y":["aN"],"o":["aN"],"j":["aN"],"i.E":"aN"},"hj":{"i":["aD"],"q":["aD"],"y":["aD"],"o":["aD"],"j":["aD"],"i.E":"aD"},"dw":{"bC":[]},"e7":{"i":["E"],"q":["E"],"o":["E"],"j":["E"],"i.E":"E"},"ah":{"h5":["1"]},"ej":{"i":["aV"],"q":["aV"],"o":["aV"],"j":["aV"],"i.E":"aV"},"eA":{"i":["aY"],"q":["aY"],"o":["aY"],"j":["aY"],"i.E":"aY"},"f1":{"i":["A"],"q":["A"],"o":["A"],"j":["A"],"i.E":"A"},"p":{"E":[],"v":[],"e":[]},"fb":{"i":["b1"],"q":["b1"],"o":["b1"],"j":["b1"],"i.E":"b1"},"bi":{"q":["n"],"o":["n"],"j":["n"]},"dP":{"F":["A","@"]},"dQ":{"e":[]},"b9":{"e":[]},"eC":{"e":[]},"eY":{"i":["F<@,@>"],"q":["F<@,@>"],"o":["F<@,@>"],"j":["F<@,@>"],"i.E":"F<@,@>"},"ak":{"j":["1*"],"ak.T":"1"},"bb":{"V":[]},"bc":{"V":[]},"w":{"V":[]},"eM":{"V":[]},"cN":{"V":[]},"c4":{"V":[]},"c5":{"V":[]},"eJ":{"V":[]},"d0":{"V":[]},"dR":{"Y":[]},"e2":{"Y":[]},"cJ":{"ak":["Y*"],"j":["Y*"],"ak.T":"Y*"},"eI":{"Y":[]},"eW":{"Y":[]},"cv":{"Z":[]},"bX":{"ak":["Z*"],"Z":[],"j":["Z*"],"ak.T":"Z*"},"d6":{"Z":[]},"d7":{"Z":[]},"d8":{"Z":[]},"ec":{"cc":[]},"em":{"cc":[]}}'))
H.pM(v.typeUniverse,JSON.parse('{"aa":1,"o":1,"c1":1,"bF":2,"cB":2,"el":2,"d9":1,"fw":1,"cE":1,"fn":1,"cd":1,"cw":2,"cL":1,"ek":1,"c6":1,"cj":1,"dr":1,"dd":2,"cZ":1,"f0":2,"he":1,"df":1,"cG":1,"cM":1,"cO":2,"aJ":2,"hs":2,"cP":2,"dm":1,"dg":1,"dz":2,"dX":2,"e_":2,"j":1,"ed":1,"fL":1,"N":1,"cF":1,"bb":1,"bc":1,"w":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",p:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",k:"May not create a line with a null end vertex.",e:"May not create a line with a null start vertex.",E:"May not create a line with a start vertex which is not attached to a shape.",T:"May not create a line with vertices attached to different shapes."}
var t=(function rtii(){var s=H.mn
return{D:s("bv"),G:s("o<@>"),h:s("E"),C:s("J"),aD:s("m"),c8:s("at"),bX:s("bW"),Z:s("rz"),g:s("ay<@>"),u:s("bC"),fS:s("bY"),gk:s("c_"),s:s("u<A>"),gn:s("u<@>"),t:s("u<n>"),x:s("u<dO*>"),bb:s("u<dR*>"),am:s("u<dS*>"),g0:s("u<dT*>"),aM:s("u<dW*>"),cP:s("u<e2*>"),ed:s("u<e3*>"),b:s("u<cD*>"),aZ:s("u<bZ*>"),B:s("u<cK*>"),L:s("u<iU*>"),p:s("u<be*>"),eb:s("u<eI*>"),v:s("u<aZ*>"),d1:s("u<eK*>"),k:s("u<eH*>"),du:s("u<eW*>"),cA:s("u<eX*>"),eG:s("u<cZ<C*>*>"),i:s("u<A*>"),fG:s("u<f3*>"),bw:s("u<f6*>"),br:s("u<fc*>"),fj:s("u<fd*>"),d6:s("u<d1*>"),dv:s("u<d2*>"),hg:s("u<d3*>"),by:s("u<d4*>"),fF:s("u<d5*>"),cz:s("u<Q*>"),j:s("u<fs*>"),fz:s("u<hD*>"),m:s("u<a8*>"),V:s("u<n*>"),f:s("u<~(V*)*>"),T:s("c0"),eH:s("mE"),M:s("aI"),aU:s("y<@>"),f5:s("x<A*,bT*>"),o:s("x<A*,c2*>"),h9:s("x<A*,cc*>"),cn:s("x<A*,eZ*>"),dO:s("x<A*,A*>"),w:s("x<A*,f9*>"),en:s("x<n*,q<d1*>*>"),af:s("x<n*,q<d2*>*>"),gr:s("x<n*,q<d4*>*>"),gb:s("x<n*,q<d5*>*>"),J:s("x<n*,ff*>"),E:s("x<n*,b6*>"),a:s("x<n*,n*>"),aH:s("q<@>"),eO:s("F<@,@>"),bK:s("c3"),bZ:s("cS"),dD:s("a_"),bm:s("c7"),P:s("a0"),K:s("C"),I:s("ah<U>"),fv:s("mZ"),N:s("A"),bY:s("bh"),aF:s("d_"),gc:s("bi"),ak:s("bK"),U:s("ce<A,A>"),R:s("fp"),bj:s("da<ba>"),ao:s("a9<ba>"),eI:s("a9<@>"),cJ:s("b6"),gR:s("a8"),z:s("@"),bI:s("@(C)"),W:s("@(C,al)"),S:s("n"),aP:s("bT*"),fr:s("bw*"),l:s("by*"),gj:s("Y*"),dn:s("cN*"),g1:s("F<A*,c2*>*"),hc:s("be*"),d:s("c4*"),F:s("c5*"),ah:s("Z*"),A:s("0&*"),_:s("C*"),X:s("A*"),eB:s("f8*"),eP:s("d0*"),n:s("fe*"),r:s("fg*"),y:s("fh*"),O:s("fi*"),q:s("d3*"),c:s("fj*"),Q:s("fk*"),e:s("n*"),dm:s("~(V*)*"),bG:s("ay<a0>?"),Y:s("C?"),H:s("U")}})();(function constants(){var s=hunkHelpers.makeConstList
C.j=W.bw.prototype
C.N=W.ba.prototype
C.O=J.a.prototype
C.b=J.u.prototype
C.P=J.cH.prototype
C.c=J.cI.prototype
C.i=J.c0.prototype
C.d=J.bD.prototype
C.a=J.aU.prototype
C.Q=J.aI.prototype
C.x=J.eF.prototype
C.Y=P.eP.prototype
C.o=J.bK.prototype
C.y=W.bj.prototype
C.z=W.cg.prototype
C.A=new E.bS("Browser.chrome")
C.p=new E.bS("Browser.firefox")
C.q=new E.bS("Browser.edge")
C.B=new E.bS("Browser.other")
C.a0=new P.hR()
C.C=new P.hQ()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
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
C.I=function(getTagFallback) {
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
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.H=function(hooks) {
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
C.G=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.J=new P.eD()
C.f=new P.jV()
C.K=new P.jZ()
C.e=new P.kt()
C.L=new P.hh()
C.n=new P.bx(0)
C.M=new P.bx(5e6)
C.k=H.d(s([0,0,32776,33792,1,10240,0,0]),t.V)
C.l=H.d(s([0,0,65490,45055,65535,34815,65534,18431]),t.V)
C.m=H.d(s([0,0,26624,1023,65534,2047,65534,2047]),t.V)
C.S=H.d(s([0,0,32722,12287,65534,34815,65534,18431]),t.V)
C.T=H.d(s([0,0,65498,45055,65535,34815,65534,18431]),t.V)
C.h=H.d(s([0,0,24576,1023,65534,34815,65534,18431]),t.V)
C.u=H.d(s([0,0,32754,11263,65534,34815,65534,18431]),t.V)
C.v=H.d(s([0,0,65490,12287,65535,34815,65534,18431]),t.V)
C.R=H.d(s([]),t.i)
C.U=new H.cx(0,{},C.R,H.mn("cx<A*,A*>"))
C.V=new E.c8("OperatingSystem.windows")
C.w=new E.c8("OperatingSystem.mac")
C.W=new E.c8("OperatingSystem.linux")
C.X=new E.c8("OperatingSystem.other")
C.Z=new P.jW(!1)
C.a_=new P.ci(null,2)})();(function staticFields(){$.nr=null
$.aS=0
$.my=null
$.mx=null
$.nU=null
$.nR=null
$.o_=null
$.kW=null
$.l1=null
$.mo=null
$.cm=null
$.dC=null
$.dD=null
$.mk=!1
$.K=C.e
$.ao=H.d([],H.mn("u<C>"))
$.i8=null
$.nO=null
$.mO=null
$.mR=null
$.b_=null
$.n0=null
$.n3=null
$.ng=null
$.nk=null
$.ni=null
$.nj=null
$.nh=null
$.mQ=null})();(function lazyInitializers(){var s=hunkHelpers.lazy
s($,"rw","o6",function(){return H.r8("_$dart_dartClosure")})
s($,"rM","o7",function(){return H.b2(H.jG({
toString:function(){return"$receiver$"}}))})
s($,"rN","o8",function(){return H.b2(H.jG({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rO","o9",function(){return H.b2(H.jG(null))})
s($,"rP","oa",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rS","od",function(){return H.b2(H.jG(void 0))})
s($,"rT","oe",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
s($,"rR","oc",function(){return H.b2(H.nb(null))})
s($,"rQ","ob",function(){return H.b2(function(){try{null.$method$}catch(r){return r.message}}())})
s($,"rV","og",function(){return H.b2(H.nb(void 0))})
s($,"rU","of",function(){return H.b2(function(){try{(void 0).$method$}catch(r){return r.message}}())})
s($,"ta","mr",function(){return P.pr()})
s($,"rW","oh",function(){return new P.jX().$0()})
s($,"rX","oi",function(){return new P.jY().$0()})
s($,"tb","om",function(){return new Int8Array(H.cl(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"te","on",function(){return P.m1("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"tu","oo",function(){return P.qa()})
s($,"t3","ol",function(){return Z.aF(0)})
s($,"rY","oj",function(){return Z.aF(511)})
s($,"t5","aR",function(){return Z.aF(1)})
s($,"t4","aQ",function(){return Z.aF(2)})
s($,"t_","aP",function(){return Z.aF(4)})
s($,"t6","bt",function(){return Z.aF(8)})
s($,"t7","bQ",function(){return Z.aF(16)})
s($,"t0","bP",function(){return Z.aF(32)})
s($,"t1","dH",function(){return Z.aF(64)})
s($,"t2","ok",function(){return Z.aF(96)})
s($,"t8","ct",function(){return Z.aF(128)})
s($,"rZ","bs",function(){return Z.aF(256)})
s($,"ru","o5",function(){return new V.i9()})
s($,"rt","B",function(){return $.o5()})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cS,DataView:H.a_,ArrayBufferView:H.a_,Float32Array:H.bG,Float64Array:H.bG,Int16Array:H.et,Int32Array:H.eu,Int8Array:H.ev,Uint16Array:H.ew,Uint32Array:H.ex,Uint8ClampedArray:H.cU,CanvasPixelArray:H.cU,Uint8Array:H.c7,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLBodyElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLDivElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableColElement:W.r,HTMLTableElement:W.r,HTMLTableRowElement:W.r,HTMLTableSectionElement:W.r,HTMLTemplateElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.hI,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,Blob:W.bv,HTMLCanvasElement:W.bw,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CSSPerspective:W.hX,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cy,MSStyleCSSProperties:W.cy,CSS2Properties:W.cy,CSSImageValue:W.ax,CSSKeywordValue:W.ax,CSSNumericValue:W.ax,CSSPositionValue:W.ax,CSSResourceValue:W.ax,CSSUnitValue:W.ax,CSSURLImageValue:W.ax,CSSStyleValue:W.ax,CSSMatrixComponent:W.aT,CSSRotation:W.aT,CSSScale:W.aT,CSSSkew:W.aT,CSSTranslation:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.hZ,CSSUnparsedValue:W.i_,DataTransferItemList:W.i0,DOMException:W.i1,ClientRectList:W.cz,DOMRectList:W.cz,DOMRectReadOnly:W.cA,DOMStringList:W.e4,DOMTokenList:W.i2,Element:W.E,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,SubmitEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.at,FileList:W.bW,FileWriter:W.e6,HTMLFormElement:W.e8,Gamepad:W.aH,History:W.ii,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,XMLHttpRequest:W.ba,XMLHttpRequestUpload:W.bB,XMLHttpRequestEventTarget:W.bB,ImageData:W.bC,HTMLImageElement:W.bY,HTMLInputElement:W.c_,KeyboardEvent:W.bE,Location:W.iR,MediaList:W.j8,MessagePort:W.c3,MIDIInputMap:W.ep,MIDIOutputMap:W.eq,MimeType:W.aK,MimeTypeArray:W.er,PointerEvent:W.au,MouseEvent:W.au,DragEvent:W.au,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.aL,PluginArray:W.eG,ProgressEvent:W.bI,ResourceProgressEvent:W.bI,RTCStatsReport:W.eQ,HTMLSelectElement:W.eS,SourceBuffer:W.aC,SourceBufferList:W.eU,SpeechGrammar:W.aM,SpeechGrammarList:W.eV,SpeechRecognitionResult:W.aN,Storage:W.f_,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bh,HTMLTableDataCellElement:W.bh,HTMLTableHeaderCellElement:W.bh,TextTrack:W.aE,TextTrackCue:W.am,VTTCue:W.am,TextTrackCueList:W.f4,TextTrackList:W.f5,TimeRanges:W.jB,Touch:W.aO,TouchEvent:W.bJ,TouchList:W.fa,TrackDefaultList:W.jE,CompositionEvent:W.b3,FocusEvent:W.b3,TextEvent:W.b3,UIEvent:W.b3,URL:W.jU,VideoTrackList:W.ft,WheelEvent:W.bj,Window:W.cg,DOMWindow:W.cg,CSSRuleList:W.fC,ClientRect:W.dc,DOMRect:W.dc,GamepadList:W.fQ,NamedNodeMap:W.dh,MozNamedAttrMap:W.dh,SpeechRecognitionResultList:W.ha,StyleSheetList:W.hj,SVGLength:P.aV,SVGLengthList:P.ej,SVGNumber:P.aY,SVGNumberList:P.eA,SVGPointList:P.jd,SVGStringList:P.f1,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.b1,SVGTransformList:P.fb,AudioBuffer:P.hO,AudioParamMap:P.dP,AudioTrackList:P.dQ,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.eC,WebGL2RenderingContext:P.eP,SQLResultSetRowList:P.eY})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
W.dn.$nativeSuperclassTag="EventTarget"
W.dp.$nativeSuperclassTag="EventTarget"
W.ds.$nativeSuperclassTag="EventTarget"
W.dt.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.nY,[])
else G.nY([])})})()
//# sourceMappingURL=test.dart.js.map
